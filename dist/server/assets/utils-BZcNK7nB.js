//#region node_modules/.pnpm/@payloadcms+translations@4.0.0-internal.fa183d3/node_modules/@payloadcms/translations/dist/utilities/languages.js
var rtlLanguages = [
	"ar",
	"fa",
	"he"
];
var acceptedLanguages = [
	"ar",
	"az",
	"bg",
	"bn-BD",
	"bn-IN",
	"ca",
	"cs",
	"bn-BD",
	"bn-IN",
	"da",
	"de",
	"en",
	"es",
	"et",
	"fa",
	"fr",
	"he",
	"hr",
	"hu",
	"hy",
	"id",
	"is",
	"it",
	"ja",
	"ko",
	"lt",
	"lv",
	"my",
	"nb",
	"nl",
	"pl",
	"pt",
	"ro",
	"rs",
	"rs-latin",
	"ru",
	"sk",
	"sl",
	"sv",
	"ta",
	"th",
	"tr",
	"uk",
	"vi",
	"zh",
	"zh-TW"
];
function parseAcceptLanguage(acceptLanguageHeader) {
	return acceptLanguageHeader.split(",").map((lang) => {
		const [language, quality] = lang.trim().split(";q=");
		return {
			language,
			quality: quality ? parseFloat(quality) : 1
		};
	}).sort((a, b) => b.quality - a.quality);
}
function extractHeaderLanguage(acceptLanguageHeader) {
	const parsedHeader = parseAcceptLanguage(acceptLanguageHeader);
	let matchedLanguage;
	for (const { language } of parsedHeader) {
		if (matchedLanguage) break;
		if (acceptedLanguages.includes(language)) {
			matchedLanguage = language;
			break;
		}
		const baseLanguage = language.split("-")[0];
		if (acceptedLanguages.includes(baseLanguage)) {
			matchedLanguage = baseLanguage;
			break;
		}
	}
	return matchedLanguage;
}
//#endregion
//#region node_modules/.pnpm/qs-esm@8.0.1/node_modules/qs-esm/lib/formats.js
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
	RFC1738: "RFC1738",
	RFC3986: "RFC3986"
};
var formatters = {
	RFC1738: function(value) {
		return replace.call(value, percentTwenties, "+");
	},
	RFC3986: function(value) {
		return String(value);
	}
};
var RFC1738 = Format.RFC1738;
Format.RFC3986;
var formats_default = Format.RFC3986;
//#endregion
//#region node_modules/.pnpm/qs-esm@8.0.1/node_modules/qs-esm/lib/utils.js
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var overflowChannel = /* @__PURE__ */ new WeakMap();
var markOverflow = function markOverflow(obj, maxIndex) {
	overflowChannel.set(obj, maxIndex);
	return obj;
};
function isOverflow(obj) {
	return overflowChannel.has(obj);
}
var getMaxIndex = function getMaxIndex(obj) {
	return overflowChannel.get(obj);
};
var setMaxIndex = function setMaxIndex(obj, maxIndex) {
	overflowChannel.set(obj, maxIndex);
};
var hexTable = (function() {
	const array = [];
	for (let i = 0; i < 256; ++i) array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
	return array;
})();
var compactQueue = function compactQueue(queue) {
	while (queue.length > 1) {
		const item = queue.pop();
		const obj = item.obj[item.prop];
		if (isArray(obj)) {
			const compacted = [];
			for (let j = 0; j < obj.length; ++j) if (typeof obj[j] !== "undefined") compacted.push(obj[j]);
			item.obj[item.prop] = compacted;
		}
	}
};
var arrayToObject = function arrayToObject(source, options) {
	const obj = options && options.plainObjects ? Object.create(null) : {};
	for (let i = 0; i < source.length; ++i) if (typeof source[i] !== "undefined") obj[i] = source[i];
	return obj;
};
var merge = function merge(target, source, options) {
	if (!source) return target;
	if (typeof source !== "object") {
		if (isArray(target)) target.push(source);
		else if (target && typeof target === "object") {
			if (isOverflow(target)) {
				var newIndex = getMaxIndex(target) + 1;
				target[newIndex] = source;
				setMaxIndex(target, newIndex);
			} else if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) target[source] = true;
		} else return [target, source];
		return target;
	}
	if (!target || typeof target !== "object") {
		if (isOverflow(source)) {
			var sourceKeys = Object.keys(source);
			var result = options && options.plainObjects ? {
				__proto__: null,
				0: target
			} : { 0: target };
			for (var m = 0; m < sourceKeys.length; m++) {
				var oldKey = parseInt(sourceKeys[m], 10);
				result[oldKey + 1] = source[sourceKeys[m]];
			}
			return markOverflow(result, getMaxIndex(source) + 1);
		}
		return [target].concat(source);
	}
	let mergeTarget = target;
	if (isArray(target) && !isArray(source)) mergeTarget = arrayToObject(target, options);
	if (isArray(target) && isArray(source)) {
		source.forEach(function(item, i) {
			if (has.call(target, i)) {
				const targetItem = target[i];
				if (targetItem && typeof targetItem === "object" && item && typeof item === "object") target[i] = merge(targetItem, item, options);
				else target.push(item);
			} else target[i] = item;
		});
		return target;
	}
	return Object.keys(source).reduce(function(acc, key) {
		const value = source[key];
		if (has.call(acc, key)) acc[key] = merge(acc[key], value, options);
		else acc[key] = value;
		return acc;
	}, mergeTarget);
};
var decode = function(str) {
	const strWithoutPlus = str.replace(/\+/g, " ");
	try {
		return decodeURIComponent(strWithoutPlus);
	} catch (e) {
		return strWithoutPlus;
	}
};
var limit = 1024;
var encode = function encode(str, _defaultEncoder, _kind, format) {
	if (str.length === 0) return str;
	let string = str;
	if (typeof str === "symbol") string = Symbol.prototype.toString.call(str);
	else if (typeof str !== "string") string = String(str);
	let out = "";
	for (let j = 0; j < string.length; j += limit) {
		const segment = string.length >= limit ? string.slice(j, j + limit) : string;
		const arr = [];
		for (let i = 0; i < segment.length; ++i) {
			let c = segment.charCodeAt(i);
			if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === RFC1738 && (c === 40 || c === 41)) {
				arr[arr.length] = segment.charAt(i);
				continue;
			}
			if (c < 128) {
				arr[arr.length] = hexTable[c];
				continue;
			}
			if (c < 2048) {
				arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
				continue;
			}
			if (c < 55296 || c >= 57344) {
				arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
				continue;
			}
			i += 1;
			c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
			arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
		}
		out += arr.join("");
	}
	return out;
};
var compact = function compact(value) {
	const queue = [{
		obj: { o: value },
		prop: "o"
	}];
	const refs = [];
	for (let i = 0; i < queue.length; ++i) {
		const item = queue[i];
		const obj = item.obj[item.prop];
		const keys = Object.keys(obj);
		for (let j = 0; j < keys.length; ++j) {
			const key = keys[j];
			const val = obj[key];
			if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
				queue.push({
					obj,
					prop: key
				});
				refs.push(val);
			}
		}
	}
	compactQueue(queue);
	return value;
};
var isRegExp = function isRegExp(obj) {
	return Object.prototype.toString.call(obj) === "[object RegExp]";
};
var isBuffer = function isBuffer(obj) {
	if (!obj || typeof obj !== "object") return false;
	return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b, arrayLimit, plainObjects) {
	if (isOverflow(a)) {
		var newIndex = getMaxIndex(a) + 1;
		a[newIndex] = b;
		setMaxIndex(a, newIndex);
		return a;
	}
	var result = [].concat(a, b);
	if (result.length > arrayLimit) return markOverflow(arrayToObject(result, { plainObjects }), result.length - 1);
	return result;
};
var maybeMap = function maybeMap(val, fn) {
	if (isArray(val)) {
		const mapped = [];
		for (let i = 0; i < val.length; i += 1) mapped.push(fn(val[i]));
		return mapped;
	}
	return fn(val);
};
//#endregion
export { isBuffer as a, maybeMap as c, formatters as d, extractHeaderLanguage as f, encode as i, merge as l, compact as n, isOverflow as o, rtlLanguages as p, decode as r, isRegExp as s, combine as t, formats_default as u };
