import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecursiveService {

  // Calculate the fibonacci number for a given index using
  // recursion. Very slow.
  calculateFibonacci(index: number): number {
    if (index == 0) { return 0; }
    if (index > 0) {
      if (index == 1 || index == 2) { return 1; }
      return this.calculateFibonacci(index - 1) + this.calculateFibonacci(index - 2);
    }

    if (index < 0) {
      return this.calculateFibonacci(index + 2) - this.calculateFibonacci(index + 1);
    }

    return 0;
  }

  // Generates the fibonacci sequence from a minimum index to a maximum
  // Examples:
  // min: -9, max: 4 => [34,-21,13,-8,5,-3,2,-1,1,0,1,1,2,3]
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
}
