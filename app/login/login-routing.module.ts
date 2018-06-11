import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "./login.component";
import { HomeComponent } from "../home/home.component";
import{ AllfComponent} from "../allf/allf.component" 
const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "home", loadChildren: "../home/home.module#HomeModule" },
    { path: "allf", loadChildren: "./allf/allf.module#AllfModule" },
    
   // { path: "home", component: HomeComponent }
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class LoginRoutingModule { }
