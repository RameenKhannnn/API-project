// Fake API se products fetch karne ka function
async function fetchProducts() {
    try {
        // Fake API se data fetch karna
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        // Products ko HTML mein show karna
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Products ko HTML mein display karne ka function
function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        // Har product ke liye ek div banayein
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}">
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Page load hone par products fetch karne ke liye
fetchProducts();
 





// // Fake API se products fetch karne ka function

// Explanation: Yeh ek comment hai jo batata hai ke yeh function fake API se products ko fetch karega.
// async function fetchProducts() {

// Explanation: Yeh ek asynchronous function hai jiska naam fetchProducts hai. Asynchronous functions aise operations ko handle karne ke liye use hote hain jo thoda waqt lete hain, jese API se data fetch karna.
// try {

// Explanation: try block un instructions ko run karne ki koshish karta hai jinme error aa sakta hai.
// const response = await fetch('https://fakestoreapi.com/products');

// Explanation: fetch function use karke hum https://fakestoreapi.com/products se data le rahe hain. await keyword ka matlab hai ke yeh line poori tarah se complete hone tak agla code nahi chalega.
// const products = await response.json();

// Explanation: response.json() se API se milne wale raw data ko JSON format mein convert kiya jata hai, jise hum products variable mein store kar rahe hain.
// displayProducts(products);

// Explanation: Yeh function call karta hai displayProducts ko aur products ki list usko deta hai taake wo unko HTML mein display kar sake.
// } catch (error) {

// Explanation: Agar try block mein koi error aata hai, toh catch block us error ko handle karta hai.
// console.error('Error fetching products:', error);

// Explanation: Agar error aata hai, toh yeh line console mein error message show karti hai.
// }

// Explanation: Yeh function ko band karta hai.
// function displayProducts(products) {

// Explanation: Yeh function products ko accept karta hai aur unko HTML mein display karta hai.
// const productsContainer = document.getElementById('products');

// Explanation: Yeh line HTML element ko uske id (products) se dhoondhti hai aur usko productsContainer variable mein store karti hai.
// productsContainer.innerHTML = '';

// Explanation: Yeh line productsContainer ke andar jo bhi pehle se HTML content hai usko clear kar deti hai.
// products.forEach(product => {

// Explanation: forEach loop har product ko products array mein loop karta hai.
// const productDiv = document.createElement('div');

// Explanation: Yeh line ek naya div element banati hai jisme hum har product ka data dalenge.
// productDiv.className = 'product';

// Explanation: Is line se hum naye div ko ek CSS class product dete hain jisse hum isko style kar sakein.
// productDiv.innerHTML = `...`;

// Explanation: Yeh line productDiv ke andar HTML content dalti hai, jisme product ka title, image, description, aur price hota hai. Yeh ek template string hai jo ${} syntax ko use karke dynamic values insert karti hai.
// productsContainer.appendChild(productDiv);

// Explanation: Yeh line naye productDiv ko productsContainer mein add kar deti hai taake wo HTML mein nazar aaye.
// });

// Explanation: Yeh forEach loop ko band karta hai.
// }

// Explanation: Yeh displayProducts function ko band karta hai.
// fetchProducts();

// Explanation: Yeh line page load hone par fetchProducts function ko call karti hai taake products ko display kiya ja sake.
