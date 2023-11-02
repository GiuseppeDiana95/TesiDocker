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
})({"../node_modules/mirador/dist/es/src/components/ErrorDialog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorDialog = void 0;
var _isUndefined2 = _interopRequireDefault(require("lodash/isUndefined"));
var _react = _interopRequireWildcard(require("react"));
var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));
var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));
var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));
var _core = require("@material-ui/core");
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var ErrorDialog = exports.ErrorDialog = /*#__PURE__*/function (_Component) {
  _inherits(ErrorDialog, _Component);
  var _super = _createSuper(ErrorDialog);
  function ErrorDialog() {
    _classCallCheck(this, ErrorDialog);
    return _super.apply(this, arguments);
  }
  _createClass(ErrorDialog, [{
    key: "render",
    value:
    /**
     * render
     * @return
     */
    function render() {
      var _this$props = this.props,
        error = _this$props.error,
        removeError = _this$props.removeError,
        t = _this$props.t;
      var hasError = !(0, _isUndefined2.default)(error);
      return error ? /*#__PURE__*/_react.default.createElement(_Dialog.default, {
        "aria-labelledby": "error-dialog-title",
        id: "error-dialog",
        onClose: function onClose() {
          return removeError(error.id);
        },
        open: hasError
      }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
        id: "error-dialog-title",
        disableTypography: true
      }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
        variant: "h2"
      }, t('errorDialogTitle'))), /*#__PURE__*/_react.default.createElement(_DialogContent.default, {
        disableTypography: true
      }, /*#__PURE__*/_react.default.createElement(_core.DialogContentText, {
        variant: "body2",
        noWrap: true,
        color: "inherit"
      }, "".concat(error.message)), /*#__PURE__*/_react.default.createElement(_core.DialogActions, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
        onClick: function onClick() {
          return removeError(error.id);
        },
        variant: "contained"
      }, t('errorDialogConfirm'))))) : null;
    }
  }]);
  return ErrorDialog;
}(_react.Component);
ErrorDialog.defaultProps = {
  error: null,
  removeError: function removeError() {},
  t: function t(key) {
    return key;
  }
};
},{"lodash/isUndefined":"../node_modules/lodash/isUndefined.js","react":"../node_modules/react/index.js","@material-ui/core/Dialog":"../node_modules/@material-ui/core/esm/Dialog/index.js","@material-ui/core/DialogContent":"../node_modules/@material-ui/core/esm/DialogContent/index.js","@material-ui/core/DialogTitle":"../node_modules/@material-ui/core/esm/DialogTitle/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","@material-ui/core/Button":"../node_modules/@material-ui/core/esm/Button/index.js"}],"../node_modules/mirador/dist/es/src/containers/ErrorDialog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _ErrorDialog = require("../components/ErrorDialog");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * mapStateToProps - to hook up connect
 * @memberof ErrorDialog
 * @private
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    error: (0, _selectors.getLatestError)(state)
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof App
 * @private
 */

var mapDispatchToProps = {
  removeError: actions.removeError
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('ErrorDialog'));
var _default = exports.default = enhance(_ErrorDialog.ErrorDialog);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/ErrorDialog":"../node_modules/mirador/dist/es/src/components/ErrorDialog.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js"}],"../node_modules/@material-ui/icons/AddSharp.js":[function(require,module,exports) {
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'AddSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/mirador/dist/es/src/components/WorkspaceAddButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceAddButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));
var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));
var _AddSharp = _interopRequireDefault(require("@material-ui/icons/AddSharp"));
var _CloseSharp = _interopRequireDefault(require("@material-ui/icons/CloseSharp"));
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

var WorkspaceAddButton = exports.WorkspaceAddButton = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceAddButton, _Component);
  var _super = _createSuper(WorkspaceAddButton);
  function WorkspaceAddButton() {
    _classCallCheck(this, WorkspaceAddButton);
    return _super.apply(this, arguments);
  }
  _createClass(WorkspaceAddButton, [{
    key: "render",
    value:
    /**
     * render
     * @return
     */
    function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        t = _this$props.t,
        setWorkspaceAddVisibility = _this$props.setWorkspaceAddVisibility,
        isWorkspaceAddVisible = _this$props.isWorkspaceAddVisible,
        useExtendedFab = _this$props.useExtendedFab;
      return /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
        title: isWorkspaceAddVisible ? t('closeAddResourceMenu') : t('addResource')
      }, /*#__PURE__*/_react.default.createElement(_Fab.default, {
        size: "medium",
        color: "primary",
        id: "addBtn",
        disableRipple: true,
        "aria-label": isWorkspaceAddVisible ? t('closeAddResourceMenu') : useExtendedFab && t('startHere') || t('addResource'),
        className: classes.fab,
        classes: {
          primary: classes.fabPrimary,
          secondary: classes.fabSecondary
        },
        variant: useExtendedFab ? 'extended' : 'round',
        onClick: function onClick() {
          setWorkspaceAddVisibility(!isWorkspaceAddVisible);
        }
      }, isWorkspaceAddVisible ? /*#__PURE__*/_react.default.createElement(_CloseSharp.default, null) : /*#__PURE__*/_react.default.createElement(_AddSharp.default, null), useExtendedFab && t('startHere')));
    }
  }]);
  return WorkspaceAddButton;
}(_react.Component);
WorkspaceAddButton.defaultProps = {
  isWorkspaceAddVisible: false,
  t: function t(key) {
    return key;
  }
};
},{"react":"../node_modules/react/index.js","@material-ui/core/Fab":"../node_modules/@material-ui/core/esm/Fab/index.js","@material-ui/core/Tooltip":"../node_modules/@material-ui/core/esm/Tooltip/index.js","@material-ui/icons/AddSharp":"../node_modules/@material-ui/icons/AddSharp.js","@material-ui/icons/CloseSharp":"../node_modules/@material-ui/icons/CloseSharp.js"}],"../node_modules/mirador/dist/es/src/containers/WorkspaceAddButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _core = require("@material-ui/core");
var _withWidth = _interopRequireDefault(require("@material-ui/core/withWidth"));
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _WorkspaceAddButton = require("../components/WorkspaceAddButton");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * mapStateToProps - to hook up connect
 * @memberof WorkspaceControlPanel
 * @private
 */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var width = _ref.width;
  var _getWorkspace = (0, _selectors.getWorkspace)(state),
    isWorkspaceAddVisible = _getWorkspace.isWorkspaceAddVisible;
  return {
    isWorkspaceAddVisible: isWorkspaceAddVisible,
    useExtendedFab: width !== 'xs' && !isWorkspaceAddVisible && (0, _selectors.getWindowIds)(state).length === 0
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */

var mapDispatchToProps = {
  setWorkspaceAddVisibility: actions.setWorkspaceAddVisibility
};
/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */

var styles = function styles(theme) {
  return {
    fab: {
      margin: theme.spacing(1)
    },
    fabPrimary: {
      '&:focus': {
        backgroundColor: theme.palette.primary.dark
      }
    },
    fabSecondary: {
      '&:focus': {
        backgroundColor: theme.palette.secondary.dark
      }
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _withWidth.default)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('WorkspaceAddButton'));
var _default = exports.default = enhance(_WorkspaceAddButton.WorkspaceAddButton);
},{"react-redux":"../node_modules/react-redux/es/index.js","redux":"../node_modules/redux/es/redux.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","@material-ui/core/withWidth":"../node_modules/@material-ui/core/esm/withWidth/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/WorkspaceAddButton":"../node_modules/mirador/dist/es/src/components/WorkspaceAddButton.js"}],"../node_modules/@material-ui/icons/FullscreenSharp.js":[function(require,module,exports) {
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
  d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
}), 'FullscreenSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/@material-ui/icons/FullscreenExitSharp.js":[function(require,module,exports) {
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
  d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
}), 'FullscreenExitSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/mirador/dist/es/src/components/FullScreenButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FullScreenButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FullscreenSharp = _interopRequireDefault(require("@material-ui/icons/FullscreenSharp"));
var _FullscreenExitSharp = _interopRequireDefault(require("@material-ui/icons/FullscreenExitSharp"));
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

var FullScreenButton = exports.FullScreenButton = /*#__PURE__*/function (_Component) {
  _inherits(FullScreenButton, _Component);
  var _super = _createSuper(FullScreenButton);
  function FullScreenButton() {
    _classCallCheck(this, FullScreenButton);
    return _super.apply(this, arguments);
  }
  _createClass(FullScreenButton, [{
    key: "render",
    value:
    /**
     * render
     * @return
     */
    function render() {
      var _this$props = this.props,
        className = _this$props.className,
        isFullscreenEnabled = _this$props.isFullscreenEnabled,
        setWorkspaceFullscreen = _this$props.setWorkspaceFullscreen,
        t = _this$props.t;
      return /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        className: className,
        "aria-label": isFullscreenEnabled ? t('exitFullScreen') : t('workspaceFullScreen'),
        onClick: function onClick() {
          return setWorkspaceFullscreen(!isFullscreenEnabled);
        }
      }, isFullscreenEnabled ? /*#__PURE__*/_react.default.createElement(_FullscreenExitSharp.default, null) : /*#__PURE__*/_react.default.createElement(_FullscreenSharp.default, null));
    }
  }]);
  return FullScreenButton;
}(_react.Component);
FullScreenButton.defaultProps = {
  className: undefined,
  isFullscreenEnabled: false,
  t: function t(key) {
    return key;
  }
};
},{"react":"../node_modules/react/index.js","@material-ui/icons/FullscreenSharp":"../node_modules/@material-ui/icons/FullscreenSharp.js","@material-ui/icons/FullscreenExitSharp":"../node_modules/@material-ui/icons/FullscreenExitSharp.js","../containers/MiradorMenuButton":"../node_modules/mirador/dist/es/src/containers/MiradorMenuButton.js"}],"../node_modules/mirador/dist/es/src/containers/FullScreenButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _FullScreenButton = require("../components/FullScreenButton");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * mapStateToProps - to hook up connect
 * @memberof FullScreenButton
 * @private
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    isFullscreenEnabled: (0, _selectors.getFullScreenEnabled)(state)
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */

var mapDispatchToProps = {
  setWorkspaceFullscreen: actions.setWorkspaceFullscreen
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('FullScreenButton'));
var _default = exports.default = enhance(_FullScreenButton.FullScreenButton);
},{"react-redux":"../node_modules/react-redux/es/index.js","redux":"../node_modules/redux/es/redux.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/FullScreenButton":"../node_modules/mirador/dist/es/src/components/FullScreenButton.js"}],"../node_modules/@material-ui/icons/SettingsSharp.js":[function(require,module,exports) {
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
  d: "M19.44 12.99l-.01.02c.04-.33.08-.67.08-1.01 0-.34-.03-.66-.07-.99l.01.02 2.44-1.92-2.43-4.22-2.87 1.16.01.01c-.52-.4-1.09-.74-1.71-1h.01L14.44 2H9.57l-.44 3.07h.01c-.62.26-1.19.6-1.71 1l.01-.01-2.88-1.17-2.44 4.22 2.44 1.92.01-.02c-.04.33-.07.65-.07.99 0 .34.03.68.08 1.01l-.01-.02-2.1 1.65-.33.26 2.43 4.2 2.88-1.15-.02-.04c.53.41 1.1.75 1.73 1.01h-.03L9.58 22h4.85s.03-.18.06-.42l.38-2.65h-.01c.62-.26 1.2-.6 1.73-1.01l-.02.04 2.88 1.15 2.43-4.2s-.14-.12-.33-.26l-2.11-1.66zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
}), 'SettingsSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/@material-ui/icons/CheckSharp.js":[function(require,module,exports) {
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
  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
}), 'CheckSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/mirador/dist/es/src/components/LanguageSettings.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageSettings = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));
var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));
var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));
var _CheckSharp = _interopRequireDefault(require("@material-ui/icons/CheckSharp"));
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
 * LanguageSettings ~ the workspace sub menu to change the language
 * of the application
*/
var LanguageSettings = exports.LanguageSettings = /*#__PURE__*/function (_Component) {
  _inherits(LanguageSettings, _Component);
  var _super = _createSuper(LanguageSettings);
  function LanguageSettings() {
    _classCallCheck(this, LanguageSettings);
    return _super.apply(this, arguments);
  }
  _createClass(LanguageSettings, [{
    key: "render",
    value:
    /**
     * Returns the rendered component
    */
    function render() {
      var _this$props = this.props,
        handleClick = _this$props.handleClick,
        languages = _this$props.languages;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, languages.map(function (language) {
        return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
          button: !language.current,
          key: language.locale,
          onClick: function onClick() {
            handleClick(language.locale);
          }
        }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, language.current && /*#__PURE__*/_react.default.createElement(_CheckSharp.default, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
          primaryTypographyProps: {
            variant: 'body1'
          }
        }, language.label));
      }));
    }
  }]);
  return LanguageSettings;
}(_react.Component);
},{"react":"../node_modules/react/index.js","@material-ui/core/ListItemIcon":"../node_modules/@material-ui/core/esm/ListItemIcon/index.js","@material-ui/core/ListItemText":"../node_modules/@material-ui/core/esm/ListItemText/index.js","@material-ui/core/MenuItem":"../node_modules/@material-ui/core/esm/MenuItem/index.js","@material-ui/icons/CheckSharp":"../node_modules/@material-ui/icons/CheckSharp.js"}],"../node_modules/mirador/dist/es/src/containers/LanguageSettings.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _LanguageSettings = require("../components/LanguageSettings");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Map state to props for connect
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    languages: (0, _selectors.getLanguagesFromConfigWithCurrent)(state)
  };
};
/**
 * Map action dispatches to props for connect
 */

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var afterSelect = _ref.afterSelect;
  return {
    handleClick: function handleClick(language) {
      dispatch(actions.updateConfig({
        language: language
      }));
      afterSelect && afterSelect();
    }
  };
};
var _default = exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('LanguageSettings'))(_LanguageSettings.LanguageSettings);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/LanguageSettings":"../node_modules/mirador/dist/es/src/components/LanguageSettings.js"}],"../node_modules/@material-ui/icons/ExpandLessSharp.js":[function(require,module,exports) {
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
  d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"
}), 'ExpandLessSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/@material-ui/icons/ExpandMoreSharp.js":[function(require,module,exports) {
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
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
}), 'ExpandMoreSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/mirador/dist/es/src/components/NestedMenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NestedMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));
var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));
var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));
var _ExpandLessSharp = _interopRequireDefault(require("@material-ui/icons/ExpandLessSharp"));
var _ExpandMoreSharp = _interopRequireDefault(require("@material-ui/icons/ExpandMoreSharp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var _excluded = ["children", "icon", "label"];
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
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
 * NestedMenu ~ A presentation component to render a menu item and have
 * it control the visibility of the MUI List passed in as the children
*/

var NestedMenu = exports.NestedMenu = /*#__PURE__*/function (_Component) {
  _inherits(NestedMenu, _Component);
  var _super = _createSuper(NestedMenu);

  /**
   * constructor -
   */
  function NestedMenu(props) {
    var _this;
    _classCallCheck(this, NestedMenu);
    _this = _super.call(this, props);
    _this.state = {
      nestedMenuIsOpen: false
    };
    _this.handleMenuClick = _this.handleMenuClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * handleMenuClick toggles the nestedMenuIsOpen state
   */

  _createClass(NestedMenu, [{
    key: "handleMenuClick",
    value: function handleMenuClick() {
      var nestedMenuIsOpen = this.state.nestedMenuIsOpen;
      this.setState({
        nestedMenuIsOpen: !nestedMenuIsOpen
      });
    }
    /**
     * Returns the rendered component.  Spreads unused props to MenuItem
    */
  }, {
    key: "render",
    value: function render() {
      var nestedMenuIsOpen = this.state.nestedMenuIsOpen;
      var _this$props = this.props,
        children = _this$props.children,
        icon = _this$props.icon,
        label = _this$props.label,
        otherProps = _objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_MenuItem.default, Object.assign({
        onClick: this.handleMenuClick,
        divider: nestedMenuIsOpen
      }, otherProps), icon && /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, icon), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
        primaryTypographyProps: {
          variant: 'body1'
        }
      }, label), nestedMenuIsOpen ? /*#__PURE__*/_react.default.createElement(_ExpandLessSharp.default, null) : /*#__PURE__*/_react.default.createElement(_ExpandMoreSharp.default, null)), nestedMenuIsOpen && children);
    }
  }]);
  return NestedMenu;
}(_react.Component);
NestedMenu.defaultProps = {
  icon: null
};
},{"react":"../node_modules/react/index.js","@material-ui/core/ListItemIcon":"../node_modules/@material-ui/core/esm/ListItemIcon/index.js","@material-ui/core/ListItemText":"../node_modules/@material-ui/core/esm/ListItemText/index.js","@material-ui/core/MenuItem":"../node_modules/@material-ui/core/esm/MenuItem/index.js","@material-ui/icons/ExpandLessSharp":"../node_modules/@material-ui/icons/ExpandLessSharp.js","@material-ui/icons/ExpandMoreSharp":"../node_modules/@material-ui/icons/ExpandMoreSharp.js"}],"../node_modules/mirador/dist/es/src/components/icons/WorkspaceTypeElasticIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ElasticWorkspaceIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * ElasticWorkspaceIcon ~
*/

function ElasticWorkspaceIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, props, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "120",
    height: "90",
    viewBox: "0 0 300 225"
  }, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "linear-gradient",
    x1: "0.5",
    y1: "1",
    x2: "0.5",
    gradientUnits: "objectBoundingBox"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.14",
    stopOpacity: "0.631"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "1",
    stopOpacity: "0"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "linear-gradient-2",
    x1: "0.5",
    y1: "1",
    x2: "0.5",
    gradientUnits: "objectBoundingBox"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0",
    stopColor: "#fff",
    stopOpacity: "0"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.23",
    stopColor: "#fff",
    stopOpacity: "0.012"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.36",
    stopColor: "#fff",
    stopOpacity: "0.039"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.47",
    stopColor: "#fff",
    stopOpacity: "0.102"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.57",
    stopColor: "#fff",
    stopOpacity: "0.18"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.67",
    stopColor: "#fff",
    stopOpacity: "0.278"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.75",
    stopColor: "#fff",
    stopOpacity: "0.412"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.83",
    stopColor: "#fff",
    stopOpacity: "0.561"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.91",
    stopColor: "#fff",
    stopOpacity: "0.741"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.98",
    stopColor: "#fff",
    stopOpacity: "0.929"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "1",
    stopColor: "#fff"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clip-elastic_icon"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "300",
    height: "225"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    id: "elastic_icon",
    "data-name": "elastic icon",
    clipPath: "url(#clip-elastic_icon)"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "300",
    height: "225",
    fill: "#fff"
  }), /*#__PURE__*/_react.default.createElement("g", {
    id: "Rectangle_278",
    "data-name": "Rectangle 278",
    transform: "translate(232 159)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "54",
    height: "54",
    stroke: "none"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "53",
    height: "53",
    fill: "none"
  })), /*#__PURE__*/_react.default.createElement("g", {
    id: "Rectangle_8",
    "data-name": "Rectangle 8",
    transform: "translate(7 148)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "70",
    height: "70",
    stroke: "none"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "69",
    height: "69",
    fill: "none"
  })), /*#__PURE__*/_react.default.createElement("g", {
    id: "Rectangle_258",
    "data-name": "Rectangle 258",
    transform: "translate(224 6)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "70",
    height: "100",
    stroke: "none"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "69",
    height: "99",
    fill: "none"
  })), /*#__PURE__*/_react.default.createElement("g", {
    id: "Rectangle_259",
    "data-name": "Rectangle 259",
    transform: "translate(71 64)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "115",
    height: "75",
    stroke: "none"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "114",
    height: "74",
    fill: "none"
  })), /*#__PURE__*/_react.default.createElement("g", {
    id: "Rectangle_260",
    "data-name": "Rectangle 260",
    transform: "translate(99 87)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "115",
    height: "75",
    stroke: "none"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "114",
    height: "74",
    fill: "none"
  })), /*#__PURE__*/_react.default.createElement("g", {
    id: "Group_689",
    "data-name": "Group 689"
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "Group_687",
    "data-name": "Group 687",
    transform: "translate(0 3)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    id: "checkbox",
    d: "M258.766,37.316v146.5H39.053V37.316Zm40.07-39.254h-300v225h300Z",
    transform: "translate(1.164 -1.063)",
    fill: "#010101",
    fillRule: "evenodd",
    opacity: "0.246"
  }), /*#__PURE__*/_react.default.createElement("g", {
    id: "Path_821",
    "data-name": "Path 821",
    transform: "translate(40 36)",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0,0H220V147H0Z",
    stroke: "none"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M 2 2 L 2 145 L 218 145 L 218 2 L 172.9869689941406 2 L 2 2 M 0 0 L 172.9869689941406 0 L 220 0 L 220 147 L 0 147 L 0 0 Z",
    stroke: "none",
    fill: "#01579b"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    id: "Rectangle_257",
    "data-name": "Rectangle 257",
    transform: "translate(40 39)",
    fill: "#fff",
    stroke: "#01579b",
    strokeWidth: "2"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "20",
    height: "147",
    stroke: "none"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "1",
    y: "1",
    width: "18",
    height: "145",
    fill: "none"
  })), /*#__PURE__*/_react.default.createElement("g", {
    id: "Group_688",
    "data-name": "Group 688",
    transform: "translate(-27.5 -126)"
  }, /*#__PURE__*/_react.default.createElement("circle", {
    id: "teal_circle",
    "data-name": "teal circle",
    cx: "7.5",
    cy: "7.5",
    r: "7.5",
    transform: "translate(70 171)",
    fill: "#009688"
  }), /*#__PURE__*/_react.default.createElement("g", {
    id: "Group_333",
    "data-name": "Group 333",
    transform: "translate(70 171)",
    opacity: "0.12"
  }, /*#__PURE__*/_react.default.createElement("path", {
    id: "gradient_border_2",
    "data-name": "gradient border 2",
    d: "M3408,959.089A4.911,4.911,0,1,1,3403.09,964a4.911,4.911,0,0,1,4.911-4.911m0-.089a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z",
    transform: "translate(-3403 -959)",
    fill: "url(#linear-gradient)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    id: "gradient_border_1",
    "data-name": "gradient border 1",
    d: "M3408,959.089A4.911,4.911,0,1,1,3403.09,964a4.911,4.911,0,0,1,4.911-4.911m0-.089a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z",
    transform: "translate(-3403 -959)",
    fill: "url(#linear-gradient-2)"
  })))))));
}
},{"react":"../node_modules/react/index.js","@material-ui/core/SvgIcon":"../node_modules/@material-ui/core/esm/SvgIcon/index.js"}],"../node_modules/mirador/dist/es/src/components/icons/WorkspaceTypeMosaicIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WorkspaceTypeMosaicIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * WorkspaceTypeMosaicIcon ~
*/

function WorkspaceTypeMosaicIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, props, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "120",
    height: "90",
    viewBox: "0 0 300 225"
  }, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "linear-gradient",
    x1: "0.5",
    y1: "1",
    x2: "0.5",
    gradientUnits: "objectBoundingBox"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.14",
    stopOpacity: "0.631"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "1",
    stopOpacity: "0"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "linear-gradient-2",
    x1: "0.5",
    y1: "1",
    x2: "0.5",
    gradientUnits: "objectBoundingBox"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0",
    stopColor: "#fff",
    stopOpacity: "0"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.23",
    stopColor: "#fff",
    stopOpacity: "0.012"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.36",
    stopColor: "#fff",
    stopOpacity: "0.039"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.47",
    stopColor: "#fff",
    stopOpacity: "0.102"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.57",
    stopColor: "#fff",
    stopOpacity: "0.18"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.67",
    stopColor: "#fff",
    stopOpacity: "0.278"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.75",
    stopColor: "#fff",
    stopOpacity: "0.412"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.83",
    stopColor: "#fff",
    stopOpacity: "0.561"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.91",
    stopColor: "#fff",
    stopOpacity: "0.741"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.98",
    stopColor: "#fff",
    stopOpacity: "0.929"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "1",
    stopColor: "#fff"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clip-mosaic_icon"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "300",
    height: "225"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    id: "mosaic_icon",
    "data-name": "mosaic icon",
    clipPath: "url(#clip-mosaic_icon)"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "300",
    height: "225",
    fill: "#fff"
  }), /*#__PURE__*/_react.default.createElement("path", {
    id: "checkbox",
    d: "M258.766,37.316v146.5H39.053V37.316Zm40.07-39.254h-300v225h300Z",
    transform: "translate(1.163 1.938)",
    fill: "#010101",
    fillRule: "evenodd",
    opacity: "0.5"
  }), /*#__PURE__*/_react.default.createElement("path", {
    id: "checkbox-2",
    "data-name": "checkbox",
    d: "M258.766,37.316v146.5H39.053V37.316Zm40.07-39.254h-300v225h300Z",
    transform: "translate(1.164 1.938)",
    fill: "#010101",
    fillRule: "evenodd",
    opacity: "0.246"
  }), /*#__PURE__*/_react.default.createElement("g", {
    id: "Path_821",
    "data-name": "Path 821",
    transform: "translate(40 39)",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0,0H220V147H0Z",
    stroke: "none"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M 2 2 L 2 145 L 218 145 L 218 2 L 172.9869689941406 2 L 2 2 M 0 0 L 172.9869689941406 0 L 220 0 L 220 147 L 0 147 L 0 0 Z",
    stroke: "none",
    fill: "#01579b"
  })), /*#__PURE__*/_react.default.createElement("g", {
    id: "Rectangle_257",
    "data-name": "Rectangle 257",
    transform: "translate(40 39)",
    fill: "#fff",
    stroke: "#01579b",
    strokeWidth: "2"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "20",
    height: "147",
    stroke: "none"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "1",
    y: "1",
    width: "18",
    height: "145",
    fill: "none"
  })), /*#__PURE__*/_react.default.createElement("g", {
    id: "Group_688",
    "data-name": "Group 688",
    transform: "translate(-27.5 -126)"
  }, /*#__PURE__*/_react.default.createElement("circle", {
    id: "teal_circle",
    "data-name": "teal circle",
    cx: "7.5",
    cy: "7.5",
    r: "7.5",
    transform: "translate(70 171)",
    fill: "#009688"
  }), /*#__PURE__*/_react.default.createElement("g", {
    id: "Group_333",
    "data-name": "Group 333",
    transform: "translate(70 171)",
    opacity: "0.12"
  }, /*#__PURE__*/_react.default.createElement("path", {
    id: "gradient_border_2",
    "data-name": "gradient border 2",
    d: "M3408,959.089A4.911,4.911,0,1,1,3403.09,964a4.911,4.911,0,0,1,4.911-4.911m0-.089a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z",
    transform: "translate(-3403 -959)",
    fill: "url(#linear-gradient)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    id: "gradient_border_1",
    "data-name": "gradient border 1",
    d: "M3408,959.089A4.911,4.911,0,1,1,3403.09,964a4.911,4.911,0,0,1,4.911-4.911m0-.089a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z",
    transform: "translate(-3403 -959)",
    fill: "url(#linear-gradient-2)"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    id: "Rectangle_270",
    "data-name": "Rectangle 270",
    transform: "translate(60 40.647)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "99",
    height: "72",
    stroke: "none"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "98",
    height: "71",
    fill: "none"
  })), /*#__PURE__*/_react.default.createElement("g", {
    id: "Rectangle_271",
    "data-name": "Rectangle 271",
    transform: "translate(159 40.647)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "99",
    height: "72",
    stroke: "none"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "98",
    height: "71",
    fill: "none"
  })), /*#__PURE__*/_react.default.createElement("g", {
    id: "Rectangle_272",
    "data-name": "Rectangle 272",
    transform: "translate(192 112.647)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "66",
    height: "71.45",
    stroke: "none"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "65",
    height: "70.45",
    fill: "none"
  })), /*#__PURE__*/_react.default.createElement("g", {
    id: "Rectangle_284",
    "data-name": "Rectangle 284",
    transform: "translate(60 112.647)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "66",
    height: "71.45",
    stroke: "none"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "65",
    height: "70.45",
    fill: "none"
  })), /*#__PURE__*/_react.default.createElement("g", {
    id: "Rectangle_285",
    "data-name": "Rectangle 285",
    transform: "translate(126 112.647)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "66",
    height: "71.45",
    stroke: "none"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "65",
    height: "70.45",
    fill: "none"
  })))));
}
},{"react":"../node_modules/react/index.js","@material-ui/core/SvgIcon":"../node_modules/@material-ui/core/esm/SvgIcon/index.js"}],"../node_modules/mirador/dist/es/src/components/ScrollIndicatedDialogContent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollIndicatedDialogContent = ScrollIndicatedDialogContent;
var _react = _interopRequireDefault(require("react"));
var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _excluded = ["classes", "className"];
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
/**
 * ScrollIndicatedDialogContent ~ Inject a style into the DialogContent component
 *                                to indicate there is scrollable content
*/

function ScrollIndicatedDialogContent(props) {
  var classes = props.classes,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded);
  var ourClassName = [className, classes.shadowScrollDialog].join(' ');
  return /*#__PURE__*/_react.default.createElement(_DialogContent.default, Object.assign({
    className: ourClassName
  }, otherProps));
}
ScrollIndicatedDialogContent.defaultProps = {
  className: ''
};
},{"react":"../node_modules/react/index.js","@material-ui/core/DialogContent":"../node_modules/@material-ui/core/esm/DialogContent/index.js"}],"../node_modules/mirador/dist/es/src/containers/ScrollIndicatedDialogContent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styles = require("@material-ui/core/styles");
var _ScrollIndicatedDialogContent = require("../components/ScrollIndicatedDialogContent");
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
 * Styles for the withStyles HOC
 */

var styles = function styles(theme) {
  var _shadowScrollDialog;
  return {
    shadowScrollDialog: (_shadowScrollDialog = {
      /* Shadow covers */
      background: "linear-gradient(".concat(theme.palette.background.paper, " 30%, rgba(255, 255, 255, 0)), ") + "linear-gradient(rgba(255, 255, 255, 0), ".concat(theme.palette.background.paper, " 70%) 0 100%, ") // Shaddows
      + 'radial-gradient(50% 0, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), ' + 'radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%,'
    }, _defineProperty(_shadowScrollDialog, "background", "linear-gradient(".concat(theme.palette.background.paper, " 30%, rgba(255, 255, 255, 0)), ") // eslint-disable-line no-dupe-keys
    + "linear-gradient(rgba(255, 255, 255, 0), ".concat(theme.palette.background.paper, " 70%) 0 100%, ") // Shaddows
    + 'radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), ' + 'radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;'), _defineProperty(_shadowScrollDialog, "backgroundAttachment", 'local, local, scroll, scroll'), _defineProperty(_shadowScrollDialog, "backgroundRepeat", 'no-repeat'), _defineProperty(_shadowScrollDialog, "backgroundSize", '100% 40px, 100% 40px, 100% 14px, 100% 14px'), _defineProperty(_shadowScrollDialog, "overflowY", 'auto'), _shadowScrollDialog)
  };
};
var _default = exports.default = (0, _styles.withStyles)(styles)(_ScrollIndicatedDialogContent.ScrollIndicatedDialogContent);
},{"@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../components/ScrollIndicatedDialogContent":"../node_modules/mirador/dist/es/src/components/ScrollIndicatedDialogContent.js"}],"../node_modules/mirador/dist/es/src/components/WorkspaceSelectionDialog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceSelectionDialog = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));
var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));
var _core = require("@material-ui/core");
var _WorkspaceTypeElasticIcon = _interopRequireDefault(require("./icons/WorkspaceTypeElasticIcon"));
var _WorkspaceTypeMosaicIcon = _interopRequireDefault(require("./icons/WorkspaceTypeMosaicIcon"));
var _ScrollIndicatedDialogContent = _interopRequireDefault(require("../containers/ScrollIndicatedDialogContent"));
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

var WorkspaceSelectionDialog = exports.WorkspaceSelectionDialog = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceSelectionDialog, _Component);
  var _super = _createSuper(WorkspaceSelectionDialog);

  /**
   * constructor
   */
  function WorkspaceSelectionDialog(props) {
    var _this;
    _classCallCheck(this, WorkspaceSelectionDialog);
    _this = _super.call(this, props);
    _this.handleWorkspaceTypeChange = _this.handleWorkspaceTypeChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Propagate workspace type selection into the global state
   */

  _createClass(WorkspaceSelectionDialog, [{
    key: "handleWorkspaceTypeChange",
    value: function handleWorkspaceTypeChange(workspaceType) {
      var _this$props = this.props,
        handleClose = _this$props.handleClose,
        updateWorkspace = _this$props.updateWorkspace;
      updateWorkspace({
        type: workspaceType
      });
      handleClose();
    }
    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        classes = _this$props2.classes,
        container = _this$props2.container,
        handleClose = _this$props2.handleClose,
        open = _this$props2.open,
        children = _this$props2.children,
        t = _this$props2.t,
        workspaceType = _this$props2.workspaceType;
      return /*#__PURE__*/_react.default.createElement(_Dialog.default, {
        "aria-labelledby": "workspace-selection-dialog-title",
        container: container,
        id: "workspace-selection-dialog",
        onClose: handleClose,
        onEntered: function onEntered(dialog) {
          return WorkspaceSelectionDialog.setInitialFocus(dialog, workspaceType);
        },
        onEscapeKeyDown: handleClose,
        open: open
      }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
        id: "workspace-selection-dialog-title",
        disableTypography: true
      }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
        variant: "h2"
      }, t('workspaceSelectionTitle'))), /*#__PURE__*/_react.default.createElement(_ScrollIndicatedDialogContent.default, null, children, /*#__PURE__*/_react.default.createElement(_core.MenuList, {
        classes: {
          root: classes.list
        },
        selected: workspaceType
      }, /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
        className: classes.menuItem,
        onClick: function onClick() {
          return _this2.handleWorkspaceTypeChange('elastic');
        },
        selected: workspaceType === 'elastic',
        value: "elastic"
      }, /*#__PURE__*/_react.default.createElement(_core.Card, {
        className: classes.card
      }, /*#__PURE__*/_react.default.createElement(_WorkspaceTypeElasticIcon.default, {
        className: classes.svgIcon,
        viewBox: "0 0 120 90"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: classes.details
      }, /*#__PURE__*/_react.default.createElement(_core.CardContent, {
        classes: {
          root: classes.root
        },
        className: classes.content
      }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
        className: classes.headline,
        component: "p",
        variant: "h3"
      }, t('elastic')), /*#__PURE__*/_react.default.createElement(_core.Typography, {
        variant: "body1"
      }, t('elasticDescription')))))), /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
        className: classes.menuItem,
        onClick: function onClick() {
          return _this2.handleWorkspaceTypeChange('mosaic');
        },
        selected: workspaceType === 'mosaic',
        value: "mosaic"
      }, /*#__PURE__*/_react.default.createElement(_core.Card, {
        className: classes.card
      }, /*#__PURE__*/_react.default.createElement(_WorkspaceTypeMosaicIcon.default, {
        className: classes.svgIcon,
        viewBox: "0 0 120 90"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: classes.details
      }, /*#__PURE__*/_react.default.createElement(_core.CardContent, {
        className: classes.content,
        classes: {
          root: classes.root
        }
      }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
        className: classes.headline,
        component: "p",
        variant: "h3"
      }, t('mosaic')), /*#__PURE__*/_react.default.createElement(_core.Typography, {
        variant: "body1"
      }, t('mosaicDescription')))))))));
    }
  }], [{
    key: "setInitialFocus",
    value:
    /**
     * Set the initial focus when the dialog enters
     * Find the selected item by using the current workspace type
     * in a selector on the value attribute (which we need to set)
    */
    function setInitialFocus(dialogElement, workspaceType) {
      var selectedListItem = dialogElement.querySelectorAll("li[value=\"".concat(workspaceType, "\"]"));
      if (!selectedListItem || selectedListItem.length === 0) return;
      selectedListItem[0].focus();
    }
  }]);
  return WorkspaceSelectionDialog;
}(_react.Component);
WorkspaceSelectionDialog.defaultProps = {
  children: null,
  container: null,
  open: false,
  t: function t(key) {
    return key;
  }
};
},{"react":"../node_modules/react/index.js","@material-ui/core/Dialog":"../node_modules/@material-ui/core/esm/Dialog/index.js","@material-ui/core/DialogTitle":"../node_modules/@material-ui/core/esm/DialogTitle/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","./icons/WorkspaceTypeElasticIcon":"../node_modules/mirador/dist/es/src/components/icons/WorkspaceTypeElasticIcon.js","./icons/WorkspaceTypeMosaicIcon":"../node_modules/mirador/dist/es/src/components/icons/WorkspaceTypeMosaicIcon.js","../containers/ScrollIndicatedDialogContent":"../node_modules/mirador/dist/es/src/containers/ScrollIndicatedDialogContent.js"}],"../node_modules/mirador/dist/es/src/containers/WorkspaceSelectionDialog.js":[function(require,module,exports) {
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
var _WorkspaceSelectionDialog = require("../components/WorkspaceSelectionDialog");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */

var mapDispatchToProps = {
  updateWorkspace: actions.updateWorkspace
};
/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    workspaceType: (0, _selectors.getWorkspaceType)(state)
  };
};
/** */

var styles = function styles(theme) {
  return {
    card: {
      backgroundColor: 'transparent',
      borderRadius: '0',
      boxShadow: '0 0 transparent',
      display: 'flex'
    },
    content: {
      flex: '1 0 auto'
    },
    details: {
      display: 'flex',
      flexDirection: 'column'
    },
    headline: {
      paddingBottom: '6px'
    },
    list: {
      '&active': {
        outline: 'none'
      },
      '&focus': {
        outline: 'none'
      },
      outline: 'none'
    },
    media: {
      flex: '0 0 120px',
      height: '90px'
    },
    menuItem: {
      height: 'auto',
      overflow: 'auto',
      whiteSpace: 'inherit'
    },
    root: {
      '&:last-child': {
        paddingBottom: '12px'
      },
      paddingBottom: 0,
      paddingTop: 0,
      textAlign: 'left'
    },
    svgIcon: {
      flexShrink: 0,
      height: '90px',
      width: '120px'
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('WorkspaceSelectionDialog'));
var _default = exports.default = enhance(_WorkspaceSelectionDialog.WorkspaceSelectionDialog);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/WorkspaceSelectionDialog":"../node_modules/mirador/dist/es/src/components/WorkspaceSelectionDialog.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js"}],"../node_modules/@material-ui/icons/PaletteSharp.js":[function(require,module,exports) {
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
  d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
}), 'PaletteSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/mirador/dist/es/src/components/ChangeThemeDialog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangeThemeDialog = void 0;
var _react = _interopRequireWildcard(require("react"));
var _core = require("@material-ui/core");
var _PaletteSharp = _interopRequireDefault(require("@material-ui/icons/PaletteSharp"));
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
 * a simple dialog providing the possibility to switch the theme
 */
var ChangeThemeDialog = exports.ChangeThemeDialog = /*#__PURE__*/function (_Component) {
  _inherits(ChangeThemeDialog, _Component);
  var _super = _createSuper(ChangeThemeDialog);

  /**
  */
  function ChangeThemeDialog(props) {
    var _this;
    _classCallCheck(this, ChangeThemeDialog);
    _this = _super.call(this, props);
    _this.selectedItemRef = /*#__PURE__*/_react.default.createRef();
    _this.handleThemeChange = _this.handleThemeChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Propagate theme palette type selection into the global state
   */

  _createClass(ChangeThemeDialog, [{
    key: "handleThemeChange",
    value: function handleThemeChange(theme) {
      var _this$props = this.props,
        setSelectedTheme = _this$props.setSelectedTheme,
        handleClose = _this$props.handleClose;
      setSelectedTheme(theme);
      handleClose();
    }
    /** */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        classes = _this$props2.classes,
        handleClose = _this$props2.handleClose,
        open = _this$props2.open,
        selectedTheme = _this$props2.selectedTheme,
        t = _this$props2.t,
        themeIds = _this$props2.themeIds;
      return /*#__PURE__*/_react.default.createElement(_core.Dialog, {
        onClose: handleClose,
        onEntered: function onEntered(dialog) {
          return ChangeThemeDialog.setInitialFocus(dialog, selectedTheme);
        },
        open: open
      }, /*#__PURE__*/_react.default.createElement(_core.DialogTitle, {
        id: "change-the-dialog-title",
        disableTypography: true
      }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
        variant: "h2"
      }, t('changeTheme'))), /*#__PURE__*/_react.default.createElement(_core.DialogContent, {
        className: classes.dialogContent
      }, /*#__PURE__*/_react.default.createElement(_core.MenuList, null, themeIds.map(function (value) {
        return /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
          key: value,
          className: classes.listitem,
          onClick: function onClick() {
            _this2.handleThemeChange(value);
          },
          selected: value === selectedTheme,
          value: value
        }, /*#__PURE__*/_react.default.createElement(_core.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(_PaletteSharp.default, {
          className: classes[value]
        })), /*#__PURE__*/_react.default.createElement(_core.ListItemText, null, t(value)));
      }))));
    }
  }], [{
    key: "setInitialFocus",
    value:
    /**
     * Set the initial focus when the dialog enters
     * Find the selected item by using the current theme
     * in a selector on the value attribute (which we need to set)
    */
    function setInitialFocus(dialogElement, selectedTheme) {
      var selectedListItem = dialogElement.querySelectorAll("li[value=\"".concat(selectedTheme, "\"]"));
      if (!selectedListItem || selectedListItem.length === 0) return;
      selectedListItem[0].focus();
    }
  }]);
  return ChangeThemeDialog;
}(_react.Component);
ChangeThemeDialog.defaultProps = {
  open: false,
  themeIds: []
};
},{"react":"../node_modules/react/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","@material-ui/icons/PaletteSharp":"../node_modules/@material-ui/icons/PaletteSharp.js"}],"../node_modules/mirador/dist/es/src/containers/ChangeThemeDialog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _core = require("@material-ui/core");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _ChangeThemeDialog = require("../components/ChangeThemeDialog");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ChangeThemeDialog
 * @private
 */

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var windowId = _ref.windowId;
  return {
    setSelectedTheme: function setSelectedTheme(theme) {
      return dispatch(actions.updateConfig({
        selectedTheme: theme
      }));
    }
  };
};
/**
 * mapStateToProps - to hook up connect
 * @memberof ChangeThemeDialog
 * @private
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedTheme: (0, _selectors.getConfig)(state).selectedTheme,
    themeIds: (0, _selectors.getThemeIds)(state)
  };
};
/** */

var styles = function styles(theme) {
  return {
    dark: {
      color: '#000000'
    },
    dialogContent: {
      padding: 0
    },
    light: {
      color: '#BDBDBD'
    },
    listitem: {
      '&:focus': {
        backgroundColor: theme.palette.action.focus
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      },
      cursor: 'pointer'
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('ChangeThemeDialog'));
var _default = exports.default = enhance(_ChangeThemeDialog.ChangeThemeDialog);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/ChangeThemeDialog":"../node_modules/mirador/dist/es/src/components/ChangeThemeDialog.js"}],"../node_modules/mirador/dist/es/src/components/WorkspaceMenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));
var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _LanguageSettings = _interopRequireDefault(require("../containers/LanguageSettings"));
var _NestedMenu = require("./NestedMenu");
var _WorkspaceSelectionDialog = _interopRequireDefault(require("../containers/WorkspaceSelectionDialog"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _ChangeThemeDialog = _interopRequireDefault(require("../containers/ChangeThemeDialog"));
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
 */

var WorkspaceMenu = exports.WorkspaceMenu = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceMenu, _Component);
  var _super = _createSuper(WorkspaceMenu);

  /**
   * constructor -
   */
  function WorkspaceMenu(props) {
    var _this;
    _classCallCheck(this, WorkspaceMenu);
    _this = _super.call(this, props);
    _this.state = {
      changeTheme: {},
      toggleZoom: {},
      workspaceSelection: {}
    };
    _this.handleMenuItemClick = _this.handleMenuItemClick.bind(_assertThisInitialized(_this));
    _this.handleMenuItemClose = _this.handleMenuItemClose.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */

  _createClass(WorkspaceMenu, [{
    key: "handleMenuItemClick",
    value: function handleMenuItemClick(item, event) {
      var obj = {};
      obj[item] = {};
      obj[item].open = true;
      obj[item].anchorEl = event.currentTarget;
      this.setState(obj);
    }
    /**
     * @private
     */
  }, {
    key: "handleMenuItemClose",
    value: function handleMenuItemClose(item) {
      var _this2 = this;
      return function (event) {
        var obj = {};
        obj[item] = {};
        obj[item].open = false;
        obj[item].anchorEl = null;
        _this2.setState(obj);
      };
    }
    /**
     * @private
     */
  }, {
    key: "handleZoomToggleClick",
    value: function handleZoomToggleClick() {
      var _this$props = this.props,
        toggleZoomControls = _this$props.toggleZoomControls,
        showZoomControls = _this$props.showZoomControls;
      toggleZoomControls(!showZoomControls);
    }
    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props2 = this.props,
        containerId = _this$props2.containerId,
        handleClose = _this$props2.handleClose,
        anchorEl = _this$props2.anchorEl,
        showThemePicker = _this$props2.showThemePicker,
        isWorkspaceAddVisible = _this$props2.isWorkspaceAddVisible,
        t = _this$props2.t,
        showZoomControls = _this$props2.showZoomControls;
      var _this$state = this.state,
        changeTheme = _this$state.changeTheme,
        toggleZoom = _this$state.toggleZoom,
        workspaceSelection = _this$state.workspaceSelection;
      var container = document.querySelector("#".concat(containerId, " .").concat((0, _cssNs.default)('viewer')));
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Menu.default, {
        id: "workspace-menu",
        container: container,
        anchorEl: anchorEl,
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        transformOrigin: {
          horizontal: 'left',
          vertical: 'top'
        },
        open: Boolean(anchorEl),
        onClose: handleClose
      }, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        "aria-haspopup": "true",
        disabled: isWorkspaceAddVisible,
        onClick: function onClick(e) {
          _this3.handleZoomToggleClick(e);
          handleClose(e);
        },
        "aria-owns": toggleZoom.anchorEl ? 'toggle-zoom-menu' : undefined
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "body1"
      }, showZoomControls ? t('hideZoomControls') : t('showZoomControls'))), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        "aria-haspopup": "true",
        onClick: function onClick(e) {
          _this3.handleMenuItemClick('workspaceSelection', e);
          handleClose(e);
        },
        "aria-owns": workspaceSelection.anchorEl ? 'workspace-selection' : undefined
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "body1"
      }, t('selectWorkspaceMenu'))), /*#__PURE__*/_react.default.createElement(_NestedMenu.NestedMenu, {
        label: t('language')
      }, /*#__PURE__*/_react.default.createElement(_LanguageSettings.default, {
        afterSelect: handleClose
      })), showThemePicker && /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        "aria-haspopup": "true",
        onClick: function onClick(e) {
          _this3.handleMenuItemClick('changeTheme', e);
          handleClose(e);
        },
        "aria-owns": changeTheme.anchorEl ? 'change-theme' : undefined
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "body1"
      }, t('changeTheme'))), /*#__PURE__*/_react.default.createElement(_PluginHook.PluginHook, this.props)), Boolean(changeTheme.open) && /*#__PURE__*/_react.default.createElement(_ChangeThemeDialog.default, {
        container: container,
        handleClose: this.handleMenuItemClose('changeTheme'),
        open: Boolean(changeTheme.open)
      }), Boolean(workspaceSelection.open) && /*#__PURE__*/_react.default.createElement(_WorkspaceSelectionDialog.default, {
        open: Boolean(workspaceSelection.open),
        container: container,
        handleClose: this.handleMenuItemClose('workspaceSelection')
      }));
    }
  }]);
  return WorkspaceMenu;
}(_react.Component);
WorkspaceMenu.defaultProps = {
  anchorEl: null,
  isWorkspaceAddVisible: false,
  showThemePicker: false,
  showZoomControls: false,
  t: function t(key) {
    return key;
  },
  toggleZoomControls: function toggleZoomControls() {}
};
},{"react":"../node_modules/react/index.js","@material-ui/core/Menu":"../node_modules/@material-ui/core/esm/Menu/index.js","@material-ui/core/MenuItem":"../node_modules/@material-ui/core/esm/MenuItem/index.js","@material-ui/core/Typography":"../node_modules/@material-ui/core/esm/Typography/index.js","../containers/LanguageSettings":"../node_modules/mirador/dist/es/src/containers/LanguageSettings.js","./NestedMenu":"../node_modules/mirador/dist/es/src/components/NestedMenu.js","../containers/WorkspaceSelectionDialog":"../node_modules/mirador/dist/es/src/containers/WorkspaceSelectionDialog.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js","../containers/ChangeThemeDialog":"../node_modules/mirador/dist/es/src/containers/ChangeThemeDialog.js","./PluginHook":"../node_modules/mirador/dist/es/src/components/PluginHook.js"}],"../node_modules/mirador/dist/es/src/containers/WorkspaceMenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _WorkspaceMenu = require("../components/WorkspaceMenu");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WorkspaceMenu
 * @private
 */

var mapDispatchToProps = {
  toggleZoomControls: actions.toggleZoomControls
};
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    containerId: (0, _selectors.getContainerId)(state),
    isWorkspaceAddVisible: (0, _selectors.getWorkspace)(state).isWorkspaceAddVisible,
    showThemePicker: (0, _selectors.getThemeIds)(state).length > 0,
    showZoomControls: (0, _selectors.getShowZoomControlsConfig)(state)
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('WorkspaceMenu'));
var _default = exports.default = enhance(_WorkspaceMenu.WorkspaceMenu);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/WorkspaceMenu":"../node_modules/mirador/dist/es/src/components/WorkspaceMenu.js"}],"../node_modules/mirador/dist/es/src/components/WorkspaceMenuButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceMenuButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SettingsSharp = _interopRequireDefault(require("@material-ui/icons/SettingsSharp"));
var _classnames = _interopRequireDefault(require("classnames"));
var _WorkspaceMenu = _interopRequireDefault(require("../containers/WorkspaceMenu"));
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

var WorkspaceMenuButton = exports.WorkspaceMenuButton = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceMenuButton, _Component);
  var _super = _createSuper(WorkspaceMenuButton);

  /**
   * constructor -
   */
  function WorkspaceMenuButton(props) {
    var _this;
    _classCallCheck(this, WorkspaceMenuButton);
    _this = _super.call(this, props);
    _this.state = {
      anchorEl: null
    };
    _this.handleMenuClick = _this.handleMenuClick.bind(_assertThisInitialized(_this));
    _this.handleMenuClose = _this.handleMenuClose.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */

  _createClass(WorkspaceMenuButton, [{
    key: "handleMenuClick",
    value: function handleMenuClick(event) {
      this.setState({
        anchorEl: event.currentTarget
      });
    }
    /**
     * @private
     */
  }, {
    key: "handleMenuClose",
    value: function handleMenuClose() {
      this.setState({
        anchorEl: null
      });
    }
    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        t = _this$props.t;
      var anchorEl = this.state.anchorEl;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        "aria-haspopup": "true",
        "aria-label": t('workspaceMenu'),
        "aria-owns": anchorEl ? 'workspace-menu' : undefined,
        className: (0, _classnames.default)(classes.ctrlBtn, anchorEl ? classes.ctrlBtnSelected : null),
        id: "menuBtn",
        onClick: this.handleMenuClick
      }, /*#__PURE__*/_react.default.createElement(_SettingsSharp.default, null)), /*#__PURE__*/_react.default.createElement(_WorkspaceMenu.default, {
        anchorEl: anchorEl,
        handleClose: this.handleMenuClose
      }));
    }
  }]);
  return WorkspaceMenuButton;
}(_react.Component);
WorkspaceMenuButton.defaultProps = {
  t: function t(key) {
    return key;
  }
};
},{"react":"../node_modules/react/index.js","@material-ui/icons/SettingsSharp":"../node_modules/@material-ui/icons/SettingsSharp.js","classnames":"../node_modules/classnames/index.js","../containers/WorkspaceMenu":"../node_modules/mirador/dist/es/src/containers/WorkspaceMenu.js","../containers/MiradorMenuButton":"../node_modules/mirador/dist/es/src/containers/MiradorMenuButton.js"}],"../node_modules/mirador/dist/es/src/containers/WorkspaceMenuButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _core = require("@material-ui/core");
var _withPlugins = require("../extend/withPlugins");
var _WorkspaceMenuButton = require("../components/WorkspaceMenuButton");
/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */

var styles = function styles(theme) {
  return {
    ctrlBtn: {
      margin: theme.spacing(1)
    },
    ctrlBtnSelected: {
      backgroundColor: theme.palette.action.selected
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _withPlugins.withPlugins)('WorkspaceMenuButton') // further HOC
);
var _default = exports.default = enhance(_WorkspaceMenuButton.WorkspaceMenuButton);
},{"redux":"../node_modules/redux/es/redux.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/WorkspaceMenuButton":"../node_modules/mirador/dist/es/src/components/WorkspaceMenuButton.js"}],"../node_modules/@material-ui/icons/MoreHorizSharp.js":[function(require,module,exports) {
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
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreHorizSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/@material-ui/icons/Input.js":[function(require,module,exports) {
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
  d: "M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"
}), 'Input');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/@material-ui/icons/SaveAltSharp.js":[function(require,module,exports) {
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
  d: "M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"
}), 'SaveAltSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/@material-ui/icons/Close.js":[function(require,module,exports) {
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
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/toggle-selection/index.js":[function(require,module,exports) {

module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};

},{}],"../node_modules/copy-to-clipboard/index.js":[function(require,module,exports) {
"use strict";

var deselectCurrent = require("toggle-selection");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true"
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;

},{"toggle-selection":"../node_modules/toggle-selection/index.js"}],"../node_modules/react-copy-to-clipboard/lib/Component.js":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyToClipboard = void 0;

var _react = _interopRequireDefault(require("react"));

var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));

var _excluded = ["text", "onCopy", "options", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CopyToClipboard = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(CopyToClipboard, _React$PureComponent);

  var _super = _createSuper(CopyToClipboard);

  function CopyToClipboard() {
    var _this;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;

      var elem = _react["default"].Children.only(children);

      var result = (0, _copyToClipboard["default"])(text, options);

      if (onCopy) {
        onCopy(text, result);
      } // Bypass onClick if it was present


      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    });

    return _this;
  }

  _createClass(CopyToClipboard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _text = _this$props2.text,
          _onCopy = _this$props2.onCopy,
          _options = _this$props2.options,
          children = _this$props2.children,
          props = _objectWithoutProperties(_this$props2, _excluded);

      var elem = _react["default"].Children.only(children);

      return /*#__PURE__*/_react["default"].cloneElement(elem, _objectSpread(_objectSpread({}, props), {}, {
        onClick: this.onClick
      }));
    }
  }]);

  return CopyToClipboard;
}(_react["default"].PureComponent);

exports.CopyToClipboard = CopyToClipboard;

_defineProperty(CopyToClipboard, "defaultProps", {
  onCopy: undefined,
  options: undefined
});
},{"react":"../node_modules/react/index.js","copy-to-clipboard":"../node_modules/copy-to-clipboard/index.js"}],"../node_modules/react-copy-to-clipboard/lib/index.js":[function(require,module,exports) {
"use strict";

var _require = require('./Component'),
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
module.exports = CopyToClipboard;
},{"./Component":"../node_modules/react-copy-to-clipboard/lib/Component.js"}],"../node_modules/mirador/dist/es/src/components/WorkspaceExport.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceExport = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));
var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));
var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));
var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));
var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));
var _Accordion = _interopRequireDefault(require("@material-ui/core/Accordion"));
var _AccordionSummary = _interopRequireDefault(require("@material-ui/core/AccordionSummary"));
var _AccordionDetails = _interopRequireDefault(require("@material-ui/core/AccordionDetails"));
var _reactCopyToClipboard = require("react-copy-to-clipboard");
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

var WorkspaceExport = exports.WorkspaceExport = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceExport, _Component);
  var _super = _createSuper(WorkspaceExport);

  /** */
  function WorkspaceExport(props) {
    var _this;
    _classCallCheck(this, WorkspaceExport);
    _this = _super.call(this, props);
    _this.state = {
      copied: false
    };
    _this.onCopy = _this.onCopy.bind(_assertThisInitialized(_this));
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** Handle closing after the content is copied and the snackbar is done */

  _createClass(WorkspaceExport, [{
    key: "handleClose",
    value: function handleClose() {
      var handleClose = this.props.handleClose;
      handleClose();
    }
    /** Show the snackbar */
  }, {
    key: "onCopy",
    value: function onCopy() {
      this.setState({
        copied: true
      });
    }
    /**
     * @private
     */
  }, {
    key: "exportedState",
    value: function exportedState() {
      var exportableState = this.props.exportableState;
      return JSON.stringify(exportableState, null, 2);
    }
    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        classes = _this$props.classes,
        container = _this$props.container,
        open = _this$props.open,
        t = _this$props.t;
      var copied = this.state.copied;
      if (copied) {
        return /*#__PURE__*/_react.default.createElement(_Snackbar.default, {
          anchorOrigin: {
            horizontal: 'center',
            vertical: 'top'
          },
          open: true,
          autoHideDuration: 6000,
          onClose: this.handleClose,
          message: t('exportCopied'),
          action: /*#__PURE__*/_react.default.createElement(_IconButton.default, {
            size: "small",
            "aria-label": t('dismiss'),
            color: "inherit",
            onClick: this.handleClose
          }, /*#__PURE__*/_react.default.createElement(_Close.default, {
            fontSize: "small"
          }))
        });
      }
      return /*#__PURE__*/_react.default.createElement(_Dialog.default, {
        id: "workspace-settings",
        container: container,
        open: open,
        onClose: this.handleClose,
        scroll: "paper",
        fullWidth: true,
        maxWidth: "sm"
      }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
        id: "form-dialog-title",
        disableTypography: true
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "h2"
      }, t('downloadExport'))), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_Accordion.default, {
        elevation: 0
      }, /*#__PURE__*/_react.default.createElement(_AccordionSummary.default, {
        classes: {
          root: classes.accordionTitle
        },
        expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null)
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "h4"
      }, t('viewWorkspaceConfiguration'))), /*#__PURE__*/_react.default.createElement(_AccordionDetails.default, null, children, /*#__PURE__*/_react.default.createElement("pre", null, this.exportedState())))), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
        onClick: this.handleClose
      }, t('cancel')), /*#__PURE__*/_react.default.createElement(_reactCopyToClipboard.CopyToClipboard, {
        onCopy: this.onCopy,
        text: this.exportedState()
      }, /*#__PURE__*/_react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary"
      }, t('copy')))));
    }
  }]);
  return WorkspaceExport;
}(_react.Component);
WorkspaceExport.defaultProps = {
  children: null,
  classes: {},
  container: null,
  open: false,
  t: function t(key) {
    return key;
  }
};
},{"react":"../node_modules/react/index.js","@material-ui/core/Button":"../node_modules/@material-ui/core/esm/Button/index.js","@material-ui/core/Dialog":"../node_modules/@material-ui/core/esm/Dialog/index.js","@material-ui/core/DialogActions":"../node_modules/@material-ui/core/esm/DialogActions/index.js","@material-ui/core/DialogTitle":"../node_modules/@material-ui/core/esm/DialogTitle/index.js","@material-ui/core/DialogContent":"../node_modules/@material-ui/core/esm/DialogContent/index.js","@material-ui/core/Typography":"../node_modules/@material-ui/core/esm/Typography/index.js","@material-ui/core/Snackbar":"../node_modules/@material-ui/core/esm/Snackbar/index.js","@material-ui/core/IconButton":"../node_modules/@material-ui/core/esm/IconButton/index.js","@material-ui/icons/ExpandMore":"../node_modules/@material-ui/icons/ExpandMore.js","@material-ui/icons/Close":"../node_modules/@material-ui/icons/Close.js","@material-ui/core/Accordion":"../node_modules/@material-ui/core/esm/Accordion/index.js","@material-ui/core/AccordionSummary":"../node_modules/@material-ui/core/esm/AccordionSummary/index.js","@material-ui/core/AccordionDetails":"../node_modules/@material-ui/core/esm/AccordionDetails/index.js","react-copy-to-clipboard":"../node_modules/react-copy-to-clipboard/lib/index.js"}],"../node_modules/mirador/dist/es/src/containers/WorkspaceExport.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _styles = require("@material-ui/core/styles");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _WorkspaceExport = require("../components/WorkspaceExport");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    exportableState: (0, _selectors.getExportableState)(state)
  };
};
/**
 * Styles for the withStyles HOC
 */

var styles = function styles(theme) {
  return {
    accordionTitle: {
      padding: 0
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, {}), (0, _withPlugins.withPlugins)('WorkspaceExport'));
var _default = exports.default = enhance(_WorkspaceExport.WorkspaceExport);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/WorkspaceExport":"../node_modules/mirador/dist/es/src/components/WorkspaceExport.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js"}],"../node_modules/mirador/dist/es/src/components/WorkspaceImport.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceImport = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));
var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));
var _core = require("@material-ui/core");
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _ScrollIndicatedDialogContent = _interopRequireDefault(require("../containers/ScrollIndicatedDialogContent"));
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

var WorkspaceImport = exports.WorkspaceImport = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceImport, _Component);
  var _super = _createSuper(WorkspaceImport);

  /**
   *
   * constructor
   */
  function WorkspaceImport(props) {
    var _this;
    _classCallCheck(this, WorkspaceImport);
    _this = _super.call(this, props);
    _this.state = {
      configImportValue: ''
    };
    _this.handleImportConfig = _this.handleImportConfig.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */

  _createClass(WorkspaceImport, [{
    key: "handleChange",
    value: function handleChange(event) {
      event.preventDefault();
      this.setState({
        configImportValue: event.target.value
      });
    }
    /**
     * @private
     */
  }, {
    key: "handleImportConfig",
    value: function handleImportConfig(event) {
      var _this$props = this.props,
        handleClose = _this$props.handleClose,
        importConfig = _this$props.importConfig;
      var configImportValue = this.state.configImportValue;
      try {
        var configJSON = JSON.parse(configImportValue);
        importConfig(configJSON);
        handleClose();
      } catch (ex) {
        var addError = this.props.addError;
        addError(ex.toString());
      }
    }
    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        classes = _this$props2.classes,
        handleClose = _this$props2.handleClose,
        open = _this$props2.open,
        t = _this$props2.t;
      return /*#__PURE__*/_react.default.createElement(_Dialog.default, {
        "aria-labelledby": "workspace-import-title",
        id: "workspace-import",
        onEscapeKeyDown: handleClose,
        onClose: handleClose,
        open: open,
        fullWidth: true,
        maxWidth: "sm"
      }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
        id: "workspace-import-title",
        disableTypography: true
      }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
        variant: "h2"
      }, t('importWorkspace'))), /*#__PURE__*/_react.default.createElement(_ScrollIndicatedDialogContent.default, null, /*#__PURE__*/_react.default.createElement(_core.TextField, {
        className: classes.textField,
        id: "workspace-import-input",
        multiline: true,
        onChange: this.handleChange,
        rows: "15",
        variant: "filled",
        inputProps: {
          autoFocus: 'autofocus',
          className: classes.textInput
        },
        helperText: t('importWorkspaceHint')
      })), /*#__PURE__*/_react.default.createElement(_core.DialogActions, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
        className: classes.cancelBtn,
        onClick: handleClose
      }, t('cancel')), /*#__PURE__*/_react.default.createElement(_Button.default, {
        color: "primary",
        onClick: this.handleImportConfig,
        variant: "contained"
      }, t('import'))));
    }
  }]);
  return WorkspaceImport;
}(_react.Component);
WorkspaceImport.defaultProps = {
  classes: {},
  open: false,
  t: function t(key) {
    return key;
  }
};
},{"react":"../node_modules/react/index.js","@material-ui/core/Dialog":"../node_modules/@material-ui/core/esm/Dialog/index.js","@material-ui/core/DialogTitle":"../node_modules/@material-ui/core/esm/DialogTitle/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","@material-ui/core/Button":"../node_modules/@material-ui/core/esm/Button/index.js","../containers/ScrollIndicatedDialogContent":"../node_modules/mirador/dist/es/src/containers/ScrollIndicatedDialogContent.js"}],"../node_modules/mirador/dist/es/src/containers/WorkspaceImport.js":[function(require,module,exports) {
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
var _WorkspaceImport = require("../components/WorkspaceImport");
var actions = _interopRequireWildcard(require("../state/actions"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof App
 * @private
 */

var mapDispatchToProps = {
  addError: actions.addError,
  importConfig: actions.importMiradorState
};
/** */

var styles = function styles(theme) {
  return {
    cancelBtn: {
      color: theme.palette.text.primary
    },
    textField: {
      width: '100%'
    },
    textInput: {
      fontFamily: 'monospace'
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(null, mapDispatchToProps), (0, _withPlugins.withPlugins)('WorkspaceImport'));
var _default = exports.default = enhance(_WorkspaceImport.WorkspaceImport);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/WorkspaceImport":"../node_modules/mirador/dist/es/src/components/WorkspaceImport.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js"}],"../node_modules/mirador/dist/es/src/components/WorkspaceOptionsMenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceOptionsMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Input = _interopRequireDefault(require("@material-ui/icons/Input"));
var _SaveAltSharp = _interopRequireDefault(require("@material-ui/icons/SaveAltSharp"));
var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));
var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));
var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _WorkspaceExport = _interopRequireDefault(require("../containers/WorkspaceExport"));
var _WorkspaceImport = _interopRequireDefault(require("../containers/WorkspaceImport"));
var _PluginHook = require("./PluginHook");
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
 * WorkspaceOptionsMenu ~ the menu for workspace options such as import/export
*/

var WorkspaceOptionsMenu = exports.WorkspaceOptionsMenu = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceOptionsMenu, _Component);
  var _super = _createSuper(WorkspaceOptionsMenu);

  /**
   * constructor -
   */
  function WorkspaceOptionsMenu(props) {
    var _this;
    _classCallCheck(this, WorkspaceOptionsMenu);
    _this = _super.call(this, props);
    _this.state = {
      exportWorkspace: {},
      importWorkspace: {}
    };
    _this.handleMenuItemClick = _this.handleMenuItemClick.bind(_assertThisInitialized(_this));
    _this.handleMenuItemClose = _this.handleMenuItemClose.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */

  _createClass(WorkspaceOptionsMenu, [{
    key: "handleMenuItemClick",
    value: function handleMenuItemClick(item) {
      var obj = {};
      obj[item] = {};
      obj[item].open = true;
      this.setState(obj);
    }
    /**
     * @private
     */
  }, {
    key: "handleMenuItemClose",
    value: function handleMenuItemClose(item) {
      var _this2 = this;
      return function (event) {
        var obj = {};
        obj[item] = {};
        obj[item].open = false;
        _this2.setState(obj);
      };
    }
    /**
     * Returns the rendered component
    */
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        anchorEl = _this$props.anchorEl,
        containerId = _this$props.containerId,
        handleClose = _this$props.handleClose,
        t = _this$props.t;
      var _this$state = this.state,
        exportWorkspace = _this$state.exportWorkspace,
        importWorkspace = _this$state.importWorkspace;
      var container = document.querySelector("#".concat(containerId, " .").concat((0, _cssNs.default)('viewer')));
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Menu.default, {
        id: "workspace-options-menu",
        container: container,
        anchorEl: anchorEl,
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        transformOrigin: {
          horizontal: 'left',
          vertical: 'top'
        },
        open: Boolean(anchorEl),
        onClose: handleClose
      }, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        "aria-haspopup": "true",
        onClick: function onClick() {
          _this3.handleMenuItemClick('exportWorkspace');
          handleClose();
        },
        "aria-owns": exportWorkspace.open ? 'workspace-export' : undefined
      }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_SaveAltSharp.default, null)), /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "body1"
      }, t('downloadExportWorkspace'))), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        "aria-haspopup": "true",
        id: "workspace-menu-import",
        onClick: function onClick() {
          _this3.handleMenuItemClick('importWorkspace');
          handleClose();
        },
        "aria-owns": exportWorkspace.open ? 'workspace-import' : undefined
      }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_Input.default, null)), /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "body1"
      }, t('importWorkspace'))), /*#__PURE__*/_react.default.createElement(_PluginHook.PluginHook, this.props)), Boolean(exportWorkspace.open) && /*#__PURE__*/_react.default.createElement(_WorkspaceExport.default, {
        open: Boolean(exportWorkspace.open),
        container: container,
        handleClose: this.handleMenuItemClose('exportWorkspace')
      }), Boolean(importWorkspace.open) && /*#__PURE__*/_react.default.createElement(_WorkspaceImport.default, {
        open: Boolean(importWorkspace.open),
        container: container,
        handleClose: this.handleMenuItemClose('importWorkspace')
      }));
    }
  }]);
  return WorkspaceOptionsMenu;
}(_react.Component);
WorkspaceOptionsMenu.defaultProps = {
  anchorEl: null
};
},{"react":"../node_modules/react/index.js","@material-ui/icons/Input":"../node_modules/@material-ui/icons/Input.js","@material-ui/icons/SaveAltSharp":"../node_modules/@material-ui/icons/SaveAltSharp.js","@material-ui/core/ListItemIcon":"../node_modules/@material-ui/core/esm/ListItemIcon/index.js","@material-ui/core/Menu":"../node_modules/@material-ui/core/esm/Menu/index.js","@material-ui/core/MenuItem":"../node_modules/@material-ui/core/esm/MenuItem/index.js","@material-ui/core/Typography":"../node_modules/@material-ui/core/esm/Typography/index.js","../containers/WorkspaceExport":"../node_modules/mirador/dist/es/src/containers/WorkspaceExport.js","../containers/WorkspaceImport":"../node_modules/mirador/dist/es/src/containers/WorkspaceImport.js","./PluginHook":"../node_modules/mirador/dist/es/src/components/PluginHook.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js"}],"../node_modules/mirador/dist/es/src/containers/WorkspaceOptionsMenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _selectors = require("../state/selectors");
var _WorkspaceOptionsMenu = require("../components/WorkspaceOptionsMenu");
/** Used for connect */

var mapStateToProps = function mapStateToProps(state) {
  return {
    containerId: (0, _selectors.getContainerId)(state)
  };
}; // containerId: getContainerId(state),/

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, null));
var _default = exports.default = enhance(_WorkspaceOptionsMenu.WorkspaceOptionsMenu);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/WorkspaceOptionsMenu":"../node_modules/mirador/dist/es/src/components/WorkspaceOptionsMenu.js"}],"../node_modules/mirador/dist/es/src/components/WorkspaceOptionsButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceOptionsButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _MoreHorizSharp = _interopRequireDefault(require("@material-ui/icons/MoreHorizSharp"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
var _WorkspaceOptionsMenu = _interopRequireDefault(require("../containers/WorkspaceOptionsMenu"));
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
 * WorkspaceOptionsButton ~
*/

var WorkspaceOptionsButton = exports.WorkspaceOptionsButton = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceOptionsButton, _Component);
  var _super = _createSuper(WorkspaceOptionsButton);

  /**
   * constructor -
   */
  function WorkspaceOptionsButton(props) {
    var _this;
    _classCallCheck(this, WorkspaceOptionsButton);
    _this = _super.call(this, props);
    _this.state = {
      anchorEl: null
    };
    _this.handleMenuClick = _this.handleMenuClick.bind(_assertThisInitialized(_this));
    _this.handleMenuClose = _this.handleMenuClose.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */

  _createClass(WorkspaceOptionsButton, [{
    key: "handleMenuClick",
    value: function handleMenuClick(event) {
      this.setState({
        anchorEl: event.currentTarget
      });
    }
    /**
     * @private
     */
  }, {
    key: "handleMenuClose",
    value: function handleMenuClose() {
      this.setState({
        anchorEl: null
      });
    }
    /**
     * Returns the rendered component
    */
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        t = _this$props.t;
      var anchorEl = this.state.anchorEl;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('workspaceOptions'),
        className: (0, _classnames.default)(classes.ctrlBtn, anchorEl ? classes.ctrlBtnSelected : null),
        onClick: this.handleMenuClick
      }, /*#__PURE__*/_react.default.createElement(_MoreHorizSharp.default, null)), /*#__PURE__*/_react.default.createElement(_WorkspaceOptionsMenu.default, {
        anchorEl: anchorEl,
        handleClose: this.handleMenuClose
      }));
    }
  }]);
  return WorkspaceOptionsButton;
}(_react.Component);
},{"react":"../node_modules/react/index.js","classnames":"../node_modules/classnames/index.js","@material-ui/icons/MoreHorizSharp":"../node_modules/@material-ui/icons/MoreHorizSharp.js","../containers/MiradorMenuButton":"../node_modules/mirador/dist/es/src/containers/MiradorMenuButton.js","../containers/WorkspaceOptionsMenu":"../node_modules/mirador/dist/es/src/containers/WorkspaceOptionsMenu.js"}],"../node_modules/mirador/dist/es/src/containers/WorkspaceOptionsButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _WorkspaceOptionsButton = require("../components/WorkspaceOptionsButton");
/**
 *
 * @param theme
 */

var styles = function styles(theme) {
  return {
    ctrlBtn: {
      margin: theme.spacing(1)
    },
    ctrlBtnSelected: {
      backgroundColor: theme.palette.action.selected
    }
  };
};
var enhance = (0, _redux.compose)((0, _styles.withStyles)(styles), (0, _reactI18next.withTranslation)(), (0, _withPlugins.withPlugins)('WorkspaceOptionsButton'));
var _default = exports.default = enhance(_WorkspaceOptionsButton.WorkspaceOptionsButton);
},{"redux":"../node_modules/redux/es/redux.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/WorkspaceOptionsButton":"../node_modules/mirador/dist/es/src/components/WorkspaceOptionsButton.js"}],"../node_modules/@material-ui/icons/BookmarksSharp.js":[function(require,module,exports) {
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
  d: "M19 18l2 1V1H7v2h12v15zM17 5H3v18l7-3 7 3V5z"
}), 'BookmarksSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/mirador/dist/es/src/components/WindowList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));
var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));
var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));
var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));
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

var WindowList = exports.WindowList = /*#__PURE__*/function (_Component) {
  _inherits(WindowList, _Component);
  var _super = _createSuper(WindowList);
  function WindowList() {
    _classCallCheck(this, WindowList);
    return _super.apply(this, arguments);
  }
  _createClass(WindowList, [{
    key: "titleContent",
    value:
    /**
     * Get the title for a window from its manifest title
     * @private
     */
    function titleContent(windowId) {
      var _this$props = this.props,
        titles = _this$props.titles,
        t = _this$props.t;
      return titles[windowId] || t('untitled');
    }
    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props2 = this.props,
        containerId = _this$props2.containerId,
        handleClose = _this$props2.handleClose,
        anchorEl = _this$props2.anchorEl,
        windowIds = _this$props2.windowIds,
        focusWindow = _this$props2.focusWindow,
        t = _this$props2.t;
      return /*#__PURE__*/_react.default.createElement(_Menu.default, {
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        transformOrigin: {
          horizontal: 'left',
          vertical: 'top'
        },
        id: "window-list-menu",
        container: document.querySelector("#".concat(containerId, " .").concat((0, _cssNs.default)('viewer'))),
        disableAutoFocusItem: true,
        anchorEl: anchorEl,
        open: Boolean(anchorEl),
        onClose: handleClose,
        onEntering: WindowList.focus2ndListIitem
      }, /*#__PURE__*/_react.default.createElement(_ListSubheader.default, {
        role: "presentation",
        selected: false,
        disabled: true,
        tabIndex: "-1"
      }, t('openWindows')), windowIds.map(function (windowId, i) {
        return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
          key: windowId,
          onClick: function onClick(e) {
            focusWindow(windowId, true);
            handleClose(e);
          }
        }, /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
          primaryTypographyProps: {
            variant: 'body1'
          }
        }, _this.titleContent(windowId)));
      }));
    }
  }], [{
    key: "focus2ndListIitem",
    value:
    /**
     * Given the menuElement passed in by the onEntering callback,
     * find the 2nd ListItem element (avoiding the header) and focus it
    */
    function focus2ndListIitem(menuElement) {
      if (!menuElement.querySelectorAll('li') || menuElement.querySelectorAll('li').length < 2) return;
      menuElement.querySelectorAll('li')[1].focus(); // The 2nd LI
    }
  }]);

  return WindowList;
}(_react.Component);
WindowList.defaultProps = {
  anchorEl: null,
  t: function t(key) {
    return key;
  },
  titles: {}
};
},{"react":"../node_modules/react/index.js","@material-ui/core/Menu":"../node_modules/@material-ui/core/esm/Menu/index.js","@material-ui/core/MenuItem":"../node_modules/@material-ui/core/esm/MenuItem/index.js","@material-ui/core/ListItemText":"../node_modules/@material-ui/core/esm/ListItemText/index.js","@material-ui/core/ListSubheader":"../node_modules/@material-ui/core/esm/ListSubheader/index.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js"}],"../node_modules/mirador/dist/es/src/containers/WindowList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _WindowList = require("../components/WindowList");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */

var mapDispatchToProps = {
  focusWindow: actions.focusWindow
};
/**
 * mapStateToProps - to hook up connect
 * @memberof WorkspaceControlPanel
 * @private
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    containerId: (0, _selectors.getContainerId)(state),
    titles: (0, _selectors.getWindowTitles)(state),
    windowIds: (0, _selectors.getWindowIds)(state)
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('WindowList'));
var _default = exports.default = enhance(_WindowList.WindowList);
},{"react-redux":"../node_modules/react-redux/es/index.js","redux":"../node_modules/redux/es/redux.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/WindowList":"../node_modules/mirador/dist/es/src/components/WindowList.js"}],"../node_modules/mirador/dist/es/src/components/WindowListButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowListButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _BookmarksSharp = _interopRequireDefault(require("@material-ui/icons/BookmarksSharp"));
var _classnames = _interopRequireDefault(require("classnames"));
var _WindowList = _interopRequireDefault(require("../containers/WindowList"));
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
 * WindowListButton ~
*/

var WindowListButton = exports.WindowListButton = /*#__PURE__*/function (_Component) {
  _inherits(WindowListButton, _Component);
  var _super = _createSuper(WindowListButton);

  /** */
  function WindowListButton(props) {
    var _this;
    _classCallCheck(this, WindowListButton);
    _this = _super.call(this, props);
    _this.state = {
      windowListAnchor: null
    };
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_this));
    _this.handleOpen = _this.handleOpen.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** Set the windowListAnchor to null on window close */

  _createClass(WindowListButton, [{
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        windowListAnchor: null
      });
    }
    /** Set the windowListAnchor to the event's current target  */
  }, {
    key: "handleOpen",
    value: function handleOpen(event) {
      this.setState({
        windowListAnchor: event.currentTarget
      });
    }
    /**
     * Returns the rendered component
    */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        classes = _this$props.classes,
        disabled = _this$props.disabled,
        t = _this$props.t,
        windowCount = _this$props.windowCount;
      var windowListAnchor = this.state.windowListAnchor;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        "aria-haspopup": "true",
        "aria-label": t('listAllOpenWindows'),
        "aria-owns": windowListAnchor ? 'window-list' : null,
        className: (0, _classnames.default)(classes.ctrlBtn, windowListAnchor ? classes.ctrlBtnSelected : null),
        disabled: disabled,
        badge: true,
        BadgeProps: {
          badgeContent: windowCount,
          classes: {
            badge: classes.badge
          }
        },
        onClick: function onClick(e) {
          return _this2.handleOpen(e);
        }
      }, /*#__PURE__*/_react.default.createElement(_BookmarksSharp.default, null)), Boolean(windowListAnchor) && /*#__PURE__*/_react.default.createElement(_WindowList.default, {
        anchorEl: windowListAnchor,
        id: "window-list",
        open: Boolean(windowListAnchor),
        handleClose: this.handleClose
      }));
    }
  }]);
  return WindowListButton;
}(_react.Component);
WindowListButton.defaultProps = {
  classes: {},
  disabled: false
};
},{"react":"../node_modules/react/index.js","@material-ui/icons/BookmarksSharp":"../node_modules/@material-ui/icons/BookmarksSharp.js","classnames":"../node_modules/classnames/index.js","../containers/WindowList":"../node_modules/mirador/dist/es/src/containers/WindowList.js","../containers/MiradorMenuButton":"../node_modules/mirador/dist/es/src/containers/MiradorMenuButton.js"}],"../node_modules/mirador/dist/es/src/containers/WindowListButton.js":[function(require,module,exports) {
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
var _selectors = require("../state/selectors");
var _WindowListButton = require("../components/WindowListButton");
/** */

var mapStateToProps = function mapStateToProps(state) {
  return {
    disabled: (0, _selectors.getWorkspace)(state).isWorkspaceAddVisible,
    windowCount: (0, _selectors.getWindowIds)(state).length
  };
};
/**
 *
 * @param theme
 * @returns {{background: {background: string}}}
 */

var styles = function styles(theme) {
  return {
    badge: {
      paddingLeft: 12
    },
    ctrlBtn: {
      margin: theme.spacing(1)
    },
    ctrlBtnSelected: {
      backgroundColor: theme.palette.action.selected
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, null), (0, _withPlugins.withPlugins)('WindowListButton'));
var _default = exports.default = enhance(_WindowListButton.WindowListButton);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/WindowListButton":"../node_modules/mirador/dist/es/src/components/WindowListButton.js"}],"../node_modules/mirador/dist/es/src/components/WorkspaceControlPanelButtons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceControlPanelButtons = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FullScreenButton = _interopRequireDefault(require("../containers/FullScreenButton"));
var _WorkspaceMenuButton = _interopRequireDefault(require("../containers/WorkspaceMenuButton"));
var _WorkspaceOptionsButton = _interopRequireDefault(require("../containers/WorkspaceOptionsButton"));
var _WindowListButton = _interopRequireDefault(require("../containers/WindowListButton"));
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
 *
 */

var WorkspaceControlPanelButtons = exports.WorkspaceControlPanelButtons = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceControlPanelButtons, _Component);
  var _super = _createSuper(WorkspaceControlPanelButtons);
  function WorkspaceControlPanelButtons() {
    _classCallCheck(this, WorkspaceControlPanelButtons);
    return _super.apply(this, arguments);
  }
  _createClass(WorkspaceControlPanelButtons, [{
    key: "render",
    value:
    /**
     * render
     *
     * @return {type}  description
     */
    function render() {
      var classes = this.props.classes;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_WindowListButton.default, null), /*#__PURE__*/_react.default.createElement(_WorkspaceMenuButton.default, null), /*#__PURE__*/_react.default.createElement(_WorkspaceOptionsButton.default, null), /*#__PURE__*/_react.default.createElement(_FullScreenButton.default, {
        className: classes.ctrlBtn
      }), /*#__PURE__*/_react.default.createElement(_PluginHook.PluginHook, this.props));
    }
  }]);
  return WorkspaceControlPanelButtons;
}(_react.Component);
WorkspaceControlPanelButtons.defaultProps = {
  classes: {}
};
},{"react":"../node_modules/react/index.js","../containers/FullScreenButton":"../node_modules/mirador/dist/es/src/containers/FullScreenButton.js","../containers/WorkspaceMenuButton":"../node_modules/mirador/dist/es/src/containers/WorkspaceMenuButton.js","../containers/WorkspaceOptionsButton":"../node_modules/mirador/dist/es/src/containers/WorkspaceOptionsButton.js","../containers/WindowListButton":"../node_modules/mirador/dist/es/src/containers/WindowListButton.js","./PluginHook":"../node_modules/mirador/dist/es/src/components/PluginHook.js"}],"../node_modules/mirador/dist/es/src/containers/WorkspaceControlPanelButtons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _WorkspaceControlPanelButtons = require("../components/WorkspaceControlPanelButtons");
/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */

var styles = function styles(theme) {
  return {
    ctrlBtn: {
      margin: theme.spacing(1)
    }
  };
};
var enhance = (0, _redux.compose)((0, _styles.withStyles)(styles), (0, _withPlugins.withPlugins)('WorkspaceControlPanelButtons'));
var _default = exports.default = enhance(_WorkspaceControlPanelButtons.WorkspaceControlPanelButtons);
},{"redux":"../node_modules/redux/es/redux.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/WorkspaceControlPanelButtons":"../node_modules/mirador/dist/es/src/components/WorkspaceControlPanelButtons.js"}],"../node_modules/mirador/dist/es/src/components/icons/MiradorIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MiradorIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * ThumbnailNavigationRightIcon ~
*/

function MiradorIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, Object.assign({
    viewBox: "0 0 60 55"
  }, props), /*#__PURE__*/_react.default.createElement("rect", {
    width: "18",
    height: "55"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    width: "18",
    height: "55",
    transform: "translate(42)"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    width: "18",
    height: "34",
    transform: "translate(21)"
  }));
}
},{"react":"../node_modules/react/index.js","@material-ui/core/SvgIcon":"../node_modules/@material-ui/core/esm/SvgIcon/index.js"}],"../node_modules/mirador/dist/es/src/components/Branding.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Branding = void 0;
var _react = _interopRequireWildcard(require("react"));
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _MiradorIcon = _interopRequireDefault(require("./icons/MiradorIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var _excluded = ["t", "variant"];
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
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
 * Display a branding icon
 */

var Branding = exports.Branding = /*#__PURE__*/function (_Component) {
  _inherits(Branding, _Component);
  var _super = _createSuper(Branding);
  function Branding() {
    _classCallCheck(this, Branding);
    return _super.apply(this, arguments);
  }
  _createClass(Branding, [{
    key: "render",
    value: /** */
    function render() {
      var _this$props = this.props,
        t = _this$props.t,
        variant = _this$props.variant,
        ContainerProps = _objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/_react.default.createElement("div", ContainerProps, variant === 'wide' && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        align: "center",
        component: "p",
        variant: "h3"
      }, t('mirador'))), /*#__PURE__*/_react.default.createElement(_Typography.default, {
        align: "center"
      }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
        component: "a",
        href: "https://projectmirador.org",
        target: "_blank",
        rel: "noopener"
      }, /*#__PURE__*/_react.default.createElement(_MiradorIcon.default, {
        "aria-label": t('aboutMirador'),
        titleAccess: t('aboutMirador'),
        fontSize: "large"
      }))));
    }
  }]);
  return Branding;
}(_react.Component);
Branding.defaultProps = {
  t: function t(k) {
    return k;
  },
  variant: 'default'
};
},{"react":"../node_modules/react/index.js","@material-ui/core/IconButton":"../node_modules/@material-ui/core/esm/IconButton/index.js","@material-ui/core/Typography":"../node_modules/@material-ui/core/esm/Typography/index.js","./icons/MiradorIcon":"../node_modules/mirador/dist/es/src/components/icons/MiradorIcon.js"}],"../node_modules/mirador/dist/es/src/containers/Branding.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _withPlugins = require("../extend/withPlugins");
var _Branding = require("../components/Branding");
var _default = exports.default = (0, _withPlugins.withPlugins)('Branding')(_Branding.Branding);
},{"../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/Branding":"../node_modules/mirador/dist/es/src/components/Branding.js"}],"../node_modules/mirador/dist/es/src/components/WorkspaceControlPanel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceControlPanel = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));
var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));
var _WorkspaceAddButton = _interopRequireDefault(require("../containers/WorkspaceAddButton"));
var _WorkspaceControlPanelButtons = _interopRequireDefault(require("../containers/WorkspaceControlPanelButtons"));
var _Branding = _interopRequireDefault(require("../containers/Branding"));
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
 * Provides the panel responsible for controlling the entire workspace
 */

var WorkspaceControlPanel = exports.WorkspaceControlPanel = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceControlPanel, _Component);
  var _super = _createSuper(WorkspaceControlPanel);
  function WorkspaceControlPanel() {
    _classCallCheck(this, WorkspaceControlPanel);
    return _super.apply(this, arguments);
  }
  _createClass(WorkspaceControlPanel, [{
    key: "render",
    value:
    /**
     * render
     * @return {String} - HTML markup for the component
     */
    function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        t = _this$props.t,
        variant = _this$props.variant;
      return /*#__PURE__*/_react.default.createElement(_AppBar.default, {
        className: (0, _classnames.default)(classes.root, (0, _cssNs.default)('workspace-control-panel'), variant === 'wide' ? classes.wide : null),
        color: "default",
        position: "absolute",
        component: "nav",
        "aria-label": t('workspaceNavigation')
      }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
        disableGutters: true,
        className: classes.toolbar
      }, /*#__PURE__*/_react.default.createElement(_WorkspaceAddButton.default, null), /*#__PURE__*/_react.default.createElement("div", {
        className: classes.workspaceButtons
      }, /*#__PURE__*/_react.default.createElement(_WorkspaceControlPanelButtons.default, null))), /*#__PURE__*/_react.default.createElement(_Branding.default, {
        className: classes.branding,
        t: t,
        variant: variant
      }));
    }
  }]);
  return WorkspaceControlPanel;
}(_react.Component);
WorkspaceControlPanel.defaultProps = {
  variant: 'default'
};
},{"react":"../node_modules/react/index.js","classnames":"../node_modules/classnames/index.js","@material-ui/core/AppBar":"../node_modules/@material-ui/core/esm/AppBar/index.js","@material-ui/core/Toolbar":"../node_modules/@material-ui/core/esm/Toolbar/index.js","../containers/WorkspaceAddButton":"../node_modules/mirador/dist/es/src/containers/WorkspaceAddButton.js","../containers/WorkspaceControlPanelButtons":"../node_modules/mirador/dist/es/src/containers/WorkspaceControlPanelButtons.js","../containers/Branding":"../node_modules/mirador/dist/es/src/containers/Branding.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js"}],"../node_modules/mirador/dist/es/src/containers/WorkspaceControlPanel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _WorkspaceControlPanel = require("../components/WorkspaceControlPanel");
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
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)},
 * drawer: {overflowX: string, height: string}}}
 */

var styles = function styles(theme) {
  var _branding;
  return {
    branding: (_branding = {
      display: 'flex',
      position: 'absolute'
    }, _defineProperty(_branding, theme.breakpoints.up('xs'), {
      display: 'none'
    }), _defineProperty(_branding, theme.breakpoints.up('sm'), {
      bottom: 0,
      display: 'block',
      "float": 'none',
      right: 'auto',
      width: '100%'
    }), _defineProperty(_branding, "right", 0), _branding),
    ctrlBtn: {
      margin: theme.spacing(1)
    },
    drawer: {
      overflowX: 'hidden'
    },
    root: _defineProperty({
      height: 64
    }, theme.breakpoints.up('sm'), {
      height: '100%',
      left: 0,
      right: 'auto',
      width: 64
    }),
    toolbar: _defineProperty({
      display: 'flex',
      justifyContent: 'space-between'
    }, theme.breakpoints.up('sm'), {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      minHeight: 0
    }),
    wide: {
      width: 'auto'
    },
    workspaceButtons: _defineProperty({}, theme.breakpoints.up('sm'), {
      display: 'flex',
      flexDirection: 'column'
    })
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _styles.withStyles)(styles), (0, _withPlugins.withPlugins)('WorkspaceControlPanel') // further HOC go here
);
var _default = exports.default = enhance(_WorkspaceControlPanel.WorkspaceControlPanel);
},{"redux":"../node_modules/redux/es/redux.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/WorkspaceControlPanel":"../node_modules/mirador/dist/es/src/components/WorkspaceControlPanel.js"}],"../node_modules/react-mosaic-component/lib/contextTypes.js":[function(require,module,exports) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MosaicWindowContext = exports.MosaicContext = void 0;
var react_1 = __importDefault(require("react"));
exports.MosaicContext = react_1.default.createContext(undefined);
exports.MosaicWindowContext = react_1.default.createContext(undefined);

},{"react":"../node_modules/react/index.js"}],"../node_modules/@material-ui/icons/MenuSharp.js":[function(require,module,exports) {
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
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
}), 'MenuSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/@material-ui/icons/CropDinSharp.js":[function(require,module,exports) {
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
  d: "M21 3H3v18h18V3zm-2 16H5V5h14v14z"
}), 'CropDinSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/mirador/dist/es/src/components/icons/ThumbnailNavigationBottomIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ThumbnailNavigationBottomIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * ThumbnailNavigationBottomIcon ~
*/

function ThumbnailNavigationBottomIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, props, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M3,3H21V5H3Z",
    transform: "translate(0 16)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M21,5H3V19H21ZM19,17H5V7H19Z",
    transform: "translate(0 -2)"
  })));
}
},{"react":"../node_modules/react/index.js","@material-ui/core/SvgIcon":"../node_modules/@material-ui/core/esm/SvgIcon/index.js"}],"../node_modules/mirador/dist/es/src/components/icons/ThumbnailNavigationRightIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ThumbnailNavigationRightIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * ThumbnailNavigationRightIcon ~
*/

function ThumbnailNavigationRightIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, props, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0,0H24V24H0Z",
    transform: "translate(24) rotate(90)",
    fill: "none"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M3,3H21V5H3Z",
    transform: "translate(24) rotate(90)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M19,3H5V21H19ZM17,19H7V5H17Z",
    transform: "translate(-2)"
  })));
}
},{"react":"../node_modules/react/index.js","@material-ui/core/SvgIcon":"../node_modules/@material-ui/core/esm/SvgIcon/index.js"}],"../node_modules/mirador/dist/es/src/components/WindowThumbnailSettings.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowThumbnailSettings = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));
var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));
var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));
var _CropDinSharp = _interopRequireDefault(require("@material-ui/icons/CropDinSharp"));
var _ThumbnailNavigationBottomIcon = _interopRequireDefault(require("./icons/ThumbnailNavigationBottomIcon"));
var _ThumbnailNavigationRightIcon = _interopRequireDefault(require("./icons/ThumbnailNavigationRightIcon"));
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

var WindowThumbnailSettings = exports.WindowThumbnailSettings = /*#__PURE__*/function (_Component) {
  _inherits(WindowThumbnailSettings, _Component);
  var _super = _createSuper(WindowThumbnailSettings);

  /**
   * constructor -
   */
  function WindowThumbnailSettings(props) {
    var _this;
    _classCallCheck(this, WindowThumbnailSettings);
    _this = _super.call(this, props);
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */

  _createClass(WindowThumbnailSettings, [{
    key: "handleChange",
    value: function handleChange(value) {
      var _this$props = this.props,
        windowId = _this$props.windowId,
        setWindowThumbnailPosition = _this$props.setWindowThumbnailPosition;
      setWindowThumbnailPosition(windowId, value);
    }
    /**
     * render
     *
     * @return {type}  description
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        classes = _this$props2.classes,
        handleClose = _this$props2.handleClose,
        t = _this$props2.t,
        thumbnailNavigationPosition = _this$props2.thumbnailNavigationPosition,
        direction = _this$props2.direction;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ListSubheader.default, {
        role: "presentation",
        disableSticky: true,
        tabIndex: "-1"
      }, t('thumbnails')), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        className: classes.MenuItem,
        onClick: function onClick() {
          _this2.handleChange('off');
          handleClose();
        }
      }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
        value: "off",
        classes: {
          label: thumbnailNavigationPosition === 'off' ? classes.selectedLabel : classes.label
        },
        control: /*#__PURE__*/_react.default.createElement(_CropDinSharp.default, {
          color: thumbnailNavigationPosition === 'off' ? 'secondary' : undefined
        }),
        label: t('off'),
        labelPlacement: "bottom"
      })), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        className: classes.MenuItem,
        onClick: function onClick() {
          _this2.handleChange('far-bottom');
          handleClose();
        }
      }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
        value: "far-bottom",
        classes: {
          label: thumbnailNavigationPosition === 'far-bottom' ? classes.selectedLabel : classes.label
        },
        control: /*#__PURE__*/_react.default.createElement(_ThumbnailNavigationBottomIcon.default, {
          color: thumbnailNavigationPosition === 'far-bottom' ? 'secondary' : undefined
        }),
        label: t('bottom'),
        labelPlacement: "bottom"
      })), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        className: classes.MenuItem,
        onClick: function onClick() {
          _this2.handleChange('far-right');
          handleClose();
        }
      }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
        value: "far-right",
        classes: {
          label: thumbnailNavigationPosition === 'far-right' ? classes.selectedLabel : classes.label
        },
        control: /*#__PURE__*/_react.default.createElement(_ThumbnailNavigationRightIcon.default, {
          color: thumbnailNavigationPosition === 'far-right' ? 'secondary' : undefined,
          style: direction === 'rtl' ? {
            transform: 'rotate(180deg)'
          } : {}
        }),
        label: t('right'),
        labelPlacement: "bottom"
      })));
    }
  }]);
  return WindowThumbnailSettings;
}(_react.Component);
WindowThumbnailSettings.defaultProps = {
  handleClose: function handleClose() {},
  t: function t(key) {
    return key;
  }
};
},{"react":"../node_modules/react/index.js","@material-ui/core/FormControlLabel":"../node_modules/@material-ui/core/esm/FormControlLabel/index.js","@material-ui/core/ListSubheader":"../node_modules/@material-ui/core/esm/ListSubheader/index.js","@material-ui/core/MenuItem":"../node_modules/@material-ui/core/esm/MenuItem/index.js","@material-ui/icons/CropDinSharp":"../node_modules/@material-ui/icons/CropDinSharp.js","./icons/ThumbnailNavigationBottomIcon":"../node_modules/mirador/dist/es/src/components/icons/ThumbnailNavigationBottomIcon.js","./icons/ThumbnailNavigationRightIcon":"../node_modules/mirador/dist/es/src/components/icons/ThumbnailNavigationRightIcon.js"}],"../node_modules/mirador/dist/es/src/containers/WindowThumbnailSettings.js":[function(require,module,exports) {
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
var _WindowThumbnailSettings = require("../components/WindowThumbnailSettings");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */

var mapDispatchToProps = {
  setWindowThumbnailPosition: actions.setWindowThumbnailPosition
};
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    direction: (0, _selectors.getThemeDirection)(state),
    thumbnailNavigationPosition: (0, _selectors.getThumbnailNavigationPosition)(state, {
      windowId: windowId
    })
  };
};
/** */

var styles = function styles(theme) {
  return {
    label: {
      borderBottom: '2px solid transparent'
    },
    MenuItem: {
      display: 'inline-block'
    },
    selectedLabel: {
      borderBottom: "2px solid ".concat(theme.palette.secondary.main),
      color: theme.palette.secondary.main
    }
  };
};
var enhance = (0, _redux.compose)((0, _styles.withStyles)(styles), (0, _reactI18next.withTranslation)(null, {
  withRef: true
}), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true
}), (0, _withPlugins.withPlugins)('WindowThumbnailSettings') // further HOC go here
);
var _default = exports.default = enhance(_WindowThumbnailSettings.WindowThumbnailSettings);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/WindowThumbnailSettings":"../node_modules/mirador/dist/es/src/components/WindowThumbnailSettings.js"}],"../node_modules/@material-ui/icons/CropOriginalSharp.js":[function(require,module,exports) {
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
  d: "M21 3H3v18h18V3zm-2 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"
}), 'CropOriginalSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/@material-ui/icons/ViewColumn.js":[function(require,module,exports) {
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
  d: "M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"
}), 'ViewColumn');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/mirador/dist/es/src/components/icons/BookViewIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BookViewIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * BookViewIcon ~
*/

function BookViewIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, props, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M1,4V21H22.853V4.1ZM3,19V6h8V19Zm18,0H13V6h8ZM14,9.5h6V11H14ZM14,12h6v1.5H14Zm0,2.5h6V16H14Z"
  })));
}
},{"react":"../node_modules/react/index.js","@material-ui/core/SvgIcon":"../node_modules/@material-ui/core/esm/SvgIcon/index.js"}],"../node_modules/mirador/dist/es/src/components/icons/GalleryViewIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GalleryViewIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * GalleryViewIcon ~
 */

function GalleryViewIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, props, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M19.974,2H2V19.974H19.974V2ZM7.392,18.177H3.8V14.582H7.392Zm0-5.392H3.8V9.19H7.392Zm0-5.392H3.8V3.8H7.392Zm5.392,10.785H9.19V14.582h3.595Zm0-5.392H9.19V9.19h3.595Zm0-5.392H9.19V3.8h3.595Zm5.392,10.785H14.582V14.582h3.595Zm0-5.392H14.582V9.19h3.595Zm0-5.392H14.582V3.8h3.595Z",
    transform: "translate(1 1)"
  })));
}
},{"react":"../node_modules/react/index.js","@material-ui/core/SvgIcon":"../node_modules/@material-ui/core/esm/SvgIcon/index.js"}],"../node_modules/mirador/dist/es/src/components/WindowViewSettings.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowViewSettings = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));
var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));
var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));
var _CropOriginalSharp = _interopRequireDefault(require("@material-ui/icons/CropOriginalSharp"));
var _ViewColumn = _interopRequireDefault(require("@material-ui/icons/ViewColumn"));
var _BookViewIcon = _interopRequireDefault(require("./icons/BookViewIcon"));
var _GalleryViewIcon = _interopRequireDefault(require("./icons/GalleryViewIcon"));
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

var WindowViewSettings = exports.WindowViewSettings = /*#__PURE__*/function (_Component) {
  _inherits(WindowViewSettings, _Component);
  var _super = _createSuper(WindowViewSettings);

  /**
   * constructor -
   */
  function WindowViewSettings(props) {
    var _this;
    _classCallCheck(this, WindowViewSettings);
    _this = _super.call(this, props);
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */

  _createClass(WindowViewSettings, [{
    key: "handleChange",
    value: function handleChange(value) {
      var _this$props = this.props,
        windowId = _this$props.windowId,
        setWindowViewType = _this$props.setWindowViewType;
      setWindowViewType(windowId, value);
    }
    /**
     * render
     *
     * @return {type}  description
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        classes = _this$props2.classes,
        handleClose = _this$props2.handleClose,
        t = _this$props2.t,
        windowViewType = _this$props2.windowViewType,
        viewTypes = _this$props2.viewTypes;
      var iconMap = {
        book: _BookViewIcon.default,
        gallery: _GalleryViewIcon.default,
        scroll: _ViewColumn.default,
        single: _CropOriginalSharp.default
      };
      /** Suspiciously similar to a component, yet if it is invoked through JSX
          none of the click handlers work? */

      var menuItem = function menuItem(_ref) {
        var value = _ref.value,
          Icon = _ref.Icon;
        return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
          key: value,
          className: classes.MenuItem,
          autoFocus: windowViewType === value,
          onClick: function onClick() {
            _this2.handleChange(value);
            handleClose();
          }
        }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
          value: value,
          classes: {
            label: windowViewType === value ? classes.selectedLabel : classes.label
          },
          control: /*#__PURE__*/_react.default.createElement(Icon, {
            color: windowViewType === value ? 'secondary' : undefined
          }),
          label: t(value),
          labelPlacement: "bottom"
        }));
      };
      if (viewTypes.length === 0) return null;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ListSubheader.default, {
        role: "presentation",
        disableSticky: true,
        tabIndex: "-1"
      }, t('view')), viewTypes.map(function (value) {
        return menuItem({
          Icon: iconMap[value],
          value: value
        });
      }));
    }
  }]);
  return WindowViewSettings;
}(_react.Component);
WindowViewSettings.defaultProps = {
  handleClose: function handleClose() {},
  t: function t(key) {
    return key;
  },
  viewTypes: []
};
},{"react":"../node_modules/react/index.js","@material-ui/core/FormControlLabel":"../node_modules/@material-ui/core/esm/FormControlLabel/index.js","@material-ui/core/MenuItem":"../node_modules/@material-ui/core/esm/MenuItem/index.js","@material-ui/core/ListSubheader":"../node_modules/@material-ui/core/esm/ListSubheader/index.js","@material-ui/icons/CropOriginalSharp":"../node_modules/@material-ui/icons/CropOriginalSharp.js","@material-ui/icons/ViewColumn":"../node_modules/@material-ui/icons/ViewColumn.js","./icons/BookViewIcon":"../node_modules/mirador/dist/es/src/components/icons/BookViewIcon.js","./icons/GalleryViewIcon":"../node_modules/mirador/dist/es/src/components/icons/GalleryViewIcon.js"}],"../node_modules/mirador/dist/es/src/containers/WindowViewSettings.js":[function(require,module,exports) {
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
var _WindowViewSettings = require("../components/WindowViewSettings");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */

var mapDispatchToProps = {
  setWindowViewType: actions.setWindowViewType
};
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    viewTypes: (0, _selectors.getAllowedWindowViewTypes)(state, {
      windowId: windowId
    }),
    windowViewType: (0, _selectors.getWindowViewType)(state, {
      windowId: windowId
    })
  };
};
/** */

var styles = function styles(theme) {
  return {
    label: {
      borderBottom: '2px solid transparent'
    },
    MenuItem: {
      display: 'inline-block'
    },
    selectedLabel: {
      borderBottom: "2px solid ".concat(theme.palette.secondary.main),
      color: theme.palette.secondary.main
    }
  };
};
var enhance = (0, _redux.compose)((0, _styles.withStyles)(styles), (0, _reactI18next.withTranslation)(null, {
  withRef: true
}), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true
}), (0, _withPlugins.withPlugins)('WindowViewSettings'));
var _default = exports.default = enhance(_WindowViewSettings.WindowViewSettings);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/WindowViewSettings":"../node_modules/mirador/dist/es/src/components/WindowViewSettings.js"}],"../node_modules/mirador/dist/es/src/components/WindowTopMenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowTopMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Menu = _interopRequireDefault(require("@material-ui/core//Menu"));
var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));
var _WindowThumbnailSettings = _interopRequireDefault(require("../containers/WindowThumbnailSettings"));
var _WindowViewSettings = _interopRequireDefault(require("../containers/WindowViewSettings"));
var _PluginHook = require("./PluginHook");
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
/** Renders plugins */

function PluginHookWithHeader(props) {
  var PluginComponents = props.PluginComponents,
    t = props.t; // eslint-disable-line react/prop-types

  return PluginComponents ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ListSubheader.default, {
    role: "presentation",
    disableSticky: true,
    tabIndex: "-1"
  }, t('windowPluginButtons')), /*#__PURE__*/_react.default.createElement(_PluginHook.PluginHook, props)) : null;
}
/**
 */

var WindowTopMenu = exports.WindowTopMenu = /*#__PURE__*/function (_Component) {
  _inherits(WindowTopMenu, _Component);
  var _super = _createSuper(WindowTopMenu);
  function WindowTopMenu() {
    _classCallCheck(this, WindowTopMenu);
    return _super.apply(this, arguments);
  }
  _createClass(WindowTopMenu, [{
    key: "render",
    value:
    /**
     * render
     * @return
     */
    function render() {
      var _this$props = this.props,
        containerId = _this$props.containerId,
        handleClose = _this$props.handleClose,
        anchorEl = _this$props.anchorEl,
        showThumbnailNavigationSettings = _this$props.showThumbnailNavigationSettings,
        toggleDraggingEnabled = _this$props.toggleDraggingEnabled,
        windowId = _this$props.windowId;
      return /*#__PURE__*/_react.default.createElement(_Menu.default, {
        id: "window-menu_".concat(windowId),
        container: document.querySelector("#".concat(containerId, " .").concat((0, _cssNs.default)('viewer'))),
        anchorEl: anchorEl,
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'bottom'
        },
        transformOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        getContentAnchorEl: null,
        open: Boolean(anchorEl),
        onClose: handleClose,
        onEntering: toggleDraggingEnabled,
        onExit: toggleDraggingEnabled,
        orientation: "horizontal"
      }, /*#__PURE__*/_react.default.createElement(_WindowViewSettings.default, {
        windowId: windowId,
        handleClose: handleClose
      }), showThumbnailNavigationSettings && /*#__PURE__*/_react.default.createElement(_WindowThumbnailSettings.default, {
        windowId: windowId,
        handleClose: handleClose
      }), /*#__PURE__*/_react.default.createElement(PluginHookWithHeader, this.props));
    }
  }]);
  return WindowTopMenu;
}(_react.Component);
WindowTopMenu.defaultProps = {
  anchorEl: null,
  showThumbnailNavigationSettings: true
};
},{"react":"../node_modules/react/index.js","@material-ui/core//Menu":"../node_modules/@material-ui/core/esm/Menu/index.js","@material-ui/core/ListSubheader":"../node_modules/@material-ui/core/esm/ListSubheader/index.js","../containers/WindowThumbnailSettings":"../node_modules/mirador/dist/es/src/containers/WindowThumbnailSettings.js","../containers/WindowViewSettings":"../node_modules/mirador/dist/es/src/containers/WindowViewSettings.js","./PluginHook":"../node_modules/mirador/dist/es/src/components/PluginHook.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js"}],"../node_modules/mirador/dist/es/src/containers/WindowTopMenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _WindowTopMenu = require("../components/WindowTopMenu");
var _selectors = require("../state/selectors");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowTopMenu
 * @private
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    containerId: (0, _selectors.getContainerId)(state),
    showThumbnailNavigationSettings: (0, _selectors.getConfig)(state).thumbnailNavigation.displaySettings
  };
};
/**
 * mapStateToProps - used to hook up connect to state
 * @memberof WindowTopMenu
 * @private
 */

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleDraggingEnabled: function toggleDraggingEnabled() {
      return dispatch(actions.toggleDraggingEnabled());
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('WindowTopMenu'));
var _default = exports.default = enhance(_WindowTopMenu.WindowTopMenu);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../components/WindowTopMenu":"../node_modules/mirador/dist/es/src/components/WindowTopMenu.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js"}],"../node_modules/mirador/dist/es/src/components/icons/WindowOptionsIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WindowOptionsIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * WindowMinIcon ~
*/

function WindowOptionsIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, props, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0,0H24V24H0Z",
    fill: "none"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M24.852,17.981,3,18V15.945l21.852-.019Z",
    transform: "translate(-2 5)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M1,4V21H22.853V4.1ZM3,19V6h8V19Zm18,0H13V6h8Z",
    transform: "translate(0 -2)"
  })));
}
},{"react":"../node_modules/react/index.js","@material-ui/core/SvgIcon":"../node_modules/@material-ui/core/esm/SvgIcon/index.js"}],"../node_modules/mirador/dist/es/src/components/WindowTopMenuButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowTopMenuButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _WindowTopMenu = _interopRequireDefault(require("../containers/WindowTopMenu"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
var _WindowOptionsIcon = _interopRequireDefault(require("./icons/WindowOptionsIcon"));
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

var WindowTopMenuButton = exports.WindowTopMenuButton = /*#__PURE__*/function (_Component) {
  _inherits(WindowTopMenuButton, _Component);
  var _super = _createSuper(WindowTopMenuButton);

  /**
   * constructor -
   */
  function WindowTopMenuButton(props) {
    var _this;
    _classCallCheck(this, WindowTopMenuButton);
    _this = _super.call(this, props);
    _this.state = {
      anchorEl: null
    };
    _this.handleMenuClick = _this.handleMenuClick.bind(_assertThisInitialized(_this));
    _this.handleMenuClose = _this.handleMenuClose.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */

  _createClass(WindowTopMenuButton, [{
    key: "handleMenuClick",
    value: function handleMenuClick(event) {
      this.setState({
        anchorEl: event.currentTarget
      });
    }
    /**
     * @private
     */
  }, {
    key: "handleMenuClose",
    value: function handleMenuClose() {
      this.setState({
        anchorEl: null
      });
    }
    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        t = _this$props.t,
        windowId = _this$props.windowId;
      var anchorEl = this.state.anchorEl;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        "aria-haspopup": "true",
        "aria-label": t('windowMenu'),
        "aria-owns": anchorEl ? "window-menu_".concat(windowId) : undefined,
        className: anchorEl ? classes.ctrlBtnSelected : null,
        onClick: this.handleMenuClick
      }, /*#__PURE__*/_react.default.createElement(_WindowOptionsIcon.default, null)), /*#__PURE__*/_react.default.createElement(_WindowTopMenu.default, {
        windowId: windowId,
        anchorEl: anchorEl,
        handleClose: this.handleMenuClose
      }));
    }
  }]);
  return WindowTopMenuButton;
}(_react.Component);
WindowTopMenuButton.defaultProps = {
  t: function t(key) {
    return key;
  }
};
},{"react":"../node_modules/react/index.js","../containers/WindowTopMenu":"../node_modules/mirador/dist/es/src/containers/WindowTopMenu.js","../containers/MiradorMenuButton":"../node_modules/mirador/dist/es/src/containers/MiradorMenuButton.js","./icons/WindowOptionsIcon":"../node_modules/mirador/dist/es/src/components/icons/WindowOptionsIcon.js"}],"../node_modules/mirador/dist/es/src/containers/WindowTopMenuButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _core = require("@material-ui/core");
var _withPlugins = require("../extend/withPlugins");
var _WindowTopMenuButton = require("../components/WindowTopMenuButton");
/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */

var styles = function styles(theme) {
  return {
    ctrlBtnSelected: {
      backgroundColor: theme.palette.action.selected
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _withPlugins.withPlugins)('WindowTopMenuButton'));
var _default = exports.default = enhance(_WindowTopMenuButton.WindowTopMenuButton);
},{"redux":"../node_modules/redux/es/redux.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/WindowTopMenuButton":"../node_modules/mirador/dist/es/src/components/WindowTopMenuButton.js"}],"../node_modules/mirador/dist/es/src/components/WindowTopBarPluginArea.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowTopBarPluginArea = void 0;
var _react = _interopRequireWildcard(require("react"));
var _PluginHook = require("./PluginHook");
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

var WindowTopBarPluginArea = exports.WindowTopBarPluginArea = /*#__PURE__*/function (_Component) {
  _inherits(WindowTopBarPluginArea, _Component);
  var _super = _createSuper(WindowTopBarPluginArea);
  function WindowTopBarPluginArea() {
    _classCallCheck(this, WindowTopBarPluginArea);
    return _super.apply(this, arguments);
  }
  _createClass(WindowTopBarPluginArea, [{
    key: "render",
    value: /** */
    function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_PluginHook.PluginHook, this.props));
    }
  }]);
  return WindowTopBarPluginArea;
}(_react.Component);
},{"react":"../node_modules/react/index.js","./PluginHook":"../node_modules/mirador/dist/es/src/components/PluginHook.js"}],"../node_modules/mirador/dist/es/src/containers/WindowTopBarPluginArea.js":[function(require,module,exports) {
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
var _WindowTopBarPluginArea = require("../components/WindowTopBarPluginArea");
/**
 */

var styles = {};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(null, null), (0, _withPlugins.withPlugins)('WindowTopBarPluginArea'));
var _default = exports.default = enhance(_WindowTopBarPluginArea.WindowTopBarPluginArea);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/WindowTopBarPluginArea":"../node_modules/mirador/dist/es/src/components/WindowTopBarPluginArea.js"}],"../node_modules/@material-ui/icons/MoreVertSharp.js":[function(require,module,exports) {
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
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreVertSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/mirador/dist/es/src/components/WindowTopBarPluginMenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowTopBarPluginMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MoreVertSharp = _interopRequireDefault(require("@material-ui/icons/MoreVertSharp"));
var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
var _PluginHook = require("./PluginHook");
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

var WindowTopBarPluginMenu = exports.WindowTopBarPluginMenu = /*#__PURE__*/function (_Component) {
  _inherits(WindowTopBarPluginMenu, _Component);
  var _super = _createSuper(WindowTopBarPluginMenu);

  /**
   * constructor -
   */
  function WindowTopBarPluginMenu(props) {
    var _this;
    _classCallCheck(this, WindowTopBarPluginMenu);
    _this = _super.call(this, props);
    _this.state = {
      anchorEl: null
    };
    _this.handleMenuClick = _this.handleMenuClick.bind(_assertThisInitialized(_this));
    _this.handleMenuClose = _this.handleMenuClose.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Set the anchorEl state to the click target
   */

  _createClass(WindowTopBarPluginMenu, [{
    key: "handleMenuClick",
    value: function handleMenuClick(event) {
      this.setState({
        anchorEl: event.currentTarget
      });
    }
    /**
     * Set the anchorEl state to null (closing the menu)
     */
  }, {
    key: "handleMenuClose",
    value: function handleMenuClose() {
      this.setState({
        anchorEl: null
      });
    }
    /**
     * render component
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        classes = _this$props.classes,
        containerId = _this$props.containerId,
        PluginComponents = _this$props.PluginComponents,
        t = _this$props.t,
        windowId = _this$props.windowId,
        menuIcon = _this$props.menuIcon;
      var anchorEl = this.state.anchorEl;
      if (!PluginComponents || PluginComponents.length === 0) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        "aria-haspopup": "true",
        "aria-label": t('windowPluginMenu'),
        "aria-owns": anchorEl ? "window-plugin-menu_".concat(windowId) : undefined,
        className: anchorEl ? classes.ctrlBtnSelected : null,
        onClick: this.handleMenuClick
      }, menuIcon), /*#__PURE__*/_react.default.createElement(_Menu.default, {
        id: "window-plugin-menu_".concat(windowId),
        container: document.querySelector("#".concat(containerId, " .").concat((0, _cssNs.default)('viewer'))),
        anchorEl: anchorEl,
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'bottom'
        },
        transformOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        getContentAnchorEl: null,
        open: Boolean(anchorEl),
        onClose: function onClose() {
          return _this2.handleMenuClose();
        }
      }, /*#__PURE__*/_react.default.createElement(_PluginHook.PluginHook, Object.assign({
        handleClose: function handleClose() {
          return _this2.handleMenuClose();
        }
      }, this.props))));
    }
  }]);
  return WindowTopBarPluginMenu;
}(_react.Component);
WindowTopBarPluginMenu.defaultProps = {
  classes: {},
  menuIcon: /*#__PURE__*/_react.default.createElement(_MoreVertSharp.default, null),
  PluginComponents: []
};
},{"react":"../node_modules/react/index.js","@material-ui/icons/MoreVertSharp":"../node_modules/@material-ui/icons/MoreVertSharp.js","@material-ui/core/Menu":"../node_modules/@material-ui/core/esm/Menu/index.js","../containers/MiradorMenuButton":"../node_modules/mirador/dist/es/src/containers/MiradorMenuButton.js","./PluginHook":"../node_modules/mirador/dist/es/src/components/PluginHook.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js"}],"../node_modules/mirador/dist/es/src/containers/WindowTopBarPluginMenu.js":[function(require,module,exports) {
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
var _WindowTopBarPluginMenu = require("../components/WindowTopBarPluginMenu");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowTopBarPluginMenu
 * @private
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    containerId: (0, _selectors.getContainerId)(state)
  };
};
/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */

var styles = function styles(theme) {
  return {
    ctrlBtnSelected: {
      backgroundColor: theme.palette.action.selected
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, null), (0, _withPlugins.withPlugins)('WindowTopBarPluginMenu'));
var _default = exports.default = enhance(_WindowTopBarPluginMenu.WindowTopBarPluginMenu);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/WindowTopBarPluginMenu":"../node_modules/mirador/dist/es/src/components/WindowTopBarPluginMenu.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js"}],"../node_modules/@material-ui/icons/ErrorOutlineSharp.js":[function(require,module,exports) {
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
  d: "M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'ErrorOutlineSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/mirador/dist/es/src/components/WindowTopBarTitle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowTopBarTitle = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _Skeleton = _interopRequireDefault(require("@material-ui/lab/Skeleton"));
var _ErrorOutlineSharp = _interopRequireDefault(require("@material-ui/icons/ErrorOutlineSharp"));
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
 * WindowTopBarTitle
 */

var WindowTopBarTitle = exports.WindowTopBarTitle = /*#__PURE__*/function (_Component) {
  _inherits(WindowTopBarTitle, _Component);
  var _super = _createSuper(WindowTopBarTitle);
  function WindowTopBarTitle() {
    _classCallCheck(this, WindowTopBarTitle);
    return _super.apply(this, arguments);
  }
  _createClass(WindowTopBarTitle, [{
    key: "render",
    value:
    /**
     * render
     * @return
     */
    function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        error = _this$props.error,
        hideWindowTitle = _this$props.hideWindowTitle,
        isFetching = _this$props.isFetching,
        manifestTitle = _this$props.manifestTitle;
      /** */

      var TitleTypography = function TitleTypography(props) {
        return /*#__PURE__*/_react.default.createElement(_Typography.default, Object.assign({
          variant: "h2",
          noWrap: true,
          color: "inherit",
          className: classes.title
        }, props), props.children);
      };
      var title = null;
      if (isFetching) {
        title = /*#__PURE__*/_react.default.createElement(TitleTypography, null, /*#__PURE__*/_react.default.createElement(_Skeleton.default, {
          variant: "text"
        }));
      } else if (error) {
        title = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ErrorOutlineSharp.default, {
          color: "error"
        }), /*#__PURE__*/_react.default.createElement(TitleTypography, {
          color: "textSecondary"
        }, error));
      } else if (hideWindowTitle) {
        title = /*#__PURE__*/_react.default.createElement("div", {
          className: classes.title
        });
      } else {
        title = /*#__PURE__*/_react.default.createElement(TitleTypography, null, manifestTitle);
      }
      return title;
    }
  }]);
  return WindowTopBarTitle;
}(_react.Component);
WindowTopBarTitle.defaultProps = {
  error: null,
  hideWindowTitle: false,
  isFetching: false,
  manifestTitle: ''
};
},{"react":"../node_modules/react/index.js","@material-ui/core/Typography":"../node_modules/@material-ui/core/esm/Typography/index.js","@material-ui/lab/Skeleton":"../node_modules/@material-ui/lab/esm/Skeleton/index.js","@material-ui/icons/ErrorOutlineSharp":"../node_modules/@material-ui/icons/ErrorOutlineSharp.js"}],"../node_modules/mirador/dist/es/src/containers/WindowTopBarTitle.js":[function(require,module,exports) {
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
var _selectors = require("../state/selectors");
var _WindowTopBarTitle = require("../components/WindowTopBarTitle");
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
/** mapStateToProps */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    error: (0, _selectors.getManifestStatus)(state, {
      windowId: windowId
    }).error,
    hideWindowTitle: (0, _selectors.getWindowConfig)(state, {
      windowId: windowId
    }).hideWindowTitle,
    isFetching: (0, _selectors.getManifestStatus)(state, {
      windowId: windowId
    }).isFetching,
    manifestTitle: (0, _selectors.getManifestTitle)(state, {
      windowId: windowId
    })
  };
};
/**
 * @param theme
 */

var styles = function styles(theme) {
  return {
    title: _objectSpread(_objectSpread({}, theme.typography.h6), {}, {
      flexGrow: 1,
      paddingLeft: theme.spacing(0.5)
    })
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, null), (0, _withPlugins.withPlugins)('WindowTopBarTitle'));
var _default = exports.default = enhance(_WindowTopBarTitle.WindowTopBarTitle);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/WindowTopBarTitle":"../node_modules/mirador/dist/es/src/components/WindowTopBarTitle.js"}],"../node_modules/mirador/dist/es/src/components/icons/WindowMaxIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WindowMaxIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * WindowMaxIcon ~
*/

function WindowMaxIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, props, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M7,14H5v5h5V17H7Zm7-9V7h3v3h2V5Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M22.517,1.524H1.736V22.37H22.517Zm-2,18.845H3.736V3.524H20.517Z"
  })));
}
},{"react":"../node_modules/react/index.js","@material-ui/core/SvgIcon":"../node_modules/@material-ui/core/esm/SvgIcon/index.js"}],"../node_modules/mirador/dist/es/src/components/icons/WindowMinIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WindowMinIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * WindowMinIcon ~
*/

function WindowMinIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, props, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M5,16H8v3h2V14H5ZM16,8V5H14v5h5V8Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M22.517,1.524H1.736V22.37H22.517Zm-2,18.845H3.736V3.524H20.517Z"
  })));
}
},{"react":"../node_modules/react/index.js","@material-ui/core/SvgIcon":"../node_modules/@material-ui/core/esm/SvgIcon/index.js"}],"../node_modules/mirador/dist/es/src/components/WindowTopBar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowTopBar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MenuSharp = _interopRequireDefault(require("@material-ui/icons/MenuSharp"));
var _CloseSharp = _interopRequireDefault(require("@material-ui/icons/CloseSharp"));
var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));
var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));
var _classnames = _interopRequireDefault(require("classnames"));
var _WindowTopMenuButton = _interopRequireDefault(require("../containers/WindowTopMenuButton"));
var _WindowTopBarPluginArea = _interopRequireDefault(require("../containers/WindowTopBarPluginArea"));
var _WindowTopBarPluginMenu = _interopRequireDefault(require("../containers/WindowTopBarPluginMenu"));
var _WindowTopBarTitle = _interopRequireDefault(require("../containers/WindowTopBarTitle"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
var _FullScreenButton = _interopRequireDefault(require("../containers/FullScreenButton"));
var _WindowMaxIcon = _interopRequireDefault(require("./icons/WindowMaxIcon"));
var _WindowMinIcon = _interopRequireDefault(require("./icons/WindowMinIcon"));
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
 * WindowTopBar
 */

var WindowTopBar = exports.WindowTopBar = /*#__PURE__*/function (_Component) {
  _inherits(WindowTopBar, _Component);
  var _super = _createSuper(WindowTopBar);
  function WindowTopBar() {
    _classCallCheck(this, WindowTopBar);
    return _super.apply(this, arguments);
  }
  _createClass(WindowTopBar, [{
    key: "render",
    value:
    /**
     * render
     * @return
     */
    function render() {
      var _this$props = this.props,
        removeWindow = _this$props.removeWindow,
        windowId = _this$props.windowId,
        classes = _this$props.classes,
        toggleWindowSideBar = _this$props.toggleWindowSideBar,
        t = _this$props.t,
        windowDraggable = _this$props.windowDraggable,
        maximizeWindow = _this$props.maximizeWindow,
        maximized = _this$props.maximized,
        minimizeWindow = _this$props.minimizeWindow,
        focused = _this$props.focused,
        allowClose = _this$props.allowClose,
        allowMaximize = _this$props.allowMaximize,
        focusWindow = _this$props.focusWindow,
        allowFullscreen = _this$props.allowFullscreen,
        allowTopMenuButton = _this$props.allowTopMenuButton,
        allowWindowSideBar = _this$props.allowWindowSideBar;
      return /*#__PURE__*/_react.default.createElement(_AppBar.default, {
        position: "relative",
        color: "default"
      }, /*#__PURE__*/_react.default.createElement("nav", {
        "aria-label": t('windowNavigation')
      }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
        disableGutters: true,
        onMouseDown: focusWindow,
        className: (0, _classnames.default)(classes.windowTopBarStyle, windowDraggable ? classes.windowTopBarStyleDraggable : null, focused ? classes.focused : null, (0, _cssNs.default)('window-top-bar')),
        variant: "dense"
      }, allowWindowSideBar && /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('toggleWindowSideBar'),
        onClick: toggleWindowSideBar
      }, /*#__PURE__*/_react.default.createElement(_MenuSharp.default, null)), /*#__PURE__*/_react.default.createElement(_WindowTopBarTitle.default, {
        windowId: windowId
      }), allowTopMenuButton && /*#__PURE__*/_react.default.createElement(_WindowTopMenuButton.default, {
        className: (0, _cssNs.default)('window-menu-btn'),
        windowId: windowId
      }), /*#__PURE__*/_react.default.createElement(_WindowTopBarPluginArea.default, {
        windowId: windowId
      }), /*#__PURE__*/_react.default.createElement(_WindowTopBarPluginMenu.default, {
        windowId: windowId
      }), allowMaximize && /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": maximized ? t('minimizeWindow') : t('maximizeWindow'),
        className: (0, _cssNs.default)('window-maximize'),
        onClick: maximized ? minimizeWindow : maximizeWindow
      }, maximized ? /*#__PURE__*/_react.default.createElement(_WindowMinIcon.default, null) : /*#__PURE__*/_react.default.createElement(_WindowMaxIcon.default, null)), allowFullscreen && /*#__PURE__*/_react.default.createElement(_FullScreenButton.default, null), allowClose && /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('closeWindow'),
        className: (0, _cssNs.default)('window-close'),
        onClick: removeWindow
      }, /*#__PURE__*/_react.default.createElement(_CloseSharp.default, null)))));
    }
  }]);
  return WindowTopBar;
}(_react.Component);
WindowTopBar.defaultProps = {
  allowClose: true,
  allowFullscreen: false,
  allowMaximize: true,
  allowTopMenuButton: true,
  allowWindowSideBar: true,
  focused: false,
  focusWindow: function focusWindow() {},
  maximized: false,
  maximizeWindow: function maximizeWindow() {},
  minimizeWindow: function minimizeWindow() {},
  t: function t(key) {
    return key;
  },
  windowDraggable: true
};
},{"react":"../node_modules/react/index.js","@material-ui/icons/MenuSharp":"../node_modules/@material-ui/icons/MenuSharp.js","@material-ui/icons/CloseSharp":"../node_modules/@material-ui/icons/CloseSharp.js","@material-ui/core/Toolbar":"../node_modules/@material-ui/core/esm/Toolbar/index.js","@material-ui/core/AppBar":"../node_modules/@material-ui/core/esm/AppBar/index.js","classnames":"../node_modules/classnames/index.js","../containers/WindowTopMenuButton":"../node_modules/mirador/dist/es/src/containers/WindowTopMenuButton.js","../containers/WindowTopBarPluginArea":"../node_modules/mirador/dist/es/src/containers/WindowTopBarPluginArea.js","../containers/WindowTopBarPluginMenu":"../node_modules/mirador/dist/es/src/containers/WindowTopBarPluginMenu.js","../containers/WindowTopBarTitle":"../node_modules/mirador/dist/es/src/containers/WindowTopBarTitle.js","../containers/MiradorMenuButton":"../node_modules/mirador/dist/es/src/containers/MiradorMenuButton.js","../containers/FullScreenButton":"../node_modules/mirador/dist/es/src/containers/FullScreenButton.js","./icons/WindowMaxIcon":"../node_modules/mirador/dist/es/src/components/icons/WindowMaxIcon.js","./icons/WindowMinIcon":"../node_modules/mirador/dist/es/src/components/icons/WindowMinIcon.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js"}],"../node_modules/mirador/dist/es/src/containers/WindowTopBar.js":[function(require,module,exports) {
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
var _WindowTopBar = require("../components/WindowTopBar");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** mapStateToProps */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  var config = (0, _selectors.getWindowConfig)(state, {
    windowId: windowId
  });
  return {
    allowClose: config.allowClose,
    allowFullscreen: config.allowFullscreen,
    allowMaximize: config.allowMaximize,
    allowTopMenuButton: config.allowTopMenuButton,
    allowWindowSideBar: config.allowWindowSideBar,
    focused: (0, _selectors.isFocused)(state, {
      windowId: windowId
    }),
    maximized: config.maximized
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var windowId = _ref2.windowId;
  return {
    focusWindow: function focusWindow() {
      return dispatch(actions.focusWindow(windowId));
    },
    maximizeWindow: function maximizeWindow() {
      return dispatch(actions.maximizeWindow(windowId));
    },
    minimizeWindow: function minimizeWindow() {
      return dispatch(actions.minimizeWindow(windowId));
    },
    removeWindow: function removeWindow() {
      return dispatch(actions.removeWindow(windowId));
    },
    toggleWindowSideBar: function toggleWindowSideBar() {
      return dispatch(actions.toggleWindowSideBar(windowId));
    }
  };
};
/**
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: number|string},
 * windowTopBarStyle: {minHeight: number, paddingLeft: number, backgroundColor: string}}}
 */

var styles = function styles(theme) {
  return {
    focused: {},
    windowTopBarStyle: {
      '&$focused': {
        borderTop: "2px solid ".concat(theme.palette.primary.main)
      },
      backgroundColor: theme.palette.shades.main,
      borderTop: '2px solid transparent',
      minHeight: 32,
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5)
    },
    windowTopBarStyleDraggable: {
      cursor: 'move'
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('WindowTopBar'));
var _default = exports.default = enhance(_WindowTopBar.WindowTopBar);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/WindowTopBar":"../node_modules/mirador/dist/es/src/components/WindowTopBar.js"}],"../node_modules/@material-ui/icons/InfoSharp.js":[function(require,module,exports) {
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
}), 'InfoSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/@material-ui/icons/CommentSharp.js":[function(require,module,exports) {
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
  d: "M21.99 2H2v16h16l4 4-.01-20zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
}), 'CommentSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/@material-ui/icons/CopyrightSharp.js":[function(require,module,exports) {
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
  d: "M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91c.48.22 1.05.34 1.7.34.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'CopyrightSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/@material-ui/icons/LayersSharp.js":[function(require,module,exports) {
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
  d: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"
}), 'LayersSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/mirador/dist/es/src/components/icons/CanvasIndexIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CanvasIndexIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Render the canvas index svg
 */

function CanvasIndexIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, props, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M6.924,21H21V19H6.924ZM3,17H21V15H3Zm3.924-4H21V11H6.924Zm0-4H21V7H6.924ZM3,3V5H21V3Z"
  })));
}
},{"react":"../node_modules/react/index.js","@material-ui/core/SvgIcon":"../node_modules/@material-ui/core/esm/SvgIcon/index.js"}],"../node_modules/mirador/dist/es/src/components/WindowSideBarButtons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowSideBarButtons = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));
var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));
var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));
var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));
var _InfoSharp = _interopRequireDefault(require("@material-ui/icons/InfoSharp"));
var _CommentSharp = _interopRequireDefault(require("@material-ui/icons/CommentSharp"));
var _CopyrightSharp = _interopRequireDefault(require("@material-ui/icons/CopyrightSharp"));
var _LayersSharp = _interopRequireDefault(require("@material-ui/icons/LayersSharp"));
var _SearchSharp = _interopRequireDefault(require("@material-ui/icons/SearchSharp"));
var _CanvasIndexIcon = _interopRequireDefault(require("./icons/CanvasIndexIcon"));
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

var WindowSideBarButtons = exports.WindowSideBarButtons = /*#__PURE__*/function (_Component) {
  _inherits(WindowSideBarButtons, _Component);
  var _super = _createSuper(WindowSideBarButtons);

  /** */
  function WindowSideBarButtons(props) {
    var _this;
    _classCallCheck(this, WindowSideBarButtons);
    _this = _super.call(this, props);
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @param {object} event the change event
   * @param {string} value the tab's value
  */

  _createClass(WindowSideBarButtons, [{
    key: "handleChange",
    value: function handleChange(event, value) {
      var addCompanionWindow = this.props.addCompanionWindow;
      addCompanionWindow(value);
    }
    /**
     * render
     *
     * @return {type}  description
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        classes = _this$props.classes,
        hasAnnotations = _this$props.hasAnnotations,
        hasAnyAnnotations = _this$props.hasAnyAnnotations,
        hasAnyLayers = _this$props.hasAnyLayers,
        hasCurrentLayers = _this$props.hasCurrentLayers,
        hasSearchResults = _this$props.hasSearchResults,
        hasSearchService = _this$props.hasSearchService,
        panels = _this$props.panels,
        PluginComponents = _this$props.PluginComponents,
        sideBarPanel = _this$props.sideBarPanel,
        t = _this$props.t;
      /** */

      var TabButton = function TabButton(props) {
        return /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
          title: t('openCompanionWindow', {
            context: props.value
          })
        }, /*#__PURE__*/_react.default.createElement(_Tab.default, Object.assign({}, props, {
          classes: {
            root: classes.tab,
            selected: classes.tabSelected
          },
          "aria-label": t('openCompanionWindow', {
            context: props.value
          }),
          disableRipple: true,
          onKeyUp: _this2.handleKeyUp
        })));
      };
      return /*#__PURE__*/_react.default.createElement(_Tabs.default, {
        classes: {
          flexContainer: classes.tabsFlexContainer,
          indicator: classes.tabsIndicator
        },
        value: sideBarPanel === 'closed' ? false : sideBarPanel,
        onChange: this.handleChange,
        variant: "fullWidth",
        indicatorColor: "primary",
        textColor: "primary",
        orientation: "vertical",
        "aria-orientation": "vertical",
        "aria-label": t('sidebarPanelsNavigation')
      }, panels.info && /*#__PURE__*/_react.default.createElement(TabButton, {
        value: "info",
        icon: /*#__PURE__*/_react.default.createElement(_InfoSharp.default, null)
      }), panels.attribution && /*#__PURE__*/_react.default.createElement(TabButton, {
        value: "attribution",
        icon: /*#__PURE__*/_react.default.createElement(_CopyrightSharp.default, null)
      }), panels.canvas && /*#__PURE__*/_react.default.createElement(TabButton, {
        value: "canvas",
        icon: /*#__PURE__*/_react.default.createElement(_CanvasIndexIcon.default, null)
      }), panels.annotations && (hasAnnotations || hasAnyAnnotations) && /*#__PURE__*/_react.default.createElement(TabButton, {
        value: "annotations",
        icon: /*#__PURE__*/_react.default.createElement(_Badge.default, {
          classes: {
            badge: classes.badge
          },
          invisible: !hasAnnotations,
          variant: "dot"
        }, /*#__PURE__*/_react.default.createElement(_CommentSharp.default, null))
      }), panels.search && hasSearchService && /*#__PURE__*/_react.default.createElement(TabButton, {
        value: "search",
        icon: /*#__PURE__*/_react.default.createElement(_Badge.default, {
          classes: {
            badge: classes.badge
          },
          invisible: !hasSearchResults,
          variant: "dot"
        }, /*#__PURE__*/_react.default.createElement(_SearchSharp.default, null))
      }), panels.layers && hasAnyLayers && /*#__PURE__*/_react.default.createElement(TabButton, {
        value: "layers",
        icon: /*#__PURE__*/_react.default.createElement(_Badge.default, {
          classes: {
            badge: classes.badge
          },
          invisible: !hasCurrentLayers,
          variant: "dot"
        }, /*#__PURE__*/_react.default.createElement(_LayersSharp.default, null))
      }), PluginComponents && PluginComponents.map(function (PluginComponent) {
        return /*#__PURE__*/_react.default.createElement(TabButton, {
          key: PluginComponent.value,
          value: PluginComponent.value,
          icon: /*#__PURE__*/_react.default.createElement(PluginComponent, null)
        });
      }));
    }
  }]);
  return WindowSideBarButtons;
}(_react.Component);
WindowSideBarButtons.defaultProps = {
  classes: {},
  hasAnnotations: false,
  hasAnyAnnotations: false,
  hasAnyLayers: false,
  hasCurrentLayers: false,
  hasSearchResults: false,
  hasSearchService: false,
  panels: [],
  PluginComponents: null,
  sideBarPanel: 'closed',
  t: function t(key) {
    return key;
  }
};
},{"react":"../node_modules/react/index.js","@material-ui/core/Badge":"../node_modules/@material-ui/core/esm/Badge/index.js","@material-ui/core/Tabs":"../node_modules/@material-ui/core/esm/Tabs/index.js","@material-ui/core/Tab":"../node_modules/@material-ui/core/esm/Tab/index.js","@material-ui/core/Tooltip":"../node_modules/@material-ui/core/esm/Tooltip/index.js","@material-ui/icons/InfoSharp":"../node_modules/@material-ui/icons/InfoSharp.js","@material-ui/icons/CommentSharp":"../node_modules/@material-ui/icons/CommentSharp.js","@material-ui/icons/CopyrightSharp":"../node_modules/@material-ui/icons/CopyrightSharp.js","@material-ui/icons/LayersSharp":"../node_modules/@material-ui/icons/LayersSharp.js","@material-ui/icons/SearchSharp":"../node_modules/@material-ui/icons/SearchSharp.js","./icons/CanvasIndexIcon":"../node_modules/mirador/dist/es/src/components/icons/CanvasIndexIcon.js"}],"../node_modules/mirador/dist/es/src/containers/WindowSideBarButtons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _core = require("@material-ui/core");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _MiradorCanvas = _interopRequireDefault(require("../lib/MiradorCanvas"));
var _selectors = require("../state/selectors");
var _WindowSideBarButtons = require("../components/WindowSideBarButtons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WindowSideButtons
 * @private
 */

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var windowId = _ref.windowId;
  return {
    addCompanionWindow: function addCompanionWindow(content) {
      return dispatch(actions.addOrUpdateCompanionWindow(windowId, {
        content: content,
        position: 'left'
      }));
    }
  };
};
/** */

function hasLayers(canvases) {
  return canvases && canvases.some(function (c) {
    return new _MiradorCanvas.default(c).imageResources.length > 1;
  });
}
/** */

function hasAnnotations(canvases) {
  return canvases && canvases.some(function (c) {
    var canvas = new _MiradorCanvas.default(c);
    return canvas.annotationListUris.length > 0 || canvas.canvasAnnotationPages.length > 0;
  });
}
/**
 * mapStateToProps - used to hook up connect to state
 * @memberof WindowSideButtons
 * @private
 */

var mapStateToProps = function mapStateToProps(state, _ref2) {
  var windowId = _ref2.windowId;
  return {
    hasAnnotations: (0, _selectors.getAnnotationResourcesByMotivation)(state, {
      windowId: windowId
    }).length > 0,
    hasAnyAnnotations: hasAnnotations((0, _selectors.getCanvases)(state, {
      windowId: windowId
    })),
    hasAnyLayers: hasLayers((0, _selectors.getCanvases)(state, {
      windowId: windowId
    })),
    hasCurrentLayers: hasLayers((0, _selectors.getVisibleCanvases)(state, {
      windowId: windowId
    })),
    hasSearchResults: (0, _selectors.getWindow)(state, {
      windowId: windowId
    }).suggestedSearches || (0, _selectors.getSearchQuery)(state, {
      companionWindowId: ((0, _selectors.getCompanionWindowsForPosition)(state, {
        position: 'left',
        windowId: windowId
      })[0] || {}).id,
      windowId: windowId
    }),
    hasSearchService: (0, _selectors.getManifestSearchService)(state, {
      windowId: windowId
    }) !== null,
    panels: (0, _selectors.getWindowConfig)(state, {
      windowId: windowId
    }).panels,
    sideBarPanel: ((0, _selectors.getCompanionWindowsForPosition)(state, {
      position: 'left',
      windowId: windowId
    })[0] || {}).content
  };
};
/** */

var style = function style(theme) {
  return {
    badge: {
      backgroundColor: theme.palette.notification.main
    },
    tab: {
      '&:active': {
        backgroundColor: theme.palette.action.active
      },
      '&:focus': {
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        backgroundColor: theme.palette.action.hover,
        textDecoration: 'none' // Reset on touch devices, it doesn't add specificity
      },

      '&:hover': {
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        backgroundColor: theme.palette.action.hover,
        textDecoration: 'none' // Reset on touch devices, it doesn't add specificity
      },

      borderRight: '2px solid transparent',
      minWidth: 'auto'
    },
    tabSelected: {
      borderRight: "2px solid ".concat(theme.palette.primary.main)
    },
    tabsFlexContainer: {
      flexDirection: 'column'
    },
    tabsIndicator: {
      display: 'none'
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(style), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('WindowSideBarButtons'));
var _default = exports.default = enhance(_WindowSideBarButtons.WindowSideBarButtons);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../lib/MiradorCanvas":"../node_modules/mirador/dist/es/src/lib/MiradorCanvas.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/WindowSideBarButtons":"../node_modules/mirador/dist/es/src/components/WindowSideBarButtons.js"}],"../node_modules/mirador/dist/es/src/components/WindowSideBar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowSideBar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));
var _WindowSideBarButtons = _interopRequireDefault(require("../containers/WindowSideBarButtons"));
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
 * WindowSideBar
 */

var WindowSideBar = exports.WindowSideBar = /*#__PURE__*/function (_Component) {
  _inherits(WindowSideBar, _Component);
  var _super = _createSuper(WindowSideBar);
  function WindowSideBar() {
    _classCallCheck(this, WindowSideBar);
    return _super.apply(this, arguments);
  }
  _createClass(WindowSideBar, [{
    key: "render",
    value:
    /**
     * render
     * @return
     */
    function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        direction = _this$props.direction,
        t = _this$props.t,
        windowId = _this$props.windowId,
        sideBarOpen = _this$props.sideBarOpen;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Drawer.default, {
        variant: "persistent",
        className: (0, _classnames.default)(classes.drawer),
        classes: {
          paper: (0, _classnames.default)(classes.paper)
        },
        anchor: direction === 'rtl' ? 'right' : 'left',
        PaperProps: {
          'aria-label': t('sidebarPanelsNavigation'),
          component: 'nav',
          style: {
            height: '100%',
            position: 'relative'
          }
        },
        SlideProps: {
          direction: direction === 'rtl' ? 'left' : 'right',
          mountOnEnter: true,
          unmountOnExit: true
        },
        open: sideBarOpen
      }, /*#__PURE__*/_react.default.createElement(_WindowSideBarButtons.default, {
        windowId: windowId
      })));
    }
  }]);
  return WindowSideBar;
}(_react.Component);
WindowSideBar.defaultProps = {
  sideBarOpen: false
};
},{"react":"../node_modules/react/index.js","classnames":"../node_modules/classnames/index.js","@material-ui/core/Drawer":"../node_modules/@material-ui/core/esm/Drawer/index.js","../containers/WindowSideBarButtons":"../node_modules/mirador/dist/es/src/containers/WindowSideBarButtons.js"}],"../node_modules/mirador/dist/es/src/containers/WindowSideBar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _core = require("@material-ui/core");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _WindowSideBar = require("../components/WindowSideBar");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowSideBar
 * @private
 */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    direction: (0, _selectors.getThemeDirection)(state),
    sideBarOpen: ((0, _selectors.getWindow)(state, {
      windowId: windowId
    }) || {}).sideBarOpen,
    sideBarPanel: ((0, _selectors.getWindow)(state, {
      windowId: windowId
    }) || {}).sideBarPanel
  };
};
/**
 *
 * @param theme
 * @returns {{toolbar: CSSProperties | toolbar | {minHeight}, grow: {flexGrow: number},
 * drawer: {overflowX: string, left: number, flexShrink: number, width: number, height: string}}}
 */

var styles = function styles(theme) {
  return {
    drawer: {
      flexShrink: 0,
      height: '100%',
      order: -1000,
      zIndex: theme.zIndex.appBar - 1
    },
    grow: {
      flexGrow: 1
    },
    paper: {
      borderInlineEnd: "1px solid ".concat(theme.palette.divider),
      overflowX: 'hidden',
      width: 48
    },
    toolbar: theme.mixins.toolbar
  };
};
var enhance = (0, _redux.compose)((0, _core.withStyles)(styles), (0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, null), (0, _withPlugins.withPlugins)('WindowSideBar'));
var _default = exports.default = enhance(_WindowSideBar.WindowSideBar);
},{"react-redux":"../node_modules/react-redux/es/index.js","redux":"../node_modules/redux/es/redux.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/WindowSideBar":"../node_modules/mirador/dist/es/src/components/WindowSideBar.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js"}],"../node_modules/@material-ui/icons/ArrowLeftSharp.js":[function(require,module,exports) {
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
  d: "M14 7l-5 5 5 5V7z"
}), 'ArrowLeftSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/@material-ui/icons/ArrowRightSharp.js":[function(require,module,exports) {
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
  d: "M10 17l5-5-5-5v10z"
}), 'ArrowRightSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/@material-ui/lab/esm/internal/svg-icons/SuccessOutlined.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _utils = require("@material-ui/core/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * @ignore - internal component.
 */
var _default = exports.default = (0, _utils.createSvgIcon)( /*#__PURE__*/React.createElement("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), 'SuccessOutlined');
},{"react":"../node_modules/react/index.js","@material-ui/core/utils":"../node_modules/@material-ui/core/esm/utils/index.js"}],"../node_modules/@material-ui/lab/esm/internal/svg-icons/ReportProblemOutlined.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _utils = require("@material-ui/core/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * @ignore - internal component.
 */
var _default = exports.default = (0, _utils.createSvgIcon)( /*#__PURE__*/React.createElement("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), 'ReportProblemOutlined');
},{"react":"../node_modules/react/index.js","@material-ui/core/utils":"../node_modules/@material-ui/core/esm/utils/index.js"}],"../node_modules/@material-ui/lab/esm/internal/svg-icons/ErrorOutline.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _utils = require("@material-ui/core/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * @ignore - internal component.
 */
var _default = exports.default = (0, _utils.createSvgIcon)( /*#__PURE__*/React.createElement("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'ErrorOutline');
},{"react":"../node_modules/react/index.js","@material-ui/core/utils":"../node_modules/@material-ui/core/esm/utils/index.js"}],"../node_modules/@material-ui/lab/esm/internal/svg-icons/InfoOutlined.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _utils = require("@material-ui/core/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * @ignore - internal component.
 */
var _default = exports.default = (0, _utils.createSvgIcon)( /*#__PURE__*/React.createElement("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), 'InfoOutlined');
},{"react":"../node_modules/react/index.js","@material-ui/core/utils":"../node_modules/@material-ui/core/esm/utils/index.js"}],"../node_modules/@material-ui/lab/esm/Alert/Alert.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.default = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _styles = require("@material-ui/core/styles");
var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));
var _SuccessOutlined = _interopRequireDefault(require("../internal/svg-icons/SuccessOutlined"));
var _ReportProblemOutlined = _interopRequireDefault(require("../internal/svg-icons/ReportProblemOutlined"));
var _ErrorOutline = _interopRequireDefault(require("../internal/svg-icons/ErrorOutline"));
var _InfoOutlined = _interopRequireDefault(require("../internal/svg-icons/InfoOutlined"));
var _Close = _interopRequireDefault(require("../internal/svg-icons/Close"));
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
var _utils = require("@material-ui/core/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var styles = exports.styles = function styles(theme) {
  var getColor = theme.palette.type === 'light' ? _styles.darken : _styles.lighten;
  var getBackgroundColor = theme.palette.type === 'light' ? _styles.lighten : _styles.darken;
  return {
    /* Styles applied to the root element. */
    root: (0, _extends2.default)({}, theme.typography.body2, {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'transparent',
      display: 'flex',
      padding: '6px 16px'
    }),
    /* Styles applied to the root element if `variant="standard"` and `color="success"`. */
    standardSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.success.main, 0.9),
      '& $icon': {
        color: theme.palette.success.main
      }
    },
    /* Styles applied to the root element if `variant="standard"` and `color="info"`. */
    standardInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.info.main, 0.9),
      '& $icon': {
        color: theme.palette.info.main
      }
    },
    /* Styles applied to the root element if `variant="standard"` and `color="warning"`. */
    standardWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.warning.main, 0.9),
      '& $icon': {
        color: theme.palette.warning.main
      }
    },
    /* Styles applied to the root element if `variant="standard"` and `color="error"`. */
    standardError: {
      color: getColor(theme.palette.error.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.error.main, 0.9),
      '& $icon': {
        color: theme.palette.error.main
      }
    },
    /* Styles applied to the root element if `variant="outlined"` and `color="success"`. */
    outlinedSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      border: "1px solid ".concat(theme.palette.success.main),
      '& $icon': {
        color: theme.palette.success.main
      }
    },
    /* Styles applied to the root element if `variant="outlined"` and `color="info"`. */
    outlinedInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      border: "1px solid ".concat(theme.palette.info.main),
      '& $icon': {
        color: theme.palette.info.main
      }
    },
    /* Styles applied to the root element if `variant="outlined"` and `color="warning"`. */
    outlinedWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      border: "1px solid ".concat(theme.palette.warning.main),
      '& $icon': {
        color: theme.palette.warning.main
      }
    },
    /* Styles applied to the root element if `variant="outlined"` and `color="error"`. */
    outlinedError: {
      color: getColor(theme.palette.error.main, 0.6),
      border: "1px solid ".concat(theme.palette.error.main),
      '& $icon': {
        color: theme.palette.error.main
      }
    },
    /* Styles applied to the root element if `variant="filled"` and `color="success"`. */
    filledSuccess: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.success.main
    },
    /* Styles applied to the root element if `variant="filled"` and `color="info"`. */
    filledInfo: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.info.main
    },
    /* Styles applied to the root element if `variant="filled"` and `color="warning"`. */
    filledWarning: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.warning.main
    },
    /* Styles applied to the root element if `variant="filled"` and `color="error"`. */
    filledError: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.error.main
    },
    /* Styles applied to the icon wrapper element. */
    icon: {
      marginRight: 12,
      padding: '7px 0',
      display: 'flex',
      fontSize: 22,
      opacity: 0.9
    },
    /* Styles applied to the message wrapper element. */
    message: {
      padding: '8px 0'
    },
    /* Styles applied to the action wrapper element if `action` is provided. */
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: 16,
      marginRight: -8
    }
  };
};
var defaultIconMapping = {
  success: /*#__PURE__*/React.createElement(_SuccessOutlined.default, {
    fontSize: "inherit"
  }),
  warning: /*#__PURE__*/React.createElement(_ReportProblemOutlined.default, {
    fontSize: "inherit"
  }),
  error: /*#__PURE__*/React.createElement(_ErrorOutline.default, {
    fontSize: "inherit"
  }),
  info: /*#__PURE__*/React.createElement(_InfoOutlined.default, {
    fontSize: "inherit"
  })
};
var _ref = /*#__PURE__*/React.createElement(_Close.default, {
  fontSize: "small"
});
var Alert = /*#__PURE__*/React.forwardRef(function Alert(props, ref) {
  var action = props.action,
    children = props.children,
    classes = props.classes,
    className = props.className,
    _props$closeText = props.closeText,
    closeText = _props$closeText === void 0 ? 'Close' : _props$closeText,
    color = props.color,
    icon = props.icon,
    _props$iconMapping = props.iconMapping,
    iconMapping = _props$iconMapping === void 0 ? defaultIconMapping : _props$iconMapping,
    onClose = props.onClose,
    _props$role = props.role,
    role = _props$role === void 0 ? 'alert' : _props$role,
    _props$severity = props.severity,
    severity = _props$severity === void 0 ? 'success' : _props$severity,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'standard' : _props$variant,
    other = (0, _objectWithoutProperties2.default)(props, ["action", "children", "classes", "className", "closeText", "color", "icon", "iconMapping", "onClose", "role", "severity", "variant"]);
  return /*#__PURE__*/React.createElement(_Paper.default, (0, _extends2.default)({
    role: role,
    square: true,
    elevation: 0,
    className: (0, _clsx.default)(classes.root, classes["".concat(variant).concat((0, _utils.capitalize)(color || severity))], className),
    ref: ref
  }, other), icon !== false ? /*#__PURE__*/React.createElement("div", {
    className: classes.icon
  }, icon || iconMapping[severity] || defaultIconMapping[severity]) : null, /*#__PURE__*/React.createElement("div", {
    className: classes.message
  }, children), action != null ? /*#__PURE__*/React.createElement("div", {
    className: classes.action
  }, action) : null, action == null && onClose ? /*#__PURE__*/React.createElement("div", {
    className: classes.action
  }, /*#__PURE__*/React.createElement(_IconButton.default, {
    size: "small",
    "aria-label": closeText,
    title: closeText,
    color: "inherit",
    onClick: onClose
  }, _ref)) : null);
});
"development" !== "production" ? Alert.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: _propTypes.default.node,
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: _propTypes.default.object,
  /**
   * @ignore
   */
  className: _propTypes.default.string,
  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  closeText: _propTypes.default.string,
  /**
   * The main color for the alert. Unless provided, the value is taken from the `severity` prop.
   */
  color: _propTypes.default.oneOf(['error', 'info', 'success', 'warning']),
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   */
  icon: _propTypes.default.node,
  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: _propTypes.default.shape({
    error: _propTypes.default.node,
    info: _propTypes.default.node,
    success: _propTypes.default.node,
    warning: _propTypes.default.node
  }),
  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: _propTypes.default.func,
  /**
   * The ARIA role attribute of the element.
   */
  role: _propTypes.default.string,
  /**
   * The severity of the alert. This defines the color and icon used.
   */
  severity: _propTypes.default.oneOf(['error', 'info', 'success', 'warning']),
  /**
   * The variant to use.
   */
  variant: _propTypes.default.oneOf(['filled', 'outlined', 'standard'])
} : void 0;
var _default = exports.default = (0, _styles.withStyles)(styles, {
  name: 'MuiAlert'
})(Alert);
},{"@babel/runtime/helpers/esm/objectWithoutProperties":"../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js","@babel/runtime/helpers/esm/extends":"../node_modules/@babel/runtime/helpers/esm/extends.js","react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","clsx":"../node_modules/clsx/dist/clsx.m.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","@material-ui/core/Paper":"../node_modules/@material-ui/core/esm/Paper/index.js","../internal/svg-icons/SuccessOutlined":"../node_modules/@material-ui/lab/esm/internal/svg-icons/SuccessOutlined.js","../internal/svg-icons/ReportProblemOutlined":"../node_modules/@material-ui/lab/esm/internal/svg-icons/ReportProblemOutlined.js","../internal/svg-icons/ErrorOutline":"../node_modules/@material-ui/lab/esm/internal/svg-icons/ErrorOutline.js","../internal/svg-icons/InfoOutlined":"../node_modules/@material-ui/lab/esm/internal/svg-icons/InfoOutlined.js","../internal/svg-icons/Close":"../node_modules/@material-ui/lab/esm/internal/svg-icons/Close.js","@material-ui/core/IconButton":"../node_modules/@material-ui/core/esm/IconButton/index.js","@material-ui/core/utils":"../node_modules/@material-ui/core/esm/utils/index.js"}],"../node_modules/@material-ui/lab/esm/Alert/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Alert.default;
  }
});
var _Alert = _interopRequireDefault(require("./Alert"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Alert":"../node_modules/@material-ui/lab/esm/Alert/Alert.js"}],"../node_modules/mirador/dist/es/src/components/ErrorContent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorContent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Accordion = _interopRequireDefault(require("@material-ui/core/Accordion"));
var _AccordionSummary = _interopRequireDefault(require("@material-ui/core/AccordionSummary"));
var _AccordionDetails = _interopRequireDefault(require("@material-ui/core/AccordionDetails"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _Alert = _interopRequireDefault(require("@material-ui/lab/Alert"));
var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));
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
/** */

var ErrorContent = exports.ErrorContent = /*#__PURE__*/function (_Component) {
  _inherits(ErrorContent, _Component);
  var _super = _createSuper(ErrorContent);
  function ErrorContent() {
    _classCallCheck(this, ErrorContent);
    return _super.apply(this, arguments);
  }
  _createClass(ErrorContent, [{
    key: "render",
    value: /** */
    function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        error = _this$props.error,
        metadata = _this$props.metadata,
        showJsError = _this$props.showJsError,
        t = _this$props.t;
      if (!showJsError) return null;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Alert.default, {
        elevation: 6,
        variant: "filled",
        severity: "error"
      }, t('errorDialogTitle')), showJsError && /*#__PURE__*/_react.default.createElement(_Accordion.default, {
        square: true,
        className: classes.alert
      }, /*#__PURE__*/_react.default.createElement(_AccordionSummary.default, {
        expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null)
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, null, t('jsError', {
        message: error.message,
        name: error.name
      }))), /*#__PURE__*/_react.default.createElement(_AccordionDetails.default, {
        className: classes.details
      }, /*#__PURE__*/_react.default.createElement("pre", null, t('jsStack', {
        stack: error.stack
      })), metadata && /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(metadata, null, 2)))), /*#__PURE__*/_react.default.createElement(_PluginHook.PluginHook, this.props));
    }
  }]);
  return ErrorContent;
}(_react.Component);
ErrorContent.defaultProps = {
  metadata: null,
  showJsError: true,
  t: function t(key) {
    return key;
  }
};
},{"react":"../node_modules/react/index.js","@material-ui/core/Accordion":"../node_modules/@material-ui/core/esm/Accordion/index.js","@material-ui/core/AccordionSummary":"../node_modules/@material-ui/core/esm/AccordionSummary/index.js","@material-ui/core/AccordionDetails":"../node_modules/@material-ui/core/esm/AccordionDetails/index.js","@material-ui/core/Typography":"../node_modules/@material-ui/core/esm/Typography/index.js","@material-ui/lab/Alert":"../node_modules/@material-ui/lab/esm/Alert/index.js","@material-ui/icons/ExpandMore":"../node_modules/@material-ui/icons/ExpandMore.js","./PluginHook":"../node_modules/mirador/dist/es/src/components/PluginHook.js"}],"../node_modules/mirador/dist/es/src/containers/ErrorContent.js":[function(require,module,exports) {
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
var _ErrorContent = require("../components/ErrorContent");
var _selectors = require("../state/selectors");
/** mapStateToProps */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var companionWindowId = _ref.companionWindowId,
    windowId = _ref.windowId;
  return {
    metadata: {
      companionWindow: companionWindowId && (0, _selectors.getCompanionWindow)(state, {
        companionWindowId: companionWindowId
      }),
      manifest: (0, _selectors.getManifest)(state, {
        windowId: windowId
      }),
      viewer: (0, _selectors.getViewer)(state, {
        windowId: windowId
      }),
      window: (0, _selectors.getWindow)(state, {
        windowId: windowId
      })
    },
    showJsError: (0, _selectors.getConfig)(state).window.showJsError
  };
};
/**
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: number|string},
 * windowTopBarStyle: {minHeight: number, paddingLeft: number, backgroundColor: string}}}
 */

var styles = function styles(theme) {
  return {
    alert: {
      '& $icon': {
        color: theme.palette.error.main
      },
      backgroundColor: theme.palette.error.main,
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium
    },
    details: {
      '& pre': {
        height: '100px',
        overflowY: 'scroll'
      },
      flexDirection: 'column'
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps), (0, _withPlugins.withPlugins)('ErrorContent'));
var _default = exports.default = enhance(_ErrorContent.ErrorContent);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/ErrorContent":"../node_modules/mirador/dist/es/src/components/ErrorContent.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js"}],"../node_modules/mirador/dist/es/src/components/CompanionWindowFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompanionWindowFactory = void 0;
var _react = _interopRequireWildcard(require("react"));
var _CompanionWindowRegistry = _interopRequireDefault(require("../lib/CompanionWindowRegistry"));
var _CompanionWindow = _interopRequireDefault(require("../containers/CompanionWindow"));
var _ErrorContent = _interopRequireDefault(require("../containers/ErrorContent"));
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
 * Render a companion window using the appropriate component for the content
 */

var CompanionWindowFactory = exports.CompanionWindowFactory = /*#__PURE__*/function (_Component) {
  _inherits(CompanionWindowFactory, _Component);
  var _super = _createSuper(CompanionWindowFactory);

  /** */
  function CompanionWindowFactory(props) {
    var _this;
    _classCallCheck(this, CompanionWindowFactory);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  /** */

  _createClass(CompanionWindowFactory, [{
    key: "componentDidUpdate",
    value:
    /**
     * Clear the error state if the internal content changes; this is a rare
     * case, only when we reuse an existing companionWindow instance for
     * the left-anchored companion area (anti-pattern?)
     */
    function componentDidUpdate(prevProps) {
      var content = this.props.content; // Typical usage (don't forget to compare props):

      if (content !== prevProps.content) {
        this.setState({
          // eslint-disable-line react/no-did-update-set-state
          error: null,
          hasError: false
        });
      }
    }
    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        content = _this$props.content,
        windowId = _this$props.windowId,
        id = _this$props.id,
        t = _this$props.t;
      var _this$state = this.state,
        error = _this$state.error,
        hasError = _this$state.hasError;
      if (hasError) {
        return /*#__PURE__*/_react.default.createElement(_CompanionWindow.default, {
          title: t('error'),
          windowId: windowId,
          id: id
        }, /*#__PURE__*/_react.default.createElement(_ErrorContent.default, {
          error: error,
          windowId: windowId,
          companionWindowId: id
        }));
      }
      var type = _CompanionWindowRegistry.default[content];
      if (!type) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
      return /*#__PURE__*/_react.default.createElement(type, {
        id: id,
        windowId: windowId
      });
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        error: error,
        hasError: true
      };
    }
  }]);
  return CompanionWindowFactory;
}(_react.Component);
CompanionWindowFactory.defaultProps = {
  content: null,
  t: function t(key) {
    return key;
  }
};
},{"react":"../node_modules/react/index.js","../lib/CompanionWindowRegistry":"../node_modules/mirador/dist/es/src/lib/CompanionWindowRegistry.js","../containers/CompanionWindow":"../node_modules/mirador/dist/es/src/containers/CompanionWindow.js","../containers/ErrorContent":"../node_modules/mirador/dist/es/src/containers/ErrorContent.js"}],"../node_modules/mirador/dist/es/src/containers/CompanionWindowFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var _CompanionWindowFactory = require("../components/CompanionWindowFactory");
/**
 * mapStateToProps - to hook up connect
 * @memberof CompanionWindow
 * @private
 */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id;
  var companionWindow = (0, _selectors.getCompanionWindow)(state, {
    companionWindowId: id
  });
  return {
    content: companionWindow.content,
    id: id
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps), (0, _withPlugins.withPlugins)('CompanionWindowFactory'));
var _default = exports.default = enhance(_CompanionWindowFactory.CompanionWindowFactory);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/CompanionWindowFactory":"../node_modules/mirador/dist/es/src/components/CompanionWindowFactory.js"}],"../node_modules/mirador/dist/es/src/components/CompanionArea.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompanionArea = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));
var _ArrowLeftSharp = _interopRequireDefault(require("@material-ui/icons/ArrowLeftSharp"));
var _ArrowRightSharp = _interopRequireDefault(require("@material-ui/icons/ArrowRightSharp"));
var _CompanionWindowFactory = _interopRequireDefault(require("../containers/CompanionWindowFactory"));
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
/** */

var CompanionArea = exports.CompanionArea = /*#__PURE__*/function (_Component) {
  _inherits(CompanionArea, _Component);
  var _super = _createSuper(CompanionArea);
  function CompanionArea() {
    _classCallCheck(this, CompanionArea);
    return _super.apply(this, arguments);
  }
  _createClass(CompanionArea, [{
    key: "areaLayoutClass",
    value: /** */
    function areaLayoutClass() {
      var _this$props = this.props,
        classes = _this$props.classes,
        position = _this$props.position;
      return position === 'bottom' || position === 'far-bottom' ? classes.horizontal : null;
    }
    /** */
  }, {
    key: "collapseIcon",
    value: function collapseIcon() {
      var _this$props2 = this.props,
        companionAreaOpen = _this$props2.companionAreaOpen,
        direction = _this$props2.direction;
      if (direction === 'rtl') {
        if (companionAreaOpen) return /*#__PURE__*/_react.default.createElement(_ArrowRightSharp.default, null);
        return /*#__PURE__*/_react.default.createElement(_ArrowLeftSharp.default, null);
      }
      if (companionAreaOpen) return /*#__PURE__*/_react.default.createElement(_ArrowLeftSharp.default, null);
      return /*#__PURE__*/_react.default.createElement(_ArrowRightSharp.default, null);
    }
    /** @private */
  }, {
    key: "slideDirection",
    value: function slideDirection() {
      var _this$props3 = this.props,
        direction = _this$props3.direction,
        position = _this$props3.position;
      var defaultPosition = direction === 'rtl' ? 'left' : 'right';
      var oppositePosition = direction === 'rtl' ? 'right' : 'left';
      switch (position) {
        case 'right':
        case 'far-right':
          return oppositePosition;
        case 'bottom':
        case 'far-bottom':
          return 'up';
        default:
          return defaultPosition;
      }
    }
    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        classes = _this$props4.classes,
        companionWindowIds = _this$props4.companionWindowIds,
        companionAreaOpen = _this$props4.companionAreaOpen,
        setCompanionAreaOpen = _this$props4.setCompanionAreaOpen,
        position = _this$props4.position,
        sideBarOpen = _this$props4.sideBarOpen,
        t = _this$props4.t,
        windowId = _this$props4.windowId;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: [classes.root, this.areaLayoutClass(), (0, _cssNs.default)("companion-area-".concat(position))].join(' ')
      }, /*#__PURE__*/_react.default.createElement(_Slide.default, {
        "in": companionAreaOpen,
        direction: this.slideDirection()
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: [(0, _cssNs.default)('companion-windows'), companionWindowIds.length > 0 && classes[position], this.areaLayoutClass()].join(' '),
        style: {
          display: companionAreaOpen ? 'flex' : 'none'
        }
      }, companionWindowIds.map(function (id) {
        return /*#__PURE__*/_react.default.createElement(_CompanionWindowFactory.default, {
          id: id,
          key: id,
          windowId: windowId
        });
      }))), setCompanionAreaOpen && position === 'left' && sideBarOpen && companionWindowIds.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
        className: classes.toggle
      }, /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        "aria-expanded": companionAreaOpen,
        "aria-label": companionAreaOpen ? t('collapseSidePanel') : t('expandSidePanel'),
        className: classes.toggleButton,
        key: companionAreaOpen ? 'collapse' : 'expand',
        onClick: function onClick() {
          setCompanionAreaOpen(windowId, !companionAreaOpen);
        },
        TooltipProps: {
          placement: 'right'
        }
      }, this.collapseIcon())));
    }
  }]);
  return CompanionArea;
}(_react.Component);
CompanionArea.defaultProps = {
  classes: {},
  setCompanionAreaOpen: function setCompanionAreaOpen() {},
  sideBarOpen: false
};
},{"react":"../node_modules/react/index.js","@material-ui/core/Slide":"../node_modules/@material-ui/core/esm/Slide/index.js","@material-ui/icons/ArrowLeftSharp":"../node_modules/@material-ui/icons/ArrowLeftSharp.js","@material-ui/icons/ArrowRightSharp":"../node_modules/@material-ui/icons/ArrowRightSharp.js","../containers/CompanionWindowFactory":"../node_modules/mirador/dist/es/src/containers/CompanionWindowFactory.js","../containers/MiradorMenuButton":"../node_modules/mirador/dist/es/src/containers/MiradorMenuButton.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js"}],"../node_modules/mirador/dist/es/src/containers/CompanionArea.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _core = require("@material-ui/core");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var actions = _interopRequireWildcard(require("../state/actions"));
var _CompanionArea = require("../components/CompanionArea");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId,
    position = _ref.position;
  return {
    companionAreaOpen: (0, _selectors.getCompanionAreaVisibility)(state, {
      position: position,
      windowId: windowId
    }),
    companionWindowIds: (0, _selectors.getCompanionWindowIdsForPosition)(state, {
      position: position,
      windowId: windowId
    }),
    direction: (0, _selectors.getThemeDirection)(state),
    sideBarOpen: ((0, _selectors.getWindow)(state, {
      windowId: windowId
    }) || {}).sideBarOpen
  };
};
var mapDispatchToProps = {
  setCompanionAreaOpen: actions.setCompanionAreaOpen
};
/** */

var styles = function styles(theme) {
  return {
    horizontal: {
      flexDirection: 'column',
      width: '100%'
    },
    left: {
      minWidth: 235
    },
    root: {
      display: 'flex',
      minHeight: 0,
      position: 'relative',
      zIndex: theme.zIndex.appBar - 2
    },
    toggle: {
      backgroundColor: theme.palette.background.paper,
      border: "1px solid ".concat(theme.palette.shades.dark),
      borderRadius: 0,
      height: '48px',
      left: '100%',
      marginTop: '1rem',
      padding: 2,
      position: 'absolute',
      width: '23px',
      zIndex: theme.zIndex.drawer
    },
    toggleButton: {
      marginBottom: 12,
      marginTop: 12,
      padding: 0
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('CompanionArea'));
var _default = exports.default = enhance(_CompanionArea.CompanionArea);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../components/CompanionArea":"../node_modules/mirador/dist/es/src/components/CompanionArea.js"}],"../node_modules/mirador/dist/es/src/components/CollectionDialog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionDialog = void 0;
var _react = _interopRequireWildcard(require("react"));
var _core = require("@material-ui/core");
var _ArrowBackSharp = _interopRequireDefault(require("@material-ui/icons/ArrowBackSharp"));
var _Skeleton = _interopRequireDefault(require("@material-ui/lab/Skeleton"));
var _asArray = _interopRequireDefault(require("../lib/asArray"));
var _LabelValueMetadata = require("./LabelValueMetadata");
var _CollapsibleSection = _interopRequireDefault(require("../containers/CollapsibleSection"));
var _ScrollIndicatedDialogContent = _interopRequireDefault(require("../containers/ScrollIndicatedDialogContent"));
var _ManifestInfo = _interopRequireDefault(require("../containers/ManifestInfo"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
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
 * a dialog providing the possibility to select the collection
 */

var CollectionDialog = exports.CollectionDialog = /*#__PURE__*/function (_Component) {
  _inherits(CollectionDialog, _Component);
  var _super = _createSuper(CollectionDialog);

  /** */
  function CollectionDialog(props) {
    var _this;
    _classCallCheck(this, CollectionDialog);
    _this = _super.call(this, props);
    _this.state = {
      filter: null
    };
    _this.hideDialog = _this.hideDialog.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */

  _createClass(CollectionDialog, [{
    key: "setFilter",
    value: function setFilter(filter) {
      this.setState({
        filter: filter
      });
    }
    /** */
  }, {
    key: "hideDialog",
    value: function hideDialog() {
      var _this$props = this.props,
        hideCollectionDialog = _this$props.hideCollectionDialog,
        windowId = _this$props.windowId;
      hideCollectionDialog(windowId);
    }
    /** */
  }, {
    key: "selectCollection",
    value: function selectCollection(c) {
      var _this$props2 = this.props,
        collectionPath = _this$props2.collectionPath,
        manifestId = _this$props2.manifestId,
        showCollectionDialog = _this$props2.showCollectionDialog,
        windowId = _this$props2.windowId;
      showCollectionDialog(c.id, [].concat(_toConsumableArray(collectionPath), [manifestId]), windowId);
    }
    /** */
  }, {
    key: "goToPreviousCollection",
    value: function goToPreviousCollection() {
      var _this$props3 = this.props,
        collectionPath = _this$props3.collectionPath,
        showCollectionDialog = _this$props3.showCollectionDialog,
        windowId = _this$props3.windowId;
      showCollectionDialog(collectionPath[collectionPath.length - 1], collectionPath.slice(0, -1), windowId);
    }
    /** */
  }, {
    key: "selectManifest",
    value: function selectManifest(m) {
      var _this$props4 = this.props,
        addWindow = _this$props4.addWindow,
        collectionPath = _this$props4.collectionPath,
        manifestId = _this$props4.manifestId,
        setWorkspaceAddVisibility = _this$props4.setWorkspaceAddVisibility,
        updateWindow = _this$props4.updateWindow,
        windowId = _this$props4.windowId;
      if (windowId) {
        updateWindow(windowId, {
          canvasId: null,
          collectionPath: [].concat(_toConsumableArray(collectionPath), [manifestId]),
          manifestId: m.id
        });
      } else {
        addWindow({
          collectionPath: [].concat(_toConsumableArray(collectionPath), [manifestId]),
          manifestId: m.id
        });
      }
      this.hideDialog();
      setWorkspaceAddVisibility(false);
    }
    /** */
  }, {
    key: "dialogContainer",
    value: function dialogContainer() {
      var _this$props5 = this.props,
        containerId = _this$props5.containerId,
        windowId = _this$props5.windowId;
      return document.querySelector("#".concat(containerId, " #").concat(windowId));
    }
    /** */
  }, {
    key: "placeholder",
    value: function placeholder() {
      var classes = this.props.classes;
      return /*#__PURE__*/_react.default.createElement(_core.Dialog, {
        className: classes.dialog,
        onClose: this.hideDialog,
        open: true,
        container: this.dialogContainer(),
        BackdropProps: this.backdropProps()
      }, /*#__PURE__*/_react.default.createElement(_core.DialogTitle, {
        id: "select-collection",
        disableTypography: true
      }, /*#__PURE__*/_react.default.createElement(_Skeleton.default, {
        className: classes.placeholder,
        variant: "text"
      })), /*#__PURE__*/_react.default.createElement(_ScrollIndicatedDialogContent.default, null, /*#__PURE__*/_react.default.createElement(_Skeleton.default, {
        className: classes.placeholder,
        variant: "text"
      }), /*#__PURE__*/_react.default.createElement(_Skeleton.default, {
        className: classes.placeholder,
        variant: "text"
      })));
    }
    /** */
  }, {
    key: "backdropProps",
    value: function backdropProps() {
      var classes = this.props.classes;
      return {
        classes: {
          root: classes.dialog
        }
      };
    }
    /** */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props6 = this.props,
        classes = _this$props6.classes,
        collection = _this$props6.collection,
        error = _this$props6.error,
        isMultipart = _this$props6.isMultipart,
        manifest = _this$props6.manifest,
        ready = _this$props6.ready,
        t = _this$props6.t;
      var filter = this.state.filter;
      if (error) return null; // If this component is optimistically rendering ahead of the window its in
      // force a re-render so that it is placed correctly. The right thing here is
      // to maybe pass a ref.

      if (!this.dialogContainer()) {
        this.forceUpdate();
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
      }
      if (!ready) return this.placeholder();
      var rights = manifest && (0, _asArray.default)(manifest.getProperty('rights') || manifest.getProperty('license'));
      var requiredStatement = manifest && (0, _asArray.default)(manifest.getRequiredStatement()).filter(function (l) {
        return l.getValue();
      }).map(function (labelValuePair) {
        return {
          label: null,
          values: labelValuePair.getValues()
        };
      });
      var collections = manifest.getCollections();
      var currentFilter = filter || (collections.length > 0 ? 'collections' : 'manifests');
      return /*#__PURE__*/_react.default.createElement(_core.Dialog, {
        className: classes.dialog,
        onClose: this.hideDialog,
        container: this.dialogContainer(),
        BackdropProps: this.backdropProps(),
        open: true
      }, /*#__PURE__*/_react.default.createElement(_core.DialogTitle, {
        id: "select-collection",
        disableTypography: true
      }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
        component: "div",
        variant: "overline"
      }, t(isMultipart ? 'multipartCollection' : 'collection')), /*#__PURE__*/_react.default.createElement(_core.Typography, {
        variant: "h3"
      }, CollectionDialog.getUseableLabel(manifest))), /*#__PURE__*/_react.default.createElement(_ScrollIndicatedDialogContent.default, {
        className: classes.dialogContent
      }, collection && /*#__PURE__*/_react.default.createElement(_core.Button, {
        startIcon: /*#__PURE__*/_react.default.createElement(_ArrowBackSharp.default, null),
        onClick: function onClick() {
          return _this2.goToPreviousCollection();
        }
      }, CollectionDialog.getUseableLabel(collection)), /*#__PURE__*/_react.default.createElement("div", {
        className: classes.collectionMetadata
      }, /*#__PURE__*/_react.default.createElement(_ManifestInfo.default, {
        manifestId: manifest.id
      }), /*#__PURE__*/_react.default.createElement(_CollapsibleSection.default, {
        id: "select-collection-rights",
        label: t('attributionTitle')
      }, requiredStatement && /*#__PURE__*/_react.default.createElement(_LabelValueMetadata.LabelValueMetadata, {
        labelValuePairs: requiredStatement,
        defaultLabel: t('attribution')
      }), rights && rights.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Typography, {
        variant: "subtitle2",
        component: "dt"
      }, t('rights')), rights.map(function (v) {
        return /*#__PURE__*/_react.default.createElement(_core.Typography, {
          variant: "body1",
          component: "dd",
          key: v
        }, /*#__PURE__*/_react.default.createElement(_core.Link, {
          target: "_blank",
          rel: "noopener noreferrer",
          href: v
        }, v));
      })))), /*#__PURE__*/_react.default.createElement("div", {
        className: classes.collectionFilter
      }, manifest.getTotalCollections() > 0 && /*#__PURE__*/_react.default.createElement(_core.Chip, {
        clickable: true,
        color: currentFilter === 'collections' ? 'primary' : 'default',
        onClick: function onClick() {
          return _this2.setFilter('collections');
        },
        label: t('totalCollections', {
          count: manifest.getTotalCollections()
        })
      }), manifest.getTotalManifests() > 0 && /*#__PURE__*/_react.default.createElement(_core.Chip, {
        clickable: true,
        color: currentFilter === 'manifests' ? 'primary' : 'default',
        onClick: function onClick() {
          return _this2.setFilter('manifests');
        },
        label: t('totalManifests', {
          count: manifest.getTotalManifests()
        })
      })), currentFilter === 'collections' && /*#__PURE__*/_react.default.createElement(_core.MenuList, null, collections.map(function (c) {
        return /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
          key: c.id,
          onClick: function onClick() {
            _this2.selectCollection(c);
          },
          className: classes.collectionItem
        }, CollectionDialog.getUseableLabel(c));
      })), currentFilter === 'manifests' && /*#__PURE__*/_react.default.createElement(_core.MenuList, null, manifest.getManifests().map(function (m) {
        return /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
          key: m.id,
          onClick: function onClick() {
            _this2.selectManifest(m);
          },
          className: classes.collectionItem
        }, CollectionDialog.getUseableLabel(m));
      }))), /*#__PURE__*/_react.default.createElement(_core.DialogActions, null, /*#__PURE__*/_react.default.createElement(_core.Button, {
        onClick: this.hideDialog
      }, t('close'))));
    }
  }], [{
    key: "getUseableLabel",
    value: /** */
    function getUseableLabel(resource, index) {
      return resource && resource.getLabel && resource.getLabel().length > 0 ? resource.getLabel().getValue() : String(index + 1);
    }
  }]);
  return CollectionDialog;
}(_react.Component);
CollectionDialog.defaultProps = {
  collection: null,
  collectionPath: [],
  containerId: null,
  error: null,
  isMultipart: false,
  ready: false,
  windowId: null
};
},{"react":"../node_modules/react/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","@material-ui/icons/ArrowBackSharp":"../node_modules/@material-ui/icons/ArrowBackSharp.js","@material-ui/lab/Skeleton":"../node_modules/@material-ui/lab/esm/Skeleton/index.js","../lib/asArray":"../node_modules/mirador/dist/es/src/lib/asArray.js","./LabelValueMetadata":"../node_modules/mirador/dist/es/src/components/LabelValueMetadata.js","../containers/CollapsibleSection":"../node_modules/mirador/dist/es/src/containers/CollapsibleSection.js","../containers/ScrollIndicatedDialogContent":"../node_modules/mirador/dist/es/src/containers/ScrollIndicatedDialogContent.js","../containers/ManifestInfo":"../node_modules/mirador/dist/es/src/containers/ManifestInfo.js"}],"../node_modules/mirador/dist/es/src/containers/CollectionDialog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _core = require("@material-ui/core");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _CollectionDialog = require("../components/CollectionDialog");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof CollectionDialog
 * @private
 */

var mapDispatchToProps = {
  addWindow: actions.addWindow,
  hideCollectionDialog: actions.hideCollectionDialog,
  setWorkspaceAddVisibility: actions.setWorkspaceAddVisibility,
  showCollectionDialog: actions.showCollectionDialog,
  updateWindow: actions.updateWindow
};
/**
 * mapStateToProps - to hook up connect
 * @memberof CollectionDialog
 * @private
 */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  var _getWindow = (0, _selectors.getWindow)(state, {
      windowId: windowId
    }),
    collectionPath = _getWindow.collectionPath,
    manifestId = _getWindow.collectionManifestId;
  var manifest = (0, _selectors.getManifest)(state, {
    manifestId: manifestId
  });
  var collectionId = collectionPath && collectionPath[collectionPath.length - 1];
  var collection = collectionId && (0, _selectors.getManifest)(state, {
    manifestId: collectionId
  });
  return {
    collection: collection && (0, _selectors.getManifestoInstance)(state, {
      manifestId: collection.id
    }),
    collectionPath: collectionPath,
    containerId: (0, _selectors.getContainerId)(state),
    error: manifest && manifest.error,
    isMultipart: (0, _selectors.getSequenceBehaviors)(state, {
      manifestId: manifestId
    }).includes('multi-part'),
    manifest: manifest && (0, _selectors.getManifestoInstance)(state, {
      manifestId: manifestId
    }),
    manifestId: manifestId,
    open: state.workspace.collectionDialogOn,
    ready: manifest && !!manifest.json,
    windowId: windowId
  };
};
/** */

var styles = function styles(theme) {
  return {
    collectionFilter: {
      padding: '16px',
      paddingTop: 0
    },
    collectionItem: {
      whiteSpace: 'normal'
    },
    collectionMetadata: {
      padding: '16px'
    },
    dark: {
      color: '#000000'
    },
    dialog: {
      position: 'absolute !important'
    },
    dialogContent: {
      padding: theme.spacing(1)
    },
    light: {
      color: theme.palette.grey[400]
    },
    listitem: {
      '&:focus': {
        backgroundColor: theme.palette.action.focus
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      },
      cursor: 'pointer'
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('CollectionDialog'));
var _default = exports.default = enhance(_CollectionDialog.CollectionDialog);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/CollectionDialog":"../node_modules/mirador/dist/es/src/components/CollectionDialog.js"}],"../node_modules/mirador/dist/es/src/components/PrimaryWindow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrimaryWindow = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _WindowSideBar = _interopRequireDefault(require("../containers/WindowSideBar"));
var _CompanionArea = _interopRequireDefault(require("../containers/CompanionArea"));
var _CollectionDialog = _interopRequireDefault(require("../containers/CollectionDialog"));
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
var AudioViewer = /*#__PURE__*/(0, _react.lazy)(function () {
  return require("_bundle_loader")(require.resolve('../containers/AudioViewer'));
});
var GalleryView = /*#__PURE__*/(0, _react.lazy)(function () {
  return require("_bundle_loader")(require.resolve('../containers/GalleryView'));
});
var SelectCollection = /*#__PURE__*/(0, _react.lazy)(function () {
  return require("_bundle_loader")(require.resolve('../containers/SelectCollection'));
});
var WindowViewer = /*#__PURE__*/(0, _react.lazy)(function () {
  return require("_bundle_loader")(require.resolve('../containers/WindowViewer'));
});
var VideoViewer = /*#__PURE__*/(0, _react.lazy)(function () {
  return require("_bundle_loader")(require.resolve('../containers/VideoViewer'));
});
GalleryView.displayName = 'GalleryView';
SelectCollection.displayName = 'SelectCollection';
WindowViewer.displayName = 'WindowViewer';
/**
 * PrimaryWindow - component that renders the primary content of a Mirador
 * window. Right now this differentiates between a Image, Video, or Audio viewer.
 */

var PrimaryWindow = exports.PrimaryWindow = /*#__PURE__*/function (_Component) {
  _inherits(PrimaryWindow, _Component);
  var _super = _createSuper(PrimaryWindow);
  function PrimaryWindow() {
    _classCallCheck(this, PrimaryWindow);
    return _super.apply(this, arguments);
  }
  _createClass(PrimaryWindow, [{
    key: "renderViewer",
    value:
    /**
     * renderViewer - logic used to determine what type of view to show
     *
     * @return {(String|null)}
     */
    function renderViewer() {
      var _this$props = this.props,
        audioResources = _this$props.audioResources,
        isCollection = _this$props.isCollection,
        isFetching = _this$props.isFetching,
        videoResources = _this$props.videoResources,
        view = _this$props.view,
        windowId = _this$props.windowId;
      if (isCollection) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(SelectCollection, {
          windowId: windowId
        }));
      }
      if (isFetching === false) {
        if (view === 'gallery') {
          return /*#__PURE__*/_react.default.createElement(GalleryView, {
            windowId: windowId
          });
        }
        if (videoResources.length > 0) {
          return /*#__PURE__*/_react.default.createElement(VideoViewer, {
            windowId: windowId
          });
        }
        if (audioResources.length > 0) {
          return /*#__PURE__*/_react.default.createElement(AudioViewer, {
            windowId: windowId
          });
        }
        return /*#__PURE__*/_react.default.createElement(WindowViewer, {
          windowId: windowId
        });
      }
      return null;
    }
    /**
     * Render the component
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        isCollectionDialogVisible = _this$props2.isCollectionDialogVisible,
        windowId = _this$props2.windowId,
        classes = _this$props2.classes,
        children = _this$props2.children;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)((0, _cssNs.default)('primary-window'), classes.primaryWindow)
      }, /*#__PURE__*/_react.default.createElement(_WindowSideBar.default, {
        windowId: windowId
      }), /*#__PURE__*/_react.default.createElement(_CompanionArea.default, {
        windowId: windowId,
        position: "left"
      }), isCollectionDialogVisible && /*#__PURE__*/_react.default.createElement(_CollectionDialog.default, {
        windowId: windowId
      }), /*#__PURE__*/_react.default.createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react.default.createElement("div", null)
      }, children || this.renderViewer()));
    }
  }]);
  return PrimaryWindow;
}(_react.Component);
PrimaryWindow.defaultProps = {
  audioResources: [],
  children: undefined,
  isCollection: false,
  isCollectionDialogVisible: false,
  isFetching: false,
  videoResources: [],
  view: undefined
};
},{"react":"../node_modules/react/index.js","classnames":"../node_modules/classnames/index.js","../containers/WindowSideBar":"../node_modules/mirador/dist/es/src/containers/WindowSideBar.js","../containers/CompanionArea":"../node_modules/mirador/dist/es/src/containers/CompanionArea.js","../containers/CollectionDialog":"../node_modules/mirador/dist/es/src/containers/CollectionDialog.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js","_bundle_loader":"../node_modules/parcel-bundler/src/builtins/bundle-loader.js","../containers/AudioViewer":[["AudioViewer.c5baf8ed.js","../node_modules/mirador/dist/es/src/containers/AudioViewer.js"],"AudioViewer.c5baf8ed.js.map","../node_modules/mirador/dist/es/src/containers/AudioViewer.js"],"../containers/GalleryView":[["GalleryView.49b43c94.js","../node_modules/mirador/dist/es/src/containers/GalleryView.js"],"GalleryView.49b43c94.js.map","../node_modules/mirador/dist/es/src/containers/GalleryView.js"],"../containers/SelectCollection":[["SelectCollection.6fcf5cf6.js","../node_modules/mirador/dist/es/src/containers/SelectCollection.js"],"SelectCollection.6fcf5cf6.js.map","../node_modules/mirador/dist/es/src/containers/SelectCollection.js"],"../containers/WindowViewer":[["WindowViewer.82d70a38.js","../node_modules/mirador/dist/es/src/containers/WindowViewer.js"],"WindowViewer.82d70a38.js.map","../node_modules/mirador/dist/es/src/containers/WindowViewer.js"],"../containers/VideoViewer":[["VideoViewer.6f6fa93c.js","../node_modules/mirador/dist/es/src/containers/VideoViewer.js"],"VideoViewer.6f6fa93c.js.map","../node_modules/mirador/dist/es/src/containers/VideoViewer.js"]}],"../node_modules/mirador/dist/es/src/containers/PrimaryWindow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var _PrimaryWindow = require("../components/PrimaryWindow");
/** */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  var manifestoInstance = (0, _selectors.getManifestoInstance)(state, {
    windowId: windowId
  });
  return {
    audioResources: (0, _selectors.getVisibleCanvasAudioResources)(state, {
      windowId: windowId
    }) || [],
    isCollection: manifestoInstance && manifestoInstance.isCollection(),
    isCollectionDialogVisible: (0, _selectors.getWindow)(state, {
      windowId: windowId
    }).collectionDialogOn,
    videoResources: (0, _selectors.getVisibleCanvasVideoResources)(state, {
      windowId: windowId
    }) || []
  };
};
var styles = {
  primaryWindow: {
    display: 'flex',
    flex: 1,
    position: 'relative'
  }
};
var enhance = (0, _redux.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, null), (0, _withPlugins.withPlugins)('PrimaryWindow'));
var _default = exports.default = enhance(_PrimaryWindow.PrimaryWindow);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/PrimaryWindow":"../node_modules/mirador/dist/es/src/components/PrimaryWindow.js"}],"../node_modules/mirador/dist/es/src/components/MinimalWindow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MinimalWindow = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MenuSharp = _interopRequireDefault(require("@material-ui/icons/MenuSharp"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));
var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));
var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _CloseSharp = _interopRequireDefault(require("@material-ui/icons/CloseSharp"));
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
/** */

var MinimalWindow = exports.MinimalWindow = /*#__PURE__*/function (_Component) {
  _inherits(MinimalWindow, _Component);
  var _super = _createSuper(MinimalWindow);
  function MinimalWindow() {
    _classCallCheck(this, MinimalWindow);
    return _super.apply(this, arguments);
  }
  _createClass(MinimalWindow, [{
    key: "render",
    value: /** */
    function render() {
      var _this$props = this.props,
        allowClose = _this$props.allowClose,
        allowWindowSideBar = _this$props.allowWindowSideBar,
        ariaLabel = _this$props.ariaLabel,
        children = _this$props.children,
        classes = _this$props.classes,
        label = _this$props.label,
        removeWindow = _this$props.removeWindow,
        t = _this$props.t,
        windowId = _this$props.windowId;
      return /*#__PURE__*/_react.default.createElement(_Paper.default, {
        component: "section",
        elevation: 1,
        id: windowId,
        className: (0, _classnames.default)(classes.window, (0, _cssNs.default)('placeholder-window')),
        "aria-label": label && ariaLabel ? t('window', {
          label: label
        }) : null
      }, /*#__PURE__*/_react.default.createElement(_AppBar.default, {
        position: "relative",
        color: "default"
      }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
        disableGutters: true,
        className: (0, _classnames.default)(classes.windowTopBarStyle, (0, _cssNs.default)('window-top-bar')),
        variant: "dense"
      }, allowWindowSideBar && /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('toggleWindowSideBar'),
        disabled: true
      }, /*#__PURE__*/_react.default.createElement(_MenuSharp.default, null)), /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "h2",
        noWrap: true,
        color: "inherit",
        className: classes.title
      }, label), allowClose && removeWindow && /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('closeWindow'),
        className: (0, _classnames.default)(classes.button, (0, _cssNs.default)('window-close')),
        onClick: removeWindow,
        TooltipProps: {
          tabIndex: ariaLabel ? '0' : '-1'
        }
      }, /*#__PURE__*/_react.default.createElement(_CloseSharp.default, null)))), children);
    }
  }]);
  return MinimalWindow;
}(_react.Component);
MinimalWindow.defaultProps = {
  allowClose: true,
  allowWindowSideBar: true,
  ariaLabel: true,
  children: null,
  classes: {},
  label: '',
  removeWindow: function removeWindow() {},
  t: function t(key) {
    return key;
  }
};
},{"react":"../node_modules/react/index.js","@material-ui/icons/MenuSharp":"../node_modules/@material-ui/icons/MenuSharp.js","classnames":"../node_modules/classnames/index.js","@material-ui/core/Paper":"../node_modules/@material-ui/core/esm/Paper/index.js","@material-ui/core/AppBar":"../node_modules/@material-ui/core/esm/AppBar/index.js","@material-ui/core/Toolbar":"../node_modules/@material-ui/core/esm/Toolbar/index.js","@material-ui/core/Typography":"../node_modules/@material-ui/core/esm/Typography/index.js","@material-ui/icons/CloseSharp":"../node_modules/@material-ui/icons/CloseSharp.js","../containers/MiradorMenuButton":"../node_modules/mirador/dist/es/src/containers/MiradorMenuButton.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js"}],"../node_modules/mirador/dist/es/src/containers/MinimalWindow.js":[function(require,module,exports) {
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
var _MinimalWindow = require("../components/MinimalWindow");
var _selectors = require("../state/selectors");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
/** mapStateToProps */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    allowClose: (0, _selectors.getWindowConfig)(state, {
      windowId: windowId
    }).allowClose,
    allowWindowSideBar: (0, _selectors.getWindowConfig)(state, {
      windowId: windowId
    }).allowWindowSideBar
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var windowId = _ref2.windowId;
  return {
    removeWindow: function removeWindow() {
      return dispatch(actions.removeWindow(windowId));
    }
  };
};
/**
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: number|string},
 * windowTopBarStyle: {minHeight: number, paddingLeft: number, backgroundColor: string}}}
 */

var styles = function styles(theme) {
  return {
    button: {
      marginLeft: 'auto'
    },
    title: _objectSpread(_objectSpread({}, theme.typography.h6), {}, {
      flexGrow: 1,
      paddingLeft: theme.spacing(0.5)
    }),
    window: {
      backgroundColor: theme.palette.shades.dark,
      borderRadius: 0,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      minHeight: 0,
      overflow: 'hidden',
      width: '100%'
    },
    windowTopBarStyle: {
      backgroundColor: theme.palette.shades.main,
      borderTop: '2px solid transparent',
      minHeight: 32,
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5)
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('MinimalWindow'));
var _default = exports.default = enhance(_MinimalWindow.MinimalWindow);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../components/MinimalWindow":"../node_modules/mirador/dist/es/src/components/MinimalWindow.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js"}],"../node_modules/icomcom-react/dist/index.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IComCom = function (_React$Component) {
  _inherits(IComCom, _React$Component);

  function IComCom(args) {
    _classCallCheck(this, IComCom);

    var _this = _possibleConstructorReturn(this, (IComCom.__proto__ || Object.getPrototypeOf(IComCom)).call(this, args));

    _this.onReceiveMessage = _this.onReceiveMessage.bind(_this);
    _this.onLoad = _this.onLoad.bind(_this);
    _this.sendMessage = _this.sendMessage.bind(_this);
    return _this;
  }

  _createClass(IComCom, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('message', this.onReceiveMessage);
      if (this._frame) {
        this._frame.addEventListener('load', this.onLoad);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('message', this.onReceiveMessage, false);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.postMessageData !== nextProps.postMessageData) {
        this.sendMessage(nextProps.postMessageData);
      }
    }
  }, {
    key: 'onReceiveMessage',
    value: function onReceiveMessage(event) {
      var handleReceiveMessage = this.props.handleReceiveMessage;

      if (handleReceiveMessage) {
        handleReceiveMessage(event);
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var handleReady = this.props.handleReady;

      if (handleReady) {
        handleReady();
      }

      this.sendMessage(this.props.postMessageData);
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage(postMessageData) {
      this._frame.contentWindow.postMessage(postMessageData, this.props.targetOrigin);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var attributes = this.props.attributes;


      return _react2.default.createElement('iframe', _extends({
        ref: function ref(el) {
          _this2._frame = el;
        }
      }, Object.assign({}, IComCom.defaultAttributes, attributes)));
    }
  }]);

  return IComCom;
}(_react2.default.Component);

IComCom.propTypes = {
  attributes: _propTypes2.default.shape({
    frameBorder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    name: _propTypes2.default.string,
    scrolling: _propTypes2.default.string,
    sandbox: _propTypes2.default.string,
    srcDoc: _propTypes2.default.string,
    src: _propTypes2.default.string.isRequired,
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
  }),
  handleReceiveMessage: _propTypes2.default.func,
  handleReady: _propTypes2.default.func,
  postMessageData: _propTypes2.default.any,
  targetOrigin: _propTypes2.default.string
};
IComCom.defaultProps = {
  targetOrigin: '*'
};
IComCom.defaultAttributes = {
  frameBorder: 0
};
exports.default = IComCom;
},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js"}],"../node_modules/mirador/dist/es/src/components/AccessTokenSender.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccessTokenSender = void 0;
var _react = _interopRequireWildcard(require("react"));
var _icomcomReact = _interopRequireDefault(require("icomcom-react"));
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
 * Opens a new window for click
 */

var AccessTokenSender = exports.AccessTokenSender = /*#__PURE__*/function (_Component) {
  _inherits(AccessTokenSender, _Component);
  var _super = _createSuper(AccessTokenSender);

  /** */
  function AccessTokenSender(props) {
    var _this;
    _classCallCheck(this, AccessTokenSender);
    _this = _super.call(this, props);
    _this.onReceiveAccessTokenMessage = _this.onReceiveAccessTokenMessage.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** @private */

  _createClass(AccessTokenSender, [{
    key: "onReceiveAccessTokenMessage",
    value: function onReceiveAccessTokenMessage(e) {
      var _this$props = this.props,
        handleAccessTokenMessage = _this$props.handleAccessTokenMessage,
        url = _this$props.url;
      if (e.data && e.data.messageId && e.data.messageId === url) handleAccessTokenMessage(e.data);
    }
    /** */
  }, {
    key: "render",
    value: function render() {
      var url = this.props.url;
      if (!url) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
      /**
      login, clickthrough/kiosk open @id, wait for close
      external, no-op
      */

      return /*#__PURE__*/_react.default.createElement(_icomcomReact.default, {
        attributes: {
          'aria-hidden': true,
          height: 1,
          src: "".concat(url, "?origin=").concat(window.origin, "&messageId=").concat(url),
          style: {
            visibility: 'hidden'
          },
          width: 1
        },
        handleReceiveMessage: this.onReceiveAccessTokenMessage
      });
    }
  }]);
  return AccessTokenSender;
}(_react.Component);
AccessTokenSender.defaultProps = {
  url: undefined
};
},{"react":"../node_modules/react/index.js","icomcom-react":"../node_modules/icomcom-react/dist/index.js"}],"../node_modules/mirador/dist/es/src/components/NewWindow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewWindow = void 0;
var _react = require("react");
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
 * Opens a new window for click
 */
var NewWindow = exports.NewWindow = /*#__PURE__*/function (_Component) {
  _inherits(NewWindow, _Component);
  var _super = _createSuper(NewWindow);

  /** */
  function NewWindow(props) {
    var _this;
    _classCallCheck(this, NewWindow);
    _this = _super.call(this, props);
    _this.released = undefined;
    _this.window = null;
    _this.checkIfWindowClosed = null;
    return _this;
  }
  /** */

  _createClass(NewWindow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.openWindow();
    }
    /**
     * Close the opened window we unmount
     */
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.window) {
        this.window.close();
      }
    }
    /** @private */
  }, {
    key: "onClose",
    value: function onClose() {
      var _this$props = this.props,
        onClose = _this$props.onClose,
        url = _this$props.url;
      if (this.released) return;
      this.released = true;
      clearInterval(this.checkIfWindowClosed);
      onClose(url);
    }
    /** */
  }, {
    key: "openWindow",
    value: function openWindow() {
      var _this2 = this;
      var _this$props2 = this.props,
        depWindow = _this$props2.depWindow,
        features = _this$props2.features,
        name = _this$props2.name,
        url = _this$props2.url;
      this.window = (depWindow || window).open(url, name, features);
      this.released = false;
      this.checkIfWindowClosed = setInterval(function () {
        if (!_this2.window || _this2.window.closed) {
          _this2.onClose();
        }
      }, 250);
    }
    /** */
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return NewWindow;
}(_react.Component);
NewWindow.defaultProps = {
  depWindow: undefined,
  features: undefined,
  name: undefined
};
},{"react":"../node_modules/react/index.js"}],"../node_modules/@material-ui/icons/LockSharp.js":[function(require,module,exports) {
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
  d: "M20 8h-3V6.21c0-2.61-1.91-4.94-4.51-5.19C9.51.74 7 3.08 7 6v2H4v14h16V8zm-8 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"
}), 'LockSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/mirador/dist/es/src/components/WindowAuthenticationBar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowAuthenticationBar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));
var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));
var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _LockSharp = _interopRequireDefault(require("@material-ui/icons/LockSharp"));
var _SanitizedHtml = _interopRequireDefault(require("../containers/SanitizedHtml"));
var _PluginHook = require("./PluginHook");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
/** */

var WindowAuthenticationBar = exports.WindowAuthenticationBar = /*#__PURE__*/function (_Component) {
  _inherits(WindowAuthenticationBar, _Component);
  var _super = _createSuper(WindowAuthenticationBar);

  /** */
  function WindowAuthenticationBar(props) {
    var _this;
    _classCallCheck(this, WindowAuthenticationBar);
    _this = _super.call(this, props);
    _this.state = {
      open: false
    };
    _this.setOpen = _this.setOpen.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */

  _createClass(WindowAuthenticationBar, [{
    key: "onSubmit",
    value: function onSubmit() {
      var onConfirm = this.props.onConfirm;
      this.setOpen(false);
      onConfirm();
    }
    /** Toggle the full description */
  }, {
    key: "setOpen",
    value: function setOpen(open) {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          open: open
        });
      });
    }
    /** */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        classes = _this$props.classes,
        confirmButton = _this$props.confirmButton,
        continueLabel = _this$props.continueLabel,
        header = _this$props.header,
        description = _this$props.description,
        icon = _this$props.icon,
        label = _this$props.label,
        t = _this$props.t,
        ruleSet = _this$props.ruleSet,
        hasLogoutService = _this$props.hasLogoutService,
        status = _this$props.status,
        ConfirmProps = _this$props.ConfirmProps;
      if (status === 'ok' && !hasLogoutService) return null;
      var open = this.state.open;
      var button = /*#__PURE__*/_react.default.createElement(_Button.default, Object.assign({
        onClick: this.onSubmit,
        className: classes.buttonInvert,
        color: "secondary"
      }, ConfirmProps), confirmButton || t('login'));
      if (!description && !header) {
        return /*#__PURE__*/_react.default.createElement(_Paper.default, {
          square: true,
          elevation: 4,
          color: "secondary",
          classes: {
            root: classes.paper
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: classes.topBar
        }, icon || /*#__PURE__*/_react.default.createElement(_LockSharp.default, {
          className: classes.icon
        }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
          className: classes.label,
          component: "h3",
          variant: "body1",
          color: "inherit"
        }, ruleSet ? /*#__PURE__*/_react.default.createElement(_SanitizedHtml.default, {
          htmlString: label,
          ruleSet: ruleSet
        }) : label), /*#__PURE__*/_react.default.createElement(_PluginHook.PluginHook, this.props), button));
      }
      return /*#__PURE__*/_react.default.createElement(_Paper.default, {
        square: true,
        elevation: 4,
        color: "secondary",
        classes: {
          root: classes.paper
        }
      }, /*#__PURE__*/_react.default.createElement(_Button.default, {
        fullWidth: true,
        className: classes.topBar,
        onClick: function onClick() {
          return _this2.setOpen(true);
        },
        component: "div",
        color: "inherit"
      }, icon || /*#__PURE__*/_react.default.createElement(_LockSharp.default, {
        className: classes.icon
      }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
        className: classes.label,
        component: "h3",
        variant: "body1",
        color: "inherit"
      }, ruleSet ? /*#__PURE__*/_react.default.createElement(_SanitizedHtml.default, {
        htmlString: label,
        ruleSet: ruleSet
      }) : label), /*#__PURE__*/_react.default.createElement(_PluginHook.PluginHook, this.props), /*#__PURE__*/_react.default.createElement("span", {
        className: classes.fauxButton
      }, !open && /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "button",
        color: "inherit"
      }, continueLabel || t('continue')))), /*#__PURE__*/_react.default.createElement(_Collapse.default, {
        "in": open,
        onClose: function onClose() {
          return _this2.setOpen(false);
        }
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "body1",
        color: "inherit",
        className: classes.expanded
      }, ruleSet ? /*#__PURE__*/_react.default.createElement(_SanitizedHtml.default, {
        htmlString: header,
        ruleSet: ruleSet
      }) : header, header && description ? ': ' : '', ruleSet ? /*#__PURE__*/_react.default.createElement(_SanitizedHtml.default, {
        htmlString: description,
        ruleSet: ruleSet
      }) : description), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
        onClick: function onClick() {
          return _this2.setOpen(false);
        },
        color: "inherit"
      }, t('cancel')), button)));
    }
  }]);
  return WindowAuthenticationBar;
}(_react.Component);
WindowAuthenticationBar.defaultProps = {
  confirmButton: undefined,
  ConfirmProps: {},
  continueLabel: undefined,
  description: undefined,
  hasLogoutService: true,
  header: undefined,
  icon: undefined,
  ruleSet: 'iiif',
  status: undefined,
  t: function t(k) {
    return k;
  }
};
},{"react":"../node_modules/react/index.js","@material-ui/core/Button":"../node_modules/@material-ui/core/esm/Button/index.js","@material-ui/core/Paper":"../node_modules/@material-ui/core/esm/Paper/index.js","@material-ui/core/Collapse":"../node_modules/@material-ui/core/esm/Collapse/index.js","@material-ui/core/DialogActions":"../node_modules/@material-ui/core/esm/DialogActions/index.js","@material-ui/core/Typography":"../node_modules/@material-ui/core/esm/Typography/index.js","@material-ui/icons/LockSharp":"../node_modules/@material-ui/icons/LockSharp.js","../containers/SanitizedHtml":"../node_modules/mirador/dist/es/src/containers/SanitizedHtml.js","./PluginHook":"../node_modules/mirador/dist/es/src/components/PluginHook.js"}],"../node_modules/mirador/dist/es/src/containers/WindowAuthenticationBar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _styles = require("@material-ui/core/styles");
var _colorManipulator = require("@material-ui/core/styles/colorManipulator");
var _withPlugins = require("../extend/withPlugins");
var _WindowAuthenticationBar = require("../components/WindowAuthenticationBar");
/**
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: number|string},
 * windowTopBarStyle: {minHeight: number, paddingLeft: number, backgroundColor: string}}}
 */

var styles = function styles(theme) {
  return {
    buttonInvert: {
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.secondary.contrastText, 1 - theme.palette.action.hoverOpacity)
      },
      backgroundColor: theme.palette.secondary.contrastText,
      marginLeft: theme.spacing(5),
      paddingBottom: 0,
      paddingTop: 0
    },
    expanded: {
      paddingLeft: theme.spacing(),
      paddingRight: theme.spacing()
    },
    failure: {
      backgroundColor: theme.palette.error.dark
    },
    fauxButton: {
      marginLeft: theme.spacing(2.5)
    },
    icon: {
      marginRight: theme.spacing(1.5),
      verticalAlign: 'text-bottom'
    },
    label: {
      lineHeight: 2.25
    },
    paper: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      cursor: 'pointer'
    },
    topBar: {
      '&:hover': {
        backgroundColor: theme.palette.secondary.main
      },
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'inherit',
      padding: theme.spacing(1),
      textTransform: 'none'
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _styles.withStyles)(styles), (0, _withPlugins.withPlugins)('WindowAuthenticationBar'));
var _default = exports.default = enhance(_WindowAuthenticationBar.WindowAuthenticationBar);
},{"redux":"../node_modules/redux/es/redux.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","@material-ui/core/styles/colorManipulator":"../node_modules/@material-ui/core/styles/colorManipulator.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/WindowAuthenticationBar":"../node_modules/mirador/dist/es/src/components/WindowAuthenticationBar.js"}],"../node_modules/mirador/dist/es/src/components/IIIFAuthentication.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IIIFAuthentication = void 0;
var _react = _interopRequireWildcard(require("react"));
var _AccessTokenSender = require("./AccessTokenSender");
var _NewWindow = require("./NewWindow");
var _WindowAuthenticationBar = _interopRequireDefault(require("../containers/WindowAuthenticationBar"));
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
 * Opens a new window for click
 */

var IIIFAuthentication = exports.IIIFAuthentication = /*#__PURE__*/function (_Component) {
  _inherits(IIIFAuthentication, _Component);
  var _super = _createSuper(IIIFAuthentication);

  /** */
  function IIIFAuthentication(props) {
    var _this;
    _classCallCheck(this, IIIFAuthentication);
    _this = _super.call(this, props);
    _this.performLogout = _this.performLogout.bind(_assertThisInitialized(_this));
    _this.onReceiveAccessTokenMessage = _this.onReceiveAccessTokenMessage.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */

  _createClass(IIIFAuthentication, [{
    key: "onReceiveAccessTokenMessage",
    value: function onReceiveAccessTokenMessage(payload) {
      var _this$props = this.props,
        authServiceId = _this$props.authServiceId,
        accessTokenServiceId = _this$props.accessTokenServiceId,
        resolveAccessTokenRequest = _this$props.resolveAccessTokenRequest;
      resolveAccessTokenRequest(authServiceId, accessTokenServiceId, payload);
    }
    /** */
  }, {
    key: "defaultAuthBarProps",
    value: function defaultAuthBarProps() {
      var _this$props2 = this.props,
        authServiceId = _this$props2.authServiceId,
        windowId = _this$props2.windowId,
        status = _this$props2.status,
        logoutServiceId = _this$props2.logoutServiceId;
      return {
        authServiceId: authServiceId,
        hasLogoutService: !!logoutServiceId,
        status: status,
        windowId: windowId
      };
    }
    /** handle the IIIF logout workflow */
  }, {
    key: "performLogout",
    value: function performLogout() {
      var _this$props3 = this.props,
        accessTokenServiceId = _this$props3.accessTokenServiceId,
        authServiceId = _this$props3.authServiceId,
        features = _this$props3.features,
        logoutServiceId = _this$props3.logoutServiceId,
        resetAuthenticationState = _this$props3.resetAuthenticationState,
        openWindow = _this$props3.openWindow;
      openWindow(logoutServiceId, undefined, features);
      resetAuthenticationState({
        authServiceId: authServiceId,
        tokenServiceId: accessTokenServiceId
      });
    }
    /** Render the auth bar for logged in users */
  }, {
    key: "renderLoggedIn",
    value: function renderLoggedIn() {
      var _this$props4 = this.props,
        isInteractive = _this$props4.isInteractive,
        logoutConfirm = _this$props4.logoutConfirm,
        t = _this$props4.t;
      if (!isInteractive) return null;
      return /*#__PURE__*/_react.default.createElement(_WindowAuthenticationBar.default, Object.assign({
        confirmButton: logoutConfirm || t('logout'),
        onConfirm: this.performLogout
      }, this.defaultAuthBarProps()));
    }
    /** Render whatever shows up after the interactive login attempt fails */
  }, {
    key: "renderFailure",
    value: function renderFailure() {
      var _this$props5 = this.props,
        handleAuthInteraction = _this$props5.handleAuthInteraction,
        header = _this$props5.failureHeader,
        description = _this$props5.failureDescription,
        t = _this$props5.t,
        authServiceId = _this$props5.authServiceId,
        windowId = _this$props5.windowId;
      return /*#__PURE__*/_react.default.createElement(_WindowAuthenticationBar.default, Object.assign({
        header: header,
        description: description,
        confirmButton: t('retry'),
        onConfirm: function onConfirm() {
          return handleAuthInteraction(windowId, authServiceId);
        }
      }, this.defaultAuthBarProps()));
    }
    /** Render the login bar after we're logging in */
  }, {
    key: "renderLoggingInCookie",
    value: function renderLoggingInCookie() {
      var _this$props6 = this.props,
        accessTokenServiceId = _this$props6.accessTokenServiceId,
        authServiceId = _this$props6.authServiceId,
        resolveAuthenticationRequest = _this$props6.resolveAuthenticationRequest,
        features = _this$props6.features;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.renderLogin(), /*#__PURE__*/_react.default.createElement(_NewWindow.NewWindow, {
        name: "IiifLoginSender",
        url: "".concat(authServiceId, "?origin=").concat(window.origin),
        features: features,
        onClose: function onClose() {
          return resolveAuthenticationRequest(authServiceId, accessTokenServiceId);
        }
      }));
    }
    /** Render the login bar after we're logging in */
  }, {
    key: "renderLoggingInToken",
    value: function renderLoggingInToken() {
      var accessTokenServiceId = this.props.accessTokenServiceId;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.renderLogin(), /*#__PURE__*/_react.default.createElement(_AccessTokenSender.AccessTokenSender, {
        handleAccessTokenMessage: this.onReceiveAccessTokenMessage,
        url: accessTokenServiceId
      }));
    }
    /** Render a login bar */
  }, {
    key: "renderLogin",
    value: function renderLogin() {
      var _this$props7 = this.props,
        confirm = _this$props7.confirm,
        description = _this$props7.description,
        handleAuthInteraction = _this$props7.handleAuthInteraction,
        header = _this$props7.header,
        isInteractive = _this$props7.isInteractive,
        label = _this$props7.label,
        authServiceId = _this$props7.authServiceId,
        windowId = _this$props7.windowId;
      if (!isInteractive) return null;
      return /*#__PURE__*/_react.default.createElement(_WindowAuthenticationBar.default, Object.assign({
        header: header,
        description: description,
        label: label,
        confirmButton: confirm,
        onConfirm: function onConfirm() {
          return handleAuthInteraction(windowId, authServiceId);
        }
      }, this.defaultAuthBarProps()));
    }
    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
        authServiceId = _this$props8.authServiceId,
        status = _this$props8.status;
      if (!authServiceId) return null;
      if (status === null) return this.renderLogin();
      if (status === 'cookie') return this.renderLoggingInCookie();
      if (status === 'token') return this.renderLoggingInToken();
      if (status === 'failed') return this.renderFailure();
      if (status === 'ok') return this.renderLoggedIn();
      return null;
    }
  }]);
  return IIIFAuthentication;
}(_react.Component);
IIIFAuthentication.defaultProps = {
  confirm: undefined,
  description: undefined,
  failureDescription: undefined,
  failureHeader: undefined,
  features: 'centerscreen',
  header: undefined,
  isInteractive: true,
  label: undefined,
  logoutConfirm: undefined,
  logoutServiceId: undefined,
  openWindow: window.open,
  status: null,
  t: function t(k) {
    return k;
  }
};
},{"react":"../node_modules/react/index.js","./AccessTokenSender":"../node_modules/mirador/dist/es/src/components/AccessTokenSender.js","./NewWindow":"../node_modules/mirador/dist/es/src/components/NewWindow.js","../containers/WindowAuthenticationBar":"../node_modules/mirador/dist/es/src/containers/WindowAuthenticationBar.js"}],"../node_modules/mirador/dist/es/src/containers/IIIFAuthentication.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _manifesto = require("manifesto.js");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _IIIFAuthentication = require("../components/IIIFAuthentication");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * mapStateToProps - to hook up connect
 * @memberof FullScreenButton
 * @private
 */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  var services = (0, _selectors.selectCurrentAuthServices)(state, {
    windowId: windowId
  }); // TODO: get the most actionable auth service...

  var service = services[0];
  var accessTokenService = service && (_manifesto.Utils.getService(service, 'http://iiif.io/api/auth/1/token') || _manifesto.Utils.getService(service, 'http://iiif.io/api/auth/0/token'));
  var logoutService = service && (_manifesto.Utils.getService(service, 'http://iiif.io/api/auth/1/logout') || _manifesto.Utils.getService(service, 'http://iiif.io/api/auth/0/logout'));
  var authStatuses = (0, _selectors.getAuth)(state);
  var authStatus = service && authStatuses[service.id];
  var accessTokens = (0, _selectors.getAccessTokens)(state);
  var accessTokenStatus = accessTokenService && accessTokens[accessTokenService.id];
  var status = null;
  if (!authStatus) {
    status = null;
  } else if (authStatus.isFetching) {
    if (authStatus.windowId === windowId) status = 'cookie';
  } else if (accessTokenStatus && accessTokenStatus.isFetching) {
    if (authStatus.windowId === windowId) status = 'token';
  } else if (authStatus.ok) {
    status = 'ok';
  } else if (authStatus.ok === false) {
    status = 'failed';
  }
  var authProfiles = (0, _selectors.getAuthProfiles)(state);
  var profile = service && service.getProfile();
  var isInteractive = authProfiles.some(function (config) {
    return config.profile === profile && !(config.external || config.kiosk);
  });
  return {
    accessTokenServiceId: accessTokenService && accessTokenService.id,
    authServiceId: service && service.id,
    confirm: service && service.getConfirmLabel(),
    description: service && service.getDescription(),
    failureDescription: service && service.getFailureDescription(),
    failureHeader: service && service.getFailureHeader(),
    header: service && service.getHeader(),
    isInteractive: isInteractive,
    label: service && service.getLabel()[0].value,
    logoutConfirm: logoutService && logoutService.getLabel()[0] && logoutService.getLabel()[0].value,
    logoutServiceId: logoutService && logoutService.id,
    profile: profile,
    status: status
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */

var mapDispatchToProps = {
  handleAuthInteraction: actions.addAuthenticationRequest,
  resetAuthenticationState: actions.resetAuthenticationState,
  resolveAccessTokenRequest: actions.resolveAccessTokenRequest,
  resolveAuthenticationRequest: actions.resolveAuthenticationRequest
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('IIIFAuthentication'));
var _default = exports.default = enhance(_IIIFAuthentication.IIIFAuthentication);
},{"react-redux":"../node_modules/react-redux/es/index.js","redux":"../node_modules/redux/es/redux.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","manifesto.js":"../node_modules/manifesto.js/dist-umd/manifesto.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/IIIFAuthentication":"../node_modules/mirador/dist/es/src/components/IIIFAuthentication.js"}],"../node_modules/mirador/dist/es/src/components/Window.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Window = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));
var _contextTypes = require("react-mosaic-component/lib/contextTypes");
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _WindowTopBar = _interopRequireDefault(require("../containers/WindowTopBar"));
var _PrimaryWindow = _interopRequireDefault(require("../containers/PrimaryWindow"));
var _CompanionArea = _interopRequireDefault(require("../containers/CompanionArea"));
var _MinimalWindow = _interopRequireDefault(require("../containers/MinimalWindow"));
var _ErrorContent = _interopRequireDefault(require("../containers/ErrorContent"));
var _IIIFAuthentication = _interopRequireDefault(require("../containers/IIIFAuthentication"));
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
 * Represents a Window in the mirador workspace
 * @param {object} window
 */

var Window = exports.Window = /*#__PURE__*/function (_Component) {
  _inherits(Window, _Component);
  var _super = _createSuper(Window);

  /** */
  function Window(props) {
    var _this;
    _classCallCheck(this, Window);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  /** */

  _createClass(Window, [{
    key: "wrappedTopBar",
    value:
    /**
     * wrappedTopBar - will conditionally wrap a WindowTopBar for needed
     * additional functionality based on workspace type
     */
    function wrappedTopBar() {
      var _this$props = this.props,
        windowId = _this$props.windowId,
        workspaceType = _this$props.workspaceType,
        windowDraggable = _this$props.windowDraggable;
      var topBar = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_WindowTopBar.default, {
        windowId: windowId,
        windowDraggable: windowDraggable
      }), /*#__PURE__*/_react.default.createElement(_IIIFAuthentication.default, {
        windowId: windowId
      }));
      if (workspaceType === 'mosaic' && windowDraggable) {
        var mosaicWindowActions = this.context.mosaicWindowActions;
        return mosaicWindowActions.connectDragSource(topBar);
      }
      return topBar;
    }
    /**
     * Renders things
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        focusWindow = _this$props2.focusWindow,
        label = _this$props2.label,
        isFetching = _this$props2.isFetching,
        maximized = _this$props2.maximized,
        sideBarOpen = _this$props2.sideBarOpen,
        view = _this$props2.view,
        windowId = _this$props2.windowId,
        classes = _this$props2.classes,
        t = _this$props2.t,
        manifestError = _this$props2.manifestError;
      var _this$state = this.state,
        error = _this$state.error,
        hasError = _this$state.hasError;
      if (hasError) {
        return /*#__PURE__*/_react.default.createElement(_MinimalWindow.default, {
          windowId: windowId
        }, /*#__PURE__*/_react.default.createElement(_ErrorContent.default, {
          error: error,
          windowId: windowId
        }));
      }
      return /*#__PURE__*/_react.default.createElement(_Paper.default, {
        onFocus: focusWindow,
        component: "section",
        elevation: 1,
        id: windowId,
        className: (0, _classnames.default)(classes.window, (0, _cssNs.default)('window'), maximized ? classes.maximized : null),
        "aria-label": t('window', {
          label: label
        })
      }, this.wrappedTopBar(), manifestError && /*#__PURE__*/_react.default.createElement(_ErrorContent.default, {
        error: {
          stack: manifestError
        },
        windowId: windowId
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: classes.middle
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: classes.middleLeft
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: classes.primaryWindow
      }, /*#__PURE__*/_react.default.createElement(_PrimaryWindow.default, {
        view: view,
        windowId: windowId,
        isFetching: isFetching,
        sideBarOpen: sideBarOpen
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: classes.companionAreaBottom
      }, /*#__PURE__*/_react.default.createElement(_CompanionArea.default, {
        windowId: windowId,
        position: "bottom"
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: classes.companionAreaRight
      }, /*#__PURE__*/_react.default.createElement(_CompanionArea.default, {
        windowId: windowId,
        position: "right"
      }), /*#__PURE__*/_react.default.createElement(_CompanionArea.default, {
        windowId: windowId,
        position: "far-right"
      }))), /*#__PURE__*/_react.default.createElement(_CompanionArea.default, {
        windowId: windowId,
        position: "far-bottom"
      }), /*#__PURE__*/_react.default.createElement(_PluginHook.PluginHook, this.props));
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        error: error,
        hasError: true
      };
    }
  }]);
  return Window;
}(_react.Component);
Window.contextType = _contextTypes.MosaicWindowContext;
Window.defaultProps = {
  classes: {},
  focusWindow: function focusWindow() {},
  isFetching: false,
  label: null,
  manifestError: null,
  maximized: false,
  sideBarOpen: false,
  view: undefined,
  windowDraggable: null,
  workspaceType: null
};
},{"react":"../node_modules/react/index.js","classnames":"../node_modules/classnames/index.js","@material-ui/core/Paper":"../node_modules/@material-ui/core/esm/Paper/index.js","react-mosaic-component/lib/contextTypes":"../node_modules/react-mosaic-component/lib/contextTypes.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js","../containers/WindowTopBar":"../node_modules/mirador/dist/es/src/containers/WindowTopBar.js","../containers/PrimaryWindow":"../node_modules/mirador/dist/es/src/containers/PrimaryWindow.js","../containers/CompanionArea":"../node_modules/mirador/dist/es/src/containers/CompanionArea.js","../containers/MinimalWindow":"../node_modules/mirador/dist/es/src/containers/MinimalWindow.js","../containers/ErrorContent":"../node_modules/mirador/dist/es/src/containers/ErrorContent.js","../containers/IIIFAuthentication":"../node_modules/mirador/dist/es/src/containers/IIIFAuthentication.js","./PluginHook":"../node_modules/mirador/dist/es/src/components/PluginHook.js"}],"../node_modules/mirador/dist/es/src/containers/Window.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _core = require("@material-ui/core");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _Window = require("../components/Window");
var _selectors = require("../state/selectors");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * mapStateToProps - used to hook up connect to action creators
 * @memberof Window
 * @private
 */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    isFetching: (0, _selectors.getManifestStatus)(state, {
      windowId: windowId
    }).isFetching,
    label: (0, _selectors.getManifestTitle)(state, {
      windowId: windowId
    }),
    manifestError: (0, _selectors.getManifestError)(state, {
      windowId: windowId
    }),
    maximized: ((0, _selectors.getWindow)(state, {
      windowId: windowId
    }) || {}).maximized,
    sideBarOpen: ((0, _selectors.getWindow)(state, {
      windowId: windowId
    }) || {}).sideBarOpen,
    thumbnailNavigationPosition: (0, _selectors.getThumbnailNavigationPosition)(state, {
      windowId: windowId
    }),
    view: (0, _selectors.getWindowViewType)(state, {
      windowId: windowId
    }),
    window: (0, _selectors.getWindow)(state, {
      windowId: windowId
    }),
    windowDraggable: (0, _selectors.getWindowDraggability)(state, {
      windowId: windowId
    }),
    workspaceType: (0, _selectors.getWorkspaceType)(state)
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var windowId = _ref2.windowId;
  return {
    focusWindow: function focusWindow() {
      return dispatch(actions.focusWindow(windowId));
    }
  };
};
/**
 * @param theme
 */

var styles = function styles(theme) {
  return {
    companionAreaBottom: {
      display: 'flex',
      flex: '0',
      flexBasis: 'auto',
      minHeight: 0
    },
    companionAreaRight: {
      display: 'flex',
      flex: '0 1 auto',
      minHeight: 0
    },
    maximized: {},
    middle: {
      display: 'flex',
      flex: '1',
      flexDirection: 'row',
      minHeight: 0
    },
    middleLeft: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      minHeight: 0
    },
    primaryWindow: {
      display: 'flex',
      flex: '1',
      height: '300px',
      minHeight: 0,
      position: 'relative'
    },
    thumbnailArea: {
      backgroundColor: theme.palette.shades.dark
    },
    thumbnailAreaBottom: {},
    thumbnailAreaRight: {
      minWidth: 100
    },
    window: {
      '&$maximized': {
        left: 0,
        position: 'absolute',
        top: 0,
        zIndex: theme.zIndex.modal - 1
      },
      backgroundColor: theme.palette.shades.dark,
      borderRadius: 0,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      minHeight: 0,
      overflow: 'hidden',
      width: '100%'
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('Window'));
var _default = exports.default = enhance(_Window.Window);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../components/Window":"../node_modules/mirador/dist/es/src/components/Window.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js"}],"../node_modules/lodash/countBy.js":[function(require,module,exports) {
var baseAssignValue = require('./_baseAssignValue'),
    createAggregator = require('./_createAggregator');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the number of times the key was returned by `iteratee`. The
 * iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.countBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': 1, '6': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.countBy(['one', 'two', 'three'], 'length');
 * // => { '3': 2, '5': 1 }
 */
var countBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    ++result[key];
  } else {
    baseAssignValue(result, key, 1);
  }
});

module.exports = countBy;

},{"./_baseAssignValue":"../node_modules/lodash/_baseAssignValue.js","./_createAggregator":"../node_modules/lodash/_createAggregator.js"}],"../node_modules/lodash/_basePickBy.js":[function(require,module,exports) {
var baseGet = require('./_baseGet'),
    baseSet = require('./_baseSet'),
    castPath = require('./_castPath');

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;

},{"./_baseGet":"../node_modules/lodash/_baseGet.js","./_baseSet":"../node_modules/lodash/_baseSet.js","./_castPath":"../node_modules/lodash/_castPath.js"}],"../node_modules/lodash/pickBy.js":[function(require,module,exports) {
var arrayMap = require('./_arrayMap'),
    baseIteratee = require('./_baseIteratee'),
    basePickBy = require('./_basePickBy'),
    getAllKeysIn = require('./_getAllKeysIn');

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

module.exports = pickBy;

},{"./_arrayMap":"../node_modules/lodash/_arrayMap.js","./_baseIteratee":"../node_modules/lodash/_baseIteratee.js","./_basePickBy":"../node_modules/lodash/_basePickBy.js","./_getAllKeysIn":"../node_modules/lodash/_getAllKeysIn.js"}],"../node_modules/react-mosaic-component/node_modules/uuid/lib/rng-browser.js":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

},{}],"../node_modules/react-mosaic-component/node_modules/uuid/lib/bytesToUuid.js":[function(require,module,exports) {
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;

},{}],"../node_modules/react-mosaic-component/node_modules/uuid/v1.js":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

},{"./lib/rng":"../node_modules/react-mosaic-component/node_modules/uuid/lib/rng-browser.js","./lib/bytesToUuid":"../node_modules/react-mosaic-component/node_modules/uuid/lib/bytesToUuid.js"}],"../node_modules/react-mosaic-component/node_modules/uuid/v4.js":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/rng":"../node_modules/react-mosaic-component/node_modules/uuid/lib/rng-browser.js","./lib/bytesToUuid":"../node_modules/react-mosaic-component/node_modules/uuid/lib/bytesToUuid.js"}],"../node_modules/react-mosaic-component/node_modules/uuid/index.js":[function(require,module,exports) {
var v1 = require('./v1');
var v4 = require('./v4');

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;

},{"./v1":"../node_modules/react-mosaic-component/node_modules/uuid/v1.js","./v4":"../node_modules/react-mosaic-component/node_modules/uuid/v4.js"}],"../node_modules/lodash/_baseClamp.js":[function(require,module,exports) {
/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

module.exports = baseClamp;

},{}],"../node_modules/lodash/clamp.js":[function(require,module,exports) {
var baseClamp = require('./_baseClamp'),
    toNumber = require('./toNumber');

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}

module.exports = clamp;

},{"./_baseClamp":"../node_modules/lodash/_baseClamp.js","./toNumber":"../node_modules/lodash/toNumber.js"}],"../node_modules/lodash/throttle.js":[function(require,module,exports) {
var debounce = require('./debounce'),
    isObject = require('./isObject');

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;

},{"./debounce":"../node_modules/lodash/debounce.js","./isObject":"../node_modules/lodash/isObject.js"}],"../node_modules/react-mosaic-component/lib/util/assertNever.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertNever = void 0;
function assertNever(shouldBeNever) {
    throw new Error('Unhandled case: ' + JSON.stringify(shouldBeNever));
}
exports.assertNever = assertNever;

},{}],"../node_modules/react-mosaic-component/lib/util/BoundingBox.js":[function(require,module,exports) {
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoundingBox = void 0;
var assertNever_1 = require("./assertNever");
var BoundingBox;
(function (BoundingBox) {
    function empty() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        };
    }
    BoundingBox.empty = empty;
    function split(boundingBox, relativeSplitPercentage, direction) {
        var absolutePercentage = getAbsoluteSplitPercentage(boundingBox, relativeSplitPercentage, direction);
        if (direction === 'column') {
            return {
                first: __assign(__assign({}, boundingBox), { bottom: 100 - absolutePercentage }),
                second: __assign(__assign({}, boundingBox), { top: absolutePercentage }),
            };
        }
        else if (direction === 'row') {
            return {
                first: __assign(__assign({}, boundingBox), { right: 100 - absolutePercentage }),
                second: __assign(__assign({}, boundingBox), { left: absolutePercentage }),
            };
        }
        else {
            return assertNever_1.assertNever(direction);
        }
    }
    BoundingBox.split = split;
    function getAbsoluteSplitPercentage(boundingBox, relativeSplitPercentage, direction) {
        var top = boundingBox.top, right = boundingBox.right, bottom = boundingBox.bottom, left = boundingBox.left;
        if (direction === 'column') {
            var height = 100 - top - bottom;
            return (height * relativeSplitPercentage) / 100 + top;
        }
        else if (direction === 'row') {
            var width = 100 - right - left;
            return (width * relativeSplitPercentage) / 100 + left;
        }
        else {
            return assertNever_1.assertNever(direction);
        }
    }
    BoundingBox.getAbsoluteSplitPercentage = getAbsoluteSplitPercentage;
    function getRelativeSplitPercentage(boundingBox, absoluteSplitPercentage, direction) {
        var top = boundingBox.top, right = boundingBox.right, bottom = boundingBox.bottom, left = boundingBox.left;
        if (direction === 'column') {
            var height = 100 - top - bottom;
            return ((absoluteSplitPercentage - top) / height) * 100;
        }
        else if (direction === 'row') {
            var width = 100 - right - left;
            return ((absoluteSplitPercentage - left) / width) * 100;
        }
        else {
            return assertNever_1.assertNever(direction);
        }
    }
    BoundingBox.getRelativeSplitPercentage = getRelativeSplitPercentage;
    function asStyles(_a) {
        var top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        return {
            top: top + "%",
            right: right + "%",
            bottom: bottom + "%",
            left: left + "%",
        };
    }
    BoundingBox.asStyles = asStyles;
})(BoundingBox = exports.BoundingBox || (exports.BoundingBox = {}));

},{"./assertNever":"../node_modules/react-mosaic-component/lib/util/assertNever.js"}],"../node_modules/react-mosaic-component/lib/Split.js":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Split = void 0;
var classnames_1 = __importDefault(require("classnames"));
var clamp_1 = __importDefault(require("lodash/clamp"));
var throttle_1 = __importDefault(require("lodash/throttle"));
var react_1 = __importDefault(require("react"));
var BoundingBox_1 = require("./util/BoundingBox");
var RESIZE_THROTTLE_MS = 1000 / 30; // 30 fps
var TOUCH_EVENT_OPTIONS = {
    capture: true,
    passive: false,
};
var Split = /** @class */ (function (_super) {
    __extends(Split, _super);
    function Split() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootElement = react_1.default.createRef();
        _this.listenersBound = false;
        _this.onMouseDown = function (event) {
            if (!isTouchEvent(event)) {
                if (event.button !== 0) {
                    return;
                }
            }
            event.preventDefault();
            _this.bindListeners();
        };
        _this.onMouseUp = function (event) {
            _this.unbindListeners();
            var percentage = _this.calculateRelativePercentage(event);
            _this.props.onRelease(percentage);
        };
        _this.onMouseMove = function (event) {
            event.preventDefault();
            event.stopPropagation();
            _this.throttledUpdatePercentage(event);
        };
        _this.throttledUpdatePercentage = throttle_1.default(function (event) {
            var percentage = _this.calculateRelativePercentage(event);
            if (percentage !== _this.props.splitPercentage) {
                _this.props.onChange(percentage);
            }
        }, RESIZE_THROTTLE_MS);
        return _this;
    }
    Split.prototype.render = function () {
        var direction = this.props.direction;
        return (react_1.default.createElement("div", { className: classnames_1.default('mosaic-split', {
                '-row': direction === 'row',
                '-column': direction === 'column',
            }), ref: this.rootElement, onMouseDown: this.onMouseDown, style: this.computeStyle() },
            react_1.default.createElement("div", { className: "mosaic-split-line" })));
    };
    Split.prototype.componentDidMount = function () {
        this.rootElement.current.addEventListener('touchstart', this.onMouseDown, TOUCH_EVENT_OPTIONS);
    };
    Split.prototype.componentWillUnmount = function () {
        this.unbindListeners();
        if (this.rootElement.current) {
            this.rootElement.current.ownerDocument.removeEventListener('touchstart', this.onMouseDown, TOUCH_EVENT_OPTIONS);
        }
    };
    Split.prototype.bindListeners = function () {
        if (!this.listenersBound) {
            this.rootElement.current.ownerDocument.addEventListener('mousemove', this.onMouseMove, true);
            this.rootElement.current.ownerDocument.addEventListener('touchmove', this.onMouseMove, TOUCH_EVENT_OPTIONS);
            this.rootElement.current.ownerDocument.addEventListener('mouseup', this.onMouseUp, true);
            this.rootElement.current.ownerDocument.addEventListener('touchend', this.onMouseUp, true);
            this.listenersBound = true;
        }
    };
    Split.prototype.unbindListeners = function () {
        if (this.rootElement.current) {
            this.rootElement.current.ownerDocument.removeEventListener('mousemove', this.onMouseMove, true);
            this.rootElement.current.ownerDocument.removeEventListener('touchmove', this.onMouseMove, TOUCH_EVENT_OPTIONS);
            this.rootElement.current.ownerDocument.removeEventListener('mouseup', this.onMouseUp, true);
            this.rootElement.current.ownerDocument.removeEventListener('touchend', this.onMouseUp, true);
            this.listenersBound = false;
        }
    };
    Split.prototype.computeStyle = function () {
        var _a;
        var _b = this.props, boundingBox = _b.boundingBox, direction = _b.direction, splitPercentage = _b.splitPercentage;
        var positionStyle = direction === 'column' ? 'top' : 'left';
        var absolutePercentage = BoundingBox_1.BoundingBox.getAbsoluteSplitPercentage(boundingBox, splitPercentage, direction);
        return __assign(__assign({}, BoundingBox_1.BoundingBox.asStyles(boundingBox)), (_a = {}, _a[positionStyle] = absolutePercentage + "%", _a));
    };
    Split.prototype.calculateRelativePercentage = function (event) {
        var _a = this.props, minimumPaneSizePercentage = _a.minimumPaneSizePercentage, direction = _a.direction, boundingBox = _a.boundingBox;
        var parentBBox = this.rootElement.current.parentElement.getBoundingClientRect();
        var location = isTouchEvent(event) ? event.changedTouches[0] : event;
        var absolutePercentage;
        if (direction === 'column') {
            absolutePercentage = ((location.clientY - parentBBox.top) / parentBBox.height) * 100.0;
        }
        else {
            absolutePercentage = ((location.clientX - parentBBox.left) / parentBBox.width) * 100.0;
        }
        var relativePercentage = BoundingBox_1.BoundingBox.getRelativeSplitPercentage(boundingBox, absolutePercentage, direction);
        return clamp_1.default(relativePercentage, minimumPaneSizePercentage, 100 - minimumPaneSizePercentage);
    };
    Split.defaultProps = {
        onChange: function () { return void 0; },
        onRelease: function () { return void 0; },
        minimumPaneSizePercentage: 20,
    };
    return Split;
}(react_1.default.PureComponent));
exports.Split = Split;
function isTouchEvent(event) {
    return event.changedTouches != null;
}

},{"classnames":"../node_modules/classnames/index.js","lodash/clamp":"../node_modules/lodash/clamp.js","lodash/throttle":"../node_modules/lodash/throttle.js","react":"../node_modules/react/index.js","./util/BoundingBox":"../node_modules/react-mosaic-component/lib/util/BoundingBox.js"}],"../node_modules/react-mosaic-component/lib/util/mosaicUtilities.js":[function(require,module,exports) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAndAssertNodeAtPathExists = exports.getNodeAtPath = exports.getLeaves = exports.getPathToCorner = exports.getOtherDirection = exports.getOtherBranch = exports.createBalancedTreeFromLeaves = exports.isParent = exports.Corner = void 0;
var clone_1 = __importDefault(require("lodash/clone"));
var get_1 = __importDefault(require("lodash/get"));
function alternateDirection(node, direction) {
    if (direction === void 0) { direction = 'row'; }
    if (isParent(node)) {
        var nextDirection = getOtherDirection(direction);
        return {
            direction: direction,
            first: alternateDirection(node.first, nextDirection),
            second: alternateDirection(node.second, nextDirection),
        };
    }
    else {
        return node;
    }
}
var Corner;
(function (Corner) {
    Corner[Corner["TOP_LEFT"] = 1] = "TOP_LEFT";
    Corner[Corner["TOP_RIGHT"] = 2] = "TOP_RIGHT";
    Corner[Corner["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
    Corner[Corner["BOTTOM_RIGHT"] = 4] = "BOTTOM_RIGHT";
})(Corner = exports.Corner || (exports.Corner = {}));
/**
 * Returns `true` if `node` is a MosaicParent
 * @param node
 * @returns {boolean}
 */
function isParent(node) {
    return node.direction != null;
}
exports.isParent = isParent;
/**
 * Creates a balanced binary tree from `leaves` with the goal of making them as equal area as possible
 * @param leaves
 * @param startDirection
 * @returns {MosaicNode<T>}
 */
function createBalancedTreeFromLeaves(leaves, startDirection) {
    if (startDirection === void 0) { startDirection = 'row'; }
    if (leaves.length === 0) {
        return null;
    }
    var current = clone_1.default(leaves);
    var next = [];
    while (current.length > 1) {
        while (current.length > 0) {
            if (current.length > 1) {
                next.push({
                    direction: 'row',
                    first: current.shift(),
                    second: current.shift(),
                });
            }
            else {
                next.unshift(current.shift());
            }
        }
        current = next;
        next = [];
    }
    return alternateDirection(current[0], startDirection);
}
exports.createBalancedTreeFromLeaves = createBalancedTreeFromLeaves;
/**
 * Gets the sibling of `branch`
 * @param branch
 * @returns {any}
 */
function getOtherBranch(branch) {
    if (branch === 'first') {
        return 'second';
    }
    else if (branch === 'second') {
        return 'first';
    }
    else {
        throw new Error("Branch '" + branch + "' not a valid branch");
    }
}
exports.getOtherBranch = getOtherBranch;
/**
 * Gets the opposite of `direction`
 * @param direction
 * @returns {any}
 */
function getOtherDirection(direction) {
    if (direction === 'row') {
        return 'column';
    }
    else {
        return 'row';
    }
}
exports.getOtherDirection = getOtherDirection;
/**
 * Traverses `tree` to find the path to the specified `corner`
 * @param tree
 * @param corner
 * @returns {MosaicPath}
 */
function getPathToCorner(tree, corner) {
    var currentNode = tree;
    var currentPath = [];
    while (isParent(currentNode)) {
        if (currentNode.direction === 'row' && (corner === Corner.TOP_LEFT || corner === Corner.BOTTOM_LEFT)) {
            currentPath.push('first');
            currentNode = currentNode.first;
        }
        else if (currentNode.direction === 'column' && (corner === Corner.TOP_LEFT || corner === Corner.TOP_RIGHT)) {
            currentPath.push('first');
            currentNode = currentNode.first;
        }
        else {
            currentPath.push('second');
            currentNode = currentNode.second;
        }
    }
    return currentPath;
}
exports.getPathToCorner = getPathToCorner;
/**
 * Gets all leaves of `tree`
 * @param tree
 * @returns {T[]}
 */
function getLeaves(tree) {
    if (tree == null) {
        return [];
    }
    else if (isParent(tree)) {
        return getLeaves(tree.first).concat(getLeaves(tree.second));
    }
    else {
        return [tree];
    }
}
exports.getLeaves = getLeaves;
/**
 * Gets node at `path` from `tree`
 * @param tree
 * @param path
 * @returns {MosaicNode<T>|null}
 */
function getNodeAtPath(tree, path) {
    if (path.length > 0) {
        return get_1.default(tree, path, null);
    }
    else {
        return tree;
    }
}
exports.getNodeAtPath = getNodeAtPath;
/**
 * Gets node at `path` from `tree` and verifies that neither `tree` nor the result are null
 * @param tree
 * @param path
 * @returns {MosaicNode<T>}
 */
function getAndAssertNodeAtPathExists(tree, path) {
    if (tree == null) {
        throw new Error('Root is empty, cannot fetch path');
    }
    var node = getNodeAtPath(tree, path);
    if (node == null) {
        throw new Error("Path [" + path.join(', ') + "] did not resolve to a node");
    }
    return node;
}
exports.getAndAssertNodeAtPathExists = getAndAssertNodeAtPathExists;

},{"lodash/clone":"../node_modules/lodash/clone.js","lodash/get":"../node_modules/lodash/get.js"}],"../node_modules/react-mosaic-component/lib/MosaicRoot.js":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MosaicRoot = void 0;
var flatten_1 = __importDefault(require("lodash/flatten"));
var react_1 = __importDefault(require("react"));
var contextTypes_1 = require("./contextTypes");
var Split_1 = require("./Split");
var BoundingBox_1 = require("./util/BoundingBox");
var mosaicUtilities_1 = require("./util/mosaicUtilities");
var MosaicRoot = /** @class */ (function (_super) {
    __extends(MosaicRoot, _super);
    function MosaicRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onResize = function (percentage, path, suppressOnRelease) {
            _this.context.mosaicActions.updateTree([
                {
                    path: path,
                    spec: {
                        splitPercentage: {
                            $set: percentage,
                        },
                    },
                },
            ], suppressOnRelease);
        };
        return _this;
    }
    MosaicRoot.prototype.render = function () {
        var root = this.props.root;
        return react_1.default.createElement("div", { className: "mosaic-root" }, this.renderRecursively(root, BoundingBox_1.BoundingBox.empty(), []));
    };
    MosaicRoot.prototype.renderRecursively = function (node, boundingBox, path) {
        if (mosaicUtilities_1.isParent(node)) {
            var splitPercentage = node.splitPercentage == null ? 50 : node.splitPercentage;
            var _a = BoundingBox_1.BoundingBox.split(boundingBox, splitPercentage, node.direction), first = _a.first, second = _a.second;
            return flatten_1.default([
                this.renderRecursively(node.first, first, path.concat('first')),
                this.renderSplit(node.direction, boundingBox, splitPercentage, path),
                this.renderRecursively(node.second, second, path.concat('second')),
            ].filter(nonNullElement));
        }
        else {
            return (react_1.default.createElement("div", { key: node, className: "mosaic-tile", style: __assign({}, BoundingBox_1.BoundingBox.asStyles(boundingBox)) }, this.props.renderTile(node, path)));
        }
    };
    MosaicRoot.prototype.renderSplit = function (direction, boundingBox, splitPercentage, path) {
        var _this = this;
        var resize = this.props.resize;
        if (resize !== 'DISABLED') {
            return (react_1.default.createElement(Split_1.Split, __assign({ key: path.join(',') + 'splitter' }, resize, { boundingBox: boundingBox, splitPercentage: splitPercentage, direction: direction, onChange: function (percentage) { return _this.onResize(percentage, path, true); }, onRelease: function (percentage) { return _this.onResize(percentage, path, false); } })));
        }
        else {
            return null;
        }
    };
    MosaicRoot.contextType = contextTypes_1.MosaicContext;
    return MosaicRoot;
}(react_1.default.PureComponent));
exports.MosaicRoot = MosaicRoot;
function nonNullElement(x) {
    return x !== null;
}

},{"lodash/flatten":"../node_modules/lodash/flatten.js","react":"../node_modules/react/index.js","./contextTypes":"../node_modules/react-mosaic-component/lib/contextTypes.js","./Split":"../node_modules/react-mosaic-component/lib/Split.js","./util/BoundingBox":"../node_modules/react-mosaic-component/lib/util/BoundingBox.js","./util/mosaicUtilities":"../node_modules/react-mosaic-component/lib/util/mosaicUtilities.js"}],"../node_modules/react-mosaic-component/lib/util/OptionalBlueprint.js":[function(require,module,exports) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionalBlueprint = void 0;
var React = __importStar(require("react"));
var OptionalBlueprint;
(function (OptionalBlueprint) {
    var _a;
    var Classes;
    var IconNames;
    try {
        // Webpack is quieter about these errors
        // https://github.com/nomcopter/react-mosaic/issues/109
        require.resolve('@blueprintjs/core');
        require.resolve('@blueprintjs/icons');
        (_a = require('@blueprintjs/core'), Classes = _a.Classes, OptionalBlueprint.Icon = _a.Icon);
        (IconNames = require('@blueprintjs/icons').IconNames);
    }
    catch (_b) {
        OptionalBlueprint.Icon = function (_a) {
            var icon = _a.icon;
            return React.createElement("span", null, icon);
        };
    }
    function getClasses() {
        var names = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            names[_i] = arguments[_i];
        }
        if (Classes) {
            return names.map(function (name) { return Classes[name]; }).join(' ');
        }
        return '';
    }
    OptionalBlueprint.getClasses = getClasses;
    function getIconClass(iconName) {
        if (Classes && IconNames) {
            return Classes.iconClass(IconNames[iconName]);
        }
        return '';
    }
    OptionalBlueprint.getIconClass = getIconClass;
})(OptionalBlueprint = exports.OptionalBlueprint || (exports.OptionalBlueprint = {}));

},{"react":"../node_modules/react/index.js"}],"../node_modules/react-mosaic-component/lib/MosaicZeroState.js":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MosaicZeroState = void 0;
var classnames_1 = __importDefault(require("classnames"));
var noop_1 = __importDefault(require("lodash/noop"));
var react_1 = __importDefault(require("react"));
var contextTypes_1 = require("./contextTypes");
var OptionalBlueprint_1 = require("./util/OptionalBlueprint");
var MosaicZeroState = /** @class */ (function (_super) {
    __extends(MosaicZeroState, _super);
    function MosaicZeroState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.replace = function () {
            return Promise.resolve(_this.props.createNode())
                .then(function (node) { return _this.context.mosaicActions.replaceWith([], node); })
                .catch(noop_1.default);
        }; // Swallow rejections (i.e. on user cancel)
        return _this;
    }
    MosaicZeroState.prototype.render = function () {
        return (react_1.default.createElement("div", { className: classnames_1.default('mosaic-zero-state', OptionalBlueprint_1.OptionalBlueprint.getClasses('NON_IDEAL_STATE')) },
            react_1.default.createElement("div", { className: OptionalBlueprint_1.OptionalBlueprint.getClasses('NON_IDEAL_STATE_VISUAL') },
                react_1.default.createElement(OptionalBlueprint_1.OptionalBlueprint.Icon, { iconSize: 120, icon: "applications" })),
            react_1.default.createElement("h4", { className: OptionalBlueprint_1.OptionalBlueprint.getClasses('HEADING') }, "No Windows Present"),
            react_1.default.createElement("div", null, this.props.createNode && (react_1.default.createElement("button", { className: classnames_1.default(OptionalBlueprint_1.OptionalBlueprint.getClasses('BUTTON'), OptionalBlueprint_1.OptionalBlueprint.getIconClass('ADD')), onClick: this.replace }, "Add New Window")))));
    };
    MosaicZeroState.contextType = contextTypes_1.MosaicContext;
    return MosaicZeroState;
}(react_1.default.PureComponent));
exports.MosaicZeroState = MosaicZeroState;

},{"classnames":"../node_modules/classnames/index.js","lodash/noop":"../node_modules/lodash/noop.js","react":"../node_modules/react/index.js","./contextTypes":"../node_modules/react-mosaic-component/lib/contextTypes.js","./util/OptionalBlueprint":"../node_modules/react-mosaic-component/lib/util/OptionalBlueprint.js"}],"../node_modules/react-mosaic-component/lib/internalTypes.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MosaicDropTargetPosition = void 0;
exports.MosaicDropTargetPosition = {
    TOP: 'top',
    BOTTOM: 'bottom',
    LEFT: 'left',
    RIGHT: 'right',
};

},{}],"../node_modules/react-mosaic-component/lib/types.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MosaicDragType = void 0;
/**
 * Used by `react-dnd`
 * @type {{WINDOW: string}}
 */
exports.MosaicDragType = {
    WINDOW: 'MosaicWindow',
};

},{}],"../node_modules/react-mosaic-component/lib/MosaicDropTarget.js":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MosaicDropTarget = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var contextTypes_1 = require("./contextTypes");
var types_1 = require("./types");
var dropTarget = {
    drop: function (props, monitor, component) {
        if (component.context.mosaicId === (monitor.getItem() || {}).mosaicId) {
            return {
                path: props.path,
                position: props.position,
            };
        }
        else {
            return {};
        }
    },
};
var MosaicDropTargetClass = /** @class */ (function (_super) {
    __extends(MosaicDropTargetClass, _super);
    function MosaicDropTargetClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MosaicDropTargetClass.prototype.render = function () {
        var _a = this.props, position = _a.position, isOver = _a.isOver, connectDropTarget = _a.connectDropTarget, draggedMosaicId = _a.draggedMosaicId;
        return connectDropTarget(react_1.default.createElement("div", { className: classnames_1.default('drop-target', position, {
                'drop-target-hover': isOver && draggedMosaicId === this.context.mosaicId,
            }) }));
    };
    MosaicDropTargetClass.contextType = contextTypes_1.MosaicContext;
    return MosaicDropTargetClass;
}(react_1.default.PureComponent));
exports.MosaicDropTarget = react_dnd_1.DropTarget(types_1.MosaicDragType.WINDOW, dropTarget, function (connect, monitor) { return ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    draggedMosaicId: (monitor.getItem() || {}).mosaicId,
}); })(MosaicDropTargetClass);

},{"classnames":"../node_modules/classnames/index.js","react":"../node_modules/react/index.js","react-dnd":"../node_modules/react-dnd/dist/esm/index.js","./contextTypes":"../node_modules/react-mosaic-component/lib/contextTypes.js","./types":"../node_modules/react-mosaic-component/lib/types.js"}],"../node_modules/react-mosaic-component/lib/RootDropTargets.js":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootDropTargets = void 0;
var classnames_1 = __importDefault(require("classnames"));
var values_1 = __importDefault(require("lodash/values"));
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var internalTypes_1 = require("./internalTypes");
var MosaicDropTarget_1 = require("./MosaicDropTarget");
var types_1 = require("./types");
var RootDropTargetsClass = /** @class */ (function (_super) {
    __extends(RootDropTargetsClass, _super);
    function RootDropTargetsClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RootDropTargetsClass.prototype.render = function () {
        return (react_1.default.createElement("div", { className: classnames_1.default('drop-target-container', {
                '-dragging': this.props.isDragging,
            }) }, values_1.default(internalTypes_1.MosaicDropTargetPosition).map(function (position) { return (react_1.default.createElement(MosaicDropTarget_1.MosaicDropTarget, { position: position, path: [], key: position })); })));
    };
    return RootDropTargetsClass;
}(react_1.default.PureComponent));
var dropTarget = {};
exports.RootDropTargets = react_dnd_1.DropTarget(types_1.MosaicDragType.WINDOW, dropTarget, function (_connect, monitor) { return ({
    isDragging: monitor.getItem() !== null && monitor.getItemType() === types_1.MosaicDragType.WINDOW,
}); })(RootDropTargetsClass);

},{"classnames":"../node_modules/classnames/index.js","lodash/values":"../node_modules/lodash/values.js","react":"../node_modules/react/index.js","react-dnd":"../node_modules/react-dnd/dist/esm/index.js","./internalTypes":"../node_modules/react-mosaic-component/lib/internalTypes.js","./MosaicDropTarget":"../node_modules/react-mosaic-component/lib/MosaicDropTarget.js","./types":"../node_modules/react-mosaic-component/lib/types.js"}],"../node_modules/immutability-helper/index.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function stringifiable(obj) {
  // Safely stringify Object.create(null)
  /* istanbul ignore next */
  return typeof obj === 'object' && !('toString' in obj) ? Object.prototype.toString.call(obj).slice(8, -1) : obj;
}
var isProduction = typeof process === 'object' && "development" === 'production';
function invariant(condition, message) {
  if (!condition) {
    /* istanbul ignore next */
    if (isProduction) {
      throw new Error('Invariant failed');
    }
    throw new Error(message());
  }
}
exports.invariant = invariant;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;
var toString = Object.prototype.toString;
function type(obj) {
  return toString.call(obj).slice(8, -1);
}
var assign = Object.assign || /* istanbul ignore next */function (target, source) {
  getAllKeys(source).forEach(function (key) {
    if (hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  });
  return target;
};
var getAllKeys = typeof Object.getOwnPropertySymbols === 'function' ? function (obj) {
  return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj));
}
/* istanbul ignore next */ : function (obj) {
  return Object.keys(obj);
};
function copy(object) {
  return Array.isArray(object) ? assign(object.constructor(object.length), object) : type(object) === 'Map' ? new Map(object) : type(object) === 'Set' ? new Set(object) : object && typeof object === 'object' ? assign(Object.create(Object.getPrototypeOf(object)), object)
  /* istanbul ignore next */ : object;
}
var Context = /** @class */function () {
  function Context() {
    this.commands = assign({}, defaultCommands);
    this.update = this.update.bind(this);
    // Deprecated: update.extend, update.isEquals and update.newContext
    this.update.extend = this.extend = this.extend.bind(this);
    this.update.isEquals = function (x, y) {
      return x === y;
    };
    this.update.newContext = function () {
      return new Context().update;
    };
  }
  Object.defineProperty(Context.prototype, "isEquals", {
    get: function () {
      return this.update.isEquals;
    },
    set: function (value) {
      this.update.isEquals = value;
    },
    enumerable: true,
    configurable: true
  });
  Context.prototype.extend = function (directive, fn) {
    this.commands[directive] = fn;
  };
  Context.prototype.update = function (object, $spec) {
    var _this = this;
    var spec = typeof $spec === 'function' ? {
      $apply: $spec
    } : $spec;
    if (!(Array.isArray(object) && Array.isArray(spec))) {
      invariant(!Array.isArray(spec), function () {
        return "update(): You provided an invalid spec to update(). The spec may " + "not contain an array except as the value of $set, $push, $unshift, " + "$splice or any custom command allowing an array value.";
      });
    }
    invariant(typeof spec === 'object' && spec !== null, function () {
      return "update(): You provided an invalid spec to update(). The spec and " + "every included key path must be plain objects containing one of the " + ("following commands: " + Object.keys(_this.commands).join(', ') + ".");
    });
    var nextObject = object;
    getAllKeys(spec).forEach(function (key) {
      if (hasOwnProperty.call(_this.commands, key)) {
        var objectWasNextObject = object === nextObject;
        nextObject = _this.commands[key](spec[key], nextObject, spec, object);
        if (objectWasNextObject && _this.isEquals(nextObject, object)) {
          nextObject = object;
        }
      } else {
        var nextValueForKey = type(object) === 'Map' ? _this.update(object.get(key), spec[key]) : _this.update(object[key], spec[key]);
        var nextObjectValue = type(nextObject) === 'Map' ? nextObject.get(key) : nextObject[key];
        if (!_this.isEquals(nextValueForKey, nextObjectValue) || typeof nextValueForKey === 'undefined' && !hasOwnProperty.call(object, key)) {
          if (nextObject === object) {
            nextObject = copy(object);
          }
          if (type(nextObject) === 'Map') {
            nextObject.set(key, nextValueForKey);
          } else {
            nextObject[key] = nextValueForKey;
          }
        }
      }
    });
    return nextObject;
  };
  return Context;
}();
exports.Context = Context;
var defaultCommands = {
  $push: function (value, nextObject, spec) {
    invariantPushAndUnshift(nextObject, spec, '$push');
    return value.length ? nextObject.concat(value) : nextObject;
  },
  $unshift: function (value, nextObject, spec) {
    invariantPushAndUnshift(nextObject, spec, '$unshift');
    return value.length ? value.concat(nextObject) : nextObject;
  },
  $splice: function (value, nextObject, spec, originalObject) {
    invariantSplices(nextObject, spec);
    value.forEach(function (args) {
      invariantSplice(args);
      if (nextObject === originalObject && args.length) {
        nextObject = copy(originalObject);
      }
      splice.apply(nextObject, args);
    });
    return nextObject;
  },
  $set: function (value, _nextObject, spec) {
    invariantSet(spec);
    return value;
  },
  $toggle: function (targets, nextObject) {
    invariantSpecArray(targets, '$toggle');
    var nextObjectCopy = targets.length ? copy(nextObject) : nextObject;
    targets.forEach(function (target) {
      nextObjectCopy[target] = !nextObject[target];
    });
    return nextObjectCopy;
  },
  $unset: function (value, nextObject, _spec, originalObject) {
    invariantSpecArray(value, '$unset');
    value.forEach(function (key) {
      if (Object.hasOwnProperty.call(nextObject, key)) {
        if (nextObject === originalObject) {
          nextObject = copy(originalObject);
        }
        delete nextObject[key];
      }
    });
    return nextObject;
  },
  $add: function (values, nextObject, _spec, originalObject) {
    invariantMapOrSet(nextObject, '$add');
    invariantSpecArray(values, '$add');
    if (type(nextObject) === 'Map') {
      values.forEach(function (_a) {
        var key = _a[0],
          value = _a[1];
        if (nextObject === originalObject && nextObject.get(key) !== value) {
          nextObject = copy(originalObject);
        }
        nextObject.set(key, value);
      });
    } else {
      values.forEach(function (value) {
        if (nextObject === originalObject && !nextObject.has(value)) {
          nextObject = copy(originalObject);
        }
        nextObject.add(value);
      });
    }
    return nextObject;
  },
  $remove: function (value, nextObject, _spec, originalObject) {
    invariantMapOrSet(nextObject, '$remove');
    invariantSpecArray(value, '$remove');
    value.forEach(function (key) {
      if (nextObject === originalObject && nextObject.has(key)) {
        nextObject = copy(originalObject);
      }
      nextObject.delete(key);
    });
    return nextObject;
  },
  $merge: function (value, nextObject, _spec, originalObject) {
    invariantMerge(nextObject, value);
    getAllKeys(value).forEach(function (key) {
      if (value[key] !== nextObject[key]) {
        if (nextObject === originalObject) {
          nextObject = copy(originalObject);
        }
        nextObject[key] = value[key];
      }
    });
    return nextObject;
  },
  $apply: function (value, original) {
    invariantApply(value);
    return value(original);
  }
};
var defaultContext = new Context();
exports.isEquals = defaultContext.update.isEquals;
exports.extend = defaultContext.extend;
exports.default = defaultContext.update;
// @ts-ignore
exports.default.default = module.exports = assign(exports.default, exports);
// invariants
function invariantPushAndUnshift(value, spec, command) {
  invariant(Array.isArray(value), function () {
    return "update(): expected target of " + stringifiable(command) + " to be an array; got " + stringifiable(value) + ".";
  });
  invariantSpecArray(spec[command], command);
}
function invariantSpecArray(spec, command) {
  invariant(Array.isArray(spec), function () {
    return "update(): expected spec of " + stringifiable(command) + " to be an array; got " + stringifiable(spec) + ". " + "Did you forget to wrap your parameter in an array?";
  });
}
function invariantSplices(value, spec) {
  invariant(Array.isArray(value), function () {
    return "Expected $splice target to be an array; got " + stringifiable(value);
  });
  invariantSplice(spec.$splice);
}
function invariantSplice(value) {
  invariant(Array.isArray(value), function () {
    return "update(): expected spec of $splice to be an array of arrays; got " + stringifiable(value) + ". " + "Did you forget to wrap your parameters in an array?";
  });
}
function invariantApply(fn) {
  invariant(typeof fn === 'function', function () {
    return "update(): expected spec of $apply to be a function; got " + stringifiable(fn) + ".";
  });
}
function invariantSet(spec) {
  invariant(Object.keys(spec).length === 1, function () {
    return "Cannot have more than one key in an object with $set";
  });
}
function invariantMerge(target, specValue) {
  invariant(specValue && typeof specValue === 'object', function () {
    return "update(): $merge expects a spec of type 'object'; got " + stringifiable(specValue);
  });
  invariant(target && typeof target === 'object', function () {
    return "update(): $merge expects a target of type 'object'; got " + stringifiable(target);
  });
}
function invariantMapOrSet(target, command) {
  var typeOfTarget = type(target);
  invariant(typeOfTarget === 'Map' || typeOfTarget === 'Set', function () {
    return "update(): " + stringifiable(command) + " expects a target of type Set or Map; got " + stringifiable(typeOfTarget);
  });
}
},{"process":"../node_modules/process/browser.js"}],"../node_modules/lodash/drop.js":[function(require,module,exports) {
var baseSlice = require('./_baseSlice'),
    toInteger = require('./toInteger');

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.drop([1, 2, 3]);
 * // => [2, 3]
 *
 * _.drop([1, 2, 3], 2);
 * // => [3]
 *
 * _.drop([1, 2, 3], 5);
 * // => []
 *
 * _.drop([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function drop(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, n < 0 ? 0 : n, length);
}

module.exports = drop;

},{"./_baseSlice":"../node_modules/lodash/_baseSlice.js","./toInteger":"../node_modules/lodash/toInteger.js"}],"../node_modules/lodash/dropRight.js":[function(require,module,exports) {
var baseSlice = require('./_baseSlice'),
    toInteger = require('./toInteger');

/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.dropRight([1, 2, 3]);
 * // => [1, 2]
 *
 * _.dropRight([1, 2, 3], 2);
 * // => [1]
 *
 * _.dropRight([1, 2, 3], 5);
 * // => []
 *
 * _.dropRight([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function dropRight(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  n = length - n;
  return baseSlice(array, 0, n < 0 ? 0 : n);
}

module.exports = dropRight;

},{"./_baseSlice":"../node_modules/lodash/_baseSlice.js","./toInteger":"../node_modules/lodash/toInteger.js"}],"../node_modules/lodash/isEqual.js":[function(require,module,exports) {
var baseIsEqual = require('./_baseIsEqual');

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;

},{"./_baseIsEqual":"../node_modules/lodash/_baseIsEqual.js"}],"../node_modules/lodash/take.js":[function(require,module,exports) {
var baseSlice = require('./_baseSlice'),
    toInteger = require('./toInteger');

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.take([1, 2, 3]);
 * // => [1]
 *
 * _.take([1, 2, 3], 2);
 * // => [1, 2]
 *
 * _.take([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.take([1, 2, 3], 0);
 * // => []
 */
function take(array, n, guard) {
  if (!(array && array.length)) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, 0, n < 0 ? 0 : n);
}

module.exports = take;

},{"./_baseSlice":"../node_modules/lodash/_baseSlice.js","./toInteger":"../node_modules/lodash/toInteger.js"}],"../node_modules/react-mosaic-component/lib/util/mosaicUpdates.js":[function(require,module,exports) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExpandUpdate = exports.createHideUpdate = exports.createDragToUpdates = exports.createRemoveUpdate = exports.updateTree = exports.buildSpecFromUpdate = void 0;
var immutability_helper_1 = __importDefault(require("immutability-helper"));
var drop_1 = __importDefault(require("lodash/drop"));
var dropRight_1 = __importDefault(require("lodash/dropRight"));
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var last_1 = __importDefault(require("lodash/last"));
var set_1 = __importDefault(require("lodash/set"));
var take_1 = __importDefault(require("lodash/take"));
var internalTypes_1 = require("../internalTypes");
var mosaicUtilities_1 = require("./mosaicUtilities");
/**
 * Used to prepare `update` for `immutability-helper`
 * @param mosaicUpdate
 * @returns {any}
 */
function buildSpecFromUpdate(mosaicUpdate) {
    if (mosaicUpdate.path.length > 0) {
        return set_1.default({}, mosaicUpdate.path, mosaicUpdate.spec);
    }
    else {
        return mosaicUpdate.spec;
    }
}
exports.buildSpecFromUpdate = buildSpecFromUpdate;
/**
 * Applies `updates` to `root`
 * @param root
 * @param updates
 * @returns {MosaicNode<T>}
 */
function updateTree(root, updates) {
    var currentNode = root;
    updates.forEach(function (mUpdate) {
        currentNode = immutability_helper_1.default(currentNode, buildSpecFromUpdate(mUpdate));
    });
    return currentNode;
}
exports.updateTree = updateTree;
/**
 * Creates a `MosaicUpdate<T>` to remove the node at `path` from `root`
 * @param root
 * @param path
 * @returns {{path: T[], spec: {$set: MosaicNode<T>}}}
 */
function createRemoveUpdate(root, path) {
    var parentPath = dropRight_1.default(path);
    var nodeToRemove = last_1.default(path);
    var siblingPath = parentPath.concat(mosaicUtilities_1.getOtherBranch(nodeToRemove));
    var sibling = mosaicUtilities_1.getAndAssertNodeAtPathExists(root, siblingPath);
    return {
        path: parentPath,
        spec: {
            $set: sibling,
        },
    };
}
exports.createRemoveUpdate = createRemoveUpdate;
function isPathPrefixEqual(a, b, length) {
    return isEqual_1.default(take_1.default(a, length), take_1.default(b, length));
}
/**
 * Creates a `MosaicUpdate<T>` to split the _leaf_ at `destinationPath` into a node of it and the node from `sourcePath`
 * placing the node from `sourcePath` in `position`.
 * @param root
 * @param sourcePath
 * @param destinationPath
 * @param position
 * @returns {(MosaicUpdate<T>|{path: MosaicPath, spec: {$set: {first: MosaicNode<T>, second: MosaicNode<T>, direction: MosaicDirection}}})[]}
 */
function createDragToUpdates(root, sourcePath, destinationPath, position) {
    var destinationNode = mosaicUtilities_1.getAndAssertNodeAtPathExists(root, destinationPath);
    var updates = [];
    var destinationIsParentOfSource = isPathPrefixEqual(sourcePath, destinationPath, destinationPath.length);
    if (destinationIsParentOfSource) {
        // Must explicitly remove source from the destination node
        destinationNode = updateTree(destinationNode, [
            createRemoveUpdate(destinationNode, drop_1.default(sourcePath, destinationPath.length)),
        ]);
    }
    else {
        // Can remove source normally
        updates.push(createRemoveUpdate(root, sourcePath));
        // Have to drop in the correct destination after the source has been removed
        var removedNodeParentIsInPath = isPathPrefixEqual(sourcePath, destinationPath, sourcePath.length - 1);
        if (removedNodeParentIsInPath) {
            destinationPath.splice(sourcePath.length - 1, 1);
        }
    }
    var sourceNode = mosaicUtilities_1.getAndAssertNodeAtPathExists(root, sourcePath);
    var first;
    var second;
    if (position === internalTypes_1.MosaicDropTargetPosition.LEFT || position === internalTypes_1.MosaicDropTargetPosition.TOP) {
        first = sourceNode;
        second = destinationNode;
    }
    else {
        first = destinationNode;
        second = sourceNode;
    }
    var direction = 'column';
    if (position === internalTypes_1.MosaicDropTargetPosition.LEFT || position === internalTypes_1.MosaicDropTargetPosition.RIGHT) {
        direction = 'row';
    }
    updates.push({
        path: destinationPath,
        spec: {
            $set: { first: first, second: second, direction: direction },
        },
    });
    return updates;
}
exports.createDragToUpdates = createDragToUpdates;
/**
 * Sets the splitPercentage to hide the node at `path`
 * @param path
 * @returns {{path: T[], spec: {splitPercentage: {$set: number}}}}
 */
function createHideUpdate(path) {
    var targetPath = dropRight_1.default(path);
    var thisBranch = last_1.default(path);
    var splitPercentage;
    if (thisBranch === 'first') {
        splitPercentage = 0;
    }
    else {
        splitPercentage = 100;
    }
    return {
        path: targetPath,
        spec: {
            splitPercentage: {
                $set: splitPercentage,
            },
        },
    };
}
exports.createHideUpdate = createHideUpdate;
/**
 * Sets the splitPercentage of node at `path` and all of its parents to `percentage` in order to expand it
 * @param path
 * @param percentage
 * @returns {{spec: MosaicUpdateSpec<T>, path: Array}}
 */
function createExpandUpdate(path, percentage) {
    var _a;
    var spec = {};
    for (var i = path.length - 1; i >= 0; i--) {
        var branch = path[i];
        var splitPercentage = branch === 'first' ? percentage : 100 - percentage;
        spec = (_a = {
                splitPercentage: {
                    $set: splitPercentage,
                }
            },
            _a[branch] = spec,
            _a);
    }
    return {
        spec: spec,
        path: [],
    };
}
exports.createExpandUpdate = createExpandUpdate;

},{"immutability-helper":"../node_modules/immutability-helper/index.js","lodash/drop":"../node_modules/lodash/drop.js","lodash/dropRight":"../node_modules/lodash/dropRight.js","lodash/isEqual":"../node_modules/lodash/isEqual.js","lodash/last":"../node_modules/lodash/last.js","lodash/set":"../node_modules/lodash/set.js","lodash/take":"../node_modules/lodash/take.js","../internalTypes":"../node_modules/react-mosaic-component/lib/internalTypes.js","./mosaicUtilities":"../node_modules/react-mosaic-component/lib/util/mosaicUtilities.js"}],"../node_modules/react-mosaic-component/lib/Mosaic.js":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mosaic = exports.MosaicWithoutDragDropContext = void 0;
var classnames_1 = __importDefault(require("classnames"));
var countBy_1 = __importDefault(require("lodash/countBy"));
var keys_1 = __importDefault(require("lodash/keys"));
var pickBy_1 = __importDefault(require("lodash/pickBy"));
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var react_dnd_multi_backend_1 = __importDefault(require("react-dnd-multi-backend"));
var HTML5toTouch_1 = __importDefault(require("react-dnd-multi-backend/dist/cjs/HTML5toTouch"));
var uuid_1 = require("uuid");
var contextTypes_1 = require("./contextTypes");
var MosaicRoot_1 = require("./MosaicRoot");
var MosaicZeroState_1 = require("./MosaicZeroState");
var RootDropTargets_1 = require("./RootDropTargets");
var mosaicUpdates_1 = require("./util/mosaicUpdates");
var mosaicUtilities_1 = require("./util/mosaicUtilities");
var DEFAULT_EXPAND_PERCENTAGE = 70;
function isUncontrolled(props) {
  return props.initialValue != null;
}
var MosaicWithoutDragDropContext = /** @class */function (_super) {
  __extends(MosaicWithoutDragDropContext, _super);
  function MosaicWithoutDragDropContext() {
    var _a;
    var _this = _super.apply(this, arguments) || this;
    _this.state = {
      currentNode: null,
      lastInitialValue: null,
      mosaicId: (_a = _this.props.mosaicId) !== null && _a !== void 0 ? _a : uuid_1.v4()
    };
    _this.updateRoot = function (updates, suppressOnRelease) {
      if (suppressOnRelease === void 0) {
        suppressOnRelease = false;
      }
      var currentNode = _this.getRoot() || {};
      _this.replaceRoot(mosaicUpdates_1.updateTree(currentNode, updates), suppressOnRelease);
    };
    _this.replaceRoot = function (currentNode, suppressOnRelease) {
      if (suppressOnRelease === void 0) {
        suppressOnRelease = false;
      }
      _this.props.onChange(currentNode);
      if (!suppressOnRelease && _this.props.onRelease) {
        _this.props.onRelease(currentNode);
      }
      if (isUncontrolled(_this.props)) {
        _this.setState({
          currentNode: currentNode
        });
      }
    };
    _this.actions = {
      updateTree: _this.updateRoot,
      remove: function (path) {
        if (path.length === 0) {
          _this.replaceRoot(null);
        } else {
          _this.updateRoot([mosaicUpdates_1.createRemoveUpdate(_this.getRoot(), path)]);
        }
      },
      expand: function (path, percentage) {
        if (percentage === void 0) {
          percentage = DEFAULT_EXPAND_PERCENTAGE;
        }
        return _this.updateRoot([mosaicUpdates_1.createExpandUpdate(path, percentage)]);
      },
      getRoot: function () {
        return _this.getRoot();
      },
      hide: function (path) {
        return _this.updateRoot([mosaicUpdates_1.createHideUpdate(path)]);
      },
      replaceWith: function (path, newNode) {
        return _this.updateRoot([{
          path: path,
          spec: {
            $set: newNode
          }
        }]);
      }
    };
    _this.childContext = {
      mosaicActions: _this.actions,
      mosaicId: _this.state.mosaicId
    };
    return _this;
  }
  MosaicWithoutDragDropContext.getDerivedStateFromProps = function (nextProps, prevState) {
    if (nextProps.mosaicId && prevState.mosaicId !== nextProps.mosaicId && "development" !== 'production') {
      throw new Error('Mosaic does not support updating the mosaicId after instantiation');
    }
    if (isUncontrolled(nextProps) && nextProps.initialValue !== prevState.lastInitialValue) {
      return {
        lastInitialValue: nextProps.initialValue,
        currentNode: nextProps.initialValue
      };
    }
    return null;
  };
  MosaicWithoutDragDropContext.prototype.render = function () {
    var className = this.props.className;
    return react_1.default.createElement(contextTypes_1.MosaicContext.Provider, {
      value: this.childContext
    }, react_1.default.createElement("div", {
      className: classnames_1.default(className, 'mosaic mosaic-drop-target')
    }, this.renderTree(), react_1.default.createElement(RootDropTargets_1.RootDropTargets, null)));
  };
  MosaicWithoutDragDropContext.prototype.getRoot = function () {
    if (isUncontrolled(this.props)) {
      return this.state.currentNode;
    } else {
      return this.props.value;
    }
  };
  MosaicWithoutDragDropContext.prototype.renderTree = function () {
    var root = this.getRoot();
    this.validateTree(root);
    if (root === null || root === undefined) {
      return this.props.zeroStateView;
    } else {
      var _a = this.props,
        renderTile = _a.renderTile,
        resize = _a.resize;
      return react_1.default.createElement(MosaicRoot_1.MosaicRoot, {
        root: root,
        renderTile: renderTile,
        resize: resize
      });
    }
  };
  MosaicWithoutDragDropContext.prototype.validateTree = function (node) {
    if ("development" !== 'production') {
      var duplicates = keys_1.default(pickBy_1.default(countBy_1.default(mosaicUtilities_1.getLeaves(node)), function (n) {
        return n > 1;
      }));
      if (duplicates.length > 0) {
        throw new Error("Duplicate IDs [" + duplicates.join(', ') + "] detected. Mosaic does not support leaves with the same ID");
      }
    }
  };
  MosaicWithoutDragDropContext.defaultProps = {
    onChange: function () {
      return void 0;
    },
    zeroStateView: react_1.default.createElement(MosaicZeroState_1.MosaicZeroState, null),
    className: 'mosaic-blueprint-theme'
  };
  return MosaicWithoutDragDropContext;
}(react_1.default.PureComponent);
exports.MosaicWithoutDragDropContext = MosaicWithoutDragDropContext;
var Mosaic = /** @class */function (_super) {
  __extends(Mosaic, _super);
  function Mosaic() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Mosaic.prototype.render = function () {
    return react_1.default.createElement(react_dnd_1.DndProvider, {
      backend: react_dnd_multi_backend_1.default,
      options: HTML5toTouch_1.default
    }, react_1.default.createElement(MosaicWithoutDragDropContext, __assign({}, this.props)));
  };
  return Mosaic;
}(react_1.default.PureComponent);
exports.Mosaic = Mosaic;
},{"classnames":"../node_modules/classnames/index.js","lodash/countBy":"../node_modules/lodash/countBy.js","lodash/keys":"../node_modules/lodash/keys.js","lodash/pickBy":"../node_modules/lodash/pickBy.js","react":"../node_modules/react/index.js","react-dnd":"../node_modules/react-dnd/dist/esm/index.js","react-dnd-multi-backend":"../node_modules/react-dnd-multi-backend/dist/esm/index.js","react-dnd-multi-backend/dist/cjs/HTML5toTouch":"../node_modules/react-dnd-multi-backend/dist/cjs/HTML5toTouch.js","uuid":"../node_modules/react-mosaic-component/node_modules/uuid/index.js","./contextTypes":"../node_modules/react-mosaic-component/lib/contextTypes.js","./MosaicRoot":"../node_modules/react-mosaic-component/lib/MosaicRoot.js","./MosaicZeroState":"../node_modules/react-mosaic-component/lib/MosaicZeroState.js","./RootDropTargets":"../node_modules/react-mosaic-component/lib/RootDropTargets.js","./util/mosaicUpdates":"../node_modules/react-mosaic-component/lib/util/mosaicUpdates.js","./util/mosaicUtilities":"../node_modules/react-mosaic-component/lib/util/mosaicUtilities.js"}],"../node_modules/lodash/_baseDelay.js":[function(require,module,exports) {
/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number|Object} Returns the timer id or timeout object.
 */
function baseDelay(func, wait, args) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return setTimeout(function() { func.apply(undefined, args); }, wait);
}

module.exports = baseDelay;

},{}],"../node_modules/lodash/defer.js":[function(require,module,exports) {
var baseDelay = require('./_baseDelay'),
    baseRest = require('./_baseRest');

/**
 * Defers invoking the `func` until the current call stack has cleared. Any
 * additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to defer.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.defer(function(text) {
 *   console.log(text);
 * }, 'deferred');
 * // => Logs 'deferred' after one millisecond.
 */
var defer = baseRest(function(func, args) {
  return baseDelay(func, 1, args);
});

module.exports = defer;

},{"./_baseDelay":"../node_modules/lodash/_baseDelay.js","./_baseRest":"../node_modules/lodash/_baseRest.js"}],"../node_modules/react-mosaic-component/lib/buttons/MosaicButton.js":[function(require,module,exports) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultToolbarButton = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var OptionalBlueprint_1 = require("../util/OptionalBlueprint");
function createDefaultToolbarButton(title, className, onClick, text) {
    return (react_1.default.createElement("button", { title: title, onClick: onClick, className: classnames_1.default('mosaic-default-control', OptionalBlueprint_1.OptionalBlueprint.getClasses('BUTTON', 'MINIMAL'), className) }, text && react_1.default.createElement("span", { className: "control-text" }, text)));
}
exports.createDefaultToolbarButton = createDefaultToolbarButton;

},{"classnames":"../node_modules/classnames/index.js","react":"../node_modules/react/index.js","../util/OptionalBlueprint":"../node_modules/react-mosaic-component/lib/util/OptionalBlueprint.js"}],"../node_modules/react-mosaic-component/lib/buttons/ExpandButton.js":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpandButton = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var contextTypes_1 = require("../contextTypes");
var OptionalBlueprint_1 = require("../util/OptionalBlueprint");
var MosaicButton_1 = require("./MosaicButton");
var ExpandButton = /** @class */ (function (_super) {
    __extends(ExpandButton, _super);
    function ExpandButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpandButton.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(contextTypes_1.MosaicContext.Consumer, null, function (_a) {
            var mosaicActions = _a.mosaicActions;
            return MosaicButton_1.createDefaultToolbarButton('Expand', classnames_1.default('expand-button', OptionalBlueprint_1.OptionalBlueprint.getIconClass('MAXIMIZE')), _this.createExpand(mosaicActions));
        }));
    };
    ExpandButton.prototype.createExpand = function (mosaicActions) {
        var _this = this;
        return function () {
            mosaicActions.expand(_this.context.mosaicWindowActions.getPath());
            if (_this.props.onClick) {
                _this.props.onClick();
            }
        };
    };
    ExpandButton.contextType = contextTypes_1.MosaicWindowContext;
    return ExpandButton;
}(react_1.default.PureComponent));
exports.ExpandButton = ExpandButton;

},{"classnames":"../node_modules/classnames/index.js","react":"../node_modules/react/index.js","../contextTypes":"../node_modules/react-mosaic-component/lib/contextTypes.js","../util/OptionalBlueprint":"../node_modules/react-mosaic-component/lib/util/OptionalBlueprint.js","./MosaicButton":"../node_modules/react-mosaic-component/lib/buttons/MosaicButton.js"}],"../node_modules/react-mosaic-component/lib/buttons/RemoveButton.js":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveButton = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var contextTypes_1 = require("../contextTypes");
var OptionalBlueprint_1 = require("../util/OptionalBlueprint");
var MosaicButton_1 = require("./MosaicButton");
var RemoveButton = /** @class */ (function (_super) {
    __extends(RemoveButton, _super);
    function RemoveButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RemoveButton.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(contextTypes_1.MosaicContext.Consumer, null, function (_a) {
            var mosaicActions = _a.mosaicActions;
            return MosaicButton_1.createDefaultToolbarButton('Close Window', classnames_1.default('close-button', OptionalBlueprint_1.OptionalBlueprint.getIconClass('CROSS')), _this.createRemove(mosaicActions));
        }));
    };
    RemoveButton.prototype.createRemove = function (mosaicActions) {
        var _this = this;
        return function () {
            mosaicActions.remove(_this.context.mosaicWindowActions.getPath());
            if (_this.props.onClick) {
                _this.props.onClick();
            }
        };
    };
    RemoveButton.contextType = contextTypes_1.MosaicWindowContext;
    return RemoveButton;
}(react_1.default.PureComponent));
exports.RemoveButton = RemoveButton;

},{"classnames":"../node_modules/classnames/index.js","react":"../node_modules/react/index.js","../contextTypes":"../node_modules/react-mosaic-component/lib/contextTypes.js","../util/OptionalBlueprint":"../node_modules/react-mosaic-component/lib/util/OptionalBlueprint.js","./MosaicButton":"../node_modules/react-mosaic-component/lib/buttons/MosaicButton.js"}],"../node_modules/react-mosaic-component/lib/buttons/ReplaceButton.js":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceButton = void 0;
var classnames_1 = __importDefault(require("classnames"));
var noop_1 = __importDefault(require("lodash/noop"));
var react_1 = __importDefault(require("react"));
var contextTypes_1 = require("../contextTypes");
var OptionalBlueprint_1 = require("../util/OptionalBlueprint");
var MosaicButton_1 = require("./MosaicButton");
var ReplaceButton = /** @class */ (function (_super) {
    __extends(ReplaceButton, _super);
    function ReplaceButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.replace = function () {
            _this.context.mosaicWindowActions
                .replaceWithNew()
                .then(function () {
                if (_this.props.onClick) {
                    _this.props.onClick();
                }
            })
                .catch(noop_1.default); // Swallow rejections (i.e. on user cancel)
        };
        return _this;
    }
    ReplaceButton.prototype.render = function () {
        return MosaicButton_1.createDefaultToolbarButton('Replace Window', classnames_1.default('replace-button', OptionalBlueprint_1.OptionalBlueprint.getIconClass('EXCHANGE')), this.replace);
    };
    ReplaceButton.contextType = contextTypes_1.MosaicWindowContext;
    return ReplaceButton;
}(react_1.default.PureComponent));
exports.ReplaceButton = ReplaceButton;

},{"classnames":"../node_modules/classnames/index.js","lodash/noop":"../node_modules/lodash/noop.js","react":"../node_modules/react/index.js","../contextTypes":"../node_modules/react-mosaic-component/lib/contextTypes.js","../util/OptionalBlueprint":"../node_modules/react-mosaic-component/lib/util/OptionalBlueprint.js","./MosaicButton":"../node_modules/react-mosaic-component/lib/buttons/MosaicButton.js"}],"../node_modules/react-mosaic-component/lib/buttons/SplitButton.js":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitButton = void 0;
var classnames_1 = __importDefault(require("classnames"));
var noop_1 = __importDefault(require("lodash/noop"));
var react_1 = __importDefault(require("react"));
var contextTypes_1 = require("../contextTypes");
var OptionalBlueprint_1 = require("../util/OptionalBlueprint");
var MosaicButton_1 = require("./MosaicButton");
var SplitButton = /** @class */ (function (_super) {
    __extends(SplitButton, _super);
    function SplitButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.split = function () {
            _this.context.mosaicWindowActions
                .split()
                .then(function () {
                if (_this.props.onClick) {
                    _this.props.onClick();
                }
            })
                .catch(noop_1.default); // Swallow rejections (i.e. on user cancel)
        };
        return _this;
    }
    SplitButton.prototype.render = function () {
        return MosaicButton_1.createDefaultToolbarButton('Split Window', classnames_1.default('split-button', OptionalBlueprint_1.OptionalBlueprint.getIconClass('ADD_COLUMN_RIGHT')), this.split);
    };
    SplitButton.contextType = contextTypes_1.MosaicWindowContext;
    return SplitButton;
}(react_1.default.PureComponent));
exports.SplitButton = SplitButton;

},{"classnames":"../node_modules/classnames/index.js","lodash/noop":"../node_modules/lodash/noop.js","react":"../node_modules/react/index.js","../contextTypes":"../node_modules/react-mosaic-component/lib/contextTypes.js","../util/OptionalBlueprint":"../node_modules/react-mosaic-component/lib/util/OptionalBlueprint.js","./MosaicButton":"../node_modules/react-mosaic-component/lib/buttons/MosaicButton.js"}],"../node_modules/react-mosaic-component/lib/buttons/defaultToolbarControls.js":[function(require,module,exports) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CONTROLS_WITHOUT_CREATION = exports.DEFAULT_CONTROLS_WITH_CREATION = void 0;
var react_1 = __importDefault(require("react"));
var ExpandButton_1 = require("./ExpandButton");
var RemoveButton_1 = require("./RemoveButton");
var ReplaceButton_1 = require("./ReplaceButton");
var SplitButton_1 = require("./SplitButton");
exports.DEFAULT_CONTROLS_WITH_CREATION = react_1.default.Children.toArray([
    react_1.default.createElement(ReplaceButton_1.ReplaceButton, null),
    react_1.default.createElement(SplitButton_1.SplitButton, null),
    react_1.default.createElement(ExpandButton_1.ExpandButton, null),
    react_1.default.createElement(RemoveButton_1.RemoveButton, null),
]);
exports.DEFAULT_CONTROLS_WITHOUT_CREATION = react_1.default.Children.toArray([react_1.default.createElement(ExpandButton_1.ExpandButton, null), react_1.default.createElement(RemoveButton_1.RemoveButton, null)]);

},{"react":"../node_modules/react/index.js","./ExpandButton":"../node_modules/react-mosaic-component/lib/buttons/ExpandButton.js","./RemoveButton":"../node_modules/react-mosaic-component/lib/buttons/RemoveButton.js","./ReplaceButton":"../node_modules/react-mosaic-component/lib/buttons/ReplaceButton.js","./SplitButton":"../node_modules/react-mosaic-component/lib/buttons/SplitButton.js"}],"../node_modules/react-mosaic-component/lib/buttons/Separator.js":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Separator = void 0;
var react_1 = __importDefault(require("react"));
var Separator = /** @class */ (function (_super) {
    __extends(Separator, _super);
    function Separator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Separator.prototype.render = function () {
        return react_1.default.createElement("div", { className: "separator" });
    };
    return Separator;
}(react_1.default.PureComponent));
exports.Separator = Separator;

},{"react":"../node_modules/react/index.js"}],"../node_modules/react-mosaic-component/lib/MosaicWindow.js":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MosaicWindow = exports.SourceDropConnectedInternalMosaicWindow = exports.SourceConnectedInternalMosaicWindow = exports.InternalMosaicWindow = void 0;
var classnames_1 = __importDefault(require("classnames"));
var defer_1 = __importDefault(require("lodash/defer"));
var dropRight_1 = __importDefault(require("lodash/dropRight"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var values_1 = __importDefault(require("lodash/values"));
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var defaultToolbarControls_1 = require("./buttons/defaultToolbarControls");
var Separator_1 = require("./buttons/Separator");
var contextTypes_1 = require("./contextTypes");
var internalTypes_1 = require("./internalTypes");
var MosaicDropTarget_1 = require("./MosaicDropTarget");
var types_1 = require("./types");
var mosaicUpdates_1 = require("./util/mosaicUpdates");
var mosaicUtilities_1 = require("./util/mosaicUtilities");
var OptionalBlueprint_1 = require("./util/OptionalBlueprint");
var InternalMosaicWindow = /** @class */ (function (_super) {
    __extends(InternalMosaicWindow, _super);
    function InternalMosaicWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            additionalControlsOpen: false,
        };
        _this.rootElement = null;
        _this.renderDropTarget = function (position) {
            var path = _this.props.path;
            return react_1.default.createElement(MosaicDropTarget_1.MosaicDropTarget, { position: position, path: path, key: position });
        };
        _this.split = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.checkCreateNode();
            var _a = _this.props, createNode = _a.createNode, path = _a.path;
            var mosaicActions = _this.context.mosaicActions;
            var root = mosaicActions.getRoot();
            var direction = _this.rootElement.offsetWidth > _this.rootElement.offsetHeight ? 'row' : 'column';
            return Promise.resolve(createNode.apply(void 0, args)).then(function (second) {
                return mosaicActions.replaceWith(path, {
                    direction: direction,
                    second: second,
                    first: mosaicUtilities_1.getAndAssertNodeAtPathExists(root, path),
                });
            });
        };
        _this.swap = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.checkCreateNode();
            var mosaicActions = _this.context.mosaicActions;
            var _a = _this.props, createNode = _a.createNode, path = _a.path;
            return Promise.resolve(createNode.apply(void 0, args)).then(function (node) { return mosaicActions.replaceWith(path, node); });
        };
        _this.setAdditionalControlsOpen = function (additionalControlsOpen) {
            _this.setState({ additionalControlsOpen: additionalControlsOpen });
        };
        _this.getPath = function () { return _this.props.path; };
        _this.connectDragSource = function (connectedElements) {
            var connectDragSource = _this.props.connectDragSource;
            return connectDragSource(connectedElements);
        };
        _this.childContext = {
            mosaicWindowActions: {
                split: _this.split,
                replaceWithNew: _this.swap,
                setAdditionalControlsOpen: _this.setAdditionalControlsOpen,
                getPath: _this.getPath,
                connectDragSource: _this.connectDragSource,
            },
        };
        return _this;
    }
    InternalMosaicWindow.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, isOver = _a.isOver, renderPreview = _a.renderPreview, additionalControls = _a.additionalControls, connectDropTarget = _a.connectDropTarget, connectDragPreview = _a.connectDragPreview, draggedMosaicId = _a.draggedMosaicId;
        return (react_1.default.createElement(contextTypes_1.MosaicWindowContext.Provider, { value: this.childContext }, connectDropTarget(react_1.default.createElement("div", { className: classnames_1.default('mosaic-window mosaic-drop-target', className, {
                'drop-target-hover': isOver && draggedMosaicId === this.context.mosaicId,
                'additional-controls-open': this.state.additionalControlsOpen,
            }), ref: function (element) { return (_this.rootElement = element); } },
            this.renderToolbar(),
            react_1.default.createElement("div", { className: "mosaic-window-body" }, this.props.children),
            react_1.default.createElement("div", { className: "mosaic-window-body-overlay", onClick: function () { return _this.setAdditionalControlsOpen(false); } }),
            react_1.default.createElement("div", { className: "mosaic-window-additional-actions-bar" }, additionalControls),
            connectDragPreview(renderPreview(this.props)),
            react_1.default.createElement("div", { className: "drop-target-container" }, values_1.default(internalTypes_1.MosaicDropTargetPosition).map(this.renderDropTarget))))));
    };
    InternalMosaicWindow.prototype.getToolbarControls = function () {
        var _a = this.props, toolbarControls = _a.toolbarControls, createNode = _a.createNode;
        if (toolbarControls) {
            return toolbarControls;
        }
        else if (createNode) {
            return defaultToolbarControls_1.DEFAULT_CONTROLS_WITH_CREATION;
        }
        else {
            return defaultToolbarControls_1.DEFAULT_CONTROLS_WITHOUT_CREATION;
        }
    };
    InternalMosaicWindow.prototype.renderToolbar = function () {
        var _a;
        var _this = this;
        var _b = this.props, title = _b.title, draggable = _b.draggable, additionalControls = _b.additionalControls, additionalControlButtonText = _b.additionalControlButtonText, path = _b.path, renderToolbar = _b.renderToolbar;
        var additionalControlsOpen = this.state.additionalControlsOpen;
        var toolbarControls = this.getToolbarControls();
        var draggableAndNotRoot = draggable && path.length > 0;
        var connectIfDraggable = draggableAndNotRoot ? this.props.connectDragSource : function (el) { return el; };
        if (renderToolbar) {
            var connectedToolbar = connectIfDraggable(renderToolbar(this.props, draggable));
            return (react_1.default.createElement("div", { className: classnames_1.default('mosaic-window-toolbar', { draggable: draggableAndNotRoot }) }, connectedToolbar));
        }
        var titleDiv = connectIfDraggable(react_1.default.createElement("div", { title: title, className: "mosaic-window-title" }, title));
        var hasAdditionalControls = !isEmpty_1.default(additionalControls);
        return (react_1.default.createElement("div", { className: classnames_1.default('mosaic-window-toolbar', { draggable: draggableAndNotRoot }) },
            titleDiv,
            react_1.default.createElement("div", { className: classnames_1.default('mosaic-window-controls', OptionalBlueprint_1.OptionalBlueprint.getClasses('BUTTON_GROUP')) },
                hasAdditionalControls && (react_1.default.createElement("button", { onClick: function () { return _this.setAdditionalControlsOpen(!additionalControlsOpen); }, className: classnames_1.default(OptionalBlueprint_1.OptionalBlueprint.getClasses('BUTTON', 'MINIMAL'), OptionalBlueprint_1.OptionalBlueprint.getIconClass('MORE'), (_a = {},
                        _a[OptionalBlueprint_1.OptionalBlueprint.getClasses('ACTIVE')] = additionalControlsOpen,
                        _a)) },
                    react_1.default.createElement("span", { className: "control-text" }, additionalControlButtonText))),
                hasAdditionalControls && react_1.default.createElement(Separator_1.Separator, null),
                toolbarControls)));
    };
    InternalMosaicWindow.prototype.checkCreateNode = function () {
        if (this.props.createNode == null) {
            throw new Error('Operation invalid unless `createNode` is defined');
        }
    };
    InternalMosaicWindow.defaultProps = {
        additionalControlButtonText: 'More',
        draggable: true,
        renderPreview: function (_a) {
            var title = _a.title;
            return (react_1.default.createElement("div", { className: "mosaic-preview" },
                react_1.default.createElement("div", { className: "mosaic-window-toolbar" },
                    react_1.default.createElement("div", { className: "mosaic-window-title" }, title)),
                react_1.default.createElement("div", { className: "mosaic-window-body" },
                    react_1.default.createElement("h4", null, title),
                    react_1.default.createElement(OptionalBlueprint_1.OptionalBlueprint.Icon, { iconSize: 72, icon: "application" }))));
        },
        renderToolbar: null,
    };
    InternalMosaicWindow.contextType = contextTypes_1.MosaicContext;
    return InternalMosaicWindow;
}(react_1.default.Component));
exports.InternalMosaicWindow = InternalMosaicWindow;
var dragSource = {
    beginDrag: function (props, _monitor, component) {
        if (props.onDragStart) {
            props.onDragStart();
        }
        // TODO: Actually just delete instead of hiding
        // The defer is necessary as the element must be present on start for HTML DnD to not cry
        var hideTimer = defer_1.default(function () { return component.context.mosaicActions.hide(component.props.path); });
        return {
            mosaicId: component.context.mosaicId,
            hideTimer: hideTimer,
        };
    },
    endDrag: function (props, monitor, component) {
        var hideTimer = monitor.getItem().hideTimer;
        // If the hide call hasn't happened yet, cancel it
        window.clearTimeout(hideTimer);
        var ownPath = component.props.path;
        var dropResult = (monitor.getDropResult() || {});
        var mosaicActions = component.context.mosaicActions;
        var position = dropResult.position, destinationPath = dropResult.path;
        if (position != null && destinationPath != null && !isEqual_1.default(destinationPath, ownPath)) {
            mosaicActions.updateTree(mosaicUpdates_1.createDragToUpdates(mosaicActions.getRoot(), ownPath, destinationPath, position));
            if (props.onDragEnd) {
                props.onDragEnd('drop');
            }
        }
        else {
            // TODO: restore node from captured state
            mosaicActions.updateTree([
                {
                    path: dropRight_1.default(ownPath),
                    spec: {
                        splitPercentage: {
                            $set: null,
                        },
                    },
                },
            ]);
            if (props.onDragEnd) {
                props.onDragEnd('reset');
            }
        }
    },
};
var dropTarget = {};
// Each step exported here just to keep react-hot-loader happy
exports.SourceConnectedInternalMosaicWindow = react_dnd_1.DragSource(types_1.MosaicDragType.WINDOW, dragSource, function (connect, _monitor) { return ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
}); })(InternalMosaicWindow);
exports.SourceDropConnectedInternalMosaicWindow = react_dnd_1.DropTarget(types_1.MosaicDragType.WINDOW, dropTarget, function (connect, monitor) { return ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    draggedMosaicId: (monitor.getItem() || {}).mosaicId,
}); })(exports.SourceConnectedInternalMosaicWindow);
var MosaicWindow = /** @class */ (function (_super) {
    __extends(MosaicWindow, _super);
    function MosaicWindow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MosaicWindow.prototype.render = function () {
        return react_1.default.createElement(exports.SourceDropConnectedInternalMosaicWindow, __assign({}, this.props));
    };
    return MosaicWindow;
}(react_1.default.PureComponent));
exports.MosaicWindow = MosaicWindow;

},{"classnames":"../node_modules/classnames/index.js","lodash/defer":"../node_modules/lodash/defer.js","lodash/dropRight":"../node_modules/lodash/dropRight.js","lodash/isEmpty":"../node_modules/lodash/isEmpty.js","lodash/isEqual":"../node_modules/lodash/isEqual.js","lodash/values":"../node_modules/lodash/values.js","react":"../node_modules/react/index.js","react-dnd":"../node_modules/react-dnd/dist/esm/index.js","./buttons/defaultToolbarControls":"../node_modules/react-mosaic-component/lib/buttons/defaultToolbarControls.js","./buttons/Separator":"../node_modules/react-mosaic-component/lib/buttons/Separator.js","./contextTypes":"../node_modules/react-mosaic-component/lib/contextTypes.js","./internalTypes":"../node_modules/react-mosaic-component/lib/internalTypes.js","./MosaicDropTarget":"../node_modules/react-mosaic-component/lib/MosaicDropTarget.js","./types":"../node_modules/react-mosaic-component/lib/types.js","./util/mosaicUpdates":"../node_modules/react-mosaic-component/lib/util/mosaicUpdates.js","./util/mosaicUtilities":"../node_modules/react-mosaic-component/lib/util/mosaicUtilities.js","./util/OptionalBlueprint":"../node_modules/react-mosaic-component/lib/util/OptionalBlueprint.js"}],"../node_modules/react-mosaic-component/lib/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright 2019 Kevin Verdieck, originally developed at Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mosaic_1 = require("./Mosaic");
Object.defineProperty(exports, "Mosaic", { enumerable: true, get: function () { return Mosaic_1.Mosaic; } });
Object.defineProperty(exports, "MosaicWithoutDragDropContext", { enumerable: true, get: function () { return Mosaic_1.MosaicWithoutDragDropContext; } });
var types_1 = require("./types");
Object.defineProperty(exports, "MosaicDragType", { enumerable: true, get: function () { return types_1.MosaicDragType; } });
var contextTypes_1 = require("./contextTypes");
Object.defineProperty(exports, "MosaicContext", { enumerable: true, get: function () { return contextTypes_1.MosaicContext; } });
Object.defineProperty(exports, "MosaicWindowContext", { enumerable: true, get: function () { return contextTypes_1.MosaicWindowContext; } });
var mosaicUpdates_1 = require("./util/mosaicUpdates");
Object.defineProperty(exports, "buildSpecFromUpdate", { enumerable: true, get: function () { return mosaicUpdates_1.buildSpecFromUpdate; } });
Object.defineProperty(exports, "createDragToUpdates", { enumerable: true, get: function () { return mosaicUpdates_1.createDragToUpdates; } });
Object.defineProperty(exports, "createExpandUpdate", { enumerable: true, get: function () { return mosaicUpdates_1.createExpandUpdate; } });
Object.defineProperty(exports, "createHideUpdate", { enumerable: true, get: function () { return mosaicUpdates_1.createHideUpdate; } });
Object.defineProperty(exports, "createRemoveUpdate", { enumerable: true, get: function () { return mosaicUpdates_1.createRemoveUpdate; } });
Object.defineProperty(exports, "updateTree", { enumerable: true, get: function () { return mosaicUpdates_1.updateTree; } });
var mosaicUtilities_1 = require("./util/mosaicUtilities");
Object.defineProperty(exports, "createBalancedTreeFromLeaves", { enumerable: true, get: function () { return mosaicUtilities_1.createBalancedTreeFromLeaves; } });
Object.defineProperty(exports, "Corner", { enumerable: true, get: function () { return mosaicUtilities_1.Corner; } });
Object.defineProperty(exports, "getAndAssertNodeAtPathExists", { enumerable: true, get: function () { return mosaicUtilities_1.getAndAssertNodeAtPathExists; } });
Object.defineProperty(exports, "getLeaves", { enumerable: true, get: function () { return mosaicUtilities_1.getLeaves; } });
Object.defineProperty(exports, "getNodeAtPath", { enumerable: true, get: function () { return mosaicUtilities_1.getNodeAtPath; } });
Object.defineProperty(exports, "getOtherBranch", { enumerable: true, get: function () { return mosaicUtilities_1.getOtherBranch; } });
Object.defineProperty(exports, "getOtherDirection", { enumerable: true, get: function () { return mosaicUtilities_1.getOtherDirection; } });
Object.defineProperty(exports, "getPathToCorner", { enumerable: true, get: function () { return mosaicUtilities_1.getPathToCorner; } });
Object.defineProperty(exports, "isParent", { enumerable: true, get: function () { return mosaicUtilities_1.isParent; } });
var MosaicWindow_1 = require("./MosaicWindow");
Object.defineProperty(exports, "MosaicWindow", { enumerable: true, get: function () { return MosaicWindow_1.MosaicWindow; } });
var MosaicButton_1 = require("./buttons/MosaicButton");
Object.defineProperty(exports, "createDefaultToolbarButton", { enumerable: true, get: function () { return MosaicButton_1.createDefaultToolbarButton; } });
var MosaicZeroState_1 = require("./MosaicZeroState");
Object.defineProperty(exports, "MosaicZeroState", { enumerable: true, get: function () { return MosaicZeroState_1.MosaicZeroState; } });
var Separator_1 = require("./buttons/Separator");
Object.defineProperty(exports, "Separator", { enumerable: true, get: function () { return Separator_1.Separator; } });
var ExpandButton_1 = require("./buttons/ExpandButton");
Object.defineProperty(exports, "ExpandButton", { enumerable: true, get: function () { return ExpandButton_1.ExpandButton; } });
var ReplaceButton_1 = require("./buttons/ReplaceButton");
Object.defineProperty(exports, "ReplaceButton", { enumerable: true, get: function () { return ReplaceButton_1.ReplaceButton; } });
var SplitButton_1 = require("./buttons/SplitButton");
Object.defineProperty(exports, "SplitButton", { enumerable: true, get: function () { return SplitButton_1.SplitButton; } });
var RemoveButton_1 = require("./buttons/RemoveButton");
Object.defineProperty(exports, "RemoveButton", { enumerable: true, get: function () { return RemoveButton_1.RemoveButton; } });
var defaultToolbarControls_1 = require("./buttons/defaultToolbarControls");
Object.defineProperty(exports, "DEFAULT_CONTROLS_WITH_CREATION", { enumerable: true, get: function () { return defaultToolbarControls_1.DEFAULT_CONTROLS_WITH_CREATION; } });
Object.defineProperty(exports, "DEFAULT_CONTROLS_WITHOUT_CREATION", { enumerable: true, get: function () { return defaultToolbarControls_1.DEFAULT_CONTROLS_WITHOUT_CREATION; } });

},{"./Mosaic":"../node_modules/react-mosaic-component/lib/Mosaic.js","./types":"../node_modules/react-mosaic-component/lib/types.js","./contextTypes":"../node_modules/react-mosaic-component/lib/contextTypes.js","./util/mosaicUpdates":"../node_modules/react-mosaic-component/lib/util/mosaicUpdates.js","./util/mosaicUtilities":"../node_modules/react-mosaic-component/lib/util/mosaicUtilities.js","./MosaicWindow":"../node_modules/react-mosaic-component/lib/MosaicWindow.js","./buttons/MosaicButton":"../node_modules/react-mosaic-component/lib/buttons/MosaicButton.js","./MosaicZeroState":"../node_modules/react-mosaic-component/lib/MosaicZeroState.js","./buttons/Separator":"../node_modules/react-mosaic-component/lib/buttons/Separator.js","./buttons/ExpandButton":"../node_modules/react-mosaic-component/lib/buttons/ExpandButton.js","./buttons/ReplaceButton":"../node_modules/react-mosaic-component/lib/buttons/ReplaceButton.js","./buttons/SplitButton":"../node_modules/react-mosaic-component/lib/buttons/SplitButton.js","./buttons/RemoveButton":"../node_modules/react-mosaic-component/lib/buttons/RemoveButton.js","./buttons/defaultToolbarControls":"../node_modules/react-mosaic-component/lib/buttons/defaultToolbarControls.js"}],"../node_modules/lodash/difference.js":[function(require,module,exports) {
var baseDifference = require('./_baseDifference'),
    baseFlatten = require('./_baseFlatten'),
    baseRest = require('./_baseRest'),
    isArrayLikeObject = require('./isArrayLikeObject');

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;

},{"./_baseDifference":"../node_modules/lodash/_baseDifference.js","./_baseFlatten":"../node_modules/lodash/_baseFlatten.js","./_baseRest":"../node_modules/lodash/_baseRest.js","./isArrayLikeObject":"../node_modules/lodash/isArrayLikeObject.js"}],"../node_modules/mirador/dist/es/src/components/MosaicRenderPreview.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MosaicRenderPreview = MosaicRenderPreview;
var _react = _interopRequireDefault(require("react"));
var _MinimalWindow = _interopRequireDefault(require("../containers/MinimalWindow"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * MosaicRenderPreview is used to for the preview when dragging a mosaic window/tile
*/

function MosaicRenderPreview(props) {
  var t = props.t,
    title = props.title,
    windowId = props.windowId;
  return /*#__PURE__*/_react.default.createElement(_MinimalWindow.default, {
    windowId: "".concat(windowId, "-preview"),
    label: t('previewWindowTitle', {
      title: title
    }),
    ariaLabel: false
  });
}
MosaicRenderPreview.defaultProps = {
  t: function t(k) {
    return k;
  },
  title: ''
};
},{"react":"../node_modules/react/index.js","../containers/MinimalWindow":"../node_modules/mirador/dist/es/src/containers/MinimalWindow.js"}],"../node_modules/mirador/dist/es/src/containers/MosaicRenderPreview.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _styles = require("@material-ui/core/styles");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var _MosaicRenderPreview = require("../components/MosaicRenderPreview");
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
/** */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    title: (0, _selectors.getManifestTitle)(state, {
      windowId: windowId
    })
  };
};
/**
 *
 * @param theme
 */

var styles = function styles(theme) {
  return {
    preview: _objectSpread({}, theme.typography.h4)
  };
};
var enhance = (0, _redux.compose)((0, _styles.withStyles)(styles), (0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, null), (0, _withPlugins.withPlugins)('MosaicRenderPreview'));
var _default = exports.default = enhance(_MosaicRenderPreview.MosaicRenderPreview);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../components/MosaicRenderPreview":"../node_modules/mirador/dist/es/src/components/MosaicRenderPreview.js"}],"../node_modules/mirador/dist/es/src/lib/MosaicLayout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mosaicUpdates = require("react-mosaic-component/lib/util/mosaicUpdates");
var _mosaicUtilities = require("react-mosaic-component/lib/util/mosaicUtilities");
var _dropRight = _interopRequireDefault(require("lodash/dropRight"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
/** */

var MosaicLayout = exports.default = /*#__PURE__*/function () {
  /** */
  function MosaicLayout(layout) {
    _classCallCheck(this, MosaicLayout);
    this.layout = layout;
  }
  /** */

  _createClass(MosaicLayout, [{
    key: "pathToCorner",
    value: function pathToCorner() {
      var corner = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _mosaicUtilities.Corner.TOP_RIGHT;
      return (0, _mosaicUtilities.getPathToCorner)(this.layout, corner);
    }
    /** */
  }, {
    key: "pathToParent",
    value: function pathToParent(path) {
      return (0, _mosaicUtilities.getNodeAtPath)(this.layout, (0, _dropRight.default)(path));
    }
    /** */
  }, {
    key: "nodeAtPath",
    value: function nodeAtPath(path) {
      return (0, _mosaicUtilities.getNodeAtPath)(this.layout, path);
    }
    /**
     * addWindows - updates the layout with new windows using an algorithm ported
     * from the react-mosaic-components examples. Will always add to the Top Right
     * https://github.com/nomcopter/react-mosaic/blob/5081df8d1528d4c3b83a72763a46a30b3048fe95/demo/ExampleApp.tsx#L119-L154
     * @param {Array} addedWindowIds [description]
     */
  }, {
    key: "addWindows",
    value: function addWindows(addedWindowIds) {
      var _this = this;
      addedWindowIds.forEach(function (windowId, i) {
        var path = _this.pathToCorner();
        var parent = _this.pathToParent(path);
        var destination = _this.nodeAtPath(path);
        var direction = parent ? (0, _mosaicUtilities.getOtherDirection)(parent.direction) : 'row';
        var first;
        var second;
        if (direction === 'row') {
          first = destination;
          second = addedWindowIds[i];
        } else {
          first = addedWindowIds[i];
          second = destination;
        }
        var update = {
          path: path,
          spec: {
            $set: {
              direction: direction,
              first: first,
              second: second
            }
          }
        }; // We cannot batch the updates together because we need to recalculate
        // the new location for each new window

        _this.layout = (0, _mosaicUpdates.updateTree)(_this.layout, [update]);
      });
    }
    /**
     * removeWindows - Generate a set of "removeUpdates" to update layout binary
     * tree. Then update the layout.
     * @param  {Array} removedWindowIds
     * @param  {Object} windowPaths - a lookup table for window paths
     */
  }, {
    key: "removeWindows",
    value: function removeWindows(removedWindowIds, windowPaths) {
      var _this2 = this;
      var removeUpdates = removedWindowIds.map(function (windowId) {
        return (0, _mosaicUpdates.createRemoveUpdate)(_this2.layout, windowPaths[windowId]);
      });
      this.layout = (0, _mosaicUpdates.updateTree)(this.layout, removeUpdates);
    }
  }]);
  return MosaicLayout;
}();
},{"react-mosaic-component/lib/util/mosaicUpdates":"../node_modules/react-mosaic-component/lib/util/mosaicUpdates.js","react-mosaic-component/lib/util/mosaicUtilities":"../node_modules/react-mosaic-component/lib/util/mosaicUtilities.js","lodash/dropRight":"../node_modules/lodash/dropRight.js"}],"../node_modules/mirador/dist/es/src/components/WorkspaceMosaic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceMosaic = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactMosaicComponent = require("react-mosaic-component");
var _difference = _interopRequireDefault(require("lodash/difference"));
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
var _classnames = _interopRequireDefault(require("classnames"));
var _MosaicRenderPreview = _interopRequireDefault(require("../containers/MosaicRenderPreview"));
var _Window = _interopRequireDefault(require("../containers/Window"));
var _MosaicLayout = _interopRequireDefault(require("../lib/MosaicLayout"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */

var WorkspaceMosaic = exports.WorkspaceMosaic = /*#__PURE__*/function (_React$Component) {
  _inherits(WorkspaceMosaic, _React$Component);
  var _super = _createSuper(WorkspaceMosaic);

  /**
   */
  function WorkspaceMosaic(props) {
    var _this;
    _classCallCheck(this, WorkspaceMosaic);
    _this = _super.call(this, props);
    _this.tileRenderer = _this.tileRenderer.bind(_assertThisInitialized(_this));
    _this.mosaicChange = _this.mosaicChange.bind(_assertThisInitialized(_this));
    _this.determineWorkspaceLayout = _this.determineWorkspaceLayout.bind(_assertThisInitialized(_this));
    _this.zeroStateView = /*#__PURE__*/_react.default.createElement("div", null);
    _this.windowPaths = {};
    _this.toolbarControls = [];
    _this.additionalControls = [];
    return _this;
  }
  /** */

  _createClass(WorkspaceMosaic, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var updateWorkspaceMosaicLayout = this.props.updateWorkspaceMosaicLayout;
      var newLayout = this.determineWorkspaceLayout();
      if (newLayout) updateWorkspaceMosaicLayout(newLayout);
    }
    /** */
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
        windowIds = _this$props.windowIds,
        layout = _this$props.layout,
        updateWorkspaceMosaicLayout = _this$props.updateWorkspaceMosaicLayout;
      var prevWindows = prevProps.windowIds; // Handles when Windows are added (not via Add Resource UI) Could be a workspace import

      if (!windowIds.every(function (e) {
        return prevWindows.includes(e);
      })) {
        var newLayout = this.determineWorkspaceLayout();
        if (!(0, _isEqual.default)(newLayout, layout)) updateWorkspaceMosaicLayout(newLayout);
        return;
      } // Handles when Windows are removed from the state

      if (!prevWindows.every(function (e) {
        return windowIds.includes(e);
      })) {
        // There are no more remaining Windows, just return an empty layout
        if (windowIds.length === 0) {
          updateWorkspaceMosaicLayout(null);
          return;
        }
        var removedWindows = (0, _difference.default)(prevWindows, windowIds);
        var _newLayout = new _MosaicLayout.default(layout);
        _newLayout.removeWindows(removedWindows, this.windowPaths);
        updateWorkspaceMosaicLayout(_newLayout.layout);
      }
    }
    /**
     * bookkeepPath - used to book keep Window's path's
     * @param  {String} windowId   [description]
     * @param  {Array} path [description]
     */
  }, {
    key: "bookkeepPath",
    value: function bookkeepPath(windowId, path) {
      this.windowPaths[windowId] = path;
    }
    /**
     * Used to determine whether or not a "new" layout should be autogenerated.
     */
  }, {
    key: "determineWorkspaceLayout",
    value: function determineWorkspaceLayout() {
      var _this$props2 = this.props,
        windowIds = _this$props2.windowIds,
        layout = _this$props2.layout;
      var leaveKeys = (0, _reactMosaicComponent.getLeaves)(layout); // Windows were added

      if (!windowIds.every(function (e) {
        return leaveKeys.includes(e);
      })) {
        // No current layout, so just generate a new one
        if (leaveKeys.length < 2) {
          return (0, _reactMosaicComponent.createBalancedTreeFromLeaves)(windowIds);
        } // Add new windows to layout

        var addedWindows = (0, _difference.default)(windowIds, leaveKeys);
        var newLayout = new _MosaicLayout.default(layout);
        newLayout.addWindows(addedWindows);
        return newLayout.layout;
      } // Windows were removed (perhaps in a different Workspace). We don't have a
      // way to reconfigure.. so we have to random generate

      if (!leaveKeys.every(function (e) {
        return windowIds.includes(e);
      })) {
        return (0, _reactMosaicComponent.createBalancedTreeFromLeaves)(windowIds);
      }
      return layout;
    }
    /** */
  }, {
    key: "tileRenderer",
    value:
    /**
     * Render a tile (Window) in the Mosaic.
     */
    function tileRenderer(id, path) {
      var _this$props3 = this.props,
        windowIds = _this$props3.windowIds,
        workspaceId = _this$props3.workspaceId;
      if (!windowIds.includes(id)) return null;
      this.bookkeepPath(id, path);
      return /*#__PURE__*/_react.default.createElement(_reactMosaicComponent.MosaicWindow, {
        toolbarControls: this.toolbarControls,
        additionalControls: this.additionalControls,
        path: path,
        windowId: id,
        renderPreview: WorkspaceMosaic.renderPreview
      }, /*#__PURE__*/_react.default.createElement(_Window.default, {
        key: "".concat(id, "-").concat(workspaceId),
        windowId: id
      }));
    }
    /**
     * Update the redux store when the Mosaic is changed.
     */
  }, {
    key: "mosaicChange",
    value: function mosaicChange(newLayout) {
      var updateWorkspaceMosaicLayout = this.props.updateWorkspaceMosaicLayout;
      updateWorkspaceMosaicLayout(newLayout);
    }
    /**
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        layout = _this$props4.layout,
        classes = _this$props4.classes;
      return /*#__PURE__*/_react.default.createElement(_reactMosaicComponent.MosaicWithoutDragDropContext, {
        renderTile: this.tileRenderer,
        initialValue: layout || this.determineWorkspaceLayout(),
        onChange: this.mosaicChange,
        className: (0, _classnames.default)('mirador-mosaic', classes.root),
        zeroStateView: this.zeroStateView
      });
    }
  }], [{
    key: "renderPreview",
    value: function renderPreview(mosaicProps) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "mosaic-preview",
        "aria-hidden": true
      }, /*#__PURE__*/_react.default.createElement(_MosaicRenderPreview.default, {
        windowId: mosaicProps.windowId
      }));
    }
  }]);
  return WorkspaceMosaic;
}(_react.default.Component);
WorkspaceMosaic.defaultProps = {
  layout: undefined,
  windowIds: []
};
},{"react":"../node_modules/react/index.js","react-mosaic-component":"../node_modules/react-mosaic-component/lib/index.js","lodash/difference":"../node_modules/lodash/difference.js","lodash/isEqual":"../node_modules/lodash/isEqual.js","classnames":"../node_modules/classnames/index.js","../containers/MosaicRenderPreview":"../node_modules/mirador/dist/es/src/containers/MosaicRenderPreview.js","../containers/Window":"../node_modules/mirador/dist/es/src/containers/Window.js","../lib/MosaicLayout":"../node_modules/mirador/dist/es/src/lib/MosaicLayout.js"}],"../node_modules/mirador/dist/es/src/styles/react-mosaic-component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Generated using jss convert node_modules/react-mosaic-component/react-mosaic-component.css > src/styles/react-mosaic-component.js
// .mosaic-blueprint-theme styles have also been removed
var globalReactMosaicStyles = {
  '@global': {
    '.mosaic': {
      height: '100%',
      width: '100%'
    },
    '.mosaic, .mosaic > *': {
      boxSizing: 'border-box'
    },
    '.mosaic .mosaic-zero-state': {
      position: 'absolute',
      top: 6,
      right: 6,
      bottom: 6,
      left: 6,
      width: 'auto',
      height: 'auto',
      zIndex: '1'
    },
    '.mosaic-root': {
      position: 'absolute',
      top: 3,
      right: 3,
      bottom: 3,
      left: 3
    },
    '.mosaic-split': {
      position: 'absolute',
      zIndex: '1',
      touchAction: 'none'
    },
    '.mosaic-split:hover': {
      background: 'black'
    },
    '.mosaic-split .mosaic-split-line': {
      position: 'absolute'
    },
    '.mosaic-split.-row': {
      marginLeft: -3,
      width: 6,
      cursor: 'ew-resize'
    },
    '.mosaic-split.-row .mosaic-split-line': {
      top: '0',
      bottom: '0',
      left: 3,
      right: 3
    },
    '.mosaic-split.-column': {
      marginTop: -3,
      height: 6,
      cursor: 'ns-resize'
    },
    '.mosaic-split.-column .mosaic-split-line': {
      top: 3,
      bottom: 3,
      left: '0',
      right: '0'
    },
    '.mosaic-tile': {
      position: 'absolute',
      margin: 3
    },
    '.mosaic-tile > *': {
      height: '100%',
      width: '100%'
    },
    '.mosaic-drop-target': {
      position: 'relative'
    },
    '.mosaic-drop-target.drop-target-hover .drop-target-container': {
      display: 'block'
    },
    '.mosaic-drop-target.mosaic > .drop-target-container .drop-target.left': {
      right: 'calc(100% -  10px )'
    },
    '.mosaic-drop-target.mosaic > .drop-target-container .drop-target.right': {
      left: 'calc(100% -  10px )'
    },
    '.mosaic-drop-target.mosaic > .drop-target-container .drop-target.bottom': {
      top: 'calc(100% -  10px )'
    },
    '.mosaic-drop-target.mosaic > .drop-target-container .drop-target.top': {
      bottom: 'calc(100% -  10px )'
    },
    '.mosaic-drop-target .drop-target-container': {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      display: 'none'
    },
    '.mosaic-drop-target .drop-target-container.-dragging': {
      display: 'block'
    },
    '.mosaic-drop-target .drop-target-container .drop-target': {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      background: 'rgba(0, 0, 0, 0.2)',
      border: '2px solid black',
      opacity: '0',
      zIndex: '5'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.left': {
      right: 'calc(100% -  30% )'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.right': {
      left: 'calc(100% -  30% )'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.bottom': {
      top: 'calc(100% -  30% )'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.top': {
      bottom: 'calc(100% -  30% )'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.drop-target-hover': {
      opacity: '1'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.drop-target-hover.left': {
      right: 'calc(100% -  50% )'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.drop-target-hover.right': {
      left: 'calc(100% -  50% )'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.drop-target-hover.bottom': {
      top: 'calc(100% -  50% )'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.drop-target-hover.top': {
      bottom: 'calc(100% -  50% )'
    },
    '.mosaic-window, .mosaic-preview': {
      position: 'relative',
      display: 'flex',
      fallbacks: [{
        display: '-webkit-box'
      }],
      webkitBoxOrient: 'vertical',
      webkitBoxDirection: 'normal',
      flexDirection: 'column',
      overflow: 'hidden',
      boxShadow: '0 0 1px rgba(0, 0, 0, 0.2)'
    },
    '.mosaic-window .mosaic-window-toolbar, .mosaic-preview .mosaic-window-toolbar': {
      zIndex: '4',
      display: 'flex',
      fallbacks: [{
        display: '-webkit-box'
      }],
      webkitBoxPack: 'justify',
      justifyContent: 'space-between',
      webkitBoxAlign: 'center',
      alignItems: 'center',
      flexShrink: '0',
      height: 30,
      background: 'white',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
    },
    '.mosaic-window .mosaic-window-toolbar.draggable, .mosaic-preview .mosaic-window-toolbar.draggable': {
      cursor: 'move'
    },
    '.mosaic-window .mosaic-window-title, .mosaic-preview .mosaic-window-title': {
      paddingLeft: 15,
      webkitBoxFlex: '1',
      flex: '1',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      minHeight: 18
    },
    '.mosaic-window .mosaic-window-controls, .mosaic-preview .mosaic-window-controls': {
      display: 'flex',
      fallbacks: [{
        display: '-webkit-box'
      }],
      height: '100%'
    },
    '.mosaic-window .mosaic-window-controls .separator, .mosaic-preview .mosaic-window-controls .separator': {
      height: 20,
      borderLeft: '1px solid black',
      margin: '5px 4px'
    },
    '.mosaic-window .mosaic-window-body, .mosaic-preview .mosaic-window-body': {
      position: 'relative',
      webkitBoxFlex: '1',
      flex: '1',
      height: '0',
      background: 'white',
      zIndex: '1',
      overflow: 'hidden'
    },
    '.mosaic-window .mosaic-window-additional-actions-bar, .mosaic-preview .mosaic-window-additional-actions-bar': {
      position: 'absolute',
      top: 30,
      right: '0',
      bottom: 'initial',
      left: '0',
      height: '0',
      overflow: 'hidden',
      background: 'white',
      webkitBoxPack: 'end',
      justifyContent: 'flex-end',
      display: 'flex',
      fallbacks: [{
        display: '-webkit-box'
      }],
      zIndex: '3'
    },
    '.mosaic-window .mosaic-window-additional-actions-bar .bp3-button, .mosaic-preview .mosaic-window-additional-actions-bar .bp3-button': {
      margin: '0'
    },
    '.mosaic-window .mosaic-window-additional-actions-bar .bp3-button:after, .mosaic-preview .mosaic-window-additional-actions-bar .bp3-button:after': {
      display: 'none'
    },
    '.mosaic-window .mosaic-window-body-overlay, .mosaic-preview .mosaic-window-body-overlay': {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      opacity: '0',
      background: 'white',
      display: 'none',
      zIndex: '2'
    },
    '.mosaic-window.additional-controls-open .mosaic-window-additional-actions-bar, .mosaic-preview.additional-controls-open .mosaic-window-additional-actions-bar': {
      height: 30
    },
    '.mosaic-window.additional-controls-open .mosaic-window-body-overlay, .mosaic-preview.additional-controls-open .mosaic-window-body-overlay': {
      display: 'block'
    },
    '.mosaic-window .mosaic-preview, .mosaic-preview .mosaic-preview': {
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex: '0',
      border: '1px solid black',
      maxHeight: 400
    },
    '.mosaic-window .mosaic-preview .mosaic-window-body, .mosaic-preview .mosaic-preview .mosaic-window-body': {
      display: 'flex',
      fallbacks: [{
        display: '-webkit-box'
      }],
      webkitBoxOrient: 'vertical',
      webkitBoxDirection: 'normal',
      flexDirection: 'column',
      webkitBoxAlign: 'center',
      alignItems: 'center',
      webkitBoxPack: 'center',
      justifyContent: 'center'
    },
    '.mosaic-window .mosaic-preview h4, .mosaic-preview .mosaic-preview h4': {
      marginBottom: 10
    },
    '.mosaic:not(.mosaic-blueprint-theme) .mosaic-default-control.close-button:before': {
      content: '\'Close\''
    },
    '.mosaic:not(.mosaic-blueprint-theme) .mosaic-default-control.split-button:before': {
      content: '\'Split\''
    },
    '.mosaic:not(.mosaic-blueprint-theme) .mosaic-default-control.replace-button:before': {
      content: '\'Replace\''
    },
    '.mosaic:not(.mosaic-blueprint-theme) .mosaic-default-control.expand-button:before': {
      content: '\'Expand\''
    }
  }
};
var _default = exports.default = globalReactMosaicStyles;
},{}],"../node_modules/mirador/dist/es/src/containers/WorkspaceMosaic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var actions = _interopRequireWildcard(require("../state/actions"));
var _WorkspaceMosaic = require("../components/WorkspaceMosaic");
var _reactMosaicComponent = _interopRequireDefault(require("../styles/react-mosaic-component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    layout: (0, _selectors.getWorkspace)(state).layout,
    windowIds: (0, _selectors.getWorkspace)(state).windowIds,
    workspaceId: (0, _selectors.getWorkspace)(state).id
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */

var mapDispatchToProps = {
  updateWorkspaceMosaicLayout: actions.updateWorkspaceMosaicLayout
};
var styles = _objectSpread({
  root: {
    '& .mosaic-preview': {
      boxShadow: 'none'
    },
    '& .mosaic-tile': {
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .2), 0 2px 1px -1px rgba(0, 0, 0, .2)'
    },
    '& .mosaic-window': {
      boxShadow: 'none'
    },
    '& .mosaic-window-toolbar': {
      display: 'none !important'
    }
  }
}, _reactMosaicComponent.default);
var enhance = (0, _redux.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('WorkspaceMosaic') // further HOC go here
);
var _default = exports.default = enhance(_WorkspaceMosaic.WorkspaceMosaic);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../components/WorkspaceMosaic":"../node_modules/mirador/dist/es/src/components/WorkspaceMosaic.js","../styles/react-mosaic-component":"../node_modules/mirador/dist/es/src/styles/react-mosaic-component.js"}],"../node_modules/react-resize-observer/lib/ResizeObserver.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = {
  position: 'absolute',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  zIndex: -1,
  visibility: 'hidden',
  pointerEvents: 'none'
};
var styleChild = {
  position: 'absolute',
  left: 0,
  top: 0,
  transition: '0s'
};

function isAncestor(node, ancestor) {
  var current = node.parentNode;

  while (current) {
    if (current === ancestor) {
      return true;
    }

    current = current.parentNode;
  }

  return false;
}

var ResizeObserver =
/*#__PURE__*/
function (_React$Component) {
  function ResizeObserver() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, ResizeObserver);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResizeObserver)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_expandRef", null), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_shrinkRef", null), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_node", null), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_lastWidth", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_lastHeight", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_lastRect", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_hasResize", false), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleScroll", function (event) {
      if ((_this.props.onPosition || _this.props.onReflow || _this.props.onResize) && (_this._globalScollTarget(event.target) || _this._refScrollTarget(event.target) || _this._ancestorScollTarget(event.target))) {
        _this._reflow();
      }
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_globalScollTarget", function (target) {
      return target instanceof Node && (_this.props.onPosition || _this.props.onReflow) && (target === document || target === document.documentElement || target === document.body);
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_refScrollTarget", function (target) {
      if (target instanceof HTMLElement && (target === _this._expandRef || target === _this._shrinkRef)) {
        var width = target.offsetWidth;
        var height = target.offsetHeight;

        if (width !== _this._lastWidth || height !== _this._lastHeight) {
          _this._lastWidth = width;
          _this._lastHeight = height;

          _this._reset(_this._expandRef);

          _this._reset(_this._shrinkRef);

          return true;
        }
      }

      return false;
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_ancestorScollTarget", function (target) {
      return target instanceof Node && (_this.props.onPosition || _this.props.onReflow) && _this._node && isAncestor(_this._node, target);
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_reflow", function () {
      if (!_this._node || !(_this._node.parentNode instanceof Element)) return;

      var rect = _this._node.parentNode.getBoundingClientRect();

      var sizeChanged = true;
      var positionChanged = true;

      if (_this._lastRect) {
        sizeChanged = rect.width !== _this._lastRect.width || rect.height !== _this._lastRect.height;
        positionChanged = rect.top !== _this._lastRect.top || rect.left !== _this._lastRect.left;
      }

      _this._lastRect = rect;

      if (sizeChanged && _this.props.onResize) {
        _this.props.onResize(rect);
      }

      if (positionChanged && _this.props.onPosition) {
        _this.props.onPosition(rect);
      }

      if ((sizeChanged || positionChanged) && _this.props.onReflow) {
        _this.props.onReflow(rect);
      }
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleRef", function (node) {
      _this._node = node;
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleExpandRef", function (node) {
      _this._reset(node);

      _this._expandRef = node;
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleShrinkRef", function (node) {
      _this._reset(node);

      _this._shrinkRef = node;
    }), _temp));
  }

  _createClass(ResizeObserver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._reflow();

      window.addEventListener('scroll', this._handleScroll, true);

      if (this.props.onPosition || this.props.onReflow) {
        window.addEventListener('resize', this._reflow, true);
        this._hasResize = true;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if ((this.props.onPosition || this.props.onReflow) && !this._hasResize) {
        window.addEventListener('resize', this._reflow, true);
        this._hasResize = true;
      } else if (!(this.props.onPosition || this.props.onReflow) && this._hasResize) {
        window.removeEventListener('resize', this._reflow, true);
        this._hasResize = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this._handleScroll, true);

      if (this._hasResize) {
        window.removeEventListener('resize', this._reflow, true);
      }
    }
  }, {
    key: "_reset",
    value: function _reset(node) {
      if (node) {
        node.scrollLeft = 100000;
        node.scrollTop = 100000;
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.onResize || this.props.onReflow) {
        return _react.default.createElement("div", {
          style: style,
          ref: this._handleRef
        }, _react.default.createElement("div", {
          ref: this._handleExpandRef,
          style: style
        }, _react.default.createElement("div", {
          style: _objectSpread({}, styleChild, {
            width: 100000,
            height: 100000
          })
        })), _react.default.createElement("div", {
          ref: this._handleShrinkRef,
          style: style
        }, _react.default.createElement("div", {
          style: _objectSpread({}, styleChild, {
            width: '200%',
            height: '200%'
          })
        })));
      }

      return _react.default.createElement("noscript", {
        ref: this._handleRef
      });
    }
  }]);

  _inherits(ResizeObserver, _React$Component);

  return ResizeObserver;
}(_react.default.Component);

_defineProperty(ResizeObserver, "displayName", 'ResizeObserver');

var _default = ResizeObserver;
exports.default = _default;

},{"react":"../node_modules/react/index.js"}],"../node_modules/mirador/dist/es/src/components/WorkspaceElasticWindow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRnd = require("react-rnd");
var _Window = _interopRequireDefault(require("../containers/Window"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */

var WorkspaceElasticWindow = /*#__PURE__*/function (_React$Component) {
  _inherits(WorkspaceElasticWindow, _React$Component);
  var _super = _createSuper(WorkspaceElasticWindow);
  function WorkspaceElasticWindow() {
    _classCallCheck(this, WorkspaceElasticWindow);
    return _super.apply(this, arguments);
  }
  _createClass(WorkspaceElasticWindow, [{
    key: "render",
    value:
    /**
     */
    function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        companionWindowDimensions = _this$props.companionWindowDimensions,
        focused = _this$props.focused,
        layout = _this$props.layout,
        workspace = _this$props.workspace,
        updateElasticWindowLayout = _this$props.updateElasticWindowLayout;
      var offsetX = workspace.width / 2;
      var offsetY = workspace.height / 2;
      return /*#__PURE__*/_react.default.createElement(_reactRnd.Rnd, {
        key: "".concat(layout.windowId, "-").concat(workspace.id),
        size: {
          height: layout.height + companionWindowDimensions.height,
          width: layout.width + companionWindowDimensions.width
        },
        position: {
          x: layout.x + offsetX,
          y: layout.y + offsetY
        },
        bounds: "parent",
        onDragStop: function onDragStop(e, d) {
          updateElasticWindowLayout(layout.windowId, {
            x: d.x - offsetX,
            y: d.y - offsetY
          });
        },
        onResize: function onResize(e, direction, ref, delta, position) {
          updateElasticWindowLayout(layout.windowId, {
            height: Number.parseInt(ref.style.height, 10) - companionWindowDimensions.height,
            width: Number.parseInt(ref.style.width, 10) - companionWindowDimensions.width,
            x: position.x - offsetX,
            y: position.y - offsetY
          });
        },
        dragHandleClassName: (0, _cssNs.default)('window-top-bar'),
        className: focused ? classes.focused : null
      }, /*#__PURE__*/_react.default.createElement(_Window.default, {
        windowId: layout.windowId
      }));
    }
  }]);
  return WorkspaceElasticWindow;
}(_react.default.Component);
WorkspaceElasticWindow.defaultProps = {
  classes: {},
  companionWindowDimensions: {
    height: 0,
    width: 0
  },
  focused: false
};
var _default = exports.default = WorkspaceElasticWindow;
},{"react":"../node_modules/react/index.js","react-rnd":"../node_modules/react-rnd/lib/index.js","../containers/Window":"../node_modules/mirador/dist/es/src/containers/Window.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js"}],"../node_modules/mirador/dist/es/src/containers/WorkspaceElasticWindow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _core = require("@material-ui/core");
var actions = _interopRequireWildcard(require("../state/actions"));
var _WorkspaceElasticWindow = _interopRequireDefault(require("../components/WorkspaceElasticWindow"));
var _selectors = require("../state/selectors");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
    companionWindowDimensions: (0, _selectors.selectCompanionWindowDimensions)(state, {
      windowId: windowId
    }),
    focused: (0, _selectors.isFocused)(state, {
      windowId: windowId
    }),
    layout: (0, _selectors.getElasticLayout)(state)[windowId],
    workspace: (0, _selectors.getWorkspace)(state)
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    updateElasticWindowLayout: function updateElasticWindowLayout(windowId, position) {
      dispatch(actions.updateElasticWindowLayout(windowId, position));
    }
  };
};
/**
 * @param theme
 */

var styles = function styles(theme) {
  return {
    focused: {
      zIndex: theme.zIndex.modal - 1
    }
  };
};
var enhance = (0, _redux.compose)((0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps) // further HOC go here
);
var _default = exports.default = enhance(_WorkspaceElasticWindow.default);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../components/WorkspaceElasticWindow":"../node_modules/mirador/dist/es/src/components/WorkspaceElasticWindow.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js"}],"../node_modules/mirador/dist/es/src/components/WorkspaceElastic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRnd = require("react-rnd");
var _reactResizeObserver = _interopRequireDefault(require("react-resize-observer"));
var _classnames = _interopRequireDefault(require("classnames"));
var _WorkspaceElasticWindow = _interopRequireDefault(require("../containers/WorkspaceElasticWindow"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */

var WorkspaceElastic = /*#__PURE__*/function (_React$Component) {
  _inherits(WorkspaceElastic, _React$Component);
  var _super = _createSuper(WorkspaceElastic);
  function WorkspaceElastic() {
    _classCallCheck(this, WorkspaceElastic);
    return _super.apply(this, arguments);
  }
  _createClass(WorkspaceElastic, [{
    key: "render",
    value:
    /**
     */
    function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        workspace = _this$props.workspace,
        elasticLayout = _this$props.elasticLayout,
        setWorkspaceViewportDimensions = _this$props.setWorkspaceViewportDimensions,
        setWorkspaceViewportPosition = _this$props.setWorkspaceViewportPosition;
      var viewportPosition = workspace.viewportPosition;
      var offsetX = workspace.width / 2;
      var offsetY = workspace.height / 2;
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          height: '100%',
          position: 'relative',
          width: '100%'
        }
      }, /*#__PURE__*/_react.default.createElement(_reactResizeObserver.default, {
        onResize: function onResize(rect) {
          setWorkspaceViewportDimensions(rect);
        }
      }), /*#__PURE__*/_react.default.createElement(_reactRnd.Rnd, {
        size: {
          height: workspace.height,
          width: workspace.width
        },
        position: {
          x: -1 * viewportPosition.x - offsetX,
          y: -1 * viewportPosition.y - offsetY
        },
        enableResizing: {
          bottom: false,
          bottomLeft: false,
          bottomRight: false,
          left: false,
          right: false,
          top: false,
          topLeft: false,
          topRight: false
        },
        onDragStop: function onDragStop(e, d) {
          setWorkspaceViewportPosition({
            x: -1 * d.x - offsetX,
            y: -1 * d.y - offsetY
          });
        },
        cancel: ".".concat((0, _cssNs.default)('window')),
        className: (0, _classnames.default)(classes.workspace, (0, _cssNs.default)('workspace')),
        disableDragging: !workspace.draggingEnabled
      }, Object.keys(elasticLayout).map(function (windowId) {
        return /*#__PURE__*/_react.default.createElement(_WorkspaceElasticWindow.default, {
          key: windowId,
          windowId: windowId
        });
      })));
    }
  }]);
  return WorkspaceElastic;
}(_react.default.Component);
var _default = exports.default = WorkspaceElastic;
},{"react":"../node_modules/react/index.js","react-rnd":"../node_modules/react-rnd/lib/index.js","react-resize-observer":"../node_modules/react-resize-observer/lib/ResizeObserver.js","classnames":"../node_modules/classnames/index.js","../containers/WorkspaceElasticWindow":"../node_modules/mirador/dist/es/src/containers/WorkspaceElasticWindow.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js"}],"../node_modules/mirador/dist/es/src/containers/WorkspaceElastic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _WorkspaceElastic = _interopRequireDefault(require("../components/WorkspaceElastic"));
var _selectors = require("../state/selectors");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    elasticLayout: (0, _selectors.getElasticLayout)(state),
    workspace: (0, _selectors.getWorkspace)(state)
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    setWorkspaceViewportDimensions: function setWorkspaceViewportDimensions(position) {
      dispatch(actions.setWorkspaceViewportDimensions(position));
    },
    setWorkspaceViewportPosition: function setWorkspaceViewportPosition(position) {
      dispatch(actions.setWorkspaceViewportPosition(position));
    },
    updateElasticWindowLayout: function updateElasticWindowLayout(windowId, position) {
      dispatch(actions.updateElasticWindowLayout(windowId, position));
    }
  };
};
var styles = {
  workspace: {
    boxSizing: 'border-box',
    margin: 0,
    position: 'absolute',
    transitionDuration: '.7s',
    // order matters
    // eslint-disable-next-line sort-keys
    '& .react-draggable-dragging': {
      transitionDuration: 'unset'
    }
  }
};
var enhance = (0, _redux.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('WorkspaceElastic') // further HOC go here
);
var _default = exports.default = enhance(_WorkspaceElastic.default);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../components/WorkspaceElastic":"../node_modules/mirador/dist/es/src/components/WorkspaceElastic.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js"}],"../node_modules/@material-ui/icons/InsertDriveFileSharp.js":[function(require,module,exports) {
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
  d: "M4.01 2L4 22h16V8l-6-6H4.01zM13 9V3.5L18.5 9H13z"
}), 'InsertDriveFileSharp');
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/interopRequireWildcard":"../node_modules/@babel/runtime/helpers/interopRequireWildcard.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"../node_modules/mirador/dist/es/src/lib/readImageMetadata.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readImageMetadata = readImageMetadata;
/** Extract metadata from an image File */
function readImageMetadata(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.addEventListener('load', function () {
      var image = new Image();
      image.addEventListener('load', function () {
        resolve({
          height: image.height,
          name: file.name,
          type: file.type,
          url: reader.result,
          width: image.width
        });
      });
      image.src = reader.result;
    });
    reader.readAsDataURL(file);
  });
}
},{}],"../node_modules/mirador/dist/es/src/components/IIIFDropTarget.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDrop = exports.IIIFDropTarget = void 0;
var _react = _interopRequireDefault(require("react"));
var _Backdrop = _interopRequireDefault(require("@material-ui/core/Backdrop"));
var _InsertDriveFileSharp = _interopRequireDefault(require("@material-ui/icons/InsertDriveFileSharp"));
var _colors = require("@material-ui/core/colors");
var _uuid = require("uuid");
var _reactDndHtml5Backend = require("react-dnd-html5-backend");
var _reactDnd = require("react-dnd");
var _readImageMetadata = require("../lib/readImageMetadata");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
/** */

var handleDrop = exports.handleDrop = function handleDrop(item, monitor, props) {
  var onDrop = props.onDrop;
  if (item.urls) {
    item.urls.forEach(function (str) {
      var url = new URL(str);
      var manifestId = url.searchParams.get('manifest');
      var canvasId = url.searchParams.get('canvas');
      if (manifestId) onDrop({
        canvasId: canvasId,
        manifestId: manifestId
      }, props, monitor);
    });
  }
  if (item.files) {
    var manifestFiles = item.files.filter(function (f) {
      return f.type === 'application/json';
    });
    var manifestPromises = manifestFiles.map(function (file) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.addEventListener('load', function () {
          var manifestJson = reader.result;
          var manifestId = (0, _uuid.v4)();
          if (manifestJson) onDrop({
            manifestId: manifestId,
            manifestJson: manifestJson
          }, props, monitor);
          resolve();
        });
        reader.readAsText(file);
      });
    });
    var imageFiles = item.files.filter(function (_ref) {
      var type = _ref.type;
      return type.startsWith('image/');
    });
    var imagePromise;
    if (imageFiles.length > 0) {
      var id = (0, _uuid.v4)();
      var imageData = imageFiles.map(function (file) {
        return (0, _readImageMetadata.readImageMetadata)(file);
      });
      imagePromise = Promise.all(imageData).then(function (images) {
        var manifestJson = {
          '@context': 'http://iiif.io/api/presentation/3/context.json',
          id: id,
          items: images.map(function (_ref2, index) {
            var name = _ref2.name,
              type = _ref2.type,
              width = _ref2.width,
              height = _ref2.height,
              url = _ref2.url;
            return {
              height: height,
              id: "".concat(id, "/canvas/").concat(index),
              items: [{
                id: "".concat(id, "/canvas/").concat(index, "/1"),
                items: [{
                  body: {
                    format: type,
                    id: url,
                    type: 'Image'
                  },
                  height: height,
                  id: "".concat(id, "/canvas/").concat(index, "/1/image"),
                  motivation: 'painting',
                  target: "".concat(id, "/canvas/").concat(index, "/1"),
                  type: 'Annotation',
                  width: width
                }],
                type: 'AnnotationPage'
              }],
              label: name,
              type: 'Canvas',
              width: width
            };
          }),
          label: images[0].name,
          type: 'Manifest'
        };
        var manifestId = (0, _uuid.v4)();
        if (manifestJson) onDrop({
          manifestId: manifestId,
          manifestJson: manifestJson
        }, props, monitor);
      });
    }
    return Promise.all([].concat(_toConsumableArray(manifestPromises), [imagePromise]));
  }
  return undefined;
};
/** */

var IIIFDropTarget = exports.IIIFDropTarget = function IIIFDropTarget(props) {
  var children = props.children,
    onDrop = props.onDrop;
  var _useDrop = (0, _reactDnd.useDrop)({
      accept: [_reactDndHtml5Backend.NativeTypes.URL, _reactDndHtml5Backend.NativeTypes.FILE],
      collect: function collect(monitor) {
        return {
          canDrop: monitor.canDrop(),
          isOver: monitor.isOver()
        };
      },
      /** */
      drop: function drop(item, monitor) {
        if (!onDrop) return;
        handleDrop(item, monitor, props);
      }
    }),
    _useDrop2 = _slicedToArray(_useDrop, 2),
    _useDrop2$ = _useDrop2[0],
    canDrop = _useDrop2$.canDrop,
    isOver = _useDrop2$.isOver,
    drop = _useDrop2[1];
  /**
   * Safari reports drag+drop'ed urls as both a file and uri-list
   * which gets mis-classified by react-dnd.
   */

  var hackForSafari = function hackForSafari(e) {
    if (!window.safari || !onDrop || !e.dataTransfer) return;
    if (e.dataTransfer.types.includes('Files') && e.dataTransfer.types.includes('text/uri-list')) {
      var url = e.dataTransfer.getData('text/uri-list');
      if (!url) return;
      handleDrop({
        urls: [url]
      }, null, props);
    }
  };
  var isActive = canDrop && isOver;
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: drop,
    onDrop: hackForSafari,
    style: {
      height: '100%',
      width: '100%'
    }
  }, children, /*#__PURE__*/_react.default.createElement(_Backdrop.default, {
    open: isActive,
    style: {
      zIndex: 9999
    }
  }, /*#__PURE__*/_react.default.createElement(_InsertDriveFileSharp.default, {
    style: {
      color: _colors.grey[400],
      fontSize: 256
    }
  })));
};
},{"react":"../node_modules/react/index.js","@material-ui/core/Backdrop":"../node_modules/@material-ui/core/esm/Backdrop/index.js","@material-ui/icons/InsertDriveFileSharp":"../node_modules/@material-ui/icons/InsertDriveFileSharp.js","@material-ui/core/colors":"../node_modules/@material-ui/core/esm/colors/index.js","uuid":"../node_modules/uuid/dist/esm-browser/index.js","react-dnd-html5-backend":"../node_modules/react-dnd-html5-backend/dist/esm/index.js","react-dnd":"../node_modules/react-dnd/dist/esm/index.js","../lib/readImageMetadata":"../node_modules/mirador/dist/es/src/lib/readImageMetadata.js"}],"../node_modules/mirador/dist/es/src/components/Workspace.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Workspace = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _Window = _interopRequireDefault(require("../containers/Window"));
var _WorkspaceMosaic = _interopRequireDefault(require("../containers/WorkspaceMosaic"));
var _WorkspaceElastic = _interopRequireDefault(require("../containers/WorkspaceElastic"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _IIIFDropTarget = require("./IIIFDropTarget");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */

var Workspace = exports.Workspace = /*#__PURE__*/function (_React$Component) {
  _inherits(Workspace, _React$Component);
  var _super = _createSuper(Workspace);

  /** */
  function Workspace(props) {
    var _this;
    _classCallCheck(this, Workspace);
    _this = _super.call(this, props);
    _this.handleDrop = _this.handleDrop.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */

  _createClass(Workspace, [{
    key: "handleDrop",
    value: function handleDrop(_ref, props, monitor) {
      var canvasId = _ref.canvasId,
        manifestId = _ref.manifestId,
        manifestJson = _ref.manifestJson;
      var _this$props = this.props,
        addWindow = _this$props.addWindow,
        allowNewWindows = _this$props.allowNewWindows;
      if (!allowNewWindows) return;
      addWindow({
        canvasId: canvasId,
        manifest: manifestJson,
        manifestId: manifestId
      });
    }
    /**
     * Determine which workspace to render by configured type
     */
  }, {
    key: "workspaceByType",
    value: function workspaceByType() {
      var _this$props2 = this.props,
        workspaceId = _this$props2.workspaceId,
        workspaceType = _this$props2.workspaceType,
        windowIds = _this$props2.windowIds;
      if (this.maximizedWindows()) {
        return this.maximizedWindows();
      }
      if (windowIds.length === 0) return this.zeroWindows();
      switch (workspaceType) {
        case 'elastic':
          return /*#__PURE__*/_react.default.createElement(_WorkspaceElastic.default, null);
        case 'mosaic':
          return /*#__PURE__*/_react.default.createElement(_WorkspaceMosaic.default, null);
        default:
          return windowIds.map(function (windowId) {
            return /*#__PURE__*/_react.default.createElement(_Window.default, {
              key: "".concat(windowId, "-").concat(workspaceId),
              windowId: windowId
            });
          });
      }
    }
    /** */
  }, {
    key: "zeroWindows",
    value: function zeroWindows() {
      var t = this.props.t;
      return /*#__PURE__*/_react.default.createElement(_Grid.default, {
        alignItems: "center",
        container: true,
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        xs: 12,
        item: true
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "h1",
        component: "div",
        align: "center"
      }, t('welcome'))));
    }
    /**
     * Determine whether or not there are maximized windows
     */
  }, {
    key: "maximizedWindows",
    value: function maximizedWindows() {
      var _this$props3 = this.props,
        maximizedWindowIds = _this$props3.maximizedWindowIds,
        workspaceId = _this$props3.workspaceId;
      if (maximizedWindowIds.length > 0) {
        return maximizedWindowIds.map(function (windowId) {
          return /*#__PURE__*/_react.default.createElement(_Window.default, {
            key: "".concat(windowId, "-").concat(workspaceId),
            windowId: windowId,
            className: (0, _classnames.default)((0, _cssNs.default)('workspace-maximized-window'))
          });
        });
      }
      return false;
    }
    /**
     * render
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        classes = _this$props4.classes,
        isWorkspaceControlPanelVisible = _this$props4.isWorkspaceControlPanelVisible,
        t = _this$props4.t;
      return /*#__PURE__*/_react.default.createElement(_IIIFDropTarget.IIIFDropTarget, {
        onDrop: this.handleDrop
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)((0, _cssNs.default)('workspace-viewport'), isWorkspaceControlPanelVisible && (0, _cssNs.default)('workspace-with-control-panel'), isWorkspaceControlPanelVisible && classes.workspaceWithControlPanel, classes.workspaceViewport)
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "srOnly",
        component: "h1"
      }, t('miradorViewer')), this.workspaceByType()));
    }
  }]);
  return Workspace;
}(_react.default.Component);
Workspace.defaultProps = {
  addWindow: function addWindow() {},
  allowNewWindows: true,
  maximizedWindowIds: [],
  windowIds: []
};
},{"react":"../node_modules/react/index.js","classnames":"../node_modules/classnames/index.js","@material-ui/core/Grid":"../node_modules/@material-ui/core/esm/Grid/index.js","@material-ui/core/Typography":"../node_modules/@material-ui/core/esm/Typography/index.js","../containers/Window":"../node_modules/mirador/dist/es/src/containers/Window.js","../containers/WorkspaceMosaic":"../node_modules/mirador/dist/es/src/containers/WorkspaceMosaic.js","../containers/WorkspaceElastic":"../node_modules/mirador/dist/es/src/containers/WorkspaceElastic.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js","./IIIFDropTarget":"../node_modules/mirador/dist/es/src/components/IIIFDropTarget.js"}],"../node_modules/mirador/dist/es/src/containers/Workspace.js":[function(require,module,exports) {
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
var _Workspace = require("../components/Workspace");
var _selectors = require("../state/selectors");
var actions = _interopRequireWildcard(require("../state/actions"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    allowNewWindows: (0, _selectors.getConfig)(state).workspace.allowNewWindows,
    isWorkspaceControlPanelVisible: (0, _selectors.getConfig)(state).workspaceControlPanel.enabled,
    maximizedWindowIds: (0, _selectors.getMaximizedWindowsIds)(state),
    windowIds: (0, _selectors.getWindowIds)(state),
    workspaceId: (0, _selectors.getWorkspace)(state).id,
    workspaceType: (0, _selectors.getWorkspaceType)(state)
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */

var mapDispatchToProps = {
  addWindow: actions.addWindow
};
/**
 * @param theme
 */

var styles = function styles(theme) {
  return {
    workspaceViewport: {
      bottom: 0,
      left: 0,
      margin: 0,
      overflow: 'hidden',
      position: 'absolute',
      right: 0,
      top: 0
    },
    workspaceWithControlPanel: {
      paddingTop: 74
    },
    // injection order matters here
    // eslint-disable-next-line sort-keys
    '@media (min-width: 600px)': {
      workspaceWithControlPanel: {
        paddingLeft: 68,
        paddingTop: 0
      }
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('Workspace') // further HOC go here
);
var _default = exports.default = enhance(_Workspace.Workspace);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/Workspace":"../node_modules/mirador/dist/es/src/components/Workspace.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js"}],"../node_modules/mirador/dist/es/src/components/ManifestForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManifestForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));
var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));
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
 * Provides a form for user input of a manifest url
 * @prop {Function} fetchManifest
 */

var ManifestForm = exports.ManifestForm = /*#__PURE__*/function (_Component) {
  _inherits(ManifestForm, _Component);
  var _super = _createSuper(ManifestForm);

  /**
   * constructor -
   */
  function ManifestForm(props) {
    var _this;
    _classCallCheck(this, ManifestForm);
    _this = _super.call(this, props);
    _this.state = {
      formValue: ''
    };
    _this.formSubmit = _this.formSubmit.bind(_assertThisInitialized(_this));
    _this.handleCancel = _this.handleCancel.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Reset the form state
   */

  _createClass(ManifestForm, [{
    key: "handleCancel",
    value: function handleCancel() {
      var onCancel = this.props.onCancel;
      onCancel();
      this.setState({
        formValue: ''
      });
    }
    /**
     * handleInputChange - sets state based on input change.
     * @param  {Event} event
     * @private
     */
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var that = this;
      event.preventDefault();
      that.setState({
        formValue: event.target.value
      });
    }
    /**
     * formSubmit - triggers manifest update and sets lastRequested
     * @param  {Event} event
     * @private
     */
  }, {
    key: "formSubmit",
    value: function formSubmit(event) {
      var _this$props = this.props,
        addResource = _this$props.addResource,
        onSubmit = _this$props.onSubmit;
      var formValue = this.state.formValue;
      event.preventDefault();
      onSubmit();
      addResource(formValue);
      this.setState({
        formValue: ''
      });
    }
    /**
     * render
     * @return {String} - HTML markup for the component
     */
  }, {
    key: "render",
    value: function render() {
      var formValue = this.state.formValue;
      var _this$props2 = this.props,
        addResourcesOpen = _this$props2.addResourcesOpen,
        classes = _this$props2.classes,
        onCancel = _this$props2.onCancel,
        t = _this$props2.t;
      if (!addResourcesOpen) return null;
      return /*#__PURE__*/_react.default.createElement("form", {
        onSubmit: this.formSubmit
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        container: true,
        spacing: 2
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        sm: 8,
        md: 9
      }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
        autoFocus: true,
        fullWidth: true,
        value: formValue,
        id: "manifestURL",
        type: "text",
        onChange: this.handleInputChange,
        variant: "filled",
        label: t('addManifestUrl'),
        helperText: t('addManifestUrlHelp'),
        InputLabelProps: {
          shrink: true
        },
        InputProps: {
          className: classes.input
        }
      })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        sm: 4,
        md: 3,
        className: classes.buttons
      }, onCancel && /*#__PURE__*/_react.default.createElement(_Button.default, {
        onClick: this.handleCancel
      }, t('cancel')), /*#__PURE__*/_react.default.createElement(_Button.default, {
        id: "fetchBtn",
        type: "submit",
        variant: "contained",
        color: "primary"
      }, t('fetchManifest')))));
    }
  }]);
  return ManifestForm;
}(_react.Component);
ManifestForm.defaultProps = {
  classes: {},
  onCancel: null,
  onSubmit: function onSubmit() {},
  t: function t(key) {
    return key;
  }
};
},{"react":"../node_modules/react/index.js","@material-ui/core/Button":"../node_modules/@material-ui/core/esm/Button/index.js","@material-ui/core/Grid":"../node_modules/@material-ui/core/esm/Grid/index.js","@material-ui/core/TextField":"../node_modules/@material-ui/core/esm/TextField/index.js"}],"../node_modules/mirador/dist/es/src/containers/ManifestForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _core = require("@material-ui/core");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _ManifestForm = require("../components/ManifestForm");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestForm
 * @private
 */

var mapDispatchToProps = {
  addResource: actions.addResource
};
/**
 *
 * @param theme
 */

var styles = function styles(theme) {
  return {
    buttons: _defineProperty({
      textAlign: 'right'
    }, theme.breakpoints.up('sm'), {
      textAlign: 'inherit'
    }),
    input: _objectSpread({}, theme.typography.body1)
  };
};
var enhance = (0, _redux.compose)((0, _core.withStyles)(styles), (0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(null, mapDispatchToProps), (0, _withPlugins.withPlugins)('ManifestForm'));
var _default = exports.default = enhance(_ManifestForm.ManifestForm);
},{"react-redux":"../node_modules/react-redux/es/index.js","redux":"../node_modules/redux/es/redux.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../components/ManifestForm":"../node_modules/mirador/dist/es/src/components/ManifestForm.js"}],"../node_modules/mirador/dist/es/src/components/ManifestListItemError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManifestListItemError = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _ErrorOutlineSharp = _interopRequireDefault(require("@material-ui/icons/ErrorOutlineSharp"));
var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
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
 * ManifestListItemError renders a component displaying a
 * message to the user about a problem loading a manifest
*/

var ManifestListItemError = exports.ManifestListItemError = /*#__PURE__*/function (_Component) {
  _inherits(ManifestListItemError, _Component);
  var _super = _createSuper(ManifestListItemError);
  function ManifestListItemError() {
    _classCallCheck(this, ManifestListItemError);
    return _super.apply(this, arguments);
  }
  _createClass(ManifestListItemError, [{
    key: "render",
    value:
    /**
     * Returns the rendered component
    */
    function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        manifestId = _this$props.manifestId,
        onDismissClick = _this$props.onDismissClick,
        onTryAgainClick = _this$props.onTryAgainClick,
        t = _this$props.t;
      return /*#__PURE__*/_react.default.createElement(_Grid.default, {
        container: true
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        container: true
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        container: true,
        item: true,
        xs: 12,
        sm: 6
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        xs: 4,
        sm: 3
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        container: true,
        justify: "center"
      }, /*#__PURE__*/_react.default.createElement(_ErrorOutlineSharp.default, {
        className: classes.errorIcon
      }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        xs: 8,
        sm: 9
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, null, t('manifestError')), /*#__PURE__*/_react.default.createElement(_Typography.default, {
        className: classes.manifestIdText
      }, manifestId)))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        container: true
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        container: true,
        item: true,
        xs: 12,
        sm: 6,
        justify: "flex-end"
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true
      }, /*#__PURE__*/_react.default.createElement(_Button.default, {
        onClick: function onClick() {
          onDismissClick(manifestId);
        }
      }, t('dismiss')), /*#__PURE__*/_react.default.createElement(_Button.default, {
        onClick: function onClick() {
          onTryAgainClick(manifestId);
        }
      }, t('tryAgain'))))));
    }
  }]);
  return ManifestListItemError;
}(_react.Component);
},{"react":"../node_modules/react/index.js","@material-ui/core/Button":"../node_modules/@material-ui/core/esm/Button/index.js","@material-ui/icons/ErrorOutlineSharp":"../node_modules/@material-ui/icons/ErrorOutlineSharp.js","@material-ui/core/Grid":"../node_modules/@material-ui/core/esm/Grid/index.js","@material-ui/core/Typography":"../node_modules/@material-ui/core/esm/Typography/index.js"}],"../node_modules/mirador/dist/es/src/containers/ManifestListItemError.js":[function(require,module,exports) {
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
var _actions = require("../state/actions");
var _ManifestListItemError = require("../components/ManifestListItemError");
/** */

var mapDispatchToProps = {
  onDismissClick: _actions.removeResource,
  onTryAgainClick: _actions.fetchManifest
};
/**
 *
 * @param theme
 * @returns {{manifestIdText: {wordBreak: string},
 * errorIcon: {color: string, width: string, height: string}}}
 */

var styles = function styles(theme) {
  return {
    errorIcon: {
      color: theme.palette.error.main,
      height: '2rem',
      width: '2rem'
    },
    manifestIdText: {
      wordBreak: 'break-all'
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(null, mapDispatchToProps), (0, _withPlugins.withPlugins)('ManifestListItemError'));
var _default = exports.default = enhance(_ManifestListItemError.ManifestListItemError);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../components/ManifestListItemError":"../node_modules/mirador/dist/es/src/components/ManifestListItemError.js"}],"../node_modules/mirador/dist/es/src/components/ManifestListItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManifestListItem = void 0;
var _react = _interopRequireDefault(require("react"));
var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));
var _ButtonBase = _interopRequireDefault(require("@material-ui/core/ButtonBase"));
var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _Skeleton = _interopRequireDefault(require("@material-ui/lab/Skeleton"));
var _reactImage = require("react-image");
var _ManifestListItemError = _interopRequireDefault(require("../containers/ManifestListItemError"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
 * Represents an item in a list of currently-loaded or loading manifests
 * @param {object} props
 * @param {object} [props.manifest = string]
 */

/** */

var ManifestListItem = exports.ManifestListItem = /*#__PURE__*/function (_React$Component) {
  _inherits(ManifestListItem, _React$Component);
  var _super = _createSuper(ManifestListItem);

  /** */
  function ManifestListItem(props) {
    var _this;
    _classCallCheck(this, ManifestListItem);
    _this = _super.call(this, props);
    _this.handleOpenButtonClick = _this.handleOpenButtonClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */

  _createClass(ManifestListItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        fetchManifest = _this$props.fetchManifest,
        manifestId = _this$props.manifestId,
        ready = _this$props.ready,
        isFetching = _this$props.isFetching,
        error = _this$props.error,
        provider = _this$props.provider;
      if (!ready && !error && !isFetching && provider !== 'file') fetchManifest(manifestId);
    }
    /**
     * Handling open button click
     */
  }, {
    key: "handleOpenButtonClick",
    value: function handleOpenButtonClick() {
      var _this$props2 = this.props,
        addWindow = _this$props2.addWindow,
        handleClose = _this$props2.handleClose,
        manifestId = _this$props2.manifestId;
      addWindow({
        manifestId: manifestId
      });
      handleClose();
    }
    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        active = _this$props3.active,
        buttonRef = _this$props3.buttonRef,
        manifestId = _this$props3.manifestId,
        ready = _this$props3.ready,
        title = _this$props3.title,
        thumbnail = _this$props3.thumbnail,
        manifestLogo = _this$props3.manifestLogo,
        size = _this$props3.size,
        classes = _this$props3.classes,
        provider = _this$props3.provider,
        t = _this$props3.t,
        error = _this$props3.error,
        isCollection = _this$props3.isCollection,
        isMultipart = _this$props3.isMultipart;
      var placeholder = /*#__PURE__*/_react.default.createElement(_Grid.default, {
        container: true,
        className: (0, _cssNs.default)('manifest-list-item'),
        spacing: 2
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        xs: 3,
        sm: 2
      }, /*#__PURE__*/_react.default.createElement(_Skeleton.default, {
        className: classes.placeholder,
        variant: "rect",
        height: 80,
        width: 120
      })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        xs: 9,
        sm: 6
      }, /*#__PURE__*/_react.default.createElement(_Skeleton.default, {
        className: classes.placeholder,
        variant: "text"
      })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        xs: 8,
        sm: 2
      }, /*#__PURE__*/_react.default.createElement(_Skeleton.default, {
        className: classes.placeholder,
        variant: "text"
      }), /*#__PURE__*/_react.default.createElement(_Skeleton.default, {
        className: classes.placeholder,
        variant: "text"
      })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        xs: 4,
        sm: 2
      }, /*#__PURE__*/_react.default.createElement(_Skeleton.default, {
        className: classes.placeholder,
        variant: "rect",
        height: 60,
        width: 60
      })));
      if (error) {
        return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
          divider: true,
          className: classes.root,
          "data-manifestid": manifestId
        }, /*#__PURE__*/_react.default.createElement(_ManifestListItemError.default, {
          manifestId: manifestId
        }));
      }
      return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
        divider: true,
        className: [classes.root, active ? classes.active : ''].join(' '),
        "data-manifestid": manifestId
      }, ready ? /*#__PURE__*/_react.default.createElement(_Grid.default, {
        container: true,
        className: (0, _cssNs.default)('manifest-list-item'),
        spacing: 2
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        sm: 6,
        className: classes.buttonGrid
      }, /*#__PURE__*/_react.default.createElement(_ButtonBase.default, {
        ref: buttonRef,
        className: (0, _cssNs.default)('manifest-list-item-title'),
        style: {
          width: '100%'
        },
        onClick: this.handleOpenButtonClick
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        container: true,
        spacing: 2,
        className: classes.label,
        component: "span"
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        xs: 4,
        sm: 3,
        component: "span"
      }, thumbnail ? /*#__PURE__*/_react.default.createElement(_reactImage.Img, {
        className: [classes.thumbnail, (0, _cssNs.default)('manifest-list-item-thumb')].join(' '),
        src: [thumbnail],
        alt: "",
        height: "80",
        unloader: /*#__PURE__*/_react.default.createElement(_Skeleton.default, {
          variant: "rect",
          animation: false,
          className: classes.placeholder,
          height: 80,
          width: 120
        })
      }) : /*#__PURE__*/_react.default.createElement(_Skeleton.default, {
        className: classes.placeholder,
        variant: "rect",
        height: 80,
        width: 120
      })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        xs: 8,
        sm: 9,
        component: "span"
      }, isCollection && /*#__PURE__*/_react.default.createElement(_Typography.default, {
        component: "div",
        variant: "overline"
      }, t(isMultipart ? 'multipartCollection' : 'collection')), /*#__PURE__*/_react.default.createElement(_Typography.default, {
        component: "span",
        variant: "h6"
      }, title || manifestId))))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        xs: 8,
        sm: 4
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        className: (0, _cssNs.default)('manifest-list-item-provider')
      }, provider), /*#__PURE__*/_react.default.createElement(_Typography.default, null, t('numItems', {
        count: size,
        number: size
      }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        xs: 4,
        sm: 2
      }, manifestLogo && /*#__PURE__*/_react.default.createElement(_reactImage.Img, {
        src: [manifestLogo],
        alt: "",
        role: "presentation",
        className: classes.logo,
        unloader: /*#__PURE__*/_react.default.createElement(_Skeleton.default, {
          variant: "rect",
          animation: false,
          className: classes.placeholder,
          height: 60,
          width: 60
        })
      }))) : placeholder);
    }
  }]);
  return ManifestListItem;
}(_react.default.Component);
ManifestListItem.defaultProps = {
  active: false,
  buttonRef: undefined,
  classes: {},
  error: null,
  handleClose: function handleClose() {},
  isCollection: false,
  isFetching: false,
  isMultipart: false,
  manifestLogo: null,
  provider: null,
  ready: false,
  size: 0,
  t: function t(key) {
    return key;
  },
  thumbnail: null,
  title: null
};
},{"react":"../node_modules/react/index.js","@material-ui/core/ListItem":"../node_modules/@material-ui/core/esm/ListItem/index.js","@material-ui/core/ButtonBase":"../node_modules/@material-ui/core/esm/ButtonBase/index.js","@material-ui/core/Grid":"../node_modules/@material-ui/core/esm/Grid/index.js","@material-ui/core/Typography":"../node_modules/@material-ui/core/esm/Typography/index.js","@material-ui/lab/Skeleton":"../node_modules/@material-ui/lab/esm/Skeleton/index.js","react-image":"../node_modules/react-image/umd/index.js","../containers/ManifestListItemError":"../node_modules/mirador/dist/es/src/containers/ManifestListItemError.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js"}],"../node_modules/mirador/dist/es/src/containers/ManifestListItem.js":[function(require,module,exports) {
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
var _selectors = require("../state/selectors");
var actions = _interopRequireWildcard(require("../state/actions"));
var _ManifestListItem = require("../components/ManifestListItem");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
/** */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var manifestId = _ref.manifestId,
    provider = _ref.provider;
  var manifest = (0, _selectors.getManifest)(state, {
    manifestId: manifestId
  }) || {};
  var manifesto = (0, _selectors.getManifestoInstance)(state, {
    manifestId: manifestId
  });
  var isCollection = (manifesto || {
    isCollection: function isCollection() {
      return false;
    }
  }).isCollection();
  var size = isCollection ? manifesto.getTotalItems() : (0, _selectors.getCanvases)(state, {
    manifestId: manifestId
  }).length;
  return {
    active: (0, _selectors.getWindowManifests)(state).includes(manifestId),
    error: manifest.error,
    isCollection: isCollection,
    isFetching: manifest.isFetching,
    isMultipart: isCollection && (0, _selectors.getSequenceBehaviors)(state, {
      manifestId: manifestId
    }).includes('multi-part'),
    manifestLogo: (0, _selectors.getManifestLogo)(state, {
      manifestId: manifestId
    }),
    provider: provider || (0, _selectors.getManifestProvider)(state, {
      manifestId: manifestId
    }),
    ready: !!manifest.json,
    size: size,
    thumbnail: (0, _selectors.getManifestThumbnail)(state, {
      manifestId: manifestId
    }),
    title: (0, _selectors.getManifestTitle)(state, {
      manifestId: manifestId
    })
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */

var mapDispatchToProps = {
  addWindow: actions.addWindow,
  fetchManifest: actions.fetchManifest
};
/**
 *
 * @param theme
 * @returns {{root: {}, label: {textAlign: string, textTransform: string}}}
 */

var styles = function styles(theme) {
  return {
    active: {},
    buttonGrid: {},
    label: {
      textAlign: 'left',
      textTransform: 'initial'
    },
    logo: {
      height: '2.5rem',
      maxWidth: '100%',
      objectFit: 'contain',
      paddingRight: 8
    },
    placeholder: {
      backgroundColor: theme.palette.grey[300]
    },
    root: _objectSpread(_objectSpread({}, theme.mixins.gutters()), {}, {
      '&$active': {
        borderLeft: "4px solid ".concat(theme.palette.primary.main)
      },
      '&:hover,&:focus-within': {
        '&$active': {
          borderLeft: "4px solid ".concat(theme.palette.primary.main)
        },
        backgroundColor: theme.palette.action.hover,
        borderLeft: "4px solid ".concat(theme.palette.action.hover)
      },
      borderLeft: '4px solid transparent'
    }),
    thumbnail: {
      maxWidth: '100%',
      objectFit: 'contain'
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('ManifestListItem'));
var _default = exports.default = enhance(_ManifestListItem.ManifestListItem);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../components/ManifestListItem":"../node_modules/mirador/dist/es/src/components/ManifestListItem.js"}],"../node_modules/mirador/dist/es/src/components/WorkspaceAdd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceAdd = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _AddSharp = _interopRequireDefault(require("@material-ui/icons/AddSharp"));
var _ExpandMoreSharp = _interopRequireDefault(require("@material-ui/icons/ExpandMoreSharp"));
var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));
var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));
var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));
var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));
var _List = _interopRequireDefault(require("@material-ui/core/List"));
var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));
var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _ManifestForm = _interopRequireDefault(require("../containers/ManifestForm"));
var _ManifestListItem = _interopRequireDefault(require("../containers/ManifestListItem"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
var _IIIFDropTarget = require("./IIIFDropTarget");
var _PluginHook = require("./PluginHook");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
 * An area for managing manifests and adding them to workspace
 * @memberof Workspace
 * @private
 */

var WorkspaceAdd = exports.WorkspaceAdd = /*#__PURE__*/function (_React$Component) {
  _inherits(WorkspaceAdd, _React$Component);
  var _super = _createSuper(WorkspaceAdd);

  /** */
  function WorkspaceAdd(props) {
    var _this;
    _classCallCheck(this, WorkspaceAdd);
    _this = _super.call(this, props);
    _this.state = {
      addResourcesOpen: false
    };
    _this.ref = /*#__PURE__*/_react.default.createRef();
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.setAddResourcesVisibility = _this.setAddResourcesVisibility.bind(_assertThisInitialized(_this));
    _this.handleDrop = _this.handleDrop.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */

  _createClass(WorkspaceAdd, [{
    key: "handleDrop",
    value: function handleDrop(_ref, props, monitor) {
      var manifestId = _ref.manifestId,
        manifestJson = _ref.manifestJson;
      var addResource = this.props.addResource;
      if (manifestJson) {
        addResource(manifestId, manifestJson, {
          provider: 'file'
        });
      } else {
        addResource(manifestId);
      }
      this.scrollToTop();
    }
    /** @private */
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      this.setAddResourcesVisibility(false);
      this.scrollToTop();
    }
    /**
     * @private
     */
  }, {
    key: "setAddResourcesVisibility",
    value: function setAddResourcesVisibility(bool) {
      this.setState({
        addResourcesOpen: bool
      });
    }
    /** Scroll the list back to the top */
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      if (this.ref.current) {
        var el = this.ref.current;
        el.scrollTo({
          behavior: 'smooth',
          left: 0,
          top: 0
        });
      }
    }
    /**
     * render
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        catalog = _this$props.catalog,
        setWorkspaceAddVisibility = _this$props.setWorkspaceAddVisibility,
        t = _this$props.t,
        classes = _this$props.classes;
      var addResourcesOpen = this.state.addResourcesOpen;
      var manifestList = catalog.map(function (resource, index) {
        return /*#__PURE__*/_react.default.createElement(_ManifestListItem.default, Object.assign({}, index === 0 && {
          buttonRef: function buttonRef(ref) {
            return ref && ref.focus();
          }
        }, {
          key: resource.manifestId,
          manifestId: resource.manifestId,
          provider: resource.provider,
          handleClose: function handleClose() {
            return setWorkspaceAddVisibility(false);
          }
        }));
      });
      return /*#__PURE__*/_react.default.createElement(_IIIFDropTarget.IIIFDropTarget, {
        onDrop: this.handleDrop
      }, /*#__PURE__*/_react.default.createElement("div", {
        ref: this.ref,
        className: (0, _classnames.default)((0, _cssNs.default)('workspace-add'), classes.workspaceAdd)
      }, catalog.length < 1 ? /*#__PURE__*/_react.default.createElement(_Grid.default, {
        alignItems: "center",
        container: true,
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        xs: 12,
        item: true
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "h1",
        component: "div",
        align: "center"
      }, t('emptyResourceList')))) : /*#__PURE__*/_react.default.createElement(_Paper.default, {
        className: classes.list
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "srOnly",
        component: "h1"
      }, t('miradorResources')), /*#__PURE__*/_react.default.createElement(_PluginHook.PluginHook, this.props), /*#__PURE__*/_react.default.createElement(_List.default, {
        disablePadding: true
      }, manifestList)), /*#__PURE__*/_react.default.createElement(_Fab.default, {
        variant: "extended",
        disabled: addResourcesOpen,
        className: (0, _classnames.default)(classes.fab, (0, _cssNs.default)('add-resource-button')),
        color: "primary",
        onClick: function onClick() {
          return _this2.setAddResourcesVisibility(true);
        }
      }, /*#__PURE__*/_react.default.createElement(_AddSharp.default, null), t('addResource')), /*#__PURE__*/_react.default.createElement(_Drawer.default, {
        className: (0, _classnames.default)(_defineProperty({}, classes.displayNone, !addResourcesOpen)),
        classes: {
          paper: classes.paper
        },
        variant: "persistent",
        anchor: "bottom",
        open: addResourcesOpen,
        ModalProps: {
          disablePortal: true,
          hideBackdrop: true,
          style: {
            position: 'absolute'
          }
        }
      }, /*#__PURE__*/_react.default.createElement(_Paper.default, {
        className: classes.form
      }, /*#__PURE__*/_react.default.createElement(_AppBar.default, {
        position: "absolute",
        color: "primary",
        onClick: function onClick() {
          return _this2.setAddResourcesVisibility(false);
        }
      }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
        variant: "dense"
      }, /*#__PURE__*/_react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('closeAddResourceForm'),
        className: classes.menuButton,
        color: "inherit"
      }, /*#__PURE__*/_react.default.createElement(_ExpandMoreSharp.default, null)), /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "h2",
        noWrap: true,
        color: "inherit",
        className: classes.typographyBody
      }, t('addResource')))), /*#__PURE__*/_react.default.createElement(_ManifestForm.default, {
        addResourcesOpen: addResourcesOpen,
        onSubmit: this.onSubmit,
        onCancel: function onCancel() {
          return _this2.setAddResourcesVisibility(false);
        }
      })))));
    }
  }]);
  return WorkspaceAdd;
}(_react.default.Component);
WorkspaceAdd.defaultProps = {
  addResource: function addResource() {},
  catalog: [],
  classes: {},
  t: function t(key) {
    return key;
  }
};
},{"react":"../node_modules/react/index.js","classnames":"../node_modules/classnames/index.js","@material-ui/icons/AddSharp":"../node_modules/@material-ui/icons/AddSharp.js","@material-ui/icons/ExpandMoreSharp":"../node_modules/@material-ui/icons/ExpandMoreSharp.js","@material-ui/core/AppBar":"../node_modules/@material-ui/core/esm/AppBar/index.js","@material-ui/core/Drawer":"../node_modules/@material-ui/core/esm/Drawer/index.js","@material-ui/core/Grid":"../node_modules/@material-ui/core/esm/Grid/index.js","@material-ui/core/Fab":"../node_modules/@material-ui/core/esm/Fab/index.js","@material-ui/core/List":"../node_modules/@material-ui/core/esm/List/index.js","@material-ui/core/Paper":"../node_modules/@material-ui/core/esm/Paper/index.js","@material-ui/core/Toolbar":"../node_modules/@material-ui/core/esm/Toolbar/index.js","@material-ui/core/Typography":"../node_modules/@material-ui/core/esm/Typography/index.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js","../containers/ManifestForm":"../node_modules/mirador/dist/es/src/containers/ManifestForm.js","../containers/ManifestListItem":"../node_modules/mirador/dist/es/src/containers/ManifestListItem.js","../containers/MiradorMenuButton":"../node_modules/mirador/dist/es/src/containers/MiradorMenuButton.js","./IIIFDropTarget":"../node_modules/mirador/dist/es/src/components/IIIFDropTarget.js","./PluginHook":"../node_modules/mirador/dist/es/src/components/PluginHook.js"}],"../node_modules/mirador/dist/es/src/containers/WorkspaceAdd.js":[function(require,module,exports) {
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
var _WorkspaceAdd = require("../components/WorkspaceAdd");
var _selectors = require("../state/selectors");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    catalog: (0, _selectors.getCatalog)(state)
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */

var mapDispatchToProps = {
  addResource: actions.addResource,
  setWorkspaceAddVisibility: actions.setWorkspaceAddVisibility
};
/**
 *
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: string},
 * form: {paddingBottom: number, paddingTop: number, marginTop: number},
 * fab: {bottom: number, position: string, right: number},
 * menuButton: {marginRight: number, marginLeft: number}}}
 */

var styles = function styles(theme) {
  return {
    displayNone: {
      display: 'none'
    },
    fab: {
      bottom: theme.spacing(2),
      position: 'absolute',
      right: theme.spacing(2)
    },
    form: _objectSpread(_objectSpread({}, theme.mixins.gutters()), {}, {
      left: '0',
      marginTop: 48,
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
      right: '0'
    }),
    list: {
      margin: '16px'
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    paper: _defineProperty({
      borderTop: '0',
      left: '0'
    }, theme.breakpoints.up('sm'), {
      left: '65px'
    }),
    typographyBody: {
      flexGrow: 1
    },
    workspaceAdd: {
      boxSizing: 'border-box',
      height: '100%',
      overflowX: 'hidden',
      overflowY: 'auto',
      paddingTop: 68
    },
    // injection order matters
    // eslint-disable-next-line sort-keys
    '@media (min-width: 600px)': {
      workspaceAdd: {
        paddingLeft: 68,
        paddingTop: 0
      }
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)('WorkspaceAdd'));
var _default = exports.default = enhance(_WorkspaceAdd.WorkspaceAdd);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../state/actions":"../node_modules/mirador/dist/es/src/state/actions/index.js","../components/WorkspaceAdd":"../node_modules/mirador/dist/es/src/components/WorkspaceAdd.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js"}],"../node_modules/mirador/dist/es/src/components/BackgroundPluginArea.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundPluginArea = void 0;
var _react = _interopRequireDefault(require("react"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _PluginHook = require("./PluginHook");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** invisible area where background plugins can add to */

var BackgroundPluginArea = exports.BackgroundPluginArea = function BackgroundPluginArea(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _cssNs.default)('background-plugin-area'),
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/_react.default.createElement(_PluginHook.PluginHook, props));
};
BackgroundPluginArea.defaultProps = {
  PluginComponents: []
};
},{"react":"../node_modules/react/index.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js","./PluginHook":"../node_modules/mirador/dist/es/src/components/PluginHook.js"}],"../node_modules/mirador/dist/es/src/containers/BackgroundPluginArea.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _withPlugins = require("../extend/withPlugins");
var _BackgroundPluginArea = require("../components/BackgroundPluginArea");
var _default = exports.default = (0, _withPlugins.withPlugins)('BackgroundPluginArea')(_BackgroundPluginArea.BackgroundPluginArea);
},{"../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/BackgroundPluginArea":"../node_modules/mirador/dist/es/src/components/BackgroundPluginArea.js"}],"../node_modules/mirador/dist/es/src/components/WorkspaceArea.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceArea = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _ErrorDialog = _interopRequireDefault(require("../containers/ErrorDialog"));
var _WorkspaceControlPanel = _interopRequireDefault(require("../containers/WorkspaceControlPanel"));
var _Workspace = _interopRequireDefault(require("../containers/Workspace"));
var _WorkspaceAdd = _interopRequireDefault(require("../containers/WorkspaceAdd"));
var _BackgroundPluginArea = _interopRequireDefault(require("../containers/BackgroundPluginArea"));
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
 * This is the top level Mirador component.
 * @prop {Object} manifests
 */

var WorkspaceArea = exports.WorkspaceArea = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceArea, _Component);
  var _super = _createSuper(WorkspaceArea);
  function WorkspaceArea() {
    _classCallCheck(this, WorkspaceArea);
    return _super.apply(this, arguments);
  }
  _createClass(WorkspaceArea, [{
    key: "render",
    value:
    /**
     * render
     * @return {String} - HTML markup for the component
     */
    function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        controlPanelVariant = _this$props.controlPanelVariant,
        isWorkspaceAddVisible = _this$props.isWorkspaceAddVisible,
        isWorkspaceControlPanelVisible = _this$props.isWorkspaceControlPanelVisible,
        lang = _this$props.lang,
        t = _this$props.t;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isWorkspaceControlPanelVisible && /*#__PURE__*/_react.default.createElement(_WorkspaceControlPanel.default, {
        variant: controlPanelVariant
      }), /*#__PURE__*/_react.default.createElement("main", {
        className: (0, _classnames.default)(classes.viewer, (0, _cssNs.default)('viewer')),
        lang: lang,
        "aria-label": t('workspace')
      }, isWorkspaceAddVisible ? /*#__PURE__*/_react.default.createElement(_WorkspaceAdd.default, null) : /*#__PURE__*/_react.default.createElement(_Workspace.default, null), /*#__PURE__*/_react.default.createElement(_ErrorDialog.default, null), /*#__PURE__*/_react.default.createElement(_BackgroundPluginArea.default, null)));
    }
  }]);
  return WorkspaceArea;
}(_react.Component);
WorkspaceArea.defaultProps = {
  controlPanelVariant: undefined,
  isWorkspaceAddVisible: false,
  lang: undefined
};
},{"react":"../node_modules/react/index.js","classnames":"../node_modules/classnames/index.js","../containers/ErrorDialog":"../node_modules/mirador/dist/es/src/containers/ErrorDialog.js","../containers/WorkspaceControlPanel":"../node_modules/mirador/dist/es/src/containers/WorkspaceControlPanel.js","../containers/Workspace":"../node_modules/mirador/dist/es/src/containers/Workspace.js","../containers/WorkspaceAdd":"../node_modules/mirador/dist/es/src/containers/WorkspaceAdd.js","../containers/BackgroundPluginArea":"../node_modules/mirador/dist/es/src/containers/BackgroundPluginArea.js","../config/css-ns":"../node_modules/mirador/dist/es/src/config/css-ns.js"}],"../node_modules/mirador/dist/es/src/containers/WorkspaceArea.js":[function(require,module,exports) {
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
var _WorkspaceArea = require("../components/WorkspaceArea");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - to hook up connect
 * @memberof App
 * @private
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    controlPanelVariant: (0, _selectors.getWorkspace)(state).isWorkspaceAddVisible || (0, _selectors.getWindowIds)(state).length > 0 ? undefined : 'wide',
    isWorkspaceAddVisible: (0, _selectors.getWorkspace)(state).isWorkspaceAddVisible,
    isWorkspaceControlPanelVisible: (0, _selectors.getConfig)(state).workspaceControlPanel.enabled,
    lang: (0, _selectors.getConfig)(state).language
  };
};
/**
 *
 * @param theme
 * @returns {{background: {background: string}}}
 */

var styles = function styles(theme) {
  var getBackgroundColor = theme.palette.type === 'light' ? _styles.darken : _styles.lighten;
  return {
    viewer: {
      background: getBackgroundColor(theme.palette.shades.light, 0.1),
      bottom: 0,
      left: 0,
      overflow: 'hidden',
      position: 'absolute',
      right: 0,
      top: 0
    }
  };
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps), (0, _withPlugins.withPlugins)('WorkspaceArea'));
var _default = exports.default = enhance(_WorkspaceArea.WorkspaceArea);
},{"redux":"../node_modules/redux/es/redux.js","react-redux":"../node_modules/react-redux/es/index.js","react-i18next":"../node_modules/react-i18next/dist/es/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","../extend/withPlugins":"../node_modules/mirador/dist/es/src/extend/withPlugins.js","../components/WorkspaceArea":"../node_modules/mirador/dist/es/src/components/WorkspaceArea.js","../state/selectors":"../node_modules/mirador/dist/es/src/state/selectors/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]).then(function(){require("../node_modules/mirador/dist/es/src/containers/WorkspaceArea.js");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/WorkspaceArea.d99190fc.js.map