import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { User } from "./user.model";


@Injectable()
export class UserService {
    constructor(private http: HttpClient) { 
        
    }
// getAllusers(){
//    return this.http.get("http://192.168.43.137:3002/user/all");
//   // return this.listPickerCountries;
// }  
Signin(user:User):Observable<User>{
  return this.http.post<User>("http://feedbackserver.fr.openode.io/user/login",user);
} 
}