const images = ["./recursos/slider1.jpg", "./recursos/slider2.jpg", "./recursos/slider3.jpg", "./recursos/slider4.jpg"];
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let currentImageIndex = 0;

const filterEffects = [
  "brightness(50%)",
  "contrast(200%)",
  "grayscale(75%)",
  "blur(5px)",
];
const soundEffect = new Audio("../recursos/transition.mp3");

function drawImage() {
  const image = new Image();
  image.src = images[currentImageIndex];
  image.onload = function() {
  const filter = filterEffects[Math.floor(Math.random() * filterEffects.length)];
  ctx.filter = filter;
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  ctx.filter = "none";
  setTimeout(nextImage, 5000);
  soundEffect.play();
  };
}
function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  drawImage();
}

drawImage();

const h1 = document.querySelector('#slideshow-container h1');
const button = document.querySelector('#slideshow-container button');

const bounceAnimation = anime({
  targets: [h1, button],
  translateY: {
    value: [+100, 0],
    duration: 2000,
    elasticity: 400,
  },
  loop: true
});
