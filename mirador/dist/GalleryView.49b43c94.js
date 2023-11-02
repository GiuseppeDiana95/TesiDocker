// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/mirador/dist/es/src/components/GalleryViewThumbnail.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GalleryViewThumbnail = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));
var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));
var _CommentSharp = _interopRequireDefault(require("@material-ui/icons/CommentSharp"));
var _SearchSharp = _interopRequireDefault(require("@material-ui/icons/SearchSharp"));
var _classnames = _interopRequireDefault(require("classnames"));
require("intersection-observer");
var _reactIntersectionObserver = _interopRequireDefault(require("@researchgate/react-intersection-observer"));
var _MiradorCanvas = _interopRequireDefault(require("../lib/MiradorCanvas"));
var _IIIFThumbnail = _interopRequireDefault(require("../containers/IIIFThumbnail"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

// polyfill needed for Safari

/**
 * Represents a WindowViewer in the mirador workspace. Responsible for mounting
 * OSD and Navigation
 */

var GalleryViewThumbnail = exports.GalleryViewThumbnail = /*#__PURE__*/function (_Component) {
  _inherits(GalleryViewThumbnail, _Component);
  var _super = _createSuper(GalleryViewThumbnail);

  /** */
  function GalleryViewThumbnail(props) {
    var _this;
    _classCallCheck(this, GalleryViewThumbnail);
    _this = _super.call(this, props);
    _this.state = {
      requestedAnnotations: false
    };
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));
    _this.handleKey = _this.handleKey.bind(_assertThisInitialized(_this));
    _this.handleIntersection = _this.handleIntersection.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** @private */

  _createClass(GalleryViewThumbnail, [{
    key: "handleSelect",
    value: function handleSelect() {
      var _this$props = this.props,
        canvas = _this$props.canvas,
        selected = _this$props.selected,
        setCanvas = _this$props.setCanvas,
        focusOnCanvas = _this$props.focusOnCanvas;
      if (selected) {
        focusOnCanvas();
      } else {
        setCanvas(canvas.id);
      }
    }
    /** @private */
  }, {
    key: "handleKey",
    value: function handleKey(event) {
      var _this$props2 = this.props,
        canvas = _this$props2.canvas,
        setCanvas = _this$props2.setCanvas,
        focusOnCanvas = _this$props2.focusOnCanvas;
      this.keys = {
        enter: 'Enter',
        space: ' '
      };
      this.chars = {
        enter: 13,
        space: 32
      };
      var enterOrSpace = event.key === this.keys.enter || event.which === this.chars.enter || event.key === this.keys.space || event.which === this.chars.space;
      if (enterOrSpace) {
        focusOnCanvas();
      } else {
        setCanvas(canvas.id);
      }
    }
    /** */
  }, {
    key: "handleIntersection",
    value: function handleIntersection(_ref) {
      var isIntersecting = _ref.isIntersecting;
      var _this$props3 = this.props,
        annotationsCount = _this$props3.annotationsCount,
        requestCanvasAnnotations = _this$props3.requestCanvasAnnotations;
      var requestedAnnotations = this.state.requestedAnnotations;
      if (!isIntersecting || annotationsCount === undefined || annotationsCount > 0 || requestedAnnotations) return;
      this.setState({
        requestedAnnotations: true
      });
      requestCanvasAnnotations();
    }
    /**
     * Renders things
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        annotationsCount = _this$props4.annotationsCount,
        searchAnnotationsCount = _this$props4.searchAnnotationsCount,
        canvas = _this$props4.canvas,
        classes = _this$props4.classes,
        config = _this$props4.config,
        selected = _this$props4.selected;
      var miradorCanvas = new _MiradorCanvas.default(canvas);
      return /*#__PURE__*/_react.default.createElement(_reactIntersectionObserver.default, {
        onChange: this.handleIntersection
      }, /*#__PURE__*/_react.default.createElement("div", {
        key: canvas.index,
        className: (0, _classnames.default)(classes.galleryViewItem, selected ? classes.selected : '', searchAnnotationsCount > 0 ? classes.hasAnnotations : ''),
        onClick: this.handleSelect,
        onKeyUp: this.handleKey,
        role: "button",
        tabIndex: 0
      }, /*#__PURE__*/_react.default.createElement(_IIIFThumbnail.default, {
        resource: canvas,
        labelled: true,
        variant: "outside",
        maxWidth: config.width,
        maxHeight: config.height,
        style: {
          margin: '0 auto',
          maxWidth: "".concat(Math.ceil(config.height * miradorCanvas.aspectRatio), "px")
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: classes.chips
      }, searchAnnotationsCount > 0 && /*#__PURE__*/_react.default.createElement(_Chip.default, {
        avatar: /*#__PURE__*/_react.default.createElement(_Avatar.default, {
          className: classes.avatar,
          classes: {
            circle: classes.avatarIcon
          }
        }, /*#__PURE__*/_react.default.createElement(_SearchSharp.default, {
          fontSize: "small"
        })),
        label: searchAnnotationsCount,
        className: (0, _classnames.default)(classes.searchChip),
        size: "small"
      }), (annotationsCount || 0) > 0 && /*#__PURE__*/_react.default.createElement(_Chip.default, {
        avatar: /*#__PURE__*/_react.default.createElement(_Avatar.default, {
          className: classes.avatar,
          classes: {
            circle: classes.avatarIcon
          }
        }, /*#__PURE__*/_react.default.createElement(_CommentSharp.default, {
          className: classes.annotationIcon
        })),
        label: annotationsCount,
        className: (0, _classnames.default)(classes.annotationsChip),
        size: "small"
      })))));
    }
  }]);
  return GalleryViewThumbnail;
}(_react.Component);
GalleryViewThumbnail.defaultProps = {
  annotationsCount: undefined,
  config: {
    height: 100,
    width: null
  },
  requestCanvasAnnotations: function requestCanvasAnnotations() {},
  searchAnnotationsCount: 0,
  selected: false
};
},{"react":"../node_modules/react/index.js","@material-ui/core/Avatar":"../node_modules/@material-ui/core/esm/Avatar/index.js","@material-ui/core/Chip":"../node_modules/@material-ui/core/esm/Chip/index.js","@material-ui/icons/CommentSharp":"../node_modules/@material-ui/icons/CommentSharp.js","@material-ui/icons/SearchSharp":"../node_modules/@material-ui/icons/SearchSharp.js","classnames":"../node_modules/classnames/index.js","intersection-observer":"../node_modules/intersection-observer/intersection-observer.js","@researchgate/react-intersection-observer":"../node_modules/@researchgate/react-intersection-observer/lib/es/index.js","../lib/MiradorCanvas":"../node_modules/mirador/dist/es/src/lib/MiradorCanvas.js","../containers/IIIFThumbnail":"../node_modules/mirador/dist/es/src/containers/IIIFThumbnail.js"}],"../node_modules/mirador/dist/es/src/containers/GalleryViewThumbnail.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _flatten = _interopRequireDefault(require("lodash/flatten"));
var _styles = require("@material-ui/core/styles");
var actions = _interopRequireWildcard(require("../state/actions"));
var _GalleryViewThumbnail = require("../components/GalleryViewThumbnail");
var _selectors = require("../state/selectors");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
/**
 * Styles to be passed to the withStyles HOC
 */

