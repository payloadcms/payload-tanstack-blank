import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hu/_lib/formatDistance.js
var translations = {
	about: "körülbelül",
	over: "több mint",
	almost: "majdnem",
	lessthan: "kevesebb mint"
};
var withoutSuffixes = {
	xseconds: " másodperc",
	halfaminute: "fél perc",
	xminutes: " perc",
	xhours: " óra",
	xdays: " nap",
	xweeks: " hét",
	xmonths: " hónap",
	xyears: " év"
};
var withSuffixes = {
	xseconds: {
		"-1": " másodperccel ezelőtt",
		1: " másodperc múlva",
		0: " másodperce"
	},
	halfaminute: {
		"-1": "fél perccel ezelőtt",
		1: "fél perc múlva",
		0: "fél perce"
	},
	xminutes: {
		"-1": " perccel ezelőtt",
		1: " perc múlva",
		0: " perce"
	},
	xhours: {
		"-1": " órával ezelőtt",
		1: " óra múlva",
		0: " órája"
	},
	xdays: {
		"-1": " nappal ezelőtt",
		1: " nap múlva",
		0: " napja"
	},
	xweeks: {
		"-1": " héttel ezelőtt",
		1: " hét múlva",
		0: " hete"
	},
	xmonths: {
		"-1": " hónappal ezelőtt",
		1: " hónap múlva",
		0: " hónapja"
	},
	xyears: {
		"-1": " évvel ezelőtt",
		1: " év múlva",
		0: " éve"
	}
};
var formatDistance = (token, count, options) => {
	const adverb = token.match(/about|over|almost|lessthan/i);
	const unit = adverb ? token.replace(adverb[0], "") : token;
	const addSuffix = options?.addSuffix === true;
	const key = unit.toLowerCase();
	const comparison = options?.comparison || 0;
	const translated = addSuffix ? withSuffixes[key][comparison] : withoutSuffixes[key];
	let result = key === "halfaminute" ? translated : count + translated;
	if (adverb) result = translations[adverb[0].toLowerCase()] + " " + result;
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "y. MMMM d., EEEE",
			long: "y. MMMM d.",
			medium: "y. MMM d.",
			short: "y. MM. dd."
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
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hu/_lib/formatRelative.js
var accusativeWeekdays = [
	"vasárnap",
	"hétfőn",
	"kedden",
	"szerdán",
	"csütörtökön",
	"pénteken",
	"szombaton"
];
function week(isFuture) {
	return (date) => {
		const weekday = accusativeWeekdays[date.getDay()];
		return `${isFuture ? "" : "'múlt' "}'${weekday}' p'-kor'`;
	};
}
var formatRelativeLocale = {
	lastWeek: week(false),
	yesterday: "'tegnap' p'-kor'",
	today: "'ma' p'-kor'",
	tomorrow: "'holnap' p'-kor'",
	nextWeek: week(true),
	other: "P"
};
var formatRelative = (token, date) => {
	const format = formatRelativeLocale[token];
	if (typeof format === "function") return format(date);
	return format;
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hu/_lib/localize.js
var eraValues = {
	narrow: ["ie.", "isz."],
	abbreviated: ["i. e.", "i. sz."],
	wide: ["Krisztus előtt", "időszámításunk szerint"]
};
var quarterValues = {
	narrow: [
		"1.",
		"2.",
		"3.",
		"4."
	],
	abbreviated: [
		"1. n.év",
		"2. n.év",
		"3. n.év",
		"4. n.év"
	],
	wide: [
		"1. negyedév",
		"2. negyedév",
		"3. negyedév",
		"4. negyedév"
	]
};
var formattingQuarterValues = {
	narrow: [
		"I.",
		"II.",
		"III.",
		"IV."
	],
	abbreviated: [
		"I. n.év",
		"II. n.év",
		"III. n.év",
		"IV. n.év"
	],
	wide: [
		"I. negyedév",
		"II. negyedév",
		"III. negyedév",
		"IV. negyedév"
	]
};
var monthValues = {
	narrow: [
		"J",
		"F",
		"M",
		"Á",
		"M",
		"J",
		"J",
		"A",
		"Sz",
		"O",
		"N",
		"D"
	],
	abbreviated: [
		"jan.",
		"febr.",
		"márc.",
		"ápr.",
		"máj.",
		"jún.",
		"júl.",
		"aug.",
		"szept.",
		"okt.",
		"nov.",
		"dec."
	],
	wide: [
		"január",
		"február",
		"március",
		"április",
		"május",
		"június",
		"július",
		"augusztus",
		"szeptember",
		"október",
		"november",
		"december"
	]
};
var dayValues = {
	narrow: [
		"V",
		"H",
		"K",
		"Sz",
		"Cs",
		"P",
		"Sz"
	],
	short: [
		"V",
		"H",
		"K",
		"Sze",
		"Cs",
		"P",
		"Szo"
	],
	abbreviated: [
		"V",
		"H",
		"K",
		"Sze",
		"Cs",
		"P",
		"Szo"
	],
	wide: [
		"vasárnap",
		"hétfő",
		"kedd",
		"szerda",
		"csütörtök",
		"péntek",
		"szombat"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "de.",
		pm: "du.",
		midnight: "éjfél",
		noon: "dél",
		morning: "reggel",
		afternoon: "du.",
		evening: "este",
		night: "éjjel"
	},
	abbreviated: {
		am: "de.",
		pm: "du.",
		midnight: "éjfél",
		noon: "dél",
		morning: "reggel",
		afternoon: "du.",
		evening: "este",
		night: "éjjel"
	},
	wide: {
		am: "de.",
		pm: "du.",
		midnight: "éjfél",
		noon: "dél",
		morning: "reggel",
		afternoon: "délután",
		evening: "este",
		night: "éjjel"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	return Number(dirtyNumber) + ".";
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hu.js
/**
* @category Locales
* @summary Hungarian locale.
* @language Hungarian
* @iso-639-2 hun
* @author Pavlo Shpak [@pshpak](https://github.com/pshpak)
* @author Eduardo Pardo [@eduardopsll](https://github.com/eduardopsll)
* @author Zoltan Szepesi [@twodcube](https://github.com/twodcube)
*/
var hu = {
	code: "hu",
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
			argumentCallback: (quarter) => quarter - 1,
			formattingValues: formattingQuarterValues,
			defaultFormattingWidth: "wide"
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
				narrow: /^(ie\.|isz\.)/i,
				abbreviated: /^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,
				wide: /^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [/ie/i, /isz/i],
				abbreviated: [/^(i\.?\s?e\.?|b\s?ce)/i, /^(i\.?\s?sz\.?|c\s?e)/i],
				any: [/előtt/i, /(szerint|i. sz.)/i]
			},
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]\.?/i,
				abbreviated: /^[1234]?\.?\s?n\.év/i,
				wide: /^([1234]|I|II|III|IV)?\.?\s?negyedév/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1|I$/i,
				/2|II$/i,
				/3|III/i,
				/4|IV/i
			] },
			defaultParseWidth: "any",
			valueCallback: (index) => index + 1
		}),
		month: buildMatchFn({
			matchPatterns: {
				narrow: /^[jfmaásond]|sz/i,
				abbreviated: /^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,
				wide: /^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a|á/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s|sz/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ja/i,
					/^f/i,
					/^már/i,
					/^áp/i,
					/^máj/i,
					/^jún/i,
					/^júl/i,
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
				narrow: /^([vhkpc]|sz|cs|sz)/i,
				short: /^([vhkp]|sze|cs|szo)/i,
				abbreviated: /^([vhkp]|sze|cs|szo)/i,
				wide: /^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^v/i,
					/^h/i,
					/^k/i,
					/^sz/i,
					/^c/i,
					/^p/i,
					/^sz/i
				],
				any: [
					/^v/i,
					/^h/i,
					/^k/i,
					/^sze/i,
					/^c/i,
					/^p/i,
					/^szo/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: { any: /^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i },
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^de\.?/i,
				pm: /^du\.?/i,
				midnight: /^éjf/i,
				noon: /^dé/i,
				morning: /reg/i,
				afternoon: /^délu\.?/i,
				evening: /es/i,
				night: /éjj/i
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
export { hu as default, hu };
