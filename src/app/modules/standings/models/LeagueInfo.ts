import { Standing } from "./Standing";

export interface LeagueInfo {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    standings: Standing[][];
}

export interface LeagueResp {
    league: LeagueInfo;
}
  