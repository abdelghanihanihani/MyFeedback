import { Component, OnInit,ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DatePicker } from "ui/date-picker";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { FeedbackService } from "./../services/feedback/feedback.service";
import { EmployeeService } from "./../services/employee/employee.service";
import { Feedback } from "./../services/feedback/feedback.model";
import { ItemEventData } from "ui/list-view";
@Component({
    selector: "Allf",
    moduleId: module.id,
    templateUrl: "./allf.component.html",
    styleUrls: ["./allf.component.css"],
    providers:[FeedbackService,EmployeeService]
})
export class AllfComponent implements OnInit {
    
    ListOfFds:Array<Feedback>=[];
    ContextType:Array<string>=['Employee','Project','Other'];
    selectedContextType:number=0;
    date:Date=new Date();
    currentDay: number = this.date.getDate();
    currentMonth: number = this.date.getMonth() + 1;
    currentYear: number = this.date.getFullYear();
    isContext:boolean;
    isDate:boolean;
    isBusy:boolean=false;
    DateFd:string;
    isFeedback:boolean;
    isNothing:boolean=false;
    feedback:Feedback;
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    
        private _sideDrawerTransition: DrawerTransitionBase;
    constructor(private FeedbackService:FeedbackService,private EmployeeService:EmployeeService) {
    }

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.ListOfFds=[];
        this.isContext=false;
        this.isDate=false;
    }
    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
    onDateChanged(args) {
       this.date=args.value;
       let day=this.date.getDate();
       let month=this.date.getMonth()+1;
       let year=this.date.getFullYear();
       this.DateFd=day+'/'+month+'/'+year;
       this.getAllFDById(this.DateFd);
    }
    OnChangeContextType(args: SelectedIndexChangedEventData) 
    { 
        if(args.newIndex==0)
        {
            this.getAllFEById();
        }
        else if(args.newIndex==1)
        {
            this.getAllFPById();

        }
         else if(args.newIndex==2)
         {
         this.getAllFOById();
         }
    
    }
    bydate(){
        this.date=new Date();
        this.isContext=false;
        let day=this.date.getDate();
        let month=this.date.getMonth()+1;
        let year=this.date.getFullYear();
        this.DateFd=day+'/'+month+'/'+year;
        this.getAllFDById(this.DateFd);
        //this.ListOfFds=[];
        this.isDate=!this.isDate;
    }
    bycontext()
    {    
        this.isDate=false;
        this.isContext=!this.isContext;
        if(this.isContext==true)
        {this.getAllFEById();
            this.selectedContextType==0;
        }
        else
        {this.ListOfFds=[];}
    }
    getAllFEById()
    {this.isBusy=true;
        this.FeedbackService.getAllFEById(this.EmployeeService.getEmployee()).subscribe(
            next=>{this.ListOfFds=next;
                this.isNothing=this.ListOfFds.length==0;
                this.isBusy=false;
            });
            
           
    }
    getAllFPById()
    {this.isBusy=true;
        this.FeedbackService.getAllFPById(this.EmployeeService.getEmployee()).subscribe(
            next=>{this.ListOfFds=next;
                this.isNothing=this.ListOfFds.length==0;
                this.isBusy=false;
            });
            
           
    }
    getAllFOById()
    {this.isBusy=true;
        this.FeedbackService.getAllFOById(this.EmployeeService.getEmployee()).subscribe(
            next=>{this.ListOfFds=next;
                this.isNothing=this.ListOfFds.length==0;
                this.isBusy=false;
            });
            
           
    }
    getAllFDById(DateFd)
    {this.isBusy=true;
        this.FeedbackService.getAllFDById(this.EmployeeService.getEmployee(),DateFd).subscribe(
            next=>{this.ListOfFds=next;
                this.isNothing=this.ListOfFds.length==0;
                this.isBusy=false;
            });
            
          
    }
    onItemTap(args: ItemEventData): void {
        this.isFeedback=true;
        this.feedback=this.ListOfFds[args.index];
    }
OK(){
    this.isFeedback=false;
}
}

