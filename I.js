class I {
  constructor(position,col,angle,sens) {
    this.position=position;
    this.col=col;
    this.angle=angle;
    this.sens=sens;
		this.playing=false;
		this.delay=random(50,300);
		this.start=0;
  }

  display() {  
		if (this.playing)this.angle+=.03*this.sens;
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
			if(this.start>this.delay&&((100*this.angle%77)<1)){
				this.start=0;
				this.delay=random(10,300);
				this.playing=!this.playing;
			}
  }
}
