import { Photo } from "./photo";

export interface City{
    id:number,
    description:string,
    name:string,
    userId:number,
    photos:Photo[],
    photoUrl:string
}