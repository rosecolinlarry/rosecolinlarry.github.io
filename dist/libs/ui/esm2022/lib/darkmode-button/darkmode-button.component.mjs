import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemePickerService } from '../theming/theme-picker/theme-picker.service';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "../theming/theme-picker/theme-picker.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
function DarkmodeButtonComponent_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "dark_mode");
    i0.ɵɵelementEnd();
} }
function DarkmodeButtonComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "light_mode");
    i0.ɵɵelementEnd();
} }
export class DarkmodeButtonComponent {
    constructor(themePickerService) {
        this.themePickerService = themePickerService;
        this.isDarkMode = this.themePickerService.isDarkMode;
    }
    onClick() {
        this.themePickerService.setTheme();
        this.isDarkMode = this.themePickerService.isDarkMode;
    }
    static { this.ɵfac = function DarkmodeButtonComponent_Factory(t) { return new (t || DarkmodeButtonComponent)(i0.ɵɵdirectiveInject(i1.ThemePickerService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DarkmodeButtonComponent, selectors: [["lib-darkmode-button"]], standalone: true, features: [i0.ɵɵProvidersFeature([ThemePickerService, HttpClient]), i0.ɵɵStandaloneFeature], decls: 4, vars: 2, consts: [["elseBlock", ""], ["mat-icon-button", "", 3, "click"], [4, "ngIf", "ngIfElse"]], template: function DarkmodeButtonComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 1);
            i0.ɵɵlistener("click", function DarkmodeButtonComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onClick()); });
            i0.ɵɵtemplate(1, DarkmodeButtonComponent_mat_icon_1_Template, 2, 0, "mat-icon", 2)(2, DarkmodeButtonComponent_ng_template_2_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const elseBlock_r2 = i0.ɵɵreference(3);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isDarkMode)("ngIfElse", elseBlock_r2);
        } }, dependencies: [CommonModule, i2.NgIf, MatButtonModule, i3.MatIconButton, MatIconModule, i4.MatIcon] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DarkmodeButtonComponent, [{
        type: Component,
        args: [{ selector: 'lib-darkmode-button', standalone: true, imports: [CommonModule, MatButtonModule, MatIconModule], providers: [ThemePickerService, HttpClient], template: "<button mat-icon-button (click)=\"onClick()\">\n  <mat-icon *ngIf=\"isDarkMode ; else elseBlock\">dark_mode</mat-icon>\n  <ng-template #elseBlock>\n    <mat-icon>light_mode</mat-icon>\n  </ng-template>\n</button>\n" }]
    }], () => [{ type: i1.ThemePickerService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DarkmodeButtonComponent, { className: "DarkmodeButtonComponent", filePath: "lib\\darkmode-button\\darkmode-button.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFya21vZGUtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvc3JjL2xpYi9kYXJrbW9kZS1idXR0b24vZGFya21vZGUtYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvc3JjL2xpYi9kYXJrbW9kZS1idXR0b24vZGFya21vZGUtYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7O0lDSmhELGdDQUE4QztJQUFBLHlCQUFTO0lBQUEsaUJBQVc7OztJQUVoRSxnQ0FBVTtJQUFBLDBCQUFVO0lBQUEsaUJBQVc7O0FEWW5DLE1BQU0sT0FBTyx1QkFBdUI7SUFHbEMsWUFBWSxrQkFBc0M7UUFDaEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQztJQUN2RCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7SUFDdkQsQ0FBQzt3RkFYVSx1QkFBdUI7b0VBQXZCLHVCQUF1QiwyRkFKdkIsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUM7O1lDWDdDLGlDQUE0QztZQUFwQiwwSUFBUyxhQUFTLEtBQUM7WUFFekMsQUFEQSxrRkFBOEMsNEdBQ3RCO1lBRzFCLGlCQUFTOzs7WUFKSSxjQUFtQjtZQUFBLEFBQW5CLHFDQUFtQiwwQkFBYzs0QkRTbEMsWUFBWSxXQUFFLGVBQWUsb0JBQUUsYUFBYTs7aUZBSzNDLHVCQUF1QjtjQVJuQyxTQUFTOzJCQUNFLHFCQUFxQixjQUNuQixJQUFJLFdBQ1AsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQyxhQUM1QyxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQzs7a0ZBSWhDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBUaGVtZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuLi90aGVtaW5nL3RoZW1lLXBpY2tlci90aGVtZS1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZGFya21vZGUtYnV0dG9uJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbVGhlbWVQaWNrZXJTZXJ2aWNlLCBIdHRwQ2xpZW50XSxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhcmttb2RlLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9kYXJrbW9kZS1idXR0b24uY29tcG9uZW50LnNjc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBEYXJrbW9kZUJ1dHRvbkNvbXBvbmVudCB7XG4gIGlzRGFya01vZGU6IGJvb2xlYW47XG4gIHRoZW1lUGlja2VyU2VydmljZTogVGhlbWVQaWNrZXJTZXJ2aWNlO1xuICBjb25zdHJ1Y3Rvcih0aGVtZVBpY2tlclNlcnZpY2U6IFRoZW1lUGlja2VyU2VydmljZSkge1xuICAgIHRoaXMudGhlbWVQaWNrZXJTZXJ2aWNlID0gdGhlbWVQaWNrZXJTZXJ2aWNlO1xuICAgIHRoaXMuaXNEYXJrTW9kZSA9IHRoaXMudGhlbWVQaWNrZXJTZXJ2aWNlLmlzRGFya01vZGU7XG4gIH1cblxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMudGhlbWVQaWNrZXJTZXJ2aWNlLnNldFRoZW1lKCk7XG4gICAgdGhpcy5pc0RhcmtNb2RlID0gdGhpcy50aGVtZVBpY2tlclNlcnZpY2UuaXNEYXJrTW9kZTtcbiAgfVxufVxuIiwiPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cIm9uQ2xpY2soKVwiPlxuICA8bWF0LWljb24gKm5nSWY9XCJpc0RhcmtNb2RlIDsgZWxzZSBlbHNlQmxvY2tcIj5kYXJrX21vZGU8L21hdC1pY29uPlxuICA8bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5cbiAgICA8bWF0LWljb24+bGlnaHRfbW9kZTwvbWF0LWljb24+XG4gIDwvbmctdGVtcGxhdGU+XG48L2J1dHRvbj5cbiJdfQ==