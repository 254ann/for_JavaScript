let cart = [];

function addToCart(productId){
  const productElement=document.querySelector(`.product[data-id = '${productId}']`);
  const productName = productElement.getAttribute('data-name');
  const productPrice = parseFloat(productElement.getAttribute('data-price'))

  const existingProductIndex = cart.findIndex(item =>item.id === productId);

  if (existingProductIndex >-1){
    cart[existingProductIndex].quantity +=1;
  }else{
    cart.push({id:productId, name: productName, price: productPrice, quantity: 1});
  }
  updateCartDisplay();
}

function removeFromCart(productId){
  cart = cart.filter(item => item.id !== productId);
  updateCartDisplay();
}

function updateCartDisplay(){
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML='';
  if (cart.length === 0){
    cartElement.innerHTML='<p>No items in the cart</p>';
    return
  }

  const ul = document.createElement('ul');
  cart.forEach(item =>{
    const li = document.createElement('li');
    li.innerHTML = `${item.name} -$${item.price} x ${item.quantity}
    <button onClick = "removeFromCart(${item.id})">Remove</button>`;
    ul.appendChild(li);
  });
  cartElement.appendChild(ul)

  const total = cart.reduce((sum, item) => sum + (item.price*item.quantity), 0);
  const totalElement = document.createElement('p');
  totalElement.innerHTML=`Total:$${total.toFixed(2)}`;
  cartElement.appendChild(totalElement)
}
