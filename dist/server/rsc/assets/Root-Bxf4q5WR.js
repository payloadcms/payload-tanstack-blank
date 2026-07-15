import { r as __toESM } from "./rolldown-runtime-DJK8HYOj.js";
import { a as require_react_react_server, n as registerServerReference } from "./rsc-CrbjC1on.js";
import "../index.js";
import { h as getClientConfig } from "./index.rsc-CUDYWvAm.js";
import { Bt as RenderServerComponent, Q as PageConfigProvider, Vt as require_jsx_runtime_react_server } from "./upsertPreferences-BTcoIMIB.js";
import { n as isPathMatchingRoute } from "./getDocumentView-nmB564VU.js";
import { c as forgotPasswordBaseClass, i as resetPasswordBaseClass, n as verifyBaseClass, o as loginBaseClass } from "./Verify-BY0YeNrC.js";
import { n as DefaultTemplate, t as parse } from "./parse-B9syJk6S.js";
import { n as renderListView, r as DocumentView, t as ListView } from "./List-CCnKf9yG.js";
import { t as getVisibleEntities } from "./getVisibleEntities-DAh7u1oe.js";
import { t as stringify } from "./stringify-Cj7Z6Zfm.js";
import { t as getCustomViewByRoute } from "./getCustomViewByRoute-DWWi6sZ1.js";
import assetsManifest from "../__vite_rsc_assets_manifest.js";
import { applyLocaleFiltering, formatAdminURL, isNumber } from "payload/shared";
import { parseDocumentID } from "payload";
//#region \0virtual:vite-rsc/css?type=rsc&id=%2FUsers%2Fjfletcher%2Fpayload%2Fpayload-tanstack-blank%2Fnode_modules%2F.pnpm%2F%40payloadcms%2Bui%404.0.0-internal.fa183d3_%40types%2Breact%4019.2.14_monaco-editor%400.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a%2Fnode_modules%2F%40payloadcms%2Fui%2Fdist%2Ftemplates%2FMinimal%2Findex.js&lang.js
var import_jsx_runtime_react_server = require_jsx_runtime_react_server();
var import_react_react_server = /* @__PURE__ */ __toESM(require_react_react_server());
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
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/templates/Minimal/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/templates/Minimal/index.js
var baseClass = "template-minimal";
var MinimalTemplate = (props) => {
	const { children, className, style = {}, width = "normal" } = props;
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("section", {
		className: [
			className,
			baseClass,
			`${baseClass}--width-${width}`
		].filter(Boolean).join(" "),
		style,
		children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
			className: `${baseClass}__wrap`,
			children
		})
	});
};
MinimalTemplate = /* #__PURE__ */ __vite_rsc_wrap_css__(MinimalTemplate, "MinimalTemplate");
function __vite_rsc_wrap_css__(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getPreferences.js
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
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/handleAuthRedirect.js
/** Builds the redirect URL for unauthenticated or unauthorized admin access. */
var handleAuthRedirect = ({ config, route, searchParams, user }) => {
	const { admin: { routes: { login: loginRouteFromConfig, unauthorized: unauthorizedRoute } }, routes: { admin: adminRoute } } = config;
	if (searchParams && "redirect" in searchParams) delete searchParams.redirect;
	const redirectRoute = (route !== adminRoute ? route : "") + (Object.keys(searchParams ?? {}).length > 0 ? `${stringify(searchParams, { addQueryPrefix: true })}` : "");
	const redirectTo = formatAdminURL({
		adminRoute,
		path: user ? unauthorizedRoute : loginRouteFromConfig
	});
	const searchParamsWithRedirect = `${stringify({
		...parse(redirectTo.split("?")[1] ?? ""),
		...redirectRoute ? { redirect: redirectRoute } : {}
	}, { addQueryPrefix: true })}`;
	return `${redirectTo.split("?", 1)[0]}${searchParamsWithRedirect}`;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getRouteWithoutAdmin.js
var getRouteWithoutAdmin = ({ adminRoute, route }) => {
	return adminRoute && adminRoute !== "/" ? route.replace(adminRoute, "") : route;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/isCustomAdminView.js
/** Returns true if the given route matches a custom admin view defined in the config. */
var isCustomAdminView = ({ adminRoute, config, route }) => {
	if (config.admin?.components?.views) return Object.entries(config.admin.components.views).some(([_, view]) => {
		const routeWithoutAdmin = getRouteWithoutAdmin({
			adminRoute,
			route
		});
		if (view.exact) return routeWithoutAdmin === view.path;
		return view.path && view.path !== "/" && (routeWithoutAdmin === view.path || routeWithoutAdmin.startsWith(view.path + "/"));
	});
	return false;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/isPublicAdminRoute.js
var publicAdminRoutes = [
	"createFirstUser",
	"forgot",
	"login",
	"logout",
	"forgot",
	"inactivity",
	"unauthorized",
	"reset"
];
var isPublicAdminRoute = ({ adminRoute, config, route }) => {
	return publicAdminRoutes.some((routeSegment) => {
		const segment = config.admin?.routes?.[routeSegment] || routeSegment;
		const routeWithoutAdmin = getRouteWithoutAdmin({
			adminRoute,
			route
		});
		if (routeWithoutAdmin.startsWith(segment)) return true;
		else if (routeWithoutAdmin.includes("/verify/")) return true;
		else return false;
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/CollectionTrash/index.js
var TrashView = async (args) => {
	try {
		const { List: TrashList } = await renderListView({
			...args,
			enableRowSelections: true,
			trash: true,
			viewType: "trash"
		});
		return TrashList;
	} catch (error) {
		if (error.message === "not-found") args.initPageResult.req.server.notFound();
		console.error(error);
	}
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Hierarchy/index.js
var HierarchyView = async (args) => {
	try {
		const { List: HierarchyList } = await renderListView({
			...args,
			enableRowSelections: true,
			viewType: "hierarchy"
		});
		return HierarchyList;
	} catch (error) {
		if (error.message === "not-found") args.initPageResult.req.server.notFound();
		console.error(error);
	}
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Root/attachViewActions.js
function getViewActions({ editConfig, viewKey }) {
	if (editConfig && viewKey in editConfig && "actions" in editConfig[viewKey]) return editConfig[viewKey].actions ?? [];
	return [];
}
function getSubViewActions({ collectionOrGlobal, viewKeyArg }) {
	if (collectionOrGlobal?.admin?.components?.views?.edit) {
		let viewKey = viewKeyArg || "default";
		if ("root" in collectionOrGlobal.admin.components.views.edit) viewKey = "root";
		return getViewActions({
			editConfig: collectionOrGlobal.admin?.components?.views?.edit,
			viewKey
		});
	}
	return [];
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Root/getCustomCollectionViewByRoute.js
var getCustomCollectionViewByRoute = ({ adminRoute, baseRoute, currentRoute: currentRouteWithAdmin, views }) => {
	const currentRoute = adminRoute === "/" ? currentRouteWithAdmin : currentRouteWithAdmin.startsWith(adminRoute) ? currentRouteWithAdmin.slice(adminRoute.length) : currentRouteWithAdmin;
	if (views && typeof views === "object") {
		const foundEntry = Object.entries(views).find(([key, view]) => {
			if (key === "edit" || key === "list") return false;
			if (typeof view === "object" && view !== null && "path" in view && "Component" in view && typeof view.path === "string") {
				const adminView = view;
				const viewPath = `${baseRoute}${adminView.path}`;
				return isPathMatchingRoute({
					currentRoute,
					exact: adminView.exact,
					path: viewPath,
					sensitive: adminView.sensitive,
					strict: adminView.strict
				});
			}
			return false;
		});
		if (foundEntry) {
			const [viewKey, foundViewConfig] = foundEntry;
			return {
				view: { payloadComponent: foundViewConfig.Component },
				viewKey
			};
		}
	}
	return {
		view: { Component: null },
		viewKey: null
	};
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Root/getCustomGlobalViewByRoute.js
var getCustomGlobalViewByRoute = ({ adminRoute, baseRoute, currentRoute: currentRouteWithAdmin, views }) => {
	const currentRoute = adminRoute === "/" ? currentRouteWithAdmin : currentRouteWithAdmin.startsWith(adminRoute) ? currentRouteWithAdmin.slice(adminRoute.length) : currentRouteWithAdmin;
	if (views && typeof views === "object") {
		const foundEntry = Object.entries(views).find(([key, view]) => {
			if (key === "edit") return false;
			if (typeof view === "object" && view !== null && "path" in view && "Component" in view && typeof view.path === "string") {
				const adminView = view;
				const viewPath = `${baseRoute}${adminView.path}`;
				return isPathMatchingRoute({
					currentRoute,
					exact: adminView.exact,
					path: viewPath,
					sensitive: adminView.sensitive,
					strict: adminView.strict
				});
			}
			return false;
		});
		if (foundEntry) {
			const [viewKey, foundViewConfig] = foundEntry;
			return {
				view: { payloadComponent: foundViewConfig.Component },
				viewKey
			};
		}
	}
	return {
		view: { Component: null },
		viewKey: null
	};
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Root/getCustomViewByKey.js
var getCustomViewByKey = ({ config, viewKey }) => {
	const customViewComponent = config.admin.components?.views?.[viewKey];
	if (!customViewComponent) return null;
	return {
		view: { payloadComponent: customViewComponent.Component },
		viewKey
	};
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Root/getDocumentViewInfo.js
function getDocumentViewInfo(segments) {
	const [tabSegment, versionSegment] = segments;
	if (versionSegment) {
		if (tabSegment === "versions") return {
			documentSubViewType: "version",
			viewType: "version"
		};
	} else if (tabSegment === "versions") return {
		documentSubViewType: "versions",
		viewType: "document"
	};
	else if (tabSegment === "api") return {
		documentSubViewType: "api",
		viewType: "document"
	};
	return {
		documentSubViewType: "default",
		viewType: "document"
	};
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Root/getRouteData.js
var baseClasses = {
	account: "account",
	forgot: forgotPasswordBaseClass,
	login: loginBaseClass,
	reset: resetPasswordBaseClass,
	verify: verifyBaseClass
};
var getRouteData = ({ adminRoute, adminViews, collectionConfig, collectionPreferences = void 0, currentRoute, globalConfig, payload, segments }) => {
	const { config } = payload;
	let ViewToRender = null;
	let templateClassName;
	let templateType;
	let documentSubViewType;
	let viewType;
	const routeParams = {};
	const [segmentOne, segmentTwo, segmentThree, segmentFour, segmentFive, segmentSix] = segments;
	const viewActions = [...config?.admin?.components?.actions || []];
	const oneSegmentViews = {
		account: adminViews.account?.Component,
		createFirstUser: adminViews.createFirstUser?.Component,
		forgot: adminViews.forgot?.Component,
		inactivity: adminViews.logoutInactivity?.Component,
		login: adminViews.login?.Component,
		logout: adminViews.logout?.Component,
		unauthorized: adminViews.unauthorized?.Component
	};
	switch (segments.length) {
		case 0:
			if (currentRoute === adminRoute) {
				ViewToRender = { Component: adminViews.dashboard?.Component };
				templateClassName = "dashboard";
				templateType = "default";
				viewType = "dashboard";
			}
			break;
		case 1: {
			let viewKey;
			if (config.admin.routes) {
				const matchedRoute = Object.entries(config.admin.routes).find(([, route]) => {
					return isPathMatchingRoute({
						currentRoute,
						exact: true,
						path: formatAdminURL({
							adminRoute,
							path: route
						})
					});
				});
				if (matchedRoute) viewKey = matchedRoute[0];
			}
			const customView = viewKey && getCustomViewByKey({
				config,
				viewKey
			}) || getCustomViewByRoute({
				config,
				currentRoute
			});
			if (customView?.view?.payloadComponent || customView?.view?.Component) {
				ViewToRender = customView.view;
				if (viewKey && oneSegmentViews[viewKey]) {
					viewType = viewKey;
					templateClassName = baseClasses[viewKey] || viewKey;
					templateType = "minimal";
					if (viewKey === "account") templateType = "default";
				}
			} else if (oneSegmentViews[viewKey]) {
				ViewToRender = { Component: oneSegmentViews[viewKey] };
				viewType = viewKey;
				templateClassName = baseClasses[viewKey];
				templateType = "minimal";
				if (viewKey === "account") templateType = "default";
			}
			break;
		}
		case 2:
			if (`/${segmentOne}` === config.admin.routes.reset) {
				ViewToRender = { Component: adminViews.reset?.Component };
				templateClassName = baseClasses[segmentTwo];
				templateType = "minimal";
				viewType = "reset";
			} else if (collectionConfig) {
				routeParams.collection = collectionConfig.slug;
				if (collectionPreferences?.listViewType === "hierarchy" && collectionConfig.hierarchy) {
					ViewToRender = { Component: HierarchyView };
					templateClassName = `${segmentTwo}-hierarchy`;
					templateType = "default";
					viewType = "hierarchy";
				} else {
					ViewToRender = { Component: ListView };
					templateClassName = `${segmentTwo}-list`;
					templateType = "default";
					viewType = "list";
				}
				viewActions.push(...collectionConfig.admin.components?.views?.list?.actions || []);
			} else if (globalConfig) {
				routeParams.global = globalConfig.slug;
				ViewToRender = { Component: DocumentView };
				templateClassName = "global-edit";
				templateType = "default";
				viewType = "document";
				viewActions.push(...getViewActions({
					editConfig: globalConfig.admin?.components?.views?.edit,
					viewKey: "default"
				}));
			}
			break;
		default:
			if (segmentTwo === "verify") {
				routeParams.collection = segmentOne;
				routeParams.token = segmentThree;
				ViewToRender = { Component: adminViews.verify?.Component };
				templateClassName = "verify";
				templateType = "minimal";
				viewType = "verify";
			} else if (collectionConfig) {
				routeParams.collection = collectionConfig.slug;
				if (segmentThree === "trash" && typeof segmentFour === "string") {
					routeParams.id = segmentFour;
					routeParams.versionID = segmentSix;
					ViewToRender = { Component: DocumentView };
					templateClassName = `collection-default-edit`;
					templateType = "default";
					const viewInfo = getDocumentViewInfo([segmentFive, segmentSix]);
					viewType = viewInfo.viewType;
					documentSubViewType = viewInfo.documentSubViewType;
					viewActions.push(...getSubViewActions({
						collectionOrGlobal: collectionConfig,
						viewKeyArg: documentSubViewType
					}));
				} else if (segmentThree === "trash") {
					ViewToRender = { Component: TrashView };
					templateClassName = `${segmentTwo}-trash`;
					templateType = "default";
					viewType = "trash";
					viewActions.push(...collectionConfig.admin.components?.views?.list?.actions || []);
				} else if (segmentThree === "hierarchy" && collectionConfig.hierarchy) {
					ViewToRender = { Component: HierarchyView };
					templateClassName = `${segmentTwo}-hierarchy`;
					templateType = "default";
					viewType = "hierarchy";
					viewActions.push(...collectionConfig.admin.components?.views?.list?.actions || []);
				} else {
					const customCollectionView = getCustomCollectionViewByRoute({
						adminRoute,
						baseRoute: `/${segmentOne}/${segmentTwo}`,
						currentRoute,
						views: collectionConfig.admin.components?.views
					});
					if (customCollectionView.viewKey && customCollectionView.view.payloadComponent) {
						ViewToRender = customCollectionView.view;
						templateClassName = `collection-${customCollectionView.viewKey}`;
						templateType = "default";
						viewType = customCollectionView.viewKey;
					} else {
						routeParams.id = segmentThree === "create" ? void 0 : segmentThree;
						routeParams.versionID = segmentFive;
						ViewToRender = { Component: DocumentView };
						templateClassName = `collection-default-edit`;
						templateType = "default";
						const viewInfo = getDocumentViewInfo([segmentFour, segmentFive]);
						viewType = viewInfo.viewType;
						documentSubViewType = viewInfo.documentSubViewType;
						viewActions.push(...getSubViewActions({
							collectionOrGlobal: collectionConfig,
							viewKeyArg: documentSubViewType
						}));
					}
				}
			} else if (globalConfig) {
				const customGlobalView = getCustomGlobalViewByRoute({
					adminRoute,
					baseRoute: `/${segmentOne}/${segmentTwo}`,
					currentRoute,
					views: globalConfig.admin.components?.views
				});
				if (customGlobalView.viewKey && customGlobalView.view.payloadComponent) {
					ViewToRender = customGlobalView.view;
					templateClassName = `global-${customGlobalView.viewKey}`;
					templateType = "default";
					viewType = customGlobalView.viewKey;
				} else {
					routeParams.global = globalConfig.slug;
					routeParams.versionID = segmentFour;
					ViewToRender = { Component: DocumentView };
					templateClassName = `global-edit`;
					templateType = "default";
					const viewInfo = getDocumentViewInfo([segmentThree, segmentFour]);
					viewType = viewInfo.viewType;
					documentSubViewType = viewInfo.documentSubViewType;
					viewActions.push(...getSubViewActions({
						collectionOrGlobal: globalConfig,
						viewKeyArg: documentSubViewType
					}));
				}
			}
			break;
	}
	if (!ViewToRender) ViewToRender = getCustomViewByRoute({
		config,
		currentRoute
	})?.view;
	if (collectionConfig) {
		if (routeParams.id) routeParams.id = parseDocumentID({
			id: routeParams.id,
			collectionSlug: collectionConfig.slug,
			payload
		});
		if (routeParams.versionID) routeParams.versionID = parseDocumentID({
			id: routeParams.versionID,
			collectionSlug: collectionConfig.slug,
			payload
		});
	}
	if (globalConfig && routeParams.versionID) routeParams.versionID = payload.db.defaultIDType === "number" && isNumber(routeParams.versionID) ? Number(routeParams.versionID) : routeParams.versionID;
	if (viewActions.length) viewActions.reverse();
	return {
		collectionConfig,
		DefaultView: ViewToRender,
		documentSubViewType,
		globalConfig,
		routeParams,
		templateClassName,
		templateType,
		viewActions: viewActions.length ? viewActions : void 0,
		viewType
	};
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Root/index.js
var renderRoot = async ({ adminViews, config: configPromise, importMap, initReq, notFound, params: paramsPromise, redirect, searchParams: searchParamsPromise }) => {
	const config = await configPromise;
	const { admin: { routes: { createFirstUser: _createFirstUserRoute }, user: userSlug }, routes: { admin: adminRoute } } = config;
	const params = await paramsPromise;
	const currentRoute = formatAdminURL({
		adminRoute,
		path: Array.isArray(params.segments) ? `/${params.segments.join("/")}` : null
	});
	const segments = Array.isArray(params.segments) ? params.segments : [];
	const isCollectionRoute = segments[0] === "collections";
	const isGlobalRoute = segments[0] === "globals";
	let collectionConfig = void 0;
	let globalConfig = void 0;
	const searchParams = await searchParamsPromise;
	if (isCollectionRoute) {
		if (segments.length === 1) {
			const { viewKey } = getCustomViewByRoute({
				config,
				currentRoute: "/collections"
			});
			if (!viewKey) redirect(adminRoute);
		}
		if (segments[1]) collectionConfig = config.collections.find(({ slug }) => slug === segments[1]);
	}
	if (isGlobalRoute) {
		if (segments.length === 1) {
			const { viewKey } = getCustomViewByRoute({
				config,
				currentRoute: "/globals"
			});
			if (!viewKey) redirect(adminRoute);
		}
		if (segments[1]) globalConfig = config.globals.find(({ slug }) => slug === segments[1]);
	}
	if (isCollectionRoute && !collectionConfig || isGlobalRoute && !globalConfig) notFound();
	const queryString = `${stringify(searchParams ?? {}, { addQueryPrefix: true })}`;
	const { cookies, locale, permissions, req, req: { payload } } = await initReq({
		configPromise: config,
		importMap,
		key: "initPage",
		overrides: {
			fallbackLocale: false,
			req: { query: parse(queryString, {
				depth: 10,
				ignoreQueryPrefix: true
			}) },
			urlSuffix: `${currentRoute}${searchParams ? queryString : ""}`
		}
	});
	if (!permissions.canAccessAdmin && !isPublicAdminRoute({
		adminRoute,
		config: payload.config,
		route: currentRoute
	}) && !isCustomAdminView({
		adminRoute,
		config: payload.config,
		route: currentRoute
	})) req.server.redirect(handleAuthRedirect({
		config: payload.config,
		route: currentRoute,
		searchParams,
		user: req.user
	}));
	let collectionPreferences = void 0;
	if (collectionConfig && segments.length === 2) await getPreferences(`collection-${collectionConfig.slug}`, req.payload, req.user.id, config.admin.user).then((res) => {
		if (res && res.value) collectionPreferences = res.value;
	});
	const { DefaultView, documentSubViewType, routeParams, templateClassName, templateType, viewActions, viewType } = getRouteData({
		adminRoute,
		adminViews,
		collectionConfig,
		collectionPreferences,
		currentRoute,
		globalConfig,
		payload,
		searchParams,
		segments
	});
	req.routeParams = routeParams;
	const dbHasUser = req.user || await req.payload.db.findOne({
		collection: userSlug,
		req
	})?.then((doc) => !!doc);
	/**
	* This function is responsible for handling the case where the view is not found.
	* The current route did not match any default views or custom route views.
	*/
	if (!DefaultView?.Component && !DefaultView?.payloadComponent) {
		if (req?.user) req.server.notFound();
		if (dbHasUser) req.server.redirect(adminRoute);
	}
	const disableLocalStrategy = config.collections.find(({ slug }) => slug === userSlug)?.auth?.disableLocalStrategy;
	const createFirstUserRoute = formatAdminURL({
		adminRoute,
		path: _createFirstUserRoute
	});
	if (disableLocalStrategy && currentRoute === createFirstUserRoute) req.server.redirect(adminRoute);
	if (!dbHasUser && currentRoute !== createFirstUserRoute && !disableLocalStrategy) req.server.redirect(createFirstUserRoute);
	if (dbHasUser && currentRoute === createFirstUserRoute) req.server.redirect(adminRoute);
	if (!DefaultView?.Component && !DefaultView?.payloadComponent && !dbHasUser) req.server.redirect(adminRoute);
	const clientConfig = getClientConfig({
		config,
		i18n: req.i18n,
		importMap,
		user: viewType === "createFirstUser" ? true : req.user
	});
	await applyLocaleFiltering({
		clientConfig,
		config,
		req
	});
	if (clientConfig.localization && req.locale && !clientConfig.localization.localeCodes.includes(req.locale)) req.server.redirect(`${currentRoute}${stringify({
		...searchParams,
		locale: clientConfig.localization.localeCodes.includes(clientConfig.localization.defaultLocale) ? clientConfig.localization.defaultLocale : clientConfig.localization.localeCodes[0]
	}, { addQueryPrefix: true })}`);
	const visibleEntities = getVisibleEntities({ req });
	const RenderedView = RenderServerComponent({
		clientProps: {
			clientConfig,
			collectionSlug: collectionConfig?.slug,
			docID: routeParams.id,
			documentSubViewType,
			globalSlug: globalConfig?.slug,
			viewType
		},
		Component: DefaultView.payloadComponent,
		Fallback: DefaultView.Component,
		importMap,
		serverProps: {
			clientConfig,
			collectionConfig,
			docID: routeParams.id,
			globalConfig,
			i18n: req.i18n,
			importMap,
			initPageResult: {
				collectionConfig,
				cookies,
				docID: routeParams.id,
				globalConfig,
				languageOptions: Object.entries(req.payload.config.i18n.supportedLanguages || {}).reduce((acc, [language, languageConfig]) => {
					if (Object.keys(req.payload.config.i18n.supportedLanguages).includes(language)) acc.push({
						label: languageConfig.translations.general.thisLanguage,
						value: language
					});
					return acc;
				}, []),
				locale,
				permissions,
				req,
				translations: req.i18n.translations,
				visibleEntities
			},
			params,
			payload: req.payload,
			searchParams,
			server: req.server,
			viewActions
		}
	});
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(PageConfigProvider, {
		config: clientConfig,
		children: [
			!templateType && /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(import_react_react_server.Fragment, { children: RenderedView }),
			templateType === "minimal" && /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(MinimalTemplate, {
				className: templateClassName,
				children: RenderedView
			}),
			templateType === "default" && /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(DefaultTemplate, {
				collectionSlug: collectionConfig?.slug,
				docID: routeParams.id,
				documentSubViewType,
				globalSlug: globalConfig?.slug,
				i18n: req.i18n,
				locale,
				params,
				payload: req.payload,
				permissions,
				req,
				searchParams,
				user: req.user,
				viewActions,
				viewType,
				visibleEntities: {
					collections: visibleEntities?.collections,
					globals: visibleEntities?.globals
				},
				children: RenderedView
			})
		]
	});
};
renderRoot = /* #__PURE__ */ registerServerReference(renderRoot, "c936f97bd3a8", "renderRoot");
//#endregion
export { renderRoot };
