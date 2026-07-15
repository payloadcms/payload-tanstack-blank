import { o as __toESM } from "./rolldown-runtime-CE-6LUnI.js";
import { t as require_react } from "./react-yhpvVyYg.js";
import { t as require_jsx_runtime } from "./jsx-runtime-Ch3VfgV3.js";
import { t as require_compiler_runtime } from "./compiler-runtime-IEfSpGV5.js";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/hooks/useControllableState.js
var import_jsx_runtime = require_jsx_runtime();
var import_compiler_runtime = require_compiler_runtime();
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function useControllableState(propValue, fallbackValue) {
	const $ = (0, import_compiler_runtime.c)(5);
	const [localValue, setLocalValue] = (0, import_react.useState)(propValue);
	const initialRenderRef = (0, import_react.useRef)(true);
	let t0;
	let t1;
	if ($[0] !== propValue) {
		t0 = () => {
			if (initialRenderRef.current) {
				initialRenderRef.current = false;
				return;
			}
			setLocalValue(propValue);
		};
		t1 = [propValue];
		$[0] = propValue;
		$[1] = t0;
		$[2] = t1;
	} else {
		t0 = $[1];
		t1 = $[2];
	}
	(0, import_react.useEffect)(t0, t1);
	const t2 = localValue ?? fallbackValue;
	let t3;
	if ($[3] !== t2) {
		t3 = [t2, setLocalValue];
		$[3] = t2;
		$[4] = t3;
	} else t3 = $[4];
	return t3;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/Config/index.js
var RootConfigContext = /*#__PURE__*/ (0, import_react.createContext)(void 0);
var ConfigProvider = ({ children, config: configFromProps }) => {
	const [config, setConfig] = useControllableState(configFromProps);
	const { collectionsBySlug: collectionsBySlug_0, globalsBySlug: globalsBySlug_0 } = (0, import_react.useMemo)(() => {
		const collectionsBySlug = {};
		const globalsBySlug = {};
		for (const collection of config.collections) collectionsBySlug[collection.slug] = collection;
		for (const global of config.globals) globalsBySlug[global.slug] = global;
		return {
			collectionsBySlug,
			globalsBySlug
		};
	}, [config]);
	const getEntityConfig = (0, import_react.useCallback)((args) => {
		if ("collectionSlug" in args && args.collectionSlug) return collectionsBySlug_0[args.collectionSlug] ?? null;
		if ("globalSlug" in args && args.globalSlug) return globalsBySlug_0[args.globalSlug] ?? null;
		return null;
	}, [collectionsBySlug_0, globalsBySlug_0]);
	const value = (0, import_react.useMemo)(() => ({
		config,
		getEntityConfig,
		setConfig
	}), [
		config,
		getEntityConfig,
		setConfig
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(RootConfigContext, {
		value,
		children
	});
};
var useConfig = () => (0, import_react.use)(RootConfigContext);
/**
* This provider shadows the `ConfigProvider` on the _page_ level, allowing us to
* update the config when needed, e.g. after authentication.
* The layout `ConfigProvider` is not updated on page navigation / authentication,
* as the layout does not re-render in those cases.
*
* If the config here has the same reference as the config from the layout, we
* simply reuse the context from the layout to avoid unnecessary re-renders.
*
* @experimental This component is experimental and may change or be removed in future releases. Use at your own risk.
*/
var PageConfigProvider = (t0) => {
	const $ = (0, import_compiler_runtime.c)(7);
	const { children, config: configFromProps } = t0;
	const { config: rootConfig, setConfig: setRootConfig } = useConfig();
	let t1;
	let t2;
	if ($[0] !== configFromProps || $[1] !== setRootConfig) {
		t1 = () => {
			setRootConfig(configFromProps);
		};
		t2 = [configFromProps, setRootConfig];
		$[0] = configFromProps;
		$[1] = setRootConfig;
		$[2] = t1;
		$[3] = t2;
	} else {
		t1 = $[2];
		t2 = $[3];
	}
	(0, import_react.useEffect)(t1, t2);
	if (rootConfig !== configFromProps && rootConfig.unauthenticated !== configFromProps.unauthenticated) {
		let t3;
		if ($[4] !== children || $[5] !== configFromProps) {
			t3 = (0, import_jsx_runtime.jsx)(ConfigProvider, {
				config: configFromProps,
				children
			});
			$[4] = children;
			$[5] = configFromProps;
			$[6] = t3;
		} else t3 = $[6];
		return t3;
	}
	return children;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/Theme/index.js
var initialContext = {
	autoMode: true,
	highContrastMode: false,
	setHighContrastMode: () => null,
	setTheme: () => null,
	theme: "light"
};
var Context = /*#__PURE__*/ (0, import_react.createContext)(void 0);
function setCookie(cname, cvalue, exdays) {
	const d = /* @__PURE__ */ new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1e3);
	const expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
var detectTheme = (cookieKey) => {
	const fromCookie = window.document.cookie.split("; ").find((row) => row.startsWith(`${cookieKey}=`))?.split("=")[1];
	const theme = fromCookie === "light" || fromCookie === "dark" ? fromCookie : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	document.documentElement.setAttribute("data-theme", theme);
	return {
		isAutoMode: fromCookie !== "light" && fromCookie !== "dark",
		theme
	};
};
var detectHighContrastMode = (cookieKey) => {
	const fromCookie = window.document.cookie.split("; ").find((row) => row.startsWith(`${cookieKey}=`))?.split("=")[1] ?? null;
	const isHighContrast = fromCookie === "true" ? true : fromCookie === "false" ? false : !!(window.matchMedia && window.matchMedia("(prefers-contrast: more)").matches);
	if (isHighContrast) document.documentElement.setAttribute("data-enhanced-contrast", "");
	else document.documentElement.removeAttribute("data-enhanced-contrast");
	return isHighContrast;
};
/**
* Provides theme context to its children.
*
* At the root (no parent ThemeProvider): reads/writes cookies, responds to
* OS preference, owns setTheme and setHighContrastMode.
*
* When nested inside another ThemeProvider (e.g. inside a Popup): acts as a
* scoped visual  the `theme` prop sets the local theme, but setThemeoverride
* and setHighContrastMode bubble up through each level to the root provider so
* mutations always affect the global user preference.
*/
var ThemeProvider = (t0) => {
	const $ = (0, import_compiler_runtime.c)(30);
	const { children, highContrastMode: initialHighContrastMode, theme: themeOverride } = t0;
	const outerContext = (0, import_react.use)(Context);
	const isScoped = outerContext !== void 0;
	const { config } = useConfig();
	const preselectedTheme = config.admin.theme;
	const themeCookieKey = `${config.cookiePrefix || "payload"}-theme`;
	const contrastCookieKey = `${config.cookiePrefix || "payload"}-high-contrast-mode`;
	const [theme, setThemeState] = (0, import_react.useState)(themeOverride ?? "light");
	const [autoMode, setAutoMode] = (0, import_react.useState)(!isScoped);
	const [highContrastMode, setHighContrastModeState] = (0, import_react.useState)(isScoped ? outerContext.highContrastMode ?? false : initialHighContrastMode ?? false);
	let t1;
	if ($[0] !== isScoped || $[1] !== outerContext) {
		t1 = () => {
			if (isScoped) setHighContrastModeState(outerContext.highContrastMode);
		};
		$[0] = isScoped;
		$[1] = outerContext;
		$[2] = t1;
	} else t1 = $[2];
	const t2 = outerContext?.highContrastMode;
	let t3;
	if ($[3] !== isScoped || $[4] !== t2) {
		t3 = [isScoped, t2];
		$[3] = isScoped;
		$[4] = t2;
		$[5] = t3;
	} else t3 = $[5];
	(0, import_react.useEffect)(t1, t3);
	let t4;
	let t5;
	if ($[6] !== isScoped || $[7] !== preselectedTheme || $[8] !== themeCookieKey) {
		t4 = () => {
			if (isScoped || preselectedTheme !== "all") return;
			const { isAutoMode, theme: detectedTheme } = detectTheme(themeCookieKey);
			setThemeState(detectedTheme);
			setAutoMode(isAutoMode);
		};
		t5 = [
			isScoped,
			preselectedTheme,
			themeCookieKey
		];
		$[6] = isScoped;
		$[7] = preselectedTheme;
		$[8] = themeCookieKey;
		$[9] = t4;
		$[10] = t5;
	} else {
		t4 = $[9];
		t5 = $[10];
	}
	(0, import_react.useEffect)(t4, t5);
	let t6;
	let t7;
	if ($[11] !== contrastCookieKey || $[12] !== isScoped) {
		t6 = () => {
			if (isScoped) return;
			setHighContrastModeState(detectHighContrastMode(contrastCookieKey));
		};
		t7 = [isScoped, contrastCookieKey];
		$[11] = contrastCookieKey;
		$[12] = isScoped;
		$[13] = t6;
		$[14] = t7;
	} else {
		t6 = $[13];
		t7 = $[14];
	}
	(0, import_react.useEffect)(t6, t7);
	let t8;
	if ($[15] !== isScoped || $[16] !== outerContext || $[17] !== themeCookieKey) {
		t8 = (themeToSet, options) => {
			if (isScoped && !options?.scoped) {
				outerContext.setTheme(themeToSet, options);
				return;
			}
			const resolvedTheme = themeToSet === "auto" ? window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light" : themeToSet;
			setThemeState(resolvedTheme);
			setAutoMode(themeToSet === "auto");
			if (!isScoped) {
				setCookie(themeCookieKey, themeToSet, themeToSet === "auto" ? -1 : 365);
				document.documentElement.setAttribute("data-theme", resolvedTheme);
			}
		};
		$[15] = isScoped;
		$[16] = outerContext;
		$[17] = themeCookieKey;
		$[18] = t8;
	} else t8 = $[18];
	const setTheme = t8;
	let t9;
	if ($[19] !== contrastCookieKey || $[20] !== isScoped || $[21] !== outerContext) {
		t9 = (isHighContrast, options_0) => {
			if (isScoped && !options_0?.scoped) {
				outerContext.setHighContrastMode(isHighContrast, options_0);
				return;
			}
			setHighContrastModeState(isHighContrast);
			if (!isScoped) {
				setCookie(contrastCookieKey, String(isHighContrast), 365);
				if (isHighContrast) document.documentElement.setAttribute("data-enhanced-contrast", "");
				else document.documentElement.removeAttribute("data-enhanced-contrast");
			}
		};
		$[19] = contrastCookieKey;
		$[20] = isScoped;
		$[21] = outerContext;
		$[22] = t9;
	} else t9 = $[22];
	const setHighContrastMode = t9;
	const t10 = isScoped ? outerContext.autoMode : autoMode;
	const t11 = isScoped ? outerContext.theme : theme;
	let t12;
	if ($[23] !== children || $[24] !== highContrastMode || $[25] !== setHighContrastMode || $[26] !== setTheme || $[27] !== t10 || $[28] !== t11) {
		t12 = (0, import_jsx_runtime.jsx)(Context, {
			value: {
				autoMode: t10,
				highContrastMode,
				setHighContrastMode,
				setTheme,
				theme: t11
			},
			children
		});
		$[23] = children;
		$[24] = highContrastMode;
		$[25] = setHighContrastMode;
		$[26] = setTheme;
		$[27] = t10;
		$[28] = t11;
		$[29] = t12;
	} else t12 = $[29];
	return t12;
};
var useTheme = () => (0, import_react.use)(Context) ?? initialContext;
//#endregion
export { useConfig as a, PageConfigProvider as i, useTheme as n, useControllableState as o, ConfigProvider as r, ThemeProvider as t };
