function check(a, b) 
{
    return(a==50 || b==50 || a+b==50)
}

    var number1=parseInt(prompt('Enter the first number '));
    var number2=parseInt(prompt('Enter the Second number '));
    console.log("two numbers are : " ,number1, "and" ,number2);
    console.log(check(number1, number2));