/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html {\n  font-size: 62.5%;\n  /* (10*100/16) */ }\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  color: #776e65; }\n\n.header__title {\n  font-size: 6rem;\n  font-weight: bold; }\n\n.header__about {\n  font-size: 1.6rem; }\n\n.game-actions__new-game-btn {\n  font-size: 1.6rem;\n  font-weight: bold; }\n\n.grid__cell {\n  font-size: 3rem;\n  font-weight: bold; }\n\n.game__status {\n  font-size: 5rem;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n@keyframes zoomIn {\n  0% {\n    transform: scaleY(0.8); }\n  90% {\n    transform: scaleY(1.1); }\n  100% {\n    transform: scaleY(1); } }\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  background-color: #faf8ef;\n  height: 100vh;\n  width: 56rem;\n  padding: 3rem;\n  margin: 5rem auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.grid {\n  width: 100%;\n  background-color: rgba(119, 110, 101, 0.5);\n  border-radius: 5px;\n  padding: 2rem; }\n  .grid__row {\n    width: 100%;\n    display: flex;\n    justify-content: space-around; }\n    .grid__row:not(:last-child) {\n      margin-bottom: 2rem; }\n  .grid__cell {\n    width: 10rem;\n    height: 10rem;\n    border-radius: 2px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #ede0c8; }\n    .grid__cell:not(:last-child) {\n      margin-right: 2rem; }\n    .grid__cell div[class^='tile'] {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n    .grid__cell .tile--modified {\n      animation: zoomIn .5s; }\n    .grid__cell .tile--2 {\n      background-color: #D6B05B; }\n    .grid__cell .tile--4 {\n      background-color: #ead7ad; }\n    .grid__cell .tile--8 {\n      background-color: #f88e75; }\n    .grid__cell .tile--16 {\n      background-color: #e0c384; }\n    .grid__cell .tile--32 {\n      background-color: #ead7ad; }\n    .grid__cell .tile--64 {\n      background-color: #e2c78c; }\n    .grid__cell .tile--128 {\n      background-color: #c29a24; }\n    .grid__cell .tile--256 {\n      background-color: #fbbeb0; }\n    .grid__cell .tile--512 {\n      background-color: #c09d95; }\n    .grid__cell .tile--1024 {\n      background-color: #e0907e; }\n    .grid__cell .tile--2048 {\n      background-color: #eec469; }\n\n.header {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem; }\n\nmain {\n  width: 100%; }\n\n.game-actions {\n  text-align: right;\n  margin-bottom: 4rem; }\n  .game-actions__new-game-btn {\n    height: 4rem;\n    width: 10rem;\n    background-color: #bbada0;\n    color: white;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer; }\n\n.game {\n  position: relative; }\n  .game__status {\n    opacity: 0;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(235, 214, 194, 0.5);\n    color: #e0862a;\n    z-index: 10;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all .5s;\n    transform: scale(1.1, 1.1); }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid */ "./src/Grid.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var INITIAL_TILE_COUNT = 2;
var GRID_SIZE = 4;
var FINAL_GAME_SCORE = 2048;

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.grid = new _Grid__WEBPACK_IMPORTED_MODULE_0__["default"](GRID_SIZE);
    this.tileValues = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    this.gameOver = false;
    this.gameWon = false;
    this.setUp();
  }

  _createClass(App, [{
    key: "setUp",
    value: function setUp() {
      for (var index = 0; index < INITIAL_TILE_COUNT; index++) {
        this.addNewTile();
      }

      this.grid.renderGrid(this.tileValues);
      this.grid.resetGameStatus();
    }
  }, {
    key: "addNewTile",
    value: function addNewTile() {
      var emptyTiles = this.getEmptyTiles();

      if (emptyTiles.length) {
        var _emptyTiles = _slicedToArray(emptyTiles[[Math.floor(Math.random() * emptyTiles.length)]], 2),
            row = _emptyTiles[0],
            col = _emptyTiles[1];

        this.tileValues[row][col] = Math.random() < 0.8 ? 2 : 4;
        return [row, col];
      }

      return [];
    }
  }, {
    key: "getEmptyTiles",
    value: function getEmptyTiles() {
      var emptyTiles = [];

      for (var row = 0; row < GRID_SIZE; row++) {
        for (var col = 0; col < GRID_SIZE; col++) {
          if (this.tileValues[row][col] === 0) {
            emptyTiles.push([row, col]);
          }
        }
      }

      return emptyTiles;
    }
  }, {
    key: "moveTilesRight",
    value: function moveTilesRight() {
      var tilesMoved = false;

      for (var row = 0; row < GRID_SIZE; row++) {
        var tileRow = this.tileValues[row];
        var farthestTileWithZeroIndex = -1;
        var alreadyCalucatedTileIndex = GRID_SIZE;

        for (var col = GRID_SIZE - 1; col >= 0; col--) {
          if (tileRow[col] === 0) {
            farthestTileWithZeroIndex = col > farthestTileWithZeroIndex ? col : farthestTileWithZeroIndex;
            continue;
          }

          var nextTileIndex = col + 1;

          while (nextTileIndex < alreadyCalucatedTileIndex) {
            if (tileRow[nextTileIndex] === 0) {
              nextTileIndex++;
              continue;
            }

            if (tileRow[col] === tileRow[nextTileIndex]) {
              tileRow[nextTileIndex] += tileRow[col];

              if (tileRow[nextTileIndex] === FINAL_GAME_SCORE) {
                this.gameWon = true;
              }

              tileRow[col] = 0;
              farthestTileWithZeroIndex = col > farthestTileWithZeroIndex ? col : farthestTileWithZeroIndex;
              alreadyCalucatedTileIndex = nextTileIndex;
              tilesMoved = true;
            }

            break;
          }

          if (tileRow[col] !== 0 && farthestTileWithZeroIndex > 0) {
            tileRow[farthestTileWithZeroIndex] = tileRow[col];
            tileRow[col] = 0;
            farthestTileWithZeroIndex = farthestTileWithZeroIndex - 1;
            tilesMoved = true;
          }
        }
      }

      return tilesMoved;
    }
  }, {
    key: "moveTilesLeft",
    value: function moveTilesLeft() {
      var tilesMoved = false;

      for (var row = 0; row < GRID_SIZE; row++) {
        var tileRow = this.tileValues[row];
        var farthestTileWithZeroIndex = GRID_SIZE;
        var alreadyCalucatedTileIndex = -1;

        for (var col = 0; col <= GRID_SIZE - 1; col++) {
          if (tileRow[col] === 0) {
            farthestTileWithZeroIndex = col < farthestTileWithZeroIndex ? col : farthestTileWithZeroIndex;
            continue;
          }

          var nextTileIndex = col - 1;

          while (nextTileIndex > alreadyCalucatedTileIndex) {
            if (tileRow[nextTileIndex] === 0) {
              nextTileIndex--;
              continue;
            }

            if (tileRow[col] === tileRow[nextTileIndex]) {
              tileRow[nextTileIndex] += tileRow[col];

              if (tileRow[nextTileIndex] === FINAL_GAME_SCORE) {
                this.gameWon = true;
              }

              tileRow[col] = 0;
              farthestTileWithZeroIndex = col < farthestTileWithZeroIndex ? col : farthestTileWithZeroIndex;
              alreadyCalucatedTileIndex = nextTileIndex;
              tilesMoved = true;
            }

            break;
          }

          if (tileRow[col] !== 0 && farthestTileWithZeroIndex < GRID_SIZE) {
            tileRow[farthestTileWithZeroIndex] = tileRow[col];
            tileRow[col] = 0;
            farthestTileWithZeroIndex = farthestTileWithZeroIndex + 1;
            tilesMoved = true;
          }
        }
      }

      return tilesMoved;
    }
  }, {
    key: "moveTilesUp",
    value: function moveTilesUp() {
      var tilesMoved = false;

      for (var col = 0; col < GRID_SIZE; col++) {
        var farthestTileWithZeroIndex = GRID_SIZE;
        var alreadyCalucatedTileIndex = -1;

        for (var row = 0; row <= GRID_SIZE - 1; row++) {
          if (this.tileValues[row][col] === 0) {
            farthestTileWithZeroIndex = row < farthestTileWithZeroIndex ? row : farthestTileWithZeroIndex;
            continue;
          }

          var nextTileIndex = row - 1;

          while (nextTileIndex > alreadyCalucatedTileIndex) {
            if (this.tileValues[nextTileIndex][col] === 0) {
              nextTileIndex--;
              continue;
            }

            if (this.tileValues[row][col] === this.tileValues[nextTileIndex][col]) {
              this.tileValues[nextTileIndex][col] += this.tileValues[row][col];

              if (this.tileValues[nextTileIndex][col] === FINAL_GAME_SCORE) {
                this.gameWon = true;
              }

              this.tileValues[row][col] = 0;
              farthestTileWithZeroIndex = row < farthestTileWithZeroIndex ? row : farthestTileWithZeroIndex;
              alreadyCalucatedTileIndex = nextTileIndex;
              tilesMoved = true;
            }

            break;
          }

          if (this.tileValues[row][col] !== 0 && farthestTileWithZeroIndex < GRID_SIZE) {
            this.tileValues[farthestTileWithZeroIndex][col] = this.tileValues[row][col];
            this.tileValues[row][col] = 0;
            farthestTileWithZeroIndex = farthestTileWithZeroIndex + 1;
            tilesMoved = true;
          }
        }
      }

      return tilesMoved;
    }
  }, {
    key: "moveTilesDown",
    value: function moveTilesDown() {
      var tilesMoved = false;

      for (var col = 0; col < GRID_SIZE; col++) {
        var farthestTileWithZeroIndex = -1;
        var alreadyCalucatedTileIndex = GRID_SIZE;

        for (var row = GRID_SIZE - 1; row >= 0; row--) {
          if (this.tileValues[row][col] === 0) {
            farthestTileWithZeroIndex = row > farthestTileWithZeroIndex ? row : farthestTileWithZeroIndex;
            continue;
          }

          var nextTileIndex = row + 1;

          while (nextTileIndex < alreadyCalucatedTileIndex) {
            if (this.tileValues[nextTileIndex][col] === 0) {
              nextTileIndex++;
              continue;
            }

            if (this.tileValues[row][col] === this.tileValues[nextTileIndex][col]) {
              this.tileValues[nextTileIndex][col] += this.tileValues[row][col];

              if (this.tileValues[nextTileIndex][col] === FINAL_GAME_SCORE) {
                this.gameWon = true;
              }

              this.tileValues[row][col] = 0;
              farthestTileWithZeroIndex = row > farthestTileWithZeroIndex ? row : farthestTileWithZeroIndex;
              alreadyCalucatedTileIndex = nextTileIndex;
              tilesMoved = true;
            }

            break;
          }

          if (this.tileValues[row][col] !== 0 && farthestTileWithZeroIndex > 0) {
            this.tileValues[farthestTileWithZeroIndex][col] = this.tileValues[row][col];
            this.tileValues[row][col] = 0;
            farthestTileWithZeroIndex = farthestTileWithZeroIndex - 1;
            tilesMoved = true;
          }
        }
      }

      return tilesMoved;
    }
  }, {
    key: "checkIfGameIsOver",
    value: function checkIfGameIsOver() {
      for (var row = 0; row < GRID_SIZE; row++) {
        for (var col = 0; col < GRID_SIZE; col++) {
          if (this.tileValues[row][col] === this.tileValues[row][col + 1] || this.tileValues[row][col] === this.tileValues[row][col - 1] || this.tileValues[row + 1] && this.tileValues[row][col] === this.tileValues[row + 1][col] || this.tileValues[row - 1] && this.tileValues[row][col] === this.tileValues[row - 1][col]) {
            return false;
          }
        }
      }

      return true;
    }
  }, {
    key: "updateGrid",
    value: function updateGrid(tilesMoved) {
      var anyEmptyTileExist = this.getEmptyTiles().length !== 0;

      if (tilesMoved) {
        this.grid.renderGrid(this.tileValues);

        if (anyEmptyTileExist) {
          var _this$addNewTile = this.addNewTile(),
              _this$addNewTile2 = _slicedToArray(_this$addNewTile, 2),
              row = _this$addNewTile2[0],
              col = _this$addNewTile2[1];

          this.grid.renderTile(row, col, this.tileValues[row][col]);
        }
      }

      if (this.gameWon) {
        this.grid.displayGameStatus(true);
      }

      var allTilesOccupied = this.getEmptyTiles().length === 0;

      if (allTilesOccupied) {
        this.gameOver = this.checkIfGameIsOver();
        if (this.gameOver) this.grid.displayGameStatus(false);
      }
    }
  }]);

  return App;
}();



