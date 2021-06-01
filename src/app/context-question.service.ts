import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

const API_PATH = "http://127.0.0.1:8080/predictions/reader";

const optionRequete = {
  headers: new HttpHeaders({ 
    'content-type':'Multipart/form-data',
  }),  
};


@Injectable({
  providedIn: 'root'
})
export class ContextQuestionService {

  constructor(private http: HttpClient) { }

  

  getResponse(question: string,context:string):Observable<any>{
  	const data = {question : question , context : context}
  	//console.log("data : ",data)
  	//return this.http.post<any>(API_PATH , data)
    return this.http.post<any>(API_PATH , data , optionRequete)
  }
}
