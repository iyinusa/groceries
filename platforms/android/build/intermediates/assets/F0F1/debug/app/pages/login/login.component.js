"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var page_1 = require("ui/page");
var color_1 = require("color");
var hint_util_1 = require("../../utils/hint-util");
var LoginComponent = (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert('Invalid Email Address format');
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/list"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Failed to create your account."); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        this.setTextFieldColors();
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    LoginComponent.prototype.setTextFieldColors = function () {
        var emailTextField = this.email.nativeElement;
        var passwordTextField = this.password.nativeElement;
        var mainTextColor = new color_1.Color(this.isLoggingIn ? "black" : "#C4AFB4");
        emailTextField.color = mainTextColor;
        passwordTextField.color = mainTextColor;
        var hintColor = new color_1.Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
        hint_util_1.setHintColor({ view: emailTextField, color: hintColor });
        hint_util_1.setHintColor({ view: passwordTextField, color: hintColor });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "container", void 0);
__decorate([
    core_1.ViewChild("email"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "email", void 0);
__decorate([
    core_1.ViewChild("password"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "password", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUN6QywrQ0FBOEM7QUFDOUMsK0RBQTZEO0FBQzdELGdDQUErQjtBQUMvQiwrQkFBOEI7QUFHOUIsbURBQXFEO0FBVXJELElBQWEsY0FBYztJQVF2Qix3QkFBb0IsTUFBYyxFQUFVLFdBQXdCLEVBQVUsSUFBVTtRQUFwRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBTnhGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBT2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO0lBQ2pELENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDNUIsU0FBUyxDQUNOLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQS9CLENBQStCLEVBQ3JDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLCtDQUErQyxDQUFDLEVBQXRELENBQXNELENBQ3BFLENBQUM7SUFDVixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMvQixTQUFTLENBQ047WUFDSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUNELGNBQU0sT0FBQSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsRUFBdkMsQ0FBdUMsQ0FDaEQsQ0FBQztJQUNWLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFMUIsSUFBSSxTQUFTLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDbkQsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNkLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQztZQUM3RSxRQUFRLEVBQUUsR0FBRztTQUNoQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMkNBQWtCLEdBQWxCO1FBQ0ksSUFBSSxjQUFjLEdBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDekQsSUFBSSxpQkFBaUIsR0FBYyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUUvRCxJQUFJLGFBQWEsR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQztRQUN0RSxjQUFjLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztRQUNyQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO1FBRXhDLElBQUksU0FBUyxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3BFLHdCQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELHdCQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FBQyxBQXpFRCxJQXlFQztBQXRFMkI7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQVksaUJBQVU7aURBQUM7QUFDMUI7SUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7OEJBQVEsaUJBQVU7NkNBQUM7QUFDZjtJQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQzs4QkFBVyxpQkFBVTtnREFBQztBQUxuQyxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDdkUsQ0FBQztxQ0FTOEIsZUFBTSxFQUF1QiwwQkFBVyxFQUFnQixXQUFJO0dBUi9FLGNBQWMsQ0F5RTFCO0FBekVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcblxuaW1wb3J0IHsgc2V0SGludENvbG9yIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2hpbnQtdXRpbFwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgdXNlcjogVXNlcjtcbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImVtYWlsXCIpIGVtYWlsOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfbG9naW5cIjtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy51c2VyLmlzVmFsaWRFbWFpbCgpKSB7XG4gICAgICAgICAgICBhbGVydCgnSW52YWxpZCBFbWFpbCBBZGRyZXNzIGZvcm1hdCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIHNpZ25VcCgpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiBhbGVydChcIkZhaWxlZCB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICB0b2dnbGVEaXNwbGF5KCkge1xuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgICAgIHRoaXMuc2V0VGV4dEZpZWxkQ29sb3JzKCk7XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IDxWaWV3PnRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnRhaW5lci5hbmltYXRlKHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5pc0xvZ2dpbmdJbiA/IG5ldyBDb2xvcihcIndoaXRlXCIpIDogbmV3IENvbG9yKFwiIzMwMTIxN1wiKSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VGV4dEZpZWxkQ29sb3JzKCkge1xuICAgICAgICBsZXQgZW1haWxUZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMuZW1haWwubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGV0IHBhc3N3b3JkVGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgbGV0IG1haW5UZXh0Q29sb3IgPSBuZXcgQ29sb3IodGhpcy5pc0xvZ2dpbmdJbiA/IFwiYmxhY2tcIiA6IFwiI0M0QUZCNFwiKTtcbiAgICAgICAgZW1haWxUZXh0RmllbGQuY29sb3IgPSBtYWluVGV4dENvbG9yO1xuICAgICAgICBwYXNzd29yZFRleHRGaWVsZC5jb2xvciA9IG1haW5UZXh0Q29sb3I7XG5cbiAgICAgICAgbGV0IGhpbnRDb2xvciA9IG5ldyBDb2xvcih0aGlzLmlzTG9nZ2luZ0luID8gXCIjQUNBNkE3XCIgOiBcIiNDNEFGQjRcIik7XG4gICAgICAgIHNldEhpbnRDb2xvcih7IHZpZXc6IGVtYWlsVGV4dEZpZWxkLCBjb2xvcjogaGludENvbG9yIH0pO1xuICAgICAgICBzZXRIaW50Q29sb3IoeyB2aWV3OiBwYXNzd29yZFRleHRGaWVsZCwgY29sb3I6IGhpbnRDb2xvciB9KTtcbiAgICB9XG5cbn0iXX0=