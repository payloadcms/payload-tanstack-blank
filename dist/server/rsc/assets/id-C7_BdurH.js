import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/id/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "kurang dari 1 detik",
		other: "kurang dari {{count}} detik"
	},
	xSeconds: {
		one: "1 detik",
		other: "{{count}} detik"
	},
	halfAMinute: "setengah menit",
	lessThanXMinutes: {
		one: "kurang dari 1 menit",
		other: "kurang dari {{count}} menit"
	},
	xMinutes: {
		one: "1 menit",
		other: "{{count}} menit"
	},
	aboutXHours: {
		one: "sekitar 1 jam",
		other: "sekitar {{count}} jam"
	},
	xHours: {
		one: "1 jam",
		other: "{{count}} jam"
	},
	xDays: {
		one: "1 hari",
		other: "{{count}} hari"
	},
	aboutXWeeks: {
		one: "sekitar 1 minggu",
		other: "sekitar {{count}} minggu"
	},
	xWeeks: {
		one: "1 minggu",
		other: "{{count}} minggu"
	},
	aboutXMonths: {
		one: "sekitar 1 bulan",
		other: "sekitar {{count}} bulan"
	},
	xMonths: {
		one: "1 bulan",
		other: "{{count}} bulan"
	},
	aboutXYears: {
		one: "sekitar 1 tahun",
		other: "sekitar {{count}} tahun"
	},
	xYears: {
		one: "1 tahun",
		other: "{{count}} tahun"
	},
	overXYears: {
		one: "lebih dari 1 tahun",
		other: "lebih dari {{count}} tahun"
	},
	almostXYears: {
		one: "hampir 1 tahun",
		other: "hampir {{count}} tahun"
	}
};
var formatDistance = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", count.toString());
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return "dalam waktu " + result;
	else return result + " yang lalu";
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, d MMMM yyyy",
			long: "d MMMM yyyy",
			medium: "d MMM yyyy",
			short: "d/M/yyyy"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "HH.mm.ss",
			long: "HH.mm.ss",
			medium: "HH.mm",
			short: "HH.mm"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} 'pukul' {{time}}",
			long: "{{date}} 'pukul' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/id/_lib/formatRelative.js
var formatRelativeLocale = {
	lastWeek: "eeee 'lalu pukul' p",
	yesterday: "'Kemarin pukul' p",
	today: "'Hari ini pukul' p",
	tomorrow: "'Besok pukul' p",
	nextWeek: "eeee 'pukul' p",
	other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/id/_lib/localize.js
var eraValues = {
	narrow: ["SM", "M"],
	abbreviated: ["SM", "M"],
	wide: ["Sebelum Masehi", "Masehi"]
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
		"Kuartal ke-1",
		"Kuartal ke-2",
		"Kuartal ke-3",
		"Kuartal ke-4"
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
		"Mar",
		"Apr",
		"Mei",
		"Jun",
		"Jul",
		"Agt",
		"Sep",
		"Okt",
		"Nov",
		"Des"
	],
	wide: [
		"Januari",
		"Februari",
		"Maret",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Agustus",
		"September",
		"Oktober",
		"November",
		"Desember"
	]
};
var dayValues = {
	narrow: [
		"M",
		"S",
		"S",
		"R",
		"K",
		"J",
		"S"
	],
	short: [
		"Min",
		"Sen",
		"Sel",
		"Rab",
		"Kam",
		"Jum",
		"Sab"
	],
	abbreviated: [
		"Min",
		"Sen",
		"Sel",
		"Rab",
		"Kam",
		"Jum",
		"Sab"
	],
	wide: [
		"Minggu",
		"Senin",
		"Selasa",
		"Rabu",
		"Kamis",
		"Jumat",
		"Sabtu"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "AM",
		pm: "PM",
		midnight: "tengah malam",
		noon: "tengah hari",
		morning: "pagi",
		afternoon: "siang",
		evening: "sore",
		night: "malam"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "tengah malam",
		noon: "tengah hari",
		morning: "pagi",
		afternoon: "siang",
		evening: "sore",
		night: "malam"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "tengah malam",
		noon: "tengah hari",
		morning: "pagi",
		afternoon: "siang",
		evening: "sore",
		night: "malam"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "AM",
		pm: "PM",
		midnight: "tengah malam",
		noon: "tengah hari",
		morning: "pagi",
		afternoon: "siang",
		evening: "sore",
		night: "malam"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "tengah malam",
		noon: "tengah hari",
		morning: "pagi",
		afternoon: "siang",
		evening: "sore",
		night: "malam"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "tengah malam",
		noon: "tengah hari",
		morning: "pagi",
		afternoon: "siang",
		evening: "sore",
		night: "malam"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	return "ke-" + Number(dirtyNumber);
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/id.js
/**
* @category Locales
* @summary Indonesian locale.
* @language Indonesian
* @iso-639-2 ind
* @author Rahmat Budiharso [@rbudiharso](https://github.com/rbudiharso)
* @author Benget Nata [@bentinata](https://github.com/bentinata)
* @author Budi Irawan [@deerawan](https://github.com/deerawan)
* @author Try Ajitiono [@imballinst](https://github.com/imballinst)
*/
var id = {
	code: "id",
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
			matchPattern: /^ke-(\d+)?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(sm|m)/i,
				abbreviated: /^(s\.?\s?m\.?|s\.?\s?e\.?\s?u\.?|m\.?|e\.?\s?u\.?)/i,
				wide: /^(sebelum masehi|sebelum era umum|masehi|era umum)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^s/i, /^(m|e)/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^K-?\s[1234]/i,
				wide: /^Kuartal ke-?\s?[1234]/i
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
				abbreviated: /^(jan|feb|mar|apr|mei|jun|jul|agt|sep|okt|nov|des)/i,
				wide: /^(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)/i
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
					/^ma/i,
					/^ap/i,
					/^me/i,
					/^jun/i,
					/^jul/i,
					/^ag/i,
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
				narrow: /^[srkjm]/i,
				short: /^(min|sen|sel|rab|kam|jum|sab)/i,
				abbreviated: /^(min|sen|sel|rab|kam|jum|sab)/i,
				wide: /^(minggu|senin|selasa|rabu|kamis|jumat|sabtu)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^m/i,
					/^s/i,
					/^s/i,
					/^r/i,
					/^k/i,
					/^j/i,
					/^s/i
				],
				any: [
					/^m/i,
					/^sen/i,
					/^sel/i,
					/^r/i,
					/^k/i,
					/^j/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(a|p|tengah m|tengah h|(di(\swaktu)?) (pagi|siang|sore|malam))/i,
				any: /^([ap]\.?\s?m\.?|tengah malam|tengah hari|(di(\swaktu)?) (pagi|siang|sore|malam))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^pm/i,
				midnight: /^tengah m/i,
				noon: /^tengah h/i,
				morning: /pagi/i,
				afternoon: /siang/i,
				evening: /sore/i,
				night: /malam/i
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
export { id as default, id };
