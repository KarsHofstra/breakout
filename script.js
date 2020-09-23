class Plusje {
    constructor(Xmid, Ymid) {
        this.Xmid = Xmid;
        this.Ymid = Ymid;
        this.width = 10
        
    }
    show() {
        fill(127,127,127);
        line(this.Xmid - this.width, this.Xmid + this.width, this.Ymid, this.Ymid);
        line(this.Xmid, this.Xmid, this.Ymid - this.width, this.Ymid + this.Width);
    }
}




/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  
  dx = 3;
  dy = 3;
  x = 100;
  y = 100;
  t=0 
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  
  
  
  
  
  
 */  background('blue');
  t= t+0.2
  if(x<-25 || x>1255)(
    dx = -dx
  );
  if(y<-25 || y>695)(
    dy = -dy
  );
  x = x + dx + 3*sin(t);
  y = y + dy + 3*cos(t);

  // stel vulkleur in
  fill(100, 100, 255);


  // teken een cirkel
  ellipse(x,y,50,50);
  

  
}