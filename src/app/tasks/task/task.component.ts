import { TasksService } from './../tasks.service';
import { Component, Input } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { Inject } from '@angular/core';

interface Task{
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  private tasksService = Inject(TasksService);


  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }

}