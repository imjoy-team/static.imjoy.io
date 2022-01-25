(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("imjoyWebsocketClient", [], factory);
	else if(typeof exports === 'object')
		exports["imjoyWebsocketClient"] = factory();
	else
		root["imjoyWebsocketClient"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/websocket-client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@msgpack/msgpack/dist.es5+esm/CachedKeyDecoder.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/@msgpack/msgpack/dist.es5+esm/CachedKeyDecoder.mjs ***!
  \*************************************************************************/
/*! exports provided: CachedKeyDecoder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachedKeyDecoder", function() { return CachedKeyDecoder; });
/* harmony import */ var _utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utf8.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/utils/utf8.mjs");

var DEFAULT_MAX_KEY_LENGTH = 16;
var DEFAULT_MAX_LENGTH_PER_KEY = 16;
var CachedKeyDecoder = /** @class */ (function () {
    function CachedKeyDecoder(maxKeyLength, maxLengthPerKey) {
        if (maxKeyLength === void 0) { maxKeyLength = DEFAULT_MAX_KEY_LENGTH; }
        if (maxLengthPerKey === void 0) { maxLengthPerKey = DEFAULT_MAX_LENGTH_PER_KEY; }
        this.maxKeyLength = maxKeyLength;
        this.maxLengthPerKey = maxLengthPerKey;
        this.hit = 0;
        this.miss = 0;
        // avoid `new Array(N)`, which makes a sparse array,
        // because a sparse array is typically slower than a non-sparse array.
        this.caches = [];
        for (var i = 0; i < this.maxKeyLength; i++) {
            this.caches.push([]);
        }
    }
    CachedKeyDecoder.prototype.canBeCached = function (byteLength) {
        return byteLength > 0 && byteLength <= this.maxKeyLength;
    };
    CachedKeyDecoder.prototype.find = function (bytes, inputOffset, byteLength) {
        var records = this.caches[byteLength - 1];
        FIND_CHUNK: for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
            var record = records_1[_i];
            var recordBytes = record.bytes;
            for (var j = 0; j < byteLength; j++) {
                if (recordBytes[j] !== bytes[inputOffset + j]) {
                    continue FIND_CHUNK;
                }
            }
            return record.str;
        }
        return null;
    };
    CachedKeyDecoder.prototype.store = function (bytes, value) {
        var records = this.caches[bytes.length - 1];
        var record = { bytes: bytes, str: value };
        if (records.length >= this.maxLengthPerKey) {
            // `records` are full!
            // Set `record` to an arbitrary position.
            records[(Math.random() * records.length) | 0] = record;
        }
        else {
            records.push(record);
        }
    };
    CachedKeyDecoder.prototype.decode = function (bytes, inputOffset, byteLength) {
        var cachedValue = this.find(bytes, inputOffset, byteLength);
        if (cachedValue != null) {
            this.hit++;
            return cachedValue;
        }
        this.miss++;
        var str = Object(_utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_0__["utf8DecodeJs"])(bytes, inputOffset, byteLength);
        // Ensure to copy a slice of bytes because the byte may be NodeJS Buffer and Buffer#slice() returns a reference to its internal ArrayBuffer.
        var slicedCopyOfBytes = Uint8Array.prototype.slice.call(bytes, inputOffset, inputOffset + byteLength);
        this.store(slicedCopyOfBytes, str);
        return str;
    };
    return CachedKeyDecoder;
}());

//# sourceMappingURL=CachedKeyDecoder.mjs.map

/***/ }),

/***/ "./node_modules/@msgpack/msgpack/dist.es5+esm/DecodeError.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/@msgpack/msgpack/dist.es5+esm/DecodeError.mjs ***!
  \********************************************************************/
/*! exports provided: DecodeError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeError", function() { return DecodeError; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DecodeError = /** @class */ (function (_super) {
    __extends(DecodeError, _super);
    function DecodeError(message) {
        var _this = _super.call(this, message) || this;
        // fix the prototype chain in a cross-platform way
        var proto = Object.create(DecodeError.prototype);
        Object.setPrototypeOf(_this, proto);
        Object.defineProperty(_this, "name", {
            configurable: true,
            enumerable: false,
            value: DecodeError.name,
        });
        return _this;
    }
    return DecodeError;
}(Error));

//# sourceMappingURL=DecodeError.mjs.map

/***/ }),

/***/ "./node_modules/@msgpack/msgpack/dist.es5+esm/Decoder.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@msgpack/msgpack/dist.es5+esm/Decoder.mjs ***!
  \****************************************************************/
/*! exports provided: DataViewIndexOutOfBoundsError, Decoder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataViewIndexOutOfBoundsError", function() { return DataViewIndexOutOfBoundsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decoder", function() { return Decoder; });
/* harmony import */ var _utils_prettyByte_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/prettyByte.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/utils/prettyByte.mjs");
/* harmony import */ var _ExtensionCodec_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtensionCodec.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/ExtensionCodec.mjs");
/* harmony import */ var _utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/int.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/utils/int.mjs");
/* harmony import */ var _utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/utf8.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/utils/utf8.mjs");
/* harmony import */ var _utils_typedArrays_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/typedArrays.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/utils/typedArrays.mjs");
/* harmony import */ var _CachedKeyDecoder_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CachedKeyDecoder.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/CachedKeyDecoder.mjs");
/* harmony import */ var _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DecodeError.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/DecodeError.mjs");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __await = (undefined && undefined.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (undefined && undefined.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};







