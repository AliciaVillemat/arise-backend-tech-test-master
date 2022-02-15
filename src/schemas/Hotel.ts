import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Hotel {
  @Field()
  id!: number;
  @Field()
  partner_ref!: string;
  @Field()
  name!: string;
  @Field() // $url type
  url!: string;
  @Field()
  photos!: string[];
  @Field() // matching $^[A-Z]{2}
  country!: string;
}
