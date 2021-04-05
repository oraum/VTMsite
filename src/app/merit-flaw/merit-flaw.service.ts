import {Injectable} from '@angular/core';
import {NamedPoints, NamedPointsGroup, Point, PointsService} from '../points.service';
import {FreebiesService} from '../freebies/freebies.service';

@Injectable({
  providedIn: 'root'
})
export class MeritFlawService extends PointsService {

  defaultGroups: NamedPointsGroup[] = [{name: 'Physical Merits', values: [this.getDefaultValue()], availablePoints: 0}, {
    name: 'Physical Flaws',
    values: [this.getDefaultValue()],
    availablePoints: 0
  }, {name: 'Mental Merits', values: [this.getDefaultValue()], availablePoints: 0}, {
    name: 'Mental Flaws',
    values: [this.getDefaultValue()],
    availablePoints: 0
  },
    {name: 'Social Merits', values: [this.getDefaultValue()], availablePoints: 0}, {
      name: 'Social Flaws',
      values: [this.getDefaultValue()],
      availablePoints: 0
    }, {name: 'Supernatural Merits', values: [this.getDefaultValue()], availablePoints: 0}, {
      name: 'Supernatural Flaws',
      values: [this.getDefaultValue()],
      availablePoints: 0
    }];
  priorities = [];
  options: MeritFlaws = {
    'Physical Merits': [{name: '', cost: 0}, {name: 'Acute Sense (1pt)', cost: 1}, {name: 'Ambidextrous (2pt)', cost: 1}, {
      name: 'Bruiser (1pt)',
      cost: 1
    }, {name: 'Catlike Balance (1pt)', cost: 1}, {name: 'Early Riser (1pt)', cost: 1}, {
      name: 'Eat Food (1pt)',
      cost: 1
    }, {name: 'Friendly Face (1pt)', cost: 1}, {name: 'Blush of Health (2pt)', cost: 2}, {
      name: 'Enchanting Voice (2pt)',
      cost: 2
    }, {name: 'Daredevil (3pt)', cost: 3}, {name: 'Efficient Digestion (3pt)', cost: 3}, {name: 'Huge Size (4pt)', cost: 4}],
    'Physical Flaws': [{name: 'Hard of Hearing (1pt)', cost: -1}, {name: 'Short (1pt)', cost: -1}, {
      name: 'Smell of the Grave (1pt)',
      cost: -1
    },
      {name: 'Tic/Twitch (1pt)', cost: -1}, {name: 'Bad Sight (1pt)', cost: -1}, {
        name: 'Bad Sight (3pt)',
        cost: -3
      }, {name: 'Fourteenth Generation (2pt)', cost: -2},
      {name: 'Fifteenth Generation (4pt)', cost: -4}, {name: 'Disfigured (2pt)', cost: -2}, {
        name: 'Dulled Bite (2pt)',
        cost: -2
      }, {name: 'Infectious Bite (2pt)', cost: -2},
      {name: 'One Eye (2pt)', cost: -2}, {name: 'Vulnerability to Silver (2pt)', cost: -2}, {
        name: 'Open Wound (2pt)',
        cost: -2
      }, {name: 'Open Wound (4pt)', cost: -4},
      {name: 'Addiction (3pt)', cost: -3}, {name: 'Child (3pt)', cost: -3}, {name: 'Deformity (3pt)', cost: -3}, {
        name: 'Glowing Eyes (3pt)',
        cost: -3
      },
      {name: 'Lame (3pt)', cost: -3}, {name: 'Lazy (3pt)', cost: -3}, {name: 'Monstrous (3pt)', cost: -3}, {
        name: 'Permanent Fangs (3pt)',
        cost: -3
      },
      {name: 'Permanent Wound (3pt)', cost: -3}, {name: 'Slow Healing (3pt)', cost: -3}, {
        name: 'Disease Carrier (4pt)',
        cost: -4
      }, {name: 'Deaf (4pt)', cost: -4},
      {name: 'Mute (4pt)', cost: 4}, {name: 'Thin Blood (4pt)', cost: -4}, {
        name: 'Flesh of the Corpse (5pt)',
        cost: -5
      }, {name: 'Infertile Vitae (5pt)', cost: -5},
      {name: 'Blind (6pt)', cost: -6}],
    'Mental Merits': [{name: '', cost: 0}, {name: 'Coldly Logical (1pt)', cost: 1}, {
      name: 'Common Sense (1pt)',
      cost: 1
    }, {name: 'Concentration (1pt)', cost: 1}, {name: 'Introspection (1pt)', cost: 1}, {
      name: 'Language (1pt)',
      cost: 1
    }, {name: 'Time Sense (1pt)', cost: 1}, {name: 'Useful Knowledge (1pt)', cost: 1}, {
      name: 'Code of Honor (2pt)',
      cost: 2
    }, {name: 'Computer Aptitude (2pt)', cost: 2}, {name: 'Eidetic Memory (2pt)', cost: 2}, {
      name: 'Light Sleeper (2pt)',
      cost: 2
    }, {name: 'Natural Linguist (2pt)', cost: 2}, {name: 'Calm Heart (3pt)', cost: 3}, {
      name: 'Iron Will (3pt)',
      cost: 3
    }, {name: 'Precocious (3pt)', cost: 3}],
    'Mental Flaws': [{name: '', cost: 0}, {name: 'Deep Sleeper (1pt)', cost: -1}, {
      name: 'Impatient (1pt)',
      cost: -1
    }, {name: 'Nightmares (1pt)', cost: -1}, {name: 'Prey Exclusion (1pt)', cost: -1}, {
      name: 'Shy (1pt)',
      cost: -1
    }, {name: 'Soft-Hearted (1pt)', cost: -1}, {name: 'Speech Impediment (1pt)', cost: -1}, {
      name: 'Unconvinced (1pt)',
      cost: -1
    }, {name: 'Amnesia (2pt)', cost: -2}, {name: 'Lunacy (2pt)', cost: -2}, {name: 'Phobia (2pt)', cost: -2}, {
      name: 'Short Fuse (2pt)',
      cost: -2
    }, {name: 'Stereotype (2pt)', cost: -2}, {name: 'Territorial (2pt)', cost: -2}, {
      name: 'Thirst for Innocence (2pt)',
      cost: -2
    }, {name: 'Vengeful (2pt)', cost: -2}, {name: 'Victim of the Masquerade (2pt)', cost: -2}, {
      name: 'Weak-Willed (3pt)',
      cost: -3
    }, {name: 'Conspicuous Consumption (4pt)', cost: -4}, {name: 'Guilt-Wracked (4pt)', cost: -4}, {name: 'Flashbacks (6pt)', cost: -6}],
    'Social Merits': [{name: '', cost: 0}, {name: 'Elysium Regular (1pt)', cost: 1}, {
      name: 'Former Ghoul (1pt)',
      cost: 1
    }, {name: 'Harmless (1pt)', cost: 1}, {name: 'Natural Leader (1pt)', cost: 1}, {
      name: 'Prestigious Sire (1pt)',
      cost: 1
    }, {name: 'Protege (1pt)', cost: 1}, {name: 'Rep (1pt)', cost: 1}, {name: 'Sabbat Survivor (1pt)', cost: 1}, {
      name: 'Boon (1pt)',
      cost: 1
    }, {name: 'Boon (2pt)', cost: 2}, {name: 'Boon (3pt)', cost: 3}, {name: 'Boon (4pt)', cost: 4}, {
      name: 'Boon (5pt)',
      cost: 5
    }, {name: 'Boon (6pt)', cost: 6}, {name: 'Bullyboy (2pt)', cost: 2}, {name: 'Old Pal (2pt)', cost: 2}, {
      name: 'Lawman\'s Friend (2pt)',
      cost: 2
    }, {name: 'Open Road (2pt)', cost: 2}, {name: 'Sanctity (2pt)', cost: 2}, {
      name: 'Scholar of Enemies (2pt)',
      cost: 2
    }, {name: 'Scholar of Others (2pt)', cost: 2}, {name: 'Friend of the Underground (3pt)', cost: 3}, {
      name: 'Mole (3pt)',
      cost: 3
    }, {name: 'Rising Star (3pt)', cost: 3}, {name: 'Broken Bond (4pt)', cost: 4}, {
      name: 'Clan Friendship (4pt)',
      cost: 4
    }, {name: 'Primogen/Bishop Friendship (4pt)', cost: 4}],
    'Social Flaws': [{name: '', cost: -0}, {name: 'Botched Presentation (1pt)', cost: -1}, {
      name: 'Dark Secret (1pt)',
      cost: -1
    }, {name: 'Expendable (1pt)', cost: -1}, {name: 'Incomplete Understanding (1pt)', cost: -1}, {
      name: 'Infamous Sire (1pt)',
      cost: -1
    }, {name: 'Mistaken Identity (1pt)', cost: -1}, {name: 'New Arrival (1pt)', cost: -1}, {
      name: 'New Kid (1pt)',
      cost: -1
    }, {name: 'Recruitment Target (1pt)', cost: -1}, {name: 'Sire\'s Resentment (1pt)', cost: -1}, {
      name: 'Special Responsibility (1pt)',
      cost: -1
    }, {name: 'Sympathizer (1pt)', cost: -1}, {name: 'Enemy (1pt)', cost: -1}, {name: 'Enemy (2pt)', cost: -2}, {
      name: 'Enemy (3pt)',
      cost: -3
    }, {name: 'Enemy (4pt)', cost: -4}, {name: 'Enemy (5pt)', cost: -5}, {name: 'Bound (2pt)', cost: -2}, {
      name: 'Catspaw (2pt)',
      cost: -2
    }, {name: 'Escaped Target (2pt)', cost: -2}, {name: 'Failure (2pt)', cost: -2}, {
      name: 'Masquerade Breaker (2pt)',
      cost: -2
    }, {name: 'Hunted (2pt)', cost: -2}, {name: 'Old Flame (2pt)', cost: -2}, {name: 'Rival Sires (2pt)', cost: -2}, {
      name: 'Uppity (2pt)',
      cost: -2
    }, {name: 'Disgrace to the Blood (3pt)', cost: -3}, {name: 'Former Prince (3pt)', cost: -3}, {
      name: 'Hunted Like a Dog (3pt)',
      cost: -3
    }, {name: 'Narc (3pt)', cost: -3}, {name: 'Sleeping With the Enemy (3pt)', cost: -3}, {
      name: 'Clan Enmity (4pt)',
      cost: -4
    }, {name: 'Loathsome Regnant (4pt)', cost: -4}, {name: 'Overextended (4pt)', cost: -4}, {
      name: 'Probationary Sect Member (4pt)',
      cost: -4
    }, {name: 'Blood Hunted (4pt)', cost: -4}, {name: 'Blood Hunted (6pt)', cost: -6}, {
      name: 'Laughingstock (5pt)',
      cost: -5
    }, {name: 'Red List (7pt)', cost: -7}],
    'Supernatural Merits': [{name: '', cost: 0}, {name: 'Deceptive Aura (1pt)', cost: 1}, {
      name: 'Healing Touch (1pt)',
      cost: 1
    }, {name: 'Inoffensive to Animals (1pt)', cost: 1}, {name: 'Medium (2pt)', cost: 2}, {
      name: 'Magic Resistance (2pt)',
      cost: 2
    }, {name: 'Hidden Diablerie (3pt)', cost: 3}, {name: 'Lucky (3pt)', cost: 3}, {
      name: 'Oracular Ability (3pt)',
      cost: 3
    }, {name: 'Spirit Mentor (3pt)', cost: 3}, {name: 'True Love (4pt)', cost: 4}, {
      name: 'Additional Discipline (5pt)',
      cost: 5
    }, {name: 'Unbondable (5pt)', cost: 5}, {name: 'Nine Lives (6pt)', cost: 6}, {name: 'True Faith (7pt)', cost: 7}],
    'Supernatural Flaws': [{name: '', cost: -0}, {name: 'Cast No Reflection (1pt)', cost: -1}, {
      name: 'Cold Breeze (1pt)',
      cost: -1
    }, {name: 'Repulsed by Garlic (1pt)', cost: -1}, {name: 'Touch of Frost (1pt)', cost: -1}, {
      name: 'Cursed (1pt)',
      cost: -1
    }, {name: 'Cursed (2pt)', cost: -2}, {name: 'Cursed (3pt)', cost: -3}, {name: 'Cursed (4pt)', cost: -4}, {
      name: 'Cursed (5pt)',
      cost: -5
    }, {name: 'Beacon of the Unholy (2pt)', cost: -2}, {name: 'Deathsight (2pt)', cost: -2}, {
      name: 'Eerie Presence (2pt)',
      cost: -2
    }, {name: 'Lord of the Flies (2pt)', cost: -2}, {name: 'Can\'t Cross Running Water (3pt)', cost: -3}, {
      name: 'Haunted (3pt)',
      cost: -3
    }, {name: 'Repelled by Crosses (3pt)', cost: -3}, {name: 'Grip of the Damned (4pt)', cost: -4}, {
      name: 'Dark Fate (5pt)',
      cost: -5
    }, {name: 'Light-Sensitive (5pt)', cost: -5}],
  };

  constructor(freebieService: FreebiesService) {
    super(freebieService);
  }

  getDefaultPoints(): Point[] {
    return [];
  }

  getDefaultValue(): NamedPoints {
    return {points: [], name: 'mf0'};
  }
}

interface Option {
  name: string;
  cost: number;
}

interface MeritFlaws {
  [name: string]: Option[];
}