var isValidMapKeyType = function (key) {
    var keyType = typeof key;
    return keyType === "string" || keyType === "number";
};
var HEAD_BYTE_REQUIRED = -1;
var EMPTY_VIEW = new DataView(new ArrayBuffer(0));
var EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer);
// IE11: Hack to support IE11.
// IE11: Drop this hack and just use RangeError when IE11 is obsolete.
var DataViewIndexOutOfBoundsError = (function () {
    try {
        // IE11: The spec says it should throw RangeError,
        // IE11: but in IE11 it throws TypeError.
        EMPTY_VIEW.getInt8(0);
    }
    catch (e) {
        return e.constructor;
    }
    throw new Error("never reached");
})();
var MORE_DATA = new DataViewIndexOutOfBoundsError("Insufficient data");
var sharedCachedKeyDecoder = new _CachedKeyDecoder_mjs__WEBPACK_IMPORTED_MODULE_5__["CachedKeyDecoder"]();
var Decoder = /** @class */ (function () {
    function Decoder(extensionCodec, context, maxStrLength, maxBinLength, maxArrayLength, maxMapLength, maxExtLength, keyDecoder) {
        if (extensionCodec === void 0) { extensionCodec = _ExtensionCodec_mjs__WEBPACK_IMPORTED_MODULE_1__["ExtensionCodec"].defaultCodec; }
        if (context === void 0) { context = undefined; }
        if (maxStrLength === void 0) { maxStrLength = _utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__["UINT32_MAX"]; }
        if (maxBinLength === void 0) { maxBinLength = _utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__["UINT32_MAX"]; }
        if (maxArrayLength === void 0) { maxArrayLength = _utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__["UINT32_MAX"]; }
        if (maxMapLength === void 0) { maxMapLength = _utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__["UINT32_MAX"]; }
        if (maxExtLength === void 0) { maxExtLength = _utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__["UINT32_MAX"]; }
        if (keyDecoder === void 0) { keyDecoder = sharedCachedKeyDecoder; }
        this.extensionCodec = extensionCodec;
        this.context = context;
        this.maxStrLength = maxStrLength;
        this.maxBinLength = maxBinLength;
        this.maxArrayLength = maxArrayLength;
        this.maxMapLength = maxMapLength;
        this.maxExtLength = maxExtLength;
        this.keyDecoder = keyDecoder;
        this.totalPos = 0;
        this.pos = 0;
        this.view = EMPTY_VIEW;
        this.bytes = EMPTY_BYTES;
        this.headByte = HEAD_BYTE_REQUIRED;
        this.stack = [];
    }
    Decoder.prototype.reinitializeState = function () {
        this.totalPos = 0;
        this.headByte = HEAD_BYTE_REQUIRED;
        this.stack.length = 0;
        // view, bytes, and pos will be re-initialized in setBuffer()
    };
    Decoder.prototype.setBuffer = function (buffer) {
        this.bytes = Object(_utils_typedArrays_mjs__WEBPACK_IMPORTED_MODULE_4__["ensureUint8Array"])(buffer);
        this.view = Object(_utils_typedArrays_mjs__WEBPACK_IMPORTED_MODULE_4__["createDataView"])(this.bytes);
        this.pos = 0;
    };
    Decoder.prototype.appendBuffer = function (buffer) {
        if (this.headByte === HEAD_BYTE_REQUIRED && !this.hasRemaining(1)) {
            this.setBuffer(buffer);
        }
        else {
            var remainingData = this.bytes.subarray(this.pos);
            var newData = Object(_utils_typedArrays_mjs__WEBPACK_IMPORTED_MODULE_4__["ensureUint8Array"])(buffer);
            // concat remainingData + newData
            var newBuffer = new Uint8Array(remainingData.length + newData.length);
            newBuffer.set(remainingData);
            newBuffer.set(newData, remainingData.length);
            this.setBuffer(newBuffer);
        }
    };
    Decoder.prototype.hasRemaining = function (size) {
        return this.view.byteLength - this.pos >= size;
    };
    Decoder.prototype.createExtraByteError = function (posToShow) {
        var _a = this, view = _a.view, pos = _a.pos;
        return new RangeError("Extra " + (view.byteLength - pos) + " of " + view.byteLength + " byte(s) found at buffer[" + posToShow + "]");
    };
    /**
     * @throws {DecodeError}
     * @throws {RangeError}
     */
    Decoder.prototype.decode = function (buffer) {
        this.reinitializeState();
        this.setBuffer(buffer);
        var object = this.doDecodeSync();
        if (this.hasRemaining(1)) {
            throw this.createExtraByteError(this.pos);
        }
        return object;
    };
    Decoder.prototype.decodeMulti = function (buffer) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    this.reinitializeState();
                    this.setBuffer(buffer);
                    _a.label = 1;
                case 1:
                    if (!this.hasRemaining(1)) return [3 /*break*/, 3];
                    return [4 /*yield*/, this.doDecodeSync()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
    Decoder.prototype.decodeAsync = function (stream) {
        var stream_1, stream_1_1;
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var decoded, object, buffer, e_1_1, _b, headByte, pos, totalPos;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        decoded = false;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, 7, 12]);
                        stream_1 = __asyncValues(stream);
                        _c.label = 2;
                    case 2: return [4 /*yield*/, stream_1.next()];
                    case 3:
                        if (!(stream_1_1 = _c.sent(), !stream_1_1.done)) return [3 /*break*/, 5];
                        buffer = stream_1_1.value;
                        if (decoded) {
                            throw this.createExtraByteError(this.totalPos);
                        }
                        this.appendBuffer(buffer);
                        try {
                            object = this.doDecodeSync();
                            decoded = true;
                        }
                        catch (e) {
                            if (!(e instanceof DataViewIndexOutOfBoundsError)) {
                                throw e; // rethrow
                            }
                            // fallthrough
                        }
                        this.totalPos += this.pos;
                        _c.label = 4;
                    case 4: return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_1_1 = _c.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _c.trys.push([7, , 10, 11]);
                        if (!(stream_1_1 && !stream_1_1.done && (_a = stream_1.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _a.call(stream_1)];
                    case 8:
                        _c.sent();
                        _c.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12:
                        if (decoded) {
                            if (this.hasRemaining(1)) {
                                throw this.createExtraByteError(this.totalPos);
                            }
                            return [2 /*return*/, object];
                        }
                        _b = this, headByte = _b.headByte, pos = _b.pos, totalPos = _b.totalPos;
                        throw new RangeError("Insufficient data in parsing " + Object(_utils_prettyByte_mjs__WEBPACK_IMPORTED_MODULE_0__["prettyByte"])(headByte) + " at " + totalPos + " (" + pos + " in the current buffer)");
                }
            });
        });
    };
    Decoder.prototype.decodeArrayStream = function (stream) {
        return this.decodeMultiAsync(stream, true);
    };
    Decoder.prototype.decodeStream = function (stream) {
        return this.decodeMultiAsync(stream, false);
    };
    Decoder.prototype.decodeMultiAsync = function (stream, isArray) {
        return __asyncGenerator(this, arguments, function decodeMultiAsync_1() {
            var isArrayHeaderRequired, arrayItemsLeft, stream_2, stream_2_1, buffer, e_2, e_3_1;
            var e_3, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        isArrayHeaderRequired = isArray;
                        arrayItemsLeft = -1;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 13, 14, 19]);
                        stream_2 = __asyncValues(stream);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, __await(stream_2.next())];
                    case 3:
                        if (!(stream_2_1 = _b.sent(), !stream_2_1.done)) return [3 /*break*/, 12];
                        buffer = stream_2_1.value;
                        if (isArray && arrayItemsLeft === 0) {
                            throw this.createExtraByteError(this.totalPos);
                        }
                        this.appendBuffer(buffer);
                        if (isArrayHeaderRequired) {
                            arrayItemsLeft = this.readArraySize();
                            isArrayHeaderRequired = false;
                            this.complete();
                        }
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 9, , 10]);
                        _b.label = 5;
                    case 5:
                        if (false) {}
                        return [4 /*yield*/, __await(this.doDecodeSync())];
                    case 6: return [4 /*yield*/, _b.sent()];
                    case 7:
                        _b.sent();
                        if (--arrayItemsLeft === 0) {
                            return [3 /*break*/, 8];
                        }
                        return [3 /*break*/, 5];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        e_2 = _b.sent();
                        if (!(e_2 instanceof DataViewIndexOutOfBoundsError)) {
                            throw e_2; // rethrow
                        }
                        return [3 /*break*/, 10];
                    case 10:
                        this.totalPos += this.pos;
                        _b.label = 11;
                    case 11: return [3 /*break*/, 2];
                    case 12: return [3 /*break*/, 19];
                    case 13:
                        e_3_1 = _b.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 19];
                    case 14:
                        _b.trys.push([14, , 17, 18]);
                        if (!(stream_2_1 && !stream_2_1.done && (_a = stream_2.return))) return [3 /*break*/, 16];
                        return [4 /*yield*/, __await(_a.call(stream_2))];
                    case 15:
                        _b.sent();
                        _b.label = 16;
                    case 16: return [3 /*break*/, 18];
                    case 17:
                        if (e_3) throw e_3.error;
                        return [7 /*endfinally*/];
                    case 18: return [7 /*endfinally*/];
                    case 19: return [2 /*return*/];
                }
            });
        });
    };
    Decoder.prototype.doDecodeSync = function () {
        DECODE: while (true) {
            var headByte = this.readHeadByte();
            var object = void 0;
            if (headByte >= 0xe0) {
                // negative fixint (111x xxxx) 0xe0 - 0xff
                object = headByte - 0x100;
            }
            else if (headByte < 0xc0) {
                if (headByte < 0x80) {
                    // positive fixint (0xxx xxxx) 0x00 - 0x7f
                    object = headByte;
                }
                else if (headByte < 0x90) {
                    // fixmap (1000 xxxx) 0x80 - 0x8f
                    var size = headByte - 0x80;
                    if (size !== 0) {
                        this.pushMapState(size);
                        this.complete();
                        continue DECODE;
                    }
                    else {
                        object = {};
                    }
                }
                else if (headByte < 0xa0) {
                    // fixarray (1001 xxxx) 0x90 - 0x9f
                    var size = headByte - 0x90;
                    if (size !== 0) {
                        this.pushArrayState(size);
                        this.complete();
                        continue DECODE;
                    }
                    else {
                        object = [];
                    }
                }
                else {
                    // fixstr (101x xxxx) 0xa0 - 0xbf
                    var byteLength = headByte - 0xa0;
                    object = this.decodeUtf8String(byteLength, 0);
                }
            }
            else if (headByte === 0xc0) {
                // nil
                object = null;
            }
            else if (headByte === 0xc2) {
                // false
                object = false;
            }
            else if (headByte === 0xc3) {
                // true
                object = true;
            }
            else if (headByte === 0xca) {
                // float 32
                object = this.readF32();
            }
            else if (headByte === 0xcb) {
                // float 64
                object = this.readF64();
            }
            else if (headByte === 0xcc) {
                // uint 8
                object = this.readU8();
            }
            else if (headByte === 0xcd) {
                // uint 16
                object = this.readU16();
            }
            else if (headByte === 0xce) {
                // uint 32
                object = this.readU32();
            }
            else if (headByte === 0xcf) {
                // uint 64
                object = this.readU64();
            }
            else if (headByte === 0xd0) {
                // int 8
                object = this.readI8();
            }
            else if (headByte === 0xd1) {
                // int 16
                object = this.readI16();
            }
            else if (headByte === 0xd2) {
                // int 32
                object = this.readI32();
            }
            else if (headByte === 0xd3) {
                // int 64
                object = this.readI64();
            }
            else if (headByte === 0xd9) {
                // str 8
                var byteLength = this.lookU8();
                object = this.decodeUtf8String(byteLength, 1);
            }
            else if (headByte === 0xda) {
                // str 16
                var byteLength = this.lookU16();
                object = this.decodeUtf8String(byteLength, 2);
            }
            else if (headByte === 0xdb) {
                // str 32
                var byteLength = this.lookU32();
                object = this.decodeUtf8String(byteLength, 4);
            }
            else if (headByte === 0xdc) {
                // array 16
                var size = this.readU16();
                if (size !== 0) {
                    this.pushArrayState(size);
                    this.complete();
                    continue DECODE;
                }
                else {
                    object = [];
                }
            }
            else if (headByte === 0xdd) {
                // array 32
                var size = this.readU32();
                if (size !== 0) {
                    this.pushArrayState(size);
                    this.complete();
                    continue DECODE;
                }
                else {
                    object = [];
                }
            }
            else if (headByte === 0xde) {
                // map 16
                var size = this.readU16();
                if (size !== 0) {
                    this.pushMapState(size);
                    this.complete();
                    continue DECODE;
                }
                else {
                    object = {};
                }
            }
            else if (headByte === 0xdf) {
                // map 32
                var size = this.readU32();
                if (size !== 0) {
                    this.pushMapState(size);
                    this.complete();
                    continue DECODE;
                }
                else {
                    object = {};
                }
            }
            else if (headByte === 0xc4) {
                // bin 8
                var size = this.lookU8();
                object = this.decodeBinary(size, 1);
            }
            else if (headByte === 0xc5) {
                // bin 16
                var size = this.lookU16();
                object = this.decodeBinary(size, 2);
            }
            else if (headByte === 0xc6) {
                // bin 32
                var size = this.lookU32();
                object = this.decodeBinary(size, 4);
            }
            else if (headByte === 0xd4) {
                // fixext 1
                object = this.decodeExtension(1, 0);
            }
            else if (headByte === 0xd5) {
                // fixext 2
                object = this.decodeExtension(2, 0);
            }
            else if (headByte === 0xd6) {
                // fixext 4
                object = this.decodeExtension(4, 0);
            }
            else if (headByte === 0xd7) {
                // fixext 8
                object = this.decodeExtension(8, 0);
            }
            else if (headByte === 0xd8) {
                // fixext 16
                object = this.decodeExtension(16, 0);
            }
            else if (headByte === 0xc7) {
                // ext 8
                var size = this.lookU8();
                object = this.decodeExtension(size, 1);
            }
            else if (headByte === 0xc8) {
                // ext 16
                var size = this.lookU16();
                object = this.decodeExtension(size, 2);
            }
            else if (headByte === 0xc9) {
                // ext 32
                var size = this.lookU32();
                object = this.decodeExtension(size, 4);
            }
            else {
                throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_6__["DecodeError"]("Unrecognized type byte: " + Object(_utils_prettyByte_mjs__WEBPACK_IMPORTED_MODULE_0__["prettyByte"])(headByte));
            }
            this.complete();
            var stack = this.stack;
            while (stack.length > 0) {
                // arrays and maps
                var state = stack[stack.length - 1];
                if (state.type === 0 /* ARRAY */) {
                    state.array[state.position] = object;
                    state.position++;
                    if (state.position === state.size) {
                        stack.pop();
                        object = state.array;
                    }
                    else {
                        continue DECODE;
                    }
                }
                else if (state.type === 1 /* MAP_KEY */) {
                    if (!isValidMapKeyType(object)) {
                        throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_6__["DecodeError"]("The type of key must be string or number but " + typeof object);
                    }
                    if (object === "__proto__") {
                        throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_6__["DecodeError"]("The key __proto__ is not allowed");
                    }
                    state.key = object;
                    state.type = 2 /* MAP_VALUE */;
                    continue DECODE;
                }
                else {
                    // it must be `state.type === State.MAP_VALUE` here
                    state.map[state.key] = object;
                    state.readCount++;
                    if (state.readCount === state.size) {
                        stack.pop();
                        object = state.map;
                    }
                    else {
                        state.key = null;
                        state.type = 1 /* MAP_KEY */;
                        continue DECODE;
                    }
                }
            }
            return object;
        }
    };
    Decoder.prototype.readHeadByte = function () {
        if (this.headByte === HEAD_BYTE_REQUIRED) {
            this.headByte = this.readU8();
            // console.log("headByte", prettyByte(this.headByte));
        }
        return this.headByte;
    };
    Decoder.prototype.complete = function () {
        this.headByte = HEAD_BYTE_REQUIRED;
    };
    Decoder.prototype.readArraySize = function () {
        var headByte = this.readHeadByte();
        switch (headByte) {
            case 0xdc:
                return this.readU16();
            case 0xdd:
                return this.readU32();
            default: {
                if (headByte < 0xa0) {
                    return headByte - 0x90;
                }
                else {
                    throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_6__["DecodeError"]("Unrecognized array type byte: " + Object(_utils_prettyByte_mjs__WEBPACK_IMPORTED_MODULE_0__["prettyByte"])(headByte));
                }
            }
        }
    };
    Decoder.prototype.pushMapState = function (size) {
        if (size > this.maxMapLength) {
            throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_6__["DecodeError"]("Max length exceeded: map length (" + size + ") > maxMapLengthLength (" + this.maxMapLength + ")");
        }
        this.stack.push({
            type: 1 /* MAP_KEY */,
            size: size,
            key: null,
            readCount: 0,
            map: {},
        });
    };
    Decoder.prototype.pushArrayState = function (size) {
        if (size > this.maxArrayLength) {
            throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_6__["DecodeError"]("Max length exceeded: array length (" + size + ") > maxArrayLength (" + this.maxArrayLength + ")");
        }
        this.stack.push({
            type: 0 /* ARRAY */,
            size: size,
            array: new Array(size),
            position: 0,
        });
    };
    Decoder.prototype.decodeUtf8String = function (byteLength, headerOffset) {
        var _a;
        if (byteLength > this.maxStrLength) {
            throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_6__["DecodeError"]("Max length exceeded: UTF-8 byte length (" + byteLength + ") > maxStrLength (" + this.maxStrLength + ")");
        }
        if (this.bytes.byteLength < this.pos + headerOffset + byteLength) {
            throw MORE_DATA;
        }
        var offset = this.pos + headerOffset;
        var object;
        if (this.stateIsMapKey() && ((_a = this.keyDecoder) === null || _a === void 0 ? void 0 : _a.canBeCached(byteLength))) {
            object = this.keyDecoder.decode(this.bytes, offset, byteLength);
        }
        else if (byteLength > _utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_3__["TEXT_DECODER_THRESHOLD"]) {
            object = Object(_utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_3__["utf8DecodeTD"])(this.bytes, offset, byteLength);
        }
        else {
            object = Object(_utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_3__["utf8DecodeJs"])(this.bytes, offset, byteLength);
        }
        this.pos += headerOffset + byteLength;
        return object;
    };
    Decoder.prototype.stateIsMapKey = function () {
        if (this.stack.length > 0) {
            var state = this.stack[this.stack.length - 1];
            return state.type === 1 /* MAP_KEY */;
        }
        return false;
    };
    Decoder.prototype.decodeBinary = function (byteLength, headOffset) {
        if (byteLength > this.maxBinLength) {
            throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_6__["DecodeError"]("Max length exceeded: bin length (" + byteLength + ") > maxBinLength (" + this.maxBinLength + ")");
        }
        if (!this.hasRemaining(byteLength + headOffset)) {
            throw MORE_DATA;
        }
        var offset = this.pos + headOffset;
        var object = this.bytes.subarray(offset, offset + byteLength);
        this.pos += headOffset + byteLength;
        return object;
    };
    Decoder.prototype.decodeExtension = function (size, headOffset) {
        if (size > this.maxExtLength) {
            throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_6__["DecodeError"]("Max length exceeded: ext length (" + size + ") > maxExtLength (" + this.maxExtLength + ")");
        }
        var extType = this.view.getInt8(this.pos + headOffset);
        var data = this.decodeBinary(size, headOffset + 1 /* extType */);
        return this.extensionCodec.decode(data, extType, this.context);
    };
    Decoder.prototype.lookU8 = function () {
        return this.view.getUint8(this.pos);
    };
    Decoder.prototype.lookU16 = function () {
        return this.view.getUint16(this.pos);
    };
    Decoder.prototype.lookU32 = function () {
        return this.view.getUint32(this.pos);
    };
    Decoder.prototype.readU8 = function () {
        var value = this.view.getUint8(this.pos);
        this.pos++;
        return value;
    };
    Decoder.prototype.readI8 = function () {
        var value = this.view.getInt8(this.pos);
        this.pos++;
        return value;
    };
    Decoder.prototype.readU16 = function () {
        var value = this.view.getUint16(this.pos);
        this.pos += 2;
        return value;
    };
    Decoder.prototype.readI16 = function () {
        var value = this.view.getInt16(this.pos);
        this.pos += 2;
        return value;
    };
    Decoder.prototype.readU32 = function () {
        var value = this.view.getUint32(this.pos);
        this.pos += 4;
        return value;
    };
    Decoder.prototype.readI32 = function () {
        var value = this.view.getInt32(this.pos);
        this.pos += 4;
        return value;
    };
    Decoder.prototype.readU64 = function () {
        var value = Object(_utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__["getUint64"])(this.view, this.pos);
        this.pos += 8;
        return value;
    };
    Decoder.prototype.readI64 = function () {
        var value = Object(_utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__["getInt64"])(this.view, this.pos);
        this.pos += 8;
        return value;
    };
    Decoder.prototype.readF32 = function () {
        var value = this.view.getFloat32(this.pos);
        this.pos += 4;
        return value;
    };
    Decoder.prototype.readF64 = function () {
        var value = this.view.getFloat64(this.pos);
        this.pos += 8;
        return value;
    };
    return Decoder;
}());

//# sourceMappingURL=Decoder.mjs.map

/***/ }),

/***/ "./node_modules/@msgpack/msgpack/dist.es5+esm/Encoder.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@msgpack/msgpack/dist.es5+esm/Encoder.mjs ***!
  \****************************************************************/
/*! exports provided: DEFAULT_MAX_DEPTH, DEFAULT_INITIAL_BUFFER_SIZE, Encoder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MAX_DEPTH", function() { return DEFAULT_MAX_DEPTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_INITIAL_BUFFER_SIZE", function() { return DEFAULT_INITIAL_BUFFER_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encoder", function() { return Encoder; });
/* harmony import */ var _utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utf8.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/utils/utf8.mjs");
/* harmony import */ var _ExtensionCodec_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtensionCodec.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/ExtensionCodec.mjs");
/* harmony import */ var _utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/int.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/utils/int.mjs");
/* harmony import */ var _utils_typedArrays_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/typedArrays.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/utils/typedArrays.mjs");




