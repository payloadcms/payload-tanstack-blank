import { r as __toESM } from "./rolldown-runtime-DJK8HYOj.js";
import { a as require_react_react_server } from "./rsc-CrbjC1on.js";
import { h as getClientConfig } from "./index.rsc-CUDYWvAm.js";
import { Bt as RenderServerComponent, E as DocumentTabLink, It as VersionsPill, Vt as require_jsx_runtime_react_server, Y as NotFoundClient, it as RenderTitle, k as FieldDescription, mt as ShouldRenderTabs, w as DocumentHeaderRoot, zt as WatchCondition } from "./upsertPreferences-BTcoIMIB.js";
import { t as getTranslation } from "./getTranslation-Dh_N5Etc.js";
import { i as getClientSchemaMap, r as getSchemaMap } from "./Unauthorized-DalNEOGT.js";
import { t as fieldSchemasToFormState } from "./fieldSchemasToFormState-CRxPxN-p.js";
import assetsManifest from "../__vite_rsc_assets_manifest.js";
import { extractID, fieldIsHiddenOrDisabled, getSelectMode, hasAutosaveEnabled, hasDraftsEnabled, reduceFieldsToValues } from "payload/shared";
import { MissingEditorProp, UnauthorizedError, canAccessAdmin, combineQueries, createClientField, docAccessOperation, docAccessOperationGlobal, extractAccessFromPermission, extractJWT, formatErrors, logError } from "payload";
//#region \0virtual:vite-rsc/css?type=rsc&id=%2FUsers%2Fjfletcher%2Fpayload%2Fpayload-tanstack-blank%2Fnode_modules%2F.pnpm%2F%40payloadcms%2Bui%404.0.0-internal.fa183d3_%40types%2Breact%4019.2.14_monaco-editor%400.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a%2Fnode_modules%2F%40payloadcms%2Fui%2Fdist%2Felements%2FDocumentHeader%2Findex.js&lang.js
var import_react_react_server = /* @__PURE__ */ __toESM(require_react_react_server());
var Resources$2 = ((React, deps, RemoveDuplicateServerCss, precedence) => {
	return function Resources() {
		return React.createElement(React.Fragment, null, [...deps.css.map((href) => React.createElement("link", {
			key: "css:" + href,
			rel: "stylesheet",
			...precedence ? { precedence } : {},
			href,
			"data-rsc-css-href": href
		})), RemoveDuplicateServerCss && React.createElement(RemoveDuplicateServerCss, { key: "remove-duplicate-css" })]);
	};
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/DocumentHeader/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region \0virtual:vite-rsc/css?type=rsc&id=%2FUsers%2Fjfletcher%2Fpayload%2Fpayload-tanstack-blank%2Fnode_modules%2F.pnpm%2F%40payloadcms%2Bui%404.0.0-internal.fa183d3_%40types%2Breact%4019.2.14_monaco-editor%400.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a%2Fnode_modules%2F%40payloadcms%2Fui%2Fdist%2Felements%2FDocumentHeader%2FTabs%2Findex.js&lang.js
var import_jsx_runtime_react_server = require_jsx_runtime_react_server();
var Resources$1 = ((React, deps, RemoveDuplicateServerCss, precedence) => {
	return function Resources() {
		return React.createElement(React.Fragment, null, [...deps.css.map((href) => React.createElement("link", {
			key: "css:" + href,
			rel: "stylesheet",
			...precedence ? { precedence } : {},
			href,
			"data-rsc-css-href": href
		})), RemoveDuplicateServerCss && React.createElement(RemoveDuplicateServerCss, { key: "remove-duplicate-css" })]);
	};
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/DocumentHeader/Tabs/index.js"], void 0, "vite-rsc/importer-resources");
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
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/DocumentHeader/Tabs/Tab/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/DocumentHeader/Tabs/Tab/index.js
var baseClass$2 = "doc-tab";
var DefaultDocumentTab = (props) => {
	const { apiURL, collectionConfig, globalConfig, permissions, req, tabConfig: { href: tabHref, isActive: tabIsActive, label, newTab, Pill, Pill_Component } } = props;
	let href = typeof tabHref === "string" ? tabHref : "";
	let isActive = typeof tabIsActive === "boolean" ? tabIsActive : false;
	if (typeof tabHref === "function") href = tabHref({
		apiURL,
		collection: collectionConfig,
		global: globalConfig,
		routes: req.payload.config.routes
	});
	if (typeof tabIsActive === "function") isActive = tabIsActive({ href });
	const labelToRender = typeof label === "function" ? label({ t: req.i18n.t }) : label;
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(DocumentTabLink, {
		adminRoute: req.payload.config.routes.admin,
		ariaLabel: labelToRender,
		baseClass: baseClass$2,
		href,
		isActive,
		newTab,
		children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("span", {
			className: `${baseClass$2}__label`,
			children: [labelToRender, Pill || Pill_Component ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(import_react_react_server.Fragment, { children: ["\xA0", RenderServerComponent({
				Component: Pill,
				Fallback: Pill_Component,
				importMap: req.payload.importMap,
				serverProps: {
					i18n: req.i18n,
					payload: req.payload,
					permissions,
					req,
					server: req.server,
					user: req.user
				}
			})] }) : null]
		})
	});
};
DefaultDocumentTab = /* #__PURE__ */ __vite_rsc_wrap_css__$2(DefaultDocumentTab, "DefaultDocumentTab");
function __vite_rsc_wrap_css__$2(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/DocumentHeader/Tabs/tabs/index.js
var documentViewKeys = [
	"api",
	"default",
	"livePreview",
	"versions"
];
var getTabs = ({ collectionConfig, globalConfig }) => {
	const customViews = collectionConfig?.admin?.components?.views?.edit || globalConfig?.admin?.components?.views?.edit || {};
	return [
		{
			tab: {
				href: "",
				label: ({ t }) => t("general:edit"),
				order: 100,
				...customViews?.["default"]?.tab || {}
			},
			viewPath: "/"
		},
		{
			tab: {
				condition: ({ collectionConfig, globalConfig, permissions }) => Boolean(collectionConfig?.versions && permissions?.collections?.[collectionConfig?.slug]?.readVersions || globalConfig?.versions && permissions?.globals?.[globalConfig?.slug]?.readVersions),
				href: "/versions",
				label: ({ t }) => t("version:versions"),
				order: 300,
				Pill_Component: VersionsPill,
				...customViews?.["versions"]?.tab || {}
			},
			viewPath: "/versions"
		},
		{
			tab: {
				href: "/api",
				label: "API",
				order: 400,
				...customViews?.["api"]?.tab || {}
			},
			viewPath: "/api"
		}
	].concat(Object.entries(customViews).reduce((acc, [key, value]) => {
		if (documentViewKeys.includes(key)) return acc;
		if (value?.tab) acc.push({
			tab: value.tab,
			viewPath: "path" in value ? value.path : ""
		});
		return acc;
	}, []))?.sort(({ tab: a }, { tab: b }) => {
		if (a.order === void 0 && b.order === void 0) return 0;
		else if (a.order === void 0) return 1;
		else if (b.order === void 0) return -1;
		return a.order - b.order;
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/DocumentHeader/Tabs/index.js
var baseClass$1 = "doc-tabs";
var DocumentTabs = ({ collectionConfig, globalConfig, permissions, req }) => {
	const { config } = req.payload;
	const tabs = getTabs({
		collectionConfig,
		globalConfig
	});
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(ShouldRenderTabs, { children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
		className: baseClass$1,
		children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
			className: `${baseClass$1}__tabs-container`,
			children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("ul", {
				className: `${baseClass$1}__tabs`,
				children: tabs?.map(({ tab: tabConfig, viewPath }, index) => {
					const { condition } = tabConfig || {};
					if (!(!condition || condition({
						collectionConfig,
						config,
						globalConfig,
						permissions,
						req
					}))) return null;
					if (tabConfig?.Component) return RenderServerComponent({
						clientProps: { path: viewPath },
						Component: tabConfig.Component,
						importMap: req.payload.importMap,
						key: `tab-${index}`,
						serverProps: {
							collectionConfig,
							globalConfig,
							i18n: req.i18n,
							payload: req.payload,
							permissions,
							req,
							server: req.server,
							user: req.user
						}
					});
					return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(DefaultDocumentTab, {
						collectionConfig,
						globalConfig,
						path: viewPath,
						permissions,
						req,
						tabConfig
					}, `tab-${index}`);
				})
			})
		})
	}) });
};
DocumentTabs = /* #__PURE__ */ __vite_rsc_wrap_css__$1(DocumentTabs, "DocumentTabs");
function __vite_rsc_wrap_css__$1(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources$1), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/DocumentHeader/index.js
var baseClass = `doc-header`;
/**
* @internal
*/
var DocumentHeader = (props) => {
	const { AfterHeader, collectionConfig, globalConfig, hideTabs, permissions, req } = props;
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(DocumentHeaderRoot, { children: [
		/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(RenderTitle, { className: `${baseClass}__title` }),
		!hideTabs && /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(DocumentTabs, {
			collectionConfig,
			globalConfig,
			permissions,
			req
		}),
		AfterHeader ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
			className: `${baseClass}__after-header`,
			children: AfterHeader
		}) : null
	] });
};
DocumentHeader = /* #__PURE__ */ __vite_rsc_wrap_css__(DocumentHeader, "DocumentHeader");
function __vite_rsc_wrap_css__(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources$2), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/renderField.js
var defaultUIFieldComponentKeys = [
	"Cell",
	"Description",
	"Field",
	"Filter"
];
var renderField = ({ id, clientFieldSchemaMap, collectionSlug, data, fieldConfig, fieldSchemaMap, fieldState, forceCreateClientField, formState, indexPath, lastRenderedPath, mockRSCs, operation, parentPath, parentSchemaPath, path, permissions, preferences, readOnly: readOnlyFromProps, renderAllFields, req, schemaPath, siblingData }) => {
	const hasBeforeOrAfterInput = fieldConfig.admin?.components && ("beforeInput" in fieldConfig.admin.components || "afterInput" in fieldConfig.admin.components);
	const requiresRender = renderAllFields || !lastRenderedPath || lastRenderedPath !== path || hasBeforeOrAfterInput;
	if (!requiresRender && fieldConfig.type !== "array" && fieldConfig.type !== "blocks") return;
	const clientField = clientFieldSchemaMap && !forceCreateClientField ? clientFieldSchemaMap.get(schemaPath) : createClientField({
		defaultIDType: req.payload.config.db.defaultIDType,
		field: fieldConfig,
		i18n: req.i18n,
		importMap: req.payload.importMap
	});
	const clientProps = {
		field: clientField,
		path,
		permissions,
		readOnly: readOnlyFromProps === true ? true : typeof permissions === "boolean" ? !permissions : !permissions?.[operation],
		schemaPath
	};
	if (fieldState?.customComponents) clientProps.customComponents = fieldState.customComponents;
	if ([
		"array",
		"blocks",
		"collapsible",
		"group",
		"row",
		"tabs"
	].includes(fieldConfig.type)) {
		clientProps.indexPath = indexPath;
		clientProps.parentPath = parentPath;
		clientProps.parentSchemaPath = parentSchemaPath;
	}
	const serverProps = {
		id,
		clientField,
		clientFieldSchemaMap,
		data,
		field: fieldConfig,
		fieldSchemaMap,
		permissions,
		collectionSlug,
		formState,
		i18n: req.i18n,
		operation,
		payload: req.payload,
		preferences,
		req,
		siblingData,
		user: req.user,
		value: "name" in fieldConfig && data?.[fieldConfig.name]
	};
	switch (fieldConfig.type) {
		case "array":
			fieldState?.rows?.forEach((row, rowIndex) => {
				const rowLastRenderedPath = row.lastRenderedPath;
				const rowPath = `${path}.${rowIndex}`;
				if (!(renderAllFields || !rowLastRenderedPath || rowLastRenderedPath !== rowPath)) return;
				row.lastRenderedPath = rowPath;
				if (fieldConfig.admin?.components && "RowLabel" in fieldConfig.admin.components) {
					if (!row.customComponents) row.customComponents = {};
					row.customComponents.RowLabel = !mockRSCs ? RenderServerComponent({
						clientProps,
						Component: fieldConfig.admin.components.RowLabel,
						importMap: req.payload.importMap,
						key: `${rowIndex}`,
						serverProps: {
							...serverProps,
							rowLabel: `${getTranslation(fieldConfig.labels.singular, req.i18n)} ${String(rowIndex + 1).padStart(2, "0")}`,
							rowNumber: rowIndex + 1
						}
					}) : "Mock";
				}
			});
			break;
		case "blocks":
			fieldState?.rows?.forEach((row, rowIndex) => {
				const rowLastRenderedPath = row.lastRenderedPath;
				const rowPath = `${path}.${rowIndex}`;
				if (!(renderAllFields || !rowLastRenderedPath || rowLastRenderedPath !== rowPath)) return;
				row.lastRenderedPath = rowPath;
				const blockTypeToMatch = row.blockType;
				const blockConfig = req.payload.blocks[blockTypeToMatch] ?? fieldConfig.blocks.find((block) => typeof block !== "string" && block.slug === blockTypeToMatch);
				if (blockConfig.admin?.components && "Label" in blockConfig.admin.components) {
					if (!fieldState.rows[rowIndex]?.customComponents) fieldState.rows[rowIndex].customComponents = {};
					fieldState.rows[rowIndex].customComponents.RowLabel = !mockRSCs ? RenderServerComponent({
						clientProps,
						Component: blockConfig.admin.components.Label,
						importMap: req.payload.importMap,
						key: `${rowIndex}`,
						serverProps: {
							...serverProps,
							blockType: row.blockType,
							rowLabel: `${getTranslation(blockConfig.labels.singular, req.i18n)} ${String(rowIndex + 1).padStart(2, "0")}`,
							rowNumber: rowIndex + 1
						}
					}) : "Mock";
				}
			});
			break;
	}
	if (!requiresRender) return;
	/**
	* Set the `lastRenderedPath` equal to the new path of the field, this will prevent it from being rendered again
	*/
	fieldState.lastRenderedPath = path;
	if (fieldIsHiddenOrDisabled(clientField)) return;
	/**
	* Only create the `customComponents` object if needed.
	* This will prevent unnecessary data from being transferred to the client.
	*/
	if (fieldConfig.admin) {
		if ((Object.keys(fieldConfig.admin.components || {}).length > 0 || fieldConfig.type === "richText" || "description" in fieldConfig.admin && typeof fieldConfig.admin.description === "function") && !fieldState?.customComponents) fieldState.customComponents = {};
	}
	switch (fieldConfig.type) {
		case "richText":
			if (!fieldConfig?.editor) throw new MissingEditorProp(fieldConfig);
			if (typeof fieldConfig?.editor === "function") throw new Error("Attempted to access unsanitized rich text editor.");
			if (!fieldConfig.admin) fieldConfig.admin = {};
			if (!fieldConfig.admin.components) fieldConfig.admin.components = {};
			fieldState.customComponents.Field = !mockRSCs ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(WatchCondition, {
				path,
				children: RenderServerComponent({
					clientProps,
					Component: fieldConfig.editor.FieldComponent,
					importMap: req.payload.importMap,
					serverProps: {
						...serverProps,
						sanitizedEditorConfig: "editorConfig" in fieldConfig.editor ? fieldConfig.editor.editorConfig : void 0
					}
				})
			}) : "Mock";
			break;
		case "ui":
			if (fieldConfig?.admin?.components) for (const key in fieldConfig.admin.components) {
				if (key in defaultUIFieldComponentKeys) continue;
				const Component = fieldConfig.admin.components[key];
				fieldState.customComponents[key] = !mockRSCs ? RenderServerComponent({
					clientProps,
					Component,
					importMap: req.payload.importMap,
					key: `field.admin.components.${key}`,
					serverProps
				}) : "Mock";
			}
			break;
		default: break;
	}
	if (fieldConfig.admin) {
		if ("description" in fieldConfig.admin && typeof fieldConfig.admin?.description === "function") fieldState.customComponents.Description = !mockRSCs ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(FieldDescription, {
			description: fieldConfig.admin?.description({
				i18n: req.i18n,
				t: req.i18n.t
			}),
			path
		}) : "Mock";
		if (fieldConfig.admin?.components) {
			if ("afterInput" in fieldConfig.admin.components) fieldState.customComponents.AfterInput = !mockRSCs ? RenderServerComponent({
				clientProps,
				Component: fieldConfig.admin.components.afterInput,
				importMap: req.payload.importMap,
				key: `field.admin.components.afterInput.${path}`,
				serverProps
			}) : "Mock";
			if ("beforeInput" in fieldConfig.admin.components) fieldState.customComponents.BeforeInput = !mockRSCs ? RenderServerComponent({
				clientProps,
				Component: fieldConfig.admin.components.beforeInput,
				importMap: req.payload.importMap,
				key: `field.admin.components.beforeInput.${path}`,
				serverProps
			}) : "Mock";
			if ("Description" in fieldConfig.admin.components) fieldState.customComponents.Description = !mockRSCs ? RenderServerComponent({
				clientProps,
				Component: fieldConfig.admin.components.Description,
				importMap: req.payload.importMap,
				key: "field.admin.components.Description",
				serverProps
			}) : "Mock";
			if ("Error" in fieldConfig.admin.components) fieldState.customComponents.Error = !mockRSCs ? RenderServerComponent({
				clientProps,
				Component: fieldConfig.admin.components.Error,
				importMap: req.payload.importMap,
				key: "field.admin.components.Error",
				serverProps
			}) : "Mock";
			if ("Label" in fieldConfig.admin.components) fieldState.customComponents.Label = !mockRSCs ? RenderServerComponent({
				clientProps,
				Component: fieldConfig.admin.components.Label,
				importMap: req.payload.importMap,
				key: "field.admin.components.Label",
				serverProps
			}) : "Mock";
			if ("Field" in fieldConfig.admin.components) fieldState.customComponents.Field = !mockRSCs ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(WatchCondition, {
				path,
				children: RenderServerComponent({
					clientProps,
					Component: fieldConfig.admin.components.Field,
					importMap: req.payload.importMap,
					key: "field.admin.components.Field",
					serverProps
				})
			}) : "Mock";
		}
	}
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/handleLivePreview.js
var getLivePreviewConfig = ({ collectionConfig, config, globalConfig, isLivePreviewEnabled }) => ({
	...isLivePreviewEnabled ? config.admin.livePreview : {},
	...collectionConfig?.admin?.livePreview || {},
	...globalConfig?.admin?.livePreview || {}
});
/**
* Multi-level check to determine whether live preview is enabled on a collection or global.
* For example, live preview can be enabled at both the root config level, or on the entity's config.
* If a collectionConfig/globalConfig is provided, checks if it is enabled at the root level,
* or on the entity's own config.
*/
var isLivePreviewEnabled = ({ collectionConfig, config, globalConfig }) => {
	if (globalConfig) return Boolean(config.admin?.livePreview?.globals?.includes(globalConfig.slug) || globalConfig.admin?.livePreview);
	if (collectionConfig) return Boolean(config.admin?.livePreview?.collections?.includes(collectionConfig.slug) || collectionConfig.admin?.livePreview);
};
/**
* 1. Looks up the relevant live preview config, which could have been enabled:
*   a. At the root level, e.g. `collections: ['posts']`
*   b. On the collection or global config, e.g. `admin: { livePreview: { ... } }`
* 2. Determines if live preview is enabled, and if not, early returns.
* 3. Merges the config with the root config, if necessary.
* 4. Executes the `url` function, if necessary.
*
* Notice: internal function only. Subject to change at any time. Use at your own risk.
*/
var handleLivePreview = async ({ collectionSlug, config, data, globalSlug, operation, req }) => {
	const collectionConfig = collectionSlug ? req.payload.collections[collectionSlug]?.config : void 0;
	const globalConfig = globalSlug ? config.globals.find((g) => g.slug === globalSlug) : void 0;
	const enabled = isLivePreviewEnabled({
		collectionConfig,
		config,
		globalConfig
	});
	if (!enabled) return {};
	const livePreviewConfig = getLivePreviewConfig({
		collectionConfig,
		config,
		globalConfig,
		isLivePreviewEnabled: enabled
	});
	let livePreviewURL;
	if (typeof livePreviewConfig?.url === "string") livePreviewURL = livePreviewConfig.url;
	if (typeof livePreviewConfig?.url === "function" && operation !== "create") try {
		const result = await livePreviewConfig.url({
			collectionConfig,
			data,
			globalConfig,
			locale: {
				code: req.locale,
				label: ""
			},
			payload: req.payload,
			req
		});
		if (typeof result === "string") livePreviewURL = result;
	} catch (err) {
		req.payload.logger.error({
			err,
			msg: `There was an error executing the live preview URL function for ${collectionSlug || globalSlug}`
		});
	}
	return {
		isLivePreviewEnabled: enabled,
		livePreviewConfig,
		livePreviewURL
	};
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/handlePreview.js
/**
* Multi-level check to determine whether live preview is enabled on a collection or global.
* For example, live preview can be enabled at both the root config level, or on the entity's config.
* If a collectionConfig/globalConfig is provided, checks if it is enabled at the root level,
* or on the entity's own config.
*/
var isPreviewEnabled = ({ collectionConfig, globalConfig }) => {
	if (globalConfig) return Boolean(globalConfig.admin?.preview);
	if (collectionConfig) return Boolean(collectionConfig.admin?.preview);
};
/**
* 1. Looks up the relevant live preview config, which could have been enabled:
*   a. At the root level, e.g. `collections: ['posts']`
*   b. On the collection or global config, e.g. `admin: { livePreview: { ... } }`
* 2. Determines if live preview is enabled, and if not, early returns.
* 3. Merges the config with the root config, if necessary.
* 4. Executes the `url` function, if necessary.
*
* Notice: internal function only. Subject to change at any time. Use at your own risk.
*/
var handlePreview = async ({ collectionSlug, config, data, globalSlug, operation, req }) => {
	const collectionConfig = collectionSlug ? req.payload.collections[collectionSlug]?.config : void 0;
	const globalConfig = globalSlug ? config.globals.find((g) => g.slug === globalSlug) : void 0;
	const enabled = isPreviewEnabled({
		collectionConfig,
		globalConfig
	});
	if (!enabled) return {};
	const generatePreviewURL = collectionConfig?.admin?.preview || globalConfig?.admin?.preview;
	const token = extractJWT(req);
	let previewURL;
	if (typeof generatePreviewURL === "function" && operation !== "create") try {
		const result = await generatePreviewURL(data, {
			locale: req.locale,
			req,
			token
		});
		if (typeof result === "string") previewURL = result;
	} catch (err) {
		req.payload.logger.error({
			err,
			msg: `There was an error executing the live preview URL function for ${collectionSlug || globalSlug}`
		});
	}
	return {
		isPreviewEnabled: enabled,
		previewURL
	};
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/handleFormStateLocking.js
var lockDurationDefault = 300;
var handleFormStateLocking = async ({ id, collectionSlug, globalSlug, req, updateLastEdited }) => {
	let result;
	if (!req.payload.collections?.["payload-locked-documents"]) return result;
	if (id || globalSlug) {
		let lockedDocumentQuery;
		if (collectionSlug) lockedDocumentQuery = { and: [{ "document.relationTo": { equals: collectionSlug } }, { "document.value": { equals: id } }] };
		else if (globalSlug) lockedDocumentQuery = { and: [{ globalSlug: { equals: globalSlug } }] };
		const lockDocumentsProp = collectionSlug ? req.payload.collections?.[collectionSlug]?.config.lockDocuments : req.payload.config.globals.find((g) => g.slug === globalSlug)?.lockDocuments;
		const lockDurationInMilliseconds = (typeof lockDocumentsProp === "object" ? lockDocumentsProp.duration : lockDurationDefault) * 1e3;
		const now = (/* @__PURE__ */ new Date()).getTime();
		if (lockedDocumentQuery) {
			lockedDocumentQuery.and.push({ updatedAt: { greater_than: new Date(now - lockDurationInMilliseconds).toISOString() } });
			const lockedDocument = await req.payload.find({
				collection: "payload-locked-documents",
				depth: 1,
				limit: 1,
				overrideAccess: false,
				pagination: false,
				user: req.user,
				where: lockedDocumentQuery
			});
			if (lockedDocument.docs && lockedDocument.docs.length > 0) {
				result = {
					isLocked: true,
					lastEditedAt: lockedDocument.docs[0]?.updatedAt,
					user: lockedDocument.docs[0]?.user?.value
				};
				const lockOwnerID = typeof lockedDocument.docs[0]?.user?.value === "object" ? lockedDocument.docs[0]?.user?.value?.id : lockedDocument.docs[0]?.user?.value;
				if (updateLastEdited && req.user && lockOwnerID === req.user.id) await req.payload.db.updateOne({
					id: lockedDocument.docs[0].id,
					collection: "payload-locked-documents",
					data: {},
					returning: false
				});
			} else {
				let deleteExpiredLocksQuery;
				if (collectionSlug) deleteExpiredLocksQuery = { and: [{ "document.relationTo": { equals: collectionSlug } }, { updatedAt: { less_than: new Date(now - lockDurationInMilliseconds).toISOString() } }] };
				else if (globalSlug) deleteExpiredLocksQuery = { and: [{ globalSlug: { equals: globalSlug } }, { updatedAt: { less_than: new Date(now - lockDurationInMilliseconds).toISOString() } }] };
				await req.payload.db.deleteMany({
					collection: "payload-locked-documents",
					where: deleteExpiredLocksQuery
				});
				await req.payload.db.create({
					collection: "payload-locked-documents",
					data: {
						document: collectionSlug ? {
							relationTo: collectionSlug,
							value: id
						} : void 0,
						globalSlug: globalSlug ? globalSlug : void 0,
						user: {
							relationTo: req.user.collection,
							value: req.user.id
						}
					},
					returning: false
				});
				result = {
					isLocked: true,
					lastEditedAt: (/* @__PURE__ */ new Date()).toISOString(),
					user: req.user
				};
			}
		}
	}
	return result;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/handleStaleDataCheck.js
var handleStaleDataCheck = async ({ id, collectionSlug, globalSlug, originalUpdatedAt, req }) => {
	let currentUpdatedAt;
	try {
		if (collectionSlug && id) {
			const collection = req.payload.config.collections.find((c) => c.slug === collectionSlug);
			const collectionHasDrafts = collection ? hasDraftsEnabled(collection) : false;
			currentUpdatedAt = (await req.payload.findByID({
				id,
				collection: collectionSlug,
				depth: 0,
				draft: collectionHasDrafts,
				overrideAccess: false,
				select: { updatedAt: true },
				user: req.user
			}))?.updatedAt;
		} else if (globalSlug) {
			const global = req.payload.config.globals.find((g) => g.slug === globalSlug);
			const globalHasDrafts = global ? hasDraftsEnabled(global) : false;
			currentUpdatedAt = (await req.payload.findGlobal({
				slug: globalSlug,
				depth: 0,
				draft: globalHasDrafts,
				overrideAccess: false,
				select: { updatedAt: true },
				user: req.user
			}))?.updatedAt;
		}
		return {
			currentUpdatedAt,
			isStale: Boolean(currentUpdatedAt && currentUpdatedAt !== originalUpdatedAt)
		};
	} catch (err) {
		req.payload.logger.error({
			err,
			msg: "Error checking for stale data"
		});
		return {
			currentUpdatedAt: originalUpdatedAt,
			isStale: false
		};
	}
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/buildFormState.js
var buildFormStateHandler = async (args) => {
	const { req } = args;
	try {
		await canAccessAdmin({ req });
		return await buildFormState(args);
	} catch (err) {
		req.payload.logger.error({
			err,
			msg: `There was an error building form state`
		});
		if (err.message === "Could not find field schema for given path") return { message: err.message };
		if (err.message === "Unauthorized") throw new UnauthorizedError();
		return formatErrors(err);
	}
};
var buildFormState = async (args) => {
	const { id: idFromArgs, checkForStaleData, collectionSlug, data: incomingData, docPermissions, docPreferences, documentFormState, formState, globalSlug, initialBlockData, initialBlockFormState, mockRSCs, operation, originalUpdatedAt, readOnly, renderAllFields, req, req: { i18n, payload, payload: { config } }, returnLivePreviewURL, returnLockStatus, returnPreviewURL, widgetSlug, schemaPath = collectionSlug || globalSlug || widgetSlug, select, skipClientConfigAuth, skipValidation, updateLastEdited } = args;
	const selectMode = select ? getSelectMode(select) : void 0;
	if (!collectionSlug && !globalSlug && !widgetSlug) throw new Error("Either collectionSlug, globalSlug, or widgetSlug must be provided");
	const schemaMap = getSchemaMap({
		collectionSlug,
		config,
		globalSlug,
		i18n,
		widgetSlug
	});
	const clientSchemaMap = getClientSchemaMap({
		collectionSlug,
		config: getClientConfig({
			config,
			i18n,
			importMap: req.payload.importMap,
			user: skipClientConfigAuth ? true : req.user
		}),
		globalSlug,
		i18n,
		payload,
		schemaMap,
		widgetSlug
	});
	const id = collectionSlug ? idFromArgs : void 0;
	const fieldOrEntityConfig = schemaMap.get(schemaPath);
	if (!fieldOrEntityConfig) throw new Error(`Could not find "${schemaPath}" in the fieldSchemaMap`);
	if ((!("fields" in fieldOrEntityConfig) || !fieldOrEntityConfig.fields || !fieldOrEntityConfig.fields.length) && "type" in fieldOrEntityConfig && fieldOrEntityConfig.type !== "blocks") throw new Error(`The field found in fieldSchemaMap for "${schemaPath}" does not contain any subfields.`);
	const data = incomingData || reduceFieldsToValues(formState, true);
	let documentData = void 0;
	if (documentFormState) documentData = reduceFieldsToValues(documentFormState, true);
	let blockData = initialBlockData;
	if (initialBlockFormState) blockData = reduceFieldsToValues(initialBlockFormState, true);
	/**
	* When building state for sub schemas we need to adjust:
	* - `fields`
	* - `parentSchemaPath`
	* - `parentPath`
	*
	* Type assertion is fine because we wrap sub schemas in an array
	* so we can safely map over them within `fieldSchemasToFormState`
	*/
	const fields = Array.isArray(fieldOrEntityConfig) ? fieldOrEntityConfig : "fields" in fieldOrEntityConfig ? fieldOrEntityConfig.fields : [fieldOrEntityConfig];
	if (!data.id && id) data.id = id;
	const formStateResult = await fieldSchemasToFormState({
		id,
		clientFieldSchemaMap: clientSchemaMap,
		collectionSlug,
		data,
		documentData,
		fields,
		fieldSchemaMap: schemaMap,
		globalSlug,
		initialBlockData: blockData,
		mockRSCs,
		operation,
		permissions: docPermissions?.fields || {},
		preferences: docPreferences || { fields: {} },
		previousFormState: formState,
		readOnly,
		renderAllFields,
		renderFieldFn: renderField,
		req,
		schemaPath,
		select,
		selectMode,
		skipValidation
	});
	if (collectionSlug && formState) {
		if (payload.collections[collectionSlug]?.config?.upload && formState.file) formStateResult.file = formState.file;
	}
	let lockedStateResult;
	if (returnLockStatus) lockedStateResult = await handleFormStateLocking({
		id,
		collectionSlug,
		globalSlug,
		req,
		updateLastEdited
	});
	let staleDataStateResult;
	if (checkForStaleData && originalUpdatedAt && (collectionSlug && id || globalSlug)) staleDataStateResult = await handleStaleDataCheck({
		id,
		collectionSlug,
		globalSlug,
		originalUpdatedAt,
		req
	});
	const res = {
		lockedState: lockedStateResult,
		staleDataState: staleDataStateResult,
		state: formStateResult
	};
	if (returnLivePreviewURL) {
		const { livePreviewURL } = await handleLivePreview({
			collectionSlug,
			config,
			data,
			globalSlug,
			req
		});
		if (livePreviewURL) res.livePreviewURL = livePreviewURL;
	}
	if (returnPreviewURL) {
		const { previewURL } = await handlePreview({
			collectionSlug,
			config,
			data,
			globalSlug,
			req
		});
		if (previewURL) res.previewURL = previewURL;
	}
	return res;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/sanitizeID.js
function sanitizeID(id) {
	if (id === void 0) return id;
	if (typeof id === "number") return id;
	return decodeURIComponent(id);
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getDocPreferences.js
var getDocPreferences = async ({ id, collectionSlug, globalSlug, payload, user }) => {
	let preferencesKey;
	if (collectionSlug && id) preferencesKey = `collection-${collectionSlug}-${id}`;
	if (globalSlug) preferencesKey = `global-${globalSlug}`;
	if (preferencesKey) {
		const preferencesResult = await payload.find({
			collection: "payload-preferences",
			depth: 0,
			limit: 1,
			where: { and: [
				{ key: { equals: preferencesKey } },
				{ "user.relationTo": { equals: user.collection } },
				{ "user.value": { equals: sanitizeID(user.id) } }
			] }
		});
		if (preferencesResult?.docs?.[0]?.value) return preferencesResult.docs[0].value;
	}
	return { fields: {} };
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getDocumentData.js
var getDocumentData = async ({ id: idArg, collectionSlug, globalSlug, locale, payload, req, segments, user }) => {
	const id = sanitizeID(idArg);
	let resolvedData = null;
	const { transactionID, ...rest } = req;
	const isTrashedDoc = segments?.[2] === "trash" && typeof segments?.[3] === "string";
	try {
		if (collectionSlug && id) resolvedData = await payload.findByID({
			id,
			collection: collectionSlug,
			depth: 0,
			draft: true,
			fallbackLocale: false,
			locale: locale?.code,
			overrideAccess: false,
			req: { ...rest },
			trash: isTrashedDoc ? true : false,
			user
		});
		if (globalSlug) resolvedData = await payload.findGlobal({
			slug: globalSlug,
			depth: 0,
			draft: true,
			fallbackLocale: false,
			locale: locale?.code,
			overrideAccess: false,
			req: { ...rest },
			user
		});
	} catch (err) {
		logError({
			err,
			payload
		});
	}
	return resolvedData;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/hasSavePermission.js
var hasSavePermission = (args) => {
	const { collectionSlug, docPermissions, globalSlug, isEditing } = args;
	if (collectionSlug) return Boolean(isEditing && docPermissions?.update || !isEditing && docPermissions?.create);
	if (globalSlug) return Boolean(docPermissions?.update);
	return false;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/isEditing.js
var isEditing = ({ id, collectionSlug, globalSlug }) => Boolean(globalSlug || collectionSlug && !!id);
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getDocumentPermissions.js
var getDocumentPermissions = async (args) => {
	const { id, collectionConfig, data = {}, globalConfig, req } = args;
	let docPermissions;
	let hasPublishPermission = false;
	let hasTrashPermission = false;
	let hasDeletePermission = false;
	if (collectionConfig) try {
		docPermissions = await docAccessOperation({
			id,
			collection: { config: collectionConfig },
			data: {
				...data,
				_status: "draft"
			},
			req
		});
		if (hasDraftsEnabled(collectionConfig)) hasPublishPermission = (await docAccessOperation({
			id,
			collection: { config: collectionConfig },
			data: {
				...data,
				_status: "published"
			},
			req
		})).update;
		if (collectionConfig.trash) {
			const { deletedAt: _, ...dataWithoutDeletedAt } = data || {};
			const [trashPermissionResult, deletePermissionResult] = await Promise.all([docAccessOperation({
				id,
				collection: { config: collectionConfig },
				data: {
					...data,
					deletedAt: (/* @__PURE__ */ new Date()).toISOString()
				},
				req
			}), docAccessOperation({
				id,
				collection: { config: collectionConfig },
				data: dataWithoutDeletedAt,
				req
			})]);
			hasTrashPermission = trashPermissionResult.delete;
			hasDeletePermission = deletePermissionResult.delete;
		} else {
			hasDeletePermission = "delete" in docPermissions ? Boolean(docPermissions.delete) : false;
			hasTrashPermission = false;
		}
	} catch (err) {
		logError({
			err,
			payload: req.payload
		});
	}
	if (globalConfig) try {
		docPermissions = await docAccessOperationGlobal({
			data,
			globalConfig,
			req
		});
		if (hasDraftsEnabled(globalConfig)) hasPublishPermission = (await docAccessOperationGlobal({
			data: {
				...data,
				_status: "published"
			},
			globalConfig,
			req
		})).update;
		hasDeletePermission = false;
		hasTrashPermission = false;
	} catch (err) {
		logError({
			err,
			payload: req.payload
		});
	}
	const hasSavePermission$1 = hasSavePermission({
		collectionSlug: collectionConfig?.slug,
		docPermissions,
		globalSlug: globalConfig?.slug,
		isEditing: isEditing({
			id,
			collectionSlug: collectionConfig?.slug,
			globalSlug: globalConfig?.slug
		})
	});
	return {
		docPermissions,
		hasDeletePermission,
		hasPublishPermission,
		hasSavePermission: hasSavePermission$1,
		hasTrashPermission
	};
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getIsLocked.js
var getIsLocked = async ({ id, collectionConfig, globalConfig, isEditing, req }) => {
	const entityConfig = collectionConfig || globalConfig;
	const entityHasLockingEnabled = entityConfig?.lockDocuments !== void 0 ? entityConfig?.lockDocuments : true;
	if (!req.payload.collections?.["payload-locked-documents"]) return { isLocked: false };
	if (!entityHasLockingEnabled || !isEditing) return { isLocked: false };
	const where = {};
	const lockDurationInMilliseconds = (typeof entityConfig.lockDocuments === "object" ? entityConfig.lockDocuments.duration : 300) * 1e3;
	const now = (/* @__PURE__ */ new Date()).getTime();
	if (globalConfig) where.and = [{ globalSlug: { equals: globalConfig.slug } }, { updatedAt: { greater_than: new Date(now - lockDurationInMilliseconds) } }];
	else where.and = [
		{ "document.value": { equals: sanitizeID(id) } },
		{ "document.relationTo": { equals: collectionConfig.slug } },
		{ updatedAt: { greater_than: new Date(now - lockDurationInMilliseconds) } }
	];
	const { docs } = await req.payload.find({
		collection: "payload-locked-documents",
		depth: 1,
		overrideAccess: false,
		req,
		where
	});
	if (docs.length > 0) {
		const currentEditor = docs[0].user?.value;
		const lastUpdateTime = new Date(docs[0].updatedAt).getTime();
		if (extractID(currentEditor) !== req.user.id) return {
			currentEditor,
			isLocked: true,
			lastUpdateTime
		};
	}
	return { isLocked: false };
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/traverseForLocalizedFields.js
var traverseForLocalizedFields = (fields) => {
	for (const field of fields) {
		if ("localized" in field && field.localized) return true;
		switch (field.type) {
			case "array":
			case "collapsible":
			case "group":
			case "row":
				if (field.fields && traverseForLocalizedFields(field.fields)) return true;
				break;
			case "blocks":
				if (field.blocks) for (const block of field.blocks) {
					if (typeof block === "string") continue;
					if (block.fields && traverseForLocalizedFields(block.fields)) return true;
				}
				break;
			case "tabs":
				if (field.tabs) for (const tab of field.tabs) {
					if ("localized" in tab && tab.localized) return true;
					if ("fields" in tab && tab.fields && traverseForLocalizedFields(tab.fields)) return true;
				}
				break;
		}
	}
	return false;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getVersions.js
var getVersions = async ({ id: idArg, collectionConfig, doc, docPermissions, globalConfig, locale, payload, user }) => {
	const id = sanitizeID(idArg);
	let publishedDoc;
	let hasPublishedDoc = false;
	let mostRecentVersionIsAutosaved = false;
	let unpublishedVersionCount = 0;
	let versionCount = 0;
	const entityConfig = collectionConfig || globalConfig;
	const versionsConfig = entityConfig?.versions;
	const hasLocalizedFields = traverseForLocalizedFields(entityConfig.fields);
	const localizedDraftsEnabled = hasDraftsEnabled(entityConfig) && typeof payload.config.localization === "object" && hasLocalizedFields;
	if (!Boolean(versionsConfig && docPermissions?.readVersions)) return {
		hasPublishedDoc: localizedDraftsEnabled ? doc?._status === "published" : doc?._status !== "draft",
		mostRecentVersionIsAutosaved,
		unpublishedVersionCount,
		versionCount
	};
	if (collectionConfig) {
		if (!id) return {
			hasPublishedDoc,
			mostRecentVersionIsAutosaved,
			unpublishedVersionCount,
			versionCount
		};
		if (hasDraftsEnabled(collectionConfig)) {
			if (doc?._status === "published") publishedDoc = doc;
			else publishedDoc = (await payload.find({
				collection: collectionConfig.slug,
				depth: 0,
				limit: 1,
				locale: locale || void 0,
				pagination: false,
				select: { updatedAt: true },
				user,
				where: { and: [{ _status: { equals: "published" } }, { id: { equals: id } }] }
			}))?.docs?.[0];
			if (publishedDoc) hasPublishedDoc = true;
			if (hasAutosaveEnabled(collectionConfig)) {
				const where = { and: [{ parent: { equals: id } }] };
				const mostRecentVersion = await payload.findVersions({
					collection: collectionConfig.slug,
					depth: 0,
					limit: 1,
					locale,
					select: { autosave: true },
					user,
					where: combineQueries(where, extractAccessFromPermission(docPermissions.readVersions))
				});
				if (mostRecentVersion.docs[0] && "autosave" in mostRecentVersion.docs[0] && mostRecentVersion.docs[0].autosave) mostRecentVersionIsAutosaved = true;
			}
			if (publishedDoc?.updatedAt) ({totalDocs: unpublishedVersionCount} = await payload.countVersions({
				collection: collectionConfig.slug,
				locale,
				user,
				where: combineQueries({ and: [
					{ parent: { equals: id } },
					{ "version._status": { equals: "draft" } },
					{ updatedAt: { greater_than: publishedDoc.updatedAt } }
				] }, extractAccessFromPermission(docPermissions.readVersions))
			}));
		}
		const countVersionsWhere = { and: [{ parent: { equals: id } }] };
		({totalDocs: versionCount} = await payload.countVersions({
			collection: collectionConfig.slug,
			locale,
			user,
			where: combineQueries(countVersionsWhere, extractAccessFromPermission(docPermissions.readVersions))
		}));
	}
	if (globalConfig) {
		if (hasDraftsEnabled(globalConfig)) {
			if (doc?._status === "published") publishedDoc = doc;
			else publishedDoc = await payload.findGlobal({
				slug: globalConfig.slug,
				depth: 0,
				locale,
				select: { updatedAt: true },
				user
			});
			if (publishedDoc?._status === "published") hasPublishedDoc = true;
			if (hasAutosaveEnabled(globalConfig)) {
				const mostRecentVersion = await payload.findGlobalVersions({
					slug: globalConfig.slug,
					limit: 1,
					locale,
					select: { autosave: true },
					user
				});
				if (mostRecentVersion.docs[0] && "autosave" in mostRecentVersion.docs[0] && mostRecentVersion.docs[0].autosave) mostRecentVersionIsAutosaved = true;
			}
			if (publishedDoc?.updatedAt) ({totalDocs: unpublishedVersionCount} = await payload.countGlobalVersions({
				global: globalConfig.slug,
				locale,
				user,
				where: combineQueries({ and: [{ "version._status": { equals: "draft" } }, { updatedAt: { greater_than: publishedDoc.updatedAt } }] }, extractAccessFromPermission(docPermissions.readVersions))
			}));
		}
		({totalDocs: versionCount} = await payload.countGlobalVersions({
			global: globalConfig.slug,
			locale,
			user
		}));
	}
	return {
		hasPublishedDoc,
		mostRecentVersionIsAutosaved,
		unpublishedVersionCount,
		versionCount
	};
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/NotFound/index.js
function NotFoundView(_props) {
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(NotFoundClient, {});
}
//#endregion
export { isEditing as a, sanitizeID as c, handlePreview as d, handleLivePreview as f, getDocumentPermissions as i, buildFormState as l, DocumentHeader as m, getVersions as n, getDocumentData as o, renderField as p, getIsLocked as r, getDocPreferences as s, NotFoundView as t, buildFormStateHandler as u };
