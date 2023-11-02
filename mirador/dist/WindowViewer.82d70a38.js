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
})({"../node_modules/@material-ui/icons/AddCircleOutlineSharp.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'AddCircleOutlineSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/@material-ui/icons/RemoveCircleOutlineSharp.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'RemoveCircleOutlineSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/mirador/dist/es/src/components/icons/RestoreZoomIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RestoreZoomIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * RestoreZoomIcon ~
*/

function RestoreZoomIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, props, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M6,15H9v3h2V13H6Zm9-6V6H13v5h5V9Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8,8,8,0,0,1-8,8Z"
  })));
}
},{"react":"../node_modules/react/index.js","@material-ui/core/SvgIcon":"../node_modules/@material-ui/core/esm/SvgIcon/index.js"}],"../node_modules/mirador/dist/es/src/components/ZoomControls.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomControls = void 0;
var _react = _interopRequireWildcard(require("react"));
var _AddCircleOutlineSharp = _interopRequireDefault(require("@material-ui/icons/AddCircleOutlineSharp"));
var _RemoveCircleOutlineSharp = _interopRequireDefault(require("@material-ui/icons/RemoveCircleOutlineSharp"));
var _RestoreZoomIcon = _interopRequireDefault(require("./icons/RestoreZoomIcon"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
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
 */

var ZoomControls = exports.ZoomControls = /*#__PURE__*/function (_Component) {
  _inherits(ZoomControls, _Component);
  var _super = _createSuper(ZoomControls);

  /**
   * constructor -
   */
  function ZoomControls(props) {
    var _this;
    _classCallCheck(this, ZoomControls);
    _this = _super.call(this, props);
    _this.handleZoomInClick = _this.handleZoomInClick.bind(_assertThisInitialized(_this));
    _this.handleZoomOutClick = _this.handleZoomOutClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */

  _createClass(ZoomControls, [{
    key: "handleZoomInClick",
    value: function handleZoomInClick() {
      var _this$props = this.props,
        windowId = _this$props.windowId,
        updateViewport = _this$props.updateViewport,
        viewer = _this$props.viewer;
      updateViewport(windowId, {
        zoom: viewer.zoom * 2
      });
    }
    /**
     * @private
     */
  }, {
    key: "handleZoomOutClick",
    value: function handleZoomOutClick() {
      var _this$props2 = this.props,
        windowId = _this$props2.windowId,
        updateViewport = _this$props2.updateViewport,
        viewer = _this$props2.viewer;
      updateViewport(windowId, {
        zoom: viewer.zoom / 2
      });
    }
    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        displayDivider = _this$props3.displayDivider,
        showZoomControls = _this$props3.showZoomControls,
        classes = _this$props3.classes,
        t = _this$props3.t,
        zoomToWorld = _this$props3.zoomToWorld;
      if (!showZoomControls) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        className: classes.zoom_controls
      }, /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('zoomIn'),
        onClick: this.handleZoomInClick
      }, /*#__PURE__*/_react.default.createElement(_AddCircleOutlineSharp.default, null)), /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('zoomOut'),
        onClick: this.handleZoomOutClick
      }, /*#__PURE__*/_react.default.createElement(_RemoveCircleOutlineSharp.default, null)), /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('zoomReset'),
        onClick: function onClick() {
          return zoomToWorld(false);
        }
      }, /*#__PURE__*/_react.default.createElement(_RestoreZoomIcon.default, null)), displayDivider && /*#__PURE__*/_react.default.createElement("span", {
        className: classes.divider
      }));
    }
  }]);
  return ZoomControls;
}(_react.Component);
ZoomControls.defaultProps = {
  displayDivider: true,
  showZoomControls: false,
  t: function t(key) {
    return key;
  },
  updateViewport: function updateViewport() {},
  viewer: {},
  windowId: ''
};
},{"react":"../node_modules/react/index.js","@material-ui/icons/AddCircleOutlineSharp":"../node_modules/@material-ui/icons/AddCircleOutlineSharp.js","@material-ui/icons/RemoveCircleOutlineSharp":"../node_modules/@material-ui/icons/RemoveCircleOutlineSharp.js","./icons/RestoreZoomIcon":"../node_modules/mirador/dist/es/src/components/icons/RestoreZoomIcon.js","../containers/MiradorMenuButton":"../node_modules/mirador/dist/es/src/containers/MiradorMenuButton.js"}],"../node_modules/mirador/dist/es/src/containers/ZoomControls.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _core = require("@material-ui/core");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _ZoomControls = require("../components/ZoomControls");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    showZoomControls: (0, _selectors.getShowZoomControlsConfig)(state),
    viewer: (0, _selectors.getViewer)(state, {
      windowId: windowId
    })
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */

