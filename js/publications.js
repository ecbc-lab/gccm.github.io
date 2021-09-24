/* publications.html */
const images = document.querySelectorAll('.paper-images img');
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
const modalImage = document.querySelector('.modal-image');

//console.log(images[0]);
images.forEach(image => {
    image.addEventListener('click', addModal);
})

function addModal(e) {
    console.log(e.target.src);
    const targetImageName = e.target.src;
    modal.style.display = "block";
    modalImage.src = targetImageName;
}

span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}