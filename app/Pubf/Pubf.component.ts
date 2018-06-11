 import { Component, OnInit,ViewChild,ElementRef  } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { TextField } from "ui/text-field";
import { EmployeeService } from "./../services/employee/employee.service";
import { Employee } from "./../services/employee/employee.model";
import { ProjectService} from "./../services/project/project.service";
import { Project } from "./../services/project/project.model";
import { Feedback } from "./../services/feedback/feedback.model";
import { FeedbackService } from "./../services/feedback/feedback.service";
import { ItemEventData } from "ui/list-view";
import {SetupItemViewArgs} from "nativescript-angular/directives";

@Component({
     selector: "Pubf",
     moduleId: module.id,
     templateUrl: "./Pubf.component.html",
     styleUrls: ["./Pubf.component.css"],
     providers:[EmployeeService,ProjectService,FeedbackService]
})
export class PubfComponent implements OnInit {
    selectedContextType:number=0;
    selectedContext:number=0;
    selectedType:number=0;
    selectedMode:number=0;
    Modes:Array<string>=["Public","Private","Personalized"];
    Types:Array<string>=["Positive","Négative"];
    ListOfContexts:Array<string>=["Employee","Project","Other"];
    ListOfEmployee:Array<Employee>;
    ListOfProjects:Array<Project>;
    Contexts:Array<string>=[];
    Targets:Array<number>=[this.EmployeeService.getEmployee()];
    Other:boolean=false;
    Context:string="Employee :";
    password:string;
    other:string;
    ErrorOther:boolean=false;
    List:boolean=false;
    feedback:Feedback={id:null,contextType:'Employee',context:'',type:'Positive',mode:'Public',value:'',date:'',targets:null};
    // fdpb:{id_e:number,feedback:Feedback}={id_e:null,feedback:this.feedback};
    // list:Array<{status:boolean,employee:Employee}>=[];
    count:number=0;
    isAdded:number;
    isBusy:boolean=false;
    isTaped:boolean;
    @ViewChild("CB1") FirstCheckBox: ElementRef;
    //ErrorOther:boolean= this.other=="";
    constructor(private EmployeeService:EmployeeService,private ProjectService:ProjectService,private FeedbackService:FeedbackService){
    //     this.selectedContext==0;
    //    // this.Contexts=[];
    //     this.feedback.targets=[];
    //     this.EmployeeService.getAllEmployees().subscribe(
    //         next =>{this.ListOfEmployee=next;
               
    //              for(let i=0;i<=this.ListOfEmployee.length;i++)
    //              {
    //                  this.Contexts.push(this.ListOfEmployee[i].firstname+" "+this.ListOfEmployee[i].lastname);
                    
    //             this.Targets.push(this.ListOfEmployee[i].id);
    //             // this.list[i].status=false;
    //             // this.list[i].employee=this.ListOfEmployee[i];
    //              }
                 
    //         });
                        
    //         this.ProjectService.getAllProjects().subscribe(
    //             next =>{this.ListOfProjects=next;});
                
    }
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    private _sideDrawerTransition: DrawerTransitionBase;
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.selectedContext==0;
        // this.Contexts=[];
         this.feedback.targets=[];
         this.EmployeeService.getAllEmployees().subscribe(
             next =>{this.ListOfEmployee=next;
                
                  for(let i=0;i<=this.ListOfEmployee.length;i++)
                  {
                      this.Contexts.push(this.ListOfEmployee[i].firstname+" "+this.ListOfEmployee[i].lastname);
                     
                 this.Targets.push(this.ListOfEmployee[i].id);
                 // this.list[i].status=false;
                 // this.list[i].employee=this.ListOfEmployee[i];
                  }
                  
             });
                         
