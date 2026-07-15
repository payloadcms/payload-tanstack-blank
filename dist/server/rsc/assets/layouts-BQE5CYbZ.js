import { r as __toESM } from "./rolldown-runtime-DJK8HYOj.js";
import { a as require_react_react_server } from "./rsc-CrbjC1on.js";
import { h as getClientConfig, n as initReq, t as renderServerComponent } from "./index.rsc-CUDYWvAm.js";
import { Bt as RenderServerComponent, Vt as require_jsx_runtime_react_server, et as ProgressBar, st as RootProvider } from "./upsertPreferences-BTcoIMIB.js";
import { n as Outlet, t as TanStackRouterAdapter } from "./RouterAdapter-DYC0F1Bz.js";
import { t as getNavPrefs } from "./getNavPrefs-BkOEHYMi.js";
import assetsManifest from "../__vite_rsc_assets_manifest.js";
import { applyLocaleFiltering } from "payload/shared";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/Theme/shared.js
var defaultTheme = "light";
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getRequestTheme.js
var acceptedThemes = ["dark", "light"];
var getRequestTheme = ({ config, cookies, headers }) => {
	if (config.admin.theme !== "all" && acceptedThemes.includes(config.admin.theme)) return config.admin.theme;
	const themeFromCookie = cookies.get(`${config.cookiePrefix || "payload"}-theme`);
	if (themeFromCookie && acceptedThemes.includes(themeFromCookie)) return themeFromCookie;
	const themeFromHeader = headers.get("Sec-CH-Prefers-Color-Scheme");
	if (themeFromHeader && acceptedThemes.includes(themeFromHeader)) return themeFromHeader;
	return defaultTheme;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+translations@4.0.0-internal.fa183d3/node_modules/@payloadcms/translations/dist/utilities/languages.js
var rtlLanguages = [
	"ar",
	"fa",
	"he"
];
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/layouts/Root/getLayoutData.js
var import_react_react_server = /* @__PURE__ */ __toESM(require_react_react_server(), 1);
/**
* Fetches all data needed by the root admin layout.
* Call this in your TanStack Start root route loader.
*/ async function getLayoutData({ configPromise, importMap }) {
	const { cookies, headers, languageCode, permissions, req, req: { payload: { config } } } = await initReq({
		configPromise,
		importMap
	});
	const theme = getRequestTheme({
		config,
		cookies,
		headers
	});
	const languageOptions = Object.entries(config.i18n.supportedLanguages || {}).reduce((acc, [language, languageConfig]) => {
		if (Object.keys(config.i18n.supportedLanguages).includes(language)) acc.push({
			label: languageConfig.translations.general.thisLanguage,
			value: language
		});
		return acc;
	}, []);
	const navPrefs = await getNavPrefs(req);
	const clientConfig = getClientConfig({
		config,
		i18n: req.i18n,
		importMap,
		user: req.user ?? true
	});
	await applyLocaleFiltering({
		clientConfig,
		config,
		req
	});
	const providerPaths = config.admin?.components?.providers;
	let providers = void 0;
	if (Array.isArray(providerPaths) && providerPaths.length > 0) {
		const serverProps = {
			i18n: req.i18n,
			params: {},
			payload: req.payload,
			permissions,
			searchParams: {},
			server: req.server,
			user: req.user ?? void 0
		};
		providers = providerPaths.reduceRight((children, provider) => RenderServerComponent({
			clientProps: { children },
			Component: provider,
			importMap,
			serverProps
		}), (0, import_react_react_server.createElement)(Outlet));
	}
	return {
		clientConfig,
		dateFNSKey: req.i18n.dateFNSKey,
		fallbackLang: config.i18n.fallbackLanguage,
		isNavOpen: navPrefs?.open ?? true,
		languageCode,
		languageOptions,
		locale: req.locale ?? void 0,
		permissions,
		providers,
		theme,
		translations: req.i18n.translations,
		user: req.user
	};
}
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
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/layouts/Root/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getLanguageDir.js
var import_jsx_runtime_react_server = require_jsx_runtime_react_server();
/**
* Resolves the `<html dir>` value for a language code. Returns lowercase
* `'ltr'`/`'rtl'` to match the `[dir='ltr']`/`[dir='rtl']` selectors the admin
* stylesheet scopes its layout rules under (e.g. the document sidebar divider).
* Single source of truth shared across framework adapters so the SSR'd `dir`
* never diverges from what the CSS expects.
*/
var getLanguageDir = ({ languageCode }) => rtlLanguages.includes(languageCode) ? "rtl" : "ltr";
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/layouts/Root/index.js
function RootLayout({ children, data, serverFunction }) {
	const dir = getLanguageDir({ languageCode: data.languageCode });
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("html", {
		"data-theme": data.theme,
		dir,
		lang: data.languageCode,
		suppressHydrationWarning: true,
		children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("head", { children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("style", { children: `@layer payload-default, payload;` }) }), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("body", { children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(RootProvider, {
			config: data.clientConfig,
			dateFNSKey: data.dateFNSKey,
			fallbackLang: data.fallbackLang,
			highContrastMode: false,
			isNavOpen: data.isNavOpen,
			languageCode: data.languageCode,
			languageOptions: data.languageOptions,
			locale: data.locale,
			permissions: data.user ? data.permissions : null,
			RouterAdapter: TanStackRouterAdapter,
			serverFunction,
			theme: data.theme,
			translations: data.translations,
			user: data.user,
			children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(ProgressBar, {}), children]
		}), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", { id: "portal" })] })]
	});
}
RootLayout = /* #__PURE__ */ __vite_rsc_wrap_css__(RootLayout, "RootLayout");
function __vite_rsc_wrap_css__(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources$1), import_react_react_server.createElement(value, props));
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
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/loadLayoutData.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/toSerializable.js
/**
* Recursively strip values that seroval cannot serialize (React elements,
* functions, Symbols) while preserving Maps, Sets, Dates, typed arrays, etc.
*
* TanStack Start uses seroval to transfer server function return values to
* the client.  Payload's `getClientConfig` / `getLayoutData` may include
* callback functions or RegExp instances that seroval chokes on.  Running
* the data through this function before returning from a `createServerFn`
* handler keeps the transfer safe.
*
* For server functions whose payloads contain React elements (e.g. the
* shared `form-state` / `render-list` / `render-document` handlers), use
* `serializeForRsc` instead — it converts elements into RSC handles rather
* than stripping them.
*
* Uses a WeakMap cache so that shared object references (e.g. the same array
* referenced by both `doc.hasMany` and `formState.hasMany.value`) are
* returned correctly instead of being dropped as "already seen".
*
* A separate `ancestors` WeakSet tracks objects currently being recursed into.
* If an object is encountered while it is still on the recursion stack, the
* reference is circular and is replaced with `undefined` to keep the output
* JSON-safe.  Once recursion completes the object is removed from `ancestors`,
* so sibling/cousin references to the same (fully-processed) object still
* resolve to the cached clone.
*/ function stripUnserializable(value, cache = /* @__PURE__ */ new WeakMap(), ancestors = /* @__PURE__ */ new WeakSet()) {
	if (value === null || value === void 0) return value;
	const t = typeof value;
	if (t === "function" || t === "symbol") return;
	if (t !== "object") return value;
	const obj = value;
	if (typeof obj.$$typeof === "symbol") return;
	if (ancestors.has(obj)) return;
	if (cache.has(obj)) return cache.get(obj);
	if (obj instanceof Date) return obj;
	if (obj instanceof RegExp) return;
	ancestors.add(obj);
	if (obj instanceof Map) {
		const cleaned = /* @__PURE__ */ new Map();
		cache.set(obj, cleaned);
		for (const [k, v] of obj) {
			const cv = stripUnserializable(v, cache, ancestors);
			if (cv !== void 0) cleaned.set(k, cv);
		}
		ancestors.delete(obj);
		return cleaned;
	}
	if (obj instanceof Set) {
		const cleaned = /* @__PURE__ */ new Set();
		cache.set(obj, cleaned);
		for (const v of obj) {
			const cv = stripUnserializable(v, cache, ancestors);
			if (cv !== void 0) cleaned.add(cv);
		}
		ancestors.delete(obj);
		return cleaned;
	}
	if (Array.isArray(obj)) {
		const arr = [];
		cache.set(obj, arr);
		for (const item of obj) arr.push(stripUnserializable(item, cache, ancestors));
		ancestors.delete(obj);
		return arr;
	}
	if (ArrayBuffer.isView(obj)) {
		ancestors.delete(obj);
		return obj;
	}
	const result = {};
	cache.set(obj, result);
	for (const key of Object.keys(obj)) {
		const v = stripUnserializable(obj[key], cache, ancestors);
		if (v !== void 0) result[key] = v;
	}
	ancestors.delete(obj);
	return result;
}
function toSerializable(value) {
	return stripUnserializable(value);
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/loadLayoutData.js
/**
* Resolves the admin layout data for TanStack Start and returns a serializable
* payload for the `/_payload` route loader. The framework adapter wraps this in
* a `createServerFn` that supplies the app's `config` and generated `importMap`.
*
* `toSerializable` strips React elements, so the custom-providers element tree
* (`config.admin.components.providers`) is rendered to an RSC payload separately
* and re-attached.
*/
async function loadLayoutData({ config, importMap }) {
	const { providers, ...data } = await getLayoutData({
		configPromise: config,
		importMap
	});
	return {
		...toSerializable(data),
		providers: providers ? await renderServerComponent(providers, { __tanstackStartRscCss: import_react_react_server.createElement(Resources) }) : void 0
	};
}
//#endregion
export { loadLayoutData, getRequestTheme as n, toSerializable as t };
