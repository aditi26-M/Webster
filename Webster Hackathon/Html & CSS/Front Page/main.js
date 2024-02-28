for(let i=0; i < cart.length; i++) {
    carts[i].addEventsListner('click', () => {
        cartNumber(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')
    
    if(productNumbers) {
        document.querySelector('.cart span').textContent = p
    }
}

function  cartNumbers(product) {
    console.log("The product clicked is", product);
    let productNumbers = localStorage.getItem('cartNumbers')

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + )
        document.querySelector
    }
}