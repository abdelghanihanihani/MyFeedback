import { Injectable } from "@angular/core";
import { HttpClient,HttpParams} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Feedback } from "./feedback.model";
import "rxjs/add/operator/map";

@Injectable()
export class FeedbackService {
    constructor(private http: HttpClient) { 
        
    }
// getAllEmployees(){
//     return this.http.get("http://feedbackserver.fr.openode.io/employee/all");

// }  
addFeedback(feedback):Observable<Feedback[]>
{
  return this.http.post<Feedback[]>("http://feedbackserver.fr.openode.io/feedback/add",feedback);
}
// addFeedbackT(feedback):Observable<Feedback[]>
// {
//   return this.http.post<Feedback[]>("http://feedbackserver.fr.openode.io/feedback/addT",feedback);
// }
 getAllFeedbacks():Observable<Feedback[]>{
   return this.http.get<Feedback[]>("http://feedbackserver.fr.openode.io/feedback/all");
 } 
 getAllFPById(id):Observable<Feedback[]>{
 
  return this.http.get<Feedback[]>("http://feedbackserver.fr.openode.io/feedback/allFP?id="+id);
} 
getAllFEById(id):Observable<Feedback[]>{
  return this.http.get<Feedback[]>("http://feedbackserver.fr.openode.io/feedback/allFE?id="+id);
} 
getAllFOById(id):Observable<Feedback[]>{
  return this.http.get<Feedback[]>("http://feedbackserver.fr.openode.io/feedback/allFO?id="+id);
} 
getAllFDById(id,date):Observable<Feedback[]>{
  return this.http.get<Feedback[]>("http://feedbackserver.fr.openode.io/feedback/allFD?id="+id+"&date="+date);
} 
}