/***/ }),

/***/ "./src/Grid.js":
/*!*********************!*\
  !*** ./src/Grid.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grid; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Grid =
/*#__PURE__*/
function () {
  function Grid(size) {
    _classCallCheck(this, Grid);

    this.size = size;
  }

  _createClass(Grid, [{
    key: "renderGrid",
    value: function renderGrid(tileValues) {
      for (var row = 0; row < this.size; row++) {
        for (var col = 0; col < this.size; col++) {
          this.renderTile(row, col, tileValues[row][col]);
        }
      }
    }
  }, {
    key: "renderTile",
    value: function renderTile(row, col, value) {
      var cell = document.querySelector(".grid__cell--".concat(row, "-").concat(col));
      var previousValue = +cell.textContent;

      if (value !== 0 && value !== previousValue) {
        cell.innerHTML = "";
        var tile = document.createElement('div');
        tile.textContent = value;
        tile.classList.add("tile--".concat(value), 'tile--modified');
        cell.appendChild(tile);
      } else if (value === 0) {
        cell.innerHTML = "";
      }
    }
  }, {
    key: "displayGameStatus",
    value: function displayGameStatus(gameWon) {
      var statusContainer = document.querySelector(".game__status");
      statusContainer.textContent = gameWon ? 'You Won!' : 'Game Over!';
      statusContainer.style.opacity = 1;
    }
  }, {
    key: "resetGameStatus",
    value: function resetGameStatus() {
      var statusContainer = document.querySelector(".game__status");
      statusContainer.textContent = '';
      statusContainer.style.opacity = 0;
    }
  }]);

  return Grid;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.js");

var app = new _App__WEBPACK_IMPORTED_MODULE_0__["default"]();
document.addEventListener('keydown', function (event) {
  event.preventDefault();
  var tilesMoved = false;

  if (event.which === 37) {
    tilesMoved = app.moveTilesLeft();
  } else if (event.which === 38) {
    tilesMoved = app.moveTilesUp();
  } else if (event.which === 39) {
    tilesMoved = app.moveTilesRight();
  } else if (event.which === 40) {
    tilesMoved = app.moveTilesDown();
  } else {
    return;
  }

  app.updateGrid(tilesMoved);
});
var game = document.querySelector('.game');
var touchStartX = null,
    touchStartY = null,
    touchEndX = null,
    touchEndY = null;
game.addEventListener("touchstart", function (event) {
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
});
game.addEventListener("touchmove", function (event) {
  event.preventDefault();
});
game.addEventListener("touchend", function (event) {
  var tilesMoved = false;
  touchEndX = event.changedTouches[0].clientX;
  touchEndY = event.changedTouches[0].clientY;
  var distanceX = touchEndX - touchStartX;
  var distanceY = touchEndY - touchStartY;

  if (Math.max(Math.abs(distanceX), Math.abs(distanceY)) > 10) {
    tilesMoved = Math.abs(distanceX) > Math.abs(distanceY) ? distanceX > 0 ? app.moveTilesRight() : app.moveTilesLeft() : distanceY > 0 ? app.moveTilesDown() : app.moveTilesUp();
    app.updateGrid(tilesMoved);
  }
});
document.querySelector('.game-actions__new-game-btn').addEventListener('click', function () {
  app = new _App__WEBPACK_IMPORTED_MODULE_0__["default"]();
});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/MjdiNiJdLCJuYW1lcyI6WyJJTklUSUFMX1RJTEVfQ09VTlQiLCJHUklEX1NJWkUiLCJGSU5BTF9HQU1FX1NDT1JFIiwiQXBwIiwiZ3JpZCIsIkdyaWQiLCJ0aWxlVmFsdWVzIiwiZ2FtZU92ZXIiLCJnYW1lV29uIiwic2V0VXAiLCJpbmRleCIsImFkZE5ld1RpbGUiLCJyZW5kZXJHcmlkIiwicmVzZXRHYW1lU3RhdHVzIiwiZW1wdHlUaWxlcyIsImdldEVtcHR5VGlsZXMiLCJsZW5ndGgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyb3ciLCJjb2wiLCJwdXNoIiwidGlsZXNNb3ZlZCIsInRpbGVSb3ciLCJmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4IiwiYWxyZWFkeUNhbHVjYXRlZFRpbGVJbmRleCIsIm5leHRUaWxlSW5kZXgiLCJhbnlFbXB0eVRpbGVFeGlzdCIsInJlbmRlclRpbGUiLCJkaXNwbGF5R2FtZVN0YXR1cyIsImFsbFRpbGVzT2NjdXBpZWQiLCJjaGVja0lmR2FtZUlzT3ZlciIsInNpemUiLCJ2YWx1ZSIsImNlbGwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcmV2aW91c1ZhbHVlIiwidGV4dENvbnRlbnQiLCJpbm5lckhUTUwiLCJ0aWxlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwic3RhdHVzQ29udGFpbmVyIiwic3R5bGUiLCJvcGFjaXR5IiwiYXBwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ3aGljaCIsIm1vdmVUaWxlc0xlZnQiLCJtb3ZlVGlsZXNVcCIsIm1vdmVUaWxlc1JpZ2h0IiwibW92ZVRpbGVzRG93biIsInVwZGF0ZUdyaWQiLCJnYW1lIiwidG91Y2hTdGFydFgiLCJ0b3VjaFN0YXJ0WSIsInRvdWNoRW5kWCIsInRvdWNoRW5kWSIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsImNoYW5nZWRUb3VjaGVzIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwibWF4IiwiYWJzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMsd0dBQW1EO0FBQ3RGO0FBQ0Es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c0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIC8qICgxMCoxMDAvMTYpICovIH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzc3NmU2NTsgfVxcblxcbi5oZWFkZXJfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmhlYWRlcl9fYWJvdXQge1xcbiAgZm9udC1zaXplOiAxLjZyZW07IH1cXG5cXG4uZ2FtZS1hY3Rpb25zX19uZXctZ2FtZS1idG4ge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5ncmlkX19jZWxsIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmdhbWVfX3N0YXR1cyB7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuOCk7IH1cXG4gIDkwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEuMSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTsgfSB9XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY4ZWY7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDU2cmVtO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIG1hcmdpbjogNXJlbSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExOSwgMTEwLCAxMDEsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAycmVtOyB9XFxuICAuZ3JpZF9fcm93IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuICAgIC5ncmlkX19yb3c6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTsgfVxcbiAgLmdyaWRfX2NlbGwge1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGUwYzg7IH1cXG4gICAgLmdyaWRfX2NlbGw6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtOyB9XFxuICAgIC5ncmlkX19jZWxsIGRpdltjbGFzc149J3RpbGUnXSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAuZ3JpZF9fY2VsbCAudGlsZS0tbW9kaWZpZWQge1xcbiAgICAgIGFuaW1hdGlvbjogem9vbUluIC41czsgfVxcbiAgICAuZ3JpZF9fY2VsbCAudGlsZS0tMiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q2QjA1QjsgfVxcbiAgICAuZ3JpZF9fY2VsbCAudGlsZS0tNCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZDdhZDsgfVxcbiAgICAuZ3JpZF9fY2VsbCAudGlsZS0tOCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4OGU3NTsgfVxcbiAgICAuZ3JpZF9fY2VsbCAudGlsZS0tMTYge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGMzODQ7IH1cXG4gICAgLmdyaWRfX2NlbGwgLnRpbGUtLTMyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFkN2FkOyB9XFxuICAgIC5ncmlkX19jZWxsIC50aWxlLS02NCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyYzc4YzsgfVxcbiAgICAuZ3JpZF9fY2VsbCAudGlsZS0tMTI4IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzI5YTI0OyB9XFxuICAgIC5ncmlkX19jZWxsIC50aWxlLS0yNTYge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmJlYjA7IH1cXG4gICAgLmdyaWRfX2NlbGwgLnRpbGUtLTUxMiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MwOWQ5NTsgfVxcbiAgICAuZ3JpZF9fY2VsbCAudGlsZS0tMTAyNCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwOTA3ZTsgfVxcbiAgICAuZ3JpZF9fY2VsbCAudGlsZS0tMjA0OCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlYzQ2OTsgfVxcblxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07IH1cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmdhbWUtYWN0aW9ucyB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1hcmdpbi1ib3R0b206IDRyZW07IH1cXG4gIC5nYW1lLWFjdGlvbnNfX25ldy1nYW1lLWJ0biB7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJhZGEwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uZ2FtZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5nYW1lX19zdGF0dXMge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LCAyMTQsIDE5NCwgMC41KTtcXG4gICAgY29sb3I6ICNlMDg2MmE7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7IH1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJpbXBvcnQgR3JpZCBmcm9tICcuL0dyaWQnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xyXG5cclxuY29uc3QgSU5JVElBTF9USUxFX0NPVU5UID0gMjtcclxuY29uc3QgR1JJRF9TSVpFID0gNDtcclxuY29uc3QgRklOQUxfR0FNRV9TQ09SRSA9IDIwNDg7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKEdSSURfU0laRSk7XHJcbiAgICAgICAgdGhpcy50aWxlVmFsdWVzID0gW1xyXG4gICAgICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMCwgMF1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdhbWVXb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldFVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXAoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IElOSVRJQUxfVElMRV9DT1VOVDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5ld1RpbGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ncmlkLnJlbmRlckdyaWQodGhpcy50aWxlVmFsdWVzKTtcclxuICAgICAgICB0aGlzLmdyaWQucmVzZXRHYW1lU3RhdHVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTmV3VGlsZSgpIHtcclxuICAgICAgICBjb25zdCBlbXB0eVRpbGVzID0gdGhpcy5nZXRFbXB0eVRpbGVzKCk7XHJcblxyXG4gICAgICAgIGlmIChlbXB0eVRpbGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gZW1wdHlUaWxlc1tbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW1wdHlUaWxlcy5sZW5ndGgpXV07XHJcbiAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPSBNYXRoLnJhbmRvbSgpIDwgMC44ID8gMiA6IDQ7XHJcbiAgICAgICAgICAgIHJldHVybiBbcm93LCBjb2xdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW1wdHlUaWxlcygpIHtcclxuXHJcbiAgICAgICAgY29uc3QgZW1wdHlUaWxlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IEdSSURfU0laRTsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgR1JJRF9TSVpFOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbXB0eVRpbGVzLnB1c2goW3JvdywgY29sXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVtcHR5VGlsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRpbGVzUmlnaHQoKSB7XHJcblxyXG4gICAgICAgIGxldCB0aWxlc01vdmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IEdSSURfU0laRTsgcm93KyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aWxlUm93ID0gdGhpcy50aWxlVmFsdWVzW3Jvd107XHJcbiAgICAgICAgICAgIGxldCBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIGxldCBhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4ID0gR1JJRF9TSVpFO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gR1JJRF9TSVpFIC0gMTsgY29sID49IDA7IGNvbC0tKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpbGVSb3dbY29sXSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSBjb2wgPiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFRpbGVJbmRleCA9IGNvbCArIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5leHRUaWxlSW5kZXggPCBhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aWxlUm93W25leHRUaWxlSW5kZXhdID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUaWxlSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGlsZVJvd1tjb2xdID09PSB0aWxlUm93W25leHRUaWxlSW5kZXhdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlUm93W25leHRUaWxlSW5kZXhdICs9IHRpbGVSb3dbY29sXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aWxlUm93W25leHRUaWxlSW5kZXhdID09PSBGSU5BTF9HQU1FX1NDT1JFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVXb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlUm93W2NvbF0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gY29sID4gZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxyZWFkeUNhbHVjYXRlZFRpbGVJbmRleCA9IG5leHRUaWxlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVzTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpbGVSb3dbY29sXSAhPT0gMCAmJiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVSb3dbZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleF0gPSB0aWxlUm93W2NvbF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZVJvd1tjb2xdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZXNNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aWxlc01vdmVkO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUaWxlc0xlZnQoKSB7XHJcbiAgICAgICAgbGV0IHRpbGVzTW92ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgR1JJRF9TSVpFOyByb3crKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpbGVSb3cgPSB0aGlzLnRpbGVWYWx1ZXNbcm93XTtcclxuICAgICAgICAgICAgbGV0IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSBHUklEX1NJWkU7XHJcbiAgICAgICAgICAgIGxldCBhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4ID0gLTE7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPD0gR1JJRF9TSVpFIC0gMTsgY29sKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGlsZVJvd1tjb2xdID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IGNvbCA8IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuZXh0VGlsZUluZGV4ID0gY29sIC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV4dFRpbGVJbmRleCA+IGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbGVSb3dbbmV4dFRpbGVJbmRleF0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRpbGVJbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aWxlUm93W2NvbF0gPT09IHRpbGVSb3dbbmV4dFRpbGVJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVJvd1tuZXh0VGlsZUluZGV4XSArPSB0aWxlUm93W2NvbF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGlsZVJvd1tuZXh0VGlsZUluZGV4XSA9PT0gRklOQUxfR0FNRV9TQ09SRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lV29uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVJvd1tjb2xdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IGNvbCA8IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4ID0gbmV4dFRpbGVJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXNNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGlsZVJvd1tjb2xdICE9PSAwICYmIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPCBHUklEX1NJWkUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlUm93W2ZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXhdID0gdGlsZVJvd1tjb2xdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVSb3dbY29sXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVzTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGlsZXNNb3ZlZDtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVGlsZXNVcCgpIHtcclxuICAgICAgICBsZXQgdGlsZXNNb3ZlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBHUklEX1NJWkU7IGNvbCsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IEdSSURfU0laRTtcclxuICAgICAgICAgICAgbGV0IGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXggPSAtMTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8PSBHUklEX1NJWkUgLSAxOyByb3crKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IHJvdyA8IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPyByb3cgOiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuZXh0VGlsZUluZGV4ID0gcm93IC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV4dFRpbGVJbmRleCA+IGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZVZhbHVlc1tuZXh0VGlsZUluZGV4XVtjb2xdID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUaWxlSW5kZXgtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSA9PT0gdGhpcy50aWxlVmFsdWVzW25leHRUaWxlSW5kZXhdW2NvbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW25leHRUaWxlSW5kZXhdW2NvbF0gKz0gdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVWYWx1ZXNbbmV4dFRpbGVJbmRleF1bY29sXSA9PT0gRklOQUxfR0FNRV9TQ09SRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lV29uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSByb3cgPCBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4ID0gbmV4dFRpbGVJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXNNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSAhPT0gMCAmJiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4IDwgR1JJRF9TSVpFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW2ZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXhdW2NvbF0gPSB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlc01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aWxlc01vdmVkO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUaWxlc0Rvd24oKSB7XHJcbiAgICAgICAgbGV0IHRpbGVzTW92ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgR1JJRF9TSVpFOyBjb2wrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgbGV0IGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXggPSBHUklEX1NJWkU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSBHUklEX1NJWkUgLSAxOyByb3cgPj0gMDsgcm93LS0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSByb3cgPiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID8gcm93IDogZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFRpbGVJbmRleCA9IHJvdyArIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5leHRUaWxlSW5kZXggPCBhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVWYWx1ZXNbbmV4dFRpbGVJbmRleF1bY29sXSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0VGlsZUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPT09IHRoaXMudGlsZVZhbHVlc1tuZXh0VGlsZUluZGV4XVtjb2xdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tuZXh0VGlsZUluZGV4XVtjb2xdICs9IHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlVmFsdWVzW25leHRUaWxlSW5kZXhdW2NvbF0gPT09IEZJTkFMX0dBTUVfU0NPUkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVdvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gcm93ID4gZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA/IHJvdyA6IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXggPSBuZXh0VGlsZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlc01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdICE9PSAwICYmIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW2ZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXhdW2NvbF0gPSB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4IC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlc01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aWxlc01vdmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSWZHYW1lSXNPdmVyKCkge1xyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IEdSSURfU0laRTsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgR1JJRF9TSVpFOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPT09IHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbCArIDFdXHJcbiAgICAgICAgICAgICAgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID09PSB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2wgLSAxXVxyXG4gICAgICAgICAgICAgICAgICAgIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbcm93ICsgMV0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSA9PT0gdGhpcy50aWxlVmFsdWVzW3JvdyArIDFdW2NvbF1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tyb3cgLSAxXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID09PSB0aGlzLnRpbGVWYWx1ZXNbcm93IC0gMV1bY29sXVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlR3JpZCh0aWxlc01vdmVkKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFueUVtcHR5VGlsZUV4aXN0ID0gdGhpcy5nZXRFbXB0eVRpbGVzKCkubGVuZ3RoICE9PSAwO1xyXG5cclxuICAgICAgICBpZiAodGlsZXNNb3ZlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdyaWQucmVuZGVyR3JpZCh0aGlzLnRpbGVWYWx1ZXMpO1xyXG4gICAgICAgICAgICBpZiAoYW55RW1wdHlUaWxlRXhpc3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSB0aGlzLmFkZE5ld1RpbGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5yZW5kZXJUaWxlKHJvdywgY29sLCB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVdvbikge1xyXG4gICAgICAgICAgICB0aGlzLmdyaWQuZGlzcGxheUdhbWVTdGF0dXModHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhbGxUaWxlc09jY3VwaWVkID0gdGhpcy5nZXRFbXB0eVRpbGVzKCkubGVuZ3RoID09PSAwO1xyXG5cclxuICAgICAgICBpZiAoYWxsVGlsZXNPY2N1cGllZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5jaGVja0lmR2FtZUlzT3ZlcigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lT3ZlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5kaXNwbGF5R2FtZVN0YXR1cyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJHcmlkKHRpbGVWYWx1ZXMpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5zaXplOyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLnNpemU7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRpbGUocm93LCBjb2wsIHRpbGVWYWx1ZXNbcm93XVtjb2xdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUaWxlKHJvdywgY29sLCB2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ3JpZF9fY2VsbC0tJHtyb3d9LSR7Y29sfWApO1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSArY2VsbC50ZXh0Q29udGVudDtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSAwICYmIHZhbHVlICE9PSBwcmV2aW91c1ZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICBjZWxsLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGB0aWxlLS0ke3ZhbHVlfWAsICd0aWxlLS1tb2RpZmllZCcpXHJcbiAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGlsZSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5R2FtZVN0YXR1cyhnYW1lV29uKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVfX3N0YXR1c2ApO1xyXG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci50ZXh0Q29udGVudCA9IGdhbWVXb24gPyAnWW91IFdvbiEnIDogJ0dhbWUgT3ZlciEnO1xyXG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEdhbWVTdGF0dXMoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVfX3N0YXR1c2ApO1xyXG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XHJcblxyXG5sZXQgYXBwID0gbmV3IEFwcCgpO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgdGlsZXNNb3ZlZCA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChldmVudC53aGljaCA9PT0gMzcpIHtcclxuICAgICAgICB0aWxlc01vdmVkID0gYXBwLm1vdmVUaWxlc0xlZnQoKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQud2hpY2ggPT09IDM4KSB7XHJcbiAgICAgICAgdGlsZXNNb3ZlZCA9IGFwcC5tb3ZlVGlsZXNVcCgpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC53aGljaCA9PT0gMzkpIHtcclxuICAgICAgICB0aWxlc01vdmVkID0gYXBwLm1vdmVUaWxlc1JpZ2h0KCk7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LndoaWNoID09PSA0MCkge1xyXG4gICAgICAgIHRpbGVzTW92ZWQgPSBhcHAubW92ZVRpbGVzRG93bigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLnVwZGF0ZUdyaWQodGlsZXNNb3ZlZCk7XHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xyXG5cclxubGV0IHRvdWNoU3RhcnRYID0gbnVsbCxcclxuICAgIHRvdWNoU3RhcnRZID0gbnVsbCxcclxuICAgIHRvdWNoRW5kWCA9IG51bGwsXHJcbiAgICB0b3VjaEVuZFkgPSBudWxsO1xyXG5cclxuXHJcbmdhbWUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB0b3VjaFN0YXJ0WCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgIHRvdWNoU3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xyXG59KTtcclxuXHJcbmdhbWUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuZ2FtZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgbGV0IHRpbGVzTW92ZWQgPSBmYWxzZTtcclxuXHJcbiAgICB0b3VjaEVuZFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgdG91Y2hFbmRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcclxuXHJcbiAgICBsZXQgZGlzdGFuY2VYID0gdG91Y2hFbmRYIC0gdG91Y2hTdGFydFg7XHJcbiAgICBsZXQgZGlzdGFuY2VZID0gdG91Y2hFbmRZIC0gdG91Y2hTdGFydFk7XHJcblxyXG4gICAgaWYgKE1hdGgubWF4KE1hdGguYWJzKGRpc3RhbmNlWCksIE1hdGguYWJzKGRpc3RhbmNlWSkpID4gMTApIHtcclxuXHJcbiAgICAgICAgdGlsZXNNb3ZlZCA9IE1hdGguYWJzKGRpc3RhbmNlWCkgPiBNYXRoLmFicyhkaXN0YW5jZVkpID9cclxuICAgICAgICAgICAgKGRpc3RhbmNlWCA+IDAgPyBhcHAubW92ZVRpbGVzUmlnaHQoKSA6IGFwcC5tb3ZlVGlsZXNMZWZ0KCkpXHJcbiAgICAgICAgICAgIDogKGRpc3RhbmNlWSA+IDAgPyBhcHAubW92ZVRpbGVzRG93bigpIDogYXBwLm1vdmVUaWxlc1VwKCkpO1xyXG5cclxuICAgICAgICBhcHAudXBkYXRlR3JpZCh0aWxlc01vdmVkKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtYWN0aW9uc19fbmV3LWdhbWUtYnRuJylcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBhcHAgPSBuZXcgQXBwKCk7XHJcbiAgICB9KVxyXG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9