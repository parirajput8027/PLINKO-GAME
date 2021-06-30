 const Engine = Matter.Engine
 const World = Matter.World
 const Bodies = Matter.Bodies
 const Constraint = Matter.Constraint
  
 var particles=[];
 var plinkos=[];
 var divisionsHeight=200;
 var divisions=[];
 var ground;

function setup() 
{
  createCanvas(600,600);
  myengine = Engine.create()
  myworld = myengine.world
  
  ground = new Ground(200,590,800,20)

  for(var s=0; s<=width; s=s+80)
  {
   divisions.push(new Divisions(s,height-divisionsHeight/2,10,divisionsHeight))
  }
  
  // for(var p=10; p<=width; p=p+50)
  // {
  //   plinkos.push(new Plinko(p,50));
  // }
   
  for(var p=50; p<=width-10; p=p+40)
  {
   plinkos.push(new Plinko(p,100));
  }

  for(var p=20; p<=width; p=p+50)
  {
   plinkos.push(new Plinko(p,150))
  }

    for(var p=30; p<=width;p=p+40)
    {
     plinkos.push(new Plinko(p,200))
    }
   
    for(var p=40; p<=width; p=p+50)
    {
      plinkos.push(new Plinko(p,250))
    }

    for(var p=40; p<=width; p=p+40)
    {
      plinkos.push(new Plinko(p,300))
    }

    for(var p=30; p<=width; p=p+50)
    {
      plinkos.push(new Plinko(p,350))
    }


  Engine.run(myengine)

  
}
function draw()
{
  rectMode(CENTER)
  background(0); 
  drawSprites();

   if(frameCount%60===0)
   {
    particles.push(new Particles(random(width/2-10,width/2+10),10))
   
   }
   for(var i=0; i<particles.length;i++)
   {
    particles[i].display();
   }
   
  for(var s = 0; s<divisions.length;s++)
  {
   divisions[s].display();
  }

  for(var p = 0; p<plinkos.length;p++)
  {
    plinkos[p].display();
  }

  ground.display()

 }
