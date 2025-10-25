let timeLIne = gsap.timeline();
const button = document.querySelector('.btn');
const closed = document.querySelector('.ri-close-line')

button.addEventListener('click' , () => {
    timeLIne.to('.container', {
    right: 0,
    duration: 0.8,
})

timeLIne.from('.container h4' ,{
    opacity: 0,
    x: 150,
    duration: 0.8,
    stagger: 0.3 
})
})
closed.addEventListener('click' , () => {
    timeLIne.to('.container', {
    right: '-40%',
    duration: 0.8,
})

// timeLIne.from('.container h4' ,{
//     opacity: 0,
//     x: 150,
//     duration: 0.8,
//     stagger: 0.3 
// })
})


//  there is shortcut if do timeLIne.pause() , then it will paused and if timeLine.reverse(), then it will play.
//and if create a function and inside the function we write pause and reverse then it will animation same as i do in the above

