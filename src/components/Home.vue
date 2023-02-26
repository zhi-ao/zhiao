<script setup>
import { ref } from 'vue'
import {store} from '../store/store'


const img_left = ref(0);

const items = ref([
    {
        key:0,
        class: "usr_img surround",
        src: "../../public/img/img1.jpg",
        onenter: "leftChange()",
        title: "标题一",
        message: "这是标题一信息"
    },
    {
        key:1,
        class: "usr_img surround",
        src: "../../public/img/img1.jpg",
        onenter: "leftChange()",
        title: "标题二",
        message: "这是标题二信息"
    }, {
        key:2,
        class: "usr_img surround",
        src: "../../public/img/img1.jpg",
        onenter: "leftChange()",
        title: "标题三",
        message: "这是标题三信息"
    }
])

function itemChange(event,text) {
    let itemLeft = event.target.offsetLeft;
    img_left.value = itemLeft - 220;
    store.changeTitle(text);
}

</script>

<template>
    <div>

        <div id="surd_div">
            <figure v-for="item in items" :key="item.key">
                <img :class=item.class :src=item.src @mouseenter="itemChange($event,item.message)">
                <figcaption>
                    <p>{{ item.title }}</p>
                </figcaption>
            </figure>
        </div>
        <img id="main_img" src="../../public/img/point out.jfif" />
    </div>
</template>

<style scoped>
#main_img {
    width: 250px;
    height: 250px;
    position: relative;
    top: 0px;
    left: v-bind("img_left + 'px'");
    transition: 1s;
}

#surd_div {
    /* position: relative;
    top: -100px;
    width: 100%; */
    display: flex;
    align-self: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

figure {
    margin: 0;
}

p {
    text-align: center;
}

p {
    font-size: 20px;
    font-weight: bold;
}

.surround {
    height: 250px;
    width: 250px;
    border: 2px outset;
    border-color: gray;
    border-radius: 50px;

    transition: 0.5s 0.1s;
}

.surround:hover {
    border-radius: 25px;
    filter: drop-shadow(0 18px 1em gray);
    scale: 1.05;
}
</style>