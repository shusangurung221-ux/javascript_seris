let number=parseInt(prompt("enter the number:"));
let count=0;
if(number==0){
    count=1;
}else{
    while(number!==0){
        count++;
        number=Math.floor(number/10);
    }
}
console.log(count);