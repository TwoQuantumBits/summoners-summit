import type { Deck, TournamentRules } from "./output-data";

export interface TournamentRawData {
  name: string;
  type?: "全民积分赛" | "主播资格赛" | "积分赛试办赛";
  gameVersion: string;
  stages: StageRawData[];
}

export interface StageRawData {
  name: string;
  rules?: TournamentRules;
  parts: PartRawData[];
}

export interface PartRawData {
  name?: string;
  date: string;
  matches: MatchRawData[];
}

export interface MatchRawData {
  playerA: string;
  playerB: string;
  winner?: "A" | "B";
  video?: string;
  games: GameRawData[];
}

export interface GameRawData {
  playerACharacters: Deck["characterCards"];
  playerAActions?: Deck["actionCards"];
  playerBCharacters: Deck["characterCards"];
  playerBActions?: Deck["actionCards"];
  starter: "A" | "B" | "";
  winner: "A" | "B";
  turns?: number;
}

export function defineTournament(tournament: TournamentRawData) {
  return tournament;
}

export function defineActions(actions: Deck["actionCards"]) {
  return actions;
}
