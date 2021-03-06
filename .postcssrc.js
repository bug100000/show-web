// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-pxtorem": {
      // 需要与font-size基准值相同
      "rootValue": 16.7,
      "propList": ["*"],
      selectorBlackList: ["van-"]
    }
  }
}
