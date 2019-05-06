const bcgCollection = ['url(img/squirrel.jpg)', 'url(img/hamster.jpg)', 'url(img/cat.jpg)'];

// First cart
const cartOne = document.querySelector('.cartOne');
const cartOneSpan = document.querySelector('.cartOne span');
let numberClickcartOne = 0;
let cartOneIndex = null;


function inversionCartOne() {
    numberClickcartOne++;
    if (numberClickcartOne % 2 !== 0) {

        cartOneIndex = Math.floor(Math.random() * bcgCollection.length);
        cartOne.style.backgroundImage = bcgCollection[cartOneIndex];
        cartOne.classList.add('activeboxCarts');
        cartOneSpan.textContent = '';

    } else {
        cartOne.style.backgroundImage = 'none';
        cartOne.classList.remove('activeboxCarts');
        cartOneSpan.textContent = 'click';

        currentResult.textContent = '';
    }
}

cartOne.addEventListener('click', inversionCartOne);

// Two cart
const cartTwo = document.querySelector('.cartTwo');
const cartTwoSpan = document.querySelector('.cartTwo span');
let numberClickcartTwo = 0;
let cartTwoIndex = null;


function inversionCartTwo() {
    numberClickcartTwo++;
    if (numberClickcartTwo % 2 !== 0) {

        cartTwoIndex = Math.floor(Math.random() * bcgCollection.length);
        cartTwo.style.backgroundImage = bcgCollection[cartTwoIndex];
        cartTwo.classList.add('activeboxCarts');
        cartTwoSpan.textContent = '';

    } else {
        cartTwo.style.backgroundImage = 'none';
        cartTwo.classList.remove('activeboxCarts');
        cartTwoSpan.textContent = 'click';

        currentResult.textContent = '';
    }
}
cartTwo.addEventListener('click', inversionCartTwo);


// Three cart
const cartThree = document.querySelector('.cartThree');
const cartThreeSpan = document.querySelector('.cartThree span');
let numberClickcartThree = 0;
let cartThreeIndex = null;


function inversionCartThree() {
    numberClickcartThree++;
    if (numberClickcartThree % 2 !== 0) {

        cartThreeIndex = Math.floor(Math.random() * bcgCollection.length);
        cartThree.style.backgroundImage = bcgCollection[cartThreeIndex];
        cartThree.classList.add('activeboxCarts');
        cartThreeSpan.textContent = '';

    } else {
        cartThree.style.backgroundImage = 'none';
        cartThree.classList.remove('activeboxCarts');
        cartThreeSpan.textContent = 'click';

        currentResult.textContent = '';

    }
    if (cartOneIndex != null && cartTwoIndex != null && cartThreeIndex != null) {
        resultGame(cartOneIndex, cartTwoIndex, cartThreeIndex);
    }

}
cartThree.addEventListener('click', inversionCartThree);


//Reset carts
const btnReset = document.querySelector('.btnReset');

function CartsReset() {
    currentResult.textContent = '';

    cartOne.style.backgroundImage = 'none';
    cartOne.classList.remove('activeboxCarts');
    cartOneSpan.textContent = 'click';

    cartTwo.style.backgroundImage = 'none';
    cartTwo.classList.remove('activeboxCarts');
    cartTwoSpan.textContent = 'click';

    cartThree.style.backgroundImage = 'none';
    cartThree.classList.remove('activeboxCarts');
    cartThreeSpan.textContent = 'click';

    numberClickcartOne = 0;
    numberClickcartTwo = 0;
    numberClickcartThree = 0;

    cartOneIndex = null;
    cartTwoIndex = null;
    cartThreeIndex = null;

}
btnReset.addEventListener('click', CartsReset);

//Result
const currentResult = document.querySelector('.currentResult span');
const totalResult = document.querySelector('.totalResult span');

let currentPoints = '';
let totalPoints = 0;

function resultGame(One, Two, Three) {
    currentResult.textContent = '';

    if (One === Two && One === Three) {

        currentPoints = 200;
        totalPoints = totalPoints + 200;

        currentResult.textContent = `+${currentPoints} points`;
        totalResult.textContent = `${totalPoints} points`;

    } else if (One !== Two && One !== Three && Two !== Three) {
        currentPoints = -100
        totalPoints = totalPoints - 100;

        currentResult.textContent = `${currentPoints} points`;
        totalResult.textContent = `${totalPoints} points`;

    } else {
        currentPoints = 100
        totalPoints = totalPoints + 100;

        currentResult.textContent = `+${currentPoints} points`;
        totalResult.textContent = `${totalPoints} points`;
    }
    cartOneIndex = null;
    cartTwoIndex = null;
    cartThreeIndex = null;
}