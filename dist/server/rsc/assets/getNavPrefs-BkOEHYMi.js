import { r as __toESM } from "./rolldown-runtime-DJK8HYOj.js";
import { a as require_react_react_server } from "./rsc-CrbjC1on.js";
import { PREFERENCE_KEYS } from "payload/shared";
var getNavPrefs = (0, (/* @__PURE__ */ __toESM(require_react_react_server(), 1)).cache)(async (req) => {
	if (!req?.user?.collection) return {
		activeTab: void 0,
		groups: {},
		open: true
	};
	const navPrefs = await req.payload.find({
		collection: "payload-preferences",
		depth: 0,
		limit: 1,
		pagination: false,
		req,
		where: { and: [
			{ key: { equals: PREFERENCE_KEYS.NAV } },
			{ "user.relationTo": { equals: req.user.collection } },
			{ "user.value": { equals: req?.user?.id } }
		] }
	})?.then((res) => res?.docs?.[0]?.value);
	return {
		activeTab: (await req.payload.find({
			collection: "payload-preferences",
			depth: 0,
			limit: 1,
			pagination: false,
			req,
			where: { and: [
				{ key: { equals: PREFERENCE_KEYS.NAV_SIDEBAR_ACTIVE_TAB } },
				{ "user.relationTo": { equals: req.user.collection } },
				{ "user.value": { equals: req?.user?.id } }
			] }
		})?.then((res) => res?.docs?.[0]?.value))?.activeTab,
		groups: navPrefs?.groups ?? {},
		open: navPrefs?.open ?? true
	};
});
//#endregion
export { getNavPrefs as t };
