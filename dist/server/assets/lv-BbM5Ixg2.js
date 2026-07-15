import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
import { t as isSameWeek } from "./isSameWeek-CGJFiiyr.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/lv/_lib/formatDistance.js
function buildLocalizeTokenFn(schema) {
	return (count, options) => {
		if (count === 1) if (options?.addSuffix) return schema.one[0].replace("{{time}}", schema.one[2]);
		else return schema.one[0].replace("{{time}}", schema.one[1]);
		else {
			const rem = count % 10 === 1 && count % 100 !== 11;
			if (options?.addSuffix) return schema.other[0].replace("{{time}}", rem ? schema.other[3] : schema.other[4]).replace("{{count}}", String(count));
			else return schema.other[0].replace("{{time}}", rem ? schema.other[1] : schema.other[2]).replace("{{count}}", String(count));
		}
	};
}
var formatDistanceLocale = {
	lessThanXSeconds: buildLocalizeTokenFn({
		one: [
			"mazāk par {{time}}",
			"sekundi",
			"sekundi"
		],
		other: [
			"mazāk nekā {{count}} {{time}}",
			"sekunde",
			"sekundes",
			"sekundes",
			"sekundēm"
		]
	}),
	xSeconds: buildLocalizeTokenFn({
		one: [
			"1 {{time}}",
			"sekunde",
			"sekundes"
		],
		other: [
			"{{count}} {{time}}",
			"sekunde",
			"sekundes",
			"sekundes",
			"sekundēm"
		]
	}),
	halfAMinute: (_count, options) => {
		if (options?.addSuffix) return "pusminūtes";
		else return "pusminūte";
	},
	lessThanXMinutes: buildLocalizeTokenFn({
		one: [
			"mazāk par {{time}}",
			"minūti",
			"minūti"
		],
		other: [
			"mazāk nekā {{count}} {{time}}",
			"minūte",
			"minūtes",
			"minūtes",
			"minūtēm"
		]
	}),
	xMinutes: buildLocalizeTokenFn({
		one: [
			"1 {{time}}",
			"minūte",
			"minūtes"
		],
		other: [
			"{{count}} {{time}}",
			"minūte",
			"minūtes",
			"minūtes",
			"minūtēm"
		]
	}),
	aboutXHours: buildLocalizeTokenFn({
		one: [
			"apmēram 1 {{time}}",
			"stunda",
			"stundas"
		],
		other: [
			"apmēram {{count}} {{time}}",
			"stunda",
			"stundas",
			"stundas",
			"stundām"
		]
	}),
	xHours: buildLocalizeTokenFn({
		one: [
			"1 {{time}}",
			"stunda",
			"stundas"
		],
		other: [
			"{{count}} {{time}}",
			"stunda",
			"stundas",
			"stundas",
			"stundām"
		]
	}),
	xDays: buildLocalizeTokenFn({
		one: [
			"1 {{time}}",
			"diena",
			"dienas"
		],
		other: [
			"{{count}} {{time}}",
			"diena",
			"dienas",
			"dienas",
			"dienām"
		]
	}),
	aboutXWeeks: buildLocalizeTokenFn({
		one: [
			"apmēram 1 {{time}}",
			"nedēļa",
			"nedēļas"
		],
		other: [
			"apmēram {{count}} {{time}}",
			"nedēļa",
			"nedēļu",
			"nedēļas",
			"nedēļām"
		]
	}),
	xWeeks: buildLocalizeTokenFn({
		one: [
			"1 {{time}}",
			"nedēļa",
			"nedēļas"
		],
		other: [
			"{{count}} {{time}}",
			"nedēļa",
			"nedēļu",
			"nedēļas",
			"nedēļām"
		]
	}),
	aboutXMonths: buildLocalizeTokenFn({
		one: [
			"apmēram 1 {{time}}",
			"mēnesis",
			"mēneša"
		],
		other: [
			"apmēram {{count}} {{time}}",
			"mēnesis",
			"mēneši",
			"mēneša",
			"mēnešiem"
		]
	}),
	xMonths: buildLocalizeTokenFn({
		one: [
			"1 {{time}}",
			"mēnesis",
			"mēneša"
		],
		other: [
			"{{count}} {{time}}",
			"mēnesis",
			"mēneši",
			"mēneša",
			"mēnešiem"
		]
	}),
	aboutXYears: buildLocalizeTokenFn({
		one: [
			"apmēram 1 {{time}}",
			"gads",
			"gada"
		],
		other: [
			"apmēram {{count}} {{time}}",
			"gads",
			"gadi",
			"gada",
			"gadiem"
		]
	}),
	xYears: buildLocalizeTokenFn({
		one: [
			"1 {{time}}",
			"gads",
			"gada"
		],
		other: [
			"{{count}} {{time}}",
			"gads",
			"gadi",
			"gada",
			"gadiem"
		]
	}),
	overXYears: buildLocalizeTokenFn({
		one: [
			"ilgāk par 1 {{time}}",
			"gadu",
			"gadu"
		],
		other: [
			"vairāk nekā {{count}} {{time}}",
			"gads",
			"gadi",
			"gada",
			"gadiem"
		]
	}),
	almostXYears: buildLocalizeTokenFn({
		one: [
			"gandrīz 1 {{time}}",
			"gads",
			"gada"
		],
		other: [
			"vairāk nekā {{count}} {{time}}",
			"gads",
			"gadi",
			"gada",
			"gadiem"
		]
	})
};
var formatDistance = (token, count, options) => {
	const result = formatDistanceLocale[token](count, options);
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return "pēc " + result;
	else return "pirms " + result;
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, y. 'gada' d. MMMM",
			long: "y. 'gada' d. MMMM",
			medium: "dd.MM.y.",
			short: "dd.MM.y."
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
			full: "{{date}} 'plkst.' {{time}}",
			long: "{{date}} 'plkst.' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/lv/_lib/formatRelative.js
var weekdays = [
	"svētdienā",
	"pirmdienā",
	"otrdienā",
	"trešdienā",
	"ceturtdienā",
	"piektdienā",
	"sestdienā"
];
var formatRelativeLocale = {
	lastWeek: (date, baseDate, options) => {
		if (isSameWeek(date, baseDate, options)) return "eeee 'plkst.' p";
		return "'Pagājušā " + weekdays[date.getDay()] + " plkst.' p";
	},
	yesterday: "'Vakar plkst.' p",
	today: "'Šodien plkst.' p",
	tomorrow: "'Rīt plkst.' p",
	nextWeek: (date, baseDate, options) => {
		if (isSameWeek(date, baseDate, options)) return "eeee 'plkst.' p";
		return "'Nākamajā " + weekdays[date.getDay()] + " plkst.' p";
	},
	other: "P"
};
var formatRelative = (token, date, baseDate, options) => {
	const format = formatRelativeLocale[token];
	if (typeof format === "function") return format(date, baseDate, options);
	return format;
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/lv/_lib/localize.js
var eraValues = {
	narrow: ["p.m.ē", "m.ē"],
	abbreviated: ["p. m. ē.", "m. ē."],
	wide: ["pirms mūsu ēras", "mūsu ērā"]
};
var quarterValues = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"1. cet.",
		"2. cet.",
		"3. cet.",
		"4. cet."
	],
	wide: [
		"pirmais ceturksnis",
		"otrais ceturksnis",
		"trešais ceturksnis",
		"ceturtais ceturksnis"
	]
};
var formattingQuarterValues = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"1. cet.",
		"2. cet.",
		"3. cet.",
		"4. cet."
	],
	wide: [
		"pirmajā ceturksnī",
		"otrajā ceturksnī",
		"trešajā ceturksnī",
		"ceturtajā ceturksnī"
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
		"febr.",
		"marts",
		"apr.",
		"maijs",
		"jūn.",
		"jūl.",
		"aug.",
		"sept.",
		"okt.",
		"nov.",
		"dec."
	],
	wide: [
		"janvāris",
		"februāris",
		"marts",
		"aprīlis",
		"maijs",
		"jūnijs",
		"jūlijs",
		"augusts",
		"septembris",
		"oktobris",
		"novembris",
		"decembris"
	]
};
var formattingMonthValues = {
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
		"febr.",
		"martā",
		"apr.",
		"maijs",
		"jūn.",
		"jūl.",
		"aug.",
		"sept.",
		"okt.",
		"nov.",
		"dec."
	],
	wide: [
		"janvārī",
		"februārī",
		"martā",
		"aprīlī",
		"maijā",
		"jūnijā",
		"jūlijā",
		"augustā",
		"septembrī",
		"oktobrī",
		"novembrī",
		"decembrī"
	]
};
var dayValues = {
	narrow: [
		"S",
		"P",
		"O",
		"T",
		"C",
		"P",
		"S"
	],
	short: [
		"Sv",
		"P",
		"O",
		"T",
		"C",
		"Pk",
		"S"
	],
	abbreviated: [
		"svētd.",
		"pirmd.",
		"otrd.",
		"trešd.",
		"ceturtd.",
		"piektd.",
		"sestd."
	],
	wide: [
		"svētdiena",
		"pirmdiena",
		"otrdiena",
		"trešdiena",
		"ceturtdiena",
		"piektdiena",
		"sestdiena"
	]
};
var formattingDayValues = {
	narrow: [
		"S",
		"P",
		"O",
		"T",
		"C",
		"P",
		"S"
	],
	short: [
		"Sv",
		"P",
		"O",
		"T",
		"C",
		"Pk",
		"S"
	],
	abbreviated: [
		"svētd.",
		"pirmd.",
		"otrd.",
		"trešd.",
		"ceturtd.",
		"piektd.",
		"sestd."
	],
	wide: [
		"svētdienā",
		"pirmdienā",
		"otrdienā",
		"trešdienā",
		"ceturtdienā",
		"piektdienā",
		"sestdienā"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "am",
		pm: "pm",
		midnight: "pusn.",
		noon: "pusd.",
		morning: "rīts",
		afternoon: "diena",
		evening: "vakars",
		night: "nakts"
	},
	abbreviated: {
		am: "am",
		pm: "pm",
		midnight: "pusn.",
		noon: "pusd.",
		morning: "rīts",
		afternoon: "pēcpusd.",
		evening: "vakars",
		night: "nakts"
	},
	wide: {
		am: "am",
		pm: "pm",
		midnight: "pusnakts",
		noon: "pusdienlaiks",
		morning: "rīts",
		afternoon: "pēcpusdiena",
		evening: "vakars",
		night: "nakts"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "am",
		pm: "pm",
		midnight: "pusn.",
		noon: "pusd.",
		morning: "rītā",
		afternoon: "dienā",
		evening: "vakarā",
		night: "naktī"
	},
	abbreviated: {
		am: "am",
		pm: "pm",
		midnight: "pusn.",
		noon: "pusd.",
		morning: "rītā",
		afternoon: "pēcpusd.",
		evening: "vakarā",
		night: "naktī"
	},
	wide: {
		am: "am",
		pm: "pm",
		midnight: "pusnaktī",
		noon: "pusdienlaikā",
		morning: "rītā",
		afternoon: "pēcpusdienā",
		evening: "vakarā",
		night: "naktī"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	return Number(dirtyNumber) + ".";
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/lv.js
/**
* @category Locales
* @summary Latvian locale (Latvia).
* @language Latvian
* @iso-639-2 lav
* @author Rūdolfs Puķītis [@prudolfs](https://github.com/prudolfs)
*/
var lv = {
	code: "lv",
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
			formattingValues: formattingQuarterValues,
			defaultFormattingWidth: "wide",
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
			defaultWidth: "wide",
			formattingValues: formattingDayValues,
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
			matchPattern: /^(\d+)\./i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(p\.m\.ē|m\.ē)/i,
				abbreviated: /^(p\. m\. ē\.|m\. ē\.)/i,
				wide: /^(pirms mūsu ēras|mūsu ērā)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^p/i, /^m/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^[1234](\. cet\.)/i,
				wide: /^(pirma(is|jā)|otra(is|jā)|treša(is|jā)|ceturta(is|jā)) ceturksn(is|ī)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^1/i,
					/^2/i,
					/^3/i,
					/^4/i
				],
				abbreviated: [
					/^1/i,
					/^2/i,
					/^3/i,
					/^4/i
				],
				wide: [
					/^p/i,
					/^o/i,
					/^t/i,
					/^c/i
				]
			},
			defaultParseWidth: "wide",
			valueCallback: (index) => index + 1
		}),
		month: buildMatchFn({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(janv\.|febr\.|marts|apr\.|maijs|jūn\.|jūl\.|aug\.|sept\.|okt\.|nov\.|dec\.)/i,
				wide: /^(janvār(is|ī)|februār(is|ī)|mart[sā]|aprīl(is|ī)|maij[sā]|jūnij[sā]|jūlij[sā]|august[sā]|septembr(is|ī)|oktobr(is|ī)|novembr(is|ī)|decembr(is|ī))/i
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
					/^ap/i,
					/^mai/i,
					/^jūn/i,
					/^jūl/i,
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
				narrow: /^[spotc]/i,
				short: /^(sv|pi|o|t|c|pk|s)/i,
				abbreviated: /^(svētd\.|pirmd\.|otrd.\|trešd\.|ceturtd\.|piektd\.|sestd\.)/i,
				wide: /^(svētdien(a|ā)|pirmdien(a|ā)|otrdien(a|ā)|trešdien(a|ā)|ceturtdien(a|ā)|piektdien(a|ā)|sestdien(a|ā))/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^s/i,
					/^p/i,
					/^o/i,
					/^t/i,
					/^c/i,
					/^p/i,
					/^s/i
				],
				any: [
					/^sv/i,
					/^pi/i,
					/^o/i,
					/^t/i,
					/^c/i,
					/^p/i,
					/^se/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(am|pm|pusn\.|pusd\.|rīt(s|ā)|dien(a|ā)|vakar(s|ā)|nakt(s|ī))/,
				abbreviated: /^(am|pm|pusn\.|pusd\.|rīt(s|ā)|pēcpusd\.|vakar(s|ā)|nakt(s|ī))/,
				wide: /^(am|pm|pusnakt(s|ī)|pusdienlaik(s|ā)|rīt(s|ā)|pēcpusdien(a|ā)|vakar(s|ā)|nakt(s|ī))/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: {
				am: /^am/i,
				pm: /^pm/i,
				midnight: /^pusn/i,
				noon: /^pusd/i,
				morning: /^r/i,
				afternoon: /^(d|pēc)/i,
				evening: /^v/i,
				night: /^n/i
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
export { lv as default, lv };
