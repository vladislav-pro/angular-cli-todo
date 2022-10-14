import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Todo} from "../../Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>()
  @Input() todo!: Todo;

  constructor() {

  }

  ngOnInit(): void {
  }

  onDelete(todo: any) {
    this.onDeleteTodo.emit(todo)
  }

}
