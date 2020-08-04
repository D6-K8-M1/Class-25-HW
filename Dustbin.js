class Dustbin {
    constructor(x,y){
        this.dustbinWidth=200
        this.dustbinHeight=215
        this.wallThickness=20
        this.image=loadImage("dustbingreen.png");

   

   this.bottomBody=Bodies.rectangle(x,y,this.dustbinWidth,this.wallThickness,{isStatic:true});
   this.leftWall=Bodies.rectangle(x-this.dustbinWidth/2, y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight, {isStatic:true});
   this.rightWall=Bodies.rectangle(x+this.dustbinWidth/2, y-this.dustbinHeight/2, this.wallThickness,this.dustbinHeight,{isStatic:true});
   
   World.add(world, this.bottomBody);
   World.add(world, this.leftWall);
   World.add(world, this.rightWall);

    
   
}

display(){

    var bottomPos=this.bottomBody.position;
    var leftPos=this.leftWall.position;
    var rightPos=this.rightWall.position;


    push();
    translate(leftPos.x, leftPos.y);
    angleMode(RADIANS);
    rotate(this.angle);
    pop();

    push();
    translate(rightPos.x, rightPos.y);
    angleMode(RADIANS);
    rotate(-1*this.angle);
    pop();

    push();
    translate(bottomPos.x, bottomPos.y);
    angleMode(RADIANS);
    imageMode(CENTER);
    image(this.image,0,-this.dustbinHeight/2, this.dustbinWidth, this.dustbinHeight);
    pop();
}
}