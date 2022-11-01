var volume = new Cylinder(4,6);
console.log("Volume of a Cylinder with four decimal places using object classes="+volume.v().toFixed(4));

function Cylinder(r,h)
{
  this.radius=r;
  this.height=h;
  this.v=function(){
    return (Math.PI*r*r*h);
  }
}