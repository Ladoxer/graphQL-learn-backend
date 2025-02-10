import { Query, Resolver } from '@nestjs/graphql';
import { Task } from './task.model';

@Resolver(() => Task)
export class TaskResolver {
  private tasks: Task[] = [
    { id: '1', title: 'Learn GraphQL', description: 'Understand how GraphQL works' },
    { id: '2', title: 'Build API', description: 'Create a GraphQL API with NestJS' }
  ];

  @Query(() => [Task])
  getTasks(): Task[] {
    return this.tasks;
  }
}
