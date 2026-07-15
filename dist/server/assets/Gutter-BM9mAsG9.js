import "./rolldown-runtime-CE-6LUnI.js";
import { t as require_react } from "./react-yhpvVyYg.js";
import { t as require_jsx_runtime } from "./jsx-runtime-Ch3VfgV3.js";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Gutter/index.js
var import_jsx_runtime = require_jsx_runtime();
require_react();
var baseClass = "gutter";
var Gutter = (props) => {
	const { children, className, left = true, negativeLeft = false, negativeRight = false, ref, right = true } = props;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)("div", {
		className: [
			baseClass,
			left && !negativeLeft && `${baseClass}--left`,
			right && !negativeRight && `${baseClass}--right`,
			negativeLeft && `${baseClass}--negative-left`,
			negativeRight && `${baseClass}--negative-right`,
			className
		].filter(Boolean).join(" "),
		ref,
		children
	});
};
//#endregion
export { Gutter as t };
