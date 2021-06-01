import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

const API_PATH = 'https://jsonplaceholder.typicode.com/todos/1';

@Injectable({
  providedIn: 'root'
})
export class SimpleQuestionService {

  constructor(private http: HttpClient) { }

  getResponse(question: string):Observable<any>{
    return this.http.get<any>(API_PATH)
  }

}
