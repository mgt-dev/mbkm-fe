import { atom } from "nanostores";

/**
 * @typedef {Object} Auth
 * @property {string} token
 */

/**
 * @type {import("nanostores").PreinitializedWritableAtom<Auth>}
 */
export const $auth = atom();
