import { Country } from "./Country";

export interface Team {
    id: number,
    name: string,
    code?: string,
    country?: Country | string,
    founded?: number,
    national?: boolean,
    winner?: boolean,
    logo: string
}