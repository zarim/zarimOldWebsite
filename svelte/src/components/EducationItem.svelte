<script>
    export let item

    let src = item.photo
</script>

<div class="education-item">
    <div class="image">
        <img src={src} class="image" alt="" />
    </div>
    <div class="text">
        <p class="education-text"><b>{item.school}</b></p>
        <p class="education-subtext">{item.major}</p>
        <p class="education-subtext">{item.dates}</p>
    </div>
</div>

<style>
    .education-item {
        width: 400px;
        height: 250px;
        display: inline;
        margin: 3%;
        border: 1px;
        border-style: solid;
        border-color: #323649;
        position: relative;
    }

    .image {
        width: 100%;
        height: 75%;
        object-fit: contain;
        display: flex;
        margin: auto;
        padding: 1%;
    }

    .education-text {
        font-size: 20px;
        text-align: center;
    }

    .education-subtext {
        font-size: 15px;
        text-align: center;
    }

    .text {
        display: inline;
        bottom: 0;
        position: absolute;
        padding: 1%;
        width: 100%;
    }

    /* .education-item:hover {
        transform: scaleX(1.1) scaleY(1.1) scaleZ(1.1);
    } */
</style>