
let values = [];
var i = 0,j = 0;
input = 100;
let states = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(input)
  for(let k = 0; k<values.length;k++){
    values[k] = round(random(height));
    states[i] = -1; 
  }
  // frameRate(10);
  QuickSort(values,0,values.length-1) 
}


function draw() {
  background(0);
  
  for(let l = 0; l<values.length;l++){
    stroke(30);
    fill(255);
    if (states[l] == 0) {
      fill(color('red'));
    }else if (states[l] == 1){
        fill(color('rgb(62,211,62)'));
    }else{
      fill(255)
    }
    rect(l*(width/values.length),height-values[l],((l+1)*(width/values.length)-l*(width/values.length)),height);
}  
}

async function Partition(arr,start,end){
  for (let p = start; p < end; p++){
    states[p] = 1; 
  }
  let pivotIndex = start;
  let pivotValue = arr[end];
  states[pivotIndex] = 0;
  for (let i = start; i<end;i++){
    if(arr[i] < pivotValue){
      await swap(arr,i,pivotIndex)
      states[pivotIndex] = -1;
      pivotIndex += 1;
      states[pivotIndex] = 0;
    }
  }
  await swap(arr,pivotIndex,end);
  for (let p = start; p < end; p++){
    if (p != pivotIndex){
    states[p] = -1;  
    }
  }
  return pivotIndex;
}

async function QuickSort(arr,start,end){
  if (start >= end){
      return;
  }
  let index = await Partition(arr,start,end);
  states[index] = -1; 
  await Promise.all([QuickSort(arr,start,index-1), QuickSort(arr,index + 1 ,end)]);

}


async function swap(arr,a,b){
  await sleep(30);
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}