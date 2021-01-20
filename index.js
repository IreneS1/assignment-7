//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'

const id = document.getElementById('a-1');
const div = document.createElement('div');
div.className = 'square';
id.appendChild(div)
div.textContent = 'x';

div.addEventListener('click', () => {
    if (document.querySelector('.square').textContent == "o"){
        document.querySelector('.square').textContent = "x";
    }
    else if (document.querySelector('.square').textContent == "x") {
        document.querySelector('.square').textContent = "o";
    }
});

//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];

let dropDown = document.createElement('select');
dropDown.id = 'selectList';
let option;

for (i = 0; i < colors.length; i++){
    option = document.createElement('option');
    option.value = colors[i];
    option.innerHTML = colors[i];
    dropDown.appendChild(option);
}
document.getElementById('a-2').appendChild(dropDown);

let button = document.createElement('button');
button.type = 'button';
button.textContent = 'Remove';

document.getElementById('a-2').appendChild(button);

button.addEventListener('click', () => {
    let selected = document.getElementById('selectList').selectedIndex
    dropDown.remove(selected)
})

//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)

let UserInput = document.getElementById('radius').textContent;

const calculateSphere = () => {
    let radius = document.getElementById('radius');
    radius = parseInt(radius.value);
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    let area = 4 * Math.PI * Math.pow(radius, 2);
    document.getElementById('volume').value = volume
    document.getElementById('area').value = area
 }

//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 

// button for question 1
let button1 = document.createElement('button');
button1.type = 'button';
button1.textContent = 'Hide Question 1';

let question1 = document.getElementById('a-1');
question1.style.display = 'block'
button1.addEventListener('click', () => {
    if (question1.style.display == "block") {
        question1.style.display = 'none'
        button1.textContent = 'Show Question 1'
    } else {
        question1.style.display = 'block'
        button1.textContent = 'Hide Question 1'
    }
})

// button for question 2 
let button2 = document.createElement('button');
button2.type = 'button';
button2.textContent = 'Hide Question 2';

let question2 = document.getElementById('a-2');
question2.style.display = 'block'
button2.addEventListener('click', () => {
    if (question2.style.display == "block") {
        question2.style.display = 'none'
        button2.textContent = 'Show Question 2'
    } else {
        question2.style.display = 'block'
        button2.textContent = 'Hide Question 2'
    }
})

// button for question 3
let button3 = document.createElement('button');
button3.type = 'button';
button3.textContent = 'Hide Question 3';

let question3 = document.getElementById('a-3');
question3.style.display = 'block'
button3.addEventListener('click', () => {
    if (question3.style.display == "block") {
        question3.style.display = 'none'
        button3.textContent = 'Show Question 3'
    } else {
        question3.style.display = 'block'
        button3.textContent = 'Hide Question 3'
    }
})

// append
document.getElementById('a-4').appendChild(button1)
document.getElementById('a-4').appendChild(button2)
document.getElementById('a-4').appendChild(button3)