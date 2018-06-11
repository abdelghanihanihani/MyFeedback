import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { SharedModule } from "../shared/shared.module";
import { SurveysRoutingModule } from "./surveys-routing.module";
import { SurveysComponent } from "./surveys.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        NativeScriptModule,
        SurveysRoutingModule,
        SharedModule,
        NativeScriptFormsModule,
        TNSCheckBoxModule,
        HttpClientModule
    ],
    declarations: [
        SurveysComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SurveysModule { }
