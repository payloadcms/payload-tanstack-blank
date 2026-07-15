import { o as __toESM } from "./rolldown-runtime-CE-6LUnI.js";
import { t as require_react } from "./react-yhpvVyYg.js";
import { t as require_jsx_runtime } from "./jsx-runtime-Ch3VfgV3.js";
import { t as InfoIcon } from "./Info-BfYK1Y4L.js";
import { t as Link } from "./Link-C3S1Sxnm.js";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Banner/index.js
var import_jsx_runtime = require_jsx_runtime();
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var baseClass = "banner";
var Banner = ({ type = "default", alignIcon = "left", children, className, icon: iconFromProps, onClick, to }) => {
	const icon = iconFromProps === void 0 ? /*#__PURE__*/ (0, import_jsx_runtime.jsx)(InfoIcon, {}) : iconFromProps;
	const classes = [
		baseClass,
		`${baseClass}--type-${type}`,
		className && className,
		to && `${baseClass}--has-link`,
		(to || onClick) && `${baseClass}--has-action`,
		icon && `${baseClass}--has-icon`,
		icon && `${baseClass}--align-icon-${alignIcon}`
	].filter(Boolean).join(" ");
	let RenderedType = "div";
	if (onClick && !to) RenderedType = "button";
	if (to) RenderedType = Link;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(RenderedType, {
		className: classes,
		href: to || null,
		onClick,
		children: [
			icon && alignIcon === "left" && /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: icon }),
			/*#__PURE__*/ (0, import_jsx_runtime.jsx)("span", {
				className: `${baseClass}__content`,
				children
			}),
			icon && alignIcon === "right" && /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: icon })
		]
	});
};
//#endregion
export { Banner as t };
