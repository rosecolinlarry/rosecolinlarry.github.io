import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleManagerService {
  // Set stylesheet w/ specified key
  setStyle(key: string, href: string) {
    this.getLinkElementForKey(key).setAttribute("href", href);
  }

  // Remove stylesheet w/ specified key
  removeStyle(key: string, href: string) {
    const existingLinkElement = this.getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }

  getLinkElementForKey(key: string) {
    return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
  }

  getExistingLinkElementByKey(key: string) {
    return document.head.querySelector(
      `link[rel="styleSheet"].${this.getClassNameForKey(key)}`
    );
  }

  createLinkElementWithKey(key: string) {
    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet")
    linkElement.classList.add(this.getClassNameForKey(key));
    document.head.appendChild(linkElement);
    return linkElement;
  }

  getClassNameForKey(key: string) {
    return `app-${key}`
  }
}
