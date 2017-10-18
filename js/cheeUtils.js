/**
 * @created 2017-06-01
 * @author  cheewu
 * @email   cheewu@126.com
 * license  MIT
 */

// 检查字符串是否为空
var isEmptyStr = function(str) {
    if (str == null || typeof str == "undefined" || str.trim() == "") {
        return true;
    } else {
        return false;
    }
}

var onlyDigit = function(str) {
    var numReg = /^[0-9]*$/
    return numReg.test(str)
}

// 简明log，等同于console.log
var log = console.log.bind(console)

// dom元素选择器（单选）
var e = function(parent, selector) {
    if (arguments.length === 1) {
        return document.querySelector(parent)
    }
    return parent.querySelector(selector)
}

// dom元素选择器（全选）
var es = function(parent, selector) {
    if (arguments.length === 1) {
        return document.querySelectorAll(parent)
    }
    return parent.querySelectorAll(selector)
}



