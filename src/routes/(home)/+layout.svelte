<script>
import {settings} from "$lib/stores/settings.js";
import {post} from "$lib/stores/post.js";

const generate = async () => {
    const res = await fetch(`/api/title/`, {
        method: 'POST',
        body: JSON.stringify($settings)
    });
    $post = await res.json()
    console.log($post)
}
</script>

<nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Insta Bros</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <!--<li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                </li>-->
            </ul>

        </div>
    </div>
</nav>
<div class="row">
    <div class="col-4">
        <div class="settings-form">
            <form>
                <div class="form-group my-3">
                    <label for="exampleInputEmail1">write the subject here:</label>
                    <input bind:value={$settings.about} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="langchain library">
                </div>
                <div class="form-group my-3">
                    <label for="question-count" class="form-label">how many slides?</label>
                    <select bind:value={$settings.slide_count} id="question-count" class="form-select"
                            aria-label="Select Field:">

                        {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as c}
                            <option value="{c}">{c}</option>
                        {/each}
                    </select>
                </div>
                <div class="form-group my-3">
                    <label for="exampleInputEmail1">write the range of words per slide here:</label>
                    <input bind:value={$settings.word_range_per_slide} type="text" class="form-control" placeholder="20 to 50">
                </div>

                <div class="form-group my-3">
                    <label for="exampleInputEmail1">how would you like the tone:</label>
                    <input bind:value={$settings.tone} type="text" class="form-control" placeholder="funny and cute">
                </div>

                <div class="form-check my-3">
                    <input class="form-check-input" type="checkbox" value="" bind:checked={$settings.emoji} >
                    <label class="form-check-label">
                        add emojis too...
                    </label>
                </div>
                <div class="d-grid gap-2 my-2">
                    <a on:click={generate} type="submit" class="btn btn-primary">Generate</a>

                </div>
            </form>
        </div>
    </div>
    <div class="col-8">
        <slot/>
    </div>
</div>
