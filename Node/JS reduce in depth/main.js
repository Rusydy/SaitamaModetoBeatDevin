const items = [
  { name: "Apple", price: 1, category: 'Fruit'},
  { name: "Orange", price: 2, category: 'Fruit'},
  { name: "Mango", price: 3, category: 'Fruit'},
  { name: "Onion", price: 4, category: 'Vegetable'},
  { name: "Lettuce", price: 5, category: 'Vegetable'}
];

const totalPrice = items.reduce((accumulator, item) => {
return accumulator += item.price;
}, 0)

console.log("totalPrice: ", totalPrice);

const groupItem = items.reduce((accumulator, item) => {
  const category = item.category;
  
  if (!accumulator[category]) {
      accumulator[category] = []
  }

  accumulator[category].push(item.name)

  return accumulator
}, {})

console.log("groupItem: ", groupItem)

const listOfNums = [1, 2, 3, 1, 2, 3, 7, 8, 7];

const noDuplicateItems = listOfNums.reduce((accumulator, item) => {
if (!accumulator.includes(item)) {
  accumulator.push(item);
}
return accumulator;
}, []);

console.log("noDuplicateItems", noDuplicateItems); 

/* 
the reduce() method actually passes 4 arguments to the callback function:

- accumulator value
- item value
- index of the current item in iteration
- array from which you call the method itself

```node
Array.reduce((accumulator, item, index, array) => {
// Define the process for each iteration here
}, initialAccumulatorValue)
```
*/