import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { MagicItem } from '../magic-item/magic-item';
import { ResourceList } from '../../shared/Interfaces/FantasyShop/resource-list';

@Injectable({
  providedIn: 'root'
})
export class MagicItemService {
  baseUrl = 'https://www.dnd5eapi.co/api/';
  endpoint = 'magic-items/'
  constructor(private http: HttpClient) { }

  // GET List of all magic items
  get(): Observable<ResourceList> {
    return this.http.get<ResourceList>(this.baseUrl + this.endpoint)
      .pipe(
        catchError(this.handleError<ResourceList>(this.endpoint)));
  }

  // GET A magic item by index
  getById(index: string): Observable<MagicItem> {
    return this.http.get<MagicItem>(this.baseUrl + this.endpoint + index)
      .pipe(
        catchError(this.handleError<MagicItem>(this.endpoint + index))
      );
  }

  // Handle any thrown errors
  handleError<T>(operation = 'operation', result?: T) {
    return (error: unknown): Observable<T> => {
      console.log(operation);
      console.log(error);
      return of(result as T);
    }
  }
}
