import React from 'react';

/* transition */
// 语法：
// transition: property duration timing-function delay; 
// 定义和用法
// transition 属性是一个简写属性，用于设置四个过渡属性：
// transition-property     规定设置过渡效果的 CSS 属性的名称。
// transition-duration     规定完成过渡效果需要多少秒或毫秒。
// transition-timing-function     规定速度效果的速度曲线。
// transition-delay           定义过渡效果何时开始。
// 注释：请始终设置 transition-duration属性，否则时长为 0，就不会产生过渡效果。

// transition-property
// 如果你想让状态只在某一个属性上延迟，比如height，我们就可以这样写：transition: 1s height;

// transition-duration
// 在CSS3引入transition之前，所有的状态变化都是瞬间完成的，可以看个例子transition.html。如果给状态变化指定
// transition: 1s; // 延迟到1s完成

// transition-delay
// transition: 1s height, 1s width;
// 如果想让height先发生变化结束以后，再让width发生变化。可以为width指定一个delay参数。
// transition: 1s height, 1s 1s width;

// transition-timing-function
// 但是，状态的变化速度，默认不是匀速的，而是逐渐放慢(ease)。
// transition: 1s ease;
// 除了ease以外，还有其他模式：

// linear：匀速（等于 cubic-bezier(0,0,1,1)）。
// ease：开始和结束慢，中间快（等于cubic-bezier(0.25,0.1,0.25,1)）。
// ease-in：加速（等于 cubic-bezier(0.42,0,1,1)）
// ease-out：减速（等于 cubic-bezier(0,0,0.58,1)）。
// ease-in-out：和ease类似，但比ease幅度大（等于 cubic-bezier(0.42,0,0.58,1)）。
// cubic-bezier函数：自定义速度模式。可能的值是 0 至 1 之间的数值。 

// transition
// 以上各个属性可以简写为：transition: 1s 1s height ease;
// 需要注意的是各个属性的顺序可以更改，
// 但是transition-duration和transition-delay这两个属性之间的顺序必须是一前一后。

// 总结
// 目前，各大浏览器（包括IE 10）都已经支持无前缀的transition，所以transition已经可以很安全地不加浏览器前缀。
// 不是所有的CSS属性都支持transition。
// transition需要明确知道，开始状态和结束状态的具体数值，才能计算出中间状态。比如，height从0px变化到100px，transition可以算出中间状态。但是，transition没法算出0px到auto的中间状态，也就是说，如果开始或结束的设置是height: auto，那么就不会产生动画效果。类似的情况还有，display: none到block，background: url(foo.jpg)到url(bar.jpg)等等。
// transition需要事件触发，所以没法在网页加载时自动发生。
// transition是一次性的，不能重复发生，除非一再触发。
// 一条transition规则，只能定义一个属性的变化，不能涉及多个属性。
// animation就是为了解决这些问题而提出的。 transition也经常结合transform来使用。



/* transfrom */
// Transform字面上就是变形，改变的意思。
// 在CSS3中transform主要包括以下几种：旋转rotate、扭曲skew、缩放scale和移动translate以及矩阵变形matrix 

// 语法：
//    transform ： none | <transform-function> [ <transform-function> ]* 
//    也就是：
//    transform: rotate | scale | skew | translate |matrix;

//    一、旋转rotate
//         rotate(<angle>) ：通过指定的角度参数对原元素指定一个2D rotation（2D 旋转），
//         需先有transform-origin属性的定义。
//         transform-origin定义的是旋转的基点，
//        其中angle是指旋转角度，如果设置的值为正数表示顺时针旋转，
//        如果设置的值为负数，则表示逆时针旋转。
//        如：transform:rotate(30deg):

//     二、移动translate
//         移动translate我们分为三种情况：
//             translate(x,y)水平方向和垂直方向同时移动（也就是X轴和Y轴同时移动）；
//             translateX(x)仅水平方向移动（X轴移动）；
//             translateY(Y)仅垂直方向移动（Y轴移动），

//         具体使用方法如下：
//             1、translate(<translation-value>[, <translation-value>]) ：
//                 通过矢量[tx, ty]指定一个2D translation，tx 是第一个过渡值参数，
//                 ty 是第二个过渡值参数选项。如果 未被提供，则ty以 0 作为其值。也就是translate(x,y),
//                 它表示对象进行平移，按照设定的x,y参数值,当值为负数时，反方向移动物体，其基点默认为元素 中心点，
//                 也可以根据transform-origin进行改变基点。
//                 如 transform:translate(100px,20px):
//                     transform:translateX(100px):
//                     transform:translateY(20px):

                    // const btn = document.querySelector('.btn')
                    // btn.addEventListener('click', function() {
                    //     const ball = document.querySelector('.ball')
                    //     ball.style.transform = 'translate(120px, 0px)' 
                    //     ball.style.transition = '1s'
                    // }) 

                    // 自动刷新 
                    // window.onload = function () {
                    //     const ball = document.querySelector('.ball')
                    //     ball.style.transform = 'translate(120px, 0px)'
                    //     ball.style.transition = '1s'
                    // }

