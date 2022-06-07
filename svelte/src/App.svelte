<script>
	import router from "page"
	import About from './components/About.svelte'
	import Education from './components/Education.svelte'
	import Work from './components/Work.svelte'
	import Life from './components/Life.svelte'

	let page	

	router('/', () => page = About)
	router('/education', () => page = Education)
	router('/work', () => page = Work)
	router('/life', () => page = Life)

	console.log(page)
	router.start()
	
</script>

<main class="container">
	<svelte:component this="{page}" />
</main>
