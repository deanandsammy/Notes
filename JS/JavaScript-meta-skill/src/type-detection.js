/*
* 类型检测
* @param anytype
* @author huge
* @date May 3，2017
*/

function typeDetection(target) {
    return Object.prototype.toString.call(target).slice(8, -1).toLowerCase()
}

// 函数参数收集
// @date May 3，2017

function paramsCollection() {
    var sliceFunc = Function.prototype.call.bind(Array.prototype.slice)

    return sliceFunc(arguments)
}

function paramsCollection2() {
    return Array.prototype.slice.call(arguments)
}
