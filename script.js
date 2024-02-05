//Calculating the discoutn
document.addEventListener('DOMContentLoaded', () => {
    // Function to calculate discount percentage
    const calculateDiscount = () => {
        const originalPriceText = document.querySelector('.comparePrice del').textContent;
        const discountedPriceText = document.querySelector('.price').textContent;

        const originalPrice = parseFloat(originalPriceText.replace(/[^0-9.]/g, ''));
        const discountedPrice = parseFloat(discountedPriceText.replace(/[^0-9.]/g, ''));

        const discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
        return discountPercentage.toFixed(0); 
    };

    // Update the percentOff element
    const percentOffElement = document.querySelector('.percentOff');
    percentOffElement.textContent = `${calculateDiscount()}% Off`;
});


//placing the correct image in productImage
document.addEventListener('DOMContentLoaded', () => {
    // Select all thumbnails
    const thumbnails = document.querySelectorAll('.thumbnails img');
    // Select the main product image
    const productImage = document.querySelector('.productImage img');
  
    // Function to change the main product image to the clicked thumbnail
    const changeImage = (e) => {
      productImage.src = e.target.src;
      productImage.alt = e.target.alt;
    };
  
    // Add click event to all thumbnails
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', changeImage);
    });
  });


  
//increase/decrease quantity
document.querySelector('.increase').addEventListener('click', function() {
    var quantity = document.querySelector('.quantity-display');
    quantity.textContent = parseInt(quantity.textContent) + 1;
  });
  
  document.querySelector('.decrease').addEventListener('click', function() {
    var quantity = document.querySelector('.quantity-display');
    var currentQuantity = parseInt(quantity.textContent);
    if (currentQuantity > 1) {
      quantity.textContent = currentQuantity - 1;
    }
  });

  
//actual functs
// Define an array to store cart items
let cartItems = [];

// Function to add item to the cart and update the notification bubble
function addItemToCart(color, size, quantity) {
    cartItems.push({ color, size, quantity });

    // Update notification bubble with the number of items in the cart
    const notificationBubble = document.querySelector('.notification-bubble');
    notificationBubble.textContent = cartItems.length;
}

// Function to display cart items
function displayCartItems() {
    if (cartItems.length === 0) {
        return "Your cart is empty";
    }

    let cartContents = "Cart Items:\n";
    cartItems.forEach((item, index) => {
        cartContents += `Item ${index + 1}: Color - ${item.color}, Size - ${item.size}, Quantity - ${item.quantity}\n`;
    });
    return cartContents;
}

// Function to get selected color
function getSelectedColor() {
    const selectedColorInput = document.querySelector('input[name="future-is-here"]:checked');
    return selectedColorInput ? selectedColorInput.id : null;
}

// Function to get selected size
function getSelectedSize() {
    const selectedSizeInput = document.querySelector('.sizeSelector input[type="radio"]:checked');
    return selectedSizeInput ? selectedSizeInput.value : null;
}

// Function to get selected quantity
function getSelectedQuantity() {
    return document.querySelector('.quantity-display').textContent;
}

// Event listener for Add to Cart button
document.querySelector('.add-to-cart-button').addEventListener('click', () => {
    const selectedColor = getSelectedColor();
    const selectedSize = getSelectedSize();
    const selectedQuantity = getSelectedQuantity();

    if (selectedColor && selectedSize && selectedQuantity) {
        addItemToCart(selectedColor, selectedSize, parseInt(selectedQuantity));
    } else {
        alert("Please select color, size, and quantity");
    }
});

// Event listener for the cart button to display cart items
document.querySelector('.cartButton').addEventListener('click', () => {
    alert(displayCartItems());
});

// Event listeners for increase/decrease quantity buttons
document.querySelector('.increase').addEventListener('click', function() {
    var quantity = document.querySelector('.quantity-display');
    quantity.textContent = parseInt(quantity.textContent) + 1;
});

document.querySelector('.decrease').addEventListener('click', function() {
    var quantity = document.querySelector('.quantity-display');
    var currentQuantity = parseInt(quantity.textContent);
    if (currentQuantity > 1) {
        quantity.textContent = currentQuantity - 1;
    }
});

//Check creator
let checkCreator=document.getElementById('Check-creator');
checkCreator.addEventListener('click',()=>{
    window.open('https://fancy-blancmange-e66bb9.netlify.app','_blank');    
})

let surpriseMe=document.getElementById('surpriseMe');
surpriseMe.addEventListener('click',()=>{
    window.open('https://main--clever-arithmetic-c1e900.netlify.app','_blank');    
})
