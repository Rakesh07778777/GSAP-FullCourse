const main = document.querySelector('#main');
const cursor = document.querySelector('.cursor');
const image = document.querySelector('.image')

main.addEventListener('mousemove', (dets) =>{
    gsap.to(cursor, {
        x : dets.x,
        y : dets.y,
        duration: 1,
        ease: 'back.out'
    })
});

image.addEventListener('mouseenter', (dets) =>{
    cursor.innerHTML = 'Explore'
        gsap.to(cursor, {
            scale: 4,
            backgroundColor: '#ffffff53'
        })
})
image.addEventListener('mouseleave', (dets) =>{
    cursor.innerHTML = ''
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: '#fff'
        })
})
