<script>
	import Header from './Header.svelte'
	import axios from 'axios';
    import {onMount} from 'svelte';
	import WorkItem from './WorkItem.svelte'

    let work = []

    onMount(async() => {

		try {
			// HELP: devServer proxy isn't working in webpack.config.js when trying to just call /api/work so I have to do it this way for now
			const {data} = await axios.get('http://localhost:3000/api/work')
            // Desired state:
            // const {data} = await axios.get('/api/work')
			console.log(data)
			work = data
		} catch (error) {
			console.log(error)
		}
    })
	
</script>

<Header page={"work"}/>

<div class="work-container">
    <!-- {#each $EducationStore as ed (ed.id)}
    <div class="education">
        <EducationItem item={ed} />
    </div>
    {/each} -->
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
        margin: 8% 0;
        justify-content: center;
    }

    .work {
        display: contents;
    }
</style>
