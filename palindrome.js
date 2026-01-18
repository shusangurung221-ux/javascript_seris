let number=parseInt(prompt("enter the number:"));
let reverse=0,rem,org;
org=number;
while(number!=0){
    rem=number%10;
    reverse=reverse*10+rem;
    number=Math.floor(number/10);
}
if(reverse===org){
    console.log("palindrome number=",reverse);
}else{
    console.log("not a palindrom number=",reverse);
}