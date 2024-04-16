import { Component, EventEmitter, Input, Output } from '@angular/core';
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
        this.toggleDarkmode = new EventEmitter();
        this.isDarkmode = themePickerService.currentTheme == themePickerService.darkTheme;
    }
    onClick() {
        this.isDarkmode = !this.isDarkmode;
        this.toggleDarkmode.emit(this.isDarkmode);
        const newTheme = this.isDarkmode ? this.themePickerService.darkTheme : this.themePickerService.lightTheme;
        this.themePickerService.setTheme(newTheme);
    }
    static { this.ɵfac = function DarkmodeButtonComponent_Factory(t) { return new (t || DarkmodeButtonComponent)(i0.ɵɵdirectiveInject(i1.ThemePickerService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DarkmodeButtonComponent, selectors: [["lib-darkmode-button"]], inputs: { isDarkmode: "isDarkmode" }, outputs: { toggleDarkmode: "toggleDarkmode" }, standalone: true, features: [i0.ɵɵProvidersFeature([ThemePickerService, HttpClient]), i0.ɵɵStandaloneFeature], decls: 4, vars: 2, consts: [["elseBlock", ""], ["mat-icon-button", "", 3, "click"], [4, "ngIf", "ngIfElse"]], template: function DarkmodeButtonComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 1);
            i0.ɵɵlistener("click", function DarkmodeButtonComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onClick()); });
            i0.ɵɵtemplate(1, DarkmodeButtonComponent_mat_icon_1_Template, 2, 0, "mat-icon", 2)(2, DarkmodeButtonComponent_ng_template_2_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const elseBlock_r2 = i0.ɵɵreference(3);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isDarkmode)("ngIfElse", elseBlock_r2);
        } }, dependencies: [CommonModule, i2.NgIf, MatButtonModule, i3.MatIconButton, MatIconModule, i4.MatIcon] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DarkmodeButtonComponent, [{
        type: Component,
        args: [{ selector: 'lib-darkmode-button', standalone: true, imports: [CommonModule, MatButtonModule, MatIconModule], providers: [ThemePickerService, HttpClient], template: "<button mat-icon-button (click)=\"onClick()\" >\n    <mat-icon *ngIf=\"isDarkmode; else elseBlock;\">dark_mode</mat-icon>\n    <ng-template #elseBlock>\n        <mat-icon>light_mode</mat-icon>\n    </ng-template>\n</button>" }]
    }], () => [{ type: i1.ThemePickerService }], { isDarkmode: [{
            type: Input
        }], toggleDarkmode: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DarkmodeButtonComponent, { className: "DarkmodeButtonComponent", filePath: "lib\\darkmode-button\\darkmode-button.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFya21vZGUtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcHMvdWktbGlicmFyeS9zcmMvbGliL2Rhcmttb2RlLWJ1dHRvbi9kYXJrbW9kZS1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXBwcy91aS1saWJyYXJ5L3NyYy9saWIvZGFya21vZGUtYnV0dG9uL2Rhcmttb2RlLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBZSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7OztJQ0o5QyxnQ0FBOEM7SUFBQSx5QkFBUztJQUFBLGlCQUFXOzs7SUFFOUQsZ0NBQVU7SUFBQSwwQkFBVTtJQUFBLGlCQUFXOztBRGF2QyxNQUFNLE9BQU8sdUJBQXVCO0lBSWxDLFlBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBRGhELG1CQUFjLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkUsSUFBSSxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxZQUFZLElBQUksa0JBQWtCLENBQUMsU0FBUyxDQUFDO0lBQ3BGLENBQUM7SUFHRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7UUFDMUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDO3dGQWRVLHVCQUF1QjtvRUFBdkIsdUJBQXVCLGdMQUp2QixDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQzs7WUNaN0MsaUNBQTZDO1lBQXJCLDBJQUFTLGFBQVMsS0FBQztZQUV2QyxBQURBLGtGQUE4Qyw0R0FDdEI7WUFHNUIsaUJBQVM7OztZQUpNLGNBQWtCO1lBQUEsQUFBbEIscUNBQWtCLDBCQUFlOzRCRFVwQyxZQUFZLFdBQUUsZUFBZSxvQkFBRSxhQUFhOztpRkFLM0MsdUJBQXVCO2NBUm5DLFNBQVM7MkJBQ0UscUJBQXFCLGNBQ25CLElBQUksV0FDUCxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLGFBQzVDLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDO21EQU0zQyxVQUFVO2tCQURULEtBQUs7WUFFSSxjQUFjO2tCQUF2QixNQUFNOztrRkFISSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgVGhlbWVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vdGhlbWluZy90aGVtZS1waWNrZXIvdGhlbWUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWRhcmttb2RlLWJ1dHRvbicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1RoZW1lUGlja2VyU2VydmljZSwgSHR0cENsaWVudF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXJrbW9kZS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vZGFya21vZGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgRGFya21vZGVCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKVxuICBpc0Rhcmttb2RlOiBib29sZWFuO1xuICBAT3V0cHV0KCkgdG9nZ2xlRGFya21vZGU6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0aGVtZVBpY2tlclNlcnZpY2U6IFRoZW1lUGlja2VyU2VydmljZSkgeyBcbiAgICB0aGlzLmlzRGFya21vZGUgPSB0aGVtZVBpY2tlclNlcnZpY2UuY3VycmVudFRoZW1lID09IHRoZW1lUGlja2VyU2VydmljZS5kYXJrVGhlbWU7XG4gIH1cbiAgXG5cbiAgb25DbGljaygpIHtcbiAgICB0aGlzLmlzRGFya21vZGUgPSAhdGhpcy5pc0Rhcmttb2RlO1xuICAgIHRoaXMudG9nZ2xlRGFya21vZGUuZW1pdCh0aGlzLmlzRGFya21vZGUpO1xuICAgIGNvbnN0IG5ld1RoZW1lID0gdGhpcy5pc0Rhcmttb2RlID8gdGhpcy50aGVtZVBpY2tlclNlcnZpY2UuZGFya1RoZW1lIDogdGhpcy50aGVtZVBpY2tlclNlcnZpY2UubGlnaHRUaGVtZTtcbiAgICB0aGlzLnRoZW1lUGlja2VyU2VydmljZS5zZXRUaGVtZShuZXdUaGVtZSk7XG4gIH1cbn1cbiIsIjxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJvbkNsaWNrKClcIiA+XG4gICAgPG1hdC1pY29uICpuZ0lmPVwiaXNEYXJrbW9kZTsgZWxzZSBlbHNlQmxvY2s7XCI+ZGFya19tb2RlPC9tYXQtaWNvbj5cbiAgICA8bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5cbiAgICAgICAgPG1hdC1pY29uPmxpZ2h0X21vZGU8L21hdC1pY29uPlxuICAgIDwvbmctdGVtcGxhdGU+XG48L2J1dHRvbj4iXX0=