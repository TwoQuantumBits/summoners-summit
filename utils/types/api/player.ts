import type { Game, Match, Player } from "../output-data";

export interface ApiPlayerData {
  player: Player;
}

export interface ApiPlayerStatsValue {
  playerId: string;
  uniqueName: string;
  aliases?: string[];
  matchTotal: number;
  matchWin: number;
  gameTotal: number;
  gameWin: number;
}

export interface ApiPlayerStatsMapData {
  playerStatsMap: Record<string, ApiPlayerStatsValue>;
}

export interface ApiPlayerStatsByVersionData {
  statsByVersion: Record<string, ApiPlayerStatsByVersionValue>;
}
export interface ApiPlayerStatsByVersionValue {
  matchTotal: number;
  matchWin: number;
  gameTotal: number;
  gameWin: number;
}

export interface ApiPlayerMatchesData {
  matches: Record<string, Match>;
  games: Record<string, Game>;
}
