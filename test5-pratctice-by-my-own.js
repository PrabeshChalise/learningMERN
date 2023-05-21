const a = 1000
const b = 20
function check(){
if (a>100){
    console.log("1st value is greater than 100");
}
else{
    console.log("1st value is smaller than 100");
}
}
function mult(){
    console.log("The multiplication is:- ", a*b)
}
module.exports = mult
module.exports = check