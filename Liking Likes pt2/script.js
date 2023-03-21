var count = 9;
var countElement = document.querySelector("#likecounter");

console.log(countElement);

function add1() {
    count++;
    countElement.innerText = count + " like(s)";
    console.log(count);
}

var counta = 12;
var countElement2 = document.querySelector("#likecounter2");

console.log(countElement2);

function add1a() {
    counta++;
    countElement2.innerText = counta + " like(s)";
    console.log(counta);
}

var countb = 9;
var countElement3 = document.querySelector("#likecounter3");

console.log(countElement3);

function add1b() {
    countb++;
    countElement3.innerText = countb + " like(s)";
    console.log(countb);
}