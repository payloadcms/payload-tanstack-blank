import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/is/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "minna en 1 sekúnda",
		other: "minna en {{count}} sekúndur"
	},
	xSeconds: {
		one: "1 sekúnda",
		other: "{{count}} sekúndur"
	},
	halfAMinute: "hálf mínúta",
	lessThanXMinutes: {
		one: "minna en 1 mínúta",
		other: "minna en {{count}} mínútur"
	},
	xMinutes: {
		one: "1 mínúta",
		other: "{{count}} mínútur"
	},
	aboutXHours: {
		one: "u.þ.b. 1 klukkustund",
		other: "u.þ.b. {{count}} klukkustundir"
	},
	xHours: {
		one: "1 klukkustund",
		other: "{{count}} klukkustundir"
	},
	xDays: {
		one: "1 dagur",
		other: "{{count}} dagar"
	},
	aboutXWeeks: {
		one: "um viku",
		other: "um {{count}} vikur"
	},
	xWeeks: {
		one: "1 viku",
		other: "{{count}} vikur"
	},
	aboutXMonths: {
		one: "u.þ.b. 1 mánuður",
		other: "u.þ.b. {{count}} mánuðir"
	},
	xMonths: {
		one: "1 mánuður",
		other: "{{count}} mánuðir"
	},
	aboutXYears: {
		one: "u.þ.b. 1 ár",
		other: "u.þ.b. {{count}} ár"
	},
	xYears: {
		one: "1 ár",
		other: "{{count}} ár"
	},
	overXYears: {
		one: "meira en 1 ár",
		other: "meira en {{count}} ár"
	},
	almostXYears: {
		one: "næstum 1 ár",
		other: "næstum {{count}} ár"
	}
};
var formatDistance = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", count.toString());
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return "í " + result;
	else return result + " síðan";
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, do MMMM y",
			long: "do MMMM y",
			medium: "do MMM y",
			short: "d.MM.y"
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
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/is/_lib/formatRelative.js
var formatRelativeLocale = {
	lastWeek: "'síðasta' dddd 'kl.' p",
	yesterday: "'í gær kl.' p",
	today: "'í dag kl.' p",
	tomorrow: "'á morgun kl.' p",
	nextWeek: "dddd 'kl.' p",
	other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/is/_lib/localize.js
var eraValues = {
	narrow: ["f.Kr.", "e.Kr."],
	abbreviated: ["f.Kr.", "e.Kr."],
	wide: ["fyrir Krist", "eftir Krist"]
};
var quarterValues = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"1F",
		"2F",
		"3F",
		"4F"
	],
	wide: [
		"1. fjórðungur",
		"2. fjórðungur",
		"3. fjórðungur",
		"4. fjórðungur"
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
		"Á",
		"S",
		"Ó",
		"N",
		"D"
	],
	abbreviated: [
		"jan.",
		"feb.",
		"mars",
		"apríl",
		"maí",
		"júní",
		"júlí",
		"ágúst",
		"sept.",
		"okt.",
		"nóv.",
		"des."
	],
	wide: [
		"janúar",
		"febrúar",
		"mars",
		"apríl",
		"maí",
		"júní",
		"júlí",
		"ágúst",
		"september",
		"október",
		"nóvember",
		"desember"
	]
};
var dayValues = {
	narrow: [
		"S",
		"M",
		"Þ",
		"M",
		"F",
		"F",
		"L"
	],
	short: [
		"Su",
		"Má",
		"Þr",
		"Mi",
		"Fi",
		"Fö",
		"La"
	],
	abbreviated: [
		"sun.",
		"mán.",
		"þri.",
		"mið.",
		"fim.",
		"fös.",
		"lau."
	],
	wide: [
		"sunnudagur",
		"mánudagur",
		"þriðjudagur",
		"miðvikudagur",
		"fimmtudagur",
		"föstudagur",
		"laugardagur"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "f",
		pm: "e",
		midnight: "miðnætti",
		noon: "hádegi",
		morning: "morgunn",
		afternoon: "síðdegi",
		evening: "kvöld",
		night: "nótt"
	},
	abbreviated: {
		am: "f.h.",
		pm: "e.h.",
		midnight: "miðnætti",
		noon: "hádegi",
		morning: "morgunn",
		afternoon: "síðdegi",
		evening: "kvöld",
		night: "nótt"
	},
	wide: {
		am: "fyrir hádegi",
		pm: "eftir hádegi",
		midnight: "miðnætti",
		noon: "hádegi",
		morning: "morgunn",
		afternoon: "síðdegi",
		evening: "kvöld",
		night: "nótt"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "f",
		pm: "e",
		midnight: "á miðnætti",
		noon: "á hádegi",
		morning: "að morgni",
		afternoon: "síðdegis",
		evening: "um kvöld",
		night: "um nótt"
	},
	abbreviated: {
		am: "f.h.",
		pm: "e.h.",
		midnight: "á miðnætti",
		noon: "á hádegi",
		morning: "að morgni",
		afternoon: "síðdegis",
		evening: "um kvöld",
		night: "um nótt"
	},
	wide: {
		am: "fyrir hádegi",
		pm: "eftir hádegi",
		midnight: "á miðnætti",
		noon: "á hádegi",
		morning: "að morgni",
		afternoon: "síðdegis",
		evening: "um kvöld",
		night: "um nótt"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	return Number(dirtyNumber) + ".";
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/is.js
/**
* @category Locales
* @summary Icelandic locale.
* @language Icelandic
* @iso-639-2 isl
* @author Derek Blank [@derekblank](https://github.com/derekblank)
* @author Arnór Ýmir [@lamayg](https://github.com/lamayg)
*/
var is = {
	code: "is",
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
			matchPattern: /^(\d+)(\.)?/i,
			parsePattern: /\d+(\.)?/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(f\.Kr\.|e\.Kr\.)/i,
				abbreviated: /^(f\.Kr\.|e\.Kr\.)/i,
				wide: /^(fyrir Krist|eftir Krist)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^(f\.Kr\.)/i, /^(e\.Kr\.)/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]\.?/i,
				abbreviated: /^q[1234]\.?/i,
				wide: /^[1234]\.? fjórðungur/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1\.?/i,
				/2\.?/i,
				/3\.?/i,
				/4\.?/i
			] },
			defaultParseWidth: "any",
			valueCallback: (index) => index + 1
		}),
		month: buildMatchFn({
			matchPatterns: {
				narrow: /^[jfmásónd]/i,
				abbreviated: /^(jan\.|feb\.|mars\.|apríl\.|maí|júní|júlí|águst|sep\.|oct\.|nov\.|dec\.)/i,
				wide: /^(januar|febrúar|mars|apríl|maí|júní|júlí|águst|september|október|nóvember|desember)/i
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
					/^á/i,
					/^s/i,
					/^ó/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ja/i,
					/^f/i,
					/^mar/i,
					/^ap/i,
					/^maí/i,
					/^jún/i,
					/^júl/i,
					/^áu/i,
					/^s/i,
					/^ó/i,
					/^n/i,
					/^d/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^[smtwf]/i,
				short: /^(su|má|þr|mi|fi|fö|la)/i,
				abbreviated: /^(sun|mán|þri|mið|fim|fös|lau)\.?/i,
				wide: /^(sunnudagur|mánudagur|þriðjudagur|miðvikudagur|fimmtudagur|föstudagur|laugardagur)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^s/i,
					/^m/i,
					/^þ/i,
					/^m/i,
					/^f/i,
					/^f/i,
					/^l/i
				],
				any: [
					/^su/i,
					/^má/i,
					/^þr/i,
					/^mi/i,
					/^fi/i,
					/^fö/i,
					/^la/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(f|e|síðdegis|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i,
				any: /^(fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^f/i,
				pm: /^e/i,
				midnight: /^mi/i,
				noon: /^há/i,
				morning: /morgunn/i,
				afternoon: /síðdegi/i,
				evening: /kvöld/i,
				night: /nótt/i
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
export { is as default, is };
