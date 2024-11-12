import { DUMMY_USERS } from './../../dummy-users';
import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';




@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() add = new EventEmitter<NewTaskData>();
  @Output() cancel =  new EventEmitter<void>();
  enteredTitle='';
  enteredSummary='';
  enteredDate='';
  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this. enteredDate,
    })

  }

}
