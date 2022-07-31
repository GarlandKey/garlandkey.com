var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
!function(e, t) {
  typeof exports == "object" && typeof module != "undefined" ? t(exports) : typeof define == "function" && define.amd ? define(["exports"], t) : t(e.dat = {});
}(globalThis, function(e) {
  function t(e2, t2) {
    var n2 = e2.__state.conversionName.toString(), o2 = Math.round(e2.r), i2 = Math.round(e2.g), r2 = Math.round(e2.b), s2 = e2.a, a2 = Math.round(e2.h), l2 = e2.s.toFixed(1), d2 = e2.v.toFixed(1);
    if (t2 || n2 === "THREE_CHAR_HEX" || n2 === "SIX_CHAR_HEX") {
      for (var c2 = e2.hex.toString(16); c2.length < 6; )
        c2 = "0" + c2;
      return "#" + c2;
    }
    return n2 === "CSS_RGB" ? "rgb(" + o2 + "," + i2 + "," + r2 + ")" : n2 === "CSS_RGBA" ? "rgba(" + o2 + "," + i2 + "," + r2 + "," + s2 + ")" : n2 === "HEX" ? "0x" + e2.hex.toString(16) : n2 === "RGB_ARRAY" ? "[" + o2 + "," + i2 + "," + r2 + "]" : n2 === "RGBA_ARRAY" ? "[" + o2 + "," + i2 + "," + r2 + "," + s2 + "]" : n2 === "RGB_OBJ" ? "{r:" + o2 + ",g:" + i2 + ",b:" + r2 + "}" : n2 === "RGBA_OBJ" ? "{r:" + o2 + ",g:" + i2 + ",b:" + r2 + ",a:" + s2 + "}" : n2 === "HSV_OBJ" ? "{h:" + a2 + ",s:" + l2 + ",v:" + d2 + "}" : n2 === "HSVA_OBJ" ? "{h:" + a2 + ",s:" + l2 + ",v:" + d2 + ",a:" + s2 + "}" : "unknown format";
  }
  function n(e2, t2, n2) {
    Object.defineProperty(e2, t2, { get: function() {
      return this.__state.space === "RGB" ? this.__state[t2] : (I.recalculateRGB(this, t2, n2), this.__state[t2]);
    }, set: function(e3) {
      this.__state.space !== "RGB" && (I.recalculateRGB(this, t2, n2), this.__state.space = "RGB"), this.__state[t2] = e3;
    } });
  }
  function o(e2, t2) {
    Object.defineProperty(e2, t2, { get: function() {
      return this.__state.space === "HSV" ? this.__state[t2] : (I.recalculateHSV(this), this.__state[t2]);
    }, set: function(e3) {
      this.__state.space !== "HSV" && (I.recalculateHSV(this), this.__state.space = "HSV"), this.__state[t2] = e3;
    } });
  }
  function i(e2) {
    if (e2 === "0" || S.isUndefined(e2))
      return 0;
    var t2 = e2.match(U);
    return S.isNull(t2) ? 0 : parseFloat(t2[1]);
  }
  function r(e2) {
    var t2 = e2.toString();
    return t2.indexOf(".") > -1 ? t2.length - t2.indexOf(".") - 1 : 0;
  }
  function s(e2, t2) {
    var n2 = Math.pow(10, t2);
    return Math.round(e2 * n2) / n2;
  }
  function a(e2, t2, n2, o2, i2) {
    return o2 + (e2 - t2) / (n2 - t2) * (i2 - o2);
  }
  function l(e2, t2, n2, o2) {
    e2.style.background = "", S.each(ee, function(i2) {
      e2.style.cssText += "background: " + i2 + "linear-gradient(" + t2 + ", " + n2 + " 0%, " + o2 + " 100%); ";
    });
  }
  function d(e2) {
    e2.style.background = "", e2.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", e2.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e2.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e2.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e2.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
  }
  function c(e2, t2, n2) {
    var o2 = document.createElement("li");
    return t2 && o2.appendChild(t2), n2 ? e2.__ul.insertBefore(o2, n2) : e2.__ul.appendChild(o2), e2.onResize(), o2;
  }
  function u(e2) {
    X.unbind(window, "resize", e2.__resizeHandler), e2.saveToLocalStorageIfPossible && X.unbind(window, "unload", e2.saveToLocalStorageIfPossible);
  }
  function _(e2, t2) {
    var n2 = e2.__preset_select[e2.__preset_select.selectedIndex];
    n2.innerHTML = t2 ? n2.value + "*" : n2.value;
  }
  function h(e2, t2, n2) {
    if (n2.__li = t2, n2.__gui = e2, S.extend(n2, { options: function(t3) {
      if (arguments.length > 1) {
        var o3 = n2.__li.nextElementSibling;
        return n2.remove(), f(e2, n2.object, n2.property, { before: o3, factoryArgs: [S.toArray(arguments)] });
      }
      if (S.isArray(t3) || S.isObject(t3)) {
        var i3 = n2.__li.nextElementSibling;
        return n2.remove(), f(e2, n2.object, n2.property, { before: i3, factoryArgs: [t3] });
      }
    }, name: function(e3) {
      return n2.__li.firstElementChild.firstElementChild.innerHTML = e3, n2;
    }, listen: function() {
      return n2.__gui.listen(n2), n2;
    }, remove: function() {
      return n2.__gui.remove(n2), n2;
    } }), n2 instanceof q) {
      var o2 = new Q(n2.object, n2.property, { min: n2.__min, max: n2.__max, step: n2.__step });
      S.each(["updateDisplay", "onChange", "onFinishChange", "step"], function(e3) {
        var t3 = n2[e3], i3 = o2[e3];
        n2[e3] = o2[e3] = function() {
          var e4 = Array.prototype.slice.call(arguments);
          return i3.apply(o2, e4), t3.apply(n2, e4);
        };
      }), X.addClass(t2, "has-slider"), n2.domElement.insertBefore(o2.domElement, n2.domElement.firstElementChild);
    } else if (n2 instanceof Q) {
      var i2 = function(t3) {
        if (S.isNumber(n2.__min) && S.isNumber(n2.__max)) {
          var o3 = n2.__li.firstElementChild.firstElementChild.innerHTML, i3 = n2.__gui.__listening.indexOf(n2) > -1;
          n2.remove();
          var r2 = f(e2, n2.object, n2.property, { before: n2.__li.nextElementSibling, factoryArgs: [n2.__min, n2.__max, n2.__step] });
          return r2.name(o3), i3 && r2.listen(), r2;
        }
        return t3;
      };
      n2.min = S.compose(i2, n2.min), n2.max = S.compose(i2, n2.max);
    } else
      n2 instanceof K ? (X.bind(t2, "click", function() {
        X.fakeEvent(n2.__checkbox, "click");
      }), X.bind(n2.__checkbox, "click", function(e3) {
        e3.stopPropagation();
      })) : n2 instanceof Z ? (X.bind(t2, "click", function() {
        X.fakeEvent(n2.__button, "click");
      }), X.bind(t2, "mouseover", function() {
        X.addClass(n2.__button, "hover");
      }), X.bind(t2, "mouseout", function() {
        X.removeClass(n2.__button, "hover");
      })) : n2 instanceof $ && (X.addClass(t2, "color"), n2.updateDisplay = S.compose(function(e3) {
        return t2.style.borderLeftColor = n2.__color.toString(), e3;
      }, n2.updateDisplay), n2.updateDisplay());
    n2.setValue = S.compose(function(t3) {
      return e2.getRoot().__preset_select && n2.isModified() && _(e2.getRoot(), true), t3;
    }, n2.setValue);
  }
  function p(e2, t2) {
    var n2 = e2.getRoot(), o2 = n2.__rememberedObjects.indexOf(t2.object);
    if (o2 !== -1) {
      var i2 = n2.__rememberedObjectIndecesToControllers[o2];
      if (i2 === void 0 && (i2 = {}, n2.__rememberedObjectIndecesToControllers[o2] = i2), i2[t2.property] = t2, n2.load && n2.load.remembered) {
        var r2 = n2.load.remembered, s2 = void 0;
        if (r2[e2.preset])
          s2 = r2[e2.preset];
        else {
          if (!r2[se])
            return;
          s2 = r2[se];
        }
        if (s2[o2] && s2[o2][t2.property] !== void 0) {
          var a2 = s2[o2][t2.property];
          t2.initialValue = a2, t2.setValue(a2);
        }
      }
    }
  }
  function f(e2, t2, n2, o2) {
    if (t2[n2] === void 0)
      throw new Error('Object "' + t2 + '" has no property "' + n2 + '"');
    var i2 = void 0;
    if (o2.color)
      i2 = new $(t2, n2);
    else {
      var r2 = [t2, n2].concat(o2.factoryArgs);
      i2 = ne.apply(e2, r2);
    }
    o2.before instanceof z && (o2.before = o2.before.__li), p(e2, i2), X.addClass(i2.domElement, "c");
    var s2 = document.createElement("span");
    X.addClass(s2, "property-name"), s2.innerHTML = i2.property;
    var a2 = document.createElement("div");
    a2.appendChild(s2), a2.appendChild(i2.domElement);
    var l2 = c(e2, a2, o2.before);
    return X.addClass(l2, he.CLASS_CONTROLLER_ROW), i2 instanceof $ ? X.addClass(l2, "color") : X.addClass(l2, H(i2.getValue())), h(e2, l2, i2), e2.__controllers.push(i2), i2;
  }
  function m(e2, t2) {
    return document.location.href + "." + t2;
  }
  function g(e2, t2, n2) {
    var o2 = document.createElement("option");
    o2.innerHTML = t2, o2.value = t2, e2.__preset_select.appendChild(o2), n2 && (e2.__preset_select.selectedIndex = e2.__preset_select.length - 1);
  }
  function b(e2, t2) {
    t2.style.display = e2.useLocalStorage ? "block" : "none";
  }
  function v(e2) {
    var t2 = e2.__save_row = document.createElement("li");
    X.addClass(e2.domElement, "has-save"), e2.__ul.insertBefore(t2, e2.__ul.firstChild), X.addClass(t2, "save-row");
    var n2 = document.createElement("span");
    n2.innerHTML = "&nbsp;", X.addClass(n2, "button gears");
    var o2 = document.createElement("span");
    o2.innerHTML = "Save", X.addClass(o2, "button"), X.addClass(o2, "save");
    var i2 = document.createElement("span");
    i2.innerHTML = "New", X.addClass(i2, "button"), X.addClass(i2, "save-as");
    var r2 = document.createElement("span");
    r2.innerHTML = "Revert", X.addClass(r2, "button"), X.addClass(r2, "revert");
    var s2 = e2.__preset_select = document.createElement("select");
    if (e2.load && e2.load.remembered ? S.each(e2.load.remembered, function(t3, n3) {
      g(e2, n3, n3 === e2.preset);
    }) : g(e2, se, false), X.bind(s2, "change", function() {
      for (var t3 = 0; t3 < e2.__preset_select.length; t3++)
        e2.__preset_select[t3].innerHTML = e2.__preset_select[t3].value;
      e2.preset = this.value;
    }), t2.appendChild(s2), t2.appendChild(n2), t2.appendChild(o2), t2.appendChild(i2), t2.appendChild(r2), ae) {
      var a2 = document.getElementById("dg-local-explain"), l2 = document.getElementById("dg-local-storage");
      document.getElementById("dg-save-locally").style.display = "block", localStorage.getItem(m(e2, "isLocal")) === "true" && l2.setAttribute("checked", "checked"), b(e2, a2), X.bind(l2, "change", function() {
        e2.useLocalStorage = !e2.useLocalStorage, b(e2, a2);
      });
    }
    var d2 = document.getElementById("dg-new-constructor");
    X.bind(d2, "keydown", function(e3) {
      !e3.metaKey || e3.which !== 67 && e3.keyCode !== 67 || le.hide();
    }), X.bind(n2, "click", function() {
      d2.innerHTML = JSON.stringify(e2.getSaveObject(), void 0, 2), le.show(), d2.focus(), d2.select();
    }), X.bind(o2, "click", function() {
      e2.save();
    }), X.bind(i2, "click", function() {
      var t3 = prompt("Enter a new preset name.");
      t3 && e2.saveAs(t3);
    }), X.bind(r2, "click", function() {
      e2.revert();
    });
  }
  function y(e2) {
    function t2(t3) {
      return t3.preventDefault(), e2.width += i2 - t3.clientX, e2.onResize(), i2 = t3.clientX, false;
    }
    function n2() {
      X.removeClass(e2.__closeButton, he.CLASS_DRAG), X.unbind(window, "mousemove", t2), X.unbind(window, "mouseup", n2);
    }
    function o2(o3) {
      return o3.preventDefault(), i2 = o3.clientX, X.addClass(e2.__closeButton, he.CLASS_DRAG), X.bind(window, "mousemove", t2), X.bind(window, "mouseup", n2), false;
    }
    var i2 = void 0;
    e2.__resize_handle = document.createElement("div"), S.extend(e2.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" }), X.bind(e2.__resize_handle, "mousedown", o2), X.bind(e2.__closeButton, "mousedown", o2), e2.domElement.insertBefore(e2.__resize_handle, e2.domElement.firstElementChild);
  }
  function w(e2, t2) {
    e2.domElement.style.width = t2 + "px", e2.__save_row && e2.autoPlace && (e2.__save_row.style.width = t2 + "px"), e2.__closeButton && (e2.__closeButton.style.width = t2 + "px");
  }
  function x(e2, t2) {
    var n2 = {};
    return S.each(e2.__rememberedObjects, function(o2, i2) {
      var r2 = {}, s2 = e2.__rememberedObjectIndecesToControllers[i2];
      S.each(s2, function(e3, n3) {
        r2[n3] = t2 ? e3.initialValue : e3.getValue();
      }), n2[i2] = r2;
    }), n2;
  }
  function E(e2) {
    for (var t2 = 0; t2 < e2.__preset_select.length; t2++)
      e2.__preset_select[t2].value === e2.preset && (e2.__preset_select.selectedIndex = t2);
  }
  function C(e2) {
    e2.length !== 0 && oe.call(window, function() {
      C(e2);
    }), S.each(e2, function(e3) {
      e3.updateDisplay();
    });
  }
  var A = Array.prototype.forEach, k = Array.prototype.slice, S = { BREAK: {}, extend: function(e2) {
    return this.each(k.call(arguments, 1), function(t2) {
      (this.isObject(t2) ? Object.keys(t2) : []).forEach(function(n2) {
        this.isUndefined(t2[n2]) || (e2[n2] = t2[n2]);
      }.bind(this));
    }, this), e2;
  }, defaults: function(e2) {
    return this.each(k.call(arguments, 1), function(t2) {
      (this.isObject(t2) ? Object.keys(t2) : []).forEach(function(n2) {
        this.isUndefined(e2[n2]) && (e2[n2] = t2[n2]);
      }.bind(this));
    }, this), e2;
  }, compose: function() {
    var e2 = k.call(arguments);
    return function() {
      for (var t2 = k.call(arguments), n2 = e2.length - 1; n2 >= 0; n2--)
        t2 = [e2[n2].apply(this, t2)];
      return t2[0];
    };
  }, each: function(e2, t2, n2) {
    if (e2) {
      if (A && e2.forEach && e2.forEach === A)
        e2.forEach(t2, n2);
      else if (e2.length === e2.length + 0) {
        var o2 = void 0, i2 = void 0;
        for (o2 = 0, i2 = e2.length; o2 < i2; o2++)
          if (o2 in e2 && t2.call(n2, e2[o2], o2) === this.BREAK)
            return;
      } else
        for (var r2 in e2)
          if (t2.call(n2, e2[r2], r2) === this.BREAK)
            return;
    }
  }, defer: function(e2) {
    setTimeout(e2, 0);
  }, debounce: function(e2, t2, n2) {
    var o2 = void 0;
    return function() {
      var i2 = this, r2 = arguments, s2 = n2 || !o2;
      clearTimeout(o2), o2 = setTimeout(function() {
        o2 = null, n2 || e2.apply(i2, r2);
      }, t2), s2 && e2.apply(i2, r2);
    };
  }, toArray: function(e2) {
    return e2.toArray ? e2.toArray() : k.call(e2);
  }, isUndefined: function(e2) {
    return e2 === void 0;
  }, isNull: function(e2) {
    return e2 === null;
  }, isNaN: function(e2) {
    function t2(t3) {
      return e2.apply(this, arguments);
    }
    return t2.toString = function() {
      return e2.toString();
    }, t2;
  }(function(e2) {
    return isNaN(e2);
  }), isArray: Array.isArray || function(e2) {
    return e2.constructor === Array;
  }, isObject: function(e2) {
    return e2 === Object(e2);
  }, isNumber: function(e2) {
    return e2 === e2 + 0;
  }, isString: function(e2) {
    return e2 === e2 + "";
  }, isBoolean: function(e2) {
    return e2 === false || e2 === true;
  }, isFunction: function(e2) {
    return Object.prototype.toString.call(e2) === "[object Function]";
  } }, O = [{ litmus: S.isString, conversions: { THREE_CHAR_HEX: { read: function(e2) {
    var t2 = e2.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
    return t2 !== null && { space: "HEX", hex: parseInt("0x" + t2[1].toString() + t2[1].toString() + t2[2].toString() + t2[2].toString() + t2[3].toString() + t2[3].toString(), 0) };
  }, write: t }, SIX_CHAR_HEX: { read: function(e2) {
    var t2 = e2.match(/^#([A-F0-9]{6})$/i);
    return t2 !== null && { space: "HEX", hex: parseInt("0x" + t2[1].toString(), 0) };
  }, write: t }, CSS_RGB: { read: function(e2) {
    var t2 = e2.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
    return t2 !== null && { space: "RGB", r: parseFloat(t2[1]), g: parseFloat(t2[2]), b: parseFloat(t2[3]) };
  }, write: t }, CSS_RGBA: { read: function(e2) {
    var t2 = e2.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
    return t2 !== null && { space: "RGB", r: parseFloat(t2[1]), g: parseFloat(t2[2]), b: parseFloat(t2[3]), a: parseFloat(t2[4]) };
  }, write: t } } }, { litmus: S.isNumber, conversions: { HEX: { read: function(e2) {
    return { space: "HEX", hex: e2, conversionName: "HEX" };
  }, write: function(e2) {
    return e2.hex;
  } } } }, { litmus: S.isArray, conversions: { RGB_ARRAY: { read: function(e2) {
    return e2.length === 3 && { space: "RGB", r: e2[0], g: e2[1], b: e2[2] };
  }, write: function(e2) {
    return [e2.r, e2.g, e2.b];
  } }, RGBA_ARRAY: { read: function(e2) {
    return e2.length === 4 && { space: "RGB", r: e2[0], g: e2[1], b: e2[2], a: e2[3] };
  }, write: function(e2) {
    return [e2.r, e2.g, e2.b, e2.a];
  } } } }, { litmus: S.isObject, conversions: { RGBA_OBJ: { read: function(e2) {
    return !!(S.isNumber(e2.r) && S.isNumber(e2.g) && S.isNumber(e2.b) && S.isNumber(e2.a)) && { space: "RGB", r: e2.r, g: e2.g, b: e2.b, a: e2.a };
  }, write: function(e2) {
    return { r: e2.r, g: e2.g, b: e2.b, a: e2.a };
  } }, RGB_OBJ: { read: function(e2) {
    return !!(S.isNumber(e2.r) && S.isNumber(e2.g) && S.isNumber(e2.b)) && { space: "RGB", r: e2.r, g: e2.g, b: e2.b };
  }, write: function(e2) {
    return { r: e2.r, g: e2.g, b: e2.b };
  } }, HSVA_OBJ: { read: function(e2) {
    return !!(S.isNumber(e2.h) && S.isNumber(e2.s) && S.isNumber(e2.v) && S.isNumber(e2.a)) && { space: "HSV", h: e2.h, s: e2.s, v: e2.v, a: e2.a };
  }, write: function(e2) {
    return { h: e2.h, s: e2.s, v: e2.v, a: e2.a };
  } }, HSV_OBJ: { read: function(e2) {
    return !!(S.isNumber(e2.h) && S.isNumber(e2.s) && S.isNumber(e2.v)) && { space: "HSV", h: e2.h, s: e2.s, v: e2.v };
  }, write: function(e2) {
    return { h: e2.h, s: e2.s, v: e2.v };
  } } } }], T = void 0, L = void 0, R = function() {
    L = false;
    var e2 = arguments.length > 1 ? S.toArray(arguments) : arguments[0];
    return S.each(O, function(t2) {
      if (t2.litmus(e2))
        return S.each(t2.conversions, function(t3, n2) {
          if (T = t3.read(e2), L === false && T !== false)
            return L = T, T.conversionName = n2, T.conversion = t3, S.BREAK;
        }), S.BREAK;
    }), L;
  }, B = void 0, N = { hsv_to_rgb: function(e2, t2, n2) {
    var o2 = Math.floor(e2 / 60) % 6, i2 = e2 / 60 - Math.floor(e2 / 60), r2 = n2 * (1 - t2), s2 = n2 * (1 - i2 * t2), a2 = n2 * (1 - (1 - i2) * t2), l2 = [[n2, a2, r2], [s2, n2, r2], [r2, n2, a2], [r2, s2, n2], [a2, r2, n2], [n2, r2, s2]][o2];
    return { r: 255 * l2[0], g: 255 * l2[1], b: 255 * l2[2] };
  }, rgb_to_hsv: function(e2, t2, n2) {
    var o2 = Math.min(e2, t2, n2), i2 = Math.max(e2, t2, n2), r2 = i2 - o2, s2 = void 0, a2 = void 0;
    return i2 === 0 ? { h: NaN, s: 0, v: 0 } : (a2 = r2 / i2, s2 = e2 === i2 ? (t2 - n2) / r2 : t2 === i2 ? 2 + (n2 - e2) / r2 : 4 + (e2 - t2) / r2, (s2 /= 6) < 0 && (s2 += 1), { h: 360 * s2, s: a2, v: i2 / 255 });
  }, rgb_to_hex: function(e2, t2, n2) {
    var o2 = this.hex_with_component(0, 2, e2);
    return o2 = this.hex_with_component(o2, 1, t2), o2 = this.hex_with_component(o2, 0, n2);
  }, component_from_hex: function(e2, t2) {
    return e2 >> 8 * t2 & 255;
  }, hex_with_component: function(e2, t2, n2) {
    return n2 << (B = 8 * t2) | e2 & ~(255 << B);
  } }, H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, F = function(e2, t2) {
    if (!(e2 instanceof t2))
      throw new TypeError("Cannot call a class as a function");
  }, P = function() {
    function e2(e3, t2) {
      for (var n2 = 0; n2 < t2.length; n2++) {
        var o2 = t2[n2];
        o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
      }
    }
    return function(t2, n2, o2) {
      return n2 && e2(t2.prototype, n2), o2 && e2(t2, o2), t2;
    };
  }(), j = function e2(t2, n2, o2) {
    t2 === null && (t2 = Function.prototype);
    var i2 = Object.getOwnPropertyDescriptor(t2, n2);
    if (i2 === void 0) {
      var r2 = Object.getPrototypeOf(t2);
      return r2 === null ? void 0 : e2(r2, n2, o2);
    }
    if ("value" in i2)
      return i2.value;
    var s2 = i2.get;
    if (s2 !== void 0)
      return s2.call(o2);
  }, D = function(e2, t2) {
    if (typeof t2 != "function" && t2 !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t2);
    e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, enumerable: false, writable: true, configurable: true } }), t2 && (Object.setPrototypeOf ? Object.setPrototypeOf(e2, t2) : e2.__proto__ = t2);
  }, V = function(e2, t2) {
    if (!e2)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t2 || typeof t2 != "object" && typeof t2 != "function" ? e2 : t2;
  }, I = function() {
    function e2() {
      if (F(this, e2), this.__state = R.apply(this, arguments), this.__state === false)
        throw new Error("Failed to interpret color arguments");
      this.__state.a = this.__state.a || 1;
    }
    return P(e2, [{ key: "toString", value: function() {
      return t(this);
    } }, { key: "toHexString", value: function() {
      return t(this, true);
    } }, { key: "toOriginal", value: function() {
      return this.__state.conversion.write(this);
    } }]), e2;
  }();
  I.recalculateRGB = function(e2, t2, n2) {
    if (e2.__state.space === "HEX")
      e2.__state[t2] = N.component_from_hex(e2.__state.hex, n2);
    else {
      if (e2.__state.space !== "HSV")
        throw new Error("Corrupted color state");
      S.extend(e2.__state, N.hsv_to_rgb(e2.__state.h, e2.__state.s, e2.__state.v));
    }
  }, I.recalculateHSV = function(e2) {
    var t2 = N.rgb_to_hsv(e2.r, e2.g, e2.b);
    S.extend(e2.__state, { s: t2.s, v: t2.v }), S.isNaN(t2.h) ? S.isUndefined(e2.__state.h) && (e2.__state.h = 0) : e2.__state.h = t2.h;
  }, I.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], n(I.prototype, "r", 2), n(I.prototype, "g", 1), n(I.prototype, "b", 0), o(I.prototype, "h"), o(I.prototype, "s"), o(I.prototype, "v"), Object.defineProperty(I.prototype, "a", { get: function() {
    return this.__state.a;
  }, set: function(e2) {
    this.__state.a = e2;
  } }), Object.defineProperty(I.prototype, "hex", { get: function() {
    return !this.__state.space !== "HEX" && (this.__state.hex = N.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex;
  }, set: function(e2) {
    this.__state.space = "HEX", this.__state.hex = e2;
  } });
  var z = function() {
    function e2(t2, n2) {
      F(this, e2), this.initialValue = t2[n2], this.domElement = document.createElement("div"), this.object = t2, this.property = n2, this.__onChange = void 0, this.__onFinishChange = void 0;
    }
    return P(e2, [{ key: "onChange", value: function(e3) {
      return this.__onChange = e3, this;
    } }, { key: "onFinishChange", value: function(e3) {
      return this.__onFinishChange = e3, this;
    } }, { key: "setValue", value: function(e3) {
      return this.object[this.property] = e3, this.__onChange && this.__onChange.call(this, e3), this.updateDisplay(), this;
    } }, { key: "getValue", value: function() {
      return this.object[this.property];
    } }, { key: "updateDisplay", value: function() {
      return this;
    } }, { key: "isModified", value: function() {
      return this.initialValue !== this.getValue();
    } }]), e2;
  }(), M = { HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] }, G = {};
  S.each(M, function(e2, t2) {
    S.each(e2, function(e3) {
      G[e3] = t2;
    });
  });
  var U = /(\d+(\.\d+)?)px/, X = { makeSelectable: function(e2, t2) {
    e2 !== void 0 && e2.style !== void 0 && (e2.onselectstart = t2 ? function() {
      return false;
    } : function() {
    }, e2.style.MozUserSelect = t2 ? "auto" : "none", e2.style.KhtmlUserSelect = t2 ? "auto" : "none", e2.unselectable = t2 ? "on" : "off");
  }, makeFullscreen: function(e2, t2, n2) {
    var o2 = n2, i2 = t2;
    S.isUndefined(i2) && (i2 = true), S.isUndefined(o2) && (o2 = true), e2.style.position = "absolute", i2 && (e2.style.left = 0, e2.style.right = 0), o2 && (e2.style.top = 0, e2.style.bottom = 0);
  }, fakeEvent: function(e2, t2, n2, o2) {
    var i2 = n2 || {}, r2 = G[t2];
    if (!r2)
      throw new Error("Event type " + t2 + " not supported.");
    var s2 = document.createEvent(r2);
    switch (r2) {
      case "MouseEvents":
        var a2 = i2.x || i2.clientX || 0, l2 = i2.y || i2.clientY || 0;
        s2.initMouseEvent(t2, i2.bubbles || false, i2.cancelable || true, window, i2.clickCount || 1, 0, 0, a2, l2, false, false, false, false, 0, null);
        break;
      case "KeyboardEvents":
        var d2 = s2.initKeyboardEvent || s2.initKeyEvent;
        S.defaults(i2, { cancelable: true, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, keyCode: void 0, charCode: void 0 }), d2(t2, i2.bubbles || false, i2.cancelable, window, i2.ctrlKey, i2.altKey, i2.shiftKey, i2.metaKey, i2.keyCode, i2.charCode);
        break;
      default:
        s2.initEvent(t2, i2.bubbles || false, i2.cancelable || true);
    }
    S.defaults(s2, o2), e2.dispatchEvent(s2);
  }, bind: function(e2, t2, n2, o2) {
    var i2 = o2 || false;
    return e2.addEventListener ? e2.addEventListener(t2, n2, i2) : e2.attachEvent && e2.attachEvent("on" + t2, n2), X;
  }, unbind: function(e2, t2, n2, o2) {
    var i2 = o2 || false;
    return e2.removeEventListener ? e2.removeEventListener(t2, n2, i2) : e2.detachEvent && e2.detachEvent("on" + t2, n2), X;
  }, addClass: function(e2, t2) {
    if (e2.className === void 0)
      e2.className = t2;
    else if (e2.className !== t2) {
      var n2 = e2.className.split(/ +/);
      n2.indexOf(t2) === -1 && (n2.push(t2), e2.className = n2.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""));
    }
    return X;
  }, removeClass: function(e2, t2) {
    if (t2)
      if (e2.className === t2)
        e2.removeAttribute("class");
      else {
        var n2 = e2.className.split(/ +/), o2 = n2.indexOf(t2);
        o2 !== -1 && (n2.splice(o2, 1), e2.className = n2.join(" "));
      }
    else
      e2.className = void 0;
    return X;
  }, hasClass: function(e2, t2) {
    return new RegExp("(?:^|\\s+)" + t2 + "(?:\\s+|$)").test(e2.className) || false;
  }, getWidth: function(e2) {
    var t2 = getComputedStyle(e2);
    return i(t2["border-left-width"]) + i(t2["border-right-width"]) + i(t2["padding-left"]) + i(t2["padding-right"]) + i(t2.width);
  }, getHeight: function(e2) {
    var t2 = getComputedStyle(e2);
    return i(t2["border-top-width"]) + i(t2["border-bottom-width"]) + i(t2["padding-top"]) + i(t2["padding-bottom"]) + i(t2.height);
  }, getOffset: function(e2) {
    var t2 = e2, n2 = { left: 0, top: 0 };
    if (t2.offsetParent)
      do {
        n2.left += t2.offsetLeft, n2.top += t2.offsetTop, t2 = t2.offsetParent;
      } while (t2);
    return n2;
  }, isActive: function(e2) {
    return e2 === document.activeElement && (e2.type || e2.href);
  } }, K = function(e2) {
    function t2(e3, n2) {
      F(this, t2);
      var o2 = V(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3, n2)), i2 = o2;
      return o2.__prev = o2.getValue(), o2.__checkbox = document.createElement("input"), o2.__checkbox.setAttribute("type", "checkbox"), X.bind(o2.__checkbox, "change", function() {
        i2.setValue(!i2.__prev);
      }, false), o2.domElement.appendChild(o2.__checkbox), o2.updateDisplay(), o2;
    }
    return D(t2, z), P(t2, [{ key: "setValue", value: function(e3) {
      var n2 = j(t2.prototype.__proto__ || Object.getPrototypeOf(t2.prototype), "setValue", this).call(this, e3);
      return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), n2;
    } }, { key: "updateDisplay", value: function() {
      return this.getValue() === true ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = true, this.__prev = true) : (this.__checkbox.checked = false, this.__prev = false), j(t2.prototype.__proto__ || Object.getPrototypeOf(t2.prototype), "updateDisplay", this).call(this);
    } }]), t2;
  }(), Y = function(e2) {
    function t2(e3, n2, o2) {
      F(this, t2);
      var i2 = V(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3, n2)), r2 = o2, s2 = i2;
      if (i2.__select = document.createElement("select"), S.isArray(r2)) {
        var a2 = {};
        S.each(r2, function(e4) {
          a2[e4] = e4;
        }), r2 = a2;
      }
      return S.each(r2, function(e4, t3) {
        var n3 = document.createElement("option");
        n3.innerHTML = t3, n3.setAttribute("value", e4), s2.__select.appendChild(n3);
      }), i2.updateDisplay(), X.bind(i2.__select, "change", function() {
        var e4 = this.options[this.selectedIndex].value;
        s2.setValue(e4);
      }), i2.domElement.appendChild(i2.__select), i2;
    }
    return D(t2, z), P(t2, [{ key: "setValue", value: function(e3) {
      var n2 = j(t2.prototype.__proto__ || Object.getPrototypeOf(t2.prototype), "setValue", this).call(this, e3);
      return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), n2;
    } }, { key: "updateDisplay", value: function() {
      return X.isActive(this.__select) ? this : (this.__select.value = this.getValue(), j(t2.prototype.__proto__ || Object.getPrototypeOf(t2.prototype), "updateDisplay", this).call(this));
    } }]), t2;
  }(), J = function(e2) {
    function t2(e3, n2) {
      function o2() {
        r2.setValue(r2.__input.value);
      }
      F(this, t2);
      var i2 = V(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3, n2)), r2 = i2;
      return i2.__input = document.createElement("input"), i2.__input.setAttribute("type", "text"), X.bind(i2.__input, "keyup", o2), X.bind(i2.__input, "change", o2), X.bind(i2.__input, "blur", function() {
        r2.__onFinishChange && r2.__onFinishChange.call(r2, r2.getValue());
      }), X.bind(i2.__input, "keydown", function(e4) {
        e4.keyCode === 13 && this.blur();
      }), i2.updateDisplay(), i2.domElement.appendChild(i2.__input), i2;
    }
    return D(t2, z), P(t2, [{ key: "updateDisplay", value: function() {
      return X.isActive(this.__input) || (this.__input.value = this.getValue()), j(t2.prototype.__proto__ || Object.getPrototypeOf(t2.prototype), "updateDisplay", this).call(this);
    } }]), t2;
  }(), W = function(e2) {
    function t2(e3, n2, o2) {
      F(this, t2);
      var i2 = V(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3, n2)), s2 = o2 || {};
      return i2.__min = s2.min, i2.__max = s2.max, i2.__step = s2.step, S.isUndefined(i2.__step) ? i2.initialValue === 0 ? i2.__impliedStep = 1 : i2.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(i2.initialValue)) / Math.LN10)) / 10 : i2.__impliedStep = i2.__step, i2.__precision = r(i2.__impliedStep), i2;
    }
    return D(t2, z), P(t2, [{ key: "setValue", value: function(e3) {
      var n2 = e3;
      return this.__min !== void 0 && n2 < this.__min ? n2 = this.__min : this.__max !== void 0 && n2 > this.__max && (n2 = this.__max), this.__step !== void 0 && n2 % this.__step != 0 && (n2 = Math.round(n2 / this.__step) * this.__step), j(t2.prototype.__proto__ || Object.getPrototypeOf(t2.prototype), "setValue", this).call(this, n2);
    } }, { key: "min", value: function(e3) {
      return this.__min = e3, this;
    } }, { key: "max", value: function(e3) {
      return this.__max = e3, this;
    } }, { key: "step", value: function(e3) {
      return this.__step = e3, this.__impliedStep = e3, this.__precision = r(e3), this;
    } }]), t2;
  }(), Q = function(e2) {
    function t2(e3, n2, o2) {
      function i2() {
        l2.__onFinishChange && l2.__onFinishChange.call(l2, l2.getValue());
      }
      function r2(e4) {
        var t3 = d2 - e4.clientY;
        l2.setValue(l2.getValue() + t3 * l2.__impliedStep), d2 = e4.clientY;
      }
      function s2() {
        X.unbind(window, "mousemove", r2), X.unbind(window, "mouseup", s2), i2();
      }
      F(this, t2);
      var a2 = V(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3, n2, o2));
      a2.__truncationSuspended = false;
      var l2 = a2, d2 = void 0;
      return a2.__input = document.createElement("input"), a2.__input.setAttribute("type", "text"), X.bind(a2.__input, "change", function() {
        var e4 = parseFloat(l2.__input.value);
        S.isNaN(e4) || l2.setValue(e4);
      }), X.bind(a2.__input, "blur", function() {
        i2();
      }), X.bind(a2.__input, "mousedown", function(e4) {
        X.bind(window, "mousemove", r2), X.bind(window, "mouseup", s2), d2 = e4.clientY;
      }), X.bind(a2.__input, "keydown", function(e4) {
        e4.keyCode === 13 && (l2.__truncationSuspended = true, this.blur(), l2.__truncationSuspended = false, i2());
      }), a2.updateDisplay(), a2.domElement.appendChild(a2.__input), a2;
    }
    return D(t2, W), P(t2, [{ key: "updateDisplay", value: function() {
      return this.__input.value = this.__truncationSuspended ? this.getValue() : s(this.getValue(), this.__precision), j(t2.prototype.__proto__ || Object.getPrototypeOf(t2.prototype), "updateDisplay", this).call(this);
    } }]), t2;
  }(), q = function(e2) {
    function t2(e3, n2, o2, i2, r2) {
      function s2(e4) {
        e4.preventDefault();
        var t3 = _2.__background.getBoundingClientRect();
        return _2.setValue(a(e4.clientX, t3.left, t3.right, _2.__min, _2.__max)), false;
      }
      function l2() {
        X.unbind(window, "mousemove", s2), X.unbind(window, "mouseup", l2), _2.__onFinishChange && _2.__onFinishChange.call(_2, _2.getValue());
      }
      function d2(e4) {
        var t3 = e4.touches[0].clientX, n3 = _2.__background.getBoundingClientRect();
        _2.setValue(a(t3, n3.left, n3.right, _2.__min, _2.__max));
      }
      function c2() {
        X.unbind(window, "touchmove", d2), X.unbind(window, "touchend", c2), _2.__onFinishChange && _2.__onFinishChange.call(_2, _2.getValue());
      }
      F(this, t2);
      var u2 = V(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3, n2, { min: o2, max: i2, step: r2 })), _2 = u2;
      return u2.__background = document.createElement("div"), u2.__foreground = document.createElement("div"), X.bind(u2.__background, "mousedown", function(e4) {
        document.activeElement.blur(), X.bind(window, "mousemove", s2), X.bind(window, "mouseup", l2), s2(e4);
      }), X.bind(u2.__background, "touchstart", function(e4) {
        e4.touches.length === 1 && (X.bind(window, "touchmove", d2), X.bind(window, "touchend", c2), d2(e4));
      }), X.addClass(u2.__background, "slider"), X.addClass(u2.__foreground, "slider-fg"), u2.updateDisplay(), u2.__background.appendChild(u2.__foreground), u2.domElement.appendChild(u2.__background), u2;
    }
    return D(t2, W), P(t2, [{ key: "updateDisplay", value: function() {
      var e3 = (this.getValue() - this.__min) / (this.__max - this.__min);
      return this.__foreground.style.width = 100 * e3 + "%", j(t2.prototype.__proto__ || Object.getPrototypeOf(t2.prototype), "updateDisplay", this).call(this);
    } }]), t2;
  }(), Z = function(e2) {
    function t2(e3, n2, o2) {
      F(this, t2);
      var i2 = V(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3, n2)), r2 = i2;
      return i2.__button = document.createElement("div"), i2.__button.innerHTML = o2 === void 0 ? "Fire" : o2, X.bind(i2.__button, "click", function(e4) {
        return e4.preventDefault(), r2.fire(), false;
      }), X.addClass(i2.__button, "button"), i2.domElement.appendChild(i2.__button), i2;
    }
    return D(t2, z), P(t2, [{ key: "fire", value: function() {
      this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
    } }]), t2;
  }(), $ = function(e2) {
    function t2(e3, n2) {
      function o2(e4) {
        u2(e4), X.bind(window, "mousemove", u2), X.bind(window, "touchmove", u2), X.bind(window, "mouseup", r2), X.bind(window, "touchend", r2);
      }
      function i2(e4) {
        _2(e4), X.bind(window, "mousemove", _2), X.bind(window, "touchmove", _2), X.bind(window, "mouseup", s2), X.bind(window, "touchend", s2);
      }
      function r2() {
        X.unbind(window, "mousemove", u2), X.unbind(window, "touchmove", u2), X.unbind(window, "mouseup", r2), X.unbind(window, "touchend", r2), c2();
      }
      function s2() {
        X.unbind(window, "mousemove", _2), X.unbind(window, "touchmove", _2), X.unbind(window, "mouseup", s2), X.unbind(window, "touchend", s2), c2();
      }
      function a2() {
        var e4 = R(this.value);
        e4 !== false ? (p2.__color.__state = e4, p2.setValue(p2.__color.toOriginal())) : this.value = p2.__color.toString();
      }
      function c2() {
        p2.__onFinishChange && p2.__onFinishChange.call(p2, p2.__color.toOriginal());
      }
      function u2(e4) {
        e4.type.indexOf("touch") === -1 && e4.preventDefault();
        var t3 = p2.__saturation_field.getBoundingClientRect(), n3 = e4.touches && e4.touches[0] || e4, o3 = n3.clientX, i3 = n3.clientY, r3 = (o3 - t3.left) / (t3.right - t3.left), s3 = 1 - (i3 - t3.top) / (t3.bottom - t3.top);
        return s3 > 1 ? s3 = 1 : s3 < 0 && (s3 = 0), r3 > 1 ? r3 = 1 : r3 < 0 && (r3 = 0), p2.__color.v = s3, p2.__color.s = r3, p2.setValue(p2.__color.toOriginal()), false;
      }
      function _2(e4) {
        e4.type.indexOf("touch") === -1 && e4.preventDefault();
        var t3 = p2.__hue_field.getBoundingClientRect(), n3 = 1 - ((e4.touches && e4.touches[0] || e4).clientY - t3.top) / (t3.bottom - t3.top);
        return n3 > 1 ? n3 = 1 : n3 < 0 && (n3 = 0), p2.__color.h = 360 * n3, p2.setValue(p2.__color.toOriginal()), false;
      }
      F(this, t2);
      var h2 = V(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3, n2));
      h2.__color = new I(h2.getValue()), h2.__temp = new I(0);
      var p2 = h2;
      h2.domElement = document.createElement("div"), X.makeSelectable(h2.domElement, false), h2.__selector = document.createElement("div"), h2.__selector.className = "selector", h2.__saturation_field = document.createElement("div"), h2.__saturation_field.className = "saturation-field", h2.__field_knob = document.createElement("div"), h2.__field_knob.className = "field-knob", h2.__field_knob_border = "2px solid ", h2.__hue_knob = document.createElement("div"), h2.__hue_knob.className = "hue-knob", h2.__hue_field = document.createElement("div"), h2.__hue_field.className = "hue-field", h2.__input = document.createElement("input"), h2.__input.type = "text", h2.__input_textShadow = "0 1px 1px ", X.bind(h2.__input, "keydown", function(e4) {
        e4.keyCode === 13 && a2.call(this);
      }), X.bind(h2.__input, "blur", a2), X.bind(h2.__selector, "mousedown", function() {
        X.addClass(this, "drag").bind(window, "mouseup", function() {
          X.removeClass(p2.__selector, "drag");
        });
      }), X.bind(h2.__selector, "touchstart", function() {
        X.addClass(this, "drag").bind(window, "touchend", function() {
          X.removeClass(p2.__selector, "drag");
        });
      });
      var f2 = document.createElement("div");
      return S.extend(h2.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }), S.extend(h2.__field_knob.style, { position: "absolute", width: "12px", height: "12px", border: h2.__field_knob_border + (h2.__color.v < 0.5 ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1 }), S.extend(h2.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }), S.extend(h2.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }), S.extend(f2.style, { width: "100%", height: "100%", background: "none" }), l(f2, "top", "rgba(0,0,0,0)", "#000"), S.extend(h2.__hue_field.style, { width: "15px", height: "100px", border: "1px solid #555", cursor: "ns-resize", position: "absolute", top: "3px", right: "3px" }), d(h2.__hue_field), S.extend(h2.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: h2.__input_textShadow + "rgba(0,0,0,0.7)" }), X.bind(h2.__saturation_field, "mousedown", o2), X.bind(h2.__saturation_field, "touchstart", o2), X.bind(h2.__field_knob, "mousedown", o2), X.bind(h2.__field_knob, "touchstart", o2), X.bind(h2.__hue_field, "mousedown", i2), X.bind(h2.__hue_field, "touchstart", i2), h2.__saturation_field.appendChild(f2), h2.__selector.appendChild(h2.__field_knob), h2.__selector.appendChild(h2.__saturation_field), h2.__selector.appendChild(h2.__hue_field), h2.__hue_field.appendChild(h2.__hue_knob), h2.domElement.appendChild(h2.__input), h2.domElement.appendChild(h2.__selector), h2.updateDisplay(), h2;
    }
    return D(t2, z), P(t2, [{ key: "updateDisplay", value: function() {
      var e3 = R(this.getValue());
      if (e3 !== false) {
        var t3 = false;
        S.each(I.COMPONENTS, function(n3) {
          if (!S.isUndefined(e3[n3]) && !S.isUndefined(this.__color.__state[n3]) && e3[n3] !== this.__color.__state[n3])
            return t3 = true, {};
        }, this), t3 && S.extend(this.__color.__state, e3);
      }
      S.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
      var n2 = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0, o2 = 255 - n2;
      S.extend(this.__field_knob.style, { marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toHexString(), border: this.__field_knob_border + "rgb(" + n2 + "," + n2 + "," + n2 + ")" }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, l(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), S.extend(this.__input.style, { backgroundColor: this.__color.toHexString(), color: "rgb(" + n2 + "," + n2 + "," + n2 + ")", textShadow: this.__input_textShadow + "rgba(" + o2 + "," + o2 + "," + o2 + ",.7)" });
    } }]), t2;
  }(), ee = ["-moz-", "-o-", "-webkit-", "-ms-", ""], te = { load: function(e2, t2) {
    var n2 = t2 || document, o2 = n2.createElement("link");
    o2.type = "text/css", o2.rel = "stylesheet", o2.href = e2, n2.getElementsByTagName("head")[0].appendChild(o2);
  }, inject: function(e2, t2) {
    var n2 = t2 || document, o2 = document.createElement("style");
    o2.type = "text/css", o2.innerHTML = e2;
    var i2 = n2.getElementsByTagName("head")[0];
    try {
      i2.appendChild(o2);
    } catch (e3) {
    }
  } }, ne = function(e2, t2) {
    var n2 = e2[t2];
    return S.isArray(arguments[2]) || S.isObject(arguments[2]) ? new Y(e2, t2, arguments[2]) : S.isNumber(n2) ? S.isNumber(arguments[2]) && S.isNumber(arguments[3]) ? S.isNumber(arguments[4]) ? new q(e2, t2, arguments[2], arguments[3], arguments[4]) : new q(e2, t2, arguments[2], arguments[3]) : S.isNumber(arguments[4]) ? new Q(e2, t2, { min: arguments[2], max: arguments[3], step: arguments[4] }) : new Q(e2, t2, { min: arguments[2], max: arguments[3] }) : S.isString(n2) ? new J(e2, t2) : S.isFunction(n2) ? new Z(e2, t2, "") : S.isBoolean(n2) ? new K(e2, t2) : null;
  }, oe = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e2) {
    setTimeout(e2, 1e3 / 60);
  }, ie = function() {
    function e2() {
      F(this, e2), this.backgroundElement = document.createElement("div"), S.extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear", transition: "opacity 0.2s linear" }), X.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), S.extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear", transition: "transform 0.2s ease-out, opacity 0.2s linear" }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
      var t2 = this;
      X.bind(this.backgroundElement, "click", function() {
        t2.hide();
      });
    }
    return P(e2, [{ key: "show", value: function() {
      var e3 = this;
      this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), S.defer(function() {
        e3.backgroundElement.style.opacity = 1, e3.domElement.style.opacity = 1, e3.domElement.style.webkitTransform = "scale(1)";
      });
    } }, { key: "hide", value: function() {
      var e3 = this, t2 = function t3() {
        e3.domElement.style.display = "none", e3.backgroundElement.style.display = "none", X.unbind(e3.domElement, "webkitTransitionEnd", t3), X.unbind(e3.domElement, "transitionend", t3), X.unbind(e3.domElement, "oTransitionEnd", t3);
      };
      X.bind(this.domElement, "webkitTransitionEnd", t2), X.bind(this.domElement, "transitionend", t2), X.bind(this.domElement, "oTransitionEnd", t2), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)";
    } }, { key: "layout", value: function() {
      this.domElement.style.left = window.innerWidth / 2 - X.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - X.getHeight(this.domElement) / 2 + "px";
    } }]), e2;
  }(), re = function(e2) {
    if (e2 && typeof window != "undefined") {
      var t2 = document.createElement("style");
      return t2.setAttribute("type", "text/css"), t2.innerHTML = e2, document.head.appendChild(t2), e2;
    }
  }(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");
  te.inject(re);
  var se = "Default", ae = function() {
    try {
      return !!window.localStorage;
    } catch (e2) {
      return false;
    }
  }(), le = void 0, de = true, ce = void 0, ue = false, _e = [], he = function e2(t2) {
    var n2 = this, o2 = t2 || {};
    this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), X.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], o2 = S.defaults(o2, { closeOnTop: false, autoPlace: true, width: e2.DEFAULT_WIDTH }), o2 = S.defaults(o2, { resizable: o2.autoPlace, hideable: o2.autoPlace }), S.isUndefined(o2.load) ? o2.load = { preset: se } : o2.preset && (o2.load.preset = o2.preset), S.isUndefined(o2.parent) && o2.hideable && _e.push(this), o2.resizable = S.isUndefined(o2.parent) && o2.resizable, o2.autoPlace && S.isUndefined(o2.scrollable) && (o2.scrollable = true);
    var i2 = ae && localStorage.getItem(m(this, "isLocal")) === "true", r2 = void 0, s2 = void 0;
    if (Object.defineProperties(this, { parent: { get: function() {
      return o2.parent;
    } }, scrollable: { get: function() {
      return o2.scrollable;
    } }, autoPlace: { get: function() {
      return o2.autoPlace;
    } }, closeOnTop: { get: function() {
      return o2.closeOnTop;
    } }, preset: { get: function() {
      return n2.parent ? n2.getRoot().preset : o2.load.preset;
    }, set: function(e3) {
      n2.parent ? n2.getRoot().preset = e3 : o2.load.preset = e3, E(this), n2.revert();
    } }, width: { get: function() {
      return o2.width;
    }, set: function(e3) {
      o2.width = e3, w(n2, e3);
    } }, name: { get: function() {
      return o2.name;
    }, set: function(e3) {
      o2.name = e3, s2 && (s2.innerHTML = o2.name);
    } }, closed: { get: function() {
      return o2.closed;
    }, set: function(t3) {
      o2.closed = t3, o2.closed ? X.addClass(n2.__ul, e2.CLASS_CLOSED) : X.removeClass(n2.__ul, e2.CLASS_CLOSED), this.onResize(), n2.__closeButton && (n2.__closeButton.innerHTML = t3 ? e2.TEXT_OPEN : e2.TEXT_CLOSED);
    } }, load: { get: function() {
      return o2.load;
    } }, useLocalStorage: { get: function() {
      return i2;
    }, set: function(e3) {
      ae && (i2 = e3, e3 ? X.bind(window, "unload", r2) : X.unbind(window, "unload", r2), localStorage.setItem(m(n2, "isLocal"), e3));
    } } }), S.isUndefined(o2.parent)) {
      if (o2.closed = false, X.addClass(this.domElement, e2.CLASS_MAIN), X.makeSelectable(this.domElement, false), ae && i2) {
        n2.useLocalStorage = true;
        var a2 = localStorage.getItem(m(this, "gui"));
        a2 && (o2.load = JSON.parse(a2));
      }
      this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = e2.TEXT_CLOSED, X.addClass(this.__closeButton, e2.CLASS_CLOSE_BUTTON), o2.closeOnTop ? (X.addClass(this.__closeButton, e2.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (X.addClass(this.__closeButton, e2.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), X.bind(this.__closeButton, "click", function() {
        n2.closed = !n2.closed;
      });
    } else {
      o2.closed === void 0 && (o2.closed = true);
      var l2 = document.createTextNode(o2.name);
      X.addClass(l2, "controller-name"), s2 = c(n2, l2);
      X.addClass(this.__ul, e2.CLASS_CLOSED), X.addClass(s2, "title"), X.bind(s2, "click", function(e3) {
        return e3.preventDefault(), n2.closed = !n2.closed, false;
      }), o2.closed || (this.closed = false);
    }
    o2.autoPlace && (S.isUndefined(o2.parent) && (de && (ce = document.createElement("div"), X.addClass(ce, "dg"), X.addClass(ce, e2.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(ce), de = false), ce.appendChild(this.domElement), X.addClass(this.domElement, e2.CLASS_AUTO_PLACE)), this.parent || w(n2, o2.width)), this.__resizeHandler = function() {
      n2.onResizeDebounced();
    }, X.bind(window, "resize", this.__resizeHandler), X.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), X.bind(this.__ul, "transitionend", this.__resizeHandler), X.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), o2.resizable && y(this), r2 = function() {
      ae && localStorage.getItem(m(n2, "isLocal")) === "true" && localStorage.setItem(m(n2, "gui"), JSON.stringify(n2.getSaveObject()));
    }, this.saveToLocalStorageIfPossible = r2, o2.parent || function() {
      var e3 = n2.getRoot();
      e3.width += 1, S.defer(function() {
        e3.width -= 1;
      });
    }();
  };
  he.toggleHide = function() {
    ue = !ue, S.each(_e, function(e2) {
      e2.domElement.style.display = ue ? "none" : "";
    });
  }, he.CLASS_AUTO_PLACE = "a", he.CLASS_AUTO_PLACE_CONTAINER = "ac", he.CLASS_MAIN = "main", he.CLASS_CONTROLLER_ROW = "cr", he.CLASS_TOO_TALL = "taller-than-window", he.CLASS_CLOSED = "closed", he.CLASS_CLOSE_BUTTON = "close-button", he.CLASS_CLOSE_TOP = "close-top", he.CLASS_CLOSE_BOTTOM = "close-bottom", he.CLASS_DRAG = "drag", he.DEFAULT_WIDTH = 245, he.TEXT_CLOSED = "Close Controls", he.TEXT_OPEN = "Open Controls", he._keydownHandler = function(e2) {
    document.activeElement.type === "text" || e2.which !== 72 && e2.keyCode !== 72 || he.toggleHide();
  }, X.bind(window, "keydown", he._keydownHandler, false), S.extend(he.prototype, { add: function(e2, t2) {
    return f(this, e2, t2, { factoryArgs: Array.prototype.slice.call(arguments, 2) });
  }, addColor: function(e2, t2) {
    return f(this, e2, t2, { color: true });
  }, remove: function(e2) {
    this.__ul.removeChild(e2.__li), this.__controllers.splice(this.__controllers.indexOf(e2), 1);
    var t2 = this;
    S.defer(function() {
      t2.onResize();
    });
  }, destroy: function() {
    if (this.parent)
      throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
    this.autoPlace && ce.removeChild(this.domElement);
    var e2 = this;
    S.each(this.__folders, function(t2) {
      e2.removeFolder(t2);
    }), X.unbind(window, "keydown", he._keydownHandler, false), u(this);
  }, addFolder: function(e2) {
    if (this.__folders[e2] !== void 0)
      throw new Error('You already have a folder in this GUI by the name "' + e2 + '"');
    var t2 = { name: e2, parent: this };
    t2.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e2] && (t2.closed = this.load.folders[e2].closed, t2.load = this.load.folders[e2]);
    var n2 = new he(t2);
    this.__folders[e2] = n2;
    var o2 = c(this, n2.domElement);
    return X.addClass(o2, "folder"), n2;
  }, removeFolder: function(e2) {
    this.__ul.removeChild(e2.domElement.parentElement), delete this.__folders[e2.name], this.load && this.load.folders && this.load.folders[e2.name] && delete this.load.folders[e2.name], u(e2);
    var t2 = this;
    S.each(e2.__folders, function(t3) {
      e2.removeFolder(t3);
    }), S.defer(function() {
      t2.onResize();
    });
  }, open: function() {
    this.closed = false;
  }, close: function() {
    this.closed = true;
  }, onResize: function() {
    var e2 = this.getRoot();
    if (e2.scrollable) {
      var t2 = X.getOffset(e2.__ul).top, n2 = 0;
      S.each(e2.__ul.childNodes, function(t3) {
        e2.autoPlace && t3 === e2.__save_row || (n2 += X.getHeight(t3));
      }), window.innerHeight - t2 - 20 < n2 ? (X.addClass(e2.domElement, he.CLASS_TOO_TALL), e2.__ul.style.height = window.innerHeight - t2 - 20 + "px") : (X.removeClass(e2.domElement, he.CLASS_TOO_TALL), e2.__ul.style.height = "auto");
    }
    e2.__resize_handle && S.defer(function() {
      e2.__resize_handle.style.height = e2.__ul.offsetHeight + "px";
    }), e2.__closeButton && (e2.__closeButton.style.width = e2.width + "px");
  }, onResizeDebounced: S.debounce(function() {
    this.onResize();
  }, 50), remember: function() {
    if (S.isUndefined(le) && ((le = new ie()).domElement.innerHTML = `<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`), this.parent)
      throw new Error("You can only call remember on a top level GUI.");
    var e2 = this;
    S.each(Array.prototype.slice.call(arguments), function(t2) {
      e2.__rememberedObjects.length === 0 && v(e2), e2.__rememberedObjects.indexOf(t2) === -1 && e2.__rememberedObjects.push(t2);
    }), this.autoPlace && w(this, this.width);
  }, getRoot: function() {
    for (var e2 = this; e2.parent; )
      e2 = e2.parent;
    return e2;
  }, getSaveObject: function() {
    var e2 = this.load;
    return e2.closed = this.closed, this.__rememberedObjects.length > 0 && (e2.preset = this.preset, e2.remembered || (e2.remembered = {}), e2.remembered[this.preset] = x(this)), e2.folders = {}, S.each(this.__folders, function(t2, n2) {
      e2.folders[n2] = t2.getSaveObject();
    }), e2;
  }, save: function() {
    this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = x(this), _(this, false), this.saveToLocalStorageIfPossible();
  }, saveAs: function(e2) {
    this.load.remembered || (this.load.remembered = {}, this.load.remembered[se] = x(this, true)), this.load.remembered[e2] = x(this), this.preset = e2, g(this, e2, true), this.saveToLocalStorageIfPossible();
  }, revert: function(e2) {
    S.each(this.__controllers, function(t2) {
      this.getRoot().load.remembered ? p(e2 || this.getRoot(), t2) : t2.setValue(t2.initialValue), t2.__onFinishChange && t2.__onFinishChange.call(t2, t2.getValue());
    }, this), S.each(this.__folders, function(e3) {
      e3.revert(e3);
    }), e2 || _(this.getRoot(), false);
  }, listen: function(e2) {
    var t2 = this.__listening.length === 0;
    this.__listening.push(e2), t2 && C(this.__listening);
  }, updateDisplay: function() {
    S.each(this.__controllers, function(e2) {
      e2.updateDisplay();
    }), S.each(this.__folders, function(e2) {
      e2.updateDisplay();
    });
  } });
  var pe = { Color: I, math: N, interpret: R }, fe = { Controller: z, BooleanController: K, OptionController: Y, StringController: J, NumberController: W, NumberControllerBox: Q, NumberControllerSlider: q, FunctionController: Z, ColorController: $ }, me = { dom: X }, ge = { GUI: he }, be = he, ve = { color: pe, controllers: fe, dom: me, gui: ge, GUI: be };
  e.color = pe, e.controllers = fe, e.dom = me, e.gui = ge, e.GUI = be, e.default = ve, Object.defineProperty(e, "__esModule", { value: true });
});
function index(el, config) {
  const canvas = el;
  resizeCanvas();
  config = __spreadValues({
    IMMEDIATE: true,
    TRIGGER: "hover",
    SIM_RESOLUTION: 128,
    DYE_RESOLUTION: 1024,
    CAPTURE_RESOLUTION: 512,
    DENSITY_DISSIPATION: 1,
    VELOCITY_DISSIPATION: 0.2,
    PRESSURE: 0.8,
    PRESSURE_ITERATIONS: 20,
    CURL: 30,
    SPLAT_RADIUS: 0.25,
    SPLAT_FORCE: 6e3,
    SHADING: true,
    COLORFUL: true,
    COLOR_UPDATE_SPEED: 10,
    PAUSED: false,
    BACK_COLOR: { r: 0, g: 0, b: 0 },
    TRANSPARENT: false,
    BLOOM: true,
    BLOOM_ITERATIONS: 8,
    BLOOM_RESOLUTION: 256,
    BLOOM_INTENSITY: 0.8,
    BLOOM_THRESHOLD: 0.6,
    BLOOM_SOFT_KNEE: 0.7,
    SUNRAYS: true,
    SUNRAYS_RESOLUTION: 196,
    SUNRAYS_WEIGHT: 1
  }, config);
  function pointerPrototype() {
    this.id = -1;
    this.texcoordX = 0;
    this.texcoordY = 0;
    this.prevTexcoordX = 0;
    this.prevTexcoordY = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.down = false;
    this.moved = false;
    this.color = [30, 0, 300];
  }
  let pointers = [];
  let splatStack = [];
  let bloomFramebuffers = [];
  pointers.push(new pointerPrototype());
  const { gl, ext } = getWebGLContext(canvas);
  if (isMobile()) {
    config.DYE_RESOLUTION = 512;
  }
  if (!ext.supportLinearFiltering) {
    config.DYE_RESOLUTION = 512;
    config.SHADING = false;
    config.BLOOM = false;
    config.SUNRAYS = false;
  }
  function getWebGLContext(canvas2) {
    const params = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false };
    let gl2 = canvas2.getContext("webgl2", params);
    const isWebGL2 = !!gl2;
    if (!isWebGL2)
      gl2 = canvas2.getContext("webgl", params) || canvas2.getContext("experimental-webgl", params);
    let halfFloat;
    let supportLinearFiltering;
    if (isWebGL2) {
      gl2.getExtension("EXT_color_buffer_float");
      supportLinearFiltering = gl2.getExtension("OES_texture_float_linear");
    } else {
      halfFloat = gl2.getExtension("OES_texture_half_float");
      supportLinearFiltering = gl2.getExtension("OES_texture_half_float_linear");
    }
    gl2.clearColor(0, 0, 0, 1);
    const halfFloatTexType = isWebGL2 ? gl2.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;
    let formatRGBA;
    let formatRG;
    let formatR;
    if (isWebGL2) {
      formatRGBA = getSupportedFormat(gl2, gl2.RGBA16F, gl2.RGBA, halfFloatTexType);
      formatRG = getSupportedFormat(gl2, gl2.RG16F, gl2.RG, halfFloatTexType);
      formatR = getSupportedFormat(gl2, gl2.R16F, gl2.RED, halfFloatTexType);
    } else {
      formatRGBA = getSupportedFormat(gl2, gl2.RGBA, gl2.RGBA, halfFloatTexType);
      formatRG = getSupportedFormat(gl2, gl2.RGBA, gl2.RGBA, halfFloatTexType);
      formatR = getSupportedFormat(gl2, gl2.RGBA, gl2.RGBA, halfFloatTexType);
    }
    return {
      gl: gl2,
      ext: {
        formatRGBA,
        formatRG,
        formatR,
        halfFloatTexType,
        supportLinearFiltering
      }
    };
  }
  function getSupportedFormat(gl2, internalFormat, format, type) {
    if (!supportRenderTextureFormat(gl2, internalFormat, format, type)) {
      switch (internalFormat) {
        case gl2.R16F:
          return getSupportedFormat(gl2, gl2.RG16F, gl2.RG, type);
        case gl2.RG16F:
          return getSupportedFormat(gl2, gl2.RGBA16F, gl2.RGBA, type);
        default:
          return null;
      }
    }
    return {
      internalFormat,
      format
    };
  }
  function supportRenderTextureFormat(gl2, internalFormat, format, type) {
    let texture = gl2.createTexture();
    gl2.bindTexture(gl2.TEXTURE_2D, texture);
    gl2.texParameteri(gl2.TEXTURE_2D, gl2.TEXTURE_MIN_FILTER, gl2.NEAREST);
    gl2.texParameteri(gl2.TEXTURE_2D, gl2.TEXTURE_MAG_FILTER, gl2.NEAREST);
    gl2.texParameteri(gl2.TEXTURE_2D, gl2.TEXTURE_WRAP_S, gl2.CLAMP_TO_EDGE);
    gl2.texParameteri(gl2.TEXTURE_2D, gl2.TEXTURE_WRAP_T, gl2.CLAMP_TO_EDGE);
    gl2.texImage2D(gl2.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);
    let fbo = gl2.createFramebuffer();
    gl2.bindFramebuffer(gl2.FRAMEBUFFER, fbo);
    gl2.framebufferTexture2D(gl2.FRAMEBUFFER, gl2.COLOR_ATTACHMENT0, gl2.TEXTURE_2D, texture, 0);
    const status = gl2.checkFramebufferStatus(gl2.FRAMEBUFFER);
    return status == gl2.FRAMEBUFFER_COMPLETE;
  }
  function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }
  class Material {
    constructor(vertexShader, fragmentShaderSource) {
      this.vertexShader = vertexShader;
      this.fragmentShaderSource = fragmentShaderSource;
      this.programs = [];
      this.activeProgram = null;
      this.uniforms = [];
    }
    setKeywords(keywords) {
      let hash = 0;
      for (let i = 0; i < keywords.length; i++)
        hash += hashCode(keywords[i]);
      let program = this.programs[hash];
      if (program == null) {
        let fragmentShader = compileShader(gl.FRAGMENT_SHADER, this.fragmentShaderSource, keywords);
        program = createProgram(this.vertexShader, fragmentShader);
        this.programs[hash] = program;
      }
      if (program == this.activeProgram)
        return;
      this.uniforms = getUniforms(program);
      this.activeProgram = program;
    }
    bind() {
      gl.useProgram(this.activeProgram);
    }
  }
  class Program {
    constructor(vertexShader, fragmentShader) {
      this.uniforms = {};
      this.program = createProgram(vertexShader, fragmentShader);
      this.uniforms = getUniforms(this.program);
    }
    bind() {
      gl.useProgram(this.program);
    }
  }
  function createProgram(vertexShader, fragmentShader) {
    let program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
      throw gl.getProgramInfoLog(program);
    return program;
  }
  function getUniforms(program) {
    let uniforms = [];
    let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < uniformCount; i++) {
      let uniformName = gl.getActiveUniform(program, i).name;
      uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
    }
    return uniforms;
  }
  function compileShader(type, source, keywords) {
    source = addKeywords(source, keywords);
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
      throw gl.getShaderInfoLog(shader);
    return shader;
  }
  function addKeywords(source, keywords) {
    if (keywords == null)
      return source;
    let keywordsString = "";
    keywords.forEach((keyword) => {
      keywordsString += "#define " + keyword + "\n";
    });
    return keywordsString + source;
  }
  const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
    precision highp float;
    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;
    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`);
  const blurVertexShader = compileShader(gl.VERTEX_SHADER, `
    precision highp float;
    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform vec2 texelSize;
    void main () {
        vUv = aPosition * 0.5 + 0.5;
        float offset = 1.33333333;
        vL = vUv - texelSize * offset;
        vR = vUv + texelSize * offset;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`);
  const blurShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform sampler2D uTexture;
    void main () {
        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
        sum += texture2D(uTexture, vL) * 0.35294117;
        sum += texture2D(uTexture, vR) * 0.35294117;
        gl_FragColor = sum;
    }
`);
  const copyShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`);
  const clearShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;
    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`);
  const colorShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    uniform vec4 color;
    void main () {
        gl_FragColor = color;
    }
