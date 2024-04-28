 
 //Assignment num 1

for (i = 0 ; i <= 10 ; i++ )
{
    console.log(i);
}
//Assignment num 2
for (i=0 ; i<=50; i++){
    if( i % 2 !==0){
        console.log(i);
    }
}

//Assignment num 3
  function calculation(celsius){
   fahrenheit = celsius*1.8+32
   return fahrenheit;
 }
 console.log(calculation(20));

 //Assignment num 4
let numbers = [4,7,6,8,2,9]
   
// let sum = 0;
// for(number of numbers){
//     sum = sum + number
// }
// console.log(sum);

let result = numbers.reduce((sum, number) =>  sum += number);
console.log(result);

// function reduction(sum , number){
//    return sum += number

// }

// Assignment num 5
 let quxritat = [7,5,4,8,6]
//  let Average = quxritat.reduce((sum ,x)  => sum / 5 )
//  console.log(Average);

  let melsi = function reduction(sum , quxri){
      sum += quxri
      return Average = (sum)/5
      
 }
 console.log(melsi);

 //Assignment number 6

 let NumberArray = [5,-2,7,-10,6,4,-9,3]

//  for (number of NumberArray){
//     if(number >= 0){
//         console.log(number)
//     }
//  }

 let positiveNum = NumberArray.filter(number => number >= 0);
 console.log(positiveNum);

 //Assignment num 7

 let Rumi =[2,3,4,6,7,8,9];
 console.log(Rumi);
 let first = Rumi.unshift(1); // returns legth of an array
 console.log(first); 
 console.log(Rumi);
 
 let middle = Rumi.splice(4,0,5) //returns new Array of elements
 console.log(middle);
 console.log(Rumi);
 let last = Rumi.push(10,11,12,13); // returns legth of an array
 console.log(last); 