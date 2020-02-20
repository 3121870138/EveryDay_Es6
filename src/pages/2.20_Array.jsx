import React from 'react';

// 1. 扩展运算符
// 扩展运算符是三个点( ... )
// console.log(...[1, 2, 3]) // 1 2 3
// console.log(1, ...[2, 3, 4], 5) // 1 2 3 4 5
// [...document,querySelectorAll('div')] // [<div>, <div>, <div>]

// 函数调用 该运算符将一个数组，变为参数序列
// function push(array, ...items) {
//     array.push(...items)
// }
// function add (x, y) {
//     return x + y;
// }
// const numbers = [4, 38]
// add(...numbers) //42

// 扩展运算符与正常的函数参数可以结合使用，非常灵活
// function f(v, w, x, y, z) { }
// const args = [0, 1]
// f(-1, ...args, 2, ...[3])

// 扩展运算符后面还可以放置表达式
// 如果扩展运算符后面是一个空数组，则不产生任何效果

// 注意，只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错。

// (...[1, 2])

// console.log((...[1, 2]))
// // Uncaught SyntaxError: Unexpected number

// console.log(...[1, 2])
// // 1 2
// 上面三种情况，扩展运算符都放在圆括号里面，但是前两种情况会报错，因为扩展运算符所在的括号不是函数调用。

// 替代函数的apply方法
// function f(x, y, z) {
//     // ...
// }
// let arr = [0, 1, 2]
// f(...arr)

// Math.max(...[2 ,3 ,1])

// let arr1 = [2, 3, 6]
// let arr2 = [2, 1, 1]
// arr1.push(...arr2)

// new Date(...[2015, 1, 1]);

// 扩展运算符的应用
// (1) 复制数组
// 数组是复合的数据类型，直接复制的话，
// 只是复制了指向底层数据结构的指针，
// 而不是克隆一个全新的数组。
// const a1 = [1, 2];
// const a2 = a1
// a2[0] = 2;
// console.log(a1) // [2, 2]

// const a1 = [1, 2]
// // 写法一
// const a2 = [...a1]
// // 写法二
// const [...a2] = a1

// (2) 合并数组
// const arr1 = [1, 2]
// const arr2 = [2, 4]
// const arr3 = [5, 1]
// console.log([...arr1, ...arr2, ...arr3])

// (3) 与解构赋值结合
// [a, ...rest] = list
// const [first, ...rest] = [1, 2, 3, 4, 5];
// first // 1
// rest  // [2, 3, 4, 5]

// const [first, ...rest] = [];
// first // undefined
// rest  // []

// const [first, ...rest] = ["foo"];
// first  // "foo"
// rest   // []

// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。

// const [...butLast, last] = [1, 2, 3, 4, 5];
// // 报错

// const [first, ...middle, last] = [1, 2, 3, 4, 5];
// // 报错

// (4) 字符串
// 扩展运算符还可以将字符串转为真正的数组。

// [...'hello']
// // [ "h", "e", "l", "l", "o" ]


// 数组实例的find() 和 finedIndex()

// find方法，用于找出第一个符合条件的数组成员，它的参数是一个回调函数，
// 所有数组成员一次执行该回调函数，知道找出第一个返回值为true的成员，
// 返回该成员， 如果没有符合条件的成员，则返回undefined
// [1, 4, -5, 10].find((n) => n < 0)
// // -5

// [1, 5, 10, 15].find(function (value, index, arr) {
//     return value > 9;
// }) // 10

// findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

// [1, 5, 10, 15].findIndex(function(value, index, arr) {
//   return value > 9;
// }) // 2
// 这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。

// function f(v){
//   return v > this.age;
// }
// let person = {name: 'John', age: 20};
// [10, 12, 26, 15].find(f, person);    // 26
// 上面的代码中，find函数接收了第二个参数person对象，回调函数中的this对象指向person对象。

// 另外，这两个方法都可以发现NaN，弥补了数组的indexOf方法的不足。

// [NaN].indexOf(NaN)
// // -1

// [NaN].findIndex(y => Object.is(NaN, y))
// // 0
// 上面代码中，indexOf方法无法识别数组的NaN成员，但是findIndex方法可以借助Object.is方法做到。



// 8. 数组实例的includes()
// 返回一个布尔值，表示某个数组是否包含给定的值，与字符串includes方法类似
// [1, 2, 3].includes(2)     // true
// [1, 2, 3].includes(4)     // false
// [1, 2, NaN].includes(NaN) // true

// 该方法的第二个参数表示搜索的起始位置，
// 默认为0。如果第二个参数为负数，则表示倒数的位置，
// 如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），
// 则会重置为从0开始。

// [1, 2, 3].includes(3, 3);  // false
// [1, 2, 3].includes(3, -1); // true

// indexOf() 方法有两个缺点， 一是不够语义化，二是内部使用严格相等运算符（===）进行判断，会导致NaN的误判
// [NaN].indexOf(NaN)
// // -1



// 9. 数组实例的flat(), flatMap()
// 拉平数组 默认为1
// [1, 2, [3, 4]].flat()
// // [1, 2, 3, 4]

// 拉平多位
// [1, [2, [3]]].flat(Infinity)
// // [1, 2, 3]


// 如果原数组有空位，flat()方法会跳过空位。

// [1, 2, , 4, 5].flat()
// // [1, 2, 4, 5]

// flatMap()方法对原数组的每个成员执行一个函数
//（相当于执行Array.prototype.map()），
//然后对返回值组成的数组执行flat()方法。
//该方法返回一个新数组，不改变原数组。

// // 相当于 [[2, 4], [3, 6], [4, 8]].flat()
// [2, 3, 4].flatMap((x) => [x, x * 2])
// // [2, 4, 3, 6, 4, 8]
// flatMap()只能展开一层数组。

// Class

// class Person {
//     constructor() {
//         this.name = '李晓超'
//         this.age = '20'
//     }
// }

// class Person1 extends Person {
//     constructor(like) {
//         super()
//         this.like = like
//     }
//     method () {
//         console.log(this.name, this.age, this.like)
//     }
// }
// const p1 = new Person1('运动')
// p1.method()




// class Person {
//     constructor() {
//         this.name = '李晓超'
//         this.age = 20
//     }
// }

// class Person1 extends Person{
//     constructor (like) {
//         super() // super代表父类的 constructor
//         this.like = like
//     }
//     method () {
//         console.log(this.name, this.age, this.like)
//     }
// }

// const p1 = new Person1('学习')
// p1.method()

// class Person2 extends Person{
//     constructor (like) {
//         super()
//         this.like = like
//     }
//     method () {
//         console.log(this.name, this.age, this.like)
//     }
// }
// const p2 = new Person2('睡觉')
// p2.method()


export default class extends React.PureComponent {
    render() {
        return <div ></div>
    }
}