`);
  const checkerboardShader = compileShader(gl.FRAGMENT_SHADER, config.TRANSPARENT ? `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float aspectRatio;
    #define SCALE 25.0
    void main () {
        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
        float v = mod(uv.x + uv.y, 2.0);
        v = v * 0.1 + 0.8;
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
` : `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float aspectRatio;
    #define SCALE 25.0
    void main () {
        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
        float v = mod(uv.x + uv.y, 2.0);
        v = v * 0.1 + 0.8;
        gl_FragColor = vec4(vec3(v), 1.0);
    }
`);
  const displayShaderSource = `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uSunrays;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;
    vec3 linearToGamma (vec3 color) {
        color = max(color, vec3(0));
        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }
    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
    #ifdef SHADING
        vec3 lc = texture2D(uTexture, vL).rgb;
        vec3 rc = texture2D(uTexture, vR).rgb;
        vec3 tc = texture2D(uTexture, vT).rgb;
        vec3 bc = texture2D(uTexture, vB).rgb;
        float dx = length(rc) - length(lc);
        float dy = length(tc) - length(bc);
        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
        vec3 l = vec3(0.0, 0.0, 1.0);
        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
        c *= diffuse;
    #endif
    #ifdef BLOOM
        vec3 bloom = texture2D(uBloom, vUv).rgb;
    #endif
    #ifdef SUNRAYS
        float sunrays = texture2D(uSunrays, vUv).r;
        c *= sunrays;
    #ifdef BLOOM
        bloom *= sunrays;
    #endif
    #endif
    #ifdef BLOOM
        float noise = texture2D(uDithering, vUv * ditherScale).r;
        noise = noise * 2.0 - 1.0;
        bloom += noise / 255.0;
        bloom = linearToGamma(bloom);
        c += bloom;
    #endif
        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
    }
