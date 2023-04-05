function filterByCategory(products){
    return function(category){
        return products.filter(product => product.category ===category);
    }
}

const products = [
    { name: "Shampoo", category : "groomig"},
    { name: "Gaming Console", category : "Electronics"},
    { name: "Facewash", category : "groomig"},
    { name: "Smartphone", category : "Electronics"},
    { name: "Pencil", category : "Stationary"}

];

const filterByClothing = filterByCategory(products);
const clothingProducts = filterByClothing("Electronics");

console.log(clothingProducts)