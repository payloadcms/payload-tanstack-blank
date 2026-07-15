import { o as __toESM, r as __exportAll } from "./rolldown-runtime-CE-6LUnI.js";
import { t as require_react } from "./react-yhpvVyYg.js";
import { t as require_jsx_runtime } from "./jsx-runtime-Ch3VfgV3.js";
import { t as require_react_dom } from "./react-dom-r48VISTm.js";
import { a as isBuffer, c as maybeMap, d as formatters, i as encode, u as formats_default } from "./utils-BZcNK7nB.js";
import { t as formatAdminURL } from "./formatAdminURL-Bd6jMInL.js";
import { t as InfoIcon } from "./Info-BfYK1Y4L.js";
import { a as useRouter, i as usePathname, o as useSearchParams } from "./RouterAdapter-KVwWVbaC.js";
import { t as require_compiler_runtime } from "./compiler-runtime-IEfSpGV5.js";
import { n as RouteTransitionProvider, r as useRouteTransition } from "./Link-C3S1Sxnm.js";
import { a as ChevronIcon, n as useTranslation, r as ServerFunctionsProvider, t as TranslationProvider } from "./Translation-CQnAqbkH.js";
import { a as useEffectEvent, l as SpinnerIcon, o as XIcon, t as Button } from "./Button-D1oBdtej.js";
import { a as useConfig, r as ConfigProvider, t as ThemeProvider } from "./Theme-C8XTKx4Z.js";
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/preferences/keys.js
/**
* Centralized preference keys used throughout Payload admin UI.
* Import these constants instead of using string literals to prevent typos.
*/ var PREFERENCE_KEYS = {
	/**
	* Stores dashboard layout configuration
	*/ DASHBOARD_LAYOUT: "dashboard-layout",
	/**
	* Stores hierarchy tree expand/collapse state per collection
	*/ HIERARCHY_TREE: "hierarchy-tree",
	/**
	* Stores navigation group collapse/expand state and nav open/closed state
	*/ NAV: "nav",
	/**
	* Stores active sidebar tab selection
	*/ NAV_SIDEBAR_ACTIVE_TAB: "nav-sidebar-active-tab",
	/**
	* Stores the documents the user has recently viewed in the admin
	*/ RECENTLY_VIEWED: "recently-viewed"
};
//#endregion
//#region node_modules/.pnpm/@dnd-kit+utilities@3.2.2_react@19.2.6/node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var import_react = /* @__PURE__ */ __toESM(require_react());
function useCombinedRefs() {
	for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) refs[_key] = arguments[_key];
	return (0, import_react.useMemo)(() => (node) => {
		refs.forEach((ref) => ref(node));
	}, refs);
}
var canUseDOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
function isWindow(element) {
	const elementString = Object.prototype.toString.call(element);
	return elementString === "[object Window]" || elementString === "[object global]";
}
function isNode(node) {
	return "nodeType" in node;
}
function getWindow(target) {
	var _target$ownerDocument, _target$ownerDocument2;
	if (!target) return window;
	if (isWindow(target)) return target;
	if (!isNode(target)) return window;
	return (_target$ownerDocument = (_target$ownerDocument2 = target.ownerDocument) == null ? void 0 : _target$ownerDocument2.defaultView) != null ? _target$ownerDocument : window;
}
function isDocument(node) {
	const { Document } = getWindow(node);
	return node instanceof Document;
}
function isHTMLElement(node) {
	if (isWindow(node)) return false;
	return node instanceof getWindow(node).HTMLElement;
}
function isSVGElement(node) {
	return node instanceof getWindow(node).SVGElement;
}
function getOwnerDocument(target) {
	if (!target) return document;
	if (isWindow(target)) return target.document;
	if (!isNode(target)) return document;
	if (isDocument(target)) return target;
	if (isHTMLElement(target) || isSVGElement(target)) return target.ownerDocument;
	return document;
}
/**
* A hook that resolves to useEffect on the server and useLayoutEffect on the client
* @param callback {function} Callback function that is invoked when the dependencies of the hook change
*/
var useIsomorphicLayoutEffect = canUseDOM ? import_react.useLayoutEffect : import_react.useEffect;
function useEvent(handler) {
	const handlerRef = (0, import_react.useRef)(handler);
	useIsomorphicLayoutEffect(() => {
		handlerRef.current = handler;
	});
	return (0, import_react.useCallback)(function() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		return handlerRef.current == null ? void 0 : handlerRef.current(...args);
	}, []);
}
function useInterval() {
	const intervalRef = (0, import_react.useRef)(null);
	return [(0, import_react.useCallback)((listener, duration) => {
		intervalRef.current = setInterval(listener, duration);
	}, []), (0, import_react.useCallback)(() => {
		if (intervalRef.current !== null) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	}, [])];
}
function useLatestValue(value, dependencies) {
	if (dependencies === void 0) dependencies = [value];
	const valueRef = (0, import_react.useRef)(value);
	useIsomorphicLayoutEffect(() => {
		if (valueRef.current !== value) valueRef.current = value;
	}, dependencies);
	return valueRef;
}
function useLazyMemo(callback, dependencies) {
	const valueRef = (0, import_react.useRef)();
	return (0, import_react.useMemo)(() => {
		const newValue = callback(valueRef.current);
		valueRef.current = newValue;
		return newValue;
	}, [...dependencies]);
}
function useNodeRef(onChange) {
	const onChangeHandler = useEvent(onChange);
	const node = (0, import_react.useRef)(null);
	return [node, (0, import_react.useCallback)((element) => {
		if (element !== node.current) onChangeHandler?.(element, node.current);
		node.current = element;
	}, [])];
}
function usePrevious(value) {
	const ref = (0, import_react.useRef)();
	(0, import_react.useEffect)(() => {
		ref.current = value;
	}, [value]);
	return ref.current;
}
var ids = {};
function useUniqueId(prefix, value) {
	return (0, import_react.useMemo)(() => {
		if (value) return value;
		const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
		ids[prefix] = id;
		return prefix + "-" + id;
	}, [prefix, value]);
}
function createAdjustmentFn(modifier) {
	return function(object) {
		for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) adjustments[_key - 1] = arguments[_key];
		return adjustments.reduce((accumulator, adjustment) => {
			const entries = Object.entries(adjustment);
			for (const [key, valueAdjustment] of entries) {
				const value = accumulator[key];
				if (value != null) accumulator[key] = value + modifier * valueAdjustment;
			}
			return accumulator;
		}, { ...object });
	};
}
var add = /*#__PURE__*/ createAdjustmentFn(1);
var subtract = /*#__PURE__*/ createAdjustmentFn(-1);
function hasViewportRelativeCoordinates(event) {
	return "clientX" in event && "clientY" in event;
}
function isKeyboardEvent(event) {
	if (!event) return false;
	const { KeyboardEvent } = getWindow(event.target);
	return KeyboardEvent && event instanceof KeyboardEvent;
}
function isTouchEvent(event) {
	if (!event) return false;
	const { TouchEvent } = getWindow(event.target);
	return TouchEvent && event instanceof TouchEvent;
}
/**
* Returns the normalized x and y coordinates for mouse and touch events.
*/
function getEventCoordinates(event) {
	if (isTouchEvent(event)) {
		if (event.touches && event.touches.length) {
			const { clientX: x, clientY: y } = event.touches[0];
			return {
				x,
				y
			};
		} else if (event.changedTouches && event.changedTouches.length) {
			const { clientX: x, clientY: y } = event.changedTouches[0];
			return {
				x,
				y
			};
		}
	}
	if (hasViewportRelativeCoordinates(event)) return {
		x: event.clientX,
		y: event.clientY
	};
	return null;
}
var CSS = /*#__PURE__*/ Object.freeze({
	Translate: { toString(transform) {
		if (!transform) return;
		const { x, y } = transform;
		return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
	} },
	Scale: { toString(transform) {
		if (!transform) return;
		const { scaleX, scaleY } = transform;
		return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
	} },
	Transform: { toString(transform) {
		if (!transform) return;
		return [CSS.Translate.toString(transform), CSS.Scale.toString(transform)].join(" ");
	} },
	Transition: { toString(_ref) {
		let { property, duration, easing } = _ref;
		return property + " " + duration + "ms " + easing;
	} }
});
var SELECTOR = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function findFirstFocusableNode(element) {
	if (element.matches(SELECTOR)) return element;
	return element.querySelector(SELECTOR);
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+accessibility@3.1.1_react@19.2.6/node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js
var hiddenStyles = { display: "none" };
function HiddenText(_ref) {
	let { id, value } = _ref;
	return import_react.createElement("div", {
		id,
		style: hiddenStyles
	}, value);
}
function LiveRegion(_ref) {
	let { id, announcement, ariaLiveType = "assertive" } = _ref;
	return import_react.createElement("div", {
		id,
		style: {
			position: "fixed",
			top: 0,
			left: 0,
			width: 1,
			height: 1,
			margin: -1,
			border: 0,
			padding: 0,
			overflow: "hidden",
			clip: "rect(0 0 0 0)",
			clipPath: "inset(100%)",
			whiteSpace: "nowrap"
		},
		role: "status",
		"aria-live": ariaLiveType,
		"aria-atomic": true
	}, announcement);
}
function useAnnouncement() {
	const [announcement, setAnnouncement] = (0, import_react.useState)("");
	return {
		announce: (0, import_react.useCallback)((value) => {
			if (value != null) setAnnouncement(value);
		}, []),
		announcement
	};
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+core@6.3.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@dnd-kit/core/dist/core.esm.js
var DndMonitorContext = /*#__PURE__*/ (0, import_react.createContext)(null);
function useDndMonitor(listener) {
	const registerListener = (0, import_react.useContext)(DndMonitorContext);
	(0, import_react.useEffect)(() => {
		if (!registerListener) throw new Error("useDndMonitor must be used within a children of <DndContext>");
		return registerListener(listener);
	}, [listener, registerListener]);
}
function useDndMonitorProvider() {
	const [listeners] = (0, import_react.useState)(() => /* @__PURE__ */ new Set());
	const registerListener = (0, import_react.useCallback)((listener) => {
		listeners.add(listener);
		return () => listeners.delete(listener);
	}, [listeners]);
	return [(0, import_react.useCallback)((_ref) => {
		let { type, event } = _ref;
		listeners.forEach((listener) => {
			var _listener$type;
			return (_listener$type = listener[type]) == null ? void 0 : _listener$type.call(listener, event);
		});
	}, [listeners]), registerListener];
}
var defaultScreenReaderInstructions = { draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  " };
var defaultAnnouncements = {
	onDragStart(_ref) {
		let { active } = _ref;
		return "Picked up draggable item " + active.id + ".";
	},
	onDragOver(_ref2) {
		let { active, over } = _ref2;
		if (over) return "Draggable item " + active.id + " was moved over droppable area " + over.id + ".";
		return "Draggable item " + active.id + " is no longer over a droppable area.";
	},
	onDragEnd(_ref3) {
		let { active, over } = _ref3;
		if (over) return "Draggable item " + active.id + " was dropped over droppable area " + over.id;
		return "Draggable item " + active.id + " was dropped.";
	},
	onDragCancel(_ref4) {
		let { active } = _ref4;
		return "Dragging was cancelled. Draggable item " + active.id + " was dropped.";
	}
};
function Accessibility(_ref) {
	let { announcements = defaultAnnouncements, container, hiddenTextDescribedById, screenReaderInstructions = defaultScreenReaderInstructions } = _ref;
	const { announce, announcement } = useAnnouncement();
	const liveRegionId = useUniqueId("DndLiveRegion");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	useDndMonitor((0, import_react.useMemo)(() => ({
		onDragStart(_ref2) {
			let { active } = _ref2;
			announce(announcements.onDragStart({ active }));
		},
		onDragMove(_ref3) {
			let { active, over } = _ref3;
			if (announcements.onDragMove) announce(announcements.onDragMove({
				active,
				over
			}));
		},
		onDragOver(_ref4) {
			let { active, over } = _ref4;
			announce(announcements.onDragOver({
				active,
				over
			}));
		},
		onDragEnd(_ref5) {
			let { active, over } = _ref5;
			announce(announcements.onDragEnd({
				active,
				over
			}));
		},
		onDragCancel(_ref6) {
			let { active, over } = _ref6;
			announce(announcements.onDragCancel({
				active,
				over
			}));
		}
	}), [announce, announcements]));
	if (!mounted) return null;
	const markup = import_react.createElement(import_react.Fragment, null, import_react.createElement(HiddenText, {
		id: hiddenTextDescribedById,
		value: screenReaderInstructions.draggable
	}), import_react.createElement(LiveRegion, {
		id: liveRegionId,
		announcement
	}));
	return container ? (0, import_react_dom.createPortal)(markup, container) : markup;
}
var Action;
(function(Action) {
	Action["DragStart"] = "dragStart";
	Action["DragMove"] = "dragMove";
	Action["DragEnd"] = "dragEnd";
	Action["DragCancel"] = "dragCancel";
	Action["DragOver"] = "dragOver";
	Action["RegisterDroppable"] = "registerDroppable";
	Action["SetDroppableDisabled"] = "setDroppableDisabled";
	Action["UnregisterDroppable"] = "unregisterDroppable";
})(Action || (Action = {}));
function noop$1() {}
function useSensor(sensor, options) {
	return (0, import_react.useMemo)(() => ({
		sensor,
		options: options != null ? options : {}
	}), [sensor, options]);
}
function useSensors() {
	for (var _len = arguments.length, sensors = new Array(_len), _key = 0; _key < _len; _key++) sensors[_key] = arguments[_key];
	return (0, import_react.useMemo)(() => [...sensors].filter((sensor) => sensor != null), [...sensors]);
}
var defaultCoordinates = /*#__PURE__*/ Object.freeze({
	x: 0,
	y: 0
});
/**
* Returns the distance between two points
*/
function distanceBetween(p1, p2) {
	return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}
function getRelativeTransformOrigin(event, rect) {
	const eventCoordinates = getEventCoordinates(event);
	if (!eventCoordinates) return "0 0";
	const transformOrigin = {
		x: (eventCoordinates.x - rect.left) / rect.width * 100,
		y: (eventCoordinates.y - rect.top) / rect.height * 100
	};
	return transformOrigin.x + "% " + transformOrigin.y + "%";
}
/**
* Sort collisions from smallest to greatest value
*/
function sortCollisionsAsc(_ref, _ref2) {
	let { data: { value: a } } = _ref;
	let { data: { value: b } } = _ref2;
	return a - b;
}
/**
* Sort collisions from greatest to smallest value
*/
function sortCollisionsDesc(_ref3, _ref4) {
	let { data: { value: a } } = _ref3;
	let { data: { value: b } } = _ref4;
	return b - a;
}
/**
* Returns the coordinates of the corners of a given rectangle:
* [TopLeft {x, y}, TopRight {x, y}, BottomLeft {x, y}, BottomRight {x, y}]
*/
function cornersOfRectangle(_ref5) {
	let { left, top, height, width } = _ref5;
	return [
		{
			x: left,
			y: top
		},
		{
			x: left + width,
			y: top
		},
		{
			x: left,
			y: top + height
		},
		{
			x: left + width,
			y: top + height
		}
	];
}
function getFirstCollision(collisions, property) {
	if (!collisions || collisions.length === 0) return null;
	const [firstCollision] = collisions;
	return property ? firstCollision[property] : firstCollision;
}
/**
* Returns the coordinates of the center of a given ClientRect
*/
function centerOfRectangle(rect, left, top) {
	if (left === void 0) left = rect.left;
	if (top === void 0) top = rect.top;
	return {
		x: left + rect.width * .5,
		y: top + rect.height * .5
	};
}
/**
* Returns the closest rectangles from an array of rectangles to the center of a given
* rectangle.
*/
var closestCenter = (_ref) => {
	let { collisionRect, droppableRects, droppableContainers } = _ref;
	const centerRect = centerOfRectangle(collisionRect, collisionRect.left, collisionRect.top);
	const collisions = [];
	for (const droppableContainer of droppableContainers) {
		const { id } = droppableContainer;
		const rect = droppableRects.get(id);
		if (rect) {
			const distBetween = distanceBetween(centerOfRectangle(rect), centerRect);
			collisions.push({
				id,
				data: {
					droppableContainer,
					value: distBetween
				}
			});
		}
	}
	return collisions.sort(sortCollisionsAsc);
};
/**
* Returns the closest rectangles from an array of rectangles to the corners of
* another rectangle.
*/
var closestCorners = (_ref) => {
	let { collisionRect, droppableRects, droppableContainers } = _ref;
	const corners = cornersOfRectangle(collisionRect);
	const collisions = [];
	for (const droppableContainer of droppableContainers) {
		const { id } = droppableContainer;
		const rect = droppableRects.get(id);
		if (rect) {
			const rectCorners = cornersOfRectangle(rect);
			const distances = corners.reduce((accumulator, corner, index) => {
				return accumulator + distanceBetween(rectCorners[index], corner);
			}, 0);
			const effectiveDistance = Number((distances / 4).toFixed(4));
			collisions.push({
				id,
				data: {
					droppableContainer,
					value: effectiveDistance
				}
			});
		}
	}
	return collisions.sort(sortCollisionsAsc);
};
/**
* Returns the intersecting rectangle area between two rectangles
*/
function getIntersectionRatio(entry, target) {
	const top = Math.max(target.top, entry.top);
	const left = Math.max(target.left, entry.left);
	const right = Math.min(target.left + target.width, entry.left + entry.width);
	const bottom = Math.min(target.top + target.height, entry.top + entry.height);
	const width = right - left;
	const height = bottom - top;
	if (left < right && top < bottom) {
		const targetArea = target.width * target.height;
		const entryArea = entry.width * entry.height;
		const intersectionArea = width * height;
		const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
		return Number(intersectionRatio.toFixed(4));
	}
	return 0;
}
/**
* Returns the rectangles that has the greatest intersection area with a given
* rectangle in an array of rectangles.
*/
var rectIntersection = (_ref) => {
	let { collisionRect, droppableRects, droppableContainers } = _ref;
	const collisions = [];
	for (const droppableContainer of droppableContainers) {
		const { id } = droppableContainer;
		const rect = droppableRects.get(id);
		if (rect) {
			const intersectionRatio = getIntersectionRatio(rect, collisionRect);
			if (intersectionRatio > 0) collisions.push({
				id,
				data: {
					droppableContainer,
					value: intersectionRatio
				}
			});
		}
	}
	return collisions.sort(sortCollisionsDesc);
};
/**
* Check if a given point is contained within a bounding rectangle
*/
function isPointWithinRect(point, rect) {
	const { top, left, bottom, right } = rect;
	return top <= point.y && point.y <= bottom && left <= point.x && point.x <= right;
}
/**
* Returns the rectangles that the pointer is hovering over
*/
var pointerWithin = (_ref) => {
	let { droppableContainers, droppableRects, pointerCoordinates } = _ref;
	if (!pointerCoordinates) return [];
	const collisions = [];
	for (const droppableContainer of droppableContainers) {
		const { id } = droppableContainer;
		const rect = droppableRects.get(id);
		if (rect && isPointWithinRect(pointerCoordinates, rect)) {
			const distances = cornersOfRectangle(rect).reduce((accumulator, corner) => {
				return accumulator + distanceBetween(pointerCoordinates, corner);
			}, 0);
			const effectiveDistance = Number((distances / 4).toFixed(4));
			collisions.push({
				id,
				data: {
					droppableContainer,
					value: effectiveDistance
				}
			});
		}
	}
	return collisions.sort(sortCollisionsAsc);
};
function adjustScale(transform, rect1, rect2) {
	return {
		...transform,
		scaleX: rect1 && rect2 ? rect1.width / rect2.width : 1,
		scaleY: rect1 && rect2 ? rect1.height / rect2.height : 1
	};
}
function getRectDelta(rect1, rect2) {
	return rect1 && rect2 ? {
		x: rect1.left - rect2.left,
		y: rect1.top - rect2.top
	} : defaultCoordinates;
}
function createRectAdjustmentFn(modifier) {
	return function adjustClientRect(rect) {
		for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) adjustments[_key - 1] = arguments[_key];
		return adjustments.reduce((acc, adjustment) => ({
			...acc,
			top: acc.top + modifier * adjustment.y,
			bottom: acc.bottom + modifier * adjustment.y,
			left: acc.left + modifier * adjustment.x,
			right: acc.right + modifier * adjustment.x
		}), { ...rect });
	};
}
var getAdjustedRect = /*#__PURE__*/ createRectAdjustmentFn(1);
function parseTransform(transform) {
	if (transform.startsWith("matrix3d(")) {
		const transformArray = transform.slice(9, -1).split(/, /);
		return {
			x: +transformArray[12],
			y: +transformArray[13],
			scaleX: +transformArray[0],
			scaleY: +transformArray[5]
		};
	} else if (transform.startsWith("matrix(")) {
		const transformArray = transform.slice(7, -1).split(/, /);
		return {
			x: +transformArray[4],
			y: +transformArray[5],
			scaleX: +transformArray[0],
			scaleY: +transformArray[3]
		};
	}
	return null;
}
function inverseTransform(rect, transform, transformOrigin) {
	const parsedTransform = parseTransform(transform);
	if (!parsedTransform) return rect;
	const { scaleX, scaleY, x: translateX, y: translateY } = parsedTransform;
	const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
	const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
	const w = scaleX ? rect.width / scaleX : rect.width;
	const h = scaleY ? rect.height / scaleY : rect.height;
	return {
		width: w,
		height: h,
		top: y,
		right: x + w,
		bottom: y + h,
		left: x
	};
}
var defaultOptions = { ignoreTransform: false };
/**
* Returns the bounding client rect of an element relative to the viewport.
*/
function getClientRect(element, options) {
	if (options === void 0) options = defaultOptions;
	let rect = element.getBoundingClientRect();
	if (options.ignoreTransform) {
		const { transform, transformOrigin } = getWindow(element).getComputedStyle(element);
		if (transform) rect = inverseTransform(rect, transform, transformOrigin);
	}
	const { top, left, width, height, bottom, right } = rect;
	return {
		top,
		left,
		width,
		height,
		bottom,
		right
	};
}
/**
* Returns the bounding client rect of an element relative to the viewport.
*
* @remarks
* The ClientRect returned by this method does not take into account transforms
* applied to the element it measures.
*
*/
function getTransformAgnosticClientRect(element) {
	return getClientRect(element, { ignoreTransform: true });
}
function getWindowClientRect(element) {
	const width = element.innerWidth;
	const height = element.innerHeight;
	return {
		top: 0,
		left: 0,
		right: width,
		bottom: height,
		width,
		height
	};
}
function isFixed(node, computedStyle) {
	if (computedStyle === void 0) computedStyle = getWindow(node).getComputedStyle(node);
	return computedStyle.position === "fixed";
}
function isScrollable(element, computedStyle) {
	if (computedStyle === void 0) computedStyle = getWindow(element).getComputedStyle(element);
	const overflowRegex = /(auto|scroll|overlay)/;
	return [
		"overflow",
		"overflowX",
		"overflowY"
	].some((property) => {
		const value = computedStyle[property];
		return typeof value === "string" ? overflowRegex.test(value) : false;
	});
}
function getScrollableAncestors(element, limit) {
	const scrollParents = [];
	function findScrollableAncestors(node) {
		if (limit != null && scrollParents.length >= limit) return scrollParents;
		if (!node) return scrollParents;
		if (isDocument(node) && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
			scrollParents.push(node.scrollingElement);
			return scrollParents;
		}
		if (!isHTMLElement(node) || isSVGElement(node)) return scrollParents;
		if (scrollParents.includes(node)) return scrollParents;
		const computedStyle = getWindow(element).getComputedStyle(node);
		if (node !== element) {
			if (isScrollable(node, computedStyle)) scrollParents.push(node);
		}
		if (isFixed(node, computedStyle)) return scrollParents;
		return findScrollableAncestors(node.parentNode);
	}
	if (!element) return scrollParents;
	return findScrollableAncestors(element);
}
function getFirstScrollableAncestor(node) {
	const [firstScrollableAncestor] = getScrollableAncestors(node, 1);
	return firstScrollableAncestor != null ? firstScrollableAncestor : null;
}
function getScrollableElement(element) {
	if (!canUseDOM || !element) return null;
	if (isWindow(element)) return element;
	if (!isNode(element)) return null;
	if (isDocument(element) || element === getOwnerDocument(element).scrollingElement) return window;
	if (isHTMLElement(element)) return element;
	return null;
}
function getScrollXCoordinate(element) {
	if (isWindow(element)) return element.scrollX;
	return element.scrollLeft;
}
function getScrollYCoordinate(element) {
	if (isWindow(element)) return element.scrollY;
	return element.scrollTop;
}
function getScrollCoordinates(element) {
	return {
		x: getScrollXCoordinate(element),
		y: getScrollYCoordinate(element)
	};
}
var Direction;
(function(Direction) {
	Direction[Direction["Forward"] = 1] = "Forward";
	Direction[Direction["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));
function isDocumentScrollingElement(element) {
	if (!canUseDOM || !element) return false;
	return element === document.scrollingElement;
}
function getScrollPosition(scrollingContainer) {
	const minScroll = {
		x: 0,
		y: 0
	};
	const dimensions = isDocumentScrollingElement(scrollingContainer) ? {
		height: window.innerHeight,
		width: window.innerWidth
	} : {
		height: scrollingContainer.clientHeight,
		width: scrollingContainer.clientWidth
	};
	const maxScroll = {
		x: scrollingContainer.scrollWidth - dimensions.width,
		y: scrollingContainer.scrollHeight - dimensions.height
	};
	return {
		isTop: scrollingContainer.scrollTop <= minScroll.y,
		isLeft: scrollingContainer.scrollLeft <= minScroll.x,
		isBottom: scrollingContainer.scrollTop >= maxScroll.y,
		isRight: scrollingContainer.scrollLeft >= maxScroll.x,
		maxScroll,
		minScroll
	};
}
var defaultThreshold = {
	x: .2,
	y: .2
};
function getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, _ref, acceleration, thresholdPercentage) {
	let { top, left, right, bottom } = _ref;
	if (acceleration === void 0) acceleration = 10;
	if (thresholdPercentage === void 0) thresholdPercentage = defaultThreshold;
	const { isTop, isBottom, isLeft, isRight } = getScrollPosition(scrollContainer);
	const direction = {
		x: 0,
		y: 0
	};
	const speed = {
		x: 0,
		y: 0
	};
	const threshold = {
		height: scrollContainerRect.height * thresholdPercentage.y,
		width: scrollContainerRect.width * thresholdPercentage.x
	};
	if (!isTop && top <= scrollContainerRect.top + threshold.height) {
		direction.y = Direction.Backward;
		speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold.height - top) / threshold.height);
	} else if (!isBottom && bottom >= scrollContainerRect.bottom - threshold.height) {
		direction.y = Direction.Forward;
		speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold.height - bottom) / threshold.height);
	}
	if (!isRight && right >= scrollContainerRect.right - threshold.width) {
		direction.x = Direction.Forward;
		speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold.width - right) / threshold.width);
	} else if (!isLeft && left <= scrollContainerRect.left + threshold.width) {
		direction.x = Direction.Backward;
		speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold.width - left) / threshold.width);
	}
	return {
		direction,
		speed
	};
}
function getScrollElementRect(element) {
	if (element === document.scrollingElement) {
		const { innerWidth, innerHeight } = window;
		return {
			top: 0,
			left: 0,
			right: innerWidth,
			bottom: innerHeight,
			width: innerWidth,
			height: innerHeight
		};
	}
	const { top, left, right, bottom } = element.getBoundingClientRect();
	return {
		top,
		left,
		right,
		bottom,
		width: element.clientWidth,
		height: element.clientHeight
	};
}
function getScrollOffsets(scrollableAncestors) {
	return scrollableAncestors.reduce((acc, node) => {
		return add(acc, getScrollCoordinates(node));
	}, defaultCoordinates);
}
function getScrollXOffset(scrollableAncestors) {
	return scrollableAncestors.reduce((acc, node) => {
		return acc + getScrollXCoordinate(node);
	}, 0);
}
function getScrollYOffset(scrollableAncestors) {
	return scrollableAncestors.reduce((acc, node) => {
		return acc + getScrollYCoordinate(node);
	}, 0);
}
function scrollIntoViewIfNeeded(element, measure) {
	if (measure === void 0) measure = getClientRect;
	if (!element) return;
	const { top, left, bottom, right } = measure(element);
	if (!getFirstScrollableAncestor(element)) return;
	if (bottom <= 0 || right <= 0 || top >= window.innerHeight || left >= window.innerWidth) element.scrollIntoView({
		block: "center",
		inline: "center"
	});
}
var properties = [[
	"x",
	["left", "right"],
	getScrollXOffset
], [
	"y",
	["top", "bottom"],
	getScrollYOffset
]];
var Rect = class {
	constructor(rect, element) {
		this.rect = void 0;
		this.width = void 0;
		this.height = void 0;
		this.top = void 0;
		this.bottom = void 0;
		this.right = void 0;
		this.left = void 0;
		const scrollableAncestors = getScrollableAncestors(element);
		const scrollOffsets = getScrollOffsets(scrollableAncestors);
		this.rect = { ...rect };
		this.width = rect.width;
		this.height = rect.height;
		for (const [axis, keys, getScrollOffset] of properties) for (const key of keys) Object.defineProperty(this, key, {
			get: () => {
				const currentOffsets = getScrollOffset(scrollableAncestors);
				const scrollOffsetsDeltla = scrollOffsets[axis] - currentOffsets;
				return this.rect[key] + scrollOffsetsDeltla;
			},
			enumerable: true
		});
		Object.defineProperty(this, "rect", { enumerable: false });
	}
};
var Listeners = class {
	constructor(target) {
		this.target = void 0;
		this.listeners = [];
		this.removeAll = () => {
			this.listeners.forEach((listener) => {
				var _this$target;
				return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
			});
		};
		this.target = target;
	}
	add(eventName, handler, options) {
		var _this$target2;
		(_this$target2 = this.target) == null || _this$target2.addEventListener(eventName, handler, options);
		this.listeners.push([
			eventName,
			handler,
			options
		]);
	}
};
function getEventListenerTarget(target) {
	const { EventTarget } = getWindow(target);
	return target instanceof EventTarget ? target : getOwnerDocument(target);
}
function hasExceededDistance(delta, measurement) {
	const dx = Math.abs(delta.x);
	const dy = Math.abs(delta.y);
	if (typeof measurement === "number") return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
	if ("x" in measurement && "y" in measurement) return dx > measurement.x && dy > measurement.y;
	if ("x" in measurement) return dx > measurement.x;
	if ("y" in measurement) return dy > measurement.y;
	return false;
}
var EventName;
(function(EventName) {
	EventName["Click"] = "click";
	EventName["DragStart"] = "dragstart";
	EventName["Keydown"] = "keydown";
	EventName["ContextMenu"] = "contextmenu";
	EventName["Resize"] = "resize";
	EventName["SelectionChange"] = "selectionchange";
	EventName["VisibilityChange"] = "visibilitychange";
})(EventName || (EventName = {}));
function preventDefault$1(event) {
	event.preventDefault();
}
function stopPropagation(event) {
	event.stopPropagation();
}
var KeyboardCode;
(function(KeyboardCode) {
	KeyboardCode["Space"] = "Space";
	KeyboardCode["Down"] = "ArrowDown";
	KeyboardCode["Right"] = "ArrowRight";
	KeyboardCode["Left"] = "ArrowLeft";
	KeyboardCode["Up"] = "ArrowUp";
	KeyboardCode["Esc"] = "Escape";
	KeyboardCode["Enter"] = "Enter";
	KeyboardCode["Tab"] = "Tab";
})(KeyboardCode || (KeyboardCode = {}));
var defaultKeyboardCodes = {
	start: [KeyboardCode.Space, KeyboardCode.Enter],
	cancel: [KeyboardCode.Esc],
	end: [
		KeyboardCode.Space,
		KeyboardCode.Enter,
		KeyboardCode.Tab
	]
};
var defaultKeyboardCoordinateGetter = (event, _ref) => {
	let { currentCoordinates } = _ref;
	switch (event.code) {
		case KeyboardCode.Right: return {
			...currentCoordinates,
			x: currentCoordinates.x + 25
		};
		case KeyboardCode.Left: return {
			...currentCoordinates,
			x: currentCoordinates.x - 25
		};
		case KeyboardCode.Down: return {
			...currentCoordinates,
			y: currentCoordinates.y + 25
		};
		case KeyboardCode.Up: return {
			...currentCoordinates,
			y: currentCoordinates.y - 25
		};
	}
};
var KeyboardSensor = class {
	constructor(props) {
		this.props = void 0;
		this.autoScrollEnabled = false;
		this.referenceCoordinates = void 0;
		this.listeners = void 0;
		this.windowListeners = void 0;
		this.props = props;
		const { event: { target } } = props;
		this.props = props;
		this.listeners = new Listeners(getOwnerDocument(target));
		this.windowListeners = new Listeners(getWindow(target));
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.attach();
	}
	attach() {
		this.handleStart();
		this.windowListeners.add(EventName.Resize, this.handleCancel);
		this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
		setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
	}
	handleStart() {
		const { activeNode, onStart } = this.props;
		const node = activeNode.node.current;
		if (node) scrollIntoViewIfNeeded(node);
		onStart(defaultCoordinates);
	}
	handleKeyDown(event) {
		if (isKeyboardEvent(event)) {
			const { active, context, options } = this.props;
			const { keyboardCodes = defaultKeyboardCodes, coordinateGetter = defaultKeyboardCoordinateGetter, scrollBehavior = "smooth" } = options;
			const { code } = event;
			if (keyboardCodes.end.includes(code)) {
				this.handleEnd(event);
				return;
			}
			if (keyboardCodes.cancel.includes(code)) {
				this.handleCancel(event);
				return;
			}
			const { collisionRect } = context.current;
			const currentCoordinates = collisionRect ? {
				x: collisionRect.left,
				y: collisionRect.top
			} : defaultCoordinates;
			if (!this.referenceCoordinates) this.referenceCoordinates = currentCoordinates;
			const newCoordinates = coordinateGetter(event, {
				active,
				context: context.current,
				currentCoordinates
			});
			if (newCoordinates) {
				const coordinatesDelta = subtract(newCoordinates, currentCoordinates);
				const scrollDelta = {
					x: 0,
					y: 0
				};
				const { scrollableAncestors } = context.current;
				for (const scrollContainer of scrollableAncestors) {
					const direction = event.code;
					const { isTop, isRight, isLeft, isBottom, maxScroll, minScroll } = getScrollPosition(scrollContainer);
					const scrollElementRect = getScrollElementRect(scrollContainer);
					const clampedCoordinates = {
						x: Math.min(direction === KeyboardCode.Right ? scrollElementRect.right - scrollElementRect.width / 2 : scrollElementRect.right, Math.max(direction === KeyboardCode.Right ? scrollElementRect.left : scrollElementRect.left + scrollElementRect.width / 2, newCoordinates.x)),
						y: Math.min(direction === KeyboardCode.Down ? scrollElementRect.bottom - scrollElementRect.height / 2 : scrollElementRect.bottom, Math.max(direction === KeyboardCode.Down ? scrollElementRect.top : scrollElementRect.top + scrollElementRect.height / 2, newCoordinates.y))
					};
					const canScrollX = direction === KeyboardCode.Right && !isRight || direction === KeyboardCode.Left && !isLeft;
					const canScrollY = direction === KeyboardCode.Down && !isBottom || direction === KeyboardCode.Up && !isTop;
					if (canScrollX && clampedCoordinates.x !== newCoordinates.x) {
						const newScrollCoordinates = scrollContainer.scrollLeft + coordinatesDelta.x;
						const canScrollToNewCoordinates = direction === KeyboardCode.Right && newScrollCoordinates <= maxScroll.x || direction === KeyboardCode.Left && newScrollCoordinates >= minScroll.x;
						if (canScrollToNewCoordinates && !coordinatesDelta.y) {
							scrollContainer.scrollTo({
								left: newScrollCoordinates,
								behavior: scrollBehavior
							});
							return;
						}
						if (canScrollToNewCoordinates) scrollDelta.x = scrollContainer.scrollLeft - newScrollCoordinates;
						else scrollDelta.x = direction === KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
						if (scrollDelta.x) scrollContainer.scrollBy({
							left: -scrollDelta.x,
							behavior: scrollBehavior
						});
						break;
					} else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
						const newScrollCoordinates = scrollContainer.scrollTop + coordinatesDelta.y;
						const canScrollToNewCoordinates = direction === KeyboardCode.Down && newScrollCoordinates <= maxScroll.y || direction === KeyboardCode.Up && newScrollCoordinates >= minScroll.y;
						if (canScrollToNewCoordinates && !coordinatesDelta.x) {
							scrollContainer.scrollTo({
								top: newScrollCoordinates,
								behavior: scrollBehavior
							});
							return;
						}
						if (canScrollToNewCoordinates) scrollDelta.y = scrollContainer.scrollTop - newScrollCoordinates;
						else scrollDelta.y = direction === KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
						if (scrollDelta.y) scrollContainer.scrollBy({
							top: -scrollDelta.y,
							behavior: scrollBehavior
						});
						break;
					}
				}
				this.handleMove(event, add(subtract(newCoordinates, this.referenceCoordinates), scrollDelta));
			}
		}
	}
	handleMove(event, coordinates) {
		const { onMove } = this.props;
		event.preventDefault();
		onMove(coordinates);
	}
	handleEnd(event) {
		const { onEnd } = this.props;
		event.preventDefault();
		this.detach();
		onEnd();
	}
	handleCancel(event) {
		const { onCancel } = this.props;
		event.preventDefault();
		this.detach();
		onCancel();
	}
	detach() {
		this.listeners.removeAll();
		this.windowListeners.removeAll();
	}
};
KeyboardSensor.activators = [{
	eventName: "onKeyDown",
	handler: (event, _ref, _ref2) => {
		let { keyboardCodes = defaultKeyboardCodes, onActivation } = _ref;
		let { active } = _ref2;
		const { code } = event.nativeEvent;
		if (keyboardCodes.start.includes(code)) {
			const activator = active.activatorNode.current;
			if (activator && event.target !== activator) return false;
			event.preventDefault();
			onActivation?.({ event: event.nativeEvent });
			return true;
		}
		return false;
	}
}];
function isDistanceConstraint(constraint) {
	return Boolean(constraint && "distance" in constraint);
}
function isDelayConstraint(constraint) {
	return Boolean(constraint && "delay" in constraint);
}
var AbstractPointerSensor = class {
	constructor(props, events, listenerTarget) {
		var _getEventCoordinates;
		if (listenerTarget === void 0) listenerTarget = getEventListenerTarget(props.event.target);
		this.props = void 0;
		this.events = void 0;
		this.autoScrollEnabled = true;
		this.document = void 0;
		this.activated = false;
		this.initialCoordinates = void 0;
		this.timeoutId = null;
		this.listeners = void 0;
		this.documentListeners = void 0;
		this.windowListeners = void 0;
		this.props = props;
		this.events = events;
		const { event } = props;
		const { target } = event;
		this.props = props;
		this.events = events;
		this.document = getOwnerDocument(target);
		this.documentListeners = new Listeners(this.document);
		this.listeners = new Listeners(listenerTarget);
		this.windowListeners = new Listeners(getWindow(target));
		this.initialCoordinates = (_getEventCoordinates = getEventCoordinates(event)) != null ? _getEventCoordinates : defaultCoordinates;
		this.handleStart = this.handleStart.bind(this);
		this.handleMove = this.handleMove.bind(this);
		this.handleEnd = this.handleEnd.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleKeydown = this.handleKeydown.bind(this);
		this.removeTextSelection = this.removeTextSelection.bind(this);
		this.attach();
	}
	attach() {
		const { events, props: { options: { activationConstraint, bypassActivationConstraint } } } = this;
		this.listeners.add(events.move.name, this.handleMove, { passive: false });
		this.listeners.add(events.end.name, this.handleEnd);
		if (events.cancel) this.listeners.add(events.cancel.name, this.handleCancel);
		this.windowListeners.add(EventName.Resize, this.handleCancel);
		this.windowListeners.add(EventName.DragStart, preventDefault$1);
		this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
		this.windowListeners.add(EventName.ContextMenu, preventDefault$1);
		this.documentListeners.add(EventName.Keydown, this.handleKeydown);
		if (activationConstraint) {
			if (bypassActivationConstraint != null && bypassActivationConstraint({
				event: this.props.event,
				activeNode: this.props.activeNode,
				options: this.props.options
			})) return this.handleStart();
			if (isDelayConstraint(activationConstraint)) {
				this.timeoutId = setTimeout(this.handleStart, activationConstraint.delay);
				this.handlePending(activationConstraint);
				return;
			}
			if (isDistanceConstraint(activationConstraint)) {
				this.handlePending(activationConstraint);
				return;
			}
		}
		this.handleStart();
	}
	detach() {
		this.listeners.removeAll();
		this.windowListeners.removeAll();
		setTimeout(this.documentListeners.removeAll, 50);
		if (this.timeoutId !== null) {
			clearTimeout(this.timeoutId);
			this.timeoutId = null;
		}
	}
	handlePending(constraint, offset) {
		const { active, onPending } = this.props;
		onPending(active, constraint, this.initialCoordinates, offset);
	}
	handleStart() {
		const { initialCoordinates } = this;
		const { onStart } = this.props;
		if (initialCoordinates) {
			this.activated = true;
			this.documentListeners.add(EventName.Click, stopPropagation, { capture: true });
			this.removeTextSelection();
			this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
			onStart(initialCoordinates);
		}
	}
	handleMove(event) {
		var _getEventCoordinates2;
		const { activated, initialCoordinates, props } = this;
		const { onMove, options: { activationConstraint } } = props;
		if (!initialCoordinates) return;
		const coordinates = (_getEventCoordinates2 = getEventCoordinates(event)) != null ? _getEventCoordinates2 : defaultCoordinates;
		const delta = subtract(initialCoordinates, coordinates);
		if (!activated && activationConstraint) {
			if (isDistanceConstraint(activationConstraint)) {
				if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) return this.handleCancel();
				if (hasExceededDistance(delta, activationConstraint.distance)) return this.handleStart();
			}
			if (isDelayConstraint(activationConstraint)) {
				if (hasExceededDistance(delta, activationConstraint.tolerance)) return this.handleCancel();
			}
			this.handlePending(activationConstraint, delta);
			return;
		}
		if (event.cancelable) event.preventDefault();
		onMove(coordinates);
	}
	handleEnd() {
		const { onAbort, onEnd } = this.props;
		this.detach();
		if (!this.activated) onAbort(this.props.active);
		onEnd();
	}
	handleCancel() {
		const { onAbort, onCancel } = this.props;
		this.detach();
		if (!this.activated) onAbort(this.props.active);
		onCancel();
	}
	handleKeydown(event) {
		if (event.code === KeyboardCode.Esc) this.handleCancel();
	}
	removeTextSelection() {
		var _this$document$getSel;
		(_this$document$getSel = this.document.getSelection()) == null || _this$document$getSel.removeAllRanges();
	}
};
var events = {
	cancel: { name: "pointercancel" },
	move: { name: "pointermove" },
	end: { name: "pointerup" }
};
var PointerSensor = class extends AbstractPointerSensor {
	constructor(props) {
		const { event } = props;
		const listenerTarget = getOwnerDocument(event.target);
		super(props, events, listenerTarget);
	}
};
PointerSensor.activators = [{
	eventName: "onPointerDown",
	handler: (_ref, _ref2) => {
		let { nativeEvent: event } = _ref;
		let { onActivation } = _ref2;
		if (!event.isPrimary || event.button !== 0) return false;
		onActivation?.({ event });
		return true;
	}
}];
var events$1 = {
	move: { name: "mousemove" },
	end: { name: "mouseup" }
};
var MouseButton;
(function(MouseButton) {
	MouseButton[MouseButton["RightClick"] = 2] = "RightClick";
})(MouseButton || (MouseButton = {}));
var MouseSensor = class extends AbstractPointerSensor {
	constructor(props) {
		super(props, events$1, getOwnerDocument(props.event.target));
	}
};
MouseSensor.activators = [{
	eventName: "onMouseDown",
	handler: (_ref, _ref2) => {
		let { nativeEvent: event } = _ref;
		let { onActivation } = _ref2;
		if (event.button === MouseButton.RightClick) return false;
		onActivation?.({ event });
		return true;
	}
}];
var events$2 = {
	cancel: { name: "touchcancel" },
	move: { name: "touchmove" },
	end: { name: "touchend" }
};
var TouchSensor = class extends AbstractPointerSensor {
	constructor(props) {
		super(props, events$2);
	}
	static setup() {
		window.addEventListener(events$2.move.name, noop, {
			capture: false,
			passive: false
		});
		return function teardown() {
			window.removeEventListener(events$2.move.name, noop);
		};
		function noop() {}
	}
};
TouchSensor.activators = [{
	eventName: "onTouchStart",
	handler: (_ref, _ref2) => {
		let { nativeEvent: event } = _ref;
		let { onActivation } = _ref2;
		const { touches } = event;
		if (touches.length > 1) return false;
		onActivation?.({ event });
		return true;
	}
}];
var AutoScrollActivator;
(function(AutoScrollActivator) {
	AutoScrollActivator[AutoScrollActivator["Pointer"] = 0] = "Pointer";
	AutoScrollActivator[AutoScrollActivator["DraggableRect"] = 1] = "DraggableRect";
})(AutoScrollActivator || (AutoScrollActivator = {}));
var TraversalOrder;
(function(TraversalOrder) {
	TraversalOrder[TraversalOrder["TreeOrder"] = 0] = "TreeOrder";
	TraversalOrder[TraversalOrder["ReversedTreeOrder"] = 1] = "ReversedTreeOrder";
})(TraversalOrder || (TraversalOrder = {}));
function useAutoScroller(_ref) {
	let { acceleration, activator = AutoScrollActivator.Pointer, canScroll, draggingRect, enabled, interval = 5, order = TraversalOrder.TreeOrder, pointerCoordinates, scrollableAncestors, scrollableAncestorRects, delta, threshold } = _ref;
	const scrollIntent = useScrollIntent({
		delta,
		disabled: !enabled
	});
	const [setAutoScrollInterval, clearAutoScrollInterval] = useInterval();
	const scrollSpeed = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const scrollDirection = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const rect = (0, import_react.useMemo)(() => {
		switch (activator) {
			case AutoScrollActivator.Pointer: return pointerCoordinates ? {
				top: pointerCoordinates.y,
				bottom: pointerCoordinates.y,
				left: pointerCoordinates.x,
				right: pointerCoordinates.x
			} : null;
			case AutoScrollActivator.DraggableRect: return draggingRect;
		}
	}, [
		activator,
		draggingRect,
		pointerCoordinates
	]);
	const scrollContainerRef = (0, import_react.useRef)(null);
	const autoScroll = (0, import_react.useCallback)(() => {
		const scrollContainer = scrollContainerRef.current;
		if (!scrollContainer) return;
		const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
		const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
		scrollContainer.scrollBy(scrollLeft, scrollTop);
	}, []);
	const sortedScrollableAncestors = (0, import_react.useMemo)(() => order === TraversalOrder.TreeOrder ? [...scrollableAncestors].reverse() : scrollableAncestors, [order, scrollableAncestors]);
	(0, import_react.useEffect)(() => {
		if (!enabled || !scrollableAncestors.length || !rect) {
			clearAutoScrollInterval();
			return;
		}
		for (const scrollContainer of sortedScrollableAncestors) {
			if ((canScroll == null ? void 0 : canScroll(scrollContainer)) === false) continue;
			const index = scrollableAncestors.indexOf(scrollContainer);
			const scrollContainerRect = scrollableAncestorRects[index];
			if (!scrollContainerRect) continue;
			const { direction, speed } = getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, rect, acceleration, threshold);
			for (const axis of ["x", "y"]) if (!scrollIntent[axis][direction[axis]]) {
				speed[axis] = 0;
				direction[axis] = 0;
			}
			if (speed.x > 0 || speed.y > 0) {
				clearAutoScrollInterval();
				scrollContainerRef.current = scrollContainer;
				setAutoScrollInterval(autoScroll, interval);
				scrollSpeed.current = speed;
				scrollDirection.current = direction;
				return;
			}
		}
		scrollSpeed.current = {
			x: 0,
			y: 0
		};
		scrollDirection.current = {
			x: 0,
			y: 0
		};
		clearAutoScrollInterval();
	}, [
		acceleration,
		autoScroll,
		canScroll,
		clearAutoScrollInterval,
		enabled,
		interval,
		JSON.stringify(rect),
		JSON.stringify(scrollIntent),
		setAutoScrollInterval,
		scrollableAncestors,
		sortedScrollableAncestors,
		scrollableAncestorRects,
		JSON.stringify(threshold)
	]);
}
var defaultScrollIntent = {
	x: {
		[Direction.Backward]: false,
		[Direction.Forward]: false
	},
	y: {
		[Direction.Backward]: false,
		[Direction.Forward]: false
	}
};
function useScrollIntent(_ref2) {
	let { delta, disabled } = _ref2;
	const previousDelta = usePrevious(delta);
	return useLazyMemo((previousIntent) => {
		if (disabled || !previousDelta || !previousIntent) return defaultScrollIntent;
		const direction = {
			x: Math.sign(delta.x - previousDelta.x),
			y: Math.sign(delta.y - previousDelta.y)
		};
		return {
			x: {
				[Direction.Backward]: previousIntent.x[Direction.Backward] || direction.x === -1,
				[Direction.Forward]: previousIntent.x[Direction.Forward] || direction.x === 1
			},
			y: {
				[Direction.Backward]: previousIntent.y[Direction.Backward] || direction.y === -1,
				[Direction.Forward]: previousIntent.y[Direction.Forward] || direction.y === 1
			}
		};
	}, [
		disabled,
		delta,
		previousDelta
	]);
}
function useCachedNode(draggableNodes, id) {
	const draggableNode = id != null ? draggableNodes.get(id) : void 0;
	const node = draggableNode ? draggableNode.node.current : null;
	return useLazyMemo((cachedNode) => {
		var _ref;
		if (id == null) return null;
		return (_ref = node != null ? node : cachedNode) != null ? _ref : null;
	}, [node, id]);
}
function useCombineActivators(sensors, getSyntheticHandler) {
	return (0, import_react.useMemo)(() => sensors.reduce((accumulator, sensor) => {
		const { sensor: Sensor } = sensor;
		const sensorActivators = Sensor.activators.map((activator) => ({
			eventName: activator.eventName,
			handler: getSyntheticHandler(activator.handler, sensor)
		}));
		return [...accumulator, ...sensorActivators];
	}, []), [sensors, getSyntheticHandler]);
}
var MeasuringStrategy;
(function(MeasuringStrategy) {
	MeasuringStrategy[MeasuringStrategy["Always"] = 0] = "Always";
	MeasuringStrategy[MeasuringStrategy["BeforeDragging"] = 1] = "BeforeDragging";
	MeasuringStrategy[MeasuringStrategy["WhileDragging"] = 2] = "WhileDragging";
})(MeasuringStrategy || (MeasuringStrategy = {}));
var MeasuringFrequency;
(function(MeasuringFrequency) {
	MeasuringFrequency["Optimized"] = "optimized";
})(MeasuringFrequency || (MeasuringFrequency = {}));
var defaultValue = /*#__PURE__*/ new Map();
function useDroppableMeasuring(containers, _ref) {
	let { dragging, dependencies, config } = _ref;
	const [queue, setQueue] = (0, import_react.useState)(null);
	const { frequency, measure, strategy } = config;
	const containersRef = (0, import_react.useRef)(containers);
	const disabled = isDisabled();
	const disabledRef = useLatestValue(disabled);
	const measureDroppableContainers = (0, import_react.useCallback)(function(ids) {
		if (ids === void 0) ids = [];
		if (disabledRef.current) return;
		setQueue((value) => {
			if (value === null) return ids;
			return value.concat(ids.filter((id) => !value.includes(id)));
		});
	}, [disabledRef]);
	const timeoutId = (0, import_react.useRef)(null);
	const droppableRects = useLazyMemo((previousValue) => {
		if (disabled && !dragging) return defaultValue;
		if (!previousValue || previousValue === defaultValue || containersRef.current !== containers || queue != null) {
			const map = /* @__PURE__ */ new Map();
			for (let container of containers) {
				if (!container) continue;
				if (queue && queue.length > 0 && !queue.includes(container.id) && container.rect.current) {
					map.set(container.id, container.rect.current);
					continue;
				}
				const node = container.node.current;
				const rect = node ? new Rect(measure(node), node) : null;
				container.rect.current = rect;
				if (rect) map.set(container.id, rect);
			}
			return map;
		}
		return previousValue;
	}, [
		containers,
		queue,
		dragging,
		disabled,
		measure
	]);
	(0, import_react.useEffect)(() => {
		containersRef.current = containers;
	}, [containers]);
	(0, import_react.useEffect)(() => {
		if (disabled) return;
		measureDroppableContainers();
	}, [dragging, disabled]);
	(0, import_react.useEffect)(() => {
		if (queue && queue.length > 0) setQueue(null);
	}, [JSON.stringify(queue)]);
	(0, import_react.useEffect)(() => {
		if (disabled || typeof frequency !== "number" || timeoutId.current !== null) return;
		timeoutId.current = setTimeout(() => {
			measureDroppableContainers();
			timeoutId.current = null;
		}, frequency);
	}, [
		frequency,
		disabled,
		measureDroppableContainers,
		...dependencies
	]);
	return {
		droppableRects,
		measureDroppableContainers,
		measuringScheduled: queue != null
	};
	function isDisabled() {
		switch (strategy) {
			case MeasuringStrategy.Always: return false;
			case MeasuringStrategy.BeforeDragging: return dragging;
			default: return !dragging;
		}
	}
}
function useInitialValue(value, computeFn) {
	return useLazyMemo((previousValue) => {
		if (!value) return null;
		if (previousValue) return previousValue;
		return typeof computeFn === "function" ? computeFn(value) : value;
	}, [computeFn, value]);
}
function useInitialRect(node, measure) {
	return useInitialValue(node, measure);
}
/**
* Returns a new MutationObserver instance.
* If `MutationObserver` is undefined in the execution environment, returns `undefined`.
*/
function useMutationObserver(_ref) {
	let { callback, disabled } = _ref;
	const handleMutations = useEvent(callback);
	const mutationObserver = (0, import_react.useMemo)(() => {
		if (disabled || typeof window === "undefined" || typeof window.MutationObserver === "undefined") return;
		const { MutationObserver } = window;
		return new MutationObserver(handleMutations);
	}, [handleMutations, disabled]);
	(0, import_react.useEffect)(() => {
		return () => mutationObserver == null ? void 0 : mutationObserver.disconnect();
	}, [mutationObserver]);
	return mutationObserver;
}
/**
* Returns a new ResizeObserver instance bound to the `onResize` callback.
* If `ResizeObserver` is undefined in the execution environment, returns `undefined`.
*/
function useResizeObserver(_ref) {
	let { callback, disabled } = _ref;
	const handleResize = useEvent(callback);
	const resizeObserver = (0, import_react.useMemo)(() => {
		if (disabled || typeof window === "undefined" || typeof window.ResizeObserver === "undefined") return;
		const { ResizeObserver } = window;
		return new ResizeObserver(handleResize);
	}, [disabled]);
	(0, import_react.useEffect)(() => {
		return () => resizeObserver == null ? void 0 : resizeObserver.disconnect();
	}, [resizeObserver]);
	return resizeObserver;
}
function defaultMeasure(element) {
	return new Rect(getClientRect(element), element);
}
function useRect(element, measure, fallbackRect) {
	if (measure === void 0) measure = defaultMeasure;
	const [rect, setRect] = (0, import_react.useState)(null);
	function measureRect() {
		setRect((currentRect) => {
			if (!element) return null;
			if (element.isConnected === false) {
				var _ref;
				return (_ref = currentRect != null ? currentRect : fallbackRect) != null ? _ref : null;
			}
			const newRect = measure(element);
			if (JSON.stringify(currentRect) === JSON.stringify(newRect)) return currentRect;
			return newRect;
		});
	}
	const mutationObserver = useMutationObserver({ callback(records) {
		if (!element) return;
		for (const record of records) {
			const { type, target } = record;
			if (type === "childList" && target instanceof HTMLElement && target.contains(element)) {
				measureRect();
				break;
			}
		}
	} });
	const resizeObserver = useResizeObserver({ callback: measureRect });
	useIsomorphicLayoutEffect(() => {
		measureRect();
		if (element) {
			resizeObserver?.observe(element);
			mutationObserver?.observe(document.body, {
				childList: true,
				subtree: true
			});
		} else {
			resizeObserver?.disconnect();
			mutationObserver?.disconnect();
		}
	}, [element]);
	return rect;
}
function useRectDelta(rect) {
	return getRectDelta(rect, useInitialValue(rect));
}
var defaultValue$1 = [];
function useScrollableAncestors(node) {
	const previousNode = (0, import_react.useRef)(node);
	const ancestors = useLazyMemo((previousValue) => {
		if (!node) return defaultValue$1;
		if (previousValue && previousValue !== defaultValue$1 && node && previousNode.current && node.parentNode === previousNode.current.parentNode) return previousValue;
		return getScrollableAncestors(node);
	}, [node]);
	(0, import_react.useEffect)(() => {
		previousNode.current = node;
	}, [node]);
	return ancestors;
}
function useScrollOffsets(elements) {
	const [scrollCoordinates, setScrollCoordinates] = (0, import_react.useState)(null);
	const prevElements = (0, import_react.useRef)(elements);
	const handleScroll = (0, import_react.useCallback)((event) => {
		const scrollingElement = getScrollableElement(event.target);
		if (!scrollingElement) return;
		setScrollCoordinates((scrollCoordinates) => {
			if (!scrollCoordinates) return null;
			scrollCoordinates.set(scrollingElement, getScrollCoordinates(scrollingElement));
			return new Map(scrollCoordinates);
		});
	}, []);
	(0, import_react.useEffect)(() => {
		const previousElements = prevElements.current;
		if (elements !== previousElements) {
			cleanup(previousElements);
			const entries = elements.map((element) => {
				const scrollableElement = getScrollableElement(element);
				if (scrollableElement) {
					scrollableElement.addEventListener("scroll", handleScroll, { passive: true });
					return [scrollableElement, getScrollCoordinates(scrollableElement)];
				}
				return null;
			}).filter((entry) => entry != null);
			setScrollCoordinates(entries.length ? new Map(entries) : null);
			prevElements.current = elements;
		}
		return () => {
			cleanup(elements);
			cleanup(previousElements);
		};
		function cleanup(elements) {
			elements.forEach((element) => {
				getScrollableElement(element)?.removeEventListener("scroll", handleScroll);
			});
		}
	}, [handleScroll, elements]);
	return (0, import_react.useMemo)(() => {
		if (elements.length) return scrollCoordinates ? Array.from(scrollCoordinates.values()).reduce((acc, coordinates) => add(acc, coordinates), defaultCoordinates) : getScrollOffsets(elements);
		return defaultCoordinates;
	}, [elements, scrollCoordinates]);
}
function useScrollOffsetsDelta(scrollOffsets, dependencies) {
	if (dependencies === void 0) dependencies = [];
	const initialScrollOffsets = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		initialScrollOffsets.current = null;
	}, dependencies);
	(0, import_react.useEffect)(() => {
		const hasScrollOffsets = scrollOffsets !== defaultCoordinates;
		if (hasScrollOffsets && !initialScrollOffsets.current) initialScrollOffsets.current = scrollOffsets;
		if (!hasScrollOffsets && initialScrollOffsets.current) initialScrollOffsets.current = null;
	}, [scrollOffsets]);
	return initialScrollOffsets.current ? subtract(scrollOffsets, initialScrollOffsets.current) : defaultCoordinates;
}
function useSensorSetup(sensors) {
	(0, import_react.useEffect)(() => {
		if (!canUseDOM) return;
		const teardownFns = sensors.map((_ref) => {
			let { sensor } = _ref;
			return sensor.setup == null ? void 0 : sensor.setup();
		});
		return () => {
			for (const teardown of teardownFns) teardown?.();
		};
	}, sensors.map((_ref2) => {
		let { sensor } = _ref2;
		return sensor;
	}));
}
function useSyntheticListeners(listeners, id) {
	return (0, import_react.useMemo)(() => {
		return listeners.reduce((acc, _ref) => {
			let { eventName, handler } = _ref;
			acc[eventName] = (event) => {
				handler(event, id);
			};
			return acc;
		}, {});
	}, [listeners, id]);
}
function useWindowRect(element) {
	return (0, import_react.useMemo)(() => element ? getWindowClientRect(element) : null, [element]);
}
var defaultValue$2 = [];
function useRects(elements, measure) {
	if (measure === void 0) measure = getClientRect;
	const [firstElement] = elements;
	const windowRect = useWindowRect(firstElement ? getWindow(firstElement) : null);
	const [rects, setRects] = (0, import_react.useState)(defaultValue$2);
	function measureRects() {
		setRects(() => {
			if (!elements.length) return defaultValue$2;
			return elements.map((element) => isDocumentScrollingElement(element) ? windowRect : new Rect(measure(element), element));
		});
	}
	const resizeObserver = useResizeObserver({ callback: measureRects });
	useIsomorphicLayoutEffect(() => {
		resizeObserver?.disconnect();
		measureRects();
		elements.forEach((element) => resizeObserver == null ? void 0 : resizeObserver.observe(element));
	}, [elements]);
	return rects;
}
function getMeasurableNode(node) {
	if (!node) return null;
	if (node.children.length > 1) return node;
	const firstChild = node.children[0];
	return isHTMLElement(firstChild) ? firstChild : node;
}
function useDragOverlayMeasuring(_ref) {
	let { measure } = _ref;
	const [rect, setRect] = (0, import_react.useState)(null);
	const resizeObserver = useResizeObserver({ callback: (0, import_react.useCallback)((entries) => {
		for (const { target } of entries) if (isHTMLElement(target)) {
			setRect((rect) => {
				const newRect = measure(target);
				return rect ? {
					...rect,
					width: newRect.width,
					height: newRect.height
				} : newRect;
			});
			break;
		}
	}, [measure]) });
	const [nodeRef, setRef] = useNodeRef((0, import_react.useCallback)((element) => {
		const node = getMeasurableNode(element);
		resizeObserver?.disconnect();
		if (node) resizeObserver?.observe(node);
		setRect(node ? measure(node) : null);
	}, [measure, resizeObserver]));
	return (0, import_react.useMemo)(() => ({
		nodeRef,
		rect,
		setRef
	}), [
		rect,
		nodeRef,
		setRef
	]);
}
var defaultSensors = [{
	sensor: PointerSensor,
	options: {}
}, {
	sensor: KeyboardSensor,
	options: {}
}];
var defaultData = { current: {} };
var defaultMeasuringConfiguration = {
	draggable: { measure: getTransformAgnosticClientRect },
	droppable: {
		measure: getTransformAgnosticClientRect,
		strategy: MeasuringStrategy.WhileDragging,
		frequency: MeasuringFrequency.Optimized
	},
	dragOverlay: { measure: getClientRect }
};
var DroppableContainersMap = class extends Map {
	get(id) {
		var _super$get;
		return id != null ? (_super$get = super.get(id)) != null ? _super$get : void 0 : void 0;
	}
	toArray() {
		return Array.from(this.values());
	}
	getEnabled() {
		return this.toArray().filter((_ref) => {
			let { disabled } = _ref;
			return !disabled;
		});
	}
	getNodeFor(id) {
		var _this$get$node$curren, _this$get;
		return (_this$get$node$curren = (_this$get = this.get(id)) == null ? void 0 : _this$get.node.current) != null ? _this$get$node$curren : void 0;
	}
};
var defaultPublicContext = {
	activatorEvent: null,
	active: null,
	activeNode: null,
	activeNodeRect: null,
	collisions: null,
	containerNodeRect: null,
	draggableNodes: /*#__PURE__*/ new Map(),
	droppableRects: /*#__PURE__*/ new Map(),
	droppableContainers: /*#__PURE__*/ new DroppableContainersMap(),
	over: null,
	dragOverlay: {
		nodeRef: { current: null },
		rect: null,
		setRef: noop$1
	},
	scrollableAncestors: [],
	scrollableAncestorRects: [],
	measuringConfiguration: defaultMeasuringConfiguration,
	measureDroppableContainers: noop$1,
	windowRect: null,
	measuringScheduled: false
};
var defaultInternalContext = {
	activatorEvent: null,
	activators: [],
	active: null,
	activeNodeRect: null,
	ariaDescribedById: { draggable: "" },
	dispatch: noop$1,
	draggableNodes: /*#__PURE__*/ new Map(),
	over: null,
	measureDroppableContainers: noop$1
};
var InternalContext = /*#__PURE__*/ (0, import_react.createContext)(defaultInternalContext);
var PublicContext = /*#__PURE__*/ (0, import_react.createContext)(defaultPublicContext);
function getInitialState() {
	return {
		draggable: {
			active: null,
			initialCoordinates: {
				x: 0,
				y: 0
			},
			nodes: /* @__PURE__ */ new Map(),
			translate: {
				x: 0,
				y: 0
			}
		},
		droppable: { containers: new DroppableContainersMap() }
	};
}
function reducer$4(state, action) {
	switch (action.type) {
		case Action.DragStart: return {
			...state,
			draggable: {
				...state.draggable,
				initialCoordinates: action.initialCoordinates,
				active: action.active
			}
		};
		case Action.DragMove:
			if (state.draggable.active == null) return state;
			return {
				...state,
				draggable: {
					...state.draggable,
					translate: {
						x: action.coordinates.x - state.draggable.initialCoordinates.x,
						y: action.coordinates.y - state.draggable.initialCoordinates.y
					}
				}
			};
		case Action.DragEnd:
		case Action.DragCancel: return {
			...state,
			draggable: {
				...state.draggable,
				active: null,
				initialCoordinates: {
					x: 0,
					y: 0
				},
				translate: {
					x: 0,
					y: 0
				}
			}
		};
		case Action.RegisterDroppable: {
			const { element } = action;
			const { id } = element;
			const containers = new DroppableContainersMap(state.droppable.containers);
			containers.set(id, element);
			return {
				...state,
				droppable: {
					...state.droppable,
					containers
				}
			};
		}
		case Action.SetDroppableDisabled: {
			const { id, key, disabled } = action;
			const element = state.droppable.containers.get(id);
			if (!element || key !== element.key) return state;
			const containers = new DroppableContainersMap(state.droppable.containers);
			containers.set(id, {
				...element,
				disabled
			});
			return {
				...state,
				droppable: {
					...state.droppable,
					containers
				}
			};
		}
		case Action.UnregisterDroppable: {
			const { id, key } = action;
			const element = state.droppable.containers.get(id);
			if (!element || key !== element.key) return state;
			const containers = new DroppableContainersMap(state.droppable.containers);
			containers.delete(id);
			return {
				...state,
				droppable: {
					...state.droppable,
					containers
				}
			};
		}
		default: return state;
	}
}
function RestoreFocus(_ref) {
	let { disabled } = _ref;
	const { active, activatorEvent, draggableNodes } = (0, import_react.useContext)(InternalContext);
	const previousActivatorEvent = usePrevious(activatorEvent);
	const previousActiveId = usePrevious(active == null ? void 0 : active.id);
	(0, import_react.useEffect)(() => {
		if (disabled) return;
		if (!activatorEvent && previousActivatorEvent && previousActiveId != null) {
			if (!isKeyboardEvent(previousActivatorEvent)) return;
			if (document.activeElement === previousActivatorEvent.target) return;
			const draggableNode = draggableNodes.get(previousActiveId);
			if (!draggableNode) return;
			const { activatorNode, node } = draggableNode;
			if (!activatorNode.current && !node.current) return;
			requestAnimationFrame(() => {
				for (const element of [activatorNode.current, node.current]) {
					if (!element) continue;
					const focusableNode = findFirstFocusableNode(element);
					if (focusableNode) {
						focusableNode.focus();
						break;
					}
				}
			});
		}
	}, [
		activatorEvent,
		disabled,
		draggableNodes,
		previousActiveId,
		previousActivatorEvent
	]);
	return null;
}
function applyModifiers(modifiers, _ref) {
	let { transform, ...args } = _ref;
	return modifiers != null && modifiers.length ? modifiers.reduce((accumulator, modifier) => {
		return modifier({
			transform: accumulator,
			...args
		});
	}, transform) : transform;
}
function useMeasuringConfiguration(config) {
	return (0, import_react.useMemo)(() => ({
		draggable: {
			...defaultMeasuringConfiguration.draggable,
			...config == null ? void 0 : config.draggable
		},
		droppable: {
			...defaultMeasuringConfiguration.droppable,
			...config == null ? void 0 : config.droppable
		},
		dragOverlay: {
			...defaultMeasuringConfiguration.dragOverlay,
			...config == null ? void 0 : config.dragOverlay
		}
	}), [
		config == null ? void 0 : config.draggable,
		config == null ? void 0 : config.droppable,
		config == null ? void 0 : config.dragOverlay
	]);
}
function useLayoutShiftScrollCompensation(_ref) {
	let { activeNode, measure, initialRect, config = true } = _ref;
	const initialized = (0, import_react.useRef)(false);
	const { x, y } = typeof config === "boolean" ? {
		x: config,
		y: config
	} : config;
	useIsomorphicLayoutEffect(() => {
		if (!x && !y || !activeNode) {
			initialized.current = false;
			return;
		}
		if (initialized.current || !initialRect) return;
		const node = activeNode == null ? void 0 : activeNode.node.current;
		if (!node || node.isConnected === false) return;
		const rectDelta = getRectDelta(measure(node), initialRect);
		if (!x) rectDelta.x = 0;
		if (!y) rectDelta.y = 0;
		initialized.current = true;
		if (Math.abs(rectDelta.x) > 0 || Math.abs(rectDelta.y) > 0) {
			const firstScrollableAncestor = getFirstScrollableAncestor(node);
			if (firstScrollableAncestor) firstScrollableAncestor.scrollBy({
				top: rectDelta.y,
				left: rectDelta.x
			});
		}
	}, [
		activeNode,
		x,
		y,
		initialRect,
		measure
	]);
}
var ActiveDraggableContext = /*#__PURE__*/ (0, import_react.createContext)({
	...defaultCoordinates,
	scaleX: 1,
	scaleY: 1
});
var Status;
(function(Status) {
	Status[Status["Uninitialized"] = 0] = "Uninitialized";
	Status[Status["Initializing"] = 1] = "Initializing";
	Status[Status["Initialized"] = 2] = "Initialized";
})(Status || (Status = {}));
var DndContext = /*#__PURE__*/ (0, import_react.memo)(function DndContext(_ref) {
	var _sensorContext$curren, _dragOverlay$nodeRef$, _dragOverlay$rect, _over$rect;
	let { id, accessibility, autoScroll = true, children, sensors = defaultSensors, collisionDetection = rectIntersection, measuring, modifiers, ...props } = _ref;
	const [state, dispatch] = (0, import_react.useReducer)(reducer$4, void 0, getInitialState);
	const [dispatchMonitorEvent, registerMonitorListener] = useDndMonitorProvider();
	const [status, setStatus] = (0, import_react.useState)(Status.Uninitialized);
	const isInitialized = status === Status.Initialized;
	const { draggable: { active: activeId, nodes: draggableNodes, translate }, droppable: { containers: droppableContainers } } = state;
	const node = activeId != null ? draggableNodes.get(activeId) : null;
	const activeRects = (0, import_react.useRef)({
		initial: null,
		translated: null
	});
	const active = (0, import_react.useMemo)(() => {
		var _node$data;
		return activeId != null ? {
			id: activeId,
			data: (_node$data = node == null ? void 0 : node.data) != null ? _node$data : defaultData,
			rect: activeRects
		} : null;
	}, [activeId, node]);
	const activeRef = (0, import_react.useRef)(null);
	const [activeSensor, setActiveSensor] = (0, import_react.useState)(null);
	const [activatorEvent, setActivatorEvent] = (0, import_react.useState)(null);
	const latestProps = useLatestValue(props, Object.values(props));
	const draggableDescribedById = useUniqueId("DndDescribedBy", id);
	const enabledDroppableContainers = (0, import_react.useMemo)(() => droppableContainers.getEnabled(), [droppableContainers]);
	const measuringConfiguration = useMeasuringConfiguration(measuring);
	const { droppableRects, measureDroppableContainers, measuringScheduled } = useDroppableMeasuring(enabledDroppableContainers, {
		dragging: isInitialized,
		dependencies: [translate.x, translate.y],
		config: measuringConfiguration.droppable
	});
	const activeNode = useCachedNode(draggableNodes, activeId);
	const activationCoordinates = (0, import_react.useMemo)(() => activatorEvent ? getEventCoordinates(activatorEvent) : null, [activatorEvent]);
	const autoScrollOptions = getAutoScrollerOptions();
	const initialActiveNodeRect = useInitialRect(activeNode, measuringConfiguration.draggable.measure);
	useLayoutShiftScrollCompensation({
		activeNode: activeId != null ? draggableNodes.get(activeId) : null,
		config: autoScrollOptions.layoutShiftCompensation,
		initialRect: initialActiveNodeRect,
		measure: measuringConfiguration.draggable.measure
	});
	const activeNodeRect = useRect(activeNode, measuringConfiguration.draggable.measure, initialActiveNodeRect);
	const containerNodeRect = useRect(activeNode ? activeNode.parentElement : null);
	const sensorContext = (0, import_react.useRef)({
		activatorEvent: null,
		active: null,
		activeNode,
		collisionRect: null,
		collisions: null,
		droppableRects,
		draggableNodes,
		draggingNode: null,
		draggingNodeRect: null,
		droppableContainers,
		over: null,
		scrollableAncestors: [],
		scrollAdjustedTranslate: null
	});
	const overNode = droppableContainers.getNodeFor((_sensorContext$curren = sensorContext.current.over) == null ? void 0 : _sensorContext$curren.id);
	const dragOverlay = useDragOverlayMeasuring({ measure: measuringConfiguration.dragOverlay.measure });
	const draggingNode = (_dragOverlay$nodeRef$ = dragOverlay.nodeRef.current) != null ? _dragOverlay$nodeRef$ : activeNode;
	const draggingNodeRect = isInitialized ? (_dragOverlay$rect = dragOverlay.rect) != null ? _dragOverlay$rect : activeNodeRect : null;
	const usesDragOverlay = Boolean(dragOverlay.nodeRef.current && dragOverlay.rect);
	const nodeRectDelta = useRectDelta(usesDragOverlay ? null : activeNodeRect);
	const windowRect = useWindowRect(draggingNode ? getWindow(draggingNode) : null);
	const scrollableAncestors = useScrollableAncestors(isInitialized ? overNode != null ? overNode : activeNode : null);
	const scrollableAncestorRects = useRects(scrollableAncestors);
	const modifiedTranslate = applyModifiers(modifiers, {
		transform: {
			x: translate.x - nodeRectDelta.x,
			y: translate.y - nodeRectDelta.y,
			scaleX: 1,
			scaleY: 1
		},
		activatorEvent,
		active,
		activeNodeRect,
		containerNodeRect,
		draggingNodeRect,
		over: sensorContext.current.over,
		overlayNodeRect: dragOverlay.rect,
		scrollableAncestors,
		scrollableAncestorRects,
		windowRect
	});
	const pointerCoordinates = activationCoordinates ? add(activationCoordinates, translate) : null;
	const scrollOffsets = useScrollOffsets(scrollableAncestors);
	const scrollAdjustment = useScrollOffsetsDelta(scrollOffsets);
	const activeNodeScrollDelta = useScrollOffsetsDelta(scrollOffsets, [activeNodeRect]);
	const scrollAdjustedTranslate = add(modifiedTranslate, scrollAdjustment);
	const collisionRect = draggingNodeRect ? getAdjustedRect(draggingNodeRect, modifiedTranslate) : null;
	const collisions = active && collisionRect ? collisionDetection({
		active,
		collisionRect,
		droppableRects,
		droppableContainers: enabledDroppableContainers,
		pointerCoordinates
	}) : null;
	const overId = getFirstCollision(collisions, "id");
	const [over, setOver] = (0, import_react.useState)(null);
	const transform = adjustScale(usesDragOverlay ? modifiedTranslate : add(modifiedTranslate, activeNodeScrollDelta), (_over$rect = over == null ? void 0 : over.rect) != null ? _over$rect : null, activeNodeRect);
	const activeSensorRef = (0, import_react.useRef)(null);
	const instantiateSensor = (0, import_react.useCallback)((event, _ref2) => {
		let { sensor: Sensor, options } = _ref2;
		if (activeRef.current == null) return;
		const activeNode = draggableNodes.get(activeRef.current);
		if (!activeNode) return;
		const activatorEvent = event.nativeEvent;
		const sensorInstance = new Sensor({
			active: activeRef.current,
			activeNode,
			event: activatorEvent,
			options,
			context: sensorContext,
			onAbort(id) {
				if (!draggableNodes.get(id)) return;
				const { onDragAbort } = latestProps.current;
				const event = { id };
				onDragAbort?.(event);
				dispatchMonitorEvent({
					type: "onDragAbort",
					event
				});
			},
			onPending(id, constraint, initialCoordinates, offset) {
				if (!draggableNodes.get(id)) return;
				const { onDragPending } = latestProps.current;
				const event = {
					id,
					constraint,
					initialCoordinates,
					offset
				};
				onDragPending?.(event);
				dispatchMonitorEvent({
					type: "onDragPending",
					event
				});
			},
			onStart(initialCoordinates) {
				const id = activeRef.current;
				if (id == null) return;
				const draggableNode = draggableNodes.get(id);
				if (!draggableNode) return;
				const { onDragStart } = latestProps.current;
				const event = {
					activatorEvent,
					active: {
						id,
						data: draggableNode.data,
						rect: activeRects
					}
				};
				(0, import_react_dom.unstable_batchedUpdates)(() => {
					onDragStart?.(event);
					setStatus(Status.Initializing);
					dispatch({
						type: Action.DragStart,
						initialCoordinates,
						active: id
					});
					dispatchMonitorEvent({
						type: "onDragStart",
						event
					});
					setActiveSensor(activeSensorRef.current);
					setActivatorEvent(activatorEvent);
				});
			},
			onMove(coordinates) {
				dispatch({
					type: Action.DragMove,
					coordinates
				});
			},
			onEnd: createHandler(Action.DragEnd),
			onCancel: createHandler(Action.DragCancel)
		});
		activeSensorRef.current = sensorInstance;
		function createHandler(type) {
			return async function handler() {
				const { active, collisions, over, scrollAdjustedTranslate } = sensorContext.current;
				let event = null;
				if (active && scrollAdjustedTranslate) {
					const { cancelDrop } = latestProps.current;
					event = {
						activatorEvent,
						active,
						collisions,
						delta: scrollAdjustedTranslate,
						over
					};
					if (type === Action.DragEnd && typeof cancelDrop === "function") {
						if (await Promise.resolve(cancelDrop(event))) type = Action.DragCancel;
					}
				}
				activeRef.current = null;
				(0, import_react_dom.unstable_batchedUpdates)(() => {
					dispatch({ type });
					setStatus(Status.Uninitialized);
					setOver(null);
					setActiveSensor(null);
					setActivatorEvent(null);
					activeSensorRef.current = null;
					const eventName = type === Action.DragEnd ? "onDragEnd" : "onDragCancel";
					if (event) {
						const handler = latestProps.current[eventName];
						handler?.(event);
						dispatchMonitorEvent({
							type: eventName,
							event
						});
					}
				});
			};
		}
	}, [draggableNodes]);
	const activators = useCombineActivators(sensors, (0, import_react.useCallback)((handler, sensor) => {
		return (event, active) => {
			const nativeEvent = event.nativeEvent;
			const activeDraggableNode = draggableNodes.get(active);
			if (activeRef.current !== null || !activeDraggableNode || nativeEvent.dndKit || nativeEvent.defaultPrevented) return;
			const activationContext = { active: activeDraggableNode };
			if (handler(event, sensor.options, activationContext) === true) {
				nativeEvent.dndKit = { capturedBy: sensor.sensor };
				activeRef.current = active;
				instantiateSensor(event, sensor);
			}
		};
	}, [draggableNodes, instantiateSensor]));
	useSensorSetup(sensors);
	useIsomorphicLayoutEffect(() => {
		if (activeNodeRect && status === Status.Initializing) setStatus(Status.Initialized);
	}, [activeNodeRect, status]);
	(0, import_react.useEffect)(() => {
		const { onDragMove } = latestProps.current;
		const { active, activatorEvent, collisions, over } = sensorContext.current;
		if (!active || !activatorEvent) return;
		const event = {
			active,
			activatorEvent,
			collisions,
			delta: {
				x: scrollAdjustedTranslate.x,
				y: scrollAdjustedTranslate.y
			},
			over
		};
		(0, import_react_dom.unstable_batchedUpdates)(() => {
			onDragMove?.(event);
			dispatchMonitorEvent({
				type: "onDragMove",
				event
			});
		});
	}, [scrollAdjustedTranslate.x, scrollAdjustedTranslate.y]);
	(0, import_react.useEffect)(() => {
		const { active, activatorEvent, collisions, droppableContainers, scrollAdjustedTranslate } = sensorContext.current;
		if (!active || activeRef.current == null || !activatorEvent || !scrollAdjustedTranslate) return;
		const { onDragOver } = latestProps.current;
		const overContainer = droppableContainers.get(overId);
		const over = overContainer && overContainer.rect.current ? {
			id: overContainer.id,
			rect: overContainer.rect.current,
			data: overContainer.data,
			disabled: overContainer.disabled
		} : null;
		const event = {
			active,
			activatorEvent,
			collisions,
			delta: {
				x: scrollAdjustedTranslate.x,
				y: scrollAdjustedTranslate.y
			},
			over
		};
		(0, import_react_dom.unstable_batchedUpdates)(() => {
			setOver(over);
			onDragOver?.(event);
			dispatchMonitorEvent({
				type: "onDragOver",
				event
			});
		});
	}, [overId]);
	useIsomorphicLayoutEffect(() => {
		sensorContext.current = {
			activatorEvent,
			active,
			activeNode,
			collisionRect,
			collisions,
			droppableRects,
			draggableNodes,
			draggingNode,
			draggingNodeRect,
			droppableContainers,
			over,
			scrollableAncestors,
			scrollAdjustedTranslate
		};
		activeRects.current = {
			initial: draggingNodeRect,
			translated: collisionRect
		};
	}, [
		active,
		activeNode,
		collisions,
		collisionRect,
		draggableNodes,
		draggingNode,
		draggingNodeRect,
		droppableRects,
		droppableContainers,
		over,
		scrollableAncestors,
		scrollAdjustedTranslate
	]);
	useAutoScroller({
		...autoScrollOptions,
		delta: translate,
		draggingRect: collisionRect,
		pointerCoordinates,
		scrollableAncestors,
		scrollableAncestorRects
	});
	const publicContext = (0, import_react.useMemo)(() => {
		return {
			active,
			activeNode,
			activeNodeRect,
			activatorEvent,
			collisions,
			containerNodeRect,
			dragOverlay,
			draggableNodes,
			droppableContainers,
			droppableRects,
			over,
			measureDroppableContainers,
			scrollableAncestors,
			scrollableAncestorRects,
			measuringConfiguration,
			measuringScheduled,
			windowRect
		};
	}, [
		active,
		activeNode,
		activeNodeRect,
		activatorEvent,
		collisions,
		containerNodeRect,
		dragOverlay,
		draggableNodes,
		droppableContainers,
		droppableRects,
		over,
		measureDroppableContainers,
		scrollableAncestors,
		scrollableAncestorRects,
		measuringConfiguration,
		measuringScheduled,
		windowRect
	]);
	const internalContext = (0, import_react.useMemo)(() => {
		return {
			activatorEvent,
			activators,
			active,
			activeNodeRect,
			ariaDescribedById: { draggable: draggableDescribedById },
			dispatch,
			draggableNodes,
			over,
			measureDroppableContainers
		};
	}, [
		activatorEvent,
		activators,
		active,
		activeNodeRect,
		dispatch,
		draggableDescribedById,
		draggableNodes,
		over,
		measureDroppableContainers
	]);
	return import_react.createElement(DndMonitorContext.Provider, { value: registerMonitorListener }, import_react.createElement(InternalContext.Provider, { value: internalContext }, import_react.createElement(PublicContext.Provider, { value: publicContext }, import_react.createElement(ActiveDraggableContext.Provider, { value: transform }, children)), import_react.createElement(RestoreFocus, { disabled: (accessibility == null ? void 0 : accessibility.restoreFocus) === false })), import_react.createElement(Accessibility, {
		...accessibility,
		hiddenTextDescribedById: draggableDescribedById
	}));
	function getAutoScrollerOptions() {
		const activeSensorDisablesAutoscroll = (activeSensor == null ? void 0 : activeSensor.autoScrollEnabled) === false;
		const autoScrollGloballyDisabled = typeof autoScroll === "object" ? autoScroll.enabled === false : autoScroll === false;
		const enabled = isInitialized && !activeSensorDisablesAutoscroll && !autoScrollGloballyDisabled;
		if (typeof autoScroll === "object") return {
			...autoScroll,
			enabled
		};
		return { enabled };
	}
});
var NullContext = /*#__PURE__*/ (0, import_react.createContext)(null);
var defaultRole = "button";
var ID_PREFIX = "Draggable";
function useDraggable(_ref) {
	let { id, data, disabled = false, attributes } = _ref;
	const key = useUniqueId(ID_PREFIX);
	const { activators, activatorEvent, active, activeNodeRect, ariaDescribedById, draggableNodes, over } = (0, import_react.useContext)(InternalContext);
	const { role = defaultRole, roleDescription = "draggable", tabIndex = 0 } = attributes != null ? attributes : {};
	const isDragging = (active == null ? void 0 : active.id) === id;
	const transform = (0, import_react.useContext)(isDragging ? ActiveDraggableContext : NullContext);
	const [node, setNodeRef] = useNodeRef();
	const [activatorNode, setActivatorNodeRef] = useNodeRef();
	const listeners = useSyntheticListeners(activators, id);
	const dataRef = useLatestValue(data);
	useIsomorphicLayoutEffect(() => {
		draggableNodes.set(id, {
			id,
			key,
			node,
			activatorNode,
			data: dataRef
		});
		return () => {
			const node = draggableNodes.get(id);
			if (node && node.key === key) draggableNodes.delete(id);
		};
	}, [draggableNodes, id]);
	return {
		active,
		activatorEvent,
		activeNodeRect,
		attributes: (0, import_react.useMemo)(() => ({
			role,
			tabIndex,
			"aria-disabled": disabled,
			"aria-pressed": isDragging && role === defaultRole ? true : void 0,
			"aria-roledescription": roleDescription,
			"aria-describedby": ariaDescribedById.draggable
		}), [
			disabled,
			role,
			tabIndex,
			isDragging,
			roleDescription,
			ariaDescribedById.draggable
		]),
		isDragging,
		listeners: disabled ? void 0 : listeners,
		node,
		over,
		setNodeRef,
		setActivatorNodeRef,
		transform
	};
}
function useDndContext() {
	return (0, import_react.useContext)(PublicContext);
}
var ID_PREFIX$1 = "Droppable";
var defaultResizeObserverConfig = { timeout: 25 };
function useDroppable(_ref) {
	let { data, disabled = false, id, resizeObserverConfig } = _ref;
	const key = useUniqueId(ID_PREFIX$1);
	const { active, dispatch, over, measureDroppableContainers } = (0, import_react.useContext)(InternalContext);
	const previous = (0, import_react.useRef)({ disabled });
	const resizeObserverConnected = (0, import_react.useRef)(false);
	const rect = (0, import_react.useRef)(null);
	const callbackId = (0, import_react.useRef)(null);
	const { disabled: resizeObserverDisabled, updateMeasurementsFor, timeout: resizeObserverTimeout } = {
		...defaultResizeObserverConfig,
		...resizeObserverConfig
	};
	const ids = useLatestValue(updateMeasurementsFor != null ? updateMeasurementsFor : id);
	const resizeObserver = useResizeObserver({
		callback: (0, import_react.useCallback)(() => {
			if (!resizeObserverConnected.current) {
				resizeObserverConnected.current = true;
				return;
			}
			if (callbackId.current != null) clearTimeout(callbackId.current);
			callbackId.current = setTimeout(() => {
				measureDroppableContainers(Array.isArray(ids.current) ? ids.current : [ids.current]);
				callbackId.current = null;
			}, resizeObserverTimeout);
		}, [resizeObserverTimeout]),
		disabled: resizeObserverDisabled || !active
	});
	const [nodeRef, setNodeRef] = useNodeRef((0, import_react.useCallback)((newElement, previousElement) => {
		if (!resizeObserver) return;
		if (previousElement) {
			resizeObserver.unobserve(previousElement);
			resizeObserverConnected.current = false;
		}
		if (newElement) resizeObserver.observe(newElement);
	}, [resizeObserver]));
	const dataRef = useLatestValue(data);
	(0, import_react.useEffect)(() => {
		if (!resizeObserver || !nodeRef.current) return;
		resizeObserver.disconnect();
		resizeObserverConnected.current = false;
		resizeObserver.observe(nodeRef.current);
	}, [nodeRef, resizeObserver]);
	(0, import_react.useEffect)(() => {
		dispatch({
			type: Action.RegisterDroppable,
			element: {
				id,
				key,
				disabled,
				node: nodeRef,
				rect,
				data: dataRef
			}
		});
		return () => dispatch({
			type: Action.UnregisterDroppable,
			key,
			id
		});
	}, [id]);
	(0, import_react.useEffect)(() => {
		if (disabled !== previous.current.disabled) {
			dispatch({
				type: Action.SetDroppableDisabled,
				id,
				key,
				disabled
			});
			previous.current.disabled = disabled;
		}
	}, [
		id,
		key,
		disabled,
		dispatch
	]);
	return {
		active,
		rect,
		isOver: (over == null ? void 0 : over.id) === id,
		node: nodeRef,
		over,
		setNodeRef
	};
}
function AnimationManager(_ref) {
	let { animation, children } = _ref;
	const [clonedChildren, setClonedChildren] = (0, import_react.useState)(null);
	const [element, setElement] = (0, import_react.useState)(null);
	const previousChildren = usePrevious(children);
	if (!children && !clonedChildren && previousChildren) setClonedChildren(previousChildren);
	useIsomorphicLayoutEffect(() => {
		if (!element) return;
		const key = clonedChildren == null ? void 0 : clonedChildren.key;
		const id = clonedChildren == null ? void 0 : clonedChildren.props.id;
		if (key == null || id == null) {
			setClonedChildren(null);
			return;
		}
		Promise.resolve(animation(id, element)).then(() => {
			setClonedChildren(null);
		});
	}, [
		animation,
		clonedChildren,
		element
	]);
	return import_react.createElement(import_react.Fragment, null, children, clonedChildren ? (0, import_react.cloneElement)(clonedChildren, { ref: setElement }) : null);
}
var defaultTransform = {
	x: 0,
	y: 0,
	scaleX: 1,
	scaleY: 1
};
function NullifiedContextProvider(_ref) {
	let { children } = _ref;
	return import_react.createElement(InternalContext.Provider, { value: defaultInternalContext }, import_react.createElement(ActiveDraggableContext.Provider, { value: defaultTransform }, children));
}
var baseStyles = {
	position: "fixed",
	touchAction: "none"
};
var defaultTransition = (activatorEvent) => {
	return isKeyboardEvent(activatorEvent) ? "transform 250ms ease" : void 0;
};
var PositionedOverlay = /*#__PURE__*/ (0, import_react.forwardRef)((_ref, ref) => {
	let { as, activatorEvent, adjustScale, children, className, rect, style, transform, transition = defaultTransition } = _ref;
	if (!rect) return null;
	const scaleAdjustedTransform = adjustScale ? transform : {
		...transform,
		scaleX: 1,
		scaleY: 1
	};
	const styles = {
		...baseStyles,
		width: rect.width,
		height: rect.height,
		top: rect.top,
		left: rect.left,
		transform: CSS.Transform.toString(scaleAdjustedTransform),
		transformOrigin: adjustScale && activatorEvent ? getRelativeTransformOrigin(activatorEvent, rect) : void 0,
		transition: typeof transition === "function" ? transition(activatorEvent) : transition,
		...style
	};
	return import_react.createElement(as, {
		className,
		style: styles,
		ref
	}, children);
});
var defaultDropAnimationSideEffects = (options) => (_ref) => {
	let { active, dragOverlay } = _ref;
	const originalStyles = {};
	const { styles, className } = options;
	if (styles != null && styles.active) for (const [key, value] of Object.entries(styles.active)) {
		if (value === void 0) continue;
		originalStyles[key] = active.node.style.getPropertyValue(key);
		active.node.style.setProperty(key, value);
	}
	if (styles != null && styles.dragOverlay) for (const [key, value] of Object.entries(styles.dragOverlay)) {
		if (value === void 0) continue;
		dragOverlay.node.style.setProperty(key, value);
	}
	if (className != null && className.active) active.node.classList.add(className.active);
	if (className != null && className.dragOverlay) dragOverlay.node.classList.add(className.dragOverlay);
	return function cleanup() {
		for (const [key, value] of Object.entries(originalStyles)) active.node.style.setProperty(key, value);
		if (className != null && className.active) active.node.classList.remove(className.active);
	};
};
var defaultKeyframeResolver = (_ref2) => {
	let { transform: { initial, final } } = _ref2;
	return [{ transform: CSS.Transform.toString(initial) }, { transform: CSS.Transform.toString(final) }];
};
var defaultDropAnimationConfiguration = {
	duration: 250,
	easing: "ease",
	keyframes: defaultKeyframeResolver,
	sideEffects: /*#__PURE__*/ defaultDropAnimationSideEffects({ styles: { active: { opacity: "0" } } })
};
function useDropAnimation(_ref3) {
	let { config, draggableNodes, droppableContainers, measuringConfiguration } = _ref3;
	return useEvent((id, node) => {
		if (config === null) return;
		const activeDraggable = draggableNodes.get(id);
		if (!activeDraggable) return;
		const activeNode = activeDraggable.node.current;
		if (!activeNode) return;
		const measurableNode = getMeasurableNode(node);
		if (!measurableNode) return;
		const { transform } = getWindow(node).getComputedStyle(node);
		const parsedTransform = parseTransform(transform);
		if (!parsedTransform) return;
		const animation = typeof config === "function" ? config : createDefaultDropAnimation(config);
		scrollIntoViewIfNeeded(activeNode, measuringConfiguration.draggable.measure);
		return animation({
			active: {
				id,
				data: activeDraggable.data,
				node: activeNode,
				rect: measuringConfiguration.draggable.measure(activeNode)
			},
			draggableNodes,
			dragOverlay: {
				node,
				rect: measuringConfiguration.dragOverlay.measure(measurableNode)
			},
			droppableContainers,
			measuringConfiguration,
			transform: parsedTransform
		});
	});
}
function createDefaultDropAnimation(options) {
	const { duration, easing, sideEffects, keyframes } = {
		...defaultDropAnimationConfiguration,
		...options
	};
	return (_ref4) => {
		let { active, dragOverlay, transform, ...rest } = _ref4;
		if (!duration) return;
		const delta = {
			x: dragOverlay.rect.left - active.rect.left,
			y: dragOverlay.rect.top - active.rect.top
		};
		const scale = {
			scaleX: transform.scaleX !== 1 ? active.rect.width * transform.scaleX / dragOverlay.rect.width : 1,
			scaleY: transform.scaleY !== 1 ? active.rect.height * transform.scaleY / dragOverlay.rect.height : 1
		};
		const finalTransform = {
			x: transform.x - delta.x,
			y: transform.y - delta.y,
			...scale
		};
		const animationKeyframes = keyframes({
			...rest,
			active,
			dragOverlay,
			transform: {
				initial: transform,
				final: finalTransform
			}
		});
		const [firstKeyframe] = animationKeyframes;
		const lastKeyframe = animationKeyframes[animationKeyframes.length - 1];
		if (JSON.stringify(firstKeyframe) === JSON.stringify(lastKeyframe)) return;
		const cleanup = sideEffects == null ? void 0 : sideEffects({
			active,
			dragOverlay,
			...rest
		});
		const animation = dragOverlay.node.animate(animationKeyframes, {
			duration,
			easing,
			fill: "forwards"
		});
		return new Promise((resolve) => {
			animation.onfinish = () => {
				cleanup?.();
				resolve();
			};
		});
	};
}
var key = 0;
function useKey(id) {
	return (0, import_react.useMemo)(() => {
		if (id == null) return;
		key++;
		return key;
	}, [id]);
}
var DragOverlay = /*#__PURE__*/ import_react.memo((_ref) => {
	let { adjustScale = false, children, dropAnimation: dropAnimationConfig, style, transition, modifiers, wrapperElement = "div", className, zIndex = 999 } = _ref;
	const { activatorEvent, active, activeNodeRect, containerNodeRect, draggableNodes, droppableContainers, dragOverlay, over, measuringConfiguration, scrollableAncestors, scrollableAncestorRects, windowRect } = useDndContext();
	const transform = (0, import_react.useContext)(ActiveDraggableContext);
	const key = useKey(active == null ? void 0 : active.id);
	const modifiedTransform = applyModifiers(modifiers, {
		activatorEvent,
		active,
		activeNodeRect,
		containerNodeRect,
		draggingNodeRect: dragOverlay.rect,
		over,
		overlayNodeRect: dragOverlay.rect,
		scrollableAncestors,
		scrollableAncestorRects,
		transform,
		windowRect
	});
	const initialRect = useInitialValue(activeNodeRect);
	const dropAnimation = useDropAnimation({
		config: dropAnimationConfig,
		draggableNodes,
		droppableContainers,
		measuringConfiguration
	});
	const ref = initialRect ? dragOverlay.setRef : void 0;
	return import_react.createElement(NullifiedContextProvider, null, import_react.createElement(AnimationManager, { animation: dropAnimation }, active && key ? import_react.createElement(PositionedOverlay, {
		key,
		id: active.id,
		ref,
		as: wrapperElement,
		activatorEvent,
		adjustScale,
		className,
		transition,
		rect: initialRect,
		style: {
			zIndex,
			...style
		},
		transform: modifiedTransform
	}, children) : null));
});
//#endregion
//#region node_modules/.pnpm/sonner@1.7.4_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/sonner/dist/index.mjs
var jt = (n) => {
	switch (n) {
		case "success": return ee;
		case "info": return ae;
		case "warning": return oe;
		case "error": return se;
		default: return null;
	}
};
var te = Array(12).fill(0);
var Yt = ({ visible: n, className: e }) => import_react.createElement("div", {
	className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "),
	"data-visible": n
}, import_react.createElement("div", { className: "sonner-spinner" }, te.map((t, a) => import_react.createElement("div", {
	className: "sonner-loading-bar",
	key: `spinner-bar-${a}`
}))));
var ee = import_react.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
}, import_react.createElement("path", {
	fillRule: "evenodd",
	d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
	clipRule: "evenodd"
}));
var oe = import_react.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	height: "20",
	width: "20"
}, import_react.createElement("path", {
	fillRule: "evenodd",
	d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
	clipRule: "evenodd"
}));
var ae = import_react.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
}, import_react.createElement("path", {
	fillRule: "evenodd",
	d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
	clipRule: "evenodd"
}));
var se = import_react.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
}, import_react.createElement("path", {
	fillRule: "evenodd",
	d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
	clipRule: "evenodd"
}));
var Ot = import_react.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: "12",
	height: "12",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, import_react.createElement("line", {
	x1: "18",
	y1: "6",
	x2: "6",
	y2: "18"
}), import_react.createElement("line", {
	x1: "6",
	y1: "6",
	x2: "18",
	y2: "18"
}));
var Ft = () => {
	let [n, e] = import_react.useState(document.hidden);
	return import_react.useEffect(() => {
		let t = () => {
			e(document.hidden);
		};
		return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
	}, []), n;
};
var bt = 1;
var yt = class {
	constructor() {
		this.subscribe = (e) => (this.subscribers.push(e), () => {
			let t = this.subscribers.indexOf(e);
			this.subscribers.splice(t, 1);
		});
		this.publish = (e) => {
			this.subscribers.forEach((t) => t(e));
		};
		this.addToast = (e) => {
			this.publish(e), this.toasts = [...this.toasts, e];
		};
		this.create = (e) => {
			var S;
			let { message: t, ...a } = e, u = typeof (e == null ? void 0 : e.id) == "number" || ((S = e.id) == null ? void 0 : S.length) > 0 ? e.id : bt++, f = this.toasts.find((g) => g.id === u), w = e.dismissible === void 0 ? !0 : e.dismissible;
			return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u), f ? this.toasts = this.toasts.map((g) => g.id === u ? (this.publish({
				...g,
				...e,
				id: u,
				title: t
			}), {
				...g,
				...e,
				id: u,
				dismissible: w,
				title: t
			}) : g) : this.addToast({
				title: t,
				...a,
				dismissible: w,
				id: u
			}), u;
		};
		this.dismiss = (e) => (this.dismissedToasts.add(e), e || this.toasts.forEach((t) => {
			this.subscribers.forEach((a) => a({
				id: t.id,
				dismiss: !0
			}));
		}), this.subscribers.forEach((t) => t({
			id: e,
			dismiss: !0
		})), e);
		this.message = (e, t) => this.create({
			...t,
			message: e
		});
		this.error = (e, t) => this.create({
			...t,
			message: e,
			type: "error"
		});
		this.success = (e, t) => this.create({
			...t,
			type: "success",
			message: e
		});
		this.info = (e, t) => this.create({
			...t,
			type: "info",
			message: e
		});
		this.warning = (e, t) => this.create({
			...t,
			type: "warning",
			message: e
		});
		this.loading = (e, t) => this.create({
			...t,
			type: "loading",
			message: e
		});
		this.promise = (e, t) => {
			if (!t) return;
			let a;
			t.loading !== void 0 && (a = this.create({
				...t,
				promise: e,
				type: "loading",
				message: t.loading,
				description: typeof t.description != "function" ? t.description : void 0
			}));
			let u = e instanceof Promise ? e : e(), f = a !== void 0, w, S = u.then(async (i) => {
				if (w = ["resolve", i], import_react.isValidElement(i)) f = !1, this.create({
					id: a,
					type: "default",
					message: i
				});
				else if (ie(i) && !i.ok) {
					f = !1;
					let T = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error, F = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
					this.create({
						id: a,
						type: "error",
						message: T,
						description: F
					});
				} else if (t.success !== void 0) {
					f = !1;
					let T = typeof t.success == "function" ? await t.success(i) : t.success, F = typeof t.description == "function" ? await t.description(i) : t.description;
					this.create({
						id: a,
						type: "success",
						message: T,
						description: F
					});
				}
			}).catch(async (i) => {
				if (w = ["reject", i], t.error !== void 0) {
					f = !1;
					let D = typeof t.error == "function" ? await t.error(i) : t.error, T = typeof t.description == "function" ? await t.description(i) : t.description;
					this.create({
						id: a,
						type: "error",
						message: D,
						description: T
					});
				}
			}).finally(() => {
				var i;
				f && (this.dismiss(a), a = void 0), (i = t.finally) == null || i.call(t);
			}), g = () => new Promise((i, D) => S.then(() => w[0] === "reject" ? D(w[1]) : i(w[1])).catch(D));
			return typeof a != "string" && typeof a != "number" ? { unwrap: g } : Object.assign(a, { unwrap: g });
		};
		this.custom = (e, t) => {
			let a = (t == null ? void 0 : t.id) || bt++;
			return this.create({
				jsx: e(a),
				id: a,
				...t
			}), a;
		};
		this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id));
		this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
	}
};
var v = new yt();
var ne = (n, e) => {
	let t = (e == null ? void 0 : e.id) || bt++;
	return v.addToast({
		title: n,
		...e,
		id: t
	}), t;
};
var ie = (n) => n && typeof n == "object" && "ok" in n && typeof n.ok == "boolean" && "status" in n && typeof n.status == "number";
var le = ne;
var ce = () => v.toasts;
var de = () => v.getActiveToasts();
var ue = Object.assign(le, {
	success: v.success,
	info: v.info,
	warning: v.warning,
	error: v.error,
	custom: v.custom,
	message: v.message,
	promise: v.promise,
	dismiss: v.dismiss,
	loading: v.loading
}, {
	getHistory: ce,
	getToasts: de
});
function wt(n, { insertAt: e } = {}) {
	if (!n || typeof document == "undefined") return;
	let t = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
	a.type = "text/css", e === "top" && t.firstChild ? t.insertBefore(a, t.firstChild) : t.appendChild(a), a.styleSheet ? a.styleSheet.cssText = n : a.appendChild(document.createTextNode(n));
}
wt(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function tt(n) {
	return n.label !== void 0;
}
var pe = 3;
var me = "32px";
var ge = "16px";
var Wt = 4e3;
var he = 356;
var be = 14;
var ye = 20;
var we = 200;
function M(...n) {
	return n.filter(Boolean).join(" ");
}
function xe(n) {
	let [e, t] = n.split("-"), a = [];
	return e && a.push(e), t && a.push(t), a;
}
var ve = (n) => {
	var Dt, Pt, Nt, Bt, Ct, kt, It, Mt, Ht, At, Lt;
	let { invert: e, toast: t, unstyled: a, interacting: u, setHeights: f, visibleToasts: w, heights: S, index: g, toasts: i, expanded: D, removeToast: T, defaultRichColors: F, closeButton: et, style: ut, cancelButtonStyle: ft, actionButtonStyle: l, className: ot = "", descriptionClassName: at = "", duration: X, position: st, gap: pt, loadingIcon: rt, expandByDefault: B, classNames: s, icons: P, closeButtonAriaLabel: nt = "Close toast", pauseWhenPageIsHidden: it } = n, [Y, C] = import_react.useState(null), [lt, J] = import_react.useState(null), [W, H] = import_react.useState(!1), [A, mt] = import_react.useState(!1), [L, z] = import_react.useState(!1), [ct, d] = import_react.useState(!1), [h, y] = import_react.useState(!1), [R, j] = import_react.useState(0), [p, _] = import_react.useState(0), O = import_react.useRef(t.duration || X || Wt), G = import_react.useRef(null), k = import_react.useRef(null), Vt = g === 0, Ut = g + 1 <= w, N = t.type, V = t.dismissible !== !1, Kt = t.className || "", Xt = t.descriptionClassName || "", dt = import_react.useMemo(() => S.findIndex((r) => r.toastId === t.id) || 0, [S, t.id]), Jt = import_react.useMemo(() => {
		var r;
		return (r = t.closeButton) != null ? r : et;
	}, [t.closeButton, et]), Tt = import_react.useMemo(() => t.duration || X || Wt, [t.duration, X]), gt = import_react.useRef(0), U = import_react.useRef(0), St = import_react.useRef(0), K = import_react.useRef(null), [Gt, Qt] = st.split("-"), Rt = import_react.useMemo(() => S.reduce((r, m, c) => c >= dt ? r : r + m.height, 0), [S, dt]), Et = Ft(), qt = t.invert || e, ht = N === "loading";
	U.current = import_react.useMemo(() => dt * pt + Rt, [dt, Rt]), import_react.useEffect(() => {
		O.current = Tt;
	}, [Tt]), import_react.useEffect(() => {
		H(!0);
	}, []), import_react.useEffect(() => {
		let r = k.current;
		if (r) {
			let m = r.getBoundingClientRect().height;
			return _(m), f((c) => [{
				toastId: t.id,
				height: m,
				position: t.position
			}, ...c]), () => f((c) => c.filter((b) => b.toastId !== t.id));
		}
	}, [f, t.id]), import_react.useLayoutEffect(() => {
		if (!W) return;
		let r = k.current, m = r.style.height;
		r.style.height = "auto";
		let c = r.getBoundingClientRect().height;
		r.style.height = m, _(c), f((b) => b.find((x) => x.toastId === t.id) ? b.map((x) => x.toastId === t.id ? {
			...x,
			height: c
		} : x) : [{
			toastId: t.id,
			height: c,
			position: t.position
		}, ...b]);
	}, [
		W,
		t.title,
		t.description,
		f,
		t.id
	]);
	let $ = import_react.useCallback(() => {
		mt(!0), j(U.current), f((r) => r.filter((m) => m.toastId !== t.id)), setTimeout(() => {
			T(t);
		}, we);
	}, [
		t,
		T,
		f,
		U
	]);
	import_react.useEffect(() => {
		if (t.promise && N === "loading" || t.duration === Infinity || t.type === "loading") return;
		let r;
		return D || u || it && Et ? (() => {
			if (St.current < gt.current) {
				let b = (/* @__PURE__ */ new Date()).getTime() - gt.current;
				O.current = O.current - b;
			}
			St.current = (/* @__PURE__ */ new Date()).getTime();
		})() : (() => {
			O.current !== Infinity && (gt.current = (/* @__PURE__ */ new Date()).getTime(), r = setTimeout(() => {
				var b;
				(b = t.onAutoClose) == null || b.call(t, t), $();
			}, O.current));
		})(), () => clearTimeout(r);
	}, [
		D,
		u,
		t,
		N,
		it,
		Et,
		$
	]), import_react.useEffect(() => {
		t.delete && $();
	}, [$, t.delete]);
	function Zt() {
		var r, m, c;
		return P != null && P.loading ? import_react.createElement("div", {
			className: M(s == null ? void 0 : s.loader, (r = t == null ? void 0 : t.classNames) == null ? void 0 : r.loader, "sonner-loader"),
			"data-visible": N === "loading"
		}, P.loading) : rt ? import_react.createElement("div", {
			className: M(s == null ? void 0 : s.loader, (m = t == null ? void 0 : t.classNames) == null ? void 0 : m.loader, "sonner-loader"),
			"data-visible": N === "loading"
		}, rt) : import_react.createElement(Yt, {
			className: M(s == null ? void 0 : s.loader, (c = t == null ? void 0 : t.classNames) == null ? void 0 : c.loader),
			visible: N === "loading"
		});
	}
	return import_react.createElement("li", {
		tabIndex: 0,
		ref: k,
		className: M(ot, Kt, s == null ? void 0 : s.toast, (Dt = t == null ? void 0 : t.classNames) == null ? void 0 : Dt.toast, s == null ? void 0 : s.default, s == null ? void 0 : s[N], (Pt = t == null ? void 0 : t.classNames) == null ? void 0 : Pt[N]),
		"data-sonner-toast": "",
		"data-rich-colors": (Nt = t.richColors) != null ? Nt : F,
		"data-styled": !(t.jsx || t.unstyled || a),
		"data-mounted": W,
		"data-promise": !!t.promise,
		"data-swiped": h,
		"data-removed": A,
		"data-visible": Ut,
		"data-y-position": Gt,
		"data-x-position": Qt,
		"data-index": g,
		"data-front": Vt,
		"data-swiping": L,
		"data-dismissible": V,
		"data-type": N,
		"data-invert": qt,
		"data-swipe-out": ct,
		"data-swipe-direction": lt,
		"data-expanded": !!(D || B && W),
		style: {
			"--index": g,
			"--toasts-before": g,
			"--z-index": i.length - g,
			"--offset": `${A ? R : U.current}px`,
			"--initial-height": B ? "auto" : `${p}px`,
			...ut,
			...t.style
		},
		onDragEnd: () => {
			z(!1), C(null), K.current = null;
		},
		onPointerDown: (r) => {
			ht || !V || (G.current = /* @__PURE__ */ new Date(), j(U.current), r.target.setPointerCapture(r.pointerId), r.target.tagName !== "BUTTON" && (z(!0), K.current = {
				x: r.clientX,
				y: r.clientY
			}));
		},
		onPointerUp: () => {
			var x, Q, q, Z;
			if (ct || !V) return;
			K.current = null;
			let r = Number(((x = k.current) == null ? void 0 : x.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), m = Number(((Q = k.current) == null ? void 0 : Q.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), c = (/* @__PURE__ */ new Date()).getTime() - ((q = G.current) == null ? void 0 : q.getTime()), b = Y === "x" ? r : m, I = Math.abs(b) / c;
			if (Math.abs(b) >= ye || I > .11) {
				j(U.current), (Z = t.onDismiss) == null || Z.call(t, t), J(Y === "x" ? r > 0 ? "right" : "left" : m > 0 ? "down" : "up"), $(), d(!0), y(!1);
				return;
			}
			z(!1), C(null);
		},
		onPointerMove: (r) => {
			var Q, q, Z, zt;
			if (!K.current || !V || ((Q = window.getSelection()) == null ? void 0 : Q.toString().length) > 0) return;
			let c = r.clientY - K.current.y, b = r.clientX - K.current.x, I = (q = n.swipeDirections) != null ? q : xe(st);
			!Y && (Math.abs(b) > 1 || Math.abs(c) > 1) && C(Math.abs(b) > Math.abs(c) ? "x" : "y");
			let x = {
				x: 0,
				y: 0
			};
			Y === "y" ? (I.includes("top") || I.includes("bottom")) && (I.includes("top") && c < 0 || I.includes("bottom") && c > 0) && (x.y = c) : Y === "x" && (I.includes("left") || I.includes("right")) && (I.includes("left") && b < 0 || I.includes("right") && b > 0) && (x.x = b), (Math.abs(x.x) > 0 || Math.abs(x.y) > 0) && y(!0), (Z = k.current) == null || Z.style.setProperty("--swipe-amount-x", `${x.x}px`), (zt = k.current) == null || zt.style.setProperty("--swipe-amount-y", `${x.y}px`);
		}
	}, Jt && !t.jsx ? import_react.createElement("button", {
		"aria-label": nt,
		"data-disabled": ht,
		"data-close-button": !0,
		onClick: ht || !V ? () => {} : () => {
			var r;
			$(), (r = t.onDismiss) == null || r.call(t, t);
		},
		className: M(s == null ? void 0 : s.closeButton, (Bt = t == null ? void 0 : t.classNames) == null ? void 0 : Bt.closeButton)
	}, (Ct = P == null ? void 0 : P.close) != null ? Ct : Ot) : null, t.jsx || (0, import_react.isValidElement)(t.title) ? t.jsx ? t.jsx : typeof t.title == "function" ? t.title() : t.title : import_react.createElement(import_react.Fragment, null, N || t.icon || t.promise ? import_react.createElement("div", {
		"data-icon": "",
		className: M(s == null ? void 0 : s.icon, (kt = t == null ? void 0 : t.classNames) == null ? void 0 : kt.icon)
	}, t.promise || t.type === "loading" && !t.icon ? t.icon || Zt() : null, t.type !== "loading" ? t.icon || (P == null ? void 0 : P[N]) || jt(N) : null) : null, import_react.createElement("div", {
		"data-content": "",
		className: M(s == null ? void 0 : s.content, (It = t == null ? void 0 : t.classNames) == null ? void 0 : It.content)
	}, import_react.createElement("div", {
		"data-title": "",
		className: M(s == null ? void 0 : s.title, (Mt = t == null ? void 0 : t.classNames) == null ? void 0 : Mt.title)
	}, typeof t.title == "function" ? t.title() : t.title), t.description ? import_react.createElement("div", {
		"data-description": "",
		className: M(at, Xt, s == null ? void 0 : s.description, (Ht = t == null ? void 0 : t.classNames) == null ? void 0 : Ht.description)
	}, typeof t.description == "function" ? t.description() : t.description) : null), (0, import_react.isValidElement)(t.cancel) ? t.cancel : t.cancel && tt(t.cancel) ? import_react.createElement("button", {
		"data-button": !0,
		"data-cancel": !0,
		style: t.cancelButtonStyle || ft,
		onClick: (r) => {
			var m, c;
			tt(t.cancel) && V && ((c = (m = t.cancel).onClick) == null || c.call(m, r), $());
		},
		className: M(s == null ? void 0 : s.cancelButton, (At = t == null ? void 0 : t.classNames) == null ? void 0 : At.cancelButton)
	}, t.cancel.label) : null, (0, import_react.isValidElement)(t.action) ? t.action : t.action && tt(t.action) ? import_react.createElement("button", {
		"data-button": !0,
		"data-action": !0,
		style: t.actionButtonStyle || l,
		onClick: (r) => {
			var m, c;
			tt(t.action) && ((c = (m = t.action).onClick) == null || c.call(m, r), !r.defaultPrevented && $());
		},
		className: M(s == null ? void 0 : s.actionButton, (Lt = t == null ? void 0 : t.classNames) == null ? void 0 : Lt.actionButton)
	}, t.action.label) : null));
};
function _t() {
	if (typeof window == "undefined" || typeof document == "undefined") return "ltr";
	let n = document.documentElement.getAttribute("dir");
	return n === "auto" || !n ? window.getComputedStyle(document.documentElement).direction : n;
}
function Te(n, e) {
	let t = {};
	return [n, e].forEach((a, u) => {
		let f = u === 1, w = f ? "--mobile-offset" : "--offset", S = f ? ge : me;
		function g(i) {
			[
				"top",
				"right",
				"bottom",
				"left"
			].forEach((D) => {
				t[`${w}-${D}`] = typeof i == "number" ? `${i}px` : i;
			});
		}
		typeof a == "number" || typeof a == "string" ? g(a) : typeof a == "object" ? [
			"top",
			"right",
			"bottom",
			"left"
		].forEach((i) => {
			a[i] === void 0 ? t[`${w}-${i}`] = S : t[`${w}-${i}`] = typeof a[i] == "number" ? `${a[i]}px` : a[i];
		}) : g(S);
	}), t;
}
var $e = (0, import_react.forwardRef)(function(e, t) {
	let { invert: a, position: u = "bottom-right", hotkey: f = ["altKey", "KeyT"], expand: w, closeButton: S, className: g, offset: i, mobileOffset: D, theme: T = "light", richColors: F, duration: et, style: ut, visibleToasts: ft = pe, toastOptions: l, dir: ot = _t(), gap: at = be, loadingIcon: X, icons: st, containerAriaLabel: pt = "Notifications", pauseWhenPageIsHidden: rt } = e, [B, s] = import_react.useState([]), P = import_react.useMemo(() => Array.from(new Set([u].concat(B.filter((d) => d.position).map((d) => d.position)))), [B, u]), [nt, it] = import_react.useState([]), [Y, C] = import_react.useState(!1), [lt, J] = import_react.useState(!1), [W, H] = import_react.useState(T !== "system" ? T : typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), A = import_react.useRef(null), mt = f.join("+").replace(/Key/g, "").replace(/Digit/g, ""), L = import_react.useRef(null), z = import_react.useRef(!1), ct = import_react.useCallback((d) => {
		s((h) => {
			var y;
			return (y = h.find((R) => R.id === d.id)) != null && y.delete || v.dismiss(d.id), h.filter(({ id: R }) => R !== d.id);
		});
	}, []);
	return import_react.useEffect(() => v.subscribe((d) => {
		if (d.dismiss) {
			s((h) => h.map((y) => y.id === d.id ? {
				...y,
				delete: !0
			} : y));
			return;
		}
		setTimeout(() => {
			import_react_dom.flushSync(() => {
				s((h) => {
					let y = h.findIndex((R) => R.id === d.id);
					return y !== -1 ? [
						...h.slice(0, y),
						{
							...h[y],
							...d
						},
						...h.slice(y + 1)
					] : [d, ...h];
				});
			});
		});
	}), []), import_react.useEffect(() => {
		if (T !== "system") {
			H(T);
			return;
		}
		if (T === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H("dark") : H("light")), typeof window == "undefined") return;
		let d = window.matchMedia("(prefers-color-scheme: dark)");
		try {
			d.addEventListener("change", ({ matches: h }) => {
				H(h ? "dark" : "light");
			});
		} catch (h) {
			d.addListener(({ matches: y }) => {
				try {
					H(y ? "dark" : "light");
				} catch (R) {
					console.error(R);
				}
			});
		}
	}, [T]), import_react.useEffect(() => {
		B.length <= 1 && C(!1);
	}, [B]), import_react.useEffect(() => {
		let d = (h) => {
			var R, j;
			f.every((p) => h[p] || h.code === p) && (C(!0), (R = A.current) == null || R.focus()), h.code === "Escape" && (document.activeElement === A.current || (j = A.current) != null && j.contains(document.activeElement)) && C(!1);
		};
		return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
	}, [f]), import_react.useEffect(() => {
		if (A.current) return () => {
			L.current && (L.current.focus({ preventScroll: !0 }), L.current = null, z.current = !1);
		};
	}, [A.current]), import_react.createElement("section", {
		ref: t,
		"aria-label": `${pt} ${mt}`,
		tabIndex: -1,
		"aria-live": "polite",
		"aria-relevant": "additions text",
		"aria-atomic": "false",
		suppressHydrationWarning: !0
	}, P.map((d, h) => {
		var j;
		let [y, R] = d.split("-");
		return B.length ? import_react.createElement("ol", {
			key: d,
			dir: ot === "auto" ? _t() : ot,
			tabIndex: -1,
			ref: A,
			className: g,
			"data-sonner-toaster": !0,
			"data-theme": W,
			"data-y-position": y,
			"data-lifted": Y && B.length > 1 && !w,
			"data-x-position": R,
			style: {
				"--front-toast-height": `${((j = nt[0]) == null ? void 0 : j.height) || 0}px`,
				"--width": `${he}px`,
				"--gap": `${at}px`,
				...ut,
				...Te(i, D)
			},
			onBlur: (p) => {
				z.current && !p.currentTarget.contains(p.relatedTarget) && (z.current = !1, L.current && (L.current.focus({ preventScroll: !0 }), L.current = null));
			},
			onFocus: (p) => {
				p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || z.current || (z.current = !0, L.current = p.relatedTarget);
			},
			onMouseEnter: () => C(!0),
			onMouseMove: () => C(!0),
			onMouseLeave: () => {
				lt || C(!1);
			},
			onDragEnd: () => C(!1),
			onPointerDown: (p) => {
				p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || J(!0);
			},
			onPointerUp: () => J(!1)
		}, B.filter((p) => !p.position && h === 0 || p.position === d).map((p, _) => {
			var O, G;
			return import_react.createElement(ve, {
				key: p.id,
				icons: st,
				index: _,
				toast: p,
				defaultRichColors: F,
				duration: (O = l == null ? void 0 : l.duration) != null ? O : et,
				className: l == null ? void 0 : l.className,
				descriptionClassName: l == null ? void 0 : l.descriptionClassName,
				invert: a,
				visibleToasts: ft,
				closeButton: (G = l == null ? void 0 : l.closeButton) != null ? G : S,
				interacting: lt,
				position: d,
				style: l == null ? void 0 : l.style,
				unstyled: l == null ? void 0 : l.unstyled,
				classNames: l == null ? void 0 : l.classNames,
				cancelButtonStyle: l == null ? void 0 : l.cancelButtonStyle,
				actionButtonStyle: l == null ? void 0 : l.actionButtonStyle,
				removeToast: ct,
				toasts: B.filter((k) => k.position == p.position),
				heights: nt.filter((k) => k.position == p.position),
				setHeights: it,
				expandByDefault: w,
				gap: at,
				loadingIcon: X,
				expanded: Y,
				pauseWhenPageIsHidden: rt,
				swipeDirections: e.swipeDirections
			});
		})) : null;
	}));
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/icons/Check/index.js
var import_compiler_runtime = require_compiler_runtime();
var paths$1 = {
	16: "M12.277 3.584a.5.5 0 0 1 .139.693l-5 7.5a.5.5 0 0 1-.77.077l-3-3a.5.5 0 0 1 .708-.708l2.568 2.57 4.662-6.993a.5.5 0 0 1 .693-.139",
	24: "M17.91 7.285a.5.5 0 0 0-.82-.57l-5.916 8.518-3.328-3.194a.5.5 0 1 0-.692.722l3.75 3.6a.5.5 0 0 0 .757-.076z"
};
var CheckIcon = ({ className, size = 16 }) => /*#__PURE__*/ (0, import_jsx_runtime.jsx)("svg", {
	className: [
		"icon",
		"icon--check",
		className
	].filter(Boolean).join(" "),
	fill: "none",
	height: size,
	viewBox: `0 0 ${size} ${size}`,
	width: size,
	xmlns: "http://www.w3.org/2000/svg",
	children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)("path", {
		clipRule: "evenodd",
		d: paths$1[size],
		fill: "currentColor",
		fillRule: "evenodd"
	})
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/findLocaleFromCode.js
var findLocaleFromCode = (localizationConfig, locale) => {
	if (!localizationConfig?.locales || localizationConfig.locales.length === 0) return null;
	return localizationConfig.locales.find((el) => el?.code === locale);
};
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
	return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
		return t.__proto__ = e, t;
	}, _setPrototypeOf(t, e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
	t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
/**
* Checks if a given element has a CSS class.
* 
* @param element the element
* @param className the CSS class name
*/
function hasClass(element, className) {
	if (element.classList) return !!className && element.classList.contains(className);
	return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/addClass.js
/**
* Adds a CSS class to a given element.
* 
* @param element the element
* @param className the CSS class name
*/
function addClass(element, className) {
	if (element.classList) element.classList.add(className);
	else if (!hasClass(element, className)) if (typeof element.className === "string") element.className = element.className + " " + className;
	else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
	return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
/**
* Removes a CSS class from a given element.
* 
* @param element the element
* @param className the CSS class name
*/
function removeClass$1(element, className) {
	if (element.classList) element.classList.remove(className);
	else if (typeof element.className === "string") element.className = replaceClassName(element.className, className);
	else element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
}
//#endregion
//#region node_modules/.pnpm/react-transition-group@4.4.5_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/react-transition-group/esm/config.js
var config_default = { disabled: false };
//#endregion
//#region node_modules/.pnpm/react-transition-group@4.4.5_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext_default = import_react.createContext(null);
//#endregion
//#region node_modules/.pnpm/react-transition-group@4.4.5_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow(node) {
	return node.scrollTop;
};
//#endregion
//#region node_modules/.pnpm/react-transition-group@4.4.5_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
/**
* The Transition component lets you describe a transition from one component
* state to another _over time_ with a simple declarative API. Most commonly
* it's used to animate the mounting and unmounting of a component, but can also
* be used to describe in-place transition states as well.
*
* ---
*
* **Note**: `Transition` is a platform-agnostic base component. If you're using
* transitions in CSS, you'll probably want to use
* [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
* instead. It inherits all the features of `Transition`, but contains
* additional features necessary to play nice with CSS transitions (hence the
* name of the component).
*
* ---
*
* By default the `Transition` component does not alter the behavior of the
* component it renders, it only tracks "enter" and "exit" states for the
* components. It's up to you to give meaning and effect to those states. For
* example we can add styles to a component when it enters or exits:
*
* ```jsx
* import { Transition } from 'react-transition-group';
*
* const duration = 300;
*
* const defaultStyle = {
*   transition: `opacity ${duration}ms ease-in-out`,
*   opacity: 0,
* }
*
* const transitionStyles = {
*   entering: { opacity: 1 },
*   entered:  { opacity: 1 },
*   exiting:  { opacity: 0 },
*   exited:  { opacity: 0 },
* };
*
* const Fade = ({ in: inProp }) => (
*   <Transition in={inProp} timeout={duration}>
*     {state => (
*       <div style={{
*         ...defaultStyle,
*         ...transitionStyles[state]
*       }}>
*         I'm a fade Transition!
*       </div>
*     )}
*   </Transition>
* );
* ```
*
* There are 4 main states a Transition can be in:
*  - `'entering'`
*  - `'entered'`
*  - `'exiting'`
*  - `'exited'`
*
* Transition state is toggled via the `in` prop. When `true` the component
* begins the "Enter" stage. During this stage, the component will shift from
* its current transition state, to `'entering'` for the duration of the
* transition and then to the `'entered'` stage once it's complete. Let's take
* the following example (we'll use the
* [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
*
* ```jsx
* function App() {
*   const [inProp, setInProp] = useState(false);
*   return (
*     <div>
*       <Transition in={inProp} timeout={500}>
*         {state => (
*           // ...
*         )}
*       </Transition>
*       <button onClick={() => setInProp(true)}>
*         Click to Enter
*       </button>
*     </div>
*   );
* }
* ```
*
* When the button is clicked the component will shift to the `'entering'` state
* and stay there for 500ms (the value of `timeout`) before it finally switches
* to `'entered'`.
*
* When `in` is `false` the same thing happens except the state moves from
* `'exiting'` to `'exited'`.
*/
var Transition = /*#__PURE__*/ function(_React$Component) {
	_inheritsLoose(Transition, _React$Component);
	function Transition(props, context) {
		var _this = _React$Component.call(this, props, context) || this;
		var parentGroup = context;
		var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
		var initialStatus;
		_this.appearStatus = null;
		if (props.in) if (appear) {
			initialStatus = EXITED;
			_this.appearStatus = ENTERING;
		} else initialStatus = ENTERED;
		else if (props.unmountOnExit || props.mountOnEnter) initialStatus = UNMOUNTED;
		else initialStatus = EXITED;
		_this.state = { status: initialStatus };
		_this.nextCallback = null;
		return _this;
	}
	Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
		if (_ref.in && prevState.status === "unmounted") return { status: EXITED };
		return null;
	};
	var _proto = Transition.prototype;
	_proto.componentDidMount = function componentDidMount() {
		this.updateStatus(true, this.appearStatus);
	};
	_proto.componentDidUpdate = function componentDidUpdate(prevProps) {
		var nextStatus = null;
		if (prevProps !== this.props) {
			var status = this.state.status;
			if (this.props.in) {
				if (status !== "entering" && status !== "entered") nextStatus = ENTERING;
			} else if (status === "entering" || status === "entered") nextStatus = EXITING;
		}
		this.updateStatus(false, nextStatus);
	};
	_proto.componentWillUnmount = function componentWillUnmount() {
		this.cancelNextCallback();
	};
	_proto.getTimeouts = function getTimeouts() {
		var timeout = this.props.timeout;
		var exit = enter = appear = timeout, enter, appear;
		if (timeout != null && typeof timeout !== "number") {
			exit = timeout.exit;
			enter = timeout.enter;
			appear = timeout.appear !== void 0 ? timeout.appear : enter;
		}
		return {
			exit,
			enter,
			appear
		};
	};
	_proto.updateStatus = function updateStatus(mounting, nextStatus) {
		if (mounting === void 0) mounting = false;
		if (nextStatus !== null) {
			this.cancelNextCallback();
			if (nextStatus === "entering") {
				if (this.props.unmountOnExit || this.props.mountOnEnter) {
					var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
					if (node) forceReflow(node);
				}
				this.performEnter(mounting);
			} else this.performExit();
		} else if (this.props.unmountOnExit && this.state.status === "exited") this.setState({ status: UNMOUNTED });
	};
	_proto.performEnter = function performEnter(mounting) {
		var _this2 = this;
		var enter = this.props.enter;
		var appearing = this.context ? this.context.isMounting : mounting;
		var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
		var timeouts = this.getTimeouts();
		var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
		if (!mounting && !enter || config_default.disabled) {
			this.safeSetState({ status: ENTERED }, function() {
				_this2.props.onEntered(maybeNode);
			});
			return;
		}
		this.props.onEnter(maybeNode, maybeAppearing);
		this.safeSetState({ status: ENTERING }, function() {
			_this2.props.onEntering(maybeNode, maybeAppearing);
			_this2.onTransitionEnd(enterTimeout, function() {
				_this2.safeSetState({ status: ENTERED }, function() {
					_this2.props.onEntered(maybeNode, maybeAppearing);
				});
			});
		});
	};
	_proto.performExit = function performExit() {
		var _this3 = this;
		var exit = this.props.exit;
		var timeouts = this.getTimeouts();
		var maybeNode = this.props.nodeRef ? void 0 : import_react_dom.default.findDOMNode(this);
		if (!exit || config_default.disabled) {
			this.safeSetState({ status: EXITED }, function() {
				_this3.props.onExited(maybeNode);
			});
			return;
		}
		this.props.onExit(maybeNode);
		this.safeSetState({ status: EXITING }, function() {
			_this3.props.onExiting(maybeNode);
			_this3.onTransitionEnd(timeouts.exit, function() {
				_this3.safeSetState({ status: EXITED }, function() {
					_this3.props.onExited(maybeNode);
				});
			});
		});
	};
	_proto.cancelNextCallback = function cancelNextCallback() {
		if (this.nextCallback !== null) {
			this.nextCallback.cancel();
			this.nextCallback = null;
		}
	};
	_proto.safeSetState = function safeSetState(nextState, callback) {
		callback = this.setNextCallback(callback);
		this.setState(nextState, callback);
	};
	_proto.setNextCallback = function setNextCallback(callback) {
		var _this4 = this;
		var active = true;
		this.nextCallback = function(event) {
			if (active) {
				active = false;
				_this4.nextCallback = null;
				callback(event);
			}
		};
		this.nextCallback.cancel = function() {
			active = false;
		};
		return this.nextCallback;
	};
	_proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
		this.setNextCallback(handler);
		var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
		var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
		if (!node || doesNotHaveTimeoutOrListener) {
			setTimeout(this.nextCallback, 0);
			return;
		}
		if (this.props.addEndListener) {
			var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
			this.props.addEndListener(maybeNode, maybeNextCallback);
		}
		if (timeout != null) setTimeout(this.nextCallback, timeout);
	};
	_proto.render = function render() {
		var status = this.state.status;
		if (status === "unmounted") return null;
		var _this$props = this.props, children = _this$props.children;
		_this$props.in;
		_this$props.mountOnEnter;
		_this$props.unmountOnExit;
		_this$props.appear;
		_this$props.enter;
		_this$props.exit;
		_this$props.timeout;
		_this$props.addEndListener;
		_this$props.onEnter;
		_this$props.onEntering;
		_this$props.onEntered;
		_this$props.onExit;
		_this$props.onExiting;
		_this$props.onExited;
		_this$props.nodeRef;
		var childProps = _objectWithoutPropertiesLoose(_this$props, [
			"children",
			"in",
			"mountOnEnter",
			"unmountOnExit",
			"appear",
			"enter",
			"exit",
			"timeout",
			"addEndListener",
			"onEnter",
			"onEntering",
			"onEntered",
			"onExit",
			"onExiting",
			"onExited",
			"nodeRef"
		]);
		return /*#__PURE__*/ import_react.createElement(TransitionGroupContext_default.Provider, { value: null }, typeof children === "function" ? children(status, childProps) : import_react.cloneElement(import_react.Children.only(children), childProps));
	};
	return Transition;
}(import_react.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = {};
function noop() {}
Transition.defaultProps = {
	in: false,
	mountOnEnter: false,
	unmountOnExit: false,
	appear: false,
	enter: true,
	exit: true,
	onEnter: noop,
	onEntering: noop,
	onEntered: noop,
	onExit: noop,
	onExiting: noop,
	onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
//#endregion
//#region node_modules/.pnpm/react-transition-group@4.4.5_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/react-transition-group/esm/CSSTransition.js
var _addClass = function addClass$1(node, classes) {
	return node && classes && classes.split(" ").forEach(function(c) {
		return addClass(node, c);
	});
};
var removeClass = function removeClass(node, classes) {
	return node && classes && classes.split(" ").forEach(function(c) {
		return removeClass$1(node, c);
	});
};
/**
* A transition component inspired by the excellent
* [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
* use it if you're using CSS transitions or animations. It's built upon the
* [`Transition`](https://reactcommunity.org/react-transition-group/transition)
* component, so it inherits all of its props.
*
* `CSSTransition` applies a pair of class names during the `appear`, `enter`,
* and `exit` states of the transition. The first class is applied and then a
* second `*-active` class in order to activate the CSS transition. After the
* transition, matching `*-done` class names are applied to persist the
* transition state.
*
* ```jsx
* function App() {
*   const [inProp, setInProp] = useState(false);
*   return (
*     <div>
*       <CSSTransition in={inProp} timeout={200} classNames="my-node">
*         <div>
*           {"I'll receive my-node-* classes"}
*         </div>
*       </CSSTransition>
*       <button type="button" onClick={() => setInProp(true)}>
*         Click to Enter
*       </button>
*     </div>
*   );
* }
* ```
*
* When the `in` prop is set to `true`, the child component will first receive
* the class `example-enter`, then the `example-enter-active` will be added in
* the next tick. `CSSTransition` [forces a
* reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
* between before adding the `example-enter-active`. This is an important trick
* because it allows us to transition between `example-enter` and
* `example-enter-active` even though they were added immediately one after
* another. Most notably, this is what makes it possible for us to animate
* _appearance_.
*
* ```css
* .my-node-enter {
*   opacity: 0;
* }
* .my-node-enter-active {
*   opacity: 1;
*   transition: opacity 200ms;
* }
* .my-node-exit {
*   opacity: 1;
* }
* .my-node-exit-active {
*   opacity: 0;
*   transition: opacity 200ms;
* }
* ```
*
* `*-active` classes represent which styles you want to animate **to**, so it's
* important to add `transition` declaration only to them, otherwise transitions
* might not behave as intended! This might not be obvious when the transitions
* are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
* the example above (minus `transition`), but it becomes apparent in more
* complex transitions.
*
* **Note**: If you're using the
* [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
* prop, make sure to define styles for `.appear-*` classes as well.
*/
var CSSTransition = /*#__PURE__*/ function(_React$Component) {
	_inheritsLoose(CSSTransition, _React$Component);
	function CSSTransition() {
		var _this;
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		_this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
		_this.appliedClasses = {
			appear: {},
			enter: {},
			exit: {}
		};
		_this.onEnter = function(maybeNode, maybeAppearing) {
			var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
			_this.removeClasses(node, "exit");
			_this.addClass(node, appearing ? "appear" : "enter", "base");
			if (_this.props.onEnter) _this.props.onEnter(maybeNode, maybeAppearing);
		};
		_this.onEntering = function(maybeNode, maybeAppearing) {
			var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0];
			var type = _this$resolveArgument2[1] ? "appear" : "enter";
			_this.addClass(node, type, "active");
			if (_this.props.onEntering) _this.props.onEntering(maybeNode, maybeAppearing);
		};
		_this.onEntered = function(maybeNode, maybeAppearing) {
			var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0];
			var type = _this$resolveArgument3[1] ? "appear" : "enter";
			_this.removeClasses(node, type);
			_this.addClass(node, type, "done");
			if (_this.props.onEntered) _this.props.onEntered(maybeNode, maybeAppearing);
		};
		_this.onExit = function(maybeNode) {
			var node = _this.resolveArguments(maybeNode)[0];
			_this.removeClasses(node, "appear");
			_this.removeClasses(node, "enter");
			_this.addClass(node, "exit", "base");
			if (_this.props.onExit) _this.props.onExit(maybeNode);
		};
		_this.onExiting = function(maybeNode) {
			var node = _this.resolveArguments(maybeNode)[0];
			_this.addClass(node, "exit", "active");
			if (_this.props.onExiting) _this.props.onExiting(maybeNode);
		};
		_this.onExited = function(maybeNode) {
			var node = _this.resolveArguments(maybeNode)[0];
			_this.removeClasses(node, "exit");
			_this.addClass(node, "exit", "done");
			if (_this.props.onExited) _this.props.onExited(maybeNode);
		};
		_this.resolveArguments = function(maybeNode, maybeAppearing) {
			return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
		};
		_this.getClassNames = function(type) {
			var classNames = _this.props.classNames;
			var isStringClassNames = typeof classNames === "string";
			var prefix = isStringClassNames && classNames ? classNames + "-" : "";
			var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
			return {
				baseClassName,
				activeClassName: isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"],
				doneClassName: isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"]
			};
		};
		return _this;
	}
	var _proto = CSSTransition.prototype;
	_proto.addClass = function addClass(node, type, phase) {
		var className = this.getClassNames(type)[phase + "ClassName"];
		var doneClassName = this.getClassNames("enter").doneClassName;
		if (type === "appear" && phase === "done" && doneClassName) className += " " + doneClassName;
		if (phase === "active") {
			if (node) forceReflow(node);
		}
		if (className) {
			this.appliedClasses[type][phase] = className;
			_addClass(node, className);
		}
	};
	_proto.removeClasses = function removeClasses(node, type) {
		var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
		this.appliedClasses[type] = {};
		if (baseClassName) removeClass(node, baseClassName);
		if (activeClassName) removeClass(node, activeClassName);
		if (doneClassName) removeClass(node, doneClassName);
	};
	_proto.render = function render() {
		var _this$props = this.props;
		_this$props.classNames;
		var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
		return /*#__PURE__*/ import_react.createElement(Transition, _extends({}, props, {
			onEnter: this.onEnter,
			onEntered: this.onEntered,
			onEntering: this.onEntering,
			onExit: this.onExit,
			onExiting: this.onExiting,
			onExited: this.onExited
		}));
	};
	return CSSTransition;
}(import_react.Component);
CSSTransition.defaultProps = { classNames: "" };
CSSTransition.propTypes = {};
//#endregion
//#region node_modules/.pnpm/@faceless-ui+modal@3.0.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@faceless-ui/modal/dist/ModalProvider/context.js
var ModalContext = (0, import_react.createContext)({});
//#endregion
//#region node_modules/.pnpm/@faceless-ui+modal@3.0.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@faceless-ui/modal/dist/useModal/index.js
var useModal = () => (0, import_react.useContext)(ModalContext);
//#endregion
//#region node_modules/.pnpm/@faceless-ui+modal@3.0.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@faceless-ui/modal/dist/ModalProvider/generateTransitionClasses.js
var generateTransitionClasses = (baseClass) => {
	if (baseClass) return {
		appear: `${baseClass}--appear`,
		appearActive: `${baseClass}--appearActive`,
		appearDone: `${baseClass}--appearDone`,
		enter: `${baseClass}--enter`,
		enterActive: `${baseClass}--enterActive`,
		enterDone: `${baseClass}--enterDone`,
		exit: `${baseClass}--exit`,
		exitActive: `${baseClass}--exitActive`,
		exitDone: `${baseClass}--exitDone`
	};
	return {};
};
//#endregion
//#region node_modules/.pnpm/tabbable@6.5.0/node_modules/tabbable/dist/index.esm.js
/*!
* tabbable 6.5.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = [
	"input:not([inert]):not([inert] *)",
	"select:not([inert]):not([inert] *)",
	"textarea:not([inert]):not([inert] *)",
	"a[href]:not([inert]):not([inert] *)",
	"area[href]:not([inert]):not([inert] *)",
	"button:not([inert]):not([inert] *)",
	"[tabindex]:not(slot):not([inert]):not([inert] *)",
	"audio[controls]:not([inert]):not([inert] *)",
	"video[controls]:not([inert]):not([inert] *)",
	"[contenteditable]:not([contenteditable=\"false\"]):not([inert]):not([inert] *)",
	"details>summary:first-of-type:not([inert]):not([inert] *)",
	"details:not([inert]):not([inert] *)"
];
var candidateSelector = /* #__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
	var _element$getRootNode;
	return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
	return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
/**
* Determines if a node is inert or in an inert ancestor.
* @param {Node} [node]
* @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
*  see if any of them are inert. If false, only `node` itself is considered.
* @returns {boolean} True if inert itself or by way of being in an inert ancestor.
*  False if `node` is falsy.
*/
var _isInert = function isInert(node, lookUp) {
	var _node$getAttribute;
	if (lookUp === void 0) lookUp = true;
	var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
	return inertAtt === "" || inertAtt === "true" || lookUp && node && (typeof node.closest === "function" ? node.closest("[inert]") : _isInert(node.parentNode));
};
/**
* Determines if a node's content is editable.
* @param {Element} [node]
* @returns True if it's content-editable; false if it's not or `node` is falsy.
*/
var isContentEditable = function isContentEditable(node) {
	var _node$getAttribute2;
	var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
	return attValue === "" || attValue === "true";
};
/**
* @param {Element} el container to check in
* @param {boolean} includeContainer add container to check
* @param {(node: Element) => boolean} filter filter candidates
* @returns {Element[]}
*/
var getCandidates = function getCandidates(el, includeContainer, filter) {
	if (_isInert(el)) return [];
	var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
	if (includeContainer && matches.call(el, candidateSelector)) candidates.unshift(el);
	candidates = candidates.filter(filter);
	return candidates;
};
/**
* @callback GetShadowRoot
* @param {Element} element to check for shadow root
* @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
*/
/**
* @callback ShadowRootFilter
* @param {Element} shadowHostNode the element which contains shadow content
* @returns {boolean} true if a shadow root could potentially contain valid candidates.
*/
/**
* @typedef {Object} CandidateScope
* @property {Element} scopeParent contains inner candidates
* @property {Element[]} candidates list of candidates found in the scope parent
*/
/**
* @typedef {Object} IterativeOptions
* @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
*  if a function, implies shadow support is enabled and either returns the shadow root of an element
*  or a boolean stating if it has an undisclosed shadow root
* @property {(node: Element) => boolean} filter filter candidates
* @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
* @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
*/
/**
* @param {Element[]} elements list of element containers to match candidates from
* @param {boolean} includeContainer add container list to check
* @param {IterativeOptions} options
* @returns {Array.<Element|CandidateScope>}
*/
var _getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
	var candidates = [];
	var elementsToCheck = Array.from(elements);
	while (elementsToCheck.length) {
		var element = elementsToCheck.shift();
		if (_isInert(element, false)) continue;
		if (element.tagName === "SLOT") {
			var assigned = element.assignedElements();
			var nestedCandidates = _getCandidatesIteratively(assigned.length ? assigned : element.children, true, options);
			if (options.flatten) candidates.push.apply(candidates, nestedCandidates);
			else candidates.push({
				scopeParent: element,
				candidates: nestedCandidates
			});
		} else {
			if (matches.call(element, candidateSelector) && options.filter(element) && (includeContainer || !elements.includes(element))) candidates.push(element);
			var shadowRoot = element.shadowRoot || typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
			var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
			if (shadowRoot && validShadowRoot) {
				var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
				if (options.flatten) candidates.push.apply(candidates, _nestedCandidates);
				else candidates.push({
					scopeParent: element,
					candidates: _nestedCandidates
				});
			} else elementsToCheck.unshift.apply(elementsToCheck, element.children);
		}
	}
	return candidates;
};
/**
* @private
* Determines if the node has an explicitly specified `tabindex` attribute.
* @param {HTMLElement} node
* @returns {boolean} True if so; false if not.
*/
var hasTabIndex = function hasTabIndex(node) {
	return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
};
/**
* Determine the tab index of a given node.
* @param {HTMLElement} node
* @returns {number} Tab order (negative, 0, or positive number).
* @throws {Error} If `node` is falsy.
*/
var getTabIndex = function getTabIndex(node) {
	if (!node) throw new Error("No node provided");
	if (node.tabIndex < 0) {
		if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) return 0;
	}
	return node.tabIndex;
};
/**
* Determine the tab index of a given node __for sort order purposes__.
* @param {HTMLElement} node
* @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
*  has tabIndex -1, but needs to be sorted by document order in order for its content to be
*  inserted into the correct sort position.
* @returns {number} Tab order (negative, 0, or positive number).
*/
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
	var tabIndex = getTabIndex(node);
	if (tabIndex < 0 && isScope && !hasTabIndex(node)) return 0;
	return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
	return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
	return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput(node) {
	return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
	return node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
		return child.tagName === "SUMMARY";
	});
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
	for (var i = 0; i < nodes.length; i++) if (nodes[i].checked && nodes[i].form === form) return nodes[i];
};
var isTabbableRadio = function isTabbableRadio(node) {
	if (!node.name) return true;
	var radioScope = node.form || getRootNode(node);
	var queryRadios = function queryRadios(name) {
		return radioScope.querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]");
	};
	var radioSet;
	if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") radioSet = queryRadios(window.CSS.escape(node.name));
	else try {
		radioSet = queryRadios(node.name);
	} catch (err) {
		console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
		return false;
	}
	var checked = getCheckedRadio(radioSet, node.form);
	return !checked || checked === node;
};
var isRadio = function isRadio(node) {
	return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
	return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached(node) {
	var _nodeRoot;
	var nodeRoot = node && getRootNode(node);
	var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
	var attached = false;
	if (nodeRoot && nodeRoot !== node) {
		var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
		attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
		while (!attached && nodeRootHost) {
			var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
			nodeRoot = getRootNode(nodeRootHost);
			nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
			attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
		}
	}
	return attached;
};
var isZeroArea = function isZeroArea(node) {
	var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
	return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
	var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
	if (displayCheck === "full-native") {
		if ("checkVisibility" in node) return !node.checkVisibility({
			checkOpacity: false,
			opacityProperty: false,
			contentVisibilityAuto: true,
			visibilityProperty: true,
			checkVisibilityCSS: true
		});
	}
	var visibility = getComputedStyle(node).visibility;
	if (visibility === "hidden" || visibility === "collapse") return true;
	var nodeUnderDetails = matches.call(node, "details>summary:first-of-type") ? node.parentElement : node;
	if (matches.call(nodeUnderDetails, "details:not([open]) *")) return true;
	if (!displayCheck || displayCheck === "full" || displayCheck === "full-native" || displayCheck === "legacy-full") {
		if (typeof getShadowRoot === "function") {
			var originalNode = node;
			while (node) {
				var parentElement = node.parentElement;
				var rootNode = getRootNode(node);
				if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) return isZeroArea(node);
				else if (node.assignedSlot) node = node.assignedSlot;
				else if (!parentElement && rootNode !== node.ownerDocument) node = rootNode.host;
				else node = parentElement;
			}
			node = originalNode;
		}
		if (isNodeAttached(node)) return !node.getClientRects().length;
		if (displayCheck !== "legacy-full") return true;
	} else if (displayCheck === "non-zero-area") return isZeroArea(node);
	return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
		var parentNode = node.parentElement;
		while (parentNode) {
			if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
				for (var i = 0; i < parentNode.children.length; i++) {
					var child = parentNode.children.item(i);
					if (child.tagName === "LEGEND") return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
				}
				return true;
			}
			parentNode = parentNode.parentElement;
		}
	}
	return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
	if (node.disabled || isHiddenInput(node) || isHidden(node, options) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) return false;
	return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
	if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) return false;
	return true;
};
var isShadowRootTabbable = function isShadowRootTabbable(shadowHostNode) {
	var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
	if (isNaN(tabIndex) || tabIndex >= 0) return true;
	return false;
};
/**
* @param {Array.<Element|CandidateScope>} candidates
* @returns Element[]
*/
var _sortByOrder = function sortByOrder(candidates) {
	var regularTabbables = [];
	var orderedTabbables = [];
	candidates.forEach(function(item, i) {
		var isScope = !!item.scopeParent;
		var element = isScope ? item.scopeParent : item;
		var candidateTabindex = getSortOrderTabIndex(element, isScope);
		var elements = isScope ? _sortByOrder(item.candidates) : element;
		if (candidateTabindex === 0) isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
		else orderedTabbables.push({
			documentOrder: i,
			tabIndex: candidateTabindex,
			item,
			isScope,
			content: elements
		});
	});
	return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
		sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
		return acc;
	}, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
	options = options || {};
	var candidates;
	if (options.getShadowRoot) candidates = _getCandidatesIteratively([container], options.includeContainer, {
		filter: isNodeMatchingSelectorTabbable.bind(null, options),
		flatten: false,
		getShadowRoot: options.getShadowRoot,
		shadowRootFilter: isShadowRootTabbable
	});
	else candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
	return _sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
	options = options || {};
	var candidates;
	if (options.getShadowRoot) candidates = _getCandidatesIteratively([container], options.includeContainer, {
		filter: isNodeMatchingSelectorFocusable.bind(null, options),
		flatten: true,
		getShadowRoot: options.getShadowRoot
	});
	else candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
	return candidates;
};
var isTabbable = function isTabbable(node, options) {
	options = options || {};
	if (!node) throw new Error("No node provided");
	if (matches.call(node, candidateSelector) === false) return false;
	return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */ candidateSelectors.concat("iframe:not([inert]):not([inert] *)").join(",");
var isFocusable = function isFocusable(node, options) {
	options = options || {};
	if (!node) throw new Error("No node provided");
	if (matches.call(node, focusableCandidateSelector) === false) return false;
	return isNodeMatchingSelectorFocusable(options, node);
};
//#endregion
//#region node_modules/.pnpm/focus-trap@7.5.4/node_modules/focus-trap/dist/focus-trap.esm.js
/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty(obj, key, value) {
	key = _toPropertyKey(key);
	if (key in obj) Object.defineProperty(obj, key, {
		value,
		enumerable: true,
		configurable: true,
		writable: true
	});
	else obj[key] = value;
	return obj;
}
function _toPrimitive(input, hint) {
	if (typeof input !== "object" || input === null) return input;
	var prim = input[Symbol.toPrimitive];
	if (prim !== void 0) {
		var res = prim.call(input, hint || "default");
		if (typeof res !== "object") return res;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
	var key = _toPrimitive(arg, "string");
	return typeof key === "symbol" ? key : String(key);
}
var activeFocusTraps = {
	activateTrap: function activateTrap(trapStack, trap) {
		if (trapStack.length > 0) {
			var activeTrap = trapStack[trapStack.length - 1];
			if (activeTrap !== trap) activeTrap.pause();
		}
		var trapIndex = trapStack.indexOf(trap);
		if (trapIndex === -1) trapStack.push(trap);
		else {
			trapStack.splice(trapIndex, 1);
			trapStack.push(trap);
		}
	},
	deactivateTrap: function deactivateTrap(trapStack, trap) {
		var trapIndex = trapStack.indexOf(trap);
		if (trapIndex !== -1) trapStack.splice(trapIndex, 1);
		if (trapStack.length > 0) trapStack[trapStack.length - 1].unpause();
	}
};
var isSelectableInput = function isSelectableInput(node) {
	return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
};
var isEscapeEvent = function isEscapeEvent(e) {
	return (e === null || e === void 0 ? void 0 : e.key) === "Escape" || (e === null || e === void 0 ? void 0 : e.key) === "Esc" || (e === null || e === void 0 ? void 0 : e.keyCode) === 27;
};
var isTabEvent = function isTabEvent(e) {
	return (e === null || e === void 0 ? void 0 : e.key) === "Tab" || (e === null || e === void 0 ? void 0 : e.keyCode) === 9;
};
var isKeyForward = function isKeyForward(e) {
	return isTabEvent(e) && !e.shiftKey;
};
var isKeyBackward = function isKeyBackward(e) {
	return isTabEvent(e) && e.shiftKey;
};
var delay = function delay(fn) {
	return setTimeout(fn, 0);
};
var findIndex = function findIndex(arr, fn) {
	var idx = -1;
	arr.every(function(value, i) {
		if (fn(value)) {
			idx = i;
			return false;
		}
		return true;
	});
	return idx;
};
/**
* Get an option's value when it could be a plain value, or a handler that provides
*  the value.
* @param {*} value Option's value to check.
* @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
* @returns {*} The `value`, or the handler's returned value.
*/
var valueOrHandler = function valueOrHandler(value) {
	for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
	return typeof value === "function" ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget(event) {
	return event.target.shadowRoot && typeof event.composedPath === "function" ? event.composedPath()[0] : event.target;
};
var internalTrapStack = [];
var createFocusTrap = function createFocusTrap(elements, userOptions) {
	var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
	var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
	var config = _objectSpread2({
		returnFocusOnDeactivate: true,
		escapeDeactivates: true,
		delayInitialFocus: true,
		isKeyForward,
		isKeyBackward
	}, userOptions);
	var state = {
		containers: [],
		containerGroups: [],
		tabbableGroups: [],
		nodeFocusedBeforeActivation: null,
		mostRecentlyFocusedNode: null,
		active: false,
		paused: false,
		delayInitialFocusTimer: void 0,
		recentNavEvent: void 0
	};
	var trap;
	/**
	* Gets a configuration option value.
	* @param {Object|undefined} configOverrideOptions If true, and option is defined in this set,
	*  value will be taken from this object. Otherwise, value will be taken from base configuration.
	* @param {string} optionName Name of the option whose value is sought.
	* @param {string|undefined} [configOptionName] Name of option to use __instead of__ `optionName`
	*  IIF `configOverrideOptions` is not defined. Otherwise, `optionName` is used.
	*/
	var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
		return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
	};
	/**
	* Finds the index of the container that contains the element.
	* @param {HTMLElement} element
	* @param {Event} [event] If available, and `element` isn't directly found in any container,
	*  the event's composed path is used to see if includes any known trap containers in the
	*  case where the element is inside a Shadow DOM.
	* @returns {number} Index of the container in either `state.containers` or
	*  `state.containerGroups` (the order/length of these lists are the same); -1
	*  if the element isn't found.
	*/
	var findContainerIndex = function findContainerIndex(element, event) {
		var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === "function" ? event.composedPath() : void 0;
		return state.containerGroups.findIndex(function(_ref) {
			var container = _ref.container, tabbableNodes = _ref.tabbableNodes;
			return container.contains(element) || (composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function(node) {
				return node === element;
			});
		});
	};
	/**
	* Gets the node for the given option, which is expected to be an option that
	*  can be either a DOM node, a string that is a selector to get a node, `false`
	*  (if a node is explicitly NOT given), or a function that returns any of these
	*  values.
	* @param {string} optionName
	* @returns {undefined | false | HTMLElement | SVGElement} Returns
	*  `undefined` if the option is not specified; `false` if the option
	*  resolved to `false` (node explicitly not given); otherwise, the resolved
	*  DOM node.
	* @throws {Error} If the option is set, not `false`, and is not, or does not
	*  resolve to a node.
	*/
	var getNodeForOption = function getNodeForOption(optionName) {
		var optionValue = config[optionName];
		if (typeof optionValue === "function") {
			for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) params[_key2 - 1] = arguments[_key2];
			optionValue = optionValue.apply(void 0, params);
		}
		if (optionValue === true) optionValue = void 0;
		if (!optionValue) {
			if (optionValue === void 0 || optionValue === false) return optionValue;
			throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
		}
		var node = optionValue;
		if (typeof optionValue === "string") {
			node = doc.querySelector(optionValue);
			if (!node) throw new Error("`".concat(optionName, "` as selector refers to no known node"));
		}
		return node;
	};
	var getInitialFocusNode = function getInitialFocusNode() {
		var node = getNodeForOption("initialFocus");
		if (node === false) return false;
		if (node === void 0 || !isFocusable(node, config.tabbableOptions)) if (findContainerIndex(doc.activeElement) >= 0) node = doc.activeElement;
		else {
			var firstTabbableGroup = state.tabbableGroups[0];
			node = firstTabbableGroup && firstTabbableGroup.firstTabbableNode || getNodeForOption("fallbackFocus");
		}
		if (!node) throw new Error("Your focus-trap needs to have at least one focusable element");
		return node;
	};
	var updateTabbableNodes = function updateTabbableNodes() {
		state.containerGroups = state.containers.map(function(container) {
			var tabbableNodes = tabbable(container, config.tabbableOptions);
			var focusableNodes = focusable(container, config.tabbableOptions);
			var firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : void 0;
			var lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : void 0;
			var firstDomTabbableNode = focusableNodes.find(function(node) {
				return isTabbable(node);
			});
			var lastDomTabbableNode = focusableNodes.slice().reverse().find(function(node) {
				return isTabbable(node);
			});
			return {
				container,
				tabbableNodes,
				focusableNodes,
				/** True if at least one node with positive `tabindex` was found in this container. */
				posTabIndexesFound: !!tabbableNodes.find(function(node) {
					return getTabIndex(node) > 0;
				}),
				/** First tabbable node in container, __tabindex__ order; `undefined` if none. */
				firstTabbableNode,
				/** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
				lastTabbableNode,
				/** First tabbable node in container, __DOM__ order; `undefined` if none. */
				firstDomTabbableNode,
				/** Last tabbable node in container, __DOM__ order; `undefined` if none. */
				lastDomTabbableNode,
				/**
				* Finds the __tabbable__ node that follows the given node in the specified direction,
				*  in this container, if any.
				* @param {HTMLElement} node
				* @param {boolean} [forward] True if going in forward tab order; false if going
				*  in reverse.
				* @returns {HTMLElement|undefined} The next tabbable node, if any.
				*/
				nextTabbableNode: function nextTabbableNode(node) {
					var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
					var nodeIdx = tabbableNodes.indexOf(node);
					if (nodeIdx < 0) {
						if (forward) return focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function(el) {
							return isTabbable(el);
						});
						return focusableNodes.slice(0, focusableNodes.indexOf(node)).reverse().find(function(el) {
							return isTabbable(el);
						});
					}
					return tabbableNodes[nodeIdx + (forward ? 1 : -1)];
				}
			};
		});
		state.tabbableGroups = state.containerGroups.filter(function(group) {
			return group.tabbableNodes.length > 0;
		});
		if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
		if (state.containerGroups.find(function(g) {
			return g.posTabIndexesFound;
		}) && state.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
	};
	/**
	* Gets the current activeElement. If it's a web-component and has open shadow-root
	* it will recursively search inside shadow roots for the "true" activeElement.
	*
	* @param {Document | ShadowRoot} el
	*
	* @returns {HTMLElement} The element that currently has the focus
	**/
	var getActiveElement = function getActiveElement(el) {
		var activeElement = el.activeElement;
		if (!activeElement) return;
		if (activeElement.shadowRoot && activeElement.shadowRoot.activeElement !== null) return getActiveElement(activeElement.shadowRoot);
		return activeElement;
	};
	var tryFocus = function tryFocus(node) {
		if (node === false) return;
		if (node === getActiveElement(document)) return;
		if (!node || !node.focus) {
			tryFocus(getInitialFocusNode());
			return;
		}
		node.focus({ preventScroll: !!config.preventScroll });
		state.mostRecentlyFocusedNode = node;
		if (isSelectableInput(node)) node.select();
	};
	var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
		var node = getNodeForOption("setReturnFocus", previousActiveElement);
		return node ? node : node === false ? false : previousActiveElement;
	};
	/**
	* Finds the next node (in either direction) where focus should move according to a
	*  keyboard focus-in event.
	* @param {Object} params
	* @param {Node} [params.target] Known target __from which__ to navigate, if any.
	* @param {KeyboardEvent|FocusEvent} [params.event] Event to use if `target` isn't known (event
	*  will be used to determine the `target`). Ignored if `target` is specified.
	* @param {boolean} [params.isBackward] True if focus should move backward.
	* @returns {Node|undefined} The next node, or `undefined` if a next node couldn't be
	*  determined given the current state of the trap.
	*/
	var findNextNavNode = function findNextNavNode(_ref2) {
		var target = _ref2.target, event = _ref2.event, _ref2$isBackward = _ref2.isBackward, isBackward = _ref2$isBackward === void 0 ? false : _ref2$isBackward;
		target = target || getActualTarget(event);
		updateTabbableNodes();
		var destinationNode = null;
		if (state.tabbableGroups.length > 0) {
			var containerIndex = findContainerIndex(target, event);
			var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : void 0;
			if (containerIndex < 0) if (isBackward) destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
			else destinationNode = state.tabbableGroups[0].firstTabbableNode;
			else if (isBackward) {
				var startOfGroupIndex = findIndex(state.tabbableGroups, function(_ref3) {
					var firstTabbableNode = _ref3.firstTabbableNode;
					return target === firstTabbableNode;
				});
				if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) startOfGroupIndex = containerIndex;
				if (startOfGroupIndex >= 0) {
					var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
					var destinationGroup = state.tabbableGroups[destinationGroupIndex];
					destinationNode = getTabIndex(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
				} else if (!isTabEvent(event)) destinationNode = containerGroup.nextTabbableNode(target, false);
			} else {
				var lastOfGroupIndex = findIndex(state.tabbableGroups, function(_ref4) {
					var lastTabbableNode = _ref4.lastTabbableNode;
					return target === lastTabbableNode;
				});
				if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) lastOfGroupIndex = containerIndex;
				if (lastOfGroupIndex >= 0) {
					var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
					var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
					destinationNode = getTabIndex(target) >= 0 ? _destinationGroup.firstTabbableNode : _destinationGroup.firstDomTabbableNode;
				} else if (!isTabEvent(event)) destinationNode = containerGroup.nextTabbableNode(target);
			}
		} else destinationNode = getNodeForOption("fallbackFocus");
		return destinationNode;
	};
	var checkPointerDown = function checkPointerDown(e) {
		if (findContainerIndex(getActualTarget(e), e) >= 0) return;
		if (valueOrHandler(config.clickOutsideDeactivates, e)) {
			trap.deactivate({ returnFocus: config.returnFocusOnDeactivate });
			return;
		}
		if (valueOrHandler(config.allowOutsideClick, e)) return;
		e.preventDefault();
	};
	var checkFocusIn = function checkFocusIn(event) {
		var target = getActualTarget(event);
		var targetContained = findContainerIndex(target, event) >= 0;
		if (targetContained || target instanceof Document) {
			if (targetContained) state.mostRecentlyFocusedNode = target;
		} else {
			event.stopImmediatePropagation();
			var nextNode;
			var navAcrossContainers = true;
			if (state.mostRecentlyFocusedNode) {
				if (getTabIndex(state.mostRecentlyFocusedNode) > 0) {
					var mruContainerIdx = findContainerIndex(state.mostRecentlyFocusedNode);
					var tabbableNodes = state.containerGroups[mruContainerIdx].tabbableNodes;
					if (tabbableNodes.length > 0) {
						var mruTabIdx = tabbableNodes.findIndex(function(node) {
							return node === state.mostRecentlyFocusedNode;
						});
						if (mruTabIdx >= 0) {
							if (config.isKeyForward(state.recentNavEvent)) {
								if (mruTabIdx + 1 < tabbableNodes.length) {
									nextNode = tabbableNodes[mruTabIdx + 1];
									navAcrossContainers = false;
								}
							} else if (mruTabIdx - 1 >= 0) {
								nextNode = tabbableNodes[mruTabIdx - 1];
								navAcrossContainers = false;
							}
						}
					}
				} else if (!state.containerGroups.some(function(g) {
					return g.tabbableNodes.some(function(n) {
						return getTabIndex(n) > 0;
					});
				})) navAcrossContainers = false;
			} else navAcrossContainers = false;
			if (navAcrossContainers) nextNode = findNextNavNode({
				target: state.mostRecentlyFocusedNode,
				isBackward: config.isKeyBackward(state.recentNavEvent)
			});
			if (nextNode) tryFocus(nextNode);
			else tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
		}
		state.recentNavEvent = void 0;
	};
	var checkKeyNav = function checkKeyNav(event) {
		var isBackward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
		state.recentNavEvent = event;
		var destinationNode = findNextNavNode({
			event,
			isBackward
		});
		if (destinationNode) {
			if (isTabEvent(event)) event.preventDefault();
			tryFocus(destinationNode);
		}
	};
	var checkKey = function checkKey(event) {
		if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== false) {
			event.preventDefault();
			trap.deactivate();
			return;
		}
		if (config.isKeyForward(event) || config.isKeyBackward(event)) checkKeyNav(event, config.isKeyBackward(event));
	};
	var checkClick = function checkClick(e) {
		if (findContainerIndex(getActualTarget(e), e) >= 0) return;
		if (valueOrHandler(config.clickOutsideDeactivates, e)) return;
		if (valueOrHandler(config.allowOutsideClick, e)) return;
		e.preventDefault();
		e.stopImmediatePropagation();
	};
	var addListeners = function addListeners() {
		if (!state.active) return;
		activeFocusTraps.activateTrap(trapStack, trap);
		state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
			tryFocus(getInitialFocusNode());
		}) : tryFocus(getInitialFocusNode());
		doc.addEventListener("focusin", checkFocusIn, true);
		doc.addEventListener("mousedown", checkPointerDown, {
			capture: true,
			passive: false
		});
		doc.addEventListener("touchstart", checkPointerDown, {
			capture: true,
			passive: false
		});
		doc.addEventListener("click", checkClick, {
			capture: true,
			passive: false
		});
		doc.addEventListener("keydown", checkKey, {
			capture: true,
			passive: false
		});
		return trap;
	};
	var removeListeners = function removeListeners() {
		if (!state.active) return;
		doc.removeEventListener("focusin", checkFocusIn, true);
		doc.removeEventListener("mousedown", checkPointerDown, true);
		doc.removeEventListener("touchstart", checkPointerDown, true);
		doc.removeEventListener("click", checkClick, true);
		doc.removeEventListener("keydown", checkKey, true);
		return trap;
	};
	var mutationObserver = typeof window !== "undefined" && "MutationObserver" in window ? new MutationObserver(function checkDomRemoval(mutations) {
		if (mutations.some(function(mutation) {
			return Array.from(mutation.removedNodes).some(function(node) {
				return node === state.mostRecentlyFocusedNode;
			});
		})) tryFocus(getInitialFocusNode());
	}) : void 0;
	var updateObservedNodes = function updateObservedNodes() {
		if (!mutationObserver) return;
		mutationObserver.disconnect();
		if (state.active && !state.paused) state.containers.map(function(container) {
			mutationObserver.observe(container, {
				subtree: true,
				childList: true
			});
		});
	};
	trap = {
		get active() {
			return state.active;
		},
		get paused() {
			return state.paused;
		},
		activate: function activate(activateOptions) {
			if (state.active) return this;
			var onActivate = getOption(activateOptions, "onActivate");
			var onPostActivate = getOption(activateOptions, "onPostActivate");
			var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
			if (!checkCanFocusTrap) updateTabbableNodes();
			state.active = true;
			state.paused = false;
			state.nodeFocusedBeforeActivation = doc.activeElement;
			onActivate === null || onActivate === void 0 || onActivate();
			var finishActivation = function finishActivation() {
				if (checkCanFocusTrap) updateTabbableNodes();
				addListeners();
				updateObservedNodes();
				onPostActivate === null || onPostActivate === void 0 || onPostActivate();
			};
			if (checkCanFocusTrap) {
				checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
				return this;
			}
			finishActivation();
			return this;
		},
		deactivate: function deactivate(deactivateOptions) {
			if (!state.active) return this;
			var options = _objectSpread2({
				onDeactivate: config.onDeactivate,
				onPostDeactivate: config.onPostDeactivate,
				checkCanReturnFocus: config.checkCanReturnFocus
			}, deactivateOptions);
			clearTimeout(state.delayInitialFocusTimer);
			state.delayInitialFocusTimer = void 0;
			removeListeners();
			state.active = false;
			state.paused = false;
			updateObservedNodes();
			activeFocusTraps.deactivateTrap(trapStack, trap);
			var onDeactivate = getOption(options, "onDeactivate");
			var onPostDeactivate = getOption(options, "onPostDeactivate");
			var checkCanReturnFocus = getOption(options, "checkCanReturnFocus");
			var returnFocus = getOption(options, "returnFocus", "returnFocusOnDeactivate");
			onDeactivate === null || onDeactivate === void 0 || onDeactivate();
			var finishDeactivation = function finishDeactivation() {
				delay(function() {
					if (returnFocus) tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
					onPostDeactivate === null || onPostDeactivate === void 0 || onPostDeactivate();
				});
			};
			if (returnFocus && checkCanReturnFocus) {
				checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
				return this;
			}
			finishDeactivation();
			return this;
		},
		pause: function pause(pauseOptions) {
			if (state.paused || !state.active) return this;
			var onPause = getOption(pauseOptions, "onPause");
			var onPostPause = getOption(pauseOptions, "onPostPause");
			state.paused = true;
			onPause === null || onPause === void 0 || onPause();
			removeListeners();
			updateObservedNodes();
			onPostPause === null || onPostPause === void 0 || onPostPause();
			return this;
		},
		unpause: function unpause(unpauseOptions) {
			if (!state.paused || !state.active) return this;
			var onUnpause = getOption(unpauseOptions, "onUnpause");
			var onPostUnpause = getOption(unpauseOptions, "onPostUnpause");
			state.paused = false;
			onUnpause === null || onUnpause === void 0 || onUnpause();
			updateTabbableNodes();
			addListeners();
			updateObservedNodes();
			onPostUnpause === null || onPostUnpause === void 0 || onPostUnpause();
			return this;
		},
		updateContainerElements: function updateContainerElements(containerElements) {
			state.containers = [].concat(containerElements).filter(Boolean).map(function(element) {
				return typeof element === "string" ? doc.querySelector(element) : element;
			});
			if (state.active) updateTabbableNodes();
			updateObservedNodes();
			return this;
		}
	};
	trap.updateContainerElements(elements);
	return trap;
};
//#endregion
//#region node_modules/.pnpm/@faceless-ui+modal@3.0.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@faceless-ui/modal/dist/asModal/index.js
var __rest$1 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var itemBaseClass = "modal-item";
var asModal = (ModalComponent, slugFromArg) => {
	const ModalWrap = (props) => {
		const modal = useModal();
		const modalRef = (0, import_react.useRef)(null);
		const [layTrap, setLayTrap] = (0, import_react.useState)(false);
		const trapHasBeenLayed = (0, import_react.useRef)(false);
		const [trap, setTrap] = (0, import_react.useState)(null);
		const { modalState, classPrefix: classPrefixFromContext, containerRef, transTime, setCloseOnBlur, setBodyScrollLock, openModal } = modal;
		const { className, htmlElement: Tag = "dialog", slug: slugFromProp = "", closeOnBlur = true, lockBodyScroll = true, classPrefix: classPrefixFromProps, onEnter, onEntering, onEntered, onExit, onExiting, onExited, openOnInit, trapFocus = true, focusTrapOptions = {} } = props, rest = __rest$1(props, [
			"className",
			"htmlElement",
			"slug",
			"closeOnBlur",
			"lockBodyScroll",
			"classPrefix",
			"onEnter",
			"onEntering",
			"onEntered",
			"onExit",
			"onExiting",
			"onExited",
			"openOnInit",
			"trapFocus",
			"focusTrapOptions"
		]);
		const classPrefixToUse = classPrefixFromProps || classPrefixFromContext;
		const slug = slugFromArg || slugFromProp;
		const isOpen = modalState[slug] && modalState[slug].isOpen;
		(0, import_react.useEffect)(() => {
			if (trapFocus) {
				const currentModal = modalRef.current;
				if (trapHasBeenLayed.current === false && currentModal) {
					const newTrap = createFocusTrap(currentModal, Object.assign(Object.assign({}, focusTrapOptions), {
						fallbackFocus: (focusTrapOptions === null || focusTrapOptions === void 0 ? void 0 : focusTrapOptions.fallbackFocus) || currentModal,
						allowOutsideClick: typeof focusTrapOptions.allowOutsideClick !== "undefined" ? focusTrapOptions.allowOutsideClick : true
					}));
					setTrap(newTrap);
					trapHasBeenLayed.current = true;
				}
			}
		}, [
			trapFocus,
			layTrap,
			focusTrapOptions
		]);
		(0, import_react.useEffect)(() => {
			setLayTrap(true);
		}, []);
		(0, import_react.useEffect)(() => {
			if (trap) if (isOpen) trap.activate();
			else trap.deactivate();
			return () => {
				if (trap) trap.deactivate();
			};
		}, [isOpen, trap]);
		(0, import_react.useEffect)(() => {
			if (isOpen) setCloseOnBlur(closeOnBlur);
		}, [
			isOpen,
			closeOnBlur,
			setCloseOnBlur
		]);
		(0, import_react.useEffect)(() => {
			const currentModal = modalRef.current;
			if (currentModal) if (isOpen && lockBodyScroll) setBodyScrollLock(true, currentModal);
			else setBodyScrollLock(false, currentModal);
			return () => {
				if (currentModal) setBodyScrollLock(false, currentModal);
			};
		}, [
			isOpen,
			lockBodyScroll,
			setBodyScrollLock
		]);
		const [timedOpen, setTimedOpen] = (0, import_react.useState)(isOpen);
		(0, import_react.useEffect)(() => {
			if (!isOpen) setTimeout(() => setTimedOpen(false), transTime);
			else setTimedOpen(isOpen);
		}, [isOpen, transTime]);
		(0, import_react.useEffect)(() => {
			if (openOnInit) openModal(slug);
		}, [
			slug,
			openOnInit,
			openModal
		]);
		if (containerRef.current) {
			const baseClass = classPrefixToUse ? `${classPrefixToUse}__${itemBaseClass}` : itemBaseClass;
			const mergedClasses = [
				baseClass,
				`${baseClass}--slug-${slug}`,
				className
			].filter(Boolean).join(" ");
			const mergedAttributes = Object.assign({
				role: Tag !== "dialog" ? "dialog" : void 0,
				open: Tag === "dialog" ? timedOpen || isOpen : void 0,
				"aria-modal": true,
				"aria-label": !rest["aria-labelledby"] ? slug : void 0
			}, rest);
			return import_react_dom.createPortal((0, import_jsx_runtime.jsx)(CSSTransition, {
				nodeRef: modalRef,
				timeout: transTime,
				in: isOpen,
				classNames: generateTransitionClasses(baseClass),
				appear: true,
				onEnter,
				onEntering,
				onEntered,
				onExit,
				onExiting,
				onExited,
				children: (0, import_jsx_runtime.jsx)(Tag, Object.assign({
					ref: modalRef,
					id: (rest === null || rest === void 0 ? void 0 : rest.id) || slug,
					className: mergedClasses
				}, mergedAttributes, { children: (0, import_jsx_runtime.jsx)(ModalComponent, Object.assign({}, props, {
					isOpen,
					modal
				})) }))
			}), containerRef.current);
		}
		return null;
	};
	return ModalWrap;
};
//#endregion
//#region node_modules/.pnpm/@faceless-ui+modal@3.0.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@faceless-ui/modal/dist/Modal/index.js
var _Modal = (props) => {
	const { children } = props;
	if (children) {
		if (typeof children === "function") return (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: children(props) });
		return (0, import_jsx_runtime.jsx)(import_react.Fragment, { children });
	}
	return null;
};
var Modal = asModal(_Modal);
//#endregion
//#region node_modules/.pnpm/@faceless-ui+modal@3.0.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@faceless-ui/modal/dist/ModalContainer/index.js
var __rest = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var containerBaseClass = "modal-container";
var ModalContainer = (props) => {
	const { oneModalIsOpen, classPrefix, transTime, setContainerRef, containerRef, closeAllModals, closeOnBlur } = useModal();
	const { className, htmlElement: Tag = "div", children, onClick } = props, rest = __rest(props, [
		"className",
		"htmlElement",
		"children",
		"onClick"
	]);
	const baseClass = classPrefix ? `${classPrefix}__${containerBaseClass}` : containerBaseClass;
	const mergedClasses = [baseClass, className].filter(Boolean).join(" ");
	const mergedAttributes = Object.assign(Object.assign({}, rest), { onClick: (e) => {
		if (closeOnBlur) closeAllModals();
		if (typeof onClick === "function") onClick(e);
	} });
	return (0, import_jsx_runtime.jsx)(CSSTransition, {
		nodeRef: containerRef,
		in: oneModalIsOpen,
		timeout: transTime,
		classNames: generateTransitionClasses(baseClass),
		appear: true,
		children: (0, import_jsx_runtime.jsx)(Tag, Object.assign({
			className: mergedClasses,
			ref: setContainerRef
		}, mergedAttributes, { children: children && children }))
	});
};
//#endregion
//#region node_modules/.pnpm/body-scroll-lock@4.0.0-beta.0/node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js
function _toConsumableArray(arr) {
	if (Array.isArray(arr)) {
		for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
		return arr2;
	} else return Array.from(arr);
}
var hasPassiveEvents = false;
if (typeof window !== "undefined") {
	var passiveTestOptions = { get passive() {
		hasPassiveEvents = true;
	} };
	window.addEventListener("testPassive", null, passiveTestOptions);
	window.removeEventListener("testPassive", null, passiveTestOptions);
}
var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPosition = void 0;
var previousBodyPaddingRight = void 0;
var allowTouchMove = function allowTouchMove(el) {
	return locks.some(function(lock) {
		if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) return true;
		return false;
	});
};
var preventDefault = function preventDefault(rawEvent) {
	var e = rawEvent || window.event;
	if (allowTouchMove(e.target)) return true;
	if (e.touches.length > 1) return true;
	if (e.preventDefault) e.preventDefault();
	return false;
};
var setOverflowHidden = function setOverflowHidden(options) {
	if (previousBodyPaddingRight === void 0) {
		var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
		var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
		if (_reserveScrollBarGap && scrollBarGap > 0) {
			var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
			previousBodyPaddingRight = document.body.style.paddingRight;
			document.body.style.paddingRight = computedBodyPaddingRight + scrollBarGap + "px";
		}
	}
	if (previousBodyOverflowSetting === void 0) {
		previousBodyOverflowSetting = document.body.style.overflow;
		document.body.style.overflow = "hidden";
	}
};
var restoreOverflowSetting = function restoreOverflowSetting() {
	if (previousBodyPaddingRight !== void 0) {
		document.body.style.paddingRight = previousBodyPaddingRight;
		previousBodyPaddingRight = void 0;
	}
	if (previousBodyOverflowSetting !== void 0) {
		document.body.style.overflow = previousBodyOverflowSetting;
		previousBodyOverflowSetting = void 0;
	}
};
var setPositionFixed = function setPositionFixed() {
	return window.requestAnimationFrame(function() {
		if (previousBodyPosition === void 0) {
			previousBodyPosition = {
				position: document.body.style.position,
				top: document.body.style.top,
				left: document.body.style.left
			};
			var _window = window, scrollY = _window.scrollY, scrollX = _window.scrollX, innerHeight = _window.innerHeight;
			document.body.style.position = "fixed";
			document.body.style.top = -scrollY;
			document.body.style.left = -scrollX;
			setTimeout(function() {
				return window.requestAnimationFrame(function() {
					var bottomBarHeight = innerHeight - window.innerHeight;
					if (bottomBarHeight && scrollY >= innerHeight) document.body.style.top = -(scrollY + bottomBarHeight);
				});
			}, 300);
		}
	});
};
var restorePositionSetting = function restorePositionSetting() {
	if (previousBodyPosition !== void 0) {
		var y = -parseInt(document.body.style.top, 10);
		var x = -parseInt(document.body.style.left, 10);
		document.body.style.position = previousBodyPosition.position;
		document.body.style.top = previousBodyPosition.top;
		document.body.style.left = previousBodyPosition.left;
		window.scrollTo(x, y);
		previousBodyPosition = void 0;
	}
};
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
	return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};
