import { r as __toESM } from "./rolldown-runtime-DJK8HYOj.js";
import { a as require_react_react_server } from "./rsc-CrbjC1on.js";
import { h as getClientConfig, m as initI18n, n as initReq, o as O, p as getRequest, r as createPageRenderServerAdapter, t as renderServerComponent } from "./index.rsc-CUDYWvAm.js";
import { Bt as RenderServerComponent, n as upsertPreferences } from "./upsertPreferences-BTcoIMIB.js";
import { p as renderField, u as buildFormStateHandler } from "./NotFound-7JodD-bI.js";
import { i as getClientSchemaMap, r as getSchemaMap } from "./Unauthorized-DalNEOGT.js";
import { r as require_objectid } from "./fieldSchemasToFormState-CRxPxN-p.js";
import { a as renderDocumentSlotsHandler, c as getColumns, i as renderDocument, n as renderListView, o as renderFilters, s as renderTable } from "./List-CCnKf9yG.js";
import "./layouts-BQE5CYbZ.js";
import { t as extractLocaleData } from "./localeUtils-xKBcavVR.js";
import assetsManifest from "../__vite_rsc_assets_manifest.js";
import { applyLocaleFiltering, fieldAffectsData, fieldShouldBeLocalized, isNumber, tabHasName } from "payload/shared";
import { APIError, UnauthorizedError, canAccessAdmin, deepMerge, formatErrors, getRequestLanguage, handleEndpoints, isEntityHidden, parseCookies, traverseFields } from "payload";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Nav/SidebarTabs/renderTabServerFn.js
var renderTabHandler = ({ req, tabSlug }) => {
	if (!req.user) throw new Error("Unauthorized");
	const { importMap } = req.payload;
	const { tabs } = req.payload.config.admin.components?.sidebar || {};
	if (!tabs) return { component: null };
	const tabConfig = tabs.find((tab) => tab.slug === tabSlug);
	if (!tabConfig) return { component: null };
	try {
		return { component: RenderServerComponent({
			Component: tabConfig.components.Content,
			importMap,
			serverProps: {
				i18n: req.i18n,
				locale: req.locale,
				params: req.routeParams,
				payload: req.payload,
				req,
				searchParams: req.query,
				user: req.user
			}
		}) };
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		req.payload.logger.error({
			err: error,
			msg: `Error rendering tab "${tabSlug}": ${errorMessage}`
		});
		return { component: null };
	}
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/serverFunctions/renderFieldServerFn.js
/**
* @experimental - may break in minor releases
*/
var _internal_renderFieldHandler = async ({ field: fieldArg, initialValue, path, req, schemaPath }) => {
	if (!req.user) throw new UnauthorizedError();
	const [entityType, entitySlug, ...fieldPath] = schemaPath.split(".");
	const schemaMap = getSchemaMap({
		collectionSlug: entityType === "collection" ? entitySlug : void 0,
		config: req.payload.config,
		globalSlug: entityType === "global" ? entitySlug : void 0,
		i18n: req.i18n
	});
	const clientSchemaMap = getClientSchemaMap({
		collectionSlug: entityType === "collection" ? entitySlug : void 0,
		config: getClientConfig({
			config: req.payload.config,
			i18n: req.i18n,
			importMap: req.payload.importMap,
			user: req.user
		}),
		globalSlug: entityType === "global" ? entitySlug : void 0,
		i18n: req.i18n,
		payload: req.payload,
		schemaMap
	});
	const targetField = schemaMap.get(`${entitySlug}.${fieldPath.join(".")}`);
	if (!targetField) throw new Error(`Could not find target field at schemaPath: ${schemaPath}`);
	const field = fieldArg ? deepMerge(targetField, fieldArg, { clone: false }) : targetField;
	let data = {};
	if (typeof initialValue !== "undefined") if ("name" in field) data[field.name] = initialValue;
	else data = initialValue;
	const fieldState = {};
	renderField({
		clientFieldSchemaMap: clientSchemaMap,
		collectionSlug: entityType === "collection" && entitySlug ? entitySlug : "-",
		data,
		fieldConfig: field,
		fieldSchemaMap: schemaMap,
		fieldState,
		formState: {},
		indexPath: "",
		lastRenderedPath: "",
		operation: "create",
		parentPath: "",
		parentSchemaPath: "",
		path: path ?? ("name" in field ? field.name : ""),
		permissions: true,
		preferences: { fields: {} },
		forceCreateClientField: fieldArg ? true : false,
		previousFieldState: void 0,
		renderAllFields: true,
		req,
		schemaPath: `${entitySlug}.${fieldPath.join(".")}`,
		siblingData: data
	});
	return fieldState.customComponents ?? {};
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/copyDataFromLocale.js
var import_objectid = /* @__PURE__ */ __toESM(require_objectid(), 1);
var ObjectId = "default" in import_objectid.default ? import_objectid.default.default : import_objectid.default;
function iterateFields(fields, fromLocaleData, toLocaleData, req, parentIsLocalized) {
	fields.map((field) => {
		if (fieldAffectsData(field)) switch (field.type) {
			case "array":
				if (field.name in toLocaleData && [null, void 0].includes(toLocaleData[field.name]) && field.name in fromLocaleData) {
					toLocaleData[field.name] = fromLocaleData[field.name];
					break;
				}
				if (field.name in toLocaleData) toLocaleData[field.name].map((item, index) => {
					if (fromLocaleData[field.name]?.[index]) {
						if (fieldShouldBeLocalized({
							field,
							parentIsLocalized
						})) toLocaleData[field.name][index].id = new ObjectId().toHexString();
						iterateFields(field.fields, fromLocaleData[field.name][index], item, req, parentIsLocalized || field.localized);
					}
				});
				break;
			case "blocks":
				if (field.name in toLocaleData && ([null, void 0].includes(toLocaleData[field.name]) || Array.isArray(toLocaleData[field.name]) && toLocaleData[field.name].length === 0) && field.name in fromLocaleData) {
					toLocaleData[field.name] = fromLocaleData[field.name];
					break;
				}
				if (field.name in toLocaleData) toLocaleData[field.name].map((blockData, index) => {
					const block = req.payload.blocks[blockData.blockType] ?? field.blocks.find((block) => typeof block !== "string" && block.slug === blockData.blockType);
					if (fieldShouldBeLocalized({
						field,
						parentIsLocalized
					})) toLocaleData[field.name][index].id = new ObjectId().toHexString();
					if (block?.fields?.length) iterateFields(block?.fields, fromLocaleData[field.name][index], blockData, req, parentIsLocalized || field.localized);
				});
				break;
			case "checkbox":
			case "code":
			case "date":
			case "email":
			case "json":
			case "number":
			case "point":
			case "radio":
			case "relationship":
			case "richText":
			case "select":
			case "slug":
			case "text":
			case "textarea":
			case "upload":
				if (field.name in toLocaleData && [null, void 0].includes(toLocaleData[field.name]) && field.name in fromLocaleData) toLocaleData[field.name] = fromLocaleData[field.name];
				break;
			case "group":
				if (fieldAffectsData(field) && field.name in toLocaleData && fromLocaleData?.[field.name] !== void 0) iterateFields(field.fields, fromLocaleData[field.name], toLocaleData[field.name], req, parentIsLocalized || field.localized);
				else iterateFields(field.fields, fromLocaleData, toLocaleData, req, parentIsLocalized);
				break;
		}
		else switch (field.type) {
			case "collapsible":
			case "row":
				iterateFields(field.fields, fromLocaleData, toLocaleData, req, parentIsLocalized);
				break;
			case "tabs":
				field.tabs.map((tab) => {
					if (tabHasName(tab)) {
						if (tab.name in toLocaleData && fromLocaleData?.[tab.name] !== void 0) iterateFields(tab.fields, fromLocaleData[tab.name], toLocaleData[tab.name], req, parentIsLocalized);
					} else iterateFields(tab.fields, fromLocaleData, toLocaleData, req, parentIsLocalized);
				});
				break;
		}
	});
}
function mergeData(fromLocaleData, toLocaleData, fields, req, parentIsLocalized) {
	iterateFields(fields, fromLocaleData, toLocaleData, req, parentIsLocalized);
	return toLocaleData;
}
/**
* We don't have to recursively remove all ids,
* just the ones from the fields inside a localized array or block.
*/
function removeIdIfParentIsLocalized(data, fields) {
	traverseFields({
		callback: ({ parentIsLocalized, ref }) => {
			if (parentIsLocalized) delete ref.id;
		},
		fields,
		fillEmpty: false,
		ref: data
	});
	return data;
}
var copyDataFromLocaleHandler = async (args) => {
	const { req } = args;
	try {
		return await copyDataFromLocale(args);
	} catch (err) {
		req.payload.logger.error({
			err,
			msg: `There was an error copying data from "${args.fromLocale}" to "${args.toLocale}"`
		});
		throw err;
	}
};
var copyDataFromLocale = async (args) => {
	const { collectionSlug, docID, fromLocale, globalSlug, overrideData = false, req: { payload, payload: { collections, globals }, user }, req, toLocale } = args;
	await canAccessAdmin({ req });
	const [fromLocaleData, toLocaleData] = await Promise.allSettled([globalSlug ? payload.findGlobal({
		slug: globalSlug,
		depth: 0,
		draft: true,
		locale: fromLocale,
		overrideAccess: false,
		user
	}) : payload.findByID({
		id: docID,
		collection: collectionSlug,
		depth: 0,
		draft: true,
		joins: false,
		locale: fromLocale,
		overrideAccess: false,
		user
	}), globalSlug ? payload.findGlobal({
		slug: globalSlug,
		depth: 0,
		draft: true,
		locale: toLocale,
		overrideAccess: false,
		user
	}) : payload.findByID({
		id: docID,
		collection: collectionSlug,
		depth: 0,
		draft: true,
		joins: false,
		locale: toLocale,
		overrideAccess: false,
		user
	})]);
	if (fromLocaleData.status === "rejected") throw new Error(`Error fetching data from locale "${fromLocale}"`);
	if (toLocaleData.status === "rejected") throw new Error(`Error fetching data from locale "${toLocale}"`);
	const fields = globalSlug ? globals[globalSlug].config.fields : collections[collectionSlug].config.fields;
	const fromLocaleDataWithoutID = fromLocaleData.value;
	const toLocaleDataWithoutID = toLocaleData.value;
	const data = removeIdIfParentIsLocalized(overrideData ? fromLocaleDataWithoutID : mergeData(fromLocaleDataWithoutID, toLocaleDataWithoutID, fields, req, false), fields);
	return globalSlug ? await payload.updateGlobal({
		slug: globalSlug,
		data,
		draft: true,
		locale: toLocale,
		overrideAccess: false,
		req,
		user
	}) : await payload.update({
		id: docID,
		collection: collectionSlug,
		data,
		draft: true,
		locale: toLocale,
		overrideAccess: false,
		req,
		user
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/getRequestI18n.server.js
/**
* Resolves the client `I18n` for the current TanStack Start request without a
* full `initReq` (no `getPayload`/auth/access). Mirrors the Next.js adapter's
* `getNextRequestI18n` and feeds the shared `generatePageMetadata`, which only
* needs `config` + `i18n` to translate admin-page titles.
*/ async function getRequestI18n({ config }) {
	const webRequest = getRequest();
	const headers = new Headers(webRequest.headers);
	const languageCode = getRequestLanguage({
		config,
		cookies: parseCookies(headers),
		headers
	});
	return initI18n({
		config: config.i18n,
		context: "client",
		language: languageCode
	});
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/handleAPIRoute.server.js
/**
* Routes a TanStack Start API request (`/api/*`) to Payload's REST/GraphQL
* endpoint handler. The framework adapter wires this into the `/api/$` route's
* server handlers, supplying the app's resolved `config`.
*/ async function handleAPIRoute({ config, request }) {
	const slugParts = new URL(request.url).pathname.replace(/^\/api\/?/, "").split("/").filter(Boolean);
	return handleEndpoints({
		config,
		path: slugParts.length ? `/api/${slugParts.join("/")}` : "/api",
		request
	});
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Document/handleServerFunction.js
var renderDocumentHandler = async (args) => {
	const { collectionSlug, cookies, disableActions, docID, drawerSlug, initialData, locale, overrideEntityVisibility, paramsOverride, permissions, redirectAfterCreate, redirectAfterDelete, redirectAfterDuplicate, req, req: { i18n, payload, payload: { config }, user }, searchParams = {}, versions } = args;
	await canAccessAdmin({ req });
	const clientConfig = getClientConfig({
		config,
		i18n,
		importMap: req.payload.importMap,
		user
	});
	await applyLocaleFiltering({
		clientConfig,
		config,
		req
	});
	let preferences;
	if (docID) {
		const preferencesKey = `${collectionSlug}-edit-${docID}`;
		preferences = await payload.find({
			collection: "payload-preferences",
			depth: 0,
			limit: 1,
			where: { and: [
				{ key: { equals: preferencesKey } },
				{ "user.relationTo": { equals: user.collection } },
				{ "user.value": { equals: user.id } }
			] }
		}).then((res) => res.docs[0]?.value);
	}
	const visibleEntities = {
		collections: payload.config.collections.map(({ slug, admin: { hidden } }) => !isEntityHidden({
			hidden,
			user
		}) ? slug : null).filter(Boolean),
		globals: payload.config.globals.map(({ slug, admin: { hidden } }) => !isEntityHidden({
			hidden,
			user
		}) ? slug : null).filter(Boolean)
	};
	const { data, Document } = await renderDocument({
		clientConfig,
		disableActions,
		documentSubViewType: "default",
		drawerSlug,
		i18n,
		importMap: payload.importMap,
		initialData,
		initPageResult: {
			collectionConfig: payload?.collections?.[collectionSlug]?.config,
			cookies,
			docID,
			globalConfig: payload.config.globals.find((global) => global.slug === collectionSlug),
			languageOptions: void 0,
			locale,
			permissions,
			req,
			translations: void 0,
			visibleEntities
		},
		locale,
		overrideEntityVisibility,
		params: paramsOverride ?? { segments: [
			"collections",
			collectionSlug,
			String(docID)
		] },
		payload,
		permissions,
		redirectAfterCreate,
		redirectAfterDelete,
		redirectAfterDuplicate,
		searchParams,
		server: req.server,
		versions,
		viewType: "document"
	});
	return {
		data,
		Document,
		preferences
	};
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/List/handleServerFunction.js
var renderListHandler = async (args) => {
	const { collectionSlug, cookies, disableActions, disableBulkDelete, disableBulkEdit, disableQueryPresets, drawerSlug, enableRowSelections, locale, overrideEntityVisibility, permissions, query, redirectAfterDelete, redirectAfterDuplicate, req, req: { i18n, payload, payload: { config }, user } } = args;
	if (!req.user) throw new UnauthorizedError();
	await canAccessAdmin({ req });
	const clientConfig = getClientConfig({
		config,
		i18n,
		importMap: payload.importMap,
		user
	});
	await applyLocaleFiltering({
		clientConfig,
		config,
		req
	});
	const preferencesKey = `collection-${collectionSlug}`;
	const preferences = await payload.find({
		collection: "payload-preferences",
		depth: 0,
		limit: 1,
		where: { and: [
			{ key: { equals: preferencesKey } },
			{ "user.relationTo": { equals: user.collection } },
			{ "user.value": { equals: user.id } }
		] }
	}).then((res) => res.docs[0]?.value);
	const visibleEntities = {
		collections: payload.config.collections.map(({ slug, admin: { hidden } }) => !isEntityHidden({
			hidden,
			user
		}) ? slug : null).filter(Boolean),
		globals: payload.config.globals.map(({ slug, admin: { hidden } }) => !isEntityHidden({
			hidden,
			user
		}) ? slug : null).filter(Boolean)
	};
	const { List } = await renderListView({
		clientConfig,
		disableActions,
		disableBulkDelete,
		disableBulkEdit,
		disableQueryPresets,
		drawerSlug,
		enableRowSelections,
		i18n,
		importMap: payload.importMap,
		initPageResult: {
			collectionConfig: payload?.collections?.[collectionSlug]?.config,
			cookies,
			globalConfig: payload.config.globals.find((global) => global.slug === collectionSlug),
			languageOptions: void 0,
			locale,
			permissions,
			req,
			translations: void 0,
			visibleEntities
		},
		locale,
		overrideEntityVisibility,
		params: { segments: ["collections", collectionSlug] },
		payload,
		permissions,
		query,
		redirectAfterDelete,
		redirectAfterDuplicate,
		searchParams: {},
		server: req.server,
		viewType: "list"
	});
	return {
		List,
		preferences
	};
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/buildTableState.js
var buildTableStateHandler = async (args) => {
	const { req } = args;
	try {
		return await buildTableState(args);
	} catch (err) {
		req.payload.logger.error({
			err,
			msg: `There was an error building form state`
		});
		if (err.message === "Could not find field schema for given path") return { message: err.message };
		if (err.message === "Unauthorized") return null;
		return formatErrors(err);
	}
};
var buildTableState = async (args) => {
	const { collectionSlug, columns: columnsFromArgs, data: dataFromArgs, enableRowSelections, orderableFieldName, parent, permissions, query, renderRowTypes, req, req: { i18n, payload, payload: { config }, user }, tableAppearance } = args;
	await canAccessAdmin({ req });
	const clientConfig = getClientConfig({
		config,
		i18n,
		importMap: payload.importMap,
		user
	});
	await applyLocaleFiltering({
		clientConfig,
		config,
		req
	});
	let collectionConfig;
	let clientCollectionConfig;
	if (!Array.isArray(collectionSlug)) {
		if (req.payload.collections[collectionSlug]) {
			collectionConfig = req.payload.collections[collectionSlug].config;
			clientCollectionConfig = clientConfig.collections.find((collection) => collection.slug === collectionSlug);
		}
	}
	const collectionPreferences = await upsertPreferences({
		key: parent ? `${parent.collectionSlug}-${parent.joinPath}` : `collection-${collectionSlug}`,
		req,
		value: {
			columns: columnsFromArgs,
			limit: isNumber(query?.limit) ? Number(query.limit) : void 0,
			sort: query?.sort
		}
	});
	let data = dataFromArgs;
	if (!data?.docs || query) if (Array.isArray(collectionSlug)) {
		if (!parent) throw new APIError("Unexpected array of collectionSlug, parent must be provided");
		const select = {};
		let currentSelectRef = select;
		const segments = parent.joinPath.split(".");
		for (let i = 0; i < segments.length; i++) {
			currentSelectRef[segments[i]] = i === segments.length - 1 ? true : {};
			currentSelectRef = currentSelectRef[segments[i]];
		}
		const joinQuery = {
			sort: query?.sort,
			where: query?.where
		};
		if (query) {
			if (!Number.isNaN(Number(query.limit))) joinQuery.limit = Number(query.limit);
			if (!Number.isNaN(Number(query.page))) joinQuery.limit = Number(query.limit);
		}
		let parentDoc = await payload.findByID({
			id: parent.id,
			collection: parent.collectionSlug,
			depth: 1,
			joins: { [parent.joinPath]: joinQuery },
			overrideAccess: false,
			select,
			user: req.user
		});
		for (let i = 0; i < segments.length; i++) if (i === segments.length - 1) data = parentDoc[segments[i]];
		else parentDoc = parentDoc[segments[i]];
	} else data = await payload.find({
		collection: collectionSlug,
		depth: 0,
		draft: true,
		limit: query?.limit,
		locale: req.locale,
		overrideAccess: false,
		page: query?.page,
		sort: query?.sort,
		user: req.user,
		where: query?.where
	});
	const { columnState, Table } = renderTable({
		clientCollectionConfig,
		clientConfig,
		collectionConfig,
		collections: Array.isArray(collectionSlug) ? collectionSlug : void 0,
		columns: getColumns({
			clientConfig,
			collectionConfig: clientCollectionConfig,
			collectionSlug,
			columns: columnsFromArgs,
			i18n: req.i18n,
			permissions
		}),
		data,
		enableRowSelections,
		fieldPermissions: Array.isArray(collectionSlug) ? true : permissions.collections[collectionSlug].fields,
		i18n: req.i18n,
		orderableFieldName,
		payload,
		query,
		renderRowTypes,
		req,
		tableAppearance,
		useAsTitle: Array.isArray(collectionSlug) ? payload.collections[collectionSlug[0]]?.config?.admin?.useAsTitle : collectionConfig?.admin?.useAsTitle
	});
	let renderedFilters;
	if (collectionConfig) renderedFilters = renderFilters(collectionConfig.fields, req.payload.importMap);
	return {
		data,
		preferences: collectionPreferences,
		renderedFilters,
		state: columnState,
		Table
	};
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/schedulePublishHandler.js
var schedulePublishHandler = async ({ type, date, deleteID, doc, global, localeToPublish, req, timezone }) => {
	const { i18n, payload, user } = req;
	await canAccessAdmin({ req });
	try {
		if (deleteID) await payload.delete({
			collection: "payload-jobs",
			req,
			where: { id: { equals: deleteID } }
		});
		await payload.jobs.queue({
			input: {
				type,
				doc,
				global,
				locale: localeToPublish,
				timezone,
				user: user.id
			},
			task: "schedulePublish",
			waitUntil: date
		});
	} catch (err) {
		let error;
		if (deleteID) error = `Error deleting scheduled publish event with ID ${deleteID}`;
		else {
			error = `Error scheduling ${type} for `;
			if (doc) error += `document with ID ${doc.value} in collection ${doc.relationTo}`;
		}
		payload.logger.error({ err }, error);
		return { error };
	}
	return { message: i18n.t("general:success") };
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/serverFunctionRegistry.js
/**
* Framework-agnostic server function handlers shared across all adapters.
*
* Each handler returns a value that may contain React elements (e.g.
* `customComponents` inside form state, the `Document` / `List` nodes returned
* by render-document / render-list). Adapters are expected to ship those over
* the wire as RSC payloads — Next.js's runtime does this natively, while the
* TanStack Start adapter pipes the result through `serializeForRsc` to convert
* elements into `renderServerComponent` handles.
*/
var sharedServerFunctions = {
	"copy-data-from-locale": copyDataFromLocaleHandler,
	"form-state": buildFormStateHandler,
	"render-document": renderDocumentHandler,
	"render-list": renderListHandler,
	"schedule-publish": schedulePublishHandler,
	"table-state": buildTableStateHandler
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Dashboard/Default/ModularDashboard/renderWidget/getDefaultLayoutServerFn.js
/**
* Server function to get the default dashboard layout on-demand.
* Used when resetting the dashboard to its default configuration.
*/
var getDefaultLayoutHandler = async ({ cookies, locale, permissions, req }) => {
	if (!req.user) throw new Error("Unauthorized");
	const { defaultLayout = [], widgets = [] } = req.payload.config.admin.dashboard || {};
	const { importMap } = req.payload;
	return { layout: (await getItemsFromConfig(defaultLayout, req, widgets)).map((layoutItem) => {
		const widgetSlug = layoutItem.id.slice(0, layoutItem.id.lastIndexOf("-"));
		return {
			component: RenderServerComponent({
				Component: widgets.find((widget) => widget.slug === widgetSlug)?.Component,
				importMap,
				serverProps: {
					cookies,
					locale,
					permissions,
					req,
					widgetData: layoutItem.data || {},
					widgetSlug
				}
			}),
			item: layoutItem
		};
	}) };
};
async function getItemsFromConfig(defaultLayout, req, widgets) {
	let widgetInstances;
	if (typeof defaultLayout === "function") widgetInstances = await defaultLayout({ req });
	else widgetInstances = defaultLayout;
	return widgetInstances.map((widgetInstance, index) => {
		const widget = widgets.find((w) => w.slug === widgetInstance.widgetSlug);
		return {
			id: `${widgetInstance.widgetSlug}-${index}`,
			data: widgetInstance.data,
			maxWidth: widget?.maxWidth ?? "full",
			minWidth: widget?.minWidth ?? "x-small",
			width: widgetInstance.width || "x-small"
		};
	});
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Dashboard/Default/ModularDashboard/renderWidget/renderWidgetServerFn.js
var import_react_react_server = /* @__PURE__ */ __toESM(require_react_react_server(), 1);
/**
* Server function to render a widget on-demand.
* Similar to render-field but specifically for dashboard widgets.
*/
var renderWidgetHandler = ({ cookies, locale, permissions, req, widgetData, widgetSlug }) => {
	if (!req.user) throw new Error("Unauthorized");
	const { widgets } = req.payload.config.admin.dashboard;
	const { importMap } = req.payload;
	const widgetConfig = widgets.find((widget) => widget.slug === widgetSlug);
	if (!widgetConfig) return { component: import_react_react_server.createElement("div", { style: {
		background: "var(--theme-elevation-50)",
		border: "var(--stroke-width-small) solid var(--theme-elevation-200)",
		borderRadius: "4px",
		color: "var(--theme-text)",
		padding: "20px",
		textAlign: "center"
	} }, `Widget "${widgetSlug}" not found`) };
	try {
		const serverProps = {
			cookies,
			locale,
			permissions,
			req,
			widgetData: widgetConfig.fields?.length ? extractLocaleData(widgetData || {}, req.locale || "en", widgetConfig.fields) : widgetData || {},
			widgetSlug
		};
		return { component: RenderServerComponent({
			Component: widgetConfig.Component,
			importMap,
			serverProps
		}) };
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		req.payload.logger.error({
			err: error,
			msg: `Error rendering widget "${widgetSlug}": ${errorMessage}`
		});
		return { component: import_react_react_server.createElement("div", { style: {
			background: "var(--theme-error-50)",
			border: "var(--stroke-width-small) solid var(--theme-error-200)",
			borderRadius: "4px",
			color: "var(--theme-error-text)",
			padding: "20px",
			textAlign: "center"
		} }, "Error loading widget") };
	}
};
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
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/serializeForRsc.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/serializeForRsc.js
/**
* Recursively walk a server-function return value and prepare it for transit
* to the client as an RSC payload.
*
* Mirrors `toSerializable`'s walk (Maps, Sets, Dates, typed arrays, circular
* refs) with two key differences:
*
* 1. React elements are NOT stripped. They are passed through
*    `renderServerComponent` from `@tanstack/react-start/rsc` to produce a
*    "renderable RSC handle". TanStack Start's `$RSC` serialization adapter
*    streams the underlying Flight payload to the client, where it is
*    decoded back into a renderable React node. This matches the way
*    Next.js's RSC payload format ships React elements over server actions
*    and lets server-rendered custom field components (e.g. those returned
*    by `buildFormState` / `RenderServerComponent`) survive a `form-state`
*    round trip.
*
* 2. Functions, Symbols, and RegExps are still stripped — TanStack's seroval
*    transport cannot handle them, and Payload doesn't intentionally include
*    them in server-function return values.
*
* Use this in `createServerFn` handlers that return Payload form/view state
* containing React elements (e.g. `state[path].customComponents.Field`).
*/
async function serializeForRsc(value) {
	return await walk(value, /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ new WeakSet());
}
async function walk(value, cache, ancestors) {
	if (value === null || value === void 0) return value;
	const t = typeof value;
	if (t === "function" || t === "symbol") return;
	if (t !== "object") return value;
	const obj = value;
	if (typeof obj.$$typeof === "symbol") return await renderServerComponent(value, { __tanstackStartRscCss: import_react_react_server.createElement(Resources$1) });
	if (ancestors.has(obj)) return;
	if (cache.has(obj)) return cache.get(obj);
	if (obj instanceof Date) return obj;
	if (obj instanceof RegExp) return;
	ancestors.add(obj);
	if (obj instanceof Map) {
		const cleaned = /* @__PURE__ */ new Map();
		cache.set(obj, cleaned);
		for (const [k, v] of obj) {
			const cv = await walk(v, cache, ancestors);
			if (cv !== void 0) cleaned.set(k, cv);
		}
		ancestors.delete(obj);
		return cleaned;
	}
	if (obj instanceof Set) {
		const cleaned = /* @__PURE__ */ new Set();
		cache.set(obj, cleaned);
		for (const v of obj) {
			const cv = await walk(v, cache, ancestors);
			if (cv !== void 0) cleaned.add(cv);
		}
		ancestors.delete(obj);
		return cleaned;
	}
	if (Array.isArray(obj)) {
		const items = obj.filter((item) => item !== null && item !== void 0);
		if (items.length > 0 && items.every((item) => typeof item === "object" && typeof item.$$typeof === "symbol")) {
			ancestors.delete(obj);
			return await renderServerComponent((0, import_react_react_server.createElement)(import_react_react_server.Fragment, null, ...obj), { __tanstackStartRscCss: import_react_react_server.createElement(Resources$1) });
		}
		const arr = [];
		cache.set(obj, arr);
		for (const item of obj) arr.push(await walk(item, cache, ancestors));
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
		const v = await walk(obj[key], cache, ancestors);
		if (v !== void 0) result[key] = v;
	}
	ancestors.delete(obj);
	return result;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/serverFunctionHandlers.js
/**
* Dispatched from `TranslationProvider` when the user switches the admin
* language. Writes the `<cookiePrefix>-lng` cookie via the request's
* `ServerAdapter` (wired up in `initReq`) so the next render — triggered by
* the provider's `router.refresh()` — reads the new language.
*/ var switchLanguageHandler = async ({ lang, req }) => {
	if (!req.server) throw new Error("switch-language requires a ServerAdapter on the request");
	const cookieName = `${req.payload.config.cookiePrefix || "payload"}-lng`;
	await req.server.setCookie(cookieName, lang, {
		maxAge: 3600 * 24 * 365,
		path: "/"
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/handleServerFunctions.js
var baseServerFunctions = {
	...sharedServerFunctions,
	"get-default-layout": getDefaultLayoutHandler,
	"render-document-slots": renderDocumentSlotsHandler,
	"render-field": _internal_renderFieldHandler,
	"render-tab": renderTabHandler,
	"render-widget": renderWidgetHandler,
	"switch-language": switchLanguageHandler
};
/**
* Server function dispatcher for TanStack Start.
*
* Mirrors `packages/next/src/utilities/handleServerFunctions.ts` and uses the
* exact same set of handlers — both adapters share `sharedServerFunctions`
* plus the small set of RSC-only handlers re-exported by `@payloadcms/ui`.
*
* Pipes the result through `serializeForRsc`, which converts any React
* elements left in the response (e.g. `state[path].customComponents.Field`
* produced by `buildFormState`, the `List` / `Document` nodes returned by
* `render-list` / `render-document`) into RSC "renderable handles" via
* `renderServerComponent` from `@tanstack/react-start/rsc`. TanStack Start's
* `$RSC` serialization adapter then ships those handles to the client as
* Flight payloads — so this dispatcher must be invoked from a context that
* uses TanStack's wire format (e.g. `createServerFn`), not raw
* `JSON.stringify`.
*/ var handleServerFunctions = async (args) => {
	const { name: fnKey, args: fnArgs, config: configPromise, importMap, serverFunctions: extraServerFunctions } = args;
	const { cookies, locale, permissions, req } = await initReq({
		configPromise,
		importMap
	});
	const augmentedArgs = {
		...fnArgs,
		cookies,
		importMap,
		locale,
		mode: "rsc",
		permissions,
		renderComponent: RenderServerComponent,
		req
	};
	const fn = extraServerFunctions?.[fnKey] || baseServerFunctions[fnKey];
	if (!fn) throw new Error(`Unknown Server Function: ${fnKey}`);
	return await serializeForRsc(await fn(augmentedArgs));
};
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
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/loadAdminPage.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/loadAdminPage.js
var resolveTitle = (title) => {
	if (!title) return;
	if (typeof title === "string") return title;
	if ("absolute" in title) return title.absolute;
	return title.default;
};
/**
* Flattens the framework-agnostic `MetaConfig` (Next.js `Metadata` shape) into
* the plain, serializable `AdminPageMetadata` the route loader ships to the
* client. The full `MetaConfig` carries a `URL` `metadataBase`, functions and
* other non-serializable values that seroval cannot cross the wire, so only the
* fields `getAdminMeta` renders are extracted.
*/
var toAdminPageMetadata = (meta) => {
	const og = meta.openGraph;
	const rawImages = og?.images;
	const images = (rawImages ? Array.isArray(rawImages) ? rawImages : [rawImages] : []).map((image) => typeof image === "string" ? { url: image } : image?.url ? {
		alt: image.alt,
		height: image.height,
		url: String(image.url),
		width: image.width
	} : void 0).filter(Boolean);
	const rawIcons = meta.icons;
	const icons = (Array.isArray(rawIcons) ? rawIcons : rawIcons && typeof rawIcons === "object" && Array.isArray(rawIcons.icon) ? rawIcons.icon : []).map((icon) => typeof icon === "string" ? {
		rel: "icon",
		url: icon
	} : icon?.url ? {
		type: icon.type,
		media: icon.media,
		rel: icon.rel ?? "icon",
		sizes: icon.sizes,
		url: String(icon.url)
	} : void 0).filter(Boolean);
	const keywords = meta.keywords;
	return {
		description: typeof meta.description === "string" ? meta.description : void 0,
		icons: icons?.length ? icons : void 0,
		keywords: typeof keywords === "string" ? keywords : Array.isArray(keywords) ? keywords.join(", ") : void 0,
		openGraph: og ? {
			description: typeof og.description === "string" ? og.description : void 0,
			images: images?.length ? images : void 0,
			siteName: typeof og.siteName === "string" ? og.siteName : void 0,
			title: typeof og.title === "string" ? og.title : void 0
		} : void 0,
		robots: typeof meta.robots === "string" ? meta.robots : void 0,
		title: resolveTitle(meta.title)
	};
};
/**
* Renders an admin page for TanStack Start and returns a serializable loader
* result. The framework adapter wraps this in a `createServerFn` that supplies
* the app's `config` and generated `importMap`.
*
*   1. Initializes the Payload request via the shared `renderRoot` orchestrator
*      from `@payloadcms/ui`, passing a TanStack-bound `initReq`. The injected
*      page-render `ServerAdapter` records navigation intent and throws the
*      framework-agnostic error contract.
*   2. Pipes the resulting React server tree through `renderServerComponent`
*      to produce a Flight payload the client consumes directly.
*   3. Resolves page metadata via the same shared `generatePageMetadata`
*      Next.js uses, returning plain serializable strings for `head()`.
*
* Navigation surfaces two ways and both become a `_notFound` / `_redirect`
* sentinel the route loader re-throws as native TanStack nav:
* - thrown during `renderRoot` orchestration (e.g. the login redirect) → caught
*   by the try/catch below;
* - thrown deep inside a streamed view component (e.g. `DocumentView` access
*   denied, `LoginView` already-authenticated) → swallowed into the RSC stream,
*   so it's read from the `nav` holder after `renderServerComponent` resolves.
*/
async function loadAdminPage({ config, importMap, search, splat }) {
	const { renderRoot } = await import("./Root-Bxf4q5WR.js");
	const { defaultAdminViews } = await import("./adminViews-CF2fRcwM.js");
	const { generatePageMetadata } = await import("./generatePageMetadata-DQZbxdrC.js");
	const splatSegments = splat ? splat.split("/").filter(Boolean) : [];
	const segments = splatSegments.length > 0 ? splatSegments : void 0;
	const searchParams = search ?? {};
	const nav = {};
	const pageServerAdapter = createPageRenderServerAdapter(nav);
	let userAgent;
	const boundInitReq = async (args) => {
		const result = await initReq({
			configPromise: args.configPromise,
			importMap: args.importMap,
			overrides: args.overrides,
			serverAdapter: pageServerAdapter
		});
		userAgent = result.headers.get("user-agent") ?? void 0;
		return result;
	};
	const notFound = () => {
		nav.type = "notFound";
		throw new Error("not-found");
	};
	const redirect = (url) => {
		nav.type = "redirect";
		nav.url = url;
		throw new Error(`redirect:${url}`);
	};
	const renderNotFound = async () => {
		const { renderNotFoundPage } = await import("./page-CflWeob7.js");
		const rscPayload = await renderServerComponent(await renderNotFoundPage({
			config: Promise.resolve(config),
			importMap,
			initReq: (args) => initReq({
				configPromise: args.configPromise,
				importMap: args.importMap,
				overrides: args.overrides
			}),
			params: Promise.resolve({ segments: splatSegments }),
			searchParams: Promise.resolve(searchParams)
		}), { __tanstackStartRscCss: import_react_react_server.createElement(Resources) });
		return {
			_notFound: true,
			routeKey: splat ?? "",
			rscPayload
		};
	};
	try {
		const rscPayload = await renderServerComponent(await renderRoot({
			adminViews: defaultAdminViews,
			config: Promise.resolve(config),
			importMap,
			initReq: boundInitReq,
			notFound,
			params: Promise.resolve({ segments }),
			redirect,
			searchParams: Promise.resolve(searchParams)
		}), { __tanstackStartRscCss: import_react_react_server.createElement(Resources) });
		if (!nav.type) {
			const wrapper = rscPayload[Symbol.for("tanstack.rsc.stream")];
			if (typeof wrapper?.createReplayStream === "function") {
				const buffer = await new Response(wrapper.createReplayStream()).arrayBuffer();
				wrapper.createReplayStream = () => new Response(buffer).body;
			}
		}
		if (nav.type === "redirect" && nav.url) return { _redirect: nav.url };
		if (nav.type === "notFound") return await renderNotFound();
		return {
			metadata: {
				...toAdminPageMetadata(await generatePageMetadata({
					adminViews: defaultAdminViews,
					config,
					i18n: await getRequestI18n({ config }),
					params: { segments }
				})),
				viewport: O(userAgent)
			},
			routeKey: splat ?? "",
			rscPayload
		};
	} catch (err) {
		const message = err instanceof Error ? err.message : String(err);
		if (nav.type === "notFound" || message === "not-found") return await renderNotFound();
		if (nav.type === "redirect" || message.startsWith("redirect:")) return { _redirect: nav.url ?? message.slice(9) };
		throw err;
	}
}
//#endregion
export { handleServerFunctions, loadAdminPage, handleAPIRoute as t };
