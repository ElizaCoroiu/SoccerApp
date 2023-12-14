import { Goal } from "./Goal";

export interface Stats {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: Goal;
  }