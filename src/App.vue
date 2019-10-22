<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
body {
    margin: 0;
}

#app{
    /* max-width: 414px; */
    margin: 0 auto;
    min-height: 100vh;
    background-color: white;
    border-top: 0.1px solid transparent;
}
</style>
