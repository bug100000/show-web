// 配置接口域名
let domain;
let publicDir = "";
if (/localhost/.test(document.location.hostname) || /192/.test(document.location.hostname)) {
    // domain = "http://47.104.165.184"; //服务器
    domain = "http://localhost:9001"; //本地
} else {
    domain = window.location.protocol + "//" + document.location.hostname + ":9001"; //测试与生产
    publicDir = "/show"
}

export default {
    domain,
    publicDir
}
