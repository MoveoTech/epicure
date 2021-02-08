import { Restaurant } from './restaurant.interfece';
import { User } from './user.interface';

export interface Review {
    body: string;
    rating: number;
    restaurant: Restaurant;
    user: User;
    _id: string;
}
