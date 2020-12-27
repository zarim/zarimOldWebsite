function start() {
    // Get the modals
    var modals = document.getElementsByClassName("modal");

    // Get the buttons that opens the modals
    var btns = document.getElementsByClassName("button-style");

    // Get the <span> element that closes the modal
    var spans=document.getElementsByClassName("close");

    for(let i=0;i<btns.length;i++){
        btns[i].onclick = function() {
            modals[i].style.display = "block";
        }
    }
    for(let i=0;i<spans.length;i++){
        spans[i].onclick = function() {
            modals[i].style.display = "none";
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }
} window.onload = start;
