class Particles
{
  constructor(x,y)
  {
   var options = 
   {
     restitution:0,
     isStatic:false
    }
   this.body = Bodies.circle(x,y,5,options)
   this.color=color(random(0,255),random(0,255),random(0,255));
   World.add(myworld,this.body)
  }
  display()
  {
    var pos = this.body.position
    //var angle = this.body.angle
    push()
    translate(pos.x,pos.y)
    //rotate(angle)
    fill(this.color)
    ellipse(0,0,10,10)
    pop()
  }
}