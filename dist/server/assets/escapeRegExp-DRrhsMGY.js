import { o as __toESM, t as __commonJSMin } from "./rolldown-runtime-CE-6LUnI.js";
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/auth/getLoginOptions.js
var getLoginOptions = (loginWithUsername) => {
	return {
		canLoginWithEmail: !loginWithUsername || loginWithUsername.allowEmailLogin,
		canLoginWithUsername: Boolean(loginWithUsername)
	};
};
//#endregion
//#region node_modules/.pnpm/uuid@14.0.0/node_modules/uuid/dist-node/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) byteToHex.push((i + 256).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
	return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
//#endregion
//#region node_modules/.pnpm/uuid@14.0.0/node_modules/uuid/dist-node/rng.js
var rnds8 = /* @__PURE__ */ new Uint8Array(16);
function rng() {
	return crypto.getRandomValues(rnds8);
}
//#endregion
//#region node_modules/.pnpm/uuid@14.0.0/node_modules/uuid/dist-node/v4.js
function v4(options, buf, offset) {
	if (!buf && !options && crypto.randomUUID) return crypto.randomUUID();
	return _v4(options, buf, offset);
}
function _v4(options, buf, offset) {
	options = options || {};
	const rnds = options.random ?? options.rng?.() ?? rng();
	if (rnds.length < 16) throw new Error("Random bytes length must be >= 16");
	rnds[6] = rnds[6] & 15 | 64;
	rnds[8] = rnds[8] & 63 | 128;
	if (buf) {
		offset = offset || 0;
		if (offset < 0 || offset + 16 > buf.length) throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
		for (let i = 0; i < 16; ++i) buf[offset + i] = rnds[i];
		return buf;
	}
	return unsafeStringify(rnds);
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/fields/config/types.js
function valueIsValueWithRelation(value) {
	return value !== null && typeof value === "object" && "relationTo" in value && "value" in value;
}
function fieldHasSubFields(field) {
	return field.type === "group" || field.type === "array" || field.type === "row" || field.type === "collapsible";
}
function fieldIsArrayType(field) {
	return field.type === "array";
}
function fieldIsBlockType(field) {
	return field.type === "blocks";
}
function optionIsObject(option) {
	return typeof option === "object";
}
function optionsAreObjects(options) {
	return Array.isArray(options) && typeof options?.[0] === "object";
}
function fieldSupportsMany(field) {
	return field.type === "select" || field.type === "relationship" || field.type === "upload";
}
function fieldHasMaxDepth(field) {
	return (field.type === "upload" || field.type === "relationship" || field.type === "join") && typeof field.maxDepth === "number";
}
function fieldIsPresentationalOnly(field) {
	return field.type === "ui";
}
function fieldIsSidebar(field) {
	return "admin" in field && "position" in field.admin && field.admin.position === "sidebar";
}
function fieldIsID(field) {
	return "name" in field && field.name === "id";
}
function fieldIsHiddenOrDisabled(field) {
	if ("hidden" in field && field.hidden) return true;
	if (!("admin" in field) || !field.admin || !("disabled" in field.admin)) return false;
	const disabled = field.admin.disabled;
	if (disabled === true) return true;
	return typeof disabled === "object" && disabled !== null && disabled.field === true;
}
function fieldAffectsData(field) {
	return "name" in field && !fieldIsPresentationalOnly(field);
}
function tabHasName(tab) {
	return "name" in tab;
}
function groupHasName(group) {
	return "name" in group;
}
/**
* Check if a field has localized: true set. This does not check if a field *should*
* be localized. To check if a field should be localized, use `fieldShouldBeLocalized`.
*
* @deprecated this will be removed or modified in v4.0, as `fieldIsLocalized` can easily lead to bugs due to
* parent field localization not being taken into account.
*/ function fieldIsLocalized(field) {
	return "localized" in field && field.localized;
}
/**
* Similar to `fieldIsLocalized`, but returns `false` if any parent field is localized.
*/ function fieldShouldBeLocalized({ field, parentIsLocalized }) {
	return "localized" in field && field.localized && !parentIsLocalized;
}
function fieldIsVirtual(field) {
	return "virtual" in field && Boolean(field.virtual);
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+translations@4.0.0-internal.fa183d3/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js
var getTranslation = (label, i18n) => {
	if (typeof label === "object" && !Object.prototype.hasOwnProperty.call(label, "$$typeof")) {
		if (label[i18n.language]) return label[i18n.language];
		let fallbacks = [];
		if (typeof i18n.fallbackLanguage === "string") fallbacks = [i18n.fallbackLanguage];
		else if (Array.isArray(i18n.fallbackLanguage)) fallbacks = i18n.fallbackLanguage;
		const fallbackLang = fallbacks.find((language) => label[language]);
		return fallbackLang && label[fallbackLang] ? label[fallbackLang] : label[Object.keys(label)[0]];
	}
	if (typeof label === "function") return label({
		i18n,
		t: i18n.t
	});
	return label;
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/auth/defaultAccess.js
var defaultAccess = ({ req: { payload, user } }) => Boolean(user) && user.collection === payload.config.admin.user;
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/deepCopyObject.js
function copyBuffer(cur) {
	if (cur instanceof Buffer) return Buffer.from(cur);
	return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length);
}
var constructorHandlers = /* @__PURE__ */ new Map();
constructorHandlers.set(Date, (o) => new Date(o));
constructorHandlers.set(Map, (o, fn) => new Map(cloneArray(Array.from(o), fn)));
constructorHandlers.set(Set, (o, fn) => new Set(cloneArray(Array.from(o), fn)));
constructorHandlers.set(RegExp, (regex) => new RegExp(regex.source, regex.flags));
var handler = null;
function cloneArray(a, fn) {
	const keys = Object.keys(a);
	const a2 = new Array(keys.length);
	for (let i = 0; i < keys.length; i++) {
		const k = keys[i];
		const cur = a[k];
		if (typeof cur !== "object" || cur === null) a2[k] = cur;
		else if (cur instanceof RegExp) a2[k] = new RegExp(cur.source, cur.flags);
		else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) a2[k] = handler(cur, fn);
		else if (ArrayBuffer.isView(cur)) a2[k] = copyBuffer(cur);
		else a2[k] = fn(cur);
	}
	return a2;
}
/**
* A deepCopyObject implementation which only works for JSON objects and arrays, and is faster than
* JSON.parse(JSON.stringify(obj))
*
* @param value The JSON value to be cloned. There are two invariants. 1) It must not contain circles
*              as JSON does not allow it. This function will cause infinite loop for such values by
*              design. 2) It must contain JSON values only. Other values like `Date`, `Regexp`, `Map`,
*              `Set`, `Buffer`, ... are not allowed.
* @returns The cloned JSON value.
*/ function deepCopyObjectSimple(value, filterUndefined = false) {
	if (typeof value !== "object" || value === null) return value;
	else if (Array.isArray(value)) return value.map((e) => typeof e !== "object" || e === null ? e : deepCopyObjectSimple(e, filterUndefined));
	else {
		if (value instanceof Date) return new Date(value);
		if ("_bsontype" in value && typeof value.toHexString === "function") return value.toHexString();
		const ret = {};
		for (const k in value) {
			const v = value[k];
			if (filterUndefined && v === void 0) continue;
			ret[k] = typeof v !== "object" || v === null ? v : deepCopyObjectSimple(v, filterUndefined);
		}
		return ret;
	}
}
function deepCopyObjectSimpleWithoutReactComponents(value, opts = {}) {
	if (typeof value === "object" && value !== null && "$$typeof" in value && typeof value.$$typeof === "symbol") return;
	else if (typeof value !== "object" || value === null) return value;
	else if (Array.isArray(value)) return value.map((e) => typeof e !== "object" || e === null ? e : deepCopyObjectSimpleWithoutReactComponents(e, opts));
	else {
		if (value instanceof File) {
			if (opts.excludeFiles) return;
			return value;
		}
		if (value instanceof Date) return new Date(value);
		if ("_bsontype" in value && typeof value.toHexString === "function") return value.toHexString();
		const ret = {};
		for (const k in value) {
			const v = value[k];
			ret[k] = typeof v !== "object" || v === null ? v : deepCopyObjectSimpleWithoutReactComponents(v, opts);
		}
		return ret;
	}
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/fields/getFieldPaths.js
function getFieldPaths({ field, index, parentIndexPath, parentPath = "", parentSchemaPath }) {
	const parentPathSegments = parentPath.split(".");
	const parentPathIsUnnamed = parentPathSegments?.[parentPathSegments.length - 1]?.startsWith("_index-");
	const parentWithoutIndex = parentPathIsUnnamed ? parentPathSegments.slice(0, -1).join(".") : parentPath;
	const parentPathToUse = parentPathIsUnnamed ? parentWithoutIndex : parentPath;
	if ("name" in field) return {
		indexPath: "",
		path: `${parentPathToUse ? parentPathToUse + "." : ""}${field.name}`,
		schemaPath: `${parentSchemaPath ? parentSchemaPath + "." : ""}${field.name}`
	};
	const indexSuffix = `_index-${`${parentIndexPath ? parentIndexPath + "-" : ""}${index}`}`;
	const parentSchemaPathSegments = parentSchemaPath.split(".");
	const parentSchemaPathIsUnnamed = parentSchemaPathSegments?.[parentSchemaPathSegments.length - 1]?.startsWith("_index-");
	return {
		indexPath: `${parentIndexPath ? parentIndexPath + "-" : ""}${index}`,
		path: `${parentPathToUse ? parentPathToUse + "." : ""}${indexSuffix}`,
		schemaPath: parentSchemaPathIsUnnamed ? `${parentSchemaPath}-${index}` : `${parentSchemaPath ? parentSchemaPath + "." : ""}${indexSuffix}`
	};
}
//#endregion
//#region node_modules/.pnpm/bson-objectid@2.0.4/node_modules/bson-objectid/objectid.js
var require_objectid = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var MACHINE_ID = Math.floor(Math.random() * 16777215);
	var index = ObjectID.index = parseInt(Math.random() * 16777215, 10);
	var pid = (typeof process === "undefined" || typeof process.pid !== "number" ? Math.floor(Math.random() * 1e5) : process.pid) % 65535;
	var BufferCtr = (() => {
		try {
			return _Buffer;
		} catch (_) {
			try {
				return Buffer;
			} catch (_) {
				return null;
			}
		}
	})();
	/**
	* Determine if an object is Buffer
	*
	* Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	* License:  MIT
	*
	*/
	var isBuffer = function(obj) {
		return !!(obj != null && obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj));
	};
	var hexTable = [];
	for (var i = 0; i < 256; i++) hexTable[i] = (i <= 15 ? "0" : "") + i.toString(16);
	var checkForHexRegExp = /* @__PURE__ */ new RegExp("^[0-9a-fA-F]{24}$");
	var decodeLookup = [];
	i = 0;
	while (i < 10) decodeLookup[48 + i] = i++;
	while (i < 16) decodeLookup[55 + i] = decodeLookup[87 + i] = i++;
	/**
	* Create a new immutable ObjectID instance
	*
	* @class Represents the BSON ObjectID type
	* @param {String|Number} id Can be a 24 byte hex string, 12 byte binary string or a Number.
	* @return {Object} instance of ObjectID.
	*/
	function ObjectID(id) {
		if (!(this instanceof ObjectID)) return new ObjectID(id);
		if (id && (id instanceof ObjectID || id._bsontype === "ObjectID")) return id;
		this._bsontype = "ObjectID";
		if (id == null || typeof id === "number") {
			this.id = this.generate(id);
			return;
		}
		var valid = ObjectID.isValid(id);
		if (!valid && id != null) throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
		else if (valid && typeof id === "string" && id.length === 24) return ObjectID.createFromHexString(id);
		else if (id != null && id.length === 12) this.id = id;
		else if (id != null && typeof id.toHexString === "function") return id;
		else throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
	}
	module.exports = ObjectID;
	ObjectID.default = ObjectID;
	/**
	* Creates an ObjectID from a second based number, with the rest of the ObjectID zeroed out. Used for comparisons or sorting the ObjectID.
	*
	* @param {Number} time an integer number representing a number of seconds.
	* @return {ObjectID} return the created ObjectID
	* @api public
	*/
	ObjectID.createFromTime = function(time) {
		time = parseInt(time, 10) % 4294967295;
		return new ObjectID(hex(8, time) + "0000000000000000");
	};
	/**
	* Creates an ObjectID from a hex string representation of an ObjectID.
	*
	* @param {String} hexString create a ObjectID from a passed in 24 byte hexstring.
	* @return {ObjectID} return the created ObjectID
	* @api public
	*/
	ObjectID.createFromHexString = function(hexString) {
		if (typeof hexString === "undefined" || hexString != null && hexString.length !== 24) throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
		var data = "";
		var i = 0;
		while (i < 24) data += String.fromCharCode(decodeLookup[hexString.charCodeAt(i++)] << 4 | decodeLookup[hexString.charCodeAt(i++)]);
		return new ObjectID(data);
	};
	/**
	* Checks if a value is a valid bson ObjectId
	*
	* @param {String} objectid Can be a 24 byte hex string or an instance of ObjectID.
	* @return {Boolean} return true if the value is a valid bson ObjectID, return false otherwise.
	* @api public
	*
	* THE NATIVE DOCUMENTATION ISN'T CLEAR ON THIS GUY!
	* http://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html#objectid-isvalid
	*/
	ObjectID.isValid = function(id) {
		if (id == null) return false;
		if (typeof id === "number") return true;
		if (typeof id === "string") return id.length === 12 || id.length === 24 && checkForHexRegExp.test(id);
		if (id instanceof ObjectID) return true;
		if (isBuffer(id)) return ObjectID.isValid(id.toString("hex"));
		if (typeof id.toHexString === "function") {
			if (BufferCtr && (id.id instanceof BufferCtr || typeof id.id === "string")) return id.id.length === 12 || id.id.length === 24 && checkForHexRegExp.test(id.id);
		}
		return false;
	};
	ObjectID.prototype = {
		constructor: ObjectID,
		/**
		* Return the ObjectID id as a 24 byte hex string representation
		*
		* @return {String} return the 24 byte hex string representation.
		* @api public
		*/
		toHexString: function() {
			if (!this.id || !this.id.length) throw new Error("invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is [" + JSON.stringify(this.id) + "]");
			if (this.id.length === 24) return this.id;
			if (isBuffer(this.id)) return this.id.toString("hex");
			var hexString = "";
			for (var i = 0; i < this.id.length; i++) hexString += hexTable[this.id.charCodeAt(i)];
			return hexString;
		},
		/**
		* Compares the equality of this ObjectID with `otherID`.
		*
		* @param {Object} otherId ObjectID instance to compare against.
		* @return {Boolean} the result of comparing two ObjectID's
		* @api public
		*/
		equals: function(otherId) {
			if (otherId instanceof ObjectID) return this.toString() === otherId.toString();
			else if (typeof otherId === "string" && ObjectID.isValid(otherId) && otherId.length === 12 && isBuffer(this.id)) return otherId === this.id.toString("binary");
			else if (typeof otherId === "string" && ObjectID.isValid(otherId) && otherId.length === 24) return otherId.toLowerCase() === this.toHexString();
			else if (typeof otherId === "string" && ObjectID.isValid(otherId) && otherId.length === 12) return otherId === this.id;
			else if (otherId != null && (otherId instanceof ObjectID || otherId.toHexString)) return otherId.toHexString() === this.toHexString();
			else return false;
		},
		/**
		* Returns the generation date (accurate up to the second) that this ID was generated.
		*
		* @return {Date} the generation date
		* @api public
		*/
		getTimestamp: function() {
			var timestamp = /* @__PURE__ */ new Date();
			var time;
			if (isBuffer(this.id)) time = this.id[3] | this.id[2] << 8 | this.id[1] << 16 | this.id[0] << 24;
			else time = this.id.charCodeAt(3) | this.id.charCodeAt(2) << 8 | this.id.charCodeAt(1) << 16 | this.id.charCodeAt(0) << 24;
			timestamp.setTime(Math.floor(time) * 1e3);
			return timestamp;
		},
		/**
		* Generate a 12 byte id buffer used in ObjectID's
		*
		* @method
		* @param {number} [time] optional parameter allowing to pass in a second based timestamp.
		* @return {string} return the 12 byte id buffer string.
		*/
		generate: function(time) {
			if ("number" !== typeof time) time = ~~(Date.now() / 1e3);
			time = parseInt(time, 10) % 4294967295;
			var inc = next();
			return String.fromCharCode(time >> 24 & 255, time >> 16 & 255, time >> 8 & 255, time & 255, MACHINE_ID >> 16 & 255, MACHINE_ID >> 8 & 255, MACHINE_ID & 255, pid >> 8 & 255, pid & 255, inc >> 16 & 255, inc >> 8 & 255, inc & 255);
		}
	};
	function next() {
		return index = (index + 1) % 16777215;
	}
	function hex(length, n) {
		n = n.toString(16);
		return n.length === length ? n : "00000000".substring(n.length, length) + n;
	}
	var inspect = Symbol && Symbol.for && Symbol.for("nodejs.util.inspect.custom") || "inspect";
	/**
	* Converts to a string representation of this Id.
	*
	* @return {String} return the 24 byte hex string representation.
	* @api private
	*/
	ObjectID.prototype[inspect] = function() {
		return "ObjectID(" + this + ")";
	};
	ObjectID.prototype.toJSON = ObjectID.prototype.toHexString;
	ObjectID.prototype.toString = ObjectID.prototype.toHexString;
}));
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/isNumber.js
var import_objectid = /* @__PURE__ */ __toESM(require_objectid(), 1);
function isNumber(value) {
	if (value === null || value === void 0 || typeof value === "string" && value.trim() === "") return false;
	return !Number.isNaN(Number(value));
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/isValidID.js
var ObjectId$1 = "default" in import_objectid.default ? import_objectid.default.default : import_objectid.default;
var isValidID = (value, type) => {
	if (type === "text" && value) {
		if (["object", "string"].includes(typeof value)) {
			const isObjectID = ObjectId$1.isValid(value);
			return typeof value === "string" || isObjectID;
		}
		return false;
	}
	if (type === "number" && typeof value === "number" && !Number.isNaN(value)) return true;
	if (type === "ObjectID") return ObjectId$1.isValid(String(value));
	return false;
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/fields/validations.js
var ObjectId = "default" in import_objectid.default ? import_objectid.default.default : import_objectid.default;
var text = (value, { hasMany, maxLength: fieldMaxLength, maxRows, minLength, minRows, req: { payload: { config }, t }, required }) => {
	let maxLength;
	if (!required) {
		if (value === void 0 || value === null) return true;
	}
	if (hasMany === true) {
		const lengthValidationResult = validateArrayLength(value, {
			maxRows,
			minRows,
			required,
			t
		});
		if (typeof lengthValidationResult === "string") return lengthValidationResult;
	}
	if (typeof config?.defaultMaxTextLength === "number") maxLength = config.defaultMaxTextLength;
	if (typeof fieldMaxLength === "number") maxLength = fieldMaxLength;
	const stringsToValidate = Array.isArray(value) ? value : [value];
	for (const stringValue of stringsToValidate) {
		const length = stringValue?.length || 0;
		if (typeof maxLength === "number" && length > maxLength) return t("validation:shorterThanMax", {
			label: t("general:value"),
			maxLength,
			stringValue
		});
		if (typeof minLength === "number" && length < minLength) return t("validation:longerThanMin", {
			label: t("general:value"),
			minLength,
			stringValue
		});
	}
	if (required) {
		if (!value || (typeof value === "string" || Array.isArray(value)) && value.length === 0) return t("validation:required");
	}
	return true;
};
var slug = (value, { req: { t }, required }) => {
	if (required && !value) return t("validation:required");
	return true;
};
var password = (value, { maxLength: fieldMaxLength, minLength = 3, req: { payload: { config }, t }, required }) => {
	let maxLength;
	if (typeof config?.defaultMaxTextLength === "number") maxLength = config.defaultMaxTextLength;
	if (typeof fieldMaxLength === "number") maxLength = fieldMaxLength;
	if (value && maxLength && value.length > maxLength) return t("validation:shorterThanMax", { maxLength });
	if (value && minLength && value.length < minLength) return t("validation:longerThanMin", { minLength });
	if (required && !value) return t("validation:required");
	return true;
};
var confirmPassword = (value, { req: { t }, required, siblingData }) => {
	if (required && !value) return t("validation:required");
	if (value && value !== siblingData.password) return t("fields:passwordsDoNotMatch");
	return true;
};
var email = (value, { collectionSlug, req: { payload: { collections, config }, t }, required, siblingData }) => {
	if (collectionSlug) {
		const collection = collections?.[collectionSlug]?.config ?? config.collections.find(({ slug }) => slug === collectionSlug);
		if (collection.auth.loginWithUsername && !collection.auth.loginWithUsername?.requireUsername && !collection.auth.loginWithUsername?.requireEmail) {
			if (!value && !siblingData?.username) return t("validation:required");
		}
	}
	if (value && !/^(?!.*\.\.)[\w!#$%&'*+/=?^`{|}~-](?:[\w!#$%&'*+/=?^`{|}~.-]*[\w!#$%&'*+/=?^`{|}~-])?@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)*\.[a-z]{2,}$/i.test(value) || !value && required) return t("validation:emailAddress");
	return true;
};
var username = (value, { collectionSlug, req: { payload: { collections, config }, t }, required, siblingData }) => {
	let maxLength;
	if (collectionSlug) {
		const collection = collections?.[collectionSlug]?.config ?? config.collections.find(({ slug }) => slug === collectionSlug);
		if (collection.auth.loginWithUsername && !collection.auth.loginWithUsername?.requireUsername && !collection.auth.loginWithUsername?.requireEmail) {
			if (!value && !siblingData?.email) return t("validation:required");
		}
	}
	if (typeof config?.defaultMaxTextLength === "number") maxLength = config.defaultMaxTextLength;
	if (value && maxLength && value.length > maxLength) return t("validation:shorterThanMax", { maxLength });
	if (!value && required) return t("validation:required");
	return true;
};
var textarea = (value, { maxLength: fieldMaxLength, minLength, req: { payload: { config }, t }, required }) => {
	let maxLength;
	if (typeof config?.defaultMaxTextLength === "number") maxLength = config.defaultMaxTextLength;
	if (typeof fieldMaxLength === "number") maxLength = fieldMaxLength;
	if (value && maxLength && value.length > maxLength) return t("validation:shorterThanMax", { maxLength });
	if (value && minLength && value.length < minLength) return t("validation:longerThanMin", { minLength });
	if (required && !value) return t("validation:required");
	return true;
};
var code = (value, { req: { t }, required }) => {
	if (required && (!value || typeof value === "string" && value.length === 0)) return t("validation:required");
	return true;
};
var json = async (value, { jsonError, jsonSchema, req: { t }, required }) => {
	const isNotEmpty = (value) => {
		if (value === void 0 || value === null) return false;
		if (Array.isArray(value) && value.length === 0) return false;
		if (typeof value === "object" && Object.keys(value).length === 0) return false;
		return true;
	};
	const fetchSchema = ({ schema, uri }) => {
		if (uri && schema) return schema;
		return fetch(uri).then((response) => {
			if (!response.ok) throw new Error("Network response was not ok");
			return response.json();
		}).then((_json) => {
			const json = _json;
			const jsonSchemaSanitizations = {
				id: void 0,
				$id: json.id,
				$schema: "http://json-schema.org/draft-07/schema#"
			};
			return Object.assign(json, jsonSchemaSanitizations);
		});
	};
	if (required && !value) return t("validation:required");
	if (jsonError !== void 0) return t("validation:invalidInput");
	if (jsonSchema && isNotEmpty(value)) try {
		jsonSchema.schema = fetchSchema(jsonSchema);
		const { schema } = jsonSchema;
		const AjvModule = await import("ajv");
		const ajv = new ("default" in AjvModule && typeof AjvModule.default === "function" ? AjvModule.default : AjvModule)();
		if (!ajv.validate(schema, value)) return ajv.errorsText();
	} catch (error) {
		return error instanceof Error ? error.message : "Unknown error";
	}
	return true;
};
var checkbox = (value, { req: { t }, required }) => {
	if (value && typeof value !== "boolean" || required && typeof value !== "boolean") return t("validation:trueOrFalse");
	return true;
};
var date = (value, { name, req: { t }, required, siblingData, timezone }) => {
	const validDate = value && !isNaN(Date.parse(value.toString()));
	const hasRequiredTimezone = timezone && required;
	const selectedTimezone = siblingData?.[`${name}_tz`];
	const validTimezone = hasRequiredTimezone ? Boolean(selectedTimezone) : true;
	if (validDate && validTimezone) return true;
	if (validDate && !validTimezone) return t("validation:timezoneRequired");
	if (value) return t("validation:notValidDate", { value });
	if (required) return t("validation:required");
	return true;
};
var richText = async (value, options) => {
	if (!options?.editor) throw new Error("richText field has no editor property.");
	if (typeof options?.editor === "function") throw new Error("Attempted to access unsanitized rich text editor.");
	return (options?.editor).validate(value, options);
};
var validateArrayLength = (value, options) => {
	const { maxRows, minRows, required, t } = options;
	const arrayLength = Array.isArray(value) ? value.length : value || 0;
	if (!required && arrayLength === 0) return true;
	if (minRows && arrayLength < minRows) return t("validation:requiresAtLeast", {
		count: minRows,
		label: t("general:rows")
	});
	if (maxRows && arrayLength > maxRows) return t("validation:requiresNoMoreThan", {
		count: maxRows,
		label: t("general:rows")
	});
	if (required && !arrayLength) return t("validation:requiresAtLeast", {
		count: 1,
		label: t("general:row")
	});
	return true;
};
var number = (value, { hasMany, max, maxRows, min, minRows, req: { t }, required }) => {
	if (hasMany === true) {
		const lengthValidationResult = validateArrayLength(value, {
			maxRows,
			minRows,
			required,
			t
		});
		if (typeof lengthValidationResult === "string") return lengthValidationResult;
	}
	if (!value && !isNumber(value)) {
		if (required) return t("validation:required");
		if (!required) return true;
	}
	const numbersToValidate = Array.isArray(value) ? value : [value];
	for (const number of numbersToValidate) {
		if (!isNumber(number)) return t("validation:enterNumber");
		const numberValue = parseFloat(number);
		if (typeof max === "number" && numberValue > max) return t("validation:greaterThanMax", {
			label: t("general:value"),
			max,
			value
		});
		if (typeof min === "number" && numberValue < min) return t("validation:lessThanMin", {
			label: t("general:value"),
			min,
			value
		});
	}
	return true;
};
var array = (value, { maxRows, minRows, req: { t }, required }) => {
	return validateArrayLength(value, {
		maxRows,
		minRows,
		required,
		t
	});
};
/**
* This function validates the blocks in a blocks field against the provided filterOptions.
* It will return a list of all block slugs found in the value, the allowed block slugs (if any),
* and a list of invalid block slugs that are used despite being disallowed.
*
* @internal - this may break or be removed at any time
*/ async function validateBlocksFilterOptions({ id, data, filterOptions, req, siblingData, value }) {
	const allBlockSlugs = Array.isArray(value) ? value.map((b) => b.blockType).filter((s) => Boolean(s)) : [];
	let allowedBlockSlugs = void 0;
	if (typeof filterOptions === "function") {
		const result = await filterOptions({
			id,
			data,
			req,
			siblingData,
			user: req.user
		});
		if (result !== true && Array.isArray(result)) allowedBlockSlugs = result;
	} else if (Array.isArray(filterOptions)) allowedBlockSlugs = filterOptions;
	const invalidBlockSlugs = [];
	if (allowedBlockSlugs) {
		for (const blockSlug of allBlockSlugs) if (!allowedBlockSlugs.includes(blockSlug)) invalidBlockSlugs.push(blockSlug);
	}
	return {
		allBlockSlugs,
		allowedBlockSlugs,
		invalidBlockSlugs
	};
}
var blocks = async (value, { id, data, filterOptions, maxRows, minRows, req: { t }, req, required, siblingData }) => {
	const lengthValidationResult = validateArrayLength(value, {
		maxRows,
		minRows,
		required,
		t
	});
	if (typeof lengthValidationResult === "string") return lengthValidationResult;
	if (filterOptions) {
		const { invalidBlockSlugs } = await validateBlocksFilterOptions({
			id,
			data,
			filterOptions,
			req,
			siblingData,
			value
		});
		if (invalidBlockSlugs?.length) return t("validation:invalidBlocks", { blocks: invalidBlockSlugs.join(", ") });
	}
	return true;
};
var validateFilterOptions = async (value, { id, blockData, data, filterOptions, relationTo, req, req: { t, user }, siblingData }) => {
	if (typeof filterOptions !== "undefined" && value) {
		const options = {};
		const falseCollections = [];
		const collections = !Array.isArray(relationTo) ? [relationTo] : relationTo;
		const values = Array.isArray(value) ? value : [value];
		for (const collection of collections) try {
			let optionFilter = typeof filterOptions === "function" ? await filterOptions({
				id,
				blockData,
				data,
				relationTo: collection,
				req,
				siblingData,
				user
			}) : filterOptions;
			if (optionFilter === true) optionFilter = null;
			const valueIDs = [];
			values.forEach((val) => {
				if (typeof val === "object") {
					if (val?.value) valueIDs.push(val.value);
					else if (ObjectId.isValid(val)) valueIDs.push(new ObjectId(val).toHexString());
				}
				if (typeof val === "string" || typeof val === "number") valueIDs.push(val);
			});
			if (valueIDs.length > 0) {
				const findWhere = { and: [{ id: { in: valueIDs } }] };
				if (optionFilter && optionFilter !== true) findWhere.and?.push(optionFilter);
				if (optionFilter === false) falseCollections.push(collection);
				options[collection] = (await req.payloadDataLoader.find({
					collection,
					depth: 0,
					limit: 0,
					pagination: false,
					req,
					where: findWhere
				})).docs.map((doc) => doc.id);
			} else options[collection] = [];
		} catch (err) {
			req.payload.logger.error({
				err,
				msg: `Error validating filter options for collection ${collection}`
			});
			options[collection] = [];
		}
		const invalidRelationships = values.filter((val) => {
			let collection;
			let requestedID;
			if (typeof relationTo === "string") {
				collection = relationTo;
				if (typeof val === "string" || typeof val === "number") requestedID = val;
				if (typeof val === "object" && ObjectId.isValid(val)) requestedID = new ObjectId(val).toHexString();
			}
			if (Array.isArray(relationTo) && typeof val === "object" && val?.relationTo) {
				collection = val.relationTo;
				requestedID = val.value;
			}
			if (falseCollections.find((slug) => relationTo === slug)) return true;
			if (!options[collection]) return true;
			return options[collection].indexOf(requestedID) === -1;
		});
		if (invalidRelationships.length > 0) return invalidRelationships.reduce((err, invalid, i) => {
			return `${err} ${JSON.stringify(invalid)}${invalidRelationships.length === i + 1 ? "," : ""} `;
		}, t("validation:invalidSelections"));
		return true;
	}
	return true;
};
var upload = async (value, options) => {
	const { event, maxRows, minRows, relationTo, req: { payload, t }, required } = options;
	if ((!value && typeof value !== "number" || Array.isArray(value) && value.length === 0) && required) return t("validation:required");
	if (Array.isArray(value) && value.length > 0) {
		if (minRows && value.length < minRows) return t("validation:lessThanMin", {
			label: t("general:rows"),
			min: minRows,
			value: value.length
		});
		if (maxRows && value.length > maxRows) return t("validation:greaterThanMax", {
			label: t("general:rows"),
			max: maxRows,
			value: value.length
		});
	}
	if (typeof value !== "undefined" && value !== null) {
		const invalidRelationships = (Array.isArray(value) ? value : [value]).filter((val) => {
			let collectionSlug;
			let requestedID;
			if (typeof relationTo === "string") {
				collectionSlug = relationTo;
				if (val || typeof val === "number") requestedID = val;
			}
			if (Array.isArray(relationTo) && typeof val === "object" && val?.relationTo) {
				collectionSlug = val.relationTo;
				requestedID = val.value;
			}
			if (requestedID === null) return false;
			const idType = payload.collections[collectionSlug]?.customIDType || payload?.db?.defaultIDType || "text";
			return !isValidID(requestedID, idType);
		});
		if (invalidRelationships.length > 0) return `This relationship field has the following invalid relationships: ${invalidRelationships.map((err, invalid) => {
			return `${err} ${JSON.stringify(invalid)}`;
		}).join(", ")}`;
	}
	if (event === "onChange") return true;
	return validateFilterOptions(value, options);
};
var relationship = async (value, options) => {
	const { event, maxRows, minRows, relationTo, req: { payload, t }, required } = options;
	if ((!value && typeof value !== "number" || Array.isArray(value) && value.length === 0) && required) return t("validation:required");
	if (Array.isArray(value) && value.length > 0) {
		if (minRows && value.length < minRows) return t("validation:lessThanMin", {
			label: t("general:rows"),
			min: minRows,
			value: value.length
		});
		if (maxRows && value.length > maxRows) return t("validation:greaterThanMax", {
			label: t("general:rows"),
			max: maxRows,
			value: value.length
		});
	}
	if (typeof value !== "undefined" && value !== null) {
		const invalidRelationships = (Array.isArray(value) ? value : [value]).filter((val) => {
			let collectionSlug;
			let requestedID;
			if (typeof relationTo === "string") {
				collectionSlug = relationTo;
				if (val || typeof val === "number") requestedID = val;
			}
			if (Array.isArray(relationTo) && typeof val === "object" && val?.relationTo) {
				collectionSlug = val.relationTo;
				requestedID = val.value;
			}
			if (requestedID === null) return false;
			const idType = payload.collections[collectionSlug]?.customIDType || payload?.db?.defaultIDType || "text";
			return !isValidID(requestedID, idType);
		});
		if (invalidRelationships.length > 0) return `This relationship field has the following invalid relationships: ${invalidRelationships.map((err, invalid) => {
			return `${err} ${JSON.stringify(invalid)}`;
		}).join(", ")}`;
	}
	if (event === "onChange") return true;
	return validateFilterOptions(value, options);
};
var select = (value, { data, filterOptions, hasMany, options, req, req: { t }, required, siblingData }) => {
	const filteredOptions = typeof filterOptions === "function" ? filterOptions({
		data,
		options,
		req,
		siblingData
	}) : options;
	if (Array.isArray(value) && value.some((input) => !filteredOptions.some((option) => option === input || typeof option !== "string" && option?.value === input))) return t("validation:invalidSelection");
	if (hasMany && Array.isArray(value) && value.length > 1) {
		const counts = /* @__PURE__ */ new Map();
		for (const item of value) counts.set(item, (counts.get(item) || 0) + 1);
		const duplicates = [];
		for (const [item, count] of counts.entries()) if (count > 1) for (let i = 0; i < count; i++) duplicates.push(item);
		if (duplicates.length > 0) return duplicates.reduce((err, duplicate, i) => {
			return `${err} ${JSON.stringify(duplicate)}${i < duplicates.length - 1 ? "," : ""}`;
		}, t("validation:invalidSelections"));
	}
	if (typeof value === "string" && !filteredOptions.some((option) => option === value || typeof option !== "string" && option.value === value)) return t("validation:invalidSelection");
	if (required && (typeof value === "undefined" || value === null || hasMany && Array.isArray(value) && value?.length === 0)) return t("validation:required");
	return true;
};
var radio = (value, { options, req: { t }, required }) => {
	if (value) return options.some((option) => option === value || typeof option !== "string" && option.value === value) || t("validation:invalidSelection");
	return required ? t("validation:required") : true;
};
var point = (value = ["", ""], { req: { t }, required }) => {
	if (value === null) {
		if (required) return t("validation:required");
		return true;
	}
	const lng = parseFloat(String(value[0]));
	const lat = parseFloat(String(value[1]));
	if (required && (value[0] && value[1] && typeof lng !== "number" && typeof lat !== "number" || Number.isNaN(lng) || Number.isNaN(lat) || Array.isArray(value) && value.length !== 2)) return t("validation:requiresTwoNumbers");
	if (value[1] && Number.isNaN(lng) || value[0] && Number.isNaN(lat)) return t("validation:invalidInput");
	if (value[0] && !Number.isNaN(lng) && (lng < -180 || lng > 180)) return t("validation:longitudeOutOfBounds");
	if (value[1] && !Number.isNaN(lat) && (lat < -90 || lat > 90)) return t("validation:latitudeOutOfBounds");
	return true;
};
/**
* Built-in field validations used by Payload
*
* These can be re-used in custom validations
*/ var validations = {
	slug,
	array,
	blocks,
	checkbox,
	code,
	confirmPassword,
	date,
	email,
	json,
	number,
	password,
	point,
	radio,
	relationship,
	richText,
	select,
	text,
	textarea,
	upload
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/types/constants.js
var validOperators = [
	"equals",
	"contains",
	"not_equals",
	"in",
	"all",
	"not_in",
	"exists",
	"greater_than",
	"greater_than_equal",
	"less_than",
	"less_than_equal",
	"like",
	"not_like",
	"within",
	"intersects",
	"near"
];
var validOperatorSet = new Set(validOperators);
/**
* Matches a dot-separated path where each segment is a word character (a-zA-Z0-9_).
* Used to validate field paths before they are processed by query builders.
*/ var SAFE_FIELD_PATH_REGEX = /^\w+(?:\.\w+)*$/;
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/uploads/isImage.js
function isImage(mimeType) {
	return [
		"image/jpeg",
		"image/png",
		"image/gif",
		"image/svg+xml",
		"image/webp",
		"image/avif",
		"image/jxl"
	].indexOf(mimeType) > -1;
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/versions/defaults.js
var versionDefaults = { autosaveInterval: 2e3 };
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/getVersionsConfig.js
/**
* Check if an entity has drafts enabled
*/ var hasDraftsEnabled = (config) => {
	return Boolean(config?.versions && typeof config.versions === "object" && config.versions.drafts);
};
/**
* Check if an entity has localized status enabled
*/ var hasLocalizeStatusEnabled = (config) => {
	return Boolean(config?.versions && typeof config.versions === "object" && config.versions.drafts && typeof config.versions.drafts === "object" && config.versions.drafts.localizeStatus);
};
/**
* Check if an entity has autosave enabled
*/ var hasAutosaveEnabled = (config) => {
	return Boolean(config?.versions && typeof config.versions === "object" && config.versions.drafts && typeof config.versions.drafts === "object" && config.versions.drafts.autosave);
};
/**
* Check if an entity has validate drafts enabled
*/ var hasDraftValidationEnabled = (config) => {
	return Boolean(config?.versions && typeof config.versions === "object" && config.versions.drafts && typeof config.versions.drafts === "object" && config.versions.drafts.validate);
};
var hasScheduledPublishEnabled = (config) => {
	return Boolean(config?.versions && typeof config.versions === "object" && config.versions.drafts && typeof config.versions.drafts === "object" && config.versions.drafts.schedulePublish);
};
/**
* Get the maximum number of versions to keep for an entity
* Returns maxPerDoc for collections or max for globals
*/ var getVersionsMax = (config) => {
	if (!config?.versions || typeof config.versions !== "object") return 0;
	if ("maxPerDoc" in config.versions) return config.versions.maxPerDoc ?? 100;
	if ("max" in config.versions) return config.versions.max ?? 100;
	return 0;
};
var getAutosaveInterval = (config) => {
	let interval = versionDefaults.autosaveInterval;
	if (config?.versions && typeof config.versions === "object" && config.versions.drafts && typeof config.versions.drafts === "object" && config.versions.drafts.autosave && typeof config.versions.drafts.autosave === "object") interval = config.versions.drafts.autosave.interval ?? versionDefaults.autosaveInterval;
	return interval;
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/validateMimeType.js
var validateMimeType = (mimeType, allowedMimeTypes) => {
	if (allowedMimeTypes.length === 0) return true;
	return allowedMimeTypes.map((v) => v.replace("*", "")).some((cleanedMimeType) => mimeType.startsWith(cleanedMimeType));
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/escapeRegExp.js
/**
* Escapes special characters in a string for use in a regular expression
* @param string - The string to escape
* @returns The escaped string safe for use in RegExp
*/ var escapeRegExp = (string) => string.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
//#endregion
export { fieldAffectsData as A, fieldIsVirtual as B, isNumber as C, deepCopyObjectSimpleWithoutReactComponents as D, deepCopyObjectSimple as E, fieldIsHiddenOrDisabled as F, optionsAreObjects as G, fieldSupportsMany as H, fieldIsID as I, v4 as J, tabHasName as K, fieldIsLocalized as L, fieldHasSubFields as M, fieldIsArrayType as N, defaultAccess as O, fieldIsBlockType as P, fieldIsPresentationalOnly as R, isValidID as S, getFieldPaths as T, groupHasName as U, fieldShouldBeLocalized as V, optionIsObject as W, unsafeStringify as X, rng as Y, getLoginOptions as Z, password as _, hasAutosaveEnabled as a, validateBlocksFilterOptions as b, hasLocalizeStatusEnabled as c, isImage as d, SAFE_FIELD_PATH_REGEX as f, email as g, confirmPassword as h, getVersionsMax as i, fieldHasMaxDepth as j, getTranslation as k, hasScheduledPublishEnabled as l, validOperators as m, validateMimeType as n, hasDraftValidationEnabled as o, validOperatorSet as p, valueIsValueWithRelation as q, getAutosaveInterval as r, hasDraftsEnabled as s, escapeRegExp as t, versionDefaults as u, text as v, require_objectid as w, validations as x, username as y, fieldIsSidebar as z };
