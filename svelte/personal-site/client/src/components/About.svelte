<script>
	import Menu from './Menu.svelte'
	import Intro from './Intro.svelte'
    import Header from './Header.svelte'
    let src="https://i.ibb.co/NFRyV8D/zari.jpg"
</script>

<Header page={"about"}/>
<!-- <Menu page={"about"} /> -->
<div class="intro-container">
    <Intro />
    <img src={src} alt="zari" /> 
</div>

<style>
    .intro-container {
        display: flex;
        margin: 8% auto;
        /* justify-content: space-between; */
        flex-direction: row;
        width: 45%;
    }

    img {
        height: 400px;
        float: right;
        width: fit-content;
        margin: 3% auto;
        display: flex;
        align-items: center;
    }
    
</style>