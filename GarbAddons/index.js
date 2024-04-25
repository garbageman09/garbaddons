import Settings from "./overlay";
import "./newFile";

// Open GUI
register("command", () => {
 Settings.openGUI();
}).setCommandName(`garb`, true).setAliases("garbage", "garbo")

// Kick Notifier 
registerWhen(register("chat", () => {
  ChatLib.say(`/pc ${Settings.kickMsg}`) 
}).setCriteria("&cYou were kicked while joining that server!&r"));

