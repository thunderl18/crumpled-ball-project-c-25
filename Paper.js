class Paper{
	constructor(x,y,r)
	{
		var options = {
			'density':4,
			'friction': 0.9,
			'restitution':1.5
		  };
      
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-80)/2, options)
		World.add(world, this.body);
        this.image = loadImage("paper.png");
	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("green");
			ellipse(0,0,this.r,this.r);

			pop()
	}

}