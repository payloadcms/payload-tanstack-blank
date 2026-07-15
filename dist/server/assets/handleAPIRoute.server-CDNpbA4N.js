import { A as jobAfterRead, At as encode, B as isErrorPublic, Bt as buildBeforeOperation, C as findOperation, Ct as JOSEAlgNotAllowed, D as deleteByIDOperation, Dt as decode, E as duplicateOperation, Et as JWTInvalid, F as updateJobs, Ft as forgotPasswordOperation, G as createOperation, Ht as createLocalReq, I as handleSchedules, It as killTransaction, Jt as traverseFields, Kt as Forbidden, L as _internal_jobSystemGlobals, M as runJobs, O as deleteOperation, Ot as concat, P as updateJob, Pt as relationshipPopulationPromise, Qt as ValidationError, S as findByIDOperation, St as decodeBase64url, T as buildVersionCollectionFields, Tt as JWSSignatureVerificationFailed, Vt as buildAfterOperation, Wt as getDataLoader, _ as updateOperation, _t as validateCrit, an as APIError, at as countOperation, b as findVersionByIDOperation, bt as isDisjoint, c as getAccessResults, d as restoreVersionOperation$1, dt as executeAccess, f as findVersionsOperation$1, ft as resetPasswordOperation, g as updateByIDOperation, gt as checkKeyType, h as findOneOperation, ht as validateClaimsSet, i as sendTelemetryEvent, j as jobsCollectionSlug, jt as encoder, kt as decoder, ln as extractJWT, lt as verifyEmailOperation, m as buildVersionGlobalFields, on as E, ot as sanitizeWhereQuery, p as findVersionByIDOperation$1, pt as loginOperation, r as sanitizeLocales, rn as combineQueries, rt as getFileByPath, s as genImportMapIterateFields, sn as t, st as validateQueryPaths, t as headersWithCors, u as updateOperation$1, un as parseCookies, ut as unlockOperation, v as restoreVersionOperation, vt as normalizeKey, wt as JWSInvalid, x as getFieldByPath, xt as isObject, y as findVersionsOperation, yt as verify, z as E$1, zt as appendNonTrashedFilter } from "./headersWithCors-o-ws5NVQ.js";
import { A as fieldAffectsData, E as deepCopyObjectSimple } from "./escapeRegExp-DRrhsMGY.js";
import { t as initI18n } from "./init-BuOU6s5d.js";
import { f as extractHeaderLanguage } from "./utils-BZcNK7nB.js";
import { t as formatAdminURL } from "./formatAdminURL-Bd6jMInL.js";
import { t as parse$1 } from "./parse-Rwd0G26i.js";
import crypto from "crypto";
import { spawn } from "child_process";
import { fileURLToPath } from "node:url";
import path from "path";
import fs from "fs/promises";
import process$1 from "node:process";
import { pino } from "pino";
import { build } from "pino-pretty";
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/bin/generateImportMap/utilities/parsePayloadComponent.js
function parsePayloadComponent(PayloadComponent) {
	if (!PayloadComponent) return null;
	const pathAndMaybeExport = typeof PayloadComponent === "string" ? PayloadComponent : PayloadComponent.path;
	let path;
	let exportName;
	if (pathAndMaybeExport.includes("#")) [path, exportName] = pathAndMaybeExport.split("#", 2);
	else {
		path = pathAndMaybeExport;
		exportName = "default";
	}
	if (typeof PayloadComponent === "object" && PayloadComponent.exportName) exportName = PayloadComponent.exportName;
	return {
		exportName,
		path
	};
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/config/types.js
var isUserMenuSettingsGroup = (userMenuSettingsItem) => typeof userMenuSettingsItem === "object" && userMenuSettingsItem !== null && "items" in userMenuSettingsItem && Array.isArray(userMenuSettingsItem.items);
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/formatErrors.js
var formatErrors = (incoming) => {
	if (incoming) {
		if ((incoming instanceof ValidationError || incoming instanceof APIError || "isOperational" in incoming && incoming.isOperational === true) && incoming.data) return { errors: [{
			name: incoming.name,
			data: incoming.data,
			message: incoming.message
		}] };
		if ("name" in incoming && incoming.name === "ValidationError" && "errors" in incoming && incoming.errors) return { errors: Object.keys(incoming.errors).reduce((acc, key) => {
			acc.push({
				field: incoming.errors[key].path,
				message: incoming.errors[key].message
			});
			return acc;
		}, []) };
		if (Array.isArray(incoming.message)) return { errors: incoming.message };
		if (incoming.name) return { errors: [{ message: incoming.message }] };
	}
	return { errors: [{ message: "An unknown error occurred." }] };
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/isNextBuild.js
/**
* Utility function to determine if the code is being executed during the Next.js build process.
*/ function isNextBuild() {
	return process.env.NEXT_PHASE === "phase-production-build" || process.env.npm_lifecycle_event === "build";
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/logError.js
var logError = ({ err, payload }) => {
	let level = "error";
	if (err && typeof err === "object" && "name" in err && typeof err.name === "string" && typeof payload.config.loggingLevels[err.name] !== "undefined") level = payload.config.loggingLevels[err.name];
	if (level) {
		const logObject = {};
		if (level === "info") logObject.msg = typeof err === "object" && "message" in err ? err.message : "Error";
		else logObject.err = err;
		payload.logger[level](logObject);
	}
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/auth/operations/local/forgotPassword.js
async function forgotPasswordLocal(payload, options) {
	const { collection: collectionSlug, data, disableEmail, expiration, overrideAccess = true } = options;
	const collection = payload.collections[collectionSlug];
	if (!collection) throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Forgot Password Operation.`);
	return forgotPasswordOperation({
		collection,
		data,
		disableEmail,
		expiration,
		overrideAccess,
		req: await createLocalReq(options, payload)
	});
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.3/node_modules/jose/dist/webapi/lib/validate_algorithms.js
function validateAlgorithms(option, algorithms) {
	if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string"))) throw new TypeError(`"${option}" option must be an array of strings`);
	if (!algorithms) return;
	return new Set(algorithms);
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.3/node_modules/jose/dist/webapi/jws/flattened/verify.js
async function flattenedVerify(jws, key, options) {
	if (!isObject(jws)) throw new JWSInvalid("Flattened JWS must be an object");
	if (jws.protected === void 0 && jws.header === void 0) throw new JWSInvalid("Flattened JWS must have either of the \"protected\" or \"header\" members");
	if (jws.protected !== void 0 && typeof jws.protected !== "string") throw new JWSInvalid("JWS Protected Header incorrect type");
	if (jws.payload === void 0) throw new JWSInvalid("JWS Payload missing");
	if (typeof jws.signature !== "string") throw new JWSInvalid("JWS Signature missing or incorrect type");
	if (jws.header !== void 0 && !isObject(jws.header)) throw new JWSInvalid("JWS Unprotected Header incorrect type");
	let parsedProt = {};
	if (jws.protected) try {
		const protectedHeader = decode(jws.protected);
		parsedProt = JSON.parse(decoder.decode(protectedHeader));
	} catch {
		throw new JWSInvalid("JWS Protected Header is invalid");
	}
	if (!isDisjoint(parsedProt, jws.header)) throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
	const joseHeader = {
		...parsedProt,
		...jws.header
	};
	const extensions = validateCrit(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options?.crit, parsedProt, joseHeader);
	let b64 = true;
	if (extensions.has("b64")) {
		b64 = parsedProt.b64;
		if (typeof b64 !== "boolean") throw new JWSInvalid("The \"b64\" (base64url-encode payload) Header Parameter must be a boolean");
	}
	const { alg } = joseHeader;
	if (typeof alg !== "string" || !alg) throw new JWSInvalid("JWS \"alg\" (Algorithm) Header Parameter missing or invalid");
	const algorithms = options && validateAlgorithms("algorithms", options.algorithms);
	if (algorithms && !algorithms.has(alg)) throw new JOSEAlgNotAllowed("\"alg\" (Algorithm) Header Parameter value not allowed");
	if (b64) {
		if (typeof jws.payload !== "string") throw new JWSInvalid("JWS Payload must be a string");
	} else if (typeof jws.payload !== "string" && !(jws.payload instanceof Uint8Array)) throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
	let resolvedKey = false;
	if (typeof key === "function") {
		key = await key(parsedProt, jws);
		resolvedKey = true;
	}
	checkKeyType(alg, key, "verify");
	const data = concat(jws.protected !== void 0 ? encode(jws.protected) : /* @__PURE__ */ new Uint8Array(), encode("."), typeof jws.payload === "string" ? b64 ? encode(jws.payload) : encoder.encode(jws.payload) : jws.payload);
	const signature = decodeBase64url(jws.signature, "signature", JWSInvalid);
	const k = await normalizeKey(key, alg);
	if (!await verify(alg, k, signature, data)) throw new JWSSignatureVerificationFailed();
	let payload;
	if (b64) payload = decodeBase64url(jws.payload, "payload", JWSInvalid);
	else if (typeof jws.payload === "string") payload = encoder.encode(jws.payload);
	else payload = jws.payload;
	const result = { payload };
	if (jws.protected !== void 0) result.protectedHeader = parsedProt;
	if (jws.header !== void 0) result.unprotectedHeader = jws.header;
	if (resolvedKey) return {
		...result,
		key: k
	};
	return result;
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.3/node_modules/jose/dist/webapi/jws/compact/verify.js
async function compactVerify(jws, key, options) {
	if (jws instanceof Uint8Array) jws = decoder.decode(jws);
	if (typeof jws !== "string") throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
	const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
	if (length !== 3) throw new JWSInvalid("Invalid Compact JWS");
	const verified = await flattenedVerify({
		payload,
		protected: protectedHeader,
		signature
	}, key, options);
	const result = {
		payload: verified.payload,
		protectedHeader: verified.protectedHeader
	};
	if (typeof key === "function") return {
		...result,
		key: verified.key
	};
	return result;
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.3/node_modules/jose/dist/webapi/jwt/verify.js
async function jwtVerify(jwt, key, options) {
	const verified = await compactVerify(jwt, key, options);
	if (verified.protectedHeader.crit?.includes("b64") && verified.protectedHeader.b64 === false) throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
	const result = {
		payload: validateClaimsSet(verified.protectedHeader, verified.payload, options),
		protectedHeader: verified.protectedHeader
	};
	if (typeof key === "function") return {
		...result,
		key: verified.key
	};
	return result;
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/auth/operations/local/login.js
async function loginLocal(payload, options) {
	const { collection: collectionSlug, data, depth, overrideAccess = true, showHiddenFields } = options;
	const collection = payload.collections[collectionSlug];
	if (!collection) throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Login Operation.`);
	const result = await loginOperation({
		collection,
		data,
		depth,
		overrideAccess,
		req: await createLocalReq(options, payload),
		showHiddenFields
	});
	if (collection.config.auth.removeTokenFromResponses) delete result.token;
	return result;
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/auth/operations/local/resetPassword.js
async function resetPasswordLocal(payload, options) {
	const { collection: collectionSlug, data, overrideAccess } = options;
	const collection = payload.collections[collectionSlug];
	if (!collection) throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Reset Password Operation.`);
	const result = await resetPasswordOperation({
		collection,
		data,
		overrideAccess,
		req: await createLocalReq(options, payload)
	});
	if (collection.config.auth.removeTokenFromResponses) delete result.token;
	return result;
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/auth/operations/local/unlock.js
async function unlockLocal(payload, options) {
	const { collection: collectionSlug, data, overrideAccess = true } = options;
	const collection = payload.collections[collectionSlug];
	if (!collection) throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Unlock Operation.`);
	return unlockOperation({
		collection,
		data,
		overrideAccess,
		req: await createLocalReq(options, payload)
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/auth/operations/local/verifyEmail.js
async function verifyEmailLocal(payload, options) {
	const { collection: collectionSlug, token } = options;
	const collection = payload.collections[collectionSlug];
	if (!collection) throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Verify Email Operation.`);
	return verifyEmailOperation({
		collection,
		req: await createLocalReq(options, payload),
		token
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/collections/operations/local/count.js
async function countLocal(payload, options) {
	const { collection: collectionSlug, disableErrors, overrideAccess = true, trash = false, where } = options;
	const collection = payload.collections[collectionSlug];
	if (!collection) throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Count Operation.`);
	return countOperation({
		collection,
		disableErrors,
		overrideAccess,
		req: await createLocalReq(options, payload),
		trash,
		where
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/collections/operations/local/create.js
async function createLocal(payload, options) {
	const { collection: collectionSlug, data, depth, disableTransaction, disableVerificationEmail, draft, duplicateFromID, file, filePath, overrideAccess = true, overwriteExistingFiles = false, populate, publishAllLocales, select, showHiddenFields } = options;
	const collection = payload.collections[collectionSlug];
	if (!collection) throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Create Operation.`);
	const req = await createLocalReq(options, payload);
	req.file = file ?? await getFileByPath(filePath);
	return createOperation({
		collection,
		data: deepCopyObjectSimple(data),
		depth,
		disableTransaction,
		disableVerificationEmail,
		draft,
		duplicateFromID,
		overrideAccess,
		overwriteExistingFiles,
		populate,
		publishAllLocales,
		req,
		select,
		showHiddenFields
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/collections/operations/local/delete.js
async function deleteLocal(payload, options) {
	const { id, collection: collectionSlug, depth, disableTransaction, overrideAccess = true, overrideLock, populate, select, showHiddenFields, trash = false, where } = options;
	const collection = payload.collections[collectionSlug];
	if (!collection) throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Delete Operation.`);
	const args = {
		id,
		collection,
		depth,
		disableTransaction,
		overrideAccess,
		overrideLock,
		populate,
		req: await createLocalReq(options, payload),
		select,
		showHiddenFields,
		trash,
		where
	};
	if (options.id) return deleteByIDOperation(args);
	return deleteOperation(args);
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/collections/operations/local/duplicate.js
async function duplicateLocal(payload, options) {
	const { id, collection: collectionSlug, data, depth, disableTransaction, draft, overrideAccess = true, populate, select, selectedLocales, showHiddenFields } = options;
	const collection = payload.collections[collectionSlug];
	if (!collection) throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Duplicate Operation.`);
	if (collection.config.disableDuplicate === true) throw new APIError(`The collection with slug ${String(collectionSlug)} cannot be duplicated.`, 400);
	return duplicateOperation({
		id,
		collection,
		data,
		depth,
		disableTransaction,
		draft,
		overrideAccess,
		populate,
		req: await createLocalReq(options, payload),
		select,
		selectedLocales,
		showHiddenFields
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/collections/operations/local/find.js
async function findLocal(payload, options) {
	const { collection: collectionSlug, currentDepth, depth, disableErrors, draft = false, includeLockStatus, joins, limit, overrideAccess = true, page, pagination = true, populate, select, showHiddenFields, sort, trash = false, where } = options;
	const collection = payload.collections[collectionSlug];
	if (!collection) throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Find Operation.`);
	return findOperation({
		collection,
		currentDepth,
		depth,
		disableErrors,
		draft,
		includeLockStatus,
		joins,
		limit,
		overrideAccess,
		page,
		pagination,
		populate,
		req: await createLocalReq(options, payload),
		select,
		showHiddenFields,
		sort,
		trash,
		where
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/collections/operations/local/findByID.js
async function findByIDLocal(payload, options) {
	const { id, collection: collectionSlug, currentDepth, data, depth, disableErrors = false, draft = false, flattenLocales, includeLockStatus, joins, overrideAccess = true, populate, select, showHiddenFields, trash = false } = options;
	const collection = payload.collections[collectionSlug];
	if (!collection) throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Find By ID Operation.`);
	return findByIDOperation({
		id,
		collection,
		currentDepth,
		data,
		depth,
		disableErrors,
		draft,
		flattenLocales,
		includeLockStatus,
		joins,
		overrideAccess,
		populate,
		req: await createLocalReq(options, payload),
		select,
		showHiddenFields,
		trash
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/collections/operations/findDistinct.js
var findDistinctOperation = async (incomingArgs) => {
	let args = incomingArgs;
	try {
		args = await buildBeforeOperation({
			args,
			collection: args.collection.config,
			operation: "readDistinct",
			overrideAccess: args.overrideAccess
		});
		const { collection: { config: collectionConfig }, disableErrors, overrideAccess, populate, showHiddenFields = false, trash = false, where } = args;
		const req = args.req;
		const { locale, payload } = req;
		let accessResult;
		if (!overrideAccess) {
			accessResult = await executeAccess({
				disableErrors,
				req
			}, collectionConfig.access.read);
			if (accessResult === false) return {
				hasNextPage: false,
				hasPrevPage: false,
				limit: args.limit || 0,
				nextPage: null,
				page: 1,
				pagingCounter: 1,
				prevPage: null,
				totalDocs: 0,
				totalPages: 0,
				values: []
			};
		}
		let fullWhere = combineQueries(where, accessResult);
		sanitizeWhereQuery({
			fields: collectionConfig.flattenedFields,
			payload,
			where: fullWhere
		});
		fullWhere = appendNonTrashedFilter({
			enableTrash: collectionConfig.trash,
			trash,
			where: fullWhere
		});
		await validateQueryPaths({
			collectionConfig,
			overrideAccess,
			req,
			where: where ?? {}
		});
		const fieldResult = getFieldByPath({
			config: payload.config,
			fields: collectionConfig.flattenedFields,
			includeRelationships: true,
			path: args.field
		});
		if (!fieldResult) throw new APIError(`Field ${args.field} was not found in the collection ${collectionConfig.slug}`, E.BAD_REQUEST);
		if (fieldResult.field.hidden && !showHiddenFields) throw new Forbidden(req.t);
		if (fieldResult.field.access?.read) {
			if (!await fieldResult.field.access.read({
				collection: collectionConfig,
				req
			})) throw new Forbidden(req.t);
		}
		if ("virtual" in fieldResult.field && fieldResult.field.virtual) {
			if (typeof fieldResult.field.virtual !== "string") throw new APIError(`Cannot findDistinct by a virtual field that isn't linked to a relationship field.`);
			let relationPath = "";
			let currentFields = collectionConfig.flattenedFields;
			const fieldPathSegments = fieldResult.field.virtual.split(".");
			for (const segment of fieldResult.field.virtual.split(".")) {
				relationPath = `${relationPath}${segment}`;
				fieldPathSegments.shift();
				const field = currentFields.find((e) => e.name === segment);
				if ((field.type === "relationship" || field.type === "upload") && typeof field.relationTo === "string") break;
				if ("flattenedFields" in field) currentFields = field.flattenedFields;
			}
			const path = `${relationPath}.${fieldPathSegments.join(".")}`;
			const result = await payload.findDistinct({
				collection: collectionConfig.slug,
				depth: args.depth,
				disableErrors,
				field: path,
				limit: args.limit,
				locale,
				overrideAccess,
				page: args.page,
				populate,
				req,
				showHiddenFields,
				sort: args.sort,
				trash,
				where
			});
			for (const val of result.values) {
				val[args.field] = val[path];
				delete val[path];
			}
			return result;
		}
		let result = await payload.db.findDistinct({
			collection: collectionConfig.slug,
			field: args.field,
			limit: args.limit,
			locale,
			page: args.page,
			req,
			sort: args.sort,
			where: fullWhere
		});
		if ((fieldResult.field.type === "relationship" || fieldResult.field.type === "upload") && args.depth) {
			const populationPromises = [];
			const sanitizedField = { ...fieldResult.field };
			if (fieldResult.field.hasMany) sanitizedField.hasMany = false;
			for (const doc of result.values) populationPromises.push(relationshipPopulationPromise({
				currentDepth: 0,
				depth: args.depth,
				draft: false,
				fallbackLocale: req.fallbackLocale || null,
				field: sanitizedField,
				locale: req.locale || null,
				overrideAccess: args.overrideAccess ?? true,
				parentIsLocalized: false,
				populate,
				req,
				showHiddenFields: false,
				siblingDoc: doc
			}));
			await Promise.all(populationPromises);
		}
		result = await buildAfterOperation({
			args,
			collection: collectionConfig,
			operation: "findDistinct",
			overrideAccess,
			result
		});
		return result;
	} catch (error) {
		await killTransaction(args.req);
		throw error;
	}
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/collections/operations/local/findDistinct.js
async function findDistinct(payload, options) {
	const { collection: collectionSlug, depth = 0, disableErrors, field, limit, overrideAccess = true, page, populate, showHiddenFields, sort, trash = false, where } = options;
	const collection = payload.collections[collectionSlug];
	if (!collection) throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Find Operation.`);
	return findDistinctOperation({
		collection,
		depth,
		disableErrors,
		field,
		limit,
		overrideAccess,
		page,
		populate,
		req: await createLocalReq(options, payload),
		showHiddenFields,
		sort,
		trash,
		where
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/collections/operations/local/findVersionByID.js
async function findVersionByIDLocal(payload, options) {
	const { id, collection: collectionSlug, depth, disableErrors = false, overrideAccess = true, populate, select, showHiddenFields, trash = false } = options;
	const collection = payload.collections[collectionSlug];
	if (!collection) throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Find Version By ID Operation.`);
	return findVersionByIDOperation({
		id,
		collection,
		depth,
		disableErrors,
		overrideAccess,
		populate,
		req: await createLocalReq(options, payload),
		select,
		showHiddenFields,
		trash
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/collections/operations/local/findVersions.js
async function findVersionsLocal(payload, options) {
	const { collection: collectionSlug, depth, limit, overrideAccess = true, page, pagination = true, populate, select, showHiddenFields, sort, trash = false, where } = options;
	const collection = payload.collections[collectionSlug];
	if (!collection) throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Find Versions Operation.`);
	return findVersionsOperation({
		collection,
		depth,
		limit,
		overrideAccess,
		page,
		pagination,
		populate,
		req: await createLocalReq(options, payload),
		select,
		showHiddenFields,
		sort,
		trash,
		where
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/collections/operations/local/restoreVersion.js
async function restoreVersionLocal(payload, options) {
	const { id, collection: collectionSlug, depth, overrideAccess = true, populate, select, showHiddenFields } = options;
	const collection = payload.collections[collectionSlug];
	if (!collection) throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Restore Version Operation.`);
	return restoreVersionOperation({
		id,
		collection,
		depth,
		overrideAccess,
		payload,
		populate,
		req: await createLocalReq(options, payload),
		select,
		showHiddenFields
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/collections/operations/local/update.js
async function updateLocal(payload, options) {
	const { id, autosave, collection: collectionSlug, data, depth, disableTransaction, draft, file, filePath, limit, overrideAccess = true, overrideLock, overwriteExistingFiles = false, populate, publishAllLocales, select, showHiddenFields, sort, trash = false, unpublishAllLocales, where } = options;
	const collection = payload.collections[collectionSlug];
	if (!collection) throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Update Operation.`);
	const req = await createLocalReq(options, payload);
	req.file = file ?? await getFileByPath(filePath);
	const args = {
		id,
		autosave,
		collection,
		data,
		depth,
		disableTransaction,
		draft,
		limit,
		overrideAccess,
		overrideLock,
		overwriteExistingFiles,
		payload,
		populate,
		publishAllLocales,
		req,
		select,
		showHiddenFields,
		sort,
		trash,
		unpublishAllLocales,
		where
	};
	if (options.id) return updateByIDOperation(args);
	return updateOperation(args);
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/globals/operations/countGlobalVersions.js
var countGlobalVersionsOperation = async (args) => {
	try {
		const { disableErrors, global, overrideAccess, where } = args;
		const req = args.req;
		const { payload } = req;
		if (global.hooks?.beforeOperation?.length) for (const hook of global.hooks.beforeOperation) args = await hook({
			args,
			context: req.context,
			global,
			operation: "countVersions",
			overrideAccess,
			req
		}) || args;
		let accessResult;
		if (!overrideAccess) {
			accessResult = await executeAccess({
				disableErrors,
				req
			}, global.access.readVersions);
			if (accessResult === false) return { totalDocs: 0 };
		}
		const fullWhere = combineQueries(where, accessResult);
		await validateQueryPaths({
			globalConfig: global,
			overrideAccess,
			req,
			versionFields: buildVersionGlobalFields(payload.config, global, true),
			where
		});
		return await payload.db.countGlobalVersions({
			global: global.slug,
			req,
			where: fullWhere
		});
	} catch (error) {
		await killTransaction(args.req);
		throw error;
	}
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/globals/operations/local/countVersions.js
async function countGlobalVersionsLocal(payload, options) {
	const { disableErrors, global: globalSlug, overrideAccess = true, where } = options;
	const global = payload.globals.config.find(({ slug }) => slug === globalSlug);
	if (!global) throw new APIError(`The global with slug ${String(globalSlug)} can't be found. Count Global Versions Operation.`);
	return countGlobalVersionsOperation({
		disableErrors,
		global,
		overrideAccess,
		req: await createLocalReq(options, payload),
		where
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/globals/operations/local/findOne.js
async function findOneGlobalLocal(payload, options) {
	const { slug: globalSlug, data, depth, disableErrors, draft = false, flattenLocales, includeLockStatus, overrideAccess = true, populate, select, showHiddenFields } = options;
	const globalConfig = payload.globals.config.find((config) => config.slug === globalSlug);
	if (!globalConfig) throw new APIError(`The global with slug ${String(globalSlug)} can't be found.`);
	return findOneOperation({
		slug: globalSlug,
		data,
		depth,
		disableErrors,
		draft,
		flattenLocales,
		globalConfig,
		includeLockStatus,
		overrideAccess,
		populate,
		req: await createLocalReq(options, payload),
		select,
		showHiddenFields
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/globals/operations/local/findVersionByID.js
async function findGlobalVersionByIDLocal(payload, options) {
	const { id, slug: globalSlug, depth, disableErrors = false, overrideAccess = true, populate, select, showHiddenFields } = options;
	const globalConfig = payload.globals.config.find((config) => config.slug === globalSlug);
	if (!globalConfig) throw new APIError(`The global with slug ${String(globalSlug)} can't be found.`);
	return findVersionByIDOperation$1({
		id,
		depth,
		disableErrors,
		globalConfig,
		overrideAccess,
		populate,
		req: await createLocalReq(options, payload),
		select,
		showHiddenFields
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/globals/operations/local/findVersions.js
async function findGlobalVersionsLocal(payload, options) {
	const { slug: globalSlug, depth, limit, overrideAccess = true, page, pagination = true, populate, select, showHiddenFields, sort, where } = options;
	const globalConfig = payload.globals.config.find((config) => config.slug === globalSlug);
	if (!globalConfig) throw new APIError(`The global with slug ${String(globalSlug)} can't be found.`);
	return findVersionsOperation$1({
		depth,
		globalConfig,
		limit,
		overrideAccess,
		page,
		pagination,
		populate,
		req: await createLocalReq(options, payload),
		select,
		showHiddenFields,
		sort,
		where
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/globals/operations/local/restoreVersion.js
async function restoreGlobalVersionLocal(payload, options) {
	const { id, slug: globalSlug, depth, overrideAccess = true, populate, showHiddenFields } = options;
	const globalConfig = payload.globals.config.find((config) => config.slug === globalSlug);
	if (!globalConfig) throw new APIError(`The global with slug ${String(globalSlug)} can't be found.`);
	return restoreVersionOperation$1({
		id,
		depth,
		globalConfig,
		overrideAccess,
		populate,
		req: await createLocalReq(options, payload),
		showHiddenFields
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/globals/operations/local/update.js
async function updateGlobalLocal(payload, options) {
	const { slug: globalSlug, data, depth, draft, overrideAccess = true, overrideLock, populate, publishAllLocales, select, showHiddenFields, unpublishAllLocales } = options;
	const globalConfig = payload.globals.config.find((config) => config.slug === globalSlug);
	if (!globalConfig) throw new APIError(`The global with slug ${String(globalSlug)} can't be found.`);
	return updateOperation$1({
		slug: globalSlug,
		data: deepCopyObjectSimple(data),
		depth,
		draft,
		globalConfig,
		overrideAccess,
		overrideLock,
		populate,
		publishAllLocales,
		req: await createLocalReq(options, payload),
		select,
		showHiddenFields,
		unpublishAllLocales
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/auth/crypto.js
var algorithm = "aes-256-ctr";
function encrypt(text) {
	const iv = crypto.randomBytes(16);
	const secret = this.secret;
	const cipher = crypto.createCipheriv(algorithm, secret, iv);
	const encrypted = cipher.update(text, "utf8", "hex") + cipher.final("hex");
	return `${iv.toString("hex")}${encrypted}`;
}
function decrypt(hash) {
	const iv = hash.slice(0, 32);
	const content = hash.slice(32);
	const secret = this.secret;
	const decipher = crypto.createDecipheriv(algorithm, secret, Buffer.from(iv, "hex"));
	return decipher.update(content, "hex", "utf8") + decipher.final("utf8");
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/mergeHeaders.js
var mergeHeaders = (sourceHeaders, destinationHeaders) => {
	const combinedHeaders = new Headers(destinationHeaders);
	sourceHeaders.forEach((value, key) => {
		combinedHeaders.append(key, value);
	});
	return combinedHeaders;
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/auth/executeAuthStrategies.js
var executeAuthStrategies = async (args) => {
	let result = { user: null };
	if (!args.payload.authStrategies?.length) return result;
	for (const strategy of args.payload.authStrategies) {
		args.strategyName = strategy.name;
		args.isGraphQL = Boolean(args.isGraphQL);
		args.canSetHeaders = Boolean(args.canSetHeaders);
		try {
			const authResult = await strategy.authenticate(args);
			if (authResult.responseHeaders) authResult.responseHeaders = mergeHeaders(result.responseHeaders || new Headers(), authResult.responseHeaders || new Headers());
			result = authResult;
		} catch (err) {
			logError({
				err,
				payload: args.payload
			});
		}
		if (result.user) return result;
	}
	return result;
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/auth/operations/auth.js
var auth = async (args) => {
	const { canSetHeaders, headers } = args;
	const req = args.req;
	const { payload } = req;
	try {
		const { responseHeaders, user } = await executeAuthStrategies({
			canSetHeaders,
			headers,
			payload
		});
		req.user = user;
		req.responseHeaders = responseHeaders;
		return {
			permissions: await getAccessResults({ req }),
			responseHeaders,
			user
		};
	} catch (error) {
		await killTransaction(req);
		throw error;
	}
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/auth/operations/local/auth.js
var authLocal = async (payload, options) => {
	const { headers, req } = options;
	return await auth({
		canSetHeaders: Boolean(options.canSetHeaders),
		headers,
		req: await createLocalReq({ req }, payload)
	});
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/auth/strategies/apiKey.js
var APIKeyAuthentication = (collectionConfig) => async ({ headers, isGraphQL = false, payload }) => {
	const authHeader = headers.get("Authorization");
	if (authHeader?.startsWith(`${collectionConfig.slug} API-Key `)) {
		const apiKey = authHeader.replace(`${collectionConfig.slug} API-Key `, "");
		const sha256APIKeyIndex = crypto.createHmac("sha256", payload.secret).update(apiKey).digest("hex");
		try {
			const where = {};
			if (collectionConfig.auth?.verify) where.and = [{ apiKeyIndex: { equals: sha256APIKeyIndex } }, { _verified: { not_equals: false } }];
			else where.apiKeyIndex = { equals: sha256APIKeyIndex };
			const userQuery = await payload.find({
				collection: collectionConfig.slug,
				depth: isGraphQL ? 0 : collectionConfig.auth.depth,
				limit: 1,
				overrideAccess: true,
				pagination: false,
				where
			});
			if (userQuery.docs && userQuery.docs.length > 0) {
				const user = userQuery.docs[0];
				user.collection = collectionConfig.slug;
				user._strategy = "api-key";
				return { user };
			}
		} catch (ignore) {
			return { user: null };
		}
	}
	return { user: null };
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/auth/strategies/jwt.js
async function autoLogin({ isGraphQL, payload, strategyName = "local-jwt" }) {
	if (typeof payload?.config?.admin?.autoLogin !== "object" || payload.config.admin?.autoLogin.prefillOnly || !payload?.config?.admin?.autoLogin || !payload.config.admin?.autoLogin.email && !payload.config.admin?.autoLogin.username) return { user: null };
	const collection = payload.collections[payload.config.admin.user];
	const where = { or: [] };
	if (payload.config.admin?.autoLogin.email) where.or?.push({ email: { equals: payload.config.admin?.autoLogin.email } });
	else if (payload.config.admin?.autoLogin.username) where.or?.push({ username: { equals: payload.config.admin?.autoLogin.username } });
	const user = (await payload.find({
		collection: collection.config.slug,
		depth: isGraphQL ? 0 : collection.config.auth.depth,
		limit: 1,
		pagination: false,
		where
	})).docs[0];
	if (!user) return { user: null };
	user.collection = collection.config.slug;
	user._strategy = strategyName;
	return { user };
}
/**
* Authentication strategy function for JWT tokens
*/ var JWTAuthentication = async ({ headers, isGraphQL = false, payload, strategyName = "local-jwt" }) => {
	try {
		const token = extractJWT({
			headers,
			payload
		});
		if (!token) {
			if (headers.get("DisableAutologin") !== "true") return await autoLogin({
				isGraphQL,
				payload,
				strategyName
			});
			return { user: null };
		}
		const { payload: decodedPayload } = await jwtVerify(token, new TextEncoder().encode(payload.secret));
		const collection = payload.collections[decodedPayload.collection];
		const user = await payload.findByID({
			id: decodedPayload.id,
			collection: decodedPayload.collection,
			depth: isGraphQL ? 0 : collection.config.auth.depth
		});
		if (user && (!collection.config.auth.verify || user._verified)) {
			if (collection.config.auth.useSessions) {
				if (!(user.sessions || []).find(({ id }) => id === decodedPayload.sid) || !decodedPayload.sid) return { user: null };
				user._sid = decodedPayload.sid;
			}
			user.collection = collection.config.slug;
			user._strategy = strategyName;
			return { user };
		} else {
			if (headers.get("DisableAutologin") !== "true") return await autoLogin({
				isGraphQL,
				payload,
				strategyName
			});
			return { user: null };
		}
	} catch (ignore) {
		if (headers.get("DisableAutologin") !== "true") return await autoLogin({
			isGraphQL,
			payload,
			strategyName
		});
		return { user: null };
	}
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/logger.js
var prettyOptions = {
	colorize: true,
	ignore: "pid,hostname",
	translateTime: "SYS:HH:MM:ss"
};
var prettySyncLoggerDestination = build({
	...prettyOptions,
	destination: 1,
	sync: true
});
var defaultLoggerOptions = build(prettyOptions);
var getLogger = (name = "payload", logger) => {
	if (!logger) return pino(defaultLoggerOptions);
	if (logger === "sync") return pino(prettySyncLoggerDestination);
	if ("options" in logger) {
		const { destination, options } = logger;
		if (!options.name) options.name = name;
		if (!options.enabled) options.enabled = process.env.DISABLE_LOGGING !== "true";
		return pino(options, destination);
	} else return logger;
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/bin/generateImportMap/iterateCollections.js
function iterateCollections({ addToImportMap, baseDir, collections, config, importMap, imports }) {
	for (const collection of collections) {
		genImportMapIterateFields({
			addToImportMap,
			baseDir,
			config,
			fields: collection.fields,
			importMap,
			imports
		});
		addToImportMap(collection.admin?.components?.afterList);
		addToImportMap(collection.admin?.components?.listMenuItems);
		addToImportMap(collection.admin?.components?.afterListTable);
		addToImportMap(collection.admin?.components?.beforeList);
		addToImportMap(collection.admin?.components?.beforeListTable);
		addToImportMap(collection.admin?.components?.Description);
		addToImportMap(collection.admin?.components?.edit?.beforeDocumentControls);
		addToImportMap(collection.admin?.components?.edit?.BeforeDocumentMeta);
		addToImportMap(collection.admin?.components?.edit?.editMenuItems);
		addToImportMap(collection.admin?.components?.edit?.PreviewButton);
		addToImportMap(collection.admin?.components?.edit?.PublishButton);
		addToImportMap(collection.admin?.components?.edit?.SaveButton);
		addToImportMap(collection.admin?.components?.edit?.SaveDraftButton);
		addToImportMap(collection.admin?.components?.edit?.Status);
		addToImportMap(collection.admin?.components?.edit?.UnpublishButton);
		addToImportMap(collection.admin?.components?.edit?.Upload);
		if (collection.upload?.admin?.components?.controls) addToImportMap(collection.upload?.admin?.components?.controls);
		const filePreview = collection.upload?.admin?.components?.filePreview;
		if (filePreview) if (typeof filePreview === "string" || typeof filePreview === "object" && "path" in filePreview) addToImportMap(filePreview);
		else for (const component of Object.values(filePreview)) addToImportMap(component);
		if (collection.admin?.components?.views?.edit) for (const editViewConfig of Object.values(collection.admin?.components?.views?.edit)) {
			if ("Component" in editViewConfig) addToImportMap(editViewConfig?.Component);
			if ("actions" in editViewConfig) addToImportMap(editViewConfig?.actions);
			if ("tab" in editViewConfig) {
				addToImportMap(editViewConfig?.tab?.Component);
				addToImportMap(editViewConfig?.tab?.Pill);
			}
		}
		addToImportMap(collection.admin?.components?.views?.list?.Component);
		addToImportMap(collection.admin?.components?.views?.list?.actions);
		addToImportMap(collection.admin?.components?.views?.list?.NoResults);
		if (collection.admin?.components?.views) for (const [key, view] of Object.entries(collection.admin.components.views)) {
			if (key === "edit" || key === "list") continue;
			if (view && typeof view === "object" && "Component" in view && "path" in view) addToImportMap(view.Component);
		}
	}
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/bin/generateImportMap/iterateGlobals.js
function iterateGlobals({ addToImportMap, baseDir, config, globals, importMap, imports }) {
	for (const global of globals) {
		genImportMapIterateFields({
			addToImportMap,
			baseDir,
			config,
			fields: global.fields,
			importMap,
			imports
		});
		addToImportMap(global.admin?.components?.Description);
		addToImportMap(global.admin?.components?.edit?.beforeDocumentControls);
		addToImportMap(global.admin?.components?.edit?.editMenuItems);
		addToImportMap(global.admin?.components?.edit?.PreviewButton);
		addToImportMap(global.admin?.components?.edit?.PublishButton);
		addToImportMap(global.admin?.components?.edit?.SaveButton);
		addToImportMap(global.admin?.components?.edit?.SaveDraftButton);
		addToImportMap(global.admin?.components?.edit?.Status);
		addToImportMap(global.admin?.components?.edit?.UnpublishButton);
		if (global.admin?.components?.views?.edit) for (const editViewConfig of Object.values(global.admin?.components?.views?.edit)) {
			if ("Component" in editViewConfig) addToImportMap(editViewConfig?.Component);
			if ("actions" in editViewConfig) addToImportMap(editViewConfig?.actions);
			if ("tab" in editViewConfig) {
				addToImportMap(editViewConfig?.tab?.Component);
				addToImportMap(editViewConfig?.tab?.Pill);
			}
		}
		if (global.admin?.components?.views) for (const [key, view] of Object.entries(global.admin.components.views)) {
			if (key === "edit") continue;
			if (view && typeof view === "object" && "Component" in view && "path" in view) addToImportMap(view.Component);
		}
	}
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/bin/generateImportMap/iterateConfig.js
function iterateConfig({ addToImportMap, baseDir, config, importMap, imports }) {
	iterateCollections({
		addToImportMap,
		baseDir,
		collections: config.collections,
		config,
		importMap,
		imports
	});
	iterateGlobals({
		addToImportMap,
		baseDir,
		config,
		globals: config.globals,
		importMap,
		imports
	});
	if (config?.blocks) {
		const blocks = Object.values(config.blocks);
		if (blocks?.length) genImportMapIterateFields({
			addToImportMap,
			baseDir,
			config,
			fields: blocks,
			importMap,
			imports
		});
	}
	if (typeof config.admin?.avatar === "object") addToImportMap(config.admin?.avatar?.Component);
	addToImportMap(config.admin?.components?.Nav);
	addToImportMap(config.admin?.components?.header);
	addToImportMap(config.admin?.components?.logout?.Button);
	addToImportMap(config.admin?.components?.settingsMenu);
	if (config.admin?.components?.userMenuSettingsItems?.length) for (const userMenuSettingsItem of config.admin.components.userMenuSettingsItems) if (isUserMenuSettingsGroup(userMenuSettingsItem)) for (const groupedItem of userMenuSettingsItem.items) addToImportMap(groupedItem);
	else addToImportMap(userMenuSettingsItem);
	addToImportMap(config.admin?.components?.graphics?.Icon);
	addToImportMap(config.admin?.components?.graphics?.Logo);
	addToImportMap(config.admin?.components?.actions);
	addToImportMap(config.admin?.components?.afterDashboard);
	addToImportMap(config.admin?.components?.afterLogin);
	addToImportMap(config.admin?.components?.afterNav);
	addToImportMap(config.admin?.components?.afterNavLinks);
	addToImportMap(config.admin?.components?.beforeDashboard);
	addToImportMap(config.admin?.components?.beforeLogin);
	addToImportMap(config.admin?.components?.beforeNav);
	addToImportMap(config.admin?.components?.beforeNavLinks);
	addToImportMap(config.admin?.components?.providers);
	if (config.admin?.components?.sidebar?.tabs?.length) for (const tab of config.admin.components.sidebar.tabs) {
		addToImportMap(tab.components.Icon);
		addToImportMap(tab.components.Content);
	}
	if (config.admin?.components?.views) {
		if (Object.keys(config.admin?.components?.views)?.length) for (const key in config.admin?.components?.views) {
			const adminViewConfig = config.admin?.components?.views[key];
			addToImportMap(adminViewConfig?.Component);
		}
	}
	if (config.admin?.dashboard?.widgets?.length) for (const dashboardWidget of config.admin.dashboard.widgets) {
		addToImportMap(dashboardWidget.Component);
		if (dashboardWidget.fields?.length) genImportMapIterateFields({
			addToImportMap,
			baseDir,
			config,
			fields: dashboardWidget.fields,
			importMap,
			imports
		});
	}
	if (config?.admin?.importMap?.generators?.length) for (const generator of config.admin.importMap.generators) generator({
		addToImportMap,
		baseDir,
		config,
		importMap,
		imports
	});
	if (config?.admin?.dependencies) for (const dependency of Object.values(config.admin.dependencies)) addToImportMap(dependency.path);
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/bin/generateImportMap/utilities/addPayloadComponentToImportMap.js
/**
* Normalizes the component path based on the import map's base directory path.
*/ function getAdjustedComponentPath(importMapToBaseDirPath, componentPath) {
	const normalizedBasePath = importMapToBaseDirPath.replace(/\\/g, "/");
	const normalizedComponentPath = componentPath.replace(/\\/g, "/");
	if (normalizedBasePath.startsWith("./")) return `${normalizedBasePath}${normalizedComponentPath.startsWith("./") ? normalizedComponentPath.substring(2) : normalizedComponentPath}`;
	return path.posix.join(normalizedBasePath, normalizedComponentPath);
}
/**
* Adds a payload component to the import map.
*/ function addPayloadComponentToImportMap({ importMap, importMapToBaseDirPath, imports, payloadComponent }) {
	if (!payloadComponent) return null;
	const { exportName, path: componentPath } = parsePayloadComponent(payloadComponent);
	if (importMap[componentPath + "#" + exportName]) return null;
	const importIdentifier = exportName + "_" + crypto.createHash("md5").update(componentPath).digest("hex");
	importMap[componentPath + "#" + exportName] = importIdentifier;
	if (componentPath.startsWith(".") || componentPath.startsWith("/")) {
		const adjustedComponentPath = getAdjustedComponentPath(importMapToBaseDirPath, componentPath);
		imports[importIdentifier] = {
			path: adjustedComponentPath,
			specifier: exportName
		};
		return {
			path: adjustedComponentPath,
			specifier: exportName
		};
	} else {
		imports[importIdentifier] = {
			path: componentPath,
			specifier: exportName
		};
		return {
			path: componentPath,
			specifier: exportName
		};
	}
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/bin/generateImportMap/utilities/getImportMapToBaseDirPath.js
/**
* Returns the path that navigates from the import map file to the base directory.
* This can then be prepended to relative paths in the import map to get the full, absolute path.
*/ function getImportMapToBaseDirPath({ baseDir, importMapPath }) {
	const importMapDir = path.dirname(importMapPath);
	let relativePath = path.relative(importMapDir, baseDir).replace(/\\/g, "/");
	if (!relativePath) relativePath = "./";
	else if (!relativePath.startsWith(".") && !relativePath.startsWith("/")) relativePath = `./${relativePath}`;
	if (!relativePath.endsWith("/")) relativePath += "/";
	return relativePath;
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/bin/frameworkConventions.js
/**
* Folder-name markers that distinguish the supported framework conventions.
* Shared between import-map resolution and `payload build` framework detection so
* the two cannot drift.
*/ var NEXT_PAYLOAD_ROUTE_GROUP = "(payload)";
var TANSTACK_PAYLOAD_DIR = "_payload";
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/bin/generateImportMap/utilities/resolveImportMapFilePath.js
async function pathOrFileExists(path) {
	try {
		await fs.access(path);
		return true;
	} catch {
		return false;
	}
}
/**
* Default directory patterns for import map resolution, covering the supported
* framework conventions. Directories are probed in order and the first existing
* one wins; the conventions are mutually exclusive in practice, so a Next.js app
* never matches the TanStack patterns and vice versa.
*
* Adapters with a bespoke layout can still bypass this via `candidateDirectories`.
*/ var defaultCandidateDirectories = (rootDir, adminRoute) => [
	path.resolve(rootDir, `app/${NEXT_PAYLOAD_ROUTE_GROUP}${adminRoute}/`),
	path.resolve(rootDir, `src/app/${NEXT_PAYLOAD_ROUTE_GROUP}${adminRoute}/`),
	path.resolve(rootDir, `app/${TANSTACK_PAYLOAD_DIR}/`),
	path.resolve(rootDir, `src/app/${TANSTACK_PAYLOAD_DIR}/`)
];
/**
* Returns the path to the import map file. If the import map file is not found, it throws an error.
*
* @param candidateDirectories - Optional array of directory paths to search for the import map.
*   Defaults to Next.js app directory convention. Framework adapters can provide their own.
*/ async function resolveImportMapFilePath({ adminRoute = "/admin", candidateDirectories, importMapFile, rootDir }) {
	let importMapFilePath = void 0;
	if (importMapFile?.length) {
		if (!await pathOrFileExists(importMapFile)) try {
			await fs.writeFile(importMapFile, "", { flag: "wx" });
		} catch (err) {
			return /* @__PURE__ */ new Error(`Could not find the import map file at ${importMapFile}${err instanceof Error && err?.message ? `: ${err.message}` : ""}`);
		}
		importMapFilePath = importMapFile;
	} else {
		const directories = candidateDirectories ?? defaultCandidateDirectories(rootDir, adminRoute);
		for (const dir of directories) if (await pathOrFileExists(dir)) {
			importMapFilePath = path.resolve(dir, "importMap.js");
			if (!await pathOrFileExists(importMapFilePath)) await fs.writeFile(importMapFilePath, "", { flag: "wx" });
			break;
		}
		if (!importMapFilePath) return /* @__PURE__ */ new Error(`Could not find Payload import map folder. Looked in ${directories.join(" and ")}`);
	}
	return importMapFilePath;
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/bin/generateImportMap/index.js
async function generateImportMap(config, options) {
	const logger = getLogger("payload", "sync");
	const shouldLog = options?.log ?? true;
	if (shouldLog) logger.info("Generating import map");
	const importMap = {};
	const imports = {};
	const rootDir = process$1.env.ROOT_DIR ?? process$1.cwd();
	const baseDir = config.admin.importMap.baseDir ?? process$1.cwd();
	const importMapFilePath = await resolveImportMapFilePath({
		adminRoute: config.routes.admin,
		importMapFile: config?.admin?.importMap?.importMapFile,
		rootDir
	});
	if (importMapFilePath instanceof Error) if (options?.ignoreResolveError) return;
	else throw importMapFilePath;
	const importMapToBaseDirPath = getImportMapToBaseDirPath({
		baseDir,
		importMapPath: importMapFilePath
	});
	const addToImportMap = (payloadComponent) => {
		if (!payloadComponent) return;
		if (typeof payloadComponent !== "object" && typeof payloadComponent !== "string") {
			logger.error(payloadComponent);
			throw new Error("addToImportMap > Payload component must be an object or a string");
		}
		if (Array.isArray(payloadComponent)) for (const component of payloadComponent) addPayloadComponentToImportMap({
			importMap,
			importMapToBaseDirPath,
			imports,
			payloadComponent: component
		});
		else addPayloadComponentToImportMap({
			importMap,
			importMapToBaseDirPath,
			imports,
			payloadComponent
		});
	};
	iterateConfig({
		addToImportMap,
		baseDir: config.admin.importMap.baseDir,
		config,
		importMap,
		imports
	});
	await writeImportMap({
		componentMap: importMap,
		force: options?.force,
		importMap: imports,
		importMapFilePath,
		log: shouldLog
	});
}
async function writeImportMap({ componentMap, force, importMap, importMapFilePath, log }) {
	const logger = getLogger("payload", "sync");
	const imports = [];
	for (const [identifier, { path, specifier }] of Object.entries(importMap)) imports.push(`import { ${specifier} as ${identifier} } from '${path}'`);
	const mapKeys = [];
	for (const [userPath, identifier] of Object.entries(componentMap)) mapKeys.push(`  "${userPath}": ${identifier}`);
	const importMapOutputFile = `${imports.join("\n")}

/** @type import('payload').ImportMap */
export const importMap = {
${mapKeys.join(",\n")}
}
`;
	if (!force) {
		if ((await fs.readFile(importMapFilePath, "utf-8"))?.trim() === importMapOutputFile?.trim()) {
			if (log) logger.info("No new imports found, skipping writing import map");
			return;
		}
	}
	if (log) logger.info(`Writing import map to ${importMapFilePath}`);
	await fs.writeFile(importMapFilePath, importMapOutputFile);
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/collections/operations/countVersions.js
var countVersionsOperation = async (incomingArgs) => {
	let args = incomingArgs;
	try {
		args = await buildBeforeOperation({
			args,
			collection: args.collection.config,
			operation: "countVersions",
			overrideAccess: args.overrideAccess
		});
		const { collection: { config: collectionConfig }, disableErrors, overrideAccess, req, where } = args;
		const { locale, payload } = req;
		let accessResult;
		if (!overrideAccess) {
			accessResult = await executeAccess({
				disableErrors,
				req
			}, collectionConfig.access.readVersions);
			if (accessResult === false) return { totalDocs: 0 };
		}
		let result;
		const fullWhere = combineQueries(where, accessResult);
		const versionFields = buildVersionCollectionFields(payload.config, collectionConfig, true);
		sanitizeWhereQuery({
			fields: versionFields,
			payload,
			where: fullWhere
		});
		await validateQueryPaths({
			collectionConfig,
			overrideAccess,
			req,
			versionFields,
			where
		});
		result = await payload.db.countVersions({
			collection: collectionConfig.slug,
			locale,
			req,
			where: fullWhere
		});
		result = await buildAfterOperation({
			args,
			collection: collectionConfig,
			operation: "countVersions",
			overrideAccess,
			result
		});
		return result;
	} catch (error) {
		await killTransaction(args.req);
		throw error;
	}
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/collections/operations/local/countVersions.js
async function countVersionsLocal(payload, options) {
	const { collection: collectionSlug, disableErrors, overrideAccess = true, where } = options;
	const collection = payload.collections[collectionSlug];
	if (!collection) throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Count Versions Operation.`);
	return countVersionsOperation({
		collection,
		disableErrors,
		overrideAccess,
		req: await createLocalReq(options, payload),
		where
	});
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/email/defaults.js
var emailDefaults = {
	defaultFromAddress: "info@payloadcms.com",
	defaultFromName: "Payload"
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/email/getStringifiedToAddress.js
var getStringifiedToAddress = (message) => {
	let stringifiedTo;
	if (typeof message.to === "string") stringifiedTo = message.to;
	else if (Array.isArray(message.to)) stringifiedTo = message.to.map((to) => {
		if (typeof to === "string") return to;
		else if (to.address) return to.address;
		return "";
	}).join(", ");
	else if (message.to?.address) stringifiedTo = message.to.address;
	return stringifiedTo;
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/email/consoleEmailAdapter.js
var consoleEmailAdapter = ({ payload }) => ({
	name: "console",
	defaultFromAddress: emailDefaults.defaultFromAddress,
	defaultFromName: emailDefaults.defaultFromName,
	sendEmail: async (message) => {
		const res = `Email attempted without being configured. To: '${getStringifiedToAddress(message)}', Subject: '${message.subject}'`;
		payload.logger.info({ msg: res });
		return Promise.resolve();
	}
});
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/queues/localAPI.js
var getJobsLocalAPI = (payload) => ({
	handleSchedules: async (args) => {
		const newReq = args?.req ?? await createLocalReq({}, payload);
		return await handleSchedules({
			allQueues: args?.allQueues,
			queue: args?.queue,
			req: newReq
		});
	},
	queue: async (args) => {
		const overrideAccess = args?.overrideAccess !== false;
		const req = args.req ?? await createLocalReq({}, payload);
		if (!overrideAccess) {
			if (!await (payload.config.jobs?.access?.queue ?? (() => true))({ req })) throw new Forbidden(req.t);
		}
		let queue = void 0;
		if (args.queue) queue = args.queue;
		else if (args.workflow) {
			const workflow = payload.config.jobs?.workflows?.find(({ slug }) => slug === args.workflow);
			if (workflow?.queue) queue = workflow.queue;
		}
		const data = { input: args.input };
		if (queue) data.queue = queue;
		if (args.waitUntil) data.waitUntil = args.waitUntil?.toISOString();
		if (args.workflow) data.workflowSlug = args.workflow;
		if (args.task) data.taskSlug = args.task;
		if (args.meta) data.meta = args.meta;
		if (payload.config.jobs?.enableConcurrencyControl) {
			let concurrencyKey = null;
			let supersedes = false;
			const queueName = queue || "default";
			if (args.workflow) {
				const workflow = payload.config.jobs?.workflows?.find(({ slug }) => slug === args.workflow);
				if (workflow?.concurrency) {
					const concurrencyConfig = workflow.concurrency;
					if (typeof concurrencyConfig === "function") concurrencyKey = concurrencyConfig({
						input: args.input,
						queue: queueName
					});
					else {
						concurrencyKey = concurrencyConfig.key({
							input: args.input,
							queue: queueName
						});
						supersedes = concurrencyConfig.supersedes ?? false;
					}
				}
			} else if (args.task) {
				const task = payload.config.jobs?.tasks?.find(({ slug }) => slug === args.task);
				if (task?.concurrency) {
					const concurrencyConfig = task.concurrency;
					if (typeof concurrencyConfig === "function") concurrencyKey = concurrencyConfig({
						input: args.input,
						queue: queueName
					});
					else {
						concurrencyKey = concurrencyConfig.key({
							input: args.input,
							queue: queueName
						});
						supersedes = concurrencyConfig.supersedes ?? false;
					}
				}
			}
			if (concurrencyKey) {
				data.concurrencyKey = concurrencyKey;
				if (supersedes) await payload.db.deleteMany({
					collection: jobsCollectionSlug,
					req,
					where: { and: [
						{ concurrencyKey: { equals: concurrencyKey } },
						{ processing: { equals: false } },
						{ completedAt: { exists: false } }
					] }
				});
			}
		}
		return jobAfterRead({
			config: payload.config,
			doc: await payload.db.create({
				collection: jobsCollectionSlug,
				data,
				req
			})
		});
	},
	run: async (args) => {
		const newReq = args?.req ?? await createLocalReq({}, payload);
		return await runJobs({
			allQueues: args?.allQueues,
			limit: args?.limit,
			overrideAccess: args?.overrideAccess !== false,
			processingOrder: args?.processingOrder,
			queue: args?.queue,
			req: newReq,
			sequential: args?.sequential,
			silent: args?.silent,
			where: args?.where
		});
	},
	runByID: async (args) => {
		const newReq = args.req ?? await createLocalReq({}, payload);
		return await runJobs({
			id: args.id,
			overrideAccess: args.overrideAccess !== false,
			req: newReq,
			silent: args.silent
		});
	},
	cancel: async (args) => {
		const req = args.req ?? await createLocalReq({}, payload);
		if (!(args.overrideAccess !== false)) {
			if (!await (payload.config.jobs?.access?.cancel ?? (() => true))({ req })) throw new Forbidden(req.t);
		}
		const and = [
			args.where,
			{ completedAt: { exists: false } },
			{ hasError: { not_equals: true } }
		];
		if (args.queue) and.push({ queue: { equals: args.queue } });
		await updateJobs({
			data: {
				completedAt: null,
				error: { cancelled: true },
				hasError: true,
				processing: false,
				waitUntil: null
			},
			req,
			returning: false,
			where: { and }
		});
	},
	cancelByID: async (args) => {
		const req = args.req ?? await createLocalReq({}, payload);
		if (!(args.overrideAccess !== false)) {
			if (!await (payload.config.jobs?.access?.cancel ?? (() => true))({ req })) throw new Forbidden(req.t);
		}
		await updateJob({
			id: args.id,
			data: {
				completedAt: null,
				error: { cancelled: true },
				hasError: true,
				processing: false,
				waitUntil: null
			},
			req,
			returning: false
		});
	}
});
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/telemetry/events/serverInit.js
var serverInit = (payload) => {
	sendTelemetryEvent({
		event: { type: "server-init" },
		payload
	});
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/getRequestLanguage.js
var getRequestLanguage = ({ config, cookies, headers }) => {
	const supportedLanguageKeys = Object.keys(config.i18n.supportedLanguages);
	const langCookie = cookies.get(`${config.cookiePrefix || "payload"}-lng`);
	const languageFromCookie = typeof langCookie === "string" ? langCookie : langCookie?.value;
	if (languageFromCookie && supportedLanguageKeys.includes(languageFromCookie)) return languageFromCookie;
	const languageFromHeader = headers.get("Accept-Language") ? extractHeaderLanguage(headers.get("Accept-Language")) : void 0;
	if (languageFromHeader && supportedLanguageKeys.includes(languageFromHeader)) return languageFromHeader;
	return config.i18n.fallbackLanguage;
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/createPayloadRequest.js
var createPayloadRequest = async ({ canSetHeaders, config: configPromise, params, payloadInstanceCacheKey, request }) => {
	const cookies = parseCookies(request.headers);
	const payload = await getPayload({
		config: configPromise,
		cron: true,
		key: payloadInstanceCacheKey
	});
	const { config } = payload;
	const localization = config.localization;
	const urlProperties = new URL(request.url);
	const { pathname, searchParams } = urlProperties;
	const isGraphQL = !config.graphQL.disable && pathname === formatAdminURL({
		apiRoute: config.routes.api,
		path: config.routes.graphQL
	});
	const language = getRequestLanguage({
		config,
		cookies,
		headers: request.headers
	});
	const i18n = await initI18n({
		config: config.i18n,
		context: "api",
		language
	});
	let locale = searchParams.get("locale");
	const { search: queryToParse } = urlProperties;
	const query = queryToParse ? parse$1(queryToParse, {
		allowEmptyArrays: true,
		arrayLimit: 1e3,
		depth: 10,
		ignoreQueryPrefix: true
	}) : {};
	let fallbackLocale = query.fallbackLocale || searchParams.get("fallback-locale") || searchParams.get("fallbackLocale");
	if (localization) {
		const locales = sanitizeLocales({
			fallbackLocale,
			locale,
			localization
		});
		fallbackLocale = locales.fallbackLocale;
		locale = locales.locale;
	}
	const customRequest = {
		context: {},
		fallbackLocale,
		hash: urlProperties.hash,
		host: urlProperties.host,
		href: urlProperties.href,
		i18n,
		locale,
		origin: urlProperties.origin,
		pathname: urlProperties.pathname,
		payload,
		payloadAPI: isGraphQL ? "GraphQL" : "REST",
		payloadDataLoader: void 0,
		payloadUploadSizes: {},
		port: urlProperties.port,
		protocol: urlProperties.protocol,
		query,
		routeParams: params || {},
		search: urlProperties.search,
		searchParams: urlProperties.searchParams,
		t: i18n.t,
		transactionID: void 0,
		user: null
	};
	const req = Object.assign(request, customRequest);
	req.payloadDataLoader = getDataLoader(req);
	const { responseHeaders, user } = await executeAuthStrategies({
		canSetHeaders,
		headers: req.headers,
		isGraphQL,
		payload
	});
	req.user = user;
	if (responseHeaders) req.responseHeaders = responseHeaders;
	return req;
};
//#endregion
//#region node_modules/.pnpm/path-to-regexp@6.3.0/node_modules/path-to-regexp/dist.es2015/index.js
/**
* Tokenize input string.
*/
function lexer(str) {
	var tokens = [];
	var i = 0;
	while (i < str.length) {
		var char = str[i];
		if (char === "*" || char === "+" || char === "?") {
			tokens.push({
				type: "MODIFIER",
				index: i,
				value: str[i++]
			});
			continue;
		}
		if (char === "\\") {
			tokens.push({
				type: "ESCAPED_CHAR",
				index: i++,
				value: str[i++]
			});
			continue;
		}
		if (char === "{") {
			tokens.push({
				type: "OPEN",
				index: i,
				value: str[i++]
			});
			continue;
		}
		if (char === "}") {
			tokens.push({
				type: "CLOSE",
				index: i,
				value: str[i++]
			});
			continue;
		}
		if (char === ":") {
			var name = "";
			var j = i + 1;
			while (j < str.length) {
				var code = str.charCodeAt(j);
				if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
					name += str[j++];
					continue;
				}
				break;
			}
			if (!name) throw new TypeError("Missing parameter name at ".concat(i));
			tokens.push({
				type: "NAME",
				index: i,
				value: name
			});
			i = j;
			continue;
		}
		if (char === "(") {
			var count = 1;
			var pattern = "";
			var j = i + 1;
			if (str[j] === "?") throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
			while (j < str.length) {
				if (str[j] === "\\") {
					pattern += str[j++] + str[j++];
					continue;
				}
				if (str[j] === ")") {
					count--;
					if (count === 0) {
						j++;
						break;
					}
				} else if (str[j] === "(") {
					count++;
					if (str[j + 1] !== "?") throw new TypeError("Capturing groups are not allowed at ".concat(j));
				}
				pattern += str[j++];
			}
			if (count) throw new TypeError("Unbalanced pattern at ".concat(i));
			if (!pattern) throw new TypeError("Missing pattern at ".concat(i));
			tokens.push({
				type: "PATTERN",
				index: i,
				value: pattern
			});
			i = j;
			continue;
		}
		tokens.push({
			type: "CHAR",
			index: i,
			value: str[i++]
		});
	}
	tokens.push({
		type: "END",
		index: i,
		value: ""
	});
	return tokens;
}
/**
* Parse a string for the raw tokens.
*/
function parse(str, options) {
	if (options === void 0) options = {};
	var tokens = lexer(str);
	var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
	var result = [];
	var key = 0;
	var i = 0;
	var path = "";
	var tryConsume = function(type) {
		if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
	};
	var mustConsume = function(type) {
		var value = tryConsume(type);
		if (value !== void 0) return value;
		var _a = tokens[i], nextType = _a.type, index = _a.index;
		throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
	};
	var consumeText = function() {
		var result = "";
		var value;
		while (value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) result += value;
		return result;
	};
	var isSafe = function(value) {
		for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
			var char = delimiter_1[_i];
			if (value.indexOf(char) > -1) return true;
		}
		return false;
	};
	var safePattern = function(prefix) {
		var prev = result[result.length - 1];
		var prevText = prefix || (prev && typeof prev === "string" ? prev : "");
		if (prev && !prevText) throw new TypeError("Must have text between two parameters, missing text after \"".concat(prev.name, "\""));
		if (!prevText || isSafe(prevText)) return "[^".concat(escapeString(delimiter), "]+?");
		return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
	};
	while (i < tokens.length) {
		var char = tryConsume("CHAR");
		var name = tryConsume("NAME");
		var pattern = tryConsume("PATTERN");
		if (name || pattern) {
			var prefix = char || "";
			if (prefixes.indexOf(prefix) === -1) {
				path += prefix;
				prefix = "";
			}
			if (path) {
				result.push(path);
				path = "";
			}
			result.push({
				name: name || key++,
				prefix,
				suffix: "",
				pattern: pattern || safePattern(prefix),
				modifier: tryConsume("MODIFIER") || ""
			});
			continue;
		}
		var value = char || tryConsume("ESCAPED_CHAR");
		if (value) {
			path += value;
			continue;
		}
		if (path) {
			result.push(path);
			path = "";
		}
		if (tryConsume("OPEN")) {
			var prefix = consumeText();
			var name_1 = tryConsume("NAME") || "";
			var pattern_1 = tryConsume("PATTERN") || "";
			var suffix = consumeText();
			mustConsume("CLOSE");
			result.push({
				name: name_1 || (pattern_1 ? key++ : ""),
				pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
				prefix,
				suffix,
				modifier: tryConsume("MODIFIER") || ""
			});
			continue;
		}
		mustConsume("END");
	}
	return result;
}
/**
* Create path match function from `path-to-regexp` spec.
*/
function match(str, options) {
	var keys = [];
	return regexpToFunction(pathToRegexp(str, keys, options), keys, options);
}
/**
* Create a path match function from `path-to-regexp` output.
*/
function regexpToFunction(re, keys, options) {
	if (options === void 0) options = {};
	var _a = options.decode, decode = _a === void 0 ? function(x) {
		return x;
	} : _a;
	return function(pathname) {
		var m = re.exec(pathname);
		if (!m) return false;
		var path = m[0], index = m.index;
		var params = Object.create(null);
		var _loop_1 = function(i) {
			if (m[i] === void 0) return "continue";
			var key = keys[i - 1];
			if (key.modifier === "*" || key.modifier === "+") params[key.name] = m[i].split(key.prefix + key.suffix).map(function(value) {
				return decode(value, key);
			});
			else params[key.name] = decode(m[i], key);
		};
		for (var i = 1; i < m.length; i++) _loop_1(i);
		return {
			path,
			index,
			params
		};
	};
}
/**
* Escape a regular expression string.
*/
function escapeString(str) {
	return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
* Get the flags for a regexp from the options.
*/
function flags(options) {
	return options && options.sensitive ? "" : "i";
}
/**
* Pull out keys from a regexp.
*/
function regexpToRegexp(path, keys) {
	if (!keys) return path;
	var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
	var index = 0;
	var execResult = groupsRegex.exec(path.source);
	while (execResult) {
		keys.push({
			name: execResult[1] || index++,
			prefix: "",
			suffix: "",
			modifier: "",
			pattern: ""
		});
		execResult = groupsRegex.exec(path.source);
	}
	return path;
}
/**
* Transform an array into a regexp.
*/
function arrayToRegexp(paths, keys, options) {
	var parts = paths.map(function(path) {
		return pathToRegexp(path, keys, options).source;
	});
	return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
/**
* Create a path regexp from string input.
*/
function stringToRegexp(path, keys, options) {
	return tokensToRegexp(parse(path, options), keys, options);
}
/**
* Expose a function for taking tokens and returning a RegExp.
*/
function tokensToRegexp(tokens, keys, options) {
	if (options === void 0) options = {};
	var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
		return x;
	} : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
	var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
	var delimiterRe = "[".concat(escapeString(delimiter), "]");
	var route = start ? "^" : "";
	for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
		var token = tokens_1[_i];
		if (typeof token === "string") route += escapeString(encode(token));
		else {
			var prefix = escapeString(encode(token.prefix));
			var suffix = escapeString(encode(token.suffix));
			if (token.pattern) {
				if (keys) keys.push(token);
				if (prefix || suffix) if (token.modifier === "+" || token.modifier === "*") {
					var mod = token.modifier === "*" ? "?" : "";
					route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
				} else route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
				else {
					if (token.modifier === "+" || token.modifier === "*") throw new TypeError("Can not repeat \"".concat(token.name, "\" without a prefix and suffix"));
					route += "(".concat(token.pattern, ")").concat(token.modifier);
				}
			} else route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
		}
	}
	if (end) {
		if (!strict) route += "".concat(delimiterRe, "?");
		route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
	} else {
		var endToken = tokens[tokens.length - 1];
		var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
		if (!strict) route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
		if (!isEndDelimited) route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
	}
	return new RegExp(route, flags(options));
}
/**
* Normalize the given path string, returning a regular expression.
*
* An empty array can be passed in for the keys, which will hold the
* placeholder key descriptions. For example, using `/user/:id`, `keys` will
* contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
*/
function pathToRegexp(path, keys, options) {
	if (path instanceof RegExp) return regexpToRegexp(path, keys);
	if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
	return stringToRegexp(path, keys, options);
}
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/routeError.js
var routeError = async ({ collection, config: configArg, err, req: incomingReq }) => {
	if ("payloadInitError" in err && err.payloadInitError === true) {
		console.error(err);
		return Response.json({ message: "There was an error initializing Payload" }, { status: t.INTERNAL_SERVER_ERROR });
	}
	let payload = incomingReq && "payload" in incomingReq && incomingReq?.payload;
	if (!payload) try {
		payload = await getPayload({
			config: configArg,
			cron: true
		});
	} catch (ignore) {
		return Response.json({ message: "There was an error initializing Payload" }, { status: t.INTERNAL_SERVER_ERROR });
	}
	let response = formatErrors(err);
	let status = err.status || t.INTERNAL_SERVER_ERROR;
	logError({
		err,
		payload
	});
	const req = incomingReq;
	req.payload = payload;
	const headers = headersWithCors({
		headers: new Headers(),
		req
	});
	const { config } = payload;
	if (!isErrorPublic(err, config)) response = formatErrors(new APIError("Something went wrong."));
	if (config.debug && config.debug === true) response.stack = err.stack;
	if (collection) await collection.config.hooks.afterError?.reduce(async (promise, hook) => {
		await promise;
		const result = await hook({
			collection: collection.config,
			context: req.context,
			error: err,
			req,
			result: response
		});
		if (result) {
			response = result.response || response;
			status = result.status || status;
		}
	}, Promise.resolve());
	await config.hooks.afterError?.reduce(async (promise, hook) => {
		await promise;
		const result = await hook({
			collection: collection?.config,
			context: req.context,
			error: err,
			req,
			result: response
		});
		if (result) {
			response = result.response || response;
			status = result.status || status;
		}
	}, Promise.resolve());
	return Response.json(response, {
		headers: req.responseHeaders ? mergeHeaders(req.responseHeaders, headers) : headers,
		status
	});
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/utilities/handleEndpoints.js
var notFoundResponse = (req, pathname) => {
	return Response.json({ message: `Route not found "${pathname ?? new URL(req.url).pathname}"` }, {
		headers: headersWithCors({
			headers: new Headers(),
			req
		}),
		status: t.NOT_FOUND
	});
};
/**
* Attaches the Payload REST API to any backend framework that uses Fetch Request/Response
* like Next.js (app router), Remix, Bun, Hono.
*
* ### Example: Using Hono
* ```ts
* import { handleEndpoints } from 'payload';
* import { serve } from '@hono/node-server';
* import { loadEnv } from 'payload/node';
*
* const port = 3001;
* loadEnv();
*
* const { default: config } = await import('@payload-config');
*
* const server = serve({
*   fetch: async (request) => {
*     const response = await handleEndpoints({
*       config,
*       request: request.clone(),
*     });
*
*     return response;
*   },
*   port,
* });
*
* server.on('listening', () => {
*   console.log(`API server is listening on http://localhost:${port}/api`);
* });
* ```
*/ var handleEndpoints = async ({ basePath = "", config: incomingConfig, path, payloadInstanceCacheKey, request }) => {
	let handler;
	let req;
	let collection;
	if (request.method.toLowerCase() === "post" && (request.headers.get("X-Payload-HTTP-Method-Override") === "GET" || request.headers.get("X-HTTP-Method-Override") === "GET")) {
		const requestHeaders = request.headers;
		const requestSignal = request.signal;
		let url = request.url;
		let data = void 0;
		if (request.headers.get("Content-Type") === "application/x-www-form-urlencoded") {
			const search = await request.text();
			url = `${request.url}?${search}`;
		} else if (request.headers.get("Content-Type") === "application/json") {
			data = await request.json();
			if (data?.locale) url += `?locale=${data.locale}`;
			if (data?.fallbackLocale) url += `&fallbackLocale=${data.depth}`;
		}
		const req = new Request(url, {
			headers: requestHeaders,
			method: "GET",
			signal: requestSignal
		});
		if (data) req.data = data;
		return await handleEndpoints({
			basePath,
			config: incomingConfig,
			path,
			payloadInstanceCacheKey,
			request: req
		});
	}
	try {
		req = await createPayloadRequest({
			canSetHeaders: true,
			config: incomingConfig,
			payloadInstanceCacheKey,
			request
		});
		const { payload } = req;
		const { config } = payload;
		const pathname = path ?? new URL(req.url).pathname;
		const baseAPIPath = formatAdminURL({
			apiRoute: config.routes.api,
			path: ""
		});
		if (!pathname.startsWith(baseAPIPath)) return notFoundResponse(req, pathname);
		let adjustedPathname = pathname.replace(baseAPIPath, "");
		let isGlobals = false;
		if (adjustedPathname.startsWith("/globals")) {
			isGlobals = true;
			adjustedPathname = adjustedPathname.replace("/globals", "");
		}
		const segments = adjustedPathname.split("/");
		segments.shift();
		const firstParam = segments[0];
		let globalConfig;
		if (firstParam) {
			if (isGlobals) globalConfig = payload.globals.config.find((each) => each.slug === firstParam);
			else if (payload.collections[firstParam]) collection = payload.collections[firstParam];
		}
		let endpoints = config.endpoints;
		if (collection) {
			endpoints = collection.config.endpoints;
			adjustedPathname = adjustedPathname.replace(`/${collection.config.slug}`, "");
		} else if (globalConfig) {
			adjustedPathname = adjustedPathname.replace(`/${globalConfig.slug}`, "");
			endpoints = globalConfig.endpoints;
		}
		if (adjustedPathname === "") adjustedPathname = "/";
		if (endpoints === false) return Response.json({ message: `Cannot ${req.method?.toUpperCase()} ${req.url}` }, {
			headers: headersWithCors({
				headers: new Headers(),
				req
			}),
			status: t.NOT_IMPLEMENTED
		});
		const endpoint = endpoints?.find((endpoint) => {
			if (endpoint.method !== req.method?.toLowerCase()) return false;
			const matchResult = match(endpoint.path, { decode: decodeURIComponent })(adjustedPathname);
			if (!matchResult) return false;
			req.routeParams = matchResult.params;
			if (collection) req.routeParams.collection = collection.config.slug;
			else if (globalConfig) req.routeParams.global = globalConfig.slug;
			return true;
		});
		if (endpoint) handler = endpoint.handler;
		if (!handler) {
			if (req.method?.toLowerCase() === "options") return Response.json({}, {
				headers: headersWithCors({
					headers: new Headers(),
					req
				}),
				status: 200
			});
			return notFoundResponse(req, pathname);
		}
		const response = await handler(req);
		return new Response(response.body, {
			headers: headersWithCors({
				headers: mergeHeaders(req.responseHeaders ?? new Headers(), response.headers),
				req
			}),
			status: response.status,
			statusText: response.statusText
		});
	} catch (_err) {
		return routeError({
			collection,
			config: incomingConfig,
			err: _err,
			req
		});
	}
};
//#endregion
//#region node_modules/.pnpm/payload@4.0.0-internal.fa183d3_graphql@16.14.2_typescript@6.0.3/node_modules/payload/dist/index.js
var filename = fileURLToPath(import.meta.url);
var dirname = path.dirname(filename);
/**
* @description Payload
*/ var BasePayload = class {
	/**
	* @description Authorization and Authentication using headers and cookies to run auth user strategies
	* @returns permissions: Permissions
	* @returns user: User
	*/ auth = async (options) => {
		return authLocal(this, options);
	};
	authStrategies;
	blocks = {};
	collections = {};
	config;
	/**
	* @description Performs count operation
	* @param options
	* @returns count of documents satisfying query
	*/ count = async (options) => {
		return countLocal(this, options);
	};
	/**
	* @description Performs countGlobalVersions operation
	* @param options
	* @returns count of global document versions satisfying query
	*/ countGlobalVersions = async (options) => {
		return countGlobalVersionsLocal(this, options);
	};
	/**
	* @description Performs countVersions operation
	* @param options
	* @returns count of document versions satisfying query
	*/ countVersions = async (options) => {
		return countVersionsLocal(this, options);
	};
	/**
	* @description Performs create operation
	* @param options
	* @returns created document
	*/ create = async (options) => {
		return createLocal(this, options);
	};
	crons = [];
	db;
	decrypt = decrypt;
	destroy = async () => {
		if (this.crons.length) {
			const cronsToStop = this.crons.splice(0, this.crons.length);
			await Promise.all(cronsToStop.map((cron) => cron.stop()));
		}
		if (this.db?.destroy && typeof this.db.destroy === "function") await this.db.destroy();
	};
	duplicate = async (options) => {
		return duplicateLocal(this, options);
	};
	email;
	encrypt = encrypt;
	extensions;
	/**
	* @description Find documents with criteria
	* @param options
	* @returns documents satisfying query
	*/ find = async (options) => {
		return findLocal(this, options);
	};
	/**
	* @description Find document by ID
	* @param options
	* @returns document with specified ID
	*/ findByID = async (options) => {
		return findByIDLocal(this, options);
	};
	/**
	* @description Find distinct field values
	* @param options
	* @returns result with distinct field values
	*/ findDistinct = async (options) => {
		return findDistinct(this, options);
	};
	findGlobal = async (options) => {
		return findOneGlobalLocal(this, options);
	};
	/**
	* @description Find global version by ID
	* @param options
	* @returns global version with specified ID
	*/ findGlobalVersionByID = async (options) => {
		return findGlobalVersionByIDLocal(this, options);
	};
	/**
	* @description Find global versions with criteria
	* @param options
	* @returns versions satisfying query
	*/ findGlobalVersions = async (options) => {
		return findGlobalVersionsLocal(this, options);
	};
	/**
	* @description Find version by ID
	* @param options
	* @returns version with specified ID
	*/ findVersionByID = async (options) => {
		return findVersionByIDLocal(this, options);
	};
	/**
	* @description Find versions with criteria
	* @param options
	* @returns versions satisfying query
	*/ findVersions = async (options) => {
		return findVersionsLocal(this, options);
	};
	forgotPassword = async (options) => {
		return forgotPasswordLocal(this, options);
	};
	getAdminURL = () => formatAdminURL({
		adminRoute: this.config.routes.admin,
		path: "",
		serverURL: this.config.serverURL
	});
	getAPIURL = () => formatAdminURL({
		apiRoute: this.config.routes.api,
		path: "",
		serverURL: this.config.serverURL
	});
	globals;
	importMap;
	jobs = getJobsLocalAPI(this);
	/**
	* Key Value storage
	*/ kv;
	logger;
	login = async (options) => {
		return loginLocal(this, options);
	};
	resetPassword = async (options) => {
		return resetPasswordLocal(this, options);
	};
	/**
	* @description Restore global version by ID
	* @param options
	* @returns version with specified ID
	*/ restoreGlobalVersion = async (options) => {
		return restoreGlobalVersionLocal(this, options);
	};
	/**
	* @description Restore version by ID
	* @param options
	* @returns version with specified ID
	*/ restoreVersion = async (options) => {
		return restoreVersionLocal(this, options);
	};
	schema;
	secret;
	sendEmail;
	types;
	unlock = async (options) => {
		return unlockLocal(this, options);
	};
	updateGlobal = async (options) => {
		return updateGlobalLocal(this, options);
	};
	validationRules;
	verifyEmail = async (options) => {
		return verifyEmailLocal(this, options);
	};
	versions = {};
	async _initializeCrons() {
		if (this.config.jobs.enabled && this.config.jobs.autoRun && !isNextBuild()) {
			const DEFAULT_CRON = "* * * * *";
			const DEFAULT_LIMIT = 10;
			const cronJobs = typeof this.config.jobs.autoRun === "function" ? await this.config.jobs.autoRun(this) : this.config.jobs.autoRun;
			await Promise.all(cronJobs.map((cronConfig) => {
				const jobAutorunCron = new E$1(cronConfig.cron ?? DEFAULT_CRON, async () => {
					if (_internal_jobSystemGlobals.shouldAutoSchedule && !cronConfig.disableScheduling && this.config.jobs.scheduling) await this.jobs.handleSchedules({
						allQueues: cronConfig.allQueues,
						queue: cronConfig.queue
					});
					if (!_internal_jobSystemGlobals.shouldAutoRun) return;
					if (typeof this.config.jobs.shouldAutoRun === "function") {
						if (!await this.config.jobs.shouldAutoRun(this)) {
							jobAutorunCron.stop();
							return;
						}
					}
					await this.jobs.run({
						allQueues: cronConfig.allQueues,
						limit: cronConfig.limit ?? DEFAULT_LIMIT,
						queue: cronConfig.queue,
						silent: cronConfig.silent
					});
				}, {
					catch: (err) => {
						this.logger.error({
							err,
							msg: "Error in job queue cron job handler"
						});
					},
					protect: true
				});
				this.crons.push(jobAutorunCron);
			}));
		}
	}
	async bin({ args, cwd, log }) {
		return new Promise((resolve, reject) => {
			const spawned = spawn("node", [path.resolve(dirname, "../bin.js"), ...args], {
				cwd,
				stdio: log || log === void 0 ? "inherit" : "ignore"
			});
			spawned.on("exit", (code) => {
				resolve({ code });
			});
			spawned.on("error", (error) => {
				reject(error);
			});
		});
	}
	delete(options) {
		return deleteLocal(this, options);
	}
	/**
	* @description Initializes Payload
	* @param options
	*/ async init(options) {
		this.importMap = options.importMap;
		if (!options?.config) throw new Error("Error: the payload config is required to initialize payload.");
		this.config = await options.config;
		this.logger = getLogger("payload", this.config.logger);
		if (!this.config.secret) throw new Error("Error: missing secret key. A secret key is needed to secure Payload.");
		this.secret = crypto.createHash("sha256").update(this.config.secret).digest("hex").slice(0, 32);
		this.globals = { config: this.config.globals };
		for (const collection of this.config.collections) {
			let customIDType = void 0;
			const findCustomID = ({ field }) => {
				if ([
					"array",
					"blocks",
					"group"
				].includes(field.type) || field.type === "tab" && "name" in field) return true;
				if (!fieldAffectsData(field)) return;
				if (field.name === "id") {
					customIDType = field.type;
					return true;
				}
			};
			traverseFields({
				callback: findCustomID,
				config: this.config,
				fields: collection.fields,
				parentIsLocalized: false
			});
			this.collections[collection.slug] = {
				config: collection,
				customIDType
			};
		}
		this.blocks = this.config.blocks.reduce((blocks, block) => {
			blocks[block.slug] = block;
			return blocks;
		}, {});
		this.db = this.config.db.init({ payload: this });
		this.db.payload = this;
		this.kv = this.config.kv.init({ payload: this });
		if (this.db?.init) await this.db.init();
		if (!options.disableDBConnect && this.db.connect) await this.db.connect();
		if (this.config.email instanceof Promise) {
			const awaitedAdapter = await this.config.email;
			this.email = awaitedAdapter({ payload: this });
		} else if (this.config.email) this.email = this.config.email({ payload: this });
		else {
			if (process.env.NEXT_PHASE !== "phase-production-build") this.logger.warn(`No email adapter provided. Email will be written to console. More info at https://payloadcms.com/docs/email/overview.`);
			this.email = consoleEmailAdapter({ payload: this });
		}
		if (!this.config.sharp && this.config.collections.some((c) => c.upload.imageSizes || c.upload.formatOptions)) this.logger.warn(`Image resizing is enabled for one or more collections, but sharp not installed. Please install 'sharp' and pass into the config.`);
		if (process.env.VERCEL) {
			const uploadCollWithoutAdapter = this.config.collections.filter((c) => c.upload && c.upload.adapter === void 0);
			if (uploadCollWithoutAdapter.length) {
				const slugs = uploadCollWithoutAdapter.map((c) => c.slug).join(", ");
				this.logger.warn(`Collections with uploads enabled require a storage adapter when deploying to Vercel. Collection(s) without storage adapters: ${slugs}. See https://payloadcms.com/docs/upload/storage-adapters for more info.`);
			}
		}
		this.sendEmail = this.email["sendEmail"];
		serverInit(this);
		let jwtStrategyEnabled = false;
		this.authStrategies = this.config.collections.reduce((authStrategies, collection) => {
			if (collection?.auth) {
				if (collection.auth.strategies.length > 0) authStrategies.push(...collection.auth.strategies);
				if (collection.auth?.useAPIKey) authStrategies.push({
					name: `${collection.slug}-api-key`,
					authenticate: APIKeyAuthentication(collection)
				});
				if (!collection.auth.disableLocalStrategy && !jwtStrategyEnabled) jwtStrategyEnabled = true;
			}
			return authStrategies;
		}, []);
		if (jwtStrategyEnabled) this.authStrategies.push({
			name: "local-jwt",
			authenticate: JWTAuthentication
		});
		try {
			if (!options.disableOnInit) {
				if (typeof options.onInit === "function") await options.onInit(this);
				if (typeof this.config.onInit === "function") await this.config.onInit(this);
			}
		} catch (error) {
			this.logger.error({ err: error }, "Error running onInit function");
			throw error;
		}
		if (options.cron) await this._initializeCrons();
		return this;
	}
	update(options) {
		return updateLocal(this, options);
	}
};
new BasePayload();
var reload = async (config, payload, skipImportMapGeneration, options) => {
	if (typeof payload.db.destroy === "function") await payload.db.destroy();
	payload.config = config;
	payload.collections = config.collections.reduce((collections, collection) => {
		collections[collection.slug] = {
			config: collection,
			customIDType: payload.collections[collection.slug]?.customIDType
		};
		return collections;
	}, {});
	payload.blocks = config.blocks.reduce((blocks, block) => {
		blocks[block.slug] = block;
		return blocks;
	}, {});
	payload.globals = { config: config.globals };
	if (config.typescript.autoGenerate !== false) payload.bin({
		args: ["generate:types"],
		log: false
	});
	if (skipImportMapGeneration !== true && config.admin?.importMap?.autoGenerate !== false) await generateImportMap(config, {
		ignoreResolveError: true,
		log: true
	});
	if (payload.db?.init) await payload.db.init();
	if (!options?.disableDBConnect && payload.db.connect) await payload.db.connect({ hotReload: true });
	globalThis._payload_clientConfigs = {};
	globalThis._payload_schemaMap = null;
	globalThis._payload_clientSchemaMap = null;
	globalThis._payload_doNotCacheClientConfig = true;
	globalThis._payload_doNotCacheSchemaMap = true;
	globalThis._payload_doNotCacheClientSchemaMap = true;
};
var _cached = globalThis._payload;
if (!_cached) _cached = globalThis._payload = /* @__PURE__ */ new Map();
var getPayload = async (options) => {
	if (!options?.config) throw new Error("Error: the payload config is required for getPayload to work.");
	let alreadyCachedSameConfig = false;
	let cached = _cached.get(options.key ?? "default");
	if (!cached) {
		cached = {
			devReloadCleanup: null,
			initializedCrons: Boolean(options.cron),
			payload: null,
			promise: null,
			reload: false
		};
		_cached.set(options.key ?? "default", cached);
	} else alreadyCachedSameConfig = true;
	if (alreadyCachedSameConfig) options.disableOnInit = true;
	if (cached.payload) {
		if (options.cron && !cached.initializedCrons) {
			cached.initializedCrons = true;
			await cached.payload._initializeCrons();
		}
		if (cached.reload === true) {
			let resolve;
			cached.reload = new Promise((res) => resolve = res);
			await reload(await options.config, cached.payload, false, options);
			resolve();
			cached.reload = false;
		}
		if (cached.reload instanceof Promise) await cached.reload;
		if (options?.importMap) cached.payload.importMap = options.importMap;
		return cached.payload;
	}
	try {
		if (!cached.promise) cached.promise = new BasePayload().init(options);
		cached.payload = await cached.promise;
		if (!cached.devReloadCleanup && false);
	} catch (e) {
		cached.promise = null;
		e.payloadInitError = true;
		throw e;
	}
	if (options?.importMap) cached.payload.importMap = options.importMap;
	return cached.payload;
};
//#endregion
//#region node_modules/.pnpm/@payloadcms+tanstack-start@4.0.0-internal.fa183d3_@tanstack+react-router@1.170.16_react_0a4024b7e3e5e3c00dd5810765c19fa8/node_modules/@payloadcms/tanstack-start/dist/utilities/handleAPIRoute.server.js
/**
* Routes a TanStack Start API request (`/api/*`) to Payload's REST/GraphQL
* endpoint handler. The framework adapter wires this into the `/api/$` route's
* server handlers, supplying the app's resolved `config`.
*/ async function handleAPIRoute({ config, request }) {
	const slugParts = new URL(request.url).pathname.replace(/^\/api\/?/, "").split("/").filter(Boolean);
	return handleEndpoints({
		config,
		path: slugParts.length ? `/api/${slugParts.join("/")}` : "/api",
		request
	});
}
//#endregion
export { handleAPIRoute };
