function setup() {
  
  angleMode(DEGREES);
  createCanvas(400, 400);
  console.log("Mera Bharat Mahan!");
  
}
function draw(){
  
  
  background(255);
  var fx = 0;
  var fy = 0;
  var len = fx+300;
  var wid = fy+50;
  
  //Orange
  fill(251,153,2);
  stroke(0);
  rect(fx,fy,len,wid);
  
  //White
  fill(255);
  rect(fx,fy+wid,len,wid);
  
  //Green
  fill(102,176,50);
  rect(fx,fy+wid+wid,len,wid);
  
   //Flag rod
  strokeWeight(6);
  stroke(0)
  line(0,0,0,400);
  
  //Ashok Chakra
  var cx = len/2;
  var cy = 75;
  noFill();
  stroke(0,0,255);
  strokeWeight(2);
  ellipse(cx,cy,48,48);
  fill(cx,cy,255);
  ellipse(len/2,75,13,13);
  
  //spokes
  translate(len/2,75);
  for(i=0;i<=360;i+=15){
    
    var x = 24*cos(i);
    var y = 24*sin(i);
    line(0,0,x,y);
  }
  
  
}