import { Goal } from "./Goal";

export interface Score {
    halftime: Goal;
    fulltime: Goal;
    extratime: Goal;
    penalty: Goal;
  }