import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from "../../Todo";
import { UiService } from "../../services/ui.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter<Todo>()
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddForm: boolean = false;
  subscription: Subscription;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle()
      .subscribe( value => this.showAddForm = value)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add task');
    }
    if (!this.day) {
      alert('Please add day');
    }

    const newTodo = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTodo.emit(newTodo);

    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
