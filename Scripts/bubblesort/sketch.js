
let values = [];
var i = 0,j = 0,Arraylength = 20;

function setup() {
  createCanvas(800, 400);
  colorMode(HSB,360,200,250);
  values = new Array(Arraylength);
  for(let k = 0; k<values.length;k++){
  values[k] = round(random(height));
  }

}

function draw() {
  background(255);
  if (values[j] > values[j+1]){
        swap(values,j,j+1);
  }
  
  if (i < values.length){
    j = j+1;
  if( j >= values.length-i-1){
    j = 0;
    i = i+1;
    }
  }else{
    console.log("finneshed");
    // noLoop();
  }
  
  for(let l = 0; l<values.length;l++){
    stroke(255);
    var colorCycle = frameCount%360;
    fill(color(colorCycle,100,100));
    rect(l*(width/values.length),height-values[l],((l+1)*(width/values.length)-l*(width/values.length)),height);
  }
}

function swap(arr,a,b){
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}