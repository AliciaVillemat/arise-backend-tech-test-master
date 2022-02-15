import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Price {
  @Field()
  currency!: string;
  @Field() // $float type
  amount!: number;
}