var mapDispatchToProps = {
  updateViewport: actions.updateViewport
};
/**
 *
 * @param theme
 * @returns {{zoom_controls: {position: string, right: number},
 * ListItem: {paddingBottom: number, paddingTop: number}}}
 */

var styles = function styles(theme) {
  return {
    divider: {
      borderRight: '1px solid #808080',
      display: 'inline-block',
      height: '24px',
      margin: '12px 6px'
    },
    ListItem: {
      paddingBottom: 0,
      paddingTop: 0
    },
    zoom_controls: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('ZoomControls'));
var _default = exports.default = enhance(_ZoomControls.ZoomControls);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/ZoomControls":"../node_modules/mirador/dist/es/src/components/ZoomControls.js"}],"../node_modules/mirador/dist/es/src/components/ViewerInfo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewerInfo = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _classnames = _interopRequireDefault(require("classnames"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
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
 *
 */

var ViewerInfo = exports.ViewerInfo = /*#__PURE__*/function (_Component) {
  _inherits(ViewerInfo, _Component);
  var _super = _createSuper(ViewerInfo);
  function ViewerInfo() {
    _classCallCheck(this, ViewerInfo);
    return _super.apply(this, arguments);
  }
  _createClass(ViewerInfo, [{
    key: "render",
    value: /** */
    function render() {
      var _this$props = this.props,
        canvasCount = _this$props.canvasCount,
        canvasIndex = _this$props.canvasIndex,
        canvasLabel = _this$props.canvasLabel,
        classes = _this$props.classes,
        t = _this$props.t;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)((0, _cssNs.default)('osd-info'), classes.osdInfo)
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        display: "inline",
        variant: "caption",
        className: (0, _cssNs.default)('canvas-count')
      }, t('pagination', {
        current: canvasIndex + 1,
        total: canvasCount
      })), /*#__PURE__*/_react.default.createElement(_Typography.default, {
        display: "inline",
        variant: "caption",
        className: (0, _cssNs.default)('canvas-label')
      }, canvasLabel && " \u2022 ".concat(canvasLabel)));
    }
  }]);
  return ViewerInfo;
}(_react.Component);
ViewerInfo.defaultProps = {
  canvasLabel: undefined,
  t: function t() {}
};
},{"react":"../node_modules/react/index.js","@material-ui/core/Typography":"../node_modules/@material-ui/core/esm/Typography/index.js","classnames":"../node_modules/classnames/index.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js"}],"../node_modules/mirador/dist/es/src/containers/ViewerInfo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _ViewerInfo = require("../components/ViewerInfo");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - to hook up connect
 * @memberof Window
 * @private
 */

