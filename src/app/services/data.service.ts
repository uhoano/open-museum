import { Injectable } from "@angular/core";

import { Museum } from "../models/museum";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  museums: Museum[];
  constructor(private httpClient: HttpClient) {}

  public fetchMuseums(): Observable<any> {
    let museumsObservable: Observable<Museum[]> = this.httpClient.get<Museum[]>(
      "http://localhost:3000/museums"
    );
    return museumsObservable;
  }

  public fetchMuseumById(id: string): Observable<Museum> {
    let museumData: Observable<Museum> = this.httpClient.get<Museum>(
      "http://localhost:3000/museums/" + id
    );
    return museumData;
  }
}
