import { getFlashMessage } from "../src/js/libraries/cookies.js";
import { toast } from "../src/js/libraries/notify.js";

const flashMessage = await getFlashMessage();
if (flashMessage) toast.success(flashMessage);
