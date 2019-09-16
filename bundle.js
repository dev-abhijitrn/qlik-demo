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
exports.push([module.i, "html {\n  font-size: 62.5%;\n  /* (10*100/16) */ }\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  color: #776e65; }\n\n.header__title {\n  font-size: 6rem;\n  font-weight: bold; }\n\n.header__about {\n  font-size: 1.6rem; }\n\n.game-actions__new-game-btn {\n  font-size: 1.6rem;\n  font-weight: bold; }\n\n.grid__cell {\n  font-size: 3rem;\n  font-weight: bold; }\n\n.game__status {\n  font-size: 5rem;\n  font-weight: bold;\n  color: #c89765;\n  text-transform: uppercase; }\n\n@keyframes zoomIn {\n  0% {\n    transform: scaleY(0.7); }\n  100% {\n    transform: scaleY(1); } }\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  background-color: #faf8ef;\n  height: 100vh;\n  width: 56rem;\n  padding: 3rem;\n  margin: 5rem auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.grid {\n  width: 100%;\n  background-color: rgba(119, 110, 101, 0.5);\n  border-radius: 5px;\n  padding: 2rem; }\n  .grid__row {\n    width: 100%;\n    display: flex;\n    justify-content: space-around; }\n    .grid__row:not(:last-child) {\n      margin-bottom: 2rem; }\n  .grid__cell {\n    width: 10rem;\n    height: 10rem;\n    border-radius: 2px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #ede0c8; }\n    .grid__cell:not(:last-child) {\n      margin-right: 2rem; }\n    .grid__cell div[class^='tile'] {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n    .grid__cell .tile--modified {\n      animation: zoomIn .5s; }\n    .grid__cell .tile--2 {\n      background-color: #D6B05B; }\n    .grid__cell .tile--4 {\n      background-color: #ead7ad; }\n    .grid__cell .tile--8 {\n      background-color: #f88e75; }\n    .grid__cell .tile--16 {\n      background-color: #e0c384; }\n    .grid__cell .tile--32 {\n      background-color: #ead7ad; }\n    .grid__cell .tile--64 {\n      background-color: #e2c78c; }\n    .grid__cell .tile--128 {\n      background-color: #c29a24; }\n    .grid__cell .tile--256 {\n      background-color: #fbbeb0; }\n    .grid__cell .tile--512 {\n      background-color: #c09d95; }\n    .grid__cell .tile--1024 {\n      background-color: #e0907e; }\n    .grid__cell .tile--2048 {\n      background-color: #eec469; }\n\n.header {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem; }\n\nmain {\n  width: 100%; }\n\n.game-actions {\n  text-align: right;\n  margin-bottom: 4rem; }\n  .game-actions__new-game-btn {\n    height: 4rem;\n    width: 10rem;\n    background-color: #bbada0;\n    color: white;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer; }\n\n.game {\n  position: relative; }\n  .game__status {\n    opacity: 0;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(235, 214, 194, 0.5);\n    z-index: 10;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all .5s;\n    transform: scale(1.1, 1.1); }\n", ""]);


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
    this.registerEvents();
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
      console.log('checkIfGameIsOver');

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
      console.log('anyEmptyTileExist: ', anyEmptyTileExist);
      console.log('tilesMoved: ', tilesMoved);

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
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      var _this = this;

      document.addEventListener('keydown', function (event) {
        event.preventDefault();
        var tilesMoved = false;

        if (event.which === 37) {
          tilesMoved = _this.moveTilesLeft();
        } else if (event.which === 38) {
          tilesMoved = _this.moveTilesUp();
        } else if (event.which === 39) {
          tilesMoved = _this.moveTilesRight();
        } else if (event.which === 40) {
          tilesMoved = _this.moveTilesDown();
        } else {
          return;
        }

        _this.updateGrid(tilesMoved);
      });
      document.querySelector('.game-actions__new-game-btn').addEventListener('click', function () {
        _this.tileValues = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

        _this.setUp();
      });
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
        console.log(row, col, value, previousValue);
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

