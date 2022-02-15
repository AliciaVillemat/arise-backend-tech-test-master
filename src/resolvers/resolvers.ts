import { Availability } from 'src/schemas/Availability';
import { Reservation, ReservationInput } from 'src/schemas/ReservationInput';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';

// TODO Implement a GMAH service with getAvailabilities and createReservation
@Resolver(GMAH)
export class GMAHResolver {
    @Query (() = > [Availability], {nullable: true, Description: 'query availabilities list'})
    async availabilities() {
        return await Availability.find({});
    }

    @Mutation(() => Reservation)
    async saveReservation(@Arg('data') newReservation: ReservationInput) {
        const res = await newReservation.save();
        return res;
    }
  }


