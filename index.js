// array = [2, 7, 5, 4, 8, 6, 3,9,0];

// var target = 9;

// function search() {
//   arr = [];
//   for (i = 0; i <= array.length - 1; i++) {
//     for (j = 1; j <=array.length - 1; j++) {
//       if (array[i] + array[j] == target) {
//         arr.push({
//           num1: array[i],
//           num2: array[j],
//         });
//       } else {
//       }
//     }
//   }

//   console.log(arr);
// }

// search();

// Question-1 Ends









// Question -2 Start


array =[2,3,4,5,6]

function reverse(){
    // array=[]
    for(i=array.length-1;i>=0;i--){
       console.log(array[i])
       for(j=0;j<=array.length-1;j++){
             array.push(array[i])
       }
    }

    console.log(array)
}

reverse()