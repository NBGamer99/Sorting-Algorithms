
let values = [];
var i = 0,j = 0;
var Arraylength = 200;


function setup() {
  createCanvas(800, 400);
  values = new Array(Arraylength);
  for(let k = 0; k<values.length;k++){
    values[k] = round(random(height));
  }
  fill(255);
}


function draw() {
  background(0);
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
    noLoop();
  }
  
  for(let l = 0; l<values.length;l++){
    stroke(30);
    fill(255);
    rect(l*(width/values.length),height-values[l],((l+1)*(width/values.length)-l*(width/values.length)),height);
  }
  
  fill(color("red"));
  rect(j*(width/values.length),height-values[j],((j+1)*(width/values.length)-j*(width/values.length)),height);
  
}

function swap(arr,a,b){
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  
}