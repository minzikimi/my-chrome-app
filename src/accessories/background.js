


const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];

const randomisedImage = images[Math.floor(Math.random() * images.length)];

// console.log(randomisedImage);

const bgImage = document.createElement("img");


bgImage.src = "./img/" + randomisedImage;

bgImage.id = "background-image"; 
document.body.prepend(bgImage); 


