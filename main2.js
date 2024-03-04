status=""
function setup() {
    canvas=createCanvas(550,550)
canvas.center()
objectdetect=ml5.objectDetector("cocossd",modelloaded)
page=localStorage.getItem("page")
}
function preload() {
    img=loadImage("download.jpg")
    img1=loadImage("tv.jpg")
    img2=loadImage("bottles.jpg")
    img3=loadImage("book.jpg")
    img4=loadImage("door.jpg")
}
function draw() {
if (page=="bedroom") {
    image(img,0,0,550,550)
}
else if (page=="livingroom") {
    image(img1,0,0,550,550)
}
else if (page=="bottles") {
    image(img2,0,0,550,550)
}
else if (page=="book") {
    image(img3,0,0,550,550)
}
else if (page=="door") {
    image(img4,0,0,550,550)
}
}
function modelloaded(){
    console.log("model loaded")
    status=true
    objectdetect.detect(img,gotresult)
}
function gotresult(error,results) {
    if (error==true) {
        console.error(error)
    }
    else{
        console.log(results)
    }
}