import Settings from "./overlay";
import { delay } from "./thread"; // <---- Shouthout VolcAddons

// Macro Stopper
registerWhen(register("chat", () => {
  delay(() => { ChatLib.command('bp 1') }, 1000);
}).setCriteria("&r&8Profile ID: ${profile}&r"), () => Settings.Macro !== 0);
