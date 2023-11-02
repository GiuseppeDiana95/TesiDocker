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
})({"../node_modules/strophe.js/node_modules/ws/browser.js":[function(require,module,exports) {
'use strict';

module.exports = function () {
  throw new Error('ws does not work in the browser. Browser clients must use the native ' + 'WebSocket object');
};
},{}],"../node_modules/@xmldom/xmldom/lib/conventions.js":[function(require,module,exports) {
'use strict';

/**
 * Ponyfill for `Array.prototype.find` which is only available in ES6 runtimes.
 *
 * Works with anything that has a `length` property and index access properties, including NodeList.
 *
 * @template {unknown} T
 * @param {Array<T> | ({length:number, [number]: T})} list
 * @param {function (item: T, index: number, list:Array<T> | ({length:number, [number]: T})):boolean} predicate
 * @param {Partial<Pick<ArrayConstructor['prototype'], 'find'>>?} ac `Array.prototype` by default,
 * 				allows injecting a custom implementation in tests
 * @returns {T | undefined}
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * @see https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.find
 */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function find(list, predicate, ac) {
  if (ac === undefined) {
    ac = Array.prototype;
  }
  if (list && typeof ac.find === 'function') {
    return ac.find.call(list, predicate);
  }
  for (var i = 0; i < list.length; i++) {
    if (Object.prototype.hasOwnProperty.call(list, i)) {
      var item = list[i];
      if (predicate.call(undefined, item, i, list)) {
        return item;
      }
    }
  }
}

/**
 * "Shallow freezes" an object to render it immutable.
 * Uses `Object.freeze` if available,
 * otherwise the immutability is only in the type.
 *
 * Is used to create "enum like" objects.
 *
 * @template T
 * @param {T} object the object to freeze
 * @param {Pick<ObjectConstructor, 'freeze'> = Object} oc `Object` by default,
 * 				allows to inject custom object constructor for tests
 * @returns {Readonly<T>}
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 */
function freeze(object, oc) {
  if (oc === undefined) {
    oc = Object;
  }
  return oc && typeof oc.freeze === 'function' ? oc.freeze(object) : object;
}

/**
 * Since we can not rely on `Object.assign` we provide a simplified version
 * that is sufficient for our needs.
 *
 * @param {Object} target
 * @param {Object | null | undefined} source
 *
 * @returns {Object} target
 * @throws TypeError if target is not an object
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @see https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.assign
 */
function assign(target, source) {
  if (target === null || _typeof(target) !== 'object') {
    throw new TypeError('target is not an object');
  }
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
  return target;
}

/**
 * All mime types that are allowed as input to `DOMParser.parseFromString`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString#Argument02 MDN
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#domparsersupportedtype WHATWG HTML Spec
 * @see DOMParser.prototype.parseFromString
 */
var MIME_TYPE = freeze({
  /**
   * `text/html`, the only mime type that triggers treating an XML document as HTML.
   *
   * @see DOMParser.SupportedType.isHTML
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
   */
  HTML: 'text/html',
  /**
   * Helper method to check a mime type if it indicates an HTML document
   *
   * @param {string} [value]
   * @returns {boolean}
   *
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
  isHTML: function isHTML(value) {
    return value === MIME_TYPE.HTML;
  },
  /**
   * `application/xml`, the standard mime type for XML documents.
   *
   * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
   * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_APPLICATION: 'application/xml',
  /**
   * `text/html`, an alias for `application/xml`.
   *
   * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
   * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_TEXT: 'text/xml',
  /**
   * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
   * but is parsed as an XML document.
   *
   * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
   * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
   */
  XML_XHTML_APPLICATION: 'application/xhtml+xml',
  /**
   * `image/svg+xml`,
   *
   * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
   * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
   * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
   */
  XML_SVG_IMAGE: 'image/svg+xml'
});

/**
 * Namespaces that are used in this code base.
 *
 * @see http://www.w3.org/TR/REC-xml-names
 */
var NAMESPACE = freeze({
  /**
   * The XHTML namespace.
   *
   * @see http://www.w3.org/1999/xhtml
   */
  HTML: 'http://www.w3.org/1999/xhtml',
  /**
   * Checks if `uri` equals `NAMESPACE.HTML`.
   *
   * @param {string} [uri]
   *
   * @see NAMESPACE.HTML
   */
  isHTML: function isHTML(uri) {
    return uri === NAMESPACE.HTML;
  },
  /**
   * The SVG namespace.
   *
   * @see http://www.w3.org/2000/svg
   */
  SVG: 'http://www.w3.org/2000/svg',
  /**
   * The `xml:` namespace.
   *
   * @see http://www.w3.org/XML/1998/namespace
   */
  XML: 'http://www.w3.org/XML/1998/namespace',
  /**
   * The `xmlns:` namespace
   *
   * @see https://www.w3.org/2000/xmlns/
   */
  XMLNS: 'http://www.w3.org/2000/xmlns/'
});
exports.assign = assign;
exports.find = find;
exports.freeze = freeze;
exports.MIME_TYPE = MIME_TYPE;
exports.NAMESPACE = NAMESPACE;
},{}],"../node_modules/@xmldom/xmldom/lib/dom.js":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var conventions = require("./conventions");
var find = conventions.find;
var NAMESPACE = conventions.NAMESPACE;

/**
 * A prerequisite for `[].filter`, to drop elements that are empty
 * @param {string} input
 * @returns {boolean}
 */
function notEmptyString(input) {
  return input !== '';
}
/**
 * @see https://infra.spec.whatwg.org/#split-on-ascii-whitespace
 * @see https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * @param {string} input
 * @returns {string[]} (can be empty)
 */
function splitOnASCIIWhitespace(input) {
  // U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, U+0020 SPACE
  return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
}

/**
 * Adds element as a key to current if it is not already present.
 *
 * @param {Record<string, boolean | undefined>} current
 * @param {string} element
 * @returns {Record<string, boolean | undefined>}
 */
function orderedSetReducer(current, element) {
  if (!current.hasOwnProperty(element)) {
    current[element] = true;
  }
  return current;
}

/**
 * @see https://infra.spec.whatwg.org/#ordered-set
 * @param {string} input
 * @returns {string[]}
 */
function toOrderedSet(input) {
  if (!input) return [];
  var list = splitOnASCIIWhitespace(input);
  return Object.keys(list.reduce(orderedSetReducer, {}));
}

/**
 * Uses `list.indexOf` to implement something like `Array.prototype.includes`,
 * which we can not rely on being available.
 *
 * @param {any[]} list
 * @returns {function(any): boolean}
 */
function arrayIncludes(list) {
  return function (element) {
    return list && list.indexOf(element) !== -1;
  };
}
function copy(src, dest) {
  for (var p in src) {
    if (Object.prototype.hasOwnProperty.call(src, p)) {
      dest[p] = src[p];
    }
  }
}

/**
^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
 */
function _extends(Class, Super) {
  var pt = Class.prototype;
  if (!(pt instanceof Super)) {
    function t() {}
    ;
    t.prototype = Super.prototype;
    t = new t();
    copy(pt, t);
    Class.prototype = pt = t;
  }
  if (pt.constructor != Class) {
    if (typeof Class != 'function') {
      console.error("unknown Class:" + Class);
    }
    pt.constructor = Class;
  }
}

// Node Types
var NodeType = {};
var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
var TEXT_NODE = NodeType.TEXT_NODE = 3;
var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
var NOTATION_NODE = NodeType.NOTATION_NODE = 12;

// ExceptionCode
var ExceptionCode = {};
var ExceptionMessage = {};
var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
//level2
var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);

/**
 * DOM Level 2
 * Object DOMException
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
 */
function DOMException(code, message) {
  if (message instanceof Error) {
    var error = message;
  } else {
    error = this;
    Error.call(this, ExceptionMessage[code]);
    this.message = ExceptionMessage[code];
    if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
  }
  error.code = code;
  if (message) this.message = this.message + ": " + message;
  return error;
}
;
DOMException.prototype = Error.prototype;
copy(ExceptionCode, DOMException);

/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
 * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
 * The items in the NodeList are accessible via an integral index, starting from 0.
 */
function NodeList() {}
;
NodeList.prototype = {
  /**
   * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
   * @standard level1
   */
  length: 0,
  /**
   * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
   * @standard level1
   * @param index  unsigned long
   *   Index into the collection.
   * @return Node
   * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
   */
  item: function item(index) {
    return this[index] || null;
  },
  toString: function toString(isHTML, nodeFilter) {
    for (var buf = [], i = 0; i < this.length; i++) {
      serializeToString(this[i], buf, isHTML, nodeFilter);
    }
    return buf.join('');
  },
  /**
   * @private
   * @param {function (Node):boolean} predicate
   * @returns {Node[]}
   */
  filter: function filter(predicate) {
    return Array.prototype.filter.call(this, predicate);
  },
  /**
   * @private
   * @param {Node} item
   * @returns {number}
   */
  indexOf: function indexOf(item) {
    return Array.prototype.indexOf.call(this, item);
  }
};
function LiveNodeList(node, refresh) {
  this._node = node;
  this._refresh = refresh;
  _updateLiveList(this);
}
function _updateLiveList(list) {
  var inc = list._node._inc || list._node.ownerDocument._inc;
  if (list._inc != inc) {
    var ls = list._refresh(list._node);
    //console.log(ls.length)
    __set__(list, 'length', ls.length);
    copy(ls, list);
    list._inc = inc;
  }
}
LiveNodeList.prototype.item = function (i) {
  _updateLiveList(this);
  return this[i];
};
_extends(LiveNodeList, NodeList);

/**
 * Objects implementing the NamedNodeMap interface are used
 * to represent collections of nodes that can be accessed by name.
 * Note that NamedNodeMap does not inherit from NodeList;
 * NamedNodeMaps are not maintained in any particular order.
 * Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index,
 * but this is simply to allow convenient enumeration of the contents of a NamedNodeMap,
 * and does not imply that the DOM specifies an order to these Nodes.
 * NamedNodeMap objects in the DOM are live.
 * used for attributes or DocumentType entities
 */
function NamedNodeMap() {}
;
function _findNodeIndex(list, node) {
  var i = list.length;
  while (i--) {
    if (list[i] === node) {
      return i;
    }
  }
}
function _addNamedNode(el, list, newAttr, oldAttr) {
  if (oldAttr) {
    list[_findNodeIndex(list, oldAttr)] = newAttr;
  } else {
    list[list.length++] = newAttr;
  }
  if (el) {
    newAttr.ownerElement = el;
    var doc = el.ownerDocument;
    if (doc) {
      oldAttr && _onRemoveAttribute(doc, el, oldAttr);
      _onAddAttribute(doc, el, newAttr);
    }
  }
}
function _removeNamedNode(el, list, attr) {
  //console.log('remove attr:'+attr)
  var i = _findNodeIndex(list, attr);
  if (i >= 0) {
    var lastIndex = list.length - 1;
    while (i < lastIndex) {
      list[i] = list[++i];
    }
    list.length = lastIndex;
    if (el) {
      var doc = el.ownerDocument;
      if (doc) {
        _onRemoveAttribute(doc, el, attr);
        attr.ownerElement = null;
      }
    }
  } else {
    throw new DOMException(NOT_FOUND_ERR, new Error(el.tagName + '@' + attr));
  }
}
NamedNodeMap.prototype = {
  length: 0,
  item: NodeList.prototype.item,
  getNamedItem: function getNamedItem(key) {
    //		if(key.indexOf(':')>0 || key == 'xmlns'){
    //			return null;
    //		}
    //console.log()
    var i = this.length;
    while (i--) {
      var attr = this[i];
      //console.log(attr.nodeName,key)
      if (attr.nodeName == key) {
        return attr;
      }
    }
  },
  setNamedItem: function setNamedItem(attr) {
    var el = attr.ownerElement;
    if (el && el != this._ownerElement) {
      throw new DOMException(INUSE_ATTRIBUTE_ERR);
    }
    var oldAttr = this.getNamedItem(attr.nodeName);
    _addNamedNode(this._ownerElement, this, attr, oldAttr);
    return oldAttr;
  },
  /* returns Node */
  setNamedItemNS: function setNamedItemNS(attr) {
    // raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
    var el = attr.ownerElement,
      oldAttr;
    if (el && el != this._ownerElement) {
      throw new DOMException(INUSE_ATTRIBUTE_ERR);
    }
    oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
    _addNamedNode(this._ownerElement, this, attr, oldAttr);
    return oldAttr;
  },
  /* returns Node */
  removeNamedItem: function removeNamedItem(key) {
    var attr = this.getNamedItem(key);
    _removeNamedNode(this._ownerElement, this, attr);
    return attr;
  },
  // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR

  //for level2
  removeNamedItemNS: function removeNamedItemNS(namespaceURI, localName) {
    var attr = this.getNamedItemNS(namespaceURI, localName);
    _removeNamedNode(this._ownerElement, this, attr);
    return attr;
  },
  getNamedItemNS: function getNamedItemNS(namespaceURI, localName) {
    var i = this.length;
    while (i--) {
      var node = this[i];
      if (node.localName == localName && node.namespaceURI == namespaceURI) {
        return node;
      }
    }
    return null;
  }
};

/**
 * The DOMImplementation interface represents an object providing methods
 * which are not dependent on any particular document.
 * Such an object is returned by the `Document.implementation` property.
 *
 * __The individual methods describe the differences compared to the specs.__
 *
 * @constructor
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation MDN
 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490 DOM Level 1 Core (Initial)
 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490 DOM Level 2 Core
 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490 DOM Level 3 Core
 * @see https://dom.spec.whatwg.org/#domimplementation DOM Living Standard
 */
function DOMImplementation() {}
DOMImplementation.prototype = {
  /**
   * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
   * The different implementations fairly diverged in what kind of features were reported.
   * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
   *
   * @deprecated It is deprecated and modern browsers return true in all cases.
   *
   * @param {string} feature
   * @param {string} [version]
   * @returns {boolean} always true
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
   * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
   */
  hasFeature: function hasFeature(feature, version) {
    return true;
  },
  /**
   * Creates an XML Document object of the specified type with its document element.
   *
   * __It behaves slightly different from the description in the living standard__:
   * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
   * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string|null} namespaceURI
   * @param {string} qualifiedName
   * @param {DocumentType=null} doctype
   * @returns {Document}
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocument: function createDocument(namespaceURI, qualifiedName, doctype) {
    var doc = new Document();
    doc.implementation = this;
    doc.childNodes = new NodeList();
    doc.doctype = doctype || null;
    if (doctype) {
      doc.appendChild(doctype);
    }
    if (qualifiedName) {
      var root = doc.createElementNS(namespaceURI, qualifiedName);
      doc.appendChild(root);
    }
    return doc;
  },
  /**
   * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
   *
   * __This behavior is slightly different from the in the specs__:
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string} qualifiedName
   * @param {string} [publicId]
   * @param {string} [systemId]
   * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
   * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocumentType: function createDocumentType(qualifiedName, publicId, systemId) {
    var node = new DocumentType();
    node.name = qualifiedName;
    node.nodeName = qualifiedName;
    node.publicId = publicId || '';
    node.systemId = systemId || '';
    return node;
  }
};

/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
 */

function Node() {}
;
Node.prototype = {
  firstChild: null,
  lastChild: null,
  previousSibling: null,
  nextSibling: null,
  attributes: null,
  parentNode: null,
  childNodes: null,
  ownerDocument: null,
  nodeValue: null,
  namespaceURI: null,
  prefix: null,
  localName: null,
  // Modified in DOM Level 2:
  insertBefore: function insertBefore(newChild, refChild) {
    //raises
    return _insertBefore(this, newChild, refChild);
  },
  replaceChild: function replaceChild(newChild, oldChild) {
    //raises
    _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
    if (oldChild) {
      this.removeChild(oldChild);
    }
  },
  removeChild: function removeChild(oldChild) {
    return _removeChild(this, oldChild);
  },
  appendChild: function appendChild(newChild) {
    return this.insertBefore(newChild, null);
  },
  hasChildNodes: function hasChildNodes() {
    return this.firstChild != null;
  },
  cloneNode: function cloneNode(deep) {
    return _cloneNode(this.ownerDocument || this, this, deep);
  },
  // Modified in DOM Level 2:
  normalize: function normalize() {
    var child = this.firstChild;
    while (child) {
      var next = child.nextSibling;
      if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
        this.removeChild(next);
        child.appendData(next.data);
      } else {
        child.normalize();
        child = next;
      }
    }
  },
  // Introduced in DOM Level 2:
  isSupported: function isSupported(feature, version) {
    return this.ownerDocument.implementation.hasFeature(feature, version);
  },
  // Introduced in DOM Level 2:
  hasAttributes: function hasAttributes() {
    return this.attributes.length > 0;
  },
  /**
   * Look up the prefix associated to the given namespace URI, starting from this node.
   * **The default namespace declarations are ignored by this method.**
   * See Namespace Prefix Lookup for details on the algorithm used by this method.
   *
   * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
   *
   * @param {string | null} namespaceURI
   * @returns {string | null}
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
   * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
   * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
   * @see https://github.com/xmldom/xmldom/issues/322
   */
  lookupPrefix: function lookupPrefix(namespaceURI) {
    var el = this;
    while (el) {
      var map = el._nsMap;
      //console.dir(map)
      if (map) {
        for (var n in map) {
          if (Object.prototype.hasOwnProperty.call(map, n) && map[n] === namespaceURI) {
            return n;
          }
        }
      }
      el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  lookupNamespaceURI: function lookupNamespaceURI(prefix) {
    var el = this;
    while (el) {
      var map = el._nsMap;
      //console.dir(map)
      if (map) {
        if (Object.prototype.hasOwnProperty.call(map, prefix)) {
          return map[prefix];
        }
      }
      el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  isDefaultNamespace: function isDefaultNamespace(namespaceURI) {
    var prefix = this.lookupPrefix(namespaceURI);
    return prefix == null;
  }
};
function _xmlEncoder(c) {
  return c == '<' && '&lt;' || c == '>' && '&gt;' || c == '&' && '&amp;' || c == '"' && '&quot;' || '&#' + c.charCodeAt() + ';';
}
copy(NodeType, Node);
copy(NodeType, Node.prototype);

/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */
function _visitNode(node, callback) {
  if (callback(node)) {
    return true;
  }
  if (node = node.firstChild) {
    do {
      if (_visitNode(node, callback)) {
        return true;
      }
    } while (node = node.nextSibling);
  }
}
function Document() {
  this.ownerDocument = this;
}
function _onAddAttribute(doc, el, newAttr) {
  doc && doc._inc++;
  var ns = newAttr.namespaceURI;
  if (ns === NAMESPACE.XMLNS) {
    //update namespace
    el._nsMap[newAttr.prefix ? newAttr.localName : ''] = newAttr.value;
  }
}
function _onRemoveAttribute(doc, el, newAttr, remove) {
  doc && doc._inc++;
  var ns = newAttr.namespaceURI;
  if (ns === NAMESPACE.XMLNS) {
    //update namespace
    delete el._nsMap[newAttr.prefix ? newAttr.localName : ''];
  }
}

/**
 * Updates `el.childNodes`, updating the indexed items and it's `length`.
 * Passing `newChild` means it will be appended.
 * Otherwise it's assumed that an item has been removed,
 * and `el.firstNode` and it's `.nextSibling` are used
 * to walk the current list of child nodes.
 *
 * @param {Document} doc
 * @param {Node} el
 * @param {Node} [newChild]
 * @private
 */
function _onUpdateChild(doc, el, newChild) {
  if (doc && doc._inc) {
    doc._inc++;
    //update childNodes
    var cs = el.childNodes;
    if (newChild) {
      cs[cs.length++] = newChild;
    } else {
      var child = el.firstChild;
      var i = 0;
      while (child) {
        cs[i++] = child;
        child = child.nextSibling;
      }
      cs.length = i;
      delete cs[cs.length];
    }
  }
}

/**
 * Removes the connections between `parentNode` and `child`
 * and any existing `child.previousSibling` or `child.nextSibling`.
 *
 * @see https://github.com/xmldom/xmldom/issues/135
 * @see https://github.com/xmldom/xmldom/issues/145
 *
 * @param {Node} parentNode
 * @param {Node} child
 * @returns {Node} the child that was removed.
 * @private
 */
function _removeChild(parentNode, child) {
  var previous = child.previousSibling;
  var next = child.nextSibling;
  if (previous) {
    previous.nextSibling = next;
  } else {
    parentNode.firstChild = next;
  }
  if (next) {
    next.previousSibling = previous;
  } else {
    parentNode.lastChild = previous;
  }
  child.parentNode = null;
  child.previousSibling = null;
  child.nextSibling = null;
  _onUpdateChild(parentNode.ownerDocument, parentNode);
  return child;
}

/**
 * Returns `true` if `node` can be a parent for insertion.
 * @param {Node} node
 * @returns {boolean}
 */
function hasValidParentNodeType(node) {
  return node && (node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE);
}

/**
 * Returns `true` if `node` can be inserted according to it's `nodeType`.
 * @param {Node} node
 * @returns {boolean}
 */
function hasInsertableNodeType(node) {
  return node && (isElementNode(node) || isTextNode(node) || isDocTypeNode(node) || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.COMMENT_NODE || node.nodeType === Node.PROCESSING_INSTRUCTION_NODE);
}

/**
 * Returns true if `node` is a DOCTYPE node
 * @param {Node} node
 * @returns {boolean}
 */
function isDocTypeNode(node) {
  return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
}

/**
 * Returns true if the node is an element
 * @param {Node} node
 * @returns {boolean}
 */
function isElementNode(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}
/**
 * Returns true if `node` is a text node
 * @param {Node} node
 * @returns {boolean}
 */
function isTextNode(node) {
  return node && node.nodeType === Node.TEXT_NODE;
}

/**
 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
 * according to the presence and position of a doctype node on the same level.
 *
 * @param {Document} doc The document node
 * @param {Node} child the node that would become the nextSibling if the element would be inserted
 * @returns {boolean} `true` if an element can be inserted before child
 * @private
 * https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function isElementInsertionPossible(doc, child) {
  var parentChildNodes = doc.childNodes || [];
  if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
    return false;
  }
  var docTypeNode = find(parentChildNodes, isDocTypeNode);
  return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
}

/**
 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
 * according to the presence and position of a doctype node on the same level.
 *
 * @param {Node} doc The document node
 * @param {Node} child the node that would become the nextSibling if the element would be inserted
 * @returns {boolean} `true` if an element can be inserted before child
 * @private
 * https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function isElementReplacementPossible(doc, child) {
  var parentChildNodes = doc.childNodes || [];
  function hasElementChildThatIsNotChild(node) {
    return isElementNode(node) && node !== child;
  }
  if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
    return false;
  }
  var docTypeNode = find(parentChildNodes, isDocTypeNode);
  return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
}

/**
 * @private
 * Steps 1-5 of the checks before inserting and before replacing a child are the same.
 *
 * @param {Node} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node=} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreInsertionValidity1to5(parent, node, child) {
  // 1. If `parent` is not a Document, DocumentFragment, or Element node, then throw a "HierarchyRequestError" DOMException.
  if (!hasValidParentNodeType(parent)) {
    throw new DOMException(HIERARCHY_REQUEST_ERR, 'Unexpected parent node type ' + parent.nodeType);
  }
  // 2. If `node` is a host-including inclusive ancestor of `parent`, then throw a "HierarchyRequestError" DOMException.
  // not implemented!
  // 3. If `child` is non-null and its parent is not `parent`, then throw a "NotFoundError" DOMException.
  if (child && child.parentNode !== parent) {
    throw new DOMException(NOT_FOUND_ERR, 'child not in parent');
  }
  if (
  // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
  !hasInsertableNodeType(node) ||
  // 5. If either `node` is a Text node and `parent` is a document,
  // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
  // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
  // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
  isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE) {
    throw new DOMException(HIERARCHY_REQUEST_ERR, 'Unexpected node type ' + node.nodeType + ' for parent node type ' + parent.nodeType);
  }
}

/**
 * @private
 * Step 6 of the checks before inserting and before replacing a child are different.
 *
 * @param {Document} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node | undefined} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreInsertionValidityInDocument(parent, node, child) {
  var parentChildNodes = parent.childNodes || [];
  var nodeChildNodes = node.childNodes || [];

  // DocumentFragment
  if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
    var nodeChildElements = nodeChildNodes.filter(isElementNode);
    // If node has more than one element child or has a Text node child.
    if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
      throw new DOMException(HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
    }
    // Otherwise, if `node` has one element child and either `parent` has an element child,
    // `child` is a doctype, or `child` is non-null and a doctype is following `child`.
    if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
      throw new DOMException(HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
    }
  }
  // Element
  if (isElementNode(node)) {
    // `parent` has an element child, `child` is a doctype,
    // or `child` is non-null and a doctype is following `child`.
    if (!isElementInsertionPossible(parent, child)) {
      throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
    }
  }
  // DocumentType
  if (isDocTypeNode(node)) {
    // `parent` has a doctype child,
    if (find(parentChildNodes, isDocTypeNode)) {
      throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
    }
    var parentElementChild = find(parentChildNodes, isElementNode);
    // `child` is non-null and an element is preceding `child`,
    if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
      throw new DOMException(HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
    }
    // or `child` is null and `parent` has an element child.
    if (!child && parentElementChild) {
      throw new DOMException(HIERARCHY_REQUEST_ERR, 'Doctype can not be appended since element is present');
    }
  }
}

/**
 * @private
 * Step 6 of the checks before inserting and before replacing a child are different.
 *
 * @param {Document} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node | undefined} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreReplacementValidityInDocument(parent, node, child) {
  var parentChildNodes = parent.childNodes || [];
  var nodeChildNodes = node.childNodes || [];

  // DocumentFragment
  if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
    var nodeChildElements = nodeChildNodes.filter(isElementNode);
    // If `node` has more than one element child or has a Text node child.
    if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
      throw new DOMException(HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
    }
    // Otherwise, if `node` has one element child and either `parent` has an element child that is not `child` or a doctype is following `child`.
    if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
      throw new DOMException(HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
    }
  }
  // Element
  if (isElementNode(node)) {
    // `parent` has an element child that is not `child` or a doctype is following `child`.
    if (!isElementReplacementPossible(parent, child)) {
      throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
    }
  }
  // DocumentType
  if (isDocTypeNode(node)) {
    function hasDoctypeChildThatIsNotChild(node) {
      return isDocTypeNode(node) && node !== child;
    }

    // `parent` has a doctype child that is not `child`,
    if (find(parentChildNodes, hasDoctypeChildThatIsNotChild)) {
      throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
    }
    var parentElementChild = find(parentChildNodes, isElementNode);
    // or an element is preceding `child`.
    if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
      throw new DOMException(HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
    }
  }
}

/**
 * @private
 * @param {Node} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node=} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function _insertBefore(parent, node, child, _inDocumentAssertion) {
  // To ensure pre-insertion validity of a node into a parent before a child, run these steps:
  assertPreInsertionValidity1to5(parent, node, child);

  // If parent is a document, and any of the statements below, switched on the interface node implements,
  // are true, then throw a "HierarchyRequestError" DOMException.
  if (parent.nodeType === Node.DOCUMENT_NODE) {
    (_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
  }
  var cp = node.parentNode;
  if (cp) {
    cp.removeChild(node); //remove and update
  }

  if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
    var newFirst = node.firstChild;
    if (newFirst == null) {
      return node;
    }
    var newLast = node.lastChild;
  } else {
    newFirst = newLast = node;
  }
  var pre = child ? child.previousSibling : parent.lastChild;
  newFirst.previousSibling = pre;
  newLast.nextSibling = child;
  if (pre) {
    pre.nextSibling = newFirst;
  } else {
    parent.firstChild = newFirst;
  }
  if (child == null) {
    parent.lastChild = newLast;
  } else {
    child.previousSibling = newLast;
  }
  do {
    newFirst.parentNode = parent;
  } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
  _onUpdateChild(parent.ownerDocument || parent, parent);
  //console.log(parent.lastChild.nextSibling == null)
  if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
    node.firstChild = node.lastChild = null;
  }
  return node;
}

/**
 * Appends `newChild` to `parentNode`.
 * If `newChild` is already connected to a `parentNode` it is first removed from it.
 *
 * @see https://github.com/xmldom/xmldom/issues/135
 * @see https://github.com/xmldom/xmldom/issues/145
 * @param {Node} parentNode
 * @param {Node} newChild
 * @returns {Node}
 * @private
 */
function _appendSingleChild(parentNode, newChild) {
  if (newChild.parentNode) {
    newChild.parentNode.removeChild(newChild);
  }
  newChild.parentNode = parentNode;
  newChild.previousSibling = parentNode.lastChild;
  newChild.nextSibling = null;
  if (newChild.previousSibling) {
    newChild.previousSibling.nextSibling = newChild;
  } else {
    parentNode.firstChild = newChild;
  }
  parentNode.lastChild = newChild;
  _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
  return newChild;
}
Document.prototype = {
  //implementation : null,
  nodeName: '#document',
  nodeType: DOCUMENT_NODE,
  /**
   * The DocumentType node of the document.
   *
   * @readonly
   * @type DocumentType
   */
  doctype: null,
  documentElement: null,
  _inc: 1,
  insertBefore: function insertBefore(newChild, refChild) {
    //raises
    if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
      var child = newChild.firstChild;
      while (child) {
        var next = child.nextSibling;
        this.insertBefore(child, refChild);
        child = next;
      }
      return newChild;
    }
    _insertBefore(this, newChild, refChild);
    newChild.ownerDocument = this;
    if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
      this.documentElement = newChild;
    }
    return newChild;
  },
  removeChild: function removeChild(oldChild) {
    if (this.documentElement == oldChild) {
      this.documentElement = null;
    }
    return _removeChild(this, oldChild);
  },
  replaceChild: function replaceChild(newChild, oldChild) {
    //raises
    _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
    newChild.ownerDocument = this;
    if (oldChild) {
      this.removeChild(oldChild);
    }
    if (isElementNode(newChild)) {
      this.documentElement = newChild;
    }
  },
  // Introduced in DOM Level 2:
  importNode: function importNode(importedNode, deep) {
    return _importNode(this, importedNode, deep);
  },
  // Introduced in DOM Level 2:
  getElementById: function getElementById(id) {
    var rtv = null;
    _visitNode(this.documentElement, function (node) {
      if (node.nodeType == ELEMENT_NODE) {
        if (node.getAttribute('id') == id) {
          rtv = node;
          return true;
        }
      }
    });
    return rtv;
  },
  /**
   * The `getElementsByClassName` method of `Document` interface returns an array-like object
   * of all child elements which have **all** of the given class name(s).
   *
   * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
   *
   *
   * Warning: This is a live LiveNodeList.
   * Changes in the DOM will reflect in the array as the changes occur.
   * If an element selected by this array no longer qualifies for the selector,
   * it will automatically be removed. Be aware of this for iteration purposes.
   *
   * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
   * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
   */
  getElementsByClassName: function getElementsByClassName(classNames) {
    var classNamesSet = toOrderedSet(classNames);
    return new LiveNodeList(this, function (base) {
      var ls = [];
      if (classNamesSet.length > 0) {
        _visitNode(base.documentElement, function (node) {
          if (node !== base && node.nodeType === ELEMENT_NODE) {
            var nodeClassNames = node.getAttribute('class');
            // can be null if the attribute does not exist
            if (nodeClassNames) {
              // before splitting and iterating just compare them for the most common case
              var matches = classNames === nodeClassNames;
              if (!matches) {
                var nodeClassNamesSet = toOrderedSet(nodeClassNames);
                matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
              }
              if (matches) {
                ls.push(node);
              }
            }
          }
        });
      }
      return ls;
    });
  },
  //document factory method:
  createElement: function createElement(tagName) {
    var node = new Element();
    node.ownerDocument = this;
    node.nodeName = tagName;
    node.tagName = tagName;
    node.localName = tagName;
    node.childNodes = new NodeList();
    var attrs = node.attributes = new NamedNodeMap();
    attrs._ownerElement = node;
    return node;
  },
  createDocumentFragment: function createDocumentFragment() {
    var node = new DocumentFragment();
    node.ownerDocument = this;
    node.childNodes = new NodeList();
    return node;
  },
  createTextNode: function createTextNode(data) {
    var node = new Text();
    node.ownerDocument = this;
    node.appendData(data);
    return node;
  },
  createComment: function createComment(data) {
    var node = new Comment();
    node.ownerDocument = this;
    node.appendData(data);
    return node;
  },
  createCDATASection: function createCDATASection(data) {
    var node = new CDATASection();
    node.ownerDocument = this;
    node.appendData(data);
    return node;
  },
  createProcessingInstruction: function createProcessingInstruction(target, data) {
    var node = new ProcessingInstruction();
    node.ownerDocument = this;
    node.tagName = node.target = target;
    node.nodeValue = node.data = data;
    return node;
  },
  createAttribute: function createAttribute(name) {
    var node = new Attr();
    node.ownerDocument = this;
    node.name = name;
    node.nodeName = name;
    node.localName = name;
    node.specified = true;
    return node;
  },
  createEntityReference: function createEntityReference(name) {
    var node = new EntityReference();
    node.ownerDocument = this;
    node.nodeName = name;
    return node;
  },
  // Introduced in DOM Level 2:
  createElementNS: function createElementNS(namespaceURI, qualifiedName) {
    var node = new Element();
    var pl = qualifiedName.split(':');
    var attrs = node.attributes = new NamedNodeMap();
    node.childNodes = new NodeList();
    node.ownerDocument = this;
    node.nodeName = qualifiedName;
    node.tagName = qualifiedName;
    node.namespaceURI = namespaceURI;
    if (pl.length == 2) {
      node.prefix = pl[0];
      node.localName = pl[1];
    } else {
      //el.prefix = null;
      node.localName = qualifiedName;
    }
    attrs._ownerElement = node;
    return node;
  },
  // Introduced in DOM Level 2:
  createAttributeNS: function createAttributeNS(namespaceURI, qualifiedName) {
    var node = new Attr();
    var pl = qualifiedName.split(':');
    node.ownerDocument = this;
    node.nodeName = qualifiedName;
    node.name = qualifiedName;
    node.namespaceURI = namespaceURI;
    node.specified = true;
    if (pl.length == 2) {
      node.prefix = pl[0];
      node.localName = pl[1];
    } else {
      //el.prefix = null;
      node.localName = qualifiedName;
    }
    return node;
  }
};
_extends(Document, Node);
function Element() {
  this._nsMap = {};
}
;
Element.prototype = {
  nodeType: ELEMENT_NODE,
  hasAttribute: function hasAttribute(name) {
    return this.getAttributeNode(name) != null;
  },
  getAttribute: function getAttribute(name) {
    var attr = this.getAttributeNode(name);
    return attr && attr.value || '';
  },
  getAttributeNode: function getAttributeNode(name) {
    return this.attributes.getNamedItem(name);
  },
  setAttribute: function setAttribute(name, value) {
    var attr = this.ownerDocument.createAttribute(name);
    attr.value = attr.nodeValue = "" + value;
    this.setAttributeNode(attr);
  },
  removeAttribute: function removeAttribute(name) {
    var attr = this.getAttributeNode(name);
    attr && this.removeAttributeNode(attr);
  },
  //four real opeartion method
  appendChild: function appendChild(newChild) {
    if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
      return this.insertBefore(newChild, null);
    } else {
      return _appendSingleChild(this, newChild);
    }
  },
  setAttributeNode: function setAttributeNode(newAttr) {
    return this.attributes.setNamedItem(newAttr);
  },
  setAttributeNodeNS: function setAttributeNodeNS(newAttr) {
    return this.attributes.setNamedItemNS(newAttr);
  },
  removeAttributeNode: function removeAttributeNode(oldAttr) {
    //console.log(this == oldAttr.ownerElement)
    return this.attributes.removeNamedItem(oldAttr.nodeName);
  },
  //get real attribute name,and remove it by removeAttributeNode
  removeAttributeNS: function removeAttributeNS(namespaceURI, localName) {
    var old = this.getAttributeNodeNS(namespaceURI, localName);
    old && this.removeAttributeNode(old);
  },
  hasAttributeNS: function hasAttributeNS(namespaceURI, localName) {
    return this.getAttributeNodeNS(namespaceURI, localName) != null;
  },
  getAttributeNS: function getAttributeNS(namespaceURI, localName) {
    var attr = this.getAttributeNodeNS(namespaceURI, localName);
    return attr && attr.value || '';
  },
  setAttributeNS: function setAttributeNS(namespaceURI, qualifiedName, value) {
    var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
    attr.value = attr.nodeValue = "" + value;
    this.setAttributeNode(attr);
  },
  getAttributeNodeNS: function getAttributeNodeNS(namespaceURI, localName) {
    return this.attributes.getNamedItemNS(namespaceURI, localName);
  },
  getElementsByTagName: function getElementsByTagName(tagName) {
    return new LiveNodeList(this, function (base) {
      var ls = [];
      _visitNode(base, function (node) {
        if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)) {
          ls.push(node);
        }
      });
      return ls;
    });
  },
  getElementsByTagNameNS: function getElementsByTagNameNS(namespaceURI, localName) {
    return new LiveNodeList(this, function (base) {
      var ls = [];
      _visitNode(base, function (node) {
        if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)) {
          ls.push(node);
        }
      });
      return ls;
    });
  }
};
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
_extends(Element, Node);
function Attr() {}
;
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr, Node);
function CharacterData() {}
;
CharacterData.prototype = {
  data: '',
  substringData: function substringData(offset, count) {
    return this.data.substring(offset, offset + count);
  },
  appendData: function appendData(text) {
    text = this.data + text;
    this.nodeValue = this.data = text;
    this.length = text.length;
  },
  insertData: function insertData(offset, text) {
    this.replaceData(offset, 0, text);
  },
  appendChild: function appendChild(newChild) {
    throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
  },
  deleteData: function deleteData(offset, count) {
    this.replaceData(offset, count, "");
  },
  replaceData: function replaceData(offset, count, text) {
    var start = this.data.substring(0, offset);
    var end = this.data.substring(offset + count);
    text = start + text + end;
    this.nodeValue = this.data = text;
    this.length = text.length;
  }
};
_extends(CharacterData, Node);
function Text() {}
;
Text.prototype = {
  nodeName: "#text",
  nodeType: TEXT_NODE,
  splitText: function splitText(offset) {
    var text = this.data;
    var newText = text.substring(offset);
    text = text.substring(0, offset);
    this.data = this.nodeValue = text;
    this.length = text.length;
    var newNode = this.ownerDocument.createTextNode(newText);
    if (this.parentNode) {
      this.parentNode.insertBefore(newNode, this.nextSibling);
    }
    return newNode;
  }
};
_extends(Text, CharacterData);
function Comment() {}
;
Comment.prototype = {
  nodeName: "#comment",
  nodeType: COMMENT_NODE
};
_extends(Comment, CharacterData);
function CDATASection() {}
;
CDATASection.prototype = {
  nodeName: "#cdata-section",
  nodeType: CDATA_SECTION_NODE
};
_extends(CDATASection, CharacterData);
function DocumentType() {}
;
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType, Node);
function Notation() {}
;
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation, Node);
function Entity() {}
;
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity, Node);
function EntityReference() {}
;
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference, Node);
function DocumentFragment() {}
;
DocumentFragment.prototype.nodeName = "#document-fragment";
DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment, Node);
function ProcessingInstruction() {}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction, Node);
function XMLSerializer() {}
XMLSerializer.prototype.serializeToString = function (node, isHtml, nodeFilter) {
  return nodeSerializeToString.call(node, isHtml, nodeFilter);
};
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(isHtml, nodeFilter) {
  var buf = [];
  var refNode = this.nodeType == 9 && this.documentElement || this;
  var prefix = refNode.prefix;
  var uri = refNode.namespaceURI;
  if (uri && prefix == null) {
    //console.log(prefix)
    var prefix = refNode.lookupPrefix(uri);
    if (prefix == null) {
      //isHTML = true;
      var visibleNamespaces = [{
        namespace: uri,
        prefix: null
      }
      //{namespace:uri,prefix:''}
      ];
    }
  }

  serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
  //console.log('###',this.nodeType,uri,prefix,buf.join(''))
  return buf.join('');
}
function needNamespaceDefine(node, isHTML, visibleNamespaces) {
  var prefix = node.prefix || '';
  var uri = node.namespaceURI;
  // According to [Namespaces in XML 1.0](https://www.w3.org/TR/REC-xml-names/#ns-using) ,
  // and more specifically https://www.w3.org/TR/REC-xml-names/#nsc-NoPrefixUndecl :
  // > In a namespace declaration for a prefix [...], the attribute value MUST NOT be empty.
  // in a similar manner [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#ns-using)
  // and more specifically https://www.w3.org/TR/xml-names11/#nsc-NSDeclared :
  // > [...] Furthermore, the attribute value [...] must not be an empty string.
  // so serializing empty namespace value like xmlns:ds="" would produce an invalid XML document.
  if (!uri) {
    return false;
  }
  if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
    return false;
  }
  var i = visibleNamespaces.length;
  while (i--) {
    var ns = visibleNamespaces[i];
    // get namespace prefix
    if (ns.prefix === prefix) {
      return ns.namespace !== uri;
    }
  }
  return true;
}
/**
 * Well-formed constraint: No < in Attribute Values
 * > The replacement text of any entity referred to directly or indirectly
 * > in an attribute value must not contain a <.
 * @see https://www.w3.org/TR/xml11/#CleanAttrVals
 * @see https://www.w3.org/TR/xml11/#NT-AttValue
 *
 * Literal whitespace other than space that appear in attribute values
 * are serialized as their entity references, so they will be preserved.
 * (In contrast to whitespace literals in the input which are normalized to spaces)
 * @see https://www.w3.org/TR/xml11/#AVNormalize
 * @see https://w3c.github.io/DOM-Parsing/#serializing-an-element-s-attributes
 */
function addSerializedAttribute(buf, qualifiedName, value) {
  buf.push(' ', qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"');
}
function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
  if (!visibleNamespaces) {
    visibleNamespaces = [];
  }
  if (nodeFilter) {
    node = nodeFilter(node);
    if (node) {
      if (typeof node == 'string') {
        buf.push(node);
        return;
      }
    } else {
      return;
    }
    //buf.sort.apply(attrs, attributeSorter);
  }

  switch (node.nodeType) {
    case ELEMENT_NODE:
      var attrs = node.attributes;
      var len = attrs.length;
      var child = node.firstChild;
      var nodeName = node.tagName;
      isHTML = NAMESPACE.isHTML(node.namespaceURI) || isHTML;
      var prefixedNodeName = nodeName;
      if (!isHTML && !node.prefix && node.namespaceURI) {
        var defaultNS;
        // lookup current default ns from `xmlns` attribute
        for (var ai = 0; ai < attrs.length; ai++) {
          if (attrs.item(ai).name === 'xmlns') {
            defaultNS = attrs.item(ai).value;
            break;
          }
        }
        if (!defaultNS) {
          // lookup current default ns in visibleNamespaces
          for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
            var namespace = visibleNamespaces[nsi];
            if (namespace.prefix === '' && namespace.namespace === node.namespaceURI) {
              defaultNS = namespace.namespace;
              break;
            }
          }
        }
        if (defaultNS !== node.namespaceURI) {
          for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
            var namespace = visibleNamespaces[nsi];
            if (namespace.namespace === node.namespaceURI) {
              if (namespace.prefix) {
                prefixedNodeName = namespace.prefix + ':' + nodeName;
              }
              break;
            }
          }
        }
      }
      buf.push('<', prefixedNodeName);
      for (var i = 0; i < len; i++) {
        // add namespaces for attributes
        var attr = attrs.item(i);
        if (attr.prefix == 'xmlns') {
          visibleNamespaces.push({
            prefix: attr.localName,
            namespace: attr.value
          });
        } else if (attr.nodeName == 'xmlns') {
          visibleNamespaces.push({
            prefix: '',
            namespace: attr.value
          });
        }
      }
      for (var i = 0; i < len; i++) {
        var attr = attrs.item(i);
        if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
          var prefix = attr.prefix || '';
          var uri = attr.namespaceURI;
          addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
          visibleNamespaces.push({
            prefix: prefix,
            namespace: uri
          });
        }
        serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
      }

      // add namespace for current node
      if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
        var prefix = node.prefix || '';
        var uri = node.namespaceURI;
        addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
        visibleNamespaces.push({
          prefix: prefix,
          namespace: uri
        });
      }
      if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
        buf.push('>');
        //if is cdata child node
        if (isHTML && /^script$/i.test(nodeName)) {
          while (child) {
            if (child.data) {
              buf.push(child.data);
            } else {
              serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
            }
            child = child.nextSibling;
          }
        } else {
          while (child) {
            serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
            child = child.nextSibling;
          }
        }
        buf.push('</', prefixedNodeName, '>');
      } else {
        buf.push('/>');
      }
      // remove added visible namespaces
      //visibleNamespaces.length = startVisibleNamespaces;
      return;
    case DOCUMENT_NODE:
    case DOCUMENT_FRAGMENT_NODE:
      var child = node.firstChild;
      while (child) {
        serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
        child = child.nextSibling;
      }
      return;
    case ATTRIBUTE_NODE:
      return addSerializedAttribute(buf, node.name, node.value);
    case TEXT_NODE:
      /**
       * The ampersand character (&) and the left angle bracket (<) must not appear in their literal form,
       * except when used as markup delimiters, or within a comment, a processing instruction, or a CDATA section.
       * If they are needed elsewhere, they must be escaped using either numeric character references or the strings
       * `&amp;` and `&lt;` respectively.
       * The right angle bracket (>) may be represented using the string " &gt; ", and must, for compatibility,
       * be escaped using either `&gt;` or a character reference when it appears in the string `]]>` in content,
       * when that string is not marking the end of a CDATA section.
       *
       * In the content of elements, character data is any string of characters
       * which does not contain the start-delimiter of any markup
       * and does not include the CDATA-section-close delimiter, `]]>`.
       *
       * @see https://www.w3.org/TR/xml/#NT-CharData
       * @see https://w3c.github.io/DOM-Parsing/#xml-serializing-a-text-node
       */
      return buf.push(node.data.replace(/[<&>]/g, _xmlEncoder));
    case CDATA_SECTION_NODE:
      return buf.push('<![CDATA[', node.data, ']]>');
    case COMMENT_NODE:
      return buf.push("<!--", node.data, "-->");
    case DOCUMENT_TYPE_NODE:
      var pubid = node.publicId;
      var sysid = node.systemId;
      buf.push('<!DOCTYPE ', node.name);
      if (pubid) {
        buf.push(' PUBLIC ', pubid);
        if (sysid && sysid != '.') {
          buf.push(' ', sysid);
        }
        buf.push('>');
      } else if (sysid && sysid != '.') {
        buf.push(' SYSTEM ', sysid, '>');
      } else {
        var sub = node.internalSubset;
        if (sub) {
          buf.push(" [", sub, "]");
        }
        buf.push(">");
      }
      return;
    case PROCESSING_INSTRUCTION_NODE:
      return buf.push("<?", node.target, " ", node.data, "?>");
    case ENTITY_REFERENCE_NODE:
      return buf.push('&', node.nodeName, ';');
    //case ENTITY_NODE:
    //case NOTATION_NODE:
    default:
      buf.push('??', node.nodeName);
  }
}
function _importNode(doc, node, deep) {
  var node2;
  switch (node.nodeType) {
    case ELEMENT_NODE:
      node2 = node.cloneNode(false);
      node2.ownerDocument = doc;
    //var attrs = node2.attributes;
    //var len = attrs.length;
    //for(var i=0;i<len;i++){
    //node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
    //}
    case DOCUMENT_FRAGMENT_NODE:
      break;
    case ATTRIBUTE_NODE:
      deep = true;
      break;
    //case ENTITY_REFERENCE_NODE:
    //case PROCESSING_INSTRUCTION_NODE:
    ////case TEXT_NODE:
    //case CDATA_SECTION_NODE:
    //case COMMENT_NODE:
    //	deep = false;
    //	break;
    //case DOCUMENT_NODE:
    //case DOCUMENT_TYPE_NODE:
    //cannot be imported.
    //case ENTITY_NODE:
    //case NOTATION_NODE：
    //can not hit in level3
    //default:throw e;
  }

  if (!node2) {
    node2 = node.cloneNode(false); //false
  }

  node2.ownerDocument = doc;
  node2.parentNode = null;
  if (deep) {
    var child = node.firstChild;
    while (child) {
      node2.appendChild(_importNode(doc, child, deep));
      child = child.nextSibling;
    }
  }
  return node2;
}
//
//var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
//					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
function _cloneNode(doc, node, deep) {
  var node2 = new node.constructor();
  for (var n in node) {
    if (Object.prototype.hasOwnProperty.call(node, n)) {
      var v = node[n];
      if (_typeof(v) != "object") {
        if (v != node2[n]) {
          node2[n] = v;
        }
      }
    }
  }
  if (node.childNodes) {
    node2.childNodes = new NodeList();
  }
  node2.ownerDocument = doc;
  switch (node2.nodeType) {
    case ELEMENT_NODE:
      var attrs = node.attributes;
      var attrs2 = node2.attributes = new NamedNodeMap();
      var len = attrs.length;
      attrs2._ownerElement = node2;
      for (var i = 0; i < len; i++) {
        node2.setAttributeNode(_cloneNode(doc, attrs.item(i), true));
      }
      break;
      ;
    case ATTRIBUTE_NODE:
      deep = true;
  }
  if (deep) {
    var child = node.firstChild;
    while (child) {
      node2.appendChild(_cloneNode(doc, child, deep));
      child = child.nextSibling;
    }
  }
  return node2;
}
function __set__(object, key, value) {
  object[key] = value;
}
//do dynamic
try {
  if (Object.defineProperty) {
    Object.defineProperty(LiveNodeList.prototype, 'length', {
      get: function get() {
        _updateLiveList(this);
        return this.$$length;
      }
    });
    Object.defineProperty(Node.prototype, 'textContent', {
      get: function get() {
        return getTextContent(this);
      },
      set: function set(data) {
        switch (this.nodeType) {
          case ELEMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE:
            while (this.firstChild) {
              this.removeChild(this.firstChild);
            }
            if (data || String(data)) {
              this.appendChild(this.ownerDocument.createTextNode(data));
            }
            break;
          default:
            this.data = data;
            this.value = data;
            this.nodeValue = data;
        }
      }
    });
    function getTextContent(node) {
      switch (node.nodeType) {
        case ELEMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE:
          var buf = [];
          node = node.firstChild;
          while (node) {
            if (node.nodeType !== 7 && node.nodeType !== 8) {
              buf.push(getTextContent(node));
            }
            node = node.nextSibling;
          }
          return buf.join('');
        default:
          return node.nodeValue;
      }
    }
    __set__ = function __set__(object, key, value) {
      //console.log(value)
      object['$$' + key] = value;
    };
  }
} catch (e) {//ie8
}

//if(typeof require == 'function'){
exports.DocumentType = DocumentType;
exports.DOMException = DOMException;
exports.DOMImplementation = DOMImplementation;
exports.Element = Element;
exports.Node = Node;
exports.NodeList = NodeList;
exports.XMLSerializer = XMLSerializer;
//}
},{"./conventions":"../node_modules/@xmldom/xmldom/lib/conventions.js"}],"../node_modules/@xmldom/xmldom/lib/entities.js":[function(require,module,exports) {
var freeze = require('./conventions').freeze;

/**
 * The entities that are predefined in every XML document.
 *
 * @see https://www.w3.org/TR/2006/REC-xml11-20060816/#sec-predefined-ent W3C XML 1.1
 * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-predefined-ent W3C XML 1.0
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML Wikipedia
 */
exports.XML_ENTITIES = freeze({
  amp: '&',
  apos: "'",
  gt: '>',
  lt: '<',
  quot: '"'
});

/**
 * A map of currently 241 entities that are detected in an HTML document.
 * They contain all entries from `XML_ENTITIES`.
 *
 * @see XML_ENTITIES
 * @see DOMParser.parseFromString
 * @see DOMImplementation.prototype.createHTMLDocument
 * @see https://html.spec.whatwg.org/#named-character-references WHATWG HTML(5) Spec
 * @see https://www.w3.org/TR/xml-entity-names/ W3C XML Entity Names
 * @see https://www.w3.org/TR/html4/sgml/entities.html W3C HTML4/SGML
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML Wikipedia (HTML)
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Entities_representing_special_characters_in_XHTML Wikpedia (XHTML)
 */
exports.HTML_ENTITIES = freeze({
  lt: '<',
  gt: '>',
  amp: '&',
  quot: '"',
  apos: "'",
  Agrave: "À",
  Aacute: "Á",
  Acirc: "Â",
  Atilde: "Ã",
  Auml: "Ä",
  Aring: "Å",
  AElig: "Æ",
  Ccedil: "Ç",
  Egrave: "È",
  Eacute: "É",
  Ecirc: "Ê",
  Euml: "Ë",
  Igrave: "Ì",
  Iacute: "Í",
  Icirc: "Î",
  Iuml: "Ï",
  ETH: "Ð",
  Ntilde: "Ñ",
  Ograve: "Ò",
  Oacute: "Ó",
  Ocirc: "Ô",
  Otilde: "Õ",
  Ouml: "Ö",
  Oslash: "Ø",
  Ugrave: "Ù",
  Uacute: "Ú",
  Ucirc: "Û",
  Uuml: "Ü",
  Yacute: "Ý",
  THORN: "Þ",
  szlig: "ß",
  agrave: "à",
  aacute: "á",
  acirc: "â",
  atilde: "ã",
  auml: "ä",
  aring: "å",
  aelig: "æ",
  ccedil: "ç",
  egrave: "è",
  eacute: "é",
  ecirc: "ê",
  euml: "ë",
  igrave: "ì",
  iacute: "í",
  icirc: "î",
  iuml: "ï",
  eth: "ð",
  ntilde: "ñ",
  ograve: "ò",
  oacute: "ó",
  ocirc: "ô",
  otilde: "õ",
  ouml: "ö",
  oslash: "ø",
  ugrave: "ù",
  uacute: "ú",
  ucirc: "û",
  uuml: "ü",
  yacute: "ý",
  thorn: "þ",
  yuml: "ÿ",
  nbsp: "\xA0",
  iexcl: "¡",
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  brvbar: "¦",
  sect: "§",
  uml: "¨",
  copy: "©",
  ordf: "ª",
  laquo: "«",
  not: "¬",
  shy: "­­",
  reg: "®",
  macr: "¯",
  deg: "°",
  plusmn: "±",
  sup2: "²",
  sup3: "³",
  acute: "´",
  micro: "µ",
  para: "¶",
  middot: "·",
  cedil: "¸",
  sup1: "¹",
  ordm: "º",
  raquo: "»",
  frac14: "¼",
  frac12: "½",
  frac34: "¾",
  iquest: "¿",
  times: "×",
  divide: "÷",
  forall: "∀",
  part: "∂",
  exist: "∃",
  empty: "∅",
  nabla: "∇",
  isin: "∈",
  notin: "∉",
  ni: "∋",
  prod: "∏",
  sum: "∑",
  minus: "−",
  lowast: "∗",
  radic: "√",
  prop: "∝",
  infin: "∞",
  ang: "∠",
  and: "∧",
  or: "∨",
  cap: "∩",
  cup: "∪",
  'int': "∫",
  there4: "∴",
  sim: "∼",
  cong: "≅",
  asymp: "≈",
  ne: "≠",
  equiv: "≡",
  le: "≤",
  ge: "≥",
  sub: "⊂",
  sup: "⊃",
  nsub: "⊄",
  sube: "⊆",
  supe: "⊇",
  oplus: "⊕",
  otimes: "⊗",
  perp: "⊥",
  sdot: "⋅",
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "Ε",
  Zeta: "Ζ",
  Eta: "Η",
  Theta: "Θ",
  Iota: "Ι",
  Kappa: "Κ",
  Lambda: "Λ",
  Mu: "Μ",
  Nu: "Ν",
  Xi: "Ξ",
  Omicron: "Ο",
  Pi: "Π",
  Rho: "Ρ",
  Sigma: "Σ",
  Tau: "Τ",
  Upsilon: "Υ",
  Phi: "Φ",
  Chi: "Χ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  omicron: "ο",
  pi: "π",
  rho: "ρ",
  sigmaf: "ς",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  thetasym: "ϑ",
  upsih: "ϒ",
  piv: "ϖ",
  OElig: "Œ",
  oelig: "œ",
  Scaron: "Š",
  scaron: "š",
  Yuml: "Ÿ",
  fnof: "ƒ",
  circ: "ˆ",
  tilde: "˜",
  ensp: " ",
  emsp: " ",
  thinsp: " ",
  zwnj: "‌",
  zwj: "‍",
  lrm: "‎",
  rlm: "‏",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  sbquo: "‚",
  ldquo: "“",
  rdquo: "”",
  bdquo: "„",
  dagger: "†",
  Dagger: "‡",
  bull: "•",
  hellip: "…",
  permil: "‰",
  prime: "′",
  Prime: "″",
  lsaquo: "‹",
  rsaquo: "›",
  oline: "‾",
  euro: "€",
  trade: "™",
  larr: "←",
  uarr: "↑",
  rarr: "→",
  darr: "↓",
  harr: "↔",
  crarr: "↵",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  loz: "◊",
  spades: "♠",
  clubs: "♣",
  hearts: "♥",
  diams: "♦"
});

/**
 * @deprecated use `HTML_ENTITIES` instead
 * @see HTML_ENTITIES
 */
exports.entityMap = exports.HTML_ENTITIES;
},{"./conventions":"../node_modules/@xmldom/xmldom/lib/conventions.js"}],"../node_modules/@xmldom/xmldom/lib/sax.js":[function(require,module,exports) {
var NAMESPACE = require("./conventions").NAMESPACE;

//[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
//[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
//[5]   	Name	   ::=   	NameStartChar (NameChar)*
var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/; //\u10000-\uEFFFF
var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
var tagNamePattern = new RegExp('^' + nameStartChar.source + nameChar.source + '*(?:\:' + nameStartChar.source + nameChar.source + '*)?$');
//var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
var S_TAG = 0; //tag name offerring
var S_ATTR = 1; //attr name offerring
var S_ATTR_SPACE = 2; //attr name end and space offer
var S_EQ = 3; //=space?
var S_ATTR_NOQUOT_VALUE = 4; //attr value(no quot value only)
var S_ATTR_END = 5; //attr value end and no space(quot end)
var S_TAG_SPACE = 6; //(attr value end || tag end ) && (space offer)
var S_TAG_CLOSE = 7; //closed el<el />

/**
 * Creates an error that will not be caught by XMLReader aka the SAX parser.
 *
 * @param {string} message
 * @param {any?} locator Optional, can provide details about the location in the source
 * @constructor
 */
function ParseError(message, locator) {
  this.message = message;
  this.locator = locator;
  if (Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
}
ParseError.prototype = new Error();
ParseError.prototype.name = ParseError.name;
function XMLReader() {}
XMLReader.prototype = {
  parse: function parse(source, defaultNSMap, entityMap) {
    var domBuilder = this.domBuilder;
    domBuilder.startDocument();
    _copy(defaultNSMap, defaultNSMap = {});
    _parse(source, defaultNSMap, entityMap, domBuilder, this.errorHandler);
    domBuilder.endDocument();
  }
};
function _parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
  function fixedFromCharCode(code) {
    // String.prototype.fromCharCode does not supports
    // > 2 bytes unicode chars directly
    if (code > 0xffff) {
      code -= 0x10000;
      var surrogate1 = 0xd800 + (code >> 10),
        surrogate2 = 0xdc00 + (code & 0x3ff);
      return String.fromCharCode(surrogate1, surrogate2);
    } else {
      return String.fromCharCode(code);
    }
  }
  function entityReplacer(a) {
    var k = a.slice(1, -1);
    if (Object.hasOwnProperty.call(entityMap, k)) {
      return entityMap[k];
    } else if (k.charAt(0) === '#') {
      return fixedFromCharCode(parseInt(k.substr(1).replace('x', '0x')));
    } else {
      errorHandler.error('entity not found:' + a);
      return a;
    }
  }
  function appendText(end) {
    //has some bugs
    if (end > start) {
      var xt = source.substring(start, end).replace(/&#?\w+;/g, entityReplacer);
      locator && position(start);
      domBuilder.characters(xt, 0, end - start);
      start = end;
    }
  }
  function position(p, m) {
    while (p >= lineEnd && (m = linePattern.exec(source))) {
      lineStart = m.index;
      lineEnd = lineStart + m[0].length;
      locator.lineNumber++;
      //console.log('line++:',locator,startPos,endPos)
    }

    locator.columnNumber = p - lineStart + 1;
  }
  var lineStart = 0;
  var lineEnd = 0;
  var linePattern = /.*(?:\r\n?|\n)|.*$/g;
  var locator = domBuilder.locator;
  var parseStack = [{
    currentNSMap: defaultNSMapCopy
  }];
  var closeMap = {};
  var start = 0;
  while (true) {
    try {
      var tagStart = source.indexOf('<', start);
      if (tagStart < 0) {
        if (!source.substr(start).match(/^\s*$/)) {
          var doc = domBuilder.doc;
          var text = doc.createTextNode(source.substr(start));
          doc.appendChild(text);
          domBuilder.currentElement = text;
        }
        return;
      }
      if (tagStart > start) {
        appendText(tagStart);
      }
      switch (source.charAt(tagStart + 1)) {
        case '/':
          var end = source.indexOf('>', tagStart + 3);
          var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, '');
          var config = parseStack.pop();
          if (end < 0) {
            tagName = source.substring(tagStart + 2).replace(/[\s<].*/, '');
            errorHandler.error("end tag name: " + tagName + ' is not complete:' + config.tagName);
            end = tagStart + 1 + tagName.length;
          } else if (tagName.match(/\s</)) {
            tagName = tagName.replace(/[\s<].*/, '');
            errorHandler.error("end tag name: " + tagName + ' maybe not complete');
            end = tagStart + 1 + tagName.length;
          }
          var localNSMap = config.localNSMap;
          var endMatch = config.tagName == tagName;
          var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
          if (endIgnoreCaseMach) {
            domBuilder.endElement(config.uri, config.localName, tagName);
            if (localNSMap) {
              for (var prefix in localNSMap) {
                if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
                  domBuilder.endPrefixMapping(prefix);
                }
              }
            }
            if (!endMatch) {
              errorHandler.fatalError("end tag name: " + tagName + ' is not match the current start tagName:' + config.tagName); // No known test case
            }
          } else {
            parseStack.push(config);
          }
          end++;
          break;
        // end elment
        case '?':
          // <?...?>
          locator && position(tagStart);
          end = parseInstruction(source, tagStart, domBuilder);
          break;
        case '!':
          // <!doctype,<![CDATA,<!--
          locator && position(tagStart);
          end = parseDCC(source, tagStart, domBuilder, errorHandler);
          break;
        default:
          locator && position(tagStart);
          var el = new ElementAttributes();
          var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
          //elStartEnd
          var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
          var len = el.length;
          if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
            el.closed = true;
            if (!entityMap.nbsp) {
              errorHandler.warning('unclosed xml attribute');
            }
          }
          if (locator && len) {
            var locator2 = copyLocator(locator, {});
            //try{//attribute position fixed
            for (var i = 0; i < len; i++) {
              var a = el[i];
              position(a.offset);
              a.locator = copyLocator(locator, {});
            }
            domBuilder.locator = locator2;
            if (appendElement(el, domBuilder, currentNSMap)) {
              parseStack.push(el);
            }
            domBuilder.locator = locator;
          } else {
            if (appendElement(el, domBuilder, currentNSMap)) {
              parseStack.push(el);
            }
          }
          if (NAMESPACE.isHTML(el.uri) && !el.closed) {
            end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
          } else {
            end++;
          }
      }
    } catch (e) {
      if (e instanceof ParseError) {
        throw e;
      }
      errorHandler.error('element parse error: ' + e);
      end = -1;
    }
    if (end > start) {
      start = end;
    } else {
      //TODO: 这里有可能sax回退，有位置错误风险
      appendText(Math.max(tagStart, start) + 1);
    }
  }
}
function copyLocator(f, t) {
  t.lineNumber = f.lineNumber;
  t.columnNumber = f.columnNumber;
  return t;
}

/**
 * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
 */
function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
  /**
   * @param {string} qname
   * @param {string} value
   * @param {number} startIndex
   */
  function addAttribute(qname, value, startIndex) {
    if (el.attributeNames.hasOwnProperty(qname)) {
      errorHandler.fatalError('Attribute ' + qname + ' redefined');
    }
    el.addValue(qname,
    // @see https://www.w3.org/TR/xml/#AVNormalize
    // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
    // - recursive replacement of (DTD) entity references
    // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
    value.replace(/[\t\n\r]/g, ' ').replace(/&#?\w+;/g, entityReplacer), startIndex);
  }
  var attrName;
  var value;
  var p = ++start;
  var s = S_TAG; //status
  while (true) {
    var c = source.charAt(p);
    switch (c) {
      case '=':
        if (s === S_ATTR) {
          //attrName
          attrName = source.slice(start, p);
          s = S_EQ;
        } else if (s === S_ATTR_SPACE) {
          s = S_EQ;
        } else {
          //fatalError: equal must after attrName or space after attrName
          throw new Error('attribute equal must after attrName'); // No known test case
        }

        break;
      case '\'':
      case '"':
        if (s === S_EQ || s === S_ATTR //|| s == S_ATTR_SPACE
        ) {
          //equal
          if (s === S_ATTR) {
            errorHandler.warning('attribute value must after "="');
            attrName = source.slice(start, p);
          }
          start = p + 1;
          p = source.indexOf(c, start);
          if (p > 0) {
            value = source.slice(start, p);
            addAttribute(attrName, value, start - 1);
            s = S_ATTR_END;
          } else {
            //fatalError: no end quot match
            throw new Error('attribute value no end \'' + c + '\' match');
          }
        } else if (s == S_ATTR_NOQUOT_VALUE) {
          value = source.slice(start, p);
          addAttribute(attrName, value, start);
          errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ')!!');
          start = p + 1;
          s = S_ATTR_END;
        } else {
          //fatalError: no equal before
          throw new Error('attribute value must after "="'); // No known test case
        }

        break;
      case '/':
        switch (s) {
          case S_TAG:
            el.setTagName(source.slice(start, p));
          case S_ATTR_END:
          case S_TAG_SPACE:
          case S_TAG_CLOSE:
            s = S_TAG_CLOSE;
            el.closed = true;
          case S_ATTR_NOQUOT_VALUE:
          case S_ATTR:
            break;
          case S_ATTR_SPACE:
            el.closed = true;
            break;
          //case S_EQ:
          default:
            throw new Error("attribute invalid close char('/')");
          // No known test case
        }

        break;
      case '':
        //end document
        errorHandler.error('unexpected end of input');
        if (s == S_TAG) {
          el.setTagName(source.slice(start, p));
        }
        return p;
      case '>':
        switch (s) {
          case S_TAG:
            el.setTagName(source.slice(start, p));
          case S_ATTR_END:
          case S_TAG_SPACE:
          case S_TAG_CLOSE:
            break;
          //normal
          case S_ATTR_NOQUOT_VALUE: //Compatible state
          case S_ATTR:
            value = source.slice(start, p);
            if (value.slice(-1) === '/') {
              el.closed = true;
              value = value.slice(0, -1);
            }
          case S_ATTR_SPACE:
            if (s === S_ATTR_SPACE) {
              value = attrName;
            }
            if (s == S_ATTR_NOQUOT_VALUE) {
              errorHandler.warning('attribute "' + value + '" missed quot(")!');
              addAttribute(attrName, value, start);
            } else {
              if (!NAMESPACE.isHTML(currentNSMap['']) || !value.match(/^(?:disabled|checked|selected)$/i)) {
                errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
              }
              addAttribute(value, value, start);
            }
            break;
          case S_EQ:
            throw new Error('attribute value missed!!');
        }
        //			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
        return p;
      /*xml space '\x20' | #x9 | #xD | #xA; */
      case "\x80":
        c = ' ';
      default:
        if (c <= ' ') {
          //space
          switch (s) {
            case S_TAG:
              el.setTagName(source.slice(start, p)); //tagName
              s = S_TAG_SPACE;
              break;
            case S_ATTR:
              attrName = source.slice(start, p);
              s = S_ATTR_SPACE;
              break;
            case S_ATTR_NOQUOT_VALUE:
              var value = source.slice(start, p);
              errorHandler.warning('attribute "' + value + '" missed quot(")!!');
              addAttribute(attrName, value, start);
            case S_ATTR_END:
              s = S_TAG_SPACE;
              break;
            //case S_TAG_SPACE:
            //case S_EQ:
            //case S_ATTR_SPACE:
            //	void();break;
            //case S_TAG_CLOSE:
            //ignore warning
          }
        } else {
          //not space
          //S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
          //S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
          switch (s) {
            //case S_TAG:void();break;
            //case S_ATTR:void();break;
            //case S_ATTR_NOQUOT_VALUE:void();break;
            case S_ATTR_SPACE:
              var tagName = el.tagName;
              if (!NAMESPACE.isHTML(currentNSMap['']) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
              }
              addAttribute(attrName, attrName, start);
              start = p;
              s = S_ATTR;
              break;
            case S_ATTR_END:
              errorHandler.warning('attribute space is required"' + attrName + '"!!');
            case S_TAG_SPACE:
              s = S_ATTR;
              start = p;
              break;
            case S_EQ:
              s = S_ATTR_NOQUOT_VALUE;
              start = p;
              break;
            case S_TAG_CLOSE:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
        }
    } //end outer switch
    //console.log('p++',p)
    p++;
  }
}
/**
 * @return true if has new namespace define
 */
function appendElement(el, domBuilder, currentNSMap) {
  var tagName = el.tagName;
  var localNSMap = null;
  //var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
  var i = el.length;
  while (i--) {
    var a = el[i];
    var qName = a.qName;
    var value = a.value;
    var nsp = qName.indexOf(':');
    if (nsp > 0) {
      var prefix = a.prefix = qName.slice(0, nsp);
      var localName = qName.slice(nsp + 1);
      var nsPrefix = prefix === 'xmlns' && localName;
    } else {
      localName = qName;
      prefix = null;
      nsPrefix = qName === 'xmlns' && '';
    }
    //can not set prefix,because prefix !== ''
    a.localName = localName;
    //prefix == null for no ns prefix attribute
    if (nsPrefix !== false) {
      //hack!!
      if (localNSMap == null) {
        localNSMap = {};
        //console.log(currentNSMap,0)
        _copy(currentNSMap, currentNSMap = {});
        //console.log(currentNSMap,1)
      }

      currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
      a.uri = NAMESPACE.XMLNS;
      domBuilder.startPrefixMapping(nsPrefix, value);
    }
  }
  var i = el.length;
  while (i--) {
    a = el[i];
    var prefix = a.prefix;
    if (prefix) {
      //no prefix attribute has no namespace
      if (prefix === 'xml') {
        a.uri = NAMESPACE.XML;
      }
      if (prefix !== 'xmlns') {
        a.uri = currentNSMap[prefix || ''];

        //{console.log('###'+a.qName,domBuilder.locator.systemId+'',currentNSMap,a.uri)}
      }
    }
  }

  var nsp = tagName.indexOf(':');
  if (nsp > 0) {
    prefix = el.prefix = tagName.slice(0, nsp);
    localName = el.localName = tagName.slice(nsp + 1);
  } else {
    prefix = null; //important!!
    localName = el.localName = tagName;
  }
  //no prefix element has default namespace
  var ns = el.uri = currentNSMap[prefix || ''];
  domBuilder.startElement(ns, localName, tagName, el);
  //endPrefixMapping and startPrefixMapping have not any help for dom builder
  //localNSMap = null
  if (el.closed) {
    domBuilder.endElement(ns, localName, tagName);
    if (localNSMap) {
      for (prefix in localNSMap) {
        if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
          domBuilder.endPrefixMapping(prefix);
        }
      }
    }
  } else {
    el.currentNSMap = currentNSMap;
    el.localNSMap = localNSMap;
    //parseStack.push(el);
    return true;
  }
}
function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
  if (/^(?:script|textarea)$/i.test(tagName)) {
    var elEndStart = source.indexOf('</' + tagName + '>', elStartEnd);
    var text = source.substring(elStartEnd + 1, elEndStart);
    if (/[&<]/.test(text)) {
      if (/^script$/i.test(tagName)) {
        //if(!/\]\]>/.test(text)){
        //lexHandler.startCDATA();
        domBuilder.characters(text, 0, text.length);
        //lexHandler.endCDATA();
        return elEndStart;
        //}
      } //}else{//text area
      text = text.replace(/&#?\w+;/g, entityReplacer);
      domBuilder.characters(text, 0, text.length);
      return elEndStart;
      //}
    }
  }

  return elStartEnd + 1;
}
function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
  //if(tagName in closeMap){
  var pos = closeMap[tagName];
  if (pos == null) {
    //console.log(tagName)
    pos = source.lastIndexOf('</' + tagName + '>');
    if (pos < elStartEnd) {
      //忘记闭合
      pos = source.lastIndexOf('</' + tagName);
    }
    closeMap[tagName] = pos;
  }
  return pos < elStartEnd;
  //}
}

function _copy(source, target) {
  for (var n in source) {
    if (Object.prototype.hasOwnProperty.call(source, n)) {
      target[n] = source[n];
    }
  }
}
function parseDCC(source, start, domBuilder, errorHandler) {
  //sure start with '<!'
  var next = source.charAt(start + 2);
  switch (next) {
    case '-':
      if (source.charAt(start + 3) === '-') {
        var end = source.indexOf('-->', start + 4);
        //append comment source.substring(4,end)//<!--
        if (end > start) {
          domBuilder.comment(source, start + 4, end - start - 4);
          return end + 3;
        } else {
          errorHandler.error("Unclosed comment");
          return -1;
        }
      } else {
        //error
        return -1;
      }
    default:
      if (source.substr(start + 3, 6) == 'CDATA[') {
        var end = source.indexOf(']]>', start + 9);
        domBuilder.startCDATA();
        domBuilder.characters(source, start + 9, end - start - 9);
        domBuilder.endCDATA();
        return end + 3;
      }
      //<!DOCTYPE
      //startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId)
      var matchs = split(source, start);
      var len = matchs.length;
      if (len > 1 && /!doctype/i.test(matchs[0][0])) {
        var name = matchs[1][0];
        var pubid = false;
        var sysid = false;
        if (len > 3) {
          if (/^public$/i.test(matchs[2][0])) {
            pubid = matchs[3][0];
            sysid = len > 4 && matchs[4][0];
          } else if (/^system$/i.test(matchs[2][0])) {
            sysid = matchs[3][0];
          }
        }
        var lastMatch = matchs[len - 1];
        domBuilder.startDTD(name, pubid, sysid);
        domBuilder.endDTD();
        return lastMatch.index + lastMatch[0].length;
      }
  }
  return -1;
}
function parseInstruction(source, start, domBuilder) {
  var end = source.indexOf('?>', start);
  if (end) {
    var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
    if (match) {
      var len = match[0].length;
      domBuilder.processingInstruction(match[1], match[2]);
      return end + 2;
    } else {
      //error
      return -1;
    }
  }
  return -1;
}
function ElementAttributes() {
  this.attributeNames = {};
}
ElementAttributes.prototype = {
  setTagName: function setTagName(tagName) {
    if (!tagNamePattern.test(tagName)) {
      throw new Error('invalid tagName:' + tagName);
    }
    this.tagName = tagName;
  },
  addValue: function addValue(qName, value, offset) {
    if (!tagNamePattern.test(qName)) {
      throw new Error('invalid attribute:' + qName);
    }
    this.attributeNames[qName] = this.length;
    this[this.length++] = {
      qName: qName,
      value: value,
      offset: offset
    };
  },
  length: 0,
  getLocalName: function getLocalName(i) {
    return this[i].localName;
  },
  getLocator: function getLocator(i) {
    return this[i].locator;
  },
  getQName: function getQName(i) {
    return this[i].qName;
  },
  getURI: function getURI(i) {
    return this[i].uri;
  },
  getValue: function getValue(i) {
    return this[i].value;
  }
  //	,getIndex:function(uri, localName)){
  //		if(localName){
  //
  //		}else{
  //			var qName = uri
  //		}
  //	},
  //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
  //	getType:function(uri,localName){}
  //	getType:function(i){},
};

function split(source, start) {
  var match;
  var buf = [];
  var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  reg.lastIndex = start;
  reg.exec(source); //skip <
  while (match = reg.exec(source)) {
    buf.push(match);
    if (match[1]) return buf;
  }
}
exports.XMLReader = XMLReader;
exports.ParseError = ParseError;
},{"./conventions":"../node_modules/@xmldom/xmldom/lib/conventions.js"}],"../node_modules/@xmldom/xmldom/lib/dom-parser.js":[function(require,module,exports) {
var conventions = require("./conventions");
var dom = require('./dom');
var entities = require('./entities');
var sax = require('./sax');
var DOMImplementation = dom.DOMImplementation;
var NAMESPACE = conventions.NAMESPACE;
var ParseError = sax.ParseError;
var XMLReader = sax.XMLReader;

/**
 * Normalizes line ending according to https://www.w3.org/TR/xml11/#sec-line-ends:
 *
 * > XML parsed entities are often stored in computer files which,
 * > for editing convenience, are organized into lines.
 * > These lines are typically separated by some combination
 * > of the characters CARRIAGE RETURN (#xD) and LINE FEED (#xA).
 * >
 * > To simplify the tasks of applications, the XML processor must behave
 * > as if it normalized all line breaks in external parsed entities (including the document entity)
 * > on input, before parsing, by translating all of the following to a single #xA character:
 * >
 * > 1. the two-character sequence #xD #xA
 * > 2. the two-character sequence #xD #x85
 * > 3. the single character #x85
 * > 4. the single character #x2028
 * > 5. any #xD character that is not immediately followed by #xA or #x85.
 *
 * @param {string} input
 * @returns {string}
 */
function normalizeLineEndings(input) {
  return input.replace(/\r[\n\u0085]/g, '\n').replace(/[\r\u0085\u2028]/g, '\n');
}

/**
 * @typedef Locator
 * @property {number} [columnNumber]
 * @property {number} [lineNumber]
 */

/**
 * @typedef DOMParserOptions
 * @property {DOMHandler} [domBuilder]
 * @property {Function} [errorHandler]
 * @property {(string) => string} [normalizeLineEndings] used to replace line endings before parsing
 * 						defaults to `normalizeLineEndings`
 * @property {Locator} [locator]
 * @property {Record<string, string>} [xmlns]
 *
 * @see normalizeLineEndings
 */

/**
 * The DOMParser interface provides the ability to parse XML or HTML source code
 * from a string into a DOM `Document`.
 *
 * _xmldom is different from the spec in that it allows an `options` parameter,
 * to override the default behavior._
 *
 * @param {DOMParserOptions} [options]
 * @constructor
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-parsing-and-serialization
 */
function DOMParser(options) {
  this.options = options || {
    locator: {}
  };
}
DOMParser.prototype.parseFromString = function (source, mimeType) {
  var options = this.options;
  var sax = new XMLReader();
  var domBuilder = options.domBuilder || new DOMHandler(); //contentHandler and LexicalHandler
  var errorHandler = options.errorHandler;
  var locator = options.locator;
  var defaultNSMap = options.xmlns || {};
  var isHTML = /\/x?html?$/.test(mimeType); //mimeType.toLowerCase().indexOf('html') > -1;
  var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
  if (locator) {
    domBuilder.setDocumentLocator(locator);
  }
  sax.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
  sax.domBuilder = options.domBuilder || domBuilder;
  if (isHTML) {
    defaultNSMap[''] = NAMESPACE.HTML;
  }
  defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
  var normalize = options.normalizeLineEndings || normalizeLineEndings;
  if (source && typeof source === 'string') {
    sax.parse(normalize(source), defaultNSMap, entityMap);
  } else {
    sax.errorHandler.error('invalid doc source');
  }
  return domBuilder.doc;
};
function buildErrorHandler(errorImpl, domBuilder, locator) {
  if (!errorImpl) {
    if (domBuilder instanceof DOMHandler) {
      return domBuilder;
    }
    errorImpl = domBuilder;
  }
  var errorHandler = {};
  var isCallback = errorImpl instanceof Function;
  locator = locator || {};
  function build(key) {
    var fn = errorImpl[key];
    if (!fn && isCallback) {
      fn = errorImpl.length == 2 ? function (msg) {
        errorImpl(key, msg);
      } : errorImpl;
    }
    errorHandler[key] = fn && function (msg) {
      fn('[xmldom ' + key + ']\t' + msg + _locator(locator));
    } || function () {};
  }
  build('warning');
  build('error');
  build('fatalError');
  return errorHandler;
}

//console.log('#\n\n\n\n\n\n\n####')
/**
 * +ContentHandler+ErrorHandler
 * +LexicalHandler+EntityResolver2
 * -DeclHandler-DTDHandler
 *
 * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
 * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
 * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
 */
function DOMHandler() {
  this.cdata = false;
}
function position(locator, node) {
  node.lineNumber = locator.lineNumber;
  node.columnNumber = locator.columnNumber;
}
/**
 * @see org.xml.sax.ContentHandler#startDocument
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
 */
DOMHandler.prototype = {
  startDocument: function startDocument() {
    this.doc = new DOMImplementation().createDocument(null, null, null);
    if (this.locator) {
      this.doc.documentURI = this.locator.systemId;
    }
  },
  startElement: function startElement(namespaceURI, localName, qName, attrs) {
    var doc = this.doc;
    var el = doc.createElementNS(namespaceURI, qName || localName);
    var len = attrs.length;
    appendElement(this, el);
    this.currentElement = el;
    this.locator && position(this.locator, el);
    for (var i = 0; i < len; i++) {
      var namespaceURI = attrs.getURI(i);
      var value = attrs.getValue(i);
      var qName = attrs.getQName(i);
      var attr = doc.createAttributeNS(namespaceURI, qName);
      this.locator && position(attrs.getLocator(i), attr);
      attr.value = attr.nodeValue = value;
      el.setAttributeNode(attr);
    }
  },
  endElement: function endElement(namespaceURI, localName, qName) {
    var current = this.currentElement;
    var tagName = current.tagName;
    this.currentElement = current.parentNode;
  },
  startPrefixMapping: function startPrefixMapping(prefix, uri) {},
  endPrefixMapping: function endPrefixMapping(prefix) {},
  processingInstruction: function processingInstruction(target, data) {
    var ins = this.doc.createProcessingInstruction(target, data);
    this.locator && position(this.locator, ins);
    appendElement(this, ins);
  },
  ignorableWhitespace: function ignorableWhitespace(ch, start, length) {},
  characters: function characters(chars, start, length) {
    chars = _toString.apply(this, arguments);
    //console.log(chars)
    if (chars) {
      if (this.cdata) {
        var charNode = this.doc.createCDATASection(chars);
      } else {
        var charNode = this.doc.createTextNode(chars);
      }
      if (this.currentElement) {
        this.currentElement.appendChild(charNode);
      } else if (/^\s*$/.test(chars)) {
        this.doc.appendChild(charNode);
        //process xml
      }

      this.locator && position(this.locator, charNode);
    }
  },
  skippedEntity: function skippedEntity(name) {},
  endDocument: function endDocument() {
    this.doc.normalize();
  },
  setDocumentLocator: function setDocumentLocator(locator) {
    if (this.locator = locator) {
      // && !('lineNumber' in locator)){
      locator.lineNumber = 0;
    }
  },
  //LexicalHandler
  comment: function comment(chars, start, length) {
    chars = _toString.apply(this, arguments);
    var comm = this.doc.createComment(chars);
    this.locator && position(this.locator, comm);
    appendElement(this, comm);
  },
  startCDATA: function startCDATA() {
    //used in characters() methods
    this.cdata = true;
  },
  endCDATA: function endCDATA() {
    this.cdata = false;
  },
  startDTD: function startDTD(name, publicId, systemId) {
    var impl = this.doc.implementation;
    if (impl && impl.createDocumentType) {
      var dt = impl.createDocumentType(name, publicId, systemId);
      this.locator && position(this.locator, dt);
      appendElement(this, dt);
      this.doc.doctype = dt;
    }
  },
  /**
   * @see org.xml.sax.ErrorHandler
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
   */
  warning: function warning(error) {
    console.warn('[xmldom warning]\t' + error, _locator(this.locator));
  },
  error: function error(_error) {
    console.error('[xmldom error]\t' + _error, _locator(this.locator));
  },
  fatalError: function fatalError(error) {
    throw new ParseError(error, this.locator);
  }
};
function _locator(l) {
  if (l) {
    return '\n@' + (l.systemId || '') + '#[line:' + l.lineNumber + ',col:' + l.columnNumber + ']';
  }
}
function _toString(chars, start, length) {
  if (typeof chars == 'string') {
    return chars.substr(start, length);
  } else {
    //java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
    if (chars.length >= start + length || start) {
      return new java.lang.String(chars, start, length) + '';
    }
    return chars;
  }
}

/*
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
 * used method of org.xml.sax.ext.LexicalHandler:
 *  #comment(chars, start, length)
 *  #startCDATA()
 *  #endCDATA()
 *  #startDTD(name, publicId, systemId)
 *
 *
 * IGNORED method of org.xml.sax.ext.LexicalHandler:
 *  #endDTD()
 *  #startEntity(name)
 *  #endEntity(name)
 *
 *
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
 * IGNORED method of org.xml.sax.ext.DeclHandler
 * 	#attributeDecl(eName, aName, type, mode, value)
 *  #elementDecl(name, model)
 *  #externalEntityDecl(name, publicId, systemId)
 *  #internalEntityDecl(name, value)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
 * IGNORED method of org.xml.sax.EntityResolver2
 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
 *  #resolveEntity(publicId, systemId)
 *  #getExternalSubset(name, baseURI)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
 * IGNORED method of org.xml.sax.DTDHandler
 *  #notationDecl(name, publicId, systemId) {};
 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
 */
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (key) {
  DOMHandler.prototype[key] = function () {
    return null;
  };
});

/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function appendElement(hander, node) {
  if (!hander.currentElement) {
    hander.doc.appendChild(node);
  } else {
    hander.currentElement.appendChild(node);
  }
} //appendChild and setAttributeNS are preformance key

exports.__DOMHandler = DOMHandler;
exports.normalizeLineEndings = normalizeLineEndings;
exports.DOMParser = DOMParser;
},{"./conventions":"../node_modules/@xmldom/xmldom/lib/conventions.js","./dom":"../node_modules/@xmldom/xmldom/lib/dom.js","./entities":"../node_modules/@xmldom/xmldom/lib/entities.js","./sax":"../node_modules/@xmldom/xmldom/lib/sax.js"}],"../node_modules/@xmldom/xmldom/lib/index.js":[function(require,module,exports) {
var dom = require('./dom');
exports.DOMImplementation = dom.DOMImplementation;
exports.XMLSerializer = dom.XMLSerializer;
exports.DOMParser = require('./dom-parser').DOMParser;
},{"./dom":"../node_modules/@xmldom/xmldom/lib/dom.js","./dom-parser":"../node_modules/@xmldom/xmldom/lib/dom-parser.js"}],"../node_modules/strophe.js/dist/strophe.umd.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.strophe = {}));
})(this, function (exports) {
  'use strict';

  var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

  /*
   * This module provides uniform
   * Shims APIs and globals that are not present in all JS environments,
   * the most common example for Strophe being browser APIs like WebSocket
   * and DOM that don't exist under nodejs.
   *
   * Usually these will be supplied in nodejs by conditionally requiring a
   * NPM module that provides a compatible implementation.
   */

  /* global global */

  /**
   * WHATWG WebSockets API
   * https://www.w3.org/TR/websockets/
   *
   * Interface to use the web socket protocol
   *
   * Used implementations:
   * - supported browsers: built-in in WebSocket global
   *   https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#Browser_compatibility
   * - nodejs: use standard-compliant 'ws' module
   *   https://www.npmjs.com/package/ws
   */
  function getWebSocketImplementation() {
    var WebSocketImplementation = global$1.WebSocket;
    if (typeof WebSocketImplementation === 'undefined') {
      try {
        WebSocketImplementation = require('ws');
      } catch (err) {
        throw new Error('You must install the "ws" package to use Strophe in nodejs.');
      }
    }
    return WebSocketImplementation;
  }
  var WebSocket = getWebSocketImplementation();

  /**
   * DOMParser
   * https://w3c.github.io/DOM-Parsing/#the-domparser-interface
   *
   * Interface to parse XML strings into Document objects
   *
   * Used implementations:
   * - supported browsers: built-in in DOMParser global
   *   https://developer.mozilla.org/en-US/docs/Web/API/DOMParser#Browser_compatibility
   * - nodejs: use '@xmldom/xmldom' module
   *   https://www.npmjs.com/package/@xmldom/xmldom
   */
  function getDOMParserImplementation() {
    var DOMParserImplementation = global$1.DOMParser;
    if (typeof DOMParserImplementation === 'undefined') {
      try {
        DOMParserImplementation = require('@xmldom/xmldom').DOMParser;
      } catch (err) {
        throw new Error('You must install the "@xmldom/xmldom" package to use Strophe in nodejs.');
      }
    }
    return DOMParserImplementation;
  }
  var DOMParser = getDOMParserImplementation();

  /**
   *  Gets IE xml doc object. Used by getDummyXMLDocument shim.
   *
   *  Returns:
   *    A Microsoft XML DOM Object
   *  See Also:
   *    http://msdn.microsoft.com/en-us/library/ms757837%28VS.85%29.aspx
   */
  function _getIEXmlDom() {
    var docStrings = ['Msxml2.DOMDocument.6.0', 'Msxml2.DOMDocument.5.0', 'Msxml2.DOMDocument.4.0', 'MSXML2.DOMDocument.3.0', 'MSXML2.DOMDocument', 'MSXML.DOMDocument', 'Microsoft.XMLDOM'];
    for (var d = 0; d < docStrings.length; d++) {
      try {
        // eslint-disable-next-line no-undef
        var doc = new ActiveXObject(docStrings[d]);
        return doc;
      } catch (e) {
        // Try next one
      }
    }
  }

  /**
   * Creates a dummy XML DOM document to serve as an element and text node generator.
   *
   * Used implementations:
   *  - IE < 10: avoid using createDocument() due to a memory leak, use ie-specific
   *    workaround
   *  - other supported browsers: use document's createDocument
   *  - nodejs: use '@xmldom/xmldom'
   */
  function getDummyXMLDOMDocument() {
    // nodejs
    if (typeof document === 'undefined') {
      try {
        var DOMImplementation = require('@xmldom/xmldom').DOMImplementation;
        return new DOMImplementation().createDocument('jabber:client', 'strophe', null);
      } catch (err) {
        throw new Error('You must install the "@xmldom/xmldom" package to use Strophe in nodejs.');
      }
    }
    // IE < 10
    if (document.implementation.createDocument === undefined || document.implementation.createDocument && document.documentMode && document.documentMode < 10) {
      var doc = _getIEXmlDom();
      doc.appendChild(doc.createElement('strophe'));
      return doc;
    }
    // All other supported browsers
    return document.implementation.createDocument('jabber:client', 'strophe', null);
  }
  var shims = /*#__PURE__*/Object.freeze({
    __proto__: null,
    WebSocket: WebSocket,
    DOMParser: DOMParser,
    getDummyXMLDOMDocument: getDummyXMLDOMDocument
  });

  /** Constants: XMPP Namespace Constants
   *  Common namespace constants from the XMPP RFCs and XEPs.
   *
   *  Strophe.NS.HTTPBIND - HTTP BIND namespace from XEP 124.
   *  Strophe.NS.BOSH - BOSH namespace from XEP 206.
   *  Strophe.NS.CLIENT - Main XMPP client namespace.
   *  Strophe.NS.AUTH - Legacy authentication namespace.
   *  Strophe.NS.ROSTER - Roster operations namespace.
   *  Strophe.NS.PROFILE - Profile namespace.
   *  Strophe.NS.DISCO_INFO - Service discovery info namespace from XEP 30.
   *  Strophe.NS.DISCO_ITEMS - Service discovery items namespace from XEP 30.
   *  Strophe.NS.MUC - Multi-User Chat namespace from XEP 45.
   *  Strophe.NS.SASL - XMPP SASL namespace from RFC 3920.
   *  Strophe.NS.STREAM - XMPP Streams namespace from RFC 3920.
   *  Strophe.NS.BIND - XMPP Binding namespace from RFC 3920 and RFC 6120.
   *  Strophe.NS.SESSION - XMPP Session namespace from RFC 3920.
   *  Strophe.NS.XHTML_IM - XHTML-IM namespace from XEP 71.
   *  Strophe.NS.XHTML - XHTML body namespace from XEP 71.
   */
  var NS = {
    HTTPBIND: 'http://jabber.org/protocol/httpbind',
    BOSH: 'urn:xmpp:xbosh',
    CLIENT: 'jabber:client',
    AUTH: 'jabber:iq:auth',
    ROSTER: 'jabber:iq:roster',
    PROFILE: 'jabber:iq:profile',
    DISCO_INFO: 'http://jabber.org/protocol/disco#info',
    DISCO_ITEMS: 'http://jabber.org/protocol/disco#items',
    MUC: 'http://jabber.org/protocol/muc',
    SASL: 'urn:ietf:params:xml:ns:xmpp-sasl',
    STREAM: 'http://etherx.jabber.org/streams',
    FRAMING: 'urn:ietf:params:xml:ns:xmpp-framing',
    BIND: 'urn:ietf:params:xml:ns:xmpp-bind',
    SESSION: 'urn:ietf:params:xml:ns:xmpp-session',
    VERSION: 'jabber:iq:version',
    STANZAS: 'urn:ietf:params:xml:ns:xmpp-stanzas',
    XHTML_IM: 'http://jabber.org/protocol/xhtml-im',
    XHTML: 'http://www.w3.org/1999/xhtml'
  };

  /** Constants: XHTML_IM Namespace
   *  contains allowed tags, tag attributes, and css properties.
   *  Used in the createHtml function to filter incoming html into the allowed XHTML-IM subset.
   *  See http://xmpp.org/extensions/xep-0071.html#profile-summary for the list of recommended
   *  allowed tags and their attributes.
   */
  var XHTML = {
    tags: ['a', 'blockquote', 'br', 'cite', 'em', 'img', 'li', 'ol', 'p', 'span', 'strong', 'ul', 'body'],
    attributes: {
      'a': ['href'],
      'blockquote': ['style'],
      'br': [],
      'cite': ['style'],
      'em': [],
      'img': ['src', 'alt', 'style', 'height', 'width'],
      'li': ['style'],
      'ol': ['style'],
      'p': ['style'],
      'span': ['style'],
      'strong': [],
      'ul': ['style'],
      'body': []
    },
    css: ['background-color', 'color', 'font-family', 'font-size', 'font-style', 'font-weight', 'margin-left', 'margin-right', 'text-align', 'text-decoration']
  };

  /** Constants: Connection Status Constants
   *  Connection status constants for use by the connection handler
   *  callback.
   *
   *  Strophe.Status.ERROR - An error has occurred
   *  Strophe.Status.CONNECTING - The connection is currently being made
   *  Strophe.Status.CONNFAIL - The connection attempt failed
   *  Strophe.Status.AUTHENTICATING - The connection is authenticating
   *  Strophe.Status.AUTHFAIL - The authentication attempt failed
   *  Strophe.Status.CONNECTED - The connection has succeeded
   *  Strophe.Status.DISCONNECTED - The connection has been terminated
   *  Strophe.Status.DISCONNECTING - The connection is currently being terminated
   *  Strophe.Status.ATTACHED - The connection has been attached
   *  Strophe.Status.REDIRECT - The connection has been redirected
   *  Strophe.Status.CONNTIMEOUT - The connection has timed out
   */
  var Status = {
    ERROR: 0,
    CONNECTING: 1,
    CONNFAIL: 2,
    AUTHENTICATING: 3,
    AUTHFAIL: 4,
    CONNECTED: 5,
    DISCONNECTED: 6,
    DISCONNECTING: 7,
    ATTACHED: 8,
    REDIRECT: 9,
    CONNTIMEOUT: 10,
    BINDREQUIRED: 11,
    ATTACHFAIL: 12
  };
  var ErrorCondition = {
    BAD_FORMAT: 'bad-format',
    CONFLICT: 'conflict',
    MISSING_JID_NODE: 'x-strophe-bad-non-anon-jid',
    NO_AUTH_MECH: 'no-auth-mech',
    UNKNOWN_REASON: 'unknown'
  };

  /** Constants: Log Level Constants
   *  Logging level indicators.
   *
   *  Strophe.LogLevel.DEBUG - Debug output
   *  Strophe.LogLevel.INFO - Informational output
   *  Strophe.LogLevel.WARN - Warnings
   *  Strophe.LogLevel.ERROR - Errors
   *  Strophe.LogLevel.FATAL - Fatal errors
   */
  var LogLevel = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    FATAL: 4
  };

  /** PrivateConstants: DOM Element Type Constants
   *  DOM element types.
   *
   *  ElementType.NORMAL - Normal element.
   *  ElementType.TEXT - Text data element.
   *  ElementType.FRAGMENT - XHTML fragment element.
   */
  var ElementType = {
    NORMAL: 1,
    TEXT: 3,
    CDATA: 4,
    FRAGMENT: 11
  };

  /* global btoa, ActiveXObject */
  function utf16to8(str) {
    var out = '';
    var len = str.length;
    for (var i = 0; i < len; i++) {
      var c = str.charCodeAt(i);
      if (c >= 0x0000 && c <= 0x007f) {
        out += str.charAt(i);
      } else if (c > 0x07ff) {
        out += String.fromCharCode(0xe0 | c >> 12 & 0x0f);
        out += String.fromCharCode(0x80 | c >> 6 & 0x3f);
        out += String.fromCharCode(0x80 | c >> 0 & 0x3f);
      } else {
        out += String.fromCharCode(0xc0 | c >> 6 & 0x1f);
        out += String.fromCharCode(0x80 | c >> 0 & 0x3f);
      }
    }
    return out;
  }
  function xorArrayBuffers(x, y) {
    var xIntArray = new Uint8Array(x);
    var yIntArray = new Uint8Array(y);
    var zIntArray = new Uint8Array(x.byteLength);
    for (var i = 0; i < x.byteLength; i++) {
      zIntArray[i] = xIntArray[i] ^ yIntArray[i];
    }
    return zIntArray.buffer;
  }
  function arrayBufToBase64(buffer) {
    // This function is due to mobz (https://stackoverflow.com/users/1234628/mobz)
    // and Emmanuel (https://stackoverflow.com/users/288564/emmanuel)
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
  function base64ToArrayBuf(str) {
    var _Uint8Array$from;
    return (_Uint8Array$from = Uint8Array.from(atob(str), function (c) {
      return c.charCodeAt(0);
    })) === null || _Uint8Array$from === void 0 ? void 0 : _Uint8Array$from.buffer;
  }
  function stringToArrayBuf(str) {
    var bytes = new TextEncoder('utf-8').encode(str);
    return bytes.buffer;
  }
  function addCookies(cookies) {
    if (typeof document === 'undefined') {
      Strophe.log(Strophe.LogLevel.ERROR, "addCookies: not adding any cookies, since there's no document object");
    }

    /* Parameters:
     *  (Object) cookies - either a map of cookie names
     *    to string values or to maps of cookie values.
     *
     * For example:
     * { "myCookie": "1234" }
     *
     * or:
     * { "myCookie": {
     *      "value": "1234",
     *      "domain": ".example.org",
     *      "path": "/",
     *      "expires": expirationDate
     *      }
     *  }
     *
     *  These values get passed to Strophe.Connection via
     *   options.cookies
     */
    cookies = cookies || {};
    for (var cookieName in cookies) {
      if (Object.prototype.hasOwnProperty.call(cookies, cookieName)) {
        var expires = '';
        var domain = '';
        var path = '';
        var cookieObj = cookies[cookieName];
        var isObj = _typeof(cookieObj) === 'object';
        var cookieValue = escape(unescape(isObj ? cookieObj.value : cookieObj));
        if (isObj) {
          expires = cookieObj.expires ? ';expires=' + cookieObj.expires : '';
          domain = cookieObj.domain ? ';domain=' + cookieObj.domain : '';
          path = cookieObj.path ? ';path=' + cookieObj.path : '';
        }
        document.cookie = cookieName + '=' + cookieValue + expires + domain + path;
      }
    }
  }
  var _xmlGenerator = null;

  /** Function: Strophe.xmlGenerator
   *  Get the DOM document to generate elements.
   *
   *  Returns:
   *    The currently used DOM document.
   */
  function xmlGenerator() {
    if (!_xmlGenerator) {
      _xmlGenerator = getDummyXMLDOMDocument();
    }
    return _xmlGenerator;
  }

  /** Function: Strophe.xmlTextNode
   *  Creates an XML DOM text node.
   *
   *  Provides a cross implementation version of document.createTextNode.
   *
   *  Parameters:
   *    (String) text - The content of the text node.
   *
   *  Returns:
   *    A new XML DOM text node.
   */
  function xmlTextNode(text) {
    return xmlGenerator().createTextNode(text);
  }

  /** Function: Strophe.xmlHtmlNode
   *  Creates an XML DOM html node.
   *
   *  Parameters:
   *    (String) html - The content of the html node.
   *
   *  Returns:
   *    A new XML DOM text node.
   */
  function xmlHtmlNode(html) {
    var node;
    //ensure text is escaped
    if (DOMParser) {
      var parser = new DOMParser();
      node = parser.parseFromString(html, 'text/xml');
    } else {
      node = new ActiveXObject('Microsoft.XMLDOM');
      node.async = 'false';
      node.loadXML(html);
    }
    return node;
  }

  /** Function: Strophe.xmlElement
   *  Create an XML DOM element.
   *
   *  This function creates an XML DOM element correctly across all
   *  implementations. Note that these are not HTML DOM elements, which
   *  aren't appropriate for XMPP stanzas.
   *
   *  Parameters:
   *    (String) name - The name for the element.
   *    (Array|Object) attrs - An optional array or object containing
   *      key/value pairs to use as element attributes. The object should
   *      be in the format {'key': 'value'} or {key: 'value'}. The array
   *      should have the format [['key1', 'value1'], ['key2', 'value2']].
   *    (String) text - The text child data for the element.
   *
   *  Returns:
   *    A new XML DOM element.
   */
  function xmlElement(name) {
    if (!name) {
      return null;
    }
    var node = xmlGenerator().createElement(name);
    // FIXME: this should throw errors if args are the wrong type or
    // there are more than two optional args
    for (var a = 1; a < arguments.length; a++) {
      var arg = arguments[a];
      if (!arg) {
        continue;
      }
      if (typeof arg === 'string' || typeof arg === 'number') {
        node.appendChild(xmlTextNode(arg));
      } else if (_typeof(arg) === 'object' && typeof arg.sort === 'function') {
        for (var i = 0; i < arg.length; i++) {
          var attr = arg[i];
          if (_typeof(attr) === 'object' && typeof attr.sort === 'function' && attr[1] !== undefined && attr[1] !== null) {
            node.setAttribute(attr[0], attr[1]);
          }
        }
      } else if (_typeof(arg) === 'object') {
        for (var k in arg) {
          if (Object.prototype.hasOwnProperty.call(arg, k) && arg[k] !== undefined && arg[k] !== null) {
            node.setAttribute(k, arg[k]);
          }
        }
      }
    }
    return node;
  }

  /** Function: Strophe.XHTML.validTag
   *
   * Utility method to determine whether a tag is allowed
   * in the XHTML_IM namespace.
   *
   * XHTML tag names are case sensitive and must be lower case.
   */
  function validTag(tag) {
    for (var i = 0; i < XHTML.tags.length; i++) {
      if (tag === XHTML.tags[i]) {
        return true;
      }
    }
    return false;
  }

  /** Function: Strophe.XHTML.validAttribute
   *
   * Utility method to determine whether an attribute is allowed
   * as recommended per XEP-0071
   *
   * XHTML attribute names are case sensitive and must be lower case.
   */
  function validAttribute(tag, attribute) {
    if (typeof XHTML.attributes[tag] !== 'undefined' && XHTML.attributes[tag].length > 0) {
      for (var i = 0; i < XHTML.attributes[tag].length; i++) {
        if (attribute === XHTML.attributes[tag][i]) {
          return true;
        }
      }
    }
    return false;
  }

  /** Function: Strophe.XHTML.validCSS */
  function validCSS(style) {
    for (var i = 0; i < XHTML.css.length; i++) {
      if (style === XHTML.css[i]) {
        return true;
      }
    }
    return false;
  }

  /** Function: Strophe.createHtml
   *
   *  Copy an HTML DOM element into an XML DOM.
   *
   *  This function copies a DOM element and all its descendants and returns
   *  the new copy.
   *
   *  Parameters:
   *    (HTMLElement) elem - A DOM element.
   *
   *  Returns:
   *    A new, copied DOM element tree.
   */
  function createHtml(elem) {
    var el;
    if (elem.nodeType === ElementType.NORMAL) {
      var tag = elem.nodeName.toLowerCase(); // XHTML tags must be lower case.
      if (validTag(tag)) {
        try {
          el = xmlElement(tag);
          for (var i = 0; i < XHTML.attributes[tag].length; i++) {
            var attribute = XHTML.attributes[tag][i];
            var value = elem.getAttribute(attribute);
            if (typeof value === 'undefined' || value === null || value === '' || value === false || value === 0) {
              continue;
            }
            if (attribute === 'style' && _typeof(value) === 'object' && typeof value.cssText !== 'undefined') {
              value = value.cssText; // we're dealing with IE, need to get CSS out
            }
            // filter out invalid css styles
            if (attribute === 'style') {
              var css = [];
              var cssAttrs = value.split(';');
              for (var j = 0; j < cssAttrs.length; j++) {
                var attr = cssAttrs[j].split(':');
                var cssName = attr[0].replace(/^\s*/, '').replace(/\s*$/, '').toLowerCase();
                if (validCSS(cssName)) {
                  var cssValue = attr[1].replace(/^\s*/, '').replace(/\s*$/, '');
                  css.push(cssName + ': ' + cssValue);
                }
              }
              if (css.length > 0) {
                value = css.join('; ');
                el.setAttribute(attribute, value);
              }
            } else {
              el.setAttribute(attribute, value);
            }
          }
          for (var _i = 0; _i < elem.childNodes.length; _i++) {
            el.appendChild(createHtml(elem.childNodes[_i]));
          }
        } catch (e) {
          // invalid elements
          el = xmlTextNode('');
        }
      } else {
        el = xmlGenerator().createDocumentFragment();
        for (var _i2 = 0; _i2 < elem.childNodes.length; _i2++) {
          el.appendChild(createHtml(elem.childNodes[_i2]));
        }
      }
    } else if (elem.nodeType === ElementType.FRAGMENT) {
      el = xmlGenerator().createDocumentFragment();
      for (var _i3 = 0; _i3 < elem.childNodes.length; _i3++) {
        el.appendChild(createHtml(elem.childNodes[_i3]));
      }
    } else if (elem.nodeType === ElementType.TEXT) {
      el = xmlTextNode(elem.nodeValue);
    }
    return el;
  }

  /** Function: Strophe.copyElement
   *  Copy an XML DOM element.
   *
   *  This function copies a DOM element and all its descendants and returns
   *  the new copy.
   *
   *  Parameters:
   *    (XMLElement) elem - A DOM element.
   *
   *  Returns:
   *    A new, copied DOM element tree.
   */
  function copyElement(elem) {
    var el;
    if (elem.nodeType === ElementType.NORMAL) {
      el = xmlElement(elem.tagName);
      for (var i = 0; i < elem.attributes.length; i++) {
        el.setAttribute(elem.attributes[i].nodeName, elem.attributes[i].value);
      }
      for (var _i4 = 0; _i4 < elem.childNodes.length; _i4++) {
        el.appendChild(copyElement(elem.childNodes[_i4]));
      }
    } else if (elem.nodeType === ElementType.TEXT) {
      el = xmlGenerator().createTextNode(elem.nodeValue);
    }
    return el;
  }

  /*  Function: Strophe.xmlescape
   *  Excapes invalid xml characters.
   *
   *  Parameters:
   *     (String) text - text to escape.
   *
   *  Returns:
   *      Escaped text.
   */
  function xmlescape(text) {
    text = text.replace(/\&/g, '&amp;');
    text = text.replace(/</g, '&lt;');
    text = text.replace(/>/g, '&gt;');
    text = text.replace(/'/g, '&apos;');
    text = text.replace(/"/g, '&quot;');
    return text;
  }

  /*  Function: Strophe.xmlunescape
   *  Unexcapes invalid xml characters.
   *
   *  Parameters:
   *     (String) text - text to unescape.
   *
   *  Returns:
   *      Unescaped text.
   */
  function xmlunescape(text) {
    text = text.replace(/\&amp;/g, '&');
    text = text.replace(/&lt;/g, '<');
    text = text.replace(/&gt;/g, '>');
    text = text.replace(/&apos;/g, "'");
    text = text.replace(/&quot;/g, '"');
    return text;
  }

  /** Function: Strophe.serialize
   *  Render a DOM element and all descendants to a String.
   *
   *  Parameters:
   *    (XMLElement) elem - A DOM element.
   *
   *  Returns:
   *    The serialized element tree as a String.
   */
  function serialize(elem) {
    if (!elem) {
      return null;
    }
    if (typeof elem.tree === 'function') {
      elem = elem.tree();
    }
    var names = _toConsumableArray(Array(elem.attributes.length).keys()).map(function (i) {
      return elem.attributes[i].nodeName;
    });
    names.sort();
    var result = names.reduce(function (a, n) {
      return "".concat(a, " ").concat(n, "=\"").concat(xmlescape(elem.attributes.getNamedItem(n).value), "\"");
    }, "<".concat(elem.nodeName));
    if (elem.childNodes.length > 0) {
      result += '>';
      for (var i = 0; i < elem.childNodes.length; i++) {
        var child = elem.childNodes[i];
        switch (child.nodeType) {
          case ElementType.NORMAL:
            // normal element, so recurse
            result += serialize(child);
            break;
          case ElementType.TEXT:
            // text element to escape values
            result += xmlescape(child.nodeValue);
            break;
          case ElementType.CDATA:
            // cdata section so don't escape values
            result += '<![CDATA[' + child.nodeValue + ']]>';
        }
      }
      result += '</' + elem.nodeName + '>';
    } else {
      result += '/>';
    }
    return result;
  }

  /** Function: Strophe.forEachChild
   *  Map a function over some or all child elements of a given element.
   *
   *  This is a small convenience function for mapping a function over
   *  some or all of the children of an element.  If elemName is null, all
   *  children will be passed to the function, otherwise only children
   *  whose tag names match elemName will be passed.
   *
   *  Parameters:
   *    (XMLElement) elem - The element to operate on.
   *    (String) elemName - The child element tag name filter.
   *    (Function) func - The function to apply to each child.  This
   *      function should take a single argument, a DOM element.
   */
  function forEachChild(elem, elemName, func) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      var childNode = elem.childNodes[i];
      if (childNode.nodeType === ElementType.NORMAL && (!elemName || this.isTagEqual(childNode, elemName))) {
        func(childNode);
      }
    }
  }

  /** Function: Strophe.isTagEqual
   *  Compare an element's tag name with a string.
   *
   *  This function is case sensitive.
   *
   *  Parameters:
   *    (XMLElement) el - A DOM element.
   *    (String) name - The element name.
   *
   *  Returns:
   *    true if the element's tag name matches _el_, and false
   *    otherwise.
   */
  function isTagEqual(el, name) {
    return el.tagName === name;
  }

  /** Function: Strophe.getText
   *  Get the concatenation of all text children of an element.
   *
   *  Parameters:
   *    (XMLElement) elem - A DOM element.
   *
   *  Returns:
   *    A String with the concatenated text of all text element children.
   */
  function getText(elem) {
    var _elem$childNodes;
    if (!elem) {
      return null;
    }
    var str = '';
    if (!((_elem$childNodes = elem.childNodes) !== null && _elem$childNodes !== void 0 && _elem$childNodes.length) && elem.nodeType === ElementType.TEXT) {
      str += elem.nodeValue;
    }
    for (var i = 0; (_ref = i < ((_elem$childNodes2 = elem.childNodes) === null || _elem$childNodes2 === void 0 ? void 0 : _elem$childNodes2.length)) !== null && _ref !== void 0 ? _ref : 0; i++) {
      var _ref, _elem$childNodes2;
      if (elem.childNodes[i].nodeType === ElementType.TEXT) {
        str += elem.childNodes[i].nodeValue;
      }
    }
    return xmlescape(str);
  }

  /** Function: Strophe.escapeNode
   *  Escape the node part (also called local part) of a JID.
   *
   *  Parameters:
   *    (String) node - A node (or local part).
   *
   *  Returns:
   *    An escaped node (or local part).
   */
  function escapeNode(node) {
    if (typeof node !== 'string') {
      return node;
    }
    return node.replace(/^\s+|\s+$/g, '').replace(/\\/g, '\\5c').replace(/ /g, '\\20').replace(/\"/g, '\\22').replace(/\&/g, '\\26').replace(/\'/g, '\\27').replace(/\//g, '\\2f').replace(/:/g, '\\3a').replace(/</g, '\\3c').replace(/>/g, '\\3e').replace(/@/g, '\\40');
  }

  /** Function: Strophe.unescapeNode
   *  Unescape a node part (also called local part) of a JID.
   *
   *  Parameters:
   *    (String) node - A node (or local part).
   *
   *  Returns:
   *    An unescaped node (or local part).
   */
  function unescapeNode(node) {
    if (typeof node !== 'string') {
      return node;
    }
    return node.replace(/\\20/g, ' ').replace(/\\22/g, '"').replace(/\\26/g, '&').replace(/\\27/g, "'").replace(/\\2f/g, '/').replace(/\\3a/g, ':').replace(/\\3c/g, '<').replace(/\\3e/g, '>').replace(/\\40/g, '@').replace(/\\5c/g, '\\');
  }

  /** Function: Strophe.getNodeFromJid
   *  Get the node portion of a JID String.
   *
   *  Parameters:
   *    (String) jid - A JID.
   *
   *  Returns:
   *    A String containing the node.
   */
  function getNodeFromJid(jid) {
    if (jid.indexOf('@') < 0) {
      return null;
    }
    return jid.split('@')[0];
  }

  /** Function: Strophe.getDomainFromJid
   *  Get the domain portion of a JID String.
   *
   *  Parameters:
   *    (String) jid - A JID.
   *
   *  Returns:
   *    A String containing the domain.
   */
  function getDomainFromJid(jid) {
    var bare = getBareJidFromJid(jid);
    if (bare.indexOf('@') < 0) {
      return bare;
    } else {
      var parts = bare.split('@');
      parts.splice(0, 1);
      return parts.join('@');
    }
  }

  /** Function: Strophe.getResourceFromJid
   *  Get the resource portion of a JID String.
   *
   *  Parameters:
   *    (String) jid - A JID.
   *
   *  Returns:
   *    A String containing the resource.
   */
  function getResourceFromJid(jid) {
    if (!jid) {
      return null;
    }
    var s = jid.split('/');
    if (s.length < 2) {
      return null;
    }
    s.splice(0, 1);
    return s.join('/');
  }

  /** Function: Strophe.getBareJidFromJid
   *  Get the bare JID from a JID String.
   *
   *  Parameters:
   *    (String) jid - A JID.
   *
   *  Returns:
   *    A String containing the bare JID.
   */
  function getBareJidFromJid(jid) {
    return jid ? jid.split('/')[0] : null;
  }
  var utils = {
    utf16to8: utf16to8,
    xorArrayBuffers: xorArrayBuffers,
    arrayBufToBase64: arrayBufToBase64,
    base64ToArrayBuf: base64ToArrayBuf,
    stringToArrayBuf: stringToArrayBuf,
    addCookies: addCookies
  };
  var utils$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    utf16to8: utf16to8,
    xorArrayBuffers: xorArrayBuffers,
    arrayBufToBase64: arrayBufToBase64,
    base64ToArrayBuf: base64ToArrayBuf,
    stringToArrayBuf: stringToArrayBuf,
    addCookies: addCookies,
    xmlGenerator: xmlGenerator,
    xmlTextNode: xmlTextNode,
    xmlHtmlNode: xmlHtmlNode,
    xmlElement: xmlElement,
    validTag: validTag,
    validAttribute: validAttribute,
    validCSS: validCSS,
    createHtml: createHtml,
    copyElement: copyElement,
    xmlescape: xmlescape,
    xmlunescape: xmlunescape,
    serialize: serialize,
    forEachChild: forEachChild,
    isTagEqual: isTagEqual,
    getText: getText,
    escapeNode: escapeNode,
    unescapeNode: unescapeNode,
    getNodeFromJid: getNodeFromJid,
    getDomainFromJid: getDomainFromJid,
    getResourceFromJid: getResourceFromJid,
    getBareJidFromJid: getBareJidFromJid,
    'default': utils
  });

  /** Function: $build
   *  Create a Strophe.Builder.
   *  This is an alias for 'new Strophe.Builder(name, attrs)'.
   *
   *  Parameters:
   *    (String) name - The root element name.
   *    (Object) attrs - The attributes for the root element in object notation.
   *
   *  Returns:
   *    A new Strophe.Builder object.
   */
  function $build(name, attrs) {
    return new Builder(name, attrs);
  }

  /** Function: $msg
   *  Create a Strophe.Builder with a <message/> element as the root.
   *
   *  Parameters:
   *    (Object) attrs - The <message/> element attributes in object notation.
   *
   *  Returns:
   *    A new Strophe.Builder object.
   */
  function $msg(attrs) {
    return new Builder('message', attrs);
  }

  /** Function: $iq
   *  Create a Strophe.Builder with an <iq/> element as the root.
   *
   *  Parameters:
   *    (Object) attrs - The <iq/> element attributes in object notation.
   *
   *  Returns:
   *    A new Strophe.Builder object.
   */
  function $iq(attrs) {
    return new Builder('iq', attrs);
  }

  /** Function: $pres
   *  Create a Strophe.Builder with a <presence/> element as the root.
   *
   *  Parameters:
   *    (Object) attrs - The <presence/> element attributes in object notation.
   *
   *  Returns:
   *    A new Strophe.Builder object.
   */
  function $pres(attrs) {
    return new Builder('presence', attrs);
  }

  /** Class: Strophe.Builder
   *  XML DOM builder.
   *
   *  This object provides an interface similar to JQuery but for building
   *  DOM elements easily and rapidly.  All the functions except for toString()
   *  and tree() return the object, so calls can be chained.  Here's an
   *  example using the $iq() builder helper.
   *  > $iq({to: 'you', from: 'me', type: 'get', id: '1'})
   *  >     .c('query', {xmlns: 'strophe:example'})
   *  >     .c('example')
   *  >     .toString()
   *
   *  The above generates this XML fragment
   *  > <iq to='you' from='me' type='get' id='1'>
   *  >   <query xmlns='strophe:example'>
   *  >     <example/>
   *  >   </query>
   *  > </iq>
   *  The corresponding DOM manipulations to get a similar fragment would be
   *  a lot more tedious and probably involve several helper variables.
   *
   *  Since adding children makes new operations operate on the child, up()
   *  is provided to traverse up the tree.  To add two children, do
   *  > builder.c('child1', ...).up().c('child2', ...)
   *  The next operation on the Builder will be relative to the second child.
   */

  /** Constructor: Strophe.Builder
   *  Create a Strophe.Builder object.
   *
   *  The attributes should be passed in object notation.  For example
   *  > let b = new Builder('message', {to: 'you', from: 'me'});
   *  or
   *  > let b = new Builder('messsage', {'xml:lang': 'en'});
   *
   *  Parameters:
   *    (String) name - The name of the root element.
   *    (Object) attrs - The attributes for the root element in object notation.
   *
   *  Returns:
   *    A new Strophe.Builder.
   */
  var Builder = /*#__PURE__*/function () {
    function Builder(name, attrs) {
      _classCallCheck(this, Builder);
      // Set correct namespace for jabber:client elements
      if (name === 'presence' || name === 'message' || name === 'iq') {
        if (attrs && !attrs.xmlns) {
          attrs.xmlns = NS.CLIENT;
        } else if (!attrs) {
          attrs = {
            xmlns: NS.CLIENT
          };
        }
      }
      // Holds the tree being built.
      this.nodeTree = xmlElement(name, attrs);
      // Points to the current operation node.
      this.node = this.nodeTree;
    }

    /** Function: tree
     *  Return the DOM tree.
     *
     *  This function returns the current DOM tree as an element object.  This
     *  is suitable for passing to functions like Strophe.Connection.send().
     *
     *  Returns:
     *    The DOM tree as a element object.
     */
    _createClass(Builder, [{
      key: "tree",
      value: function tree() {
        return this.nodeTree;
      }

      /** Function: toString
       *  Serialize the DOM tree to a String.
       *
       *  This function returns a string serialization of the current DOM
       *  tree.  It is often used internally to pass data to a
       *  Strophe.Request object.
       *
       *  Returns:
       *    The serialized DOM tree in a String.
       */
    }, {
      key: "toString",
      value: function toString() {
        return serialize(this.nodeTree);
      }

      /** Function: up
       *  Make the current parent element the new current element.
       *
       *  This function is often used after c() to traverse back up the tree.
       *  For example, to add two children to the same element
       *  > builder.c('child1', {}).up().c('child2', {});
       *
       *  Returns:
       *    The Stophe.Builder object.
       */
    }, {
      key: "up",
      value: function up() {
        this.node = this.node.parentNode;
        return this;
      }

      /** Function: root
       *  Make the root element the new current element.
       *
       *  When at a deeply nested element in the tree, this function can be used
       *  to jump back to the root of the tree, instead of having to repeatedly
       *  call up().
       *
       *  Returns:
       *    The Stophe.Builder object.
       */
    }, {
      key: "root",
      value: function root() {
        this.node = this.nodeTree;
        return this;
      }

      /** Function: attrs
       *  Add or modify attributes of the current element.
       *
       *  The attributes should be passed in object notation.  This function
       *  does not move the current element pointer.
       *
       *  Parameters:
       *    (Object) moreattrs - The attributes to add/modify in object notation.
       *
       *  Returns:
       *    The Strophe.Builder object.
       */
    }, {
      key: "attrs",
      value: function attrs(moreattrs) {
        for (var k in moreattrs) {
          if (Object.prototype.hasOwnProperty.call(moreattrs, k)) {
            if (moreattrs[k] === undefined) {
              this.node.removeAttribute(k);
            } else {
              this.node.setAttribute(k, moreattrs[k]);
            }
          }
        }
        return this;
      }

      /** Function: c
       *  Add a child to the current element and make it the new current
       *  element.
       *
       *  This function moves the current element pointer to the child,
       *  unless text is provided.  If you need to add another child, it
       *  is necessary to use up() to go back to the parent in the tree.
       *
       *  Parameters:
       *    (String) name - The name of the child.
       *    (Object) attrs - The attributes of the child in object notation.
       *    (String) text - The text to add to the child.
       *
       *  Returns:
       *    The Strophe.Builder object.
       */
    }, {
      key: "c",
      value: function c(name, attrs, text) {
        var child = xmlElement(name, attrs, text);
        this.node.appendChild(child);
        if (typeof text !== 'string' && typeof text !== 'number') {
          this.node = child;
        }
        return this;
      }

      /** Function: cnode
       *  Add a child to the current element and make it the new current
       *  element.
       *
       *  This function is the same as c() except that instead of using a
       *  name and an attributes object to create the child it uses an
       *  existing DOM element object.
       *
       *  Parameters:
       *    (XMLElement) elem - A DOM element.
       *
       *  Returns:
       *    The Strophe.Builder object.
       */
    }, {
      key: "cnode",
      value: function cnode(elem) {
        var impNode;
        var xmlGen = xmlGenerator();
        try {
          impNode = xmlGen.importNode !== undefined;
        } catch (e) {
          impNode = false;
        }
        var newElem = impNode ? xmlGen.importNode(elem, true) : copyElement(elem);
        this.node.appendChild(newElem);
        this.node = newElem;
        return this;
      }

      /** Function: t
       *  Add a child text element.
       *
       *  This *does not* make the child the new current element since there
       *  are no children of text elements.
       *
       *  Parameters:
       *    (String) text - The text data to append to the current element.
       *
       *  Returns:
       *    The Strophe.Builder object.
       */
    }, {
      key: "t",
      value: function t(text) {
        var child = xmlTextNode(text);
        this.node.appendChild(child);
        return this;
      }

      /** Function: h
       *  Replace current element contents with the HTML passed in.
       *
       *  This *does not* make the child the new current element
       *
       *  Parameters:
       *    (String) html - The html to insert as contents of current element.
       *
       *  Returns:
       *    The Strophe.Builder object.
       */
    }, {
      key: "h",
      value: function h(html) {
        var fragment = xmlGenerator().createElement('body');
        // force the browser to try and fix any invalid HTML tags
        fragment.innerHTML = html;
        // copy cleaned html into an xml dom
        var xhtml = createHtml(fragment);
        while (xhtml.childNodes.length > 0) {
          this.node.appendChild(xhtml.childNodes[0]);
        }
        return this;
      }
    }]);
    return Builder;
  }();
  /** PrivateClass: Strophe.Handler
   *  _Private_ helper class for managing stanza handlers.
   *
   *  A Strophe.Handler encapsulates a user provided callback function to be
   *  executed when matching stanzas are received by the connection.
   *  Handlers can be either one-off or persistant depending on their
   *  return value. Returning true will cause a Handler to remain active, and
   *  returning false will remove the Handler.
   *
   *  Users will not use Strophe.Handler objects directly, but instead they
   *  will use Strophe.Connection.addHandler() and
   *  Strophe.Connection.deleteHandler().
   */
  /** PrivateConstructor: Strophe.Handler
   *  Create and initialize a new Strophe.Handler.
   *
   *  Parameters:
   *    (Function) handler - A function to be executed when the handler is run.
   *    (String) ns - The namespace to match.
   *    (String) name - The element name to match.
   *    (String) type - The element type to match.
   *    (String) id - The element id attribute to match.
   *    (String) from - The element from attribute to match.
   *    (Object) options - Handler options
   *
   *  Returns:
   *    A new Strophe.Handler object.
   */
  var Handler = /*#__PURE__*/function () {
    function Handler(handler, ns, name, type, id, from, options) {
      _classCallCheck(this, Handler);
      this.handler = handler;
      this.ns = ns;
      this.name = name;
      this.type = type;
      this.id = id;
      this.options = options || {
        'matchBareFromJid': false,
        'ignoreNamespaceFragment': false
      };
      // BBB: Maintain backward compatibility with old `matchBare` option
      if (this.options.matchBare) {
        Strophe.warn('The "matchBare" option is deprecated, use "matchBareFromJid" instead.');
        this.options.matchBareFromJid = this.options.matchBare;
        delete this.options.matchBare;
      }
      if (this.options.matchBareFromJid) {
        this.from = from ? getBareJidFromJid(from) : null;
      } else {
        this.from = from;
      }
      // whether the handler is a user handler or a system handler
      this.user = true;
    }

    /** PrivateFunction: getNamespace
     *  Returns the XML namespace attribute on an element.
     *  If `ignoreNamespaceFragment` was passed in for this handler, then the
     *  URL fragment will be stripped.
     *
     *  Parameters:
     *    (XMLElement) elem - The XML element with the namespace.
     *
     *  Returns:
     *    The namespace, with optionally the fragment stripped.
     */
    _createClass(Handler, [{
      key: "getNamespace",
      value: function getNamespace(elem) {
        var elNamespace = elem.getAttribute('xmlns');
        if (elNamespace && this.options.ignoreNamespaceFragment) {
          elNamespace = elNamespace.split('#')[0];
        }
        return elNamespace;
      }

      /** PrivateFunction: namespaceMatch
       *  Tests if a stanza matches the namespace set for this Strophe.Handler.
       *
       *  Parameters:
       *    (XMLElement) elem - The XML element to test.
       *
       *  Returns:
       *    true if the stanza matches and false otherwise.
       */
    }, {
      key: "namespaceMatch",
      value: function namespaceMatch(elem) {
        var _this = this;
        var nsMatch = false;
        if (!this.ns) {
          return true;
        } else {
          forEachChild(elem, null, function (elem) {
            if (_this.getNamespace(elem) === _this.ns) {
              nsMatch = true;
            }
          });
          return nsMatch || this.getNamespace(elem) === this.ns;
        }
      }

      /** PrivateFunction: isMatch
       *  Tests if a stanza matches the Strophe.Handler.
       *
       *  Parameters:
       *    (XMLElement) elem - The XML element to test.
       *
       *  Returns:
       *    true if the stanza matches and false otherwise.
       */
    }, {
      key: "isMatch",
      value: function isMatch(elem) {
        var from = elem.getAttribute('from');
        if (this.options.matchBareFromJid) {
          from = getBareJidFromJid(from);
        }
        var elem_type = elem.getAttribute('type');
        if (this.namespaceMatch(elem) && (!this.name || Strophe.isTagEqual(elem, this.name)) && (!this.type || (Array.isArray(this.type) ? this.type.indexOf(elem_type) !== -1 : elem_type === this.type)) && (!this.id || elem.getAttribute('id') === this.id) && (!this.from || from === this.from)) {
          return true;
        }
        return false;
      }

      /** PrivateFunction: run
       *  Run the callback on a matching stanza.
       *
       *  Parameters:
       *    (XMLElement) elem - The DOM element that triggered the
       *      Strophe.Handler.
       *
       *  Returns:
       *    A boolean indicating if the handler should remain active.
       */
    }, {
      key: "run",
      value: function run(elem) {
        var result = null;
        try {
          result = this.handler(elem);
        } catch (e) {
          Strophe._handleError(e);
          throw e;
        }
        return result;
      }

      /** PrivateFunction: toString
       *  Get a String representation of the Strophe.Handler object.
       *
       *  Returns:
       *    A String.
       */
    }, {
      key: "toString",
      value: function toString() {
        return '{Handler: ' + this.handler + '(' + this.name + ',' + this.id + ',' + this.ns + ')}';
      }
    }]);
    return Handler;
  }();
  /** PrivateClass: Strophe.TimedHandler
   *  _Private_ helper class for managing timed handlers.
   *
   *  A Strophe.TimedHandler encapsulates a user provided callback that
   *  should be called after a certain period of time or at regular
   *  intervals.  The return value of the callback determines whether the
   *  Strophe.TimedHandler will continue to fire.
   *
   *  Users will not use Strophe.TimedHandler objects directly, but instead
   *  they will use Strophe.Connection.addTimedHandler() and
   *  Strophe.Connection.deleteTimedHandler().
   */
  var TimedHandler = /*#__PURE__*/function () {
    /** PrivateConstructor: Strophe.TimedHandler
     *  Create and initialize a new Strophe.TimedHandler object.
     *
     *  Parameters:
     *    (Integer) period - The number of milliseconds to wait before the
     *      handler is called.
     *    (Function) handler - The callback to run when the handler fires.  This
     *      function should take no arguments.
     *
     *  Returns:
     *    A new Strophe.TimedHandler object.
     */
    function TimedHandler(period, handler) {
      _classCallCheck(this, TimedHandler);
      this.period = period;
      this.handler = handler;
      this.lastCalled = new Date().getTime();
      this.user = true;
    }

    /** PrivateFunction: run
     *  Run the callback for the Strophe.TimedHandler.
     *
     *  Returns:
     *    true if the Strophe.TimedHandler should be called again, and false
     *      otherwise.
     */
    _createClass(TimedHandler, [{
      key: "run",
      value: function run() {
        this.lastCalled = new Date().getTime();
        return this.handler();
      }

      /** PrivateFunction: reset
       *  Reset the last called time for the Strophe.TimedHandler.
       */
    }, {
      key: "reset",
      value: function reset() {
        this.lastCalled = new Date().getTime();
      }

      /** PrivateFunction: toString
       *  Get a string representation of the Strophe.TimedHandler object.
       *
       *  Returns:
       *    The string representation.
       */
    }, {
      key: "toString",
      value: function toString() {
        return '{TimedHandler: ' + this.handler + '(' + this.period + ')}';
      }
    }]);
    return TimedHandler;
  }();
  /**
   * Implementation of atob() according to the HTML and Infra specs, except that
   * instead of throwing INVALID_CHARACTER_ERR we return null.
   */
  function atob$2(data) {
    if (arguments.length === 0) {
      throw new TypeError("1 argument required, but only 0 present.");
    }

    // Web IDL requires DOMStrings to just be converted using ECMAScript
    // ToString, which in our case amounts to using a template literal.
    data = "".concat(data);
    // "Remove all ASCII whitespace from data."
    data = data.replace(/[ \t\n\f\r]/g, "");
    // "If data's length divides by 4 leaving no remainder, then: if data ends
    // with one or two U+003D (=) code points, then remove them from data."
    if (data.length % 4 === 0) {
      data = data.replace(/==?$/, "");
    }
    // "If data's length divides by 4 leaving a remainder of 1, then return
    // failure."
    //
    // "If data contains a code point that is not one of
    //
    // U+002B (+)
    // U+002F (/)
    // ASCII alphanumeric
    //
    // then return failure."
    if (data.length % 4 === 1 || /[^+/0-9A-Za-z]/.test(data)) {
      return null;
    }
    // "Let output be an empty byte sequence."
    var output = "";
    // "Let buffer be an empty buffer that can have bits appended to it."
    //
    // We append bits via left-shift and or.  accumulatedBits is used to track
    // when we've gotten to 24 bits.
    var buffer = 0;
    var accumulatedBits = 0;
    // "Let position be a position variable for data, initially pointing at the
    // start of data."
    //
    // "While position does not point past the end of data:"
    for (var i = 0; i < data.length; i++) {
      // "Find the code point pointed to by position in the second column of
      // Table 1: The Base 64 Alphabet of RFC 4648. Let n be the number given in
      // the first cell of the same row.
      //
      // "Append to buffer the six bits corresponding to n, most significant bit
      // first."
      //
      // atobLookup() implements the table from RFC 4648.
      buffer <<= 6;
      buffer |= atobLookup(data[i]);
      accumulatedBits += 6;
      // "If buffer has accumulated 24 bits, interpret them as three 8-bit
      // big-endian numbers. Append three bytes with values equal to those
      // numbers to output, in the same order, and then empty buffer."
      if (accumulatedBits === 24) {
        output += String.fromCharCode((buffer & 0xff0000) >> 16);
        output += String.fromCharCode((buffer & 0xff00) >> 8);
        output += String.fromCharCode(buffer & 0xff);
        buffer = accumulatedBits = 0;
      }
      // "Advance position by 1."
    }
    // "If buffer is not empty, it contains either 12 or 18 bits. If it contains
    // 12 bits, then discard the last four and interpret the remaining eight as
    // an 8-bit big-endian number. If it contains 18 bits, then discard the last
    // two and interpret the remaining 16 as two 8-bit big-endian numbers. Append
    // the one or two bytes with values equal to those one or two numbers to
    // output, in the same order."
    if (accumulatedBits === 12) {
      buffer >>= 4;
      output += String.fromCharCode(buffer);
    } else if (accumulatedBits === 18) {
      buffer >>= 2;
      output += String.fromCharCode((buffer & 0xff00) >> 8);
      output += String.fromCharCode(buffer & 0xff);
    }
    // "Return output."
    return output;
  }
  /**
   * A lookup table for atob(), which converts an ASCII character to the
   * corresponding six-bit number.
   */

  var keystr$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  function atobLookup(chr) {
    var index = keystr$1.indexOf(chr);
    // Throw exception if character is not in the lookup string; should not be hit in tests
    return index < 0 ? undefined : index;
  }
  var atob_1 = atob$2;

  /**
   * btoa() as defined by the HTML and Infra specs, which mostly just references
   * RFC 4648.
   */
  function btoa$2(s) {
    if (arguments.length === 0) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    var i;
    // String conversion as required by Web IDL.
    s = "".concat(s);
    // "The btoa() method must throw an "InvalidCharacterError" DOMException if
    // data contains any character whose code point is greater than U+00FF."
    for (i = 0; i < s.length; i++) {
      if (s.charCodeAt(i) > 255) {
        return null;
      }
    }
    var out = "";
    for (i = 0; i < s.length; i += 3) {
      var groupsOfSix = [undefined, undefined, undefined, undefined];
      groupsOfSix[0] = s.charCodeAt(i) >> 2;
      groupsOfSix[1] = (s.charCodeAt(i) & 0x03) << 4;
      if (s.length > i + 1) {
        groupsOfSix[1] |= s.charCodeAt(i + 1) >> 4;
        groupsOfSix[2] = (s.charCodeAt(i + 1) & 0x0f) << 2;
      }
      if (s.length > i + 2) {
        groupsOfSix[2] |= s.charCodeAt(i + 2) >> 6;
        groupsOfSix[3] = s.charCodeAt(i + 2) & 0x3f;
      }
      for (var j = 0; j < groupsOfSix.length; j++) {
        if (typeof groupsOfSix[j] === "undefined") {
          out += "=";
        } else {
          out += btoaLookup(groupsOfSix[j]);
        }
      }
    }
    return out;
  }

  /**
   * Lookup table for btoa(), which converts a six-bit number into the
   * corresponding ASCII character.
   */
  var keystr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  function btoaLookup(index) {
    if (index >= 0 && index < 64) {
      return keystr[index];
    }

    // Throw INVALID_CHARACTER_ERR exception here -- won't be hit in the tests.
    return undefined;
  }
  var btoa_1 = btoa$2;
  var atob$1 = atob_1;
  var btoa$1 = btoa_1;
  var abab = {
    atob: atob$1,
    btoa: btoa$1
  };

  /*sessionStorage, setTimeout, clearTimeout */

  /** Class: Strophe.Connection
   *  XMPP Connection manager.
   *
   *  This class is the main part of Strophe.  It manages a BOSH or websocket
   *  connection to an XMPP server and dispatches events to the user callbacks
   *  as data arrives. It supports SASL PLAIN, SASL SCRAM-SHA-1
   *  and legacy authentication.
   *
   *  After creating a Strophe.Connection object, the user will typically
   *  call connect() with a user supplied callback to handle connection level
   *  events like authentication failure, disconnection, or connection
   *  complete.
   *
   *  The user will also have several event handlers defined by using
   *  addHandler() and addTimedHandler().  These will allow the user code to
   *  respond to interesting stanzas or do something periodically with the
   *  connection. These handlers will be active once authentication is
   *  finished.
   *
   *  To send data to the connection, use send().
   */

  /** Constructor: Strophe.Connection
   *  Create and initialize a Strophe.Connection object.
   *
   *  The transport-protocol for this connection will be chosen automatically
   *  based on the given service parameter. URLs starting with "ws://" or
   *  "wss://" will use WebSockets, URLs starting with "http://", "https://"
   *  or without a protocol will use BOSH.
   *
   *  To make Strophe connect to the current host you can leave out the protocol
   *  and host part and just pass the path, e.g.
   *
   *  > let conn = new Strophe.Connection("/http-bind/");
   *
   *  Options common to both Websocket and BOSH:
   *  ------------------------------------------
   *
   *  cookies:
   *
   *  The *cookies* option allows you to pass in cookies to be added to the
   *  document. These cookies will then be included in the BOSH XMLHttpRequest
   *  or in the websocket connection.
   *
   *  The passed in value must be a map of cookie names and string values.
   *
   *  > { "myCookie": {
   *  >     "value": "1234",
   *  >     "domain": ".example.org",
   *  >     "path": "/",
   *  >     "expires": expirationDate
   *  >     }
   *  > }
   *
   *  Note that cookies can't be set in this way for other domains (i.e. cross-domain).
   *  Those cookies need to be set under those domains, for example they can be
   *  set server-side by making a XHR call to that domain to ask it to set any
   *  necessary cookies.
   *
   *  mechanisms:
   *
   *  The *mechanisms* option allows you to specify the SASL mechanisms that this
   *  instance of Strophe.Connection (and therefore your XMPP client) will
   *  support.
   *
   *  The value must be an array of objects with Strophe.SASLMechanism
   *  prototypes.
   *
   *  If nothing is specified, then the following mechanisms (and their
   *  priorities) are registered:
   *
   *      SCRAM-SHA-512 - 72
   *      SCRAM-SHA-384 - 71
   *      SCRAM-SHA-256 - 70
   *      SCRAM-SHA-1   - 60
   *      PLAIN         - 50
   *      OAUTHBEARER   - 40
   *      X-OAUTH2      - 30
   *      ANONYMOUS     - 20
   *      EXTERNAL      - 10
   *
   *  explicitResourceBinding:
   *
   *  If `explicitResourceBinding` is set to a truthy value, then the XMPP client
   *  needs to explicitly call `Strophe.Connection.prototype.bind` once the XMPP
   *  server has advertised the "urn:ietf:params:xml:ns:xmpp-bind" feature.
   *
   *  Making this step explicit allows client authors to first finish other
   *  stream related tasks, such as setting up an XEP-0198 Stream Management
   *  session, before binding the JID resource for this session.
   *
   *  WebSocket options:
   *  ------------------
   *
   *  protocol:
   *
   *  If you want to connect to the current host with a WebSocket connection you
   *  can tell Strophe to use WebSockets through a "protocol" attribute in the
   *  optional options parameter. Valid values are "ws" for WebSocket and "wss"
   *  for Secure WebSocket.
   *  So to connect to "wss://CURRENT_HOSTNAME/xmpp-websocket" you would call
   *
   *  > let conn = new Strophe.Connection("/xmpp-websocket/", {protocol: "wss"});
   *
   *  Note that relative URLs _NOT_ starting with a "/" will also include the path
   *  of the current site.
   *
   *  Also because downgrading security is not permitted by browsers, when using
   *  relative URLs both BOSH and WebSocket connections will use their secure
   *  variants if the current connection to the site is also secure (https).
   *
   *  worker:
   *
   *  Set this option to URL from where the shared worker script should be loaded.
   *
   *  To run the websocket connection inside a shared worker.
   *  This allows you to share a single websocket-based connection between
   *  multiple Strophe.Connection instances, for example one per browser tab.
   *
   *  The script to use is the one in `src/shared-connection-worker.js`.
   *
   *  BOSH options:
   *  -------------
   *
   *  By adding "sync" to the options, you can control if requests will
   *  be made synchronously or not. The default behaviour is asynchronous.
   *  If you want to make requests synchronous, make "sync" evaluate to true.
   *  > let conn = new Strophe.Connection("/http-bind/", {sync: true});
   *
   *  You can also toggle this on an already established connection.
   *  > conn.options.sync = true;
   *
   *  The *customHeaders* option can be used to provide custom HTTP headers to be
   *  included in the XMLHttpRequests made.
   *
   *  The *keepalive* option can be used to instruct Strophe to maintain the
   *  current BOSH session across interruptions such as webpage reloads.
   *
   *  It will do this by caching the sessions tokens in sessionStorage, and when
   *  "restore" is called it will check whether there are cached tokens with
   *  which it can resume an existing session.
   *
   *  The *withCredentials* option should receive a Boolean value and is used to
   *  indicate wether cookies should be included in ajax requests (by default
   *  they're not).
   *  Set this value to true if you are connecting to a BOSH service
   *  and for some reason need to send cookies to it.
   *  In order for this to work cross-domain, the server must also enable
   *  credentials by setting the Access-Control-Allow-Credentials response header
   *  to "true". For most usecases however this setting should be false (which
   *  is the default).
   *  Additionally, when using Access-Control-Allow-Credentials, the
   *  Access-Control-Allow-Origin header can't be set to the wildcard "*", but
   *  instead must be restricted to actual domains.
   *
   *  The *contentType* option can be set to change the default Content-Type
   *  of "text/xml; charset=utf-8", which can be useful to reduce the amount of
   *  CORS preflight requests that are sent to the server.
   *
   *  Parameters:
   *    (String) service - The BOSH or WebSocket service URL.
   *    (Object) options - A hash of configuration options
   *
   *  Returns:
   *    A new Strophe.Connection object.
   */
  var Connection = /*#__PURE__*/function () {
    function Connection(service, options) {
      var _this2 = this;
      _classCallCheck(this, Connection);
      // The service URL
      this.service = service;
      // Configuration options
      this.options = options || {};
      this.setProtocol();

      /* The connected JID. */
      this.jid = '';
      /* the JIDs domain */
      this.domain = null;
      /* stream:features */
      this.features = null;

      // SASL
      this._sasl_data = {};
      this.do_bind = false;
      this.do_session = false;
      this.mechanisms = {};

      // handler lists
      this.timedHandlers = [];
      this.handlers = [];
      this.removeTimeds = [];
      this.removeHandlers = [];
      this.addTimeds = [];
      this.addHandlers = [];
      this.protocolErrorHandlers = {
        'HTTP': {},
        'websocket': {}
      };
      this._idleTimeout = null;
      this._disconnectTimeout = null;
      this.authenticated = false;
      this.connected = false;
      this.disconnecting = false;
      this.do_authentication = true;
      this.paused = false;
      this.restored = false;
      this._data = [];
      this._uniqueId = 0;
      this._sasl_success_handler = null;
      this._sasl_failure_handler = null;
      this._sasl_challenge_handler = null;

      // Max retries before disconnecting
      this.maxRetries = 5;

      // Call onIdle callback every 1/10th of a second
      this._idleTimeout = setTimeout(function () {
        return _this2._onIdle();
      }, 100);
      addCookies(this.options.cookies);
      this.registerSASLMechanisms(this.options.mechanisms);

      // A client must always respond to incoming IQ "set" and "get" stanzas.
      // See https://datatracker.ietf.org/doc/html/rfc6120#section-8.2.3
      //
      // This is a fallback handler which gets called when no other handler
      // was called for a received IQ "set" or "get".
      this.iqFallbackHandler = new Handler(function (iq) {
        return _this2.send($iq({
          type: 'error',
          id: iq.getAttribute('id')
        }).c('error', {
          'type': 'cancel'
        }).c('service-unavailable', {
          'xmlns': Strophe.NS.STANZAS
        }));
      }, null, 'iq', ['get', 'set']);

      // initialize plugins
      for (var k in Strophe._connectionPlugins) {
        if (Object.prototype.hasOwnProperty.call(Strophe._connectionPlugins, k)) {
          var F = function F() {};
          F.prototype = Strophe._connectionPlugins[k];
          this[k] = new F();
          this[k].init(this);
        }
      }
    }

    /** Function: setProtocol
     *  Select protocal based on this.options or this.service
     */
    _createClass(Connection, [{
      key: "setProtocol",
      value: function setProtocol() {
        var proto = this.options.protocol || '';
        if (this.options.worker) {
          this._proto = new Strophe.WorkerWebsocket(this);
        } else if (this.service.indexOf('ws:') === 0 || this.service.indexOf('wss:') === 0 || proto.indexOf('ws') === 0) {
          this._proto = new Strophe.Websocket(this);
        } else {
          this._proto = new Strophe.Bosh(this);
        }
      }

      /** Function: reset
       *  Reset the connection.
       *
       *  This function should be called after a connection is disconnected
       *  before that connection is reused.
       */
    }, {
      key: "reset",
      value: function reset() {
        this._proto._reset();

        // SASL
        this.do_session = false;
        this.do_bind = false;

        // handler lists
        this.timedHandlers = [];
        this.handlers = [];
        this.removeTimeds = [];
        this.removeHandlers = [];
        this.addTimeds = [];
        this.addHandlers = [];
        this.authenticated = false;
        this.connected = false;
        this.disconnecting = false;
        this.restored = false;
        this._data = [];
        this._requests = [];
        this._uniqueId = 0;
      }

      /** Function: pause
       *  Pause the request manager.
       *
       *  This will prevent Strophe from sending any more requests to the
       *  server.  This is very useful for temporarily pausing
       *  BOSH-Connections while a lot of send() calls are happening quickly.
       *  This causes Strophe to send the data in a single request, saving
       *  many request trips.
       */
    }, {
      key: "pause",
      value: function pause() {
        this.paused = true;
      }

      /** Function: resume
       *  Resume the request manager.
       *
       *  This resumes after pause() has been called.
       */
    }, {
      key: "resume",
      value: function resume() {
        this.paused = false;
      }

      /** Function: getUniqueId
       *  Generate a unique ID for use in <iq/> elements.
       *
       *  All <iq/> stanzas are required to have unique id attributes.  This
       *  function makes creating these easy.  Each connection instance has
       *  a counter which starts from zero, and the value of this counter
       *  plus a colon followed by the suffix becomes the unique id. If no
       *  suffix is supplied, the counter is used as the unique id.
       *
       *  Suffixes are used to make debugging easier when reading the stream
       *  data, and their use is recommended.  The counter resets to 0 for
       *  every new connection for the same reason.  For connections to the
       *  same server that authenticate the same way, all the ids should be
       *  the same, which makes it easy to see changes.  This is useful for
       *  automated testing as well.
       *
       *  Parameters:
       *    (String) suffix - A optional suffix to append to the id.
       *
       *  Returns:
       *    A unique string to be used for the id attribute.
       */
      // eslint-disable-next-line class-methods-use-this
    }, {
      key: "getUniqueId",
      value: function getUniqueId(suffix) {
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
        if (typeof suffix === 'string' || typeof suffix === 'number') {
          return uuid + ':' + suffix;
        } else {
          return uuid + '';
        }
      }

      /** Function: addProtocolErrorHandler
       *  Register a handler function for when a protocol (websocker or HTTP)
       *  error occurs.
       *
       *  NOTE: Currently only HTTP errors for BOSH requests are handled.
       *  Patches that handle websocket errors would be very welcome.
       *
       *  Parameters:
       *    (String) protocol - 'HTTP' or 'websocket'
       *    (Integer) status_code - Error status code (e.g 500, 400 or 404)
       *    (Function) callback - Function that will fire on Http error
       *
       *  Example:
       *  function onError(err_code){
       *    //do stuff
       *  }
       *
       *  let conn = Strophe.connect('http://example.com/http-bind');
       *  conn.addProtocolErrorHandler('HTTP', 500, onError);
       *  // Triggers HTTP 500 error and onError handler will be called
       *  conn.connect('user_jid@incorrect_jabber_host', 'secret', onConnect);
       */
    }, {
      key: "addProtocolErrorHandler",
      value: function addProtocolErrorHandler(protocol, status_code, callback) {
        this.protocolErrorHandlers[protocol][status_code] = callback;
      }

      /** Function: connect
       *  Starts the connection process.
       *
       *  As the connection process proceeds, the user supplied callback will
       *  be triggered multiple times with status updates.  The callback
       *  should take two arguments - the status code and the error condition.
       *
       *  The status code will be one of the values in the Strophe.Status
       *  constants.  The error condition will be one of the conditions
       *  defined in RFC 3920 or the condition 'strophe-parsererror'.
       *
       *  The Parameters _wait_, _hold_ and _route_ are optional and only relevant
       *  for BOSH connections. Please see XEP 124 for a more detailed explanation
       *  of the optional parameters.
       *
       *  Parameters:
       *    (String) jid - The user's JID.  This may be a bare JID,
       *      or a full JID.  If a node is not supplied, SASL OAUTHBEARER or
       *      SASL ANONYMOUS authentication will be attempted (OAUTHBEARER will
       *      process the provided password value as an access token).
       *    (String or Object) pass - The user's password, or an object containing
       *      the users SCRAM client and server keys, in a fashion described as follows:
       *
       *      { name: String, representing the hash used (eg. SHA-1),
       *        salt: String, base64 encoded salt used to derive the client key,
       *        iter: Int,    the iteration count used to derive the client key,
       *        ck:   String, the base64 encoding of the SCRAM client key
       *        sk:   String, the base64 encoding of the SCRAM server key
       *      }
       *
       *    (Function) callback - The connect callback function.
       *    (Integer) wait - The optional HTTPBIND wait value.  This is the
       *      time the server will wait before returning an empty result for
       *      a request.  The default setting of 60 seconds is recommended.
       *    (Integer) hold - The optional HTTPBIND hold value.  This is the
       *      number of connections the server will hold at one time.  This
       *      should almost always be set to 1 (the default).
       *    (String) route - The optional route value.
       *    (String) authcid - The optional alternative authentication identity
       *      (username) if intending to impersonate another user.
       *      When using the SASL-EXTERNAL authentication mechanism, for example
       *      with client certificates, then the authcid value is used to
       *      determine whether an authorization JID (authzid) should be sent to
       *      the server. The authzid should NOT be sent to the server if the
       *      authzid and authcid are the same. So to prevent it from being sent
       *      (for example when the JID is already contained in the client
       *      certificate), set authcid to that same JID. See XEP-178 for more
       *      details.
       *     (Integer) disconnection_timeout - The optional disconnection timeout
       *      in milliseconds before _doDisconnect will be called.
       */
    }, {
      key: "connect",
      value: function connect(jid, pass, callback, wait, hold, route, authcid) {
        var disconnection_timeout = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 3000;
        this.jid = jid;
        /** Variable: authzid
         *  Authorization identity.
         */
        this.authzid = Strophe.getBareJidFromJid(this.jid);

        /** Variable: authcid
         *  Authentication identity (User name).
         */
        this.authcid = authcid || Strophe.getNodeFromJid(this.jid);

        /** Variable: pass
         *  Authentication identity (User password).
         *
         */
        this.pass = pass;

        /** Variable: scram_keys
         *  The SASL SCRAM client and server keys. This variable will be populated with a non-null
         *  object of the above described form after a successful SCRAM connection
         *
         */
        this.scram_keys = null;
        this.connect_callback = callback;
        this.disconnecting = false;
        this.connected = false;
        this.authenticated = false;
        this.restored = false;
        this.disconnection_timeout = disconnection_timeout;

        // parse jid for domain
        this.domain = Strophe.getDomainFromJid(this.jid);
        this._changeConnectStatus(Status.CONNECTING, null);
        this._proto._connect(wait, hold, route);
      }

      /** Function: attach
       *  Attach to an already created and authenticated BOSH session.
       *
       *  This function is provided to allow Strophe to attach to BOSH
       *  sessions which have been created externally, perhaps by a Web
       *  application.  This is often used to support auto-login type features
       *  without putting user credentials into the page.
       *
       *  Parameters:
       *    (String) jid - The full JID that is bound by the session.
       *    (String) sid - The SID of the BOSH session.
       *    (String) rid - The current RID of the BOSH session.  This RID
       *      will be used by the next request.
       *    (Function) callback The connect callback function.
       *    (Integer) wait - The optional HTTPBIND wait value.  This is the
       *      time the server will wait before returning an empty result for
       *      a request.  The default setting of 60 seconds is recommended.
       *      Other settings will require tweaks to the Strophe.TIMEOUT value.
       *    (Integer) hold - The optional HTTPBIND hold value.  This is the
       *      number of connections the server will hold at one time.  This
       *      should almost always be set to 1 (the default).
       *    (Integer) wind - The optional HTTBIND window value.  This is the
       *      allowed range of request ids that are valid.  The default is 5.
       */
    }, {
      key: "attach",
      value: function attach(jid, sid, rid, callback, wait, hold, wind) {
        if (this._proto._attach) {
          return this._proto._attach(jid, sid, rid, callback, wait, hold, wind);
        } else {
          var error = new Error('The "attach" method is not available for your connection protocol');
          error.name = 'StropheSessionError';
          throw error;
        }
      }

      /** Function: restore
       *  Attempt to restore a cached BOSH session.
       *
       *  This function is only useful in conjunction with providing the
       *  "keepalive":true option when instantiating a new Strophe.Connection.
       *
       *  When "keepalive" is set to true, Strophe will cache the BOSH tokens
       *  RID (Request ID) and SID (Session ID) and then when this function is
       *  called, it will attempt to restore the session from those cached
       *  tokens.
       *
       *  This function must therefore be called instead of connect or attach.
       *
       *  For an example on how to use it, please see examples/restore.js
       *
       *  Parameters:
       *    (String) jid - The user's JID.  This may be a bare JID or a full JID.
       *    (Function) callback - The connect callback function.
       *    (Integer) wait - The optional HTTPBIND wait value.  This is the
       *      time the server will wait before returning an empty result for
       *      a request.  The default setting of 60 seconds is recommended.
       *    (Integer) hold - The optional HTTPBIND hold value.  This is the
       *      number of connections the server will hold at one time.  This
       *      should almost always be set to 1 (the default).
       *    (Integer) wind - The optional HTTBIND window value.  This is the
       *      allowed range of request ids that are valid.  The default is 5.
       */
    }, {
      key: "restore",
      value: function restore(jid, callback, wait, hold, wind) {
        if (this._sessionCachingSupported()) {
          this._proto._restore(jid, callback, wait, hold, wind);
        } else {
          var error = new Error('The "restore" method can only be used with a BOSH connection.');
          error.name = 'StropheSessionError';
          throw error;
        }
      }

      /** PrivateFunction: _sessionCachingSupported
       * Checks whether sessionStorage and JSON are supported and whether we're
       * using BOSH.
       */
    }, {
      key: "_sessionCachingSupported",
      value: function _sessionCachingSupported() {
        if (this._proto instanceof Strophe.Bosh) {
          if (!JSON) {
            return false;
          }
          try {
            sessionStorage.setItem('_strophe_', '_strophe_');
            sessionStorage.removeItem('_strophe_');
          } catch (e) {
            return false;
          }
          return true;
        }
        return false;
      }

      /** Function: xmlInput
       *  User overrideable function that receives XML data coming into the
       *  connection.
       *
       *  The default function does nothing.  User code can override this with
       *  > Strophe.Connection.xmlInput = function (elem) {
       *  >   (user code)
       *  > };
       *
       *  Due to limitations of current Browsers' XML-Parsers the opening and closing
       *  <stream> tag for WebSocket-Connoctions will be passed as selfclosing here.
       *
       *  BOSH-Connections will have all stanzas wrapped in a <body> tag. See
       *  <Strophe.Bosh.strip> if you want to strip this tag.
       *
       *  Parameters:
       *    (XMLElement) elem - The XML data received by the connection.
       */
      // eslint-disable-next-line no-unused-vars, class-methods-use-this
    }, {
      key: "xmlInput",
      value: function xmlInput(elem) {
        return;
      }

      /** Function: xmlOutput
       *  User overrideable function that receives XML data sent to the
       *  connection.
       *
       *  The default function does nothing.  User code can override this with
       *  > Strophe.Connection.xmlOutput = function (elem) {
       *  >   (user code)
       *  > };
       *
       *  Due to limitations of current Browsers' XML-Parsers the opening and closing
       *  <stream> tag for WebSocket-Connoctions will be passed as selfclosing here.
       *
       *  BOSH-Connections will have all stanzas wrapped in a <body> tag. See
       *  <Strophe.Bosh.strip> if you want to strip this tag.
       *
       *  Parameters:
       *    (XMLElement) elem - The XMLdata sent by the connection.
       */
      // eslint-disable-next-line no-unused-vars, class-methods-use-this
    }, {
      key: "xmlOutput",
      value: function xmlOutput(elem) {
        return;
      }

      /** Function: rawInput
       *  User overrideable function that receives raw data coming into the
       *  connection.
       *
       *  The default function does nothing.  User code can override this with
       *  > Strophe.Connection.rawInput = function (data) {
       *  >   (user code)
       *  > };
       *
       *  Parameters:
       *    (String) data - The data received by the connection.
       */
      // eslint-disable-next-line no-unused-vars, class-methods-use-this
    }, {
      key: "rawInput",
      value: function rawInput(data) {
        return;
      }

      /** Function: rawOutput
       *  User overrideable function that receives raw data sent to the
       *  connection.
       *
       *  The default function does nothing.  User code can override this with
       *  > Strophe.Connection.rawOutput = function (data) {
       *  >   (user code)
       *  > };
       *
       *  Parameters:
       *    (String) data - The data sent by the connection.
       */
      // eslint-disable-next-line no-unused-vars, class-methods-use-this
    }, {
      key: "rawOutput",
      value: function rawOutput(data) {
        return;
      }

      /** Function: nextValidRid
       *  User overrideable function that receives the new valid rid.
       *
       *  The default function does nothing. User code can override this with
       *  > Strophe.Connection.nextValidRid = function (rid) {
       *  >    (user code)
       *  > };
       *
       *  Parameters:
       *    (Number) rid - The next valid rid
       */
      // eslint-disable-next-line no-unused-vars, class-methods-use-this
    }, {
      key: "nextValidRid",
      value: function nextValidRid(rid) {
        return;
      }

      /** Function: send
       *  Send a stanza.
       *
       *  This function is called to push data onto the send queue to
       *  go out over the wire.  Whenever a request is sent to the BOSH
       *  server, all pending data is sent and the queue is flushed.
       *
       *  Parameters:
       *    (XMLElement |
       *     [XMLElement] |
       *     Strophe.Builder) elem - The stanza to send.
       */
    }, {
      key: "send",
      value: function send(elem) {
        if (elem === null) {
          return;
        }
        if (typeof elem.sort === 'function') {
          for (var i = 0; i < elem.length; i++) {
            this._queueData(elem[i]);
          }
        } else if (typeof elem.tree === 'function') {
          this._queueData(elem.tree());
        } else {
          this._queueData(elem);
        }
        this._proto._send();
      }

      /** Function: flush
       *  Immediately send any pending outgoing data.
       *
       *  Normally send() queues outgoing data until the next idle period
       *  (100ms), which optimizes network use in the common cases when
       *  several send()s are called in succession. flush() can be used to
       *  immediately send all pending data.
       */
    }, {
      key: "flush",
      value: function flush() {
        // cancel the pending idle period and run the idle function
        // immediately
        clearTimeout(this._idleTimeout);
        this._onIdle();
      }

      /** Function: sendPresence
       *  Helper function to send presence stanzas. The main benefit is for
       *  sending presence stanzas for which you expect a responding presence
       *  stanza with the same id (for example when leaving a chat room).
       *
       *  Parameters:
       *    (XMLElement) elem - The stanza to send.
       *    (Function) callback - The callback function for a successful request.
       *    (Function) errback - The callback function for a failed or timed
       *      out request.  On timeout, the stanza will be null.
       *    (Integer) timeout - The time specified in milliseconds for a
       *      timeout to occur.
       *
       *  Returns:
       *    The id used to send the presence.
       */
    }, {
      key: "sendPresence",
      value: function sendPresence(elem, callback, errback, timeout) {
        var _this3 = this;
        var timeoutHandler = null;
        if (typeof elem.tree === 'function') {
          elem = elem.tree();
        }
        var id = elem.getAttribute('id');
        if (!id) {
          // inject id if not found
          id = this.getUniqueId('sendPresence');
          elem.setAttribute('id', id);
        }
        if (typeof callback === 'function' || typeof errback === 'function') {
          var handler = this.addHandler(function (stanza) {
            // remove timeout handler if there is one
            if (timeoutHandler) {
              _this3.deleteTimedHandler(timeoutHandler);
            }
            if (stanza.getAttribute('type') === 'error') {
              if (errback) {
                errback(stanza);
              }
            } else if (callback) {
              callback(stanza);
            }
          }, null, 'presence', null, id);

          // if timeout specified, set up a timeout handler.
          if (timeout) {
            timeoutHandler = this.addTimedHandler(timeout, function () {
              // get rid of normal handler
              _this3.deleteHandler(handler);
              // call errback on timeout with null stanza
              if (errback) {
                errback(null);
              }
              return false;
            });
          }
        }
        this.send(elem);
        return id;
      }

      /** Function: sendIQ
       *  Helper function to send IQ stanzas.
       *
       *  Parameters:
       *    (XMLElement) elem - The stanza to send.
       *    (Function) callback - The callback function for a successful request.
       *    (Function) errback - The callback function for a failed or timed
       *      out request.  On timeout, the stanza will be null.
       *    (Integer) timeout - The time specified in milliseconds for a
       *      timeout to occur.
       *
       *  Returns:
       *    The id used to send the IQ.
       */
    }, {
      key: "sendIQ",
      value: function sendIQ(elem, callback, errback, timeout) {
        var _this4 = this;
        var timeoutHandler = null;
        if (typeof elem.tree === 'function') {
          elem = elem.tree();
        }
        var id = elem.getAttribute('id');
        if (!id) {
          // inject id if not found
          id = this.getUniqueId('sendIQ');
          elem.setAttribute('id', id);
        }
        if (typeof callback === 'function' || typeof errback === 'function') {
          var handler = this.addHandler(function (stanza) {
            // remove timeout handler if there is one
            if (timeoutHandler) {
              _this4.deleteTimedHandler(timeoutHandler);
            }
            var iqtype = stanza.getAttribute('type');
            if (iqtype === 'result') {
              if (callback) {
                callback(stanza);
              }
            } else if (iqtype === 'error') {
              if (errback) {
                errback(stanza);
              }
            } else {
              var error = new Error("Got bad IQ type of ".concat(iqtype));
              error.name = 'StropheError';
              throw error;
            }
          }, null, 'iq', ['error', 'result'], id);

          // if timeout specified, set up a timeout handler.
          if (timeout) {
            timeoutHandler = this.addTimedHandler(timeout, function () {
              // get rid of normal handler
              _this4.deleteHandler(handler);
              // call errback on timeout with null stanza
              if (errback) {
                errback(null);
              }
              return false;
            });
          }
        }
        this.send(elem);
        return id;
      }

      /** PrivateFunction: _queueData
       *  Queue outgoing data for later sending.  Also ensures that the data
       *  is a DOMElement.
       */
    }, {
      key: "_queueData",
      value: function _queueData(element) {
        if (element === null || !element.tagName || !element.childNodes) {
          var error = new Error('Cannot queue non-DOMElement.');
          error.name = 'StropheError';
          throw error;
        }
        this._data.push(element);
      }

      /** PrivateFunction: _sendRestart
       *  Send an xmpp:restart stanza.
       */
    }, {
      key: "_sendRestart",
      value: function _sendRestart() {
        var _this5 = this;
        this._data.push('restart');
        this._proto._sendRestart();
        this._idleTimeout = setTimeout(function () {
          return _this5._onIdle();
        }, 100);
      }

      /** Function: addTimedHandler
       *  Add a timed handler to the connection.
       *
       *  This function adds a timed handler.  The provided handler will
       *  be called every period milliseconds until it returns false,
       *  the connection is terminated, or the handler is removed.  Handlers
       *  that wish to continue being invoked should return true.
       *
       *  Because of method binding it is necessary to save the result of
       *  this function if you wish to remove a handler with
       *  deleteTimedHandler().
       *
       *  Note that user handlers are not active until authentication is
       *  successful.
       *
       *  Parameters:
       *    (Integer) period - The period of the handler.
       *    (Function) handler - The callback function.
       *
       *  Returns:
       *    A reference to the handler that can be used to remove it.
       */
    }, {
      key: "addTimedHandler",
      value: function addTimedHandler(period, handler) {
        var thand = new Strophe.TimedHandler(period, handler);
        this.addTimeds.push(thand);
        return thand;
      }

      /** Function: deleteTimedHandler
       *  Delete a timed handler for a connection.
       *
       *  This function removes a timed handler from the connection.  The
       *  handRef parameter is *not* the function passed to addTimedHandler(),
       *  but is the reference returned from addTimedHandler().
       *
       *  Parameters:
       *    (Strophe.TimedHandler) handRef - The handler reference.
       */
    }, {
      key: "deleteTimedHandler",
      value: function deleteTimedHandler(handRef) {
        // this must be done in the Idle loop so that we don't change
        // the handlers during iteration
        this.removeTimeds.push(handRef);
      }

      /** Function: addHandler
       *  Add a stanza handler for the connection.
       *
       *  This function adds a stanza handler to the connection.  The
       *  handler callback will be called for any stanza that matches
       *  the parameters.  Note that if multiple parameters are supplied,
       *  they must all match for the handler to be invoked.
       *
       *  The handler will receive the stanza that triggered it as its argument.
       *  *The handler should return true if it is to be invoked again;
       *  returning false will remove the handler after it returns.*
       *
       *  As a convenience, the ns parameters applies to the top level element
       *  and also any of its immediate children.  This is primarily to make
       *  matching /iq/query elements easy.
       *
       *  Options
       *  ~~~~~~~
       *  With the options argument, you can specify boolean flags that affect how
       *  matches are being done.
       *
       *  Currently two flags exist:
       *
       *  - matchBareFromJid:
       *      When set to true, the from parameter and the
       *      from attribute on the stanza will be matched as bare JIDs instead
       *      of full JIDs. To use this, pass {matchBareFromJid: true} as the
       *      value of options. The default value for matchBareFromJid is false.
       *
       *  - ignoreNamespaceFragment:
       *      When set to true, a fragment specified on the stanza's namespace
       *      URL will be ignored when it's matched with the one configured for
       *      the handler.
       *
       *      This means that if you register like this:
       *      >   connection.addHandler(
       *      >       handler,
       *      >       'http://jabber.org/protocol/muc',
       *      >       null, null, null, null,
       *      >       {'ignoreNamespaceFragment': true}
       *      >   );
       *
       *      Then a stanza with XML namespace of
       *      'http://jabber.org/protocol/muc#user' will also be matched. If
       *      'ignoreNamespaceFragment' is false, then only stanzas with
       *      'http://jabber.org/protocol/muc' will be matched.
       *
       *  Deleting the handler
       *  ~~~~~~~~~~~~~~~~~~~~
       *  The return value should be saved if you wish to remove the handler
       *  with deleteHandler().
       *
       *  Parameters:
       *    (Function) handler - The user callback.
       *    (String) ns - The namespace to match.
       *    (String) name - The stanza name to match.
       *    (String|Array) type - The stanza type (or types if an array) to match.
       *    (String) id - The stanza id attribute to match.
       *    (String) from - The stanza from attribute to match.
       *    (String) options - The handler options
       *
       *  Returns:
       *    A reference to the handler that can be used to remove it.
       */
    }, {
      key: "addHandler",
      value: function addHandler(handler, ns, name, type, id, from, options) {
        var hand = new Handler(handler, ns, name, type, id, from, options);
        this.addHandlers.push(hand);
        return hand;
      }

      /** Function: deleteHandler
       *  Delete a stanza handler for a connection.
       *
       *  This function removes a stanza handler from the connection.  The
       *  handRef parameter is *not* the function passed to addHandler(),
       *  but is the reference returned from addHandler().
       *
       *  Parameters:
       *    (Handler) handRef - The handler reference.
       */
    }, {
      key: "deleteHandler",
      value: function deleteHandler(handRef) {
        // this must be done in the Idle loop so that we don't change
        // the handlers during iteration
        this.removeHandlers.push(handRef);
        // If a handler is being deleted while it is being added,
        // prevent it from getting added
        var i = this.addHandlers.indexOf(handRef);
        if (i >= 0) {
          this.addHandlers.splice(i, 1);
        }
      }

      /** Function: registerSASLMechanisms
       *
       * Register the SASL mechanisms which will be supported by this instance of
       * Strophe.Connection (i.e. which this XMPP client will support).
       *
       *  Parameters:
       *    (Array) mechanisms - Array of objects with Strophe.SASLMechanism prototypes
       *
       */
    }, {
      key: "registerSASLMechanisms",
      value: function registerSASLMechanisms(mechanisms) {
        var _this6 = this;
        this.mechanisms = {};
        mechanisms = mechanisms || [Strophe.SASLAnonymous, Strophe.SASLExternal, Strophe.SASLOAuthBearer, Strophe.SASLXOAuth2, Strophe.SASLPlain, Strophe.SASLSHA1, Strophe.SASLSHA256, Strophe.SASLSHA384, Strophe.SASLSHA512];
        mechanisms.forEach(function (m) {
          return _this6.registerSASLMechanism(m);
        });
      }

      /** Function: registerSASLMechanism
       *
       * Register a single SASL mechanism, to be supported by this client.
       *
       *  Parameters:
       *    (Object) mechanism - Object with a Strophe.SASLMechanism prototype
       *
       */
    }, {
      key: "registerSASLMechanism",
      value: function registerSASLMechanism(Mechanism) {
        var mechanism = new Mechanism();
        this.mechanisms[mechanism.mechname] = mechanism;
      }

      /** Function: disconnect
       *  Start the graceful disconnection process.
       *
       *  This function starts the disconnection process.  This process starts
       *  by sending unavailable presence and sending BOSH body of type
       *  terminate.  A timeout handler makes sure that disconnection happens
       *  even if the BOSH server does not respond.
       *  If the Connection object isn't connected, at least tries to abort all pending requests
       *  so the connection object won't generate successful requests (which were already opened).
       *
       *  The user supplied connection callback will be notified of the
       *  progress as this process happens.
       *
       *  Parameters:
       *    (String) reason - The reason the disconnect is occuring.
       */
    }, {
      key: "disconnect",
      value: function disconnect(reason) {
        this._changeConnectStatus(Status.DISCONNECTING, reason);
        if (reason) {
          Strophe.warn('Disconnect was called because: ' + reason);
        } else {
          Strophe.info('Disconnect was called');
        }
        if (this.connected) {
          var pres = false;
          this.disconnecting = true;
          if (this.authenticated) {
            pres = $pres({
              'xmlns': Strophe.NS.CLIENT,
              'type': 'unavailable'
            });
          }
          // setup timeout handler
          this._disconnectTimeout = this._addSysTimedHandler(this.disconnection_timeout, this._onDisconnectTimeout.bind(this));
          this._proto._disconnect(pres);
        } else {
          Strophe.warn('Disconnect was called before Strophe connected to the server');
          this._proto._abortAllRequests();
          this._doDisconnect();
        }
      }

      /** PrivateFunction: _changeConnectStatus
       *  _Private_ helper function that makes sure plugins and the user's
       *  callback are notified of connection status changes.
       *
       *  Parameters:
       *    (Integer) status - the new connection status, one of the values
       *      in Strophe.Status
       *    (String) condition - the error condition or null
       *    (XMLElement) elem - The triggering stanza.
       */
    }, {
      key: "_changeConnectStatus",
      value: function _changeConnectStatus(status, condition, elem) {
        // notify all plugins listening for status changes
        for (var k in Strophe._connectionPlugins) {
          if (Object.prototype.hasOwnProperty.call(Strophe._connectionPlugins, k)) {
            var plugin = this[k];
            if (plugin.statusChanged) {
              try {
                plugin.statusChanged(status, condition);
              } catch (err) {
                Strophe.error("".concat(k, " plugin caused an exception changing status: ").concat(err));
              }
            }
          }
        }
        // notify the user's callback
        if (this.connect_callback) {
          try {
            this.connect_callback(status, condition, elem);
          } catch (e) {
            Strophe._handleError(e);
            Strophe.error("User connection callback caused an exception: ".concat(e));
          }
        }
      }

      /** PrivateFunction: _doDisconnect
       *  _Private_ function to disconnect.
       *
       *  This is the last piece of the disconnection logic.  This resets the
       *  connection and alerts the user's connection callback.
       */
    }, {
      key: "_doDisconnect",
      value: function _doDisconnect(condition) {
        if (typeof this._idleTimeout === 'number') {
          clearTimeout(this._idleTimeout);
        }

        // Cancel Disconnect Timeout
        if (this._disconnectTimeout !== null) {
          this.deleteTimedHandler(this._disconnectTimeout);
          this._disconnectTimeout = null;
        }
        Strophe.debug('_doDisconnect was called');
        this._proto._doDisconnect();
        this.authenticated = false;
        this.disconnecting = false;
        this.restored = false;

        // delete handlers
        this.handlers = [];
        this.timedHandlers = [];
        this.removeTimeds = [];
        this.removeHandlers = [];
        this.addTimeds = [];
        this.addHandlers = [];

        // tell the parent we disconnected
        this._changeConnectStatus(Status.DISCONNECTED, condition);
        this.connected = false;
      }

      /** PrivateFunction: _dataRecv
       *  _Private_ handler to processes incoming data from the the connection.
       *
       *  Except for _connect_cb handling the initial connection request,
       *  this function handles the incoming data for all requests.  This
       *  function also fires stanza handlers that match each incoming
       *  stanza.
       *
       *  Parameters:
       *    (Strophe.Request) req - The request that has data ready.
       *    (string) req - The stanza a raw string (optiona).
       */
    }, {
      key: "_dataRecv",
      value: function _dataRecv(req, raw) {
        var _this7 = this;
        var elem = this._proto._reqToData(req);
        if (elem === null) {
          return;
        }
        if (this.xmlInput !== Strophe.Connection.prototype.xmlInput) {
          if (elem.nodeName === this._proto.strip && elem.childNodes.length) {
            this.xmlInput(elem.childNodes[0]);
          } else {
            this.xmlInput(elem);
          }
        }
        if (this.rawInput !== Strophe.Connection.prototype.rawInput) {
          if (raw) {
            this.rawInput(raw);
          } else {
            this.rawInput(Strophe.serialize(elem));
          }
        }

        // remove handlers scheduled for deletion
        while (this.removeHandlers.length > 0) {
          var hand = this.removeHandlers.pop();
          var i = this.handlers.indexOf(hand);
          if (i >= 0) {
            this.handlers.splice(i, 1);
          }
        }

        // add handlers scheduled for addition
        while (this.addHandlers.length > 0) {
          this.handlers.push(this.addHandlers.pop());
        }

        // handle graceful disconnect
        if (this.disconnecting && this._proto._emptyQueue()) {
          this._doDisconnect();
          return;
        }
        var type = elem.getAttribute('type');
        if (type !== null && type === 'terminate') {
          // Don't process stanzas that come in after disconnect
          if (this.disconnecting) {
            return;
          }
          // an error occurred
          var cond = elem.getAttribute('condition');
          var conflict = elem.getElementsByTagName('conflict');
          if (cond !== null) {
            if (cond === 'remote-stream-error' && conflict.length > 0) {
              cond = 'conflict';
            }
            this._changeConnectStatus(Status.CONNFAIL, cond);
          } else {
            this._changeConnectStatus(Status.CONNFAIL, Strophe.ErrorCondition.UNKOWN_REASON);
          }
          this._doDisconnect(cond);
          return;
        }

        // send each incoming stanza through the handler chain
        Strophe.forEachChild(elem, null, function (child) {
          var matches = [];
          _this7.handlers = _this7.handlers.reduce(function (handlers, handler) {
            try {
              if (handler.isMatch(child) && (_this7.authenticated || !handler.user)) {
                if (handler.run(child)) {
                  handlers.push(handler);
                }
                matches.push(handler);
              } else {
                handlers.push(handler);
              }
            } catch (e) {
              // if the handler throws an exception, we consider it as false
              Strophe.warn('Removing Strophe handlers due to uncaught exception: ' + e.message);
            }
            return handlers;
          }, []);

          // If no handler was fired for an incoming IQ with type="set",
          // then we return an IQ error stanza with service-unavailable.
          if (!matches.length && _this7.iqFallbackHandler.isMatch(child)) {
            _this7.iqFallbackHandler.run(child);
          }
        });
      }

      /** PrivateFunction: _connect_cb
       *  _Private_ handler for initial connection request.
       *
       *  This handler is used to process the initial connection request
       *  response from the BOSH server. It is used to set up authentication
       *  handlers and start the authentication process.
       *
       *  SASL authentication will be attempted if available, otherwise
       *  the code will fall back to legacy authentication.
       *
       *  Parameters:
       *    (Strophe.Request) req - The current request.
       *    (Function) _callback - low level (xmpp) connect callback function.
       *      Useful for plugins with their own xmpp connect callback (when they
       *      want to do something special).
       */
    }, {
      key: "_connect_cb",
      value: function _connect_cb(req, _callback, raw) {
        var _this8 = this;
        Strophe.debug('_connect_cb was called');
        this.connected = true;
        var bodyWrap;
        try {
          bodyWrap = this._proto._reqToData(req);
        } catch (e) {
          if (e.name !== Strophe.ErrorCondition.BAD_FORMAT) {
            throw e;
          }
          this._changeConnectStatus(Status.CONNFAIL, Strophe.ErrorCondition.BAD_FORMAT);
          this._doDisconnect(Strophe.ErrorCondition.BAD_FORMAT);
        }
        if (!bodyWrap) {
          return;
        }
        if (this.xmlInput !== Strophe.Connection.prototype.xmlInput) {
          if (bodyWrap.nodeName === this._proto.strip && bodyWrap.childNodes.length) {
            this.xmlInput(bodyWrap.childNodes[0]);
          } else {
            this.xmlInput(bodyWrap);
          }
        }
        if (this.rawInput !== Strophe.Connection.prototype.rawInput) {
          if (raw) {
            this.rawInput(raw);
          } else {
            this.rawInput(Strophe.serialize(bodyWrap));
          }
        }
        var conncheck = this._proto._connect_cb(bodyWrap);
        if (conncheck === Status.CONNFAIL) {
          return;
        }

        // Check for the stream:features tag
        var hasFeatures;
        if (bodyWrap.getElementsByTagNameNS) {
          hasFeatures = bodyWrap.getElementsByTagNameNS(Strophe.NS.STREAM, 'features').length > 0;
        } else {
          hasFeatures = bodyWrap.getElementsByTagName('stream:features').length > 0 || bodyWrap.getElementsByTagName('features').length > 0;
        }
        if (!hasFeatures) {
          this._proto._no_auth_received(_callback);
          return;
        }
        var matched = Array.from(bodyWrap.getElementsByTagName('mechanism')).map(function (m) {
          return _this8.mechanisms[m.textContent];
        }).filter(function (m) {
          return m;
        });
        if (matched.length === 0) {
          if (bodyWrap.getElementsByTagName('auth').length === 0) {
            // There are no matching SASL mechanisms and also no legacy
            // auth available.
            this._proto._no_auth_received(_callback);
            return;
          }
        }
        if (this.do_authentication !== false) {
          this.authenticate(matched);
        }
      }

      /** Function: sortMechanismsByPriority
       *
       *  Sorts an array of objects with prototype SASLMechanism according to
       *  their priorities.
       *
       *  Parameters:
       *    (Array) mechanisms - Array of SASL mechanisms.
       *
       */
      // eslint-disable-next-line  class-methods-use-this
    }, {
      key: "sortMechanismsByPriority",
      value: function sortMechanismsByPriority(mechanisms) {
        // Sorting mechanisms according to priority.
        for (var i = 0; i < mechanisms.length - 1; ++i) {
          var higher = i;
          for (var j = i + 1; j < mechanisms.length; ++j) {
            if (mechanisms[j].priority > mechanisms[higher].priority) {
              higher = j;
            }
          }
          if (higher !== i) {
            var swap = mechanisms[i];
            mechanisms[i] = mechanisms[higher];
            mechanisms[higher] = swap;
          }
        }
        return mechanisms;
      }

      /** Function: authenticate
       * Set up authentication
       *
       *  Continues the initial connection request by setting up authentication
       *  handlers and starting the authentication process.
       *
       *  SASL authentication will be attempted if available, otherwise
       *  the code will fall back to legacy authentication.
       *
       *  Parameters:
       *    (Array) matched - Array of SASL mechanisms supported.
       *
       */
    }, {
      key: "authenticate",
      value: function authenticate(matched) {
        if (!this._attemptSASLAuth(matched)) {
          this._attemptLegacyAuth();
        }
      }

      /** PrivateFunction: _attemptSASLAuth
       *
       *  Iterate through an array of SASL mechanisms and attempt authentication
       *  with the highest priority (enabled) mechanism.
       *
       *  Parameters:
       *    (Array) mechanisms - Array of SASL mechanisms.
       *
       *  Returns:
       *    (Boolean) mechanism_found - true or false, depending on whether a
       *          valid SASL mechanism was found with which authentication could be
       *          started.
       */
    }, {
      key: "_attemptSASLAuth",
      value: function _attemptSASLAuth(mechanisms) {
        mechanisms = this.sortMechanismsByPriority(mechanisms || []);
        var mechanism_found = false;
        for (var i = 0; i < mechanisms.length; ++i) {
          if (!mechanisms[i].test(this)) {
            continue;
          }
          this._sasl_success_handler = this._addSysHandler(this._sasl_success_cb.bind(this), null, 'success', null, null);
          this._sasl_failure_handler = this._addSysHandler(this._sasl_failure_cb.bind(this), null, 'failure', null, null);
          this._sasl_challenge_handler = this._addSysHandler(this._sasl_challenge_cb.bind(this), null, 'challenge', null, null);
          this._sasl_mechanism = mechanisms[i];
          this._sasl_mechanism.onStart(this);
          var request_auth_exchange = $build('auth', {
            'xmlns': Strophe.NS.SASL,
            'mechanism': this._sasl_mechanism.mechname
          });
          if (this._sasl_mechanism.isClientFirst) {
            var response = this._sasl_mechanism.clientChallenge(this);
            request_auth_exchange.t(abab.btoa(response));
          }
          this.send(request_auth_exchange.tree());
          mechanism_found = true;
          break;
        }
        return mechanism_found;
      }

      /** PrivateFunction: _sasl_challenge_cb
       *  _Private_ handler for the SASL challenge
       *
       */
    }, {
      key: "_sasl_challenge_cb",
      value: function () {
        var _sasl_challenge_cb2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(elem) {
          var challenge, response, stanza;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                challenge = abab.atob(getText(elem));
                _context.next = 3;
                return this._sasl_mechanism.onChallenge(this, challenge);
              case 3:
                response = _context.sent;
                stanza = $build('response', {
                  'xmlns': Strophe.NS.SASL
                });
                if (response !== '') {
                  stanza.t(abab.btoa(response));
                }
                this.send(stanza.tree());
                return _context.abrupt("return", true);
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function _sasl_challenge_cb(_x) {
          return _sasl_challenge_cb2.apply(this, arguments);
        }
        return _sasl_challenge_cb;
      }()
      /** PrivateFunction: _attemptLegacyAuth
       *
       *  Attempt legacy (i.e. non-SASL) authentication.
       */
    }, {
      key: "_attemptLegacyAuth",
      value: function _attemptLegacyAuth() {
        if (Strophe.getNodeFromJid(this.jid) === null) {
          // we don't have a node, which is required for non-anonymous
          // client connections
          this._changeConnectStatus(Status.CONNFAIL, Strophe.ErrorCondition.MISSING_JID_NODE);
          this.disconnect(Strophe.ErrorCondition.MISSING_JID_NODE);
        } else {
          // Fall back to legacy authentication
          this._changeConnectStatus(Status.AUTHENTICATING, null);
          this._addSysHandler(this._onLegacyAuthIQResult.bind(this), null, null, null, '_auth_1');
          this.send($iq({
            'type': 'get',
            'to': this.domain,
            'id': '_auth_1'
          }).c('query', {
            xmlns: Strophe.NS.AUTH
          }).c('username', {}).t(Strophe.getNodeFromJid(this.jid)).tree());
        }
      }

      /** PrivateFunction: _onLegacyAuthIQResult
       *  _Private_ handler for legacy authentication.
       *
       *  This handler is called in response to the initial <iq type='get'/>
       *  for legacy authentication.  It builds an authentication <iq/> and
       *  sends it, creating a handler (calling back to _auth2_cb()) to
       *  handle the result
       *
       *  Parameters:
       *    (XMLElement) elem - The stanza that triggered the callback.
       *
       *  Returns:
       *    false to remove the handler.
       */
      // eslint-disable-next-line no-unused-vars
    }, {
      key: "_onLegacyAuthIQResult",
      value: function _onLegacyAuthIQResult(elem) {
        // build plaintext auth iq
        var iq = $iq({
          type: 'set',
          id: '_auth_2'
        }).c('query', {
          xmlns: Strophe.NS.AUTH
        }).c('username', {}).t(Strophe.getNodeFromJid(this.jid)).up().c('password').t(this.pass);
        if (!Strophe.getResourceFromJid(this.jid)) {
          // since the user has not supplied a resource, we pick
          // a default one here.  unlike other auth methods, the server
          // cannot do this for us.
          this.jid = Strophe.getBareJidFromJid(this.jid) + '/strophe';
        }
        iq.up().c('resource', {}).t(Strophe.getResourceFromJid(this.jid));
        this._addSysHandler(this._auth2_cb.bind(this), null, null, null, '_auth_2');
        this.send(iq.tree());
        return false;
      }

      /** PrivateFunction: _sasl_success_cb
       *  _Private_ handler for succesful SASL authentication.
       *
       *  Parameters:
       *    (XMLElement) elem - The matching stanza.
       *
       *  Returns:
       *    false to remove the handler.
       */
    }, {
      key: "_sasl_success_cb",
      value: function _sasl_success_cb(elem) {
        var _this9 = this;
        if (this._sasl_data['server-signature']) {
          var serverSignature;
          var success = abab.atob(getText(elem));
          var attribMatch = /([a-z]+)=([^,]+)(,|$)/;
          var matches = success.match(attribMatch);
          if (matches[1] === 'v') {
            serverSignature = matches[2];
          }
          if (serverSignature !== this._sasl_data['server-signature']) {
            // remove old handlers
            this.deleteHandler(this._sasl_failure_handler);
            this._sasl_failure_handler = null;
            if (this._sasl_challenge_handler) {
              this.deleteHandler(this._sasl_challenge_handler);
              this._sasl_challenge_handler = null;
            }
            this._sasl_data = {};
            return this._sasl_failure_cb(null);
          }
        }
        Strophe.info('SASL authentication succeeded.');
        if (this._sasl_data.keys) {
          this.scram_keys = this._sasl_data.keys;
        }
        if (this._sasl_mechanism) {
          this._sasl_mechanism.onSuccess();
        }
        // remove old handlers
        this.deleteHandler(this._sasl_failure_handler);
        this._sasl_failure_handler = null;
        if (this._sasl_challenge_handler) {
          this.deleteHandler(this._sasl_challenge_handler);
          this._sasl_challenge_handler = null;
        }
        var streamfeature_handlers = [];
        var wrapper = function wrapper(handlers, elem) {
          while (handlers.length) {
            _this9.deleteHandler(handlers.pop());
          }
          _this9._onStreamFeaturesAfterSASL(elem);
          return false;
        };
        streamfeature_handlers.push(this._addSysHandler(function (elem) {
          return wrapper(streamfeature_handlers, elem);
        }, null, 'stream:features', null, null));
        streamfeature_handlers.push(this._addSysHandler(function (elem) {
          return wrapper(streamfeature_handlers, elem);
        }, Strophe.NS.STREAM, 'features', null, null));

        // we must send an xmpp:restart now
        this._sendRestart();
        return false;
      }

      /** PrivateFunction: _onStreamFeaturesAfterSASL
       *  Parameters:
       *    (XMLElement) elem - The matching stanza.
       *
       *  Returns:
       *    false to remove the handler.
       */
    }, {
      key: "_onStreamFeaturesAfterSASL",
      value: function _onStreamFeaturesAfterSASL(elem) {
        // save stream:features for future usage
        this.features = elem;
        for (var i = 0; i < elem.childNodes.length; i++) {
          var child = elem.childNodes[i];
          if (child.nodeName === 'bind') {
            this.do_bind = true;
          }
          if (child.nodeName === 'session') {
            this.do_session = true;
          }
        }
        if (!this.do_bind) {
          this._changeConnectStatus(Status.AUTHFAIL, null);
          return false;
        } else if (!this.options.explicitResourceBinding) {
          this.bind();
        } else {
          this._changeConnectStatus(Status.BINDREQUIRED, null);
        }
        return false;
      }

      /** Function: bind
       *
       *  Sends an IQ to the XMPP server to bind a JID resource for this session.
       *
       *  https://tools.ietf.org/html/rfc6120#section-7.5
       *
       *  If `explicitResourceBinding` was set to a truthy value in the options
       *  passed to the Strophe.Connection constructor, then this function needs
       *  to be called explicitly by the client author.
       *
       *  Otherwise it'll be called automatically as soon as the XMPP server
       *  advertises the "urn:ietf:params:xml:ns:xmpp-bind" stream feature.
       */
    }, {
      key: "bind",
      value: function bind() {
        if (!this.do_bind) {
          Strophe.log(Strophe.LogLevel.INFO, "Strophe.Connection.prototype.bind called but \"do_bind\" is false");
          return;
        }
        this._addSysHandler(this._onResourceBindResultIQ.bind(this), null, null, null, '_bind_auth_2');
        var resource = Strophe.getResourceFromJid(this.jid);
        if (resource) {
          this.send($iq({
            type: 'set',
            id: '_bind_auth_2'
          }).c('bind', {
            xmlns: Strophe.NS.BIND
          }).c('resource', {}).t(resource).tree());
        } else {
          this.send($iq({
            type: 'set',
            id: '_bind_auth_2'
          }).c('bind', {
            xmlns: Strophe.NS.BIND
          }).tree());
        }
      }

      /** PrivateFunction: _onResourceBindIQ
       *  _Private_ handler for binding result and session start.
       *
       *  Parameters:
       *    (XMLElement) elem - The matching stanza.
       *
       *  Returns:
       *    false to remove the handler.
       */
    }, {
      key: "_onResourceBindResultIQ",
      value: function _onResourceBindResultIQ(elem) {
        if (elem.getAttribute('type') === 'error') {
          Strophe.warn('Resource binding failed.');
          var conflict = elem.getElementsByTagName('conflict');
          var condition;
          if (conflict.length > 0) {
            condition = Strophe.ErrorCondition.CONFLICT;
          }
          this._changeConnectStatus(Status.AUTHFAIL, condition, elem);
          return false;
        }
        // TODO - need to grab errors
        var bind = elem.getElementsByTagName('bind');
        if (bind.length > 0) {
          var jidNode = bind[0].getElementsByTagName('jid');
          if (jidNode.length > 0) {
            this.authenticated = true;
            this.jid = getText(jidNode[0]);
            if (this.do_session) {
              this._establishSession();
            } else {
              this._changeConnectStatus(Status.CONNECTED, null);
            }
          }
        } else {
          Strophe.warn('Resource binding failed.');
          this._changeConnectStatus(Status.AUTHFAIL, null, elem);
          return false;
        }
      }

      /** PrivateFunction: _establishSession
       *  Send IQ request to establish a session with the XMPP server.
       *
       *  See https://xmpp.org/rfcs/rfc3921.html#session
       *
       *  Note: The protocol for session establishment has been determined as
       *  unnecessary and removed in RFC-6121.
       */
    }, {
      key: "_establishSession",
      value: function _establishSession() {
        if (!this.do_session) {
          throw new Error("Strophe.Connection.prototype._establishSession " + "called but apparently ".concat(Strophe.NS.SESSION, " wasn't advertised by the server"));
        }
        this._addSysHandler(this._onSessionResultIQ.bind(this), null, null, null, '_session_auth_2');
        this.send($iq({
          type: 'set',
          id: '_session_auth_2'
        }).c('session', {
          xmlns: Strophe.NS.SESSION
        }).tree());
      }

      /** PrivateFunction: _onSessionResultIQ
       *  _Private_ handler for the server's IQ response to a client's session
       *  request.
       *
       *  This sets Connection.authenticated to true on success, which
       *  starts the processing of user handlers.
       *
       *  See https://xmpp.org/rfcs/rfc3921.html#session
       *
       *  Note: The protocol for session establishment has been determined as
       *  unnecessary and removed in RFC-6121.
       *
       *  Parameters:
       *    (XMLElement) elem - The matching stanza.
       *
       *  Returns:
       *    false to remove the handler.
       */
    }, {
      key: "_onSessionResultIQ",
      value: function _onSessionResultIQ(elem) {
        if (elem.getAttribute('type') === 'result') {
          this.authenticated = true;
          this._changeConnectStatus(Status.CONNECTED, null);
        } else if (elem.getAttribute('type') === 'error') {
          this.authenticated = false;
          Strophe.warn('Session creation failed.');
          this._changeConnectStatus(Status.AUTHFAIL, null, elem);
          return false;
        }
        return false;
      }

      /** PrivateFunction: _sasl_failure_cb
       *  _Private_ handler for SASL authentication failure.
       *
       *  Parameters:
       *    (XMLElement) elem - The matching stanza.
       *
       *  Returns:
       *    false to remove the handler.
       */
    }, {
      key: "_sasl_failure_cb",
      value: function _sasl_failure_cb(elem) {
        // delete unneeded handlers
        if (this._sasl_success_handler) {
          this.deleteHandler(this._sasl_success_handler);
          this._sasl_success_handler = null;
        }
        if (this._sasl_challenge_handler) {
          this.deleteHandler(this._sasl_challenge_handler);
          this._sasl_challenge_handler = null;
        }
        if (this._sasl_mechanism) this._sasl_mechanism.onFailure();
        this._changeConnectStatus(Status.AUTHFAIL, null, elem);
        return false;
      }

      /** PrivateFunction: _auth2_cb
       *  _Private_ handler to finish legacy authentication.
       *
       *  This handler is called when the result from the jabber:iq:auth
       *  <iq/> stanza is returned.
       *
       *  Parameters:
       *    (XMLElement) elem - The stanza that triggered the callback.
       *
       *  Returns:
       *    false to remove the handler.
       */
    }, {
      key: "_auth2_cb",
      value: function _auth2_cb(elem) {
        if (elem.getAttribute('type') === 'result') {
          this.authenticated = true;
          this._changeConnectStatus(Status.CONNECTED, null);
        } else if (elem.getAttribute('type') === 'error') {
          this._changeConnectStatus(Status.AUTHFAIL, null, elem);
          this.disconnect('authentication failed');
        }
        return false;
      }

      /** PrivateFunction: _addSysTimedHandler
       *  _Private_ function to add a system level timed handler.
       *
       *  This function is used to add a Strophe.TimedHandler for the
       *  library code.  System timed handlers are allowed to run before
       *  authentication is complete.
       *
       *  Parameters:
       *    (Integer) period - The period of the handler.
       *    (Function) handler - The callback function.
       */
    }, {
      key: "_addSysTimedHandler",
      value: function _addSysTimedHandler(period, handler) {
        var thand = new TimedHandler(period, handler);
        thand.user = false;
        this.addTimeds.push(thand);
        return thand;
      }

      /** PrivateFunction: _addSysHandler
       *  _Private_ function to add a system level stanza handler.
       *
       *  This function is used to add a Handler for the
       *  library code.  System stanza handlers are allowed to run before
       *  authentication is complete.
       *
       *  Parameters:
       *    (Function) handler - The callback function.
       *    (String) ns - The namespace to match.
       *    (String) name - The stanza name to match.
       *    (String) type - The stanza type attribute to match.
       *    (String) id - The stanza id attribute to match.
       */
    }, {
      key: "_addSysHandler",
      value: function _addSysHandler(handler, ns, name, type, id) {
        var hand = new Handler(handler, ns, name, type, id);
        hand.user = false;
        this.addHandlers.push(hand);
        return hand;
      }

      /** PrivateFunction: _onDisconnectTimeout
       *  _Private_ timeout handler for handling non-graceful disconnection.
       *
       *  If the graceful disconnect process does not complete within the
       *  time allotted, this handler finishes the disconnect anyway.
       *
       *  Returns:
       *    false to remove the handler.
       */
    }, {
      key: "_onDisconnectTimeout",
      value: function _onDisconnectTimeout() {
        Strophe.debug('_onDisconnectTimeout was called');
        this._changeConnectStatus(Status.CONNTIMEOUT, null);
        this._proto._onDisconnectTimeout();
        // actually disconnect
        this._doDisconnect();
        return false;
      }

      /** PrivateFunction: _onIdle
       *  _Private_ handler to process events during idle cycle.
       *
       *  This handler is called every 100ms to fire timed handlers that
       *  are ready and keep poll requests going.
       */
    }, {
      key: "_onIdle",
      value: function _onIdle() {
        var _this10 = this;
        // add timed handlers scheduled for addition
        // NOTE: we add before remove in the case a timed handler is
        // added and then deleted before the next _onIdle() call.
        while (this.addTimeds.length > 0) {
          this.timedHandlers.push(this.addTimeds.pop());
        }

        // remove timed handlers that have been scheduled for deletion
        while (this.removeTimeds.length > 0) {
          var thand = this.removeTimeds.pop();
          var i = this.timedHandlers.indexOf(thand);
          if (i >= 0) {
            this.timedHandlers.splice(i, 1);
          }
        }

        // call ready timed handlers
        var now = new Date().getTime();
        var newList = [];
        for (var _i5 = 0; _i5 < this.timedHandlers.length; _i5++) {
          var _thand = this.timedHandlers[_i5];
          if (this.authenticated || !_thand.user) {
            var since = _thand.lastCalled + _thand.period;
            if (since - now <= 0) {
              if (_thand.run()) {
                newList.push(_thand);
              }
            } else {
              newList.push(_thand);
            }
          }
        }
        this.timedHandlers = newList;
        clearTimeout(this._idleTimeout);
        this._proto._onIdle();

        // reactivate the timer only if connected
        if (this.connected) {
          this._idleTimeout = setTimeout(function () {
            return _this10._onIdle();
          }, 100);
        }
      }
    }]);
    return Connection;
  }();
  /** Class: Strophe.SASLMechanism
   *
   *  Encapsulates an SASL authentication mechanism.
   *
   *  User code may override the priority for each mechanism or disable it completely.
   *  See <priority> for information about changing priority and <test> for informatian on
   *  how to disable a mechanism.
   *
   *  By default, all mechanisms are enabled and the priorities are
   *
   *      SCRAM-SHA-512 - 72
   *      SCRAM-SHA-384 - 71
   *      SCRAM-SHA-256 - 70
   *      SCRAM-SHA-1   - 60
   *      PLAIN         - 50
   *      OAUTHBEARER   - 40
   *      X-OAUTH2      - 30
   *      ANONYMOUS     - 20
   *      EXTERNAL      - 10
   *
   *  See: Strophe.Connection.addSupportedSASLMechanisms
   */
  var SASLMechanism = /*#__PURE__*/function () {
    /**
     * PrivateConstructor: Strophe.SASLMechanism
     * SASL auth mechanism abstraction.
     *
     *  Parameters:
     *    (String) name - SASL Mechanism name.
     *    (Boolean) isClientFirst - If client should send response first without challenge.
     *    (Number) priority - Priority.
     *
     *  Returns:
     *    A new Strophe.SASLMechanism object.
     */
    function SASLMechanism(name, isClientFirst, priority) {
      _classCallCheck(this, SASLMechanism);
      /** PrivateVariable: mechname
       *  Mechanism name.
       */
      this.mechname = name;

      /** PrivateVariable: isClientFirst
       *  If client sends response without initial server challenge.
       */
      this.isClientFirst = isClientFirst;

      /** Variable: priority
       *  Determines which <SASLMechanism> is chosen for authentication (Higher is better).
       *  Users may override this to prioritize mechanisms differently.
       *
       *  Example: (This will cause Strophe to choose the mechanism that the server sent first)
       *
       *  > Strophe.SASLPlain.priority = Strophe.SASLSHA1.priority;
       *
       *  See <SASL mechanisms> for a list of available mechanisms.
       *
       */
      this.priority = priority;
    }

    /**
     *  Function: test
     *  Checks if mechanism able to run.
     *  To disable a mechanism, make this return false;
     *
     *  To disable plain authentication run
     *  > Strophe.SASLPlain.test = function() {
     *  >   return false;
     *  > }
     *
     *  See <SASL mechanisms> for a list of available mechanisms.
     *
     *  Parameters:
     *    (Strophe.Connection) connection - Target Connection.
     *
     *  Returns:
     *    (Boolean) If mechanism was able to run.
     */
    // eslint-disable-next-line class-methods-use-this
    _createClass(SASLMechanism, [{
      key: "test",
      value: function test() {
        return true;
      }

      /** PrivateFunction: onStart
       *  Called before starting mechanism on some connection.
       *
       *  Parameters:
       *    (Strophe.Connection) connection - Target Connection.
       */
    }, {
      key: "onStart",
      value: function onStart(connection) {
        this._connection = connection;
      }

      /** PrivateFunction: onChallenge
       *  Called by protocol implementation on incoming challenge.
       *
       *  By deafult, if the client is expected to send data first (isClientFirst === true),
       *  this method is called with `challenge` as null on the first call,
       *  unless `clientChallenge` is overridden in the relevant subclass.
       *
       *  Parameters:
       *    (Strophe.Connection) connection - Target Connection.
       *    (String) challenge - current challenge to handle.
       *
       *  Returns:
       *    (String) Mechanism response.
       */
      // eslint-disable-next-line no-unused-vars, class-methods-use-this
    }, {
      key: "onChallenge",
      value: function onChallenge(connection, challenge) {
        throw new Error('You should implement challenge handling!');
      }

      /** PrivateFunction: clientChallenge
       *  Called by the protocol implementation if the client is expected to send
       *  data first in the authentication exchange (i.e. isClientFirst === true).
       *
       *  Parameters:
       *    (Strophe.Connection) connection - Target Connection.
       *
       *  Returns:
       *    (String) Mechanism response.
       */
    }, {
      key: "clientChallenge",
      value: function clientChallenge(connection) {
        if (!this.isClientFirst) {
          throw new Error('clientChallenge should not be called if isClientFirst is false!');
        }
        return this.onChallenge(connection);
      }

      /** PrivateFunction: onFailure
       *  Protocol informs mechanism implementation about SASL failure.
       */
    }, {
      key: "onFailure",
      value: function onFailure() {
        this._connection = null;
      }

      /** PrivateFunction: onSuccess
       *  Protocol informs mechanism implementation about SASL success.
       */
    }, {
      key: "onSuccess",
      value: function onSuccess() {
        this._connection = null;
      }
    }]);
    return SASLMechanism;
  }(); // Building SASL callbacks
  var SASLAnonymous = /*#__PURE__*/function (_SASLMechanism) {
    _inherits(SASLAnonymous, _SASLMechanism);
    var _super = _createSuper(SASLAnonymous);
    /** PrivateConstructor: SASLAnonymous
     *  SASL ANONYMOUS authentication.
     */
    function SASLAnonymous() {
      _classCallCheck(this, SASLAnonymous);
      var mechname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ANONYMOUS';
      var isClientFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
      return _super.call(this, mechname, isClientFirst, priority);
    }

    // eslint-disable-next-line class-methods-use-this
    _createClass(SASLAnonymous, [{
      key: "test",
      value: function test(connection) {
        return connection.authcid === null;
      }
    }]);
    return SASLAnonymous;
  }(SASLMechanism);
  var SASLExternal = /*#__PURE__*/function (_SASLMechanism2) {
    _inherits(SASLExternal, _SASLMechanism2);
    var _super2 = _createSuper(SASLExternal);
    /** PrivateConstructor: SASLExternal
     *  SASL EXTERNAL authentication.
     *
     *  The EXTERNAL mechanism allows a client to request the server to use
     *  credentials established by means external to the mechanism to
     *  authenticate the client. The external means may be, for instance,
     *  TLS services.
     */
    function SASLExternal() {
      _classCallCheck(this, SASLExternal);
      var mechname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'EXTERNAL';
      var isClientFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      return _super2.call(this, mechname, isClientFirst, priority);
    }

    // eslint-disable-next-line class-methods-use-this
    _createClass(SASLExternal, [{
      key: "onChallenge",
      value: function onChallenge(connection) {
        /** According to XEP-178, an authzid SHOULD NOT be presented when the
         * authcid contained or implied in the client certificate is the JID (i.e.
         * authzid) with which the user wants to log in as.
         *
         * To NOT send the authzid, the user should therefore set the authcid equal
         * to the JID when instantiating a new Strophe.Connection object.
         */
        return connection.authcid === connection.authzid ? '' : connection.authzid;
      }
    }]);
    return SASLExternal;
  }(SASLMechanism);
  var SASLOAuthBearer = /*#__PURE__*/function (_SASLMechanism3) {
    _inherits(SASLOAuthBearer, _SASLMechanism3);
    var _super3 = _createSuper(SASLOAuthBearer);
    /** PrivateConstructor: SASLOAuthBearer
     *  SASL OAuth Bearer authentication.
     */
    function SASLOAuthBearer() {
      _classCallCheck(this, SASLOAuthBearer);
      var mechname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'OAUTHBEARER';
      var isClientFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;
      return _super3.call(this, mechname, isClientFirst, priority);
    }

    // eslint-disable-next-line class-methods-use-this
    _createClass(SASLOAuthBearer, [{
      key: "test",
      value: function test(connection) {
        return connection.pass !== null;
      }

      // eslint-disable-next-line class-methods-use-this
    }, {
      key: "onChallenge",
      value: function onChallenge(connection) {
        var auth_str = 'n,';
        if (connection.authcid !== null) {
          auth_str = auth_str + 'a=' + connection.authzid;
        }
        auth_str = auth_str + ',';
        auth_str = auth_str + "\x01";
        auth_str = auth_str + 'auth=Bearer ';
        auth_str = auth_str + connection.pass;
        auth_str = auth_str + "\x01";
        auth_str = auth_str + "\x01";
        return utils.utf16to8(auth_str);
      }
    }]);
    return SASLOAuthBearer;
  }(SASLMechanism);
  var SASLPlain = /*#__PURE__*/function (_SASLMechanism4) {
    _inherits(SASLPlain, _SASLMechanism4);
    var _super4 = _createSuper(SASLPlain);
    /** PrivateConstructor: SASLPlain
     *  SASL PLAIN authentication.
     */
    function SASLPlain() {
      _classCallCheck(this, SASLPlain);
      var mechname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'PLAIN';
      var isClientFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
      return _super4.call(this, mechname, isClientFirst, priority);
    }

    // eslint-disable-next-line class-methods-use-this
    _createClass(SASLPlain, [{
      key: "test",
      value: function test(connection) {
        return connection.authcid !== null;
      }

      // eslint-disable-next-line class-methods-use-this
    }, {
      key: "onChallenge",
      value: function onChallenge(connection) {
        var authcid = connection.authcid,
          authzid = connection.authzid,
          domain = connection.domain,
          pass = connection.pass;
        if (!domain) {
          throw new Error('SASLPlain onChallenge: domain is not defined!');
        }
        // Only include authzid if it differs from authcid.
        // See: https://tools.ietf.org/html/rfc6120#section-6.3.8
        var auth_str = authzid !== "".concat(authcid, "@").concat(domain) ? authzid : '';
        auth_str = auth_str + "\0";
        auth_str = auth_str + authcid;
        auth_str = auth_str + "\0";
        auth_str = auth_str + pass;
        return utils.utf16to8(auth_str);
      }
    }]);
    return SASLPlain;
  }(SASLMechanism);
  function scramClientProof(_x2, _x3, _x4) {
    return _scramClientProof.apply(this, arguments);
  }
  /* This function parses the information in a SASL SCRAM challenge response,
   * into an object of the form
   * { nonce: String,
   *   salt:  ArrayBuffer,
   *   iter:  Int
   * }
   * Returns undefined on failure.
   */
  function _scramClientProof() {
    _scramClientProof = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(authMessage, clientKey, hashName) {
      var storedKey, clientSignature;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.t0 = crypto.subtle;
            _context7.next = 3;
            return crypto.subtle.digest(hashName, clientKey);
          case 3:
            _context7.t1 = _context7.sent;
            _context7.t2 = {
              'name': 'HMAC',
              'hash': hashName
            };
            _context7.t3 = ['sign'];
            _context7.next = 8;
            return _context7.t0.importKey.call(_context7.t0, 'raw', _context7.t1, _context7.t2, false, _context7.t3);
          case 8:
            storedKey = _context7.sent;
            _context7.next = 11;
            return crypto.subtle.sign('HMAC', storedKey, utils.stringToArrayBuf(authMessage));
          case 11:
            clientSignature = _context7.sent;
            return _context7.abrupt("return", utils.xorArrayBuffers(clientKey, clientSignature));
          case 13:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return _scramClientProof.apply(this, arguments);
  }
  function scramParseChallenge(challenge) {
    var nonce, salt, iter;
    var attribMatch = /([a-z]+)=([^,]+)(,|$)/;
    while (challenge.match(attribMatch)) {
      var matches = challenge.match(attribMatch);
      challenge = challenge.replace(matches[0], '');
      switch (matches[1]) {
        case 'r':
          nonce = matches[2];
          break;
        case 's':
          salt = utils.base64ToArrayBuf(matches[2]);
          break;
        case 'i':
          iter = parseInt(matches[2], 10);
          break;
        default:
          return undefined;
      }
    }

    // Consider iteration counts less than 4096 insecure, as reccommended by
    // RFC 5802
    if (isNaN(iter) || iter < 4096) {
      Strophe.warn('Failing SCRAM authentication because server supplied iteration count < 4096.');
      return undefined;
    }
    if (!salt) {
      Strophe.warn('Failing SCRAM authentication because server supplied incorrect salt.');
      return undefined;
    }
    return {
      'nonce': nonce,
      'salt': salt,
      'iter': iter
    };
  }

  /* Derive the client and server keys given a string password,
   * a hash name, and a bit length.
   * Returns an object of the following form:
   * { ck: ArrayBuffer, the client key
   *   sk: ArrayBuffer, the server key
   * }
   */
  function scramDeriveKeys(_x5, _x6, _x7, _x8, _x9) {
    return _scramDeriveKeys.apply(this, arguments);
  }
  function _scramDeriveKeys() {
    _scramDeriveKeys = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(password, salt, iter, hashName, hashBits) {
      var saltedPasswordBits, saltedPassword;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.t0 = crypto.subtle;
            _context8.t1 = {
              'name': 'PBKDF2',
              'salt': salt,
              'iterations': iter,
              'hash': {
                'name': hashName
              }
            };
            _context8.next = 4;
            return crypto.subtle.importKey('raw', utils.stringToArrayBuf(password), 'PBKDF2', false, ['deriveBits']);
          case 4:
            _context8.t2 = _context8.sent;
            _context8.t3 = hashBits;
            _context8.next = 8;
            return _context8.t0.deriveBits.call(_context8.t0, _context8.t1, _context8.t2, _context8.t3);
          case 8:
            saltedPasswordBits = _context8.sent;
            _context8.next = 11;
            return crypto.subtle.importKey('raw', saltedPasswordBits, {
              'name': 'HMAC',
              'hash': hashName
            }, false, ['sign']);
          case 11:
            saltedPassword = _context8.sent;
            _context8.next = 14;
            return crypto.subtle.sign('HMAC', saltedPassword, utils.stringToArrayBuf('Client Key'));
          case 14:
            _context8.t4 = _context8.sent;
            _context8.next = 17;
            return crypto.subtle.sign('HMAC', saltedPassword, utils.stringToArrayBuf('Server Key'));
          case 17:
            _context8.t5 = _context8.sent;
            return _context8.abrupt("return", {
              'ck': _context8.t4,
              'sk': _context8.t5
            });
          case 19:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return _scramDeriveKeys.apply(this, arguments);
  }
  function scramServerSign(_x10, _x11, _x12) {
    return _scramServerSign.apply(this, arguments);
  } // Generate an ASCII nonce (not containing the ',' character)
  function _scramServerSign() {
    _scramServerSign = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(authMessage, sk, hashName) {
      var serverKey;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return crypto.subtle.importKey('raw', sk, {
              'name': 'HMAC',
              'hash': hashName
            }, false, ['sign']);
          case 2:
            serverKey = _context9.sent;
            return _context9.abrupt("return", crypto.subtle.sign('HMAC', serverKey, utils.stringToArrayBuf(authMessage)));
          case 4:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return _scramServerSign.apply(this, arguments);
  }
  function generate_cnonce() {
    // generate 16 random bytes of nonce, base64 encoded
    var bytes = new Uint8Array(16);
    return utils.arrayBufToBase64(crypto.getRandomValues(bytes).buffer);
  }
  var scram = {
    /* On success, sets
     * connection_sasl_data["server-signature"]
     * and
     * connection._sasl_data.keys
     *
     * The server signature should be verified after this function completes..
     *
     * On failure, returns connection._sasl_failure_cb();
     */
    scramResponse: function scramResponse(connection, challenge, hashName, hashBits) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _connection$pass, _connection$pass2, _connection$pass3, cnonce, challengeData, clientKey, serverKey, keys, clientFirstMessageBare, serverFirstMessage, clientFinalMessageBare, authMessage, clientProof, serverSignature;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              cnonce = connection._sasl_data.cnonce;
              challengeData = scramParseChallenge(challenge); // The RFC requires that we verify the (server) nonce has the client
              // nonce as an initial substring.
              if (!(!challengeData && (challengeData === null || challengeData === void 0 ? void 0 : challengeData.nonce.slice(0, cnonce.length)) !== cnonce)) {
                _context2.next = 6;
                break;
              }
              Strophe.warn('Failing SCRAM authentication because server supplied incorrect nonce.');
              connection._sasl_data = {};
              return _context2.abrupt("return", connection._sasl_failure_cb());
            case 6:
              if (!(((_connection$pass = connection.pass) === null || _connection$pass === void 0 ? void 0 : _connection$pass.name) === hashName && ((_connection$pass2 = connection.pass) === null || _connection$pass2 === void 0 ? void 0 : _connection$pass2.salt) === utils.arrayBufToBase64(challengeData.salt) && ((_connection$pass3 = connection.pass) === null || _connection$pass3 === void 0 ? void 0 : _connection$pass3.iter) === challengeData.iter)) {
                _context2.next = 11;
                break;
              }
              clientKey = utils.base64ToArrayBuf(connection.pass.ck);
              serverKey = utils.base64ToArrayBuf(connection.pass.sk);
              _context2.next = 20;
              break;
            case 11:
              if (!(typeof connection.pass === 'string' || connection.pass instanceof String)) {
                _context2.next = 19;
                break;
              }
              _context2.next = 14;
              return scramDeriveKeys(connection.pass, challengeData.salt, challengeData.iter, hashName, hashBits);
            case 14:
              keys = _context2.sent;
              clientKey = keys.ck;
              serverKey = keys.sk;
              _context2.next = 20;
              break;
            case 19:
              return _context2.abrupt("return", connection._sasl_failure_cb());
            case 20:
              clientFirstMessageBare = connection._sasl_data['client-first-message-bare'];
              serverFirstMessage = challenge;
              clientFinalMessageBare = "c=biws,r=".concat(challengeData.nonce);
              authMessage = "".concat(clientFirstMessageBare, ",").concat(serverFirstMessage, ",").concat(clientFinalMessageBare);
              _context2.next = 26;
              return scramClientProof(authMessage, clientKey, hashName);
            case 26:
              clientProof = _context2.sent;
              _context2.next = 29;
              return scramServerSign(authMessage, serverKey, hashName);
            case 29:
              serverSignature = _context2.sent;
              connection._sasl_data['server-signature'] = utils.arrayBufToBase64(serverSignature);
              connection._sasl_data.keys = {
                'name': hashName,
                'iter': challengeData.iter,
                'salt': utils.arrayBufToBase64(challengeData.salt),
                'ck': utils.arrayBufToBase64(clientKey),
                'sk': utils.arrayBufToBase64(serverKey)
              };
              return _context2.abrupt("return", "".concat(clientFinalMessageBare, ",p=").concat(utils.arrayBufToBase64(clientProof)));
            case 33:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // Returns a string containing the client first message
    clientChallenge: function clientChallenge(connection, test_cnonce) {
      var cnonce = test_cnonce || generate_cnonce();
      var client_first_message_bare = "n=".concat(connection.authcid, ",r=").concat(cnonce);
      connection._sasl_data.cnonce = cnonce;
      connection._sasl_data['client-first-message-bare'] = client_first_message_bare;
      return "n,,".concat(client_first_message_bare);
    }
  };
  var SASLSHA1 = /*#__PURE__*/function (_SASLMechanism5) {
    _inherits(SASLSHA1, _SASLMechanism5);
    var _super5 = _createSuper(SASLSHA1);
    /** PrivateConstructor: SASLSHA1
     *  SASL SCRAM SHA 1 authentication.
     */
    function SASLSHA1() {
      _classCallCheck(this, SASLSHA1);
      var mechname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SCRAM-SHA-1';
      var isClientFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;
      return _super5.call(this, mechname, isClientFirst, priority);
    }

    // eslint-disable-next-line class-methods-use-this
    _createClass(SASLSHA1, [{
      key: "test",
      value: function test(connection) {
        return connection.authcid !== null;
      }

      // eslint-disable-next-line class-methods-use-this
    }, {
      key: "onChallenge",
      value: function () {
        var _onChallenge = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(connection, challenge) {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return scram.scramResponse(connection, challenge, 'SHA-1', 160);
              case 2:
                return _context3.abrupt("return", _context3.sent);
              case 3:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        function onChallenge(_x13, _x14) {
          return _onChallenge.apply(this, arguments);
        }
        return onChallenge;
      }() // eslint-disable-next-line class-methods-use-this
    }, {
      key: "clientChallenge",
      value: function clientChallenge(connection, test_cnonce) {
        return scram.clientChallenge(connection, test_cnonce);
      }
    }]);
    return SASLSHA1;
  }(SASLMechanism);
  var SASLSHA256 = /*#__PURE__*/function (_SASLMechanism6) {
    _inherits(SASLSHA256, _SASLMechanism6);
    var _super6 = _createSuper(SASLSHA256);
    /** PrivateConstructor: SASLSHA256
     *  SASL SCRAM SHA 256 authentication.
     */
    function SASLSHA256() {
      _classCallCheck(this, SASLSHA256);
      var mechname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SCRAM-SHA-256';
      var isClientFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 70;
      return _super6.call(this, mechname, isClientFirst, priority);
    }

    // eslint-disable-next-line class-methods-use-this
    _createClass(SASLSHA256, [{
      key: "test",
      value: function test(connection) {
        return connection.authcid !== null;
      }

      // eslint-disable-next-line class-methods-use-this
    }, {
      key: "onChallenge",
      value: function () {
        var _onChallenge2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(connection, challenge) {
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return scram.scramResponse(connection, challenge, 'SHA-256', 256);
              case 2:
                return _context4.abrupt("return", _context4.sent);
              case 3:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        function onChallenge(_x15, _x16) {
          return _onChallenge2.apply(this, arguments);
        }
        return onChallenge;
      }() // eslint-disable-next-line class-methods-use-this
    }, {
      key: "clientChallenge",
      value: function clientChallenge(connection, test_cnonce) {
        return scram.clientChallenge(connection, test_cnonce);
      }
    }]);
    return SASLSHA256;
  }(SASLMechanism);
  var SASLSHA384 = /*#__PURE__*/function (_SASLMechanism7) {
    _inherits(SASLSHA384, _SASLMechanism7);
    var _super7 = _createSuper(SASLSHA384);
    /** PrivateConstructor: SASLSHA384
     *  SASL SCRAM SHA 384 authentication.
     */
    function SASLSHA384() {
      _classCallCheck(this, SASLSHA384);
      var mechname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SCRAM-SHA-384';
      var isClientFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 71;
      return _super7.call(this, mechname, isClientFirst, priority);
    }

    // eslint-disable-next-line class-methods-use-this
    _createClass(SASLSHA384, [{
      key: "test",
      value: function test(connection) {
        return connection.authcid !== null;
      }

      // eslint-disable-next-line class-methods-use-this
    }, {
      key: "onChallenge",
      value: function () {
        var _onChallenge3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(connection, challenge) {
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return scram.scramResponse(connection, challenge, 'SHA-384', 384);
              case 2:
                return _context5.abrupt("return", _context5.sent);
              case 3:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }));
        function onChallenge(_x17, _x18) {
          return _onChallenge3.apply(this, arguments);
        }
        return onChallenge;
      }() // eslint-disable-next-line class-methods-use-this
    }, {
      key: "clientChallenge",
      value: function clientChallenge(connection, test_cnonce) {
        return scram.clientChallenge(connection, test_cnonce);
      }
    }]);
    return SASLSHA384;
  }(SASLMechanism);
  var SASLSHA512 = /*#__PURE__*/function (_SASLMechanism8) {
    _inherits(SASLSHA512, _SASLMechanism8);
    var _super8 = _createSuper(SASLSHA512);
    /** PrivateConstructor: SASLSHA512
     *  SASL SCRAM SHA 512 authentication.
     */
    function SASLSHA512() {
      _classCallCheck(this, SASLSHA512);
      var mechname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SCRAM-SHA-512';
      var isClientFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 72;
      return _super8.call(this, mechname, isClientFirst, priority);
    }

    // eslint-disable-next-line class-methods-use-this
    _createClass(SASLSHA512, [{
      key: "test",
      value: function test(connection) {
        return connection.authcid !== null;
      }

      // eslint-disable-next-line class-methods-use-this
    }, {
      key: "onChallenge",
      value: function () {
        var _onChallenge4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(connection, challenge) {
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return scram.scramResponse(connection, challenge, 'SHA-512', 512);
              case 2:
                return _context6.abrupt("return", _context6.sent);
              case 3:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }));
        function onChallenge(_x19, _x20) {
          return _onChallenge4.apply(this, arguments);
        }
        return onChallenge;
      }() // eslint-disable-next-line class-methods-use-this
    }, {
      key: "clientChallenge",
      value: function clientChallenge(connection, test_cnonce) {
        return scram.clientChallenge(connection, test_cnonce);
      }
    }]);
    return SASLSHA512;
  }(SASLMechanism);
  var SASLXOAuth2 = /*#__PURE__*/function (_SASLMechanism9) {
    _inherits(SASLXOAuth2, _SASLMechanism9);
    var _super9 = _createSuper(SASLXOAuth2);
    /** PrivateConstructor: SASLXOAuth2
     *  SASL X-OAuth2 authentication.
     */
    function SASLXOAuth2() {
      _classCallCheck(this, SASLXOAuth2);
      var mechname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'X-OAUTH2';
      var isClientFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
      return _super9.call(this, mechname, isClientFirst, priority);
    }

    // eslint-disable-next-line class-methods-use-this
    _createClass(SASLXOAuth2, [{
      key: "test",
      value: function test(connection) {
        return connection.pass !== null;
      }

      // eslint-disable-next-line class-methods-use-this
    }, {
      key: "onChallenge",
      value: function onChallenge(connection) {
        var auth_str = "\0";
        if (connection.authcid !== null) {
          auth_str = auth_str + connection.authzid;
        }
        auth_str = auth_str + "\0";
        auth_str = auth_str + connection.pass;
        return utils.utf16to8(auth_str);
      }
    }]);
    return SASLXOAuth2;
  }(SASLMechanism);
  /*
      This program is distributed under the terms of the MIT license.
      Please see the LICENSE file for details.
       Copyright 2006-2018, OGG, LLC
  */
  /** Class: Strophe
   *  An object container for all Strophe library functions.
   *
   *  This class is just a container for all the objects and constants
   *  used in the library.  It is not meant to be instantiated, but to
   *  provide a namespace for library objects, constants, and functions.
   */
  var Strophe = _objectSpread(_objectSpread({
    /** Constant: VERSION */
    VERSION: '1.6.1',
    Builder: Builder,
    Connection: Connection,
    ElementType: ElementType,
    ErrorCondition: ErrorCondition,
    Handler: Handler,
    LogLevel: LogLevel,
    NS: NS,
    SASLMechanism: SASLMechanism,
    Status: Status,
    TimedHandler: TimedHandler
  }, utils$1), {}, {
    XHTML: _objectSpread(_objectSpread({}, XHTML), {}, {
      validTag: validTag,
      validCSS: validCSS,
      validAttribute: validAttribute
    }),
    /** Function: addNamespace
     *  This function is used to extend the current namespaces in
     *  Strophe.NS.  It takes a key and a value with the key being the
     *  name of the new namespace, with its actual value.
     *  For example:
     *  Strophe.addNamespace('PUBSUB', "http://jabber.org/protocol/pubsub");
     *
     *  Parameters:
     *    (String) name - The name under which the namespace will be
     *      referenced under Strophe.NS
     *    (String) value - The actual namespace.
     */
    addNamespace: function addNamespace(name, value) {
      Strophe.NS[name] = value;
    },
    /** PrivateFunction: _handleError
     *  _Private_ function that properly logs an error to the console
     */
    _handleError: function _handleError(e) {
      if (typeof e.stack !== 'undefined') {
        Strophe.fatal(e.stack);
      }
      if (e.sourceURL) {
        Strophe.fatal('error: ' + this.handler + ' ' + e.sourceURL + ':' + e.line + ' - ' + e.name + ': ' + e.message);
      } else if (e.fileName) {
        Strophe.fatal('error: ' + this.handler + ' ' + e.fileName + ':' + e.lineNumber + ' - ' + e.name + ': ' + e.message);
      } else {
        Strophe.fatal('error: ' + e.message);
      }
    },
    /** Function: log
     *  User overrideable logging function.
     *
     *  This function is called whenever the Strophe library calls any
     *  of the logging functions.  The default implementation of this
     *  function logs only fatal errors.  If client code wishes to handle the logging
     *  messages, it should override this with
     *  > Strophe.log = function (level, msg) {
     *  >   (user code here)
     *  > };
     *
     *  Please note that data sent and received over the wire is logged
     *  via Strophe.Connection.rawInput() and Strophe.Connection.rawOutput().
     *
     *  The different levels and their meanings are
     *
     *    DEBUG - Messages useful for debugging purposes.
     *    INFO - Informational messages.  This is mostly information like
     *      'disconnect was called' or 'SASL auth succeeded'.
     *    WARN - Warnings about potential problems.  This is mostly used
     *      to report transient connection errors like request timeouts.
     *    ERROR - Some error occurred.
     *    FATAL - A non-recoverable fatal error occurred.
     *
     *  Parameters:
     *    (Integer) level - The log level of the log message.  This will
     *      be one of the values in Strophe.LogLevel.
     *    (String) msg - The log message.
     */
    log: function log(level, msg) {
      if (level === this.LogLevel.FATAL) {
        var _console;
        (_console = console) === null || _console === void 0 ? void 0 : _console.error(msg);
      }
    },
    /** Function: debug
     *  Log a message at the Strophe.LogLevel.DEBUG level.
     *
     *  Parameters:
     *    (String) msg - The log message.
     */
    debug: function debug(msg) {
      this.log(this.LogLevel.DEBUG, msg);
    },
    /** Function: info
     *  Log a message at the Strophe.LogLevel.INFO level.
     *
     *  Parameters:
     *    (String) msg - The log message.
     */
    info: function info(msg) {
      this.log(this.LogLevel.INFO, msg);
    },
    /** Function: warn
     *  Log a message at the Strophe.LogLevel.WARN level.
     *
     *  Parameters:
     *    (String) msg - The log message.
     */
    warn: function warn(msg) {
      this.log(this.LogLevel.WARN, msg);
    },
    /** Function: error
     *  Log a message at the Strophe.LogLevel.ERROR level.
     *
     *  Parameters:
     *    (String) msg - The log message.
     */
    error: function error(msg) {
      this.log(this.LogLevel.ERROR, msg);
    },
    /** Function: fatal
     *  Log a message at the Strophe.LogLevel.FATAL level.
     *
     *  Parameters:
     *    (String) msg - The log message.
     */
    fatal: function fatal(msg) {
      this.log(this.LogLevel.FATAL, msg);
    },
    /** PrivateVariable: _requestId
     *  _Private_ variable that keeps track of the request ids for
     *  connections.
     */
    _requestId: 0,
    /** PrivateVariable: Strophe.connectionPlugins
     *  _Private_ variable Used to store plugin names that need
     *  initialization on Strophe.Connection construction.
     */
    _connectionPlugins: {},
    /** Function: addConnectionPlugin
     *  Extends the Strophe.Connection object with the given plugin.
     *
     *  Parameters:
     *    (String) name - The name of the extension.
     *    (Object) ptype - The plugin's prototype.
     */
    addConnectionPlugin: function addConnectionPlugin(name, ptype) {
      Strophe._connectionPlugins[name] = ptype;
    }
  });

  /** Constants: SASL mechanisms
   *  Available authentication mechanisms
   *
   *  Strophe.SASLAnonymous   - SASL ANONYMOUS authentication.
   *  Strophe.SASLPlain       - SASL PLAIN authentication.
   *  Strophe.SASLSHA1        - SASL SCRAM-SHA-1 authentication
   *  Strophe.SASLSHA256      - SASL SCRAM-SHA-256 authentication
   *  Strophe.SASLSHA384      - SASL SCRAM-SHA-384 authentication
   *  Strophe.SASLSHA512      - SASL SCRAM-SHA-512 authentication
   *  Strophe.SASLOAuthBearer - SASL OAuth Bearer authentication
   *  Strophe.SASLExternal    - SASL EXTERNAL authentication
   *  Strophe.SASLXOAuth2     - SASL X-OAuth2 authentication
   */
  Strophe.SASLAnonymous = SASLAnonymous;
  Strophe.SASLPlain = SASLPlain;
  Strophe.SASLSHA1 = SASLSHA1;
  Strophe.SASLSHA256 = SASLSHA256;
  Strophe.SASLSHA384 = SASLSHA384;
  Strophe.SASLSHA512 = SASLSHA512;
  Strophe.SASLOAuthBearer = SASLOAuthBearer;
  Strophe.SASLExternal = SASLExternal;
  Strophe.SASLXOAuth2 = SASLXOAuth2;
  var core = {
    'Strophe': Strophe,
    '$build': $build,
    '$iq': $iq,
    '$msg': $msg,
    '$pres': $pres
  };

  /*
      This program is distributed under the terms of the MIT license.
      Please see the LICENSE file for details.
       Copyright 2006-2008, OGG, LLC
  */

  /** PrivateClass: Strophe.Request
   *  _Private_ helper class that provides a cross implementation abstraction
   *  for a BOSH related XMLHttpRequest.
   *
   *  The Strophe.Request class is used internally to encapsulate BOSH request
   *  information.  It is not meant to be used from user's code.
   */
  Strophe.Request = /*#__PURE__*/function () {
    /** PrivateConstructor: Strophe.Request
     *  Create and initialize a new Strophe.Request object.
     *
     *  Parameters:
     *    (XMLElement) elem - The XML data to be sent in the request.
     *    (Function) func - The function that will be called when the
     *      XMLHttpRequest readyState changes.
     *    (Integer) rid - The BOSH rid attribute associated with this request.
     *    (Integer) sends - The number of times this same request has been sent.
     */
    function Request(elem, func, rid, sends) {
      _classCallCheck(this, Request);
      this.id = ++Strophe._requestId;
      this.xmlData = elem;
      this.data = Strophe.serialize(elem);
      // save original function in case we need to make a new request
      // from this one.
      this.origFunc = func;
      this.func = func;
      this.rid = rid;
      this.date = NaN;
      this.sends = sends || 0;
      this.abort = false;
      this.dead = null;
      this.age = function () {
        if (!this.date) {
          return 0;
        }
        var now = new Date();
        return (now - this.date) / 1000;
      };
      this.timeDead = function () {
        if (!this.dead) {
          return 0;
        }
        var now = new Date();
        return (now - this.dead) / 1000;
      };
      this.xhr = this._newXHR();
    }

    /** PrivateFunction: getResponse
     *  Get a response from the underlying XMLHttpRequest.
     *
     *  This function attempts to get a response from the request and checks
     *  for errors.
     *
     *  Throws:
     *    "parsererror" - A parser error occured.
     *    "bad-format" - The entity has sent XML that cannot be processed.
     *
     *  Returns:
     *    The DOM element tree of the response.
     */
    _createClass(Request, [{
      key: "getResponse",
      value: function getResponse() {
        var node = null;
        if (this.xhr.responseXML && this.xhr.responseXML.documentElement) {
          node = this.xhr.responseXML.documentElement;
          if (node.tagName === 'parsererror') {
            Strophe.error('invalid response received');
            Strophe.error('responseText: ' + this.xhr.responseText);
            Strophe.error('responseXML: ' + Strophe.serialize(this.xhr.responseXML));
            throw new Error('parsererror');
          }
        } else if (this.xhr.responseText) {
          var _node;
          // In Node (with xhr2) or React Native, we may get responseText but no responseXML.
          // We can try to parse it manually.
          Strophe.debug('Got responseText but no responseXML; attempting to parse it with DOMParser...');
          node = new DOMParser().parseFromString(this.xhr.responseText, 'application/xml').documentElement;
          var parserError = (_node = node) === null || _node === void 0 ? void 0 : _node.querySelector('parsererror');
          if (!node || parserError) {
            if (parserError) {
              Strophe.error('invalid response received: ' + parserError.textContent);
              Strophe.error('responseText: ' + this.xhr.responseText);
            }
            var error = new Error();
            error.name = Strophe.ErrorCondition.BAD_FORMAT;
            throw error;
          }
        }
        return node;
      }

      /** PrivateFunction: _newXHR
       *  _Private_ helper function to create XMLHttpRequests.
       *
       *  This function creates XMLHttpRequests across all implementations.
       *
       *  Returns:
       *    A new XMLHttpRequest.
       */
    }, {
      key: "_newXHR",
      value: function _newXHR() {
        var xhr = null;
        if (globalThis.XMLHttpRequest) {
          xhr = new XMLHttpRequest();
          if (xhr.overrideMimeType) {
            xhr.overrideMimeType('text/xml; charset=utf-8');
          }
        } else if (globalThis.ActiveXObject) {
          xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        // use Function.bind() to prepend ourselves as an argument
        xhr.onreadystatechange = this.func.bind(null, this);
        return xhr;
      }
    }]);
    return Request;
  }();

  /** Class: Strophe.Bosh
   *  _Private_ helper class that handles BOSH Connections
   *
   *  The Strophe.Bosh class is used internally by Strophe.Connection
   *  to encapsulate BOSH sessions. It is not meant to be used from user's code.
   */

  /** File: bosh.js
   *  A JavaScript library to enable BOSH in Strophejs.
   *
   *  this library uses Bidirectional-streams Over Synchronous HTTP (BOSH)
   *  to emulate a persistent, stateful, two-way connection to an XMPP server.
   *  More information on BOSH can be found in XEP 124.
   */

  /** PrivateConstructor: Strophe.Bosh
   *  Create and initialize a Strophe.Bosh object.
   *
   *  Parameters:
   *    (Strophe.Connection) connection - The Strophe.Connection that will use BOSH.
   *
   *  Returns:
   *    A new Strophe.Bosh object.
   */
  Strophe.Bosh = /*#__PURE__*/function () {
    function Bosh(connection) {
      _classCallCheck(this, Bosh);
      this._conn = connection;
      /* request id for body tags */
      this.rid = Math.floor(Math.random() * 4294967295);
      /* The current session ID. */
      this.sid = null;

      // default BOSH values
      this.hold = 1;
      this.wait = 60;
      this.window = 5;
      this.errors = 0;
      this.inactivity = null;
      this.lastResponseHeaders = null;
      this._requests = [];
    }

    /** PrivateFunction: _buildBody
     *  _Private_ helper function to generate the <body/> wrapper for BOSH.
     *
     *  Returns:
     *    A Strophe.Builder with a <body/> element.
     */
    _createClass(Bosh, [{
      key: "_buildBody",
      value: function _buildBody() {
        var bodyWrap = $build('body', {
          'rid': this.rid++,
          'xmlns': Strophe.NS.HTTPBIND
        });
        if (this.sid !== null) {
          bodyWrap.attrs({
            'sid': this.sid
          });
        }
        if (this._conn.options.keepalive && this._conn._sessionCachingSupported()) {
          this._cacheSession();
        }
        return bodyWrap;
      }

      /** PrivateFunction: _reset
       *  Reset the connection.
       *
       *  This function is called by the reset function of the Strophe Connection
       */
    }, {
      key: "_reset",
      value: function _reset() {
        this.rid = Math.floor(Math.random() * 4294967295);
        this.sid = null;
        this.errors = 0;
        if (this._conn._sessionCachingSupported()) {
          sessionStorage.removeItem('strophe-bosh-session');
        }
        this._conn.nextValidRid(this.rid);
      }

      /** PrivateFunction: _connect
       *  _Private_ function that initializes the BOSH connection.
       *
       *  Creates and sends the Request that initializes the BOSH connection.
       */
    }, {
      key: "_connect",
      value: function _connect(wait, hold, route) {
        this.wait = wait || this.wait;
        this.hold = hold || this.hold;
        this.errors = 0;
        var body = this._buildBody().attrs({
          'to': this._conn.domain,
          'xml:lang': 'en',
          'wait': this.wait,
          'hold': this.hold,
          'content': 'text/xml; charset=utf-8',
          'ver': '1.6',
          'xmpp:version': '1.0',
          'xmlns:xmpp': Strophe.NS.BOSH
        });
        if (route) {
          body.attrs({
            'route': route
          });
        }
        var _connect_cb = this._conn._connect_cb;
        this._requests.push(new Strophe.Request(body.tree(), this._onRequestStateChange.bind(this, _connect_cb.bind(this._conn)), body.tree().getAttribute('rid')));
        this._throttledRequestHandler();
      }

      /** PrivateFunction: _attach
       *  Attach to an already created and authenticated BOSH session.
       *
       *  This function is provided to allow Strophe to attach to BOSH
       *  sessions which have been created externally, perhaps by a Web
       *  application.  This is often used to support auto-login type features
       *  without putting user credentials into the page.
       *
       *  Parameters:
       *    (String) jid - The full JID that is bound by the session.
       *    (String) sid - The SID of the BOSH session.
       *    (String) rid - The current RID of the BOSH session.  This RID
       *      will be used by the next request.
       *    (Function) callback The connect callback function.
       *    (Integer) wait - The optional HTTPBIND wait value.  This is the
       *      time the server will wait before returning an empty result for
       *      a request.  The default setting of 60 seconds is recommended.
       *      Other settings will require tweaks to the Strophe.TIMEOUT value.
       *    (Integer) hold - The optional HTTPBIND hold value.  This is the
       *      number of connections the server will hold at one time.  This
       *      should almost always be set to 1 (the default).
       *    (Integer) wind - The optional HTTBIND window value.  This is the
       *      allowed range of request ids that are valid.  The default is 5.
       */
    }, {
      key: "_attach",
      value: function _attach(jid, sid, rid, callback, wait, hold, wind) {
        this._conn.jid = jid;
        this.sid = sid;
        this.rid = rid;
        this._conn.connect_callback = callback;
        this._conn.domain = Strophe.getDomainFromJid(this._conn.jid);
        this._conn.authenticated = true;
        this._conn.connected = true;
        this.wait = wait || this.wait;
        this.hold = hold || this.hold;
        this.window = wind || this.window;
        this._conn._changeConnectStatus(Strophe.Status.ATTACHED, null);
      }

      /** PrivateFunction: _restore
       *  Attempt to restore a cached BOSH session
       *
       *  Parameters:
       *    (String) jid - The full JID that is bound by the session.
       *      This parameter is optional but recommended, specifically in cases
       *      where prebinded BOSH sessions are used where it's important to know
       *      that the right session is being restored.
       *    (Function) callback The connect callback function.
       *    (Integer) wait - The optional HTTPBIND wait value.  This is the
       *      time the server will wait before returning an empty result for
       *      a request.  The default setting of 60 seconds is recommended.
       *      Other settings will require tweaks to the Strophe.TIMEOUT value.
       *    (Integer) hold - The optional HTTPBIND hold value.  This is the
       *      number of connections the server will hold at one time.  This
       *      should almost always be set to 1 (the default).
       *    (Integer) wind - The optional HTTBIND window value.  This is the
       *      allowed range of request ids that are valid.  The default is 5.
       */
    }, {
      key: "_restore",
      value: function _restore(jid, callback, wait, hold, wind) {
        var session = JSON.parse(sessionStorage.getItem('strophe-bosh-session'));
        if (typeof session !== 'undefined' && session !== null && session.rid && session.sid && session.jid && (typeof jid === 'undefined' || jid === null || Strophe.getBareJidFromJid(session.jid) === Strophe.getBareJidFromJid(jid) ||
        // If authcid is null, then it's an anonymous login, so
        // we compare only the domains:
        Strophe.getNodeFromJid(jid) === null && Strophe.getDomainFromJid(session.jid) === jid)) {
          this._conn.restored = true;
          this._attach(session.jid, session.sid, session.rid, callback, wait, hold, wind);
        } else {
          var error = new Error('_restore: no restoreable session.');
          error.name = 'StropheSessionError';
          throw error;
        }
      }

      /** PrivateFunction: _cacheSession
       *  _Private_ handler for the beforeunload event.
       *
       *  This handler is used to process the Bosh-part of the initial request.
       *  Parameters:
       *    (Strophe.Request) bodyWrap - The received stanza.
       */
    }, {
      key: "_cacheSession",
      value: function _cacheSession() {
        if (this._conn.authenticated) {
          if (this._conn.jid && this.rid && this.sid) {
            sessionStorage.setItem('strophe-bosh-session', JSON.stringify({
              'jid': this._conn.jid,
              'rid': this.rid,
              'sid': this.sid
            }));
          }
        } else {
          sessionStorage.removeItem('strophe-bosh-session');
        }
      }

      /** PrivateFunction: _connect_cb
       *  _Private_ handler for initial connection request.
       *
       *  This handler is used to process the Bosh-part of the initial request.
       *  Parameters:
       *    (Strophe.Request) bodyWrap - The received stanza.
       */
    }, {
      key: "_connect_cb",
      value: function _connect_cb(bodyWrap) {
        var typ = bodyWrap.getAttribute('type');
        if (typ !== null && typ === 'terminate') {
          // an error occurred
          var cond = bodyWrap.getAttribute('condition');
          Strophe.error('BOSH-Connection failed: ' + cond);
          var conflict = bodyWrap.getElementsByTagName('conflict');
          if (cond !== null) {
            if (cond === 'remote-stream-error' && conflict.length > 0) {
              cond = 'conflict';
            }
            this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, cond);
          } else {
            this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, 'unknown');
          }
          this._conn._doDisconnect(cond);
          return Strophe.Status.CONNFAIL;
        }

        // check to make sure we don't overwrite these if _connect_cb is
        // called multiple times in the case of missing stream:features
        if (!this.sid) {
          this.sid = bodyWrap.getAttribute('sid');
        }
        var wind = bodyWrap.getAttribute('requests');
        if (wind) {
          this.window = parseInt(wind, 10);
        }
        var hold = bodyWrap.getAttribute('hold');
        if (hold) {
          this.hold = parseInt(hold, 10);
        }
        var wait = bodyWrap.getAttribute('wait');
        if (wait) {
          this.wait = parseInt(wait, 10);
        }
        var inactivity = bodyWrap.getAttribute('inactivity');
        if (inactivity) {
          this.inactivity = parseInt(inactivity, 10);
        }
      }

      /** PrivateFunction: _disconnect
       *  _Private_ part of Connection.disconnect for Bosh
       *
       *  Parameters:
       *    (Request) pres - This stanza will be sent before disconnecting.
       */
    }, {
      key: "_disconnect",
      value: function _disconnect(pres) {
        this._sendTerminate(pres);
      }

      /** PrivateFunction: _doDisconnect
       *  _Private_ function to disconnect.
       *
       *  Resets the SID and RID.
       */
    }, {
      key: "_doDisconnect",
      value: function _doDisconnect() {
        this.sid = null;
        this.rid = Math.floor(Math.random() * 4294967295);
        if (this._conn._sessionCachingSupported()) {
          sessionStorage.removeItem('strophe-bosh-session');
        }
        this._conn.nextValidRid(this.rid);
      }

      /** PrivateFunction: _emptyQueue
       * _Private_ function to check if the Request queue is empty.
       *
       *  Returns:
       *    True, if there are no Requests queued, False otherwise.
       */
    }, {
      key: "_emptyQueue",
      value: function _emptyQueue() {
        return this._requests.length === 0;
      }

      /** PrivateFunction: _callProtocolErrorHandlers
       *  _Private_ function to call error handlers registered for HTTP errors.
       *
       *  Parameters:
       *    (Strophe.Request) req - The request that is changing readyState.
       */
    }, {
      key: "_callProtocolErrorHandlers",
      value: function _callProtocolErrorHandlers(req) {
        var reqStatus = Bosh._getRequestStatus(req);
        var err_callback = this._conn.protocolErrorHandlers.HTTP[reqStatus];
        if (err_callback) {
          err_callback.call(this, reqStatus);
        }
      }

      /** PrivateFunction: _hitError
       *  _Private_ function to handle the error count.
       *
       *  Requests are resent automatically until their error count reaches
       *  5.  Each time an error is encountered, this function is called to
       *  increment the count and disconnect if the count is too high.
       *
       *  Parameters:
       *    (Integer) reqStatus - The request status.
       */
    }, {
      key: "_hitError",
      value: function _hitError(reqStatus) {
        this.errors++;
        Strophe.warn('request errored, status: ' + reqStatus + ', number of errors: ' + this.errors);
        if (this.errors > 4) {
          this._conn._onDisconnectTimeout();
        }
      }

      /** PrivateFunction: _no_auth_received
       *
       * Called on stream start/restart when no stream:features
       * has been received and sends a blank poll request.
       */
    }, {
      key: "_no_auth_received",
      value: function _no_auth_received(callback) {
        Strophe.warn('Server did not yet offer a supported authentication ' + 'mechanism. Sending a blank poll request.');
        if (callback) {
          callback = callback.bind(this._conn);
        } else {
          callback = this._conn._connect_cb.bind(this._conn);
        }
        var body = this._buildBody();
        this._requests.push(new Strophe.Request(body.tree(), this._onRequestStateChange.bind(this, callback), body.tree().getAttribute('rid')));
        this._throttledRequestHandler();
      }

      /** PrivateFunction: _onDisconnectTimeout
       *  _Private_ timeout handler for handling non-graceful disconnection.
       *
       *  Cancels all remaining Requests and clears the queue.
       */
    }, {
      key: "_onDisconnectTimeout",
      value: function _onDisconnectTimeout() {
        this._abortAllRequests();
      }

      /** PrivateFunction: _abortAllRequests
       *  _Private_ helper function that makes sure all pending requests are aborted.
       */
    }, {
      key: "_abortAllRequests",
      value: function _abortAllRequests() {
        while (this._requests.length > 0) {
          var req = this._requests.pop();
          req.abort = true;
          req.xhr.abort();
          req.xhr.onreadystatechange = function () {};
        }
      }

      /** PrivateFunction: _onIdle
       *  _Private_ handler called by Strophe.Connection._onIdle
       *
       *  Sends all queued Requests or polls with empty Request if there are none.
       */
    }, {
      key: "_onIdle",
      value: function _onIdle() {
        var data = this._conn._data;
        // if no requests are in progress, poll
        if (this._conn.authenticated && this._requests.length === 0 && data.length === 0 && !this._conn.disconnecting) {
          Strophe.debug('no requests during idle cycle, sending blank request');
          data.push(null);
        }
        if (this._conn.paused) {
          return;
        }
        if (this._requests.length < 2 && data.length > 0) {
          var body = this._buildBody();
          for (var i = 0; i < data.length; i++) {
            if (data[i] !== null) {
              if (data[i] === 'restart') {
                body.attrs({
                  'to': this._conn.domain,
                  'xml:lang': 'en',
                  'xmpp:restart': 'true',
                  'xmlns:xmpp': Strophe.NS.BOSH
                });
              } else {
                body.cnode(data[i]).up();
              }
            }
          }
          delete this._conn._data;
          this._conn._data = [];
          this._requests.push(new Strophe.Request(body.tree(), this._onRequestStateChange.bind(this, this._conn._dataRecv.bind(this._conn)), body.tree().getAttribute('rid')));
          this._throttledRequestHandler();
        }
        if (this._requests.length > 0) {
          var time_elapsed = this._requests[0].age();
          if (this._requests[0].dead !== null) {
            if (this._requests[0].timeDead() > Math.floor(Strophe.SECONDARY_TIMEOUT * this.wait)) {
              this._throttledRequestHandler();
            }
          }
          if (time_elapsed > Math.floor(Strophe.TIMEOUT * this.wait)) {
            Strophe.warn('Request ' + this._requests[0].id + ' timed out, over ' + Math.floor(Strophe.TIMEOUT * this.wait) + ' seconds since last activity');
            this._throttledRequestHandler();
          }
        }
      }

      /** PrivateFunction: _getRequestStatus
       *
       *  Returns the HTTP status code from a Strophe.Request
       *
       *  Parameters:
       *    (Strophe.Request) req - The Strophe.Request instance.
       *    (Integer) def - The default value that should be returned if no
       *          status value was found.
       */
    }, {
      key: "_onRequestStateChange",
      value:
      /** PrivateFunction: _onRequestStateChange
       *  _Private_ handler for Strophe.Request state changes.
       *
       *  This function is called when the XMLHttpRequest readyState changes.
       *  It contains a lot of error handling logic for the many ways that
       *  requests can fail, and calls the request callback when requests
       *  succeed.
       *
       *  Parameters:
       *    (Function) func - The handler for the request.
       *    (Strophe.Request) req - The request that is changing readyState.
       */
      function _onRequestStateChange(func, req) {
        Strophe.debug('request id ' + req.id + '.' + req.sends + ' state changed to ' + req.xhr.readyState);
        if (req.abort) {
          req.abort = false;
          return;
        }
        if (req.xhr.readyState !== 4) {
          // The request is not yet complete
          return;
        }
        var reqStatus = Bosh._getRequestStatus(req);
        this.lastResponseHeaders = req.xhr.getAllResponseHeaders();
        if (this._conn.disconnecting && reqStatus >= 400) {
          this._hitError(reqStatus);
          this._callProtocolErrorHandlers(req);
          return;
        }
        var reqIs0 = this._requests[0] === req;
        var reqIs1 = this._requests[1] === req;
        var valid_request = reqStatus > 0 && reqStatus < 500;
        var too_many_retries = req.sends > this._conn.maxRetries;
        if (valid_request || too_many_retries) {
          // remove from internal queue
          this._removeRequest(req);
          Strophe.debug('request id ' + req.id + ' should now be removed');
        }
        if (reqStatus === 200) {
          // request succeeded
          // if request 1 finished, or request 0 finished and request
          // 1 is over Strophe.SECONDARY_TIMEOUT seconds old, we need to
          // restart the other - both will be in the first spot, as the
          // completed request has been removed from the queue already
          if (reqIs1 || reqIs0 && this._requests.length > 0 && this._requests[0].age() > Math.floor(Strophe.SECONDARY_TIMEOUT * this.wait)) {
            this._restartRequest(0);
          }
          this._conn.nextValidRid(Number(req.rid) + 1);
          Strophe.debug('request id ' + req.id + '.' + req.sends + ' got 200');
          func(req); // call handler
          this.errors = 0;
        } else if (reqStatus === 0 || reqStatus >= 400 && reqStatus < 600 || reqStatus >= 12000) {
          // request failed
          Strophe.error('request id ' + req.id + '.' + req.sends + ' error ' + reqStatus + ' happened');
          this._hitError(reqStatus);
          this._callProtocolErrorHandlers(req);
          if (reqStatus >= 400 && reqStatus < 500) {
            this._conn._changeConnectStatus(Strophe.Status.DISCONNECTING, null);
            this._conn._doDisconnect();
          }
        } else {
          Strophe.error('request id ' + req.id + '.' + req.sends + ' error ' + reqStatus + ' happened');
        }
        if (!valid_request && !too_many_retries) {
          this._throttledRequestHandler();
        } else if (too_many_retries && !this._conn.connected) {
          this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, 'giving-up');
        }
      }

      /** PrivateFunction: _processRequest
       *  _Private_ function to process a request in the queue.
       *
       *  This function takes requests off the queue and sends them and
       *  restarts dead requests.
       *
       *  Parameters:
       *    (Integer) i - The index of the request in the queue.
       */
    }, {
      key: "_processRequest",
      value: function _processRequest(i) {
        var _this11 = this;
        var req = this._requests[i];
        var reqStatus = Bosh._getRequestStatus(req, -1);

        // make sure we limit the number of retries
        if (req.sends > this._conn.maxRetries) {
          this._conn._onDisconnectTimeout();
          return;
        }
        var time_elapsed = req.age();
        var primary_timeout = !isNaN(time_elapsed) && time_elapsed > Math.floor(Strophe.TIMEOUT * this.wait);
        var secondary_timeout = req.dead !== null && req.timeDead() > Math.floor(Strophe.SECONDARY_TIMEOUT * this.wait);
        var server_error = req.xhr.readyState === 4 && (reqStatus < 1 || reqStatus >= 500);
        if (primary_timeout || secondary_timeout || server_error) {
          if (secondary_timeout) {
            Strophe.error("Request ".concat(this._requests[i].id, " timed out (secondary), restarting"));
          }
          req.abort = true;
          req.xhr.abort();
          // setting to null fails on IE6, so set to empty function
          req.xhr.onreadystatechange = function () {};
          this._requests[i] = new Strophe.Request(req.xmlData, req.origFunc, req.rid, req.sends);
          req = this._requests[i];
        }
        if (req.xhr.readyState === 0) {
          Strophe.debug('request id ' + req.id + '.' + req.sends + ' posting');
          try {
            var content_type = this._conn.options.contentType || 'text/xml; charset=utf-8';
            req.xhr.open('POST', this._conn.service, this._conn.options.sync ? false : true);
            if (typeof req.xhr.setRequestHeader !== 'undefined') {
              // IE9 doesn't have setRequestHeader
              req.xhr.setRequestHeader('Content-Type', content_type);
            }
            if (this._conn.options.withCredentials) {
              req.xhr.withCredentials = true;
            }
          } catch (e2) {
            Strophe.error('XHR open failed: ' + e2.toString());
            if (!this._conn.connected) {
              this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, 'bad-service');
            }
            this._conn.disconnect();
            return;
          }

          // Fires the XHR request -- may be invoked immediately
          // or on a gradually expanding retry window for reconnects
          var sendFunc = function sendFunc() {
            req.date = new Date();
            if (_this11._conn.options.customHeaders) {
              var headers = _this11._conn.options.customHeaders;
              for (var header in headers) {
                if (Object.prototype.hasOwnProperty.call(headers, header)) {
                  req.xhr.setRequestHeader(header, headers[header]);
                }
              }
            }
            req.xhr.send(req.data);
          };

          // Implement progressive backoff for reconnects --
          // First retry (send === 1) should also be instantaneous
          if (req.sends > 1) {
            // Using a cube of the retry number creates a nicely
            // expanding retry window
            var backoff = Math.min(Math.floor(Strophe.TIMEOUT * this.wait), Math.pow(req.sends, 3)) * 1000;
            setTimeout(function () {
              // XXX: setTimeout should be called only with function expressions (23974bc1)
              sendFunc();
            }, backoff);
          } else {
            sendFunc();
          }
          req.sends++;
          if (this._conn.xmlOutput !== Strophe.Connection.prototype.xmlOutput) {
            if (req.xmlData.nodeName === this.strip && req.xmlData.childNodes.length) {
              this._conn.xmlOutput(req.xmlData.childNodes[0]);
            } else {
              this._conn.xmlOutput(req.xmlData);
            }
          }
          if (this._conn.rawOutput !== Strophe.Connection.prototype.rawOutput) {
            this._conn.rawOutput(req.data);
          }
        } else {
          Strophe.debug('_processRequest: ' + (i === 0 ? 'first' : 'second') + ' request has readyState of ' + req.xhr.readyState);
        }
      }

      /** PrivateFunction: _removeRequest
       *  _Private_ function to remove a request from the queue.
       *
       *  Parameters:
       *    (Strophe.Request) req - The request to remove.
       */
    }, {
      key: "_removeRequest",
      value: function _removeRequest(req) {
        Strophe.debug('removing request');
        for (var i = this._requests.length - 1; i >= 0; i--) {
          if (req === this._requests[i]) {
            this._requests.splice(i, 1);
          }
        }
        // IE6 fails on setting to null, so set to empty function
        req.xhr.onreadystatechange = function () {};
        this._throttledRequestHandler();
      }

      /** PrivateFunction: _restartRequest
       *  _Private_ function to restart a request that is presumed dead.
       *
       *  Parameters:
       *    (Integer) i - The index of the request in the queue.
       */
    }, {
      key: "_restartRequest",
      value: function _restartRequest(i) {
        var req = this._requests[i];
        if (req.dead === null) {
          req.dead = new Date();
        }
        this._processRequest(i);
      }

      /** PrivateFunction: _reqToData
       * _Private_ function to get a stanza out of a request.
       *
       * Tries to extract a stanza out of a Request Object.
       * When this fails the current connection will be disconnected.
       *
       *  Parameters:
       *    (Object) req - The Request.
       *
       *  Returns:
       *    The stanza that was passed.
       */
    }, {
      key: "_reqToData",
      value: function _reqToData(req) {
        try {
          return req.getResponse();
        } catch (e) {
          if (e.message !== 'parsererror') {
            throw e;
          }
          this._conn.disconnect('strophe-parsererror');
        }
      }

      /** PrivateFunction: _sendTerminate
       *  _Private_ function to send initial disconnect sequence.
       *
       *  This is the first step in a graceful disconnect.  It sends
       *  the BOSH server a terminate body and includes an unavailable
       *  presence if authentication has completed.
       */
    }, {
      key: "_sendTerminate",
      value: function _sendTerminate(pres) {
        Strophe.debug('_sendTerminate was called');
        var body = this._buildBody().attrs({
          type: 'terminate'
        });
        if (pres) {
          body.cnode(pres.tree());
        }
        var req = new Strophe.Request(body.tree(), this._onRequestStateChange.bind(this, this._conn._dataRecv.bind(this._conn)), body.tree().getAttribute('rid'));
        this._requests.push(req);
        this._throttledRequestHandler();
      }

      /** PrivateFunction: _send
       *  _Private_ part of the Connection.send function for BOSH
       *
       * Just triggers the RequestHandler to send the messages that are in the queue
       */
    }, {
      key: "_send",
      value: function _send() {
        var _this12 = this;
        clearTimeout(this._conn._idleTimeout);
        this._throttledRequestHandler();
        this._conn._idleTimeout = setTimeout(function () {
          return _this12._conn._onIdle();
        }, 100);
      }

      /** PrivateFunction: _sendRestart
       *
       *  Send an xmpp:restart stanza.
       */
    }, {
      key: "_sendRestart",
      value: function _sendRestart() {
        this._throttledRequestHandler();
        clearTimeout(this._conn._idleTimeout);
      }

      /** PrivateFunction: _throttledRequestHandler
       *  _Private_ function to throttle requests to the connection window.
       *
       *  This function makes sure we don't send requests so fast that the
       *  request ids overflow the connection window in the case that one
       *  request died.
       */
    }, {
      key: "_throttledRequestHandler",
      value: function _throttledRequestHandler() {
        if (!this._requests) {
          Strophe.debug('_throttledRequestHandler called with ' + 'undefined requests');
        } else {
          Strophe.debug('_throttledRequestHandler called with ' + this._requests.length + ' requests');
        }
        if (!this._requests || this._requests.length === 0) {
          return;
        }
        if (this._requests.length > 0) {
          this._processRequest(0);
        }
        if (this._requests.length > 1 && Math.abs(this._requests[0].rid - this._requests[1].rid) < this.window) {
          this._processRequest(1);
        }
      }
    }], [{
      key: "_getRequestStatus",
      value: function _getRequestStatus(req, def) {
        var reqStatus;
        if (req.xhr.readyState === 4) {
          try {
            reqStatus = req.xhr.status;
          } catch (e) {
            // ignore errors from undefined status attribute. Works
            // around a browser bug
            Strophe.error("Caught an error while retrieving a request's status, " + 'reqStatus: ' + reqStatus);
          }
        }
        if (typeof reqStatus === 'undefined') {
          reqStatus = typeof def === 'number' ? def : 0;
        }
        return reqStatus;
      }
    }]);
    return Bosh;
  }();

  /** Variable: strip
   *
   *  BOSH-Connections will have all stanzas wrapped in a <body> tag when
   *  passed to <Strophe.Connection.xmlInput> or <Strophe.Connection.xmlOutput>.
   *  To strip this tag, User code can set <Strophe.Bosh.strip> to "body":
   *
   *  > Strophe.Bosh.prototype.strip = "body";
   *
   *  This will enable stripping of the body tag in both
   *  <Strophe.Connection.xmlInput> and <Strophe.Connection.xmlOutput>.
   */
  Strophe.Bosh.prototype.strip = null;

  /*
      This program is distributed under the terms of the MIT license.
      Please see the LICENSE file for details.
       Copyright 2006-2008, OGG, LLC
  */

  /** Class: Strophe.WebSocket
   *  _Private_ helper class that handles WebSocket Connections
   *
   *  The Strophe.WebSocket class is used internally by Strophe.Connection
   *  to encapsulate WebSocket sessions. It is not meant to be used from user's code.
   */

  /** File: websocket.js
   *  A JavaScript library to enable XMPP over Websocket in Strophejs.
   *
   *  This file implements XMPP over WebSockets for Strophejs.
   *  If a Connection is established with a Websocket url (ws://...)
   *  Strophe will use WebSockets.
   *  For more information on XMPP-over-WebSocket see RFC 7395:
   *  http://tools.ietf.org/html/rfc7395
   *
   *  WebSocket support implemented by Andreas Guth (andreas.guth@rwth-aachen.de)
   */
  Strophe.Websocket = /*#__PURE__*/function () {
    /** PrivateConstructor: Strophe.Websocket
     *  Create and initialize a Strophe.WebSocket object.
     *  Currently only sets the connection Object.
     *
     *  Parameters:
     *    (Strophe.Connection) connection - The Strophe.Connection that will use WebSockets.
     *
     *  Returns:
     *    A new Strophe.WebSocket object.
     */
    function Websocket(connection) {
      _classCallCheck(this, Websocket);
      this._conn = connection;
      this.strip = 'wrapper';
      var service = connection.service;
      if (service.indexOf('ws:') !== 0 && service.indexOf('wss:') !== 0) {
        // If the service is not an absolute URL, assume it is a path and put the absolute
        // URL together from options, current URL and the path.
        var new_service = '';
        if (connection.options.protocol === 'ws' && location.protocol !== 'https:') {
          new_service += 'ws';
        } else {
          new_service += 'wss';
        }
        new_service += '://' + location.host;
        if (service.indexOf('/') !== 0) {
          new_service += location.pathname + service;
        } else {
          new_service += service;
        }
        connection.service = new_service;
      }
    }

    /** PrivateFunction: _buildStream
     *  _Private_ helper function to generate the <stream> start tag for WebSockets
     *
     *  Returns:
     *    A Strophe.Builder with a <stream> element.
     */
    _createClass(Websocket, [{
      key: "_buildStream",
      value: function _buildStream() {
        return $build('open', {
          'xmlns': Strophe.NS.FRAMING,
          'to': this._conn.domain,
          'version': '1.0'
        });
      }

      /** PrivateFunction: _checkStreamError
       * _Private_ checks a message for stream:error
       *
       *  Parameters:
       *    (Strophe.Request) bodyWrap - The received stanza.
       *    connectstatus - The ConnectStatus that will be set on error.
       *  Returns:
       *     true if there was a streamerror, false otherwise.
       */
    }, {
      key: "_checkStreamError",
      value: function _checkStreamError(bodyWrap, connectstatus) {
        var errors;
        if (bodyWrap.getElementsByTagNameNS) {
          errors = bodyWrap.getElementsByTagNameNS(Strophe.NS.STREAM, 'error');
        } else {
          errors = bodyWrap.getElementsByTagName('stream:error');
        }
        if (errors.length === 0) {
          return false;
        }
        var error = errors[0];
        var condition = '';
        var text = '';
        var ns = 'urn:ietf:params:xml:ns:xmpp-streams';
        for (var i = 0; i < error.childNodes.length; i++) {
          var e = error.childNodes[i];
          if (e.getAttribute('xmlns') !== ns) {
            break;
          }
          if (e.nodeName === 'text') {
            text = e.textContent;
          } else {
            condition = e.nodeName;
          }
        }
        var errorString = 'WebSocket stream error: ';
        if (condition) {
          errorString += condition;
        } else {
          errorString += 'unknown';
        }
        if (text) {
          errorString += ' - ' + text;
        }
        Strophe.error(errorString);

        // close the connection on stream_error
        this._conn._changeConnectStatus(connectstatus, condition);
        this._conn._doDisconnect();
        return true;
      }

      /** PrivateFunction: _reset
       *  Reset the connection.
       *
       *  This function is called by the reset function of the Strophe Connection.
       *  Is not needed by WebSockets.
       */
      // eslint-disable-next-line class-methods-use-this
    }, {
      key: "_reset",
      value: function _reset() {
        return;
      }

      /** PrivateFunction: _connect
       *  _Private_ function called by Strophe.Connection.connect
       *
       *  Creates a WebSocket for a connection and assigns Callbacks to it.
       *  Does nothing if there already is a WebSocket.
       */
    }, {
      key: "_connect",
      value: function _connect() {
        var _this13 = this;
        // Ensure that there is no open WebSocket from a previous Connection.
        this._closeSocket();
        this.socket = new WebSocket(this._conn.service, 'xmpp');
        this.socket.onopen = function () {
          return _this13._onOpen();
        };
        this.socket.onerror = function (e) {
          return _this13._onError(e);
        };
        this.socket.onclose = function (e) {
          return _this13._onClose(e);
        };
        // Gets replaced with this._onMessage once _onInitialMessage is called
        this.socket.onmessage = function (message) {
          return _this13._onInitialMessage(message);
        };
      }

      /** PrivateFunction: _connect_cb
       *  _Private_ function called by Strophe.Connection._connect_cb
       *
       * checks for stream:error
       *
       *  Parameters:
       *    (Strophe.Request) bodyWrap - The received stanza.
       */
    }, {
      key: "_connect_cb",
      value: function _connect_cb(bodyWrap) {
        var error = this._checkStreamError(bodyWrap, Strophe.Status.CONNFAIL);
        if (error) {
          return Strophe.Status.CONNFAIL;
        }
      }

      /** PrivateFunction: _handleStreamStart
       * _Private_ function that checks the opening <open /> tag for errors.
       *
       * Disconnects if there is an error and returns false, true otherwise.
       *
       *  Parameters:
       *    (Node) message - Stanza containing the <open /> tag.
       */
    }, {
      key: "_handleStreamStart",
      value: function _handleStreamStart(message) {
        var error = false;

        // Check for errors in the <open /> tag
        var ns = message.getAttribute('xmlns');
        if (typeof ns !== 'string') {
          error = 'Missing xmlns in <open />';
        } else if (ns !== Strophe.NS.FRAMING) {
          error = 'Wrong xmlns in <open />: ' + ns;
        }
        var ver = message.getAttribute('version');
        if (typeof ver !== 'string') {
          error = 'Missing version in <open />';
        } else if (ver !== '1.0') {
          error = 'Wrong version in <open />: ' + ver;
        }
        if (error) {
          this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, error);
          this._conn._doDisconnect();
          return false;
        }
        return true;
      }

      /** PrivateFunction: _onInitialMessage
       * _Private_ function that handles the first connection messages.
       *
       * On receiving an opening stream tag this callback replaces itself with the real
       * message handler. On receiving a stream error the connection is terminated.
       */
    }, {
      key: "_onInitialMessage",
      value: function _onInitialMessage(message) {
        if (message.data.indexOf('<open ') === 0 || message.data.indexOf('<?xml') === 0) {
          // Strip the XML Declaration, if there is one
          var data = message.data.replace(/^(<\?.*?\?>\s*)*/, '');
          if (data === '') return;
          var streamStart = new DOMParser().parseFromString(data, 'text/xml').documentElement;
          this._conn.xmlInput(streamStart);
          this._conn.rawInput(message.data);

          //_handleStreamSteart will check for XML errors and disconnect on error
          if (this._handleStreamStart(streamStart)) {
            //_connect_cb will check for stream:error and disconnect on error
            this._connect_cb(streamStart);
          }
        } else if (message.data.indexOf('<close ') === 0) {
          // <close xmlns="urn:ietf:params:xml:ns:xmpp-framing />
          // Parse the raw string to an XML element
          var parsedMessage = new DOMParser().parseFromString(message.data, 'text/xml').documentElement;
          // Report this input to the raw and xml handlers
          this._conn.xmlInput(parsedMessage);
          this._conn.rawInput(message.data);
          var see_uri = parsedMessage.getAttribute('see-other-uri');
          if (see_uri) {
            var service = this._conn.service;
            // Valid scenarios: WSS->WSS, WS->ANY
            var isSecureRedirect = service.indexOf('wss:') >= 0 && see_uri.indexOf('wss:') >= 0 || service.indexOf('ws:') >= 0;
            if (isSecureRedirect) {
              this._conn._changeConnectStatus(Strophe.Status.REDIRECT, 'Received see-other-uri, resetting connection');
              this._conn.reset();
              this._conn.service = see_uri;
              this._connect();
            }
          } else {
            this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, 'Received closing stream');
            this._conn._doDisconnect();
          }
        } else {
          this._replaceMessageHandler();
          var string = this._streamWrap(message.data);
          var elem = new DOMParser().parseFromString(string, 'text/xml').documentElement;
          this._conn._connect_cb(elem, null, message.data);
        }
      }

      /** PrivateFunction: _replaceMessageHandler
       *
       * Called by _onInitialMessage in order to replace itself with the general message handler.
       * This method is overridden by Strophe.WorkerWebsocket, which manages a
       * websocket connection via a service worker and doesn't have direct access
       * to the socket.
       */
    }, {
      key: "_replaceMessageHandler",
      value: function _replaceMessageHandler() {
        var _this14 = this;
        this.socket.onmessage = function (m) {
          return _this14._onMessage(m);
        };
      }

      /** PrivateFunction: _disconnect
       *  _Private_ function called by Strophe.Connection.disconnect
       *
       *  Disconnects and sends a last stanza if one is given
       *
       *  Parameters:
       *    (Request) pres - This stanza will be sent before disconnecting.
       */
    }, {
      key: "_disconnect",
      value: function _disconnect(pres) {
        var _this15 = this;
        if (this.socket && this.socket.readyState !== WebSocket.CLOSED) {
          if (pres) {
            this._conn.send(pres);
          }
          var close = $build('close', {
            'xmlns': Strophe.NS.FRAMING
          });
          this._conn.xmlOutput(close.tree());
          var closeString = Strophe.serialize(close);
          this._conn.rawOutput(closeString);
          try {
            this.socket.send(closeString);
          } catch (e) {
            Strophe.warn("Couldn't send <close /> tag.");
          }
        }
        setTimeout(function () {
          return _this15._conn._doDisconnect();
        }, 0);
      }

      /** PrivateFunction: _doDisconnect
       *  _Private_ function to disconnect.
       *
       *  Just closes the Socket for WebSockets
       */
    }, {
      key: "_doDisconnect",
      value: function _doDisconnect() {
        Strophe.debug('WebSockets _doDisconnect was called');
        this._closeSocket();
      }

      /** PrivateFunction _streamWrap
       *  _Private_ helper function to wrap a stanza in a <stream> tag.
       *  This is used so Strophe can process stanzas from WebSockets like BOSH
       */
      // eslint-disable-next-line class-methods-use-this
    }, {
      key: "_streamWrap",
      value: function _streamWrap(stanza) {
        return '<wrapper>' + stanza + '</wrapper>';
      }

      /** PrivateFunction: _closeSocket
       *  _Private_ function to close the WebSocket.
       *
       *  Closes the socket if it is still open and deletes it
       */
    }, {
      key: "_closeSocket",
      value: function _closeSocket() {
        if (this.socket) {
          try {
            this.socket.onclose = null;
            this.socket.onerror = null;
            this.socket.onmessage = null;
            this.socket.close();
          } catch (e) {
            Strophe.debug(e.message);
          }
        }
        this.socket = null;
      }

      /** PrivateFunction: _emptyQueue
       * _Private_ function to check if the message queue is empty.
       *
       *  Returns:
       *    True, because WebSocket messages are send immediately after queueing.
       */
      // eslint-disable-next-line class-methods-use-this
    }, {
      key: "_emptyQueue",
      value: function _emptyQueue() {
        return true;
      }

      /** PrivateFunction: _onClose
       * _Private_ function to handle websockets closing.
       */
    }, {
      key: "_onClose",
      value: function _onClose(e) {
        if (this._conn.connected && !this._conn.disconnecting) {
          Strophe.error('Websocket closed unexpectedly');
          this._conn._doDisconnect();
        } else if (e && e.code === 1006 && !this._conn.connected && this.socket) {
          // in case the onError callback was not called (Safari 10 does not
          // call onerror when the initial connection fails) we need to
          // dispatch a CONNFAIL status update to be consistent with the
          // behavior on other browsers.
          Strophe.error('Websocket closed unexcectedly');
          this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, 'The WebSocket connection could not be established or was disconnected.');
          this._conn._doDisconnect();
        } else {
          Strophe.debug('Websocket closed');
        }
      }

      /** PrivateFunction: _no_auth_received
       *
       * Called on stream start/restart when no stream:features
       * has been received.
       */
    }, {
      key: "_no_auth_received",
      value: function _no_auth_received(callback) {
        Strophe.error('Server did not offer a supported authentication mechanism');
        this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, Strophe.ErrorCondition.NO_AUTH_MECH);
        if (callback) {
          callback.call(this._conn);
        }
        this._conn._doDisconnect();
      }

      /** PrivateFunction: _onDisconnectTimeout
       *  _Private_ timeout handler for handling non-graceful disconnection.
       *
       *  This does nothing for WebSockets
       */
    }, {
      key: "_onDisconnectTimeout",
      value: function _onDisconnectTimeout() {} // eslint-disable-line class-methods-use-this

      /** PrivateFunction: _abortAllRequests
       *  _Private_ helper function that makes sure all pending requests are aborted.
       */
    }, {
      key: "_abortAllRequests",
      value: function _abortAllRequests() {} // eslint-disable-line class-methods-use-this

      /** PrivateFunction: _onError
       * _Private_ function to handle websockets errors.
       *
       * Parameters:
       * (Object) error - The websocket error.
       */
    }, {
      key: "_onError",
      value: function _onError(error) {
        Strophe.error('Websocket error ' + JSON.stringify(error));
        this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, 'The WebSocket connection could not be established or was disconnected.');
        this._disconnect();
      }

      /** PrivateFunction: _onIdle
       *  _Private_ function called by Strophe.Connection._onIdle
       *
       *  sends all queued stanzas
       */
    }, {
      key: "_onIdle",
      value: function _onIdle() {
        var data = this._conn._data;
        if (data.length > 0 && !this._conn.paused) {
          for (var i = 0; i < data.length; i++) {
            if (data[i] !== null) {
              var stanza = void 0;
              if (data[i] === 'restart') {
                stanza = this._buildStream().tree();
              } else {
                stanza = data[i];
              }
              var rawStanza = Strophe.serialize(stanza);
              this._conn.xmlOutput(stanza);
              this._conn.rawOutput(rawStanza);
              this.socket.send(rawStanza);
            }
          }
          this._conn._data = [];
        }
      }

      /** PrivateFunction: _onMessage
       * _Private_ function to handle websockets messages.
       *
       * This function parses each of the messages as if they are full documents.
       * [TODO : We may actually want to use a SAX Push parser].
       *
       * Since all XMPP traffic starts with
       *  <stream:stream version='1.0'
       *                 xml:lang='en'
       *                 xmlns='jabber:client'
       *                 xmlns:stream='http://etherx.jabber.org/streams'
       *                 id='3697395463'
       *                 from='SERVER'>
       *
       * The first stanza will always fail to be parsed.
       *
       * Additionally, the seconds stanza will always be <stream:features> with
       * the stream NS defined in the previous stanza, so we need to 'force'
       * the inclusion of the NS in this stanza.
       *
       * Parameters:
       * (string) message - The websocket message.
       */
    }, {
      key: "_onMessage",
      value: function _onMessage(message) {
        var elem;
        // check for closing stream
        var close = '<close xmlns="urn:ietf:params:xml:ns:xmpp-framing" />';
        if (message.data === close) {
          this._conn.rawInput(close);
          this._conn.xmlInput(message);
          if (!this._conn.disconnecting) {
            this._conn._doDisconnect();
          }
          return;
        } else if (message.data.search('<open ') === 0) {
          // This handles stream restarts
          elem = new DOMParser().parseFromString(message.data, 'text/xml').documentElement;
          if (!this._handleStreamStart(elem)) {
            return;
          }
        } else {
          var data = this._streamWrap(message.data);
          elem = new DOMParser().parseFromString(data, 'text/xml').documentElement;
        }
        if (this._checkStreamError(elem, Strophe.Status.ERROR)) {
          return;
        }

        //handle unavailable presence stanza before disconnecting
        if (this._conn.disconnecting && elem.firstChild.nodeName === 'presence' && elem.firstChild.getAttribute('type') === 'unavailable') {
          this._conn.xmlInput(elem);
          this._conn.rawInput(Strophe.serialize(elem));
          // if we are already disconnecting we will ignore the unavailable stanza and
          // wait for the </stream:stream> tag before we close the connection
          return;
        }
        this._conn._dataRecv(elem, message.data);
      }

      /** PrivateFunction: _onOpen
       * _Private_ function to handle websockets connection setup.
       *
       * The opening stream tag is sent here.
       */
    }, {
      key: "_onOpen",
      value: function _onOpen() {
        Strophe.debug('Websocket open');
        var start = this._buildStream();
        this._conn.xmlOutput(start.tree());
        var startString = Strophe.serialize(start);
        this._conn.rawOutput(startString);
        this.socket.send(startString);
      }

      /** PrivateFunction: _reqToData
       * _Private_ function to get a stanza out of a request.
       *
       * WebSockets don't use requests, so the passed argument is just returned.
       *
       *  Parameters:
       *    (Object) stanza - The stanza.
       *
       *  Returns:
       *    The stanza that was passed.
       */
      // eslint-disable-next-line class-methods-use-this
    }, {
      key: "_reqToData",
      value: function _reqToData(stanza) {
        return stanza;
      }

      /** PrivateFunction: _send
       *  _Private_ part of the Connection.send function for WebSocket
       *
       * Just flushes the messages that are in the queue
       */
    }, {
      key: "_send",
      value: function _send() {
        this._conn.flush();
      }

      /** PrivateFunction: _sendRestart
       *
       *  Send an xmpp:restart stanza.
       */
    }, {
      key: "_sendRestart",
      value: function _sendRestart() {
        clearTimeout(this._conn._idleTimeout);
        this._conn._onIdle.bind(this._conn)();
      }
    }]);
    return Websocket;
  }();

  /*
      This program is distributed under the terms of the MIT license.
      Please see the LICENSE file for details.
       Copyright 2020, JC Brand
  */
  var lmap = {};
  lmap['debug'] = Strophe.LogLevel.DEBUG;
  lmap['info'] = Strophe.LogLevel.INFO;
  lmap['warn'] = Strophe.LogLevel.WARN;
  lmap['error'] = Strophe.LogLevel.ERROR;
  lmap['fatal'] = Strophe.LogLevel.FATAL;

  /** Class: Strophe.WorkerWebsocket
   *  _Private_ helper class that handles a websocket connection inside a shared worker.
   */
  Strophe.WorkerWebsocket = /*#__PURE__*/function (_Strophe$Websocket) {
    _inherits(WorkerWebsocket, _Strophe$Websocket);
    var _super10 = _createSuper(WorkerWebsocket);
    /** PrivateConstructor: Strophe.WorkerWebsocket
     *  Create and initialize a Strophe.WorkerWebsocket object.
     *
     *  Parameters:
     *    (Strophe.Connection) connection - The Strophe.Connection
     *
     *  Returns:
     *    A new Strophe.WorkerWebsocket object.
     */
    function WorkerWebsocket(connection) {
      var _this16;
      _classCallCheck(this, WorkerWebsocket);
      _this16 = _super10.call(this, connection);
      _this16._conn = connection;
      _this16.worker = new SharedWorker(_this16._conn.options.worker, 'Strophe XMPP Connection');
      _this16.worker.onerror = function (e) {
        var _console;
        (_console = console) === null || _console === void 0 ? void 0 : _console.error(e);
        Strophe.log(Strophe.LogLevel.ERROR, "Shared Worker Error: ".concat(e));
      };
      return _this16;
    }
    _createClass(WorkerWebsocket, [{
      key: "socket",
      get: function get() {
        var _this17 = this;
        return {
          'send': function send(str) {
            return _this17.worker.port.postMessage(['send', str]);
          }
        };
      }
    }, {
      key: "_connect",
      value: function _connect() {
        var _this18 = this;
        this._messageHandler = function (m) {
          return _this18._onInitialMessage(m);
        };
        this.worker.port.start();
        this.worker.port.onmessage = function (ev) {
          return _this18._onWorkerMessage(ev);
        };
        this.worker.port.postMessage(['_connect', this._conn.service, this._conn.jid]);
      }
    }, {
      key: "_attach",
      value: function _attach(callback) {
        var _this19 = this;
        this._messageHandler = function (m) {
          return _this19._onMessage(m);
        };
        this._conn.connect_callback = callback;
        this.worker.port.start();
        this.worker.port.onmessage = function (ev) {
          return _this19._onWorkerMessage(ev);
        };
        this.worker.port.postMessage(['_attach', this._conn.service]);
      }
    }, {
      key: "_attachCallback",
      value: function _attachCallback(status, jid) {
        if (status === Strophe.Status.ATTACHED) {
          this._conn.jid = jid;
          this._conn.authenticated = true;
          this._conn.connected = true;
          this._conn.restored = true;
          this._conn._changeConnectStatus(Strophe.Status.ATTACHED);
        } else if (status === Strophe.Status.ATTACHFAIL) {
          this._conn.authenticated = false;
          this._conn.connected = false;
          this._conn.restored = false;
          this._conn._changeConnectStatus(Strophe.Status.ATTACHFAIL);
        }
      }
    }, {
      key: "_disconnect",
      value: function _disconnect(readyState, pres) {
        pres && this._conn.send(pres);
        var close = $build('close', {
          'xmlns': Strophe.NS.FRAMING
        });
        this._conn.xmlOutput(close.tree());
        var closeString = Strophe.serialize(close);
        this._conn.rawOutput(closeString);
        this.worker.port.postMessage(['send', closeString]);
        this._conn._doDisconnect();
      }
    }, {
      key: "_onClose",
      value: function _onClose(e) {
        if (this._conn.connected && !this._conn.disconnecting) {
          Strophe.error('Websocket closed unexpectedly');
          this._conn._doDisconnect();
        } else if (e && e.code === 1006 && !this._conn.connected) {
          // in case the onError callback was not called (Safari 10 does not
          // call onerror when the initial connection fails) we need to
          // dispatch a CONNFAIL status update to be consistent with the
          // behavior on other browsers.
          Strophe.error('Websocket closed unexcectedly');
          this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, 'The WebSocket connection could not be established or was disconnected.');
          this._conn._doDisconnect();
        } else {
          Strophe.debug('Websocket closed');
        }
      }
    }, {
      key: "_closeSocket",
      value: function _closeSocket() {
        this.worker.port.postMessage(['_closeSocket']);
      }

      /** PrivateFunction: _replaceMessageHandler
       *
       * Called by _onInitialMessage in order to replace itself with the general message handler.
       * This method is overridden by Strophe.WorkerWebsocket, which manages a
       * websocket connection via a service worker and doesn't have direct access
       * to the socket.
       */
    }, {
      key: "_replaceMessageHandler",
      value: function _replaceMessageHandler() {
        var _this20 = this;
        this._messageHandler = function (m) {
          return _this20._onMessage(m);
        };
      }

      /** PrivateFunction: _onWorkerMessage
       * _Private_ function that handles messages received from the service worker
       */
    }, {
      key: "_onWorkerMessage",
      value: function _onWorkerMessage(ev) {
        var data = ev.data;
        var method_name = data[0];
        if (method_name === '_onMessage') {
          this._messageHandler(data[1]);
        } else if (method_name in this) {
          try {
            this[method_name].apply(this, ev.data.slice(1));
          } catch (e) {
            Strophe.log(Strophe.LogLevel.ERROR, e);
          }
        } else if (method_name === 'log') {
          var level = data[1];
          var msg = data[2];
          Strophe.log(lmap[level], msg);
        } else {
          Strophe.log(Strophe.LogLevel.ERROR, "Found unhandled service worker message: ".concat(data));
        }
      }
    }]);
    return WorkerWebsocket;
  }(Strophe.Websocket);
  global$1.$build = core.$build;
  global$1.$iq = core.$iq;
  global$1.$msg = core.$msg;
  global$1.$pres = core.$pres;
  global$1.Strophe = core.Strophe;
  global$1.Strophe.shims = shims;
  exports.$build = $build;
  exports.$iq = $iq;
  exports.$msg = $msg;
  exports.$pres = $pres;
  exports.Strophe = Strophe;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});
},{"ws":"../node_modules/strophe.js/node_modules/ws/browser.js","@xmldom/xmldom":"../node_modules/@xmldom/xmldom/lib/index.js"}],"strophe.muc.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(require('strophe.js')) : typeof define === 'function' && define.amd ? define(['strophe.js'], factory) : factory(global.window);
})(this, function (strophe_js) {
  'use strict';

  /*
   *Plugin to implement the MUC extension.
     http://xmpp.org/extensions/xep-0045.html
   *Previous Author:
      Nathan Zorn <nathan.zorn@gmail.com>
   *Complete CoffeeScript rewrite:
      Andreas Guth <guth@dbis.rwth-aachen.de>
   */
  var Occupant;
  var RoomConfig;
  var XmppRoom;
  var hasProp = {}.hasOwnProperty;
  var bind = function bind(fn, me) {
    return function () {
      return fn.apply(me, arguments);
    };
  };
  strophe_js.Strophe.addConnectionPlugin('muc', {
    _connection: null,
    rooms: {},
    roomNames: [],
    /*Function
    Initialize the MUC plugin. Sets the correct connection object and
    extends the namesace.
     */
    init: function init(conn) {
      this._connection = conn;
      this._muc_handler = null;
      strophe_js.Strophe.addNamespace('MUC_OWNER', strophe_js.Strophe.NS.MUC + "#owner");
      strophe_js.Strophe.addNamespace('MUC_ADMIN', strophe_js.Strophe.NS.MUC + "#admin");
      strophe_js.Strophe.addNamespace('MUC_USER', strophe_js.Strophe.NS.MUC + "#user");
      strophe_js.Strophe.addNamespace('MUC_ROOMCONF', strophe_js.Strophe.NS.MUC + "#roomconfig");
      return strophe_js.Strophe.addNamespace('MUC_REGISTER', "jabber:iq:register");
    },
    /*Function
    Join a multi-user chat room
    Parameters:
    (String) room - The multi-user chat room to join.
    (String) nick - The nickname to use in the chat room. Optional
    (Function) msg_handler_cb - The function call to handle messages from the
    specified chat room.
    (Function) pres_handler_cb - The function call back to handle presence
    in the chat room.
    (Function) roster_cb - The function call to handle roster info in the chat room
    (String) password - The optional password to use. (password protected
    rooms only)
    (Object) history_attrs - Optional attributes for retrieving history
    (XML DOM Element) extended_presence - Optional XML for extending presence
     */
    join: function join(room, nick, msg_handler_cb, pres_handler_cb, roster_cb, password, history_attrs, extended_presence) {
      var msg, room_nick;
      room_nick = this.test_append_nick(room, nick);
      msg = strophe_js.$pres({
        from: this._connection.jid,
        to: room_nick
      }).c("x", {
        xmlns: strophe_js.Strophe.NS.MUC
      });
      if (history_attrs != null) {
        msg = msg.c("history", history_attrs).up();
      }
      if (password != null) {
        msg.cnode(strophe_js.Strophe.xmlElement("password", [], password));
      }
      if (extended_presence != null) {
        msg.up().cnode(extended_presence);
      }
      if (this._muc_handler == null) {
        this._muc_handler = this._connection.addHandler(function (_this) {
          return function (stanza) {
            var from, handler, handlers, i, id, len, roomname, x, xmlns, xquery;
            from = stanza.getAttribute('from');
            if (!from) {
              return true;
            }
            roomname = from.split("/")[0];
            if (!_this.rooms[roomname]) {
              return true;
            }
            room = _this.rooms[roomname];
            handlers = {};
            if (stanza.nodeName === "message") {
              handlers = room._message_handlers;
            } else if (stanza.nodeName === "presence") {
              xquery = stanza.getElementsByTagName("x");
              if (xquery.length > 0) {
                for (i = 0, len = xquery.length; i < len; i++) {
                  x = xquery[i];
                  xmlns = x.getAttribute("xmlns");
                  if (xmlns && xmlns.match(strophe_js.Strophe.NS.MUC)) {
                    handlers = room._presence_handlers;
                    break;
                  }
                }
              }
            }
            for (id in handlers) {
              handler = handlers[id];
              if (!handler(stanza, room)) {
                delete handlers[id];
              }
            }
            return true;
          };
        }(this));
      }
      if (!this.rooms.hasOwnProperty(room)) {
        this.rooms[room] = new XmppRoom(this, room, nick, password);
        if (pres_handler_cb) {
          this.rooms[room].addHandler('presence', pres_handler_cb);
        }
        if (msg_handler_cb) {
          this.rooms[room].addHandler('message', msg_handler_cb);
        }
        if (roster_cb) {
          this.rooms[room].addHandler('roster', roster_cb);
        }
        this.roomNames.push(room);
      }
      return this._connection.send(msg);
    },
    /*Function
    Leave a multi-user chat room
    Parameters:
    (String) room - The multi-user chat room to leave.
    (String) nick - The nick name used in the room.
    (Function) handler_cb - Optional function to handle the successful leave.
    (String) exit_msg - optional exit message.
    Returns:
    iqid - The unique id for the room leave.
     */
    leave: function leave(room, nick, handler_cb, exit_msg) {
      var id, presence, presenceid, room_nick;
      id = this.roomNames.indexOf(room);
      delete this.rooms[room];
      if (id >= 0) {
        this.roomNames.splice(id, 1);
        if (this.roomNames.length === 0) {
          this._connection.deleteHandler(this._muc_handler);
          this._muc_handler = null;
        }
      }
      room_nick = this.test_append_nick(room, nick);
      presenceid = this._connection.getUniqueId();
      presence = strophe_js.$pres({
        type: "unavailable",
        id: presenceid,
        from: this._connection.jid,
        to: room_nick
      });
      if (exit_msg != null) {
        presence.c("status", exit_msg);
      }
      if (handler_cb != null) {
        this._connection.addHandler(handler_cb, null, "presence", null, presenceid);
      }
      this._connection.send(presence);
      return presenceid;
    },
    /*Function
    Parameters:
    (String) room - The multi-user chat room name.
    (String) nick - The nick name used in the chat room.
    (String) message - The plaintext message to send to the room.
    (String) html_message - The message to send to the room with html markup.
    (String) type - "groupchat" for group chat messages o
                    "chat" for private chat messages
    Returns:
    msgiq - the unique id used to send the message
     */
    message: function message(room, nick, _message, html_message, type, msgid) {
      var msg, parent, room_nick;
      room_nick = this.test_append_nick(room, nick);
      type = type || (nick != null ? "chat" : "groupchat");
      msgid = msgid || this._connection.getUniqueId();
      msg = strophe_js.$msg({
        to: room_nick,
        from: this._connection.jid,
        type: type,
        id: msgid
      }).c("body").t(_message);
      msg.up();
      if (html_message != null) {
        msg.c("html", {
          xmlns: strophe_js.Strophe.NS.XHTML_IM
        }).c("body", {
          xmlns: strophe_js.Strophe.NS.XHTML
        }).h(html_message);
        if (msg.node.childNodes.length === 0) {
          parent = msg.node.parentNode;
          msg.up().up();
          msg.node.removeChild(parent);
        } else {
          msg.up().up();
        }
      }
      msg.c("x", {
        xmlns: "jabber:x:event"
      }).c("composing");
      this._connection.send(msg);
      return msgid;
    },
    /*Function
    Convenience Function to send a Message to all Occupants
    Parameters:
    (String) room - The multi-user chat room name.
    (String) message - The plaintext message to send to the room.
    (String) html_message - The message to send to the room with html markup.
    (String) msgid - Optional unique ID which will be set as the 'id' attribute of the stanza
    Returns:
    msgiq - the unique id used to send the message
     */
    groupchat: function groupchat(room, message, html_message, msgid) {
      return this.message(room, null, message, html_message, void 0, msgid);
    },
    /*Function
    Send a mediated invitation.
    Parameters:
    (String) room - The multi-user chat room name.
    (String) receiver - The invitation's receiver.
    (String) reason - Optional reason for joining the room.
    Returns:
    msgiq - the unique id used to send the invitation
     */
    invite: function invite(room, receiver, reason) {
      var invitation, msgid;
      msgid = this._connection.getUniqueId();
      invitation = strophe_js.$msg({
        from: this._connection.jid,
        to: room,
        id: msgid
      }).c('x', {
        xmlns: strophe_js.Strophe.NS.MUC_USER
      }).c('invite', {
        to: receiver
      });
      if (reason != null) {
        invitation.c('reason', reason);
      }
      this._connection.send(invitation);
      return msgid;
    },
    /*Function
    Send a mediated multiple invitation.
    Parameters:
    (String) room - The multi-user chat room name.
    (Array) receivers - The invitation's receivers.
    (String) reason - Optional reason for joining the room.
    Returns:
    msgiq - the unique id used to send the invitation
     */
    multipleInvites: function multipleInvites(room, receivers, reason) {
      var i, invitation, len, msgid, receiver;
      msgid = this._connection.getUniqueId();
      invitation = strophe_js.$msg({
        from: this._connection.jid,
        to: room,
        id: msgid
      }).c('x', {
        xmlns: strophe_js.Strophe.NS.MUC_USER
      });
      for (i = 0, len = receivers.length; i < len; i++) {
        receiver = receivers[i];
        invitation.c('invite', {
          to: receiver
        });
        if (reason != null) {
          invitation.c('reason', reason);
          invitation.up();
        }
        invitation.up();
      }
      this._connection.send(invitation);
      return msgid;
    },
    /*Function
    Send a direct invitation.
    Parameters:
    (String) room - The multi-user chat room name.
    (String) receiver - The invitation's receiver.
    (String) reason - Optional reason for joining the room.
    (String) password - Optional password for the room.
    Returns:
    msgiq - the unique id used to send the invitation
     */
    directInvite: function directInvite(room, receiver, reason, password) {
      var attrs, invitation, msgid;
      msgid = this._connection.getUniqueId();
      attrs = {
        xmlns: 'jabber:x:conference',
        jid: room
      };
      if (reason != null) {
        attrs.reason = reason;
      }
      if (password != null) {
        attrs.password = password;
      }
      invitation = strophe_js.$msg({
        from: this._connection.jid,
        to: receiver,
        id: msgid
      }).c('x', attrs);
      this._connection.send(invitation);
      return msgid;
    },
    /*Function
    Queries a room for a list of occupants
    (String) room - The multi-user chat room name.
    (Function) success_cb - Optional function to handle the info.
    (Function) error_cb - Optional function to handle an error.
    Returns:
    id - the unique id used to send the info request
     */
    queryOccupants: function queryOccupants(room, success_cb, error_cb) {
      var attrs, info;
      attrs = {
        xmlns: strophe_js.Strophe.NS.DISCO_ITEMS
      };
      info = strophe_js.$iq({
        from: this._connection.jid,
        to: room,
        type: 'get'
      }).c('query', attrs);
      return this._connection.sendIQ(info, success_cb, error_cb);
    },
    /*Function
    Start a room configuration.
    Parameters:
    (String) room - The multi-user chat room name.
    (Function) handler_cb - Optional function to handle the config form.
    Returns:
    id - the unique id used to send the configuration request
     */
    configure: function configure(room, handler_cb, error_cb) {
      var config, stanza;
      config = strophe_js.$iq({
        to: room,
        type: "get"
      }).c("query", {
        xmlns: strophe_js.Strophe.NS.MUC_OWNER
      });
      stanza = config.tree();
      return this._connection.sendIQ(stanza, handler_cb, error_cb);
    },
    /*Function
    Cancel the room configuration
    Parameters:
    (String) room - The multi-user chat room name.
    Returns:
    id - the unique id used to cancel the configuration.
     */
    cancelConfigure: function cancelConfigure(room) {
      var config, stanza;
      config = strophe_js.$iq({
        to: room,
        type: "set"
      }).c("query", {
        xmlns: strophe_js.Strophe.NS.MUC_OWNER
      }).c("x", {
        xmlns: "jabber:x:data",
        type: "cancel"
      });
      stanza = config.tree();
      return this._connection.sendIQ(stanza);
    },
    /*Function
    Save a room configuration.
    Parameters:
    (String) room - The multi-user chat room name.
    (Array) config- Form Object or an array of form elements used to configure the room.
    Returns:
    id - the unique id used to save the configuration.
     */
    saveConfiguration: function saveConfiguration(room, config, success_cb, error_cb) {
      var conf, i, iq, len, stanza;
      iq = strophe_js.$iq({
        to: room,
        type: "set"
      }).c("query", {
        xmlns: strophe_js.Strophe.NS.MUC_OWNER
      });
      if (typeof strophe_js.Strophe.x !== "undefined" && typeof strophe_js.Strophe.x.Form !== "undefined" && config instanceof strophe_js.Strophe.x.Form) {
        config.type = "submit";
        iq.cnode(config.toXML());
      } else {
        iq.c("x", {
          xmlns: "jabber:x:data",
          type: "submit"
        });
        for (i = 0, len = config.length; i < len; i++) {
          conf = config[i];
          iq.cnode(conf).up();
        }
      }
      stanza = iq.tree();
      return this._connection.sendIQ(stanza, success_cb, error_cb);
    },
    /*Function
    Parameters:
    (String) room - The multi-user chat room name.
    Returns:
    id - the unique id used to create the chat room.
     */
    createInstantRoom: function createInstantRoom(room, success_cb, error_cb) {
      var roomiq;
      roomiq = strophe_js.$iq({
        to: room,
        type: "set"
      }).c("query", {
        xmlns: strophe_js.Strophe.NS.MUC_OWNER
      }).c("x", {
        xmlns: "jabber:x:data",
        type: "submit"
      });
      return this._connection.sendIQ(roomiq.tree(), success_cb, error_cb);
    },
    /*Function
    Parameters:
    (String) room - The multi-user chat room name.
    (Object) config - the configuration. ex: {"muc#roomconfig_publicroom": "0", "muc#roomconfig_persistentroom": "1"}
    Returns:
    id - the unique id used to create the chat room.
     */
    createConfiguredRoom: function createConfiguredRoom(room, config, success_cb, error_cb) {
      var k, roomiq, v;
      roomiq = strophe_js.$iq({
        to: room,
        type: "set"
      }).c("query", {
        xmlns: strophe_js.Strophe.NS.MUC_OWNER
      }).c("x", {
        xmlns: "jabber:x:data",
        type: "submit"
      });
      roomiq.c('field', {
        'var': 'FORM_TYPE'
      }).c('value').t('http://jabber.org/protocol/muc#roomconfig').up().up();
      for (k in config) {
        if (!hasProp.call(config, k)) continue;
        v = config[k];
        roomiq.c('field', {
          'var': k
        }).c('value').t(v).up().up();
      }
      return this._connection.sendIQ(roomiq.tree(), success_cb, error_cb);
    },
    /*Function
    Set the topic of the chat room.
    Parameters:
    (String) room - The multi-user chat room name.
    (String) topic - Topic message.
     */
    setTopic: function setTopic(room, topic) {
      var msg;
      msg = strophe_js.$msg({
        to: room,
        from: this._connection.jid,
        type: "groupchat"
      }).c("subject", {
        xmlns: "jabber:client"
      }).t(topic);
      return this._connection.send(msg.tree());
    },
    /*Function
    Internal Function that Changes the role or affiliation of a member
    of a MUC room. This function is used by modifyRole and modifyAffiliation.
    The modification can only be done by a room moderator. An error will be
    returned if the user doesn't have permission.
    Parameters:
    (String) room - The multi-user chat room name.
    (Object) item - Object with nick and role or jid and affiliation attribute
    (String) reason - Optional reason for the change.
    (Function) handler_cb - Optional callback for success
    (Function) error_cb - Optional callback for error
    Returns:
    iq - the id of the mode change request.
     */
    _modifyPrivilege: function _modifyPrivilege(room, item, reason, handler_cb, error_cb) {
      var iq;
      iq = strophe_js.$iq({
        to: room,
        type: "set"
      }).c("query", {
        xmlns: strophe_js.Strophe.NS.MUC_ADMIN
      }).cnode(item.node);
      if (reason != null) {
        iq.c("reason", reason);
      }
      return this._connection.sendIQ(iq.tree(), handler_cb, error_cb);
    },
    /*Function
    Changes the role of a member of a MUC room.
    The modification can only be done by a room moderator. An error will be
    returned if the user doesn't have permission.
    Parameters:
    (String) room - The multi-user chat room name.
    (String) nick - The nick name of the user to modify.
    (String) role - The new role of the user.
    (String) affiliation - The new affiliation of the user.
    (String) reason - Optional reason for the change.
    (Function) handler_cb - Optional callback for success
    (Function) error_cb - Optional callback for error
    Returns:
    iq - the id of the mode change request.
     */
    modifyRole: function modifyRole(room, nick, role, reason, handler_cb, error_cb) {
      var item;
      item = strophe_js.$build("item", {
        nick: nick,
        role: role
      });
      return this._modifyPrivilege(room, item, reason, handler_cb, error_cb);
    },
    kick: function kick(room, nick, reason, handler_cb, error_cb) {
      return this.modifyRole(room, nick, 'none', reason, handler_cb, error_cb);
    },
    voice: function voice(room, nick, reason, handler_cb, error_cb) {
      return this.modifyRole(room, nick, 'participant', reason, handler_cb, error_cb);
    },
    mute: function mute(room, nick, reason, handler_cb, error_cb) {
      return this.modifyRole(room, nick, 'visitor', reason, handler_cb, error_cb);
    },
    op: function op(room, nick, reason, handler_cb, error_cb) {
      return this.modifyRole(room, nick, 'moderator', reason, handler_cb, error_cb);
    },
    deop: function deop(room, nick, reason, handler_cb, error_cb) {
      return this.modifyRole(room, nick, 'participant', reason, handler_cb, error_cb);
    },
    /*Function
    Changes the affiliation of a member of a MUC room.
    The modification can only be done by a room moderator. An error will be
    returned if the user doesn't have permission.
    Parameters:
    (String) room - The multi-user chat room name.
    (String) jid  - The jid of the user to modify.
    (String) affiliation - The new affiliation of the user.
    (String) reason - Optional reason for the change.
    (Function) handler_cb - Optional callback for success
    (Function) error_cb - Optional callback for error
    Returns:
    iq - the id of the mode change request.
     */
    modifyAffiliation: function modifyAffiliation(room, jid, affiliation, reason, handler_cb, error_cb) {
      var item;
      item = strophe_js.$build("item", {
        jid: jid,
        affiliation: affiliation
      });
      return this._modifyPrivilege(room, item, reason, handler_cb, error_cb);
    },
    ban: function ban(room, jid, reason, handler_cb, error_cb) {
      return this.modifyAffiliation(room, jid, 'outcast', reason, handler_cb, error_cb);
    },
    member: function member(room, jid, reason, handler_cb, error_cb) {
      return this.modifyAffiliation(room, jid, 'member', reason, handler_cb, error_cb);
    },
    revoke: function revoke(room, jid, reason, handler_cb, error_cb) {
      return this.modifyAffiliation(room, jid, 'none', reason, handler_cb, error_cb);
    },
    owner: function owner(room, jid, reason, handler_cb, error_cb) {
      return this.modifyAffiliation(room, jid, 'owner', reason, handler_cb, error_cb);
    },
    admin: function admin(room, jid, reason, handler_cb, error_cb) {
      return this.modifyAffiliation(room, jid, 'admin', reason, handler_cb, error_cb);
    },
    /*Function
    Change the current users nick name.
    Parameters:
    (String) room - The multi-user chat room name.
    (String) user - The new nick name.
     */
    changeNick: function changeNick(room, user) {
      var presence, room_nick;
      room_nick = this.test_append_nick(room, user);
      presence = strophe_js.$pres({
        from: this._connection.jid,
        to: room_nick,
        id: this._connection.getUniqueId()
      });
      return this._connection.send(presence.tree());
    },
    /*Function
    Change the current users status.
    Parameters:
    (String) room - The multi-user chat room name.
    (String) user - The current nick.
    (String) show - The new show-text.
    (String) status - The new status-text.
     */
    setStatus: function setStatus(room, user, show, status) {
      var presence, room_nick;
      room_nick = this.test_append_nick(room, user);
      presence = strophe_js.$pres({
        from: this._connection.jid,
        to: room_nick
      });
      if (show != null) {
        presence.c('show', show).up();
      }
      if (status != null) {
        presence.c('status', status);
      }
      return this._connection.send(presence.tree());
    },
    /*Function
    Registering with a room.
    @see http://xmpp.org/extensions/xep-0045.html#register
    Parameters:
    (String) room - The multi-user chat room name.
    (Function) handle_cb - Function to call for room list return.
    (Function) error_cb - Function to call on error.
     */
    registrationRequest: function registrationRequest(room, handle_cb, error_cb) {
      var iq;
      iq = strophe_js.$iq({
        to: room,
        from: this._connection.jid,
        type: "get"
      }).c("query", {
        xmlns: strophe_js.Strophe.NS.MUC_REGISTER
      });
      return this._connection.sendIQ(iq, function (stanza) {
        var $field, $fields, field, fields, i, len, length;
        $fields = stanza.getElementsByTagName('field');
        length = $fields.length;
        fields = {
          required: [],
          optional: []
        };
        for (i = 0, len = $fields.length; i < len; i++) {
          $field = $fields[i];
          field = {
            "var": $field.getAttribute('var'),
            label: $field.getAttribute('label'),
            type: $field.getAttribute('type')
          };
          if ($field.getElementsByTagName('required').length > 0) {
            fields.required.push(field);
          } else {
            fields.optional.push(field);
          }
        }
        return handle_cb(fields);
      }, error_cb);
    },
    /*Function
    Submits registration form.
    Parameters:
    (String) room - The multi-user chat room name.
    (Function) handle_cb - Function to call for room list return.
    (Function) error_cb - Function to call on error.
     */
    submitRegistrationForm: function submitRegistrationForm(room, fields, handle_cb, error_cb) {
      var iq, key, val;
      iq = strophe_js.$iq({
        to: room,
        type: "set"
      }).c("query", {
        xmlns: strophe_js.Strophe.NS.MUC_REGISTER
      });
      iq.c("x", {
        xmlns: "jabber:x:data",
        type: "submit"
      });
      iq.c('field', {
        'var': 'FORM_TYPE'
      }).c('value').t('http://jabber.org/protocol/muc#register').up().up();
      for (key in fields) {
        val = fields[key];
        iq.c('field', {
          'var': key
        }).c('value').t(val).up().up();
      }
      return this._connection.sendIQ(iq, handle_cb, error_cb);
    },
    /*Function
    List all chat room available on a server.
    Parameters:
    (String) server - name of chat server.
    (String) handle_cb - Function to call for room list return.
    (String) error_cb - Function to call on error.
     */
    listRooms: function listRooms(server, handle_cb, error_cb) {
      var iq;
      iq = strophe_js.$iq({
        to: server,
        from: this._connection.jid,
        type: "get"
      }).c("query", {
        xmlns: strophe_js.Strophe.NS.DISCO_ITEMS
      });
      return this._connection.sendIQ(iq, handle_cb, error_cb);
    },
    test_append_nick: function test_append_nick(room, nick) {
      var domain, node;
      node = strophe_js.Strophe.escapeNode(strophe_js.Strophe.getNodeFromJid(room));
      domain = strophe_js.Strophe.getDomainFromJid(room);
      return node + "@" + domain + (nick != null ? "/" + nick : "");
    }
  });
  XmppRoom = function () {
    function XmppRoom(client, name, nick1, password1) {
      this.client = client;
      this.name = name;
      this.nick = nick1;
      this.password = password1;
      this._roomRosterHandler = bind(this._roomRosterHandler, this);
      this._addOccupant = bind(this._addOccupant, this);
      this.roster = {};
      this._message_handlers = {};
      this._presence_handlers = {};
      this._roster_handlers = {};
      this._handler_ids = 0;
      if (this.client.muc) {
        this.client = this.client.muc;
      }
      this.name = strophe_js.Strophe.getBareJidFromJid(this.name);
      this.addHandler('presence', this._roomRosterHandler);
    }
    XmppRoom.prototype.join = function (msg_handler_cb, pres_handler_cb, roster_cb) {
      return this.client.join(this.name, this.nick, msg_handler_cb, pres_handler_cb, roster_cb, this.password);
    };
    XmppRoom.prototype.leave = function (handler_cb, message) {
      this.client.leave(this.name, this.nick, handler_cb, message);
      return delete this.client.rooms[this.name];
    };
    XmppRoom.prototype.message = function (nick, message, html_message, type) {
      return this.client.message(this.name, nick, message, html_message, type);
    };
    XmppRoom.prototype.groupchat = function (message, html_message) {
      return this.client.groupchat(this.name, message, html_message);
    };
    XmppRoom.prototype.invite = function (receiver, reason) {
      return this.client.invite(this.name, receiver, reason);
    };
    XmppRoom.prototype.multipleInvites = function (receivers, reason) {
      return this.client.invite(this.name, receivers, reason);
    };
    XmppRoom.prototype.directInvite = function (receiver, reason) {
      return this.client.directInvite(this.name, receiver, reason, this.password);
    };
    XmppRoom.prototype.configure = function (handler_cb) {
      return this.client.configure(this.name, handler_cb);
    };
    XmppRoom.prototype.cancelConfigure = function () {
      return this.client.cancelConfigure(this.name);
    };
    XmppRoom.prototype.saveConfiguration = function (config) {
      return this.client.saveConfiguration(this.name, config);
    };
    XmppRoom.prototype.queryOccupants = function (success_cb, error_cb) {
      return this.client.queryOccupants(this.name, success_cb, error_cb);
    };
    XmppRoom.prototype.setTopic = function (topic) {
      return this.client.setTopic(this.name, topic);
    };
    XmppRoom.prototype.modifyRole = function (nick, role, reason, success_cb, error_cb) {
      return this.client.modifyRole(this.name, nick, role, reason, success_cb, error_cb);
    };
    XmppRoom.prototype.kick = function (nick, reason, handler_cb, error_cb) {
      return this.client.kick(this.name, nick, reason, handler_cb, error_cb);
    };
    XmppRoom.prototype.voice = function (nick, reason, handler_cb, error_cb) {
      return this.client.voice(this.name, nick, reason, handler_cb, error_cb);
    };
    XmppRoom.prototype.mute = function (nick, reason, handler_cb, error_cb) {
      return this.client.mute(this.name, nick, reason, handler_cb, error_cb);
    };
    XmppRoom.prototype.op = function (nick, reason, handler_cb, error_cb) {
      return this.client.op(this.name, nick, reason, handler_cb, error_cb);
    };
    XmppRoom.prototype.deop = function (nick, reason, handler_cb, error_cb) {
      return this.client.deop(this.name, nick, reason, handler_cb, error_cb);
    };
    XmppRoom.prototype.modifyAffiliation = function (jid, affiliation, reason, success_cb, error_cb) {
      return this.client.modifyAffiliation(this.name, jid, affiliation, reason, success_cb, error_cb);
    };
    XmppRoom.prototype.ban = function (jid, reason, handler_cb, error_cb) {
      return this.client.ban(this.name, jid, reason, handler_cb, error_cb);
    };
    XmppRoom.prototype.member = function (jid, reason, handler_cb, error_cb) {
      return this.client.member(this.name, jid, reason, handler_cb, error_cb);
    };
    XmppRoom.prototype.revoke = function (jid, reason, handler_cb, error_cb) {
      return this.client.revoke(this.name, jid, reason, handler_cb, error_cb);
    };
    XmppRoom.prototype.owner = function (jid, reason, handler_cb, error_cb) {
      return this.client.owner(this.name, jid, reason, handler_cb, error_cb);
    };
    XmppRoom.prototype.admin = function (jid, reason, handler_cb, error_cb) {
      return this.client.admin(this.name, jid, reason, handler_cb, error_cb);
    };
    XmppRoom.prototype.changeNick = function (nick1) {
      this.nick = nick1;
      return this.client.changeNick(this.name, nick);
    };
    XmppRoom.prototype.setStatus = function (show, status) {
      return this.client.setStatus(this.name, this.nick, show, status);
    };

    /*Function
    Adds a handler to the MUC room.
      Parameters:
    (String) handler_type - 'message', 'presence' or 'roster'.
    (Function) handler - The handler function.
    Returns:
    id - the id of handler.
     */

    XmppRoom.prototype.addHandler = function (handler_type, handler) {
      var id;
      id = this._handler_ids++;
      switch (handler_type) {
        case 'presence':
          this._presence_handlers[id] = handler;
          break;
        case 'message':
          this._message_handlers[id] = handler;
          break;
        case 'roster':
          this._roster_handlers[id] = handler;
          break;
        default:
          this._handler_ids--;
          return null;
      }
      return id;
    };

    /*Function
    Removes a handler from the MUC room.
    This function takes ONLY ids returned by the addHandler function
    of this room. passing handler ids returned by connection.addHandler
    may brake things!
      Parameters:
    (number) id - the id of the handler
     */

    XmppRoom.prototype.removeHandler = function (id) {
      delete this._presence_handlers[id];
      delete this._message_handlers[id];
      return delete this._roster_handlers[id];
    };

    /*Function
    Creates and adds an Occupant to the Room Roster.
      Parameters:
    (Object) data - the data the Occupant is filled with
    Returns:
    occ - the created Occupant.
     */

    XmppRoom.prototype._addOccupant = function (data) {
      var occ;
      occ = new Occupant(data, this);
      this.roster[occ.nick] = occ;
      return occ;
    };

    /*Function
    The standard handler that managed the Room Roster.
      Parameters:
    (Object) pres - the presence stanza containing user information
     */

    XmppRoom.prototype._roomRosterHandler = function (pres) {
      var data, handler, id, newnick, nick, ref;
      data = XmppRoom._parsePresence(pres);
      nick = data.nick;
      newnick = data.newnick || null;
      switch (data.type) {
        case 'error':
          return true;
        case 'unavailable':
          if (newnick) {
            data.nick = newnick;
            if (this.roster[nick] && this.roster[newnick]) {
              this.roster[nick].update(this.roster[newnick]);
              this.roster[newnick] = this.roster[nick];
            }
            if (this.roster[nick] && !this.roster[newnick]) {
              this.roster[newnick] = this.roster[nick].update(data);
            }
          }
          delete this.roster[nick];
          break;
        default:
          if (this.roster[nick]) {
            this.roster[nick].update(data);
          } else {
            this._addOccupant(data);
          }
      }
      ref = this._roster_handlers;
      for (id in ref) {
        handler = ref[id];
        if (!handler(this.roster, this)) {
          delete this._roster_handlers[id];
        }
      }
      return true;
    };

    /*Function
    Parses a presence stanza
      Parameters:
    (Object) data - the data extracted from the presence stanza
     */

    XmppRoom._parsePresence = function (pres) {
      var c, c2, data, i, j, len, len1, ref, ref1, ref2;
      data = {};
      data.nick = strophe_js.Strophe.getResourceFromJid(pres.getAttribute("from"));
      data.type = pres.getAttribute("type");
      data.states = [];
      ref = pres.childNodes;
      for (i = 0, len = ref.length; i < len; i++) {
        c = ref[i];
        switch (c.nodeName) {
          case "error":
            data.errorcode = c.getAttribute("code");
            data.error = (ref1 = c.childNodes[0]) != null ? ref1.nodeName : void 0;
            break;
          case "status":
            data.status = c.textContent || null;
            break;
          case "show":
            data.show = c.textContent || null;
            break;
          case "x":
            if (c.getAttribute("xmlns") === strophe_js.Strophe.NS.MUC_USER) {
              ref2 = c.childNodes;
              for (j = 0, len1 = ref2.length; j < len1; j++) {
                c2 = ref2[j];
                switch (c2.nodeName) {
                  case "item":
                    data.affiliation = c2.getAttribute("affiliation");
                    data.role = c2.getAttribute("role");
                    data.jid = c2.getAttribute("jid");
                    data.newnick = c2.getAttribute("nick");
                    break;
                  case "status":
                    if (c2.getAttribute("code")) {
                      data.states.push(c2.getAttribute("code"));
                    }
                }
              }
            }
        }
      }
      return data;
    };
    return XmppRoom;
  }();
  RoomConfig = function () {
    function RoomConfig(info) {
      this.parse = bind(this.parse, this);
      if (info != null) {
        this.parse(info);
      }
    }
    RoomConfig.prototype.parse = function (result) {
      var attr, attrs, child, field, i, identity, j, l, len, len1, len2, query, ref;
      query = result.getElementsByTagName("query")[0].childNodes;
      this.identities = [];
      this.features = [];
      this.x = [];
      for (i = 0, len = query.length; i < len; i++) {
        child = query[i];
        attrs = child.attributes;
        switch (child.nodeName) {
          case "identity":
            identity = {};
            for (j = 0, len1 = attrs.length; j < len1; j++) {
              attr = attrs[j];
              identity[attr.name] = attr.textContent;
            }
            this.identities.push(identity);
            break;
          case "feature":
            this.features.push(child.getAttribute("var"));
            break;
          case "x":
            if (!child.childNodes[0].getAttribute("var") === 'FORM_TYPE' || !child.childNodes[0].getAttribute("type") === 'hidden') {
              break;
            }
            ref = child.childNodes;
            for (l = 0, len2 = ref.length; l < len2; l++) {
              field = ref[l];
              if (!field.attributes.type) {
                this.x.push({
                  "var": field.getAttribute("var"),
                  label: field.getAttribute("label") || "",
                  value: field.firstChild.textContent || ""
                });
              }
            }
        }
      }
      return {
        "identities": this.identities,
        "features": this.features,
        "x": this.x
      };
    };
    return RoomConfig;
  }();
  Occupant = function () {
    function Occupant(data, room1) {
      this.room = room1;
      this.update = bind(this.update, this);
      this.admin = bind(this.admin, this);
      this.owner = bind(this.owner, this);
      this.revoke = bind(this.revoke, this);
      this.member = bind(this.member, this);
      this.ban = bind(this.ban, this);
      this.modifyAffiliation = bind(this.modifyAffiliation, this);
      this.deop = bind(this.deop, this);
      this.op = bind(this.op, this);
      this.mute = bind(this.mute, this);
      this.voice = bind(this.voice, this);
      this.kick = bind(this.kick, this);
      this.modifyRole = bind(this.modifyRole, this);
      this.update(data);
    }
    Occupant.prototype.modifyRole = function (role, reason, success_cb, error_cb) {
      return this.room.modifyRole(this.nick, role, reason, success_cb, error_cb);
    };
    Occupant.prototype.kick = function (reason, handler_cb, error_cb) {
      return this.room.kick(this.nick, reason, handler_cb, error_cb);
    };
    Occupant.prototype.voice = function (reason, handler_cb, error_cb) {
      return this.room.voice(this.nick, reason, handler_cb, error_cb);
    };
    Occupant.prototype.mute = function (reason, handler_cb, error_cb) {
      return this.room.mute(this.nick, reason, handler_cb, error_cb);
    };
    Occupant.prototype.op = function (reason, handler_cb, error_cb) {
      return this.room.op(this.nick, reason, handler_cb, error_cb);
    };
    Occupant.prototype.deop = function (reason, handler_cb, error_cb) {
      return this.room.deop(this.nick, reason, handler_cb, error_cb);
    };
    Occupant.prototype.modifyAffiliation = function (affiliation, reason, success_cb, error_cb) {
      return this.room.modifyAffiliation(this.jid, affiliation, reason, success_cb, error_cb);
    };
    Occupant.prototype.ban = function (reason, handler_cb, error_cb) {
      return this.room.ban(this.jid, reason, handler_cb, error_cb);
    };
    Occupant.prototype.member = function (reason, handler_cb, error_cb) {
      return this.room.member(this.jid, reason, handler_cb, error_cb);
    };
    Occupant.prototype.revoke = function (reason, handler_cb, error_cb) {
      return this.room.revoke(this.jid, reason, handler_cb, error_cb);
    };
    Occupant.prototype.owner = function (reason, handler_cb, error_cb) {
      return this.room.owner(this.jid, reason, handler_cb, error_cb);
    };
    Occupant.prototype.admin = function (reason, handler_cb, error_cb) {
      return this.room.admin(this.jid, reason, handler_cb, error_cb);
    };
    Occupant.prototype.update = function (data) {
      this.nick = data.nick || null;
      this.affiliation = data.affiliation || null;
      this.role = data.role || null;
      this.jid = data.jid || null;
      this.status = data.status || null;
      this.show = data.show || null;
      return this;
    };
    return Occupant;
  }();
});
},{"strophe.js":"../node_modules/strophe.js/dist/strophe.umd.js"}],"echobot2.js":[function(require,module,exports) {
"use strict";

var _stropheMuc = require("./strophe.muc.js");
//import * as Strophe2 from 'strophe.js';

window.addEventListener('load', waitForElement, 'test');
//document.addEventListener('DOMContentLoaded', bot_connect, false);

function waitForElement() {
  bot_connect();
}
function bot_connect() {
  var connection = new Strophe.Connection('http://localhost:5280/http-bind/');
  connection.connect('rasabot@localhost', 'rasabot', onConnect);
  var a = connection.muc.init(connection);
  connection.muc.join("chat@localhost", "rasabot", room_msg_handler, room_pres_handler, room_pres_handler);
  console.log('hgg', a);
}
function onConnect(status) {
  if (status == Strophe.Status.CONNECTING) {
    console.log('Strophe is connecting.');
  } else if (status == Strophe.Status.CONNFAIL) {
    console.log('Strophe failed to connect.');
  } else if (status == Strophe.Status.DISCONNECTING) {
    console.log('Strophe is disconnecting.');
  } else if (status == Strophe.Status.DISCONNECTED) {
    console.log('Strophe is disconnected.');
  } else if (status == Strophe.Status.CONNECTED) {
    console.log('Strophe is connected.');
    console.log(connection.jid);
  }
}
function room_msg_handler(a, b, c) {
  console.log('MUC: room_msg_handler');
  return true;
}
function room_pres_handler(a, b, c) {
  console.log('MUC: room_pres_handler');
  return true;
}
},{"./strophe.muc.js":"strophe.muc.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42405" + '/');
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","echobot2.js"], null)
//# sourceMappingURL=/echobot2.38edbb7f.js.map