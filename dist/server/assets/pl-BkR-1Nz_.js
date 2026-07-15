import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
import { t as isSameWeek } from "./isSameWeek-CGJFiiyr.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/pl/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: {
			regular: "mniej niż sekunda",
			past: "mniej niż sekundę",
			future: "mniej niż sekundę"
		},
		twoFour: "mniej niż {{count}} sekundy",
		other: "mniej niż {{count}} sekund"
	},
	xSeconds: {
		one: {
			regular: "sekunda",
			past: "sekundę",
			future: "sekundę"
		},
		twoFour: "{{count}} sekundy",
		other: "{{count}} sekund"
	},
	halfAMinute: {
		one: "pół minuty",
		twoFour: "pół minuty",
		other: "pół minuty"
	},
	lessThanXMinutes: {
		one: {
			regular: "mniej niż minuta",
			past: "mniej niż minutę",
			future: "mniej niż minutę"
		},
		twoFour: "mniej niż {{count}} minuty",
		other: "mniej niż {{count}} minut"
	},
	xMinutes: {
		one: {
			regular: "minuta",
			past: "minutę",
			future: "minutę"
		},
		twoFour: "{{count}} minuty",
		other: "{{count}} minut"
	},
	aboutXHours: {
		one: {
			regular: "około godziny",
			past: "około godziny",
			future: "około godzinę"
		},
		twoFour: "około {{count}} godziny",
		other: "około {{count}} godzin"
	},
	xHours: {
		one: {
			regular: "godzina",
			past: "godzinę",
			future: "godzinę"
		},
		twoFour: "{{count}} godziny",
		other: "{{count}} godzin"
	},
	xDays: {
		one: {
			regular: "dzień",
			past: "dzień",
			future: "1 dzień"
		},
		twoFour: "{{count}} dni",
		other: "{{count}} dni"
	},
	aboutXWeeks: {
		one: "około tygodnia",
		twoFour: "około {{count}} tygodni",
		other: "około {{count}} tygodni"
	},
	xWeeks: {
		one: "tydzień",
		twoFour: "{{count}} tygodnie",
		other: "{{count}} tygodni"
	},
	aboutXMonths: {
		one: "około miesiąc",
		twoFour: "około {{count}} miesiące",
		other: "około {{count}} miesięcy"
	},
	xMonths: {
		one: "miesiąc",
		twoFour: "{{count}} miesiące",
		other: "{{count}} miesięcy"
	},
	aboutXYears: {
		one: "około rok",
		twoFour: "około {{count}} lata",
		other: "około {{count}} lat"
	},
	xYears: {
		one: "rok",
		twoFour: "{{count}} lata",
		other: "{{count}} lat"
	},
	overXYears: {
		one: "ponad rok",
		twoFour: "ponad {{count}} lata",
		other: "ponad {{count}} lat"
	},
	almostXYears: {
		one: "prawie rok",
		twoFour: "prawie {{count}} lata",
		other: "prawie {{count}} lat"
	}
};
function declensionGroup(scheme, count) {
	if (count === 1) return scheme.one;
	const rem100 = count % 100;
	if (rem100 <= 20 && rem100 > 10) return scheme.other;
	const rem10 = rem100 % 10;
	if (rem10 >= 2 && rem10 <= 4) return scheme.twoFour;
	return scheme.other;
}
function declension(scheme, count, time) {
	const group = declensionGroup(scheme, count);
	return (typeof group === "string" ? group : group[time]).replace("{{count}}", String(count));
}
var formatDistance = (token, count, options) => {
	const scheme = formatDistanceLocale[token];
	if (!options?.addSuffix) return declension(scheme, count, "regular");
	if (options.comparison && options.comparison > 0) return "za " + declension(scheme, count, "future");
	else return declension(scheme, count, "past") + " temu";
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
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/pl/_lib/formatRelative.js
var adjectivesLastWeek = {
	masculine: "ostatni",
	feminine: "ostatnia"
};
var adjectivesThisWeek = {
	masculine: "ten",
	feminine: "ta"
};
var adjectivesNextWeek = {
	masculine: "następny",
	feminine: "następna"
};
var dayGrammaticalGender = {
	0: "feminine",
	1: "masculine",
	2: "masculine",
	3: "feminine",
	4: "masculine",
	5: "masculine",
	6: "feminine"
};
function dayAndTimeWithAdjective(token, date, baseDate, options) {
	let adjectives;
	if (isSameWeek(date, baseDate, options)) adjectives = adjectivesThisWeek;
	else if (token === "lastWeek") adjectives = adjectivesLastWeek;
	else if (token === "nextWeek") adjectives = adjectivesNextWeek;
	else throw new Error(`Cannot determine adjectives for token ${token}`);
	const grammaticalGender = dayGrammaticalGender[date.getDay()];
	return `'${adjectives[grammaticalGender]}' eeee 'o' p`;
}
var formatRelativeLocale = {
	lastWeek: dayAndTimeWithAdjective,
	yesterday: "'wczoraj o' p",
	today: "'dzisiaj o' p",
	tomorrow: "'jutro o' p",
	nextWeek: dayAndTimeWithAdjective,
	other: "P"
};
var formatRelative = (token, date, baseDate, options) => {
	const format = formatRelativeLocale[token];
	if (typeof format === "function") return format(token, date, baseDate, options);
	return format;
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/pl/_lib/localize.js
var eraValues = {
	narrow: ["p.n.e.", "n.e."],
	abbreviated: ["p.n.e.", "n.e."],
	wide: ["przed naszą erą", "naszej ery"]
};
var quarterValues = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"I kw.",
		"II kw.",
		"III kw.",
		"IV kw."
	],
	wide: [
		"I kwartał",
		"II kwartał",
		"III kwartał",
		"IV kwartał"
	]
};
var monthValues = {
	narrow: [
		"S",
		"L",
		"M",
		"K",
		"M",
		"C",
		"L",
		"S",
		"W",
		"P",
		"L",
		"G"
	],
	abbreviated: [
		"sty",
		"lut",
		"mar",
		"kwi",
		"maj",
		"cze",
		"lip",
		"sie",
		"wrz",
		"paź",
		"lis",
		"gru"
	],
	wide: [
		"styczeń",
		"luty",
		"marzec",
		"kwiecień",
		"maj",
		"czerwiec",
		"lipiec",
		"sierpień",
		"wrzesień",
		"październik",
		"listopad",
		"grudzień"
	]
};
var monthFormattingValues = {
	narrow: [
		"s",
		"l",
		"m",
		"k",
		"m",
		"c",
		"l",
		"s",
		"w",
		"p",
		"l",
		"g"
	],
	abbreviated: [
		"sty",
		"lut",
		"mar",
		"kwi",
		"maj",
		"cze",
		"lip",
		"sie",
		"wrz",
		"paź",
		"lis",
		"gru"
	],
	wide: [
		"stycznia",
		"lutego",
		"marca",
		"kwietnia",
		"maja",
		"czerwca",
		"lipca",
		"sierpnia",
		"września",
		"października",
		"listopada",
		"grudnia"
	]
};
var dayValues = {
	narrow: [
		"N",
		"P",
		"W",
		"Ś",
		"C",
		"P",
		"S"
	],
	short: [
		"nie",
		"pon",
		"wto",
		"śro",
		"czw",
		"pią",
		"sob"
	],
	abbreviated: [
		"niedz.",
		"pon.",
		"wt.",
		"śr.",
		"czw.",
		"pt.",
		"sob."
	],
	wide: [
		"niedziela",
		"poniedziałek",
		"wtorek",
		"środa",
		"czwartek",
		"piątek",
		"sobota"
	]
};
var dayFormattingValues = {
	narrow: [
		"n",
		"p",
		"w",
		"ś",
		"c",
		"p",
		"s"
	],
	short: [
		"nie",
		"pon",
		"wto",
		"śro",
		"czw",
		"pią",
		"sob"
	],
	abbreviated: [
		"niedz.",
		"pon.",
		"wt.",
		"śr.",
		"czw.",
		"pt.",
		"sob."
	],
	wide: [
		"niedziela",
		"poniedziałek",
		"wtorek",
		"środa",
		"czwartek",
		"piątek",
		"sobota"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "półn.",
		noon: "poł",
		morning: "rano",
		afternoon: "popoł.",
		evening: "wiecz.",
		night: "noc"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "północ",
		noon: "południe",
		morning: "rano",
		afternoon: "popołudnie",
		evening: "wieczór",
		night: "noc"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "północ",
		noon: "południe",
		morning: "rano",
		afternoon: "popołudnie",
		evening: "wieczór",
		night: "noc"
	}
};
var dayPeriodFormattingValues = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "o półn.",
		noon: "w poł.",
		morning: "rano",
		afternoon: "po poł.",
		evening: "wiecz.",
		night: "w nocy"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "o północy",
		noon: "w południe",
		morning: "rano",
		afternoon: "po południu",
		evening: "wieczorem",
		night: "w nocy"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "o północy",
		noon: "w południe",
		morning: "rano",
		afternoon: "po południu",
		evening: "wieczorem",
		night: "w nocy"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	return String(dirtyNumber);
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/pl.js
/**
* @category Locales
* @summary Polish locale.
* @language Polish
* @iso-639-2 pol
* @author Mateusz Derks [@ertrzyiks](https://github.com/ertrzyiks)
* @author Just RAG [@justrag](https://github.com/justrag)
* @author Mikolaj Grzyb [@mikolajgrzyb](https://github.com/mikolajgrzyb)
* @author Mateusz Tokarski [@mutisz](https://github.com/mutisz)
*/
var pl = {
	code: "pl",
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
			formattingValues: monthFormattingValues,
			defaultFormattingWidth: "wide"
		}),
		day: buildLocalizeFn({
			values: dayValues,
			defaultWidth: "wide",
			formattingValues: dayFormattingValues,
			defaultFormattingWidth: "wide"
		}),
		dayPeriod: buildLocalizeFn({
			values: dayPeriodValues,
			defaultWidth: "wide",
			formattingValues: dayPeriodFormattingValues,
			defaultFormattingWidth: "wide"
		})
	},
	match: {
		ordinalNumber: buildMatchPatternFn({
			matchPattern: /^(\d+)?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
				abbreviated: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
				wide: /^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^p/i, /^n/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^(I|II|III|IV)\s*kw\.?/i,
				wide: /^(I|II|III|IV)\s*kwarta(ł|l)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/1/i,
					/2/i,
					/3/i,
					/4/i
				],
				any: [
					/^I kw/i,
					/^II kw/i,
					/^III kw/i,
					/^IV kw/i
				]
			},
			defaultParseWidth: "any",
			valueCallback: (index) => index + 1
		}),
		month: buildMatchFn({
			matchPatterns: {
				narrow: /^[slmkcwpg]/i,
				abbreviated: /^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,
				wide: /^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^s/i,
					/^l/i,
					/^m/i,
					/^k/i,
					/^m/i,
					/^c/i,
					/^l/i,
					/^s/i,
					/^w/i,
					/^p/i,
					/^l/i,
					/^g/i
				],
				any: [
					/^st/i,
					/^lu/i,
					/^mar/i,
					/^k/i,
					/^maj/i,
					/^c/i,
					/^lip/i,
					/^si/i,
					/^w/i,
					/^p/i,
					/^lis/i,
					/^g/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^[npwścs]/i,
				short: /^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,
				abbreviated: /^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,
				wide: /^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^n/i,
					/^p/i,
					/^w/i,
					/^ś/i,
					/^c/i,
					/^p/i,
					/^s/i
				],
				abbreviated: [
					/^n/i,
					/^po/i,
					/^w/i,
					/^(ś|s)r/i,
					/^c/i,
					/^pt/i,
					/^so/i
				],
				any: [
					/^n/i,
					/^po/i,
					/^w/i,
					/^(ś|s)r/i,
					/^c/i,
					/^pi/i,
					/^so/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,
				any: /^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i
			},
			defaultMatchWidth: "any",
			parsePatterns: {
				narrow: {
					am: /^a$/i,
					pm: /^p$/i,
					midnight: /pó(ł|l)n/i,
					noon: /po(ł|l)/i,
					morning: /rano/i,
					afternoon: /po\s*po(ł|l)/i,
					evening: /wiecz/i,
					night: /noc/i
				},
				any: {
					am: /^am/i,
					pm: /^pm/i,
					midnight: /pó(ł|l)n/i,
					noon: /po(ł|l)/i,
					morning: /rano/i,
					afternoon: /po\s*po(ł|l)/i,
					evening: /wiecz/i,
					night: /noc/i
				}
			},
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 1,
		firstWeekContainsDate: 4
	}
};
//#endregion
export { pl as default, pl };