//     三、缩放scale
//             1、scale(<number>[, <number>])：提供执行[sx,sy]缩放矢量的两个参数指定一个2D scale（2D缩放）。
//             如果第二个参数未提供，则取与第一个参数一样的值。
//             scale(X,Y)是用于对元素进行缩放，可以通过transform-origin对元素的基点进行设置，同样基点在元素中心位置；
//             基中X表示水平方向缩放的倍数，Y表示垂直方向的缩放倍数，而Y是一个可选参数，如果没有设置Y值，
//             则表示X，Y两个方向的缩放倍数是一样的。并以X为准。
//             如：
//                 transform:scale(2,1.5):
//                 transform:scaleX(2):
//                 transform:scaleY(2):

//     四、扭曲skew
//         1、skew(<angle> [, <angle>]) ：
//             X轴Y轴上的skew transformation（斜切变换）。
//             第一个参数对应X轴，第二个参数对应Y轴。
//             如果第二个参数未提供，则值为0，也就是Y轴方向上无斜切。skew是用来对元素进行扭曲变行，
//             第一个参数是水平方向扭曲角度，第二个参数是垂直方向扭曲角度。
//             其中第二个参数是可选参数，如果没有设置第二个参数，那么Y轴为0deg。
//             同样是以元素中心为基点，我们也可以通过transform-origin来改变元素的基点位置。
//             如：
//                 transform:skew(30deg,10deg):
//                 transform:skewX(30deg)
//                 transform:skewY（10deg）

//     五、矩阵matrix
//             matrix(<number>, <number>, <number>, <number>, <number>, <number>) ：
//                     以一个含六值的(a,b,c,d,e,f)变换矩阵的形式指定一个2D变换，
//                     相当于直接应用一个[a b c d e f]变换矩阵。
//                     就是基于水平方向（X轴）和垂直方向（Y轴）重新定位元素,此属性值使用涉及到数学中的矩阵，

//                     ransform-origin(X,Y):用来设置元素的运动的基点（参照点）。
//                     默认点是元素的中心点。其中X和Y的值可以是百分值,em,px，
//                     其中X也可以是字符参数值left,center,right；Y和X一样除了百分值外还可以设置字符值top,center,bottom，
//                     这个看上去有点像我们background-position设置一样
//                     transform-origin:(left,top):
//                     transform-origin:right
//                     transform-origin(25%,75%)



/* animation */
// 语法
//     @keyframes keyframes - name {
//         [[from | to | <百分比> ] [, from | to | <百分比> ]* block ]*
//     }
//     keyframes-name
//     帧列表的名称。 名称必须符合 CSS 语法中对标识符的定义。
//     from
//     等效于 0%.
//     to
//     等效于 100%

//     例如： 
//     @keyframes dropdown {
//         0% { top: 0; left:0px;}
//         30% { top: 300px; left:0px;}
//         50% { top: 150px; left:0px;}
//         70% { top: 300px; left:0px;}
//         80% { top: 0px;  left:-200px;}
//         100% { top: 0px;  left:0px;}
//       }

//     简写属性形式:
//       animation:
//       [animation-name] [animation-duration] // 动画的名称、持续时间
//       [animation-timing-function][animation-delay] // 关于时间的函数(properties/t)、延迟时间
//       [animation-iteration-count] [animation-direction] // 播放次数、播放顺序
//       [animation-fill-mode] [animation-play-state]; // 播放前或停止后设置相应样式、控制动画运行或暂停

//     animation: name duration timing-function delay iteration-count direction fill-mode play-state;

//     1. animation-name：指定要绑定到选择器的关键帧的名称
//             keyframename 指定要绑定到选择器的关键帧的名称
//             none         指定有没有动画（可用于覆盖从级联的动画）
//             例： animation-name: keyframename|none;

//     2. animation-timing-function： 属性定义了动画的播放速度曲线
//             ease、
//             ease-in、
//             ease-out、
//             ease-in-out、
//             linear、
//             cubic-bezier(number, number, number, number)
//             默认值，如果没有显示写调用的函数，则默认为ease。

//     3. animation-direction： 动画方向
//             animation-direction: normal 正序播放
//             animation-direction: reverse 倒序播放
//             animation-direction: alternate 交替播放
//             animation-direction: alternate-reverse 反向交替播放
//             animation-direction: normal, reverse
//             animation-direction: alternate, reverse, normal

//     4. animation-delay： 动画延迟
//             animation-delay属性定义动画是从何时开始播放，
//             即动画应用在元素上的到动画开始的这段时间的长度。
//             默认值0s，表示动画在该元素上后立即开始执行。
//             该值以秒(s)或者毫秒(ms)为单位。

//     5. animation-fill-mode: 动画填充模式 (是指给定动画播放前后应用元素的样式。)
//             animation-fill-mode: none 动画执行前后不改变任何样式
//             animation-fill-mode: forwards 保持目标动画最后一帧的样式
//             animation-fill-mode: backwards 保持目标动画第一帧的样式
//             animation-fill-mode: both 动画将会执行 forwards 和 backwards 执行的动作。

//     6. animation-timing-functio: 动画播放状态(定义动画是否运行或者暂停。可以确定查询它来确定动画是否运行。)
//             默认值为running
//             running 动画正常播放
//             paused 动画暂停播放

export default class extends React.PureComponent {
    render() {
        return <div ></div>
    }
}