var DEFAULT_MAX_DEPTH = 100;
var DEFAULT_INITIAL_BUFFER_SIZE = 2048;
var Encoder = /** @class */ (function () {
    function Encoder(extensionCodec, context, maxDepth, initialBufferSize, sortKeys, forceFloat32, ignoreUndefined, forceIntegerToFloat) {
        if (extensionCodec === void 0) { extensionCodec = _ExtensionCodec_mjs__WEBPACK_IMPORTED_MODULE_1__["ExtensionCodec"].defaultCodec; }
        if (context === void 0) { context = undefined; }
        if (maxDepth === void 0) { maxDepth = DEFAULT_MAX_DEPTH; }
        if (initialBufferSize === void 0) { initialBufferSize = DEFAULT_INITIAL_BUFFER_SIZE; }
        if (sortKeys === void 0) { sortKeys = false; }
        if (forceFloat32 === void 0) { forceFloat32 = false; }
        if (ignoreUndefined === void 0) { ignoreUndefined = false; }
        if (forceIntegerToFloat === void 0) { forceIntegerToFloat = false; }
        this.extensionCodec = extensionCodec;
        this.context = context;
        this.maxDepth = maxDepth;
        this.initialBufferSize = initialBufferSize;
        this.sortKeys = sortKeys;
        this.forceFloat32 = forceFloat32;
        this.ignoreUndefined = ignoreUndefined;
        this.forceIntegerToFloat = forceIntegerToFloat;
        this.pos = 0;
        this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
        this.bytes = new Uint8Array(this.view.buffer);
    }
    Encoder.prototype.getUint8Array = function () {
        return this.bytes.subarray(0, this.pos);
    };
    Encoder.prototype.reinitializeState = function () {
        this.pos = 0;
    };
    Encoder.prototype.encode = function (object) {
        this.reinitializeState();
        this.doEncode(object, 1);
        return this.getUint8Array();
    };
    Encoder.prototype.doEncode = function (object, depth) {
        if (depth > this.maxDepth) {
            throw new Error("Too deep objects in depth " + depth);
        }
        if (object == null) {
            this.encodeNil();
        }
        else if (typeof object === "boolean") {
            this.encodeBoolean(object);
        }
        else if (typeof object === "number") {
            this.encodeNumber(object);
        }
        else if (typeof object === "string") {
            this.encodeString(object);
        }
        else {
            this.encodeObject(object, depth);
        }
    };
    Encoder.prototype.ensureBufferSizeToWrite = function (sizeToWrite) {
        var requiredSize = this.pos + sizeToWrite;
        if (this.view.byteLength < requiredSize) {
            this.resizeBuffer(requiredSize * 2);
        }
    };
    Encoder.prototype.resizeBuffer = function (newSize) {
        var newBuffer = new ArrayBuffer(newSize);
        var newBytes = new Uint8Array(newBuffer);
        var newView = new DataView(newBuffer);
        newBytes.set(this.bytes);
        this.view = newView;
        this.bytes = newBytes;
    };
    Encoder.prototype.encodeNil = function () {
        this.writeU8(0xc0);
    };
    Encoder.prototype.encodeBoolean = function (object) {
        if (object === false) {
            this.writeU8(0xc2);
        }
        else {
            this.writeU8(0xc3);
        }
    };
    Encoder.prototype.encodeNumber = function (object) {
        if (Number.isSafeInteger(object) && !this.forceIntegerToFloat) {
            if (object >= 0) {
                if (object < 0x80) {
                    // positive fixint
                    this.writeU8(object);
                }
                else if (object < 0x100) {
                    // uint 8
                    this.writeU8(0xcc);
                    this.writeU8(object);
                }
                else if (object < 0x10000) {
                    // uint 16
                    this.writeU8(0xcd);
                    this.writeU16(object);
                }
                else if (object < 0x100000000) {
                    // uint 32
                    this.writeU8(0xce);
                    this.writeU32(object);
                }
                else {
                    // uint 64
                    this.writeU8(0xcf);
                    this.writeU64(object);
                }
            }
            else {
                if (object >= -0x20) {
                    // negative fixint
                    this.writeU8(0xe0 | (object + 0x20));
                }
                else if (object >= -0x80) {
                    // int 8
                    this.writeU8(0xd0);
                    this.writeI8(object);
                }
                else if (object >= -0x8000) {
                    // int 16
                    this.writeU8(0xd1);
                    this.writeI16(object);
                }
                else if (object >= -0x80000000) {
                    // int 32
                    this.writeU8(0xd2);
                    this.writeI32(object);
                }
                else {
                    // int 64
                    this.writeU8(0xd3);
                    this.writeI64(object);
                }
            }
        }
        else {
            // non-integer numbers
            if (this.forceFloat32) {
                // float 32
                this.writeU8(0xca);
                this.writeF32(object);
            }
            else {
                // float 64
                this.writeU8(0xcb);
                this.writeF64(object);
            }
        }
    };
    Encoder.prototype.writeStringHeader = function (byteLength) {
        if (byteLength < 32) {
            // fixstr
            this.writeU8(0xa0 + byteLength);
        }
        else if (byteLength < 0x100) {
            // str 8
            this.writeU8(0xd9);
            this.writeU8(byteLength);
        }
        else if (byteLength < 0x10000) {
            // str 16
            this.writeU8(0xda);
            this.writeU16(byteLength);
        }
        else if (byteLength < 0x100000000) {
            // str 32
            this.writeU8(0xdb);
            this.writeU32(byteLength);
        }
        else {
            throw new Error("Too long string: " + byteLength + " bytes in UTF-8");
        }
    };
    Encoder.prototype.encodeString = function (object) {
        var maxHeaderSize = 1 + 4;
        var strLength = object.length;
        if (strLength > _utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_0__["TEXT_ENCODER_THRESHOLD"]) {
            var byteLength = Object(_utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_0__["utf8Count"])(object);
            this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
            this.writeStringHeader(byteLength);
            Object(_utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_0__["utf8EncodeTE"])(object, this.bytes, this.pos);
            this.pos += byteLength;
        }
        else {
            var byteLength = Object(_utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_0__["utf8Count"])(object);
            this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
            this.writeStringHeader(byteLength);
            Object(_utils_utf8_mjs__WEBPACK_IMPORTED_MODULE_0__["utf8EncodeJs"])(object, this.bytes, this.pos);
            this.pos += byteLength;
        }
    };
    Encoder.prototype.encodeObject = function (object, depth) {
        // try to encode objects with custom codec first of non-primitives
        var ext = this.extensionCodec.tryToEncode(object, this.context);
        if (ext != null) {
            this.encodeExtension(ext);
        }
        else if (Array.isArray(object)) {
            this.encodeArray(object, depth);
        }
        else if (ArrayBuffer.isView(object)) {
            this.encodeBinary(object);
        }
        else if (typeof object === "object") {
            this.encodeMap(object, depth);
        }
        else {
            // symbol, function and other special object come here unless extensionCodec handles them.
            throw new Error("Unrecognized object: " + Object.prototype.toString.apply(object));
        }
    };
    Encoder.prototype.encodeBinary = function (object) {
        var size = object.byteLength;
        if (size < 0x100) {
            // bin 8
            this.writeU8(0xc4);
            this.writeU8(size);
        }
        else if (size < 0x10000) {
            // bin 16
            this.writeU8(0xc5);
            this.writeU16(size);
        }
        else if (size < 0x100000000) {
            // bin 32
            this.writeU8(0xc6);
            this.writeU32(size);
        }
        else {
            throw new Error("Too large binary: " + size);
        }
        var bytes = Object(_utils_typedArrays_mjs__WEBPACK_IMPORTED_MODULE_3__["ensureUint8Array"])(object);
        this.writeU8a(bytes);
    };
    Encoder.prototype.encodeArray = function (object, depth) {
        var size = object.length;
        if (size < 16) {
            // fixarray
            this.writeU8(0x90 + size);
        }
        else if (size < 0x10000) {
            // array 16
            this.writeU8(0xdc);
            this.writeU16(size);
        }
        else if (size < 0x100000000) {
            // array 32
            this.writeU8(0xdd);
            this.writeU32(size);
        }
        else {
            throw new Error("Too large array: " + size);
        }
        for (var _i = 0, object_1 = object; _i < object_1.length; _i++) {
            var item = object_1[_i];
            this.doEncode(item, depth + 1);
        }
    };
    Encoder.prototype.countWithoutUndefined = function (object, keys) {
        var count = 0;
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (object[key] !== undefined) {
                count++;
            }
        }
        return count;
    };
    Encoder.prototype.encodeMap = function (object, depth) {
        var keys = Object.keys(object);
        if (this.sortKeys) {
            keys.sort();
        }
        var size = this.ignoreUndefined ? this.countWithoutUndefined(object, keys) : keys.length;
        if (size < 16) {
            // fixmap
            this.writeU8(0x80 + size);
        }
        else if (size < 0x10000) {
            // map 16
            this.writeU8(0xde);
            this.writeU16(size);
        }
        else if (size < 0x100000000) {
            // map 32
            this.writeU8(0xdf);
            this.writeU32(size);
        }
        else {
            throw new Error("Too large map object: " + size);
        }
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var key = keys_2[_i];
            var value = object[key];
            if (!(this.ignoreUndefined && value === undefined)) {
                this.encodeString(key);
                this.doEncode(value, depth + 1);
            }
        }
    };
    Encoder.prototype.encodeExtension = function (ext) {
        var size = ext.data.length;
        if (size === 1) {
            // fixext 1
            this.writeU8(0xd4);
        }
        else if (size === 2) {
            // fixext 2
            this.writeU8(0xd5);
        }
        else if (size === 4) {
            // fixext 4
            this.writeU8(0xd6);
        }
        else if (size === 8) {
            // fixext 8
            this.writeU8(0xd7);
        }
        else if (size === 16) {
            // fixext 16
            this.writeU8(0xd8);
        }
        else if (size < 0x100) {
            // ext 8
            this.writeU8(0xc7);
            this.writeU8(size);
        }
        else if (size < 0x10000) {
            // ext 16
            this.writeU8(0xc8);
            this.writeU16(size);
        }
        else if (size < 0x100000000) {
            // ext 32
            this.writeU8(0xc9);
            this.writeU32(size);
        }
        else {
            throw new Error("Too large extension object: " + size);
        }
        this.writeI8(ext.type);
        this.writeU8a(ext.data);
    };
    Encoder.prototype.writeU8 = function (value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setUint8(this.pos, value);
        this.pos++;
    };
    Encoder.prototype.writeU8a = function (values) {
        var size = values.length;
        this.ensureBufferSizeToWrite(size);
        this.bytes.set(values, this.pos);
        this.pos += size;
    };
    Encoder.prototype.writeI8 = function (value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setInt8(this.pos, value);
        this.pos++;
    };
    Encoder.prototype.writeU16 = function (value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setUint16(this.pos, value);
        this.pos += 2;
    };
    Encoder.prototype.writeI16 = function (value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setInt16(this.pos, value);
        this.pos += 2;
    };
    Encoder.prototype.writeU32 = function (value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setUint32(this.pos, value);
        this.pos += 4;
    };
    Encoder.prototype.writeI32 = function (value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setInt32(this.pos, value);
        this.pos += 4;
    };
    Encoder.prototype.writeF32 = function (value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setFloat32(this.pos, value);
        this.pos += 4;
    };
    Encoder.prototype.writeF64 = function (value) {
        this.ensureBufferSizeToWrite(8);
        this.view.setFloat64(this.pos, value);
        this.pos += 8;
    };
    Encoder.prototype.writeU64 = function (value) {
        this.ensureBufferSizeToWrite(8);
        Object(_utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__["setUint64"])(this.view, this.pos, value);
        this.pos += 8;
    };
    Encoder.prototype.writeI64 = function (value) {
        this.ensureBufferSizeToWrite(8);
        Object(_utils_int_mjs__WEBPACK_IMPORTED_MODULE_2__["setInt64"])(this.view, this.pos, value);
        this.pos += 8;
    };
    return Encoder;
}());

//# sourceMappingURL=Encoder.mjs.map

/***/ }),

/***/ "./node_modules/@msgpack/msgpack/dist.es5+esm/ExtData.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@msgpack/msgpack/dist.es5+esm/ExtData.mjs ***!
  \****************************************************************/
/*! exports provided: ExtData */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtData", function() { return ExtData; });
/**
 * ExtData is used to handle Extension Types that are not registered to ExtensionCodec.
 */
var ExtData = /** @class */ (function () {
    function ExtData(type, data) {
        this.type = type;
        this.data = data;
    }
    return ExtData;
}());

//# sourceMappingURL=ExtData.mjs.map

/***/ }),

/***/ "./node_modules/@msgpack/msgpack/dist.es5+esm/ExtensionCodec.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@msgpack/msgpack/dist.es5+esm/ExtensionCodec.mjs ***!
  \***********************************************************************/
/*! exports provided: ExtensionCodec */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionCodec", function() { return ExtensionCodec; });
/* harmony import */ var _ExtData_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExtData.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/ExtData.mjs");
/* harmony import */ var _timestamp_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timestamp.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/timestamp.mjs");
// ExtensionCodec to handle MessagePack extensions


var ExtensionCodec = /** @class */ (function () {
    function ExtensionCodec() {
        // built-in extensions
        this.builtInEncoders = [];
        this.builtInDecoders = [];
        // custom extensions
        this.encoders = [];
        this.decoders = [];
        this.register(_timestamp_mjs__WEBPACK_IMPORTED_MODULE_1__["timestampExtension"]);
    }
    ExtensionCodec.prototype.register = function (_a) {
        var type = _a.type, encode = _a.encode, decode = _a.decode;
        if (type >= 0) {
            // custom extensions
            this.encoders[type] = encode;
            this.decoders[type] = decode;
        }
        else {
            // built-in extensions
            var index = 1 + type;
            this.builtInEncoders[index] = encode;
            this.builtInDecoders[index] = decode;
        }
    };
    ExtensionCodec.prototype.tryToEncode = function (object, context) {
        // built-in extensions
        for (var i = 0; i < this.builtInEncoders.length; i++) {
            var encodeExt = this.builtInEncoders[i];
            if (encodeExt != null) {
                var data = encodeExt(object, context);
                if (data != null) {
                    var type = -1 - i;
                    return new _ExtData_mjs__WEBPACK_IMPORTED_MODULE_0__["ExtData"](type, data);
                }
            }
        }
        // custom extensions
        for (var i = 0; i < this.encoders.length; i++) {
            var encodeExt = this.encoders[i];
            if (encodeExt != null) {
                var data = encodeExt(object, context);
                if (data != null) {
                    var type = i;
                    return new _ExtData_mjs__WEBPACK_IMPORTED_MODULE_0__["ExtData"](type, data);
                }
            }
        }
        if (object instanceof _ExtData_mjs__WEBPACK_IMPORTED_MODULE_0__["ExtData"]) {
            // to keep ExtData as is
            return object;
        }
        return null;
    };
    ExtensionCodec.prototype.decode = function (data, type, context) {
        var decodeExt = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
        if (decodeExt) {
            return decodeExt(data, type, context);
        }
        else {
            // decode() does not fail, returns ExtData instead.
            return new _ExtData_mjs__WEBPACK_IMPORTED_MODULE_0__["ExtData"](type, data);
        }
    };
    ExtensionCodec.defaultCodec = new ExtensionCodec();
    return ExtensionCodec;
}());

//# sourceMappingURL=ExtensionCodec.mjs.map

/***/ }),

/***/ "./node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs ***!
  \***************************************************************/
/*! exports provided: defaultDecodeOptions, decode, decodeMulti */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDecodeOptions", function() { return defaultDecodeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeMulti", function() { return decodeMulti; });
/* harmony import */ var _Decoder_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decoder.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/Decoder.mjs");

var defaultDecodeOptions = {};
/**
 * It decodes a single MessagePack object in a buffer.
 *
 * This is a synchronous decoding function.
 * See other variants for asynchronous decoding: {@link decodeAsync()}, {@link decodeStream()}, or {@link decodeArrayStream()}.
 */
function decode(buffer, options) {
    if (options === void 0) { options = defaultDecodeOptions; }
    var decoder = new _Decoder_mjs__WEBPACK_IMPORTED_MODULE_0__["Decoder"](options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
    return decoder.decode(buffer);
}
/**
 * It decodes multiple MessagePack objects in a buffer.
 * This is corresponding to {@link decodeMultiStream()}.
 */
function decodeMulti(buffer, options) {
    if (options === void 0) { options = defaultDecodeOptions; }
    var decoder = new _Decoder_mjs__WEBPACK_IMPORTED_MODULE_0__["Decoder"](options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
    return decoder.decodeMulti(buffer);
}
//# sourceMappingURL=decode.mjs.map

/***/ }),

/***/ "./node_modules/@msgpack/msgpack/dist.es5+esm/decodeAsync.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/@msgpack/msgpack/dist.es5+esm/decodeAsync.mjs ***!
  \********************************************************************/
