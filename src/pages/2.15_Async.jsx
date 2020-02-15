import React from 'react';

/* 含义 */
// async函数是什么？ Generator函数的语法糖。

// const gen = function* () {
//     const f1 = yield readFile('/etc/fstab');
//     const f2 = yield readFile('/etc/shells');
//     console.log(f1.toString());
//     console.log(f2.toString());
// };
// const asyncReadFile = async function () {
//     const f1 = await readFile('/etc/fstab');
//     const f2 = await readFile('/etc/shells');
//     console.log(f1.toString());
//     console.log(f2.toString());
// };

// async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已
// async 函数对 Generator函数的改进，
// 1. 内置执行器
// Generatore函数的执行必须考执行器，所以才有了co模块，而async函数字典执行器。也就是说
// async函数的执行，与普通函数一模一样，只要一行
// asyncReadFile();
// 2. 更好的语法
// async 和 await 比起星号和yield，语义更清楚了， async表示函数里有异步操作，
// await表示紧跟在后面的表达式需要等待结果
// 3. 更广的适用性
// co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，
// 可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。
// 4. 返回值是 Promise
// async函数的返回值是 Promise 对象
// 可以用then方法指定下一步的操作。

// async函数完全可以看做多个异步操作，包装成的一个Promise对象，而await命令计试内部then命令的语法糖。

/* 基本用法 */
// async函数返回一个 Promise 对象，可以使用then方法添加回调函数。
// 当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

// async function getStockPriceByName(name) {
//     const symbol = await('name');
//     const stockPrice = await('symbol');
//     return stockPrice;
//   }

//   getStockPriceByName('goog').then(function (result) {
//     console.log(result);  // 'symbol'
//   });

// 函数前面的async关键字，表明该函数内部有异步操作。调用该函数时，会立即返回一个Promise对象。

// function timeout(ms) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }

//   async function asyncPrint(value, ms) {
//     await timeout(ms);
//     console.log(value);
//   }

//   asyncPrint('hello world', 50);

//   指定多少毫秒后输出一个值。

//   async function timeout(ms) {
//     await new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }

//   async function asyncPrint(value, ms) {
//     await timeout(ms);
//     console.log(value);
//   }

//   asyncPrint('hello world', 50);

//   async 函数有多种使用形式。

//   // 函数声明
// async function foo() {}

// // 函数表达式
// const foo = async function () {};

// // 对象的方法
// let obj = { async foo() {} };
// obj.foo().then(...)

// // Class 的方法
// class Storage {
//   constructor() {
//     this.cachePromise = caches.open('avatars');
//   }

//   async getAvatar(name) {
//     const cache = await this.cachePromise;
//     return cache.match(`/avatars/${name}.jpg`);
//   }
// }

// const storage = new Storage();
// storage.getAvatar('jake').then(…);

// // 箭头函数
// const foo = async () => {};


/* 语法 */
// async函数的语法规则总体上比较简单，难点是错误处理机制。
// 返回Promise对象
// async函数返回一个Promise对象
// async函数内容return语句返回的值，会成为then方法回调函数的参数
// async function f() {
//     return '11111'
// }
// f()
//     .then(v => console.log(v))  // '11111

// 函数内容return命令返回的值，会被then方法回调函数接收到
// async函数内容跑出错误，会导致返回的Promise对象变为reject状态。
// 抛出错误对象会被catch方法回调函数接收到
// async function f() {
//     throw new Error('错误')
// }
// f()
//     .then(
//         v => console.log(v)
//         e => console.log(e)
//     )

// Promise对象的状态变化
// async函数返回的Promise对象，必须等到内部所有await命令后面的
// Promise对象执行完，才会发生状态改变，除非遇到return语句或抛出错误，
// 只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数

// async function getTitle(url) {
//     let response = await fetch(url);
//     let html = await response.text();
//     return html.match(/<title>([\s\S]+)<\/title>/i)[1];
// }
// getTitle('http://www.baidu.com')
//     .then(res => console.log(res))
// 上面代码中，函数getTitle内部有三个操作：抓取网页、取出文本、匹配页面标题。只有这三个操作全部完成，才会执行then方法里面的console.log。

// await 命令
// 正常情况下，await命令后面是一个Promise对象，返回该对象的结果
// 如果不是Promise对象，就直接返回对应的值
// async function f() {
//     return await 123; // return 123
// }
// f()
//     .then(v => console.log(v))  // 123

// await命令后面是一个thenable对象（即定义then方法的对象），那么await会将其等同于 Promise 对象

// class Sleep {
//     constructor(timeout) {
//       this.timeout = timeout;
//     }
//     then(resolve, reject) {
//       const startTime = Date.now();
//       setTimeout(
//         () => resolve(Date.now() - startTime),
//         this.timeout
//       );
//     }
//   }

//   (async () => {
//     const sleepTime = await new Sleep(1000);
//     console.log(sleepTime);
//   })();
//   // 1000


//   JavaScript 一直没有休眠的语法，但是借助await命令就可以让程序停顿指定的时间。下面给出了一个简化的sleep实现。
//   function sleep(interval) {
//     return new Promise(resolve => {
//       setTimeout(resolve, interval);
//     })
//   }

//   // 用法
//   async function one2FiveInAsync() {
//     for(let i = 1; i <= 5; i++) {
//       console.log(i);
//       await sleep(1000);
//     }
//   }

