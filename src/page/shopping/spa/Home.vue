<template>
    <div class="Home">
        123
    </div>
</template>

<script>

export default {
    name: "Home",
    data() {
        return {};
    },
    mounted: function() {
        this.init();
        // 内容部分
        // this.$refs.yBodyBody.style.height = Number(document.documentElement.clientHeight) - 176 + "px";
    },
    methods: {
        init() {},
        Jump(hash) {
            this.$router.push(hash);
        }
    }
};
</script>
<style lang="less">
* {
    margin: 0;
    padding: 0;
}

// 自定义样式top
.Home {

}
// 自定义样式buttom
</style>