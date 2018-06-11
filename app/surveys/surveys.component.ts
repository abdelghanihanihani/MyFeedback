import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";
import { ItemEventData } from "ui/list-view";
import { EmployeeService } from "./../services/employee/employee.service";
import { Employee} from "./../services/employee/employee.model";
 @Component({
     selector: "Surveys",
     moduleId: module.id,
     templateUrl: "./surveys.component.html",
     styleUrls:["./surveys.component.css"],
     providers:[EmployeeService]
 })


export class SurveysComponent implements OnInit {
   items:Array<SegmentedBarItem>=[];
   Surveys:Array<{context:string,date:string}>=[{context:'SurvContext',date:'date'},{context:'SurvContext',date:'date'},{context:'SurvContext',date:'date'},{context:'SurvContext',date:'date'},{context:'SurvContext',date:'date'},{context:'SurvContext',date:'date'},{context:'SurvContext',date:'date'},{context:'SurvContext',date:'date'}];
   Enquires:Array<{context:string,date:string}>=[{context:'EnquiContext',date:'date'},{context:'EnquiContext',date:'date'},{context:'EnquiContext',date:'date'},{context:'EnquiContext',date:'date'},{context:'EnquiContext',date:'date'},{context:'EnquiContext',date:'date'},{context:'EnquiContext',date:'date'},{context:'EnquiContext',date:'date'}];
   questions:Array<string>=["arfsfsdfsfdsf?","wfsdfsdfdsfsdfsdfsdf?","qsdfqsdqsdfqsdqsdqsd?","dsfdsfsdfsdfsdfds?","arfsfsdfsfdsf?","wfsdfsdfdsfsdfsdfsdf?","qsdfqsdqsdfqsdqsdqsd?","dsfdsfsdfsdfsdfds?"]
   List:Array<{context:string,date:string}>=[];
    item1=new SegmentedBarItem();
    item2=new SegmentedBarItem();
    isSurvey:boolean=false;
    isListe:boolean=true;
    isAdmin:boolean;
    q1:string="questionquestionquestionquestionquestionquestionquestion?";
   
    
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;
id:string="hi";

   
    constructor(private EmployeeService: EmployeeService) {
        
       }
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.item1.title="Surveys";
        this.item2.title="Enquires";
        this.items.push(this.item1);
        this.items.push(this.item2);
        this.isAdmin=this.EmployeeService.getEmpRole()=='rh';
        
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

   
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
    public onSelectedIndexChange(args) {
        this.isSurvey=!this.isSurvey;
        if(this.isSurvey)
        {this.List=this.Surveys
        }
        else{
            this.List=this.Enquires;
            
        }
    }
    onItemTap(args: ItemEventData): void {
this.isListe=false;
    }
    FinishSurvey(){
        this.isListe=true;
     
    }
    CreateEnquire(){
        this.isListe=true;
        
    }
}

