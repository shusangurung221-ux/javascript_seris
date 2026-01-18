let number=parseInt(prompt("enter the number:"));
let sum=0,rem;

    while(number!==0){
     rem=number%10;
     sum=sum+rem;
    number=Math.floor(number/10);
    }
    console.log(sum);