import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Modules Interfaces
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<string> = [
    "Soba",
    "Arroz",
    "Ovo"
  ];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  private url: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  /*public getList() {
    return this.list;
  }*/

  public getList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    );
  }

  /*public addFood(value: string) {
    this.foodListAlert(value);
    return this.list.push(value);
  }*/

  public addFood(value: string): Observable<FoodList> {
    return this.http.post<FoodList>(`${this.url}list-food`, { nome: value }, this.httpOptions)
            .pipe(
              res => res,
              error => error
            );
  }

  public editFood(id:number, value: string): Observable<FoodList> {
    return this.http.put<FoodList>(`${this.url}list-food/${id}`, { nome: value })
            .pipe(
              res => res,
              error => error
            );
  }

  public deleteFood(id:number): Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`)
            .pipe(
              res => res,
              error => error
            );
  }

  /*public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }*/

  public foodListAlert(value: FoodList) {
    return this.emitEvent.emit(value);
  }
}
