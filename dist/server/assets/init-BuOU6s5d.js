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
			result = (await import("./bg-D4Ym5run.js")).bg;
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
			result = (await import("./en-US-Cq5krUMX.js").then((n) => n.n)).enUS;
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
			result = (await import("./it-DO0tw_de.js")).it;
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
			result = (await import("./lv-BbM5Ixg2.js")).lv;
			break;
		case "nb":
			result = (await import("./nb-Cn6MdOc6.js")).nb;
			break;
		case "nl":
			result = (await import("./nl-C4WU-J6K.js")).nl;
			break;
		case "pl":
			result = (await import("./pl-BkR-1Nz_.js")).pl;
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
			result = (await import("./ru-G4KZD9EJ.js")).ru;
			break;
		case "sk":
			result = (await import("./sk-D6TcasLL.js")).sk;
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
			result = (await import("./uk-DKKuvg96.js")).uk;
			break;
		case "vi":
			result = (await import("./vi-akKQ-MG8.js")).vi;
			break;
		case "zh-CN":
			result = (await import("./zh-CN-BNPZ5MfZ.js")).zhCN;
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
*/ function deepMergeSimple(obj1, obj2) {
	const output = { ...obj1 };
	for (const key in obj2) {
		if (key === "__proto__" || key === "constructor" || key === "prototype") continue;
		if (Object.prototype.hasOwnProperty.call(obj2, key)) if (typeof obj2[key] === "object" && !Array.isArray(obj2[key]) && obj1[key]) output[key] = deepMergeSimple(obj1[key], obj2[key]);
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
	const mergedTranslations = language && config?.translations?.[language] ? deepMergeSimple(translations, config.translations[language]) : translations;
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
export { importDateFNSLocale as i, t as n, deepMergeSimple as r, initI18n as t };
