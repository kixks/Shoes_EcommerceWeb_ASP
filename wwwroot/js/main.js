/*----------------------JS FOR NAVBAR-----------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const descriptionLink = document.getElementById('descriptionLink');
    const buttonToDescription = document.getElementById('btndescription');
    const cartIcon = document.getElementById('cartIcon');

    // Function to show the cart icon and navigate to the description page
    function showCartIconAndNavigate(url) {
        cartIcon.classList.add('show');
        localStorage.setItem('showCartIcon', 'true');
        setTimeout(() => {
            window.location.href = url;
        }, 300); 
    }

    // Check local storage for cart icon visibility
    if (localStorage.getItem('showCartIcon') === 'true' || location.pathname === '/description') {
        cartIcon.classList.add('show');
        localStorage.removeItem('showCartIcon'); // Clear the flag if set
    }

    // Handle click on the Description link
    descriptionLink.addEventListener('click', function (event) {
        event.preventDefault();
        showCartIconAndNavigate(descriptionLink.href);
    });

    // Handle click on the button to Description
    if (buttonToDescription) { // Check if button exists
        buttonToDescription.addEventListener('click', function (event) {
            event.preventDefault();
            showCartIconAndNavigate(descriptionLink.href); 
        });
    }

    // Update active navigation link on page load
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href').toLowerCase();
        const path = location.pathname.toLowerCase();
        if (href === path) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});





/*----------------------JS FOR NAVBAR-----------------------------*/
/*----------------------JS FOR DESCRIPTION-----------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    let addToCartBtn = document.getElementsByClassName('AddToCartBtn');
    let cartCount = document.getElementById('cartCounter');
    let cartIcon = document.getElementById('cartIcon');

    Array.from(addToCartBtn).forEach(individualButton => {
        individualButton.addEventListener('click', () => {
            var current = parseInt(cartCount.textContent, 10);
            var incremented = current + 1;
            cartCount.textContent = incremented;

            individualButton.innerHTML = 'Added To Cart <i class= "fa-solid fa-check"></i>';
            individualButton.style.backgroundColor = "#1C6758";

            individualButton.disabled = true;
        });
    });

});
/*----------------------JS FOR DESCRIPTION-----------------------------*/