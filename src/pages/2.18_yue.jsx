// 1. 前端目录结构(只多不少)
// src: {
//     pages{}
//     actions: {}
//     assets: {}
//     components: {}
//     reducer: {}
//     router: {}
//     services: {}
//     styles: {}
//     utils: {}
//     constants: {}
//     layouts: {}
// }

// 2. 
    // function typeFn(opt) {
    //    return Object.prototype.toString.call(opt)
    // }
    // console.log(typeFn('123'))

// 3. 
    // display: flex;
    // justify-content: center;
    // align-items: center;

    // 父级元素： position: relative;
    // position: absolute;
    // margin: 0 auto;
    // top: 0;
    // bot: 0;
    // left: 0;
    // right: 0;

    // 父级元素: position: relative;
    // position: absolute;
    // left: calc(50% - 100px);
    // top: calc(50% -100px)

// 4. 
    // const btn = document.querySelector('.btn')
    // btn.addEventListener('click', function() {
    //     const ball = document.querySelector('.ball')
    //     ball.style.transform = 'translate(120px, 0px)' 
    //     ball.style.transition = '1s'
    // }) 

    // window.onload = function () {
    //     const ball = document.querySelector('.ball')
    //     ball.style.transform = 'translate(120px, 0px)'
    //     ball.style.transition = '1s'
    // }

    // 怎么实现伪GPU渲染  （显卡渲染）
    //transform:translate3D(x, y, z)
	
    // 如何实现真正的GPU渲染
    // will-change: 
           // auto: 没有添加
          //  自定义属性： 支持的属性 transform top left bot right
	// opacity 
        // will-change: top;

// 5. 
    // obj.fn() // 小白
    // fn2() // 报错
    // obj.fn.call({ name: '小红' }) // 小红

    // obj.fn() // 报错
    // fn2() // 报错
    // obj.fn.call({ name: '小红' }) // 报错

// 6.
    // const p1 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(1)
    //     }, 3000);
    // })
    
    // p1
    //     .then(res => {
    //         console.log(res, 11111111111)
    //         return new Promise((resolve, reject) => {
    //             setTimeout(() => {
    //                 resolve(2)
    //             }, 3000);
    //         })
    //     })
    //     .then(res => console.log(res, 222222222222))
    
// 7. 
// const ajax = () => axios.get('https://blogs.zdldove.top/Home/Apis/listWithPage')
// async function fn() {
//     const p1 = await ajax()
//     const p2 = await ajax()
//     return [p1, p2]
// }
// fn()
//     .then(res => console.log(res))

// 8. 
    // const ajax = () => axios.get('https://blogs.zdldove.top/Home/Apis/listWithPage')
    // Promise.all([ajax(), ajax()])
    //     .then(res => console.log(res))

// 9. 实现寄生组合式继承

// 10.
    // class Person {
    //     constructor(name, age) {
    //         this.name = name
    //         this.age = age
    //     }
    //     method (name, age) {
    //         console.log(name, age)
    //     }
    // }
    // const p1 = new Person()
    // p1.method('小花', 22)

// 11.
    // const obj = {
    //     h1: '<div>我是H1</div>',
    //     h2: '<div>我是H2</div>',
    //     h3: '<div>我是H3</div>',
    // }
    // function pri (opt) {
    //     return obj[opt]
    // }
    // console.log(pri('h2'))


// 12. 设计模式
 // 工厂模式
 // 单例模式
 // 策略模式: 避免使用if else 语句

// 13. 
// WXML: 相当于 html
// WXSS: 相当于 css
// WXS:  写一些表达式
// .json 配置文件
// .js 逻辑代码

// 14. 封装一个方法，随便传入一个引用类型，实现一个深拷贝，要求原样实现传入的参数，丢值0分

// 15.
 // 宏任务： 执行最慢 setTimeout, setInterval
 // 微任务： Promise

// 16. 扁平化
    // arr.flat(Infinity)
    // function arrFlat(arr) {
    //     return arr.reduce((a0, a1) => {
    //         return a0.concat(Array.isArray(a1) ? arrFlat(a1) : a1 )
    //     }, [])
    // }
    // console.log(arrFlat([2, [2, 3, [1, 8, 9]]]))

// 17. // 不相等
//     function fn() {
//         if(0.1 + 0.2 == 0.3) {
//             return true
//         } 
//         return false
//     }
//    console.log(fn())

// 18.
// 下拉加载数据的时候，又传来5条数据
// 布局的问题， 没有宽高，：使用插件，监听数据是否请求成功

// 19. 封装弹窗组件
// 标题，
// 内容，
// 底部，{ 按钮， }
// 关闭，
// 打开

// 20. 使用前端数据映射的方式 兼容 组件

// 21. 
    // localStorage： 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
    // sessionStorage: 数据在当前浏览器窗口关闭后自动删除，
    // cookie: 数据存储量少，一般不会超过4k，为了表示用户身份

// 22. 封装一个方法，传入一个内容为数字的字符串，例如0, 3, 4, 17, 2, 8, 6, 10，然后找出找出最长的?串递增的数字，例如这个字符串最长递增数字为 0, 3, 4, 8, 10 

// 23. position
    //  relative: 相对定位，相对于父级元素定位
    //  absolute: 绝对定位
    // fixed: 固定定位
    //  static: 默认
    //  none: 
    //  sticky: 黏性布局

// 24. 性能优化
// content: 减少http请求， 使用cdn ,减少dns查询， 
// 图片: 使用精灵图， 尽量不拉伸图片
// css: 使用link 不使用Import引入 放入顶部
// js： 放入底部、
// 压缩组件

// 25. 可以使用 监听localStorage方法

// 26.
    // BFC 、将一块区域单独隔离， 里面的布局不会影响到外面的布局
    // BEM  命名规范

// 27. 
    // http状态码
    // 1xx: 临时响应
    // 2xx: 成功
    // 3xx: 重定向
    //     301: 永久移动
    //     302：临时移动
    // 4xx: 请求失败
    // 5xx: 服务器错误