/*! exports provided: decodeAsync, decodeArrayStream, decodeMultiStream, decodeStream */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeAsync", function() { return decodeAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeArrayStream", function() { return decodeArrayStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeMultiStream", function() { return decodeMultiStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeStream", function() { return decodeStream; });
/* harmony import */ var _Decoder_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decoder.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/Decoder.mjs");
/* harmony import */ var _utils_stream_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/stream.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/utils/stream.mjs");
/* harmony import */ var _decode_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decode.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



function decodeAsync(streamLike, options) {
    if (options === void 0) { options = _decode_mjs__WEBPACK_IMPORTED_MODULE_2__["defaultDecodeOptions"]; }
    return __awaiter(this, void 0, void 0, function () {
        var stream, decoder;
        return __generator(this, function (_a) {
            stream = Object(_utils_stream_mjs__WEBPACK_IMPORTED_MODULE_1__["ensureAsyncIterable"])(streamLike);
            decoder = new _Decoder_mjs__WEBPACK_IMPORTED_MODULE_0__["Decoder"](options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
            return [2 /*return*/, decoder.decodeAsync(stream)];
        });
    });
}
function decodeArrayStream(streamLike, options) {
    if (options === void 0) { options = _decode_mjs__WEBPACK_IMPORTED_MODULE_2__["defaultDecodeOptions"]; }
    var stream = Object(_utils_stream_mjs__WEBPACK_IMPORTED_MODULE_1__["ensureAsyncIterable"])(streamLike);
    var decoder = new _Decoder_mjs__WEBPACK_IMPORTED_MODULE_0__["Decoder"](options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
    return decoder.decodeArrayStream(stream);
}
function decodeMultiStream(streamLike, options) {
    if (options === void 0) { options = _decode_mjs__WEBPACK_IMPORTED_MODULE_2__["defaultDecodeOptions"]; }
    var stream = Object(_utils_stream_mjs__WEBPACK_IMPORTED_MODULE_1__["ensureAsyncIterable"])(streamLike);
    var decoder = new _Decoder_mjs__WEBPACK_IMPORTED_MODULE_0__["Decoder"](options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
    return decoder.decodeStream(stream);
}
/**
 * @deprecated Use {@link decodeMultiStream()} instead.
 */
function decodeStream(streamLike, options) {
    if (options === void 0) { options = _decode_mjs__WEBPACK_IMPORTED_MODULE_2__["defaultDecodeOptions"]; }
    return decodeMultiStream(streamLike, options);
}
//# sourceMappingURL=decodeAsync.mjs.map

/***/ }),

/***/ "./node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs ***!
  \***************************************************************/
/*! exports provided: encode */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });
/* harmony import */ var _Encoder_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Encoder.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/Encoder.mjs");

var defaultEncodeOptions = {};
/**
 * It encodes `value` in the MessagePack format and
 * returns a byte buffer.
 *
 * The returned buffer is a slice of a larger `ArrayBuffer`, so you have to use its `#byteOffset` and `#byteLength` in order to convert it to another typed arrays including NodeJS `Buffer`.
 */
function encode(value, options) {
    if (options === void 0) { options = defaultEncodeOptions; }
    var encoder = new _Encoder_mjs__WEBPACK_IMPORTED_MODULE_0__["Encoder"](options.extensionCodec, options.context, options.maxDepth, options.initialBufferSize, options.sortKeys, options.forceFloat32, options.ignoreUndefined, options.forceIntegerToFloat);
    return encoder.encode(value);
}
//# sourceMappingURL=encode.mjs.map

/***/ }),

/***/ "./node_modules/@msgpack/msgpack/dist.es5+esm/index.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/@msgpack/msgpack/dist.es5+esm/index.mjs ***!
  \**************************************************************/
/*! exports provided: encode, decode, decodeMulti, decodeAsync, decodeArrayStream, decodeMultiStream, decodeStream, Decoder, DecodeError, DataViewIndexOutOfBoundsError, Encoder, ExtensionCodec, ExtData, EXT_TIMESTAMP, encodeDateToTimeSpec, encodeTimeSpecToTimestamp, decodeTimestampToTimeSpec, encodeTimestampExtension, decodeTimestampExtension */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _encode_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encode.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return _encode_mjs__WEBPACK_IMPORTED_MODULE_0__["encode"]; });

/* harmony import */ var _decode_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decode.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return _decode_mjs__WEBPACK_IMPORTED_MODULE_1__["decode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeMulti", function() { return _decode_mjs__WEBPACK_IMPORTED_MODULE_1__["decodeMulti"]; });

/* harmony import */ var _decodeAsync_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decodeAsync.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/decodeAsync.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeAsync", function() { return _decodeAsync_mjs__WEBPACK_IMPORTED_MODULE_2__["decodeAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeArrayStream", function() { return _decodeAsync_mjs__WEBPACK_IMPORTED_MODULE_2__["decodeArrayStream"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeMultiStream", function() { return _decodeAsync_mjs__WEBPACK_IMPORTED_MODULE_2__["decodeMultiStream"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeStream", function() { return _decodeAsync_mjs__WEBPACK_IMPORTED_MODULE_2__["decodeStream"]; });

/* harmony import */ var _Decoder_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Decoder.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/Decoder.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Decoder", function() { return _Decoder_mjs__WEBPACK_IMPORTED_MODULE_3__["Decoder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataViewIndexOutOfBoundsError", function() { return _Decoder_mjs__WEBPACK_IMPORTED_MODULE_3__["DataViewIndexOutOfBoundsError"]; });

/* harmony import */ var _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DecodeError.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/DecodeError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DecodeError", function() { return _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_4__["DecodeError"]; });

/* harmony import */ var _Encoder_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Encoder.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/Encoder.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Encoder", function() { return _Encoder_mjs__WEBPACK_IMPORTED_MODULE_5__["Encoder"]; });

/* harmony import */ var _ExtensionCodec_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExtensionCodec.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/ExtensionCodec.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtensionCodec", function() { return _ExtensionCodec_mjs__WEBPACK_IMPORTED_MODULE_6__["ExtensionCodec"]; });

/* harmony import */ var _ExtData_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ExtData.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/ExtData.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtData", function() { return _ExtData_mjs__WEBPACK_IMPORTED_MODULE_7__["ExtData"]; });

/* harmony import */ var _timestamp_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timestamp.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/timestamp.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXT_TIMESTAMP", function() { return _timestamp_mjs__WEBPACK_IMPORTED_MODULE_8__["EXT_TIMESTAMP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encodeDateToTimeSpec", function() { return _timestamp_mjs__WEBPACK_IMPORTED_MODULE_8__["encodeDateToTimeSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encodeTimeSpecToTimestamp", function() { return _timestamp_mjs__WEBPACK_IMPORTED_MODULE_8__["encodeTimeSpecToTimestamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeTimestampToTimeSpec", function() { return _timestamp_mjs__WEBPACK_IMPORTED_MODULE_8__["decodeTimestampToTimeSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encodeTimestampExtension", function() { return _timestamp_mjs__WEBPACK_IMPORTED_MODULE_8__["encodeTimestampExtension"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeTimestampExtension", function() { return _timestamp_mjs__WEBPACK_IMPORTED_MODULE_8__["decodeTimestampExtension"]; });

// Main Functions:











// Utilitiies for Extension Types:






//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@msgpack/msgpack/dist.es5+esm/timestamp.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@msgpack/msgpack/dist.es5+esm/timestamp.mjs ***!
  \******************************************************************/
/*! exports provided: EXT_TIMESTAMP, encodeTimeSpecToTimestamp, encodeDateToTimeSpec, encodeTimestampExtension, decodeTimestampToTimeSpec, decodeTimestampExtension, timestampExtension */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXT_TIMESTAMP", function() { return EXT_TIMESTAMP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeTimeSpecToTimestamp", function() { return encodeTimeSpecToTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeDateToTimeSpec", function() { return encodeDateToTimeSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeTimestampExtension", function() { return encodeTimestampExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeTimestampToTimeSpec", function() { return decodeTimestampToTimeSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeTimestampExtension", function() { return decodeTimestampExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestampExtension", function() { return timestampExtension; });
/* harmony import */ var _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DecodeError.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/DecodeError.mjs");
/* harmony import */ var _utils_int_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/int.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/utils/int.mjs");
// https://github.com/msgpack/msgpack/blob/master/spec.md#timestamp-extension-type


var EXT_TIMESTAMP = -1;
var TIMESTAMP32_MAX_SEC = 0x100000000 - 1; // 32-bit unsigned int
var TIMESTAMP64_MAX_SEC = 0x400000000 - 1; // 34-bit unsigned int
function encodeTimeSpecToTimestamp(_a) {
    var sec = _a.sec, nsec = _a.nsec;
    if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) {
        // Here sec >= 0 && nsec >= 0
        if (nsec === 0 && sec <= TIMESTAMP32_MAX_SEC) {
            // timestamp 32 = { sec32 (unsigned) }
            var rv = new Uint8Array(4);
            var view = new DataView(rv.buffer);
            view.setUint32(0, sec);
            return rv;
        }
        else {
            // timestamp 64 = { nsec30 (unsigned), sec34 (unsigned) }
            var secHigh = sec / 0x100000000;
            var secLow = sec & 0xffffffff;
            var rv = new Uint8Array(8);
            var view = new DataView(rv.buffer);
            // nsec30 | secHigh2
            view.setUint32(0, (nsec << 2) | (secHigh & 0x3));
            // secLow32
            view.setUint32(4, secLow);
            return rv;
        }
    }
    else {
        // timestamp 96 = { nsec32 (unsigned), sec64 (signed) }
        var rv = new Uint8Array(12);
        var view = new DataView(rv.buffer);
        view.setUint32(0, nsec);
        Object(_utils_int_mjs__WEBPACK_IMPORTED_MODULE_1__["setInt64"])(view, 4, sec);
        return rv;
    }
}
function encodeDateToTimeSpec(date) {
    var msec = date.getTime();
    var sec = Math.floor(msec / 1e3);
    var nsec = (msec - sec * 1e3) * 1e6;
    // Normalizes { sec, nsec } to ensure nsec is unsigned.
    var nsecInSec = Math.floor(nsec / 1e9);
    return {
        sec: sec + nsecInSec,
        nsec: nsec - nsecInSec * 1e9,
    };
}
function encodeTimestampExtension(object) {
    if (object instanceof Date) {
        var timeSpec = encodeDateToTimeSpec(object);
        return encodeTimeSpecToTimestamp(timeSpec);
    }
    else {
        return null;
    }
}
function decodeTimestampToTimeSpec(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    // data may be 32, 64, or 96 bits
    switch (data.byteLength) {
        case 4: {
            // timestamp 32 = { sec32 }
            var sec = view.getUint32(0);
            var nsec = 0;
            return { sec: sec, nsec: nsec };
        }
        case 8: {
            // timestamp 64 = { nsec30, sec34 }
            var nsec30AndSecHigh2 = view.getUint32(0);
            var secLow32 = view.getUint32(4);
            var sec = (nsec30AndSecHigh2 & 0x3) * 0x100000000 + secLow32;
            var nsec = nsec30AndSecHigh2 >>> 2;
            return { sec: sec, nsec: nsec };
        }
        case 12: {
            // timestamp 96 = { nsec32 (unsigned), sec64 (signed) }
            var sec = Object(_utils_int_mjs__WEBPACK_IMPORTED_MODULE_1__["getInt64"])(view, 4);
            var nsec = view.getUint32(0);
            return { sec: sec, nsec: nsec };
        }
        default:
            throw new _DecodeError_mjs__WEBPACK_IMPORTED_MODULE_0__["DecodeError"]("Unrecognized data size for timestamp (expected 4, 8, or 12): " + data.length);
    }
}
function decodeTimestampExtension(data) {
    var timeSpec = decodeTimestampToTimeSpec(data);
    return new Date(timeSpec.sec * 1e3 + timeSpec.nsec / 1e6);
}
var timestampExtension = {
    type: EXT_TIMESTAMP,
    encode: encodeTimestampExtension,
    decode: decodeTimestampExtension,
};
//# sourceMappingURL=timestamp.mjs.map

/***/ }),

/***/ "./node_modules/@msgpack/msgpack/dist.es5+esm/utils/int.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@msgpack/msgpack/dist.es5+esm/utils/int.mjs ***!
  \******************************************************************/
/*! exports provided: UINT32_MAX, setUint64, setInt64, getInt64, getUint64 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UINT32_MAX", function() { return UINT32_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUint64", function() { return setUint64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInt64", function() { return setInt64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInt64", function() { return getInt64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUint64", function() { return getUint64; });
// Integer Utility
var UINT32_MAX = 4294967295;
// DataView extension to handle int64 / uint64,
// where the actual range is 53-bits integer (a.k.a. safe integer)
function setUint64(view, offset, value) {
    var high = value / 4294967296;
    var low = value; // high bits are truncated by DataView
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
}
function setInt64(view, offset, value) {
    var high = Math.floor(value / 4294967296);
    var low = value; // high bits are truncated by DataView
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
}
function getInt64(view, offset) {
    var high = view.getInt32(offset);
    var low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
}
function getUint64(view, offset) {
    var high = view.getUint32(offset);
    var low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
}
//# sourceMappingURL=int.mjs.map

/***/ }),

/***/ "./node_modules/@msgpack/msgpack/dist.es5+esm/utils/prettyByte.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/@msgpack/msgpack/dist.es5+esm/utils/prettyByte.mjs ***!
  \*************************************************************************/
/*! exports provided: prettyByte */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prettyByte", function() { return prettyByte; });
function prettyByte(byte) {
    return (byte < 0 ? "-" : "") + "0x" + Math.abs(byte).toString(16).padStart(2, "0");
}
//# sourceMappingURL=prettyByte.mjs.map

/***/ }),

/***/ "./node_modules/@msgpack/msgpack/dist.es5+esm/utils/stream.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/@msgpack/msgpack/dist.es5+esm/utils/stream.mjs ***!
  \*********************************************************************/
/*! exports provided: isAsyncIterable, asyncIterableFromStream, ensureAsyncIterable */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAsyncIterable", function() { return isAsyncIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncIterableFromStream", function() { return asyncIterableFromStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureAsyncIterable", function() { return ensureAsyncIterable; });
// utility for whatwg streams
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __await = (undefined && undefined.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (undefined && undefined.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
function isAsyncIterable(object) {
    return object[Symbol.asyncIterator] != null;
}
function assertNonNull(value) {
    if (value == null) {
        throw new Error("Assertion Failure: value must not be null nor undefined");
    }
}
function asyncIterableFromStream(stream) {
    return __asyncGenerator(this, arguments, function asyncIterableFromStream_1() {
        var reader, _a, done, value;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = stream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                case 2:
                    if (false) {}
                    return [4 /*yield*/, __await(reader.read())];
                case 3:
                    _a = _b.sent(), done = _a.done, value = _a.value;
                    if (!done) return [3 /*break*/, 5];
                    return [4 /*yield*/, __await(void 0)];
                case 4: return [2 /*return*/, _b.sent()];
                case 5:
                    assertNonNull(value);
                    return [4 /*yield*/, __await(value)];
                case 6: return [4 /*yield*/, _b.sent()];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 2];
                case 8: return [3 /*break*/, 10];
                case 9:
                    reader.releaseLock();
                    return [7 /*endfinally*/];
                case 10: return [2 /*return*/];
            }
        });
    });
}
function ensureAsyncIterable(streamLike) {
    if (isAsyncIterable(streamLike)) {
        return streamLike;
    }
    else {
        return asyncIterableFromStream(streamLike);
    }
}
//# sourceMappingURL=stream.mjs.map

