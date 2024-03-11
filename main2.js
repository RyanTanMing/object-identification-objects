status=""
objects=[]
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
if (status!="") {
    for (let index = 0; index < objects.length; index++) {
       document.getElementById('status').innerHTML="object detected "+objects.length
       fill("red")
       p=floor(objects[index].confidence*100)
       text(objects[index].label+" "+p+"%",objects[index].x,objects[index].y)
       noFill()
       stroke("red")
       rect(objects[index].x,objects[index].y,objects[index].width,objects[index].height)

    }
}
}
function modelloaded(){
    console.log("model loaded")
    status=true
    if (page=="bedroom") {
        img=img
    }
    else if (page=="livingroom") {
        img=img1
    }
    else if (page=="bottles") {
        img=img2
    }
    else if (page=="book") {
        img=img3
    }
    else if (page=="door") {
        img=img4
    }
    objectdetect.detect(img,gotresult)

}





function gotresult(error,results) {
    if (error==true) {
        console.error(error)
    }
    else{
        console.log(results)
        objects=results
    }
}