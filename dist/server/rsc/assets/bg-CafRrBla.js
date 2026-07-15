import { i as toDate } from "./normalizeDates-KFFM8Zq9.js";
import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
import { t as isSameWeek } from "./isSameWeek-DVwjzGUH.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/bg/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "по-малко от секунда",
		other: "по-малко от {{count}} секунди"
	},
	xSeconds: {
		one: "1 секунда",
		other: "{{count}} секунди"
	},
	halfAMinute: "половин минута",
	lessThanXMinutes: {
		one: "по-малко от минута",
		other: "по-малко от {{count}} минути"
	},
	xMinutes: {
		one: "1 минута",
		other: "{{count}} минути"
	},
	aboutXHours: {
		one: "около час",
		other: "около {{count}} часа"
	},
	xHours: {
		one: "1 час",
		other: "{{count}} часа"
	},
	xDays: {
		one: "1 ден",
		other: "{{count}} дни"
	},
	aboutXWeeks: {
		one: "около седмица",
		other: "около {{count}} седмици"
	},
	xWeeks: {
		one: "1 седмица",
		other: "{{count}} седмици"
	},
	aboutXMonths: {
		one: "около месец",
		other: "около {{count}} месеца"
	},
	xMonths: {
		one: "1 месец",
		other: "{{count}} месеца"
	},
	aboutXYears: {
		one: "около година",
		other: "около {{count}} години"
	},
	xYears: {
		one: "1 година",
		other: "{{count}} години"
	},
	overXYears: {
		one: "над година",
		other: "над {{count}} години"
	},
	almostXYears: {
		one: "почти година",
		other: "почти {{count}} години"
	}
};
var formatDistance = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", String(count));
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return "след " + result;
	else return "преди " + result;
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, dd MMMM yyyy",
			long: "dd MMMM yyyy",
			medium: "dd MMM yyyy",
			short: "dd.MM.yyyy"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "H:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: { any: "{{date}} {{time}}" },
		defaultWidth: "any"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/bg/_lib/formatRelative.js
