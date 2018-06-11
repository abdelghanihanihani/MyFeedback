"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var enquiries_routing_module_1 = require("./enquiries-routing.module");
var enquiries_component_1 = require("./enquiries.component");
var shared_module_1 = require("../shared/shared.module");
var EnquiriesModule = /** @class */ (function () {
    function EnquiriesModule() {
    }
    EnquiriesModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                enquiries_routing_module_1.EnquiriesRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                enquiries_component_1.EnquiriesComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], EnquiriesModule);
    return EnquiriesModule;
}());
exports.EnquiriesModule = EnquiriesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5xdWlyaWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVucXVpcmllcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLHVFQUFvRTtBQUNwRSw2REFBMkQ7QUFDM0QseURBQXVEO0FBY3ZEO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixlQUFlO1FBYjNCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLGlEQUFzQjtnQkFDdEIsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDVix3Q0FBa0I7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGVBQWUsQ0FBSTtJQUFELHNCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7QUFBbkIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBFbnF1aXJpZXNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZW5xdWlyaWVzLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBFbnF1aXJpZXNDb21wb25lbnQgfSBmcm9tIFwiLi9lbnF1aXJpZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEVucXVpcmllc1JvdXRpbmdNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEVucXVpcmllc0NvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBFbnF1aXJpZXNNb2R1bGUgeyB9XG4iXX0=