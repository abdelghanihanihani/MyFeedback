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
    //     return this.http.get("http://feedbackserver.fr.openode.io/employee/all");
    // }  
    FeedbackService.prototype.addFeedback = function (feedback) {
        return this.http.post("http://feedbackserver.fr.openode.io/feedback/add", feedback);
    };
    // addFeedbackT(feedback):Observable<Feedback[]>
    // {
    //   return this.http.post<Feedback[]>("http://feedbackserver.fr.openode.io/feedback/addT",feedback);
    // }
    FeedbackService.prototype.getAllFeedbacks = function () {
        return this.http.get("http://feedbackserver.fr.openode.io/feedback/all");
    };
    FeedbackService.prototype.getAllFPById = function (id) {
        return this.http.get("http://feedbackserver.fr.openode.io/feedback/allFP?id=" + id);
    };
    FeedbackService.prototype.getAllFEById = function (id) {
        return this.http.get("http://feedbackserver.fr.openode.io/feedback/allFE?id=" + id);
    };
    FeedbackService.prototype.getAllFOById = function (id) {
        return this.http.get("http://feedbackserver.fr.openode.io/feedback/allFO?id=" + id);
    };
    FeedbackService.prototype.getAllFDById = function (id, date) {
        return this.http.get("http://feedbackserver.fr.openode.io/feedback/allFD?id=" + id + "&date=" + date);
    };
    FeedbackService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FeedbackService);
    return FeedbackService;
}());
exports.FeedbackService = FeedbackService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZlZWRiYWNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQTREO0FBRzVELGlDQUErQjtBQUcvQjtJQUNJLHlCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBRXBDLENBQUM7SUFDTCxxQkFBcUI7SUFDckIsZ0ZBQWdGO0lBRWhGLE1BQU07SUFDTixxQ0FBVyxHQUFYLFVBQVksUUFBUTtRQUVsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQWEsa0RBQWtELEVBQUMsUUFBUSxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUNELGdEQUFnRDtJQUNoRCxJQUFJO0lBQ0oscUdBQXFHO0lBQ3JHLElBQUk7SUFDSCx5Q0FBZSxHQUFmO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLGtEQUFrRCxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUNELHNDQUFZLEdBQVosVUFBYSxFQUFFO1FBRWQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLHdEQUF3RCxHQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFDRCxzQ0FBWSxHQUFaLFVBQWEsRUFBRTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYSx3REFBd0QsR0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBQ0Qsc0NBQVksR0FBWixVQUFhLEVBQUU7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWEsd0RBQXdELEdBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUNELHNDQUFZLEdBQVosVUFBYSxFQUFFLEVBQUMsSUFBSTtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWEsd0RBQXdELEdBQUMsRUFBRSxHQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RyxDQUFDO0lBL0JZLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FFaUIsaUJBQVU7T0FEM0IsZUFBZSxDQWdDM0I7SUFBRCxzQkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsSHR0cFBhcmFtc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEZlZWRiYWNrIH0gZnJvbSBcIi4vZmVlZGJhY2subW9kZWxcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGZWVkYmFja1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4vLyBnZXRBbGxFbXBsb3llZXMoKXtcclxuLy8gICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2ZlZWRiYWNrc2VydmVyLmZyLm9wZW5vZGUuaW8vZW1wbG95ZWUvYWxsXCIpO1xyXG5cclxuLy8gfSAgXHJcbmFkZEZlZWRiYWNrKGZlZWRiYWNrKTpPYnNlcnZhYmxlPEZlZWRiYWNrW10+XHJcbntcclxuICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8RmVlZGJhY2tbXT4oXCJodHRwOi8vZmVlZGJhY2tzZXJ2ZXIuZnIub3Blbm9kZS5pby9mZWVkYmFjay9hZGRcIixmZWVkYmFjayk7XHJcbn1cclxuLy8gYWRkRmVlZGJhY2tUKGZlZWRiYWNrKTpPYnNlcnZhYmxlPEZlZWRiYWNrW10+XHJcbi8vIHtcclxuLy8gICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8RmVlZGJhY2tbXT4oXCJodHRwOi8vZmVlZGJhY2tzZXJ2ZXIuZnIub3Blbm9kZS5pby9mZWVkYmFjay9hZGRUXCIsZmVlZGJhY2spO1xyXG4vLyB9XHJcbiBnZXRBbGxGZWVkYmFja3MoKTpPYnNlcnZhYmxlPEZlZWRiYWNrW10+e1xyXG4gICByZXR1cm4gdGhpcy5odHRwLmdldDxGZWVkYmFja1tdPihcImh0dHA6Ly9mZWVkYmFja3NlcnZlci5mci5vcGVub2RlLmlvL2ZlZWRiYWNrL2FsbFwiKTtcclxuIH0gXHJcbiBnZXRBbGxGUEJ5SWQoaWQpOk9ic2VydmFibGU8RmVlZGJhY2tbXT57XHJcbiBcclxuICByZXR1cm4gdGhpcy5odHRwLmdldDxGZWVkYmFja1tdPihcImh0dHA6Ly9mZWVkYmFja3NlcnZlci5mci5vcGVub2RlLmlvL2ZlZWRiYWNrL2FsbEZQP2lkPVwiK2lkKTtcclxufSBcclxuZ2V0QWxsRkVCeUlkKGlkKTpPYnNlcnZhYmxlPEZlZWRiYWNrW10+e1xyXG4gIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZlZWRiYWNrW10+KFwiaHR0cDovL2ZlZWRiYWNrc2VydmVyLmZyLm9wZW5vZGUuaW8vZmVlZGJhY2svYWxsRkU/aWQ9XCIraWQpO1xyXG59IFxyXG5nZXRBbGxGT0J5SWQoaWQpOk9ic2VydmFibGU8RmVlZGJhY2tbXT57XHJcbiAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RmVlZGJhY2tbXT4oXCJodHRwOi8vZmVlZGJhY2tzZXJ2ZXIuZnIub3Blbm9kZS5pby9mZWVkYmFjay9hbGxGTz9pZD1cIitpZCk7XHJcbn0gXHJcbmdldEFsbEZEQnlJZChpZCxkYXRlKTpPYnNlcnZhYmxlPEZlZWRiYWNrW10+e1xyXG4gIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZlZWRiYWNrW10+KFwiaHR0cDovL2ZlZWRiYWNrc2VydmVyLmZyLm9wZW5vZGUuaW8vZmVlZGJhY2svYWxsRkQ/aWQ9XCIraWQrXCImZGF0ZT1cIitkYXRlKTtcclxufSBcclxufSJdfQ==