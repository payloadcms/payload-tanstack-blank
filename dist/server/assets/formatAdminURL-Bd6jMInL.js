//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/formatAdminURL.js
var formatAdminURL = (args) => {
	const { adminRoute, apiRoute, includeBasePath: includeBasePathArg, path = "", relative = false, serverURL } = args;
	const basePath = process.env.NEXT_BASE_PATH || args.basePath || "";
	const routePath = adminRoute || apiRoute;
	const pathname = [routePath && routePath !== "/" && routePath, path && path].filter(Boolean).join("") || "/";
	const pathnameWithBase = (basePath + pathname).replace(/\/$/, "") || "/";
	const includeBasePath = includeBasePathArg ?? (adminRoute ? false : true);
	if (relative || !serverURL) {
		if (includeBasePath && basePath) return pathnameWithBase;
		return pathname;
	}
	const serverURLObj = new URL(serverURL);
	return new URL(pathnameWithBase, serverURLObj.origin).toString();
};
//#endregion
export { formatAdminURL as t };
