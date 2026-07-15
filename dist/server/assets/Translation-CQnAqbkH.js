import { o as __toESM } from "./rolldown-runtime-CE-6LUnI.js";
import { t as require_react } from "./react-yhpvVyYg.js";
import { t as require_jsx_runtime } from "./jsx-runtime-Ch3VfgV3.js";
import { i as importDateFNSLocale, n as t } from "./init-BuOU6s5d.js";
import { a as useRouter } from "./RouterAdapter-KVwWVbaC.js";
import { t as require_compiler_runtime } from "./compiler-runtime-IEfSpGV5.js";
import { t as enUS } from "./en-US-Cq5krUMX.js";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/icons/Chevron/index.js
var import_jsx_runtime = require_jsx_runtime();
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var paths = {
	16: "M9.76777 6.76764C9.96304 6.57248 10.2796 6.57241 10.4748 6.76764C10.67 6.96288 10.6699 7.27943 10.4748 7.47467L8.35371 9.59577C8.15847 9.79101 7.84194 9.79096 7.64668 9.59577L5.52461 7.47467C5.32969 7.27948 5.32969 6.96284 5.52461 6.76764C5.71988 6.57248 6.03738 6.57241 6.23261 6.76764L8.00019 8.53522L9.76777 6.76764Z",
	24: "M8.35352 10.1465C8.15825 9.9512 7.84175 9.9512 7.64648 10.1465C7.45122 10.3417 7.45122 10.6583 7.64648 10.8535L11.6465 14.8535C11.8417 15.0488 12.1583 15.0488 12.3535 14.8535L16.3535 10.8535C16.5488 10.6583 16.5488 10.3417 16.3535 10.1465C16.1583 9.9512 15.8417 9.9512 15.6465 10.1465L12 13.793L8.35352 10.1465Z"
};
var rotations = {
	down: 0,
	left: 90,
	right: -90,
	up: 180
};
var ChevronIcon = ({ ariaLabel, className, direction = "down", size = 24 }) => /*#__PURE__*/ (0, import_jsx_runtime.jsx)("svg", {
	"aria-label": ariaLabel,
	className: [
		"icon",
		"icon--chevron",
		className
	].filter(Boolean).join(" "),
	fill: "none",
	height: size,
	style: { transform: rotations[direction] ? `rotate(${rotations[direction]}deg)` : void 0 },
	viewBox: `0 0 ${size} ${size}`,
	width: size,
	xmlns: "http://www.w3.org/2000/svg",
	children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)("path", {
		className: "fill",
		clipRule: "evenodd",
		d: paths[size],
		fillRule: "evenodd"
	})
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/ServerFunctions/index.js
var import_compiler_runtime = require_compiler_runtime();
var ServerFunctionsContext = /*#__PURE__*/ (0, import_react.createContext)(void 0);
var useServerFunctions = () => {
	const context = import_react.use(ServerFunctionsContext);
	if (context === void 0) throw new Error("useServerFunctions must be used within a ServerFunctionsProvider");
	return context;
};
var ServerFunctionsProvider = ({ children, serverFunction }) => {
	if (!serverFunction) throw new Error("ServerFunctionsProvider requires a serverFunction prop");
	const getDocumentSlots = (0, import_react.useCallback)(async (args) => await serverFunction({
		name: "render-document-slots",
		args
	}), [serverFunction]);
	const schedulePublish = (0, import_react.useCallback)(async (args) => {
		const { signal: remoteSignal, ...rest } = args;
		try {
			if (!remoteSignal?.aborted) {
				const result = await serverFunction({
					name: "schedule-publish",
					args: { ...rest }
				});
				if (!remoteSignal?.aborted) return result;
			}
		} catch (_err) {
			console.error(_err);
		}
		let error = `Error scheduling ${rest.type}`;
		if (rest.doc) error += ` for document with ID ${rest.doc.value} in collection ${rest.doc.relationTo}`;
		return { error };
	}, [serverFunction]);
	const getFormState = (0, import_react.useCallback)(async (args) => {
		const { signal: remoteSignal, ...rest } = args || {};
		try {
			if (!remoteSignal?.aborted) {
				const result = await serverFunction({
					name: "form-state",
					args: {
						fallbackLocale: false,
						...rest
					}
				});
				if (!remoteSignal?.aborted) return result;
			}
		} catch (_err) {
			console.error(_err);
		}
		return { state: null };
	}, [serverFunction]);
	const getTableState = (0, import_react.useCallback)(async (args) => {
		const { signal: remoteSignal, ...rest } = args || {};
		try {
			if (!remoteSignal?.aborted) {
				const result = await serverFunction({
					name: "table-state",
					args: {
						fallbackLocale: false,
						...rest
					}
				});
				if (!remoteSignal?.aborted) return result;
			}
		} catch (_err) {
			console.error(_err);
		}
	}, [serverFunction]);
	const renderDocument = (0, import_react.useCallback)(async (args) => {
		const { signal: remoteSignal, ...rest } = args || {};
		try {
			return await serverFunction({
				name: "render-document",
				args: {
					fallbackLocale: false,
					...rest
				}
			});
		} catch (_err) {
			console.error(_err);
		}
	}, [serverFunction]);
	const copyDataFromLocale = (0, import_react.useCallback)(async (args) => {
		const { signal: remoteSignal, ...rest } = args || {};
		const result = await serverFunction({
			name: "copy-data-from-locale",
			args: rest
		});
		if (!remoteSignal?.aborted) return { data: result };
	}, [serverFunction]);
	const _internal_renderField = (0, import_react.useCallback)(async (args) => {
		try {
			return await serverFunction({
				name: "render-field",
				args
			});
		} catch (_err) {
			console.error(_err);
		}
	}, [serverFunction]);
	const slugify = (0, import_react.useCallback)(async (args) => {
		const { signal: remoteSignal, ...rest } = args || {};
		try {
			return await serverFunction({
				name: "slugify",
				args: { ...rest }
			});
		} catch (_err) {
			console.error(_err);
		}
	}, [serverFunction]);
	const switchLanguage = (0, import_react.useCallback)(async (lang) => {
		await serverFunction({
			name: "switch-language",
			args: { lang }
		});
	}, [serverFunction]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ServerFunctionsContext, {
		value: {
			_internal_renderField,
			copyDataFromLocale,
			getDocumentSlots,
			getFormState,
			getTableState,
			renderDocument,
			schedulePublish,
			serverFunction,
			slugify,
			switchLanguage
		},
		children
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/Translation/index.js
var Context = /*#__PURE__*/ (0, import_react.createContext)({
	i18n: {
		dateFNS: enUS,
		dateFNSKey: "en-US",
		fallbackLanguage: "en",
		language: "en",
		t: (key) => key,
		translations: {}
	},
	languageOptions: void 0,
	switchLanguage: void 0,
	t: (key) => void 0
});
var TranslationProvider = (t0) => {
	const $ = (0, import_compiler_runtime.c)(18);
	const { children, dateFNSKey, fallbackLang, language, languageOptions, translations } = t0;
	const router = useRouter();
	const { switchLanguage: switchLanguageServerFn } = useServerFunctions();
	const [dateFNS, setDateFNS] = (0, import_react.useState)();
	let t1;
	if ($[0] !== translations) {
		t1 = (key, vars) => t({
			key,
			translations,
			vars
		});
		$[0] = translations;
		$[1] = t1;
	} else t1 = $[1];
	const nextT = t1;
	let t2;
	if ($[2] !== router || $[3] !== switchLanguageServerFn) {
		t2 = async (lang) => {
			try {
				await switchLanguageServerFn(lang);
				router.refresh();
			} catch (t3) {
				const error = t3;
				console.error(`Error loading language: "${lang}"`, error);
			}
		};
		$[2] = router;
		$[3] = switchLanguageServerFn;
		$[4] = t2;
	} else t2 = $[4];
	const switchLanguage = t2;
	let t3;
	let t4;
	if ($[5] !== dateFNSKey) {
		t3 = () => {
			const loadDateFNS = async () => {
				const imported = await importDateFNSLocale(dateFNSKey);
				setDateFNS(imported);
			};
			loadDateFNS();
		};
		t4 = [dateFNSKey];
		$[5] = dateFNSKey;
		$[6] = t3;
		$[7] = t4;
	} else {
		t3 = $[6];
		t4 = $[7];
	}
	(0, import_react.useEffect)(t3, t4);
	let t5;
	if ($[8] !== children || $[9] !== dateFNS || $[10] !== dateFNSKey || $[11] !== fallbackLang || $[12] !== language || $[13] !== languageOptions || $[14] !== nextT || $[15] !== switchLanguage || $[16] !== translations) {
		t5 = (0, import_jsx_runtime.jsx)(Context, {
			value: {
				i18n: {
					dateFNS,
					dateFNSKey,
					fallbackLanguage: fallbackLang,
					language,
					t: nextT,
					translations
				},
				languageOptions,
				switchLanguage,
				t: nextT
			},
			children
		});
		$[8] = children;
		$[9] = dateFNS;
		$[10] = dateFNSKey;
		$[11] = fallbackLang;
		$[12] = language;
		$[13] = languageOptions;
		$[14] = nextT;
		$[15] = switchLanguage;
		$[16] = translations;
		$[17] = t5;
	} else t5 = $[17];
	return t5;
};
var useTranslation = () => (0, import_react.use)(Context);
//#endregion
export { ChevronIcon as a, useServerFunctions as i, useTranslation as n, ServerFunctionsProvider as r, TranslationProvider as t };
