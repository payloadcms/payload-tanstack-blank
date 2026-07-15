import { r as __toESM } from "./rolldown-runtime-DJK8HYOj.js";
import { a as require_react_react_server, t as registerClientReference } from "./rsc-CrbjC1on.js";
import { $ as Pill, B as HydrateAuthProvider, Bt as RenderServerComponent, D as EditDepthProvider, H as ListQueryProvider, N as GroupByHeader, P as GroupByPageControls, R as HierarchyListView, Rt as ViewDescription, T as DocumentInfoProvider, U as LivePreviewProvider, V as HydrateHierarchyProvider, Vt as require_jsx_runtime_react_server, Z as OrderableTable, _t as SortHeader, b as DefaultListView, bt as TagIcon, ct as SelectAll, gt as SortColumn, j as FolderIcon, lt as SelectRow, n as upsertPreferences, rt as RenderDefaultCell, t as getPreferences, ut as SelectionProvider, v as DefaultCell, vt as SortRow, yt as Table } from "./upsertPreferences-BTcoIMIB.js";
import { t as getTranslation } from "./getTranslation-Dh_N5Etc.js";
import { a as isEditing, c as sanitizeID, d as handlePreview, f as handleLivePreview, i as getDocumentPermissions, l as buildFormState, m as DocumentHeader, n as getVersions, o as getDocumentData, r as getIsLocked, s as getDocPreferences, t as NotFoundView } from "./NotFound-7JodD-bI.js";
import { r as formatDate, t as getDocumentView } from "./getDocumentView-nmB564VU.js";
import { n as UnauthorizedViewWithGutter } from "./Unauthorized-DalNEOGT.js";
import { n as resolveFilterOptions } from "./fieldSchemasToFormState-CRxPxN-p.js";
import assetsManifest from "../__vite_rsc_assets_manifest.js";
import { DEFAULT_HIERARCHY_LIST_LIMIT, PREFERENCE_KEYS, appendDateTimezoneSelectFields, appendUploadSelectFields, combineWhereConstraints, fieldAffectsData, fieldHasSubFields, fieldIsHiddenOrDisabled, fieldIsID, fieldIsPresentationalOnly, flattenTopLevelFields, formatAdminURL, hasAutosaveEnabled, hasDraftsEnabled, hasScheduledPublishEnabled, isFieldDisabled, isNumber, matchMimeType, mergeListSearchAndWhere, tabHasName, transformColumnsToPreferences, transformColumnsToSearchParams, unflatten } from "payload/shared";
import { MissingEditorProp, flattenAllFields, getAncestors, isolateObjectProperty, logError } from "payload";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/filterFieldsWithPermissions.js
var import_react_react_server = /* @__PURE__ */ __toESM(require_react_react_server());
var import_jsx_runtime_react_server = require_jsx_runtime_react_server();
var shouldSkipField = (field) => field.type !== "ui" && fieldIsHiddenOrDisabled(field) && !fieldIsID(field) || isFieldDisabled(field, "column");
var filterFieldsWithPermissions = ({ fieldPermissions, fields }) => {
	return (fields ?? []).reduce((acc, field) => {
		if (shouldSkipField(field)) return acc;
		if (field.type === "tabs" && "tabs" in field) {
			const formattedField = {
				...field,
				tabs: field.tabs.map((tab) => ({
					...tab,
					fields: filterFieldsWithPermissions({
						fieldPermissions: typeof fieldPermissions === "boolean" ? fieldPermissions : "name" in tab && tab.name ? fieldPermissions[tab.name]?.fields || fieldPermissions[tab.name] : fieldPermissions,
						fields: tab.fields
					})
				}))
			};
			acc.push(formattedField);
			return acc;
		}
		if ("fields" in field && Array.isArray(field.fields)) {
			const formattedField = {
				...field,
				fields: filterFieldsWithPermissions({
					fieldPermissions: typeof fieldPermissions === "boolean" ? fieldPermissions : "name" in field && field.name ? fieldPermissions?.[field.name]?.fields || fieldPermissions?.[field.name] : fieldPermissions,
					fields: field.fields
				})
			};
			acc.push(formattedField);
			return acc;
		}
		if (fieldPermissions === true) {
			acc.push(field);
			return acc;
		}
		if (fieldAffectsData(field)) {
			const fieldPermission = fieldPermissions?.[field.name];
			if (fieldIsID(field) || fieldPermission === true || fieldPermission?.read === true) acc.push(field);
			return acc;
		}
		acc.push(field);
		return acc;
	}, []);
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/TableColumns/getInitialColumns.js
var getRemainingColumns = (fields, useAsTitle) => fields?.reduce((remaining, field) => {
	if (fieldAffectsData(field) && field.name === useAsTitle) return remaining;
	if (!fieldAffectsData(field) && "fields" in field) return [...remaining, ...getRemainingColumns(field.fields, useAsTitle)];
	if (field.type === "tabs" && "tabs" in field) return [...remaining, ...field.tabs.reduce((tabFieldColumns, tab) => [...tabFieldColumns, ..."name" in tab ? [tab.name] : getRemainingColumns(tab.fields, useAsTitle)], [])];
	return [...remaining, field.name];
}, []);
/**
* Returns the initial columns to display in the table based on the following criteria:
* 1. If `defaultColumns` is set in the collection config, use those columns
* 2. Otherwise take `useAtTitle, if set, and the next 3 fields that are not hidden or disabled
*/
var getInitialColumns = (fields, useAsTitle, defaultColumns) => {
	let initialColumns = [];
	if (Array.isArray(defaultColumns) && defaultColumns.length >= 1) initialColumns = defaultColumns;
	else {
		if (useAsTitle) initialColumns.push(useAsTitle);
		const remainingColumns = getRemainingColumns(fields, useAsTitle);
		initialColumns = initialColumns.concat(remainingColumns);
		initialColumns = initialColumns.slice(0, 4);
	}
	return initialColumns.map((column) => ({
		accessor: column,
		active: true
	}));
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getColumns.js
var getColumns = ({ clientConfig, collectionConfig, collectionSlug, columns, i18n, permissions }) => {
	const isPolymorphic = Array.isArray(collectionSlug);
	const fields = !isPolymorphic ? collectionConfig?.fields ?? [] : [];
	if (isPolymorphic) for (const collection of collectionSlug) {
		const clientCollectionConfig = clientConfig.collections.find((each) => each.slug === collection);
		for (const field of filterFieldsWithPermissions({
			fieldPermissions: permissions?.collections?.[collection]?.fields || true,
			fields: clientCollectionConfig.fields
		})) {
			if (fieldAffectsData(field)) {
				if (fields.some((each) => fieldAffectsData(each) && each.name === field.name)) continue;
			}
			fields.push(field);
		}
	}
	return columns?.length ? columns?.filter((column) => flattenTopLevelFields(fields, {
		i18n,
		keepPresentationalFields: true,
		moveSubFieldsToTop: true
	})?.some((field) => {
		return ("accessor" in field ? field.accessor : "name" in field ? field.name : void 0) === column.accessor;
	})) : getInitialColumns(isPolymorphic ? fields : filterFieldsWithPermissions({
		fieldPermissions: typeof collectionSlug === "string" && permissions?.collections?.[collectionSlug]?.fields ? permissions.collections[collectionSlug].fields : true,
		fields
	}), collectionConfig?.admin?.useAsTitle, isPolymorphic ? [] : collectionConfig?.admin?.defaultColumns);
};
var isSameDocument = (a, b) => a.collectionSlug === b.collectionSlug && String(a.id) === String(b.id);
/**
* Returns a new preference value with `item` moved to the front, deduped by collection + id, and
* capped at `max`. Pure so it can be unit tested and reused as `upsertPreferences`' customMerge.
*/
var addRecentlyViewedItem = ({ existing, item, max = 20 }) => {
	return { items: [item, ...(Array.isArray(existing?.items) ? existing.items : []).filter((existingItem) => !isSameDocument(existingItem, item))].slice(0, max) };
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
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/TableSection/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/TableSection/index.js
var baseClass = "table-section";
function TableSectionRoot({ children, className, "data-group-id": dataGroupId }) {
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: [baseClass, className].filter(Boolean).join(" "),
		"data-group-id": dataGroupId,
		children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", { className: `${baseClass}__divider` }), children]
	});
}
function TableSectionHeader({ children, className, heading }) {
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("header", {
		className: [`${baseClass}__header`, className].filter(Boolean).join(" "),
		children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("div", {
			className: `${baseClass}__header-inner`,
			children: [heading && /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("h4", {
				className: `${baseClass}__heading`,
				children: heading
			}), children]
		})
	});
}
function TableSectionContent({ children, className }) {
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
		className: [`${baseClass}__content`, className].filter(Boolean).join(" "),
		children
	});
}
Object.assign(TableSectionRoot, {
	Content: TableSectionContent,
	Header: TableSectionHeader
});
TableSectionRoot = /* #__PURE__ */ __vite_rsc_wrap_css__$1(TableSectionRoot, "TableSectionRoot");
TableSectionHeader = /* #__PURE__ */ __vite_rsc_wrap_css__$1(TableSectionHeader, "TableSectionHeader");
TableSectionContent = /* #__PURE__ */ __vite_rsc_wrap_css__$1(TableSectionContent, "TableSectionContent");
function __vite_rsc_wrap_css__$1(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources$1), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/isColumnActive.js
function isColumnActive({ accessor, activeColumnsIndices, column, columns }) {
	if (column) return column.active;
	else if (columns && Array.isArray(columns) && columns.length > 0) return Boolean(columns.find((col) => col.accessor === accessor)?.active);
	else if (activeColumnsIndices.length < 4) return true;
	return false;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/RenderCustomComponent/index.js
/**
* Renders a CustomComponent or a Fallback component.
* Only fallback if the Custom Component is undefined.
*
* If the CustomComponent is null, render null.
*
* @param {Object} args - Arguments object.
* @param {React.ReactNode} [args.CustomComponent] - Optional custom component to render.
* @param {React.ReactNode} args.Fallback - Fallback component to render if CustomComponent is undefined.
* @returns {React.ReactNode} Rendered component.
*/ function RenderCustomComponent({ CustomComponent, Fallback }) {
	return CustomComponent !== void 0 ? CustomComponent : Fallback;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/isValidReactElement.js
var LazyReactComponentSymbol = Symbol.for("react.lazy");
/**
* Since Next.js 15.4, `React.isValidElement()` returns `false` for components that cross the server-client boundary.
* This utility expands on that check so that it returns true for valid React elements.
*/
function isValidReactElement(object) {
	return import_react_react_server.isValidElement(object) || object?.["$$typeof"] === LazyReactComponentSymbol;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/hasOptionLabelJSXElement.js
var hasOptionLabelJSXElement = (cellClientProps) => {
	const { cellData, field } = cellClientProps;
	if ((field?.type === "select" || field?.type == "radio") && Array.isArray(field?.options)) {
		const matchingOption = field.options.find((option) => typeof option === "object" && option.value === cellData);
		if (matchingOption && typeof matchingOption === "object" && isValidReactElement(matchingOption.label)) return true;
	}
	return false;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/findValueFromPath.js
/**
* Safely resolves a deeply nested value from a document using dot-notation accessor paths.
*
* Used in list views to retrieve field values, especially for fields hoisted from nested structures
* like groups, where the accessor may be in the form of `group.someField`.
*
* @param doc - The document object to retrieve the value from.
* @param path - A dot-separated accessor string (e.g., "group.someField").
* @returns The resolved value at the specified path, or undefined if any segment is missing.
*/ var findValueFromPath = (doc, path) => {
	return path.split(".").reduce((acc, key) => acc?.[key], doc);
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/renderCell.js
function renderCell({ clientField, collectionSlug, columnIndex, customCellProps, doc, enableRowSelections, i18n, isLinkedColumn, payload, req, rowIndex, serverField, viewType }) {
	const baseCellClientProps = {
		cellData: void 0,
		collectionSlug,
		customCellProps,
		field: clientField,
		rowData: void 0,
		viewType
	};
	const accessor = ("accessor" in clientField ? clientField.accessor : void 0) ?? ("name" in clientField ? clientField.name : void 0);
	let shouldLink = isLinkedColumn;
	let customLinkURL;
	if (isLinkedColumn && req) {
		const formatDocURL = (payload.collections[collectionSlug]?.config)?.admin?.formatDocURL;
		if (typeof formatDocURL === "function") {
			const customURL = formatDocURL({
				collectionSlug,
				defaultURL: formatAdminURL({
					adminRoute: req.payload.config.routes?.admin || "/admin",
					path: `/collections/${collectionSlug}${viewType === "trash" ? "/trash" : ""}/${encodeURIComponent(String(doc.id))}`
				}),
				doc,
				req,
				viewType
			});
			if (customURL === null) shouldLink = false;
			else if (typeof customURL === "string") {
				shouldLink = true;
				customLinkURL = customURL;
			} else shouldLink = false;
		}
	}
	const cellData = "name" in clientField && accessor === "_status" && "_displayStatus" in doc ? doc._displayStatus : "name" in clientField ? findValueFromPath(doc, accessor) : void 0;
	let enrichedClientField = clientField;
	if ("name" in clientField && accessor === "_status" && clientField.type === "select") {
		if (!clientField.options?.some((opt) => (typeof opt === "object" ? opt.value : opt) === "changed")) enrichedClientField = {
			...clientField,
			options: [...clientField.options || [], {
				label: i18n.t("version:draftHasPublishedVersion"),
				value: "changed"
			}]
		};
	}
	let hierarchyIcon = void 0;
	let hierarchySmallIcon = void 0;
	if (clientField.type === "relationship" && "relationTo" in clientField) {
		const relationTo = clientField.relationTo;
		if (typeof relationTo === "string") {
			const hierarchyConfig = (payload.collections[relationTo]?.config)?.hierarchy;
			if (hierarchyConfig && typeof hierarchyConfig === "object") {
				const iconComponent = hierarchyConfig.admin?.components?.Icon;
				const smallIconComponent = hierarchyConfig.admin?.components?.SmallIcon;
				if (iconComponent) hierarchyIcon = RenderServerComponent({
					Component: iconComponent,
					importMap: payload.importMap,
					key: `hierarchy-icon-${relationTo}`
				});
				else hierarchyIcon = hierarchyConfig.allowHasMany === false ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(FolderIcon, {}, `hierarchy-icon-${relationTo}`) : /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(TagIcon, {}, `hierarchy-icon-${relationTo}`);
				if (smallIconComponent && smallIconComponent !== iconComponent) hierarchySmallIcon = RenderServerComponent({
					Component: smallIconComponent,
					importMap: payload.importMap,
					key: `hierarchy-small-icon-${relationTo}`
				});
				else hierarchySmallIcon = hierarchyIcon;
			}
		}
	}
	const cellClientProps = {
		...baseCellClientProps,
		cellData,
		customCellProps: {
			...baseCellClientProps.customCellProps,
			...hierarchyIcon ? { hierarchyIcon } : {},
			...hierarchySmallIcon ? { hierarchySmallIcon } : {}
		},
		field: enrichedClientField,
		link: shouldLink,
		linkURL: customLinkURL,
		rowData: doc
	};
	const cellServerProps = {
		cellData: cellClientProps.cellData,
		className: baseCellClientProps.className,
		collectionConfig: payload.collections[collectionSlug].config,
		collectionSlug,
		columnIndex,
		customCellProps: baseCellClientProps.customCellProps,
		field: serverField,
		i18n,
		link: shouldLink,
		linkURL: customLinkURL,
		onClick: baseCellClientProps.onClick,
		payload,
		rowData: doc
	};
	let CustomCell = null;
	if (serverField?.type === "richText") {
		if (!serverField?.editor) throw new MissingEditorProp(serverField);
		if (typeof serverField?.editor === "function") throw new Error("Attempted to access unsanitized rich text editor.");
		if (!serverField.admin) serverField.admin = {};
		if (!serverField.admin.components) serverField.admin.components = {};
		const CustomCellComponent = serverField.admin.components.Cell;
		CustomCell = RenderServerComponent({
			clientProps: cellClientProps,
			Component: CustomCellComponent ?? serverField.editor.CellComponent,
			importMap: payload.importMap,
			serverProps: cellServerProps
		});
	} else {
		const CustomCellComponent = serverField?.admin?.components?.Cell;
		if (CustomCellComponent) CustomCell = RenderServerComponent({
			clientProps: cellClientProps,
			Component: CustomCellComponent,
			importMap: payload.importMap,
			serverProps: cellServerProps
		});
		else if (cellClientProps.cellData && cellClientProps.field && hasOptionLabelJSXElement(cellClientProps)) CustomCell = RenderServerComponent({
			clientProps: cellClientProps,
			Component: DefaultCell,
			importMap: payload.importMap
		});
		else {
			const CustomCellComponent = serverField?.admin?.components?.Cell;
			if (CustomCellComponent) CustomCell = RenderServerComponent({
				clientProps: cellClientProps,
				Component: CustomCellComponent,
				importMap: payload.importMap,
				serverProps: cellServerProps
			});
			else CustomCell = void 0;
		}
	}
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(RenderCustomComponent, {
		CustomComponent: CustomCell,
		Fallback: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(RenderDefaultCell, {
			clientProps: cellClientProps,
			columnIndex,
			enableRowSelections,
			isLinkedColumn
		})
	}, `${rowIndex}-${columnIndex}`);
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/sortFieldMap.js
function getAccessor(field) {
	return field.accessor ?? ("name" in field ? field.name : void 0);
}
function sortFieldMap(fieldMap, sortTo) {
	return fieldMap?.sort((a, b) => {
		const aIndex = sortTo.findIndex((column) => "name" in a && column.accessor === getAccessor(a));
		const bIndex = sortTo.findIndex((column) => "name" in b && column.accessor === getAccessor(b));
		if (aIndex === -1 && bIndex === -1) return 0;
		if (aIndex === -1) return 1;
		if (bIndex === -1) return -1;
		return aIndex - bIndex;
	});
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/index.js
var buildColumnState = (args) => {
	const { beforeRows, clientFields, collectionSlug, columns, customCellProps, dataType, docs, enableLinkedCell = true, enableRowSelections, fieldPermissions, i18n, payload, req, serverFields, sortColumnProps, useAsTitle, viewType } = args;
	let sortedFieldMap = flattenTopLevelFields(filterFieldsWithPermissions({
		fieldPermissions,
		fields: clientFields
	}), {
		i18n,
		keepPresentationalFields: true,
		moveSubFieldsToTop: true
	});
	let _sortedFieldMap = flattenTopLevelFields(filterFieldsWithPermissions({
		fieldPermissions,
		fields: serverFields
	}), {
		i18n,
		keepPresentationalFields: true,
		moveSubFieldsToTop: true
	});
	const idFieldIndex = sortedFieldMap?.findIndex((field) => fieldIsID(field));
	if (idFieldIndex > -1) {
		const idField = sortedFieldMap.splice(idFieldIndex, 1)[0];
		sortedFieldMap.unshift(idField);
	}
	const useAsTitleFieldIndex = useAsTitle ? sortedFieldMap.findIndex((field) => "name" in field && field.name === useAsTitle) : -1;
	if (useAsTitleFieldIndex > -1) {
		const useAsTitleField = sortedFieldMap.splice(useAsTitleFieldIndex, 1)[0];
		sortedFieldMap.unshift(useAsTitleField);
	}
	const sortTo = columns;
	if (sortTo) {
		sortedFieldMap = sortFieldMap(sortedFieldMap, sortTo);
		_sortedFieldMap = sortFieldMap(_sortedFieldMap, sortTo);
	}
	const activeColumnsIndices = [];
	const sorted = sortedFieldMap?.reduce((acc, clientField, colIndex) => {
		if (fieldIsHiddenOrDisabled(clientField) && !fieldIsID(clientField)) return acc;
		const accessor = clientField.accessor ?? ("name" in clientField ? clientField.name : void 0);
		const serverField = _sortedFieldMap.find((f) => {
			return (f.accessor ?? ("name" in f ? f.name : void 0)) === accessor;
		});
		const hasCustomCell = serverField?.admin && "components" in serverField.admin && serverField.admin.components && "Cell" in serverField.admin.components && serverField.admin.components.Cell;
		if (serverField && serverField.type === "group" && !hasCustomCell) return acc;
		const columnPref = columns?.find((preference) => clientField && "name" in clientField && preference.accessor === accessor);
		const isActive = isColumnActive({
			accessor,
			activeColumnsIndices,
			column: columnPref,
			columns
		});
		if (isActive && !activeColumnsIndices.includes(colIndex)) activeColumnsIndices.push(colIndex);
		let CustomLabel = void 0;
		if (dataType === "monomorphic") {
			const CustomLabelToRender = serverField && "admin" in serverField && "components" in serverField.admin && "Label" in serverField.admin.components && serverField.admin.components.Label !== void 0 ? serverField.admin.components.Label : void 0;
			const clientProps = { field: clientField };
			const customLabelServerProps = {
				clientField,
				collectionSlug,
				field: serverField,
				i18n,
				payload
			};
			CustomLabel = CustomLabelToRender ? RenderServerComponent({
				clientProps,
				Component: CustomLabelToRender,
				importMap: payload.importMap,
				serverProps: customLabelServerProps
			}) : void 0;
		}
		const fieldAffectsDataSubFields = clientField && clientField.type && (clientField.type === "array" || clientField.type === "group" || clientField.type === "blocks");
		const label = clientField && "labelWithPrefix" in clientField && clientField.labelWithPrefix !== void 0 ? clientField.labelWithPrefix : "label" in clientField ? clientField.label : void 0;
		const dotAccessor = accessor?.replace(/-/g, ".");
		const isVirtualField = serverField && "virtual" in serverField && serverField.virtual === true;
		const Heading = /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(SortColumn, {
			disable: fieldAffectsDataSubFields || fieldIsPresentationalOnly(clientField) || isVirtualField || void 0,
			Label: CustomLabel,
			label,
			name: dotAccessor,
			...sortColumnProps || {}
		});
		const isLinkedColumn = enableLinkedCell && colIndex === activeColumnsIndices[0];
		const column = {
			accessor,
			active: isActive,
			CustomLabel,
			field: clientField,
			Heading,
			isLinkedColumn,
			renderedCells: isActive ? docs.map((doc, rowIndex) => {
				return renderCell({
					clientField,
					collectionSlug: dataType === "monomorphic" ? collectionSlug : doc.relationTo,
					columnIndex: colIndex,
					customCellProps,
					doc: dataType === "monomorphic" ? doc : doc.value,
					enableRowSelections,
					i18n,
					isLinkedColumn,
					payload,
					req,
					rowIndex,
					serverField,
					viewType
				});
			}) : []
		};
		acc.push(column);
		return acc;
	}, []);
	if (beforeRows) sorted.unshift(...beforeRows);
	return sorted;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/renderTable.js
var renderFilters = (fields, importMap) => fields.reduce((acc, field) => {
	if (fieldIsHiddenOrDisabled(field)) return acc;
	if ("name" in field && field.admin?.components?.Filter) acc.set(field.name, RenderServerComponent({
		Component: field.admin.components?.Filter,
		importMap
	}));
	return acc;
}, /* @__PURE__ */ new Map());
var renderTable = ({ clientCollectionConfig, clientConfig, collectionConfig, collections, columns, customCellProps, data, enableRowSelections, fieldPermissions, groupByFieldPath, groupByValue, heading, i18n, key = "table", orderableFieldName, payload, query, renderRowTypes, req, showHeading, tableAppearance, useAsTitle, viewType }) => {
	let columnState;
	let clientFields = clientCollectionConfig?.fields || [];
	let serverFields = collectionConfig?.fields || [];
	const isPolymorphic = collections;
	const isGroupingBy = Boolean(query?.groupBy);
	if (isPolymorphic) {
		clientFields = [];
		serverFields = [];
		for (const collection of collections) {
			const clientCollectionConfig = clientConfig.collections.find((each) => each.slug === collection);
			for (const field of filterFieldsWithPermissions({
				fieldPermissions,
				fields: clientCollectionConfig.fields
			})) {
				if (fieldAffectsData(field)) {
					if (clientFields.some((each) => fieldAffectsData(each) && each.name === field.name)) continue;
				}
				clientFields.push(field);
			}
			const serverCollectionConfig = payload.collections[collection].config;
			for (const field of filterFieldsWithPermissions({
				fieldPermissions,
				fields: serverCollectionConfig.fields
			})) {
				if (fieldAffectsData(field)) {
					if (serverFields.some((each) => fieldAffectsData(each) && each.name === field.name)) continue;
				}
				serverFields.push(field);
			}
		}
	}
	const sharedArgs = {
		clientFields,
		columns,
		enableRowSelections,
		fieldPermissions,
		i18n,
		customCellProps,
		payload,
		req,
		serverFields,
		useAsTitle,
		viewType
	};
	if (isPolymorphic) columnState = buildColumnState({
		...sharedArgs,
		collectionSlug: void 0,
		dataType: "polymorphic",
		docs: data?.docs || []
	});
	else columnState = buildColumnState({
		...sharedArgs,
		collectionSlug: clientCollectionConfig.slug,
		dataType: "monomorphic",
		docs: data?.docs || []
	});
	const columnsToUse = [...columnState];
	if (renderRowTypes) columnsToUse.unshift({
		accessor: "collection",
		active: true,
		field: {
			admin: { disabled: true },
			hidden: true
		},
		Heading: i18n.t("version:type"),
		renderedCells: (data?.docs || []).map((doc, i) => /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(Pill, {
			size: "small",
			children: getTranslation(collections ? payload.collections[doc.relationTo].config.labels.singular : clientCollectionConfig.labels.singular, i18n)
		}, i))
	});
	if (enableRowSelections) columnsToUse.unshift({
		accessor: "_select",
		active: true,
		field: {
			admin: { disabled: true },
			hidden: true
		},
		Heading: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(SelectAll, {}),
		renderedCells: (data?.docs || []).map((_, i) => /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(SelectRow, { rowData: data?.docs[i] }, i))
	});
	if (isGroupingBy) return {
		columnState,
		Table: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(TableSectionRoot, {
			className: ["table-wrap", groupByValue !== void 0 && `table-wrap--group-by`].filter(Boolean).join(" "),
			"data-group-id": groupByValue,
			children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(SelectionProvider, {
				docs: data?.docs || [],
				totalDocs: data?.totalDocs || 0,
				children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(TableSectionHeader, {
					heading,
					children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(GroupByHeader, {
						collectionConfig: clientCollectionConfig,
						groupByFieldPath,
						groupByValue,
						heading
					}), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(GroupByPageControls, {
						data,
						groupByValue
					})]
				}), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(TableSectionContent, { children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(Table, {
					appearance: tableAppearance,
					columns: columnsToUse,
					data: data?.docs || []
				}) })]
			})
		}, key)
	};
	if (!orderableFieldName) return {
		columnState,
		Table: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(TableSectionRoot, {
			className: "table-wrap",
			children: [showHeading && heading && /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(TableSectionHeader, { children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("h4", { children: heading }) }), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(TableSectionContent, { children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(Table, {
				appearance: tableAppearance,
				columns: columnsToUse,
				data: data?.docs || []
			}) })]
		}, key)
	};
	columnsToUse.splice(enableRowSelections ? 1 : 0, 0, {
		accessor: "_dragHandle",
		active: true,
		field: {
			admin: { disabled: true },
			hidden: true
		},
		Heading: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(SortHeader, {}),
		renderedCells: (data?.docs || []).map((_, i) => /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(SortRow, {}, i))
	});
	return {
		columnState,
		Table: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(TableSectionRoot, {
			className: "table-wrap",
			children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(TableSectionContent, { children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(OrderableTable, {
				appearance: tableAppearance,
				collection: clientCollectionConfig,
				columns: columnsToUse,
				data: data?.docs || []
			}) })
		}, key)
	};
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/PublishButton/ScheduleDrawer/buildUpcomingScheduleWhere.js
/**
* Builds the `where` query used to find upcoming scheduled
* publish/unpublish jobs for a given document or global.
*/ var buildUpcomingScheduleWhere = ({ id, collectionSlug, globalSlug }) => {
	const where = { and: [{ taskSlug: { equals: "schedulePublish" } }, { waitUntil: { greater_than: /* @__PURE__ */ new Date() } }] };
	if (collectionSlug) {
		where.and.push({ "input.doc.value": { equals: String(id) } });
		where.and.push({ "input.doc.relationTo": { equals: collectionSlug } });
	}
	if (globalSlug) where.and.push({ "input.global": { equals: globalSlug } });
	return where;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getHasScheduledPublish.js
var getHasScheduledPublish = async ({ id: idArg, collectionConfig, globalConfig, hasPublishPermission, payload, user }) => {
	const entityConfig = collectionConfig || globalConfig;
	const id = sanitizeID(idArg);
	const collectionSlug = collectionConfig?.slug;
	const globalSlug = globalConfig?.slug;
	if (!Boolean(hasScheduledPublishEnabled(entityConfig) && hasPublishPermission && (globalSlug || collectionSlug && id))) return false;
	try {
		const { totalDocs } = await payload.count({
			collection: "payload-jobs",
			overrideAccess: false,
			user,
			where: buildUpcomingScheduleWhere({
				id,
				collectionSlug,
				globalSlug
			})
		});
		return totalDocs > 0;
	} catch {
		return false;
	}
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Document/recordRecentlyViewed.js
/**
* Records that the current user viewed a collection document, persisting it to the
* `recently-viewed` preference. The document is loaded with access control before this runs, so
* reaching here means the user can read it. Never throws: a failed write must not break the view.
*/
var recordRecentlyViewed = async ({ id, collectionSlug, req }) => {
	if (!req.user) return;
	try {
		await upsertPreferences({
			customMerge: (existingValue, incomingValue) => addRecentlyViewedItem({
				existing: existingValue,
				item: incomingValue.items[0]
			}),
			key: PREFERENCE_KEYS.RECENTLY_VIEWED,
			req,
			value: { items: [{
				id,
				collectionSlug,
				viewedAt: (/* @__PURE__ */ new Date()).toISOString()
			}] }
		});
	} catch (err) {
		req.payload.logger.error({
			err,
			msg: `Failed to record recently viewed document "${collectionSlug}/${id}"`
		});
	}
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Document/renderDocumentSlots.js
var renderDocumentSlots = (args) => {
	const { id, collectionConfig, doc, globalConfig, hasSavePermission, locale, permissions, req } = args;
	const components = {};
	const unsavedDraftWithValidations = void 0;
	const isPreviewEnabled = collectionConfig?.admin?.preview || globalConfig?.admin?.preview;
	const serverProps = {
		id,
		i18n: req.i18n,
		locale,
		payload: req.payload,
		permissions,
		server: req.server,
		user: req.user
	};
	const BeforeDocumentControls = collectionConfig?.admin?.components?.edit?.beforeDocumentControls || globalConfig?.admin?.components?.edit?.beforeDocumentControls;
	if (BeforeDocumentControls) components.BeforeDocumentControls = RenderServerComponent({
		Component: BeforeDocumentControls,
		importMap: req.payload.importMap,
		serverProps
	});
	const BeforeDocumentMeta = collectionConfig?.admin?.components?.edit?.BeforeDocumentMeta || globalConfig?.admin?.components?.edit?.BeforeDocumentMeta;
	if (BeforeDocumentMeta) components.BeforeDocumentMeta = RenderServerComponent({
		Component: BeforeDocumentMeta,
		importMap: req.payload.importMap,
		serverProps
	});
	const EditMenuItems = collectionConfig?.admin?.components?.edit?.editMenuItems;
	if (EditMenuItems) components.EditMenuItems = RenderServerComponent({
		Component: EditMenuItems,
		importMap: req.payload.importMap,
		serverProps
	});
	const CustomPreviewButton = collectionConfig?.admin?.components?.edit?.PreviewButton || globalConfig?.admin?.components?.edit?.PreviewButton;
	if (isPreviewEnabled && CustomPreviewButton) components.PreviewButton = RenderServerComponent({
		Component: CustomPreviewButton,
		importMap: req.payload.importMap,
		serverProps
	});
	const LivePreview = collectionConfig?.admin?.components?.views?.edit?.livePreview || globalConfig?.admin?.components?.views?.edit?.livePreview;
	if (LivePreview?.Component) components.LivePreview = RenderServerComponent({
		Component: LivePreview.Component,
		importMap: req.payload.importMap,
		serverProps
	});
	const descriptionFromConfig = collectionConfig?.admin?.description || globalConfig?.admin?.description;
	const staticDescription = typeof descriptionFromConfig === "function" ? descriptionFromConfig({ t: req.i18n.t }) : descriptionFromConfig;
	const CustomDescription = collectionConfig?.admin?.components?.Description || globalConfig?.admin?.components?.Description;
	if (CustomDescription || staticDescription) components.Description = RenderServerComponent({
		clientProps: {
			collectionSlug: collectionConfig?.slug,
			description: staticDescription
		},
		Component: CustomDescription,
		Fallback: ViewDescription,
		importMap: req.payload.importMap,
		serverProps
	});
	if (collectionConfig?.versions?.drafts || globalConfig?.versions?.drafts) {
		const CustomStatus = collectionConfig?.admin?.components?.edit?.Status || globalConfig?.admin?.components?.edit?.Status;
		if (CustomStatus) components.Status = RenderServerComponent({
			Component: CustomStatus,
			importMap: req.payload.importMap,
			serverProps
		});
	}
	if (hasSavePermission) if (hasDraftsEnabled(collectionConfig || globalConfig)) {
		const CustomPublishButton = collectionConfig?.admin?.components?.edit?.PublishButton || globalConfig?.admin?.components?.edit?.PublishButton;
		if (CustomPublishButton) components.PublishButton = RenderServerComponent({
			Component: CustomPublishButton,
			importMap: req.payload.importMap,
			serverProps
		});
		const CustomUnpublishButton = collectionConfig?.admin?.components?.edit?.UnpublishButton || globalConfig?.admin?.components?.edit?.UnpublishButton;
		if (CustomUnpublishButton) components.UnpublishButton = RenderServerComponent({
			Component: CustomUnpublishButton,
			importMap: req.payload.importMap,
			serverProps
		});
		const CustomSaveDraftButton = collectionConfig?.admin?.components?.edit?.SaveDraftButton || globalConfig?.admin?.components?.edit?.SaveDraftButton;
		if ((hasDraftsEnabled(collectionConfig || globalConfig) || unsavedDraftWithValidations) && CustomSaveDraftButton) components.SaveDraftButton = RenderServerComponent({
			Component: CustomSaveDraftButton,
			importMap: req.payload.importMap,
			serverProps
		});
	} else {
		const CustomSaveButton = collectionConfig?.admin?.components?.edit?.SaveButton || globalConfig?.admin?.components?.edit?.SaveButton;
		if (CustomSaveButton) components.SaveButton = RenderServerComponent({
			Component: CustomSaveButton,
			importMap: req.payload.importMap,
			serverProps
		});
	}
	if (collectionConfig?.upload && collectionConfig?.admin?.components?.edit?.Upload) components.Upload = RenderServerComponent({
		Component: collectionConfig.admin.components.edit.Upload,
		importMap: req.payload.importMap,
		serverProps
	});
	if (collectionConfig?.upload && collectionConfig.upload.admin?.components?.controls) components.UploadControls = RenderServerComponent({
		Component: collectionConfig.upload.admin.components.controls,
		importMap: req.payload.importMap,
		serverProps
	});
	const filePreviewConfig = collectionConfig?.upload?.admin?.components?.filePreview;
	if (collectionConfig?.upload && filePreviewConfig) {
		const mimeType = doc?.mimeType ?? "";
		let filePreviewComponent;
		if (typeof filePreviewConfig === "string" || typeof filePreviewConfig === "object" && "path" in filePreviewConfig) filePreviewComponent = filePreviewConfig;
		else filePreviewComponent = matchMimeType(filePreviewConfig, mimeType);
		if (filePreviewComponent) components.UploadFilePreview = RenderServerComponent({
			clientProps: {
				filename: doc?.filename,
				filesize: doc?.filesize,
				fileSrc: doc?.url,
				height: doc?.height,
				mimeType,
				width: doc?.width
			},
			Component: filePreviewComponent,
			importMap: req.payload.importMap,
			serverProps
		});
	}
	return components;
};
var renderDocumentSlotsHandler = async (args) => {
	const { id, collectionSlug, locale, permissions, req } = args;
	const collectionConfig = req.payload.collections[collectionSlug]?.config;
	if (!collectionConfig) throw new Error(req.t("error:incorrectCollection"));
	const { hasSavePermission } = await getDocumentPermissions({
		id,
		collectionConfig,
		data: {},
		req
	});
	let doc;
	if (id && collectionConfig.upload) doc = await req.payload.findByID({
		id,
		collection: collectionSlug,
		depth: 0,
		overrideAccess: false,
		req,
		select: {
			filename: true,
			filesize: true,
			height: true,
			mimeType: true,
			url: true,
			width: true
		}
	});
	return renderDocumentSlots({
		id,
		collectionConfig,
		doc,
		hasSavePermission,
		locale,
		permissions,
		req
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Document/index.js
/**
* This function is responsible for rendering
* an Edit Document view on the server for both:
*  - default document edit views
*  - on-demand edit views within drawers
*/
var renderDocument = async ({ disableActions, documentSubViewType, drawerSlug, importMap, initialData, initPageResult, overrideEntityVisibility, params, redirectAfterCreate, redirectAfterDelete, redirectAfterDuplicate, redirectAfterRestore, searchParams, versions, viewType }) => {
	const { collectionConfig, docID: idFromArgs, globalConfig, locale, permissions, req, req: { i18n, payload, payload: { config, config: { routes: { admin: adminRoute, api: apiRoute } } }, user }, visibleEntities } = initPageResult;
	const segments = Array.isArray(params?.segments) ? params.segments : [];
	const collectionSlug = collectionConfig?.slug || void 0;
	const globalSlug = globalConfig?.slug || void 0;
	let isEditing$1 = isEditing({
		id: idFromArgs,
		collectionSlug,
		globalSlug
	});
	let doc = !idFromArgs && !globalSlug ? initialData || null : await getDocumentData({
		id: idFromArgs,
		collectionSlug,
		globalSlug,
		locale,
		payload,
		req,
		segments,
		user
	});
	if (isEditing$1 && !doc) if (collectionSlug) {
		const redirectURL = formatAdminURL({
			adminRoute,
			path: `/collections/${collectionSlug}?notFound=${encodeURIComponent(idFromArgs)}`
		});
		req.server.redirect(redirectURL);
	} else throw new Error("not-found");
	const isTrashedDoc = Boolean(doc && "deletedAt" in doc && typeof doc?.deletedAt === "string");
	const reqForPermissions = req.transactionID ? req : isolateObjectProperty(req, "transactionID");
	const reqForLockCheck = req.transactionID ? req : isolateObjectProperty(req, "transactionID");
	const [docPreferences, { docPermissions, hasDeletePermission, hasPublishPermission, hasSavePermission, hasTrashPermission }, { currentEditor, isLocked, lastUpdateTime }, entityPreferences] = await Promise.all([
		getDocPreferences({
			id: idFromArgs,
			collectionSlug,
			globalSlug,
			payload,
			user
		}),
		getDocumentPermissions({
			id: idFromArgs,
			collectionConfig,
			data: doc,
			globalConfig,
			req: reqForPermissions
		}),
		getIsLocked({
			id: idFromArgs,
			collectionConfig,
			globalConfig,
			isEditing: isEditing$1,
			req: reqForLockCheck
		}),
		getPreferences(collectionSlug ? `collection-${collectionSlug}` : `global-${globalSlug}`, payload, req.user.id, req.user.collection)
	]);
	const operation = collectionSlug && idFromArgs || globalSlug ? "update" : "create";
	const recentlyViewedPromise = collectionSlug && idFromArgs && doc && !isTrashedDoc ? recordRecentlyViewed({
		id: idFromArgs,
		collectionSlug,
		req
	}) : void 0;
	const [{ hasPublishedDoc, mostRecentVersionIsAutosaved, unpublishedVersionCount, versionCount }, { state: formState }, hasScheduledPublish] = await Promise.all([
		getVersions({
			id: idFromArgs,
			collectionConfig,
			doc,
			docPermissions,
			globalConfig,
			locale: locale?.code,
			payload,
			user
		}),
		buildFormState({
			id: idFromArgs,
			collectionSlug,
			data: doc,
			docPermissions,
			docPreferences,
			fallbackLocale: false,
			globalSlug,
			locale: locale?.code,
			operation,
			readOnly: isTrashedDoc || isLocked,
			renderAllFields: true,
			req,
			schemaPath: collectionSlug || globalSlug,
			skipValidation: true
		}),
		getHasScheduledPublish({
			id: idFromArgs,
			collectionConfig,
			globalConfig,
			hasPublishPermission,
			payload,
			user
		})
	]);
	await recentlyViewedPromise;
	const documentViewServerProps = {
		doc,
		hasPublishedDoc,
		i18n,
		initPageResult,
		locale,
		params,
		payload,
		permissions,
		routeSegments: segments,
		searchParams,
		server: req.server,
		user,
		versions
	};
	if (!overrideEntityVisibility && (collectionSlug && !visibleEntities?.collections?.find((visibleSlug) => visibleSlug === collectionSlug) || globalSlug && !visibleEntities?.globals?.find((visibleSlug) => visibleSlug === globalSlug))) throw new Error("not-found");
	const formattedParams = new URLSearchParams();
	if (hasDraftsEnabled(collectionConfig || globalConfig)) formattedParams.append("draft", "true");
	if (locale?.code) formattedParams.append("locale", locale.code);
	const apiQueryParams = `?${formattedParams.toString()}`;
	const apiURL = formatAdminURL({
		apiRoute,
		path: collectionSlug ? `/${collectionSlug}/${idFromArgs}${apiQueryParams}` : globalSlug ? `/${globalSlug}${apiQueryParams}` : ""
	});
	let View = null;
	let showHeader = true;
	const RootViewOverride = collectionConfig?.admin?.components?.views?.edit?.root && "Component" in collectionConfig.admin.components.views.edit.root ? collectionConfig?.admin?.components?.views?.edit?.root?.Component : globalConfig?.admin?.components?.views?.edit?.root && "Component" in globalConfig.admin.components.views.edit.root ? globalConfig?.admin?.components?.views?.edit?.root?.Component : null;
	if (RootViewOverride) {
		View = RootViewOverride;
		showHeader = false;
	} else {
		({View} = getDocumentView({
			collectionConfig,
			config,
			docPermissions,
			globalConfig,
			routeSegments: segments
		}));
		if (View === UnauthorizedViewWithGutter) showHeader = false;
	}
	if (!View) View = NotFoundView;
	/**
	* Handle case where autoSave is enabled and the document is being created
	* => create document and redirect
	*/
	const shouldAutosave = hasSavePermission && hasAutosaveEnabled(collectionConfig || globalConfig);
	const validateDraftData = collectionConfig?.versions?.drafts && collectionConfig?.versions?.drafts?.validate;
	let id = idFromArgs;
	if (shouldAutosave && !validateDraftData && !idFromArgs && collectionSlug) {
		doc = await payload.create({
			collection: collectionSlug,
			data: initialData || {},
			depth: 0,
			draft: true,
			fallbackLocale: false,
			locale: locale?.code,
			req,
			user
		});
		if (doc?.id) {
			id = doc.id;
			isEditing$1 = isEditing({
				id: doc.id,
				collectionSlug,
				globalSlug
			});
			if (!drawerSlug && redirectAfterCreate !== false) {
				const redirectURL = formatAdminURL({
					adminRoute,
					path: `/collections/${collectionSlug}/${doc.id}`
				});
				req.server.redirect(redirectURL);
			}
		} else throw new Error("not-found");
	}
	const documentSlots = renderDocumentSlots({
		id,
		collectionConfig,
		doc,
		globalConfig,
		hasSavePermission,
		locale,
		permissions,
		req
	});
	const { Description } = documentSlots;
	const clientProps = {
		formState,
		...documentSlots,
		documentSubViewType,
		viewType
	};
	const { isLivePreviewEnabled, livePreviewConfig, livePreviewURL } = await handleLivePreview({
		collectionSlug,
		config,
		data: doc,
		globalSlug,
		operation,
		req
	});
	const { isPreviewEnabled, previewURL } = await handlePreview({
		collectionSlug,
		config,
		data: doc,
		globalSlug,
		operation,
		req
	});
	return {
		data: doc,
		Document: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(DocumentInfoProvider, {
			apiURL,
			collectionSlug: collectionConfig?.slug,
			currentEditor,
			disableActions: disableActions ?? false,
			docPermissions,
			globalSlug: globalConfig?.slug,
			hasDeletePermission,
			hasPublishedDoc,
			hasPublishPermission,
			hasSavePermission,
			hasScheduledPublish,
			hasTrashPermission,
			id,
			initialData: doc,
			initialState: formState,
			isEditing: isEditing$1,
			isLocked,
			isTrashed: isTrashedDoc,
			lastUpdateTime,
			mostRecentVersionIsAutosaved,
			redirectAfterCreate,
			redirectAfterDelete,
			redirectAfterDuplicate,
			redirectAfterRestore,
			unpublishedVersionCount,
			versionCount,
			children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(LivePreviewProvider, {
				breakpoints: livePreviewConfig?.breakpoints,
				isLivePreviewEnabled: isLivePreviewEnabled && operation !== "create",
				isLivePreviewing: Boolean((entityPreferences?.value?.editViewType === void 0 ? livePreviewConfig?.openByDefault : entityPreferences.value.editViewType === "live-preview") && livePreviewURL),
				isPreviewEnabled: Boolean(isPreviewEnabled),
				previewURL,
				typeofLivePreviewURL: typeof livePreviewConfig?.url,
				url: livePreviewURL,
				children: [
					showHeader && !drawerSlug && /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(DocumentHeader, {
						AfterHeader: Description,
						collectionConfig,
						globalConfig,
						permissions,
						req
					}),
					/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(HydrateAuthProvider, { permissions }),
					/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(EditDepthProvider, { children: RenderServerComponent({
						clientProps,
						Component: View,
						importMap,
						serverProps: documentViewServerProps
					}) })
				]
			})
		}, locale?.code)
	};
};
async function DocumentView(props) {
	try {
		const { Document: RenderedDocument } = await renderDocument(props);
		return RenderedDocument;
	} catch (error) {
		if (error?.message === "NEXT_REDIRECT") throw error;
		if (error?.message?.startsWith("redirect:")) return;
		logError({
			err: error,
			payload: props.initPageResult.req.payload
		});
		if (error.message === "not-found") props.initPageResult.req.server.notFound();
	}
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
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/List/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/List/enrichDocsWithVersionStatus.js
/**
* Enriches list view documents with correct draft status display.
* When draft=true is used in the query, Payload returns the latest draft version if it exists.
* This function checks if draft documents also have a published version to determine "changed" status.
*
* Performance: Uses a single query to find all documents with "changed" status instead of N queries.
*/ async function enrichDocsWithVersionStatus({ collectionConfig, data, req }) {
	if (!collectionConfig?.versions?.drafts || !data?.docs?.length) return data;
	const draftDocs = data.docs.filter((doc) => doc._status === "draft");
	if (draftDocs.length === 0) return data;
	const draftDocIds = draftDocs.map((doc) => doc.id).filter(Boolean);
	if (draftDocIds.length === 0) return data;
	try {
		const publishedVersions = await req.payload.findVersions({
			collection: collectionConfig.slug,
			depth: 0,
			limit: 0,
			pagination: false,
			select: { parent: true },
			where: { and: [{ parent: { in: draftDocIds } }, { "version._status": { equals: "published" } }] }
		});
		const hasPublishedVersionSet = new Set(publishedVersions.docs.map((version) => version.parent).filter(Boolean));
		const enrichedDocs = data.docs.map((doc) => {
			if (doc._status === "draft" && hasPublishedVersionSet.has(doc.id)) return {
				...doc,
				_displayStatus: "changed"
			};
			return {
				...doc,
				_displayStatus: doc._status
			};
		});
		return {
			...data,
			docs: enrichedDocs
		};
	} catch (error) {
		req.payload.logger.error({
			err: error,
			msg: `Error checking version status for collection ${collectionConfig.slug}`
		});
		return data;
	}
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/List/createSerializableValue.js
var createSerializableValue = (value) => {
	if (value === null || value === void 0) return "null";
	if (typeof value === "object" && value?.relationTo && value?.value) return `${value.relationTo}:${value.value}`;
	if (typeof value === "object" && value?.id) return String(value.id);
	return String(value);
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/List/extractRelationshipDisplayValue.js
var extractRelationshipDisplayValue = (relationship, clientConfig, relationshipConfig) => {
	if (!relationship) return "";
	if (typeof relationship === "object" && relationship?.relationTo && relationship?.value) {
		const config = clientConfig.collections.find((c) => c.slug === relationship.relationTo);
		return relationship.value?.[config?.admin?.useAsTitle || "id"] || "";
	}
	if (typeof relationship === "object" && relationship?.id) return relationship[relationshipConfig?.admin?.useAsTitle || "id"] || "";
	return String(relationship);
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/List/extractValueOrRelationshipID.js
var extractValueOrRelationshipID = (relationship) => {
	if (!relationship || typeof relationship !== "object") return relationship;
	if (relationship?.relationTo && relationship?.value) return {
		relationTo: relationship.relationTo,
		value: String(relationship.value?.id || relationship.value)
	};
	if (relationship?.id) return String(relationship.id);
	return relationship;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/List/handleGroupBy.js
var handleGroupBy = async ({ clientCollectionConfig, clientConfig, collectionConfig, collectionSlug, columns, customCellProps, drawerSlug, enableRowSelections, fieldPermissions, query, req, select, trash = false, user, viewType, where: whereWithMergedSearch }) => {
	let Table = null;
	let columnState;
	const dataByGroup = {};
	const flattenedFields = flattenAllFields({ fields: collectionConfig.fields });
	const groupByFieldPath = query.groupBy.replace(/^-/, "");
	const groupByField = flattenedFields.find((f) => f.name === groupByFieldPath);
	let populate;
	if (groupByField?.type === "relationship" && groupByField.relationTo) {
		const relationTo = Array.isArray(groupByField.relationTo) ? groupByField.relationTo : [groupByField.relationTo];
		populate = {};
		relationTo.forEach((rel) => {
			const config = clientConfig.collections.find((c) => c.slug === rel);
			populate[rel] = { [config?.admin?.useAsTitle || "id"]: true };
		});
	}
	const distinct = await req.payload.findDistinct({
		collection: collectionSlug,
		depth: 1,
		field: groupByFieldPath,
		limit: query?.limit ? Number(query.limit) : void 0,
		locale: req.locale,
		overrideAccess: false,
		page: query?.page ? Number(query.page) : void 0,
		populate,
		req,
		sort: query?.groupBy,
		trash,
		where: whereWithMergedSearch
	});
	const data = {
		...distinct,
		docs: distinct.values?.map(() => ({})) || [],
		values: void 0
	};
	await Promise.all((distinct.values || []).map(async (distinctValue, i) => {
		const potentiallyPopulatedRelationship = distinctValue[groupByFieldPath];
		const valueOrRelationshipID = extractValueOrRelationshipID(potentiallyPopulatedRelationship);
		const groupData = await req.payload.find({
			collection: collectionSlug,
			depth: 0,
			draft: true,
			fallbackLocale: false,
			includeLockStatus: true,
			limit: query?.queryByGroup?.[valueOrRelationshipID]?.limit ? Number(query.queryByGroup[valueOrRelationshipID].limit) : void 0,
			locale: req.locale,
			overrideAccess: false,
			page: query?.queryByGroup?.[valueOrRelationshipID]?.page ? Number(query.queryByGroup[valueOrRelationshipID].page) : void 0,
			req,
			select,
			sort: query?.sort,
			trash,
			user,
			where: {
				...whereWithMergedSearch || {},
				[groupByFieldPath]: { equals: valueOrRelationshipID }
			}
		});
		let heading;
		if (potentiallyPopulatedRelationship === null) heading = req.i18n.t("general:noValue");
		else if (groupByField?.type === "relationship") heading = extractRelationshipDisplayValue(potentiallyPopulatedRelationship, clientConfig, Array.isArray(groupByField.relationTo) ? void 0 : clientConfig.collections.find((c) => c.slug === groupByField.relationTo));
		else if (groupByField?.type === "date") heading = formatDate({
			date: String(valueOrRelationshipID),
			i18n: req.i18n,
			pattern: clientConfig.admin.dateFormat
		});
		else if (groupByField?.type === "checkbox") {
			if (valueOrRelationshipID === true) heading = req.i18n.t("general:true");
			if (valueOrRelationshipID === false) heading = req.i18n.t("general:false");
		} else if (groupByField?.type === "select" || groupByField?.type === "radio") {
			const option = groupByField.options?.find((opt) => (typeof opt === "string" ? opt : opt.value) === valueOrRelationshipID);
			if (option && typeof option !== "string") {
				const translated = getTranslation(option.label, req.i18n);
				heading = typeof translated === "string" ? translated : String(valueOrRelationshipID);
			} else heading = String(valueOrRelationshipID);
		} else heading = String(valueOrRelationshipID);
		const serializableValue = createSerializableValue(valueOrRelationshipID);
		if (groupData.docs && groupData.docs.length > 0) {
			const { columnState: newColumnState, Table: NewTable } = renderTable({
				clientCollectionConfig,
				collectionConfig,
				columns,
				customCellProps,
				data: groupData,
				drawerSlug,
				enableRowSelections,
				fieldPermissions,
				groupByFieldPath,
				groupByValue: serializableValue,
				heading: heading || req.i18n.t("general:noValue"),
				i18n: req.i18n,
				key: `table-${serializableValue}`,
				orderableFieldName: collectionConfig.orderable === true ? "_order" : void 0,
				payload: req.payload,
				query,
				useAsTitle: collectionConfig.admin.useAsTitle,
				viewType
			});
			if (!columnState) columnState = newColumnState;
			if (!Table) Table = [];
			dataByGroup[serializableValue] = groupData;
			Table[i] = NewTable;
		}
	}));
	return {
		columnState,
		data,
		Table
	};
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/List/handleHierarchy.js
/**
* Fetches hierarchy data for a collection with a selected parent.
* Returns data that can be rendered client-side by HierarchyTable.
*/
var handleHierarchy = async ({ baseFilter, collectionConfig, collectionSlug, parentId, permissions, req, search, typeFilter, user }) => {
	const hierarchyConfig = collectionConfig.hierarchy && typeof collectionConfig.hierarchy === "object" ? collectionConfig.hierarchy : void 0;
	if (!hierarchyConfig) throw new Error("Collection is not a hierarchy");
	const parentFieldName = hierarchyConfig.parentFieldName;
	const useAsTitle = collectionConfig.admin?.useAsTitle || "id";
	let parent = null;
	let breadcrumbs = [];
	if (parentId !== null) try {
		const [item, ancestors] = await Promise.all([req.payload.findByID({
			id: parentId,
			collection: collectionSlug,
			depth: 0,
			overrideAccess: false,
			req,
			user
		}), getAncestors({
			id: parentId,
			collectionSlug,
			req
		})]);
		parent = item;
		breadcrumbs = ancestors;
	} catch (_error) {
		req.payload.logger.warn({ msg: `Hierarchy item not found: ${parentId}` });
	}
	const parentCondition = parentId === null ? { or: [{ [parentFieldName]: { exists: false } }, { [parentFieldName]: { equals: null } }] } : { [parentFieldName]: { equals: parentId } };
	let typeCondition;
	if (typeFilter && typeFilter.length > 0 && hierarchyConfig.collectionSpecific && typeof hierarchyConfig.collectionSpecific === "object") {
		const typeFieldName = hierarchyConfig.collectionSpecific.fieldName;
		const filteredTypes = typeFilter.filter((t) => t !== collectionSlug);
		if (filteredTypes.length > 0) typeCondition = { or: [{ [typeFieldName]: { in: filteredTypes } }, { [typeFieldName]: { exists: false } }] };
	}
	const conditions = [parentCondition];
	if (search) conditions.push({ [useAsTitle]: { like: search } });
	if (typeCondition) conditions.push(typeCondition);
	const childrenWhere = conditions.length > 1 ? { and: conditions } : parentCondition;
	const childrenData = await req.payload.find({
		collection: collectionSlug,
		depth: 0,
		draft: true,
		fallbackLocale: false,
		includeLockStatus: true,
		limit: DEFAULT_HIERARCHY_LIST_LIMIT,
		locale: req.locale,
		overrideAccess: false,
		page: 1,
		req,
		user,
		where: combineWhereConstraints([childrenWhere, baseFilter])
	});
	const relatedDocumentsByCollection = {};
	const relatedBaseFilters = {};
	const relatedCollectionsConfig = hierarchyConfig.relatedCollections || {};
	for (const [relatedSlug, fieldInfo] of Object.entries(relatedCollectionsConfig)) {
		if (relatedSlug === collectionSlug) continue;
		const relatedCollectionConfig = req.payload.collections[relatedSlug]?.config;
		if (!relatedCollectionConfig) continue;
		if (!permissions?.collections?.[relatedSlug]?.read) continue;
		const { fieldName, hasMany } = fieldInfo;
		const relatedBaseFilter = await (relatedCollectionConfig.admin?.baseFilter ?? relatedCollectionConfig.admin?.baseListFilter)?.({
			limit: DEFAULT_HIERARCHY_LIST_LIMIT,
			page: 1,
			req,
			sort: void 0
		});
		if (relatedBaseFilter) relatedBaseFilters[relatedSlug] = relatedBaseFilter;
		let relationshipWhere;
		if (parentId === null) {
			const conditions = [{ [fieldName]: { exists: false } }, { [fieldName]: { equals: null } }];
			if (hasMany) conditions.push({ [fieldName]: { equals: [] } });
			relationshipWhere = { or: conditions };
		} else relationshipWhere = { [fieldName]: { in: [parentId] } };
		const relatedUseAsTitle = relatedCollectionConfig.admin?.useAsTitle || "id";
		const where = combineWhereConstraints([search ? { and: [relationshipWhere, { [relatedUseAsTitle]: { like: search } }] } : relationshipWhere, relatedBaseFilter]);
		try {
			const data = await req.payload.find({
				collection: relatedSlug,
				depth: 0,
				draft: true,
				fallbackLocale: false,
				includeLockStatus: true,
				limit: DEFAULT_HIERARCHY_LIST_LIMIT,
				locale: req.locale,
				overrideAccess: false,
				page: 1,
				req,
				user,
				where
			});
			if (data.totalDocs > 0) relatedDocumentsByCollection[relatedSlug] = {
				fieldName,
				hasMany,
				label: getTranslation(relatedCollectionConfig.labels?.plural, req.i18n),
				result: data
			};
		} catch (error) {
			req.payload.logger.warn({
				err: error,
				msg: `Failed to query related collection ${relatedSlug}`
			});
		}
	}
	let allowedCollections;
	if (hierarchyConfig.collectionSpecific && parent) {
		const typeFieldName = hierarchyConfig.collectionSpecific.fieldName;
		const typeValues = parent[typeFieldName];
		if (typeValues && typeValues.length > 0) allowedCollections = typeValues.map((slug) => {
			const config = req.payload.collections[slug]?.config;
			return {
				slug,
				label: config ? getTranslation(config.labels?.plural, req.i18n) : slug
			};
		});
		else allowedCollections = [];
	}
	return {
		allowedCollections,
		breadcrumbs,
		childrenData,
		parent,
		parentFieldName,
		parentId,
		relatedBaseFilters: Object.keys(relatedBaseFilters).length > 0 ? relatedBaseFilters : void 0,
		relatedDocumentsByCollection
	};
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Banner/index.js
var Banner = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'Banner' is called on server");
}, "8509709a180e", "Banner");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/List/renderListViewSlots.js
var renderListViewSlots = ({ clientProps, collectionConfig, description, notFoundDocId, payload, serverProps }) => {
	const result = {};
	if (collectionConfig.admin.components?.afterList) result.AfterList = RenderServerComponent({
		clientProps,
		Component: collectionConfig.admin.components.afterList,
		importMap: payload.importMap,
		serverProps
	});
	const listMenuItems = collectionConfig.admin.components?.listMenuItems;
	if (Array.isArray(listMenuItems)) result.listMenuItems = [RenderServerComponent({
		clientProps,
		Component: listMenuItems,
		importMap: payload.importMap,
		serverProps
	})];
	if (collectionConfig.admin.components?.afterListTable) result.AfterListTable = RenderServerComponent({
		clientProps,
		Component: collectionConfig.admin.components.afterListTable,
		importMap: payload.importMap,
		serverProps
	});
	if (collectionConfig.admin.components?.beforeList) result.BeforeList = RenderServerComponent({
		clientProps,
		Component: collectionConfig.admin.components.beforeList,
		importMap: payload.importMap,
		serverProps
	});
	const existingBeforeListTable = collectionConfig.admin.components?.beforeListTable ? RenderServerComponent({
		clientProps,
		Component: collectionConfig.admin.components.beforeListTable,
		importMap: payload.importMap,
		serverProps
	}) : null;
	const notFoundBanner = notFoundDocId ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(Banner, {
		className: "list-view__not-found-banner",
		type: "danger",
		children: serverProps.i18n.t("error:documentNotFound", { id: notFoundDocId })
	}) : null;
	if (notFoundBanner || existingBeforeListTable) result.BeforeListTable = /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(import_react_react_server.Fragment, { children: [notFoundBanner, existingBeforeListTable] });
	if (collectionConfig.admin.components?.Description) result.Description = RenderServerComponent({
		clientProps: {
			collectionSlug: collectionConfig.slug,
			description
		},
		Component: collectionConfig.admin.components.Description,
		importMap: payload.importMap,
		serverProps
	});
	if (collectionConfig.admin.components?.views?.list?.NoResults) result.NoResults = /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(import_react_react_server.Fragment, { children: RenderServerComponent({
		clientProps,
		Component: collectionConfig.admin.components.views.list.NoResults,
		importMap: payload.importMap,
		key: "list-view-no-results",
		serverProps
	}) }, "list-view-no-results");
	return result;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/List/resolveAllFilterOptions.js
var resolveAllFilterOptions = async ({ fields, pathPrefix, req, result }) => {
	const resolvedFilterOptions = !result ? /* @__PURE__ */ new Map() : result;
	await Promise.all(fields.map(async (field) => {
		if (fieldIsHiddenOrDisabled(field)) return;
		const fieldPath = fieldAffectsData(field) ? pathPrefix ? `${pathPrefix}.${field.name}` : field.name : pathPrefix;
		if ((field.type === "relationship" || field.type === "upload") && "filterOptions" in field && field.filterOptions) {
			const options = await resolveFilterOptions(field.filterOptions, {
				id: void 0,
				blockData: void 0,
				data: {},
				relationTo: field.relationTo,
				req,
				siblingData: {},
				user: req.user
			});
			resolvedFilterOptions.set(fieldPath, options);
		}
		if (fieldHasSubFields(field)) await resolveAllFilterOptions({
			fields: field.fields,
			pathPrefix: fieldPath,
			req,
			result: resolvedFilterOptions
		});
		if (field.type === "tabs") await Promise.all(field.tabs.map(async (tab) => {
			const tabPath = tabHasName(tab) ? fieldPath ? `${fieldPath}.${tab.name}` : tab.name : fieldPath;
			await resolveAllFilterOptions({
				fields: tab.fields,
				pathPrefix: tabPath,
				req,
				result: resolvedFilterOptions
			});
		}));
	}));
	return resolvedFilterOptions;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/List/transformColumnsToSelect.js
var transformColumnsToSelect = (columns) => {
	return unflatten(columns.reduce((acc, column) => {
		if (column.active) acc[column.accessor] = true;
		return acc;
	}, {}));
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/List/index.js
/**
* This function is responsible for rendering
* the list view on the server for both:
*  - default list view
*  - list view within drawers
*
* @internal
*/
var renderListView = async (args) => {
	const { clientConfig, ComponentOverride, customCellProps, disableBulkDelete, disableBulkEdit, disableQueryPresets, drawerSlug, enableRowSelections, initPageResult, overrideEntityVisibility, params, query: queryFromArgs, searchParams, trash, viewType } = args;
	const { collectionConfig, collectionConfig: { slug: collectionSlug }, locale: fullLocale, permissions, req, req: { i18n, payload, payload: { config }, query: queryFromReq, user }, visibleEntities } = initPageResult;
	const { routes: { admin: adminRoute } } = config;
	if (!collectionConfig || !permissions?.collections?.[collectionSlug]?.read || !visibleEntities.collections.includes(collectionSlug) && !overrideEntityVisibility) throw new Error("not-found");
	const query = queryFromArgs || queryFromReq;
	const columnsFromQuery = transformColumnsToPreferences(query?.columns);
	query.queryByGroup = query?.queryByGroup && typeof query.queryByGroup === "string" ? JSON.parse(query.queryByGroup) : query?.queryByGroup;
	const collectionPreferences = await upsertPreferences({
		key: `collection-${collectionSlug}`,
		req,
		value: {
			columns: columnsFromQuery,
			groupBy: query?.groupBy,
			limit: isNumber(query?.limit) ? Number(query.limit) : void 0,
			preset: query?.preset,
			sort: query?.sort
		}
	});
	let queryPreset;
	let queryPresetPermissions = permissions?.collections?.["payload-query-presets"];
	if (collectionPreferences?.preset) try {
		queryPreset = await payload.findByID({
			id: collectionPreferences?.preset,
			collection: "payload-query-presets",
			depth: 0,
			overrideAccess: false,
			user
		});
		if (queryPreset) queryPresetPermissions = (await getDocumentPermissions({
			id: queryPreset.id,
			collectionConfig: req.payload.collections["payload-query-presets"].config,
			data: queryPreset,
			req
		}))?.docPermissions;
	} catch (err) {
		req.payload.logger.error(`Error fetching query preset or preset permissions: ${err}`);
	}
	query.preset = queryPreset?.id;
	if (queryPreset?.where && !query.where) query.where = queryPreset.where;
	query.groupBy = query.groupBy ?? queryPreset?.groupBy ?? collectionPreferences?.groupBy;
	const columnPreference = query.columns ? transformColumnsToPreferences(query.columns) : queryPreset?.columns ?? collectionPreferences?.columns;
	query.columns = transformColumnsToSearchParams(columnPreference);
	query.page = isNumber(query?.page) ? Number(query.page) : 0;
	query.limit = collectionPreferences?.limit || collectionConfig.admin.pagination.defaultLimit;
	query.sort = collectionPreferences?.sort || (typeof collectionConfig.defaultSort === "string" ? collectionConfig.defaultSort : void 0);
	const baseFilterConstraint = await (collectionConfig.admin?.baseFilter ?? collectionConfig.admin?.baseListFilter)?.({
		limit: query.limit,
		page: query.page,
		req,
		sort: query.sort
	});
	let whereWithMergedSearch = mergeListSearchAndWhere({
		collectionConfig,
		search: typeof query?.search === "string" ? query.search : void 0,
		where: combineWhereConstraints([query?.where, baseFilterConstraint])
	});
	if (trash === true) whereWithMergedSearch = { and: [whereWithMergedSearch, { deletedAt: { exists: true } }] };
	let Table = null;
	let columnState = [];
	let data = {
		docs: [],
		hasNextPage: false,
		hasPrevPage: false,
		limit: query.limit,
		nextPage: null,
		page: 1,
		pagingCounter: 0,
		prevPage: null,
		totalDocs: 0,
		totalPages: 0
	};
	const clientCollectionConfig = clientConfig.collections.find((c) => c.slug === collectionSlug);
	const columns = getColumns({
		clientConfig,
		collectionConfig: clientCollectionConfig,
		collectionSlug,
		columns: columnPreference,
		i18n,
		permissions
	});
	/** Automatically force select active columns. */
	const select = transformColumnsToSelect(columns);
	/** Force select image fields for list view thumbnails */
	appendUploadSelectFields({
		collectionConfig,
		select
	});
	/** Force select `_tz` siblings for any timezone-enabled date fields in select */
	appendDateTimezoneSelectFields({
		fields: collectionConfig.flattenedFields,
		select
	});
	/** Force select `_order` for orderable collections — OrderableTable needs it to compute reorder targets */
	if (collectionConfig.orderable === true) select._order = true;
	/** Force select `_status` for drafts-enabled collections — needed by `enrichDocsWithVersionStatus` and `formatDocURL` */
	if (collectionConfig.versions?.drafts) select._status = true;
	const isHierarchyCollection = Boolean(collectionConfig.hierarchy);
	const hierarchyParentFieldName = typeof collectionConfig.hierarchy === "object" ? collectionConfig.hierarchy.parentFieldName ?? "parent" : "parent";
	let hierarchyParentId = null;
	if (isHierarchyCollection) {
		const parentParam = searchParams?.[hierarchyParentFieldName];
		if (parentParam === "null" || parentParam === void 0) hierarchyParentId = null;
		else if (typeof parentParam === "string") hierarchyParentId = payload.db.defaultIDType === "number" && isNumber(parentParam) ? Number(parentParam) : parentParam;
	}
	let hierarchyData;
	try {
		if (query.groupBy) {
			({columnState, data, Table} = await handleGroupBy({
				clientCollectionConfig,
				clientConfig,
				collectionConfig,
				collectionSlug,
				columns,
				customCellProps,
				drawerSlug,
				enableRowSelections,
				fieldPermissions: permissions?.collections?.[collectionSlug]?.fields,
				query,
				req,
				select,
				trash,
				user,
				viewType,
				where: whereWithMergedSearch
			}));
			data = await enrichDocsWithVersionStatus({
				collectionConfig,
				data,
				req
			});
		} else {
			data = await req.payload.find({
				collection: collectionSlug,
				depth: 0,
				draft: true,
				fallbackLocale: false,
				includeLockStatus: true,
				limit: query?.limit ? Number(query.limit) : void 0,
				locale: req.locale,
				overrideAccess: false,
				page: query?.page ? Number(query.page) : void 0,
				req,
				select,
				sort: query?.sort,
				trash,
				user,
				where: whereWithMergedSearch
			});
			data = await enrichDocsWithVersionStatus({
				collectionConfig,
				data,
				req
			});
			({columnState, Table} = renderTable({
				clientCollectionConfig,
				collectionConfig,
				columns,
				customCellProps,
				data,
				drawerSlug,
				enableRowSelections,
				fieldPermissions: permissions?.collections?.[collectionSlug]?.fields,
				i18n: req.i18n,
				orderableFieldName: collectionConfig.orderable === true ? "_order" : void 0,
				payload: req.payload,
				query,
				req,
				useAsTitle: collectionConfig.admin.useAsTitle,
				viewType
			}));
		}
	} catch (err) {
		if (err.name !== "QueryError") {
			req.payload.logger.error({
				err,
				msg: `There was an error fetching the list view data for collection ${collectionSlug}`
			});
			throw err;
		}
	}
	let HierarchyIcon;
	const isHierarchyView = viewType === "hierarchy";
	if (isHierarchyCollection && isHierarchyView) {
		const typeFilterParam = searchParams?.typeFilter;
		const typeFilter = typeof typeFilterParam === "string" && typeFilterParam.length > 0 ? typeFilterParam.split(",") : void 0;
		hierarchyData = await handleHierarchy({
			baseFilter: baseFilterConstraint,
			collectionConfig,
			collectionSlug,
			parentId: hierarchyParentId,
			permissions,
			req,
			search: typeof query?.search === "string" ? query.search : void 0,
			typeFilter,
			user
		});
		data = hierarchyData.childrenData;
		HierarchyIcon = RenderServerComponent({
			Component: (typeof collectionConfig.hierarchy === "object" ? collectionConfig.hierarchy : void 0)?.admin?.components?.Icon,
			importMap: payload.importMap,
			key: `hierarchy-icon-${collectionSlug}`
		});
	}
	const renderedFilters = renderFilters(collectionConfig.fields, req.payload.importMap);
	const resolvedFilterOptions = await resolveAllFilterOptions({
		fields: collectionConfig.fields,
		req
	});
	const staticDescription = typeof collectionConfig.admin.description === "function" ? collectionConfig.admin.description({ t: i18n.t }) : collectionConfig.admin.description;
	const newDocumentURL = formatAdminURL({
		adminRoute,
		path: `/collections/${collectionSlug}/create`
	});
	const hasCreatePermission = permissions?.collections?.[collectionSlug]?.create;
	const { hasDeletePermission, hasTrashPermission } = await getDocumentPermissions({
		collectionConfig,
		data: {},
		req
	});
	const notFoundDocId = typeof searchParams?.notFound === "string" ? searchParams.notFound : null;
	const serverProps = {
		collectionConfig,
		data,
		i18n,
		limit: query.limit,
		listPreferences: collectionPreferences,
		listSearchableFields: collectionConfig.admin.listSearchableFields,
		locale: fullLocale,
		params,
		payload,
		permissions,
		searchParams,
		server: req.server,
		user
	};
	const listViewSlots = renderListViewSlots({
		clientProps: {
			collectionSlug,
			hasCreatePermission,
			hasDeletePermission,
			hasTrashPermission,
			newDocumentURL,
			viewType
		},
		collectionConfig,
		description: staticDescription,
		notFoundDocId,
		payload,
		serverProps
	});
	const isInDrawer = Boolean(drawerSlug);
	query.where = query?.where ? JSON.parse(JSON.stringify(query?.where || {})) : void 0;
	const RenderedListViewComponent = RenderServerComponent({
		clientProps: {
			...listViewSlots,
			baseFilter: baseFilterConstraint,
			collectionSlug,
			columnState,
			disableBulkDelete: collectionConfig.disableBulkDelete ?? disableBulkDelete,
			disableBulkEdit: collectionConfig.disableBulkEdit ?? disableBulkEdit,
			disableQueryPresets,
			enableRowSelections,
			hasCreatePermission,
			hasDeletePermission,
			hasTrashPermission,
			hierarchyData,
			HierarchyIcon,
			listPreferences: collectionPreferences,
			newDocumentURL,
			queryPreset,
			queryPresetPermissions,
			renderedFilters,
			resolvedFilterOptions,
			Table,
			viewType
		},
		Component: ComponentOverride ?? collectionConfig?.admin?.components?.views?.list?.Component,
		Fallback: viewType === "hierarchy" ? HierarchyListView : DefaultListView,
		importMap: payload.importMap,
		key: `list-view-${collectionSlug}-${viewType}`,
		serverProps
	});
	return { List: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(import_react_react_server.Fragment, { children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(HydrateAuthProvider, { permissions }), isHierarchyView ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(import_react_react_server.Fragment, { children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(HydrateHierarchyProvider, {
		allowedCollections: hierarchyData?.allowedCollections,
		baseFilter: baseFilterConstraint,
		collectionSlug,
		expandedNodes: hierarchyData?.breadcrumbs?.slice(0, -1).map((b) => b.id),
		parent: hierarchyData?.parent,
		parentFieldName: typeof collectionConfig.hierarchy === "object" ? collectionConfig.hierarchy?.parentFieldName : void 0,
		tableData: data,
		treeLimit: typeof collectionConfig.hierarchy === "object" ? collectionConfig.hierarchy?.admin?.treeLimit : void 0,
		typeFieldName: typeof collectionConfig.hierarchy === "object" && collectionConfig.hierarchy?.collectionSpecific && typeof collectionConfig.hierarchy.collectionSpecific === "object" ? collectionConfig.hierarchy.collectionSpecific.fieldName : void 0
	}), RenderedListViewComponent] }) : /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(ListQueryProvider, {
		collectionSlug,
		data,
		modifySearchParams: !isInDrawer,
		orderableFieldName: collectionConfig.orderable === true ? "_order" : void 0,
		query,
		children: RenderedListViewComponent
	})] }) };
};
var ListView = async (args) => {
	try {
		const { List: RenderedList } = await renderListView({
			...args,
			enableRowSelections: true
		});
		return RenderedList;
	} catch (error) {
		if (error.message === "not-found") args.initPageResult.req.server.notFound();
		else console.error(error);
	}
};
ListView = /* #__PURE__ */ __vite_rsc_wrap_css__(ListView, "ListView");
function __vite_rsc_wrap_css__(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
export { renderDocumentSlotsHandler as a, getColumns as c, renderDocument as i, renderListView as n, renderFilters as o, DocumentView as r, renderTable as s, ListView as t };
