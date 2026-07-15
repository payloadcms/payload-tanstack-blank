import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sv/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "mindre än en sekund",
		other: "mindre än {{count}} sekunder"
	},
	xSeconds: {
		one: "en sekund",
		other: "{{count}} sekunder"
	},
	halfAMinute: "en halv minut",
	lessThanXMinutes: {
		one: "mindre än en minut",
		other: "mindre än {{count}} minuter"
	},
	xMinutes: {
		one: "en minut",
		other: "{{count}} minuter"
	},
	aboutXHours: {
		one: "ungefär en timme",
		other: "ungefär {{count}} timmar"
	},
	xHours: {
		one: "en timme",
		other: "{{count}} timmar"
	},
	xDays: {
		one: "en dag",
		other: "{{count}} dagar"
	},
	aboutXWeeks: {
		one: "ungefär en vecka",
		other: "ungefär {{count}} veckor"
	},
	xWeeks: {
		one: "en vecka",
		other: "{{count}} veckor"
	},
	aboutXMonths: {
		one: "ungefär en månad",
		other: "ungefär {{count}} månader"
	},
	xMonths: {
		one: "en månad",
		other: "{{count}} månader"
	},
	aboutXYears: {
		one: "ungefär ett år",
		other: "ungefär {{count}} år"
	},
	xYears: {
		one: "ett år",
		other: "{{count}} år"
	},
	overXYears: {
		one: "över ett år",
		other: "över {{count}} år"
	},
	almostXYears: {
		one: "nästan ett år",
		other: "nästan {{count}} år"
	}
};
var wordMapping = [
	"noll",
	"en",
	"två",
	"tre",
	"fyra",
	"fem",
	"sex",
	"sju",
	"åtta",
	"nio",
	"tio",
	"elva",
	"tolv"
];
var formatDistance = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", count < 13 ? wordMapping[count] : String(count));
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return "om " + result;
	else return result + " sedan";
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE d MMMM y",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "y-MM-dd"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "'kl'. HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} 'kl.' {{time}}",
			long: "{{date}} 'kl.' {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sv/_lib/formatRelative.js
var formatRelativeLocale = {
	lastWeek: "'i' EEEE's kl.' p",
	yesterday: "'igår kl.' p",
	today: "'idag kl.' p",
	tomorrow: "'imorgon kl.' p",
	nextWeek: "EEEE 'kl.' p",
	other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sv/_lib/localize.js
var eraValues = {
	narrow: ["f.Kr.", "e.Kr."],
	abbreviated: ["f.Kr.", "e.Kr."],
	wide: ["före Kristus", "efter Kristus"]
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
		"1:a kvartalet",
		"2:a kvartalet",
		"3:e kvartalet",
		"4:e kvartalet"
	]
};
var monthValues = {
	narrow: [
		"J",
		"F",
		"M",
		"A",
		"M",
		"J",
		"J",
		"A",
		"S",
		"O",
		"N",
		"D"
	],
	abbreviated: [
		"jan.",
		"feb.",
		"mars",
		"apr.",
		"maj",
		"juni",
		"juli",
		"aug.",
		"sep.",
		"okt.",
		"nov.",
		"dec."
	],
	wide: [
		"januari",
		"februari",
		"mars",
		"april",
		"maj",
		"juni",
		"juli",
		"augusti",
		"september",
		"oktober",
		"november",
		"december"
	]
};
var dayValues = {
	narrow: [
		"S",
		"M",
		"T",
		"O",
		"T",
		"F",
		"L"
	],
	short: [
		"sö",
		"må",
		"ti",
		"on",
		"to",
		"fr",
		"lö"
	],
	abbreviated: [
		"sön",
		"mån",
		"tis",
		"ons",
		"tors",
		"fre",
		"lör"
	],
	wide: [
		"söndag",
		"måndag",
		"tisdag",
		"onsdag",
		"torsdag",
		"fredag",
		"lördag"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "fm",
		pm: "em",
		midnight: "midnatt",
		noon: "middag",
		morning: "morg.",
		afternoon: "efterm.",
		evening: "kväll",
		night: "natt"
	},
	abbreviated: {
		am: "f.m.",
		pm: "e.m.",
		midnight: "midnatt",
		noon: "middag",
		morning: "morgon",
		afternoon: "efterm.",
		evening: "kväll",
		night: "natt"
	},
	wide: {
		am: "förmiddag",
		pm: "eftermiddag",
		midnight: "midnatt",
		noon: "middag",
		morning: "morgon",
		afternoon: "eftermiddag",
		evening: "kväll",
		night: "natt"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "fm",
		pm: "em",
		midnight: "midnatt",
		noon: "middag",
		morning: "på morg.",
		afternoon: "på efterm.",
		evening: "på kvällen",
		night: "på natten"
	},
	abbreviated: {
		am: "fm",
		pm: "em",
		midnight: "midnatt",
		noon: "middag",
		morning: "på morg.",
		afternoon: "på efterm.",
		evening: "på kvällen",
		night: "på natten"
	},
	wide: {
		am: "fm",
		pm: "em",
		midnight: "midnatt",
		noon: "middag",
		morning: "på morgonen",
		afternoon: "på eftermiddagen",
		evening: "på kvällen",
		night: "på natten"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	const number = Number(dirtyNumber);
	const rem100 = number % 100;
	if (rem100 > 20 || rem100 < 10) switch (rem100 % 10) {
		case 1:
		case 2: return number + ":a";
	}
	return number + ":e";
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sv.js
/**
* @category Locales
* @summary Swedish locale.
* @language Swedish
* @iso-639-2 swe
* @author Johannes Ulén [@ejulen](https://github.com/ejulen)
* @author Alexander Nanberg [@alexandernanberg](https://github.com/alexandernanberg)
* @author Henrik Andersson [@limelights](https://github.com/limelights)
*/
var sv = {
	code: "sv",
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
			defaultWidth: "wide"
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
			matchPattern: /^(\d+)(:a|:e)?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
				abbreviated: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
				wide: /^(före Kristus|före vår tid|efter Kristus|vår tid)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^f/i, /^[ev]/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](:a|:e)? kvartalet/i
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
				abbreviated: /^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,
				wide: /^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i
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
					/^maj/i,
					/^jun/i,
					/^jul/i,
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
				narrow: /^[smtofl]/i,
				short: /^(sö|må|ti|on|to|fr|lö)/i,
				abbreviated: /^(sön|mån|tis|ons|tors|fre|lör)/i,
				wide: /^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/^s/i,
				/^m/i,
				/^ti/i,
				/^o/i,
				/^to/i,
				/^f/i,
				/^l/i
			] },
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: { any: /^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i },
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^f/i,
				pm: /^e/i,
				midnight: /^midn/i,
				noon: /^midd/i,
				morning: /morgon/i,
				afternoon: /eftermiddag/i,
				evening: /kväll/i,
				night: /natt/i
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
export { sv as default, sv };
