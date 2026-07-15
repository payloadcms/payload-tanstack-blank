import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
import { t as isSameWeek } from "./isSameWeek-DVwjzGUH.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sk/_lib/formatDistance.js
function declensionGroup(scheme, count) {
	if (count === 1 && scheme.one) return scheme.one;
	if (count >= 2 && count <= 4 && scheme.twoFour) return scheme.twoFour;
	return scheme.other;
}
function declension(scheme, count, time) {
	return declensionGroup(scheme, count)[time].replace("{{count}}", String(count));
}
function extractPreposition(token) {
	return [
		"lessThan",
		"about",
		"over",
		"almost"
	].filter(function(preposition) {
		return !!token.match(new RegExp("^" + preposition));
	})[0];
}
function prefixPreposition(preposition) {
	let translation = "";
	if (preposition === "almost") translation = "takmer";
	if (preposition === "about") translation = "približne";
	return translation.length > 0 ? translation + " " : "";
}
function suffixPreposition(preposition) {
	let translation = "";
	if (preposition === "lessThan") translation = "menej než";
	if (preposition === "over") translation = "viac než";
	return translation.length > 0 ? translation + " " : "";
}
function lowercaseFirstLetter(string) {
	return string.charAt(0).toLowerCase() + string.slice(1);
}
var formatDistanceLocale = {
	xSeconds: {
		one: {
			present: "sekunda",
			past: "sekundou",
			future: "sekundu"
		},
		twoFour: {
			present: "{{count}} sekundy",
			past: "{{count}} sekundami",
			future: "{{count}} sekundy"
		},
		other: {
			present: "{{count}} sekúnd",
			past: "{{count}} sekundami",
			future: "{{count}} sekúnd"
		}
	},
	halfAMinute: { other: {
		present: "pol minúty",
		past: "pol minútou",
		future: "pol minúty"
	} },
	xMinutes: {
		one: {
			present: "minúta",
			past: "minútou",
			future: "minútu"
		},
		twoFour: {
			present: "{{count}} minúty",
			past: "{{count}} minútami",
			future: "{{count}} minúty"
		},
		other: {
			present: "{{count}} minút",
			past: "{{count}} minútami",
			future: "{{count}} minút"
		}
	},
	xHours: {
		one: {
			present: "hodina",
			past: "hodinou",
			future: "hodinu"
		},
		twoFour: {
			present: "{{count}} hodiny",
			past: "{{count}} hodinami",
			future: "{{count}} hodiny"
		},
		other: {
			present: "{{count}} hodín",
			past: "{{count}} hodinami",
			future: "{{count}} hodín"
		}
	},
	xDays: {
		one: {
			present: "deň",
			past: "dňom",
			future: "deň"
		},
		twoFour: {
			present: "{{count}} dni",
			past: "{{count}} dňami",
			future: "{{count}} dni"
		},
		other: {
			present: "{{count}} dní",
			past: "{{count}} dňami",
			future: "{{count}} dní"
		}
	},
	xWeeks: {
		one: {
			present: "týždeň",
			past: "týždňom",
			future: "týždeň"
		},
		twoFour: {
			present: "{{count}} týždne",
			past: "{{count}} týždňami",
			future: "{{count}} týždne"
		},
		other: {
			present: "{{count}} týždňov",
			past: "{{count}} týždňami",
			future: "{{count}} týždňov"
		}
	},
	xMonths: {
		one: {
			present: "mesiac",
			past: "mesiacom",
			future: "mesiac"
		},
		twoFour: {
			present: "{{count}} mesiace",
			past: "{{count}} mesiacmi",
			future: "{{count}} mesiace"
		},
		other: {
			present: "{{count}} mesiacov",
			past: "{{count}} mesiacmi",
			future: "{{count}} mesiacov"
		}
	},
	xYears: {
		one: {
			present: "rok",
			past: "rokom",
			future: "rok"
		},
		twoFour: {
			present: "{{count}} roky",
			past: "{{count}} rokmi",
			future: "{{count}} roky"
		},
		other: {
			present: "{{count}} rokov",
			past: "{{count}} rokmi",
			future: "{{count}} rokov"
		}
	}
};
var formatDistance = (token, count, options) => {
	const preposition = extractPreposition(token) || "";
	const scheme = formatDistanceLocale[lowercaseFirstLetter(token.substring(preposition.length))];
	if (!options?.addSuffix) return prefixPreposition(preposition) + suffixPreposition(preposition) + declension(scheme, count, "present");
	if (options.comparison && options.comparison > 0) return prefixPreposition(preposition) + "o " + suffixPreposition(preposition) + declension(scheme, count, "future");
	else return prefixPreposition(preposition) + "pred " + suffixPreposition(preposition) + declension(scheme, count, "past");
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE d. MMMM y",
			long: "d. MMMM y",
			medium: "d. M. y",
			short: "d. M. y"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "H:mm:ss zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}}, {{time}}",
			long: "{{date}}, {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}} {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sk/_lib/formatRelative.js
var accusativeWeekdays = [
	"nedeľu",
	"pondelok",
	"utorok",
	"stredu",
	"štvrtok",
	"piatok",
	"sobotu"
];
function lastWeek(day) {
	const weekday = accusativeWeekdays[day];
	switch (day) {
		case 0:
		case 3:
		case 6: return "'minulú " + weekday + " o' p";
		default: return "'minulý' eeee 'o' p";
	}
}
function thisWeek(day) {
	const weekday = accusativeWeekdays[day];
	if (day === 4) return "'vo' eeee 'o' p";
	else return "'v " + weekday + " o' p";
}
function nextWeek(day) {
	const weekday = accusativeWeekdays[day];
	switch (day) {
		case 0:
		case 4:
		case 6: return "'budúcu " + weekday + " o' p";
		default: return "'budúci' eeee 'o' p";
	}
}
var formatRelativeLocale = {
	lastWeek: (date, baseDate, options) => {
		const day = date.getDay();
		if (isSameWeek(date, baseDate, options)) return thisWeek(day);
		else return lastWeek(day);
	},
	yesterday: "'včera o' p",
	today: "'dnes o' p",
	tomorrow: "'zajtra o' p",
	nextWeek: (date, baseDate, options) => {
		const day = date.getDay();
		if (isSameWeek(date, baseDate, options)) return thisWeek(day);
		else return nextWeek(day);
	},
	other: "P"
};
var formatRelative = (token, date, baseDate, options) => {
	const format = formatRelativeLocale[token];
	if (typeof format === "function") return format(date, baseDate, options);
	return format;
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sk/_lib/localize.js
var eraValues = {
	narrow: ["pred Kr.", "po Kr."],
	abbreviated: ["pred Kr.", "po Kr."],
	wide: ["pred Kristom", "po Kristovi"]
};
var quarterValues = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"Q1",
		"Q2",
		"Q3",
		"Q4"
	],
	wide: [
		"1. štvrťrok",
		"2. štvrťrok",
		"3. štvrťrok",
		"4. štvrťrok"
	]
};
var monthValues = {
	narrow: [
		"j",
		"f",
		"m",
		"a",
		"m",
		"j",
		"j",
		"a",
		"s",
		"o",
		"n",
		"d"
	],
	abbreviated: [
		"jan",
		"feb",
		"mar",
		"apr",
		"máj",
		"jún",
		"júl",
		"aug",
		"sep",
		"okt",
		"nov",
		"dec"
	],
	wide: [
		"január",
		"február",
		"marec",
		"apríl",
		"máj",
		"jún",
		"júl",
		"august",
		"september",
		"október",
		"november",
		"december"
	]
};
var formattingMonthValues = {
	narrow: [
		"j",
		"f",
		"m",
		"a",
		"m",
		"j",
		"j",
		"a",
		"s",
		"o",
		"n",
		"d"
	],
	abbreviated: [
		"jan",
		"feb",
		"mar",
		"apr",
		"máj",
		"jún",
		"júl",
		"aug",
		"sep",
		"okt",
		"nov",
		"dec"
	],
	wide: [
		"januára",
		"februára",
		"marca",
		"apríla",
		"mája",
		"júna",
		"júla",
		"augusta",
		"septembra",
		"októbra",
		"novembra",
		"decembra"
	]
};
var dayValues = {
	narrow: [
		"n",
		"p",
		"u",
		"s",
		"š",
		"p",
		"s"
	],
	short: [
		"ne",
		"po",
		"ut",
		"st",
		"št",
		"pi",
		"so"
	],
	abbreviated: [
		"ne",
		"po",
		"ut",
		"st",
		"št",
		"pi",
		"so"
	],
	wide: [
		"nedeľa",
		"pondelok",
		"utorok",
		"streda",
		"štvrtok",
		"piatok",
		"sobota"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "AM",
		pm: "PM",
		midnight: "poln.",
		noon: "pol.",
		morning: "ráno",
		afternoon: "pop.",
		evening: "več.",
		night: "noc"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "poln.",
		noon: "pol.",
		morning: "ráno",
		afternoon: "popol.",
		evening: "večer",
		night: "noc"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "polnoc",
		noon: "poludnie",
		morning: "ráno",
		afternoon: "popoludnie",
		evening: "večer",
		night: "noc"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "AM",
		pm: "PM",
		midnight: "o poln.",
		noon: "nap.",
		morning: "ráno",
		afternoon: "pop.",
		evening: "več.",
		night: "v n."
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "o poln.",
		noon: "napol.",
		morning: "ráno",
		afternoon: "popol.",
		evening: "večer",
		night: "v noci"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "o polnoci",
		noon: "napoludnie",
		morning: "ráno",
		afternoon: "popoludní",
		evening: "večer",
		night: "v noci"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	return Number(dirtyNumber) + ".";
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sk.js
/**
* @category Locales
* @summary Slovak locale.
* @language Slovak
* @iso-639-2 slk
* @author Marek Suscak [@mareksuscak](https://github.com/mareksuscak)
*/
var sk = {
	code: "sk",
	formatDistance,
	formatLong,
	formatRelative,
	localize: {
		ordinalNumber,
		era: buildLocalizeFn({
			values: eraValues,
			defaultWidth: "wide"
		}),
		quarter: buildLocalizeFn({
			values: quarterValues,
			defaultWidth: "wide",
			argumentCallback: (quarter) => quarter - 1
		}),
		month: buildLocalizeFn({
			values: monthValues,
			defaultWidth: "wide",
			formattingValues: formattingMonthValues,
			defaultFormattingWidth: "wide"
		}),
		day: buildLocalizeFn({
			values: dayValues,
			defaultWidth: "wide"
		}),
		dayPeriod: buildLocalizeFn({
			values: dayPeriodValues,
			defaultWidth: "wide",
			formattingValues: formattingDayPeriodValues,
			defaultFormattingWidth: "wide"
		})
	},
	match: {
		ordinalNumber: buildMatchPatternFn({
			matchPattern: /^(\d+)\.?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,
				abbreviated: /^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,
				wide: /^(pred Kristom|pred na[šs][íi]m letopo[čc]tom|po Kristovi|n[áa][šs]ho letopo[čc]tu)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^pr/i, /^(po|n)/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234]\. [šs]tvr[ťt]rok/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (index) => index + 1
		}),
		month: buildMatchFn({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(jan|feb|mar|apr|m[áa]j|j[úu]n|j[úu]l|aug|sep|okt|nov|dec)/i,
				wide: /^(janu[áa]ra?|febru[áa]ra?|(marec|marca)|apr[íi]la?|m[áa]ja?|j[úu]na?|j[úu]la?|augusta?|(september|septembra)|(okt[óo]ber|okt[óo]bra)|(november|novembra)|(december|decembra))/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ja/i,
					/^f/i,
					/^mar/i,
					/^ap/i,
					/^m[áa]j/i,
					/^j[úu]n/i,
					/^j[úu]l/i,
					/^au/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^[npusšp]/i,
				short: /^(ne|po|ut|st|št|pi|so)/i,
				abbreviated: /^(ne|po|ut|st|št|pi|so)/i,
				wide: /^(nede[ľl]a|pondelok|utorok|streda|[šs]tvrtok|piatok|sobota])/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^n/i,
					/^p/i,
					/^u/i,
					/^s/i,
					/^š/i,
					/^p/i,
					/^s/i
				],
				any: [
					/^n/i,
					/^po/i,
					/^u/i,
					/^st/i,
					/^(št|stv)/i,
					/^pi/i,
					/^so/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(am|pm|(o )?poln\.?|(nap\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]\.?|(v n\.?|noc))/i,
				abbreviated: /^(am|pm|(o )?poln\.?|(napol\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]er|(v )?noci?)/i,
				any: /^(am|pm|(o )?polnoci?|(na)?poludnie|r[áa]no|popoludn(ie|í|i)|ve[čc]er|(v )?noci?)/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^am/i,
				pm: /^pm/i,
				midnight: /poln/i,
				noon: /^(nap|(na)?pol(\.|u))/i,
				morning: /^r[áa]no/i,
				afternoon: /^pop/i,
				evening: /^ve[čc]/i,
				night: /^(noc|v n\.)/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 1,
		firstWeekContainsDate: 4
	}
};
//#endregion
export { sk as default, sk };
