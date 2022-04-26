class O {
  constructor(position, colA, colB,sens) {
    this.position=position;
    this.colA=colA;
    this.colB=colB;
    this.angle=0;
    this.sens=sens;
		this.playing=false;
		this.delay=random(50,300);
		this.start=0;
  }

  display() {   
    push();
    translate(ech*this.position.x, this.position.y);
    if (this.playing)this.angle+=.1*this.sens;
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
			if(this.start>this.delay && abs(this.angle)%HALF_PI<.02){
				this.start=0;
                                this.sens=random(1)>.5?-1:1
				this.delay=random(50,300);
				this.playing=!this.playing;
			}
  }
}
