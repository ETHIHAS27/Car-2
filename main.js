canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

car_width = 200;
car_height = 90;

car_X = 10;
car_Y = 10;

background_image = "maxresdefault (1).jpg";
car_image = "dc6LXdbMi.png";

function add(){
    background_image_tag = new Image();
    background_image_tag.onload = uplodBackground;
    background_image_tag.src = background_image;

    rover_image_tag = new Image();
    rover_image_tag.onload = uploadrover;
    rover_image_tag.src = car_image;
}

function uplodBackground(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_image_tag,car_X,car_Y,car_width,car_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
 keypressed = e.keyCode;
 console.log(keypressed);

 if(keypressed == 38){
   console.log("up");
   up();
 }

 if(keypressed == 40){
   console.log("down");
   down();
 }

 if(keypressed == 37){
     console.log("left");
    
     left();
 }

 if(keypressed == 39){
     console.log("right");

     right();
 }


}

function up(){
    if(car_Y>=0){
        car_Y-=10;
        console.log("When up arrow is pressed,x =" + car_X + ",y =" + car_Y);
        uplodBackground();
        uploadrover();
    
    }
    }
    
    function down(){
      if(car_Y <= 500){
          car_Y+=10;
          console.log("When down arrow is pressed,x = " + car_X + ",y = " + car_Y);
          uplodBackground();
          uploadrover();
      }  
    }
    
    function left(){
      if(car_X >= 0){
          car_X-= 10;
          console.log("When left arrow is pressed,x = " + car_X +",y = " + car_Y);
          uplodBackground();
          uploadrover();
      }  
    }
    
    function right(){
        if(car_X <= 700){
            car_X += 10;
            console.log("When right arrow is pressed,x = " + car_X +",y = " + car_Y);
            uplodBackground();
            uploadrover();
        }
    }
    
    Math.pow()