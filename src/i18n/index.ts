import en from "./en.json";
import uk from "./uk.json";

export type Locale = "en" | "uk";

export function getDictionary(locale: Locale) {
  return locale === "uk" ? uk : en;
}
