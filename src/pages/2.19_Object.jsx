import React from 'react';

// 1. 属性的简洁表示法
// Es6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁
// const foo = 'bar'
// const baz = {foo}
// console.log(baz) // { foo: foo }
// // 等同于
// const baz = { foo: foo }

// function f(x, y) {
//     return {x, y}  // {x: x, y: y}
// }
// f(1, 2) // {x: 1, y: 2}


// // 方法简写
// const o = {
//     method() {
//         return '1111'
//     }
// }
// // 等同于
// const o = {
//     method: function() {
//         return '1111'
//     }
// }

// // 函数的返回值，将会非常方便
// function getPoint() {
//     const x = 1;
//     const y = 10;
//     return {x, y}
// }
// getPoint() // {x: 1, y: 10}

// const tt = 'tt'
// const ms = {
//     tt,
// }
// function getItem(key) {
//     return key in ms ? ms[key] : null
// }
// console.log(getItem(tt))


// let user = {
//     name: 'test'
// };

// let foo = {
//     bar: 'baz'
// };

// console.log(user, foo)
// // {name: "test"} {bar: "baz"}
// console.log({ user, foo })
// // {user: {name: "test"}, foo: {bar: "baz"}}

// 注意，简写的对象方法不能用作构造函数，会报错。
// const obj = {
//     f() {
//       this.foo = 'bar';
//     }
//   };

// new obj.f() // 报错



// 2. 函数名表达式
// const obj = {}
// obj.fn = '123'
// obj[123 + 34] = 'tt'
// console.log(obj)

// 字面量
// var obj = {
//     foo: true,
//     abc: 123
// };

// 也可以是表达式
// let propKey = 'foo';

// let obj = {
//   [propKey]: true,
//   ['a' + 'bc']: 123
// };

// 表达式还可以用于定义方法名
// let obj = {
//     ['h' + 'ello']() {
//         return 'hi!'
//     }
// }
// console.log(obj)
// console.log(obj.hello())

// // 注意，属性名表达式与简洁表示法，不能同时使用，会报错。
// // 报错
// const foo = 'bar';
// const bar = 'abc';
// const baz = { [foo] };

// // 正确
// const foo = 'bar';
// const baz = { [foo]: 'abc'};



// //注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]
// const keyA = {a: 1};
// const keyB = {b: 2};

// const myObject = {
//   [keyA]: 'valueA',
//   [keyB]: 'valueB'
// };

// myObject // Object {[object Object]: "valueB"}


// 6. 对象的扩展运算符

// 结构赋值
// const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
// console.log(x) // 1
// console.log(y) //2
// console.log(z) //{ a: 3, b: 4 }

// 解构赋值要求等号右边是一个对象，所以如果等号右边是undefined或null，就会报错，因为它们无法转为对象。
// let { ...z } = null; // 运行时错误
// let { ...z } = undefined; // 运行时错

// 解构赋值必须是最后一个参数，否则会报错。 
// let { ...x, y, z } = someObject; // 句法错误
// let { x, ...y, ...z } = someObject; // 句法错误

// 解构赋值的拷贝是浅拷贝
// let obj = { a: { b: 1 } };
// let { ...x } = obj;
// obj.a.b = 2;
// x.a.b // 2

// 扩展运算符的解构赋值，不能复制继承自原型对象的属性。
// let o1 = { a: 1 };
// let o2 = { b: 2 };
// o2.__proto__ = o1;
// let { ...o3 } = o2;
// o3 // { b: 2 }
// o3.a // undefined

// const o = Object.create({ x: 1, y: 2 });
// o.z = 3;

// console.log(o)
// let { x, ...newObj } = o;
// console.log(x)
// console.log(newObj)
// let { y, z } = newObj;
// x // 1
// y // undefined
// z // 3



// 解构赋值的一个用处，是扩展某个函数的参数，引入其他操作。 
// function baseFunction({ a, b }) {
//     // ...
// }
// function wrapperFunction({ x, y, ...restConfig }) {
//     // 使用 x 和 y 参数进行操作
//     // 其余参数传给原始函数
//     return baseFunction(restConfig);
// }


// 扩展运算符
// let z = { a: 3, b: 4 };
// let n = { ...z };
// n // { a: 3, b: 4 }

// 由于数组是特殊的对象，所以对象的扩展运算符也可以用于数组。
// let foo = { ...['a', 'b', 'c'] };
// foo
// // {0: "a", 1: "b", 2: "c"}


// 如果扩展运算符后面是一个空对象，则没有任何效果。
// {...{}, a: 1}
// // { a: 1 }

// 如果扩展运算符后面是字符串，它会自动转成一个类似数组的对象，因此返回的不是空对象。
// {...'hello'}
// // {0: "h", 1: "e", 2: "l", 3: "l", 4: "o"}


// 如果用户自定义的属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉。
// let aWithOverrides = { ...a, x: 1, y: 2 };
// // 等同于
// let aWithOverrides = { ...a, ...{ x: 1, y: 2 } };
// // 等同于
// let x = 1, y = 2, aWithOverrides = { ...a, x, y };
// // 等同于
// let aWithOverrides = Object.assign({}, a, { x: 1, y: 2 })




export default class extends React.PureComponent {
    render() {
        return <div ></div>
    }
}