var mapStateToProps = function mapStateToProps(state, props) {
  var windowId = props.windowId;
  var canvases = (0, _selectors.getCanvases)(state, {
    windowId: windowId
  });
  var canvasIndex = (0, _selectors.getCanvasIndex)(state, {
    windowId: windowId
  });
  var canvasId = ((0, _selectors.getCurrentCanvas)(state, {
    windowId: windowId
  }) || {}).id;
  return {
    canvasCount: canvases.length,
    canvasIndex: canvasIndex,
    canvasLabel: (0, _selectors.getCanvasLabel)(state, {
      canvasId: canvasId,
      windowId: windowId
    })
  };
};
var styles = {
  osdInfo: {
    order: 2,
    overflow: 'hidden',
    paddingBottom: 3,
    textOverflow: 'ellipsis',
    unicodeBidi: 'plaintext',
    whiteSpace: 'nowrap',
    width: '100%'
  }
};
var enhance = (0, _redux.compose)((0, _styles.withStyles)(styles), (0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, null), (0, _withPlugins.withPlugins)('ViewerInfo'));
var _default = exports.default = enhance(_ViewerInfo.ViewerInfo);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/ViewerInfo":"../node_modules/mirador/dist/es/src/components/ViewerInfo.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js"}],"../node_modules/@material-ui/icons/PlayCircleOutlineSharp.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'PlayCircleOutlineSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/mirador/dist/es/src/components/ViewerNavigation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewerNavigation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _PlayCircleOutlineSharp = _interopRequireDefault(require("@material-ui/icons/PlayCircleOutlineSharp"));
var _classnames = _interopRequireDefault(require("classnames"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
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
 */

var ViewerNavigation = exports.ViewerNavigation = /*#__PURE__*/function (_Component) {
  _inherits(ViewerNavigation, _Component);
  var _super = _createSuper(ViewerNavigation);
  function ViewerNavigation() {
    _classCallCheck(this, ViewerNavigation);
    return _super.apply(this, arguments);
  }
  _createClass(ViewerNavigation, [{
    key: "render",
    value:
    /**
     * Renders things
     */
    function render() {
      var _this$props = this.props,
        hasNextCanvas = _this$props.hasNextCanvas,
        hasPreviousCanvas = _this$props.hasPreviousCanvas,
        setNextCanvas = _this$props.setNextCanvas,
        setPreviousCanvas = _this$props.setPreviousCanvas,
        t = _this$props.t,
        classes = _this$props.classes,
        viewingDirection = _this$props.viewingDirection;
      var htmlDir = 'ltr';
      var previousIconStyle = {};
      var nextIconStyle = {};
      switch (viewingDirection) {
        case 'top-to-bottom':
          previousIconStyle = {
            transform: 'rotate(270deg)'
          };
          nextIconStyle = {
            transform: 'rotate(90deg)'
          };
          break;
        case 'bottom-to-top':
          previousIconStyle = {
            transform: 'rotate(90deg)'
          };
          nextIconStyle = {
            transform: 'rotate(270deg)'
          };
          break;
        case 'right-to-left':
          htmlDir = 'rtl';
          previousIconStyle = {};
          nextIconStyle = {
            transform: 'rotate(180deg)'
          };
          break;
        default:
          previousIconStyle = {
            transform: 'rotate(180deg)'
          };
          nextIconStyle = {};
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)((0, _cssNs.default)('osd-navigation'), classes.osdNavigation),
        dir: htmlDir
      }, /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('previousCanvas'),
        className: (0, _cssNs.default)('previous-canvas-button'),
        disabled: !hasPreviousCanvas,
        onClick: function onClick() {
          hasPreviousCanvas && setPreviousCanvas();
        }
      }, /*#__PURE__*/_react.default.createElement(_PlayCircleOutlineSharp.default, {
        style: previousIconStyle
      })), /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('nextCanvas'),
        className: (0, _cssNs.default)('next-canvas-button'),
        disabled: !hasNextCanvas,
        onClick: function onClick() {
          hasNextCanvas && setNextCanvas();
        }
      }, /*#__PURE__*/_react.default.createElement(_PlayCircleOutlineSharp.default, {
        style: nextIconStyle
      })));
    }
  }]);
  return ViewerNavigation;
}(_react.Component);
ViewerNavigation.defaultProps = {
  hasNextCanvas: false,
  hasPreviousCanvas: false,
  setNextCanvas: function setNextCanvas() {},
  setPreviousCanvas: function setPreviousCanvas() {},
  viewingDirection: ''
};
},{"react":"../node_modules/react/index.js","@material-ui/icons/PlayCircleOutlineSharp":"../node_modules/@material-ui/icons/PlayCircleOutlineSharp.js","classnames":"../node_modules/classnames/index.js","../containers/MiradorMenuButton":"../node_modules/mirador/dist/es/src/containers/MiradorMenuButton.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js"}],"../node_modules/mirador/dist/es/src/containers/ViewerNavigation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _ViewerNavigation = require("../components/ViewerNavigation");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    hasNextCanvas: !!(0, _selectors.getNextCanvasGrouping)(state, {
      windowId: windowId
    }),
    hasPreviousCanvas: !!(0, _selectors.getPreviousCanvasGrouping)(state, {
      windowId: windowId
    }),
    viewingDirection: (0, _selectors.getSequenceViewingDirection)(state, {
      windowId: windowId
    })
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestForm
 * @private
 */

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var windowId = _ref2.windowId;
  return {
    setNextCanvas: function setNextCanvas() {
      return dispatch(actions.setNextCanvas(windowId));
    },
    setPreviousCanvas: function setPreviousCanvas() {
      return dispatch(actions.setPreviousCanvas(windowId));
    }
  };
};
var styles = {
  osdNavigation: {
    order: 1
  }
};
var enhance = (0, _redux.compose)((0, _styles.withStyles)(styles), (0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('ViewerNavigation') // further HOC go here
);
var _default = exports.default = enhance(_ViewerNavigation.ViewerNavigation);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/ViewerNavigation":"../node_modules/mirador/dist/es/src/components/ViewerNavigation.js"}],"../node_modules/mirador/dist/es/src/components/WindowCanvasNavigationControls.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowCanvasNavigationControls = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _ZoomControls = _interopRequireDefault(require("../containers/ZoomControls"));
var _ViewerInfo = _interopRequireDefault(require("../containers/ViewerInfo"));
var _ViewerNavigation = _interopRequireDefault(require("../containers/ViewerNavigation"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _PluginHook = require("./PluginHook");
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
 * Represents the viewer controls in the mirador workspace.
 */

var WindowCanvasNavigationControls = exports.WindowCanvasNavigationControls = /*#__PURE__*/function (_Component) {
  _inherits(WindowCanvasNavigationControls, _Component);
  var _super = _createSuper(WindowCanvasNavigationControls);
  function WindowCanvasNavigationControls() {
    _classCallCheck(this, WindowCanvasNavigationControls);
    return _super.apply(this, arguments);
  }
  _createClass(WindowCanvasNavigationControls, [{
    key: "canvasNavControlsAreStacked",
    value:
    /**
     * Determine if canvasNavControls are stacked (based on a hard-coded width)
    */
    function canvasNavControlsAreStacked() {
      var size = this.props.size;
      return size && size.width && size.width <= 253;
    }
    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        visible = _this$props.visible,
        windowId = _this$props.windowId,
        zoomToWorld = _this$props.zoomToWorld;
      if (!visible) return /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "srOnly",
        component: "div"
      }, /*#__PURE__*/_react.default.createElement(_ViewerInfo.default, {
        windowId: windowId
      }));
      return /*#__PURE__*/_react.default.createElement(_Paper.default, {
        square: true,
        className: (0, _classnames.default)(classes.controls, (0, _cssNs.default)('canvas-nav'), classes.canvasNav, this.canvasNavControlsAreStacked() ? (0, _cssNs.default)('canvas-nav-stacked') : null, this.canvasNavControlsAreStacked() ? classes.canvasNavStacked : null),
        elevation: 0
      }, /*#__PURE__*/_react.default.createElement(_ZoomControls.default, {
        displayDivider: !this.canvasNavControlsAreStacked(),
        windowId: windowId,
        zoomToWorld: zoomToWorld
      }), /*#__PURE__*/_react.default.createElement(_ViewerNavigation.default, {
        windowId: windowId
      }), /*#__PURE__*/_react.default.createElement(_ViewerInfo.default, {
        windowId: windowId
      }), /*#__PURE__*/_react.default.createElement(_PluginHook.PluginHook, this.props));
    }
  }]);
  return WindowCanvasNavigationControls;
}(_react.Component);
WindowCanvasNavigationControls.defaultProps = {
  classes: {},
  visible: true
};
},{"react":"../node_modules/react/index.js","classnames":"../node_modules/classnames/index.js","@material-ui/core/Paper":"../node_modules/@material-ui/core/esm/Paper/index.js","@material-ui/core/Typography":"../node_modules/@material-ui/core/esm/Typography/index.js","../containers/ZoomControls":"../node_modules/mirador/dist/es/src/containers/ZoomControls.js","../containers/ViewerInfo":"../node_modules/mirador/dist/es/src/containers/ViewerInfo.js","../containers/ViewerNavigation":"../node_modules/mirador/dist/es/src/containers/ViewerNavigation.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js","./PluginHook":"../node_modules/mirador/dist/es/src/components/PluginHook.js"}],"../node_modules/mirador/dist/es/src/containers/WindowCanvasNavigationControls.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactSizeme = require("react-sizeme");
var _core = require("@material-ui/core");
var _colorManipulator = require("@material-ui/core/styles/colorManipulator");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var _WindowCanvasNavigationControls = require("../components/WindowCanvasNavigationControls");
/** */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    visible: (0, _selectors.getWorkspace)(state).focusedWindowId === windowId
  };
};
/**
 *
 * @param theme
 */

