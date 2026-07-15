import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/et/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		standalone: {
			one: "vähem kui üks sekund",
			other: "vähem kui {{count}} sekundit"
		},
		withPreposition: {
			one: "vähem kui ühe sekundi",
			other: "vähem kui {{count}} sekundi"
		}
	},
	xSeconds: {
		standalone: {
			one: "üks sekund",
			other: "{{count}} sekundit"
		},
		withPreposition: {
			one: "ühe sekundi",
			other: "{{count}} sekundi"
		}
	},
	halfAMinute: {
		standalone: "pool minutit",
		withPreposition: "poole minuti"
	},
	lessThanXMinutes: {
		standalone: {
			one: "vähem kui üks minut",
			other: "vähem kui {{count}} minutit"
		},
		withPreposition: {
			one: "vähem kui ühe minuti",
			other: "vähem kui {{count}} minuti"
		}
	},
	xMinutes: {
		standalone: {
			one: "üks minut",
			other: "{{count}} minutit"
		},
		withPreposition: {
			one: "ühe minuti",
			other: "{{count}} minuti"
		}
	},
	aboutXHours: {
		standalone: {
			one: "umbes üks tund",
			other: "umbes {{count}} tundi"
		},
		withPreposition: {
			one: "umbes ühe tunni",
			other: "umbes {{count}} tunni"
		}
	},
	xHours: {
		standalone: {
			one: "üks tund",
			other: "{{count}} tundi"
		},
		withPreposition: {
			one: "ühe tunni",
			other: "{{count}} tunni"
		}
	},
	xDays: {
		standalone: {
			one: "üks päev",
			other: "{{count}} päeva"
		},
		withPreposition: {
			one: "ühe päeva",
			other: "{{count}} päeva"
		}
	},
	aboutXWeeks: {
		standalone: {
			one: "umbes üks nädal",
			other: "umbes {{count}} nädalat"
		},
		withPreposition: {
			one: "umbes ühe nädala",
			other: "umbes {{count}} nädala"
		}
	},
	xWeeks: {
		standalone: {
			one: "üks nädal",
			other: "{{count}} nädalat"
		},
		withPreposition: {
			one: "ühe nädala",
			other: "{{count}} nädala"
		}
	},
	aboutXMonths: {
		standalone: {
			one: "umbes üks kuu",
			other: "umbes {{count}} kuud"
		},
		withPreposition: {
			one: "umbes ühe kuu",
			other: "umbes {{count}} kuu"
		}
	},
	xMonths: {
		standalone: {
			one: "üks kuu",
			other: "{{count}} kuud"
		},
		withPreposition: {
			one: "ühe kuu",
			other: "{{count}} kuu"
		}
	},
	aboutXYears: {
		standalone: {
			one: "umbes üks aasta",
			other: "umbes {{count}} aastat"
		},
		withPreposition: {
			one: "umbes ühe aasta",
			other: "umbes {{count}} aasta"
		}
	},
	xYears: {
		standalone: {
			one: "üks aasta",
			other: "{{count}} aastat"
		},
		withPreposition: {
			one: "ühe aasta",
			other: "{{count}} aasta"
		}
	},
	overXYears: {
		standalone: {
			one: "rohkem kui üks aasta",
			other: "rohkem kui {{count}} aastat"
		},
		withPreposition: {
			one: "rohkem kui ühe aasta",
			other: "rohkem kui {{count}} aasta"
		}
	},
	almostXYears: {
		standalone: {
			one: "peaaegu üks aasta",
			other: "peaaegu {{count}} aastat"
		},
		withPreposition: {
			one: "peaaegu ühe aasta",
			other: "peaaegu {{count}} aasta"
		}
	}
};
var formatDistance = (token, count, options) => {
	const usageGroup = options?.addSuffix ? formatDistanceLocale[token].withPreposition : formatDistanceLocale[token].standalone;
	let result;
	if (typeof usageGroup === "string") result = usageGroup;
	else if (count === 1) result = usageGroup.one;
	else result = usageGroup.other.replace("{{count}}", String(count));
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return result + " pärast";
	else return result + " eest";
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, d. MMMM y",
			long: "d. MMMM y",
			medium: "d. MMM y",
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
			full: "{{date}} 'kell' {{time}}",
			long: "{{date}} 'kell' {{time}}",
			medium: "{{date}}. {{time}}",
			short: "{{date}}. {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/et/_lib/formatRelative.js
var formatRelativeLocale = {
	lastWeek: "'eelmine' eeee 'kell' p",
	yesterday: "'eile kell' p",
	today: "'täna kell' p",
	tomorrow: "'homme kell' p",
	nextWeek: "'järgmine' eeee 'kell' p",
	other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/et/_lib/localize.js
var eraValues = {
	narrow: ["e.m.a", "m.a.j"],
	abbreviated: ["e.m.a", "m.a.j"],
	wide: ["enne meie ajaarvamist", "meie ajaarvamise järgi"]
};
var quarterValues = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"K1",
		"K2",
		"K3",
		"K4"
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
		"V",
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
		"jaan",
		"veebr",
		"märts",
		"apr",
		"mai",
		"juuni",
		"juuli",
		"aug",
		"sept",
		"okt",
		"nov",
		"dets"
	],
	wide: [
		"jaanuar",
		"veebruar",
		"märts",
		"aprill",
		"mai",
		"juuni",
		"juuli",
		"august",
		"september",
		"oktoober",
		"november",
		"detsember"
	]
};
var dayValues = {
	narrow: [
		"P",
		"E",
		"T",
		"K",
		"N",
		"R",
		"L"
	],
	short: [
		"P",
		"E",
		"T",
		"K",
		"N",
		"R",
		"L"
	],
	abbreviated: [
		"pühap.",
		"esmasp.",
		"teisip.",
		"kolmap.",
		"neljap.",
		"reede.",
		"laup."
	],
	wide: [
		"pühapäev",
		"esmaspäev",
		"teisipäev",
		"kolmapäev",
		"neljapäev",
		"reede",
		"laupäev"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "AM",
		pm: "PM",
		midnight: "kesköö",
		noon: "keskpäev",
		morning: "hommik",
		afternoon: "pärastlõuna",
		evening: "õhtu",
		night: "öö"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "kesköö",
		noon: "keskpäev",
		morning: "hommik",
		afternoon: "pärastlõuna",
		evening: "õhtu",
		night: "öö"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "kesköö",
		noon: "keskpäev",
		morning: "hommik",
		afternoon: "pärastlõuna",
		evening: "õhtu",
		night: "öö"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "AM",
		pm: "PM",
		midnight: "keskööl",
		noon: "keskpäeval",
		morning: "hommikul",
		afternoon: "pärastlõunal",
		evening: "õhtul",
		night: "öösel"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "keskööl",
		noon: "keskpäeval",
		morning: "hommikul",
		afternoon: "pärastlõunal",
		evening: "õhtul",
		night: "öösel"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "keskööl",
		noon: "keskpäeval",
		morning: "hommikul",
		afternoon: "pärastlõunal",
		evening: "õhtul",
		night: "öösel"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	return Number(dirtyNumber) + ".";
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/et.js
/**
* @category Locales
* @summary Estonian locale.
* @language Estonian
* @iso-639-2 est
* @author Priit Hansen [@HansenPriit](https://github.com/priithansen)
*/
var et = {
	code: "et",
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
			formattingValues: monthValues,
			defaultFormattingWidth: "wide"
		}),
		day: buildLocalizeFn({
			values: dayValues,
			defaultWidth: "wide",
			formattingValues: dayValues,
			defaultFormattingWidth: "wide"
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
			matchPattern: /^\d+\./i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i,
				abbreviated: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i,
				wide: /^(enne meie ajaarvamist|meie ajaarvamise järgi|enne Kristust|pärast Kristust)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^e/i, /^(m|p)/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^K[1234]/i,
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
				narrow: /^[jvmasond]/i,
				abbreviated: /^(jaan|veebr|märts|apr|mai|juuni|juuli|aug|sept|okt|nov|dets)/i,
				wide: /^(jaanuar|veebruar|märts|aprill|mai|juuni|juuli|august|september|oktoober|november|detsember)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^v/i,
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
					/^v/i,
					/^mär/i,
					/^ap/i,
					/^mai/i,
					/^juun/i,
					/^juul/i,
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
				narrow: /^[petknrl]/i,
				short: /^[petknrl]/i,
				abbreviated: /^(püh?|esm?|tei?|kolm?|nel?|ree?|laup?)\.?/i,
				wide: /^(pühapäev|esmaspäev|teisipäev|kolmapäev|neljapäev|reede|laupäev)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/^p/i,
				/^e/i,
				/^t/i,
				/^k/i,
				/^n/i,
				/^r/i,
				/^l/i
			] },
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: { any: /^(am|pm|keskööl?|keskpäev(al)?|hommik(ul)?|pärastlõunal?|õhtul?|öö(sel)?)/i },
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^keskö/i,
				noon: /^keskp/i,
				morning: /hommik/i,
				afternoon: /pärastlõuna/i,
				evening: /õhtu/i,
				night: /öö/i
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
export { et as default, et };
