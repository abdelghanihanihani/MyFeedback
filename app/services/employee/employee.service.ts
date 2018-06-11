import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Employee } from "./employee.model";
import "rxjs/add/operator/map";
import * as ApplicationSettings from "application-settings";
@Injectable()
export class EmployeeService {
  employe:Employee;
  l:string="ss";
    constructor(private http: HttpClient) { 
        
    }
// getAllEmployees(){
//     return this.http.get("http://feedbackserver.fr.openode.io/employee/all");

// }  
 getAllEmployees():Observable<Employee[]>{
   return this.http.get<Employee[]>("http://feedbackserver.fr.openode.io/employee/all?id="+ApplicationSettings.getNumber('id'));
 } 
 Signin(employee:Employee):Observable<Employee>{
  return this.http.post<Employee>("http://feedbackserver.fr.openode.io/employee/login",employee);
} 
setEmployee(id:number,firstname:string)
{
  ApplicationSettings.setNumber('id',id);
  ApplicationSettings.setString('firstname',firstname);
}
setAuthent(authent)
{
  ApplicationSettings.setBoolean('athent',authent);
}
getAuthent():boolean
{
  return ApplicationSettings.getBoolean('athent');
}
getEmployee():number
{ 
  return ApplicationSettings.getNumber('id');
}
getEmployeeFN():string
{ 
  return ApplicationSettings.getString('firstname');
}
removeEmployee(){
  ApplicationSettings.clear();
}
setEmpRole(role)
{ApplicationSettings.setString('role',role);

}
getEmpRole()
{
return ApplicationSettings.getString('role');
}
}