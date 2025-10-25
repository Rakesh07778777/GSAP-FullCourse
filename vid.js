
function breakText () {
let heading = document.querySelector('.container h1');
let textContent = heading.textContent;

let textSplit = textContent.split('');

let halfValue = textSplit.length / 2;

let clutter = '';

textSplit.forEach((value, index) =>{
    if (index < halfValue) {
        clutter += `<span class = "a">${value}</span>`
    } else{
        clutter += `<span class = "b">${value}</span>`

    }
 heading.innerHTML = clutter;
});

}
breakText()

gsap.from('h1 .a', {
    opacity: 0,
    y: 80,
    duration : 0.6,
    delay: 0.5,
    stagger: 0.15
})
gsap.from('h1 .b', {
    opacity: 0,
    y: 80,
    duration : 0.6,
    delay: 0.5,
    stagger: -0.15
})