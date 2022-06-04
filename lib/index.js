"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teaspoons = exports.Tablespoons = exports.Cups = void 0;
var Cups = function (milliliters) {
    var cups = milliliters / 250;
    var _a = divmod(cups, 1), quotient = _a[0], remainder = _a[1];
    if (remainder < 0.12) {
        if (quotient === 0) {
            return "0";
        }
        else {
            return quotient.toString();
        }
    }
    else if (remainder < 0.29) {
        return toStringWithoutZero(quotient) + "¼";
    }
    else if (remainder < 0.42) {
        return toStringWithoutZero(quotient) + "⅓";
    }
    else if (remainder < 0.59) {
        return toStringWithoutZero(quotient) + "½";
    }
    else if (remainder < 0.7) {
        return toStringWithoutZero(quotient) + "⅔";
    }
    else if (remainder < 0.86) {
        return toStringWithoutZero(quotient) + "¾";
    }
    else {
        return (quotient + 1).toString();
    }
};
exports.Cups = Cups;
var Tablespoons = function (milliliters) {
    return Math.round(milliliters / 15).toString();
};
exports.Tablespoons = Tablespoons;
var Teaspoons = function (milliliters) {
    var teaspoons = milliliters / 5;
    var _a = divmod(teaspoons, 1), quotient = _a[0], remainder = _a[1];
    if (remainder < 0.125) {
        if (quotient === 0) {
            return "0";
        }
        else {
            return quotient.toString();
        }
    }
    else if (remainder < 0.375) {
        return toStringWithoutZero(quotient) + "¼";
    }
    else if (remainder < 0.625) {
        return toStringWithoutZero(quotient) + "½";
    }
    else if (remainder < 0.875) {
        return toStringWithoutZero(quotient) + "¾";
    }
    else {
        return (quotient + 1).toString();
    }
};
exports.Teaspoons = Teaspoons;
var toStringWithoutZero = function (quotient) {
    if (quotient === 0) {
        return "";
    }
    else {
        return quotient.toString();
    }
};
var divmod = function (x, y) {
    return [Math.floor(x / y), x % y];
};
