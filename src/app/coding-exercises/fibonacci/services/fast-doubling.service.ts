import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FastDoublingService {
  // Find the Nth Fibonacci number using Fast Doubling Method. Very fast.
  calculateFibonacci(index: number): number {
    return this.fastDoubling(index);
  }

  // Generates the fibonacci sequence from a minimum index to a maximum
  // Examples:
  // min: 0, max: 4 => [0,1,1,2,3]
  calculateFibonacciSequence(min: number, max: number): number[] {

    if (max < min) throw new Error(`Value for min (${min}) must be greater than or equal to max (${max})`)

    const sequence: number[] = []

    this.generateRangeArray(min, max).forEach(i => {
      sequence.push(this.calculateFibonacci(i));
    });

    return sequence;
  }

  // Generate a sorted array of integers from a min to max
  // Examples:
  // min: -5, max: 3 => [-5,-4,-3,-2,-1,0,1,2,3]
  // min: 2, max: 8 => [2, 3, 4, 5, 6, 7, 8]
  // min: 5, max: 3 => Errors
  generateRangeArray(min: number, max: number): number[] {

    if (max < min) throw new Error(`Value for min (${min}) must be greater than or equal to max (${max})`)

    const array: number[] = [];

    while (min <= max) {
      array.push(min);
      min++;
    }

    return array;
  }

  // Function calculate the N-th fibonacci
  // number using fast doubling method.
  // Attempt to allow for negative numbers
  fastDoubling(n: number): number {
    let a = 0;
    let b = 1;
    for (let i = 31; i >= 0; i--) {
      const d = a * (b * 2 - a);
      const e = a * a + b * b;
      a = d;
      b = e;
      if (((Math.abs(n) >> i) & 1) != 0) {
        const c = a + b;
        a = b;
        b = c;
      }
    }

      // -n is even then F_{-n} = -F_{n}
    if(n < 0 && n%2 == 0) {
      return -a;
    }

    // -n is odd then F_{-n} = F_n, the same for n
    return a;
  }
}
