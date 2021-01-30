const images = Array.from(document.querySelectorAll('.image'));

window.addEventListener('DOMContentLoaded', (e) => {
    images.forEach((image, index) => {
        setTimeout(() => {
            image.classList.add('active')
        }, index * 100)
    }) 
})