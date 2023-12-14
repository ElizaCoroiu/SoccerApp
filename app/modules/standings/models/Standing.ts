import { Stats } from "./Stat";
import { Team } from "./Team";

export interface Standing {
    rank: number;
    team: Team;
    points: number;
    goalsDiff: number;
    group: string;
    form: string;
    status: string;
    description: string;
    all: Stats;
    home: Stats;
    away: Stats;
    update: string;
  }