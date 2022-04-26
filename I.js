class I {
  constructor(position,col,angle,sens) {
    this.position=position;
    this.col=col;
    this.angle=angle;
    this.sens=sens;
		this.playing=false;
		this.delay=int(random(1,10))*25;
		this.start=0;
  }

  display() {  
		if (this.playing)this.angle+=PI*this.sens*0.01;
     			push();
    			translate(ech*this.position.x,this.position.y);
   			 	rotate(this.angle);    			
    			stroke(this.col);
    			strokeWeight(ech*4);
    			line(0,0,0,-ech*250);
    			line(0,-ech*250,ech*10,-ech*230);
    			line(0,-ech*250,-ech*10,-ech*230);
    			pop();	
			this.start++;
			if(this.start>=this.delay){
				this.start=0;
				this.sens=random(1)>.5?-1:1;
				this.delay=int(random(1,10))*25;
				this.playing=!this.playing;
			}
  }
}
