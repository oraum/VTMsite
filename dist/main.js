(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oli/Programming/VTMsite/src/main.ts */"zUnb");


/***/ }),

/***/ "0Jj7":
/*!************************************************!*\
  !*** ./src/app/clan-selection/clan.service.ts ***!
  \************************************************/
/*! exports provided: ClanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClanService", function() { return ClanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ClanService {
    constructor() {
        this.clanFilters = [
            'All', 'Thirteen', 'Camarilla', 'Sabbat', 'Independent', 'All Clans',
            'All Bloodlines', 'Camarilla (clans only)', 'Sabbat (clans only)',
            'Dark Ages', 'High Clans', 'Low Clans'
        ];
        this.clanList = [
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
                id: 9, name: 'Daughters of Cacophony',
                filters: ['All Bloodlines'],
                disciplines: ['Fortitude', 'Melpominee', 'Presence']
            },
            {
                id: 10, name: 'Followers of Set',
                filters: ['Thirteen', 'Independent', 'All Clans', 'Dark Ages',
                    'Low Clans'],
                disciplines: ['Obfuscate', 'Presence', 'Serpentis']
            },
            {
                id: 11, name: 'Gargoyles',
                filters: ['All Bloodlines'],
                disciplines: ['Flight', 'Fortitude', 'Potence', 'Visceratika']
            },
            {
                id: 12, name: 'Gangrel',
                filters: ['Thirteen', 'Independent', 'All Clans', 'Low Clans',
                    'Dark Ages'],
                disciplines: ['Animalism', 'Fortitude', 'Protean']
            },
            {
                id: 13, name: 'Giovanni',
                filters: ['Thirteen', 'Independent', 'All Clans', 'Dark Ages'],
                disciplines: ['Dominate', 'Necromancy', 'Potence']
            },
            {
                id: 14, name: 'Harbingers of Skulls',
                filters: ['Sabbat', 'All Bloodlines'],
                disciplines: ['Auspex', 'Fortitude', 'Necromancy']
            },
            {
                id: 15, name: 'Kiasyd',
                filters: ['All Bloodlines', 'Dark Ages'],
                disciplines: ['Dominate', 'Obtenebration', 'Mytherceria']
            },
            {
                id: 16, name: 'Lamia',
                filters: ['All Bloodlines', 'Dark Ages'],
                disciplines: ['Fortitude', 'Necromancy', 'Potence']
            },
            {
                id: 17, name: 'Lasombra',
                filters: ['Thirteen', 'Sabbat', 'All Clans', 'Sabbat (clans only)',
                    'Dark Ages', 'High Clans'],
                disciplines: ['Dominate', 'Obtenebration', 'Potence']
            },
            {
                id: 18, name: 'Lhiannan',
                filters: ['Independent', 'All Bloodlines', 'Dark Ages'],
                disciplines: ['Animalism', 'Ogham', 'Presence']
            },
            {
                id: 19, name: 'Malkavian',
                filters: ['Thirteen', 'Camarilla', 'All Clans',
                    'Camarilla (clans only)', 'Dark Ages', 'Low Clans'],
                disciplines: ['Auspex', 'Dementation', 'Obfuscate']
            },
            {
                id: 20, name: 'Nagaraja',
                filters: ['All Bloodlines', 'Dark Ages'],
                disciplines: ['Auspex', 'Dominate', 'Necromancy']
            },
            {
                id: 21, name: 'Noiad',
                filters: ['All Bloodlines', 'Dark Ages'],
                disciplines: ['Animalism', 'Auspex', 'Protean']
            },
            {
                id: 22, name: 'Nosferatu',
                filters: ['Thirteen', 'Camarilla', 'All Clans',
                    'Camarilla (clans only)', 'Dark Ages', 'Low Clans'],
                disciplines: ['Animalism', 'Obfuscate', 'Potence']
            },
            {
                id: 23, name: 'Old Clan Tzimisce',
                filters: ['Dark Ages, High Clans'],
                disciplines: ['Animalism', 'Auspex', 'Dominate']
            },
            {
                id: 24, name: 'Ravnos',
                filters: ['Thirteen', 'Independent', 'All Clans', 'Dark Ages',
                    'Low Clans'],
                disciplines: ['Animalism', 'Chimerstry', 'Fortitude']
            },
            {
                id: 25, name: 'Salubri',
                filters: ['Independent', 'All Clans', 'Dark Ages'],
                disciplines: ['Auspex', 'Fortitude', 'Obeah', 'Valeren']
            },
            {
                id: 26, name: 'Samedi',
                filters: ['All Bloodlines'],
                disciplines: ['Fortitude', 'Obfuscate', 'Thanatosis']
            },
            {
                id: 27, name: 'Toreador',
                filters: ['Thirteen', 'Camarilla', 'All Clans',
                    'Camarilla (clans only)', 'Dark Ages', 'High Clans'],
                disciplines: ['Auspex', 'Celerity', 'Presence']
            },
            {
                id: 28, name: 'Tremere',
                filters: ['Thirteen', 'Camarilla', 'All Clans',
                    'Camarilla (clans only)', 'Dark Ages', 'Low Clans'],
                disciplines: ['Auspex', 'Dominate', 'Thaumaturgy']
            },
            {
                id: 29, name: 'True Brujah',
                filters: ['All Bloodlines', 'Independent', 'Dark Ages'],
                disciplines: ['Potence', 'Presence', 'Temporis']
            },
            {
                id: 30, name: 'Tzimisce',
                filters: ['Thirteen', 'Sabbat', 'All Clans', 'Sabbat (clans only)',
                    'Dark Ages', 'High Clans'],
                disciplines: ['Animalism', 'Auspex', 'Vicissitude']
            },
            {
                id: 31, name: 'Ventrue',
                filters: ['Thirteen', 'Camarilla', 'All Clans',
                    'Camarilla (clans only)', 'Dark Ages', 'High Clans'],
                disciplines: ['Dominate', 'Fortitude', 'Presence']
            }
        ];
        this.clanDescriptions = new Map([
            ['Ahrimanes', 'The Ahrimanes are a rare, all-female bloodline of Kindred that originally existed during the Dark Ages, headed by a woman called Ádísa. Sometime during the long night, Ádísa and her bloodline were lost and subsumed into Clan Gangrel. Centuries later, the bloodline was unknowingly resurrected by a woman called Muricia. Since then, the Ahrimanes roam the night again, albeit under a different guise and leader.'],
            ['Anda', 'The Anda were a bloodline of the Gangrel who existed among the Mongols during the Dark Ages. The bloodline\'s progenitor was Dobrul the Brave. The Anda lived openly among their extended families who often acted as their herd. In return for their blood and protection during the day, the Anda would protect the family from harm and use his supernatural powers to the welfare of the family.'],
            ['Assamite', 'The Assamite clan is based in a hidden fortress named Alamut in the Middle East. They are traditionally seen by Western Kindred as dangerous assassins and diablerists, but in truth they are guardians, warriors and scholars who seek to distance themselves from the Jyhad. Throughout their history, they have remained a self-sufficient and independent clan.'],
            ['Baali', 'The Baali are a bloodline of vampires associated with demon worship. Because of their affinity with the unholy, the Baali are particularly vulnerable to holy iconography, holy ground and holy water. Some versions present the true purpose of the Baali as keeping demons sleeping by feeding them with carnage and destruction. But most presentations show them as infernalists, using demon worship to gain additional power.'],
            ['Blood Brothers', 'The Blood Brothers are a rare bloodline of the Sabbat, created by Tremere antitribu and Tzimisce kolduns. Designed to function as perfect combat units, Blood Brothers possess a sort of shared consciousness, working exclusively with the \"circle\" of Blood Brothers with whom they share their "hive mind". The members of a circle will often be fleshcrafted by Tzimisce to appear identical, an outward reflection of their lack of individuality.'],
            ['Brujah', 'The Brujah are a major clan in Vampire: The Masquerade. Quick to anger and always passionate in the Modern Nights, they have been regaining their position as a clan of lofty philosophers and activists, and are often pointed to as a clan of unruly rebels and roughnecks that should not be messed with.'],
            ['Caitiff', 'Caitiff are vampires with no known clan. It can mean that they were abandoned and therefore do not know their lineage, or that they have no traits of the clan that they were embraced into. Caitiff have no inherent clan disciplines, but they also do not have any clan weakness. They are typically looked down upon by every other type of vampire, whether it\'s with distaste or pity.'],
            ['Cappadocian', 'The Cappadocians, also known as the "Clan of Death". Detached scholars obsessed with the mysteries of death, they are now (theoretically) extinct, having been eliminated through a coup de famille by Augustus Giovanni. Unfortunately for the Giovanni, they may have underestimated what it takes to kill a clan of experts on death. It is said that Cappadocius himself developed their unique discipline, Mortis, which is now known as Necromancy.'],
            ['Children of Osiris', 'The Children of Osiris are a bloodline of vampires who flourished around the second or third millennium BC. The group was founded by Osiris, the \"Resurrected King\". They are known to practice a discipline unlike any other, called Bardo, which allows a vampire to have control over the Beast within. All their members come from other clans, or are Caitiff. Joining their ranks also requires high levels of Humanity.'],
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
    }
    getDescription(clanName) {
        var _a;
        return (_a = this.clanDescriptions.get(clanName)) !== null && _a !== void 0 ? _a : '';
    }
    getFilteredClans(filter) {
        if (filter === this.clanFilters[0]) {
            return this.clanList;
        }
        else {
            return this.clanList.filter((clan) => clan.filters.includes(filter));
        }
    }
}
ClanService.ɵfac = function ClanService_Factory(t) { return new (t || ClanService)(); };
ClanService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClanService, factory: ClanService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() {
        this.welcomeMessage = 'Welcome to my V:TM page!';
        this.vtmLogo = 'assets/vtmlogo.png';
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 2, consts: [[1, "container"], [3, "src"], [1, "mat-h2"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.vtmLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.welcomeMessage);
    } }, styles: ["img[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 100px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Pw0f":
/*!******************************************************************!*\
  !*** ./src/app/character-creator/character-creator.component.ts ***!
  \******************************************************************/
