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
      name: "Macro Stopper",
      description: "Opens /bp 1 menu when island is changed. Make sure 1. wherever your cursor starts at in /bp 1, make sure that slot is clear. 2. You do get the Profile ID: .... messages in chat",
      category: "General"
   })
   Macro = false
   
   @TextProperty({
      name: "PB",
      description: "Put PB here for .PB command (Only if you have Party Commands Enabled)",
      category: "cba"
   })
   PB = '1:05'
  
   constructor() {
     this.initialize(this);
     this.setCategoryDescription('General', "&5&k&r &dGarbAddons by the_garbageman09 &5&k&r \n&2DM ogmudbone. on &9&lDiscord&r&2 for problems.&r\n &f&o not like i will ever fix this is just for fun")
   }
}

export default new Settings();