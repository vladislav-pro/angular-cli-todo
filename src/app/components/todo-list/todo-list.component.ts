import { Component, OnInit } from '@angular/core';
import {Todo} from "../../Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodo().subscribe((todo)=>(this.todos=todo));
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo)
      .subscribe(()=>(this.todos = this.todos.filter(t => t.id !== todo.id)));
  }

}
