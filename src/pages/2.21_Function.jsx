import React from 'react';
// 1. 函数参数的默认值
// ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。

// function log(x, y = 'World') {
//   console.log(x, y);
// }

// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello

// function Point(x = 0, y = 0) {
//     this.x = x;
//     this.y = y;
//   }

//   const p = new Point();
//   p // { x: 0, y: 0 }

// 参数变量是默认声明的，所以不能用let或const再次声明。

// function foo(x = 5) {
//   let x = 1; // error
//   const x = 2; // error
// }

// 与结构赋值结合使用
// function foo({ x, y = 5 }) {
//     console.log(x, y);
// }

// foo({}) // undefined 5
// foo({ x: 1 }) // 1 5
// foo({ x: 1, y: 2 }) // 1 2
// foo() // TypeError: Cannot read property 'x' of undefined

// 如果没有提供参数，函数foo的参数默认为一个空对象。

// function fetch(url, { body = '', method = 'GET', headers = {} }) {
//     console.log(method);
// }
// fetch('http://example.com', {})
// // "GET"
// fetch('http://example.com')
// // 报错

// function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
//     console.log(method);
// }
// fetch('http://example.com')
// // "GET"

// 参数默认值的位置

// 如果传入undefined，将触发该参数等于默认值，null则没有这个效果。

// function foo(x = 5, y = 6) {
//   console.log(x, y);
// }

// foo(undefined, null)
// // 5 null

// 函数的length属性
// 作用域


// 2. rest 参数
// ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。
// rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
// function add(...values) {
//     let sum = 0;

//     for (var val of values) {
//         sum += val;
//     }

//     return sum;
// }

// add(2, 5, 3) // 10


// 注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
// 报错
// function f(a, ...b, c) {
//     // ...
// }
// // 函数的length属性，不包括 rest 参数。

// (function (a) { }).length  // 1
// (function (...a) { }).length  // 0
// (function (a, ...b) { }).length  // 1

// 3. 严格模式
// 从 ES5 开始，函数内部可以设定为严格模式。

// function doSomething(a, b) {
//   'use strict';
//   // code
// }

// ES2016 做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，
// 那么函数内部就不能显式设定为严格模式，否则会报错。


// 两种方法可以规避这种限制。
// 第一种是设定全局性的严格模式，这是合法的。

// 'use strict';

// function doSomething(a, b = a) {
//   // code
// }
// 第二种是把函数包在一个无参数的立即执行函数里面。

// const doSomething = (function () {
//   'use strict';
//   return function(value = 42) {
//     return value;
//   };
// }());



// 5. 箭头函数
// 基本用法
// ES6 允许使用“箭头”（=>）定义函数。

// var f = v => v;

// // 等同于
// var f = function (v) {
//   return v;
// };
// 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。

// var f = () => 5;
// // 等同于
// var f = function () { return 5 };

// var sum = (num1, num2) => num1 + num2;
// // 等同于
// var sum = function(num1, num2) {
//   return num1 + num2;
// };

// 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。

// var sum = (num1, num2) => { return num1 + num2; }

// const full = ({ first, last }) => first + ' ' + last;

// // 等同于
// function full(person) {
//   return person.first + ' ' + person.last;
// }


// 箭头函数的一个用处是简化回调函数。

// // 正常函数写法
// [1,2,3].map(function (x) {
//   return x * x;
// });

// // 箭头函数写法
// [1,2,3].map(x => x * x);

// 使用注意点
// 箭头函数有几个使用注意点。

// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

// this对象的指向是可变的，但是在箭头函数中，它是固定的。


// 7. 函数参数的尾逗号
// 允许函数的最后一个参数有尾逗号（trailing comma）。



// var name = '小花'
// const obj = {
//     name: '小白',
//     method: () => console.log(this.name), // this = undefined
//     method2 () {
//         console.log(this.name)
//     }
// }

// obj.method()  // undefined
// obj.method2()    // 小白

// const m1 = obj.method
// m1() // undefined

// const m2 = obj.method2
// m2()  // undefined  window.m2()  

// obj.method.apply({name: '小红'})  // 固定不变  undefined
// obj.method2.apply({name: '小蓝'})  // 小蓝 


// var name = '小花'
// const fn = function (opt) {
//     console.log(this) 
//     this.name = opt
//     // const f = () => console.log(this.name)
//     // f()
//     // setTimeout(() => {
//     //     console.log(this.name)
//     // }, 0)
// }
// fn('小蓝')

// async function fn() {
//    const dd = await Promise.all([ajax(), ajax()])
//     .catch(err => console.log(err))  // 监听Promise.all 
//    const tt = await ajax()
//    return [...dd, tt]
// }
// fn()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

export default class extends React.PureComponent {
    render() {
        return <div ></div>
    }
}
