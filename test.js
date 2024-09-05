// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = nums.filter( (num) => {
//     return num > 3;
// } )
// console.log(newNum);

const products = [
    { id: 1, name: 'Shirt', price: 25.00, color: 'red', inStock: true },
    { id: 2, name: 'Hat', price: 15.00, color: 'blue', inStock: true },
    { id: 3, name: 'Jeans', price: 50.00, color: 'black', inStock: false },
    { id: 4, name: 'Jacket', price: 75.00, color: 'brown', inStock: true },
  ];

const newProducts = products.filter( (product) => {
    return product.price > 25;
} )  

console.log(newProducts);