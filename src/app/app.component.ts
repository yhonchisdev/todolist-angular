import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCheckSolid,
  heroMoonSolid,
  heroSunSolid,
  heroXMarkSolid,
} from '@ng-icons/heroicons/solid';

type Task = {
  id: number;
  text: string;
  completed: boolean;
  active: boolean;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIconComponent, NgClass, FormsModule],
  providers: [
    provideIcons({
      heroCheckSolid,
      heroMoonSolid,
      heroSunSolid,
      heroXMarkSolid,
    }),
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'todoapp';
  darkMode: boolean = false;
  newTask: Task = {
    id: 0,
    text: '',
    active: false,
    completed: false,
  };
  currentFilter: number = 0;
  allTasks: Task[] = [];
  tasks: Task[] = [];

  toogleDark(): void {
    this.darkMode = !this.darkMode;
  }

  toogleTaskCompleted(): void {
    this.newTask.completed = !this.newTask.completed;
  }

  addTask(event: KeyboardEvent): void {
    if (!this.newTask.text) return;
    if (event.key === 'Enter') {
      this.newTask.id = Date.now();
      this.newTask.active = true;
      this.tasks.push(this.newTask);
      this.allTasks.push(this.newTask);
      this.newTask = {
        id: 0,
        text: '',
        active: false,
        completed: false,
      };
    }
  }

  completeTask(id: number): void {
    const index: number = this.tasks.findIndex((i) => i.id === id);
    if (index === -1) return;
    this.tasks[index].completed = !this.tasks[index].completed;
    if (!this.tasks[index].completed) {
      this.tasks[index].active = true;
    } else {
      this.tasks[index].active = false;
    }
  }

  deleteTask(event: Event, id: number): void {
    event.stopPropagation();
    const index: number = this.tasks.findIndex((i) => i.id === id);
    if (index === -1) return;
    this.tasks.splice(index, 1);
  }

  listAll(): void {
    this.currentFilter = 0;
    this.tasks = this.allTasks;
  }
  listActive(): void {
    this.currentFilter = 1;
    this.tasks = this.allTasks.filter((i) => i.active);
  }

  listCompleted(): void {
    this.currentFilter = 2;
    this.tasks = this.allTasks.filter((i) => i.completed);
  }

  clearCompleted(): void {
    this.tasks = [];
  }
}