             this.ProjectService.getAllProjects().subscribe(
                 next =>{this.ListOfProjects=next;});
                 
    }
    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
    OnChangeContextType(args: SelectedIndexChangedEventData) 
     {
         if(args.newIndex==0)
         {this.ErrorOther=false;
             this.feedback.contextType=this.ListOfContexts[args.newIndex];
             this.Context="Employee :";
             this.Other=false;
             this.Contexts=[];
             for(let i=0;i<=this.ListOfEmployee.length;i++)
             {
                 this.Contexts.push(this.ListOfEmployee[i].firstname+" "+this.ListOfEmployee[i].lastname);
             }
         }
         else if(args.newIndex==1)
         {   this.ErrorOther=false;
             this.feedback.contextType=this.ListOfContexts[args.newIndex];
             this.Context="Project :";
         this.Other=false;
             this.Contexts=[];
            for(let i=0;i<=this.ListOfProjects.length;i++)
            {
                this.Contexts.push(this.ListOfProjects[i].name);
            }
               
         }
         else if(args.newIndex==2)
         {
            //this.feedback.context=this.other;
            this.Other=true;
            this.ErrorOther=true;
            this.feedback.contextType=this.ListOfContexts[args.newIndex];

            
         }
         
        }
        public onTextChange(args) {
            let textField = <TextField>args.object;
            this.other = textField.text;
        }
        OnChangeContext(args:SelectedIndexChangedEventData){
            this.feedback.context=this.Contexts[args.newIndex];
        }
        OnChangeType(args:SelectedIndexChangedEventData){
            this.feedback.type=this.Types[args.newIndex];
        }
        OnChangeMode(args:SelectedIndexChangedEventData){
            this.feedback.mode=this.Modes[args.newIndex];
            if(args.newIndex==0)
            {this.Targets=[this.EmployeeService.getEmployee()];
                for(let i=0;i<=this.ListOfEmployee.length;i++)
                {
               this.Targets.push(this.ListOfEmployee[i].id);
                }
            }
            else if(args.newIndex==1)
            {
                this.Targets=[this.EmployeeService.getEmployee()];
            }
            else if(args.newIndex==2)
            {this.Targets=[this.EmployeeService.getEmployee()];
                this.count=this.Targets.length;
                this.List=true;
            }
        }
        onSetupItemView(args: SetupItemViewArgs) {
            args.view.context.third = (args.index % 3 === 0);
        }
        onItemTap(args: ItemEventData): void {
            //this.isTaped=!this.isTaped;
            
            // if((this.list[args.index].status==false)&&(this.list[args.index].employee==this.ListOfEmployee[args.index]))
            // {this.list[args.index].status=! this.list[args.index].status;
            //     this.isTaped=true;}
            //alert(args.view);
            this.isAdded=this.searchById(this.ListOfEmployee[args.index].id);
            if(this.isAdded==-1)
            {this.Targets.push(this.ListOfEmployee[args.index].id);
                this.count=this.Targets.length;
               
            }
            else
            {
                this.Targets.splice(this.isAdded,1);
                alert({title:"Remind",message:this.ListOfEmployee[args.index].firstname+" "+this.ListOfEmployee[args.index].lastname+" is removed",okButtonText: "OK"});
                this.count=this.Targets.length;
            }
        //    alert('Item with index: ' + args.index + ' tapped');
        
        
        }
        submit(text) {
            if(text=='')
           { this.ErrorOther=true;}
            else
            {this.other = text;
            this.ErrorOther=false;
            }
        }
        reset()
        {
           
            this.Context="Employee :";
            this.selectedContext=0;
            this.other='';
            this.selectedType=0;
            this.selectedMode=0;
            this.feedback.value='';
            this.resetTargets();
            this.selectedContextType=0;
            this.Other=false;
        
            this.Contexts=[];
            
                        for(let i=0;i<=this.ListOfEmployee.length;i++)
                        {
                            this.Contexts.push(this.ListOfEmployee[i].firstname+" "+this.ListOfEmployee[i].lastname);
                       
                        }
        }
        
        publish()
        { if(this.feedback.contextType=='Other')
        {this.feedback.context=this.other;}
            let date=new Date();
            let day=date.getDate();
            let month=date.getMonth()+1;
            let year=date.getFullYear();
            this.feedback.date=day+'/'+month+'/'+year;
           // this.Targets.push(this.EmployeeService.getEmployee());
            this.feedback.targets=this.Targets;
          
            //this.feedback.context=this.other;
            
            //this.fdpb.id_e=this.EmployeeService.getEmployee();
            this.isBusy=true;
            this.FeedbackService.addFeedback(this.feedback).subscribe(
                next=>{this.isBusy=false; 
                    
                    alert("Your feedback is added successfully");
                },
                    //alert(JSON.stringify(next));},
                error=> {this.isBusy=false;
                    alert("Unfortunately we were unable to add your feedback.");}
            )
          
        }
        finish()
        {
            this.List=false;
            if(this.Targets.length==0)
            {this.selectedMode=0;
                for(let i=0;i<=this.ListOfEmployee.length;i++)
                {
               this.Targets.push(this.ListOfEmployee[i].id);
                }
            }
            else
            {this.selectedMode=2;
            // this.feedback.targets=this.Targets
        }
        }
        resetTargets()
        {
            this.Targets=[this.EmployeeService.getEmployee()];
            this.count=this.Targets.length;
        }

       searchById(id:number){
           let i:number=0;
           while((this.Targets[i]!=id)&&(i<=this.Targets.length))
          { i++;}
          if(i>this.Targets.length)
          {return -1;}
          else
         { return i;}

       }
        //  public onTextChange(args:TextField) {
        // if(this.input.other=="")
        //     this.ErrorOther=true;
        //     else
        //    this.ErrorOther=false;
        // }
}