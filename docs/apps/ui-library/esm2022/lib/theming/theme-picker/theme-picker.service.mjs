import { Injectable } from '@angular/core';
import { StyleManagerService } from '../style-manager/style-manager.service';
import * as i0 from "@angular/core";
import * as i1 from "../style-manager/style-manager.service";
export class ThemePickerService {
    constructor(styleManager) {
        this.styleManager = styleManager;
        this.LOCAL_STORAGE_KEY = "theme";
        this.defaultTheme = this.darkTheme;
    }
    get lightTheme() { return "deeppurple-amber"; }
    get darkTheme() { return "purple-green"; }
    get currentTheme() {
        return this.getTheme();
    }
    setTheme(theme) {
        localStorage.setItem(this.LOCAL_STORAGE_KEY, theme);
        this.styleManager.setStyle("theme", `assets/themes/${theme}.css`);
    }
    getTheme() {
        return localStorage.getItem(this.LOCAL_STORAGE_KEY) ?? this.defaultTheme;
    }
    static { this.ɵfac = function ThemePickerService_Factory(t) { return new (t || ThemePickerService)(i0.ɵɵinject(i1.StyleManagerService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ThemePickerService, factory: ThemePickerService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemePickerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.StyleManagerService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcHBzL3VpLWxpYnJhcnkvc3JjL2xpYi90aGVtaW5nL3RoZW1lLXBpY2tlci90aGVtZS1waWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7QUFLN0UsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixZQUFvQixZQUFpQztRQUFqQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFFckQsc0JBQWlCLEdBQUcsT0FBTyxDQUFDO1FBQzVCLGlCQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUgyQixDQUFDO0lBSzFELElBQUksVUFBVSxLQUFhLE9BQU8sa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELElBQUksU0FBUyxLQUFhLE9BQU8sY0FBYyxDQUFDLENBQUMsQ0FBQztJQUNsRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQ3hCLE9BQU8sRUFDUCxpQkFBaUIsS0FBSyxNQUFNLENBQzdCLENBQUE7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNFLENBQUM7bUZBdEJVLGtCQUFrQjt1RUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFGakIsTUFBTTs7aUZBRVAsa0JBQWtCO2NBSDlCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3R5bGVNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4uL3N0eWxlLW1hbmFnZXIvc3R5bGUtbWFuYWdlci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRoZW1lUGlja2VyU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHlsZU1hbmFnZXI6IFN0eWxlTWFuYWdlclNlcnZpY2UpIHsgfVxyXG5cclxuICBMT0NBTF9TVE9SQUdFX0tFWSA9IFwidGhlbWVcIjtcclxuICBkZWZhdWx0VGhlbWUgPSB0aGlzLmRhcmtUaGVtZTtcclxuXHJcbiAgZ2V0IGxpZ2h0VGhlbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwiZGVlcHB1cnBsZS1hbWJlclwiOyB9XHJcbiAgZ2V0IGRhcmtUaGVtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJwdXJwbGUtZ3JlZW5cIjsgfVxyXG4gIGdldCBjdXJyZW50VGhlbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmdldFRoZW1lKCk7XHJcbiAgfVxyXG5cclxuICBzZXRUaGVtZSh0aGVtZTogc3RyaW5nKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLkxPQ0FMX1NUT1JBR0VfS0VZLCB0aGVtZSk7XHJcbiAgICB0aGlzLnN0eWxlTWFuYWdlci5zZXRTdHlsZShcclxuICAgICAgXCJ0aGVtZVwiLFxyXG4gICAgICBgYXNzZXRzL3RoZW1lcy8ke3RoZW1lfS5jc3NgXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBnZXRUaGVtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuTE9DQUxfU1RPUkFHRV9LRVkpID8/IHRoaXMuZGVmYXVsdFRoZW1lO1xyXG4gIH1cclxufVxyXG4iXX0=