import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/az/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "bir saniyədən az",
		other: "{{count}} bir saniyədən az"
	},
	xSeconds: {
		one: "1 saniyə",
		other: "{{count}} saniyə"
	},
	halfAMinute: "yarım dəqiqə",
	lessThanXMinutes: {
		one: "bir dəqiqədən az",
		other: "{{count}} bir dəqiqədən az"
	},
	xMinutes: {
		one: "bir dəqiqə",
		other: "{{count}} dəqiqə"
	},
	aboutXHours: {
		one: "təxminən 1 saat",
		other: "təxminən {{count}} saat"
	},
	xHours: {
		one: "1 saat",
		other: "{{count}} saat"
	},
	xDays: {
		one: "1 gün",
		other: "{{count}} gün"
	},
	aboutXWeeks: {
		one: "təxminən 1 həftə",
		other: "təxminən {{count}} həftə"
	},
	xWeeks: {
		one: "1 həftə",
		other: "{{count}} həftə"
	},
	aboutXMonths: {
		one: "təxminən 1 ay",
		other: "təxminən {{count}} ay"
	},
	xMonths: {
		one: "1 ay",
		other: "{{count}} ay"
	},
	aboutXYears: {
		one: "təxminən 1 il",
		other: "təxminən {{count}} il"
	},
	xYears: {
		one: "1 il",
		other: "{{count}} il"
	},
	overXYears: {
		one: "1 ildən çox",
		other: "{{count}} ildən çox"
	},
	almostXYears: {
		one: "demək olar ki 1 il",
		other: "demək olar ki {{count}} il"
	}
};
var formatDistance = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", String(count));
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return result + " sonra";
	else return result + " əvvəl";
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, do MMMM y 'il'",
			long: "do MMMM y 'il'",
			medium: "d MMM y 'il'",
			short: "dd.MM.yyyy"
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
			full: "{{date}} {{time}} - 'də'",
			long: "{{date}} {{time}} - 'də'",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/az/_lib/formatRelative.js
