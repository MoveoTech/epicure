import { Restaurant } from "./restaurant.interfece";

export interface Dish {
    _id: string,
    dish_name: string,
    restaurant: Restaurant,
    description: string,
    dish_price: string,
    img_src: string,
    icon?: string
}