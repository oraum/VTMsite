import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClanService {
  public clanFilters: string[] =
    [
      'All', 'Thirteen', 'Camarilla', 'Sabbat', 'Independent', 'All Clans',
      'All Bloodlines', 'Camarilla (clans only)', 'Sabbat (clans only)',
      'Dark Ages', 'High Clans', 'Low Clans'
    ];
  public clanList: Clan[] = [
    {
      id: 0, name: 'Ahrimanes',
      filters: ['Sabbat', 'All Bloodlines', 'Dark Ages'],
      disciplines: ['Animalism', 'Potence', 'Spiritus']
    },
    {
      id: 1, name: 'Anda',
      filters: ['Independent', 'All Bloodlines', 'Dark Ages'],
      disciplines: ['Animalism', 'Fortitude', 'Protean']
    },
    {
      id: 2, name: 'Assamite',
      filters: ['Thirteen', 'Independent', 'All Clans',
        'Low Clans', 'Dark Ages'
      ],
      disciplines: ['Celerity', 'Obfuscate', 'Quietus']
    },
    {
      id: 3, name: 'Baali',
      filters: ['Independent', 'All Bloodlines', 'Dark Ages'],
      disciplines: ['Daimonion', 'Obfuscate', 'Presence']
    },
    {
      id: 4, name: 'Blood Brothers',
      filters: ['Sabbat', 'All Bloodlines'],
      disciplines: ['Fortitude', 'Potence', 'Sanguinus']
    },
    {
      id: 5, name: 'Brujah',
      filters: ['Thirteen', 'Camarilla', 'All Clans',
        'Camarilla (clans only)', 'High Clans', 'Dark Ages'],
      disciplines: ['Celerity', 'Potence', 'Presence']
    },
    {
      id: 6, name: 'Caitiff',
      filters: ['All Clans', 'Dark Ages'],
      disciplines: []
    }, {
      id: 7, name: 'Cappadocian',
      filters: ['All Clans', 'Dark Ages', 'High Clans'],
      disciplines: ['Auspex', 'Fortitude', 'Necromancy']
    },
    {
      id: 8, name: 'Children of Osiris',
      filters: ['All Bloodlines', 'Dark Ages'],
      disciplines: ['Bardo', '2 other disciplines learned from original clan']
    },
    {
      id: 9, name: 'City Gangrel',
      filters: ['Sabbat', 'All Clans', 'Sabbat (clans only)',],
      disciplines: ['Celerity', 'Obfuscate', 'Protean']
    },
    {
      id: 10, name: 'Country Gangrel',
      filters: ['Sabbat', 'All Clans', 'Sabbat (clans only)',],
      disciplines: ['Animalism', 'Fortitude', 'Protean']
    },
    {
      id: 11, name: 'Daughters of Cacophony',
      filters: ['All Bloodlines'],
      disciplines: ['Fortitude', 'Melpominee', 'Presence']
    },
    {
      id: 12, name: 'Followers of Set',
      filters: ['Thirteen', 'Independent', 'All Clans', 'Dark Ages',
        'Low Clans'],
      disciplines: ['Obfuscate', 'Presence', 'Serpentis']
    },
    {
      id: 13, name: 'Gargoyles',
      filters: ['All Bloodlines'],
      disciplines: ['Flight', 'Fortitude', 'Potence', 'Visceratika']
    },
    {
      id: 14, name: 'Gangrel',
      filters: ['Thirteen', 'Independent', 'All Clans', 'Low Clans',
        'Dark Ages'],
      disciplines: ['Animalism', 'Fortitude', 'Protean']
    },
    {
      id: 15, name: 'Giovanni',
      filters: ['Thirteen', 'Independent', 'All Clans', 'Dark Ages'],
      disciplines: ['Dominate', 'Necromancy', 'Potence']
    },
    {
      id: 16, name: 'Harbingers of Skulls',
      filters: ['Sabbat', 'All Bloodlines'],
      disciplines: ['Auspex', 'Fortitude', 'Necromancy']
    },
    {
      id: 17, name: 'Kiasyd',
      filters: ['All Bloodlines', 'Dark Ages'],
      disciplines: ['Dominate', 'Obtenebration', 'Mytherceria']
    },
    {
      id: 18, name: 'Lamia',
      filters: ['All Bloodlines', 'Dark Ages'],
      disciplines: ['Fortitude', 'Necromancy', 'Potence']
    },
    {
      id: 19, name: 'Lasombra',
      filters: ['Thirteen', 'Sabbat', 'All Clans', 'Sabbat (clans only)',
        'Dark Ages', 'High Clans'],
      disciplines: ['Dominate', 'Obtenebration', 'Potence']
    },
    {
      id: 20, name: 'Lhiannan',
      filters: ['Independent', 'All Bloodlines', 'Dark Ages'],
      disciplines: ['Animalism', 'Ogham', 'Presence']
    },
    {
      id: 21, name: 'Malkavian',
      filters: ['Thirteen', 'Camarilla', 'All Clans',
        'Camarilla (clans only)', 'Dark Ages', 'Low Clans'],
      disciplines: ['Auspex', 'Dementation', 'Obfuscate']
    },
    {
      id: 22, name: 'Nagaraja',
      filters: ['All Bloodlines', 'Dark Ages'],
      disciplines: ['Auspex', 'Dominate', 'Necromancy']
    },
    {
      id: 23, name: 'Noiad',
      filters: ['All Bloodlines', 'Dark Ages'],
      disciplines: ['Animalism', 'Auspex', 'Protean']
    },
    {
      id: 24, name: 'Nosferatu',
      filters: ['Thirteen', 'Camarilla', 'All Clans',
        'Camarilla (clans only)', 'Dark Ages', 'Low Clans'],
      disciplines: ['Animalism', 'Obfuscate', 'Potence']
    },
    {
      id: 25, name: 'Old Clan Tzimisce',
      filters: ['Dark Ages, High Clans'],
      disciplines: ['Animalism', 'Auspex', 'Dominate']
    },
    {
      id: 26, name: 'Ravnos',
      filters: ['Thirteen', 'Independent', 'All Clans', 'Dark Ages',
        'Low Clans'],
      disciplines: ['Animalism', 'Chimerstry', 'Fortitude']
    },
    {
      id: 27, name: 'Salubri',
      filters: ['Independent', 'All Clans', 'Dark Ages'],
      disciplines: ['Auspex', 'Fortitude', 'Obeah', 'Valeren']
    },
    {
      id: 28, name: 'Samedi',
      filters: ['All Bloodlines'],
      disciplines: ['Fortitude', 'Obfuscate', 'Thanatosis']
    },
    {
      id: 29, name: 'Toreador',
      filters: ['Thirteen', 'Camarilla', 'All Clans',
        'Camarilla (clans only)', 'Dark Ages', 'High Clans'],
      disciplines: ['Auspex', 'Celerity', 'Presence']
    },
    {
      id: 30, name: 'Tremere',
      filters: ['Thirteen', 'Camarilla', 'All Clans',
        'Camarilla (clans only)', 'Dark Ages', 'Low Clans'],
      disciplines: ['Auspex', 'Dominate', 'Thaumaturgy']
    },
    {
      id: 31, name: 'True Brujah',
      filters: ['All Bloodlines', 'Independent', 'Dark Ages'],
      disciplines: ['Potence', 'Presence', 'Temporis']
    },
    {
      id: 32, name: 'Tzimisce',
      filters: ['Thirteen', 'Sabbat', 'All Clans', 'Sabbat (clans only)',
        'Dark Ages', 'High Clans'],
      disciplines: ['Animalism', 'Auspex', 'Vicissitude']
    },
    {
      id: 33, name: 'Ventrue',
      filters: ['Thirteen', 'Camarilla', 'All Clans',
        'Camarilla (clans only)', 'Dark Ages', 'High Clans'],
      disciplines: ['Dominate', 'Fortitude', 'Presence']
    }
  ];
  private clanDescriptions: Map<string, string> = new Map([
    ['Ahrimanes', 'The Ahrimanes are a rare, all-female bloodline of Kindred that originally existed during the Dark Ages, headed by a woman called Ádísa. Sometime during the long night, Ádísa and her bloodline were lost and subsumed into Clan Gangrel. Centuries later, the bloodline was unknowingly resurrected by a woman called Muricia. Since then, the Ahrimanes roam the night again, albeit under a different guise and leader.'],
    ['Anda', 'The Anda were a bloodline of the Gangrel who existed among the Mongols during the Dark Ages. The bloodline\'s progenitor was Dobrul the Brave. The Anda lived openly among their extended families who often acted as their herd. In return for their blood and protection during the day, the Anda would protect the family from harm and use his supernatural powers to the welfare of the family.'],
    ['Assamite', 'The Assamite clan is based in a hidden fortress named Alamut in the Middle East. They are traditionally seen by Western Kindred as dangerous assassins and diablerists, but in truth they are guardians, warriors and scholars who seek to distance themselves from the Jyhad. Throughout their history, they have remained a self-sufficient and independent clan.'],
    ['Baali', 'The Baali are a bloodline of vampires associated with demon worship. Because of their affinity with the unholy, the Baali are particularly vulnerable to holy iconography, holy ground and holy water. Some versions present the true purpose of the Baali as keeping demons sleeping by feeding them with carnage and destruction. But most presentations show them as infernalists, using demon worship to gain additional power.'],
    ['Blood Brothers', 'The Blood Brothers are a rare bloodline of the Sabbat, created by Tremere antitribu and Tzimisce kolduns. Designed to function as perfect combat units, Blood Brothers possess a sort of shared consciousness, working exclusively with the \"circle\" of Blood Brothers with whom they share their "hive mind". The members of a circle will often be fleshcrafted by Tzimisce to appear identical, an outward reflection of their lack of individuality.'],
    ['Brujah', 'The Brujah are a major clan in Vampire: The Masquerade. Quick to anger and always passionate in the Modern Nights, they have been regaining their position as a clan of lofty philosophers and activists, and are often pointed to as a clan of unruly rebels and roughnecks that should not be messed with.'],
    ['Caitiff', 'Caitiff are vampires with no known clan. It can mean that they were abandoned and therefore do not know their lineage, or that they have no traits of the clan that they were embraced into. Caitiff have no inherent clan disciplines, but they also do not have any clan weakness. They are typically looked down upon by every other type of vampire, whether it\'s with distaste or pity.'],
    ['Cappadocian', 'The Cappadocians, also known as the "Clan of Death". Detached scholars obsessed with the mysteries of death, they are now (theoretically) extinct, having been eliminated through a coup de famille by Augustus Giovanni. Unfortunately for the Giovanni, they may have underestimated what it takes to kill a clan of experts on death. It is said that Cappadocius himself developed their unique discipline, Mortis, which is now known as Necromancy.'],
    ['Children of Osiris', 'The Children of Osiris are a bloodline of vampires who flourished around the second or third millennium BC. The group was founded by Osiris, the \"Resurrected King\". They are known to practice a discipline unlike any other, called Bardo, which allows a vampire to have control over the Beast within. All their members come from other clans, or are Caitiff. Joining their ranks also requires high levels of Humanity.'],
    ['City Gangrel', 'The City Gangrel are a bloodline of the Gangrel that has adapted to urban environments. In the Dark Ages, the bloodline was known as the Greek Gangrel, as they were thought to have originated in Greece. In the modern nights, the City Gangrel form half of the Gangrel antitribu within the Sabbat. The City Gangrel remind some Kindred of coyotes — they are creatures well-suited for wilderness life, but they adapt to an urban existence quite smoothly. The high preponderance of prey in the cities, coupled with the Gangrel\'s inherent mutability of blood, has allowed the line to flourish. Their association with the Sabbat means that they Embrace prolifically, but also that their unlife expectancy is short. Unlike Country Gangrel, who can afford to let their animalistic ways take over and their appearances grow truly bestial, the Coyotes must either adopt a more Nosferatu-like approach to unlife or blend in with their prey. To outward appearance, then, these latter Kindred seem human, dress as appropriate to their area and the social class that they mimic. But City Gangrel are still Sabbat vampires, and that means they are predators. Any disguise they adopt is strictly that, camouflage to allow them to get close enough to bite.'],
    ['Country Gangrel', 'The Country Gangrel resemble the independent and Camarilla Gangrel – they are savage, vicious hunters, more comfortable in the wilds between cities than the concrete jungles. The Sabbat has seen a influx of Gangrel converts from the Camarilla, and these Hunters easily lost themselves in stalking and killing. The Country Gangrel serve the Sabbat as assassins and scouts, using their command of animals to gather intelligence on the comings and goings of other Kindred. They are called Hunters. Travel between cities was never exactly safe, as Lupines seem to prowl any patch of land large enough to grow a few trees (or so Camarilla elders have always told their childer), but with the Hunters prowling about, looking for wayward neonates, itinerant Kindred face even more dire threats. This might sound like Camarilla propaganda, but the Country Gangrel do all they can to make it true. Free from the constraints of having to look human, these creatures relish the chance to hunt as wolves hunt – savagely and in packs. If they have a regret, it is that their prey cannot usually run fast enough to make the hunt last.'],
    ['Daughters of Cacophony', 'The Daughters of Cacophony are a bloodline of unknown origin (although the most common guesses are Toreador or Malkavian) to the general vampire population. Currently composed entirely of women, the Daughters practice a unique discipline called Melpominee. This power allows the Daughters to invoke strange effects through singing, and are the choralistes par excellence of the undead, hence their nickname, the "Sirens".'],
    ['Followers of Set', 'The Followers of Set (or Setites) are a clan of vampires who believe their founder was the Egyptian god Set. Orthodox Setite belief dictates that Set will one day return to rule or consume the world, and devout Setites prepare the way for his resurrection. To this end, the clan remains independent of the Sects of other Kindred, and practice with great skill the arts of corruption, deceit and ancient sorcery.'],
    ['Gangrel', 'The Gangrel are one of the thirteen vampire clans found in the Classic World of Darkness, characterized by animalistic features and nature. Nomads who hold closer ties to the wild places than most of their city-bound cousins, they are also closer to the animal aspect of the Beast, and are masters of the Protean discipline.'],
    ['Gargoyles', 'The Gargoyles are winged, stony vampires originally created using the blood of three different clans: Gangrel, Nosferatu, and Tzimisce. Created (and enslaved) by the Tremere, they evolved into a full-fledged bloodline and became somewhat independent of the Tremere and their blood magic. They employ their own unique discipline called Visceratika, a power that expresses their natural affinity for stone, earth, and things made thereof.'],
    ['Giovanni', 'The Giovanni are the usurpers of Clan Cappadocian, and are both a clan and a family. They Embrace exclusively within their family and are heavily focused on the goals of money and necromantic power. They control wraiths and access the Shadowlands through their unique Necromancy discipline.'],
    ['Harbingers of Skulls', 'The Harbingers of Skulls are a rare bloodline who surfaced in the Final Nights. While few Kindred suspect the truth, they are the last remnants of the Cappadocian clan. Usually found among the Sabbat, they seek allies in their vendetta against the Giovanni and others who betrayed them.'],
    ['Kiasyd', 'The Kiasyd are a bloodline of the Lasombra founded after a mysterious "accident" involving the Lasombra Marconius of Strasbourg, faeries, and the blood of "Zeernebooch, a god of the underworld". It resulted in The Kiasyd\'s strange alien features and their mystical ties to changelings.  They practice the unique discipline Mytherceria, which gives them mystical senses, the ability to steal knowledge, and other powers attributed to fae.'],
    ['Lamia', 'Lamia was a bloodline of the Cappadocian clan, founded after Lamia (a rumored descendant and high priestess of Lilith). Members of this bloodline served the Cappadocians as dervishes and warriors until the purge orchestrated by the Giovanni, in 1444. They also practice their own path of Necromancy called "Path of the Four Humors".'],
    ['Lasombra', 'Leaders of the Sabbat, Clan Lasombra are social Darwinists, predators, elegant and inhuman. Due to their inherent clan weakness, Lasombra vampires cast no reflections. They control the shadows using their unearthly trademark discipline, Obtenebration. Because of their ties to the shadows, they also are more sensitive to light than other Kindred.'],
    ['Lhiannan', 'The Lhiannan were a territorial, matriarchal and druidic Cainite bloodline who existed in the Dark Ages. They are an offshoot of Clan Gangrel, although they themselves did not believe they were descended from Caine at all, instead believing they were made by "The Crone". The Lhiannan have a unique connection to the world of spirits, most notably in the form of their discipline Ogham, a form of blood magic based on Celtic runes.'],
    ['Malkavian', 'The Malkavians are a clan of Kindred cursed with insanity, every Malkavian is in some fashion insane. They are one of the original seven clans of the Camarilla and a pillar of the organization. Throughout history, the Malkavians have been the seers and oracles of the Kindred, bound by strange compulsions and insight. The Malkavian\'s clan discipline, Dementation, is a power that reflects their own madness.'],
    ['Nagaraja', 'The Nagaraja are a bloodline of flesh-eating vampires with a magical heritage. They descend from mages of the Idran faction, part of the Chakravanti Tradition, who sought to create their own brood of vampires by experimenting with vampire blood. The Idran\'s manipulation of vampire blood, combined with their innate magical natures, produced the Nagaraja bloodline, feared necromancers, servants of the Black Hand.'],
    ['Nosferatu', 'The most visibly cursed of all Kindred, the Embrace warps each Nosferatu into a hideously deformed creature; the archetypal Nosferatu resembles Max Shreck\'s Count Orlok, though the curse has any number of variations. The Nosferatu are the spymasters of the dead, collecting information and selling it for a dear price. They are also the masters of the underground, living in the sewers for protection.'],
    ['Noiad', 'The Noiad are a Gangrel bloodline that dwelled in Finland in the Dark Ages. They are depicted as an alien bloodline that may represent the first Cainite presence on the continent of Europe. As they were extremely dependent on their mortal herds, the Noiads viciously denied any changes in their society, driving them further and further northward to escape the Viking cultures in Scandinavia.'],
    ['Old Clan Tzimisce', 'The Old Clan Tzimisce are a distinct offshoot of the Tzimisce clan who do not possess Vicissitude, and instead carry on the old ways of using Dominate instead. Typically elders, Old Clan Tzimisce is a representation of what the Tzimisce clan was like in the Dark Ages long ago, yet some still remain. They are also the most capable practitioners of Koldunic Sorcery.'],
    ['Ravnos', 'Known for being wandering vagabonds and hucksters, the Ravnos are charlatans who gleefully practice their arts of deception and theft. They all have a vice they must compulsively indulge in, which has earned them their seedy reputation. Their signature discipline, Chimerstry, allows the Ravnos to conjure and control illusions.'],
    ['Salubri', 'The Salubri are a clan of healers and peacemakers, and bear a distinct third eye on their foreheads. After the diablerie of the clan Founder Saulot by the treacherous Tremere, they were hunted down by the Warlocks. They employ two unique disciplines Obeah and Valeren, for the healer and warrior castes, respectfully.'],
    ['Samedi', 'The Samedi bloodline has a relatively short but immensely curious history within Kindred society. Originating most likely in the Caribbean, the bloodline\'s members all seem to resemble a zombie or a corpse. Unlike the Nosferatu, who merely become disfigured, the body of the Samedi appears to be in a constant state of decay.'],
    ['Toreador', 'The Toreador are a clan of vampires known for being some of the most beautiful, sensual, seductive, emotional and glamorous of the Kindred. They are responsible for the legends of vampires who seduce and entice their prey with beauty, love and sensuality. Due to their inherent clan weakness, although lovely and seductive, the members of this clan are as much prisoners of their artistic vision and sensitivity as they are its beneficiaries.'],
    ['Tremere', 'The Tremere are one of the main bastions of the Camarilla, and have their own strict structure and order hierarchy within their own clan as well. Practitioners of blood magic known as Thaumaturgy, they have the most magical heritage, as they became Kindred through a magical ritual.'],
    ['True Brujah', 'The True Brujah are a bloodline that are the descendants of the original Antediluvian founder of Clan Brujah and not his diablerist/childe Troile, hence their name. They are noted for their cool, detached behavior, contrary to the main lineage who are known for their short, violent tempers and rebellious attitudes. They control a unique discipline known as Temporis, which gives them the ability to manipulate time itself.'],
    ['Tzimisce', 'The Tzimisce are a clan of scholars and flesh-shapers. The Tzimisce have left the human condition behind gladly, and now focus on transcending the vampiric limitations. Polite, intelligent and inquisitive they seem a stark contrast to the howling Sabbat mobs, however on closer inspection it\'s clear this is a mask hiding something alien and monstrous. Their trademark discipline Vicissitude gives them access to the art of flesh & bone crafting.'],
    ['Ventrue', 'The Ventrue has long been one of the proudest lines of vampires. Its members work hard to maintain a reputation for honor, genteel behavior, and leadership. A sense of noblesse oblige has long pervaded the clan, accompanied by the genuine belief that the Ventrue know what\'s best for everyone. They consider themselves the oldest clan, and see themselves as the enforcers of tradition and the rightful leaders of Kindred society.']
  ]);

  public getDescription(clanName: string): string {
    return this.clanDescriptions.get(clanName) ?? '';
  }

  public getFilteredClans(filter: string): Clan[] {
    if (filter === this.clanFilters[0]) {
      return this.clanList;
    } else {
      return this.clanList.filter((clan: Clan) => clan.filters.includes(filter));
    }
  }
}

export interface Clan {
  id: number;
  name: string;
  filters: string[];
  disciplines: string[];
}
