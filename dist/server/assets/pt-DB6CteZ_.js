import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/pt/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "menos de um segundo",
		other: "menos de {{count}} segundos"
	},
	xSeconds: {
		one: "1 segundo",
		other: "{{count}} segundos"
	},
	halfAMinute: "meio minuto",
	lessThanXMinutes: {
		one: "menos de um minuto",
		other: "menos de {{count}} minutos"
	},
	xMinutes: {
		one: "1 minuto",
		other: "{{count}} minutos"
	},
	aboutXHours: {
		one: "aproximadamente 1 hora",
		other: "aproximadamente {{count}} horas"
	},
	xHours: {
		one: "1 hora",
		other: "{{count}} horas"
	},
	xDays: {
		one: "1 dia",
		other: "{{count}} dias"
	},
	aboutXWeeks: {
		one: "aproximadamente 1 semana",
		other: "aproximadamente {{count}} semanas"
	},
	xWeeks: {
		one: "1 semana",
		other: "{{count}} semanas"
	},
	aboutXMonths: {
		one: "aproximadamente 1 mês",
		other: "aproximadamente {{count}} meses"
	},
	xMonths: {
		one: "1 mês",
		other: "{{count}} meses"
	},
	aboutXYears: {
		one: "aproximadamente 1 ano",
		other: "aproximadamente {{count}} anos"
	},
	xYears: {
		one: "1 ano",
		other: "{{count}} anos"
	},
	overXYears: {
		one: "mais de 1 ano",
		other: "mais de {{count}} anos"
	},
	almostXYears: {
		one: "quase 1 ano",
		other: "quase {{count}} anos"
	}
};
var formatDistance = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", String(count));
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return "daqui a " + result;
	else return "há " + result;
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, d 'de' MMMM 'de' y",
			long: "d 'de' MMMM 'de' y",
			medium: "d 'de' MMM 'de' y",
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
			full: "{{date}} 'às' {{time}}",
			long: "{{date}} 'às' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/pt/_lib/formatRelative.js
var formatRelativeLocale = {
	lastWeek: (date) => {
		const weekday = date.getDay();
		return "'" + (weekday === 0 || weekday === 6 ? "último" : "última") + "' eeee 'às' p";
	},
	yesterday: "'ontem às' p",
	today: "'hoje às' p",
	tomorrow: "'amanhã às' p",
	nextWeek: "eeee 'às' p",
	other: "P"
};
var formatRelative = (token, date, _baseDate, _options) => {
	const format = formatRelativeLocale[token];
	if (typeof format === "function") return format(date);
	return format;
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/pt/_lib/localize.js
var eraValues = {
	narrow: ["aC", "dC"],
	abbreviated: ["a.C.", "d.C."],
	wide: ["antes de Cristo", "depois de Cristo"]
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
		"1º trimestre",
		"2º trimestre",
		"3º trimestre",
		"4º trimestre"
	]
};
var monthValues = {
	narrow: [
		"j",
		"f",
		"m",
		"a",
		"m",
		"j",
		"j",
		"a",
		"s",
		"o",
		"n",
		"d"
	],
	abbreviated: [
		"jan",
		"fev",
		"mar",
		"abr",
		"mai",
		"jun",
		"jul",
		"ago",
		"set",
		"out",
		"nov",
		"dez"
	],
	wide: [
		"janeiro",
		"fevereiro",
		"março",
		"abril",
		"maio",
		"junho",
		"julho",
		"agosto",
		"setembro",
		"outubro",
		"novembro",
		"dezembro"
	]
};
var dayValues = {
	narrow: [
		"d",
		"s",
		"t",
		"q",
		"q",
		"s",
		"s"
	],
	short: [
		"dom",
		"seg",
		"ter",
		"qua",
		"qui",
		"sex",
		"sáb"
	],
	abbreviated: [
		"dom",
		"seg",
		"ter",
		"qua",
		"qui",
		"sex",
		"sáb"
	],
	wide: [
		"domingo",
		"segunda-feira",
		"terça-feira",
		"quarta-feira",
		"quinta-feira",
		"sexta-feira",
		"sábado"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "AM",
		pm: "PM",
		midnight: "meia-noite",
		noon: "meio-dia",
		morning: "manhã",
		afternoon: "tarde",
		evening: "noite",
		night: "madrugada"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "meia-noite",
		noon: "meio-dia",
		morning: "manhã",
		afternoon: "tarde",
		evening: "noite",
		night: "madrugada"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "meia-noite",
		noon: "meio-dia",
		morning: "manhã",
		afternoon: "tarde",
		evening: "noite",
		night: "madrugada"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "AM",
		pm: "PM",
		midnight: "meia-noite",
		noon: "meio-dia",
		morning: "da manhã",
		afternoon: "da tarde",
		evening: "da noite",
		night: "da madrugada"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "meia-noite",
		noon: "meio-dia",
		morning: "da manhã",
		afternoon: "da tarde",
		evening: "da noite",
		night: "da madrugada"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "meia-noite",
		noon: "meio-dia",
		morning: "da manhã",
		afternoon: "da tarde",
		evening: "da noite",
		night: "da madrugada"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	return Number(dirtyNumber) + "º";
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/pt.js
/**
* @category Locales
* @summary Portuguese locale.
* @language Portuguese
* @iso-639-2 por
* @author Dário Freire [@dfreire](https://github.com/dfreire)
* @author Adrián de la Rosa [@adrm](https://github.com/adrm)
*/
var pt = {
	code: "pt",
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
			matchPattern: /^(\d+)(º|ª)?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(ac|dc|a|d)/i,
				abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
				wide: /^(antes de cristo|antes da era comum|depois de cristo|era comum)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				any: [/^ac/i, /^dc/i],
				wide: [/^(antes de cristo|antes da era comum)/i, /^(depois de cristo|era comum)/i]
			},
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^T[1234]/i,
				wide: /^[1234](º|ª)? trimestre/i
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
				abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
				wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
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
					/^ab/i,
					/^mai/i,
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
				narrow: /^[dstq]/i,
				short: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
				abbreviated: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
				wide: /^(domingo|segunda-?\s?feira|terça-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[áa]bado)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^d/i,
					/^s/i,
					/^t/i,
					/^q/i,
					/^q/i,
					/^s/i,
					/^s/i
				],
				any: [
					/^d/i,
					/^seg/i,
					/^t/i,
					/^qua/i,
					/^qui/i,
					/^sex/i,
					/^s[áa]/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i,
				any: /^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^meia/i,
				noon: /^meio/i,
				morning: /manh[ãa]/i,
				afternoon: /tarde/i,
				evening: /noite/i,
				night: /madrugada/i
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
export { pt as default, pt };
