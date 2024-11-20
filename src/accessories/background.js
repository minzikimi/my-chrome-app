const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

export function setRandomBackgroundImage() {
  const randomisedImage = images[Math.floor(Math.random() * images.length)];
  
  const bgImage = document.createElement("img");
  bgImage.src = "./img/" + randomisedImage;
  bgImage.id = "background-image";
  
  document.body.prepend(bgImage);
}

