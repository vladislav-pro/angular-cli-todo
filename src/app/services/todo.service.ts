import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from "../Todo";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //if you want to run fake JSON server use npm run server in oun directory
  private apiURL = "http://localhost:5000/todos"

  constructor(private http:HttpClient) { }

  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiURL);
  }

  addTodo(todo: Todo): Observable<Todo>{
    return this.http.post<Todo>(this.apiURL, todo, httpOptions)
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.apiURL}/${todo.id}`;
    return this.http.delete<Todo>(url);
  }

  updateTodoStatus(todo: Todo): Observable<Todo> {
    const url = `${this.apiURL}/${todo.id}`;
    return this.http.put<Todo>(url, todo, httpOptions)
  }

}
