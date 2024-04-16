import { EventEmitter } from '@angular/core';
import { ThemePickerService } from '../theming/theme-picker/theme-picker.service';
import * as i0 from "@angular/core";
export declare class DarkmodeButtonComponent {
    private themePickerService;
    isDarkmode: boolean;
    toggleDarkmode: EventEmitter<boolean>;
    constructor(themePickerService: ThemePickerService);
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DarkmodeButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DarkmodeButtonComponent, "lib-darkmode-button", never, { "isDarkmode": { "alias": "isDarkmode"; "required": false; }; }, { "toggleDarkmode": "toggleDarkmode"; }, never, never, true, never>;
}
