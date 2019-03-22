// const container = document.querySelector('.circle')
const container_circle = document.querySelector('.circle_container')
const container_dot = document.querySelector('.dot_container')
const circle = document.querySelector('.circle')
const title = document.querySelector('.title')
let a = document.querySelectorAll('a')

let mouse = {
    x : 80,
    y : 130
}

window.addEventListener('mousemove', (event) =>
{
    mouse.x = event.clientX
    mouse.y = event.clientY

    container_dot.style.top = event.clientY + 'px'
    container_dot.style.left = event.clientX + 'px'

})

let pos = {
    x : 80,
    y : 130
}

const loop = () => {
    window.requestAnimationFrame(loop)

    var distX = mouse.x - pos.x;
    var distY = mouse.y - pos.y;

    pos.x += distX/8;
    pos.y += distY/8;

    container_circle.style.left = pos.x + "px";
    container_circle.style.top = pos.y + "px";
}
loop()

title.addEventListener("mouseenter", function( event ) {   
    circle.classList = "circle active_title"
}, false);

title.addEventListener("mouseleave", function( event ) {   
    circle.classList = "circle"
}, false);



for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("mouseenter", function() {
        circle.classList = "circle active_a"
    });
}

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("mouseleave", function() {
        circle.classList = "circle"
    });
}

