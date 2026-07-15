import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/nb/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "mindre enn ett sekund",
		other: "mindre enn {{count}} sekunder"
	},
	xSeconds: {
		one: "ett sekund",
		other: "{{count}} sekunder"
	},
	halfAMinute: "et halvt minutt",
	lessThanXMinutes: {
		one: "mindre enn ett minutt",
		other: "mindre enn {{count}} minutter"
	},
	xMinutes: {
		one: "ett minutt",
		other: "{{count}} minutter"
	},
	aboutXHours: {
		one: "omtrent en time",
		other: "omtrent {{count}} timer"
	},
	xHours: {
		one: "en time",
		other: "{{count}} timer"
	},
	xDays: {
		one: "en dag",
		other: "{{count}} dager"
	},
	aboutXWeeks: {
		one: "omtrent en uke",
		other: "omtrent {{count}} uker"
	},
	xWeeks: {
		one: "en uke",
		other: "{{count}} uker"
	},
	aboutXMonths: {
		one: "omtrent en måned",
		other: "omtrent {{count}} måneder"
	},
	xMonths: {
		one: "en måned",
		other: "{{count}} måneder"
	},
	aboutXYears: {
		one: "omtrent ett år",
		other: "omtrent {{count}} år"
	},
	xYears: {
		one: "ett år",
		other: "{{count}} år"
	},
	overXYears: {
		one: "over ett år",
		other: "over {{count}} år"
	},
	almostXYears: {
		one: "nesten ett år",
		other: "nesten {{count}} år"
	}
};
var formatDistance = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", String(count));
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return "om " + result;
	else return result + " siden";
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE d. MMMM y",
			long: "d. MMMM y",
			medium: "d. MMM y",
			short: "dd.MM.y"
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
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/nb/_lib/formatRelative.js
var formatRelativeLocale = {
	lastWeek: "'forrige' eeee 'kl.' p",
	yesterday: "'i går kl.' p",
	today: "'i dag kl.' p",
	tomorrow: "'i morgen kl.' p",
	nextWeek: "EEEE 'kl.' p",
	other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/nb/_lib/localize.js
var eraValues = {
	narrow: ["f.Kr.", "e.Kr."],
	abbreviated: ["f.Kr.", "e.Kr."],
	wide: ["før Kristus", "etter Kristus"]
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
		"1. kvartal",
		"2. kvartal",
		"3. kvartal",
		"4. kvartal"
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
		"mai",
		"juni",
		"juli",
		"aug.",
		"sep.",
		"okt.",
		"nov.",
		"des."
	],
	wide: [
		"januar",
		"februar",
		"mars",
		"april",
		"mai",
		"juni",
		"juli",
		"august",
		"september",
		"oktober",
		"november",
		"desember"
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
		"sø",
		"ma",
		"ti",
		"on",
		"to",
		"fr",
		"lø"
	],
	abbreviated: [
		"søn",
		"man",
		"tir",
		"ons",
		"tor",
		"fre",
		"lør"
	],
	wide: [
		"søndag",
		"mandag",
		"tirsdag",
		"onsdag",
		"torsdag",
		"fredag",
		"lørdag"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "midnatt",
		noon: "middag",
		morning: "på morg.",
		afternoon: "på etterm.",
		evening: "på kvelden",
		night: "på natten"
	},
	abbreviated: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "midnatt",
		noon: "middag",
		morning: "på morg.",
		afternoon: "på etterm.",
		evening: "på kvelden",
		night: "på natten"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "midnatt",
		noon: "middag",
		morning: "på morgenen",
		afternoon: "på ettermiddagen",
		evening: "på kvelden",
		night: "på natten"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	return Number(dirtyNumber) + ".";
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/nb.js
/**
* @category Locales
* @summary Norwegian Bokmål locale.
* @language Norwegian Bokmål
* @iso-639-2 nob
* @author Hans-Kristian Koren [@Hanse](https://github.com/Hanse)
* @author Mikolaj Grzyb [@mikolajgrzyb](https://github.com/mikolajgrzyb)
* @author Dag Stuan [@dagstuan](https://github.com/dagstuan)
*/
var nb = {
	code: "nb",
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
			defaultWidth: "wide"
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
				narrow: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
				abbreviated: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
				wide: /^(før Kristus|før vår tid|etter Kristus|vår tid)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^f/i, /^e/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](\.)? kvartal/i
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
				abbreviated: /^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,
				wide: /^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i
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
					/^mai/i,
					/^jun/i,
					/^jul/i,
					/^aug/i,
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
				short: /^(sø|ma|ti|on|to|fr|lø)/i,
				abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i,
				wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i
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
			matchPatterns: {
				narrow: /^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,
				any: /^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a(\.?\s?m\.?)?$/i,
				pm: /^p(\.?\s?m\.?)?$/i,
				midnight: /^midn/i,
				noon: /^midd/i,
				morning: /morgen/i,
				afternoon: /ettermiddag/i,
				evening: /kveld/i,
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
export { nb as default, nb };
