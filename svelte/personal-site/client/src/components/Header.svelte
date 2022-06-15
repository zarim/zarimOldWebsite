<script>
    import { Link } from 'svelte-routing';
    export let page;
</script>

<div class="menu">
    {#if page == "about"}
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
    {/if}
</div>

<style>
    :global(a) {
        margin: 0 0 0 5%;
        text-decoration: none;
        color: #323649;
    }

    .menu {
        justify-content: flex-end;
        display: flex;
        font-size: 23px;
        font-weight: 300;
    }
</style>