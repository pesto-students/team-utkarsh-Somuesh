function drawTriangle(triangleSize) {

   // Your solution goes here
  let pattern = "";

   for(let i=1; i<=triangleSize; i++){
      for(let j=1; j<=i; j++){
         pattern += "*";
      }
      pattern += "\n";
   }

   console.log(pattern);
}



drawTriangle(4);