let a=prompt("Введите первое число:");
let b=prompt("Введите второе число:");
let c=prompt("Введите третье число:");
let exit;

if (isNaN(a) || (isNaN(b)) || isNaN(c)){
    document.querySelector(".message").innerHTML="Вы ввели не число. Пожалуйста, обновите страницу и попробуйте еще раз!"
}
else {
    let D=b**2-4*a*c;
    if (a==0) {
        console.log("Первый коэффициент равен 0, это не квадратное уравнение!");
        exit=1;
    }
    if(exit!=1)
    {
        if (D>0) console.log("Уравнение имеет два корня")
        else if (D==0) console.log("Уравнение имеет один корень")
            else console.log("Уравнение не имеет корней")
    }
}