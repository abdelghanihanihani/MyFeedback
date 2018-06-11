import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";


 @Component({
     selector: "Surveys",
     moduleId: module.id,
     templateUrl: "./surveys.component.html"
 })


export class SurveysComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;
id:string="hi";

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    constructor() {
        
        
    
        //  this.login=this.employee.login;
       // this.login="jj";
       }
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
   
}

// import { Component, OnInit,ViewChild } from "@angular/core";
// import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
// import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";


// @Component({
//     selector: "Surveys",
//     moduleId: module.id,
//     templateUrl: "./surveys.component.html"
// })

// export class SurveysComponent implements OnInit {
//     @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    
//         private _sideDrawerTransition: DrawerTransitionBase;
//     constructor() {
       
//     }
  
//     ngOnInit(): void {
//         this._sideDrawerTransition = new SlideInOnTopTransition();
      
//     }
//     get sideDrawerTransition(): DrawerTransitionBase {
//         return this._sideDrawerTransition;
//     }
//     onDrawerButtonTap(): void {
//         this.drawerComponent.sideDrawer.showDrawer();
//     }
// }
