import { t as groupNavItems } from "./groupNavItems-BvoG6M55.js";
import { EntityType } from "payload";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getGlobalData.js
var globalLockDurationDefault = 300;
async function getGlobalData(req) {
	const { payload: { config }, payload } = req;
	let globalData = [];
	if (config.globals.length > 0) if (payload.collections?.["payload-locked-documents"]) {
		const lockedDocuments = await payload.find({
			collection: "payload-locked-documents",
			depth: 1,
			overrideAccess: false,
			pagination: false,
			req,
			select: {
				globalSlug: true,
				updatedAt: true,
				user: true
			},
			where: { globalSlug: { exists: true } }
		});
		globalData = config.globals.map((global) => {
			const lockDuration = typeof global.lockDocuments === "object" ? global.lockDocuments.duration : globalLockDurationDefault;
			const lockedDoc = lockedDocuments.docs.find((doc) => doc.globalSlug === global.slug);
			return {
				slug: global.slug,
				data: {
					_isLocked: !!lockedDoc,
					_lastEditedAt: lockedDoc?.updatedAt ?? null,
					_userEditing: lockedDoc?.user?.value ?? null
				},
				lockDuration
			};
		});
	} else globalData = config.globals.map((global) => {
		const lockDuration = typeof global.lockDocuments === "object" ? global.lockDocuments.duration : globalLockDurationDefault;
		return {
			slug: global.slug,
			data: {
				_isLocked: false,
				_lastEditedAt: null,
				_userEditing: null
			},
			lockDuration
		};
	});
	return globalData;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getNavGroups.js
/** @internal */
function getNavGroups(permissions, visibleEntities, config, i18n) {
	const collections = config.collections.filter((collection) => permissions?.collections?.[collection.slug]?.read && visibleEntities.collections.includes(collection.slug));
	const globals = config.globals.filter((global) => permissions?.globals?.[global.slug]?.read && visibleEntities.globals.includes(global.slug));
	return groupNavItems([...collections.map((collection) => {
		return {
			type: EntityType.collection,
			entity: collection
		};
	}) ?? [], ...globals.map((global) => {
		return {
			type: EntityType.global,
			entity: global
		};
	}) ?? []], permissions, i18n);
}
//#endregion
export { getGlobalData as n, getNavGroups as t };
