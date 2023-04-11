import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private url = 'https://official-joke-api.appspot.com/jokes/programming/';

  constructor(private http: HttpClient) {

  }

  getJokesData(type: string){
    return this.http.get(this.url+type);
  }
}
