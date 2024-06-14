export function initCart() {
    const cartCountSpan = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.querySelector('.closeM');
    const cartItemsContainer = document.getElementById('cart-items');
    const shopIcon = document.querySelector('.shop');
    const totalCart = document.querySelector(".total");
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCheckout = document.querySelector('.closeCheckout');
    const finishShopButton = document.querySelector('.fin-shop');
    let cartItems = [];
    let totalPrice = 0;

    function updateCartCount(count) {
        cartCountSpan.setAttribute('data-shop', count);
        cartCountSpan.textContent = count;
    }

    function updateTotalPrice(price) {
        totalPrice = price;
        const total = totalPrice.toFixed(2).replace('.', ',');
        totalCart.innerHTML = `Total: R$${total}`;
    }

    function removeItem(index) {
        const item = cartItems[index];
        const itemPrice = parseFloat(item.price.replace('R$', '').replace(',', '.'));
        totalPrice -= itemPrice;
        cartItems.splice(index, 1);

        updateCartCount(cartItems.length);
        updateTotalPrice(totalPrice);

        displayCartItems();
    }

    function displayCartItems() {
        cartItemsContainer.innerHTML = '';
        cartItems.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <p class="price">${item.price}</p>
                <button class="remove-item">Remover</button>
                <hr>
            `;
            itemElement.classList.add("cart-item");

            const removeButton = itemElement.querySelector('.remove-item');
            removeButton.addEventListener('click', () => removeItem(index));

            cartItemsContainer.appendChild(itemElement);
        });
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            let currentCount = parseInt(cartCountSpan.getAttribute('data-shop'));
            currentCount++;

            const catalogItem = button.closest('.catalog-item');
            const itemPriceElement = catalogItem.querySelector('.price');
            const itemPrice = parseFloat(itemPriceElement.textContent.replace('R$', '').replace(',', '.'));
            totalPrice += itemPrice;

            const item = {
                title: catalogItem.querySelector('h3').textContent,
                description: catalogItem.querySelector('.description').textContent,
                price: itemPriceElement.textContent
            };
            cartItems.push(item);

            updateCartCount(currentCount);
            updateTotalPrice(totalPrice); 
        });
    });

    shopIcon.addEventListener('click', () => {
        displayCartItems();
        cartModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == cartModal) {
            cartModal.style.display = 'none';
        }
    });

    finishShopButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
        checkoutModal.style.display = 'block';
    });

    closeCheckout.addEventListener('click', () => {
        checkoutModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == checkoutModal) {
            checkoutModal.style.display = 'none';
        }
    });

    function initializeCartCount() {
        updateCartCount(0);
        updateTotalPrice(0); // Initialize total price as well
    }

    initializeCartCount();
}
