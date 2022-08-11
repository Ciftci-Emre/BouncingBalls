var c = document.getElementById("myCanvas");
var canvas = c.getContext("2d");

class Object{
    constructor(x,y,r=Math.floor(Math.random() * 20)+5){
        this.x=x;
        this.y=y;
        this.r=r;
    }
    color="#"+Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6, '0').toUpperCase();
    dx=Math.floor(Math.random() * 10)+1;
    dy=Math.floor(Math.random() * 10)+1;
}

const objects=[];

for(i=0;i<100;i++){
    objects[i]=new Object(Math.floor(Math.random()*100)+40,Math.floor(Math.random()*100)+40);
  
}

window.onload = function() {
    update();
};

function update(){
    for(i=0;i<objects.length;i++){
	    if(objects[i].x+objects[i].r>1000 || objects[i].x-objects[i].r<0){
	    	 objects[i].dx=objects[i].dx*-1;
	    }
    	if(objects[i].y+objects[i].r>450 || objects[i].y-objects[i].r<0){
	    objects[i].dy=objects[i].dy*-1;
    	}
	objects[i].x+=objects[i].dx; 
        objects[i].y+=objects[i].dy;
    }
    erase(canvas);
    render(objects);
    window.requestAnimationFrame(update);
}

function render(objects){
    for(i=0;i<objects.length;i++){
        canvas.beginPath(); 
        canvas.arc(objects[i].x, objects[i].y, objects[i].r, 0, 2 * Math.PI);
        canvas.fillStyle=objects[i].color;
        canvas.fill();
        canvas.stroke();
    }
}

function erase(canvas){
    canvas.clearRect(0,0,1000,450);
    canvas.fillStyle = "black";
    canvas.fillRect(0, 0, 1000, 450);
}
