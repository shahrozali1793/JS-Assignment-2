// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

// function createAdder (num){
//     return function(x){
//     console.log (x+ num)
//     }
// }
// let innerFuntion = createAdder(5)
// let innerFuntion2 = createAdder(100)
// innerFuntion(10)
// innerFuntion2(5)

// ______________________________________________________________________________


// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

// function recursiveArraySearch(array, value) {

//     if (array.length === 0) {
//       return false;
//     }
    
//     if (array[0] === value) {
//       return true;
//     } else {
//       return recursiveArraySearch(array.slice(1), value);
//     }
//   }
//   const arr = [1, 2, 3, 4, 5];
//   console.log(recursiveArraySearch(arr, 3));
//   console.log(recursiveArraySearch(arr, 6));

//  ____________________________________________________________________________


// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

// ______________________________________________________________________________
  

// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.


// function addListItem(text) {
//     const list = document.querySelector('ul');
//     const listItem = document.createElement('li');
//     const textNode = document.createTextNode(text);
//     listItem.appendChild(textNode);
//     list.appendChild(listItem);
//   }
  


function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}


var myElement = document.getElementById("myElement");
  changeBackgroundColor(myElement, "red");

















// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.
// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.
// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.
// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.