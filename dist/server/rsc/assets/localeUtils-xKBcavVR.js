import { fieldAffectsData, fieldHasSubFields, tabHasName } from "payload/shared";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Dashboard/Default/ModularDashboard/utils/localeUtils.js
function isLocalized(field) {
	return "localized" in field && Boolean(field.localized);
}
function getObjectValue(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value) ? value : {};
}
/**
* Extracts locale-specific data from widget data stored in preferences.
*
* Localized fields are stored as `{ fieldName: { en: "Hello", de: "Hallo" } }` in preferences.
* This function flattens them to `{ fieldName: "Hello" }` for the given locale,
* which is the format the form state builder expects.
*
* Recursively handles nested field types (group, row, collapsible, tabs).
*/
function extractLocaleData(widgetData, locale, fields) {
	const result = {};
	for (const field of fields) {
		if (field.type === "tabs") {
			for (const tab of field.tabs) {
				const tabFields = tab.fields;
				if (tabHasName(tab)) result[tab.name] = extractLocaleData(getObjectValue(widgetData[tab.name]), locale, tabFields);
				else Object.assign(result, extractLocaleData(widgetData, locale, tabFields));
			}
			continue;
		}
		if (fieldHasSubFields(field) && !fieldAffectsData(field)) {
			Object.assign(result, extractLocaleData(widgetData, locale, field.fields));
			continue;
		}
		if (!fieldAffectsData(field)) continue;
		const { name } = field;
		const value = widgetData[name];
		if (fieldHasSubFields(field)) {
			result[name] = extractLocaleData(getObjectValue(value), locale, field.fields);
			continue;
		}
		if (isLocalized(field) && value !== void 0 && typeof value === "object" && value !== null && !Array.isArray(value)) result[name] = value[locale];
		else result[name] = value;
	}
	return result;
}
//#endregion
export { extractLocaleData as t };
