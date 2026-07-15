import { t as __commonJSMin } from "./rolldown-runtime-CE-6LUnI.js";
import { t as require_react } from "./react-yhpvVyYg.js";
//#region node_modules/.pnpm/react@19.2.6/node_modules/react/cjs/react-compiler-runtime.production.js
/**
* @license React
* react-compiler-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_compiler_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var ReactSharedInternals = require_react().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	exports.c = function(size) {
		return ReactSharedInternals.H.useMemoCache(size);
	};
}));
//#endregion
//#region node_modules/.pnpm/react@19.2.6/node_modules/react/compiler-runtime.js
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_compiler_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_compiler_runtime_production();
}));
//#endregion
export { require_compiler_runtime as t };
