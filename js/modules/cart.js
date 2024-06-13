export function initCart() {
    const cartCountSpan = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.querySelector('.closeM');
    const cartItemsContainer = document.getElementById('cart-items');
    const shopIcon = document.querySelector('.shop');
    let cartItems = [];
    let totalPrice = 0;

    function updateCartCount(count) {
        cartCountSpan.setAttribute('data-shop', count);
        cartCountSpan.textContent = count;
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

            const total = totalPrice.toFixed(2).replace('.', ',')
            const totalCart = document.querySelector(".total")
            
            totalCart.innerHTML = `R$${total}`
        });
    });

    shopIcon.addEventListener('click', () => {
        cartItemsContainer.innerHTML = '';
        cartItems.forEach(item => {
            const itemElement = document.createElement('div')
            itemElement.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <p class="price">${item.price}</p>
                <hr>
            `;
            itemElement.classList.add("cart-item");
            cartItemsContainer.appendChild(itemElement);
        });
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

    initializeCartCount();
}
