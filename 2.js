var x = 0;
var ID = 0;

function change_picture() {
    var pic = document.getElementById("picture").src = "pic2.jpg";
}

function backTo_picture() {
    var image = document.getElementById("picture").src = "pic1.jpg";
}

function change() {
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
    var y = document.getElementById("im").src = images[x];
    x++;
    if (images.length == x) {
        x = 0;
    }
}

function fn1() {
    window.clearInterval(ID);
    ID = window.setInterval(change, 1000);
}
var a = 0;

function change_image() {
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
    var y = document.getElementById("im").src = pics[a];
    a++;
    if (pics.length == a) {
        a = 0;
    }
}

function fn2() {
    window.clearInterval(ID);
    ID = window.setInterval(change_image, 1000);
}

function fn3() {
    var z = document.getElementById("head");
    z.style.fontSize = 40
    z.style.color = "blue";
    z.style.fontStyle = "italic";
    z.style.fontWeight = "bold";
    z.style.backgroundSize = "cover";
}

function fn4() {
    var z = document.getElementById("head");
    z.style.fontSize = 40
    z.style.color = "red";
    z.style.fontStyle = "italic";
    z.style.fontWeight = "bold";
    z.style.backgroundSize = "cover";
}