import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { IMaterial } from './material';

@Injectable()
export class OverviewService {

  private _url = 'api/materials';

  constructor( private http: HttpClient ) { }

 /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /* get materials from the server */
  getMaterials(): Observable<IMaterial[]> {
    return this.http.get<IMaterial[]>(this._url)
      .pipe(
        tap(materials => console.log('fetched materials')),
        catchError(this.handleError('getMaterials', []))
      );
  }

  /* get material by id. will 404 if id not found */
  getMaterial(id: number): Observable<IMaterial> {
    const url = `${this._url}/${id}`;
    return this.http.get<IMaterial>(url)
      .pipe(
        tap(_ => console.log(`fetched material with id ${id}`)),
        catchError(this.handleError<IMaterial>(`getMaterial with id ${id}`))
      );
  }

}
