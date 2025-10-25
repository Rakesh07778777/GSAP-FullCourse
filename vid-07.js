
window.addEventListener('wheel', (scrolling) => {
    if(scrolling.deltaY > 0) {
        gsap.to('.texts', {
            transform: 'translateX(-200%)',
            duration: 2,
            repeat: -1,
            ease: 'none'
        })
        gsap.to('.texts img', {
            rotate: 180
        })
    } else{
         gsap.to('.texts', {
            transform: 'translateX(0%)',
            duration: 2,
            repeat: -1,
            ease: 'none'
        })
            gsap.to('.texts img', {
            rotate: 0
        })
    }
})