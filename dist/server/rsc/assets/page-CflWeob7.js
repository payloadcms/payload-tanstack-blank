import "./rolldown-runtime-DJK8HYOj.js";
import { a as require_react_react_server, n as registerServerReference } from "./rsc-CrbjC1on.js";
import "../index.js";
import { h as getClientConfig } from "./index.rsc-CUDYWvAm.js";
import { Q as PageConfigProvider, Vt as require_jsx_runtime_react_server, Y as NotFoundClient } from "./upsertPreferences-BTcoIMIB.js";
import { n as DefaultTemplate, t as parse } from "./parse-B9syJk6S.js";
import { t as getVisibleEntities } from "./getVisibleEntities-DAh7u1oe.js";
import { t as stringify } from "./stringify-Cj7Z6Zfm.js";
import { applyLocaleFiltering, formatAdminURL } from "payload/shared";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/NotFound/page.js
var import_jsx_runtime_react_server = require_jsx_runtime_react_server();
require_react_react_server();
var renderNotFoundPage = async ({ config: configPromise, importMap, initReq, params: paramsPromise, searchParams: searchParamsPromise }) => {
	const config = await configPromise;
	const { routes: { admin: adminRoute } = {} } = config;
	const searchParams = await searchParamsPromise;
	const queryString = `${stringify(searchParams ?? {}, { addQueryPrefix: true })}`;
	const { locale, permissions, req, req: { payload } } = await initReq({
		configPromise: config,
		importMap,
		key: "RootLayout",
		overrides: {
			fallbackLocale: false,
			req: { query: parse(queryString, {
				depth: 10,
				ignoreQueryPrefix: true
			}) },
			urlSuffix: `${formatAdminURL({
				adminRoute,
				path: "/not-found"
			})}${searchParams ? queryString : ""}`
		}
	});
	if (!req.user || !permissions.canAccessAdmin) return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(NotFoundClient, {});
	const params = await paramsPromise;
	const visibleEntities = getVisibleEntities({ req });
	const clientConfig = getClientConfig({
		config,
		i18n: req.i18n,
		importMap,
		user: req.user
	});
	await applyLocaleFiltering({
		clientConfig,
		config,
		req
	});
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(PageConfigProvider, {
		config: clientConfig,
		children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(DefaultTemplate, {
			i18n: req.i18n,
			locale,
			params,
			payload,
			permissions,
			req,
			searchParams,
			user: req.user,
			visibleEntities,
			children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(NotFoundClient, {})
		})
	});
};
renderNotFoundPage = /* #__PURE__ */ registerServerReference(renderNotFoundPage, "7f42af21a693", "renderNotFoundPage");
//#endregion
export { renderNotFoundPage };
