// 基准大小
const baseSize = 16.7
// 设置 rem 函数
function setRem() {
    // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
    let scale = document.documentElement.clientWidth / 414
    if (scale > 1.1) {
        scale = 1.1;
    }else if (scale < 0.9) {
        scale = 0.9;
    }
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = (baseSize * Math.min(scale)) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
    setRem()
}