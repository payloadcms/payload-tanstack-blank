import { r as __toESM } from "./rolldown-runtime-DJK8HYOj.js";
import { a as require_react_react_server } from "./rsc-CrbjC1on.js";
import { Bt as RenderServerComponent, J as NavWrapper, O as EntityVisibilityProvider, S as DefaultTemplateWrapper, Vt as require_jsx_runtime_react_server, d as AppHeader, f as BulkUploadProvider, g as CommandPalette, ht as SidebarTabsClient, pt as SettingsMenuButton, u as ActionsProvider, x as DefaultNavClient } from "./upsertPreferences-BTcoIMIB.js";
import { t as getNavPrefs } from "./getNavPrefs-BkOEHYMi.js";
import { t as getTranslation } from "./getTranslation-Dh_N5Etc.js";
import { t as groupNavItems } from "./groupNavItems-BvoG6M55.js";
import { a as isOverflow, c as merge, i as decode, n as combine, o as isRegExp, r as compact, s as maybeMap } from "./stringify-Cj7Z6Zfm.js";
import assetsManifest from "../__vite_rsc_assets_manifest.js";
import { isUserMenuSettingsGroup } from "payload/shared";
import { EntityType } from "payload";
//#region \0virtual:vite-rsc/css?type=rsc&id=%2FUsers%2Fjfletcher%2Fpayload%2Fpayload-tanstack-blank%2Fnode_modules%2F.pnpm%2F%40payloadcms%2Bui%404.0.0-internal.fa183d3_%40types%2Breact%4019.2.14_monaco-editor%400.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a%2Fnode_modules%2F%40payloadcms%2Fui%2Fdist%2Felements%2FNav%2Findex.js&lang.js
var import_jsx_runtime_react_server = require_jsx_runtime_react_server();
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
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Nav/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/icons/AlignJustified/index.js
var paths = {
	16: "M5 4.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 5 8m6 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5",
	24: "M18.5 15C18.7761 15 19 15.2239 19 15.5C19 15.7761 18.7761 16 18.5 16H5.5C5.22386 16 5 15.7761 5 15.5C5 15.2239 5.22386 15 5.5 15H18.5ZM18.5 11C18.7761 11 19 11.2239 19 11.5C19 11.7761 18.7761 12 18.5 12H5.5C5.22386 12 5 11.7761 5 11.5C5 11.2239 5.22386 11 5.5 11H18.5ZM18.5 7C18.7761 7 19 7.22386 19 7.5C19 7.77614 18.7761 8 18.5 8H5.5C5.22386 8 5 7.77614 5 7.5C5 7.22386 5.22386 7 5.5 7H18.5Z"
};
var AlignJustifiedIcon = ({ className, size = 16 }) => /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("svg", {
	className: [
		"icon",
		"icon--align-justified",
		className
	].filter(Boolean).join(" "),
	fill: "none",
	height: size,
	viewBox: `0 0 ${size} ${size}`,
	width: size,
	xmlns: "http://www.w3.org/2000/svg",
	children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("path", {
		clipRule: "evenodd",
		d: paths[size],
		fill: "currentColor",
		fillRule: "evenodd"
	})
});
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
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Nav/SidebarTabs/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Nav/SidebarTabs/index.js
var baseClass$2 = "sidebar-tabs";
var SidebarTabs = (props) => {
	const { documentSubViewType, i18n, locale, navPreferences, params, payload, permissions, req, searchParams, tabs, user, viewType } = props;
	const preferredTabSlug = navPreferences.activeTab || tabs.find((tab) => tab.isDefaultActive)?.slug || tabs[0]?.slug;
	const activeTab = tabs.find((t) => t.slug === preferredTabSlug) || tabs.find((tab) => tab.isDefaultActive) || tabs[0];
	const initialActiveTabID = activeTab?.slug || tabs[0]?.slug;
	const initialTabContents = {};
	const renderComponent = (component) => {
		if (/*#__PURE__*/ import_react_react_server.isValidElement(component)) return component;
		else return RenderServerComponent({
			clientProps: {
				documentSubViewType,
				viewType
			},
			Component: component,
			importMap: payload.importMap,
			serverProps: {
				i18n,
				locale,
				params,
				payload,
				permissions,
				req,
				searchParams,
				user
			}
		});
	};
	for (const tab of tabs) if (/*#__PURE__*/ import_react_react_server.isValidElement(tab.components.Content)) initialTabContents[tab.slug] = tab.components.Content;
	if (activeTab && !/*#__PURE__*/ import_react_react_server.isValidElement(activeTab.components.Content)) initialTabContents[activeTab.slug] = renderComponent(activeTab.components.Content);
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(SidebarTabsClient, {
		baseClass: baseClass$2,
		initialActiveTabID,
		initialTabContents,
		tabs: tabs.map((tab) => {
			const labelText = tab.label ? getTranslation(tab.label, i18n) : tab.slug;
			const isLazyLoadable = !/*#__PURE__*/ import_react_react_server.isValidElement(tab.components.Content);
			return {
				slug: tab.slug,
				icon: renderComponent(tab.components.Icon),
				isDefaultActive: tab.isDefaultActive,
				label: labelText,
				lazyLoadable: isLazyLoadable
			};
		})
	});
};
SidebarTabs = /* #__PURE__ */ __vite_rsc_wrap_css__$2(SidebarTabs, "SidebarTabs");
function __vite_rsc_wrap_css__$2(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources$1), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Nav/index.js
var baseClass$1 = "nav";
var DefaultNav = async (props) => {
	const { documentSubViewType, i18n, locale, params, payload, permissions, req, searchParams, user, viewType, visibleEntities } = props;
	if (!payload?.config) return null;
	const { admin: { components: { afterNav, afterNavLinks, beforeNav, beforeNavLinks, settingsMenu } }, collections, globals } = payload.config;
	const groups = groupNavItems([...collections.filter(({ slug }) => visibleEntities.collections.includes(slug)).map((collection) => ({
		type: EntityType.collection,
		entity: collection
	})), ...globals.filter(({ slug }) => visibleEntities.globals.includes(slug)).map((global) => ({
		type: EntityType.global,
		entity: global
	}))], permissions, i18n);
	const navPreferences = await getNavPrefs(req);
	const RenderedSettingsMenu = settingsMenu && Array.isArray(settingsMenu) ? settingsMenu.map((item, index) => RenderServerComponent({
		clientProps: {
			documentSubViewType,
			viewType
		},
		Component: item,
		importMap: payload.importMap,
		key: `settings-menu-item-${index}`,
		serverProps: {
			i18n,
			locale,
			params,
			payload,
			permissions,
			searchParams,
			user
		}
	})) : [];
	const RenderedBeforeNav = RenderServerComponent({
		clientProps: {
			documentSubViewType,
			viewType
		},
		Component: beforeNav,
		importMap: payload.importMap,
		serverProps: {
			i18n,
			locale,
			params,
			payload,
			permissions,
			searchParams,
			user
		}
	});
	const RenderedBeforeNavLinks = RenderServerComponent({
		clientProps: {
			documentSubViewType,
			viewType
		},
		Component: beforeNavLinks,
		importMap: payload.importMap,
		serverProps: {
			i18n,
			locale,
			params,
			payload,
			permissions,
			searchParams,
			user
		}
	});
	const RenderedAfterNavLinks = RenderServerComponent({
		clientProps: {
			documentSubViewType,
			viewType
		},
		Component: afterNavLinks,
		importMap: payload.importMap,
		serverProps: {
			i18n,
			locale,
			params,
			payload,
			permissions,
			searchParams,
			user
		}
	});
	const RenderedAfterNav = RenderServerComponent({
		clientProps: {
			documentSubViewType,
			viewType
		},
		Component: afterNav,
		importMap: payload.importMap,
		serverProps: {
			i18n,
			locale,
			params,
			payload,
			permissions,
			searchParams,
			user
		}
	});
	const allTabs = [{
		slug: "nav",
		components: {
			Content: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(import_jsx_runtime_react_server.Fragment, { children: [
				RenderedBeforeNavLinks,
				/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(DefaultNavClient, {
					groups,
					navPreferences
				}),
				RenderedAfterNavLinks
			] }),
			Icon: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(AlignJustifiedIcon, { size: 24 })
		},
		isDefaultActive: true,
		label: i18n.t("general:collections")
	}, ...payload.config.admin?.components?.sidebar?.tabs?.filter((tab) => !tab.disabled) || []];
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(NavWrapper, {
		baseClass: baseClass$1,
		children: [
			RenderedBeforeNav,
			/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("nav", {
				className: `${baseClass$1}__wrap`,
				children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(SidebarTabs, {
					documentSubViewType,
					i18n,
					locale,
					navPreferences,
					params,
					payload,
					permissions,
					req,
					searchParams,
					server: req?.server,
					tabs: allTabs,
					user,
					viewType
				}), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
					className: `${baseClass$1}__controls`,
					children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(SettingsMenuButton, { settingsMenu: RenderedSettingsMenu })
				})]
			}),
			RenderedAfterNav
		]
	});
};
DefaultNav = /* #__PURE__ */ __vite_rsc_wrap_css__$1(DefaultNav, "DefaultNav");
function __vite_rsc_wrap_css__$1(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources$2), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
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
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/templates/Default/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/templates/Default/index.js
var baseClass = "template-default";
var DefaultTemplate = ({ children, className, collectionSlug, docID, documentSubViewType, globalSlug, i18n, locale, params, payload, permissions, req, searchParams, user, viewActions, viewType, visibleEntities }) => {
	const { admin: { avatar, components, components: { header: CustomHeader, Nav: CustomNav } = {
		header: void 0,
		Nav: void 0
	} } = {} } = payload.config || {};
	const clientProps = {
		documentSubViewType,
		viewType,
		visibleEntities
	};
	const serverProps = {
		collectionSlug,
		docID,
		globalSlug,
		i18n,
		locale,
		params,
		payload,
		permissions,
		req,
		searchParams,
		server: req?.server,
		user
	};
	const Actions = {};
	for (const action of viewActions ?? []) {
		if (!action) continue;
		const key = typeof action === "object" ? action.path : action;
		Actions[key] = RenderServerComponent({
			clientProps,
			Component: action,
			importMap: payload.importMap,
			serverProps
		});
	}
	const settingsItemGroups = [];
	if (components?.userMenuSettingsItems && Array.isArray(components.userMenuSettingsItems)) {
		const groupedItemsByLabel = /* @__PURE__ */ new Map();
		const groupLabels = [];
		const ungroupedItems = [];
		for (const [itemIndex, userMenuSettingsItem] of components.userMenuSettingsItems.entries()) {
			if (!isUserMenuSettingsGroup(userMenuSettingsItem)) {
				ungroupedItems.push(RenderServerComponent({
					clientProps,
					Component: userMenuSettingsItem,
					importMap: payload.importMap,
					key: `user-menu-settings-ungrouped-${itemIndex}`,
					serverProps
				}));
				continue;
			}
			const groupLabel = getTranslation(userMenuSettingsItem.group, i18n);
			const existingItems = groupedItemsByLabel.get(groupLabel);
			const renderedItems = userMenuSettingsItem.items.map((groupedItem, groupedItemIndex) => RenderServerComponent({
				clientProps,
				Component: groupedItem,
				importMap: payload.importMap,
				key: `user-menu-settings-group-${groupLabel}-${itemIndex}-${groupedItemIndex}`,
				serverProps
			}));
			if (existingItems) existingItems.push(...renderedItems);
			else if (renderedItems.length > 0) {
				groupedItemsByLabel.set(groupLabel, renderedItems);
				groupLabels.push(groupLabel);
			}
		}
		for (const groupLabel of groupLabels) {
			const items = groupedItemsByLabel.get(groupLabel);
			if (items?.length) settingsItemGroups.push({
				group: groupLabel,
				items
			});
		}
		if (ungroupedItems.length > 0) settingsItemGroups.push({ items: ungroupedItems });
	}
	const NavComponent = RenderServerComponent({
		clientProps,
		Component: CustomNav,
		Fallback: DefaultNav,
		importMap: payload.importMap,
		serverProps
	});
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(EntityVisibilityProvider, {
		visibleEntities,
		children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(CommandPalette, {}), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(BulkUploadProvider, {
			modalSlugPrefix: collectionSlug,
			children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(ActionsProvider, {
				Actions,
				children: [RenderServerComponent({
					clientProps,
					Component: CustomHeader,
					importMap: payload.importMap,
					serverProps
				}), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
					style: { position: "relative" },
					children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(DefaultTemplateWrapper, {
						baseClass,
						className,
						children: [NavComponent, /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("div", {
							className: `${baseClass}__wrap`,
							children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(AppHeader, {
								CustomAvatar: avatar !== "gravatar" && avatar !== "default" ? RenderServerComponent({
									Component: avatar.Component,
									importMap: payload.importMap,
									serverProps
								}) : void 0,
								CustomLogoutButton: components?.logout?.Button ? RenderServerComponent({
									clientProps,
									Component: components.logout.Button,
									importMap: payload.importMap,
									serverProps
								}) : void 0,
								settingsItemGroups
							}), children]
						})]
					})
				})]
			})
		})]
	});
};
DefaultTemplate = /* #__PURE__ */ __vite_rsc_wrap_css__(DefaultTemplate, "DefaultTemplate");
function __vite_rsc_wrap_css__(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
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
export { DefaultTemplate as n, parse as t };
