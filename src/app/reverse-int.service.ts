import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReverseIntService {
  reverse(x: number): number {
    // TODO do this correctly to handle not being able to store 64 bit int
    const isNegative = x < 0;
    x = Math.abs(x);

    const xStr = x.toString();
    let reversedXStr = isNegative ? "-" : "";
    for (let i = xStr.length - 1; i >= 0; i--) {
      reversedXStr += xStr.charAt(i);
    }
    const reversedX = Number.parseInt(reversedXStr) ?? 0;
    const maxInt = Math.pow(2, 31) - 1;
    const minInt = -Math.pow(2, 31);

    if (reversedX > maxInt || reversedX < minInt) return 0;
    return reversedX;
  }
}
