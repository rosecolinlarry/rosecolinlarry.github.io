import { StyleManagerService } from '../style-manager/style-manager.service';
import * as i0 from "@angular/core";
export declare class ThemePickerService {
    private styleManager;
    constructor(styleManager: StyleManagerService);
    LOCAL_STORAGE_KEY: string;
    defaultTheme: string;
    get lightTheme(): string;
    get darkTheme(): string;
    get currentTheme(): string;
    setTheme(theme: string): void;
    getTheme(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemePickerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThemePickerService>;
}
