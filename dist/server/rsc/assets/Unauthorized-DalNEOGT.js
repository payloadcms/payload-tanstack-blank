import { r as __toESM } from "./rolldown-runtime-DJK8HYOj.js";
import { a as require_react_react_server, t as registerClientReference } from "./rsc-CrbjC1on.js";
import { Vt as require_jsx_runtime_react_server } from "./upsertPreferences-BTcoIMIB.js";
import { i as traverseFields$2 } from "./fieldSchemasToFormState-CRxPxN-p.js";
import assetsManifest from "../__vite_rsc_assets_manifest.js";
import { confirmPassword, fieldAffectsData, getFieldPaths, password, tabHasName } from "payload/shared";
import { createClientBlocks, createClientFields } from "payload";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/buildClientFieldSchemaMap/traverseFields.js
var import_react_react_server = /* @__PURE__ */ __toESM(require_react_react_server(), 1);
var traverseFields$1 = ({ clientSchemaMap, config, fields, i18n, parentIndexPath, parentSchemaPath, payload, schemaMap }) => {
	for (const [index, field] of fields.entries()) {
		const { indexPath, schemaPath } = getFieldPaths({
			field,
			index,
			parentIndexPath,
			parentSchemaPath
		});
		clientSchemaMap.set(schemaPath, field);
		switch (field.type) {
			case "array":
				traverseFields$1({
					clientSchemaMap,
					config,
					fields: field.fields,
					i18n,
					parentIndexPath: "",
					parentSchemaPath: schemaPath,
					payload,
					schemaMap
				});
				break;
			case "blocks":
				field.blocks.map((_block) => {
					const block = typeof _block === "string" ? config.blocksMap ? config.blocksMap[_block] : config.blocks.find((block) => typeof block !== "string" && block.slug === _block) : _block;
					const blockSchemaPath = `${schemaPath}.${block.slug}`;
					clientSchemaMap.set(blockSchemaPath, block);
					traverseFields$1({
						clientSchemaMap,
						config,
						fields: block.fields,
						i18n,
						parentIndexPath: "",
						parentSchemaPath: schemaPath + "." + block.slug,
						payload,
						schemaMap
					});
				});
				break;
			case "collapsible":
			case "row":
				traverseFields$1({
					clientSchemaMap,
					config,
					fields: field.fields,
					i18n,
					parentIndexPath: indexPath,
					parentSchemaPath: schemaPath,
					payload,
					schemaMap
				});
				break;
			case "group":
				if (fieldAffectsData(field)) traverseFields$1({
					clientSchemaMap,
					config,
					fields: field.fields,
					i18n,
					parentIndexPath: "",
					parentSchemaPath: schemaPath,
					payload,
					schemaMap
				});
				else traverseFields$1({
					clientSchemaMap,
					config,
					fields: field.fields,
					i18n,
					parentIndexPath: indexPath,
					parentSchemaPath: schemaPath,
					payload,
					schemaMap
				});
				break;
			case "richText": {
				const richTextFieldSchemaMap = /* @__PURE__ */ new Map();
				for (const [path, subField] of schemaMap.entries()) if (path.startsWith(`${schemaPath}.`)) richTextFieldSchemaMap.set(path, subField);
				for (const [path, subField] of richTextFieldSchemaMap.entries()) {
					if ("slug" in subField) {
						const clientBlocks = createClientBlocks({
							blocks: [subField],
							defaultIDType: payload.config.db.defaultIDType,
							i18n,
							importMap: payload.importMap
						});
						clientSchemaMap.set(path, clientBlocks[0]);
						continue;
					}
					if ("type" in subField) {
						const clientFields = createClientFields({
							defaultIDType: payload.config.db.defaultIDType,
							disableAddingID: true,
							fields: [subField],
							i18n,
							importMap: payload.importMap
						});
						clientSchemaMap.set(path, clientFields[0]);
						continue;
					}
					if ("fields" in subField) {
						const clientFields = createClientFields({
							defaultIDType: payload.config.db.defaultIDType,
							disableAddingID: true,
							fields: subField.fields,
							i18n,
							importMap: payload.importMap
						});
						clientSchemaMap.set(path, { fields: clientFields });
						continue;
					}
				}
				break;
			}
			case "tab": {
				const isNamedTab = tabHasName(field);
				traverseFields$1({
					clientSchemaMap,
					config,
					fields: field.fields,
					i18n,
					parentIndexPath: isNamedTab ? "" : indexPath,
					parentSchemaPath: schemaPath,
					payload,
					schemaMap
				});
				break;
			}
			case "tabs":
				traverseFields$1({
					clientSchemaMap,
					config,
					fields: field.tabs.map((tab) => ({
						...tab,
						type: "tab"
					})),
					i18n,
					parentIndexPath: indexPath,
					parentSchemaPath: schemaPath,
					payload,
					schemaMap
				});
				break;
		}
	}
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/buildClientFieldSchemaMap/index.js
var baseAuthFields$1 = [{
	name: "password",
	type: "text",
	required: true
}, {
	name: "confirm-password",
	type: "text",
	required: true
}];
/**
* Flattens the config fields into a map of field schemas
*/
var buildClientFieldSchemaMap = (args) => {
	const { collectionSlug, config, globalSlug, i18n, payload, schemaMap, widgetSlug } = args;
	const clientSchemaMap = /* @__PURE__ */ new Map();
	if (collectionSlug) {
		const matchedCollection = config.collections.find((collection) => collection.slug === collectionSlug);
		if (matchedCollection) {
			let fieldsToSet = matchedCollection?.fields || [];
			if (matchedCollection.auth && !matchedCollection.auth.disableLocalStrategy) {
				baseAuthFields$1[0].label = i18n.t("general:password");
				baseAuthFields$1[1].label = i18n.t("authentication:confirmPassword");
				fieldsToSet = fieldsToSet.concat(baseAuthFields$1);
			}
			clientSchemaMap.set(collectionSlug, { fields: fieldsToSet });
			traverseFields$1({
				clientSchemaMap,
				config,
				fields: fieldsToSet,
				i18n,
				parentIndexPath: "",
				parentSchemaPath: collectionSlug,
				payload,
				schemaMap
			});
		}
	} else if (globalSlug) {
		const matchedGlobal = config.globals.find((global) => global.slug === globalSlug);
		if (matchedGlobal) {
			clientSchemaMap.set(globalSlug, { fields: matchedGlobal.fields });
			traverseFields$1({
				clientSchemaMap,
				config,
				fields: matchedGlobal.fields,
				i18n,
				parentIndexPath: "",
				parentSchemaPath: globalSlug,
				payload,
				schemaMap
			});
		}
	} else if (widgetSlug) {
		const matchedWidget = config.admin?.dashboard?.widgets?.find((widget) => widget.slug === widgetSlug);
		if (matchedWidget?.fields?.length) {
			clientSchemaMap.set(widgetSlug, { fields: matchedWidget.fields });
			traverseFields$1({
				clientSchemaMap,
				config,
				fields: matchedWidget.fields,
				i18n,
				parentIndexPath: "",
				parentSchemaPath: widgetSlug,
				payload,
				schemaMap
			});
		}
	}
	return { clientFieldSchemaMap: clientSchemaMap };
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getClientSchemaMap.js
var cachedClientSchemaMap = globalThis._payload_clientSchemaMap;
if (!cachedClientSchemaMap) cachedClientSchemaMap = globalThis._payload_clientSchemaMap = null;
var getClientSchemaMap = (0, import_react_react_server.cache)((args) => {
	const { collectionSlug, config, globalSlug, i18n, payload, schemaMap, widgetSlug } = args;
	if (!cachedClientSchemaMap || globalThis._payload_doNotCacheClientSchemaMap) cachedClientSchemaMap = /* @__PURE__ */ new Map();
	const cacheKey = collectionSlug || globalSlug || `widget:${widgetSlug}`;
	let cachedEntityClientFieldMap = cachedClientSchemaMap.get(cacheKey);
	if (cachedEntityClientFieldMap) return cachedEntityClientFieldMap;
	cachedEntityClientFieldMap = /* @__PURE__ */ new Map();
	const { clientFieldSchemaMap: entityClientFieldMap } = buildClientFieldSchemaMap({
		collectionSlug,
		config,
		globalSlug,
		i18n,
		payload,
		schemaMap,
		widgetSlug
	});
	cachedClientSchemaMap.set(cacheKey, entityClientFieldMap);
	globalThis._payload_clientSchemaMap = cachedClientSchemaMap;
	globalThis._payload_doNotCacheClientSchemaMap = false;
	return entityClientFieldMap;
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/buildFieldSchemaMap/index.js
var baseAuthFields = [{
	name: "password",
	type: "text",
	required: true,
	validate: password
}, {
	name: "confirm-password",
	type: "text",
	required: true,
	validate: confirmPassword
}];
/**
* Flattens the config fields into a map of field schemas
*/
var buildFieldSchemaMap = (args) => {
	const { collectionSlug, config, globalSlug, i18n, widgetSlug } = args;
	const schemaMap = /* @__PURE__ */ new Map();
	if (collectionSlug) {
		const matchedCollection = config.collections.find((collection) => collection.slug === collectionSlug);
		if (matchedCollection) {
			let fieldsToSet = matchedCollection?.fields || [];
			if (matchedCollection.auth && !matchedCollection.auth.disableLocalStrategy) {
				baseAuthFields[0].label = i18n.t("general:password");
				baseAuthFields[1].label = i18n.t("authentication:confirmPassword");
				fieldsToSet = fieldsToSet.concat(baseAuthFields);
			}
			schemaMap.set(collectionSlug, { fields: fieldsToSet });
			traverseFields$2({
				config,
				fields: fieldsToSet,
				i18n,
				parentIndexPath: "",
				parentSchemaPath: collectionSlug,
				schemaMap
			});
		}
	} else if (globalSlug) {
		const matchedGlobal = config.globals.find((global) => global.slug === globalSlug);
		if (matchedGlobal) {
			schemaMap.set(globalSlug, { fields: matchedGlobal.fields });
			traverseFields$2({
				config,
				fields: matchedGlobal.fields,
				i18n,
				parentIndexPath: "",
				parentSchemaPath: globalSlug,
				schemaMap
			});
		}
	} else if (widgetSlug) {
		const widgetFields = (config.admin?.dashboard?.widgets?.find((widget) => widget.slug === widgetSlug))?.fields;
		if (widgetFields?.length) {
			schemaMap.set(widgetSlug, { fields: widgetFields });
			traverseFields$2({
				config,
				fields: widgetFields,
				i18n,
				parentIndexPath: "",
				parentSchemaPath: widgetSlug,
				schemaMap
			});
		}
	}
	return { fieldSchemaMap: schemaMap };
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getSchemaMap.js
var cachedSchemaMap = globalThis._payload_schemaMap;
if (!cachedSchemaMap) cachedSchemaMap = globalThis._payload_schemaMap = null;
var getSchemaMap = (0, import_react_react_server.cache)((args) => {
	const { collectionSlug, config, globalSlug, i18n, widgetSlug } = args;
	if (!cachedSchemaMap || globalThis._payload_doNotCacheSchemaMap) cachedSchemaMap = /* @__PURE__ */ new Map();
	const cacheKey = collectionSlug || globalSlug || `widget:${widgetSlug}`;
	let cachedEntityFieldMap = cachedSchemaMap.get(cacheKey);
	if (cachedEntityFieldMap) return cachedEntityFieldMap;
	cachedEntityFieldMap = /* @__PURE__ */ new Map();
	const { fieldSchemaMap: entityFieldMap } = buildFieldSchemaMap({
		collectionSlug,
		config,
		globalSlug,
		i18n,
		widgetSlug
	});
	cachedSchemaMap.set(cacheKey, entityFieldMap);
	globalThis._payload_schemaMap = cachedSchemaMap;
	globalThis._payload_doNotCacheSchemaMap = false;
	return entityFieldMap;
});
var Resources = ((React, deps, RemoveDuplicateServerCss, precedence) => {
	return function Resources() {
		return React.createElement(React.Fragment, null, [...deps.css.map((href) => React.createElement("link", {
			key: "css:" + href,
			rel: "stylesheet",
			...precedence ? { precedence } : {},
			href,
			"data-rsc-css-href": href
		})), RemoveDuplicateServerCss && React.createElement(RemoveDuplicateServerCss, { key: "remove-duplicate-css" })]);
	};
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Unauthorized/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Gutter/index.js
var import_jsx_runtime_react_server = require_jsx_runtime_react_server();
var Gutter = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'Gutter' is called on server");
}, "c4bb3c7a56b8", "Gutter");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Unauthorized/index.js
var baseClass = "unauthorized";
function UnauthorizedView({ initPageResult }) {
	const { req: { i18n } } = initPageResult;
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
		className: baseClass,
		children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("div", {
			className: `${baseClass}__content`,
			children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("h1", { children: i18n.t("general:unauthorized") }), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("p", { children: i18n.t("error:notAllowedToAccessPage") })]
		})
	});
}
var UnauthorizedViewWithGutter = (props) => {
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(Gutter, {
		className: `${baseClass}--with-gutter`,
		children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(UnauthorizedView, { ...props })
	});
};
UnauthorizedView = /* #__PURE__ */ __vite_rsc_wrap_css__(UnauthorizedView, "UnauthorizedView");
UnauthorizedViewWithGutter = /* #__PURE__ */ __vite_rsc_wrap_css__(UnauthorizedViewWithGutter, "UnauthorizedViewWithGutter");
function __vite_rsc_wrap_css__(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
export { getClientSchemaMap as i, UnauthorizedViewWithGutter as n, getSchemaMap as r, UnauthorizedView as t };
