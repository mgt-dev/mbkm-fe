import { atom } from "nanostores";

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 */

/**
 * @type {import("nanostores").PreinitializedWritableAtom<User>}
 */
export const $user = atom();
