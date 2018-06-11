import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "Pubf", loadChildren: "./Pubf/Pubf.module#PubfModule" },
    { path: "allf", loadChildren: "./allf/allf.module#AllfModule" },
    { path: "surveys", loadChildren: "./surveys/surveys.module#SurveysModule" },
    { path: "enquiries", loadChildren: "./enquiries/enquiries.module#EnquiriesModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
