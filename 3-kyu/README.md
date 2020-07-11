# 3 Money, Money, Money
I have a sum of money 'P' I wants to invest it, and i want to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T' on the interests that were just gained (and only on the interests part).

## Syntax
```
function calculateYears(principal, interest, tax, desired)

function calculateYears(principal, interest, tax, desired){
  debugger;
  //console.log(principal + (principal*interest) - ((principal*interest)*tax));
  let years = 0;
  if(principal === desired){
    years = 0;
  }
  let start = principal;
  while(start < desired){
    let calcInt = start * interest;
    let calcTax = calcInt * tax
    let sum = start + calcInt - calcTax;
    start === sum;
    start += calcInt - calcTax;
    years++;
  
    }
  return years;
}
```
### parameters
```
function calculateYears(principal, interest, tax, desired)
debugger;
parameters has four value
function testing(actual, expected) {
    Test.assertEquals(actual, expected)
}

Test.describe("calculateYears",function() {
Test.it("Basic tests",function() { 
    testing(calculateYears(1000, 0.05, 0.18, 1100), 3)
    testing(calculateYears(1000,0.01625,0.18,1200), 14)
    testing(calculateYears(1000,0.05,0.18,1000), 0)
})})

```
### Return Value: type
I have to wait for 3 years for the initial pricipal to ammount to the desired sum.

### Examples
```
  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
  ```
