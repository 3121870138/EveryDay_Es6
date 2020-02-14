import React from 'react';
import './styles.less'

// Promise
// Promise 它是一种异步编程的解决方案, 它有三中状态, 进行中（pending）, 已成功(fulfilled), 以失败(rejected)
// 一旦状态改变，就不会再变了，它会接收一个函数作为参数，该函数的两个参数分别是 resolve和reject。

// const promise = new Promise(function(resolve, reject) {
//     if(/* 异步操作成功 */) {
//         resolve() // 成功
//     } else {
//         reject() // 失败
//     }
// })

// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms)
//     })
// }
// timeout(100)
//     .then(res => console.log(res))

// timeout 方法返回一个Promise 实例，表示一段时间以后才会发生的结果。过了指定的时间
// 以后，Promise 实例的状态变为 resolved ， 就会触发then方法绑定的回调函数

// let promise = new Promise(function(resolve, reject) {
//     console.log('Promise')
//     resolve()
// })

// promise
//     .then(res => console.log('res'))
// console.log('Hi!')

// 执行顺序， Promise 、Hi!、res 
// Promise 新建后立即执行，所以首先输出的是Promise，然后， then方法置顶的回调函数，
//将在当前脚本所有同步任务执行完才会执行, 所以resolved 最后输出

// Promise.prototype.then()
// then方法的第一个参数是 resolve 状态的回调函数，第二个参数是rejected状态的回调函数。
// then方法返回的是一个新的Promise实例(不是原来那个Promise实例) 
// 因此可以采用链式写法，即then方法后面再调用另一个then方法
// getJson('./1.json')
//     .then(res => console.log(res))
//     .then(res => console.log(res))

//Promise.prototype.catch() 
// 用于指定发生错误时的回调函数。

// promise
//     .then(res => console.log(res))  // success
//     .catch(err => console.log(err)) // error


// Es6 this
// 函数中的this代表当前正在执行的对象
// const obj = {
//     name: '李晓超',
//     fn () {
//         // this 代表 obj
//         console.log(this.name)
//     }
// }
// obj.fn()

// const obj = {
//     name: '李晓超',
//     fn：() => {
//         // thsi 定义 就会固定不变
//         console.log(this.name)
//     }
// }
// obj.fn()
// const fn = obj.fn
// fn()  // undefined

// 小程序
// 新建了一个 list2 页面
// 新建了一个 List 组件


// <!--pages/list2/list2.wxml-->
// <view class="pages_list2">
//   <!-- 调用组件 -->
//   <view wx:for="{{data}}" wx:for-item="v" wx:key="id">
//     <List data="{{v}}"/>
//   </view>
// </view>


// <!--components/List/list.wxml-->
// <!-- list 组件 -->
// <view class="components_list">
//   <view class="components_list_top">
//     <image src="{{data.imgUrl}}" mode="aspectFit"/>
//   </view>
//   <view class="components_list_bot">
//     <text class="components_list_title">{{data.title}}</text>
//     <text class="components_list_conent">{{data.content}}</text>
//   </view>
// </view>

// list.js
// Component({
//   /**
//    * 组件的属性列表
//    */
//   properties: {
    // data: Object
//     data: {
//       type: 'Object',
//       value: {}
//     }
//   }
// })


/**
   * 页面的初始数据
   */
//    data: {
//     data: [
//       { id: 0, imgUrl: '/assets/images/all.png', title: '标题1', content: '我是内容1' },
//       { id: 1, imgUrl: '/assets/images/add.png', title: '标题2', content: '我是内容2' },
//       { id: 2, imgUrl: '/assets/images/all.png', title: '标题3', content: '我是内容3' },
//       { id: 3, imgUrl: '/assets/images/add.png', title: '标题4', content: '我是内容4' },
//       { id: 4, imgUrl: '/assets/images/all.png', title: '标题5', content: '我是内容5' },
//       { id: 5, imgUrl: '/assets/images/add.png', title: '标题6', content: '我是内容6' },
//     ]
//   },


export default class extends React.PureComponent {
    render() {
        return <div ></div>
    }
}
