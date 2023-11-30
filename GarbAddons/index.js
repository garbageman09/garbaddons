import Settings from "./overlay";

function makeid() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789012345678901234567890123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 8; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
 charactersLength));
   }
   return result;
}
const ChatComponentText = Java.type("net.minecraft.util.ChatComponentText");
register("command", () => Settings.openGUI()).setName('garb', true);
register("command", () => Settings.openGUI()).setName('garbaddons', true);
 
{registerWhen(register("chat", () => {
  ChatLib.say(`/pc ${Settings.kickMsg}`) 
  }).setCriteria("&r&cYou were kicked while joining that server!&r"));
}

  

  

