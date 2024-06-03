const addedDataJSON = [];

const productData = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Summer Music Festival",
    price: 50,
    date: "August 20, 2021",
    location: "Central Park, New York City",
    company: "Music Festivals Inc.",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Food and Wine Expo",
    price: 75,
    date: "September 25, 2021",
    location: "Moscone Center, San Francisco",
    company: "Food and Wine Events LLC",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Comic Con",
    price: 35,
    date: "October 15, 2021",
    location: "Los Angeles Convention Center",
    company: "Comic Con International",
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Art and Design Fair",
    price: 20,
    date: "November 12, 2021",
    location: "Navy Pier, Chicago",
    company: "Art and Design Expo LLC",
  },
  {
    id: 5,
    imageUrl: "https://plus.unsplash.com/premium_photo-1661766479722-ddedc5dce339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Holiday Market",
    price: 5,
    date: "December 3, 2021",
    location: "Union Square, New York City",
    company: "Holiday Markets Inc.",
  },
  {
    id: 6,
    imageUrl: "https://plus.unsplash.com/premium_photo-1661290419867-79072e8d5f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Concert in the Park",
    price: 20,
    date: "August 20, 2022",
    location: "Central Park, New York City",
    company: "Live Nation",
  },
  {
    id: 7,
    imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Food and Wine Festival",
    price: 50,
    date: "September 15-18, 2022",
    location: "Union Square, San Francisco",
    company: "Taste of San Francisco",
  },
  {
    id: 8,
    imageUrl: "https://plus.unsplash.com/premium_photo-1661602441396-67b89b6ac4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Summer Beach Party",
    price: 15,
    date: "July 3, 2022",
    location: "Venice Beach, Los Angeles",
    company: "LA Beach Parties",
  },
  {
    id: 9,
    imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Angular Nation Expo",
    price: 35,
    date: "October 1-3, 2022",
    location: "Google Hall, San Fransico",
    company: "ArtExpo NY",
  },
  {
    id: 10,
    imageUrl: "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Sports and Adventure Expo",
    price: 20,
    date: "May 20-22, 2022",
    location: "McCormick Place, Chicago",
    company: "Google",
  },
];

async function fetchProductData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productData);
    }, 1000);
  });
}

async function addProducts() {
  try {
    const data = await fetchProductData();
    addedDataJSON.push(...data);
    populateProducts();
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
}

addProducts();

function populateProducts() {
  const productContainer = document.getElementById("product-container");

  addedDataJSON.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    const productImage = document.createElement("img");
    productImage.src = product.imageUrl;
    productImage.alt = product.title;

    const productTitle = document.createElement("h2");
    productTitle.textContent = product.title;

    const productPrice = document.createElement("p");
    productPrice.textContent = `Price: $${product.price}`;

    const productDate = document.createElement("p");
    productDate.textContent = `Date: ${product.date}`;

    const productLocation = document.createElement("p");
    productLocation.textContent = `Location: ${product.location}`;

    const productCompany = document.createElement("p");
    productCompany.textContent = `Company: ${product.company}`;

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.onclick = () => addToCart(product.id);

    productCard.appendChild(productImage);
    productCard.appendChild(productTitle);
    productCard.appendChild(productPrice);
    productCard.appendChild(productDate);
    productCard.appendChild(productLocation);
    productCard.appendChild(productCompany);
    productCard.appendChild(addButton);

    productContainer.appendChild(productCard);
  });
}

let cart = [];
const cartItems = document.createElement('div');
cartItems.id = 'cart-items';
document.body.appendChild(cartItems);

window.addToCart = function (productId) {
  const product = addedDataJSON.find((p) => p.id === productId);
  if (!product) {
    console.error(`Product with id ${productId} not found`);
    return;
  }

  const cartItem = cart.find((item) => item.product.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ product, quantity: 1 });
  }
  renderCart();
};

function removeFromCart(productId) {
  cart = cart.filter((item) => item.product.id !== productId);
  renderCart();
}

function increaseProductQuantity(productId) {
  const cartItem = cart.find((item) => item.product.id === productId);
  if (cartItem) {
    cartItem.quantity++;
  }
  renderCart();
}

function reduceProductQuantity(productId) {
  const cartItem = cart.find((item) => item.product.id === productId);
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity--;
  } else {
    removeFromCart(productId);
  }
  renderCart();
}

function editProductInCart(productId, newQuantity) {
  const cartItem = cart.find((item) => item.product.id === productId);
  if (cartItem) {
    cartItem.quantity = newQuantity;
  }
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.innerHTML = `
        <h>CART<h1>
        <img src="${item.product.imageUrl}" width="20" height="20">
        <h4>${item.product.title}</h4>
        <p>Price: $${(item.product.price * item.quantity).toFixed(2)}</p>
        <p>Date: ${item.product.date}</p>
        <p>Location: ${item.product.location}</p>
        <p>Company: ${item.product.company}</p>
        <p>Quantity: ${item.quantity}</p>
        <button onclick="increaseProductQuantity(${item.product.id})">+</button>
        <button onclick="reduceProductQuantity(${item.product.id})">-</button>
        <button onclick="removeFromCart(${item.product.id})">Remove</button>`;
    cartItems.appendChild(cartItemDiv);
  });
}
