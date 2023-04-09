/*｜by Akawatav｜tfunction｜v1.0.0｜関数追加するだけ｜*/
var getRandom = function (min, max) {
    return (max > min) ? Math.floor(Math.random() * (max + 1 - min)) + min : NaN;
};
var division = function (number1, number2) {
    Math.floor(number1 / number2);
};
var percent = function (num1, num2) { return num1 / 100 * num2; };
var get = {
    byid: function (name) { return document.getElementById(name); },
    byclass: function (name) { return document.getElementsByClassName(name); },
    bytag: function (name) { return document.getElementsByTagName(name); },
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    hour: new Date().getHours(),
    minutes: new Date().getMinutes(),
    sec: new Date().getSeconds(),
    mllsec: new Date().getMilliseconds(),
    day: ['日', '月', '火', '水', '木', '金', '土'][new Date().getDay()],
    pi: 3.1415926535897932384626433832795028841971693993,
    triangle: function (height, base) { return height * base / 2; },
    square: function (height, width) { return height * width; },
    circle: function (radius) { return (Math.pow(radius, 2)) * get.pi; },
    queryall: function (name) { return document.querySelectorAll(name); },
    query: function (name) { return document.querySelector(name); }
};
var query = {
    single: function (name) { return document.querySelector(name); },
    all: function (name) { return document.querySelectorAll(name); }
};
var log = function (log) { return console.log(log); };
var root = {
    square: function (num) { return Math.pow(num, 0.5); },
    cube: function (num) { return Math.pow(num, (1 / 3)); }
};
var portion = {
    integer: function (num) { return Math.trunc(num); },
    decimal: function (num) { return (num > -1) ? parseFloat('0.' + ('' + num).split('.')[1]) : parseFloat('-0.' + ('' + num).split('.')[1]); }
};
var tfunction = {
    version: "v1.0.5",
    function: [
        "jfunction",
        "get",
        "getRandom",
        "log",
        "division",
        "query",
        "root",
        "portion",
        "percent",
        "$",
        "wait",
        "changesgin",
        "Absolute",
        "minus",
        "factorial",
        "parse",
        "pass",
        "customselector",
        "repeat",
        "define"
    ],
    number: 19
};
var $ = jfunction;
var wait = function (milliseconds) {
    var start = new Date().getTime();
    var end = 0;
    while ((end - start) < milliseconds) {
        end = new Date().getTime();
    }
    return this;
};
var changesgin = function (num) { return num * -1; };
var Absolute = function (num) { return (0 > num) ? num * -1 : num; };
var minus = function (num) { return (0 > num) ? num : num * -1; };
var factorial = {
    none: function (n) { return (n === 0) ? 1 : n * factorial.none(n - 1); },
    double: function (n) { return (Math.pow(2, (n / 2))) * factorial.none(n / 2); }
};
var parse = function (str) { return (str == 'true') ? true : false; };
var pass = function () { return this; };
var customselector = function (value) { return function (value2) {
    switch (value2.toLowerCase()) {
        case "id":
        case "byid":
            return get.byid(value);
            break;
        case "class":
        case "byclass":
            return get.byclass(value);
            break;
        case "tag":
        case "bytag":
            return get.bytag(value);
            break;
        default:
            return null;
            break;
    }
}; };
var repeat = function (callback, num) {
    if (typeof num == "number") {
        if (num > 0) {
            for (var i = 0; i < num; i++) {
                callback();
            }
        }
    }
    return this;
};
var define = function (name, value) {
    Object.defineProperty(window, name, {
        value: value,
        writable: false
    });
};
wait().done = function (callback) { return callback(); };
var gettype = function (obj) {
    if (typeof obj === "undefined") {
        return "undefined";
    }
    else if (obj === null) {
        return "null";
    }
    else {
        var className = Object.prototype.toString.call(obj);
        var matches = className.match(/^[objects(.*)]$/);
        if (matches.length > 0) {
            return matches[1];
        }
        else {
            return className;
        }
    }
};
