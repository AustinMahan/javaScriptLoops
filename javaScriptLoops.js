//1.
console.log('Quetion 1');
for(i=0; i<=1000; i+=100){
  console.log(i);
}

//2
console.log('Quetion 2');
for(i=0; i<=7; i++){
  console.log(Math.pow(2,i));
}

//3
console.log('Quetion 3');
for(i=0; i<=5; i++){
  console.log(i*2);
}

//4
console.log('Quetion 4');
for(i=1; i<=5; i++){
  console.log(i*3);
}

//5
console.log('Quetion 5');
for(i=10; i>=0; i--){
  console.log(i);
}

//6
console.log('Quetion 6');
for(i=1; i<=4; i++){
  for(j=1;j<=3; j++){
    console.log(i);
  }
}

//7
console.log('Quetion 7');
for(i=0; i<=3; i++){
  for(j=0; j<=4; j++){
    console.log(j);
  }
}

//8
console.log('Quetion 8');
for(i=1;i<=25;i++){
  if(i%2 === 0){
    console.log(i + " even");
  }else{
    console.log(i + ' odd');
  }
}

//9
console.log('Question 9');
for(i=1;i<=50;i++){
  var output = ''
  if(i%3 ===0){
    output+= 'Fizz'
  }
  if(i%5 === 0){
    output+= 'Buzz'
  }
  if(output.length == 0){
    output = i
  }
  console.log(output);
}
 //10
 console.log('Questin 10');
 var output2 = 0
 for(i=1; i<=1000; i++){
   if((i%3 ===0) || (i%5===0)){
     output2+=i
   }
 }
 console.log(output2);

 //11
 for(i=1;i<=7;i++){
   var output3 =''
   for(j=1;j<=i;j++){
     output3+='#'
   }
   console.log(output3);
 }
console.log('or...');
var pound =''
 for(i=0; i<7; i++){
   pound+= "#"
   console.log(pound);
 }
