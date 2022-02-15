import { Field, ObjectType } from "type-graphql";
import { Hotel } from "./Hotel";
import { RoomType } from "./RoomType";

@ObjectType()
export class Availability {
  @Field()
  hotel!: Hotel;
  @Field()
  rooms!: RoomType[];
}
