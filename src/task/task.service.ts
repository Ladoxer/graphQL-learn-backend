import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskInput, UpdateTaskInput } from './dto/task.dto';

@Injectable()
export class TaskService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Learn GraphQL',
      description: 'Understand how GraphQL works',
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  createTask(input: CreateTaskInput): Task {
    const newTask: Task = {
      id: uuid(),
      title: input.title,
      description: input.description || '',
    };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: string, input: UpdateTaskInput): Task {
    const task = this.getTaskById(id);
    if (input.title) task.title = input.title;
    if (input.description) task.description = input.description;
    return task;
  }

  deleteTask(id: string): string {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return `Task with ID ${id} deleted successfully`;
  }
}
