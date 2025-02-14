console.log(hoistedVar); // Output: undefined
var hoistedVar = "I'm hoisted!";
//aqui mesmo que eu mude paar let, var , const , vai dar um erro de referencia "Cannot access 'hoistedVar' before initialization"

notHoistedFunc(); // Error: notHoistedFunc is not a function
var notHoistedFunc = () => console.log("I won't work");
//aqui se eu mudar para var ele contra o notHoistedFunc como var não como função logo vai dar erro 
//se eu meter const vai dar erro pois eu não consigo ver os valores de uam variavel que ainda não foi inicializada 
//se eu meter let vai dar erro pois eu não consigo ver os valores de uam variavel que ainda não foi inicializada 

hoistedFunc(); // Output: "I work!"
function hoistedFunc() {
  console.log("I work!");
}

//aqui sempre vai dar porque é uma função