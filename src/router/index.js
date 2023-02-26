import {createRouter,createWebHashHistory} from 'vue-router';

import App from "../App.vue";
import Home from "../components/Home.vue";
import About from "../components/About.vue";


const routes=[
    {
        path:"/",
        component:Home,
    },{
        path:"/about",
        component:About,
    }
]

export default createRouter({
    history:createWebHashHistory(),
    routes,
})