/***/ }),

/***/ "./node_modules/@msgpack/msgpack/dist.es5+esm/utils/typedArrays.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@msgpack/msgpack/dist.es5+esm/utils/typedArrays.mjs ***!
  \**************************************************************************/
/*! exports provided: ensureUint8Array, createDataView */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureUint8Array", function() { return ensureUint8Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDataView", function() { return createDataView; });
function ensureUint8Array(buffer) {
    if (buffer instanceof Uint8Array) {
        return buffer;
    }
    else if (ArrayBuffer.isView(buffer)) {
        return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    else if (buffer instanceof ArrayBuffer) {
        return new Uint8Array(buffer);
    }
    else {
        // ArrayLike<number>
        return Uint8Array.from(buffer);
    }
}
function createDataView(buffer) {
    if (buffer instanceof ArrayBuffer) {
        return new DataView(buffer);
    }
    var bufferView = ensureUint8Array(buffer);
    return new DataView(bufferView.buffer, bufferView.byteOffset, bufferView.byteLength);
}
//# sourceMappingURL=typedArrays.mjs.map

/***/ }),

/***/ "./node_modules/@msgpack/msgpack/dist.es5+esm/utils/utf8.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@msgpack/msgpack/dist.es5+esm/utils/utf8.mjs ***!
  \*******************************************************************/
/*! exports provided: utf8Count, utf8EncodeJs, TEXT_ENCODER_THRESHOLD, utf8EncodeTE, utf8DecodeJs, TEXT_DECODER_THRESHOLD, utf8DecodeTD */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utf8Count", function() { return utf8Count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utf8EncodeJs", function() { return utf8EncodeJs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_ENCODER_THRESHOLD", function() { return TEXT_ENCODER_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utf8EncodeTE", function() { return utf8EncodeTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utf8DecodeJs", function() { return utf8DecodeJs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_DECODER_THRESHOLD", function() { return TEXT_DECODER_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utf8DecodeTD", function() { return utf8DecodeTD; });
/* harmony import */ var _int_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./int.mjs */ "./node_modules/@msgpack/msgpack/dist.es5+esm/utils/int.mjs");

var TEXT_ENCODING_AVAILABLE = (typeof process === "undefined" || process.env["TEXT_ENCODING"] !== "never") &&
    typeof TextEncoder !== "undefined" &&
    typeof TextDecoder !== "undefined";
function utf8Count(str) {
    var strLength = str.length;
    var byteLength = 0;
    var pos = 0;
    while (pos < strLength) {
        var value = str.charCodeAt(pos++);
        if ((value & 0xffffff80) === 0) {
            // 1-byte
            byteLength++;
            continue;
        }
        else if ((value & 0xfffff800) === 0) {
            // 2-bytes
            byteLength += 2;
        }
        else {
            // handle surrogate pair
            if (value >= 0xd800 && value <= 0xdbff) {
                // high surrogate
                if (pos < strLength) {
                    var extra = str.charCodeAt(pos);
                    if ((extra & 0xfc00) === 0xdc00) {
                        ++pos;
                        value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                    }
                }
            }
            if ((value & 0xffff0000) === 0) {
                // 3-byte
                byteLength += 3;
            }
            else {
                // 4-byte
                byteLength += 4;
            }
        }
    }
    return byteLength;
}
function utf8EncodeJs(str, output, outputOffset) {
    var strLength = str.length;
    var offset = outputOffset;
    var pos = 0;
    while (pos < strLength) {
        var value = str.charCodeAt(pos++);
        if ((value & 0xffffff80) === 0) {
            // 1-byte
            output[offset++] = value;
            continue;
        }
        else if ((value & 0xfffff800) === 0) {
            // 2-bytes
            output[offset++] = ((value >> 6) & 0x1f) | 0xc0;
        }
        else {
            // handle surrogate pair
            if (value >= 0xd800 && value <= 0xdbff) {
                // high surrogate
                if (pos < strLength) {
                    var extra = str.charCodeAt(pos);
                    if ((extra & 0xfc00) === 0xdc00) {
                        ++pos;
                        value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                    }
                }
            }
            if ((value & 0xffff0000) === 0) {
                // 3-byte
                output[offset++] = ((value >> 12) & 0x0f) | 0xe0;
                output[offset++] = ((value >> 6) & 0x3f) | 0x80;
            }
            else {
                // 4-byte
                output[offset++] = ((value >> 18) & 0x07) | 0xf0;
                output[offset++] = ((value >> 12) & 0x3f) | 0x80;
                output[offset++] = ((value >> 6) & 0x3f) | 0x80;
            }
        }
        output[offset++] = (value & 0x3f) | 0x80;
    }
}
var sharedTextEncoder = TEXT_ENCODING_AVAILABLE ? new TextEncoder() : undefined;
var TEXT_ENCODER_THRESHOLD = !TEXT_ENCODING_AVAILABLE
    ? _int_mjs__WEBPACK_IMPORTED_MODULE_0__["UINT32_MAX"]
    : typeof process !== "undefined" && process.env["TEXT_ENCODING"] !== "force"
        ? 200
        : 0;
function utf8EncodeTEencode(str, output, outputOffset) {
    output.set(sharedTextEncoder.encode(str), outputOffset);
}
function utf8EncodeTEencodeInto(str, output, outputOffset) {
    sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
}
var utf8EncodeTE = (sharedTextEncoder === null || sharedTextEncoder === void 0 ? void 0 : sharedTextEncoder.encodeInto) ? utf8EncodeTEencodeInto : utf8EncodeTEencode;
var CHUNK_SIZE = 4096;
function utf8DecodeJs(bytes, inputOffset, byteLength) {
    var offset = inputOffset;
    var end = offset + byteLength;
    var units = [];
    var result = "";
    while (offset < end) {
        var byte1 = bytes[offset++];
        if ((byte1 & 0x80) === 0) {
            // 1 byte
            units.push(byte1);
        }
        else if ((byte1 & 0xe0) === 0xc0) {
            // 2 bytes
            var byte2 = bytes[offset++] & 0x3f;
            units.push(((byte1 & 0x1f) << 6) | byte2);
        }
        else if ((byte1 & 0xf0) === 0xe0) {
            // 3 bytes
            var byte2 = bytes[offset++] & 0x3f;
            var byte3 = bytes[offset++] & 0x3f;
            units.push(((byte1 & 0x1f) << 12) | (byte2 << 6) | byte3);
        }
        else if ((byte1 & 0xf8) === 0xf0) {
            // 4 bytes
            var byte2 = bytes[offset++] & 0x3f;
            var byte3 = bytes[offset++] & 0x3f;
            var byte4 = bytes[offset++] & 0x3f;
            var unit = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0c) | (byte3 << 0x06) | byte4;
            if (unit > 0xffff) {
                unit -= 0x10000;
                units.push(((unit >>> 10) & 0x3ff) | 0xd800);
                unit = 0xdc00 | (unit & 0x3ff);
            }
            units.push(unit);
        }
        else {
            units.push(byte1);
        }
        if (units.length >= CHUNK_SIZE) {
            result += String.fromCharCode.apply(String, units);
            units.length = 0;
        }
    }
    if (units.length > 0) {
        result += String.fromCharCode.apply(String, units);
    }
    return result;
}
var sharedTextDecoder = TEXT_ENCODING_AVAILABLE ? new TextDecoder() : null;
var TEXT_DECODER_THRESHOLD = !TEXT_ENCODING_AVAILABLE
    ? _int_mjs__WEBPACK_IMPORTED_MODULE_0__["UINT32_MAX"]
    : typeof process !== "undefined" && process.env["TEXT_DECODER"] !== "force"
        ? 200
        : 0;
function utf8DecodeTD(bytes, inputOffset, byteLength) {
    var stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
    return sharedTextDecoder.decode(stringBytes);
}
//# sourceMappingURL=utf8.mjs.map

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, module, scripts, repository, keywords, author, license, bugs, homepage, dependencies, devDependencies, eslintConfig, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hypha-rpc\",\"version\":\"0.4.4\",\"description\":\"Remote procedure calls for Hypha.\",\"module\":\"index.js\",\"scripts\":{\"build\":\"rm -rf dist && npm run build-umd\",\"build-umd\":\"webpack --config webpack.config.js --mode development && NODE_ENV=production webpack --config webpack.config.js --mode production --devtool source-map \",\"watch\":\"NODE_ENV=production webpack --watch --progress --config webpack.config.js --mode production --devtool source-map\",\"publish-npm\":\"npm install && npm run build && npm publish\",\"serve\":\"webpack-dev-server\",\"stats\":\"webpack --profile --json > stats.json\",\"stats-prod\":\"webpack --profile --json --mode production > stats-prod.json\",\"analyze\":\"webpack-bundle-analyzer -p 9999 stats.json\",\"analyze-prod\":\"webpack-bundle-analyzer -p 9999 stats-prod.json\",\"clean\":\"rimraf dist/*\",\"deploy\":\"npm run build && node deploy-site.js\",\"format\":\"prettier --write \\\"{src,tests}/**/**\\\"\",\"check-format\":\"prettier --check \\\"{src,tests}/**/**\\\"\",\"test\":\"karma start --single-run --browsers ChromeHeadless,FirefoxHeadless karma.conf.js\",\"test-watch\":\"karma start --auto-watch --browsers ChromeDebugging karma.conf.js --debug\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/imjoy-team/imjoy-rpc.git\"},\"keywords\":[\"imjoy\",\"rpc\"],\"author\":\"imjoy-team <imjoy.team@gmail.com>\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/imjoy-team/imjoy-rpc/issues\"},\"homepage\":\"https://github.com/imjoy-team/imjoy-rpc\",\"dependencies\":{\"@msgpack/msgpack\":\"^2.7.1\",\"socket.io-client\":\"^4.0.1\"},\"devDependencies\":{\"@babel/core\":\"^7.0.0-beta.39\",\"@babel/plugin-syntax-dynamic-import\":\"^7.0.0-beta.39\",\"@babel/polyfill\":\"^7.0.0-beta.39\",\"@babel/preset-env\":\"^7.0.0-beta.39\",\"@types/requirejs\":\"^2.1.28\",\"babel-core\":\"^6.26.0\",\"babel-eslint\":\"^10.1.0\",\"babel-loader\":\"^8.1.0\",\"babel-runtime\":\"^6.26.0\",\"chai\":\"^4.2.0\",\"clean-webpack-plugin\":\"^0.1.19\",\"copy-webpack-plugin\":\"^5.0.5\",\"eslint\":\"^6.8.0\",\"eslint-config-prettier\":\"^4.2.0\",\"eslint-loader\":\"^4.0.2\",\"file-loader\":\"^0.11.2\",\"fs-extra\":\"^0.30.0\",\"gh-pages\":\"^2.0.1\",\"html-loader\":\"^0.5.5\",\"html-webpack-plugin\":\"^3.2.0\",\"json-loader\":\"^0.5.4\",\"karma\":\"^6.3.2\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-firefox-launcher\":\"^1.3.0\",\"karma-mocha\":\"^1.3.0\",\"karma-sourcemap-loader\":\"^0.3.8\",\"karma-spec-reporter\":\"0.0.32\",\"karma-webpack\":\"^4.0.2\",\"lerna\":\"^3.8.0\",\"lodash.debounce\":\"^4.0.8\",\"mocha\":\"^7.1.2\",\"postcss\":\"^6.0.2\",\"prettier\":\"^1.6.1\",\"rimraf\":\"^2.6.2\",\"schema-utils\":\"^0.4.3\",\"style-loader\":\"^0.18.1\",\"url-loader\":\"^0.5.9\",\"webpack\":\"^4.0.0\",\"webpack-bundle-analyzer\":\"^3.3.2\",\"webpack-cli\":\"^3.1.2\",\"webpack-dev-server\":\"^3.1.1\",\"webpack-merge\":\"^4.1.1\",\"workbox-webpack-plugin\":\"^4.3.1\",\"worker-loader\":\"^2.0.0\",\"write-file-webpack-plugin\":\"^4.5.1\"},\"eslintConfig\":{\"globals\":{\"document\":true,\"window\":true}}}");

/***/ }),

/***/ "./src/rpc.js":
/*!********************!*\
  !*** ./src/rpc.js ***!
  \********************/
/*! exports provided: API_VERSION, RPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_VERSION", function() { return API_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPC", function() { return RPC; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _msgpack_msgpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @msgpack/msgpack */ "./node_modules/@msgpack/msgpack/dist.es5+esm/index.mjs");
/**
 * Contains the RPC object used both by the application
 * site, and by each plugin
 */


const API_VERSION = "0.2.3";
const CHUNK_SIZE = 1024 * 500;
const ArrayBufferView = Object.getPrototypeOf(Object.getPrototypeOf(new Uint8Array())).constructor;

function _appendBuffer(buffer1, buffer2) {
  const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
  tmp.set(new Uint8Array(buffer1), 0);
  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
  return tmp.buffer;
}

function indexObject(obj, is) {
  if (!is) throw new Error("undefined index");
  if (typeof is === "string") return indexObject(obj, is.split("."));else if (is.length === 0) return obj;else return indexObject(obj[is[0]], is.slice(1));
}

function wait_for(prom, time) {
  let timer;
  return Promise.race([prom, new Promise((_r, rej) => timer = setTimeout(rej, time * 1000))]).finally(() => clearTimeout(timer));
}

function concatArrayBuffers(buffers) {
  var buffersLengths = buffers.map(function (b) {
    return b.byteLength;
  }),
      totalBufferlength = buffersLengths.reduce(function (p, c) {
    return p + c;
  }, 0),
      unit8Arr = new Uint8Array(totalBufferlength);
  buffersLengths.reduce(function (p, c, i) {
    unit8Arr.set(new Uint8Array(buffers[i]), p);
    return p + c;
  }, 0);
  return unit8Arr.buffer;
}

class Timer {
  constructor(timeout, callback, args, label) {
    this._timeout = timeout;
    this._callback = callback;
    this._args = args;
    this._label = label || "timer";
    this._task = null;
  }

  start() {
    this._task = setTimeout(() => {
      this._callback.apply(this, this._args);
    }, this._timeout * 1000);
  }

  clear() {
    if (this._task) {
      clearTimeout(this._task);
      this._task = null;
    }
  }

  reset() {
    this.clear();
    this.start();
  }

}
/**
 * RPC object represents a single site in the
 * communication protocol between the application and the plugin
 *
 * @param {Object} connection a special object allowing to send
 * and receive messages from the opposite site (basically it
 * should only provide send() and onMessage() methods)
 */


