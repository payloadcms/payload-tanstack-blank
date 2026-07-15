import { r as __toESM } from "./rolldown-runtime-DJK8HYOj.js";
import { a as require_react_react_server } from "./rsc-CrbjC1on.js";
import { A as FieldLabel, B as HydrateAuthProvider, Bt as RenderServerComponent, D as EditDepthProvider, F as Gutter, K as LogoutClient, T as DocumentInfoProvider, Vt as require_jsx_runtime_react_server, _ as CreateFirstUserClient, a as AccountClient, c as AccountToggleHighContrast, ft as SetStepNav, l as AccountToggleTheme, o as AccountLanguageSelector, q as ModularDashboardClient, s as AccountResetPreferences, t as getPreferences, y as DefaultEditView } from "./upsertPreferences-BTcoIMIB.js";
import { i as getDocumentPermissions, l as buildFormState, m as DocumentHeader, n as getVersions, o as getDocumentData, r as getIsLocked, s as getDocPreferences, t as NotFoundView } from "./NotFound-7JodD-bI.js";
import { a as LoginView, r as ResetPassword, s as ForgotPasswordView, t as Verify } from "./Verify-BY0YeNrC.js";
import { n as UnauthorizedViewWithGutter, t as UnauthorizedView } from "./Unauthorized-DalNEOGT.js";
import { n as getGlobalData, t as getNavGroups } from "./getNavGroups-D_4RSxf0.js";
import { t as extractLocaleData } from "./localeUtils-xKBcavVR.js";
import { t as formatMetadata } from "./formatMetadata-CRcp0C-Q.js";
import assetsManifest from "../__vite_rsc_assets_manifest.js";
import { PREFERENCE_KEYS, formatAdminURL } from "payload/shared";
//#region \0virtual:vite-rsc/css?type=rsc&id=%2FUsers%2Fjfletcher%2Fpayload%2Fpayload-tanstack-blank%2Fnode_modules%2F.pnpm%2F%40payloadcms%2Bui%404.0.0-internal.fa183d3_%40types%2Breact%4019.2.14_monaco-editor%400.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a%2Fnode_modules%2F%40payloadcms%2Fui%2Fdist%2Fviews%2FAccount%2FSettings%2Findex.js&lang.js
var import_jsx_runtime_react_server = require_jsx_runtime_react_server();
var import_react_react_server = /* @__PURE__ */ __toESM(require_react_react_server());
var Resources$3 = ((React, deps, RemoveDuplicateServerCss, precedence) => {
	return function Resources() {
		return React.createElement(React.Fragment, null, [...deps.css.map((href) => React.createElement("link", {
			key: "css:" + href,
			rel: "stylesheet",
			...precedence ? { precedence } : {},
			href,
			"data-rsc-css-href": href
		})), RemoveDuplicateServerCss && React.createElement(RemoveDuplicateServerCss, { key: "remove-duplicate-css" })]);
	};
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Account/Settings/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Account/Settings/index.js
var baseClass$3 = "payload-settings";
var Settings = (props) => {
	const { className, i18n, languageOptions, theme, user } = props;
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: [baseClass$3, className].filter(Boolean).join(" "),
		children: [
			/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("h3", { children: i18n.t("general:payloadSettings") }),
			/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("div", {
				className: `${baseClass$3}__language`,
				children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(FieldLabel, {
					htmlFor: "language-select",
					label: i18n.t("general:language")
				}), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(AccountLanguageSelector, { languageOptions })]
			}),
			theme === "all" && /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(AccountToggleTheme, {}),
			/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(AccountToggleHighContrast, {}),
			/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(AccountResetPreferences, { user })
		]
	});
};
Settings = /* #__PURE__ */ __vite_rsc_wrap_css__$3(Settings, "Settings");
function __vite_rsc_wrap_css__$3(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources$3), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Account/index.js
async function AccountView({ initPageResult, params, searchParams }) {
	const { languageOptions, locale, permissions, req, req: { i18n, payload, payload: { config }, user } } = initPageResult;
	const { admin: { theme, user: userSlug }, routes: { api } } = config;
	const collectionConfig = payload?.collections?.[userSlug]?.config;
	if (collectionConfig && user?.id) {
		const data = await getDocumentData({
			id: user.id,
			collectionSlug: collectionConfig.slug,
			locale,
			payload,
			req,
			user
		});
		if (!data) throw new Error("not-found");
		const docPreferences = await getDocPreferences({
			id: user.id,
			collectionSlug: collectionConfig.slug,
			payload,
			user
		});
		const { docPermissions, hasDeletePermission, hasPublishPermission, hasSavePermission, hasTrashPermission } = await getDocumentPermissions({
			id: user.id,
			collectionConfig,
			data,
			req
		});
		const { state: formState } = await buildFormState({
			id: user.id,
			collectionSlug: collectionConfig.slug,
			data,
			docPermissions,
			docPreferences,
			locale: locale?.code,
			operation: "update",
			renderAllFields: true,
			req,
			schemaPath: collectionConfig.slug,
			skipValidation: true
		});
		const { currentEditor, isLocked, lastUpdateTime } = await getIsLocked({
			id: user.id,
			collectionConfig,
			isEditing: true,
			req
		});
		const { hasPublishedDoc, mostRecentVersionIsAutosaved, unpublishedVersionCount, versionCount } = await getVersions({
			id: user.id,
			collectionConfig,
			doc: data,
			docPermissions,
			locale: locale?.code,
			payload,
			user
		});
		return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(DocumentInfoProvider, {
			AfterFields: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(Settings, {
				i18n,
				languageOptions,
				payload,
				theme,
				user
			}),
			apiURL: formatAdminURL({
				apiRoute: api,
				path: `/${userSlug}${user?.id ? `/${user.id}` : ""}`
			}),
			collectionSlug: userSlug,
			currentEditor,
			docPermissions,
			hasDeletePermission,
			hasPublishedDoc,
			hasPublishPermission,
			hasSavePermission,
			hasTrashPermission,
			id: user?.id,
			initialData: data,
			initialState: formState,
			isEditing: true,
			isLocked,
			lastUpdateTime,
			mostRecentVersionIsAutosaved,
			unpublishedVersionCount,
			versionCount,
			children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(EditDepthProvider, { children: [
				/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(DocumentHeader, {
					collectionConfig,
					hideTabs: true,
					permissions,
					req
				}),
				/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(HydrateAuthProvider, { permissions }),
				RenderServerComponent({
					Component: config.admin?.components?.views?.account?.Component,
					Fallback: DefaultEditView,
					importMap: payload.importMap,
					serverProps: {
						doc: data,
						hasPublishedDoc,
						i18n,
						initPageResult,
						locale,
						params,
						payload,
						permissions,
						routeSegments: [],
						searchParams,
						server: req.server,
						user
					}
				}),
				/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(AccountClient, {})
			] })
		});
	}
	return req.server.notFound();
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Account/metadata.js
var generateAccountMetadata = async ({ config, i18n: { t } }) => formatMetadata({
	description: t("authentication:accountOfCurrentUser"),
	keywords: t("authentication:account"),
	serverURL: config.serverURL,
	title: t("authentication:account"),
	...config.admin.meta || {}
});
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
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/CreateFirstUser/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/CreateFirstUser/index.js
var baseClass$2 = "create-first-user";
async function CreateFirstUserView({ initPageResult }) {
	const { locale, req, req: { payload: { collections, config: { admin: { user: userSlug } } } } } = initPageResult;
	const collectionConfig = collections?.[userSlug]?.config;
	const { auth: authOptions } = collectionConfig;
	const loginWithUsername = authOptions.loginWithUsername;
	const data = await getDocumentData({
		collectionSlug: collectionConfig.slug,
		locale,
		payload: req.payload,
		req,
		user: req.user
	});
	const docPreferences = await getDocPreferences({
		collectionSlug: collectionConfig.slug,
		payload: req.payload,
		user: req.user
	});
	const docPermissionsForForm = {
		create: true,
		delete: true,
		fields: Object.fromEntries(collectionConfig.fields.filter((f) => "name" in f && typeof f.name === "string").map((f) => [f.name, {
			create: true,
			read: true,
			update: true
		}])),
		read: true,
		readVersions: true,
		update: true
	};
	const { state: formState } = await buildFormState({
		collectionSlug: collectionConfig.slug,
		data,
		docPermissions: docPermissionsForForm,
		docPreferences,
		locale: locale?.code,
		operation: "create",
		renderAllFields: true,
		req,
		schemaPath: collectionConfig.slug,
		skipClientConfigAuth: true,
		skipValidation: true
	});
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: baseClass$2,
		children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("div", {
			className: `${baseClass$2}__header`,
			children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("h1", { children: req.t("general:welcome") }), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("p", { children: req.t("authentication:beginCreateFirstUser") })]
		}), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(CreateFirstUserClient, {
			docPermissions: docPermissionsForForm,
			docPreferences,
			initialState: formState,
			loginWithUsername,
			userSlug
		})]
	});
}
CreateFirstUserView = /* #__PURE__ */ __vite_rsc_wrap_css__$2(CreateFirstUserView, "CreateFirstUserView");
function __vite_rsc_wrap_css__$2(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources$2), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/CreateFirstUser/metadata.js
var generateCreateFirstUserMetadata = async ({ config, i18n: { t } }) => formatMetadata({
	description: t("authentication:createFirstUser"),
	keywords: t("general:create"),
	serverURL: config.serverURL,
	title: t("authentication:createFirstUser"),
	...config.admin.meta || {}
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
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Dashboard/Default/ModularDashboard/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Dashboard/Default/ModularDashboard/utils/getItemsFromConfig.js
async function getItemsFromConfig(defaultLayout, req, widgets) {
	let widgetInstances;
	if (typeof defaultLayout === "function") widgetInstances = await defaultLayout({ req });
	else widgetInstances = defaultLayout;
	return widgetInstances.map((widgetInstance, index) => {
		const widget = widgets.find((w) => w.slug === widgetInstance.widgetSlug);
		return {
			id: `${widgetInstance.widgetSlug}-${index}`,
			data: widgetInstance.data,
			maxWidth: widget?.maxWidth ?? "full",
			minWidth: widget?.minWidth ?? "x-small",
			width: widgetInstance.width || "x-small"
		};
	});
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Dashboard/Default/ModularDashboard/utils/getItemsFromPreferences.js
async function getItemsFromPreferences(payload, user) {
	const savedPreferences = await getPreferences(PREFERENCE_KEYS.DASHBOARD_LAYOUT, payload, user.id, user.collection);
	if (!savedPreferences?.value || typeof savedPreferences.value !== "object" || !("layouts" in savedPreferences.value)) return null;
	return savedPreferences.value.layouts;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Dashboard/Default/ModularDashboard/index.js
async function ModularDashboard(props) {
	const { defaultLayout = [], widgets = [] } = props.payload.config.admin.dashboard || {};
	const { importMap } = props.payload;
	const { user } = props;
	const { cookies, locale, permissions, req } = props.initPageResult;
	const { i18n } = req;
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", { children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(ModularDashboardClient, {
		clientLayout: (await getItemsFromPreferences(props.payload, user) ?? await getItemsFromConfig(defaultLayout, req, widgets)).map((layoutItem) => {
			const widgetSlug = layoutItem.id.slice(0, layoutItem.id.lastIndexOf("-"));
			const widgetConfig = widgets.find((widget) => widget.slug === widgetSlug);
			const widgetData = widgetConfig?.fields?.length ? extractLocaleData(layoutItem.data || {}, req.locale || "en", widgetConfig.fields) : layoutItem.data || {};
			return {
				component: RenderServerComponent({
					Component: widgetConfig?.Component,
					importMap,
					serverProps: {
						cookies,
						locale,
						permissions,
						req,
						widgetData,
						widgetSlug
					}
				}),
				item: layoutItem
			};
		}),
		widgets: widgets.map((widget) => {
			const { Component: _, fields: __, label, ...rest } = widget;
			return {
				...rest,
				label: typeof label === "function" ? label({
					i18n,
					t: i18n.t
				}) : label
			};
		})
	}) });
}
ModularDashboard = /* #__PURE__ */ __vite_rsc_wrap_css__$1(ModularDashboard, "ModularDashboard");
function __vite_rsc_wrap_css__$1(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources$1), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Dashboard/Default/index.js
var baseClass$1 = "dashboard";
function DefaultDashboard(props) {
	const { i18n, locale, params, payload, permissions, searchParams, server, user } = props;
	const { afterDashboard, beforeDashboard } = payload.config.admin.components;
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(Gutter, {
		className: baseClass$1,
		children: [
			beforeDashboard && RenderServerComponent({
				Component: beforeDashboard,
				importMap: payload.importMap,
				serverProps: {
					i18n,
					locale,
					params,
					payload,
					permissions,
					searchParams,
					server,
					user
				}
			}),
			/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(ModularDashboard, { ...props }),
			afterDashboard && RenderServerComponent({
				Component: afterDashboard,
				importMap: payload.importMap,
				serverProps: {
					i18n,
					locale,
					params,
					payload,
					permissions,
					searchParams,
					server,
					user
				}
			})
		]
	});
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Dashboard/index.js
async function DashboardView(props) {
	const { locale, permissions, req: { i18n, payload: { config }, payload, user }, req, visibleEntities } = props.initPageResult;
	const globalData = await getGlobalData(req);
	const navGroups = getNavGroups(permissions, visibleEntities, config, i18n);
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(import_react_react_server.Fragment, { children: [
		/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(HydrateAuthProvider, { permissions }),
		/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(SetStepNav, { nav: [] }),
		RenderServerComponent({
			clientProps: { locale },
			Component: config.admin?.components?.views?.dashboard?.Component,
			Fallback: DefaultDashboard,
			importMap: payload.importMap,
			serverProps: {
				...props,
				globalData,
				i18n,
				locale,
				navGroups,
				payload,
				permissions,
				server: req.server,
				user,
				visibleEntities
			}
		})
	] });
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Dashboard/metadata.js
var generateDashboardMetadata = async ({ config, i18n: { t } }) => formatMetadata({
	serverURL: config.serverURL,
	title: t("general:dashboard"),
	...config.admin.meta || {},
	openGraph: {
		title: t("general:dashboard"),
		...config.admin.meta?.openGraph || {}
	}
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/ForgotPassword/metadata.js
var generateForgotPasswordMetadata = async ({ config, i18n: { t } }) => formatMetadata({
	description: t("authentication:forgotPassword"),
	keywords: t("authentication:forgotPassword"),
	serverURL: config.serverURL,
	title: t("authentication:forgotPassword"),
	...config.admin.meta || {}
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Login/metadata.js
var generateLoginMetadata = async ({ config, i18n: { t } }) => formatMetadata({
	description: t("authentication:login"),
	keywords: t("authentication:login"),
	serverURL: config.serverURL,
	title: t("authentication:login"),
	...config.admin.meta || {}
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
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Logout/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Logout/index.js
var baseClass = "logout";
var LogoutView = ({ inactivity, initPageResult, searchParams }) => {
	const { req: { payload: { config: { routes: { admin: adminRoute } } }, user } } = initPageResult;
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
		className: `${baseClass}`,
		children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(LogoutClient, {
			adminRoute,
			inactivity,
			redirect: searchParams.redirect,
			user: user ? {
				id: user.id,
				collection: user.collection
			} : null
		})
	});
};
LogoutView = /* #__PURE__ */ __vite_rsc_wrap_css__(LogoutView, "LogoutView");
function __vite_rsc_wrap_css__(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Logout/metadata.js
var generateLogoutMetadata = async ({ config, i18n: { t } }) => formatMetadata({
	description: `${t("authentication:logoutUser")}`,
	keywords: `${t("authentication:logout")}`,
	serverURL: config.serverURL,
	title: t("authentication:logout")
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/NotFound/metadata.js
var generateNotFoundMetadata = async ({ config, i18n: { t } }) => formatMetadata({
	description: t("general:pageNotFound"),
	keywords: `404 ${t("general:notFound")}`,
	serverURL: config.serverURL,
	title: t("general:notFound")
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/ResetPassword/metadata.js
var generateResetPasswordMetadata = async ({ config, i18n: { t } }) => formatMetadata({
	description: t("authentication:resetPassword"),
	keywords: t("authentication:resetPassword"),
	serverURL: config.serverURL,
	title: t("authentication:resetPassword"),
	...config.admin.meta || {}
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Unauthorized/metadata.js
var generateUnauthorizedMetadata = async ({ config, i18n: { t } }) => formatMetadata({
	description: t("error:unauthorized"),
	keywords: t("error:unauthorized"),
	serverURL: config.serverURL,
	title: t("error:unauthorized"),
	...config.admin.meta || {}
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Verify/metadata.js
var generateVerifyMetadata = async ({ config, i18n: { t } }) => formatMetadata({
	description: t("authentication:verifyUser"),
	keywords: t("authentication:verify"),
	serverURL: config.serverURL,
	title: t("authentication:verify"),
	...config.admin.meta || {}
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Root/adminViews.js
var LogoutInactivityView = (props) => /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(LogoutView, {
	inactivity: true,
	...props
});
/**
* Default `AdminViewAdapter` shared by all framework adapters. Each entry pairs a
* server component with a `MetaConfig`-returning metadata generator. Framework
* adapters re-export this registry and cast `MetaConfig` → their framework's
* metadata type at the boundary.
*/
var defaultAdminViews = {
	account: {
		Component: AccountView,
		generateMetadata: generateAccountMetadata
	},
	createFirstUser: {
		Component: CreateFirstUserView,
		generateMetadata: generateCreateFirstUserMetadata
	},
	dashboard: {
		Component: DashboardView,
		generateMetadata: generateDashboardMetadata
	},
	forgot: {
		Component: ForgotPasswordView,
		generateMetadata: generateForgotPasswordMetadata
	},
	login: {
		Component: LoginView,
		generateMetadata: generateLoginMetadata
	},
	logout: {
		Component: LogoutView,
		generateMetadata: generateLogoutMetadata
	},
	logoutInactivity: {
		Component: LogoutInactivityView,
		generateMetadata: generateLogoutMetadata
	},
	notFound: {
		Component: NotFoundView,
		generateMetadata: generateNotFoundMetadata
	},
	reset: {
		Component: ResetPassword,
		generateMetadata: generateResetPasswordMetadata
	},
	unauthorized: {
		Component: UnauthorizedView,
		generateMetadata: generateUnauthorizedMetadata
	},
	unauthorizedWithGutter: {
		Component: UnauthorizedViewWithGutter,
		generateMetadata: generateUnauthorizedMetadata
	},
	verify: {
		Component: Verify,
		generateMetadata: generateVerifyMetadata
	}
};
//#endregion
export { defaultAdminViews };
