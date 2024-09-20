import { getAuth } from "./libraries/cookies.js";
import { baseUrl } from "./customs/settings.js";

const auth = await getAuth();
if (!auth) window.location.replace(`${baseUrl}login`);
