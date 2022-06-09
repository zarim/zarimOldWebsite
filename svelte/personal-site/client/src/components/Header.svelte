<script>
    export let page;
</script>

<div class="menu">
    {#if page == "about"}
        <a href="/" class="menu-item-lined">about</a>
        <a href="/education" class="menu-item">education</a>
        <a href="/work" class="menu-item">work</a>
        <a href="/life" class="menu-item">life</a>
    {/if}
    {#if page == "education"}
        <a href="/" class="menu-item">about</a>
        <a href="/education" class="menu-item-lined">education</a>
        <a href="/work" class="menu-item">work</a>
        <a href="/life" class="menu-item">life</a>
    {/if}
    {#if page == "work"}
        <a href="/" class="menu-item">about</a>
        <a href="/education" class="menu-item">education</a>
        <a href="/work" class="menu-item-lined">work</a>
        <a href="/life" class="menu-item">life</a>
    {/if}
    {#if page == "life"}
        <a href="/" class="menu-item">about</a>
        <a href="/education" class="menu-item">education</a>
        <a href="/work" class="menu-item">work</a>
        <a href="/life" class="menu-item-lined">life</a>
    {/if}
</div>

<style>
    .menu-item {
        margin: 0 0 0 5%;
        text-decoration: none;
        color: #323649;
    }

    .menu-item-lined {
        margin: 0 0 0 5%;
        text-decoration: none;
        color: #323649;
        text-decoration: line-through;
    }

    .menu {
        justify-content: flex-end;
        display: flex;
        font-size: 23px;
        font-weight: 300;
    }
</style>