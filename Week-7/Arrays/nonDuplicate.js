let arr = prompt("Enter comma seperated values: ")

let dups = (arr) =>{
    let array = arr.split(",");
    let map = new Map();
    let nondups = []
    for(let i of array){
        if(map.has(i)){
            map.set(i,map.get(i)+1);
        }
        else{
            map.set(i, 1)
        }
    }
    for(let [i,v] of map){
        if(v==1){
            nondups.push(i)
        }
        else{
            continue;
        }
    }
    return nondups;
}

console.log(dups(arr))