import { @Vigilant, @ButtonProperty,  @SelectorProperty,  @TextProperty,@SwitchProperty } from 'Vigilance';

@Vigilant("GarbAddons","GarbageAddons :3")
class Settings {
  @SelectorProperty({
      name: 'Hotdog Toppings',
      description: 'Select a Hotdog Topping',
      category: 'General',
      subcategory: 'Utilities',
      options: ['Ketchup', 'Mustard'],
  })
  Topping = 0;
  @TextProperty({
      name: 'Kick Notifier',
      description: 'Sends custom message in party chat when kicked &4this is a chat macro',
      category: 'General',
      subcategory: 'Utilities',
      placeholder: 'Empty... :(',
      triggerActionOnInitialization: false,
  })
  kickMsg = 0;
    constructor() {
        this.initialize(this);
        this.setCategoryDescription('General', "&5&k&r &dGarbAddons by the_garbageman09 &5&k&r \n&2DM ogmudbone. on &9&lDiscord&r&2 for problems.&r\n &f&o not like i will ever fix this is just for fun")
    }
}

export default new Settings();