import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./createServerFn-XgVKlOHw.js";
//#region node_modules/.pnpm/@tanstack+start-server-core@1.169.15/node_modules/@tanstack/start-server-core/dist/esm/createServerRpc.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/app/_payload/server.functions.ts?tss-serverfn-split
var getConfig = async () => (await import("./payload.config-mfWLt7bk.js")).default;
var getImportMap = async () => (await import("./importMap-Dg7ZcT4f.js")).importMap;
var loadAdminPageRSC_createServerFn_handler = createServerRpc({
	id: "e8ba01abeb4e8c1ff00f179b00ac0955129ac55095c8ea668d67ccb4a19a3e33",
	name: "loadAdminPageRSC",
	filename: "src/app/_payload/server.functions.ts"
}, (opts) => loadAdminPageRSC.__executeServer(opts));
var loadAdminPageRSC = createServerFn({ method: "GET" }).validator((data) => data ?? {}).handler(loadAdminPageRSC_createServerFn_handler, async ({ data }) => {
	const { loadAdminPage } = await import("./server-CqAKtD6g.js");
	return loadAdminPage({
		config: await getConfig(),
		importMap: await getImportMap(),
		search: data.search,
		splat: data._splat
	});
});
var getLayoutDataFn_createServerFn_handler = createServerRpc({
	id: "3932fb8ed7c26260bfaa2e75e2723ffe76432b17a6694fbe968c3300b526853f",
	name: "getLayoutDataFn",
	filename: "src/app/_payload/server.functions.ts"
}, (opts) => getLayoutDataFn.__executeServer(opts));
var getLayoutDataFn = createServerFn({ method: "GET" }).handler(getLayoutDataFn_createServerFn_handler, async () => {
	const { loadLayoutData } = await import("./layouts-BQE5CYbZ.js");
	return loadLayoutData({
		config: await getConfig(),
		importMap: await getImportMap()
	});
});
var runPayloadServerFn_createServerFn_handler = createServerRpc({
	id: "19e77ca4a09688ebaba2192de69fc8b8a335657719fdaebb3faaac4e2cea5dcf",
	name: "runPayloadServerFn",
	filename: "src/app/_payload/server.functions.ts"
}, (opts) => runPayloadServerFn.__executeServer(opts));
var runPayloadServerFn = createServerFn({ method: "POST" }).validator((args) => args).handler(runPayloadServerFn_createServerFn_handler, async ({ data }) => {
	const { handleServerFunctions } = await import("./server-CqAKtD6g.js");
	return await handleServerFunctions({
		args: data.args,
		config: await getConfig(),
		importMap: await getImportMap(),
		name: data.name
	});
});
//#endregion
export { getLayoutDataFn_createServerFn_handler, loadAdminPageRSC_createServerFn_handler, runPayloadServerFn_createServerFn_handler };
