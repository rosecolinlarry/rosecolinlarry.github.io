import { ThemePickerService } from '../theming/theme-picker/theme-picker.service';
import * as i0 from "@angular/core";
export declare class DarkmodeButtonComponent {
    isDarkMode: boolean;
    themePickerService: ThemePickerService;
    constructor(themePickerService: ThemePickerService);
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DarkmodeButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DarkmodeButtonComponent, "lib-darkmode-button", never, {}, {}, never, never, true, never>;
}
