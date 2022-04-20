
// first problem \first solution

function distinct(arr1,arr2){

let sum = 0;


for (let i = 0; i < arr2.length; i++){
  if (arr1.includes(arr2[i]) !== true){
sum+= arr2[i];
  }
}

  for (let i =0; i < arr1.length; i++){
    if (arr2.includes(arr1[i]) !== true){
  sum+= arr1[i];
    }

}

return sum;

}

var arr1 = [3, 1, 7, 9];
var arr2 = [2, 4, 1, 9, 3];

console.log(distinct(arr1,arr2));

// second problem \second solution

function overlape(arr1,arr2){

  var som = 0;

  array = arr1.concat(arr2);
  
  
  for (var i =0; i < array.length; i++){

  som+= array[i];
    
  }

  let result = som - distinct(arr1,arr2);
  
  return  result;
  }

  console.log(overlape([12, 13, 6, 10],[13, 10, 16, 15]));


// // hash tables function , i tried with hash tables, but i felt cluless at this point.



function elemInCommon(arr1,arr2){
  let obj = {}
  let sum = 0;


  for(let i = 0; i < arr2.length; i++){
    obj[arr2[i]] = true;
  }
  for(let j = 0; j < arr1.length; j++){
    if (obj[arr1[j]] !== true) {
      sum += arr1[j] ;
    }

  }
  for(let i = 0; i < arr1.length; i++){
    obj[arr1[i]] = false;
  }
  for(let j = 0; j < arr2.length; j++){
    if (obj[arr2[j]] !== false) {
      sum += arr2[j] ;
    }

  }
  return sum;
  
}


console.log(elemInCommon(arr1,arr2));
// second problem /second solution 

function overlape2(arr1,arr2){
  let obj = {}
  let sum = 0;


  for(let i = 0; i < arr2.length; i++){
    obj[arr2[i]] = true;
  }
  for(let j = 0; j < arr1.length; j++){
    if (obj[arr1[j]] === true) {
      sum += arr1[j]*2 ;
    }

  }
  return sum;
}

console.log(overlape2([12, 13, 6, 10],[13, 10, 16, 15]));