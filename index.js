let celcius = document.querySelector("#degrees");
let faren = document.querySelector(".faren");
let outputValue = document.querySelector("#display");
let outputReverse = document.querySelector(".diplay");

let C, FT, F, CT;

function calc1() {
    let C = celcius.value;
    let FT = (C * 9/5) + 32;
    outputValue.value = FT;
    
}
function calc2() {
    let F = faren.value;
    let CT = (F - 32) * (5/9);
    outputReverse.value = CT;
}
