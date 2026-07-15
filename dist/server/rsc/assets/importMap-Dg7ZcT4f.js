import { r as __toESM } from "./rolldown-runtime-DJK8HYOj.js";
import { a as require_react_react_server } from "./rsc-CrbjC1on.js";
import { Bt as RenderServerComponent, I as HierarchyButtonClient, L as HierarchyFieldClient, Vt as require_jsx_runtime_react_server, W as Locked, X as NullField, bt as TagIcon$1, h as CollectionQuerySortField, j as FolderIcon$1, m as Card, nt as RecentlyViewedCollectionsField, p as Button, t as getPreferences, tt as QueryPresetsWhereField, z as HierarchySidebarTab } from "./upsertPreferences-BTcoIMIB.js";
import { t as getTranslation } from "./getTranslation-Dh_N5Etc.js";
import { n as getGlobalData, t as getNavGroups } from "./getNavGroups-D_4RSxf0.js";
import { t as getVisibleEntities } from "./getVisibleEntities-DAh7u1oe.js";
import assetsManifest from "../__vite_rsc_assets_manifest.js";
import { PREFERENCE_KEYS, fieldAffectsData, formatAdminURL, sortableFieldTypes } from "payload/shared";
import { DEFAULT_HIERARCHY_TREE_LIMIT, EntityType, getAccessResults, getInitialTreeData } from "payload";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/icons/Folder/index.js
var import_jsx_runtime_react_server = require_jsx_runtime_react_server();
var import_react_react_server = /* @__PURE__ */ __toESM(require_react_react_server(), 1);
var paths$1 = {
	16: "M6.58594 3C6.98371 3.00004 7.36522 3.15818 7.64648 3.43945L9.20703 5H12C12.8284 5 13.5 5.67157 13.5 6.5V11.5C13.5 12.3284 12.8284 13 12 13H4C3.17157 13 2.5 12.3284 2.5 11.5V4.5C2.5 3.67157 3.17157 3 4 3H6.58594ZM4 4C3.72386 4 3.5 4.22386 3.5 4.5V11.5C3.5 11.7761 3.72386 12 4 12H12C12.2761 12 12.5 11.7761 12.5 11.5V6.5C12.5 6.22386 12.2761 6 12 6H8.79297L6.93945 4.14648C6.84572 4.05275 6.71849 4.00004 6.58594 4H4ZM11 10C11.2761 10 11.5 10.2239 11.5 10.5C11.5 10.7761 11.2761 11 11 11H5C4.72386 11 4.5 10.7761 4.5 10.5C4.5 10.2239 4.72386 10 5 10H11Z",
	24: "M10.58594 6C10.98371 6.00004 11.36522 6.15818 11.64648 6.43945L13.20703 8H16.5C17.3284 8 18 8.67157 18 9.5V16.5C18 17.3284 17.3284 18 16.5 18H7.5C6.67157 18 6 17.3284 6 16.5V7.5C6 6.67157 6.67157 6 7.5 6H10.58594ZM7.5 7C7.22386 7 7 7.22386 7 7.5V16.5C7 16.7761 7.22386 17 7.5 17H16.5C16.7761 17 17 16.7761 17 16.5V9.5C17 9.22386 16.7761 9 16.5 9H12.79297L10.93945 7.14648C10.84572 7.05275 10.71849 7.00004 10.58594 7H7.5ZM15.5 15C15.7761 15 16 15.2239 16 15.5C16 15.7761 15.7761 16 15.5 16H8.5C8.22386 16 8 15.7761 8 15.5C8 15.2239 8.22386 15 8.5 15H15.5Z"
};
var FolderIcon = ({ className, size = 24 }) => /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("svg", {
	className: [
		"icon",
		"icon--folder",
		className
	].filter(Boolean).join(" "),
	fill: "none",
	height: size,
	viewBox: `0 0 ${size} ${size}`,
	width: size,
	xmlns: "http://www.w3.org/2000/svg",
	children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("path", {
		clipRule: "evenodd",
		d: paths$1[size],
		fill: "currentColor",
		fillRule: "evenodd"
	})
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Hierarchy/DocHeaderButton/index.server.js
var HierarchyButton = ({ fieldName, hasMany, hierarchyCollectionSlug, payload }) => {
	const hierarchyCollectionConfig = payload.config.collections.find((c) => c.slug === hierarchyCollectionSlug);
	const hierarchyConfig = hierarchyCollectionConfig?.hierarchy && typeof hierarchyCollectionConfig.hierarchy === "object" ? hierarchyCollectionConfig.hierarchy : void 0;
	const IconComponent = hierarchyConfig?.admin.components.Icon;
	const SmallIconComponent = hierarchyConfig?.admin.components.SmallIcon;
	const renderedIcon = !IconComponent || IconComponent === "@payloadcms/ui#FolderIcon" ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(FolderIcon, { size: 16 }) : RenderServerComponent({
		Component: IconComponent,
		importMap: payload.importMap,
		key: `hierarchy-button-icon-${hierarchyCollectionSlug}`
	});
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(HierarchyButtonClient, {
		fieldName,
		hasMany,
		hierarchyCollectionSlug,
		Icon: renderedIcon,
		SmallIcon: SmallIconComponent === IconComponent ? renderedIcon : !SmallIconComponent || SmallIconComponent === "@payloadcms/ui#FolderIcon" ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(FolderIcon, {}) : RenderServerComponent({
			Component: SmallIconComponent,
			importMap: payload.importMap,
			key: `hierarchy-button-small-icon-${hierarchyCollectionSlug}`
		})
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Hierarchy/Field/index.server.js
var HierarchyField = (props) => {
	const { clientField, field, payload } = props;
	const hierarchySlug = Array.isArray(field.relationTo) ? field.relationTo[0] : field.relationTo;
	const hierarchyCollectionConfig = payload.config.collections.find((c) => c.slug === hierarchySlug);
	const Icon = (hierarchyCollectionConfig?.hierarchy && typeof hierarchyCollectionConfig.hierarchy === "object" ? hierarchyCollectionConfig.hierarchy : void 0)?.admin.components.Icon;
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(HierarchyFieldClient, {
		field: clientField,
		Icon: RenderServerComponent({
			Component: Icon,
			importMap: payload.importMap,
			key: `hierarchy-field-icon-${hierarchySlug}`
		}),
		path: props.path,
		permissions: props.permissions,
		readOnly: props.readOnly,
		schemaPath: props.schemaPath
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/icons/Tag/index.js
var paths = {
	16: "M7.793 3a2.5 2.5 0 0 1 1.768.732l3.853 3.854a2 2 0 0 1 0 2.828l-3 3a2 2 0 0 1-2.828 0L3.732 9.561A2.5 2.5 0 0 1 3 7.793V4.5A1.5 1.5 0 0 1 4.5 3zM4.5 4a.5.5 0 0 0-.5.5v3.293c0 .398.158.78.44 1.06l3.853 3.854a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414L8.854 4.439A1.5 1.5 0 0 0 7.793 4zm2 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m1.59-.402.056.048a.5.5 0 0 0-.069-.057z",
	24: "M11.793 6a2.5 2.5 0 0 1 1.768.732l4.853 4.854a2 2 0 0 1 0 2.828l-4 4a2 2 0 0 1-2.828 0L6.733 13.56A2.5 2.5 0 0 1 6 11.794V7.5A1.5 1.5 0 0 1 7.5 6zM7.5 7l-.1.01a.5.5 0 0 0-.4.49v4.293c0 .398.158.78.44 1.06l4.853 4.854a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414l-4.853-4.854A1.5 1.5 0 0 0 11.794 7zm2 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m2.59-.902.057.048a.5.5 0 0 0-.07-.057z"
};
function TagIcon({ className, size = 24 }) {
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("svg", {
		className: [className, "icon icon--tag"].filter(Boolean).join(" "),
		fill: "none",
		height: size,
		viewBox: `0 0 ${size} ${size}`,
		width: size,
		xmlns: "http://www.w3.org/2000/svg",
		children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("path", {
			d: paths[size],
			fill: "currentColor"
		})
	});
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Hierarchy/Tree/HierarchySidebarTab.server.js
var HierarchySidebarTabServer = async ({ hierarchyCollectionSlug, i18n, payload, req, searchParams, user }) => {
	if (!user) return null;
	let initialData = null;
	let initialExpandedNodes = [];
	let initialSelectedFilters = [];
	let selectedNodeId = null;
	let parentFieldName = "parent";
	let treeLimit;
	let typeFieldName;
	let useAsTitle;
	let collectionSpecificOptions = [];
	let baseFilter = null;
	const collectionConfig = payload.collections[hierarchyCollectionSlug]?.config;
	const hierarchyConfig = collectionConfig?.hierarchy && typeof collectionConfig.hierarchy === "object" ? collectionConfig.hierarchy : void 0;
	const IconComponent = hierarchyConfig?.admin?.components?.SmallIcon;
	const icon = IconComponent ? RenderServerComponent({
		clientProps: { size: 16 },
		Component: IconComponent,
		importMap: payload.importMap,
		key: `hierarchy-sidebar-icon-${hierarchyCollectionSlug}`
	}) : /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(TagIcon, { size: 16 });
	try {
		parentFieldName = hierarchyConfig?.parentFieldName ?? "parent";
		const selectedNodeParam = searchParams?.[parentFieldName];
		selectedNodeId = selectedNodeParam ? String(selectedNodeParam) : null;
		const preferenceKey = `${PREFERENCE_KEYS.HIERARCHY_TREE}-${hierarchyCollectionSlug}`;
		const { docs: preferenceDocs } = await payload.find({
			collection: "payload-preferences",
			limit: 1,
			overrideAccess: false,
			user,
			where: { and: [
				{ key: { equals: preferenceKey } },
				{ "user.value": { equals: user.id } },
				{ "user.relationTo": { equals: user.collection } }
			] }
		});
		const preferences = preferenceDocs[0];
		if (preferences?.value?.expandedNodes) initialExpandedNodes = preferences.value.expandedNodes;
		if (preferences?.value?.selectedFilters) initialSelectedFilters = preferences.value.selectedFilters;
		treeLimit = hierarchyConfig?.admin?.treeLimit;
		typeFieldName = hierarchyConfig?.collectionSpecific && typeof hierarchyConfig.collectionSpecific === "object" ? hierarchyConfig.collectionSpecific.fieldName : void 0;
		useAsTitle = collectionConfig?.admin?.useAsTitle;
		if (hierarchyConfig.collectionSpecific && hierarchyConfig?.relatedCollections) collectionSpecificOptions = Object.keys(hierarchyConfig.relatedCollections).map((slug) => {
			return {
				label: getTranslation((payload.collections[slug]?.config)?.labels?.plural ?? slug, i18n),
				value: slug
			};
		}).sort((a, b) => a.label.localeCompare(b.label));
		let selectedNodeParentId = null;
		if (selectedNodeId) {
			const ancestorIds = [];
			let currentNodeId = selectedNodeId;
			let isFirstIteration = true;
			while (currentNodeId) try {
				const parentId = (await payload.findByID({
					id: currentNodeId,
					collection: hierarchyCollectionSlug,
					depth: 0,
					overrideAccess: false,
					user
				}))?.[parentFieldName];
				if (isFirstIteration) {
					selectedNodeParentId = parentId ?? null;
					isFirstIteration = false;
				}
				if (parentId) {
					ancestorIds.push(parentId);
					currentNodeId = parentId;
				} else currentNodeId = null;
			} catch {
				break;
			}
			const expandedSet = new Set(initialExpandedNodes);
			ancestorIds.forEach((id) => expandedSet.add(id));
			initialExpandedNodes = Array.from(expandedSet);
		}
		const baseFilterFn = collectionConfig?.admin?.baseFilter ?? collectionConfig?.admin?.baseListFilter;
		if (baseFilterFn && req) baseFilter = await baseFilterFn({
			limit: DEFAULT_HIERARCHY_TREE_LIMIT,
			page: 1,
			req,
			sort: "id"
		}) ?? null;
		initialData = await getInitialTreeData({
			baseFilter,
			collectionSlug: hierarchyCollectionSlug,
			expandedNodeIds: initialExpandedNodes,
			...initialSelectedFilters.length > 0 && { filterByCollections: initialSelectedFilters },
			...treeLimit !== void 0 && { limit: treeLimit },
			payload,
			selectedNodeId,
			selectedNodeParentId,
			user: req.user
		});
	} catch (error) {
		payload.logger.warn({
			err: error,
			msg: `Failed to fetch hierarchy data for ${hierarchyCollectionSlug}`
		});
	}
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(HierarchySidebarTab, {
		baseFilter,
		collectionSpecificOptions,
		hierarchyCollectionSlug,
		icon,
		initialData,
		initialExpandedNodes,
		initialSelectedFilters,
		parentFieldName,
		selectedNodeId,
		treeLimit,
		typeFieldName,
		useAsTitle
	});
};
var Resources$2 = ((React, deps, RemoveDuplicateServerCss, precedence) => {
	return function Resources() {
		return React.createElement(React.Fragment, null, [...deps.css.map((href) => React.createElement("link", {
			key: "css:" + href,
			rel: "stylesheet",
			...precedence ? { precedence } : {},
			href,
			"data-rsc-css-href": href
		})), RemoveDuplicateServerCss && React.createElement(RemoveDuplicateServerCss, { key: "remove-duplicate-css" })]);
	};
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/widgets/CollectionCards/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/widgets/CollectionCards/index.js
var baseClass = "collections";
async function CollectionCards(props) {
	const { i18n, payload, user } = props.req;
	const { admin: adminRoute } = payload.config.routes;
	const { t } = i18n;
	const permissions = await getAccessResults({ req: props.req });
	const visibleEntities = getVisibleEntities({ req: props.req });
	const globalData = await getGlobalData(props.req);
	const navGroups = getNavGroups(permissions, visibleEntities, payload.config, i18n);
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
		className: baseClass,
		children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
			className: `${baseClass}__wrap`,
			children: !navGroups || navGroups?.length === 0 ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("p", { children: "no nav groups...." }) : navGroups.map(({ entities, label }, groupIndex) => {
				return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("div", {
					className: `${baseClass}__group`,
					children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("h2", {
						className: `${baseClass}__label`,
						children: label
					}), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("ul", {
						className: `${baseClass}__card-list`,
						children: entities.map(({ slug, type, label }, entityIndex) => {
							let title;
							let buttonAriaLabel;
							let createHREF;
							let href;
							let hasCreatePermission;
							let isLocked = null;
							let userEditing = null;
							if (type === EntityType.collection) {
								title = getTranslation(label, i18n);
								buttonAriaLabel = t("general:showAllLabel", { label: title });
								href = formatAdminURL({
									adminRoute,
									path: `/collections/${slug}`
								});
								createHREF = formatAdminURL({
									adminRoute,
									path: `/collections/${slug}/create`
								});
								hasCreatePermission = permissions?.collections?.[slug]?.create;
							}
							if (type === EntityType.global) {
								title = getTranslation(label, i18n);
								buttonAriaLabel = t("general:editLabel", { label: getTranslation(label, i18n) });
								href = formatAdminURL({
									adminRoute,
									path: `/globals/${slug}`
								});
								const globalLockData = globalData.find((global) => global.slug === slug);
								if (globalLockData) {
									isLocked = globalLockData.data._isLocked;
									userEditing = globalLockData.data._userEditing;
									const lockDuration = globalLockData?.lockDuration;
									const lockExpirationTime = new Date(globalLockData.data?._lastEditedAt).getTime() + lockDuration * 1e3;
									if ((/* @__PURE__ */ new Date()).getTime() > lockExpirationTime) {
										isLocked = false;
										userEditing = null;
									}
								}
							}
							return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("li", { children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(Card, {
								actions: isLocked && user?.id !== userEditing?.id ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(Locked, {
									className: `${baseClass}__locked`,
									user: userEditing
								}) : hasCreatePermission && type === EntityType.collection ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(Button, {
									"aria-label": t("general:createNewLabel", { label }),
									buttonStyle: "ghost",
									el: "link",
									icon: "plus",
									round: true,
									to: createHREF
								}) : void 0,
								buttonAriaLabel,
								href,
								id: `card-${slug}`,
								title: getTranslation(label, i18n),
								titleAs: "h3"
							}) }, entityIndex);
						})
					})]
				}, groupIndex);
			})
		})
	});
}
CollectionCards = /* #__PURE__ */ __vite_rsc_wrap_css__$2(CollectionCards, "CollectionCards");
function __vite_rsc_wrap_css__$2(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources$2), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
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
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/widgets/CollectionQuery/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/formatRelativeDate.js
var relativeTimeDivisions = [
	{
		amount: 60,
		unit: "seconds"
	},
	{
		amount: 60,
		unit: "minutes"
	},
	{
		amount: 24,
		unit: "hours"
	},
	{
		amount: 7,
		unit: "days"
	},
	{
		amount: 4.34524,
		unit: "weeks"
	},
	{
		amount: 12,
		unit: "months"
	},
	{
		amount: Number.POSITIVE_INFINITY,
		unit: "years"
	}
];
/**
* Returns an `Intl.RelativeTimeFormat` for the given language, falling back to English on
* unsupported locales. Create it once and reuse it across rows. Shared by dashboard widgets so
* their relative timestamps render identically.
*/
function getRelativeTimeFormat(language) {
	try {
		return new Intl.RelativeTimeFormat(language, {
			numeric: "auto",
			style: "narrow"
		});
	} catch {
		return new Intl.RelativeTimeFormat("en", {
			numeric: "auto",
			style: "narrow"
		});
	}
}
/**
* Formats an ISO date string as a locale-aware relative time (e.g. "5m ago", "in 2d"). Returns the
* original value unchanged when it is not a parseable date.
*/
function formatRelativeDate({ relativeTimeFormat, value }) {
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return value;
	let duration = (date.getTime() - Date.now()) / 1e3;
	for (const division of relativeTimeDivisions) {
		if (Math.abs(duration) < division.amount) return relativeTimeFormat.format(Math.round(duration), division.unit);
		duration /= division.amount;
	}
	return relativeTimeFormat.format(Math.round(duration), "years");
}
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
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/widgets/WidgetCard/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/widgets/WidgetCard/index.js
function WidgetCard({ children, className, title }) {
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: [
			"card",
			"widget-card",
			className
		].filter(Boolean).join(" "),
		children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
			className: "widget-card__header",
			children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("h3", {
				className: "widget-card__title",
				children: title
			})
		}), children]
	});
}
function WidgetList({ emptyMessage, items }) {
	if (items.length === 0) return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("p", {
		className: "widget-card__empty",
		children: emptyMessage
	});
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("ul", {
		className: "widget-card__rows",
		children: items.map((item) => /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("li", {
			className: "widget-card__row",
			children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("a", {
				className: "widget-card__row-link",
				href: item.href,
				children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("span", {
					className: "widget-card__row-main",
					children: item.main
				}), item.meta != null ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("span", {
					className: "widget-card__row-meta",
					children: item.meta
				}) : null]
			})
		}, item.key))
	});
}
WidgetCard = /* #__PURE__ */ __vite_rsc_wrap_css__$1(WidgetCard, "WidgetCard");
WidgetList = /* #__PURE__ */ __vite_rsc_wrap_css__$1(WidgetList, "WidgetList");
function __vite_rsc_wrap_css__$1(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/widgets/CollectionQuery/getCollectionFieldPaths.js
var baseFieldPaths = [
	"createdAt",
	"id",
	"updatedAt"
];
var sortableFieldTypeSet = new Set(sortableFieldTypes);
var relationshipFieldTypes = /* @__PURE__ */ new Set([
	"join",
	"relationship",
	"upload"
]);
/**
* Builds the queryable field paths for a collection from either server or client field schemas.
* Sortability stays anchored on Payload's `sortableFieldTypes` so the widget follows core rules as
* field types evolve, while array sub-fields remain filter-only.
*/
function getCollectionFieldPaths(fields) {
	const paths = {
		filterableFieldPaths: new Set(baseFieldPaths),
		relationshipFieldPaths: /* @__PURE__ */ new Set(),
		sortableFieldPaths: new Set(baseFieldPaths)
	};
	addFieldPaths({
		fields,
		paths
	});
	return paths;
}
function addFieldPaths({ canSort = true, fields, parentPath, paths }) {
	for (const field of fields) {
		if ("virtual" in field && field.virtual === true) continue;
		if (field.type === "tabs" && "tabs" in field) {
			for (const tab of field.tabs) {
				const path = "name" in tab && tab.name ? joinPath(parentPath, tab.name) : parentPath;
				addFieldPaths({
					canSort,
					fields: tab.fields,
					parentPath: path,
					paths
				});
			}
			continue;
		}
		if ((field.type === "collapsible" || field.type === "row") && "fields" in field) {
			addFieldPaths({
				canSort,
				fields: field.fields,
				parentPath,
				paths
			});
			continue;
		}
		if (field.type === "group" && "fields" in field) {
			const path = fieldAffectsData(field) ? joinPath(parentPath, field.name) : parentPath;
			addFieldPaths({
				canSort,
				fields: field.fields,
				parentPath: path,
				paths
			});
			continue;
		}
		if (field.type === "array" && "fields" in field) {
			addFieldPaths({
				canSort: false,
				fields: field.fields,
				parentPath: joinPath(parentPath, field.name),
				paths
			});
			continue;
		}
		if (field.type === "blocks" || !fieldAffectsData(field)) continue;
		const path = joinPath(parentPath, "virtual" in field && typeof field.virtual === "string" ? field.virtual : field.name);
		paths.filterableFieldPaths.add(path);
		if (relationshipFieldTypes.has(field.type)) paths.relationshipFieldPaths.add(path);
		if (canSort && sortableFieldTypeSet.has(field.type)) paths.sortableFieldPaths.add(path);
	}
}
function joinPath(parentPath, path) {
	return parentPath ? `${parentPath}.${path}` : path;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/widgets/CollectionQuery/index.js
var minLimit = 1;
var maxLimit = 25;
var emptyFieldPaths = {
	filterableFieldPaths: /* @__PURE__ */ new Set(),
	relationshipFieldPaths: /* @__PURE__ */ new Set(),
	sortableFieldPaths: /* @__PURE__ */ new Set()
};
async function CollectionQueryWidget({ req, widgetData }) {
	const { i18n, payload, user } = req;
	const { relatedCollection, sortDirection = "desc", sortField, title: titleFromData, where } = widgetData ?? {};
	const limit = clampLimit(widgetData?.limit);
	const collectionConfig = relatedCollection ? payload.collections[relatedCollection]?.config : void 0;
	const title = titleFromData || (collectionConfig ? getTranslation(collectionConfig.labels.plural, i18n) : i18n.t("dashboard:widgetTitleFallback"));
	const validationErrors = getValidationErrors({
		collectionConfig,
		fieldPaths: collectionConfig ? getCollectionFieldPaths(collectionConfig.fields) : emptyFieldPaths,
		i18n,
		relatedCollection,
		sortField,
		where
	});
	if (validationErrors.length > 0 || !relatedCollection || !collectionConfig) return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(CollectionQueryError, {
		errors: validationErrors,
		i18n,
		title
	});
	const sort = sortField ? `${sortDirection === "desc" ? "-" : ""}${sortField}` : void 0;
	const adminRoute = payload.config.routes.admin;
	let docs;
	try {
		docs = (await payload.find({
			collection: relatedCollection,
			depth: 0,
			limit,
			overrideAccess: false,
			sort,
			user,
			where
		})).docs;
	} catch (err) {
		payload.logger.error({
			err,
			msg: `CollectionQueryWidget: failed to query collection "${relatedCollection}"`
		});
		return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(CollectionQueryError, {
			errors: [i18n.t("dashboard:widgetQueryError")],
			i18n,
			title
		});
	}
	const documentLabelPath = getCollectionDocumentLabelPath(collectionConfig.admin);
	const relativeTimeFormat = getRelativeTimeFormat(i18n.language);
	const items = docs.map((doc) => {
		const sortMeta = getDocSortMeta({
			doc,
			i18n,
			relativeTimeFormat,
			sortField
		});
		return {
			href: getDocumentHref({
				id: doc.id,
				adminRoute,
				collectionSlug: relatedCollection
			}),
			key: String(doc.id),
			main: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("span", {
				className: "widget-card__row-title",
				children: getDocLabel({
					doc,
					documentLabelPath
				})
			}),
			meta: sortMeta ? sortMeta.dateTime ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("time", {
				dateTime: sortMeta.dateTime,
				children: sortMeta.label
			}) : sortMeta.label : null
		};
	});
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(WidgetCard, {
		className: "collection-query-widget",
		title,
		children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(WidgetList, {
			emptyMessage: i18n.t("general:noResultsFound"),
			items
		})
	});
}
function CollectionQueryError({ errors, i18n, title }) {
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(WidgetCard, {
		className: "collection-query-widget collection-query-widget--error",
		title,
		children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("div", {
			className: "collection-query-widget__error",
			children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("p", {
				className: "collection-query-widget__error-title",
				children: i18n.t("dashboard:widgetConfigurationError")
			}), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("ul", {
				className: "collection-query-widget__error-list",
				children: errors.map((error) => /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("li", { children: error }, error))
			})]
		})
	});
}
function clampLimit(limit) {
	if (typeof limit !== "number" || Number.isNaN(limit)) return 5;
	return Math.min(Math.max(Math.floor(limit), minLimit), maxLimit);
}
function getCollectionDocumentLabelPath(adminConfig) {
	return adminConfig.useAsTitle || "id";
}
function getDocSortMeta({ doc, i18n, relativeTimeFormat, sortField }) {
	const value = sortField ? getValueByPath$1({
		object: doc,
		path: sortField
	}) : doc.updatedAt || doc.createdAt;
	if (value === null || typeof value === "undefined" || value === "") return null;
	if (value instanceof Date) {
		const dateTime = value.toISOString();
		return {
			dateTime,
			label: formatRelativeDate({
				relativeTimeFormat,
				value: dateTime
			})
		};
	}
	if (typeof value === "string") {
		if (isDateString(value)) return {
			dateTime: value,
			label: formatRelativeDate({
				relativeTimeFormat,
				value
			})
		};
		return { label: value };
	}
	if (typeof value === "number") return { label: value.toLocaleString(i18n.language) };
	if (typeof value === "boolean") return { label: value ? i18n.t("general:true") : i18n.t("general:false") };
	return null;
}
function getDocLabel({ doc, documentLabelPath }) {
	const title = getValueByPath$1({
		object: doc,
		path: documentLabelPath
	});
	return typeof title === "string" && title ? title : String(doc.id);
}
function getValidationErrors({ collectionConfig, fieldPaths, i18n, relatedCollection, sortField, where }) {
	const errors = [];
	if (!relatedCollection) {
		errors.push(i18n.t("dashboard:widgetCollectionRequired"));
		return errors;
	}
	if (!collectionConfig) {
		errors.push(i18n.t("dashboard:widgetInvalidCollection", { collection: relatedCollection }));
		return errors;
	}
	if (sortField) {
		if (!fieldPaths.filterableFieldPaths.has(sortField)) errors.push(i18n.t("dashboard:widgetInvalidSortField", {
			collection: relatedCollection,
			field: sortField
		}));
		else if (!fieldPaths.sortableFieldPaths.has(sortField)) errors.push(i18n.t("dashboard:widgetNonSortableSortField", {
			collection: relatedCollection,
			field: sortField
		}));
	}
	for (const fieldPath of getWhereFieldPaths(where)) {
		if (fieldPaths.filterableFieldPaths.has(fieldPath) || hasRelationshipAncestor({
			path: fieldPath,
			relationshipFieldPaths: fieldPaths.relationshipFieldPaths
		})) continue;
		errors.push(i18n.t("dashboard:widgetInvalidFilterField", {
			collection: relatedCollection,
			field: fieldPath
		}));
	}
	return errors;
}
/**
* A `where` path that traverses into a relationship (e.g. `category.name`) cannot be validated
* against this collection's fields because it targets another collection, so accept it when any
* ancestor segment is a relationship.
*/
function hasRelationshipAncestor({ path, relationshipFieldPaths }) {
	const segments = path.split(".");
	let prefix = "";
	for (const segment of segments) {
		prefix = prefix ? `${prefix}.${segment}` : segment;
		if (relationshipFieldPaths.has(prefix)) return true;
	}
	return false;
}
function getWhereFieldPaths(where) {
	const fieldPaths = /* @__PURE__ */ new Set();
	collectWhereFieldPaths({
		fieldPaths,
		value: where
	});
	return fieldPaths;
}
function collectWhereFieldPaths({ fieldPaths, value }) {
	if (!value || typeof value !== "object") return;
	if (Array.isArray(value)) {
		for (const item of value) collectWhereFieldPaths({
			fieldPaths,
			value: item
		});
		return;
	}
	for (const [key, childValue] of Object.entries(value)) {
		if (key === "and" || key === "or") {
			collectWhereFieldPaths({
				fieldPaths,
				value: childValue
			});
			continue;
		}
		fieldPaths.add(key);
	}
}
function getDocumentHref({ id, adminRoute, collectionSlug }) {
	return formatAdminURL({
		adminRoute,
		path: `/collections/${collectionSlug}/${id}`
	});
}
function getValueByPath$1({ object, path }) {
	return path.split(".").reduce((value, segment) => {
		if (!value || typeof value !== "object") return;
		return value[segment];
	}, object);
}
function isDateString(value) {
	return /^\d{4}-\d{2}-\d{2}/.test(value) && !Number.isNaN(new Date(value).getTime());
}
CollectionQueryWidget = /* #__PURE__ */ __vite_rsc_wrap_css__(CollectionQueryWidget, "CollectionQueryWidget");
function __vite_rsc_wrap_css__(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources$1), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/widgets/RecentlyViewed/index.js
var displayLimit = 10;
async function RecentlyViewedWidget({ req, widgetData }) {
	const { i18n, user } = req;
	const title = i18n.t("dashboard:widgetRecentlyViewedTitle");
	const enrichedItems = user ? await getEnrichedItems({
		req,
		widgetData
	}) : [];
	const relativeTimeFormat = getRelativeTimeFormat(i18n.language);
	const items = enrichedItems.map((item) => ({
		href: item.href,
		key: `${item.collectionSlug}:${item.id}`,
		main: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(import_jsx_runtime_react_server.Fragment, { children: [item.thumbnailURL ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("img", {
			alt: "",
			className: "widget-card__thumbnail",
			src: item.thumbnailURL
		}) : /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("span", {
			className: "widget-card__type",
			children: item.typeLabel
		}), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("span", {
			className: "widget-card__row-title",
			children: item.title
		})] }),
		meta: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("time", {
			dateTime: item.viewedAt,
			children: formatRelativeDate({
				relativeTimeFormat,
				value: item.viewedAt
			})
		})
	}));
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(WidgetCard, {
		className: "recently-viewed-widget",
		title,
		children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(WidgetList, {
			emptyMessage: i18n.t("dashboard:widgetRecentlyViewedEmpty"),
			items
		})
	});
}
/**
* Loads the stored recently viewed identities and computes display fields from the live documents.
* Documents are queried with access control, so deleted or now-forbidden docs are dropped.
*/
async function getEnrichedItems({ req, widgetData }) {
	const { i18n, payload, user } = req;
	const excludedCollections = new Set(widgetData?.excludedCollections ?? []);
	const items = ((await getPreferences(PREFERENCE_KEYS.RECENTLY_VIEWED, payload, user.id, user.collection))?.value?.items ?? []).filter((item) => !excludedCollections.has(item.collectionSlug) && Boolean(payload.collections[item.collectionSlug]));
	if (items.length === 0) return [];
	const idsByCollection = /* @__PURE__ */ new Map();
	for (const item of items) {
		const ids = idsByCollection.get(item.collectionSlug) ?? [];
		ids.push(item.id);
		idsByCollection.set(item.collectionSlug, ids);
	}
	const docsByKey = /* @__PURE__ */ new Map();
	await Promise.all([...idsByCollection.entries()].map(async ([collectionSlug, ids]) => {
		try {
			const result = await payload.find({
				collection: collectionSlug,
				depth: 0,
				limit: ids.length,
				overrideAccess: false,
				pagination: false,
				user,
				where: { id: { in: ids } }
			});
			for (const doc of result.docs) docsByKey.set(`${collectionSlug}:${doc.id}`, doc);
		} catch (err) {
			payload.logger.error({
				err,
				msg: `RecentlyViewedWidget: failed to load collection "${collectionSlug}"`
			});
		}
	}));
	const enrichedItems = [];
	for (const item of items) {
		if (enrichedItems.length >= displayLimit) break;
		const doc = docsByKey.get(`${item.collectionSlug}:${item.id}`);
		if (!doc) continue;
		const collectionConfig = payload.collections[item.collectionSlug].config;
		const rawTitle = getValueByPath({
			object: doc,
			path: collectionConfig.admin?.useAsTitle || "id"
		});
		enrichedItems.push({
			id: item.id,
			collectionSlug: item.collectionSlug,
			href: formatAdminURL({
				adminRoute: payload.config.routes.admin,
				path: `/collections/${item.collectionSlug}/${item.id}`
			}),
			thumbnailURL: collectionConfig.upload && typeof doc.thumbnailURL === "string" ? doc.thumbnailURL : void 0,
			title: typeof rawTitle === "string" && rawTitle ? rawTitle : String(item.id),
			typeLabel: getTranslation(collectionConfig.labels.singular, i18n),
			viewedAt: item.viewedAt
		});
	}
	return enrichedItems;
}
function getValueByPath({ object, path }) {
	return path.split(".").reduce((value, segment) => {
		if (!value || typeof value !== "object") return;
		return value[segment];
	}, object);
}
//#endregion
//#region src/importMap.js
/** @type import('payload').ImportMap */
var importMap = {
	"@payloadcms/ui#NullField": NullField,
	"@payloadcms/ui/rsc#HierarchyField": HierarchyField,
	"@payloadcms/ui/rsc#HierarchyButton": HierarchyButton,
	"@payloadcms/ui#FolderIcon": FolderIcon$1,
	"@payloadcms/ui/rsc#HierarchySidebarTabServer": HierarchySidebarTabServer,
	"@payloadcms/ui#TagIcon": TagIcon$1,
	"@payloadcms/ui/rsc#CollectionCards": CollectionCards,
	"@payloadcms/ui/rsc#CollectionQueryWidget": CollectionQueryWidget,
	"@payloadcms/ui#QueryPresetsWhereField": QueryPresetsWhereField,
	"@payloadcms/ui#CollectionQuerySortField": CollectionQuerySortField,
	"@payloadcms/ui/rsc#RecentlyViewedWidget": RecentlyViewedWidget,
	"@payloadcms/ui#RecentlyViewedCollectionsField": RecentlyViewedCollectionsField
};
//#endregion
export { importMap };
