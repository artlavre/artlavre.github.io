const cookieContainer = document.querySelector(".cookie_container");
    const cookieButton = document.querySelector(".cookie_button");

    cookieButton.addEventListener("click", () => {
        cookieContainer.classList.remove("active"); 
        localStorage.setItem("cookieDisplayLayout", "true"); });

        setTimeout( () => { if(!localStorage.getItem("cookieDisplayLayout"))
            cookieContainer.classList.add("active");}, 2000 );



var clock = document.querySelectorAll(".clock");

function pickCard(el){
    var cards = document.getElementById('main-block-card').children;
    
    for(var i = 0; i < cards.length; i++){
        cards[i].className = "main-block__card";
    }
    el.className = "main-block__card active";
    
    
}
    

function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

const wish = document.querySelector(".wish");

function imagefun(el) {
    
    if (el.className == "wish") {
        el.className = "wish active";
    }
    else {
        el.className = "wish";
    }
}



let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Ружье Mossberg 590M Mag-Fed ',
        tag: 'Riffle',
        price: 27632,
        inCart:0
    },
    {
        name: 'Ружье Mossberg 590M Mag-Fed к.12 18.5" Synthetic',
        tag: 'Riffle1',
        price: 27632,
        inCart:0
    },
    {
        name: 'Ружье Mossberg 590M Mag-Fed к.12 18.5" Synthetic',
        tag: 'Riffle2',
        price: 27632,
        inCart:0
    },
    {
        name: 'Ружье Mossberg 590M Mag-Fed к.12 18.5" Synthetic',
        tag: 'Riffle3',
        price: 27632,
        inCart:0
    },
    {
        name: 'Ружье Mossberg 590M Mag-Fed к.12 18.5" Synthetic',
        tag: 'Riffle4',
        price: 27632,
        inCart:0
    },
    {
        name: 'Ружье Mossberg 590M Mag-Fed ',
        tag: 'Riffle5',
        price: 27632,
        inCart:0
    },
    {
        name: 'Ружье Mossberg 590M Mag-Fed ',
        tag: 'Riffle6',
        price: 27632,
        inCart:0
    },
    {
        name: 'Ружье Mossberg 590M Mag-Fed к.12 18.5" Synthetic',
        tag: 'Riffle7',
        price: 27632,
        inCart:0
    }
];

for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    let cartCost = localStorage.getItem('totalCost');
    
    if(productNumbers){
        document.querySelector('.header__product span').textContent = productNumbers;
    }

    if(productNumbers){
        document.querySelector('.total_in_cart').textContent = productNumbers + " товара";
    }
    
    if(cartCost){
        document.querySelector('.total__cost').textContent = cartCost + " ₴";
    }
    
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.header__product span').textContent = productNumbers +1;
    } else{
        localStorage.setItem('cartNumbers',  1);
        document.querySelector('.header__product span').textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart +=1;
    }else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
     
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product){
    //console.log("THe product peuce is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is", cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
}

onLoadCartNumbers();
