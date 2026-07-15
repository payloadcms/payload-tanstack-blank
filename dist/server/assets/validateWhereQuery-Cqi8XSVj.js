import { A as fieldAffectsData, K as tabHasName, M as fieldHasSubFields, O as defaultAccess, R as fieldIsPresentationalOnly, k as getTranslation, p as validOperatorSet } from "./escapeRegExp-DRrhsMGY.js";
import pluralize from "pluralize";
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/flattenTopLevelFields.js
/**
* Flattens a collection's fields into a single array of fields, optionally
* extracting nested fields in group fields.
*
* @param fields - Array of fields to flatten
* @param options - Options to control the flattening behavior
*/ function flattenTopLevelFields(fields = [], options) {
	const { i18n, keepPresentationalFields, labelPrefix, moveSubFieldsToTop = false, pathPrefix } = typeof options === "boolean" ? { keepPresentationalFields: options } : options ?? {};
	return fields.reduce((acc, field) => {
		if (field.type === "group" && "fields" in field) if (moveSubFieldsToTop) {
			const isNamedGroup = "name" in field && typeof field.name === "string" && !!field.name;
			const groupName = "name" in field ? field.name : void 0;
			const translatedLabel = "label" in field && field.label && i18n ? getTranslation(field.label, i18n) : void 0;
			const labelWithPrefix = labelPrefix ? `${labelPrefix} > ${translatedLabel ?? groupName}` : translatedLabel ?? groupName;
			const nameWithPrefix = "name" in field && field.name ? pathPrefix ? `${pathPrefix}.${field.name}` : field.name : pathPrefix;
			acc.push(field, ...flattenTopLevelFields(field.fields, {
				i18n,
				keepPresentationalFields,
				labelPrefix: isNamedGroup ? labelWithPrefix : labelPrefix,
				moveSubFieldsToTop,
				pathPrefix: isNamedGroup ? nameWithPrefix : pathPrefix
			}));
		} else if (fieldAffectsData(field)) acc.push(field);
		else acc.push(...flattenTopLevelFields(field.fields, options));
		else if (field.type === "tabs" && "tabs" in field) return [...acc, ...field.tabs.reduce((tabFields, tab) => {
			if (tabHasName(tab)) if (moveSubFieldsToTop) {
				const translatedLabel = "label" in tab && tab.label && i18n ? getTranslation(tab.label, i18n) : void 0;
				const labelWithPrefixForTab = labelPrefix ? `${labelPrefix} > ${translatedLabel ?? tab.name}` : translatedLabel ?? tab.name;
				const pathPrefixForTab = tab.name ? pathPrefix ? `${pathPrefix}.${tab.name}` : tab.name : pathPrefix;
				return [...tabFields, ...flattenTopLevelFields(tab.fields, {
					i18n,
					keepPresentationalFields,
					labelPrefix: labelWithPrefixForTab,
					moveSubFieldsToTop,
					pathPrefix: pathPrefixForTab
				})];
			} else return [...tabFields, {
				...tab,
				type: "tab"
			}];
			else return [...tabFields, ...flattenTopLevelFields(tab.fields, options)];
		}, [])];
		else if (fieldHasSubFields(field) && ["collapsible", "row"].includes(field.type)) acc.push(...flattenTopLevelFields(field.fields, options));
		else if (fieldAffectsData(field) || keepPresentationalFields && fieldIsPresentationalOnly(field)) {
			if (field.name === "id" && labelPrefix !== void 0) return acc;
			const translatedLabel = "label" in field && field.label && i18n ? getTranslation(field.label, i18n) : void 0;
			const name = "name" in field ? field.name : void 0;
			const isHoistingFromGroup = pathPrefix !== void 0 || labelPrefix !== void 0;
			acc.push({
				...field,
				...moveSubFieldsToTop && isHoistingFromGroup && {
					accessor: pathPrefix && name ? `${pathPrefix}.${name}` : name ?? "",
					labelWithPrefix: labelPrefix ? `${labelPrefix} > ${translatedLabel ?? name}` : translatedLabel ?? name
				}
			});
		}
		return acc;
	}, []);
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/collections/config/defaults.js
/**
* @deprecated - remove in 4.0. This is error-prone, as mutating this object will affect any objects that use the defaults as a base.
*/ var defaults = {
	access: {
		create: defaultAccess,
		delete: defaultAccess,
		read: defaultAccess,
		unlock: defaultAccess,
		update: defaultAccess
	},
	admin: {
		components: {},
		custom: {},
		enableRichTextLink: true,
		enableRichTextRelationship: true,
		pagination: {
			defaultLimit: 10,
			limits: [
				5,
				10,
				25,
				50,
				100
			]
		},
		useAsTitle: "id"
	},
	auth: false,
	custom: {},
	endpoints: [],
	fields: [],
	hooks: {
		afterChange: [],
		afterDelete: [],
		afterForgotPassword: [],
		afterLogin: [],
		afterLogout: [],
		afterMe: [],
		afterOperation: [],
		afterRead: [],
		afterRefresh: [],
		beforeChange: [],
		beforeDelete: [],
		beforeLogin: [],
		beforeOperation: [],
		beforeRead: [],
		beforeValidate: [],
		me: [],
		refresh: []
	},
	indexes: [],
	timestamps: true,
	upload: false,
	versions: true
};
var addDefaultsToCollectionConfig = (collection) => {
	collection.access = {
		create: defaultAccess,
		delete: defaultAccess,
		read: defaultAccess,
		unlock: defaultAccess,
		update: defaultAccess,
		...collection.access || {}
	};
	collection.admin = {
		components: {},
		custom: {},
		enableRichTextLink: true,
		enableRichTextRelationship: true,
		useAsTitle: "id",
		...collection.admin || {},
		pagination: {
			defaultLimit: 10,
			limits: [
				5,
				10,
				25,
				50,
				100
			],
			...collection.admin?.pagination || {}
		}
	};
	collection.auth = collection.auth ?? false;
	collection.custom = collection.custom ?? {};
	collection.endpoints = collection.endpoints ?? [];
	collection.fields = collection.fields ?? [];
	collection.hierarchy = collection.hierarchy ?? false;
	collection.hooks = {
		afterChange: [],
		afterDelete: [],
		afterForgotPassword: [],
		afterLogin: [],
		afterLogout: [],
		afterMe: [],
		afterOperation: [],
		afterRead: [],
		afterRefresh: [],
		beforeChange: [],
		beforeDelete: [],
		beforeLogin: [],
		beforeOperation: [],
		beforeRead: [],
		beforeValidate: [],
		me: [],
		refresh: [],
		...collection.hooks || {}
	};
	collection.timestamps = collection.timestamps ?? true;
	collection.upload = collection.upload ?? false;
	collection.versions = collection.versions ?? true;
	collection.indexes = collection.indexes ?? [];
	return collection;
};
var addDefaultsToAuthConfig = (auth) => {
	auth.cookies = {
		sameSite: "Lax",
		secure: false,
		...auth.cookies || {}
	};
	auth.forgotPassword = auth.forgotPassword ?? {};
	auth.lockTime = auth.lockTime ?? 6e5;
	auth.loginWithUsername = auth.loginWithUsername ?? false;
	auth.maxLoginAttempts = auth.maxLoginAttempts ?? 5;
	auth.tokenExpiration = auth.tokenExpiration ?? 7200;
	auth.useSessions = auth.useSessions ?? true;
	auth.verify = auth.verify ?? false;
	auth.strategies = auth.strategies ?? [];
	if (!auth.disableLocalStrategy && auth.verify === true) auth.verify = {};
	return auth;
};
var addDefaultsToLoginWithUsernameConfig = (loginWithUsername) => ({
	allowEmailLogin: false,
	requireEmail: false,
	requireUsername: true,
	...loginWithUsername || {}
});
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/combineWhereConstraints.js
function combineWhereConstraints(constraints, as = "and") {
	if (constraints.length === 0) return {};
	const reducedConstraints = constraints.reduce((acc, constraint) => {
		if (constraint && typeof constraint === "object" && Object.keys(constraint).length > 0) if (as in constraint) acc[as] = [...acc[as], ...constraint[as]];
		else acc[as]?.push(constraint);
		return acc;
	}, { [as]: [] });
	if (reducedConstraints[as]?.length === 0) return {};
	return reducedConstraints;
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/formatLabels.js
var { isPlural, singular } = pluralize;
var capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
var toWords = (inputString, joinWords = false) => {
	const arrayOfStrings = (inputString || "").trim().split(/[\s-]/);
	const splitStringsArray = [];
	arrayOfStrings.forEach((tempString) => {
		if (tempString !== "") {
			const splitWords = tempString.split(/(?=[A-Z])/).join(" ");
			splitStringsArray.push(capitalizeFirstLetter(splitWords));
		}
	});
	return joinWords ? splitStringsArray.join("").replace(/\s/g, "") : splitStringsArray.join(" ");
};
var formatLabels = (slug) => {
	const words = toWords(slug);
	return isPlural(slug) ? {
		plural: words,
		singular: singular(words)
	} : {
		plural: pluralize(words),
		singular: words
	};
};
var formatNames = (slug) => {
	const words = toWords(slug, true);
	return isPlural(slug) ? {
		plural: words,
		singular: singular(words)
	} : {
		plural: pluralize(words),
		singular: words
	};
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/transformWhereQuery.js
/**
* Transforms a basic "where" query into a format in which the "where builder" can understand.
* Even though basic queries are valid, we need to hoist them into the "and" / "or" format.
* Use this function alongside `validateWhereQuery` to check that for valid queries before transforming.
* @example
* Inaccurate: [text][equals]=example%20post
* Accurate: [or][0][and][0][text][equals]=example%20post
*/ var transformWhereQuery = (whereQuery) => {
	if (!whereQuery) return {};
	if (whereQuery.or && !whereQuery.and) return { or: whereQuery.or.map((query) => {
		if (!query.and) return { and: [query] };
		return query;
	}) };
	if (whereQuery.and && !whereQuery.or) return { or: [{ and: whereQuery.and }] };
	if (!whereQuery.or && !whereQuery.and) return { or: [{ and: [whereQuery] }] };
	return whereQuery;
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/validateWhereQuery.js
/**
* Validates that a "where" query is in a format in which the "where builder" can understand.
* Even though basic queries are valid, we need to hoist them into the "and" / "or" format.
* Use this function alongside `transformWhereQuery` to perform a transformation if the query is not valid.
* @example
* Inaccurate: [text][equals]=example%20post
* Accurate: [or][0][and][0][text][equals]=example%20post
*/ var validateWhereQuery = (whereQuery) => {
	if (whereQuery?.or && (whereQuery?.or?.length === 0 || whereQuery?.or?.length > 0 && whereQuery?.or?.[0]?.and && whereQuery?.or?.[0]?.and?.length > 0)) return whereQuery.or.every((orQuery) => {
		if (orQuery.and && Array.isArray(orQuery.and)) return orQuery.and.every((andQuery) => {
			if (typeof andQuery !== "object") return false;
			const andKeys = Object.keys(andQuery);
			if (andKeys.length === 0) return false;
			for (const key of andKeys) {
				const operator = Object.keys(andQuery[key])[0];
				if (!operator || !validOperatorSet.has(operator)) return false;
			}
			return true;
		});
		return false;
	});
	return false;
};
//#endregion
export { toWords as a, addDefaultsToCollectionConfig as c, flattenTopLevelFields as d, formatNames as i, addDefaultsToLoginWithUsernameConfig as l, transformWhereQuery as n, combineWhereConstraints as o, formatLabels as r, addDefaultsToAuthConfig as s, validateWhereQuery as t, defaults as u };