var weekdays = [
	"неделя",
	"понеделник",
	"вторник",
	"сряда",
	"четвъртък",
	"петък",
	"събота"
];
function lastWeek(day) {
	const weekday = weekdays[day];
	switch (day) {
		case 0:
		case 3:
		case 6: return "'миналата " + weekday + " в' p";
		case 1:
		case 2:
		case 4:
		case 5: return "'миналия " + weekday + " в' p";
	}
}
function thisWeek(day) {
	const weekday = weekdays[day];
	if (day === 2) return "'във " + weekday + " в' p";
	else return "'в " + weekday + " в' p";
}
function nextWeek(day) {
	const weekday = weekdays[day];
	switch (day) {
		case 0:
		case 3:
		case 6: return "'следващата " + weekday + " в' p";
		case 1:
		case 2:
		case 4:
		case 5: return "'следващия " + weekday + " в' p";
	}
}
var lastWeekFormatToken = (dirtyDate, baseDate, options) => {
	const date = toDate(dirtyDate);
	const day = date.getDay();
	if (isSameWeek(date, baseDate, options)) return thisWeek(day);
	else return lastWeek(day);
};
var nextWeekFormatToken = (dirtyDate, baseDate, options) => {
	const date = toDate(dirtyDate);
	const day = date.getDay();
	if (isSameWeek(date, baseDate, options)) return thisWeek(day);
	else return nextWeek(day);
};
var formatRelativeLocale = {
	lastWeek: lastWeekFormatToken,
	yesterday: "'вчера в' p",
	today: "'днес в' p",
	tomorrow: "'утре в' p",
	nextWeek: nextWeekFormatToken,
	other: "P"
};
var formatRelative = (token, date, baseDate, options) => {
	const format = formatRelativeLocale[token];
	if (typeof format === "function") return format(date, baseDate, options);
	return format;
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/bg/_lib/localize.js
var eraValues = {
	narrow: ["пр.н.е.", "н.е."],
	abbreviated: ["преди н. е.", "н. е."],
	wide: ["преди новата ера", "новата ера"]
};
var quarterValues = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"1-во тримес.",
		"2-ро тримес.",
		"3-то тримес.",
		"4-то тримес."
	],
	wide: [
		"1-во тримесечие",
		"2-ро тримесечие",
		"3-то тримесечие",
		"4-то тримесечие"
	]
};
var monthValues = {
	abbreviated: [
		"яну",
		"фев",
		"мар",
		"апр",
		"май",
		"юни",
		"юли",
		"авг",
		"сеп",
		"окт",
		"ное",
		"дек"
	],
	wide: [
		"януари",
		"февруари",
		"март",
		"април",
		"май",
		"юни",
		"юли",
		"август",
		"септември",
		"октомври",
		"ноември",
		"декември"
	]
};
var dayValues = {
	narrow: [
		"Н",
		"П",
		"В",
		"С",
		"Ч",
		"П",
		"С"
	],
	short: [
		"нд",
		"пн",
		"вт",
		"ср",
		"чт",
		"пт",
		"сб"
	],
	abbreviated: [
		"нед",
		"пон",
		"вто",
		"сря",
		"чет",
		"пет",
		"съб"
	],
	wide: [
		"неделя",
		"понеделник",
		"вторник",
		"сряда",
		"четвъртък",
		"петък",
		"събота"
	]
};
var dayPeriodValues = { wide: {
	am: "преди обяд",
	pm: "след обяд",
	midnight: "в полунощ",
	noon: "на обяд",
	morning: "сутринта",
	afternoon: "следобед",
	evening: "вечерта",
	night: "през нощта"
} };
function isFeminine(unit) {
	return unit === "year" || unit === "week" || unit === "minute" || unit === "second";
}
function isNeuter(unit) {
	return unit === "quarter";
}
function numberWithSuffix(number, unit, masculine, feminine, neuter) {
	const suffix = isNeuter(unit) ? neuter : isFeminine(unit) ? feminine : masculine;
	return number + "-" + suffix;
}
var ordinalNumber = (dirtyNumber, options) => {
	const number = Number(dirtyNumber);
	const unit = options?.unit;
	if (number === 0) return numberWithSuffix(0, unit, "ев", "ева", "ево");
	else if (number % 1e3 === 0) return numberWithSuffix(number, unit, "ен", "на", "но");
	else if (number % 100 === 0) return numberWithSuffix(number, unit, "тен", "тна", "тно");
	const rem100 = number % 100;
	if (rem100 > 20 || rem100 < 10) switch (rem100 % 10) {
		case 1: return numberWithSuffix(number, unit, "ви", "ва", "во");
		case 2: return numberWithSuffix(number, unit, "ри", "ра", "ро");
		case 7:
		case 8: return numberWithSuffix(number, unit, "ми", "ма", "мо");
	}
	return numberWithSuffix(number, unit, "ти", "та", "то");
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/bg.js
/**
* @category Locales
* @summary Bulgarian locale.
* @language Bulgarian
* @iso-639-2 bul
* @author Nikolay Stoynov [@arvigeus](https://github.com/arvigeus)
* @author Tsvetan Ovedenski [@fintara](https://github.com/fintara)
*/
var bg = {
	code: "bg",
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
			defaultWidth: "wide"
		})
	},
	match: {
		ordinalNumber: buildMatchPatternFn({
			matchPattern: /^(\d+)(-?[врмт][аи]|-?т?(ен|на)|-?(ев|ева))?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^((пр)?н\.?\s?е\.?)/i,
				abbreviated: /^((пр)?н\.?\s?е\.?)/i,
				wide: /^(преди новата ера|новата ера|нова ера)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^п/i, /^н/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^[1234](-?[врт]?o?)? тримес.?/i,
				wide: /^[1234](-?[врт]?о?)? тримесечие/i
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
				abbreviated: /^(яну|фев|мар|апр|май|юни|юли|авг|сеп|окт|ное|дек)/i,
				wide: /^(януари|февруари|март|април|май|юни|юли|август|септември|октомври|ноември|декември)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/^я/i,
				/^ф/i,
				/^мар/i,
				/^ап/i,
				/^май/i,
				/^юн/i,
				/^юл/i,
				/^ав/i,
				/^се/i,
				/^окт/i,
				/^но/i,
				/^де/i
			] },
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^[нпвсч]/i,
				short: /^(нд|пн|вт|ср|чт|пт|сб)/i,
				abbreviated: /^(нед|пон|вто|сря|чет|пет|съб)/i,
				wide: /^(неделя|понеделник|вторник|сряда|четвъртък|петък|събота)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^н/i,
					/^п/i,
					/^в/i,
					/^с/i,
					/^ч/i,
					/^п/i,
					/^с/i
				],
				any: [
					/^н[ед]/i,
					/^п[он]/i,
					/^вт/i,
					/^ср/i,
					/^ч[ет]/i,
					/^п[ет]/i,
					/^с[ъб]/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: { any: /^(преди о|след о|в по|на о|през|веч|сут|следо)/i },
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^преди о/i,
				pm: /^след о/i,
				midnight: /^в пол/i,
				noon: /^на об/i,
				morning: /^сут/i,
				afternoon: /^следо/i,
				evening: /^веч/i,
				night: /^през н/i
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
export { bg, bg as default };
