let celcius = document.querySelector("#degrees");
let outputValue = document.querySelector("#display");
let C, FT, F, CT;

function calc1() {
    let C= celcius.value;
    let CT = (C * 9/5) + 32;
    outputValue.value = CT;
}
 function calc2() {
    let F = outputValue.value;
    let FT = (F - 32) * (5/9);
    celcius.value = FT;
 }

