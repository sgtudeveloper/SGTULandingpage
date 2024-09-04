document.addEventListener("DOMContentLoaded", function () {
  const imageIds = [
    "images/Sikkim Global Information Centre Post (2) png.png",
    "images/Sikkim Global Information Centre Post (3) png.png",
    "images/Sikkim Global Information Centre Post (1) png.png",
  ]; // List your image filenames here
  let currentIndex = 0;
  const imageElement = document.getElementById("carousel-image");

  function changeImage() {
    currentIndex = (currentIndex + 1) % imageIds.length; // Cycle through images
    imageElement.src = imageIds[currentIndex];
  }

  // Change image every 7 seconds
  setInterval(changeImage, 7000);
});
