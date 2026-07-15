import { r as __toESM, t as __commonJSMin } from "./rolldown-runtime-DJK8HYOj.js";
import { a as require_react_react_server, t as registerClientReference } from "./rsc-CrbjC1on.js";
import { getFromImportMap, isPlainObject, isReactServerComponentOrFunction } from "payload/shared";
//#region node_modules/.pnpm/react@19.2.6/node_modules/react/cjs/react-jsx-runtime.react-server.production.js
/**
* @license React
* react-jsx-runtime.react-server.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_react_server_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react_react_server();
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	if (!React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) throw Error("The \"react\" package in this environment is not configured correctly. The \"react-server\" condition must be enabled in any environment that runs React Server Components.");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region node_modules/.pnpm/react@19.2.6/node_modules/react/jsx-runtime.react-server.js
var require_jsx_runtime_react_server = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_react_server_production();
}));
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/removeUndefined.js
var import_react_react_server = /* @__PURE__ */ __toESM(require_react_react_server(), 1);
var import_jsx_runtime_react_server = require_jsx_runtime_react_server();
function removeUndefined(obj) {
	return Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== void 0));
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js
/**
* Can be used to render both MappedComponents and React Components.
*/
var RenderServerComponent = ({ clientProps = {}, Component, Fallback, importMap, key, serverProps }) => {
	if (Array.isArray(Component)) return Component.map((c, index) => RenderServerComponent({
		clientProps,
		Component: c,
		importMap,
		key: index,
		serverProps
	}));
	if (typeof Component === "function") {
		const isRSC = isReactServerComponentOrFunction(Component);
		return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(Component, { ...removeUndefined({
			...clientProps,
			...isRSC ? serverProps : {}
		}) }, key);
	}
	if (typeof Component === "string" || isPlainObject(Component)) {
		const ResolvedComponent = getFromImportMap({
			importMap,
			PayloadComponent: Component,
			schemaPath: ""
		});
		if (ResolvedComponent) {
			const isRSC = isReactServerComponentOrFunction(ResolvedComponent);
			return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(ResolvedComponent, { ...removeUndefined({
				...clientProps,
				...isRSC ? serverProps : {},
				...isRSC && typeof Component === "object" && Component?.serverProps ? Component.serverProps : {},
				...typeof Component === "object" && Component?.clientProps ? Component.clientProps : {}
			}) }, key);
		}
	}
	return Fallback ? RenderServerComponent({
		clientProps,
		Component: Fallback,
		importMap,
		key,
		serverProps
	}) : null;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/exports/client/index.js
var APIViewClient = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'APIViewClient' is called on server");
}, "63e9c1549c8f", "APIViewClient");
var AccountClient = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'AccountClient' is called on server");
}, "63e9c1549c8f", "AccountClient");
var AccountLanguageSelector = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'AccountLanguageSelector' is called on server");
}, "63e9c1549c8f", "AccountLanguageSelector");
var AccountResetPreferences = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'AccountResetPreferences' is called on server");
}, "63e9c1549c8f", "AccountResetPreferences");
var AccountToggleHighContrast = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'AccountToggleHighContrast' is called on server");
}, "63e9c1549c8f", "AccountToggleHighContrast");
var AccountToggleTheme = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'AccountToggleTheme' is called on server");
}, "63e9c1549c8f", "AccountToggleTheme");
var ActionsProvider = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'ActionsProvider' is called on server");
}, "63e9c1549c8f", "ActionsProvider");
var AppHeader = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'AppHeader' is called on server");
}, "63e9c1549c8f", "AppHeader");
var BulkUploadProvider = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'BulkUploadProvider' is called on server");
}, "63e9c1549c8f", "BulkUploadProvider");
var Button = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'Button' is called on server");
}, "63e9c1549c8f", "Button");
var Card = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'Card' is called on server");
}, "63e9c1549c8f", "Card");
var CollectionQuerySortField = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'CollectionQuerySortField' is called on server");
}, "63e9c1549c8f", "CollectionQuerySortField");
var CommandPalette = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'CommandPalette' is called on server");
}, "63e9c1549c8f", "CommandPalette");
var CreateFirstUserClient = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'CreateFirstUserClient' is called on server");
}, "63e9c1549c8f", "CreateFirstUserClient");
var DefaultCell = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'DefaultCell' is called on server");
}, "63e9c1549c8f", "DefaultCell");
var DefaultEditView = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'DefaultEditView' is called on server");
}, "63e9c1549c8f", "DefaultEditView");
var DefaultListView = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'DefaultListView' is called on server");
}, "63e9c1549c8f", "DefaultListView");
var DefaultNavClient = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'DefaultNavClient' is called on server");
}, "63e9c1549c8f", "DefaultNavClient");
var DefaultTemplateWrapper = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'DefaultTemplateWrapper' is called on server");
}, "63e9c1549c8f", "DefaultTemplateWrapper");
var DefaultVersionView = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'DefaultVersionView' is called on server");
}, "63e9c1549c8f", "DefaultVersionView");
var DocumentHeaderRoot = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'DocumentHeaderRoot' is called on server");
}, "63e9c1549c8f", "DocumentHeaderRoot");
var DocumentInfoProvider = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'DocumentInfoProvider' is called on server");
}, "63e9c1549c8f", "DocumentInfoProvider");
var DocumentTabLink = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'DocumentTabLink' is called on server");
}, "63e9c1549c8f", "DocumentTabLink");
var EditDepthProvider = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'EditDepthProvider' is called on server");
}, "63e9c1549c8f", "EditDepthProvider");
var EntityVisibilityProvider = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'EntityVisibilityProvider' is called on server");
}, "63e9c1549c8f", "EntityVisibilityProvider");
var FieldDescription = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'FieldDescription' is called on server");
}, "63e9c1549c8f", "FieldDescription");
var FieldLabel = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'FieldLabel' is called on server");
}, "63e9c1549c8f", "FieldLabel");
var FolderIcon = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'FolderIcon' is called on server");
}, "63e9c1549c8f", "FolderIcon");
var ForgotPasswordForm = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'ForgotPasswordForm' is called on server");
}, "63e9c1549c8f", "ForgotPasswordForm");
var GroupByHeader = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'GroupByHeader' is called on server");
}, "63e9c1549c8f", "GroupByHeader");
var GroupByPageControls = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'GroupByPageControls' is called on server");
}, "63e9c1549c8f", "GroupByPageControls");
var Gutter = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'Gutter' is called on server");
}, "63e9c1549c8f", "Gutter");
var HierarchyButtonClient = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'HierarchyButtonClient' is called on server");
}, "63e9c1549c8f", "HierarchyButtonClient");
var HierarchyFieldClient = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'HierarchyFieldClient' is called on server");
}, "63e9c1549c8f", "HierarchyFieldClient");
var HierarchyListView = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'HierarchyListView' is called on server");
}, "63e9c1549c8f", "HierarchyListView");
var HierarchySidebarTab = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'HierarchySidebarTab' is called on server");
}, "63e9c1549c8f", "HierarchySidebarTab");
var HydrateAuthProvider = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'HydrateAuthProvider' is called on server");
}, "63e9c1549c8f", "HydrateAuthProvider");
var HydrateHierarchyProvider = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'HydrateHierarchyProvider' is called on server");
}, "63e9c1549c8f", "HydrateHierarchyProvider");
var ListQueryProvider = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'ListQueryProvider' is called on server");
}, "63e9c1549c8f", "ListQueryProvider");
var LivePreviewProvider = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'LivePreviewProvider' is called on server");
}, "63e9c1549c8f", "LivePreviewProvider");
var Locked = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'Locked' is called on server");
}, "63e9c1549c8f", "Locked");
var LoginForm = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'LoginForm' is called on server");
}, "63e9c1549c8f", "LoginForm");
var LogoutClient = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'LogoutClient' is called on server");
}, "63e9c1549c8f", "LogoutClient");
var ModularDashboardClient = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'ModularDashboardClient' is called on server");
}, "63e9c1549c8f", "ModularDashboardClient");
var NavWrapper = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'NavWrapper' is called on server");
}, "63e9c1549c8f", "NavWrapper");
var NotFoundClient = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'NotFoundClient' is called on server");
}, "63e9c1549c8f", "NotFoundClient");
var NullField = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'NullField' is called on server");
}, "63e9c1549c8f", "NullField");
var OrderableTable = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'OrderableTable' is called on server");
}, "63e9c1549c8f", "OrderableTable");
var PageConfigProvider = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'PageConfigProvider' is called on server");
}, "63e9c1549c8f", "PageConfigProvider");
var Pill = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'Pill' is called on server");
}, "63e9c1549c8f", "Pill");
var ProgressBar = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'ProgressBar' is called on server");
}, "63e9c1549c8f", "ProgressBar");
var QueryPresetsWhereField = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'QueryPresetsWhereField' is called on server");
}, "63e9c1549c8f", "QueryPresetsWhereField");
var RecentlyViewedCollectionsField = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'RecentlyViewedCollectionsField' is called on server");
}, "63e9c1549c8f", "RecentlyViewedCollectionsField");
var RenderDefaultCell = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'RenderDefaultCell' is called on server");
}, "63e9c1549c8f", "RenderDefaultCell");
var RenderTitle = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'RenderTitle' is called on server");
}, "63e9c1549c8f", "RenderTitle");
var RenderVersionFieldsToDiff = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'RenderVersionFieldsToDiff' is called on server");
}, "63e9c1549c8f", "RenderVersionFieldsToDiff");
var ResetPasswordForm = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'ResetPasswordForm' is called on server");
}, "63e9c1549c8f", "ResetPasswordForm");
var RootProvider = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'RootProvider' is called on server");
}, "63e9c1549c8f", "RootProvider");
var SelectAll = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'SelectAll' is called on server");
}, "63e9c1549c8f", "SelectAll");
var SelectRow = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'SelectRow' is called on server");
}, "63e9c1549c8f", "SelectRow");
var SelectionProvider = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'SelectionProvider' is called on server");
}, "63e9c1549c8f", "SelectionProvider");
var SetDocumentStepNav = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'SetDocumentStepNav' is called on server");
}, "63e9c1549c8f", "SetDocumentStepNav");
var SetStepNav = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'SetStepNav' is called on server");
}, "63e9c1549c8f", "SetStepNav");
var SettingsMenuButton = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'SettingsMenuButton' is called on server");
}, "63e9c1549c8f", "SettingsMenuButton");
var ShouldRenderTabs = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'ShouldRenderTabs' is called on server");
}, "63e9c1549c8f", "ShouldRenderTabs");
var SidebarTabsClient = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'SidebarTabsClient' is called on server");
}, "63e9c1549c8f", "SidebarTabsClient");
var SortColumn = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'SortColumn' is called on server");
}, "63e9c1549c8f", "SortColumn");
var SortHeader = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'SortHeader' is called on server");
}, "63e9c1549c8f", "SortHeader");
var SortRow = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'SortRow' is called on server");
}, "63e9c1549c8f", "SortRow");
var Table = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'Table' is called on server");
}, "63e9c1549c8f", "Table");
var TagIcon = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'TagIcon' is called on server");
}, "63e9c1549c8f", "TagIcon");
var VerifyClient = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'VerifyClient' is called on server");
}, "63e9c1549c8f", "VerifyClient");
var VersionDrawerCreatedAtCell = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'VersionDrawerCreatedAtCell' is called on server");
}, "63e9c1549c8f", "VersionDrawerCreatedAtCell");
var VersionFieldDiffCheckbox = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'VersionFieldDiffCheckbox' is called on server");
}, "63e9c1549c8f", "VersionFieldDiffCheckbox");
var VersionFieldDiffCollapsible = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'VersionFieldDiffCollapsible' is called on server");
}, "63e9c1549c8f", "VersionFieldDiffCollapsible");
var VersionFieldDiffDate = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'VersionFieldDiffDate' is called on server");
}, "63e9c1549c8f", "VersionFieldDiffDate");
var VersionFieldDiffGroup = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'VersionFieldDiffGroup' is called on server");
}, "63e9c1549c8f", "VersionFieldDiffGroup");
var VersionFieldDiffIterable = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'VersionFieldDiffIterable' is called on server");
}, "63e9c1549c8f", "VersionFieldDiffIterable");
var VersionFieldDiffRow = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'VersionFieldDiffRow' is called on server");
}, "63e9c1549c8f", "VersionFieldDiffRow");
var VersionFieldDiffSelect = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'VersionFieldDiffSelect' is called on server");
}, "63e9c1549c8f", "VersionFieldDiffSelect");
var VersionFieldDiffTabs = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'VersionFieldDiffTabs' is called on server");
}, "63e9c1549c8f", "VersionFieldDiffTabs");
var VersionFieldDiffText = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'VersionFieldDiffText' is called on server");
}, "63e9c1549c8f", "VersionFieldDiffText");
var VersionPillLabel = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'VersionPillLabel' is called on server");
}, "63e9c1549c8f", "VersionPillLabel");
var VersionsAutosaveCell = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'VersionsAutosaveCell' is called on server");
}, "63e9c1549c8f", "VersionsAutosaveCell");
var VersionsCreatedAtCell = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'VersionsCreatedAtCell' is called on server");
}, "63e9c1549c8f", "VersionsCreatedAtCell");
var VersionsIDCell = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'VersionsIDCell' is called on server");
}, "63e9c1549c8f", "VersionsIDCell");
var VersionsPill = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'VersionsPill' is called on server");
}, "63e9c1549c8f", "VersionsPill");
var VersionsViewClient = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'VersionsViewClient' is called on server");
}, "63e9c1549c8f", "VersionsViewClient");
var ViewDescription = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'ViewDescription' is called on server");
}, "63e9c1549c8f", "ViewDescription");
var WatchCondition = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'WatchCondition' is called on server");
}, "63e9c1549c8f", "WatchCondition");
//#endregion
//#region node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/lite/index.mjs
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar) {
	var ctor, len;
	if (foo === bar) return true;
	if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();
		if (ctor === Array) {
			if ((len = foo.length) === bar.length) while (len-- && dequal(foo[len], bar[len]));
			return len === -1;
		}
		if (!ctor || typeof foo === "object") {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}
	return foo !== foo && bar !== bar;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/upsertPreferences.js
var defaultMerge = (existingValue, incomingValue) => ({
	...typeof existingValue === "object" ? existingValue : {},
	...removeUndefined(incomingValue || {})
});
var getPreferences = (0, import_react_react_server.cache)(async (key, payload, userID, userSlug) => {
	return await payload.find({
		collection: "payload-preferences",
		depth: 0,
		limit: 1,
		pagination: false,
		where: { and: [
			{ key: { equals: key } },
			{ "user.relationTo": { equals: userSlug } },
			{ "user.value": { equals: userID } }
		] }
	}).then((res) => res.docs?.[0]);
});
/**
* Will update the given preferences by key, creating a new record if it doesn't already exist, or merging existing preferences with the new value.
* This is not possible to do with the existing `db.upsert` operation because it stores on the `value` key and does not perform a deep merge beyond the first level.
* I.e. if you have a preferences record with a `value` key, `db.upsert` will overwrite the existing value. In the future if this supported we should use that instead.
* @param req - The PayloadRequest object
* @param key - The key of the preferences to update
* @param value - The new value to merge with the existing preferences
*/
var upsertPreferences = async ({ customMerge, key, req, value: incomingValue }) => {
	const existingPrefs = req.user ? await getPreferences(key, req.payload, req.user.id, req.user.collection) : {};
	let newPrefs = existingPrefs?.value;
	if (!existingPrefs?.id) return (await req.payload.create({
		collection: "payload-preferences",
		data: {
			key,
			user: {
				collection: req.user.collection,
				value: req.user.id
			},
			value: incomingValue
		},
		depth: 0,
		disableTransaction: true,
		user: req.user
	})).value;
	else {
		let mergedPrefs;
		if (typeof customMerge === "function") mergedPrefs = customMerge(existingPrefs.value, incomingValue, defaultMerge);
		else mergedPrefs = typeof incomingValue === "object" ? defaultMerge(existingPrefs.value, incomingValue) : incomingValue;
		if (!dequal(mergedPrefs, existingPrefs.value)) newPrefs = await req.payload.update({
			id: existingPrefs.id,
			collection: "payload-preferences",
			data: {
				key,
				user: {
					collection: req.user.collection,
					value: req.user.id
				},
				value: mergedPrefs
			},
			depth: 0,
			disableTransaction: true,
			user: req.user
		})?.then((res) => res.value);
	}
	return newPrefs;
};
//#endregion
export { Pill as $, FieldLabel as A, VersionFieldDiffTabs as At, HydrateAuthProvider as B, RenderServerComponent as Bt, DefaultVersionView as C, VersionFieldDiffCheckbox as Ct, EditDepthProvider as D, VersionFieldDiffIterable as Dt, DocumentTabLink as E, VersionFieldDiffGroup as Et, Gutter as F, VersionsIDCell as Ft, LoginForm as G, ListQueryProvider as H, HierarchyButtonClient as I, VersionsPill as It, NavWrapper as J, LogoutClient as K, HierarchyFieldClient as L, VersionsViewClient as Lt, ForgotPasswordForm as M, VersionPillLabel as Mt, GroupByHeader as N, VersionsAutosaveCell as Nt, EntityVisibilityProvider as O, VersionFieldDiffRow as Ot, GroupByPageControls as P, VersionsCreatedAtCell as Pt, PageConfigProvider as Q, HierarchyListView as R, ViewDescription as Rt, DefaultTemplateWrapper as S, VersionDrawerCreatedAtCell as St, DocumentInfoProvider as T, VersionFieldDiffDate as Tt, LivePreviewProvider as U, HydrateHierarchyProvider as V, require_jsx_runtime_react_server as Vt, Locked as W, NullField as X, NotFoundClient as Y, OrderableTable as Z, CreateFirstUserClient as _, SortHeader as _t, AccountClient as a, RenderVersionFieldsToDiff as at, DefaultListView as b, TagIcon as bt, AccountToggleHighContrast as c, SelectAll as ct, AppHeader as d, SetDocumentStepNav as dt, ProgressBar as et, BulkUploadProvider as f, SetStepNav as ft, CommandPalette as g, SortColumn as gt, CollectionQuerySortField as h, SidebarTabsClient as ht, APIViewClient as i, RenderTitle as it, FolderIcon as j, VersionFieldDiffText as jt, FieldDescription as k, VersionFieldDiffSelect as kt, AccountToggleTheme as l, SelectRow as lt, Card as m, ShouldRenderTabs as mt, upsertPreferences as n, RecentlyViewedCollectionsField as nt, AccountLanguageSelector as o, ResetPasswordForm as ot, Button as p, SettingsMenuButton as pt, ModularDashboardClient as q, dequal as r, RenderDefaultCell as rt, AccountResetPreferences as s, RootProvider as st, getPreferences as t, QueryPresetsWhereField as tt, ActionsProvider as u, SelectionProvider as ut, DefaultCell as v, SortRow as vt, DocumentHeaderRoot as w, VersionFieldDiffCollapsible as wt, DefaultNavClient as x, VerifyClient as xt, DefaultEditView as y, Table as yt, HierarchySidebarTab as z, WatchCondition as zt };
