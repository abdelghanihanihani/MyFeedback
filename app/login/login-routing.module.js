"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./login.component");
var routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "home", loadChildren: "../home/home.module#HomeModule" },
    { path: "allf", loadChildren: "./allf/allf.module#AllfModule" },
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());
exports.LoginRoutingModule = LoginRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUscURBQW1EO0FBR25ELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUN2QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGdDQUFnQyxFQUFFO0lBQ2hFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUU7Q0FJbEUsQ0FBQztBQU1GO0lBQUE7SUFBa0MsQ0FBQztJQUF0QixrQkFBa0I7UUFKOUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBbkMsSUFBbUM7QUFBdEIsZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnR7IEFsbGZDb21wb25lbnR9IGZyb20gXCIuLi9hbGxmL2FsbGYuY29tcG9uZW50XCIgXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi4vaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiYWxsZlwiLCBsb2FkQ2hpbGRyZW46IFwiLi9hbGxmL2FsbGYubW9kdWxlI0FsbGZNb2R1bGVcIiB9LFxuICAgIFxuICAgLy8geyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1cbiAgICBcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=