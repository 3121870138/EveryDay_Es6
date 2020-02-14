import React from 'react';
import './styles.less'


// Promise.all()
// Promise.all() 方法用于将多个Promise实例，包装成一个新的Promise实例。
// const p = Promise.all([p1, p2, p3])   // 参数： 可以是数组 也可以是 对象
// p1, p2, p3 都是Promise实例, 返回的每个成员都是Promise实例
// 只有 p1, p2, p3 的状态都为成功的时候， p的状态就变成 成功， 
// 只要一个错误， p的状态就变成rejected,

// 生成一个Promise对象的数组
// const promises = [1, 2, 4, 11, 18].map(id => getJson('/post' + id + '.json'))
// Promise.all(promises)
//     .then(res => console.log(res))

// 如果作为参数的Promise实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。

// const p1 = new Promise((resolve, reject) => {
//     resolve('hello')
// })
//     .then(res => res)
//     .catch(e => e)

// const p2 = new Promise((resolve, reject) => {
//     // throw new Error('报错了')
//     reject('报错了')
// })
//     .then(res => res)
//     .catch(e => e)

// Promise.all([p1, p2])
//     .then(res => console.log(res))
//     .catch(e => console.log(e))


/* Promise.resolve() */
// const jsPromise = Promise.resolve($.ajax('/s.json'))
// Promise.resolve('foo') 等价于 new Promise(resolve => resolve('foo'))

// 参数： 
//     Promise 实例
//         Promise.resolve将不做任何修改、原封不动地返回这个实例

//     thenable 对象
//         thenable对象指的是具有then方法的对象，
        // let thenable = {
        //     then: function(resolve, reject) {
        //         resolve(44)
        //     }
        // }
        // let p1 = Promise.resolve(thenable)
        // p1
        //     .then(res => console.log(res))  // 44

        // 参数不是具有then方法的对象，或根本就不是对象
        //     如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的Promise
        //     对象，状态为resolved
            // const p = Promise.resolve('hello')
            // p
            //     .then(res => console.log(res)) // hello
        
        // 不带有任何参数
        //     Promise.resolve()方法允许调用时不带参数，直接返回一个resolve状态的Promise对象
        //     const p = Promise.resolve()
        //     p 
        //         .then()

                // setTimeout(function () {
                //     console.log('three');
                // }, 0);
                
                // Promise.resolve().then(function () {
                //     console.log('two');
                // });
                
                // console.log('one');
          
                // one
                // two
                // three

/* Promise.reject() */
// Promise.reject()方法也会返回一个新的Promise实例，该实例的状态为rejected
// const p = Promise.reject('出错了')
// const p = new Promise((resolve,reject) => reject('出错了'))
// p
//     .then(null, function (s) {
//         console.log(s)
//     })

// const thenable = {
//     then(resolve, reject) {
//       reject('出错了');
//     }
//   };
  
//   Promise.reject(thenable)
//   .catch(e => {
//     console.log(e === thenable)
//   })
  // true
//   Promise.reject方法的参数是一个thenable对象，
//   执行以后，后面catch方法的参数不是reject抛出的“出错了”这个字符串，
//   而是thenable对象。


/* 应用 */
// 加载图片
// const preImage = function(path) {
//     return new Promise(function(resolve, reject) {
//         const image = new Image()
//         image.onload = resolve;
//         image.onerror = reject;
//         image.src = path
//     })
// }

// Generator 函数与Promise 的结合
// 使用Generator函数管理流程，遇到异步操作的时候，通常返回一个Promise对象
// function getFoo () {
//     return new Promise(function (resolve,reject) {
//         resolve('foo')
//     })
// }

// const g = function *() {
//     try {
//         const foo = yield getFoo();
//         console.log(foo)
//     }   
//     catch (e) {
//         console.log(e)
//     }
// }

// function run (generator) {
//     const it = generator()
//     function go (result) {
//         if(result.done) return result.value
//         return result.value.then(function(value) {
//             return go(it.next(value))
//         }, err => go(it.throw(err)))
//     }
//     go(it.next())
// }
// run(g)  
// 上面代码的 Generator 函数g之中，有一个异步操作getFoo，
// 它返回的就是一个Promise对象。函数run用来处理这个Promise对象，
// 并调用下一个next方法。



// const hs = time => { 
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('小花')
//         }, time);
//     })
// }

// async function fn() {
//     const p1 = await hs(3000)
//     return p1
// }
// fn()
//     .then(res => console.log(res))












export default class extends React.PureComponent {
    render() {
        return <div ></div>
    }
}
