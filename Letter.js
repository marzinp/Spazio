class Letter {
  constructor(texte,position,col,sens) {
    this.texte=texte;
		this.sens=sens;
    this.position=position;
    this.col=col;
    this.angle=0;
		this.offset=0;
		this.jumping=false;
		this.amplitudeMax=100;
		this.amplitude=this.amplitudeMax;
  }

  display() {   
		if(!this.jumping&&random(1)>.999){
			this.jumping=true;
			this.offset=this.sens*ech*this.amplitudeMax;
		}
		if(this.jumping){
			this.offset*=sin(.1*frameCount);
			if(abs(this.offset)<.01){
				this.amplitude*=.5;
				this.offset=this.sens*ech*this.amplitude;
				if(this.amplitude<1){
					this.jumping=false;
					this.amplitude=this.amplitudeMax;
				}
			}
		}
    push();
    translate(ech*this.position.x,this.position.y+this.offset);
    rotate(this.angle);
    fill(this.col);
    text(this.texte,0,0);
    pop();
  }
}
