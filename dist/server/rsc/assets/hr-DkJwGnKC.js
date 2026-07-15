import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hr/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: {
			standalone: "manje od 1 sekunde",
			withPrepositionAgo: "manje od 1 sekunde",
			withPrepositionIn: "manje od 1 sekundu"
		},
		dual: "manje od {{count}} sekunde",
		other: "manje od {{count}} sekundi"
	},
	xSeconds: {
		one: {
			standalone: "1 sekunda",
			withPrepositionAgo: "1 sekunde",
			withPrepositionIn: "1 sekundu"
		},
		dual: "{{count}} sekunde",
		other: "{{count}} sekundi"
	},
	halfAMinute: "pola minute",
	lessThanXMinutes: {
		one: {
			standalone: "manje od 1 minute",
			withPrepositionAgo: "manje od 1 minute",
			withPrepositionIn: "manje od 1 minutu"
		},
		dual: "manje od {{count}} minute",
		other: "manje od {{count}} minuta"
	},
	xMinutes: {
		one: {
			standalone: "1 minuta",
			withPrepositionAgo: "1 minute",
			withPrepositionIn: "1 minutu"
		},
		dual: "{{count}} minute",
		other: "{{count}} minuta"
	},
	aboutXHours: {
		one: {
			standalone: "oko 1 sat",
			withPrepositionAgo: "oko 1 sat",
			withPrepositionIn: "oko 1 sat"
		},
		dual: "oko {{count}} sata",
		other: "oko {{count}} sati"
	},
	xHours: {
		one: {
			standalone: "1 sat",
			withPrepositionAgo: "1 sat",
			withPrepositionIn: "1 sat"
		},
		dual: "{{count}} sata",
		other: "{{count}} sati"
	},
	xDays: {
		one: {
			standalone: "1 dan",
			withPrepositionAgo: "1 dan",
			withPrepositionIn: "1 dan"
		},
		dual: "{{count}} dana",
		other: "{{count}} dana"
	},
	aboutXWeeks: {
		one: {
			standalone: "oko 1 tjedan",
			withPrepositionAgo: "oko 1 tjedan",
			withPrepositionIn: "oko 1 tjedan"
		},
		dual: "oko {{count}} tjedna",
		other: "oko {{count}} tjedana"
	},
	xWeeks: {
		one: {
			standalone: "1 tjedan",
			withPrepositionAgo: "1 tjedan",
			withPrepositionIn: "1 tjedan"
		},
		dual: "{{count}} tjedna",
		other: "{{count}} tjedana"
	},
	aboutXMonths: {
		one: {
			standalone: "oko 1 mjesec",
			withPrepositionAgo: "oko 1 mjesec",
			withPrepositionIn: "oko 1 mjesec"
		},
		dual: "oko {{count}} mjeseca",
		other: "oko {{count}} mjeseci"
	},
	xMonths: {
		one: {
			standalone: "1 mjesec",
			withPrepositionAgo: "1 mjesec",
			withPrepositionIn: "1 mjesec"
		},
		dual: "{{count}} mjeseca",
		other: "{{count}} mjeseci"
	},
	aboutXYears: {
		one: {
			standalone: "oko 1 godinu",
			withPrepositionAgo: "oko 1 godinu",
			withPrepositionIn: "oko 1 godinu"
		},
		dual: "oko {{count}} godine",
		other: "oko {{count}} godina"
	},
	xYears: {
		one: {
			standalone: "1 godina",
			withPrepositionAgo: "1 godine",
			withPrepositionIn: "1 godinu"
		},
		dual: "{{count}} godine",
		other: "{{count}} godina"
	},
	overXYears: {
		one: {
			standalone: "preko 1 godinu",
			withPrepositionAgo: "preko 1 godinu",
			withPrepositionIn: "preko 1 godinu"
		},
		dual: "preko {{count}} godine",
		other: "preko {{count}} godina"
	},
	almostXYears: {
		one: {
			standalone: "gotovo 1 godinu",
			withPrepositionAgo: "gotovo 1 godinu",
			withPrepositionIn: "gotovo 1 godinu"
		},
		dual: "gotovo {{count}} godine",
		other: "gotovo {{count}} godina"
	}
};
var formatDistance = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) if (options?.addSuffix) if (options.comparison && options.comparison > 0) result = tokenValue.one.withPrepositionIn;
	else result = tokenValue.one.withPrepositionAgo;
	else result = tokenValue.one.standalone;
	else if (count % 10 > 1 && count % 10 < 5 && String(count).substr(-2, 1) !== "1") result = tokenValue.dual.replace("{{count}}", String(count));
	else result = tokenValue.other.replace("{{count}}", String(count));
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return "za " + result;
	else return "prije " + result;
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, d. MMMM y.",
			long: "d. MMMM y.",
			medium: "d. MMM y.",
			short: "dd. MM. y."
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "HH:mm:ss (zzzz)",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} 'u' {{time}}",
			long: "{{date}} 'u' {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hr/_lib/formatRelative.js
