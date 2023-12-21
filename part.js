// Select the body of the document
let body = document.body;

body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = "center";
body.style.height = '100vh'; // This makes the body fill the full height of the viewport


let containerBtn = document.createElement('div');
containerBtn.className = "containerbtn";
containerBtn.style.width = 800 + 'px';
containerBtn.style.height = 500 + 'px';
containerBtn.style.background = "gray";
containerBtn.style.display = 'flex';
containerBtn.style.justifyContent = 'center';
containerBtn.style.overflowX = "hidden";
containerBtn.style.position = 'relative';


let container = document.createElement('div');
container.className = "container";
container.style.width = 800 + 'px';
container.style.height = 500 + 'px';
container.style.background = "gray";
container.style.display = 'flex';
container.style.overflowX = "hidden";


let images = ['./carouselImg/cat.jpg', './carouselImg/claus.jpg', './carouselImg/snowguy.jpg']

images.forEach(function (path, index) {
    let img = document.createElement('img')
    img.src = path;
    img.alt = 'img' + (index + 1)
    img.style.flexShrink = 0;
    img.style.minWidth = 100 + "%";
    img.style.height = "auto";
    img.style.objectFit = "contain";
    container.appendChild(img)
})

let btnLeft = document.createElement('button');
btnLeft.innerText = "<";
btnLeft.style.position = 'absolute';
btnLeft.style.top = '50%';
btnLeft.style.left = '0';
btnLeft.style.transform = 'translateY(-50%)'; // This centers the button vertically
btnLeft.style.marginLeft = '1px';
btnLeft.style.border = 4 + 'px solid white'; // This sets the border width, style, and color
btnLeft.style.display = 'flex';
btnLeft.style.alignItems = 'center';
btnLeft.style.justifyContent = 'center';
btnLeft.style.padding = 0.5 + 'rem';
btnLeft.style.cursor = 'pointer';
btnLeft.style.width = '50px';
btnLeft.style.height = '50px';
btnLeft.style.borderRadius = '50%';
btnLeft.style.opacity = 0.5;
btnLeft.style.marginLeft = '60px';
// JavaScript


container.appendChild(btnLeft);

let btnRight = document.createElement('button');
btnRight.innerText = ">";
btnRight.style.position = 'absolute';
btnRight.style.top = '50%';
btnRight.style.right = '0';
btnRight.style.transform = 'translateY(-50%)'; // This centers the button vertically
btnRight.style.marginLeft = '1px';
btnRight.style.border = '1px solid white'; // This sets the border width, style, and color
btnRight.style.display = 'flex';
btnRight.style.alignItems = 'center';
btnRight.style.justifyContent = 'center';
btnRight.style.padding = 0.5 + 'rem';
btnRight.style.cursor = 'pointer';
btnRight.style.width = '50px';
btnRight.style.height = '50px';
btnRight.style.borderRadius = '50%';
btnRight.style.opacity = 0.5;
btnRight.style.marginRight = '60px';

container.appendChild(btnRight);

// btnLeft eventListener
let imgWidth = 800; // The width of your images
let currentIndex = 0; // The index of the currently displayed image

btnRight.addEventListener('click', function () {
    currentIndex++; // Move to the next image
    if (currentIndex >= images.length) { // If we've gone past the last image
        currentIndex = 0; // Loop back to the first image
    }
    container.scrollLeft = currentIndex * imgWidth; // Scroll the container
});

btnLeft.addEventListener('click', function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1
    }
    container.scrollLeft = currentIndex * imgWidth;
})


function moveImage() {
    currentIndex++; // Move to the next image
    if (currentIndex >= images.length) { // If we've gone past the last image
        currentIndex = 0; // Loop back to the first image
    }
    container.scrollLeft = currentIndex * imgWidth; // Scroll the container
}

// Call moveImage every 1000 milliseconds (or 1 second)
let intervalId = setInterval(moveImage, 2000);

// If you want to stop moving the images after some time, you can use clearInterval
// For example, this will stop moving the images after 10 seconds:
setTimeout(function () {
    clearInterval(intervalId);
}, 10000);



containerBtn.appendChild(container)
document.body.appendChild(containerBtn);
