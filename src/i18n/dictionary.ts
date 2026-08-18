/**
 * The dictionary contract. English is the reference implementation, so its shape *is* the
 * contract — every other locale is typed against it and cannot compile while incomplete.
 */

import { en } from "./locales/en";

export type Dictionary = typeof en;