var formatRelativeLocale = {
	lastWeek: (date) => {
		switch (date.getDay()) {
			case 0: return "'prošlu nedjelju u' p";
			case 3: return "'prošlu srijedu u' p";
			case 6: return "'prošlu subotu u' p";
			default: return "'prošli' EEEE 'u' p";
		}
	},
	yesterday: "'jučer u' p",
	today: "'danas u' p",
	tomorrow: "'sutra u' p",
	nextWeek: (date) => {
		switch (date.getDay()) {
			case 0: return "'iduću nedjelju u' p";
			case 3: return "'iduću srijedu u' p";
			case 6: return "'iduću subotu u' p";
			default: return "'prošli' EEEE 'u' p";
		}
	},
	other: "P"
};
var formatRelative = (token, date, _baseDate, _options) => {
	const format = formatRelativeLocale[token];
	if (typeof format === "function") return format(date);
	return format;
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hr/_lib/localize.js
var eraValues = {
	narrow: ["pr.n.e.", "AD"],
	abbreviated: ["pr. Kr.", "po. Kr."],
	wide: ["Prije Krista", "Poslije Krista"]
};
var quarterValues = {
	narrow: [
		"1.",
		"2.",
		"3.",
		"4."
	],
	abbreviated: [
		"1. kv.",
		"2. kv.",
		"3. kv.",
		"4. kv."
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
		"1.",
		"2.",
		"3.",
		"4.",
		"5.",
		"6.",
		"7.",
		"8.",
		"9.",
		"10.",
		"11.",
		"12."
	],
	abbreviated: [
		"sij",
		"velj",
		"ožu",
		"tra",
		"svi",
		"lip",
		"srp",
		"kol",
		"ruj",
		"lis",
		"stu",
		"pro"
	],
	wide: [
		"siječanj",
		"veljača",
		"ožujak",
		"travanj",
		"svibanj",
		"lipanj",
		"srpanj",
		"kolovoz",
		"rujan",
		"listopad",
		"studeni",
		"prosinac"
	]
};
var formattingMonthValues = {
	narrow: [
		"1.",
		"2.",
		"3.",
		"4.",
		"5.",
		"6.",
		"7.",
		"8.",
		"9.",
		"10.",
		"11.",
		"12."
	],
	abbreviated: [
		"sij",
		"velj",
		"ožu",
		"tra",
		"svi",
		"lip",
		"srp",
		"kol",
		"ruj",
		"lis",
		"stu",
		"pro"
	],
	wide: [
		"siječnja",
		"veljače",
		"ožujka",
		"travnja",
		"svibnja",
		"lipnja",
		"srpnja",
		"kolovoza",
		"rujna",
		"listopada",
		"studenog",
		"prosinca"
	]
};
var dayValues = {
	narrow: [
		"N",
		"P",
		"U",
		"S",
		"Č",
		"P",
		"S"
	],
	short: [
		"ned",
		"pon",
		"uto",
		"sri",
		"čet",
		"pet",
		"sub"
	],
	abbreviated: [
		"ned",
		"pon",
		"uto",
		"sri",
		"čet",
		"pet",
		"sub"
	],
	wide: [
		"nedjelja",
		"ponedjeljak",
		"utorak",
		"srijeda",
		"četvrtak",
		"petak",
		"subota"
	]
};
var formattingDayPeriodValues = {
	narrow: {
		am: "AM",
		pm: "PM",
		midnight: "ponoć",
		noon: "podne",
		morning: "ujutro",
		afternoon: "popodne",
		evening: "navečer",
		night: "noću"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "ponoć",
		noon: "podne",
		morning: "ujutro",
		afternoon: "popodne",
		evening: "navečer",
		night: "noću"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "ponoć",
		noon: "podne",
		morning: "ujutro",
		afternoon: "poslije podne",
		evening: "navečer",
		night: "noću"
	}
};
var dayPeriodValues = {
	narrow: {
		am: "AM",
		pm: "PM",
		midnight: "ponoć",
		noon: "podne",
		morning: "ujutro",
		afternoon: "popodne",
		evening: "navečer",
		night: "noću"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "ponoć",
		noon: "podne",
		morning: "ujutro",
		afternoon: "popodne",
		evening: "navečer",
		night: "noću"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "ponoć",
		noon: "podne",
		morning: "ujutro",
		afternoon: "poslije podne",
		evening: "navečer",
		night: "noću"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	return Number(dirtyNumber) + ".";
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hr.js
/**
* @category Locales
* @summary Croatian locale.
* @language Croatian
* @iso-639-2 hrv
* @author Matija Marohnić [@silvenon](https://github.com/silvenon)
* @author Manico [@manico](https://github.com/manico)
* @author Ivan Jeržabek [@jerzabek](https://github.com/jerzabek)
*/
var hr = {
	code: "hr",
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
			matchPattern: /^(\d+)\./i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(pr\.n\.e\.|AD)/i,
				abbreviated: /^(pr\.\s?Kr\.|po\.\s?Kr\.)/i,
				wide: /^(Prije Krista|prije nove ere|Poslije Krista|nova era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^pr/i, /^(po|nova)/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^[1234]\.\s?kv\.?/i,
				wide: /^[1234]\. kvartal/i
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
				narrow: /^(10|11|12|[123456789])\./i,
				abbreviated: /^(sij|velj|(ožu|ozu)|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i,
				wide: /^((siječanj|siječnja|sijecanj|sijecnja)|(veljača|veljače|veljaca|veljace)|(ožujak|ožujka|ozujak|ozujka)|(travanj|travnja)|(svibanj|svibnja)|(lipanj|lipnja)|(srpanj|srpnja)|(kolovoz|kolovoza)|(rujan|rujna)|(listopad|listopada)|(studeni|studenog)|(prosinac|prosinca))/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/1/i,
					/2/i,
					/3/i,
					/4/i,
					/5/i,
					/6/i,
					/7/i,
					/8/i,
					/9/i,
					/10/i,
					/11/i,
					/12/i
				],
				abbreviated: [
					/^sij/i,
					/^velj/i,
					/^(ožu|ozu)/i,
					/^tra/i,
					/^svi/i,
					/^lip/i,
					/^srp/i,
					/^kol/i,
					/^ruj/i,
					/^lis/i,
					/^stu/i,
					/^pro/i
				],
				wide: [
					/^sij/i,
					/^velj/i,
					/^(ožu|ozu)/i,
					/^tra/i,
					/^svi/i,
					/^lip/i,
					/^srp/i,
					/^kol/i,
					/^ruj/i,
					/^lis/i,
					/^stu/i,
					/^pro/i
				]
			},
			defaultParseWidth: "wide"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^[npusčc]/i,
				short: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
				abbreviated: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
				wide: /^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^s/i,
					/^m/i,
					/^t/i,
					/^w/i,
					/^t/i,
					/^f/i,
					/^s/i
				],
				any: [
					/^su/i,
					/^m/i,
					/^tu/i,
					/^w/i,
					/^th/i,
					/^f/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: { any: /^(am|pm|ponoc|ponoć|(po)?podne|navecer|navečer|noću|poslije podne|ujutro)/i },
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^pono/i,
				noon: /^pod/i,
				morning: /jutro/i,
				afternoon: /(poslije\s|po)+podne/i,
				evening: /(navece|naveče)/i,
				night: /(nocu|noću)/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 1,
		firstWeekContainsDate: 1
	}
};
//#endregion
export { hr as default, hr };