var formatRelativeLocale = {
	lastWeek: "'sonuncu' eeee p -'də'",
	yesterday: "'dünən' p -'də'",
	today: "'bugün' p -'də'",
	tomorrow: "'sabah' p -'də'",
	nextWeek: "eeee p -'də'",
	other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/az/_lib/localize.js
var eraValues = {
	narrow: ["e.ə", "b.e"],
	abbreviated: ["e.ə", "b.e"],
	wide: ["eramızdan əvvəl", "bizim era"]
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
		"1ci kvartal",
		"2ci kvartal",
		"3cü kvartal",
		"4cü kvartal"
	]
};
var monthValues = {
	narrow: [
		"Y",
		"F",
		"M",
		"A",
		"M",
		"İ",
		"İ",
		"A",
		"S",
		"O",
		"N",
		"D"
	],
	abbreviated: [
		"Yan",
		"Fev",
		"Mar",
		"Apr",
		"May",
		"İyun",
		"İyul",
		"Avq",
		"Sen",
		"Okt",
		"Noy",
		"Dek"
	],
	wide: [
		"Yanvar",
		"Fevral",
		"Mart",
		"Aprel",
		"May",
		"İyun",
		"İyul",
		"Avqust",
		"Sentyabr",
		"Oktyabr",
		"Noyabr",
		"Dekabr"
	]
};
var dayValues = {
	narrow: [
		"B.",
		"B.e",
		"Ç.a",
		"Ç.",
		"C.a",
		"C.",
		"Ş."
	],
	short: [
		"B.",
		"B.e",
		"Ç.a",
		"Ç.",
		"C.a",
		"C.",
		"Ş."
	],
	abbreviated: [
		"Baz",
		"Baz.e",
		"Çər.a",
		"Çər",
		"Cüm.a",
		"Cüm",
		"Şə"
	],
	wide: [
		"Bazar",
		"Bazar ertəsi",
		"Çərşənbə axşamı",
		"Çərşənbə",
		"Cümə axşamı",
		"Cümə",
		"Şənbə"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "am",
		pm: "pm",
		midnight: "gecəyarı",
		noon: "gün",
		morning: "səhər",
		afternoon: "gündüz",
		evening: "axşam",
		night: "gecə"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "gecəyarı",
		noon: "gün",
		morning: "səhər",
		afternoon: "gündüz",
		evening: "axşam",
		night: "gecə"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "gecəyarı",
		noon: "gün",
		morning: "səhər",
		afternoon: "gündüz",
		evening: "axşam",
		night: "gecə"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "gecəyarı",
		noon: "gün",
		morning: "səhər",
		afternoon: "gündüz",
		evening: "axşam",
		night: "gecə"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "gecəyarı",
		noon: "gün",
		morning: "səhər",
		afternoon: "gündüz",
		evening: "axşam",
		night: "gecə"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "gecəyarı",
		noon: "gün",
		morning: "səhər",
		afternoon: "gündüz",
		evening: "axşam",
		night: "gecə"
	}
};
var suffixes = {
	1: "-inci",
	5: "-inci",
	8: "-inci",
	70: "-inci",
	80: "-inci",
	2: "-nci",
	7: "-nci",
	20: "-nci",
	50: "-nci",
	3: "-üncü",
	4: "-üncü",
	100: "-üncü",
	6: "-ncı",
	9: "-uncu",
	10: "-uncu",
	30: "-uncu",
	60: "-ıncı",
	90: "-ıncı"
};
var getSuffix = (number) => {
	if (number === 0) return number + "-ıncı";
	const a = number % 10;
	const b = number % 100 - a;
	const c = number >= 100 ? 100 : null;
	if (suffixes[a]) return suffixes[a];
	else if (suffixes[b]) return suffixes[b];
	else if (c !== null) return suffixes[c];
	return "";
};
var ordinalNumber = (dirtyNumber, _options) => {
	const number = Number(dirtyNumber);
	return number + getSuffix(number);
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/az.js
/**
* @category Locales
* @summary Azerbaijani locale.
* @language Azerbaijani
* @iso-639-2 aze
*/
var az = {
	code: "az",
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
			matchPattern: /^(\d+)(-?(ci|inci|nci|uncu|üncü|ncı))?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(b|a)$/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i,
				wide: /^(bizim eradan əvvəl|bizim era)$/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b$/i, /^(a|c)$/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]$/i,
				abbreviated: /^K[1234]$/i,
				wide: /^[1234](ci)? kvartal$/i
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
				narrow: /^[(?-i)yfmaisond]$/i,
				abbreviated: /^(Yan|Fev|Mar|Apr|May|İyun|İyul|Avq|Sen|Okt|Noy|Dek)$/i,
				wide: /^(Yanvar|Fevral|Mart|Aprel|May|İyun|İyul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^[(?-i)y]$/i,
					/^[(?-i)f]$/i,
					/^[(?-i)m]$/i,
					/^[(?-i)a]$/i,
					/^[(?-i)m]$/i,
					/^[(?-i)i]$/i,
					/^[(?-i)i]$/i,
					/^[(?-i)a]$/i,
					/^[(?-i)s]$/i,
					/^[(?-i)o]$/i,
					/^[(?-i)n]$/i,
					/^[(?-i)d]$/i
				],
				abbreviated: [
					/^Yan$/i,
					/^Fev$/i,
					/^Mar$/i,
					/^Apr$/i,
					/^May$/i,
					/^İyun$/i,
					/^İyul$/i,
					/^Avg$/i,
					/^Sen$/i,
					/^Okt$/i,
					/^Noy$/i,
					/^Dek$/i
				],
				wide: [
					/^Yanvar$/i,
					/^Fevral$/i,
					/^Mart$/i,
					/^Aprel$/i,
					/^May$/i,
					/^İyun$/i,
					/^İyul$/i,
					/^Avgust$/i,
					/^Sentyabr$/i,
					/^Oktyabr$/i,
					/^Noyabr$/i,
					/^Dekabr$/i
				]
			},
			defaultParseWidth: "narrow"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,
				short: /^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,
				abbreviated: /^(Baz\.e|Çər|Çər\.a|Cüm|Cüm\.a|Şə)$/i,
				wide: /^(Bazar|Bazar ertəsi|Çərşənbə axşamı|Çərşənbə|Cümə axşamı|Cümə|Şənbə)$/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^B\.$/i,
					/^B\.e$/i,
					/^Ç\.a$/i,
					/^Ç\.$/i,
					/^C\.a$/i,
					/^C\.$/i,
					/^Ş\.$/i
				],
				abbreviated: [
					/^Baz$/i,
					/^Baz\.e$/i,
					/^Çər\.a$/i,
					/^Çər$/i,
					/^Cüm\.a$/i,
					/^Cüm$/i,
					/^Şə$/i
				],
				wide: [
					/^Bazar$/i,
					/^Bazar ertəsi$/i,
					/^Çərşənbə axşamı$/i,
					/^Çərşənbə$/i,
					/^Cümə axşamı$/i,
					/^Cümə$/i,
					/^Şənbə$/i
				],
				any: [
					/^B\.$/i,
					/^B\.e$/i,
					/^Ç\.a$/i,
					/^Ç\.$/i,
					/^C\.a$/i,
					/^C\.$/i,
					/^Ş\.$/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(a|p|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i,
				any: /^(am|pm|a\.m\.|p\.m\.|AM|PM|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a$/i,
				pm: /^p$/i,
				midnight: /^gecəyarı$/i,
				noon: /^gün$/i,
				morning: /səhər$/i,
				afternoon: /gündüz$/i,
				evening: /axşam$/i,
				night: /gecə$/i
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
export { az, az as default };
