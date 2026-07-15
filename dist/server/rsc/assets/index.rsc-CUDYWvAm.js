import { r as __toESM } from "./rolldown-runtime-DJK8HYOj.js";
import { a as require_react_react_server } from "./rsc-CrbjC1on.js";
import { t as renderToReadableStream } from "../index.js";
import { i as getStartContext, r as redirect } from "./redirect-CFjMuMZp.js";
import { Vt as require_jsx_runtime_react_server, n as upsertPreferences } from "./upsertPreferences-BTcoIMIB.js";
import { AsyncLocalStorage } from "node:async_hooks";
import "payload/shared";
import { createClientConfig, createLocalReq, createUnauthenticatedClientConfig, executeAuthStrategies, getAccessResults, getPayload, getRequestLanguage, parseCookies } from "payload";
//#region node_modules/.pnpm/@tanstack+react-start-rsc@0.1.25_@vitejs+plugin-rsc@0.5.27_react-dom@19.2.6_react@19.2._87c6cd0836b02c60e324b73c35a7a1de/node_modules/@tanstack/react-start-rsc/dist/esm/ServerComponentTypes.js
var import_react_react_server = /* @__PURE__ */ __toESM(require_react_react_server(), 1);
var SERVER_COMPONENT_STREAM = Symbol.for("tanstack.rsc.stream");
var RENDERABLE_RSC = Symbol.for("tanstack.rsc.renderable");
//#endregion
//#region node_modules/.pnpm/@tanstack+react-start-rsc@0.1.25_@vitejs+plugin-rsc@0.5.27_react-dom@19.2.6_react@19.2._87c6cd0836b02c60e324b73c35a7a1de/node_modules/@tanstack/react-start-rsc/dist/esm/rscCssEnvelope.js
var RSC_CSS_ENVELOPE_MARKER = "__tanstackStartRscCssEnvelope";
var RSC_CSS_ENVELOPE_RESOURCES = "__tanstackStartRscCss";
var RSC_CSS_ENVELOPE_VALUE = "__tanstackStartRscValue";
function createRscCssEnvelope(value, options) {
	const resources = options?.[RSC_CSS_ENVELOPE_RESOURCES];
	if (resources === void 0 || resources === null || resources === false) return value;
	return {
		[RSC_CSS_ENVELOPE_MARKER]: true,
		[RSC_CSS_ENVELOPE_RESOURCES]: resources,
		[RSC_CSS_ENVELOPE_VALUE]: value
	};
}
//#endregion
//#region node_modules/.pnpm/@tanstack+router-core@1.171.13/node_modules/@tanstack/router-core/dist/esm/not-found.js
/**
* Create a not-found error object recognized by TanStack Router.
*
* Throw this from loaders/actions to trigger the nearest `notFoundComponent`.
* Use `routeId` to target a specific route's not-found boundary. If `throw`
* is true, the error is thrown instead of returned.
*
* @param options Optional settings including `routeId`, `headers`, and `throw`.
* @returns A not-found error object that can be thrown or returned.
* @link https://tanstack.com/router/latest/docs/router/framework/react/api/router/notFoundFunction
*/
function notFound(options = {}) {
	options.isNotFound = true;
	if (options.throw) throw options;
	return options;
}
/** Determine if a value is a TanStack Router not-found error. */
function isNotFound(obj) {
	return obj?.isNotFound === true;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/getClientConfig.js
var cachedClientConfigs = globalThis._payload_clientConfigs;
if (!cachedClientConfigs) cachedClientConfigs = globalThis._payload_clientConfigs = {};
var getClientConfig = (0, import_react_react_server.cache)(({ config, i18n, importMap, user }) => {
	const currentLanguage = i18n.language;
	if (cachedClientConfigs[currentLanguage] && !globalThis._payload_doNotCacheClientConfig) {
		if (!user) return createUnauthenticatedClientConfig({ clientConfig: cachedClientConfigs[currentLanguage] });
		return cachedClientConfigs[currentLanguage];
	}
	const cachedClientConfig = createClientConfig({
		config,
		i18n,
		importMap,
		user
	});
	cachedClientConfigs[currentLanguage] = cachedClientConfig;
	globalThis._payload_clientConfigs = cachedClientConfigs;
	globalThis._payload_doNotCacheClientConfig = false;
	if (!user) return createUnauthenticatedClientConfig({ clientConfig: cachedClientConfig });
	return cachedClientConfig;
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+translations@4.0.0-internal.fa183d3/node_modules/@payloadcms/translations/dist/importDateFNSLocale.js
var importDateFNSLocale = async (locale) => {
	let result;
	switch (locale) {
		case "ar":
			result = (await import("./ar-Q5eq_Vek.js")).ar;
			break;
		case "az":
			result = (await import("./az-BYn-S8IB.js")).az;
			break;
		case "bg":
			result = (await import("./bg-CafRrBla.js")).bg;
			break;
		case "bn-BD":
			result = (await import("./bn-CDiLfGEO.js")).bn;
			break;
		case "bn-IN":
			result = (await import("./bn-CDiLfGEO.js")).bn;
			break;
		case "ca":
			result = (await import("./ca-BxwVcgcP.js")).ca;
			break;
		case "cs":
			result = (await import("./cs-DrbN5a93.js")).cs;
			break;
		case "da":
			result = (await import("./da-DLPvYTbV.js")).da;
			break;
		case "de":
			result = (await import("./de-DHqrYRlX.js")).de;
			break;
		case "en-US":
			result = (await import("./en-US-Bn8BToYI.js").then((n) => n.n)).enUS;
			break;
		case "es":
			result = (await import("./es-BY4e-sGK.js")).es;
			break;
		case "et":
			result = (await import("./et-C7Co_VGy.js")).et;
			break;
		case "fa-IR":
			result = (await import("./fa-IR-dL6XwHBQ.js")).faIR;
			break;
		case "fr":
			result = (await import("./fr-CoM1T4Z_.js")).fr;
			break;
		case "he":
			result = (await import("./he-BXFCp_XG.js")).he;
			break;
		case "hr":
			result = (await import("./hr-DkJwGnKC.js")).hr;
			break;
		case "hu":
			result = (await import("./hu-B2v1jDa_.js")).hu;
			break;
		case "id":
			result = (await import("./id-C7_BdurH.js")).id;
			break;
		case "is":
			result = (await import("./is-BdQG8cGH.js")).is;
			break;
		case "it":
			result = (await import("./it-DSXuID-v.js")).it;
			break;
		case "ja":
			result = (await import("./ja-CXpJScDw.js")).ja;
			break;
		case "ko":
			result = (await import("./ko-nwQvgQ4C.js")).ko;
			break;
		case "lt":
			result = (await import("./lt-DIQG7Ieg.js")).lt;
			break;
		case "lv":
			result = (await import("./lv-CvNMw7y7.js")).lv;
			break;
		case "nb":
			result = (await import("./nb-Cn6MdOc6.js")).nb;
			break;
		case "nl":
			result = (await import("./nl-C4WU-J6K.js")).nl;
			break;
		case "pl":
			result = (await import("./pl-DlaBbsGj.js")).pl;
			break;
		case "pt":
			result = (await import("./pt-DB6CteZ_.js")).pt;
			break;
		case "ro":
			result = (await import("./ro-C7BimLk7.js")).ro;
			break;
		case "rs":
			result = (await import("./sr-C9SxVpoA.js")).sr;
			break;
		case "rs-Latin":
			result = (await import("./sr-Latn-DV2jJM0J.js")).srLatn;
			break;
		case "ru":
			result = (await import("./ru-xJ4Of7Qf.js")).ru;
			break;
		case "sk":
			result = (await import("./sk-Cc9mgaJA.js")).sk;
			break;
		case "sl-SI":
			result = (await import("./sl-ayQACczn.js")).sl;
			break;
		case "sv":
			result = (await import("./sv-BpN2_exm.js")).sv;
			break;
		case "ta":
			result = (await import("./ta-CSuGrpgF.js")).ta;
			break;
		case "th":
			result = (await import("./th-xcUn1z2B.js")).th;
			break;
		case "tr":
			result = (await import("./tr-w07V6ZnH.js")).tr;
			break;
		case "uk":
			result = (await import("./uk-Cnpd8E_H.js")).uk;
			break;
		case "vi":
			result = (await import("./vi-akKQ-MG8.js")).vi;
			break;
		case "zh-CN":
			result = (await import("./zh-CN-Btq1JMU8.js")).zhCN;
			break;
		case "zh-TW":
			result = (await import("./zh-TW-Dob4niwx.js")).zhTW;
			break;
	}
	if (result?.default) return result.default;
	return result;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+translations@4.0.0-internal.fa183d3/node_modules/@payloadcms/translations/dist/utilities/deepMergeSimple.js
/**
* Very simple, but fast deepMerge implementation. Only deepMerges objects, not arrays and clones everything.
* Do not use this if your object contains any complex objects like React Components, or if you would like to combine Arrays.
* If you only have simple objects and need a fast deepMerge, this is the function for you.
*
* obj2 takes precedence over obj1 - thus if obj2 has a key that obj1 also has, obj2's value will be used.
*
* @param obj1 base object
* @param obj2 object to merge "into" obj1
*/ function deepMergeSimple$1(obj1, obj2) {
	const output = { ...obj1 };
	for (const key in obj2) {
		if (key === "__proto__" || key === "constructor" || key === "prototype") continue;
		if (Object.prototype.hasOwnProperty.call(obj2, key)) if (typeof obj2[key] === "object" && !Array.isArray(obj2[key]) && obj1[key]) output[key] = deepMergeSimple$1(obj1[key], obj2[key]);
		else output[key] = obj2[key];
	}
	return output;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+translations@4.0.0-internal.fa183d3/node_modules/@payloadcms/translations/dist/clientKeys.js
function createClientTranslationKeys(keys) {
	return keys;
}
var clientTranslationKeys = createClientTranslationKeys([
	"authentication:account",
	"authentication:accountOfCurrentUser",
	"authentication:accountVerified",
	"authentication:alreadyActivated",
	"authentication:alreadyLoggedIn",
	"authentication:apiKey",
	"authentication:authenticated",
	"authentication:backToLogin",
	"authentication:beginCreateFirstUser",
	"authentication:changePassword",
	"authentication:checkYourEmailForPasswordReset",
	"authentication:confirmGeneration",
	"authentication:confirmPassword",
	"authentication:createFirstUser",
	"authentication:createUser",
	"authentication:emailNotValid",
	"authentication:usernameNotValid",
	"authentication:emailOrUsername",
	"authentication:emailSent",
	"authentication:emailVerified",
	"authentication:emailVerifiedRedirecting",
	"authentication:enableAPIKey",
	"authentication:failedToUnlock",
	"authentication:forceUnlock",
	"authentication:forgotPassword",
	"authentication:forgotPasswordEmailInstructions",
	"authentication:forgotPasswordUsernameInstructions",
	"authentication:forgotPasswordQuestion",
	"authentication:generate",
	"authentication:generateNewAPIKey",
	"authentication:generatingNewAPIKeyWillInvalidate",
	"authentication:logBackIn",
	"authentication:loggedOutInactivity",
	"authentication:loggedOutSuccessfully",
	"authentication:loggingOut",
	"authentication:login",
	"authentication:logOut",
	"authentication:loggedIn",
	"authentication:loggedInChangePassword",
	"authentication:logout",
	"authentication:logoutUser",
	"authentication:logoutSuccessful",
	"authentication:newAPIKeyGenerated",
	"authentication:newPassword",
	"authentication:notRedirected",
	"authentication:passed",
	"authentication:passwordResetSuccessfully",
	"authentication:resetPassword",
	"authentication:stayLoggedIn",
	"authentication:successfullyRegisteredFirstUser",
	"authentication:successfullyUnlocked",
	"authentication:username",
	"authentication:unableToVerify",
	"authentication:tokenRefreshSuccessful",
	"authentication:verified",
	"authentication:verifiedSuccessfully",
	"authentication:verify",
	"authentication:verifyUser",
	"authentication:youAreInactive",
	"commandPalette:createNew",
	"commandPalette:hintClose",
	"commandPalette:hintCreate",
	"commandPalette:hintNavigate",
	"commandPalette:hintSelect",
	"commandPalette:noResults",
	"commandPalette:placeholder",
	"commandPalette:title",
	"dashboard:addWidget",
	"dashboard:deleteWidget",
	"dashboard:searchWidgets",
	"dashboard:editDashboard",
	"dashboard:editingDashboard",
	"dashboard:resetLayout",
	"dashboard:addButton",
	"dashboard:discardConfirmLabel",
	"dashboard:discardMessage",
	"dashboard:discardTitle",
	"dashboard:noItems",
	"dashboard:widgetCollectionRequired",
	"dashboard:widgetConfigurationError",
	"dashboard:widgetInvalidCollection",
	"dashboard:widgetInvalidFilterField",
	"dashboard:widgetInvalidSortField",
	"dashboard:widgetLimitLabel",
	"dashboard:widgetNonSortableSortField",
	"dashboard:widgetQueryError",
	"dashboard:widgetRecentlyViewedEmpty",
	"dashboard:widgetRecentlyViewedTitle",
	"dashboard:widgetSelectCollectionFirst",
	"dashboard:widgetSelectSortField",
	"dashboard:widgetSortDirectionLabel",
	"dashboard:widgetSortFieldLabel",
	"dashboard:widgetTitleFallback",
	"dashboard:widgetTitleLabel",
	"error:autosaving",
	"error:correctInvalidFields",
	"error:deletingTitle",
	"error:documentNotFound",
	"error:emailOrPasswordIncorrect",
	"error:usernameOrPasswordIncorrect",
	"error:loadingDocument",
	"error:insufficientClipboardPermissions",
	"error:invalidClipboardData",
	"error:invalidRequestArgs",
	"error:invalidFileType",
	"error:logoutFailed",
	"error:noMatchedField",
	"error:notAllowedToAccessPage",
	"error:notAllowedToPerformAction",
	"error:previewing",
	"error:unableToCopy",
	"error:unableToDeleteCount",
	"error:unableToReindexCollection",
	"error:unableToUpdateCount",
	"error:unauthorized",
	"error:unauthorizedAdmin",
	"error:unknown",
	"error:unspecific",
	"error:unverifiedEmail",
	"error:userEmailAlreadyRegistered",
	"error:usernameAlreadyRegistered",
	"error:tokenNotProvided",
	"error:unPublishingDocument",
	"error:revertingDocument",
	"error:problemUploadingFile",
	"error:restoringTitle",
	"error:failedToSaveLayout",
	"error:failedToResetLayout",
	"fields:addLabel",
	"fields:addLink",
	"fields:addNew",
	"fields:addNewLabel",
	"fields:addRelationship",
	"fields:addUpload",
	"fields:block",
	"fields:blockName",
	"fields:blocks",
	"fields:blockType",
	"fields:chooseBetweenCustomTextOrDocument",
	"fields:customURL",
	"fields:chooseDocumentToLink",
	"fields:openInNewTab",
	"fields:enterURL",
	"fields:internalLink",
	"fields:chooseFromExisting",
	"fields:linkType",
	"fields:textToDisplay",
	"fields:searchForLanguage",
	"fields:collapseAll",
	"fields:editLink",
	"fields:editRelationship",
	"fields:itemsAndMore",
	"fields:labelRelationship",
	"fields:latitude",
	"fields:linkedTo",
	"fields:longitude",
	"fields:passwordsDoNotMatch",
	"fields:hidePassword",
	"fields:showPassword",
	"fields:removeRelationship",
	"fields:removeUpload",
	"fields:saveChanges",
	"fields:searchForBlock",
	"fields:selectFieldsToEdit",
	"fields:showAll",
	"fields:swapRelationship",
	"fields:swapUpload",
	"fields:toggleBlock",
	"fields:uploadNewLabel",
	"hierarchy:itemsMovedTo",
	"hierarchy:itemsMovedToRoot",
	"hierarchy:moveItemsToRootConfirmation",
	"hierarchy:moveToRoot",
	"hierarchy:noParent",
	"hierarchy:noResults",
	"hierarchy:searchLabel",
	"general:all",
	"general:aboutToDeleteCount",
	"general:aboutToDelete",
	"general:aboutToPermanentlyDelete",
	"general:aboutToPermanentlyDeleteTrash",
	"general:aboutToRestore",
	"general:aboutToRestoreAsDraft",
	"general:aboutToRestoreAsDraftCount",
	"general:aboutToRestoreCount",
	"general:aboutToTrash",
	"general:aboutToTrashCount",
	"general:accepts",
	"general:access",
	"general:addBelow",
	"general:addFilter",
	"general:adminTheme",
	"general:allCollections",
	"general:and",
	"general:anotherUser",
	"general:anotherUserTakenOver",
	"general:applyChanges",
	"general:ascending",
	"general:automatic",
	"general:auto",
	"general:backToDashboard",
	"general:by",
	"general:cancel",
	"general:changesNotSaved",
	"general:checked",
	"general:close",
	"general:collapse",
	"general:collection",
	"general:collections",
	"general:confirmMove",
	"general:yes",
	"general:no",
	"general:columns",
	"general:columnToSort",
	"general:confirm",
	"general:confirmCopy",
	"general:confirmDeletion",
	"general:confirmDuplication",
	"general:confirmReindex",
	"general:confirmReindexAll",
	"general:confirmReindexDescription",
	"general:confirmReindexDescriptionAll",
	"general:confirmRestoration",
	"general:copied",
	"general:clear",
	"general:clearAll",
	"general:copy",
	"general:copyField",
	"general:copyRow",
	"general:copyWarning",
	"general:copying",
	"general:create",
	"general:created",
	"general:createdAt",
	"general:createNew",
	"general:createNewLabel",
	"general:creating",
	"general:creatingNewLabel",
	"general:currentlyEditing",
	"general:custom",
	"general:dark",
	"general:dashboard",
	"general:decrement",
	"general:delete",
	"general:deleted",
	"general:deletedAt",
	"general:deletedAgo",
	"general:deletePermanently",
	"general:deleteLabel",
	"general:deletedSuccessfully",
	"general:deletedCountSuccessfully",
	"general:deleting",
	"general:descending",
	"general:depth",
	"general:dragToReorder",
	"general:deselectAllRows",
	"general:document",
	"general:documentIsTrashed",
	"general:documentLocked",
	"general:documentModified",
	"general:documentOutOfDate",
	"general:documents",
	"general:duplicate",
	"general:duplicateWithoutSaving",
	"general:edit",
	"general:editAll",
	"general:editing",
	"general:editingLabel",
	"general:editingTakenOver",
	"general:editColumns",
	"general:editLabel",
	"general:editedSince",
	"general:email",
	"general:emailAddress",
	"general:emptyTrash",
	"general:emptyTrashLabel",
	"general:enterANumber",
	"general:enterAValue",
	"general:error",
	"general:errors",
	"general:expand",
	"general:fallbackToDefaultLocale",
	"general:false",
	"general:field",
	"general:filter",
	"general:filters",
	"general:filterWhere",
	"general:globals",
	"general:goBack",
	"general:groupByLabel",
	"general:enhancedContrastMode",
	"general:hideSidebar",
	"general:increment",
	"general:isEditing",
	"general:item",
	"general:items",
	"general:language",
	"general:lastModified",
	"general:layout",
	"general:leaveAnyway",
	"general:leaveWithoutSaving",
	"general:light",
	"general:livePreview",
	"general:lock",
	"general:exitLivePreview",
	"general:loading",
	"general:loadMore",
	"general:locale",
	"general:locales",
	"general:manageLabel",
	"general:menu",
	"general:moreOptions",
	"general:move",
	"general:moveConfirm",
	"general:moveCount",
	"general:moveDown",
	"general:moveUp",
	"general:moving",
	"general:movingCount",
	"general:name",
	"general:next",
	"general:newLabel",
	"general:noDateSelected",
	"general:noFiltersSet",
	"general:noLabel",
	"general:noMatchesFound",
	"general:none",
	"general:noOptions",
	"general:noResults",
	"general:noResultsDescription",
	"general:noResultsFound",
	"general:notFound",
	"general:notShownInTable",
	"general:nothingFound",
	"general:noTrashResults",
	"general:noUpcomingEventsScheduled",
	"general:noValue",
	"general:of",
	"general:open",
	"general:openInNewWindow",
	"general:only",
	"general:or",
	"general:order",
	"general:original",
	"general:overwriteExistingData",
	"general:pageNotFound",
	"general:password",
	"general:pasteField",
	"general:pasteRow",
	"general:payloadSettings",
	"general:permanentlyDelete",
	"general:permanentlyDeletedCountSuccessfully",
	"general:perPage",
	"general:perPageLabel",
	"general:presets",
	"general:previous",
	"general:reindex",
	"general:reindexingAll",
	"general:reloadDocument",
	"general:remove",
	"general:rename",
	"general:reset",
	"general:resetPreferences",
	"general:resetPreferencesDescription",
	"general:resettingPreferences",
	"general:restore",
	"general:retry",
	"general:restoreAsPublished",
	"general:restoredCountSuccessfully",
	"general:restoring",
	"general:row",
	"general:rows",
	"general:save",
	"general:saveChanges",
	"general:schedulePublishFor",
	"general:saving",
	"general:searchBy",
	"general:searchColumns",
	"general:select",
	"general:selectAll",
	"general:selectAllRows",
	"general:selectedCount",
	"general:selectLabel",
	"general:selectValue",
	"general:settings",
	"general:showAllLabel",
	"general:showSidebar",
	"general:shownInTable",
	"general:sorryNotFound",
	"general:sort",
	"general:sortByLabelDirection",
	"general:stayOnThisPage",
	"general:submissionSuccessful",
	"general:submit",
	"general:submitting",
	"general:success",
	"general:successfullyCreated",
	"general:successfullyDuplicated",
	"general:successfullyReindexed",
	"general:takeOver",
	"general:thisLanguage",
	"general:time",
	"general:timezone",
	"general:theme",
	"general:toggle",
	"general:titleDeleted",
	"general:titleTrashed",
	"general:titleRestored",
	"general:trash",
	"general:trashedCountSuccessfully",
	"general:import",
	"general:export",
	"general:allLocales",
	"general:true",
	"general:upcomingEvents",
	"general:users",
	"general:user",
	"general:username",
	"general:unauthorized",
	"general:unchecked",
	"general:unlock",
	"general:unsavedChanges",
	"general:unsavedChangesDuplicate",
	"general:untitled",
	"general:updatedAt",
	"general:updatedAgo",
	"general:updatedLabelSuccessfully",
	"general:updatedCountSuccessfully",
	"general:updateForEveryone",
	"general:updatedSuccessfully",
	"general:updating",
	"general:value",
	"general:viewing",
	"general:viewReadOnly",
	"general:uploading",
	"general:uploadingBulk",
	"general:welcome",
	"general:where",
	"localization:localeToPublish",
	"localization:copyToLocale",
	"localization:copyFromTo",
	"localization:selectedLocales",
	"localization:selectLocaleToCopy",
	"localization:selectLocaleToDuplicate",
	"localization:cannotCopySameLocale",
	"localization:copyFrom",
	"localization:copyTo",
	"operators:equals",
	"operators:exists",
	"operators:isNotIn",
	"operators:isIn",
	"operators:contains",
	"operators:isLike",
	"operators:isNotLike",
	"operators:isNotEqualTo",
	"operators:near",
	"operators:isGreaterThan",
	"operators:isLessThan",
	"operators:isGreaterThanOrEqualTo",
	"operators:isLessThanOrEqualTo",
	"operators:within",
	"operators:intersects",
	"upload:addFile",
	"upload:addFiles",
	"upload:bulkUpload",
	"upload:crop",
	"upload:cropToolDescription",
	"upload:dragAndDrop",
	"upload:editImage",
	"upload:fileToUpload",
	"upload:filesToUpload",
	"upload:focalPoint",
	"upload:focalPointDescription",
	"upload:height",
	"upload:fromURL",
	"upload:linkToFile",
	"upload:pasteURL",
	"upload:renameFile",
	"upload:replaceFile",
	"upload:previewSizes",
	"upload:selectCollectionToBrowse",
	"upload:selectFile",
	"upload:setCropArea",
	"upload:setFocalPoint",
	"upload:sizesFor",
	"upload:sizes",
	"upload:width",
	"upload:fileName",
	"upload:fileSize",
	"upload:noFile",
	"upload:download",
	"validation:emailAddress",
	"validation:enterNumber",
	"validation:fieldHasNo",
	"validation:greaterThanMax",
	"validation:invalidInput",
	"validation:invalidSelection",
	"validation:invalidSelections",
	"validation:latitudeOutOfBounds",
	"validation:lessThanMin",
	"validation:limitReached",
	"validation:longitudeOutOfBounds",
	"validation:invalidBlock",
	"validation:invalidBlocks",
	"validation:longerThanMin",
	"validation:notValidDate",
	"validation:required",
	"validation:requiresAtLeast",
	"validation:requiresNoMoreThan",
	"validation:requiresTwoNumbers",
	"validation:shorterThanMax",
	"validation:trueOrFalse",
	"validation:timezoneRequired",
	"validation:username",
	"validation:validUploadID",
	"version:aboutToPublishSelection",
	"version:aboutToRestore",
	"version:aboutToRestoreGlobal",
	"version:aboutToRevertToPublished",
	"version:aboutToUnpublish",
	"version:aboutToUnpublishIn",
	"version:aboutToUnpublishSelection",
	"version:autosave",
	"version:autosavedSuccessfully",
	"version:autosavedVersion",
	"version:versionAgo",
	"version:moreVersions",
	"version:changed",
	"version:changedFieldsCount",
	"version:confirmRevertToSaved",
	"version:compareVersions",
	"version:comparingAgainst",
	"version:currentlyViewing",
	"version:confirmPublish",
	"version:confirmUnpublish",
	"version:confirmVersionRestoration",
	"version:currentDraft",
	"version:currentPublishedVersion",
	"version:currentlyPublished",
	"version:draft",
	"version:draftHasPublishedVersion",
	"version:draftSavedSuccessfully",
	"version:lastSavedAgo",
	"version:modifiedOnly",
	"version:noFurtherVersionsFound",
	"version:noLabelGroup",
	"version:noRowsFound",
	"version:noRowsSelected",
	"version:preview",
	"version:previouslyDraft",
	"version:previouslyPublished",
	"version:previousVersion",
	"version:problemRestoringVersion",
	"version:publish",
	"version:publishAllLocales",
	"version:publishChanges",
	"version:published",
	"version:publishIn",
	"version:publishing",
	"version:restoreAsDraft",
	"version:restoredSuccessfully",
	"version:restoreThisVersion",
	"version:restoring",
	"version:reverting",
	"version:revertUnsuccessful",
	"version:revertToPublished",
	"version:saveDraft",
	"version:scheduledSuccessfully",
	"version:schedulePublish",
	"version:selectLocales",
	"version:selectVersionToCompare",
	"version:showLocales",
	"version:specificVersion",
	"version:status",
	"version:type",
	"version:unpublish",
	"version:unpublished",
	"version:unpublishIn",
	"version:unpublishing",
	"version:unpublishedSuccessfully",
	"version:versionID",
	"version:version",
	"version:versions",
	"version:viewingVersion",
	"version:viewingVersionGlobal",
	"version:viewingVersions",
	"version:viewingVersionsGlobal"
]);
//#endregion
//#region node_modules/.pnpm/@payloadcms+translations@4.0.0-internal.fa183d3/node_modules/@payloadcms/translations/dist/utilities/getTranslationsByContext.js
function filterKeys(obj, parentGroupKey = "", keys) {
	const result = {};
	for (const [namespaceKey, value] of Object.entries(obj)) {
		if (namespaceKey === "$schema") {
			result[namespaceKey] = value;
			continue;
		}
		if (typeof value === "object") {
			const filteredObject = filterKeys(value, namespaceKey, keys);
			if (Object.keys(filteredObject).length > 0) result[namespaceKey] = filteredObject;
		} else for (const key of keys) {
			const [groupKey, selector] = key.split(":");
			if (parentGroupKey === groupKey) if (namespaceKey === selector) result[selector] = value;
			else [
				"zero",
				"one",
				"two",
				"few",
				"many",
				"other"
			].forEach((pluralKey) => {
				if (namespaceKey === `${selector}_${pluralKey}`) result[`${selector}_${pluralKey}`] = value;
			});
		}
	}
	return result;
}
function sortObject(obj) {
	const sortedObject = {};
	Object.keys(obj).sort().forEach((key) => {
		if (typeof obj[key] === "object") sortedObject[key] = sortObject(obj[key]);
		else sortedObject[key] = obj[key];
	});
	return sortedObject;
}
var getTranslationsByContext = (selectedLanguage, context) => {
	if (context === "client") return sortObject(filterKeys(selectedLanguage.translations, "", clientTranslationKeys));
	else return selectedLanguage.translations;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+translations@4.0.0-internal.fa183d3/node_modules/@payloadcms/translations/dist/utilities/init.js
/**
* @function getTranslationString
*
* Gets a translation string from a translations object
*
* @returns string
*/ var getTranslationString = ({ count, key, translations }) => {
	const keys = key.split(":");
	let keySuffix = "";
	const translation = keys.reduce((acc, key, index) => {
		if (typeof acc === "string") return acc;
		if (typeof count === "number") {
			if (count === 0 && `${key}_zero` in acc) keySuffix = "_zero";
			else if (count === 1 && `${key}_one` in acc) keySuffix = "_one";
			else if (count === 2 && `${key}_two` in acc) keySuffix = "_two";
			else if (count > 5 && `${key}_many` in acc) keySuffix = "_many";
			else if (count > 2 && count <= 5 && `${key}_few` in acc) keySuffix = "_few";
			else if (`${key}_other` in acc) keySuffix = "_other";
		}
		let keyToUse = key;
		if (index === keys.length - 1 && keySuffix) keyToUse = `${key}${keySuffix}`;
		if (acc && keyToUse in acc) return acc[keyToUse];
	}, translations);
	if (!translation) console.log("key not found:", key);
	return translation || key;
};
/**
* @function replaceVars
*
* Replaces variables in a translation string with values from an object
*
* @returns string
*/ var replaceVars = ({ translationString, vars }) => {
	return translationString.split(/(\{\{.*?\}\})/).map((part) => {
		if (part.startsWith("{{") && part.endsWith("}}")) {
			const value = vars[part.substring(2, part.length - 2).trim()];
			return value !== void 0 && value !== null ? value : part;
		} else return part;
	}).join("");
};
/**
* @function t
*
* Merges config defined translations with translations passed in as an argument
* returns a function that can be used to translate a string
*
* @returns string
*/ function t({ key, translations, vars }) {
	let translationString = getTranslationString({
		count: typeof vars?.count === "number" ? vars.count : void 0,
		key,
		translations
	});
	if (vars) translationString = replaceVars({
		translationString,
		vars
	});
	if (!translationString) translationString = key;
	return translationString;
}
var initTFunction = (args) => {
	const { config, language, translations } = args;
	const mergedTranslations = language && config?.translations?.[language] ? deepMergeSimple$1(translations, config.translations[language]) : translations;
	return {
		t: (key, vars) => {
			return t({
				key,
				translations: mergedTranslations,
				vars
			});
		},
		translations: mergedTranslations
	};
};
function memoize(fn, keys) {
	const cacheMap = /* @__PURE__ */ new Map();
	const memoized = async (args) => {
		const cacheKey = keys.reduce((acc, key) => acc + String(args[key]), "");
		if (!cacheMap.has(cacheKey)) {
			const result = await fn(args);
			cacheMap.set(cacheKey, result);
		}
		return cacheMap.get(cacheKey);
	};
	return memoized;
}
var initI18n = memoize(async ({ config, context, language = config.fallbackLanguage }) => {
	if (!language || !config.supportedLanguages?.[language]) throw new Error(`Language ${language} not supported`);
	const translations = getTranslationsByContext(config.supportedLanguages?.[language], context);
	const { t, translations: mergedTranslations } = initTFunction({
		config,
		language: language || config.fallbackLanguage,
		translations
	});
	const dateFNSKey = config.supportedLanguages[language]?.dateFNSKey || "en-US";
	return {
		dateFNS: await importDateFNSLocale(dateFNSKey),
		dateFNSKey,
		fallbackLanguage: config.fallbackLanguage,
		language: language || config.fallbackLanguage,
		t,
		translations: mergedTranslations
	};
}, ["language", "context"]);
//#endregion
//#region node_modules/.pnpm/@tanstack+start-server-core@1.169.15/node_modules/@tanstack/start-server-core/dist/esm/request-response.js
var GLOBAL_EVENT_STORAGE_KEY = Symbol.for("tanstack-start:event-storage");
var globalObj = globalThis;
if (!globalObj[GLOBAL_EVENT_STORAGE_KEY]) globalObj[GLOBAL_EVENT_STORAGE_KEY] = new AsyncLocalStorage();
var eventStorage = globalObj[GLOBAL_EVENT_STORAGE_KEY];
function getH3Event() {
	const event = eventStorage.getStore();
	if (!event) throw new Error(`No StartEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`);
	return event.h3Event;
}
function getRequest() {
	return getH3Event().req;
}
function setResponseHeader(name, value) {
	const event = getH3Event();
	if (Array.isArray(value)) {
		event.res.headers.delete(name);
		for (const valueItem of value) event.res.headers.append(name, valueItem);
	} else event.res.headers.set(name, value);
}
//#endregion
//#region node_modules/.pnpm/qs-esm@7.0.3/node_modules/qs-esm/lib/formats.js
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
	RFC1738: "RFC1738",
	RFC3986: "RFC3986"
};
var formatters = {
	RFC1738: function(value) {
		return replace.call(value, percentTwenties, "+");
	},
	RFC3986: function(value) {
		return String(value);
	}
};
var RFC1738 = Format.RFC1738;
Format.RFC3986;
var formats_default = Format.RFC3986;
//#endregion
//#region node_modules/.pnpm/qs-esm@7.0.3/node_modules/qs-esm/lib/utils.js
var has$1 = Object.prototype.hasOwnProperty;
var isArray$1 = Array.isArray;
var overflowChannel = /* @__PURE__ */ new WeakMap();
var markOverflow = function markOverflow(obj, maxIndex) {
	overflowChannel.set(obj, maxIndex);
	return obj;
};
function isOverflow(obj) {
	return overflowChannel.has(obj);
}
var getMaxIndex = function getMaxIndex(obj) {
	return overflowChannel.get(obj);
};
var setMaxIndex = function setMaxIndex(obj, maxIndex) {
	overflowChannel.set(obj, maxIndex);
};
var hexTable = (function() {
	const array = [];
	for (let i = 0; i < 256; ++i) array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
	return array;
})();
var compactQueue = function compactQueue(queue) {
	while (queue.length > 1) {
		const item = queue.pop();
		const obj = item.obj[item.prop];
		if (isArray$1(obj)) {
			const compacted = [];
			for (let j = 0; j < obj.length; ++j) if (typeof obj[j] !== "undefined") compacted.push(obj[j]);
			item.obj[item.prop] = compacted;
		}
	}
};
var arrayToObject = function arrayToObject(source, options) {
	const obj = options && options.plainObjects ? Object.create(null) : {};
	for (let i = 0; i < source.length; ++i) if (typeof source[i] !== "undefined") obj[i] = source[i];
	return obj;
};
var merge = function merge(target, source, options) {
	if (!source) return target;
	if (typeof source !== "object") {
		if (isArray$1(target)) target.push(source);
		else if (target && typeof target === "object") {
			if (isOverflow(target)) {
				var newIndex = getMaxIndex(target) + 1;
				target[newIndex] = source;
				setMaxIndex(target, newIndex);
			} else if (options && (options.plainObjects || options.allowPrototypes) || !has$1.call(Object.prototype, source)) target[source] = true;
		} else return [target, source];
		return target;
	}
	if (!target || typeof target !== "object") {
		if (isOverflow(source)) {
			var sourceKeys = Object.keys(source);
			var result = options && options.plainObjects ? {
				__proto__: null,
				0: target
			} : { 0: target };
			for (var m = 0; m < sourceKeys.length; m++) {
				var oldKey = parseInt(sourceKeys[m], 10);
				result[oldKey + 1] = source[sourceKeys[m]];
			}
			return markOverflow(result, getMaxIndex(source) + 1);
		}
		return [target].concat(source);
	}
	let mergeTarget = target;
	if (isArray$1(target) && !isArray$1(source)) mergeTarget = arrayToObject(target, options);
	if (isArray$1(target) && isArray$1(source)) {
		source.forEach(function(item, i) {
			if (has$1.call(target, i)) {
				const targetItem = target[i];
				if (targetItem && typeof targetItem === "object" && item && typeof item === "object") target[i] = merge(targetItem, item, options);
				else target.push(item);
			} else target[i] = item;
		});
		return target;
	}
	return Object.keys(source).reduce(function(acc, key) {
		const value = source[key];
		if (has$1.call(acc, key)) acc[key] = merge(acc[key], value, options);
		else acc[key] = value;
		return acc;
	}, mergeTarget);
};
var decode = function(str, decoder, charset) {
	const strWithoutPlus = str.replace(/\+/g, " ");
	if (charset === "iso-8859-1") return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
	try {
		return decodeURIComponent(strWithoutPlus);
	} catch (e) {
		return strWithoutPlus;
	}
};
var limit = 1024;
var encode = function encode(str, defaultEncoder, charset, kind, format) {
	if (str.length === 0) return str;
	let string = str;
	if (typeof str === "symbol") string = Symbol.prototype.toString.call(str);
	else if (typeof str !== "string") string = String(str);
	if (charset === "iso-8859-1") return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
		return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
	});
	let out = "";
	for (let j = 0; j < string.length; j += limit) {
		const segment = string.length >= limit ? string.slice(j, j + limit) : string;
		const arr = [];
		for (let i = 0; i < segment.length; ++i) {
			let c = segment.charCodeAt(i);
			if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === RFC1738 && (c === 40 || c === 41)) {
				arr[arr.length] = segment.charAt(i);
				continue;
			}
			if (c < 128) {
				arr[arr.length] = hexTable[c];
				continue;
			}
			if (c < 2048) {
				arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
				continue;
			}
			if (c < 55296 || c >= 57344) {
				arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
				continue;
			}
			i += 1;
			c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
			arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
		}
		out += arr.join("");
	}
	return out;
};
var compact = function compact(value) {
	const queue = [{
		obj: { o: value },
		prop: "o"
	}];
	const refs = [];
	for (let i = 0; i < queue.length; ++i) {
		const item = queue[i];
		const obj = item.obj[item.prop];
		const keys = Object.keys(obj);
		for (let j = 0; j < keys.length; ++j) {
			const key = keys[j];
			const val = obj[key];
			if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
				queue.push({
					obj,
					prop: key
				});
				refs.push(val);
			}
		}
	}
	compactQueue(queue);
	return value;
};
var isRegExp = function isRegExp(obj) {
	return Object.prototype.toString.call(obj) === "[object RegExp]";
};
var isBuffer = function isBuffer(obj) {
	if (!obj || typeof obj !== "object") return false;
	return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b, arrayLimit, plainObjects) {
	if (isOverflow(a)) {
		var newIndex = getMaxIndex(a) + 1;
		a[newIndex] = b;
		setMaxIndex(a, newIndex);
		return a;
	}
	var result = [].concat(a, b);
	if (result.length > arrayLimit) return markOverflow(arrayToObject(result, { plainObjects }), result.length - 1);
	return result;
};
var maybeMap = function maybeMap(val, fn) {
	if (isArray$1(val)) {
		const mapped = [];
		for (let i = 0; i < val.length; i += 1) mapped.push(fn(val[i]));
		return mapped;
	}
	return fn(val);
};
//#endregion
//#region node_modules/.pnpm/qs-esm@7.0.3/node_modules/qs-esm/lib/parse.js
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
	allowDots: false,
	allowEmptyArrays: false,
	allowPrototypes: false,
	allowSparse: false,
	arrayLimit: 20,
	charset: "utf-8",
	charsetSentinel: false,
	comma: false,
	decodeDotInKeys: false,
	decoder: decode,
	delimiter: "&",
	depth: 5,
	duplicates: "combine",
	ignoreQueryPrefix: false,
	interpretNumericEntities: false,
	parameterLimit: 1e3,
	parseArrays: true,
	plainObjects: false,
	strictNullHandling: false
};
var interpretNumericEntities = function(str) {
	return str.replace(/&#(\d+);/g, function($0, numberStr) {
		return String.fromCharCode(parseInt(numberStr, 10));
	});
};
var parseArrayValue = function(val, options) {
	if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) return val.split(",");
	return val;
};
var isoSentinel = "utf8=%26%2310003%3B";
var charsetSentinel = "utf8=%E2%9C%93";
var parseValues = function parseQueryStringValues(str, options) {
	const obj = { __proto__: null };
	const cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
	const limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
	const parts = cleanStr.split(options.delimiter, limit);
	let skipIndex = -1;
	let i;
	let charset = options.charset;
	if (options.charsetSentinel) {
		for (i = 0; i < parts.length; ++i) if (parts[i].indexOf("utf8=") === 0) {
			if (parts[i] === charsetSentinel) charset = "utf-8";
			else if (parts[i] === isoSentinel) charset = "iso-8859-1";
			skipIndex = i;
			i = parts.length;
		}
	}
	for (i = 0; i < parts.length; ++i) {
		if (i === skipIndex) continue;
		const part = parts[i];
		const bracketEqualsPos = part.indexOf("]=");
		const pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
		let key, val;
		if (pos === -1) {
			key = options.decoder(part, defaults.decoder, charset, "key");
			val = options.strictNullHandling ? null : "";
		} else {
			key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
			val = maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
				return options.decoder(encodedVal, defaults.decoder, charset, "value");
			});
		}
		if (val && options.interpretNumericEntities && charset === "iso-8859-1") val = interpretNumericEntities(val);
		if (part.indexOf("[]=") > -1) val = isArray(val) ? [val] : val;
		const existing = has.call(obj, key);
		if (existing && options.duplicates === "combine") obj[key] = combine(obj[key], val, options.arrayLimit, options.plainObjects);
		else if (!existing || options.duplicates === "last") obj[key] = val;
	}
	return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
	let leaf = valuesParsed ? val : parseArrayValue(val, options);
	for (let i = chain.length - 1; i >= 0; --i) {
		let obj;
		const root = chain[i];
		if (root === "[]" && options.parseArrays) if (isOverflow(leaf)) obj = leaf;
		else obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : combine([], leaf, options.arrayLimit, options.plainObjects);
		else {
			obj = options.plainObjects ? Object.create(null) : {};
			const cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
			const decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
			const index = parseInt(decodedRoot, 10);
			if (!options.parseArrays && decodedRoot === "") obj = { 0: leaf };
			else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
				obj = [];
				obj[index] = leaf;
			} else if (decodedRoot !== "__proto__") obj[decodedRoot] = leaf;
		}
		leaf = obj;
	}
	return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
	if (!givenKey) return;
	const key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
	const brackets = /(\[[^[\]]*])/;
	const child = /(\[[^[\]]*])/g;
	let segment = options.depth > 0 && brackets.exec(key);
	const parent = segment ? key.slice(0, segment.index) : key;
	const keys = [];
	if (parent) {
		if (!options.plainObjects && has.call(Object.prototype, parent)) {
			if (!options.allowPrototypes) return;
		}
		keys.push(parent);
	}
	let i = 0;
	while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
		i += 1;
		if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
			if (!options.allowPrototypes) return;
		}
		keys.push(segment[1]);
	}
	if (segment) keys.push("[" + key.slice(segment.index) + "]");
	return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
	if (!opts) return defaults;
	if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
	if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
	if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") throw new TypeError("Decoder has to be a function.");
	if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
	const charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
	const duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
	if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") throw new TypeError("The duplicates option must be either combine, first, or last");
	return {
		allowDots: typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots,
		allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
		allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
		allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
		arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
		charset,
		charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
		comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
		decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
		decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
		delimiter: typeof opts.delimiter === "string" || isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
		depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
		duplicates,
		ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
		interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
		parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
		parseArrays: opts.parseArrays !== false,
		plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
		strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
	};
};
function parse(str, opts) {
	const options = normalizeParseOptions(opts);
	if (str === "" || str === null || typeof str === "undefined") return options.plainObjects ? Object.create(null) : {};
	const tempObj = typeof str === "string" ? parseValues(str, options) : str;
	let obj = options.plainObjects ? Object.create(null) : {};
	const keys = Object.keys(tempObj);
	for (let i = 0; i < keys.length; ++i) {
		const key = keys[i];
		const newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
		obj = merge(obj, newObj, options);
	}
	if (options.allowSparse === true) return obj;
	return compact(obj);
}
require_jsx_runtime_react_server();
var U = (e) => /\biPhone\b/.test(e ?? "");
var k = "width=device-width, initial-scale=1";
var O = (e) => U(e) ? `${k}, maximum-scale=1` : k;
var Ce = (e, t) => !e?.locales || e.locales.length === 0 ? null : e.locales.find((r) => r?.code === t);
var ye = {};
var h = {};
function d(e, t) {
	try {
		let o = (ye[e] ||= new Intl.DateTimeFormat("en-GB", {
			timeZone: e,
			hour: "numeric",
			timeZoneName: "longOffset"
		}).format)(t).split("GMT")[1] || "";
		return o in h ? h[o] : Z(o, o.split(":"));
	} catch {
		if (e in h) return h[e];
		let r = e?.match(xe);
		return r ? Z(e, r.slice(1)) : NaN;
	}
}
var xe = /([+-]\d\d):?(\d\d)?/;
function Z(e, t) {
	let r = +t[0], o = +(t[1] || 0);
	return h[e] = r > 0 ? r * 60 + o : r * 60 - o;
}
var m = class e extends Date {
	constructor(...t) {
		super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(d(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), A(this, NaN), L(this)) : this.setTime(Date.now());
	}
	static tz(t, ...r) {
		return r.length ? new e(...r, t) : new e(Date.now(), t);
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	getTimezoneOffset() {
		return -d(this.timeZone, this);
	}
	setTime(t) {
		return Date.prototype.setTime.apply(this, arguments), L(this), +this;
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
};
var P = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
	if (!P.test(e)) return;
	let t = e.replace(P, "$1UTC");
	m.prototype[t] && (e.startsWith("get") ? m.prototype[e] = function() {
		return this.internal[t]();
	} : (m.prototype[e] = function() {
		return Date.prototype[t].apply(this.internal, arguments), De(this), +this;
	}, m.prototype[t] = function() {
		return Date.prototype[t].apply(this, arguments), L(this), +this;
	}));
});
function L(e) {
	e.internal.setTime(+e), e.internal.setUTCMinutes(e.internal.getUTCMinutes() - e.getTimezoneOffset());
}
function De(e) {
	Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), A(e);
}
function A(e) {
	let t = d(e.timeZone, e), r = /* @__PURE__ */ new Date(+e);
	r.setUTCHours(r.getUTCHours() - 1);
	let o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = o - -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
	s && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + s);
	let a = o - t;
	a && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + a);
	let l = d(e.timeZone, e), u = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - l, f = l !== t, V = u - a;
	if (f && V) {
		Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + V);
		let x = l - d(e.timeZone, e);
		x && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + x), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + x));
	}
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/getPreferences.js
/**
* Fetches a user's preference by key. Unlike the Next.js version, this does not
* use `React.cache()` since TanStack Start has no RSC request-level memoization.
*/ async function getPreferences(key, payload, userID, userSlug) {
	return await payload.find({
		collection: "payload-preferences",
		depth: 0,
		limit: 1,
		pagination: false,
		where: { and: [
			{ key: { equals: key } },
			{ "user.relationTo": { equals: userSlug } },
			{ "user.value": { equals: userID } }
		] }
	}).then((res) => res.docs?.[0]);
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/getRequestLocale.js
async function getRequestLocale({ req }) {
	if (req.payload.config.localization) {
		const localeFromParams = req.query.locale;
		if (req.user && localeFromParams) await upsertPreferences({
			key: "locale",
			req,
			value: localeFromParams
		});
		return (req.user && Ce(req.payload.config.localization, localeFromParams || (await getPreferences("locale", req.payload, req.user.id, req.user.collection))?.value)) ?? Ce(req.payload.config.localization, req.payload.config.localization.defaultLocale || "en") ?? void 0;
	}
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/serverAdapter.server.js
function buildCookieStore(headers) {
	const cookies = parseCookies(headers);
	return {
		get: (name) => {
			const value = cookies.get(name);
			return value !== void 0 ? {
				name,
				value
			} : void 0;
		},
		getAll: () => {
			return Array.from(cookies.entries()).map(([name, value]) => ({
				name,
				value
			}));
		}
	};
}
function serializeCookie(name, value, options) {
	let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
	if (options?.path) cookie += `; Path=${options.path}`;
	if (options?.domain) cookie += `; Domain=${options.domain}`;
	if (options?.maxAge !== void 0) cookie += `; Max-Age=${options.maxAge}`;
	if (options?.expires) cookie += `; Expires=${options.expires.toUTCString()}`;
	if (options?.httpOnly) cookie += "; HttpOnly";
	if (options?.secure) cookie += "; Secure";
	if (options?.sameSite) cookie += `; SameSite=${options.sameSite.charAt(0).toUpperCase() + options.sameSite.slice(1)}`;
	return cookie;
}
/**
* Server-side adapter for TanStack Start.
* Uses `@tanstack/react-start/server` utilities for request/response handling.
*/ var tanstackServerAdapter = {
	getCookies: () => {
		const request = getRequest();
		return buildCookieStore(new Headers(request.headers));
	},
	getHeaders: () => {
		const request = getRequest();
		return new Headers(request.headers);
	},
	notFound: () => {
		throw notFound();
	},
	redirect: (path) => {
		throw redirect({ to: path });
	},
	permanentRedirect: (path) => {
		throw redirect({ to: path });
	},
	forbidden: () => {
		throw new Error("Forbidden");
	},
	unauthorized: () => {
		throw new Error("Unauthorized");
	},
	setCookie: (name, value, options) => {
		setResponseHeader("Set-Cookie", serializeCookie(name, value, options));
	}
};
/**
* Builds the `ServerAdapter` for the admin page render (`renderRoot`). Like
* `tanstackServerAdapter` for cookies/headers, but navigation **records the
* intent on `nav` and throws** the framework-agnostic string error-contract
* (`Error('not-found')` / `Error('redirect:<url>')`) instead of TanStack's
* native `notFound`/`redirect`.
*
* `renderRoot` navigates via `req.server.*` in two places:
* - during orchestration (e.g. the unauthenticated login redirect) — the throw
*   propagates out of `renderRoot` and is caught by the loader's try/catch;
* - deep inside streamed view components (e.g. `DocumentView` access checks,
*   `LoginView` already-authenticated) — here the throw happens during
*   `renderServerComponent` and is swallowed into the RSC stream, so it never
*   rejects the render promise.
*
* Recording the intent on `nav` lets the loader honor the second case by
* inspecting `nav` after the render resolves, then re-throwing native TanStack
* nav at the loader boundary.
*/ var createPageRenderServerAdapter = (nav) => ({
	...tanstackServerAdapter,
	notFound: () => {
		nav.type = "notFound";
		throw new Error("not-found");
	},
	permanentRedirect: (path) => {
		nav.type = "redirect";
		nav.url = path;
		throw new Error(`redirect:${path}`);
	},
	redirect: (path) => {
		nav.type = "redirect";
		nav.url = path;
		throw new Error(`redirect:${path}`);
	}
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/initReq.server.js
/**
* Initializes a Payload request object from the current TanStack Start server context.
* Uses `getRequest()` from `@tanstack/react-start/server` to access the incoming request.
*/ async function initReq({ configPromise, importMap, overrides, serverAdapter = tanstackServerAdapter }) {
	const webRequest = getRequest();
	const headers = new Headers(webRequest.headers);
	const cookies = parseCookies(headers);
	const config = await configPromise;
	const payload = await getPayload({
		config,
		importMap
	});
	const languageCode = getRequestLanguage({
		config,
		cookies,
		headers
	});
	const i18n = await initI18n({
		config: config.i18n,
		context: "client",
		language: languageCode
	});
	const { responseHeaders, user } = await executeAuthStrategies({
		headers,
		payload
	});
	const { req: reqOverrides, ...optionsOverrides } = overrides || {};
	let queryFromUrl;
	try {
		const urlObject = new URL(webRequest.url);
		if (urlObject.search) queryFromUrl = parse(urlObject.search, {
			depth: 10,
			ignoreQueryPrefix: true
		});
	} catch {
		queryFromUrl = void 0;
	}
	const req = await createLocalReq({
		req: {
			headers,
			host: headers.get("host") ?? void 0,
			i18n,
			query: queryFromUrl,
			responseHeaders,
			server: serverAdapter,
			url: webRequest.url,
			user,
			...reqOverrides || {}
		},
		...optionsOverrides || {}
	}, payload);
	const locale = await getRequestLocale({ req });
	req.locale = locale?.code;
	return {
		cookies,
		headers,
		languageCode,
		locale,
		permissions: await getAccessResults({ req }),
		req
	};
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-start-rsc@0.1.25_@vitejs+plugin-rsc@0.5.27_react-dom@19.2.6_react@19.2._87c6cd0836b02c60e324b73c35a7a1de/node_modules/@tanstack/react-start-rsc/dist/esm/ReplayableStream.js
var REPLAYABLE_STREAM_MARKER = Symbol.for("tanstack.rsc.ReplayableStream");
var ReplayableStream = class {
	constructor(source, options = {}) {
		this.source = source;
		this.options = options;
		this[REPLAYABLE_STREAM_MARKER] = true;
		this.chunks = [];
		this.done = false;
		this.error = null;
		this.waiter = null;
		this.aborted = false;
		this.released = false;
		this.sourceReader = null;
		this.abortListener = null;
		this.abortSignal = options.signal;
		this.start();
	}
	start() {
		const signal = this.abortSignal;
		if (signal?.aborted) {
			this.handleAbort();
			return;
		}
		const onAbort = () => this.handleAbort();
		this.abortListener = onAbort;
		signal?.addEventListener("abort", onAbort, { once: true });
		const reader = this.source.getReader();
		this.sourceReader = reader;
		const pump = async () => {
			try {
				while (!this.aborted && !this.released) {
					const { done, value } = await reader.read();
					if (done) break;
					if (this.aborted || this.released) break;
					this.chunks.push(value);
					this.notify();
				}
				this.done = true;
			} catch (err) {
				if (!this.aborted && !this.released) this.error = err;
				this.done = true;
			} finally {
				this.detachAbortListener();
				try {
					reader.releaseLock();
				} catch {}
				if (this.sourceReader === reader) this.sourceReader = null;
				this.notify();
			}
		};
		pump();
	}
	detachAbortListener() {
		const signal = this.abortSignal;
		const listener = this.abortListener;
		if (signal && listener) signal.removeEventListener("abort", listener);
		this.abortListener = null;
	}
	cancelSource(reason) {
		const reader = this.sourceReader;
		this.sourceReader = null;
		try {
			reader?.cancel(reason).catch(() => {});
		} catch {}
	}
	handleAbort() {
		if (this.aborted) return;
		this.aborted = true;
		this.done = true;
		const reason = this.abortSignal?.reason ?? /* @__PURE__ */ new Error("ReplayableStream aborted");
		this.detachAbortListener();
		this.abortSignal = void 0;
		this.cancelSource(reason);
		this.chunks = [];
		this.released = true;
		this.notify();
	}
	notify() {
		if (this.waiter) {
			this.waiter.resolve();
			this.waiter = null;
		}
	}
	wait() {
		if (this.done || this.released) return Promise.resolve();
		if (!this.waiter) this.waiter = Promise.withResolvers();
		return this.waiter.promise;
	}
	/**
	* Explicitly release buffered chunks.
	* Call this when you know no more replay streams will be created.
	* After calling release(), createReplayStream() will return empty streams.
	*/
	release() {
		if (this.released) return;
		this.released = true;
		this.chunks = [];
		this.detachAbortListener();
		this.abortSignal = void 0;
		this.cancelSource(/* @__PURE__ */ new Error("ReplayableStream released"));
		this.notify();
	}
	/**
	* Check if the stream data has been released
	*/
	isReleased() {
		return this.released;
	}
	/**
	* Create an independent replay stream. Each call returns a fresh reader
	* that starts from the beginning of the buffered data.
	*
	* If the stream has been released, returns a stream that closes immediately.
	*/
	createReplayStream() {
		if (this.released) return new ReadableStream({ start(controller) {
			controller.close();
		} });
		let index = 0;
		return new ReadableStream({
			pull: async (controller) => {
				while (true) {
					if (this.released) {
						controller.close();
						return;
					}
					if (index < this.chunks.length) {
						controller.enqueue(this.chunks[index++]);
						return;
					}
					if (this.done) {
						if (this.error && !this.aborted) controller.error(this.error);
						else controller.close();
						return;
					}
					await this.wait();
				}
			},
			cancel: () => {}
		});
	}
};
//#endregion
//#region node_modules/.pnpm/@tanstack+react-start-rsc@0.1.25_@vitejs+plugin-rsc@0.5.27_react-dom@19.2.6_react@19.2._87c6cd0836b02c60e324b73c35a7a1de/node_modules/@tanstack/react-start-rsc/dist/esm/renderServerComponent.js
/**
* Renders a React element to an RSC Flight stream.
*
* Returns a "renderable proxy" that can be:
* - Rendered directly as `{data}` in JSX
* - Accessed for nested selections: `{data.foo.bar.Hello}`
*
* No slot support - for slots use `createCompositeComponent`.
*
* @example
* ```tsx
* // In a loader or server function
* const data = await renderServerComponent(<MyServerComponent foo="bar" />)
*
* // In the route component
* return (
*   <div>
*     {data}
*     {data.sidebar.Menu}
*   </div>
* )
* ```
*/
async function renderServerComponent(node, options) {
	const flightStream = renderToReadableStream(createRscCssEnvelope(node, options));
	const isRouterRequest = getStartContext({ throwIfNotFound: false })?.handlerType === "router";
	const ssrHandler = globalThis.__RSC_SSR__;
	if (isRouterRequest && ssrHandler) {
		const signal = getRequest().signal;
		const stream = new ReplayableStream(flightStream, { signal });
		const decoded = await ssrHandler.decode(stream);
		return ssrHandler.createRenderableProxy(stream, decoded);
	}
	return createRenderableHandle(flightStream);
}
/**
* Creates a renderable handle for server function responses.
* Tagged with RENDERABLE_RSC for the serialization adapter.
*/
function createRenderableHandle(flightStream) {
	const streamWrapper = { createReplayStream: () => flightStream };
	const stub = function RenderableRscStub() {
		throw new Error("Renderable RSC from server function cannot be rendered on server. It should be serialized and sent to the client.");
	};
	stub[SERVER_COMPONENT_STREAM] = streamWrapper;
	stub[RENDERABLE_RSC] = true;
	return stub;
}
//#endregion
export { getRequestLocale as a, encode as c, formats_default as d, formatters as f, isNotFound as g, getClientConfig as h, tanstackServerAdapter as i, isBuffer as l, initI18n as m, initReq as n, O as o, getRequest as p, createPageRenderServerAdapter as r, parse as s, renderServerComponent as t, maybeMap as u };
