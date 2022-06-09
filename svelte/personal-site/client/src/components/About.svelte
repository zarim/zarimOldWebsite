<script>
	import Header from './Header.svelte'
	import Intro from './Intro.svelte'

    let src="https://i.ibb.co/NFRyV8D/zari.jpg"
</script>

<Header page={"about"} />
<div class="intro-container">
    <Intro />
    <img src={src} alt="zari" /> 
</div>

<style>
    .intro-container {
        display: flex;
        margin: 8% 0;
        justify-content: space-between;
    }

    img {
        height: 500px;
        float: right;
    }
    
</style>