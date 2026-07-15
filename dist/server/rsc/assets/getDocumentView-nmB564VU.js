import { r as __toESM } from "./rolldown-runtime-DJK8HYOj.js";
import { a as require_react_react_server } from "./rsc-CrbjC1on.js";
import { h as getClientConfig } from "./index.rsc-CUDYWvAm.js";
import { At as VersionFieldDiffTabs, Bt as RenderServerComponent, C as DefaultVersionView, Ct as VersionFieldDiffCheckbox, Dt as VersionFieldDiffIterable, Et as VersionFieldDiffGroup, Ft as VersionsIDCell, H as ListQueryProvider, Lt as VersionsViewClient, Mt as VersionPillLabel, Nt as VersionsAutosaveCell, Ot as VersionFieldDiffRow, Pt as VersionsCreatedAtCell, St as VersionDrawerCreatedAtCell, Tt as VersionFieldDiffDate, Vt as require_jsx_runtime_react_server, at as RenderVersionFieldsToDiff, dt as SetDocumentStepNav, gt as SortColumn, i as APIViewClient, jt as VersionFieldDiffText, kt as VersionFieldDiffSelect, r as dequal, wt as VersionFieldDiffCollapsible, y as DefaultEditView } from "./upsertPreferences-BTcoIMIB.js";
import { t as getTranslation } from "./getTranslation-Dh_N5Etc.js";
import { i as getClientSchemaMap, n as UnauthorizedViewWithGutter, r as getSchemaMap } from "./Unauthorized-DalNEOGT.js";
import { a as constructFrom, i as toDate, n as startOfWeek, o as millisecondsInDay, r as getDefaultOptions, s as millisecondsInWeek, t as normalizeDates } from "./normalizeDates-KFFM8Zq9.js";
import { t as enUS } from "./en-US-Bn8BToYI.js";
import assetsManifest from "../__vite_rsc_assets_manifest.js";
import { fieldAffectsData, fieldIsID, fieldIsPresentationalOnly, fieldShouldBeLocalized, flattenTopLevelFields, formatAdminURL, getFieldPaths, getUniqueListBy, hasDraftsEnabled, isNumber, tabHasName } from "payload/shared";
import { MissingEditorProp, logError } from "payload";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/FieldDiffLabel/index.js
var import_jsx_runtime_react_server = require_jsx_runtime_react_server();
var import_react_react_server = /* @__PURE__ */ __toESM(require_react_react_server(), 1);
var baseClass$5 = "field-diff-label";
var FieldDiffLabel = ({ children }) => /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
	className: baseClass$5,
	children
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/FieldDiffContainer/index.js
var baseClass$4 = "field-diff";
var gutterOffset = 6.5;
var FieldDiffContainer = (args) => {
	const { className, From, i18n, label: { label, locale }, nestingLevel = 0, To } = args;
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: `${baseClass$4}-container${className ? ` ${className}` : ""} nested-level-${nestingLevel}`,
		children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(FieldDiffLabel, { children: [locale && /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("span", {
			className: `${baseClass$4}__locale-label`,
			children: locale
		}), label !== false && typeof label !== "function" && getTranslation(label || "", i18n)] }), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("div", {
			className: `${baseClass$4}-content`,
			style: nestingLevel ? { "--field-diff-columns": `calc(50% - ${nestingLevel * gutterOffset}px) calc(50% + ${nestingLevel * gutterOffset}px)` } : void 0,
			children: [From, To]
		})]
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/HTMLDiff/diff/index.js
var htmlStartTagReg = /^<(?<name>[^\s/>]+)[^>]*>$/;
var htmlTagWithNameReg = /^<(?<isEnd>\/)?(?<name>[^\s>]+)[^>]*>$/;
var htmlTagReg = /^<[^>]+>/;
var htmlImgTagReg = /^<img[^>]*>$/;
var htmlVideoTagReg = /^<video[^>]*>.*?<\/video>$/ms;
var HtmlDiff = class {
	config;
	leastCommonLength = Infinity;
	matchedBlockList = [];
	newTokens = [];
	oldTokens = [];
	operationList = [];
	sideBySideContents;
	unifiedContent;
	constructor(oldHtml, newHtml, { classNames = {
		createBlock: "html-diff-create-block-wrapper",
		createInline: "html-diff-create-inline-wrapper",
		deleteBlock: "html-diff-delete-block-wrapper",
		deleteInline: "html-diff-delete-inline-wrapper"
	}, greedyBoundary = 1e3, greedyMatch = true, minMatchedSize = 2, tokenizeByCharacter = false } = {}) {
		this.config = {
			classNames: {
				createBlock: "html-diff-create-block-wrapper",
				createInline: "html-diff-create-inline-wrapper",
				deleteBlock: "html-diff-delete-block-wrapper",
				deleteInline: "html-diff-delete-inline-wrapper",
				...classNames
			},
			greedyBoundary,
			greedyMatch,
			minMatchedSize
		};
		oldHtml = oldHtml.trim();
		newHtml = newHtml.trim();
		if (oldHtml === newHtml) {
			this.unifiedContent = oldHtml;
			let equalSequence = 0;
			const content = oldHtml.replace(/<([^\s/>]+)[^>]*>/g, (match, name) => {
				const tagNameLength = name.length + 1;
				return `${match.slice(0, tagNameLength)} data-seq="${++equalSequence}"${match.slice(tagNameLength)}`;
			});
			this.sideBySideContents = [content, content];
			return;
		}
		const tokenizeFn = tokenizeByCharacter ? this.tokenizeByCharacter : this.tokenizeByWord;
		this.oldTokens = tokenizeFn(oldHtml);
		this.newTokens = tokenizeFn(newHtml);
		this.matchedBlockList = this.getMatchedBlockList();
		this.operationList = this.getOperationList();
	}
	computeBestMatchedBlock(oldStart, oldEnd, newStart, newEnd) {
		let bestMatchedBlock = null;
		for (let i = oldStart; i < oldEnd; i++) {
			const len = Math.min(oldEnd - i, newEnd - newStart);
			const ret = this.slideBestMatchedBlock(i, newStart, len);
			if (ret && (!bestMatchedBlock || ret.size > bestMatchedBlock.size)) {
				bestMatchedBlock = ret;
				if (ret.size > this.leastCommonLength) return bestMatchedBlock;
			}
		}
		for (let j = newStart; j < newEnd; j++) {
			const len = Math.min(oldEnd - oldStart, newEnd - j);
			const ret = this.slideBestMatchedBlock(oldStart, j, len);
			if (ret && (!bestMatchedBlock || ret.size > bestMatchedBlock.size)) {
				bestMatchedBlock = ret;
				if (ret.size > this.leastCommonLength) return bestMatchedBlock;
			}
		}
		return bestMatchedBlock;
	}
	computeMatchedBlockList(oldStart, oldEnd, newStart, newEnd, matchedBlockList = []) {
		const matchBlock = this.computeBestMatchedBlock(oldStart, oldEnd, newStart, newEnd);
		if (!matchBlock) return [];
		if (oldStart < matchBlock.oldStart && newStart < matchBlock.newStart) this.computeMatchedBlockList(oldStart, matchBlock.oldStart, newStart, matchBlock.newStart, matchedBlockList);
		matchedBlockList.push(matchBlock);
		if (oldEnd > matchBlock.oldEnd && newEnd > matchBlock.newEnd) this.computeMatchedBlockList(matchBlock.oldEnd, oldEnd, matchBlock.newEnd, newEnd, matchedBlockList);
		return matchedBlockList;
	}
	dressUpBlockTag(type, token) {
		if (type === "create") return `<div class="${this.config.classNames.createBlock}">${token}</div>`;
		if (type === "delete") return `<div class="${this.config.classNames.deleteBlock}">${token}</div>`;
		return "";
	}
	dressUpDiffContent(type, tokens) {
		const tokensLength = tokens.length;
		if (!tokensLength) return "";
		let result = "";
		let textStartIndex = 0;
		let i = -1;
		for (const token of tokens) {
			i++;
			const isMatchElement = token.includes("data-enable-match=\"true\"");
			const isMatchExplicitlyDisabled = token.includes("data-enable-match=\"false\"");
			const isHtmlTag = !!token.match(htmlTagReg)?.length;
			if (isMatchExplicitlyDisabled) {
				textStartIndex = i + 1;
				result += token;
			} else if (!isMatchElement && isHtmlTag) {
				if (i > textStartIndex) result += this.dressUpText(type, tokens.slice(textStartIndex, i));
				textStartIndex = i + 1;
				if (token.match(htmlVideoTagReg)) result += this.dressUpBlockTag(type, token);
				else result += token;
			} else if (isMatchElement && isHtmlTag) {
				if (i > textStartIndex) result += this.dressUpText(type, tokens.slice(textStartIndex, i));
				textStartIndex = i + 1;
				const newToken = this.dressupMatchEnabledHtmlTag(type, token);
				result += newToken;
			}
		}
		if (textStartIndex < tokensLength) result += this.dressUpText(type, tokens.slice(textStartIndex));
		return result;
	}
	dressUpInlineTag(type, token) {
		if (type === "create") return `<span class="${this.config.classNames.createInline}">${token}</span>`;
		if (type === "delete") return `<span class="${this.config.classNames.deleteInline}">${token}</span>`;
		return "";
	}
	dressupMatchEnabledHtmlTag(type, token) {
		const tagName = token.match(htmlStartTagReg)?.groups?.name;
		if (!tagName) return token;
		const tagNameLength = tagName.length + 1;
		const matchType = type === "create" ? "create" : "delete";
		return `${token.slice(0, tagNameLength)} data-match-type="${matchType}"${token.slice(tagNameLength, token.length)}`;
	}
	dressUpText(type, tokens) {
		const text = tokens.join("");
		if (!text.trim()) return "";
		if (type === "create") return `<span data-match-type="create">${text}</span>`;
		if (type === "delete") return `<span data-match-type="delete">${text}</span>`;
		return "";
	}
	/**
	* Generates a list of token entries that are matched between the old and new HTML. This list will not
	* include token ranges that differ.
	*/
	getMatchedBlockList() {
		const n1 = this.oldTokens.length;
		const n2 = this.newTokens.length;
		let start = null;
		let i = 0;
		while (i < n1 && i < n2 && this.oldTokens[i] === this.newTokens[i]) i++;
		if (i >= this.config.minMatchedSize) start = {
			newEnd: i,
			newStart: 0,
			oldEnd: i,
			oldStart: 0,
			size: i
		};
		let end = null;
		let e1 = n1 - 1;
		let e2 = n2 - 1;
		while (i <= e1 && i <= e2 && this.oldTokens[e1] === this.newTokens[e2]) {
			e1--;
			e2--;
		}
		const size = n1 - 1 - e1;
		if (size >= this.config.minMatchedSize) end = {
			newEnd: n2,
			newStart: e2 + 1,
			oldEnd: n1,
			oldStart: e1 + 1,
			size
		};
		const oldStart = start ? i : 0;
		const oldEnd = end ? e1 + 1 : n1;
		const newStart = start ? i : 0;
		const newEnd = end ? e2 + 1 : n2;
		if (this.config.greedyMatch) {
			const commonLength = Math.min(oldEnd - oldStart, newEnd - newStart);
			if (commonLength > this.config.greedyBoundary) this.leastCommonLength = Math.floor(commonLength / 3);
		}
		const ret = this.computeMatchedBlockList(oldStart, oldEnd, newStart, newEnd);
		if (start) ret.unshift(start);
		if (end) ret.push(end);
		return ret;
	}
	getOperationList() {
		const operationList = [];
		let walkIndexOld = 0;
		let walkIndexNew = 0;
		for (const matchedBlock of this.matchedBlockList) {
			const isOldStartIndexMatched = walkIndexOld === matchedBlock.oldStart;
			const isNewStartIndexMatched = walkIndexNew === matchedBlock.newStart;
			const operationBase = {
				newEnd: matchedBlock.newStart,
				newStart: walkIndexNew,
				oldEnd: matchedBlock.oldStart,
				oldStart: walkIndexOld
			};
			if (!isOldStartIndexMatched && !isNewStartIndexMatched) operationList.push(Object.assign(operationBase, { type: "replace" }));
			else if (isOldStartIndexMatched && !isNewStartIndexMatched) operationList.push(Object.assign(operationBase, { type: "create" }));
			else if (!isOldStartIndexMatched && isNewStartIndexMatched) operationList.push(Object.assign(operationBase, { type: "delete" }));
			operationList.push({
				type: "equal",
				newEnd: matchedBlock.newEnd,
				newStart: matchedBlock.newStart,
				oldEnd: matchedBlock.oldEnd,
				oldStart: matchedBlock.oldStart
			});
			walkIndexOld = matchedBlock.oldEnd;
			walkIndexNew = matchedBlock.newEnd;
		}
		const maxIndexOld = this.oldTokens.length;
		const maxIndexNew = this.newTokens.length;
		const tailOperationBase = {
			newEnd: maxIndexNew,
			newStart: walkIndexNew,
			oldEnd: maxIndexOld,
			oldStart: walkIndexOld
		};
		const isOldFinished = walkIndexOld === maxIndexOld;
		const isNewFinished = walkIndexNew === maxIndexNew;
		if (!isOldFinished && !isNewFinished) operationList.push(Object.assign(tailOperationBase, { type: "replace" }));
		else if (isOldFinished && !isNewFinished) operationList.push(Object.assign(tailOperationBase, { type: "create" }));
		else if (!isOldFinished && isNewFinished) operationList.push(Object.assign(tailOperationBase, { type: "delete" }));
		return operationList;
	}
	slideBestMatchedBlock(addA, addB, len) {
		let maxSize = 0;
		let bestMatchedBlock = null;
		let continuousSize = 0;
		for (let i = 0; i < len; i++) {
			if (this.oldTokens[addA + i] === this.newTokens[addB + i]) continuousSize++;
			else continuousSize = 0;
			if (continuousSize > maxSize) {
				maxSize = continuousSize;
				bestMatchedBlock = {
					newEnd: addB + i + 1,
					newStart: addB + i - continuousSize + 1,
					oldEnd: addA + i + 1,
					oldStart: addA + i - continuousSize + 1,
					size: continuousSize
				};
			}
		}
		return maxSize >= this.config.minMatchedSize ? bestMatchedBlock : null;
	}
	/**
	* Convert HTML to tokens at character level, preserving HTML tags as complete tokens
	* @example
	* tokenize("<a> Hello World </a>")
	* ["<a>", " ", "H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", " ", "</a>"]
	*/
	tokenizeByCharacter(html) {
		const tokens = [];
		let currentPos = 0;
		const tagRegex = /<picture[^>]*>.*?<\/picture>|<video[^>]*>.*?<\/video>|<[^>]+>/gs;
		let match;
		while ((match = tagRegex.exec(html)) !== null) {
			const beforeTag = html.substring(currentPos, match.index);
			if (beforeTag) for (const char of beforeTag) tokens.push(char);
			tokens.push(match[0]);
			currentPos = match.index + match[0].length;
		}
		const remaining = html.substring(currentPos);
		for (const char of remaining) tokens.push(char);
		return tokens;
	}
	/**
	* convert HTML to tokens
	* @example
	* tokenize("<a> Hello World </a>")
	* ["<a>"," ", "Hello", " ", "World", " ", "</a>"]
	*/
	tokenizeByWord(html) {
		return html.match(/<picture[^>]*>.*?<\/picture>|<video[^>]*>.*?<\/video>|<[^>]+>|\w+\b|\s+|[^<>\w]/gs) || [];
	}
	getSideBySideContents() {
		if (this.sideBySideContents !== void 0) return this.sideBySideContents;
		let oldHtml = "";
		let newHtml = "";
		let equalSequence = 0;
		this.operationList.forEach((operation) => {
			switch (operation.type) {
				case "create":
					newHtml += this.dressUpDiffContent("create", this.newTokens.slice(operation.newStart, operation.newEnd));
					break;
				case "delete": {
					const deletedTokens = this.oldTokens.slice(operation.oldStart, operation.oldEnd);
					oldHtml += this.dressUpDiffContent("delete", deletedTokens);
					break;
				}
				case "equal": {
					const equalTokens = this.newTokens.slice(operation.newStart, operation.newEnd);
					let equalString = "";
					for (const token of equalTokens) {
						const startTagMatch = token.match(htmlStartTagReg);
						if (startTagMatch) {
							equalSequence += 1;
							const tagNameLength = (startTagMatch?.groups?.name?.length ?? 0) + 1;
							equalString += `${token.slice(0, tagNameLength)} data-seq="${equalSequence}"${token.slice(tagNameLength)}`;
						} else equalString += token;
					}
					oldHtml += equalString;
					newHtml += equalString;
					break;
				}
				case "replace":
					oldHtml += this.dressUpDiffContent("delete", this.oldTokens.slice(operation.oldStart, operation.oldEnd));
					newHtml += this.dressUpDiffContent("create", this.newTokens.slice(operation.newStart, operation.newEnd));
					break;
				default: console.error("Richtext diff error - invalid operation: " + String(operation.type));
			}
		});
		const result = [oldHtml, newHtml];
		this.sideBySideContents = result;
		return result;
	}
	getUnifiedContent() {
		if (this.unifiedContent !== void 0) return this.unifiedContent;
		let result = "";
		this.operationList.forEach((operation) => {
			switch (operation.type) {
				case "create":
					result += this.dressUpDiffContent("create", this.newTokens.slice(operation.newStart, operation.newEnd));
					break;
				case "delete":
					result += this.dressUpDiffContent("delete", this.oldTokens.slice(operation.oldStart, operation.oldEnd));
					break;
				case "equal":
					for (const token of this.newTokens.slice(operation.newStart, operation.newEnd)) result += token;
					break;
				case "replace": {
					const olds = this.oldTokens.slice(operation.oldStart, operation.oldEnd);
					const news = this.newTokens.slice(operation.newStart, operation.newEnd);
					if (olds.length === 1 && news.length === 1 && olds[0]?.match(htmlTagReg) && news[0]?.match(htmlTagReg)) {
						result += news[0];
						break;
					}
					const deletedTokens = [];
					const createdTokens = [];
					let createIndex = operation.newStart;
					for (let deleteIndex = operation.oldStart; deleteIndex < operation.oldEnd; deleteIndex++) {
						const deletedToken = this.oldTokens[deleteIndex];
						if (!deletedToken) continue;
						const matchTagResultD = deletedToken?.match(htmlTagWithNameReg);
						if (matchTagResultD) {
							if ([htmlImgTagReg, htmlVideoTagReg].some((item) => deletedToken?.match(item))) {
								deletedTokens.push(deletedToken);
								continue;
							}
							result += this.dressUpDiffContent("delete", deletedTokens);
							deletedTokens.splice(0);
							let isTagInNewFind = false;
							for (let tempCreateIndex = createIndex; tempCreateIndex < operation.newEnd; tempCreateIndex++) {
								const createdToken = this.newTokens[tempCreateIndex];
								if (!createdToken) continue;
								const matchTagResultC = createdToken?.match(htmlTagWithNameReg);
								if (matchTagResultC && matchTagResultC.groups?.name === matchTagResultD.groups?.name && matchTagResultC.groups?.isEnd === matchTagResultD.groups?.isEnd) {
									isTagInNewFind = true;
									result += this.dressUpDiffContent("create", createdTokens);
									result += createdToken;
									createdTokens.splice(0);
									createIndex = tempCreateIndex + 1;
									break;
								} else createdTokens.push(createdToken);
							}
							if (!isTagInNewFind) {
								result += deletedToken;
								createdTokens.splice(0);
							}
						} else deletedTokens.push(deletedToken);
					}
					if (createIndex < operation.newEnd) createdTokens.push(...this.newTokens.slice(createIndex, operation.newEnd));
					result += this.dressUpDiffContent("delete", deletedTokens);
					result += this.dressUpDiffContent("create", createdTokens);
					break;
				}
				default: console.error("Richtext diff error - invalid operation: " + String(operation.type));
			}
		});
		this.unifiedContent = result;
		return result;
	}
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/HTMLDiff/index.js
var baseClass$3 = "html-diff";
var getHTMLDiffComponents = ({ fromHTML, postProcess, toHTML, tokenizeByCharacter }) => {
	let [oldHTML, newHTML] = new HtmlDiff(fromHTML, toHTML, { tokenizeByCharacter }).getSideBySideContents();
	if (postProcess) {
		oldHTML = postProcess(oldHTML);
		newHTML = postProcess(newHTML);
	}
	return {
		From: oldHTML ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
			className: `${baseClass$3}__diff-old html-diff`,
			dangerouslySetInnerHTML: { __html: oldHTML }
		}) : null,
		To: newHTML ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
			className: `${baseClass$3}__diff-new html-diff`,
			dangerouslySetInnerHTML: { __html: newHTML }
		}) : null
	};
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/graphics/File/index.js
var File = () => /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("svg", {
	height: "150",
	style: { backgroundColor: "#333333" },
	viewBox: "0 0 150 150",
	width: "150",
	xmlns: "http://www.w3.org/2000/svg",
	children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("path", {
		d: "M82.8876 50.5H55.5555V100.5H94.4444V61.9818H82.8876V50.5Z",
		fill: "white"
	}), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("path", {
		d: "M82.8876 61.9818H94.4444L82.8876 50.5V61.9818Z",
		fill: "#9A9A9A"
	})]
});
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfISOWeek.js
/**
* The {@link startOfISOWeek} function options.
*/
/**
* @name startOfISOWeek
* @category ISO Week Helpers
* @summary Return the start of an ISO week for the given date.
*
* @description
* Return the start of an ISO week for the given date.
* The result will be in the local timezone.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of an ISO week
*
* @example
* // The start of an ISO week for 2 September 2014 11:55:00:
* const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
* //=> Mon Sep 01 2014 00:00:00
*/
function startOfISOWeek(date, options) {
	return startOfWeek(date, {
		...options,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getISOWeekYear.js
/**
* The {@link getISOWeekYear} function options.
*/
/**
* @name getISOWeekYear
* @category ISO Week-Numbering Year Helpers
* @summary Get the ISO week-numbering year of the given date.
*
* @description
* Get the ISO week-numbering year of the given date,
* which always starts 3 days before the year's first Thursday.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @param date - The given date
*
* @returns The ISO week-numbering year
*
* @example
* // Which ISO-week numbering year is 2 January 2005?
* const result = getISOWeekYear(new Date(2005, 0, 2))
* //=> 2004
*/
function getISOWeekYear(date, options) {
	const _date = toDate(date, options?.in);
	const year = _date.getFullYear();
	const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
	fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
	fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
	const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
	const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
	fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
	fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
	const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
	if (_date.getTime() >= startOfNextYear.getTime()) return year + 1;
	else if (_date.getTime() >= startOfThisYear.getTime()) return year;
	else return year - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
/**
* Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
* They usually appear for dates that denote time before the timezones were introduced
* (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
* and GMT+01:00:00 after that date)
*
* Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
* which would lead to incorrect calculations.
*
* This function returns the timezone offset in milliseconds that takes seconds in account.
*/
function getTimezoneOffsetInMilliseconds(date) {
	const _date = toDate(date);
	const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
	utcDate.setUTCFullYear(_date.getFullYear());
	return +date - +utcDate;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfDay.js
/**
* The {@link startOfDay} function options.
*/
/**
* @name startOfDay
* @category Day Helpers
* @summary Return the start of a day for the given date.
*
* @description
* Return the start of a day for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - The options
*
* @returns The start of a day
*
* @example
* // The start of a day for 2 September 2014 11:55:00:
* const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 02 2014 00:00:00
*/
function startOfDay(date, options) {
	const _date = toDate(date, options?.in);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/differenceInCalendarDays.js
/**
* The {@link differenceInCalendarDays} function options.
*/
/**
* @name differenceInCalendarDays
* @category Day Helpers
* @summary Get the number of calendar days between the given dates.
*
* @description
* Get the number of calendar days between the given dates. This means that the times are removed
* from the dates and then the difference in days is calculated.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - The options object
*
* @returns The number of calendar days
*
* @example
* // How many calendar days are between
* // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
* const result = differenceInCalendarDays(
*   new Date(2012, 6, 2, 0, 0),
*   new Date(2011, 6, 2, 23, 0)
* )
* //=> 366
* // How many calendar days are between
* // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
* const result = differenceInCalendarDays(
*   new Date(2011, 6, 3, 0, 1),
*   new Date(2011, 6, 2, 23, 59)
* )
* //=> 1
*/
function differenceInCalendarDays(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	const laterStartOfDay = startOfDay(laterDate_);
	const earlierStartOfDay = startOfDay(earlierDate_);
	const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
	const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
	return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfISOWeekYear.js
/**
* The {@link startOfISOWeekYear} function options.
*/
/**
* @name startOfISOWeekYear
* @category ISO Week-Numbering Year Helpers
* @summary Return the start of an ISO week-numbering year for the given date.
*
* @description
* Return the start of an ISO week-numbering year,
* which always starts 3 days before the year's first Thursday.
* The result will be in the local timezone.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of an ISO week-numbering year
*
* @example
* // The start of an ISO week-numbering year for 2 July 2005:
* const result = startOfISOWeekYear(new Date(2005, 6, 2))
* //=> Mon Jan 03 2005 00:00:00
*/
function startOfISOWeekYear(date, options) {
	const year = getISOWeekYear(date, options);
	const fourthOfJanuary = constructFrom(options?.in || date, 0);
	fourthOfJanuary.setFullYear(year, 0, 4);
	fourthOfJanuary.setHours(0, 0, 0, 0);
	return startOfISOWeek(fourthOfJanuary);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isDate.js
/**
* @name isDate
* @category Common Helpers
* @summary Is the given value a date?
*
* @description
* Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
*
* @param value - The value to check
*
* @returns True if the given value is a date
*
* @example
* // For a valid date:
* const result = isDate(new Date())
* //=> true
*
* @example
* // For an invalid date:
* const result = isDate(new Date(NaN))
* //=> true
*
* @example
* // For some value:
* const result = isDate('2014-02-31')
* //=> false
*
* @example
* // For an object:
* const result = isDate({})
* //=> false
*/
function isDate(value) {
	return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js
/**
* @name isValid
* @category Common Helpers
* @summary Is the given date valid?
*
* @description
* Returns false if argument is Invalid Date and true otherwise.
* Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
* Invalid Date is a Date, whose time value is NaN.
*
* Time value of Date: http://es5.github.io/#x15.9.1.1
*
* @param date - The date to check
*
* @returns The date is valid
*
* @example
* // For the valid date:
* const result = isValid(new Date(2014, 1, 31))
* //=> true
*
* @example
* // For the value, convertible into a date:
* const result = isValid(1393804800000)
* //=> true
*
* @example
* // For the invalid date:
* const result = isValid(new Date(''))
* //=> false
*/
function isValid(date) {
	return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfYear.js
/**
* The {@link startOfYear} function options.
*/
/**
* @name startOfYear
* @category Year Helpers
* @summary Return the start of a year for the given date.
*
* @description
* Return the start of a year for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - The options
*
* @returns The start of a year
*
* @example
* // The start of a year for 2 September 2014 11:55:00:
* const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
* //=> Wed Jan 01 2014 00:00:00
*/
function startOfYear(date, options) {
	const date_ = toDate(date, options?.in);
	date_.setFullYear(date_.getFullYear(), 0, 1);
	date_.setHours(0, 0, 0, 0);
	return date_;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getDayOfYear.js
/**
* The {@link getDayOfYear} function options.
*/
/**
* @name getDayOfYear
* @category Day Helpers
* @summary Get the day of the year of the given date.
*
* @description
* Get the day of the year of the given date.
*
* @param date - The given date
* @param options - The options
*
* @returns The day of year
*
* @example
* // Which day of the year is 2 July 2014?
* const result = getDayOfYear(new Date(2014, 6, 2))
* //=> 183
*/
function getDayOfYear(date, options) {
	const _date = toDate(date, options?.in);
	return differenceInCalendarDays(_date, startOfYear(_date)) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getISOWeek.js
/**
* The {@link getISOWeek} function options.
*/
/**
* @name getISOWeek
* @category ISO Week Helpers
* @summary Get the ISO week of the given date.
*
* @description
* Get the ISO week of the given date.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @param date - The given date
* @param options - The options
*
* @returns The ISO week
*
* @example
* // Which week of the ISO-week numbering year is 2 January 2005?
* const result = getISOWeek(new Date(2005, 0, 2))
* //=> 53
*/
function getISOWeek(date, options) {
	const _date = toDate(date, options?.in);
	const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
	return Math.round(diff / millisecondsInWeek) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getWeekYear.js
/**
* The {@link getWeekYear} function options.
*/
/**
* @name getWeekYear
* @category Week-Numbering Year Helpers
* @summary Get the local week-numbering year of the given date.
*
* @description
* Get the local week-numbering year of the given date.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @param date - The given date
* @param options - An object with options.
*
* @returns The local week-numbering year
*
* @example
* // Which week numbering year is 26 December 2004 with the default settings?
* const result = getWeekYear(new Date(2004, 11, 26))
* //=> 2005
*
* @example
* // Which week numbering year is 26 December 2004 if week starts on Saturday?
* const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
* //=> 2004
*
* @example
* // Which week numbering year is 26 December 2004 if the first week contains 4 January?
* const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
* //=> 2004
*/
function getWeekYear(date, options) {
	const _date = toDate(date, options?.in);
	const year = _date.getFullYear();
	const defaultOptions = getDefaultOptions();
	const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
	const firstWeekOfNextYear = constructFrom(options?.in || date, 0);
	firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
	firstWeekOfNextYear.setHours(0, 0, 0, 0);
	const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
	const firstWeekOfThisYear = constructFrom(options?.in || date, 0);
	firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
	firstWeekOfThisYear.setHours(0, 0, 0, 0);
	const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
	if (+_date >= +startOfNextYear) return year + 1;
	else if (+_date >= +startOfThisYear) return year;
	else return year - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfWeekYear.js
/**
* The {@link startOfWeekYear} function options.
*/
/**
* @name startOfWeekYear
* @category Week-Numbering Year Helpers
* @summary Return the start of a local week-numbering year for the given date.
*
* @description
* Return the start of a local week-numbering year.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a week-numbering year
*
* @example
* // The start of an a week-numbering year for 2 July 2005 with default settings:
* const result = startOfWeekYear(new Date(2005, 6, 2))
* //=> Sun Dec 26 2004 00:00:00
*
* @example
* // The start of a week-numbering year for 2 July 2005
* // if Monday is the first day of week
* // and 4 January is always in the first week of the year:
* const result = startOfWeekYear(new Date(2005, 6, 2), {
*   weekStartsOn: 1,
*   firstWeekContainsDate: 4
* })
* //=> Mon Jan 03 2005 00:00:00
*/
function startOfWeekYear(date, options) {
	const defaultOptions = getDefaultOptions();
	const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
	const year = getWeekYear(date, options);
	const firstWeek = constructFrom(options?.in || date, 0);
	firstWeek.setFullYear(year, 0, firstWeekContainsDate);
	firstWeek.setHours(0, 0, 0, 0);
	return startOfWeek(firstWeek, options);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getWeek.js
/**
* The {@link getWeek} function options.
*/
/**
* @name getWeek
* @category Week Helpers
* @summary Get the local week index of the given date.
*
* @description
* Get the local week index of the given date.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @param date - The given date
* @param options - An object with options
*
* @returns The week
*
* @example
* // Which week of the local week numbering year is 2 January 2005 with default options?
* const result = getWeek(new Date(2005, 0, 2))
* //=> 2
*
* @example
* // Which week of the local week numbering year is 2 January 2005,
* // if Monday is the first day of the week,
* // and the first week of the year always contains 4 January?
* const result = getWeek(new Date(2005, 0, 2), {
*   weekStartsOn: 1,
*   firstWeekContainsDate: 4
* })
* //=> 53
*/
function getWeek(date, options) {
	const _date = toDate(date, options?.in);
	const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
	return Math.round(diff / millisecondsInWeek) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/addLeadingZeros.js
function addLeadingZeros(number, targetLength) {
	return (number < 0 ? "-" : "") + Math.abs(number).toString().padStart(targetLength, "0");
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/format/lightFormatters.js
var lightFormatters = {
	y(date, token) {
		const signedYear = date.getFullYear();
		const year = signedYear > 0 ? signedYear : 1 - signedYear;
		return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
	},
	M(date, token) {
		const month = date.getMonth();
		return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
	},
	d(date, token) {
		return addLeadingZeros(date.getDate(), token.length);
	},
	a(date, token) {
		const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
		switch (token) {
			case "a":
			case "aa": return dayPeriodEnumValue.toUpperCase();
			case "aaa": return dayPeriodEnumValue;
			case "aaaaa": return dayPeriodEnumValue[0];
			default: return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
		}
	},
	h(date, token) {
		return addLeadingZeros(date.getHours() % 12 || 12, token.length);
	},
	H(date, token) {
		return addLeadingZeros(date.getHours(), token.length);
	},
	m(date, token) {
		return addLeadingZeros(date.getMinutes(), token.length);
	},
	s(date, token) {
		return addLeadingZeros(date.getSeconds(), token.length);
	},
	S(date, token) {
		const numberOfDigits = token.length;
		const milliseconds = date.getMilliseconds();
		return addLeadingZeros(Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3)), token.length);
	}
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/format/formatters.js
var dayPeriodEnum = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
};
var formatters = {
	G: function(date, token, localize) {
		const era = date.getFullYear() > 0 ? 1 : 0;
		switch (token) {
			case "G":
			case "GG":
			case "GGG": return localize.era(era, { width: "abbreviated" });
			case "GGGGG": return localize.era(era, { width: "narrow" });
			default: return localize.era(era, { width: "wide" });
		}
	},
	y: function(date, token, localize) {
		if (token === "yo") {
			const signedYear = date.getFullYear();
			const year = signedYear > 0 ? signedYear : 1 - signedYear;
			return localize.ordinalNumber(year, { unit: "year" });
		}
		return lightFormatters.y(date, token);
	},
	Y: function(date, token, localize, options) {
		const signedWeekYear = getWeekYear(date, options);
		const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
		if (token === "YY") return addLeadingZeros(weekYear % 100, 2);
		if (token === "Yo") return localize.ordinalNumber(weekYear, { unit: "year" });
		return addLeadingZeros(weekYear, token.length);
	},
	R: function(date, token) {
		return addLeadingZeros(getISOWeekYear(date), token.length);
	},
	u: function(date, token) {
		return addLeadingZeros(date.getFullYear(), token.length);
	},
	Q: function(date, token, localize) {
		const quarter = Math.ceil((date.getMonth() + 1) / 3);
		switch (token) {
			case "Q": return String(quarter);
			case "QQ": return addLeadingZeros(quarter, 2);
			case "Qo": return localize.ordinalNumber(quarter, { unit: "quarter" });
			case "QQQ": return localize.quarter(quarter, {
				width: "abbreviated",
				context: "formatting"
			});
			case "QQQQQ": return localize.quarter(quarter, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.quarter(quarter, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	q: function(date, token, localize) {
		const quarter = Math.ceil((date.getMonth() + 1) / 3);
		switch (token) {
			case "q": return String(quarter);
			case "qq": return addLeadingZeros(quarter, 2);
			case "qo": return localize.ordinalNumber(quarter, { unit: "quarter" });
			case "qqq": return localize.quarter(quarter, {
				width: "abbreviated",
				context: "standalone"
			});
			case "qqqqq": return localize.quarter(quarter, {
				width: "narrow",
				context: "standalone"
			});
			default: return localize.quarter(quarter, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	M: function(date, token, localize) {
		const month = date.getMonth();
		switch (token) {
			case "M":
			case "MM": return lightFormatters.M(date, token);
			case "Mo": return localize.ordinalNumber(month + 1, { unit: "month" });
			case "MMM": return localize.month(month, {
				width: "abbreviated",
				context: "formatting"
			});
			case "MMMMM": return localize.month(month, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.month(month, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	L: function(date, token, localize) {
		const month = date.getMonth();
		switch (token) {
			case "L": return String(month + 1);
			case "LL": return addLeadingZeros(month + 1, 2);
			case "Lo": return localize.ordinalNumber(month + 1, { unit: "month" });
			case "LLL": return localize.month(month, {
				width: "abbreviated",
				context: "standalone"
			});
			case "LLLLL": return localize.month(month, {
				width: "narrow",
				context: "standalone"
			});
			default: return localize.month(month, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	w: function(date, token, localize, options) {
		const week = getWeek(date, options);
		if (token === "wo") return localize.ordinalNumber(week, { unit: "week" });
		return addLeadingZeros(week, token.length);
	},
	I: function(date, token, localize) {
		const isoWeek = getISOWeek(date);
		if (token === "Io") return localize.ordinalNumber(isoWeek, { unit: "week" });
		return addLeadingZeros(isoWeek, token.length);
	},
	d: function(date, token, localize) {
		if (token === "do") return localize.ordinalNumber(date.getDate(), { unit: "date" });
		return lightFormatters.d(date, token);
	},
	D: function(date, token, localize) {
		const dayOfYear = getDayOfYear(date);
		if (token === "Do") return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
		return addLeadingZeros(dayOfYear, token.length);
	},
	E: function(date, token, localize) {
		const dayOfWeek = date.getDay();
		switch (token) {
			case "E":
			case "EE":
			case "EEE": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "formatting"
			});
			case "EEEEE": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return localize.day(dayOfWeek, {
				width: "short",
				context: "formatting"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	e: function(date, token, localize, options) {
		const dayOfWeek = date.getDay();
		const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
		switch (token) {
			case "e": return String(localDayOfWeek);
			case "ee": return addLeadingZeros(localDayOfWeek, 2);
			case "eo": return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
			case "eee": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "formatting"
			});
			case "eeeee": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return localize.day(dayOfWeek, {
				width: "short",
				context: "formatting"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	c: function(date, token, localize, options) {
		const dayOfWeek = date.getDay();
		const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
		switch (token) {
			case "c": return String(localDayOfWeek);
			case "cc": return addLeadingZeros(localDayOfWeek, token.length);
			case "co": return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
			case "ccc": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "standalone"
			});
			case "ccccc": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return localize.day(dayOfWeek, {
				width: "short",
				context: "standalone"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	i: function(date, token, localize) {
		const dayOfWeek = date.getDay();
		const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
		switch (token) {
			case "i": return String(isoDayOfWeek);
			case "ii": return addLeadingZeros(isoDayOfWeek, token.length);
			case "io": return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
			case "iii": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "formatting"
			});
			case "iiiii": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "formatting"
			});
			case "iiiiii": return localize.day(dayOfWeek, {
				width: "short",
				context: "formatting"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	a: function(date, token, localize) {
		const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
		switch (token) {
			case "a":
			case "aa": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			});
			case "aaa": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "aaaaa": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.dayPeriod(dayPeriodEnumValue, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	b: function(date, token, localize) {
		const hours = date.getHours();
		let dayPeriodEnumValue;
		if (hours === 12) dayPeriodEnumValue = dayPeriodEnum.noon;
		else if (hours === 0) dayPeriodEnumValue = dayPeriodEnum.midnight;
		else dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
		switch (token) {
			case "b":
			case "bb": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			});
			case "bbb": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "bbbbb": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.dayPeriod(dayPeriodEnumValue, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	B: function(date, token, localize) {
		const hours = date.getHours();
		let dayPeriodEnumValue;
		if (hours >= 17) dayPeriodEnumValue = dayPeriodEnum.evening;
		else if (hours >= 12) dayPeriodEnumValue = dayPeriodEnum.afternoon;
		else if (hours >= 4) dayPeriodEnumValue = dayPeriodEnum.morning;
		else dayPeriodEnumValue = dayPeriodEnum.night;
		switch (token) {
			case "B":
			case "BB":
			case "BBB": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			});
			case "BBBBB": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.dayPeriod(dayPeriodEnumValue, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	h: function(date, token, localize) {
		if (token === "ho") {
			let hours = date.getHours() % 12;
			if (hours === 0) hours = 12;
			return localize.ordinalNumber(hours, { unit: "hour" });
		}
		return lightFormatters.h(date, token);
	},
	H: function(date, token, localize) {
		if (token === "Ho") return localize.ordinalNumber(date.getHours(), { unit: "hour" });
		return lightFormatters.H(date, token);
	},
	K: function(date, token, localize) {
		const hours = date.getHours() % 12;
		if (token === "Ko") return localize.ordinalNumber(hours, { unit: "hour" });
		return addLeadingZeros(hours, token.length);
	},
	k: function(date, token, localize) {
		let hours = date.getHours();
		if (hours === 0) hours = 24;
		if (token === "ko") return localize.ordinalNumber(hours, { unit: "hour" });
		return addLeadingZeros(hours, token.length);
	},
	m: function(date, token, localize) {
		if (token === "mo") return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
		return lightFormatters.m(date, token);
	},
	s: function(date, token, localize) {
		if (token === "so") return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
		return lightFormatters.s(date, token);
	},
	S: function(date, token) {
		return lightFormatters.S(date, token);
	},
	X: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		if (timezoneOffset === 0) return "Z";
		switch (token) {
			case "X": return formatTimezoneWithOptionalMinutes(timezoneOffset);
			case "XXXX":
			case "XX": return formatTimezone(timezoneOffset);
			default: return formatTimezone(timezoneOffset, ":");
		}
	},
	x: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		switch (token) {
			case "x": return formatTimezoneWithOptionalMinutes(timezoneOffset);
			case "xxxx":
			case "xx": return formatTimezone(timezoneOffset);
			default: return formatTimezone(timezoneOffset, ":");
		}
	},
	O: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		switch (token) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + formatTimezoneShort(timezoneOffset, ":");
			default: return "GMT" + formatTimezone(timezoneOffset, ":");
		}
	},
	z: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		switch (token) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + formatTimezoneShort(timezoneOffset, ":");
			default: return "GMT" + formatTimezone(timezoneOffset, ":");
		}
	},
	t: function(date, token, _localize) {
		return addLeadingZeros(Math.trunc(+date / 1e3), token.length);
	},
	T: function(date, token, _localize) {
		return addLeadingZeros(+date, token.length);
	}
};
function formatTimezoneShort(offset, delimiter = "") {
	const sign = offset > 0 ? "-" : "+";
	const absOffset = Math.abs(offset);
	const hours = Math.trunc(absOffset / 60);
	const minutes = absOffset % 60;
	if (minutes === 0) return sign + String(hours);
	return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
	if (offset % 60 === 0) return (offset > 0 ? "-" : "+") + addLeadingZeros(Math.abs(offset) / 60, 2);
	return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
	const sign = offset > 0 ? "-" : "+";
	const absOffset = Math.abs(offset);
	const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
	const minutes = addLeadingZeros(absOffset % 60, 2);
	return sign + hours + delimiter + minutes;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/format/longFormatters.js
var dateLongFormatter = (pattern, formatLong) => {
	switch (pattern) {
		case "P": return formatLong.date({ width: "short" });
		case "PP": return formatLong.date({ width: "medium" });
		case "PPP": return formatLong.date({ width: "long" });
		default: return formatLong.date({ width: "full" });
	}
};
var timeLongFormatter = (pattern, formatLong) => {
	switch (pattern) {
		case "p": return formatLong.time({ width: "short" });
		case "pp": return formatLong.time({ width: "medium" });
		case "ppp": return formatLong.time({ width: "long" });
		default: return formatLong.time({ width: "full" });
	}
};
var dateTimeLongFormatter = (pattern, formatLong) => {
	const matchResult = pattern.match(/(P+)(p+)?/) || [];
	const datePattern = matchResult[1];
	const timePattern = matchResult[2];
	if (!timePattern) return dateLongFormatter(pattern, formatLong);
	let dateTimeFormat;
	switch (datePattern) {
		case "P":
			dateTimeFormat = formatLong.dateTime({ width: "short" });
			break;
		case "PP":
			dateTimeFormat = formatLong.dateTime({ width: "medium" });
			break;
		case "PPP":
			dateTimeFormat = formatLong.dateTime({ width: "long" });
			break;
		default:
			dateTimeFormat = formatLong.dateTime({ width: "full" });
			break;
	}
	return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
	p: timeLongFormatter,
	P: dateTimeLongFormatter
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/protectedTokens.js
var dayOfYearTokenRE = /^D+$/;
var weekYearTokenRE = /^Y+$/;
var throwTokens = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function isProtectedDayOfYearToken(token) {
	return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
	return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
	const _message = message(token, format, input);
	console.warn(_message);
	if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format, input) {
	const subject = token[0] === "Y" ? "years" : "days of the month";
	return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
* The {@link format} function options.
*/
/**
* @name format
* @alias formatDate
* @category Common Helpers
* @summary Format the date.
*
* @description
* Return the formatted date string in the given format. The result may vary by locale.
*
* > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
* > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* The characters wrapped between two single quotes characters (') are escaped.
* Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
* (see the last example)
*
* Format of the string is based on Unicode Technical Standard #35:
* https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
* with a few additions (see note 7 below the table).
*
* Accepted patterns:
* | Unit                            | Pattern | Result examples                   | Notes |
* |---------------------------------|---------|-----------------------------------|-------|
* | Era                             | G..GGG  | AD, BC                            |       |
* |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
* |                                 | GGGGG   | A, B                              |       |
* | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
* |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
* |                                 | yy      | 44, 01, 00, 17                    | 5     |
* |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
* |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
* |                                 | yyyyy   | ...                               | 3,5   |
* | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
* |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
* |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
* |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
* |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
* |                                 | YYYYY   | ...                               | 3,5   |
* | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
* |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
* |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
* |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
* |                                 | RRRRR   | ...                               | 3,5,7 |
* | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
* |                                 | uu      | -43, 01, 1900, 2017               | 5     |
* |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
* |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
* |                                 | uuuuu   | ...                               | 3,5   |
* | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
* |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
* |                                 | QQ      | 01, 02, 03, 04                    |       |
* |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
* |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
* | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
* |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
* |                                 | qq      | 01, 02, 03, 04                    |       |
* |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
* |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
* | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
* |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
* |                                 | MM      | 01, 02, ..., 12                   |       |
* |                                 | MMM     | Jan, Feb, ..., Dec                |       |
* |                                 | MMMM    | January, February, ..., December  | 2     |
* |                                 | MMMMM   | J, F, ..., D                      |       |
* | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
* |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
* |                                 | LL      | 01, 02, ..., 12                   |       |
* |                                 | LLL     | Jan, Feb, ..., Dec                |       |
* |                                 | LLLL    | January, February, ..., December  | 2     |
* |                                 | LLLLL   | J, F, ..., D                      |       |
* | Local week of year              | w       | 1, 2, ..., 53                     |       |
* |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
* |                                 | ww      | 01, 02, ..., 53                   |       |
* | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
* |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
* |                                 | II      | 01, 02, ..., 53                   | 7     |
* | Day of month                    | d       | 1, 2, ..., 31                     |       |
* |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
* |                                 | dd      | 01, 02, ..., 31                   |       |
* | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
* |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
* |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
* |                                 | DDD     | 001, 002, ..., 365, 366           |       |
* |                                 | DDDD    | ...                               | 3     |
* | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
* |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
* |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
* |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
* |                                 | ii      | 01, 02, ..., 07                   | 7     |
* |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
* |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
* |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
* |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
* | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
* |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
* |                                 | ee      | 02, 03, ..., 01                   |       |
* |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | eeeee   | M, T, W, T, F, S, S               |       |
* |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
* |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
* |                                 | cc      | 02, 03, ..., 01                   |       |
* |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | ccccc   | M, T, W, T, F, S, S               |       |
* |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | AM, PM                          | a..aa   | AM, PM                            |       |
* |                                 | aaa     | am, pm                            |       |
* |                                 | aaaa    | a.m., p.m.                        | 2     |
* |                                 | aaaaa   | a, p                              |       |
* | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
* |                                 | bbb     | am, pm, noon, midnight            |       |
* |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
* |                                 | bbbbb   | a, p, n, mi                       |       |
* | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
* |                                 | BBBB    | at night, in the morning, ...     | 2     |
* |                                 | BBBBB   | at night, in the morning, ...     |       |
* | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
* |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
* |                                 | hh      | 01, 02, ..., 11, 12               |       |
* | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
* |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
* |                                 | HH      | 00, 01, 02, ..., 23               |       |
* | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
* |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
* |                                 | KK      | 01, 02, ..., 11, 00               |       |
* | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
* |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
* |                                 | kk      | 24, 01, 02, ..., 23               |       |
* | Minute                          | m       | 0, 1, ..., 59                     |       |
* |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
* |                                 | mm      | 00, 01, ..., 59                   |       |
* | Second                          | s       | 0, 1, ..., 59                     |       |
* |                                 | so      | 0th, 1st, ..., 59th               | 7     |
* |                                 | ss      | 00, 01, ..., 59                   |       |
* | Fraction of second              | S       | 0, 1, ..., 9                      |       |
* |                                 | SS      | 00, 01, ..., 99                   |       |
* |                                 | SSS     | 000, 001, ..., 999                |       |
* |                                 | SSSS    | ...                               | 3     |
* | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
* |                                 | XX      | -0800, +0530, Z                   |       |
* |                                 | XXX     | -08:00, +05:30, Z                 |       |
* |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
* |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
* | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
* |                                 | xx      | -0800, +0530, +0000               |       |
* |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
* |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
* |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
* | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
* |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
* | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
* |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
* | Seconds timestamp               | t       | 512969520                         | 7     |
* |                                 | tt      | ...                               | 3,7   |
* | Milliseconds timestamp          | T       | 512969520900                      | 7     |
* |                                 | TT      | ...                               | 3,7   |
* | Long localized date             | P       | 04/29/1453                        | 7     |
* |                                 | PP      | Apr 29, 1453                      | 7     |
* |                                 | PPP     | April 29th, 1453                  | 7     |
* |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
* | Long localized time             | p       | 12:00 AM                          | 7     |
* |                                 | pp      | 12:00:00 AM                       | 7     |
* |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
* |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
* | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
* |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
* |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
* |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
* Notes:
* 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
*    are the same as "stand-alone" units, but are different in some languages.
*    "Formatting" units are declined according to the rules of the language
*    in the context of a date. "Stand-alone" units are always nominative singular:
*
*    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
*
*    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
*
* 2. Any sequence of the identical letters is a pattern, unless it is escaped by
*    the single quote characters (see below).
*    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
*    the output will be the same as default pattern for this unit, usually
*    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
*    are marked with "2" in the last column of the table.
*
*    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
*
*    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
*
*    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
*
*    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
*
*    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
*
* 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
*    The output will be padded with zeros to match the length of the pattern.
*
*    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
*
* 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
*    These tokens represent the shortest form of the quarter.
*
* 5. The main difference between `y` and `u` patterns are B.C. years:
*
*    | Year | `y` | `u` |
*    |------|-----|-----|
*    | AC 1 |   1 |   1 |
*    | BC 1 |   1 |   0 |
*    | BC 2 |   2 |  -1 |
*
*    Also `yy` always returns the last two digits of a year,
*    while `uu` pads single digit years to 2 characters and returns other years unchanged:
*
*    | Year | `yy` | `uu` |
*    |------|------|------|
*    | 1    |   01 |   01 |
*    | 14   |   14 |   14 |
*    | 376  |   76 |  376 |
*    | 1453 |   53 | 1453 |
*
*    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
*    except local week-numbering years are dependent on `options.weekStartsOn`
*    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
*    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
*
* 6. Specific non-location timezones are currently unavailable in `date-fns`,
*    so right now these tokens fall back to GMT timezones.
*
* 7. These patterns are not in the Unicode Technical Standard #35:
*    - `i`: ISO day of week
*    - `I`: ISO week of year
*    - `R`: ISO week-numbering year
*    - `t`: seconds timestamp
*    - `T`: milliseconds timestamp
*    - `o`: ordinal number modifier
*    - `P`: long localized date
*    - `p`: long localized time
*
* 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
*    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
*    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* @param date - The original date
* @param format - The string of tokens
* @param options - An object with options
*
* @returns The formatted date string
*
* @throws `date` must not be Invalid Date
* @throws `options.locale` must contain `localize` property
* @throws `options.locale` must contain `formatLong` property
* @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws format string contains an unescaped latin alphabet character
*
* @example
* // Represent 11 February 2014 in middle-endian format:
* const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
* //=> '02/11/2014'
*
* @example
* // Represent 2 July 2014 in Esperanto:
* import { eoLocale } from 'date-fns/locale/eo'
* const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
*   locale: eoLocale
* })
* //=> '2-a de julio 2014'
*
* @example
* // Escape string by single quote characters:
* const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
* //=> "3 o'clock"
*/
function format(date, formatStr, options) {
	const defaultOptions = getDefaultOptions();
	const locale = options?.locale ?? defaultOptions.locale ?? enUS;
	const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	const originalDate = toDate(date, options?.in);
	if (!isValid(originalDate)) throw new RangeError("Invalid time value");
	let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
		const firstCharacter = substring[0];
		if (firstCharacter === "p" || firstCharacter === "P") {
			const longFormatter = longFormatters[firstCharacter];
			return longFormatter(substring, locale.formatLong);
		}
		return substring;
	}).join("").match(formattingTokensRegExp).map((substring) => {
		if (substring === "''") return {
			isToken: false,
			value: "'"
		};
		const firstCharacter = substring[0];
		if (firstCharacter === "'") return {
			isToken: false,
			value: cleanEscapedString(substring)
		};
		if (formatters[firstCharacter]) return {
			isToken: true,
			value: substring
		};
		if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
		return {
			isToken: false,
			value: substring
		};
	});
	if (locale.localize.preprocessor) parts = locale.localize.preprocessor(originalDate, parts);
	const formatterOptions = {
		firstWeekContainsDate,
		weekStartsOn,
		locale
	};
	return parts.map((part) => {
		if (!part.isToken) return part.value;
		const token = part.value;
		if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) warnOrThrowProtectedError(token, formatStr, String(date));
		const formatter = formatters[token[0]];
		return formatter(originalDate, token, locale.localize, formatterOptions);
	}).join("");
}
function cleanEscapedString(input) {
	const matched = input.match(escapedStringRegExp);
	if (!matched) return input;
	return matched[1].replace(doubleQuoteRegExp, "'");
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/transpose.js
/**
* @name transpose
* @category Generic Helpers
* @summary Transpose the date to the given constructor.
*
* @description
* The function transposes the date to the given constructor. It helps you
* to transpose the date in the system time zone to say `UTCDate` or any other
* date extension.
*
* @typeParam InputDate - The input `Date` type derived from the passed argument.
* @typeParam ResultDate - The result `Date` type derived from the passed constructor.
*
* @param date - The date to use values from
* @param constructor - The date constructor to use
*
* @returns Date transposed to the given constructor
*
* @example
* // Create July 10, 2022 00:00 in locale time zone
* const date = new Date(2022, 6, 10)
* //=> 'Sun Jul 10 2022 00:00:00 GMT+0800 (Singapore Standard Time)'
*
* @example
* // Transpose the date to July 10, 2022 00:00 in UTC
* transpose(date, UTCDate)
* //=> 'Sun Jul 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
*/
function transpose(date, constructor) {
	const date_ = isConstructor(constructor) ? new constructor(0) : constructFrom(constructor, 0);
	date_.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	date_.setHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
	return date_;
}
function isConstructor(constructor) {
	return typeof constructor === "function" && constructor.prototype?.constructor === constructor;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/API/index.js
function APIView(props) {
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(APIViewClient, {});
}
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.2.0/node_modules/@date-fns/tz/tzOffset/index.js
var offsetFormatCache = {};
var offsetCache = {};
/**
* The function extracts UTC offset in minutes from the given date in specified
* time zone.
*
* Unlike `Date.prototype.getTimezoneOffset`, this function returns the value
* mirrored to the sign of the offset in the time zone. For Asia/Singapore
* (UTC+8), `tzOffset` returns 480, while `getTimezoneOffset` returns -480.
*
* @param timeZone - Time zone name (IANA or UTC offset)
* @param date - Date to check the offset for
*
* @returns UTC offset in minutes
*/
function tzOffset(timeZone, date) {
	try {
		const offsetStr = (offsetFormatCache[timeZone] ||= new Intl.DateTimeFormat("en-GB", {
			timeZone,
			hour: "numeric",
			timeZoneName: "longOffset"
		}).format)(date).split("GMT")[1] || "";
		if (offsetStr in offsetCache) return offsetCache[offsetStr];
		return calcOffset(offsetStr, offsetStr.split(":"));
	} catch {
		if (timeZone in offsetCache) return offsetCache[timeZone];
		const captures = timeZone?.match(offsetRe);
		if (captures) return calcOffset(timeZone, captures.slice(1));
		return NaN;
	}
}
var offsetRe = /([+-]\d\d):?(\d\d)?/;
function calcOffset(cacheStr, values) {
	const hours = +values[0];
	const minutes = +(values[1] || 0);
	return offsetCache[cacheStr] = hours > 0 ? hours * 60 + minutes : hours * 60 - minutes;
}
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.2.0/node_modules/@date-fns/tz/date/mini.js
var TZDateMini = class TZDateMini extends Date {
	constructor(...args) {
		super();
		if (args.length > 1 && typeof args[args.length - 1] === "string") this.timeZone = args.pop();
		this.internal = /* @__PURE__ */ new Date();
		if (isNaN(tzOffset(this.timeZone, this))) this.setTime(NaN);
		else if (!args.length) this.setTime(Date.now());
		else if (typeof args[0] === "number" && (args.length === 1 || args.length === 2 && typeof args[1] !== "number")) this.setTime(args[0]);
		else if (typeof args[0] === "string") this.setTime(+new Date(args[0]));
		else if (args[0] instanceof Date) this.setTime(+args[0]);
		else {
			this.setTime(+new Date(...args));
			adjustToSystemTZ(this, NaN);
			syncToInternal(this);
		}
	}
	static tz(tz, ...args) {
		return args.length ? new TZDateMini(...args, tz) : new TZDateMini(Date.now(), tz);
	}
	withTimeZone(timeZone) {
		return new TZDateMini(+this, timeZone);
	}
	getTimezoneOffset() {
		return -tzOffset(this.timeZone, this);
	}
	setTime(time) {
		Date.prototype.setTime.apply(this, arguments);
		syncToInternal(this);
		return +this;
	}
	[Symbol.for("constructDateFrom")](date) {
		return new TZDateMini(+new Date(date), this.timeZone);
	}
};
var re = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((method) => {
	if (!re.test(method)) return;
	const utcMethod = method.replace(re, "$1UTC");
	if (!TZDateMini.prototype[utcMethod]) return;
	if (method.startsWith("get")) TZDateMini.prototype[method] = function() {
		return this.internal[utcMethod]();
	};
	else {
		TZDateMini.prototype[method] = function() {
			Date.prototype[utcMethod].apply(this.internal, arguments);
			syncFromInternal(this);
			return +this;
		};
		TZDateMini.prototype[utcMethod] = function() {
			Date.prototype[utcMethod].apply(this, arguments);
			syncToInternal(this);
			return +this;
		};
	}
});
/**
* Function syncs time to internal date, applying the time zone offset.
*
* @param {Date} date - Date to sync
*/
function syncToInternal(date) {
	date.internal.setTime(+date);
	date.internal.setUTCMinutes(date.internal.getUTCMinutes() - date.getTimezoneOffset());
}
/**
* Function syncs the internal date UTC values to the date. It allows to get
* accurate timestamp value.
*
* @param {Date} date - The date to sync
*/
function syncFromInternal(date) {
	Date.prototype.setFullYear.call(date, date.internal.getUTCFullYear(), date.internal.getUTCMonth(), date.internal.getUTCDate());
	Date.prototype.setHours.call(date, date.internal.getUTCHours(), date.internal.getUTCMinutes(), date.internal.getUTCSeconds(), date.internal.getUTCMilliseconds());
	adjustToSystemTZ(date);
}
/**
* Function adjusts the date to the system time zone. It uses the time zone
* differences to calculate the offset and adjust the date.
*
* @param {Date} date - Date to adjust
*/
function adjustToSystemTZ(date) {
	const offset = tzOffset(date.timeZone, date);
	const prevHour = /* @__PURE__ */ new Date(+date);
	prevHour.setUTCHours(prevHour.getUTCHours() - 1);
	const systemOffset = -(/* @__PURE__ */ new Date(+date)).getTimezoneOffset();
	const systemDSTChange = systemOffset - -(/* @__PURE__ */ new Date(+prevHour)).getTimezoneOffset();
	const dstShift = Date.prototype.getHours.apply(date) !== date.internal.getUTCHours();
	if (systemDSTChange && dstShift) date.internal.setUTCMinutes(date.internal.getUTCMinutes() + systemDSTChange);
	const offsetDiff = systemOffset - offset;
	if (offsetDiff) Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + offsetDiff);
	const postOffset = tzOffset(date.timeZone, date);
	const postOffsetDiff = -(/* @__PURE__ */ new Date(+date)).getTimezoneOffset() - postOffset;
	const offsetChanged = postOffset !== offset;
	const postDiff = postOffsetDiff - offsetDiff;
	if (offsetChanged && postDiff) {
		Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + postDiff);
		const offsetChange = postOffset - tzOffset(date.timeZone, date);
		if (offsetChange) {
			date.internal.setUTCMinutes(date.internal.getUTCMinutes() + offsetChange);
			Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + offsetChange);
		}
	}
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/formatDocTitle/formatDateTitle.js
var formatDate = ({ date, i18n, pattern, timezone }) => {
	const theDate = new TZDateMini(new Date(date));
	if (timezone) {
		const DateWithOriginalTz = TZDateMini.tz(timezone);
		const dateWithTimezone = transpose(theDate.withTimeZone(timezone), DateWithOriginalTz);
		return i18n.dateFNS ? format(dateWithTimezone, pattern, { locale: i18n.dateFNS }) : `${i18n.t("general:loading")}...`;
	}
	return i18n.dateFNS ? format(theDate, pattern, { locale: i18n.dateFNS }) : `${i18n.t("general:loading")}...`;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Versions/fetchVersions.js
var fetchVersion = async ({ id, collectionSlug, depth, globalSlug, locale, overrideAccess, req, select, user }) => {
	try {
		if (collectionSlug) return await req.payload.findVersionByID({
			id: String(id),
			collection: collectionSlug,
			depth,
			locale,
			overrideAccess,
			req,
			select,
			user
		});
		else if (globalSlug) return await req.payload.findGlobalVersionByID({
			id: String(id),
			slug: globalSlug,
			depth,
			locale,
			overrideAccess,
			req,
			select,
			user
		});
	} catch (err) {
		logError({
			err,
			payload: req.payload
		});
		return null;
	}
};
var fetchVersions = async ({ collectionSlug, depth, draft, globalSlug, limit, locale, overrideAccess, page, parentID, req, select, sort, user, where: whereFromArgs }) => {
	const where = { and: [...whereFromArgs ? [whereFromArgs] : []] };
	try {
		if (collectionSlug) {
			if (parentID) where.and.push({ parent: { equals: parentID } });
			return await req.payload.findVersions({
				collection: collectionSlug,
				depth,
				draft,
				limit,
				locale,
				overrideAccess,
				page,
				req,
				select,
				sort,
				user,
				where
			});
		} else if (globalSlug) return await req.payload.findGlobalVersions({
			slug: globalSlug,
			depth,
			limit,
			locale,
			overrideAccess,
			page,
			req,
			select,
			sort,
			user,
			where
		});
	} catch (err) {
		logError({
			err,
			payload: req.payload
		});
		return null;
	}
};
var fetchLatestVersion = async ({ collectionSlug, depth, globalSlug, locale, overrideAccess, parentID, req, select, status, user, where }) => {
	const latest = await fetchVersions({
		collectionSlug,
		depth,
		draft: true,
		globalSlug,
		limit: 1,
		locale,
		overrideAccess,
		parentID,
		req,
		select,
		sort: "-updatedAt",
		user,
		where: { and: [...(collectionSlug ? req.payload.collections[collectionSlug]?.config : globalSlug ? req.payload.globals[globalSlug]?.config : void 0)?.versions?.drafts ? [{ "version._status": { equals: status } }] : [], ...where ? [where] : []] }
	});
	return latest?.docs?.length ? latest.docs[0] : null;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Versions/VersionPillLabel/getVersionLabel.js
/**
* Gets the appropriate version label and version pill styling
* given existing versions and the current version status.
*/ function getVersionLabel({ currentLocale, currentlyPublishedVersion, latestDraftVersion, t, version }) {
	const status = version.version._status;
	if (status === "draft") {
		if (currentlyPublishedVersion?.updatedAt > latestDraftVersion?.updatedAt) return {
			name: "draft",
			label: t("version:draft"),
			pillStyle: "light"
		};
		const isCurrentDraft = version.id === latestDraftVersion?.id;
		return {
			name: isCurrentDraft ? "currentDraft" : "draft",
			label: isCurrentDraft ? t("version:currentDraft") : t("version:draft"),
			pillStyle: "light"
		};
	}
	if (status === "published" && version.publishedLocale && currentLocale !== version.publishedLocale) return {
		name: "currentDraft",
		label: t("version:currentDraft"),
		pillStyle: "light"
	};
	const isCurrentlyPublished = currentlyPublishedVersion && version.id === currentlyPublishedVersion.id;
	return {
		name: isCurrentlyPublished ? "currentlyPublished" : "previouslyPublished",
		label: isCurrentlyPublished ? t("version:currentlyPublished") : t("version:previouslyPublished"),
		pillStyle: isCurrentlyPublished ? "success" : "light"
	};
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Version/RenderFieldsToDiff/fields/Relationship/generateLabelFromValue.js
var generateLabelFromValue = async ({ field, locale, parentIsLocalized, req, value }) => {
	let relatedDoc;
	let relationTo = field.relationTo;
	let valueToReturn = "";
	if (typeof value === "object" && "relationTo" in value) {
		relatedDoc = value.value;
		relationTo = value.relationTo;
	} else relatedDoc = value;
	const relatedCollection = req.payload.collections[relationTo].config;
	const useAsTitle = relatedCollection?.admin?.useAsTitle;
	const useAsTitleField = flattenTopLevelFields(relatedCollection.fields, { moveSubFieldsToTop: true }).find((f) => fieldAffectsData(f) && !fieldIsPresentationalOnly(f) && f.name === useAsTitle);
	let titleFieldIsLocalized = false;
	if (useAsTitleField && fieldAffectsData(useAsTitleField)) titleFieldIsLocalized = fieldShouldBeLocalized({
		field: useAsTitleField,
		parentIsLocalized
	});
	if (typeof relatedDoc?.[useAsTitle] !== "undefined") valueToReturn = relatedDoc[useAsTitle];
	else if (typeof relatedDoc === "string" || typeof relatedDoc === "number") try {
		const fetchedDoc = await req.payload.findByID({
			id: relatedDoc,
			collection: relationTo,
			depth: 0,
			locale: titleFieldIsLocalized ? locale : void 0,
			req,
			select: { [useAsTitle]: true }
		});
		if (fetchedDoc?.[useAsTitle]) valueToReturn = fetchedDoc[useAsTitle];
		else valueToReturn = `${req.i18n.t("general:untitled")} - ID: ${relatedDoc}`;
	} catch (error) {
		valueToReturn = `${req.i18n.t("general:untitled")} - ID: ${relatedDoc}`;
	}
	else valueToReturn = String(typeof relatedDoc === "object" ? relatedDoc.id : relatedDoc);
	if (typeof valueToReturn === "object" && valueToReturn && titleFieldIsLocalized && valueToReturn?.[locale]) valueToReturn = valueToReturn[locale];
	if (valueToReturn && typeof valueToReturn === "object" && valueToReturn !== null || typeof valueToReturn !== "string") valueToReturn = JSON.stringify(valueToReturn);
	return valueToReturn;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Version/RenderFieldsToDiff/fields/Relationship/index.js
var baseClass$2 = "relationship-diff";
var Relationship = ({ comparisonValue: valueFrom, field, i18n, locale, nestingLevel, parentIsLocalized, req, versionValue: valueTo }) => {
	const hasMany = "hasMany" in field && field.hasMany || Array.isArray(valueFrom) || Array.isArray(valueTo);
	const polymorphic = Array.isArray(field.relationTo);
	if (hasMany) return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(ManyRelationshipDiff, {
		field,
		i18n,
		locale,
		nestingLevel,
		parentIsLocalized,
		polymorphic,
		req,
		valueFrom,
		valueTo
	});
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(SingleRelationshipDiff, {
		field,
		i18n,
		locale,
		nestingLevel,
		parentIsLocalized,
		polymorphic,
		req,
		valueFrom,
		valueTo
	});
};
var SingleRelationshipDiff = async (args) => {
	const { field, i18n, locale, nestingLevel, parentIsLocalized, polymorphic, req, valueFrom, valueTo } = args;
	const ReactDOMServer = (await import("./_payload_react-dom-server-rsc-DKeerTts.js")).default;
	const localeToUse = locale ?? (req.payload.config?.localization && req.payload.config?.localization?.defaultLocale) ?? "en";
	const [titleFrom, titleTo] = await Promise.all([valueFrom ? generateLabelFromValue({
		field,
		locale: localeToUse,
		parentIsLocalized,
		req,
		value: valueFrom
	}) : Promise.resolve(null), valueTo ? generateLabelFromValue({
		field,
		locale: localeToUse,
		parentIsLocalized,
		req,
		value: valueTo
	}) : Promise.resolve(null)]);
	const FromComponent = valueFrom ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(RelationshipDocumentDiff, {
		field,
		i18n,
		locale,
		parentIsLocalized,
		polymorphic,
		relationTo: polymorphic ? valueFrom.relationTo : field.relationTo,
		req,
		showPill: true,
		title: titleFrom,
		value: valueFrom
	}) : null;
	const ToComponent = valueTo ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(RelationshipDocumentDiff, {
		field,
		i18n,
		locale,
		parentIsLocalized,
		polymorphic,
		relationTo: polymorphic ? valueTo.relationTo : field.relationTo,
		req,
		showPill: true,
		title: titleTo,
		value: valueTo
	}) : null;
	const NoValue = /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
		className: "diff-no-value",
		children: i18n.t("general:noValue")
	});
	let From = NoValue;
	let To = NoValue;
	if (FromComponent || ToComponent) {
		const diff = getHTMLDiffComponents({
			fromHTML: FromComponent ? ReactDOMServer.renderToStaticMarkup(FromComponent) : "<p></p>",
			toHTML: ToComponent ? ReactDOMServer.renderToStaticMarkup(ToComponent) : "<p></p>",
			tokenizeByCharacter: false
		});
		From = FromComponent ? diff.From : NoValue;
		To = ToComponent ? diff.To : NoValue;
	}
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(FieldDiffContainer, {
		className: `${baseClass$2}-container ${baseClass$2}-container--hasOne`,
		From,
		i18n,
		label: {
			label: field.label,
			locale
		},
		nestingLevel,
		To
	});
};
var ManyRelationshipDiff = async ({ field, i18n, locale, nestingLevel, parentIsLocalized, polymorphic, req, valueFrom, valueTo }) => {
	const ReactDOMServer = (await import("./_payload_react-dom-server-rsc-DKeerTts.js")).default;
	const fromArr = Array.isArray(valueFrom) ? valueFrom : [];
	const toArr = Array.isArray(valueTo) ? valueTo : [];
	const localeToUse = locale ?? (req.payload.config?.localization && req.payload.config?.localization?.defaultLocale) ?? "en";
	const [titlesFrom, titlesTo] = await Promise.all([Promise.all(fromArr.map((val) => generateLabelFromValue({
		field,
		locale: localeToUse,
		parentIsLocalized,
		req,
		value: val
	}))), Promise.all(toArr.map((val) => generateLabelFromValue({
		field,
		locale: localeToUse,
		parentIsLocalized,
		req,
		value: val
	})))]);
	const makeNodes = (list, titles) => list.map((val, idx) => /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(RelationshipDocumentDiff, {
		field,
		i18n,
		locale,
		parentIsLocalized,
		polymorphic,
		relationTo: polymorphic ? val.relationTo : field.relationTo,
		req,
		showPill: polymorphic,
		title: titles[idx],
		value: val
	}, idx));
	const NoValue = /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
		className: "diff-no-value",
		children: i18n.t("general:noValue")
	});
	const hasFrom = fromArr.length > 0;
	const hasTo = toArr.length > 0;
	let From = NoValue;
	let To = NoValue;
	if (hasFrom || hasTo) {
		const fromNodes = hasFrom ? makeNodes(fromArr, titlesFrom) : [];
		const toNodes = hasTo ? makeNodes(toArr, titlesTo) : [];
		const diff = getHTMLDiffComponents({
			fromHTML: hasFrom ? ReactDOMServer.renderToStaticMarkup(/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(import_jsx_runtime_react_server.Fragment, { children: fromNodes })) : "",
			toHTML: hasTo ? ReactDOMServer.renderToStaticMarkup(/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(import_jsx_runtime_react_server.Fragment, { children: toNodes })) : "",
			tokenizeByCharacter: false
		});
		From = hasFrom ? diff.From : NoValue;
		To = hasTo ? diff.To : NoValue;
	}
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(FieldDiffContainer, {
		className: `${baseClass$2}-container ${baseClass$2}-container--hasMany`,
		From,
		i18n,
		label: {
			label: field.label,
			locale
		},
		nestingLevel,
		To
	});
};
var RelationshipDocumentDiff = ({ field, i18n, locale, parentIsLocalized, polymorphic, relationTo, req, showPill = false, title, value }) => {
	let pillLabel = null;
	if (showPill) {
		const collectionConfig = req.payload.collections[relationTo].config;
		pillLabel = collectionConfig.labels?.singular ? getTranslation(collectionConfig.labels.singular, i18n) : collectionConfig.slug;
	}
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: `${baseClass$2}`,
		"data-enable-match": "true",
		"data-id": polymorphic ? value.value.id : value.id,
		"data-relation-to": relationTo,
		children: [pillLabel && /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("span", {
			className: `${baseClass$2}__pill`,
			"data-enable-match": "false",
			children: pillLabel
		}), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("strong", {
			className: `${baseClass$2}__info`,
			"data-enable-match": "false",
			children: title
		})]
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Version/RenderFieldsToDiff/fields/Upload/index.js
var baseClass$1 = "upload-diff";
var Upload = (args) => {
	const { comparisonValue: valueFrom, field, i18n, locale, nestingLevel, req, versionValue: valueTo } = args;
	const hasMany = "hasMany" in field && field.hasMany && Array.isArray(valueTo);
	const polymorphic = Array.isArray(field.relationTo);
	if (hasMany) return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(HasManyUploadDiff, {
		field,
		i18n,
		locale,
		nestingLevel,
		polymorphic,
		req,
		valueFrom,
		valueTo
	});
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(SingleUploadDiff, {
		field,
		i18n,
		locale,
		nestingLevel,
		polymorphic,
		req,
		valueFrom,
		valueTo
	});
};
var HasManyUploadDiff = async (args) => {
	const { field, i18n, locale, nestingLevel, polymorphic, req, valueFrom, valueTo } = args;
	const ReactDOMServer = (await import("./_payload_react-dom-server-rsc-DKeerTts.js")).default;
	let From = "";
	let To = "";
	const showCollectionSlug = Array.isArray(field.relationTo);
	const getUploadDocKey = (uploadDoc) => {
		if (typeof uploadDoc === "object" && "relationTo" in uploadDoc) {
			const value = uploadDoc.value;
			return typeof value === "object" ? value.id : value;
		}
		return typeof uploadDoc === "object" ? uploadDoc.id : uploadDoc;
	};
	const FromComponents = valueFrom ? valueFrom.map((uploadDoc) => /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(UploadDocumentDiff, {
		i18n,
		polymorphic,
		relationTo: field.relationTo,
		req,
		showCollectionSlug,
		uploadDoc
	}, getUploadDocKey(uploadDoc))) : null;
	const ToComponents = valueTo ? valueTo.map((uploadDoc) => /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(UploadDocumentDiff, {
		i18n,
		polymorphic,
		relationTo: field.relationTo,
		req,
		showCollectionSlug,
		uploadDoc
	}, getUploadDocKey(uploadDoc))) : null;
	const diffResult = getHTMLDiffComponents({
		fromHTML: `<div class="${baseClass$1}-hasMany">` + (FromComponents ? FromComponents.map((component) => `<div>${ReactDOMServer.renderToStaticMarkup(component)}</div>`).join("") : "") + "</div>",
		toHTML: `<div class="${baseClass$1}-hasMany">` + (ToComponents ? ToComponents.map((component) => `<div>${ReactDOMServer.renderToStaticMarkup(component)}</div>`).join("") : "") + "</div>",
		tokenizeByCharacter: false
	});
	From = diffResult.From;
	To = diffResult.To;
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(FieldDiffContainer, {
		className: `${baseClass$1}-container ${baseClass$1}-container--hasMany`,
		From,
		i18n,
		label: {
			label: field.label,
			locale
		},
		nestingLevel,
		To
	});
};
var SingleUploadDiff = async (args) => {
	const { field, i18n, locale, nestingLevel, polymorphic, req, valueFrom, valueTo } = args;
	const ReactDOMServer = (await import("./_payload_react-dom-server-rsc-DKeerTts.js")).default;
	let From = "";
	let To = "";
	const showCollectionSlug = Array.isArray(field.relationTo);
	const FromComponent = valueFrom ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(UploadDocumentDiff, {
		i18n,
		polymorphic,
		relationTo: field.relationTo,
		req,
		showCollectionSlug,
		uploadDoc: valueFrom
	}) : null;
	const ToComponent = valueTo ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(UploadDocumentDiff, {
		i18n,
		polymorphic,
		relationTo: field.relationTo,
		req,
		showCollectionSlug,
		uploadDoc: valueTo
	}) : null;
	const diffResult = getHTMLDiffComponents({
		fromHTML: FromComponent ? ReactDOMServer.renderToStaticMarkup(FromComponent) : "<p></p>",
		toHTML: ToComponent ? ReactDOMServer.renderToStaticMarkup(ToComponent) : "<p></p>",
		tokenizeByCharacter: false
	});
	From = diffResult.From;
	To = diffResult.To;
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(FieldDiffContainer, {
		className: `${baseClass$1}-container ${baseClass$1}-container--hasOne`,
		From,
		i18n,
		label: {
			label: field.label,
			locale
		},
		nestingLevel,
		To
	});
};
var UploadDocumentDiff = (args) => {
	const { i18n, polymorphic, relationTo, req, showCollectionSlug, uploadDoc } = args;
	let thumbnailSRC = "";
	const value = polymorphic ? uploadDoc.value : uploadDoc;
	if (value && typeof value === "object" && "thumbnailURL" in value) thumbnailSRC = typeof value.thumbnailURL === "string" && value.thumbnailURL || typeof value.url === "string" && value.url || "";
	let filename;
	if (value && typeof value === "object") filename = value.filename;
	else filename = `${i18n.t("general:untitled")} - ID: ${uploadDoc}`;
	let pillLabel = null;
	if (showCollectionSlug) {
		let collectionSlug;
		if (polymorphic && typeof uploadDoc === "object" && "relationTo" in uploadDoc) collectionSlug = uploadDoc.relationTo;
		else collectionSlug = typeof relationTo === "string" ? relationTo : relationTo[0];
		const uploadConfig = req.payload.collections[collectionSlug].config;
		pillLabel = uploadConfig.labels?.singular ? getTranslation(uploadConfig.labels.singular, i18n) : uploadConfig.slug;
	}
	let id;
	if (polymorphic && typeof uploadDoc === "object" && "relationTo" in uploadDoc) {
		const polyValue = uploadDoc.value;
		id = typeof polyValue === "object" ? polyValue.id : polyValue;
	} else if (typeof uploadDoc === "object" && "id" in uploadDoc) id = uploadDoc.id;
	else if (typeof uploadDoc === "string" || typeof uploadDoc === "number") id = uploadDoc;
	const alt = value && typeof value === "object" && value.alt || filename || "";
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
		className: `${baseClass$1}`,
		"data-enable-match": "true",
		"data-id": id,
		"data-relation-to": relationTo,
		children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("div", {
			className: `${baseClass$1}__card`,
			children: [
				/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
					className: `${baseClass$1}__thumbnail`,
					children: thumbnailSRC?.length ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("img", {
						alt,
						src: thumbnailSRC
					}) : /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(File, {})
				}),
				pillLabel && /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
					className: `${baseClass$1}__pill`,
					"data-enable-match": "false",
					children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("span", { children: pillLabel })
				}),
				/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
					className: `${baseClass$1}__info`,
					"data-enable-match": "false",
					children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("strong", { children: filename })
				})
			]
		})
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Version/RenderFieldsToDiff/fields/index.js
var diffComponents = {
	slug: VersionFieldDiffText,
	array: VersionFieldDiffIterable,
	blocks: VersionFieldDiffIterable,
	checkbox: VersionFieldDiffCheckbox,
	code: VersionFieldDiffText,
	collapsible: VersionFieldDiffCollapsible,
	date: VersionFieldDiffDate,
	email: VersionFieldDiffText,
	group: VersionFieldDiffGroup,
	join: null,
	json: VersionFieldDiffText,
	number: VersionFieldDiffText,
	point: VersionFieldDiffText,
	radio: VersionFieldDiffSelect,
	relationship: Relationship,
	richText: VersionFieldDiffText,
	row: VersionFieldDiffRow,
	select: VersionFieldDiffSelect,
	tabs: VersionFieldDiffTabs,
	text: VersionFieldDiffText,
	textarea: VersionFieldDiffText,
	ui: null,
	upload: Upload
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Version/RenderFieldsToDiff/buildVersionFields.js
/**
* Build up an object that contains rendered diff components for each field.
* This is then sent to the client to be rendered.
*
* Here, the server is responsible for traversing through the document data and building up this
* version state object.
*/
var buildVersionFields = ({ clientSchemaMap, customDiffComponents, entitySlug, fields, fieldsPermissions, i18n, modifiedOnly, nestingLevel = 0, parentIndexPath, parentIsLocalized, parentPath, parentSchemaPath, req, selectedLocales, versionFromSiblingData, versionToSiblingData }) => {
	const versionFields = [];
	let fieldIndex = -1;
	for (const field of fields) {
		fieldIndex++;
		if (fieldIsID(field)) continue;
		const { indexPath, path, schemaPath } = getFieldPaths({
			field,
			index: fieldIndex,
			parentIndexPath,
			parentPath,
			parentSchemaPath
		});
		const clientField = clientSchemaMap.get(entitySlug + "." + schemaPath);
		if (!clientField) {
			req.payload.logger.error({
				clientFieldKey: entitySlug + "." + schemaPath,
				clientSchemaMapKeys: Array.from(clientSchemaMap.keys()),
				msg: "No client field found for " + entitySlug + "." + schemaPath,
				parentPath,
				parentSchemaPath,
				path,
				schemaPath
			});
			throw new Error("No client field found for " + entitySlug + "." + schemaPath);
		}
		const versionField = {};
		const isLocalized = fieldShouldBeLocalized({
			field,
			parentIsLocalized
		});
		const fieldName = "name" in field ? field.name : null;
		const valueFrom = fieldName ? versionFromSiblingData?.[fieldName] : versionFromSiblingData;
		const valueTo = fieldName ? versionToSiblingData?.[fieldName] : versionToSiblingData;
		if (isLocalized) {
			versionField.fieldByLocale = {};
			for (const locale of selectedLocales) {
				const localizedVersionField = buildVersionField({
					clientField,
					clientSchemaMap,
					customDiffComponents,
					entitySlug,
					field,
					i18n,
					indexPath,
					locale,
					modifiedOnly,
					nestingLevel,
					parentFieldsPermissions: fieldsPermissions,
					parentIsLocalized: true,
					parentPath,
					parentSchemaPath,
					path,
					req,
					schemaPath,
					selectedLocales,
					valueFrom: valueFrom?.[locale],
					valueTo: valueTo?.[locale]
				});
				if (localizedVersionField) versionField.fieldByLocale[locale] = localizedVersionField;
			}
		} else {
			const baseVersionField = buildVersionField({
				clientField,
				clientSchemaMap,
				customDiffComponents,
				entitySlug,
				field,
				i18n,
				indexPath,
				modifiedOnly,
				nestingLevel,
				parentFieldsPermissions: fieldsPermissions,
				parentIsLocalized: parentIsLocalized || "localized" in field && field.localized,
				parentPath,
				parentSchemaPath,
				path,
				req,
				schemaPath,
				selectedLocales,
				valueFrom,
				valueTo
			});
			if (baseVersionField) versionField.field = baseVersionField;
		}
		if (versionField.field || versionField.fieldByLocale && Object.keys(versionField.fieldByLocale).length) versionFields.push(versionField);
	}
	return { versionFields };
};
var buildVersionField = ({ clientField, clientSchemaMap, customDiffComponents, entitySlug, field, i18n, indexPath, locale, modifiedOnly, nestingLevel, parentFieldsPermissions, parentIsLocalized, parentPath, parentSchemaPath, path, req, schemaPath, selectedLocales, valueFrom, valueTo }) => {
	let hasReadPermission = false;
	let fieldPermissions = void 0;
	if (typeof parentFieldsPermissions === "boolean") {
		hasReadPermission = parentFieldsPermissions;
		fieldPermissions = parentFieldsPermissions;
	} else if ("name" in field) {
		fieldPermissions = parentFieldsPermissions?.[field.name];
		if (typeof fieldPermissions === "boolean") hasReadPermission = fieldPermissions;
		else if (typeof fieldPermissions?.read === "boolean") hasReadPermission = fieldPermissions.read;
	} else hasReadPermission = true;
	if (!hasReadPermission) return null;
	if (modifiedOnly && dequal(valueFrom, valueTo)) return null;
	let CustomComponent = customDiffComponents?.[field.type];
	if (field?.type === "richText") {
		if (!field?.editor) throw new MissingEditorProp(field);
		if (typeof field?.editor === "function") throw new Error("Attempted to access unsanitized rich text editor.");
		if (field.editor.CellComponent) CustomComponent = field.editor.DiffComponent;
	}
	if (field?.admin?.components?.Diff) CustomComponent = field.admin.components.Diff;
	const DefaultComponent = diffComponents?.[field.type];
	const baseVersionField = {
		type: field.type,
		fields: [],
		path,
		schemaPath
	};
	if (field.type === "tabs" && "tabs" in field) {
		baseVersionField.tabs = [];
		let tabIndex = -1;
		for (const tab of field.tabs) {
			tabIndex++;
			const isNamedTab = tabHasName(tab);
			const { indexPath: tabIndexPath, path: tabPath, schemaPath: tabSchemaPath } = getFieldPaths({
				field: {
					...tab,
					type: "tab"
				},
				index: tabIndex,
				parentIndexPath: indexPath,
				parentPath: path,
				parentSchemaPath: schemaPath
			});
			let tabFieldsPermissions = void 0;
			if (typeof parentFieldsPermissions === "boolean") tabFieldsPermissions = parentFieldsPermissions;
			else if ("name" in tab) {
				const tabPermissions = parentFieldsPermissions?.[tab.name];
				if (typeof tabPermissions === "boolean") tabFieldsPermissions = tabPermissions;
				else tabFieldsPermissions = tabPermissions?.fields;
			} else tabFieldsPermissions = parentFieldsPermissions;
			const tabVersion = {
				name: "name" in tab ? tab.name : null,
				fields: buildVersionFields({
					clientSchemaMap,
					customDiffComponents,
					entitySlug,
					fields: tab.fields,
					fieldsPermissions: tabFieldsPermissions,
					i18n,
					modifiedOnly,
					nestingLevel: nestingLevel + 1,
					parentIndexPath: isNamedTab ? "" : tabIndexPath,
					parentIsLocalized: parentIsLocalized || tab.localized,
					parentPath: isNamedTab ? tabPath : "name" in field ? path : parentPath,
					parentSchemaPath: tabSchemaPath,
					req,
					selectedLocales,
					versionFromSiblingData: "name" in tab ? valueFrom?.[tab.name] : valueFrom,
					versionToSiblingData: "name" in tab ? valueTo?.[tab.name] : valueTo
				}).versionFields,
				label: typeof tab.label === "function" ? tab.label({
					i18n,
					t: i18n.t
				}) : tab.label
			};
			if (tabVersion?.fields?.length) baseVersionField.tabs.push(tabVersion);
		}
		if (modifiedOnly && !baseVersionField.tabs.length) return null;
	} else if ("fields" in field) {
		let subFieldsPermissions = void 0;
		if ("name" in field && typeof fieldPermissions !== "undefined") subFieldsPermissions = typeof fieldPermissions === "boolean" ? fieldPermissions : fieldPermissions.fields;
		else subFieldsPermissions = parentFieldsPermissions;
		if (field.type === "array" && (valueTo || valueFrom)) {
			const maxLength = Math.max(Array.isArray(valueTo) ? valueTo.length : 0, Array.isArray(valueFrom) ? valueFrom.length : 0);
			baseVersionField.rows = [];
			for (let i = 0; i < maxLength; i++) {
				const fromRow = Array.isArray(valueFrom) && valueFrom?.[i] || {};
				const toRow = Array.isArray(valueTo) && valueTo?.[i] || {};
				const versionFields = buildVersionFields({
					clientSchemaMap,
					customDiffComponents,
					entitySlug,
					fields: field.fields,
					fieldsPermissions: subFieldsPermissions,
					i18n,
					modifiedOnly,
					nestingLevel: nestingLevel + 2,
					parentIndexPath: "name" in field ? "" : indexPath,
					parentIsLocalized: parentIsLocalized || field.localized,
					parentPath: ("name" in field ? path : parentPath) + "." + i,
					parentSchemaPath: schemaPath,
					req,
					selectedLocales,
					versionFromSiblingData: fromRow,
					versionToSiblingData: toRow
				}).versionFields;
				if (versionFields?.length) baseVersionField.rows[i] = versionFields;
			}
			if (!baseVersionField.rows?.length && modifiedOnly) return null;
		} else {
			baseVersionField.fields = buildVersionFields({
				clientSchemaMap,
				customDiffComponents,
				entitySlug,
				fields: field.fields,
				fieldsPermissions: subFieldsPermissions,
				i18n,
				modifiedOnly,
				nestingLevel: field.type !== "row" ? nestingLevel + 1 : nestingLevel,
				parentIndexPath: "name" in field ? "" : indexPath,
				parentIsLocalized: parentIsLocalized || "localized" in field && field.localized,
				parentPath: "name" in field ? path : parentPath,
				parentSchemaPath: schemaPath,
				req,
				selectedLocales,
				versionFromSiblingData: valueFrom,
				versionToSiblingData: valueTo
			}).versionFields;
			if (modifiedOnly && !baseVersionField.fields?.length) return null;
		}
	} else if (field.type === "blocks") {
		baseVersionField.rows = [];
		const maxLength = Math.max(Array.isArray(valueTo) ? valueTo.length : 0, Array.isArray(valueFrom) ? valueFrom.length : 0);
		for (let i = 0; i < maxLength; i++) {
			const fromRow = Array.isArray(valueFrom) && valueFrom?.[i] || {};
			const toRow = Array.isArray(valueTo) && valueTo?.[i] || {};
			const blockSlugToMatch = toRow?.blockType ?? fromRow?.blockType;
			const toBlock = req.payload.blocks[blockSlugToMatch] ?? field.blocks.find((block) => typeof block !== "string" && block.slug === blockSlugToMatch);
			let fields = [];
			if (toRow.blockType === fromRow.blockType) fields = toBlock.fields;
			else {
				const fromBlockSlugToMatch = fromRow?.blockType ?? toRow?.blockType;
				const fromBlock = req.payload.blocks[fromBlockSlugToMatch] ?? field.blocks.find((block) => typeof block !== "string" && block.slug === fromBlockSlugToMatch);
				if (fromBlock) fields = getUniqueListBy([...toBlock.fields, ...fromBlock.fields], "name");
				else fields = toBlock.fields;
			}
			let blockFieldsPermissions = void 0;
			if (typeof fieldPermissions === "boolean") blockFieldsPermissions = fieldPermissions;
			else if (typeof fieldPermissions?.blocks === "boolean") blockFieldsPermissions = fieldPermissions.blocks;
			else {
				const permissionsBlockSpecific = fieldPermissions?.blocks?.[blockSlugToMatch];
				if (typeof permissionsBlockSpecific === "boolean") blockFieldsPermissions = permissionsBlockSpecific;
				else blockFieldsPermissions = permissionsBlockSpecific?.fields;
			}
			const versionFields = buildVersionFields({
				clientSchemaMap,
				customDiffComponents,
				entitySlug,
				fields,
				fieldsPermissions: blockFieldsPermissions,
				i18n,
				modifiedOnly,
				nestingLevel: nestingLevel + 2,
				parentIndexPath: "name" in field ? "" : indexPath,
				parentIsLocalized: parentIsLocalized || "localized" in field && field.localized,
				parentPath: ("name" in field ? path : parentPath) + "." + i,
				parentSchemaPath: schemaPath + "." + toBlock.slug,
				req,
				selectedLocales,
				versionFromSiblingData: fromRow,
				versionToSiblingData: toRow
			}).versionFields;
			if (versionFields?.length) baseVersionField.rows[i] = versionFields;
		}
		if (!baseVersionField.rows?.length && modifiedOnly) return null;
	}
	const clientDiffProps = {
		baseVersionField: {
			...baseVersionField,
			CustomComponent: void 0
		},
		/**
		* TODO: Change to valueFrom in 4.0
		*/
		comparisonValue: valueFrom,
		/**
		* @deprecated remove in 4.0. Each field should handle its own diffing logic
		*/
		diffMethod: "diffWordsWithSpace",
		field: clientField,
		fieldPermissions: typeof fieldPermissions === "undefined" ? parentFieldsPermissions : fieldPermissions,
		parentIsLocalized,
		nestingLevel: nestingLevel ? nestingLevel : void 0,
		/**
		* TODO: Change to valueTo in 4.0
		*/
		versionValue: valueTo
	};
	if (locale) clientDiffProps.locale = locale;
	const serverDiffProps = {
		...clientDiffProps,
		clientField,
		field,
		i18n,
		req,
		selectedLocales
	};
	baseVersionField.CustomComponent = RenderServerComponent({
		clientProps: clientDiffProps,
		Component: CustomComponent,
		Fallback: DefaultComponent,
		importMap: req.payload.importMap,
		key: "diff component",
		serverProps: serverDiffProps
	});
	return baseVersionField;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Version/RenderFieldsToDiff/index.js
var RenderDiff = (args) => {
	const { versionFields } = buildVersionFields(args);
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(RenderVersionFieldsToDiff, {
		parent: true,
		versionFields
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Version/index.js
async function VersionView(props) {
	const { hasPublishedDoc, i18n, initPageResult, routeSegments, searchParams } = props;
	const { collectionConfig, docID: id, globalConfig, permissions, req, req: { payload, payload: { config, config: { localization } } = {}, user } = {} } = initPageResult;
	const versionToID = routeSegments[routeSegments.length - 1];
	const collectionSlug = collectionConfig?.slug;
	const globalSlug = globalConfig?.slug;
	const draftsEnabled = hasDraftsEnabled(collectionConfig || globalConfig);
	const userLocale = searchParams.locale || (req.locale !== "all" ? req.locale : localization && localization.defaultLocale);
	const localeCodesFromParams = searchParams.localeCodes ? JSON.parse(searchParams.localeCodes) : null;
	const versionFromIDFromParams = searchParams.versionFrom;
	const modifiedOnly = searchParams.modifiedOnly === "false" ? false : true;
	const docPermissions = collectionSlug ? permissions.collections[collectionSlug] : permissions.globals[globalSlug];
	const versionTo = await fetchVersion({
		id: versionToID,
		collectionSlug,
		depth: 1,
		globalSlug,
		locale: "all",
		overrideAccess: false,
		req,
		user
	});
	if (!versionTo) return req.server.notFound();
	const [previousVersionResult, versionFromResult, currentlyPublishedVersion, latestDraftVersion, previousPublishedVersionResult] = await Promise.all([
		fetchVersions({
			collectionSlug,
			depth: versionFromIDFromParams ? 0 : 1,
			draft: true,
			globalSlug,
			limit: 1,
			locale: "all",
			overrideAccess: false,
			parentID: id,
			req,
			sort: "-updatedAt",
			user,
			where: { and: [{ updatedAt: { less_than: versionTo.updatedAt } }] }
		}),
		versionFromIDFromParams ? fetchVersion({
			id: versionFromIDFromParams,
			collectionSlug,
			depth: 1,
			globalSlug,
			locale: "all",
			overrideAccess: false,
			req,
			user
		}) : Promise.resolve(null),
		hasPublishedDoc ? fetchLatestVersion({
			collectionSlug,
			depth: 0,
			globalSlug,
			locale: req.locale,
			overrideAccess: false,
			parentID: id,
			req,
			status: "published",
			user
		}) : Promise.resolve(null),
		draftsEnabled ? fetchLatestVersion({
			collectionSlug,
			depth: 0,
			globalSlug,
			locale: "all",
			overrideAccess: false,
			parentID: id,
			req,
			status: "draft",
			user
		}) : Promise.resolve(null),
		draftsEnabled ? fetchVersions({
			collectionSlug,
			depth: 0,
			draft: true,
			globalSlug,
			limit: 1,
			locale: "all",
			overrideAccess: false,
			parentID: id,
			req,
			sort: "-updatedAt",
			user,
			where: { and: [{ updatedAt: { less_than: versionTo.updatedAt } }, { "version._status": { equals: "published" } }] }
		}) : Promise.resolve(null)
	]);
	const previousVersion = previousVersionResult?.docs?.[0] ?? null;
	const versionFrom = versionFromResult || previousVersion;
	const previousPublishedVersion = previousPublishedVersionResult?.docs?.[0] ?? null;
	let selectedLocales = [];
	if (localization) {
		let locales = [];
		if (localeCodesFromParams) for (const code of localeCodesFromParams) {
			const locale = localization.locales.find((locale) => locale.code === code);
			if (!locale) continue;
			locales.push(locale);
		}
		else locales = localization.locales;
		if (localization.filterAvailableLocales) locales = await localization.filterAvailableLocales({
			locales,
			req
		}) || [];
		selectedLocales = locales.map((locale) => locale.code);
	}
	const schemaMap = getSchemaMap({
		collectionSlug,
		config,
		globalSlug,
		i18n
	});
	const RenderedDiff = RenderDiff({
		clientSchemaMap: getClientSchemaMap({
			collectionSlug,
			config: getClientConfig({
				config: payload.config,
				i18n,
				importMap: payload.importMap,
				user
			}),
			globalSlug,
			i18n,
			payload,
			schemaMap
		}),
		customDiffComponents: {},
		entitySlug: collectionSlug || globalSlug,
		fields: (collectionConfig || globalConfig)?.fields,
		fieldsPermissions: docPermissions?.fields,
		i18n,
		modifiedOnly,
		parentIndexPath: "",
		parentIsLocalized: false,
		parentPath: "",
		parentSchemaPath: "",
		req,
		selectedLocales,
		versionFromSiblingData: {
			...versionFrom?.version,
			updatedAt: versionFrom?.updatedAt
		},
		versionToSiblingData: {
			...versionTo.version,
			updatedAt: versionTo.updatedAt
		}
	});
	const versionToCreatedAtFormatted = versionTo.updatedAt ? formatDate({
		date: typeof versionTo.updatedAt === "string" ? new Date(versionTo.updatedAt) : versionTo.updatedAt,
		i18n,
		pattern: config.admin.dateFormat
	}) : "";
	const formatPill = ({ doc, labelOverride, labelStyle, labelSuffix }) => {
		return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(VersionPillLabel, {
			currentlyPublishedVersion,
			doc,
			labelFirst: true,
			labelOverride,
			labelStyle: labelStyle ?? "text",
			labelSuffix,
			latestDraftVersion
		}, doc.id);
	};
	let versionFromOptions = [];
	if (previousVersion?.id) versionFromOptions.push({
		doc: previousVersion,
		labelOverride: i18n.t("version:previousVersion"),
		updatedAt: new Date(previousVersion.updatedAt),
		value: previousVersion.id
	});
	const publishedNewerThanDraft = currentlyPublishedVersion?.updatedAt > latestDraftVersion?.updatedAt;
	if (latestDraftVersion && !publishedNewerThanDraft) versionFromOptions.push({
		doc: latestDraftVersion,
		updatedAt: new Date(latestDraftVersion.updatedAt),
		value: latestDraftVersion.id
	});
	if (currentlyPublishedVersion) versionFromOptions.push({
		doc: currentlyPublishedVersion,
		updatedAt: new Date(currentlyPublishedVersion.updatedAt),
		value: currentlyPublishedVersion.id
	});
	if (previousPublishedVersion && currentlyPublishedVersion?.id !== previousPublishedVersion.id) versionFromOptions.push({
		doc: previousPublishedVersion,
		labelOverride: i18n.t("version:previouslyPublished"),
		updatedAt: new Date(previousPublishedVersion.updatedAt),
		value: previousPublishedVersion.id
	});
	if (versionFrom?.id && !versionFromOptions.some((option) => option.value === versionFrom.id)) versionFromOptions.push({
		doc: versionFrom,
		labelOverride: i18n.t("version:specificVersion"),
		updatedAt: new Date(versionFrom.updatedAt),
		value: versionFrom.id
	});
	versionFromOptions = versionFromOptions.sort((a, b) => {
		if (a && b) return b.updatedAt.getTime() - a.updatedAt.getTime();
		return 0;
	});
	const versionToIsVersionFrom = versionFrom?.id === versionTo.id;
	const versionFromComparisonOptions = [];
	for (const option of versionFromOptions) {
		if (option.value === versionTo.id && !versionToIsVersionFrom) continue;
		if (versionFromComparisonOptions.some((existingOption) => existingOption.value === option.value)) continue;
		const otherOptionsWithSameID = versionFromOptions.filter((existingOption) => existingOption.value === option.value && existingOption !== option);
		const labelSuffix = otherOptionsWithSameID?.length ? /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)("span", { children: [
			" (",
			otherOptionsWithSameID.map((optionWithSameID, index) => {
				const label = optionWithSameID.labelOverride || getVersionLabel({
					currentLocale: userLocale,
					currentlyPublishedVersion,
					latestDraftVersion,
					t: i18n.t,
					version: optionWithSameID.doc
				}).label;
				return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(import_react_react_server.Fragment, { children: [index > 0 ? ", " : "", label] }, `${optionWithSameID.value}-${index}`);
			}),
			")"
		] }, `${option.value}-suffix`) : void 0;
		versionFromComparisonOptions.push({
			label: formatPill({
				doc: option.doc,
				labelOverride: option.labelOverride,
				labelSuffix
			}),
			value: option.value
		});
	}
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(DefaultVersionView, {
		canUpdate: docPermissions?.update,
		modifiedOnly,
		RenderedDiff,
		selectedLocales,
		versionFromCreatedAt: versionFrom?.createdAt,
		versionFromID: versionFrom?.id,
		versionFromOptions: versionFromComparisonOptions,
		versionToCreatedAt: versionTo.createdAt,
		versionToCreatedAtFormatted,
		VersionToCreatedAtLabel: formatPill({
			doc: versionTo,
			labelStyle: "pill"
		}),
		versionToID: versionTo.id,
		versionToStatus: versionTo.version?._status
	});
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
})(import_react_react_server.default, assetsManifest.serverResources["node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Versions/index.js"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Versions/buildColumns.js
var buildVersionColumns = ({ collectionConfig, CreatedAtCellOverride, currentlyPublishedVersion, docID, docs, globalConfig, i18n: { t }, isTrashed, latestDraftVersion }) => {
	const entityConfig = collectionConfig || globalConfig;
	const CreatedAtCellComponent = CreatedAtCellOverride ?? VersionsCreatedAtCell;
	const columns = [{
		accessor: "updatedAt",
		active: true,
		field: {
			name: "",
			type: "date"
		},
		Heading: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(SortColumn, {
			Label: t("general:updatedAt"),
			name: "updatedAt"
		}),
		isLinkedColumn: true,
		renderedCells: docs.map((doc, i) => {
			return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(CreatedAtCellComponent, {
				collectionSlug: collectionConfig?.slug,
				docID,
				globalSlug: globalConfig?.slug,
				isTrashed,
				rowData: {
					id: doc.id,
					updatedAt: doc.updatedAt
				}
			}, i);
		})
	}];
	if (hasDraftsEnabled(entityConfig)) columns.push({
		accessor: "_status",
		active: true,
		field: {
			name: "",
			type: "checkbox"
		},
		Heading: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(SortColumn, {
			Label: t("version:status"),
			name: "status"
		}),
		renderedCells: docs.map((doc, i) => {
			return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(VersionsAutosaveCell, {
				currentlyPublishedVersion,
				latestDraftVersion,
				rowData: doc
			}, i);
		})
	});
	columns.push({
		accessor: "id",
		active: true,
		field: {
			name: "",
			type: "text"
		},
		Heading: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(SortColumn, {
			Label: t("version:versionID"),
			name: "id"
		}),
		renderedCells: docs.map((doc, i) => {
			return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(VersionsIDCell, { id: doc.id }, i);
		})
	});
	return columns;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Versions/index.js
var baseClass = "versions";
async function VersionsView(props) {
	const { hasPublishedDoc, initPageResult: { collectionConfig, docID: id, globalConfig, req, req: { i18n, payload: { config }, t, user } }, routeSegments: segments, searchParams: { limit, page, sort }, versions: { CreatedAtCellOverride, useVersionDrawerCreatedAtCell = false } = {} } = props;
	const draftsEnabled = hasDraftsEnabled(collectionConfig || globalConfig);
	const collectionSlug = collectionConfig?.slug;
	const globalSlug = globalConfig?.slug;
	const isTrashed = segments[2] === "trash";
	const { routes: { api: apiRoute } } = config;
	const defaultLimit = collectionSlug ? collectionConfig?.admin?.pagination?.defaultLimit : 10;
	const limitToUse = isNumber(limit) ? Number(limit) : defaultLimit;
	const versionsData = await fetchVersions({
		collectionSlug,
		depth: 0,
		globalSlug,
		limit: limitToUse,
		locale: req.locale,
		overrideAccess: false,
		page: page ? parseInt(page.toString(), 10) : void 0,
		parentID: id,
		req,
		sort,
		user
	});
	if (!versionsData) return req.server.notFound();
	const [currentlyPublishedVersion, latestDraftVersion] = await Promise.all([hasPublishedDoc ? fetchLatestVersion({
		collectionSlug,
		depth: 0,
		globalSlug,
		locale: req.locale,
		overrideAccess: false,
		parentID: id,
		req,
		select: {
			id: true,
			updatedAt: true,
			version: {
				_status: true,
				updatedAt: true
			}
		},
		status: "published",
		user
	}) : Promise.resolve(null), draftsEnabled ? fetchLatestVersion({
		collectionSlug,
		depth: 0,
		globalSlug,
		locale: req.locale,
		overrideAccess: false,
		parentID: id,
		req,
		select: {
			id: true,
			updatedAt: true,
			version: {
				_status: true,
				updatedAt: true
			}
		},
		status: "draft",
		user
	}) : Promise.resolve(null)]);
	const fetchURL = formatAdminURL({
		apiRoute,
		path: collectionSlug ? `/${collectionSlug}/versions` : `/${globalSlug}/versions`
	});
	const columns = buildVersionColumns({
		collectionConfig,
		CreatedAtCellOverride: CreatedAtCellOverride ?? (useVersionDrawerCreatedAtCell ? VersionDrawerCreatedAtCell : void 0),
		currentlyPublishedVersion,
		docID: id,
		docs: versionsData?.docs,
		globalConfig,
		i18n,
		isTrashed,
		latestDraftVersion
	});
	const pluralLabel = typeof collectionConfig?.labels?.plural === "function" ? collectionConfig.labels.plural({
		i18n,
		t
	}) : collectionConfig?.labels?.plural ?? globalConfig?.label;
	return /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsxs)(import_react_react_server.Fragment, { children: [/*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(SetDocumentStepNav, {
		collectionSlug,
		globalSlug,
		id,
		isTrashed,
		pluralLabel,
		useAsTitle: collectionConfig?.admin?.useAsTitle || globalSlug,
		view: i18n.t("version:versions")
	}), /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("main", {
		className: baseClass,
		children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)("div", {
			className: `${baseClass}__wrap`,
			children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(ListQueryProvider, {
				data: versionsData,
				modifySearchParams: true,
				orderableFieldName: collectionConfig?.orderable === true ? "_order" : void 0,
				query: {
					limit: limitToUse,
					sort
				},
				children: /*#__PURE__*/ (0, import_jsx_runtime_react_server.jsx)(VersionsViewClient, {
					baseClass,
					columns,
					fetchURL,
					paginationLimits: collectionConfig?.admin?.pagination?.limits
				})
			})
		})
	})] });
}
VersionsView = /* #__PURE__ */ __vite_rsc_wrap_css__(VersionsView, "VersionsView");
function __vite_rsc_wrap_css__(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Document/getCustomDocumentViewByKey.js
var getCustomDocumentViewByKey = (views, customViewKey) => {
	return typeof views?.edit?.[customViewKey] === "object" && "Component" in views.edit[customViewKey] ? views?.edit?.[customViewKey].Component : null;
};
//#endregion
//#region node_modules/.pnpm/path-to-regexp@6.3.0/node_modules/path-to-regexp/dist.es2015/index.js
/**
* Tokenize input string.
*/
function lexer(str) {
	var tokens = [];
	var i = 0;
	while (i < str.length) {
		var char = str[i];
		if (char === "*" || char === "+" || char === "?") {
			tokens.push({
				type: "MODIFIER",
				index: i,
				value: str[i++]
			});
			continue;
		}
		if (char === "\\") {
			tokens.push({
				type: "ESCAPED_CHAR",
				index: i++,
				value: str[i++]
			});
			continue;
		}
		if (char === "{") {
			tokens.push({
				type: "OPEN",
				index: i,
				value: str[i++]
			});
			continue;
		}
		if (char === "}") {
			tokens.push({
				type: "CLOSE",
				index: i,
				value: str[i++]
			});
			continue;
		}
		if (char === ":") {
			var name = "";
			var j = i + 1;
			while (j < str.length) {
				var code = str.charCodeAt(j);
				if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
					name += str[j++];
					continue;
				}
				break;
			}
			if (!name) throw new TypeError("Missing parameter name at ".concat(i));
			tokens.push({
				type: "NAME",
				index: i,
				value: name
			});
			i = j;
			continue;
		}
		if (char === "(") {
			var count = 1;
			var pattern = "";
			var j = i + 1;
			if (str[j] === "?") throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
			while (j < str.length) {
				if (str[j] === "\\") {
					pattern += str[j++] + str[j++];
					continue;
				}
				if (str[j] === ")") {
					count--;
					if (count === 0) {
						j++;
						break;
					}
				} else if (str[j] === "(") {
					count++;
					if (str[j + 1] !== "?") throw new TypeError("Capturing groups are not allowed at ".concat(j));
				}
				pattern += str[j++];
			}
			if (count) throw new TypeError("Unbalanced pattern at ".concat(i));
			if (!pattern) throw new TypeError("Missing pattern at ".concat(i));
			tokens.push({
				type: "PATTERN",
				index: i,
				value: pattern
			});
			i = j;
			continue;
		}
		tokens.push({
			type: "CHAR",
			index: i,
			value: str[i++]
		});
	}
	tokens.push({
		type: "END",
		index: i,
		value: ""
	});
	return tokens;
}
/**
* Parse a string for the raw tokens.
*/
function parse(str, options) {
	if (options === void 0) options = {};
	var tokens = lexer(str);
	var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
	var result = [];
	var key = 0;
	var i = 0;
	var path = "";
	var tryConsume = function(type) {
		if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
	};
	var mustConsume = function(type) {
		var value = tryConsume(type);
		if (value !== void 0) return value;
		var _a = tokens[i], nextType = _a.type, index = _a.index;
		throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
	};
	var consumeText = function() {
		var result = "";
		var value;
		while (value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) result += value;
		return result;
	};
	var isSafe = function(value) {
		for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
			var char = delimiter_1[_i];
			if (value.indexOf(char) > -1) return true;
		}
		return false;
	};
	var safePattern = function(prefix) {
		var prev = result[result.length - 1];
		var prevText = prefix || (prev && typeof prev === "string" ? prev : "");
		if (prev && !prevText) throw new TypeError("Must have text between two parameters, missing text after \"".concat(prev.name, "\""));
		if (!prevText || isSafe(prevText)) return "[^".concat(escapeString(delimiter), "]+?");
		return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
	};
	while (i < tokens.length) {
		var char = tryConsume("CHAR");
		var name = tryConsume("NAME");
		var pattern = tryConsume("PATTERN");
		if (name || pattern) {
			var prefix = char || "";
			if (prefixes.indexOf(prefix) === -1) {
				path += prefix;
				prefix = "";
			}
			if (path) {
				result.push(path);
				path = "";
			}
			result.push({
				name: name || key++,
				prefix,
				suffix: "",
				pattern: pattern || safePattern(prefix),
				modifier: tryConsume("MODIFIER") || ""
			});
			continue;
		}
		var value = char || tryConsume("ESCAPED_CHAR");
		if (value) {
			path += value;
			continue;
		}
		if (path) {
			result.push(path);
			path = "";
		}
		if (tryConsume("OPEN")) {
			var prefix = consumeText();
			var name_1 = tryConsume("NAME") || "";
			var pattern_1 = tryConsume("PATTERN") || "";
			var suffix = consumeText();
			mustConsume("CLOSE");
			result.push({
				name: name_1 || (pattern_1 ? key++ : ""),
				pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
				prefix,
				suffix,
				modifier: tryConsume("MODIFIER") || ""
			});
			continue;
		}
		mustConsume("END");
	}
	return result;
}
/**
* Escape a regular expression string.
*/
function escapeString(str) {
	return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
* Get the flags for a regexp from the options.
*/
function flags(options) {
	return options && options.sensitive ? "" : "i";
}
/**
* Pull out keys from a regexp.
*/
function regexpToRegexp(path, keys) {
	if (!keys) return path;
	var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
	var index = 0;
	var execResult = groupsRegex.exec(path.source);
	while (execResult) {
		keys.push({
			name: execResult[1] || index++,
			prefix: "",
			suffix: "",
			modifier: "",
			pattern: ""
		});
		execResult = groupsRegex.exec(path.source);
	}
	return path;
}
/**
* Transform an array into a regexp.
*/
function arrayToRegexp(paths, keys, options) {
	var parts = paths.map(function(path) {
		return pathToRegexp(path, keys, options).source;
	});
	return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
/**
* Create a path regexp from string input.
*/
function stringToRegexp(path, keys, options) {
	return tokensToRegexp(parse(path, options), keys, options);
}
/**
* Expose a function for taking tokens and returning a RegExp.
*/
function tokensToRegexp(tokens, keys, options) {
	if (options === void 0) options = {};
	var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
		return x;
	} : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
	var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
	var delimiterRe = "[".concat(escapeString(delimiter), "]");
	var route = start ? "^" : "";
	for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
		var token = tokens_1[_i];
		if (typeof token === "string") route += escapeString(encode(token));
		else {
			var prefix = escapeString(encode(token.prefix));
			var suffix = escapeString(encode(token.suffix));
			if (token.pattern) {
				if (keys) keys.push(token);
				if (prefix || suffix) if (token.modifier === "+" || token.modifier === "*") {
					var mod = token.modifier === "*" ? "?" : "";
					route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
				} else route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
				else {
					if (token.modifier === "+" || token.modifier === "*") throw new TypeError("Can not repeat \"".concat(token.name, "\" without a prefix and suffix"));
					route += "(".concat(token.pattern, ")").concat(token.modifier);
				}
			} else route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
		}
	}
	if (end) {
		if (!strict) route += "".concat(delimiterRe, "?");
		route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
	} else {
		var endToken = tokens[tokens.length - 1];
		var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
		if (!strict) route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
		if (!isEndDelimited) route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
	}
	return new RegExp(route, flags(options));
}
/**
* Normalize the given path string, returning a regular expression.
*
* An empty array can be passed in for the keys, which will hold the
* placeholder key descriptions. For example, using `/user/:id`, `keys` will
* contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
*/
function pathToRegexp(path, keys, options) {
	if (path instanceof RegExp) return regexpToRegexp(path, keys);
	if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
	return stringToRegexp(path, keys, options);
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/isPathMatchingRoute.js
var isPathMatchingRoute = ({ currentRoute, exact, path: viewPath, sensitive, strict }) => {
	if (!viewPath) return false;
	const viewRoute = pathToRegexp(viewPath, [], {
		sensitive,
		strict
	}).exec(currentRoute)?.[0] || viewPath;
	if (exact) return currentRoute === viewRoute;
	if (!exact) {
		if (!currentRoute.startsWith(viewRoute)) return false;
		const remainingPath = currentRoute.slice(viewRoute.length);
		return remainingPath === "" || remainingPath.startsWith("/");
	}
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Document/getCustomViewByRoute.js
var getCustomViewByRoute = ({ baseRoute, currentRoute, views }) => {
	if (typeof views?.edit === "object") {
		let viewKey;
		const foundViewConfig = Object.entries(views.edit).find(([key, view]) => {
			if (typeof view === "object" && "path" in view) {
				const isMatching = isPathMatchingRoute({
					currentRoute,
					exact: true,
					path: `${baseRoute}${view.path}`
				});
				if (isMatching) viewKey = key;
				return isMatching;
			}
			return false;
		})?.[1];
		if (foundViewConfig && "Component" in foundViewConfig) return {
			Component: foundViewConfig.Component,
			viewKey
		};
	}
	return { Component: null };
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/Document/getDocumentView.js
var getDocumentView = ({ collectionConfig, config, docPermissions, globalConfig, routeSegments }) => {
	const UnauthorizedView = UnauthorizedViewWithGutter;
	let View = null;
	let viewKey;
	const { routes: { admin: adminRoute } } = config;
	const views = collectionConfig && collectionConfig?.admin?.components?.views || globalConfig && globalConfig?.admin?.components?.views;
	if (!docPermissions?.read) throw new Error("not-found");
	if (collectionConfig) {
		const [collectionEntity, collectionSlug, segment3, segment4, segment5, ...remainingSegments] = routeSegments;
		switch (routeSegments.length) {
			case 3:
				switch (segment3) {
					case "create":
						if ("create" in docPermissions && docPermissions.create) View = getCustomDocumentViewByKey(views, "default") || DefaultEditView;
						else View = UnauthorizedView;
						break;
					default: {
						const baseRoute = [
							adminRoute !== "/" && adminRoute,
							"collections",
							collectionSlug,
							segment3
						].filter(Boolean).join("/");
						const { Component: CustomViewComponent, viewKey: customViewKey } = getCustomViewByRoute({
							baseRoute,
							currentRoute: [
								baseRoute,
								segment4,
								segment5,
								...remainingSegments
							].filter(Boolean).join("/"),
							views
						});
						if (customViewKey) {
							viewKey = customViewKey;
							View = CustomViewComponent;
						} else View = getCustomDocumentViewByKey(views, "default") || DefaultEditView;
						break;
					}
				}
				break;
			case 4:
				if (segment3 === "trash" && segment4) {
					View = getCustomDocumentViewByKey(views, "default") || DefaultEditView;
					break;
				}
				switch (segment4) {
					case "api":
						View = getCustomDocumentViewByKey(views, "api") || APIView;
						break;
					case "versions":
						if (docPermissions?.readVersions) View = getCustomDocumentViewByKey(views, "versions") || VersionsView;
						else View = UnauthorizedView;
						break;
					default: {
						const baseRoute = [
							adminRoute !== "/" && adminRoute,
							"collections",
							collectionSlug,
							segment3
						].filter(Boolean).join("/");
						const { Component: CustomViewComponent, viewKey: customViewKey } = getCustomViewByRoute({
							baseRoute,
							currentRoute: [
								baseRoute,
								segment4,
								segment5,
								...remainingSegments
							].filter(Boolean).join("/"),
							views
						});
						if (customViewKey) {
							viewKey = customViewKey;
							View = CustomViewComponent;
						}
						break;
					}
				}
				break;
			case 5:
				if (segment3 === "trash") switch (segment5) {
					case "api":
						View = getCustomDocumentViewByKey(views, "api") || APIView;
						break;
					case "versions":
						if (docPermissions?.readVersions) View = getCustomDocumentViewByKey(views, "versions") || VersionsView;
						else View = UnauthorizedView;
						break;
					default:
						View = getCustomDocumentViewByKey(views, "default") || DefaultEditView;
						break;
				}
				else if (segment4 === "versions") if (docPermissions?.readVersions) View = getCustomDocumentViewByKey(views, "version") || VersionView;
				else View = UnauthorizedView;
				else {
					const baseRoute = [
						adminRoute !== "/" && adminRoute,
						collectionEntity,
						collectionSlug,
						segment3
					].filter(Boolean).join("/");
					const { Component: CustomViewComponent, viewKey: customViewKey } = getCustomViewByRoute({
						baseRoute,
						currentRoute: [
							baseRoute,
							segment4,
							segment5,
							...remainingSegments
						].filter(Boolean).join("/"),
						views
					});
					if (customViewKey) {
						viewKey = customViewKey;
						View = CustomViewComponent;
					}
				}
				break;
			default:
				if (segment3 === "trash" && segment5 === "versions") if (docPermissions?.readVersions) View = getCustomDocumentViewByKey(views, "version") || VersionView;
				else View = UnauthorizedView;
				else {
					const baseRoute = [
						adminRoute !== "/" && adminRoute,
						collectionEntity,
						collectionSlug,
						segment3
					].filter(Boolean).join("/");
					const { Component: CustomViewComponent, viewKey: customViewKey } = getCustomViewByRoute({
						baseRoute,
						currentRoute: [
							baseRoute,
							segment4,
							segment5,
							...remainingSegments
						].filter(Boolean).join("/"),
						views
					});
					if (customViewKey) {
						viewKey = customViewKey;
						View = CustomViewComponent;
					}
				}
				break;
		}
	}
	if (globalConfig) {
		const [globalEntity, globalSlug, segment3, ...remainingSegments] = routeSegments;
		switch (routeSegments.length) {
			case 2:
				View = getCustomDocumentViewByKey(views, "default") || DefaultEditView;
				break;
			case 3:
				switch (segment3) {
					case "api":
						View = getCustomDocumentViewByKey(views, "api") || APIView;
						break;
					case "versions":
						if (docPermissions?.readVersions) View = getCustomDocumentViewByKey(views, "versions") || VersionsView;
						else View = UnauthorizedView;
						break;
					default:
						if (docPermissions?.read) {
							const baseRoute = [
								adminRoute,
								globalEntity,
								globalSlug,
								segment3
							].filter(Boolean).join("/");
							const { Component: CustomViewComponent, viewKey: customViewKey } = getCustomViewByRoute({
								baseRoute,
								currentRoute: [
									baseRoute,
									segment3,
									...remainingSegments
								].filter(Boolean).join("/"),
								views
							});
							if (customViewKey) {
								viewKey = customViewKey;
								View = CustomViewComponent;
							} else View = DefaultEditView;
						} else View = UnauthorizedView;
						break;
				}
				break;
			default:
				if (segment3 === "versions") if (docPermissions?.readVersions) View = getCustomDocumentViewByKey(views, "version") || VersionView;
				else View = UnauthorizedView;
				else {
					const baseRoute = [
						adminRoute !== "/" && adminRoute,
						"globals",
						globalSlug
					].filter(Boolean).join("/");
					const { Component: CustomViewComponent, viewKey: customViewKey } = getCustomViewByRoute({
						baseRoute,
						currentRoute: [
							baseRoute,
							segment3,
							...remainingSegments
						].filter(Boolean).join("/"),
						views
					});
					if (customViewKey) {
						viewKey = customViewKey;
						View = CustomViewComponent;
					}
				}
				break;
		}
	}
	return {
		View,
		viewKey
	};
};
//#endregion
export { isPathMatchingRoute as n, formatDate as r, getDocumentView as t };
