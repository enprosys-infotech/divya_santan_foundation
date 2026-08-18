import type { Lang } from "../config";
import type { Dictionary } from "../dictionary";
import { en } from "./en";
import { hi } from "./hi";

/** Every supported language mapped to its dictionary. */
export const DICTIONARIES: Record<Lang, Dictionary> = { en, hi };
