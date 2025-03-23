document.addEventListener("DOMContentLoaded", function() {
    let imgs = document.getElementsByClassName("image")
        imgModal = document.getElementById('image')
        modal = document.getElementById('myModal')

    for (let i = 0; i < imgs.length; i++){
        imgs[i].addEventListener("click", function (e) {
            zoom_in(e);
        })
    }

    function zoom_in(e) {
        modal.style.display = "block"
        imgModal.src = e.target.src
    }

    let span = document.getElementsByClassName('close')[0];
    span.onclick = function () {
        modal.style.display = 'none';
    };

    modal.onclick = function (e) {
        if (e.target == modal) {
            modal.style.display = 'none'
        }
    }
    
});