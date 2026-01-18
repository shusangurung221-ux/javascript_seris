let years=parseInt(prompt("enter the years:"));
if(years%4===0){
if(years%100===0){
    if(years%400===0){
        console.log("leap years");
    }else{
        console.log("not a leap years");
    }
}else{
    console.log("leap years");
}
}
else{
    console.log("not a leap years");
}
