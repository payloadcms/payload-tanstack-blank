import { i as setRequireModule, r as renderToReadableStream$1 } from "./assets/rsc-CrbjC1on.js";
import assetsManifest from "./__vite_rsc_assets_manifest.js";
//#region \0virtual:vite-rsc/server-references
var server_references_default = {};
//#endregion
//#region node_modules/.pnpm/@vitejs+plugin-rsc@0.5.27_react-dom@19.2.6_react@19.2.6__react@19.2.6_vite@8.1.4_@types_18c8bd7733425799a02a0f98dbe37947/node_modules/@vitejs/plugin-rsc/dist/rsc.js
initialize();
function initialize() {
	setRequireModule({ load: async (id) => {
		{
			const import_ = server_references_default[id];
			if (!import_) throw new Error(`server reference not found '${id}'`);
			return import_();
		}
	} });
}
function renderToReadableStream(data, options, extraOptions) {
	return renderToReadableStream$1(data, options, { onClientReference(metadata) {
		const deps = assetsManifest.clientReferenceDeps[metadata.id] ?? {
			js: [],
			css: []
		};
		extraOptions?.onClientReference?.({
			id: metadata.id,
			name: metadata.name,
			deps
		});
	} });
}
//#endregion
//#region \0%23tanstack-start-server-fn-resolver
var manifest = {
	"19e77ca4a09688ebaba2192de69fc8b8a335657719fdaebb3faaac4e2cea5dcf": {
		functionName: "runPayloadServerFn_createServerFn_handler",
		importer: () => import("./assets/server.functions-CRfDE6KC.js"),
		isClientReferenced: true
	},
	"3932fb8ed7c26260bfaa2e75e2723ffe76432b17a6694fbe968c3300b526853f": {
		functionName: "getLayoutDataFn_createServerFn_handler",
		importer: () => import("./assets/server.functions-CRfDE6KC.js"),
		isClientReferenced: true
	},
	"e8ba01abeb4e8c1ff00f179b00ac0955129ac55095c8ea668d67ccb4a19a3e33": {
		functionName: "loadAdminPageRSC_createServerFn_handler",
		importer: () => import("./assets/server.functions-CRfDE6KC.js"),
		isClientReferenced: true
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	if (access.origin === "client" && !serverFnInfo.isClientReferenced) throw new Error("Server function not accessible from client: " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-start-rsc@0.1.25_@vitejs+plugin-rsc@0.5.27_react-dom@19.2.6_react@19.2._87c6cd0836b02c60e324b73c35a7a1de/node_modules/@tanstack/react-start-rsc/dist/plugin/entry/rsc.tsx
/**
* Shared RSC (React Server Components) entry point.
*
* This file exports the functions needed for the active RSC environment:
* - getServerFnById: Resolves server functions by their encoded ID
* - render: Renders a React node to an RSC Flight stream
*/
/**
* Renders a React node to an RSC Flight stream.
* Used internally for streaming server component output.
*/
function render(node) {
	return renderToReadableStream(node);
}
//#endregion
export { getServerFnById, render, renderToReadableStream as t };
