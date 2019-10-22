// 配置接口域名
let domain;
let publicDir = "";
if (/localhost/.test(document.location.hostname) || /192/.test(document.location.hostname)) {
    domain = "http://www.test.com"; //开发
} else {
    domain = window.location.protocol + "//" + document.location.hostname + "/index.php"; //测试与生产
    publicDir = "/show"
}

export default {
    domain,
    publicDir
}
