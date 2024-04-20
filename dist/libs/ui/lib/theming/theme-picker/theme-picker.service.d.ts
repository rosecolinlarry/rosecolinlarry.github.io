import * as i0 from "@angular/core";
export declare class ThemePickerService {
    LOCAL_STORAGE_KEY: string;
    lightModeClassName: string;
    darkModeClassName: string;
    defaultTheme: string;
    get currentTheme(): string;
    get isDarkMode(): boolean;
    setTheme(): void;
    getTheme(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemePickerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThemePickerService>;
}
