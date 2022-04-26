class O {
  constructor(position, colA, colB,sens) {
    this.position=position;
    this.colA=colA;
    this.colB=colB;
    this.angle=0;
    this.sens=sens;
		this.playing=false;
		this.delay=int(random(1,10))*100;
		this.start=0;
  }

  display() {   
    push();
    translate(ech*this.position.x, this.position.y);
    if (this.playing)this.angle+=PI*this.sens*0.025;
		rotate(this.angle);
    stroke(this.colB);
    fill(this.colB);
    ellipse(ech*30, 0, ech*65, ech*65);
    noFill();
    stroke(this.colA);
    strokeWeight(ech*4);
    ellipse(0, 0, ech*65, ech*65);
    pop();
		this.start++;
			if(this.start>=this.delay){
				this.start=0;
				this.sens=random(1)>.5?-1:1
				this.delay=int(random(1,10))*100;
				this.playing=!this.playing;
			}
  }
}
