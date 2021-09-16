
'use strict';

/**
 *
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
function Addition(a, b){
    return a + b;
}


/**
 *
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
function Subtraction(a, b){
    return a - b;
}

/**
 *
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
function Multiplication(a, b){
    return a * b;
}

/**
 *
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
function Division(a, b){
    if(b == 0) {
        throw new Error('Деление на 0');
    }
    else {
        return a / b;
    }
}
