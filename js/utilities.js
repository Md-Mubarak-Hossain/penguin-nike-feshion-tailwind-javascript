const calculationField = document.getElementById('calculation-field');
calculationField.style.display = 'none';


function buyNow(elementId) {
    calculationField.style.display = 'block';
    const price = document.getElementById(elementId);
    const peiceProductString = price.innerText;
    const priceProduct = parseFloat(peiceProductString);
    return priceProduct;

}

document.getElementById('buy-1').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-11')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;
    // console.log(textField.value);
})
document.getElementById('buy-2').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-22')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})
document.getElementById('buy-3').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-33')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})
document.getElementById('buy-4').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-44')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})
document.getElementById('buy-5').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-55')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})
document.getElementById('buy-6').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-66')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})
document.getElementById('buy-7').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-77')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})
document.getElementById('buy-8').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-88')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})
document.getElementById('buy-9').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-99')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})
document.getElementById('buy-10').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-110')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})
document.getElementById('buy-11').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-111')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})
document.getElementById('buy-12').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-112')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})
document.getElementById('buy-13').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-113')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})
document.getElementById('buy-14').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-114')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})
document.getElementById('buy-15').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-115')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})
document.getElementById('buy-16').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-116')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})
document.getElementById('buy-17').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-117')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})
document.getElementById('buy-18').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-118')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})
document.getElementById('buy-19').addEventListener('click', function () {
    const perProductPrice = buyNow('buy-119')
    const textField = document.getElementById('text1-field');
    textField.value = perProductPrice;

})

document.getElementById('purchuase-page').addEventListener('click', function () {
    const quantity = document.getElementById('quantity-field');
    const quantityValue = parseInt(quantity.value);
    const textField = document.getElementById('text1-field');
    const totalPurchuase = parseFloat(textField.value) * quantityValue;

    textField.value = '';
    quantity.value = '';
    calculationField.style.display = 'none';
    alert('you are successfully purchuase $' + totalPurchuase);
})
document.getElementById('cancel').addEventListener('click', function () {
    calculationField.style.display = 'none';
})
document.getElementById('login-out').addEventListener('click', function () {
    window.location.href = 'index.html';
    // console.log('log-out');

})