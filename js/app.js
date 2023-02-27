// Images for the slideshow
const images = ["./recursos/slider1.jpg", "./recursos/slider2.jpg", "./recursos/slider3.jpg", "./recursos/slider4.jpg"];

// Get the canvas element and its context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the current image index to 0
let currentImageIndex = 0;

// Function to draw the current image on the canvas
function drawImage() {
  // Load the image
  const image = new Image();
  image.src = images[currentImageIndex];

  // When the image has loaded, draw it on the canvas
  image.onload = function() {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Schedule the next image to be drawn after 5 seconds
    setTimeout(nextImage, 5000);
  };
}

// Function to go to the next image
function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  drawImage();
}

// Start the slideshow
drawImage();
