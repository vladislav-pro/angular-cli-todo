import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from "../Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //if you want to run fake JSON server use npm run server in oun directory
  private apiURL = "http://localhost:5000/todos"

  constructor(private http:HttpClient) { }

  getTodo(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apiURL)
  }

  deleteTodo(todo: Todo): Observable<Todo>{
    const url = `${this.apiURL}/${todo.id}`
    return this.http.delete<Todo>(url)
  }
}
