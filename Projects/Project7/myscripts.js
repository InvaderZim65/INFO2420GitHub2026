// Image Arrays from Project 6
var imgArray = new Array(
    'CoupleBike3Lg.jpg',
    'OwnerMotorCycleLg.jpg',
    'OwnersHikingLg.jpg',
    'SkiCoupleLg.jpg'
);

var titleArray = new Array(
    'Mountain Biking at Sunset',
    'Motorcycle Touring',
    'Sunset Relaxing',
    'Skiing Together'
);
    
var imgPath = "Images/fullsize/";

// Thumbnail Image Swap Script
function swapImage(imgID) {
    var theImage = document.getElementById('theImage');
    var textDiv = document.getElementById('bottomText');

    theImage.src = imgPath + imgArray[imgID];
    textDiv.innerHTML = titleArray[imgID];
}

// Preload Images Script
function preloadImages() {		
    for(var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image();
        tmpImg.src = imgPath + imgArray[i];
    }
    
    var logo2 = new Image();
    logo2.src = 'Images/Logo2.jpg';
}

// Logo Rollover Script
function logoHover() {
    document.getElementById('logoImg').src = 'Images/Logo2.jpg';
}

function logoNormal() {
    document.getElementById('logoImg').src = 'Images/Logo.jpg';
}