<script>
	import Header from './Header.svelte'
    import {EducationStore} from '../stores'
    import { fade, scale } from 'svelte/transition'
    import EducationItem from './EducationItem.svelte'
	
</script>

<Header page={"education"}/>

<div class="education-container">
    {#each $EducationStore as ed (ed.id)}
    <div class="education">
        <EducationItem item={ed} />
    </div>
{/each}
</div>

<style>
    .education-container {
        display: flex;
        flex-flow: row wrap;
        /* flex-direction: row;
        flex-wrap: wrap;
        justify-content: center; */
        margin: 5% 0;
    }

    .education {
        display: contents;
    }
</style>