var styles = function styles(theme) {
  return {
    canvasNav: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      textAlign: 'center'
    },
    canvasNavStacked: {
      flexDirection: 'column'
    },
    controls: {
      backgroundColor: (0, _colorManipulator.fade)(theme.palette.background.paper, 0.5),
      bottom: 0,
      position: 'absolute',
      width: '100%',
      zIndex: 50
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _core.withStyles)(styles), (0, _reactSizeme.withSize)(), (0, _withPlugins.withPlugins)('WindowCanvasNavigationControls'));
var _default = exports.default = enhance(_WindowCanvasNavigationControls.WindowCanvasNavigationControls);
},{"react-redux":"../node_modules/react-redux/es/index.js","redux":"../node_modules/redux/es/redux.js","react-sizeme":"../node_modules/react-sizeme/dist/react-sizeme.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","@material-ui/core/styles/colorManipulator":"../node_modules/@material-ui/core/styles/colorManipulator.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/WindowCanvasNavigationControls":"../node_modules/mirador/dist/es/src/components/WindowCanvasNavigationControls.js"}],"../node_modules/mirador/dist/es/src/components/WindowViewer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowViewer = void 0;
var _react = _interopRequireWildcard(require("react"));
var _WindowCanvasNavigationControls = _interopRequireDefault(require("../containers/WindowCanvasNavigationControls"));
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
var OSDViewer = /*#__PURE__*/(0, _react.lazy)(function () {
  return require("_bundle_loader")(require.resolve('../containers/OpenSeadragonViewer'));
});
/**
 * Represents a WindowViewer in the mirador workspace. Responsible for mounting
 * OSD and Navigation
 */

