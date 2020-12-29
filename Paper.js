class Paper {
    constructor(x,y,radius){
        var options={
        
        'isStatic':false,
        'restitution': 0.6,
        'friction': 0.5,
        'density': 1.2
    }
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
  World.add(world,this.body);
    
    this.image=loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/paper.png");
}
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);

  
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();
    }
}