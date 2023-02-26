<script setup>
import { ref } from 'vue'
import {store} from '../store/store.js'


</script>

<template>
    <el-header class="header">
        <div class="lcontent">
            <!-- <router-link class="router_link" to="/" >首页</router-link>
            <router-link class="router_link" to="/about">关于</router-link> -->
            <span>{{ store.headertitle }}</span>
        </div>
        <div class="rcontent">
            <el-avatar>user</el-avatar>
        </div>
    </el-header>   
</template>

<style scoped>
.header{
    background:linear-gradient(to left,white,lightgray);
    border-left: 2px solid;
    border-color: gray;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.lcontent{
    /* width: 8%; */
    display: flex;
    /* justify-content: space-between; */
    text-underline-offset: none;
}
.router_link{
    position: relative;
    text-decoration: none;
    color: black;
    padding-left: 10px;
    padding-right: 10px;
    
}
.router_link::after{
    content: "";
    position: absolute;
    background-color: black;
    left: 0%;
    top: 125%;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
}
.router_link:active::after{
    transform:scaleX(1);
    transition: .2s;
}
.router_link:focus::after{
    transform:scaleX(1);
}
.router_link::before{
    content: "";
    height: 2px;
    background-color: black;
    position: absolute;
    bottom: 125%;
    left: 100%;
    width:0;
    transition: .5s;
}

.router_link:hover::before{
    left: 0;
    width: 100%;
}

/* 设置当前 hover 对象后所有 before 对象 left 值为0 */
.router_link:hover~.router_link::before{
    left: 0;
}


</style>