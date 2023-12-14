import { Fixture } from "./Fixture";
import { Goal } from "./Goal";
import { League } from "./League";
import { Score } from "./Score";
import { Team } from "./Team";

export interface FixtureInfo {
    fixture: Fixture;
    league: League;
    teams: {
        home: Team;
        away: Team;
    };
    goals: Goal;
    score: Score;
}