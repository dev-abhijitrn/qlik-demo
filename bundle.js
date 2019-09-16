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
exports.push([module.i, "html {\n  font-size: 62.5%;\n  /* (10*100/16) */ }\n\n@media screen and (max-width: 650px) {\n  html {\n    font-size: 50%; } }\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  color: #776e65; }\n\n.header__title {\n  font-size: 6rem;\n  font-weight: bold; }\n\n.header__about {\n  font-size: 1.6rem; }\n\n.game-actions__new-game-btn {\n  font-size: 1.6rem;\n  font-weight: bold; }\n\n.grid__cell {\n  font-size: 3rem;\n  font-weight: bold; }\n\n.game__status {\n  font-size: 5rem;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n@keyframes zoomIn {\n  0% {\n    transform: scaleY(0.8); }\n  90% {\n    transform: scaleY(1.1); }\n  100% {\n    transform: scaleY(1); } }\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  background-color: #faf8ef;\n  height: 100vh;\n  width: 56rem;\n  padding: 3rem;\n  margin: 5rem auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.grid {\n  width: 100%;\n  background-color: rgba(119, 110, 101, 0.5);\n  border-radius: 5px;\n  padding: 2rem; }\n  .grid__row {\n    width: 100%;\n    display: flex;\n    justify-content: space-around; }\n    .grid__row:not(:last-child) {\n      margin-bottom: 2rem; }\n  .grid__cell {\n    width: 10rem;\n    height: 10rem;\n    border-radius: 2px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #ede0c8; }\n    .grid__cell:not(:last-child) {\n      margin-right: 2rem; }\n    .grid__cell div[class^='tile'] {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n    .grid__cell .tile--modified {\n      animation: zoomIn .5s; }\n    .grid__cell .tile--2 {\n      background-color: #D6B05B; }\n    .grid__cell .tile--4 {\n      background-color: #ead7ad; }\n    .grid__cell .tile--8 {\n      background-color: #f88e75; }\n    .grid__cell .tile--16 {\n      background-color: #e0c384; }\n    .grid__cell .tile--32 {\n      background-color: #ead7ad; }\n    .grid__cell .tile--64 {\n      background-color: #e2c78c; }\n    .grid__cell .tile--128 {\n      background-color: #c29a24; }\n    .grid__cell .tile--256 {\n      background-color: #fbbeb0; }\n    .grid__cell .tile--512 {\n      background-color: #c09d95; }\n    .grid__cell .tile--1024 {\n      background-color: #e0907e; }\n    .grid__cell .tile--2048 {\n      background-color: #eec469; }\n\n.header {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem; }\n\nmain {\n  width: 100%; }\n\n.game-actions {\n  text-align: right;\n  margin-bottom: 4rem; }\n  .game-actions__new-game-btn {\n    height: 4rem;\n    width: 10rem;\n    background-color: #bbada0;\n    color: white;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer; }\n\n.game {\n  position: relative; }\n  .game__status {\n    opacity: 0;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(235, 214, 194, 0.5);\n    color: #e0862a;\n    z-index: 10;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all .5s;\n    transform: scale(1.1, 1.1); }\n", ""]);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/MjdiNiJdLCJuYW1lcyI6WyJJTklUSUFMX1RJTEVfQ09VTlQiLCJHUklEX1NJWkUiLCJGSU5BTF9HQU1FX1NDT1JFIiwiQXBwIiwiZ3JpZCIsIkdyaWQiLCJ0aWxlVmFsdWVzIiwiZ2FtZU92ZXIiLCJnYW1lV29uIiwic2V0VXAiLCJpbmRleCIsImFkZE5ld1RpbGUiLCJyZW5kZXJHcmlkIiwicmVzZXRHYW1lU3RhdHVzIiwiZW1wdHlUaWxlcyIsImdldEVtcHR5VGlsZXMiLCJsZW5ndGgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyb3ciLCJjb2wiLCJwdXNoIiwidGlsZXNNb3ZlZCIsInRpbGVSb3ciLCJmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4IiwiYWxyZWFkeUNhbHVjYXRlZFRpbGVJbmRleCIsIm5leHRUaWxlSW5kZXgiLCJhbnlFbXB0eVRpbGVFeGlzdCIsInJlbmRlclRpbGUiLCJkaXNwbGF5R2FtZVN0YXR1cyIsImFsbFRpbGVzT2NjdXBpZWQiLCJjaGVja0lmR2FtZUlzT3ZlciIsInNpemUiLCJ2YWx1ZSIsImNlbGwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcmV2aW91c1ZhbHVlIiwidGV4dENvbnRlbnQiLCJpbm5lckhUTUwiLCJ0aWxlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwic3RhdHVzQ29udGFpbmVyIiwic3R5bGUiLCJvcGFjaXR5IiwiYXBwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ3aGljaCIsIm1vdmVUaWxlc0xlZnQiLCJtb3ZlVGlsZXNVcCIsIm1vdmVUaWxlc1JpZ2h0IiwibW92ZVRpbGVzRG93biIsInVwZGF0ZUdyaWQiLCJnYW1lIiwidG91Y2hTdGFydFgiLCJ0b3VjaFN0YXJ0WSIsInRvdWNoRW5kWCIsInRvdWNoRW5kWSIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsImNoYW5nZWRUb3VjaGVzIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwibWF4IiwiYWJzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMsd0dBQW1EO0FBQ3RGO0FBQ0Es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QSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgLyogKDEwKjEwMC8xNikgKi8gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1MCU7IH0gfVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjNzc2ZTY1OyB9XFxuXFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uaGVhZGVyX19hYm91dCB7XFxuICBmb250LXNpemU6IDEuNnJlbTsgfVxcblxcbi5nYW1lLWFjdGlvbnNfX25ldy1nYW1lLWJ0biB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmdyaWRfX2NlbGwge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uZ2FtZV9fc3RhdHVzIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbkBrZXlmcmFtZXMgem9vbUluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC44KTsgfVxcbiAgOTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMS4xKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpOyB9IH1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjhlZjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogNTZyZW07XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgbWFyZ2luOiA1cmVtIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uZ3JpZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE5LCAxMTAsIDEwMSwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDJyZW07IH1cXG4gIC5ncmlkX19yb3cge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG4gICAgLmdyaWRfX3Jvdzpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtOyB9XFxuICAuZ3JpZF9fY2VsbCB7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZTBjODsgfVxcbiAgICAuZ3JpZF9fY2VsbDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07IH1cXG4gICAgLmdyaWRfX2NlbGwgZGl2W2NsYXNzXj0ndGlsZSddIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgIC5ncmlkX19jZWxsIC50aWxlLS1tb2RpZmllZCB7XFxuICAgICAgYW5pbWF0aW9uOiB6b29tSW4gLjVzOyB9XFxuICAgIC5ncmlkX19jZWxsIC50aWxlLS0yIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZCMDVCOyB9XFxuICAgIC5ncmlkX19jZWxsIC50aWxlLS00IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFkN2FkOyB9XFxuICAgIC5ncmlkX19jZWxsIC50aWxlLS04IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg4ZTc1OyB9XFxuICAgIC5ncmlkX19jZWxsIC50aWxlLS0xNiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwYzM4NDsgfVxcbiAgICAuZ3JpZF9fY2VsbCAudGlsZS0tMzIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWQ3YWQ7IH1cXG4gICAgLmdyaWRfX2NlbGwgLnRpbGUtLTY0IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJjNzhjOyB9XFxuICAgIC5ncmlkX19jZWxsIC50aWxlLS0xMjgge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMjlhMjQ7IH1cXG4gICAgLmdyaWRfX2NlbGwgLnRpbGUtLTI1NiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYmViMDsgfVxcbiAgICAuZ3JpZF9fY2VsbCAudGlsZS0tNTEyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzA5ZDk1OyB9XFxuICAgIC5ncmlkX19jZWxsIC50aWxlLS0xMDI0IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA5MDdlOyB9XFxuICAgIC5ncmlkX19jZWxsIC50aWxlLS0yMDQ4IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVjNDY5OyB9XFxuXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTsgfVxcblxcbm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uZ2FtZS1hY3Rpb25zIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTsgfVxcbiAgLmdhbWUtYWN0aW9uc19fbmV3LWdhbWUtYnRuIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmFkYTA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5nYW1lIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmdhbWVfX3N0YXR1cyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsIDIxNCwgMTk0LCAwLjUpO1xcbiAgICBjb2xvcjogI2UwODYyYTtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTsgfVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsImltcG9ydCBHcmlkIGZyb20gJy4vR3JpZCc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XHJcblxyXG5jb25zdCBJTklUSUFMX1RJTEVfQ09VTlQgPSAyO1xyXG5jb25zdCBHUklEX1NJWkUgPSA0O1xyXG5jb25zdCBGSU5BTF9HQU1FX1NDT1JFID0gMjA0ODtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEdyaWQoR1JJRF9TSVpFKTtcclxuICAgICAgICB0aGlzLnRpbGVWYWx1ZXMgPSBbXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwXVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZVdvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0VXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVcCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgSU5JVElBTF9USUxFX0NPVU5UOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTmV3VGlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyaWQucmVuZGVyR3JpZCh0aGlzLnRpbGVWYWx1ZXMpO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5yZXNldEdhbWVTdGF0dXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGROZXdUaWxlKCkge1xyXG4gICAgICAgIGNvbnN0IGVtcHR5VGlsZXMgPSB0aGlzLmdldEVtcHR5VGlsZXMoKTtcclxuXHJcbiAgICAgICAgaWYgKGVtcHR5VGlsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBlbXB0eVRpbGVzW1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbXB0eVRpbGVzLmxlbmd0aCldXTtcclxuICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSA9IE1hdGgucmFuZG9tKCkgPCAwLjggPyAyIDogNDtcclxuICAgICAgICAgICAgcmV0dXJuIFtyb3csIGNvbF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbXB0eVRpbGVzKCkge1xyXG5cclxuICAgICAgICBjb25zdCBlbXB0eVRpbGVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgR1JJRF9TSVpFOyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBHUklEX1NJWkU7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtcHR5VGlsZXMucHVzaChbcm93LCBjb2xdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZW1wdHlUaWxlcztcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVGlsZXNSaWdodCgpIHtcclxuXHJcbiAgICAgICAgbGV0IHRpbGVzTW92ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgR1JJRF9TSVpFOyByb3crKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpbGVSb3cgPSB0aGlzLnRpbGVWYWx1ZXNbcm93XTtcclxuICAgICAgICAgICAgbGV0IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgbGV0IGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXggPSBHUklEX1NJWkU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSBHUklEX1NJWkUgLSAxOyBjb2wgPj0gMDsgY29sLS0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGlsZVJvd1tjb2xdID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IGNvbCA+IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2wgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuZXh0VGlsZUluZGV4ID0gY29sICsgMTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV4dFRpbGVJbmRleCA8IGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbGVSb3dbbmV4dFRpbGVJbmRleF0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRpbGVJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aWxlUm93W2NvbF0gPT09IHRpbGVSb3dbbmV4dFRpbGVJbmRleF0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVSb3dbbmV4dFRpbGVJbmRleF0gKz0gdGlsZVJvd1tjb2xdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbGVSb3dbbmV4dFRpbGVJbmRleF0gPT09IEZJTkFMX0dBTUVfU0NPUkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVdvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVSb3dbY29sXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSBjb2wgPiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4ID0gbmV4dFRpbGVJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXNNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGlsZVJvd1tjb2xdICE9PSAwICYmIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZVJvd1tmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4XSA9IHRpbGVSb3dbY29sXTtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlUm93W2NvbF0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4IC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlc01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRpbGVzTW92ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRpbGVzTGVmdCgpIHtcclxuICAgICAgICBsZXQgdGlsZXNNb3ZlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBHUklEX1NJWkU7IHJvdysrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGlsZVJvdyA9IHRoaXMudGlsZVZhbHVlc1tyb3ddO1xyXG4gICAgICAgICAgICBsZXQgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IEdSSURfU0laRTtcclxuICAgICAgICAgICAgbGV0IGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXggPSAtMTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8PSBHUklEX1NJWkUgLSAxOyBjb2wrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aWxlUm93W2NvbF0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gY29sIDwgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRUaWxlSW5kZXggPSBjb2wgLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIHdoaWxlIChuZXh0VGlsZUluZGV4ID4gYWxyZWFkeUNhbHVjYXRlZFRpbGVJbmRleCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGlsZVJvd1tuZXh0VGlsZUluZGV4XSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0VGlsZUluZGV4LS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbGVSb3dbY29sXSA9PT0gdGlsZVJvd1tuZXh0VGlsZUluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlUm93W25leHRUaWxlSW5kZXhdICs9IHRpbGVSb3dbY29sXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aWxlUm93W25leHRUaWxlSW5kZXhdID09PSBGSU5BTF9HQU1FX1NDT1JFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVXb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlUm93W2NvbF0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gY29sIDwgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXggPSBuZXh0VGlsZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlc01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aWxlUm93W2NvbF0gIT09IDAgJiYgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA8IEdSSURfU0laRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVSb3dbZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleF0gPSB0aWxlUm93W2NvbF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZVJvd1tjb2xdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZXNNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aWxlc01vdmVkO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUaWxlc1VwKCkge1xyXG4gICAgICAgIGxldCB0aWxlc01vdmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IEdSSURfU0laRTsgY29sKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gR1JJRF9TSVpFO1xyXG4gICAgICAgICAgICBsZXQgYWxyZWFkeUNhbHVjYXRlZFRpbGVJbmRleCA9IC0xO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDw9IEdSSURfU0laRSAtIDE7IHJvdysrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gcm93IDwgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA/IHJvdyA6IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRUaWxlSW5kZXggPSByb3cgLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIHdoaWxlIChuZXh0VGlsZUluZGV4ID4gYWxyZWFkeUNhbHVjYXRlZFRpbGVJbmRleCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlVmFsdWVzW25leHRUaWxlSW5kZXhdW2NvbF0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRpbGVJbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID09PSB0aGlzLnRpbGVWYWx1ZXNbbmV4dFRpbGVJbmRleF1bY29sXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbbmV4dFRpbGVJbmRleF1bY29sXSArPSB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZVZhbHVlc1tuZXh0VGlsZUluZGV4XVtjb2xdID09PSBGSU5BTF9HQU1FX1NDT1JFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVXb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IHJvdyA8IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXggPSBuZXh0VGlsZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlc01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdICE9PSAwICYmIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPCBHUklEX1NJWkUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleF1bY29sXSA9IHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVzTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRpbGVzTW92ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRpbGVzRG93bigpIHtcclxuICAgICAgICBsZXQgdGlsZXNNb3ZlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBHUklEX1NJWkU7IGNvbCsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IC0xO1xyXG4gICAgICAgICAgICBsZXQgYWxyZWFkeUNhbHVjYXRlZFRpbGVJbmRleCA9IEdSSURfU0laRTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IEdSSURfU0laRSAtIDE7IHJvdyA+PSAwOyByb3ctLSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IHJvdyA+IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPyByb3cgOiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuZXh0VGlsZUluZGV4ID0gcm93ICsgMTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV4dFRpbGVJbmRleCA8IGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZVZhbHVlc1tuZXh0VGlsZUluZGV4XVtjb2xdID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUaWxlSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSA9PT0gdGhpcy50aWxlVmFsdWVzW25leHRUaWxlSW5kZXhdW2NvbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW25leHRUaWxlSW5kZXhdW2NvbF0gKz0gdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVWYWx1ZXNbbmV4dFRpbGVJbmRleF1bY29sXSA9PT0gRklOQUxfR0FNRV9TQ09SRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lV29uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSByb3cgPiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID8gcm93IDogZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxyZWFkeUNhbHVjYXRlZFRpbGVJbmRleCA9IG5leHRUaWxlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVzTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gIT09IDAgJiYgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleF1bY29sXSA9IHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVzTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRpbGVzTW92ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJZkdhbWVJc092ZXIoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgR1JJRF9TSVpFOyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBHUklEX1NJWkU7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSA9PT0gdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sICsgMV1cclxuICAgICAgICAgICAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPT09IHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbCAtIDFdXHJcbiAgICAgICAgICAgICAgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tyb3cgKyAxXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID09PSB0aGlzLnRpbGVWYWx1ZXNbcm93ICsgMV1bY29sXVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW3JvdyAtIDFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPT09IHRoaXMudGlsZVZhbHVlc1tyb3cgLSAxXVtjb2xdXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVHcmlkKHRpbGVzTW92ZWQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYW55RW1wdHlUaWxlRXhpc3QgPSB0aGlzLmdldEVtcHR5VGlsZXMoKS5sZW5ndGggIT09IDA7XHJcblxyXG4gICAgICAgIGlmICh0aWxlc01vdmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5yZW5kZXJHcmlkKHRoaXMudGlsZVZhbHVlcyk7XHJcbiAgICAgICAgICAgIGlmIChhbnlFbXB0eVRpbGVFeGlzdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IHRoaXMuYWRkTmV3VGlsZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnJlbmRlclRpbGUocm93LCBjb2wsIHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5nYW1lV29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5kaXNwbGF5R2FtZVN0YXR1cyh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFsbFRpbGVzT2NjdXBpZWQgPSB0aGlzLmdldEVtcHR5VGlsZXMoKS5sZW5ndGggPT09IDA7XHJcblxyXG4gICAgICAgIGlmIChhbGxUaWxlc09jY3VwaWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmNoZWNrSWZHYW1lSXNPdmVyKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLmRpc3BsYXlHYW1lU3RhdHVzKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcclxuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckdyaWQodGlsZVZhbHVlcykge1xyXG5cclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnNpemU7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuc2l6ZTsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGlsZShyb3csIGNvbCwgdGlsZVZhbHVlc1tyb3ddW2NvbF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRpbGUocm93LCBjb2wsIHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ncmlkX19jZWxsLS0ke3Jvd30tJHtjb2x9YCk7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9ICtjZWxsLnRleHRDb250ZW50O1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT09IDAgJiYgdmFsdWUgIT09IHByZXZpb3VzVmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoYHRpbGUtLSR7dmFsdWV9YCwgJ3RpbGUtLW1vZGlmaWVkJylcclxuICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0aWxlKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjZWxsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlHYW1lU3RhdHVzKGdhbWVXb24pIHtcclxuICAgICAgICBjb25zdCBzdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ2FtZV9fc3RhdHVzYCk7XHJcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLnRleHRDb250ZW50ID0gZ2FtZVdvbiA/ICdZb3UgV29uIScgOiAnR2FtZSBPdmVyISc7XHJcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0R2FtZVN0YXR1cygpIHtcclxuICAgICAgICBjb25zdCBzdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ2FtZV9fc3RhdHVzYCk7XHJcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgc3RhdHVzQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcclxuXHJcbmxldCBhcHAgPSBuZXcgQXBwKCk7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCB0aWxlc01vdmVkID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKGV2ZW50LndoaWNoID09PSAzNykge1xyXG4gICAgICAgIHRpbGVzTW92ZWQgPSBhcHAubW92ZVRpbGVzTGVmdCgpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC53aGljaCA9PT0gMzgpIHtcclxuICAgICAgICB0aWxlc01vdmVkID0gYXBwLm1vdmVUaWxlc1VwKCk7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LndoaWNoID09PSAzOSkge1xyXG4gICAgICAgIHRpbGVzTW92ZWQgPSBhcHAubW92ZVRpbGVzUmlnaHQoKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQud2hpY2ggPT09IDQwKSB7XHJcbiAgICAgICAgdGlsZXNNb3ZlZCA9IGFwcC5tb3ZlVGlsZXNEb3duKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBhcHAudXBkYXRlR3JpZCh0aWxlc01vdmVkKTtcclxufSk7XHJcblxyXG5cclxuY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XHJcblxyXG5sZXQgdG91Y2hTdGFydFggPSBudWxsLFxyXG4gICAgdG91Y2hTdGFydFkgPSBudWxsLFxyXG4gICAgdG91Y2hFbmRYID0gbnVsbCxcclxuICAgIHRvdWNoRW5kWSA9IG51bGw7XHJcblxyXG5cclxuZ2FtZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHRvdWNoU3RhcnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgdG91Y2hTdGFydFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XHJcbn0pO1xyXG5cclxuZ2FtZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5nYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICBsZXQgdGlsZXNNb3ZlZCA9IGZhbHNlO1xyXG5cclxuICAgIHRvdWNoRW5kWCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICB0b3VjaEVuZFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xyXG5cclxuICAgIGxldCBkaXN0YW5jZVggPSB0b3VjaEVuZFggLSB0b3VjaFN0YXJ0WDtcclxuICAgIGxldCBkaXN0YW5jZVkgPSB0b3VjaEVuZFkgLSB0b3VjaFN0YXJ0WTtcclxuXHJcbiAgICBpZiAoTWF0aC5tYXgoTWF0aC5hYnMoZGlzdGFuY2VYKSwgTWF0aC5hYnMoZGlzdGFuY2VZKSkgPiAxMCkge1xyXG5cclxuICAgICAgICB0aWxlc01vdmVkID0gTWF0aC5hYnMoZGlzdGFuY2VYKSA+IE1hdGguYWJzKGRpc3RhbmNlWSkgP1xyXG4gICAgICAgICAgICAoZGlzdGFuY2VYID4gMCA/IGFwcC5tb3ZlVGlsZXNSaWdodCgpIDogYXBwLm1vdmVUaWxlc0xlZnQoKSlcclxuICAgICAgICAgICAgOiAoZGlzdGFuY2VZID4gMCA/IGFwcC5tb3ZlVGlsZXNEb3duKCkgOiBhcHAubW92ZVRpbGVzVXAoKSk7XHJcblxyXG4gICAgICAgIGFwcC51cGRhdGVHcmlkKHRpbGVzTW92ZWQpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1hY3Rpb25zX19uZXctZ2FtZS1idG4nKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGFwcCA9IG5ldyBBcHAoKTtcclxuICAgIH0pXHJcbiIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=