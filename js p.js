                                     //   the first
function primeNum(x){
    if(x===1){
        return"this number is not prime";
    }
    for(let i=2; i<=x ; i++){
        if(x% i===0){
            return"  this number is prime";
        }
    }
    return"prime";
}
console.log(primeNum(3));
                                      //  the second
let arr=[50,5,66,4,8]
function largeAndLow(){
    let max = Math.max.apply(null,arr);
    let min=Math.min.apply(null,arr);
     for (let i = 0; i <= arr.length; i++) {
  
     console.log(Math.max.apply(null,arr));
     
     break;
  }
  } largeAndLow();
                                       // the third
function num (b,n){
    let result=1;
   if(n===0){
       return 1;
   }else{
       for(let i=1 ; i<=n ;i++){
        result*= b;

    } return  result;
}}
console.log(num(3,4));
                                       // the fourth
let x,y,chr;
for(x=1; x <=6; x++)
{
for (y=1; y < x; y++)
 {
chr=chr+("*");        
  }
 console.log(chr);
 chr='';    
    }
                                    //    the fifth
let sum = 0;
for (let x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);