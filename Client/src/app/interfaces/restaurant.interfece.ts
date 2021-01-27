export interface Restaurant {
    _id: string,
    name: string,
    chef: { _id: string, name: string },
    img_src: string,
    popularity?: number
}