class RPC extends _utils_js__WEBPACK_IMPORTED_MODULE_0__["MessageEmitter"] {
  constructor(connection, {
    client_id = null,
    root_target_id = null,
    default_context = null,
    name = null,
    codecs = null,
    method_timeout = null,
    max_message_buffer_size = 0,
    debug = false
  }) {
    super(debug);
    this._codecs = codecs || {};
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(client_id && typeof client_id === "string");
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(client_id, "client_id is required");
    this._client_id = client_id;
    this._name = name;
    this.root_target_id = root_target_id;
    this.default_context = default_context || {};
    this._method_annotations = new WeakMap();
    this._remote_root_service = null;
    this._max_message_buffer_size = max_message_buffer_size;
    this._chunk_store = {};
    this._method_timeout = method_timeout || 20; // make sure there is an execute function

    this._services = {};
    this._object_store = {
      services: this._services
    };
    this.add_service({
      id: "built-in",
      type: "built-in",
      name: "RPC built-in services",
      config: {
        require_context: true,
        visibility: "public"
      },
      ping: this._ping.bind(this),
      get_service: this.get_local_service.bind(this),
      register_service: this.register_service.bind(this),
      message_cache: {
        create: this._create_message.bind(this),
        append: this._append_message.bind(this),
        process: this._process_message.bind(this),
        remove: this._remove_message.bind(this)
      }
    });
    this.on("method", this._handle_method.bind(this));
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(connection.emit_message && connection.on_message);
    this._emit_message = connection.emit_message.bind(connection);
    connection.on_message(this._on_message.bind(this));
  }

  register_codec(config) {
    if (!config["name"] || !config["encoder"] && !config["decoder"]) {
      throw new Error("Invalid codec format, please make sure you provide a name, type, encoder and decoder.");
    } else {
      if (config.type) {
        for (let k of Object.keys(this._codecs)) {
          if (this._codecs[k].type === config.type || k === config.name) {
            delete this._codecs[k];
            console.warn("Remove duplicated codec: " + k);
          }
        }
      }

      this._codecs[config["name"]] = config;
    }
  }

