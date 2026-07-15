import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/de/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		standalone: {
			one: "weniger als 1 Sekunde",
			other: "weniger als {{count}} Sekunden"
		},
		withPreposition: {
			one: "weniger als 1 Sekunde",
			other: "weniger als {{count}} Sekunden"
		}
	},
	xSeconds: {
		standalone: {
			one: "1 Sekunde",
			other: "{{count}} Sekunden"
		},
		withPreposition: {
			one: "1 Sekunde",
			other: "{{count}} Sekunden"
		}
	},
	halfAMinute: {
		standalone: "eine halbe Minute",
		withPreposition: "einer halben Minute"
	},
	lessThanXMinutes: {
		standalone: {
			one: "weniger als 1 Minute",
			other: "weniger als {{count}} Minuten"
		},
		withPreposition: {
			one: "weniger als 1 Minute",
			other: "weniger als {{count}} Minuten"
		}
	},
	xMinutes: {
		standalone: {
			one: "1 Minute",
			other: "{{count}} Minuten"
		},
		withPreposition: {
			one: "1 Minute",
			other: "{{count}} Minuten"
		}
	},
	aboutXHours: {
		standalone: {
			one: "etwa 1 Stunde",
			other: "etwa {{count}} Stunden"
		},
		withPreposition: {
			one: "etwa 1 Stunde",
			other: "etwa {{count}} Stunden"
		}
	},
	xHours: {
		standalone: {
			one: "1 Stunde",
			other: "{{count}} Stunden"
		},
		withPreposition: {
			one: "1 Stunde",
			other: "{{count}} Stunden"
		}
	},
	xDays: {
		standalone: {
			one: "1 Tag",
			other: "{{count}} Tage"
		},
		withPreposition: {
			one: "1 Tag",
			other: "{{count}} Tagen"
		}
	},
	aboutXWeeks: {
		standalone: {
			one: "etwa 1 Woche",
			other: "etwa {{count}} Wochen"
		},
		withPreposition: {
			one: "etwa 1 Woche",
			other: "etwa {{count}} Wochen"
		}
	},
	xWeeks: {
		standalone: {
			one: "1 Woche",
			other: "{{count}} Wochen"
		},
		withPreposition: {
			one: "1 Woche",
			other: "{{count}} Wochen"
		}
	},
	aboutXMonths: {
		standalone: {
			one: "etwa 1 Monat",
			other: "etwa {{count}} Monate"
		},
		withPreposition: {
			one: "etwa 1 Monat",
			other: "etwa {{count}} Monaten"
		}
	},
	xMonths: {
		standalone: {
			one: "1 Monat",
			other: "{{count}} Monate"
		},
		withPreposition: {
			one: "1 Monat",
			other: "{{count}} Monaten"
		}
	},
	aboutXYears: {
		standalone: {
			one: "etwa 1 Jahr",
			other: "etwa {{count}} Jahre"
		},
		withPreposition: {
			one: "etwa 1 Jahr",
			other: "etwa {{count}} Jahren"
		}
	},
	xYears: {
		standalone: {
			one: "1 Jahr",
			other: "{{count}} Jahre"
		},
		withPreposition: {
			one: "1 Jahr",
			other: "{{count}} Jahren"
		}
	},
	overXYears: {
		standalone: {
			one: "mehr als 1 Jahr",
			other: "mehr als {{count}} Jahre"
		},
		withPreposition: {
			one: "mehr als 1 Jahr",
			other: "mehr als {{count}} Jahren"
		}
	},
	almostXYears: {
		standalone: {
			one: "fast 1 Jahr",
			other: "fast {{count}} Jahre"
		},
		withPreposition: {
			one: "fast 1 Jahr",
			other: "fast {{count}} Jahren"
		}
	}
};
var formatDistance = (token, count, options) => {
	let result;
	const tokenValue = options?.addSuffix ? formatDistanceLocale[token].withPreposition : formatDistanceLocale[token].standalone;
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", String(count));
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return "in " + result;
	else return "vor " + result;
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, do MMMM y",
			long: "do MMMM y",
			medium: "do MMM y",
			short: "dd.MM.y"
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
			full: "{{date}} 'um' {{time}}",
			long: "{{date}} 'um' {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/de/_lib/formatRelative.js
var formatRelativeLocale = {
	lastWeek: "'letzten' eeee 'um' p",
	yesterday: "'gestern um' p",
	today: "'heute um' p",
	tomorrow: "'morgen um' p",
	nextWeek: "eeee 'um' p",
	other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/de/_lib/localize.js
var eraValues = {
	narrow: ["v.Chr.", "n.Chr."],
	abbreviated: ["v.Chr.", "n.Chr."],
	wide: ["vor Christus", "nach Christus"]
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
		"1. Quartal",
		"2. Quartal",
		"3. Quartal",
		"4. Quartal"
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
		"Jan",
		"Feb",
		"Mär",
		"Apr",
		"Mai",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Okt",
		"Nov",
		"Dez"
	],
	wide: [
		"Januar",
		"Februar",
		"März",
		"April",
		"Mai",
		"Juni",
		"Juli",
		"August",
		"September",
		"Oktober",
		"November",
		"Dezember"
	]
};
var formattingMonthValues = {
	narrow: monthValues.narrow,
	abbreviated: [
		"Jan.",
		"Feb.",
		"März",
		"Apr.",
		"Mai",
		"Juni",
		"Juli",
		"Aug.",
		"Sep.",
		"Okt.",
		"Nov.",
		"Dez."
	],
	wide: monthValues.wide
};
var dayValues = {
	narrow: [
		"S",
		"M",
		"D",
		"M",
		"D",
		"F",
		"S"
	],
	short: [
		"So",
		"Mo",
		"Di",
		"Mi",
		"Do",
		"Fr",
		"Sa"
	],
	abbreviated: [
		"So.",
		"Mo.",
		"Di.",
		"Mi.",
		"Do.",
		"Fr.",
		"Sa."
	],
	wide: [
		"Sonntag",
		"Montag",
		"Dienstag",
		"Mittwoch",
		"Donnerstag",
		"Freitag",
		"Samstag"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "vm.",
		pm: "nm.",
		midnight: "Mitternacht",
		noon: "Mittag",
		morning: "Morgen",
		afternoon: "Nachm.",
		evening: "Abend",
		night: "Nacht"
	},
	abbreviated: {
		am: "vorm.",
		pm: "nachm.",
		midnight: "Mitternacht",
		noon: "Mittag",
		morning: "Morgen",
		afternoon: "Nachmittag",
		evening: "Abend",
		night: "Nacht"
	},
	wide: {
		am: "vormittags",
		pm: "nachmittags",
		midnight: "Mitternacht",
		noon: "Mittag",
		morning: "Morgen",
		afternoon: "Nachmittag",
		evening: "Abend",
		night: "Nacht"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "vm.",
		pm: "nm.",
		midnight: "Mitternacht",
		noon: "Mittag",
		morning: "morgens",
		afternoon: "nachm.",
		evening: "abends",
		night: "nachts"
	},
	abbreviated: {
		am: "vorm.",
		pm: "nachm.",
		midnight: "Mitternacht",
		noon: "Mittag",
		morning: "morgens",
		afternoon: "nachmittags",
		evening: "abends",
		night: "nachts"
	},
	wide: {
		am: "vormittags",
		pm: "nachmittags",
		midnight: "Mitternacht",
		noon: "Mittag",
		morning: "morgens",
		afternoon: "nachmittags",
		evening: "abends",
		night: "nachts"
	}
};
var ordinalNumber = (dirtyNumber) => {
	return Number(dirtyNumber) + ".";
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/de.js
/**
* @category Locales
* @summary German locale.
* @language German
* @iso-639-2 deu
* @author Thomas Eilmsteiner [@DeMuu](https://github.com/DeMuu)
* @author Asia [@asia-t](https://github.com/asia-t)
* @author Van Vuong Ngo [@vanvuongngo](https://github.com/vanvuongngo)
* @author RomanErnst [@pex](https://github.com/pex)
* @author Philipp Keck [@Philipp91](https://github.com/Philipp91)
*/
var de = {
	code: "de",
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
			formattingValues: formattingMonthValues,
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
			matchPattern: /^(\d+)(\.)?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
				abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
				wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^v/i, /^n/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](\.)? Quartal/i
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
				abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
				wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
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
					/^j[aä]/i,
					/^f/i,
					/^mär/i,
					/^ap/i,
					/^mai/i,
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
				narrow: /^[smdmf]/i,
				short: /^(so|mo|di|mi|do|fr|sa)/i,
				abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
				wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/^so/i,
				/^mo/i,
				/^di/i,
				/^mi/i,
				/^do/i,
				/^f/i,
				/^sa/i
			] },
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
				abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
				wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: {
				am: /^v/i,
				pm: /^n/i,
				midnight: /^Mitte/i,
				noon: /^Mitta/i,
				morning: /morgens/i,
				afternoon: /nachmittags/i,
				evening: /abends/i,
				night: /nachts/i
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
export { de, de as default };
