import { Country } from "./Country";
import { Season } from "./Season";

export interface League {
    id: number,
    name: string,
    type?: string,
    logo: string,
    flag: string,
    round?: string, 
    country: Country | string,
    season: Season | number
}