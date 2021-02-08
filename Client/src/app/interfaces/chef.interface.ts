import { Restaurant } from './restaurant.interfece';

export interface Chef {
    _id: string;
    restaurants: Restaurant[];
    name: string;
    description: string;
    weekly: boolean;
    img_src: string;
}
    _id: string,
    restaurants: Restaurant[],
    name: string,
    description: string,
    weekly: boolean,
    img_src : string
};
