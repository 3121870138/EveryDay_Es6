import React from 'react';

// 变量的解构赋值
// let [a, b, c] = [1, 2, 3]
// let [x, , y] = [1, 2, 3] // x: 1, y: 3
// let [head, ...tail] = [1, 2, 3, 4];
// head // 1
// tail // [2, 3, 4]

// let [x, y, ...z] = ['a'];
// x // "a"
// y // undefined
// z // []

// 如果解构不成功，变量的值就等于undefined
// 如果等号的右边不是数组，那么将会报错
// 报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

// 解构赋值允许指定默认值
// let [foo = true] = [];
// foo // true

// let [x, y = 'b'] = ['a']; // x='a', y='b'
// let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

// 只有当一个数组成员严格等于undefined，默认值才会生效。

// let [x = 1] = [undefined];
// x // 1

// let [x = 1] = [null];
// x // null


// 对象的解构赋值
// let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
// foo // "aaa"
// bar // "bbb"

// 对象的解构与数组有一个重要的不同。
// 数组的元素是按次序排列的，变量的取值由它的位置决定；
// 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
// let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
// foo // "aaa"
// bar // "bbb"

// let { baz } = { foo: 'aaa', bar: 'bbb' };
// baz // undefined

// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。
// 真正被赋值的是后者，而不是前者。

// let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// baz // "aaa"
// foo // error: foo is not defined

// 默认值
// let { x = 3 } = {}
// x // 3
// 默认值生效的条件是，对象的属性值严格等于undefined。


// 字符串的解构赋值
// 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。

// const [a, b, c, d, e] = 'hello';
// a // "h"
// b // "e"
// c // "l"
// d // "l"
// e // "o"
// 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。

// let {length : len} = 'hello';
// len // 5


// 数值和布尔值的解构赋值 
// 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
// 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

// let { prop: x } = undefined; // TypeError
// let { prop: y } = null; // TypeError



// 函数参数的解构赋值
// 函数的参数也可以使用解构赋值。

// function add([x, y]){
//   return x + y;
// }

// add([1, 2]); // 3


// 圆括号问题
// 解构赋值虽然很方便，但是解析起来并不容易。对于编译器来说，一个式子到底是模式，还是表达式，没有办法从一开始就知道，必须解析到（或解析不到）等号才能知道。

// 由此带来的问题是，如果模式中出现圆括号怎么处理。ES6 的规则是，只要有可能导致解构的歧义，就不得使用圆括号。

// 但是，这条规则实际上不那么容易辨别，处理起来相当麻烦。因此，建议只要有可能，就不要在模式中放置圆括号。




// *用途

// 交换变量的值
// let x = 1
// let y = 2; // 注意 分号 问题
// [x, y] = [y, x]
// console.log(x)
// console.log(y)


// 从函数返回多个值
// 数组
// function tt () {
//     return [1, 2, 3]
// }
// let [x, y, z] = tt()
// console.log(x)
// console.log(y)
// console.log(z)
// 对象
// function gg () {
//     return {
//         a: 'a',
//         b: 'b'
//     }
// }
// const { a, b } = gg()
// console.log(a, b) 


// 函数参数的定义
// 解构赋值可以方便地将一组参数与变量名对应起来。

// // 参数是一组有次序的值
// function f([x, y, z]) { ... }
// f([1, 2, 3]);

// // 参数是一组无次序的值
// function f({x, y, z}) { ... }
// f({z: 3, y: 2, x: 1});


// 提取JSON数据
// let jsonData = {
//     id: 42,
//     status: "OK",
//     data: [867, 5309]
// };

// let { id, status, data: number } = jsonData;

// console.log(id, status, number);
// // 42, "OK", [867, 5309]


// 函数参数的默认值
// jQuery.ajax = function (url, {
//     async = true,
//     beforeSend = function () { },
//     cache = true,
//     complete = function () { },
//     crossDomain = false,
//     global = true,
//     // ... more config
// } = {}) {
//     // ... do stuff
// };


// 遍历 Map 结构
// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');
// console.log(map)
// for (let [key, value] of map) {
//   console.log(key + " is " + value);
// }
// // // first is hello
// // // second is world


// 输入模块的指定方法

// 加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。

