import { reactive } from 'vue';

const store=reactive({
    headertitle:"这是吐槽栏",
    changeTitle(text){
        this.headertitle=text;
    }
})

export {store};