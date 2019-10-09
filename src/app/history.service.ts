import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  uri = 'http://localhost:4000/history';

  constructor(private http: HttpClient) { }

  addHistory(category, content) {
    const obj = {
      category: category,
      content:content
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}
