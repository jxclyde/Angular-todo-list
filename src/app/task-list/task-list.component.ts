import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  constructor(private route: ActivatedRoute) { }
  
  newTaskTitle: string = "";
  date: Date = new Date();

  ngOnInit(): void { 
    this.date = new Date(this.route.snapshot.params['date']);
  }
  
  tasks: Task[] = [
    new Task("Visit Ann"),
    new Task("Call dad"),
    new Task("Go to the gym"),
    new Task("Wash the car"),
    new Task("Shop for the party")
  ]

  add(taskNgForm: NgForm)
  {
    if (taskNgForm.touched == false )
    {
      return;
    }
    if (taskNgForm.valid == false)
    {
      return  
    }

    this.tasks.push(new Task(this.newTaskTitle));
    taskNgForm.reset({date: this.date});
  }

  remove(existingTask: Task)
  {
  var userConfirmed = confirm(`Are you sure you want to delete this task? \n "${existingTask.title}"`); 

    if (userConfirmed)
    { 
    this.tasks = this.tasks.filter(task => task !== existingTask);
    }
  }
}

class Task
{
  constructor(public title: string){ 

  }

  toggleIsDone(){ 
    this.isDone = !this.isDone;
  }

  public isDone = false;
}