`;
  const bloomPrefilterShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec3 curve;
    uniform float threshold;
    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float br = max(c.r, max(c.g, c.b));
        float rq = clamp(br - curve.x, 0.0, curve.y);
        rq = curve.z * rq * rq;
        c *= max(rq, br - threshold) / max(br, 0.0001);
        gl_FragColor = vec4(c, 0.0);
    }
`);
  const bloomBlurShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum;
    }
`);
  const bloomFinalShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform float intensity;
    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum * intensity;
    }
`);
  const sunraysMaskShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    void main () {
        vec4 c = texture2D(uTexture, vUv);
        float br = max(c.r, max(c.g, c.b));
        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
        gl_FragColor = c;
    }
`);
  const sunraysShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float weight;
    #define ITERATIONS 16
    void main () {
        float Density = 0.3;
        float Decay = 0.95;
        float Exposure = 0.7;
        vec2 coord = vUv;
        vec2 dir = vUv - 0.5;
        dir *= 1.0 / float(ITERATIONS) * Density;
        float illuminationDecay = 1.0;
        float color = texture2D(uTexture, vUv).a;
        for (int i = 0; i < ITERATIONS; i++)
        {
            coord -= dir;
            float col = texture2D(uTexture, coord).a;
            color += col * illuminationDecay * weight;
            illuminationDecay *= Decay;
        }
        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
    }
`);
  const splatShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;
    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