  async _ping(msg, context) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(msg == "ping");
    return "pong";
  }

  async ping(client_id, timeout) {
    let method = this._generate_remote_method({
      _rtarget: client_id,
      _rmethod: "services.built-in.ping",
      _rpromise: true
    });

    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])((await method("ping", timeout)) == "pong");
  }

  _create_message(key, heartbeat, overwrite, context) {
    if (heartbeat) {
      if (!this._object_store[key]) {
        throw new Error(`session does not exist anymore: ${key}`);
      }

      this._object_store[key]["timer"].reset();
    }

    if (!this._object_store["message_cache"]) {
      this._object_store["message_cache"] = {};
    }

    if (!overwrite && this._object_store["message_cache"][key]) {
      throw new Error(`Message with the same key (${key}) already exists in the cache store, please use overwrite=true or remove it first.`);
    }

    this._object_store["message_cache"][key] = [];
  }

  _append_message(key, data, heartbeat, context) {
    if (heartbeat) {
      if (!this._object_store[key]) {
        throw new Error(`session does not exist anymore: ${key}`);
      }

      this._object_store[key]["timer"].reset();
    }

    const cache = this._object_store["message_cache"];

    if (!cache[key]) {
      throw new Error(`Message with key ${key} does not exists.`);
    }

    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(data instanceof ArrayBufferView);
    cache[key].push(data);
  }

  _remove_message(key, context) {
    const cache = this._object_store["message_cache"];

    if (!cache[key]) {
      throw new Error(`Message with key ${key} does not exists.`);
    }

    delete cache[key];
  }

  _process_message(key, heartbeat, context) {
    if (heartbeat) {
      if (!this._object_store[key]) {
        throw new Error(`session does not exist anymore: ${key}`);
      }

      this._object_store[key]["timer"].reset();
    }

    const cache = this._object_store["message_cache"];
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(!!context, "Context is required");

    if (!cache[key]) {
      throw new Error(`Message with key ${key} does not exists.`);
    }

    cache[key] = concatArrayBuffers(cache[key]);
    console.debug(`Processing message ${key} (size=${cache[key].length})`);
    let unpacker = Object(_msgpack_msgpack__WEBPACK_IMPORTED_MODULE_1__["decodeMulti"])(cache[key]);
    const {
      done,
      value
    } = unpacker.next();
    const main = value; // Make sure the fields are from trusted source

    Object.assign(main, {
      from: context.from,
      to: context.to,
      user: context.user
    });
    main["ctx"] = JSON.parse(JSON.stringify(main));
    Object.assign(main["ctx"], this.default_context);

    if (!done) {
      let extra = unpacker.next();
      Object.assign(main, extra.value);
    }

    this._fire(main["type"], main);

    delete cache[key];
  }

  _on_message(message) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(message instanceof ArrayBuffer);
    let unpacker = Object(_msgpack_msgpack__WEBPACK_IMPORTED_MODULE_1__["decodeMulti"])(message);
    const {
      done,
      value
    } = unpacker.next();
    const main = value; // Add trusted context to the method call

    main["ctx"] = JSON.parse(JSON.stringify(main));
    Object.assign(main["ctx"], this.default_context);

    if (!done) {
      let extra = unpacker.next();
      Object.assign(main, extra.value);
    }

    this._fire(main["type"], main);
  }

  reset() {
    this._event_handlers = {};
    this._services = {};
  }

  async disconnect() {
    this._fire("disconnect");
  }

  async get_remote_root_service(timeout) {
    if (this.root_target_id && !this._remote_root_service) {
      this._remote_root_service = await this.get_remote_service(`${this.root_target_id}:default`, timeout);
    }
  }

  get_all_local_services() {
    return this._services;
  }

  get_local_service(service_id, context) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(service_id);
    const [ws, client_id] = context["to"].split("/");
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(client_id === this._client_id);
    const service = this._services[service_id];

    if (!service) {
      throw new Error("Service not found: " + service_id);
    } // allow access for the same workspace


    if (service.config.visibility == "public") {
      return service;
    } // allow access for the same workspace


    if (context["from"].startsWith(ws + "/")) {
      return service;
    }

    throw new Error("Permission denied for service: " + service_id);
  }

  async get_remote_service(service_uri, timeout) {
    timeout = timeout === undefined ? 5 : timeout;

    if (!service_uri && this.root_target_id) {
      service_uri = this.root_target_id;
    } else if (!service_uri.includes(":")) {
      service_uri = this._client_id + ":" + service_uri;
    }

    const provider = service_uri.split(":")[0];
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(provider);

    try {
      const method = this._generate_remote_method({
        _rtarget: provider,
        _rmethod: "services.built-in.get_service",
        _rpromise: true
      });

      return await wait_for(method(service_uri.split(":")[1]), timeout);
    } catch (e) {
      console.error("Failed to get remote service: " + service_uri, e);
      throw e;
    }
  }

  _annotate_service_methods(aObject, object_id, require_context, run_in_executor, visibility) {
    if (typeof aObject === "function") {
      // mark the method as a remote method that requires context
      let method_name = object_id.split(".")[1];

      this._method_annotations.set(aObject, {
        require_context: Array.isArray(require_context) ? require_context.includes(method_name) : !!require_context,
        run_in_executor: run_in_executor,
        method_id: "services." + object_id,
        visibility: visibility
      });
    } else if (aObject instanceof Array || aObject instanceof Object) {
      for (let key of Object.keys(aObject)) {
        let val = aObject[key];

        if (typeof val === "function" && val.__rpc_object__) {
          if (this._client_id === val.__rpc_object__._rtarget) {
            if (aObject instanceof Array) {
              aObject = aObject.slice();
            } // recover local method


            aObject[key] = indexObject(this._object_store, val.__rpc_object__._rmethod);
            val = aObject[key]; // make sure it's annotated later
          } else {
            throw new Error("Local method not found: " + val.__rpc_object__._rmethod);
          }
        }

        this._annotate_service_methods(val, object_id + "." + key, require_context, run_in_executor, visibility);
      }
    }
  }

  add_service(api, overwrite) {
    if (!api || Array.isArray(api)) throw new Error("Invalid service object");

    if (api.constructor === Object) {
      api = Object.assign({}, api);
    } else {
      const normApi = {};

      for (let k of Object.getOwnPropertyNames(Object.getPrototypeOf(api))) {
        if (k !== 'constructor') {
          if (typeof api[k] === 'function') normApi[k] = api[k].bind(api);else normApi[k] = api[k];
        }
      }

      api = normApi;
    }

    if (!api.id) {
      api.id = api.name || "default";
    }

    if (!api.name) {
      api.name = api.id;
    }

    if (!api.config) {
      api.config = {};
    }

    if (!api.type) {
      api.type = "generic";
    } // require_context only applies to the top-level functions


    let require_context = false,
        run_in_executor = false;
    if (api.config.require_context) require_context = api.config.require_context;
    if (api.config.run_in_executor) run_in_executor = true;
    const visibility = api.config.visibility || "protected";
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(["protected", "public"].includes(visibility));

    this._annotate_service_methods(api, api["id"], require_context, run_in_executor, visibility);

    if (this._services[api.id]) {
      if (overwrite) {
        delete this._services[api.id];
      } else {
        throw new Error(`Service already exists: ${api.id}, please specify a different id (not ${api.id}) or overwrite=true`);
      }
    }

    this._services[api.id] = api;
    return api;
  }

  async register_service(api, overwrite, notify, context) {
    if (notify === undefined) notify = true;

    if (context) {
      // If this function is called from remote, we need to make sure
      const [workspace, client_id] = context["to"].split("/");
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(client_id === this._client_id);
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(workspace === context["from"].split("/")[0], "Services can only be registered from the same workspace");
    }

    const service = this.add_service(api, overwrite);

    if (notify) {
      this._fire("service-updated", {
        service_id: service["id"],
        api: service,
        type: "add"
      });

      await this._notify_service_update();
    }

    return {
      id: `${this._client_id}:${service["id"]}`,
      type: service["type"],
      name: service["name"],
      config: service["config"]
    };
  }

  async unregister_service(service, notify) {
    if (service instanceof Object) {
      service = service.id;
    }

    if (!this._services[service]) {
      throw new Error(`Service not found: ${service}`);
    }

    const api = this._services[service];
    delete this._services[service];

    this._fire("service-updated", {
      service_id: service,
      api: api,
      type: "remove"
    });

    await this._notify_service_update();
  }

  _ndarray(typedArray, shape, dtype) {
    const _dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["typedArrayToDtype"])(typedArray);

    if (dtype && dtype !== _dtype) {
      throw "dtype doesn't match the type of the array: " + _dtype + " != " + dtype;
    }

    shape = shape || [typedArray.length];
    return {
      _rtype: "ndarray",
      _rvalue: typedArray.buffer,
      _rshape: shape,
      _rdtype: _dtype
    };
  }

  _encode_callback(name, callback, session_id, clear_after_called, timer, local_workspace) {
    let method_id = `${session_id}.${name}`;
    let encoded = {
      _rtype: "method",
      _rtarget: local_workspace ? `${local_workspace}/${this._client_id}` : this._client_id,
      _rmethod: method_id,
      _rpromise: false
    };
    const self = this;

    let wrapped_callback = function () {
      try {
        callback.apply(null, Array.prototype.slice.call(arguments));
      } catch (error) {
        console.error("Error in callback:", method_id, error);
      } finally {
        if (clear_after_called && self._object_store[session_id]) {
          console.log("Deleting session", session_id, "from", self._client_id);
          delete self._object_store[session_id];
        }

        if (timer) {
          timer.clear();
        }
      }
    };

    return [encoded, wrapped_callback];
  }

  async _encode_promise(resolve, reject, session_id, clear_after_called, timer, local_workspace) {
    let store = this._get_session_store(session_id, true);

    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(store, `Failed to create session store ${session_id} due to invalid parent`);
    let encoded = {};

    if (timer && reject && this._method_timeout) {
      encoded.heartbeat = await this._encode(timer.reset.bind(timer), session_id, local_workspace);
      encoded.interval = this._method_timeout / 2;
      store.timer = timer;
    } else {
      timer = null;
    }

    [encoded.resolve, store.resolve] = this._encode_callback("resolve", resolve, session_id, clear_after_called, timer, local_workspace);
    [encoded.reject, store.reject] = this._encode_callback("reject", reject, session_id, clear_after_called, timer, local_workspace);
    return encoded;
  }

  async _send_chunks(data, target_id, session_id) {
    let remote_services = await this.get_remote_service(`${target_id}:built-in`);
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(remote_services.message_cache, "Remote client does not support message caching for long message.");
    let message_cache = remote_services.message_cache;
    let message_id = session_id || Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["randId"])();
    await message_cache.create(message_id, !!session_id);
    let total_size = data.length;
    let chunk_num = Math.ceil(total_size / CHUNK_SIZE);

    for (let idx = 0; idx < chunk_num; idx++) {
      let start_byte = idx * CHUNK_SIZE;
      await message_cache.append(message_id, data.slice(start_byte, start_byte + CHUNK_SIZE), !!session_id);
      console.log(`Sending chunk ${idx + 1}/${chunk_num} (${total_size} bytes)`);
    }

    console.log(`All chunks sent (${chunk_num})`);
    await message_cache.process(message_id, !!session_id);
  }

  _generate_remote_method(encoded_method, remote_parent, local_parent, remote_workspace, local_workspace) {
    let target_id = encoded_method._rtarget;

    if (remote_workspace && !target_id.includes("/")) {
      target_id = remote_workspace + "/" + target_id;
    }

    let method_id = encoded_method._rmethod;
    let with_promise = encoded_method._rpromise;
    const self = this;

    function remote_method() {
      return new Promise(async (resolve, reject) => {
        let local_session_id = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["randId"])();

        if (local_parent) {
          // Store the children session under the parent
          local_session_id = local_parent + "." + local_session_id;
        }

        let store = self._get_session_store(local_session_id, true);

        Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(store, `Failed to get session store ${local_session_id}`);
        store["target_id"] = target_id;
        const args = await self._encode(Array.prototype.slice.call(arguments), local_session_id, local_workspace);
        const argLength = args.length; // if the last argument is an object, mark it as kwargs

        const withKwargs = argLength > 0 && typeof args[argLength - 1] === "object" && args[argLength - 1] !== null && args[argLength - 1]._rkwargs;
        if (withKwargs) delete args[argLength - 1]._rkwargs;
        let main_message = {
          type: "method",
          from: self._client_id,
          to: target_id,
          method: method_id
        };
        let extra_data = {};

        if (args) {
          extra_data["args"] = args;
        }

        if (withKwargs) {
          extra_data["with_kwargs"] = withKwargs;
        }

        console.log(`Calling remote method ${target_id}:${method_id}, session: ${local_session_id}`);

        if (remote_parent) {
          // Set the parent session
          // Note: It's a session id for the remote, not the current client
          main_message["parent"] = remote_parent;
        }

        let timer = null;

        if (with_promise) {
          // Only pass the current session id to the remote
          // if we want to received the result
          // I.e. the session id won't be passed for promises themselves
          main_message["session"] = local_session_id;
          let method_name = `${target_id}:${method_id}`;
          timer = new Timer(self._method_timeout, reject, [`Method call time out: ${method_name}`], method_name);
          extra_data["promise"] = await self._encode_promise(resolve, reject, local_session_id, true, timer, local_workspace);
        } // The message consists of two segments, the main message and extra data


        let message_package = Object(_msgpack_msgpack__WEBPACK_IMPORTED_MODULE_1__["encode"])(main_message);

        if (extra_data) {
          const extra = Object(_msgpack_msgpack__WEBPACK_IMPORTED_MODULE_1__["encode"])(extra_data);
          message_package = new Uint8Array([...message_package, ...extra]);
        }

        let total_size = message_package.length;

        if (total_size <= CHUNK_SIZE + 1024) {
          self._emit_message(message_package).then(function () {
            if (timer) {
              console.log(`Start watchdog timer.`); // Only start the timer after we send the message successfully

              timer.start();
            }
          });
        } else {
          // send chunk by chunk
          self._send_chunks(message_package, target_id, remote_parent).then(function () {
            if (timer) {
              console.log(`Start watchdog timer.`); // Only start the timer after we send the message successfully

              timer.start();
            }
          });
        }
      });
    } // Generate debugging information for the method


    remote_method.__rpc_object__ = encoded_method;
    return remote_method;
  }

  async _notify_service_update() {
    if (this.root_target_id) {
      // try to get the root service
      try {
        await this.get_remote_root_service(5.0);
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(this._remote_root_service);
        await this._remote_root_service.update_client_info(this.get_client_info());
      } catch (exp) {
        // pylint: disable=broad-except
        console.warn("Failed to notify service update to", this.root_target_id, exp);
      }
    }
  }

  get_client_info() {
    const services = [];

    for (let service of Object.values(this._services)) {
      services.push({
        id: `${this._client_id}:${service["id"]}`,
        type: service["type"],
        name: service["name"],
        config: service["config"]
      });
    }

    return {
      id: this._client_id,
      services: services
    };
  }

  async _handle_method(data) {
    let reject = null;
    let heartbeat_task = null;

    try {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(data["method"] && data["ctx"] && data["from"]);
      const method_name = data.from + ":" + data.method;
      const remote_workspace = data.from.split("/")[0];
      const local_workspace = data.to.split("/")[0];
      const local_parent = data.parent;
      let resolve, reject;

      if (data.promise) {
        // Decode the promise with the remote session id
        // Such that the session id will be passed to the remote as a parent session id
        const promise = await this._decode(data.promise, data.session, local_parent, remote_workspace, local_workspace);
        resolve = promise.resolve;
        reject = promise.reject;

        if (promise.heartbeat && promise.interval) {
          async function heartbeat() {
            try {
              console.log("Reset heartbeat timer: " + data.method);
              await promise.heartbeat();
            } catch (err) {
              console.error(err);
            }
          }

          heartbeat_task = setInterval(heartbeat, promise.interval * 1000);
        }
      }

      let method;

      try {
        method = indexObject(this._object_store, data["method"]);
      } catch (e) {
        console.error("Failed to find method", method_name, e);
        throw new Error(`Method not found: ${method_name}`);
      }

      Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(method && typeof method === "function", "Invalid method: " + method_name); // Check permission

      if (this._method_annotations.has(method)) {
        // For services, it should not be protected
        if (this._method_annotations.get(method).visibility === "protected") {
          if (local_workspace !== remote_workspace) {
            throw new Error("Permission denied for protected method " + method_name + ", workspace mismatch: " + local_workspace + " != " + remote_workspace);
          }
        }
      } else {
        // For sessions, the target_id should match exactly
        let session_target_id = this._object_store[data.method.split(".")[0]].target_id;

        if (local_workspace === remote_workspace && session_target_id && session_target_id.indexOf("/") === -1) {
          session_target_id = local_workspace + "/" + session_target_id;
        }

        if (session_target_id !== data.from) {
          throw new Error("Access denied for method call (" + method_name + ") from " + data.from);
        }
      } // Make sure the parent session is still open


      if (local_parent) {
        // The parent session should be a session that generate the current method call
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(this._get_session_store(local_parent, true) !== null, "Parent session was closed: " + local_parent);
      }

      let args;

      if (data.args) {
        args = await this._decode(data.args, data.session, null, remote_workspace, null);
      } else {
        args = [];
      }

      if (this._method_annotations.has(method) && this._method_annotations.get(method).require_context) {
        args.push(data.ctx);
      }

      console.log("Executing method: " + method_name);

      if (data.promise) {
        const result = method.apply(null, args);

        if (result instanceof Promise) {
          result.then(result => {
            resolve(result);
            clearInterval(heartbeat_task);
          }).catch(err => {
            reject(err);
            clearInterval(heartbeat_task);
          });
        } else {
          resolve(result);
          clearInterval(heartbeat_task);
        }
      } else {
        method.apply(null, args);
        clearInterval(heartbeat_task);
      }
    } catch (err) {
      console.error("Error during calling method: ", err);

      if (reject) {
        reject(err);
      } // make sure we clear the heartbeat timer


      clearInterval(heartbeat_task);
    }
  }

  encode(aObject, session_id) {
    return this._encode(aObject, session_id);
  }

  _get_session_store(session_id, create) {
    let store = this._object_store;
    const levels = session_id.split(".");

    if (create) {
      const last_index = levels.length - 1;

      for (let level of levels.slice(0, last_index)) {
        if (!store[level]) {
          return null;
        }

        store = store[level];
      } // Create the last level


      if (!store[levels[last_index]]) {
        store[levels[last_index]] = {};
      }

      return store[levels[last_index]];
    } else {
      for (let level of levels) {
        if (!store[level]) {
          return null;
        }

        store = store[level];
      }

      return store;
    }
  }
  /**
   * Prepares the provided set of remote method arguments for
   * sending to the remote site, replaces all the callbacks with
   * identifiers
   *
   * @param {Array} args to wrap
   *
   * @returns {Array} wrapped arguments
   */


  async _encode(aObject, session_id, local_workspace) {
    const aType = typeof aObject;

    if (aType === "number" || aType === "string" || aType === "boolean" || aObject === null || aObject === undefined || aObject instanceof Uint8Array) {
      return aObject;
    }

    if (aObject instanceof ArrayBuffer) {
      return {
        _rtype: "memoryview",
        _rvalue: new Uint8Array(aObject)
      };
    } // Reuse the remote object


    if (aObject.__rpc_object__) {
      return aObject.__rpc_object__;
    }

    let bObject; // skip if already encoded

    if (aObject.constructor instanceof Object && aObject._rtype) {
      // make sure the interface functions are encoded
      const temp = aObject._rtype;
      delete aObject._rtype;
      bObject = await this._encode(aObject, session_id, local_workspace);
      bObject._rtype = temp;
      return bObject;
    }

    if (typeof aObject === "function") {
      if (this._method_annotations.has(aObject)) {
        let annotation = this._method_annotations.get(aObject);

        bObject = {
          _rtype: "method",
          _rtarget: this._client_id,
          _rmethod: annotation.method_id,
          _rpromise: true
        };
      } else {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(typeof session_id === "string");
        let object_id;

        if (aObject.__name__) {
          object_id = `${Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["randId"])()}-${aObject.__name__}`;
        } else {
          object_id = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["randId"])();
        }

        bObject = {
          _rtype: "method",
          _rtarget: this._client_id,
          _rmethod: `${session_id}.${object_id}`,
          _rpromise: true
        };

        let store = this._get_session_store(session_id, true);

        Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(store !== null, `Failed to create session store ${session_id} due to invalid parent`);
        store[object_id] = aObject;
      }

      return bObject;
    }

    const isarray = Array.isArray(aObject);

    for (let tp of Object.keys(this._codecs)) {
      const codec = this._codecs[tp];

      if (codec.encoder && aObject instanceof codec.type) {
        // TODO: what if multiple encoders found
        let encodedObj = await Promise.resolve(codec.encoder(aObject));
        if (encodedObj && !encodedObj._rtype) encodedObj._rtype = codec.name; // encode the functions in the interface object

        if (typeof encodedObj === "object") {
          const temp = encodedObj._rtype;
          delete encodedObj._rtype;
          encodedObj = await this._encode(encodedObj, session_id, local_workspace);
          encodedObj._rtype = temp;
        }

        bObject = encodedObj;
        return bObject;
      }
    }

    if (
    /*global tf*/
    typeof tf !== "undefined" && tf.Tensor && aObject instanceof tf.Tensor) {
      const v_buffer = aObject.dataSync();
      bObject = {
        _rtype: "ndarray",
        _rvalue: new Uint8Array(v_buffer.buffer),
        _rshape: aObject.shape,
        _rdtype: aObject.dtype
      };
    } else if (
    /*global nj*/
    typeof nj !== "undefined" && nj.NdArray && aObject instanceof nj.NdArray) {
      const dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["typedArrayToDtype"])(aObject.selection.data);
      bObject = {
        _rtype: "ndarray",
        _rvalue: new Uint8Array(aObject.selection.data.buffer),
        _rshape: aObject.shape,
        _rdtype: dtype
      };
    } else if (aObject instanceof Error) {
      console.error(aObject);
      bObject = {
        _rtype: "error",
        _rvalue: aObject.toString()
      };
    } // send objects supported by structure clone algorithm
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
    else if (aObject !== Object(aObject) || aObject instanceof Boolean || aObject instanceof String || aObject instanceof Date || aObject instanceof RegExp || aObject instanceof ImageData || typeof FileList !== "undefined" && aObject instanceof FileList || typeof FileSystemDirectoryHandle !== "undefined" && aObject instanceof FileSystemDirectoryHandle || typeof FileSystemFileHandle !== "undefined" && aObject instanceof FileSystemFileHandle || typeof FileSystemHandle !== "undefined" && aObject instanceof FileSystemHandle || typeof FileSystemWritableFileStream !== "undefined" && aObject instanceof FileSystemWritableFileStream) {
        bObject = aObject; // TODO: avoid object such as DynamicPlugin instance.
      } else if (aObject instanceof Blob) {
        let _current_pos = 0;

        async function read(length) {
          let blob;

          if (length) {
            blob = aObject.slice(_current_pos, _current_pos + length);
          } else {
            blob = aObject.slice(_current_pos);
          }

          const ret = new Uint8Array((await blob.arrayBuffer()));
          _current_pos = _current_pos + ret.byteLength;
          return ret;
        }

        function seek(pos) {
          _current_pos = pos;
        }

        bObject = {
          _rtype: "iostream",
          _rnative: "js:blob",
          type: aObject.type,
          name: aObject.name,
          size: aObject.size,
          path: aObject._path || aObject.webkitRelativePath,
          read: await this._encode(read, session_id, local_workspace),
          seek: await this._encode(seek, session_id, local_workspace)
        };
      } else if (aObject instanceof ArrayBufferView) {
        const dtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["typedArrayToDtype"])(aObject);
        bObject = {
          _rtype: "typedarray",
          _rvalue: new Uint8Array(aObject.buffer),
          _rdtype: dtype
        };
      } else if (aObject instanceof DataView) {
        bObject = {
          _rtype: "memoryview",
          _rvalue: new Uint8Array(aObject.buffer)
        };
      } else if (aObject instanceof Set) {
        bObject = {
          _rtype: "set",
          _rvalue: await this._encode(Array.from(aObject), session_id, local_workspace)
        };
      } else if (aObject instanceof Map) {
        bObject = {
          _rtype: "orderedmap",
          _rvalue: await this._encode(Array.from(aObject), session_id, local_workspace)
        };
      } else if (aObject.constructor instanceof Object || Array.isArray(aObject)) {
        bObject = isarray ? [] : {};
        const keys = Object.keys(aObject);

        for (let k of keys) {
          bObject[k] = await this._encode(aObject[k], session_id, local_workspace);
        }
      } else {
        throw `imjoy-rpc: Unsupported data type: ${aObject}, you can register a custom codec to encode/decode the object.`;
      }

    if (!bObject) {
      throw new Error("Failed to encode object");
    }

    return bObject;
  }

  async decode(aObject) {
    return await this._decode(aObject);
  }

  async _decode(aObject, remote_parent, local_parent, remote_workspace, local_workspace) {
    if (!aObject) {
      return aObject;
    }

    let bObject;

    if (aObject._rtype) {
      if (this._codecs[aObject._rtype] && this._codecs[aObject._rtype].decoder) {
        const temp = aObject._rtype;
        delete aObject._rtype;
        aObject = await this._decode(aObject, remote_parent, local_parent, remote_workspace, local_workspace);
        aObject._rtype = temp;
        bObject = await Promise.resolve(this._codecs[aObject._rtype].decoder(aObject));
      } else if (aObject._rtype === "method") {
        bObject = this._generate_remote_method(aObject, remote_parent, local_parent, remote_workspace, local_workspace);
      } else if (aObject._rtype === "ndarray") {
        /*global nj tf*/
        //create build array/tensor if used in the plugin
        if (typeof nj !== "undefined" && nj.array) {
          if (Array.isArray(aObject._rvalue)) {
            aObject._rvalue = aObject._rvalue.reduce(_appendBuffer);
          }

          bObject = nj.array(new Uint8(aObject._rvalue), aObject._rdtype).reshape(aObject._rshape);
        } else if (typeof tf !== "undefined" && tf.Tensor) {
          if (Array.isArray(aObject._rvalue)) {
            aObject._rvalue = aObject._rvalue.reduce(_appendBuffer);
          }

          const arraytype = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dtypeToTypedArray"][aObject._rdtype];
          bObject = tf.tensor(new arraytype(aObject._rvalue), aObject._rshape, aObject._rdtype);
        } else {
          //keep it as regular if transfered to the main app
          bObject = aObject;
        }
      } else if (aObject._rtype === "error") {
        bObject = new Error(aObject._rvalue);
      } else if (aObject._rtype === "typedarray") {
        const arraytype = _utils_js__WEBPACK_IMPORTED_MODULE_0__["dtypeToTypedArray"][aObject._rdtype];
        if (!arraytype) throw new Error("unsupported dtype: " + aObject._rdtype);

        const buffer = aObject._rvalue.buffer.slice(aObject._rvalue.byteOffset, aObject._rvalue.byteOffset + aObject._rvalue.byteLength);

        bObject = new arraytype(buffer);
      } else if (aObject._rtype === "memoryview") {
        bObject = aObject._rvalue.buffer.slice(aObject._rvalue.byteOffset, aObject._rvalue.byteOffset + aObject._rvalue.byteLength); // ArrayBuffer
      } else if (aObject._rtype === "iostream") {
        if (aObject._rnative === "js:blob") {
          const read = await this._generate_remote_method(aObject.read, remote_parent, local_parent, remote_workspace, local_workspace);
          const bytes = await read();
          bObject = new Blob([bytes], {
            type: aObject.type,
            name: aObject.name
          });
        } else {
          bObject = {};

          for (let k of Object.keys(aObject)) {
            if (!k.startsWith("_")) {
              bObject[k] = await this._decode(aObject[k], remote_parent, local_parent, remote_workspace, local_workspace);
            }
          }
        }

        bObject["__rpc_object__"] = aObject;
      } else if (aObject._rtype === "orderedmap") {
        bObject = new Map((await this._decode(aObject._rvalue, remote_parent, local_parent, remote_workspace, local_workspace)));
      } else if (aObject._rtype === "set") {
        bObject = new Set((await this._decode(aObject._rvalue, remote_parent, local_parent, remote_workspace, local_workspace)));
      } else {
        const temp = aObject._rtype;
        delete aObject._rtype;
        bObject = await this._decode(aObject, remote_parent, local_parent, remote_workspace, local_workspace);
        bObject._rtype = temp;
      }
    } else if (aObject.constructor === Object || Array.isArray(aObject)) {
      const isarray = Array.isArray(aObject);
      bObject = isarray ? [] : {};

      for (let k of Object.keys(aObject)) {
        if (isarray || aObject.hasOwnProperty(k)) {
          const v = aObject[k];
          bObject[k] = await this._decode(v, remote_parent, local_parent, remote_workspace, local_workspace);
        }
      }
    } else {
      bObject = aObject;
    }

    if (bObject === undefined) {
      throw new Error("Failed to decode object");
    }

    return bObject;
  }

}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: randId, dtypeToTypedArray, loadRequirementsInWindow, loadRequirementsInWebworker, loadRequirements, normalizeConfig, typedArrayToDtypeMapping, typedArrayToDtype, cacheRequirements, setupServiceWorker, assert, urlJoin, MessageEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randId", function() { return randId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dtypeToTypedArray", function() { return dtypeToTypedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRequirementsInWindow", function() { return loadRequirementsInWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRequirementsInWebworker", function() { return loadRequirementsInWebworker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRequirements", function() { return loadRequirements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeConfig", function() { return normalizeConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typedArrayToDtypeMapping", function() { return typedArrayToDtypeMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typedArrayToDtype", function() { return typedArrayToDtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheRequirements", function() { return cacheRequirements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupServiceWorker", function() { return setupServiceWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlJoin", function() { return urlJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEmitter", function() { return MessageEmitter; });
function randId() {
  return Math.random().toString(36).substr(2, 10) + new Date().getTime();
}
const dtypeToTypedArray = {
  int8: Int8Array,
  int16: Int16Array,
  int32: Int32Array,
  uint8: Uint8Array,
  uint16: Uint16Array,
  uint32: Uint32Array,
  float32: Float32Array,
  float64: Float64Array,
  array: Array
};
async function loadRequirementsInWindow(requirements) {
  function _importScript(url) {
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to
    //insert the <script> element
    return new Promise((resolve, reject) => {
      var scriptTag = document.createElement("script");
      scriptTag.src = url;
      scriptTag.type = "text/javascript";
      scriptTag.onload = resolve;

      scriptTag.onreadystatechange = function () {
        if (this.readyState === "loaded" || this.readyState === "complete") {
          resolve();
        }
      };

      scriptTag.onerror = reject;
      document.head.appendChild(scriptTag);
    });
  } // support importScripts outside web worker


  async function importScripts() {
    var args = Array.prototype.slice.call(arguments),
        len = args.length,
        i = 0;

    for (; i < len; i++) {
      await _importScript(args[i]);
    }
  }

  if (requirements && (Array.isArray(requirements) || typeof requirements === "string")) {
    try {
      var link_node;
      requirements = typeof requirements === "string" ? [requirements] : requirements;

      if (Array.isArray(requirements)) {
        for (var i = 0; i < requirements.length; i++) {
          if (requirements[i].toLowerCase().endsWith(".css") || requirements[i].startsWith("css:")) {
            if (requirements[i].startsWith("css:")) {
              requirements[i] = requirements[i].slice(4);
            }

            link_node = document.createElement("link");
            link_node.rel = "stylesheet";
            link_node.href = requirements[i];
            document.head.appendChild(link_node);
          } else if (requirements[i].toLowerCase().endsWith(".mjs") || requirements[i].startsWith("mjs:")) {
            // import esmodule
            if (requirements[i].startsWith("mjs:")) {
              requirements[i] = requirements[i].slice(4);
            }

            await import(
            /* webpackIgnore: true */
            requirements[i]);
          } else if (requirements[i].toLowerCase().endsWith(".js") || requirements[i].startsWith("js:")) {
            if (requirements[i].startsWith("js:")) {
              requirements[i] = requirements[i].slice(3);
            }

            await importScripts(requirements[i]);
          } else if (requirements[i].startsWith("http")) {
            await importScripts(requirements[i]);
          } else if (requirements[i].startsWith("cache:")) {//ignore cache
          } else {
            console.log("Unprocessed requirements url: " + requirements[i]);
          }
        }
      } else {
        throw "unsupported requirements definition";
      }
    } catch (e) {
      throw "failed to import required scripts: " + requirements.toString();
    }
  }
}
async function loadRequirementsInWebworker(requirements) {
  if (requirements && (Array.isArray(requirements) || typeof requirements === "string")) {
    try {
      if (!Array.isArray(requirements)) {
        requirements = [requirements];
      }

      for (var i = 0; i < requirements.length; i++) {
        if (requirements[i].toLowerCase().endsWith(".css") || requirements[i].startsWith("css:")) {
          throw "unable to import css in a webworker";
        } else if (requirements[i].toLowerCase().endsWith(".js") || requirements[i].startsWith("js:")) {
          if (requirements[i].startsWith("js:")) {
            requirements[i] = requirements[i].slice(3);
          }

          importScripts(requirements[i]);
        } else if (requirements[i].startsWith("http")) {
          importScripts(requirements[i]);
        } else if (requirements[i].startsWith("cache:")) {//ignore cache
        } else {
          console.log("Unprocessed requirements url: " + requirements[i]);
        }
      }
    } catch (e) {
      throw "failed to import required scripts: " + requirements.toString();
    }
  }
}
function loadRequirements(requirements) {
  if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) {
    return loadRequirementsInWebworker(requirements);
  } else {
    return loadRequirementsInWindow(requirements);
  }
}
function normalizeConfig(config) {
  config.version = config.version || "0.1.0";
  config.description = config.description || `[TODO: add description for ${config.name} ]`;
  config.type = config.type || "rpc-window";
  config.id = config.id || randId();
  config.target_origin = config.target_origin || "*";
  config.allow_execution = config.allow_execution || false; // remove functions

  config = Object.keys(config).reduce((p, c) => {
    if (typeof config[c] !== "function") p[c] = config[c];
    return p;
  }, {});
  return config;
}
const typedArrayToDtypeMapping = {
  Int8Array: "int8",
  Int16Array: "int16",
  Int32Array: "int32",
  Uint8Array: "uint8",
  Uint16Array: "uint16",
  Uint32Array: "uint32",
  Float32Array: "float32",
  Float64Array: "float64",
  Array: "array"
};
const typedArrayToDtypeKeys = [];

for (const arrType of Object.keys(typedArrayToDtypeMapping)) {
  typedArrayToDtypeKeys.push(eval(arrType));
}

function typedArrayToDtype(obj) {
  let dtype = typedArrayToDtypeMapping[obj.constructor.name];

  if (!dtype) {
    const pt = Object.getPrototypeOf(obj);

    for (const arrType of typedArrayToDtypeKeys) {
      if (pt instanceof arrType) {
        dtype = typedArrayToDtypeMapping[arrType.name];
        break;
      }
    }
  }

  return dtype;
}

function cacheUrlInServiceWorker(url) {
  return new Promise(function (resolve, reject) {
    const message = {
      command: "add",
      url: url
    };

    if (!navigator.serviceWorker || !navigator.serviceWorker.register) {
      reject("Service worker is not supported.");
      return;
    }

    const messageChannel = new MessageChannel();

    messageChannel.port1.onmessage = function (event) {
      if (event.data && event.data.error) {
        reject(event.data.error);
      } else {
        resolve(event.data && event.data.result);
      }
    };

    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
    } else {
      reject("Service worker controller is not available");
    }
  });
}

async function cacheRequirements(requirements) {
  requirements = requirements || [];

  if (!Array.isArray(requirements)) {
    requirements = [requirements];
  }

  for (let req of requirements) {
    //remove prefix
    if (req.startsWith("js:")) req = req.slice(3);
    if (req.startsWith("css:")) req = req.slice(4);
    if (req.startsWith("cache:")) req = req.slice(6);
    if (!req.startsWith("http")) continue;
    await cacheUrlInServiceWorker(req).catch(e => {
      console.error(e);
    });
  }
}
function setupServiceWorker(baseUrl, targetOrigin, cacheCallback) {
  // register service worker for offline access
  if ("serviceWorker" in navigator) {
    baseUrl = baseUrl || "/";
    navigator.serviceWorker.register(baseUrl + "plugin-service-worker.js").then(function (registration) {
      // Registration was successful
      console.log("ServiceWorker registration successful with scope: ", registration.scope);
    }, function (err) {
      // registration failed :(
      console.log("ServiceWorker registration failed: ", err);
    });
    targetOrigin = targetOrigin || "*";
    cacheCallback = cacheCallback || cacheRequirements;

    if (cacheCallback && typeof cacheCallback !== "function") {
      throw new Error("config.cache_requirements must be a function");
    }

    window.addEventListener("message", function (e) {
      if (targetOrigin === "*" || e.origin === targetOrigin) {
        const m = e.data;

        if (m.type === "cacheRequirements") {
          cacheCallback(m.requirements);
        }
      }
    });
  }
}
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
} //#Source https://bit.ly/2neWfJ2

function urlJoin(...args) {
  return args.join("/").replace(/[\/]+/g, "/").replace(/^(.+):\//, "$1://").replace(/^file:/, "file:/").replace(/\/(\?|&|#[^!])/g, "$1").replace(/\?/g, "&").replace("&", "?");
}
class MessageEmitter {
  constructor(debug) {
    this._event_handlers = {};
    this._once_handlers = {};
    this._debug = debug;
  }

  emit() {
    throw new Error("emit is not implemented");
  }

  on(event, handler) {
    if (!this._event_handlers[event]) {
      this._event_handlers[event] = [];
    }

    this._event_handlers[event].push(handler);
  }

  once(event, handler) {
    handler.___event_run_once = true;
    this.on(event, handler);
  }

  off(event, handler) {
    if (!event && !handler) {
      // remove all events handlers
      this._event_handlers = {};
    } else if (event && !handler) {
      // remove all hanlders for the event
      if (this._event_handlers[event]) this._event_handlers[event] = [];
    } else {
      // remove a specific handler
      if (this._event_handlers[event]) {
        const idx = this._event_handlers[event].indexOf(handler);

        if (idx >= 0) {
          this._event_handlers[event].splice(idx, 1);
        }
      }
    }
  }

  _fire(event, data) {
    if (this._event_handlers[event]) {
      var i = this._event_handlers[event].length;

      while (i--) {
        const handler = this._event_handlers[event][i];

        try {
          handler(data);
        } catch (e) {
          console.error(e);
        } finally {
          if (handler.___event_run_once) {
            this._event_handlers[event].splice(i, 1);
          }
        }
      }
    } else {
      if (this._debug) {
        console.warn("unhandled event", event, data);
      }
    }
  }

}

/***/ }),

