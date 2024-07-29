let fruits = document.getElementsByClassName('fruits');

Array.from(fruits).forEach((element) => {
    element.style.backgroundColor = "yellow";
});

console.log(fruits);