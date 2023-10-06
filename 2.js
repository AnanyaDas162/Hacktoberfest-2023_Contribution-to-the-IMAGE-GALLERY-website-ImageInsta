var x = 0;  // Initialize variable 'x' to 0
var ID = 0;  // Initialize variable 'ID' to 0

function change_picture() {
    var pic = document.getElementById("picture").src = "pic2.jpg";  // Change the 'src' attribute of the element with id "picture" to "pic2.jpg"
}

function backTo_picture() {
    var image = document.getElementById("picture").src = "pic1.jpg";  // Change the 'src' attribute of the element with id "picture" back to "pic1.jpg"
}

function change() {
    // Define an array 'images' with image URLs
    var images = new Array();
    images[0] = "img2.jpeg";
    images[1] = "img3.jpeg";
    images[2] = "img4.jpeg";
    images[3] = "img8.jpeg";
    images[4] = "img9.jpeg";
    images[5] = "img10.jpeg";
    images[6] = "img11.jpeg";
    images[7] = "img16.jpeg";
    images[8] = "img17.jpeg";

    var y = document.getElementById("im").src = images[x];  // Change the 'src' attribute of the element with id "im" to the current image URL
    x++;  // Increment 'x'

    // Reset 'x' to 0 if it reaches the end of the array
    if (images.length == x) {
        x = 0;
    }
}

function fn1() {
    window.clearInterval(ID);  // Clear the interval set by 'ID'
    ID = window.setInterval(change, 1000);  // Set a new interval calling 'change' function every 1000 milliseconds (1 second)
}

var a = 0;

function change_image() {
    // Define an array 'pics' with image URLs
    var pics = new Array();
    pics[0] = "img5.jpeg";
    pics[1] = "img6.jpeg";
    pics[2] = "img7.jpeg";
    pics[3] = "img12.jpeg";
    pics[4] = "img13.jpeg";
    pics[5] = "img14.jpeg";
    pics[6] = "img15.jpeg";
    pics[7] = "img18.jpeg";
    pics[8] = "img19.jpeg";

    var y = document.getElementById("im").src = pics[a];  // Change the 'src' attribute of the element with id "im" to the current image URL
    a++;  // Increment 'a'

    // Reset 'a' to 0 if it reaches the end of the array
    if (pics.length == a) {
        a = 0;
    }
}

function fn2() {
    window.clearInterval(ID);  // Clear the interval set by 'ID'
    ID = window.setInterval(change_image, 1000);  // Set a new interval calling 'change_image' function every 1000 milliseconds (1 second)
}

function fn3() {
    var z = document.getElementById("head");
    z.style.fontSize = 40;  // Set font size to 40
    z.style.color = "blue";  // Set text color to blue
    z.style.fontStyle = "italic";  // Set font style to italic
    z.style.fontWeight = "bold";  // Set font weight to bold
    z.style.backgroundSize = "cover";  // Set background size to cover
}

function fn4() {
    var z = document.getElementById("head");
    z.style.fontSize = 40;  // Set font size to 40
    z.style.color = "red";  // Set text color to red
    z.style.fontStyle = "italic";  // Set font style to italic
    z.style.fontWeight = "bold";  // Set font weight to bold
    z.style.backgroundSize = "cover";  // Set background size to cover
}
