"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("application");
var platform = require("platform");
var utils = require("utils/utils");
function setStatusBarColors() {
    // Make the iOS status bar transparent with white text.
    // See https://github.com/burkeholland/nativescript-statusbar/issues/2
    // for details on the technique used.
    if (application.ios) {
        var AppDelegate = UIResponder.extend({
            applicationDidFinishLaunchingWithOptions: function () {
                utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarStyle = UIStatusBarStyle.LightContent;
                return true;
            }
        }, {
            name: "AppDelegate",
            protocols: [UIApplicationDelegate]
        });
        application.ios.delegate = AppDelegate;
    }
    // Make the Android status bar transparent.
    // See http://bradmartin.net/2016/03/10/fullscreen-and-navigation-bar-color-in-a-nativescript-android-app/
    // for details on the technique used.
    if (application.android) {
        application.android.on("activityStarted", function () {
            if (application.android && platform.device.sdkVersion >= "21") {
                var View = android.view.View;
                var window_1 = application.android.startActivity.getWindow();
                window_1.setStatusBarColor(0x000000);
                var decorView = window_1.getDecorView();
                decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                    | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
            }
        });
    }
}
exports.setStatusBarColors = setStatusBarColors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdHVzLWJhci11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQTJDO0FBQzNDLG1DQUFxQztBQUNyQyxtQ0FBcUM7QUFRckM7SUFDRSx1REFBdUQ7SUFDdkQsc0VBQXNFO0lBQ3RFLHFDQUFxQztJQUNyQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLFdBQVcsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ25DLHdDQUF3QyxFQUFFO2dCQUN4QyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUFDLFlBQVksQ0FBQztnQkFDaEgsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUM7U0FDRixFQUFFO1lBQ0MsSUFBSSxFQUFFLGFBQWE7WUFDbkIsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDbkMsQ0FBQyxDQUFDO1FBQ0wsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwyQ0FBMkM7SUFDM0MsMEdBQTBHO0lBQzFHLHFDQUFxQztJQUNyQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN4QixXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzlELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM3QixJQUFJLFFBQU0sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDM0QsUUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUVuQyxJQUFJLFNBQVMsR0FBRyxRQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3RDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FDN0IsSUFBSSxDQUFDLDRCQUE0QjtzQkFDL0IsSUFBSSxDQUFDLHFDQUFxQztzQkFDMUMsSUFBSSxDQUFDLGdDQUFnQztzQkFDckMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7WUFDNUMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUM7QUFwQ0QsZ0RBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XG5kZWNsYXJlIHZhciBVSVJlc3BvbmRlcjogYW55O1xuZGVjbGFyZSB2YXIgVUlTdGF0dXNCYXJTdHlsZTogYW55O1xuZGVjbGFyZSB2YXIgVUlBcHBsaWNhdGlvbjogYW55O1xuZGVjbGFyZSB2YXIgVUlBcHBsaWNhdGlvbkRlbGVnYXRlOiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJDb2xvcnMoKSB7XG4gIC8vIE1ha2UgdGhlIGlPUyBzdGF0dXMgYmFyIHRyYW5zcGFyZW50IHdpdGggd2hpdGUgdGV4dC5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9idXJrZWhvbGxhbmQvbmF0aXZlc2NyaXB0LXN0YXR1c2Jhci9pc3N1ZXMvMlxuICAvLyBmb3IgZGV0YWlscyBvbiB0aGUgdGVjaG5pcXVlIHVzZWQuXG4gIGlmIChhcHBsaWNhdGlvbi5pb3MpIHtcbiAgICBsZXQgQXBwRGVsZWdhdGUgPSBVSVJlc3BvbmRlci5leHRlbmQoe1xuICAgICAgYXBwbGljYXRpb25EaWRGaW5pc2hMYXVuY2hpbmdXaXRoT3B0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICB1dGlscy5pb3MuZ2V0dGVyKFVJQXBwbGljYXRpb24sIFVJQXBwbGljYXRpb24uc2hhcmVkQXBwbGljYXRpb24pLnN0YXR1c0JhclN0eWxlID0gVUlTdGF0dXNCYXJTdHlsZS5MaWdodENvbnRlbnQ7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJBcHBEZWxlZ2F0ZVwiLFxuICAgICAgICBwcm90b2NvbHM6IFtVSUFwcGxpY2F0aW9uRGVsZWdhdGVdXG4gICAgICB9KTtcbiAgICBhcHBsaWNhdGlvbi5pb3MuZGVsZWdhdGUgPSBBcHBEZWxlZ2F0ZTtcbiAgfVxuXG4gIC8vIE1ha2UgdGhlIEFuZHJvaWQgc3RhdHVzIGJhciB0cmFuc3BhcmVudC5cbiAgLy8gU2VlIGh0dHA6Ly9icmFkbWFydGluLm5ldC8yMDE2LzAzLzEwL2Z1bGxzY3JlZW4tYW5kLW5hdmlnYXRpb24tYmFyLWNvbG9yLWluLWEtbmF0aXZlc2NyaXB0LWFuZHJvaWQtYXBwL1xuICAvLyBmb3IgZGV0YWlscyBvbiB0aGUgdGVjaG5pcXVlIHVzZWQuXG4gIGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkKSB7XG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihcImFjdGl2aXR5U3RhcnRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoYXBwbGljYXRpb24uYW5kcm9pZCAmJiBwbGF0Zm9ybS5kZXZpY2Uuc2RrVmVyc2lvbiA+PSBcIjIxXCIpIHtcbiAgICAgICAgbGV0IFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcbiAgICAgICAgbGV0IHdpbmRvdyA9IGFwcGxpY2F0aW9uLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcbiAgICAgICAgd2luZG93LnNldFN0YXR1c0JhckNvbG9yKDB4MDAwMDAwKTtcblxuICAgICAgICBsZXQgZGVjb3JWaWV3ID0gd2luZG93LmdldERlY29yVmlldygpO1xuICAgICAgICBkZWNvclZpZXcuc2V0U3lzdGVtVWlWaXNpYmlsaXR5KFxuICAgICAgICAgIFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX1NUQUJMRVxuICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfSElERV9OQVZJR0FUSU9OXG4gICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9GVUxMU0NSRUVOXG4gICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0lNTUVSU0lWRV9TVElDS1kpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=