/***/ "./src/websocket-client.js":
/*!*********************************!*\
  !*** ./src/websocket-client.js ***!
  \*********************************/
/*! exports provided: RPC, API_VERSION, VERSION, loadRequirements, connectToServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectToServer", function() { return connectToServer; });
/* harmony import */ var _rpc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rpc.js */ "./src/rpc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RPC", function() { return _rpc_js__WEBPACK_IMPORTED_MODULE_0__["RPC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API_VERSION", function() { return _rpc_js__WEBPACK_IMPORTED_MODULE_0__["API_VERSION"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadRequirements", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_1__["loadRequirements"]; });

/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _package_json__WEBPACK_IMPORTED_MODULE_2__["version"]; });







class WebsocketRPCConnection {
  constructor(server_url, client_id, workspace, token) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(server_url && client_id, "server_url and client_id are required");
    server_url = server_url + "?client_id=" + client_id;

    if (workspace) {
      server_url += "&workspace=" + workspace;
    }

    if (token) {
      server_url += "&token=" + token;
    }

    this._websocket = null;
    this._handle_message = null;
    this._server_url = server_url;
  }

  on_message(handler) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(handler, "handler is required");
    this._handle_message = handler;
  }

  async open() {
    this._websocket = new WebSocket(this._server_url);
    this._websocket.binaryType = "arraybuffer";

    this._websocket.onmessage = event => {
      const data = event.data;

      this._handle_message(data);
    };

    const self = this;

    this._websocket.onclose = function () {
      console.log("websocket closed");
      self._websocket = null;
    };

    return await new Promise(resolve => {
      this._websocket.addEventListener("open", resolve);
    });
  }

  async emit_message(data) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(this._handle_message, "No handler for message");

    if (!this._websocket) {
      await this.open();
    }

    try {
      if (data.buffer) data = data.buffer;

      this._websocket.send(data);
    } catch (exp) {
      //   data = msgpack_unpackb(data);
      console.error(`Failed to send data, error: ${exp}`);
      throw exp;
    }
  }

  async disconnect(reason) {
    const ws = this._websocket;
    this._websocket = null;

    if (ws) {
      ws.close(1000, reason);
    }

    console.info(`Websocket connection disconnected (${reason})`);
  }

}

async function connectToServer(config) {
  let clientId = config.client_id;

  if (!clientId) {
    clientId = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["randId"])();
  }

  let connection = new WebsocketRPCConnection(config.server_url, clientId, config.workspace, config.token);
  await connection.open();
  const rpc = new _rpc_js__WEBPACK_IMPORTED_MODULE_0__["RPC"](connection, {
    client_id: clientId,
    root_target_id: "workspace-manager",
    default_context: {
      connection_type: "websocket"
    },
    name: config.name,
    method_timeout: config.method_timeout
  });
  const wm = await rpc.get_remote_service("workspace-manager:default");
  wm.rpc = rpc;

  function _export(api) {
    return rpc.register_service(api, true);
  }

  async function getPlugin(query) {
    if (typeof query === "string") {
      query = {
        name: query
      };
    }

    return await wm.get_service(query);
  }

  async function disconnect() {
    await rpc.disconnect();
    await connection.disconnect();
  }

  wm.export = _export;
  wm.getPlugin = getPlugin;
  wm.listPlugins = wm.listServices;
  wm.disconnect = disconnect;
  wm.registerCodec = rpc.register_codec.bind(rpc);
  return wm;
}

/***/ })

/******/ });
});
//# sourceMappingURL=imjoy-websocket-client.js.map