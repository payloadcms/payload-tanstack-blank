//#region node_modules/.pnpm/@payloadcms+translations@4.0.0-internal.fa183d3/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js
var getTranslation = (label, i18n) => {
	if (typeof label === "object" && !Object.prototype.hasOwnProperty.call(label, "$$typeof")) {
		if (label[i18n.language]) return label[i18n.language];
		let fallbacks = [];
		if (typeof i18n.fallbackLanguage === "string") fallbacks = [i18n.fallbackLanguage];
		else if (Array.isArray(i18n.fallbackLanguage)) fallbacks = i18n.fallbackLanguage;
		const fallbackLang = fallbacks.find((language) => label[language]);
		return fallbackLang && label[fallbackLang] ? label[fallbackLang] : label[Object.keys(label)[0]];
	}
	if (typeof label === "function") return label({
		i18n,
		t: i18n.t
	});
	return label;
};
//#endregion
export { getTranslation as t };
