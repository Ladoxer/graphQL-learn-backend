import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Task } from './task.model';
import { TaskService } from './task.service';
import { CreateTaskInput, UpdateTaskInput } from './dto/task.dto';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private taskService: TaskService) {}

  @Query(() => [Task])
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @Query(() => Task)
  getTaskById(@Args('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }

  @Mutation(() => Task)
  createTask(@Args('input') input: CreateTaskInput): Task {
    return this.taskService.createTask(input);
  }

  @Mutation(() => Task)
  updateTask(@Args('id') id: string, @Args('input') input: UpdateTaskInput): Task {
    return this.taskService.updateTask(id, input);
  }

  @Mutation(() => String)
  deleteTask(@Args('id') id: string): string {
    return this.taskService.deleteTask(id);
  }
}
