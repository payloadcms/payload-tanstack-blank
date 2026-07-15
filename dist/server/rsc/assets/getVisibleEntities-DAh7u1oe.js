//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getVisibleEntities.js
function isHidden(hidden, user) {
	if (typeof hidden === "function") try {
		return hidden({ user });
	} catch {
		return true;
	}
	return !!hidden;
}
function getVisibleEntities({ req }) {
	return {
		collections: req.payload.config.collections.map(({ slug, admin: { hidden } }) => !isHidden(hidden, req.user) ? slug : null).filter(Boolean),
		globals: req.payload.config.globals.map(({ slug, admin: { hidden } }) => !isHidden(hidden, req.user) ? slug : null).filter(Boolean)
	};
}
//#endregion
export { getVisibleEntities as t };
