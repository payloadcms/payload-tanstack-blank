import { o as __toESM } from "./rolldown-runtime-CE-6LUnI.js";
import { t as require_react } from "./react-yhpvVyYg.js";
import { t as require_jsx_runtime } from "./jsx-runtime-Ch3VfgV3.js";
import { t as require_react_dom } from "./react-dom-r48VISTm.js";
import { t as require_compiler_runtime } from "./compiler-runtime-IEfSpGV5.js";
import { a as ChevronIcon, n as useTranslation } from "./Translation-CQnAqbkH.js";
import { a as offset$1, g as isElement, i as flip$1, n as autoUpdate, o as getComputedStyle, r as computePosition, t as arrow$2 } from "./floating-ui.dom-BibUWQMS.js";
//#region node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var import_compiler_runtime = require_compiler_runtime();
function r(e) {
	var t, f, n = "";
	if ("string" == typeof e || "number" == typeof e) n += e;
	else if ("object" == typeof e) if (Array.isArray(e)) {
		var o = e.length;
		for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
	} else for (f in e) e[f] && (n && (n += " "), n += f);
	return n;
}
function clsx() {
	for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
	return n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.mjs
/**
* @name toDate
* @category Common Helpers
* @summary Convert the given argument to an instance of Date.
*
* @description
* Convert the given argument to an instance of Date.
*
* If the argument is an instance of Date, the function returns its clone.
*
* If the argument is a number, it is treated as a timestamp.
*
* If the argument is none of the above, the function returns Invalid Date.
*
* **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param argument - The value to convert
*
* @returns The parsed date in the local time zone
*
* @example
* // Clone the date:
* const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
* //=> Tue Feb 11 2014 11:30:30
*
* @example
* // Convert the timestamp to date:
* const result = toDate(1392098430000)
* //=> Tue Feb 11 2014 11:30:30
*/
function toDate(argument) {
	const argStr = Object.prototype.toString.call(argument);
	if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") return new argument.constructor(+argument);
	else if (typeof argument === "number" || argStr === "[object Number]" || typeof argument === "string" || argStr === "[object String]") return new Date(argument);
	else return /* @__PURE__ */ new Date(NaN);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/constructFrom.mjs
/**
* @name constructFrom
* @category Generic Helpers
* @summary Constructs a date using the reference date and the value
*
* @description
* The function constructs a new date using the constructor from the reference
* date and the given value. It helps to build generic functions that accept
* date extensions.
*
* It defaults to `Date` if the passed reference date is a number or a string.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The reference date to take constructor from
* @param value - The value to create the date
*
* @returns Date initialized using the given date and value
*
* @example
* import { constructFrom } from 'date-fns'
*
* // A function that clones a date preserving the original type
* function cloneDate<DateType extends Date(date: DateType): DateType {
*   return constructFrom(
*     date, // Use contrustor from the given date
*     date.getTime() // Use the date value to create a new date
*   )
* }
*/
function constructFrom(date, value) {
	if (date instanceof Date) return new date.constructor(value);
	else return new Date(value);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addDays.mjs
/**
* @name addDays
* @category Day Helpers
* @summary Add the specified number of days to the given date.
*
* @description
* Add the specified number of days to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param amount - The amount of days to be added.
*
* @returns The new date with the days added
*
* @example
* // Add 10 days to 1 September 2014:
* const result = addDays(new Date(2014, 8, 1), 10)
* //=> Thu Sep 11 2014 00:00:00
*/
function addDays(date, amount) {
	const _date = toDate(date);
	if (isNaN(amount)) return constructFrom(date, NaN);
	if (!amount) return _date;
	_date.setDate(_date.getDate() + amount);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addMonths.mjs
/**
* @name addMonths
* @category Month Helpers
* @summary Add the specified number of months to the given date.
*
* @description
* Add the specified number of months to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param amount - The amount of months to be added.
*
* @returns The new date with the months added
*
* @example
* // Add 5 months to 1 September 2014:
* const result = addMonths(new Date(2014, 8, 1), 5)
* //=> Sun Feb 01 2015 00:00:00
*
* // Add one month to 30 January 2023:
* const result = addMonths(new Date(2023, 0, 30), 1)
* //=> Tue Feb 28 2023 00:00:00
*/
function addMonths(date, amount) {
	const _date = toDate(date);
	if (isNaN(amount)) return constructFrom(date, NaN);
	if (!amount) return _date;
	const dayOfMonth = _date.getDate();
	const endOfDesiredMonth = constructFrom(date, _date.getTime());
	endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
	if (dayOfMonth >= endOfDesiredMonth.getDate()) return endOfDesiredMonth;
	else {
		_date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
		return _date;
	}
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addMilliseconds.mjs
/**
* @name addMilliseconds
* @category Millisecond Helpers
* @summary Add the specified number of milliseconds to the given date.
*
* @description
* Add the specified number of milliseconds to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param amount - The amount of milliseconds to be added.
*
* @returns The new date with the milliseconds added
*
* @example
* // Add 750 milliseconds to 10 July 2014 12:45:30.000:
* const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
* //=> Thu Jul 10 2014 12:45:30.750
*/
function addMilliseconds(date, amount) {
	return constructFrom(date, +toDate(date) + amount);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/constants.mjs
/**
* @constant
* @name daysInYear
* @summary Days in 1 year.
*
* @description
* How many days in a year.
*
* One years equals 365.2425 days according to the formula:
*
* > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
* > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
*/
var daysInYear = 365.2425;
-(Math.pow(10, 8) * 24 * 60 * 60 * 1e3);
/**
* @constant
* @name millisecondsInWeek
* @summary Milliseconds in 1 week.
*/
var millisecondsInWeek = 6048e5;
/**
* @constant
* @name millisecondsInDay
* @summary Milliseconds in 1 day.
*/
var millisecondsInDay = 864e5;
/**
* @constant
* @name millisecondsInMinute
* @summary Milliseconds in 1 minute
*/
var millisecondsInMinute = 6e4;
/**
* @constant
* @name millisecondsInHour
* @summary Milliseconds in 1 hour
*/
var millisecondsInHour = 36e5;
/**
* @constant
* @name millisecondsInSecond
* @summary Milliseconds in 1 second
*/
var millisecondsInSecond = 1e3;
/**
* @constant
* @name secondsInDay
* @summary Seconds in 1 day.
*/
var secondsInDay = 3600 * 24;
secondsInDay * 7;
secondsInDay * daysInYear / 12 * 3;
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addHours.mjs
/**
* @name addHours
* @category Hour Helpers
* @summary Add the specified number of hours to the given date.
*
* @description
* Add the specified number of hours to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param amount - The amount of hours to be added.
*
* @returns The new date with the hours added
*
* @example
* // Add 2 hours to 10 July 2014 23:00:00:
* const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
* //=> Fri Jul 11 2014 01:00:00
*/
function addHours(date, amount) {
	return addMilliseconds(date, amount * millisecondsInHour);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/_lib/defaultOptions.mjs
var defaultOptions = {};
function getDefaultOptions$1() {
	return defaultOptions;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfWeek.mjs
/**
* The {@link startOfWeek} function options.
*/
/**
* @name startOfWeek
* @category Week Helpers
* @summary Return the start of a week for the given date.
*
* @description
* Return the start of a week for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a week
*
* @example
* // The start of a week for 2 September 2014 11:55:00:
* const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
* //=> Sun Aug 31 2014 00:00:00
*
* @example
* // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
* const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
* //=> Mon Sep 01 2014 00:00:00
*/
function startOfWeek(date, options) {
	const defaultOptions = getDefaultOptions$1();
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	const _date = toDate(date);
	const day = _date.getDay();
	const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
	_date.setDate(_date.getDate() - diff);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfISOWeek.mjs
/**
* @name startOfISOWeek
* @category ISO Week Helpers
* @summary Return the start of an ISO week for the given date.
*
* @description
* Return the start of an ISO week for the given date.
* The result will be in the local timezone.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The original date
*
* @returns The start of an ISO week
*
* @example
* // The start of an ISO week for 2 September 2014 11:55:00:
* const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
* //=> Mon Sep 01 2014 00:00:00
*/
function startOfISOWeek(date) {
	return startOfWeek(date, { weekStartsOn: 1 });
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getISOWeekYear.mjs
/**
* @name getISOWeekYear
* @category ISO Week-Numbering Year Helpers
* @summary Get the ISO week-numbering year of the given date.
*
* @description
* Get the ISO week-numbering year of the given date,
* which always starts 3 days before the year's first Thursday.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The given date
*
* @returns The ISO week-numbering year
*
* @example
* // Which ISO-week numbering year is 2 January 2005?
* const result = getISOWeekYear(new Date(2005, 0, 2))
* //=> 2004
*/
function getISOWeekYear(date) {
	const _date = toDate(date);
	const year = _date.getFullYear();
	const fourthOfJanuaryOfNextYear = constructFrom(date, 0);
	fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
	fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
	const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
	const fourthOfJanuaryOfThisYear = constructFrom(date, 0);
	fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
	fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
	const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
	if (_date.getTime() >= startOfNextYear.getTime()) return year + 1;
	else if (_date.getTime() >= startOfThisYear.getTime()) return year;
	else return year - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfDay.mjs
/**
* @name startOfDay
* @category Day Helpers
* @summary Return the start of a day for the given date.
*
* @description
* Return the start of a day for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The original date
*
* @returns The start of a day
*
* @example
* // The start of a day for 2 September 2014 11:55:00:
* const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 02 2014 00:00:00
*/
function startOfDay(date) {
	const _date = toDate(date);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs
/**
* Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
* They usually appear for dates that denote time before the timezones were introduced
* (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
* and GMT+01:00:00 after that date)
*
* Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
* which would lead to incorrect calculations.
*
* This function returns the timezone offset in milliseconds that takes seconds in account.
*/
function getTimezoneOffsetInMilliseconds(date) {
	const _date = toDate(date);
	const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
	utcDate.setUTCFullYear(_date.getFullYear());
	return +date - +utcDate;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/differenceInCalendarDays.mjs
/**
* @name differenceInCalendarDays
* @category Day Helpers
* @summary Get the number of calendar days between the given dates.
*
* @description
* Get the number of calendar days between the given dates. This means that the times are removed
* from the dates and then the difference in days is calculated.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param dateLeft - The later date
* @param dateRight - The earlier date
*
* @returns The number of calendar days
*
* @example
* // How many calendar days are between
* // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
* const result = differenceInCalendarDays(
*   new Date(2012, 6, 2, 0, 0),
*   new Date(2011, 6, 2, 23, 0)
* )
* //=> 366
* // How many calendar days are between
* // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
* const result = differenceInCalendarDays(
*   new Date(2011, 6, 3, 0, 1),
*   new Date(2011, 6, 2, 23, 59)
* )
* //=> 1
*/
function differenceInCalendarDays(dateLeft, dateRight) {
	const startOfDayLeft = startOfDay(dateLeft);
	const startOfDayRight = startOfDay(dateRight);
	const timestampLeft = +startOfDayLeft - getTimezoneOffsetInMilliseconds(startOfDayLeft);
	const timestampRight = +startOfDayRight - getTimezoneOffsetInMilliseconds(startOfDayRight);
	return Math.round((timestampLeft - timestampRight) / millisecondsInDay);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfISOWeekYear.mjs
/**
* @name startOfISOWeekYear
* @category ISO Week-Numbering Year Helpers
* @summary Return the start of an ISO week-numbering year for the given date.
*
* @description
* Return the start of an ISO week-numbering year,
* which always starts 3 days before the year's first Thursday.
* The result will be in the local timezone.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The original date
*
* @returns The start of an ISO week-numbering year
*
* @example
* // The start of an ISO week-numbering year for 2 July 2005:
* const result = startOfISOWeekYear(new Date(2005, 6, 2))
* //=> Mon Jan 03 2005 00:00:00
*/
function startOfISOWeekYear(date) {
	const year = getISOWeekYear(date);
	const fourthOfJanuary = constructFrom(date, 0);
	fourthOfJanuary.setFullYear(year, 0, 4);
	fourthOfJanuary.setHours(0, 0, 0, 0);
	return startOfISOWeek(fourthOfJanuary);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addMinutes.mjs
/**
* @name addMinutes
* @category Minute Helpers
* @summary Add the specified number of minutes to the given date.
*
* @description
* Add the specified number of minutes to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param amount - The amount of minutes to be added.
*
* @returns The new date with the minutes added
*
* @example
* // Add 30 minutes to 10 July 2014 12:00:00:
* const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
* //=> Thu Jul 10 2014 12:30:00
*/
function addMinutes(date, amount) {
	return addMilliseconds(date, amount * millisecondsInMinute);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addQuarters.mjs
/**
* @name addQuarters
* @category Quarter Helpers
* @summary Add the specified number of year quarters to the given date.
*
* @description
* Add the specified number of year quarters to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param amount - The amount of quarters to be added.
*
* @returns The new date with the quarters added
*
* @example
* // Add 1 quarter to 1 September 2014:
* const result = addQuarters(new Date(2014, 8, 1), 1)
* //=> Mon Dec 01 2014 00:00:00
*/
function addQuarters(date, amount) {
	return addMonths(date, amount * 3);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addSeconds.mjs
/**
* @name addSeconds
* @category Second Helpers
* @summary Add the specified number of seconds to the given date.
*
* @description
* Add the specified number of seconds to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param amount - The amount of seconds to be added.
*
* @returns The new date with the seconds added
*
* @example
* // Add 30 seconds to 10 July 2014 12:45:00:
* const result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
* //=> Thu Jul 10 2014 12:45:30
*/
function addSeconds(date, amount) {
	return addMilliseconds(date, amount * 1e3);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addWeeks.mjs
/**
* @name addWeeks
* @category Week Helpers
* @summary Add the specified number of weeks to the given date.
*
* @description
* Add the specified number of week to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param amount - The amount of weeks to be added.
*
* @returns The new date with the weeks added
*
* @example
* // Add 4 weeks to 1 September 2014:
* const result = addWeeks(new Date(2014, 8, 1), 4)
* //=> Mon Sep 29 2014 00:00:00
*/
function addWeeks(date, amount) {
	return addDays(date, amount * 7);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addYears.mjs
/**
* @name addYears
* @category Year Helpers
* @summary Add the specified number of years to the given date.
*
* @description
* Add the specified number of years to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param amount - The amount of years to be added.
*
* @returns The new date with the years added
*
* @example
* // Add 5 years to 1 September 2014:
* const result = addYears(new Date(2014, 8, 1), 5)
* //=> Sun Sep 01 2019 00:00:00
*/
function addYears(date, amount) {
	return addMonths(date, amount * 12);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/max.mjs
/**
* @name max
* @category Common Helpers
* @summary Return the latest of the given dates.
*
* @description
* Return the latest of the given dates.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param dates - The dates to compare
*
* @returns The latest of the dates
*
* @example
* // Which of these dates is the latest?
* const result = max([
*   new Date(1989, 6, 10),
*   new Date(1987, 1, 11),
*   new Date(1995, 6, 2),
*   new Date(1990, 0, 1)
* ])
* //=> Sun Jul 02 1995 00:00:00
*/
function max(dates) {
	let result;
	dates.forEach(function(dirtyDate) {
		const currentDate = toDate(dirtyDate);
		if (result === void 0 || result < currentDate || isNaN(Number(currentDate))) result = currentDate;
	});
	return result || /* @__PURE__ */ new Date(NaN);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/min.mjs
/**
* @name min
* @category Common Helpers
* @summary Returns the earliest of the given dates.
*
* @description
* Returns the earliest of the given dates.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param dates - The dates to compare
*
* @returns The earliest of the dates
*
* @example
* // Which of these dates is the earliest?
* const result = min([
*   new Date(1989, 6, 10),
*   new Date(1987, 1, 11),
*   new Date(1995, 6, 2),
*   new Date(1990, 0, 1)
* ])
* //=> Wed Feb 11 1987 00:00:00
*/
function min(dates) {
	let result;
	dates.forEach((dirtyDate) => {
		const date = toDate(dirtyDate);
		if (!result || result > date || isNaN(+date)) result = date;
	});
	return result || /* @__PURE__ */ new Date(NaN);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameDay.mjs
/**
* @name isSameDay
* @category Day Helpers
* @summary Are the given dates in the same day (and year and month)?
*
* @description
* Are the given dates in the same day (and year and month)?
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param dateLeft - The first date to check
* @param dateRight - The second date to check

* @returns The dates are in the same day (and year and month)
*
* @example
* // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
* const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
* //=> true
*
* @example
* // Are 4 September and 4 October in the same day?
* const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
* //=> false
*
* @example
* // Are 4 September, 2014 and 4 September, 2015 in the same day?
* const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
* //=> false
*/
function isSameDay$1(dateLeft, dateRight) {
	const dateLeftStartOfDay = startOfDay(dateLeft);
	const dateRightStartOfDay = startOfDay(dateRight);
	return +dateLeftStartOfDay === +dateRightStartOfDay;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isDate.mjs
/**
* @name isDate
* @category Common Helpers
* @summary Is the given value a date?
*
* @description
* Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
*
* @param value - The value to check
*
* @returns True if the given value is a date
*
* @example
* // For a valid date:
* const result = isDate(new Date())
* //=> true
*
* @example
* // For an invalid date:
* const result = isDate(new Date(NaN))
* //=> true
*
* @example
* // For some value:
* const result = isDate('2014-02-31')
* //=> false
*
* @example
* // For an object:
* const result = isDate({})
* //=> false
*/
function isDate(value) {
	return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isValid.mjs
/**
* @name isValid
* @category Common Helpers
* @summary Is the given date valid?
*
* @description
* Returns false if argument is Invalid Date and true otherwise.
* Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
* Invalid Date is a Date, whose time value is NaN.
*
* Time value of Date: http://es5.github.io/#x15.9.1.1
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to check
*
* @returns The date is valid
*
* @example
* // For the valid date:
* const result = isValid(new Date(2014, 1, 31))
* //=> true
*
* @example
* // For the value, convertable into a date:
* const result = isValid(1393804800000)
* //=> true
*
* @example
* // For the invalid date:
* const result = isValid(new Date(''))
* //=> false
*/
function isValid$1(date) {
	if (!isDate(date) && typeof date !== "number") return false;
	const _date = toDate(date);
	return !isNaN(Number(_date));
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/differenceInCalendarMonths.mjs
/**
* @name differenceInCalendarMonths
* @category Month Helpers
* @summary Get the number of calendar months between the given dates.
*
* @description
* Get the number of calendar months between the given dates.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param dateLeft - The later date
* @param dateRight - The earlier date
*
* @returns The number of calendar months
*
* @example
* // How many calendar months are between 31 January 2014 and 1 September 2014?
* const result = differenceInCalendarMonths(
*   new Date(2014, 8, 1),
*   new Date(2014, 0, 31)
* )
* //=> 8
*/
function differenceInCalendarMonths(dateLeft, dateRight) {
	const _dateLeft = toDate(dateLeft);
	const _dateRight = toDate(dateRight);
	const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
	const monthDiff = _dateLeft.getMonth() - _dateRight.getMonth();
	return yearDiff * 12 + monthDiff;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getQuarter.mjs
/**
* @name getQuarter
* @category Quarter Helpers
* @summary Get the year quarter of the given date.
*
* @description
* Get the year quarter of the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The given date
*
* @returns The quarter
*
* @example
* // Which quarter is 2 July 2014?
* const result = getQuarter(new Date(2014, 6, 2))
* //=> 3
*/
function getQuarter(date) {
	const _date = toDate(date);
	return Math.trunc(_date.getMonth() / 3) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/differenceInCalendarQuarters.mjs
/**
* @name differenceInCalendarQuarters
* @category Quarter Helpers
* @summary Get the number of calendar quarters between the given dates.
*
* @description
* Get the number of calendar quarters between the given dates.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param dateLeft - The later date
* @param dateRight - The earlier date

* @returns The number of calendar quarters
*
* @example
* // How many calendar quarters are between 31 December 2013 and 2 July 2014?
* const result = differenceInCalendarQuarters(
*   new Date(2014, 6, 2),
*   new Date(2013, 11, 31)
* )
* //=> 3
*/
function differenceInCalendarQuarters(dateLeft, dateRight) {
	const _dateLeft = toDate(dateLeft);
	const _dateRight = toDate(dateRight);
	const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
	const quarterDiff = getQuarter(_dateLeft) - getQuarter(_dateRight);
	return yearDiff * 4 + quarterDiff;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/differenceInCalendarYears.mjs
/**
* @name differenceInCalendarYears
* @category Year Helpers
* @summary Get the number of calendar years between the given dates.
*
* @description
* Get the number of calendar years between the given dates.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param dateLeft - The later date
* @param dateRight - The earlier date

* @returns The number of calendar years
*
* @example
* // How many calendar years are between 31 December 2013 and 11 February 2015?
* const result = differenceInCalendarYears(
*   new Date(2015, 1, 11),
*   new Date(2013, 11, 31)
* )
* //=> 2
*/
function differenceInCalendarYears(dateLeft, dateRight) {
	const _dateLeft = toDate(dateLeft);
	const _dateRight = toDate(dateRight);
	return _dateLeft.getFullYear() - _dateRight.getFullYear();
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/differenceInDays.mjs
/**
* @name differenceInDays
* @category Day Helpers
* @summary Get the number of full days between the given dates.
*
* @description
* Get the number of full day periods between two dates. Fractional days are
* truncated towards zero.
*
* One "full day" is the distance between a local time in one day to the same
* local time on the next or previous day. A full day can sometimes be less than
* or more than 24 hours if a daylight savings change happens between two dates.
*
* To ignore DST and only measure exact 24-hour periods, use this instead:
* `Math.trunc(differenceInHours(dateLeft, dateRight)/24)|0`.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param dateLeft - The later date
* @param dateRight - The earlier date
*
* @returns The number of full days according to the local timezone
*
* @example
* // How many full days are between
* // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
* const result = differenceInDays(
*   new Date(2012, 6, 2, 0, 0),
*   new Date(2011, 6, 2, 23, 0)
* )
* //=> 365
*
* @example
* // How many full days are between
* // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
* const result = differenceInDays(
*   new Date(2011, 6, 3, 0, 1),
*   new Date(2011, 6, 2, 23, 59)
* )
* //=> 0
*
* @example
* // How many full days are between
* // 1 March 2020 0:00 and 1 June 2020 0:00 ?
* // Note: because local time is used, the
* // result will always be 92 days, even in
* // time zones where DST starts and the
* // period has only 92*24-1 hours.
* const result = differenceInDays(
*   new Date(2020, 5, 1),
*   new Date(2020, 2, 1)
* )
* //=> 92
*/
function differenceInDays(dateLeft, dateRight) {
	const _dateLeft = toDate(dateLeft);
	const _dateRight = toDate(dateRight);
	const sign = compareLocalAsc(_dateLeft, _dateRight);
	const difference = Math.abs(differenceInCalendarDays(_dateLeft, _dateRight));
	_dateLeft.setDate(_dateLeft.getDate() - sign * difference);
	const result = sign * (difference - Number(compareLocalAsc(_dateLeft, _dateRight) === -sign));
	return result === 0 ? 0 : result;
}
function compareLocalAsc(dateLeft, dateRight) {
	const diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();
	if (diff < 0) return -1;
	else if (diff > 0) return 1;
	else return diff;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfDay.mjs
/**
* @name endOfDay
* @category Day Helpers
* @summary Return the end of a day for the given date.
*
* @description
* Return the end of a day for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The original date
*
* @returns The end of a day
*
* @example
* // The end of a day for 2 September 2014 11:55:00:
* const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 02 2014 23:59:59.999
*/
function endOfDay(date) {
	const _date = toDate(date);
	_date.setHours(23, 59, 59, 999);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfMonth.mjs
/**
* @name endOfMonth
* @category Month Helpers
* @summary Return the end of a month for the given date.
*
* @description
* Return the end of a month for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The original date
*
* @returns The end of a month
*
* @example
* // The end of a month for 2 September 2014 11:55:00:
* const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 30 2014 23:59:59.999
*/
function endOfMonth(date) {
	const _date = toDate(date);
	const month = _date.getMonth();
	_date.setFullYear(_date.getFullYear(), month + 1, 0);
	_date.setHours(23, 59, 59, 999);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfQuarter.mjs
/**
* @name startOfQuarter
* @category Quarter Helpers
* @summary Return the start of a year quarter for the given date.
*
* @description
* Return the start of a year quarter for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The original date
*
* @returns The start of a quarter
*
* @example
* // The start of a quarter for 2 September 2014 11:55:00:
* const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Jul 01 2014 00:00:00
*/
function startOfQuarter(date) {
	const _date = toDate(date);
	const currentMonth = _date.getMonth();
	const month = currentMonth - currentMonth % 3;
	_date.setMonth(month, 1);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfMonth.mjs
/**
* @name startOfMonth
* @category Month Helpers
* @summary Return the start of a month for the given date.
*
* @description
* Return the start of a month for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The original date
*
* @returns The start of a month
*
* @example
* // The start of a month for 2 September 2014 11:55:00:
* const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
* //=> Mon Sep 01 2014 00:00:00
*/
function startOfMonth(date) {
	const _date = toDate(date);
	_date.setDate(1);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfYear.mjs
/**
* @name endOfYear
* @category Year Helpers
* @summary Return the end of a year for the given date.
*
* @description
* Return the end of a year for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The original date
*
* @returns The end of a year
*
* @example
* // The end of a year for 2 September 2014 11:55:00:
* const result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
* //=> Wed Dec 31 2014 23:59:59.999
*/
function endOfYear(date) {
	const _date = toDate(date);
	const year = _date.getFullYear();
	_date.setFullYear(year + 1, 0, 0);
	_date.setHours(23, 59, 59, 999);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfYear.mjs
/**
* @name startOfYear
* @category Year Helpers
* @summary Return the start of a year for the given date.
*
* @description
* Return the start of a year for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The original date
*
* @returns The start of a year
*
* @example
* // The start of a year for 2 September 2014 11:55:00:
* const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
* //=> Wed Jan 01 2014 00:00:00
*/
function startOfYear(date) {
	const cleanDate = toDate(date);
	const _date = constructFrom(date, 0);
	_date.setFullYear(cleanDate.getFullYear(), 0, 1);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfWeek.mjs
/**
* The {@link endOfWeek} function options.
*/
/**
* @name endOfWeek
* @category Week Helpers
* @summary Return the end of a week for the given date.
*
* @description
* Return the end of a week for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The original date
* @param options - An object with options
*
* @returns The end of a week
*
* @example
* // The end of a week for 2 September 2014 11:55:00:
* const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
* //=> Sat Sep 06 2014 23:59:59.999
*
* @example
* // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
* const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
* //=> Sun Sep 07 2014 23:59:59.999
*/
function endOfWeek(date, options) {
	const defaultOptions = getDefaultOptions$1();
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	const _date = toDate(date);
	const day = _date.getDay();
	const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
	_date.setDate(_date.getDate() + diff);
	_date.setHours(23, 59, 59, 999);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
};
var formatDistance = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", count.toString());
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return "in " + result;
	else return result + " ago";
	return result;
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs
function buildFormatLongFn(args) {
	return (options = {}) => {
		const width = options.width ? String(options.width) : args.defaultWidth;
		return args.formats[width] || args.formats[args.defaultWidth];
	};
}
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs
var formatRelativeLocale = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs
/**
* The localize function argument callback which allows to convert raw value to
* the actual type.
*
* @param value - The value to convert
*
* @returns The converted value
*/
/**
* The map of localized values for each width.
*/
/**
* The index type of the locale unit value. It types conversion of units of
* values that don't start at 0 (i.e. quarters).
*/
/**
* Converts the unit value to the tuple of values.
*/
/**
* The tuple of localized era values. The first element represents BC,
* the second element represents AD.
*/
/**
* The tuple of localized quarter values. The first element represents Q1.
*/
/**
* The tuple of localized day values. The first element represents Sunday.
*/
/**
* The tuple of localized month values. The first element represents January.
*/
function buildLocalizeFn(args) {
	return (value, options) => {
		const context = options?.context ? String(options.context) : "standalone";
		let valuesArray;
		if (context === "formatting" && args.formattingValues) {
			const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
			const width = options?.width ? String(options.width) : defaultWidth;
			valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
		} else {
			const defaultWidth = args.defaultWidth;
			const width = options?.width ? String(options.width) : args.defaultWidth;
			valuesArray = args.values[width] || args.values[defaultWidth];
		}
		const index = args.argumentCallback ? args.argumentCallback(value) : value;
		return valuesArray[index];
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/locale/en-US/_lib/localize.mjs
var eraValues = {
	narrow: ["B", "A"],
	abbreviated: ["BC", "AD"],
	wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"Q1",
		"Q2",
		"Q3",
		"Q4"
	],
	wide: [
		"1st quarter",
		"2nd quarter",
		"3rd quarter",
		"4th quarter"
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
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	],
	wide: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	]
};
var dayValues = {
	narrow: [
		"S",
		"M",
		"T",
		"W",
		"T",
		"F",
		"S"
	],
	short: [
		"Su",
		"Mo",
		"Tu",
		"We",
		"Th",
		"Fr",
		"Sa"
	],
	abbreviated: [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	wide: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "mi",
		noon: "n",
		morning: "morning",
		afternoon: "afternoon",
		evening: "evening",
		night: "night"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "midnight",
		noon: "noon",
		morning: "morning",
		afternoon: "afternoon",
		evening: "evening",
		night: "night"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "midnight",
		noon: "noon",
		morning: "morning",
		afternoon: "afternoon",
		evening: "evening",
		night: "night"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "mi",
		noon: "n",
		morning: "in the morning",
		afternoon: "in the afternoon",
		evening: "in the evening",
		night: "at night"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "midnight",
		noon: "noon",
		morning: "in the morning",
		afternoon: "in the afternoon",
		evening: "in the evening",
		night: "at night"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "midnight",
		noon: "noon",
		morning: "in the morning",
		afternoon: "in the afternoon",
		evening: "in the evening",
		night: "at night"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	const number = Number(dirtyNumber);
	const rem100 = number % 100;
	if (rem100 > 20 || rem100 < 10) switch (rem100 % 10) {
		case 1: return number + "st";
		case 2: return number + "nd";
		case 3: return number + "rd";
	}
	return number + "th";
};
var localize = {
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
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/locale/_lib/buildMatchFn.mjs
function buildMatchFn(args) {
	return (string, options = {}) => {
		const width = options.width;
		const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
		const matchResult = string.match(matchPattern);
		if (!matchResult) return null;
		const matchedString = matchResult[0];
		const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
		const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : findKey(parsePatterns, (pattern) => pattern.test(matchedString));
		let value;
		value = args.valueCallback ? args.valueCallback(key) : key;
		value = options.valueCallback ? options.valueCallback(value) : value;
		const rest = string.slice(matchedString.length);
		return {
			value,
			rest
		};
	};
}
function findKey(object, predicate) {
	for (const key in object) if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) return key;
}
function findIndex(array, predicate) {
	for (let key = 0; key < array.length; key++) if (predicate(array[key])) return key;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs
function buildMatchPatternFn(args) {
	return (string, options = {}) => {
		const matchResult = string.match(args.matchPattern);
		if (!matchResult) return null;
		const matchedString = matchResult[0];
		const parseResult = string.match(args.parsePattern);
		if (!parseResult) return null;
		let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
		value = options.valueCallback ? options.valueCallback(value) : value;
		const rest = string.slice(matchedString.length);
		return {
			value,
			rest
		};
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/locale/en-US.mjs
/**
* @category Locales
* @summary English locale (United States).
* @language English
* @iso-639-2 eng
* @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
* @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
*/
var enUS = {
	code: "en-US",
	formatDistance,
	formatLong,
	formatRelative,
	localize,
	match: {
		ordinalNumber: buildMatchPatternFn({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](th|st|nd|rd)? quarter/i
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
				abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
				wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
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
					/^may/i,
					/^jun/i,
					/^jul/i,
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
				narrow: /^[smtwf]/i,
				short: /^(su|mo|tu|we|th|fr|sa)/i,
				abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
				wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^s/i,
					/^m/i,
					/^t/i,
					/^w/i,
					/^t/i,
					/^f/i,
					/^s/i
				],
				any: [
					/^su/i,
					/^m/i,
					/^tu/i,
					/^w/i,
					/^th/i,
					/^f/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
				any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getDayOfYear.mjs
/**
* @name getDayOfYear
* @category Day Helpers
* @summary Get the day of the year of the given date.
*
* @description
* Get the day of the year of the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The given date
*
* @returns The day of year
*
* @example
* // Which day of the year is 2 July 2014?
* const result = getDayOfYear(new Date(2014, 6, 2))
* //=> 183
*/
function getDayOfYear(date) {
	const _date = toDate(date);
	return differenceInCalendarDays(_date, startOfYear(_date)) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getISOWeek.mjs
/**
* @name getISOWeek
* @category ISO Week Helpers
* @summary Get the ISO week of the given date.
*
* @description
* Get the ISO week of the given date.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The given date
*
* @returns The ISO week
*
* @example
* // Which week of the ISO-week numbering year is 2 January 2005?
* const result = getISOWeek(new Date(2005, 0, 2))
* //=> 53
*/
function getISOWeek(date) {
	const _date = toDate(date);
	const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
	return Math.round(diff / millisecondsInWeek) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getWeekYear.mjs
/**
* The {@link getWeekYear} function options.
*/
/**
* @name getWeekYear
* @category Week-Numbering Year Helpers
* @summary Get the local week-numbering year of the given date.
*
* @description
* Get the local week-numbering year of the given date.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The given date
* @param options - An object with options.
*
* @returns The local week-numbering year
*
* @example
* // Which week numbering year is 26 December 2004 with the default settings?
* const result = getWeekYear(new Date(2004, 11, 26))
* //=> 2005
*
* @example
* // Which week numbering year is 26 December 2004 if week starts on Saturday?
* const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
* //=> 2004
*
* @example
* // Which week numbering year is 26 December 2004 if the first week contains 4 January?
* const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
* //=> 2004
*/
function getWeekYear(date, options) {
	const _date = toDate(date);
	const year = _date.getFullYear();
	const defaultOptions = getDefaultOptions$1();
	const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
	const firstWeekOfNextYear = constructFrom(date, 0);
	firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
	firstWeekOfNextYear.setHours(0, 0, 0, 0);
	const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
	const firstWeekOfThisYear = constructFrom(date, 0);
	firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
	firstWeekOfThisYear.setHours(0, 0, 0, 0);
	const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
	if (_date.getTime() >= startOfNextYear.getTime()) return year + 1;
	else if (_date.getTime() >= startOfThisYear.getTime()) return year;
	else return year - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfWeekYear.mjs
/**
* The {@link startOfWeekYear} function options.
*/
/**
* @name startOfWeekYear
* @category Week-Numbering Year Helpers
* @summary Return the start of a local week-numbering year for the given date.
*
* @description
* Return the start of a local week-numbering year.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a week-numbering year
*
* @example
* // The start of an a week-numbering year for 2 July 2005 with default settings:
* const result = startOfWeekYear(new Date(2005, 6, 2))
* //=> Sun Dec 26 2004 00:00:00
*
* @example
* // The start of a week-numbering year for 2 July 2005
* // if Monday is the first day of week
* // and 4 January is always in the first week of the year:
* const result = startOfWeekYear(new Date(2005, 6, 2), {
*   weekStartsOn: 1,
*   firstWeekContainsDate: 4
* })
* //=> Mon Jan 03 2005 00:00:00
*/
function startOfWeekYear(date, options) {
	const defaultOptions = getDefaultOptions$1();
	const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
	const year = getWeekYear(date, options);
	const firstWeek = constructFrom(date, 0);
	firstWeek.setFullYear(year, 0, firstWeekContainsDate);
	firstWeek.setHours(0, 0, 0, 0);
	return startOfWeek(firstWeek, options);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getWeek.mjs
/**
* The {@link getWeek} function options.
*/
/**
* @name getWeek
* @category Week Helpers
* @summary Get the local week index of the given date.
*
* @description
* Get the local week index of the given date.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The given date
* @param options - An object with options
*
* @returns The week
*
* @example
* // Which week of the local week numbering year is 2 January 2005 with default options?
* const result = getWeek(new Date(2005, 0, 2))
* //=> 2
*
* @example
* // Which week of the local week numbering year is 2 January 2005,
* // if Monday is the first day of the week,
* // and the first week of the year always contains 4 January?
* const result = getWeek(new Date(2005, 0, 2), {
*   weekStartsOn: 1,
*   firstWeekContainsDate: 4
* })
* //=> 53
*/
function getWeek$1(date, options) {
	const _date = toDate(date);
	const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
	return Math.round(diff / millisecondsInWeek) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/_lib/addLeadingZeros.mjs
function addLeadingZeros(number, targetLength) {
	return (number < 0 ? "-" : "") + Math.abs(number).toString().padStart(targetLength, "0");
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/_lib/format/lightFormatters.mjs
var lightFormatters = {
	y(date, token) {
		const signedYear = date.getFullYear();
		const year = signedYear > 0 ? signedYear : 1 - signedYear;
		return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
	},
	M(date, token) {
		const month = date.getMonth();
		return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
	},
	d(date, token) {
		return addLeadingZeros(date.getDate(), token.length);
	},
	a(date, token) {
		const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
		switch (token) {
			case "a":
			case "aa": return dayPeriodEnumValue.toUpperCase();
			case "aaa": return dayPeriodEnumValue;
			case "aaaaa": return dayPeriodEnumValue[0];
			default: return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
		}
	},
	h(date, token) {
		return addLeadingZeros(date.getHours() % 12 || 12, token.length);
	},
	H(date, token) {
		return addLeadingZeros(date.getHours(), token.length);
	},
	m(date, token) {
		return addLeadingZeros(date.getMinutes(), token.length);
	},
	s(date, token) {
		return addLeadingZeros(date.getSeconds(), token.length);
	},
	S(date, token) {
		const numberOfDigits = token.length;
		const milliseconds = date.getMilliseconds();
		return addLeadingZeros(Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3)), token.length);
	}
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/_lib/format/formatters.mjs
var dayPeriodEnum = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
};
var formatters = {
	G: function(date, token, localize) {
		const era = date.getFullYear() > 0 ? 1 : 0;
		switch (token) {
			case "G":
			case "GG":
			case "GGG": return localize.era(era, { width: "abbreviated" });
			case "GGGGG": return localize.era(era, { width: "narrow" });
			default: return localize.era(era, { width: "wide" });
		}
	},
	y: function(date, token, localize) {
		if (token === "yo") {
			const signedYear = date.getFullYear();
			const year = signedYear > 0 ? signedYear : 1 - signedYear;
			return localize.ordinalNumber(year, { unit: "year" });
		}
		return lightFormatters.y(date, token);
	},
	Y: function(date, token, localize, options) {
		const signedWeekYear = getWeekYear(date, options);
		const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
		if (token === "YY") return addLeadingZeros(weekYear % 100, 2);
		if (token === "Yo") return localize.ordinalNumber(weekYear, { unit: "year" });
		return addLeadingZeros(weekYear, token.length);
	},
	R: function(date, token) {
		return addLeadingZeros(getISOWeekYear(date), token.length);
	},
	u: function(date, token) {
		return addLeadingZeros(date.getFullYear(), token.length);
	},
	Q: function(date, token, localize) {
		const quarter = Math.ceil((date.getMonth() + 1) / 3);
		switch (token) {
			case "Q": return String(quarter);
			case "QQ": return addLeadingZeros(quarter, 2);
			case "Qo": return localize.ordinalNumber(quarter, { unit: "quarter" });
			case "QQQ": return localize.quarter(quarter, {
				width: "abbreviated",
				context: "formatting"
			});
			case "QQQQQ": return localize.quarter(quarter, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.quarter(quarter, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	q: function(date, token, localize) {
		const quarter = Math.ceil((date.getMonth() + 1) / 3);
		switch (token) {
			case "q": return String(quarter);
			case "qq": return addLeadingZeros(quarter, 2);
			case "qo": return localize.ordinalNumber(quarter, { unit: "quarter" });
			case "qqq": return localize.quarter(quarter, {
				width: "abbreviated",
				context: "standalone"
			});
			case "qqqqq": return localize.quarter(quarter, {
				width: "narrow",
				context: "standalone"
			});
			default: return localize.quarter(quarter, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	M: function(date, token, localize) {
		const month = date.getMonth();
		switch (token) {
			case "M":
			case "MM": return lightFormatters.M(date, token);
			case "Mo": return localize.ordinalNumber(month + 1, { unit: "month" });
			case "MMM": return localize.month(month, {
				width: "abbreviated",
				context: "formatting"
			});
			case "MMMMM": return localize.month(month, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.month(month, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	L: function(date, token, localize) {
		const month = date.getMonth();
		switch (token) {
			case "L": return String(month + 1);
			case "LL": return addLeadingZeros(month + 1, 2);
			case "Lo": return localize.ordinalNumber(month + 1, { unit: "month" });
			case "LLL": return localize.month(month, {
				width: "abbreviated",
				context: "standalone"
			});
			case "LLLLL": return localize.month(month, {
				width: "narrow",
				context: "standalone"
			});
			default: return localize.month(month, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	w: function(date, token, localize, options) {
		const week = getWeek$1(date, options);
		if (token === "wo") return localize.ordinalNumber(week, { unit: "week" });
		return addLeadingZeros(week, token.length);
	},
	I: function(date, token, localize) {
		const isoWeek = getISOWeek(date);
		if (token === "Io") return localize.ordinalNumber(isoWeek, { unit: "week" });
		return addLeadingZeros(isoWeek, token.length);
	},
	d: function(date, token, localize) {
		if (token === "do") return localize.ordinalNumber(date.getDate(), { unit: "date" });
		return lightFormatters.d(date, token);
	},
	D: function(date, token, localize) {
		const dayOfYear = getDayOfYear(date);
		if (token === "Do") return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
		return addLeadingZeros(dayOfYear, token.length);
	},
	E: function(date, token, localize) {
		const dayOfWeek = date.getDay();
		switch (token) {
			case "E":
			case "EE":
			case "EEE": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "formatting"
			});
			case "EEEEE": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return localize.day(dayOfWeek, {
				width: "short",
				context: "formatting"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	e: function(date, token, localize, options) {
		const dayOfWeek = date.getDay();
		const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
		switch (token) {
			case "e": return String(localDayOfWeek);
			case "ee": return addLeadingZeros(localDayOfWeek, 2);
			case "eo": return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
			case "eee": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "formatting"
			});
			case "eeeee": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return localize.day(dayOfWeek, {
				width: "short",
				context: "formatting"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	c: function(date, token, localize, options) {
		const dayOfWeek = date.getDay();
		const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
		switch (token) {
			case "c": return String(localDayOfWeek);
			case "cc": return addLeadingZeros(localDayOfWeek, token.length);
			case "co": return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
			case "ccc": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "standalone"
			});
			case "ccccc": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return localize.day(dayOfWeek, {
				width: "short",
				context: "standalone"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	i: function(date, token, localize) {
		const dayOfWeek = date.getDay();
		const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
		switch (token) {
			case "i": return String(isoDayOfWeek);
			case "ii": return addLeadingZeros(isoDayOfWeek, token.length);
			case "io": return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
			case "iii": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "formatting"
			});
			case "iiiii": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "formatting"
			});
			case "iiiiii": return localize.day(dayOfWeek, {
				width: "short",
				context: "formatting"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	a: function(date, token, localize) {
		const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
		switch (token) {
			case "a":
			case "aa": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			});
			case "aaa": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "aaaaa": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.dayPeriod(dayPeriodEnumValue, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	b: function(date, token, localize) {
		const hours = date.getHours();
		let dayPeriodEnumValue;
		if (hours === 12) dayPeriodEnumValue = dayPeriodEnum.noon;
		else if (hours === 0) dayPeriodEnumValue = dayPeriodEnum.midnight;
		else dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
		switch (token) {
			case "b":
			case "bb": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			});
			case "bbb": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "bbbbb": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.dayPeriod(dayPeriodEnumValue, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	B: function(date, token, localize) {
		const hours = date.getHours();
		let dayPeriodEnumValue;
		if (hours >= 17) dayPeriodEnumValue = dayPeriodEnum.evening;
		else if (hours >= 12) dayPeriodEnumValue = dayPeriodEnum.afternoon;
		else if (hours >= 4) dayPeriodEnumValue = dayPeriodEnum.morning;
		else dayPeriodEnumValue = dayPeriodEnum.night;
		switch (token) {
			case "B":
			case "BB":
			case "BBB": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			});
			case "BBBBB": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.dayPeriod(dayPeriodEnumValue, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	h: function(date, token, localize) {
		if (token === "ho") {
			let hours = date.getHours() % 12;
			if (hours === 0) hours = 12;
			return localize.ordinalNumber(hours, { unit: "hour" });
		}
		return lightFormatters.h(date, token);
	},
	H: function(date, token, localize) {
		if (token === "Ho") return localize.ordinalNumber(date.getHours(), { unit: "hour" });
		return lightFormatters.H(date, token);
	},
	K: function(date, token, localize) {
		const hours = date.getHours() % 12;
		if (token === "Ko") return localize.ordinalNumber(hours, { unit: "hour" });
		return addLeadingZeros(hours, token.length);
	},
	k: function(date, token, localize) {
		let hours = date.getHours();
		if (hours === 0) hours = 24;
		if (token === "ko") return localize.ordinalNumber(hours, { unit: "hour" });
		return addLeadingZeros(hours, token.length);
	},
	m: function(date, token, localize) {
		if (token === "mo") return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
		return lightFormatters.m(date, token);
	},
	s: function(date, token, localize) {
		if (token === "so") return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
		return lightFormatters.s(date, token);
	},
	S: function(date, token) {
		return lightFormatters.S(date, token);
	},
	X: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		if (timezoneOffset === 0) return "Z";
		switch (token) {
			case "X": return formatTimezoneWithOptionalMinutes(timezoneOffset);
			case "XXXX":
			case "XX": return formatTimezone(timezoneOffset);
			default: return formatTimezone(timezoneOffset, ":");
		}
	},
	x: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		switch (token) {
			case "x": return formatTimezoneWithOptionalMinutes(timezoneOffset);
			case "xxxx":
			case "xx": return formatTimezone(timezoneOffset);
			default: return formatTimezone(timezoneOffset, ":");
		}
	},
	O: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		switch (token) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + formatTimezoneShort(timezoneOffset, ":");
			default: return "GMT" + formatTimezone(timezoneOffset, ":");
		}
	},
	z: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		switch (token) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + formatTimezoneShort(timezoneOffset, ":");
			default: return "GMT" + formatTimezone(timezoneOffset, ":");
		}
	},
	t: function(date, token, _localize) {
		return addLeadingZeros(Math.trunc(date.getTime() / 1e3), token.length);
	},
	T: function(date, token, _localize) {
		return addLeadingZeros(date.getTime(), token.length);
	}
};
function formatTimezoneShort(offset, delimiter = "") {
	const sign = offset > 0 ? "-" : "+";
	const absOffset = Math.abs(offset);
	const hours = Math.trunc(absOffset / 60);
	const minutes = absOffset % 60;
	if (minutes === 0) return sign + String(hours);
	return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
	if (offset % 60 === 0) return (offset > 0 ? "-" : "+") + addLeadingZeros(Math.abs(offset) / 60, 2);
	return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
	const sign = offset > 0 ? "-" : "+";
	const absOffset = Math.abs(offset);
	const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
	const minutes = addLeadingZeros(absOffset % 60, 2);
	return sign + hours + delimiter + minutes;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/_lib/format/longFormatters.mjs
var dateLongFormatter = (pattern, formatLong) => {
	switch (pattern) {
		case "P": return formatLong.date({ width: "short" });
		case "PP": return formatLong.date({ width: "medium" });
		case "PPP": return formatLong.date({ width: "long" });
		default: return formatLong.date({ width: "full" });
	}
};
var timeLongFormatter = (pattern, formatLong) => {
	switch (pattern) {
		case "p": return formatLong.time({ width: "short" });
		case "pp": return formatLong.time({ width: "medium" });
		case "ppp": return formatLong.time({ width: "long" });
		default: return formatLong.time({ width: "full" });
	}
};
var dateTimeLongFormatter = (pattern, formatLong) => {
	const matchResult = pattern.match(/(P+)(p+)?/) || [];
	const datePattern = matchResult[1];
	const timePattern = matchResult[2];
	if (!timePattern) return dateLongFormatter(pattern, formatLong);
	let dateTimeFormat;
	switch (datePattern) {
		case "P":
			dateTimeFormat = formatLong.dateTime({ width: "short" });
			break;
		case "PP":
			dateTimeFormat = formatLong.dateTime({ width: "medium" });
			break;
		case "PPP":
			dateTimeFormat = formatLong.dateTime({ width: "long" });
			break;
		default:
			dateTimeFormat = formatLong.dateTime({ width: "full" });
			break;
	}
	return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
	p: timeLongFormatter,
	P: dateTimeLongFormatter
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/_lib/protectedTokens.mjs
var dayOfYearTokenRE = /^D+$/;
var weekYearTokenRE = /^Y+$/;
var throwTokens = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function isProtectedDayOfYearToken(token) {
	return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
	return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
	const _message = message(token, format, input);
	console.warn(_message);
	if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format, input) {
	const subject = token[0] === "Y" ? "years" : "days of the month";
	return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.mjs
var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp$2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp$1 = /^'([^]*?)'?$/;
var doubleQuoteRegExp$1 = /''/g;
var unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;
/**
* The {@link format} function options.
*/
/**
* @name format
* @alias formatDate
* @category Common Helpers
* @summary Format the date.
*
* @description
* Return the formatted date string in the given format. The result may vary by locale.
*
* > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
* > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* The characters wrapped between two single quotes characters (') are escaped.
* Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
* (see the last example)
*
* Format of the string is based on Unicode Technical Standard #35:
* https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
* with a few additions (see note 7 below the table).
*
* Accepted patterns:
* | Unit                            | Pattern | Result examples                   | Notes |
* |---------------------------------|---------|-----------------------------------|-------|
* | Era                             | G..GGG  | AD, BC                            |       |
* |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
* |                                 | GGGGG   | A, B                              |       |
* | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
* |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
* |                                 | yy      | 44, 01, 00, 17                    | 5     |
* |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
* |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
* |                                 | yyyyy   | ...                               | 3,5   |
* | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
* |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
* |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
* |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
* |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
* |                                 | YYYYY   | ...                               | 3,5   |
* | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
* |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
* |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
* |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
* |                                 | RRRRR   | ...                               | 3,5,7 |
* | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
* |                                 | uu      | -43, 01, 1900, 2017               | 5     |
* |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
* |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
* |                                 | uuuuu   | ...                               | 3,5   |
* | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
* |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
* |                                 | QQ      | 01, 02, 03, 04                    |       |
* |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
* |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
* | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
* |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
* |                                 | qq      | 01, 02, 03, 04                    |       |
* |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
* |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
* | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
* |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
* |                                 | MM      | 01, 02, ..., 12                   |       |
* |                                 | MMM     | Jan, Feb, ..., Dec                |       |
* |                                 | MMMM    | January, February, ..., December  | 2     |
* |                                 | MMMMM   | J, F, ..., D                      |       |
* | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
* |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
* |                                 | LL      | 01, 02, ..., 12                   |       |
* |                                 | LLL     | Jan, Feb, ..., Dec                |       |
* |                                 | LLLL    | January, February, ..., December  | 2     |
* |                                 | LLLLL   | J, F, ..., D                      |       |
* | Local week of year              | w       | 1, 2, ..., 53                     |       |
* |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
* |                                 | ww      | 01, 02, ..., 53                   |       |
* | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
* |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
* |                                 | II      | 01, 02, ..., 53                   | 7     |
* | Day of month                    | d       | 1, 2, ..., 31                     |       |
* |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
* |                                 | dd      | 01, 02, ..., 31                   |       |
* | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
* |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
* |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
* |                                 | DDD     | 001, 002, ..., 365, 366           |       |
* |                                 | DDDD    | ...                               | 3     |
* | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
* |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
* |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
* |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
* |                                 | ii      | 01, 02, ..., 07                   | 7     |
* |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
* |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
* |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
* |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
* | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
* |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
* |                                 | ee      | 02, 03, ..., 01                   |       |
* |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | eeeee   | M, T, W, T, F, S, S               |       |
* |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
* |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
* |                                 | cc      | 02, 03, ..., 01                   |       |
* |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | ccccc   | M, T, W, T, F, S, S               |       |
* |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | AM, PM                          | a..aa   | AM, PM                            |       |
* |                                 | aaa     | am, pm                            |       |
* |                                 | aaaa    | a.m., p.m.                        | 2     |
* |                                 | aaaaa   | a, p                              |       |
* | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
* |                                 | bbb     | am, pm, noon, midnight            |       |
* |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
* |                                 | bbbbb   | a, p, n, mi                       |       |
* | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
* |                                 | BBBB    | at night, in the morning, ...     | 2     |
* |                                 | BBBBB   | at night, in the morning, ...     |       |
* | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
* |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
* |                                 | hh      | 01, 02, ..., 11, 12               |       |
* | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
* |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
* |                                 | HH      | 00, 01, 02, ..., 23               |       |
* | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
* |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
* |                                 | KK      | 01, 02, ..., 11, 00               |       |
* | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
* |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
* |                                 | kk      | 24, 01, 02, ..., 23               |       |
* | Minute                          | m       | 0, 1, ..., 59                     |       |
* |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
* |                                 | mm      | 00, 01, ..., 59                   |       |
* | Second                          | s       | 0, 1, ..., 59                     |       |
* |                                 | so      | 0th, 1st, ..., 59th               | 7     |
* |                                 | ss      | 00, 01, ..., 59                   |       |
* | Fraction of second              | S       | 0, 1, ..., 9                      |       |
* |                                 | SS      | 00, 01, ..., 99                   |       |
* |                                 | SSS     | 000, 001, ..., 999                |       |
* |                                 | SSSS    | ...                               | 3     |
* | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
* |                                 | XX      | -0800, +0530, Z                   |       |
* |                                 | XXX     | -08:00, +05:30, Z                 |       |
* |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
* |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
* | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
* |                                 | xx      | -0800, +0530, +0000               |       |
* |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
* |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
* |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
* | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
* |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
* | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
* |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
* | Seconds timestamp               | t       | 512969520                         | 7     |
* |                                 | tt      | ...                               | 3,7   |
* | Milliseconds timestamp          | T       | 512969520900                      | 7     |
* |                                 | TT      | ...                               | 3,7   |
* | Long localized date             | P       | 04/29/1453                        | 7     |
* |                                 | PP      | Apr 29, 1453                      | 7     |
* |                                 | PPP     | April 29th, 1453                  | 7     |
* |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
* | Long localized time             | p       | 12:00 AM                          | 7     |
* |                                 | pp      | 12:00:00 AM                       | 7     |
* |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
* |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
* | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
* |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
* |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
* |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
* Notes:
* 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
*    are the same as "stand-alone" units, but are different in some languages.
*    "Formatting" units are declined according to the rules of the language
*    in the context of a date. "Stand-alone" units are always nominative singular:
*
*    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
*
*    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
*
* 2. Any sequence of the identical letters is a pattern, unless it is escaped by
*    the single quote characters (see below).
*    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
*    the output will be the same as default pattern for this unit, usually
*    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
*    are marked with "2" in the last column of the table.
*
*    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
*
*    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
*
*    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
*
*    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
*
*    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
*
* 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
*    The output will be padded with zeros to match the length of the pattern.
*
*    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
*
* 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
*    These tokens represent the shortest form of the quarter.
*
* 5. The main difference between `y` and `u` patterns are B.C. years:
*
*    | Year | `y` | `u` |
*    |------|-----|-----|
*    | AC 1 |   1 |   1 |
*    | BC 1 |   1 |   0 |
*    | BC 2 |   2 |  -1 |
*
*    Also `yy` always returns the last two digits of a year,
*    while `uu` pads single digit years to 2 characters and returns other years unchanged:
*
*    | Year | `yy` | `uu` |
*    |------|------|------|
*    | 1    |   01 |   01 |
*    | 14   |   14 |   14 |
*    | 376  |   76 |  376 |
*    | 1453 |   53 | 1453 |
*
*    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
*    except local week-numbering years are dependent on `options.weekStartsOn`
*    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
*    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
*
* 6. Specific non-location timezones are currently unavailable in `date-fns`,
*    so right now these tokens fall back to GMT timezones.
*
* 7. These patterns are not in the Unicode Technical Standard #35:
*    - `i`: ISO day of week
*    - `I`: ISO week of year
*    - `R`: ISO week-numbering year
*    - `t`: seconds timestamp
*    - `T`: milliseconds timestamp
*    - `o`: ordinal number modifier
*    - `P`: long localized date
*    - `p`: long localized time
*
* 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
*    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
*    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The original date
* @param format - The string of tokens
* @param options - An object with options
*
* @returns The formatted date string
*
* @throws `date` must not be Invalid Date
* @throws `options.locale` must contain `localize` property
* @throws `options.locale` must contain `formatLong` property
* @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws format string contains an unescaped latin alphabet character
*
* @example
* // Represent 11 February 2014 in middle-endian format:
* const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
* //=> '02/11/2014'
*
* @example
* // Represent 2 July 2014 in Esperanto:
* import { eoLocale } from 'date-fns/locale/eo'
* const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
*   locale: eoLocale
* })
* //=> '2-a de julio 2014'
*
* @example
* // Escape string by single quote characters:
* const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
* //=> "3 o'clock"
*/
function format(date, formatStr, options) {
	const defaultOptions = getDefaultOptions$1();
	const locale = options?.locale ?? defaultOptions.locale ?? enUS;
	const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	const originalDate = toDate(date);
	if (!isValid$1(originalDate)) throw new RangeError("Invalid time value");
	let parts = formatStr.match(longFormattingTokensRegExp$2).map((substring) => {
		const firstCharacter = substring[0];
		if (firstCharacter === "p" || firstCharacter === "P") {
			const longFormatter = longFormatters[firstCharacter];
			return longFormatter(substring, locale.formatLong);
		}
		return substring;
	}).join("").match(formattingTokensRegExp$1).map((substring) => {
		if (substring === "''") return {
			isToken: false,
			value: "'"
		};
		const firstCharacter = substring[0];
		if (firstCharacter === "'") return {
			isToken: false,
			value: cleanEscapedString$1(substring)
		};
		if (formatters[firstCharacter]) return {
			isToken: true,
			value: substring
		};
		if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
		return {
			isToken: false,
			value: substring
		};
	});
	if (locale.localize.preprocessor) parts = locale.localize.preprocessor(originalDate, parts);
	const formatterOptions = {
		firstWeekContainsDate,
		weekStartsOn,
		locale
	};
	return parts.map((part) => {
		if (!part.isToken) return part.value;
		const token = part.value;
		if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) warnOrThrowProtectedError(token, formatStr, String(date));
		const formatter = formatters[token[0]];
		return formatter(originalDate, token, locale.localize, formatterOptions);
	}).join("");
}
function cleanEscapedString$1(input) {
	const matched = input.match(escapedStringRegExp$1);
	if (!matched) return input;
	return matched[1].replace(doubleQuoteRegExp$1, "'");
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getDate.mjs
/**
* @name getDate
* @category Day Helpers
* @summary Get the day of the month of the given date.
*
* @description
* Get the day of the month of the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The given date
*
* @returns The day of month
*
* @example
* // Which day of the month is 29 February 2012?
* const result = getDate(new Date(2012, 1, 29))
* //=> 29
*/
function getDate(date) {
	return toDate(date).getDate();
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getDay.mjs
/**
* @name getDay
* @category Weekday Helpers
* @summary Get the day of the week of the given date.
*
* @description
* Get the day of the week of the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The given date
*
* @returns The day of week, 0 represents Sunday
*
* @example
* // Which day of the week is 29 February 2012?
* const result = getDay(new Date(2012, 1, 29))
* //=> 3
*/
function getDay(date) {
	return toDate(date).getDay();
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getDaysInMonth.mjs
/**
* @name getDaysInMonth
* @category Month Helpers
* @summary Get the number of days in a month of the given date.
*
* @description
* Get the number of days in a month of the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The given date
*
* @returns The number of days in a month
*
* @example
* // How many days are in February 2000?
* const result = getDaysInMonth(new Date(2000, 1))
* //=> 29
*/
function getDaysInMonth(date) {
	const _date = toDate(date);
	const year = _date.getFullYear();
	const monthIndex = _date.getMonth();
	const lastDayOfMonth = constructFrom(date, 0);
	lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
	lastDayOfMonth.setHours(0, 0, 0, 0);
	return lastDayOfMonth.getDate();
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getDefaultOptions.mjs
/**
* @name getDefaultOptions
* @category Common Helpers
* @summary Get default options.
* @pure false
*
* @description
* Returns an object that contains defaults for
* `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
* arguments for all functions.
*
* You can change these with [setDefaultOptions](https://date-fns.org/docs/setDefaultOptions).
*
* @returns The default options
*
* @example
* const result = getDefaultOptions()
* //=> {}
*
* @example
* setDefaultOptions({ weekStarsOn: 1, firstWeekContainsDate: 4 })
* const result = getDefaultOptions()
* //=> { weekStarsOn: 1, firstWeekContainsDate: 4 }
*/
function getDefaultOptions() {
	return Object.assign({}, getDefaultOptions$1());
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getHours.mjs
/**
* @name getHours
* @category Hour Helpers
* @summary Get the hours of the given date.
*
* @description
* Get the hours of the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The given date
*
* @returns The hours
*
* @example
* // Get the hours of 29 February 2012 11:45:00:
* const result = getHours(new Date(2012, 1, 29, 11, 45))
* //=> 11
*/
function getHours(date) {
	return toDate(date).getHours();
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getISODay.mjs
/**
* @name getISODay
* @category Weekday Helpers
* @summary Get the day of the ISO week of the given date.
*
* @description
* Get the day of the ISO week of the given date,
* which is 7 for Sunday, 1 for Monday etc.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The given date
*
* @returns The day of ISO week
*
* @example
* // Which day of the ISO week is 26 February 2012?
* const result = getISODay(new Date(2012, 1, 26))
* //=> 7
*/
function getISODay(date) {
	let day = toDate(date).getDay();
	if (day === 0) day = 7;
	return day;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getMinutes.mjs
/**
* @name getMinutes
* @category Minute Helpers
* @summary Get the minutes of the given date.
*
* @description
* Get the minutes of the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The given date
*
* @returns The minutes
*
* @example
* // Get the minutes of 29 February 2012 11:45:05:
* const result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
* //=> 45
*/
function getMinutes(date) {
	return toDate(date).getMinutes();
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getMonth.mjs
/**
* @name getMonth
* @category Month Helpers
* @summary Get the month of the given date.
*
* @description
* Get the month of the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The given date
*
* @returns The month index (0-11)
*
* @example
* // Which month is 29 February 2012?
* const result = getMonth(new Date(2012, 1, 29))
* //=> 1
*/
function getMonth(date) {
	return toDate(date).getMonth();
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getSeconds.mjs
/**
* @name getSeconds
* @category Second Helpers
* @summary Get the seconds of the given date.
*
* @description
* Get the seconds of the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The given date
*
* @returns The seconds
*
* @example
* // Get the seconds of 29 February 2012 11:45:05.123:
* const result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
* //=> 5
*/
function getSeconds(date) {
	return toDate(date).getSeconds();
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getTime.mjs
/**
* @name getTime
* @category Timestamp Helpers
* @summary Get the milliseconds timestamp of the given date.
*
* @description
* Get the milliseconds timestamp of the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The given date
*
* @returns The timestamp
*
* @example
* // Get the timestamp of 29 February 2012 11:45:05.123:
* const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
* //=> 1330515905123
*/
function getTime(date) {
	return toDate(date).getTime();
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getYear.mjs
/**
* @name getYear
* @category Year Helpers
* @summary Get the year of the given date.
*
* @description
* Get the year of the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The given date
*
* @returns The year
*
* @example
* // Which year is 2 July 2014?
* const result = getYear(new Date(2014, 6, 2))
* //=> 2014
*/
function getYear(date) {
	return toDate(date).getFullYear();
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isAfter.mjs
/**
* @name isAfter
* @category Common Helpers
* @summary Is the first date after the second one?
*
* @description
* Is the first date after the second one?
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date that should be after the other one to return true
* @param dateToCompare - The date to compare with
*
* @returns The first date is after the second date
*
* @example
* // Is 10 July 1989 after 11 February 1987?
* const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
* //=> true
*/
function isAfter(date, dateToCompare) {
	const _date = toDate(date);
	const _dateToCompare = toDate(dateToCompare);
	return _date.getTime() > _dateToCompare.getTime();
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isBefore.mjs
/**
* @name isBefore
* @category Common Helpers
* @summary Is the first date before the second one?
*
* @description
* Is the first date before the second one?
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date that should be before the other one to return true
* @param dateToCompare - The date to compare with
*
* @returns The first date is before the second date
*
* @example
* // Is 10 July 1989 before 11 February 1987?
* const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
* //=> false
*/
function isBefore(date, dateToCompare) {
	const _date = toDate(date);
	const _dateToCompare = toDate(dateToCompare);
	return +_date < +_dateToCompare;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isEqual.mjs
/**
* @name isEqual
* @category Common Helpers
* @summary Are the given dates equal?
*
* @description
* Are the given dates equal?
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param dateLeft - The first date to compare
* @param dateRight - The second date to compare
*
* @returns The dates are equal
*
* @example
* // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
* const result = isEqual(
*   new Date(2014, 6, 2, 6, 30, 45, 0),
*   new Date(2014, 6, 2, 6, 30, 45, 500)
* )
* //=> false
*/
function isEqual$1(leftDate, rightDate) {
	const _dateLeft = toDate(leftDate);
	const _dateRight = toDate(rightDate);
	return +_dateLeft === +_dateRight;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/transpose.mjs
/**
* @name transpose
* @category Generic Helpers
* @summary Transpose the date to the given constructor.
*
* @description
* The function transposes the date to the given constructor. It helps you
* to transpose the date in the system time zone to say `UTCDate` or any other
* date extension.
*
* @typeParam DateInputType - The input `Date` type derived from the passed argument.
* @typeParam DateOutputType - The output `Date` type derived from the passed constructor.
*
* @param fromDate - The date to use values from
* @param constructor - The date constructor to use
*
* @returns Date transposed to the given constructor
*
* @example
* // Create July 10, 2022 00:00 in locale time zone
* const date = new Date(2022, 6, 10)
* //=> 'Sun Jul 10 2022 00:00:00 GMT+0800 (Singapore Standard Time)'
*
* @example
* // Transpose the date to July 10, 2022 00:00 in UTC
* transpose(date, UTCDate)
* //=> 'Sun Jul 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
*/
function transpose(fromDate, constructor) {
	const date = constructor instanceof Date ? constructFrom(constructor, 0) : new constructor(0);
	date.setFullYear(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
	date.setHours(fromDate.getHours(), fromDate.getMinutes(), fromDate.getSeconds(), fromDate.getMilliseconds());
	return date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/Setter.mjs
var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = class {
	subPriority = 0;
	validate(_utcDate, _options) {
		return true;
	}
};
var ValueSetter = class extends Setter {
	constructor(value, validateValue, setValue, priority, subPriority) {
		super();
		this.value = value;
		this.validateValue = validateValue;
		this.setValue = setValue;
		this.priority = priority;
		if (subPriority) this.subPriority = subPriority;
	}
	validate(date, options) {
		return this.validateValue(date, this.value, options);
	}
	set(date, flags, options) {
		return this.setValue(date, flags, this.value, options);
	}
};
var DateToSystemTimezoneSetter = class extends Setter {
	priority = TIMEZONE_UNIT_PRIORITY;
	subPriority = -1;
	set(date, flags) {
		if (flags.timestampIsSet) return date;
		return constructFrom(date, transpose(date, Date));
	}
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/Parser.mjs
var Parser = class {
	run(dateString, token, match, options) {
		const result = this.parse(dateString, token, match, options);
		if (!result) return null;
		return {
			setter: new ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
			rest: result.rest
		};
	}
	validate(_utcDate, _value, _options) {
		return true;
	}
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/EraParser.mjs
var EraParser = class extends Parser {
	priority = 140;
	parse(dateString, token, match) {
		switch (token) {
			case "G":
			case "GG":
			case "GGG": return match.era(dateString, { width: "abbreviated" }) || match.era(dateString, { width: "narrow" });
			case "GGGGG": return match.era(dateString, { width: "narrow" });
			default: return match.era(dateString, { width: "wide" }) || match.era(dateString, { width: "abbreviated" }) || match.era(dateString, { width: "narrow" });
		}
	}
	set(date, flags, value) {
		flags.era = value;
		date.setFullYear(value, 0, 1);
		date.setHours(0, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"R",
		"u",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/constants.mjs
var numericPatterns = {
	month: /^(1[0-2]|0?\d)/,
	date: /^(3[0-1]|[0-2]?\d)/,
	dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
	week: /^(5[0-3]|[0-4]?\d)/,
	hour23h: /^(2[0-3]|[0-1]?\d)/,
	hour24h: /^(2[0-4]|[0-1]?\d)/,
	hour11h: /^(1[0-1]|0?\d)/,
	hour12h: /^(1[0-2]|0?\d)/,
	minute: /^[0-5]?\d/,
	second: /^[0-5]?\d/,
	singleDigit: /^\d/,
	twoDigits: /^\d{1,2}/,
	threeDigits: /^\d{1,3}/,
	fourDigits: /^\d{1,4}/,
	anyDigitsSigned: /^-?\d+/,
	singleDigitSigned: /^-?\d/,
	twoDigitsSigned: /^-?\d{1,2}/,
	threeDigitsSigned: /^-?\d{1,3}/,
	fourDigitsSigned: /^-?\d{1,4}/
};
var timezonePatterns = {
	basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
	basic: /^([+-])(\d{2})(\d{2})|Z/,
	basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
	extended: /^([+-])(\d{2}):(\d{2})|Z/,
	extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/utils.mjs
function mapValue(parseFnResult, mapFn) {
	if (!parseFnResult) return parseFnResult;
	return {
		value: mapFn(parseFnResult.value),
		rest: parseFnResult.rest
	};
}
function parseNumericPattern(pattern, dateString) {
	const matchResult = dateString.match(pattern);
	if (!matchResult) return null;
	return {
		value: parseInt(matchResult[0], 10),
		rest: dateString.slice(matchResult[0].length)
	};
}
function parseTimezonePattern(pattern, dateString) {
	const matchResult = dateString.match(pattern);
	if (!matchResult) return null;
	if (matchResult[0] === "Z") return {
		value: 0,
		rest: dateString.slice(1)
	};
	const sign = matchResult[1] === "+" ? 1 : -1;
	const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
	const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
	const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
	return {
		value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
		rest: dateString.slice(matchResult[0].length)
	};
}
function parseAnyDigitsSigned(dateString) {
	return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
	switch (n) {
		case 1: return parseNumericPattern(numericPatterns.singleDigit, dateString);
		case 2: return parseNumericPattern(numericPatterns.twoDigits, dateString);
		case 3: return parseNumericPattern(numericPatterns.threeDigits, dateString);
		case 4: return parseNumericPattern(numericPatterns.fourDigits, dateString);
		default: return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
	}
}
function parseNDigitsSigned(n, dateString) {
	switch (n) {
		case 1: return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
		case 2: return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
		case 3: return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
		case 4: return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
		default: return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
	}
}
function dayPeriodEnumToHours(dayPeriod) {
	switch (dayPeriod) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
	const isCommonEra = currentYear > 0;
	const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
	let result;
	if (absCurrentYear <= 50) result = twoDigitYear || 100;
	else {
		const rangeEnd = absCurrentYear + 50;
		const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
		const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
		result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
	}
	return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex$1(year) {
	return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/YearParser.mjs
var YearParser = class extends Parser {
	priority = 130;
	incompatibleTokens = [
		"Y",
		"R",
		"u",
		"w",
		"I",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
	parse(dateString, token, match) {
		const valueCallback = (year) => ({
			year,
			isTwoDigitYear: token === "yy"
		});
		switch (token) {
			case "y": return mapValue(parseNDigits(4, dateString), valueCallback);
			case "yo": return mapValue(match.ordinalNumber(dateString, { unit: "year" }), valueCallback);
			default: return mapValue(parseNDigits(token.length, dateString), valueCallback);
		}
	}
	validate(_date, value) {
		return value.isTwoDigitYear || value.year > 0;
	}
	set(date, flags, value) {
		const currentYear = date.getFullYear();
		if (value.isTwoDigitYear) {
			const normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
			date.setFullYear(normalizedTwoDigitYear, 0, 1);
			date.setHours(0, 0, 0, 0);
			return date;
		}
		const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
		date.setFullYear(year, 0, 1);
		date.setHours(0, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.mjs
var LocalWeekYearParser = class extends Parser {
	priority = 130;
	parse(dateString, token, match) {
		const valueCallback = (year) => ({
			year,
			isTwoDigitYear: token === "YY"
		});
		switch (token) {
			case "Y": return mapValue(parseNDigits(4, dateString), valueCallback);
			case "Yo": return mapValue(match.ordinalNumber(dateString, { unit: "year" }), valueCallback);
			default: return mapValue(parseNDigits(token.length, dateString), valueCallback);
		}
	}
	validate(_date, value) {
		return value.isTwoDigitYear || value.year > 0;
	}
	set(date, flags, value, options) {
		const currentYear = getWeekYear(date, options);
		if (value.isTwoDigitYear) {
			const normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
			date.setFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
			date.setHours(0, 0, 0, 0);
			return startOfWeek(date, options);
		}
		const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
		date.setFullYear(year, 0, options.firstWeekContainsDate);
		date.setHours(0, 0, 0, 0);
		return startOfWeek(date, options);
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"Q",
		"q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"i",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.mjs
var ISOWeekYearParser = class extends Parser {
	priority = 130;
	parse(dateString, token) {
		if (token === "R") return parseNDigitsSigned(4, dateString);
		return parseNDigitsSigned(token.length, dateString);
	}
	set(date, _flags, value) {
		const firstWeekOfYear = constructFrom(date, 0);
		firstWeekOfYear.setFullYear(value, 0, 4);
		firstWeekOfYear.setHours(0, 0, 0, 0);
		return startOfISOWeek(firstWeekOfYear);
	}
	incompatibleTokens = [
		"G",
		"y",
		"Y",
		"u",
		"Q",
		"q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.mjs
var ExtendedYearParser = class extends Parser {
	priority = 130;
	parse(dateString, token) {
		if (token === "u") return parseNDigitsSigned(4, dateString);
		return parseNDigitsSigned(token.length, dateString);
	}
	set(date, _flags, value) {
		date.setFullYear(value, 0, 1);
		date.setHours(0, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"G",
		"y",
		"Y",
		"R",
		"w",
		"I",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/QuarterParser.mjs
var QuarterParser = class extends Parser {
	priority = 120;
	parse(dateString, token, match) {
		switch (token) {
			case "Q":
			case "QQ": return parseNDigits(token.length, dateString);
			case "Qo": return match.ordinalNumber(dateString, { unit: "quarter" });
			case "QQQ": return match.quarter(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.quarter(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "QQQQQ": return match.quarter(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.quarter(dateString, {
				width: "wide",
				context: "formatting"
			}) || match.quarter(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.quarter(dateString, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(_date, value) {
		return value >= 1 && value <= 4;
	}
	set(date, _flags, value) {
		date.setMonth((value - 1) * 3, 1);
		date.setHours(0, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.mjs
var StandAloneQuarterParser = class extends Parser {
	priority = 120;
	parse(dateString, token, match) {
		switch (token) {
			case "q":
			case "qq": return parseNDigits(token.length, dateString);
			case "qo": return match.ordinalNumber(dateString, { unit: "quarter" });
			case "qqq": return match.quarter(dateString, {
				width: "abbreviated",
				context: "standalone"
			}) || match.quarter(dateString, {
				width: "narrow",
				context: "standalone"
			});
			case "qqqqq": return match.quarter(dateString, {
				width: "narrow",
				context: "standalone"
			});
			default: return match.quarter(dateString, {
				width: "wide",
				context: "standalone"
			}) || match.quarter(dateString, {
				width: "abbreviated",
				context: "standalone"
			}) || match.quarter(dateString, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(_date, value) {
		return value >= 1 && value <= 4;
	}
	set(date, _flags, value) {
		date.setMonth((value - 1) * 3, 1);
		date.setHours(0, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"Q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/MonthParser.mjs
var MonthParser = class extends Parser {
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"L",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
	priority = 110;
	parse(dateString, token, match) {
		const valueCallback = (value) => value - 1;
		switch (token) {
			case "M": return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
			case "MM": return mapValue(parseNDigits(2, dateString), valueCallback);
			case "Mo": return mapValue(match.ordinalNumber(dateString, { unit: "month" }), valueCallback);
			case "MMM": return match.month(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.month(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "MMMMM": return match.month(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.month(dateString, {
				width: "wide",
				context: "formatting"
			}) || match.month(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.month(dateString, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 11;
	}
	set(date, _flags, value) {
		date.setMonth(value, 1);
		date.setHours(0, 0, 0, 0);
		return date;
	}
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.mjs
var StandAloneMonthParser = class extends Parser {
	priority = 110;
	parse(dateString, token, match) {
		const valueCallback = (value) => value - 1;
		switch (token) {
			case "L": return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
			case "LL": return mapValue(parseNDigits(2, dateString), valueCallback);
			case "Lo": return mapValue(match.ordinalNumber(dateString, { unit: "month" }), valueCallback);
			case "LLL": return match.month(dateString, {
				width: "abbreviated",
				context: "standalone"
			}) || match.month(dateString, {
				width: "narrow",
				context: "standalone"
			});
			case "LLLLL": return match.month(dateString, {
				width: "narrow",
				context: "standalone"
			});
			default: return match.month(dateString, {
				width: "wide",
				context: "standalone"
			}) || match.month(dateString, {
				width: "abbreviated",
				context: "standalone"
			}) || match.month(dateString, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 11;
	}
	set(date, _flags, value) {
		date.setMonth(value, 1);
		date.setHours(0, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"M",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setWeek.mjs
/**
* The {@link setWeek} function options.
*/
/**
* @name setWeek
* @category Week Helpers
* @summary Set the local week to the given date.
*
* @description
* Set the local week to the given date, saving the weekday number.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param week - The week of the new date
* @param options - An object with options
*
* @returns The new date with the local week set
*
* @example
* // Set the 1st week to 2 January 2005 with default options:
* const result = setWeek(new Date(2005, 0, 2), 1)
* //=> Sun Dec 26 2004 00:00:00
*
* @example
* // Set the 1st week to 2 January 2005,
* // if Monday is the first day of the week,
* // and the first week of the year always contains 4 January:
* const result = setWeek(new Date(2005, 0, 2), 1, {
*   weekStartsOn: 1,
*   firstWeekContainsDate: 4
* })
* //=> Sun Jan 4 2004 00:00:00
*/
function setWeek(date, week, options) {
	const _date = toDate(date);
	const diff = getWeek$1(_date, options) - week;
	_date.setDate(_date.getDate() - diff * 7);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.mjs
var LocalWeekParser = class extends Parser {
	priority = 100;
	parse(dateString, token, match) {
		switch (token) {
			case "w": return parseNumericPattern(numericPatterns.week, dateString);
			case "wo": return match.ordinalNumber(dateString, { unit: "week" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 1 && value <= 53;
	}
	set(date, _flags, value, options) {
		return startOfWeek(setWeek(date, value, options), options);
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"i",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setISOWeek.mjs
/**
* @name setISOWeek
* @category ISO Week Helpers
* @summary Set the ISO week to the given date.
*
* @description
* Set the ISO week to the given date, saving the weekday number.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param week - The ISO week of the new date
*
* @returns The new date with the ISO week set
*
* @example
* // Set the 53rd ISO week to 7 August 2004:
* const result = setISOWeek(new Date(2004, 7, 7), 53)
* //=> Sat Jan 01 2005 00:00:00
*/
function setISOWeek(date, week) {
	const _date = toDate(date);
	const diff = getISOWeek(_date) - week;
	_date.setDate(_date.getDate() - diff * 7);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.mjs
var ISOWeekParser = class extends Parser {
	priority = 100;
	parse(dateString, token, match) {
		switch (token) {
			case "I": return parseNumericPattern(numericPatterns.week, dateString);
			case "Io": return match.ordinalNumber(dateString, { unit: "week" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 1 && value <= 53;
	}
	set(date, _flags, value) {
		return startOfISOWeek(setISOWeek(date, value));
	}
	incompatibleTokens = [
		"y",
		"Y",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/DateParser.mjs
var DAYS_IN_MONTH = [
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
];
var DAYS_IN_MONTH_LEAP_YEAR = [
	31,
	29,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
];
var DateParser = class extends Parser {
	priority = 90;
	subPriority = 1;
	parse(dateString, token, match) {
		switch (token) {
			case "d": return parseNumericPattern(numericPatterns.date, dateString);
			case "do": return match.ordinalNumber(dateString, { unit: "date" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(date, value) {
		const isLeapYear = isLeapYearIndex$1(date.getFullYear());
		const month = date.getMonth();
		if (isLeapYear) return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
		else return value >= 1 && value <= DAYS_IN_MONTH[month];
	}
	set(date, _flags, value) {
		date.setDate(value);
		date.setHours(0, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"w",
		"I",
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.mjs
var DayOfYearParser = class extends Parser {
	priority = 90;
	subpriority = 1;
	parse(dateString, token, match) {
		switch (token) {
			case "D":
			case "DD": return parseNumericPattern(numericPatterns.dayOfYear, dateString);
			case "Do": return match.ordinalNumber(dateString, { unit: "date" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(date, value) {
		if (isLeapYearIndex$1(date.getFullYear())) return value >= 1 && value <= 366;
		else return value >= 1 && value <= 365;
	}
	set(date, _flags, value) {
		date.setMonth(0, value);
		date.setHours(0, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"Y",
		"R",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"I",
		"d",
		"E",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setDay.mjs
/**
* The {@link setDay} function options.
*/
/**
* @name setDay
* @category Weekday Helpers
* @summary Set the day of the week to the given date.
*
* @description
* Set the day of the week to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param day - The day of the week of the new date
* @param options - An object with options.
*
* @returns The new date with the day of the week set
*
* @example
* // Set week day to Sunday, with the default weekStartsOn of Sunday:
* const result = setDay(new Date(2014, 8, 1), 0)
* //=> Sun Aug 31 2014 00:00:00
*
* @example
* // Set week day to Sunday, with a weekStartsOn of Monday:
* const result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
* //=> Sun Sep 07 2014 00:00:00
*/
function setDay(date, day, options) {
	const defaultOptions = getDefaultOptions$1();
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	const _date = toDate(date);
	const currentDay = _date.getDay();
	const dayIndex = (day % 7 + 7) % 7;
	const delta = 7 - weekStartsOn;
	return addDays(_date, day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/DayParser.mjs
var DayParser = class extends Parser {
	priority = 90;
	parse(dateString, token, match) {
		switch (token) {
			case "E":
			case "EE":
			case "EEE": return match.day(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEE": return match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.day(dateString, {
				width: "wide",
				context: "formatting"
			}) || match.day(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 6;
	}
	set(date, _flags, value, options) {
		date = setDay(date, value, options);
		date.setHours(0, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"D",
		"i",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/LocalDayParser.mjs
var LocalDayParser = class extends Parser {
	priority = 90;
	parse(dateString, token, match, options) {
		const valueCallback = (value) => {
			const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
			return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
		};
		switch (token) {
			case "e":
			case "ee": return mapValue(parseNDigits(token.length, dateString), valueCallback);
			case "eo": return mapValue(match.ordinalNumber(dateString, { unit: "day" }), valueCallback);
			case "eee": return match.day(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeee": return match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.day(dateString, {
				width: "wide",
				context: "formatting"
			}) || match.day(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 6;
	}
	set(date, _flags, value, options) {
		date = setDay(date, value, options);
		date.setHours(0, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"E",
		"i",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.mjs
var StandAloneLocalDayParser = class extends Parser {
	priority = 90;
	parse(dateString, token, match, options) {
		const valueCallback = (value) => {
			const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
			return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
		};
		switch (token) {
			case "c":
			case "cc": return mapValue(parseNDigits(token.length, dateString), valueCallback);
			case "co": return mapValue(match.ordinalNumber(dateString, { unit: "day" }), valueCallback);
			case "ccc": return match.day(dateString, {
				width: "abbreviated",
				context: "standalone"
			}) || match.day(dateString, {
				width: "short",
				context: "standalone"
			}) || match.day(dateString, {
				width: "narrow",
				context: "standalone"
			});
			case "ccccc": return match.day(dateString, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return match.day(dateString, {
				width: "short",
				context: "standalone"
			}) || match.day(dateString, {
				width: "narrow",
				context: "standalone"
			});
			default: return match.day(dateString, {
				width: "wide",
				context: "standalone"
			}) || match.day(dateString, {
				width: "abbreviated",
				context: "standalone"
			}) || match.day(dateString, {
				width: "short",
				context: "standalone"
			}) || match.day(dateString, {
				width: "narrow",
				context: "standalone"
			});
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 6;
	}
	set(date, _flags, value, options) {
		date = setDay(date, value, options);
		date.setHours(0, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"y",
		"R",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"I",
		"d",
		"D",
		"E",
		"i",
		"e",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setISODay.mjs
/**
* @name setISODay
* @category Weekday Helpers
* @summary Set the day of the ISO week to the given date.
*
* @description
* Set the day of the ISO week to the given date.
* ISO week starts with Monday.
* 7 is the index of Sunday, 1 is the index of Monday etc.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param day - The day of the ISO week of the new date
*
* @returns The new date with the day of the ISO week set
*
* @example
* // Set Sunday to 1 September 2014:
* const result = setISODay(new Date(2014, 8, 1), 7)
* //=> Sun Sep 07 2014 00:00:00
*/
function setISODay(date, day) {
	const _date = toDate(date);
	return addDays(_date, day - getISODay(_date));
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/ISODayParser.mjs
var ISODayParser = class extends Parser {
	priority = 90;
	parse(dateString, token, match) {
		const valueCallback = (value) => {
			if (value === 0) return 7;
			return value;
		};
		switch (token) {
			case "i":
			case "ii": return parseNDigits(token.length, dateString);
			case "io": return match.ordinalNumber(dateString, { unit: "day" });
			case "iii": return mapValue(match.day(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			}), valueCallback);
			case "iiiii": return mapValue(match.day(dateString, {
				width: "narrow",
				context: "formatting"
			}), valueCallback);
			case "iiiiii": return mapValue(match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			}), valueCallback);
			default: return mapValue(match.day(dateString, {
				width: "wide",
				context: "formatting"
			}) || match.day(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.day(dateString, {
				width: "short",
				context: "formatting"
			}) || match.day(dateString, {
				width: "narrow",
				context: "formatting"
			}), valueCallback);
		}
	}
	validate(_date, value) {
		return value >= 1 && value <= 7;
	}
	set(date, _flags, value) {
		date = setISODay(date, value);
		date.setHours(0, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"y",
		"Y",
		"u",
		"q",
		"Q",
		"M",
		"L",
		"w",
		"d",
		"D",
		"E",
		"e",
		"c",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/AMPMParser.mjs
var AMPMParser = class extends Parser {
	priority = 80;
	parse(dateString, token, match) {
		switch (token) {
			case "a":
			case "aa":
			case "aaa": return match.dayPeriod(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "aaaaa": return match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.dayPeriod(dateString, {
				width: "wide",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(date, _flags, value) {
		date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"b",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.mjs
var AMPMMidnightParser = class extends Parser {
	priority = 80;
	parse(dateString, token, match) {
		switch (token) {
			case "b":
			case "bb":
			case "bbb": return match.dayPeriod(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "bbbbb": return match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.dayPeriod(dateString, {
				width: "wide",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(date, _flags, value) {
		date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"a",
		"B",
		"H",
		"k",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.mjs
var DayPeriodParser = class extends Parser {
	priority = 80;
	parse(dateString, token, match) {
		switch (token) {
			case "B":
			case "BB":
			case "BBB": return match.dayPeriod(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			case "BBBBB": return match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
			default: return match.dayPeriod(dateString, {
				width: "wide",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "abbreviated",
				context: "formatting"
			}) || match.dayPeriod(dateString, {
				width: "narrow",
				context: "formatting"
			});
		}
	}
	set(date, _flags, value) {
		date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"a",
		"b",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.mjs
var Hour1to12Parser = class extends Parser {
	priority = 70;
	parse(dateString, token, match) {
		switch (token) {
			case "h": return parseNumericPattern(numericPatterns.hour12h, dateString);
			case "ho": return match.ordinalNumber(dateString, { unit: "hour" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 1 && value <= 12;
	}
	set(date, _flags, value) {
		const isPM = date.getHours() >= 12;
		if (isPM && value < 12) date.setHours(value + 12, 0, 0, 0);
		else if (!isPM && value === 12) date.setHours(0, 0, 0, 0);
		else date.setHours(value, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"H",
		"K",
		"k",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.mjs
var Hour0to23Parser = class extends Parser {
	priority = 70;
	parse(dateString, token, match) {
		switch (token) {
			case "H": return parseNumericPattern(numericPatterns.hour23h, dateString);
			case "Ho": return match.ordinalNumber(dateString, { unit: "hour" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 23;
	}
	set(date, _flags, value) {
		date.setHours(value, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"a",
		"b",
		"h",
		"K",
		"k",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.mjs
var Hour0To11Parser = class extends Parser {
	priority = 70;
	parse(dateString, token, match) {
		switch (token) {
			case "K": return parseNumericPattern(numericPatterns.hour11h, dateString);
			case "Ko": return match.ordinalNumber(dateString, { unit: "hour" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 11;
	}
	set(date, _flags, value) {
		if (date.getHours() >= 12 && value < 12) date.setHours(value + 12, 0, 0, 0);
		else date.setHours(value, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"h",
		"H",
		"k",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.mjs
var Hour1To24Parser = class extends Parser {
	priority = 70;
	parse(dateString, token, match) {
		switch (token) {
			case "k": return parseNumericPattern(numericPatterns.hour24h, dateString);
			case "ko": return match.ordinalNumber(dateString, { unit: "hour" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 1 && value <= 24;
	}
	set(date, _flags, value) {
		const hours = value <= 24 ? value % 24 : value;
		date.setHours(hours, 0, 0, 0);
		return date;
	}
	incompatibleTokens = [
		"a",
		"b",
		"h",
		"H",
		"K",
		"t",
		"T"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/MinuteParser.mjs
var MinuteParser = class extends Parser {
	priority = 60;
	parse(dateString, token, match) {
		switch (token) {
			case "m": return parseNumericPattern(numericPatterns.minute, dateString);
			case "mo": return match.ordinalNumber(dateString, { unit: "minute" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 59;
	}
	set(date, _flags, value) {
		date.setMinutes(value, 0, 0);
		return date;
	}
	incompatibleTokens = ["t", "T"];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/SecondParser.mjs
var SecondParser = class extends Parser {
	priority = 50;
	parse(dateString, token, match) {
		switch (token) {
			case "s": return parseNumericPattern(numericPatterns.second, dateString);
			case "so": return match.ordinalNumber(dateString, { unit: "second" });
			default: return parseNDigits(token.length, dateString);
		}
	}
	validate(_date, value) {
		return value >= 0 && value <= 59;
	}
	set(date, _flags, value) {
		date.setSeconds(value, 0);
		return date;
	}
	incompatibleTokens = ["t", "T"];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.mjs
var FractionOfSecondParser = class extends Parser {
	priority = 30;
	parse(dateString, token) {
		const valueCallback = (value) => Math.trunc(value * Math.pow(10, -token.length + 3));
		return mapValue(parseNDigits(token.length, dateString), valueCallback);
	}
	set(date, _flags, value) {
		date.setMilliseconds(value);
		return date;
	}
	incompatibleTokens = ["t", "T"];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.mjs
var ISOTimezoneWithZParser = class extends Parser {
	priority = 10;
	parse(dateString, token) {
		switch (token) {
			case "X": return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
			case "XX": return parseTimezonePattern(timezonePatterns.basic, dateString);
			case "XXXX": return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
			case "XXXXX": return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
			default: return parseTimezonePattern(timezonePatterns.extended, dateString);
		}
	}
	set(date, flags, value) {
		if (flags.timestampIsSet) return date;
		return constructFrom(date, date.getTime() - getTimezoneOffsetInMilliseconds(date) - value);
	}
	incompatibleTokens = [
		"t",
		"T",
		"x"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.mjs
var ISOTimezoneParser = class extends Parser {
	priority = 10;
	parse(dateString, token) {
		switch (token) {
			case "x": return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
			case "xx": return parseTimezonePattern(timezonePatterns.basic, dateString);
			case "xxxx": return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
			case "xxxxx": return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
			default: return parseTimezonePattern(timezonePatterns.extended, dateString);
		}
	}
	set(date, flags, value) {
		if (flags.timestampIsSet) return date;
		return constructFrom(date, date.getTime() - getTimezoneOffsetInMilliseconds(date) - value);
	}
	incompatibleTokens = [
		"t",
		"T",
		"X"
	];
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.mjs
var TimestampSecondsParser = class extends Parser {
	priority = 40;
	parse(dateString) {
		return parseAnyDigitsSigned(dateString);
	}
	set(date, _flags, value) {
		return [constructFrom(date, value * 1e3), { timestampIsSet: true }];
	}
	incompatibleTokens = "*";
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.mjs
var TimestampMillisecondsParser = class extends Parser {
	priority = 20;
	parse(dateString) {
		return parseAnyDigitsSigned(dateString);
	}
	set(date, _flags, value) {
		return [constructFrom(date, value), { timestampIsSet: true }];
	}
	incompatibleTokens = "*";
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse/_lib/parsers.mjs
var parsers = {
	G: new EraParser(),
	y: new YearParser(),
	Y: new LocalWeekYearParser(),
	R: new ISOWeekYearParser(),
	u: new ExtendedYearParser(),
	Q: new QuarterParser(),
	q: new StandAloneQuarterParser(),
	M: new MonthParser(),
	L: new StandAloneMonthParser(),
	w: new LocalWeekParser(),
	I: new ISOWeekParser(),
	d: new DateParser(),
	D: new DayOfYearParser(),
	E: new DayParser(),
	e: new LocalDayParser(),
	c: new StandAloneLocalDayParser(),
	i: new ISODayParser(),
	a: new AMPMParser(),
	b: new AMPMMidnightParser(),
	B: new DayPeriodParser(),
	h: new Hour1to12Parser(),
	H: new Hour0to23Parser(),
	K: new Hour0To11Parser(),
	k: new Hour1To24Parser(),
	m: new MinuteParser(),
	s: new SecondParser(),
	S: new FractionOfSecondParser(),
	X: new ISOTimezoneWithZParser(),
	x: new ISOTimezoneParser(),
	t: new TimestampSecondsParser(),
	T: new TimestampMillisecondsParser()
};
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse.mjs
/**
* The {@link parse} function options.
*/
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
* @name parse
* @category Common Helpers
* @summary Parse the date.
*
* @description
* Return the date parsed from string using the given format string.
*
* > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
* > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* The characters in the format string wrapped between two single quotes characters (') are escaped.
* Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
*
* Format of the format string is based on Unicode Technical Standard #35:
* https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
* with a few additions (see note 5 below the table).
*
* Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
* and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
*
* ```javascript
* parse('23 AM', 'HH a', new Date())
* //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
* ```
*
* See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
*
* Accepted format string patterns:
* | Unit                            |Prior| Pattern | Result examples                   | Notes |
* |---------------------------------|-----|---------|-----------------------------------|-------|
* | Era                             | 140 | G..GGG  | AD, BC                            |       |
* |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
* |                                 |     | GGGGG   | A, B                              |       |
* | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
* |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
* |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
* |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
* |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
* |                                 |     | yyyyy   | ...                               | 2,4   |
* | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
* |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
* |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
* |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
* |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
* |                                 |     | YYYYY   | ...                               | 2,4   |
* | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
* |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
* |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
* |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
* |                                 |     | RRRRR   | ...                               | 2,4,5 |
* | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
* |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
* |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
* |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
* |                                 |     | uuuuu   | ...                               | 2,4   |
* | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
* |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
* |                                 |     | QQ      | 01, 02, 03, 04                    |       |
* |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
* |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
* | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
* |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
* |                                 |     | qq      | 01, 02, 03, 04                    |       |
* |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
* |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
* | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
* |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
* |                                 |     | MM      | 01, 02, ..., 12                   |       |
* |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
* |                                 |     | MMMM    | January, February, ..., December  | 2     |
* |                                 |     | MMMMM   | J, F, ..., D                      |       |
* | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
* |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
* |                                 |     | LL      | 01, 02, ..., 12                   |       |
* |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
* |                                 |     | LLLL    | January, February, ..., December  | 2     |
* |                                 |     | LLLLL   | J, F, ..., D                      |       |
* | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
* |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
* |                                 |     | ww      | 01, 02, ..., 53                   |       |
* | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
* |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
* |                                 |     | II      | 01, 02, ..., 53                   | 5     |
* | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
* |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
* |                                 |     | dd      | 01, 02, ..., 31                   |       |
* | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
* |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
* |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
* |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
* |                                 |     | DDDD    | ...                               | 2     |
* | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
* |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
* |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
* |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
* |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
* |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
* |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
* |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
* |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
* | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
* |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
* |                                 |     | ee      | 02, 03, ..., 01                   |       |
* |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
* |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
* |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
* |                                 |     | cc      | 02, 03, ..., 01                   |       |
* |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
* |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
* |                                 |     | aaaa    | a.m., p.m.                        | 2     |
* |                                 |     | aaaaa   | a, p                              |       |
* | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
* |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
* |                                 |     | bbbbb   | a, p, n, mi                       |       |
* | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
* |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
* |                                 |     | BBBBB   | at night, in the morning, ...     |       |
* | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
* |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
* |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
* | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
* |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
* |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
* | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
* |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
* |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
* | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
* |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
* |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
* | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
* |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
* |                                 |     | mm      | 00, 01, ..., 59                   |       |
* | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
* |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
* |                                 |     | ss      | 00, 01, ..., 59                   |       |
* | Seconds timestamp               |  40 | t       | 512969520                         |       |
* |                                 |     | tt      | ...                               | 2     |
* | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
* |                                 |     | SS      | 00, 01, ..., 99                   |       |
* |                                 |     | SSS     | 000, 001, ..., 999                |       |
* |                                 |     | SSSS    | ...                               | 2     |
* | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
* |                                 |     | TT      | ...                               | 2     |
* | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
* |                                 |     | XX      | -0800, +0530, Z                   |       |
* |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
* |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
* |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
* | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
* |                                 |     | xx      | -0800, +0530, +0000               |       |
* |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
* |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
* |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
* | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
* |                                 |     | PP      | May 29, 1453                      |       |
* |                                 |     | PPP     | May 29th, 1453                    |       |
* |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
* | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
* |                                 |     | pp      | 12:00:00 AM                       |       |
* | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
* |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
* |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
* |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
* Notes:
* 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
*    are the same as "stand-alone" units, but are different in some languages.
*    "Formatting" units are declined according to the rules of the language
*    in the context of a date. "Stand-alone" units are always nominative singular.
*    In `format` function, they will produce different result:
*
*    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
*
*    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
*
*    `parse` will try to match both formatting and stand-alone units interchangably.
*
* 2. Any sequence of the identical letters is a pattern, unless it is escaped by
*    the single quote characters (see below).
*    If the sequence is longer than listed in table:
*    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
*      as wide as the sequence
*    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
*      These variations are marked with "2" in the last column of the table.
*
* 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
*    These tokens represent the shortest form of the quarter.
*
* 4. The main difference between `y` and `u` patterns are B.C. years:
*
*    | Year | `y` | `u` |
*    |------|-----|-----|
*    | AC 1 |   1 |   1 |
*    | BC 1 |   1 |   0 |
*    | BC 2 |   2 |  -1 |
*
*    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
*
*    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
*
*    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
*
*    while `uu` will just assign the year as is:
*
*    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
*
*    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
*
*    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
*    except local week-numbering years are dependent on `options.weekStartsOn`
*    and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
*    and [setWeekYear](https://date-fns.org/docs/setWeekYear)).
*
* 5. These patterns are not in the Unicode Technical Standard #35:
*    - `i`: ISO day of week
*    - `I`: ISO week of year
*    - `R`: ISO week-numbering year
*    - `o`: ordinal number modifier
*    - `P`: long localized date
*    - `p`: long localized time
*
* 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
*    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
*    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
*    on the given locale.
*
*    using `en-US` locale: `P` => `MM/dd/yyyy`
*    using `en-US` locale: `p` => `hh:mm a`
*    using `pt-BR` locale: `P` => `dd/MM/yyyy`
*    using `pt-BR` locale: `p` => `HH:mm`
*
* Values will be assigned to the date in the descending order of its unit's priority.
* Units of an equal priority overwrite each other in the order of appearance.
*
* If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
* the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
*
* `referenceDate` must be passed for correct work of the function.
* If you're not sure which `referenceDate` to supply, create a new instance of Date:
* `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
* In this case parsing will be done in the context of the current date.
* If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
* then `Invalid Date` will be returned.
*
* The result may vary by locale.
*
* If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
*
* If parsing failed, `Invalid Date` will be returned.
* Invalid Date is a Date, whose time value is NaN.
* Time value of Date: http://es5.github.io/#x15.9.1.1
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param dateStr - The string to parse
* @param formatStr - The string of tokens
* @param referenceDate - defines values missing from the parsed dateString
* @param options - An object with options.
*   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* @returns The parsed date
*
* @throws `options.locale` must contain `match` property
* @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws format string contains an unescaped latin alphabet character
*
* @example
* // Parse 11 February 2014 from middle-endian format:
* var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
* //=> Tue Feb 11 2014 00:00:00
*
* @example
* // Parse 28th of February in Esperanto locale in the context of 2010 year:
* import eo from 'date-fns/locale/eo'
* var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
*   locale: eo
* })
* //=> Sun Feb 28 2010 00:00:00
*/
function parse(dateStr, formatStr, referenceDate, options) {
	const defaultOptions = getDefaultOptions();
	const locale = options?.locale ?? defaultOptions.locale ?? enUS;
	const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	if (formatStr === "") if (dateStr === "") return toDate(referenceDate);
	else return constructFrom(referenceDate, NaN);
	const subFnOptions = {
		firstWeekContainsDate,
		weekStartsOn,
		locale
	};
	const setters = [new DateToSystemTimezoneSetter()];
	const tokens = formatStr.match(longFormattingTokensRegExp$1).map((substring) => {
		const firstCharacter = substring[0];
		if (firstCharacter in longFormatters) {
			const longFormatter = longFormatters[firstCharacter];
			return longFormatter(substring, locale.formatLong);
		}
		return substring;
	}).join("").match(formattingTokensRegExp);
	const usedTokens = [];
	for (let token of tokens) {
		if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) warnOrThrowProtectedError(token, formatStr, dateStr);
		if (!options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) warnOrThrowProtectedError(token, formatStr, dateStr);
		const firstCharacter = token[0];
		const parser = parsers[firstCharacter];
		if (parser) {
			const { incompatibleTokens } = parser;
			if (Array.isArray(incompatibleTokens)) {
				const incompatibleToken = usedTokens.find((usedToken) => incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter);
				if (incompatibleToken) throw new RangeError(`The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`);
			} else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) throw new RangeError(`The format string mustn't contain \`${token}\` and any other token at the same time`);
			usedTokens.push({
				token: firstCharacter,
				fullToken: token
			});
			const parseResult = parser.run(dateStr, token, locale.match, subFnOptions);
			if (!parseResult) return constructFrom(referenceDate, NaN);
			setters.push(parseResult.setter);
			dateStr = parseResult.rest;
		} else {
			if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
			if (token === "''") token = "'";
			else if (firstCharacter === "'") token = cleanEscapedString(token);
			if (dateStr.indexOf(token) === 0) dateStr = dateStr.slice(token.length);
			else return constructFrom(referenceDate, NaN);
		}
	}
	if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) return constructFrom(referenceDate, NaN);
	const uniquePrioritySetters = setters.map((setter) => setter.priority).sort((a, b) => b - a).filter((priority, index, array) => array.indexOf(priority) === index).map((priority) => setters.filter((setter) => setter.priority === priority).sort((a, b) => b.subPriority - a.subPriority)).map((setterArray) => setterArray[0]);
	let date = toDate(referenceDate);
	if (isNaN(date.getTime())) return constructFrom(referenceDate, NaN);
	const flags = {};
	for (const setter of uniquePrioritySetters) {
		if (!setter.validate(date, subFnOptions)) return constructFrom(referenceDate, NaN);
		const result = setter.set(date, flags, subFnOptions);
		if (Array.isArray(result)) {
			date = result[0];
			Object.assign(flags, result[1]);
		} else date = result;
	}
	return constructFrom(referenceDate, date);
}
function cleanEscapedString(input) {
	return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameMonth.mjs
/**
* @name isSameMonth
* @category Month Helpers
* @summary Are the given dates in the same month (and year)?
*
* @description
* Are the given dates in the same month (and year)?
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param dateLeft - The first date to check
* @param dateRight - The second date to check
*
* @returns The dates are in the same month (and year)
*
* @example
* // Are 2 September 2014 and 25 September 2014 in the same month?
* const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
* //=> true
*
* @example
* // Are 2 September 2014 and 25 September 2015 in the same month?
* const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
* //=> false
*/
function isSameMonth$1(dateLeft, dateRight) {
	const _dateLeft = toDate(dateLeft);
	const _dateRight = toDate(dateRight);
	return _dateLeft.getFullYear() === _dateRight.getFullYear() && _dateLeft.getMonth() === _dateRight.getMonth();
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameQuarter.mjs
/**
* @name isSameQuarter
* @category Quarter Helpers
* @summary Are the given dates in the same quarter (and year)?
*
* @description
* Are the given dates in the same quarter (and year)?
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param dateLeft - The first date to check
* @param dateRight - The second date to check

* @returns The dates are in the same quarter (and year)
*
* @example
* // Are 1 January 2014 and 8 March 2014 in the same quarter?
* const result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
* //=> true
*
* @example
* // Are 1 January 2014 and 1 January 2015 in the same quarter?
* const result = isSameQuarter(new Date(2014, 0, 1), new Date(2015, 0, 1))
* //=> false
*/
function isSameQuarter$1(dateLeft, dateRight) {
	const dateLeftStartOfQuarter = startOfQuarter(dateLeft);
	const dateRightStartOfQuarter = startOfQuarter(dateRight);
	return +dateLeftStartOfQuarter === +dateRightStartOfQuarter;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameYear.mjs
/**
* @name isSameYear
* @category Year Helpers
* @summary Are the given dates in the same year?
*
* @description
* Are the given dates in the same year?
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param dateLeft - The first date to check
* @param dateRight - The second date to check
*
* @returns The dates are in the same year
*
* @example
* // Are 2 September 2014 and 25 September 2014 in the same year?
* const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
* //=> true
*/
function isSameYear$1(dateLeft, dateRight) {
	const _dateLeft = toDate(dateLeft);
	const _dateRight = toDate(dateRight);
	return _dateLeft.getFullYear() === _dateRight.getFullYear();
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isWithinInterval.mjs
/**
* @name isWithinInterval
* @category Interval Helpers
* @summary Is the given date within the interval?
*
* @description
* Is the given date within the interval? (Including start and end.)
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to check
* @param interval - The interval to check
*
* @returns The date is within the interval
*
* @example
* // For the date within the interval:
* isWithinInterval(new Date(2014, 0, 3), {
*   start: new Date(2014, 0, 1),
*   end: new Date(2014, 0, 7)
* })
* //=> true
*
* @example
* // For the date outside of the interval:
* isWithinInterval(new Date(2014, 0, 10), {
*   start: new Date(2014, 0, 1),
*   end: new Date(2014, 0, 7)
* })
* //=> false
*
* @example
* // For date equal to interval start:
* isWithinInterval(date, { start, end: date })
* // => true
*
* @example
* // For date equal to interval end:
* isWithinInterval(date, { start: date, end })
* // => true
*/
function isWithinInterval(date, interval) {
	const time = +toDate(date);
	const [startTime, endTime] = [+toDate(interval.start), +toDate(interval.end)].sort((a, b) => a - b);
	return time >= startTime && time <= endTime;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subDays.mjs
/**
* @name subDays
* @category Day Helpers
* @summary Subtract the specified number of days from the given date.
*
* @description
* Subtract the specified number of days from the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param amount - The amount of days to be subtracted.
*
* @returns The new date with the days subtracted
*
* @example
* // Subtract 10 days from 1 September 2014:
* const result = subDays(new Date(2014, 8, 1), 10)
* //=> Fri Aug 22 2014 00:00:00
*/
function subDays(date, amount) {
	return addDays(date, -amount);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parseISO.mjs
/**
* The {@link parseISO} function options.
*/
/**
* @name parseISO
* @category Common Helpers
* @summary Parse ISO string
*
* @description
* Parse the given string in ISO 8601 format and return an instance of Date.
*
* Function accepts complete ISO 8601 formats as well as partial implementations.
* ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
*
* If the argument isn't a string, the function cannot parse the string or
* the values are invalid, it returns Invalid Date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param argument - The value to convert
* @param options - An object with options
*
* @returns The parsed date in the local time zone
*
* @example
* // Convert string '2014-02-11T11:30:30' to date:
* const result = parseISO('2014-02-11T11:30:30')
* //=> Tue Feb 11 2014 11:30:30
*
* @example
* // Convert string '+02014101' to date,
* // if the additional number of digits in the extended year format is 1:
* const result = parseISO('+02014101', { additionalDigits: 1 })
* //=> Fri Apr 11 2014 00:00:00
*/
function parseISO(argument, options) {
	const additionalDigits = options?.additionalDigits ?? 2;
	const dateStrings = splitDateString(argument);
	let date;
	if (dateStrings.date) {
		const parseYearResult = parseYear(dateStrings.date, additionalDigits);
		date = parseDate$1(parseYearResult.restDateString, parseYearResult.year);
	}
	if (!date || isNaN(date.getTime())) return /* @__PURE__ */ new Date(NaN);
	const timestamp = date.getTime();
	let time = 0;
	let offset;
	if (dateStrings.time) {
		time = parseTime(dateStrings.time);
		if (isNaN(time)) return /* @__PURE__ */ new Date(NaN);
	}
	if (dateStrings.timezone) {
		offset = parseTimezone(dateStrings.timezone);
		if (isNaN(offset)) return /* @__PURE__ */ new Date(NaN);
	} else {
		const dirtyDate = new Date(timestamp + time);
		const result = /* @__PURE__ */ new Date(0);
		result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
		result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
		return result;
	}
	return new Date(timestamp + time + offset);
}
var patterns = {
	dateTimeDelimiter: /[T ]/,
	timeZoneDelimiter: /[Z ]/i,
	timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
	const dateStrings = {};
	const array = dateString.split(patterns.dateTimeDelimiter);
	let timeString;
	if (array.length > 2) return dateStrings;
	if (/:/.test(array[0])) timeString = array[0];
	else {
		dateStrings.date = array[0];
		timeString = array[1];
		if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
			dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
			timeString = dateString.substr(dateStrings.date.length, dateString.length);
		}
	}
	if (timeString) {
		const token = patterns.timezone.exec(timeString);
		if (token) {
			dateStrings.time = timeString.replace(token[1], "");
			dateStrings.timezone = token[1];
		} else dateStrings.time = timeString;
	}
	return dateStrings;
}
function parseYear(dateString, additionalDigits) {
	const regex = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)");
	const captures = dateString.match(regex);
	if (!captures) return {
		year: NaN,
		restDateString: ""
	};
	const year = captures[1] ? parseInt(captures[1]) : null;
	const century = captures[2] ? parseInt(captures[2]) : null;
	return {
		year: century === null ? year : century * 100,
		restDateString: dateString.slice((captures[1] || captures[2]).length)
	};
}
function parseDate$1(dateString, year) {
	if (year === null) return /* @__PURE__ */ new Date(NaN);
	const captures = dateString.match(dateRegex);
	if (!captures) return /* @__PURE__ */ new Date(NaN);
	const isWeekDate = !!captures[4];
	const dayOfYear = parseDateUnit(captures[1]);
	const month = parseDateUnit(captures[2]) - 1;
	const day = parseDateUnit(captures[3]);
	const week = parseDateUnit(captures[4]);
	const dayOfWeek = parseDateUnit(captures[5]) - 1;
	if (isWeekDate) {
		if (!validateWeekDate(year, week, dayOfWeek)) return /* @__PURE__ */ new Date(NaN);
		return dayOfISOWeekYear(year, week, dayOfWeek);
	} else {
		const date = /* @__PURE__ */ new Date(0);
		if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) return /* @__PURE__ */ new Date(NaN);
		date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
		return date;
	}
}
function parseDateUnit(value) {
	return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
	const captures = timeString.match(timeRegex);
	if (!captures) return NaN;
	const hours = parseTimeUnit(captures[1]);
	const minutes = parseTimeUnit(captures[2]);
	const seconds = parseTimeUnit(captures[3]);
	if (!validateTime(hours, minutes, seconds)) return NaN;
	return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1e3;
}
function parseTimeUnit(value) {
	return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
	if (timezoneString === "Z") return 0;
	const captures = timezoneString.match(timezoneRegex);
	if (!captures) return 0;
	const sign = captures[1] === "+" ? -1 : 1;
	const hours = parseInt(captures[2]);
	const minutes = captures[3] && parseInt(captures[3]) || 0;
	if (!validateTimezone(hours, minutes)) return NaN;
	return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
	const date = /* @__PURE__ */ new Date(0);
	date.setUTCFullYear(isoWeekYear, 0, 4);
	const fourthOfJanuaryDay = date.getUTCDay() || 7;
	const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
	date.setUTCDate(date.getUTCDate() + diff);
	return date;
}
var daysInMonths = [
	31,
	null,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
];
function isLeapYearIndex(year) {
	return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
	return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
	return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
	return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
	if (hours === 24) return minutes === 0 && seconds === 0;
	return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
	return minutes >= 0 && minutes <= 59;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setMonth.mjs
/**
* @name setMonth
* @category Month Helpers
* @summary Set the month to the given date.
*
* @description
* Set the month to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param month - The month index to set (0-11)
*
* @returns The new date with the month set
*
* @example
* // Set February to 1 September 2014:
* const result = setMonth(new Date(2014, 8, 1), 1)
* //=> Sat Feb 01 2014 00:00:00
*/
function setMonth(date, month) {
	const _date = toDate(date);
	const year = _date.getFullYear();
	const day = _date.getDate();
	const dateWithDesiredMonth = constructFrom(date, 0);
	dateWithDesiredMonth.setFullYear(year, month, 15);
	dateWithDesiredMonth.setHours(0, 0, 0, 0);
	const daysInMonth = getDaysInMonth(dateWithDesiredMonth);
	_date.setMonth(month, Math.min(day, daysInMonth));
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/set.mjs
/**
* @name set
* @category Common Helpers
* @summary Set date values to a given date.
*
* @description
* Set date values to a given date.
*
* Sets time values to date from object `values`.
* A value is not set if it is undefined or null or doesn't exist in `values`.
*
* Note about bundle size: `set` does not internally use `setX` functions from date-fns but instead opts
* to use native `Date#setX` methods. If you use this function, you may not want to include the
* other `setX` functions that date-fns provides if you are concerned about the bundle size.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param values - The date values to be set
*
* @returns The new date with options set
*
* @example
* // Transform 1 September 2014 into 20 October 2015 in a single line:
* const result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
* //=> Tue Oct 20 2015 00:00:00
*
* @example
* // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
* const result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
* //=> Mon Sep 01 2014 12:23:45
*/
function set(date, values) {
	let _date = toDate(date);
	if (isNaN(+_date)) return constructFrom(date, NaN);
	if (values.year != null) _date.setFullYear(values.year);
	if (values.month != null) _date = setMonth(_date, values.month);
	if (values.date != null) _date.setDate(values.date);
	if (values.hours != null) _date.setHours(values.hours);
	if (values.minutes != null) _date.setMinutes(values.minutes);
	if (values.seconds != null) _date.setSeconds(values.seconds);
	if (values.milliseconds != null) _date.setMilliseconds(values.milliseconds);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setHours.mjs
/**
* @name setHours
* @category Hour Helpers
* @summary Set the hours to the given date.
*
* @description
* Set the hours to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param hours - The hours of the new date
*
* @returns The new date with the hours set
*
* @example
* // Set 4 hours to 1 September 2014 11:30:00:
* const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
* //=> Mon Sep 01 2014 04:30:00
*/
function setHours(date, hours) {
	const _date = toDate(date);
	_date.setHours(hours);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setMinutes.mjs
/**
* @name setMinutes
* @category Minute Helpers
* @summary Set the minutes to the given date.
*
* @description
* Set the minutes to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param minutes - The minutes of the new date
*
* @returns The new date with the minutes set
*
* @example
* // Set 45 minutes to 1 September 2014 11:30:40:
* const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
* //=> Mon Sep 01 2014 11:45:40
*/
function setMinutes(date, minutes) {
	const _date = toDate(date);
	_date.setMinutes(minutes);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setQuarter.mjs
/**
* @name setQuarter
* @category Quarter Helpers
* @summary Set the year quarter to the given date.
*
* @description
* Set the year quarter to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param quarter - The quarter of the new date
*
* @returns The new date with the quarter set
*
* @example
* // Set the 2nd quarter to 2 July 2014:
* const result = setQuarter(new Date(2014, 6, 2), 2)
* //=> Wed Apr 02 2014 00:00:00
*/
function setQuarter(date, quarter) {
	const _date = toDate(date);
	const diff = quarter - (Math.trunc(_date.getMonth() / 3) + 1);
	return setMonth(_date, _date.getMonth() + diff * 3);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setSeconds.mjs
/**
* @name setSeconds
* @category Second Helpers
* @summary Set the seconds to the given date.
*
* @description
* Set the seconds to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param seconds - The seconds of the new date
*
* @returns The new date with the seconds set
*
* @example
* // Set 45 seconds to 1 September 2014 11:30:40:
* const result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
* //=> Mon Sep 01 2014 11:30:45
*/
function setSeconds(date, seconds) {
	const _date = toDate(date);
	_date.setSeconds(seconds);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setYear.mjs
/**
* @name setYear
* @category Year Helpers
* @summary Set the year to the given date.
*
* @description
* Set the year to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param year - The year of the new date
*
* @returns The new date with the year set
*
* @example
* // Set year 2013 to 1 September 2014:
* const result = setYear(new Date(2014, 8, 1), 2013)
* //=> Sun Sep 01 2013 00:00:00
*/
function setYear(date, year) {
	const _date = toDate(date);
	if (isNaN(+_date)) return constructFrom(date, NaN);
	_date.setFullYear(year);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subMonths.mjs
/**
* @name subMonths
* @category Month Helpers
* @summary Subtract the specified number of months from the given date.
*
* @description
* Subtract the specified number of months from the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param amount - The amount of months to be subtracted.
*
* @returns The new date with the months subtracted
*
* @example
* // Subtract 5 months from 1 February 2015:
* const result = subMonths(new Date(2015, 1, 1), 5)
* //=> Mon Sep 01 2014 00:00:00
*/
function subMonths(date, amount) {
	return addMonths(date, -amount);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subQuarters.mjs
/**
* @name subQuarters
* @category Quarter Helpers
* @summary Subtract the specified number of year quarters from the given date.
*
* @description
* Subtract the specified number of year quarters from the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param amount - The amount of quarters to be subtracted.
*
* @returns The new date with the quarters subtracted
*
* @example
* // Subtract 3 quarters from 1 September 2014:
* const result = subQuarters(new Date(2014, 8, 1), 3)
* //=> Sun Dec 01 2013 00:00:00
*/
function subQuarters(date, amount) {
	return addQuarters(date, -amount);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subWeeks.mjs
/**
* @name subWeeks
* @category Week Helpers
* @summary Subtract the specified number of weeks from the given date.
*
* @description
* Subtract the specified number of weeks from the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param amount - The amount of weeks to be subtracted.
*
* @returns The new date with the weeks subtracted
*
* @example
* // Subtract 4 weeks from 1 September 2014:
* const result = subWeeks(new Date(2014, 8, 1), 4)
* //=> Mon Aug 04 2014 00:00:00
*/
function subWeeks(date, amount) {
	return addWeeks(date, -amount);
}
//#endregion
//#region node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subYears.mjs
/**
* @name subYears
* @category Year Helpers
* @summary Subtract the specified number of years from the given date.
*
* @description
* Subtract the specified number of years from the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The date to be changed
* @param amount - The amount of years to be subtracted.
*
* @returns The new date with the years subtracted
*
* @example
* // Subtract 5 years from 1 September 2014:
* const result = subYears(new Date(2014, 8, 1), 5)
* //=> Tue Sep 01 2009 00:00:00
*/
function subYears(date, amount) {
	return addYears(date, -amount);
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+react@0.27.20_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
var index$1 = typeof document !== "undefined" ? import_react.useLayoutEffect : function noop() {};
var useSafeInsertionEffect = { ...import_react }.useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
	const ref = import_react.useRef(() => {});
	useSafeInsertionEffect(() => {
		ref.current = callback;
	});
	return import_react.useCallback(function() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		return ref.current == null ? void 0 : ref.current(...args);
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+react-dom@2.1.9_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
var index = typeof document !== "undefined" ? import_react.useLayoutEffect : function noop() {};
function deepEqual(a, b) {
	if (a === b) return true;
	if (typeof a !== typeof b) return false;
	if (typeof a === "function" && a.toString() === b.toString()) return true;
	let length;
	let i;
	let keys;
	if (a && b && typeof a === "object") {
		if (Array.isArray(a)) {
			length = a.length;
			if (length !== b.length) return false;
			for (i = length; i-- !== 0;) if (!deepEqual(a[i], b[i])) return false;
			return true;
		}
		keys = Object.keys(a);
		length = keys.length;
		if (length !== Object.keys(b).length) return false;
		for (i = length; i-- !== 0;) if (!{}.hasOwnProperty.call(b, keys[i])) return false;
		for (i = length; i-- !== 0;) {
			const key = keys[i];
			if (key === "_owner" && a.$$typeof) continue;
			if (!deepEqual(a[key], b[key])) return false;
		}
		return true;
	}
	return a !== a && b !== b;
}
function getDPR(element) {
	if (typeof window === "undefined") return 1;
	return (element.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(element, value) {
	const dpr = getDPR(element);
	return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
	const ref = import_react.useRef(value);
	index(() => {
		ref.current = value;
	});
	return ref;
}
/**
* Provides data to position a floating element.
* @see https://floating-ui.com/docs/useFloating
*/
function useFloating$1(options) {
	if (options === void 0) options = {};
	const { placement = "bottom", strategy = "absolute", middleware = [], platform, elements: { reference: externalReference, floating: externalFloating } = {}, transform = true, whileElementsMounted, open } = options;
	const [data, setData] = import_react.useState({
		x: 0,
		y: 0,
		strategy,
		placement,
		middlewareData: {},
		isPositioned: false
	});
	const [latestMiddleware, setLatestMiddleware] = import_react.useState(middleware);
	if (!deepEqual(latestMiddleware, middleware)) setLatestMiddleware(middleware);
	const [_reference, _setReference] = import_react.useState(null);
	const [_floating, _setFloating] = import_react.useState(null);
	const setReference = import_react.useCallback((node) => {
		if (node !== referenceRef.current) {
			referenceRef.current = node;
			_setReference(node);
		}
	}, []);
	const setFloating = import_react.useCallback((node) => {
		if (node !== floatingRef.current) {
			floatingRef.current = node;
			_setFloating(node);
		}
	}, []);
	const referenceEl = externalReference || _reference;
	const floatingEl = externalFloating || _floating;
	const referenceRef = import_react.useRef(null);
	const floatingRef = import_react.useRef(null);
	const dataRef = import_react.useRef(data);
	const hasWhileElementsMounted = whileElementsMounted != null;
	const whileElementsMountedRef = useLatestRef(whileElementsMounted);
	const platformRef = useLatestRef(platform);
	const openRef = useLatestRef(open);
	const update = import_react.useCallback(() => {
		if (!referenceRef.current || !floatingRef.current) return;
		const config = {
			placement,
			strategy,
			middleware: latestMiddleware
		};
		if (platformRef.current) config.platform = platformRef.current;
		computePosition(referenceRef.current, floatingRef.current, config).then((data) => {
			const fullData = {
				...data,
				isPositioned: openRef.current !== false
			};
			if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
				dataRef.current = fullData;
				import_react_dom.flushSync(() => {
					setData(fullData);
				});
			}
		});
	}, [
		latestMiddleware,
		placement,
		strategy,
		platformRef,
		openRef
	]);
	index(() => {
		if (open === false && dataRef.current.isPositioned) {
			dataRef.current.isPositioned = false;
			setData((data) => ({
				...data,
				isPositioned: false
			}));
		}
	}, [open]);
	const isMountedRef = import_react.useRef(false);
	index(() => {
		isMountedRef.current = true;
		return () => {
			isMountedRef.current = false;
		};
	}, []);
	index(() => {
		if (referenceEl) referenceRef.current = referenceEl;
		if (floatingEl) floatingRef.current = floatingEl;
		if (referenceEl && floatingEl) {
			if (whileElementsMountedRef.current) return whileElementsMountedRef.current(referenceEl, floatingEl, update);
			update();
		}
	}, [
		referenceEl,
		floatingEl,
		update,
		whileElementsMountedRef,
		hasWhileElementsMounted
	]);
	const refs = import_react.useMemo(() => ({
		reference: referenceRef,
		floating: floatingRef,
		setReference,
		setFloating
	}), [setReference, setFloating]);
	const elements = import_react.useMemo(() => ({
		reference: referenceEl,
		floating: floatingEl
	}), [referenceEl, floatingEl]);
	const floatingStyles = import_react.useMemo(() => {
		const initialStyles = {
			position: strategy,
			left: 0,
			top: 0
		};
		if (!elements.floating) return initialStyles;
		const x = roundByDPR(elements.floating, data.x);
		const y = roundByDPR(elements.floating, data.y);
		if (transform) return {
			...initialStyles,
			transform: "translate(" + x + "px, " + y + "px)",
			...getDPR(elements.floating) >= 1.5 && { willChange: "transform" }
		};
		return {
			position: strategy,
			left: x,
			top: y
		};
	}, [
		strategy,
		transform,
		elements.floating,
		data.x,
		data.y
	]);
	return import_react.useMemo(() => ({
		...data,
		update,
		refs,
		elements,
		floatingStyles
	}), [
		data,
		update,
		refs,
		elements,
		floatingStyles
	]);
}
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* This wraps the core `arrow` middleware to allow React refs as the element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow$1 = (options) => {
	function isRef(value) {
		return {}.hasOwnProperty.call(value, "current");
	}
	return {
		name: "arrow",
		options,
		fn(state) {
			const { element, padding } = typeof options === "function" ? options(state) : options;
			if (element && isRef(element)) {
				if (element.current != null) return arrow$2({
					element: element.current,
					padding
				}).fn(state);
				return {};
			}
			if (element) return arrow$2({
				element,
				padding
			}).fn(state);
			return {};
		}
	};
};
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset = (options, deps) => {
	const result = offset$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip = (options, deps) => {
	const result = flip$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* This wraps the core `arrow` middleware to allow React refs as the element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow = (options, deps) => {
	const result = arrow$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
//#endregion
//#region node_modules/.pnpm/@floating-ui+react@0.27.20_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
var verticalKeys = [ARROW_UP, ARROW_DOWN];
[...horizontalKeys, ...verticalKeys];
var SafeReact = { ...import_react };
var serverHandoffComplete = false;
var count = 0;
var genId = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++;
function useFloatingId() {
	const [id, setId] = import_react.useState(() => serverHandoffComplete ? genId() : void 0);
	index$1(() => {
		if (id == null) setId(genId());
	}, []);
	import_react.useEffect(() => {
		serverHandoffComplete = true;
	}, []);
	return id;
}
/**
* Uses React 18's built-in `useId()` when available, or falls back to a
* slightly less performant (requiring a double render) implementation for
* earlier React versions.
* @see https://floating-ui.com/docs/react-utils#useid
*/
var useId = SafeReact.useId || useFloatingId;
/**
* Renders a pointing arrow triangle.
* @see https://floating-ui.com/docs/FloatingArrow
*/
var FloatingArrow = /*#__PURE__*/ import_react.forwardRef(function FloatingArrow(props, ref) {
	const { context: { placement, elements: { floating }, middlewareData: { arrow, shift } }, width = 14, height = 7, tipRadius = 0, strokeWidth = 0, staticOffset, stroke, d, style: { transform, ...restStyle } = {}, ...rest } = props;
	const clipPathId = useId();
	const [isRTL, setIsRTL] = import_react.useState(false);
	index$1(() => {
		if (!floating) return;
		if (getComputedStyle(floating).direction === "rtl") setIsRTL(true);
	}, [floating]);
	if (!floating) return null;
	const [side, alignment] = placement.split("-");
	const isVerticalSide = side === "top" || side === "bottom";
	let computedStaticOffset = staticOffset;
	if (isVerticalSide && shift != null && shift.x || !isVerticalSide && shift != null && shift.y) computedStaticOffset = null;
	const computedStrokeWidth = strokeWidth * 2;
	const halfStrokeWidth = computedStrokeWidth / 2;
	const svgX = width / 2 * (tipRadius / -8 + 1);
	const svgY = height / 2 * tipRadius / 4;
	const isCustomShape = !!d;
	const yOffsetProp = computedStaticOffset && alignment === "end" ? "bottom" : "top";
	let xOffsetProp = computedStaticOffset && alignment === "end" ? "right" : "left";
	if (computedStaticOffset && isRTL) xOffsetProp = alignment === "end" ? "left" : "right";
	const arrowX = (arrow == null ? void 0 : arrow.x) != null ? computedStaticOffset || arrow.x : "";
	const arrowY = (arrow == null ? void 0 : arrow.y) != null ? computedStaticOffset || arrow.y : "";
	const dValue = d || "M0,0" + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + " Z";
	const rotation = {
		top: isCustomShape ? "rotate(180deg)" : "",
		left: isCustomShape ? "rotate(90deg)" : "rotate(-90deg)",
		bottom: isCustomShape ? "" : "rotate(180deg)",
		right: isCustomShape ? "rotate(-90deg)" : "rotate(90deg)"
	}[side];
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)("svg", {
		...rest,
		"aria-hidden": true,
		ref,
		width: isCustomShape ? width : width + computedStrokeWidth,
		height: width,
		viewBox: "0 0 " + width + " " + (height > width ? height : width),
		style: {
			position: "absolute",
			pointerEvents: "none",
			[xOffsetProp]: arrowX,
			[yOffsetProp]: arrowY,
			[side]: isVerticalSide || isCustomShape ? "100%" : "calc(100% - " + computedStrokeWidth / 2 + "px)",
			transform: [rotation, transform].filter((t) => !!t).join(" "),
			...restStyle
		},
		children: [
			computedStrokeWidth > 0 && /*#__PURE__*/ (0, import_jsx_runtime.jsx)("path", {
				clipPath: "url(#" + clipPathId + ")",
				fill: "none",
				stroke,
				strokeWidth: computedStrokeWidth + (d ? 0 : 1),
				d: dValue
			}),
			/*#__PURE__*/ (0, import_jsx_runtime.jsx)("path", {
				stroke: computedStrokeWidth && !d ? rest.fill : "none",
				d: dValue
			}),
			/*#__PURE__*/ (0, import_jsx_runtime.jsx)("clipPath", {
				id: clipPathId,
				children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)("rect", {
					x: -halfStrokeWidth,
					y: halfStrokeWidth * (isCustomShape ? -1 : 1),
					width: width + computedStrokeWidth,
					height: width
				})
			})
		]
	});
});
function createEventEmitter() {
	const map = /* @__PURE__ */ new Map();
	return {
		emit(event, data) {
			var _map$get;
			(_map$get = map.get(event)) == null || _map$get.forEach((listener) => listener(data));
		},
		on(event, listener) {
			if (!map.has(event)) map.set(event, /* @__PURE__ */ new Set());
			map.get(event).add(listener);
		},
		off(event, listener) {
			var _map$get2;
			(_map$get2 = map.get(event)) == null || _map$get2.delete(listener);
		}
	};
}
var FloatingNodeContext = /*#__PURE__*/ import_react.createContext(null);
var FloatingTreeContext = /*#__PURE__*/ import_react.createContext(null);
/**
* Returns the parent node id for nested floating elements, if available.
* Returns `null` for top-level floating elements.
*/
var useFloatingParentNodeId = () => {
	var _React$useContext;
	return ((_React$useContext = import_react.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
/**
* Returns the nearest floating tree context, if available.
*/
var useFloatingTree = () => import_react.useContext(FloatingTreeContext);
function useFloatingRootContext(options) {
	const { open = false, onOpenChange: onOpenChangeProp, elements: elementsProp } = options;
	const floatingId = useId();
	const dataRef = import_react.useRef({});
	const [events] = import_react.useState(() => createEventEmitter());
	const nested = useFloatingParentNodeId() != null;
	const [positionReference, setPositionReference] = import_react.useState(elementsProp.reference);
	const onOpenChange = useEffectEvent((open, event, reason) => {
		dataRef.current.openEvent = open ? event : void 0;
		events.emit("openchange", {
			open,
			event,
			reason,
			nested
		});
		onOpenChangeProp?.(open, event, reason);
	});
	const refs = import_react.useMemo(() => ({ setPositionReference }), []);
	const elements = import_react.useMemo(() => ({
		reference: positionReference || elementsProp.reference || null,
		floating: elementsProp.floating || null,
		domReference: elementsProp.reference
	}), [
		positionReference,
		elementsProp.reference,
		elementsProp.floating
	]);
	return import_react.useMemo(() => ({
		dataRef,
		open,
		onOpenChange,
		elements,
		events,
		floatingId,
		refs
	}), [
		open,
		onOpenChange,
		elements,
		events,
		floatingId,
		refs
	]);
}
/**
* Provides data to position a floating element and context to add interactions.
* @see https://floating-ui.com/docs/useFloating
*/
function useFloating(_temp) {
	var _elementsOption$refer, _elementsOption$float;
	let { elements: elementsOption, ...options } = _temp === void 0 ? {} : _temp;
	const { nodeId } = options;
	const internalRootContext = useFloatingRootContext({
		...options,
		elements: {
			reference: (_elementsOption$refer = elementsOption == null ? void 0 : elementsOption.reference) != null ? _elementsOption$refer : null,
			floating: (_elementsOption$float = elementsOption == null ? void 0 : elementsOption.floating) != null ? _elementsOption$float : null
		}
	});
	const rootContext = options.rootContext || internalRootContext;
	const computedElements = rootContext.elements;
	const [_domReference, setDomReference] = import_react.useState(null);
	const [positionReference, _setPositionReference] = import_react.useState(null);
	const domReference = (computedElements == null ? void 0 : computedElements.domReference) || _domReference;
	const domReferenceRef = import_react.useRef(null);
	const tree = useFloatingTree();
	index$1(() => {
		if (domReference) domReferenceRef.current = domReference;
	}, [domReference]);
	const position = useFloating$1({
		...options,
		elements: {
			...computedElements,
			...positionReference && { reference: positionReference }
		}
	});
	const setPositionReference = import_react.useCallback((node) => {
		const computedPositionReference = isElement(node) ? {
			getBoundingClientRect: () => node.getBoundingClientRect(),
			getClientRects: () => node.getClientRects(),
			contextElement: node
		} : node;
		_setPositionReference(computedPositionReference);
		position.refs.setReference(computedPositionReference);
	}, [position.refs]);
	const setReference = import_react.useCallback((node) => {
		if (isElement(node) || node === null) {
			domReferenceRef.current = node;
			setDomReference(node);
		}
		if (isElement(position.refs.reference.current) || position.refs.reference.current === null || node !== null && !isElement(node)) position.refs.setReference(node);
	}, [position.refs]);
	const refs = import_react.useMemo(() => ({
		...position.refs,
		setReference,
		setPositionReference,
		domReference: domReferenceRef
	}), [
		position.refs,
		setReference,
		setPositionReference
	]);
	const elements = import_react.useMemo(() => ({
		...position.elements,
		domReference
	}), [position.elements, domReference]);
	const context = import_react.useMemo(() => ({
		...position,
		...rootContext,
		refs,
		elements,
		nodeId
	}), [
		position,
		refs,
		elements,
		nodeId,
		rootContext
	]);
	index$1(() => {
		rootContext.dataRef.current.floatingContext = context;
		const node = tree == null ? void 0 : tree.nodesRef.current.find((node) => node.id === nodeId);
		if (node) node.context = context;
	});
	return import_react.useMemo(() => ({
		...position,
		context,
		refs,
		elements
	}), [
		position,
		refs,
		elements,
		context
	]);
}
//#endregion
//#region node_modules/.pnpm/react-datepicker@7.6.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/react-datepicker/dist/es/index.js
/*!
react-datepicker v7.6.0
https://github.com/Hacker0x01/react-datepicker
Released under the MIT License.
*/
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var _extendStatics = function extendStatics(d, b) {
	_extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
		d.__proto__ = b;
	} || function(d, b) {
		for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
	};
	return _extendStatics(d, b);
};
function __extends(d, b) {
	if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	_extendStatics(d, b);
	function __() {
		this.constructor = d;
	}
	d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var _assign = function __assign() {
	_assign = Object.assign || function __assign(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return _assign.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
}
var CalendarContainer = function(_a) {
	var _b = _a.showTimeSelectOnly, showTimeSelectOnly = _b === void 0 ? false : _b, _c = _a.showTime, showTime = _c === void 0 ? false : _c, className = _a.className, children = _a.children;
	var ariaLabel = showTimeSelectOnly ? "Choose Time" : "Choose Date".concat(showTime ? " and Time" : "");
	return import_react.createElement("div", {
		className,
		role: "dialog",
		"aria-label": ariaLabel,
		"aria-modal": "true"
	}, children);
};
var useDetectClickOutside = function(onClickOutside, ignoreClass) {
	var ref = (0, import_react.useRef)(null);
	var onClickOutsideRef = (0, import_react.useRef)(onClickOutside);
	onClickOutsideRef.current = onClickOutside;
	var handleClickOutside = (0, import_react.useCallback)(function(event) {
		var _a;
		if (ref.current && !ref.current.contains(event.target)) {
			if (!(ignoreClass && event.target instanceof HTMLElement && event.target.classList.contains(ignoreClass))) (_a = onClickOutsideRef.current) === null || _a === void 0 || _a.call(onClickOutsideRef, event);
		}
	}, [ignoreClass]);
	(0, import_react.useEffect)(function() {
		document.addEventListener("mousedown", handleClickOutside);
		return function() {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [handleClickOutside]);
	return ref;
};
var ClickOutsideWrapper = function(_a) {
	var children = _a.children, onClickOutside = _a.onClickOutside, className = _a.className, containerRef = _a.containerRef, style = _a.style, ignoreClass = _a.ignoreClass;
	var detectRef = useDetectClickOutside(onClickOutside, ignoreClass);
	return import_react.createElement("div", {
		className,
		style,
		ref: function(node) {
			detectRef.current = node;
			if (containerRef) containerRef.current = node;
		}
	}, children);
};
var KeyType;
(function(KeyType) {
	KeyType["ArrowUp"] = "ArrowUp";
	KeyType["ArrowDown"] = "ArrowDown";
	KeyType["ArrowLeft"] = "ArrowLeft";
	KeyType["ArrowRight"] = "ArrowRight";
	KeyType["PageUp"] = "PageUp";
	KeyType["PageDown"] = "PageDown";
	KeyType["Home"] = "Home";
	KeyType["End"] = "End";
	KeyType["Enter"] = "Enter";
	KeyType["Space"] = " ";
	KeyType["Tab"] = "Tab";
	KeyType["Escape"] = "Escape";
	KeyType["Backspace"] = "Backspace";
	KeyType["X"] = "x";
})(KeyType || (KeyType = {}));
function getLocaleScope() {
	return typeof window !== "undefined" ? window : globalThis;
}
var DEFAULT_YEAR_ITEM_NUMBER = 12;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function newDate(value) {
	if (value == null) return /* @__PURE__ */ new Date();
	var d = typeof value === "string" ? parseISO(value) : toDate(value);
	return isValid(d) ? d : /* @__PURE__ */ new Date();
}
/**
* Parses a date.
*
* @param value - The string representing the Date in a parsable form, e.g., ISO 1861
* @param dateFormat - The date format.
* @param locale - The locale.
* @param strictParsing - The strict parsing flag.
* @param minDate - The minimum date.
* @returns - The parsed date or null.
*/
function parseDate(value, dateFormat, locale, strictParsing, minDate) {
	var _a;
	var parsedDate = null;
	var localeObject = getLocaleObject(locale) || getLocaleObject(getDefaultLocale());
	var strictParsingValueMatch = true;
	if (Array.isArray(dateFormat)) {
		dateFormat.forEach(function(df) {
			var tryParseDate = parse(value, df, /* @__PURE__ */ new Date(), {
				locale: localeObject,
				useAdditionalWeekYearTokens: true,
				useAdditionalDayOfYearTokens: true
			});
			if (strictParsing) strictParsingValueMatch = isValid(tryParseDate, minDate) && value === formatDate(tryParseDate, df, locale);
			if (isValid(tryParseDate, minDate) && strictParsingValueMatch) parsedDate = tryParseDate;
		});
		return parsedDate;
	}
	parsedDate = parse(value, dateFormat, /* @__PURE__ */ new Date(), {
		locale: localeObject,
		useAdditionalWeekYearTokens: true,
		useAdditionalDayOfYearTokens: true
	});
	if (strictParsing) strictParsingValueMatch = isValid(parsedDate) && value === formatDate(parsedDate, dateFormat, locale);
	else if (!isValid(parsedDate)) {
		var format_1 = ((_a = dateFormat.match(longFormattingTokensRegExp)) !== null && _a !== void 0 ? _a : []).map(function(substring) {
			var firstCharacter = substring[0];
			if (firstCharacter === "p" || firstCharacter === "P") {
				var longFormatter = longFormatters[firstCharacter];
				return localeObject ? longFormatter(substring, localeObject.formatLong) : firstCharacter;
			}
			return substring;
		}).join("");
		if (value.length > 0) parsedDate = parse(value, format_1.slice(0, value.length), /* @__PURE__ */ new Date(), {
			useAdditionalWeekYearTokens: true,
			useAdditionalDayOfYearTokens: true
		});
		if (!isValid(parsedDate)) parsedDate = new Date(value);
	}
	return isValid(parsedDate) && strictParsingValueMatch ? parsedDate : null;
}
/**
* Checks if a given date is valid and not before the minimum date.
* @param date - The date to be checked.
* @param minDate - The minimum date allowed. If not provided, defaults to "1/1/1800".
* @returns A boolean value indicating whether the date is valid and not before the minimum date.
*/
function isValid(date, minDate) {
	return isValid$1(date) && !isBefore(date, minDate !== null && minDate !== void 0 ? minDate : /* @__PURE__ */ new Date("1/1/1800"));
}
/**
* Formats a date.
*
* @param date - The date.
* @param formatStr - The format string.
* @param locale - The locale.
* @returns - The formatted date.
*/
function formatDate(date, formatStr, locale) {
	if (locale === "en") return format(date, formatStr, {
		useAdditionalWeekYearTokens: true,
		useAdditionalDayOfYearTokens: true
	});
	var localeObj = locale ? getLocaleObject(locale) : void 0;
	if (locale && !localeObj) console.warn("A locale object was not found for the provided string [\"".concat(locale, "\"]."));
	if (!localeObj && !!getDefaultLocale() && !!getLocaleObject(getDefaultLocale())) localeObj = getLocaleObject(getDefaultLocale());
	return format(date, formatStr, {
		locale: localeObj,
		useAdditionalWeekYearTokens: true,
		useAdditionalDayOfYearTokens: true
	});
}
/**
* Safely formats a date.
*
* @param date - The date.
* @param options - An object containing the dateFormat and locale.
* @returns - The formatted date or an empty string.
*/
function safeDateFormat(date, _a) {
	var dateFormat = _a.dateFormat, locale = _a.locale;
	var formatStr = Array.isArray(dateFormat) && dateFormat.length > 0 ? dateFormat[0] : dateFormat;
	return date && formatDate(date, formatStr, locale) || "";
}
/**
* Safely formats a date range.
*
* @param startDate - The start date.
* @param endDate - The end date.
* @param props - The props.
* @returns - The formatted date range or an empty string.
*/
function safeDateRangeFormat(startDate, endDate, props) {
	if (!startDate) return "";
	var formattedStartDate = safeDateFormat(startDate, props);
	var formattedEndDate = endDate ? safeDateFormat(endDate, props) : "";
	return "".concat(formattedStartDate, " - ").concat(formattedEndDate);
}
/**
* Safely formats multiple dates.
*
* @param dates - The dates.
* @param props - The props.
* @returns - The formatted dates or an empty string.
*/
function safeMultipleDatesFormat(dates, props) {
	if (!(dates === null || dates === void 0 ? void 0 : dates.length)) return "";
	var formattedFirstDate = dates[0] ? safeDateFormat(dates[0], props) : "";
	if (dates.length === 1) return formattedFirstDate;
	if (dates.length === 2 && dates[1]) {
		var formattedSecondDate = safeDateFormat(dates[1], props);
		return "".concat(formattedFirstDate, ", ").concat(formattedSecondDate);
	}
	var extraDatesCount = dates.length - 1;
	return "".concat(formattedFirstDate, " (+").concat(extraDatesCount, ")");
}
/**
* Sets the time for a given date.
*
* @param date - The date.
* @param time - An object containing the hour, minute, and second.
* @returns - The date with the time set.
*/
function setTime(date, _a) {
	var _b = _a.hour, hour = _b === void 0 ? 0 : _b, _c = _a.minute, minute = _c === void 0 ? 0 : _c, _d = _a.second;
	return setHours(setMinutes(setSeconds(date, _d === void 0 ? 0 : _d), minute), hour);
}
/**
* Gets the week of the year for a given date.
*
* @param date - The date.
* @returns - The week of the year.
*/
function getWeek(date) {
	return getISOWeek(date);
}
/**
* Gets the day of the week code for a given day.
*
* @param day - The day.
* @param locale - The locale.
* @returns - The day of the week code.
*/
function getDayOfWeekCode(day, locale) {
	return formatDate(day, "ddd", locale);
}
/**
* Gets the start of the day for a given date.
*
* @param date - The date.
* @returns - The start of the day.
*/
function getStartOfDay(date) {
	return startOfDay(date);
}
/**
* Gets the start of the week for a given date.
*
* @param date - The date.
* @param locale - The locale.
* @param calendarStartDay - The day the calendar starts on.
* @returns - The start of the week.
*/
function getStartOfWeek(date, locale, calendarStartDay) {
	return startOfWeek(date, {
		locale: locale ? getLocaleObject(locale) : getLocaleObject(getDefaultLocale()),
		weekStartsOn: calendarStartDay
	});
}
/**
* Gets the start of the month for a given date.
*
* @param date - The date.
* @returns - The start of the month.
*/
function getStartOfMonth(date) {
	return startOfMonth(date);
}
/**
* Gets the start of the year for a given date.
*
* @param date - The date.
* @returns - The start of the year.
*/
function getStartOfYear(date) {
	return startOfYear(date);
}
/**
* Gets the start of the quarter for a given date.
*
* @param date - The date.
* @returns - The start of the quarter.
*/
function getStartOfQuarter(date) {
	return startOfQuarter(date);
}
/**
* Gets the start of today.
*
* @returns - The start of today.
*/
function getStartOfToday() {
	return startOfDay(newDate());
}
/**
* Gets the end of the day for a given date.
*
* @param date - The date.
* @returns - The end of the day.
*/
function getEndOfDay(date) {
	return endOfDay(date);
}
/**
* Gets the end of the week for a given date.
*
* @param date - The date.
* @returns - The end of the week.
*/
function getEndOfWeek(date) {
	return endOfWeek(date);
}
/**
* Gets the end of the month for a given date.
*
* @param date - The date.
* @returns - The end of the month.
*/
function getEndOfMonth(date) {
	return endOfMonth(date);
}
/**
* Checks if two dates are in the same year.
*
* @param date1 - The first date.
* @param date2 - The second date.
* @returns - True if the dates are in the same year, false otherwise.
*/
function isSameYear(date1, date2) {
	if (date1 && date2) return isSameYear$1(date1, date2);
	else return !date1 && !date2;
}
/**
* Checks if two dates are in the same month.
*
* @param date1 - The first date.
* @param date2 - The second date.
* @returns - True if the dates are in the same month, false otherwise.
*/
function isSameMonth(date1, date2) {
	if (date1 && date2) return isSameMonth$1(date1, date2);
	else return !date1 && !date2;
}
/**
* Checks if two dates are in the same quarter.
*
* @param date1 - The first date.
* @param date2 - The second date.
* @returns - True if the dates are in the same quarter, false otherwise.
*/
function isSameQuarter(date1, date2) {
	if (date1 && date2) return isSameQuarter$1(date1, date2);
	else return !date1 && !date2;
}
/**
* Checks if two dates are on the same day.
*
* @param date1 - The first date.
* @param date2 - The second date.
* @returns - True if the dates are on the same day, false otherwise.
*/
function isSameDay(date1, date2) {
	if (date1 && date2) return isSameDay$1(date1, date2);
	else return !date1 && !date2;
}
/**
* Checks if two dates are equal.
*
* @param date1 - The first date.
* @param date2 - The second date.
* @returns - True if the dates are equal, false otherwise.
*/
function isEqual(date1, date2) {
	if (date1 && date2) return isEqual$1(date1, date2);
	else return !date1 && !date2;
}
/**
* Checks if a day is within a date range.
*
* @param day - The day to check.
* @param startDate - The start date of the range.
* @param endDate - The end date of the range.
* @returns - True if the day is within the range, false otherwise.
*/
function isDayInRange(day, startDate, endDate) {
	var valid;
	var start = startOfDay(startDate);
	var end = endOfDay(endDate);
	try {
		valid = isWithinInterval(day, {
			start,
			end
		});
	} catch (err) {
		valid = false;
	}
	return valid;
}
/**
* Registers a locale.
*
* @param localeName - The name of the locale.
* @param localeData - The data of the locale.
*/
function registerLocale(localeName, localeData) {
	var scope = getLocaleScope();
	if (!scope.__localeData__) scope.__localeData__ = {};
	scope.__localeData__[localeName] = localeData;
}
/**
* Sets the default locale.
*
* @param localeName - The name of the locale.
*/
function setDefaultLocale(localeName) {
	var scope = getLocaleScope();
	scope.__localeId__ = localeName;
}
/**
* Gets the default locale.
*
* @returns - The default locale.
*/
function getDefaultLocale() {
	return getLocaleScope().__localeId__;
}
/**
* Gets the locale object.
*
* @param localeSpec - The locale specification.
* @returns - The locale object.
*/
function getLocaleObject(localeSpec) {
	if (typeof localeSpec === "string") {
		var scope = getLocaleScope();
		return scope.__localeData__ ? scope.__localeData__[localeSpec] : void 0;
	} else return localeSpec;
}
/**
* Formats the weekday in a given locale.
*
* @param date - The date to format.
* @param formatFunc - The formatting function.
* @param locale - The locale to use for formatting.
* @returns - The formatted weekday.
*/
function getFormattedWeekdayInLocale(date, formatFunc, locale) {
	return formatFunc(formatDate(date, "EEEE", locale));
}
/**
* Gets the minimum weekday in a given locale.
*
* @param date - The date to format.
* @param locale - The locale to use for formatting.
* @returns - The minimum weekday.
*/
function getWeekdayMinInLocale(date, locale) {
	return formatDate(date, "EEEEEE", locale);
}
/**
* Gets the short weekday in a given locale.
*
* @param date - The date to format.
* @param locale - The locale to use for formatting.
* @returns - The short weekday.
*/
function getWeekdayShortInLocale(date, locale) {
	return formatDate(date, "EEE", locale);
}
/**
* Gets the month in a given locale.
*
* @param month - The month to format.
* @param locale - The locale to use for formatting.
* @returns - The month.
*/
function getMonthInLocale(month, locale) {
	return formatDate(setMonth(newDate(), month), "LLLL", locale);
}
/**
* Gets the short month in a given locale.
*
* @param month - The month to format.
* @param locale - The locale to use for formatting.
* @returns - The short month.
*/
function getMonthShortInLocale(month, locale) {
	return formatDate(setMonth(newDate(), month), "LLL", locale);
}
/**
* Gets the short quarter in a given locale.
*
* @param quarter - The quarter to format.
* @param locale - The locale to use for formatting.
* @returns - The short quarter.
*/
function getQuarterShortInLocale(quarter, locale) {
	return formatDate(setQuarter(newDate(), quarter), "QQQ", locale);
}
/**
* Checks if a day is disabled.
*
* @param day - The day to check.
* @param options - The options to consider when checking.
* @returns - Returns true if the day is disabled, false otherwise.
*/
function isDayDisabled(day, _a) {
	var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, excludeDateIntervals = _b.excludeDateIntervals, includeDates = _b.includeDates, includeDateIntervals = _b.includeDateIntervals, filterDate = _b.filterDate;
	return isOutOfBounds(day, {
		minDate,
		maxDate
	}) || excludeDates && excludeDates.some(function(excludeDate) {
		if (excludeDate instanceof Date) return isSameDay(day, excludeDate);
		else return isSameDay(day, excludeDate.date);
	}) || excludeDateIntervals && excludeDateIntervals.some(function(_a) {
		var start = _a.start, end = _a.end;
		return isWithinInterval(day, {
			start,
			end
		});
	}) || includeDates && !includeDates.some(function(includeDate) {
		return isSameDay(day, includeDate);
	}) || includeDateIntervals && !includeDateIntervals.some(function(_a) {
		var start = _a.start, end = _a.end;
		return isWithinInterval(day, {
			start,
			end
		});
	}) || filterDate && !filterDate(newDate(day)) || false;
}
/**
* Checks if a day is excluded.
*
* @param day - The day to check.
* @param options - The options to consider when checking.
* @returns - Returns true if the day is excluded, false otherwise.
*/
function isDayExcluded(day, _a) {
	var _b = _a === void 0 ? {} : _a, excludeDates = _b.excludeDates, excludeDateIntervals = _b.excludeDateIntervals;
	if (excludeDateIntervals && excludeDateIntervals.length > 0) return excludeDateIntervals.some(function(_a) {
		var start = _a.start, end = _a.end;
		return isWithinInterval(day, {
			start,
			end
		});
	});
	return excludeDates && excludeDates.some(function(excludeDate) {
		var _a;
		if (excludeDate instanceof Date) return isSameDay(day, excludeDate);
		else return isSameDay(day, (_a = excludeDate.date) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Date());
	}) || false;
}
function isMonthDisabled(month, _a) {
	var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, includeDates = _b.includeDates, filterDate = _b.filterDate;
	return isOutOfBounds(month, {
		minDate: minDate ? startOfMonth(minDate) : void 0,
		maxDate: maxDate ? endOfMonth(maxDate) : void 0
	}) || (excludeDates === null || excludeDates === void 0 ? void 0 : excludeDates.some(function(excludeDate) {
		return isSameMonth(month, excludeDate instanceof Date ? excludeDate : excludeDate.date);
	})) || includeDates && !includeDates.some(function(includeDate) {
		return isSameMonth(month, includeDate);
	}) || filterDate && !filterDate(newDate(month)) || false;
}
function isMonthInRange(startDate, endDate, m, day) {
	var startDateYear = getYear(startDate);
	var startDateMonth = getMonth(startDate);
	var endDateYear = getYear(endDate);
	var endDateMonth = getMonth(endDate);
	var dayYear = getYear(day);
	if (startDateYear === endDateYear && startDateYear === dayYear) return startDateMonth <= m && m <= endDateMonth;
	else if (startDateYear < endDateYear) return dayYear === startDateYear && startDateMonth <= m || dayYear === endDateYear && endDateMonth >= m || dayYear < endDateYear && dayYear > startDateYear;
	return false;
}
/**
* To check if a date's month and year are disabled/excluded
* @param date Date to check
* @returns {boolean} true if month and year are disabled/excluded, false otherwise
*/
function isMonthYearDisabled(date, _a) {
	var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, includeDates = _b.includeDates;
	return isOutOfBounds(date, {
		minDate,
		maxDate
	}) || excludeDates && excludeDates.some(function(excludedDate) {
		return isSameMonth(excludedDate instanceof Date ? excludedDate : excludedDate.date, date);
	}) || includeDates && !includeDates.some(function(includedDate) {
		return isSameMonth(includedDate, date);
	}) || false;
}
function isQuarterDisabled(quarter, _a) {
	var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, includeDates = _b.includeDates, filterDate = _b.filterDate;
	return isOutOfBounds(quarter, {
		minDate,
		maxDate
	}) || (excludeDates === null || excludeDates === void 0 ? void 0 : excludeDates.some(function(excludeDate) {
		return isSameQuarter(quarter, excludeDate instanceof Date ? excludeDate : excludeDate.date);
	})) || includeDates && !includeDates.some(function(includeDate) {
		return isSameQuarter(quarter, includeDate);
	}) || filterDate && !filterDate(newDate(quarter)) || false;
}
function isYearInRange(year, start, end) {
	if (!start || !end) return false;
	if (!isValid$1(start) || !isValid$1(end)) return false;
	var startYear = getYear(start);
	var endYear = getYear(end);
	return startYear <= year && endYear >= year;
}
function isYearDisabled(year, _a) {
	var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, includeDates = _b.includeDates, filterDate = _b.filterDate;
	var date = new Date(year, 0, 1);
	return isOutOfBounds(date, {
		minDate: minDate ? startOfYear(minDate) : void 0,
		maxDate: maxDate ? endOfYear(maxDate) : void 0
	}) || (excludeDates === null || excludeDates === void 0 ? void 0 : excludeDates.some(function(excludeDate) {
		return isSameYear(date, excludeDate instanceof Date ? excludeDate : excludeDate.date);
	})) || includeDates && !includeDates.some(function(includeDate) {
		return isSameYear(date, includeDate);
	}) || filterDate && !filterDate(newDate(date)) || false;
}
function isQuarterInRange(startDate, endDate, q, day) {
	var startDateYear = getYear(startDate);
	var startDateQuarter = getQuarter(startDate);
	var endDateYear = getYear(endDate);
	var endDateQuarter = getQuarter(endDate);
	var dayYear = getYear(day);
	if (startDateYear === endDateYear && startDateYear === dayYear) return startDateQuarter <= q && q <= endDateQuarter;
	else if (startDateYear < endDateYear) return dayYear === startDateYear && startDateQuarter <= q || dayYear === endDateYear && endDateQuarter >= q || dayYear < endDateYear && dayYear > startDateYear;
	return false;
}
function isOutOfBounds(day, _a) {
	var _b;
	var _c = _a === void 0 ? {} : _a, minDate = _c.minDate, maxDate = _c.maxDate;
	return (_b = minDate && differenceInCalendarDays(day, minDate) < 0 || maxDate && differenceInCalendarDays(day, maxDate) > 0) !== null && _b !== void 0 ? _b : false;
}
function isTimeInList(time, times) {
	return times.some(function(listTime) {
		return getHours(listTime) === getHours(time) && getMinutes(listTime) === getMinutes(time) && getSeconds(listTime) === getSeconds(time);
	});
}
function isTimeDisabled(time, _a) {
	var _b = _a === void 0 ? {} : _a, excludeTimes = _b.excludeTimes, includeTimes = _b.includeTimes, filterTime = _b.filterTime;
	return excludeTimes && isTimeInList(time, excludeTimes) || includeTimes && !isTimeInList(time, includeTimes) || filterTime && !filterTime(time) || false;
}
function isTimeInDisabledRange(time, _a) {
	var minTime = _a.minTime, maxTime = _a.maxTime;
	if (!minTime || !maxTime) throw new Error("Both minTime and maxTime props required");
	var baseTime = newDate();
	baseTime = setHours(baseTime, getHours(time));
	baseTime = setMinutes(baseTime, getMinutes(time));
	baseTime = setSeconds(baseTime, getSeconds(time));
	var min = newDate();
	min = setHours(min, getHours(minTime));
	min = setMinutes(min, getMinutes(minTime));
	min = setSeconds(min, getSeconds(minTime));
	var max = newDate();
	max = setHours(max, getHours(maxTime));
	max = setMinutes(max, getMinutes(maxTime));
	max = setSeconds(max, getSeconds(maxTime));
	var valid;
	try {
		valid = !isWithinInterval(baseTime, {
			start: min,
			end: max
		});
	} catch (err) {
		valid = false;
	}
	return valid;
}
function monthDisabledBefore(day, _a) {
	var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, includeDates = _b.includeDates;
	var previousMonth = subMonths(day, 1);
	return minDate && differenceInCalendarMonths(minDate, previousMonth) > 0 || includeDates && includeDates.every(function(includeDate) {
		return differenceInCalendarMonths(includeDate, previousMonth) > 0;
	}) || false;
}
function monthDisabledAfter(day, _a) {
	var _b = _a === void 0 ? {} : _a, maxDate = _b.maxDate, includeDates = _b.includeDates;
	var nextMonth = addMonths(day, 1);
	return maxDate && differenceInCalendarMonths(nextMonth, maxDate) > 0 || includeDates && includeDates.every(function(includeDate) {
		return differenceInCalendarMonths(nextMonth, includeDate) > 0;
	}) || false;
}
function quarterDisabledBefore(date, _a) {
	var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, includeDates = _b.includeDates;
	var previousQuarter = subQuarters(startOfYear(date), 1);
	return minDate && differenceInCalendarQuarters(minDate, previousQuarter) > 0 || includeDates && includeDates.every(function(includeDate) {
		return differenceInCalendarQuarters(includeDate, previousQuarter) > 0;
	}) || false;
}
function quarterDisabledAfter(date, _a) {
	var _b = _a === void 0 ? {} : _a, maxDate = _b.maxDate, includeDates = _b.includeDates;
	var nextQuarter = addQuarters(endOfYear(date), 1);
	return maxDate && differenceInCalendarQuarters(nextQuarter, maxDate) > 0 || includeDates && includeDates.every(function(includeDate) {
		return differenceInCalendarQuarters(nextQuarter, includeDate) > 0;
	}) || false;
}
function yearDisabledBefore(day, _a) {
	var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, includeDates = _b.includeDates;
	var previousYear = subYears(day, 1);
	return minDate && differenceInCalendarYears(minDate, previousYear) > 0 || includeDates && includeDates.every(function(includeDate) {
		return differenceInCalendarYears(includeDate, previousYear) > 0;
	}) || false;
}
function yearsDisabledBefore(day, _a) {
	var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, _c = _b.yearItemNumber, yearItemNumber = _c === void 0 ? DEFAULT_YEAR_ITEM_NUMBER : _c;
	var endPeriod = getYearsPeriod(getStartOfYear(subYears(day, yearItemNumber)), yearItemNumber).endPeriod;
	var minDateYear = minDate && getYear(minDate);
	return minDateYear && minDateYear > endPeriod || false;
}
function yearDisabledAfter(day, _a) {
	var _b = _a === void 0 ? {} : _a, maxDate = _b.maxDate, includeDates = _b.includeDates;
	var nextYear = addYears(day, 1);
	return maxDate && differenceInCalendarYears(nextYear, maxDate) > 0 || includeDates && includeDates.every(function(includeDate) {
		return differenceInCalendarYears(nextYear, includeDate) > 0;
	}) || false;
}
function yearsDisabledAfter(day, _a) {
	var _b = _a === void 0 ? {} : _a, maxDate = _b.maxDate, _c = _b.yearItemNumber, yearItemNumber = _c === void 0 ? DEFAULT_YEAR_ITEM_NUMBER : _c;
	var startPeriod = getYearsPeriod(addYears(day, yearItemNumber), yearItemNumber).startPeriod;
	var maxDateYear = maxDate && getYear(maxDate);
	return maxDateYear && maxDateYear < startPeriod || false;
}
function getEffectiveMinDate(_a) {
	var minDate = _a.minDate, includeDates = _a.includeDates;
	if (includeDates && minDate) return min(includeDates.filter(function(includeDate) {
		return differenceInCalendarDays(includeDate, minDate) >= 0;
	}));
	else if (includeDates) return min(includeDates);
	else return minDate;
}
function getEffectiveMaxDate(_a) {
	var maxDate = _a.maxDate, includeDates = _a.includeDates;
	if (includeDates && maxDate) return max(includeDates.filter(function(includeDate) {
		return differenceInCalendarDays(includeDate, maxDate) <= 0;
	}));
	else if (includeDates) return max(includeDates);
	else return maxDate;
}
/**
* Get a map of highlighted dates with their corresponding classes.
* @param highlightDates The dates to highlight.
* @param defaultClassName The default class to use for highlighting.
* @returns A map with dates as keys and arrays of class names as values.
*/
function getHighLightDaysMap(highlightDates, defaultClassName) {
	var _a;
	if (highlightDates === void 0) highlightDates = [];
	if (defaultClassName === void 0) defaultClassName = "react-datepicker__day--highlighted";
	var dateClasses = /* @__PURE__ */ new Map();
	for (var i = 0, len = highlightDates.length; i < len; i++) {
		var obj = highlightDates[i];
		if (isDate(obj)) {
			var key = formatDate(obj, "MM.dd.yyyy");
			var classNamesArr = dateClasses.get(key) || [];
			if (!classNamesArr.includes(defaultClassName)) {
				classNamesArr.push(defaultClassName);
				dateClasses.set(key, classNamesArr);
			}
		} else if (typeof obj === "object") {
			var className = (_a = Object.keys(obj)[0]) !== null && _a !== void 0 ? _a : "";
			var arrOfDates = obj[className];
			if (typeof className === "string" && Array.isArray(arrOfDates)) for (var k = 0, len_1 = arrOfDates.length; k < len_1; k++) {
				var dateK = arrOfDates[k];
				if (dateK) {
					var key = formatDate(dateK, "MM.dd.yyyy");
					var classNamesArr = dateClasses.get(key) || [];
					if (!classNamesArr.includes(className)) {
						classNamesArr.push(className);
						dateClasses.set(key, classNamesArr);
					}
				}
			}
		}
	}
	return dateClasses;
}
/**
* Compare the two arrays
* @param array1 The first array to compare.
* @param array2 The second array to compare.
* @returns true, if the passed arrays are equal, false otherwise.
*/
function arraysAreEqual(array1, array2) {
	if (array1.length !== array2.length) return false;
	return array1.every(function(value, index) {
		return value === array2[index];
	});
}
/**
* Assign the custom class to each date
* @param holidayDates array of object containing date and name of the holiday
* @param defaultClassName className to be added.
* @returns Map containing date as key and array of className and holiday name as value
*/
function getHolidaysMap(holidayDates, defaultClassName) {
	if (holidayDates === void 0) holidayDates = [];
	if (defaultClassName === void 0) defaultClassName = "react-datepicker__day--holidays";
	var dateClasses = /* @__PURE__ */ new Map();
	holidayDates.forEach(function(holiday) {
		var dateObj = holiday.date, holidayName = holiday.holidayName;
		if (!isDate(dateObj)) return;
		var key = formatDate(dateObj, "MM.dd.yyyy");
		var classNamesObj = dateClasses.get(key) || {
			className: "",
			holidayNames: []
		};
		if ("className" in classNamesObj && classNamesObj["className"] === defaultClassName && arraysAreEqual(classNamesObj["holidayNames"], [holidayName])) return;
		classNamesObj["className"] = defaultClassName;
		var holidayNameArr = classNamesObj["holidayNames"];
		classNamesObj["holidayNames"] = holidayNameArr ? __spreadArray(__spreadArray([], holidayNameArr, true), [holidayName], false) : [holidayName];
		dateClasses.set(key, classNamesObj);
	});
	return dateClasses;
}
/**
* Determines the times to inject after a given start of day, current time, and multiplier.
* @param startOfDay The start of the day.
* @param currentTime The current time.
* @param currentMultiplier The current multiplier.
* @param intervals The intervals.
* @param injectedTimes The times to potentially inject.
* @returns An array of times to inject.
*/
function timesToInjectAfter(startOfDay, currentTime, currentMultiplier, intervals, injectedTimes) {
	var l = injectedTimes.length;
	var times = [];
	for (var i = 0; i < l; i++) {
		var injectedTime = startOfDay;
		var injectedTimeValue = injectedTimes[i];
		if (injectedTimeValue) {
			injectedTime = addHours(injectedTime, getHours(injectedTimeValue));
			injectedTime = addMinutes(injectedTime, getMinutes(injectedTimeValue));
			injectedTime = addSeconds(injectedTime, getSeconds(injectedTimeValue));
		}
		var nextTime = addMinutes(startOfDay, (currentMultiplier + 1) * intervals);
		if (isAfter(injectedTime, currentTime) && isBefore(injectedTime, nextTime) && injectedTimeValue != void 0) times.push(injectedTimeValue);
	}
	return times;
}
/**
* Adds a leading zero to a number if it's less than 10.
* @param i The number to add a leading zero to.
* @returns The number as a string, with a leading zero if it was less than 10.
*/
function addZero(i) {
	return i < 10 ? "0".concat(i) : "".concat(i);
}
/**
* Gets the start and end years for a period.
* @param date The date to get the period for.
* @param yearItemNumber The number of years in the period. Defaults to DEFAULT_YEAR_ITEM_NUMBER.
* @returns An object with the start and end years for the period.
*/
function getYearsPeriod(date, yearItemNumber) {
	if (yearItemNumber === void 0) yearItemNumber = DEFAULT_YEAR_ITEM_NUMBER;
	var endPeriod = Math.ceil(getYear(date) / yearItemNumber) * yearItemNumber;
	return {
		startPeriod: endPeriod - (yearItemNumber - 1),
		endPeriod
	};
}
/**
* Gets the number of hours in a day.
* @param d The date to get the number of hours for.
* @returns The number of hours in the day.
*/
function getHoursInDay(d) {
	var startOfDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());
	var startOfTheNextDay = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 24);
	return Math.round((+startOfTheNextDay - +startOfDay) / 36e5);
}
/**
* Returns the start of the minute for the given date
*
* NOTE: this function is a DST and timezone-safe analog of `date-fns/startOfMinute`
* do not make changes unless you know what you're doing
*
* See comments on https://github.com/Hacker0x01/react-datepicker/pull/4244
* for more details
*
* @param d date
* @returns start of the minute
*/
function startOfMinute(d) {
	var seconds = d.getSeconds();
	var milliseconds = d.getMilliseconds();
	return toDate(d.getTime() - seconds * 1e3 - milliseconds);
}
/**
* Returns whether the given dates are in the same minute
*
* This function is a DST and timezone-safe analog of `date-fns/isSameMinute`
*
* @param d1
* @param d2
* @returns
*/
function isSameMinute(d1, d2) {
	return startOfMinute(d1).getTime() === startOfMinute(d2).getTime();
}
/**
* Returns a new datetime object representing the input date with midnight time
* @param date The date to get the midnight time for
* @returns A new datetime object representing the input date with midnight time
*/
function getMidnightDate(date) {
	if (!isDate(date)) throw new Error("Invalid date");
	var dateWithoutTime = new Date(date);
	dateWithoutTime.setHours(0, 0, 0, 0);
	return dateWithoutTime;
}
/**
* Is the first date before the second one?
* @param date The date that should be before the other one to return true
* @param dateToCompare The date to compare with
* @returns The first date is before the second date
*
* Note:
*  This function considers the mid-night of the given dates for comparison.
*  It evaluates whether date is before dateToCompare based on their mid-night timestamps.
*/
function isDateBefore(date, dateToCompare) {
	if (!isDate(date) || !isDate(dateToCompare)) throw new Error("Invalid date received");
	return isBefore(getMidnightDate(date), getMidnightDate(dateToCompare));
}
/**
* Checks if the space key was pressed down.
*
* @param event - The keyboard event.
* @returns - Returns true if the space key was pressed down, false otherwise.
*/
function isSpaceKeyDown(event) {
	return event.key === KeyType.Space;
}
/**
* `InputTime` is a React component that manages time input.
*
* @component
* @example
* <InputTime timeString="12:00" />
*
* @param props - The properties that define the `InputTime` component.
* @param props.onChange - Function that is called when the date changes.
* @param props.date - The initial date value.
* @param props.timeString - The initial time string value.
* @param props.timeInputLabel - The label for the time input.
* @param props.customTimeInput - An optional custom time input element.
*
* @returns The `InputTime` component.
*/
var InputTime = function(_super) {
	__extends(InputTime, _super);
	function InputTime(props) {
		var _this = _super.call(this, props) || this;
		_this.inputRef = import_react.createRef();
		_this.onTimeChange = function(time) {
			var _a, _b;
			_this.setState({ time });
			var propDate = _this.props.date;
			var date = propDate instanceof Date && !isNaN(+propDate) ? propDate : /* @__PURE__ */ new Date();
			if (time === null || time === void 0 ? void 0 : time.includes(":")) {
				var _c = time.split(":"), hours = _c[0], minutes = _c[1];
				date.setHours(Number(hours));
				date.setMinutes(Number(minutes));
			}
			(_b = (_a = _this.props).onChange) === null || _b === void 0 || _b.call(_a, date);
		};
		_this.renderTimeInput = function() {
			var time = _this.state.time;
			var _a = _this.props, date = _a.date, timeString = _a.timeString, customTimeInput = _a.customTimeInput;
			if (customTimeInput) return (0, import_react.cloneElement)(customTimeInput, {
				date,
				value: time,
				onChange: _this.onTimeChange
			});
			return import_react.createElement("input", {
				type: "time",
				className: "react-datepicker-time__input",
				placeholder: "Time",
				name: "time-input",
				ref: _this.inputRef,
				onClick: function() {
					var _a;
					(_a = _this.inputRef.current) === null || _a === void 0 || _a.focus();
				},
				required: true,
				value: time,
				onChange: function(event) {
					_this.onTimeChange(event.target.value || timeString);
				}
			});
		};
		_this.state = { time: _this.props.timeString };
		return _this;
	}
	InputTime.getDerivedStateFromProps = function(props, state) {
		if (props.timeString !== state.time) return { time: props.timeString };
		return null;
	};
	InputTime.prototype.render = function() {
		return import_react.createElement("div", { className: "react-datepicker__input-time-container" }, import_react.createElement("div", { className: "react-datepicker-time__caption" }, this.props.timeInputLabel), import_react.createElement("div", { className: "react-datepicker-time__input-container" }, import_react.createElement("div", { className: "react-datepicker-time__input" }, this.renderTimeInput())));
	};
	return InputTime;
}(import_react.Component);
/**
* `Day` is a React component that represents a single day in a date picker.
* It handles the rendering and interaction of a day.
*
* @prop ariaLabelPrefixWhenEnabled - Aria label prefix when the day is enabled.
* @prop ariaLabelPrefixWhenDisabled - Aria label prefix when the day is disabled.
* @prop disabledKeyboardNavigation - Whether keyboard navigation is disabled.
* @prop day - The day to be displayed.
* @prop dayClassName - Function to customize the CSS class of the day.
* @prop endDate - The end date in a range.
* @prop highlightDates - Map of dates to be highlighted.
* @prop holidays - Map of holiday dates.
* @prop inline - Whether the date picker is inline.
* @prop shouldFocusDayInline - Whether the day should be focused when date picker is inline.
* @prop month - The month the day belongs to.
* @prop onClick - Click event handler.
* @prop onMouseEnter - Mouse enter event handler.
* @prop handleOnKeyDown - Key down event handler.
* @prop usePointerEvent - Whether to use pointer events.
* @prop preSelection - The date that is currently selected.
* @prop selected - The selected date.
* @prop selectingDate - The date currently being selected.
* @prop selectsEnd - Whether the day can be the end date in a range.
* @prop selectsStart - Whether the day can be the start date in a range.
* @prop selectsRange - Whether the day can be in a range.
* @prop showWeekPicker - Whether to show week picker.
* @prop showWeekNumber - Whether to show week numbers.
* @prop selectsDisabledDaysInRange - Whether to select disabled days in a range.
* @prop selectsMultiple - Whether to allow multiple date selection.
* @prop selectedDates - Array of selected dates.
* @prop startDate - The start date in a range.
* @prop renderDayContents - Function to customize the rendering of the day's contents.
* @prop containerRef - Ref for the container.
* @prop excludeDates - Array of dates to be excluded.
* @prop calendarStartDay - The start day of the week.
* @prop locale - The locale object.
* @prop monthShowsDuplicateDaysEnd - Whether to show duplicate days at the end of the month.
* @prop monthShowsDuplicateDaysStart - Whether to show duplicate days at the start of the month.
* @prop includeDates - Array of dates to be included.
* @prop includeDateIntervals - Array of date intervals to be included.
* @prop minDate - The minimum date that can be selected.
* @prop maxDate - The maximum date that can be selected.
*
* @example
* ```tsx
* import React from 'react';
* import Day from './day';
*
* function MyComponent() {
*   const handleDayClick = (event) => {
*     console.log('Day clicked', event);
*   };
*
*   const handleDayMouseEnter = (event) => {
*     console.log('Mouse entered day', event);
*   };
*
*   const renderDayContents = (date) => {
*     return <div>{date.getDate()}</div>;
*   };
*
*   return (
*     <Day
*       day={new Date()}
*       onClick={handleDayClick}
*       onMouseEnter={handleDayMouseEnter}
*       renderDayContents={renderDayContents}
*     />
*   );
* }
*
* export default MyComponent;
* ```
*/
var Day = function(_super) {
	__extends(Day, _super);
	function Day() {
		var _this = _super !== null && _super.apply(this, arguments) || this;
		_this.dayEl = (0, import_react.createRef)();
		_this.handleClick = function(event) {
			if (!_this.isDisabled() && _this.props.onClick) _this.props.onClick(event);
		};
		_this.handleMouseEnter = function(event) {
			if (!_this.isDisabled() && _this.props.onMouseEnter) _this.props.onMouseEnter(event);
		};
		_this.handleOnKeyDown = function(event) {
			var _a, _b;
			if (event.key === KeyType.Space) {
				event.preventDefault();
				event.key = KeyType.Enter;
			}
			(_b = (_a = _this.props).handleOnKeyDown) === null || _b === void 0 || _b.call(_a, event);
		};
		_this.isSameDay = function(other) {
			return isSameDay(_this.props.day, other);
		};
		_this.isKeyboardSelected = function() {
			var _a;
			if (_this.props.disabledKeyboardNavigation) return false;
			var isSelectedDate = _this.props.selectsMultiple ? (_a = _this.props.selectedDates) === null || _a === void 0 ? void 0 : _a.some(function(date) {
				return _this.isSameDayOrWeek(date);
			}) : _this.isSameDayOrWeek(_this.props.selected);
			var isDisabled = _this.props.preSelection && _this.isDisabled(_this.props.preSelection);
			return !isSelectedDate && _this.isSameDayOrWeek(_this.props.preSelection) && !isDisabled;
		};
		_this.isDisabled = function(day) {
			if (day === void 0) day = _this.props.day;
			return isDayDisabled(day, {
				minDate: _this.props.minDate,
				maxDate: _this.props.maxDate,
				excludeDates: _this.props.excludeDates,
				excludeDateIntervals: _this.props.excludeDateIntervals,
				includeDateIntervals: _this.props.includeDateIntervals,
				includeDates: _this.props.includeDates,
				filterDate: _this.props.filterDate
			});
		};
		_this.isExcluded = function() {
			return isDayExcluded(_this.props.day, {
				excludeDates: _this.props.excludeDates,
				excludeDateIntervals: _this.props.excludeDateIntervals
			});
		};
		_this.isStartOfWeek = function() {
			return isSameDay(_this.props.day, getStartOfWeek(_this.props.day, _this.props.locale, _this.props.calendarStartDay));
		};
		_this.isSameWeek = function(other) {
			return _this.props.showWeekPicker && isSameDay(other, getStartOfWeek(_this.props.day, _this.props.locale, _this.props.calendarStartDay));
		};
		_this.isSameDayOrWeek = function(other) {
			return _this.isSameDay(other) || _this.isSameWeek(other);
		};
		_this.getHighLightedClass = function() {
			var _a = _this.props, day = _a.day, highlightDates = _a.highlightDates;
			if (!highlightDates) return false;
			var dayStr = formatDate(day, "MM.dd.yyyy");
			return highlightDates.get(dayStr);
		};
		_this.getHolidaysClass = function() {
			var _a;
			var _b = _this.props, day = _b.day, holidays = _b.holidays;
			if (!holidays) return [void 0];
			var dayStr = formatDate(day, "MM.dd.yyyy");
			if (holidays.has(dayStr)) return [(_a = holidays.get(dayStr)) === null || _a === void 0 ? void 0 : _a.className];
			return [void 0];
		};
		_this.isInRange = function() {
			var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate;
			if (!startDate || !endDate) return false;
			return isDayInRange(day, startDate, endDate);
		};
		_this.isInSelectingRange = function() {
			var _a;
			var _b = _this.props, day = _b.day, selectsStart = _b.selectsStart, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange, selectsDisabledDaysInRange = _b.selectsDisabledDaysInRange, startDate = _b.startDate, endDate = _b.endDate;
			var selectingDate = (_a = _this.props.selectingDate) !== null && _a !== void 0 ? _a : _this.props.preSelection;
			if (!(selectsStart || selectsEnd || selectsRange) || !selectingDate || !selectsDisabledDaysInRange && _this.isDisabled()) return false;
			if (selectsStart && endDate && (isBefore(selectingDate, endDate) || isEqual(selectingDate, endDate))) return isDayInRange(day, selectingDate, endDate);
			if (selectsEnd && startDate && (isAfter(selectingDate, startDate) || isEqual(selectingDate, startDate))) return isDayInRange(day, startDate, selectingDate);
			if (selectsRange && startDate && !endDate && (isAfter(selectingDate, startDate) || isEqual(selectingDate, startDate))) return isDayInRange(day, startDate, selectingDate);
			return false;
		};
		_this.isSelectingRangeStart = function() {
			var _a;
			if (!_this.isInSelectingRange()) return false;
			var _b = _this.props, day = _b.day, startDate = _b.startDate, selectsStart = _b.selectsStart;
			var selectingDate = (_a = _this.props.selectingDate) !== null && _a !== void 0 ? _a : _this.props.preSelection;
			if (selectsStart) return isSameDay(day, selectingDate);
			else return isSameDay(day, startDate);
		};
		_this.isSelectingRangeEnd = function() {
			var _a;
			if (!_this.isInSelectingRange()) return false;
			var _b = _this.props, day = _b.day, endDate = _b.endDate, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange;
			var selectingDate = (_a = _this.props.selectingDate) !== null && _a !== void 0 ? _a : _this.props.preSelection;
			if (selectsEnd || selectsRange) return isSameDay(day, selectingDate);
			else return isSameDay(day, endDate);
		};
		_this.isRangeStart = function() {
			var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate;
			if (!startDate || !endDate) return false;
			return isSameDay(startDate, day);
		};
		_this.isRangeEnd = function() {
			var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate;
			if (!startDate || !endDate) return false;
			return isSameDay(endDate, day);
		};
		_this.isWeekend = function() {
			var weekday = getDay(_this.props.day);
			return weekday === 0 || weekday === 6;
		};
		_this.isAfterMonth = function() {
			return _this.props.month !== void 0 && (_this.props.month + 1) % 12 === getMonth(_this.props.day);
		};
		_this.isBeforeMonth = function() {
			return _this.props.month !== void 0 && (getMonth(_this.props.day) + 1) % 12 === _this.props.month;
		};
		_this.isCurrentDay = function() {
			return _this.isSameDay(newDate());
		};
		_this.isSelected = function() {
			var _a;
			if (_this.props.selectsMultiple) return (_a = _this.props.selectedDates) === null || _a === void 0 ? void 0 : _a.some(function(date) {
				return _this.isSameDayOrWeek(date);
			});
			return _this.isSameDayOrWeek(_this.props.selected);
		};
		_this.getClassNames = function(date) {
			return clsx("react-datepicker__day", _this.props.dayClassName ? _this.props.dayClassName(date) : void 0, "react-datepicker__day--" + getDayOfWeekCode(_this.props.day), {
				"react-datepicker__day--disabled": _this.isDisabled(),
				"react-datepicker__day--excluded": _this.isExcluded(),
				"react-datepicker__day--selected": _this.isSelected(),
				"react-datepicker__day--keyboard-selected": _this.isKeyboardSelected(),
				"react-datepicker__day--range-start": _this.isRangeStart(),
				"react-datepicker__day--range-end": _this.isRangeEnd(),
				"react-datepicker__day--in-range": _this.isInRange(),
				"react-datepicker__day--in-selecting-range": _this.isInSelectingRange(),
				"react-datepicker__day--selecting-range-start": _this.isSelectingRangeStart(),
				"react-datepicker__day--selecting-range-end": _this.isSelectingRangeEnd(),
				"react-datepicker__day--today": _this.isCurrentDay(),
				"react-datepicker__day--weekend": _this.isWeekend(),
				"react-datepicker__day--outside-month": _this.isAfterMonth() || _this.isBeforeMonth()
			}, _this.getHighLightedClass(), _this.getHolidaysClass());
		};
		_this.getAriaLabel = function() {
			var _a = _this.props, day = _a.day, _b = _a.ariaLabelPrefixWhenEnabled, ariaLabelPrefixWhenEnabled = _b === void 0 ? "Choose" : _b, _c = _a.ariaLabelPrefixWhenDisabled, ariaLabelPrefixWhenDisabled = _c === void 0 ? "Not available" : _c;
			var prefix = _this.isDisabled() || _this.isExcluded() ? ariaLabelPrefixWhenDisabled : ariaLabelPrefixWhenEnabled;
			return "".concat(prefix, " ").concat(formatDate(day, "PPPP", _this.props.locale));
		};
		_this.getTitle = function() {
			var _a = _this.props, day = _a.day, _b = _a.holidays, holidays = _b === void 0 ? /* @__PURE__ */ new Map() : _b, excludeDates = _a.excludeDates;
			var compareDt = formatDate(day, "MM.dd.yyyy");
			var titles = [];
			if (holidays.has(compareDt)) titles.push.apply(titles, holidays.get(compareDt).holidayNames);
			if (_this.isExcluded()) titles.push(excludeDates === null || excludeDates === void 0 ? void 0 : excludeDates.filter(function(excludeDate) {
				if (excludeDate instanceof Date) return isSameDay(excludeDate, day);
				return isSameDay(excludeDate === null || excludeDate === void 0 ? void 0 : excludeDate.date, day);
			}).map(function(excludeDate) {
				if (excludeDate instanceof Date) return;
				return excludeDate === null || excludeDate === void 0 ? void 0 : excludeDate.message;
			}));
			return titles.join(", ");
		};
		_this.getTabIndex = function() {
			var selectedDay = _this.props.selected;
			var preSelectionDay = _this.props.preSelection;
			return !(_this.props.showWeekPicker && (_this.props.showWeekNumber || !_this.isStartOfWeek())) && (_this.isKeyboardSelected() || _this.isSameDay(selectedDay) && isSameDay(preSelectionDay, selectedDay)) ? 0 : -1;
		};
		_this.handleFocusDay = function() {
			var _a;
			_this.shouldFocusDay() && ((_a = _this.dayEl.current) === null || _a === void 0 || _a.focus({ preventScroll: true }));
		};
		_this.renderDayContents = function() {
			if (_this.props.monthShowsDuplicateDaysEnd && _this.isAfterMonth()) return null;
			if (_this.props.monthShowsDuplicateDaysStart && _this.isBeforeMonth()) return null;
			return _this.props.renderDayContents ? _this.props.renderDayContents(getDate(_this.props.day), _this.props.day) : getDate(_this.props.day);
		};
		_this.render = function() {
			return import_react.createElement("div", {
				ref: _this.dayEl,
				className: _this.getClassNames(_this.props.day),
				onKeyDown: _this.handleOnKeyDown,
				onClick: _this.handleClick,
				onMouseEnter: !_this.props.usePointerEvent ? _this.handleMouseEnter : void 0,
				onPointerEnter: _this.props.usePointerEvent ? _this.handleMouseEnter : void 0,
				tabIndex: _this.getTabIndex(),
				"aria-label": _this.getAriaLabel(),
				role: "option",
				title: _this.getTitle(),
				"aria-disabled": _this.isDisabled(),
				"aria-current": _this.isCurrentDay() ? "date" : void 0,
				"aria-selected": _this.isSelected() || _this.isInRange()
			}, _this.renderDayContents(), _this.getTitle() !== "" && import_react.createElement("span", { className: "overlay" }, _this.getTitle()));
		};
		return _this;
	}
	Day.prototype.componentDidMount = function() {
		this.handleFocusDay();
	};
	Day.prototype.componentDidUpdate = function() {
		this.handleFocusDay();
	};
	Day.prototype.shouldFocusDay = function() {
		var shouldFocusDay = false;
		if (this.getTabIndex() === 0 && this.isSameDay(this.props.preSelection)) {
			if (!document.activeElement || document.activeElement === document.body) shouldFocusDay = true;
			if (this.props.inline && !this.props.shouldFocusDayInline) shouldFocusDay = false;
			if (this.isDayActiveElement()) shouldFocusDay = true;
			if (this.isDuplicateDay()) shouldFocusDay = false;
		}
		return shouldFocusDay;
	};
	Day.prototype.isDayActiveElement = function() {
		var _a, _b, _c;
		return ((_b = (_a = this.props.containerRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.contains(document.activeElement)) && ((_c = document.activeElement) === null || _c === void 0 ? void 0 : _c.classList.contains("react-datepicker__day"));
	};
	Day.prototype.isDuplicateDay = function() {
		return this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth() || this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth();
	};
	return Day;
}(import_react.Component);
var WeekNumber = function(_super) {
	__extends(WeekNumber, _super);
	function WeekNumber() {
		var _this = _super !== null && _super.apply(this, arguments) || this;
		_this.weekNumberEl = (0, import_react.createRef)();
		_this.handleClick = function(event) {
			if (_this.props.onClick) _this.props.onClick(event);
		};
		_this.handleOnKeyDown = function(event) {
			var _a, _b;
			if (event.key === KeyType.Space) {
				event.preventDefault();
				event.key = KeyType.Enter;
			}
			(_b = (_a = _this.props).handleOnKeyDown) === null || _b === void 0 || _b.call(_a, event);
		};
		_this.isKeyboardSelected = function() {
			return !_this.props.disabledKeyboardNavigation && !isSameDay(_this.props.date, _this.props.selected) && isSameDay(_this.props.date, _this.props.preSelection);
		};
		_this.getTabIndex = function() {
			return _this.props.showWeekPicker && _this.props.showWeekNumber && (_this.isKeyboardSelected() || isSameDay(_this.props.date, _this.props.selected) && isSameDay(_this.props.preSelection, _this.props.selected)) ? 0 : -1;
		};
		_this.handleFocusWeekNumber = function(prevProps) {
			var shouldFocusWeekNumber = false;
			if (_this.getTabIndex() === 0 && !(prevProps === null || prevProps === void 0 ? void 0 : prevProps.isInputFocused) && isSameDay(_this.props.date, _this.props.preSelection)) {
				if (!document.activeElement || document.activeElement === document.body) shouldFocusWeekNumber = true;
				if (_this.props.inline && !_this.props.shouldFocusDayInline) shouldFocusWeekNumber = false;
				if (_this.props.containerRef && _this.props.containerRef.current && _this.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number")) shouldFocusWeekNumber = true;
			}
			shouldFocusWeekNumber && _this.weekNumberEl.current && _this.weekNumberEl.current.focus({ preventScroll: true });
		};
		return _this;
	}
	Object.defineProperty(WeekNumber, "defaultProps", {
		get: function() {
			return { ariaLabelPrefix: "week " };
		},
		enumerable: false,
		configurable: true
	});
	WeekNumber.prototype.componentDidMount = function() {
		this.handleFocusWeekNumber();
	};
	WeekNumber.prototype.componentDidUpdate = function(prevProps) {
		this.handleFocusWeekNumber(prevProps);
	};
	WeekNumber.prototype.render = function() {
		var _a = this.props, weekNumber = _a.weekNumber, isWeekDisabled = _a.isWeekDisabled, _b = _a.ariaLabelPrefix, ariaLabelPrefix = _b === void 0 ? WeekNumber.defaultProps.ariaLabelPrefix : _b, onClick = _a.onClick;
		var weekNumberClasses = {
			"react-datepicker__week-number": true,
			"react-datepicker__week-number--clickable": !!onClick && !isWeekDisabled,
			"react-datepicker__week-number--selected": !!onClick && isSameDay(this.props.date, this.props.selected)
		};
		return import_react.createElement("div", {
			ref: this.weekNumberEl,
			className: clsx(weekNumberClasses),
			"aria-label": "".concat(ariaLabelPrefix, " ").concat(this.props.weekNumber),
			onClick: this.handleClick,
			onKeyDown: this.handleOnKeyDown,
			tabIndex: this.getTabIndex()
		}, weekNumber);
	};
	return WeekNumber;
}(import_react.Component);
var Week = function(_super) {
	__extends(Week, _super);
	function Week() {
		var _this = _super !== null && _super.apply(this, arguments) || this;
		_this.isDisabled = function(day) {
			return isDayDisabled(day, {
				minDate: _this.props.minDate,
				maxDate: _this.props.maxDate,
				excludeDates: _this.props.excludeDates,
				excludeDateIntervals: _this.props.excludeDateIntervals,
				includeDateIntervals: _this.props.includeDateIntervals,
				includeDates: _this.props.includeDates,
				filterDate: _this.props.filterDate
			});
		};
		_this.handleDayClick = function(day, event) {
			if (_this.props.onDayClick) _this.props.onDayClick(day, event);
		};
		_this.handleDayMouseEnter = function(day) {
			if (_this.props.onDayMouseEnter) _this.props.onDayMouseEnter(day);
		};
		_this.handleWeekClick = function(day, weekNumber, event) {
			var _a, _b, _c;
			var enabledWeekDay = new Date(day);
			for (var i = 0; i < 7; i++) {
				var processingDay = new Date(day);
				processingDay.setDate(processingDay.getDate() + i);
				if (!_this.isDisabled(processingDay)) {
					enabledWeekDay = processingDay;
					break;
				}
			}
			if (typeof _this.props.onWeekSelect === "function") _this.props.onWeekSelect(enabledWeekDay, weekNumber, event);
			if (_this.props.showWeekPicker) _this.handleDayClick(enabledWeekDay, event);
			if ((_a = _this.props.shouldCloseOnSelect) !== null && _a !== void 0 ? _a : Week.defaultProps.shouldCloseOnSelect) (_c = (_b = _this.props).setOpen) === null || _c === void 0 || _c.call(_b, false);
		};
		_this.formatWeekNumber = function(date) {
			if (_this.props.formatWeekNumber) return _this.props.formatWeekNumber(date);
			return getWeek(date);
		};
		_this.isWeekDisabled = function() {
			var startOfWeek = _this.startOfWeek();
			var endOfWeek = addDays(startOfWeek, 6);
			var processingDate = new Date(startOfWeek);
			while (processingDate <= endOfWeek) {
				if (!_this.isDisabled(processingDate)) return false;
				processingDate = addDays(processingDate, 1);
			}
			return true;
		};
		_this.renderDays = function() {
			var startOfWeek = _this.startOfWeek();
			var days = [];
			var weekNumber = _this.formatWeekNumber(startOfWeek);
			if (_this.props.showWeekNumber) {
				var onClickAction = _this.props.onWeekSelect || _this.props.showWeekPicker ? _this.handleWeekClick.bind(_this, startOfWeek, weekNumber) : void 0;
				days.push(import_react.createElement(WeekNumber, _assign({ key: "W" }, Week.defaultProps, _this.props, {
					weekNumber,
					isWeekDisabled: _this.isWeekDisabled(),
					date: startOfWeek,
					onClick: onClickAction
				})));
			}
			return days.concat([
				0,
				1,
				2,
				3,
				4,
				5,
				6
			].map(function(offset) {
				var day = addDays(startOfWeek, offset);
				return import_react.createElement(Day, _assign({}, Week.defaultProps, _this.props, {
					ariaLabelPrefixWhenEnabled: _this.props.chooseDayAriaLabelPrefix,
					ariaLabelPrefixWhenDisabled: _this.props.disabledDayAriaLabelPrefix,
					key: day.valueOf(),
					day,
					onClick: _this.handleDayClick.bind(_this, day),
					onMouseEnter: _this.handleDayMouseEnter.bind(_this, day)
				}));
			}));
		};
		_this.startOfWeek = function() {
			return getStartOfWeek(_this.props.day, _this.props.locale, _this.props.calendarStartDay);
		};
		_this.isKeyboardSelected = function() {
			return !_this.props.disabledKeyboardNavigation && !isSameDay(_this.startOfWeek(), _this.props.selected) && isSameDay(_this.startOfWeek(), _this.props.preSelection);
		};
		return _this;
	}
	Object.defineProperty(Week, "defaultProps", {
		get: function() {
			return { shouldCloseOnSelect: true };
		},
		enumerable: false,
		configurable: true
	});
	Week.prototype.render = function() {
		var weekNumberClasses = {
			"react-datepicker__week": true,
			"react-datepicker__week--selected": isSameDay(this.startOfWeek(), this.props.selected),
			"react-datepicker__week--keyboard-selected": this.isKeyboardSelected()
		};
		return import_react.createElement("div", { className: clsx(weekNumberClasses) }, this.renderDays());
	};
	return Week;
}(import_react.Component);
var _a;
var FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6;
var MONTH_COLUMNS_LAYOUT = {
	TWO_COLUMNS: "two_columns",
	THREE_COLUMNS: "three_columns",
	FOUR_COLUMNS: "four_columns"
};
var MONTH_COLUMNS = (_a = {}, _a[MONTH_COLUMNS_LAYOUT.TWO_COLUMNS] = {
	grid: [
		[0, 1],
		[2, 3],
		[4, 5],
		[6, 7],
		[8, 9],
		[10, 11]
	],
	verticalNavigationOffset: 2
}, _a[MONTH_COLUMNS_LAYOUT.THREE_COLUMNS] = {
	grid: [
		[
			0,
			1,
			2
		],
		[
			3,
			4,
			5
		],
		[
			6,
			7,
			8
		],
		[
			9,
			10,
			11
		]
	],
	verticalNavigationOffset: 3
}, _a[MONTH_COLUMNS_LAYOUT.FOUR_COLUMNS] = {
	grid: [
		[
			0,
			1,
			2,
			3
		],
		[
			4,
			5,
			6,
			7
		],
		[
			8,
			9,
			10,
			11
		]
	],
	verticalNavigationOffset: 4
}, _a);
var MONTH_NAVIGATION_HORIZONTAL_OFFSET = 1;
function getMonthColumnsLayout(showFourColumnMonthYearPicker, showTwoColumnMonthYearPicker) {
	if (showFourColumnMonthYearPicker) return MONTH_COLUMNS_LAYOUT.FOUR_COLUMNS;
	if (showTwoColumnMonthYearPicker) return MONTH_COLUMNS_LAYOUT.TWO_COLUMNS;
	return MONTH_COLUMNS_LAYOUT.THREE_COLUMNS;
}
/**
* `Month` is a React component that represents a month in a calendar.
* It accepts a `MonthProps` object as props which provides various configurations and event handlers.
*
* @prop dayClassName - Function to determine the class name for a day.
* @prop monthClassName - Function to determine the class name for a month.
* @prop filterDate - Function to filter dates.
* @prop formatWeekNumber - Function to format the week number.
* @prop onDayClick - Function to handle day click events.
* @prop onDayMouseEnter - Function to handle mouse enter events on a day.
* @prop onMouseLeave - Function to handle mouse leave events.
* @prop onWeekSelect - Function to handle week selection.
* @prop setPreSelection - Function to set pre-selection.
* @prop setOpen - Function to set open state.
* @prop renderDayContents - Function to render day contents.
* @prop renderMonthContent - Function to render month content.
* @prop renderQuarterContent - Function to render quarter content.
* @prop handleOnKeyDown - Function to handle key down events.
* @prop handleOnMonthKeyDown - Function to handle key down events on a month.
* @prop ariaLabelPrefix - Aria label prefix.
* @prop chooseDayAriaLabelPrefix - Aria label prefix for choosing a day.
* @prop disabledDayAriaLabelPrefix - Aria label prefix for disabled day.
* @prop disabledKeyboardNavigation - Flag to disable keyboard navigation.
* @prop day - The day.
* @prop endDate - The end date.
* @prop orderInDisplay - The order in display.
* @prop excludeDates - Dates to exclude.
* @prop excludeDateIntervals - Date intervals to exclude.
* @prop fixedHeight - Flag to set fixed height.
* @prop highlightDates - Dates to highlight.
* @prop holidays - Holidays.
* @prop includeDates - Dates to include.
* @prop includeDateIntervals - Date intervals to include.
* @prop inline - Flag to set inline.
* @prop shouldFocusDayInline - Flag to set focus on day inline.
* @prop locale - The locale.
* @prop maxDate - The maximum date.
* @prop minDate - The minimum date.
* @prop usePointerEvent - Flag to use pointer event.
* @prop peekNextMonth - Flag to peek next month.
* @prop preSelection - The pre-selection.
* @prop selected - The selected date.
* @prop selectingDate - The selecting date.
* @prop calendarStartDay - The calendar start day.
* @prop selectsEnd - Flag to select end.
* @prop selectsStart - Flag to select start.
* @prop selectsRange - Flag to select range.
* @prop selectsDisabledDaysInRange - Flag to select disabled days in range.
* @prop selectsMultiple - Flag to select multiple.
* @prop selectedDates - The selected dates.
* @prop showWeekNumbers - Flag to show week numbers.
* @prop startDate - The start date.
* @prop shouldCloseOnSelect - Flag to close on select.
* @prop showMonthYearPicker - Flag to show month year picker.
* @prop showFullMonthYearPicker - Flag to show full month year picker.
* @prop showTwoColumnMonthYearPicker - Flag to show two column month year picker.
* @prop showFourColumnMonthYearPicker - Flag to show four column month year picker.
* @prop showQuarterYearPicker - Flag to show quarter year picker.
* @prop showWeekPicker - Flag to show week picker.
* @prop isInputFocused - Flag to set input focus.
* @prop weekAriaLabelPrefix - Aria label prefix for week.
* @prop containerRef - The container reference.
* @prop monthShowsDuplicateDaysEnd - Flag to show duplicate days at the end of the month.
* @prop monthShowsDuplicateDaysStart - Flag to show duplicate days at the start of the month.
*
* @example
* ```tsx
* function App() {
*  const handleDayClick = (date) => {
*     console.log('Day clicked: ', date);
*   };
*
*   const handleDayMouseEnter = (date) => {
*     console.log('Mouse entered on day: ', date);
*   };
*
*   return (
*     <div>
*       <Month
*         day={new Date()}
*         endDate={new Date()}
*         onDayClick={handleDayClick}
*         onDayMouseEnter={handleDayMouseEnter}
*         disabledKeyboardNavigation={false}
*         showWeekNumbers={true}
*         showMonthYearPicker={false}
*       />
*     </div>
*   );
* }
* ```
*/
var Month = function(_super) {
	__extends(Month, _super);
	function Month() {
		var _this = _super !== null && _super.apply(this, arguments) || this;
		_this.MONTH_REFS = __spreadArray([], Array(12), true).map(function() {
			return (0, import_react.createRef)();
		});
		_this.QUARTER_REFS = __spreadArray([], Array(4), true).map(function() {
			return (0, import_react.createRef)();
		});
		_this.isDisabled = function(day) {
			return isDayDisabled(day, {
				minDate: _this.props.minDate,
				maxDate: _this.props.maxDate,
				excludeDates: _this.props.excludeDates,
				excludeDateIntervals: _this.props.excludeDateIntervals,
				includeDateIntervals: _this.props.includeDateIntervals,
				includeDates: _this.props.includeDates,
				filterDate: _this.props.filterDate
			});
		};
		_this.isExcluded = function(day) {
			return isDayExcluded(day, {
				excludeDates: _this.props.excludeDates,
				excludeDateIntervals: _this.props.excludeDateIntervals
			});
		};
		_this.handleDayClick = function(day, event) {
			var _a, _b;
			(_b = (_a = _this.props).onDayClick) === null || _b === void 0 || _b.call(_a, day, event, _this.props.orderInDisplay);
		};
		_this.handleDayMouseEnter = function(day) {
			var _a, _b;
			(_b = (_a = _this.props).onDayMouseEnter) === null || _b === void 0 || _b.call(_a, day);
		};
		_this.handleMouseLeave = function() {
			var _a, _b;
			(_b = (_a = _this.props).onMouseLeave) === null || _b === void 0 || _b.call(_a);
		};
		_this.isRangeStartMonth = function(m) {
			var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate;
			if (!startDate || !endDate) return false;
			return isSameMonth(setMonth(day, m), startDate);
		};
		_this.isRangeStartQuarter = function(q) {
			var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate;
			if (!startDate || !endDate) return false;
			return isSameQuarter(setQuarter(day, q), startDate);
		};
		_this.isRangeEndMonth = function(m) {
			var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate;
			if (!startDate || !endDate) return false;
			return isSameMonth(setMonth(day, m), endDate);
		};
		_this.isRangeEndQuarter = function(q) {
			var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate;
			if (!startDate || !endDate) return false;
			return isSameQuarter(setQuarter(day, q), endDate);
		};
		_this.isInSelectingRangeMonth = function(m) {
			var _a;
			var _b = _this.props, day = _b.day, selectsStart = _b.selectsStart, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange, startDate = _b.startDate, endDate = _b.endDate;
			var selectingDate = (_a = _this.props.selectingDate) !== null && _a !== void 0 ? _a : _this.props.preSelection;
			if (!(selectsStart || selectsEnd || selectsRange) || !selectingDate) return false;
			if (selectsStart && endDate) return isMonthInRange(selectingDate, endDate, m, day);
			if (selectsEnd && startDate) return isMonthInRange(startDate, selectingDate, m, day);
			if (selectsRange && startDate && !endDate) return isMonthInRange(startDate, selectingDate, m, day);
			return false;
		};
		_this.isSelectingMonthRangeStart = function(m) {
			var _a;
			if (!_this.isInSelectingRangeMonth(m)) return false;
			var _b = _this.props, day = _b.day, startDate = _b.startDate, selectsStart = _b.selectsStart;
			var _month = setMonth(day, m);
			var selectingDate = (_a = _this.props.selectingDate) !== null && _a !== void 0 ? _a : _this.props.preSelection;
			if (selectsStart) return isSameMonth(_month, selectingDate);
			else return isSameMonth(_month, startDate);
		};
		_this.isSelectingMonthRangeEnd = function(m) {
			var _a;
			if (!_this.isInSelectingRangeMonth(m)) return false;
			var _b = _this.props, day = _b.day, endDate = _b.endDate, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange;
			var _month = setMonth(day, m);
			var selectingDate = (_a = _this.props.selectingDate) !== null && _a !== void 0 ? _a : _this.props.preSelection;
			if (selectsEnd || selectsRange) return isSameMonth(_month, selectingDate);
			else return isSameMonth(_month, endDate);
		};
		_this.isInSelectingRangeQuarter = function(q) {
			var _a;
			var _b = _this.props, day = _b.day, selectsStart = _b.selectsStart, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange, startDate = _b.startDate, endDate = _b.endDate;
			var selectingDate = (_a = _this.props.selectingDate) !== null && _a !== void 0 ? _a : _this.props.preSelection;
			if (!(selectsStart || selectsEnd || selectsRange) || !selectingDate) return false;
			if (selectsStart && endDate) return isQuarterInRange(selectingDate, endDate, q, day);
			if (selectsEnd && startDate) return isQuarterInRange(startDate, selectingDate, q, day);
			if (selectsRange && startDate && !endDate) return isQuarterInRange(startDate, selectingDate, q, day);
			return false;
		};
		_this.isWeekInMonth = function(startOfWeek) {
			var day = _this.props.day;
			var endOfWeek = addDays(startOfWeek, 6);
			return isSameMonth(startOfWeek, day) || isSameMonth(endOfWeek, day);
		};
		_this.isCurrentMonth = function(day, m) {
			return getYear(day) === getYear(newDate()) && m === getMonth(newDate());
		};
		_this.isCurrentQuarter = function(day, q) {
			return getYear(day) === getYear(newDate()) && q === getQuarter(newDate());
		};
		_this.isSelectedMonth = function(day, m, selected) {
			return getMonth(selected) === m && getYear(day) === getYear(selected);
		};
		_this.isSelectMonthInList = function(day, m, selectedDates) {
			return selectedDates.some(function(selectedDate) {
				return _this.isSelectedMonth(day, m, selectedDate);
			});
		};
		_this.isSelectedQuarter = function(day, q, selected) {
			return getQuarter(day) === q && getYear(day) === getYear(selected);
		};
		_this.renderWeeks = function() {
			var weeks = [];
			var isFixedHeight = _this.props.fixedHeight;
			var i = 0;
			var breakAfterNextPush = false;
			var currentWeekStart = getStartOfWeek(getStartOfMonth(_this.props.day), _this.props.locale, _this.props.calendarStartDay);
			var isPreSelected = function(preSelection) {
				return _this.props.showWeekPicker ? getStartOfWeek(preSelection, _this.props.locale, _this.props.calendarStartDay) : _this.props.preSelection;
			};
			var isSelected = function(selected) {
				return _this.props.showWeekPicker ? getStartOfWeek(selected, _this.props.locale, _this.props.calendarStartDay) : _this.props.selected;
			};
			var selected = _this.props.selected ? isSelected(_this.props.selected) : void 0;
			var preSelection = _this.props.preSelection ? isPreSelected(_this.props.preSelection) : void 0;
			while (true) {
				weeks.push(import_react.createElement(Week, _assign({}, _this.props, {
					ariaLabelPrefix: _this.props.weekAriaLabelPrefix,
					key: i,
					day: currentWeekStart,
					month: getMonth(_this.props.day),
					onDayClick: _this.handleDayClick,
					onDayMouseEnter: _this.handleDayMouseEnter,
					selected,
					preSelection,
					showWeekNumber: _this.props.showWeekNumbers
				})));
				if (breakAfterNextPush) break;
				i++;
				currentWeekStart = addWeeks(currentWeekStart, 1);
				var isFixedAndFinalWeek = isFixedHeight && i >= FIXED_HEIGHT_STANDARD_WEEK_COUNT;
				var isNonFixedAndOutOfMonth = !isFixedHeight && !_this.isWeekInMonth(currentWeekStart);
				if (isFixedAndFinalWeek || isNonFixedAndOutOfMonth) if (_this.props.peekNextMonth) breakAfterNextPush = true;
				else break;
			}
			return weeks;
		};
		_this.onMonthClick = function(event, m) {
			var _a = _this.isMonthDisabledForLabelDate(m), isDisabled = _a.isDisabled, labelDate = _a.labelDate;
			if (isDisabled) return;
			_this.handleDayClick(getStartOfMonth(labelDate), event);
		};
		_this.onMonthMouseEnter = function(m) {
			var _a = _this.isMonthDisabledForLabelDate(m), isDisabled = _a.isDisabled, labelDate = _a.labelDate;
			if (isDisabled) return;
			_this.handleDayMouseEnter(getStartOfMonth(labelDate));
		};
		_this.handleMonthNavigation = function(newMonth, newDate) {
			var _a, _b, _c, _d;
			(_b = (_a = _this.props).setPreSelection) === null || _b === void 0 || _b.call(_a, newDate);
			(_d = (_c = _this.MONTH_REFS[newMonth]) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 || _d.focus();
		};
		_this.handleKeyboardNavigation = function(event, eventKey, month) {
			var _a;
			var _b = _this.props, selected = _b.selected, preSelection = _b.preSelection, setPreSelection = _b.setPreSelection, minDate = _b.minDate, maxDate = _b.maxDate, showFourColumnMonthYearPicker = _b.showFourColumnMonthYearPicker, showTwoColumnMonthYearPicker = _b.showTwoColumnMonthYearPicker;
			if (!preSelection) return;
			var monthColumnsLayout = getMonthColumnsLayout(showFourColumnMonthYearPicker, showTwoColumnMonthYearPicker);
			var verticalOffset = _this.getVerticalOffset(monthColumnsLayout);
			var monthsGrid = (_a = MONTH_COLUMNS[monthColumnsLayout]) === null || _a === void 0 ? void 0 : _a.grid;
			var calculateNewDateAndMonth = function(eventKey, date, month) {
				var _a, _b;
				var newCalculatedDate = date;
				var newCalculatedMonth = month;
				switch (eventKey) {
					case KeyType.ArrowRight:
						newCalculatedDate = addMonths(date, MONTH_NAVIGATION_HORIZONTAL_OFFSET);
						newCalculatedMonth = month === 11 ? 0 : month + MONTH_NAVIGATION_HORIZONTAL_OFFSET;
						break;
					case KeyType.ArrowLeft:
						newCalculatedDate = subMonths(date, MONTH_NAVIGATION_HORIZONTAL_OFFSET);
						newCalculatedMonth = month === 0 ? 11 : month - MONTH_NAVIGATION_HORIZONTAL_OFFSET;
						break;
					case KeyType.ArrowUp:
						newCalculatedDate = subMonths(date, verticalOffset);
						newCalculatedMonth = ((_a = monthsGrid === null || monthsGrid === void 0 ? void 0 : monthsGrid[0]) === null || _a === void 0 ? void 0 : _a.includes(month)) ? month + 12 - verticalOffset : month - verticalOffset;
						break;
					case KeyType.ArrowDown:
						newCalculatedDate = addMonths(date, verticalOffset);
						newCalculatedMonth = ((_b = monthsGrid === null || monthsGrid === void 0 ? void 0 : monthsGrid[monthsGrid.length - 1]) === null || _b === void 0 ? void 0 : _b.includes(month)) ? month - 12 + verticalOffset : month + verticalOffset;
						break;
				}
				return {
					newCalculatedDate,
					newCalculatedMonth
				};
			};
			var getNewDateAndMonth = function(eventKey, selectedDate, month) {
				var MAX_ITERATIONS = 40;
				var eventKeyCopy = eventKey;
				var validDateFound = false;
				var iterations = 0;
				var _a = calculateNewDateAndMonth(eventKeyCopy, selectedDate, month), newCalculatedDate = _a.newCalculatedDate, newCalculatedMonth = _a.newCalculatedMonth;
				while (!validDateFound) {
					if (iterations >= MAX_ITERATIONS) {
						newCalculatedDate = selectedDate;
						newCalculatedMonth = month;
						break;
					}
					if (minDate && newCalculatedDate < minDate) {
						eventKeyCopy = KeyType.ArrowRight;
						var obj = calculateNewDateAndMonth(eventKeyCopy, newCalculatedDate, newCalculatedMonth);
						newCalculatedDate = obj.newCalculatedDate;
						newCalculatedMonth = obj.newCalculatedMonth;
					}
					if (maxDate && newCalculatedDate > maxDate) {
						eventKeyCopy = KeyType.ArrowLeft;
						var obj = calculateNewDateAndMonth(eventKeyCopy, newCalculatedDate, newCalculatedMonth);
						newCalculatedDate = obj.newCalculatedDate;
						newCalculatedMonth = obj.newCalculatedMonth;
					}
					if (isMonthYearDisabled(newCalculatedDate, _this.props)) {
						var obj = calculateNewDateAndMonth(eventKeyCopy, newCalculatedDate, newCalculatedMonth);
						newCalculatedDate = obj.newCalculatedDate;
						newCalculatedMonth = obj.newCalculatedMonth;
					} else validDateFound = true;
					iterations++;
				}
				return {
					newCalculatedDate,
					newCalculatedMonth
				};
			};
			if (eventKey === KeyType.Enter) {
				if (!_this.isMonthDisabled(month)) {
					_this.onMonthClick(event, month);
					setPreSelection === null || setPreSelection === void 0 || setPreSelection(selected);
				}
				return;
			}
			var _c = getNewDateAndMonth(eventKey, preSelection, month), newCalculatedDate = _c.newCalculatedDate, newCalculatedMonth = _c.newCalculatedMonth;
			switch (eventKey) {
				case KeyType.ArrowRight:
				case KeyType.ArrowLeft:
				case KeyType.ArrowUp:
				case KeyType.ArrowDown:
					_this.handleMonthNavigation(newCalculatedMonth, newCalculatedDate);
					break;
			}
		};
		_this.getVerticalOffset = function(monthColumnsLayout) {
			var _a, _b;
			return (_b = (_a = MONTH_COLUMNS[monthColumnsLayout]) === null || _a === void 0 ? void 0 : _a.verticalNavigationOffset) !== null && _b !== void 0 ? _b : 0;
		};
		_this.onMonthKeyDown = function(event, month) {
			var _a = _this.props, disabledKeyboardNavigation = _a.disabledKeyboardNavigation, handleOnMonthKeyDown = _a.handleOnMonthKeyDown;
			var eventKey = event.key;
			if (eventKey !== KeyType.Tab) event.preventDefault();
			if (!disabledKeyboardNavigation) _this.handleKeyboardNavigation(event, eventKey, month);
			handleOnMonthKeyDown && handleOnMonthKeyDown(event);
		};
		_this.onQuarterClick = function(event, q) {
			var labelDate = setQuarter(_this.props.day, q);
			if (isQuarterDisabled(labelDate, _this.props)) return;
			_this.handleDayClick(getStartOfQuarter(labelDate), event);
		};
		_this.onQuarterMouseEnter = function(q) {
			var labelDate = setQuarter(_this.props.day, q);
			if (isQuarterDisabled(labelDate, _this.props)) return;
			_this.handleDayMouseEnter(getStartOfQuarter(labelDate));
		};
		_this.handleQuarterNavigation = function(newQuarter, newDate) {
			var _a, _b, _c, _d;
			if (_this.isDisabled(newDate) || _this.isExcluded(newDate)) return;
			(_b = (_a = _this.props).setPreSelection) === null || _b === void 0 || _b.call(_a, newDate);
			(_d = (_c = _this.QUARTER_REFS[newQuarter - 1]) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 || _d.focus();
		};
		_this.onQuarterKeyDown = function(event, quarter) {
			var _a, _b;
			var eventKey = event.key;
			if (!_this.props.disabledKeyboardNavigation) switch (eventKey) {
				case KeyType.Enter:
					_this.onQuarterClick(event, quarter);
					(_b = (_a = _this.props).setPreSelection) === null || _b === void 0 || _b.call(_a, _this.props.selected);
					break;
				case KeyType.ArrowRight:
					if (!_this.props.preSelection) break;
					_this.handleQuarterNavigation(quarter === 4 ? 1 : quarter + 1, addQuarters(_this.props.preSelection, 1));
					break;
				case KeyType.ArrowLeft:
					if (!_this.props.preSelection) break;
					_this.handleQuarterNavigation(quarter === 1 ? 4 : quarter - 1, subQuarters(_this.props.preSelection, 1));
					break;
			}
		};
		_this.isMonthDisabledForLabelDate = function(month) {
			var _a;
			var _b = _this.props, day = _b.day, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, includeDates = _b.includeDates;
			var labelDate = setMonth(day, month);
			return {
				isDisabled: (_a = (minDate || maxDate || excludeDates || includeDates) && isMonthDisabled(labelDate, _this.props)) !== null && _a !== void 0 ? _a : false,
				labelDate
			};
		};
		_this.isMonthDisabled = function(month) {
			return _this.isMonthDisabledForLabelDate(month).isDisabled;
		};
		_this.getMonthClassNames = function(m) {
			var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate, preSelection = _a.preSelection, monthClassName = _a.monthClassName;
			var _monthClassName = monthClassName ? monthClassName(setMonth(day, m)) : void 0;
			var selection = _this.getSelection();
			return clsx("react-datepicker__month-text", "react-datepicker__month-".concat(m), _monthClassName, {
				"react-datepicker__month-text--disabled": _this.isMonthDisabled(m),
				"react-datepicker__month-text--selected": selection ? _this.isSelectMonthInList(day, m, selection) : void 0,
				"react-datepicker__month-text--keyboard-selected": !_this.props.disabledKeyboardNavigation && preSelection && _this.isSelectedMonth(day, m, preSelection) && !_this.isMonthDisabled(m),
				"react-datepicker__month-text--in-selecting-range": _this.isInSelectingRangeMonth(m),
				"react-datepicker__month-text--in-range": startDate && endDate ? isMonthInRange(startDate, endDate, m, day) : void 0,
				"react-datepicker__month-text--range-start": _this.isRangeStartMonth(m),
				"react-datepicker__month-text--range-end": _this.isRangeEndMonth(m),
				"react-datepicker__month-text--selecting-range-start": _this.isSelectingMonthRangeStart(m),
				"react-datepicker__month-text--selecting-range-end": _this.isSelectingMonthRangeEnd(m),
				"react-datepicker__month-text--today": _this.isCurrentMonth(day, m)
			});
		};
		_this.getTabIndex = function(m) {
			if (_this.props.preSelection == null) return "-1";
			var preSelectedMonth = getMonth(_this.props.preSelection);
			var isPreSelectedMonthDisabled = _this.isMonthDisabledForLabelDate(preSelectedMonth).isDisabled;
			return m === preSelectedMonth && !(isPreSelectedMonthDisabled || _this.props.disabledKeyboardNavigation) ? "0" : "-1";
		};
		_this.getQuarterTabIndex = function(q) {
			if (_this.props.preSelection == null) return "-1";
			var preSelectedQuarter = getQuarter(_this.props.preSelection);
			var isCurrentQuarterDisabled = isQuarterDisabled(_this.props.day, _this.props);
			return q === preSelectedQuarter && !(isCurrentQuarterDisabled || _this.props.disabledKeyboardNavigation) ? "0" : "-1";
		};
		_this.getAriaLabel = function(month) {
			var _a = _this.props, _b = _a.chooseDayAriaLabelPrefix, chooseDayAriaLabelPrefix = _b === void 0 ? "Choose" : _b, _c = _a.disabledDayAriaLabelPrefix, disabledDayAriaLabelPrefix = _c === void 0 ? "Not available" : _c, day = _a.day, locale = _a.locale;
			var labelDate = setMonth(day, month);
			var prefix = _this.isDisabled(labelDate) || _this.isExcluded(labelDate) ? disabledDayAriaLabelPrefix : chooseDayAriaLabelPrefix;
			return "".concat(prefix, " ").concat(formatDate(labelDate, "MMMM yyyy", locale));
		};
		_this.getQuarterClassNames = function(q) {
			var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate, selected = _a.selected, minDate = _a.minDate, maxDate = _a.maxDate, excludeDates = _a.excludeDates, includeDates = _a.includeDates, filterDate = _a.filterDate, preSelection = _a.preSelection, disabledKeyboardNavigation = _a.disabledKeyboardNavigation;
			var isDisabled = (minDate || maxDate || excludeDates || includeDates || filterDate) && isQuarterDisabled(setQuarter(day, q), _this.props);
			return clsx("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(q), {
				"react-datepicker__quarter-text--disabled": isDisabled,
				"react-datepicker__quarter-text--selected": selected ? _this.isSelectedQuarter(day, q, selected) : void 0,
				"react-datepicker__quarter-text--keyboard-selected": !disabledKeyboardNavigation && preSelection && _this.isSelectedQuarter(day, q, preSelection) && !isDisabled,
				"react-datepicker__quarter-text--in-selecting-range": _this.isInSelectingRangeQuarter(q),
				"react-datepicker__quarter-text--in-range": startDate && endDate ? isQuarterInRange(startDate, endDate, q, day) : void 0,
				"react-datepicker__quarter-text--range-start": _this.isRangeStartQuarter(q),
				"react-datepicker__quarter-text--range-end": _this.isRangeEndQuarter(q)
			});
		};
		_this.getMonthContent = function(m) {
			var _a = _this.props, showFullMonthYearPicker = _a.showFullMonthYearPicker, renderMonthContent = _a.renderMonthContent, locale = _a.locale, day = _a.day;
			var shortMonthText = getMonthShortInLocale(m, locale);
			var fullMonthText = getMonthInLocale(m, locale);
			if (renderMonthContent) return renderMonthContent(m, shortMonthText, fullMonthText, day);
			return showFullMonthYearPicker ? fullMonthText : shortMonthText;
		};
		_this.getQuarterContent = function(q) {
			var _a;
			var _b = _this.props, renderQuarterContent = _b.renderQuarterContent, locale = _b.locale;
			var shortQuarter = getQuarterShortInLocale(q, locale);
			return (_a = renderQuarterContent === null || renderQuarterContent === void 0 ? void 0 : renderQuarterContent(q, shortQuarter)) !== null && _a !== void 0 ? _a : shortQuarter;
		};
		_this.renderMonths = function() {
			var _a;
			var _b = _this.props, showTwoColumnMonthYearPicker = _b.showTwoColumnMonthYearPicker, showFourColumnMonthYearPicker = _b.showFourColumnMonthYearPicker, day = _b.day, selected = _b.selected;
			var monthColumns = (_a = MONTH_COLUMNS[getMonthColumnsLayout(showFourColumnMonthYearPicker, showTwoColumnMonthYearPicker)]) === null || _a === void 0 ? void 0 : _a.grid;
			return monthColumns === null || monthColumns === void 0 ? void 0 : monthColumns.map(function(month, i) {
				return import_react.createElement("div", {
					className: "react-datepicker__month-wrapper",
					key: i
				}, month.map(function(m, j) {
					return import_react.createElement("div", {
						ref: _this.MONTH_REFS[m],
						key: j,
						onClick: function(event) {
							_this.onMonthClick(event, m);
						},
						onKeyDown: function(event) {
							if (isSpaceKeyDown(event)) {
								event.preventDefault();
								event.key = KeyType.Enter;
							}
							_this.onMonthKeyDown(event, m);
						},
						onMouseEnter: !_this.props.usePointerEvent ? function() {
							return _this.onMonthMouseEnter(m);
						} : void 0,
						onPointerEnter: _this.props.usePointerEvent ? function() {
							return _this.onMonthMouseEnter(m);
						} : void 0,
						tabIndex: Number(_this.getTabIndex(m)),
						className: _this.getMonthClassNames(m),
						"aria-disabled": _this.isMonthDisabled(m),
						role: "option",
						"aria-label": _this.getAriaLabel(m),
						"aria-current": _this.isCurrentMonth(day, m) ? "date" : void 0,
						"aria-selected": selected ? _this.isSelectedMonth(day, m, selected) : void 0
					}, _this.getMonthContent(m));
				}));
			});
		};
		_this.renderQuarters = function() {
			var _a = _this.props, day = _a.day, selected = _a.selected;
			return import_react.createElement("div", { className: "react-datepicker__quarter-wrapper" }, [
				1,
				2,
				3,
				4
			].map(function(q, j) {
				return import_react.createElement("div", {
					key: j,
					ref: _this.QUARTER_REFS[j],
					role: "option",
					onClick: function(event) {
						_this.onQuarterClick(event, q);
					},
					onKeyDown: function(event) {
						_this.onQuarterKeyDown(event, q);
					},
					onMouseEnter: !_this.props.usePointerEvent ? function() {
						return _this.onQuarterMouseEnter(q);
					} : void 0,
					onPointerEnter: _this.props.usePointerEvent ? function() {
						return _this.onQuarterMouseEnter(q);
					} : void 0,
					className: _this.getQuarterClassNames(q),
					"aria-selected": selected ? _this.isSelectedQuarter(day, q, selected) : void 0,
					tabIndex: Number(_this.getQuarterTabIndex(q)),
					"aria-current": _this.isCurrentQuarter(day, q) ? "date" : void 0
				}, _this.getQuarterContent(q));
			}));
		};
		_this.getClassNames = function() {
			var _a = _this.props, selectingDate = _a.selectingDate, selectsStart = _a.selectsStart, selectsEnd = _a.selectsEnd, showMonthYearPicker = _a.showMonthYearPicker, showQuarterYearPicker = _a.showQuarterYearPicker, showWeekPicker = _a.showWeekPicker;
			return clsx("react-datepicker__month", { "react-datepicker__month--selecting-range": selectingDate && (selectsStart || selectsEnd) }, { "react-datepicker__monthPicker": showMonthYearPicker }, { "react-datepicker__quarterPicker": showQuarterYearPicker }, { "react-datepicker__weekPicker": showWeekPicker });
		};
		return _this;
	}
	Month.prototype.getSelection = function() {
		var _a = this.props, selected = _a.selected, selectedDates = _a.selectedDates;
		if (_a.selectsMultiple) return selectedDates;
		if (selected) return [selected];
	};
	Month.prototype.render = function() {
		var _a = this.props, showMonthYearPicker = _a.showMonthYearPicker, showQuarterYearPicker = _a.showQuarterYearPicker, day = _a.day, _b = _a.ariaLabelPrefix, ariaLabelPrefix = _b === void 0 ? "Month " : _b;
		var formattedAriaLabelPrefix = ariaLabelPrefix ? ariaLabelPrefix.trim() + " " : "";
		return import_react.createElement("div", {
			className: this.getClassNames(),
			onMouseLeave: !this.props.usePointerEvent ? this.handleMouseLeave : void 0,
			onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0,
			"aria-label": "".concat(formattedAriaLabelPrefix).concat(formatDate(day, "MMMM, yyyy", this.props.locale)),
			role: "listbox"
		}, showMonthYearPicker ? this.renderMonths() : showQuarterYearPicker ? this.renderQuarters() : this.renderWeeks());
	};
	return Month;
}(import_react.Component);
var MonthDropdownOptions = function(_super) {
	__extends(MonthDropdownOptions, _super);
	function MonthDropdownOptions() {
		var _this = _super !== null && _super.apply(this, arguments) || this;
		_this.isSelectedMonth = function(i) {
			return _this.props.month === i;
		};
		_this.renderOptions = function() {
			return _this.props.monthNames.map(function(month, i) {
				return import_react.createElement("div", {
					className: _this.isSelectedMonth(i) ? "react-datepicker__month-option react-datepicker__month-option--selected_month" : "react-datepicker__month-option",
					key: month,
					onClick: _this.onChange.bind(_this, i),
					"aria-selected": _this.isSelectedMonth(i) ? "true" : void 0
				}, _this.isSelectedMonth(i) ? import_react.createElement("span", { className: "react-datepicker__month-option--selected" }, "✓") : "", month);
			});
		};
		_this.onChange = function(month) {
			return _this.props.onChange(month);
		};
		_this.handleClickOutside = function() {
			return _this.props.onCancel();
		};
		return _this;
	}
	MonthDropdownOptions.prototype.render = function() {
		return import_react.createElement(ClickOutsideWrapper, {
			className: "react-datepicker__month-dropdown",
			onClickOutside: this.handleClickOutside
		}, this.renderOptions());
	};
	return MonthDropdownOptions;
}(import_react.Component);
var MonthDropdown = function(_super) {
	__extends(MonthDropdown, _super);
	function MonthDropdown() {
		var _this = _super !== null && _super.apply(this, arguments) || this;
		_this.state = { dropdownVisible: false };
		_this.renderSelectOptions = function(monthNames) {
			return monthNames.map(function(m, i) {
				return import_react.createElement("option", {
					key: m,
					value: i
				}, m);
			});
		};
		_this.renderSelectMode = function(monthNames) {
			return import_react.createElement("select", {
				value: _this.props.month,
				className: "react-datepicker__month-select",
				onChange: function(e) {
					return _this.onChange(parseInt(e.target.value));
				}
			}, _this.renderSelectOptions(monthNames));
		};
		_this.renderReadView = function(visible, monthNames) {
			return import_react.createElement("div", {
				key: "read",
				style: { visibility: visible ? "visible" : "hidden" },
				className: "react-datepicker__month-read-view",
				onClick: _this.toggleDropdown
			}, import_react.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }), import_react.createElement("span", { className: "react-datepicker__month-read-view--selected-month" }, monthNames[_this.props.month]));
		};
		_this.renderDropdown = function(monthNames) {
			return import_react.createElement(MonthDropdownOptions, _assign({ key: "dropdown" }, _this.props, {
				monthNames,
				onChange: _this.onChange,
				onCancel: _this.toggleDropdown
			}));
		};
		_this.renderScrollMode = function(monthNames) {
			var dropdownVisible = _this.state.dropdownVisible;
			var result = [_this.renderReadView(!dropdownVisible, monthNames)];
			if (dropdownVisible) result.unshift(_this.renderDropdown(monthNames));
			return result;
		};
		_this.onChange = function(month) {
			_this.toggleDropdown();
			if (month !== _this.props.month) _this.props.onChange(month);
		};
		_this.toggleDropdown = function() {
			return _this.setState({ dropdownVisible: !_this.state.dropdownVisible });
		};
		return _this;
	}
	MonthDropdown.prototype.render = function() {
		var _this = this;
		var monthNames = [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11
		].map(this.props.useShortMonthInDropdown ? function(m) {
			return getMonthShortInLocale(m, _this.props.locale);
		} : function(m) {
			return getMonthInLocale(m, _this.props.locale);
		});
		var renderedDropdown;
		switch (this.props.dropdownMode) {
			case "scroll":
				renderedDropdown = this.renderScrollMode(monthNames);
				break;
			case "select":
				renderedDropdown = this.renderSelectMode(monthNames);
				break;
		}
		return import_react.createElement("div", { className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode) }, renderedDropdown);
	};
	return MonthDropdown;
}(import_react.Component);
function generateMonthYears(minDate, maxDate) {
	var list = [];
	var currDate = getStartOfMonth(minDate);
	var lastDate = getStartOfMonth(maxDate);
	while (!isAfter(currDate, lastDate)) {
		list.push(newDate(currDate));
		currDate = addMonths(currDate, 1);
	}
	return list;
}
var MonthYearDropdownOptions = function(_super) {
	__extends(MonthYearDropdownOptions, _super);
	function MonthYearDropdownOptions(props) {
		var _this = _super.call(this, props) || this;
		_this.renderOptions = function() {
			return _this.state.monthYearsList.map(function(monthYear) {
				var monthYearPoint = getTime(monthYear);
				var isSameMonthYear = isSameYear(_this.props.date, monthYear) && isSameMonth(_this.props.date, monthYear);
				return import_react.createElement("div", {
					className: isSameMonthYear ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option",
					key: monthYearPoint,
					onClick: _this.onChange.bind(_this, monthYearPoint),
					"aria-selected": isSameMonthYear ? "true" : void 0
				}, isSameMonthYear ? import_react.createElement("span", { className: "react-datepicker__month-year-option--selected" }, "✓") : "", formatDate(monthYear, _this.props.dateFormat, _this.props.locale));
			});
		};
		_this.onChange = function(monthYear) {
			return _this.props.onChange(monthYear);
		};
		_this.handleClickOutside = function() {
			_this.props.onCancel();
		};
		_this.state = { monthYearsList: generateMonthYears(_this.props.minDate, _this.props.maxDate) };
		return _this;
	}
	MonthYearDropdownOptions.prototype.render = function() {
		var dropdownClass = clsx({
			"react-datepicker__month-year-dropdown": true,
			"react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
		});
		return import_react.createElement(ClickOutsideWrapper, {
			className: dropdownClass,
			onClickOutside: this.handleClickOutside
		}, this.renderOptions());
	};
	return MonthYearDropdownOptions;
}(import_react.Component);
var MonthYearDropdown = function(_super) {
	__extends(MonthYearDropdown, _super);
	function MonthYearDropdown() {
		var _this = _super !== null && _super.apply(this, arguments) || this;
		_this.state = { dropdownVisible: false };
		_this.renderSelectOptions = function() {
			var currDate = getStartOfMonth(_this.props.minDate);
			var lastDate = getStartOfMonth(_this.props.maxDate);
			var options = [];
			while (!isAfter(currDate, lastDate)) {
				var timePoint = getTime(currDate);
				options.push(import_react.createElement("option", {
					key: timePoint,
					value: timePoint
				}, formatDate(currDate, _this.props.dateFormat, _this.props.locale)));
				currDate = addMonths(currDate, 1);
			}
			return options;
		};
		_this.onSelectChange = function(event) {
			_this.onChange(parseInt(event.target.value));
		};
		_this.renderSelectMode = function() {
			return import_react.createElement("select", {
				value: getTime(getStartOfMonth(_this.props.date)),
				className: "react-datepicker__month-year-select",
				onChange: _this.onSelectChange
			}, _this.renderSelectOptions());
		};
		_this.renderReadView = function(visible) {
			var yearMonth = formatDate(_this.props.date, _this.props.dateFormat, _this.props.locale);
			return import_react.createElement("div", {
				key: "read",
				style: { visibility: visible ? "visible" : "hidden" },
				className: "react-datepicker__month-year-read-view",
				onClick: _this.toggleDropdown
			}, import_react.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }), import_react.createElement("span", { className: "react-datepicker__month-year-read-view--selected-month-year" }, yearMonth));
		};
		_this.renderDropdown = function() {
			return import_react.createElement(MonthYearDropdownOptions, _assign({ key: "dropdown" }, _this.props, {
				onChange: _this.onChange,
				onCancel: _this.toggleDropdown
			}));
		};
		_this.renderScrollMode = function() {
			var dropdownVisible = _this.state.dropdownVisible;
			var result = [_this.renderReadView(!dropdownVisible)];
			if (dropdownVisible) result.unshift(_this.renderDropdown());
			return result;
		};
		_this.onChange = function(monthYearPoint) {
			_this.toggleDropdown();
			var changedDate = newDate(monthYearPoint);
			if (isSameYear(_this.props.date, changedDate) && isSameMonth(_this.props.date, changedDate)) return;
			_this.props.onChange(changedDate);
		};
		_this.toggleDropdown = function() {
			return _this.setState({ dropdownVisible: !_this.state.dropdownVisible });
		};
		return _this;
	}
	MonthYearDropdown.prototype.render = function() {
		var renderedDropdown;
		switch (this.props.dropdownMode) {
			case "scroll":
				renderedDropdown = this.renderScrollMode();
				break;
			case "select":
				renderedDropdown = this.renderSelectMode();
				break;
		}
		return import_react.createElement("div", { className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode) }, renderedDropdown);
	};
	return MonthYearDropdown;
}(import_react.Component);
var Time = function(_super) {
	__extends(Time, _super);
	function Time() {
		var _this = _super !== null && _super.apply(this, arguments) || this;
		_this.state = { height: null };
		_this.scrollToTheSelectedTime = function() {
			requestAnimationFrame(function() {
				var _a, _b, _c;
				if (!_this.list) return;
				_this.list.scrollTop = (_c = _this.centerLi && Time.calcCenterPosition(_this.props.monthRef ? _this.props.monthRef.clientHeight - ((_b = (_a = _this.header) === null || _a === void 0 ? void 0 : _a.clientHeight) !== null && _b !== void 0 ? _b : 0) : _this.list.clientHeight, _this.centerLi)) !== null && _c !== void 0 ? _c : 0;
			});
		};
		_this.handleClick = function(time) {
			var _a, _b;
			if ((_this.props.minTime || _this.props.maxTime) && isTimeInDisabledRange(time, _this.props) || (_this.props.excludeTimes || _this.props.includeTimes || _this.props.filterTime) && isTimeDisabled(time, _this.props)) return;
			(_b = (_a = _this.props).onChange) === null || _b === void 0 || _b.call(_a, time);
		};
		_this.isSelectedTime = function(time) {
			return _this.props.selected && isSameMinute(_this.props.selected, time);
		};
		_this.isDisabledTime = function(time) {
			return (_this.props.minTime || _this.props.maxTime) && isTimeInDisabledRange(time, _this.props) || (_this.props.excludeTimes || _this.props.includeTimes || _this.props.filterTime) && isTimeDisabled(time, _this.props);
		};
		_this.liClasses = function(time) {
			var _a;
			var classes = ["react-datepicker__time-list-item", _this.props.timeClassName ? _this.props.timeClassName(time) : void 0];
			if (_this.isSelectedTime(time)) classes.push("react-datepicker__time-list-item--selected");
			if (_this.isDisabledTime(time)) classes.push("react-datepicker__time-list-item--disabled");
			if (_this.props.injectTimes && (getHours(time) * 3600 + getMinutes(time) * 60 + getSeconds(time)) % (((_a = _this.props.intervals) !== null && _a !== void 0 ? _a : Time.defaultProps.intervals) * 60) !== 0) classes.push("react-datepicker__time-list-item--injected");
			return classes.join(" ");
		};
		_this.handleOnKeyDown = function(event, time) {
			var _a, _b;
			if (event.key === KeyType.Space) {
				event.preventDefault();
				event.key = KeyType.Enter;
			}
			if ((event.key === KeyType.ArrowUp || event.key === KeyType.ArrowLeft) && event.target instanceof HTMLElement && event.target.previousSibling) {
				event.preventDefault();
				event.target.previousSibling instanceof HTMLElement && event.target.previousSibling.focus();
			}
			if ((event.key === KeyType.ArrowDown || event.key === KeyType.ArrowRight) && event.target instanceof HTMLElement && event.target.nextSibling) {
				event.preventDefault();
				event.target.nextSibling instanceof HTMLElement && event.target.nextSibling.focus();
			}
			if (event.key === KeyType.Enter) _this.handleClick(time);
			(_b = (_a = _this.props).handleOnKeyDown) === null || _b === void 0 || _b.call(_a, event);
		};
		_this.renderTimes = function() {
			var _a;
			var times = [];
			var format = typeof _this.props.format === "string" ? _this.props.format : "p";
			var intervals = (_a = _this.props.intervals) !== null && _a !== void 0 ? _a : Time.defaultProps.intervals;
			var activeDate = _this.props.selected || _this.props.openToDate || newDate();
			var base = getStartOfDay(activeDate);
			var sortedInjectTimes = _this.props.injectTimes && _this.props.injectTimes.sort(function(a, b) {
				return a.getTime() - b.getTime();
			});
			var multiplier = 60 * getHoursInDay(activeDate) / intervals;
			for (var i = 0; i < multiplier; i++) {
				var currentTime = addMinutes(base, i * intervals);
				times.push(currentTime);
				if (sortedInjectTimes) {
					var timesToInject = timesToInjectAfter(base, currentTime, i, intervals, sortedInjectTimes);
					times = times.concat(timesToInject);
				}
			}
			var timeToFocus = times.reduce(function(prev, time) {
				if (time.getTime() <= activeDate.getTime()) return time;
				return prev;
			}, times[0]);
			return times.map(function(time) {
				return import_react.createElement("li", {
					key: time.valueOf(),
					onClick: _this.handleClick.bind(_this, time),
					className: _this.liClasses(time),
					ref: function(li) {
						if (time === timeToFocus) _this.centerLi = li;
					},
					onKeyDown: function(event) {
						_this.handleOnKeyDown(event, time);
					},
					tabIndex: time === timeToFocus ? 0 : -1,
					role: "option",
					"aria-selected": _this.isSelectedTime(time) ? "true" : void 0,
					"aria-disabled": _this.isDisabledTime(time) ? "true" : void 0
				}, formatDate(time, format, _this.props.locale));
			});
		};
		_this.renderTimeCaption = function() {
			if (_this.props.showTimeCaption === false) return import_react.createElement(import_react.Fragment, null);
			return import_react.createElement("div", {
				className: "react-datepicker__header react-datepicker__header--time ".concat(_this.props.showTimeSelectOnly ? "react-datepicker__header--time--only" : ""),
				ref: function(header) {
					_this.header = header;
				}
			}, import_react.createElement("div", { className: "react-datepicker-time__header" }, _this.props.timeCaption));
		};
		return _this;
	}
	Object.defineProperty(Time, "defaultProps", {
		get: function() {
			return {
				intervals: 30,
				todayButton: null,
				timeCaption: "Time",
				showTimeCaption: true
			};
		},
		enumerable: false,
		configurable: true
	});
	Time.prototype.componentDidMount = function() {
		this.scrollToTheSelectedTime();
		if (this.props.monthRef && this.header) this.setState({ height: this.props.monthRef.clientHeight - this.header.clientHeight });
	};
	Time.prototype.render = function() {
		var _this = this;
		var _a;
		var height = this.state.height;
		return import_react.createElement("div", { className: "react-datepicker__time-container ".concat(((_a = this.props.todayButton) !== null && _a !== void 0 ? _a : Time.defaultProps.todayButton) ? "react-datepicker__time-container--with-today-button" : "") }, this.renderTimeCaption(), import_react.createElement("div", { className: "react-datepicker__time" }, import_react.createElement("div", { className: "react-datepicker__time-box" }, import_react.createElement("ul", {
			className: "react-datepicker__time-list",
			ref: function(list) {
				_this.list = list;
			},
			style: height ? { height } : {},
			role: "listbox",
			"aria-label": this.props.timeCaption
		}, this.renderTimes()))));
	};
	Time.calcCenterPosition = function(listHeight, centerLiRef) {
		return centerLiRef.offsetTop - (listHeight / 2 - centerLiRef.clientHeight / 2);
	};
	return Time;
}(import_react.Component);
var VERTICAL_NAVIGATION_OFFSET = 3;
/**
* `Year` is a component that represents a year in a date picker.
*
* @class
* @param {YearProps} props - The properties that define the `Year` component.
* @property {VoidFunction} [props.clearSelectingDate] - Function to clear the selected date.
* @property {Date} [props.date] - The currently selected date.
* @property {boolean} [props.disabledKeyboardNavigation] - If true, keyboard navigation is disabled.
* @property {Date} [props.endDate] - The end date in a range selection.
* @property {(date: Date) => void} props.onDayClick - Function to handle day click events.
* @property {Date} props.preSelection - The date that is currently in focus.
* @property {(date: Date) => void} props.setPreSelection - Function to set the pre-selected date.
* @property {{ [key: string]: any }} props.selected - The selected date(s).
* @property {boolean} props.inline - If true, the date picker is displayed inline.
* @property {Date} props.maxDate - The maximum selectable date.
* @property {Date} props.minDate - The minimum selectable date.
* @property {boolean} props.usePointerEvent - If true, pointer events are used instead of mouse events.
* @property {(date: Date) => void} props.onYearMouseEnter - Function to handle mouse enter events on a year.
* @property {(date: Date) => void} props.onYearMouseLeave - Function to handle mouse leave events on a year.
*/
var Year = function(_super) {
	__extends(Year, _super);
	function Year(props) {
		var _this = _super.call(this, props) || this;
		_this.YEAR_REFS = __spreadArray([], Array(_this.props.yearItemNumber), true).map(function() {
			return (0, import_react.createRef)();
		});
		_this.isDisabled = function(date) {
			return isDayDisabled(date, {
				minDate: _this.props.minDate,
				maxDate: _this.props.maxDate,
				excludeDates: _this.props.excludeDates,
				includeDates: _this.props.includeDates,
				filterDate: _this.props.filterDate
			});
		};
		_this.isExcluded = function(date) {
			return isDayExcluded(date, { excludeDates: _this.props.excludeDates });
		};
		_this.selectingDate = function() {
			var _a;
			return (_a = _this.props.selectingDate) !== null && _a !== void 0 ? _a : _this.props.preSelection;
		};
		_this.updateFocusOnPaginate = function(refIndex) {
			var waitForReRender = function() {
				var _a, _b;
				(_b = (_a = _this.YEAR_REFS[refIndex]) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 || _b.focus();
			};
			window.requestAnimationFrame(waitForReRender);
		};
		_this.handleYearClick = function(day, event) {
			if (_this.props.onDayClick) _this.props.onDayClick(day, event);
		};
		_this.handleYearNavigation = function(newYear, newDate) {
			var _a, _b, _c, _d;
			var _e = _this.props, date = _e.date, yearItemNumber = _e.yearItemNumber;
			if (date === void 0 || yearItemNumber === void 0) return;
			var startPeriod = getYearsPeriod(date, yearItemNumber).startPeriod;
			if (_this.isDisabled(newDate) || _this.isExcluded(newDate)) return;
			(_b = (_a = _this.props).setPreSelection) === null || _b === void 0 || _b.call(_a, newDate);
			if (newYear - startPeriod < 0) _this.updateFocusOnPaginate(yearItemNumber - (startPeriod - newYear));
			else if (newYear - startPeriod >= yearItemNumber) _this.updateFocusOnPaginate(Math.abs(yearItemNumber - (newYear - startPeriod)));
			else (_d = (_c = _this.YEAR_REFS[newYear - startPeriod]) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 || _d.focus();
		};
		_this.isSameDay = function(y, other) {
			return isSameDay(y, other);
		};
		_this.isCurrentYear = function(y) {
			return y === getYear(newDate());
		};
		_this.isRangeStart = function(y) {
			return _this.props.startDate && _this.props.endDate && isSameYear(setYear(newDate(), y), _this.props.startDate);
		};
		_this.isRangeEnd = function(y) {
			return _this.props.startDate && _this.props.endDate && isSameYear(setYear(newDate(), y), _this.props.endDate);
		};
		_this.isInRange = function(y) {
			return isYearInRange(y, _this.props.startDate, _this.props.endDate);
		};
		_this.isInSelectingRange = function(y) {
			var _a = _this.props, selectsStart = _a.selectsStart, selectsEnd = _a.selectsEnd, selectsRange = _a.selectsRange, startDate = _a.startDate, endDate = _a.endDate;
			if (!(selectsStart || selectsEnd || selectsRange) || !_this.selectingDate()) return false;
			if (selectsStart && endDate) return isYearInRange(y, _this.selectingDate(), endDate);
			if (selectsEnd && startDate) return isYearInRange(y, startDate, _this.selectingDate());
			if (selectsRange && startDate && !endDate) return isYearInRange(y, startDate, _this.selectingDate());
			return false;
		};
		_this.isSelectingRangeStart = function(y) {
			var _a;
			if (!_this.isInSelectingRange(y)) return false;
			var _b = _this.props, startDate = _b.startDate, selectsStart = _b.selectsStart;
			var _year = setYear(newDate(), y);
			if (selectsStart) return isSameYear(_year, (_a = _this.selectingDate()) !== null && _a !== void 0 ? _a : null);
			return isSameYear(_year, startDate !== null && startDate !== void 0 ? startDate : null);
		};
		_this.isSelectingRangeEnd = function(y) {
			var _a;
			if (!_this.isInSelectingRange(y)) return false;
			var _b = _this.props, endDate = _b.endDate, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange;
			var _year = setYear(newDate(), y);
			if (selectsEnd || selectsRange) return isSameYear(_year, (_a = _this.selectingDate()) !== null && _a !== void 0 ? _a : null);
			return isSameYear(_year, endDate !== null && endDate !== void 0 ? endDate : null);
		};
		_this.isKeyboardSelected = function(y) {
			if (_this.props.date === void 0 || _this.props.selected == null || _this.props.preSelection == null) return;
			var _a = _this.props, minDate = _a.minDate, maxDate = _a.maxDate, excludeDates = _a.excludeDates, includeDates = _a.includeDates, filterDate = _a.filterDate;
			var date = getStartOfYear(setYear(_this.props.date, y));
			var isDisabled = (minDate || maxDate || excludeDates || includeDates || filterDate) && isYearDisabled(y, _this.props);
			return !_this.props.disabledKeyboardNavigation && !_this.props.inline && !isSameDay(date, getStartOfYear(_this.props.selected)) && isSameDay(date, getStartOfYear(_this.props.preSelection)) && !isDisabled;
		};
		_this.onYearClick = function(event, y) {
			var date = _this.props.date;
			if (date === void 0) return;
			_this.handleYearClick(getStartOfYear(setYear(date, y)), event);
		};
		_this.onYearKeyDown = function(event, y) {
			var _a, _b;
			var key = event.key;
			var _c = _this.props, date = _c.date, yearItemNumber = _c.yearItemNumber, handleOnKeyDown = _c.handleOnKeyDown;
			if (key !== KeyType.Tab) event.preventDefault();
			if (!_this.props.disabledKeyboardNavigation) switch (key) {
				case KeyType.Enter:
					if (_this.props.selected == null) break;
					_this.onYearClick(event, y);
					(_b = (_a = _this.props).setPreSelection) === null || _b === void 0 || _b.call(_a, _this.props.selected);
					break;
				case KeyType.ArrowRight:
					if (_this.props.preSelection == null) break;
					_this.handleYearNavigation(y + 1, addYears(_this.props.preSelection, 1));
					break;
				case KeyType.ArrowLeft:
					if (_this.props.preSelection == null) break;
					_this.handleYearNavigation(y - 1, subYears(_this.props.preSelection, 1));
					break;
				case KeyType.ArrowUp:
					if (date === void 0 || yearItemNumber === void 0 || _this.props.preSelection == null) break;
					var startPeriod = getYearsPeriod(date, yearItemNumber).startPeriod;
					var offset = VERTICAL_NAVIGATION_OFFSET;
					var newYear = y - offset;
					if (newYear < startPeriod) {
						var leftOverOffset = yearItemNumber % offset;
						if (y >= startPeriod && y < startPeriod + leftOverOffset) offset = leftOverOffset;
						else offset += leftOverOffset;
						newYear = y - offset;
					}
					_this.handleYearNavigation(newYear, subYears(_this.props.preSelection, offset));
					break;
				case KeyType.ArrowDown:
					if (date === void 0 || yearItemNumber === void 0 || _this.props.preSelection == null) break;
					var endPeriod = getYearsPeriod(date, yearItemNumber).endPeriod;
					var offset = VERTICAL_NAVIGATION_OFFSET;
					var newYear = y + offset;
					if (newYear > endPeriod) {
						var leftOverOffset = yearItemNumber % offset;
						if (y <= endPeriod && y > endPeriod - leftOverOffset) offset = leftOverOffset;
						else offset += leftOverOffset;
						newYear = y + offset;
					}
					_this.handleYearNavigation(newYear, addYears(_this.props.preSelection, offset));
					break;
			}
			handleOnKeyDown && handleOnKeyDown(event);
		};
		_this.getYearClassNames = function(y) {
			var _a = _this.props, date = _a.date, minDate = _a.minDate, maxDate = _a.maxDate, selected = _a.selected, excludeDates = _a.excludeDates, includeDates = _a.includeDates, filterDate = _a.filterDate, yearClassName = _a.yearClassName;
			return clsx("react-datepicker__year-text", "react-datepicker__year-".concat(y), date ? yearClassName === null || yearClassName === void 0 ? void 0 : yearClassName(setYear(date, y)) : void 0, {
				"react-datepicker__year-text--selected": selected ? y === getYear(selected) : void 0,
				"react-datepicker__year-text--disabled": (minDate || maxDate || excludeDates || includeDates || filterDate) && isYearDisabled(y, _this.props),
				"react-datepicker__year-text--keyboard-selected": _this.isKeyboardSelected(y),
				"react-datepicker__year-text--range-start": _this.isRangeStart(y),
				"react-datepicker__year-text--range-end": _this.isRangeEnd(y),
				"react-datepicker__year-text--in-range": _this.isInRange(y),
				"react-datepicker__year-text--in-selecting-range": _this.isInSelectingRange(y),
				"react-datepicker__year-text--selecting-range-start": _this.isSelectingRangeStart(y),
				"react-datepicker__year-text--selecting-range-end": _this.isSelectingRangeEnd(y),
				"react-datepicker__year-text--today": _this.isCurrentYear(y)
			});
		};
		_this.getYearTabIndex = function(y) {
			if (_this.props.disabledKeyboardNavigation || _this.props.preSelection == null) return "-1";
			var preSelected = getYear(_this.props.preSelection);
			var isPreSelectedYearDisabled = isYearDisabled(y, _this.props);
			return y === preSelected && !isPreSelectedYearDisabled ? "0" : "-1";
		};
		_this.getYearContent = function(y) {
			return _this.props.renderYearContent ? _this.props.renderYearContent(y) : y;
		};
		return _this;
	}
	Year.prototype.render = function() {
		var _this = this;
		var yearsList = [];
		var _a = this.props, date = _a.date, yearItemNumber = _a.yearItemNumber, onYearMouseEnter = _a.onYearMouseEnter, onYearMouseLeave = _a.onYearMouseLeave;
		if (date === void 0) return null;
		var _b = getYearsPeriod(date, yearItemNumber), startPeriod = _b.startPeriod, endPeriod = _b.endPeriod;
		var _loop_1 = function(y) {
			yearsList.push(import_react.createElement("div", {
				ref: this_1.YEAR_REFS[y - startPeriod],
				onClick: function(event) {
					_this.onYearClick(event, y);
				},
				onKeyDown: function(event) {
					if (isSpaceKeyDown(event)) {
						event.preventDefault();
						event.key = KeyType.Enter;
					}
					_this.onYearKeyDown(event, y);
				},
				tabIndex: Number(this_1.getYearTabIndex(y)),
				className: this_1.getYearClassNames(y),
				onMouseEnter: !this_1.props.usePointerEvent ? function(event) {
					return onYearMouseEnter(event, y);
				} : void 0,
				onPointerEnter: this_1.props.usePointerEvent ? function(event) {
					return onYearMouseEnter(event, y);
				} : void 0,
				onMouseLeave: !this_1.props.usePointerEvent ? function(event) {
					return onYearMouseLeave(event, y);
				} : void 0,
				onPointerLeave: this_1.props.usePointerEvent ? function(event) {
					return onYearMouseLeave(event, y);
				} : void 0,
				key: y,
				"aria-current": this_1.isCurrentYear(y) ? "date" : void 0
			}, this_1.getYearContent(y)));
		};
		var this_1 = this;
		for (var y = startPeriod; y <= endPeriod; y++) _loop_1(y);
		return import_react.createElement("div", { className: "react-datepicker__year" }, import_react.createElement("div", {
			className: "react-datepicker__year-wrapper",
			onMouseLeave: !this.props.usePointerEvent ? this.props.clearSelectingDate : void 0,
			onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0
		}, yearsList));
	};
	return Year;
}(import_react.Component);
function generateYears(year, noOfYear, minDate, maxDate) {
	var list = [];
	for (var i = 0; i < 2 * noOfYear + 1; i++) {
		var newYear = year + noOfYear - i;
		var isInRange = true;
		if (minDate) isInRange = getYear(minDate) <= newYear;
		if (maxDate && isInRange) isInRange = getYear(maxDate) >= newYear;
		if (isInRange) list.push(newYear);
	}
	return list;
}
var YearDropdownOptions = function(_super) {
	__extends(YearDropdownOptions, _super);
	function YearDropdownOptions(props) {
		var _this = _super.call(this, props) || this;
		_this.renderOptions = function() {
			var selectedYear = _this.props.year;
			var options = _this.state.yearsList.map(function(year) {
				return import_react.createElement("div", {
					className: selectedYear === year ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option",
					key: year,
					onClick: _this.onChange.bind(_this, year),
					"aria-selected": selectedYear === year ? "true" : void 0
				}, selectedYear === year ? import_react.createElement("span", { className: "react-datepicker__year-option--selected" }, "✓") : "", year);
			});
			var minYear = _this.props.minDate ? getYear(_this.props.minDate) : null;
			var maxYear = _this.props.maxDate ? getYear(_this.props.maxDate) : null;
			if (!maxYear || !_this.state.yearsList.find(function(year) {
				return year === maxYear;
			})) options.unshift(import_react.createElement("div", {
				className: "react-datepicker__year-option",
				key: "upcoming",
				onClick: _this.incrementYears
			}, import_react.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" })));
			if (!minYear || !_this.state.yearsList.find(function(year) {
				return year === minYear;
			})) options.push(import_react.createElement("div", {
				className: "react-datepicker__year-option",
				key: "previous",
				onClick: _this.decrementYears
			}, import_react.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" })));
			return options;
		};
		_this.onChange = function(year) {
			_this.props.onChange(year);
		};
		_this.handleClickOutside = function() {
			_this.props.onCancel();
		};
		_this.shiftYears = function(amount) {
			var years = _this.state.yearsList.map(function(year) {
				return year + amount;
			});
			_this.setState({ yearsList: years });
		};
		_this.incrementYears = function() {
			return _this.shiftYears(1);
		};
		_this.decrementYears = function() {
			return _this.shiftYears(-1);
		};
		var yearDropdownItemNumber = props.yearDropdownItemNumber, scrollableYearDropdown = props.scrollableYearDropdown;
		var noOfYear = yearDropdownItemNumber || (scrollableYearDropdown ? 10 : 5);
		_this.state = { yearsList: generateYears(_this.props.year, noOfYear, _this.props.minDate, _this.props.maxDate) };
		_this.dropdownRef = (0, import_react.createRef)();
		return _this;
	}
	YearDropdownOptions.prototype.componentDidMount = function() {
		var dropdownCurrent = this.dropdownRef.current;
		if (dropdownCurrent) {
			var dropdownCurrentChildren = dropdownCurrent.children ? Array.from(dropdownCurrent.children) : null;
			var selectedYearOptionEl = dropdownCurrentChildren ? dropdownCurrentChildren.find(function(childEl) {
				return childEl.ariaSelected;
			}) : null;
			dropdownCurrent.scrollTop = selectedYearOptionEl && selectedYearOptionEl instanceof HTMLElement ? selectedYearOptionEl.offsetTop + (selectedYearOptionEl.clientHeight - dropdownCurrent.clientHeight) / 2 : (dropdownCurrent.scrollHeight - dropdownCurrent.clientHeight) / 2;
		}
	};
	YearDropdownOptions.prototype.render = function() {
		var dropdownClass = clsx({
			"react-datepicker__year-dropdown": true,
			"react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
		});
		return import_react.createElement(ClickOutsideWrapper, {
			className: dropdownClass,
			containerRef: this.dropdownRef,
			onClickOutside: this.handleClickOutside
		}, this.renderOptions());
	};
	return YearDropdownOptions;
}(import_react.Component);
var YearDropdown = function(_super) {
	__extends(YearDropdown, _super);
	function YearDropdown() {
		var _this = _super !== null && _super.apply(this, arguments) || this;
		_this.state = { dropdownVisible: false };
		_this.renderSelectOptions = function() {
			var minYear = _this.props.minDate ? getYear(_this.props.minDate) : 1900;
			var maxYear = _this.props.maxDate ? getYear(_this.props.maxDate) : 2100;
			var options = [];
			for (var i = minYear; i <= maxYear; i++) options.push(import_react.createElement("option", {
				key: i,
				value: i
			}, i));
			return options;
		};
		_this.onSelectChange = function(event) {
			_this.onChange(parseInt(event.target.value));
		};
		_this.renderSelectMode = function() {
			return import_react.createElement("select", {
				value: _this.props.year,
				className: "react-datepicker__year-select",
				onChange: _this.onSelectChange
			}, _this.renderSelectOptions());
		};
		_this.renderReadView = function(visible) {
			return import_react.createElement("div", {
				key: "read",
				style: { visibility: visible ? "visible" : "hidden" },
				className: "react-datepicker__year-read-view",
				onClick: function(event) {
					return _this.toggleDropdown(event);
				}
			}, import_react.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }), import_react.createElement("span", { className: "react-datepicker__year-read-view--selected-year" }, _this.props.year));
		};
		_this.renderDropdown = function() {
			return import_react.createElement(YearDropdownOptions, _assign({ key: "dropdown" }, _this.props, {
				onChange: _this.onChange,
				onCancel: _this.toggleDropdown
			}));
		};
		_this.renderScrollMode = function() {
			var dropdownVisible = _this.state.dropdownVisible;
			var result = [_this.renderReadView(!dropdownVisible)];
			if (dropdownVisible) result.unshift(_this.renderDropdown());
			return result;
		};
		_this.onChange = function(year) {
			_this.toggleDropdown();
			if (year === _this.props.year) return;
			_this.props.onChange(year);
		};
		_this.toggleDropdown = function(event) {
			_this.setState({ dropdownVisible: !_this.state.dropdownVisible }, function() {
				if (_this.props.adjustDateOnChange) _this.handleYearChange(_this.props.date, event);
			});
		};
		_this.handleYearChange = function(date, event) {
			var _a;
			(_a = _this.onSelect) === null || _a === void 0 || _a.call(_this, date, event);
			_this.setOpen();
		};
		_this.onSelect = function(date, event) {
			var _a, _b;
			(_b = (_a = _this.props).onSelect) === null || _b === void 0 || _b.call(_a, date, event);
		};
		_this.setOpen = function() {
			var _a, _b;
			(_b = (_a = _this.props).setOpen) === null || _b === void 0 || _b.call(_a, true);
		};
		return _this;
	}
	YearDropdown.prototype.render = function() {
		var renderedDropdown;
		switch (this.props.dropdownMode) {
			case "scroll":
				renderedDropdown = this.renderScrollMode();
				break;
			case "select":
				renderedDropdown = this.renderSelectMode();
				break;
		}
		return import_react.createElement("div", { className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode) }, renderedDropdown);
	};
	return YearDropdown;
}(import_react.Component);
var DROPDOWN_FOCUS_CLASSNAMES = [
	"react-datepicker__year-select",
	"react-datepicker__month-select",
	"react-datepicker__month-year-select"
];
var isDropdownSelect = function(element) {
	var classNames = (element.className || "").split(/\s+/);
	return DROPDOWN_FOCUS_CLASSNAMES.some(function(testClassname) {
		return classNames.indexOf(testClassname) >= 0;
	});
};
var Calendar = function(_super) {
	__extends(Calendar, _super);
	function Calendar(props) {
		var _this = _super.call(this, props) || this;
		_this.monthContainer = void 0;
		_this.handleClickOutside = function(event) {
			_this.props.onClickOutside(event);
		};
		_this.setClickOutsideRef = function() {
			return _this.containerRef.current;
		};
		_this.handleDropdownFocus = function(event) {
			var _a, _b;
			if (isDropdownSelect(event.target)) (_b = (_a = _this.props).onDropdownFocus) === null || _b === void 0 || _b.call(_a, event);
		};
		_this.getDateInView = function() {
			var _a = _this.props, preSelection = _a.preSelection, selected = _a.selected, openToDate = _a.openToDate;
			var minDate = getEffectiveMinDate(_this.props);
			var maxDate = getEffectiveMaxDate(_this.props);
			var current = newDate();
			var initialDate = openToDate || selected || preSelection;
			if (initialDate) return initialDate;
			else if (minDate && isBefore(current, minDate)) return minDate;
			else if (maxDate && isAfter(current, maxDate)) return maxDate;
			return current;
		};
		_this.increaseMonth = function() {
			_this.setState(function(_a) {
				var date = _a.date;
				return { date: addMonths(date, 1) };
			}, function() {
				return _this.handleMonthChange(_this.state.date);
			});
		};
		_this.decreaseMonth = function() {
			_this.setState(function(_a) {
				var date = _a.date;
				return { date: subMonths(date, 1) };
			}, function() {
				return _this.handleMonthChange(_this.state.date);
			});
		};
		_this.handleDayClick = function(day, event, monthSelectedIn) {
			_this.props.onSelect(day, event, monthSelectedIn);
			_this.props.setPreSelection && _this.props.setPreSelection(day);
		};
		_this.handleDayMouseEnter = function(day) {
			_this.setState({ selectingDate: day });
			_this.props.onDayMouseEnter && _this.props.onDayMouseEnter(day);
		};
		_this.handleMonthMouseLeave = function() {
			_this.setState({ selectingDate: void 0 });
			_this.props.onMonthMouseLeave && _this.props.onMonthMouseLeave();
		};
		_this.handleYearMouseEnter = function(event, year) {
			_this.setState({ selectingDate: setYear(newDate(), year) });
			_this.props.onYearMouseEnter && _this.props.onYearMouseEnter(event, year);
		};
		_this.handleYearMouseLeave = function(event, year) {
			_this.props.onYearMouseLeave && _this.props.onYearMouseLeave(event, year);
		};
		_this.handleYearChange = function(date) {
			var _a, _b, _c, _d;
			(_b = (_a = _this.props).onYearChange) === null || _b === void 0 || _b.call(_a, date);
			_this.setState({ isRenderAriaLiveMessage: true });
			if (_this.props.adjustDateOnChange) {
				_this.props.onSelect(date);
				(_d = (_c = _this.props).setOpen) === null || _d === void 0 || _d.call(_c, true);
			}
			_this.props.setPreSelection && _this.props.setPreSelection(date);
		};
		_this.getEnabledPreSelectionDateForMonth = function(date) {
			if (!isDayDisabled(date, _this.props)) return date;
			var startOfMonth = getStartOfMonth(date);
			var totalDays = differenceInDays(getEndOfMonth(date), startOfMonth);
			var preSelectedDate = null;
			for (var dayIdx = 0; dayIdx <= totalDays; dayIdx++) {
				var processingDate = addDays(startOfMonth, dayIdx);
				if (!isDayDisabled(processingDate, _this.props)) {
					preSelectedDate = processingDate;
					break;
				}
			}
			return preSelectedDate;
		};
		_this.handleMonthChange = function(date) {
			var _a, _b, _c;
			var enabledPreSelectionDate = (_a = _this.getEnabledPreSelectionDateForMonth(date)) !== null && _a !== void 0 ? _a : date;
			_this.handleCustomMonthChange(enabledPreSelectionDate);
			if (_this.props.adjustDateOnChange) {
				_this.props.onSelect(enabledPreSelectionDate);
				(_c = (_b = _this.props).setOpen) === null || _c === void 0 || _c.call(_b, true);
			}
			_this.props.setPreSelection && _this.props.setPreSelection(enabledPreSelectionDate);
		};
		_this.handleCustomMonthChange = function(date) {
			var _a, _b;
			(_b = (_a = _this.props).onMonthChange) === null || _b === void 0 || _b.call(_a, date);
			_this.setState({ isRenderAriaLiveMessage: true });
		};
		_this.handleMonthYearChange = function(date) {
			_this.handleYearChange(date);
			_this.handleMonthChange(date);
		};
		_this.changeYear = function(year) {
			_this.setState(function(_a) {
				var date = _a.date;
				return { date: setYear(date, Number(year)) };
			}, function() {
				return _this.handleYearChange(_this.state.date);
			});
		};
		_this.changeMonth = function(month) {
			_this.setState(function(_a) {
				var date = _a.date;
				return { date: setMonth(date, Number(month)) };
			}, function() {
				return _this.handleMonthChange(_this.state.date);
			});
		};
		_this.changeMonthYear = function(monthYear) {
			_this.setState(function(_a) {
				var date = _a.date;
				return { date: setYear(setMonth(date, getMonth(monthYear)), getYear(monthYear)) };
			}, function() {
				return _this.handleMonthYearChange(_this.state.date);
			});
		};
		_this.header = function(date) {
			if (date === void 0) date = _this.state.date;
			var startOfWeek = getStartOfWeek(date, _this.props.locale, _this.props.calendarStartDay);
			var dayNames = [];
			if (_this.props.showWeekNumbers) dayNames.push(import_react.createElement("div", {
				key: "W",
				className: "react-datepicker__day-name"
			}, _this.props.weekLabel || "#"));
			return dayNames.concat([
				0,
				1,
				2,
				3,
				4,
				5,
				6
			].map(function(offset) {
				var day = addDays(startOfWeek, offset);
				var weekDayName = _this.formatWeekday(day, _this.props.locale);
				var weekDayClassName = _this.props.weekDayClassName ? _this.props.weekDayClassName(day) : void 0;
				return import_react.createElement("div", {
					key: offset,
					"aria-label": formatDate(day, "EEEE", _this.props.locale),
					className: clsx("react-datepicker__day-name", weekDayClassName)
				}, weekDayName);
			}));
		};
		_this.formatWeekday = function(day, locale) {
			if (_this.props.formatWeekDay) return getFormattedWeekdayInLocale(day, _this.props.formatWeekDay, locale);
			return _this.props.useWeekdaysShort ? getWeekdayShortInLocale(day, locale) : getWeekdayMinInLocale(day, locale);
		};
		_this.decreaseYear = function() {
			_this.setState(function(_a) {
				var _b;
				var date = _a.date;
				return { date: subYears(date, _this.props.showYearPicker ? (_b = _this.props.yearItemNumber) !== null && _b !== void 0 ? _b : Calendar.defaultProps.yearItemNumber : 1) };
			}, function() {
				return _this.handleYearChange(_this.state.date);
			});
		};
		_this.clearSelectingDate = function() {
			_this.setState({ selectingDate: void 0 });
		};
		_this.renderPreviousButton = function() {
			var _a, _b, _c;
			if (_this.props.renderCustomHeader) return;
			var monthsShown = (_a = _this.props.monthsShown) !== null && _a !== void 0 ? _a : Calendar.defaultProps.monthsShown;
			var monthsToSubtract = _this.props.showPreviousMonths ? monthsShown - 1 : 0;
			var monthSelectedIn = (_b = _this.props.monthSelectedIn) !== null && _b !== void 0 ? _b : monthsToSubtract;
			var fromMonthDate = subMonths(_this.state.date, monthSelectedIn);
			var allPrevDaysDisabled;
			switch (true) {
				case _this.props.showMonthYearPicker:
					allPrevDaysDisabled = yearDisabledBefore(_this.state.date, _this.props);
					break;
				case _this.props.showYearPicker:
					allPrevDaysDisabled = yearsDisabledBefore(_this.state.date, _this.props);
					break;
				case _this.props.showQuarterYearPicker:
					allPrevDaysDisabled = quarterDisabledBefore(_this.state.date, _this.props);
					break;
				default:
					allPrevDaysDisabled = monthDisabledBefore(fromMonthDate, _this.props);
					break;
			}
			if (!((_c = _this.props.forceShowMonthNavigation) !== null && _c !== void 0 ? _c : Calendar.defaultProps.forceShowMonthNavigation) && !_this.props.showDisabledMonthNavigation && allPrevDaysDisabled || _this.props.showTimeSelectOnly) return;
			var iconClasses = ["react-datepicker__navigation-icon", "react-datepicker__navigation-icon--previous"];
			var classes = ["react-datepicker__navigation", "react-datepicker__navigation--previous"];
			var clickHandler = _this.decreaseMonth;
			if (_this.props.showMonthYearPicker || _this.props.showQuarterYearPicker || _this.props.showYearPicker) clickHandler = _this.decreaseYear;
			if (allPrevDaysDisabled && _this.props.showDisabledMonthNavigation) {
				classes.push("react-datepicker__navigation--previous--disabled");
				clickHandler = void 0;
			}
			var isForYear = _this.props.showMonthYearPicker || _this.props.showQuarterYearPicker || _this.props.showYearPicker;
			var _d = _this.props, _e = _d.previousMonthButtonLabel, previousMonthButtonLabel = _e === void 0 ? Calendar.defaultProps.previousMonthButtonLabel : _e, _f = _d.previousYearButtonLabel, previousYearButtonLabel = _f === void 0 ? Calendar.defaultProps.previousYearButtonLabel : _f;
			var _g = _this.props, _h = _g.previousMonthAriaLabel, previousMonthAriaLabel = _h === void 0 ? typeof previousMonthButtonLabel === "string" ? previousMonthButtonLabel : "Previous Month" : _h, _j = _g.previousYearAriaLabel, previousYearAriaLabel = _j === void 0 ? typeof previousYearButtonLabel === "string" ? previousYearButtonLabel : "Previous Year" : _j;
			return import_react.createElement("button", {
				type: "button",
				className: classes.join(" "),
				onClick: clickHandler,
				onKeyDown: _this.props.handleOnKeyDown,
				"aria-label": isForYear ? previousYearAriaLabel : previousMonthAriaLabel
			}, import_react.createElement("span", { className: iconClasses.join(" ") }, isForYear ? previousYearButtonLabel : previousMonthButtonLabel));
		};
		_this.increaseYear = function() {
			_this.setState(function(_a) {
				var _b;
				var date = _a.date;
				return { date: addYears(date, _this.props.showYearPicker ? (_b = _this.props.yearItemNumber) !== null && _b !== void 0 ? _b : Calendar.defaultProps.yearItemNumber : 1) };
			}, function() {
				return _this.handleYearChange(_this.state.date);
			});
		};
		_this.renderNextButton = function() {
			var _a;
			if (_this.props.renderCustomHeader) return;
			var allNextDaysDisabled;
			switch (true) {
				case _this.props.showMonthYearPicker:
					allNextDaysDisabled = yearDisabledAfter(_this.state.date, _this.props);
					break;
				case _this.props.showYearPicker:
					allNextDaysDisabled = yearsDisabledAfter(_this.state.date, _this.props);
					break;
				case _this.props.showQuarterYearPicker:
					allNextDaysDisabled = quarterDisabledAfter(_this.state.date, _this.props);
					break;
				default:
					allNextDaysDisabled = monthDisabledAfter(_this.state.date, _this.props);
					break;
			}
			if (!((_a = _this.props.forceShowMonthNavigation) !== null && _a !== void 0 ? _a : Calendar.defaultProps.forceShowMonthNavigation) && !_this.props.showDisabledMonthNavigation && allNextDaysDisabled || _this.props.showTimeSelectOnly) return;
			var classes = ["react-datepicker__navigation", "react-datepicker__navigation--next"];
			var iconClasses = ["react-datepicker__navigation-icon", "react-datepicker__navigation-icon--next"];
			if (_this.props.showTimeSelect) classes.push("react-datepicker__navigation--next--with-time");
			if (_this.props.todayButton) classes.push("react-datepicker__navigation--next--with-today-button");
			var clickHandler = _this.increaseMonth;
			if (_this.props.showMonthYearPicker || _this.props.showQuarterYearPicker || _this.props.showYearPicker) clickHandler = _this.increaseYear;
			if (allNextDaysDisabled && _this.props.showDisabledMonthNavigation) {
				classes.push("react-datepicker__navigation--next--disabled");
				clickHandler = void 0;
			}
			var isForYear = _this.props.showMonthYearPicker || _this.props.showQuarterYearPicker || _this.props.showYearPicker;
			var _b = _this.props, _c = _b.nextMonthButtonLabel, nextMonthButtonLabel = _c === void 0 ? Calendar.defaultProps.nextMonthButtonLabel : _c, _d = _b.nextYearButtonLabel, nextYearButtonLabel = _d === void 0 ? Calendar.defaultProps.nextYearButtonLabel : _d;
			var _e = _this.props, _f = _e.nextMonthAriaLabel, nextMonthAriaLabel = _f === void 0 ? typeof nextMonthButtonLabel === "string" ? nextMonthButtonLabel : "Next Month" : _f, _g = _e.nextYearAriaLabel, nextYearAriaLabel = _g === void 0 ? typeof nextYearButtonLabel === "string" ? nextYearButtonLabel : "Next Year" : _g;
			return import_react.createElement("button", {
				type: "button",
				className: classes.join(" "),
				onClick: clickHandler,
				onKeyDown: _this.props.handleOnKeyDown,
				"aria-label": isForYear ? nextYearAriaLabel : nextMonthAriaLabel
			}, import_react.createElement("span", { className: iconClasses.join(" ") }, isForYear ? nextYearButtonLabel : nextMonthButtonLabel));
		};
		_this.renderCurrentMonth = function(date) {
			if (date === void 0) date = _this.state.date;
			var classes = ["react-datepicker__current-month"];
			if (_this.props.showYearDropdown) classes.push("react-datepicker__current-month--hasYearDropdown");
			if (_this.props.showMonthDropdown) classes.push("react-datepicker__current-month--hasMonthDropdown");
			if (_this.props.showMonthYearDropdown) classes.push("react-datepicker__current-month--hasMonthYearDropdown");
			return import_react.createElement("h2", { className: classes.join(" ") }, formatDate(date, _this.props.dateFormat, _this.props.locale));
		};
		_this.renderYearDropdown = function(overrideHide) {
			if (overrideHide === void 0) overrideHide = false;
			if (!_this.props.showYearDropdown || overrideHide) return;
			return import_react.createElement(YearDropdown, _assign({}, Calendar.defaultProps, _this.props, {
				date: _this.state.date,
				onChange: _this.changeYear,
				year: getYear(_this.state.date)
			}));
		};
		_this.renderMonthDropdown = function(overrideHide) {
			if (overrideHide === void 0) overrideHide = false;
			if (!_this.props.showMonthDropdown || overrideHide) return;
			return import_react.createElement(MonthDropdown, _assign({}, Calendar.defaultProps, _this.props, {
				month: getMonth(_this.state.date),
				onChange: _this.changeMonth
			}));
		};
		_this.renderMonthYearDropdown = function(overrideHide) {
			if (overrideHide === void 0) overrideHide = false;
			if (!_this.props.showMonthYearDropdown || overrideHide) return;
			return import_react.createElement(MonthYearDropdown, _assign({}, Calendar.defaultProps, _this.props, {
				date: _this.state.date,
				onChange: _this.changeMonthYear
			}));
		};
		_this.handleTodayButtonClick = function(event) {
			_this.props.onSelect(getStartOfToday(), event);
			_this.props.setPreSelection && _this.props.setPreSelection(getStartOfToday());
		};
		_this.renderTodayButton = function() {
			if (!_this.props.todayButton || _this.props.showTimeSelectOnly) return;
			return import_react.createElement("div", {
				className: "react-datepicker__today-button",
				onClick: _this.handleTodayButtonClick
			}, _this.props.todayButton);
		};
		_this.renderDefaultHeader = function(_a) {
			var monthDate = _a.monthDate, i = _a.i;
			return import_react.createElement("div", { className: "react-datepicker__header ".concat(_this.props.showTimeSelect ? "react-datepicker__header--has-time-select" : "") }, _this.renderCurrentMonth(monthDate), import_react.createElement("div", {
				className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(_this.props.dropdownMode),
				onFocus: _this.handleDropdownFocus
			}, _this.renderMonthDropdown(i !== 0), _this.renderMonthYearDropdown(i !== 0), _this.renderYearDropdown(i !== 0)), import_react.createElement("div", { className: "react-datepicker__day-names" }, _this.header(monthDate)));
		};
		_this.renderCustomHeader = function(headerArgs) {
			var _a, _b;
			var monthDate = headerArgs.monthDate, i = headerArgs.i;
			if (_this.props.showTimeSelect && !_this.state.monthContainer || _this.props.showTimeSelectOnly) return null;
			var prevMonthButtonDisabled = monthDisabledBefore(_this.state.date, _this.props);
			var nextMonthButtonDisabled = monthDisabledAfter(_this.state.date, _this.props);
			var prevYearButtonDisabled = yearDisabledBefore(_this.state.date, _this.props);
			var nextYearButtonDisabled = yearDisabledAfter(_this.state.date, _this.props);
			var showDayNames = !_this.props.showMonthYearPicker && !_this.props.showQuarterYearPicker && !_this.props.showYearPicker;
			return import_react.createElement("div", {
				className: "react-datepicker__header react-datepicker__header--custom",
				onFocus: _this.props.onDropdownFocus
			}, (_b = (_a = _this.props).renderCustomHeader) === null || _b === void 0 ? void 0 : _b.call(_a, _assign(_assign({}, _this.state), {
				customHeaderCount: i,
				monthDate,
				changeMonth: _this.changeMonth,
				changeYear: _this.changeYear,
				decreaseMonth: _this.decreaseMonth,
				increaseMonth: _this.increaseMonth,
				decreaseYear: _this.decreaseYear,
				increaseYear: _this.increaseYear,
				prevMonthButtonDisabled,
				nextMonthButtonDisabled,
				prevYearButtonDisabled,
				nextYearButtonDisabled
			})), showDayNames && import_react.createElement("div", { className: "react-datepicker__day-names" }, _this.header(monthDate)));
		};
		_this.renderYearHeader = function(_a) {
			var monthDate = _a.monthDate;
			var _b = _this.props, showYearPicker = _b.showYearPicker, _c = _b.yearItemNumber;
			var _d = getYearsPeriod(monthDate, _c === void 0 ? Calendar.defaultProps.yearItemNumber : _c), startPeriod = _d.startPeriod, endPeriod = _d.endPeriod;
			return import_react.createElement("div", { className: "react-datepicker__header react-datepicker-year-header" }, showYearPicker ? "".concat(startPeriod, " - ").concat(endPeriod) : getYear(monthDate));
		};
		_this.renderHeader = function(_a) {
			var monthDate = _a.monthDate, _b = _a.i;
			var headerArgs = {
				monthDate,
				i: _b === void 0 ? 0 : _b
			};
			switch (true) {
				case _this.props.renderCustomHeader !== void 0: return _this.renderCustomHeader(headerArgs);
				case _this.props.showMonthYearPicker || _this.props.showQuarterYearPicker || _this.props.showYearPicker: return _this.renderYearHeader(headerArgs);
				default: return _this.renderDefaultHeader(headerArgs);
			}
		};
		_this.renderMonths = function() {
			var _a, _b;
			if (_this.props.showTimeSelectOnly || _this.props.showYearPicker) return;
			var monthList = [];
			var monthsShown = (_a = _this.props.monthsShown) !== null && _a !== void 0 ? _a : Calendar.defaultProps.monthsShown;
			var monthsToSubtract = _this.props.showPreviousMonths ? monthsShown - 1 : 0;
			var fromMonthDate = _this.props.showMonthYearPicker || _this.props.showQuarterYearPicker ? addYears(_this.state.date, monthsToSubtract) : subMonths(_this.state.date, monthsToSubtract);
			var monthSelectedIn = (_b = _this.props.monthSelectedIn) !== null && _b !== void 0 ? _b : monthsToSubtract;
			for (var i = 0; i < monthsShown; ++i) {
				var monthsToAdd = i - monthSelectedIn + monthsToSubtract;
				var monthDate = _this.props.showMonthYearPicker || _this.props.showQuarterYearPicker ? addYears(fromMonthDate, monthsToAdd) : addMonths(fromMonthDate, monthsToAdd);
				var monthKey = "month-".concat(i);
				var monthShowsDuplicateDaysEnd = i < monthsShown - 1;
				var monthShowsDuplicateDaysStart = i > 0;
				monthList.push(import_react.createElement("div", {
					key: monthKey,
					ref: function(div) {
						_this.monthContainer = div !== null && div !== void 0 ? div : void 0;
					},
					className: "react-datepicker__month-container"
				}, _this.renderHeader({
					monthDate,
					i
				}), import_react.createElement(Month, _assign({}, Calendar.defaultProps, _this.props, {
					ariaLabelPrefix: _this.props.monthAriaLabelPrefix,
					day: monthDate,
					onDayClick: _this.handleDayClick,
					handleOnKeyDown: _this.props.handleOnDayKeyDown,
					handleOnMonthKeyDown: _this.props.handleOnKeyDown,
					onDayMouseEnter: _this.handleDayMouseEnter,
					onMouseLeave: _this.handleMonthMouseLeave,
					orderInDisplay: i,
					selectingDate: _this.state.selectingDate,
					monthShowsDuplicateDaysEnd,
					monthShowsDuplicateDaysStart
				}))));
			}
			return monthList;
		};
		_this.renderYears = function() {
			if (_this.props.showTimeSelectOnly) return;
			if (_this.props.showYearPicker) return import_react.createElement("div", { className: "react-datepicker__year--container" }, _this.renderHeader({ monthDate: _this.state.date }), import_react.createElement(Year, _assign({}, Calendar.defaultProps, _this.props, {
				selectingDate: _this.state.selectingDate,
				date: _this.state.date,
				onDayClick: _this.handleDayClick,
				clearSelectingDate: _this.clearSelectingDate,
				onYearMouseEnter: _this.handleYearMouseEnter,
				onYearMouseLeave: _this.handleYearMouseLeave
			})));
		};
		_this.renderTimeSection = function() {
			if (_this.props.showTimeSelect && (_this.state.monthContainer || _this.props.showTimeSelectOnly)) return import_react.createElement(Time, _assign({}, Calendar.defaultProps, _this.props, {
				onChange: _this.props.onTimeChange,
				format: _this.props.timeFormat,
				intervals: _this.props.timeIntervals,
				monthRef: _this.state.monthContainer
			}));
		};
		_this.renderInputTimeSection = function() {
			var time = _this.props.selected ? new Date(_this.props.selected) : void 0;
			var timeString = time && isValid(time) && Boolean(_this.props.selected) ? "".concat(addZero(time.getHours()), ":").concat(addZero(time.getMinutes())) : "";
			if (_this.props.showTimeInput) return import_react.createElement(InputTime, _assign({}, Calendar.defaultProps, _this.props, {
				date: time,
				timeString,
				onChange: _this.props.onTimeChange
			}));
		};
		_this.renderAriaLiveRegion = function() {
			var _a;
			var _b = getYearsPeriod(_this.state.date, (_a = _this.props.yearItemNumber) !== null && _a !== void 0 ? _a : Calendar.defaultProps.yearItemNumber), startPeriod = _b.startPeriod, endPeriod = _b.endPeriod;
			var ariaLiveMessage;
			if (_this.props.showYearPicker) ariaLiveMessage = "".concat(startPeriod, " - ").concat(endPeriod);
			else if (_this.props.showMonthYearPicker || _this.props.showQuarterYearPicker) ariaLiveMessage = getYear(_this.state.date);
			else ariaLiveMessage = "".concat(getMonthInLocale(getMonth(_this.state.date), _this.props.locale), " ").concat(getYear(_this.state.date));
			return import_react.createElement("span", {
				role: "alert",
				"aria-live": "polite",
				className: "react-datepicker__aria-live"
			}, _this.state.isRenderAriaLiveMessage && ariaLiveMessage);
		};
		_this.renderChildren = function() {
			if (_this.props.children) return import_react.createElement("div", { className: "react-datepicker__children-container" }, _this.props.children);
		};
		_this.containerRef = (0, import_react.createRef)();
		_this.state = {
			date: _this.getDateInView(),
			selectingDate: void 0,
			monthContainer: void 0,
			isRenderAriaLiveMessage: false
		};
		return _this;
	}
	Object.defineProperty(Calendar, "defaultProps", {
		get: function() {
			return {
				monthsShown: 1,
				forceShowMonthNavigation: false,
				timeCaption: "Time",
				previousYearButtonLabel: "Previous Year",
				nextYearButtonLabel: "Next Year",
				previousMonthButtonLabel: "Previous Month",
				nextMonthButtonLabel: "Next Month",
				yearItemNumber: DEFAULT_YEAR_ITEM_NUMBER
			};
		},
		enumerable: false,
		configurable: true
	});
	Calendar.prototype.componentDidMount = function() {
		var _this = this;
		if (this.props.showTimeSelect) this.assignMonthContainer = (function() {
			_this.setState({ monthContainer: _this.monthContainer });
		})();
	};
	Calendar.prototype.componentDidUpdate = function(prevProps) {
		var _this = this;
		if (this.props.preSelection && (!isSameDay(this.props.preSelection, prevProps.preSelection) || this.props.monthSelectedIn !== prevProps.monthSelectedIn)) {
			var hasMonthChanged_1 = !isSameMonth(this.state.date, this.props.preSelection);
			this.setState({ date: this.props.preSelection }, function() {
				return hasMonthChanged_1 && _this.handleCustomMonthChange(_this.state.date);
			});
		} else if (this.props.openToDate && !isSameDay(this.props.openToDate, prevProps.openToDate)) this.setState({ date: this.props.openToDate });
	};
	Calendar.prototype.render = function() {
		var Container = this.props.container || CalendarContainer;
		return import_react.createElement(ClickOutsideWrapper, {
			onClickOutside: this.handleClickOutside,
			style: { display: "contents" },
			containerRef: this.containerRef,
			ignoreClass: this.props.outsideClickIgnoreClass
		}, import_react.createElement(Container, {
			className: clsx("react-datepicker", this.props.className, { "react-datepicker--time-only": this.props.showTimeSelectOnly }),
			showTime: this.props.showTimeSelect || this.props.showTimeInput,
			showTimeSelectOnly: this.props.showTimeSelectOnly
		}, this.renderAriaLiveRegion(), this.renderPreviousButton(), this.renderNextButton(), this.renderMonths(), this.renderYears(), this.renderTodayButton(), this.renderTimeSection(), this.renderInputTimeSection(), this.renderChildren()));
	};
	return Calendar;
}(import_react.Component);
/**
* `CalendarIcon` is a React component that renders an icon for a calendar.
* The icon can be a string representing a CSS class, a React node, or a default SVG icon.
*
* @component
* @prop  icon - The icon to be displayed. This can be a string representing a CSS class or a React node.
* @prop  className - An optional string representing additional CSS classes to be applied to the icon.
* @prop  onClick - An optional function to be called when the icon is clicked.
*
* @example
* // To use a CSS class as the icon
* <CalendarIcon icon="my-icon-class" onClick={myClickHandler} />
*
* @example
* // To use a React node as the icon
* <CalendarIcon icon={<MyIconComponent />} onClick={myClickHandler} />
*
* @returns  The `CalendarIcon` component.
*/
var CalendarIcon$1 = function(_a) {
	var icon = _a.icon, _b = _a.className, className = _b === void 0 ? "" : _b, onClick = _a.onClick;
	var defaultClass = "react-datepicker__calendar-icon";
	if (typeof icon === "string") return import_react.createElement("i", {
		className: "".concat(defaultClass, " ").concat(icon, " ").concat(className),
		"aria-hidden": "true",
		onClick
	});
	if (import_react.isValidElement(icon)) return import_react.cloneElement(icon, {
		className: "".concat(icon.props.className || "", " ").concat(defaultClass, " ").concat(className),
		onClick: function(event) {
			if (typeof icon.props.onClick === "function") icon.props.onClick(event);
			if (typeof onClick === "function") onClick(event);
		}
	});
	return import_react.createElement("svg", {
		className: "".concat(defaultClass, " ").concat(className),
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 448 512",
		onClick
	}, import_react.createElement("path", { d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" }));
};
/**
* `Portal` is a React component that allows you to render children into a DOM node
* that exists outside the DOM hierarchy of the parent component.
*
* @class
* @param {PortalProps} props - The properties that define the `Portal` component.
* @property {React.ReactNode} props.children - The children to be rendered into the `Portal`.
* @property {string} props.portalId - The id of the DOM node into which the `Portal` will render.
* @property {ShadowRoot} [props.portalHost] - The DOM node to host the `Portal`.
*/
var Portal = function(_super) {
	__extends(Portal, _super);
	function Portal(props) {
		var _this = _super.call(this, props) || this;
		_this.portalRoot = null;
		_this.el = document.createElement("div");
		return _this;
	}
	Portal.prototype.componentDidMount = function() {
		this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId);
		if (!this.portalRoot) {
			this.portalRoot = document.createElement("div");
			this.portalRoot.setAttribute("id", this.props.portalId);
			(this.props.portalHost || document.body).appendChild(this.portalRoot);
		}
		this.portalRoot.appendChild(this.el);
	};
	Portal.prototype.componentWillUnmount = function() {
		if (this.portalRoot) this.portalRoot.removeChild(this.el);
	};
	Portal.prototype.render = function() {
		return import_react_dom.createPortal(this.props.children, this.el);
	};
	return Portal;
}(import_react.Component);
var focusableElementsSelector = "[tabindex], a, button, input, select, textarea";
var focusableFilter = function(node) {
	if (node instanceof HTMLAnchorElement) return node.tabIndex !== -1;
	return !node.disabled && node.tabIndex !== -1;
};
/**
* `TabLoop` is a React component that manages tabbing behavior for its children.
*
* TabLoop prevents the user from tabbing outside of the popper
* It creates a tabindex loop so that "Tab" on the last element will focus the first element
* and "Shift Tab" on the first element will focus the last element
*
* @component
* @example
* <TabLoop enableTabLoop={true}>
*   <ChildComponent />
* </TabLoop>
*
* @param props - The properties that define the `TabLoop` component.
* @param props.children - The child components.
* @param props.enableTabLoop - Whether to enable the tab loop.
*
* @returns The `TabLoop` component.
*/
var TabLoop = function(_super) {
	__extends(TabLoop, _super);
	function TabLoop(props) {
		var _this = _super.call(this, props) || this;
		/**
		* `getTabChildren` is a method of the `TabLoop` class that retrieves all tabbable children of the component.
		*
		* This method uses the `tabbable` library to find all tabbable elements within the `TabLoop` component.
		* It then filters out any elements that are not visible.
		*
		* @returns An array of all tabbable and visible children of the `TabLoop` component.
		*/
		_this.getTabChildren = function() {
			var _a;
			return Array.prototype.slice.call((_a = _this.tabLoopRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll(focusableElementsSelector), 1, -1).filter(focusableFilter);
		};
		_this.handleFocusStart = function() {
			var tabChildren = _this.getTabChildren();
			tabChildren && tabChildren.length > 1 && tabChildren[tabChildren.length - 1].focus();
		};
		_this.handleFocusEnd = function() {
			var tabChildren = _this.getTabChildren();
			tabChildren && tabChildren.length > 1 && tabChildren[0].focus();
		};
		_this.tabLoopRef = (0, import_react.createRef)();
		return _this;
	}
	TabLoop.prototype.render = function() {
		var _a;
		if (!((_a = this.props.enableTabLoop) !== null && _a !== void 0 ? _a : TabLoop.defaultProps.enableTabLoop)) return this.props.children;
		return import_react.createElement("div", {
			className: "react-datepicker__tab-loop",
			ref: this.tabLoopRef
		}, import_react.createElement("div", {
			className: "react-datepicker__tab-loop__start",
			tabIndex: 0,
			onFocus: this.handleFocusStart
		}), this.props.children, import_react.createElement("div", {
			className: "react-datepicker__tab-loop__end",
			tabIndex: 0,
			onFocus: this.handleFocusEnd
		}));
	};
	TabLoop.defaultProps = { enableTabLoop: true };
	return TabLoop;
}(import_react.Component);
/**
* `withFloating` is a higher-order component that adds floating behavior to a component.
*
* @param Component - The component to enhance.
*
* @example
* const FloatingComponent = withFloating(MyComponent);
* <FloatingComponent popperModifiers={[]} popperProps={{}} hidePopper={true} />
*
* @param popperModifiers - The modifiers to use for the popper.
* @param popperProps - The props to pass to the popper.
* @param hidePopper - Whether to hide the popper.
* @param popperPlacement - The placement of the popper.
*
* @returns A new component with floating behavior.
*/
function withFloating(Component) {
	var WithFloating = function(props) {
		var _a;
		var hidePopper = typeof props.hidePopper === "boolean" ? props.hidePopper : true;
		var arrowRef = (0, import_react.useRef)(null);
		var floatingProps = useFloating(_assign({
			open: !hidePopper,
			whileElementsMounted: autoUpdate,
			placement: props.popperPlacement,
			middleware: __spreadArray([
				flip({ padding: 15 }),
				offset(10),
				arrow({ element: arrowRef })
			], (_a = props.popperModifiers) !== null && _a !== void 0 ? _a : [], true)
		}, props.popperProps));
		var componentProps = _assign(_assign({}, props), {
			hidePopper,
			popperProps: _assign(_assign({}, floatingProps), { arrowRef })
		});
		return import_react.createElement(Component, _assign({}, componentProps));
	};
	return WithFloating;
}
var PopperComponent$1 = withFloating(function(_super) {
	__extends(PopperComponent, _super);
	function PopperComponent() {
		return _super !== null && _super.apply(this, arguments) || this;
	}
	Object.defineProperty(PopperComponent, "defaultProps", {
		get: function() {
			return { hidePopper: true };
		},
		enumerable: false,
		configurable: true
	});
	PopperComponent.prototype.render = function() {
		var _a = this.props, className = _a.className, wrapperClassName = _a.wrapperClassName, _b = _a.hidePopper, hidePopper = _b === void 0 ? PopperComponent.defaultProps.hidePopper : _b, popperComponent = _a.popperComponent, targetComponent = _a.targetComponent, enableTabLoop = _a.enableTabLoop, popperOnKeyDown = _a.popperOnKeyDown, portalId = _a.portalId, portalHost = _a.portalHost, popperProps = _a.popperProps, showArrow = _a.showArrow;
		var popper = void 0;
		if (!hidePopper) {
			var classes = clsx("react-datepicker-popper", className);
			popper = import_react.createElement(TabLoop, { enableTabLoop }, import_react.createElement("div", {
				ref: popperProps.refs.setFloating,
				style: popperProps.floatingStyles,
				className: classes,
				"data-placement": popperProps.placement,
				onKeyDown: popperOnKeyDown
			}, popperComponent, showArrow && import_react.createElement(FloatingArrow, {
				ref: popperProps.arrowRef,
				context: popperProps.context,
				fill: "currentColor",
				strokeWidth: 1,
				height: 8,
				width: 16,
				style: { transform: "translateY(-1px)" },
				className: "react-datepicker__triangle"
			})));
		}
		if (this.props.popperContainer) popper = (0, import_react.createElement)(this.props.popperContainer, {}, popper);
		if (portalId && !hidePopper) popper = import_react.createElement(Portal, {
			portalId,
			portalHost
		}, popper);
		var wrapperClasses = clsx("react-datepicker-wrapper", wrapperClassName);
		return import_react.createElement(import_react.Fragment, null, import_react.createElement("div", {
			ref: popperProps.refs.setReference,
			className: wrapperClasses
		}, targetComponent), popper);
	};
	return PopperComponent;
}(import_react.Component));
var outsideClickIgnoreClass = "react-datepicker-ignore-onclickoutside";
function hasPreSelectionChanged(date1, date2) {
	if (date1 && date2) return getMonth(date1) !== getMonth(date2) || getYear(date1) !== getYear(date2);
	return date1 !== date2;
}
/**
* General datepicker component.
*/
var INPUT_ERR_1 = "Date input not valid.";
var DatePicker$1 = function(_super) {
	__extends(DatePicker, _super);
	function DatePicker(props) {
		var _this = _super.call(this, props) || this;
		_this.calendar = null;
		_this.input = null;
		_this.getPreSelection = function() {
			return _this.props.openToDate ? _this.props.openToDate : _this.props.selectsEnd && _this.props.startDate ? _this.props.startDate : _this.props.selectsStart && _this.props.endDate ? _this.props.endDate : newDate();
		};
		_this.modifyHolidays = function() {
			var _a;
			return (_a = _this.props.holidays) === null || _a === void 0 ? void 0 : _a.reduce(function(accumulator, holiday) {
				var date = new Date(holiday.date);
				if (!isValid(date)) return accumulator;
				return __spreadArray(__spreadArray([], accumulator, true), [_assign(_assign({}, holiday), { date })], false);
			}, []);
		};
		_this.calcInitialState = function() {
			var _a;
			var defaultPreSelection = _this.getPreSelection();
			var minDate = getEffectiveMinDate(_this.props);
			var maxDate = getEffectiveMaxDate(_this.props);
			var boundedPreSelection = minDate && isBefore(defaultPreSelection, getStartOfDay(minDate)) ? minDate : maxDate && isAfter(defaultPreSelection, getEndOfDay(maxDate)) ? maxDate : defaultPreSelection;
			return {
				open: _this.props.startOpen || false,
				preventFocus: false,
				inputValue: null,
				preSelection: (_a = _this.props.selectsRange ? _this.props.startDate : _this.props.selected) !== null && _a !== void 0 ? _a : boundedPreSelection,
				highlightDates: getHighLightDaysMap(_this.props.highlightDates),
				focused: false,
				shouldFocusDayInline: false,
				isRenderAriaLiveMessage: false,
				wasHidden: false
			};
		};
		_this.resetHiddenStatus = function() {
			_this.setState(_assign(_assign({}, _this.state), { wasHidden: false }));
		};
		_this.setHiddenStatus = function() {
			_this.setState(_assign(_assign({}, _this.state), { wasHidden: true }));
		};
		_this.setHiddenStateOnVisibilityHidden = function() {
			if (document.visibilityState !== "hidden") return;
			_this.setHiddenStatus();
		};
		_this.clearPreventFocusTimeout = function() {
			if (_this.preventFocusTimeout) clearTimeout(_this.preventFocusTimeout);
		};
		_this.safeFocus = function() {
			setTimeout(function() {
				var _a, _b;
				(_b = (_a = _this.input) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 || _b.call(_a, { preventScroll: true });
			}, 0);
		};
		_this.safeBlur = function() {
			setTimeout(function() {
				var _a, _b;
				(_b = (_a = _this.input) === null || _a === void 0 ? void 0 : _a.blur) === null || _b === void 0 || _b.call(_a);
			}, 0);
		};
		_this.setFocus = function() {
			_this.safeFocus();
		};
		_this.setBlur = function() {
			_this.safeBlur();
			_this.cancelFocusInput();
		};
		_this.setOpen = function(open, skipSetBlur) {
			if (skipSetBlur === void 0) skipSetBlur = false;
			_this.setState({
				open,
				preSelection: open && _this.state.open ? _this.state.preSelection : _this.calcInitialState().preSelection,
				lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE
			}, function() {
				if (!open) _this.setState(function(prev) {
					return { focused: skipSetBlur ? prev.focused : false };
				}, function() {
					!skipSetBlur && _this.setBlur();
					_this.setState({ inputValue: null });
				});
			});
		};
		_this.inputOk = function() {
			return isDate(_this.state.preSelection);
		};
		_this.isCalendarOpen = function() {
			return _this.props.open === void 0 ? _this.state.open && !_this.props.disabled && !_this.props.readOnly : _this.props.open;
		};
		_this.handleFocus = function(event) {
			var _a, _b;
			var isAutoReFocus = _this.state.wasHidden;
			var isOpenAllowed = isAutoReFocus ? _this.state.open : true;
			if (isAutoReFocus) _this.resetHiddenStatus();
			if (!_this.state.preventFocus && isOpenAllowed) {
				(_b = (_a = _this.props).onFocus) === null || _b === void 0 || _b.call(_a, event);
				if (!_this.props.preventOpenOnFocus && !_this.props.readOnly) _this.setOpen(true);
			}
			_this.setState({ focused: true });
		};
		_this.sendFocusBackToInput = function() {
			if (_this.preventFocusTimeout) _this.clearPreventFocusTimeout();
			_this.setState({ preventFocus: true }, function() {
				_this.preventFocusTimeout = setTimeout(function() {
					_this.setFocus();
					_this.setState({ preventFocus: false });
				});
			});
		};
		_this.cancelFocusInput = function() {
			clearTimeout(_this.inputFocusTimeout);
			_this.inputFocusTimeout = void 0;
		};
		_this.deferFocusInput = function() {
			_this.cancelFocusInput();
			_this.inputFocusTimeout = setTimeout(function() {
				return _this.setFocus();
			}, 1);
		};
		_this.handleDropdownFocus = function() {
			_this.cancelFocusInput();
		};
		_this.handleBlur = function(event) {
			var _a, _b;
			if (!_this.state.open || _this.props.withPortal || _this.props.showTimeInput) (_b = (_a = _this.props).onBlur) === null || _b === void 0 || _b.call(_a, event);
			_this.setState({ focused: false });
		};
		_this.handleCalendarClickOutside = function(event) {
			var _a, _b;
			if (!_this.props.inline) _this.setOpen(false);
			(_b = (_a = _this.props).onClickOutside) === null || _b === void 0 || _b.call(_a, event);
			if (_this.props.withPortal) event.preventDefault();
		};
		_this.handleChange = function() {
			var _a, _b;
			var allArgs = [];
			for (var _i = 0; _i < arguments.length; _i++) allArgs[_i] = arguments[_i];
			var event = allArgs[0];
			if (_this.props.onChangeRaw) {
				_this.props.onChangeRaw.apply(_this, allArgs);
				if (!event || typeof event.isDefaultPrevented !== "function" || event.isDefaultPrevented()) return;
			}
			_this.setState({
				inputValue: (event === null || event === void 0 ? void 0 : event.target) instanceof HTMLInputElement ? event.target.value : null,
				lastPreSelectChange: PRESELECT_CHANGE_VIA_INPUT
			});
			var _c = _this.props, _d = _c.dateFormat, dateFormat = _d === void 0 ? DatePicker.defaultProps.dateFormat : _d, _e = _c.strictParsing, strictParsing = _e === void 0 ? DatePicker.defaultProps.strictParsing : _e, selectsRange = _c.selectsRange, startDate = _c.startDate, endDate = _c.endDate;
			var value = (event === null || event === void 0 ? void 0 : event.target) instanceof HTMLInputElement ? event.target.value : "";
			if (selectsRange) {
				var _f = value.split("-", 2).map(function(val) {
					return val.trim();
				}), valueStart = _f[0], valueEnd = _f[1];
				var startDateNew = parseDate(valueStart !== null && valueStart !== void 0 ? valueStart : "", dateFormat, _this.props.locale, strictParsing);
				var endDateNew = parseDate(valueEnd !== null && valueEnd !== void 0 ? valueEnd : "", dateFormat, _this.props.locale, strictParsing);
				var startChanged = (startDate === null || startDate === void 0 ? void 0 : startDate.getTime()) !== (startDateNew === null || startDateNew === void 0 ? void 0 : startDateNew.getTime());
				var endChanged = (endDate === null || endDate === void 0 ? void 0 : endDate.getTime()) !== (endDateNew === null || endDateNew === void 0 ? void 0 : endDateNew.getTime());
				if (!startChanged && !endChanged) return;
				if (startDateNew && isDayDisabled(startDateNew, _this.props)) return;
				if (endDateNew && isDayDisabled(endDateNew, _this.props)) return;
				(_b = (_a = _this.props).onChange) === null || _b === void 0 || _b.call(_a, [startDateNew, endDateNew], event);
			} else {
				var date = parseDate(value, dateFormat, _this.props.locale, strictParsing, _this.props.minDate);
				if (_this.props.showTimeSelectOnly && _this.props.selected && date && !isSameDay(date, _this.props.selected)) date = set(_this.props.selected, {
					hours: getHours(date),
					minutes: getMinutes(date),
					seconds: getSeconds(date)
				});
				if (date || !value) _this.setSelected(date, event, true);
			}
		};
		_this.handleSelect = function(date, event, monthSelectedIn) {
			if (_this.props.shouldCloseOnSelect && !_this.props.showTimeSelect) _this.sendFocusBackToInput();
			if (_this.props.onChangeRaw) _this.props.onChangeRaw(event);
			_this.setSelected(date, event, false, monthSelectedIn);
			if (_this.props.showDateSelect) _this.setState({ isRenderAriaLiveMessage: true });
			if (!_this.props.shouldCloseOnSelect || _this.props.showTimeSelect) _this.setPreSelection(date);
			else if (!_this.props.inline) {
				if (!_this.props.selectsRange) _this.setOpen(false);
				var _a = _this.props, startDate = _a.startDate, endDate = _a.endDate;
				if (startDate && !endDate && (_this.props.swapRange || !isDateBefore(date, startDate))) _this.setOpen(false);
			}
		};
		_this.setSelected = function(date, event, keepInput, monthSelectedIn) {
			var _a, _b;
			var changedDate = date;
			if (_this.props.showYearPicker) {
				if (changedDate !== null && isYearDisabled(getYear(changedDate), _this.props)) return;
			} else if (_this.props.showMonthYearPicker) {
				if (changedDate !== null && isMonthDisabled(changedDate, _this.props)) return;
			} else if (changedDate !== null && isDayDisabled(changedDate, _this.props)) return;
			var _c = _this.props, onChange = _c.onChange, selectsRange = _c.selectsRange, startDate = _c.startDate, endDate = _c.endDate, selectsMultiple = _c.selectsMultiple, selectedDates = _c.selectedDates, minTime = _c.minTime, swapRange = _c.swapRange;
			if (!isEqual(_this.props.selected, changedDate) || _this.props.allowSameDay || selectsRange || selectsMultiple) {
				if (changedDate !== null) {
					if (_this.props.selected && (!keepInput || !_this.props.showTimeSelect && !_this.props.showTimeSelectOnly && !_this.props.showTimeInput)) changedDate = setTime(changedDate, {
						hour: getHours(_this.props.selected),
						minute: getMinutes(_this.props.selected),
						second: getSeconds(_this.props.selected)
					});
					if (!keepInput && (_this.props.showTimeSelect || _this.props.showTimeSelectOnly)) {
						if (minTime) changedDate = setTime(changedDate, {
							hour: minTime.getHours(),
							minute: minTime.getMinutes(),
							second: minTime.getSeconds()
						});
					}
					if (!_this.props.inline) _this.setState({ preSelection: changedDate });
					if (!_this.props.focusSelectedMonth) _this.setState({ monthSelectedIn });
				}
				if (selectsRange) {
					var noRanges = !startDate && !endDate;
					var hasStartRange = startDate && !endDate;
					var isRangeFilled = startDate && endDate;
					if (noRanges) onChange === null || onChange === void 0 || onChange([changedDate, null], event);
					else if (hasStartRange) if (changedDate === null) onChange === null || onChange === void 0 || onChange([null, null], event);
					else if (isDateBefore(changedDate, startDate)) if (swapRange) onChange === null || onChange === void 0 || onChange([changedDate, startDate], event);
					else onChange === null || onChange === void 0 || onChange([changedDate, null], event);
					else onChange === null || onChange === void 0 || onChange([startDate, changedDate], event);
					if (isRangeFilled) onChange === null || onChange === void 0 || onChange([changedDate, null], event);
				} else if (selectsMultiple) {
					if (changedDate !== null) if (!(selectedDates === null || selectedDates === void 0 ? void 0 : selectedDates.length)) onChange === null || onChange === void 0 || onChange([changedDate], event);
					else if (selectedDates.some(function(selectedDate) {
						return isSameDay(selectedDate, changedDate);
					})) {
						var nextDates = selectedDates.filter(function(selectedDate) {
							return !isSameDay(selectedDate, changedDate);
						});
						onChange === null || onChange === void 0 || onChange(nextDates, event);
					} else onChange === null || onChange === void 0 || onChange(__spreadArray(__spreadArray([], selectedDates, true), [changedDate], false), event);
				} else onChange === null || onChange === void 0 || onChange(changedDate, event);
			}
			if (!keepInput) {
				(_b = (_a = _this.props).onSelect) === null || _b === void 0 || _b.call(_a, changedDate, event);
				_this.setState({ inputValue: null });
			}
		};
		_this.setPreSelection = function(date) {
			var hasMinDate = isDate(_this.props.minDate);
			var hasMaxDate = isDate(_this.props.maxDate);
			var isValidDateSelection = true;
			if (date) {
				var dateStartOfDay = getStartOfDay(date);
				if (hasMinDate && hasMaxDate) isValidDateSelection = isDayInRange(date, _this.props.minDate, _this.props.maxDate);
				else if (hasMinDate) {
					var minDateStartOfDay = getStartOfDay(_this.props.minDate);
					isValidDateSelection = isAfter(date, minDateStartOfDay) || isEqual(dateStartOfDay, minDateStartOfDay);
				} else if (hasMaxDate) {
					var maxDateEndOfDay = getEndOfDay(_this.props.maxDate);
					isValidDateSelection = isBefore(date, maxDateEndOfDay) || isEqual(dateStartOfDay, maxDateEndOfDay);
				}
			}
			if (isValidDateSelection) _this.setState({ preSelection: date });
		};
		_this.toggleCalendar = function() {
			_this.setOpen(!_this.state.open);
		};
		_this.handleTimeChange = function(time) {
			var _a, _b;
			if (_this.props.selectsRange || _this.props.selectsMultiple) return;
			var selected = _this.props.selected ? _this.props.selected : _this.getPreSelection();
			var changedDate = _this.props.selected ? time : setTime(selected, {
				hour: getHours(time),
				minute: getMinutes(time)
			});
			_this.setState({ preSelection: changedDate });
			(_b = (_a = _this.props).onChange) === null || _b === void 0 || _b.call(_a, changedDate);
			if (_this.props.shouldCloseOnSelect && !_this.props.showTimeInput) {
				_this.sendFocusBackToInput();
				_this.setOpen(false);
			}
			if (_this.props.showTimeInput) _this.setOpen(true);
			if (_this.props.showTimeSelectOnly || _this.props.showTimeSelect) _this.setState({ isRenderAriaLiveMessage: true });
			_this.setState({ inputValue: null });
		};
		_this.onInputClick = function() {
			var _a, _b;
			if (!_this.props.disabled && !_this.props.readOnly) _this.setOpen(true);
			(_b = (_a = _this.props).onInputClick) === null || _b === void 0 || _b.call(_a);
		};
		_this.onInputKeyDown = function(event) {
			var _a, _b, _c, _d, _e, _f;
			(_b = (_a = _this.props).onKeyDown) === null || _b === void 0 || _b.call(_a, event);
			var eventKey = event.key;
			if (!_this.state.open && !_this.props.inline && !_this.props.preventOpenOnFocus) {
				if (eventKey === KeyType.ArrowDown || eventKey === KeyType.ArrowUp || eventKey === KeyType.Enter) (_c = _this.onInputClick) === null || _c === void 0 || _c.call(_this);
				return;
			}
			if (_this.state.open) {
				if (eventKey === KeyType.ArrowDown || eventKey === KeyType.ArrowUp) {
					event.preventDefault();
					var selectorString = _this.props.showTimeSelectOnly ? ".react-datepicker__time-list-item[tabindex='0']" : _this.props.showWeekPicker && _this.props.showWeekNumbers ? ".react-datepicker__week-number[tabindex=\"0\"]" : _this.props.showFullMonthYearPicker || _this.props.showMonthYearPicker ? ".react-datepicker__month-text[tabindex=\"0\"]" : ".react-datepicker__day[tabindex=\"0\"]";
					var selectedItem = ((_d = _this.calendar) === null || _d === void 0 ? void 0 : _d.containerRef.current) instanceof Element && _this.calendar.containerRef.current.querySelector(selectorString);
					selectedItem instanceof HTMLElement && selectedItem.focus({ preventScroll: true });
					return;
				}
				var copy = newDate(_this.state.preSelection);
				if (eventKey === KeyType.Enter) {
					event.preventDefault();
					event.target.blur();
					if (_this.inputOk() && _this.state.lastPreSelectChange === PRESELECT_CHANGE_VIA_NAVIGATE) {
						_this.handleSelect(copy, event);
						!_this.props.shouldCloseOnSelect && _this.setPreSelection(copy);
					} else _this.setOpen(false);
				} else if (eventKey === KeyType.Escape) {
					event.preventDefault();
					event.target.blur();
					_this.sendFocusBackToInput();
					_this.setOpen(false);
				} else if (eventKey === KeyType.Tab) _this.setOpen(false);
				if (!_this.inputOk()) (_f = (_e = _this.props).onInputError) === null || _f === void 0 || _f.call(_e, {
					code: 1,
					msg: INPUT_ERR_1
				});
			}
		};
		_this.onPortalKeyDown = function(event) {
			if (event.key === KeyType.Escape) {
				event.preventDefault();
				_this.setState({ preventFocus: true }, function() {
					_this.setOpen(false);
					setTimeout(function() {
						_this.setFocus();
						_this.setState({ preventFocus: false });
					});
				});
			}
		};
		_this.onDayKeyDown = function(event) {
			var _a, _b, _c, _d, _e, _f;
			var _g = _this.props, minDate = _g.minDate, maxDate = _g.maxDate, disabledKeyboardNavigation = _g.disabledKeyboardNavigation, showWeekPicker = _g.showWeekPicker, shouldCloseOnSelect = _g.shouldCloseOnSelect, locale = _g.locale, calendarStartDay = _g.calendarStartDay, adjustDateOnChange = _g.adjustDateOnChange, inline = _g.inline;
			(_b = (_a = _this.props).onKeyDown) === null || _b === void 0 || _b.call(_a, event);
			if (disabledKeyboardNavigation) return;
			var eventKey = event.key;
			var isShiftKeyActive = event.shiftKey;
			var copy = newDate(_this.state.preSelection);
			var calculateNewDate = function(eventKey, date) {
				var newCalculatedDate = date;
				switch (eventKey) {
					case KeyType.ArrowRight:
						newCalculatedDate = showWeekPicker ? addWeeks(date, 1) : addDays(date, 1);
						break;
					case KeyType.ArrowLeft:
						newCalculatedDate = showWeekPicker ? subWeeks(date, 1) : subDays(date, 1);
						break;
					case KeyType.ArrowUp:
						newCalculatedDate = subWeeks(date, 1);
						break;
					case KeyType.ArrowDown:
						newCalculatedDate = addWeeks(date, 1);
						break;
					case KeyType.PageUp:
						newCalculatedDate = isShiftKeyActive ? subYears(date, 1) : subMonths(date, 1);
						break;
					case KeyType.PageDown:
						newCalculatedDate = isShiftKeyActive ? addYears(date, 1) : addMonths(date, 1);
						break;
					case KeyType.Home:
						newCalculatedDate = getStartOfWeek(date, locale, calendarStartDay);
						break;
					case KeyType.End:
						newCalculatedDate = getEndOfWeek(date);
						break;
				}
				return newCalculatedDate;
			};
			var getNewDate = function(eventKey, date) {
				var MAX_ITERATIONS = 40;
				var eventKeyCopy = eventKey;
				var validDateFound = false;
				var iterations = 0;
				var newSelection = calculateNewDate(eventKey, date);
				while (!validDateFound) {
					if (iterations >= MAX_ITERATIONS) {
						newSelection = date;
						break;
					}
					if (minDate && newSelection < minDate) {
						eventKeyCopy = KeyType.ArrowRight;
						newSelection = isDayDisabled(minDate, _this.props) ? calculateNewDate(eventKeyCopy, newSelection) : minDate;
					}
					if (maxDate && newSelection > maxDate) {
						eventKeyCopy = KeyType.ArrowLeft;
						newSelection = isDayDisabled(maxDate, _this.props) ? calculateNewDate(eventKeyCopy, newSelection) : maxDate;
					}
					if (isDayDisabled(newSelection, _this.props)) {
						if (eventKeyCopy === KeyType.PageUp || eventKeyCopy === KeyType.Home) eventKeyCopy = KeyType.ArrowRight;
						if (eventKeyCopy === KeyType.PageDown || eventKeyCopy === KeyType.End) eventKeyCopy = KeyType.ArrowLeft;
						newSelection = calculateNewDate(eventKeyCopy, newSelection);
					} else validDateFound = true;
					iterations++;
				}
				return newSelection;
			};
			if (eventKey === KeyType.Enter) {
				event.preventDefault();
				_this.handleSelect(copy, event);
				!shouldCloseOnSelect && _this.setPreSelection(copy);
				return;
			} else if (eventKey === KeyType.Escape) {
				event.preventDefault();
				_this.setOpen(false);
				if (!_this.inputOk()) (_d = (_c = _this.props).onInputError) === null || _d === void 0 || _d.call(_c, {
					code: 1,
					msg: INPUT_ERR_1
				});
				return;
			}
			var newSelection = null;
			switch (eventKey) {
				case KeyType.ArrowLeft:
				case KeyType.ArrowRight:
				case KeyType.ArrowUp:
				case KeyType.ArrowDown:
				case KeyType.PageUp:
				case KeyType.PageDown:
				case KeyType.Home:
				case KeyType.End:
					newSelection = getNewDate(eventKey, copy);
					break;
			}
			if (!newSelection) {
				(_f = (_e = _this.props).onInputError) === null || _f === void 0 || _f.call(_e, {
					code: 1,
					msg: INPUT_ERR_1
				});
				return;
			}
			event.preventDefault();
			_this.setState({ lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE });
			if (adjustDateOnChange) _this.setSelected(newSelection);
			_this.setPreSelection(newSelection);
			if (inline) {
				var prevMonth = getMonth(copy);
				var newMonth = getMonth(newSelection);
				var prevYear = getYear(copy);
				var newYear = getYear(newSelection);
				if (prevMonth !== newMonth || prevYear !== newYear) _this.setState({ shouldFocusDayInline: true });
				else _this.setState({ shouldFocusDayInline: false });
			}
		};
		_this.onPopperKeyDown = function(event) {
			if (event.key === KeyType.Escape) {
				event.preventDefault();
				_this.sendFocusBackToInput();
			}
		};
		_this.onClearClick = function(event) {
			if (event) {
				if (event.preventDefault) event.preventDefault();
			}
			_this.sendFocusBackToInput();
			var _a = _this.props, selectsRange = _a.selectsRange, onChange = _a.onChange;
			if (selectsRange) onChange === null || onChange === void 0 || onChange([null, null], event);
			else onChange === null || onChange === void 0 || onChange(null, event);
			_this.setState({ inputValue: null });
		};
		_this.clear = function() {
			_this.onClearClick();
		};
		_this.onScroll = function(event) {
			if (typeof _this.props.closeOnScroll === "boolean" && _this.props.closeOnScroll) {
				if (event.target === document || event.target === document.documentElement || event.target === document.body) _this.setOpen(false);
			} else if (typeof _this.props.closeOnScroll === "function") {
				if (_this.props.closeOnScroll(event)) _this.setOpen(false);
			}
		};
		_this.renderCalendar = function() {
			var _a, _b;
			if (!_this.props.inline && !_this.isCalendarOpen()) return null;
			return import_react.createElement(Calendar, _assign({
				showMonthYearDropdown: void 0,
				ref: function(elem) {
					_this.calendar = elem;
				}
			}, _this.props, _this.state, {
				setOpen: _this.setOpen,
				dateFormat: (_a = _this.props.dateFormatCalendar) !== null && _a !== void 0 ? _a : DatePicker.defaultProps.dateFormatCalendar,
				onSelect: _this.handleSelect,
				onClickOutside: _this.handleCalendarClickOutside,
				holidays: getHolidaysMap(_this.modifyHolidays()),
				outsideClickIgnoreClass,
				onDropdownFocus: _this.handleDropdownFocus,
				onTimeChange: _this.handleTimeChange,
				className: _this.props.calendarClassName,
				container: _this.props.calendarContainer,
				handleOnKeyDown: _this.props.onKeyDown,
				handleOnDayKeyDown: _this.onDayKeyDown,
				setPreSelection: _this.setPreSelection,
				dropdownMode: (_b = _this.props.dropdownMode) !== null && _b !== void 0 ? _b : DatePicker.defaultProps.dropdownMode
			}), _this.props.children);
		};
		_this.renderAriaLiveRegion = function() {
			var _a = _this.props, _b = _a.dateFormat, dateFormat = _b === void 0 ? DatePicker.defaultProps.dateFormat : _b, locale = _a.locale;
			var longDateFormat = _this.props.showTimeInput || _this.props.showTimeSelect ? "PPPPp" : "PPPP";
			var ariaLiveMessage;
			if (_this.props.selectsRange) ariaLiveMessage = "Selected start date: ".concat(safeDateFormat(_this.props.startDate, {
				dateFormat: longDateFormat,
				locale
			}), ". ").concat(_this.props.endDate ? "End date: " + safeDateFormat(_this.props.endDate, {
				dateFormat: longDateFormat,
				locale
			}) : "");
			else if (_this.props.showTimeSelectOnly) ariaLiveMessage = "Selected time: ".concat(safeDateFormat(_this.props.selected, {
				dateFormat,
				locale
			}));
			else if (_this.props.showYearPicker) ariaLiveMessage = "Selected year: ".concat(safeDateFormat(_this.props.selected, {
				dateFormat: "yyyy",
				locale
			}));
			else if (_this.props.showMonthYearPicker) ariaLiveMessage = "Selected month: ".concat(safeDateFormat(_this.props.selected, {
				dateFormat: "MMMM yyyy",
				locale
			}));
			else if (_this.props.showQuarterYearPicker) ariaLiveMessage = "Selected quarter: ".concat(safeDateFormat(_this.props.selected, {
				dateFormat: "yyyy, QQQ",
				locale
			}));
			else ariaLiveMessage = "Selected date: ".concat(safeDateFormat(_this.props.selected, {
				dateFormat: longDateFormat,
				locale
			}));
			return import_react.createElement("span", {
				role: "alert",
				"aria-live": "polite",
				className: "react-datepicker__aria-live"
			}, ariaLiveMessage);
		};
		_this.renderDateInput = function() {
			var _a, _b;
			var _c;
			var className = clsx(_this.props.className, (_a = {}, _a[outsideClickIgnoreClass] = _this.state.open, _a));
			var customInput = _this.props.customInput || import_react.createElement("input", { type: "text" });
			var customInputRef = _this.props.customInputRef || "ref";
			var _d = _this.props, _e = _d.dateFormat, dateFormat = _e === void 0 ? DatePicker.defaultProps.dateFormat : _e, locale = _d.locale;
			var inputValue = typeof _this.props.value === "string" ? _this.props.value : typeof _this.state.inputValue === "string" ? _this.state.inputValue : _this.props.selectsRange ? safeDateRangeFormat(_this.props.startDate, _this.props.endDate, {
				dateFormat,
				locale
			}) : _this.props.selectsMultiple ? safeMultipleDatesFormat((_c = _this.props.selectedDates) !== null && _c !== void 0 ? _c : [], {
				dateFormat,
				locale
			}) : safeDateFormat(_this.props.selected, {
				dateFormat,
				locale
			});
			return (0, import_react.cloneElement)(customInput, (_b = {}, _b[customInputRef] = function(input) {
				_this.input = input;
			}, _b.value = inputValue, _b.onBlur = _this.handleBlur, _b.onChange = _this.handleChange, _b.onClick = _this.onInputClick, _b.onFocus = _this.handleFocus, _b.onKeyDown = _this.onInputKeyDown, _b.id = _this.props.id, _b.name = _this.props.name, _b.form = _this.props.form, _b.autoFocus = _this.props.autoFocus, _b.placeholder = _this.props.placeholderText, _b.disabled = _this.props.disabled, _b.autoComplete = _this.props.autoComplete, _b.className = clsx(customInput.props.className, className), _b.title = _this.props.title, _b.readOnly = _this.props.readOnly, _b.required = _this.props.required, _b.tabIndex = _this.props.tabIndex, _b["aria-describedby"] = _this.props.ariaDescribedBy, _b["aria-invalid"] = _this.props.ariaInvalid, _b["aria-labelledby"] = _this.props.ariaLabelledBy, _b["aria-required"] = _this.props.ariaRequired, _b));
		};
		_this.renderClearButton = function() {
			var _a = _this.props, isClearable = _a.isClearable, disabled = _a.disabled, selected = _a.selected, startDate = _a.startDate, endDate = _a.endDate, clearButtonTitle = _a.clearButtonTitle, _b = _a.clearButtonClassName, clearButtonClassName = _b === void 0 ? "" : _b, _c = _a.ariaLabelClose, ariaLabelClose = _c === void 0 ? "Close" : _c, selectedDates = _a.selectedDates;
			if (isClearable && (selected != null || startDate != null || endDate != null || (selectedDates === null || selectedDates === void 0 ? void 0 : selectedDates.length))) return import_react.createElement("button", {
				type: "button",
				className: clsx("react-datepicker__close-icon", clearButtonClassName, { "react-datepicker__close-icon--disabled": disabled }),
				disabled,
				"aria-label": ariaLabelClose,
				onClick: _this.onClearClick,
				title: clearButtonTitle,
				tabIndex: -1
			});
			else return null;
		};
		_this.state = _this.calcInitialState();
		_this.preventFocusTimeout = void 0;
		return _this;
	}
	Object.defineProperty(DatePicker, "defaultProps", {
		get: function() {
			return {
				allowSameDay: false,
				dateFormat: "MM/dd/yyyy",
				dateFormatCalendar: "LLLL yyyy",
				disabled: false,
				disabledKeyboardNavigation: false,
				dropdownMode: "scroll",
				preventOpenOnFocus: false,
				monthsShown: 1,
				readOnly: false,
				withPortal: false,
				selectsDisabledDaysInRange: false,
				shouldCloseOnSelect: true,
				showTimeSelect: false,
				showTimeInput: false,
				showPreviousMonths: false,
				showMonthYearPicker: false,
				showFullMonthYearPicker: false,
				showTwoColumnMonthYearPicker: false,
				showFourColumnMonthYearPicker: false,
				showYearPicker: false,
				showQuarterYearPicker: false,
				showWeekPicker: false,
				strictParsing: false,
				swapRange: false,
				timeIntervals: 30,
				timeCaption: "Time",
				previousMonthAriaLabel: "Previous Month",
				previousMonthButtonLabel: "Previous Month",
				nextMonthAriaLabel: "Next Month",
				nextMonthButtonLabel: "Next Month",
				previousYearAriaLabel: "Previous Year",
				previousYearButtonLabel: "Previous Year",
				nextYearAriaLabel: "Next Year",
				nextYearButtonLabel: "Next Year",
				timeInputLabel: "Time",
				enableTabLoop: true,
				yearItemNumber: DEFAULT_YEAR_ITEM_NUMBER,
				focusSelectedMonth: false,
				showPopperArrow: true,
				excludeScrollbar: true,
				customTimeInput: null,
				calendarStartDay: void 0,
				toggleCalendarOnIconClick: false,
				usePointerEvent: false
			};
		},
		enumerable: false,
		configurable: true
	});
	DatePicker.prototype.componentDidMount = function() {
		window.addEventListener("scroll", this.onScroll, true);
		document.addEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
	};
	DatePicker.prototype.componentDidUpdate = function(prevProps, prevState) {
		var _a, _b, _c, _d;
		if (prevProps.inline && hasPreSelectionChanged(prevProps.selected, this.props.selected)) this.setPreSelection(this.props.selected);
		if (this.state.monthSelectedIn !== void 0 && prevProps.monthsShown !== this.props.monthsShown) this.setState({ monthSelectedIn: 0 });
		if (prevProps.highlightDates !== this.props.highlightDates) this.setState({ highlightDates: getHighLightDaysMap(this.props.highlightDates) });
		if (!prevState.focused && !isEqual(prevProps.selected, this.props.selected)) this.setState({ inputValue: null });
		if (prevState.open !== this.state.open) {
			if (prevState.open === false && this.state.open === true) (_b = (_a = this.props).onCalendarOpen) === null || _b === void 0 || _b.call(_a);
			if (prevState.open === true && this.state.open === false) (_d = (_c = this.props).onCalendarClose) === null || _d === void 0 || _d.call(_c);
		}
	};
	DatePicker.prototype.componentWillUnmount = function() {
		this.clearPreventFocusTimeout();
		window.removeEventListener("scroll", this.onScroll, true);
		document.removeEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
	};
	DatePicker.prototype.renderInputContainer = function() {
		var _a = this.props, showIcon = _a.showIcon, icon = _a.icon, calendarIconClassname = _a.calendarIconClassname, calendarIconClassName = _a.calendarIconClassName, toggleCalendarOnIconClick = _a.toggleCalendarOnIconClick;
		var open = this.state.open;
		if (calendarIconClassname) console.warn("calendarIconClassname props is deprecated. should use calendarIconClassName props.");
		return import_react.createElement("div", { className: "react-datepicker__input-container".concat(showIcon ? " react-datepicker__view-calendar-icon" : "") }, showIcon && import_react.createElement(CalendarIcon$1, _assign({
			icon,
			className: clsx(calendarIconClassName, !calendarIconClassName && calendarIconClassname, open && "react-datepicker-ignore-onclickoutside")
		}, toggleCalendarOnIconClick ? { onClick: this.toggleCalendar } : null)), this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(), this.renderDateInput(), this.renderClearButton());
	};
	DatePicker.prototype.render = function() {
		var calendar = this.renderCalendar();
		if (this.props.inline) return calendar;
		if (this.props.withPortal) {
			var portalContainer = this.state.open ? import_react.createElement(TabLoop, { enableTabLoop: this.props.enableTabLoop }, import_react.createElement("div", {
				className: "react-datepicker__portal",
				tabIndex: -1,
				onKeyDown: this.onPortalKeyDown
			}, calendar)) : null;
			if (this.state.open && this.props.portalId) portalContainer = import_react.createElement(Portal, _assign({ portalId: this.props.portalId }, this.props), portalContainer);
			return import_react.createElement("div", null, this.renderInputContainer(), portalContainer);
		}
		return import_react.createElement(PopperComponent$1, _assign({}, this.props, {
			className: this.props.popperClassName,
			hidePopper: !this.isCalendarOpen(),
			targetComponent: this.renderInputContainer(),
			popperComponent: calendar,
			popperOnKeyDown: this.onPopperKeyDown,
			showArrow: this.props.showPopperArrow
		}));
	};
	return DatePicker;
}(import_react.Component);
var PRESELECT_CHANGE_VIA_INPUT = "input";
var PRESELECT_CHANGE_VIA_NAVIGATE = "navigate";
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/icons/Calendar/index.js
var paths = { 24: "M14.5 5C14.7761 5 15 5.22386 15 5.5V6H16.5C17.3284 6 18 6.67157 18 7.5V16.5C18 17.3284 17.3284 18 16.5 18H7.5C6.67157 18 6 17.3284 6 16.5V7.5C6 6.67157 6.67157 6 7.5 6H9V5.5C9 5.22386 9.22386 5 9.5 5C9.77614 5 10 5.22386 10 5.5V6H14V5.5C14 5.22386 14.2239 5 14.5 5ZM7 16.5C7 16.7761 7.22386 17 7.5 17H16.5C16.7761 17 17 16.7761 17 16.5V10H7V16.5ZM7.5 7C7.22386 7 7 7.22386 7 7.5V9H17V7.5C17 7.22386 16.7761 7 16.5 7H15V7.5C15 7.77614 14.7761 8 14.5 8C14.2239 8 14 7.77614 14 7.5V7H10V7.5C10 7.77614 9.77614 8 9.5 8C9.22386 8 9 7.77614 9 7.5V7H7.5Z" };
var CalendarIcon = ({ className }) => /*#__PURE__*/ (0, import_jsx_runtime.jsx)("svg", {
	className: [
		"icon",
		"icon--calendar",
		className
	].filter(Boolean).join(" "),
	fill: "none",
	height: 24,
	viewBox: "0 0 24 24",
	width: 24,
	xmlns: "http://www.w3.org/2000/svg",
	children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)("path", {
		className: "fill",
		clipRule: "evenodd",
		d: paths[24],
		fill: "currentColor",
		fillRule: "evenodd"
	})
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/DatePicker/getFormattedLocale.js
var getFormattedLocale = (language = "enUS") => {
	return {
		en: "enUS",
		my: "enUS",
		ua: "uk",
		zh: "zhCN"
	}[language] || language;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/DatePicker/DatePicker.js
var ReactDatePicker = "default" in DatePicker$1 ? DatePicker$1.default : DatePicker$1;
var baseClass = "date-time-picker";
var DatePicker = (props) => {
	const $ = (0, import_compiler_runtime.c)(6);
	const { id, displayFormat: customDisplayFormat, maxDate, maxTime, minDate, minTime, monthsToShow: t0, onChange: onChangeFromProps, overrides, pickerAppearance: t1, placeholder: placeholderText, readOnly, timeFormat: t2, timeIntervals: t3, value } = props;
	const monthsToShow = t0 === void 0 ? 1 : t0;
	const pickerAppearance = t1 === void 0 ? "default" : t1;
	const timeFormat = t2 === void 0 ? "h:mm aa" : t2;
	const timeIntervals = t3 === void 0 ? 30 : t3;
	const { i18n } = useTranslation();
	let dateFormat = customDisplayFormat;
	if (!customDisplayFormat) {
		if (pickerAppearance === "default") dateFormat = "MM/dd/yyyy";
		else if (pickerAppearance === "dayAndTime") dateFormat = "MMM d, yyy h:mm a";
		else if (pickerAppearance === "timeOnly") dateFormat = "h:mm a";
		else if (pickerAppearance === "dayOnly") dateFormat = "MMM dd";
		else if (pickerAppearance === "monthOnly") dateFormat = "MMMM";
	}
	const onChange = (incomingDate) => {
		const newDate = incomingDate;
		if (newDate instanceof Date && [
			"dayOnly",
			"default",
			"monthOnly"
		].includes(pickerAppearance)) {
			const tzOffset = incomingDate.getTimezoneOffset() / 60;
			newDate.setHours(12 - tzOffset, 0);
		}
		if (newDate instanceof Date && !dateFormat.includes("SSS")) newDate.setMilliseconds(0);
		if (typeof onChangeFromProps === "function") onChangeFromProps(newDate);
	};
	const dateTimePickerProps = {
		customInputRef: "ref",
		dateFormat,
		disabled: readOnly,
		maxDate,
		maxTime,
		minDate,
		minTime,
		monthsShown: Math.min(2, monthsToShow),
		nextMonthButtonLabel: (0, import_jsx_runtime.jsx)(ChevronIcon, { direction: "right" }),
		nextYearButtonLabel: "›",
		onChange,
		placeholderText,
		popperPlacement: "bottom-start",
		previousMonthButtonLabel: (0, import_jsx_runtime.jsx)(ChevronIcon, { direction: "left" }),
		previousYearButtonLabel: "‹",
		selected: value && new Date(value),
		shouldCloseOnSelect: false,
		showMonthYearPicker: pickerAppearance === "monthOnly",
		showPopperArrow: false,
		showTimeSelect: pickerAppearance === "dayAndTime" || pickerAppearance === "timeOnly",
		showTimeSelectOnly: pickerAppearance === "timeOnly",
		timeFormat,
		timeIntervals,
		...overrides
	};
	const t4 = `${baseClass}__appearance--${pickerAppearance}`;
	let t5;
	if ($[0] !== t4) {
		t5 = [baseClass, t4].filter(Boolean);
		$[0] = t4;
		$[1] = t5;
	} else t5 = $[1];
	const classes = t5.join(" ");
	let t6;
	let t7;
	if ($[2] !== i18n.dateFNS || $[3] !== i18n.language) {
		t6 = () => {
			if (i18n.dateFNS) try {
				const datepickerLocale = getFormattedLocale(i18n.language);
				registerLocale(datepickerLocale, i18n.dateFNS);
				setDefaultLocale(datepickerLocale);
			} catch (t8) {
				console.warn(`Could not find DatePicker locale for ${i18n.language}`);
			}
		};
		t7 = [i18n.language, i18n.dateFNS];
		$[2] = i18n.dateFNS;
		$[3] = i18n.language;
		$[4] = t6;
		$[5] = t7;
	} else {
		t6 = $[4];
		t7 = $[5];
	}
	import_react.useEffect(t6, t7);
	return (0, import_jsx_runtime.jsx)("div", {
		className: classes,
		id,
		children: (0, import_jsx_runtime.jsxs)("div", {
			className: `${baseClass}__input-wrapper`,
			children: [(0, import_jsx_runtime.jsx)(ReactDatePicker, {
				...dateTimePickerProps,
				dropdownMode: "select",
				showMonthDropdown: pickerAppearance !== "monthOnly",
				showYearDropdown: pickerAppearance !== "monthOnly"
			}), (0, import_jsx_runtime.jsx)(CalendarIcon, {})]
		})
	});
};
//#endregion
export { DatePicker as default };
