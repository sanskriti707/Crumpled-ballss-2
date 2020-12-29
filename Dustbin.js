class Dustbin {
    constructor(x,y){
        
    this.x=x;
    this.y=y;
    this.width=100;
    this.height=50;
    this.thickness=10;
    this.angle=0;
    this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.height,this.thickness,{isStatic:true});
    this.leftBody=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.width,this.height,this.thickness,{isStatic:true});
    Matter.Body.setAngle(this.leftBody,this.angle);
    this.rightBody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.width,this.height,this.thickness,{isStatic:true});
    World.add(world,this.bottomBody);
    World.add(world,this.leftBody);
    World.add(world,this.rightBody);
    
    this.image=loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/dustbingreen.png");
}
    display(){
        var posBottomBody=this.bottomBody.position;
        var posLeftBody=this.rightBody.position;
        var posRightBody=this.leftBody.position;
        
        

        push();
        translate(posLeftBody.x,posLeftBody.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255)
        stroke("pink");
        rotate(this.angle);
        rect(0,0,this.thicknesss,this.height);
        pop();
        
        push();
        translate(posRightBody.x,posRightBody.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255)
        stroke("pink");
        rotate(-1*this.angle);
        rect(0,0,this.thicknesss,this.height);
        pop();

        push();
        translate(posBottomBody.x,posBottomBody.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255)
        stroke("pink");
        rotate(this.angle);
        rect(0,0,this.thicknesss,this.height);
        pop();

    
    
    }
}