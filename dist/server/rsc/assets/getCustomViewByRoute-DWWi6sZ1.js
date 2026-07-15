import { n as isPathMatchingRoute } from "./getDocumentView-nmB564VU.js";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Root/getCustomViewByRoute.js
/** Finds a top-level custom admin view matching the given route. */
var getCustomViewByRoute = ({ config, currentRoute: currentRouteWithAdmin }) => {
	const { admin: { components: { views } }, routes: { admin: adminRoute } } = config;
	let viewKey;
	const currentRoute = adminRoute === "/" ? currentRouteWithAdmin : currentRouteWithAdmin.replace(adminRoute, "");
	const foundViewConfig = views && typeof views === "object" && Object.entries(views).find(([key, view]) => {
		const isMatching = isPathMatchingRoute({
			currentRoute,
			exact: view.exact,
			path: view.path,
			sensitive: view.sensitive,
			strict: view.strict
		});
		if (isMatching) viewKey = key;
		return isMatching;
	})?.[1] || void 0;
	if (!foundViewConfig) return {
		view: { Component: null },
		viewConfig: null,
		viewKey: null
	};
	return {
		view: { payloadComponent: foundViewConfig.Component },
		viewConfig: foundViewConfig,
		viewKey
	};
};
//#endregion
export { getCustomViewByRoute as t };
