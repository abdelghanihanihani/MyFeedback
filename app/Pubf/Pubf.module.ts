import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { SharedModule } from "../shared/shared.module";
import { PubfRoutingModule } from "./Pubf-routing.module";
import { PubfComponent } from "./Pubf.component";
import { DropDownModule } from "nativescript-drop-down/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';

@NgModule({
    imports: [
        NativeScriptModule,
        PubfRoutingModule,
        SharedModule,
        DropDownModule,
        NativeScriptFormsModule,
        HttpClientModule,
        TNSCheckBoxModule
    ],
    declarations: [
        PubfComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PubfModule { }
