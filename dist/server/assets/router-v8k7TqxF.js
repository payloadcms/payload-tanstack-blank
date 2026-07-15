import { o as __toESM } from "./rolldown-runtime-CE-6LUnI.js";
import { t as require_react } from "./react-yhpvVyYg.js";
import { B as reactUse, E as joinPaths, O as trimPathLeft, R as isModuleNotFoundError, S as rootRouteId, f as RouterCore, g as createNonReactiveReadonlyStore, h as createNonReactiveMutableStore, j as invariant, k as trimPathRight, x as redirect } from "./Match-DGEQGAgJ.js";
import { a as maybeMap, c as Link, i as isBuffer, l as useParams, n as parse, o as formats_default, r as encode, s as formatters, u as useMatch } from "./RouterAdapter-BgsiQH-n.js";
import { t as require_jsx_runtime } from "./jsx-runtime-Ch3VfgV3.js";
import { a as withPayloadRoot, i as payloadAdminSplatRoute, l as useNavigate, n as payloadLayoutRoute, o as Scripts, r as payloadAdminIndexRoute, s as HeadContent, t as createServerFunctionClient, u as useLoaderData } from "./client-DUDl55ZS.js";
import { i as getServerFnById, r as TSS_SERVER_FUNCTION, t as createServerFn } from "../server.js";
//#region node_modules/.pnpm/@tanstack+router-core@1.171.13/node_modules/@tanstack/router-core/dist/esm/route.js
var BaseRoute = class {
	get to() {
		return this._to;
	}
	get id() {
		return this._id;
	}
	get path() {
		return this._path;
	}
	get fullPath() {
		return this._fullPath;
	}
	constructor(options) {
		this.init = (opts) => {
			this.originalIndex = opts.originalIndex;
			const options = this.options;
			const isRoot = !options?.path && !options?.id;
			this.parentRoute = this.options.getParentRoute?.();
			if (isRoot) this._path = rootRouteId;
			else if (!this.parentRoute) invariant();
			let path = isRoot ? rootRouteId : options?.path;
			if (path && path !== "/") path = trimPathLeft(path);
			const customId = options?.id || path;
			let id = isRoot ? rootRouteId : joinPaths([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, customId]);
			if (path === "__root__") path = "/";
			if (id !== "__root__") id = joinPaths(["/", id]);
			const fullPath = id === "__root__" ? "/" : joinPaths([this.parentRoute.fullPath, path]);
			this._path = path;
			this._id = id;
			this._fullPath = fullPath;
			this._to = trimPathRight(fullPath);
		};
		this.addChildren = (children) => {
			return this._addFileChildren(children);
		};
		this._addFileChildren = (children) => {
			if (Array.isArray(children)) this.children = children;
			if (typeof children === "object" && children !== null) this.children = Object.values(children);
			return this;
		};
		this._addFileTypes = () => {
			return this;
		};
		this.updateLoader = (options) => {
			Object.assign(this.options, options);
			return this;
		};
		this.update = (options) => {
			Object.assign(this.options, options);
			return this;
		};
		this.lazy = (lazyFn) => {
			this.lazyFn = lazyFn;
			return this;
		};
		this.redirect = (opts) => redirect({
			from: this.fullPath,
			...opts
		});
		this.options = options || {};
		this.isRoot = !options?.getParentRoute;
		if (options?.id && options?.path) throw new Error(`Route cannot have both an 'id' and a 'path' option.`);
	}
};
var BaseRootRoute = class extends BaseRoute {
	constructor(options) {
		super(options);
	}
};
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/useLoaderDeps.js
/**
* Read and select the current route's loader dependencies object.
*
* Options:
* - `from`: Choose which route's loader deps to read
* - `select`: Map the deps to a derived value
* - `structuralSharing`: Enable structural sharing for stable references
*
* @returns The loader deps (or selected value) for the matched route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useLoaderDepsHook
*/
function useLoaderDeps(opts) {
	const { select, ...rest } = opts;
	return useMatch({
		...rest,
		select: (match) => {
			return select ? select(match.loaderDeps) : match.loaderDeps;
		}
	});
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/useSearch.js
/**
* Read and select the current route's search parameters with type-safety.
*
* Options:
* - `from`/`strict`: Control which route's search is read and how strictly it's typed
* - `select`: Map the search object to a derived value for render optimization
* - `structuralSharing`: Enable structural sharing for stable references
* - `shouldThrow`: Throw when the route is not found (strict contexts)
*
* @returns The search object (or selected value) for the matched route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useSearchHook
*/
function useSearch(opts) {
	return useMatch({
		from: opts.from,
		strict: opts.strict,
		shouldThrow: opts.shouldThrow,
		structuralSharing: opts.structuralSharing,
		select: (match) => {
			return opts.select ? opts.select(match.search) : match.search;
		}
	});
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/useRouteContext.js
function useRouteContext(opts) {
	return useMatch({
		...opts,
		select: (match) => opts.select ? opts.select(match.context) : match.context
	});
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/route.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var Route$7 = class extends BaseRoute {
	/**
	* @deprecated Use the `createRoute` function instead.
	*/
	constructor(options) {
		super(options);
		this.useMatch = (opts) => {
			return useMatch({
				select: opts?.select,
				from: this.id,
				structuralSharing: opts?.structuralSharing
			});
		};
		this.useRouteContext = (opts) => {
			return useRouteContext({
				...opts,
				from: this.id
			});
		};
		this.useSearch = (opts) => {
			return useSearch({
				select: opts?.select,
				structuralSharing: opts?.structuralSharing,
				from: this.id
			});
		};
		this.useParams = (opts) => {
			return useParams({
				select: opts?.select,
				structuralSharing: opts?.structuralSharing,
				from: this.id
			});
		};
		this.useLoaderDeps = (opts) => {
			return useLoaderDeps({
				...opts,
				from: this.id
			});
		};
		this.useLoaderData = (opts) => {
			return useLoaderData({
				...opts,
				from: this.id
			});
		};
		this.useNavigate = () => {
			return useNavigate({ from: this.fullPath });
		};
		this.Link = import_react.forwardRef((props, ref) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				ref,
				from: this.fullPath,
				...props
			});
		});
	}
};
/**
* Creates a non-root Route instance for code-based routing.
*
* Use this to define a route that will be composed into a route tree
* (typically via a parent route's `addChildren`). If you're using file-based
* routing, prefer `createFileRoute`.
*
* @param options Route options (path, component, loader, context, etc.).
* @returns A Route instance to be attached to the route tree.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createRouteFunction
*/
function createRoute(options) {
	return new Route$7(options);
}
var RootRoute = class extends BaseRootRoute {
	/**
	* @deprecated `RootRoute` is now an internal implementation detail. Use `createRootRoute()` instead.
	*/
	constructor(options) {
		super(options);
		this.useMatch = (opts) => {
			return useMatch({
				select: opts?.select,
				from: this.id,
				structuralSharing: opts?.structuralSharing
			});
		};
		this.useRouteContext = (opts) => {
			return useRouteContext({
				...opts,
				from: this.id
			});
		};
		this.useSearch = (opts) => {
			return useSearch({
				select: opts?.select,
				structuralSharing: opts?.structuralSharing,
				from: this.id
			});
		};
		this.useParams = (opts) => {
			return useParams({
				select: opts?.select,
				structuralSharing: opts?.structuralSharing,
				from: this.id
			});
		};
		this.useLoaderDeps = (opts) => {
			return useLoaderDeps({
				...opts,
				from: this.id
			});
		};
		this.useLoaderData = (opts) => {
			return useLoaderData({
				...opts,
				from: this.id
			});
		};
		this.useNavigate = () => {
			return useNavigate({ from: this.fullPath });
		};
		this.Link = import_react.forwardRef((props, ref) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				ref,
				from: this.fullPath,
				...props
			});
		});
	}
};
/**
* Creates a root Route instance used to build your route tree.
*
* Typically paired with `createRouter({ routeTree })`. If you need to require
* a typed router context, use `createRootRouteWithContext` instead.
*
* @param options Root route options (component, error, pending, etc.).
* @returns A root route instance.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createRootRouteFunction
*/
function createRootRoute(options) {
	return new RootRoute(options);
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/fileRoute.js
/**
* Creates a file-based Route factory for a given path.
*
* Used by TanStack Router's file-based routing to associate a file with a
* route. The returned function accepts standard route options. In normal usage
* the `path` string is inserted and maintained by the `tsr` generator.
*
* @param path File path literal for the route (usually auto-generated).
* @returns A function that accepts Route options and returns a Route instance.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createFileRouteFunction
*/
function createFileRoute(path) {
	return new FileRoute(path, { silent: true }).createRoute;
}
/** 
@deprecated It's no longer recommended to use the `FileRoute` class directly.
Instead, use `createFileRoute('/path/to/file')(options)` to create a file route.
*/
var FileRoute = class {
	constructor(path, _opts) {
		this.path = path;
		this.createRoute = (options) => {
			const route = createRoute(options);
			route.isRoot = false;
			return route;
		};
		this.silent = _opts?.silent;
	}
};
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/lazyRouteComponent.js
/**
* Wrap a dynamic import to create a route component that supports
* `.preload()` and friendly reload-on-module-missing behavior.
*
* @param importer Function returning a module promise
* @param exportName Named export to use (default: `default`)
* @returns A lazy route component compatible with TanStack Router
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/lazyRouteComponentFunction
*/
function lazyRouteComponent(importer, exportName) {
	let loadPromise;
	let comp;
	let error;
	let reload;
	const load = () => {
		if (!loadPromise) loadPromise = importer().then((res) => {
			loadPromise = void 0;
			comp = res[exportName ?? "default"];
		}).catch((err) => {
			error = err;
			if (isModuleNotFoundError(error)) {
				if (error instanceof Error && typeof window !== "undefined" && typeof sessionStorage !== "undefined") {
					const storageKey = `tanstack_router_reload:${error.message}`;
					if (!sessionStorage.getItem(storageKey)) {
						sessionStorage.setItem(storageKey, "1");
						reload = true;
					}
				}
			}
		});
		return loadPromise;
	};
	const lazyComp = function Lazy(props) {
		if (reload) {
			window.location.reload();
			throw new Promise(() => {});
		}
		if (error) throw error;
		if (!comp) if (reactUse) reactUse(load());
		else throw load();
		return import_react.createElement(comp, props);
	};
	lazyComp.preload = load;
	return lazyComp;
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/routerStores.js
var getStoreFactory = (opts) => {
	return {
		createMutableStore: createNonReactiveMutableStore,
		createReadonlyStore: createNonReactiveReadonlyStore,
		batch: (fn) => fn()
	};
};
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/router.js
/**
* Creates a new Router instance for React.
*
* Pass the returned router to `RouterProvider` to enable routing.
* Notable options: `routeTree` (your route definitions) and `context`
* (required if the root route was created with `createRootRouteWithContext`).
*
* @param options Router options used to configure the router.
* @returns A Router instance to be provided to `RouterProvider`.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createRouterFunction
*/
var createRouter = (options) => {
	return new Router(options);
};
var Router = class extends RouterCore {
	constructor(options) {
		super(options, getStoreFactory);
	}
};
//#endregion
//#region node_modules/.pnpm/qs-esm@7.0.3/node_modules/qs-esm/lib/stringify.js
var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
	brackets: function brackets(prefix) {
		return prefix + "[]";
	},
	comma: "comma",
	indices: function indices(prefix, key) {
		return prefix + "[" + key + "]";
	},
	repeat: function repeat(prefix) {
		return prefix;
	}
};
var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
	push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats_default;
var defaults = {
	addQueryPrefix: false,
	allowDots: false,
	allowEmptyArrays: false,
	arrayFormat: "indices",
	charset: "utf-8",
	charsetSentinel: false,
	delimiter: "&",
	encode: true,
	encodeDotInKeys: false,
	encoder: encode,
	encodeValuesOnly: false,
	format: defaultFormat,
	formatter: formatters[defaultFormat],
	indices: false,
	serializeDate: function serializeDate(date) {
		return toISO.call(date);
	},
	skipNulls: false,
	strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
	return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
};
var sentinel = {};
var _stringify = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
	let obj = object;
	let tmpSc = sideChannel;
	let step = 0;
	let findFlag = false;
	while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
		const pos = tmpSc.get(object);
		step += 1;
		if (typeof pos !== "undefined") if (pos === step) throw new RangeError("Cyclic object value");
		else findFlag = true;
		if (typeof tmpSc.get(sentinel) === "undefined") step = 0;
	}
	if (typeof filter === "function") obj = filter(prefix, obj);
	else if (obj instanceof Date) obj = serializeDate(obj);
	else if (generateArrayPrefix === "comma" && isArray(obj)) obj = maybeMap(obj, function(value) {
		if (value instanceof Date) return serializeDate(value);
		return value;
	});
	if (obj === null) {
		if (strictNullHandling) return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
		obj = "";
	}
	if (isNonNullishPrimitive(obj) || isBuffer(obj)) {
		if (encoder) return [formatter(encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format)) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
		return [formatter(prefix) + "=" + formatter(String(obj))];
	}
	const values = [];
	if (typeof obj === "undefined") return values;
	let objKeys;
	if (generateArrayPrefix === "comma" && isArray(obj)) {
		if (encodeValuesOnly && encoder) obj = maybeMap(obj, encoder);
		objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
	} else if (isArray(filter)) objKeys = filter;
	else {
		const keys = Object.keys(obj);
		objKeys = sort ? keys.sort(sort) : keys;
	}
	const encodedPrefix = encodeDotInKeys ? prefix.replace(/\./g, "%2E") : prefix;
	const adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
	if (allowEmptyArrays && isArray(obj) && obj.length === 0) return adjustedPrefix + "[]";
	for (let j = 0; j < objKeys.length; ++j) {
		const key = objKeys[j];
		const value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
		if (skipNulls && value === null) continue;
		const encodedKey = allowDots && encodeDotInKeys ? key.replace(/\./g, "%2E") : key;
		const keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
		sideChannel.set(object, step);
		const valueSideChannel = /* @__PURE__ */ new WeakMap();
		valueSideChannel.set(sentinel, sideChannel);
		pushToArray(values, _stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
	}
	return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
	if (!opts) return defaults;
	if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
	if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
	if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") throw new TypeError("Encoder has to be a function.");
	const charset = opts.charset || defaults.charset;
	if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
	let format = formats_default;
	if (typeof opts.format !== "undefined") {
		if (!has.call(formatters, opts.format)) throw new TypeError("Unknown format option provided.");
		format = opts.format;
	}
	const formatter = formatters[format];
	let filter = defaults.filter;
	if (typeof opts.filter === "function" || isArray(opts.filter)) filter = opts.filter;
	let arrayFormat;
	if (opts.arrayFormat in arrayPrefixGenerators) arrayFormat = opts.arrayFormat;
	else if ("indices" in opts) arrayFormat = opts.indices ? "indices" : "repeat";
	else arrayFormat = defaults.arrayFormat;
	if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
	const allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
	return {
		addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
		allowDots,
		allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
		arrayFormat,
		charset,
		charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
		commaRoundTrip: opts.commaRoundTrip,
		delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
		encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
		encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
		encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
		encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
		filter,
		format,
		formatter,
		serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
		skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
		sort: typeof opts.sort === "function" ? opts.sort : null,
		strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
	};
};
function stringify(object, opts) {
	let obj = object;
	const options = normalizeStringifyOptions(opts);
	let objKeys;
	let filter;
	if (typeof options.filter === "function") {
		filter = options.filter;
		obj = filter("", obj);
	} else if (isArray(options.filter)) {
		filter = options.filter;
		objKeys = filter;
	}
	const keys = [];
	if (typeof obj !== "object" || obj === null) return "";
	const generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
	const commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
	if (!objKeys) objKeys = Object.keys(obj);
	if (options.sort) objKeys.sort(options.sort);
	const sideChannel = /* @__PURE__ */ new WeakMap();
	for (let i = 0; i < objKeys.length; ++i) {
		const key = objKeys[i];
		if (options.skipNulls && obj[key] === null) continue;
		pushToArray(keys, _stringify(obj[key], key, generateArrayPrefix, commaRoundTrip, options.allowEmptyArrays, options.strictNullHandling, options.skipNulls, options.encodeDotInKeys, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
	}
	const joined = keys.join(options.delimiter);
	let prefix = options.addQueryPrefix === true ? "?" : "";
	if (options.charsetSentinel) if (options.charset === "iso-8859-1") prefix += "utf8=%26%2310003%3B&";
	else prefix += "utf8=%E2%9C%93&";
	return joined.length > 0 ? prefix + joined : "";
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/routes/apiRoute.js
/**
* Builds the method handlers for the Payload REST/GraphQL catch-all
* (`/_payload/api/$`). The app supplies `getConfig` (an `@payload-config`
* import) since the package cannot resolve the consumer's config.
*
* Spread the result into a literal `server.handlers` key so TanStack Start's
* client compiler can statically see — and prune — the server-only route:
*
* ```ts
* export const Route = createFileRoute('/_payload/api/$')({
*   server: {
*     handlers: payloadApiHandlers({ getConfig: async () => (await import('@payload-config')).default }),
*   },
* })
* ```
*
* The compiler only strips a literal `server:` key from a route-options object
* expression; wrapping the whole options object in a factory call hides the
* key, leaking the config graph into the client bundle.
*/ function payloadApiHandlers({ getConfig }) {
	const handler = async ({ request }) => {
		const { handleAPIRoute } = await import("./handleAPIRoute.server-CDNpbA4N.js");
		return handleAPIRoute({
			config: await getConfig(),
			request
		});
	};
	return {
		DELETE: handler,
		GET: handler,
		OPTIONS: handler,
		PATCH: handler,
		POST: handler,
		PUT: handler
	};
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/routerSearch.js
/**
* `parseSearch` for TanStack Router's `createRouter`, required for Payload's
* admin UI. Pair with {@link payloadStringifySearch}.
*
* Payload serializes query state (notably the list-view `where` filter) with
* `qs` bracket notation — e.g. `?where[or][0][and][0][x][equals]=y`. TanStack
* Router's default serializer treats each bracketed string as a flat key and
* JSON-encodes values, so it never round-trips Payload's nested query: every
* navigation re-encodes the already-encoded value, exponentially nesting it
* (`[true,"[true,\"[true…"]`) until the filter is unusable. Parsing and
* stringifying with `qs` (same options as `payload`/`@payloadcms/ui`) keeps
* the URL idempotent and the nested `where` intact across navigations.
*
* This is a router-global serializer: it applies to every route, not just
* `/admin`. On your own routes, search values arrive as strings (qs does no
* JSON type-coercion), so coerce in `validateSearch` (e.g. `Number(...)`) where
* you need numbers or booleans.
*
* @example
* ```ts
* import { createRouter } from '@tanstack/react-router'
* import { payloadParseSearch, payloadStringifySearch } from '@payloadcms/tanstack-start'
*
* export function getRouter() {
*   return createRouter({
*     parseSearch: payloadParseSearch,
*     routeTree,
*     stringifySearch: payloadStringifySearch,
*   })
* }
* ```
*/ var payloadParseSearch = (searchStr) => parse(searchStr, {
	depth: 10,
	ignoreQueryPrefix: true
});
/**
* `stringifySearch` for TanStack Router's `createRouter`, required for Payload's
* admin UI. Pair with {@link payloadParseSearch}; see it for the full rationale.
*/ var payloadStringifySearch = (search) => {
	const searchStr = stringify(search);
	return searchStr ? `?${searchStr}` : "";
};
//#endregion
//#region src/app/__root.tsx
var Route$6 = createRootRoute({
	head: () => ({ links: [
		{
			rel: "preconnect",
			href: "https://fonts.googleapis.com"
		},
		{
			rel: "preconnect",
			href: "https://fonts.gstatic.com",
			crossOrigin: "anonymous"
		},
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto+Mono:wght@100..700&display=swap"
		}
	] }),
	shellComponent: withPayloadRoot(FrontendRoot)
});
var layerOrder = "@layer base, properties, utilities, payload, payload-default, tailwind;";
function FrontendRoot({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
			href: "frontend-layer-order",
			precedence: "frontend-layer-order",
			children: layerOrder
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
//#endregion
//#region node_modules/.pnpm/@tanstack+start-server-core@1.169.15/node_modules/@tanstack/start-server-core/dist/esm/createSsrRpc.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/app/_payload/server.functions.ts
var loadAdminPageRSC = createServerFn({ method: "GET" }).validator((data) => data ?? {}).handler(createSsrRpc("e8ba01abeb4e8c1ff00f179b00ac0955129ac55095c8ea668d67ccb4a19a3e33"));
var getLayoutDataFn = createServerFn({ method: "GET" }).handler(createSsrRpc("3932fb8ed7c26260bfaa2e75e2723ffe76432b17a6694fbe968c3300b526853f"));
var serverFunctionHandler = createServerFunctionClient({ runServerFn: createServerFn({ method: "POST" }).validator((args) => args).handler(createSsrRpc("19e77ca4a09688ebaba2192de69fc8b8a335657719fdaebb3faaac4e2cea5dcf")) });
//#endregion
//#region src/app/_payload.tsx
var Route$5 = createFileRoute("/_payload")(payloadLayoutRoute({
	load: getLayoutDataFn,
	serverFunction: serverFunctionHandler
}));
//#endregion
//#region src/app/_frontend.tsx
var $$splitComponentImporter$1 = () => import("./_frontend-YBqB2C75.js");
var Route$4 = createFileRoute("/_frontend")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
//#endregion
//#region src/app/_frontend/index.tsx
var $$splitComponentImporter = () => import("./_frontend-C7dAo4fr.js");
var Route$3 = createFileRoute("/_frontend/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: "Payload Website Template" }] })
});
//#endregion
//#region src/app/_payload/admin.index.tsx
var Route$2 = createFileRoute("/_payload/admin/")(payloadAdminIndexRoute({ load: loadAdminPageRSC }));
//#endregion
//#region src/app/_payload/api.$.ts
var Route$1 = createFileRoute("/_payload/api/$")({ server: { handlers: payloadApiHandlers({ getConfig: async () => (await import("./payload.config-BGt6pBuQ.js")).default }) } });
//#endregion
//#region src/app/_payload/admin.$.tsx
var Route = createFileRoute("/_payload/admin/$")(payloadAdminSplatRoute({ load: loadAdminPageRSC }));
//#endregion
//#region src/routeTree.gen.ts
var PayloadRoute = Route$5.update({
	id: "/_payload",
	getParentRoute: () => Route$6
});
var FrontendRoute = Route$4.update({
	id: "/_frontend",
	getParentRoute: () => Route$6
});
var FrontendIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => FrontendRoute
});
var PayloadAdminIndexRoute = Route$2.update({
	id: "/admin/",
	path: "/admin/",
	getParentRoute: () => PayloadRoute
});
var PayloadApiSplatRoute = Route$1.update({
	id: "/api/$",
	path: "/api/$",
	getParentRoute: () => PayloadRoute
});
var PayloadAdminSplatRoute = Route.update({
	id: "/admin/$",
	path: "/admin/$",
	getParentRoute: () => PayloadRoute
});
var FrontendRouteChildren = { FrontendIndexRoute };
var FrontendRouteWithChildren = FrontendRoute._addFileChildren(FrontendRouteChildren);
var PayloadRouteChildren = {
	PayloadAdminSplatRoute,
	PayloadApiSplatRoute,
	PayloadAdminIndexRoute
};
var rootRouteChildren = {
	FrontendRoute: FrontendRouteWithChildren,
	PayloadRoute: PayloadRoute._addFileChildren(PayloadRouteChildren)
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
function getRouter() {
	return createRouter({
		parseSearch: payloadParseSearch,
		routeTree,
		scrollRestoration: true,
		stringifySearch: payloadStringifySearch
	});
}
//#endregion
export { getRouter };
