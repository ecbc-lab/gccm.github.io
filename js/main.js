/* index.html */
const circles = document.querySelectorAll('.circle');
const headers = document.querySelectorAll('.header-nav');
const links = document.querySelectorAll('.header-links');
const image = document.querySelector('.popup');

circles.forEach(circle => {
    circle.addEventListener('mouseenter', enterCircle);
    circle.addEventListener('mouseleave', leaveCircle);

});

headers.forEach(header => {
    header.addEventListener('click', highlight);
});

links.forEach(link => {
    link.addEventListener('click', highlight);
})

const area2 = window.getComputedStyle(document.querySelector('.circle-2')).gridArea
const area3 = window.getComputedStyle(document.querySelector('.circle-3')).gridArea
const area4 = window.getComputedStyle(document.querySelector('.circle-4')).gridArea


function enterCircle(e) {

    if (e.currentTarget.className.includes('circle-2')) {
        console.log(e.currentTarget);
    };
    if (e.currentTarget.className.includes('circle-2')) {
        image.src = "img/WSS-IVUS.gif";
        this.style.gridArea = "6 / 1 / span 4 / span 4"
    }
    else if (e.currentTarget.className.includes('circle-3')) {
        image.src = "img/DeepIVUS_auto.gif";
        this.style.gridArea = "6 / 5 / span 4 / span 4"
    }
    else if (e.currentTarget.className.includes('circle-4')) {
        image.src = "img/stent_walkthru.gif";
        this.style.gridArea = "10 / 2 / span 4 / span 4"
    }
    //image.style.display="inline" 
}

function leaveCircle(e) {
    if (e.currentTarget.className.includes('circle-2')) {
        image.src = "img/Stent_vs_nostent.jpeg";
        this.style.gridArea = area2;
    }
    else if (e.currentTarget.className.includes('circle-3')) {
        image.src = "img/Stent_vs_nostent.jpeg";
        this.style.gridArea = area3;
    }
    else if (e.currentTarget.className.includes('circle-4')) {
        image.src = "img/Stent_vs_nostent.jpeg";
        this.style.gridArea = area4;
    }
}

function highlight(e) {

    //e.preventDefault();
    const parentClass = '.' + e.target.parentElement;
    e.target.parentElement.style.background = "darkgray";
    console.log(window.getComputedStyle(document.querySelector(parentClass)));
}