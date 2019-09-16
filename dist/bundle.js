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
exports.push([module.i, "html {\n  font-size: 62.5%;\n  /* (10*100/16) */ }\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  color: #776e65; }\n\n.header__title {\n  font-size: 6rem;\n  font-weight: bold; }\n\n.header__about {\n  font-size: 1.6rem; }\n\n.game-actions__new-game-btn {\n  font-size: 1.6rem;\n  font-weight: bold; }\n\n.grid__cell {\n  font-size: 3rem;\n  font-weight: bold; }\n\n.game__status {\n  font-size: 5rem;\n  font-weight: bold;\n  color: #c89765;\n  text-transform: uppercase; }\n\n@keyframes zoomIn {\n  0% {\n    opacity: 0.1;\n    transform: scaleY(0.7); }\n  100% {\n    opacity: 1;\n    transform: scaleY(1); } }\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  background-color: #faf8ef;\n  height: 100vh;\n  width: 56rem;\n  padding: 3rem;\n  margin: 5rem auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.grid {\n  width: 100%;\n  background-color: rgba(119, 110, 101, 0.5);\n  border-radius: 5px;\n  padding: 2rem; }\n  .grid__row {\n    width: 100%;\n    display: flex;\n    justify-content: space-around; }\n    .grid__row:not(:last-child) {\n      margin-bottom: 2rem; }\n  .grid__cell {\n    width: 10rem;\n    height: 10rem;\n    border-radius: 2px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #ede0c8; }\n    .grid__cell:not(:last-child) {\n      margin-right: 2rem; }\n    .grid__cell--modified {\n      animation: zoomIn .8s; }\n    .grid__cell--2 {\n      background-color: #D6B05B; }\n    .grid__cell--4 {\n      background-color: #ead7ad; }\n    .grid__cell--8 {\n      background-color: #f88e75; }\n    .grid__cell--16 {\n      background-color: #e0c384; }\n    .grid__cell--32 {\n      background-color: #ead7ad; }\n    .grid__cell--64 {\n      background-color: #e2c78c; }\n    .grid__cell--128 {\n      background-color: #c29a24; }\n    .grid__cell--256 {\n      background-color: #fbbeb0; }\n    .grid__cell--512 {\n      background-color: #c09d95; }\n    .grid__cell--1024 {\n      background-color: #e0907e; }\n    .grid__cell--2048 {\n      background-color: #eec469; }\n\n.header {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem; }\n\nmain {\n  width: 100%; }\n\n.game-actions {\n  text-align: right;\n  margin-bottom: 4rem; }\n  .game-actions__new-game-btn {\n    height: 4rem;\n    width: 10rem;\n    background-color: #bbada0;\n    color: white;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer; }\n\n.game {\n  position: relative; }\n  .game__status {\n    opacity: 0;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(235, 214, 194, 0.5);\n    z-index: 10;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all .5s;\n    transform: scale(1.1, 1.1); }\n", ""]);


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
      }
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
          this.addNewTile();
          this.grid.renderGrid(this.tileValues);
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
          var cell = document.querySelector(".grid__cell--".concat(row, "-").concat(col));
          var previousValue = cell.textContent;
          var currentValue = tileValues[row][col];
          cell.classList.remove('grid__cell--modified');

          if (currentValue !== 0 && previousValue !== currentValue) {
            cell.textContent = currentValue;
            cell.classList.remove("grid__cell--".concat(previousValue));
            cell.classList.add("grid__cell--".concat(currentValue), 'grid__cell--modified');
          } else if (currentValue === 0) {
            cell.classList.remove("grid__cell--".concat(previousValue));
            cell.textContent = "";
          }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/MjdiNiJdLCJuYW1lcyI6WyJJTklUSUFMX1RJTEVfQ09VTlQiLCJHUklEX1NJWkUiLCJGSU5BTF9HQU1FX1NDT1JFIiwiQXBwIiwiZ3JpZCIsIkdyaWQiLCJ0aWxlVmFsdWVzIiwiZ2FtZU92ZXIiLCJnYW1lV29uIiwic2V0VXAiLCJyZWdpc3RlckV2ZW50cyIsImluZGV4IiwiYWRkTmV3VGlsZSIsInJlbmRlckdyaWQiLCJyZXNldEdhbWVTdGF0dXMiLCJlbXB0eVRpbGVzIiwiZ2V0RW1wdHlUaWxlcyIsImxlbmd0aCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJvdyIsImNvbCIsInB1c2giLCJ0aWxlc01vdmVkIiwidGlsZVJvdyIsImZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXgiLCJhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4IiwibmV4dFRpbGVJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJhbnlFbXB0eVRpbGVFeGlzdCIsImRpc3BsYXlHYW1lU3RhdHVzIiwiYWxsVGlsZXNPY2N1cGllZCIsImNoZWNrSWZHYW1lSXNPdmVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndoaWNoIiwibW92ZVRpbGVzTGVmdCIsIm1vdmVUaWxlc1VwIiwibW92ZVRpbGVzUmlnaHQiLCJtb3ZlVGlsZXNEb3duIiwidXBkYXRlR3JpZCIsInF1ZXJ5U2VsZWN0b3IiLCJzaXplIiwiY2VsbCIsInByZXZpb3VzVmFsdWUiLCJ0ZXh0Q29udGVudCIsImN1cnJlbnRWYWx1ZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInN0YXR1c0NvbnRhaW5lciIsInN0eWxlIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDJCQUEyQixtQkFBTyxDQUFDLHdHQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUyxTQUFTLHFCQUFxQix1QkFBdUIsVUFBVSxzQ0FBc0MscUJBQXFCLG1CQUFtQixFQUFFLG9CQUFvQixvQkFBb0Isc0JBQXNCLEVBQUUsb0JBQW9CLHNCQUFzQixFQUFFLGlDQUFpQyxzQkFBc0Isc0JBQXNCLEVBQUUsaUJBQWlCLG9CQUFvQixzQkFBc0IsRUFBRSxtQkFB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LFNBQUwsQ0FBZUMsTUFBZix1QkFBcUNKLGFBQXJDO0FBQ0FELGdCQUFJLENBQUNFLFdBQUwsR0FBbUIsRUFBbkI7QUFDSDtBQUNKO0FBQ0o7QUFFSjs7O3NDQUVpQnpDLE8sRUFBUztBQUN2QixVQUFNOEMsZUFBZSxHQUFHbkIsUUFBUSxDQUFDVSxhQUFULGlCQUF4QjtBQUNBUyxxQkFBZSxDQUFDTCxXQUFoQixHQUE4QnpDLE9BQU8sR0FBRyxVQUFILEdBQWdCLFlBQXJEO0FBQ0E4QyxxQkFBZSxDQUFDQyxLQUFoQixDQUFzQkMsT0FBdEIsR0FBZ0MsQ0FBaEM7QUFDSDs7O3NDQUVpQjtBQUNkLFVBQU1GLGVBQWUsR0FBR25CLFFBQVEsQ0FBQ1UsYUFBVCxpQkFBeEI7QUFDQVMscUJBQWUsQ0FBQ0wsV0FBaEIsR0FBOEIsRUFBOUI7QUFDQUsscUJBQWUsQ0FBQ0MsS0FBaEIsQ0FBc0JDLE9BQXRCLEdBQWdDLENBQWhDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDTDtBQUFBO0FBQUE7QUFFQSxJQUFJckQsNENBQUosRzs7Ozs7Ozs7Ozs7QUNGQSxjQUFjLG1CQUFPLENBQUMsOE1BQW9HOztBQUUxSDtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzSkFBMkU7O0FBRWhHO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgLyogKDEwKjEwMC8xNikgKi8gfVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjNzc2ZTY1OyB9XFxuXFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uaGVhZGVyX19hYm91dCB7XFxuICBmb250LXNpemU6IDEuNnJlbTsgfVxcblxcbi5nYW1lLWFjdGlvbnNfX25ldy1nYW1lLWJ0biB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmdyaWRfX2NlbGwge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uZ2FtZV9fc3RhdHVzIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNjODk3NjU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuQGtleWZyYW1lcyB6b29tSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwLjE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNyk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTsgfSB9XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY4ZWY7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDU2cmVtO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIG1hcmdpbjogNXJlbSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExOSwgMTEwLCAxMDEsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAycmVtOyB9XFxuICAuZ3JpZF9fcm93IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuICAgIC5ncmlkX19yb3c6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTsgfVxcbiAgLmdyaWRfX2NlbGwge1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGUwYzg7IH1cXG4gICAgLmdyaWRfX2NlbGw6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtOyB9XFxuICAgIC5ncmlkX19jZWxsLS1tb2RpZmllZCB7XFxuICAgICAgYW5pbWF0aW9uOiB6b29tSW4gLjhzOyB9XFxuICAgIC5ncmlkX19jZWxsLS0yIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZCMDVCOyB9XFxuICAgIC5ncmlkX19jZWxsLS00IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFkN2FkOyB9XFxuICAgIC5ncmlkX19jZWxsLS04IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg4ZTc1OyB9XFxuICAgIC5ncmlkX19jZWxsLS0xNiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwYzM4NDsgfVxcbiAgICAuZ3JpZF9fY2VsbC0tMzIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWQ3YWQ7IH1cXG4gICAgLmdyaWRfX2NlbGwtLTY0IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJjNzhjOyB9XFxuICAgIC5ncmlkX19jZWxsLS0xMjgge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMjlhMjQ7IH1cXG4gICAgLmdyaWRfX2NlbGwtLTI1NiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYmViMDsgfVxcbiAgICAuZ3JpZF9fY2VsbC0tNTEyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzA5ZDk1OyB9XFxuICAgIC5ncmlkX19jZWxsLS0xMDI0IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA5MDdlOyB9XFxuICAgIC5ncmlkX19jZWxsLS0yMDQ4IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVjNDY5OyB9XFxuXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTsgfVxcblxcbm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uZ2FtZS1hY3Rpb25zIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTsgfVxcbiAgLmdhbWUtYWN0aW9uc19fbmV3LWdhbWUtYnRuIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmFkYTA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5nYW1lIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmdhbWVfX3N0YXR1cyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsIDIxNCwgMTk0LCAwLjUpO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpOyB9XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwiaW1wb3J0IEdyaWQgZnJvbSAnLi9HcmlkJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcclxuXHJcbmNvbnN0IElOSVRJQUxfVElMRV9DT1VOVCA9IDI7XHJcbmNvbnN0IEdSSURfU0laRSA9IDQ7XHJcbmNvbnN0IEZJTkFMX0dBTUVfU0NPUkUgPSAyMDQ4O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZChHUklEX1NJWkUpO1xyXG4gICAgICAgIHRoaXMudGlsZVZhbHVlcyA9IFtcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDBdXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nYW1lV29uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXRVcCgpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVcCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgSU5JVElBTF9USUxFX0NPVU5UOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTmV3VGlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyaWQucmVuZGVyR3JpZCh0aGlzLnRpbGVWYWx1ZXMpO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5yZXNldEdhbWVTdGF0dXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGROZXdUaWxlKCkge1xyXG4gICAgICAgIGNvbnN0IGVtcHR5VGlsZXMgPSB0aGlzLmdldEVtcHR5VGlsZXMoKTtcclxuXHJcbiAgICAgICAgaWYgKGVtcHR5VGlsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBlbXB0eVRpbGVzW1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbXB0eVRpbGVzLmxlbmd0aCldXTtcclxuICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSA9IE1hdGgucmFuZG9tKCkgPCAwLjggPyAyIDogNDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW1wdHlUaWxlcygpIHtcclxuXHJcbiAgICAgICAgY29uc3QgZW1wdHlUaWxlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IEdSSURfU0laRTsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgR1JJRF9TSVpFOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbXB0eVRpbGVzLnB1c2goW3JvdywgY29sXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZW1wdHlUaWxlcztcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVGlsZXNSaWdodCgpIHtcclxuXHJcbiAgICAgICAgbGV0IHRpbGVzTW92ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgR1JJRF9TSVpFOyByb3crKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpbGVSb3cgPSB0aGlzLnRpbGVWYWx1ZXNbcm93XTtcclxuICAgICAgICAgICAgbGV0IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgbGV0IGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXggPSBHUklEX1NJWkU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSBHUklEX1NJWkUgLSAxOyBjb2wgPj0gMDsgY29sLS0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGlsZVJvd1tjb2xdID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IGNvbCA+IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2wgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuZXh0VGlsZUluZGV4ID0gY29sICsgMTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV4dFRpbGVJbmRleCA8IGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbGVSb3dbbmV4dFRpbGVJbmRleF0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRpbGVJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aWxlUm93W2NvbF0gPT09IHRpbGVSb3dbbmV4dFRpbGVJbmRleF0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVSb3dbbmV4dFRpbGVJbmRleF0gKz0gdGlsZVJvd1tjb2xdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbGVSb3dbbmV4dFRpbGVJbmRleF0gPT09IEZJTkFMX0dBTUVfU0NPUkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVdvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVSb3dbY29sXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSBjb2wgPiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4ID0gbmV4dFRpbGVJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXNNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGlsZVJvd1tjb2xdICE9PSAwICYmIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZVJvd1tmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4XSA9IHRpbGVSb3dbY29sXTtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlUm93W2NvbF0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4IC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlc01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRpbGVzTW92ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRpbGVzTGVmdCgpIHtcclxuICAgICAgICBsZXQgdGlsZXNNb3ZlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBHUklEX1NJWkU7IHJvdysrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGlsZVJvdyA9IHRoaXMudGlsZVZhbHVlc1tyb3ddO1xyXG4gICAgICAgICAgICBsZXQgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IEdSSURfU0laRTtcclxuICAgICAgICAgICAgbGV0IGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXggPSAtMTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8PSBHUklEX1NJWkUgLSAxOyBjb2wrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aWxlUm93W2NvbF0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gY29sIDwgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA/IGNvbCA6IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRUaWxlSW5kZXggPSBjb2wgLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIHdoaWxlIChuZXh0VGlsZUluZGV4ID4gYWxyZWFkeUNhbHVjYXRlZFRpbGVJbmRleCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGlsZVJvd1tuZXh0VGlsZUluZGV4XSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0VGlsZUluZGV4LS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbGVSb3dbY29sXSA9PT0gdGlsZVJvd1tuZXh0VGlsZUluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlUm93W25leHRUaWxlSW5kZXhdICs9IHRpbGVSb3dbY29sXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aWxlUm93W25leHRUaWxlSW5kZXhdID09PSBGSU5BTF9HQU1FX1NDT1JFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVXb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlUm93W2NvbF0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gY29sIDwgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA/IGNvbCA6IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXggPSBuZXh0VGlsZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlc01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aWxlUm93W2NvbF0gIT09IDAgJiYgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA8IEdSSURfU0laRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVSb3dbZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleF0gPSB0aWxlUm93W2NvbF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZVJvd1tjb2xdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZXNNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aWxlc01vdmVkO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUaWxlc1VwKCkge1xyXG4gICAgICAgIGxldCB0aWxlc01vdmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IEdSSURfU0laRTsgY29sKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gR1JJRF9TSVpFO1xyXG4gICAgICAgICAgICBsZXQgYWxyZWFkeUNhbHVjYXRlZFRpbGVJbmRleCA9IC0xO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDw9IEdSSURfU0laRSAtIDE7IHJvdysrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gcm93IDwgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA/IHJvdyA6IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRUaWxlSW5kZXggPSByb3cgLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIHdoaWxlIChuZXh0VGlsZUluZGV4ID4gYWxyZWFkeUNhbHVjYXRlZFRpbGVJbmRleCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlVmFsdWVzW25leHRUaWxlSW5kZXhdW2NvbF0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRpbGVJbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID09PSB0aGlzLnRpbGVWYWx1ZXNbbmV4dFRpbGVJbmRleF1bY29sXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbbmV4dFRpbGVJbmRleF1bY29sXSArPSB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZVZhbHVlc1tuZXh0VGlsZUluZGV4XVtjb2xdID09PSBGSU5BTF9HQU1FX1NDT1JFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVXb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA9IHJvdyA8IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPyByb3cgOiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4ID0gbmV4dFRpbGVJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXNNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSAhPT0gMCAmJiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4IDwgR1JJRF9TSVpFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW2ZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXhdW2NvbF0gPSB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlc01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aWxlc01vdmVkO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUaWxlc0Rvd24oKSB7XHJcbiAgICAgICAgbGV0IHRpbGVzTW92ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgR1JJRF9TSVpFOyBjb2wrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgbGV0IGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXggPSBHUklEX1NJWkU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSBHUklEX1NJWkUgLSAxOyByb3cgPj0gMDsgcm93LS0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSByb3cgPiBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID8gcm93IDogZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFRpbGVJbmRleCA9IHJvdyArIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5leHRUaWxlSW5kZXggPCBhbHJlYWR5Q2FsdWNhdGVkVGlsZUluZGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVWYWx1ZXNbbmV4dFRpbGVJbmRleF1bY29sXSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0VGlsZUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPT09IHRoaXMudGlsZVZhbHVlc1tuZXh0VGlsZUluZGV4XVtjb2xdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tuZXh0VGlsZUluZGV4XVtjb2xdICs9IHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlVmFsdWVzW25leHRUaWxlSW5kZXhdW2NvbF0gPT09IEZJTkFMX0dBTUVfU0NPUkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVdvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4ID0gcm93ID4gZmFydGhlc3RUaWxlV2l0aFplcm9JbmRleCA/IHJvdyA6IGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFscmVhZHlDYWx1Y2F0ZWRUaWxlSW5kZXggPSBuZXh0VGlsZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlc01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdICE9PSAwICYmIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW2ZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXhdW2NvbF0gPSB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZhcnRoZXN0VGlsZVdpdGhaZXJvSW5kZXggPSBmYXJ0aGVzdFRpbGVXaXRoWmVyb0luZGV4IC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlc01vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aWxlc01vdmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSWZHYW1lSXNPdmVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVja0lmR2FtZUlzT3ZlcicpXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgR1JJRF9TSVpFOyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBHUklEX1NJWkU7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sXSA9PT0gdGhpcy50aWxlVmFsdWVzW3Jvd11bY29sICsgMV1cclxuICAgICAgICAgICAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPT09IHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbCAtIDFdXHJcbiAgICAgICAgICAgICAgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tyb3cgKyAxXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXNbcm93XVtjb2xdID09PSB0aGlzLnRpbGVWYWx1ZXNbcm93ICsgMV1bY29sXVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVmFsdWVzW3JvdyAtIDFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVZhbHVlc1tyb3ddW2NvbF0gPT09IHRoaXMudGlsZVZhbHVlc1tyb3cgLSAxXVtjb2xdXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVHcmlkKHRpbGVzTW92ZWQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYW55RW1wdHlUaWxlRXhpc3QgPSB0aGlzLmdldEVtcHR5VGlsZXMoKS5sZW5ndGggIT09IDA7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbnlFbXB0eVRpbGVFeGlzdDogJywgYW55RW1wdHlUaWxlRXhpc3QpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RpbGVzTW92ZWQ6ICcsIHRpbGVzTW92ZWQpXHJcbiAgICAgICAgaWYgKHRpbGVzTW92ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmlkLnJlbmRlckdyaWQodGhpcy50aWxlVmFsdWVzKTtcclxuICAgICAgICAgICAgaWYgKGFueUVtcHR5VGlsZUV4aXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE5ld1RpbGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5yZW5kZXJHcmlkKHRoaXMudGlsZVZhbHVlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVXb24pIHtcclxuICAgICAgICAgICAgdGhpcy5ncmlkLmRpc3BsYXlHYW1lU3RhdHVzKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWxsVGlsZXNPY2N1cGllZCA9IHRoaXMuZ2V0RW1wdHlUaWxlcygpLmxlbmd0aCA9PT0gMDtcclxuXHJcbiAgICAgICAgaWYgKGFsbFRpbGVzT2NjdXBpZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuY2hlY2tJZkdhbWVJc092ZXIoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuZGlzcGxheUdhbWVTdGF0dXMoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRXZlbnRzKCkge1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxldCB0aWxlc01vdmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDM3KSB7XHJcbiAgICAgICAgICAgICAgICB0aWxlc01vdmVkID0gdGhpcy5tb3ZlVGlsZXNMZWZ0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQud2hpY2ggPT09IDM4KSB7XHJcbiAgICAgICAgICAgICAgICB0aWxlc01vdmVkID0gdGhpcy5tb3ZlVGlsZXNVcCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LndoaWNoID09PSAzOSkge1xyXG4gICAgICAgICAgICAgICAgdGlsZXNNb3ZlZCA9IHRoaXMubW92ZVRpbGVzUmlnaHQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC53aGljaCA9PT0gNDApIHtcclxuICAgICAgICAgICAgICAgIHRpbGVzTW92ZWQgPSB0aGlzLm1vdmVUaWxlc0Rvd24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVHcmlkKHRpbGVzTW92ZWQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1hY3Rpb25zX19uZXctZ2FtZS1idG4nKVxyXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVWYWx1ZXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgWzAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgWzAsIDAsIDAsIDBdXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRVcCgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJHcmlkKHRpbGVWYWx1ZXMpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5zaXplOyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLnNpemU7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdyaWRfX2NlbGwtLSR7cm93fS0ke2NvbH1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSBjZWxsLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGlsZVZhbHVlc1tyb3ddW2NvbF07XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWRfX2NlbGwtLW1vZGlmaWVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gMCAmJiBwcmV2aW91c1ZhbHVlICE9PSBjdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShgZ3JpZF9fY2VsbC0tJHtwcmV2aW91c1ZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChgZ3JpZF9fY2VsbC0tJHtjdXJyZW50VmFsdWV9YCwgJ2dyaWRfX2NlbGwtLW1vZGlmaWVkJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShgZ3JpZF9fY2VsbC0tJHtwcmV2aW91c1ZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5R2FtZVN0YXR1cyhnYW1lV29uKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVfX3N0YXR1c2ApO1xyXG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci50ZXh0Q29udGVudCA9IGdhbWVXb24gPyAnWW91IFdvbiEnIDogJ0dhbWUgT3ZlciEnO1xyXG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEdhbWVTdGF0dXMoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVfX3N0YXR1c2ApO1xyXG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIHN0YXR1c0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XHJcblxyXG5uZXcgQXBwKCk7IiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==