import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  title = 'todo-list';
  tasks = [
    "Visit Ann",
    "Call dad",
    "Go to the gym",
    "Wash the car",
    "Shop for the party"
  ]

  add(newTask: string)
  {
    this.tasks.push(newTask);
  }

  remove(existingTask: string)
  {
  var userConfirmed = confirm(`Are you sure you want to delete this task? \n "${existingTask}"`); 

    if (userConfirmed)
    { 
    this.tasks = this.tasks.filter(task => task !== existingTask);
    }
  }


}
