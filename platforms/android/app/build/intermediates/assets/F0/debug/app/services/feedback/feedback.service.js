"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
var FeedbackService = /** @class */ (function () {
    function FeedbackService(http) {
        this.http = http;
    }
    // getAllEmployees(){
    //     return this.http.get("http://feedbackserver.openode.io/employee/all");
    // }  
    FeedbackService.prototype.addFeedback = function (feedback) {
        return this.http.post("http://feedbackserver.openode.io/feedback/add", feedback);
    };
    // addFeedbackT(feedback):Observable<Feedback[]>
    // {
    //   return this.http.post<Feedback[]>("http://feedbackserver.openode.io/feedback/addT",feedback);
    // }
    FeedbackService.prototype.getAllFeedbacks = function () {
        return this.http.get("http://feedbackserver.openode.io/feedback/all");
    };
    FeedbackService.prototype.getAllFPById = function (id) {
        return this.http.get("http://feedbackserver.openode.io/feedback/allFP?id=" + id);
    };
    FeedbackService.prototype.getAllFEById = function (id) {
        return this.http.get("http://feedbackserver.openode.io/feedback/allFE?id=" + id);
    };
    FeedbackService.prototype.getAllFDById = function (id, date) {
        return this.http.get("http://feedbackserver.openode.io/feedback/allFD?id=" + id + "&date=" + date);
    };
    FeedbackService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FeedbackService);
    return FeedbackService;
}());
exports.FeedbackService = FeedbackService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZlZWRiYWNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQTREO0FBRzVELGlDQUErQjtBQUcvQjtJQUNJLHlCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBRXBDLENBQUM7SUFDTCxxQkFBcUI7SUFDckIsNkVBQTZFO0lBRTdFLE1BQU07SUFDTixxQ0FBVyxHQUFYLFVBQVksUUFBUTtRQUVsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQWEsK0NBQStDLEVBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUNELGdEQUFnRDtJQUNoRCxJQUFJO0lBQ0osa0dBQWtHO0lBQ2xHLElBQUk7SUFDSCx5Q0FBZSxHQUFmO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLCtDQUErQyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUNELHNDQUFZLEdBQVosVUFBYSxFQUFFO1FBRWQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLHFEQUFxRCxHQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFDRCxzQ0FBWSxHQUFaLFVBQWEsRUFBRTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYSxxREFBcUQsR0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBQ0Qsc0NBQVksR0FBWixVQUFhLEVBQUUsRUFBQyxJQUFJO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYSxxREFBcUQsR0FBQyxFQUFFLEdBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNHLENBQUM7SUE1QlksZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUVpQixpQkFBVTtPQUQzQixlQUFlLENBNkIzQjtJQUFELHNCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCxIdHRwUGFyYW1zfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRmVlZGJhY2sgfSBmcm9tIFwiLi9mZWVkYmFjay5tb2RlbFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbi8vIGdldEFsbEVtcGxveWVlcygpe1xyXG4vLyAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vZmVlZGJhY2tzZXJ2ZXIub3Blbm9kZS5pby9lbXBsb3llZS9hbGxcIik7XHJcblxyXG4vLyB9ICBcclxuYWRkRmVlZGJhY2soZmVlZGJhY2spOk9ic2VydmFibGU8RmVlZGJhY2tbXT5cclxue1xyXG4gIHJldHVybiB0aGlzLmh0dHAucG9zdDxGZWVkYmFja1tdPihcImh0dHA6Ly9mZWVkYmFja3NlcnZlci5vcGVub2RlLmlvL2ZlZWRiYWNrL2FkZFwiLGZlZWRiYWNrKTtcclxufVxyXG4vLyBhZGRGZWVkYmFja1QoZmVlZGJhY2spOk9ic2VydmFibGU8RmVlZGJhY2tbXT5cclxuLy8ge1xyXG4vLyAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxGZWVkYmFja1tdPihcImh0dHA6Ly9mZWVkYmFja3NlcnZlci5vcGVub2RlLmlvL2ZlZWRiYWNrL2FkZFRcIixmZWVkYmFjayk7XHJcbi8vIH1cclxuIGdldEFsbEZlZWRiYWNrcygpOk9ic2VydmFibGU8RmVlZGJhY2tbXT57XHJcbiAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZlZWRiYWNrW10+KFwiaHR0cDovL2ZlZWRiYWNrc2VydmVyLm9wZW5vZGUuaW8vZmVlZGJhY2svYWxsXCIpO1xyXG4gfSBcclxuIGdldEFsbEZQQnlJZChpZCk6T2JzZXJ2YWJsZTxGZWVkYmFja1tdPntcclxuIFxyXG4gIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZlZWRiYWNrW10+KFwiaHR0cDovL2ZlZWRiYWNrc2VydmVyLm9wZW5vZGUuaW8vZmVlZGJhY2svYWxsRlA/aWQ9XCIraWQpO1xyXG59IFxyXG5nZXRBbGxGRUJ5SWQoaWQpOk9ic2VydmFibGU8RmVlZGJhY2tbXT57XHJcbiAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RmVlZGJhY2tbXT4oXCJodHRwOi8vZmVlZGJhY2tzZXJ2ZXIub3Blbm9kZS5pby9mZWVkYmFjay9hbGxGRT9pZD1cIitpZCk7XHJcbn0gXHJcbmdldEFsbEZEQnlJZChpZCxkYXRlKTpPYnNlcnZhYmxlPEZlZWRiYWNrW10+e1xyXG4gIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZlZWRiYWNrW10+KFwiaHR0cDovL2ZlZWRiYWNrc2VydmVyLm9wZW5vZGUuaW8vZmVlZGJhY2svYWxsRkQ/aWQ9XCIraWQrXCImZGF0ZT1cIitkYXRlKTtcclxufSBcclxufSJdfQ==