import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType() // Defines GraphQL Object Type
export class Task {
  @Field(() => ID) // GraphQL ID type
  id: string;

  @Field() // GraphQL String type
  title: string;

  @Field({ nullable: true }) // Field can be null
  description?: string;
}
