import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Project } from "./project.model";
import "rxjs/add/operator/map";

@Injectable()
export class ProjectService {
    constructor(private http: HttpClient) { 
        
    }
// getAllEmployees(){
//     return this.http.get("http://feedbackserver.fr.openode.io/employee/all");

// }  
 getAllProjects():Observable<Project[]>{
   return this.http.get<Project[]>("http://feedbackserver.fr.openode.io/project/all");
 } 
}