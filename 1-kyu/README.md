# IQ Test 

Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

Note: I keep in my mind that the task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)


## Syntax

function iqTest(numbers){
    let x = numbers.split();
}


### Prameters 

**numbers** number 3 is Bob while the rest of the numbers are others the second number is others while the rest are  differs.

### Return Value ` number`

the function is easy to understand but little bit tricky at CodeWars users are using var, but If use the var I will get eror in some line instead if I use let I will not get error and opposite it will happen for them also.

``` js
function iqTest(numbers){
  let x = numbers.split(' ');
  let bob = [], 
  others = [], 
  i, 
  differs = numbers.length;
  
  for (i=0; i<differs;i++){
   if (x[i] % 2 === 0){
     bob.push(i);
   } else {
     others.push(i);
   }
    
    
    if (i > 1 && bob.length > others.length && others.length > 0){
      return others[0]+1
    }
    if (i > 1 && others.length > bob.length && bob.length > 0){
      return bob[0]+1
    }
  }
}
console.log(iqTest('2 4 7 8 10'));



         1- CodeWars solutions 

         const iqTest = test => {
  const numbers = test.split(" ");
  const evens = numbers.filter(el => el%2 );
  const odds = numbers.filter(el => !(el%2));
  const differ = evens.length == 1 ? evens[0] : odds[0]
  
  return numbers.indexOf(differ) + 1
}

         2- CodeWars solutions 

function iqTest(numbers) {
    numbers = numbers.split(" ");
    console.log(numbers);
    let arrOdd = numbers.filter(x => x % 2 != 0),
        arrEven = numbers.filter(x => x % 2 == 0);

    return arrEven.length == 1 ? numbers.indexOf(arrEven[0]) + 1 : numbers.indexOf(arrOdd[0]) + 1;
}
```

### Strategy
 
 This IQ Test has many ways to solve it, some developers are using mathematical calculations, and some use arrays ..... 

 ### Implementation 

 The developers strategy is a bit confused and hard specially if you are not use to math operations it called [JavaScript Arithmetic Operators](https://www.w3schools.com/js/js_arithmetic.asp)
 and also difficult when you do not have any idea of math object that's called [JavaScript Math Object](https://www.w3schools.com/js/js_math.asp)