var styles = function styles(theme) {
  return {
    annotationIcon: {
      height: '1rem',
      width: '1rem'
    },
    annotationsChip: _objectSpread({}, theme.typography.caption),
    avatar: {
      backgroundColor: 'transparent'
    },
    chips: {
      opacity: 0.875,
      position: 'absolute',
      right: 0,
      textAlign: 'right',
      top: 0
    },
    galleryViewItem: {
      '&$hasAnnotations': {
        border: "2px solid ".concat(theme.palette.action.selected)
      },
      '&$selected,&$selected$hasAnnotations': {
        border: "2px solid ".concat(theme.palette.primary.main)
      },
      '&:focus': {
        outline: 'none'
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      },
      border: '2px solid transparent',
      cursor: 'pointer',
      display: 'inline-block',
      margin: "".concat(theme.spacing(1), "px ").concat(theme.spacing(0.5), "px"),
      maxHeight: function maxHeight(props) {
        return props.config.height + 45;
      },
      minWidth: '60px',
      overflow: 'hidden',
      padding: theme.spacing(0.5),
      position: 'relative',
      width: 'min-content'
    },
    hasAnnotations: {},
    searchChip: _objectSpread(_objectSpread({}, theme.typography.caption), {}, {
      '&$selected $avatar': {
        backgroundColor: theme.palette.highlights.primary
      },
      marginTop: 2
    }),
    selected: {}
  };
};
/** */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var canvas = _ref.canvas,
    windowId = _ref.windowId;
  var currentCanvas = (0, _selectors.getCurrentCanvas)(state, {
    windowId: windowId
  });
  var searchAnnotations = (0, _selectors.getSearchAnnotationsForWindow)(state, {
    windowId: windowId
  });
  var canvasAnnotations = (0, _flatten.default)(searchAnnotations.map(function (a) {
    return a.resources;
  })).filter(function (a) {
    return a.targetId === canvas.id;
  });
  var hasOpenAnnotationsWindow = (0, _selectors.getCompanionWindowsForContent)(state, {
    content: 'annotations',
    windowId: windowId
  }).length > 0;
  return {
    annotationsCount: function () {
      if (!hasOpenAnnotationsWindow) return undefined;
      var annotations = (0, _selectors.getPresentAnnotationsOnSelectedCanvases)(state, {
        canvasId: canvas.id
      });
      return annotations.reduce(function (v, a) {
        return v + a.resources.filter(function (r) {
          return r.targetId === canvas.id;
        }).length;
      }, 0);
    }(),
    config: (0, _selectors.getConfig)(state).galleryView,
    searchAnnotationsCount: canvasAnnotations.length,
    selected: currentCanvas && currentCanvas.id === canvas.id
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WindowViewer
 * @private
 */

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var canvas = _ref2.canvas,
    id = _ref2.id,
    windowId = _ref2.windowId;
  return {
    focusOnCanvas: function focusOnCanvas() {
      return dispatch(actions.setWindowViewType(windowId, 'single'));
    },
    requestCanvasAnnotations: function requestCanvasAnnotations() {
      return dispatch(actions.requestCanvasAnnotations(windowId, canvas.id));
    },
    setCanvas: function setCanvas() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return dispatch(actions.setCanvas.apply(actions, [windowId].concat(args)));
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _styles.withStyles)(styles) // further HOC go here
);
var _default = exports.default = enhance(_GalleryViewThumbnail.GalleryViewThumbnail);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","lodash/flatten":"../node_modules/lodash/flatten.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../components/GalleryViewThumbnail":"../node_modules/mirador/dist/es/src/components/GalleryViewThumbnail.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js"}],"../node_modules/mirador/dist/es/src/components/GalleryView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GalleryView = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));
var _GalleryViewThumbnail = _interopRequireDefault(require("../containers/GalleryViewThumbnail"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/**
 * Renders a GalleryView overview of the manifest.
 */

var GalleryView = exports.GalleryView = /*#__PURE__*/function (_Component) {
  _inherits(GalleryView, _Component);
  var _super = _createSuper(GalleryView);
  function GalleryView() {
    _classCallCheck(this, GalleryView);
    return _super.apply(this, arguments);
  }
  _createClass(GalleryView, [{
    key: "render",
    value:
    /**
     * Renders things
     */
    function render() {
      var _this$props = this.props,
        canvases = _this$props.canvases,
        classes = _this$props.classes,
        viewingDirection = _this$props.viewingDirection,
        windowId = _this$props.windowId;
      var htmlDir = viewingDirection === 'right-to-left' ? 'rtl' : 'ltr';
      return /*#__PURE__*/_react.default.createElement(_Paper.default, {
        component: "section",
        dir: htmlDir,
        square: true,
        elevation: 0,
        className: classes.galleryContainer,
        id: "".concat(windowId, "-gallery")
      }, canvases.map(function (canvas) {
        return /*#__PURE__*/_react.default.createElement(_GalleryViewThumbnail.default, {
          key: canvas.id,
          windowId: windowId,
          canvas: canvas
        });
      }));
    }
  }]);
  return GalleryView;
}(_react.Component);
GalleryView.defaultProps = {
  classes: {},
  viewingDirection: ''
};
},{"react":"../node_modules/react/index.js","@material-ui/core/Paper":"../node_modules/@material-ui/core/esm/Paper/index.js","../containers/GalleryViewThumbnail":"../node_modules/mirador/dist/es/src/containers/GalleryViewThumbnail.js"}],"../node_modules/mirador/dist/es/src/containers/GalleryView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _GalleryView = require("../components/GalleryView");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    canvases: (0, _selectors.getCanvases)(state, {
      windowId: windowId
    }),
    viewingDirection: (0, _selectors.getSequenceViewingDirection)(state, {
      windowId: windowId
    })
  };
};
/**
 * Styles to be passed to the withStyles HOC
 */

var styles = function styles(theme) {
  return {
    galleryContainer: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      overflowX: 'hidden',
      overflowY: 'scroll',
      padding: '50px 0 50px 20px',
      width: '100%'
    }
  };
};
var enhance = (0, _redux.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps), (0, _withPlugins.withPlugins)('GalleryView') // further HOC go here
);
var _default = exports.default = enhance(_GalleryView.GalleryView);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/GalleryView":"../node_modules/mirador/dist/es/src/components/GalleryView.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42909" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/GalleryView.49b43c94.js.map