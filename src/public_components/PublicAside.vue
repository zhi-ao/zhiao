<script setup>
import { ref, watch } from 'vue';
import { store } from '../store/store';
import {useRoute} from 'vue-router'

const route=useRoute();
watch(route, (newValue, oldValue) => {
    switch (newValue.path) {
        case "/":
            store.changeTitle("这是首页");
            break;
        case "/about":
            store.changeTitle("这是关于页"); 
            break;
    }
})

</script>

<template>
    <div class="aside">
        <el-scrollbar>
            <span>zheshi Aside</span>
            <el-menu ref="menu" 
                class="menu" 
                background-color="lightgray" 
                active-text-color="darkorange" 
                router
                :default-active="this.$router.path"
                >
                <el-sub-menu index="1">
                    <template #title> <span>页面导航</span></template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="/">首页</el-menu-item>
                        <el-menu-item index="/about">关于</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title> <span>一级菜单</span></template>
                    <el-menu-item index="2-1">item</el-menu-item>
                    <el-menu-item index="2-2">item</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-scrollbar>

    </div>
</template>

<style scoped>
.aside {
    height: 100%;
    background: lightgray;
}

span {
    font-size: small;
}
</style>