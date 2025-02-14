console.log(hoistedVar); // Output: undefined
var hoistedVar = "I'm hoisted!";
//como estou a chamar a var antes de defenir vai dar undefined

notHoistedFunc(); // Error: notHoistedFunc is not a function
var notHoistedFunc = () => console.log("I won't work");
//ele encontra o notHoistedFunc como var não como uma arrow function é por isso que da o erro notHoistedFunc is not a function


hoistedFunc(); // Output: "I work!"
function hoistedFunc() {
  console.log("I work!");
}
//aqui como é uma função normal sem ser em arrow function ele consegue fazer realizar tudo 
    