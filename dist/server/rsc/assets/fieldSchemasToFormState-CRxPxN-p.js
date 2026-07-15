import { r as __toESM, t as __commonJSMin } from "./rolldown-runtime-DJK8HYOj.js";
import { deepCopyObjectSimple, fieldAffectsData, fieldHasSubFields, fieldIsHiddenOrDisabled, fieldIsID, fieldIsLocalized, getFieldPaths, tabHasName } from "payload/shared";
import { MissingEditorProp, getBlockSelect, getDefaultValue, stripUnselectedFields, validateBlocksFilterOptions } from "payload";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/buildFieldSchemaMap/traverseFields.js
var traverseFields$1 = ({ config, fields, i18n, parentIndexPath, parentSchemaPath, schemaMap }) => {
	for (const [index, field] of fields.entries()) {
		const { indexPath, schemaPath } = getFieldPaths({
			field,
			index,
			parentIndexPath,
			parentSchemaPath
		});
		schemaMap.set(schemaPath, field);
		switch (field.type) {
			case "array":
				traverseFields$1({
					config,
					fields: field.fields,
					i18n,
					parentIndexPath: "",
					parentSchemaPath: schemaPath,
					schemaMap
				});
				break;
			case "blocks":
				field.blocks.map((_block) => {
					const block = typeof _block === "string" ? config.blocks.find((b) => b.slug === _block) : _block;
					const blockSchemaPath = `${schemaPath}.${block.slug}`;
					schemaMap.set(blockSchemaPath, block);
					traverseFields$1({
						config,
						fields: block.fields,
						i18n,
						parentIndexPath: "",
						parentSchemaPath: schemaPath + "." + block.slug,
						schemaMap
					});
				});
				break;
			case "collapsible":
			case "row":
				traverseFields$1({
					config,
					fields: field.fields,
					i18n,
					parentIndexPath: indexPath,
					parentSchemaPath: schemaPath,
					schemaMap
				});
				break;
			case "group":
				if (fieldAffectsData(field)) traverseFields$1({
					config,
					fields: field.fields,
					i18n,
					parentIndexPath: "",
					parentSchemaPath: schemaPath,
					schemaMap
				});
				else traverseFields$1({
					config,
					fields: field.fields,
					i18n,
					parentIndexPath: indexPath,
					parentSchemaPath: schemaPath,
					schemaMap
				});
				break;
			case "richText":
				if (!field?.editor) throw new MissingEditorProp(field);
				if (typeof field.editor === "function") throw new Error("Attempted to access unsanitized rich text editor.");
				if (typeof field.editor.generateSchemaMap === "function") field.editor.generateSchemaMap({
					config,
					field,
					i18n,
					schemaMap,
					schemaPath
				});
				break;
			case "tab": {
				const isNamedTab = tabHasName(field);
				traverseFields$1({
					config,
					fields: field.fields,
					i18n,
					parentIndexPath: isNamedTab ? "" : indexPath,
					parentSchemaPath: schemaPath,
					schemaMap
				});
				break;
			}
			case "tabs":
				traverseFields$1({
					config,
					fields: field.tabs.map((tab) => ({
						...tab,
						type: "tab"
					})),
					i18n,
					parentIndexPath: indexPath,
					parentSchemaPath: schemaPath,
					schemaMap
				});
				break;
		}
	}
};
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
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/resolveFilterOptions.js
var import_objectid = /* @__PURE__ */ __toESM(require_objectid(), 1);
var resolveFilterOptions = async (filterOptions, options) => {
	const { relationTo } = options;
	const relations = Array.isArray(relationTo) ? relationTo : [relationTo];
	const query = {};
	if (typeof filterOptions !== "undefined") await Promise.all(relations.map(async (relation) => {
		query[relation] = typeof filterOptions === "function" ? await filterOptions({
			...options,
			relationTo: relation
		}) : filterOptions;
		if (query[relation] === true) query[relation] = {};
		if (query[relation] === false) query[relation] = { id: { exists: false } };
	}));
	return query;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/calculateDefaultValues/promise.js
var defaultValuePromise = async ({ id, data, field, locale, req, select, selectMode, siblingData, user }) => {
	if (!stripUnselectedFields({
		field,
		select,
		selectMode,
		siblingDoc: siblingData
	})) return;
	if (fieldAffectsData(field)) {
		if (typeof siblingData[field.name] === "undefined" && typeof field.defaultValue !== "undefined") try {
			siblingData[field.name] = await getDefaultValue({
				defaultValue: field.defaultValue,
				locale,
				req,
				user,
				value: siblingData[field.name]
			});
		} catch (err) {
			req.payload.logger.error({
				err,
				msg: `Error calculating default value for field: ${field.name}`
			});
		}
	}
	switch (field.type) {
		case "array": {
			const rows = siblingData[field.name];
			if (Array.isArray(rows)) {
				const promises = [];
				const arraySelect = select?.[field.name];
				rows.forEach((row) => {
					promises.push(iterateFields$1({
						id,
						data,
						fields: field.fields,
						locale,
						req,
						select: typeof arraySelect === "object" ? arraySelect : void 0,
						selectMode,
						siblingData: row,
						user
					}));
				});
				await Promise.all(promises);
			}
			break;
		}
		case "blocks": {
			const rows = siblingData[field.name];
			if (Array.isArray(rows)) {
				const promises = [];
				rows.forEach((row) => {
					const blockTypeToMatch = row.blockType;
					const block = req.payload.blocks[blockTypeToMatch] ?? field.blocks.find((blockType) => typeof blockType !== "string" && blockType.slug === blockTypeToMatch);
					const { blockSelect, blockSelectMode } = getBlockSelect({
						block,
						select: select?.[field.name],
						selectMode
					});
					if (block) {
						row.blockType = blockTypeToMatch;
						promises.push(iterateFields$1({
							id,
							data,
							fields: block.fields,
							locale,
							req,
							select: typeof blockSelect === "object" ? blockSelect : void 0,
							selectMode: blockSelectMode,
							siblingData: row,
							user
						}));
					}
				});
				await Promise.all(promises);
			}
			break;
		}
		case "collapsible":
		case "row":
			await iterateFields$1({
				id,
				data,
				fields: field.fields,
				locale,
				req,
				select,
				selectMode,
				siblingData,
				user
			});
			break;
		case "group":
			if (fieldAffectsData(field)) {
				if (typeof siblingData[field.name] !== "object") siblingData[field.name] = {};
				const groupData = siblingData[field.name];
				const groupSelect = select?.[field.name];
				await iterateFields$1({
					id,
					data,
					fields: field.fields,
					locale,
					req,
					select: typeof groupSelect === "object" ? groupSelect : void 0,
					selectMode,
					siblingData: groupData,
					user
				});
			} else await iterateFields$1({
				id,
				data,
				fields: field.fields,
				locale,
				req,
				select,
				selectMode,
				siblingData,
				user
			});
			break;
		case "tab": {
			let tabSiblingData;
			const isNamedTab = tabHasName(field);
			let tabSelect;
			if (isNamedTab) {
				if (typeof siblingData[field.name] !== "object") siblingData[field.name] = {};
				tabSiblingData = siblingData[field.name];
				if (typeof select?.[field.name] === "object") tabSelect = select?.[field.name];
			} else {
				tabSiblingData = siblingData;
				tabSelect = select;
			}
			await iterateFields$1({
				id,
				data,
				fields: field.fields,
				locale,
				req,
				select: tabSelect,
				selectMode,
				siblingData: tabSiblingData,
				user
			});
			break;
		}
		case "tabs":
			await iterateFields$1({
				id,
				data,
				fields: field.tabs.map((tab) => ({
					...tab,
					type: "tab"
				})),
				locale,
				req,
				select,
				selectMode,
				siblingData,
				user
			});
			break;
		default: break;
	}
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/calculateDefaultValues/iterateFields.js
var iterateFields$1 = async ({ id, data, fields, locale, req, select, selectMode, siblingData, user }) => {
	const promises = [];
	fields.forEach((field) => {
		promises.push(defaultValuePromise({
			id,
			data,
			field,
			locale,
			req,
			select,
			selectMode,
			siblingData,
			user
		}));
	});
	await Promise.all(promises);
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/calculateDefaultValues/index.js
var calculateDefaultValues = async ({ id, data, fields, locale, req, select, selectMode, user }) => {
	await iterateFields$1({
		id,
		data,
		fields,
		locale,
		req,
		select,
		selectMode,
		siblingData: data,
		user
	});
	return data;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/isRowCollapsed.js
function isRowCollapsed({ collapsedPrefs, field, previousRow, row }) {
	if (previousRow && "collapsed" in previousRow) return previousRow.collapsed ?? false;
	if (collapsedPrefs !== void 0) return collapsedPrefs.includes(row.id);
	return field.admin.initCollapsed;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/addFieldStatePromise.js
var ObjectId = "default" in import_objectid.default ? import_objectid.default.default : import_objectid.default;
/**
* Flattens the fields schema and fields data.
* The output is the field path (e.g. array.0.name) mapped to a FormField object.
*/
var addFieldStatePromise = async (args) => {
	const { id, addErrorPathToParent: addErrorPathToParentArg, anyParentLocalized = false, blockData, clientFieldSchemaMap, collectionSlug, data, field, fieldSchemaMap, filter, forceFullValue = false, fullData, globalSlug, includeSchema = false, indexPath, mockRSCs, omitParents = false, operation, parentPath, parentPermissions, parentSchemaPath, passesCondition, path, preferences, previousFormState, readOnly, renderAllFields, renderFieldFn, req, schemaPath, select, selectMode, skipConditionChecks = false, skipValidation = false, state } = args;
	if (!args.clientFieldSchemaMap && args.renderFieldFn) console.warn("clientFieldSchemaMap is not passed to addFieldStatePromise - this will reduce performance");
	let fieldPermissions = true;
	const fieldState = {};
	const lastRenderedPath = previousFormState?.[path]?.lastRenderedPath;
	if (lastRenderedPath) fieldState.lastRenderedPath = lastRenderedPath;
	const addedByServer = !renderAllFields && !previousFormState?.[path];
	if (addedByServer) fieldState.addedByServer = true;
	if (passesCondition === false) fieldState.passesCondition = false;
	if (includeSchema) fieldState.fieldSchema = field;
	const isPresentationalWithSubFields = fieldHasSubFields(field) && !fieldAffectsData(field);
	if (passesCondition === false && field.type !== "tab" && !isPresentationalWithSubFields) {
		if (fieldAffectsData(field) && data?.[field.name] !== void 0) {
			fieldState.value = data[field.name];
			fieldState.initialValue = data[field.name];
		}
		if (!filter || filter(args)) state[path] = fieldState;
		return;
	}
	if (fieldAffectsData(field) && !fieldIsHiddenOrDisabled(field) && field.type !== "tab") {
		fieldPermissions = parentPermissions === true ? parentPermissions : deepCopyObjectSimple(parentPermissions?.[field.name]);
		let hasPermission = fieldPermissions === true || deepCopyObjectSimple(fieldPermissions?.read);
		if (typeof field?.access?.read === "function") {
			const collection = collectionSlug ? req.payload.collections[collectionSlug]?.config ?? null : null;
			const global = globalSlug ? req.payload.globals.config.find((g) => g.slug === globalSlug) ?? null : null;
			hasPermission = await field.access.read({
				id,
				blockData,
				data: fullData,
				req,
				siblingData: data,
				...collection ? { collection } : { global }
			});
		} else hasPermission = true;
		if (!hasPermission) return;
		const validate = "validate" in field ? field.validate : void 0;
		let validationResult = true;
		if (typeof validate === "function" && !skipValidation && passesCondition) {
			let jsonError;
			if (field.type === "json" && typeof data[field.name] === "string") try {
				JSON.parse(data[field.name]);
			} catch (e) {
				jsonError = e;
			}
			try {
				validationResult = await validate(data?.[field.name], {
					...field,
					id,
					blockData,
					collectionSlug,
					data: fullData,
					event: "onChange",
					jsonError,
					operation,
					preferences,
					previousValue: previousFormState?.[path]?.initialValue,
					req,
					siblingData: data
				});
			} catch (err) {
				validationResult = `Error validating field at path: ${path}`;
				req.payload.logger.error({
					err,
					msg: validationResult
				});
			}
		}
		/**
		* This function adds the error **path** to the current field and all its parents. If a field is invalid, all its parents are also invalid.
		* It does not add the error **message** to the current field, as that shouldn't apply to all parents.
		* This is done separately below.
		*/
		const addErrorPathToParent = (errorPath) => {
			if (typeof addErrorPathToParentArg === "function") addErrorPathToParentArg(errorPath);
			if (!fieldState.errorPaths) fieldState.errorPaths = [];
			if (!fieldState.errorPaths.includes(errorPath)) {
				fieldState.errorPaths.push(errorPath);
				fieldState.valid = false;
			}
		};
		if (typeof validationResult === "string") {
			fieldState.errorMessage = validationResult;
			fieldState.valid = false;
			addErrorPathToParent(path);
		}
		switch (field.type) {
			case "array": {
				const arrayValue = Array.isArray(data[field.name]) ? data[field.name] : [];
				const arraySelect = select?.[field.name];
				const { promises, rows } = arrayValue.reduce((acc, row, rowIndex) => {
					const rowPath = path + "." + rowIndex;
					row.id = row?.id || new ObjectId().toHexString();
					if (!omitParents && (!filter || filter(args))) {
						const idKey = rowPath + ".id";
						state[idKey] = {
							initialValue: row.id,
							value: row.id
						};
						if (includeSchema) state[idKey].fieldSchema = field.fields.find((field) => fieldIsID(field));
					}
					acc.promises.push(iterateFields({
						id,
						addErrorPathToParent,
						anyParentLocalized: field.localized || anyParentLocalized,
						blockData,
						clientFieldSchemaMap,
						collectionSlug,
						data: row,
						fields: field.fields,
						fieldSchemaMap,
						filter,
						forceFullValue,
						fullData,
						includeSchema,
						mockRSCs,
						omitParents,
						operation,
						parentIndexPath: "",
						parentPassesCondition: passesCondition,
						parentPath: rowPath,
						parentSchemaPath: schemaPath,
						permissions: fieldPermissions === true ? fieldPermissions : fieldPermissions?.fields || {},
						preferences,
						previousFormState,
						readOnly,
						renderAllFields,
						renderFieldFn,
						req,
						select: typeof arraySelect === "object" ? arraySelect : void 0,
						selectMode,
						skipConditionChecks,
						skipValidation,
						state
					}));
					if (!acc.rows) acc.rows = [];
					const previousRow = (previousFormState?.[path]?.rows || []).find((prevRow) => prevRow.id === row.id);
					const newRow = {
						id: row.id,
						isLoading: false
					};
					if (previousRow?.lastRenderedPath) newRow.lastRenderedPath = previousRow.lastRenderedPath;
					if (!previousRow) newRow.addedByServer = true;
					if (isRowCollapsed({
						collapsedPrefs: preferences?.fields?.[path]?.collapsed,
						field,
						previousRow,
						row
					})) newRow.collapsed = true;
					acc.rows.push(newRow);
					return acc;
				}, {
					promises: [],
					rows: []
				});
				await Promise.all(promises);
				if (rows) fieldState.rows = rows;
				if (data[field.name] !== null) {
					fieldState.value = forceFullValue ? arrayValue : arrayValue.length;
					fieldState.initialValue = forceFullValue ? arrayValue : arrayValue.length;
					if (arrayValue.length > 0) fieldState.disableFormData = true;
				}
				if (!omitParents && (!filter || filter(args))) state[path] = fieldState;
				break;
			}
			case "blocks": {
				const blocksValue = Array.isArray(data[field.name]) ? data[field.name] : [];
				let filterOptionsValidationResult = null;
				if (field.filterOptions) {
					filterOptionsValidationResult = await validateBlocksFilterOptions({
						id,
						data: fullData,
						filterOptions: field.filterOptions,
						req,
						siblingData: data,
						value: data[field.name]
					});
					fieldState.blocksFilterOptions = filterOptionsValidationResult.allowedBlockSlugs;
				}
				const { promises, rowMetadata } = blocksValue.reduce((acc, row, i) => {
					const blockTypeToMatch = row.blockType;
					const block = req.payload.blocks[blockTypeToMatch] ?? field.blocks.find((blockType) => typeof blockType !== "string" && blockType.slug === blockTypeToMatch);
					if (!block) throw new Error(`Block with type "${row.blockType}" was found in block data, but no block with that type is defined in the config for field with schema path ${schemaPath}.`);
					const { blockSelect, blockSelectMode } = getBlockSelect({
						block,
						select: select?.[field.name],
						selectMode
					});
					const rowPath = path + "." + i;
					if (block) {
						row.id = row?.id || new ObjectId().toHexString();
						if (!omitParents && (!filter || filter(args))) {
							const idKey = rowPath + ".id";
							state[idKey] = {
								initialValue: row.id,
								value: row.id
							};
							if (filterOptionsValidationResult?.invalidBlockSlugs?.length && filterOptionsValidationResult.invalidBlockSlugs.includes(row.blockType)) {
								state[idKey].errorMessage = req.t("validation:invalidBlock", { block: row.blockType });
								state[idKey].valid = false;
								addErrorPathToParent(idKey);
								fieldState.errorPaths = fieldState.errorPaths.filter((errorPath) => errorPath !== path);
							}
							if (includeSchema) state[idKey].fieldSchema = includeSchema ? block.fields.find((blockField) => fieldIsID(blockField)) : void 0;
							const fieldKey = rowPath + ".blockType";
							state[fieldKey] = {
								initialValue: row.blockType,
								value: row.blockType
							};
							if (addedByServer) state[fieldKey].addedByServer = addedByServer;
							if (includeSchema) state[fieldKey].fieldSchema = block.fields.find((blockField) => "name" in blockField && blockField.name === "blockType");
							const blockNameKey = rowPath + ".blockName";
							state[blockNameKey] = {};
							if (row.blockName) {
								state[blockNameKey].initialValue = row.blockName;
								state[blockNameKey].value = row.blockName;
							}
							if (includeSchema) state[blockNameKey].fieldSchema = block.fields.find((blockField) => "name" in blockField && blockField.name === "blockName");
						}
						acc.promises.push(iterateFields({
							id,
							addErrorPathToParent,
							anyParentLocalized: field.localized || anyParentLocalized,
							blockData: row,
							clientFieldSchemaMap,
							collectionSlug,
							data: row,
							fields: block.fields,
							fieldSchemaMap,
							filter,
							forceFullValue,
							fullData,
							includeSchema,
							mockRSCs,
							omitParents,
							operation,
							parentIndexPath: "",
							parentPassesCondition: passesCondition,
							parentPath: rowPath,
							parentSchemaPath: schemaPath + "." + block.slug,
							permissions: fieldPermissions === true ? fieldPermissions : parentPermissions?.[field.name]?.blocks?.[block.slug] === true ? true : parentPermissions?.[field.name]?.blocks?.[block.slug]?.fields || {},
							preferences,
							previousFormState,
							readOnly,
							renderAllFields,
							renderFieldFn,
							req,
							select: typeof blockSelect === "object" ? blockSelect : void 0,
							selectMode: blockSelectMode,
							skipConditionChecks,
							skipValidation,
							state
						}));
						const previousRow = (previousFormState?.[path]?.rows || []).find((prevRow) => prevRow.id === row.id);
						const newRow = {
							id: row.id,
							blockType: row.blockType,
							isLoading: false
						};
						if (previousRow?.lastRenderedPath) newRow.lastRenderedPath = previousRow.lastRenderedPath;
						acc.rowMetadata.push(newRow);
						if (isRowCollapsed({
							collapsedPrefs: preferences?.fields?.[path]?.collapsed,
							field,
							previousRow,
							row
						})) acc.rowMetadata[acc.rowMetadata.length - 1].collapsed = true;
					}
					return acc;
				}, {
					promises: [],
					rowMetadata: []
				});
				await Promise.all(promises);
				if (data[field.name] === null) {
					fieldState.value = null;
					fieldState.initialValue = null;
				} else {
					fieldState.value = forceFullValue ? blocksValue : blocksValue.length;
					fieldState.initialValue = forceFullValue ? blocksValue : blocksValue.length;
					if (blocksValue.length > 0) fieldState.disableFormData = true;
				}
				fieldState.rows = rowMetadata;
				if (!omitParents && (!filter || filter(args))) state[path] = fieldState;
				break;
			}
			case "group": {
				if (!filter || filter(args)) {
					fieldState.disableFormData = true;
					state[path] = fieldState;
				}
				const groupSelect = select?.[field.name];
				await iterateFields({
					id,
					addErrorPathToParent,
					anyParentLocalized: field.localized || anyParentLocalized,
					blockData,
					clientFieldSchemaMap,
					collectionSlug,
					data: data?.[field.name] || {},
					fields: field.fields,
					fieldSchemaMap,
					filter,
					forceFullValue,
					fullData,
					includeSchema,
					mockRSCs,
					omitParents,
					operation,
					parentIndexPath: "",
					parentPassesCondition: passesCondition,
					parentPath: path,
					parentSchemaPath: schemaPath,
					permissions: typeof fieldPermissions === "boolean" ? fieldPermissions : fieldPermissions?.fields,
					preferences,
					previousFormState,
					readOnly,
					renderAllFields,
					renderFieldFn,
					req,
					select: typeof groupSelect === "object" ? groupSelect : void 0,
					selectMode,
					skipConditionChecks,
					skipValidation,
					state
				});
				break;
			}
			case "relationship":
			case "upload":
				if (field.filterOptions) {
					if (typeof field.filterOptions === "object") if (typeof field.relationTo === "string") fieldState.filterOptions = { [field.relationTo]: field.filterOptions };
					else fieldState.filterOptions = field.relationTo.reduce((acc, relation) => {
						acc[relation] = field.filterOptions;
						return acc;
					}, {});
					if (typeof field.filterOptions === "function") fieldState.filterOptions = await resolveFilterOptions(field.filterOptions, {
						id,
						blockData,
						data: fullData,
						relationTo: field.relationTo,
						req,
						siblingData: data,
						user: req.user
					});
				}
				if (field.hasMany) {
					const relationshipValue = Array.isArray(data[field.name]) ? data[field.name].map((relationship) => {
						if (Array.isArray(field.relationTo)) return {
							relationTo: relationship.relationTo,
							value: relationship.value && typeof relationship.value === "object" ? relationship.value?.id : relationship.value
						};
						if (typeof relationship === "object" && relationship !== null) return relationship.id;
						return relationship;
					}) : void 0;
					fieldState.value = relationshipValue;
					fieldState.initialValue = relationshipValue;
				} else if (Array.isArray(field.relationTo)) {
					if (data[field.name] && typeof data[field.name] === "object" && "relationTo" in data[field.name] && "value" in data[field.name]) {
						const value = typeof data[field.name]?.value === "object" && data[field.name]?.value && "id" in data[field.name].value ? data[field.name].value.id : data[field.name].value;
						const relationshipValue = {
							relationTo: data[field.name]?.relationTo,
							value
						};
						fieldState.value = relationshipValue;
						fieldState.initialValue = relationshipValue;
					}
				} else {
					const relationshipValue = data[field.name] && typeof data[field.name] === "object" && "id" in data[field.name] ? data[field.name].id : data[field.name];
					fieldState.value = relationshipValue;
					fieldState.initialValue = relationshipValue;
				}
				if (!filter || filter(args)) state[path] = fieldState;
				break;
			case "select":
				if (typeof field.filterOptions === "function") fieldState.selectFilterOptions = field.filterOptions({
					data: fullData,
					options: field.options,
					req,
					siblingData: data
				});
				if (data[field.name] !== void 0) {
					fieldState.value = data[field.name];
					fieldState.initialValue = data[field.name];
				}
				if (!filter || filter(args)) state[path] = fieldState;
				break;
			default:
				if (data[field.name] !== void 0) {
					fieldState.value = data[field.name];
					fieldState.initialValue = data[field.name];
				}
				if (!filter || filter(args)) state[path] = fieldState;
				break;
		}
	} else if (fieldHasSubFields(field) && !fieldAffectsData(field)) {
		if (!filter || filter(args)) {
			state[path] = { disableFormData: true };
			if (passesCondition === false) state[path].passesCondition = false;
		}
		await iterateFields({
			id,
			mockRSCs,
			select,
			selectMode,
			addErrorPathToParent: addErrorPathToParentArg,
			anyParentLocalized: fieldIsLocalized(field) || anyParentLocalized,
			blockData,
			clientFieldSchemaMap,
			collectionSlug,
			data,
			fields: field.fields,
			fieldSchemaMap,
			filter,
			forceFullValue,
			fullData,
			includeSchema,
			omitParents,
			operation,
			parentIndexPath: indexPath,
			parentPassesCondition: passesCondition,
			parentPath: path,
			parentSchemaPath: schemaPath,
			permissions: parentPermissions,
			preferences,
			previousFormState,
			readOnly,
			renderAllFields,
			renderFieldFn,
			req,
			skipConditionChecks,
			skipValidation,
			state
		});
	} else if (field.type === "tab") {
		const isNamedTab = tabHasName(field);
		if (isNamedTab) {
			if (!stripUnselectedFields({
				field: {
					...field,
					type: "tab"
				},
				select,
				selectMode,
				siblingDoc: data?.[field.name] || {}
			})) return;
		}
		if (field?.id) {
			state[field.id] = { passesCondition };
			if (!renderAllFields && !previousFormState?.[field.id]) state[field.id].addedByServer = true;
		}
		if (!passesCondition) return;
		let childPermissions;
		let tabSelect;
		if (isNamedTab) {
			if (parentPermissions === true) childPermissions = true;
			else {
				const tabPermissions = parentPermissions?.[field.name];
				childPermissions = tabPermissions === true ? true : tabPermissions?.fields;
			}
			if (typeof select?.[field.name] === "object") tabSelect = select?.[field.name];
		} else {
			childPermissions = parentPermissions;
			tabSelect = select;
		}
		return iterateFields({
			id,
			addErrorPathToParent: addErrorPathToParentArg,
			anyParentLocalized: field.localized || anyParentLocalized,
			blockData,
			clientFieldSchemaMap,
			collectionSlug,
			data: isNamedTab ? data?.[field.name] || {} : data,
			fields: field.fields,
			fieldSchemaMap,
			filter,
			forceFullValue,
			fullData,
			includeSchema,
			mockRSCs,
			omitParents,
			operation,
			parentIndexPath: indexPath,
			parentPassesCondition: passesCondition,
			parentPath: path,
			parentSchemaPath: schemaPath,
			permissions: childPermissions,
			preferences,
			previousFormState,
			readOnly,
			renderAllFields,
			renderFieldFn,
			req,
			select: tabSelect,
			selectMode,
			skipConditionChecks,
			skipValidation,
			state
		});
	} else if (field.type === "tabs") {
		if (!filter || filter(args)) state[path] = { disableFormData: true };
		return iterateFields({
			id,
			addErrorPathToParent: addErrorPathToParentArg,
			anyParentLocalized: fieldIsLocalized(field) || anyParentLocalized,
			blockData,
			clientFieldSchemaMap,
			collectionSlug,
			data,
			fields: field.tabs.map((tab) => ({
				...tab,
				type: "tab"
			})),
			fieldSchemaMap,
			filter,
			forceFullValue,
			fullData,
			includeSchema,
			omitParents,
			operation,
			parentIndexPath: indexPath,
			parentPassesCondition: passesCondition,
			parentPath: path,
			parentSchemaPath: schemaPath,
			permissions: parentPermissions,
			preferences,
			previousFormState,
			renderAllFields,
			renderFieldFn,
			req,
			select,
			selectMode,
			skipConditionChecks,
			skipValidation,
			state
		});
	} else if (field.type === "ui") {
		if (!filter || filter(args)) {
			state[path] = fieldState;
			state[path].disableFormData = true;
		}
	}
	if (renderFieldFn && !fieldIsHiddenOrDisabled(field)) {
		const fieldConfig = fieldSchemaMap.get(schemaPath);
		if (!fieldConfig && !mockRSCs) if (schemaPath.endsWith(".blockType")) return;
		else throw new Error(`Field config not found for ${schemaPath}`);
		if (!state[path]) return;
		if (addedByServer) state[path].addedByServer = addedByServer;
		renderFieldFn({
			id,
			clientFieldSchemaMap,
			collectionSlug,
			data: fullData,
			fieldConfig,
			fieldSchemaMap,
			fieldState: state[path],
			formState: state,
			indexPath,
			lastRenderedPath,
			mockRSCs,
			operation,
			parentPath,
			parentSchemaPath,
			path,
			permissions: fieldPermissions,
			preferences,
			previousFieldState: previousFormState?.[path],
			readOnly,
			renderAllFields,
			req,
			schemaPath,
			siblingData: data
		});
	}
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/iterateFields.js
/**
* Flattens the fields schema and fields data
*/
var iterateFields = async ({ id, addErrorPathToParent: addErrorPathToParentArg, anyParentLocalized = false, blockData, clientFieldSchemaMap, collectionSlug, data, fields, fieldSchemaMap, filter, forceFullValue = false, fullData, globalSlug, includeSchema = false, mockRSCs, omitParents = false, operation, parentIndexPath, parentPassesCondition = true, parentPath, parentSchemaPath, permissions, preferences, previousFormState, readOnly, renderAllFields, renderFieldFn, req, select, selectMode, skipConditionChecks = false, skipValidation = false, state = {} }) => {
	const promises = [];
	fields.forEach((field, fieldIndex) => {
		let passesCondition = true;
		const { indexPath, path, schemaPath } = getFieldPaths({
			field,
			index: fieldIndex,
			parentIndexPath,
			parentPath,
			parentSchemaPath
		});
		if (path !== "id") {
			if (!stripUnselectedFields({
				field,
				select,
				selectMode,
				siblingDoc: data
			})) return;
		}
		const pathSegments = path ? path.split(".") : [];
		if (!skipConditionChecks) try {
			passesCondition = Boolean((field?.admin?.condition ? Boolean(field.admin.condition(fullData || {}, data || {}, {
				blockData,
				operation,
				path: pathSegments,
				user: req.user
			})) : true) && parentPassesCondition);
		} catch (err) {
			passesCondition = false;
			req.payload.logger.error({
				err,
				msg: `Error evaluating field condition at path: ${path}`
			});
		}
		promises.push(addFieldStatePromise({
			id,
			addErrorPathToParent: addErrorPathToParentArg,
			anyParentLocalized,
			blockData,
			clientFieldSchemaMap,
			collectionSlug,
			data,
			field,
			fieldIndex,
			fieldSchemaMap,
			filter,
			forceFullValue,
			fullData,
			globalSlug,
			includeSchema,
			indexPath,
			mockRSCs,
			omitParents,
			operation,
			parentIndexPath,
			parentPath,
			parentPermissions: permissions,
			parentSchemaPath,
			passesCondition,
			path,
			preferences,
			previousFormState,
			readOnly,
			renderAllFields,
			renderFieldFn,
			req,
			schemaPath,
			select,
			selectMode,
			skipConditionChecks,
			skipValidation,
			state
		}));
	});
	await Promise.all(promises);
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/index.js
var fieldSchemasToFormState = async ({ id, clientFieldSchemaMap, collectionSlug, data = {}, documentData, fields, fieldSchemaMap, globalSlug, initialBlockData, mockRSCs, operation, permissions, preferences, previousFormState, readOnly, renderAllFields, renderFieldFn, req, schemaPath, select, selectMode, skipValidation }) => {
	if (!clientFieldSchemaMap && renderFieldFn) console.warn("clientFieldSchemaMap is not passed to fieldSchemasToFormState - this will reduce performance");
	if (fields && fields.length) {
		const state = {};
		const dataWithDefaultValues = { ...data };
		await calculateDefaultValues({
			id,
			data: dataWithDefaultValues,
			fields,
			locale: req.locale,
			req,
			select,
			selectMode,
			siblingData: dataWithDefaultValues,
			user: req.user
		});
		let fullData = dataWithDefaultValues;
		if (documentData) fullData = documentData;
		await iterateFields({
			id,
			addErrorPathToParent: null,
			blockData: initialBlockData,
			clientFieldSchemaMap,
			collectionSlug,
			data: dataWithDefaultValues,
			fields,
			fieldSchemaMap,
			fullData,
			globalSlug,
			mockRSCs,
			operation,
			parentIndexPath: "",
			parentPassesCondition: true,
			parentPath: "",
			parentSchemaPath: schemaPath,
			permissions,
			preferences,
			previousFormState,
			readOnly,
			renderAllFields,
			renderFieldFn,
			req,
			select,
			selectMode,
			skipValidation,
			state
		});
		return state;
	}
	return {};
};
//#endregion
export { traverseFields$1 as i, resolveFilterOptions as n, require_objectid as r, fieldSchemasToFormState as t };
