import {writable} from "svelte/store";

export const settings = writable({
    about: '',
    slide_count: 0,
    word_range_per_slide: '',
    tone: '',
    emoji: false
})
