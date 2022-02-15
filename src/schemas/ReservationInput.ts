import { Field, InputType, ObjectType } from "type-graphql";
import { Price } from "./Price";

@InputType({ description: "New reservation" })
export class ReservationInput {
  @Field()
  hotel_partner_ref!: string;
  @Field()
  room_type_partner_ref!: string;
  @Field()
  primary_contact!: Person;
  @Field()
  adults!: number;
  @Field()
  children?: number;
  @Field()
  price!: Price;
}

@ObjectType()
export class Reservation {
  // To implement
}

export interface Person {
  first_name: string;
  last_name: string;
  address_lines: string[];
}
