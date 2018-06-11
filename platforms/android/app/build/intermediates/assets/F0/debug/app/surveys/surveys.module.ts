import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { SharedModule } from "../shared/shared.module";
import { SurveysRoutingModule } from "./surveys-routing.module";
import { SurveysComponent } from "./surveys.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
@NgModule({
    imports: [
        NativeScriptModule,
        SurveysRoutingModule,
        SharedModule,
        NativeScriptFormsModule
    ],
    declarations: [
        SurveysComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SurveysModule { }
