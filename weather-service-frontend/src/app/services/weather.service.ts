import { AppStorage } from './../core/AppStorage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

   searchByCityOrCountryURl='';
  constructor(private http: HttpClient,private appStorage:AppStorage) { }

  searchByPlace(place:string): Observable<any[]> {
    const url=this.appStorage.serverPath+'searchByPlace?city_country='+place;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError<any[]>(url, []))
    );
  }

  searchByCoordinates(lat:number,lon:number): Observable<any[]> {
    const url=this.appStorage.serverPath+'searchByCoordinates?lat='+lat+'&lon='+lon;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError<any[]>(url, []))
    );
  }

  private handleError<T>(url: string , result?: T) {
    return (error: any): Observable<T> => {
      console.error(url,error); // log to console instead
      return of(result as T);
    };
  }
}
