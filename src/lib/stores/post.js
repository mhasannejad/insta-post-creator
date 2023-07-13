import {writable} from "svelte/store";

export let post = writable({
    title:'',
    slide_len:0,
    slides:[],
    description:''
})
