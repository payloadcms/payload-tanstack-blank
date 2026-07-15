import { i as buildFormatLongFn, n as buildMatchFn, r as buildLocalizeFn, t as buildMatchPatternFn } from "./buildMatchPatternFn-CY1uM-i4.js";
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/th/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "น้อยกว่า 1 วินาที",
		other: "น้อยกว่า {{count}} วินาที"
	},
	xSeconds: {
		one: "1 วินาที",
		other: "{{count}} วินาที"
	},
	halfAMinute: "ครึ่งนาที",
	lessThanXMinutes: {
		one: "น้อยกว่า 1 นาที",
		other: "น้อยกว่า {{count}} นาที"
	},
	xMinutes: {
		one: "1 นาที",
		other: "{{count}} นาที"
	},
	aboutXHours: {
		one: "ประมาณ 1 ชั่วโมง",
		other: "ประมาณ {{count}} ชั่วโมง"
	},
	xHours: {
		one: "1 ชั่วโมง",
		other: "{{count}} ชั่วโมง"
	},
	xDays: {
		one: "1 วัน",
		other: "{{count}} วัน"
	},
	aboutXWeeks: {
		one: "ประมาณ 1 สัปดาห์",
		other: "ประมาณ {{count}} สัปดาห์"
	},
	xWeeks: {
		one: "1 สัปดาห์",
		other: "{{count}} สัปดาห์"
	},
	aboutXMonths: {
		one: "ประมาณ 1 เดือน",
		other: "ประมาณ {{count}} เดือน"
	},
	xMonths: {
		one: "1 เดือน",
		other: "{{count}} เดือน"
	},
	aboutXYears: {
		one: "ประมาณ 1 ปี",
		other: "ประมาณ {{count}} ปี"
	},
	xYears: {
		one: "1 ปี",
		other: "{{count}} ปี"
	},
	overXYears: {
		one: "มากกว่า 1 ปี",
		other: "มากกว่า {{count}} ปี"
	},
	almostXYears: {
		one: "เกือบ 1 ปี",
		other: "เกือบ {{count}} ปี"
	}
};
var formatDistance = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", String(count));
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) if (token === "halfAMinute") return "ใน" + result;
	else return "ใน " + result;
	else return result + "ที่ผ่านมา";
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "วันEEEEที่ do MMMM y",
			long: "do MMMM y",
			medium: "d MMM y",
			short: "dd/MM/yyyy"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "H:mm:ss น. zzzz",
			long: "H:mm:ss น. z",
			medium: "H:mm:ss น.",
			short: "H:mm น."
		},
		defaultWidth: "medium"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} 'เวลา' {{time}}",
			long: "{{date}} 'เวลา' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/th/_lib/formatRelative.js
