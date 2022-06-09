<script>
	import Header from './Header.svelte'
    import {EducationStore} from '../stores'
    import { fade, scale } from 'svelte/transition'
    import EducationItem from './EducationItem.svelte'
	import axios from 'axios';
    import {onMount} from 'svelte';

    let education = []
    // let clicked = false

    onMount(async() => {
        // HELP: devServer proxy isn't working in webpack.config.js when trying to just call /api/education so I have to do it this way for now
        const {data} = await axios.get('http://localhost:3000/api/education')
        // Desired state:
        // const {data} = await axios.get('/api/education')
        education = data
    })
</script>

<Header page={"education"}/>

<div class="education-container">
    <!-- {#each $EducationStore as ed (ed.id)}
    <div class="education">
        <EducationItem item={ed} />
    </div>
    {/each} -->
    {#each education as ed}
    <div class="education">
        <EducationItem item={ed} />
    </div>
    {/each}
</div>

<style>
    .education-container {
        display: flex;
        flex-flow: column;
        /* flex-flow: row wrap; */
        margin: 8% 0;
        align-items: center;
        /* align-content: center; */
        /* justify-content: center; */
    }

    .education {
        display: contents;
    }
</style>