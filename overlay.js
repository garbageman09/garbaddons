import { @Vigilant, @SelectorProperty,  @TextProperty, @SwitchProperty} from '../Vigilance';

@Vigilant("GarbAddons","§2§lGarbAddons §d§l:3")
class Settings {
 
   @TextProperty({
     name: "Kick Notifier",
     description: "Notifies party when kicked",
     category: "General"
  })
   kickMsg = ''
   
   @SwitchProperty({
      name: "Party Commands",
      description: "Funny Party Commands /garblist to see them all",
      category: "General"
   })
   PartyCommands = false
   
   @TextProperty({
      name: "PB",
      description: "Put PB here for .PB command (Only if you have Party Commands Enabled)",
      category: "General"
   })
   PB = '1:05'
  
   constructor() {
     this.initialize(this);
     this.setCategoryDescription('General', "&5&k&r &dGarbAddons by the_garbageman09 &5&k&r \n&2DM ogmudbone. on &9&lDiscord&r&2 for problems.&r\n &f&o not like i will ever fix this is just for fun")
   }
}

export default new Settings();