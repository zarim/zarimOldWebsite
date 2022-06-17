<script>
    import { Link } from 'svelte-routing';
    export let page;
</script>

<div class="menu">
    <!-- {#if page == "about"}
        <Link to="/" style="text-decoration: line-through;">about</Link>
        <Link to="education">education</Link>
        <Link to="work">work</Link>
        <Link to="life">life</Link>
    {/if}
    {#if page == "education"}
        <Link to="/">about</Link>
        <Link to="education" style="text-decoration: line-through;">education</Link>
        <Link to="work">work</Link>
        <Link to="life">life</Link>
    {/if}
    {#if page == "work"}
        <Link to="/">about</Link>
        <Link to="education">education</Link>
        <Link to="work" style="text-decoration: line-through;">work</Link>
        <Link to="life">life</Link>
    {/if}
    {#if page == "life"}
        <Link to="/">about</Link>
        <Link to="education">education</Link>
        <Link to="work">work</Link>
        <Link to="life" style="text-decoration: line-through;">life</Link>
    {/if} -->
    {#if page == "about"}
        <Link to="/" style="color: #323649;">About</Link>
        <Link to="work">Work</Link>
        <Link to="resume">Resume</Link>
    {/if}
    {#if page == "work"}
        <Link to="/">About</Link>
        <Link to="work" style="color: #323649;">Work</Link>
        <Link to="resume">Resume</Link>
    {/if}
    {#if page == "resume"}
        <Link to="/">About</Link>
        <Link to="work">Work</Link>
        <Link to="resume" style="color: #323649;">Resume</Link>
    {/if}
</div>

<style>
    :global(a) {
        margin: 0 0 0 5%;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.2);
        /* color: #323649; */
        margin: auto;
    }

    .menu {
        justify-content: center;
        display: flex;
        font-size: 20px;
        font-weight: 300;
        margin: auto;
        width: 20%;
        padding-bottom: 50px;
    }

</style>