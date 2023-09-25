//Take input a number from the user and check number is pallindrome or not

let num = parseInt(prompt("Enter year to check: "))

let leapYear = (num) =>{
    if((num%4==0 && !(num%100==0)) || (num%400==0)){
        return "Leap Year"
    }
    else{
        return "Not a Leap Year"
    }
}

console.log(leapYear(num))