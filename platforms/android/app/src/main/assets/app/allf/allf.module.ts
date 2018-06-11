import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { SharedModule } from "../shared/shared.module";
import { AllfRoutingModule } from "./allf-routing.module";
import { AllfComponent } from "./allf.component";
import { DropDownModule } from "nativescript-drop-down/angular";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
    imports: [
        NativeScriptModule,
        AllfRoutingModule,
        SharedModule,
        DropDownModule,
        HttpClientModule
    ],
    declarations: [
        AllfComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AllfModule { }
