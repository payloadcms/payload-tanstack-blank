import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/fr/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "moins d’une seconde",
		other: "moins de {{count}} secondes"
	},
	xSeconds: {
		one: "1 seconde",
		other: "{{count}} secondes"
	},
	halfAMinute: "30 secondes",
	lessThanXMinutes: {
		one: "moins d’une minute",
		other: "moins de {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "environ 1 heure",
		other: "environ {{count}} heures"
	},
	xHours: {
		one: "1 heure",
		other: "{{count}} heures"
	},
	xDays: {
		one: "1 jour",
		other: "{{count}} jours"
	},
	aboutXWeeks: {
		one: "environ 1 semaine",
		other: "environ {{count}} semaines"
	},
	xWeeks: {
		one: "1 semaine",
		other: "{{count}} semaines"
	},
	aboutXMonths: {
		one: "environ 1 mois",
		other: "environ {{count}} mois"
	},
	xMonths: {
		one: "1 mois",
		other: "{{count}} mois"
	},
	aboutXYears: {
		one: "environ 1 an",
		other: "environ {{count}} ans"
	},
	xYears: {
		one: "1 an",
		other: "{{count}} ans"
	},
	overXYears: {
		one: "plus d’un an",
		other: "plus de {{count}} ans"
	},
	almostXYears: {
		one: "presqu’un an",
		other: "presque {{count}} ans"
	}
};
var formatDistance = (token, count, options) => {
	let result;
	const form = formatDistanceLocale[token];
	if (typeof form === "string") result = form;
	else if (count === 1) result = form.one;
	else result = form.other.replace("{{count}}", String(count));
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return "dans " + result;
	else return "il y a " + result;
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
			full: "{{date}} 'à' {{time}}",
			long: "{{date}} 'à' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/fr/_lib/formatRelative.js
var formatRelativeLocale = {
	lastWeek: "eeee 'dernier à' p",
	yesterday: "'hier à' p",
	today: "'aujourd’hui à' p",
	tomorrow: "'demain à' p'",
	nextWeek: "eeee 'prochain à' p",
	other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/fr/_lib/localize.js
var eraValues = {
	narrow: ["av. J.-C", "ap. J.-C"],
	abbreviated: ["av. J.-C", "ap. J.-C"],
	wide: ["avant Jésus-Christ", "après Jésus-Christ"]
};
var quarterValues = {
	narrow: [
		"T1",
		"T2",
		"T3",
		"T4"
	],
	abbreviated: [
		"1er trim.",
		"2ème trim.",
		"3ème trim.",
		"4ème trim."
	],
	wide: [
		"1er trimestre",
		"2ème trimestre",
		"3ème trimestre",
		"4ème trimestre"
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
		"janv.",
		"févr.",
		"mars",
		"avr.",
		"mai",
		"juin",
		"juil.",
		"août",
		"sept.",
		"oct.",
		"nov.",
		"déc."
	],
	wide: [
		"janvier",
		"février",
		"mars",
		"avril",
		"mai",
		"juin",
		"juillet",
		"août",
		"septembre",
		"octobre",
		"novembre",
		"décembre"
	]
};
var dayValues = {
	narrow: [
		"D",
		"L",
		"M",
		"M",
		"J",
		"V",
		"S"
	],
	short: [
		"di",
		"lu",
		"ma",
		"me",
		"je",
		"ve",
		"sa"
	],
	abbreviated: [
		"dim.",
		"lun.",
		"mar.",
		"mer.",
		"jeu.",
		"ven.",
		"sam."
	],
	wide: [
		"dimanche",
		"lundi",
		"mardi",
		"mercredi",
		"jeudi",
		"vendredi",
		"samedi"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "AM",
		pm: "PM",
		midnight: "minuit",
		noon: "midi",
		morning: "mat.",
		afternoon: "ap.m.",
		evening: "soir",
		night: "mat."
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "minuit",
		noon: "midi",
		morning: "matin",
		afternoon: "après-midi",
		evening: "soir",
		night: "matin"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "minuit",
		noon: "midi",
		morning: "du matin",
		afternoon: "de l’après-midi",
		evening: "du soir",
		night: "du matin"
	}
};
var ordinalNumber = (dirtyNumber, options) => {
	const number = Number(dirtyNumber);
	const unit = options?.unit;
	if (number === 0) return "0";
	const feminineUnits = [
		"year",
		"week",
		"hour",
		"minute",
		"second"
	];
	let suffix;
	if (number === 1) suffix = unit && feminineUnits.includes(unit) ? "ère" : "er";
	else suffix = "ème";
	return number + suffix;
};
var LONG_MONTHS_TOKENS = ["MMM", "MMMM"];
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/fr.js
/**
* @category Locales
* @summary French locale.
* @language French
* @iso-639-2 fra
* @author Jean Dupouy [@izeau](https://github.com/izeau)
* @author François B [@fbonzon](https://github.com/fbonzon)
*/
var fr = {
	code: "fr",
	formatDistance,
	formatLong,
	formatRelative,
	localize: {
		preprocessor: (date, parts) => {
			if (date.getDate() === 1) return parts;
			if (!parts.some((part) => part.isToken && LONG_MONTHS_TOKENS.includes(part.value))) return parts;
			return parts.map((part) => part.isToken && part.value === "do" ? {
				isToken: true,
				value: "d"
			} : part);
		},
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
			matchPattern: /^(\d+)(ième|ère|ème|er|e)?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
				abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
				wide: /^(avant Jésus-Christ|après Jésus-Christ)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^av/i, /^ap/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^T?[1234]/i,
				abbreviated: /^[1234](er|ème|e)? trim\.?/i,
				wide: /^[1234](er|ème|e)? trimestre/i
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
				abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
				wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
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
					/^av/i,
					/^ma/i,
					/^juin/i,
					/^juil/i,
					/^ao/i,
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
				narrow: /^[lmjvsd]/i,
				short: /^(di|lu|ma|me|je|ve|sa)/i,
				abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
				wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^d/i,
					/^l/i,
					/^m/i,
					/^m/i,
					/^j/i,
					/^v/i,
					/^s/i
				],
				any: [
					/^di/i,
					/^lu/i,
					/^ma/i,
					/^me/i,
					/^je/i,
					/^ve/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
				any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^min/i,
				noon: /^mid/i,
				morning: /mat/i,
				afternoon: /ap/i,
				evening: /soir/i,
				night: /nuit/i
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
export { fr as default, fr };
