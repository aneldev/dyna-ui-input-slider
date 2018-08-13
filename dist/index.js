(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("dyna-ui-styles"), require("dyna-class-name"), require("rc-slider"), require("dyna-loops"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-ui-input-slider", ["react", "dyna-ui-styles", "dyna-class-name", "rc-slider", "dyna-loops"], factory);
	else if(typeof exports === 'object')
		exports["dyna-ui-input-slider"] = factory(require("react"), require("dyna-ui-styles"), require("dyna-class-name"), require("rc-slider"), require("dyna-loops"));
	else
		root["dyna-ui-input-slider"] = factory(root["react"], root["dyna-ui-styles"], root["dyna-class-name"], root["rc-slider"], root["dyna-loops"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_11__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(16);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ESize;
(function (ESize) {
    ESize["PX12"] = "PX12";
    ESize["PX24"] = "PX24";
    ESize["PX32"] = "PX32";
    ESize["PX48"] = "PX48";
})(ESize = exports.ESize || (exports.ESize = {}));
var EMin;
(function (EMin) {
    EMin["MIN"] = "MIN";
    EMin["ZERO"] = "ZERO";
})(EMin = exports.EMin || (exports.EMin = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var rc_slider_1 = __webpack_require__(9);
var dyna_ui_styles_1 = __webpack_require__(4);
var interfaces_1 = __webpack_require__(2);
var DynaInputSlider = /** @class */ (function (_super) {
    __extends(DynaInputSlider, _super);
    function DynaInputSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DynaInputSlider.prototype.handleChange = function (value) {
        var _a = this.props, name = _a.name, onChange = _a.onChange;
        onChange(name, value);
    };
    DynaInputSlider.prototype.render = function () {
        var _a = this.props, userClassName = _a.className, disabled = _a.disabled, topBackground = _a.topBackground, bottomBackground = _a.bottomBackground, color = _a.color, size = _a.size, min = _a.min, max = _a.max, step = _a.step, value = _a.value;
        var className = [
            "dyna-slider",
            userClassName,
            "dyna-slider--single-value-mode",
            color ? "dyna-slider--color-" + color : '',
            "dyna-slider--size-" + size,
        ].join(' ').trim();
        return (React.createElement("div", { className: className },
            React.createElement("div", { className: "dyna-slider__top-background" }, topBackground),
            React.createElement("div", { className: "dyna-slider__bottom-background" }, bottomBackground),
            React.createElement(rc_slider_1.default, { disabled: disabled, min: min, max: max, step: step, value: value, onChange: this.handleChange.bind(this) })));
    };
    DynaInputSlider.defaultProps = {
        className: '',
        name: null,
        topBackground: null,
        bottomBackground: null,
        color: dyna_ui_styles_1.EColor.WHITE_BLACK,
        size: interfaces_1.ESize.PX24,
        disabled: false,
        min: 0,
        max: 100,
        step: 1,
        value: 50,
        onChange: function () { return undefined; },
    };
    return DynaInputSlider;
}(React.Component));
exports.DynaInputSlider = DynaInputSlider;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var dyna_class_name_1 = __webpack_require__(5);
var dyna_loops_1 = __webpack_require__(11);
__webpack_require__(22);
var StatsBar = /** @class */ (function (_super) {
    __extends(StatsBar, _super);
    function StatsBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.className = dyna_class_name_1.dynaClassName('dyna-slider-stats-bar');
        return _this;
    }
    Object.defineProperty(StatsBar.prototype, "percentageTicks", {
        get: function () {
            var ticks = this.props.ticks;
            var output = ticks.concat();
            var max = output.reduce(function (acc, value) {
                if (acc === null || acc < value)
                    acc = value;
                return acc;
            }, null);
            for (var i = 0; i < output.length; i++)
                if (!output[i])
                    output[i] = 0;
            output = output.map(function (v) { return 100 * v / max; });
            return output;
        },
        enumerable: true,
        configurable: true
    });
    StatsBar.prototype.render = function () {
        var _this = this;
        var userClassName = this.props.className;
        var className = this.className("", userClassName && "/" + userClassName);
        return (React.createElement("div", { className: className }, this.percentageTicks.map(function (value, index) { return (React.createElement("div", { key: index, className: _this.className("__item"), style: { minHeight: dyna_loops_1.round(value, 1).toString() + "%" } })); })));
    };
    StatsBar.defaultProps = {
        className: undefined,
        ticks: [],
    };
    return StatsBar;
}(React.Component));
exports.StatsBar = StatsBar;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = __webpack_require__(2);
var StatsHelper = /** @class */ (function () {
    function StatsHelper() {
        var _this = this;
        this.inputData = null;
        this.outputMin = null;
        this.outputMax = null;
        this.outputIntegerTicks = null;
        this.outputFloatGroupTicks = []; // per ticksCount
        this.getMinValue = function (minType) {
            if (minType === interfaces_1.EMin.ZERO)
                return 0;
            if (_this.outputMin !== null)
                return _this.outputMin;
            _this.outputMin = _this.inputData.reduce(function (acc, value) {
                if (acc === null || value < acc)
                    acc = value;
                return acc;
            }, null);
            return _this.outputMin;
        };
        this.getIntegerTicks = function (minType) {
            if (_this.outputIntegerTicks !== null)
                return _this.outputIntegerTicks;
            var ticks = _this.inputData
                .filter(function (hour) { return hour >= _this.getMinValue(minType) && hour <= _this.getMaxValue(); })
                .reduce(function (acc, hour) {
                if (!acc[hour])
                    acc[hour] = 0;
                acc[hour]++;
                return acc;
            }, []);
            for (var i = _this.getMinValue(minType); i <= _this.getMaxValue(); i++) {
                if (!ticks[i])
                    ticks[i] = 0;
            }
            _this.outputIntegerTicks = ticks;
            return _this.outputIntegerTicks;
        };
    }
    StatsHelper.prototype.setData = function (data) {
        if (!this.isInputSame(data)) {
            this.inputData = data;
            this.outputMin = null;
            this.outputMax = null;
            this.outputIntegerTicks = null;
            this.outputFloatGroupTicks = [];
        }
    };
    StatsHelper.prototype.isInputSame = function (inputData) {
        // not the best comparison to find this, lodash is a nice solution, but this is fast
        return (inputData === this.inputData &&
            (!inputData ||
                (inputData.length === this.inputData.length)));
    };
    Object.defineProperty(StatsHelper.prototype, "hasValues", {
        get: function () {
            return this.inputData && this.inputData.length > 2;
        },
        enumerable: true,
        configurable: true
    });
    StatsHelper.prototype.getMaxValue = function () {
        if (this.outputMax !== null)
            return this.outputMax;
        this.outputMax = this.inputData.reduce(function (acc, value) {
            if (acc === null || value > acc)
                acc = value;
            return acc;
        }, null);
        return this.outputMax;
    };
    StatsHelper.prototype.getFloatGroupTicks = function (ticksCount) {
        var _this = this;
        if (this.outputFloatGroupTicks[ticksCount])
            return this.outputFloatGroupTicks[ticksCount];
        var min = null;
        var max = null;
        this.inputData.forEach(function (value) {
            if (min === null || min > value)
                min = value;
            if (max === null || max < value)
                max = value;
        });
        var step = (max - min) / ticksCount;
        var tickLimits = Array(ticksCount - 1)
            .fill(null)
            .map(function (v, index) { return min + (step * index); });
        tickLimits.push(max);
        var output = tickLimits
            .map(function (tickLimit, index, array) {
            var from = index === 0 ? 0 : array[index - 1];
            var to = tickLimit;
            return _this.inputData.filter(function (value) { return value > from && value < to + 1; }).length;
        });
        this.outputFloatGroupTicks[ticksCount] = output;
        return this.outputFloatGroupTicks[ticksCount];
    };
    return StatsHelper;
}());
exports.StatsHelper = StatsHelper;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var rc_slider_1 = __webpack_require__(9);
var dyna_ui_styles_1 = __webpack_require__(4);
var interfaces_1 = __webpack_require__(2);
var DynaInputRangeSlider = /** @class */ (function (_super) {
    __extends(DynaInputRangeSlider, _super);
    function DynaInputRangeSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DynaInputRangeSlider.prototype.handleChange = function (value) {
        var _a = this.props, name = _a.name, onChange = _a.onChange;
        onChange(name, value);
    };
    DynaInputRangeSlider.prototype.render = function () {
        var _a = this.props, userClassName = _a.className, disabled = _a.disabled, topBackground = _a.topBackground, bottomBackground = _a.bottomBackground, color = _a.color, size = _a.size, min = _a.min, max = _a.max, step = _a.step, pushable = _a.pushable, value = _a.value;
        var className = [
            "dyna-slider",
            userClassName,
            color ? "dyna-slider--color-" + color : '',
            "dyna-slider--size-" + size,
        ].join(' ').trim();
        return (React.createElement("div", { className: className },
            React.createElement("div", { className: "dyna-slider__top-background" }, topBackground),
            React.createElement("div", { className: "dyna-slider__bottom-background" }, bottomBackground),
            React.createElement(rc_slider_1.Range, { disabled: disabled, min: min, max: max, step: step, pushable: pushable, value: value, count: value.length, onChange: this.handleChange.bind(this) })));
    };
    DynaInputRangeSlider.defaultProps = {
        className: '',
        name: null,
        topBackground: null,
        bottomBackground: null,
        disabled: false,
        color: dyna_ui_styles_1.EColor.WHITE_BLACK,
        size: interfaces_1.ESize.PX24,
        min: 0,
        max: 100,
        step: 1,
        pushable: false,
        value: [],
        onChange: function () { return undefined; },
    };
    return DynaInputRangeSlider;
}(React.Component));
exports.DynaInputRangeSlider = DynaInputRangeSlider;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(14);
__webpack_require__(17);
__webpack_require__(19);
var interfaces_1 = __webpack_require__(2);
exports.ESize = interfaces_1.ESize;
exports.EMin = interfaces_1.EMin;
var dyna_ui_styles_1 = __webpack_require__(4);
exports.EColor = dyna_ui_styles_1.EColor;
var DynaInputSlider_1 = __webpack_require__(6);
exports.DynaInputSlider = DynaInputSlider_1.DynaInputSlider;
var DynaInputRangeSlider_1 = __webpack_require__(10);
exports.DynaInputRangeSlider = DynaInputRangeSlider_1.DynaInputRangeSlider;
var DynaInput0024Slider_1 = __webpack_require__(21);
exports.DynaInput0024Slider = DynaInput0024Slider_1.DynaInput0024Slider;
var DynaInputDurationSlider_1 = __webpack_require__(29);
exports.DynaInputDurationSlider = DynaInputDurationSlider_1.DynaInputDurationSlider;
var DynaInputPriceSlider_1 = __webpack_require__(32);
exports.DynaInputPriceSlider = DynaInputPriceSlider_1.DynaInputPriceSlider;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(15);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".rc-slider {\n  position: relative;\n  height: 14px;\n  padding: 5px 0;\n  width: 100%;\n  border-radius: 6px;\n  -ms-touch-action: none;\n      touch-action: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-rail {\n  position: absolute;\n  width: 100%;\n  background-color: #e9e9e9;\n  height: 4px;\n  border-radius: 6px;\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #abe2fb;\n}\n.rc-slider-handle {\n  position: absolute;\n  margin-left: -7px;\n  margin-top: -5px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  cursor: -webkit-grab;\n  cursor: grab;\n  border-radius: 50%;\n  border: solid 2px #96dbfa;\n  background-color: #fff;\n  -ms-touch-action: pan-x;\n      touch-action: pan-x;\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.rc-slider-handle:focus {\n  border-color: #57c5f7;\n  box-shadow: 0 0 0 5px #96dbfa;\n  outline: none;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 18px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n}\n.rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  box-shadow: none;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important;\n}\n.rc-slider-vertical {\n  width: 14px;\n  height: 100%;\n  padding: 0 5px;\n}\n.rc-slider-vertical .rc-slider-rail {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-track {\n  left: 5px;\n  bottom: 0;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-handle {\n  margin-left: -5px;\n  margin-bottom: -7px;\n  -ms-touch-action: pan-y;\n      touch-action: pan-y;\n}\n.rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 18px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-step {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-dot {\n  left: 2px;\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:first-child {\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:last-child {\n  margin-bottom: -4px;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  animation-duration: .3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-duration: .3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  animation-name: rcSliderTooltipZoomDownIn;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  animation-name: rcSliderTooltipZoomDownOut;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  transform: scale(0, 0);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n  100% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n}\n.rc-slider-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip-hidden {\n  display: none;\n}\n.rc-slider-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-slider-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-slider-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n", ""]);

// exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./layout.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./layout.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".dyna-slider {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  position: relative;\n}\n.dyna-slider__top-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.dyna-slider__bottom-background {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.dyna-slider--size-PX12 .dyna-slider__top-background,\n.dyna-slider--size-PX12 .dyna-slider__bottom-background {\n  height: calc(50% - 1px);\n}\n.dyna-slider--size-PX24 .dyna-slider__top-background,\n.dyna-slider--size-PX24 .dyna-slider__bottom-background {\n  height: calc(50% - 2px);\n}\n.dyna-slider--size-PX32 .dyna-slider__top-background {\n  height: calc(50% - 2px);\n}\n.dyna-slider--size-PX32 .dyna-slider__bottom-background {\n  height: calc(50% - 5px);\n}\n.dyna-slider--size-PX48 .dyna-slider__top-background {\n  height: calc(50% - 2px);\n}\n.dyna-slider--size-PX48 .dyna-slider__bottom-background {\n  height: calc(50% - 6px);\n}\n.dyna-slider .rc-slider-track {\n  border-radius: 6px 0 0 6px;\n}\n.dyna-slider .rc-slider-track::after {\n  content: \"\";\n  width: 2px;\n  height: 100%;\n  background-color: inherit;\n  position: absolute;\n  left: 100%;\n}\n.dyna-slider--size-PX12 {\n  height: 12px;\n  padding: 0 6px;\n}\n.dyna-slider--size-PX12 .rc-slider-rail {\n  left: -6px;\n  width: calc(100% + 12px);\n}\n.dyna-slider--size-PX12.dyna-slider--single-value-mode .rc-slider-track {\n  left: -6px !important;\n}\n.dyna-slider--size-PX12 .rc-slider-handle {\n  width: 12px;\n  height: 12px;\n  margin-top: -4px;\n}\n.dyna-slider--size-PX24 {\n  height: 24px;\n  padding: 0 12px;\n}\n.dyna-slider--size-PX24 .rc-slider-rail {\n  left: -12px;\n  width: calc(100% + 24px);\n}\n.dyna-slider--size-PX24.dyna-slider--single-value-mode .rc-slider-track {\n  left: -12px !important;\n}\n.dyna-slider--size-PX24 .rc-slider-handle {\n  width: 24px;\n  height: 24px;\n  margin-left: -12px;\n  margin-top: -10px;\n}\n.dyna-slider--size-PX32 {\n  height: 32px;\n  padding: 0 16px;\n}\n.dyna-slider--size-PX32 .rc-slider-rail {\n  width: calc(100% + 32px);\n  left: -16px;\n  height: 8px;\n}\n.dyna-slider--size-PX32 .rc-slider-track {\n  height: 8px;\n}\n.dyna-slider--size-PX32.dyna-slider--single-value-mode .rc-slider-track {\n  left: -16px !important;\n}\n.dyna-slider--size-PX32 .rc-slider-handle {\n  width: 32px;\n  height: 32px;\n  margin-left: -16px;\n  margin-top: -14px;\n}\n.dyna-slider--size-PX48 {\n  height: 48px;\n  padding: 0 24px;\n}\n.dyna-slider--size-PX48 .rc-slider-rail {\n  width: calc(100% + 48px);\n  left: -24px;\n  height: 8px;\n}\n.dyna-slider--size-PX48 .rc-slider-track {\n  height: 8px;\n}\n.dyna-slider--size-PX48.dyna-slider--single-value-mode .rc-slider-track {\n  left: -24px !important;\n}\n.dyna-slider--size-PX48 .rc-slider-handle {\n  width: 48px;\n  height: 48px;\n  margin-left: -24px;\n  margin-top: -22px;\n}\n", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./colors.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./colors.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".dyna-slider--color- .rc-slider-handle {\n  border-color: #0000cc;\n  background-color: blue;\n  -webkit-transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n.dyna-slider--color- .rc-slider-handle:active {\n  border-color: #000066 !important;\n  background-color: #0000b3 !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.dyna-slider--color- .rc-slider-handle:hover {\n  border-color: #000099;\n  background-color: #0000cc;\n}\n.dyna-slider--color- .rc-slider-rail {\n  background-color: #ffff33;\n}\n.dyna-slider--color- .rc-slider-track {\n  background-color: blue;\n}\n.dyna-slider--color-BLACK_WHITE .rc-slider-handle {\n  border-color: #b5babc;\n  background-color: #D0D3D4;\n  -webkit-transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n.dyna-slider--color-BLACK_WHITE .rc-slider-handle:active {\n  border-color: #80888b !important;\n  background-color: #a8aeaf !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.dyna-slider--color-BLACK_WHITE .rc-slider-handle:hover {\n  border-color: #9ba1a3;\n  background-color: #b5babc;\n}\n.dyna-slider--color-BLACK_WHITE .rc-slider-rail {\n  background-color: #213142;\n}\n.dyna-slider--color-BLACK_WHITE .rc-slider-track {\n  background-color: #D0D3D4;\n}\n.dyna-slider--color-BLACK_ORANGE .rc-slider-handle {\n  border-color: #cc5400;\n  background-color: #FF6900;\n  -webkit-transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n.dyna-slider--color-BLACK_ORANGE .rc-slider-handle:active {\n  border-color: #662a00 !important;\n  background-color: #b34900 !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.dyna-slider--color-BLACK_ORANGE .rc-slider-handle:hover {\n  border-color: #993f00;\n  background-color: #cc5400;\n}\n.dyna-slider--color-BLACK_ORANGE .rc-slider-rail {\n  background-color: #213142;\n}\n.dyna-slider--color-BLACK_ORANGE .rc-slider-track {\n  background-color: #FF6900;\n}\n.dyna-slider--color-TRANSPARENT_ORANGE .rc-slider-handle {\n  border-color: #cc5400;\n  background-color: #FF6900;\n  -webkit-transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n.dyna-slider--color-TRANSPARENT_ORANGE .rc-slider-handle:active {\n  border-color: #662a00 !important;\n  background-color: #b34900 !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.dyna-slider--color-TRANSPARENT_ORANGE .rc-slider-handle:hover {\n  border-color: #993f00;\n  background-color: #cc5400;\n}\n.dyna-slider--color-TRANSPARENT_ORANGE .rc-slider-rail {\n  background-color: #ffffff;\n}\n.dyna-slider--color-TRANSPARENT_ORANGE .rc-slider-track {\n  background-color: #FF6900;\n}\n.dyna-slider--color-TRANSPARENT_WHITE .rc-slider-handle {\n  border-color: #b5babc;\n  background-color: #D0D3D4;\n  -webkit-transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n.dyna-slider--color-TRANSPARENT_WHITE .rc-slider-handle:active {\n  border-color: #80888b !important;\n  background-color: #a8aeaf !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.dyna-slider--color-TRANSPARENT_WHITE .rc-slider-handle:hover {\n  border-color: #9ba1a3;\n  background-color: #b5babc;\n}\n.dyna-slider--color-TRANSPARENT_WHITE .rc-slider-rail {\n  background-color: #49423d;\n}\n.dyna-slider--color-TRANSPARENT_WHITE .rc-slider-track {\n  background-color: #D0D3D4;\n}\n.dyna-slider--color-ORANGE_WHITE .rc-slider-handle {\n  border-color: #c0c0bc;\n  background-color: #D9D9D6;\n  -webkit-transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n.dyna-slider--color-ORANGE_WHITE .rc-slider-handle:active {\n  border-color: #8f8f87 !important;\n  background-color: #b4b4ae !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.dyna-slider--color-ORANGE_WHITE .rc-slider-handle:hover {\n  border-color: #a8a8a1;\n  background-color: #c0c0bc;\n}\n.dyna-slider--color-ORANGE_WHITE .rc-slider-rail {\n  background-color: #ffa84f;\n}\n.dyna-slider--color-ORANGE_WHITE .rc-slider-track {\n  background-color: #D9D9D6;\n}\n.dyna-slider--color-RED_WHITE .rc-slider-handle {\n  border-color: #b5babc;\n  background-color: #D0D3D4;\n  -webkit-transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n.dyna-slider--color-RED_WHITE .rc-slider-handle:active {\n  border-color: #80888b !important;\n  background-color: #a8aeaf !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.dyna-slider--color-RED_WHITE .rc-slider-handle:hover {\n  border-color: #9ba1a3;\n  background-color: #b5babc;\n}\n.dyna-slider--color-RED_WHITE .rc-slider-rail {\n  background-color: #df4c55;\n}\n.dyna-slider--color-RED_WHITE .rc-slider-track {\n  background-color: #D0D3D4;\n}\n.dyna-slider--color-GREY_WHITE .rc-slider-handle {\n  border-color: #b5babc;\n  background-color: #D0D3D4;\n  -webkit-transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n.dyna-slider--color-GREY_WHITE .rc-slider-handle:active {\n  border-color: #80888b !important;\n  background-color: #a8aeaf !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.dyna-slider--color-GREY_WHITE .rc-slider-handle:hover {\n  border-color: #9ba1a3;\n  background-color: #b5babc;\n}\n.dyna-slider--color-GREY_WHITE .rc-slider-rail {\n  background-color: #808174;\n}\n.dyna-slider--color-GREY_WHITE .rc-slider-track {\n  background-color: #D0D3D4;\n}\n.dyna-slider--color-WHITE_BLACK .rc-slider-handle {\n  border-color: #090909;\n  background-color: #222223;\n  -webkit-transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n.dyna-slider--color-WHITE_BLACK .rc-slider-handle:active {\n  border-color: #000000 !important;\n  background-color: #000000 !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.dyna-slider--color-WHITE_BLACK .rc-slider-handle:hover {\n  border-color: #000000;\n  background-color: #090909;\n}\n.dyna-slider--color-WHITE_BLACK .rc-slider-rail {\n  background-color: #dcdfe0;\n}\n.dyna-slider--color-WHITE_BLACK .rc-slider-track {\n  background-color: #222223;\n}\n.dyna-slider--color-WHITE_RED .rc-slider-handle {\n  border-color: #ad2116;\n  background-color: #DA291C;\n  -webkit-transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n.dyna-slider--color-WHITE_RED .rc-slider-handle:active {\n  border-color: #520f0b !important;\n  background-color: #961c13 !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.dyna-slider--color-WHITE_RED .rc-slider-handle:hover {\n  border-color: #801810;\n  background-color: #ad2116;\n}\n.dyna-slider--color-WHITE_RED .rc-slider-rail {\n  background-color: #dcdfe0;\n}\n.dyna-slider--color-WHITE_RED .rc-slider-track {\n  background-color: #DA291C;\n}\n.dyna-slider--color-WHITE_ORANGE .rc-slider-handle {\n  border-color: #cc5400;\n  background-color: #FF6900;\n  -webkit-transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n.dyna-slider--color-WHITE_ORANGE .rc-slider-handle:active {\n  border-color: #662a00 !important;\n  background-color: #b34900 !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.dyna-slider--color-WHITE_ORANGE .rc-slider-handle:hover {\n  border-color: #993f00;\n  background-color: #cc5400;\n}\n.dyna-slider--color-WHITE_ORANGE .rc-slider-rail {\n  background-color: #e9e9e8;\n}\n.dyna-slider--color-WHITE_ORANGE .rc-slider-track {\n  background-color: #FF6900;\n}\n", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var dyna_class_name_1 = __webpack_require__(5);
var dyna_ui_styles_1 = __webpack_require__(4);
var interfaces_1 = __webpack_require__(2);
var DynaInputRangeSlider_1 = __webpack_require__(10);
var StatsBar_1 = __webpack_require__(7);
var Daylight_1 = __webpack_require__(24);
var StatsHelper_1 = __webpack_require__(8);
__webpack_require__(27);
var DynaInput0024Slider = /** @class */ (function (_super) {
    __extends(DynaInput0024Slider, _super);
    function DynaInput0024Slider(props) {
        var _this = _super.call(this, props) || this;
        _this.className = dyna_class_name_1.dynaClassName("dyna-input-0024-slider");
        _this.statsHelper = new StatsHelper_1.StatsHelper();
        _this.statsHelper.setData(props.hours);
        return _this;
    }
    DynaInput0024Slider.prototype.componentWillReceiveProps = function (nextProps) {
        this.statsHelper.setData(nextProps.hours);
    };
    DynaInput0024Slider.prototype.getStatTicks = function () {
        return this.statsHelper.getIntegerTicks(interfaces_1.EMin.ZERO);
    };
    DynaInput0024Slider.prototype.handleChange = function (name, values) {
        var onChange = this.props.onChange;
        onChange(name, { from: values[0], to: values[1] });
    };
    DynaInput0024Slider.prototype.renderLabel = function () {
        var _a = this.props, label = _a.label, _b = _a.value, from = _b.from, to = _b.to;
        return (React.createElement("div", { className: this.className("__label") },
            React.createElement("div", { className: this.className("__label__content /dyna-slider-label") }, label),
            React.createElement("div", { className: this.className("__label__value /dyna-slider-value") }, from + ":00 - " + to + ":00")));
    };
    DynaInput0024Slider.prototype.renderTopBackground = function () {
        if (!this.statsHelper.hasValues)
            return null;
        return React.createElement(StatsBar_1.StatsBar, { ticks: this.getStatTicks() });
    };
    DynaInput0024Slider.prototype.renderBottomBackground = function () {
        return React.createElement(Daylight_1.Daylight, null);
    };
    DynaInput0024Slider.prototype.render = function () {
        var _a = this.props, userClassName = _a.className, name = _a.name, color = _a.color, size = _a.size, _b = _a.value, from = _b.from, to = _b.to;
        var className = this.className("", userClassName && '/' + userClassName, "--size-" + size);
        return (React.createElement("div", { className: className },
            this.renderLabel(),
            React.createElement(DynaInputRangeSlider_1.DynaInputRangeSlider, { name: name, color: color, size: size, topBackground: this.renderTopBackground(), bottomBackground: this.renderBottomBackground(), min: 0, max: 24, pushable: true, value: [from, to], onChange: this.handleChange.bind(this) })));
    };
    DynaInput0024Slider.defaultProps = {
        className: undefined,
        name: null,
        label: null,
        color: dyna_ui_styles_1.EColor.WHITE_BLACK,
        size: interfaces_1.ESize.PX24,
        value: { from: 0, to: 24 },
        onChange: function (name, value) { return undefined; },
    };
    return DynaInput0024Slider;
}(React.Component));
exports.DynaInput0024Slider = DynaInput0024Slider;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--4-2!../../node_modules/less-loader/dist/cjs.js!./StatsBar.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--4-2!../../node_modules/less-loader/dist/cjs.js!./StatsBar.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".dyna-slider-stats-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -webkit-transition: height 200ms ease-in-out;\n  transition: height 200ms ease-in-out;\n}\n.dyna-slider-stats-bar__item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  background-color: gray;\n  margin: 0 0.5px;\n}\n", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
__webpack_require__(25);
exports.Daylight = function (props) { return (React.createElement("div", { className: "dyna-slider-daylight" },
    React.createElement("div", { className: "dyna-slider-daylight__min" }, "00:00"),
    React.createElement("div", { className: "dyna-slider-daylight__max" }, "24:00"))); };


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--4-2!../../node_modules/less-loader/dist/cjs.js!./Daylight.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--4-2!../../node_modules/less-loader/dist/cjs.js!./Daylight.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".dyna-slider-daylight {\n  height: 100%;\n  background: -webkit-gradient(linear, left top, right top, from(darkblue), color-stop(darkblue), color-stop(orange), color-stop(yellow), color-stop(yellow), color-stop(orange), color-stop(blue), to(darkblue));\n  background: linear-gradient(0.25turn, darkblue, darkblue, orange, yellow, yellow, orange, blue, darkblue);\n  opacity: 0.5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.7rem;\n  font-weight: bold;\n  color: white;\n  border-radius: 4px;\n}\n.dyna-slider-daylight__min {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  text-align: left;\n}\n.dyna-slider-daylight__max {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  text-align: right;\n}\n", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./DynaInput0024Slider.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./DynaInput0024Slider.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".dyna-input-0024-slider__label {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 4px;\n}\n.dyna-input-0024-slider__label__content {\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n}\n.dyna-input-0024-slider__label__value {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0;\n          flex: 0 0;\n  white-space: nowrap;\n  font-weight: bold;\n  font-size: 21px;\n  margin-left: 8px;\n}\n.dyna-input-0024-slider--size-PX12 .dyna-slider-daylight__min,\n.dyna-input-0024-slider--size-PX12 .dyna-slider-daylight__max {\n  display: none;\n}\n.dyna-input-0024-slider--size-PX24 .dyna-slider-daylight__min,\n.dyna-input-0024-slider--size-PX24 .dyna-slider-daylight__max {\n  display: none;\n}\n.dyna-input-0024-slider--size-PX32 .dyna-slider-daylight {\n  position: relative;\n  top: -1px;\n  left: 0;\n  font-size: 10px;\n  padding: 0 1px;\n}\n.dyna-input-0024-slider--size-PX48 .dyna-slider-daylight__min,\n.dyna-input-0024-slider--size-PX48 .dyna-slider-daylight__max {\n  font-size: 14px;\n  padding: 0 2px;\n}\n", ""]);

// exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var dyna_class_name_1 = __webpack_require__(5);
var dyna_ui_styles_1 = __webpack_require__(4);
var interfaces_1 = __webpack_require__(2);
var DynaInputSlider_1 = __webpack_require__(6);
var StatsBar_1 = __webpack_require__(7);
var StatsHelper_1 = __webpack_require__(8);
__webpack_require__(30);
var DynaInputDurationSlider = /** @class */ (function (_super) {
    __extends(DynaInputDurationSlider, _super);
    function DynaInputDurationSlider(props) {
        var _this = _super.call(this, props) || this;
        _this.className = dyna_class_name_1.dynaClassName("dyna-input-duration-slider");
        _this.statsHelper = new StatsHelper_1.StatsHelper();
        _this.statsHelper.setData(props.values);
        return _this;
    }
    DynaInputDurationSlider.prototype.componentWillReceiveProps = function (nextProps) {
        this.statsHelper.setData(nextProps.values);
    };
    DynaInputDurationSlider.prototype.handleChange = function (name, value) {
        var onChange = this.props.onChange;
        onChange(name, value);
    };
    DynaInputDurationSlider.prototype.getStatTicks = function () {
        var minType = this.props.minType;
        return this.statsHelper.getIntegerTicks(minType);
    };
    DynaInputDurationSlider.prototype.renderTopBackground = function () {
        if (!this.statsHelper.hasValues)
            return null;
        return React.createElement(StatsBar_1.StatsBar, { ticks: this.getStatTicks() });
    };
    DynaInputDurationSlider.prototype.renderBottomBackground = function () {
        var _a = this.props, minType = _a.minType, unitSuffix = _a.unitSuffix;
        var csMinMax = dyna_class_name_1.dynaClassName(this.className("__min-max-container"));
        return (React.createElement("div", { className: csMinMax("") },
            React.createElement("div", { className: csMinMax("__min") }, "" + this.statsHelper.getMinValue(minType) + unitSuffix),
            React.createElement("div", { className: csMinMax("__max") }, "" + this.statsHelper.getMaxValue() + unitSuffix)));
    };
    DynaInputDurationSlider.prototype.renderLabel = function () {
        var _a = this.props, label = _a.label, unitSuffix = _a.unitSuffix, value = _a.value;
        return (React.createElement("div", { className: this.className("__label") },
            React.createElement("div", { className: this.className("__label__content  /dyna-slider-label") }, label),
            React.createElement("div", { className: this.className("__label__value /dyna-slider-value") }, "" + value + unitSuffix)));
    };
    DynaInputDurationSlider.prototype.render = function () {
        var _a = this.props, userClassName = _a.className, name = _a.name, color = _a.color, size = _a.size, minType = _a.minType, value = _a.value;
        var className = this.className("", userClassName && "/" + userClassName, "--size-" + size);
        return (React.createElement("div", { className: className },
            this.renderLabel(),
            React.createElement(DynaInputSlider_1.DynaInputSlider, { name: name, color: color, size: size, min: this.statsHelper.getMinValue(minType), max: this.statsHelper.getMaxValue(), topBackground: this.renderTopBackground(), bottomBackground: this.renderBottomBackground(), value: value, onChange: this.handleChange.bind(this) })));
    };
    DynaInputDurationSlider.defaultProps = {
        className: undefined,
        name: null,
        unitSuffix: 'h',
        label: null,
        color: dyna_ui_styles_1.EColor.WHITE_BLACK,
        size: interfaces_1.ESize.PX24,
        values: [0, 200],
        minType: interfaces_1.EMin.ZERO,
        value: 0,
        onChange: function (name, value) { return undefined; },
    };
    return DynaInputDurationSlider;
}(React.Component));
exports.DynaInputDurationSlider = DynaInputDurationSlider;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./DynaInputDurationSlider.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./DynaInputDurationSlider.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".dyna-input-duration-slider__label {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 4px;\n}\n.dyna-input-duration-slider__label__content {\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n}\n.dyna-input-duration-slider__label__value {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0;\n          flex: 0 0;\n  white-space: nowrap;\n  font-weight: bold;\n  font-size: 21px;\n  margin-left: 8px;\n}\n.dyna-input-duration-slider__min-max-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 14px;\n  font-weight: bold;\n  color: gray;\n}\n.dyna-input-duration-slider__min-max-container__min {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  text-align: left;\n}\n.dyna-input-duration-slider__min-max-container__max {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  text-align: right;\n}\n.dyna-input-duration-slider--size-PX12 .dyna-input-duration-slider__min-max-container {\n  display: none;\n}\n.dyna-input-duration-slider--size-PX24 .dyna-input-duration-slider__min-max-container {\n  display: none;\n}\n.dyna-input-duration-slider--size-PX32 .dyna-input-duration-slider__min-max-container {\n  position: relative;\n  top: -1px;\n  font-size: 12px;\n}\n.dyna-input-duration-slider--size-PX48 .dyna-input-duration-slider__min-max-container {\n  font-size: 16px;\n}\n", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var dyna_class_name_1 = __webpack_require__(5);
var dyna_ui_styles_1 = __webpack_require__(4);
var dyna_loops_1 = __webpack_require__(11);
var interfaces_1 = __webpack_require__(2);
var DynaInputSlider_1 = __webpack_require__(6);
var StatsBar_1 = __webpack_require__(7);
var StatsHelper_1 = __webpack_require__(8);
__webpack_require__(33);
var DynaInputPriceSlider = /** @class */ (function (_super) {
    __extends(DynaInputPriceSlider, _super);
    function DynaInputPriceSlider(props) {
        var _this = _super.call(this, props) || this;
        _this.className = dyna_class_name_1.dynaClassName("dyna-input-price-slider");
        _this.statsHelper = new StatsHelper_1.StatsHelper();
        _this.statsHelper.setData(props.prices);
        return _this;
    }
    DynaInputPriceSlider.prototype.componentWillReceiveProps = function (nextProps) {
        this.statsHelper.setData(nextProps.prices);
    };
    Object.defineProperty(DynaInputPriceSlider.prototype, "minPrice", {
        get: function () {
            var _a = this.props, minType = _a.minType, prices = _a.prices;
            return Math.floor(this.statsHelper.getMinValue(minType));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynaInputPriceSlider.prototype, "maxPrice", {
        get: function () {
            var _a = this.props, step = _a.step, prices = _a.prices;
            return Math.ceil(this.statsHelper.getMaxValue());
        },
        enumerable: true,
        configurable: true
    });
    DynaInputPriceSlider.prototype.handleChange = function (name, value) {
        var onChange = this.props.onChange;
        onChange(name, value);
    };
    DynaInputPriceSlider.prototype.renderTopBackground = function () {
        var _a = this.props, prices = _a.prices, statTicksCount = _a.statTicksCount;
        if (prices.length < 3)
            return null;
        return React.createElement(StatsBar_1.StatsBar, { ticks: this.statsHelper.getFloatGroupTicks(statTicksCount) });
    };
    DynaInputPriceSlider.prototype.renderBottomBackground = function () {
        var formatPrice = this.props.formatPrice;
        var csMinMax = dyna_class_name_1.dynaClassName(this.className("__min-max-container"));
        return (React.createElement("div", { className: csMinMax("") },
            React.createElement("div", { className: csMinMax("__min") }, formatPrice(this.minPrice)),
            React.createElement("div", { className: csMinMax("__max") }, formatPrice(this.maxPrice))));
    };
    DynaInputPriceSlider.prototype.renderLabel = function () {
        var _a = this.props, label = _a.label, formatPrice = _a.formatPrice, step = _a.step, value = _a.value;
        var precision = -(step.toString().length - 1) || 0;
        return (React.createElement("div", { className: this.className("__label") },
            React.createElement("div", { className: this.className("__label__content /dyna-slider-label") }, label),
            React.createElement("div", { className: this.className("__label__value /dyna-slider-value") }, formatPrice(dyna_loops_1.round(value, precision)))));
    };
    DynaInputPriceSlider.prototype.render = function () {
        var _a = this.props, userClassName = _a.className, name = _a.name, color = _a.color, size = _a.size, step = _a.step, value = _a.value;
        var className = this.className("", userClassName && "/" + userClassName, "--size-" + size);
        return (React.createElement("div", { className: className },
            this.renderLabel(),
            React.createElement(DynaInputSlider_1.DynaInputSlider, { name: name, color: color, size: size, step: step, min: this.minPrice, max: this.maxPrice, topBackground: this.renderTopBackground(), bottomBackground: this.renderBottomBackground(), value: dyna_loops_1.round(value, -1), onChange: this.handleChange.bind(this) })));
    };
    DynaInputPriceSlider.defaultProps = {
        className: undefined,
        name: null,
        label: null,
        color: dyna_ui_styles_1.EColor.WHITE_BLACK,
        size: interfaces_1.ESize.PX24,
        prices: [0, 2000],
        step: 1,
        statTicksCount: 24,
        minType: interfaces_1.EMin.ZERO,
        value: 0,
        formatPrice: function (value) { return "$" + value; },
        onChange: function (name, value) { return undefined; },
    };
    return DynaInputPriceSlider;
}(React.Component));
exports.DynaInputPriceSlider = DynaInputPriceSlider;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./DynaInputPriceSlider.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./DynaInputPriceSlider.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".dyna-input-price-slider__label {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 4px;\n}\n.dyna-input-price-slider__label__content {\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n}\n.dyna-input-price-slider__label__value {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0;\n          flex: 0 0;\n  white-space: nowrap;\n  font-weight: bold;\n  font-size: 21px;\n  margin-left: 8px;\n}\n.dyna-input-price-slider__min-max-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: gray;\n}\n.dyna-input-price-slider__min-max-container__min {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  text-align: left;\n}\n.dyna-input-price-slider__min-max-container__max {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  text-align: right;\n}\n.dyna-input-price-slider--size-PX12 .dyna-input-price-slider__min-max-container {\n  display: none;\n}\n.dyna-input-price-slider--size-PX24 .dyna-input-price-slider__min-max-container {\n  display: none;\n}\n.dyna-input-price-slider--size-PX32 .dyna-input-price-slider__min-max-container {\n  position: relative;\n  top: -1px;\n  font-size: 12px;\n}\n.dyna-input-price-slider--size-PX48 .dyna-input-price-slider__min-max-container {\n  font-size: 16px;\n}\n", ""]);

// exports


/***/ })
/******/ ]);
});