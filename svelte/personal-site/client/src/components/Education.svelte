<script>
	import Header from './Header.svelte'
    import EducationItem from './EducationItem.svelte'
	import axios from 'axios';
    import {onMount} from 'svelte';

    let education = []

    onMount(async() => {
        const {data} = await axios.get('/api/education')
        education = data
    })
</script>

<Header page={"education"}/>

<div class="education-container">
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
        margin: 8% 0;
        align-items: center;
    }

    .education {
        display: contents;
    }
</style>