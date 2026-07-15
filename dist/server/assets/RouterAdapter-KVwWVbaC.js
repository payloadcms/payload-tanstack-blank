import { o as __toESM } from "./rolldown-runtime-CE-6LUnI.js";
import { t as require_react } from "./react-yhpvVyYg.js";
import { t as require_jsx_runtime } from "./jsx-runtime-Ch3VfgV3.js";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/RouterAdapter/index.js
var import_jsx_runtime = require_jsx_runtime();
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* The RouterAdapter context. Framework adapters populate this by rendering a
* provider component that calls framework-specific hooks (e.g. next/navigation)
* and passes the values here. This avoids calling dynamic hooks from props,
* which would violate React compiler rules.
*/
var RouterAdapterContext = /*#__PURE__*/ (0, import_react.createContext)(null);
function useRouterAdapterContext() {
	const ctx = (0, import_react.use)(RouterAdapterContext);
	if (!ctx) throw new Error("useRouter/usePathname/useSearchParams/useParams must be used within a RouterAdapterProvider");
	return ctx;
}
function useRouter() {
	return useRouterAdapterContext().router;
}
function usePathname() {
	return useRouterAdapterContext().pathname;
}
function useSearchParams() {
	return useRouterAdapterContext().searchParams;
}
function useParams() {
	return useRouterAdapterContext().params;
}
var PayloadLink = ({ ref, ...props }) => {
	const { Link: LinkComponent } = useRouterAdapterContext();
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(LinkComponent, {
		...props,
		ref
	});
};
//#endregion
export { useRouter as a, usePathname as i, RouterAdapterContext as n, useSearchParams as o, useParams as r, PayloadLink as t };