/*! exports provided: CharacterCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterCreatorComponent", function() { return CharacterCreatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _char_creator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./char-creator.service */ "R6VV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _clan_selection_clan_selection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../clan-selection/clan-selection.component */ "R0t2");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");








function CharacterCreatorComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nature_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", nature_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", nature_r3, " ");
} }
function CharacterCreatorComponent_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const demeanor_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", demeanor_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", demeanor_r4, " ");
} }
function CharacterCreatorComponent_mat_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const generation_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", generation_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", generation_r5, " ");
} }
class CharacterCreatorComponent {
    constructor(charCreatorService) {
        this.charCreatorService = charCreatorService;
    }
    getDefaultGeneration() {
        return this.charCreatorService.generations[10];
    }
}
CharacterCreatorComponent.ɵfac = function CharacterCreatorComponent_Factory(t) { return new (t || CharacterCreatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_char_creator_service__WEBPACK_IMPORTED_MODULE_1__["CharCreatorService"])); };
CharacterCreatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharacterCreatorComponent, selectors: [["app-character-creator"]], decls: 41, vars: 4, consts: [[1, "mat-h1"], ["matInput", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function CharacterCreatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Character Creator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Chronicle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Concept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Nature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CharacterCreatorComponent_mat_option_24_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Demeanor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CharacterCreatorComponent_mat_option_29_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Generation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CharacterCreatorComponent_mat_option_38_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-clan-selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.charCreatorService.natureDemeanorList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.charCreatorService.natureDemeanorList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.getDefaultGeneration());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.charCreatorService.generations);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _clan_selection_clan_selection_component__WEBPACK_IMPORTED_MODULE_6__["ClanSelectionComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 784px;\n}\nform[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-right: 4px;\n}\nform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  flex: 0 1 calc(180px);\n}\ndiv[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  margin: 4px;\n}\nh1[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoYXJhY3Rlci1jcmVhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBRUo7QUFFQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQUNGO0FBT0E7RUFDRSxXQUFBO0FBSkY7QUFPQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUpGIiwiZmlsZSI6ImNoYXJhY3Rlci1jcmVhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWF4LXdpZHRoOiA3ODRweDtcbiAgJiBtYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgfVxufVxuXG5mb3JtID4gKiB7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGZsZXg6IDAgMSBjYWxjKDE4MHB4KTtcbn1cblxuXG5mb3JtIG1hdC1mb3JtLWZpZWxkICsgbWF0LWZvcm0tZmllbGQge1xuICAvL21hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbmRpdiArIGRpdiB7XG4gIG1hcmdpbjogNHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "R0t2":
/*!************************************************************!*\
  !*** ./src/app/clan-selection/clan-selection.component.ts ***!
  \************************************************************/
/*! exports provided: ClanSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClanSelectionComponent", function() { return ClanSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _clan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clan.service */ "0Jj7");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






function ClanSelectionComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", filter_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filter_r5, " ");
} }
function ClanSelectionComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clan_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", clan_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", clan_r6.name, " ");
} }
function ClanSelectionComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Disciplines: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/clan-images/" + ctx_r4.clan.name.toLowerCase() + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.clan.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.clanService.getDescription(ctx_r4.clan.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.clan.disciplines.join(", "));
} }
class ClanSelectionComponent {
    constructor(clanService) {
        this.clanService = clanService;
        this.clan = undefined;
        this.clan = clanService.clanList[0];
    }
}
ClanSelectionComponent.ɵfac = function ClanSelectionComponent_Factory(t) { return new (t || ClanSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clan_service__WEBPACK_IMPORTED_MODULE_1__["ClanService"])); };
ClanSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClanSelectionComponent, selectors: [["app-clan-selection"]], decls: 14, vars: 5, consts: [[3, "value"], ["clanFilter", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value", "valueChange"], ["clanSelect", ""], ["class", "clan-info", 4, "ngIf"], [1, "clan-info"], [1, "clan-logo", 3, "src"], [1, "mat-h1"]], template: function ClanSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Clan Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ClanSelectionComponent_mat_option_6_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Clan/Bloodline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ClanSelectionComponent_Template_mat_select_valueChange_10_listener($event) { return ctx.clan = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ClanSelectionComponent_mat_option_12_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClanSelectionComponent_div_13_Template, 12, 4, "div", 5);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.clanService.clanFilters[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clanService.clanFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.clan);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clanService.getFilteredClans(_r0.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clan);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"]], styles: [".clan-logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin-top: 30px;\n  filter: invert(1);\n}\n\nform[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]    + mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.clan-info[_ngcontent-%COMP%] {\n  max-width: 752px;\n  display: flex;\n  flex-direction: row;\n}\n\n.clan-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 5px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsYW4tc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDRTtFQUNFLGdCQUFBO0FBQ0oiLCJmaWxlIjoiY2xhbi1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xhbi1sb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmaWx0ZXI6IGludmVydCgxKTtcbn1cblxuZm9ybSBtYXQtZm9ybS1maWVsZCArIG1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmNsYW4taW5mbyB7XG4gIG1heC13aWR0aDogNzUycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgJiA+IGRpdiB7XG4gICAgbWFyZ2luOiA1cHggMTZweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "R6VV":
/*!***********************************************************!*\
  !*** ./src/app/character-creator/char-creator.service.ts ***!
  \***********************************************************/
/*! exports provided: CharCreatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharCreatorService", function() { return CharCreatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CharCreatorService {
    constructor() {
        this.generations = ['3rd', '4th', '5th', '6th', '7th',
            '8th', '9th', '10th', '11th', '12th',
            '13th', '14th', '15th'];
        this.natureDemeanorList = ['Architect', 'Autocrat', 'Bon Vivant',
            'Bravo', 'Capitalist', 'Caregiver',
            'Celebrant', 'Chameleon', 'Child',
            'Competitor', 'Conformist', 'Conniver',
            'Creep Show', 'Curmudgeon', 'Dabbler',
            'Deviant', 'Director', 'Enigma',
            'Eye of the Storm', 'Fanatic', 'Gallant',
            'Guru', 'Idealist', 'Judge',
            'Loner', 'Martyr', 'Masochist',
            'Monster', 'Pedagogue', 'Penitent',
            'Perfectionist', 'Rebel', 'Rogue',
            'Sadist', 'Scientist', 'Sociopath',
            'Soldier', 'Survivor', 'Thrill-Seeker',
            'Traditionalist', 'Trickster', 'Visionary'];
    }
}
CharCreatorService.ɵfac = function CharCreatorService_Factory(t) { return new (t || CharCreatorService)(); };
CharCreatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CharCreatorService, factory: CharCreatorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'VTMsite';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [["mat-button", "", "routerLink", "home"], ["id", "title-logo", "src", "assets/v20ankh_inv.png"], ["mat-button", "", "routerLink", "creator"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Character Creator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["#title-logo[_ngcontent-%COMP%] {\n  height: 26px;\n  margin: 0 4px 3px 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RpdGxlLWxvZ28ge1xuICBoZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbjogMCA0cHggM3B4IDA7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _character_creator_character_creator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./character-creator/character-creator.component */ "Pw0f");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _clan_selection_clan_selection_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clan-selection/clan-selection.component */ "R0t2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _character_creator_character_creator_component__WEBPACK_IMPORTED_MODULE_5__["CharacterCreatorComponent"],
        _clan_selection_clan_selection_component__WEBPACK_IMPORTED_MODULE_12__["ClanSelectionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _character_creator_character_creator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character-creator/character-creator.component */ "Pw0f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'creator', component: _character_creator_character_creator_component__WEBPACK_IMPORTED_MODULE_2__["CharacterCreatorComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map