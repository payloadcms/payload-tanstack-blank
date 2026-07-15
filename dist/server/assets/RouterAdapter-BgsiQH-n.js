import { o as __toESM } from "./rolldown-runtime-CE-6LUnI.js";
import { t as require_react } from "./react-yhpvVyYg.js";
import { D as removeTrailingSlash, F as functionalUpdate, H as useIntersectionObserver, I as hasKeys, L as isDangerousProtocol, N as deepEqual, T as exactPathTest, V as useForwardedRef, a as dummyMatchContext, i as useStore, j as invariant, l as useHydrated, o as matchContext, s as useRouter, z as replaceEqualDeep } from "./Match-DGEQGAgJ.js";
import { t as require_jsx_runtime } from "./jsx-runtime-Ch3VfgV3.js";
import { t as require_react_dom } from "./react-dom-r48VISTm.js";
import { n as RouterAdapterContext } from "./RouterAdapter-KVwWVbaC.js";
//#region node_modules/.pnpm/@tanstack+router-core@1.171.13/node_modules/@tanstack/router-core/dist/esm/link.js
var preloadWarning = "Error preloading route! ☝️";
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/useMatch.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var dummyStore = {
	get() {},
	subscribe() {
		return { unsubscribe() {} };
	}
};
function useStructuralSharing(opts, router) {
	const previousResult = import_react.useRef();
	return (slice) => {
		const selected = opts?.select ? opts.select(slice) : slice;
		if (opts?.structuralSharing ?? router.options.defaultStructuralSharing) return previousResult.current = replaceEqualDeep(previousResult.current, selected);
		return selected;
	};
}
/**
* Read and select the nearest or targeted route match.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useMatchHook
*/
function useMatch(opts) {
	const router = useRouter();
	const nearestMatchId = import_react.useContext(opts.from ? dummyMatchContext : matchContext);
	const matchStore = opts.from ? router.stores.getRouteMatchStore(opts.from) : router.stores.matchStores.get(nearestMatchId);
	{
		const match = matchStore?.get();
		if (!match) {
			if (opts.shouldThrow ?? true) invariant();
			return;
		}
		return opts.select ? opts.select(match) : match;
	}
	const selector = useStructuralSharing(opts, router);
	const matchSelection = useStore(matchStore ?? dummyStore, (match) => match ? selector(match) : dummyStore);
	if (matchSelection !== dummyStore) return matchSelection;
	if (opts.shouldThrow ?? true) invariant();
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/useParams.js
/**
* Access the current route's path parameters with type-safety.
*
* Options:
* - `from`/`strict`: Specify the matched route and whether to enforce strict typing
* - `select`: Project the params object to a derived value for memoized renders
* - `structuralSharing`: Enable structural sharing for stable references
* - `shouldThrow`: Throw if the route is not found in strict contexts
*
* @returns The params object (or selected value) for the matched route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useParamsHook
*/
function useParams(opts) {
	return useMatch({
		from: opts.from,
		shouldThrow: opts.shouldThrow,
		structuralSharing: opts.structuralSharing,
		strict: opts.strict,
		select: (match) => {
			const params = opts.strict === false ? match.params : match._strictParams;
			return opts.select ? opts.select(params) : params;
		}
	});
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/link.js
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
/**
* Build anchor-like props for declarative navigation and preloading.
*
* Returns stable `href`, event handlers and accessibility props derived from
* router options and active state. Used internally by `Link` and custom links.
*
* Options cover `to`, `params`, `search`, `hash`, `state`, `preload`,
* `activeProps`, `inactiveProps`, and more.
*
* @returns React anchor props suitable for `<a>` or custom components.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useLinkPropsHook
*/
function useLinkProps(options, forwardedRef) {
	const router = useRouter();
	const innerRef = useForwardedRef(forwardedRef);
	const { activeProps, inactiveProps, activeOptions, to, preload: userPreload, preloadDelay: userPreloadDelay, preloadIntentProximity: _preloadIntentProximity, hashScrollIntoView, replace, startTransition, resetScroll, viewTransition, children, target, disabled, style, className, onClick, onBlur, onFocus, onMouseEnter, onMouseLeave, onTouchStart, ignoreBlocker, params: _params, search: _search, hash: _hash, state: _state, mask: _mask, reloadDocument: _reloadDocument, unsafeRelative: _unsafeRelative, from: _from, _fromLocation, ...propsSafeToSpread } = options;
	{
		const safeInternal = isSafeInternal(to);
		if (typeof to === "string" && !safeInternal && to.indexOf(":") > -1) try {
			new URL(to);
			if (isDangerousProtocol(to, router.protocolAllowlist)) return {
				...propsSafeToSpread,
				ref: innerRef,
				href: void 0,
				...children && { children },
				...target && { target },
				...disabled && { disabled },
				...style && { style },
				...className && { className }
			};
			return {
				...propsSafeToSpread,
				ref: innerRef,
				href: to,
				...children && { children },
				...target && { target },
				...disabled && { disabled },
				...style && { style },
				...className && { className }
			};
		} catch {}
		const next = router.buildLocation({
			...options,
			from: options.from
		});
		const hrefOption = getHrefOption(next.maskedLocation ? next.maskedLocation.publicHref : next.publicHref, next.maskedLocation ? next.maskedLocation.external : next.external, router.history, disabled);
		const externalLink = (() => {
			if (hrefOption?.external) {
				if (isDangerousProtocol(hrefOption.href, router.protocolAllowlist)) return;
				return hrefOption.href;
			}
			if (safeInternal) return void 0;
			if (typeof to === "string" && to.indexOf(":") > -1) try {
				new URL(to);
				if (isDangerousProtocol(to, router.protocolAllowlist)) return;
				return to;
			} catch {}
		})();
		const isActive = (() => {
			if (externalLink) return false;
			const currentLocation = router.stores.location.get();
			const exact = activeOptions?.exact ?? false;
			if (exact) {
				if (!exactPathTest(currentLocation.pathname, next.pathname, router.basepath)) return false;
			} else {
				const currentPathSplit = removeTrailingSlash(currentLocation.pathname, router.basepath);
				const nextPathSplit = removeTrailingSlash(next.pathname, router.basepath);
				if (!(currentPathSplit.startsWith(nextPathSplit) && (currentPathSplit.length === nextPathSplit.length || currentPathSplit[nextPathSplit.length] === "/"))) return false;
			}
			if (activeOptions?.includeSearch ?? true) {
				if (currentLocation.search !== next.search) {
					const currentSearchEmpty = !currentLocation.search || typeof currentLocation.search === "object" && !hasKeys(currentLocation.search);
					const nextSearchEmpty = !next.search || typeof next.search === "object" && !hasKeys(next.search);
					if (!(currentSearchEmpty && nextSearchEmpty)) {
						if (!deepEqual(currentLocation.search, next.search, {
							partial: !exact,
							ignoreUndefined: !activeOptions?.explicitUndefined
						})) return false;
					}
				}
			}
			if (activeOptions?.includeHash) return false;
			return true;
		})();
		if (externalLink) return {
			...propsSafeToSpread,
			ref: innerRef,
			href: externalLink,
			...children && { children },
			...target && { target },
			...disabled && { disabled },
			...style && { style },
			...className && { className }
		};
		const resolvedActiveProps = isActive ? functionalUpdate(activeProps, {}) ?? STATIC_ACTIVE_OBJECT : STATIC_EMPTY_OBJECT;
		const resolvedInactiveProps = isActive ? STATIC_EMPTY_OBJECT : functionalUpdate(inactiveProps, {}) ?? STATIC_EMPTY_OBJECT;
		const resolvedStyle = (() => {
			const baseStyle = style;
			const activeStyle = resolvedActiveProps.style;
			const inactiveStyle = resolvedInactiveProps.style;
			if (!baseStyle && !activeStyle && !inactiveStyle) return;
			if (baseStyle && !activeStyle && !inactiveStyle) return baseStyle;
			if (!baseStyle && activeStyle && !inactiveStyle) return activeStyle;
			if (!baseStyle && !activeStyle && inactiveStyle) return inactiveStyle;
			return {
				...baseStyle,
				...activeStyle,
				...inactiveStyle
			};
		})();
		const resolvedClassName = (() => {
			const baseClassName = className;
			const activeClassName = resolvedActiveProps.className;
			const inactiveClassName = resolvedInactiveProps.className;
			if (!baseClassName && !activeClassName && !inactiveClassName) return "";
			let out = "";
			if (baseClassName) out = baseClassName;
			if (activeClassName) out = out ? `${out} ${activeClassName}` : activeClassName;
			if (inactiveClassName) out = out ? `${out} ${inactiveClassName}` : inactiveClassName;
			return out;
		})();
		return {
			...propsSafeToSpread,
			...resolvedActiveProps,
			...resolvedInactiveProps,
			href: hrefOption?.href,
			ref: innerRef,
			disabled: !!disabled,
			target,
			...resolvedStyle && { style: resolvedStyle },
			...resolvedClassName && { className: resolvedClassName },
			...disabled && STATIC_DISABLED_PROPS,
			...isActive && STATIC_ACTIVE_PROPS
		};
	}
	const isHydrated = useHydrated();
	const _options = import_react.useMemo(() => options, [
		router,
		options.from,
		options._fromLocation,
		options.hash,
		options.to,
		options.search,
		options.params,
		options.state,
		options.mask,
		options.unsafeRelative
	]);
	const currentLocation = useStore(router.stores.location, (l) => l, (prev, next) => prev.href === next.href);
	const next = import_react.useMemo(() => {
		const opts = {
			_fromLocation: currentLocation,
			..._options
		};
		return router.buildLocation(opts);
	}, [
		router,
		currentLocation,
		_options
	]);
	const hrefOptionPublicHref = next.maskedLocation ? next.maskedLocation.publicHref : next.publicHref;
	const hrefOptionExternal = next.maskedLocation ? next.maskedLocation.external : next.external;
	const hrefOption = import_react.useMemo(() => getHrefOption(hrefOptionPublicHref, hrefOptionExternal, router.history, disabled), [
		disabled,
		hrefOptionExternal,
		hrefOptionPublicHref,
		router.history
	]);
	const externalLink = import_react.useMemo(() => {
		if (hrefOption?.external) {
			if (isDangerousProtocol(hrefOption.href, router.protocolAllowlist)) return;
			return hrefOption.href;
		}
		if (isSafeInternal(to)) return void 0;
		if (typeof to !== "string" || to.indexOf(":") === -1) return void 0;
		try {
			new URL(to);
			if (isDangerousProtocol(to, router.protocolAllowlist)) return;
			return to;
		} catch {}
	}, [
		to,
		hrefOption,
		router.protocolAllowlist
	]);
	const isActive = import_react.useMemo(() => {
		if (externalLink) return false;
		if (activeOptions?.exact) {
			if (!exactPathTest(currentLocation.pathname, next.pathname, router.basepath)) return false;
		} else {
			const currentPathSplit = removeTrailingSlash(currentLocation.pathname, router.basepath);
			const nextPathSplit = removeTrailingSlash(next.pathname, router.basepath);
			if (!(currentPathSplit.startsWith(nextPathSplit) && (currentPathSplit.length === nextPathSplit.length || currentPathSplit[nextPathSplit.length] === "/"))) return false;
		}
		if (activeOptions?.includeSearch ?? true) {
			if (!deepEqual(currentLocation.search, next.search, {
				partial: !activeOptions?.exact,
				ignoreUndefined: !activeOptions?.explicitUndefined
			})) return false;
		}
		if (activeOptions?.includeHash) return isHydrated && currentLocation.hash === next.hash;
		return true;
	}, [
		activeOptions?.exact,
		activeOptions?.explicitUndefined,
		activeOptions?.includeHash,
		activeOptions?.includeSearch,
		currentLocation,
		externalLink,
		isHydrated,
		next.hash,
		next.pathname,
		next.search,
		router.basepath
	]);
	const resolvedActiveProps = isActive ? functionalUpdate(activeProps, {}) ?? STATIC_ACTIVE_OBJECT : STATIC_EMPTY_OBJECT;
	const resolvedInactiveProps = isActive ? STATIC_EMPTY_OBJECT : functionalUpdate(inactiveProps, {}) ?? STATIC_EMPTY_OBJECT;
	const resolvedClassName = [
		className,
		resolvedActiveProps.className,
		resolvedInactiveProps.className
	].filter(Boolean).join(" ");
	const resolvedStyle = (style || resolvedActiveProps.style || resolvedInactiveProps.style) && {
		...style,
		...resolvedActiveProps.style,
		...resolvedInactiveProps.style
	};
	const [isTransitioning, setIsTransitioning] = import_react.useState(false);
	const hasRenderFetched = import_react.useRef(false);
	const preload = options.reloadDocument || externalLink ? false : userPreload ?? router.options.defaultPreload;
	const preloadDelay = userPreloadDelay ?? router.options.defaultPreloadDelay ?? 0;
	const doPreload = import_react.useCallback(() => {
		router.preloadRoute({
			..._options,
			_builtLocation: next
		}).catch((err) => {
			console.warn(err);
			console.warn(preloadWarning);
		});
	}, [
		router,
		_options,
		next
	]);
	useIntersectionObserver(innerRef, import_react.useCallback((entry) => {
		if (entry?.isIntersecting) doPreload();
	}, [doPreload]), intersectionObserverOptions, { disabled: !!disabled || !(preload === "viewport") });
	import_react.useEffect(() => {
		if (hasRenderFetched.current) return;
		if (!disabled && preload === "render") {
			doPreload();
			hasRenderFetched.current = true;
		}
	}, [
		disabled,
		doPreload,
		preload
	]);
	const handleClick = (e) => {
		const elementTarget = e.currentTarget.getAttribute("target");
		const effectiveTarget = target !== void 0 ? target : elementTarget;
		if (!disabled && !isCtrlEvent(e) && !e.defaultPrevented && (!effectiveTarget || effectiveTarget === "_self") && e.button === 0) {
			e.preventDefault();
			(0, import_react_dom.flushSync)(() => {
				setIsTransitioning(true);
			});
			const unsub = router.subscribe("onResolved", () => {
				unsub();
				setIsTransitioning(false);
			});
			router.navigate({
				..._options,
				replace,
				resetScroll,
				hashScrollIntoView,
				startTransition,
				viewTransition,
				ignoreBlocker
			});
		}
	};
	if (externalLink) return {
		...propsSafeToSpread,
		ref: innerRef,
		href: externalLink,
		...children && { children },
		...target && { target },
		...disabled && { disabled },
		...style && { style },
		...className && { className },
		...onClick && { onClick },
		...onBlur && { onBlur },
		...onFocus && { onFocus },
		...onMouseEnter && { onMouseEnter },
		...onMouseLeave && { onMouseLeave },
		...onTouchStart && { onTouchStart }
	};
	const enqueueIntentPreload = (e) => {
		if (disabled || preload !== "intent") return;
		if (!preloadDelay) {
			doPreload();
			return;
		}
		const eventTarget = e.currentTarget;
		if (timeoutMap.has(eventTarget)) return;
		const id = setTimeout(() => {
			timeoutMap.delete(eventTarget);
			doPreload();
		}, preloadDelay);
		timeoutMap.set(eventTarget, id);
	};
	const handleTouchStart = (_) => {
		if (disabled || preload !== "intent") return;
		doPreload();
	};
	const handleLeave = (e) => {
		if (disabled || !preload || !preloadDelay) return;
		const eventTarget = e.currentTarget;
		const id = timeoutMap.get(eventTarget);
		if (id) {
			clearTimeout(id);
			timeoutMap.delete(eventTarget);
		}
	};
	return {
		...propsSafeToSpread,
		...resolvedActiveProps,
		...resolvedInactiveProps,
		href: hrefOption?.href,
		ref: innerRef,
		onClick: composeHandlers([onClick, handleClick]),
		onBlur: composeHandlers([onBlur, handleLeave]),
		onFocus: composeHandlers([onFocus, enqueueIntentPreload]),
		onMouseEnter: composeHandlers([onMouseEnter, enqueueIntentPreload]),
		onMouseLeave: composeHandlers([onMouseLeave, handleLeave]),
		onTouchStart: composeHandlers([onTouchStart, handleTouchStart]),
		disabled: !!disabled,
		target,
		...resolvedStyle && { style: resolvedStyle },
		...resolvedClassName && { className: resolvedClassName },
		...disabled && STATIC_DISABLED_PROPS,
		...isActive && STATIC_ACTIVE_PROPS,
		...isHydrated && isTransitioning && STATIC_TRANSITIONING_PROPS
	};
}
var STATIC_EMPTY_OBJECT = {};
var STATIC_ACTIVE_OBJECT = { className: "active" };
var STATIC_DISABLED_PROPS = {
	role: "link",
	"aria-disabled": true
};
var STATIC_ACTIVE_PROPS = {
	"data-status": "active",
	"aria-current": "page"
};
var STATIC_TRANSITIONING_PROPS = { "data-transitioning": "transitioning" };
var timeoutMap = /* @__PURE__ */ new WeakMap();
var intersectionObserverOptions = { rootMargin: "100px" };
var composeHandlers = (handlers) => (e) => {
	for (const handler of handlers) {
		if (!handler) continue;
		if (e.defaultPrevented) return;
		handler(e);
	}
};
function getHrefOption(publicHref, external, history, disabled) {
	if (disabled) return void 0;
	if (external) return {
		href: publicHref,
		external: true
	};
	return {
		href: history.createHref(publicHref) || "/",
		external: false
	};
}
function isSafeInternal(to) {
	if (typeof to !== "string") return false;
	const zero = to.charCodeAt(0);
	if (zero === 47) return to.charCodeAt(1) !== 47;
	return zero === 46;
}
/**
* A strongly-typed anchor component for declarative navigation.
* Handles path, search, hash and state updates with optional route preloading
* and active-state styling.
*
* Props:
* - `preload`: Controls route preloading (eg. 'intent', 'render', 'viewport', true/false)
* - `preloadDelay`: Delay in ms before preloading on hover
* - `activeProps`/`inactiveProps`: Additional props merged when link is active/inactive
* - `resetScroll`/`hashScrollIntoView`: Control scroll behavior on navigation
* - `viewTransition`/`startTransition`: Use View Transitions/React transitions for navigation
* - `ignoreBlocker`: Bypass registered blockers
*
* @returns An anchor-like element that navigates without full page reloads.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/linkComponent
*/
var Link = import_react.forwardRef((props, ref) => {
	const { _asChild, ...rest } = props;
	const { type: _type, ...linkProps } = useLinkProps(rest, ref);
	const children = typeof rest.children === "function" ? rest.children({ isActive: linkProps["data-status"] === "active" }) : rest.children;
	if (!_asChild) {
		const { disabled: _, ...rest } = linkProps;
		return import_react.createElement("a", rest, children);
	}
	return import_react.createElement(_asChild, linkProps, children);
});
function isCtrlEvent(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.16_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@tanstack/react-router/dist/esm/useLocation.js
/**
* Read the current location from the router state with optional selection.
* Useful for subscribing to just the pieces of location you care about.
*
* Options:
* - `select`: Project the `location` object to a derived value
* - `structuralSharing`: Enable structural sharing for stable references
*
* @returns The current location (or selected value).
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useLocationHook
*/
function useLocation(opts) {
	const router = useRouter();
	{
		const location = router.stores.location.get();
		return opts?.select ? opts.select(location) : location;
	}
	return useStore(router.stores.location, useStructuralSharing(opts, router));
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
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/elements/RouterAdapter/index.js
var normalizeNavigationTarget = ({ path, pathname, search }) => {
	if (path.startsWith("http")) {
		const url = new URL(path);
		return `${url.pathname}${url.search}${url.hash}`;
	}
	if (path.startsWith("?")) return `${pathname}${path}`;
	if (path.startsWith("#")) return `${pathname}${search}${path}`;
	return path;
};
var TanStackLinkAdapter = ({ children, href, prefetch, ref, replace, scroll, ...rest }) => {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Link, {
		preload: prefetch === false ? false : "intent",
		ref,
		replace,
		resetScroll: scroll,
		to: href,
		...rest,
		children
	});
};
var TanStackRouterAdapter = ({ children }) => {
	const router = useRouter();
	const location = useLocation();
	const params = useParams({ strict: false });
	const adaptedParams = (0, import_react.useMemo)(() => {
		const adapted = { ...params };
		if ("_splat" in params && typeof params._splat === "string") adapted.segments = params._splat.split("/").filter(Boolean);
		return adapted;
	}, [params]);
	const toNavOptions = (0, import_react.useCallback)((path) => {
		const relativePath = normalizeNavigationTarget({
			path,
			pathname: window.location.pathname,
			search: window.location.search
		});
		const queryIndex = relativePath.indexOf("?");
		if (queryIndex === -1) return { to: relativePath };
		const searchObject = parse(relativePath.slice(queryIndex + 1), {
			depth: 10,
			ignoreQueryPrefix: true
		});
		return {
			search: () => searchObject,
			to: relativePath.slice(0, queryIndex)
		};
	}, []);
	const back = (0, import_react.useCallback)(() => router.history.back(), [router]);
	const push = (0, import_react.useCallback)((path, options) => {
		router.navigate({
			...toNavOptions(path),
			resetScroll: options?.scroll
		});
	}, [router, toNavOptions]);
	const refresh = (0, import_react.useCallback)(() => {
		router.invalidate();
	}, [router]);
	const replace = (0, import_react.useCallback)((path, options) => {
		router.navigate({
			...toNavOptions(path),
			replace: true,
			resetScroll: options?.scroll
		});
	}, [router, toNavOptions]);
	const replaceState = (0, import_react.useCallback)((url) => {
		const { history } = router;
		history._ignoreSubscribers = true;
		try {
			window.history.replaceState(null, "", url);
		} finally {
			history._ignoreSubscribers = false;
		}
	}, [router]);
	const adaptedRouter = (0, import_react.useMemo)(() => ({
		back,
		push,
		refresh,
		replace,
		replaceState
	}), [
		back,
		push,
		refresh,
		replace,
		replaceState
	]);
	const searchParams = (0, import_react.useMemo)(() => new URLSearchParams(location.searchStr), [location.searchStr]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(RouterAdapterContext, {
		value: (0, import_react.useMemo)(() => ({
			Link: TanStackLinkAdapter,
			params: adaptedParams,
			pathname: location.pathname,
			router: adaptedRouter,
			searchParams
		}), [
			adaptedParams,
			location.pathname,
			adaptedRouter,
			searchParams
		]),
		children
	});
};
//#endregion
export { maybeMap as a, Link as c, useStructuralSharing as d, isBuffer as i, useParams as l, parse as n, formats_default as o, encode as r, formatters as s, TanStackRouterAdapter as t, useMatch as u };
