var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myButton1 = document.querySelector('button.hint1');
myButton1.onclick = function() {
myHeading.textContent = 'hint1 pressed.';
}
var myButton2 = document.querySelector('button.show1');
myButton2.onclick = function() {
myHeading.textContent = 'show1 pressed.';
}
var myButton3 = document.querySelector('button.hint2');
myButton3.onclick = function() {
myHeading.textContent = 'hint2 pressed.';
}
var myButton4 = document.querySelector('button.show2');
myButton4.onclick = function() {
myHeading.textContent = 'show2 pressed.';
}
