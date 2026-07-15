import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/ro/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "mai puțin de o secundă",
		other: "mai puțin de {{count}} secunde"
	},
	xSeconds: {
		one: "1 secundă",
		other: "{{count}} secunde"
	},
	halfAMinute: "jumătate de minut",
	lessThanXMinutes: {
		one: "mai puțin de un minut",
		other: "mai puțin de {{count}} minute"
	},
	xMinutes: {
		one: "1 minut",
		other: "{{count}} minute"
	},
	aboutXHours: {
		one: "circa 1 oră",
		other: "circa {{count}} ore"
	},
	xHours: {
		one: "1 oră",
		other: "{{count}} ore"
	},
	xDays: {
		one: "1 zi",
		other: "{{count}} zile"
	},
	aboutXWeeks: {
		one: "circa o săptămână",
		other: "circa {{count}} săptămâni"
	},
	xWeeks: {
		one: "1 săptămână",
		other: "{{count}} săptămâni"
	},
	aboutXMonths: {
		one: "circa 1 lună",
		other: "circa {{count}} luni"
	},
	xMonths: {
		one: "1 lună",
		other: "{{count}} luni"
	},
	aboutXYears: {
		one: "circa 1 an",
		other: "circa {{count}} ani"
	},
	xYears: {
		one: "1 an",
		other: "{{count}} ani"
	},
	overXYears: {
		one: "peste 1 an",
		other: "peste {{count}} ani"
	},
	almostXYears: {
		one: "aproape 1 an",
		other: "aproape {{count}} ani"
	}
};
var formatDistance = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", String(count));
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return "în " + result;
	else return result + " în urmă";
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, d MMMM yyyy",
			long: "d MMMM yyyy",
			medium: "d MMM yyyy",
			short: "dd.MM.yyyy"
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
			full: "{{date}} 'la' {{time}}",
			long: "{{date}} 'la' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/ro/_lib/formatRelative.js
var formatRelativeLocale = {
	lastWeek: "eeee 'trecută la' p",
	yesterday: "'ieri la' p",
	today: "'astăzi la' p",
	tomorrow: "'mâine la' p",
	nextWeek: "eeee 'viitoare la' p",
	other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/ro/_lib/localize.js
var eraValues = {
	narrow: ["Î", "D"],
	abbreviated: ["Î.d.C.", "D.C."],
	wide: ["Înainte de Cristos", "După Cristos"]
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
		"primul trimestru",
		"al doilea trimestru",
		"al treilea trimestru",
		"al patrulea trimestru"
	]
};
var monthValues = {
	narrow: [
		"I",
		"F",
		"M",
		"A",
		"M",
		"I",
		"I",
		"A",
		"S",
		"O",
		"N",
		"D"
	],
	abbreviated: [
		"ian",
		"feb",
		"mar",
		"apr",
		"mai",
		"iun",
		"iul",
		"aug",
		"sep",
		"oct",
		"noi",
		"dec"
	],
	wide: [
		"ianuarie",
		"februarie",
		"martie",
		"aprilie",
		"mai",
		"iunie",
		"iulie",
		"august",
		"septembrie",
		"octombrie",
		"noiembrie",
		"decembrie"
	]
};
var dayValues = {
	narrow: [
		"d",
		"l",
		"m",
		"m",
		"j",
		"v",
		"s"
	],
	short: [
		"du",
		"lu",
		"ma",
		"mi",
		"jo",
		"vi",
		"sâ"
	],
	abbreviated: [
		"dum",
		"lun",
		"mar",
		"mie",
		"joi",
		"vin",
		"sâm"
	],
	wide: [
		"duminică",
		"luni",
		"marți",
		"miercuri",
		"joi",
		"vineri",
		"sâmbătă"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "mn",
		noon: "ami",
		morning: "dim",
		afternoon: "da",
		evening: "s",
		night: "n"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "miezul nopții",
		noon: "amiază",
		morning: "dimineață",
		afternoon: "după-amiază",
		evening: "seară",
		night: "noapte"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "miezul nopții",
		noon: "amiază",
		morning: "dimineață",
		afternoon: "după-amiază",
		evening: "seară",
		night: "noapte"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "mn",
		noon: "amiază",
		morning: "dimineață",
		afternoon: "după-amiază",
		evening: "seară",
		night: "noapte"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "miezul nopții",
		noon: "amiază",
		morning: "dimineață",
		afternoon: "după-amiază",
		evening: "seară",
		night: "noapte"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "miezul nopții",
		noon: "amiază",
		morning: "dimineață",
		afternoon: "după-amiază",
		evening: "seară",
		night: "noapte"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	return String(dirtyNumber);
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/ro.js
/**
* @category Locales
* @summary Romanian locale.
* @language Romanian
* @iso-639-2 ron
* @author Sergiu Munteanu [@jsergiu](https://github.com/jsergiu)
* @author Adrian Ocneanu [@aocneanu](https://github.com/aocneanu)
* @author Mihai Ocneanu [@gandesc](https://github.com/gandesc)
*/
var ro = {
	code: "ro",
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
			matchPattern: /^(\d+)?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(Î|D)/i,
				abbreviated: /^(Î\.?\s?d\.?\s?C\.?|Î\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,
				wide: /^(Înainte de Cristos|Înaintea erei noastre|După Cristos|Era noastră)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				any: [/^ÎC/i, /^DC/i],
				wide: [/^(Înainte de Cristos|Înaintea erei noastre)/i, /^(După Cristos|Era noastră)/i]
			},
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^T[1234]/i,
				wide: /^trimestrul [1234]/i
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
				narrow: /^[ifmaasond]/i,
				abbreviated: /^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,
				wide: /^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^i/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^i/i,
					/^i/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ia/i,
					/^f/i,
					/^mar/i,
					/^ap/i,
					/^mai/i,
					/^iun/i,
					/^iul/i,
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
				narrow: /^[dlmjvs]/i,
				short: /^(d|l|ma|mi|j|v|s)/i,
				abbreviated: /^(dum|lun|mar|mie|jo|vi|sâ)/i,
				wide: /^(duminica|luni|marţi|miercuri|joi|vineri|sâmbătă)/i
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
					/^d/i,
					/^l/i,
					/^ma/i,
					/^mi/i,
					/^j/i,
					/^v/i,
					/^s/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(a|p|mn|a|(dimineaţa|după-amiaza|seara|noaptea))/i,
				any: /^([ap]\.?\s?m\.?|miezul nopții|amiaza|(dimineaţa|după-amiaza|seara|noaptea))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mn/i,
				noon: /amiaza/i,
				morning: /dimineaţa/i,
				afternoon: /după-amiaza/i,
				evening: /seara/i,
				night: /noaptea/i
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
export { ro as default, ro };