var WindowViewer = exports.WindowViewer = /*#__PURE__*/function (_Component) {
  _inherits(WindowViewer, _Component);
  var _super = _createSuper(WindowViewer);

  /** */
  function WindowViewer(props) {
    var _this;
    _classCallCheck(this, WindowViewer);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  /** */

  _createClass(WindowViewer, [{
    key: "render",
    value:
    /**
     * Renders things
     */
    function render() {
      var windowId = this.props.windowId;
      var hasError = this.state.hasError;
      if (hasError) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
      }
      return /*#__PURE__*/_react.default.createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react.default.createElement("div", null)
      }, /*#__PURE__*/_react.default.createElement(OSDViewer, {
        windowId: windowId
      }, /*#__PURE__*/_react.default.createElement(_WindowCanvasNavigationControls.default, {
        windowId: windowId
      })));
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        hasError: true
      };
    }
  }]);
  return WindowViewer;
}(_react.Component);
},{"react":"../node_modules/react/index.js","../containers/WindowCanvasNavigationControls":"../node_modules/mirador/dist/es/src/containers/WindowCanvasNavigationControls.js","_bundle_loader":"../node_modules/parcel-bundler/src/builtins/bundle-loader.js","../containers/OpenSeadragonViewer":[["OpenSeadragonViewer.a2abc6e2.js","../node_modules/mirador/dist/es/src/containers/OpenSeadragonViewer.js"],"OpenSeadragonViewer.a2abc6e2.js.map","../node_modules/mirador/dist/es/src/containers/OpenSeadragonViewer.js"]}],"../node_modules/mirador/dist/es/src/containers/WindowViewer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _withPlugins = require("../extend/withPlugins");
var _WindowViewer = require("../components/WindowViewer");
var enhance = (0, _redux.compose)((0, _withPlugins.withPlugins)('WindowViewer') // further HOC go here
);
var _default = exports.default = enhance(_WindowViewer.WindowViewer);
},{"redux":"../node_modules/redux/es/redux.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/WindowViewer":"../node_modules/mirador/dist/es/src/components/WindowViewer.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;
function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }
  var id = bundles[bundles.length - 1];
  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }
    throw err;
  }
}
function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}
var bundleLoaders = {};
function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}
module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};
function loadBundle(bundle) {
  var id;
  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }
  if (bundles[bundle]) {
    return bundles[bundle];
  }
  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];
  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }
      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}
function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}
LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};
LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;
    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };
    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };
    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]).then(function(){require("../node_modules/mirador/dist/es/src/containers/WindowViewer.js");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/WindowViewer.82d70a38.js.map