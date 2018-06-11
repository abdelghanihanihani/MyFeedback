import { Component, OnInit, ViewChild} from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "enquiries", loadChildren: "./enquiries/enquiries.module#EnquiriesModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Enquiries",
    moduleId: module.id,
    templateUrl: "./enquiries.component.html"
})
export class EnquiriesComponent implements OnInit {
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    
        private _sideDrawerTransition: DrawerTransitionBase;
    constructor() {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }
    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}
