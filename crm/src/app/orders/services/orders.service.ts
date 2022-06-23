import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

// décorateur
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) { }

  // methodes
  // this.http.get()

}
