import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GotService {

  public allBooks = [];
  public allChar = [];
  public allHouse = [];

  baseUrl: string = 'https://anapioficeandfire.com/api';
  booksApi = "https://anapioficeandfire.com/api/books";
  charApi = "https://anapioficeandfire.com/api/characters";
  houseApi = "https://anapioficeandfire.com/api/houses";

  constructor(
    private http: HttpClient
  ) { }

  //method for all book
  viewAllBooks(): Observable<any> {
    return this.http.get<any>(this.booksApi);
  }
  // //method to get current book
  // getCurrentBookById(id: number): Observable<Books> {
  //   return this.http.get<any>(this.booksApi + '/' + id);
  // }

  // //method for all character
  // viewAllChar(): Observable<any> {
  //   return this.http.get<any>(this.charApi);
  // }

  // //method get current charcter
  // getCurrentCharById(id: number): Observable<Character> {
  //   return this.http.get<any>(this.charApi + '/' + id)
  // }

  // //method for all house
  // viewAllHouse(): Observable<any> {
  //   return this.httpget<any>(this.houseApi);
  // }

  // //method to get currnt house
  // getCurrentHouseById(id: number): Observable<House> {
  //   return this.http.get<House>(this.houseApi + '/' + id)
  // }

}
