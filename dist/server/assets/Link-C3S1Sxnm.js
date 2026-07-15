import { o as __toESM } from "./rolldown-runtime-CE-6LUnI.js";
import { t as require_react } from "./react-yhpvVyYg.js";
import { t as require_jsx_runtime } from "./jsx-runtime-Ch3VfgV3.js";
import { a as useRouter, t as PayloadLink } from "./RouterAdapter-KVwWVbaC.js";
import { t as require_compiler_runtime } from "./compiler-runtime-IEfSpGV5.js";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/RouteTransition/index.js
var import_compiler_runtime = require_compiler_runtime();
var import_jsx_runtime = require_jsx_runtime();
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* Route transitions are useful in showing immediate visual feedback to the user when navigating between pages. This is especially useful on slow networks when navigating to data heavy or process intensive pages.
* To use route transitions, place the `RouteTransitionProvider` at the root of your application, outside of the `ProgressBar` component.
* To trigger a route transition, use the `Link` component from `@payloadcms/ui`,
* or wrap a callback function with the `startRouteTransition` method.
* To gain access to the `RouteTransitionContext`, call the `useRouteTransition` hook in your component.
* @returns A context provider with methods and state for transitioning between routes, including `isTransitioning`, `startRouteTransition`, and `transitionProgress`.
* @example
* import { RouteTransitionProvider, ProgressBar, Link } from '@payloadcms/ui'
* const App = () => (
*  <RouteTransitionProvider>
*   <ProgressBar />
*   <Link href="/somewhere">Go Somewhere</Link>
*  </RouteTransitionProvider>
* )
*/
var RouteTransitionProvider = (t0) => {
	const $ = (0, import_compiler_runtime.c)(11);
	const { children } = t0;
	const [isTransitioning, setIsTransitioning] = (0, import_react.useOptimistic)(false);
	const [transitionProgress, setTransitionProgress] = import_react.useState(0);
	const transitionProgressRef = (0, import_react.useRef)(transitionProgress);
	const timerID = (0, import_react.useRef)(null);
	let t1;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t1 = () => {
			timerID.current = setInterval(() => {
				const newProgress = transitionProgressRef.current + (.93 - transitionProgressRef.current) * Math.random() * .2 * Math.pow(Math.log(1 + (1 - transitionProgressRef.current) * .75), .75);
				setTransitionProgress(newProgress);
				transitionProgressRef.current = newProgress;
			}, 250);
		};
		$[0] = t1;
	} else t1 = $[0];
	const initiateProgress = t1;
	let t2;
	let t3;
	if ($[1] !== isTransitioning) {
		t2 = () => {
			setTransitionProgress(0);
			transitionProgressRef.current = 0;
			if (isTransitioning) initiateProgress();
			else if (timerID.current) clearInterval(timerID.current);
		};
		t3 = [isTransitioning, initiateProgress];
		$[1] = isTransitioning;
		$[2] = t2;
		$[3] = t3;
	} else {
		t2 = $[2];
		t3 = $[3];
	}
	(0, import_react.useEffect)(t2, t3);
	let t4;
	if ($[4] !== setIsTransitioning) {
		t4 = (callback) => {
			(0, import_react.startTransition)(() => {
				setIsTransitioning(true);
				if (typeof callback === "function") callback();
			});
		};
		$[4] = setIsTransitioning;
		$[5] = t4;
	} else t4 = $[5];
	const startRouteTransition = t4;
	let t5;
	if ($[6] !== children || $[7] !== isTransitioning || $[8] !== startRouteTransition || $[9] !== transitionProgress) {
		t5 = (0, import_jsx_runtime.jsx)(RouteTransitionContext, {
			value: {
				isTransitioning,
				startRouteTransition,
				transitionProgress
			},
			children
		});
		$[6] = children;
		$[7] = isTransitioning;
		$[8] = startRouteTransition;
		$[9] = transitionProgress;
		$[10] = t5;
	} else t5 = $[10];
	return t5;
};
var RouteTransitionContext = /*#__PURE__*/ import_react.createContext({
	isTransitioning: false,
	startRouteTransition: (callback) => {
		if (typeof callback === "function") callback();
	},
	transitionProgress: 0
});
/**
* Use this hook to access the `RouteTransitionContext` provided by the `RouteTransitionProvider`.
* To start a transition, fire the `startRouteTransition` method with a provided callback to run while the transition takes place.
* @returns The `RouteTransitionContext` needed for transitioning between routes, including `isTransitioning`, `startRouteTransition`, and `transitionProgress`.
* @example
* 'use client'
* import React, { useCallback } from 'react'
* import { useTransition, useRouter } from '@payloadcms/ui'
*
* const MyComponent: React.FC = () => {
*   const router = useRouter()
*   const { startRouteTransition } = useRouteTransition()
*
*   const redirectSomewhere = useCallback(() => {
*     startRouteTransition(() => router.push('/somewhere'))
*   }, [startRouteTransition, router])
*
*   // ...
* }
*/
var useRouteTransition = () => import_react.use(RouteTransitionContext);
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Link/index.js
function isModifiedEvent(event) {
	const target = event.currentTarget.getAttribute("target");
	return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}
var Link = ({ children, forceReload = false, href, onClick, preventDefault = true, ref, replace, scroll, ...rest }) => {
	const router = useRouter();
	const { startRouteTransition } = useRouteTransition();
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(PayloadLink, {
		href,
		onClick: (e) => {
			if (isModifiedEvent(e)) return;
			if (onClick) onClick(e);
			if (preventDefault) e.preventDefault();
			const url = href;
			if (forceReload) {
				window.location.href = url;
				return;
			}
			const navigate = () => {
				if (replace) router.replace(url, { scroll });
				else router.push(url, { scroll });
			};
			startRouteTransition(navigate);
		},
		ref,
		...rest,
		children
	});
};
//#endregion
export { RouteTransitionProvider as n, useRouteTransition as r, Link as t };
