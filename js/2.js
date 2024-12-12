let msg=prompt("Введите число:");
if (isNaN(msg)){
    document.querySelector(".message").innerHTML="Это не число!"
}
else{
    document.querySelector(".message").innerHTML="Это число!";
    if (msg==0 ) console.log("Это ноль!");
    else if(msg>0) console.log("Введенное число " + msg + " положительное!");
    else console.log("Введенное число " + msg + " отрицательное!");
}