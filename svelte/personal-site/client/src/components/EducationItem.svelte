<script>
    export let item
    let clicked = false

    const click = function () {
        clicked = !clicked
        console.log(item)
        console.log(clicked)
    }
    
    let src = item.photo
</script>

<div class="education-container">
    {#if clicked}
        <div class="education-description">
            <button class="close-button" on:click={click}>X</button>
        </div>
    {:else }
        <div class="education-item">
            <button class="image" style="background-color: {item.backgroundColor};" on:click={click}>
                <img src={src} class="image" alt="" />
            </button>
            <div class="text">
                <p class="education-text"><b>{item.school}</b></p>
                <p class="education-subtext">{item.major}</p>
                <p class="education-subtext">{item.dates}</p>
            </div>
        </div>
    {/if}
</div>

<style>
    .education-item {
        width: 350px;
        height: 500px;
        display: inline;
        position: relative;
    }

    .image {
        width: 100%;
        height: 75%;
        object-fit: contain;
        display: flex;
        margin: auto;
        padding: 1%;
        cursor: pointer;
    }

    .education-text {
        font-size: 20px;
        text-align: left;
    }

    .education-subtext {
        font-size: 15px;
        text-align: left;
    }

    .text {
        margin: 1% 0;
        position: absolute;
        padding: 1%;
        width: 100%;
    }

    button {
        border: none;
    }

    .close-button {
        background-color: transparent;
        float: right;
        font-size: 25px;
        margin: 2%;
        cursor: pointer;
    }

    .education-container {
        display: flex;
        height: 500px;
    }

    .education-description {
        width: 700px;
        height: 75%;
        display: inline;
        position: relative;
        background-color: aqua;
        margin: 0 0 0 3%;
    }
</style>