// const { SourceMapConsumer, SourceNode } = require("source-map");
// import React, { Component } from 'react'




// 编程风格

// 1. 块级作用域
//  let 取代 var
//  全局常量和线程安全
//  const声明常量还有两个好处，
//     一是阅读代码的人立刻会意识到不应该修改这个值，
//     二是防止了无意间修改变量值所导致的错误。

// 2. 字符串
// 静态字符串一律使用单引号或反引号，不使用双引号。
// 动态字符串使用反引号。
// bad
// const a = "foobar";
// const b = 'foo' + a + 'bar';

// // acceptable
// const c = `foobar`;

// // good
// const a = 'foobar';
// const b = `foo${a}bar`;

// 3. 解构赋值

// 4. 对象
// 单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。

// // bad
// const a = { k1: v1, k2: v2, };
// const b = {
//   k1: v1,
//   k2: v2
// };

// // good
// const a = { k1: v1, k2: v2 };
// const b = {
//   k1: v1,
//   k2: v2,
// };

// 5. 数组
// 使用扩展运算符（...）拷贝数组。
// good
// const itemsCopy = [...items];

// 使用 Array.from 方法，将类似数组的对象转为数组。

// const foo = document.querySelectorAll('.foo');
// const nodes = Array.from(foo);

// 6. 函数
// 立即执行函数可以写成箭头函数的形式
// (() => console.log(666))()

// 7. Mao 结构，才使
// 注意区分 Object 和 Map，只有模拟现实世界的实体对象时用 Object。
// 如果只是需要key: value的数据结构，使用 Map 结构。因为 Map 有内建的遍历机制。

// 8. Class
// 总是用 Class，取代需要 prototype 的操作。因为 Class 的写法更简洁，更易于理解。
// class PeekableQueue extends Queue {
//     peek() {
//         return this._queue[0];
//     }
// }

// 9. 模块
// 使用import取代require。
// // bad
// const moduleA = require('moduleA');
// const func1 = moduleA.func1;
// const func2 = moduleA.func2;

// // good
// import { func1, func2 } from 'moduleA';


// 使用export取代module.exports。

// // commonJS的写法
// var React = require('react');

// var Breadcrumbs = React.createClass({
//   render() {
//     return <nav />;
//   }
// });

// module.exports = Breadcrumbs;

// // ES6的写法
// import React from 'react';

// class Breadcrumbs extends React.Component {
//   render() {
//     return <nav />;
//   }
// };

// export default Breadcrumbs;

// 如果模块只有一个输出值，就使用export default，如果模块有多个输出值，就不使用export default，export default与普通的export不要同时使用。

// 不要在模块输入中使用通配符。因为这样可以确保你的模块之中，有一个默认输出（export default）。

// // bad
// import * as myObject from './importModule';

// // good
// import myObject from './importModule';



// 10. ESLint 的使用
// ESLint 是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。

// 首先，安装 ESLint。

// $ npm i -g eslint
// 然后，安装 Airbnb 语法规则，以及 import、a11y、react 插件。

// $ npm i -g eslint-config-airbnb
// $ npm i -g eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
// 最后，在项目的根目录下新建一个.eslintrc文件，配置 ESLint。

// {
//   "extends": "eslint-config-airbnb"
// }
// 现在就可以检查，当前项目的代码是否符合预设的规则。

// index.js文件的代码如下。

// var unusued = 'I have no purpose!';

// function greet() {
//     var message = 'Hello, World!';
//     alert(message);
// }

// greet();
// 使用 ESLint 检查这个文件，就会报出错误。

// $ eslint index.js
// index.js
//   1:1  error  Unexpected var, use let or const instead          no-var
//   1:5  error  unusued is defined but never used                 no-unused-vars
//   4:5  error  Expected indentation of 2 characters but found 4  indent
//   4:5  error  Unexpected var, use let or const instead          no-var
//   5:5  error  Expected indentation of 2 characters but found 4  indent

// ✖ 5 problems (5 errors, 0 warnings)
// 上面代码说明，原文件有五个错误，其中两个是不应该使用var命令，而要使用let或const；一个是定义了变量，却没有使用；另外两个是行首缩进为 4 个空格，而不是规定的 2 个空格。


export default class extends React.PureComponent {
    render() {
        return <div ></div>
    }
}