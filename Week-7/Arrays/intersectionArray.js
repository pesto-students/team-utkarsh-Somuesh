// Intersection of Two Arrays ( common elements )

let first = prompt("Enter values of first array (separated by commas): ");
let second = prompt("Enter values of Second array (separated by commas): ");

let firstArr = first.split(",");
let secondArr = second.split(",");

let intersectionCheck = (firstArr, secondArr) => {
    let set = new Set(firstArr);
    let intersection = new Set()
    
    for(let i of secondArr){
        if(set.has(i)){
            intersection.add(i)
        }
        else{
            continue;
        }
    }
    
    return intersection.size ? [...intersection] : "No intersection"
}

console.log(intersectionCheck(firstArr,secondArr));