<script>
	import Menu from './Menu.svelte'
	import axios from 'axios';
    import {onMount} from 'svelte';
	import WorkItem from './WorkItem.svelte'
    import Header from './Header.svelte';

    let work = []

    onMount(async() => {

		try {
			const {data} = await axios.get('/api/work')
			console.log(data)
			work = data
		} catch (error) {
			console.log(error)
		}
    })
	
</script>

<Header page={"work"}/>
<!-- <Menu page={"work"}/> -->

<div class="work-container">
    {#each work as w}
    <div class="work">
        <WorkItem item={w} />
    </div>
    {/each}
</div>

<style>
    .work-container {
        display: flex;
        flex-flow: row wrap;
        margin: 8%;
        justify-content: center;
    }

    .work {
        display: contents;
    }
</style>