var handleScroll = function handleScroll(event, targetElement) {
	var clientY = event.targetTouches[0].clientY - initialClientY;
	if (allowTouchMove(event.target)) return false;
	if (targetElement && targetElement.scrollTop === 0 && clientY > 0) return preventDefault(event);
	if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) return preventDefault(event);
	event.stopPropagation();
	return true;
};
var disableBodyScroll = function disableBodyScroll(targetElement, options) {
	if (!targetElement) {
		console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
		return;
	}
	if (locks.some(function(lock) {
		return lock.targetElement === targetElement;
	})) return;
	var lock = {
		targetElement,
		options: options || {}
	};
	locks = [].concat(_toConsumableArray(locks), [lock]);
	if (isIosDevice) setPositionFixed();
	else setOverflowHidden(options);
	if (isIosDevice) {
		targetElement.ontouchstart = function(event) {
			if (event.targetTouches.length === 1) initialClientY = event.targetTouches[0].clientY;
		};
		targetElement.ontouchmove = function(event) {
			if (event.targetTouches.length === 1) handleScroll(event, targetElement);
		};
		if (!documentListenerAdded) {
			document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
			documentListenerAdded = true;
		}
	}
};
var enableBodyScroll = function enableBodyScroll(targetElement) {
	if (!targetElement) {
		console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
		return;
	}
	locks = locks.filter(function(lock) {
		return lock.targetElement !== targetElement;
	});
	if (isIosDevice) {
		targetElement.ontouchstart = null;
		targetElement.ontouchmove = null;
		if (documentListenerAdded && locks.length === 0) {
			document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
			documentListenerAdded = false;
		}
	}
	if (isIosDevice) restorePositionSetting();
	else restoreOverflowSetting();
};
//#endregion
//#region node_modules/.pnpm/@faceless-ui+modal@3.0.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@faceless-ui/modal/dist/ModalProvider/generateCSS.js
var generateCSS = ({ classPrefix, zIndex }) => {
	const prefixToUse = classPrefix ? `${classPrefix}__` : "";
	return `
    .${prefixToUse}${containerBaseClass} {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: fixed;
      pointer-events: none;
      visibility: hidden;
      z-index: -1;
    }

    .${prefixToUse}${containerBaseClass}--appear,
    .${prefixToUse}${containerBaseClass}--appearDone,
    .${prefixToUse}${containerBaseClass}--enter,
    .${prefixToUse}${containerBaseClass}--enterDone,
    .${prefixToUse}${containerBaseClass}--exit {
      pointer-events: all;
      visibility: visible;
      z-index: ${zIndex};
    }

    .${prefixToUse}${itemBaseClass} {
      position: absolute;
      visibility: hidden;
    }

    .${prefixToUse}${itemBaseClass}--appear,
    .${prefixToUse}${itemBaseClass}--appearDone,
    .${prefixToUse}${itemBaseClass}--enter,
    .${prefixToUse}${itemBaseClass}--enterDone,
    .${prefixToUse}${itemBaseClass}--exit {
      visibility: visible;
    }
  `;
};
//#endregion
//#region node_modules/.pnpm/@faceless-ui+modal@3.0.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@faceless-ui/modal/dist/ModalProvider/reducer.js
var reducer$3 = (state, action) => {
	let newState = Object.assign({}, state);
	const { type, payload } = action;
	switch (type) {
		case "UPDATE_MODAL": {
			const { slug } = payload;
			if (slug) newState[slug] = Object.assign(Object.assign({}, newState[slug]), payload);
			break;
		}
		case "OPEN_MODAL": {
			const { slug } = payload;
			if (slug) {
				if (!(slug in newState && newState[slug].isOpen)) newState[slug] = Object.assign(Object.assign({}, newState[slug]), {
					slug,
					openedOn: Date.now(),
					isOpen: true
				});
			}
			break;
		}
		case "TOGGLE_MODAL": {
			const { slug } = payload;
			if (slug) {
				const isCurrentlyOpen = slug in newState && newState[slug].isOpen;
				newState[slug] = Object.assign(Object.assign({}, newState[slug]), {
					slug,
					openedOn: !isCurrentlyOpen ? Date.now() : void 0,
					isOpen: !isCurrentlyOpen
				});
			}
			break;
		}
		case "CLOSE_MODAL": {
			const { slug } = payload;
			if (slug) newState[slug] = Object.assign(Object.assign({}, newState[slug]), {
				slug,
				openedOn: void 0,
				isOpen: false
			});
			break;
		}
		case "REMOVE_MODAL": {
			const { slug } = payload;
			if (slug && slug in newState) delete newState[slug];
			break;
		}
		case "CLOSE_LATEST_MODAL": {
			const latestModal = Object.keys(newState).reduce((acc, slug) => {
				const modal = newState[slug];
				if (modal.isOpen && typeof modal.openedOn === "number" && (!acc || typeof acc.openedOn === "number" && modal.openedOn > acc.openedOn)) return modal;
				return acc;
			}, void 0);
			if (latestModal) newState[latestModal.slug] = Object.assign(Object.assign({}, newState[latestModal.slug]), {
				isOpen: false,
				openedOn: void 0
			});
			break;
		}
		case "CLOSE_ALL_MODALS":
			newState = Object.entries(newState).reduce((acc, [key, value]) => {
				acc[key] = Object.assign(Object.assign({}, value), {
					isOpen: false,
					openedOn: void 0
				});
				return acc;
			}, {});
			break;
		default: break;
	}
	return newState;
};
//#endregion
//#region node_modules/.pnpm/@faceless-ui+modal@3.0.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@faceless-ui/modal/dist/ModalProvider/index.js
var getSearchQuery = () => {
	if (typeof window !== "undefined") return new URLSearchParams(window.location.search);
};
var getModalParamArray = () => {
	const searchQuery = getSearchQuery();
	let params = [];
	if (searchQuery) {
		const modalParam = searchQuery.get("modal");
		if (modalParam) if (modalParam.includes(",")) params = modalParam.split(",");
		else params = [modalParam];
	}
	return params;
};
var ModalProvider = (props) => {
	const { classPrefix, minifyCSS = true, generateCSS: shouldGenerateCSS = true, zIndex = 9999, handleParamChange, children, transTime = 250 } = props;
	const containerRef = (0, import_react.useRef)(null);
	const [modalState, dispatchModalState] = (0, import_react.useReducer)(reducer$3, {}, () => {
		return getModalParamArray().reduce((acc, param) => {
			acc[param] = {
				slug: param,
				isOpen: true,
				openedOn: Date.now()
			};
			return acc;
		}, {});
	});
	const [oneIsOpen, setOneIsOpen] = (0, import_react.useState)(false);
	const [closeOnBlur, setCloseOnBlur] = (0, import_react.useState)(false);
	const [bodyScrollIsLocked, setBodyScrollIsLocked] = (0, import_react.useState)(false);
	const escIsBound = (0, import_react.useRef)(false);
	const cssString = (0, import_react.useMemo)(() => {
		if (!shouldGenerateCSS) return "";
		const newString = generateCSS({
			classPrefix,
			zIndex
		});
		return minifyCSS ? newString.replace(/\n/g, "").replace(/\s\s+/g, " ") : newString;
	}, [
		shouldGenerateCSS,
		minifyCSS,
		zIndex,
		classPrefix
	]);
	const bindEsc = (0, import_react.useCallback)((e) => {
		if (e.keyCode === 27) dispatchModalState({ type: "CLOSE_LATEST_MODAL" });
	}, []);
	(0, import_react.useEffect)(() => {
		if (!escIsBound.current) {
			document.addEventListener("keydown", (e) => bindEsc(e), false);
			escIsBound.current = true;
		}
		return () => {
			if (escIsBound.current) document.removeEventListener("keydown", (e) => bindEsc(e), false);
		};
	}, [bindEsc]);
	(0, import_react.useEffect)(() => {
		if (typeof handleParamChange === "function") handleParamChange(modalState);
		if (typeof handleParamChange === "boolean" && handleParamChange) {
			const openModals = Object.keys(modalState).filter((slug) => modalState[slug].isOpen);
			const params = new URLSearchParams();
			for (const modal of openModals) params.append("modal", modal);
			const queryWithModal = params.toString() ? `?${params}` : "";
			const newURL = `${window.location.pathname}${queryWithModal}`;
			window.history.pushState({}, "", newURL);
		}
	}, [modalState, handleParamChange]);
	(0, import_react.useEffect)(() => {
		const isOneOpen = Object.keys(modalState).some((key) => modalState[key].isOpen);
		setOneIsOpen(isOneOpen);
	}, [modalState]);
	const setBodyScrollLock = (0, import_react.useCallback)((shouldLock, excludingRef) => {
		if (excludingRef) if (shouldLock) {
			disableBodyScroll(excludingRef);
			setBodyScrollIsLocked(true);
		} else {
			enableBodyScroll(excludingRef);
			setBodyScrollIsLocked(false);
		}
	}, []);
	const setContainerRef = (0, import_react.useCallback)((ref) => {
		containerRef.current = ref;
	}, []);
	const openModal = (0, import_react.useCallback)((slug) => {
		dispatchModalState({
			type: "OPEN_MODAL",
			payload: { slug }
		});
	}, []);
	const closeModal = (0, import_react.useCallback)((slug) => {
		dispatchModalState({
			type: "CLOSE_MODAL",
			payload: { slug }
		});
	}, []);
	const closeAllModals = (0, import_react.useCallback)(() => {
		dispatchModalState({ type: "CLOSE_ALL_MODALS" });
	}, []);
	const toggleModal = (0, import_react.useCallback)((slug) => {
		dispatchModalState({
			type: "TOGGLE_MODAL",
			payload: { slug }
		});
	}, []);
	const isModalOpen = (0, import_react.useCallback)((slug) => {
		return modalState[slug] && modalState[slug].isOpen;
	}, [modalState]);
	const inheritedProps = Object.assign({}, props);
	delete inheritedProps.children;
	return (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [shouldGenerateCSS && (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: cssString } }), (0, import_jsx_runtime.jsx)(ModalContext.Provider, {
		value: Object.assign(Object.assign({}, inheritedProps), {
			transTime,
			containerRef,
			modalState,
			oneModalIsOpen: oneIsOpen,
			isModalOpen,
			closeOnBlur,
			bodyScrollIsLocked,
			classPrefix,
			closeAllModals,
			setCloseOnBlur,
			openModal,
			closeModal,
			toggleModal,
			setBodyScrollLock,
			setContainerRef
		}),
		children
	})] });
};
//#endregion
//#region node_modules/.pnpm/qs-esm@8.0.1/node_modules/qs-esm/lib/stringify.js
var has$1 = Object.prototype.hasOwnProperty;
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
var _stringify = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, sideChannel) {
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
		if (strictNullHandling) return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, "key", format) : prefix;
		obj = "";
	}
	if (isNonNullishPrimitive(obj) || isBuffer(obj)) {
		if (encoder) return [formatter(encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, "key", format)) + "=" + formatter(encoder(obj, defaults.encoder, "value", format))];
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
		pushToArray(values, _stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, valueSideChannel));
	}
	return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
	if (!opts) return defaults;
	if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
	if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
	if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") throw new TypeError("Encoder has to be a function.");
	let format = formats_default;
	if (typeof opts.format !== "undefined") {
		if (!has$1.call(formatters, opts.format)) throw new TypeError("Unknown format option provided.");
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
		pushToArray(keys, _stringify(obj[key], key, generateArrayPrefix, commaRoundTrip, options.allowEmptyArrays, options.strictNullHandling, options.skipNulls, options.encodeDotInKeys, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, sideChannel));
	}
	const joined = keys.join(options.delimiter);
	const prefix = options.addQueryPrefix === true ? "?" : "";
	return joined.length > 0 ? prefix + joined : "";
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Dialog/DialogBody/index.js
var baseClass$9 = "dialog";
var DialogBody = ({ children }) => {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)("div", {
		className: `${baseClass$9}__body`,
		children
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Dialog/context.js
var DialogContext = (0, import_react.createContext)(null);
var useDialogContext = () => {
	const ctx = (0, import_react.use)(DialogContext);
	if (!ctx) throw new Error("Dialog sub-components must be rendered inside <DialogModal>");
	return ctx;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Dialog/DialogCancel/index.js
var DialogCancel = (t0) => {
	const $ = (0, import_compiler_runtime.c)(11);
	const { label, onClick } = t0;
	const { slug, isConfirming } = useDialogContext();
	const { closeModal } = useModal();
	const { t } = useTranslation();
	let t1;
	if ($[0] !== closeModal || $[1] !== isConfirming || $[2] !== onClick || $[3] !== slug) {
		t1 = () => {
			if (isConfirming) return;
			closeModal(slug);
			onClick?.();
		};
		$[0] = closeModal;
		$[1] = isConfirming;
		$[2] = onClick;
		$[3] = slug;
		$[4] = t1;
	} else t1 = $[4];
	const handleClick = t1;
	let t2;
	if ($[5] !== handleClick || $[6] !== isConfirming || $[7] !== label || $[8] !== slug || $[9] !== t) {
		t2 = (0, import_jsx_runtime.jsx)(Button, {
			buttonStyle: "secondary",
			disabled: isConfirming,
			extraButtonProps: { "data-dialog-action": "cancel" },
			id: `${slug}-cancel`,
			margin: false,
			onClick: handleClick,
			size: "medium",
			children: label ?? t("general:cancel")
		});
		$[5] = handleClick;
		$[6] = isConfirming;
		$[7] = label;
		$[8] = slug;
		$[9] = t;
		$[10] = t2;
	} else t2 = $[10];
	return t2;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Dialog/DialogConfirm/index.js
var DialogConfirm = (t0) => {
	const $ = (0, import_compiler_runtime.c)(13);
	const { label, loadingLabel, onClick } = t0;
	const { slug, isConfirming, setConfirming } = useDialogContext();
	const { closeModal } = useModal();
	const { t } = useTranslation();
	let t1;
	if ($[0] !== closeModal || $[1] !== isConfirming || $[2] !== onClick || $[3] !== setConfirming || $[4] !== slug) {
		t1 = async () => {
			if (isConfirming) return;
			setConfirming(true);
			await onClick();
			setConfirming(false);
			closeModal(slug);
		};
		$[0] = closeModal;
		$[1] = isConfirming;
		$[2] = onClick;
		$[3] = setConfirming;
		$[4] = slug;
		$[5] = t1;
	} else t1 = $[5];
	const handleClick = t1;
	let t2;
	if ($[6] !== handleClick || $[7] !== isConfirming || $[8] !== label || $[9] !== loadingLabel || $[10] !== slug || $[11] !== t) {
		const resolvedLabel = label ?? t("general:confirm");
		t2 = (0, import_jsx_runtime.jsx)(Button, {
			disabled: isConfirming,
			extraButtonProps: { "data-dialog-action": "confirm" },
			id: `${slug}-confirm`,
			margin: false,
			onClick: handleClick,
			size: "medium",
			children: isConfirming && loadingLabel ? loadingLabel : resolvedLabel
		});
		$[6] = handleClick;
		$[7] = isConfirming;
		$[8] = label;
		$[9] = loadingLabel;
		$[10] = slug;
		$[11] = t;
		$[12] = t2;
	} else t2 = $[12];
	return t2;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Dialog/DialogFooter/index.js
var baseClass$8 = "dialog";
var DialogFooter = ({ children }) => {
	if (!children) return null;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)("div", {
		className: `${baseClass$8}__footer`,
		children
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Dialog/DialogTitle/index.js
var baseClass$7 = "dialog-title";
var DialogTitle = ({ title }) => /*#__PURE__*/ (0, import_jsx_runtime.jsx)("h4", {
	className: baseClass$7,
	children: title
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Dialog/DialogHeader/index.js
var baseClass$6 = "dialog";
var DialogHeader = (t0) => {
	const $ = (0, import_compiler_runtime.c)(12);
	const { children, className, onClose, showClose, title } = t0;
	const { slug, isConfirming } = useDialogContext();
	const { closeModal } = useModal();
	if (!title && !children && !showClose) return null;
	const t1 = showClose && `${baseClass$6}__header--has-close`;
	let t2;
	if ($[0] !== className || $[1] !== t1) {
		t2 = [
			`${baseClass$6}__header`,
			t1,
			className
		].filter(Boolean);
		$[0] = className;
		$[1] = t1;
		$[2] = t2;
	} else t2 = $[2];
	const t3 = t2.join(" ");
	let t4;
	if ($[3] !== children || $[4] !== closeModal || $[5] !== isConfirming || $[6] !== onClose || $[7] !== showClose || $[8] !== slug || $[9] !== t3 || $[10] !== title) {
		t4 = (0, import_jsx_runtime.jsxs)("div", {
			className: t3,
			children: [title ? typeof title === "string" ? (0, import_jsx_runtime.jsx)(DialogTitle, { title }) : title : null, (0, import_jsx_runtime.jsxs)("div", {
				className: `${baseClass$6}__header-end`,
				children: [children ? (0, import_jsx_runtime.jsx)("div", {
					className: `${baseClass$6}__header-extras`,
					children
				}) : null, showClose ? (0, import_jsx_runtime.jsx)(Button, {
					"aria-label": "Close",
					buttonStyle: "ghost",
					disabled: isConfirming,
					icon: (0, import_jsx_runtime.jsx)(XIcon, {}),
					margin: false,
					onClick: () => {
						if (onClose) onClose({ modalSlug: slug });
						else closeModal(slug);
					}
				}) : null]
			})]
		});
		$[3] = children;
		$[4] = closeModal;
		$[5] = isConfirming;
		$[6] = onClose;
		$[7] = showClose;
		$[8] = slug;
		$[9] = t3;
		$[10] = title;
		$[11] = t4;
	} else t4 = $[11];
	return t4;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Drawer/index.js
var baseClass$5 = "drawer";
var formatDrawerSlug = ({ slug, depth }) => `drawer_${depth}_${slug}`;
var DrawerToggler = (t0) => {
	const $ = (0, import_compiler_runtime.c)(4);
	const { slug, buttonStyle, children, className, disabled, onClick, ...rest } = t0;
	const { openModal } = useModal();
	let t1;
	if ($[0] !== onClick || $[1] !== openModal || $[2] !== slug) {
		t1 = (e) => {
			openModal(slug);
			if (typeof onClick === "function") onClick(e);
		};
		$[0] = onClick;
		$[1] = openModal;
		$[2] = slug;
		$[3] = t1;
	} else t1 = $[3];
	const handleClick = t1;
	if (buttonStyle) return (0, import_jsx_runtime.jsx)(Button, {
		buttonStyle,
		className,
		disabled,
		onClick: handleClick,
		...rest,
		children
	});
	return (0, import_jsx_runtime.jsx)("button", {
		className,
		disabled,
		onClick: handleClick,
		type: "button",
		...rest,
		children
	});
};
var Drawer = (props) => /*#__PURE__*/ (0, import_jsx_runtime.jsx)(DrawerDepthProvider, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(DrawerInner, { ...props }) });
var DrawerInner = (t0) => {
	const $ = (0, import_compiler_runtime.c)(28);
	const { slug, children, className, Header, headerActions, hoverTitle, title } = t0;
	const { t } = useTranslation();
	const { closeModal, modalState } = useModal();
	const drawerDepth = useDrawerDepth();
	const uid = (0, import_react.useId)();
	const { openDrawerDepths, registerDrawer, unregisterDrawer } = useDrawerStack();
	const isOpen = !!modalState[slug]?.isOpen;
	let t1;
	let t2;
	if ($[0] !== drawerDepth || $[1] !== isOpen || $[2] !== registerDrawer || $[3] !== uid || $[4] !== unregisterDrawer) {
		t1 = () => {
			if (isOpen) {
				registerDrawer(uid, drawerDepth);
				return () => unregisterDrawer(uid);
			}
		};
		t2 = [
			isOpen,
			uid,
			drawerDepth,
			registerDrawer,
			unregisterDrawer
		];
		$[0] = drawerDepth;
		$[1] = isOpen;
		$[2] = registerDrawer;
		$[3] = uid;
		$[4] = unregisterDrawer;
		$[5] = t1;
		$[6] = t2;
	} else {
		t1 = $[5];
		t2 = $[6];
	}
	(0, import_react.useEffect)(t1, t2);
	const layersFromTop = openDrawerDepths.filter((depth) => depth > drawerDepth).length;
	const [animateIn, setAnimateIn] = (0, import_react.useState)(isOpen);
	let t3;
	let t4;
	if ($[7] !== isOpen) {
		t3 = () => {
			setAnimateIn(isOpen);
		};
		t4 = [isOpen];
		$[7] = isOpen;
		$[8] = t3;
		$[9] = t4;
	} else {
		t3 = $[8];
		t4 = $[9];
	}
	(0, import_react.useLayoutEffect)(t3, t4);
	if (isOpen) {
		const t5 = animateIn && `${baseClass$5}--is-open`;
		let t6;
		if ($[10] !== className || $[11] !== t5) {
			t6 = [
				className,
				baseClass$5,
				t5
			].filter(Boolean);
			$[10] = className;
			$[11] = t5;
			$[12] = t6;
		} else t6 = $[12];
		const t7 = t6.join(" ");
		const t8 = `calc(${layersFromTop} * var(--spacer-3))`;
		const t9 = 100 + drawerDepth;
		let t10;
		if ($[13] !== Header || $[14] !== children || $[15] !== closeModal || $[16] !== headerActions || $[17] !== hoverTitle || $[18] !== slug || $[19] !== t || $[20] !== t7 || $[21] !== t8 || $[22] !== t9 || $[23] !== title) {
			let t11;
			if ($[25] !== closeModal || $[26] !== slug) {
				t11 = () => closeModal(slug);
				$[25] = closeModal;
				$[26] = slug;
				$[27] = t11;
			} else t11 = $[27];
			t10 = (0, import_jsx_runtime.jsxs)(Modal, {
				className: t7,
				closeOnBlur: false,
				lockBodyScroll: false,
				slug,
				style: {
					"--drawer-layer-offset": t8,
					zIndex: t9
				},
				children: [
					(0, import_jsx_runtime.jsx)("div", { className: `${baseClass$5}__blur-bg` }),
					(0, import_jsx_runtime.jsx)("button", {
						"aria-label": t("general:close"),
						className: `${baseClass$5}__close`,
						id: `close-drawer__${slug}`,
						onClick: t11,
						type: "button"
					}),
					(0, import_jsx_runtime.jsxs)("div", {
						className: `${baseClass$5}__content`,
						children: [(0, import_jsx_runtime.jsx)("div", { className: `${baseClass$5}__blur-bg-content` }), (0, import_jsx_runtime.jsxs)("div", {
							className: `${baseClass$5}__content-children`,
							children: [
								Header,
								Header === void 0 && (0, import_jsx_runtime.jsxs)("div", {
									className: `${baseClass$5}__header`,
									children: [
										(0, import_jsx_runtime.jsx)(Button, {
											"aria-label": t("general:close"),
											buttonStyle: "ghost",
											className: `${baseClass$5}__header__close`,
											icon: (0, import_jsx_runtime.jsx)(ChevronIcon, {
												direction: "left",
												size: 24
											}),
											onClick: () => closeModal(slug)
										}),
										(0, import_jsx_runtime.jsx)("h2", {
											className: `${baseClass$5}__header__title`,
											title: hoverTitle ? title : null,
											children: title
										}),
										headerActions && headerActions.length > 0 && (0, import_jsx_runtime.jsx)("div", {
											className: `${baseClass$5}__header__actions`,
											children: headerActions.map(_temp$3)
										})
									]
								}),
								children
							]
						})]
					})
				]
			});
			$[13] = Header;
			$[14] = children;
			$[15] = closeModal;
			$[16] = headerActions;
			$[17] = hoverTitle;
			$[18] = slug;
			$[19] = t;
			$[20] = t7;
			$[21] = t8;
			$[22] = t9;
			$[23] = title;
			$[24] = t10;
		} else t10 = $[24];
		return t10;
	}
	return null;
};
var DrawerDepthContext = /*#__PURE__*/ (0, import_react.createContext)(0);
var DrawerDepthProvider = (t0) => {
	const $ = (0, import_compiler_runtime.c)(3);
	const { children } = t0;
	const depth = useDrawerDepth() + 1;
	let t1;
	if ($[0] !== children || $[1] !== depth) {
		t1 = (0, import_jsx_runtime.jsx)(DrawerDepthContext, {
			value: depth,
			children
		});
		$[0] = children;
		$[1] = depth;
		$[2] = t1;
	} else t1 = $[2];
	return t1;
};
var useDrawerDepth = () => (0, import_react.use)(DrawerDepthContext);
var DrawerStackContext = /*#__PURE__*/ (0, import_react.createContext)({
	openDrawerDepths: [],
	registerDrawer: () => {},
	unregisterDrawer: () => {}
});
/**
* Tracks the depths of all currently-open drawers so each drawer can compute
* its leftward offset relative to the rest of the open stack.
*
* Why this is needed: drawers are anchored to the right edge and stack as real
* layers. When a child drawer opens on top of its parent(s), every drawer
* beneath it must slide left to peek out from underneath the active (topmost)
* drawer — and slide back when that child closes. A drawer's own depth is
* static, so it cannot know on its own whether something deeper is currently
* open; that requires shared runtime state about the whole open stack.
*
* We track real `Drawer` instances (rather than scanning modal state by slug
* name) so confirmation modals like `leave-without-saving-...` never count, and
* so stacking never depends on slug naming conventions.
*/
var DrawerStackProvider = ({ children }) => {
	const [openDrawers, setOpenDrawers] = (0, import_react.useState)({});
	const registerDrawer = (0, import_react.useCallback)((uid, depth) => {
		setOpenDrawers((prev) => prev[uid] === depth ? prev : {
			...prev,
			[uid]: depth
		});
	}, []);
	const unregisterDrawer = (0, import_react.useCallback)((uid_0) => {
		setOpenDrawers((prev_0) => {
			if (!(uid_0 in prev_0)) return prev_0;
			const next = { ...prev_0 };
			delete next[uid_0];
			return next;
		});
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		openDrawerDepths: Object.values(openDrawers),
		registerDrawer,
		unregisterDrawer
	}), [
		openDrawers,
		registerDrawer,
		unregisterDrawer
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(DrawerStackContext, {
		value,
		children
	});
};
var useDrawerStack = () => (0, import_react.use)(DrawerStackContext);
function _temp$3(action, i) {
	return (0, import_jsx_runtime.jsx)(Button, {
		buttonStyle: action.style || "secondary",
		disabled: action.disabled,
		margin: false,
		onClick: action.onClick,
		size: "medium",
		children: action.label
	}, i);
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Dialog/DialogModal/index.js
var baseClass$4 = "dialog";
var DialogModal = (t0) => {
	const $ = (0, import_compiler_runtime.c)(16);
	const { slug, children, className, closeOnBlur: t1, closeOnEsc: t2, focusTrapOptions, size: t3 } = t0;
	const closeOnBlur = t1 === void 0 ? false : t1;
	const closeOnEsc = t2 === void 0 ? true : t2;
	const size = t3 === void 0 ? "small" : t3;
	const [isConfirming, setConfirming] = (0, import_react.useState)(false);
	const drawerDepth = useDrawerDepth();
	const dialogDepth = useDialogDepth();
	let t4;
	let t5;
	if ($[0] !== closeOnEsc) {
		t4 = () => {
			if (closeOnEsc) return;
			const handler = _temp$2;
			document.addEventListener("keydown", handler, true);
			return () => document.removeEventListener("keydown", handler, true);
		};
		t5 = [closeOnEsc];
		$[0] = closeOnEsc;
		$[1] = t4;
		$[2] = t5;
	} else {
		t4 = $[1];
		t5 = $[2];
	}
	(0, import_react.useEffect)(t4, t5);
	let t6;
	if ($[3] !== children || $[4] !== className || $[5] !== closeOnBlur || $[6] !== dialogDepth || $[7] !== drawerDepth || $[8] !== focusTrapOptions || $[9] !== isConfirming || $[10] !== size || $[11] !== slug) {
		const t7 = `${baseClass$4}--${size}`;
		let t8;
		if ($[13] !== className || $[14] !== t7) {
			t8 = [
				baseClass$4,
				t7,
				className
			].filter(Boolean);
			$[13] = className;
			$[14] = t7;
			$[15] = t8;
		} else t8 = $[15];
		t6 = (0, import_jsx_runtime.jsx)(DialogDepthProvider, { children: (0, import_jsx_runtime.jsx)(DialogContext, {
			value: {
				slug,
				isConfirming,
				setConfirming
			},
			children: (0, import_jsx_runtime.jsx)(Modal, {
				closeOnBlur,
				focusTrapOptions,
				slug,
				style: { zIndex: 100 + drawerDepth + dialogDepth + 1 },
				children: (0, import_jsx_runtime.jsx)("div", {
					className: t8.join(" "),
					role: "document",
					children
				})
			})
		}) });
		$[3] = children;
		$[4] = className;
		$[5] = closeOnBlur;
		$[6] = dialogDepth;
		$[7] = drawerDepth;
		$[8] = focusTrapOptions;
		$[9] = isConfirming;
		$[10] = size;
		$[11] = slug;
		$[12] = t6;
	} else t6 = $[12];
	return t6;
};
var DialogDepthContext = /*#__PURE__*/ (0, import_react.createContext)(0);
var useDialogDepth = () => (0, import_react.use)(DialogDepthContext);
var DialogDepthProvider = (t0) => {
	const $ = (0, import_compiler_runtime.c)(3);
	const { children } = t0;
	const depth = useDialogDepth() + 1;
	let t1;
	if ($[0] !== children || $[1] !== depth) {
		t1 = (0, import_jsx_runtime.jsx)(DialogDepthContext, {
			value: depth,
			children
		});
		$[0] = children;
		$[1] = depth;
		$[2] = t1;
	} else t1 = $[2];
	return t1;
};
function _temp$2(e) {
	if (e.key === "Escape") {
		e.stopImmediatePropagation();
		e.preventDefault();
	}
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/ConfirmationModal/index.js
function ConfirmationModal(props) {
	const { body, cancelLabel, className, confirmingLabel, confirmLabel, heading, modalSlug, onCancel, onConfirm } = props;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(DialogModal, {
		className,
		slug: modalSlug,
		children: [
			/*#__PURE__*/ (0, import_jsx_runtime.jsx)(DialogHeader, {
				showClose: true,
				title: heading
			}),
			/*#__PURE__*/ (0, import_jsx_runtime.jsx)(DialogBody, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)("div", {
				className: "confirmation-modal__body",
				children: typeof body === "string" ? /*#__PURE__*/ (0, import_jsx_runtime.jsx)("p", { children: body }) : body
			}) }),
			/*#__PURE__*/ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/*#__PURE__*/ (0, import_jsx_runtime.jsx)(DialogCancel, {
				label: cancelLabel,
				onClick: onCancel
			}), /*#__PURE__*/ (0, import_jsx_runtime.jsx)(DialogConfirm, {
				label: confirmLabel,
				loadingLabel: confirmingLabel,
				onClick: onConfirm
			})] })
		]
	});
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/StayLoggedIn/index.js
var stayLoggedInModalSlug = "stay-logged-in";
var StayLoggedInModal = () => {
	const $ = (0, import_compiler_runtime.c)(11);
	const { refreshCookie } = useAuth();
	const router = useRouter();
	const { config } = useConfig();
	const { admin: t0, routes: t1 } = config;
	const { routes: t2 } = t0;
	const { logout: logoutRoute } = t2;
	const { admin: adminRoute } = t1;
	const { t } = useTranslation();
	const { startRouteTransition } = useRouteTransition();
	let t3;
	if ($[0] !== adminRoute || $[1] !== logoutRoute || $[2] !== router || $[3] !== startRouteTransition) {
		t3 = () => startRouteTransition(() => router.push(formatAdminURL({
			adminRoute,
			path: logoutRoute
		})));
		$[0] = adminRoute;
		$[1] = logoutRoute;
		$[2] = router;
		$[3] = startRouteTransition;
		$[4] = t3;
	} else t3 = $[4];
	const onConfirm = t3;
	let t4;
	if ($[5] !== refreshCookie) {
		t4 = () => {
			refreshCookie();
		};
		$[5] = refreshCookie;
		$[6] = t4;
	} else t4 = $[6];
	const onCancel = t4;
	let t5;
	if ($[7] !== onCancel || $[8] !== onConfirm || $[9] !== t) {
		t5 = (0, import_jsx_runtime.jsx)(ConfirmationModal, {
			body: t("authentication:youAreInactive"),
			cancelLabel: t("authentication:stayLoggedIn"),
			confirmLabel: t("authentication:logOut"),
			heading: t("authentication:stayLoggedIn"),
			modalSlug: stayLoggedInModalSlug,
			onCancel,
			onConfirm
		});
		$[7] = onCancel;
		$[8] = onConfirm;
		$[9] = t;
		$[10] = t5;
	} else t5 = $[10];
	return t5;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/api.js
var requests = {
	delete: (url, options = { headers: {} }) => {
		const headers = options && options.headers ? { ...options.headers } : {};
		const formattedOptions = {
			...options,
			credentials: "include",
			headers: { ...headers },
			method: "delete"
		};
		return fetch(url, formattedOptions);
	},
	get: (url, options = { headers: {} }) => {
		let query = "";
		if (options.params) query = stringify(options.params, { addQueryPrefix: true });
		return fetch(`${url}${query}`, {
			credentials: "include",
			...options
		});
	},
	patch: (url, options = { headers: {} }) => {
		const headers = options && options.headers ? { ...options.headers } : {};
		const formattedOptions = {
			...options,
			credentials: "include",
			headers: { ...headers },
			method: "PATCH"
		};
		return fetch(url, formattedOptions);
	},
	post: (url, options = { headers: {} }) => {
		const headers = options && options.headers ? { ...options.headers } : {};
		const formattedOptions = {
			...options,
			credentials: "include",
			headers: { ...headers },
			method: "post"
		};
		return fetch(`${url}`, formattedOptions);
	},
	put: (url, options = { headers: {} }) => {
		const headers = options && options.headers ? { ...options.headers } : {};
		const formattedOptions = {
			...options,
			credentials: "include",
			headers: { ...headers },
			method: "put"
		};
		return fetch(url, formattedOptions);
	}
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/Auth/index.js
var Context$6 = /*#__PURE__*/ (0, import_react.createContext)({});
var maxTimeoutMs = 2147483647;
function AuthProvider({ children, permissions: initialPermissions, user: initialUser }) {
	const pathname = usePathname();
	const router = useRouter();
	const { config } = useConfig();
	const { admin: { autoLogin, autoRefresh, routes: { inactivity: logoutInactivityRoute }, user: userSlug }, routes: { admin: adminRoute, api: apiRoute } } = config;
	const { i18n } = useTranslation();
	const { closeAllModals, openModal } = useModal();
	const { startRouteTransition } = useRouteTransition();
	const [user, setUserInMemory] = (0, import_react.useState)(initialUser);
	const [tokenInMemory, setTokenInMemory] = (0, import_react.useState)();
	const [tokenExpirationMs, setTokenExpirationMs] = (0, import_react.useState)();
	const [permissions, setPermissions] = (0, import_react.useState)(initialPermissions);
	const [forceLogoutBufferMs, setForceLogoutBufferMs] = (0, import_react.useState)(12e4);
	const [fetchedUserOnMount, setFetchedUserOnMount] = (0, import_react.useState)(false);
	const refreshTokenTimeoutRef = import_react.useRef(null);
	const reminderTimeoutRef = import_react.useRef(null);
	const forceLogOutTimeoutRef = import_react.useRef(null);
	const id = user?.id;
	const redirectToInactivityRoute = (0, import_react.useCallback)(() => {
		const baseAdminRoute = formatAdminURL({
			adminRoute,
			path: ""
		});
		startRouteTransition(() => router.replace(formatAdminURL({
			adminRoute,
			path: `${logoutInactivityRoute}${window.location.pathname.startsWith(baseAdminRoute) ? `?redirect=${encodeURIComponent(window.location.pathname)}` : ""}`
		})));
		closeAllModals();
	}, [
		router,
		adminRoute,
		logoutInactivityRoute,
		closeAllModals,
		startRouteTransition
	]);
	const revokeTokenAndExpire = (0, import_react.useCallback)(() => {
		setUserInMemory(null);
		setTokenInMemory(void 0);
		setTokenExpirationMs(void 0);
		clearTimeout(refreshTokenTimeoutRef.current);
	}, []);
	const handleReminderTimeout = useEffectEvent(() => {
		if (autoRefresh) refreshCookieEvent();
		else openModal(stayLoggedInModalSlug);
	});
	const setNewUser = (0, import_react.useCallback)((userResponse) => {
		clearTimeout(reminderTimeoutRef.current);
		clearTimeout(forceLogOutTimeoutRef.current);
		if (userResponse?.user) {
			setUserInMemory(userResponse.user);
			setTokenInMemory(userResponse.token ?? userResponse.refreshedToken);
			setTokenExpirationMs(userResponse.exp * 1e3);
			const expiresInMs = Math.max(0, Math.min((userResponse.exp ?? 0) * 1e3 - Date.now(), maxTimeoutMs));
			if (expiresInMs) {
				const nextForceLogoutBufferMs = Math.min(6e4, expiresInMs / 2);
				setForceLogoutBufferMs(nextForceLogoutBufferMs);
				reminderTimeoutRef.current = setTimeout(handleReminderTimeout, Math.max(expiresInMs - nextForceLogoutBufferMs, 0));
				forceLogOutTimeoutRef.current = setTimeout(() => {
					revokeTokenAndExpire();
					redirectToInactivityRoute();
				}, expiresInMs);
			}
		} else revokeTokenAndExpire();
	}, [redirectToInactivityRoute, revokeTokenAndExpire]);
	const refreshCookie = (0, import_react.useCallback)((forceRefresh) => {
		if (!id) return;
		const expiresInMs_0 = Math.max(0, (tokenExpirationMs ?? 0) - Date.now());
		if (forceRefresh || tokenExpirationMs && expiresInMs_0 < forceLogoutBufferMs * 2) {
			clearTimeout(refreshTokenTimeoutRef.current);
			refreshTokenTimeoutRef.current = setTimeout(async () => {
				try {
					const request = await requests.post(formatAdminURL({
						apiRoute,
						path: `/${userSlug}/refresh-token?refresh`
					}), { headers: { "Accept-Language": i18n.language } });
					if (request.status === 200) {
						const json = await request.json();
						setNewUser(json);
					} else {
						setNewUser(null);
						redirectToInactivityRoute();
					}
				} catch (e) {
					ue.error(e.message);
				}
			}, 1e3);
		}
	}, [
		apiRoute,
		i18n.language,
		redirectToInactivityRoute,
		setNewUser,
		tokenExpirationMs,
		userSlug,
		forceLogoutBufferMs,
		id
	]);
	const refreshCookieAsync = (0, import_react.useCallback)(async (skipSetUser) => {
		try {
			const request_0 = await requests.post(formatAdminURL({
				apiRoute,
				path: `/${userSlug}/refresh-token`
			}), { headers: { "Accept-Language": i18n.language } });
			if (request_0.status === 200) {
				const json_0 = await request_0.json();
				if (!skipSetUser) setNewUser(json_0);
				return json_0.user;
			}
			if (user) {
				setNewUser(null);
				redirectToInactivityRoute();
			}
		} catch (e_0) {
			ue.error(`Refreshing token failed: ${e_0.message}`);
		}
		return null;
	}, [
		apiRoute,
		i18n.language,
		redirectToInactivityRoute,
		setNewUser,
		userSlug,
		user
	]);
	const logOut = (0, import_react.useCallback)(async () => {
		try {
			if (user && user.collection) {
				setNewUser(null);
				await requests.post(formatAdminURL({
					apiRoute,
					path: `/${user.collection}/logout`
				}));
			}
		} catch (_) {}
		return true;
	}, [
		apiRoute,
		setNewUser,
		user
	]);
	const refreshPermissions = (0, import_react.useCallback)(async ({ locale } = {}) => {
		const params = stringify({ locale }, { addQueryPrefix: true });
		try {
			const request_1 = await requests.get(formatAdminURL({
				apiRoute,
				path: `/access${params}`
			}), { headers: { "Accept-Language": i18n.language } });
			if (request_1.status === 200) {
				const json_1 = await request_1.json();
				setPermissions(json_1);
			} else throw new Error(`Fetching permissions failed with status code ${request_1.status}`);
		} catch (e_1) {
			ue.error(`Refreshing permissions failed: ${e_1.message}`);
		}
	}, [apiRoute, i18n]);
	const fetchFullUser = import_react.useCallback(async () => {
		try {
			const request_2 = await requests.get(formatAdminURL({
				apiRoute,
				path: `/${userSlug}/me`
			}), {
				credentials: "include",
				headers: { "Accept-Language": i18n.language }
			});
			if (request_2.status === 200) {
				const json_2 = await request_2.json();
				setNewUser(json_2);
				return json_2?.user || null;
			}
		} catch (e_2) {
			ue.error(`Fetching user failed: ${e_2.message}`);
		}
		return null;
	}, [
		apiRoute,
		userSlug,
		i18n.language,
		setNewUser
	]);
	const refreshCookieEvent = useEffectEvent(refreshCookie);
	(0, import_react.useEffect)(() => {
		refreshCookieEvent();
	}, [pathname]);
	const fetchFullUserEvent = useEffectEvent(fetchFullUser);
	(0, import_react.useEffect)(() => {
		async function fetchUserOnMount() {
			await fetchFullUserEvent();
			setFetchedUserOnMount(true);
		}
		fetchUserOnMount();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!user && autoLogin && !autoLogin.prefillOnly) fetchFullUserEvent();
	}, [user, autoLogin]);
	(0, import_react.useEffect)(() => () => {
		clearTimeout(refreshTokenTimeoutRef.current);
		clearTimeout(reminderTimeoutRef.current);
		clearTimeout(forceLogOutTimeoutRef.current);
	}, []);
	if (!user && !fetchedUserOnMount) return null;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Context$6, {
		value: {
			fetchFullUser,
			logOut,
			permissions,
			refreshCookie,
			refreshCookieAsync,
			refreshPermissions,
			setPermissions,
			setUser: setNewUser,
			token: tokenInMemory,
			tokenExpirationMs,
			user
		},
		children
	});
}
var useAuth = () => (0, import_react.use)(Context$6);
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/Locale/index.js
var LocaleContext = /*#__PURE__*/ (0, import_react.createContext)({});
var LocaleLoadingContext = /*#__PURE__*/ (0, import_react.createContext)({
	localeIsLoading: false,
	setLocaleIsLoading: (_) => void 0
});
var fetchPreferences = async (key, baseURL) => await fetch(`${baseURL}/payload-preferences/${key}`, {
	credentials: "include",
	headers: { "Content-Type": "application/json" },
	method: "GET"
})?.then((res) => res.json());
var LocaleProvider = (t0) => {
	const $ = (0, import_compiler_runtime.c)(28);
	const { children, locale: initialLocaleFromPrefs } = t0;
	const { config: t1 } = useConfig();
	const { localization: t2, routes: t3 } = t1;
	const localization = t2 === void 0 ? false : t2;
	const { api: apiRoute } = t3;
	const { user } = useAuth();
	const defaultLocale = localization ? localization.defaultLocale : "en";
	const t4 = useSearchParams();
	let t5;
	if ($[0] !== t4) {
		t5 = t4.get("locale");
		$[0] = t4;
		$[1] = t5;
	} else t5 = $[1];
	const localeFromParams = t5;
	let t6;
	if ($[2] !== defaultLocale || $[3] !== initialLocaleFromPrefs || $[4] !== localeFromParams || $[5] !== localization) {
		t6 = () => {
			if (!localization || localization && !localization.locales.length) return {};
			return findLocaleFromCode(localization, localeFromParams) || findLocaleFromCode(localization, initialLocaleFromPrefs) || findLocaleFromCode(localization, defaultLocale) || findLocaleFromCode(localization, localization.locales[0].code);
		};
		$[2] = defaultLocale;
		$[3] = initialLocaleFromPrefs;
		$[4] = localeFromParams;
		$[5] = localization;
		$[6] = t6;
	} else t6 = $[6];
	const [locale, setLocale] = import_react.useState(t6);
	const [isLoading, setLocaleIsLoading] = (0, import_react.useState)(false);
	const prevLocale = (0, import_react.useRef)(locale);
	let t7;
	let t8;
	if ($[7] !== locale) {
		t7 = () => {
			if (locale.code !== prevLocale.current.code) setLocaleIsLoading(false);
			prevLocale.current = locale;
		};
		t8 = [locale];
		$[7] = locale;
		$[8] = t7;
		$[9] = t8;
	} else {
		t7 = $[8];
		t8 = $[9];
	}
	(0, import_react.useEffect)(t7, t8);
	let t9;
	if ($[10] !== apiRoute) {
		t9 = formatAdminURL({
			apiRoute,
			path: ""
		});
		$[10] = apiRoute;
		$[11] = t9;
	} else t9 = $[11];
	const fetchURL = t9;
	let t10;
	if ($[12] !== defaultLocale || $[13] !== fetchURL || $[14] !== localeFromParams || $[15] !== localization || $[16] !== user?.id) {
		t10 = () => {
			(async function resetLocale() {
				if (localization && user?.id) {
					const localeToUse = localeFromParams || await fetchPreferences("locale", fetchURL)?.then(_temp$1);
					const newLocale = findLocaleFromCode(localization, localeToUse) || findLocaleFromCode(localization, defaultLocale) || findLocaleFromCode(localization, localization?.locales?.[0]?.code);
					if (newLocale) setLocale(newLocale);
				}
			})();
		};
		$[12] = defaultLocale;
		$[13] = fetchURL;
		$[14] = localeFromParams;
		$[15] = localization;
		$[16] = user?.id;
		$[17] = t10;
	} else t10 = $[17];
	const t11 = user?.id;
	let t12;
	if ($[18] !== defaultLocale || $[19] !== fetchURL || $[20] !== localeFromParams || $[21] !== localization || $[22] !== t11) {
		t12 = [
			defaultLocale,
			localization,
			fetchURL,
			localeFromParams,
			t11
		];
		$[18] = defaultLocale;
		$[19] = fetchURL;
		$[20] = localeFromParams;
		$[21] = localization;
		$[22] = t11;
		$[23] = t12;
	} else t12 = $[23];
	(0, import_react.useEffect)(t10, t12);
	let t13;
	if ($[24] !== children || $[25] !== isLoading || $[26] !== locale) {
		t13 = (0, import_jsx_runtime.jsx)(LocaleContext, {
			value: locale,
			children: (0, import_jsx_runtime.jsx)(LocaleLoadingContext, {
				value: {
					localeIsLoading: isLoading,
					setLocaleIsLoading
				},
				children
			})
		});
		$[24] = children;
		$[25] = isLoading;
		$[26] = locale;
		$[27] = t13;
	} else t13 = $[27];
	return t13;
};
var useLocaleLoading = () => (0, import_react.use)(LocaleLoadingContext);
/**
* TODO: V4
* The return type of the `useLocale` hook will change in v4. It will return `null | Locale` instead of `false | {} | Locale`.
*/
var useLocale = () => (0, import_react.use)(LocaleContext);
function _temp$1(res) {
	return res.value;
}
//#endregion
//#region node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/lite/index.mjs
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar) {
	var ctor, len;
	if (foo === bar) return true;
	if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();
		if (ctor === Array) {
			if ((len = foo.length) === bar.length) while (len-- && dequal(foo[len], bar[len]));
			return len === -1;
		}
		if (!ctor || typeof foo === "object") {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}
	return foo !== foo && bar !== bar;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/deepMerge.js
/**
* Very simple, but fast deepMerge implementation. Only deepMerges objects, not arrays and clones everything.
* Do not use this if your object contains any complex objects like React Components, or if you would like to combine Arrays.
* If you only have simple objects and need a fast deepMerge, this is the function for you.
*
* obj2 takes precedence over obj1 - thus if obj2 has a key that obj1 also has, obj2's value will be used.
*
* NOTE: This must remain a 1:1 copy of `deepMergeSimple` in `@payloadcms/translations/utilities`.
*
* @param obj1 base object
* @param obj2 object to merge "into" obj1
*/ function deepMergeSimple(obj1, obj2) {
	const output = { ...obj1 };
	for (const key in obj2) {
		if (key === "__proto__" || key === "constructor" || key === "prototype") continue;
		if (Object.prototype.hasOwnProperty.call(obj2, key)) if (typeof obj2[key] === "object" && !Array.isArray(obj2[key]) && obj1[key]) output[key] = deepMergeSimple(obj1[key], obj2[key]);
		else output[key] = obj2[key];
	}
	return output;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/Preferences/index.js
var Context$5 = /*#__PURE__*/ (0, import_react.createContext)({});
var requestOptions = (value, language) => ({
	body: JSON.stringify({ value }),
	headers: {
		"Accept-Language": language,
		"Content-Type": "application/json"
	}
});
var PreferencesProvider = ({ children }) => {
	const contextRef = (0, import_react.useRef)({});
	const preferencesRef = (0, import_react.useRef)({});
	const pendingUpdate = (0, import_react.useRef)({});
	const { config } = useConfig();
	const { user } = useAuth();
	const { i18n } = useTranslation();
	const { routes: { api } } = config;
	(0, import_react.useEffect)(() => {
		if (!user) preferencesRef.current = {};
	}, [user]);
	const getPreference = (0, import_react.useCallback)(async (key) => {
		const prefs = preferencesRef.current;
		if (typeof prefs[key] !== "undefined") return prefs[key];
		const promise = new Promise((resolve) => {
			(async () => {
				const request = await requests.get(formatAdminURL({
					apiRoute: api,
					path: `/payload-preferences/${key}`
				}), {
					credentials: "include",
					headers: { "Accept-Language": i18n.language }
				});
				let value = null;
				if (request.status === 200) value = (await request.json()).value;
				preferencesRef.current[key] = value;
				resolve(value);
			})();
		});
		prefs[key] = promise;
		return promise;
	}, [
		i18n.language,
		api,
		preferencesRef
	]);
	const setPreference = (0, import_react.useCallback)(async (key_0, value_0, merge = false) => {
		if (merge === false) {
			preferencesRef.current[key_0] = value_0;
			await requests.post(formatAdminURL({
				apiRoute: api,
				path: `/payload-preferences/${key_0}`
			}), requestOptions(value_0, i18n.language));
			return;
		}
		let newValue = value_0;
		const currentPreference = await getPreference(key_0);
		if (typeof value_0 === "object" && typeof currentPreference === "object" && typeof newValue === "object") {
			if (currentPreference) newValue = deepMergeSimple(currentPreference, newValue);
			if (dequal(newValue, currentPreference)) return;
			pendingUpdate.current[key_0] = {
				...pendingUpdate.current[key_0],
				...newValue
			};
		} else {
			if (newValue === currentPreference) return;
			pendingUpdate.current[key_0] = newValue;
		}
		const updatePreference = async () => {
			if (dequal(pendingUpdate.current[key_0], preferencesRef.current[key_0])) return;
			preferencesRef.current[key_0] = pendingUpdate.current[key_0];
			await requests.post(formatAdminURL({
				apiRoute: api,
				path: `/payload-preferences/${key_0}`
			}), requestOptions(preferencesRef.current[key_0], i18n.language));
			delete pendingUpdate.current[key_0];
		};
		setTimeout(() => {
			updatePreference();
		});
	}, [
		api,
		getPreference,
		i18n.language,
		pendingUpdate
	]);
	contextRef.current.getPreference = getPreference;
	contextRef.current.setPreference = setPreference;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Context$5, {
		value: contextRef.current,
		children
	});
};
var usePreferences = () => (0, import_react.use)(Context$5);
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/hooks/useDelay.js
var useDelay = (delay, t0) => {
	const $ = (0, import_compiler_runtime.c)(9);
	const triggerOnMount = t0 === void 0 ? false : t0;
	const [hasDelayed, setHasDelayed] = import_react.useState(false);
	const triggerTimeoutRef = import_react.useRef(void 0);
	let t1;
	if ($[0] !== delay) {
		t1 = () => {
			setHasDelayed(false);
			clearTimeout(triggerTimeoutRef.current);
			triggerTimeoutRef.current = setTimeout(() => {
				setHasDelayed(true);
			}, delay);
			return () => {
				clearTimeout(triggerTimeoutRef.current);
			};
		};
		$[0] = delay;
		$[1] = t1;
	} else t1 = $[1];
	const triggerDelay = t1;
	let t2;
	let t3;
	if ($[2] !== triggerDelay || $[3] !== triggerOnMount) {
		t2 = () => {
			if (triggerOnMount) triggerDelay();
		};
		t3 = [triggerDelay, triggerOnMount];
		$[2] = triggerDelay;
		$[3] = triggerOnMount;
		$[4] = t2;
		$[5] = t3;
	} else {
		t2 = $[4];
		t3 = $[5];
	}
	import_react.useEffect(t2, t3);
	let t4;
	if ($[6] !== hasDelayed || $[7] !== triggerDelay) {
		t4 = [hasDelayed, triggerDelay];
		$[6] = hasDelayed;
		$[7] = triggerDelay;
		$[8] = t4;
	} else t4 = $[8];
	return t4;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/hooks/useDelayedRender.js
var useDelayedRender = (t0) => {
	const $ = (0, import_compiler_runtime.c)(13);
	const { delayBeforeShow, inTimeout, minShowTime, outTimeout, show } = t0;
	const totalMountTime = inTimeout + minShowTime + outTimeout;
	const [hasDelayed, triggerDelay] = useDelay(delayBeforeShow);
	const [isMounted, setIsMounted] = import_react.useState(false);
	const [isUnmounting, setIsUnmounting] = import_react.useState(false);
	const onMountTimestampRef = import_react.useRef(0);
	const unmountTimeoutRef = import_react.useRef(void 0);
	let t1;
	if ($[0] !== outTimeout) {
		t1 = () => {
			setIsUnmounting(true);
			unmountTimeoutRef.current = setTimeout(() => {
				setIsMounted(false);
				setIsUnmounting(false);
			}, outTimeout);
		};
		$[0] = outTimeout;
		$[1] = t1;
	} else t1 = $[1];
	const unmount = t1;
	let t2;
	let t3;
	if ($[2] !== hasDelayed || $[3] !== isMounted || $[4] !== show || $[5] !== totalMountTime || $[6] !== unmount) {
		t2 = () => {
			const shouldMount = hasDelayed && !isMounted && show;
			const shouldUnmount = isMounted && !show;
			if (shouldMount) {
				onMountTimestampRef.current = Date.now();
				setIsMounted(true);
			} else if (shouldUnmount) {
				const totalTimeMounted = Date.now() - onMountTimestampRef.current;
				const remainingTime = totalMountTime - totalTimeMounted;
				clearTimeout(unmountTimeoutRef.current);
				unmountTimeoutRef.current = setTimeout(unmount, Math.max(0, remainingTime));
			}
		};
		t3 = [
			isMounted,
			show,
			unmount,
			totalMountTime,
			hasDelayed
		];
		$[2] = hasDelayed;
		$[3] = isMounted;
		$[4] = show;
		$[5] = totalMountTime;
		$[6] = unmount;
		$[7] = t2;
		$[8] = t3;
	} else {
		t2 = $[7];
		t3 = $[8];
	}
	import_react.useEffect(t2, t3);
	let t4;
	if ($[9] !== isMounted || $[10] !== isUnmounting || $[11] !== triggerDelay) {
		t4 = {
			isMounted,
			isUnmounting,
			triggerDelayedRender: triggerDelay
		};
		$[9] = isMounted;
		$[10] = isUnmounting;
		$[11] = triggerDelay;
		$[12] = t4;
	} else t4 = $[12];
	return t4;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/LoadingOverlay/reducer.js
var defaultLoadingOverlayState = {
	isLoading: false,
	loaders: [],
	loadingText: "",
	overlayType: null
};
var reducer$2 = (state, action) => {
	const loadersCopy = [...state.loaders];
	const { type = "fullscreen", key = "user", loadingText } = action.payload;
	if (action.type === "add") loadersCopy.push({
		type,
		key,
		loadingText
	});
	else if (action.type === "remove") {
		const index = loadersCopy.findIndex((item) => item.key === key && item.type === type);
		loadersCopy.splice(index, 1);
	}
	const nextLoader = loadersCopy?.length > 0 ? loadersCopy[loadersCopy.length - 1] : null;
	return {
		isLoading: Boolean(nextLoader),
		loaders: loadersCopy,
		loadingText: nextLoader?.loadingText || state?.loadingText,
		overlayType: nextLoader?.type || state?.overlayType
	};
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/LoadingOverlay/index.js
var animatedDuration = 250;
var Context$4 = /*#__PURE__*/ (0, import_react.createContext)({
	isOnScreen: false,
	toggleLoadingOverlay: void 0
});
var LoadingOverlayProvider = ({ children }) => {
	const { t } = useTranslation();
	const fallbackText = t("general:loading");
	const [overlays, dispatchOverlay] = import_react.useReducer(reducer$2, defaultLoadingOverlayState);
	const { isMounted, isUnmounting, triggerDelayedRender } = useDelayedRender({
		delayBeforeShow: 1e3,
		inTimeout: animatedDuration,
		minShowTime: 500,
		outTimeout: animatedDuration,
		show: overlays.isLoading
	});
	const toggleLoadingOverlay = import_react.useCallback(({ type, isLoading, key, loadingText = fallbackText }) => {
		if (isLoading) {
			triggerDelayedRender();
			dispatchOverlay({
				type: "add",
				payload: {
					type,
					key,
					loadingText
				}
			});
		} else dispatchOverlay({
			type: "remove",
			payload: {
				type,
				key
			}
		});
	}, [triggerDelayedRender, fallbackText]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(Context$4, {
		value: {
			isOnScreen: isMounted,
			toggleLoadingOverlay
		},
		children: [isMounted && /*#__PURE__*/ (0, import_jsx_runtime.jsx)(LoadingOverlay, {
			animationDuration: `${animatedDuration}ms`,
			loadingText: overlays.loadingText || fallbackText,
			overlayType: overlays.overlayType,
			show: !isUnmounting
		}), children]
	});
};
var useLoadingOverlay = () => {
	const contextHook = import_react.use(Context$4);
	if (contextHook === void 0) throw new Error("useLoadingOverlay must be used within a LoadingOverlayProvider");
	return contextHook;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Spinner/index.js
var baseClass$3 = "spinner";
var Spinner = (t0) => {
	const $ = (0, import_compiler_runtime.c)(7);
	const { loadingText, size: t1 } = t0;
	const size = t1 === void 0 ? "md" : t1;
	const { t } = useTranslation();
	const t2 = `${baseClass$3}--${size}`;
	let t3;
	if ($[0] !== t2) {
		t3 = [baseClass$3, t2].filter(Boolean);
		$[0] = t2;
		$[1] = t3;
	} else t3 = $[1];
	const t4 = t3.join(" ");
	let t5;
	if ($[2] !== loadingText || $[3] !== size || $[4] !== t || $[5] !== t4) {
		t5 = (0, import_jsx_runtime.jsxs)("div", {
			className: t4,
			children: [(0, import_jsx_runtime.jsx)(SpinnerIcon, { size }), loadingText !== null && (0, import_jsx_runtime.jsx)("span", {
				className: `${baseClass$3}__text`,
				children: loadingText || `${t("general:loading")}...`
			})]
		});
		$[2] = loadingText;
		$[3] = size;
		$[4] = t;
		$[5] = t4;
		$[6] = t5;
	} else t5 = $[6];
	return t5;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Loading/index.js
var baseClass$2 = "loading-overlay";
var LoadingOverlay = ({ animationDuration, overlayType, show = true }) => {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)("div", {
		className: [
			baseClass$2,
			show ? `${baseClass$2}--entering` : `${baseClass$2}--exiting`,
			overlayType ? `${baseClass$2}--${overlayType}` : ""
		].filter(Boolean).join(" "),
		style: { animationDuration: animationDuration || "500ms" },
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Spinner, { size: "lg" })
	});
};
var LoadingOverlayToggle = (t0) => {
	const $ = (0, import_compiler_runtime.c)(7);
	const { name: key, type: t1, loadingText, show } = t0;
	const type = t1 === void 0 ? "fullscreen" : t1;
	const { toggleLoadingOverlay } = useLoadingOverlay();
	let t2;
	let t3;
	if ($[0] !== key || $[1] !== loadingText || $[2] !== show || $[3] !== toggleLoadingOverlay || $[4] !== type) {
		t2 = () => {
			toggleLoadingOverlay({
				type,
				isLoading: show,
				key,
				loadingText: loadingText || void 0
			});
			return () => {
				toggleLoadingOverlay({
					type,
					isLoading: false,
					key
				});
			};
		};
		t3 = [
			show,
			toggleLoadingOverlay,
			key,
			type,
			loadingText
		];
		$[0] = key;
		$[1] = loadingText;
		$[2] = show;
		$[3] = toggleLoadingOverlay;
		$[4] = type;
		$[5] = t2;
		$[6] = t3;
	} else {
		t2 = $[5];
		t3 = $[6];
	}
	import_react.useEffect(t2, t3);
	return null;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/hooks/useDebouncedCallback.js
/**
* Returns a memoized function that will only call the passed function when it hasn't been called for the wait period
* @param func The function to be called
* @param wait Wait period after function hasn't been called for
* @returns A memoized function that is debounced
*/
var useDebouncedCallback = (func, wait) => {
	const $ = (0, import_compiler_runtime.c)(3);
	const timeout = (0, import_react.useRef)(void 0);
	let t0;
	if ($[0] !== func || $[1] !== wait) {
		t0 = (...t1) => {
			const args = t1;
			const later = () => {
				clearTimeout(timeout.current);
				func(...args);
			};
			clearTimeout(timeout.current);
			timeout.current = setTimeout(later, wait);
		};
		$[0] = func;
		$[1] = wait;
		$[2] = t0;
	} else t0 = $[2];
	return t0;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/Hierarchy/index.js
var HierarchyContext = /*#__PURE__*/ (0, import_react.createContext)(void 0);
var HierarchyProvider = ({ children }) => {
	const { setPreference } = usePreferences();
	const router = useRouter();
	const { config: { routes: { admin: adminRoute, api }, serverURL } } = useConfig();
	const [baseFilter, setBaseFilter] = (0, import_react.useState)(null);
	const [collectionSlug, setCollectionSlug] = (0, import_react.useState)(null);
	const [parent, setParent] = (0, import_react.useState)(null);
	const [parentFieldName, setParentFieldName] = (0, import_react.useState)("");
	const [treeLimit, setTreeLimit] = (0, import_react.useState)(100);
	const [typeFieldName, setTypeFieldName] = (0, import_react.useState)(null);
	const [useAsTitle, setUseAsTitle] = (0, import_react.useState)(null);
	const [allowedCollections, setAllowedCollections] = (0, import_react.useState)(null);
	const [treeCache, setTreeCache] = (0, import_react.useState)(() => /* @__PURE__ */ new Map());
	const [expandedNodesByCollection, setExpandedNodesByCollection] = (0, import_react.useState)(() => /* @__PURE__ */ new Map());
	const [selectedFiltersByCollection, setSelectedFiltersByCollection] = (0, import_react.useState)(() => /* @__PURE__ */ new Map());
	const [isLoadingMore, setIsLoadingMore] = (0, import_react.useState)(false);
	const [loadingNodeId, setLoadingNodeId] = (0, import_react.useState)(null);
	const [treeRefreshKeys, setTreeRefreshKeys] = (0, import_react.useState)(() => /* @__PURE__ */ new Map());
	const getNodeChildren = (0, import_react.useCallback)((parentId) => {
		if (!collectionSlug) return [];
		const cache = treeCache.get(collectionSlug);
		if (!cache) return [];
		return cache.docs.filter((doc) => {
			const docParentId = doc[parentFieldName];
			if (parentId === null) return docParentId === null || docParentId === void 0;
			return docParentId !== null && String(docParentId) === String(parentId);
		});
	}, [
		collectionSlug,
		parentFieldName,
		treeCache
	]);
	const hydrate = (0, import_react.useCallback)((data) => {
		const { allowedCollections: newAllowedCollections, baseFilter: newBaseFilter, collectionSlug: slug, expandedNodes: newExpandedNodes, parent: newParent, parentFieldName: newParentFieldName, selectedFilters: newSelectedFilters, treeData, treeLimit: newTreeLimit, typeFieldName: newTypeFieldName, useAsTitle: newUseAsTitle } = data;
		setCollectionSlug(slug);
		if (newBaseFilter !== void 0) setBaseFilter(newBaseFilter ?? null);
		if (newAllowedCollections) setAllowedCollections(newAllowedCollections);
		if (newParentFieldName) setParentFieldName(newParentFieldName);
		if (newTreeLimit !== void 0) setTreeLimit(newTreeLimit);
		if (newTypeFieldName !== void 0) setTypeFieldName(newTypeFieldName);
		if (newParent !== void 0) setParent(newParent);
		if (newUseAsTitle !== void 0) setUseAsTitle(newUseAsTitle);
		if (treeData) setTreeCache((prev) => {
			const newCache = new Map(prev);
			const existingEntry = newCache.get(slug);
			if (newBaseFilter !== void 0 || !existingEntry) newCache.set(slug, {
				...treeData,
				baseFilter: newBaseFilter ?? null
			});
			else {
				const existingDocIds = new Set(existingEntry.docs.map((doc_0) => doc_0.id));
				const newDocs = treeData.docs.filter((doc_1) => !existingDocIds.has(doc_1.id));
				newCache.set(slug, {
					baseFilter: existingEntry.baseFilter,
					docs: [...existingEntry.docs, ...newDocs],
					loadedParents: {
						...existingEntry.loadedParents,
						...treeData.loadedParents
					}
				});
			}
			return newCache;
		});
		if (newExpandedNodes && newExpandedNodes.length > 0) setExpandedNodesByCollection((prev_0) => {
			const newMap = new Map(prev_0);
			const existingExpanded = newMap.get(slug) || /* @__PURE__ */ new Set();
			const mergedExpanded = /* @__PURE__ */ new Set([...existingExpanded, ...newExpandedNodes]);
			newMap.set(slug, mergedExpanded);
			return newMap;
		});
		if (newSelectedFilters) setSelectedFiltersByCollection((prev_1) => {
			const newMap_0 = new Map(prev_1);
			newMap_0.set(slug, newSelectedFilters);
			return newMap_0;
		});
	}, []);
	const savePreferencesDebounced = useDebouncedCallback(async (slug_0, data_0) => {
		const preferenceKey = `${PREFERENCE_KEYS.HIERARCHY_TREE}-${slug_0}`;
		const currentExpanded = expandedNodesByCollection.get(slug_0) || /* @__PURE__ */ new Set();
		const currentFilters = selectedFiltersByCollection.get(slug_0) || [];
		await setPreference(preferenceKey, {
			expandedNodes: Array.from(data_0.expanded ?? currentExpanded),
			selectedFilters: data_0.filters ?? currentFilters
		});
	}, 500);
	const toggleNodeForCollection = (0, import_react.useCallback)((slug_1, id) => {
		setExpandedNodesByCollection((prev_2) => {
			const newMap_1 = new Map(prev_2);
			const currentExpanded_0 = newMap_1.get(slug_1) || /* @__PURE__ */ new Set();
			const newExpanded = new Set(currentExpanded_0);
			if (newExpanded.has(id)) newExpanded.delete(id);
			else newExpanded.add(id);
			newMap_1.set(slug_1, newExpanded);
			savePreferencesDebounced(slug_1, { expanded: newExpanded });
			return newMap_1;
		});
	}, [savePreferencesDebounced]);
	const toggleNode = (0, import_react.useCallback)((id_0) => {
		if (!collectionSlug) return;
		toggleNodeForCollection(collectionSlug, id_0);
	}, [collectionSlug, toggleNodeForCollection]);
	const getExpandedNodesForCollection = (0, import_react.useCallback)((slug_2) => {
		return expandedNodesByCollection.get(slug_2) || /* @__PURE__ */ new Set();
	}, [expandedNodesByCollection]);
	const getTreeDataForCollection = (0, import_react.useCallback)((slug_3) => {
		return treeCache.get(slug_3) || null;
	}, [treeCache]);
	const setSelectedFilters = (0, import_react.useCallback)((filters) => {
		if (!collectionSlug) return;
		setSelectedFiltersByCollection((prev_3) => {
			const newMap_2 = new Map(prev_3);
			newMap_2.set(collectionSlug, filters);
			savePreferencesDebounced(collectionSlug, { filters });
			return newMap_2;
		});
	}, [collectionSlug, savePreferencesDebounced]);
	const selectParent = (0, import_react.useCallback)((id_1) => {
		if (!collectionSlug) return;
		const url = formatAdminURL({
			adminRoute,
			path: `/collections/${collectionSlug}${id_1 !== null ? `?${parentFieldName || "parent"}=${id_1}` : ""}`
		});
		router.push(url);
		router.refresh();
	}, [
		adminRoute,
		collectionSlug,
		parentFieldName,
		router
	]);
	const loadMoreChildren = (0, import_react.useCallback)(async (parentId_0) => {
		if (!collectionSlug || isLoadingMore) return;
		const cache_0 = treeCache.get(collectionSlug);
		if (!cache_0) return;
		const parentKey = parentId_0 === null ? "root" : String(parentId_0);
		const parentMeta = cache_0.loadedParents[parentKey];
		if (!parentMeta || !parentMeta.hasMore) return;
		setIsLoadingMore(true);
		setLoadingNodeId(parentId_0);
		try {
			const currentChildren = cache_0.docs.filter((doc_2) => {
				const docParentId_0 = doc_2[parentFieldName];
				if (parentId_0 === null) return docParentId_0 === null || docParentId_0 === void 0;
				return docParentId_0 !== null && String(docParentId_0) === String(parentId_0);
			});
			const nextPage = Math.floor(currentChildren.length / treeLimit) + 1;
			const queryString = stringify({
				limit: treeLimit,
				page: nextPage,
				sort: useAsTitle ?? "id",
				where: parentId_0 === null ? { or: [{ [parentFieldName]: { exists: false } }, { [parentFieldName]: { equals: null } }] } : { [parentFieldName]: { equals: parentId_0 } }
			}, { addQueryPrefix: true });
			const url_0 = formatAdminURL({
				apiRoute: api,
				path: `/${collectionSlug}${queryString}`,
				serverURL
			});
			const response = await fetch(url_0, { credentials: "include" });
			if (!response.ok) throw new Error("Failed to fetch more children");
			const data_1 = await response.json();
			const newDocs_0 = data_1.docs || [];
			setTreeCache((prev_4) => {
				const newCache_0 = new Map(prev_4);
				const existingEntry_0 = newCache_0.get(collectionSlug);
				if (existingEntry_0) {
					const existingDocIds_0 = new Set(existingEntry_0.docs.map((doc_3) => doc_3.id));
					const uniqueNewDocs = newDocs_0.filter((doc_4) => !existingDocIds_0.has(doc_4.id));
					newCache_0.set(collectionSlug, {
						docs: [...existingEntry_0.docs, ...uniqueNewDocs],
						loadedParents: {
							...existingEntry_0.loadedParents,
							[parentKey]: {
								hasMore: data_1.hasNextPage || false,
								totalDocs: data_1.totalDocs || 0
							}
						}
					});
				}
				return newCache_0;
			});
		} catch {} finally {
			setIsLoadingMore(false);
			setLoadingNodeId(null);
		}
	}, [
		api,
		collectionSlug,
		isLoadingMore,
		parentFieldName,
		serverURL,
		treeCache,
		treeLimit,
		useAsTitle
	]);
	const reset = (0, import_react.useCallback)(() => {
		setBaseFilter(null);
		setCollectionSlug(null);
		setParent(null);
		setParentFieldName("");
		setTreeLimit(100);
		setTypeFieldName(null);
		setUseAsTitle(null);
		setTreeCache(/* @__PURE__ */ new Map());
		setExpandedNodesByCollection(/* @__PURE__ */ new Map());
		setSelectedFiltersByCollection(/* @__PURE__ */ new Map());
		setIsLoadingMore(false);
		setLoadingNodeId(null);
	}, []);
	const refreshTree = (0, import_react.useCallback)((slug_4) => {
		setTreeCache((prev_5) => {
			const next = new Map(prev_5);
			next.delete(slug_4);
			return next;
		});
		setTreeRefreshKeys((prev_6) => {
			const next_0 = new Map(prev_6);
			next_0.set(slug_4, (next_0.get(slug_4) ?? 0) + 1);
			return next_0;
		});
	}, []);
	const value = {
		allowedCollections,
		baseFilter,
		collectionSlug,
		expandedNodes: collectionSlug && expandedNodesByCollection.has(collectionSlug) ? expandedNodesByCollection.get(collectionSlug) : /* @__PURE__ */ new Set(),
		getExpandedNodesForCollection,
		getNodeChildren,
		getTreeDataForCollection,
		hydrate,
		isLoadingMore,
		loadingNodeId,
		loadMoreChildren,
		parent,
		parentFieldName,
		refreshTree,
		reset,
		selectedFilters: collectionSlug && selectedFiltersByCollection.has(collectionSlug) ? selectedFiltersByCollection.get(collectionSlug) : [],
		selectParent,
		setSelectedFilters,
		toggleNode,
		toggleNodeForCollection,
		treeLimit,
		treeRefreshKeys,
		typeFieldName,
		useAsTitle
	};
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(HierarchyContext, {
		value,
		children
	});
};
var useHierarchy = () => {
	const context = (0, import_react.use)(HierarchyContext);
	if (!context) throw new Error("useHierarchy must be used within HierarchyProvider");
	return context;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/DocumentEvents/index.js
var Context$3 = /*#__PURE__*/ (0, import_react.createContext)({
	mostRecentUpdate: null,
	reportUpdate: () => null
});
var DocumentEventsProvider = (t0) => {
	const $ = (0, import_compiler_runtime.c)(3);
	const { children } = t0;
	const [mostRecentUpdate, reportUpdate] = (0, import_react.useState)(null);
	let t1;
	if ($[0] !== children || $[1] !== mostRecentUpdate) {
		t1 = (0, import_jsx_runtime.jsx)(Context$3, {
			value: {
				mostRecentUpdate,
				reportUpdate
			},
			children
		});
		$[0] = children;
		$[1] = mostRecentUpdate;
		$[2] = t1;
	} else t1 = $[2];
	return t1;
};
/**
* The useDocumentEvents hook provides a way of subscribing to cross-document events,
* such as updates made to nested documents within a drawer.
* This hook will report document events that are outside the scope of the document currently being edited.
*
* @link https://payloadcms.com/docs/admin/react-hooks#usedocumentevents
*/
var useDocumentEvents = () => (0, import_react.use)(Context$3);
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/icons/Warning/index.js
var paths = {
	16: "M6.285 2.915c.777-1.295 2.653-1.294 3.43 0l4.234 7.056c.8 1.333-.161 3.029-1.716 3.029H3.766c-1.554 0-2.515-1.696-1.716-3.03zm2.572.514a1 1 0 0 0-1.715 0l-4.234 7.056a1 1 0 0 0 .716 1.505l.142.01h8.467a1 1 0 0 0 .857-1.515zM8 9.499A.75.75 0 1 1 8 11a.75.75 0 0 1 0-1.5m.079-4.495a.73.73 0 0 1 .648.787l-.23 2.75a.5.5 0 0 1-.996 0L7.272 5.79A.73.73 0 0 1 8 5z",
	24: "M10.257 6.06c.764-1.36 2.722-1.36 3.486 0l5.04 8.96c.75 1.333-.213 2.98-1.743 2.98H6.96c-1.53 0-2.493-1.647-1.743-2.98l.87.49a1 1 0 0 0 .733 1.48l.14.01h10.08a1 1 0 0 0 .872-1.49l-.001-.001-5.04-8.96a1 1 0 0 0-1.742 0l-5.041 8.96-.871-.49zM12 14.003a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M12 8.5c.425 0 .76.36.73.785l-.231 3.25a.5.5 0 0 1-.998 0l-.232-3.25A.733.733 0 0 1 12 8.5"
};
var WarningIcon = ({ className, size = 24 }) => /*#__PURE__*/ (0, import_jsx_runtime.jsx)("svg", {
	className: [
		"icon",
		"icon--warning",
		className
	].filter(Boolean).join(" "),
	fill: "none",
	height: size,
	viewBox: `0 0 ${size} ${size}`,
	width: size,
	xmlns: "http://www.w3.org/2000/svg",
	children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)("path", {
		clipRule: "evenodd",
		d: paths[size],
		fill: "currentColor",
		fillRule: "evenodd"
	})
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/UploadHandlers/index.js
var Context$2 = /*#__PURE__*/ import_react.createContext(null);
var UploadHandlersProvider = (t0) => {
	const $ = (0, import_compiler_runtime.c)(6);
	const { children } = t0;
	const [uploadHandlers, setUploadHandlers] = (0, import_react.useState)(_temp);
	let t1;
	if ($[0] !== uploadHandlers) {
		t1 = (t2) => {
			const { collectionSlug } = t2;
			return uploadHandlers.get(collectionSlug);
		};
		$[0] = uploadHandlers;
		$[1] = t1;
	} else t1 = $[1];
	const getUploadHandler = t1;
	let t2;
	if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
		t2 = (t3) => {
			const { collectionSlug: collectionSlug_0, handler } = t3;
			setUploadHandlers((uploadHandlers_0) => {
				const clone = new Map(uploadHandlers_0);
				clone.set(collectionSlug_0, handler);
				return clone;
			});
		};
		$[2] = t2;
	} else t2 = $[2];
	const setUploadHandler = t2;
	let t3;
	if ($[3] !== children || $[4] !== getUploadHandler) {
		t3 = (0, import_jsx_runtime.jsx)(Context$2, {
			value: {
				getUploadHandler,
				setUploadHandler
			},
			children
		});
		$[3] = children;
		$[4] = getUploadHandler;
		$[5] = t3;
	} else t3 = $[5];
	return t3;
};
var useUploadHandlers = () => {
	const context = import_react.use(Context$2);
	if (context === null) throw new Error("useUploadHandlers must be used within UploadHandlersProvider");
	return context;
};
function _temp() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/RouteCache/index.js
var Context$1 = /*#__PURE__*/ (0, import_react.createContext)({
	cachingEnabled: true,
	clearRouteCache: () => {}
});
var RouteCache = (t0) => {
	const $ = (0, import_compiler_runtime.c)(17);
	const { cachingEnabled: t1, children } = t0;
	const cachingEnabled = t1 === void 0 ? true : t1;
	const pathname = usePathname();
	const router = useRouter();
	const clearAfterPathnameChange = (0, import_react.useRef)(false);
	let t2;
	if ($[0] !== router) {
		t2 = () => {
			router.refresh();
		};
		$[0] = router;
		$[1] = t2;
	} else t2 = $[1];
	const clearRouteCache = t2;
	let t3;
	if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
		t3 = () => {
			const handlePopState = () => {
				clearAfterPathnameChange.current = true;
			};
			window.addEventListener("popstate", handlePopState);
			return () => {
				window.removeEventListener("popstate", handlePopState);
			};
		};
		$[2] = t3;
	} else t3 = $[2];
	let t4;
	if ($[3] !== router) {
		t4 = [router];
		$[3] = router;
		$[4] = t4;
	} else t4 = $[4];
	(0, import_react.useEffect)(t3, t4);
	let t5;
	if ($[5] !== cachingEnabled || $[6] !== clearRouteCache) {
		t5 = (pathname_0) => {
			if (cachingEnabled || clearAfterPathnameChange.current) {
				clearAfterPathnameChange.current = false;
				clearRouteCache();
			}
		};
		$[5] = cachingEnabled;
		$[6] = clearRouteCache;
		$[7] = t5;
	} else t5 = $[7];
	const handlePathnameChange = useEffectEvent(t5);
	let t6;
	if ($[8] !== handlePathnameChange || $[9] !== pathname) {
		t6 = () => {
			handlePathnameChange(pathname);
		};
		$[8] = handlePathnameChange;
		$[9] = pathname;
		$[10] = t6;
	} else t6 = $[10];
	let t7;
	if ($[11] !== pathname) {
		t7 = [pathname];
		$[11] = pathname;
		$[12] = t7;
	} else t7 = $[12];
	(0, import_react.useEffect)(t6, t7);
	let t8;
	if ($[13] !== cachingEnabled || $[14] !== children || $[15] !== clearRouteCache) {
		t8 = (0, import_jsx_runtime.jsx)(Context$1, {
			value: {
				cachingEnabled,
				clearRouteCache
			},
			children
		});
		$[13] = cachingEnabled;
		$[14] = children;
		$[15] = clearRouteCache;
		$[16] = t8;
	} else t8 = $[16];
	return t8;
};
var useRouteCache = () => (0, import_react.use)(Context$1);
//#endregion
//#region node_modules/.pnpm/@faceless-ui+window-info@3.0.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@faceless-ui/window-info/dist/WindowInfoProvider/context.js
var WindowInfoContext = (0, import_react.createContext)({});
//#endregion
//#region node_modules/.pnpm/@faceless-ui+window-info@3.0.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@faceless-ui/window-info/dist/useWindowInfo/index.js
var useWindowInfo$1 = () => (0, import_react.useContext)(WindowInfoContext);
//#endregion
//#region node_modules/.pnpm/@faceless-ui+window-info@3.0.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@faceless-ui/window-info/dist/WindowInfo/index.js
var WindowInfo = (props) => {
	const { children } = props;
	const windowInfo = useWindowInfo$1();
	if (children) {
		if (typeof children === "function") return import_react.createElement(import_react.Fragment, null, children(windowInfo));
		return import_react.createElement(import_react.Fragment, null, children);
	}
	return null;
};
//#endregion
//#region node_modules/.pnpm/@faceless-ui+window-info@3.0.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@faceless-ui/window-info/dist/WindowInfoProvider/index.js
var reducer$1 = (state, action) => {
	const { payload: { breakpoints, animationRef } } = action;
	animationRef.current = null;
	const { eventsFired: prevEventsFired } = state;
	const { documentElement: { style, clientWidth, clientHeight } } = document;
	const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
	const viewportWidth = `${clientWidth / 100}px`;
	const viewportHeight = `${clientHeight / 100}px`;
	const newState = {
		width: windowWidth,
		height: windowHeight,
		"--vw": viewportWidth,
		"--vh": viewportHeight,
		breakpoints: breakpoints ? Object.keys(breakpoints).reduce((matchMediaBreakpoints, key) => Object.assign(Object.assign({}, matchMediaBreakpoints), { [key]: window.matchMedia(breakpoints[key]).matches }), {}) : {},
		eventsFired: prevEventsFired + 1
	};
	style.setProperty("--vw", viewportWidth);
	style.setProperty("--vh", viewportHeight);
	return newState;
};
var WindowInfoProvider$1 = (props) => {
	const { breakpoints, children } = props;
	const animationRef = (0, import_react.useRef)(null);
	const [state, dispatch] = (0, import_react.useReducer)(reducer$1, {
		width: void 0,
		height: void 0,
		"--vw": "",
		"--vh": "",
		breakpoints: {},
		eventsFired: 0
	});
	const requestAnimation = (0, import_react.useCallback)(() => {
		if (animationRef.current) cancelAnimationFrame(animationRef.current);
		animationRef.current = requestAnimationFrame(() => dispatch({
			type: "UPDATE",
			payload: {
				breakpoints,
				animationRef
			}
		}));
	}, [breakpoints]);
	const requestThrottledAnimation = (0, import_react.useCallback)(() => {
		setTimeout(() => {
			requestAnimation();
		}, 500);
	}, [requestAnimation]);
	(0, import_react.useEffect)(() => {
		window.addEventListener("resize", requestAnimation);
		window.addEventListener("orientationchange", requestThrottledAnimation);
		return () => {
			window.removeEventListener("resize", requestAnimation);
			window.removeEventListener("orientationchange", requestThrottledAnimation);
		};
	}, [requestAnimation, requestThrottledAnimation]);
	(0, import_react.useEffect)(() => {
		if (state.eventsFired === 0) dispatch({
			type: "UPDATE",
			payload: {
				breakpoints,
				animationRef
			}
		});
	}, [breakpoints, state]);
	return import_react.createElement(WindowInfoContext.Provider, { value: Object.assign({}, state) }, children && children);
};
//#endregion
//#region node_modules/.pnpm/@faceless-ui+window-info@3.0.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@faceless-ui/window-info/dist/withWindowInfo/index.js
var withWindowInfo = (PassedComponent) => {
	const WindowInfoWrap = (props) => {
		const windowInfoContext = useWindowInfo$1();
		return import_react.createElement(PassedComponent, Object.assign({}, props, { windowInfo: windowInfoContext }));
	};
	return WindowInfoWrap;
};
//#endregion
//#region node_modules/.pnpm/@faceless-ui+window-info@3.0.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@faceless-ui/window-info/dist/index.js
var dist_exports = /* @__PURE__ */ __exportAll({
	WindowInfo: () => WindowInfo,
	WindowInfoContext: () => WindowInfoContext,
	WindowInfoProvider: () => WindowInfoProvider$1,
	useWindowInfo: () => useWindowInfo$1,
	withWindowInfo: () => withWindowInfo
});
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/Nav/context.js
/**
* @internal
*/
var NavContext = /*#__PURE__*/ import_react.createContext({
	hydrated: false,
	navOpen: true,
	navRef: null,
	setNavOpen: () => {}
});
var useNav = () => import_react.use(NavContext);
var getNavPreference = async (getPreference) => {
	const preferredState = (await getPreference(PREFERENCE_KEYS.NAV))?.open;
	if (typeof preferredState === "boolean") return preferredState;
	else return true;
};
/**
* @internal
*/
var NavProvider = ({ children, initialIsOpen }) => {
	const { breakpoints: { l: largeBreak, m: midBreak, s: smallBreak } } = useWindowInfo$1();
	const pathname = usePathname();
	const { getPreference } = usePreferences();
	const navRef = (0, import_react.useRef)(null);
	const [navOpen, setNavOpen] = import_react.useState(initialIsOpen);
	const [hydrated, setHydrated] = import_react.useState(false);
	(0, import_react.useEffect)(() => {
		if (largeBreak === false) {
			const setNavFromPreferences = async () => {
				const preferredState = await getNavPreference(getPreference);
				setNavOpen(preferredState);
			};
			setNavFromPreferences();
		}
	}, [
		largeBreak,
		getPreference,
		setNavOpen
	]);
	(0, import_react.useEffect)(() => {
		if (smallBreak === true) setNavOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (navRef.current) if (navOpen && midBreak) navRef.current.style.overscrollBehavior = "contain";
		else navRef.current.style.overscrollBehavior = "auto";
	}, [navOpen, midBreak]);
	(0, import_react.useEffect)(() => {
		if (largeBreak === true || midBreak === true || smallBreak === true) setNavOpen(false);
		setHydrated(true);
	}, [
		largeBreak,
		midBreak,
		smallBreak
	]);
	(0, import_react.useEffect)(() => {
		return () => {
			if (navRef.current) navRef.current.style.overscrollBehavior = "auto";
		};
	}, []);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(NavContext, {
		value: {
			hydrated,
			navOpen,
			navRef,
			setNavOpen
		},
		children
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/StepNav/context.js
var useStepNav = () => (0, import_react.use)(Context);
var Context = /*#__PURE__*/ (0, import_react.createContext)({
	setStepNav: () => {},
	stepNav: []
});
var StepNavProvider = (t0) => {
	const $ = (0, import_compiler_runtime.c)(4);
	const { children } = t0;
	let t1;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t1 = [];
		$[0] = t1;
	} else t1 = $[0];
	const [stepNav, setStepNav] = (0, import_react.useState)(t1);
	let t2;
	if ($[1] !== children || $[2] !== stepNav) {
		t2 = (0, import_jsx_runtime.jsx)(Context, {
			value: {
				setStepNav,
				stepNav
			},
			children
		});
		$[1] = children;
		$[2] = stepNav;
		$[3] = t2;
	} else t2 = $[3];
	return t2;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/ClickOutside/index.js
var ClickOutsideContext = /*#__PURE__*/ (0, import_react.createContext)(null);
var ClickOutsideProvider = ({ children }) => {
	const listeners = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	(0, import_react.useEffect)(() => {
		const handleClick = (event) => {
			listeners.current.forEach(({ handler, ref }) => {
				if (ref.current && !ref.current.contains(event.target)) handler();
			});
		};
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, []);
	const register = (listener) => listeners.current.add(listener);
	const unregister = (listener) => listeners.current.delete(listener);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ClickOutsideContext, {
		value: {
			register,
			unregister
		},
		children
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/ClientFunction/index.js
var ModifyClientFunctionContext = /*#__PURE__*/ import_react.createContext({
	addClientFunction: () => null,
	removeClientFunction: () => null
});
var ClientFunctionsContext = /*#__PURE__*/ import_react.createContext({});
var ClientFunctionProvider = (t0) => {
	const $ = (0, import_compiler_runtime.c)(6);
	const { children } = t0;
	let t1;
	if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
		t1 = {};
		$[0] = t1;
	} else t1 = $[0];
	const [clientFunctions, setClientFunctions] = import_react.useState(t1);
	let t2;
	if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
		t2 = (args) => {
			setClientFunctions((state) => {
				const newState = { ...state };
				newState[args.key] = args.func;
				return newState;
			});
		};
		$[1] = t2;
	} else t2 = $[1];
	const addClientFunction = t2;
	let t3;
	if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
		t3 = (args_0) => {
			setClientFunctions((state_0) => {
				const newState_0 = { ...state_0 };
				delete newState_0[args_0.key];
				return newState_0;
			});
		};
		$[2] = t3;
	} else t3 = $[2];
	const removeClientFunction = t3;
	let t4;
	if ($[3] !== children || $[4] !== clientFunctions) {
		t4 = (0, import_jsx_runtime.jsx)(ModifyClientFunctionContext, {
			value: {
				addClientFunction,
				removeClientFunction
			},
			children: (0, import_jsx_runtime.jsx)(ClientFunctionsContext, {
				value: clientFunctions,
				children
			})
		});
		$[3] = children;
		$[4] = clientFunctions;
		$[5] = t4;
	} else t4 = $[5];
	return t4;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/RouteTransition/ProgressBar/index.js
var transitionDuration = 200;
var baseClass$1 = "progress-bar";
var initialDelay = 150;
/**
* Renders a progress bar that shows the progress of a route transition.
* Place this at the root of your application, inside of the `RouteTransitionProvider`.
* When a transition is triggered, the progress bar will show the progress of that transition and exit when the transition is complete.
* @returns A progress bar that shows the progress of a route transition
* @example
* import { RouteTransitionProvider, ProgressBar, Link } from '@payloadcms/ui'
* const App = () => (
* <RouteTransitionProvider>
*  <ProgressBar />
*  <Link href="/somewhere">Go Somewhere</Link>
* </RouteTransitionProvider>
*/
var ProgressBar = () => {
	const $ = (0, import_compiler_runtime.c)(9);
	const { isTransitioning, transitionProgress } = useRouteTransition();
	const [progressToShow, setProgressToShow] = import_react.useState(null);
	const shouldDelayProgress = (0, import_react.useRef)(true);
	let t0;
	let t1;
	if ($[0] !== isTransitioning || $[1] !== transitionProgress) {
		t0 = () => {
			let clearTimerID;
			let delayTimerID;
			if (isTransitioning) if (shouldDelayProgress.current) delayTimerID = setTimeout(() => {
				setProgressToShow(transitionProgress);
				shouldDelayProgress.current = false;
			}, initialDelay);
			else setProgressToShow(transitionProgress);
			else {
				shouldDelayProgress.current = true;
				setProgressToShow(1);
				clearTimerID = setTimeout(() => {
					setProgressToShow(null);
				}, transitionDuration * 2);
			}
			return () => {
				clearTimeout(clearTimerID);
				clearTimeout(delayTimerID);
			};
		};
		t1 = [isTransitioning, transitionProgress];
		$[0] = isTransitioning;
		$[1] = transitionProgress;
		$[2] = t0;
		$[3] = t1;
	} else {
		t0 = $[2];
		t1 = $[3];
	}
	(0, import_react.useEffect)(t0, t1);
	if (typeof progressToShow === "number") {
		const t2 = progressToShow === 1 && `${baseClass$1}--fade-out`;
		let t3;
		if ($[4] !== t2) {
			t3 = [baseClass$1, t2].filter(Boolean);
			$[4] = t2;
			$[5] = t3;
		} else t3 = $[5];
		const t4 = t3.join(" ");
		let t5;
		if ($[6] !== progressToShow || $[7] !== t4) {
			t5 = (0, import_jsx_runtime.jsx)("div", {
				className: t4,
				style: { "--transition-duration": `${transitionDuration}ms` },
				children: (0, import_jsx_runtime.jsx)("div", {
					className: `${baseClass$1}__progress`,
					style: { width: `${(progressToShow || 0) * 100}%` }
				})
			});
			$[6] = progressToShow;
			$[7] = t4;
			$[8] = t5;
		} else t5 = $[8];
		return t5;
	}
	return null;
};
//#endregion
//#region node_modules/.pnpm/@faceless-ui+scroll-info@2.0.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@faceless-ui/scroll-info/dist/ScrollInfoProvider/context.js
var ScrollInfoContext = (0, import_react.createContext)({});
//#endregion
//#region node_modules/.pnpm/@faceless-ui+scroll-info@2.0.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/@faceless-ui/scroll-info/dist/ScrollInfoProvider/index.js
var reducer = (state, payload) => {
	const { timestamp, animationRef } = payload;
	animationRef.current = null;
	const { x: prevScrollX, y: prevScrollY, xDirection: prevXDirection, yDirection: prevYDirection, eventsFired: prevEventsFired, hasScrolled: prevHasScrolled } = state;
	const hasScrolled = prevHasScrolled || Boolean(timestamp);
	const currentScrollX = hasScrolled ? window.pageXOffset : 0;
	const currentScrollY = hasScrolled ? window.pageYOffset : 0;
	const eventsFired = hasScrolled ? prevEventsFired + 1 : prevEventsFired;
	const xDifference = currentScrollX - prevScrollX;
	const yDifference = currentScrollY - prevScrollY;
	const xPercentage = currentScrollX / (document.body.scrollWidth - window.innerWidth) * 100;
	const yPercentage = currentScrollY / (document.body.scrollHeight - window.innerHeight) * 100;
	const totalPercentage = (xPercentage + yPercentage) / 2;
	return {
		x: currentScrollX,
		y: currentScrollY,
		xDifference,
		yDifference,
		xDirection: xDifference > 0 ? "right" : xDifference < 0 ? "left" : prevXDirection,
		yDirection: yDifference > 0 ? "down" : yDifference < 0 ? "up" : prevYDirection,
		xPercentage,
		yPercentage,
		totalPercentage,
		eventsFired,
		hasScrolled
	};
};
var ScrollInfoProvider = (props) => {
	const { children } = props;
	const animationRef = (0, import_react.useRef)(null);
	const [state, dispatch] = (0, import_react.useReducer)(reducer, {
		x: 0,
		y: 0,
		xDifference: 0,
		yDifference: 0,
		xDirection: void 0,
		yDirection: void 0,
		xPercentage: 0,
		yPercentage: 0,
		totalPercentage: 0,
		eventsFired: 0,
		hasScrolled: false
	});
	const requestAnimation = (0, import_react.useCallback)((e) => {
		if (animationRef.current) cancelAnimationFrame(animationRef.current);
		animationRef.current = requestAnimationFrame((timestamp) => {
			dispatch({
				e,
				timestamp,
				animationRef
			});
		});
	}, []);
	(0, import_react.useEffect)(() => {
		window.addEventListener("scroll", requestAnimation);
		return () => {
			window.removeEventListener("scroll", requestAnimation);
		};
	}, [requestAnimation]);
	return import_react.createElement(ScrollInfoContext.Provider, { value: Object.assign({}, state) }, children && children);
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/elements/CloseModalOnRouteChange/index.js
function CloseModalOnRouteChange() {
	const $ = (0, import_compiler_runtime.c)(6);
	const { closeAllModals } = useModal();
	const pathname = usePathname();
	let t0;
	if ($[0] !== closeAllModals) {
		t0 = () => {
			closeAllModals();
		};
		$[0] = closeAllModals;
		$[1] = t0;
	} else t0 = $[1];
	const closeAllModalsEffectEvent = useEffectEvent(t0);
	const initialRenderRef = (0, import_react.useRef)(true);
	let t1;
	if ($[2] !== closeAllModalsEffectEvent) {
		t1 = () => {
			if (initialRenderRef.current) {
				initialRenderRef.current = false;
				return;
			}
			closeAllModalsEffectEvent();
		};
		$[2] = closeAllModalsEffectEvent;
		$[3] = t1;
	} else t1 = $[3];
	let t2;
	if ($[4] !== pathname) {
		t2 = [pathname];
		$[4] = pathname;
		$[5] = t2;
	} else t2 = $[5];
	(0, import_react.useEffect)(t1, t2);
	return null;
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/WindowInfo/index.js
var { WindowInfoProvider } = dist_exports && "WindowInfoProvider" in dist_exports ? dist_exports : { WindowInfoProvider: void 0 };
var { useWindowInfo } = dist_exports && "useWindowInfo" in dist_exports ? dist_exports : { useWindowInfo: void 0 };
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/ToastContainer/index.js
var ToastContainer = ({ config }) => {
	const { admin: { toast: { duration, expand, limit, position } = {} } = {} } = config;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)($e, {
		className: "payload-toast-container",
		closeButton: true,
		dir: "undefined",
		duration: duration ?? 4e3,
		expand: expand ?? false,
		gap: 8,
		icons: {
			close: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(XIcon, { size: 24 }),
			error: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(WarningIcon, {}),
			info: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(InfoIcon, {}),
			success: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CheckIcon, { size: 24 }),
			warning: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(WarningIcon, {})
		},
		offset: {
			bottom: "var(--spacer-6)",
			right: "var(--spacer-6)"
		},
		position: position ?? "bottom-right",
		style: { width: "280px" },
		theme: "dark",
		toastOptions: {
			classNames: {
				closeButton: "payload-toast-close-button",
				content: "toast-content",
				error: "toast-error",
				icon: "toast-icon",
				info: "toast-info",
				success: "toast-success",
				title: "toast-title",
				toast: "payload-toast-item",
				warning: "toast-warning"
			},
			unstyled: true
		},
		visibleToasts: limit ?? 5
	});
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/providers/Root/index.js
var RootProvider = (t0) => {
	const $ = (0, import_compiler_runtime.c)(17);
	const { children, config, dateFNSKey, fallbackLang, highContrastMode, isNavOpen, languageCode, languageOptions, locale, permissions, RouterAdapter, serverFunction, theme, translations, user } = t0;
	const dndContextID = import_react.useId();
	let t1;
	if ($[0] !== RouterAdapter || $[1] !== children || $[2] !== config || $[3] !== dateFNSKey || $[4] !== dndContextID || $[5] !== fallbackLang || $[6] !== highContrastMode || $[7] !== isNavOpen || $[8] !== languageCode || $[9] !== languageOptions || $[10] !== locale || $[11] !== permissions || $[12] !== serverFunction || $[13] !== theme || $[14] !== translations || $[15] !== user) {
		t1 = (0, import_jsx_runtime.jsxs)(ClickOutsideProvider, { children: [(0, import_jsx_runtime.jsx)(RouterAdapter, { children: (0, import_jsx_runtime.jsx)(ServerFunctionsProvider, {
			serverFunction,
			children: (0, import_jsx_runtime.jsx)(RouteTransitionProvider, { children: (0, import_jsx_runtime.jsx)(RouteCache, {
				cachingEnabled: process.env.NEXT_PUBLIC_ENABLE_ROUTER_CACHE_REFRESH === "true",
				children: (0, import_jsx_runtime.jsx)(ConfigProvider, {
					config,
					children: (0, import_jsx_runtime.jsx)(ClientFunctionProvider, { children: (0, import_jsx_runtime.jsx)(TranslationProvider, {
						dateFNSKey,
						fallbackLang,
						language: languageCode,
						languageOptions,
						translations,
						children: (0, import_jsx_runtime.jsx)(WindowInfoProvider, {
							breakpoints: {
								l: "(max-width: 1440px)",
								m: "(max-width: 1024px)",
								s: "(max-width: 768px)",
								xs: "(max-width: 400px)"
							},
							children: (0, import_jsx_runtime.jsx)(ScrollInfoProvider, { children: (0, import_jsx_runtime.jsx)(ModalProvider, {
								classPrefix: "payload",
								transTime: 0,
								zIndex: "var(--z-modal)",
								children: (0, import_jsx_runtime.jsxs)(DrawerStackProvider, { children: [(0, import_jsx_runtime.jsx)(CloseModalOnRouteChange, {}), (0, import_jsx_runtime.jsxs)(AuthProvider, {
									permissions,
									user,
									children: [
										(0, import_jsx_runtime.jsx)(PreferencesProvider, { children: (0, import_jsx_runtime.jsx)(HierarchyProvider, { children: (0, import_jsx_runtime.jsx)(ThemeProvider, {
											highContrastMode,
											theme,
											children: (0, import_jsx_runtime.jsx)(LocaleProvider, {
												locale,
												children: (0, import_jsx_runtime.jsx)(StepNavProvider, { children: (0, import_jsx_runtime.jsx)(LoadingOverlayProvider, { children: (0, import_jsx_runtime.jsx)(DocumentEventsProvider, { children: (0, import_jsx_runtime.jsx)(NavProvider, {
													initialIsOpen: isNavOpen,
													children: (0, import_jsx_runtime.jsx)(UploadHandlersProvider, { children: (0, import_jsx_runtime.jsx)(DndContext, {
														collisionDetection: pointerWithin,
														id: dndContextID,
														children
													}) })
												}) }) }) })
											})
										}) }) }),
										(0, import_jsx_runtime.jsx)(ModalContainer, {}),
										(0, import_jsx_runtime.jsx)(StayLoggedInModal, {})
									]
								})] })
							}) })
						})
					}) })
				})
			}) })
		}) }), (0, import_jsx_runtime.jsx)(ToastContainer, { config })] });
		$[0] = RouterAdapter;
		$[1] = children;
		$[2] = config;
		$[3] = dateFNSKey;
		$[4] = dndContextID;
		$[5] = fallbackLang;
		$[6] = highContrastMode;
		$[7] = isNavOpen;
		$[8] = languageCode;
		$[9] = languageOptions;
		$[10] = locale;
		$[11] = permissions;
		$[12] = serverFunction;
		$[13] = theme;
		$[14] = translations;
		$[15] = user;
		$[16] = t1;
	} else t1 = $[16];
	return t1;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/views/NotFound/index.client.js
var baseClass = "not-found";
var NotFoundClient = () => {
	const $ = (0, import_compiler_runtime.c)(7);
	const { setStepNav } = useStepNav();
	const { t } = useTranslation();
	const { config: t0 } = useConfig();
	const { routes: t1 } = t0;
	const { admin: adminRoute } = t1;
	let t2;
	let t3;
	if ($[0] !== setStepNav || $[1] !== t) {
		t2 = () => {
			setStepNav([{ label: t("general:notFound") }]);
		};
		t3 = [setStepNav, t];
		$[0] = setStepNav;
		$[1] = t;
		$[2] = t2;
		$[3] = t3;
	} else {
		t2 = $[2];
		t3 = $[3];
	}
	(0, import_react.useEffect)(t2, t3);
	let t4;
	if ($[4] !== adminRoute || $[5] !== t) {
		t4 = (0, import_jsx_runtime.jsx)("div", {
			className: baseClass,
			children: (0, import_jsx_runtime.jsxs)("div", {
				className: `${baseClass}__wrap`,
				children: [(0, import_jsx_runtime.jsxs)("div", {
					className: `${baseClass}__content`,
					children: [(0, import_jsx_runtime.jsx)("h1", { children: t("general:nothingFound") }), (0, import_jsx_runtime.jsx)("p", { children: t("general:sorryNotFound") })]
				}), (0, import_jsx_runtime.jsx)(Button, {
					el: "link",
					to: adminRoute,
					children: t("general:backToDashboard")
				})]
			})
		});
		$[4] = adminRoute;
		$[5] = t;
		$[6] = t4;
	} else t4 = $[6];
	return t4;
};
//#endregion
export { getClientRect as $, useDrawerDepth as A, _setPrototypeOf as B, requests as C, DrawerDepthProvider as D, Drawer as E, DialogCancel as F, DndContext as G, _extends as H, DialogBody as I, KeyboardSensor as J, DragOverlay as K, stringify as L, DialogTitle as M, DialogFooter as N, DrawerToggler as O, DialogConfirm as P, closestCorners as Q, Modal as R, useAuth as S, DialogModal as T, CheckIcon as U, _objectWithoutPropertiesLoose as V, ue as W, TouchSensor as X, MouseSensor as Y, closestCenter as Z, useLoadingOverlay as _, useStepNav as a, useDroppable as at, useLocale as b, useRouteCache as c, CSS as ct, useDocumentEvents as d, subtract as dt, getFirstCollision as et, useHierarchy as f, useCombinedRefs as ft, Spinner as g, LoadingOverlayToggle as h, PREFERENCE_KEYS as ht, ProgressBar as i, useDraggable as it, DialogHeader as j, formatDrawerSlug as k, useUploadHandlers as l, getEventCoordinates as lt, LoadingOverlay as m, useUniqueId as mt, RootProvider as n, rectIntersection as nt, useNav as o, useSensor as ot, useDebouncedCallback as p, useIsomorphicLayoutEffect as pt, KeyboardCode as q, useWindowInfo as r, useDndContext as rt, useWindowInfo$1 as s, useSensors as st, NotFoundClient as t, getScrollableAncestors as tt, WarningIcon as u, isKeyboardEvent as ut, usePreferences as v, ConfirmationModal as w, useLocaleLoading as x, dequal as y, useModal as z };