`);
  const advectionShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;
    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;
        vec2 iuv = floor(st);
        vec2 fuv = fract(st);
        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }
    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`, ext.supportLinearFiltering ? null : ["MANUAL_FILTERING"]);
  const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;
        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }
        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
`);
  const curlShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
`);
  const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;
    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;
        vec2 vel = texture2D(uVelocity, vUv).xy;
        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
    }
`);
  const pressureShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;
    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
`);
  const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`);
  const blit = (() => {
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);
    return (destination) => {
      gl.bindFramebuffer(gl.FRAMEBUFFER, destination);
      gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    };
  })();
  let dye;
  let velocity;
  let divergence;
  let curl;
  let pressure;
  let bloom;
  let sunrays;
  let sunraysTemp;
  let ditheringTexture = createTextureAsync();
  const blurProgram = new Program(blurVertexShader, blurShader);
  const copyProgram = new Program(baseVertexShader, copyShader);
  const clearProgram = new Program(baseVertexShader, clearShader);
  const colorProgram = new Program(baseVertexShader, colorShader);
  const checkerboardProgram = new Program(baseVertexShader, checkerboardShader);
  const bloomPrefilterProgram = new Program(baseVertexShader, bloomPrefilterShader);
  const bloomBlurProgram = new Program(baseVertexShader, bloomBlurShader);
  const bloomFinalProgram = new Program(baseVertexShader, bloomFinalShader);
  const sunraysMaskProgram = new Program(baseVertexShader, sunraysMaskShader);
  const sunraysProgram = new Program(baseVertexShader, sunraysShader);
  const splatProgram = new Program(baseVertexShader, splatShader);
  const advectionProgram = new Program(baseVertexShader, advectionShader);
  const divergenceProgram = new Program(baseVertexShader, divergenceShader);
  const curlProgram = new Program(baseVertexShader, curlShader);
  const vorticityProgram = new Program(baseVertexShader, vorticityShader);
  const pressureProgram = new Program(baseVertexShader, pressureShader);
  const gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader);
  const displayMaterial = new Material(baseVertexShader, displayShaderSource);
  function initFramebuffers() {
    let simRes = getResolution(config.SIM_RESOLUTION);
    let dyeRes = getResolution(config.DYE_RESOLUTION);
    const texType = ext.halfFloatTexType;
    const rgba = ext.formatRGBA;
    const rg = ext.formatRG;
    const r = ext.formatR;
    const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
    if (dye == null)
      dye = createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
    else
      dye = resizeDoubleFBO(dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
    if (velocity == null)
      velocity = createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
    else
      velocity = resizeDoubleFBO(velocity, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
    divergence = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
    curl = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
    pressure = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
    initBloomFramebuffers();
    initSunraysFramebuffers();
  }
  function initBloomFramebuffers() {
    let res = getResolution(config.BLOOM_RESOLUTION);
    const texType = ext.halfFloatTexType;
    const rgba = ext.formatRGBA;
    const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
    bloom = createFBO(res.width, res.height, rgba.internalFormat, rgba.format, texType, filtering);
    bloomFramebuffers.length = 0;
    for (let i = 0; i < config.BLOOM_ITERATIONS; i++) {
      let width = res.width >> i + 1;
      let height = res.height >> i + 1;
      if (width < 2 || height < 2)
        break;
      let fbo = createFBO(width, height, rgba.internalFormat, rgba.format, texType, filtering);
      bloomFramebuffers.push(fbo);
    }
  }
  function initSunraysFramebuffers() {
    let res = getResolution(config.SUNRAYS_RESOLUTION);
    const texType = ext.halfFloatTexType;
    const r = ext.formatR;
    const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
    sunrays = createFBO(res.width, res.height, r.internalFormat, r.format, texType, filtering);
    sunraysTemp = createFBO(res.width, res.height, r.internalFormat, r.format, texType, filtering);
  }
  function createFBO(w, h, internalFormat, format, type, param) {
    gl.activeTexture(gl.TEXTURE0);
    let texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
    let fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    gl.viewport(0, 0, w, h);
    gl.clear(gl.COLOR_BUFFER_BIT);
    let texelSizeX = 1 / w;
    let texelSizeY = 1 / h;
    return {
      texture,
      fbo,
      width: w,
      height: h,
      texelSizeX,
      texelSizeY,
      attach(id) {
        gl.activeTexture(gl.TEXTURE0 + id);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        return id;
      }
    };
  }
  function createDoubleFBO(w, h, internalFormat, format, type, param) {
    let fbo1 = createFBO(w, h, internalFormat, format, type, param);
    let fbo2 = createFBO(w, h, internalFormat, format, type, param);
    return {
      width: w,
      height: h,
      texelSizeX: fbo1.texelSizeX,
      texelSizeY: fbo1.texelSizeY,
      get read() {
        return fbo1;
      },
      set read(value) {
        fbo1 = value;
      },
      get write() {
        return fbo2;
      },
      set write(value) {
        fbo2 = value;
      },
      swap() {
        let temp = fbo1;
        fbo1 = fbo2;
        fbo2 = temp;
      }
    };
  }
  function resizeFBO(target, w, h, internalFormat, format, type, param) {
    let newFBO = createFBO(w, h, internalFormat, format, type, param);
    copyProgram.bind();
    gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
    blit(newFBO.fbo);
    return newFBO;
  }
  function resizeDoubleFBO(target, w, h, internalFormat, format, type, param) {
    if (target.width == w && target.height == h)
      return target;
    target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param);
    target.write = createFBO(w, h, internalFormat, format, type, param);
    target.width = w;
    target.height = h;
    target.texelSizeX = 1 / w;
    target.texelSizeY = 1 / h;
    return target;
  }
  function createTextureAsync(url) {
    let texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));
    let obj = {
      texture,
      width: 1,
      height: 1,
      attach(id) {
        gl.activeTexture(gl.TEXTURE0 + id);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        return id;
      }
    };
    let image = new Image();
    image.onload = () => {
      obj.width = image.width;
      obj.height = image.height;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
    };
    image.src = url;
    return obj;
  }
  function updateKeywords() {
    let displayKeywords = [];
    if (config.SHADING)
      displayKeywords.push("SHADING");
    if (config.BLOOM)
      displayKeywords.push("BLOOM");
    if (config.SUNRAYS)
      displayKeywords.push("SUNRAYS");
    displayMaterial.setKeywords(displayKeywords);
  }
  updateKeywords();
  initFramebuffers();
  config.IMMEDIATE && multipleSplats(parseInt(Math.random() * 20) + 5);
  let lastUpdateTime = Date.now();
  let colorUpdateTimer = 0;
  update();
  function update() {
    const dt = calcDeltaTime();
    if (resizeCanvas())
      initFramebuffers();
    updateColors(dt);
    applyInputs();
    if (!config.PAUSED)
      step(dt);
    render(null);
    requestAnimationFrame(update);
  }
  function calcDeltaTime() {
    let now = Date.now();
    let dt = (now - lastUpdateTime) / 1e3;
    dt = Math.min(dt, 0.016666);
    lastUpdateTime = now;
    return dt;
  }
  function resizeCanvas() {
    let width = scaleByPixelRatio(canvas.clientWidth);
    let height = scaleByPixelRatio(canvas.clientHeight);
    if (canvas.width != width || canvas.height != height) {
      canvas.width = width;
      canvas.height = height;
      return true;
    }
    return false;
  }
  function updateColors(dt) {
    if (!config.COLORFUL)
      return;
    colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
    if (colorUpdateTimer >= 1) {
      colorUpdateTimer = wrap(colorUpdateTimer, 0, 1);
      pointers.forEach((p) => {
        p.color = generateColor();
      });
    }
  }
  function applyInputs() {
    if (splatStack.length > 0)
      multipleSplats(splatStack.pop());
    pointers.forEach((p) => {
      if (p.moved) {
        p.moved = false;
        splatPointer(p);
      }
    });
  }
  function step(dt) {
    gl.disable(gl.BLEND);
    gl.viewport(0, 0, velocity.width, velocity.height);
    curlProgram.bind();
    gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
    blit(curl.fbo);
    vorticityProgram.bind();
    gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
    gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
    gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
    gl.uniform1f(vorticityProgram.uniforms.dt, dt);
    blit(velocity.write.fbo);
    velocity.swap();
    divergenceProgram.bind();
    gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
    blit(divergence.fbo);
    clearProgram.bind();
    gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
    gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
    blit(pressure.write.fbo);
    pressure.swap();
    pressureProgram.bind();
    gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
    for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
      gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
      blit(pressure.write.fbo);
      pressure.swap();
    }
    gradienSubtractProgram.bind();
    gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
    gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
    blit(velocity.write.fbo);
    velocity.swap();
    advectionProgram.bind();
    gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    if (!ext.supportLinearFiltering)
      gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);
    let velocityId = velocity.read.attach(0);
    gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
    gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
    gl.uniform1f(advectionProgram.uniforms.dt, dt);
    gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
    blit(velocity.write.fbo);
    velocity.swap();
    gl.viewport(0, 0, dye.width, dye.height);
    if (!ext.supportLinearFiltering)
      gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);
    gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
    gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
    gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
    blit(dye.write.fbo);
    dye.swap();
  }
  function render(target) {
    if (config.BLOOM)
      applyBloom(dye.read, bloom);
    if (config.SUNRAYS) {
      applySunrays(dye.read, dye.write, sunrays);
      blur(sunrays, sunraysTemp, 1);
    }
    if (target == null || !config.TRANSPARENT) {
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.enable(gl.BLEND);
    } else {
      gl.disable(gl.BLEND);
    }
    let width = target == null ? gl.drawingBufferWidth : target.width;
    let height = target == null ? gl.drawingBufferHeight : target.height;
    gl.viewport(0, 0, width, height);
    let fbo = target == null ? null : target.fbo;
    if (!config.TRANSPARENT)
      drawColor(fbo, normalizeColor(config.BACK_COLOR));
    if (target == null && config.TRANSPARENT)
      drawCheckerboard(fbo);
    drawDisplay(fbo, width, height);
  }
  function drawColor(fbo, color) {
    colorProgram.bind();
    gl.uniform4f(colorProgram.uniforms.color, color.r, color.g, color.b, 1);
    blit(fbo);
  }
  function drawCheckerboard(fbo) {
    checkerboardProgram.bind();
    gl.uniform1f(checkerboardProgram.uniforms.aspectRatio, canvas.width / canvas.height);
    blit(fbo);
  }
  function drawDisplay(fbo, width, height) {
    displayMaterial.bind();
    if (config.SHADING)
      gl.uniform2f(displayMaterial.uniforms.texelSize, 1 / width, 1 / height);
    gl.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0));
    if (config.BLOOM) {
      gl.uniform1i(displayMaterial.uniforms.uBloom, bloom.attach(1));
      gl.uniform1i(displayMaterial.uniforms.uDithering, ditheringTexture.attach(2));
      let scale = getTextureScale(ditheringTexture, width, height);
      gl.uniform2f(displayMaterial.uniforms.ditherScale, scale.x, scale.y);
    }
    if (config.SUNRAYS)
      gl.uniform1i(displayMaterial.uniforms.uSunrays, sunrays.attach(3));
    blit(fbo);
  }
  function applyBloom(source, destination) {
    if (bloomFramebuffers.length < 2)
      return;
    let last = destination;
    gl.disable(gl.BLEND);
    bloomPrefilterProgram.bind();
    let knee = config.BLOOM_THRESHOLD * config.BLOOM_SOFT_KNEE + 1e-4;
    let curve0 = config.BLOOM_THRESHOLD - knee;
    let curve1 = knee * 2;
    let curve2 = 0.25 / knee;
    gl.uniform3f(bloomPrefilterProgram.uniforms.curve, curve0, curve1, curve2);
    gl.uniform1f(bloomPrefilterProgram.uniforms.threshold, config.BLOOM_THRESHOLD);
    gl.uniform1i(bloomPrefilterProgram.uniforms.uTexture, source.attach(0));
    gl.viewport(0, 0, last.width, last.height);
    blit(last.fbo);
    bloomBlurProgram.bind();
    for (let i = 0; i < bloomFramebuffers.length; i++) {
      let dest = bloomFramebuffers[i];
      gl.uniform2f(bloomBlurProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);
      gl.uniform1i(bloomBlurProgram.uniforms.uTexture, last.attach(0));
      gl.viewport(0, 0, dest.width, dest.height);
      blit(dest.fbo);
      last = dest;
    }
    gl.blendFunc(gl.ONE, gl.ONE);
    gl.enable(gl.BLEND);
    for (let i = bloomFramebuffers.length - 2; i >= 0; i--) {
      let baseTex = bloomFramebuffers[i];
      gl.uniform2f(bloomBlurProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);
      gl.uniform1i(bloomBlurProgram.uniforms.uTexture, last.attach(0));
      gl.viewport(0, 0, baseTex.width, baseTex.height);
      blit(baseTex.fbo);
      last = baseTex;
    }
    gl.disable(gl.BLEND);
    bloomFinalProgram.bind();
    gl.uniform2f(bloomFinalProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);
    gl.uniform1i(bloomFinalProgram.uniforms.uTexture, last.attach(0));
    gl.uniform1f(bloomFinalProgram.uniforms.intensity, config.BLOOM_INTENSITY);
    gl.viewport(0, 0, destination.width, destination.height);
    blit(destination.fbo);
  }
  function applySunrays(source, mask, destination) {
    gl.disable(gl.BLEND);
    sunraysMaskProgram.bind();
    gl.uniform1i(sunraysMaskProgram.uniforms.uTexture, source.attach(0));
    gl.viewport(0, 0, mask.width, mask.height);
    blit(mask.fbo);
    sunraysProgram.bind();
    gl.uniform1f(sunraysProgram.uniforms.weight, config.SUNRAYS_WEIGHT);
    gl.uniform1i(sunraysProgram.uniforms.uTexture, mask.attach(0));
    gl.viewport(0, 0, destination.width, destination.height);
    blit(destination.fbo);
  }
  function blur(target, temp, iterations) {
    blurProgram.bind();
    for (let i = 0; i < iterations; i++) {
      gl.uniform2f(blurProgram.uniforms.texelSize, target.texelSizeX, 0);
      gl.uniform1i(blurProgram.uniforms.uTexture, target.attach(0));
      blit(temp.fbo);
      gl.uniform2f(blurProgram.uniforms.texelSize, 0, target.texelSizeY);
      gl.uniform1i(blurProgram.uniforms.uTexture, temp.attach(0));
      blit(target.fbo);
    }
  }
  function splatPointer(pointer) {
    let dx = pointer.deltaX * config.SPLAT_FORCE;
    let dy = pointer.deltaY * config.SPLAT_FORCE;
    splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color);
  }
  function multipleSplats(amount) {
    for (let i = 0; i < amount; i++) {
      const color = generateColor();
      color.r *= 10;
      color.g *= 10;
      color.b *= 10;
      const x = Math.random();
      const y = Math.random();
      const dx = 1e3 * (Math.random() - 0.5);
      const dy = 1e3 * (Math.random() - 0.5);
      splat(x, y, dx, dy, color);
    }
  }
  function splat(x, y, dx, dy, color) {
    gl.viewport(0, 0, velocity.width, velocity.height);
    splatProgram.bind();
    gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
    gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
    gl.uniform2f(splatProgram.uniforms.point, x, y);
    gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0);
    gl.uniform1f(splatProgram.uniforms.radius, correctRadius(config.SPLAT_RADIUS / 100));
    blit(velocity.write.fbo);
    velocity.swap();
    gl.viewport(0, 0, dye.width, dye.height);
    gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
    gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
    blit(dye.write.fbo);
    dye.swap();
  }
  function correctRadius(radius) {
    let aspectRatio = canvas.width / canvas.height;
    if (aspectRatio > 1)
      radius *= aspectRatio;
    return radius;
  }
  canvas.addEventListener("mousedown", (e) => {
    let posX = scaleByPixelRatio(e.offsetX);
    let posY = scaleByPixelRatio(e.offsetY);
    let pointer = pointers.find((p) => p.id == -1);
    if (pointer == null)
      pointer = new pointerPrototype();
    updatePointerDownData(pointer, -1, posX, posY);
  });
  setTimeout(() => {
    canvas.addEventListener("mousemove", (e) => {
      let posX = scaleByPixelRatio(e.offsetX);
      let posY = scaleByPixelRatio(e.offsetY);
      updatePointerMoveData(pointers[0], posX, posY);
    });
  }, 500);
  window.addEventListener("mouseup", () => {
    updatePointerUpData(pointers[0]);
  });
  canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    const touches = e.targetTouches;
    while (touches.length >= pointers.length)
      pointers.push(new pointerPrototype());
    for (let i = 0; i < touches.length; i++) {
      let posX = scaleByPixelRatio(touches[i].pageX);
      let posY = scaleByPixelRatio(touches[i].pageY);
      updatePointerDownData(pointers[i + 1], touches[i].identifier, posX, posY);
    }
  });
  canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const touches = e.targetTouches;
    for (let i = 0; i < touches.length; i++) {
      let posX = scaleByPixelRatio(touches[i].pageX);
      let posY = scaleByPixelRatio(touches[i].pageY);
      updatePointerMoveData(pointers[i + 1], posX, posY);
    }
  }, false);
  window.addEventListener("touchend", (e) => {
    const touches = e.changedTouches;
    for (let i = 0; i < touches.length; i++) {
      let pointer = pointers.find((p) => p.id == touches[i].identifier);
      updatePointerUpData(pointer);
    }
  });
  window.addEventListener("keydown", (e) => {
    if (e.code === "KeyP")
      config.PAUSED = !config.PAUSED;
    if (e.key === " ")
      splatStack.push(parseInt(Math.random() * 20) + 5);
  });
  function updatePointerDownData(pointer, id, posX, posY) {
    pointer.id = id;
    pointer.down = true;
    pointer.moved = false;
    pointer.texcoordX = posX / canvas.width;
    pointer.texcoordY = 1 - posY / canvas.height;
    pointer.prevTexcoordX = pointer.texcoordX;
    pointer.prevTexcoordY = pointer.texcoordY;
    pointer.deltaX = 0;
    pointer.deltaY = 0;
    pointer.color = generateColor();
  }
  function updatePointerMoveData(pointer, posX, posY) {
    if (config.TRIGGER === "click") {
      pointer.moved = pointer.down;
    }
    pointer.prevTexcoordX = pointer.texcoordX;
    pointer.prevTexcoordY = pointer.texcoordY;
    pointer.texcoordX = posX / canvas.width;
    pointer.texcoordY = 1 - posY / canvas.height;
    pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
    pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
    if (config.TRIGGER === "hover") {
      pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
    }
  }
  function updatePointerUpData(pointer) {
    pointer.down = false;
  }
  function correctDeltaX(delta) {
    let aspectRatio = canvas.width / canvas.height;
    if (aspectRatio < 1)
      delta *= aspectRatio;
    return delta;
  }
  function correctDeltaY(delta) {
    let aspectRatio = canvas.width / canvas.height;
    if (aspectRatio > 1)
      delta /= aspectRatio;
    return delta;
  }
  function generateColor() {
    let c = HSVtoRGB(Math.random(), 1, 1);
    c.r *= 0.15;
    c.g *= 0.15;
    c.b *= 0.15;
    return c;
  }
  function HSVtoRGB(h, s, v) {
    let r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0:
        r = v, g = t, b = p;
        break;
      case 1:
        r = q, g = v, b = p;
        break;
      case 2:
        r = p, g = v, b = t;
        break;
      case 3:
        r = p, g = q, b = v;
        break;
      case 4:
        r = t, g = p, b = v;
        break;
      case 5:
        r = v, g = p, b = q;
        break;
    }
    return {
      r,
      g,
      b
    };
  }
  function normalizeColor(input) {
    let output = {
      r: input.r / 255,
      g: input.g / 255,
      b: input.b / 255
    };
    return output;
  }
  function wrap(value, min, max) {
    let range = max - min;
    if (range == 0)
      return min;
    return (value - min) % range + min;
  }
  function getResolution(resolution) {
    let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
    if (aspectRatio < 1)
      aspectRatio = 1 / aspectRatio;
    let min = Math.round(resolution);
    let max = Math.round(resolution * aspectRatio);
    if (gl.drawingBufferWidth > gl.drawingBufferHeight)
      return { width: max, height: min };
    else
      return { width: min, height: max };
  }
  function getTextureScale(texture, width, height) {
    return {
      x: width / texture.width,
      y: height / texture.height
    };
  }
  function scaleByPixelRatio(input) {
    let pixelRatio = window.devicePixelRatio || 1;
    return Math.floor(input * pixelRatio);
  }
  function hashCode(s) {
    if (s.length == 0)
      return 0;
    let hash = 0;
    for (let i = 0; i < s.length; i++) {
      hash = (hash << 5) - hash + s.charCodeAt(i);
      hash |= 0;
    }
    return hash;
  }
}
export { index as default };
