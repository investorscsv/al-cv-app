import enJson from "./en.json";
import ukJson from "./uk.json";
import type { Dictionary, Locale } from "./types";

const en: Dictionary = enJson;
const uk: Dictionary = ukJson;

export type { Dictionary, Locale } from "./types";

export function getDictionary(locale: Locale): Dictionary {
  return locale === "uk" ? uk : en;
}
