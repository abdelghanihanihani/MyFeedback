import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { EnquiriesRoutingModule } from "./enquiries-routing.module";
import { EnquiriesComponent } from "./enquiries.component";
import { SharedModule } from "../shared/shared.module";
@NgModule({
    imports: [
        NativeScriptModule,
        EnquiriesRoutingModule,
        SharedModule
    ],
    declarations: [
        EnquiriesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EnquiriesModule { }
