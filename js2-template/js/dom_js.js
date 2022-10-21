/* Part 1: Greeting: Click Events Exercise (25 pts)
   In the first div of the html (div_greet), you have two buttons, each with an id: 'am' and 'pm'. 
   You also have an empty heading with id: ‘greeting’. The heading node is provided. */

/* Create a variable for each button. (6 pts.) */
let am = document.getElementById('am');
let pm = document.getElementById('pm');

/* Create a listener with addEventListener to invoke a callback on the click of each button. (6 pts.) */
am.addEventListener('click', goodMorning);
pm.addEventListener('click', goodNight);

/* In the callback add appropriate text content to the heading node (#greeting). (13 pts.)
   ● When the am button is clicked, you should display “Good morning” or similar in the heading.
   ● When the pm button is clicked, you should display "Good night" or similar in the heading. */
function goodMorning() {
    document.getElementById('greeting').textContent = "Good morning";
}
function goodNight() {
    document.getElementById('greeting').textContent = "Good night";
}

/* Part 2: Switch the Background Color (30 pts)
   In the second div of the html (div_color), you have four buttons, each with an id: ‘red’, ‘yellow’, ‘green’ and ‘blue’. 
   You also have four classes in the css: bg_red, bg_yellow, bg_green, and bg_blue. The buttons and classes are provided. 
   You will provide the javascript to switch the color of the div on the click of the button. */

/* Create variables for each button. (8 pts. ) */
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let blue = document.getElementById('blue');

/* Add event listeners for the buttons with addEventListener which invoke a callback on click of each button. (10 pts) */
red.addEventListener('click', redBackground);
yellow.addEventListener('click', yellowBackground);
green.addEventListener('click', greenBackground);
blue.addEventListener('click', blueBackground);
/* In the callback, set the class attribute of the containing div (div_color) to the appropriate color in the callback function. 
   Use setAttribute to set the class attribute. (12 pts.) */
function redBackground() {
    document.getElementById('div_color').setAttribute('class', 'bg_red');
}
function yellowBackground() {
    document.getElementById('div_color').setAttribute('class', 'bg_yellow');
}
function greenBackground() {
    document.getElementById('div_color').setAttribute('class', 'bg_green');
}
function blueBackground() {
    document.getElementById('div_color').setAttribute('class', 'bg_blue');
}

/* In the third div of the html (div_list), you have an input box, a button and an empty unordered list. 
   You are to add items to the list by taking the text entered into the input box when the button is clicked and inserting it into the list. */

/* ● Use querySelector and the id’s of the elements to create 3 variables for the input box (#usrInput), button(#addBtn) and list (#myUL). (9 pts.) */
let input = document.querySelector('#usrInput');
let button = document.querySelector('#addBtn');
let ul = document.querySelector('#myUL');

/* ● Use addEventListener to invoke a callback on the click of the button. (9 pts.) */
button.addEventListener('click', addItem);

/* ● In the callback, get the user input from the .value property of the input box then clear the input box by setting the .value to an empty string (‘ ‘ ). (9 pts.)
   ● Create the list item node and set the text of the list item to the user input. (9 pts.)
   ● Append the new item node to the list. (9 pts.) */
   
function addItem() {
    let item = input.value;
    input.value = ' ';
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
}
