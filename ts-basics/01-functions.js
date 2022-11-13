"use strict";
exports.__esModule = true;
exports.getName = exports.fetchData = exports.printFormat = exports.format = exports.addString = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports["default"] = addNumbers;
var addString = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return "".concat(str1, " ").concat(str2);
};
exports.addString = addString;
// union type (for arrow functions where it returns something)
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
// type void when function doesn't return anything
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
// for defining promise
var fetchData = function (url) {
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
// for multiple arguments REST params
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(" "));
}
function getName(user) {
    var _a, _b;
    // return `${user?.first} ${user?.last}`; //optional chaining operator
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "first", " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "last"); // null coalescing operator
    // if left side is null then use right side code
}
exports.getName = getName;
