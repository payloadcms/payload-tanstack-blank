import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
import { t as isSameWeek } from "./isSameWeek-CGJFiiyr.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/it/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "meno di un secondo",
		other: "meno di {{count}} secondi"
	},
	xSeconds: {
		one: "un secondo",
		other: "{{count}} secondi"
	},
	halfAMinute: "alcuni secondi",
	lessThanXMinutes: {
		one: "meno di un minuto",
		other: "meno di {{count}} minuti"
	},
	xMinutes: {
		one: "un minuto",
		other: "{{count}} minuti"
	},
	aboutXHours: {
		one: "circa un'ora",
		other: "circa {{count}} ore"
	},
	xHours: {
		one: "un'ora",
		other: "{{count}} ore"
	},
	xDays: {
		one: "un giorno",
		other: "{{count}} giorni"
	},
	aboutXWeeks: {
		one: "circa una settimana",
		other: "circa {{count}} settimane"
	},
	xWeeks: {
		one: "una settimana",
		other: "{{count}} settimane"
	},
	aboutXMonths: {
		one: "circa un mese",
		other: "circa {{count}} mesi"
	},
	xMonths: {
		one: "un mese",
		other: "{{count}} mesi"
	},
	aboutXYears: {
		one: "circa un anno",
		other: "circa {{count}} anni"
	},
	xYears: {
		one: "un anno",
		other: "{{count}} anni"
	},
	overXYears: {
		one: "più di un anno",
		other: "più di {{count}} anni"
	},
	almostXYears: {
		one: "quasi un anno",
		other: "quasi {{count}} anni"
	}
};
var formatDistance = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", count.toString());
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return "tra " + result;
	else return result + " fa";
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE d MMMM y",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "dd/MM/y"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/it/_lib/formatRelative.js
var weekdays = [
	"domenica",
	"lunedì",
	"martedì",
	"mercoledì",
	"giovedì",
	"venerdì",
	"sabato"
];
function lastWeek(day) {
	switch (day) {
		case 0: return "'domenica scorsa alle' p";
		default: return "'" + weekdays[day] + " scorso alle' p";
	}
}
function thisWeek(day) {
	return "'" + weekdays[day] + " alle' p";
}
function nextWeek(day) {
	switch (day) {
		case 0: return "'domenica prossima alle' p";
		default: return "'" + weekdays[day] + " prossimo alle' p";
	}
}
var formatRelativeLocale = {
	lastWeek: (date, baseDate, options) => {
		const day = date.getDay();
		if (isSameWeek(date, baseDate, options)) return thisWeek(day);
		else return lastWeek(day);
	},
	yesterday: "'ieri alle' p",
	today: "'oggi alle' p",
	tomorrow: "'domani alle' p",
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
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/it/_lib/localize.js
var eraValues = {
	narrow: ["aC", "dC"],
	abbreviated: ["a.C.", "d.C."],
	wide: ["avanti Cristo", "dopo Cristo"]
};
var quarterValues = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"T1",
		"T2",
		"T3",
		"T4"
	],
	wide: [
		"1º trimestre",
		"2º trimestre",
		"3º trimestre",
		"4º trimestre"
	]
};
var monthValues = {
	narrow: [
		"G",
		"F",
		"M",
		"A",
		"M",
		"G",
		"L",
		"A",
		"S",
		"O",
		"N",
		"D"
	],
	abbreviated: [
		"gen",
		"feb",
		"mar",
		"apr",
		"mag",
		"giu",
		"lug",
		"ago",
		"set",
		"ott",
		"nov",
		"dic"
	],
	wide: [
		"gennaio",
		"febbraio",
		"marzo",
		"aprile",
		"maggio",
		"giugno",
		"luglio",
		"agosto",
		"settembre",
		"ottobre",
		"novembre",
		"dicembre"
	]
};
var dayValues = {
	narrow: [
		"D",
		"L",
		"M",
		"M",
		"G",
		"V",
		"S"
	],
	short: [
		"dom",
		"lun",
		"mar",
		"mer",
		"gio",
		"ven",
		"sab"
	],
	abbreviated: [
		"dom",
		"lun",
		"mar",
		"mer",
		"gio",
		"ven",
		"sab"
	],
	wide: [
		"domenica",
		"lunedì",
		"martedì",
		"mercoledì",
		"giovedì",
		"venerdì",
		"sabato"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "m.",
		pm: "p.",
		midnight: "mezzanotte",
		noon: "mezzogiorno",
		morning: "mattina",
		afternoon: "pomeriggio",
		evening: "sera",
		night: "notte"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "mezzanotte",
		noon: "mezzogiorno",
		morning: "mattina",
		afternoon: "pomeriggio",
		evening: "sera",
		night: "notte"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "mezzanotte",
		noon: "mezzogiorno",
		morning: "mattina",
		afternoon: "pomeriggio",
		evening: "sera",
		night: "notte"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "m.",
		pm: "p.",
		midnight: "mezzanotte",
		noon: "mezzogiorno",
		morning: "di mattina",
		afternoon: "del pomeriggio",
		evening: "di sera",
		night: "di notte"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "mezzanotte",
		noon: "mezzogiorno",
		morning: "di mattina",
		afternoon: "del pomeriggio",
		evening: "di sera",
		night: "di notte"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "mezzanotte",
		noon: "mezzogiorno",
		morning: "di mattina",
		afternoon: "del pomeriggio",
		evening: "di sera",
		night: "di notte"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	const number = Number(dirtyNumber);
	return String(number);
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/it.js
/**
* @category Locales
* @summary Italian locale.
* @language Italian
* @iso-639-2 ita
* @author Alberto Restifo [@albertorestifo](https://github.com/albertorestifo)
* @author Giovanni Polimeni [@giofilo](https://github.com/giofilo)
* @author Vincenzo Carrese [@vin-car](https://github.com/vin-car)
*/
var it = {
	code: "it",
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
			matchPattern: /^(\d+)(º)?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(aC|dC)/i,
				abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
				wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^a/i, /^(d|e)/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^t[1234]/i,
				wide: /^[1234](º)? trimestre/i
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
				narrow: /^[gfmalsond]/i,
				abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
				wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^g/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^g/i,
					/^l/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ge/i,
					/^f/i,
					/^mar/i,
					/^ap/i,
					/^mag/i,
					/^gi/i,
					/^l/i,
					/^ag/i,
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
				narrow: /^[dlmgvs]/i,
				short: /^(do|lu|ma|me|gi|ve|sa)/i,
				abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
				wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^d/i,
					/^l/i,
					/^m/i,
					/^m/i,
					/^g/i,
					/^v/i,
					/^s/i
				],
				any: [
					/^d/i,
					/^l/i,
					/^ma/i,
					/^me/i,
					/^g/i,
					/^v/i,
					/^s/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
				any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mezza/i,
				noon: /^mezzo/i,
				morning: /mattina/i,
				afternoon: /pomeriggio/i,
				evening: /sera/i,
				night: /notte/i
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
export { it as default, it };
