import { t as getTranslation } from "./getTranslation-Dh_N5Etc.js";
import { r as formatDate, t as getDocumentView } from "./getDocumentView-nmB564VU.js";
import { t as formatMetadata } from "./formatMetadata-CRcp0C-Q.js";
import { t as getCustomViewByRoute } from "./getCustomViewByRoute-DWWi6sZ1.js";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/CollectionTrash/generateCollectionTrashMetadata.js
var generateCollectionTrashMetadata = async (args) => {
	const { collectionConfig, config, i18n } = args;
	let title = "";
	const description = "";
	const keywords = "";
	if (collectionConfig) title = getTranslation(collectionConfig.labels.plural, i18n);
	title = `${title ? `${title} ` : title}${i18n.t("general:trash")}`;
	return formatMetadata({
		...config.admin.meta || {},
		description,
		keywords,
		serverURL: config.serverURL,
		title,
		...collectionConfig?.admin?.meta || {}
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/API/generateAPIViewMetadata.js
/**
* @todo Remove the `MetaConfig` type assertions. They are currently required because of how the `Metadata` type from `next` consumes the `URL` type.
*/
var generateAPIViewMetadata = async ({ collectionConfig, config, globalConfig, i18n }) => {
	const entityLabel = collectionConfig ? getTranslation(collectionConfig.labels.singular, i18n) : globalConfig ? getTranslation(globalConfig.label, i18n) : "";
	return Promise.resolve(formatMetadata({
		...config.admin.meta || {},
		description: `API - ${entityLabel}`,
		keywords: "API",
		serverURL: config.serverURL,
		title: `API - ${entityLabel}`,
		...collectionConfig ? {
			...collectionConfig?.admin.meta || {},
			...collectionConfig?.admin?.components?.views?.edit?.api?.meta || {}
		} : {},
		...globalConfig ? {
			...globalConfig?.admin.meta || {},
			...globalConfig?.admin?.components?.views?.edit?.api?.meta || {}
		} : {}
	}));
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Version/generateVersionViewMetadata.js
/**
* @todo Remove the `MetaConfig` type assertions. They are currently required because of how the `Metadata` type from `next` consumes the `URL` type.
*/
var generateVersionViewMetadata = async ({ collectionConfig, config, globalConfig, i18n }) => {
	const { t } = i18n;
	let metaToUse = { ...config.admin.meta || {} };
	const doc = {};
	const formattedCreatedAt = doc?.createdAt ? formatDate({
		date: doc.createdAt,
		i18n,
		pattern: config?.admin?.dateFormat
	}) : "";
	if (collectionConfig) {
		const useAsTitle = collectionConfig?.admin?.useAsTitle || "id";
		const entityLabel = getTranslation(collectionConfig.labels.singular, i18n);
		const titleFromData = doc?.[useAsTitle];
		metaToUse = {
			...config.admin.meta || {},
			description: t("version:viewingVersion", {
				documentTitle: titleFromData,
				entityLabel
			}),
			title: `${t("version:version")}${formattedCreatedAt ? ` - ${formattedCreatedAt}` : ""}${titleFromData ? ` - ${titleFromData}` : ""} - ${entityLabel}`,
			...collectionConfig?.admin?.meta || {},
			...collectionConfig?.admin?.components?.views?.edit?.version?.meta || {}
		};
	}
	if (globalConfig) {
		const entityLabel = getTranslation(globalConfig.label, i18n);
		metaToUse = {
			...config.admin.meta || {},
			description: t("version:viewingVersionGlobal", { entityLabel }),
			title: `${t("version:version")}${formattedCreatedAt ? ` - ${formattedCreatedAt}` : ""}${entityLabel}`,
			...globalConfig?.admin?.meta || {},
			...globalConfig?.admin?.components?.views?.edit?.version?.meta || {}
		};
	}
	return formatMetadata({
		...metaToUse,
		serverURL: config.serverURL
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Versions/generateVersionsViewMetadata.js
/**
* @todo Remove the `MetaConfig` type assertions. They are currently required because of how the `Metadata` type from `next` consumes the `URL` type.
*/
var generateVersionsViewMetadata = async ({ collectionConfig, config, globalConfig, i18n }) => {
	const { t } = i18n;
	const entityLabel = collectionConfig ? getTranslation(collectionConfig.labels.singular, i18n) : globalConfig ? getTranslation(globalConfig.label, i18n) : "";
	let metaToUse = { ...config.admin.meta || {} };
	const data = {};
	if (collectionConfig) {
		const useAsTitle = collectionConfig?.admin?.useAsTitle || "id";
		const titleFromData = data?.[useAsTitle];
		metaToUse = {
			...config.admin.meta || {},
			description: t("version:viewingVersions", {
				documentTitle: data?.[useAsTitle],
				entitySlug: collectionConfig.slug
			}),
			title: `${t("version:versions")}${titleFromData ? ` - ${titleFromData}` : ""} - ${entityLabel}`,
			...collectionConfig?.admin.meta || {},
			...collectionConfig?.admin?.components?.views?.edit?.versions?.meta || {}
		};
	}
	if (globalConfig) metaToUse = {
		...config.admin.meta || {},
		description: t("version:viewingVersionsGlobal", { entitySlug: globalConfig.slug }),
		title: `${t("version:versions")} - ${entityLabel}`,
		...globalConfig?.admin.meta || {},
		...globalConfig?.admin?.components?.views?.edit?.versions?.meta || {}
	};
	return formatMetadata({
		...metaToUse,
		serverURL: config.serverURL
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Document/generateEditViewMetadata.js
/**
* @todo Remove the type assertion. This is currently required because of how the `Metadata` type from `next` consumes the `URL` type.
*/
var generateEditViewMetadata = async ({ collectionConfig, config, globalConfig, i18n, isEditing, isReadOnly = false, view = "default" }) => {
	const { t } = i18n;
	const entityLabel = collectionConfig ? getTranslation(collectionConfig.labels.singular, i18n) : globalConfig ? getTranslation(globalConfig.label, i18n) : "";
	const verb = isReadOnly ? t("general:viewing") : isEditing ? t("general:editing") : t("general:creating");
	const metaToUse = {
		...config.admin.meta || {},
		description: `${verb} - ${entityLabel}`,
		keywords: `${entityLabel}, Payload, CMS`,
		title: `${verb} - ${entityLabel}`
	};
	const ogToUse = {
		title: `${isEditing ? t("general:edit") : t("general:edit")} - ${entityLabel}`,
		...config.admin.meta.openGraph || {},
		...collectionConfig ? {
			...collectionConfig?.admin.meta?.openGraph || {},
			...collectionConfig?.admin?.components?.views?.edit?.[view]?.meta?.openGraph || {}
		} : {},
		...globalConfig ? {
			...globalConfig?.admin.meta?.openGraph || {},
			...globalConfig?.admin?.components?.views?.edit?.[view]?.meta?.openGraph || {}
		} : {}
	};
	return formatMetadata({
		...metaToUse,
		openGraph: ogToUse,
		...collectionConfig ? {
			...collectionConfig?.admin.meta || {},
			...collectionConfig?.admin?.components?.views?.edit?.[view]?.meta || {}
		} : {},
		...globalConfig ? {
			...globalConfig?.admin.meta || {},
			...globalConfig?.admin?.components?.views?.edit?.[view]?.meta || {}
		} : {},
		serverURL: config.serverURL
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Document/getMetaBySegment.js
/**
* Resolves a collection/global document subview from route segments and returns
* its `MetaConfig`. Shared by all framework adapters — segment-routing logic
* lives here so adapters do not duplicate it.
*/
var getMetaBySegment = async ({ adminViews, collectionConfig, config, globalConfig, i18n, params }) => {
	const rawSegments = params.segments;
	const segments = Array.isArray(rawSegments) ? rawSegments : [];
	let fn = null;
	const [segmentOne] = segments;
	const isCollection = segmentOne === "collections";
	const isGlobal = segmentOne === "globals";
	const isEditing = isGlobal || Boolean(isCollection && segments.length > 2 && segments[2] !== "create");
	if (isCollection) {
		if (segments.length === 3) fn = generateEditViewMetadata;
		if (segments.length === 4 && segments[2] === "trash") fn = (args) => generateEditViewMetadata({
			...args,
			isReadOnly: true
		});
		if (segments.length === 4) switch (segments[3]) {
			case "api":
				fn = generateAPIViewMetadata;
				break;
			case "versions":
				fn = generateVersionsViewMetadata;
				break;
			default: break;
		}
		if (segments.length === 5) switch (segments[3]) {
			case "versions":
				fn = generateVersionViewMetadata;
				break;
			default: break;
		}
		if (segments.length === 5 && segments[2] === "trash") switch (segments[4]) {
			case "api":
				fn = generateAPIViewMetadata;
				break;
			case "versions":
				fn = generateVersionsViewMetadata;
				break;
			default: break;
		}
		if (segments.length === 6 && segments[2] === "trash" && segments[4] === "versions") fn = generateVersionViewMetadata;
	}
	if (isGlobal) {
		if (segments.length === 2) fn = generateEditViewMetadata;
		if (segments.length === 3) switch (segments[2]) {
			case "api":
				fn = generateAPIViewMetadata;
				break;
			case "versions":
				fn = generateVersionsViewMetadata;
				break;
			default: break;
		}
		if (segments.length === 4 && segments[2] === "versions") fn = generateVersionViewMetadata;
	}
	if (typeof fn === "function") return fn({
		collectionConfig,
		config,
		globalConfig,
		i18n,
		isEditing
	});
	const { viewKey } = getDocumentView({
		collectionConfig,
		config,
		docPermissions: {
			create: true,
			delete: true,
			fields: true,
			read: true,
			readVersions: true,
			update: true
		},
		globalConfig,
		routeSegments: segments
	});
	if (viewKey) {
		if (collectionConfig?.admin?.components?.views?.edit?.[viewKey] || globalConfig?.admin?.components?.views?.edit?.[viewKey]) return generateEditViewMetadata({
			collectionConfig,
			config,
			globalConfig,
			i18n,
			isEditing,
			view: viewKey
		});
	}
	return adminViews.notFound.generateMetadata({
		config,
		i18n
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/List/generateListViewMetadata.js
var generateListViewMetadata = async (args) => {
	const { collectionConfig, config, i18n } = args;
	let title = "";
	const description = "";
	const keywords = "";
	if (collectionConfig) title = getTranslation(collectionConfig.labels.plural, i18n);
	return formatMetadata({
		...config.admin.meta || {},
		description,
		keywords,
		serverURL: config.serverURL,
		title,
		...collectionConfig?.admin?.meta || {}
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Root/generateCustomViewMetadata.js
var generateCustomViewMetadata = async (args) => {
	const { config, viewConfig } = args;
	if (!viewConfig) return null;
	return formatMetadata({
		description: `Payload`,
		keywords: `Payload`,
		serverURL: config.serverURL,
		title: "Payload",
		...config.admin.meta || {},
		...viewConfig.meta || {},
		openGraph: {
			title: "Payload",
			...config.admin.meta?.openGraph || {},
			...viewConfig.meta?.openGraph || {}
		}
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Root/generatePageMetadata.js
var oneSegmentMetaKeys = {
	"create-first-user": "createFirstUser",
	forgot: "forgot",
	login: "login",
	logout: "unauthorized",
	"logout-inactivity": "unauthorized",
	unauthorized: "unauthorized"
};
/**
* Resolves an admin page's `MetaConfig` from route segments. Shared by all
* framework adapters — segment-routing logic lives here so adapters do not
* duplicate it. Returns the framework-agnostic `MetaConfig`; adapters cast to
* their framework metadata type at the boundary.
*/
var generatePageMetadata = async ({ adminViews, config, i18n, params }) => {
	const rawSegments = params.segments;
	const segments = Array.isArray(rawSegments) ? rawSegments : [];
	const currentRoute = `/${segments.join("/")}`;
	const [segmentOne, segmentTwo, segmentThree] = segments;
	const isCollection = segmentOne === "collections";
	const isGlobal = segmentOne === "globals";
	const collectionConfig = isCollection && segments.length > 1 ? config?.collections?.find((c) => c.slug === segmentTwo) : void 0;
	const globalConfig = isGlobal && segments.length > 1 ? config?.globals?.find((g) => g.slug === segmentTwo) : void 0;
	let meta;
	switch (segments.length) {
		case 0:
			meta = await adminViews.dashboard.generateMetadata({
				config,
				i18n
			});
			break;
		case 1:
			if (segmentOne === "account") meta = await adminViews.account.generateMetadata({
				config,
				i18n
			});
			else if (oneSegmentMetaKeys[segmentOne]) meta = await adminViews[oneSegmentMetaKeys[segmentOne]].generateMetadata({
				config,
				i18n
			});
			break;
		case 2:
			if (`/${segmentOne}` === config.admin.routes.reset) meta = await adminViews.reset.generateMetadata({
				config,
				i18n
			});
			else if (isCollection && collectionConfig) meta = await generateListViewMetadata({
				collectionConfig,
				config,
				i18n
			});
			else if (isGlobal && globalConfig) meta = await getMetaBySegment({
				adminViews,
				config,
				globalConfig,
				i18n,
				params
			});
			break;
		default:
			if (segmentTwo === "verify") meta = await adminViews.verify.generateMetadata({
				config,
				i18n
			});
			else if (isCollection && collectionConfig) if (segmentThree === "trash" && segments.length === 3) meta = await generateCollectionTrashMetadata({
				collectionConfig,
				config,
				i18n,
				params
			});
			else meta = await getMetaBySegment({
				adminViews,
				collectionConfig,
				config,
				i18n,
				params
			});
			else if (isGlobal && globalConfig) meta = await getMetaBySegment({
				adminViews,
				config,
				globalConfig,
				i18n,
				params
			});
			break;
	}
	if (!meta) {
		const { viewConfig, viewKey } = getCustomViewByRoute({
			config,
			currentRoute
		});
		if (viewKey) meta = await generateCustomViewMetadata({
			config,
			i18n,
			viewConfig
		});
		else meta = await adminViews.notFound.generateMetadata({
			config,
			i18n
		});
	}
	return meta;
};
//#endregion
export { generatePageMetadata };
