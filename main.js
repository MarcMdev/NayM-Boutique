const images = document.querySelectorAll('.frame img')
const fullFrame = document.querySelector('#full-frame')



images.forEach(node => node.addEventListener('click', () => console.log(node)))

console.log(images)


