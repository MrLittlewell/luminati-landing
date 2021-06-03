//Swiper
/**
 * Swiper 6.6.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 19, 2021
 */

(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      (global.Swiper = factory()));
})(this, function () {
  "use strict";

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

  function _extends() {
    _extends =
      Object.assign ||
      function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

    return _extends.apply(this, arguments);
  }

  /**
   * SSR Window 3.0.0
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2020, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: November 9, 2020
   */

  /* eslint-disable no-param-reassign */
  function isObject$1(obj) {
    return (
      obj !== null &&
      typeof obj === "object" &&
      "constructor" in obj &&
      obj.constructor === Object
    );
  }

  function extend$1(target, src) {
    if (target === void 0) {
      target = {};
    }

    if (src === void 0) {
      src = {};
    }

    Object.keys(src).forEach(function (key) {
      if (typeof target[key] === "undefined") target[key] = src[key];
      else if (
        isObject$1(src[key]) &&
        isObject$1(target[key]) &&
        Object.keys(src[key]).length > 0
      ) {
        extend$1(target[key], src[key]);
      }
    });
  }

  var ssrDocument = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: "",
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {},
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };

  function getDocument() {
    var doc = typeof document !== "undefined" ? document : {};
    extend$1(doc, ssrDocument);
    return doc;
  }

  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: "",
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {},
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        },
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }

      return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }

      clearTimeout(id);
    },
  };

  function getWindow() {
    var win = typeof window !== "undefined" ? window : {};
    extend$1(win, ssrWindow);
    return win;
  }

  /**
   * Dom7 3.0.0
   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
   * https://framework7.io/docs/dom7.html
   *
   * Copyright 2020, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: November 9, 2020
   */

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf =
      Object.setPrototypeOf ||
      function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        },
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    }

    return self;
  }
  /* eslint-disable no-proto */

  function makeReactive(obj) {
    var proto = obj.__proto__;
    Object.defineProperty(obj, "__proto__", {
      get: function get() {
        return proto;
      },
      set: function set(value) {
        proto.__proto__ = value;
      },
    });
  }

  var Dom7 = /*#__PURE__*/ (function (_Array) {
    _inheritsLoose(Dom7, _Array);

    function Dom7(items) {
      var _this;

      _this = _Array.call.apply(_Array, [this].concat(items)) || this;
      makeReactive(_assertThisInitialized(_this));
      return _this;
    }

    return Dom7;
  })(/*#__PURE__*/ _wrapNativeSuper(Array));

  function arrayFlat(arr) {
    if (arr === void 0) {
      arr = [];
    }

    var res = [];
    arr.forEach(function (el) {
      if (Array.isArray(el)) {
        res.push.apply(res, arrayFlat(el));
      } else {
        res.push(el);
      }
    });
    return res;
  }

  function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
  }

  function arrayUnique(arr) {
    var uniqueArray = [];

    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    }

    return uniqueArray;
  }

  function qsa(selector, context) {
    if (typeof selector !== "string") {
      return [selector];
    }

    var a = [];
    var res = context.querySelectorAll(selector);

    for (var i = 0; i < res.length; i += 1) {
      a.push(res[i]);
    }

    return a;
  }

  function $(selector, context) {
    var window = getWindow();
    var document = getDocument();
    var arr = [];

    if (!context && selector instanceof Dom7) {
      return selector;
    }

    if (!selector) {
      return new Dom7(arr);
    }

    if (typeof selector === "string") {
      var html = selector.trim();

      if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
        var toCreate = "div";
        if (html.indexOf("<li") === 0) toCreate = "ul";
        if (html.indexOf("<tr") === 0) toCreate = "tbody";
        if (html.indexOf("<td") === 0 || html.indexOf("<th") === 0)
          toCreate = "tr";
        if (html.indexOf("<tbody") === 0) toCreate = "table";
        if (html.indexOf("<option") === 0) toCreate = "select";
        var tempParent = document.createElement(toCreate);
        tempParent.innerHTML = html;

        for (var i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        arr = qsa(selector.trim(), context || document);
      } // arr = qsa(selector, document);
    } else if (
      selector.nodeType ||
      selector === window ||
      selector === document
    ) {
      arr.push(selector);
    } else if (Array.isArray(selector)) {
      if (selector instanceof Dom7) return selector;
      arr = selector;
    }

    return new Dom7(arrayUnique(arr));
  }

  $.fn = Dom7.prototype;

  function addClass() {
    for (
      var _len = arguments.length, classes = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      classes[_key] = arguments[_key];
    }

    var classNames = arrayFlat(
      classes.map(function (c) {
        return c.split(" ");
      })
    );
    this.forEach(function (el) {
      var _el$classList;

      (_el$classList = el.classList).add.apply(_el$classList, classNames);
    });
    return this;
  }

  function removeClass() {
    for (
      var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0;
      _key2 < _len2;
      _key2++
    ) {
      classes[_key2] = arguments[_key2];
    }

    var classNames = arrayFlat(
      classes.map(function (c) {
        return c.split(" ");
      })
    );
    this.forEach(function (el) {
      var _el$classList2;

      (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
    });
    return this;
  }

  function toggleClass() {
    for (
      var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0;
      _key3 < _len3;
      _key3++
    ) {
      classes[_key3] = arguments[_key3];
    }

    var classNames = arrayFlat(
      classes.map(function (c) {
        return c.split(" ");
      })
    );
    this.forEach(function (el) {
      classNames.forEach(function (className) {
        el.classList.toggle(className);
      });
    });
  }

  function hasClass() {
    for (
      var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0;
      _key4 < _len4;
      _key4++
    ) {
      classes[_key4] = arguments[_key4];
    }

    var classNames = arrayFlat(
      classes.map(function (c) {
        return c.split(" ");
      })
    );
    return (
      arrayFilter(this, function (el) {
        return (
          classNames.filter(function (className) {
            return el.classList.contains(className);
          }).length > 0
        );
      }).length > 0
    );
  }

  function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === "string") {
      // Get attr
      if (this[0]) return this[0].getAttribute(attrs);
      return undefined;
    } // Set attrs

    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }

    return this;
  }

  function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }

    return this;
  }

  function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].style.transform = transform;
    }

    return this;
  }

  function transition$1(duration) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].style.transitionDuration =
        typeof duration !== "string" ? duration + "ms" : duration;
    }

    return this;
  }

  function on() {
    for (
      var _len5 = arguments.length, args = new Array(_len5), _key5 = 0;
      _key5 < _len5;
      _key5++
    ) {
      args[_key5] = arguments[_key5];
    }

    var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

    if (typeof args[1] === "function") {
      eventType = args[0];
      listener = args[1];
      capture = args[2];
      targetSelector = undefined;
    }

    if (!capture) capture = false;

    function handleLiveEvent(e) {
      var target = e.target;
      if (!target) return;
      var eventData = e.target.dom7EventData || [];

      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }

      if ($(target).is(targetSelector)) listener.apply(target, eventData);
      else {
        var _parents = $(target).parents(); // eslint-disable-line

        for (var k = 0; k < _parents.length; k += 1) {
          if ($(_parents[k]).is(targetSelector))
            listener.apply(_parents[k], eventData);
        }
      }
    }

    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];

      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }

      listener.apply(this, eventData);
    }

    var events = eventType.split(" ");
    var j;

    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];

      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners) el.dom7Listeners = {};
          if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent,
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          var _event = events[j];
          if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
          if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

          el.dom7LiveListeners[_event].push({
            listener: listener,
            proxyListener: handleLiveEvent,
          });

          el.addEventListener(_event, handleLiveEvent, capture);
        }
      }
    }

    return this;
  }

  function off() {
    for (
      var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
      _key6 < _len6;
      _key6++
    ) {
      args[_key6] = arguments[_key6];
    }

    var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

    if (typeof args[1] === "function") {
      eventType = args[0];
      listener = args[1];
      capture = args[2];
      targetSelector = undefined;
    }

    if (!capture) capture = false;
    var events = eventType.split(" ");

    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];

      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = void 0;

        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }

        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];

            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (
              listener &&
              handler.listener &&
              handler.listener.dom7proxy &&
              handler.listener.dom7proxy === listener
            ) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }

    return this;
  }

  function trigger() {
    var window = getWindow();

    for (
      var _len9 = arguments.length, args = new Array(_len9), _key9 = 0;
      _key9 < _len9;
      _key9++
    ) {
      args[_key9] = arguments[_key9];
    }

    var events = args[0].split(" ");
    var eventData = args[1];

    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];

      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];

        if (window.CustomEvent) {
          var evt = new window.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true,
          });
          el.dom7EventData = args.filter(function (data, dataIndex) {
            return dataIndex > 0;
          });
          el.dispatchEvent(evt);
          el.dom7EventData = [];
          delete el.dom7EventData;
        }
      }
    }

    return this;
  }

  function transitionEnd$1(callback) {
    var dom = this;

    function fireCallBack(e) {
      if (e.target !== this) return;
      callback.call(this, e);
      dom.off("transitionend", fireCallBack);
    }

    if (callback) {
      dom.on("transitionend", fireCallBack);
    }

    return this;
  }

  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        var _styles = this.styles();

        return (
          this[0].offsetWidth +
          parseFloat(_styles.getPropertyValue("margin-right")) +
          parseFloat(_styles.getPropertyValue("margin-left"))
        );
      }

      return this[0].offsetWidth;
    }

    return null;
  }

  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        var _styles2 = this.styles();

        return (
          this[0].offsetHeight +
          parseFloat(_styles2.getPropertyValue("margin-top")) +
          parseFloat(_styles2.getPropertyValue("margin-bottom"))
        );
      }

      return this[0].offsetHeight;
    }

    return null;
  }

  function offset() {
    if (this.length > 0) {
      var window = getWindow();
      var document = getDocument();
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = document.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === window ? window.scrollY : el.scrollTop;
      var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
      return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft,
      };
    }

    return null;
  }

  function styles() {
    var window = getWindow();
    if (this[0]) return window.getComputedStyle(this[0], null);
    return {};
  }

  function css(props, value) {
    var window = getWindow();
    var i;

    if (arguments.length === 1) {
      if (typeof props === "string") {
        // .css('width')
        if (this[0])
          return window.getComputedStyle(this[0], null).getPropertyValue(props);
      } else {
        // .css({ width: '100px' })
        for (i = 0; i < this.length; i += 1) {
          for (var _prop in props) {
            this[i].style[_prop] = props[_prop];
          }
        }

        return this;
      }
    }

    if (arguments.length === 2 && typeof props === "string") {
      // .css('width', '100px')
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }

      return this;
    }

    return this;
  }

  function each(callback) {
    if (!callback) return this;
    this.forEach(function (el, index) {
      callback.apply(el, [el, index]);
    });
    return this;
  }

  function filter(callback) {
    var result = arrayFilter(this, callback);
    return $(result);
  }

  function html(html) {
    if (typeof html === "undefined") {
      return this[0] ? this[0].innerHTML : null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }

    return this;
  }

  function text(text) {
    if (typeof text === "undefined") {
      return this[0] ? this[0].textContent.trim() : null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }

    return this;
  }

  function is(selector) {
    var window = getWindow();
    var document = getDocument();
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === "undefined") return false;

    if (typeof selector === "string") {
      if (el.matches) return el.matches(selector);
      if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
      if (el.msMatchesSelector) return el.msMatchesSelector(selector);
      compareWith = $(selector);

      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) return true;
      }

      return false;
    }

    if (selector === document) {
      return el === document;
    }

    if (selector === window) {
      return el === window;
    }

    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;

      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) return true;
      }

      return false;
    }

    return false;
  }

  function index() {
    var child = this[0];
    var i;

    if (child) {
      i = 0; // eslint-disable-next-line

      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i += 1;
      }

      return i;
    }

    return undefined;
  }

  function eq(index) {
    if (typeof index === "undefined") return this;
    var length = this.length;

    if (index > length - 1) {
      return $([]);
    }

    if (index < 0) {
      var returnIndex = length + index;
      if (returnIndex < 0) return $([]);
      return $([this[returnIndex]]);
    }

    return $([this[index]]);
  }

  function append() {
    var newChild;
    var document = getDocument();

    for (var k = 0; k < arguments.length; k += 1) {
      newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === "string") {
          var tempDiv = document.createElement("div");
          tempDiv.innerHTML = newChild;

          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }

    return this;
  }

  function prepend(newChild) {
    var document = getDocument();
    var i;
    var j;

    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === "string") {
        var tempDiv = document.createElement("div");
        tempDiv.innerHTML = newChild;

        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }

    return this;
  }

  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (
          this[0].nextElementSibling &&
          $(this[0].nextElementSibling).is(selector)
        ) {
          return $([this[0].nextElementSibling]);
        }

        return $([]);
      }

      if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
      return $([]);
    }

    return $([]);
  }

  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el) return $([]);

    while (el.nextElementSibling) {
      var _next = el.nextElementSibling; // eslint-disable-line

      if (selector) {
        if ($(_next).is(selector)) nextEls.push(_next);
      } else nextEls.push(_next);

      el = _next;
    }

    return $(nextEls);
  }

  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];

      if (selector) {
        if (
          el.previousElementSibling &&
          $(el.previousElementSibling).is(selector)
        ) {
          return $([el.previousElementSibling]);
        }

        return $([]);
      }

      if (el.previousElementSibling) return $([el.previousElementSibling]);
      return $([]);
    }

    return $([]);
  }

  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el) return $([]);

    while (el.previousElementSibling) {
      var _prev = el.previousElementSibling; // eslint-disable-line

      if (selector) {
        if ($(_prev).is(selector)) prevEls.push(_prev);
      } else prevEls.push(_prev);

      el = _prev;
    }

    return $(prevEls);
  }

  function parent(selector) {
    var parents = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector))
            parents.push(this[i].parentNode);
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }

    return $(parents);
  }

  function parents(selector) {
    var parents = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      var _parent = this[i].parentNode; // eslint-disable-line

      while (_parent) {
        if (selector) {
          if ($(_parent).is(selector)) parents.push(_parent);
        } else {
          parents.push(_parent);
        }

        _parent = _parent.parentNode;
      }
    }

    return $(parents);
  }

  function closest(selector) {
    var closest = this; // eslint-disable-line

    if (typeof selector === "undefined") {
      return $([]);
    }

    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }

    return closest;
  }

  function find(selector) {
    var foundElements = [];

    for (var i = 0; i < this.length; i += 1) {
      try {
        var found = this[i].querySelectorAll(selector);
      } catch (err) {
        console.log(selector);
      }

      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }

    return $(foundElements);
  }

  function children(selector) {
    var children = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].children;

      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector || $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }

    return $(children);
  }

  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
    }

    return this;
  }

  var Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    transform: transform,
    transition: transition$1,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd$1,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    styles: styles,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    filter: filter,
    remove: remove,
  };
  Object.keys(Methods).forEach(function (methodName) {
    Object.defineProperty($.fn, methodName, {
      value: Methods[methodName],
      writable: true,
    });
  });

  function deleteProps(obj) {
    var object = obj;
    Object.keys(object).forEach(function (key) {
      try {
        object[key] = null;
      } catch (e) {
        // no getter for object
      }

      try {
        delete object[key];
      } catch (e) {
        // something got wrong
      }
    });
  }

  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return setTimeout(callback, delay);
  }

  function now() {
    return Date.now();
  }

  function getComputedStyle$1(el) {
    var window = getWindow();
    var style;

    if (window.getComputedStyle) {
      style = window.getComputedStyle(el, null);
    }

    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }

    if (!style) {
      style = el.style;
    }

    return style;
  }

  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = "x";
    }

    var window = getWindow();
    var matrix;
    var curTransform;
    var transformMatrix;
    var curStyle = getComputedStyle$1(el);

    if (window.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;

      if (curTransform.split(",").length > 6) {
        curTransform = curTransform
          .split(", ")
          .map(function (a) {
            return a.replace(",", ".");
          })
          .join(", ");
      } // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case

      transformMatrix = new window.WebKitCSSMatrix(
        curTransform === "none" ? "" : curTransform
      );
    } else {
      transformMatrix =
        curStyle.MozTransform ||
        curStyle.OTransform ||
        curStyle.MsTransform ||
        curStyle.msTransform ||
        curStyle.transform ||
        curStyle
          .getPropertyValue("transform")
          .replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }

    if (axis === "x") {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
    }

    if (axis === "y") {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
    }

    return curTransform || 0;
  }

  function isObject(o) {
    return (
      typeof o === "object" &&
      o !== null &&
      o.constructor &&
      Object.prototype.toString.call(o).slice(8, -1) === "Object"
    );
  }

  function extend() {
    var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
    var noExtend = ["__proto__", "constructor", "prototype"];

    for (var i = 1; i < arguments.length; i += 1) {
      var nextSource =
        i < 0 || arguments.length <= i ? undefined : arguments[i];

      if (nextSource !== undefined && nextSource !== null) {
        var keysArray = Object.keys(Object(nextSource)).filter(function (key) {
          return noExtend.indexOf(key) < 0;
        });

        for (
          var nextIndex = 0, len = keysArray.length;
          nextIndex < len;
          nextIndex += 1
        ) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

          if (desc !== undefined && desc.enumerable) {
            if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else if (
              !isObject(to[nextKey]) &&
              isObject(nextSource[nextKey])
            ) {
              to[nextKey] = {};

              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }

    return to;
  }

  function bindModuleMethods(instance, obj) {
    Object.keys(obj).forEach(function (key) {
      if (isObject(obj[key])) {
        Object.keys(obj[key]).forEach(function (subKey) {
          if (typeof obj[key][subKey] === "function") {
            obj[key][subKey] = obj[key][subKey].bind(instance);
          }
        });
      }

      instance[key] = obj[key];
    });
  }

  function classesToSelector(classes) {
    if (classes === void 0) {
      classes = "";
    }

    return (
      "." +
      classes
        .trim()
        .replace(/([\.:\/])/g, "\\$1") // eslint-disable-line
        .replace(/ /g, ".")
    );
  }

  var support;

  function calcSupport() {
    var window = getWindow();
    var document = getDocument();
    return {
      touch: !!(
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)
      ),
      pointerEvents:
        !!window.PointerEvent &&
        "maxTouchPoints" in window.navigator &&
        window.navigator.maxTouchPoints >= 0,
      observer: (function checkObserver() {
        return (
          "MutationObserver" in window || "WebkitMutationObserver" in window
        );
      })(),
      passiveListener: (function checkPassiveListener() {
        var supportsPassive = false;

        try {
          var opts = Object.defineProperty({}, "passive", {
            // eslint-disable-next-line
            get: function get() {
              supportsPassive = true;
            },
          });
          window.addEventListener("testPassiveListener", null, opts);
        } catch (e) {
          // No support
        }

        return supportsPassive;
      })(),
      gestures: (function checkGestures() {
        return "ongesturestart" in window;
      })(),
    };
  }

  function getSupport() {
    if (!support) {
      support = calcSupport();
    }

    return support;
  }

  var device;

  function calcDevice(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      userAgent = _ref.userAgent;

    var support = getSupport();
    var window = getWindow();
    var platform = window.navigator.platform;
    var ua = userAgent || window.navigator.userAgent;
    var device = {
      ios: false,
      android: false,
    };
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    var windows = platform === "Win32";
    var macos = platform === "MacIntel"; // iPadOs 13 fix

    var iPadScreens = [
      "1024x1366",
      "1366x1024",
      "834x1194",
      "1194x834",
      "834x1112",
      "1112x834",
      "768x1024",
      "1024x768",
      "820x1180",
      "1180x820",
      "810x1080",
      "1080x810",
    ];

    if (
      !ipad &&
      macos &&
      support.touch &&
      iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0
    ) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad) ipad = [0, 1, "13_0_0"];
      macos = false;
    } // Android

    if (android && !windows) {
      device.os = "android";
      device.android = true;
    }

    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    } // Export object

    return device;
  }

  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }

    if (!device) {
      device = calcDevice(overrides);
    }

    return device;
  }

  var browser;

  function calcBrowser() {
    var window = getWindow();

    function isSafari() {
      var ua = window.navigator.userAgent.toLowerCase();
      return (
        ua.indexOf("safari") >= 0 &&
        ua.indexOf("chrome") < 0 &&
        ua.indexOf("android") < 0
      );
    }

    return {
      isEdge: !!window.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        window.navigator.userAgent
      ),
    };
  }

  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }

    return browser;
  }

  var supportsResizeObserver = function supportsResizeObserver() {
    var window = getWindow();
    return typeof window.ResizeObserver !== "undefined";
  };

  var Resize = {
    name: "resize",
    create: function create() {
      var swiper = this;
      extend(swiper, {
        resize: {
          observer: null,
          createObserver: function createObserver() {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            swiper.resize.observer = new ResizeObserver(function (entries) {
              var width = swiper.width,
                height = swiper.height;
              var newWidth = width;
              var newHeight = height;
              entries.forEach(function (_ref) {
                var contentBoxSize = _ref.contentBoxSize,
                  contentRect = _ref.contentRect,
                  target = _ref.target;
                if (target && target !== swiper.el) return;
                newWidth = contentRect
                  ? contentRect.width
                  : (contentBoxSize[0] || contentBoxSize).inlineSize;
                newHeight = contentRect
                  ? contentRect.height
                  : (contentBoxSize[0] || contentBoxSize).blockSize;
              });

              if (newWidth !== width || newHeight !== height) {
                swiper.resize.resizeHandler();
              }
            });
            swiper.resize.observer.observe(swiper.el);
          },
          removeObserver: function removeObserver() {
            if (
              swiper.resize.observer &&
              swiper.resize.observer.unobserve &&
              swiper.el
            ) {
              swiper.resize.observer.unobserve(swiper.el);
              swiper.resize.observer = null;
            }
          },
          resizeHandler: function resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            swiper.emit("beforeResize");
            swiper.emit("resize");
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            swiper.emit("orientationchange");
          },
        },
      });
    },
    on: {
      init: function init(swiper) {
        var window = getWindow();

        if (swiper.params.resizeObserver && supportsResizeObserver()) {
          swiper.resize.createObserver();
          return;
        } // Emit resize

        window.addEventListener("resize", swiper.resize.resizeHandler); // Emit orientationchange

        window.addEventListener(
          "orientationchange",
          swiper.resize.orientationChangeHandler
        );
      },
      destroy: function destroy(swiper) {
        var window = getWindow();
        swiper.resize.removeObserver();
        window.removeEventListener("resize", swiper.resize.resizeHandler);
        window.removeEventListener(
          "orientationchange",
          swiper.resize.orientationChangeHandler
        );
      },
    },
  };

  var Observer = {
    attach: function attach(target, options) {
      if (options === void 0) {
        options = {};
      }

      var window = getWindow();
      var swiper = this;
      var ObserverFunc =
        window.MutationObserver || window.WebkitMutationObserver;
      var observer = new ObserverFunc(function (mutations) {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (mutations.length === 1) {
          swiper.emit("observerUpdate", mutations[0]);
          return;
        }

        var observerUpdate = function observerUpdate() {
          swiper.emit("observerUpdate", mutations[0]);
        };

        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(observerUpdate);
        } else {
          window.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes:
          typeof options.attributes === "undefined" ? true : options.attributes,
        childList:
          typeof options.childList === "undefined" ? true : options.childList,
        characterData:
          typeof options.characterData === "undefined"
            ? true
            : options.characterData,
      });
      swiper.observer.observers.push(observer);
    },
    init: function init() {
      var swiper = this;
      if (!swiper.support.observer || !swiper.params.observer) return;

      if (swiper.params.observeParents) {
        var containerParents = swiper.$el.parents();

        for (var i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      } // Observe container

      swiper.observer.attach(swiper.$el[0], {
        childList: swiper.params.observeSlideChildren,
      }); // Observe wrapper

      swiper.observer.attach(swiper.$wrapperEl[0], {
        attributes: false,
      });
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.observers.forEach(function (observer) {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    },
  };
  var Observer$1 = {
    name: "observer",
    params: {
      observer: false,
      observeParents: false,
      observeSlideChildren: false,
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        observer: _extends({}, Observer, {
          observers: [],
        }),
      });
    },
    on: {
      init: function init(swiper) {
        swiper.observer.init();
      },
      destroy: function destroy(swiper) {
        swiper.observer.destroy();
      },
    },
  };

  var modular = {
    useParams: function useParams(instanceParams) {
      var instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName]; // Extend params

        if (module.params) {
          extend(instanceParams, module.params);
        }
      });
    },
    useModules: function useModules(modulesParams) {
      if (modulesParams === void 0) {
        modulesParams = {};
      }

      var instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName];
        var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

        if (module.on && instance.on) {
          Object.keys(module.on).forEach(function (moduleEventName) {
            instance.on(moduleEventName, module.on[moduleEventName]);
          });
        } // Module create callback

        if (module.create) {
          module.create.bind(instance)(moduleParams);
        }
      });
    },
  };

  /* eslint-disable no-underscore-dangle */
  var eventsEmitter = {
    on: function on(events, handler, priority) {
      var self = this;
      if (typeof handler !== "function") return self;
      var method = priority ? "unshift" : "push";
      events.split(" ").forEach(function (event) {
        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
        self.eventsListeners[event][method](handler);
      });
      return self;
    },
    once: function once(events, handler, priority) {
      var self = this;
      if (typeof handler !== "function") return self;

      function onceHandler() {
        self.off(events, onceHandler);

        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }

        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key];
        }

        handler.apply(self, args);
      }

      onceHandler.__emitterProxy = handler;
      return self.on(events, onceHandler, priority);
    },
    onAny: function onAny(handler, priority) {
      var self = this;
      if (typeof handler !== "function") return self;
      var method = priority ? "unshift" : "push";

      if (self.eventsAnyListeners.indexOf(handler) < 0) {
        self.eventsAnyListeners[method](handler);
      }

      return self;
    },
    offAny: function offAny(handler) {
      var self = this;
      if (!self.eventsAnyListeners) return self;
      var index = self.eventsAnyListeners.indexOf(handler);

      if (index >= 0) {
        self.eventsAnyListeners.splice(index, 1);
      }

      return self;
    },
    off: function off(events, handler) {
      var self = this;
      if (!self.eventsListeners) return self;
      events.split(" ").forEach(function (event) {
        if (typeof handler === "undefined") {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function (eventHandler, index) {
            if (
              eventHandler === handler ||
              (eventHandler.__emitterProxy &&
                eventHandler.__emitterProxy === handler)
            ) {
              self.eventsListeners[event].splice(index, 1);
            }
          });
        }
      });
      return self;
    },
    emit: function emit() {
      var self = this;
      if (!self.eventsListeners) return self;
      var events;
      var data;
      var context;

      for (
        var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2] = arguments[_key2];
      }

      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }

      data.unshift(context);
      var eventsArray = Array.isArray(events) ? events : events.split(" ");
      eventsArray.forEach(function (event) {
        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
          self.eventsAnyListeners.forEach(function (eventHandler) {
            eventHandler.apply(context, [event].concat(data));
          });
        }

        if (self.eventsListeners && self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function (eventHandler) {
            eventHandler.apply(context, data);
          });
        }
      });
      return self;
    },
  };

  function updateSize() {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;

    if (
      typeof swiper.params.width !== "undefined" &&
      swiper.params.width !== null
    ) {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }

    if (
      typeof swiper.params.height !== "undefined" &&
      swiper.params.height !== null
    ) {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }

    if (
      (width === 0 && swiper.isHorizontal()) ||
      (height === 0 && swiper.isVertical())
    ) {
      return;
    } // Subtract paddings

    width =
      width -
      parseInt($el.css("padding-left") || 0, 10) -
      parseInt($el.css("padding-right") || 0, 10);
    height =
      height -
      parseInt($el.css("padding-top") || 0, 10) -
      parseInt($el.css("padding-bottom") || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    extend(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height,
    });
  }

  function updateSlides() {
    var swiper = this;

    function getDirectionLabel(property) {
      if (swiper.isHorizontal()) {
                return property;
            } // prettier-ignore

      return {
        width: "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        marginRight: "marginBottom",
      }[property];
    }

    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }

    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl,
      swiperSize = swiper.size,
      rtl = swiper.rtlTranslate,
      wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual
      ? swiper.virtual.slides.length
      : swiper.slides.length;
    var slides = $wrapperEl.children("." + swiper.params.slideClass);
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];
    var offsetBefore = params.slidesOffsetBefore;

    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }

    var offsetAfter = params.slidesOffsetAfter;

    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }

    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.slidesGrid.length;
    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;

    if (typeof swiperSize === "undefined") {
      return;
    }

    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween =
        (parseFloat(spaceBetween.replace("%", "")) / 100) * swiperSize;
    }

    swiper.virtualSize = -spaceBetween; // reset margins

    if (rtl)
      slides.css({
        marginLeft: "",
        marginTop: "",
      });
    else
      slides.css({
        marginRight: "",
        marginBottom: "",
      });
    var slidesNumberEvenToRows;

    if (params.slidesPerColumn > 1) {
      if (
        Math.floor(slidesLength / params.slidesPerColumn) ===
        slidesLength / swiper.params.slidesPerColumn
      ) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows =
          Math.ceil(slidesLength / params.slidesPerColumn) *
          params.slidesPerColumn;
      }

      if (
        params.slidesPerView !== "auto" &&
        params.slidesPerColumnFill === "row"
      ) {
        slidesNumberEvenToRows = Math.max(
          slidesNumberEvenToRows,
          params.slidesPerView * params.slidesPerColumn
        );
      }
    } // Calc slides

    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var slide = slides.eq(i);

      if (params.slidesPerColumn > 1) {
        // Set slides order
        var newSlideOrderIndex = void 0;
        var column = void 0;
        var row = void 0;

        if (params.slidesPerColumnFill === "row" && params.slidesPerGroup > 1) {
          var groupIndex = Math.floor(
            i / (params.slidesPerGroup * params.slidesPerColumn)
          );
          var slideIndexInGroup =
            i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
          var columnsInGroup =
            groupIndex === 0
              ? params.slidesPerGroup
              : Math.min(
                  Math.ceil(
                    (slidesLength -
                      groupIndex * slidesPerColumn * params.slidesPerGroup) /
                      slidesPerColumn
                  ),
                  params.slidesPerGroup
                );
          row = Math.floor(slideIndexInGroup / columnsInGroup);
          column =
            slideIndexInGroup -
            row * columnsInGroup +
            groupIndex * params.slidesPerGroup;
          newSlideOrderIndex =
            column + (row * slidesNumberEvenToRows) / slidesPerColumn;
          slide.css({
            "-webkit-box-ordinal-group": newSlideOrderIndex,
            "-moz-box-ordinal-group": newSlideOrderIndex,
            "-ms-flex-order": newSlideOrderIndex,
            "-webkit-order": newSlideOrderIndex,
            order: newSlideOrderIndex,
          });
        } else if (params.slidesPerColumnFill === "column") {
          column = Math.floor(i / slidesPerColumn);
          row = i - column * slidesPerColumn;

          if (
            column > numFullColumns ||
            (column === numFullColumns && row === slidesPerColumn - 1)
          ) {
            row += 1;

            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - row * slidesPerRow;
        }

        slide.css(
          getDirectionLabel("margin-top"),
          row !== 0 && params.spaceBetween && params.spaceBetween + "px"
        );
      }

      if (slide.css("display") === "none") continue; // eslint-disable-line

      if (params.slidesPerView === "auto") {
        var slideStyles = getComputedStyle(slide[0]);
        var currentTransform = slide[0].style.transform;
        var currentWebKitTransform = slide[0].style.webkitTransform;

        if (currentTransform) {
          slide[0].style.transform = "none";
        }

        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = "none";
        }

        if (params.roundLengths) {
          slideSize = swiper.isHorizontal()
            ? slide.outerWidth(true)
            : slide.outerHeight(true);
        } else {
          // eslint-disable-next-line
          var width = getDirectionPropertyValue(slideStyles, "width");
          var paddingLeft = getDirectionPropertyValue(
            slideStyles,
            "padding-left"
          );
          var paddingRight = getDirectionPropertyValue(
            slideStyles,
            "padding-right"
          );
          var marginLeft = getDirectionPropertyValue(
            slideStyles,
            "margin-left"
          );
          var marginRight = getDirectionPropertyValue(
            slideStyles,
            "margin-right"
          );
          var boxSizing = slideStyles.getPropertyValue("box-sizing");

          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            var _slide$ = slide[0],
              clientWidth = _slide$.clientWidth,
              offsetWidth = _slide$.offsetWidth;
            slideSize =
              width +
              paddingLeft +
              paddingRight +
              marginLeft +
              marginRight +
              (offsetWidth - clientWidth);
          }
        }

        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }

        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }

        if (params.roundLengths) slideSize = Math.floor(slideSize);
      } else {
        slideSize =
          (swiperSize - (params.slidesPerView - 1) * spaceBetween) /
          params.slidesPerView;
        if (params.roundLengths) slideSize = Math.floor(slideSize);

        if (slides[i]) {
          slides[i].style[getDirectionLabel("width")] = slideSize + "px";
        }
      }

      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }

      slidesSizesGrid.push(slideSize);

      if (params.centeredSlides) {
        slidePosition =
          slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (
          (index - Math.min(swiper.params.slidesPerGroupSkip, index)) %
            swiper.params.slidesPerGroup ===
          0
        )
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }

      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }

    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;

    if (
      rtl &&
      wrongRTL &&
      (params.effect === "slide" || params.effect === "coverflow")
    ) {
      $wrapperEl.css({
        width: swiper.virtualSize + params.spaceBetween + "px",
      });
    }

    if (params.setWrapperSize) {
      var _$wrapperEl$css;

      $wrapperEl.css(
        ((_$wrapperEl$css = {}),
        (_$wrapperEl$css[getDirectionLabel("width")] =
          swiper.virtualSize + params.spaceBetween + "px"),
        _$wrapperEl$css)
      );
    }

    if (params.slidesPerColumn > 1) {
      var _$wrapperEl$css2;

      swiper.virtualSize =
        (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize =
        Math.ceil(swiper.virtualSize / params.slidesPerColumn) -
        params.spaceBetween;
      $wrapperEl.css(
        ((_$wrapperEl$css2 = {}),
        (_$wrapperEl$css2[getDirectionLabel("width")] =
          swiper.virtualSize + params.spaceBetween + "px"),
        _$wrapperEl$css2)
      );

      if (params.centeredSlides) {
        newSlidesGrid = [];

        for (var _i = 0; _i < snapGrid.length; _i += 1) {
          var slidesGridItem = snapGrid[_i];
          if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[_i] < swiper.virtualSize + snapGrid[0])
            newSlidesGrid.push(slidesGridItem);
        }

        snapGrid = newSlidesGrid;
      }
    } // Remove last grid elements depending on width

    if (!params.centeredSlides) {
      newSlidesGrid = [];

      for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
        var _slidesGridItem = snapGrid[_i2];
        if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

        if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(_slidesGridItem);
        }
      }

      snapGrid = newSlidesGrid;

      if (
        Math.floor(swiper.virtualSize - swiperSize) -
          Math.floor(snapGrid[snapGrid.length - 1]) >
        1
      ) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }

    if (snapGrid.length === 0) snapGrid = [0];

    if (params.spaceBetween !== 0) {
      var _slides$filter$css;

      var key =
        swiper.isHorizontal() && rtl
          ? "marginLeft"
          : getDirectionLabel("marginRight");
      slides
        .filter(function (_, slideIndex) {
          if (!params.cssMode) return true;

          if (slideIndex === slides.length - 1) {
            return false;
          }

          return true;
        })
        .css(
          ((_slides$filter$css = {}),
          (_slides$filter$css[key] = spaceBetween + "px"),
          _slides$filter$css)
        );
    }

    if (params.centeredSlides && params.centeredSlidesBounds) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize +=
          slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      var maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map(function (snap) {
        if (snap < 0) return -offsetBefore;
        if (snap > maxSnap) return maxSnap + offsetAfter;
        return snap;
      });
    }

    if (params.centerInsufficientSlides) {
      var _allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        _allSlidesSize +=
          slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      _allSlidesSize -= params.spaceBetween;

      if (_allSlidesSize < swiperSize) {
        var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }

    extend(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid,
    });

    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }

    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) swiper.checkOverflow();
      swiper.emit("snapGridLengthChange");
    }

    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }

    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }

  function updateAutoHeight(speed) {
    var swiper = this;
    var activeSlides = [];
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var newHeight = 0;
    var i;

    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }

    var getSlideByIndex = function getSlideByIndex(index) {
      if (isVirtual) {
        return swiper.slides.filter(function (el) {
          return (
            parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index
          );
        })[0];
      }

      return swiper.slides.eq(index)[0];
    }; // Find slides currently in view

    if (
      swiper.params.slidesPerView !== "auto" &&
      swiper.params.slidesPerView > 1
    ) {
      if (swiper.params.centeredSlides) {
        swiper.visibleSlides.each(function (slide) {
          activeSlides.push(slide);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          var index = swiper.activeIndex + i;
          if (index > swiper.slides.length && !isVirtual) break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    } // Find new height from highest slide in view

    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== "undefined") {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    } // Update Height

    if (newHeight) swiper.$wrapperEl.css("height", newHeight + "px");
  }

  function updateSlidesOffset() {
    var swiper = this;
    var slides = swiper.slides;

    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal()
        ? slides[i].offsetLeft
        : slides[i].offsetTop;
    }
  }

  function updateSlidesProgress(translate) {
    if (translate === void 0) {
      translate = (this && this.translate) || 0;
    }

    var swiper = this;
    var params = swiper.params;
    var slides = swiper.slides,
      rtl = swiper.rtlTranslate;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === "undefined")
      swiper.updateSlidesOffset();
    var offsetCenter = -translate;
    if (rtl) offsetCenter = translate; // Visible Slides

    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];

    for (var i = 0; i < slides.length; i += 1) {
      var slide = slides[i];
      var slideProgress =
        (offsetCenter +
          (params.centeredSlides ? swiper.minTranslate() : 0) -
          slide.swiperSlideOffset) /
        (slide.swiperSlideSize + params.spaceBetween);

      if (
        params.watchSlidesVisibility ||
        (params.centeredSlides && params.autoHeight)
      ) {
        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        var isVisible =
          (slideBefore >= 0 && slideBefore < swiper.size - 1) ||
          (slideAfter > 1 && slideAfter <= swiper.size) ||
          (slideBefore <= 0 && slideAfter >= swiper.size);

        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }

      slide.progress = rtl ? -slideProgress : slideProgress;
    }

    swiper.visibleSlides = $(swiper.visibleSlides);
  }

  function updateProgress(translate) {
    var swiper = this;

    if (typeof translate === "undefined") {
      var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

      translate =
        (swiper && swiper.translate && swiper.translate * multiplier) || 0;
    }

    var params = swiper.params;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress,
      isBeginning = swiper.isBeginning,
      isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;

    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / translatesDiff;
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }

    extend(swiper, {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd,
    });
    if (
      params.watchSlidesProgress ||
      params.watchSlidesVisibility ||
      (params.centeredSlides && params.autoHeight)
    )
      swiper.updateSlidesProgress(translate);

    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }

    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }

    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
      swiper.emit("fromEdge");
    }

    swiper.emit("progress", progress);
  }

  function updateSlidesClasses() {
    var swiper = this;
    var slides = swiper.slides,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex,
      realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(
      params.slideActiveClass +
        " " +
        params.slideNextClass +
        " " +
        params.slidePrevClass +
        " " +
        params.slideDuplicateActiveClass +
        " " +
        params.slideDuplicateNextClass +
        " " +
        params.slideDuplicatePrevClass
    );
    var activeSlide;

    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(
        "." +
          params.slideClass +
          '[data-swiper-slide-index="' +
          activeIndex +
          '"]'
      );
    } else {
      activeSlide = slides.eq(activeIndex);
    } // Active classes

    activeSlide.addClass(params.slideActiveClass);

    if (params.loop) {
      // Duplicate to all looped slides
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              ":not(." +
              params.slideDuplicateClass +
              ')[data-swiper-slide-index="' +
              realIndex +
              '"]'
          )
          .addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              "." +
              params.slideDuplicateClass +
              '[data-swiper-slide-index="' +
              realIndex +
              '"]'
          )
          .addClass(params.slideDuplicateActiveClass);
      }
    } // Next Slide

    var nextSlide = activeSlide
      .nextAll("." + params.slideClass)
      .eq(0)
      .addClass(params.slideNextClass);

    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    } // Prev Slide

    var prevSlide = activeSlide
      .prevAll("." + params.slideClass)
      .eq(0)
      .addClass(params.slidePrevClass);

    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }

    if (params.loop) {
      // Duplicate to all looped slides
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              ":not(." +
              params.slideDuplicateClass +
              ')[data-swiper-slide-index="' +
              nextSlide.attr("data-swiper-slide-index") +
              '"]'
          )
          .addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              "." +
              params.slideDuplicateClass +
              '[data-swiper-slide-index="' +
              nextSlide.attr("data-swiper-slide-index") +
              '"]'
          )
          .addClass(params.slideDuplicateNextClass);
      }

      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              ":not(." +
              params.slideDuplicateClass +
              ')[data-swiper-slide-index="' +
              prevSlide.attr("data-swiper-slide-index") +
              '"]'
          )
          .addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl
          .children(
            "." +
              params.slideClass +
              "." +
              params.slideDuplicateClass +
              '[data-swiper-slide-index="' +
              prevSlide.attr("data-swiper-slide-index") +
              '"]'
          )
          .addClass(params.slideDuplicatePrevClass);
      }
    }

    swiper.emitSlidesClasses();
  }

  function updateActiveIndex(newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      params = swiper.params,
      previousIndex = swiper.activeIndex,
      previousRealIndex = swiper.realIndex,
      previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;

    if (typeof activeIndex === "undefined") {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (
            translate >= slidesGrid[i] &&
            translate <
              slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2
          ) {
            activeIndex = i;
          } else if (
            translate >= slidesGrid[i] &&
            translate < slidesGrid[i + 1]
          ) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      } // Normalize slideIndex

      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === "undefined")
          activeIndex = 0;
      }
    }

    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex =
        skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }

    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }

      return;
    } // Get real index

    var realIndex = parseInt(
      swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") ||
        activeIndex,
      10
    );
    extend(swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex,
    });
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");

    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }

    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      swiper.emit("slideChange");
    }
  }

  function updateClickedSlide(e) {
    var swiper = this;
    var params = swiper.params;
    var slide = $(e.target).closest("." + params.slideClass)[0];
    var slideFound = false;
    var slideIndex;

    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }

    if (slide && slideFound) {
      swiper.clickedSlide = slide;

      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(
          $(slide).attr("data-swiper-slide-index"),
          10
        );
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }

    if (
      params.slideToClickedSlide &&
      swiper.clickedIndex !== undefined &&
      swiper.clickedIndex !== swiper.activeIndex
    ) {
      swiper.slideToClickedSlide();
    }
  }

  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide,
  };

  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? "x" : "y";
    }

    var swiper = this;
    var params = swiper.params,
      rtl = swiper.rtlTranslate,
      translate = swiper.translate,
      $wrapperEl = swiper.$wrapperEl;

    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }

    if (params.cssMode) {
      return translate;
    }

    var currentTranslate = getTranslate($wrapperEl[0], axis);
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }

  function setTranslate(translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      wrapperEl = swiper.wrapperEl,
      progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;

    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }

    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }

    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] =
        swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      $wrapperEl.transform(
        "translate3d(" + x + "px, " + y + "px, " + z + "px)"
      );
    }

    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }

    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }

    swiper.emit("setTranslate", swiper.translate, byController);
  }

  function minTranslate() {
    return -this.snapGrid[0];
  }

  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }

  function translateTo(
    translate,
    speed,
    runCallbacks,
    translateBounds,
    internal
  ) {
    if (translate === void 0) {
      translate = 0;
    }

    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    if (translateBounds === void 0) {
      translateBounds = true;
    }

    var swiper = this;
    var params = swiper.params,
      wrapperEl = swiper.wrapperEl;

    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var minTranslate = swiper.minTranslate();
    var maxTranslate = swiper.maxTranslate();
    var newTranslate;
    if (translateBounds && translate > minTranslate)
      newTranslate = minTranslate;
    else if (translateBounds && translate < maxTranslate)
      newTranslate = maxTranslate;
    else newTranslate = translate; // Update progress

    swiper.updateProgress(newTranslate);

    if (params.cssMode) {
      var isH = swiper.isHorizontal();

      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        // eslint-disable-next-line
        if (wrapperEl.scrollTo) {
          var _wrapperEl$scrollTo;

          wrapperEl.scrollTo(
            ((_wrapperEl$scrollTo = {}),
            (_wrapperEl$scrollTo[isH ? "left" : "top"] = -newTranslate),
            (_wrapperEl$scrollTo.behavior = "smooth"),
            _wrapperEl$scrollTo)
          );
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
        }
      }

      return true;
    }

    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);

      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);

      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }

      if (!swiper.animating) {
        swiper.animating = true;

        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener(
              "transitionend",
              swiper.onTranslateToWrapperTransitionEnd
            );
            swiper.$wrapperEl[0].removeEventListener(
              "webkitTransitionEnd",
              swiper.onTranslateToWrapperTransitionEnd
            );
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;

            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }

        swiper.$wrapperEl[0].addEventListener(
          "transitionend",
          swiper.onTranslateToWrapperTransitionEnd
        );
        swiper.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          swiper.onTranslateToWrapperTransitionEnd
        );
      }
    }

    return true;
  }

  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
    translateTo: translateTo,
  };

  function setTransition(duration, byController) {
    var swiper = this;

    if (!swiper.params.cssMode) {
      swiper.$wrapperEl.transition(duration);
    }

    swiper.emit("setTransition", duration, byController);
  }

  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    var activeIndex = swiper.activeIndex,
      params = swiper.params,
      previousIndex = swiper.previousIndex;
    if (params.cssMode) return;

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    var dir = direction;

    if (!dir) {
      if (activeIndex > previousIndex) dir = "next";
      else if (activeIndex < previousIndex) dir = "prev";
      else dir = "reset";
    }

    swiper.emit("transitionStart");

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit("slideResetTransitionStart");
        return;
      }

      swiper.emit("slideChangeTransitionStart");

      if (dir === "next") {
        swiper.emit("slideNextTransitionStart");
      } else {
        swiper.emit("slidePrevTransitionStart");
      }
    }
  }

  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    var activeIndex = swiper.activeIndex,
      previousIndex = swiper.previousIndex,
      params = swiper.params;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    var dir = direction;

    if (!dir) {
      if (activeIndex > previousIndex) dir = "next";
      else if (activeIndex < previousIndex) dir = "prev";
      else dir = "reset";
    }

    swiper.emit("transitionEnd");

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit("slideResetTransitionEnd");
        return;
      }

      swiper.emit("slideChangeTransitionEnd");

      if (dir === "next") {
        swiper.emit("slideNextTransitionEnd");
      } else {
        swiper.emit("slidePrevTransitionEnd");
      }
    }
  }

  var transition = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd,
  };

  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }

    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    if (typeof index !== "number" && typeof index !== "string") {
      throw new Error(
        "The 'index' argument cannot have type other than 'number' or 'string'. [" +
          typeof index +
          "] given."
      );
    }

    if (typeof index === "string") {
      /**
       * The `index` argument converted from `string` to `number`.
       * @type {number}
       */
      var indexAsNumber = parseInt(index, 10);
      /**
       * Determines whether the `index` argument is a valid `number`
       * after being converted from the `string` type.
       * @type {boolean}
       */

      var isValidNumber = isFinite(indexAsNumber);

      if (!isValidNumber) {
        throw new Error(
          "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
            index +
            "] given."
        );
      } // Knowing that the converted `index` is a valid number,
      // we can update the original argument's value.

      index = indexAsNumber;
    }

    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      previousIndex = swiper.previousIndex,
      activeIndex = swiper.activeIndex,
      rtl = swiper.rtlTranslate,
      wrapperEl = swiper.wrapperEl,
      enabled = swiper.enabled;

    if (
      (swiper.animating && params.preventInteractionOnTransition) ||
      (!enabled && !internal && !initial)
    ) {
      return false;
    }

    var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    var snapIndex =
      skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

    if (
      (activeIndex || params.initialSlide || 0) === (previousIndex || 0) &&
      runCallbacks
    ) {
      swiper.emit("beforeSlideChangeStart");
    }

    var translate = -snapGrid[snapIndex]; // Update progress

    swiper.updateProgress(translate); // Normalize slideIndex

    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        var normalizedTranslate = -Math.floor(translate * 100);
        var normalizedGird = Math.floor(slidesGrid[i] * 100);
        var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (
            normalizedTranslate >= normalizedGird &&
            normalizedTranslate <
              normalizedGridNext - (normalizedGridNext - normalizedGird) / 2
          ) {
            slideIndex = i;
          } else if (
            normalizedTranslate >= normalizedGird &&
            normalizedTranslate < normalizedGridNext
          ) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGird) {
          slideIndex = i;
        }
      }
    } // Directions locks

    if (swiper.initialized && slideIndex !== activeIndex) {
      if (
        !swiper.allowSlideNext &&
        translate < swiper.translate &&
        translate < swiper.minTranslate()
      ) {
        return false;
      }

      if (
        !swiper.allowSlidePrev &&
        translate > swiper.translate &&
        translate > swiper.maxTranslate()
      ) {
        if ((activeIndex || 0) !== slideIndex) return false;
      }
    }

    var direction;
    if (slideIndex > activeIndex) direction = "next";
    else if (slideIndex < activeIndex) direction = "prev";
    else direction = "reset"; // Update Index

    if (
      (rtl && -translate === swiper.translate) ||
      (!rtl && translate === swiper.translate)
    ) {
      swiper.updateActiveIndex(slideIndex); // Update Height

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }

      swiper.updateSlidesClasses();

      if (params.effect !== "slide") {
        swiper.setTranslate(translate);
      }

      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }

      return false;
    }

    if (params.cssMode) {
      var isH = swiper.isHorizontal();
      var t = -translate;

      if (rtl) {
        t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
      }

      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
      } else {
        // eslint-disable-next-line
        if (wrapperEl.scrollTo) {
          var _wrapperEl$scrollTo;

          wrapperEl.scrollTo(
            ((_wrapperEl$scrollTo = {}),
            (_wrapperEl$scrollTo[isH ? "left" : "top"] = t),
            (_wrapperEl$scrollTo.behavior = "smooth"),
            _wrapperEl$scrollTo)
          );
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        }
      }

      return true;
    }

    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.transitionStart(runCallbacks, direction);

      if (!swiper.animating) {
        swiper.animating = true;

        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener(
              "transitionend",
              swiper.onSlideToWrapperTransitionEnd
            );
            swiper.$wrapperEl[0].removeEventListener(
              "webkitTransitionEnd",
              swiper.onSlideToWrapperTransitionEnd
            );
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }

        swiper.$wrapperEl[0].addEventListener(
          "transitionend",
          swiper.onSlideToWrapperTransitionEnd
        );
        swiper.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          swiper.onSlideToWrapperTransitionEnd
        );
      }
    }

    return true;
  }

  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }

    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    var newIndex = index;

    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }

    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    var params = swiper.params,
      animating = swiper.animating,
      enabled = swiper.enabled;
    if (!enabled) return swiper;
    var increment =
      swiper.activeIndex < params.slidesPerGroupSkip
        ? 1
        : params.slidesPerGroup;

    if (params.loop) {
      if (animating && params.loopPreventsSlide) return false;
      swiper.loopFix(); // eslint-disable-next-line

      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }

    return swiper.slideTo(
      swiper.activeIndex + increment,
      speed,
      runCallbacks,
      internal
    );
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    var params = swiper.params,
      animating = swiper.animating,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled;
    if (!enabled) return swiper;

    if (params.loop) {
      if (animating && params.loopPreventsSlide) return false;
      swiper.loopFix(); // eslint-disable-next-line

      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }

    var translate = rtlTranslate ? swiper.translate : -swiper.translate;

    function normalize(val) {
      if (val < 0) return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }

    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) {
      return normalize(val);
    });
    snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap =
      snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

    if (typeof prevSnap === "undefined" && params.cssMode) {
      snapGrid.forEach(function (snap) {
        if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
      });
    }

    var prevIndex;

    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    }

    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    if (threshold === void 0) {
      threshold = 0.5;
    }

    var swiper = this;
    var index = swiper.activeIndex;
    var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    var snapIndex =
      skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

    if (translate >= swiper.snapGrid[snapIndex]) {
      // The current translate is on or after the current snap index, so the choice
      // is between the current index and the one after it.
      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];

      if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      // The current translate is before the current snap index, so the choice
      // is between the current index and the one before it.
      var prevSnap = swiper.snapGrid[snapIndex - 1];
      var _currentSnap = swiper.snapGrid[snapIndex];

      if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }

    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }

  function slideToClickedSlide() {
    var swiper = this;
    var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl;
    var slidesPerView =
      params.slidesPerView === "auto"
        ? swiper.slidesPerViewDynamic()
        : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;

    if (params.loop) {
      if (swiper.animating) return;
      realIndex = parseInt(
        $(swiper.clickedSlide).attr("data-swiper-slide-index"),
        10
      );

      if (params.centeredSlides) {
        if (
          slideToIndex < swiper.loopedSlides - slidesPerView / 2 ||
          slideToIndex >
            swiper.slides.length - swiper.loopedSlides + slidesPerView / 2
        ) {
          swiper.loopFix();
          slideToIndex = $wrapperEl
            .children(
              "." +
                params.slideClass +
                '[data-swiper-slide-index="' +
                realIndex +
                '"]:not(.' +
                params.slideDuplicateClass +
                ")"
            )
            .eq(0)
            .index();
          nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(
            "." +
              params.slideClass +
              '[data-swiper-slide-index="' +
              realIndex +
              '"]:not(.' +
              params.slideDuplicateClass +
              ")"
          )
          .eq(0)
          .index();
        nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide,
  };

  function loopCreate() {
    var swiper = this;
    var document = getDocument();
    var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

    $wrapperEl
      .children("." + params.slideClass + "." + params.slideDuplicateClass)
      .remove();
    var slides = $wrapperEl.children("." + params.slideClass);

    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum =
        params.slidesPerGroup - (slides.length % params.slidesPerGroup);

      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = $(document.createElement("div")).addClass(
            params.slideClass + " " + params.slideBlankClass
          );
          $wrapperEl.append(blankNode);
        }

        slides = $wrapperEl.children("." + params.slideClass);
      }
    }

    if (params.slidesPerView === "auto" && !params.loopedSlides)
      params.loopedSlides = slides.length;
    swiper.loopedSlides = Math.ceil(
      parseFloat(params.loopedSlides || params.slidesPerView, 10)
    );
    swiper.loopedSlides += params.loopAdditionalSlides;

    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }

    var prependSlides = [];
    var appendSlides = [];
    slides.each(function (el, index) {
      var slide = $(el);

      if (index < swiper.loopedSlides) {
        appendSlides.push(el);
      }

      if (
        index < slides.length &&
        index >= slides.length - swiper.loopedSlides
      ) {
        prependSlides.push(el);
      }

      slide.attr("data-swiper-slide-index", index);
    });

    for (var _i = 0; _i < appendSlides.length; _i += 1) {
      $wrapperEl.append(
        $(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass)
      );
    }

    for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
      $wrapperEl.prepend(
        $(prependSlides[_i2].cloneNode(true)).addClass(
          params.slideDuplicateClass
        )
      );
    }
  }

  function loopFix() {
    var swiper = this;
    swiper.emit("beforeLoopFix");
    var activeIndex = swiper.activeIndex,
      slides = swiper.slides,
      loopedSlides = swiper.loopedSlides,
      allowSlidePrev = swiper.allowSlidePrev,
      allowSlideNext = swiper.allowSlideNext,
      snapGrid = swiper.snapGrid,
      rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

    if (activeIndex < loopedSlides) {
      newIndex = slides.length - loopedSlides * 3 + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = swiper.slideTo(newIndex, 0, false, true);

      if (slideChanged && diff !== 0) {
        swiper.setTranslate(
          (rtl ? -swiper.translate : swiper.translate) - diff
        );
      }
    } else if (activeIndex >= slides.length - loopedSlides) {
      // Fix For Positive Oversliding
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;

      var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

      if (_slideChanged && diff !== 0) {
        swiper.setTranslate(
          (rtl ? -swiper.translate : swiper.translate) - diff
        );
      }
    }

    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
  }

  function loopDestroy() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      slides = swiper.slides;
    $wrapperEl
      .children(
        "." +
          params.slideClass +
          "." +
          params.slideDuplicateClass +
          ",." +
          params.slideClass +
          "." +
          params.slideBlankClass
      )
      .remove();
    slides.removeAttr("data-swiper-slide-index");
  }

  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy,
  };

  function setGrabCursor(moving) {
    var swiper = this;
    if (
      swiper.support.touch ||
      !swiper.params.simulateTouch ||
      (swiper.params.watchOverflow && swiper.isLocked) ||
      swiper.params.cssMode
    )
      return;
    var el = swiper.el;
    el.style.cursor = "move";
    el.style.cursor = moving ? "-webkit-grabbing" : "-webkit-grab";
    el.style.cursor = moving ? "-moz-grabbin" : "-moz-grab";
    el.style.cursor = moving ? "grabbing" : "grab";
  }

  function unsetGrabCursor() {
    var swiper = this;

    if (
      swiper.support.touch ||
      (swiper.params.watchOverflow && swiper.isLocked) ||
      swiper.params.cssMode
    ) {
      return;
    }

    swiper.el.style.cursor = "";
  }

  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor,
  };

  function appendSlide(slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params;

    if (params.loop) {
      swiper.loopDestroy();
    }

    if (typeof slides === "object" && "length" in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) $wrapperEl.append(slides[i]);
      }
    } else {
      $wrapperEl.append(slides);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && swiper.support.observer)) {
      swiper.update();
    }
  }

  function prependSlide(slides) {
    var swiper = this;
    var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;

    if (params.loop) {
      swiper.loopDestroy();
    }

    var newActiveIndex = activeIndex + 1;

    if (typeof slides === "object" && "length" in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) $wrapperEl.prepend(slides[i]);
      }

      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && swiper.support.observer)) {
      swiper.update();
    }

    swiper.slideTo(newActiveIndex, 0, false);
  }

  function addSlide(index, slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;

    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children("." + params.slideClass);
    }

    var baseLength = swiper.slides.length;

    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }

    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }

    var newActiveIndex =
      activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    var slidesBuffer = [];

    for (var i = baseLength - 1; i >= index; i -= 1) {
      var currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }

    if (typeof slides === "object" && "length" in slides) {
      for (var _i = 0; _i < slides.length; _i += 1) {
        if (slides[_i]) $wrapperEl.append(slides[_i]);
      }

      newActiveIndex =
        activeIndexBuffer > index
          ? activeIndexBuffer + slides.length
          : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }

    for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
      $wrapperEl.append(slidesBuffer[_i2]);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && swiper.support.observer)) {
      swiper.update();
    }

    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeSlide(slidesIndexes) {
    var swiper = this;
    var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;

    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children("." + params.slideClass);
    }

    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;

    if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove])
          swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      }

      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove])
        swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      newActiveIndex = Math.max(newActiveIndex, 0);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && swiper.support.observer)) {
      swiper.update();
    }

    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeAllSlides() {
    var swiper = this;
    var slidesIndexes = [];

    for (var i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }

    swiper.removeSlide(slidesIndexes);
  }

  var manipulation = {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    addSlide: addSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides,
  };

  function onTouchStart(event) {
    var swiper = this;
    var document = getDocument();
    var window = getWindow();
    var data = swiper.touchEventsData;
    var params = swiper.params,
      touches = swiper.touches,
      enabled = swiper.enabled;
    if (!enabled) return;

    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }

    var e = event;
    if (e.originalEvent) e = e.originalEvent;
    var $targetEl = $(e.target);

    if (params.touchEventsTarget === "wrapper") {
      if (!$targetEl.closest(swiper.wrapperEl).length) return;
    }

    data.isTouchEvent = e.type === "touchstart";
    if (!data.isTouchEvent && "which" in e && e.which === 3) return;
    if (!data.isTouchEvent && "button" in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return; // change target el for shadow root componenet

    var swipingClassHasValue =
      !!params.noSwipingClass && params.noSwipingClass !== "";

    if (
      swipingClassHasValue &&
      e.target &&
      e.target.shadowRoot &&
      event.path &&
      event.path[0]
    ) {
      $targetEl = $(event.path[0]);
    }

    if (
      params.noSwiping &&
      $targetEl.closest(
        params.noSwipingSelector
          ? params.noSwipingSelector
          : "." + params.noSwipingClass
      )[0]
    ) {
      swiper.allowClick = true;
      return;
    }

    if (params.swipeHandler) {
      if (!$targetEl.closest(params.swipeHandler)[0]) return;
    }

    touches.currentX =
      e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY =
      e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

    var edgeSwipeDetection =
      params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold =
      params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

    if (
      edgeSwipeDetection &&
      (startX <= edgeSwipeThreshold ||
        startX >= window.innerWidth - edgeSwipeThreshold)
    ) {
      if (edgeSwipeDetection === "prevent") {
        event.preventDefault();
      } else {
        return;
      }
    }

    extend(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined,
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;

    if (e.type !== "touchstart") {
      var preventDefault = true;
      if ($targetEl.is(data.formElements)) preventDefault = false;

      if (
        document.activeElement &&
        $(document.activeElement).is(data.formElements) &&
        document.activeElement !== $targetEl[0]
      ) {
        document.activeElement.blur();
      }

      var shouldPreventDefault =
        preventDefault &&
        swiper.allowTouchMove &&
        params.touchStartPreventDefault;

      if (
        (params.touchStartForcePreventDefault || shouldPreventDefault) &&
        !$targetEl[0].isContentEditable
      ) {
        e.preventDefault();
      }
    }

    swiper.emit("touchStart", e);
  }

  function onTouchMove(event) {
    var document = getDocument();
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      enabled = swiper.enabled;
    if (!enabled) return;
    var e = event;
    if (e.originalEvent) e = e.originalEvent;

    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit("touchMoveOpposite", e);
      }

      return;
    }

    if (data.isTouchEvent && e.type !== "touchmove") return;
    var targetTouch =
      e.type === "touchmove" &&
      e.targetTouches &&
      (e.targetTouches[0] || e.changedTouches[0]);
    var pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX;
    var pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;

    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }

    if (!swiper.allowTouchMove) {
      // isMoved = true;
      swiper.allowClick = false;

      if (data.isTouched) {
        extend(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY,
        });
        data.touchStartTime = now();
      }

      return;
    }

    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (
          (pageY < touches.startY &&
            swiper.translate <= swiper.maxTranslate()) ||
          (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
        ) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (
        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) ||
        (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      ) {
        return;
      }
    }

    if (data.isTouchEvent && document.activeElement) {
      if (
        e.target === document.activeElement &&
        $(e.target).is(data.formElements)
      ) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }

    if (data.allowTouchCallbacks) {
      swiper.emit("touchMove", e);
    }

    if (e.targetTouches && e.targetTouches.length > 1) return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (
      swiper.params.threshold &&
      Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) <
        swiper.params.threshold
    )
      return;

    if (typeof data.isScrolling === "undefined") {
      var touchAngle;

      if (
        (swiper.isHorizontal() && touches.currentY === touches.startY) ||
        (swiper.isVertical() && touches.currentX === touches.startX)
      ) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle =
            (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
          data.isScrolling = swiper.isHorizontal()
            ? touchAngle > params.touchAngle
            : 90 - touchAngle > params.touchAngle;
        }
      }
    }

    if (data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }

    if (typeof data.startMoving === "undefined") {
      if (
        touches.currentX !== touches.startX ||
        touches.currentY !== touches.startY
      ) {
        data.startMoving = true;
      }
    }

    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }

    if (!data.startMoving) {
      return;
    }

    swiper.allowClick = false;

    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }

    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }

    if (!data.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }

      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);

      if (swiper.animating) {
        swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
      }

      data.allowMomentumBounce = false; // Grab Cursor

      if (
        params.grabCursor &&
        (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)
      ) {
        swiper.setGrabCursor(true);
      }

      swiper.emit("sliderFirstMove", e);
    }

    swiper.emit("sliderMove", e);
    data.isMoved = true;
    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) diff = -diff;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    data.currentTranslate = diff + data.startTranslate;
    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;

    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }

    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance)
        data.currentTranslate =
          swiper.minTranslate() -
          1 +
          Math.pow(
            -swiper.minTranslate() + data.startTranslate + diff,
            resistanceRatio
          );
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance)
        data.currentTranslate =
          swiper.maxTranslate() +
          1 -
          Math.pow(
            swiper.maxTranslate() - data.startTranslate - diff,
            resistanceRatio
          );
    }

    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    } // Directions locks

    if (
      !swiper.allowSlideNext &&
      swiper.swipeDirection === "next" &&
      data.currentTranslate < data.startTranslate
    ) {
      data.currentTranslate = data.startTranslate;
    }

    if (
      !swiper.allowSlidePrev &&
      swiper.swipeDirection === "prev" &&
      data.currentTranslate > data.startTranslate
    ) {
      data.currentTranslate = data.startTranslate;
    }

    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    } // Threshold

    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal()
            ? touches.currentX - touches.startX
            : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }

    if (!params.followFinger || params.cssMode) return; // Update active index in free mode

    if (
      params.freeMode ||
      params.watchSlidesProgress ||
      params.watchSlidesVisibility
    ) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    if (params.freeMode) {
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? "startX" : "startY"],
          time: data.touchStartTime,
        });
      }

      data.velocities.push({
        position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
        time: now(),
      });
    } // Update progress

    swiper.updateProgress(data.currentTranslate); // Update translate

    swiper.setTranslate(data.currentTranslate);
  }

  function onTouchEnd(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      $wrapperEl = swiper.$wrapperEl,
      slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      enabled = swiper.enabled;
    if (!enabled) return;
    var e = event;
    if (e.originalEvent) e = e.originalEvent;

    if (data.allowTouchCallbacks) {
      swiper.emit("touchEnd", e);
    }

    data.allowTouchCallbacks = false;

    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }

      data.isMoved = false;
      data.startMoving = false;
      return;
    } // Return Grab Cursor

    if (
      params.grabCursor &&
      data.isMoved &&
      data.isTouched &&
      (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)
    ) {
      swiper.setGrabCursor(false);
    } // Time diff

    var touchEndTime = now();
    var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit("tap click", e);

      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e);
      }
    }

    data.lastClickTime = now();
    nextTick(function () {
      if (!swiper.destroyed) swiper.allowClick = true;
    });

    if (
      !data.isTouched ||
      !data.isMoved ||
      !swiper.swipeDirection ||
      touches.diff === 0 ||
      data.currentTranslate === data.startTranslate
    ) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }

    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    var currentPos;

    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }

    if (params.cssMode) {
      return;
    }

    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }

      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }

        return;
      }

      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          var lastMoveEvent = data.velocities.pop();
          var velocityEvent = data.velocities.pop();
          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;

          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          } // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.

          if (time > 150 || now() - lastMoveEvent.time > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }

        swiper.velocity *= params.freeModeMomentumVelocityRatio;
        data.velocities.length = 0;
        var momentumDuration = 1000 * params.freeModeMomentumRatio;
        var momentumDistance = swiper.velocity * momentumDuration;
        var newPosition = swiper.translate + momentumDistance;
        if (rtl) newPosition = -newPosition;
        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount =
          Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        var needsLoopFix;

        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }

            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }

          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }

            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }

          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (params.freeModeSticky) {
          var nextSlide;

          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }

          if (
            Math.abs(snapGrid[nextSlide] - newPosition) <
              Math.abs(snapGrid[nextSlide - 1] - newPosition) ||
            swiper.swipeDirection === "next"
          ) {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }

          newPosition = -newPosition;
        }

        if (needsLoopFix) {
          swiper.once("transitionEnd", function () {
            swiper.loopFix();
          });
        } // Fix duration

        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs(
              (-newPosition - swiper.translate) / swiper.velocity
            );
          } else {
            momentumDuration = Math.abs(
              (newPosition - swiper.translate) / swiper.velocity
            );
          }

          if (params.freeModeSticky) {
            // If freeModeSticky is active and the user ends a swipe with a slow-velocity
            // event, then durations can be 20+ seconds to slide one (or zero!) slides.
            // It's easy to see this when simulating touch with mouse events. To fix this,
            // limit single-slide swipes to the default slide duration. This also has the
            // nice side effect of matching slide speed if the user stopped moving before
            // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
            // For faster swipes, also apply limits (albeit higher ones).
            var moveDistance = Math.abs(
              (rtl ? -newPosition : newPosition) - swiper.translate
            );
            var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }

        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce)
              return;
            swiper.emit("momentumBounce");
            swiper.setTransition(params.speed);
            setTimeout(function () {
              swiper.setTranslate(afterBouncePosition);
              $wrapperEl.transitionEnd(function () {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }, 0);
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);

          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.emit("_freeModeNoMomentumRelease");
          swiper.updateProgress(newPosition);
        }

        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      } else if (params.freeMode) {
        swiper.emit("_freeModeNoMomentumRelease");
      }

      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      return;
    } // Find current slide

    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];

    for (
      var i = 0;
      i < slidesGrid.length;
      i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup
    ) {
      var _increment =
        i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

      if (typeof slidesGrid[i + _increment] !== "undefined") {
        if (
          currentPos >= slidesGrid[i] &&
          currentPos < slidesGrid[i + _increment]
        ) {
          stopIndex = i;
          groupSize = slidesGrid[i + _increment] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize =
          slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    } // Find current slide size

    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    var increment =
      stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }

      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio)
          swiper.slideTo(stopIndex + increment);
        else swiper.slideTo(stopIndex);
      }

      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio)
          swiper.slideTo(stopIndex + increment);
        else swiper.slideTo(stopIndex);
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }

      var isNavButtonTarget =
        swiper.navigation &&
        (e.target === swiper.navigation.nextEl ||
          e.target === swiper.navigation.prevEl);

      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(stopIndex + increment);
        }

        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }

  function onResize() {
    var swiper = this;
    var params = swiper.params,
      el = swiper.el;
    if (el && el.offsetWidth === 0) return; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    } // Save locks

    var allowSlideNext = swiper.allowSlideNext,
      allowSlidePrev = swiper.allowSlidePrev,
      snapGrid = swiper.snapGrid; // Disable locks on resize

    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();

    if (
      (params.slidesPerView === "auto" || params.slidesPerView > 1) &&
      swiper.isEnd &&
      !swiper.isBeginning &&
      !swiper.params.centeredSlides
    ) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }

    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      swiper.autoplay.run();
    } // Return locks after resize

    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;

    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  function onClick(e) {
    var swiper = this;
    if (!swiper.enabled) return;

    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) e.preventDefault();

      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  function onScroll() {
    var swiper = this;
    var wrapperEl = swiper.wrapperEl,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;

    if (swiper.isHorizontal()) {
      if (rtlTranslate) {
        swiper.translate =
          wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
      } else {
        swiper.translate = -wrapperEl.scrollLeft;
      }
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    } // eslint-disable-next-line

    if (swiper.translate === -0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }

    if (newProgress !== swiper.progress) {
      swiper.updateProgress(
        rtlTranslate ? -swiper.translate : swiper.translate
      );
    }

    swiper.emit("setTranslate", swiper.translate, false);
  }

  var dummyEventAttached = false;

  function dummyEventListener() {}

  function attachEvents() {
    var swiper = this;
    var document = getDocument();
    var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);

    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }

    swiper.onClick = onClick.bind(swiper);
    var capture = !!params.nested; // Touch Events

    if (!support.touch && support.pointerEvents) {
      el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
      document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
      document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (support.touch) {
        var passiveListener =
          touchEvents.start === "touchstart" &&
          support.passiveListener &&
          params.passiveListeners
            ? {
                passive: true,
                capture: false,
              }
            : false;
        el.addEventListener(
          touchEvents.start,
          swiper.onTouchStart,
          passiveListener
        );
        el.addEventListener(
          touchEvents.move,
          swiper.onTouchMove,
          support.passiveListener
            ? {
                passive: false,
                capture: capture,
              }
            : capture
        );
        el.addEventListener(
          touchEvents.end,
          swiper.onTouchEnd,
          passiveListener
        );

        if (touchEvents.cancel) {
          el.addEventListener(
            touchEvents.cancel,
            swiper.onTouchEnd,
            passiveListener
          );
        }

        if (!dummyEventAttached) {
          document.addEventListener("touchstart", dummyEventListener);
          dummyEventAttached = true;
        }
      }

      if (
        (params.simulateTouch && !device.ios && !device.android) ||
        (params.simulateTouch && !support.touch && device.ios)
      ) {
        el.addEventListener("mousedown", swiper.onTouchStart, false);
        document.addEventListener("mousemove", swiper.onTouchMove, capture);
        document.addEventListener("mouseup", swiper.onTouchEnd, false);
      }
    } // Prevent Links Clicks

    if (params.preventClicks || params.preventClicksPropagation) {
      el.addEventListener("click", swiper.onClick, true);
    }

    if (params.cssMode) {
      wrapperEl.addEventListener("scroll", swiper.onScroll);
    } // Resize handler

    if (params.updateOnWindowResize) {
      swiper.on(
        device.ios || device.android
          ? "resize orientationchange observerUpdate"
          : "resize observerUpdate",
        onResize,
        true
      );
    } else {
      swiper.on("observerUpdate", onResize, true);
    }
  }

  function detachEvents() {
    var swiper = this;
    var document = getDocument();
    var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
    var capture = !!params.nested; // Touch Events

    if (!support.touch && support.pointerEvents) {
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
      document.removeEventListener(
        touchEvents.move,
        swiper.onTouchMove,
        capture
      );
      document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (support.touch) {
        var passiveListener =
          touchEvents.start === "onTouchStart" &&
          support.passiveListener &&
          params.passiveListeners
            ? {
                passive: true,
                capture: false,
              }
            : false;
        el.removeEventListener(
          touchEvents.start,
          swiper.onTouchStart,
          passiveListener
        );
        el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        el.removeEventListener(
          touchEvents.end,
          swiper.onTouchEnd,
          passiveListener
        );

        if (touchEvents.cancel) {
          el.removeEventListener(
            touchEvents.cancel,
            swiper.onTouchEnd,
            passiveListener
          );
        }
      }

      if (
        (params.simulateTouch && !device.ios && !device.android) ||
        (params.simulateTouch && !support.touch && device.ios)
      ) {
        el.removeEventListener("mousedown", swiper.onTouchStart, false);
        document.removeEventListener("mousemove", swiper.onTouchMove, capture);
        document.removeEventListener("mouseup", swiper.onTouchEnd, false);
      }
    } // Prevent Links Clicks

    if (params.preventClicks || params.preventClicksPropagation) {
      el.removeEventListener("click", swiper.onClick, true);
    }

    if (params.cssMode) {
      wrapperEl.removeEventListener("scroll", swiper.onScroll);
    } // Resize handler

    swiper.off(
      device.ios || device.android
        ? "resize orientationchange observerUpdate"
        : "resize observerUpdate",
      onResize
    );
  }

  var events = {
    attachEvents: attachEvents,
    detachEvents: detachEvents,
  };

  function setBreakpoint() {
    var swiper = this;
    var activeIndex = swiper.activeIndex,
      initialized = swiper.initialized,
      _swiper$loopedSlides = swiper.loopedSlides,
      loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
      params = swiper.params,
      $el = swiper.$el;
    var breakpoints = params.breakpoints;
    if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0))
      return; // Get breakpoint for window width and update parameters

    var breakpoint = swiper.getBreakpoint(
      breakpoints,
      swiper.params.breakpointsBase,
      swiper.el
    );
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    var breakpointOnlyParams =
      breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

    if (breakpointOnlyParams) {
      [
        "slidesPerView",
        "spaceBetween",
        "slidesPerGroup",
        "slidesPerGroupSkip",
        "slidesPerColumn",
      ].forEach(function (param) {
        var paramValue = breakpointOnlyParams[param];
        if (typeof paramValue === "undefined") return;

        if (
          param === "slidesPerView" &&
          (paramValue === "AUTO" || paramValue === "auto")
        ) {
          breakpointOnlyParams[param] = "auto";
        } else if (param === "slidesPerView") {
          breakpointOnlyParams[param] = parseFloat(paramValue);
        } else {
          breakpointOnlyParams[param] = parseInt(paramValue, 10);
        }
      });
    }

    var breakpointParams = breakpointOnlyParams || swiper.originalParams;
    var wasMultiRow = params.slidesPerColumn > 1;
    var isMultiRow = breakpointParams.slidesPerColumn > 1;
    var wasEnabled = params.enabled;

    if (wasMultiRow && !isMultiRow) {
      $el.removeClass(
        params.containerModifierClass +
          "multirow " +
          params.containerModifierClass +
          "multirow-column"
      );
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      $el.addClass(params.containerModifierClass + "multirow");

      if (breakpointParams.slidesPerColumnFill === "column") {
        $el.addClass(params.containerModifierClass + "multirow-column");
      }

      swiper.emitContainerClasses();
    }

    var directionChanged =
      breakpointParams.direction &&
      breakpointParams.direction !== params.direction;
    var needsReLoop =
      params.loop &&
      (breakpointParams.slidesPerView !== params.slidesPerView ||
        directionChanged);

    if (directionChanged && initialized) {
      swiper.changeDirection();
    }

    extend(swiper.params, breakpointParams);
    var isEnabled = swiper.params.enabled;
    extend(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
    });

    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }

    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);

    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo(
        activeIndex - loopedSlides + swiper.loopedSlides,
        0,
        false
      );
    }

    swiper.emit("breakpoint", breakpointParams);
  }

  function getBreakpoint(breakpoints, base, containerEl) {
    if (base === void 0) {
      base = "window";
    }

    if (!breakpoints || (base === "container" && !containerEl))
      return undefined;
    var breakpoint = false;
    var window = getWindow();
    var currentWidth =
      base === "window" ? window.innerWidth : containerEl.clientWidth;
    var currentHeight =
      base === "window" ? window.innerHeight : containerEl.clientHeight;
    var points = Object.keys(breakpoints).map(function (point) {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        var minRatio = parseFloat(point.substr(1));
        var value = currentHeight * minRatio;
        return {
          value: value,
          point: point,
        };
      }

      return {
        value: point,
        point: point,
      };
    });
    points.sort(function (a, b) {
      return parseInt(a.value, 10) - parseInt(b.value, 10);
    });

    for (var i = 0; i < points.length; i += 1) {
      var _points$i = points[i],
        point = _points$i.point,
        value = _points$i.value;

      if (value <= currentWidth) {
        breakpoint = point;
      }
    }

    return breakpoint || "max";
  }

  var breakpoints = {
    setBreakpoint: setBreakpoint,
    getBreakpoint: getBreakpoint,
  };

  function prepareClasses(entries, prefix) {
    var resultClasses = [];
    entries.forEach(function (item) {
      if (typeof item === "object") {
        Object.keys(item).forEach(function (classNames) {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }

  function addClasses() {
    var swiper = this;
    var classNames = swiper.classNames,
            params = swiper.params,
            rtl = swiper.rtl,
            $el = swiper.$el,
            device = swiper.device,
            support = swiper.support; // prettier-ignore

    var suffixes = prepareClasses(
      [
        "initialized",
        params.direction,
        {
          "pointer-events": support.pointerEvents && !support.touch,
        },
        {
          "free-mode": params.freeMode,
        },
        {
          autoheight: params.autoHeight,
        },
        {
          rtl: rtl,
        },
        {
          multirow: params.slidesPerColumn > 1,
        },
        {
          "multirow-column":
            params.slidesPerColumn > 1 &&
            params.slidesPerColumnFill === "column",
        },
        {
          android: device.android,
        },
        {
          ios: device.ios,
        },
        {
          "css-mode": params.cssMode,
        },
      ],
      params.containerModifierClass
    );
    classNames.push.apply(classNames, suffixes);
    $el.addClass([].concat(classNames).join(" "));
    swiper.emitContainerClasses();
  }

  function removeClasses() {
    var swiper = this;
    var $el = swiper.$el,
      classNames = swiper.classNames;
    $el.removeClass(classNames.join(" "));
    swiper.emitContainerClasses();
  }

  var classes = {
    addClasses: addClasses,
    removeClasses: removeClasses,
  };

  function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    var window = getWindow();
    var image;

    function onReady() {
      if (callback) callback();
    }

    var isPicture = $(imageEl).parent("picture")[0];

    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
      if (src) {
        image = new window.Image();
        image.onload = onReady;
        image.onerror = onReady;

        if (sizes) {
          image.sizes = sizes;
        }

        if (srcset) {
          image.srcset = srcset;
        }

        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      // image already loaded...
      onReady();
    }
  }

  function preloadImages() {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find("img");

    function onReady() {
      if (
        typeof swiper === "undefined" ||
        swiper === null ||
        !swiper ||
        swiper.destroyed
      )
        return;
      if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) swiper.update();
        swiper.emit("imagesReady");
      }
    }

    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
      var imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(
        imageEl,
        imageEl.currentSrc || imageEl.getAttribute("src"),
        imageEl.srcset || imageEl.getAttribute("srcset"),
        imageEl.sizes || imageEl.getAttribute("sizes"),
        true,
        onReady
      );
    }
  }

  var images = {
    loadImage: loadImage,
    preloadImages: preloadImages,
  };

  function checkOverflow() {
    var swiper = this;
    var params = swiper.params;
    var wasLocked = swiper.isLocked;
    var lastSlidePosition =
      swiper.slides.length > 0 &&
      params.slidesOffsetBefore +
        params.spaceBetween * (swiper.slides.length - 1) +
        swiper.slides[0].offsetWidth * swiper.slides.length;

    if (
      params.slidesOffsetBefore &&
      params.slidesOffsetAfter &&
      lastSlidePosition
    ) {
      swiper.isLocked = lastSlidePosition <= swiper.size;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }

    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked; // events

    if (wasLocked !== swiper.isLocked)
      swiper.emit(swiper.isLocked ? "lock" : "unlock");

    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      if (swiper.navigation) swiper.navigation.update();
    }
  }

  var checkOverflow$1 = {
    checkOverflow: checkOverflow,
  };

  var defaults = {
    init: true,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: false,
    nested: false,
    enabled: true,
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: false,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    // NS
    containerModifierClass: "swiper-container-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false,
  };

  var prototypes = {
    modular: modular,
    eventsEmitter: eventsEmitter,
    update: update,
    translate: translate,
    transition: transition,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    manipulation: manipulation,
    events: events,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images,
  };
  var extendedDefaults = {};

  var Swiper = /*#__PURE__*/ (function () {
    function Swiper() {
      var el;
      var params;

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      if (
        args.length === 1 &&
        args[0].constructor &&
        Object.prototype.toString.call(args[0]).slice(8, -1) === "Object"
      ) {
        params = args[0];
      } else {
        el = args[0];
        params = args[1];
      }

      if (!params) params = {};
      params = extend({}, params);
      if (el && !params.el) params.el = el;

      if (params.el && $(params.el).length > 1) {
        var swipers = [];
        $(params.el).each(function (containerEl) {
          var newParams = extend({}, params, {
            el: containerEl,
          });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      } // Swiper Instance

      var swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent,
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];

      if (typeof swiper.modules === "undefined") {
        swiper.modules = {};
      }

      Object.keys(swiper.modules).forEach(function (moduleName) {
        var module = swiper.modules[moduleName];

        if (module.params) {
          var moduleParamName = Object.keys(module.params)[0];
          var moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== "object" || moduleParams === null) return;
          if (!(moduleParamName in params && "enabled" in moduleParams)) return;

          if (params[moduleParamName] === true) {
            params[moduleParamName] = {
              enabled: true,
            };
          }

          if (
            typeof params[moduleParamName] === "object" &&
            !("enabled" in params[moduleParamName])
          ) {
            params[moduleParamName].enabled = true;
          }

          if (!params[moduleParamName])
            params[moduleParamName] = {
              enabled: false,
            };
        }
      }); // Extend defaults with modules params

      var swiperParams = extend({}, defaults);
      swiper.useParams(swiperParams); // Extend defaults with passed params

      swiper.params = extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend({}, swiper.params);
      swiper.passedParams = extend({}, params); // add event listeners

      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach(function (eventName) {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }

      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      } // Save Dom lib

      swiper.$ = $; // Extend Swiper

      extend(swiper, {
        enabled: swiper.params.enabled,
        el: el,
        // Classes
        classNames: [],
        // Slides
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical: function isVertical() {
          return swiper.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEvents: (function touchEvents() {
          var touch = ["touchstart", "touchmove", "touchend", "touchcancel"];
          var desktop = ["mousedown", "mousemove", "mouseup"];

          if (swiper.support.pointerEvents) {
            desktop = ["pointerdown", "pointermove", "pointerup"];
          }

          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
            cancel: touch[3],
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2],
          };
          return swiper.support.touch || !swiper.params.simulateTouch
            ? swiper.touchEventsTouch
            : swiper.touchEventsDesktop;
        })(),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          formElements: "input, select, option, textarea, button, video, label",
          // Last click time
          lastClickTime: now(),
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined,
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0,
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0,
      }); // Install Modules

      swiper.useModules();
      swiper.emit("_swiper"); // Init

      if (swiper.params.init) {
        swiper.init();
      } // Return app instance

      return swiper;
    }

    var _proto = Swiper.prototype;

    _proto.enable = function enable() {
      var swiper = this;
      if (swiper.enabled) return;
      swiper.enabled = true;

      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      swiper.emit("enable");
    };

    _proto.disable = function disable() {
      var swiper = this;
      if (!swiper.enabled) return;
      swiper.enabled = false;

      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }

      swiper.emit("disable");
    };

    _proto.setProgress = function setProgress(progress, speed) {
      var swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      var min = swiper.minTranslate();
      var max = swiper.maxTranslate();
      var current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    };

    _proto.emitContainerClasses = function emitContainerClasses() {
      var swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      var classes = swiper.el.className.split(" ").filter(function (className) {
        return (
          className.indexOf("swiper-container") === 0 ||
          className.indexOf(swiper.params.containerModifierClass) === 0
        );
      });
      swiper.emit("_containerClasses", classes.join(" "));
    };

    _proto.getSlideClasses = function getSlideClasses(slideEl) {
      var swiper = this;
      return slideEl.className
        .split(" ")
        .filter(function (className) {
          return (
            className.indexOf("swiper-slide") === 0 ||
            className.indexOf(swiper.params.slideClass) === 0
          );
        })
        .join(" ");
    };

    _proto.emitSlidesClasses = function emitSlidesClasses() {
      var swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      var updates = [];
      swiper.slides.each(function (slideEl) {
        var classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl: slideEl,
          classNames: classNames,
        });
        swiper.emit("_slideClass", slideEl, classNames);
      });
      swiper.emit("_slideClasses", updates);
    };

    _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
      var swiper = this;
      var params = swiper.params,
        slides = swiper.slides,
        slidesGrid = swiper.slidesGrid,
        swiperSize = swiper.size,
        activeIndex = swiper.activeIndex;
      var spv = 1;

      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;

        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }

        for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
          if (slides[_i] && !breakLoop) {
            slideSize += slides[_i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
          if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }

      return spv;
    };

    _proto.update = function update() {
      var swiper = this;
      if (!swiper || swiper.destroyed) return;
      var snapGrid = swiper.snapGrid,
        params = swiper.params; // Breakpoints

      if (params.breakpoints) {
        swiper.setBreakpoint();
      }

      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate
          ? swiper.translate * -1
          : swiper.translate;
        var newTranslate = Math.min(
          Math.max(translateValue, swiper.maxTranslate()),
          swiper.minTranslate()
        );
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      var translated;

      if (swiper.params.freeMode) {
        setTranslate();

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if (
          (swiper.params.slidesPerView === "auto" ||
            swiper.params.slidesPerView > 1) &&
          swiper.isEnd &&
          !swiper.params.centeredSlides
        ) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }

        if (!translated) {
          setTranslate();
        }
      }

      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }

      swiper.emit("update");
    };

    _proto.changeDirection = function changeDirection(
      newDirection,
      needUpdate
    ) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }

      var swiper = this;
      var currentDirection = swiper.params.direction;

      if (!newDirection) {
        // eslint-disable-next-line
        newDirection =
          currentDirection === "horizontal" ? "vertical" : "horizontal";
      }

      if (
        newDirection === currentDirection ||
        (newDirection !== "horizontal" && newDirection !== "vertical")
      ) {
        return swiper;
      }

      swiper.$el
        .removeClass(
          "" + swiper.params.containerModifierClass + currentDirection
        )
        .addClass("" + swiper.params.containerModifierClass + newDirection);
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.each(function (slideEl) {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate) swiper.update();
      return swiper;
    };

    _proto.mount = function mount(el) {
      var swiper = this;
      if (swiper.mounted) return true; // Find el

      var $el = $(el || swiper.params.el);
      el = $el[0];

      if (!el) {
        return false;
      }

      el.swiper = swiper; // Find Wrapper

      var $wrapperEl;

      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        $wrapperEl = $(
          el.shadowRoot.querySelector("." + swiper.params.wrapperClass)
        ); // Children needs to return slot items

        $wrapperEl.children = function (options) {
          return $el.children(options);
        };
      } else {
        $wrapperEl = $el.children("." + swiper.params.wrapperClass);
      }

      extend(swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],
        mounted: true,
        // RTL
        rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
        rtlTranslate:
          swiper.params.direction === "horizontal" &&
          (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
        wrongRTL: $wrapperEl.css("display") === "-webkit-box",
      });
      return true;
    };

    _proto.init = function init(el) {
      var swiper = this;
      if (swiper.initialized) return swiper;
      var mounted = swiper.mount(el);
      if (mounted === false) return swiper;
      swiper.emit("beforeInit"); // Set breakpoint

      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      } // Add Classes

      swiper.addClasses(); // Create loop

      if (swiper.params.loop) {
        swiper.loopCreate();
      } // Update size

      swiper.updateSize(); // Update slides

      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      } // Set Grab Cursor

      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      } // Slide To Initial Slide

      if (swiper.params.loop) {
        swiper.slideTo(
          swiper.params.initialSlide + swiper.loopedSlides,
          0,
          swiper.params.runCallbacksOnInit,
          false,
          true
        );
      } else {
        swiper.slideTo(
          swiper.params.initialSlide,
          0,
          swiper.params.runCallbacksOnInit,
          false,
          true
        );
      } // Attach events

      swiper.attachEvents(); // Init Flag

      swiper.initialized = true; // Emit

      swiper.emit("init");
      swiper.emit("afterInit");
      return swiper;
    };

    _proto.destroy = function destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }

      if (cleanStyles === void 0) {
        cleanStyles = true;
      }

      var swiper = this;
      var params = swiper.params,
        $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides;

      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }

      swiper.emit("beforeDestroy"); // Init Flag

      swiper.initialized = false; // Detach events

      swiper.detachEvents(); // Destroy loop

      if (params.loop) {
        swiper.loopDestroy();
      } // Cleanup styles

      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr("style");
        $wrapperEl.removeAttr("style");

        if (slides && slides.length) {
          slides
            .removeClass(
              [
                params.slideVisibleClass,
                params.slideActiveClass,
                params.slideNextClass,
                params.slidePrevClass,
              ].join(" ")
            )
            .removeAttr("style")
            .removeAttr("data-swiper-slide-index");
        }
      }

      swiper.emit("destroy"); // Detach emitter events

      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        deleteProps(swiper);
      }

      swiper.destroyed = true;
      return null;
    };

    Swiper.extendDefaults = function extendDefaults(newDefaults) {
      extend(extendedDefaults, newDefaults);
    };

    Swiper.installModule = function installModule(module) {
      if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
      var name =
        module.name ||
        Object.keys(Swiper.prototype.modules).length + "_" + now();
      Swiper.prototype.modules[name] = module;
    };

    Swiper.use = function use(module) {
      if (Array.isArray(module)) {
        module.forEach(function (m) {
          return Swiper.installModule(m);
        });
        return Swiper;
      }

      Swiper.installModule(module);
      return Swiper;
    };

    _createClass(Swiper, null, [
      {
        key: "extendedDefaults",
        get: function get() {
          return extendedDefaults;
        },
      },
      {
        key: "defaults",
        get: function get() {
          return defaults;
        },
      },
    ]);

    return Swiper;
  })();

  Object.keys(prototypes).forEach(function (prototypeGroup) {
    Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer$1]);

  var Virtual = {
    update: function update(force) {
      var swiper = this;
      var _swiper$params = swiper.params,
        slidesPerView = _swiper$params.slidesPerView,
        slidesPerGroup = _swiper$params.slidesPerGroup,
        centeredSlides = _swiper$params.centeredSlides;
      var _swiper$params$virtua = swiper.params.virtual,
        addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
        addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
      var _swiper$virtual = swiper.virtual,
        previousFrom = _swiper$virtual.from,
        previousTo = _swiper$virtual.to,
        slides = _swiper$virtual.slides,
        previousSlidesGrid = _swiper$virtual.slidesGrid,
        renderSlide = _swiper$virtual.renderSlide,
        previousOffset = _swiper$virtual.offset;
      swiper.updateActiveIndex();
      var activeIndex = swiper.activeIndex || 0;
      var offsetProp;
      if (swiper.rtlTranslate) offsetProp = "right";
      else offsetProp = swiper.isHorizontal() ? "left" : "top";
      var slidesAfter;
      var slidesBefore;

      if (centeredSlides) {
        slidesAfter =
          Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
        slidesBefore =
          Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
        slidesBefore = slidesPerGroup + addSlidesBefore;
      }

      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
      extend(swiper.virtual, {
        from: from,
        to: to,
        offset: offset,
        slidesGrid: swiper.slidesGrid,
      });

      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();

        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      }

      if (previousFrom === from && previousTo === to && !force) {
        if (
          swiper.slidesGrid !== previousSlidesGrid &&
          offset !== previousOffset
        ) {
          swiper.slides.css(offsetProp, offset + "px");
        }

        swiper.updateProgress();
        return;
      }

      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: (function getSlides() {
            var slidesToRender = [];

            for (var i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }

            return slidesToRender;
          })(),
        });

        if (swiper.params.virtual.renderExternalUpdate) {
          onRendered();
        }

        return;
      }

      var prependIndexes = [];
      var appendIndexes = [];

      if (force) {
        swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
      } else {
        for (var i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl
              .find(
                "." +
                  swiper.params.slideClass +
                  '[data-swiper-slide-index="' +
                  i +
                  '"]'
              )
              .remove();
          }
        }
      }

      for (var _i = 0; _i < slides.length; _i += 1) {
        if (_i >= from && _i <= to) {
          if (typeof previousTo === "undefined" || force) {
            appendIndexes.push(_i);
          } else {
            if (_i > previousTo) appendIndexes.push(_i);
            if (_i < previousFrom) prependIndexes.push(_i);
          }
        }
      }

      appendIndexes.forEach(function (index) {
        swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes
        .sort(function (a, b) {
          return b - a;
        })
        .forEach(function (index) {
          swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
      swiper.$wrapperEl
        .children(".swiper-slide")
        .css(offsetProp, offset + "px");
      onRendered();
    },
    renderSlide: function renderSlide(slide, index) {
      var swiper = this;
      var params = swiper.params.virtual;

      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }

      var $slideEl = params.renderSlide
        ? $(params.renderSlide.call(swiper, slide, index))
        : $(
            '<div class="' +
              swiper.params.slideClass +
              '" data-swiper-slide-index="' +
              index +
              '">' +
              slide +
              "</div>"
          );
      if (!$slideEl.attr("data-swiper-slide-index"))
        $slideEl.attr("data-swiper-slide-index", index);
      if (params.cache) swiper.virtual.cache[index] = $slideEl;
      return $slideEl;
    },
    appendSlide: function appendSlide(slides) {
      var swiper = this;

      if (typeof slides === "object" && "length" in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.push(slides[i]);
        }
      } else {
        swiper.virtual.slides.push(slides);
      }

      swiper.virtual.update(true);
    },
    prependSlide: function prependSlide(slides) {
      var swiper = this;
      var activeIndex = swiper.activeIndex;
      var newActiveIndex = activeIndex + 1;
      var numberOfNewSlides = 1;

      if (Array.isArray(slides)) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
        }

        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }

      if (swiper.params.virtual.cache) {
        var cache = swiper.virtual.cache;
        var newCache = {};
        Object.keys(cache).forEach(function (cachedIndex) {
          var $cachedEl = cache[cachedIndex];
          var cachedElIndex = $cachedEl.attr("data-swiper-slide-index");

          if (cachedElIndex) {
            $cachedEl.attr(
              "data-swiper-slide-index",
              parseInt(cachedElIndex, 10) + 1
            );
          }

          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
        });
        swiper.virtual.cache = newCache;
      }

      swiper.virtual.update(true);
      swiper.slideTo(newActiveIndex, 0);
    },
    removeSlide: function removeSlide(slidesIndexes) {
      var swiper = this;
      if (typeof slidesIndexes === "undefined" || slidesIndexes === null)
        return;
      var activeIndex = swiper.activeIndex;

      if (Array.isArray(slidesIndexes)) {
        for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          swiper.virtual.slides.splice(slidesIndexes[i], 1);

          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
          }

          if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        swiper.virtual.slides.splice(slidesIndexes, 1);

        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
        }

        if (slidesIndexes < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }

      swiper.virtual.update(true);
      swiper.slideTo(activeIndex, 0);
    },
    removeAllSlides: function removeAllSlides() {
      var swiper = this;
      swiper.virtual.slides = [];

      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }

      swiper.virtual.update(true);
      swiper.slideTo(0, 0);
    },
  };
  var Virtual$1 = {
    name: "virtual",
    params: {
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: true,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        virtual: _extends({}, Virtual, {
          slides: swiper.params.virtual.slides,
          cache: {},
        }),
      });
    },
    on: {
      beforeInit: function beforeInit(swiper) {
        if (!swiper.params.virtual.enabled) return;
        swiper.classNames.push(
          swiper.params.containerModifierClass + "virtual"
        );
        var overwriteParams = {
          watchSlidesProgress: true,
        };
        extend(swiper.params, overwriteParams);
        extend(swiper.originalParams, overwriteParams);

        if (!swiper.params.initialSlide) {
          swiper.virtual.update();
        }
      },
      setTranslate: function setTranslate(swiper) {
        if (!swiper.params.virtual.enabled) return;
        swiper.virtual.update();
      },
    },
  };

  var Keyboard = {
    handle: function handle(event) {
      var swiper = this;
      if (!swiper.enabled) return;
      var window = getWindow();
      var document = getDocument();
      var rtl = swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) e = e.originalEvent; // jquery fix

      var kc = e.keyCode || e.charCode;
      var pageUpDown = swiper.params.keyboard.pageUpDown;
      var isPageUp = pageUpDown && kc === 33;
      var isPageDown = pageUpDown && kc === 34;
      var isArrowLeft = kc === 37;
      var isArrowRight = kc === 39;
      var isArrowUp = kc === 38;
      var isArrowDown = kc === 40; // Directions locks

      if (
        !swiper.allowSlideNext &&
        ((swiper.isHorizontal() && isArrowRight) ||
          (swiper.isVertical() && isArrowDown) ||
          isPageDown)
      ) {
        return false;
      }

      if (
        !swiper.allowSlidePrev &&
        ((swiper.isHorizontal() && isArrowLeft) ||
          (swiper.isVertical() && isArrowUp) ||
          isPageUp)
      ) {
        return false;
      }

      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }

      if (
        document.activeElement &&
        document.activeElement.nodeName &&
        (document.activeElement.nodeName.toLowerCase() === "input" ||
          document.activeElement.nodeName.toLowerCase() === "textarea")
      ) {
        return undefined;
      }

      if (
        swiper.params.keyboard.onlyInViewport &&
        (isPageUp ||
          isPageDown ||
          isArrowLeft ||
          isArrowRight ||
          isArrowUp ||
          isArrowDown)
      ) {
        var inView = false; // Check that swiper should be inside of visible area of window

        if (
          swiper.$el.parents("." + swiper.params.slideClass).length > 0 &&
          swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0
        ) {
          return undefined;
        }

        var $el = swiper.$el;
        var swiperWidth = $el[0].clientWidth;
        var swiperHeight = $el[0].clientHeight;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var swiperOffset = swiper.$el.offset();
        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
        var swiperCoord = [
          [swiperOffset.left, swiperOffset.top],
          [swiperOffset.left + swiperWidth, swiperOffset.top],
          [swiperOffset.left, swiperOffset.top + swiperHeight],
          [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight],
        ];

        for (var i = 0; i < swiperCoord.length; i += 1) {
          var point = swiperCoord[i];

          if (
            point[0] >= 0 &&
            point[0] <= windowWidth &&
            point[1] >= 0 &&
            point[1] <= windowHeight
          ) {
            if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

            inView = true;
          }
        }

        if (!inView) return undefined;
      }

      if (swiper.isHorizontal()) {
        if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
          if (e.preventDefault) e.preventDefault();
          else e.returnValue = false;
        }

        if (
          ((isPageDown || isArrowRight) && !rtl) ||
          ((isPageUp || isArrowLeft) && rtl)
        )
          swiper.slideNext();
        if (
          ((isPageUp || isArrowLeft) && !rtl) ||
          ((isPageDown || isArrowRight) && rtl)
        )
          swiper.slidePrev();
      } else {
        if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
          if (e.preventDefault) e.preventDefault();
          else e.returnValue = false;
        }

        if (isPageDown || isArrowDown) swiper.slideNext();
        if (isPageUp || isArrowUp) swiper.slidePrev();
      }

      swiper.emit("keyPress", kc);
      return undefined;
    },
    enable: function enable() {
      var swiper = this;
      var document = getDocument();
      if (swiper.keyboard.enabled) return;
      $(document).on("keydown", swiper.keyboard.handle);
      swiper.keyboard.enabled = true;
    },
    disable: function disable() {
      var swiper = this;
      var document = getDocument();
      if (!swiper.keyboard.enabled) return;
      $(document).off("keydown", swiper.keyboard.handle);
      swiper.keyboard.enabled = false;
    },
  };
  var Keyboard$1 = {
    name: "keyboard",
    params: {
      keyboard: {
        enabled: false,
        onlyInViewport: true,
        pageUpDown: true,
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        keyboard: _extends(
          {
            enabled: false,
          },
          Keyboard
        ),
      });
    },
    on: {
      init: function init(swiper) {
        if (swiper.params.keyboard.enabled) {
          swiper.keyboard.enable();
        }
      },
      destroy: function destroy(swiper) {
        if (swiper.keyboard.enabled) {
          swiper.keyboard.disable();
        }
      },
    },
  };

  /* eslint-disable consistent-return */

  function isEventSupported() {
    var document = getDocument();
    var eventName = "onwheel";
    var isSupported = eventName in document;

    if (!isSupported) {
      var element = document.createElement("div");
      element.setAttribute(eventName, "return;");
      isSupported = typeof element[eventName] === "function";
    }

    if (
      !isSupported &&
      document.implementation &&
      document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
      document.implementation.hasFeature("", "") !== true
    ) {
      // This is the only way to test support for the `wheel` event in IE9+.
      isSupported = document.implementation.hasFeature("Events.wheel", "3.0");
    }

    return isSupported;
  }

  var Mousewheel = {
    lastScrollTime: now(),
    lastEventBeforeSnap: undefined,
    recentWheelEvents: [],
    event: function event() {
      var window = getWindow();
      if (window.navigator.userAgent.indexOf("firefox") > -1)
        return "DOMMouseScroll";
      return isEventSupported() ? "wheel" : "mousewheel";
    },
    normalize: function normalize(e) {
      // Reasonable defaults
      var PIXEL_STEP = 10;
      var LINE_HEIGHT = 40;
      var PAGE_HEIGHT = 800;
      var sX = 0;
      var sY = 0; // spinX, spinY

      var pX = 0;
      var pY = 0; // pixelX, pixelY
      // Legacy

      if ("detail" in e) {
        sY = e.detail;
      }

      if ("wheelDelta" in e) {
        sY = -e.wheelDelta / 120;
      }

      if ("wheelDeltaY" in e) {
        sY = -e.wheelDeltaY / 120;
      }

      if ("wheelDeltaX" in e) {
        sX = -e.wheelDeltaX / 120;
      } // side scrolling on FF with DOMMouseScroll

      if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }

      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;

      if ("deltaY" in e) {
        pY = e.deltaY;
      }

      if ("deltaX" in e) {
        pX = e.deltaX;
      }

      if (e.shiftKey && !pX) {
        // if user scrolls with shift he wants horizontal scroll
        pX = pY;
        pY = 0;
      }

      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) {
          // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      } // Fall-back if spin cannot be determined

      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }

      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }

      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY,
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      var swiper = this;
      if (!swiper.enabled) return;
      swiper.mouseEntered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      var swiper = this;
      if (!swiper.enabled) return;
      swiper.mouseEntered = false;
    },
    handle: function handle(event) {
      var e = event;
      var disableParentSwiper = true;
      var swiper = this;
      if (!swiper.enabled) return;
      var params = swiper.params.mousewheel;

      if (swiper.params.cssMode) {
        e.preventDefault();
      }

      var target = swiper.$el;

      if (swiper.params.mousewheel.eventsTarget !== "container") {
        target = $(swiper.params.mousewheel.eventsTarget);
      }

      if (
        !swiper.mouseEntered &&
        !target[0].contains(e.target) &&
        !params.releaseOnEdges
      )
        return true;
      if (e.originalEvent) e = e.originalEvent; // jquery fix

      var delta = 0;
      var rtlFactor = swiper.rtlTranslate ? -1 : 1;
      var data = Mousewheel.normalize(e);

      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY))
            delta = -data.pixelX * rtlFactor;
          else return true;
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX))
          delta = -data.pixelY;
        else return true;
      } else {
        delta =
          Math.abs(data.pixelX) > Math.abs(data.pixelY)
            ? -data.pixelX * rtlFactor
            : -data.pixelY;
      }

      if (delta === 0) return true;
      if (params.invert) delta = -delta; // Get the scroll positions

      var positions = swiper.getTranslate() + delta * params.sensitivity;
      if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
      if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
      //     the disableParentSwiper will be true.
      // When loop is false:
      //     if the scroll positions is not on edge,
      //     then the disableParentSwiper will be true.
      //     if the scroll on edge positions,
      //     then the disableParentSwiper will be false.

      disableParentSwiper = swiper.params.loop
        ? true
        : !(
            positions === swiper.minTranslate() ||
            positions === swiper.maxTranslate()
          );
      if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

      if (!swiper.params.freeMode) {
        // Register the new event in a variable which stores the relevant data
        var newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
          raw: event,
        }; // Keep the most recent events

        var recentWheelEvents = swiper.mousewheel.recentWheelEvents;

        if (recentWheelEvents.length >= 2) {
          recentWheelEvents.shift(); // only store the last N events
        }

        var prevEvent = recentWheelEvents.length
          ? recentWheelEvents[recentWheelEvents.length - 1]
          : undefined;
        recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
        //   If direction has changed or
        //   if the scroll is quicker than the previous one:
        //     Animate the slider.
        // Else (this is the first time the wheel is moved):
        //     Animate the slider.

        if (prevEvent) {
          if (
            newEvent.direction !== prevEvent.direction ||
            newEvent.delta > prevEvent.delta ||
            newEvent.time > prevEvent.time + 150
          ) {
            swiper.mousewheel.animateSlider(newEvent);
          }
        } else {
          swiper.mousewheel.animateSlider(newEvent);
        } // If it's time to release the scroll:
        //   Return now so you don't hit the preventDefault.

        if (swiper.mousewheel.releaseScroll(newEvent)) {
          return true;
        }
      } else {
        // Freemode or scrollContainer:
        // If we recently snapped after a momentum scroll, then ignore wheel events
        // to give time for the deceleration to finish. Stop ignoring after 500 msecs
        // or if it's a new scroll (larger delta or inverse sign as last event before
        // an end-of-momentum snap).
        var _newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
        };
        var lastEventBeforeSnap = swiper.mousewheel.lastEventBeforeSnap;
        var ignoreWheelEvents =
          lastEventBeforeSnap &&
          _newEvent.time < lastEventBeforeSnap.time + 500 &&
          _newEvent.delta <= lastEventBeforeSnap.delta &&
          _newEvent.direction === lastEventBeforeSnap.direction;

        if (!ignoreWheelEvents) {
          swiper.mousewheel.lastEventBeforeSnap = undefined;

          if (swiper.params.loop) {
            swiper.loopFix();
          }

          var position = swiper.getTranslate() + delta * params.sensitivity;
          var wasBeginning = swiper.isBeginning;
          var wasEnd = swiper.isEnd;
          if (position >= swiper.minTranslate())
            position = swiper.minTranslate();
          if (position <= swiper.maxTranslate())
            position = swiper.maxTranslate();
          swiper.setTransition(0);
          swiper.setTranslate(position);
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();

          if (
            (!wasBeginning && swiper.isBeginning) ||
            (!wasEnd && swiper.isEnd)
          ) {
            swiper.updateSlidesClasses();
          }

          if (swiper.params.freeModeSticky) {
            // When wheel scrolling starts with sticky (aka snap) enabled, then detect
            // the end of a momentum scroll by storing recent (N=15?) wheel events.
            // 1. do all N events have decreasing or same (absolute value) delta?
            // 2. did all N events arrive in the last M (M=500?) msecs?
            // 3. does the earliest event have an (absolute value) delta that's
            //    at least P (P=1?) larger than the most recent event's delta?
            // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
            // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
            // Snap immediately and ignore remaining wheel events in this scroll.
            // See comment above for "remaining wheel events in this scroll" determination.
            // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
            clearTimeout(swiper.mousewheel.timeout);
            swiper.mousewheel.timeout = undefined;
            var _recentWheelEvents = swiper.mousewheel.recentWheelEvents;

            if (_recentWheelEvents.length >= 15) {
              _recentWheelEvents.shift(); // only store the last N events
            }

            var _prevEvent = _recentWheelEvents.length
              ? _recentWheelEvents[_recentWheelEvents.length - 1]
              : undefined;

            var firstEvent = _recentWheelEvents[0];

            _recentWheelEvents.push(_newEvent);

            if (
              _prevEvent &&
              (_newEvent.delta > _prevEvent.delta ||
                _newEvent.direction !== _prevEvent.direction)
            ) {
              // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
              _recentWheelEvents.splice(0);
            } else if (
              _recentWheelEvents.length >= 15 &&
              _newEvent.time - firstEvent.time < 500 &&
              firstEvent.delta - _newEvent.delta >= 1 &&
              _newEvent.delta <= 6
            ) {
              // We're at the end of the deceleration of a momentum scroll, so there's no need
              // to wait for more events. Snap ASAP on the next tick.
              // Also, because there's some remaining momentum we'll bias the snap in the
              // direction of the ongoing scroll because it's better UX for the scroll to snap
              // in the same direction as the scroll instead of reversing to snap.  Therefore,
              // if it's already scrolled more than 20% in the current direction, keep going.
              var snapToThreshold = delta > 0 ? 0.8 : 0.2;
              swiper.mousewheel.lastEventBeforeSnap = _newEvent;

              _recentWheelEvents.splice(0);

              swiper.mousewheel.timeout = nextTick(function () {
                swiper.slideToClosest(
                  swiper.params.speed,
                  true,
                  undefined,
                  snapToThreshold
                );
              }, 0); // no delay; move on next tick
            }

            if (!swiper.mousewheel.timeout) {
              // if we get here, then we haven't detected the end of a momentum scroll, so
              // we'll consider a scroll "complete" when there haven't been any wheel events
              // for 500ms.
              swiper.mousewheel.timeout = nextTick(function () {
                var snapToThreshold = 0.5;
                swiper.mousewheel.lastEventBeforeSnap = _newEvent;

                _recentWheelEvents.splice(0);

                swiper.slideToClosest(
                  swiper.params.speed,
                  true,
                  undefined,
                  snapToThreshold
                );
              }, 500);
            }
          } // Emit event

          if (!ignoreWheelEvents) swiper.emit("scroll", e); // Stop autoplay

          if (
            swiper.params.autoplay &&
            swiper.params.autoplayDisableOnInteraction
          )
            swiper.autoplay.stop(); // Return page scroll on edge positions

          if (
            position === swiper.minTranslate() ||
            position === swiper.maxTranslate()
          )
            return true;
        }
      }

      if (e.preventDefault) e.preventDefault();
      else e.returnValue = false;
      return false;
    },
    animateSlider: function animateSlider(newEvent) {
      var swiper = this;
      var window = getWindow();

      if (
        this.params.mousewheel.thresholdDelta &&
        newEvent.delta < this.params.mousewheel.thresholdDelta
      ) {
        // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
      }

      if (
        this.params.mousewheel.thresholdTime &&
        now() - swiper.mousewheel.lastScrollTime <
          this.params.mousewheel.thresholdTime
      ) {
        // Prevent if time between scrolls is below configured threshold
        return false;
      } // If the movement is NOT big enough and
      // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
      //   Don't go any further (avoid insignificant scroll movement).

      if (
        newEvent.delta >= 6 &&
        now() - swiper.mousewheel.lastScrollTime < 60
      ) {
        // Return false as a default
        return true;
      } // If user is scrolling towards the end:
      //   If the slider hasn't hit the latest slide or
      //   if the slider is a loop and
      //   if the slider isn't moving right now:
      //     Go to next slide and
      //     emit a scroll event.
      // Else (the user is scrolling towards the beginning) and
      // if the slider hasn't hit the first slide or
      // if the slider is a loop and
      // if the slider isn't moving right now:
      //   Go to prev slide and
      //   emit a scroll event.

      if (newEvent.direction < 0) {
        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
          swiper.slideNext();
          swiper.emit("scroll", newEvent.raw);
        }
      } else if (
        (!swiper.isBeginning || swiper.params.loop) &&
        !swiper.animating
      ) {
        swiper.slidePrev();
        swiper.emit("scroll", newEvent.raw);
      } // If you got here is because an animation has been triggered so store the current time

      swiper.mousewheel.lastScrollTime = new window.Date().getTime(); // Return false as a default

      return false;
    },
    releaseScroll: function releaseScroll(newEvent) {
      var swiper = this;
      var params = swiper.params.mousewheel;

      if (newEvent.direction < 0) {
        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }
      } else if (
        swiper.isBeginning &&
        !swiper.params.loop &&
        params.releaseOnEdges
      ) {
        // Return true to animate scroll on edges
        return true;
      }

      return false;
    },
    enable: function enable() {
      var swiper = this;
      var event = Mousewheel.event();

      if (swiper.params.cssMode) {
        swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
        return true;
      }

      if (!event) return false;
      if (swiper.mousewheel.enabled) return false;
      var target = swiper.$el;

      if (swiper.params.mousewheel.eventsTarget !== "container") {
        target = $(swiper.params.mousewheel.eventsTarget);
      }

      target.on("mouseenter", swiper.mousewheel.handleMouseEnter);
      target.on("mouseleave", swiper.mousewheel.handleMouseLeave);
      target.on(event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = true;
      return true;
    },
    disable: function disable() {
      var swiper = this;
      var event = Mousewheel.event();

      if (swiper.params.cssMode) {
        swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
        return true;
      }

      if (!event) return false;
      if (!swiper.mousewheel.enabled) return false;
      var target = swiper.$el;

      if (swiper.params.mousewheel.eventsTarget !== "container") {
        target = $(swiper.params.mousewheel.eventsTarget);
      }

      target.off(event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = false;
      return true;
    },
  };
  var Mousewheel$1 = {
    name: "mousewheel",
    params: {
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null,
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        mousewheel: {
          enabled: false,
          lastScrollTime: now(),
          lastEventBeforeSnap: undefined,
          recentWheelEvents: [],
          enable: Mousewheel.enable,
          disable: Mousewheel.disable,
          handle: Mousewheel.handle,
          handleMouseEnter: Mousewheel.handleMouseEnter,
          handleMouseLeave: Mousewheel.handleMouseLeave,
          animateSlider: Mousewheel.animateSlider,
          releaseScroll: Mousewheel.releaseScroll,
        },
      });
    },
    on: {
      init: function init(swiper) {
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
          swiper.mousewheel.disable();
        }

        if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
      },
      destroy: function destroy(swiper) {
        if (swiper.params.cssMode) {
          swiper.mousewheel.enable();
        }

        if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
      },
    },
  };

  var Navigation = {
    toggleEl: function toggleEl($el, disabled) {
      $el[disabled ? "addClass" : "removeClass"](
        this.params.navigation.disabledClass
      );
      if ($el[0] && $el[0].tagName === "BUTTON") $el[0].disabled = disabled;
    },
    update: function update() {
      // Update Navigation Buttons
      var swiper = this;
      var params = swiper.params.navigation;
      var toggleEl = swiper.navigation.toggleEl;
      if (swiper.params.loop) return;
      var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          toggleEl($prevEl, true);
        } else {
          toggleEl($prevEl, false);
        }

        if (swiper.params.watchOverflow && swiper.enabled) {
          $prevEl[swiper.isLocked ? "addClass" : "removeClass"](
            params.lockClass
          );
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          toggleEl($nextEl, true);
        } else {
          toggleEl($nextEl, false);
        }

        if (swiper.params.watchOverflow && swiper.enabled) {
          $nextEl[swiper.isLocked ? "addClass" : "removeClass"](
            params.lockClass
          );
        }
      }
    },
    onPrevClick: function onPrevClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop) return;
      swiper.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop) return;
      swiper.slideNext();
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.navigation;
      if (!(params.nextEl || params.prevEl)) return;
      var $nextEl;
      var $prevEl;

      if (params.nextEl) {
        $nextEl = $(params.nextEl);

        if (
          swiper.params.uniqueNavElements &&
          typeof params.nextEl === "string" &&
          $nextEl.length > 1 &&
          swiper.$el.find(params.nextEl).length === 1
        ) {
          $nextEl = swiper.$el.find(params.nextEl);
        }
      }

      if (params.prevEl) {
        $prevEl = $(params.prevEl);

        if (
          swiper.params.uniqueNavElements &&
          typeof params.prevEl === "string" &&
          $prevEl.length > 1 &&
          swiper.$el.find(params.prevEl).length === 1
        ) {
          $prevEl = swiper.$el.find(params.prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on("click", swiper.navigation.onNextClick);
      }

      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on("click", swiper.navigation.onPrevClick);
      }

      extend(swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0],
      });

      if (!swiper.enabled) {
        if ($nextEl) $nextEl.addClass(params.lockClass);
        if ($prevEl) $prevEl.addClass(params.lockClass);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      var _swiper$navigation2 = swiper.navigation,
        $nextEl = _swiper$navigation2.$nextEl,
        $prevEl = _swiper$navigation2.$prevEl;

      if ($nextEl && $nextEl.length) {
        $nextEl.off("click", swiper.navigation.onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }

      if ($prevEl && $prevEl.length) {
        $prevEl.off("click", swiper.navigation.onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    },
  };
  var Navigation$1 = {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        navigation: _extends({}, Navigation),
      });
    },
    on: {
      init: function init(swiper) {
        swiper.navigation.init();
        swiper.navigation.update();
      },
      toEdge: function toEdge(swiper) {
        swiper.navigation.update();
      },
      fromEdge: function fromEdge(swiper) {
        swiper.navigation.update();
      },
      destroy: function destroy(swiper) {
        swiper.navigation.destroy();
      },
      "enable disable": function enableDisable(swiper) {
        var _swiper$navigation3 = swiper.navigation,
          $nextEl = _swiper$navigation3.$nextEl,
          $prevEl = _swiper$navigation3.$prevEl;

        if ($nextEl) {
          $nextEl[swiper.enabled ? "removeClass" : "addClass"](
            swiper.params.navigation.lockClass
          );
        }

        if ($prevEl) {
          $prevEl[swiper.enabled ? "removeClass" : "addClass"](
            swiper.params.navigation.lockClass
          );
        }
      },
      click: function click(swiper, e) {
        var _swiper$navigation4 = swiper.navigation,
          $nextEl = _swiper$navigation4.$nextEl,
          $prevEl = _swiper$navigation4.$prevEl;
        var targetEl = e.target;

        if (
          swiper.params.navigation.hideOnClick &&
          !$(targetEl).is($prevEl) &&
          !$(targetEl).is($nextEl)
        ) {
          if (
            swiper.pagination &&
            swiper.params.pagination &&
            swiper.params.pagination.clickable &&
            (swiper.pagination.el === targetEl ||
              swiper.pagination.el.contains(targetEl))
          )
            return;
          var isHidden;

          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
          }

          if (isHidden === true) {
            swiper.emit("navigationShow");
          } else {
            swiper.emit("navigationHide");
          }

          if ($nextEl) {
            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
          }

          if ($prevEl) {
            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
        }
      },
    },
  };

  var Pagination = {
    update: function update() {
      // Render || Update Pagination bullets/items
      var swiper = this;
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;
      if (
        !params.el ||
        !swiper.pagination.el ||
        !swiper.pagination.$el ||
        swiper.pagination.$el.length === 0
      )
        return;
      var slidesLength =
        swiper.virtual && swiper.params.virtual.enabled
          ? swiper.virtual.slides.length
          : swiper.slides.length;
      var $el = swiper.pagination.$el; // Current/Total

      var current;
      var total = swiper.params.loop
        ? Math.ceil(
            (slidesLength - swiper.loopedSlides * 2) /
              swiper.params.slidesPerGroup
          )
        : swiper.snapGrid.length;

      if (swiper.params.loop) {
        current = Math.ceil(
          (swiper.activeIndex - swiper.loopedSlides) /
            swiper.params.slidesPerGroup
        );

        if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
          current -= slidesLength - swiper.loopedSlides * 2;
        }

        if (current > total - 1) current -= total;
        if (current < 0 && swiper.params.paginationType !== "bullets")
          current = total + current;
      } else if (typeof swiper.snapIndex !== "undefined") {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      } // Types

      if (
        params.type === "bullets" &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length > 0
      ) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;

        if (params.dynamicBullets) {
          swiper.pagination.bulletSize = bullets
            .eq(0)
            [swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
          $el.css(
            swiper.isHorizontal() ? "width" : "height",
            swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) +
              "px"
          );

          if (
            params.dynamicMainBullets > 1 &&
            swiper.previousIndex !== undefined
          ) {
            swiper.pagination.dynamicBulletIndex +=
              current - swiper.previousIndex;

            if (
              swiper.pagination.dynamicBulletIndex >
              params.dynamicMainBullets - 1
            ) {
              swiper.pagination.dynamicBulletIndex =
                params.dynamicMainBullets - 1;
            } else if (swiper.pagination.dynamicBulletIndex < 0) {
              swiper.pagination.dynamicBulletIndex = 0;
            }
          }

          firstIndex = current - swiper.pagination.dynamicBulletIndex;
          lastIndex =
            firstIndex +
            (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }

        bullets.removeClass(
          params.bulletActiveClass +
            " " +
            params.bulletActiveClass +
            "-next " +
            params.bulletActiveClass +
            "-next-next " +
            params.bulletActiveClass +
            "-prev " +
            params.bulletActiveClass +
            "-prev-prev " +
            params.bulletActiveClass +
            "-main"
        );

        if ($el.length > 1) {
          bullets.each(function (bullet) {
            var $bullet = $(bullet);
            var bulletIndex = $bullet.index();

            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }

            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(params.bulletActiveClass + "-main");
              }

              if (bulletIndex === firstIndex) {
                $bullet
                  .prev()
                  .addClass(params.bulletActiveClass + "-prev")
                  .prev()
                  .addClass(params.bulletActiveClass + "-prev-prev");
              }

              if (bulletIndex === lastIndex) {
                $bullet
                  .next()
                  .addClass(params.bulletActiveClass + "-next")
                  .next()
                  .addClass(params.bulletActiveClass + "-next-next");
              }
            }
          });
        } else {
          var $bullet = bullets.eq(current);
          var bulletIndex = $bullet.index();
          $bullet.addClass(params.bulletActiveClass);

          if (params.dynamicBullets) {
            var $firstDisplayedBullet = bullets.eq(firstIndex);
            var $lastDisplayedBullet = bullets.eq(lastIndex);

            for (var i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(params.bulletActiveClass + "-main");
            }

            if (swiper.params.loop) {
              if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                  bullets
                    .eq(bullets.length - _i)
                    .addClass(params.bulletActiveClass + "-main");
                }

                bullets
                  .eq(bullets.length - params.dynamicMainBullets - 1)
                  .addClass(params.bulletActiveClass + "-prev");
              } else {
                $firstDisplayedBullet
                  .prev()
                  .addClass(params.bulletActiveClass + "-prev")
                  .prev()
                  .addClass(params.bulletActiveClass + "-prev-prev");
                $lastDisplayedBullet
                  .next()
                  .addClass(params.bulletActiveClass + "-next")
                  .next()
                  .addClass(params.bulletActiveClass + "-next-next");
              }
            } else {
              $firstDisplayedBullet
                .prev()
                .addClass(params.bulletActiveClass + "-prev")
                .prev()
                .addClass(params.bulletActiveClass + "-prev-prev");
              $lastDisplayedBullet
                .next()
                .addClass(params.bulletActiveClass + "-next")
                .next()
                .addClass(params.bulletActiveClass + "-next-next");
            }
          }
        }

        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(
            bullets.length,
            params.dynamicMainBullets + 4
          );
          var bulletsOffset =
            (swiper.pagination.bulletSize * dynamicBulletsLength -
              swiper.pagination.bulletSize) /
              2 -
            midIndex * swiper.pagination.bulletSize;
          var offsetProp = rtl ? "right" : "left";
          bullets.css(
            swiper.isHorizontal() ? offsetProp : "top",
            bulletsOffset + "px"
          );
        }
      }

      if (params.type === "fraction") {
        $el
          .find(classesToSelector(params.currentClass))
          .text(params.formatFractionCurrent(current + 1));
        $el
          .find(classesToSelector(params.totalClass))
          .text(params.formatFractionTotal(total));
      }

      if (params.type === "progressbar") {
        var progressbarDirection;

        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal()
            ? "vertical"
            : "horizontal";
        } else {
          progressbarDirection = swiper.isHorizontal()
            ? "horizontal"
            : "vertical";
        }

        var scale = (current + 1) / total;
        var scaleX = 1;
        var scaleY = 1;

        if (progressbarDirection === "horizontal") {
          scaleX = scale;
        } else {
          scaleY = scale;
        }

        $el
          .find(classesToSelector(params.progressbarFillClass))
          .transform(
            "translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")"
          )
          .transition(swiper.params.speed);
      }

      if (params.type === "custom" && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        swiper.emit("paginationRender", $el[0]);
      } else {
        swiper.emit("paginationUpdate", $el[0]);
      }

      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
      }
    },
    render: function render() {
      // Render Container
      var swiper = this;
      var params = swiper.params.pagination;
      if (
        !params.el ||
        !swiper.pagination.el ||
        !swiper.pagination.$el ||
        swiper.pagination.$el.length === 0
      )
        return;
      var slidesLength =
        swiper.virtual && swiper.params.virtual.enabled
          ? swiper.virtual.slides.length
          : swiper.slides.length;
      var $el = swiper.pagination.$el;
      var paginationHTML = "";

      if (params.type === "bullets") {
        var numberOfBullets = swiper.params.loop
          ? Math.ceil(
              (slidesLength - swiper.loopedSlides * 2) /
                swiper.params.slidesPerGroup
            )
          : swiper.snapGrid.length;

        if (
          swiper.params.freeMode &&
          !swiper.params.loop &&
          numberOfBullets > slidesLength
        ) {
          numberOfBullets = slidesLength;
        }

        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(
              swiper,
              i,
              params.bulletClass
            );
          } else {
            paginationHTML +=
              "<" +
              params.bulletElement +
              ' class="' +
              params.bulletClass +
              '"></' +
              params.bulletElement +
              ">";
          }
        }

        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find(
          classesToSelector(params.bulletClass)
        );
      }

      if (params.type === "fraction") {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(
            swiper,
            params.currentClass,
            params.totalClass
          );
        } else {
          paginationHTML =
            '<span class="' +
            params.currentClass +
            '"></span>' +
            " / " +
            ('<span class="' + params.totalClass + '"></span>');
        }

        $el.html(paginationHTML);
      }

      if (params.type === "progressbar") {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(
            swiper,
            params.progressbarFillClass
          );
        } else {
          paginationHTML =
            '<span class="' + params.progressbarFillClass + '"></span>';
        }

        $el.html(paginationHTML);
      }

      if (params.type !== "custom") {
        swiper.emit("paginationRender", swiper.pagination.$el[0]);
      }
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el) return;
      var $el = $(params.el);
      if ($el.length === 0) return;

      if (
        swiper.params.uniqueNavElements &&
        typeof params.el === "string" &&
        $el.length > 1
      ) {
        $el = swiper.$el.find(params.el);
      }

      if (params.type === "bullets" && params.clickable) {
        $el.addClass(params.clickableClass);
      }

      $el.addClass(params.modifierClass + params.type);

      if (params.type === "bullets" && params.dynamicBullets) {
        $el.addClass("" + params.modifierClass + params.type + "-dynamic");
        swiper.pagination.dynamicBulletIndex = 0;

        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }

      if (params.type === "progressbar" && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }

      if (params.clickable) {
        $el.on(
          "click",
          classesToSelector(params.bulletClass),
          function onClick(e) {
            e.preventDefault();
            var index = $(this).index() * swiper.params.slidesPerGroup;
            if (swiper.params.loop) index += swiper.loopedSlides;
            swiper.slideTo(index);
          }
        );
      }

      extend(swiper.pagination, {
        $el: $el,
        el: $el[0],
      });

      if (!swiper.enabled) {
        $el.addClass(params.lockClass);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (
        !params.el ||
        !swiper.pagination.el ||
        !swiper.pagination.$el ||
        swiper.pagination.$el.length === 0
      )
        return;
      var $el = swiper.pagination.$el;
      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      if (swiper.pagination.bullets)
        swiper.pagination.bullets.removeClass(params.bulletActiveClass);

      if (params.clickable) {
        $el.off("click", classesToSelector(params.bulletClass));
      }
    },
  };
  var Pagination$1 = {
    name: "pagination",
    params: {
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: "bullets",
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(number) {
          return number;
        },
        formatFractionTotal: function formatFractionTotal(number) {
          return number;
        },
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-",
        // NEW
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable",
        // NEW
        lockClass: "swiper-pagination-lock",
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        pagination: _extends(
          {
            dynamicBulletIndex: 0,
          },
          Pagination
        ),
      });
    },
    on: {
      init: function init(swiper) {
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      },
      activeIndexChange: function activeIndexChange(swiper) {
        if (swiper.params.loop) {
          swiper.pagination.update();
        } else if (typeof swiper.snapIndex === "undefined") {
          swiper.pagination.update();
        }
      },
      snapIndexChange: function snapIndexChange(swiper) {
        if (!swiper.params.loop) {
          swiper.pagination.update();
        }
      },
      slidesLengthChange: function slidesLengthChange(swiper) {
        if (swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      snapGridLengthChange: function snapGridLengthChange(swiper) {
        if (!swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      destroy: function destroy(swiper) {
        swiper.pagination.destroy();
      },
      "enable disable": function enableDisable(swiper) {
        var $el = swiper.pagination.$el;

        if ($el) {
          $el[swiper.enabled ? "removeClass" : "addClass"](
            swiper.params.pagination.lockClass
          );
        }
      },
      click: function click(swiper, e) {
        var targetEl = e.target;

        if (
          swiper.params.pagination.el &&
          swiper.params.pagination.hideOnClick &&
          swiper.pagination.$el.length > 0 &&
          !$(targetEl).hasClass(swiper.params.pagination.bulletClass)
        ) {
          if (
            swiper.navigation &&
            ((swiper.navigation.nextEl &&
              targetEl === swiper.navigation.nextEl) ||
              (swiper.navigation.prevEl &&
                targetEl === swiper.navigation.prevEl))
          )
            return;
          var isHidden = swiper.pagination.$el.hasClass(
            swiper.params.pagination.hiddenClass
          );

          if (isHidden === true) {
            swiper.emit("paginationShow");
          } else {
            swiper.emit("paginationHide");
          }

          swiper.pagination.$el.toggleClass(
            swiper.params.pagination.hiddenClass
          );
        }
      },
    },
  };

  var Scrollbar = {
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate,
        progress = swiper.progress;
      var dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
      var params = swiper.params.scrollbar;
      var newSize = dragSize;
      var newPos = (trackSize - dragSize) * progress;

      if (rtl) {
        newPos = -newPos;

        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }

      if (swiper.isHorizontal()) {
        $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
        $dragEl[0].style.width = newSize + "px";
      } else {
        $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
        $dragEl[0].style.height = newSize + "px";
      }

      if (params.hide) {
        clearTimeout(swiper.scrollbar.timeout);
        $el[0].style.opacity = 1;
        swiper.scrollbar.timeout = setTimeout(function () {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1000);
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function updateSize() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      var scrollbar = swiper.scrollbar;
      var $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
      $dragEl[0].style.width = "";
      $dragEl[0].style.height = "";
      var trackSize = swiper.isHorizontal()
        ? $el[0].offsetWidth
        : $el[0].offsetHeight;
      var divider = swiper.size / swiper.virtualSize;
      var moveDivider = divider * (trackSize / swiper.size);
      var dragSize;

      if (swiper.params.scrollbar.dragSize === "auto") {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }

      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = dragSize + "px";
      } else {
        $dragEl[0].style.height = dragSize + "px";
      }

      if (divider >= 1) {
        $el[0].style.display = "none";
      } else {
        $el[0].style.display = "";
      }

      if (swiper.params.scrollbar.hide) {
        $el[0].style.opacity = 0;
      }

      extend(scrollbar, {
        trackSize: trackSize,
        divider: divider,
        moveDivider: moveDivider,
        dragSize: dragSize,
      });

      if (swiper.params.watchOverflow && swiper.enabled) {
        scrollbar.$el[swiper.isLocked ? "addClass" : "removeClass"](
          swiper.params.scrollbar.lockClass
        );
      }
    },
    getPointerPosition: function getPointerPosition(e) {
      var swiper = this;

      if (swiper.isHorizontal()) {
        return e.type === "touchstart" || e.type === "touchmove"
          ? e.targetTouches[0].clientX
          : e.clientX;
      }

      return e.type === "touchstart" || e.type === "touchmove"
        ? e.targetTouches[0].clientY
        : e.clientY;
    },
    setDragPosition: function setDragPosition(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate;
      var $el = scrollbar.$el,
        dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        dragStartPos = scrollbar.dragStartPos;
      var positionRatio;
      positionRatio =
        (scrollbar.getPointerPosition(e) -
          $el.offset()[swiper.isHorizontal() ? "left" : "top"] -
          (dragStartPos !== null ? dragStartPos : dragSize / 2)) /
        (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);

      if (rtl) {
        positionRatio = 1 - positionRatio;
      }

      var position =
        swiper.minTranslate() +
        (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
      swiper.scrollbar.isTouched = true;
      swiper.scrollbar.dragStartPos =
        e.target === $dragEl[0] || e.target === $dragEl
          ? scrollbar.getPointerPosition(e) -
            e.target.getBoundingClientRect()[
              swiper.isHorizontal() ? "left" : "top"
            ]
          : null;
      e.preventDefault();
      e.stopPropagation();
      $wrapperEl.transition(100);
      $dragEl.transition(100);
      scrollbar.setDragPosition(e);
      clearTimeout(swiper.scrollbar.dragTimeout);
      $el.transition(0);

      if (params.hide) {
        $el.css("opacity", 1);
      }

      if (swiper.params.cssMode) {
        swiper.$wrapperEl.css("scroll-snap-type", "none");
      }

      swiper.emit("scrollbarDragStart", e);
    },
    onDragMove: function onDragMove(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
      if (!swiper.scrollbar.isTouched) return;
      if (e.preventDefault) e.preventDefault();
      else e.returnValue = false;
      scrollbar.setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      swiper.emit("scrollbarDragMove", e);
    },
    onDragEnd: function onDragEnd(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      if (!swiper.scrollbar.isTouched) return;
      swiper.scrollbar.isTouched = false;

      if (swiper.params.cssMode) {
        swiper.$wrapperEl.css("scroll-snap-type", "");
        $wrapperEl.transition("");
      }

      if (params.hide) {
        clearTimeout(swiper.scrollbar.dragTimeout);
        swiper.scrollbar.dragTimeout = nextTick(function () {
          $el.css("opacity", 0);
          $el.transition(400);
        }, 1000);
      }

      swiper.emit("scrollbarDragEnd", e);

      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    },
    enableDraggable: function enableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) return;
      var document = getDocument();
      var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params,
        support = swiper.support;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener =
        support.passiveListener && params.passiveListeners
          ? {
              passive: false,
              capture: false,
            }
          : false;
      var passiveListener =
        support.passiveListener && params.passiveListeners
          ? {
              passive: true,
              capture: false,
            }
          : false;
      if (!target) return;

      if (!support.touch) {
        target.addEventListener(
          touchEventsDesktop.start,
          swiper.scrollbar.onDragStart,
          activeListener
        );
        document.addEventListener(
          touchEventsDesktop.move,
          swiper.scrollbar.onDragMove,
          activeListener
        );
        document.addEventListener(
          touchEventsDesktop.end,
          swiper.scrollbar.onDragEnd,
          passiveListener
        );
      } else {
        target.addEventListener(
          touchEventsTouch.start,
          swiper.scrollbar.onDragStart,
          activeListener
        );
        target.addEventListener(
          touchEventsTouch.move,
          swiper.scrollbar.onDragMove,
          activeListener
        );
        target.addEventListener(
          touchEventsTouch.end,
          swiper.scrollbar.onDragEnd,
          passiveListener
        );
      }
    },
    disableDraggable: function disableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) return;
      var document = getDocument();
      var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params,
        support = swiper.support;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener =
        support.passiveListener && params.passiveListeners
          ? {
              passive: false,
              capture: false,
            }
          : false;
      var passiveListener =
        support.passiveListener && params.passiveListeners
          ? {
              passive: true,
              capture: false,
            }
          : false;
      if (!target) return;

      if (!support.touch) {
        target.removeEventListener(
          touchEventsDesktop.start,
          swiper.scrollbar.onDragStart,
          activeListener
        );
        document.removeEventListener(
          touchEventsDesktop.move,
          swiper.scrollbar.onDragMove,
          activeListener
        );
        document.removeEventListener(
          touchEventsDesktop.end,
          swiper.scrollbar.onDragEnd,
          passiveListener
        );
      } else {
        target.removeEventListener(
          touchEventsTouch.start,
          swiper.scrollbar.onDragStart,
          activeListener
        );
        target.removeEventListener(
          touchEventsTouch.move,
          swiper.scrollbar.onDragMove,
          activeListener
        );
        target.removeEventListener(
          touchEventsTouch.end,
          swiper.scrollbar.onDragEnd,
          passiveListener
        );
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) return;
      var scrollbar = swiper.scrollbar,
        $swiperEl = swiper.$el;
      var params = swiper.params.scrollbar;
      var $el = $(params.el);

      if (
        swiper.params.uniqueNavElements &&
        typeof params.el === "string" &&
        $el.length > 1 &&
        $swiperEl.find(params.el).length === 1
      ) {
        $el = $swiperEl.find(params.el);
      }

      var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);

      if ($dragEl.length === 0) {
        $dragEl = $(
          '<div class="' + swiper.params.scrollbar.dragClass + '"></div>'
        );
        $el.append($dragEl);
      }

      extend(scrollbar, {
        $el: $el,
        el: $el[0],
        $dragEl: $dragEl,
        dragEl: $dragEl[0],
      });

      if (params.draggable) {
        scrollbar.enableDraggable();
      }

      if ($el) {
        $el[swiper.enabled ? "removeClass" : "addClass"](
          swiper.params.scrollbar.lockClass
        );
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.disableDraggable();
    },
  };
  var Scrollbar$1 = {
    name: "scrollbar",
    params: {
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        scrollbar: _extends(
          {
            isTouched: false,
            timeout: null,
            dragTimeout: null,
          },
          Scrollbar
        ),
      });
    },
    on: {
      init: function init(swiper) {
        swiper.scrollbar.init();
        swiper.scrollbar.updateSize();
        swiper.scrollbar.setTranslate();
      },
      update: function update(swiper) {
        swiper.scrollbar.updateSize();
      },
      resize: function resize(swiper) {
        swiper.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate(swiper) {
        swiper.scrollbar.updateSize();
      },
      setTranslate: function setTranslate(swiper) {
        swiper.scrollbar.setTranslate();
      },
      setTransition: function setTransition(swiper, duration) {
        swiper.scrollbar.setTransition(duration);
      },
      "enable disable": function enableDisable(swiper) {
        var $el = swiper.scrollbar.$el;

        if ($el) {
          $el[swiper.enabled ? "removeClass" : "addClass"](
            swiper.params.scrollbar.lockClass
          );
        }
      },
      destroy: function destroy(swiper) {
        swiper.scrollbar.destroy();
      },
    },
  };

  var Parallax = {
    setTransform: function setTransform(el, progress) {
      var swiper = this;
      var rtl = swiper.rtl;
      var $el = $(el);
      var rtlFactor = rtl ? -1 : 1;
      var p = $el.attr("data-swiper-parallax") || "0";
      var x = $el.attr("data-swiper-parallax-x");
      var y = $el.attr("data-swiper-parallax-y");
      var scale = $el.attr("data-swiper-parallax-scale");
      var opacity = $el.attr("data-swiper-parallax-opacity");

      if (x || y) {
        x = x || "0";
        y = y || "0";
      } else if (swiper.isHorizontal()) {
        x = p;
        y = "0";
      } else {
        y = p;
        x = "0";
      }

      if (x.indexOf("%") >= 0) {
        x = parseInt(x, 10) * progress * rtlFactor + "%";
      } else {
        x = x * progress * rtlFactor + "px";
      }

      if (y.indexOf("%") >= 0) {
        y = parseInt(y, 10) * progress + "%";
      } else {
        y = y * progress + "px";
      }

      if (typeof opacity !== "undefined" && opacity !== null) {
        var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
        $el[0].style.opacity = currentOpacity;
      }

      if (typeof scale === "undefined" || scale === null) {
        $el.transform("translate3d(" + x + ", " + y + ", 0px)");
      } else {
        var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
        $el.transform(
          "translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"
        );
      }
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el,
        slides = swiper.slides,
        progress = swiper.progress,
        snapGrid = swiper.snapGrid;
      $el
        .children(
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
        )
        .each(function (el) {
          swiper.parallax.setTransform(el, progress);
        });
      slides.each(function (slideEl, slideIndex) {
        var slideProgress = slideEl.progress;

        if (
          swiper.params.slidesPerGroup > 1 &&
          swiper.params.slidesPerView !== "auto"
        ) {
          slideProgress +=
            Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
        }

        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $(slideEl)
          .find(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (el) {
            swiper.parallax.setTransform(el, slideProgress);
          });
      });
    },
    setTransition: function setTransition(duration) {
      if (duration === void 0) {
        duration = this.params.speed;
      }

      var swiper = this;
      var $el = swiper.$el;
      $el
        .find(
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
        )
        .each(function (parallaxEl) {
          var $parallaxEl = $(parallaxEl);
          var parallaxDuration =
            parseInt($parallaxEl.attr("data-swiper-parallax-duration"), 10) ||
            duration;
          if (duration === 0) parallaxDuration = 0;
          $parallaxEl.transition(parallaxDuration);
        });
    },
  };
  var Parallax$1 = {
    name: "parallax",
    params: {
      parallax: {
        enabled: false,
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        parallax: _extends({}, Parallax),
      });
    },
    on: {
      beforeInit: function beforeInit(swiper) {
        if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      init: function init(swiper) {
        if (!swiper.params.parallax.enabled) return;
        swiper.parallax.setTranslate();
      },
      setTranslate: function setTranslate(swiper) {
        if (!swiper.params.parallax.enabled) return;
        swiper.parallax.setTranslate();
      },
      setTransition: function setTransition(swiper, duration) {
        if (!swiper.params.parallax.enabled) return;
        swiper.parallax.setTransition(duration);
      },
    },
  };

  var Zoom = {
    // Calc Scale From Multi-touches
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;
      var x1 = e.targetTouches[0].pageX;
      var y1 = e.targetTouches[0].pageY;
      var x2 = e.targetTouches[1].pageX;
      var y2 = e.targetTouches[1].pageY;
      var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      return distance;
    },
    // Events
    onGestureStart: function onGestureStart(e) {
      var swiper = this;
      var support = swiper.support;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;

      if (!support.gestures) {
        if (
          e.type !== "touchstart" ||
          (e.type === "touchstart" && e.targetTouches.length < 2)
        ) {
          return;
        }

        zoom.fakeGestureTouched = true;
        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
      }

      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $(e.target).closest("." + swiper.params.slideClass);
        if (gesture.$slideEl.length === 0)
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find(
          "img, svg, canvas, picture, .swiper-zoom-target"
        );
        gesture.$imageWrapEl = gesture.$imageEl.parent(
          "." + params.containerClass
        );
        gesture.maxRatio =
          gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;

        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }

      if (gesture.$imageEl) {
        gesture.$imageEl.transition(0);
      }

      swiper.zoom.isScaling = true;
    },
    onGestureChange: function onGestureChange(e) {
      var swiper = this;
      var support = swiper.support;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;

      if (!support.gestures) {
        if (
          e.type !== "touchmove" ||
          (e.type === "touchmove" && e.targetTouches.length < 2)
        ) {
          return;
        }

        zoom.fakeGestureMoved = true;
        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
      }

      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        if (e.type === "gesturechange") zoom.onGestureStart(e);
        return;
      }

      if (support.gestures) {
        zoom.scale = e.scale * zoom.currentScale;
      } else {
        zoom.scale =
          (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
      }

      if (zoom.scale > gesture.maxRatio) {
        zoom.scale =
          gesture.maxRatio -
          1 +
          Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
      }

      if (zoom.scale < params.minRatio) {
        zoom.scale =
          params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
      }

      gesture.$imageEl.transform(
        "translate3d(0,0,0) scale(" + zoom.scale + ")"
      );
    },
    onGestureEnd: function onGestureEnd(e) {
      var swiper = this;
      var device = swiper.device;
      var support = swiper.support;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;

      if (!support.gestures) {
        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
          return;
        }

        if (
          e.type !== "touchend" ||
          (e.type === "touchend" &&
            e.changedTouches.length < 2 &&
            !device.android)
        ) {
          return;
        }

        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
      }

      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      zoom.scale = Math.max(
        Math.min(zoom.scale, gesture.maxRatio),
        params.minRatio
      );
      gesture.$imageEl
        .transition(swiper.params.speed)
        .transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
      zoom.currentScale = zoom.scale;
      zoom.isScaling = false;
      if (zoom.scale === 1) gesture.$slideEl = undefined;
    },
    onTouchStart: function onTouchStart(e) {
      var swiper = this;
      var device = swiper.device;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture,
        image = zoom.image;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      if (image.isTouched) return;
      if (device.android && e.cancelable) e.preventDefault();
      image.isTouched = true;
      image.touchesStart.x =
        e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y =
        e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function onTouchMove(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) return;

      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = getTranslate(gesture.$imageWrapEl[0], "x") || 0;
        image.startY = getTranslate(gesture.$imageWrapEl[0], "y") || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);

        if (swiper.rtl) {
          image.startX = -image.startX;
          image.startY = -image.startY;
        }
      } // Define if we need image drag

      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      if (
        scaledWidth < gesture.slideWidth &&
        scaledHeight < gesture.slideHeight
      )
        return;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.touchesCurrent.x =
        e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y =
        e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY;

      if (!image.isMoved && !zoom.isScaling) {
        if (
          swiper.isHorizontal() &&
          ((Math.floor(image.minX) === Math.floor(image.startX) &&
            image.touchesCurrent.x < image.touchesStart.x) ||
            (Math.floor(image.maxX) === Math.floor(image.startX) &&
              image.touchesCurrent.x > image.touchesStart.x))
        ) {
          image.isTouched = false;
          return;
        }

        if (
          !swiper.isHorizontal() &&
          ((Math.floor(image.minY) === Math.floor(image.startY) &&
            image.touchesCurrent.y < image.touchesStart.y) ||
            (Math.floor(image.maxY) === Math.floor(image.startY) &&
              image.touchesCurrent.y > image.touchesStart.y))
        ) {
          image.isTouched = false;
          return;
        }
      }

      if (e.cancelable) {
        e.preventDefault();
      }

      e.stopPropagation();
      image.isMoved = true;
      image.currentX =
        image.touchesCurrent.x - image.touchesStart.x + image.startX;
      image.currentY =
        image.touchesCurrent.y - image.touchesStart.y + image.startY;

      if (image.currentX < image.minX) {
        image.currentX =
          image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
      }

      if (image.currentX > image.maxX) {
        image.currentX =
          image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
      }

      if (image.currentY < image.minY) {
        image.currentY =
          image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
      }

      if (image.currentY > image.maxY) {
        image.currentY =
          image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
      } // Velocity

      if (!velocity.prevPositionX)
        velocity.prevPositionX = image.touchesCurrent.x;
      if (!velocity.prevPositionY)
        velocity.prevPositionY = image.touchesCurrent.y;
      if (!velocity.prevTime) velocity.prevTime = Date.now();
      velocity.x =
        (image.touchesCurrent.x - velocity.prevPositionX) /
        (Date.now() - velocity.prevTime) /
        2;
      velocity.y =
        (image.touchesCurrent.y - velocity.prevPositionY) /
        (Date.now() - velocity.prevTime) /
        2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2)
        velocity.x = 0;
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2)
        velocity.y = 0;
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();
      gesture.$imageWrapEl.transform(
        "translate3d(" + image.currentX + "px, " + image.currentY + "px,0)"
      );
    },
    onTouchEnd: function onTouchEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }

      image.isTouched = false;
      image.isMoved = false;
      var momentumDurationX = 300;
      var momentumDurationY = 300;
      var momentumDistanceX = velocity.x * momentumDurationX;
      var newPositionX = image.currentX + momentumDistanceX;
      var momentumDistanceY = velocity.y * momentumDurationY;
      var newPositionY = image.currentY + momentumDistanceY; // Fix duration

      if (velocity.x !== 0)
        momentumDurationX = Math.abs(
          (newPositionX - image.currentX) / velocity.x
        );
      if (velocity.y !== 0)
        momentumDurationY = Math.abs(
          (newPositionY - image.currentY) / velocity.y
        );
      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
      image.currentX = newPositionX;
      image.currentY = newPositionY; // Define if we need image drag

      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(
        Math.min(image.currentX, image.maxX),
        image.minX
      );
      image.currentY = Math.max(
        Math.min(image.currentY, image.maxY),
        image.minY
      );
      gesture.$imageWrapEl
        .transition(momentumDuration)
        .transform(
          "translate3d(" + image.currentX + "px, " + image.currentY + "px,0)"
        );
    },
    onTransitionEnd: function onTransitionEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;

      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        if (gesture.$imageEl) {
          gesture.$imageEl.transform("translate3d(0,0,0) scale(1)");
        }

        if (gesture.$imageWrapEl) {
          gesture.$imageWrapEl.transform("translate3d(0,0,0)");
        }

        zoom.scale = 1;
        zoom.currentScale = 1;
        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;
      }
    },
    // Toggle Zoom
    toggle: function toggle(e) {
      var swiper = this;
      var zoom = swiper.zoom;

      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoom.out();
      } else {
        // Zoom In
        zoom.in(e);
      }
    },
    in: function _in(e) {
      var swiper = this;
      var window = getWindow();
      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture,
        image = zoom.image;

      if (!gesture.$slideEl) {
        if (
          swiper.params.virtual &&
          swiper.params.virtual.enabled &&
          swiper.virtual
        ) {
          gesture.$slideEl = swiper.$wrapperEl.children(
            "." + swiper.params.slideActiveClass
          );
        } else {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }

        gesture.$imageEl = gesture.$slideEl.find(
          "img, svg, canvas, picture, .swiper-zoom-target"
        );
        gesture.$imageWrapEl = gesture.$imageEl.parent(
          "." + params.containerClass
        );
      }

      if (
        !gesture.$imageEl ||
        gesture.$imageEl.length === 0 ||
        !gesture.$imageWrapEl ||
        gesture.$imageWrapEl.length === 0
      )
        return;
      gesture.$slideEl.addClass("" + params.zoomedSlideClass);
      var touchX;
      var touchY;
      var offsetX;
      var offsetY;
      var diffX;
      var diffY;
      var translateX;
      var translateY;
      var imageWidth;
      var imageHeight;
      var scaledWidth;
      var scaledHeight;
      var translateMinX;
      var translateMinY;
      var translateMaxX;
      var translateMaxY;
      var slideWidth;
      var slideHeight;

      if (typeof image.touchesStart.x === "undefined" && e) {
        touchX = e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === "touchend" ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }

      zoom.scale =
        gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
      zoom.currentScale =
        gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;

      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left + window.scrollX;
        offsetY = gesture.$slideEl.offset().top + window.scrollY;
        diffX = offsetX + slideWidth / 2 - touchX;
        diffY = offsetY + slideHeight / 2 - touchY;
        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;
        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;

        if (translateX < translateMinX) {
          translateX = translateMinX;
        }

        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }

        if (translateY < translateMinY) {
          translateY = translateMinY;
        }

        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }

      gesture.$imageWrapEl
        .transition(300)
        .transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
      gesture.$imageEl
        .transition(300)
        .transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    },
    out: function out() {
      var swiper = this;
      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;

      if (!gesture.$slideEl) {
        if (
          swiper.params.virtual &&
          swiper.params.virtual.enabled &&
          swiper.virtual
        ) {
          gesture.$slideEl = swiper.$wrapperEl.children(
            "." + swiper.params.slideActiveClass
          );
        } else {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }

        gesture.$imageEl = gesture.$slideEl.find(
          "img, svg, canvas, picture, .swiper-zoom-target"
        );
        gesture.$imageWrapEl = gesture.$imageEl.parent(
          "." + params.containerClass
        );
      }

      if (
        !gesture.$imageEl ||
        gesture.$imageEl.length === 0 ||
        !gesture.$imageWrapEl ||
        gesture.$imageWrapEl.length === 0
      )
        return;
      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform("translate3d(0,0,0)");
      gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)");
      gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
      gesture.$slideEl = undefined;
    },
    toggleGestures: function toggleGestures(method) {
      var swiper = this;
      var zoom = swiper.zoom;
      var selector = zoom.slideSelector,
        passive = zoom.passiveListener;
      swiper.$wrapperEl[method](
        "gesturestart",
        selector,
        zoom.onGestureStart,
        passive
      );
      swiper.$wrapperEl[method](
        "gesturechange",
        selector,
        zoom.onGestureChange,
        passive
      );
      swiper.$wrapperEl[method](
        "gestureend",
        selector,
        zoom.onGestureEnd,
        passive
      );
    },
    enableGestures: function enableGestures() {
      if (this.zoom.gesturesEnabled) return;
      this.zoom.gesturesEnabled = true;
      this.zoom.toggleGestures("on");
    },
    disableGestures: function disableGestures() {
      if (!this.zoom.gesturesEnabled) return;
      this.zoom.gesturesEnabled = false;
      this.zoom.toggleGestures("off");
    },
    // Attach/Detach Events
    enable: function enable() {
      var swiper = this;
      var support = swiper.support;
      var zoom = swiper.zoom;
      if (zoom.enabled) return;
      zoom.enabled = true;
      var passiveListener =
        swiper.touchEvents.start === "touchstart" &&
        support.passiveListener &&
        swiper.params.passiveListeners
          ? {
              passive: true,
              capture: false,
            }
          : false;
      var activeListenerWithCapture = support.passiveListener
        ? {
            passive: false,
            capture: true,
          }
        : true;
      var slideSelector = "." + swiper.params.slideClass;
      swiper.zoom.passiveListener = passiveListener;
      swiper.zoom.slideSelector = slideSelector; // Scale image

      if (support.gestures) {
        swiper.$wrapperEl.on(
          swiper.touchEvents.start,
          swiper.zoom.enableGestures,
          passiveListener
        );
        swiper.$wrapperEl.on(
          swiper.touchEvents.end,
          swiper.zoom.disableGestures,
          passiveListener
        );
      } else if (swiper.touchEvents.start === "touchstart") {
        swiper.$wrapperEl.on(
          swiper.touchEvents.start,
          slideSelector,
          zoom.onGestureStart,
          passiveListener
        );
        swiper.$wrapperEl.on(
          swiper.touchEvents.move,
          slideSelector,
          zoom.onGestureChange,
          activeListenerWithCapture
        );
        swiper.$wrapperEl.on(
          swiper.touchEvents.end,
          slideSelector,
          zoom.onGestureEnd,
          passiveListener
        );

        if (swiper.touchEvents.cancel) {
          swiper.$wrapperEl.on(
            swiper.touchEvents.cancel,
            slideSelector,
            zoom.onGestureEnd,
            passiveListener
          );
        }
      } // Move image

      swiper.$wrapperEl.on(
        swiper.touchEvents.move,
        "." + swiper.params.zoom.containerClass,
        zoom.onTouchMove,
        activeListenerWithCapture
      );
    },
    disable: function disable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (!zoom.enabled) return;
      var support = swiper.support;
      swiper.zoom.enabled = false;
      var passiveListener =
        swiper.touchEvents.start === "touchstart" &&
        support.passiveListener &&
        swiper.params.passiveListeners
          ? {
              passive: true,
              capture: false,
            }
          : false;
      var activeListenerWithCapture = support.passiveListener
        ? {
            passive: false,
            capture: true,
          }
        : true;
      var slideSelector = "." + swiper.params.slideClass; // Scale image

      if (support.gestures) {
        swiper.$wrapperEl.off(
          swiper.touchEvents.start,
          swiper.zoom.enableGestures,
          passiveListener
        );
        swiper.$wrapperEl.off(
          swiper.touchEvents.end,
          swiper.zoom.disableGestures,
          passiveListener
        );
      } else if (swiper.touchEvents.start === "touchstart") {
        swiper.$wrapperEl.off(
          swiper.touchEvents.start,
          slideSelector,
          zoom.onGestureStart,
          passiveListener
        );
        swiper.$wrapperEl.off(
          swiper.touchEvents.move,
          slideSelector,
          zoom.onGestureChange,
          activeListenerWithCapture
        );
        swiper.$wrapperEl.off(
          swiper.touchEvents.end,
          slideSelector,
          zoom.onGestureEnd,
          passiveListener
        );

        if (swiper.touchEvents.cancel) {
          swiper.$wrapperEl.off(
            swiper.touchEvents.cancel,
            slideSelector,
            zoom.onGestureEnd,
            passiveListener
          );
        }
      } // Move image

      swiper.$wrapperEl.off(
        swiper.touchEvents.move,
        "." + swiper.params.zoom.containerClass,
        zoom.onTouchMove,
        activeListenerWithCapture
      );
    },
  };
  var Zoom$1 = {
    name: "zoom",
    params: {
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed",
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        zoom: _extends(
          {
            enabled: false,
            scale: 1,
            currentScale: 1,
            isScaling: false,
            gesture: {
              $slideEl: undefined,
              slideWidth: undefined,
              slideHeight: undefined,
              $imageEl: undefined,
              $imageWrapEl: undefined,
              maxRatio: 3,
            },
            image: {
              isTouched: undefined,
              isMoved: undefined,
              currentX: undefined,
              currentY: undefined,
              minX: undefined,
              minY: undefined,
              maxX: undefined,
              maxY: undefined,
              width: undefined,
              height: undefined,
              startX: undefined,
              startY: undefined,
              touchesStart: {},
              touchesCurrent: {},
            },
            velocity: {
              x: undefined,
              y: undefined,
              prevPositionX: undefined,
              prevPositionY: undefined,
              prevTime: undefined,
            },
          },
          Zoom
        ),
      });
      var scale = 1;
      Object.defineProperty(swiper.zoom, "scale", {
        get: function get() {
          return scale;
        },
        set: function set(value) {
          if (scale !== value) {
            var imageEl = swiper.zoom.gesture.$imageEl
              ? swiper.zoom.gesture.$imageEl[0]
              : undefined;
            var slideEl = swiper.zoom.gesture.$slideEl
              ? swiper.zoom.gesture.$slideEl[0]
              : undefined;
            swiper.emit("zoomChange", value, imageEl, slideEl);
          }

          scale = value;
        },
      });
    },
    on: {
      init: function init(swiper) {
        if (swiper.params.zoom.enabled) {
          swiper.zoom.enable();
        }
      },
      destroy: function destroy(swiper) {
        swiper.zoom.disable();
      },
      touchStart: function touchStart(swiper, e) {
        if (!swiper.zoom.enabled) return;
        swiper.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(swiper, e) {
        if (!swiper.zoom.enabled) return;
        swiper.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(swiper, e) {
        if (
          !swiper.animating &&
          swiper.params.zoom.enabled &&
          swiper.zoom.enabled &&
          swiper.params.zoom.toggle
        ) {
          swiper.zoom.toggle(e);
        }
      },
      transitionEnd: function transitionEnd(swiper) {
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          swiper.zoom.onTransitionEnd();
        }
      },
      slideChange: function slideChange(swiper) {
        if (
          swiper.zoom.enabled &&
          swiper.params.zoom.enabled &&
          swiper.params.cssMode
        ) {
          swiper.zoom.onTransitionEnd();
        }
      },
    },
  };

  var Lazy = {
    loadInSlide: function loadInSlide(index, loadInDuplicate) {
      if (loadInDuplicate === void 0) {
        loadInDuplicate = true;
      }

      var swiper = this;
      var params = swiper.params.lazy;
      if (typeof index === "undefined") return;
      if (swiper.slides.length === 0) return;
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var $slideEl = isVirtual
        ? swiper.$wrapperEl.children(
            "." +
              swiper.params.slideClass +
              '[data-swiper-slide-index="' +
              index +
              '"]'
          )
        : swiper.slides.eq(index);
      var $images = $slideEl.find(
        "." +
          params.elementClass +
          ":not(." +
          params.loadedClass +
          "):not(." +
          params.loadingClass +
          ")"
      );

      if (
        $slideEl.hasClass(params.elementClass) &&
        !$slideEl.hasClass(params.loadedClass) &&
        !$slideEl.hasClass(params.loadingClass)
      ) {
        $images.push($slideEl[0]);
      }

      if ($images.length === 0) return;
      $images.each(function (imageEl) {
        var $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);
        var background = $imageEl.attr("data-background");
        var src = $imageEl.attr("data-src");
        var srcset = $imageEl.attr("data-srcset");
        var sizes = $imageEl.attr("data-sizes");
        var $pictureEl = $imageEl.parent("picture");
        swiper.loadImage(
          $imageEl[0],
          src || background,
          srcset,
          sizes,
          false,
          function () {
            if (
              typeof swiper === "undefined" ||
              swiper === null ||
              !swiper ||
              (swiper && !swiper.params) ||
              swiper.destroyed
            )
              return;

            if (background) {
              $imageEl.css("background-image", 'url("' + background + '")');
              $imageEl.removeAttr("data-background");
            } else {
              if (srcset) {
                $imageEl.attr("srcset", srcset);
                $imageEl.removeAttr("data-srcset");
              }

              if (sizes) {
                $imageEl.attr("sizes", sizes);
                $imageEl.removeAttr("data-sizes");
              }

              if ($pictureEl.length) {
                $pictureEl.children("source").each(function (sourceEl) {
                  var $source = $(sourceEl);

                  if ($source.attr("data-srcset")) {
                    $source.attr("srcset", $source.attr("data-srcset"));
                    $source.removeAttr("data-srcset");
                  }
                });
              }

              if (src) {
                $imageEl.attr("src", src);
                $imageEl.removeAttr("data-src");
              }
            }

            $imageEl
              .addClass(params.loadedClass)
              .removeClass(params.loadingClass);
            $slideEl.find("." + params.preloaderClass).remove();

            if (swiper.params.loop && loadInDuplicate) {
              var slideOriginalIndex = $slideEl.attr("data-swiper-slide-index");

              if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                var originalSlide = swiper.$wrapperEl.children(
                  '[data-swiper-slide-index="' +
                    slideOriginalIndex +
                    '"]:not(.' +
                    swiper.params.slideDuplicateClass +
                    ")"
                );
                swiper.lazy.loadInSlide(originalSlide.index(), false);
              } else {
                var duplicatedSlide = swiper.$wrapperEl.children(
                  "." +
                    swiper.params.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    slideOriginalIndex +
                    '"]'
                );
                swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
              }
            }

            swiper.emit("lazyImageReady", $slideEl[0], $imageEl[0]);

            if (swiper.params.autoHeight) {
              swiper.updateAutoHeight();
            }
          }
        );
        swiper.emit("lazyImageLoad", $slideEl[0], $imageEl[0]);
      });
    },
    load: function load() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl,
        swiperParams = swiper.params,
        slides = swiper.slides,
        activeIndex = swiper.activeIndex;
      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      var params = swiperParams.lazy;
      var slidesPerView = swiperParams.slidesPerView;

      if (slidesPerView === "auto") {
        slidesPerView = 0;
      }

      function slideExist(index) {
        if (isVirtual) {
          if (
            $wrapperEl.children(
              "." +
                swiperParams.slideClass +
                '[data-swiper-slide-index="' +
                index +
                '"]'
            ).length
          ) {
            return true;
          }
        } else if (slides[index]) return true;

        return false;
      }

      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr("data-swiper-slide-index");
        }

        return $(slideEl).index();
      }

      if (!swiper.lazy.initialImageLoaded)
        swiper.lazy.initialImageLoaded = true;

      if (swiper.params.watchSlidesVisibility) {
        $wrapperEl
          .children("." + swiperParams.slideVisibleClass)
          .each(function (slideEl) {
            var index = isVirtual
              ? $(slideEl).attr("data-swiper-slide-index")
              : $(slideEl).index();
            swiper.lazy.loadInSlide(index);
          });
      } else if (slidesPerView > 1) {
        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) swiper.lazy.loadInSlide(i);
        }
      } else {
        swiper.lazy.loadInSlide(activeIndex);
      }

      if (params.loadPrevNext) {
        if (
          slidesPerView > 1 ||
          (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)
        ) {
          var amount = params.loadPrevNextAmount;
          var spv = slidesPerView;
          var maxIndex = Math.min(
            activeIndex + spv + Math.max(amount, spv),
            slides.length
          );
          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

          for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) {
            if (slideExist(_i)) swiper.lazy.loadInSlide(_i);
          } // Prev Slides

          for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
            if (slideExist(_i2)) swiper.lazy.loadInSlide(_i2);
          }
        } else {
          var nextSlide = $wrapperEl.children(
            "." + swiperParams.slideNextClass
          );
          if (nextSlide.length > 0)
            swiper.lazy.loadInSlide(slideIndex(nextSlide));
          var prevSlide = $wrapperEl.children(
            "." + swiperParams.slidePrevClass
          );
          if (prevSlide.length > 0)
            swiper.lazy.loadInSlide(slideIndex(prevSlide));
        }
      }
    },
    checkInViewOnLoad: function checkInViewOnLoad() {
      var window = getWindow();
      var swiper = this;
      if (!swiper || swiper.destroyed) return;
      var $scrollElement = swiper.params.lazy.scrollingElement
        ? $(swiper.params.lazy.scrollingElement)
        : $(window);
      var isWindow = $scrollElement[0] === window;
      var scrollElementWidth = isWindow
        ? window.innerWidth
        : $scrollElement[0].offsetWidth;
      var scrollElementHeight = isWindow
        ? window.innerHeight
        : $scrollElement[0].offsetHeight;
      var swiperOffset = swiper.$el.offset();
      var rtl = swiper.rtlTranslate;
      var inView = false;
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      var swiperCoord = [
        [swiperOffset.left, swiperOffset.top],
        [swiperOffset.left + swiper.width, swiperOffset.top],
        [swiperOffset.left, swiperOffset.top + swiper.height],
        [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height],
      ];

      for (var i = 0; i < swiperCoord.length; i += 1) {
        var point = swiperCoord[i];

        if (
          point[0] >= 0 &&
          point[0] <= scrollElementWidth &&
          point[1] >= 0 &&
          point[1] <= scrollElementHeight
        ) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

          inView = true;
        }
      }

      if (inView) {
        swiper.lazy.load();
        $scrollElement.off("scroll", swiper.lazy.checkInViewOnLoad);
      } else if (!swiper.lazy.scrollHandlerAttached) {
        swiper.lazy.scrollHandlerAttached = true;
        $scrollElement.on("scroll", swiper.lazy.checkInViewOnLoad);
      }
    },
  };
  var Lazy$1 = {
    name: "lazy",
    params: {
      lazy: {
        checkInView: false,
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,
        scrollingElement: "",
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader",
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        lazy: _extends(
          {
            initialImageLoaded: false,
          },
          Lazy
        ),
      });
    },
    on: {
      beforeInit: function beforeInit(swiper) {
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      },
      init: function init(swiper) {
        if (
          swiper.params.lazy.enabled &&
          !swiper.params.loop &&
          swiper.params.initialSlide === 0
        ) {
          if (swiper.params.lazy.checkInView) {
            swiper.lazy.checkInViewOnLoad();
          } else {
            swiper.lazy.load();
          }
        }
      },
      scroll: function scroll(swiper) {
        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
          swiper.lazy.load();
        }
      },
      "scrollbarDragMove resize _freeModeNoMomentumRelease": function lazyLoad(
        swiper
      ) {
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      transitionStart: function transitionStart(swiper) {
        if (swiper.params.lazy.enabled) {
          if (
            swiper.params.lazy.loadOnTransitionStart ||
            (!swiper.params.lazy.loadOnTransitionStart &&
              !swiper.lazy.initialImageLoaded)
          ) {
            swiper.lazy.load();
          }
        }
      },
      transitionEnd: function transitionEnd(swiper) {
        if (
          swiper.params.lazy.enabled &&
          !swiper.params.lazy.loadOnTransitionStart
        ) {
          swiper.lazy.load();
        }
      },
      slideChange: function slideChange(swiper) {
        if (swiper.params.lazy.enabled && swiper.params.cssMode) {
          swiper.lazy.load();
        }
      },
    },
  };

  var Controller = {
    LinearSpline: function LinearSpline(x, y) {
      var binarySearch = (function search() {
        var maxIndex;
        var minIndex;
        var guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;

          while (maxIndex - minIndex > 1) {
            guess = (maxIndex + minIndex) >> 1;

            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }

          return maxIndex;
        };
      })();

      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.

      var i1;
      var i3;

      this.interpolate = function interpolate(x2) {
        if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

        return (
          ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) /
            (this.x[i3] - this.x[i1]) +
          this.y[i1]
        );
      };

      return this;
    },
    // xxx: for now i will just save one spline function to to
    getInterpolateFunction: function getInterpolateFunction(c) {
      var swiper = this;

      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop
          ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
          : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    },
    setTranslate: function setTranslate(_setTranslate, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var multiplier;
      var controlledTranslate;
      var Swiper = swiper.constructor;

      function setControlledTranslate(c) {
        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        var translate = swiper.rtlTranslate
          ? -swiper.translate
          : swiper.translate;

        if (swiper.params.controller.by === "slide") {
          swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out

          controlledTranslate = -swiper.controller.spline.interpolate(
            -translate
          );
        }

        if (
          !controlledTranslate ||
          swiper.params.controller.by === "container"
        ) {
          multiplier =
            (c.maxTranslate() - c.minTranslate()) /
            (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate =
            (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
        }

        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }

        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }

      if (Array.isArray(controlled)) {
        for (var i = 0; i < controlled.length; i += 1) {
          if (
            controlled[i] !== byController &&
            controlled[i] instanceof Swiper
          ) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      var Swiper = swiper.constructor;
      var controlled = swiper.controller.control;
      var i;

      function setControlledTransition(c) {
        c.setTransition(duration, swiper);

        if (duration !== 0) {
          c.transitionStart();

          if (c.params.autoHeight) {
            nextTick(function () {
              c.updateAutoHeight();
            });
          }

          c.$wrapperEl.transitionEnd(function () {
            if (!controlled) return;

            if (c.params.loop && swiper.params.controller.by === "slide") {
              c.loopFix();
            }

            c.transitionEnd();
          });
        }
      }

      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (
            controlled[i] !== byController &&
            controlled[i] instanceof Swiper
          ) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    },
  };
  var Controller$1 = {
    name: "controller",
    params: {
      controller: {
        control: undefined,
        inverse: false,
        by: "slide", // or 'container'
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        controller: _extends(
          {
            control: swiper.params.controller.control,
          },
          Controller
        ),
      });
    },
    on: {
      update: function update(swiper) {
        if (!swiper.controller.control) return;

        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      resize: function resize(swiper) {
        if (!swiper.controller.control) return;

        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      observerUpdate: function observerUpdate(swiper) {
        if (!swiper.controller.control) return;

        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      setTranslate: function setTranslate(swiper, translate, byController) {
        if (!swiper.controller.control) return;
        swiper.controller.setTranslate(translate, byController);
      },
      setTransition: function setTransition(swiper, duration, byController) {
        if (!swiper.controller.control) return;
        swiper.controller.setTransition(duration, byController);
      },
    },
  };

  var A11y = {
    getRandomNumber: function getRandomNumber(size) {
      if (size === void 0) {
        size = 16;
      }

      var randomChar = function randomChar() {
        return Math.round(16 * Math.random()).toString(16);
      };

      return "x".repeat(size).replace(/x/g, randomChar);
    },
    makeElFocusable: function makeElFocusable($el) {
      $el.attr("tabIndex", "0");
      return $el;
    },
    makeElNotFocusable: function makeElNotFocusable($el) {
      $el.attr("tabIndex", "-1");
      return $el;
    },
    addElRole: function addElRole($el, role) {
      $el.attr("role", role);
      return $el;
    },
    addElRoleDescription: function addElRoleDescription($el, description) {
      $el.attr("aria-roledescription", description);
      return $el;
    },
    addElControls: function addElControls($el, controls) {
      $el.attr("aria-controls", controls);
      return $el;
    },
    addElLabel: function addElLabel($el, label) {
      $el.attr("aria-label", label);
      return $el;
    },
    addElId: function addElId($el, id) {
      $el.attr("id", id);
      return $el;
    },
    addElLive: function addElLive($el, live) {
      $el.attr("aria-live", live);
      return $el;
    },
    disableEl: function disableEl($el) {
      $el.attr("aria-disabled", true);
      return $el;
    },
    enableEl: function enableEl($el) {
      $el.attr("aria-disabled", false);
      return $el;
    },
    onEnterOrSpaceKey: function onEnterOrSpaceKey(e) {
      if (e.keyCode !== 13 && e.keyCode !== 32) return;
      var swiper = this;
      var params = swiper.params.a11y;
      var $targetEl = $(e.target);

      if (
        swiper.navigation &&
        swiper.navigation.$nextEl &&
        $targetEl.is(swiper.navigation.$nextEl)
      ) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }

        if (swiper.isEnd) {
          swiper.a11y.notify(params.lastSlideMessage);
        } else {
          swiper.a11y.notify(params.nextSlideMessage);
        }
      }

      if (
        swiper.navigation &&
        swiper.navigation.$prevEl &&
        $targetEl.is(swiper.navigation.$prevEl)
      ) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }

        if (swiper.isBeginning) {
          swiper.a11y.notify(params.firstSlideMessage);
        } else {
          swiper.a11y.notify(params.prevSlideMessage);
        }
      }

      if (
        swiper.pagination &&
        $targetEl.is(classesToSelector(swiper.params.pagination.bulletClass))
      ) {
        $targetEl[0].click();
      }
    },
    notify: function notify(message) {
      var swiper = this;
      var notification = swiper.a11y.liveRegion;
      if (notification.length === 0) return;
      notification.html("");
      notification.html(message);
    },
    updateNavigation: function updateNavigation() {
      var swiper = this;
      if (swiper.params.loop || !swiper.navigation) return;
      var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          swiper.a11y.disableEl($prevEl);
          swiper.a11y.makeElNotFocusable($prevEl);
        } else {
          swiper.a11y.enableEl($prevEl);
          swiper.a11y.makeElFocusable($prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          swiper.a11y.disableEl($nextEl);
          swiper.a11y.makeElNotFocusable($nextEl);
        } else {
          swiper.a11y.enableEl($nextEl);
          swiper.a11y.makeElFocusable($nextEl);
        }
      }
    },
    updatePagination: function updatePagination() {
      var swiper = this;
      var params = swiper.params.a11y;

      if (
        swiper.pagination &&
        swiper.params.pagination.clickable &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length
      ) {
        swiper.pagination.bullets.each(function (bulletEl) {
          var $bulletEl = $(bulletEl);
          swiper.a11y.makeElFocusable($bulletEl);

          if (!swiper.params.pagination.renderBullet) {
            swiper.a11y.addElRole($bulletEl, "button");
            swiper.a11y.addElLabel(
              $bulletEl,
              params.paginationBulletMessage.replace(
                /\{\{index\}\}/,
                $bulletEl.index() + 1
              )
            );
          }
        });
      }
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.a11y;
      swiper.$el.append(swiper.a11y.liveRegion); // Container

      var $containerEl = swiper.$el;

      if (params.containerRoleDescriptionMessage) {
        swiper.a11y.addElRoleDescription(
          $containerEl,
          params.containerRoleDescriptionMessage
        );
      }

      if (params.containerMessage) {
        swiper.a11y.addElLabel($containerEl, params.containerMessage);
      } // Wrapper

      var $wrapperEl = swiper.$wrapperEl;
      var wrapperId =
        $wrapperEl.attr("id") ||
        "swiper-wrapper-" + swiper.a11y.getRandomNumber(16);
      var live =
        swiper.params.autoplay && swiper.params.autoplay.enabled
          ? "off"
          : "polite";
      swiper.a11y.addElId($wrapperEl, wrapperId);
      swiper.a11y.addElLive($wrapperEl, live); // Slide

      if (params.itemRoleDescriptionMessage) {
        swiper.a11y.addElRoleDescription(
          $(swiper.slides),
          params.itemRoleDescriptionMessage
        );
      }

      swiper.a11y.addElRole($(swiper.slides), params.slideRole);
      swiper.slides.each(function (slideEl) {
        var $slideEl = $(slideEl);
        var ariaLabelMessage = params.slideLabelMessage
          .replace(/\{\{index\}\}/, $slideEl.index() + 1)
          .replace(/\{\{slidesLength\}\}/, swiper.slides.length);
        swiper.a11y.addElLabel($slideEl, ariaLabelMessage);
      }); // Navigation

      var $nextEl;
      var $prevEl;

      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }

      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }

      if ($nextEl && $nextEl.length) {
        swiper.a11y.makeElFocusable($nextEl);

        if ($nextEl[0].tagName !== "BUTTON") {
          swiper.a11y.addElRole($nextEl, "button");
          $nextEl.on("keydown", swiper.a11y.onEnterOrSpaceKey);
        }

        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
        swiper.a11y.addElControls($nextEl, wrapperId);
      }

      if ($prevEl && $prevEl.length) {
        swiper.a11y.makeElFocusable($prevEl);

        if ($prevEl[0].tagName !== "BUTTON") {
          swiper.a11y.addElRole($prevEl, "button");
          $prevEl.on("keydown", swiper.a11y.onEnterOrSpaceKey);
        }

        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
        swiper.a11y.addElControls($prevEl, wrapperId);
      } // Pagination

      if (
        swiper.pagination &&
        swiper.params.pagination.clickable &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length
      ) {
        swiper.pagination.$el.on(
          "keydown",
          classesToSelector(swiper.params.pagination.bulletClass),
          swiper.a11y.onEnterOrSpaceKey
        );
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0)
        swiper.a11y.liveRegion.remove();
      var $nextEl;
      var $prevEl;

      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }

      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }

      if ($nextEl) {
        $nextEl.off("keydown", swiper.a11y.onEnterOrSpaceKey);
      }

      if ($prevEl) {
        $prevEl.off("keydown", swiper.a11y.onEnterOrSpaceKey);
      } // Pagination

      if (
        swiper.pagination &&
        swiper.params.pagination.clickable &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length
      ) {
        swiper.pagination.$el.off(
          "keydown",
          classesToSelector(swiper.params.pagination.bulletClass),
          swiper.a11y.onEnterOrSpaceKey
        );
      }
    },
  };
  var A11y$1 = {
    name: "a11y",
    params: {
      a11y: {
        enabled: true,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        a11y: _extends({}, A11y, {
          liveRegion: $(
            '<span class="' +
              swiper.params.a11y.notificationClass +
              '" aria-live="assertive" aria-atomic="true"></span>'
          ),
        }),
      });
    },
    on: {
      afterInit: function afterInit(swiper) {
        if (!swiper.params.a11y.enabled) return;
        swiper.a11y.init();
        swiper.a11y.updateNavigation();
      },
      toEdge: function toEdge(swiper) {
        if (!swiper.params.a11y.enabled) return;
        swiper.a11y.updateNavigation();
      },
      fromEdge: function fromEdge(swiper) {
        if (!swiper.params.a11y.enabled) return;
        swiper.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate(swiper) {
        if (!swiper.params.a11y.enabled) return;
        swiper.a11y.updatePagination();
      },
      destroy: function destroy(swiper) {
        if (!swiper.params.a11y.enabled) return;
        swiper.a11y.destroy();
      },
    },
  };

  var History = {
    init: function init() {
      var swiper = this;
      var window = getWindow();
      if (!swiper.params.history) return;

      if (!window.history || !window.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }

      var history = swiper.history;
      history.initialized = true;
      history.paths = History.getPathValues(swiper.params.url);
      if (!history.paths.key && !history.paths.value) return;
      history.scrollToSlide(
        0,
        history.paths.value,
        swiper.params.runCallbacksOnInit
      );

      if (!swiper.params.history.replaceState) {
        window.addEventListener("popstate", swiper.history.setHistoryPopState);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      var window = getWindow();

      if (!swiper.params.history.replaceState) {
        window.removeEventListener(
          "popstate",
          swiper.history.setHistoryPopState
        );
      }
    },
    setHistoryPopState: function setHistoryPopState() {
      var swiper = this;
      swiper.history.paths = History.getPathValues(swiper.params.url);
      swiper.history.scrollToSlide(
        swiper.params.speed,
        swiper.history.paths.value,
        false
      );
    },
    getPathValues: function getPathValues(urlOverride) {
      var window = getWindow();
      var location;

      if (urlOverride) {
        location = new URL(urlOverride);
      } else {
        location = window.location;
      }

      var pathArray = location.pathname
        .slice(1)
        .split("/")
        .filter(function (part) {
          return part !== "";
        });
      var total = pathArray.length;
      var key = pathArray[total - 2];
      var value = pathArray[total - 1];
      return {
        key: key,
        value: value,
      };
    },
    setHistory: function setHistory(key, index) {
      var swiper = this;
      var window = getWindow();
      if (!swiper.history.initialized || !swiper.params.history.enabled) return;
      var location;

      if (swiper.params.url) {
        location = new URL(swiper.params.url);
      } else {
        location = window.location;
      }

      var slide = swiper.slides.eq(index);
      var value = History.slugify(slide.attr("data-history"));

      if (swiper.params.history.root.length > 0) {
        var root = swiper.params.history.root;
        if (root[root.length - 1] === "/")
          root = root.slice(0, root.length - 1);
        value = root + "/" + key + "/" + value;
      } else if (!location.pathname.includes(key)) {
        value = key + "/" + value;
      }

      var currentState = window.history.state;

      if (currentState && currentState.value === value) {
        return;
      }

      if (swiper.params.history.replaceState) {
        window.history.replaceState(
          {
            value: value,
          },
          null,
          value
        );
      } else {
        window.history.pushState(
          {
            value: value,
          },
          null,
          value
        );
      }
    },
    slugify: function slugify(text) {
      return text
        .toString()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    },
    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
      var swiper = this;

      if (value) {
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHistory = History.slugify(slide.attr("data-history"));

          if (
            slideHistory === value &&
            !slide.hasClass(swiper.params.slideDuplicateClass)
          ) {
            var index = slide.index();
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    },
  };
  var History$1 = {
    name: "history",
    params: {
      history: {
        enabled: false,
        root: "",
        replaceState: false,
        key: "slides",
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        history: _extends({}, History),
      });
    },
    on: {
      init: function init(swiper) {
        if (swiper.params.history.enabled) {
          swiper.history.init();
        }
      },
      destroy: function destroy(swiper) {
        if (swiper.params.history.enabled) {
          swiper.history.destroy();
        }
      },
      "transitionEnd _freeModeNoMomentumRelease":
        function transitionEnd_freeModeNoMomentumRelease(swiper) {
          if (swiper.history.initialized) {
            swiper.history.setHistory(
              swiper.params.history.key,
              swiper.activeIndex
            );
          }
        },
      slideChange: function slideChange(swiper) {
        if (swiper.history.initialized && swiper.params.cssMode) {
          swiper.history.setHistory(
            swiper.params.history.key,
            swiper.activeIndex
          );
        }
      },
    },
  };

  var HashNavigation = {
    onHashCange: function onHashCange() {
      var swiper = this;
      var document = getDocument();
      swiper.emit("hashChange");
      var newHash = document.location.hash.replace("#", "");
      var activeSlideHash = swiper.slides
        .eq(swiper.activeIndex)
        .attr("data-hash");

      if (newHash !== activeSlideHash) {
        var newIndex = swiper.$wrapperEl
          .children(
            "." + swiper.params.slideClass + '[data-hash="' + newHash + '"]'
          )
          .index();
        if (typeof newIndex === "undefined") return;
        swiper.slideTo(newIndex);
      }
    },
    setHash: function setHash() {
      var swiper = this;
      var window = getWindow();
      var document = getDocument();
      if (
        !swiper.hashNavigation.initialized ||
        !swiper.params.hashNavigation.enabled
      )
        return;

      if (
        swiper.params.hashNavigation.replaceState &&
        window.history &&
        window.history.replaceState
      ) {
        window.history.replaceState(
          null,
          null,
          "#" + swiper.slides.eq(swiper.activeIndex).attr("data-hash") || ""
        );
        swiper.emit("hashSet");
      } else {
        var slide = swiper.slides.eq(swiper.activeIndex);
        var hash = slide.attr("data-hash") || slide.attr("data-history");
        document.location.hash = hash || "";
        swiper.emit("hashSet");
      }
    },
    init: function init() {
      var swiper = this;
      var document = getDocument();
      var window = getWindow();
      if (
        !swiper.params.hashNavigation.enabled ||
        (swiper.params.history && swiper.params.history.enabled)
      )
        return;
      swiper.hashNavigation.initialized = true;
      var hash = document.location.hash.replace("#", "");

      if (hash) {
        var speed = 0;

        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHash = slide.attr("data-hash") || slide.attr("data-history");

          if (
            slideHash === hash &&
            !slide.hasClass(swiper.params.slideDuplicateClass)
          ) {
            var index = slide.index();
            swiper.slideTo(
              index,
              speed,
              swiper.params.runCallbacksOnInit,
              true
            );
          }
        }
      }

      if (swiper.params.hashNavigation.watchState) {
        $(window).on("hashchange", swiper.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      var window = getWindow();

      if (swiper.params.hashNavigation.watchState) {
        $(window).off("hashchange", swiper.hashNavigation.onHashCange);
      }
    },
  };
  var HashNavigation$1 = {
    name: "hash-navigation",
    params: {
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        hashNavigation: _extends(
          {
            initialized: false,
          },
          HashNavigation
        ),
      });
    },
    on: {
      init: function init(swiper) {
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.init();
        }
      },
      destroy: function destroy(swiper) {
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.destroy();
        }
      },
      "transitionEnd _freeModeNoMomentumRelease":
        function transitionEnd_freeModeNoMomentumRelease(swiper) {
          if (swiper.hashNavigation.initialized) {
            swiper.hashNavigation.setHash();
          }
        },
      slideChange: function slideChange(swiper) {
        if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
          swiper.hashNavigation.setHash();
        }
      },
    },
  };

  var Autoplay = {
    run: function run() {
      var swiper = this;
      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      var delay = swiper.params.autoplay.delay;

      if ($activeSlideEl.attr("data-swiper-autoplay")) {
        delay =
          $activeSlideEl.attr("data-swiper-autoplay") ||
          swiper.params.autoplay.delay;
      }

      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = nextTick(function () {
        var autoplayResult;

        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit("autoplay");
          } else if (!swiper.isBeginning) {
            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            autoplayResult = swiper.slideTo(
              swiper.slides.length - 1,
              swiper.params.speed,
              true,
              true
            );
            swiper.emit("autoplay");
          } else {
            swiper.autoplay.stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit("autoplay");
        } else if (!swiper.isEnd) {
          autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
          swiper.emit("autoplay");
        } else {
          swiper.autoplay.stop();
        }

        if (swiper.params.cssMode && swiper.autoplay.running)
          swiper.autoplay.run();
        else if (autoplayResult === false) {
          swiper.autoplay.run();
        }
      }, delay);
    },
    start: function start() {
      var swiper = this;
      if (typeof swiper.autoplay.timeout !== "undefined") return false;
      if (swiper.autoplay.running) return false;
      swiper.autoplay.running = true;
      swiper.emit("autoplayStart");
      swiper.autoplay.run();
      return true;
    },
    stop: function stop() {
      var swiper = this;
      if (!swiper.autoplay.running) return false;
      if (typeof swiper.autoplay.timeout === "undefined") return false;

      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = undefined;
      }

      swiper.autoplay.running = false;
      swiper.emit("autoplayStop");
      return true;
    },
    pause: function pause(speed) {
      var swiper = this;
      if (!swiper.autoplay.running) return;
      if (swiper.autoplay.paused) return;
      if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.paused = true;

      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      } else {
        ["transitionend", "webkitTransitionEnd"].forEach(function (event) {
          swiper.$wrapperEl[0].addEventListener(
            event,
            swiper.autoplay.onTransitionEnd
          );
        });
      }
    },
    onVisibilityChange: function onVisibilityChange() {
      var swiper = this;
      var document = getDocument();

      if (document.visibilityState === "hidden" && swiper.autoplay.running) {
        swiper.autoplay.pause();
      }

      if (document.visibilityState === "visible" && swiper.autoplay.paused) {
        swiper.autoplay.run();
        swiper.autoplay.paused = false;
      }
    },
    onTransitionEnd: function onTransitionEnd(e) {
      var swiper = this;
      if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
      if (e.target !== swiper.$wrapperEl[0]) return;
      ["transitionend", "webkitTransitionEnd"].forEach(function (event) {
        swiper.$wrapperEl[0].removeEventListener(
          event,
          swiper.autoplay.onTransitionEnd
        );
      });
      swiper.autoplay.paused = false;

      if (!swiper.autoplay.running) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.run();
      }
    },
    onMouseEnter: function onMouseEnter() {
      var swiper = this;
      swiper.autoplay.pause();
      ["transitionend", "webkitTransitionEnd"].forEach(function (event) {
        swiper.$wrapperEl[0].removeEventListener(
          event,
          swiper.autoplay.onTransitionEnd
        );
      });
    },
    onMouseLeave: function onMouseLeave() {
      var swiper = this;
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    },
    attachMouseEvents: function attachMouseEvents() {
      var swiper = this;

      if (swiper.params.autoplay.pauseOnMouseEnter) {
        swiper.$el.on("mouseenter", swiper.autoplay.onMouseEnter);
        swiper.$el.on("mouseleave", swiper.autoplay.onMouseLeave);
      }
    },
    detachMouseEvents: function detachMouseEvents() {
      var swiper = this;
      swiper.$el.off("mouseenter", swiper.autoplay.onMouseEnter);
      swiper.$el.off("mouseleave", swiper.autoplay.onMouseLeave);
    },
  };
  var Autoplay$1 = {
    name: "autoplay",
    params: {
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false,
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        autoplay: _extends({}, Autoplay, {
          running: false,
          paused: false,
        }),
      });
    },
    on: {
      init: function init(swiper) {
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
          var document = getDocument();
          document.addEventListener(
            "visibilitychange",
            swiper.autoplay.onVisibilityChange
          );
          swiper.autoplay.attachMouseEvents();
        }
      },
      beforeTransitionStart: function beforeTransitionStart(
        swiper,
        speed,
        internal
      ) {
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove: function sliderFirstMove(swiper) {
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.pause();
          }
        }
      },
      touchEnd: function touchEnd(swiper) {
        if (
          swiper.params.cssMode &&
          swiper.autoplay.paused &&
          !swiper.params.autoplay.disableOnInteraction
        ) {
          swiper.autoplay.run();
        }
      },
      destroy: function destroy(swiper) {
        swiper.autoplay.detachMouseEvents();

        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }

        var document = getDocument();
        document.removeEventListener(
          "visibilitychange",
          swiper.autoplay.onVisibilityChange
        );
      },
    },
  };

  var Fade = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;

      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = swiper.slides.eq(i);
        var offset = $slideEl[0].swiperSlideOffset;
        var tx = -offset;
        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
        var ty = 0;

        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }

        var slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl
          .css({
            opacity: slideOpacity,
          })
          .transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides,
        $wrapperEl = swiper.$wrapperEl;
      slides.transition(duration);

      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        slides.transitionEnd(function () {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ["webkitTransitionEnd", "transitionend"];

          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };
  var EffectFade = {
    name: "effect-fade",
    params: {
      fadeEffect: {
        crossFade: false,
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        fadeEffect: _extends({}, Fade),
      });
    },
    on: {
      beforeInit: function beforeInit(swiper) {
        if (swiper.params.effect !== "fade") return;
        swiper.classNames.push(swiper.params.containerModifierClass + "fade");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        extend(swiper.params, overwriteParams);
        extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate(swiper) {
        if (swiper.params.effect !== "fade") return;
        swiper.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(swiper, duration) {
        if (swiper.params.effect !== "fade") return;
        swiper.fadeEffect.setTransition(duration);
      },
    },
  };

  var Cube = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides,
        swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        rtl = swiper.rtlTranslate,
        swiperSize = swiper.size,
        browser = swiper.browser;
      var params = swiper.params.cubeEffect;
      var isHorizontal = swiper.isHorizontal();
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var wrapperRotate = 0;
      var $cubeShadowEl;

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find(".swiper-cube-shadow");

          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }

          $cubeShadowEl.css({
            height: swiperWidth + "px",
          });
        } else {
          $cubeShadowEl = $el.find(".swiper-cube-shadow");

          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }

      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideIndex = i;

        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr("data-swiper-slide-index"), 10);
        }

        var slideAngle = slideIndex * 90;
        var round = Math.floor(slideAngle / 360);

        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }

        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        var tx = 0;
        var ty = 0;
        var tz = 0;

        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + round * 4 * swiperSize;
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = 3 * swiperSize + swiperSize * 4 * round;
        }

        if (rtl) {
          tx = -tx;
        }

        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }

        var transform =
          "rotateX(" +
          (isHorizontal ? 0 : -slideAngle) +
          "deg) rotateY(" +
          (isHorizontal ? slideAngle : 0) +
          "deg) translate3d(" +
          tx +
          "px, " +
          ty +
          "px, " +
          tz +
          "px)";

        if (progress <= 1 && progress > -1) {
          wrapperRotate = slideIndex * 90 + progress * 90;
          if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
        }

        $slideEl.transform(transform);

        if (params.slideShadows) {
          // Set shadows
          var shadowBefore = isHorizontal
            ? $slideEl.find(".swiper-slide-shadow-left")
            : $slideEl.find(".swiper-slide-shadow-top");
          var shadowAfter = isHorizontal
            ? $slideEl.find(".swiper-slide-shadow-right")
            : $slideEl.find(".swiper-slide-shadow-bottom");

          if (shadowBefore.length === 0) {
            shadowBefore = $(
              '<div class="swiper-slide-shadow-' +
                (isHorizontal ? "left" : "top") +
                '"></div>'
            );
            $slideEl.append(shadowBefore);
          }

          if (shadowAfter.length === 0) {
            shadowAfter = $(
              '<div class="swiper-slide-shadow-' +
                (isHorizontal ? "right" : "bottom") +
                '"></div>'
            );
            $slideEl.append(shadowAfter);
          }

          if (shadowBefore.length)
            shadowBefore[0].style.opacity = Math.max(-progress, 0);
          if (shadowAfter.length)
            shadowAfter[0].style.opacity = Math.max(progress, 0);
        }
      }

      $wrapperEl.css({
        "-webkit-transform-origin": "50% 50% -" + swiperSize / 2 + "px",
        "-moz-transform-origin": "50% 50% -" + swiperSize / 2 + "px",
        "-ms-transform-origin": "50% 50% -" + swiperSize / 2 + "px",
        "transform-origin": "50% 50% -" + swiperSize / 2 + "px",
      });

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform(
            "translate3d(0px, " +
              (swiperWidth / 2 + params.shadowOffset) +
              "px, " +
              -swiperWidth / 2 +
              "px) rotateX(90deg) rotateZ(0deg) scale(" +
              params.shadowScale +
              ")"
          );
        } else {
          var shadowAngle =
            Math.abs(wrapperRotate) -
            Math.floor(Math.abs(wrapperRotate) / 90) * 90;
          var multiplier =
            1.5 -
            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2 +
              Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2);
          var scale1 = params.shadowScale;
          var scale2 = params.shadowScale / multiplier;
          var offset = params.shadowOffset;
          $cubeShadowEl.transform(
            "scale3d(" +
              scale1 +
              ", 1, " +
              scale2 +
              ") translate3d(0px, " +
              (swiperHeight / 2 + offset) +
              "px, " +
              -swiperHeight / 2 / scale2 +
              "px) rotateX(-90deg)"
          );
        }
      }

      var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
      $wrapperEl.transform(
        "translate3d(0px,0," +
          zFactor +
          "px) rotateX(" +
          (swiper.isHorizontal() ? 0 : wrapperRotate) +
          "deg) rotateY(" +
          (swiper.isHorizontal() ? -wrapperRotate : 0) +
          "deg)"
      );
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var $el = swiper.$el,
        slides = swiper.slides;
      slides
        .transition(duration)
        .find(
          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
        )
        .transition(duration);

      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find(".swiper-cube-shadow").transition(duration);
      }
    },
  };
  var EffectCube = {
    name: "effect-cube",
    params: {
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        cubeEffect: _extends({}, Cube),
      });
    },
    on: {
      beforeInit: function beforeInit(swiper) {
        if (swiper.params.effect !== "cube") return;
        swiper.classNames.push(swiper.params.containerModifierClass + "cube");
        swiper.classNames.push(swiper.params.containerModifierClass + "3d");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };
        extend(swiper.params, overwriteParams);
        extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate(swiper) {
        if (swiper.params.effect !== "cube") return;
        swiper.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(swiper, duration) {
        if (swiper.params.effect !== "cube") return;
        swiper.cubeEffect.setTransition(duration);
      },
    },
  };

  var Flip = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides,
        rtl = swiper.rtlTranslate;

      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var progress = $slideEl[0].progress;

        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }

        var offset = $slideEl[0].swiperSlideOffset;
        var rotate = -180 * progress;
        var rotateY = rotate;
        var rotateX = 0;
        var tx = -offset;
        var ty = 0;

        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }

        $slideEl[0].style.zIndex =
          -Math.abs(Math.round(progress)) + slides.length;

        if (swiper.params.flipEffect.slideShadows) {
          // Set shadows
          var shadowBefore = swiper.isHorizontal()
            ? $slideEl.find(".swiper-slide-shadow-left")
            : $slideEl.find(".swiper-slide-shadow-top");
          var shadowAfter = swiper.isHorizontal()
            ? $slideEl.find(".swiper-slide-shadow-right")
            : $slideEl.find(".swiper-slide-shadow-bottom");

          if (shadowBefore.length === 0) {
            shadowBefore = $(
              '<div class="swiper-slide-shadow-' +
                (swiper.isHorizontal() ? "left" : "top") +
                '"></div>'
            );
            $slideEl.append(shadowBefore);
          }

          if (shadowAfter.length === 0) {
            shadowAfter = $(
              '<div class="swiper-slide-shadow-' +
                (swiper.isHorizontal() ? "right" : "bottom") +
                '"></div>'
            );
            $slideEl.append(shadowAfter);
          }

          if (shadowBefore.length)
            shadowBefore[0].style.opacity = Math.max(-progress, 0);
          if (shadowAfter.length)
            shadowAfter[0].style.opacity = Math.max(progress, 0);
        }

        $slideEl.transform(
          "translate3d(" +
            tx +
            "px, " +
            ty +
            "px, 0px) rotateX(" +
            rotateX +
            "deg) rotateY(" +
            rotateY +
            "deg)"
        );
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides,
        activeIndex = swiper.activeIndex,
        $wrapperEl = swiper.$wrapperEl;
      slides
        .transition(duration)
        .find(
          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
        )
        .transition(duration);

      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false; // eslint-disable-next-line

        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;

          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ["webkitTransitionEnd", "transitionend"];

          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };
  var EffectFlip = {
    name: "effect-flip",
    params: {
      flipEffect: {
        slideShadows: true,
        limitRotation: true,
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        flipEffect: _extends({}, Flip),
      });
    },
    on: {
      beforeInit: function beforeInit(swiper) {
        if (swiper.params.effect !== "flip") return;
        swiper.classNames.push(swiper.params.containerModifierClass + "flip");
        swiper.classNames.push(swiper.params.containerModifierClass + "3d");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        extend(swiper.params, overwriteParams);
        extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate(swiper) {
        if (swiper.params.effect !== "flip") return;
        swiper.flipEffect.setTranslate();
      },
      setTransition: function setTransition(swiper, duration) {
        if (swiper.params.effect !== "flip") return;
        swiper.flipEffect.setTransition(duration);
      },
    },
  };

  var Coverflow = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        slides = swiper.slides,
        slidesSizesGrid = swiper.slidesSizesGrid;
      var params = swiper.params.coverflowEffect;
      var isHorizontal = swiper.isHorizontal();
      var transform = swiper.translate;
      var center = isHorizontal
        ? -transform + swiperWidth / 2
        : -transform + swiperHeight / 2;
      var rotate = isHorizontal ? params.rotate : -params.rotate;
      var translate = params.depth; // Each slide offset from center

      for (var i = 0, length = slides.length; i < length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideSize = slidesSizesGrid[i];
        var slideOffset = $slideEl[0].swiperSlideOffset;
        var offsetMultiplier =
          ((center - slideOffset - slideSize / 2) / slideSize) *
          params.modifier;
        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

        var translateZ = -translate * Math.abs(offsetMultiplier);
        var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

        if (typeof stretch === "string" && stretch.indexOf("%") !== -1) {
          stretch = (parseFloat(params.stretch) / 100) * slideSize;
        }

        var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
        var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
        var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

        if (Math.abs(translateX) < 0.001) translateX = 0;
        if (Math.abs(translateY) < 0.001) translateY = 0;
        if (Math.abs(translateZ) < 0.001) translateZ = 0;
        if (Math.abs(rotateY) < 0.001) rotateY = 0;
        if (Math.abs(rotateX) < 0.001) rotateX = 0;
        if (Math.abs(scale) < 0.001) scale = 0;
        var slideTransform =
          "translate3d(" +
          translateX +
          "px," +
          translateY +
          "px," +
          translateZ +
          "px)  rotateX(" +
          rotateX +
          "deg) rotateY(" +
          rotateY +
          "deg) scale(" +
          scale +
          ")";
        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

        if (params.slideShadows) {
          // Set shadows
          var $shadowBeforeEl = isHorizontal
            ? $slideEl.find(".swiper-slide-shadow-left")
            : $slideEl.find(".swiper-slide-shadow-top");
          var $shadowAfterEl = isHorizontal
            ? $slideEl.find(".swiper-slide-shadow-right")
            : $slideEl.find(".swiper-slide-shadow-bottom");

          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = $(
              '<div class="swiper-slide-shadow-' +
                (isHorizontal ? "left" : "top") +
                '"></div>'
            );
            $slideEl.append($shadowBeforeEl);
          }

          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = $(
              '<div class="swiper-slide-shadow-' +
                (isHorizontal ? "right" : "bottom") +
                '"></div>'
            );
            $slideEl.append($shadowAfterEl);
          }

          if ($shadowBeforeEl.length)
            $shadowBeforeEl[0].style.opacity =
              offsetMultiplier > 0 ? offsetMultiplier : 0;
          if ($shadowAfterEl.length)
            $shadowAfterEl[0].style.opacity =
              -offsetMultiplier > 0 ? -offsetMultiplier : 0;
        }
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.slides
        .transition(duration)
        .find(
          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
        )
        .transition(duration);
    },
  };
  var EffectCoverflow = {
    name: "effect-coverflow",
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: true,
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        coverflowEffect: _extends({}, Coverflow),
      });
    },
    on: {
      beforeInit: function beforeInit(swiper) {
        if (swiper.params.effect !== "coverflow") return;
        swiper.classNames.push(
          swiper.params.containerModifierClass + "coverflow"
        );
        swiper.classNames.push(swiper.params.containerModifierClass + "3d");
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate: function setTranslate(swiper) {
        if (swiper.params.effect !== "coverflow") return;
        swiper.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(swiper, duration) {
        if (swiper.params.effect !== "coverflow") return;
        swiper.coverflowEffect.setTransition(duration);
      },
    },
  };

  var Thumbs = {
    init: function init() {
      var swiper = this;
      var thumbsParams = swiper.params.thumbs;
      if (swiper.thumbs.initialized) return false;
      swiper.thumbs.initialized = true;
      var SwiperClass = swiper.constructor;

      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        extend(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
        extend(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
      } else if (isObject(thumbsParams.swiper)) {
        swiper.thumbs.swiper = new SwiperClass(
          extend({}, thumbsParams.swiper, {
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slideToClickedSlide: false,
          })
        );
        swiper.thumbs.swiperCreated = true;
      }

      swiper.thumbs.swiper.$el.addClass(
        swiper.params.thumbs.thumbsContainerClass
      );
      swiper.thumbs.swiper.on("tap", swiper.thumbs.onThumbClick);
      return true;
    },
    onThumbClick: function onThumbClick() {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      var clickedIndex = thumbsSwiper.clickedIndex;
      var clickedSlide = thumbsSwiper.clickedSlide;
      if (
        clickedSlide &&
        $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)
      )
        return;
      if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
      var slideToIndex;

      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt(
          $(thumbsSwiper.clickedSlide).attr("data-swiper-slide-index"),
          10
        );
      } else {
        slideToIndex = clickedIndex;
      }

      if (swiper.params.loop) {
        var currentIndex = swiper.activeIndex;

        if (
          swiper.slides
            .eq(currentIndex)
            .hasClass(swiper.params.slideDuplicateClass)
        ) {
          swiper.loopFix(); // eslint-disable-next-line

          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          currentIndex = swiper.activeIndex;
        }

        var prevIndex = swiper.slides
          .eq(currentIndex)
          .prevAll('[data-swiper-slide-index="' + slideToIndex + '"]')
          .eq(0)
          .index();
        var nextIndex = swiper.slides
          .eq(currentIndex)
          .nextAll('[data-swiper-slide-index="' + slideToIndex + '"]')
          .eq(0)
          .index();
        if (typeof prevIndex === "undefined") slideToIndex = nextIndex;
        else if (typeof nextIndex === "undefined") slideToIndex = prevIndex;
        else if (nextIndex - currentIndex < currentIndex - prevIndex)
          slideToIndex = nextIndex;
        else slideToIndex = prevIndex;
      }

      swiper.slideTo(slideToIndex);
    },
    update: function update(initial) {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      var slidesPerView =
        thumbsSwiper.params.slidesPerView === "auto"
          ? thumbsSwiper.slidesPerViewDynamic()
          : thumbsSwiper.params.slidesPerView;
      var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
      var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

      if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
        var currentThumbsIndex = thumbsSwiper.activeIndex;
        var newThumbsIndex;
        var direction;

        if (thumbsSwiper.params.loop) {
          if (
            thumbsSwiper.slides
              .eq(currentThumbsIndex)
              .hasClass(thumbsSwiper.params.slideDuplicateClass)
          ) {
            thumbsSwiper.loopFix(); // eslint-disable-next-line

            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsSwiper.activeIndex;
          } // Find actual thumbs index to slide to

          var prevThumbsIndex = thumbsSwiper.slides
            .eq(currentThumbsIndex)
            .prevAll('[data-swiper-slide-index="' + swiper.realIndex + '"]')
            .eq(0)
            .index();
          var nextThumbsIndex = thumbsSwiper.slides
            .eq(currentThumbsIndex)
            .nextAll('[data-swiper-slide-index="' + swiper.realIndex + '"]')
            .eq(0)
            .index();
          if (typeof prevThumbsIndex === "undefined")
            newThumbsIndex = nextThumbsIndex;
          else if (typeof nextThumbsIndex === "undefined")
            newThumbsIndex = prevThumbsIndex;
          else if (
            nextThumbsIndex - currentThumbsIndex ===
            currentThumbsIndex - prevThumbsIndex
          )
            newThumbsIndex = currentThumbsIndex;
          else if (
            nextThumbsIndex - currentThumbsIndex <
            currentThumbsIndex - prevThumbsIndex
          )
            newThumbsIndex = nextThumbsIndex;
          else newThumbsIndex = prevThumbsIndex;
          direction =
            swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
        } else {
          newThumbsIndex = swiper.realIndex;
          direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
        }

        if (useOffset) {
          newThumbsIndex +=
            direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
        }

        if (
          thumbsSwiper.visibleSlidesIndexes &&
          thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0
        ) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex =
                newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex =
                newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
          }

          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      } // Activate thumbs

      var thumbsToActivate = 1;
      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }

      if (!swiper.params.thumbs.multipleActiveThumbs) {
        thumbsToActivate = 1;
      }

      thumbsToActivate = Math.floor(thumbsToActivate);
      thumbsSwiper.slides.removeClass(thumbActiveClass);

      if (
        thumbsSwiper.params.loop ||
        (thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled)
      ) {
        for (var i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.$wrapperEl
            .children(
              '[data-swiper-slide-index="' + (swiper.realIndex + i) + '"]'
            )
            .addClass(thumbActiveClass);
        }
      } else {
        for (var _i = 0; _i < thumbsToActivate; _i += 1) {
          thumbsSwiper.slides
            .eq(swiper.realIndex + _i)
            .addClass(thumbActiveClass);
        }
      }
    },
  };
  var Thumbs$1 = {
    name: "thumbs",
    params: {
      thumbs: {
        swiper: null,
        multipleActiveThumbs: true,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-container-thumbs",
      },
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        thumbs: _extends(
          {
            swiper: null,
            initialized: false,
          },
          Thumbs
        ),
      });
    },
    on: {
      beforeInit: function beforeInit(swiper) {
        var thumbs = swiper.params.thumbs;
        if (!thumbs || !thumbs.swiper) return;
        swiper.thumbs.init();
        swiper.thumbs.update(true);
      },
      slideChange: function slideChange(swiper) {
        if (!swiper.thumbs.swiper) return;
        swiper.thumbs.update();
      },
      update: function update(swiper) {
        if (!swiper.thumbs.swiper) return;
        swiper.thumbs.update();
      },
      resize: function resize(swiper) {
        if (!swiper.thumbs.swiper) return;
        swiper.thumbs.update();
      },
      observerUpdate: function observerUpdate(swiper) {
        if (!swiper.thumbs.swiper) return;
        swiper.thumbs.update();
      },
      setTransition: function setTransition(swiper, duration) {
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        thumbsSwiper.setTransition(duration);
      },
      beforeDestroy: function beforeDestroy(swiper) {
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;

        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
          thumbsSwiper.destroy();
        }
      },
    },
  };

  // Swiper Class
  var components = [
    Virtual$1,
    Keyboard$1,
    Mousewheel$1,
    Navigation$1,
    Pagination$1,
    Scrollbar$1,
    Parallax$1,
    Zoom$1,
    Lazy$1,
    Controller$1,
    A11y$1,
    History$1,
    HashNavigation$1,
    Autoplay$1,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    Thumbs$1,
  ];
  Swiper.use(components);

  return Swiper;
});
//# sourceMappingURL=swiper-bundle.js.map

/*! WOW - v1.1.2 - 2015-08-19
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function () {
  var a,
    b,
    c,
    d,
    e,
    f = function (a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    },
    g =
      [].indexOf ||
      function (a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b;
        return -1;
      };
  (b = (function () {
    function a() {}
    return (
      (a.prototype.extend = function (a, b) {
        var c, d;
        for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
        return a;
      }),
      (a.prototype.isMobile = function (a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          a
        );
      }),
      (a.prototype.createEvent = function (a, b, c, d) {
        var e;
        return (
          null == b && (b = !1),
          null == c && (c = !1),
          null == d && (d = null),
          null != document.createEvent
            ? ((e = document.createEvent("CustomEvent")),
              e.initCustomEvent(a, b, c, d))
            : null != document.createEventObject
            ? ((e = document.createEventObject()), (e.eventType = a))
            : (e.eventName = a),
          e
        );
      }),
      (a.prototype.emitEvent = function (a, b) {
        return null != a.dispatchEvent
          ? a.dispatchEvent(b)
          : b in (null != a)
          ? a[b]()
          : "on" + b in (null != a)
          ? a["on" + b]()
          : void 0;
      }),
      (a.prototype.addEvent = function (a, b, c) {
        return null != a.addEventListener
          ? a.addEventListener(b, c, !1)
          : null != a.attachEvent
          ? a.attachEvent("on" + b, c)
          : (a[b] = c);
      }),
      (a.prototype.removeEvent = function (a, b, c) {
        return null != a.removeEventListener
          ? a.removeEventListener(b, c, !1)
          : null != a.detachEvent
          ? a.detachEvent("on" + b, c)
          : delete a[b];
      }),
      (a.prototype.innerHeight = function () {
        return "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.clientHeight;
      }),
      a
    );
  })()),
    (c =
      this.WeakMap ||
      this.MozWeakMap ||
      (c = (function () {
        function a() {
          (this.keys = []), (this.values = []);
        }
        return (
          (a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
              if (((c = f[b]), c === a)) return this.values[b];
          }),
          (a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
              if (((d = g[c]), d === a)) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b);
          }),
          a
        );
      })())),
    (a =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (a = (function () {
        function a() {
          "undefined" != typeof console &&
            null !== console &&
            console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console &&
              null !== console &&
              console.warn(
                "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
              );
        }
        return (a.notSupported = !0), (a.prototype.observe = function () {}), a;
      })())),
    (d =
      this.getComputedStyle ||
      function (a) {
        return (
          (this.getPropertyValue = function (b) {
            var c;
            return (
              "float" === b && (b = "styleFloat"),
              e.test(b) &&
                b.replace(e, function (a, b) {
                  return b.toUpperCase();
                }),
              (null != (c = a.currentStyle) ? c[b] : void 0) || null
            );
          }),
          this
        );
      }),
    (e = /(\-([a-z]){1})/g),
    (this.WOW = (function () {
      function e(a) {
        null == a && (a = {}),
          (this.scrollCallback = f(this.scrollCallback, this)),
          (this.scrollHandler = f(this.scrollHandler, this)),
          (this.resetAnimation = f(this.resetAnimation, this)),
          (this.start = f(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(a, this.defaults)),
          null != a.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              a.scrollContainer
            )),
          (this.animationNameCache = new c()),
          (this.wowEvent = this.util().createEvent(this.config.boxClass));
      }
      return (
        (e.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
          scrollContainer: null,
        }),
        (e.prototype.init = function () {
          var a;
          return (
            (this.element = window.document.documentElement),
            "interactive" === (a = document.readyState) || "complete" === a
              ? this.start()
              : this.util().addEvent(document, "DOMContentLoaded", this.start),
            (this.finished = [])
          );
        }),
        (e.prototype.start = function () {
          var b, c, d, e;
          if (
            ((this.stopped = !1),
            (this.boxes = function () {
              var a, c, d, e;
              for (
                d = this.element.querySelectorAll("." + this.config.boxClass),
                  e = [],
                  a = 0,
                  c = d.length;
                c > a;
                a++
              )
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            (this.all = function () {
              var a, c, d, e;
              for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else
              for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                (b = e[c]), this.applyStyle(b, !0);
          return (
            this.disabled() ||
              (this.util().addEvent(
                this.config.scrollContainer || window,
                "scroll",
                this.scrollHandler
              ),
              this.util().addEvent(window, "resize", this.scrollHandler),
              (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live
              ? new a(
                  (function (a) {
                    return function (b) {
                      var c, d, e, f, g;
                      for (g = [], c = 0, d = b.length; d > c; c++)
                        (f = b[c]),
                          g.push(
                            function () {
                              var a, b, c, d;
                              for (
                                c = f.addedNodes || [],
                                  d = [],
                                  a = 0,
                                  b = c.length;
                                b > a;
                                a++
                              )
                                (e = c[a]), d.push(this.doSync(e));
                              return d;
                            }.call(a)
                          );
                      return g;
                    };
                  })(this)
                ).observe(document.body, {
                  childList: !0,
                  subtree: !0,
                })
              : void 0
          );
        }),
        (e.prototype.stop = function () {
          return (
            (this.stopped = !0),
            this.util().removeEvent(
              this.config.scrollContainer || window,
              "scroll",
              this.scrollHandler
            ),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
          );
        }),
        (e.prototype.sync = function () {
          return a.notSupported ? this.doSync(this.element) : void 0;
        }),
        (e.prototype.doSync = function (a) {
          var b, c, d, e, f;
          if ((null == a && (a = this.element), 1 === a.nodeType)) {
            for (
              a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length;
              d > c;
              c++
            )
              (b = e[c]),
                g.call(this.all, b) < 0
                  ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(b, !0),
                    f.push((this.scrolled = !0)))
                  : f.push(void 0);
            return f;
          }
        }),
        (e.prototype.show = function (a) {
          return (
            this.applyStyle(a),
            (a.className = a.className + " " + this.config.animateClass),
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
          );
        }),
        (e.prototype.applyStyle = function (a, b) {
          var c, d, e;
          return (
            (d = a.getAttribute("data-wow-duration")),
            (c = a.getAttribute("data-wow-delay")),
            (e = a.getAttribute("data-wow-iteration")),
            this.animate(
              (function (f) {
                return function () {
                  return f.customStyle(a, b, d, c, e);
                };
              })(this)
            )
          );
        }),
        (e.prototype.animate = (function () {
          return "requestAnimationFrame" in window
            ? function (a) {
                return window.requestAnimationFrame(a);
              }
            : function (a) {
                return a();
              };
        })()),
        (e.prototype.resetStyle = function () {
          var a, b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
            (a = d[b]), e.push((a.style.visibility = "visible"));
          return e;
        }),
        (e.prototype.resetAnimation = function (a) {
          var b;
          return a.type.toLowerCase().indexOf("animationend") >= 0
            ? ((b = a.target || a.srcElement),
              (b.className = b.className
                .replace(this.config.animateClass, "")
                .trim()))
            : void 0;
        }),
        (e.prototype.customStyle = function (a, b, c, d, e) {
          return (
            b && this.cacheAnimationName(a),
            (a.style.visibility = b ? "hidden" : "visible"),
            c &&
              this.vendorSet(a.style, {
                animationDuration: c,
              }),
            d &&
              this.vendorSet(a.style, {
                animationDelay: d,
              }),
            e &&
              this.vendorSet(a.style, {
                animationIterationCount: e,
              }),
            this.vendorSet(a.style, {
              animationName: b ? "none" : this.cachedAnimationName(a),
            }),
            a
          );
        }),
        (e.prototype.vendors = ["moz", "webkit"]),
        (e.prototype.vendorSet = function (a, b) {
          var c, d, e, f;
          d = [];
          for (c in b)
            (e = b[c]),
              (a["" + c] = e),
              d.push(
                function () {
                  var b, d, g, h;
                  for (
                    g = this.vendors, h = [], b = 0, d = g.length;
                    d > b;
                    b++
                  )
                    (f = g[b]),
                      h.push(
                        (a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] =
                          e)
                      );
                  return h;
                }.call(this)
              );
          return d;
        }),
        (e.prototype.vendorCSS = function (a, b) {
          var c, e, f, g, h, i;
          for (
            h = d(a),
              g = h.getPropertyCSSValue(b),
              f = this.vendors,
              c = 0,
              e = f.length;
            e > c;
            c++
          )
            (i = f[c]), (g = g || h.getPropertyCSSValue("-" + i + "-" + b));
          return g;
        }),
        (e.prototype.animationName = function (a) {
          var b;
          try {
            b = this.vendorCSS(a, "animation-name").cssText;
          } catch (c) {
            b = d(a).getPropertyValue("animation-name");
          }
          return "none" === b ? "" : b;
        }),
        (e.prototype.cacheAnimationName = function (a) {
          return this.animationNameCache.set(a, this.animationName(a));
        }),
        (e.prototype.cachedAnimationName = function (a) {
          return this.animationNameCache.get(a);
        }),
        (e.prototype.scrollHandler = function () {
          return (this.scrolled = !0);
        }),
        (e.prototype.scrollCallback = function () {
          var a;
          return !this.scrolled ||
            ((this.scrolled = !1),
            (this.boxes = function () {
              var b, c, d, e;
              for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
              return e;
            }.call(this)),
            this.boxes.length || this.config.live)
            ? void 0
            : this.stop();
        }),
        (e.prototype.offsetTop = function (a) {
          for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
          for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
          return b;
        }),
        (e.prototype.isVisible = function (a) {
          var b, c, d, e, f;
          return (
            (c = a.getAttribute("data-wow-offset") || this.config.offset),
            (f =
              (this.config.scrollContainer &&
                this.config.scrollContainer.scrollTop) ||
              window.pageYOffset),
            (e =
              f +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              c),
            (d = this.offsetTop(a)),
            (b = d + a.clientHeight),
            e >= d && b >= f
          );
        }),
        (e.prototype.util = function () {
          return null != this._util ? this._util : (this._util = new b());
        }),
        (e.prototype.disabled = function () {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          );
        }),
        e
      );
    })());
}.call(this));

//PARALAX
/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */

(function ($, window, document, undefined) {
  // Polyfill for requestAnimationFrame
  // via: https://gist.github.com/paulirish/1579671

  (function () {
    var lastTime = 0;
    var vendors = ["ms", "moz", "webkit", "o"];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame =
        window[vendors[x] + "RequestAnimationFrame"];
      window.cancelAnimationFrame =
        window[vendors[x] + "CancelAnimationFrame"] ||
        window[vendors[x] + "CancelRequestAnimationFrame"];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function (callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
  })();

  // Parallax Constructor

  function Parallax(element, options) {
    var self = this;

    if (typeof options == "object") {
      delete options.refresh;
      delete options.render;
      $.extend(this, options);
    }

    this.$element = $(element);

    if (!this.imageSrc && this.$element.is("img")) {
      this.imageSrc = this.$element.attr("src");
    }

    var positions = (this.position + "").toLowerCase().match(/\S+/g) || [];

    if (positions.length < 1) {
      positions.push("center");
    }
    if (positions.length == 1) {
      positions.push(positions[0]);
    }

    if (
      positions[0] == "top" ||
      positions[0] == "bottom" ||
      positions[1] == "left" ||
      positions[1] == "right"
    ) {
      positions = [positions[1], positions[0]];
    }

    if (this.positionX !== undefined)
      positions[0] = this.positionX.toLowerCase();
    if (this.positionY !== undefined)
      positions[1] = this.positionY.toLowerCase();

    self.positionX = positions[0];
    self.positionY = positions[1];

    if (this.positionX != "left" && this.positionX != "right") {
      if (isNaN(parseInt(this.positionX))) {
        this.positionX = "center";
      } else {
        this.positionX = parseInt(this.positionX);
      }
    }

    if (this.positionY != "top" && this.positionY != "bottom") {
      if (isNaN(parseInt(this.positionY))) {
        this.positionY = "center";
      } else {
        this.positionY = parseInt(this.positionY);
      }
    }

    this.position =
      this.positionX +
      (isNaN(this.positionX) ? "" : "px") +
      " " +
      this.positionY +
      (isNaN(this.positionY) ? "" : "px");

    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      if (this.imageSrc && this.iosFix && !this.$element.is("img")) {
        this.$element.css({
          backgroundImage: 'url("' + this.imageSrc + '")',
          backgroundSize: "cover",
          backgroundPosition: this.position,
        });
      }
      return this;
    }

    if (navigator.userAgent.match(/(Android)/)) {
      if (this.imageSrc && this.androidFix && !this.$element.is("img")) {
        this.$element.css({
          backgroundImage: 'url("' + this.imageSrc + '")',
          backgroundSize: "cover",
          backgroundPosition: this.position,
        });
      }
      return this;
    }

    this.$mirror = $("<div />").prependTo(this.mirrorContainer);

    var slider = this.$element.find(">.parallax-slider");
    var sliderExisted = false;

    if (slider.length == 0) this.$slider = $("<img />").prependTo(this.$mirror);
    else {
      this.$slider = slider.prependTo(this.$mirror);
      sliderExisted = true;
    }

    this.$mirror.addClass("parallax-mirror").css({
      visibility: "hidden",
      zIndex: this.zIndex,
      position: "fixed",
      top: 0,
      left: 0,
      overflow: "hidden",
    });

    this.$slider.addClass("parallax-slider").one("load", function () {
      if (!self.naturalHeight || !self.naturalWidth) {
        self.naturalHeight = this.naturalHeight || this.height || 1;
        self.naturalWidth = this.naturalWidth || this.width || 1;
      }
      self.aspectRatio = self.naturalWidth / self.naturalHeight;

      Parallax.isSetup || Parallax.setup();
      Parallax.sliders.push(self);
      Parallax.isFresh = false;
      Parallax.requestRender();
    });

    if (!sliderExisted) this.$slider[0].src = this.imageSrc;

    if (
      (this.naturalHeight && this.naturalWidth) ||
      this.$slider[0].complete ||
      slider.length > 0
    ) {
      this.$slider.trigger("load");
    }
  }

  // Parallax Instance Methods

  $.extend(Parallax.prototype, {
    speed: 0.2,
    bleed: 0,
    zIndex: -100,
    iosFix: true,
    androidFix: true,
    position: "center",
    overScrollFix: false,
    mirrorContainer: "body",

    refresh: function () {
      this.boxWidth = this.$element.outerWidth();
      this.boxHeight = this.$element.outerHeight() + this.bleed * 2;
      this.boxOffsetTop = this.$element.offset().top - this.bleed;
      this.boxOffsetLeft = this.$element.offset().left;
      this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;

      var winHeight = Parallax.winHeight;
      var docHeight = Parallax.docHeight;
      var maxOffset = Math.min(this.boxOffsetTop, docHeight - winHeight);
      var minOffset = Math.max(
        this.boxOffsetTop + this.boxHeight - winHeight,
        0
      );
      var imageHeightMin =
        (this.boxHeight + (maxOffset - minOffset) * (1 - this.speed)) | 0;
      var imageOffsetMin =
        ((this.boxOffsetTop - maxOffset) * (1 - this.speed)) | 0;
      var margin;

      if (imageHeightMin * this.aspectRatio >= this.boxWidth) {
        this.imageWidth = (imageHeightMin * this.aspectRatio) | 0;
        this.imageHeight = imageHeightMin;
        this.offsetBaseTop = imageOffsetMin;

        margin = this.imageWidth - this.boxWidth;

        if (this.positionX == "left") {
          this.offsetLeft = 0;
        } else if (this.positionX == "right") {
          this.offsetLeft = -margin;
        } else if (!isNaN(this.positionX)) {
          this.offsetLeft = Math.max(this.positionX, -margin);
        } else {
          this.offsetLeft = (-margin / 2) | 0;
        }
      } else {
        this.imageWidth = this.boxWidth;
        this.imageHeight = (this.boxWidth / this.aspectRatio) | 0;
        this.offsetLeft = 0;

        margin = this.imageHeight - imageHeightMin;

        if (this.positionY == "top") {
          this.offsetBaseTop = imageOffsetMin;
        } else if (this.positionY == "bottom") {
          this.offsetBaseTop = imageOffsetMin - margin;
        } else if (!isNaN(this.positionY)) {
          this.offsetBaseTop =
            imageOffsetMin + Math.max(this.positionY, -margin);
        } else {
          this.offsetBaseTop = (imageOffsetMin - margin / 2) | 0;
        }
      }
    },

    render: function () {
      var scrollTop = Parallax.scrollTop;
      var scrollLeft = Parallax.scrollLeft;
      var overScroll = this.overScrollFix ? Parallax.overScroll : 0;
      var scrollBottom = scrollTop + Parallax.winHeight;

      if (
        this.boxOffsetBottom > scrollTop &&
        this.boxOffsetTop <= scrollBottom
      ) {
        this.visibility = "visible";
        this.mirrorTop = this.boxOffsetTop - scrollTop;
        this.mirrorLeft = this.boxOffsetLeft - scrollLeft;
        this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed);
      } else {
        this.visibility = "hidden";
      }

      this.$mirror.css({
        transform:
          "translate3d(" +
          this.mirrorLeft +
          "px, " +
          (this.mirrorTop - overScroll) +
          "px, 0px)",
        visibility: this.visibility,
        height: this.boxHeight,
        width: this.boxWidth,
      });

      this.$slider.css({
        transform:
          "translate3d(" +
          this.offsetLeft +
          "px, " +
          this.offsetTop +
          "px, 0px)",
        position: "absolute",
        height: this.imageHeight,
        width: this.imageWidth,
        maxWidth: "none",
      });
    },
  });

  // Parallax Static Methods

  $.extend(Parallax, {
    scrollTop: 0,
    scrollLeft: 0,
    winHeight: 0,
    winWidth: 0,
    docHeight: 1 << 30,
    docWidth: 1 << 30,
    sliders: [],
    isReady: false,
    isFresh: false,
    isBusy: false,

    setup: function () {
      if (this.isReady) return;

      var self = this;

      var $doc = $(document),
        $win = $(window);

      var loadDimensions = function () {
        Parallax.winHeight = $win.height();
        Parallax.winWidth = $win.width();
        Parallax.docHeight = $doc.height();
        Parallax.docWidth = $doc.width();
      };

      var loadScrollPosition = function () {
        var winScrollTop = $win.scrollTop();
        var scrollTopMax = Parallax.docHeight - Parallax.winHeight;
        var scrollLeftMax = Parallax.docWidth - Parallax.winWidth;
        Parallax.scrollTop = Math.max(0, Math.min(scrollTopMax, winScrollTop));
        Parallax.scrollLeft = Math.max(
          0,
          Math.min(scrollLeftMax, $win.scrollLeft())
        );
        Parallax.overScroll = Math.max(
          winScrollTop - scrollTopMax,
          Math.min(winScrollTop, 0)
        );
      };

      $win
        .on("resize.px.parallax load.px.parallax", function () {
          loadDimensions();
          self.refresh();
          Parallax.isFresh = false;
          Parallax.requestRender();
        })
        .on("scroll.px.parallax load.px.parallax", function () {
          loadScrollPosition();
          Parallax.requestRender();
        });

      loadDimensions();
      loadScrollPosition();

      this.isReady = true;

      var lastPosition = -1;

      function frameLoop() {
        if (lastPosition == window.pageYOffset) {
          // Avoid overcalculations
          window.requestAnimationFrame(frameLoop);
          return false;
        } else lastPosition = window.pageYOffset;

        self.render();
        window.requestAnimationFrame(frameLoop);
      }

      frameLoop();
    },

    configure: function (options) {
      if (typeof options == "object") {
        delete options.refresh;
        delete options.render;
        $.extend(this.prototype, options);
      }
    },

    refresh: function () {
      $.each(this.sliders, function () {
        this.refresh();
      });
      this.isFresh = true;
    },

    render: function () {
      this.isFresh || this.refresh();
      $.each(this.sliders, function () {
        this.render();
      });
    },

    requestRender: function () {
      var self = this;
      self.render();
      self.isBusy = false;
    },
    destroy: function (el) {
      var i,
        parallaxElement = $(el).data("px.parallax");
      parallaxElement.$mirror.remove();
      for (i = 0; i < this.sliders.length; i += 1) {
        if (this.sliders[i] == parallaxElement) {
          this.sliders.splice(i, 1);
        }
      }
      $(el).data("px.parallax", false);
      if (this.sliders.length === 0) {
        $(window).off("scroll.px.parallax resize.px.parallax load.px.parallax");
        this.isReady = false;
        Parallax.isSetup = false;
      }
    },
  });

  // Parallax Plugin Definition

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var options = typeof option == "object" && option;

      if (this == window || this == document || $this.is("body")) {
        Parallax.configure(options);
      } else if (!$this.data("px.parallax")) {
        options = $.extend({}, $this.data(), options);
        $this.data("px.parallax", new Parallax(this, options));
      } else if (typeof option == "object") {
        $.extend($this.data("px.parallax"), options);
      }
      if (typeof option == "string") {
        if (option == "destroy") {
          Parallax.destroy(this);
        } else {
          Parallax[option]();
        }
      }
    });
  }

  var old = $.fn.parallax;

  $.fn.parallax = Plugin;
  $.fn.parallax.Constructor = Parallax;

  // Parallax No Conflict

  $.fn.parallax.noConflict = function () {
    $.fn.parallax = old;
    return this;
  };

  // Parallax Data-API

  $(function () {
    $('[data-parallax="scroll"]').parallax();
  });
})(jQuery, window, document);

/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";

  function i(i, r, a) {
    function h(t, e, n) {
      var o,
        r = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, h) {
          var u = a.data(h, i);
          if (!u)
            return void s(
              i + " not initialized. Cannot call methods, i.e. " + r
            );
          var d = u[e];
          if (!d || "_" == e.charAt(0))
            return void s(r + " is not a valid method");
          var l = d.apply(u, n);
          o = void 0 === o ? l : o;
        }),
        void 0 !== o ? o : t
      );
    }

    function u(t, e) {
      t.each(function (t, n) {
        var o = a.data(n, i);
        o ? (o.option(e), o._init()) : ((o = new r(n, e)), a.data(n, i, o));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (r.prototype.option ||
          (r.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = o.call(arguments, 1);
            return h(this, t, e);
          }
          return u(this, t), this;
        }),
        n(a));
  }

  function n(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var o = Array.prototype.slice,
    r = t.console,
    s =
      "undefined" == typeof r
        ? function () {}
        : function (t) {
            r.error(t);
          };
  return n(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            n = (i[t] = i[t] || {});
          return (n[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var n = this._onceEvents && this._onceEvents[t], o = 0;
            o < i.length;
            o++
          ) {
            var r = i[o],
              s = n && n[r];
            s && (this.off(t, r), delete n[r]), r.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";

    function t(t) {
      var e = parseFloat(t),
        i = -1 == t.indexOf("%") && !isNaN(e);
      return i && e;
    }

    function e() {}

    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        u > e;
        e++
      ) {
        var i = h[e];
        t[i] = 0;
      }
      return t;
    }

    function n(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }

    function o() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var o = n(e);
        (s = 200 == Math.round(t(o.width))),
          (r.isBoxSizeOuter = s),
          i.removeChild(e);
      }
    }

    function r(e) {
      if (
        (o(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var r = n(e);
        if ("none" == r.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == r.boxSizing), l = 0;
          u > l;
          l++
        ) {
          var c = h[l],
            f = r[c],
            m = parseFloat(f);
          a[c] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          g = a.paddingTop + a.paddingBottom,
          y = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          E = d && s,
          b = t(r.width);
        b !== !1 && (a.width = b + (E ? 0 : p + _));
        var x = t(r.height);
        return (
          x !== !1 && (a.height = x + (E ? 0 : g + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (g + z)),
          (a.outerWidth = a.width + y),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var s,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      h = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      u = h.length,
      d = !1;
    return r;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i],
          o = n + "MatchesSelector";
        if (t[o]) return o;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      });
    var n = Array.prototype.slice;
    (i.makeArray = function (t) {
      if (Array.isArray(t)) return t;
      if (null === t || void 0 === t) return [];
      var e = "object" == typeof t && "number" == typeof t.length;
      return e ? n.call(t) : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var o = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!n) return void o.push(t);
              e(t, n) && o.push(t);
              for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                o.push(i[r]);
            }
          }),
          o
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var n = t.prototype[e],
          o = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[o];
          clearTimeout(t);
          var e = arguments,
            r = this;
          this[o] = setTimeout(function () {
            n.apply(r, e), delete r[o];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var o = t.console;
    return (
      (i.htmlInit = function (e, n) {
        i.docReady(function () {
          var r = i.toDashed(n),
            s = "data-" + r,
            a = document.querySelectorAll("[" + s + "]"),
            h = document.querySelectorAll(".js-" + r),
            u = i.makeArray(a).concat(i.makeArray(h)),
            d = s + "-options",
            l = t.jQuery;
          u.forEach(function (t) {
            var i,
              r = t.getAttribute(s) || t.getAttribute(d);
            try {
              i = r && JSON.parse(r);
            } catch (a) {
              return void (
                o &&
                o.error("Error parsing " + s + " on " + t.className + ": " + a)
              );
            }
            var h = new e(t, i);
            l && l.data(t, n, h);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";

    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }

    function n(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = {
          x: 0,
          y: 0,
        }),
        this._create());
    }

    function o(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var r = document.documentElement.style,
      s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
      h = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[s],
      u = {
        transform: a,
        transition: s,
        transitionDuration: s + "Duration",
        transitionProperty: s + "Property",
        transitionDelay: s + "Delay",
      },
      d = (n.prototype = Object.create(t.prototype));
    (d.constructor = n),
      (d._create = function () {
        (this._transn = {
          ingProperties: {},
          clean: {},
          onEnd: {},
        }),
          this.css({
            position: "absolute",
          });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var n = u[i] || i;
          e[n] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          n = t[e ? "left" : "right"],
          o = t[i ? "top" : "bottom"],
          r = parseFloat(n),
          s = parseFloat(o),
          a = this.layout.size;
        -1 != n.indexOf("%") && (r = (r / 100) * a.width),
          -1 != o.indexOf("%") && (s = (s / 100) * a.height),
          (r = isNaN(r) ? 0 : r),
          (s = isNaN(s) ? 0 : s),
          (r -= e ? a.paddingLeft : a.paddingRight),
          (s -= i ? a.paddingTop : a.paddingBottom),
          (this.position.x = r),
          (this.position.y = s);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          o = i ? "paddingLeft" : "paddingRight",
          r = i ? "left" : "right",
          s = i ? "right" : "left",
          a = this.position.x + t[o];
        (e[r] = this.getXValue(a)), (e[s] = "");
        var h = n ? "paddingTop" : "paddingBottom",
          u = n ? "top" : "bottom",
          d = n ? "bottom" : "top",
          l = this.position.y + t[h];
        (e[u] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          n = this.position.y,
          o = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), o && !this.isTransitioning))
          return void this.layoutPosition();
        var r = t - i,
          s = e - n,
          a = {};
        (a.transform = this.getTranslate(r, s)),
          this.transition({
            to: a,
            onTransitionEnd: {
              transform: this.layoutPosition,
            },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = n ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var n = this.element.offsetHeight;
          n = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + o(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(h, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var c = {
      "-webkit-transform": "transform",
    };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          n = c[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[n],
          i(e.ingProperties) && this.disableTransition(),
          n in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
          n in e.onEnd)
        ) {
          var o = e.onEnd[n];
          o.call(this), delete e.onEnd[n];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(h, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var f = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(f);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({
            display: "",
          }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return s && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden,
          this.css({
            display: "",
          });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0),
          this.css({
            display: "",
          });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({
            display: "none",
          }),
          this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      n
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, n, o, r) {
            return e(t, i, n, o, r);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, n, o) {
    "use strict";

    function r(t, e) {
      var i = n.getQueryElement(t);
      if (!i)
        return void (
          h &&
          h.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        u && (this.$element = u(this.element)),
        (this.options = n.extend({}, this.constructor.defaults)),
        this.option(e);
      var o = ++l;
      (this.element.outlayerGUID = o), (c[o] = this), this._create();
      var r = this._getOption("initLayout");
      r && this.layout();
    }

    function s(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }

    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        n = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var o = m[n] || 1;
      return i * o;
    }
    var h = t.console,
      u = t.jQuery,
      d = function () {},
      l = 0,
      c = {};
    (r.namespace = "outlayer"),
      (r.Item = o),
      (r.defaults = {
        containerStyle: {
          position: "relative",
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)",
        },
        visibleStyle: {
          opacity: 1,
          transform: "scale(1)",
        },
      });
    var f = r.prototype;
    n.extend(f, e.prototype),
      (f.option = function (t) {
        n.extend(this.options, t);
      }),
      (f._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (f._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (f.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (f._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            n = [],
            o = 0;
          o < e.length;
          o++
        ) {
          var r = e[o],
            s = new i(r, this);
          n.push(s);
        }
        return n;
      }),
      (f._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector);
      }),
      (f.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (f.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (f._init = f.layout),
      (f._resetLayout = function () {
        this.getSize();
      }),
      (f.getSize = function () {
        this.size = i(this.element);
      }),
      (f._getMeasurement = function (t, e) {
        var n,
          o = this.options[t];
        o
          ? ("string" == typeof o
              ? (n = this.element.querySelector(o))
              : o instanceof HTMLElement && (n = o),
            (this[t] = n ? i(n)[e] : o))
          : (this[t] = 0);
      }),
      (f.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (f._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (f._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var n = this._getItemLayoutPosition(t);
            (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (f._getItemLayoutPosition = function () {
        return {
          x: 0,
          y: 0,
        };
      }),
      (f._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (f.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (f._positionItem = function (t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
      }),
      (f._postLayout = function () {
        this.resizeContainer();
      }),
      (f.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (f._getContainerSize = d),
      (f._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (f._emitCompleteOnItems = function (t, e) {
        function i() {
          o.dispatchEvent(t + "Complete", null, [e]);
        }

        function n() {
          s++, s == r && i();
        }
        var o = this,
          r = e.length;
        if (!e || !r) return void i();
        var s = 0;
        e.forEach(function (e) {
          e.once(t, n);
        });
      }),
      (f.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), u))
          if (((this.$element = this.$element || u(this.element)), e)) {
            var o = u.Event(e);
            (o.type = t), this.$element.trigger(o, i);
          } else this.$element.trigger(t, i);
      }),
      (f.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (f.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (f.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (f.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              n.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (f._find = function (t) {
        return t
          ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = n.makeArray(t)))
          : void 0;
      }),
      (f._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (f._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (f._manageStamp = d),
      (f._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect,
          o = i(t),
          r = {
            left: e.left - n.left - o.marginLeft,
            top: e.top - n.top - o.marginTop,
            right: n.right - e.right - o.marginRight,
            bottom: n.bottom - e.bottom - o.marginBottom,
          };
        return r;
      }),
      (f.handleEvent = n.handleEvent),
      (f.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (f.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (f.onresize = function () {
        this.resize();
      }),
      n.debounceMethod(r, "onresize", 100),
      (f.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (f.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (f.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (f.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (f.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (f.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (f.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (f.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (f.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (f.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (f.getItems = function (t) {
        t = n.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (f.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), n.removeFrom(this.items, t);
            }, this);
      }),
      (f.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e],
          delete this.element.outlayerGUID,
          u && u.removeData(this.element, this.constructor.namespace);
      }),
      (r.data = function (t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && c[e];
      }),
      (r.create = function (t, e) {
        var i = s(r);
        return (
          (i.defaults = n.extend({}, r.defaults)),
          n.extend(i.defaults, e),
          (i.compatOptions = n.extend({}, r.compatOptions)),
          (i.namespace = t),
          (i.data = r.data),
          (i.Item = s(o)),
          n.htmlInit(i, t),
          u && u.bridget && u.bridget(t, i),
          i
        );
      });
    var m = {
      ms: 1,
      s: 1e3,
    };
    return (r.Item = o), r;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return (
      (n._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (n.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var n = (this.columnWidth += this.gutter),
          o = this.containerWidth + this.gutter,
          r = o / n,
          s = n - (o % n),
          a = s && 1 > s ? "round" : "floor";
        (r = Math[a](r)), (this.cols = Math.max(r, 1));
      }),
      (n.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          n = e(i);
        this.containerWidth = n && n.innerWidth;
      }),
      (n._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && 1 > e ? "round" : "ceil",
          n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (
          var o = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            r = this[o](n, t),
            s = {
              x: this.columnWidth * r.col,
              y: r.y,
            },
            a = r.y + t.size.outerHeight,
            h = n + r.col,
            u = r.col;
          h > u;
          u++
        )
          this.colYs[u] = a;
        return s;
      }),
      (n._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return {
          col: e.indexOf(i),
          y: i,
        };
      }),
      (n._getTopColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++)
          e[n] = this._getColGroupY(n, t);
        return e;
      }),
      (n._getColGroupY = function (t, e) {
        if (2 > e) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (n._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          n = t > 1 && i + t > this.cols;
        i = n ? 0 : i;
        var o = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = o ? i + t : this.horizontalColIndex),
          {
            col: i,
            y: this._getColGroupY(i, t),
          }
        );
      }),
      (n._manageStamp = function (t) {
        var i = e(t),
          n = this._getElementOffset(t),
          o = this._getOption("originLeft"),
          r = o ? n.left : n.right,
          s = r + i.outerWidth,
          a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var h = Math.floor(s / this.columnWidth);
        (h -= s % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h));
        for (
          var u = this._getOption("originTop"),
            d = (u ? n.top : n.bottom) + i.outerHeight,
            l = a;
          h >= l;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (n._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
          height: this.maxY,
        };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (n._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (n.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  });

/**
 * jquery.mask.js
 * @version: v1.14.16
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at github.com/igorescobar/jQuery-Mask-Plugin
 *
 * Copyright (c) 2012 Igor Escobar http://igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* jshint laxbreak: true */
/* jshint maxcomplexity:17 */
/* global define */

// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
// https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory, jQuery, Zepto) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object" && typeof Meteor === "undefined") {
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery || Zepto);
  }
})(
  function ($) {
    "use strict";

    var Mask = function (el, mask, options) {
      var p = {
        invalid: [],
        getCaret: function () {
          try {
            var sel,
              pos = 0,
              ctrl = el.get(0),
              dSel = document.selection,
              cSelStart = ctrl.selectionStart;

            // IE Support
            if (dSel && navigator.appVersion.indexOf("MSIE 10") === -1) {
              sel = dSel.createRange();
              sel.moveStart("character", -p.val().length);
              pos = sel.text.length;
            }
            // Firefox support
            else if (cSelStart || cSelStart === "0") {
              pos = cSelStart;
            }

            return pos;
          } catch (e) {}
        },
        setCaret: function (pos) {
          try {
            if (el.is(":focus")) {
              var range,
                ctrl = el.get(0);

              // Firefox, WebKit, etc..
              if (ctrl.setSelectionRange) {
                ctrl.setSelectionRange(pos, pos);
              } else {
                // IE
                range = ctrl.createTextRange();
                range.collapse(true);
                range.moveEnd("character", pos);
                range.moveStart("character", pos);
                range.select();
              }
            }
          } catch (e) {}
        },
        events: function () {
          el.on("keydown.mask", function (e) {
            el.data("mask-keycode", e.keyCode || e.which);
            el.data("mask-previus-value", el.val());
            el.data("mask-previus-caret-pos", p.getCaret());
            p.maskDigitPosMapOld = p.maskDigitPosMap;
          })
            .on(
              $.jMaskGlobals.useInput ? "input.mask" : "keyup.mask",
              p.behaviour
            )
            .on("paste.mask drop.mask", function () {
              setTimeout(function () {
                el.keydown().keyup();
              }, 100);
            })
            .on("change.mask", function () {
              el.data("changed", true);
            })
            .on("blur.mask", function () {
              if (oldValue !== p.val() && !el.data("changed")) {
                el.trigger("change");
              }
              el.data("changed", false);
            })
            // it's very important that this callback remains in this position
            // otherwhise oldValue it's going to work buggy
            .on("blur.mask", function () {
              oldValue = p.val();
            })
            // select all text on focus
            .on("focus.mask", function (e) {
              if (options.selectOnFocus === true) {
                $(e.target).select();
              }
            })
            // clear the value if it not complete the mask
            .on("focusout.mask", function () {
              if (options.clearIfNotMatch && !regexMask.test(p.val())) {
                p.val("");
              }
            });
        },
        getRegexMask: function () {
          var maskChunks = [],
            translation,
            pattern,
            optional,
            recursive,
            oRecursive,
            r;

          for (var i = 0; i < mask.length; i++) {
            translation = jMask.translation[mask.charAt(i)];

            if (translation) {
              pattern = translation.pattern
                .toString()
                .replace(/.{1}$|^.{1}/g, "");
              optional = translation.optional;
              recursive = translation.recursive;

              if (recursive) {
                maskChunks.push(mask.charAt(i));
                oRecursive = {
                  digit: mask.charAt(i),
                  pattern: pattern,
                };
              } else {
                maskChunks.push(
                  !optional && !recursive ? pattern : pattern + "?"
                );
              }
            } else {
              maskChunks.push(
                mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
              );
            }
          }

          r = maskChunks.join("");

          if (oRecursive) {
            r = r
              .replace(
                new RegExp(
                  "(" + oRecursive.digit + "(.*" + oRecursive.digit + ")?)"
                ),
                "($1)?"
              )
              .replace(new RegExp(oRecursive.digit, "g"), oRecursive.pattern);
          }

          return new RegExp(r);
        },
        destroyEvents: function () {
          el.off(
            [
              "input",
              "keydown",
              "keyup",
              "paste",
              "drop",
              "blur",
              "focusout",
              "",
            ].join(".mask ")
          );
        },
        val: function (v) {
          var isInput = el.is("input"),
            method = isInput ? "val" : "text",
            r;

          if (arguments.length > 0) {
            if (el[method]() !== v) {
              el[method](v);
            }
            r = el;
          } else {
            r = el[method]();
          }

          return r;
        },
        calculateCaretPosition: function (oldVal) {
          var newVal = p.getMasked(),
            caretPosNew = p.getCaret();
          if (oldVal !== newVal) {
            var caretPosOld = el.data("mask-previus-caret-pos") || 0,
              newValL = newVal.length,
              oldValL = oldVal.length,
              maskDigitsBeforeCaret = 0,
              maskDigitsAfterCaret = 0,
              maskDigitsBeforeCaretAll = 0,
              maskDigitsBeforeCaretAllOld = 0,
              i = 0;

            for (i = caretPosNew; i < newValL; i++) {
              if (!p.maskDigitPosMap[i]) {
                break;
              }
              maskDigitsAfterCaret++;
            }

            for (i = caretPosNew - 1; i >= 0; i--) {
              if (!p.maskDigitPosMap[i]) {
                break;
              }
              maskDigitsBeforeCaret++;
            }

            for (i = caretPosNew - 1; i >= 0; i--) {
              if (p.maskDigitPosMap[i]) {
                maskDigitsBeforeCaretAll++;
              }
            }

            for (i = caretPosOld - 1; i >= 0; i--) {
              if (p.maskDigitPosMapOld[i]) {
                maskDigitsBeforeCaretAllOld++;
              }
            }

            // if the cursor is at the end keep it there
            if (caretPosNew > oldValL) {
              caretPosNew = newValL * 10;
            } else if (caretPosOld >= caretPosNew && caretPosOld !== oldValL) {
              if (!p.maskDigitPosMapOld[caretPosNew]) {
                var caretPos = caretPosNew;
                caretPosNew -=
                  maskDigitsBeforeCaretAllOld - maskDigitsBeforeCaretAll;
                caretPosNew -= maskDigitsBeforeCaret;
                if (p.maskDigitPosMap[caretPosNew]) {
                  caretPosNew = caretPos;
                }
              }
            } else if (caretPosNew > caretPosOld) {
              caretPosNew +=
                maskDigitsBeforeCaretAll - maskDigitsBeforeCaretAllOld;
              caretPosNew += maskDigitsAfterCaret;
            }
          }
          return caretPosNew;
        },
        behaviour: function (e) {
          e = e || window.event;
          p.invalid = [];

          var keyCode = el.data("mask-keycode");

          if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
            var newVal = p.getMasked(),
              caretPos = p.getCaret(),
              oldVal = el.data("mask-previus-value") || "";

            // this is a compensation to devices/browsers that don't compensate
            // caret positioning the right way
            setTimeout(function () {
              p.setCaret(p.calculateCaretPosition(oldVal));
            }, $.jMaskGlobals.keyStrokeCompensation);

            p.val(newVal);
            p.setCaret(caretPos);
            return p.callbacks(e);
          }
        },
        getMasked: function (skipMaskChars, val) {
          var buf = [],
            value = val === undefined ? p.val() : val + "",
            m = 0,
            maskLen = mask.length,
            v = 0,
            valLen = value.length,
            offset = 1,
            addMethod = "push",
            resetPos = -1,
            maskDigitCount = 0,
            maskDigitPosArr = [],
            lastMaskChar,
            check;

          if (options.reverse) {
            addMethod = "unshift";
            offset = -1;
            lastMaskChar = 0;
            m = maskLen - 1;
            v = valLen - 1;
            check = function () {
              return m > -1 && v > -1;
            };
          } else {
            lastMaskChar = maskLen - 1;
            check = function () {
              return m < maskLen && v < valLen;
            };
          }

          var lastUntranslatedMaskChar;
          while (check()) {
            var maskDigit = mask.charAt(m),
              valDigit = value.charAt(v),
              translation = jMask.translation[maskDigit];

            if (translation) {
              if (valDigit.match(translation.pattern)) {
                buf[addMethod](valDigit);
                if (translation.recursive) {
                  if (resetPos === -1) {
                    resetPos = m;
                  } else if (m === lastMaskChar && m !== resetPos) {
                    m = resetPos - offset;
                  }

                  if (lastMaskChar === resetPos) {
                    m -= offset;
                  }
                }
                m += offset;
              } else if (valDigit === lastUntranslatedMaskChar) {
                // matched the last untranslated (raw) mask character that we encountered
                // likely an insert offset the mask character from the last entry; fall
                // through and only increment v
                maskDigitCount--;
                lastUntranslatedMaskChar = undefined;
              } else if (translation.optional) {
                m += offset;
                v -= offset;
              } else if (translation.fallback) {
                buf[addMethod](translation.fallback);
                m += offset;
                v -= offset;
              } else {
                p.invalid.push({
                  p: v,
                  v: valDigit,
                  e: translation.pattern,
                });
              }
              v += offset;
            } else {
              if (!skipMaskChars) {
                buf[addMethod](maskDigit);
              }

              if (valDigit === maskDigit) {
                maskDigitPosArr.push(v);
                v += offset;
              } else {
                lastUntranslatedMaskChar = maskDigit;
                maskDigitPosArr.push(v + maskDigitCount);
                maskDigitCount++;
              }

              m += offset;
            }
          }

          var lastMaskCharDigit = mask.charAt(lastMaskChar);
          if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {
            buf.push(lastMaskCharDigit);
          }

          var newVal = buf.join("");
          p.mapMaskdigitPositions(newVal, maskDigitPosArr, valLen);
          return newVal;
        },
        mapMaskdigitPositions: function (newVal, maskDigitPosArr, valLen) {
          var maskDiff = options.reverse ? newVal.length - valLen : 0;
          p.maskDigitPosMap = {};
          for (var i = 0; i < maskDigitPosArr.length; i++) {
            p.maskDigitPosMap[maskDigitPosArr[i] + maskDiff] = 1;
          }
        },
        callbacks: function (e) {
          var val = p.val(),
            changed = val !== oldValue,
            defaultArgs = [val, e, el, options],
            callback = function (name, criteria, args) {
              if (typeof options[name] === "function" && criteria) {
                options[name].apply(this, args);
              }
            };

          callback("onChange", changed === true, defaultArgs);
          callback("onKeyPress", changed === true, defaultArgs);
          callback("onComplete", val.length === mask.length, defaultArgs);
          callback("onInvalid", p.invalid.length > 0, [
            val,
            e,
            el,
            p.invalid,
            options,
          ]);
        },
      };

      el = $(el);
      var jMask = this,
        oldValue = p.val(),
        regexMask;

      mask =
        typeof mask === "function"
          ? mask(p.val(), undefined, el, options)
          : mask;

      // public methods
      jMask.mask = mask;
      jMask.options = options;
      jMask.remove = function () {
        var caret = p.getCaret();
        if (jMask.options.placeholder) {
          el.removeAttr("placeholder");
        }
        if (el.data("mask-maxlength")) {
          el.removeAttr("maxlength");
        }
        p.destroyEvents();
        p.val(jMask.getCleanVal());
        p.setCaret(caret);
        return el;
      };

      // get value without mask
      jMask.getCleanVal = function () {
        return p.getMasked(true);
      };

      // get masked value without the value being in the input or element
      jMask.getMaskedVal = function (val) {
        return p.getMasked(false, val);
      };

      jMask.init = function (onlyMask) {
        onlyMask = onlyMask || false;
        options = options || {};

        jMask.clearIfNotMatch = $.jMaskGlobals.clearIfNotMatch;
        jMask.byPassKeys = $.jMaskGlobals.byPassKeys;
        jMask.translation = $.extend(
          {},
          $.jMaskGlobals.translation,
          options.translation
        );

        jMask = $.extend(true, {}, jMask, options);

        regexMask = p.getRegexMask();

        if (onlyMask) {
          p.events();
          p.val(p.getMasked());
        } else {
          if (options.placeholder) {
            el.attr("placeholder", options.placeholder);
          }

          // this is necessary, otherwise if the user submit the form
          // and then press the "back" button, the autocomplete will erase
          // the data. Works fine on IE9+, FF, Opera, Safari.
          if (el.data("mask")) {
            el.attr("autocomplete", "off");
          }

          // detect if is necessary let the user type freely.
          // for is a lot faster than forEach.
          for (var i = 0, maxlength = true; i < mask.length; i++) {
            var translation = jMask.translation[mask.charAt(i)];
            if (translation && translation.recursive) {
              maxlength = false;
              break;
            }
          }

          if (maxlength) {
            el.attr("maxlength", mask.length).data("mask-maxlength", true);
          }

          p.destroyEvents();
          p.events();

          var caret = p.getCaret();
          p.val(p.getMasked());
          p.setCaret(caret);
        }
      };

      jMask.init(!el.is("input"));
    };

    $.maskWatchers = {};
    var HTMLAttributes = function () {
        var input = $(this),
          options = {},
          prefix = "data-mask-",
          mask = input.attr("data-mask");

        if (input.attr(prefix + "reverse")) {
          options.reverse = true;
        }

        if (input.attr(prefix + "clearifnotmatch")) {
          options.clearIfNotMatch = true;
        }

        if (input.attr(prefix + "selectonfocus") === "true") {
          options.selectOnFocus = true;
        }

        if (notSameMaskObject(input, mask, options)) {
          return input.data("mask", new Mask(this, mask, options));
        }
      },
      notSameMaskObject = function (field, mask, options) {
        options = options || {};
        var maskObject = $(field).data("mask"),
          stringify = JSON.stringify,
          value = $(field).val() || $(field).text();
        try {
          if (typeof mask === "function") {
            mask = mask(value);
          }
          return (
            typeof maskObject !== "object" ||
            stringify(maskObject.options) !== stringify(options) ||
            maskObject.mask !== mask
          );
        } catch (e) {}
      },
      eventSupported = function (eventName) {
        var el = document.createElement("div"),
          isSupported;

        eventName = "on" + eventName;
        isSupported = eventName in el;

        if (!isSupported) {
          el.setAttribute(eventName, "return;");
          isSupported = typeof el[eventName] === "function";
        }
        el = null;

        return isSupported;
      };

    $.fn.mask = function (mask, options) {
      options = options || {};
      var selector = this.selector,
        globals = $.jMaskGlobals,
        interval = globals.watchInterval,
        watchInputs = options.watchInputs || globals.watchInputs,
        maskFunction = function () {
          if (notSameMaskObject(this, mask, options)) {
            return $(this).data("mask", new Mask(this, mask, options));
          }
        };

      $(this).each(maskFunction);

      if (selector && selector !== "" && watchInputs) {
        clearInterval($.maskWatchers[selector]);
        $.maskWatchers[selector] = setInterval(function () {
          $(document).find(selector).each(maskFunction);
        }, interval);
      }
      return this;
    };

    $.fn.masked = function (val) {
      return this.data("mask").getMaskedVal(val);
    };

    $.fn.unmask = function () {
      clearInterval($.maskWatchers[this.selector]);
      delete $.maskWatchers[this.selector];
      return this.each(function () {
        var dataMask = $(this).data("mask");
        if (dataMask) {
          dataMask.remove().removeData("mask");
        }
      });
    };

    $.fn.cleanVal = function () {
      return this.data("mask").getCleanVal();
    };

    $.applyDataMask = function (selector) {
      selector = selector || $.jMaskGlobals.maskElements;
      var $selector = selector instanceof $ ? selector : $(selector);
      $selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
    };

    var globals = {
      maskElements: "input,td,span,div",
      dataMaskAttr: "[data-mask]",
      dataMask: true,
      watchInterval: 300,
      watchInputs: true,
      keyStrokeCompensation: 10,
      // old versions of chrome dont work great with input event
      useInput:
        !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) &&
        eventSupported("input"),
      watchDataMask: false,
      byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
      translation: {
        0: {
          pattern: /\d/,
        },
        9: {
          pattern: /\d/,
          optional: true,
        },
        "#": {
          pattern: /\d/,
          recursive: true,
        },
        A: {
          pattern: /[a-zA-Z0-9]/,
        },
        S: {
          pattern: /[a-zA-Z]/,
        },
      },
    };

    $.jMaskGlobals = $.jMaskGlobals || {};
    globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals);

    // looking for inputs with data-mask attribute
    if (globals.dataMask) {
      $.applyDataMask();
    }

    setInterval(function () {
      if ($.jMaskGlobals.watchDataMask) {
        $.applyDataMask();
      }
    }, globals.watchInterval);
  },
  window.jQuery,
  window.Zepto
);

// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!(function (t, e, n, o) {
  "use strict";

  function i(t, e) {
    var o,
      i,
      a,
      s = [],
      r = 0;
    (t && t.isDefaultPrevented()) ||
      (t.preventDefault(),
      (e = e || {}),
      t && t.data && (e = h(t.data.options, e)),
      (o = e.$target || n(t.currentTarget).trigger("blur")),
      ((a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o)) ||
        (e.selector
          ? (s = n(e.selector))
          : ((i = o.attr("data-fancybox") || ""),
            i
              ? ((s = t.data ? t.data.items : []),
                (s = s.length
                  ? s.filter('[data-fancybox="' + i + '"]')
                  : n('[data-fancybox="' + i + '"]')))
              : (s = [o])),
        (r = n(s).index(o)),
        r < 0 && (r = 0),
        (a = n.fancybox.open(s, e, r)),
        (a.$trigger = o)));
  }
  if (
    ((t.console = t.console || {
      info: function (t) {},
    }),
    n)
  ) {
    if (n.fn.fancybox) return void console.info("fancyBox already initialized");
    var a = {
        closeExisting: !1,
        loop: !1,
        gutter: 50,
        keyboard: !0,
        preventCaptionOverlap: !0,
        arrows: !0,
        infobar: !0,
        smallBtn: "auto",
        toolbar: "auto",
        buttons: ["zoom", "slideShow", "thumbs", "close"],
        idleTime: 3,
        protect: !1,
        modal: !1,
        image: {
          preload: !1,
        },
        ajax: {
          settings: {
            data: {
              fancybox: !0,
            },
          },
        },
        iframe: {
          tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
          preload: !0,
          css: {},
          attr: {
            scrolling: "auto",
          },
        },
        video: {
          tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
          format: "",
          autoStart: !0,
        },
        defaultType: "image",
        animationEffect: "zoom",
        animationDuration: 366,
        zoomOpacity: "auto",
        transitionEffect: "fade",
        transitionDuration: 366,
        slideClass: "",
        baseClass: "",
        baseTpl:
          '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
        btnTpl: {
          download:
            '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
          zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
          close:
            '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
          arrowLeft:
            '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
          arrowRight:
            '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
          smallBtn:
            '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
        },
        parentEl: "body",
        hideScrollbar: !0,
        autoFocus: !0,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: {
          autoStart: !1,
        },
        touch: {
          vertical: !0,
          momentum: !0,
        },
        hash: null,
        media: {},
        slideShow: {
          autoStart: !1,
          speed: 3e3,
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
        wheel: "auto",
        onInit: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop,
        onActivate: n.noop,
        onDeactivate: n.noop,
        clickContent: function (t, e) {
          return "image" === t.type && "zoom";
        },
        clickSlide: "close",
        clickOutside: "close",
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
          preventCaptionOverlap: !1,
          idleTime: !1,
          clickContent: function (t, e) {
            return "image" === t.type && "toggleControls";
          },
          clickSlide: function (t, e) {
            return "image" === t.type ? "toggleControls" : "close";
          },
          dblclickContent: function (t, e) {
            return "image" === t.type && "zoom";
          },
          dblclickSlide: function (t, e) {
            return "image" === t.type && "zoom";
          },
        },
        lang: "en",
        i18n: {
          en: {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            ERROR:
              "The requested content cannot be loaded. <br/> Please try again later.",
            PLAY_START: "Start slideshow",
            PLAY_STOP: "Pause slideshow",
            FULL_SCREEN: "Full screen",
            THUMBS: "Thumbnails",
            DOWNLOAD: "Download",
            SHARE: "Share",
            ZOOM: "Zoom",
          },
          de: {
            CLOSE: "Schlie&szlig;en",
            NEXT: "Weiter",
            PREV: "Zur&uuml;ck",
            ERROR:
              "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
            PLAY_START: "Diaschau starten",
            PLAY_STOP: "Diaschau beenden",
            FULL_SCREEN: "Vollbild",
            THUMBS: "Vorschaubilder",
            DOWNLOAD: "Herunterladen",
            SHARE: "Teilen",
            ZOOM: "Vergr&ouml;&szlig;ern",
          },
        },
      },
      s = n(t),
      r = n(e),
      c = 0,
      l = function (t) {
        return t && t.hasOwnProperty && t instanceof n;
      },
      d = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      u = (function () {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function (e) {
            t.clearTimeout(e);
          }
        );
      })(),
      f = (function () {
        var t,
          n = e.createElement("fakeelement"),
          o = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
          };
        for (t in o) if (void 0 !== n.style[t]) return o[t];
        return "transitionend";
      })(),
      p = function (t) {
        return t && t.length && t[0].offsetHeight;
      },
      h = function (t, e) {
        var o = n.extend(!0, {}, t, e);
        return (
          n.each(e, function (t, e) {
            n.isArray(e) && (o[t] = e);
          }),
          o
        );
      },
      g = function (t) {
        var o, i;
        return (
          !(!t || t.ownerDocument !== e) &&
          (n(".fancybox-container").css("pointer-events", "none"),
          (o = {
            x: t.getBoundingClientRect().left + t.offsetWidth / 2,
            y: t.getBoundingClientRect().top + t.offsetHeight / 2,
          }),
          (i = e.elementFromPoint(o.x, o.y) === t),
          n(".fancybox-container").css("pointer-events", ""),
          i)
        );
      },
      b = function (t, e, o) {
        var i = this;
        (i.opts = h(
          {
            index: o,
          },
          n.fancybox.defaults
        )),
          n.isPlainObject(e) && (i.opts = h(i.opts, e)),
          n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)),
          (i.id = i.opts.id || ++c),
          (i.currIndex = parseInt(i.opts.index, 10) || 0),
          (i.prevIndex = null),
          (i.prevPos = null),
          (i.currPos = 0),
          (i.firstRun = !0),
          (i.group = []),
          (i.slides = {}),
          i.addContent(t),
          i.group.length && i.init();
      };
    n.extend(b.prototype, {
      init: function () {
        var o,
          i,
          a = this,
          s = a.group[a.currIndex],
          r = s.opts;
        r.closeExisting && n.fancybox.close(!0),
          n("body").addClass("fancybox-active"),
          !n.fancybox.getInstance() &&
            !1 !== r.hideScrollbar &&
            !n.fancybox.isMobile &&
            e.body.scrollHeight > t.innerHeight &&
            (n("head").append(
              '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                (t.innerWidth - e.documentElement.clientWidth) +
                "px;}</style>"
            ),
            n("body").addClass("compensate-for-scrollbar")),
          (i = ""),
          n.each(r.buttons, function (t, e) {
            i += r.btnTpl[e] || "";
          }),
          (o = n(
            a.translate(
              a,
              r.baseTpl
                .replace("{{buttons}}", i)
                .replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight)
            )
          )
            .attr("id", "fancybox-container-" + a.id)
            .addClass(r.baseClass)
            .data("FancyBox", a)
            .appendTo(r.parentEl)),
          (a.$refs = {
            container: o,
          }),
          [
            "bg",
            "inner",
            "infobar",
            "toolbar",
            "stage",
            "caption",
            "navigation",
          ].forEach(function (t) {
            a.$refs[t] = o.find(".fancybox-" + t);
          }),
          a.trigger("onInit"),
          a.activate(),
          a.jumpTo(a.currIndex);
      },
      translate: function (t, e) {
        var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          return void 0 === n[e] ? t : n[e];
        });
      },
      addContent: function (t) {
        var e,
          o = this,
          i = n.makeArray(t);
        n.each(i, function (t, e) {
          var i,
            a,
            s,
            r,
            c,
            l = {},
            d = {};
          n.isPlainObject(e)
            ? ((l = e), (d = e.opts || e))
            : "object" === n.type(e) && n(e).length
            ? ((i = n(e)),
              (d = i.data() || {}),
              (d = n.extend(!0, {}, d, d.options)),
              (d.$orig = i),
              (l.src = o.opts.src || d.src || i.attr("href")),
              l.type || l.src || ((l.type = "inline"), (l.src = e)))
            : (l = {
                type: "html",
                src: e + "",
              }),
            (l.opts = n.extend(!0, {}, o.opts, d)),
            n.isArray(d.buttons) && (l.opts.buttons = d.buttons),
            n.fancybox.isMobile &&
              l.opts.mobile &&
              (l.opts = h(l.opts, l.opts.mobile)),
            (a = l.type || l.opts.type),
            (r = l.src || ""),
            !a &&
              r &&
              ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                ? ((a = "video"),
                  l.opts.video.format ||
                    (l.opts.video.format =
                      "video/" + ("ogv" === s[1] ? "ogg" : s[1])))
                : r.match(
                    /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                  )
                ? (a = "image")
                : r.match(/\.(pdf)((\?|#).*)?$/i)
                ? ((a = "iframe"),
                  (l = n.extend(!0, l, {
                    contentType: "pdf",
                    opts: {
                      iframe: {
                        preload: !1,
                      },
                    },
                  })))
                : "#" === r.charAt(0) && (a = "inline")),
            a ? (l.type = a) : o.trigger("objectNeedsType", l),
            l.contentType ||
              (l.contentType =
                n.inArray(l.type, ["html", "inline", "ajax"]) > -1
                  ? "html"
                  : l.type),
            (l.index = o.group.length),
            "auto" == l.opts.smallBtn &&
              (l.opts.smallBtn =
                n.inArray(l.type, ["html", "inline", "ajax"]) > -1),
            "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn),
            (l.$thumb = l.opts.$thumb || null),
            l.opts.$trigger &&
              l.index === o.opts.index &&
              ((l.$thumb = l.opts.$trigger.find("img:first")),
              l.$thumb.length && (l.opts.$orig = l.opts.$trigger)),
            (l.$thumb && l.$thumb.length) ||
              !l.opts.$orig ||
              (l.$thumb = l.opts.$orig.find("img:first")),
            l.$thumb && !l.$thumb.length && (l.$thumb = null),
            (l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null)),
            "function" === n.type(l.opts.caption) &&
              (l.opts.caption = l.opts.caption.apply(e, [o, l])),
            "function" === n.type(o.opts.caption) &&
              (l.opts.caption = o.opts.caption.apply(e, [o, l])),
            l.opts.caption instanceof n ||
              (l.opts.caption =
                void 0 === l.opts.caption ? "" : l.opts.caption + ""),
            "ajax" === l.type &&
              ((c = r.split(/\s+/, 2)),
              c.length > 1 &&
                ((l.src = c.shift()), (l.opts.filter = c.shift()))),
            l.opts.modal &&
              (l.opts = n.extend(!0, l.opts, {
                trapFocus: !0,
                infobar: 0,
                toolbar: 0,
                smallBtn: 0,
                keyboard: 0,
                slideShow: 0,
                fullScreen: 0,
                thumbs: 0,
                touch: 0,
                clickContent: !1,
                clickSlide: !1,
                clickOutside: !1,
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
              })),
            o.group.push(l);
        }),
          Object.keys(o.slides).length &&
            (o.updateControls(),
            (e = o.Thumbs) && e.isActive && (e.create(), e.focus()));
      },
      addEvents: function () {
        var e = this;
        e.removeEvents(),
          e.$refs.container
            .on("click.fb-close", "[data-fancybox-close]", function (t) {
              t.stopPropagation(), t.preventDefault(), e.close(t);
            })
            .on(
              "touchstart.fb-prev click.fb-prev",
              "[data-fancybox-prev]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), e.previous();
              }
            )
            .on(
              "touchstart.fb-next click.fb-next",
              "[data-fancybox-next]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), e.next();
              }
            )
            .on("click.fb", "[data-fancybox-zoom]", function (t) {
              e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
            }),
          s.on("orientationchange.fb resize.fb", function (t) {
            t && t.originalEvent && "resize" === t.originalEvent.type
              ? (e.requestId && u(e.requestId),
                (e.requestId = d(function () {
                  e.update(t);
                })))
              : (e.current &&
                  "iframe" === e.current.type &&
                  e.$refs.stage.hide(),
                setTimeout(
                  function () {
                    e.$refs.stage.show(), e.update(t);
                  },
                  n.fancybox.isMobile ? 600 : 250
                ));
          }),
          r.on("keydown.fb", function (t) {
            var o = n.fancybox ? n.fancybox.getInstance() : null,
              i = o.current,
              a = t.keyCode || t.which;
            if (9 == a) return void (i.opts.trapFocus && e.focus(t));
            if (
              !(
                !i.opts.keyboard ||
                t.ctrlKey ||
                t.altKey ||
                t.shiftKey ||
                n(t.target).is("input,textarea,video,audio,select")
              )
            )
              return 8 === a || 27 === a
                ? (t.preventDefault(), void e.close(t))
                : 37 === a || 38 === a
                ? (t.preventDefault(), void e.previous())
                : 39 === a || 40 === a
                ? (t.preventDefault(), void e.next())
                : void e.trigger("afterKeydown", t, a);
          }),
          e.group[e.currIndex].opts.idleTime &&
            ((e.idleSecondsCounter = 0),
            r.on(
              "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
              function (t) {
                (e.idleSecondsCounter = 0),
                  e.isIdle && e.showControls(),
                  (e.isIdle = !1);
              }
            ),
            (e.idleInterval = t.setInterval(function () {
              ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime &&
                !e.isDragging &&
                ((e.isIdle = !0), (e.idleSecondsCounter = 0), e.hideControls());
            }, 1e3)));
      },
      removeEvents: function () {
        var e = this;
        s.off("orientationchange.fb resize.fb"),
          r.off("keydown.fb .fb-idle"),
          this.$refs.container.off(".fb-close .fb-prev .fb-next"),
          e.idleInterval &&
            (t.clearInterval(e.idleInterval), (e.idleInterval = null));
      },
      previous: function (t) {
        return this.jumpTo(this.currPos - 1, t);
      },
      next: function (t) {
        return this.jumpTo(this.currPos + 1, t);
      },
      jumpTo: function (t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l,
          d,
          u,
          f = this,
          h = f.group.length;
        if (!(f.isDragging || f.isClosing || (f.isAnimating && f.firstRun))) {
          if (
            ((t = parseInt(t, 10)),
            !(a = f.current ? f.current.opts.loop : f.opts.loop) &&
              (t < 0 || t >= h))
          )
            return !1;
          if (
            ((o = f.firstRun = !Object.keys(f.slides).length),
            (r = f.current),
            (f.prevIndex = f.currIndex),
            (f.prevPos = f.currPos),
            (s = f.createSlide(t)),
            h > 1 &&
              ((a || s.index < h - 1) && f.createSlide(t + 1),
              (a || s.index > 0) && f.createSlide(t - 1)),
            (f.current = s),
            (f.currIndex = s.index),
            (f.currPos = s.pos),
            f.trigger("beforeShow", o),
            f.updateControls(),
            (s.forcedDuration = void 0),
            n.isNumeric(e)
              ? (s.forcedDuration = e)
              : (e = s.opts[o ? "animationDuration" : "transitionDuration"]),
            (e = parseInt(e, 10)),
            (i = f.isMoved(s)),
            s.$slide.addClass("fancybox-slide--current"),
            o)
          )
            return (
              s.opts.animationEffect &&
                e &&
                f.$refs.container.css("transition-duration", e + "ms"),
              f.$refs.container.addClass("fancybox-is-open").trigger("focus"),
              f.loadSlide(s),
              void f.preload("image")
            );
          (c = n.fancybox.getTranslate(r.$slide)),
            (l = n.fancybox.getTranslate(f.$refs.stage)),
            n.each(f.slides, function (t, e) {
              n.fancybox.stop(e.$slide, !0);
            }),
            r.pos !== s.pos && (r.isComplete = !1),
            r.$slide.removeClass(
              "fancybox-slide--complete fancybox-slide--current"
            ),
            i
              ? ((u = c.left - (r.pos * c.width + r.pos * r.opts.gutter)),
                n.each(f.slides, function (t, o) {
                  o.$slide
                    .removeClass("fancybox-animated")
                    .removeClass(function (t, e) {
                      return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                        " "
                      );
                    });
                  var i = o.pos * c.width + o.pos * o.opts.gutter;
                  n.fancybox.setTranslate(o.$slide, {
                    top: 0,
                    left: i - l.left + u,
                  }),
                    o.pos !== s.pos &&
                      o.$slide.addClass(
                        "fancybox-slide--" +
                          (o.pos > s.pos ? "next" : "previous")
                      ),
                    p(o.$slide),
                    n.fancybox.animate(
                      o.$slide,
                      {
                        top: 0,
                        left:
                          (o.pos - s.pos) * c.width +
                          (o.pos - s.pos) * o.opts.gutter,
                      },
                      e,
                      function () {
                        o.$slide
                          .css({
                            transform: "",
                            opacity: "",
                          })
                          .removeClass(
                            "fancybox-slide--next fancybox-slide--previous"
                          ),
                          o.pos === f.currPos && f.complete();
                      }
                    );
                }))
              : e &&
                s.opts.transitionEffect &&
                ((d =
                  "fancybox-animated fancybox-fx-" + s.opts.transitionEffect),
                r.$slide.addClass(
                  "fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")
                ),
                n.fancybox.animate(
                  r.$slide,
                  d,
                  e,
                  function () {
                    r.$slide
                      .removeClass(d)
                      .removeClass(
                        "fancybox-slide--next fancybox-slide--previous"
                      );
                  },
                  !1
                )),
            s.isLoaded ? f.revealContent(s) : f.loadSlide(s),
            f.preload("image");
        }
      },
      createSlide: function (t) {
        var e,
          o,
          i = this;
        return (
          (o = t % i.group.length),
          (o = o < 0 ? i.group.length + o : o),
          !i.slides[t] &&
            i.group[o] &&
            ((e = n('<div class="fancybox-slide"></div>').appendTo(
              i.$refs.stage
            )),
            (i.slides[t] = n.extend(!0, {}, i.group[o], {
              pos: t,
              $slide: e,
              isLoaded: !1,
            })),
            i.updateSlide(i.slides[t])),
          i.slides[t]
        );
      },
      scaleToActual: function (t, e, o) {
        var i,
          a,
          s,
          r,
          c,
          l = this,
          d = l.current,
          u = d.$content,
          f = n.fancybox.getTranslate(d.$slide).width,
          p = n.fancybox.getTranslate(d.$slide).height,
          h = d.width,
          g = d.height;
        l.isAnimating ||
          l.isMoved() ||
          !u ||
          "image" != d.type ||
          !d.isLoaded ||
          d.hasError ||
          ((l.isAnimating = !0),
          n.fancybox.stop(u),
          (t = void 0 === t ? 0.5 * f : t),
          (e = void 0 === e ? 0.5 * p : e),
          (i = n.fancybox.getTranslate(u)),
          (i.top -= n.fancybox.getTranslate(d.$slide).top),
          (i.left -= n.fancybox.getTranslate(d.$slide).left),
          (r = h / i.width),
          (c = g / i.height),
          (a = 0.5 * f - 0.5 * h),
          (s = 0.5 * p - 0.5 * g),
          h > f &&
            ((a = i.left * r - (t * r - t)),
            a > 0 && (a = 0),
            a < f - h && (a = f - h)),
          g > p &&
            ((s = i.top * c - (e * c - e)),
            s > 0 && (s = 0),
            s < p - g && (s = p - g)),
          l.updateCursor(h, g),
          n.fancybox.animate(
            u,
            {
              top: s,
              left: a,
              scaleX: r,
              scaleY: c,
            },
            o || 366,
            function () {
              l.isAnimating = !1;
            }
          ),
          l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
      },
      scaleToFit: function (t) {
        var e,
          o = this,
          i = o.current,
          a = i.$content;
        o.isAnimating ||
          o.isMoved() ||
          !a ||
          "image" != i.type ||
          !i.isLoaded ||
          i.hasError ||
          ((o.isAnimating = !0),
          n.fancybox.stop(a),
          (e = o.getFitPos(i)),
          o.updateCursor(e.width, e.height),
          n.fancybox.animate(
            a,
            {
              top: e.top,
              left: e.left,
              scaleX: e.width / a.width(),
              scaleY: e.height / a.height(),
            },
            t || 366,
            function () {
              o.isAnimating = !1;
            }
          ));
      },
      getFitPos: function (t) {
        var e,
          o,
          i,
          a,
          s = this,
          r = t.$content,
          c = t.$slide,
          l = t.width || t.opts.width,
          d = t.height || t.opts.height,
          u = {};
        return (
          !!(t.isLoaded && r && r.length) &&
          ((e = n.fancybox.getTranslate(s.$refs.stage).width),
          (o = n.fancybox.getTranslate(s.$refs.stage).height),
          (e -=
            parseFloat(c.css("paddingLeft")) +
            parseFloat(c.css("paddingRight")) +
            parseFloat(r.css("marginLeft")) +
            parseFloat(r.css("marginRight"))),
          (o -=
            parseFloat(c.css("paddingTop")) +
            parseFloat(c.css("paddingBottom")) +
            parseFloat(r.css("marginTop")) +
            parseFloat(r.css("marginBottom"))),
          (l && d) || ((l = e), (d = o)),
          (i = Math.min(1, e / l, o / d)),
          (l *= i),
          (d *= i),
          l > e - 0.5 && (l = e),
          d > o - 0.5 && (d = o),
          "image" === t.type
            ? ((u.top =
                Math.floor(0.5 * (o - d)) + parseFloat(c.css("paddingTop"))),
              (u.left =
                Math.floor(0.5 * (e - l)) + parseFloat(c.css("paddingLeft"))))
            : "video" === t.contentType &&
              ((a =
                t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9),
              d > l / a ? (d = l / a) : l > d * a && (l = d * a)),
          (u.width = l),
          (u.height = d),
          u)
        );
      },
      update: function (t) {
        var e = this;
        n.each(e.slides, function (n, o) {
          e.updateSlide(o, t);
        });
      },
      updateSlide: function (t, e) {
        var o = this,
          i = t && t.$content,
          a = t.width || t.opts.width,
          s = t.height || t.opts.height,
          r = t.$slide;
        o.adjustCaption(t),
          i &&
            (a || s || "video" === t.contentType) &&
            !t.hasError &&
            (n.fancybox.stop(i),
            n.fancybox.setTranslate(i, o.getFitPos(t)),
            t.pos === o.currPos && ((o.isAnimating = !1), o.updateCursor())),
          o.adjustLayout(t),
          r.length &&
            (r.trigger("refresh"),
            t.pos === o.currPos &&
              o.$refs.toolbar
                .add(o.$refs.navigation.find(".fancybox-button--arrow_right"))
                .toggleClass(
                  "compensate-for-scrollbar",
                  r.get(0).scrollHeight > r.get(0).clientHeight
                )),
          o.trigger("onUpdate", t, e);
      },
      centerSlide: function (t) {
        var e = this,
          o = e.current,
          i = o.$slide;
        !e.isClosing &&
          o &&
          (i.siblings().css({
            transform: "",
            opacity: "",
          }),
          i
            .parent()
            .children()
            .removeClass("fancybox-slide--previous fancybox-slide--next"),
          n.fancybox.animate(
            i,
            {
              top: 0,
              left: 0,
              opacity: 1,
            },
            void 0 === t ? 0 : t,
            function () {
              i.css({
                transform: "",
                opacity: "",
              }),
                o.isComplete || e.complete();
            },
            !1
          ));
      },
      isMoved: function (t) {
        var e,
          o,
          i = t || this.current;
        return (
          !!i &&
          ((o = n.fancybox.getTranslate(this.$refs.stage)),
          (e = n.fancybox.getTranslate(i.$slide)),
          !i.$slide.hasClass("fancybox-animated") &&
            (Math.abs(e.top - o.top) > 0.5 || Math.abs(e.left - o.left) > 0.5))
        );
      },
      updateCursor: function (t, e) {
        var o,
          i,
          a = this,
          s = a.current,
          r = a.$refs.container;
        s &&
          !a.isClosing &&
          a.Guestures &&
          (r.removeClass(
            "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"
          ),
          (o = a.canPan(t, e)),
          (i = !!o || a.isZoomable()),
          r.toggleClass("fancybox-is-zoomable", i),
          n("[data-fancybox-zoom]").prop("disabled", !i),
          o
            ? r.addClass("fancybox-can-pan")
            : i &&
              ("zoom" === s.opts.clickContent ||
                (n.isFunction(s.opts.clickContent) &&
                  "zoom" == s.opts.clickContent(s)))
            ? r.addClass("fancybox-can-zoomIn")
            : s.opts.touch &&
              (s.opts.touch.vertical || a.group.length > 1) &&
              "video" !== s.contentType &&
              r.addClass("fancybox-can-swipe"));
      },
      isZoomable: function () {
        var t,
          e = this,
          n = e.current;
        if (n && !e.isClosing && "image" === n.type && !n.hasError) {
          if (!n.isLoaded) return !0;
          if (
            (t = e.getFitPos(n)) &&
            (n.width > t.width || n.height > t.height)
          )
            return !0;
        }
        return !1;
      },
      isScaledDown: function (t, e) {
        var o = this,
          i = !1,
          a = o.current,
          s = a.$content;
        return (
          void 0 !== t && void 0 !== e
            ? (i = t < a.width && e < a.height)
            : s &&
              ((i = n.fancybox.getTranslate(s)),
              (i = i.width < a.width && i.height < a.height)),
          i
        );
      },
      canPan: function (t, e) {
        var o = this,
          i = o.current,
          a = null,
          s = !1;
        return (
          "image" === i.type &&
            (i.isComplete || (t && e)) &&
            !i.hasError &&
            ((s = o.getFitPos(i)),
            void 0 !== t && void 0 !== e
              ? (a = {
                  width: t,
                  height: e,
                })
              : i.isComplete && (a = n.fancybox.getTranslate(i.$content)),
            a &&
              s &&
              (s =
                Math.abs(a.width - s.width) > 1.5 ||
                Math.abs(a.height - s.height) > 1.5)),
          s
        );
      },
      loadSlide: function (t) {
        var e,
          o,
          i,
          a = this;
        if (!t.isLoading && !t.isLoaded) {
          if (((t.isLoading = !0), !1 === a.trigger("beforeLoad", t)))
            return (t.isLoading = !1), !1;
          switch (
            ((e = t.type),
            (o = t.$slide),
            o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),
            e)
          ) {
            case "image":
              a.setImage(t);
              break;
            case "iframe":
              a.setIframe(t);
              break;
            case "html":
              a.setContent(t, t.src || t.content);
              break;
            case "video":
              a.setContent(
                t,
                t.opts.video.tpl
                  .replace(/\{\{src\}\}/gi, t.src)
                  .replace(
                    "{{format}}",
                    t.opts.videoFormat || t.opts.video.format || ""
                  )
                  .replace("{{poster}}", t.thumb || "")
              );
              break;
            case "inline":
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
              break;
            case "ajax":
              a.showLoading(t),
                (i = n.ajax(
                  n.extend({}, t.opts.ajax.settings, {
                    url: t.src,
                    success: function (e, n) {
                      "success" === n && a.setContent(t, e);
                    },
                    error: function (e, n) {
                      e && "abort" !== n && a.setError(t);
                    },
                  })
                )),
                o.one("onReset", function () {
                  i.abort();
                });
              break;
            default:
              a.setError(t);
          }
          return !0;
        }
      },
      setImage: function (t) {
        var o,
          i = this;
        setTimeout(function () {
          var e = t.$image;
          i.isClosing ||
            !t.isLoading ||
            (e && e.length && e[0].complete) ||
            t.hasError ||
            i.showLoading(t);
        }, 50),
          i.checkSrcset(t),
          (t.$content = n('<div class="fancybox-content"></div>')
            .addClass("fancybox-is-hidden")
            .appendTo(t.$slide.addClass("fancybox-slide--image"))),
          !1 !== t.opts.preload &&
            t.opts.width &&
            t.opts.height &&
            t.thumb &&
            ((t.width = t.opts.width),
            (t.height = t.opts.height),
            (o = e.createElement("img")),
            (o.onerror = function () {
              n(this).remove(), (t.$ghost = null);
            }),
            (o.onload = function () {
              i.afterLoad(t);
            }),
            (t.$ghost = n(o)
              .addClass("fancybox-image")
              .appendTo(t.$content)
              .attr("src", t.thumb))),
          i.setBigImage(t);
      },
      checkSrcset: function (e) {
        var n,
          o,
          i,
          a,
          s = e.opts.srcset || e.opts.image.srcset;
        if (s) {
          (i = t.devicePixelRatio || 1),
            (a = t.innerWidth * i),
            (o = s.split(",").map(function (t) {
              var e = {};
              return (
                t
                  .trim()
                  .split(/\s+/)
                  .forEach(function (t, n) {
                    var o = parseInt(t.substring(0, t.length - 1), 10);
                    if (0 === n) return (e.url = t);
                    o && ((e.value = o), (e.postfix = t[t.length - 1]));
                  }),
                e
              );
            })),
            o.sort(function (t, e) {
              return t.value - e.value;
            });
          for (var r = 0; r < o.length; r++) {
            var c = o[r];
            if (
              ("w" === c.postfix && c.value >= a) ||
              ("x" === c.postfix && c.value >= i)
            ) {
              n = c;
              break;
            }
          }
          !n && o.length && (n = o[o.length - 1]),
            n &&
              ((e.src = n.url),
              e.width &&
                e.height &&
                "w" == n.postfix &&
                ((e.height = (e.width / e.height) * n.value),
                (e.width = n.value)),
              (e.opts.srcset = s));
        }
      },
      setBigImage: function (t) {
        var o = this,
          i = e.createElement("img"),
          a = n(i);
        (t.$image = a
          .one("error", function () {
            o.setError(t);
          })
          .one("load", function () {
            var e;
            t.$ghost ||
              (o.resolveImageSlideSize(
                t,
                this.naturalWidth,
                this.naturalHeight
              ),
              o.afterLoad(t)),
              o.isClosing ||
                (t.opts.srcset &&
                  ((e = t.opts.sizes),
                  (e && "auto" !== e) ||
                    (e =
                      (t.width / t.height > 1 && s.width() / s.height() > 1
                        ? "100"
                        : Math.round((t.width / t.height) * 100)) + "vw"),
                  a.attr("sizes", e).attr("srcset", t.opts.srcset)),
                t.$ghost &&
                  setTimeout(function () {
                    t.$ghost && !o.isClosing && t.$ghost.hide();
                  }, Math.min(300, Math.max(1e3, t.height / 1600))),
                o.hideLoading(t));
          })
          .addClass("fancybox-image")
          .attr("src", t.src)
          .appendTo(t.$content)),
          (i.complete || "complete" == i.readyState) &&
          a.naturalWidth &&
          a.naturalHeight
            ? a.trigger("load")
            : i.error && a.trigger("error");
      },
      resolveImageSlideSize: function (t, e, n) {
        var o = parseInt(t.opts.width, 10),
          i = parseInt(t.opts.height, 10);
        (t.width = e),
          (t.height = n),
          o > 0 && ((t.width = o), (t.height = Math.floor((o * n) / e))),
          i > 0 && ((t.width = Math.floor((i * e) / n)), (t.height = i));
      },
      setIframe: function (t) {
        var e,
          o = this,
          i = t.opts.iframe,
          a = t.$slide;
        (t.$content = n(
          '<div class="fancybox-content' +
            (i.preload ? " fancybox-is-hidden" : "") +
            '"></div>'
        )
          .css(i.css)
          .appendTo(a)),
          a.addClass("fancybox-slide--" + t.contentType),
          (t.$iframe = e =
            n(i.tpl.replace(/\{rnd\}/g, new Date().getTime()))
              .attr(i.attr)
              .appendTo(t.$content)),
          i.preload
            ? (o.showLoading(t),
              e.on("load.fb error.fb", function (e) {
                (this.isReady = 1), t.$slide.trigger("refresh"), o.afterLoad(t);
              }),
              a.on("refresh.fb", function () {
                var n,
                  o,
                  s = t.$content,
                  r = i.css.width,
                  c = i.css.height;
                if (1 === e[0].isReady) {
                  try {
                    (n = e.contents()), (o = n.find("body"));
                  } catch (t) {}
                  o &&
                    o.length &&
                    o.children().length &&
                    (a.css("overflow", "visible"),
                    s.css({
                      width: "100%",
                      "max-width": "100%",
                      height: "9999px",
                    }),
                    void 0 === r &&
                      (r = Math.ceil(
                        Math.max(o[0].clientWidth, o.outerWidth(!0))
                      )),
                    s.css("width", r || "").css("max-width", ""),
                    void 0 === c &&
                      (c = Math.ceil(
                        Math.max(o[0].clientHeight, o.outerHeight(!0))
                      )),
                    s.css("height", c || ""),
                    a.css("overflow", "auto")),
                    s.removeClass("fancybox-is-hidden");
                }
              }))
            : o.afterLoad(t),
          e.attr("src", t.src),
          a.one("onReset", function () {
            try {
              n(this)
                .find("iframe")
                .hide()
                .unbind()
                .attr("src", "//about:blank");
            } catch (t) {}
            n(this).off("refresh.fb").empty(),
              (t.isLoaded = !1),
              (t.isRevealed = !1);
          });
      },
      setContent: function (t, e) {
        var o = this;
        o.isClosing ||
          (o.hideLoading(t),
          t.$content && n.fancybox.stop(t.$content),
          t.$slide.empty(),
          l(e) && e.parent().length
            ? ((e.hasClass("fancybox-content") ||
                e.parent().hasClass("fancybox-content")) &&
                e.parents(".fancybox-slide").trigger("onReset"),
              (t.$placeholder = n("<div>").hide().insertAfter(e)),
              e.css("display", "inline-block"))
            : t.hasError ||
              ("string" === n.type(e) &&
                (e = n("<div>").append(n.trim(e)).contents()),
              t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
          t.$slide.one("onReset", function () {
            n(this).find("video,audio").trigger("pause"),
              t.$placeholder &&
                (t.$placeholder
                  .after(e.removeClass("fancybox-content").hide())
                  .remove(),
                (t.$placeholder = null)),
              t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
              t.hasError ||
                (n(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1));
          }),
          n(e).appendTo(t.$slide),
          n(e).is("video,audio") &&
            (n(e).addClass("fancybox-video"),
            n(e).wrap("<div></div>"),
            (t.contentType = "video"),
            (t.opts.width = t.opts.width || n(e).attr("width")),
            (t.opts.height = t.opts.height || n(e).attr("height"))),
          (t.$content = t.$slide
            .children()
            .filter("div,form,main,video,audio,article,.fancybox-content")
            .first()),
          t.$content.siblings().hide(),
          t.$content.length ||
            (t.$content = t.$slide.wrapInner("<div></div>").children().first()),
          t.$content.addClass("fancybox-content"),
          t.$slide.addClass("fancybox-slide--" + t.contentType),
          o.afterLoad(t));
      },
      setError: function (t) {
        (t.hasError = !0),
          t.$slide
            .trigger("onReset")
            .removeClass("fancybox-slide--" + t.contentType)
            .addClass("fancybox-slide--error"),
          (t.contentType = "html"),
          this.setContent(t, this.translate(t, t.opts.errorTpl)),
          t.pos === this.currPos && (this.isAnimating = !1);
      },
      showLoading: function (t) {
        var e = this;
        (t = t || e.current) &&
          !t.$spinner &&
          (t.$spinner = n(e.translate(e, e.opts.spinnerTpl))
            .appendTo(t.$slide)
            .hide()
            .fadeIn("fast"));
      },
      hideLoading: function (t) {
        var e = this;
        (t = t || e.current) &&
          t.$spinner &&
          (t.$spinner.stop().remove(), delete t.$spinner);
      },
      afterLoad: function (t) {
        var e = this;
        e.isClosing ||
          ((t.isLoading = !1),
          (t.isLoaded = !0),
          e.trigger("afterLoad", t),
          e.hideLoading(t),
          !t.opts.smallBtn ||
            (t.$smallBtn && t.$smallBtn.length) ||
            (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(
              t.$content
            )),
          t.opts.protect &&
            t.$content &&
            !t.hasError &&
            (t.$content.on("contextmenu.fb", function (t) {
              return 2 == t.button && t.preventDefault(), !0;
            }),
            "image" === t.type &&
              n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
          e.adjustCaption(t),
          e.adjustLayout(t),
          t.pos === e.currPos && e.updateCursor(),
          e.revealContent(t));
      },
      adjustCaption: function (t) {
        var e,
          n = this,
          o = t || n.current,
          i = o.opts.caption,
          a = o.opts.preventCaptionOverlap,
          s = n.$refs.caption,
          r = !1;
        s.toggleClass("fancybox-caption--separate", a),
          a &&
            i &&
            i.length &&
            (o.pos !== n.currPos
              ? ((e = s.clone().appendTo(s.parent())),
                e.children().eq(0).empty().html(i),
                (r = e.outerHeight(!0)),
                e.empty().remove())
              : n.$caption && (r = n.$caption.outerHeight(!0)),
            o.$slide.css("padding-bottom", r || ""));
      },
      adjustLayout: function (t) {
        var e,
          n,
          o,
          i,
          a = this,
          s = t || a.current;
        s.isLoaded &&
          !0 !== s.opts.disableLayoutFix &&
          (s.$content.css("margin-bottom", ""),
          s.$content.outerHeight() > s.$slide.height() + 0.5 &&
            ((o = s.$slide[0].style["padding-bottom"]),
            (i = s.$slide.css("padding-bottom")),
            parseFloat(i) > 0 &&
              ((e = s.$slide[0].scrollHeight),
              s.$slide.css("padding-bottom", 0),
              Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i),
              s.$slide.css("padding-bottom", o))),
          s.$content.css("margin-bottom", n));
      },
      revealContent: function (t) {
        var e,
          o,
          i,
          a,
          s = this,
          r = t.$slide,
          c = !1,
          l = !1,
          d = s.isMoved(t),
          u = t.isRevealed;
        return (
          (t.isRevealed = !0),
          (e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"]),
          (i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"]),
          (i = parseInt(
            void 0 === t.forcedDuration ? i : t.forcedDuration,
            10
          )),
          (!d && t.pos === s.currPos && i) || (e = !1),
          "zoom" === e &&
            (t.pos === s.currPos &&
            i &&
            "image" === t.type &&
            !t.hasError &&
            (l = s.getThumbPos(t))
              ? (c = s.getFitPos(t))
              : (e = "fade")),
          "zoom" === e
            ? ((s.isAnimating = !0),
              (c.scaleX = c.width / l.width),
              (c.scaleY = c.height / l.height),
              (a = t.opts.zoomOpacity),
              "auto" == a &&
                (a = Math.abs(t.width / t.height - l.width / l.height) > 0.1),
              a && ((l.opacity = 0.1), (c.opacity = 1)),
              n.fancybox.setTranslate(
                t.$content.removeClass("fancybox-is-hidden"),
                l
              ),
              p(t.$content),
              void n.fancybox.animate(t.$content, c, i, function () {
                (s.isAnimating = !1), s.complete();
              }))
            : (s.updateSlide(t),
              e
                ? (n.fancybox.stop(r),
                  (o =
                    "fancybox-slide--" +
                    (t.pos >= s.prevPos ? "next" : "previous") +
                    " fancybox-animated fancybox-fx-" +
                    e),
                  r.addClass(o).removeClass("fancybox-slide--current"),
                  t.$content.removeClass("fancybox-is-hidden"),
                  p(r),
                  "image" !== t.type && t.$content.hide().show(0),
                  void n.fancybox.animate(
                    r,
                    "fancybox-slide--current",
                    i,
                    function () {
                      r.removeClass(o).css({
                        transform: "",
                        opacity: "",
                      }),
                        t.pos === s.currPos && s.complete();
                    },
                    !0
                  ))
                : (t.$content.removeClass("fancybox-is-hidden"),
                  u ||
                    !d ||
                    "image" !== t.type ||
                    t.hasError ||
                    t.$content.hide().fadeIn("fast"),
                  void (t.pos === s.currPos && s.complete())))
        );
      },
      getThumbPos: function (t) {
        var e,
          o,
          i,
          a,
          s,
          r = !1,
          c = t.$thumb;
        return (
          !(!c || !g(c[0])) &&
          ((e = n.fancybox.getTranslate(c)),
          (o = parseFloat(c.css("border-top-width") || 0)),
          (i = parseFloat(c.css("border-right-width") || 0)),
          (a = parseFloat(c.css("border-bottom-width") || 0)),
          (s = parseFloat(c.css("border-left-width") || 0)),
          (r = {
            top: e.top + o,
            left: e.left + s,
            width: e.width - i - s,
            height: e.height - o - a,
            scaleX: 1,
            scaleY: 1,
          }),
          e.width > 0 && e.height > 0 && r)
        );
      },
      complete: function () {
        var t,
          e = this,
          o = e.current,
          i = {};
        !e.isMoved() &&
          o.isLoaded &&
          (o.isComplete ||
            ((o.isComplete = !0),
            o.$slide.siblings().trigger("onReset"),
            e.preload("inline"),
            p(o.$slide),
            o.$slide.addClass("fancybox-slide--complete"),
            n.each(e.slides, function (t, o) {
              o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1
                ? (i[o.pos] = o)
                : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
            }),
            (e.slides = i)),
          (e.isAnimating = !1),
          e.updateCursor(),
          e.trigger("afterShow"),
          o.opts.video.autoStart &&
            o.$slide
              .find("video,audio")
              .filter(":visible:first")
              .trigger("play")
              .one("ended", function () {
                Document.exitFullscreen
                  ? Document.exitFullscreen()
                  : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                  e.next();
              }),
          o.opts.autoFocus &&
            "html" === o.contentType &&
            ((t = o.$content.find("input[autofocus]:enabled:visible:first")),
            t.length ? t.trigger("focus") : e.focus(null, !0)),
          o.$slide.scrollTop(0).scrollLeft(0));
      },
      preload: function (t) {
        var e,
          n,
          o = this;
        o.group.length < 2 ||
          ((n = o.slides[o.currPos + 1]),
          (e = o.slides[o.currPos - 1]),
          e && e.type === t && o.loadSlide(e),
          n && n.type === t && o.loadSlide(n));
      },
      focus: function (t, o) {
        var i,
          a,
          s = this,
          r = [
            "a[href]",
            "area[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "button:not([disabled]):not([aria-hidden])",
            "iframe",
            "object",
            "embed",
            "video",
            "audio",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ].join(",");
        s.isClosing ||
          ((i =
            !t && s.current && s.current.isComplete
              ? s.current.$slide.find(
                  "*:visible" + (o ? ":not(.fancybox-close-small)" : "")
                )
              : s.$refs.container.find("*:visible")),
          (i = i.filter(r).filter(function () {
            return (
              "hidden" !== n(this).css("visibility") &&
              !n(this).hasClass("disabled")
            );
          })),
          i.length
            ? ((a = i.index(e.activeElement)),
              t && t.shiftKey
                ? (a < 0 || 0 == a) &&
                  (t.preventDefault(), i.eq(i.length - 1).trigger("focus"))
                : (a < 0 || a == i.length - 1) &&
                  (t && t.preventDefault(), i.eq(0).trigger("focus")))
            : s.$refs.container.trigger("focus"));
      },
      activate: function () {
        var t = this;
        n(".fancybox-container").each(function () {
          var e = n(this).data("FancyBox");
          e &&
            e.id !== t.id &&
            !e.isClosing &&
            (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
        }),
          (t.isVisible = !0),
          (t.current || t.isIdle) && (t.update(), t.updateControls()),
          t.trigger("onActivate"),
          t.addEvents();
      },
      close: function (t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l,
          u = this,
          f = u.current,
          h = function () {
            u.cleanUp(t);
          };
        return (
          !u.isClosing &&
          ((u.isClosing = !0),
          !1 === u.trigger("beforeClose", t)
            ? ((u.isClosing = !1),
              d(function () {
                u.update();
              }),
              !1)
            : (u.removeEvents(),
              (a = f.$content),
              (o = f.opts.animationEffect),
              (i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0),
              f.$slide.removeClass(
                "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
              ),
              !0 !== t ? n.fancybox.stop(f.$slide) : (o = !1),
              f.$slide.siblings().trigger("onReset").remove(),
              i &&
                u.$refs.container
                  .removeClass("fancybox-is-open")
                  .addClass("fancybox-is-closing")
                  .css("transition-duration", i + "ms"),
              u.hideLoading(f),
              u.hideControls(!0),
              u.updateCursor(),
              "zoom" !== o ||
                (a &&
                  i &&
                  "image" === f.type &&
                  !u.isMoved() &&
                  !f.hasError &&
                  (l = u.getThumbPos(f))) ||
                (o = "fade"),
              "zoom" === o
                ? (n.fancybox.stop(a),
                  (s = n.fancybox.getTranslate(a)),
                  (c = {
                    top: s.top,
                    left: s.left,
                    scaleX: s.width / l.width,
                    scaleY: s.height / l.height,
                    width: l.width,
                    height: l.height,
                  }),
                  (r = f.opts.zoomOpacity),
                  "auto" == r &&
                    (r =
                      Math.abs(f.width / f.height - l.width / l.height) > 0.1),
                  r && (l.opacity = 0),
                  n.fancybox.setTranslate(a, c),
                  p(a),
                  n.fancybox.animate(a, l, i, h),
                  !0)
                : (o && i
                    ? n.fancybox.animate(
                        f.$slide
                          .addClass("fancybox-slide--previous")
                          .removeClass("fancybox-slide--current"),
                        "fancybox-animated fancybox-fx-" + o,
                        i,
                        h
                      )
                    : !0 === t
                    ? setTimeout(h, i)
                    : h(),
                  !0)))
        );
      },
      cleanUp: function (e) {
        var o,
          i,
          a,
          s = this,
          r = s.current.opts.$orig;
        s.current.$slide.trigger("onReset"),
          s.$refs.container.empty().remove(),
          s.trigger("afterClose", e),
          s.current.opts.backFocus &&
            ((r && r.length && r.is(":visible")) || (r = s.$trigger),
            r &&
              r.length &&
              ((i = t.scrollX),
              (a = t.scrollY),
              r.trigger("focus"),
              n("html, body").scrollTop(a).scrollLeft(i))),
          (s.current = null),
          (o = n.fancybox.getInstance()),
          o
            ? o.activate()
            : (n("body").removeClass(
                "fancybox-active compensate-for-scrollbar"
              ),
              n("#fancybox-style-noscroll").remove());
      },
      trigger: function (t, e) {
        var o,
          i = Array.prototype.slice.call(arguments, 1),
          a = this,
          s = e && e.opts ? e : a.current;
        if (
          (s ? i.unshift(s) : (s = a),
          i.unshift(a),
          n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
          !1 === o)
        )
          return o;
        "afterClose" !== t && a.$refs
          ? a.$refs.container.trigger(t + ".fb", i)
          : r.trigger(t + ".fb", i);
      },
      updateControls: function () {
        var t = this,
          o = t.current,
          i = o.index,
          a = t.$refs.container,
          s = t.$refs.caption,
          r = o.opts.caption;
        o.$slide.trigger("refresh"),
          r && r.length
            ? ((t.$caption = s), s.children().eq(0).html(r))
            : (t.$caption = null),
          t.hasHiddenControls || t.isIdle || t.showControls(),
          a.find("[data-fancybox-count]").html(t.group.length),
          a.find("[data-fancybox-index]").html(i + 1),
          a
            .find("[data-fancybox-prev]")
            .prop("disabled", !o.opts.loop && i <= 0),
          a
            .find("[data-fancybox-next]")
            .prop("disabled", !o.opts.loop && i >= t.group.length - 1),
          "image" === o.type
            ? a
                .find("[data-fancybox-zoom]")
                .show()
                .end()
                .find("[data-fancybox-download]")
                .attr("href", o.opts.image.src || o.src)
                .show()
            : o.opts.toolbar &&
              a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
          n(e.activeElement).is(":hidden,[disabled]") &&
            t.$refs.container.trigger("focus");
      },
      hideControls: function (t) {
        var e = this,
          n = ["infobar", "toolbar", "nav"];
        (!t && e.current.opts.preventCaptionOverlap) || n.push("caption"),
          this.$refs.container.removeClass(
            n
              .map(function (t) {
                return "fancybox-show-" + t;
              })
              .join(" ")
          ),
          (this.hasHiddenControls = !0);
      },
      showControls: function () {
        var t = this,
          e = t.current ? t.current.opts : t.opts,
          n = t.$refs.container;
        (t.hasHiddenControls = !1),
          (t.idleSecondsCounter = 0),
          n
            .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
            .toggleClass(
              "fancybox-show-infobar",
              !!(e.infobar && t.group.length > 1)
            )
            .toggleClass("fancybox-show-caption", !!t.$caption)
            .toggleClass(
              "fancybox-show-nav",
              !!(e.arrows && t.group.length > 1)
            )
            .toggleClass("fancybox-is-modal", !!e.modal);
      },
      toggleControls: function () {
        this.hasHiddenControls ? this.showControls() : this.hideControls();
      },
    }),
      (n.fancybox = {
        version: "3.5.7",
        defaults: a,
        getInstance: function (t) {
          var e = n(
              '.fancybox-container:not(".fancybox-is-closing"):last'
            ).data("FancyBox"),
            o = Array.prototype.slice.call(arguments, 1);
          return (
            e instanceof b &&
            ("string" === n.type(t)
              ? e[t].apply(e, o)
              : "function" === n.type(t) && t.apply(e, o),
            e)
          );
        },
        open: function (t, e, n) {
          return new b(t, e, n);
        },
        close: function (t) {
          var e = this.getInstance();
          e && (e.close(), !0 === t && this.close(t));
        },
        destroy: function () {
          this.close(!0), r.add("body").off("click.fb-start", "**");
        },
        isMobile:
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ),
        use3d: (function () {
          var n = e.createElement("div");
          return (
            t.getComputedStyle &&
            t.getComputedStyle(n) &&
            t.getComputedStyle(n).getPropertyValue("transform") &&
            !(e.documentMode && e.documentMode < 11)
          );
        })(),
        getTranslate: function (t) {
          var e;
          return (
            !(!t || !t.length) &&
            ((e = t[0].getBoundingClientRect()),
            {
              top: e.top || 0,
              left: e.left || 0,
              width: e.width,
              height: e.height,
              opacity: parseFloat(t.css("opacity")),
            })
          );
        },
        setTranslate: function (t, e) {
          var n = "",
            o = {};
          if (t && e)
            return (
              (void 0 === e.left && void 0 === e.top) ||
                ((n =
                  (void 0 === e.left ? t.position().left : e.left) +
                  "px, " +
                  (void 0 === e.top ? t.position().top : e.top) +
                  "px"),
                (n = this.use3d
                  ? "translate3d(" + n + ", 0px)"
                  : "translate(" + n + ")")),
              void 0 !== e.scaleX && void 0 !== e.scaleY
                ? (n += " scale(" + e.scaleX + ", " + e.scaleY + ")")
                : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"),
              n.length && (o.transform = n),
              void 0 !== e.opacity && (o.opacity = e.opacity),
              void 0 !== e.width && (o.width = e.width),
              void 0 !== e.height && (o.height = e.height),
              t.css(o)
            );
        },
        animate: function (t, e, o, i, a) {
          var s,
            r = this;
          n.isFunction(o) && ((i = o), (o = null)),
            r.stop(t),
            (s = r.getTranslate(t)),
            t.on(f, function (c) {
              (!c ||
                !c.originalEvent ||
                (t.is(c.originalEvent.target) &&
                  "z-index" != c.originalEvent.propertyName)) &&
                (r.stop(t),
                n.isNumeric(o) && t.css("transition-duration", ""),
                n.isPlainObject(e)
                  ? void 0 !== e.scaleX &&
                    void 0 !== e.scaleY &&
                    r.setTranslate(t, {
                      top: e.top,
                      left: e.left,
                      width: s.width * e.scaleX,
                      height: s.height * e.scaleY,
                      scaleX: 1,
                      scaleY: 1,
                    })
                  : !0 !== a && t.removeClass(e),
                n.isFunction(i) && i(c));
            }),
            n.isNumeric(o) && t.css("transition-duration", o + "ms"),
            n.isPlainObject(e)
              ? (void 0 !== e.scaleX &&
                  void 0 !== e.scaleY &&
                  (delete e.width,
                  delete e.height,
                  t.parent().hasClass("fancybox-slide--image") &&
                    t.parent().addClass("fancybox-is-scaling")),
                n.fancybox.setTranslate(t, e))
              : t.addClass(e),
            t.data(
              "timer",
              setTimeout(function () {
                t.trigger(f);
              }, o + 33)
            );
        },
        stop: function (t, e) {
          t &&
            t.length &&
            (clearTimeout(t.data("timer")),
            e && t.trigger(f),
            t.off(f).css("transition-duration", ""),
            t.parent().removeClass("fancybox-is-scaling"));
        },
      }),
      (n.fn.fancybox = function (t) {
        var e;
        return (
          (t = t || {}),
          (e = t.selector || !1),
          e
            ? n("body").off("click.fb-start", e).on(
                "click.fb-start",
                e,
                {
                  options: t,
                },
                i
              )
            : this.off("click.fb-start").on(
                "click.fb-start",
                {
                  items: this,
                  options: t,
                },
                i
              ),
          this
        );
      }),
      r.on("click.fb-start", "[data-fancybox]", i),
      r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
        n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]')
          .eq(n(this).attr("data-fancybox-index") || 0)
          .trigger("click.fb-start", {
            $trigger: n(this),
          });
      }),
      (function () {
        var t = null;
        r.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
          switch (e.type) {
            case "mousedown":
              t = n(this);
              break;
            case "mouseup":
              t = null;
              break;
            case "focusin":
              n(".fancybox-button").removeClass("fancybox-focus"),
                n(this).is(t) ||
                  n(this).is("[disabled]") ||
                  n(this).addClass("fancybox-focus");
              break;
            case "focusout":
              n(".fancybox-button").removeClass("fancybox-focus");
          }
        });
      })();
  }
})(window, document, jQuery),
  (function (t) {
    "use strict";
    var e = {
        youtube: {
          matcher:
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: "iframe",
          url: "https://www.youtube-nocookie.com/embed/$4",
          thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2",
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l",
        },
        gmap_place: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/?ll=" +
              (t[9]
                ? t[9] +
                  "&z=" +
                  Math.floor(t[10]) +
                  (t[12] ? t[12].replace(/^\//, "&") : "")
                : t[12] + ""
              ).replace(/\?/, "&") +
              "&output=" +
              (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            );
          },
        },
        gmap_search: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/maps?q=" +
              t[5].replace("query=", "q=").replace("api=1", "") +
              "&output=embed"
            );
          },
        },
      },
      n = function (e, n, o) {
        if (e)
          return (
            (o = o || ""),
            "object" === t.type(o) && (o = t.param(o, !0)),
            t.each(n, function (t, n) {
              e = e.replace("$" + t, n || "");
            }),
            o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
            e
          );
      };
    t(document).on("objectNeedsType.fb", function (o, i, a) {
      var s,
        r,
        c,
        l,
        d,
        u,
        f,
        p = a.src || "",
        h = !1;
      (s = t.extend(!0, {}, e, a.opts.media)),
        t.each(s, function (e, o) {
          if ((c = p.match(o.matcher))) {
            if (
              ((h = o.type), (f = e), (u = {}), o.paramPlace && c[o.paramPlace])
            ) {
              (d = c[o.paramPlace]),
                "?" == d[0] && (d = d.substring(1)),
                (d = d.split("&"));
              for (var i = 0; i < d.length; ++i) {
                var s = d[i].split("=", 2);
                2 == s.length &&
                  (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
              }
            }
            return (
              (l = t.extend(!0, {}, o.params, a.opts[e], u)),
              (p =
                "function" === t.type(o.url)
                  ? o.url.call(this, c, l, a)
                  : n(o.url, c, l)),
              (r =
                "function" === t.type(o.thumb)
                  ? o.thumb.call(this, c, l, a)
                  : n(o.thumb, c)),
              "youtube" === e
                ? (p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
                    return (
                      "&start=" +
                      ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                    );
                  }))
                : "vimeo" === e && (p = p.replace("&%23", "#")),
              !1
            );
          }
        }),
        h
          ? (a.opts.thumb ||
              (a.opts.$thumb && a.opts.$thumb.length) ||
              (a.opts.thumb = r),
            "iframe" === h &&
              (a.opts = t.extend(!0, a.opts, {
                iframe: {
                  preload: !1,
                  attr: {
                    scrolling: "no",
                  },
                },
              })),
            t.extend(a, {
              type: h,
              src: p,
              origSrc: a.src,
              contentSource: f,
              contentType:
                "image" === h
                  ? "image"
                  : "gmap_place" == f || "gmap_search" == f
                  ? "map"
                  : "video",
            }))
          : p && (a.type = a.opts.defaultType);
    });
    var o = {
      youtube: {
        src: "https://www.youtube.com/iframe_api",
        class: "YT",
        loading: !1,
        loaded: !1,
      },
      vimeo: {
        src: "https://player.vimeo.com/api/player.js",
        class: "Vimeo",
        loading: !1,
        loaded: !1,
      },
      load: function (t) {
        var e,
          n = this;
        if (this[t].loaded)
          return void setTimeout(function () {
            n.done(t);
          });
        this[t].loading ||
          ((this[t].loading = !0),
          (e = document.createElement("script")),
          (e.type = "text/javascript"),
          (e.src = this[t].src),
          "youtube" === t
            ? (window.onYouTubeIframeAPIReady = function () {
                (n[t].loaded = !0), n.done(t);
              })
            : (e.onload = function () {
                (n[t].loaded = !0), n.done(t);
              }),
          document.body.appendChild(e));
      },
      done: function (e) {
        var n, o, i;
        "youtube" === e && delete window.onYouTubeIframeAPIReady,
          (n = t.fancybox.getInstance()) &&
            ((o = n.current.$content.find("iframe")),
            "youtube" === e && void 0 !== YT && YT
              ? (i = new YT.Player(o.attr("id"), {
                  events: {
                    onStateChange: function (t) {
                      0 == t.data && n.next();
                    },
                  },
                }))
              : "vimeo" === e &&
                void 0 !== Vimeo &&
                Vimeo &&
                ((i = new Vimeo.Player(o)),
                i.on("ended", function () {
                  n.next();
                })));
      },
    };
    t(document).on({
      "afterShow.fb": function (t, e, n) {
        e.group.length > 1 &&
          ("youtube" === n.contentSource || "vimeo" === n.contentSource) &&
          o.load(n.contentSource);
      },
    });
  })(jQuery),
  (function (t, e, n) {
    "use strict";
    var o = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      i = (function () {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function (e) {
            t.clearTimeout(e);
          }
        );
      })(),
      a = function (e) {
        var n = [];
        (e = e.originalEvent || e || t.e),
          (e =
            e.touches && e.touches.length
              ? e.touches
              : e.changedTouches && e.changedTouches.length
              ? e.changedTouches
              : [e]);
        for (var o in e)
          e[o].pageX
            ? n.push({
                x: e[o].pageX,
                y: e[o].pageY,
              })
            : e[o].clientX &&
              n.push({
                x: e[o].clientX,
                y: e[o].clientY,
              });
        return n;
      },
      s = function (t, e, n) {
        return e && t
          ? "x" === n
            ? t.x - e.x
            : "y" === n
            ? t.y - e.y
            : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0;
      },
      r = function (t) {
        if (
          t.is(
            'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
          ) ||
          n.isFunction(t.get(0).onclick) ||
          t.data("selectable")
        )
          return !0;
        for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
          if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      c = function (e) {
        var n = t.getComputedStyle(e)["overflow-y"],
          o = t.getComputedStyle(e)["overflow-x"],
          i =
            ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
          a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
        return i || a;
      },
      l = function (t) {
        for (var e = !1; ; ) {
          if ((e = c(t.get(0)))) break;
          if (
            ((t = t.parent()),
            !t.length || t.hasClass("fancybox-stage") || t.is("body"))
          )
            break;
        }
        return e;
      },
      d = function (t) {
        var e = this;
        (e.instance = t),
          (e.$bg = t.$refs.bg),
          (e.$stage = t.$refs.stage),
          (e.$container = t.$refs.container),
          e.destroy(),
          e.$container.on(
            "touchstart.fb.touch mousedown.fb.touch",
            n.proxy(e, "ontouchstart")
          );
      };
    (d.prototype.destroy = function () {
      var t = this;
      t.$container.off(".fb.touch"),
        n(e).off(".fb.touch"),
        t.requestId && (i(t.requestId), (t.requestId = null)),
        t.tapped && (clearTimeout(t.tapped), (t.tapped = null));
    }),
      (d.prototype.ontouchstart = function (o) {
        var i = this,
          c = n(o.target),
          d = i.instance,
          u = d.current,
          f = u.$slide,
          p = u.$content,
          h = "touchstart" == o.type;
        if (
          (h && i.$container.off("mousedown.fb.touch"),
          (!o.originalEvent || 2 != o.originalEvent.button) &&
            f.length &&
            c.length &&
            !r(c) &&
            !r(c.parent()) &&
            (c.is("img") ||
              !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left)))
        ) {
          if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated"))
            return o.stopPropagation(), void o.preventDefault();
          (i.realPoints = i.startPoints = a(o)),
            i.startPoints.length &&
              (u.touch && o.stopPropagation(),
              (i.startEvent = o),
              (i.canTap = !0),
              (i.$target = c),
              (i.$content = p),
              (i.opts = u.opts.touch),
              (i.isPanning = !1),
              (i.isSwiping = !1),
              (i.isZooming = !1),
              (i.isScrolling = !1),
              (i.canPan = d.canPan()),
              (i.startTime = new Date().getTime()),
              (i.distanceX = i.distanceY = i.distance = 0),
              (i.canvasWidth = Math.round(f[0].clientWidth)),
              (i.canvasHeight = Math.round(f[0].clientHeight)),
              (i.contentLastPos = null),
              (i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                top: 0,
                left: 0,
              }),
              (i.sliderStartPos = n.fancybox.getTranslate(f)),
              (i.stagePos = n.fancybox.getTranslate(d.$refs.stage)),
              (i.sliderStartPos.top -= i.stagePos.top),
              (i.sliderStartPos.left -= i.stagePos.left),
              (i.contentStartPos.top -= i.stagePos.top),
              (i.contentStartPos.left -= i.stagePos.left),
              n(e)
                .off(".fb.touch")
                .on(
                  h
                    ? "touchend.fb.touch touchcancel.fb.touch"
                    : "mouseup.fb.touch mouseleave.fb.touch",
                  n.proxy(i, "ontouchend")
                )
                .on(
                  h ? "touchmove.fb.touch" : "mousemove.fb.touch",
                  n.proxy(i, "ontouchmove")
                ),
              n.fancybox.isMobile &&
                e.addEventListener("scroll", i.onscroll, !0),
              (((i.opts || i.canPan) &&
                (c.is(i.$stage) || i.$stage.find(c).length)) ||
                (c.is(".fancybox-image") && o.preventDefault(),
                n.fancybox.isMobile &&
                  c.parents(".fancybox-caption").length)) &&
                ((i.isScrollable = l(c) || l(c.parent())),
                (n.fancybox.isMobile && i.isScrollable) || o.preventDefault(),
                (1 === i.startPoints.length || u.hasError) &&
                  (i.canPan
                    ? (n.fancybox.stop(i.$content), (i.isPanning = !0))
                    : (i.isSwiping = !0),
                  i.$container.addClass("fancybox-is-grabbing")),
                2 === i.startPoints.length &&
                  "image" === u.type &&
                  (u.isLoaded || u.$ghost) &&
                  ((i.canTap = !1),
                  (i.isSwiping = !1),
                  (i.isPanning = !1),
                  (i.isZooming = !0),
                  n.fancybox.stop(i.$content),
                  (i.centerPointStartX =
                    0.5 * (i.startPoints[0].x + i.startPoints[1].x) -
                    n(t).scrollLeft()),
                  (i.centerPointStartY =
                    0.5 * (i.startPoints[0].y + i.startPoints[1].y) -
                    n(t).scrollTop()),
                  (i.percentageOfImageAtPinchPointX =
                    (i.centerPointStartX - i.contentStartPos.left) /
                    i.contentStartPos.width),
                  (i.percentageOfImageAtPinchPointY =
                    (i.centerPointStartY - i.contentStartPos.top) /
                    i.contentStartPos.height),
                  (i.startDistanceBetweenFingers = s(
                    i.startPoints[0],
                    i.startPoints[1]
                  )))));
        }
      }),
      (d.prototype.onscroll = function (t) {
        var n = this;
        (n.isScrolling = !0), e.removeEventListener("scroll", n.onscroll, !0);
      }),
      (d.prototype.ontouchmove = function (t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons &&
          0 === t.originalEvent.buttons
          ? void e.ontouchend(t)
          : e.isScrolling
          ? void (e.canTap = !1)
          : ((e.newPoints = a(t)),
            void (
              (e.opts || e.canPan) &&
              e.newPoints.length &&
              e.newPoints.length &&
              ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
              (e.distanceX = s(e.newPoints[0], e.startPoints[0], "x")),
              (e.distanceY = s(e.newPoints[0], e.startPoints[0], "y")),
              (e.distance = s(e.newPoints[0], e.startPoints[0])),
              e.distance > 0 &&
                (e.isSwiping
                  ? e.onSwipe(t)
                  : e.isPanning
                  ? e.onPan()
                  : e.isZooming && e.onZoom()))
            ));
      }),
      (d.prototype.onSwipe = function (e) {
        var a,
          s = this,
          r = s.instance,
          c = s.isSwiping,
          l = s.sliderStartPos.left || 0;
        if (!0 !== c)
          "x" == c &&
            (s.distanceX > 0 &&
            (s.instance.group.length < 2 ||
              (0 === s.instance.current.index && !s.instance.current.opts.loop))
              ? (l += Math.pow(s.distanceX, 0.8))
              : s.distanceX < 0 &&
                (s.instance.group.length < 2 ||
                  (s.instance.current.index === s.instance.group.length - 1 &&
                    !s.instance.current.opts.loop))
              ? (l -= Math.pow(-s.distanceX, 0.8))
              : (l += s.distanceX)),
            (s.sliderLastPos = {
              top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
              left: l,
            }),
            s.requestId && (i(s.requestId), (s.requestId = null)),
            (s.requestId = o(function () {
              s.sliderLastPos &&
                (n.each(s.instance.slides, function (t, e) {
                  var o = e.pos - s.instance.currPos;
                  n.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left:
                      s.sliderLastPos.left +
                      o * s.canvasWidth +
                      o * e.opts.gutter,
                  });
                }),
                s.$container.addClass("fancybox-is-sliding"));
            }));
        else if (Math.abs(s.distance) > 10) {
          if (
            ((s.canTap = !1),
            r.group.length < 2 && s.opts.vertical
              ? (s.isSwiping = "y")
              : r.isDragging ||
                !1 === s.opts.vertical ||
                ("auto" === s.opts.vertical && n(t).width() > 800)
              ? (s.isSwiping = "x")
              : ((a = Math.abs(
                  (180 * Math.atan2(s.distanceY, s.distanceX)) / Math.PI
                )),
                (s.isSwiping = a > 45 && a < 135 ? "y" : "x")),
            "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable)
          )
            return void (s.isScrolling = !0);
          (r.isDragging = s.isSwiping),
            (s.startPoints = s.newPoints),
            n.each(r.slides, function (t, e) {
              var o, i;
              n.fancybox.stop(e.$slide),
                (o = n.fancybox.getTranslate(e.$slide)),
                (i = n.fancybox.getTranslate(r.$refs.stage)),
                e.$slide
                  .css({
                    transform: "",
                    opacity: "",
                    "transition-duration": "",
                  })
                  .removeClass("fancybox-animated")
                  .removeClass(function (t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                  }),
                e.pos === r.current.pos &&
                  ((s.sliderStartPos.top = o.top - i.top),
                  (s.sliderStartPos.left = o.left - i.left)),
                n.fancybox.setTranslate(e.$slide, {
                  top: o.top - i.top,
                  left: o.left - i.left,
                });
            }),
            r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
        }
      }),
      (d.prototype.onPan = function () {
        var t = this;
        if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5))
          return void (t.startPoints = t.newPoints);
        (t.canTap = !1),
          (t.contentLastPos = t.limitMovement()),
          t.requestId && i(t.requestId),
          (t.requestId = o(function () {
            n.fancybox.setTranslate(t.$content, t.contentLastPos);
          }));
      }),
      (d.prototype.limitMovement = function () {
        var t,
          e,
          n,
          o,
          i,
          a,
          s = this,
          r = s.canvasWidth,
          c = s.canvasHeight,
          l = s.distanceX,
          d = s.distanceY,
          u = s.contentStartPos,
          f = u.left,
          p = u.top,
          h = u.width,
          g = u.height;
        return (
          (i = h > r ? f + l : f),
          (a = p + d),
          (t = Math.max(0, 0.5 * r - 0.5 * h)),
          (e = Math.max(0, 0.5 * c - 0.5 * g)),
          (n = Math.min(r - h, 0.5 * r - 0.5 * h)),
          (o = Math.min(c - g, 0.5 * c - 0.5 * g)),
          l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, 0.8) || 0),
          l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, 0.8) || 0),
          d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, 0.8) || 0),
          d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, 0.8) || 0),
          {
            top: a,
            left: i,
          }
        );
      }),
      (d.prototype.limitPosition = function (t, e, n, o) {
        var i = this,
          a = i.canvasWidth,
          s = i.canvasHeight;
        return (
          n > a
            ? ((t = t > 0 ? 0 : t), (t = t < a - n ? a - n : t))
            : (t = Math.max(0, a / 2 - n / 2)),
          o > s
            ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e))
            : (e = Math.max(0, s / 2 - o / 2)),
          {
            top: e,
            left: t,
          }
        );
      }),
      (d.prototype.onZoom = function () {
        var e = this,
          a = e.contentStartPos,
          r = a.width,
          c = a.height,
          l = a.left,
          d = a.top,
          u = s(e.newPoints[0], e.newPoints[1]),
          f = u / e.startDistanceBetweenFingers,
          p = Math.floor(r * f),
          h = Math.floor(c * f),
          g = (r - p) * e.percentageOfImageAtPinchPointX,
          b = (c - h) * e.percentageOfImageAtPinchPointY,
          m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
          v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
          y = m - e.centerPointStartX,
          x = v - e.centerPointStartY,
          w = l + (g + y),
          $ = d + (b + x),
          S = {
            top: $,
            left: w,
            scaleX: f,
            scaleY: f,
          };
        (e.canTap = !1),
          (e.newWidth = p),
          (e.newHeight = h),
          (e.contentLastPos = S),
          e.requestId && i(e.requestId),
          (e.requestId = o(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos);
          }));
      }),
      (d.prototype.ontouchend = function (t) {
        var o = this,
          s = o.isSwiping,
          r = o.isPanning,
          c = o.isZooming,
          l = o.isScrolling;
        if (
          ((o.endPoints = a(t)),
          (o.dMs = Math.max(new Date().getTime() - o.startTime, 1)),
          o.$container.removeClass("fancybox-is-grabbing"),
          n(e).off(".fb.touch"),
          e.removeEventListener("scroll", o.onscroll, !0),
          o.requestId && (i(o.requestId), (o.requestId = null)),
          (o.isSwiping = !1),
          (o.isPanning = !1),
          (o.isZooming = !1),
          (o.isScrolling = !1),
          (o.instance.isDragging = !1),
          o.canTap)
        )
          return o.onTap(t);
        (o.speed = 100),
          (o.velocityX = (o.distanceX / o.dMs) * 0.5),
          (o.velocityY = (o.distanceY / o.dMs) * 0.5),
          r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l);
      }),
      (d.prototype.endSwiping = function (t, e) {
        var o = this,
          i = !1,
          a = o.instance.group.length,
          s = Math.abs(o.distanceX),
          r = "x" == t && a > 1 && ((o.dMs > 130 && s > 10) || s > 50);
        (o.sliderLastPos = null),
          "y" == t && !e && Math.abs(o.distanceY) > 50
            ? (n.fancybox.animate(
                o.instance.current.$slide,
                {
                  top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
                  opacity: 0,
                },
                200
              ),
              (i = o.instance.close(!0, 250)))
            : r && o.distanceX > 0
            ? (i = o.instance.previous(300))
            : r && o.distanceX < 0 && (i = o.instance.next(300)),
          !1 !== i || ("x" != t && "y" != t) || o.instance.centerSlide(200),
          o.$container.removeClass("fancybox-is-sliding");
      }),
      (d.prototype.endPanning = function () {
        var t,
          e,
          o,
          i = this;
        i.contentLastPos &&
          (!1 === i.opts.momentum || i.dMs > 350
            ? ((t = i.contentLastPos.left), (e = i.contentLastPos.top))
            : ((t = i.contentLastPos.left + 500 * i.velocityX),
              (e = i.contentLastPos.top + 500 * i.velocityY)),
          (o = i.limitPosition(
            t,
            e,
            i.contentStartPos.width,
            i.contentStartPos.height
          )),
          (o.width = i.contentStartPos.width),
          (o.height = i.contentStartPos.height),
          n.fancybox.animate(i.$content, o, 366));
      }),
      (d.prototype.endZooming = function () {
        var t,
          e,
          o,
          i,
          a = this,
          s = a.instance.current,
          r = a.newWidth,
          c = a.newHeight;
        a.contentLastPos &&
          ((t = a.contentLastPos.left),
          (e = a.contentLastPos.top),
          (i = {
            top: e,
            left: t,
            width: r,
            height: c,
            scaleX: 1,
            scaleY: 1,
          }),
          n.fancybox.setTranslate(a.$content, i),
          r < a.canvasWidth && c < a.canvasHeight
            ? a.instance.scaleToFit(150)
            : r > s.width || c > s.height
            ? a.instance.scaleToActual(
                a.centerPointStartX,
                a.centerPointStartY,
                150
              )
            : ((o = a.limitPosition(t, e, r, c)),
              n.fancybox.animate(a.$content, o, 150)));
      }),
      (d.prototype.onTap = function (e) {
        var o,
          i = this,
          s = n(e.target),
          r = i.instance,
          c = r.current,
          l = (e && a(e)) || i.startPoints,
          d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
          u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
          f = function (t) {
            var o = c.opts[t];
            if ((n.isFunction(o) && (o = o.apply(r, [c, e])), o))
              switch (o) {
                case "close":
                  r.close(i.startEvent);
                  break;
                case "toggleControls":
                  r.toggleControls();
                  break;
                case "next":
                  r.next();
                  break;
                case "nextOrClose":
                  r.group.length > 1 ? r.next() : r.close(i.startEvent);
                  break;
                case "zoom":
                  "image" == c.type &&
                    (c.isLoaded || c.$ghost) &&
                    (r.canPan()
                      ? r.scaleToFit()
                      : r.isScaledDown()
                      ? r.scaleToActual(d, u)
                      : r.group.length < 2 && r.close(i.startEvent));
              }
          };
        if (
          (!e.originalEvent || 2 != e.originalEvent.button) &&
          (s.is("img") || !(d > s[0].clientWidth + s.offset().left))
        ) {
          if (
            s.is(
              ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
            )
          )
            o = "Outside";
          else if (s.is(".fancybox-slide")) o = "Slide";
          else {
            if (
              !r.current.$content ||
              !r.current.$content.find(s).addBack().filter(s).length
            )
              return;
            o = "Content";
          }
          if (i.tapped) {
            if (
              (clearTimeout(i.tapped),
              (i.tapped = null),
              Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50)
            )
              return this;
            f("dblclick" + o);
          } else
            (i.tapX = d),
              (i.tapY = u),
              c.opts["dblclick" + o] &&
              c.opts["dblclick" + o] !== c.opts["click" + o]
                ? (i.tapped = setTimeout(function () {
                    (i.tapped = null), r.isAnimating || f("click" + o);
                  }, 500))
                : f("click" + o);
          return this;
        }
      }),
      n(e)
        .on("onActivate.fb", function (t, e) {
          e && !e.Guestures && (e.Guestures = new d(e));
        })
        .on("beforeClose.fb", function (t, e) {
          e && e.Guestures && e.Guestures.destroy();
        });
  })(window, document, jQuery),
  (function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
      },
      slideShow: {
        autoStart: !1,
        speed: 3e3,
        progress: !0,
      },
    });
    var n = function (t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function () {
        var t = this,
          n = t.instance,
          o = n.group[n.currIndex].opts.slideShow;
        (t.$button = n.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function () {
            t.toggle();
          })),
          n.group.length < 2 || !o
            ? t.$button.hide()
            : o.progress &&
              (t.$progress = e(
                '<div class="fancybox-progress"></div>'
              ).appendTo(n.$refs.inner));
      },
      set: function (t) {
        var n = this,
          o = n.instance,
          i = o.current;
        i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1)
          ? n.isActive &&
            "video" !== i.contentType &&
            (n.$progress &&
              e.fancybox.animate(
                n.$progress.show(),
                {
                  scaleX: 1,
                },
                i.opts.slideShow.speed
              ),
            (n.timer = setTimeout(function () {
              o.current.opts.loop || o.current.index != o.group.length - 1
                ? o.next()
                : o.jumpTo(0);
            }, i.opts.slideShow.speed)))
          : (n.stop(), (o.idleSecondsCounter = 0), o.showControls());
      },
      clear: function () {
        var t = this;
        clearTimeout(t.timer),
          (t.timer = null),
          t.$progress && t.$progress.removeAttr("style").hide();
      },
      start: function () {
        var t = this,
          e = t.instance.current;
        e &&
          (t.$button
            .attr(
              "title",
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP
            )
            .removeClass("fancybox-button--play")
            .addClass("fancybox-button--pause"),
          (t.isActive = !0),
          e.isComplete && t.set(!0),
          t.instance.trigger("onSlideShowChange", !0));
      },
      stop: function () {
        var t = this,
          e = t.instance.current;
        t.clear(),
          t.$button
            .attr(
              "title",
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START
            )
            .removeClass("fancybox-button--pause")
            .addClass("fancybox-button--play"),
          (t.isActive = !1),
          t.instance.trigger("onSlideShowChange", !1),
          t.$progress && t.$progress.removeAttr("style").hide();
      },
      toggle: function () {
        var t = this;
        t.isActive ? t.stop() : t.start();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        "beforeShow.fb": function (t, e, n, o) {
          var i = e && e.SlideShow;
          o
            ? i && n.opts.slideShow.autoStart && i.start()
            : i && i.isActive && i.clear();
        },
        "afterShow.fb": function (t, e, n) {
          var o = e && e.SlideShow;
          o && o.isActive && o.set();
        },
        "afterKeydown.fb": function (n, o, i, a, s) {
          var r = o && o.SlideShow;
          !r ||
            !i.opts.slideShow ||
            (80 !== s && 32 !== s) ||
            e(t.activeElement).is("button,a,input") ||
            (a.preventDefault(), r.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function (t, e) {
          var n = e && e.SlideShow;
          n && n.stop();
        },
      }),
      e(t).on("visibilitychange", function () {
        var n = e.fancybox.getInstance(),
          o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set());
      });
  })(document, jQuery),
  (function (t, e) {
    "use strict";
    var n = (function () {
      for (
        var e = [
            [
              "requestFullscreen",
              "exitFullscreen",
              "fullscreenElement",
              "fullscreenEnabled",
              "fullscreenchange",
              "fullscreenerror",
            ],
            [
              "webkitRequestFullscreen",
              "webkitExitFullscreen",
              "webkitFullscreenElement",
              "webkitFullscreenEnabled",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "webkitRequestFullScreen",
              "webkitCancelFullScreen",
              "webkitCurrentFullScreenElement",
              "webkitCancelFullScreen",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "mozRequestFullScreen",
              "mozCancelFullScreen",
              "mozFullScreenElement",
              "mozFullScreenEnabled",
              "mozfullscreenchange",
              "mozfullscreenerror",
            ],
            [
              "msRequestFullscreen",
              "msExitFullscreen",
              "msFullscreenElement",
              "msFullscreenEnabled",
              "MSFullscreenChange",
              "MSFullscreenError",
            ],
          ],
          n = {},
          o = 0;
        o < e.length;
        o++
      ) {
        var i = e[o];
        if (i && i[1] in t) {
          for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
          return n;
        }
      }
      return !1;
    })();
    if (n) {
      var o = {
        request: function (e) {
          (e = e || t.documentElement),
            e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
        },
        exit: function () {
          t[n.exitFullscreen]();
        },
        toggle: function (e) {
          (e = e || t.documentElement),
            this.isFullscreen() ? this.exit() : this.request(e);
        },
        isFullscreen: function () {
          return Boolean(t[n.fullscreenElement]);
        },
        enabled: function () {
          return Boolean(t[n.fullscreenEnabled]);
        },
      };
      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
        },
        fullScreen: {
          autoStart: !1,
        },
      }),
        e(t).on(n.fullscreenchange, function () {
          var t = o.isFullscreen(),
            n = e.fancybox.getInstance();
          n &&
            (n.current &&
              "image" === n.current.type &&
              n.isAnimating &&
              ((n.isAnimating = !1),
              n.update(!0, !0, 0),
              n.isComplete || n.complete()),
            n.trigger("onFullscreenChange", t),
            n.$refs.container.toggleClass("fancybox-is-fullscreen", t),
            n.$refs.toolbar
              .find("[data-fancybox-fullscreen]")
              .toggleClass("fancybox-button--fsenter", !t)
              .toggleClass("fancybox-button--fsexit", t));
        });
    }
    e(t).on({
      "onInit.fb": function (t, e) {
        var i;
        if (!n)
          return void e.$refs.toolbar
            .find("[data-fancybox-fullscreen]")
            .remove();
        e && e.group[e.currIndex].opts.fullScreen
          ? ((i = e.$refs.container),
            i.on(
              "click.fb-fullscreen",
              "[data-fancybox-fullscreen]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), o.toggle();
              }
            ),
            e.opts.fullScreen &&
              !0 === e.opts.fullScreen.autoStart &&
              o.request(),
            (e.FullScreen = o))
          : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
      },
      "afterKeydown.fb": function (t, e, n, o, i) {
        e &&
          e.FullScreen &&
          70 === i &&
          (o.preventDefault(), e.FullScreen.toggle());
      },
      "beforeClose.fb": function (t, e) {
        e &&
          e.FullScreen &&
          e.$refs.container.hasClass("fancybox-is-fullscreen") &&
          o.exit();
      },
    });
  })(document, jQuery),
  (function (t, e) {
    "use strict";
    var n = "fancybox-thumbs";
    e.fancybox.defaults = e.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
      },
      e.fancybox.defaults
    );
    var o = function (t) {
      this.init(t);
    };
    e.extend(o.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function (t) {
        var e = this,
          n = t.group,
          o = 0;
        (e.instance = t),
          (e.opts = n[t.currIndex].opts.thumbs),
          (t.Thumbs = e),
          (e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"));
        for (
          var i = 0, a = n.length;
          i < a && (n[i].thumb && o++, !(o > 1));
          i++
        );
        o > 1 && e.opts
          ? (e.$button.removeAttr("style").on("click", function () {
              e.toggle();
            }),
            (e.isActive = !0))
          : e.$button.hide();
      },
      create: function () {
        var t,
          o = this,
          i = o.instance,
          a = o.opts.parentEl,
          s = [];
        o.$grid ||
          ((o.$grid = e(
            '<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>'
          ).appendTo(i.$refs.container.find(a).addBack().filter(a))),
          o.$grid.on("click", "a", function () {
            i.jumpTo(e(this).attr("data-index"));
          })),
          o.$list ||
            (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)),
          e.each(i.group, function (e, n) {
            (t = n.thumb),
              t || "image" !== n.type || (t = n.src),
              s.push(
                '<a href="javascript:;" tabindex="0" data-index="' +
                  e +
                  '"' +
                  (t && t.length
                    ? ' style="background-image:url(' + t + ')"'
                    : 'class="fancybox-thumbs-missing"') +
                  "></a>"
              );
          }),
          (o.$list[0].innerHTML = s.join("")),
          "x" === o.opts.axis &&
            o.$list.width(
              parseInt(o.$grid.css("padding-right"), 10) +
                i.group.length * o.$list.children().eq(0).outerWidth(!0)
            );
      },
      focus: function (t) {
        var e,
          n,
          o = this,
          i = o.$list,
          a = o.$grid;
        o.instance.current &&
          ((e = i
            .children()
            .removeClass("fancybox-thumbs-active")
            .filter('[data-index="' + o.instance.current.index + '"]')
            .addClass("fancybox-thumbs-active")),
          (n = e.position()),
          "y" === o.opts.axis &&
          (n.top < 0 || n.top > i.height() - e.outerHeight())
            ? i.stop().animate(
                {
                  scrollTop: i.scrollTop() + n.top,
                },
                t
              )
            : "x" === o.opts.axis &&
              (n.left < a.scrollLeft() ||
                n.left > a.scrollLeft() + (a.width() - e.outerWidth())) &&
              i.parent().stop().animate(
                {
                  scrollLeft: n.left,
                },
                t
              ));
      },
      update: function () {
        var t = this;
        t.instance.$refs.container.toggleClass(
          "fancybox-show-thumbs",
          this.isVisible
        ),
          t.isVisible
            ? (t.$grid || t.create(),
              t.instance.trigger("onThumbsShow"),
              t.focus(0))
            : t.$grid && t.instance.trigger("onThumbsHide"),
          t.instance.update();
      },
      hide: function () {
        (this.isVisible = !1), this.update();
      },
      show: function () {
        (this.isVisible = !0), this.update();
      },
      toggle: function () {
        (this.isVisible = !this.isVisible), this.update();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          var n;
          e &&
            !e.Thumbs &&
            ((n = new o(e)), n.isActive && !0 === n.opts.autoStart && n.show());
        },
        "beforeShow.fb": function (t, e, n, o) {
          var i = e && e.Thumbs;
          i && i.isVisible && i.focus(o ? 0 : 250);
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
          var a = e && e.Thumbs;
          a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
        },
        "beforeClose.fb": function (t, e) {
          var n = e && e.Thumbs;
          n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
        },
      });
  })(document, jQuery),
  (function (t, e) {
    "use strict";

    function n(t) {
      var e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;",
      };
      return String(t).replace(/[&<>"'`=\/]/g, function (t) {
        return e[t];
      });
    }
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
      },
      share: {
        url: function (t, e) {
          return (
            (!t.currentHash &&
              "inline" !== e.type &&
              "html" !== e.type &&
              (e.origSrc || e.src)) ||
            window.location
          );
        },
        tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
      },
    }),
      e(t).on("click", "[data-fancybox-share]", function () {
        var t,
          o,
          i = e.fancybox.getInstance(),
          a = i.current || null;
        a &&
          ("function" === e.type(a.opts.share.url) &&
            (t = a.opts.share.url.apply(a, [i, a])),
          (o = a.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              "image" === a.type ? encodeURIComponent(a.src) : ""
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(t))
            .replace(/\{\{url_raw\}\}/g, n(t))
            .replace(
              /\{\{descr\}\}/g,
              i.$caption ? encodeURIComponent(i.$caption.text()) : ""
            )),
          e.fancybox.open({
            src: i.translate(i, o),
            type: "html",
            opts: {
              touch: !1,
              animationEffect: !1,
              afterLoad: function (t, e) {
                i.$refs.container.one("beforeClose.fb", function () {
                  t.close(null, 0);
                }),
                  e.$content.find(".fancybox-share__button").click(function () {
                    return (
                      window.open(this.href, "Share", "width=550, height=450"),
                      !1
                    );
                  });
              },
              mobile: {
                autoFocus: !1,
              },
            },
          }));
      });
  })(document, jQuery),
  (function (t, e, n) {
    "use strict";

    function o() {
      var e = t.location.hash.substr(1),
        n = e.split("-"),
        o =
          n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
            ? parseInt(n.pop(-1), 10) || 1
            : 1,
        i = n.join("-");
      return {
        hash: e,
        index: o < 1 ? 1 : o,
        gallery: i,
      };
    }

    function i(t) {
      "" !== t.gallery &&
        n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
          .eq(t.index - 1)
          .focus()
          .trigger("click.fb-start");
    }

    function a(t) {
      var e, n;
      return (
        !!t &&
        ((e = t.current ? t.current.opts : t.opts),
        "" !==
          (n =
            e.hash ||
            (e.$orig
              ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger")
              : "")) && n)
      );
    }
    n.escapeSelector ||
      (n.escapeSelector = function (t) {
        return (t + "").replace(
          /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          function (t, e) {
            return e
              ? "\0" === t
                ? "�"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          }
        );
      }),
      n(function () {
        !1 !== n.fancybox.defaults.hash &&
          (n(e).on({
            "onInit.fb": function (t, e) {
              var n, i;
              !1 !== e.group[e.currIndex].opts.hash &&
                ((n = o()),
                (i = a(e)) &&
                  n.gallery &&
                  i == n.gallery &&
                  (e.currIndex = n.index - 1));
            },
            "beforeShow.fb": function (n, o, i, s) {
              var r;
              i &&
                !1 !== i.opts.hash &&
                (r = a(o)) &&
                ((o.currentHash =
                  r + (o.group.length > 1 ? "-" + (i.index + 1) : "")),
                t.location.hash !== "#" + o.currentHash &&
                  (s && !o.origHash && (o.origHash = t.location.hash),
                  o.hashTimer && clearTimeout(o.hashTimer),
                  (o.hashTimer = setTimeout(function () {
                    "replaceState" in t.history
                      ? (t.history[s ? "pushState" : "replaceState"](
                          {},
                          e.title,
                          t.location.pathname +
                            t.location.search +
                            "#" +
                            o.currentHash
                        ),
                        s && (o.hasCreatedHistory = !0))
                      : (t.location.hash = o.currentHash),
                      (o.hashTimer = null);
                  }, 300))));
            },
            "beforeClose.fb": function (n, o, i) {
              i &&
                !1 !== i.opts.hash &&
                (clearTimeout(o.hashTimer),
                o.currentHash && o.hasCreatedHistory
                  ? t.history.back()
                  : o.currentHash &&
                    ("replaceState" in t.history
                      ? t.history.replaceState(
                          {},
                          e.title,
                          t.location.pathname +
                            t.location.search +
                            (o.origHash || "")
                        )
                      : (t.location.hash = o.origHash)),
                (o.currentHash = null));
            },
          }),
          n(t).on("hashchange.fb", function () {
            var t = o(),
              e = null;
            n.each(n(".fancybox-container").get().reverse(), function (t, o) {
              var i = n(o).data("FancyBox");
              if (i && i.currentHash) return (e = i), !1;
            }),
              e
                ? e.currentHash === t.gallery + "-" + t.index ||
                  (1 === t.index && e.currentHash == t.gallery) ||
                  ((e.currentHash = null), e.close())
                : "" !== t.gallery && i(t);
          }),
          setTimeout(function () {
            n.fancybox.getInstance() || i(o());
          }, 50));
      });
  })(window, document, jQuery),
  (function (t, e) {
    "use strict";
    var n = new Date().getTime();
    e(t).on({
      "onInit.fb": function (t, e, o) {
        e.$refs.stage.on(
          "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
          function (t) {
            var o = e.current,
              i = new Date().getTime();
            e.group.length < 2 ||
              !1 === o.opts.wheel ||
              ("auto" === o.opts.wheel && "image" !== o.type) ||
              (t.preventDefault(),
              t.stopPropagation(),
              o.$slide.hasClass("fancybox-animated") ||
                ((t = t.originalEvent || t),
                i - n < 250 ||
                  ((n = i),
                  e[
                    (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0
                      ? "next"
                      : "previous"
                  ]())));
          }
        );
      },
    });
  })(document, jQuery);

/*! jQuery UI - v1.12.1 - 2021-06-03
 * http://jqueryui.com
 * Includes: widget.js, position.js, keycode.js, unique-id.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["jquery"], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function ($) {
  $.ui = $.ui || {};

  var version = ($.ui.version = "1.12.1");

  /*!
   * jQuery UI Widget 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */

  //>>label: Widget
  //>>group: Core
  //>>description: Provides a factory for creating stateful widgets with a common API.
  //>>docs: http://api.jqueryui.com/jQuery.widget/
  //>>demos: http://jqueryui.com/widget/

  var widgetUuid = 0;
  var widgetSlice = Array.prototype.slice;

  $.cleanData = (function (orig) {
    return function (elems) {
      var events, elem, i;
      for (i = 0; (elem = elems[i]) != null; i++) {
        try {
          // Only trigger remove when necessary to save time
          events = $._data(elem, "events");
          if (events && events.remove) {
            $(elem).triggerHandler("remove");
          }

          // Http://bugs.jquery.com/ticket/8235
        } catch (e) {}
      }
      orig(elems);
    };
  })($.cleanData);

  $.widget = function (name, base, prototype) {
    var existingConstructor, constructor, basePrototype;

    // ProxiedPrototype allows the provided prototype to remain unmodified
    // so that it can be used as a mixin for multiple widgets (#8876)
    var proxiedPrototype = {};

    var namespace = name.split(".")[0];
    name = name.split(".")[1];
    var fullName = namespace + "-" + name;

    if (!prototype) {
      prototype = base;
      base = $.Widget;
    }

    if ($.isArray(prototype)) {
      prototype = $.extend.apply(null, [{}].concat(prototype));
    }

    // Create selector for plugin
    $.expr[":"][fullName.toLowerCase()] = function (elem) {
      return !!$.data(elem, fullName);
    };

    $[namespace] = $[namespace] || {};
    existingConstructor = $[namespace][name];
    constructor = $[namespace][name] = function (options, element) {
      // Allow instantiation without "new" keyword
      if (!this._createWidget) {
        return new constructor(options, element);
      }

      // Allow instantiation without initializing for simple inheritance
      // must use "new" keyword (the code above always passes args)
      if (arguments.length) {
        this._createWidget(options, element);
      }
    };

    // Extend with the existing constructor to carry over any static properties
    $.extend(constructor, existingConstructor, {
      version: prototype.version,

      // Copy the object used to create the prototype in case we need to
      // redefine the widget later
      _proto: $.extend({}, prototype),

      // Track widgets that inherit from this widget in case this widget is
      // redefined after a widget inherits from it
      _childConstructors: [],
    });

    basePrototype = new base();

    // We need to make the options hash a property directly on the new instance
    // otherwise we'll modify the options hash on the prototype that we're
    // inheriting from
    basePrototype.options = $.widget.extend({}, basePrototype.options);
    $.each(prototype, function (prop, value) {
      if (!$.isFunction(value)) {
        proxiedPrototype[prop] = value;
        return;
      }
      proxiedPrototype[prop] = (function () {
        function _super() {
          return base.prototype[prop].apply(this, arguments);
        }

        function _superApply(args) {
          return base.prototype[prop].apply(this, args);
        }

        return function () {
          var __super = this._super;
          var __superApply = this._superApply;
          var returnValue;

          this._super = _super;
          this._superApply = _superApply;

          returnValue = value.apply(this, arguments);

          this._super = __super;
          this._superApply = __superApply;

          return returnValue;
        };
      })();
    });
    constructor.prototype = $.widget.extend(
      basePrototype,
      {
        // TODO: remove support for widgetEventPrefix
        // always use the name + a colon as the prefix, e.g., draggable:start
        // don't prefix for widgets that aren't DOM-based
        widgetEventPrefix: existingConstructor
          ? basePrototype.widgetEventPrefix || name
          : name,
      },
      proxiedPrototype,
      {
        constructor: constructor,
        namespace: namespace,
        widgetName: name,
        widgetFullName: fullName,
      }
    );

    // If this widget is being redefined then we need to find all widgets that
    // are inheriting from it and redefine all of them so that they inherit from
    // the new version of this widget. We're essentially trying to replace one
    // level in the prototype chain.
    if (existingConstructor) {
      $.each(existingConstructor._childConstructors, function (i, child) {
        var childPrototype = child.prototype;

        // Redefine the child widget using the same prototype that was
        // originally used, but inherit from the new version of the base
        $.widget(
          childPrototype.namespace + "." + childPrototype.widgetName,
          constructor,
          child._proto
        );
      });

      // Remove the list of existing child constructors from the old constructor
      // so the old child constructors can be garbage collected
      delete existingConstructor._childConstructors;
    } else {
      base._childConstructors.push(constructor);
    }

    $.widget.bridge(name, constructor);

    return constructor;
  };

  $.widget.extend = function (target) {
    var input = widgetSlice.call(arguments, 1);
    var inputIndex = 0;
    var inputLength = input.length;
    var key;
    var value;

    for (; inputIndex < inputLength; inputIndex++) {
      for (key in input[inputIndex]) {
        value = input[inputIndex][key];
        if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
          // Clone objects
          if ($.isPlainObject(value)) {
            target[key] = $.isPlainObject(target[key])
              ? $.widget.extend({}, target[key], value) // Don't extend strings, arrays, etc. with objects
              : $.widget.extend({}, value);

            // Copy everything else by reference
          } else {
            target[key] = value;
          }
        }
      }
    }
    return target;
  };

  $.widget.bridge = function (name, object) {
    var fullName = object.prototype.widgetFullName || name;
    $.fn[name] = function (options) {
      var isMethodCall = typeof options === "string";
      var args = widgetSlice.call(arguments, 1);
      var returnValue = this;

      if (isMethodCall) {
        // If this is an empty collection, we need to have the instance method
        // return undefined instead of the jQuery instance
        if (!this.length && options === "instance") {
          returnValue = undefined;
        } else {
          this.each(function () {
            var methodValue;
            var instance = $.data(this, fullName);

            if (options === "instance") {
              returnValue = instance;
              return false;
            }

            if (!instance) {
              return $.error(
                "cannot call methods on " +
                  name +
                  " prior to initialization; " +
                  "attempted to call method '" +
                  options +
                  "'"
              );
            }

            if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
              return $.error(
                "no such method '" +
                  options +
                  "' for " +
                  name +
                  " widget instance"
              );
            }

            methodValue = instance[options].apply(instance, args);

            if (methodValue !== instance && methodValue !== undefined) {
              returnValue =
                methodValue && methodValue.jquery
                  ? returnValue.pushStack(methodValue.get())
                  : methodValue;
              return false;
            }
          });
        }
      } else {
        // Allow multiple hashes to be passed on init
        if (args.length) {
          options = $.widget.extend.apply(null, [options].concat(args));
        }

        this.each(function () {
          var instance = $.data(this, fullName);
          if (instance) {
            instance.option(options || {});
            if (instance._init) {
              instance._init();
            }
          } else {
            $.data(this, fullName, new object(options, this));
          }
        });
      }

      return returnValue;
    };
  };

  $.Widget = function (/* options, element */) {};
  $.Widget._childConstructors = [];

  $.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",

    options: {
      classes: {},
      disabled: false,

      // Callbacks
      create: null,
    },

    _createWidget: function (options, element) {
      element = $(element || this.defaultElement || this)[0];
      this.element = $(element);
      this.uuid = widgetUuid++;
      this.eventNamespace = "." + this.widgetName + this.uuid;

      this.bindings = $();
      this.hoverable = $();
      this.focusable = $();
      this.classesElementLookup = {};

      if (element !== this) {
        $.data(element, this.widgetFullName, this);
        this._on(true, this.element, {
          remove: function (event) {
            if (event.target === element) {
              this.destroy();
            }
          },
        });
        this.document = $(
          element.style // Element within the document
            ? element.ownerDocument // Element is window or document
            : element.document || element
        );
        this.window = $(
          this.document[0].defaultView || this.document[0].parentWindow
        );
      }

      this.options = $.widget.extend(
        {},
        this.options,
        this._getCreateOptions(),
        options
      );

      this._create();

      if (this.options.disabled) {
        this._setOptionDisabled(this.options.disabled);
      }

      this._trigger("create", null, this._getCreateEventData());
      this._init();
    },

    _getCreateOptions: function () {
      return {};
    },

    _getCreateEventData: $.noop,

    _create: $.noop,

    _init: $.noop,

    destroy: function () {
      var that = this;

      this._destroy();
      $.each(this.classesElementLookup, function (key, value) {
        that._removeClass(value, key);
      });

      // We can probably remove the unbind calls in 2.0
      // all event bindings should go through this._on()
      this.element.off(this.eventNamespace).removeData(this.widgetFullName);
      this.widget().off(this.eventNamespace).removeAttr("aria-disabled");

      // Clean up events and states
      this.bindings.off(this.eventNamespace);
    },

    _destroy: $.noop,

    widget: function () {
      return this.element;
    },

    option: function (key, value) {
      var options = key;
      var parts;
      var curOption;
      var i;

      if (arguments.length === 0) {
        // Don't return a reference to the internal hash
        return $.widget.extend({}, this.options);
      }

      if (typeof key === "string") {
        // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
        options = {};
        parts = key.split(".");
        key = parts.shift();
        if (parts.length) {
          curOption = options[key] = $.widget.extend({}, this.options[key]);
          for (i = 0; i < parts.length - 1; i++) {
            curOption[parts[i]] = curOption[parts[i]] || {};
            curOption = curOption[parts[i]];
          }
          key = parts.pop();
          if (arguments.length === 1) {
            return curOption[key] === undefined ? null : curOption[key];
          }
          curOption[key] = value;
        } else {
          if (arguments.length === 1) {
            return this.options[key] === undefined ? null : this.options[key];
          }
          options[key] = value;
        }
      }

      this._setOptions(options);

      return this;
    },

    _setOptions: function (options) {
      var key;

      for (key in options) {
        this._setOption(key, options[key]);
      }

      return this;
    },

    _setOption: function (key, value) {
      if (key === "classes") {
        this._setOptionClasses(value);
      }

      this.options[key] = value;

      if (key === "disabled") {
        this._setOptionDisabled(value);
      }

      return this;
    },

    _setOptionClasses: function (value) {
      var classKey, elements, currentElements;

      for (classKey in value) {
        currentElements = this.classesElementLookup[classKey];
        if (
          value[classKey] === this.options.classes[classKey] ||
          !currentElements ||
          !currentElements.length
        ) {
          continue;
        }

        // We are doing this to create a new jQuery object because the _removeClass() call
        // on the next line is going to destroy the reference to the current elements being
        // tracked. We need to save a copy of this collection so that we can add the new classes
        // below.
        elements = $(currentElements.get());
        this._removeClass(currentElements, classKey);

        // We don't use _addClass() here, because that uses this.options.classes
        // for generating the string of classes. We want to use the value passed in from
        // _setOption(), this is the new value of the classes option which was passed to
        // _setOption(). We pass this value directly to _classes().
        elements.addClass(
          this._classes({
            element: elements,
            keys: classKey,
            classes: value,
            add: true,
          })
        );
      }
    },

    _setOptionDisabled: function (value) {
      this._toggleClass(
        this.widget(),
        this.widgetFullName + "-disabled",
        null,
        !!value
      );

      // If the widget is becoming disabled, then nothing is interactive
      if (value) {
        this._removeClass(this.hoverable, null, "ui-state-hover");
        this._removeClass(this.focusable, null, "ui-state-focus");
      }
    },

    enable: function () {
      return this._setOptions({
        disabled: false,
      });
    },

    disable: function () {
      return this._setOptions({
        disabled: true,
      });
    },

    _classes: function (options) {
      var full = [];
      var that = this;

      options = $.extend(
        {
          element: this.element,
          classes: this.options.classes || {},
        },
        options
      );

      function processClassString(classes, checkOption) {
        var current, i;
        for (i = 0; i < classes.length; i++) {
          current = that.classesElementLookup[classes[i]] || $();
          if (options.add) {
            current = $($.unique(current.get().concat(options.element.get())));
          } else {
            current = $(current.not(options.element).get());
          }
          that.classesElementLookup[classes[i]] = current;
          full.push(classes[i]);
          if (checkOption && options.classes[classes[i]]) {
            full.push(options.classes[classes[i]]);
          }
        }
      }

      this._on(options.element, {
        remove: "_untrackClassesElement",
      });

      if (options.keys) {
        processClassString(options.keys.match(/\S+/g) || [], true);
      }
      if (options.extra) {
        processClassString(options.extra.match(/\S+/g) || []);
      }

      return full.join(" ");
    },

    _untrackClassesElement: function (event) {
      var that = this;
      $.each(that.classesElementLookup, function (key, value) {
        if ($.inArray(event.target, value) !== -1) {
          that.classesElementLookup[key] = $(value.not(event.target).get());
        }
      });
    },

    _removeClass: function (element, keys, extra) {
      return this._toggleClass(element, keys, extra, false);
    },

    _addClass: function (element, keys, extra) {
      return this._toggleClass(element, keys, extra, true);
    },

    _toggleClass: function (element, keys, extra, add) {
      add = typeof add === "boolean" ? add : extra;
      var shift = typeof element === "string" || element === null,
        options = {
          extra: shift ? keys : extra,
          keys: shift ? element : keys,
          element: shift ? this.element : element,
          add: add,
        };
      options.element.toggleClass(this._classes(options), add);
      return this;
    },

    _on: function (suppressDisabledCheck, element, handlers) {
      var delegateElement;
      var instance = this;

      // No suppressDisabledCheck flag, shuffle arguments
      if (typeof suppressDisabledCheck !== "boolean") {
        handlers = element;
        element = suppressDisabledCheck;
        suppressDisabledCheck = false;
      }

      // No element argument, shuffle and use this.element
      if (!handlers) {
        handlers = element;
        element = this.element;
        delegateElement = this.widget();
      } else {
        element = delegateElement = $(element);
        this.bindings = this.bindings.add(element);
      }

      $.each(handlers, function (event, handler) {
        function handlerProxy() {
          // Allow widgets to customize the disabled handling
          // - disabled as an array instead of boolean
          // - disabled class as method for disabling individual parts
          if (
            !suppressDisabledCheck &&
            (instance.options.disabled === true ||
              $(this).hasClass("ui-state-disabled"))
          ) {
            return;
          }
          return (
            typeof handler === "string" ? instance[handler] : handler
          ).apply(instance, arguments);
        }

        // Copy the guid so direct unbinding works
        if (typeof handler !== "string") {
          handlerProxy.guid = handler.guid =
            handler.guid || handlerProxy.guid || $.guid++;
        }

        var match = event.match(/^([\w:-]*)\s*(.*)$/);
        var eventName = match[1] + instance.eventNamespace;
        var selector = match[2];

        if (selector) {
          delegateElement.on(eventName, selector, handlerProxy);
        } else {
          element.on(eventName, handlerProxy);
        }
      });
    },

    _off: function (element, eventName) {
      eventName =
        (eventName || "").split(" ").join(this.eventNamespace + " ") +
        this.eventNamespace;
      element.off(eventName).off(eventName);

      // Clear the stack to avoid memory leaks (#10056)
      this.bindings = $(this.bindings.not(element).get());
      this.focusable = $(this.focusable.not(element).get());
      this.hoverable = $(this.hoverable.not(element).get());
    },

    _delay: function (handler, delay) {
      function handlerProxy() {
        return (
          typeof handler === "string" ? instance[handler] : handler
        ).apply(instance, arguments);
      }
      var instance = this;
      return setTimeout(handlerProxy, delay || 0);
    },

    _hoverable: function (element) {
      this.hoverable = this.hoverable.add(element);
      this._on(element, {
        mouseenter: function (event) {
          this._addClass($(event.currentTarget), null, "ui-state-hover");
        },
        mouseleave: function (event) {
          this._removeClass($(event.currentTarget), null, "ui-state-hover");
        },
      });
    },

    _focusable: function (element) {
      this.focusable = this.focusable.add(element);
      this._on(element, {
        focusin: function (event) {
          this._addClass($(event.currentTarget), null, "ui-state-focus");
        },
        focusout: function (event) {
          this._removeClass($(event.currentTarget), null, "ui-state-focus");
        },
      });
    },

    _trigger: function (type, event, data) {
      var prop, orig;
      var callback = this.options[type];

      data = data || {};
      event = $.Event(event);
      event.type = (
        type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type
      ).toLowerCase();

      // The original event may come from any element
      // so we need to reset the target on the new event
      event.target = this.element[0];

      // Copy original event properties over to the new event
      orig = event.originalEvent;
      if (orig) {
        for (prop in orig) {
          if (!(prop in event)) {
            event[prop] = orig[prop];
          }
        }
      }

      this.element.trigger(event, data);
      return !(
        ($.isFunction(callback) &&
          callback.apply(this.element[0], [event].concat(data)) === false) ||
        event.isDefaultPrevented()
      );
    },
  };

  $.each(
    {
      show: "fadeIn",
      hide: "fadeOut",
    },
    function (method, defaultEffect) {
      $.Widget.prototype["_" + method] = function (element, options, callback) {
        if (typeof options === "string") {
          options = {
            effect: options,
          };
        }

        var hasOptions;
        var effectName = !options
          ? method
          : options === true || typeof options === "number"
          ? defaultEffect
          : options.effect || defaultEffect;

        options = options || {};
        if (typeof options === "number") {
          options = {
            duration: options,
          };
        }

        hasOptions = !$.isEmptyObject(options);
        options.complete = callback;

        if (options.delay) {
          element.delay(options.delay);
        }

        if (hasOptions && $.effects && $.effects.effect[effectName]) {
          element[method](options);
        } else if (effectName !== method && element[effectName]) {
          element[effectName](options.duration, options.easing, callback);
        } else {
          element.queue(function (next) {
            $(this)[method]();
            if (callback) {
              callback.call(element[0]);
            }
            next();
          });
        }
      };
    }
  );

  var widget = $.widget;

  /*!
   * jQuery UI Position 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/position/
   */

  //>>label: Position
  //>>group: Core
  //>>description: Positions elements relative to other elements.
  //>>docs: http://api.jqueryui.com/position/
  //>>demos: http://jqueryui.com/position/

  (function () {
    var cachedScrollbarWidth,
      max = Math.max,
      abs = Math.abs,
      rhorizontal = /left|center|right/,
      rvertical = /top|center|bottom/,
      roffset = /[\+\-]\d+(\.[\d]+)?%?/,
      rposition = /^\w+/,
      rpercent = /%$/,
      _position = $.fn.position;

    function getOffsets(offsets, width, height) {
      return [
        parseFloat(offsets[0]) * (rpercent.test(offsets[0]) ? width / 100 : 1),
        parseFloat(offsets[1]) * (rpercent.test(offsets[1]) ? height / 100 : 1),
      ];
    }

    function parseCss(element, property) {
      return parseInt($.css(element, property), 10) || 0;
    }

    function getDimensions(elem) {
      var raw = elem[0];
      if (raw.nodeType === 9) {
        return {
          width: elem.width(),
          height: elem.height(),
          offset: {
            top: 0,
            left: 0,
          },
        };
      }
      if ($.isWindow(raw)) {
        return {
          width: elem.width(),
          height: elem.height(),
          offset: {
            top: elem.scrollTop(),
            left: elem.scrollLeft(),
          },
        };
      }
      if (raw.preventDefault) {
        return {
          width: 0,
          height: 0,
          offset: {
            top: raw.pageY,
            left: raw.pageX,
          },
        };
      }
      return {
        width: elem.outerWidth(),
        height: elem.outerHeight(),
        offset: elem.offset(),
      };
    }

    $.position = {
      scrollbarWidth: function () {
        if (cachedScrollbarWidth !== undefined) {
          return cachedScrollbarWidth;
        }
        var w1,
          w2,
          div = $(
            "<div " +
              "style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" +
              "<div style='height:100px;width:auto;'></div></div>"
          ),
          innerDiv = div.children()[0];

        $("body").append(div);
        w1 = innerDiv.offsetWidth;
        div.css("overflow", "scroll");

        w2 = innerDiv.offsetWidth;

        if (w1 === w2) {
          w2 = div[0].clientWidth;
        }

        div.remove();

        return (cachedScrollbarWidth = w1 - w2);
      },
      getScrollInfo: function (within) {
        var overflowX =
            within.isWindow || within.isDocument
              ? ""
              : within.element.css("overflow-x"),
          overflowY =
            within.isWindow || within.isDocument
              ? ""
              : within.element.css("overflow-y"),
          hasOverflowX =
            overflowX === "scroll" ||
            (overflowX === "auto" &&
              within.width < within.element[0].scrollWidth),
          hasOverflowY =
            overflowY === "scroll" ||
            (overflowY === "auto" &&
              within.height < within.element[0].scrollHeight);
        return {
          width: hasOverflowY ? $.position.scrollbarWidth() : 0,
          height: hasOverflowX ? $.position.scrollbarWidth() : 0,
        };
      },
      getWithinInfo: function (element) {
        var withinElement = $(element || window),
          isWindow = $.isWindow(withinElement[0]),
          isDocument = !!withinElement[0] && withinElement[0].nodeType === 9,
          hasOffset = !isWindow && !isDocument;
        return {
          element: withinElement,
          isWindow: isWindow,
          isDocument: isDocument,
          offset: hasOffset
            ? $(element).offset()
            : {
                left: 0,
                top: 0,
              },
          scrollLeft: withinElement.scrollLeft(),
          scrollTop: withinElement.scrollTop(),
          width: withinElement.outerWidth(),
          height: withinElement.outerHeight(),
        };
      },
    };

    $.fn.position = function (options) {
      if (!options || !options.of) {
        return _position.apply(this, arguments);
      }

      // Make a copy, we don't want to modify arguments
      options = $.extend({}, options);

      var atOffset,
        targetWidth,
        targetHeight,
        targetOffset,
        basePosition,
        dimensions,
        target = $(options.of),
        within = $.position.getWithinInfo(options.within),
        scrollInfo = $.position.getScrollInfo(within),
        collision = (options.collision || "flip").split(" "),
        offsets = {};

      dimensions = getDimensions(target);
      if (target[0].preventDefault) {
        // Force left top to allow flipping
        options.at = "left top";
      }
      targetWidth = dimensions.width;
      targetHeight = dimensions.height;
      targetOffset = dimensions.offset;

      // Clone to reuse original targetOffset later
      basePosition = $.extend({}, targetOffset);

      // Force my and at to have valid horizontal and vertical positions
      // if a value is missing or invalid, it will be converted to center
      $.each(["my", "at"], function () {
        var pos = (options[this] || "").split(" "),
          horizontalOffset,
          verticalOffset;

        if (pos.length === 1) {
          pos = rhorizontal.test(pos[0])
            ? pos.concat(["center"])
            : rvertical.test(pos[0])
            ? ["center"].concat(pos)
            : ["center", "center"];
        }
        pos[0] = rhorizontal.test(pos[0]) ? pos[0] : "center";
        pos[1] = rvertical.test(pos[1]) ? pos[1] : "center";

        // Calculate offsets
        horizontalOffset = roffset.exec(pos[0]);
        verticalOffset = roffset.exec(pos[1]);
        offsets[this] = [
          horizontalOffset ? horizontalOffset[0] : 0,
          verticalOffset ? verticalOffset[0] : 0,
        ];

        // Reduce to just the positions without the offsets
        options[this] = [rposition.exec(pos[0])[0], rposition.exec(pos[1])[0]];
      });

      // Normalize collision option
      if (collision.length === 1) {
        collision[1] = collision[0];
      }

      if (options.at[0] === "right") {
        basePosition.left += targetWidth;
      } else if (options.at[0] === "center") {
        basePosition.left += targetWidth / 2;
      }

      if (options.at[1] === "bottom") {
        basePosition.top += targetHeight;
      } else if (options.at[1] === "center") {
        basePosition.top += targetHeight / 2;
      }

      atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
      basePosition.left += atOffset[0];
      basePosition.top += atOffset[1];

      return this.each(function () {
        var collisionPosition,
          using,
          elem = $(this),
          elemWidth = elem.outerWidth(),
          elemHeight = elem.outerHeight(),
          marginLeft = parseCss(this, "marginLeft"),
          marginTop = parseCss(this, "marginTop"),
          collisionWidth =
            elemWidth +
            marginLeft +
            parseCss(this, "marginRight") +
            scrollInfo.width,
          collisionHeight =
            elemHeight +
            marginTop +
            parseCss(this, "marginBottom") +
            scrollInfo.height,
          position = $.extend({}, basePosition),
          myOffset = getOffsets(
            offsets.my,
            elem.outerWidth(),
            elem.outerHeight()
          );

        if (options.my[0] === "right") {
          position.left -= elemWidth;
        } else if (options.my[0] === "center") {
          position.left -= elemWidth / 2;
        }

        if (options.my[1] === "bottom") {
          position.top -= elemHeight;
        } else if (options.my[1] === "center") {
          position.top -= elemHeight / 2;
        }

        position.left += myOffset[0];
        position.top += myOffset[1];

        collisionPosition = {
          marginLeft: marginLeft,
          marginTop: marginTop,
        };

        $.each(["left", "top"], function (i, dir) {
          if ($.ui.position[collision[i]]) {
            $.ui.position[collision[i]][dir](position, {
              targetWidth: targetWidth,
              targetHeight: targetHeight,
              elemWidth: elemWidth,
              elemHeight: elemHeight,
              collisionPosition: collisionPosition,
              collisionWidth: collisionWidth,
              collisionHeight: collisionHeight,
              offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
              my: options.my,
              at: options.at,
              within: within,
              elem: elem,
            });
          }
        });

        if (options.using) {
          // Adds feedback as second argument to using callback, if present
          using = function (props) {
            var left = targetOffset.left - position.left,
              right = left + targetWidth - elemWidth,
              top = targetOffset.top - position.top,
              bottom = top + targetHeight - elemHeight,
              feedback = {
                target: {
                  element: target,
                  left: targetOffset.left,
                  top: targetOffset.top,
                  width: targetWidth,
                  height: targetHeight,
                },
                element: {
                  element: elem,
                  left: position.left,
                  top: position.top,
                  width: elemWidth,
                  height: elemHeight,
                },
                horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
                vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle",
              };
            if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
              feedback.horizontal = "center";
            }
            if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
              feedback.vertical = "middle";
            }
            if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
              feedback.important = "horizontal";
            } else {
              feedback.important = "vertical";
            }
            options.using.call(this, props, feedback);
          };
        }

        elem.offset(
          $.extend(position, {
            using: using,
          })
        );
      });
    };

    $.ui.position = {
      fit: {
        left: function (position, data) {
          var within = data.within,
            withinOffset = within.isWindow
              ? within.scrollLeft
              : within.offset.left,
            outerWidth = within.width,
            collisionPosLeft =
              position.left - data.collisionPosition.marginLeft,
            overLeft = withinOffset - collisionPosLeft,
            overRight =
              collisionPosLeft +
              data.collisionWidth -
              outerWidth -
              withinOffset,
            newOverRight;

          // Element is wider than within
          if (data.collisionWidth > outerWidth) {
            // Element is initially over the left side of within
            if (overLeft > 0 && overRight <= 0) {
              newOverRight =
                position.left +
                overLeft +
                data.collisionWidth -
                outerWidth -
                withinOffset;
              position.left += overLeft - newOverRight;

              // Element is initially over right side of within
            } else if (overRight > 0 && overLeft <= 0) {
              position.left = withinOffset;

              // Element is initially over both left and right sides of within
            } else {
              if (overLeft > overRight) {
                position.left = withinOffset + outerWidth - data.collisionWidth;
              } else {
                position.left = withinOffset;
              }
            }

            // Too far left -> align with left edge
          } else if (overLeft > 0) {
            position.left += overLeft;

            // Too far right -> align with right edge
          } else if (overRight > 0) {
            position.left -= overRight;

            // Adjust based on position and margin
          } else {
            position.left = max(
              position.left - collisionPosLeft,
              position.left
            );
          }
        },
        top: function (position, data) {
          var within = data.within,
            withinOffset = within.isWindow
              ? within.scrollTop
              : within.offset.top,
            outerHeight = data.within.height,
            collisionPosTop = position.top - data.collisionPosition.marginTop,
            overTop = withinOffset - collisionPosTop,
            overBottom =
              collisionPosTop +
              data.collisionHeight -
              outerHeight -
              withinOffset,
            newOverBottom;

          // Element is taller than within
          if (data.collisionHeight > outerHeight) {
            // Element is initially over the top of within
            if (overTop > 0 && overBottom <= 0) {
              newOverBottom =
                position.top +
                overTop +
                data.collisionHeight -
                outerHeight -
                withinOffset;
              position.top += overTop - newOverBottom;

              // Element is initially over bottom of within
            } else if (overBottom > 0 && overTop <= 0) {
              position.top = withinOffset;

              // Element is initially over both top and bottom of within
            } else {
              if (overTop > overBottom) {
                position.top =
                  withinOffset + outerHeight - data.collisionHeight;
              } else {
                position.top = withinOffset;
              }
            }

            // Too far up -> align with top
          } else if (overTop > 0) {
            position.top += overTop;

            // Too far down -> align with bottom edge
          } else if (overBottom > 0) {
            position.top -= overBottom;

            // Adjust based on position and margin
          } else {
            position.top = max(position.top - collisionPosTop, position.top);
          }
        },
      },
      flip: {
        left: function (position, data) {
          var within = data.within,
            withinOffset = within.offset.left + within.scrollLeft,
            outerWidth = within.width,
            offsetLeft = within.isWindow
              ? within.scrollLeft
              : within.offset.left,
            collisionPosLeft =
              position.left - data.collisionPosition.marginLeft,
            overLeft = collisionPosLeft - offsetLeft,
            overRight =
              collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
            myOffset =
              data.my[0] === "left"
                ? -data.elemWidth
                : data.my[0] === "right"
                ? data.elemWidth
                : 0,
            atOffset =
              data.at[0] === "left"
                ? data.targetWidth
                : data.at[0] === "right"
                ? -data.targetWidth
                : 0,
            offset = -2 * data.offset[0],
            newOverRight,
            newOverLeft;

          if (overLeft < 0) {
            newOverRight =
              position.left +
              myOffset +
              atOffset +
              offset +
              data.collisionWidth -
              outerWidth -
              withinOffset;
            if (newOverRight < 0 || newOverRight < abs(overLeft)) {
              position.left += myOffset + atOffset + offset;
            }
          } else if (overRight > 0) {
            newOverLeft =
              position.left -
              data.collisionPosition.marginLeft +
              myOffset +
              atOffset +
              offset -
              offsetLeft;
            if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
              position.left += myOffset + atOffset + offset;
            }
          }
        },
        top: function (position, data) {
          var within = data.within,
            withinOffset = within.offset.top + within.scrollTop,
            outerHeight = within.height,
            offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
            collisionPosTop = position.top - data.collisionPosition.marginTop,
            overTop = collisionPosTop - offsetTop,
            overBottom =
              collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
            top = data.my[1] === "top",
            myOffset = top
              ? -data.elemHeight
              : data.my[1] === "bottom"
              ? data.elemHeight
              : 0,
            atOffset =
              data.at[1] === "top"
                ? data.targetHeight
                : data.at[1] === "bottom"
                ? -data.targetHeight
                : 0,
            offset = -2 * data.offset[1],
            newOverTop,
            newOverBottom;
          if (overTop < 0) {
            newOverBottom =
              position.top +
              myOffset +
              atOffset +
              offset +
              data.collisionHeight -
              outerHeight -
              withinOffset;
            if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
              position.top += myOffset + atOffset + offset;
            }
          } else if (overBottom > 0) {
            newOverTop =
              position.top -
              data.collisionPosition.marginTop +
              myOffset +
              atOffset +
              offset -
              offsetTop;
            if (newOverTop > 0 || abs(newOverTop) < overBottom) {
              position.top += myOffset + atOffset + offset;
            }
          }
        },
      },
      flipfit: {
        left: function () {
          $.ui.position.flip.left.apply(this, arguments);
          $.ui.position.fit.left.apply(this, arguments);
        },
        top: function () {
          $.ui.position.flip.top.apply(this, arguments);
          $.ui.position.fit.top.apply(this, arguments);
        },
      },
    };
  })();

  var position = $.ui.position;

  /*!
   * jQuery UI Keycode 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */

  //>>label: Keycode
  //>>group: Core
  //>>description: Provide keycodes as keynames
  //>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/

  var keycode = ($.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38,
  });

  /*!
   * jQuery UI Unique ID 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */

  //>>label: uniqueId
  //>>group: Core
  //>>description: Functions to generate and remove uniqueId's
  //>>docs: http://api.jqueryui.com/uniqueId/

  var uniqueId = $.fn.extend({
    uniqueId: (function () {
      var uuid = 0;

      return function () {
        return this.each(function () {
          if (!this.id) {
            this.id = "ui-id-" + ++uuid;
          }
        });
      };
    })(),

    removeUniqueId: function () {
      return this.each(function () {
        if (/^ui-id-\d+$/.test(this.id)) {
          $(this).removeAttr("id");
        }
      });
    },
  });

  /*!
   * jQuery UI Tooltip 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */

  //>>label: Tooltip
  //>>group: Widgets
  //>>description: Shows additional information for any element on hover or focus.
  //>>docs: http://api.jqueryui.com/tooltip/
  //>>demos: http://jqueryui.com/tooltip/
  //>>css.structure: ../../themes/base/core.css
  //>>css.structure: ../../themes/base/tooltip.css
  //>>css.theme: ../../themes/base/theme.css

  $.widget("ui.tooltip", {
    version: "1.12.1",
    options: {
      classes: {
        "ui-tooltip": "ui-corner-all ui-widget-shadow",
      },
      content: function () {
        // support: IE<9, Opera in jQuery <1.7
        // .text() can't accept undefined, so coerce to a string
        var title = $(this).attr("title") || "";

        // Escape title, since we're going from an attribute to raw HTML
        return $("<a>").text(title).html();
      },
      hide: true,

      // Disabled elements have inconsistent behavior across browsers (#8661)
      items: "[title]:not([disabled])",
      position: {
        my: "left top+15",
        at: "left bottom",
        collision: "flipfit flip",
      },
      show: true,
      track: false,

      // Callbacks
      close: null,
      open: null,
    },

    _addDescribedBy: function (elem, id) {
      var describedby = (elem.attr("aria-describedby") || "").split(/\s+/);
      describedby.push(id);
      elem
        .data("ui-tooltip-id", id)
        .attr("aria-describedby", $.trim(describedby.join(" ")));
    },

    _removeDescribedBy: function (elem) {
      var id = elem.data("ui-tooltip-id"),
        describedby = (elem.attr("aria-describedby") || "").split(/\s+/),
        index = $.inArray(id, describedby);

      if (index !== -1) {
        describedby.splice(index, 1);
      }

      elem.removeData("ui-tooltip-id");
      describedby = $.trim(describedby.join(" "));
      if (describedby) {
        elem.attr("aria-describedby", describedby);
      } else {
        elem.removeAttr("aria-describedby");
      }
    },

    _create: function () {
      this._on({
        mouseover: "open",
        focusin: "open",
      });

      // IDs of generated tooltips, needed for destroy
      this.tooltips = {};

      // IDs of parent tooltips where we removed the title attribute
      this.parents = {};

      // Append the aria-live region so tooltips announce correctly
      this.liveRegion = $("<div>")
        .attr({
          role: "log",
          "aria-live": "assertive",
          "aria-relevant": "additions",
        })
        .appendTo(this.document[0].body);
      this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");

      this.disabledTitles = $([]);
    },

    _setOption: function (key, value) {
      var that = this;

      this._super(key, value);

      if (key === "content") {
        $.each(this.tooltips, function (id, tooltipData) {
          that._updateContent(tooltipData.element);
        });
      }
    },

    _setOptionDisabled: function (value) {
      this[value ? "_disable" : "_enable"]();
    },

    _disable: function () {
      var that = this;

      // Close open tooltips
      $.each(this.tooltips, function (id, tooltipData) {
        var event = $.Event("blur");
        event.target = event.currentTarget = tooltipData.element[0];
        that.close(event, true);
      });

      // Remove title attributes to prevent native tooltips
      this.disabledTitles = this.disabledTitles.add(
        this.element
          .find(this.options.items)
          .addBack()
          .filter(function () {
            var element = $(this);
            if (element.is("[title]")) {
              return element
                .data("ui-tooltip-title", element.attr("title"))
                .removeAttr("title");
            }
          })
      );
    },

    _enable: function () {
      // restore title attributes
      this.disabledTitles.each(function () {
        var element = $(this);
        if (element.data("ui-tooltip-title")) {
          element.attr("title", element.data("ui-tooltip-title"));
        }
      });
      this.disabledTitles = $([]);
    },

    open: function (event) {
      var that = this,
        target = $(event ? event.target : this.element)
          // we need closest here due to mouseover bubbling,
          // but always pointing at the same event target
          .closest(this.options.items);

      // No element to show a tooltip for or the tooltip is already open
      if (!target.length || target.data("ui-tooltip-id")) {
        return;
      }

      if (target.attr("title")) {
        target.data("ui-tooltip-title", target.attr("title"));
      }

      target.data("ui-tooltip-open", true);

      // Kill parent tooltips, custom or native, for hover
      if (event && event.type === "mouseover") {
        target.parents().each(function () {
          var parent = $(this),
            blurEvent;
          if (parent.data("ui-tooltip-open")) {
            blurEvent = $.Event("blur");
            blurEvent.target = blurEvent.currentTarget = this;
            that.close(blurEvent, true);
          }
          if (parent.attr("title")) {
            parent.uniqueId();
            that.parents[this.id] = {
              element: this,
              title: parent.attr("title"),
            };
            parent.attr("title", "");
          }
        });
      }

      this._registerCloseHandlers(event, target);
      this._updateContent(target, event);
    },

    _updateContent: function (target, event) {
      var content,
        contentOption = this.options.content,
        that = this,
        eventType = event ? event.type : null;

      if (
        typeof contentOption === "string" ||
        contentOption.nodeType ||
        contentOption.jquery
      ) {
        return this._open(event, target, contentOption);
      }

      content = contentOption.call(target[0], function (response) {
        // IE may instantly serve a cached response for ajax requests
        // delay this call to _open so the other call to _open runs first
        that._delay(function () {
          // Ignore async response if tooltip was closed already
          if (!target.data("ui-tooltip-open")) {
            return;
          }

          // JQuery creates a special event for focusin when it doesn't
          // exist natively. To improve performance, the native event
          // object is reused and the type is changed. Therefore, we can't
          // rely on the type being correct after the event finished
          // bubbling, so we set it back to the previous value. (#8740)
          if (event) {
            event.type = eventType;
          }
          this._open(event, target, response);
        });
      });
      if (content) {
        this._open(event, target, content);
      }
    },

    _open: function (event, target, content) {
      var tooltipData,
        tooltip,
        delayedShow,
        a11yContent,
        positionOption = $.extend({}, this.options.position);

      if (!content) {
        return;
      }

      // Content can be updated multiple times. If the tooltip already
      // exists, then just update the content and bail.
      tooltipData = this._find(target);
      if (tooltipData) {
        tooltipData.tooltip.find(".ui-tooltip-content").html(content);
        return;
      }

      // If we have a title, clear it to prevent the native tooltip
      // we have to check first to avoid defining a title if none exists
      // (we don't want to cause an element to start matching [title])
      //
      // We use removeAttr only for key events, to allow IE to export the correct
      // accessible attributes. For mouse events, set to empty string to avoid
      // native tooltip showing up (happens only when removing inside mouseover).
      if (target.is("[title]")) {
        if (event && event.type === "mouseover") {
          target.attr("title", "");
        } else {
          target.removeAttr("title");
        }
      }

      tooltipData = this._tooltip(target);
      tooltip = tooltipData.tooltip;
      this._addDescribedBy(target, tooltip.attr("id"));
      tooltip.find(".ui-tooltip-content").html(content);

      // Support: Voiceover on OS X, JAWS on IE <= 9
      // JAWS announces deletions even when aria-relevant="additions"
      // Voiceover will sometimes re-read the entire log region's contents from the beginning
      this.liveRegion.children().hide();
      a11yContent = $("<div>").html(tooltip.find(".ui-tooltip-content").html());
      a11yContent.removeAttr("name").find("[name]").removeAttr("name");
      a11yContent.removeAttr("id").find("[id]").removeAttr("id");
      a11yContent.appendTo(this.liveRegion);

      function position(event) {
        positionOption.of = event;
        if (tooltip.is(":hidden")) {
          return;
        }
        tooltip.position(positionOption);
      }
      if (this.options.track && event && /^mouse/.test(event.type)) {
        this._on(this.document, {
          mousemove: position,
        });

        // trigger once to override element-relative positioning
        position(event);
      } else {
        tooltip.position(
          $.extend(
            {
              of: target,
            },
            this.options.position
          )
        );
      }

      tooltip.hide();

      this._show(tooltip, this.options.show);

      // Handle tracking tooltips that are shown with a delay (#8644). As soon
      // as the tooltip is visible, position the tooltip using the most recent
      // event.
      // Adds the check to add the timers only when both delay and track options are set (#14682)
      if (this.options.track && this.options.show && this.options.show.delay) {
        delayedShow = this.delayedShow = setInterval(function () {
          if (tooltip.is(":visible")) {
            position(positionOption.of);
            clearInterval(delayedShow);
          }
        }, $.fx.interval);
      }

      this._trigger("open", event, {
        tooltip: tooltip,
      });
    },

    _registerCloseHandlers: function (event, target) {
      var events = {
        keyup: function (event) {
          if (event.keyCode === $.ui.keyCode.ESCAPE) {
            var fakeEvent = $.Event(event);
            fakeEvent.currentTarget = target[0];
            this.close(fakeEvent, true);
          }
        },
      };

      // Only bind remove handler for delegated targets. Non-delegated
      // tooltips will handle this in destroy.
      if (target[0] !== this.element[0]) {
        events.remove = function () {
          this._removeTooltip(this._find(target).tooltip);
        };
      }

      if (!event || event.type === "mouseover") {
        events.mouseleave = "close";
      }
      if (!event || event.type === "focusin") {
        events.focusout = "close";
      }
      this._on(true, target, events);
    },

    close: function (event) {
      var tooltip,
        that = this,
        target = $(event ? event.currentTarget : this.element),
        tooltipData = this._find(target);

      // The tooltip may already be closed
      if (!tooltipData) {
        // We set ui-tooltip-open immediately upon open (in open()), but only set the
        // additional data once there's actually content to show (in _open()). So even if the
        // tooltip doesn't have full data, we always remove ui-tooltip-open in case we're in
        // the period between open() and _open().
        target.removeData("ui-tooltip-open");
        return;
      }

      tooltip = tooltipData.tooltip;

      // Disabling closes the tooltip, so we need to track when we're closing
      // to avoid an infinite loop in case the tooltip becomes disabled on close
      if (tooltipData.closing) {
        return;
      }

      // Clear the interval for delayed tracking tooltips
      clearInterval(this.delayedShow);

      // Only set title if we had one before (see comment in _open())
      // If the title attribute has changed since open(), don't restore
      if (target.data("ui-tooltip-title") && !target.attr("title")) {
        target.attr("title", target.data("ui-tooltip-title"));
      }

      this._removeDescribedBy(target);

      tooltipData.hiding = true;
      tooltip.stop(true);
      this._hide(tooltip, this.options.hide, function () {
        that._removeTooltip($(this));
      });

      target.removeData("ui-tooltip-open");
      this._off(target, "mouseleave focusout keyup");

      // Remove 'remove' binding only on delegated targets
      if (target[0] !== this.element[0]) {
        this._off(target, "remove");
      }
      this._off(this.document, "mousemove");

      if (event && event.type === "mouseleave") {
        $.each(this.parents, function (id, parent) {
          $(parent.element).attr("title", parent.title);
          delete that.parents[id];
        });
      }

      tooltipData.closing = true;
      this._trigger("close", event, {
        tooltip: tooltip,
      });
      if (!tooltipData.hiding) {
        tooltipData.closing = false;
      }
    },

    _tooltip: function (element) {
      var tooltip = $("<div>").attr("role", "tooltip"),
        content = $("<div>").appendTo(tooltip),
        id = tooltip.uniqueId().attr("id");

      this._addClass(content, "ui-tooltip-content");
      this._addClass(tooltip, "ui-tooltip", "ui-widget ui-widget-content");

      tooltip.appendTo(this._appendTo(element));

      return (this.tooltips[id] = {
        element: element,
        tooltip: tooltip,
      });
    },

    _find: function (target) {
      var id = target.data("ui-tooltip-id");
      return id ? this.tooltips[id] : null;
    },

    _removeTooltip: function (tooltip) {
      tooltip.remove();
      delete this.tooltips[tooltip.attr("id")];
    },

    _appendTo: function (target) {
      var element = target.closest(".ui-front, dialog");

      if (!element.length) {
        element = this.document[0].body;
      }

      return element;
    },

    _destroy: function () {
      var that = this;

      // Close open tooltips
      $.each(this.tooltips, function (id, tooltipData) {
        // Delegate to close method to handle common cleanup
        var event = $.Event("blur"),
          element = tooltipData.element;
        event.target = event.currentTarget = element[0];
        that.close(event, true);

        // Remove immediately; destroying an open tooltip doesn't use the
        // hide animation
        $("#" + id).remove();

        // Restore the title
        if (element.data("ui-tooltip-title")) {
          // If the title attribute has changed since open(), don't restore
          if (!element.attr("title")) {
            element.attr("title", element.data("ui-tooltip-title"));
          }
          element.removeData("ui-tooltip-title");
        }
      });
      this.liveRegion.remove();
    },
  });

  // DEPRECATED
  // TODO: Switch return back to widget declaration at top of file when this is removed
  if ($.uiBackCompat !== false) {
    // Backcompat for tooltipClass option
    $.widget("ui.tooltip", $.ui.tooltip, {
      options: {
        tooltipClass: null,
      },
      _tooltip: function () {
        var tooltipData = this._superApply(arguments);
        if (this.options.tooltipClass) {
          tooltipData.tooltip.addClass(this.options.tooltipClass);
        }
        return tooltipData;
      },
    });
  }

  var widgetsTooltip = $.ui.tooltip;
});
