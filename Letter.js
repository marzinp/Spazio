class Letter {
  constructor(texte,position,col) {
    this.texte=texte;
    this.position=position;
    this.col=col;
    this.angle=0;
  }

  display() {   
    push();
    translate(ech*this.position.x,this.position.y);
    rotate(this.angle);
    fill(this.col);
    text(this.texte,0,0);
    pop();
  }
}