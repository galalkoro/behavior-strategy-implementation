# Growth of a Population

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

## Syntax 
function nbYear(p0, percent, arg, p){
    let i = 0;
}

### Parameters 

**numbers** At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213


### Return Value: number

It will need 3 entire years.

### Examples:

after yo compolete the function if you play it with while argument you will get same answer when you write the wright number from 1 to endless or Boolean or true does not effect the value three.
     nb_year(1500, 5, 100, 5000) -> 15 

     nb_year(1500000, 2.5, 10000, 2000000) -> 10 


           CodeWars solutions 

[Luxisapex](https://www.codewars.com/users/Luxisapex)
```js
function nbYear(p0, percent, aug, p) {
  if(p0 >= p) {
    return 0;
  } else {
    return 1+nbYear(p0*(1+percent/100)+aug, percent, aug, p);
  }
}
```

### Strategy
 The growth of population has way to solve it I choose this way ``` while loop ``` while condition equal Boolean or true or right number `` while(p0 >= p)`` 

 codewars solutions used very siple way to solve it, that if condition p0 greater than or equal p, and return value using a simple calculation for the year.

 ### Implementation 

 The strategy I think is not clear for a person not a ware for mathematical calculations and it very important to know JavaScript Math Object and you can find it [here](https://www.w3schools.com/js/js_math.asp).





