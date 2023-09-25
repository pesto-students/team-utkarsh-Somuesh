//Take input a number from the user and check number is pallindrome or not

let num = prompt("Enter number: ")

let pallindrome = (num) =>{
    let i=0;
    let j= num.length - 1;
    // console.log(j)
    while(i<=j){
        if(num[i] != num[j]){
            return "Not Pallindrome";
        }
        i++;
        j--;
    }

    return "Pallindrome"
}

console.log(pallindrome(num))