new _App__WEBPACK_IMPORTED_MODULE_0__["default"]();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/MjdiNiJdLCJuYW1lcyI6WyJJTklUSUFMX1RJTEVfQ09VTlQiLCJHUklEX1NJWkUiLCJGSU5BTF9HQU1FX1NDT1JFIiwiQXBwIiwiZ3JpZCIsIkdyaWQiLCJ0aWxlVmFsdWVzIiwiZ2FtZU92ZXIiLCJnYW1lV29uIiwic2V0VXAiLCJyZWdpc3RlckV2ZW50cyIsImluZGV4IiwiYWRkTmV3VGlsZSIsInJlbmRlckdyaWQiLCJyZXNldEdhbWVTdGF0dXMiLCJlbXB0eVRpbGVzIiwiZ2V0RW1wdHlUaWxlcyIsImxlbmd0aCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJvdyIsImNvbCIsInB1c2giLCJ0aWxlc01vdmVkIiwidGlsZVJvdyIsImZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXgiLCJhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4IiwibmV4dFRpbGVJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJhbnlFbXB0eVRpbGVFeGlzdCIsInJlbmRlclRpbGUiLCJkaXNwbGF5R2FtZVN0YXR1cyIsImFsbFRpbGVzT2NjdXBpZWQiLCJjaGVja0lmR2FtZUlzT3ZlciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ3aGljaCIsIm1vdmVUaWxlc0xlZnQiLCJtb3ZlVGlsZXNVcCIsIm1vdmVUaWxlc1JpZ2h0IiwibW92ZVRpbGVzRG93biIsInVwZGF0ZUdyaWQiLCJxdWVyeVNlbGVjdG9yIiwic2l6ZSIsInZhbHVlIiwiY2VsbCIsInByZXZpb3VzVmFsdWUiLCJ0ZXh0Q29udGVudCIsImlubmVySFRNTCIsInRpbGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJzdGF0dXNDb250YWluZXIiLCJzdHlsZSIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsU0FBUyxxQkFBcUIsdUJBQXVCLFVBQVUsc0NBQXNDLHFCQUFxQixtQkFBbUIsRUFBRSxvQkFBb0Isb0JBQW9CLHNCQUFzQixFQUFFLG9CQUFvQixzQkFBc0IsRUFBRSxpQ0FBaUMsc0JB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QTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzSkFBMkU7O0FBRWhHO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgLyogKDEwKjEwMC8xNikgKi8gfVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjNzc2ZTY1OyB9XFxuXFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uaGVhZGVyX19hYm91dCB7XFxuICBmb250LXNpemU6IDEuNnJlbTsgfVxcblxcbi5nYW1lLWFjdGlvbnNfX25ldy1nYW1lLWJ0biB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmdyaWRfX2NlbGwge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uZ2FtZV9fc3RhdHVzIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNjODk3NjU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuQGtleWZyYW1lcyB6b29tSW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjcpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7IH0gfVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmOGVmO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiA1NnJlbTtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBtYXJnaW46IDVyZW0gYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5ncmlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTksIDExMCwgMTAxLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMnJlbTsgfVxcbiAgLmdyaWRfX3JvdyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcbiAgICAuZ3JpZF9fcm93Om5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07IH1cXG4gIC5ncmlkX19jZWxsIHtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlMGM4OyB9XFxuICAgIC5ncmlkX19jZWxsOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMnJlbTsgfVxcbiAgICAuZ3JpZF9fY2VsbCBkaXZbY2xhc3NePSd0aWxlJ10ge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgLmdyaWRfX2NlbGwgLnRpbGUtLW1vZGlmaWVkIHtcXG4gICAgICBhbmltYXRpb246IHpvb21JbiAuNXM7IH1cXG4gICAgLmdyaWRfX2NlbGwgLnRpbGUtLTIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNENkIwNUI7IH1cXG4gICAgLmdyaWRfX2NlbGwgLnRpbGUtLTQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWQ3YWQ7IH1cXG4gICAgLmdyaWRfX2NlbGwgLnRpbGUtLTgge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmODhlNzU7IH1cXG4gICAgLmdyaWRfX2NlbGwgLnRpbGUtLTE2IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjMzg0OyB9XFxuICAgIC5ncmlkX19jZWxsIC50aWxlLS0zMiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZDdhZDsgfVxcbiAgICAuZ3JpZF9fY2VsbCAudGlsZS0tNjQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmM3OGM7IH1cXG4gICAgLmdyaWRfX2NlbGwgLnRpbGUtLTEyOCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MyOWEyNDsgfVxcbiAgICAuZ3JpZF9fY2VsbCAudGlsZS0tMjU2IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJiZWIwOyB9XFxuICAgIC5ncmlkX19jZWxsIC50aWxlLS01MTIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMDlkOTU7IH1cXG4gICAgLmdyaWRfX2NlbGwgLnRpbGUtLTEwMjQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMDkwN2U7IH1cXG4gICAgLmdyaWRfX2NlbGwgLnRpbGUtLTIwNDgge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWM0Njk7IH1cXG5cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtOyB9XFxuXFxubWFpbiB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5nYW1lLWFjdGlvbnMge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtYXJnaW4tYm90dG9tOiA0cmVtOyB9XFxuICAuZ2FtZS1hY3Rpb25zX19uZXctZ2FtZS1idG4ge1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYWRhMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmdhbWUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuZ2FtZV9fc3RhdHVzIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwgMjE0LCAxOTQsIDAuNSk7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7IH1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJpbXBvcnQgR3JpZCBmcm9tICcuL0dyaWQnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xyXG5cclxuY29uc3QgSU5JVElBTF9USUxFX0NPVU5UID0gMjtcclxuY29uc3QgR1JJRF9TSVpFID0gNDtcclxuY29uc3QgRklOQUxfR0FNRV9TQ09SRSA9IDIwNDg7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKEdSSURfU0laRSk7XHJcbiAgICAgICAgdGhpcy50aWxlVmFsdWVzID0gW1xyXG4gICAgICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMCwgMF1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdhbWVXb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldFVwKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVwKCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBJTklUSUFMX1RJTEVfQ09VTlQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5hZGROZXdUaWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ3JpZC5yZW5kZXJHcmlkKHRoaXMudGlsZVZhbHVlcyk7XHJcbiAgICAgICAgdGhpcy5ncmlkLnJlc2V0R2FtZVN0YXR1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE5ld1RpbGUoKSB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlUaWxlcyA9IHRoaXMuZ2V0RW1wdHlUaWxlcygpO1xyXG5cclxuICAgICAgICBpZiAoZW1wdHlUaWxlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IGVtcHR5VGlsZXNbW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVtcHR5VGlsZXMubGVuZ3RoKV1dO1xyXG4gICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID0gTWF0aC5yYW5kb20oKSA8IDAuOCA/IDIgOiA0O1xyXG4gICAgICAgICAgICByZXR1cm4gW3JvdywgY29sXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVtcHR5VGlsZXMoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtcHR5VGlsZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBHUklEX1NJWkU7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IEdSSURfU0laRTsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlUaWxlcy5wdXNoKFtyb3csIGNvbF0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVtcHR5VGlsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRpbGVzUmlnaHQoKSB7XHJcblxyXG4gICAgICAgIGxldCB0aWxlc01vdmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IEdSSURfU0laRTsgcm93KyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aWxlUm93ID0gdGhpcy50aWxlVmFsdWVzW3Jvd107XHJcbiAgICAgICAgICAgIGxldCBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIGxldCBhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4ID0gR1JJRF9TSVpFO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gR1JJRF9TSVpFIC0gMTsgY29sID49IDA7IGNvbC0tKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpbGVSb3dbY29sXSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSBjb2wgPiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFRpbGVJbmRleCA9IGNvbCArIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5leHRUaWxlSW5kZXggPCBhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aWxlUm93W25leHRUaWxlSW5kZXhdID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUaWxlSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGlsZVJvd1tjb2xdID09PSB0aWxlUm93W25leHRUaWxlSW5kZXhdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlUm93W25leHRUaWxlSW5kZXhdICs9IHRpbGVSb3dbY29sXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aWxlUm93W25leHRUaWxlSW5kZXhdID09PSBGSU5BTF9HQU1FX1NDT1JFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVXb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlUm93W2NvbF0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gY29sID4gZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxyZWFkeUNhbHVjYXRlZFRpbGVJbmRleCA9IG5leHRUaWxlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVzTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpbGVSb3dbY29sXSAhPT0gMCAmJiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVSb3dbZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleF0gPSB0aWxlUm93W2NvbF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZVJvd1tjb2xdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZXNNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aWxlc01vdmVkO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUaWxlc0xlZnQoKSB7XHJcbiAgICAgICAgbGV0IHRpbGVzTW92ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgR1JJRF9TSVpFOyByb3crKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpbGVSb3cgPSB0aGlzLnRpbGVWYWx1ZXNbcm93XTtcclxuICAgICAgICAgICAgbGV0IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSBHUklEX1NJWkU7XHJcbiAgICAgICAgICAgIGxldCBhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4ID0gLTE7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPD0gR1JJRF9TSVpFIC0gMTsgY29sKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGlsZVJvd1tjb2xdID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IGNvbCA8IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPyBjb2wgOiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuZXh0VGlsZUluZGV4ID0gY29sIC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV4dFRpbGVJbmRleCA+IGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbGVSb3dbbmV4dFRpbGVJbmRleF0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRpbGVJbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aWxlUm93W2NvbF0gPT09IHRpbGVSb3dbbmV4dFRpbGVJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVJvd1tuZXh0VGlsZUluZGV4XSArPSB0aWxlUm93W2NvbF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGlsZVJvd1tuZXh0VGlsZUluZGV4XSA9PT0gRklOQUxfR0FNRV9TQ09SRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lV29uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVJvd1tjb2xdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IGNvbCA8IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPyBjb2wgOiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4ID0gbmV4dFRpbGVJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXNNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGlsZVJvd1tjb2xdICE9PSAwICYmIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPCBHUklEX1NJWkUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlUm93W2ZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXhdID0gdGlsZVJvd1tjb2xdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVSb3dbY29sXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVzTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGlsZXNNb3ZlZDtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVGlsZXNVcCgpIHtcclxuICAgICAgICBsZXQgdGlsZXNNb3ZlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBHUklEX1NJWkU7IGNvbCsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IEdSSURfU0laRTtcclxuICAgICAgICAgICAgbGV0IGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXggPSAtMTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8PSBHUklEX1NJWkUgLSAxOyByb3crKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IHJvdyA8IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPyByb3cgOiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuZXh0VGlsZUluZGV4ID0gcm93IC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV4dFRpbGVJbmRleCA+IGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZVZhbHVlc1tuZXh0VGlsZUluZGV4XVtjb2xdID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUaWxlSW5kZXgtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSA9PT0gdGhpcy50aWxlVmFsdWVzW25leHRUaWxlSW5kZXhdW2NvbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW25leHRUaWxlSW5kZXhdW2NvbF0gKz0gdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVWYWx1ZXNbbmV4dFRpbGVJbmRleF1bY29sXSA9PT0gRklOQUxfR0FNRV9TQ09SRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lV29uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSByb3cgPCBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID8gcm93IDogZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxyZWFkeUNhbHVjYXRlZFRpbGVJbmRleCA9IG5leHRUaWxlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVzTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gIT09IDAgJiYgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA8IEdSSURfU0laRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4XVtjb2xdID0gdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZXNNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGlsZXNNb3ZlZDtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVGlsZXNEb3duKCkge1xyXG4gICAgICAgIGxldCB0aWxlc01vdmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IEdSSURfU0laRTsgY29sKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIGxldCBhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4ID0gR1JJRF9TSVpFO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gR1JJRF9TSVpFIC0gMTsgcm93ID49IDA7IHJvdy0tKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gcm93ID4gZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA/IHJvdyA6IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRUaWxlSW5kZXggPSByb3cgKyAxO1xyXG5cclxuICAgICAgICAgICAgICAgIHdoaWxlIChuZXh0VGlsZUluZGV4IDwgYWxyZWFkeUNhbHVjYXRlZFRpbGVJbmRleCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlVmFsdWVzW25leHRUaWxlSW5kZXhdW2NvbF0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRpbGVJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID09PSB0aGlzLnRpbGVWYWx1ZXNbbmV4dFRpbGVJbmRleF1bY29sXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbbmV4dFRpbGVJbmRleF1bY29sXSArPSB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZVZhbHVlc1tuZXh0VGlsZUluZGV4XVtjb2xdID09PSBGSU5BTF9HQU1FX1NDT1JFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVXb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IHJvdyA+IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPyByb3cgOiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4ID0gbmV4dFRpbGVJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXNNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSAhPT0gMCAmJiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4XVtjb2xdID0gdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZXNNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGlsZXNNb3ZlZDtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lmR2FtZUlzT3ZlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tJZkdhbWVJc092ZXInKVxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IEdSSURfU0laRTsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgR1JJRF9TSVpFOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPT09IHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbCArIDFdXHJcbiAgICAgICAgICAgICAgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID09PSB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2wgLSAxXVxyXG4gICAgICAgICAgICAgICAgICAgIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbcm93ICsgMV0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSA9PT0gdGhpcy50aWxlVmFsdWVzW3JvdyArIDFdW2NvbF1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tyb3cgLSAxXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID09PSB0aGlzLnRpbGVWYWx1ZXNbcm93IC0gMV1bY29sXVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlR3JpZCh0aWxlc01vdmVkKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFueUVtcHR5VGlsZUV4aXN0ID0gdGhpcy5nZXRFbXB0eVRpbGVzKCkubGVuZ3RoICE9PSAwO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnYW55RW1wdHlUaWxlRXhpc3Q6ICcsIGFueUVtcHR5VGlsZUV4aXN0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aWxlc01vdmVkOiAnLCB0aWxlc01vdmVkKVxyXG4gICAgICAgIGlmICh0aWxlc01vdmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5yZW5kZXJHcmlkKHRoaXMudGlsZVZhbHVlcyk7XHJcbiAgICAgICAgICAgIGlmIChhbnlFbXB0eVRpbGVFeGlzdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IHRoaXMuYWRkTmV3VGlsZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnJlbmRlclRpbGUocm93LCBjb2wsIHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5nYW1lV29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5kaXNwbGF5R2FtZVN0YXR1cyh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFsbFRpbGVzT2NjdXBpZWQgPSB0aGlzLmdldEVtcHR5VGlsZXMoKS5sZW5ndGggPT09IDA7XHJcblxyXG4gICAgICAgIGlmIChhbGxUaWxlc09jY3VwaWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmNoZWNrSWZHYW1lSXNPdmVyKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLmRpc3BsYXlHYW1lU3RhdHVzKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckV2ZW50cygpIHtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsZXQgdGlsZXNNb3ZlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAzNykge1xyXG4gICAgICAgICAgICAgICAgdGlsZXNNb3ZlZCA9IHRoaXMubW92ZVRpbGVzTGVmdCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LndoaWNoID09PSAzOCkge1xyXG4gICAgICAgICAgICAgICAgdGlsZXNNb3ZlZCA9IHRoaXMubW92ZVRpbGVzVXAoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC53aGljaCA9PT0gMzkpIHtcclxuICAgICAgICAgICAgICAgIHRpbGVzTW92ZWQgPSB0aGlzLm1vdmVUaWxlc1JpZ2h0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQud2hpY2ggPT09IDQwKSB7XHJcbiAgICAgICAgICAgICAgICB0aWxlc01vdmVkID0gdGhpcy5tb3ZlVGlsZXNEb3duKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlR3JpZCh0aWxlc01vdmVkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtYWN0aW9uc19fbmV3LWdhbWUtYnRuJylcclxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgWzAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VXAoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQge1xyXG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyR3JpZCh0aWxlVmFsdWVzKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuc2l6ZTsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5zaXplOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUaWxlKHJvdywgY29sLCB0aWxlVmFsdWVzW3Jvd11bY29sXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVGlsZShyb3csIGNvbCwgdmFsdWUpIHtcclxuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdyaWRfX2NlbGwtLSR7cm93fS0ke2NvbH1gKTtcclxuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gK2NlbGwudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gMCAmJiB2YWx1ZSAhPT0gcHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyb3csIGNvbCwgdmFsdWUsIHByZXZpb3VzVmFsdWUpXHJcblxyXG4gICAgICAgICAgICBjZWxsLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGB0aWxlLS0ke3ZhbHVlfWAsICd0aWxlLS1tb2RpZmllZCcpXHJcbiAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGlsZSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5R2FtZVN0YXR1cyhnYW1lV29uKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVfX3N0YXR1c2ApO1xyXG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci50ZXh0Q29udGVudCA9IGdhbWVXb24gPyAnWW91IFdvbiEnIDogJ0dhbWUgT3ZlciEnO1xyXG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEdhbWVTdGF0dXMoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVfX3N0YXR1c2ApO1xyXG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XHJcblxyXG5uZXcgQXBwKCk7IiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==