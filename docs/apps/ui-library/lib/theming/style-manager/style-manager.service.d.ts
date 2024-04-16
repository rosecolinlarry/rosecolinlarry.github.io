import * as i0 from "@angular/core";
export declare class StyleManagerService {
    setStyle(key: string, href: string): void;
    removeStyle(key: string): void;
    getLinkElementForKey(key: string): Element;
    getExistingLinkElementByKey(key: string): Element | null;
    createLinkElementWithKey(key: string): HTMLLinkElement;
    getClassNameForKey(key: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StyleManagerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StyleManagerService>;
}