//   one2FiveInAsync();


//   await命令后面的 Promise 对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到。

//   async function f() {
//     await Promise.reject('出错了');
//   }

//   f()
//   .then(v => console.log(v))
//   .catch(e => console.log(e))
//   // 出错了


//   任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行。
//   async function f() {
//     await Promise.reject('出错了');
//     await Promise.resolve('hello world'); // 不会执行
//   }

//   有时，我们希望即使前一个异步操作失败，
//   也不要中断后面的异步操作。这时可以将第一个await放在try...catch结构里面，
//   这样不管这个异步操作是否成功，第二个await都会执行。

//   async function f() {
//     try {
//       await Promise.reject('出错了');
//     } catch(e) {
//     }
//     return await Promise.resolve('hello world');
//   }

//   f()
//   .then(v => console.log(v))
//   // hello world


//   另一种方法是await后面的 Promise 对象再跟一个catch方法，处理前面可能出现的错误。
//   async function f() {
//     await Promise.reject('出错了')
//       .catch(e => console.log(e));
//     return await Promise.resolve('hello world');
//   }

//   f()
//   .then(v => console.log(v))
//   // 出错了
//   // hello world

// 错误处理
// 如果await后面的异步操作出错，那么等同于async函数返回的 Promise 对象被reject。
// async function f() {
//     await new Promise(function (resolve, reject) {
//       throw new Error('出错了');
//     });
//   }

//   f()
//   .then(v => console.log(v))
//   .catch(e => console.log(e))
//   // Error：出错了

//   防止出错的方法，也是将其放在try...catch代码块之中。
//   async function f() {
//     try {
//       await new Promise(function (resolve, reject) {
//         throw new Error('出错了');
//       });
//     } catch(e) {
//     }
//     return await('hello world');
//   }

//   如果有多个await命令，可以统一放在try...catch结构中。
//   async function main() {
//     try {
//       const val1 = await firstStep();
//       const val2 = await secondStep(val1);
//       const val3 = await thirdStep(val1, val2);

//       console.log('Final: ', val3);
//     }
//     catch (err) {
//       console.error(err);
//     }
//   }

// 使用注意点
// 第一点，前面已经说过，await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。
// async function myFunction() {
//     try {
//         await somethingThatReturnsAPromise();
//     } catch (err) {
//         console.log(err);
//     }
// }

// // 另一种写法

// async function myFunction() {
//     await somethingThatReturnsAPromise()
//         .catch(function (err) {
//             console.log(err);
//         });
// }

// 第二点，多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。

// let foo = await getFoo();
// let bar = await getBar();

// 上面代码中，getFoo和getBar是两个独立的异步操作（即互不依赖），被写成继发关系。这样比较耗时，因为只有getFoo完成以后，才会执行getBar，完全可以让它们同时触发。
// // 写法一
// let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// // 写法二
// let fooPromise = getFoo();
// let barPromise = getBar();
// let foo = await fooPromise;
// let bar = await barPromise;
// 上面两种写法，getFoo和getBar都是同时触发，这样就会缩短程序的执行时间。

// 第三点，await命令只能用在async函数之中，如果用在普通函数，就会报错。

// 如果确实希望多个请求并发执行，可以使用Promise.all方法。当三个请求都会resolved时，下面两种写法效果相同。
// async function dbFuc(db) {
//     let docs = [{}, {}, {}];
//     let promises = docs.map((doc) => db.post(doc));

//     let results = await Promise.all(promises);
//     console.log(results);
// }

// // 或者使用下面的写法

// async function dbFuc(db) {
//     let docs = [{}, {}, {}];
//     let promises = docs.map((doc) => db.post(doc));

//     let results = [];
//     for (let promise of promises) {
//         results.push(await promise);
//     }
//     console.log(results);
// }

// 第四点，async 函数可以保留运行堆栈。

// const a = () => {
//     b().then(() => c());
// };
// 上面代码中，函数a内部运行了一个异步任务b() 。当b()运行的时候，函数a()不会中断，而是继续执行。等到b()运行结束，可能a()早就运行结束了，b()所在的上下文环境已经消失了。如果b()或c()报错，错误堆栈将不包括a() 。

// 现在将这个例子改成async函数。

// const a = async () => {
//     await b();
//     c();
// };
// 上面代码中，b()运行的时候，a()是暂停执行，上下文环境都保存着。一旦b()或c()报错，错误堆栈将包括a() 。

/* 实例: 按顺序完成异步操作 */
// async function logInOrder(urls) {
//     // 并发读取远程URL
//     const textPromises = urls.map(async url => {
//       const response = await fetch(url);
//       return response.text();
//     });
  
//     // 按次序输出
//     for (const textPromise of textPromises) {
//       console.log(await textPromise);
//     }
//   }
//   上面代码中，虽然map方法的参数是async函数，
//   但它是并发执行的，因为只有async函数内部是继发执行，
//   外部不受影响。后面的for..of循环内部使用了await，
//   因此实现了按顺序输出。

/* 顶层await */
// 根据语法规格，await命令只能出现在 async 函数内部，否则都会报错
// 表示看不懂
// 顶层的await命令有点像，交出代码的执行权给其他的模块加载，等异步操作完成后，再拿回执行权，继续向下执行。



export default class extends React.PureComponent {
    render() {
        return <div ></div>
    }
}