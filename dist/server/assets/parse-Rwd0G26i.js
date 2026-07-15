import { c as maybeMap, l as merge, n as compact, o as isOverflow, r as decode, s as isRegExp, t as combine } from "./utils-BZcNK7nB.js";
//#region node_modules/.pnpm/qs-esm@8.0.1/node_modules/qs-esm/lib/parse.js
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
	allowDots: false,
	allowEmptyArrays: false,
	allowPrototypes: false,
	allowSparse: false,
	arrayLimit: 20,
	comma: false,
	decodeDotInKeys: false,
	decoder: decode,
	delimiter: "&",
	depth: 5,
	duplicates: "combine",
	ignoreQueryPrefix: false,
	parameterLimit: 1e3,
	parseArrays: true,
	plainObjects: false,
	strictNullHandling: false
};
var parseArrayValue = function(val, options) {
	if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) return val.split(",");
	return val;
};
var parseValues = function parseQueryStringValues(str, options) {
	const obj = { __proto__: null };
	const cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
	const limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
	const parts = cleanStr.split(options.delimiter, limit);
	let i;
	for (i = 0; i < parts.length; ++i) {
		const part = parts[i];
		const bracketEqualsPos = part.indexOf("]=");
		const pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
		let key, val;
		if (pos === -1) {
			key = options.decoder(part, defaults.decoder, "key");
			val = options.strictNullHandling ? null : "";
		} else {
			key = options.decoder(part.slice(0, pos), defaults.decoder, "key");
			val = maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
				return options.decoder(encodedVal, defaults.decoder, "value");
			});
		}
		if (part.indexOf("[]=") > -1) val = isArray(val) ? [val] : val;
		if (options.comma && isArray(val) && val.length > options.arrayLimit) val = combine([], val, options.arrayLimit, options.plainObjects);
		const existing = has.call(obj, key);
		if (existing && options.duplicates === "combine") obj[key] = combine(obj[key], val, options.arrayLimit, options.plainObjects);
		else if (!existing || options.duplicates === "last") obj[key] = val;
	}
	return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
	let leaf = valuesParsed ? val : parseArrayValue(val, options);
	for (let i = chain.length - 1; i >= 0; --i) {
		let obj;
		const root = chain[i];
		if (root === "[]" && options.parseArrays) if (isOverflow(leaf)) obj = leaf;
		else obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : combine([], leaf, options.arrayLimit, options.plainObjects);
		else {
			obj = options.plainObjects ? Object.create(null) : {};
			const cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
			const decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
			const index = parseInt(decodedRoot, 10);
			if (!options.parseArrays && decodedRoot === "") obj = { 0: leaf };
			else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
				obj = [];
				obj[index] = leaf;
			} else if (decodedRoot !== "__proto__") obj[decodedRoot] = leaf;
		}
		leaf = obj;
	}
	return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
	if (!givenKey) return;
	const key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
	const brackets = /(\[[^[\]]*])/;
	const child = /(\[[^[\]]*])/g;
	let segment = options.depth > 0 && brackets.exec(key);
	const parent = segment ? key.slice(0, segment.index) : key;
	const keys = [];
	if (parent) {
		if (!options.plainObjects && has.call(Object.prototype, parent)) {
			if (!options.allowPrototypes) return;
		}
		keys.push(parent);
	}
	let i = 0;
	while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
		i += 1;
		if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
			if (!options.allowPrototypes) return;
		}
		keys.push(segment[1]);
	}
	if (segment) keys.push("[" + key.slice(segment.index) + "]");
	return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
	if (!opts) return defaults;
	if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
	if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
	if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") throw new TypeError("Decoder has to be a function.");
	const duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
	if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") throw new TypeError("The duplicates option must be either combine, first, or last");
	return {
		allowDots: typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots,
		allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
		allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
		allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
		arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
		comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
		decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
		decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
		delimiter: typeof opts.delimiter === "string" || isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
		depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
		duplicates,
		ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
		parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
		parseArrays: opts.parseArrays !== false,
		plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
		strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
	};
};
function parse(str, opts) {
	const options = normalizeParseOptions(opts);
	if (str === "" || str === null || typeof str === "undefined") return options.plainObjects ? Object.create(null) : {};
	const tempObj = typeof str === "string" ? parseValues(str, options) : str;
	let obj = options.plainObjects ? Object.create(null) : {};
	const keys = Object.keys(tempObj);
	for (let i = 0; i < keys.length; ++i) {
		const key = keys[i];
		const newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
		obj = merge(obj, newObj, options);
	}
	if (options.allowSparse === true) return obj;
	return compact(obj);
}
//#endregion
export { parse as t };
