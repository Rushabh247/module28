// Product constructor function
function Product(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
}

// Inventory constructor function
function Inventory() {
    this.products = [];
}

// Add addProduct method to Inventory prototype
Inventory.prototype.addProduct = function(product) {
    if (product instanceof Product) {
        this.products.push(product);
        console.log(`Product "${product.name}" added to inventory.`);
    } else {
        console.log("Invalid product. Please provide a valid Product object.");
    }
};

// Add deleteProduct method to Inventory prototype
Inventory.prototype.deleteProduct = function(productName) {
    const index = this.products.findIndex(product => product.name === productName);
    if (index !== -1) {
        this.products.splice(index, 1);
        console.log(`Product "${productName}" deleted from inventory.`);
    } else {
        console.log(`Product "${productName}" not found in inventory.`);
    }
};

// Example usage:
const inventory = new Inventory();

const product1 = new Product('Laptop', 'Electronics', 999, 10);
const product2 = new Product('Chair', 'Furniture', 50, 20);
const product3 = new Product('Phone', 'Electronics', 699, 15);

inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

console.log("Inventory after adding products:", inventory.products);

inventory.deleteProduct('Chair');
console.log("Inventory after deleting product:", inventory.products);

inventory.deleteProduct('Table');
