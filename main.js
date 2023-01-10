canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100
rover_height=90

nasa_mars_array=["nasa1.jpg","nasa2.jpg","nasa3.jpg","nasa4.jpg"];
random_number=Math.floor(Math.random()*4)
rover_x=10
rover_y=10
background_image=nasa_mars_array[random_number];
rover_image="rover.png";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;

}
function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover (){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",My_keydown);
function My_keydown(e){
    Keypressed=e.keyCode;
    console.log(Keypressed);
    if(Keypressed=="38"){
        up();
        console.log("up");
    }
    if(Keypressed=="40"){
        down();
        console.log("down");
    }
    if(Keypressed=="37"){
        left();
        console.log("left");
    }
    if(Keypressed=="39"){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y >= 0){
        rover_y=rover_y-1;
        console.log("when up arrow is pressed, x = "+rover_x+" , y = "+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if(rover_y <= 500){
        rover_y=rover_y+1;
        console.log("when down arrow is pressed, x = "+rover_x+" , y = "+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(rover_x >= 0){
        rover_x=rover_x-1;
        console.log("when left arrow is pressed, x = "+rover_x+" , y = "+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(rover_x <= 700){
        rover_x=rover_x+1;
        console.log("when right arrow is pressed, x = "+rover_x+" , y = "+rover_y);
        uploadbackground();
        uploadrover();
    }
}