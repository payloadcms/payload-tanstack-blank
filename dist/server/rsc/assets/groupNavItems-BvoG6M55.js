import { t as getTranslation } from "./getTranslation-Dh_N5Etc.js";
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/isNavEntityVisible.js
/**
* Shared nav-visibility rule for collections and globals: an entity is shown when it
* isn't explicitly removed from grouping (`admin.group: false`) and the user has read
* permission. Entity-level `admin.hidden` is handled separately via `visibleEntities`.
* Used by both the sidebar nav (`groupNavItems`) and the command palette so the two
* surfaces stay in sync.
*/ function isNavEntityVisible({ adminGroup, entityPermissions }) {
	if (adminGroup === false) return false;
	return Boolean(entityPermissions?.read);
}
//#endregion
//#region node_modules/.pnpm/@payloadcms+ui@4.0.0-internal.fa183d3_@types+react@19.2.14_monaco-editor@0.55.1_payload_ee2198f9f83b81ba43652ab47dba8f7a/node_modules/@payloadcms/ui/dist/utilities/groupNavItems.js
function groupNavItems(entities, permissions, i18n) {
	return entities.reduce((groups, entityToGroup) => {
		if (isNavEntityVisible({
			adminGroup: entityToGroup.entity?.admin?.group,
			entityPermissions: permissions?.[entityToGroup.type.toLowerCase()]?.[entityToGroup.entity.slug]
		})) {
			const labelOrFunction = "labels" in entityToGroup.entity ? entityToGroup.entity.labels.plural : entityToGroup.entity.label;
			const label = typeof labelOrFunction === "function" ? labelOrFunction({
				i18n,
				t: i18n.t
			}) : labelOrFunction;
			if (entityToGroup.entity.admin.group) {
				const translatedGroup = getTranslation(entityToGroup.entity.admin.group, i18n);
				const existingGroup = groups.find((group) => getTranslation(group.label, i18n) === translatedGroup);
				let matchedGroup = existingGroup;
				if (!existingGroup) {
					matchedGroup = {
						entities: [],
						label: translatedGroup
					};
					groups.push(matchedGroup);
				}
				matchedGroup.entities.push({
					slug: entityToGroup.entity.slug,
					type: entityToGroup.type,
					label
				});
			} else groups.find((group) => {
				return getTranslation(group.label, i18n) === i18n.t(`general:${entityToGroup.type}`);
			}).entities.push({
				slug: entityToGroup.entity.slug,
				type: entityToGroup.type,
				label
			});
		}
		return groups;
	}, [{
		entities: [],
		label: i18n.t("general:collections")
	}, {
		entities: [],
		label: i18n.t("general:globals")
	}]).filter((group) => group.entities.length > 0);
}
//#endregion
export { groupNavItems as t };
