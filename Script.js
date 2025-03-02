document.addEventListener('DOMContentLoaded', function () {
    // Image Gallery
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            // Update main image
            const imageUrl = this.getAttribute('data-image');
            mainImage.src = imageUrl;

            // Update active thumbnail
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Color Selection
    const colorOptions = document.querySelectorAll('input[name="color"]');
    let selectedColor = 'black'; // Default color

    colorOptions.forEach(option => {
        option.addEventListener('change', function () {
            // Update selected color
            selectedColor = this.value;

            // Update active class for styling
            document.querySelectorAll('#colorOptions .radio-label').forEach(label => {
                label.classList.remove('active');
            });
            this.parentElement.classList.add('active');
        });
    });

    // Size Selection
    const sizeOptions = document.querySelectorAll('input[name="size"]');
    let selectedSize = 'm'; // Default size

    sizeOptions.forEach(option => {
        option.addEventListener('change', function () {
            // Update selected size
            selectedSize = this.value;

            // Update active class for styling
            document.querySelectorAll('#sizeOptions .radio-label').forEach(label => {
                label.classList.remove('active');
            });
            this.parentElement.classList.add('active');
        });
    });

    // Quantity Selection
    const quantitySelect = document.getElementById('quantity');
    let selectedQuantity = '1'; // Default quantity

    quantitySelect.addEventListener('change', function () {
        selectedQuantity = this.value;
    });

    // Add to Cart Button
    const addToCartBtn = document.getElementById('addToCart');

    addToCartBtn.addEventListener('click', function () {
        alert(`Added to cart: ${selectedQuantity} items, Color: ${selectedColor}, Size: ${selectedSize}`);
    });

    // Add to Wishlist Button
    const addToWishlistBtn = document.getElementById('addToWishlist');

    addToWishlistBtn.addEventListener('click', function () {
        alert('Added to wishlist!');
    });

    // Tabs
    const tabs = document.querySelectorAll('.tab');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Show corresponding tab content
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === tabId) {
                    pane.classList.add('active');
                }
            });
        });
    });
});