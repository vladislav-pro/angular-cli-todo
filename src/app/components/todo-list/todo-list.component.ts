import { Component, OnInit } from '@angular/core';
import {Todo} from "../../Todo";
import {MockedTodoList} from "../../mocked-todo-list";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = MockedTodoList;

  constructor() { }

  ngOnInit(): void {
  }

}
