class Calculator {
    
    add(num1,num2){
        return (num1+num2);
    }
    subtract(num1,num2){
        return (num1-num2);
    }
    multiply(num1,num2){
        return (num1*num2);
    }
    divide(num1,num2){
        return (num1/num2);
    }
}

//extending Calculator class
class ScientificCalculator extends Calculator {

    square(num){
        return num*num;
    }

    cube(num){
        return num*num*num;
    }

    power(num1, num2){
        return Math.pow(num1, num2);
    }

}


const Calculation = new ScientificCalculator();

const addRes = Calculator.prototype.add.call(Calculation, 10, 5);
console.log(addRes); // Output: 15

// Invoke subtract method using apply()
const subtractRes = Calculator.prototype.subtract.apply(Calculation, [10, 5]);
console.log(subtractRes); // Output: 5

//creating multiplyByTwo method using bind()
const multiplyByTwo = Calculation.multiply.bind(Calculation, 2);
console.log(multiplyByTwo(5)); // Output: 10

// creating powerOfThree method using bind()
const powerOfThree = Calculation.power.bind(Calculation, 3);
console.log(powerOfThree(2)); // Output: 8