var formatRelativeLocale = {
	lastWeek: "eeee'ที่แล้วเวลา' p",
	yesterday: "'เมื่อวานนี้เวลา' p",
	today: "'วันนี้เวลา' p",
	tomorrow: "'พรุ่งนี้เวลา' p",
	nextWeek: "eeee 'เวลา' p",
	other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/th/_lib/localize.js
var eraValues = {
	narrow: ["B", "คศ"],
	abbreviated: ["BC", "ค.ศ."],
	wide: ["ปีก่อนคริสตกาล", "คริสต์ศักราช"]
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
		"ไตรมาสแรก",
		"ไตรมาสที่สอง",
		"ไตรมาสที่สาม",
		"ไตรมาสที่สี่"
	]
};
var dayValues = {
	narrow: [
		"อา.",
		"จ.",
		"อ.",
		"พ.",
		"พฤ.",
		"ศ.",
		"ส."
	],
	short: [
		"อา.",
		"จ.",
		"อ.",
		"พ.",
		"พฤ.",
		"ศ.",
		"ส."
	],
	abbreviated: [
		"อา.",
		"จ.",
		"อ.",
		"พ.",
		"พฤ.",
		"ศ.",
		"ส."
	],
	wide: [
		"อาทิตย์",
		"จันทร์",
		"อังคาร",
		"พุธ",
		"พฤหัสบดี",
		"ศุกร์",
		"เสาร์"
	]
};
var monthValues = {
	narrow: [
		"ม.ค.",
		"ก.พ.",
		"มี.ค.",
		"เม.ย.",
		"พ.ค.",
		"มิ.ย.",
		"ก.ค.",
		"ส.ค.",
		"ก.ย.",
		"ต.ค.",
		"พ.ย.",
		"ธ.ค."
	],
	abbreviated: [
		"ม.ค.",
		"ก.พ.",
		"มี.ค.",
		"เม.ย.",
		"พ.ค.",
		"มิ.ย.",
		"ก.ค.",
		"ส.ค.",
		"ก.ย.",
		"ต.ค.",
		"พ.ย.",
		"ธ.ค."
	],
	wide: [
		"มกราคม",
		"กุมภาพันธ์",
		"มีนาคม",
		"เมษายน",
		"พฤษภาคม",
		"มิถุนายน",
		"กรกฎาคม",
		"สิงหาคม",
		"กันยายน",
		"ตุลาคม",
		"พฤศจิกายน",
		"ธันวาคม"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "ก่อนเที่ยง",
		pm: "หลังเที่ยง",
		midnight: "เที่ยงคืน",
		noon: "เที่ยง",
		morning: "เช้า",
		afternoon: "บ่าย",
		evening: "เย็น",
		night: "กลางคืน"
	},
	abbreviated: {
		am: "ก่อนเที่ยง",
		pm: "หลังเที่ยง",
		midnight: "เที่ยงคืน",
		noon: "เที่ยง",
		morning: "เช้า",
		afternoon: "บ่าย",
		evening: "เย็น",
		night: "กลางคืน"
	},
	wide: {
		am: "ก่อนเที่ยง",
		pm: "หลังเที่ยง",
		midnight: "เที่ยงคืน",
		noon: "เที่ยง",
		morning: "เช้า",
		afternoon: "บ่าย",
		evening: "เย็น",
		night: "กลางคืน"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "ก่อนเที่ยง",
		pm: "หลังเที่ยง",
		midnight: "เที่ยงคืน",
		noon: "เที่ยง",
		morning: "ตอนเช้า",
		afternoon: "ตอนกลางวัน",
		evening: "ตอนเย็น",
		night: "ตอนกลางคืน"
	},
	abbreviated: {
		am: "ก่อนเที่ยง",
		pm: "หลังเที่ยง",
		midnight: "เที่ยงคืน",
		noon: "เที่ยง",
		morning: "ตอนเช้า",
		afternoon: "ตอนกลางวัน",
		evening: "ตอนเย็น",
		night: "ตอนกลางคืน"
	},
	wide: {
		am: "ก่อนเที่ยง",
		pm: "หลังเที่ยง",
		midnight: "เที่ยงคืน",
		noon: "เที่ยง",
		morning: "ตอนเช้า",
		afternoon: "ตอนกลางวัน",
		evening: "ตอนเย็น",
		night: "ตอนกลางคืน"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	return String(dirtyNumber);
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/th.js
/**
* @category Locales
* @summary Thai locale.
* @language Thai
* @iso-639-2 tha
* @author Athiwat Hirunworawongkun [@athivvat](https://github.com/athivvat)
* @author [@hawkup](https://github.com/hawkup)
* @author  Jirawat I. [@nodtem66](https://github.com/nodtem66)
*/
var th = {
	code: "th",
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
			matchPattern: /^\d+/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^([bB]|[aA]|คศ)/i,
				abbreviated: /^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i,
				wide: /^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^[bB]/i, /^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^ไตรมาส(ที่)? ?[1234]/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/(1|แรก|หนึ่ง)/i,
				/(2|สอง)/i,
				/(3|สาม)/i,
				/(4|สี่)/i
			] },
			defaultParseWidth: "any",
			valueCallback: (index) => index + 1
		}),
		month: buildMatchFn({
			matchPatterns: {
				narrow: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i,
				abbreviated: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i,
				wide: /^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				wide: [
					/^มก/i,
					/^กุม/i,
					/^มี/i,
					/^เม/i,
					/^พฤษ/i,
					/^มิ/i,
					/^กรก/i,
					/^ส/i,
					/^กัน/i,
					/^ต/i,
					/^พฤศ/i,
					/^ธ/i
				],
				any: [
					/^ม\.?ค\.?/i,
					/^ก\.?พ\.?/i,
					/^มี\.?ค\.?/i,
					/^เม\.?ย\.?/i,
					/^พ\.?ค\.?/i,
					/^มิ\.?ย\.?/i,
					/^ก\.?ค\.?/i,
					/^ส\.?ค\.?/i,
					/^ก\.?ย\.?/i,
					/^ต\.?ค\.?/i,
					/^พ\.?ย\.?/i,
					/^ธ\.?ค\.?/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
				short: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
				abbreviated: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
				wide: /^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				wide: [
					/^อา/i,
					/^จั/i,
					/^อั/i,
					/^พุธ/i,
					/^พฤ/i,
					/^ศ/i,
					/^เส/i
				],
				any: [
					/^อา/i,
					/^จ/i,
					/^อ/i,
					/^พ(?!ฤ)/i,
					/^พฤ/i,
					/^ศ/i,
					/^ส/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: { any: /^(ก่อนเที่ยง|หลังเที่ยง|เที่ยงคืน|เที่ยง|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i },
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^ก่อนเที่ยง/i,
				pm: /^หลังเที่ยง/i,
				midnight: /^เที่ยงคืน/i,
				noon: /^เที่ยง/i,
				morning: /เช้า/i,
				afternoon: /บ่าย/i,
				evening: /เย็น/i,
				night: /กลางคืน/i
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
export { th as default, th };
