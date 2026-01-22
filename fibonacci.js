let n=parseInt(prompt("enter the number:"));
let count =0;
let a=0,b=1,nxt;
while(count<n){
    console.log(a);
    nxt=a+b;
    a=b;
    b=nxt;
    count++;
}