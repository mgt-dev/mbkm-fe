import { atom } from "nanostores";

/**
 * @typedef {Object} Setting
 * @property {string} apiUrl
 */

/**
 * @type {import("nanostores").PreinitializedWritableAtom<Setting>}
 */
export const $setting = atom();
