import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

const API_PATH = 'http://127.0.0.1:8080/predictions/QA';

const optionRequete = {
  headers: new HttpHeaders({ 
    'content-type':'Multipart/form-data',
  }),  
};

@Injectable({
  providedIn: 'root'
})
export class SimpleQuestionService {

  constructor(private http: HttpClient) { }

  getResponse(question: string):Observable<any>{
  	const data = {question : question}
    return this.http.post<any>(API_PATH , data , optionRequete)
  }

}
