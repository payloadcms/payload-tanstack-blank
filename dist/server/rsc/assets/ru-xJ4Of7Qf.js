import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
import { t as isSameWeek } from "./isSameWeek-DVwjzGUH.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/ru/_lib/formatDistance.js
function declension(scheme, count) {
	if (scheme.one !== void 0 && count === 1) return scheme.one;
	const rem10 = count % 10;
	const rem100 = count % 100;
	if (rem10 === 1 && rem100 !== 11) return scheme.singularNominative.replace("{{count}}", String(count));
	else if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 > 20)) return scheme.singularGenitive.replace("{{count}}", String(count));
	else return scheme.pluralGenitive.replace("{{count}}", String(count));
}
function buildLocalizeTokenFn(scheme) {
	return (count, options) => {
		if (options?.addSuffix) if (options.comparison && options.comparison > 0) if (scheme.future) return declension(scheme.future, count);
		else return "через " + declension(scheme.regular, count);
		else if (scheme.past) return declension(scheme.past, count);
		else return declension(scheme.regular, count) + " назад";
		else return declension(scheme.regular, count);
	};
}
var formatDistanceLocale = {
	lessThanXSeconds: buildLocalizeTokenFn({
		regular: {
			one: "меньше секунды",
			singularNominative: "меньше {{count}} секунды",
			singularGenitive: "меньше {{count}} секунд",
			pluralGenitive: "меньше {{count}} секунд"
		},
		future: {
			one: "меньше, чем через секунду",
			singularNominative: "меньше, чем через {{count}} секунду",
			singularGenitive: "меньше, чем через {{count}} секунды",
			pluralGenitive: "меньше, чем через {{count}} секунд"
		}
	}),
	xSeconds: buildLocalizeTokenFn({
		regular: {
			singularNominative: "{{count}} секунда",
			singularGenitive: "{{count}} секунды",
			pluralGenitive: "{{count}} секунд"
		},
		past: {
			singularNominative: "{{count}} секунду назад",
			singularGenitive: "{{count}} секунды назад",
			pluralGenitive: "{{count}} секунд назад"
		},
		future: {
			singularNominative: "через {{count}} секунду",
			singularGenitive: "через {{count}} секунды",
			pluralGenitive: "через {{count}} секунд"
		}
	}),
	halfAMinute: (_count, options) => {
		if (options?.addSuffix) if (options.comparison && options.comparison > 0) return "через полминуты";
		else return "полминуты назад";
		return "полминуты";
	},
	lessThanXMinutes: buildLocalizeTokenFn({
		regular: {
			one: "меньше минуты",
			singularNominative: "меньше {{count}} минуты",
			singularGenitive: "меньше {{count}} минут",
			pluralGenitive: "меньше {{count}} минут"
		},
		future: {
			one: "меньше, чем через минуту",
			singularNominative: "меньше, чем через {{count}} минуту",
			singularGenitive: "меньше, чем через {{count}} минуты",
			pluralGenitive: "меньше, чем через {{count}} минут"
		}
	}),
	xMinutes: buildLocalizeTokenFn({
		regular: {
			singularNominative: "{{count}} минута",
			singularGenitive: "{{count}} минуты",
			pluralGenitive: "{{count}} минут"
		},
		past: {
			singularNominative: "{{count}} минуту назад",
			singularGenitive: "{{count}} минуты назад",
			pluralGenitive: "{{count}} минут назад"
		},
		future: {
			singularNominative: "через {{count}} минуту",
			singularGenitive: "через {{count}} минуты",
			pluralGenitive: "через {{count}} минут"
		}
	}),
	aboutXHours: buildLocalizeTokenFn({
		regular: {
			singularNominative: "около {{count}} часа",
			singularGenitive: "около {{count}} часов",
			pluralGenitive: "около {{count}} часов"
		},
		future: {
			singularNominative: "приблизительно через {{count}} час",
			singularGenitive: "приблизительно через {{count}} часа",
			pluralGenitive: "приблизительно через {{count}} часов"
		}
	}),
	xHours: buildLocalizeTokenFn({ regular: {
		singularNominative: "{{count}} час",
		singularGenitive: "{{count}} часа",
		pluralGenitive: "{{count}} часов"
	} }),
	xDays: buildLocalizeTokenFn({ regular: {
		singularNominative: "{{count}} день",
		singularGenitive: "{{count}} дня",
		pluralGenitive: "{{count}} дней"
	} }),
	aboutXWeeks: buildLocalizeTokenFn({
		regular: {
			singularNominative: "около {{count}} недели",
			singularGenitive: "около {{count}} недель",
			pluralGenitive: "около {{count}} недель"
		},
		future: {
			singularNominative: "приблизительно через {{count}} неделю",
			singularGenitive: "приблизительно через {{count}} недели",
			pluralGenitive: "приблизительно через {{count}} недель"
		}
	}),
	xWeeks: buildLocalizeTokenFn({ regular: {
		singularNominative: "{{count}} неделя",
		singularGenitive: "{{count}} недели",
		pluralGenitive: "{{count}} недель"
	} }),
	aboutXMonths: buildLocalizeTokenFn({
		regular: {
			singularNominative: "около {{count}} месяца",
			singularGenitive: "около {{count}} месяцев",
			pluralGenitive: "около {{count}} месяцев"
		},
		future: {
			singularNominative: "приблизительно через {{count}} месяц",
			singularGenitive: "приблизительно через {{count}} месяца",
			pluralGenitive: "приблизительно через {{count}} месяцев"
		}
	}),
	xMonths: buildLocalizeTokenFn({ regular: {
		singularNominative: "{{count}} месяц",
		singularGenitive: "{{count}} месяца",
		pluralGenitive: "{{count}} месяцев"
	} }),
	aboutXYears: buildLocalizeTokenFn({
		regular: {
			singularNominative: "около {{count}} года",
			singularGenitive: "около {{count}} лет",
			pluralGenitive: "около {{count}} лет"
		},
		future: {
			singularNominative: "приблизительно через {{count}} год",
			singularGenitive: "приблизительно через {{count}} года",
			pluralGenitive: "приблизительно через {{count}} лет"
		}
	}),
	xYears: buildLocalizeTokenFn({ regular: {
		singularNominative: "{{count}} год",
		singularGenitive: "{{count}} года",
		pluralGenitive: "{{count}} лет"
	} }),
	overXYears: buildLocalizeTokenFn({
		regular: {
			singularNominative: "больше {{count}} года",
			singularGenitive: "больше {{count}} лет",
			pluralGenitive: "больше {{count}} лет"
		},
		future: {
			singularNominative: "больше, чем через {{count}} год",
			singularGenitive: "больше, чем через {{count}} года",
			pluralGenitive: "больше, чем через {{count}} лет"
		}
	}),
	almostXYears: buildLocalizeTokenFn({
		regular: {
			singularNominative: "почти {{count}} год",
			singularGenitive: "почти {{count}} года",
			pluralGenitive: "почти {{count}} лет"
		},
		future: {
			singularNominative: "почти через {{count}} год",
			singularGenitive: "почти через {{count}} года",
			pluralGenitive: "почти через {{count}} лет"
		}
	})
};
var formatDistance = (token, count, options) => {
	return formatDistanceLocale[token](count, options);
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, d MMMM y 'г.'",
			long: "d MMMM y 'г.'",
			medium: "d MMM y 'г.'",
			short: "dd.MM.y"
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
		formats: { any: "{{date}}, {{time}}" },
		defaultWidth: "any"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/ru/_lib/formatRelative.js
var accusativeWeekdays = [
	"воскресенье",
	"понедельник",
	"вторник",
	"среду",
	"четверг",
	"пятницу",
	"субботу"
];
function lastWeek(day) {
	const weekday = accusativeWeekdays[day];
	switch (day) {
		case 0: return "'в прошлое " + weekday + " в' p";
		case 1:
		case 2:
		case 4: return "'в прошлый " + weekday + " в' p";
		case 3:
		case 5:
		case 6: return "'в прошлую " + weekday + " в' p";
	}
}
function thisWeek(day) {
	const weekday = accusativeWeekdays[day];
	if (day === 2) return "'во " + weekday + " в' p";
	else return "'в " + weekday + " в' p";
}
function nextWeek(day) {
	const weekday = accusativeWeekdays[day];
	switch (day) {
		case 0: return "'в следующее " + weekday + " в' p";
		case 1:
		case 2:
		case 4: return "'в следующий " + weekday + " в' p";
		case 3:
		case 5:
		case 6: return "'в следующую " + weekday + " в' p";
	}
}
var formatRelativeLocale = {
	lastWeek: (date, baseDate, options) => {
		const day = date.getDay();
		if (isSameWeek(date, baseDate, options)) return thisWeek(day);
		else return lastWeek(day);
	},
	yesterday: "'вчера в' p",
	today: "'сегодня в' p",
	tomorrow: "'завтра в' p",
	nextWeek: (date, baseDate, options) => {
		const day = date.getDay();
		if (isSameWeek(date, baseDate, options)) return thisWeek(day);
		else return nextWeek(day);
	},
	other: "P"
};
var formatRelative = (token, date, baseDate, options) => {
	const format = formatRelativeLocale[token];
	if (typeof format === "function") return format(date, baseDate, options);
	return format;
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/ru/_lib/localize.js
var eraValues = {
	narrow: ["до н.э.", "н.э."],
	abbreviated: ["до н. э.", "н. э."],
	wide: ["до нашей эры", "нашей эры"]
};
var quarterValues = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"1-й кв.",
		"2-й кв.",
		"3-й кв.",
		"4-й кв."
	],
	wide: [
		"1-й квартал",
		"2-й квартал",
		"3-й квартал",
		"4-й квартал"
	]
};
var monthValues = {
	narrow: [
		"Я",
		"Ф",
		"М",
		"А",
		"М",
		"И",
		"И",
		"А",
		"С",
		"О",
		"Н",
		"Д"
	],
	abbreviated: [
		"янв.",
		"фев.",
		"март",
		"апр.",
		"май",
		"июнь",
		"июль",
		"авг.",
		"сент.",
		"окт.",
		"нояб.",
		"дек."
	],
	wide: [
		"январь",
		"февраль",
		"март",
		"апрель",
		"май",
		"июнь",
		"июль",
		"август",
		"сентябрь",
		"октябрь",
		"ноябрь",
		"декабрь"
	]
};
var formattingMonthValues = {
	narrow: [
		"Я",
		"Ф",
		"М",
		"А",
		"М",
		"И",
		"И",
		"А",
		"С",
		"О",
		"Н",
		"Д"
	],
	abbreviated: [
		"янв.",
		"фев.",
		"мар.",
		"апр.",
		"мая",
		"июн.",
		"июл.",
		"авг.",
		"сент.",
		"окт.",
		"нояб.",
		"дек."
	],
	wide: [
		"января",
		"февраля",
		"марта",
		"апреля",
		"мая",
		"июня",
		"июля",
		"августа",
		"сентября",
		"октября",
		"ноября",
		"декабря"
	]
};
var dayValues = {
	narrow: [
		"В",
		"П",
		"В",
		"С",
		"Ч",
		"П",
		"С"
	],
	short: [
		"вс",
		"пн",
		"вт",
		"ср",
		"чт",
		"пт",
		"сб"
	],
	abbreviated: [
		"вск",
		"пнд",
		"втр",
		"срд",
		"чтв",
		"птн",
		"суб"
	],
	wide: [
		"воскресенье",
		"понедельник",
		"вторник",
		"среда",
		"четверг",
		"пятница",
		"суббота"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "ДП",
		pm: "ПП",
		midnight: "полн.",
		noon: "полд.",
		morning: "утро",
		afternoon: "день",
		evening: "веч.",
		night: "ночь"
	},
	abbreviated: {
		am: "ДП",
		pm: "ПП",
		midnight: "полн.",
		noon: "полд.",
		morning: "утро",
		afternoon: "день",
		evening: "веч.",
		night: "ночь"
	},
	wide: {
		am: "ДП",
		pm: "ПП",
		midnight: "полночь",
		noon: "полдень",
		morning: "утро",
		afternoon: "день",
		evening: "вечер",
		night: "ночь"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "ДП",
		pm: "ПП",
		midnight: "полн.",
		noon: "полд.",
		morning: "утра",
		afternoon: "дня",
		evening: "веч.",
		night: "ночи"
	},
	abbreviated: {
		am: "ДП",
		pm: "ПП",
		midnight: "полн.",
		noon: "полд.",
		morning: "утра",
		afternoon: "дня",
		evening: "веч.",
		night: "ночи"
	},
	wide: {
		am: "ДП",
		pm: "ПП",
		midnight: "полночь",
		noon: "полдень",
		morning: "утра",
		afternoon: "дня",
		evening: "вечера",
		night: "ночи"
	}
};
var ordinalNumber = (dirtyNumber, options) => {
	const number = Number(dirtyNumber);
	const unit = options?.unit;
	let suffix;
	if (unit === "date") suffix = "-е";
	else if (unit === "week" || unit === "minute" || unit === "second") suffix = "-я";
	else suffix = "-й";
	return number + suffix;
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/ru.js
/**
* @category Locales
* @summary Russian locale.
* @language Russian
* @iso-639-2 rus
* @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
* @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
*/
var ru = {
	code: "ru",
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
			defaultWidth: "any",
			formattingValues: formattingDayPeriodValues,
			defaultFormattingWidth: "wide"
		})
	},
	match: {
		ordinalNumber: buildMatchPatternFn({
			matchPattern: /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^((до )?н\.?\s?э\.?)/i,
				abbreviated: /^((до )?н\.?\s?э\.?)/i,
				wide: /^(до нашей эры|нашей эры|наша эра)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^д/i, /^н/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
				wide: /^[1234](-?[ыои]?й?)? квартал/i
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
				narrow: /^[яфмаисонд]/i,
				abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
				wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^я/i,
					/^ф/i,
					/^м/i,
					/^а/i,
					/^м/i,
					/^и/i,
					/^и/i,
					/^а/i,
					/^с/i,
					/^о/i,
					/^н/i,
					/^я/i
				],
				any: [
					/^я/i,
					/^ф/i,
					/^мар/i,
					/^ап/i,
					/^ма[йя]/i,
					/^июн/i,
					/^июл/i,
					/^ав/i,
					/^с/i,
					/^о/i,
					/^н/i,
					/^д/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^[впсч]/i,
				short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
				abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
				wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^в/i,
					/^п/i,
					/^в/i,
					/^с/i,
					/^ч/i,
					/^п/i,
					/^с/i
				],
				any: [
					/^в[ос]/i,
					/^п[он]/i,
					/^в/i,
					/^ср/i,
					/^ч/i,
					/^п[ят]/i,
					/^с[уб]/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
				abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
				wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: {
				am: /^дп/i,
				pm: /^пп/i,
				midnight: /^полн/i,
				noon: /^полд/i,
				morning: /^у/i,
				afternoon: /^д[ен]/i,
				evening: /^в/i,
				night: /^н/i
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
export { ru as default, ru };
