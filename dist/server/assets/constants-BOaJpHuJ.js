//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/hierarchy/constants.js
/**
* Default field names and constants for hierarchy feature
*/ var HIERARCHY_SLUG_PATH_FIELD = "_h_slugPath";
var HIERARCHY_TITLE_PATH_FIELD = "_h_titlePath";
/** Generate a hierarchy field name from a hierarchy slug (e.g., 'folders' -> '_h_folders') */ var getHierarchyFieldName = (hierarchySlug) => `_h_${hierarchySlug}`;
//#endregion
export { HIERARCHY_TITLE_PATH_FIELD as n, getHierarchyFieldName as r, HIERARCHY_SLUG_PATH_FIELD as t };
