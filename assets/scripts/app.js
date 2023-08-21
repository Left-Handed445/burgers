document.getElementById('main-action-button').onclick = function() {
    document.getElementById('products').scrollIntoView(
        {behavior: "smooth"}
        );
} // Smooth scrolling

let links = document.querySelectorAll('.header__menu-list-item > a');
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: 'smooth'});
    }
} // Translation to relevant links



let buttons = document.getElementsByClassName('product-button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById('order').scrollIntoView({behavior: 'smooth'});
    }
} // Same Thing

// Form Validation

let burger = document.getElementById('burger');
let nameInput = document.getElementById('name');
let phone = document.getElementById('phone');

document.getElementById('order-action').onclick = function () {
    let hasError = false;


    [burger, nameInput, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = 'red';
            hasError = true;
        } else {
            item.parentElement.style.background = '';
        }
    });

    if (!hasError) {
        [burger, nameInput, phone].forEach(item => {
            item.value = ''; // Очистили значение для каждого инпута.
        });
        alert('Спасибо за заказ! Мы скоро свяжемся с вами!');
    }
}


let prices = document.getElementsByClassName('products-item-price');
// Currency switching


document.getElementById('change-currency').onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = '$';
    let coefficient = 1;


    if (currentCurrency === '$') {
        newCurrency = '₽';
        coefficient = 93;
    }
    else if (currentCurrency === '₽') {
        newCurrency = 'BYN';
        coefficient = 3;
    }
    else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    e.target.innerText = newCurrency; // Change text in Button
    // In each product block change the price of the product
    for (let i = 0; i < prices.length; i++) { // To go through each block in the code
        prices[i].innerText = +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) + " " + newCurrency; // + to convert everything to a number
    }
}