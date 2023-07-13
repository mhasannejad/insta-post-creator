<script>
    import {post} from "$lib/stores/post.js";


    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    }
</script>

<h2>{$post.title}</h2>
{#each $post.slides as slide}
    <div class="card my-4" style="">
        <div class="card-body">
            <a class="icon-link" href="#" on:click={()=>{copyText(slide)}}>
                <svg class="bi" aria-hidden="true">
                    <use xlink:href="#box-seam"></use>
                </svg>
                Icon link
            </a>
            <p class="card-text">{slide}</p>

        </div>
    </div>
{/each}

<p>{$post.description}</p>
