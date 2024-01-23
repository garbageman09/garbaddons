import Settings from "./overlay";
import { delay, registerWhen} from "../NwjnAddons/utils/functions";

// Open GUI
register("command", () => {
  Settings.openGUI()
}).setName('garb', true);

// Kick Notifier 
registerWhen(register("chat", () => {
  ChatLib.say(`/pc ${Settings.kickMsg}`) 
}).setCriteria("&cYou were kicked while joining that server!&r"));

// Party Commands - Shoutout Nwjn
registerWhen(register("chat", (player, command) => {
  player = player.removeFormatting().substring(player.indexOf(" ") + 1);
  delay(() => { 
    if (command.includes("Lovekuudra")) {
      ChatLib.say(`/party chat Supplies: 98 | Build: 89 | Stun: 92 | Kuudra 94 https://i.imgur.com/EBsp38Z.png`)
    }
    else if (command.includes("Hypixelsnon")) {
      ChatLib.say(`/party chat Supplies: 90 | Build: 92 | Stun: 85 | Kuudra: 5`)
    }
    else if (command.includes("Zal_Creates")) {
      ChatLib.say(`/party chat Supplies: 92 | Build: 85 | Stun: 100 | Kuudra: 81`)
    }
    else if (command.includes("Shnurk")) {
      ChatLib.say(`/party chat Supplies: 82 | Build: 73 | Stun: N/A | Kuudra: 5.3`)
    }
    else if (command.includes("the_garbageman09")) {
      ChatLib.say(`/party chat Supplies: 10e^-34 | Build: 88 | Stun: 82 | Kuudra: 92`)
    }
    else if (command.includes("LucDJ")) {
      ChatLib.say(`/party chat Supplies: N/A  | Build: 97 | Stun: 82 | Kuudra: 95`)
    }
    else if (command.includes("Tentacledye")) {
      ChatLib.say(`/pc Supplies: 90 | Build: N/A (LEAVES EARLY) | Stun: Plancks Constant | Kuudra: 91`)
    }
    else if (command.includes("PB")) {
      ChatLib.say(`/party chat My PB is ${Settings.PB}`)
    }
    else if (command.includes("Hydrogen")) {
      ChatLib.say(`/party chat Hydrogen is a chemical element; it has symbol H and atomic number 1. It is the lightest element and, at standard conditions, is a gas of diatomic molecules with the formula H₂. It is colorless, odorless, tasteless, non-toxic, and highly combustible.`)
    }
    else if (command.includes("Helium")) {
      ChatLib.say(`/party chat Helium is a chemical element; it has symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas and the first in the noble gas group in the periodic table.`)
    }
    else if (command.includes("Lithium")) {
      ChatLib.say(`/party chat Lithium is a chemical element; it has symbol Li and atomic number 3. It is a soft, silvery-white alkali metal. Under standard conditions, it is the least dense metal and the least dense solid element`)
    }
    else if (command.includes("Beryllium")) {
      ChatLib.say(`/party chat Beryllium is a chemical element; it has symbol Be and atomic number 4. It is a steel-gray, strong, lightweight and brittle alkaline earth metal.`)
    }
    else if (command.includes("Carbon")) {
      ChatLib.say(`/party chat Carbon is a chemical element; it has symbol C and atomic number 6. It is nonmetallic and tetravalent—meaning that its atoms are able to form up to four covalent bonds due to its valence shell exhibiting 4 electrons.`)
    }
    else if (command.includes("Nitrogen")) {
      ChatLib.say(`/party chat Nitrogen is a chemical element; it has symbol N and atomic number 7. Nitrogen is a nonmetal and the lightest member of group 15 of the periodic table, often called the pnictogens. It is a common element in the universe, estimated at seventh in total abundance in the Milky Way and the Solar System.`)
    }
    else if (command.includes("Oxygen")) {
      ChatLib.say(`/party chat Oxygen is a chemical element; it has symbol O and atomic number 8. Oxygen is diatomic allowing to bond with other Oxygen atoms. O2 is vital for combustion reactions`)
    }
    else if (command.includes("Fluorine")) {
      ChatLib.say(`/party chat Fluorine is a chemical element; it has symbol F and atomic number 9. It is the lightest halogen and exists at standard conditions as a highly toxic, pale yellow diatomic gas. Fluorine is extremely reactive, as it reacts with all other elements except for the light inert gases.`)
    }
    else if (command.includes("Neon")) {
      ChatLib.say(`/party chat Neon is a chemical element; it has symbol Ne and atomic number 10. It is the second noble gas in the periodic table. It is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air.`)
    }
    else if (command.includes("Sodium")) {
      ChatLib.say(`/party chat Sodium is a chemical element; it has symbol Na and atomic number 11. It is a soft, silvery-white, highly reactive metal. Sodium is an alkali metal, being in group 1 of the periodic table. Its only stable isotope is ²³Na. The free metal does not occur in nature and must be prepared from compounds.`)
    }
    else if (command.includes("Magneisum")) {
      ChatLib.say(`/party chat Magnesium is a chemical element; it has symbol Mg and atomic number 12. It is a shiny gray metal having a low density, low melting point and high chemical reactivity.`)
    }
  }, 400);
}).setCriteria("Party > ${player}: .${command}"), () => Settings.PartyCommands)












 

  

