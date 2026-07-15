import { o as __toESM } from "./rolldown-runtime-CE-6LUnI.js";
import { t as require_react } from "./react-yhpvVyYg.js";
import { N as deepEqual, P as escapeHtml, i as useStore, l as useHydrated, n as Outlet, s as useRouter, w as notFound, x as redirect } from "./Match-DGEQGAgJ.js";
import { d as useStructuralSharing, t as TanStackRouterAdapter, u as useMatch } from "./RouterAdapter-BgsiQH-n.js";
import { t as require_jsx_runtime } from "./jsx-runtime-Ch3VfgV3.js";
import { d as getScriptPreloadAttrs, f as resolveManifestCssLink, l as appendUniqueUserTags, u as getAssetCrossOrigin } from "../server.js";
import { p as rtlLanguages } from "./utils-BZcNK7nB.js";
import { i as ProgressBar, n as RootProvider, t as NotFoundClient } from "./index.client-CHynu2Y_.js";
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/useLoaderData.js
/**
* Read and select the current route's loader data with type‑safety.
*
* Options:
* - `from`/`strict`: Choose which route's data to read and strictness
* - `select`: Map the loader data to a derived value
* - `structuralSharing`: Enable structural sharing for stable references
*
* @returns The loader data (or selected value) for the matched route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useLoaderDataHook
*/
function useLoaderData(opts) {
	return useMatch({
		from: opts.from,
		strict: opts.strict,
		structuralSharing: opts.structuralSharing,
		select: (match) => {
			return opts.select ? opts.select(match.loaderData) : match.loaderData;
		}
	});
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* Imperative navigation hook.
*
* Returns a stable `navigate(options)` function to change the current location
* programmatically. Prefer the `Link` component for user-initiated navigation,
* and use this hook from effects, callbacks, or handlers where imperative
* navigation is required.
*
* Options:
* - `from`: Optional route base used to resolve relative `to` paths.
*
* @returns A function that accepts `NavigateOptions`.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useNavigateHook
*/
function useNavigate(_defaultOpts) {
	const router = useRouter();
	return import_react.useCallback((options) => {
		return router.navigate({
			...options,
			from: options.from ?? _defaultOpts?.from
		});
	}, [_defaultOpts?.from, router]);
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/useRouterState.js
/**
* Subscribe to the router's state store with optional selection and
* structural sharing for render optimization.
*
* Options:
* - `select`: Project the full router state to a derived slice
* - `structuralSharing`: Replace-equal semantics for stable references
* - `router`: Read state from a specific router instance instead of context
*
* @returns The selected router state (or the full state by default).
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useRouterStateHook
*/
function useRouterState(opts) {
	const contextRouter = useRouter({ warn: opts?.router === void 0 });
	const router = opts?.router || contextRouter;
	{
		const state = router.stores.__store.get();
		return opts?.select ? opts.select(state) : state;
	}
	return useStore(router.stores.__store, useStructuralSharing(opts, router));
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/Asset.js
var import_jsx_runtime = require_jsx_runtime();
var noopScriptHandler = () => {};
function setScriptAttrs(script, attrs) {
	if (!attrs) return;
	for (const [key, value] of Object.entries(attrs)) if (key !== "suppressHydrationWarning" && value !== void 0 && value !== false) script.setAttribute(key, typeof value === "boolean" ? "" : String(value));
}
function Asset(asset) {
	const { attrs, children, nonce, preventScriptHoist } = asset;
	switch (asset.tag) {
		case "title": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
			...attrs,
			suppressHydrationWarning: true,
			children
		});
		case "meta": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
			...attrs,
			suppressHydrationWarning: true
		});
		case "link": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			...attrs,
			precedence: attrs?.precedence ?? (attrs?.rel === "stylesheet" ? "default" : void 0),
			nonce,
			suppressHydrationWarning: true
		});
		case "style":
			if (asset.inlineCss && false);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
				...attrs,
				dangerouslySetInnerHTML: { __html: children },
				nonce
			});
		case "script": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Script, {
			attrs,
			preventScriptHoist,
			children
		});
		default: return null;
	}
}
function Script({ attrs, children, preventScriptHoist }) {
	useRouter();
	useHydrated();
	const dataScript = typeof attrs?.type === "string" && attrs.type !== "" && attrs.type !== "text/javascript" && attrs.type !== "module";
	import_react.useEffect(() => {
		if (dataScript) return;
		if (attrs?.src) {
			const normSrc = (() => {
				try {
					const base = document.baseURI || window.location.href;
					return new URL(attrs.src, base).href;
				} catch {
					return attrs.src;
				}
			})();
			for (const el of document.querySelectorAll("script[src]")) if (el.src === normSrc) return;
			const script = document.createElement("script");
			setScriptAttrs(script, attrs);
			document.head.appendChild(script);
			return () => script.remove();
		}
		if (typeof children === "string") {
			const typeAttr = typeof attrs?.type === "string" ? attrs.type : "text/javascript";
			const nonceAttr = typeof attrs?.nonce === "string" ? attrs.nonce : void 0;
			for (const el of document.querySelectorAll("script:not([src])")) {
				if (!(el instanceof HTMLScriptElement)) continue;
				const sType = el.getAttribute("type") ?? "text/javascript";
				const sNonce = el.getAttribute("nonce") ?? void 0;
				if (el.textContent === children && sType === typeAttr && sNonce === nonceAttr) return;
			}
			const script = document.createElement("script");
			script.textContent = children;
			setScriptAttrs(script, attrs);
			document.head.appendChild(script);
			return () => script.remove();
		}
	}, [
		attrs,
		children,
		dataScript
	]);
	if (attrs?.src) {
		if (!preventScriptHoist) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			...attrs,
			suppressHydrationWarning: true
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			...attrs,
			onLoad: noopScriptHandler,
			suppressHydrationWarning: true
		});
	}
	if (typeof children === "string") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		...attrs,
		dangerouslySetInnerHTML: { __html: children },
		suppressHydrationWarning: true
	});
	return null;
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/headContentUtils.js
function buildTagsFromMatches(router, nonce, matches, assetCrossOrigin) {
	const routeMeta = matches.map((match) => match.meta).filter((meta) => meta !== void 0);
	const resultMeta = [];
	const metaByAttribute = {};
	let title;
	for (let i = routeMeta.length - 1; i >= 0; i--) {
		const metas = routeMeta[i];
		for (let j = metas.length - 1; j >= 0; j--) {
			const m = metas[j];
			if (!m) continue;
			if (m.title) {
				if (!title) title = {
					tag: "title",
					children: m.title
				};
			} else if ("script:ld+json" in m) try {
				const json = JSON.stringify(m["script:ld+json"]);
				resultMeta.push({
					tag: "script",
					attrs: { type: "application/ld+json" },
					children: escapeHtml(json)
				});
			} catch {}
			else {
				const attribute = m.name ?? m.property;
				if (attribute) if (metaByAttribute[attribute]) continue;
				else metaByAttribute[attribute] = true;
				resultMeta.push({
					tag: "meta",
					attrs: {
						...m,
						nonce
					}
				});
			}
		}
	}
	if (title) resultMeta.push(title);
	if (nonce) resultMeta.push({
		tag: "meta",
		attrs: {
			property: "csp-nonce",
			content: nonce
		}
	});
	resultMeta.reverse();
	const constructedLinks = matches.flatMap((match) => match.links ?? []).filter((link) => link !== void 0).map((link) => ({
		tag: "link",
		attrs: {
			...link,
			nonce
		}
	}));
	const manifest = router.ssr?.manifest;
	const manifestCssTags = [];
	if (manifest) {
		matches.forEach((match) => {
			(manifest.routes[match.routeId]?.css)?.forEach((link) => {
				const resolvedLink = resolveManifestCssLink(link);
				manifestCssTags.push({
					tag: "link",
					attrs: {
						rel: "stylesheet",
						...resolvedLink,
						crossOrigin: getAssetCrossOrigin(assetCrossOrigin, "stylesheet") ?? resolvedLink.crossOrigin,
						suppressHydrationWarning: true,
						nonce
					}
				});
			});
		});
		if (manifest.inlineStyle) manifestCssTags.push({
			tag: "style",
			attrs: {
				...manifest.inlineStyle.attrs,
				nonce
			},
			children: manifest.inlineStyle.children,
			inlineCss: true
		});
	}
	const preloadLinks = [];
	if (manifest) matches.forEach((match) => {
		manifest.routes[match.routeId]?.preloads?.forEach((preload) => {
			preloadLinks.push({
				tag: "link",
				attrs: {
					...getScriptPreloadAttrs(manifest, preload, assetCrossOrigin),
					nonce
				}
			});
		});
	});
	const styles = matches.flatMap((match) => match.styles ?? []).filter((style) => style !== void 0).map(({ children, ...attrs }) => ({
		tag: "style",
		attrs: {
			...attrs,
			nonce
		},
		children
	}));
	const headScripts = matches.flatMap((match) => match.headScripts ?? []).filter((script) => script !== void 0).map(({ children, ...script }) => ({
		tag: "script",
		attrs: {
			...script,
			nonce
		},
		children
	}));
	const tags = [];
	appendUniqueUserTags(tags, resultMeta);
	tags.push(...preloadLinks);
	appendUniqueUserTags(tags, constructedLinks);
	tags.push(...manifestCssTags);
	appendUniqueUserTags(tags, styles);
	appendUniqueUserTags(tags, headScripts);
	return tags;
}
/**
* Build the list of head/link/meta/script tags to render for active matches.
* Used internally by `HeadContent`.
*/
var useTags = (assetCrossOrigin) => {
	const router = useRouter();
	const nonce = router.options.ssr?.nonce;
	return buildTagsFromMatches(router, nonce, router.stores.matches.get(), assetCrossOrigin);
};
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/HeadContent.js
/**
* Render route-managed head tags (title, meta, links, styles, head scripts).
* Place inside the document head of your app shell.
* @link https://tanstack.com/router/latest/docs/framework/react/guide/document-head-management
*/
function HeadContent(props) {
	const tags = useTags(props.assetCrossOrigin);
	const nonce = useRouter().options.ssr?.nonce;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: tags.map((tag) => /* @__PURE__ */ (0, import_react.createElement)(Asset, {
		...tag,
		key: `tsr-meta-${JSON.stringify(tag)}`,
		nonce
	})) });
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/Scripts.js
/**
* Render body script tags collected from route matches and SSR manifests.
* Should be placed near the end of the document body.
*/
var Scripts = () => {
	const router = useRouter();
	const nonce = router.options.ssr?.nonce;
	const getAssetScripts = (matches) => {
		const assetScripts = [];
		const manifest = router.ssr?.manifest;
		if (!manifest) return [];
		for (const match of matches) {
			const scripts = manifest.routes[match.routeId]?.scripts;
			if (!scripts) continue;
			for (const asset of scripts) assetScripts.push({
				tag: "script",
				attrs: {
					...asset.attrs,
					nonce
				},
				children: asset.children,
				...typeof asset.attrs?.src === "string" ? { preventScriptHoist: true } : {}
			});
		}
		return assetScripts;
	};
	const getScripts = (matches) => matches.map((match) => match.scripts).flat(1).filter(Boolean).map(({ children, ...script }) => ({
		tag: "script",
		attrs: {
			...script,
			suppressHydrationWarning: true,
			nonce
		},
		children
	}));
	{
		const activeMatches = router.stores.matches.get();
		const assetScripts = getAssetScripts(activeMatches);
		return renderScripts(router, getScripts(activeMatches), assetScripts);
	}
	const assetScripts = useStore(router.stores.matches, getAssetScripts, deepEqual);
	return renderScripts(router, useStore(router.stores.matches, getScripts, deepEqual), assetScripts);
};
function renderScripts(router, scripts, assetScripts) {
	const allScripts = [...scripts, ...assetScripts];
	if (router.serverSsr) {
		const serverBufferedScript = router.serverSsr.takeBufferedScripts();
		if (serverBufferedScript) allScripts.unshift(serverBufferedScript);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: allScripts.map((asset, i) => /* @__PURE__ */ (0, import_react.createElement)(Asset, {
		...asset,
		key: `tsr-scripts-${asset.tag}-${i}`
	})) });
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getLanguageDir.js
/**
* Resolves the `<html dir>` value for a language code. Returns lowercase
* `'ltr'`/`'rtl'` to match the `[dir='ltr']`/`[dir='rtl']` selectors the admin
* stylesheet scopes its layout rules under (e.g. the document sidebar divider).
* Single source of truth shared across framework adapters so the SSR'd `dir`
* never diverges from what the CSS expects.
*/
var getLanguageDir = ({ languageCode }) => rtlLanguages.includes(languageCode) ? "rtl" : "ltr";
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/layouts/Root/withPayloadRoot.js
/**
* The `<html>` document shell for Payload admin routes — the TanStack Start
* equivalent of `@payloadcms/next`'s root layout `<html>`. Sets
* `data-theme`/`lang`/`dir` on `<html>` from the server-computed layout data
* (`getLayoutData`, exposed on the `/_payload` route loader), so the admin
* panel renders themed with the correct text direction on the first paint with no
* client bootstrap script — the same server-side path Next's `RootLayout`
* uses, sharing `getRequestTheme`/`getLanguageDir` from `@payloadcms/ui`.
*/ function PayloadAdminShell({ children }) {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)("html", {
		...useRouterState({ select: (state) => {
			for (const match of state.matches) {
				const data = match.loaderData;
				if (data?.theme && data?.languageCode) return {
					"data-theme": data.theme,
					dir: getLanguageDir({ languageCode: data.languageCode }),
					lang: data.languageCode
				};
			}
			return { dir: "ltr" };
		} }),
		suppressHydrationWarning: true,
		children: [/*#__PURE__*/ (0, import_jsx_runtime.jsxs)("head", { children: [/*#__PURE__*/ (0, import_jsx_runtime.jsx)("style", { children: `@layer payload-default, payload;` }), /*#__PURE__*/ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /*#__PURE__*/ (0, import_jsx_runtime.jsxs)("body", { children: [children, /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
/**
* Wraps your application's root document shell so Payload owns its own
* `<html>` chrome on admin routes while your shell renders everywhere else.
*
* Attach the result to the root route's `shellComponent`; it is the single
* integration touch point — no root loader and no manual data threading:
*
* ```tsx
* export const Route = createRootRoute({
*   shellComponent: withPayloadRoot(MarketingRoot),
* })
* ```
*/ function withPayloadRoot(RootShell, options = {}) {
	const { adminRoute = "/admin" } = options;
	return function PayloadRootShell({ children }) {
		if (useRouterState({ select: (s) => {
			const { pathname } = s.location;
			return pathname === adminRoute || pathname.startsWith(`${adminRoute}/`);
		} })) return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(PayloadAdminShell, { children });
		return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(RootShell, { children });
	};
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/exports/shared/index.js
var U = (e) => /\biPhone\b/.test(e ?? "");
var k = "width=device-width, initial-scale=1";
var O = (e) => U(e) ? `${k}, maximum-scale=1` : k;
var ye = {};
var h = {};
function d(e, t) {
	try {
		let o = (ye[e] ||= new Intl.DateTimeFormat("en-GB", {
			timeZone: e,
			hour: "numeric",
			timeZoneName: "longOffset"
		}).format)(t).split("GMT")[1] || "";
		return o in h ? h[o] : Z(o, o.split(":"));
	} catch {
		if (e in h) return h[e];
		let r = e?.match(xe);
		return r ? Z(e, r.slice(1)) : NaN;
	}
}
var xe = /([+-]\d\d):?(\d\d)?/;
function Z(e, t) {
	let r = +t[0], o = +(t[1] || 0);
	return h[e] = r > 0 ? r * 60 + o : r * 60 - o;
}
var m = class e extends Date {
	constructor(...t) {
		super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(d(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), A(this, NaN), L(this)) : this.setTime(Date.now());
	}
	static tz(t, ...r) {
		return r.length ? new e(...r, t) : new e(Date.now(), t);
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	getTimezoneOffset() {
		return -d(this.timeZone, this);
	}
	setTime(t) {
		return Date.prototype.setTime.apply(this, arguments), L(this), +this;
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
};
var P = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
	if (!P.test(e)) return;
	let t = e.replace(P, "$1UTC");
	m.prototype[t] && (e.startsWith("get") ? m.prototype[e] = function() {
		return this.internal[t]();
	} : (m.prototype[e] = function() {
		return Date.prototype[t].apply(this.internal, arguments), De(this), +this;
	}, m.prototype[t] = function() {
		return Date.prototype[t].apply(this, arguments), L(this), +this;
	}));
});
function L(e) {
	e.internal.setTime(+e), e.internal.setUTCMinutes(e.internal.getUTCMinutes() - e.getTimezoneOffset());
}
function De(e) {
	Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), A(e);
}
function A(e) {
	let t = d(e.timeZone, e), r = /* @__PURE__ */ new Date(+e);
	r.setUTCHours(r.getUTCHours() - 1);
	let o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = o - -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
	s && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + s);
	let a = o - t;
	a && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + a);
	let l = d(e.timeZone, e), u = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - l, f = l !== t, V = u - a;
	if (f && V) {
		Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + V);
		let x = l - d(e.timeZone, e);
		x && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + x), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + x));
	}
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/meta.js
/**
* Builds TanStack Router `head()` `meta` + `links` entries for an admin page
* from the resolved `AdminPageMetadata`, mirroring the tags Next.js renders
* natively from the same `MetaConfig` (title, description, robots, keywords,
* OpenGraph, Twitter — derived from OpenGraph — and icon links).
*
* ```ts
* export const Route = createFileRoute('/admin/$')({
*   head: ({ loaderData }) => getAdminMeta(loaderData?.metadata),
* })
* ```
*/ function getAdminMeta(metadata) {
	const meta = [{ charSet: "utf-8" }, {
		name: "viewport",
		content: metadata?.viewport ?? O()
	}];
	const links = [];
	if (!metadata) return {
		links,
		meta
	};
	if (metadata.title) meta.push({ title: metadata.title });
	if (metadata.description) meta.push({
		name: "description",
		content: metadata.description
	});
	if (metadata.keywords) meta.push({
		name: "keywords",
		content: metadata.keywords
	});
	if (metadata.robots) meta.push({
		name: "robots",
		content: metadata.robots
	});
	const og = metadata.openGraph;
	if (og) {
		if (og.title) meta.push({
			content: og.title,
			property: "og:title"
		});
		if (og.description) meta.push({
			content: og.description,
			property: "og:description"
		});
		if (og.siteName) meta.push({
			content: og.siteName,
			property: "og:site_name"
		});
		for (const image of og.images ?? []) {
			meta.push({
				content: image.url,
				property: "og:image"
			});
			if (image.width) meta.push({
				content: String(image.width),
				property: "og:image:width"
			});
			if (image.height) meta.push({
				content: String(image.height),
				property: "og:image:height"
			});
			if (image.alt) meta.push({
				content: image.alt,
				property: "og:image:alt"
			});
		}
		const firstImage = og.images?.[0];
		if (firstImage) {
			meta.push({
				name: "twitter:card",
				content: "summary_large_image"
			});
			meta.push({
				name: "twitter:image",
				content: firstImage.url
			});
		}
		if (og.title) meta.push({
			name: "twitter:title",
			content: og.title
		});
		if (og.description) meta.push({
			name: "twitter:description",
			content: og.description
		});
	}
	for (const icon of metadata.icons ?? []) links.push({
		href: icon.url,
		rel: icon.rel ?? "icon",
		...icon.media ? { media: icon.media } : {},
		...icon.sizes ? { sizes: icon.sizes } : {},
		...icon.type ? { type: icon.type } : {}
	});
	return {
		links,
		meta
	};
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/routes/adminRoutes.js
var searchToRecord = (searchStr) => Object.fromEntries(new URLSearchParams(searchStr));
var runLoader = async (load, splat, searchStr) => {
	const data = await load({ data: {
		_splat: splat,
		search: searchToRecord(searchStr)
	} });
	if (data?._redirect) throw redirect({ to: data._redirect });
	return data;
};
function AdminPage() {
	const data = useLoaderData({ strict: false });
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: data?.rscPayload }, data?.routeKey);
}
function AdminNotFound(props) {
	const rscPayload = props?.data?.rscPayload;
	if (!rscPayload) return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(NotFoundClient, {});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: rscPayload }, props?.data?.routeKey);
}
/**
* Route options for the admin splat route (`/_payload/admin/$`). Renders Payload's
* server-built NotFound page (shipped via the `notFound()` error's
* `data.rscPayload`) for unknown/access-denied routes, falling back to the bare
* client view.
*/ function payloadAdminSplatRoute({ load }) {
	return {
		component: AdminPage,
		head: ({ loaderData }) => getAdminMeta(loaderData?.metadata),
		loader: {
			handler: async ({ location, params }) => {
				const data = await runLoader(load, params._splat ?? "", location.searchStr);
				if (data?._notFound) throw notFound({ data: {
					routeKey: data.routeKey,
					rscPayload: data.rscPayload
				} });
				return data;
			},
			staleReloadMode: "blocking"
		},
		loaderDeps: ({ search }) => ({ searchKey: JSON.stringify(search) }),
		notFoundComponent: AdminNotFound,
		validateSearch: (search) => search
	};
}
/**
* Route options for the admin index route (`/_payload/admin/`). Same loader as the
* splat route but throws a bare `notFound()` (no rscPayload) on miss.
*/ function payloadAdminIndexRoute({ load }) {
	return {
		component: AdminPage,
		head: ({ loaderData }) => getAdminMeta(loaderData?.metadata),
		loader: {
			handler: async ({ location }) => {
				const data = await runLoader(load, "", location.searchStr);
				if (data?._notFound) throw notFound();
				return data;
			},
			staleReloadMode: "blocking"
		},
		loaderDeps: ({ search }) => ({ searchKey: JSON.stringify(search) }),
		validateSearch: (search) => search
	};
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/routes/layoutRoute.js
/**
* Route options for the Payload admin layout (`/_payload`). Maps the layout
* loader data onto `RootProvider` and renders the admin chrome (progress bar,
* custom-provider tree or router `<Outlet />`, portal mount). The app supplies
* `load` (the layout-data server fn) and `serverFunction` (the server-function
* client wired into `RootProvider`); everything else is adapter-owned.
*/ function payloadLayoutRoute({ load, serverFunction }) {
	function PayloadLayout() {
		const data = useLoaderData({ strict: false });
		return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/*#__PURE__*/ (0, import_jsx_runtime.jsxs)(RootProvider, {
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
			children: [/*#__PURE__*/ (0, import_jsx_runtime.jsx)(ProgressBar, {}), data.providers ?? /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Outlet, {})]
		}), /*#__PURE__*/ (0, import_jsx_runtime.jsx)("div", { id: "portal" })] });
	}
	return {
		component: PayloadLayout,
		loader: {
			handler: () => load(),
			staleReloadMode: "blocking"
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/serverFunctionClient.js
/**
* Builds the client-side `ServerFunctionClient` wired into
* `RootProvider.serverFunction`, given the app's `createServerFn`-based
* dispatcher (`runServerFn`).
*
* Strips functions / symbols / RegExps / React elements from the args before
* dispatching: the previous `fetch + JSON.stringify` pipeline silently dropped
* those, but TanStack Start's seroval-based wire format errors instead. We
* mirror the relaxed behaviour so existing callers (e.g. `getFormState` in
* `ServerFunctionsProvider`) that may pass the live form state — which can
* carry stray functions — keep working without each call site sanitising.
*
* Delegates to `runServerFn`, so the response (including any RSC handles for
* server-rendered custom components) is decoded by TanStack Start back into
* renderable React nodes on the client.
*/ function createServerFunctionClient({ runServerFn }) {
	return async (args) => {
		return await runServerFn({ data: stripUnserializable(args) });
	};
}
/**
* Recursively removes values TanStack Start's seroval wire format cannot
* serialize (functions, symbols, RegExps, React elements, cyclic refs) and
* normalizes `Date` subclasses to plain `Date`.
*/ function stripUnserializable(value, cache = /* @__PURE__ */ new WeakMap(), ancestors = /* @__PURE__ */ new WeakSet()) {
	if (value === null || value === void 0) return value;
	const t = typeof value;
	if (t === "function" || t === "symbol") return;
	if (t !== "object") return value;
	const obj = value;
	if (typeof obj.$$typeof === "symbol") return;
	if (ancestors.has(obj)) return;
	if (cache.has(obj)) return cache.get(obj);
	if (obj instanceof Date) return new Date(obj.getTime());
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
//#endregion
export { withPayloadRoot as a, Asset as c, payloadAdminSplatRoute as i, useNavigate as l, payloadLayoutRoute as n, Scripts as o, payloadAdminIndexRoute as r, HeadContent as s, createServerFunctionClient as t, useLoaderData as u };
