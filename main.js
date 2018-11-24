
// * FULL SCREEN GALLERY
// selectors
const imageArray = Array.from(document.querySelectorAll('.frame img'))
const fullGallery = document.querySelector('.full-gallery');
const fullImage  = document.querySelector('.full-gallery img')
const leftArrow = document.querySelector('#slide-left')
const rightArrow = document.querySelector('#slide-right')
const cancelBtn = document.querySelector('#slide-close')

// ! Controls the index of images to retrieve from the Array
let indexCtrl

// toggle visibility class
function galleryShow() {
  indexCtrl = imageArray.indexOf(this);
  fullGallery.classList.toggle('hidden')
  fullImage.setAttribute('src', this.getAttribute('src'))
}

function nextImage() {
  if (indexCtrl === (imageArray.length - 1)) {
    indexCtrl = 0;
    fullImage.setAttribute('src', imageArray[0].getAttribute('src'))
  }else {
    fullImage.setAttribute('src', imageArray[indexCtrl + 1].getAttribute('src')); 
    indexCtrl += 1;
  }
};

function previousImage() {
  if (indexCtrl === 0) {
    indexCtrl = (imageArray.length -1);
    fullImage.setAttribute('src', imageArray[indexCtrl].getAttribute('src'))
  }else {
    fullImage.setAttribute('src', imageArray[indexCtrl - 1].getAttribute('src')); 
    indexCtrl -= 1;
  }
};

// EVENT LISTENERS
// Cancel button
cancelBtn.addEventListener('click', () => fullGallery.classList.toggle('hidden'));
// Add a function to each Image to display the full-screen Gallery
imageArray.forEach(item => item.addEventListener('click', galleryShow))
// Slide Buttons
rightArrow.addEventListener('click', nextImage);
leftArrow.addEventListener('click', previousImage);
/************************************************** */

