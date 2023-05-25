let celcius = document.querySelector("#degrees");
let faren = document.querySelector("#faren");
let outputValue = document.querySelector("#display");
let C, TC;

function calc1(params) {
    let C = celcius.value;
    let TC = (C * 9/5) + 32;
    outputValue.innerText = TC + "F";
}