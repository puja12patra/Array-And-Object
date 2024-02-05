// 1. In the following shopping cart add, remove, and edit items
// => const shoppingCart = ['Milk, ‘Coffee’, ‘Tea’, 'Honey’]
// * add 'Meat' in the beginning of your shopping cart if it has not been already added
// « add Sugar at the end of you shopping cart if it has not been already added
// * remove ‘Honey’ if you are allergic to honey
// * modify Tea to ‘Green Tea’

const shoppingCart = ['Milk', 'Coffee', 'Tea','Honey'];

// Add 'Meat' to the beginning of the array
shoppingCart.unshift('Meat');
console.log(shoppingCart);

// Add 'sugar' to the end of the array
shoppingCart.push("sugar");
console.log(shoppingCart);

// Find the index of 'Honey' for remove
let indexToRemove = shoppingCart.indexOf("Honey");
shoppingCart.splice(indexToRemove, 1);// Remove 'Honey' using splice
console.log(shoppingCart);

// Find the index of 'Tea' for modifying 'Tea' to 'Green Tea'
let indexToModify = shoppingCart.indexOf("Tea");
shoppingCart[indexToModify] = "Green Tea"; // Modify 'Tea' to 'Green Tea'
console.log(shoppingCart);

//OUTPUT:
// [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]
// [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'sugar' ]
// [ 'Meat', 'Milk', 'Coffee', 'Tea', 'sugar' ]
// [ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'sugar' ]



