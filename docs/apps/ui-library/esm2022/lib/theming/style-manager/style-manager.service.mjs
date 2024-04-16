import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class StyleManagerService {
    // Set stylesheet w/ specified key
    setStyle(key, href) {
        this.getLinkElementForKey(key).setAttribute("href", href);
    }
    // Remove stylesheet w/ specified key
    removeStyle(key) {
        const existingLinkElement = this.getExistingLinkElementByKey(key);
        if (existingLinkElement) {
            document.head.removeChild(existingLinkElement);
        }
    }
    getLinkElementForKey(key) {
        return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
    }
    getExistingLinkElementByKey(key) {
        return document.head.querySelector(`link[rel="styleSheet"].${this.getClassNameForKey(key)}`);
    }
    createLinkElementWithKey(key) {
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.classList.add(this.getClassNameForKey(key));
        document.head.appendChild(linkElement);
        return linkElement;
    }
    getClassNameForKey(key) {
        return `app-${key}`;
    }
    static { this.ɵfac = function StyleManagerService_Factory(t) { return new (t || StyleManagerService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StyleManagerService, factory: StyleManagerService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StyleManagerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXBwcy91aS1saWJyYXJ5L3NyYy9saWIvdGhlbWluZy9zdHlsZS1tYW5hZ2VyL3N0eWxlLW1hbmFnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLGtDQUFrQztJQUNsQyxRQUFRLENBQUMsR0FBVyxFQUFFLElBQVk7UUFDaEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELHFDQUFxQztJQUNyQyxXQUFXLENBQUMsR0FBVztRQUNyQixNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRSxJQUFJLG1CQUFtQixFQUFFLENBQUM7WUFDeEIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqRCxDQUFDO0lBQ0gsQ0FBQztJQUVELG9CQUFvQixDQUFDLEdBQVc7UUFDOUIsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCwyQkFBMkIsQ0FBQyxHQUFXO1FBQ3JDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQ2hDLDBCQUEwQixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FDekQsQ0FBQztJQUNKLENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxHQUFXO1FBQ2xDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUE7UUFDN0MsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELGtCQUFrQixDQUFDLEdBQVc7UUFDNUIsT0FBTyxPQUFPLEdBQUcsRUFBRSxDQUFBO0lBQ3JCLENBQUM7b0ZBbENVLG1CQUFtQjt1RUFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFGbEIsTUFBTTs7aUZBRVAsbUJBQW1CO2NBSC9CLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0eWxlTWFuYWdlclNlcnZpY2Uge1xyXG4gIC8vIFNldCBzdHlsZXNoZWV0IHcvIHNwZWNpZmllZCBrZXlcclxuICBzZXRTdHlsZShrZXk6IHN0cmluZywgaHJlZjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmdldExpbmtFbGVtZW50Rm9yS2V5KGtleSkuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuICB9XHJcblxyXG4gIC8vIFJlbW92ZSBzdHlsZXNoZWV0IHcvIHNwZWNpZmllZCBrZXlcclxuICByZW1vdmVTdHlsZShrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3QgZXhpc3RpbmdMaW5rRWxlbWVudCA9IHRoaXMuZ2V0RXhpc3RpbmdMaW5rRWxlbWVudEJ5S2V5KGtleSk7XHJcbiAgICBpZiAoZXhpc3RpbmdMaW5rRWxlbWVudCkge1xyXG4gICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKGV4aXN0aW5nTGlua0VsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TGlua0VsZW1lbnRGb3JLZXkoa2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEV4aXN0aW5nTGlua0VsZW1lbnRCeUtleShrZXkpIHx8IHRoaXMuY3JlYXRlTGlua0VsZW1lbnRXaXRoS2V5KGtleSk7XHJcbiAgfVxyXG5cclxuICBnZXRFeGlzdGluZ0xpbmtFbGVtZW50QnlLZXkoa2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGBsaW5rW3JlbD1cInN0eWxlU2hlZXRcIl0uJHt0aGlzLmdldENsYXNzTmFtZUZvcktleShrZXkpfWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVMaW5rRWxlbWVudFdpdGhLZXkoa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcbiAgICBsaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpXHJcbiAgICBsaW5rRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ2V0Q2xhc3NOYW1lRm9yS2V5KGtleSkpO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XHJcbiAgICByZXR1cm4gbGlua0VsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc05hbWVGb3JLZXkoa2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBgYXBwLSR7a2V5fWBcclxuICB9XHJcbn1cclxuIl19