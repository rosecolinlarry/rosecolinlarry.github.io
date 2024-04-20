import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ThemePickerService {
    constructor() {
        this.LOCAL_STORAGE_KEY = 'theme';
        this.lightModeClassName = 'light-mode';
        this.darkModeClassName = 'dark-mode';
        this.defaultTheme = this.darkModeClassName;
    }
    get currentTheme() {
        return this.getTheme();
    }
    get isDarkMode() {
        return this.currentTheme == this.darkModeClassName;
    }
    setTheme() {
        if (this.isDarkMode) {
            document.body.classList.remove(this.darkModeClassName); // Remove darkmode
            document.body.classList.add(this.lightModeClassName); // Add lightmode
            localStorage.setItem(this.LOCAL_STORAGE_KEY, this.lightModeClassName); // Store darkmode as current theme
        }
        else {
            document.body.classList.add(this.darkModeClassName); // Add darmmode
            document.body.classList.remove(this.lightModeClassName); // Remove lightmode
            localStorage.setItem(this.LOCAL_STORAGE_KEY, this.darkModeClassName); // Store darkmode as current theme
        }
    }
    getTheme() {
        return localStorage.getItem(this.LOCAL_STORAGE_KEY) ?? this.defaultTheme;
    }
    static { this.ɵfac = function ThemePickerService_Factory(t) { return new (t || ThemePickerService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ThemePickerService, factory: ThemePickerService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemePickerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3NyYy9saWIvdGhlbWluZy90aGVtZS1waWNrZXIvdGhlbWUtcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLGtCQUFrQjtJQUgvQjtRQUlFLHNCQUFpQixHQUFHLE9BQU8sQ0FBQztRQUM1Qix1QkFBa0IsR0FBRyxZQUFZLENBQUM7UUFDbEMsc0JBQWlCLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLGlCQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0tBMEJ2QztJQXhCQyxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNyRCxDQUFDO0lBRUQsUUFBUTtRQUVOLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtZQUMxRSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7WUFDdEUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxrQ0FBa0M7UUFDM0csQ0FBQzthQUNJLENBQUM7WUFDSixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxlQUFlO1lBQ3BFLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtZQUM1RSxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGtDQUFrQztRQUMxRyxDQUFDO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzRSxDQUFDO21GQTdCVSxrQkFBa0I7dUVBQWxCLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRmpCLE1BQU07O2lGQUVQLGtCQUFrQjtjQUg5QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZVBpY2tlclNlcnZpY2Uge1xuICBMT0NBTF9TVE9SQUdFX0tFWSA9ICd0aGVtZSc7XG4gIGxpZ2h0TW9kZUNsYXNzTmFtZSA9ICdsaWdodC1tb2RlJztcbiAgZGFya01vZGVDbGFzc05hbWUgPSAnZGFyay1tb2RlJztcbiAgZGVmYXVsdFRoZW1lID0gdGhpcy5kYXJrTW9kZUNsYXNzTmFtZTtcblxuICBnZXQgY3VycmVudFRoZW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGhlbWUoKTtcbiAgfVxuICBnZXQgaXNEYXJrTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VGhlbWUgPT0gdGhpcy5kYXJrTW9kZUNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldFRoZW1lKCkge1xuICAgIFxuICAgIGlmICh0aGlzLmlzRGFya01vZGUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRhcmtNb2RlQ2xhc3NOYW1lKTsgLy8gUmVtb3ZlIGRhcmttb2RlXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodGhpcy5saWdodE1vZGVDbGFzc05hbWUpOyAvLyBBZGQgbGlnaHRtb2RlXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLkxPQ0FMX1NUT1JBR0VfS0VZLCB0aGlzLmxpZ2h0TW9kZUNsYXNzTmFtZSk7IC8vIFN0b3JlIGRhcmttb2RlIGFzIGN1cnJlbnQgdGhlbWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodGhpcy5kYXJrTW9kZUNsYXNzTmFtZSk7IC8vIEFkZCBkYXJtbW9kZVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMubGlnaHRNb2RlQ2xhc3NOYW1lKTsgLy8gUmVtb3ZlIGxpZ2h0bW9kZVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5MT0NBTF9TVE9SQUdFX0tFWSwgdGhpcy5kYXJrTW9kZUNsYXNzTmFtZSk7IC8vIFN0b3JlIGRhcmttb2RlIGFzIGN1cnJlbnQgdGhlbWVcbiAgICB9XG4gIH1cblxuICBnZXRUaGVtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLkxPQ0FMX1NUT1JBR0VfS0VZKSA/PyB0aGlzLmRlZmF1bHRUaGVtZTtcbiAgfVxufVxuIl19