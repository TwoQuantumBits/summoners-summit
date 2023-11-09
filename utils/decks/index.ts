import CryptoJS from "crypto-js";
import { ALL_CHARACTER_CARDS, actionCardOrder, characterCardOrder } from "../cards";
import type { ActionCard, Deck } from "../types";

export function encodeDeckCode(deck: Deck): string {
  const cardEncodingIds: number[] = [
    ...deck.characterCards.map<number>(card => characterCardOrder[card] + 1),
    ...Object.entries(deck.actionCards)
      .flatMap<number>(([card, count]) => Array.from(
        { length: count },
        () => actionCardOrder[card as ActionCard] + ALL_CHARACTER_CARDS.length + 1,
      )),
  ];

  const encodingString = cardEncodingIds.map(id => id.toString(2).padStart(12, "0")).concat(["0000"]).join("");
  const byteArray = new Array<string>(50);
  for (let i = 0; i < 25; i++) {
    byteArray[i * 2] = encodingString.slice(8 * i, 8 * (i + 1));
    byteArray[i * 2 + 1] = encodingString.substring(8 * (i + 25), 8 * (i + 26));
  }

  const lastByte = Math.floor(Math.random() * 4) * 64;
  const u8Array = new Uint8Array(byteArray.map(byte => Number.parseInt(byte, 2) + lastByte).concat([lastByte]));
  const byteString = [...u8Array.values()].map(byte => byte.toString(16).padStart(2, "0")).join("");
  const wordArray = CryptoJS.enc.Hex.parse(byteString);
  return CryptoJS.enc.Base64.stringify(wordArray);
}