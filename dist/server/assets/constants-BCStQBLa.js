import "./rolldown-runtime-CE-6LUnI.js";
import { t as require_react } from "./react-yhpvVyYg.js";
import { t as require_jsx_runtime } from "./jsx-runtime-Ch3VfgV3.js";
import { t as require_compiler_runtime } from "./compiler-runtime-IEfSpGV5.js";
require_compiler_runtime();
var import_jsx_runtime = require_jsx_runtime();
require_react();
var baseClass = "shimmer-effect";
var ShimmerEffect = ({ animationDelay = "0ms", className, disableInlineStyles = false, height = "60px", transparent, width = "100%", ...rest }) => {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)("div", {
		...rest,
		className: [
			baseClass,
			transparent && `${baseClass}--transparent`,
			className
		].filter(Boolean).join(" "),
		style: {
			...rest?.style || {},
			height: !disableInlineStyles && (typeof height === "number" ? `${height}px` : height),
			width: !disableInlineStyles && (typeof width === "number" ? `${width}px` : width)
		},
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)("div", {
			className: "shimmer-effect__shine",
			style: { animationDelay }
		})
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/CodeEditor/constants.js
var defaultOptions = {
	insertSpaces: false,
	tabSize: 4,
	trimAutoWhitespace: false
};
var defaultGlobalEditorOptions = {
	fontSize: 11,
	hideCursorInOverviewRuler: true,
	lineDecorationsWidth: 12,
	lineHeight: 16,
	lineNumbersMinChars: 3,
	minimap: { enabled: false },
	overviewRulerBorder: false,
	readOnly: false,
	scrollbar: { alwaysConsumeMouseWheel: false },
	scrollBeyondLastLine: false,
	wordWrap: "on"
};
//#endregion
export { defaultOptions as n, ShimmerEffect as r, defaultGlobalEditorOptions as t };
