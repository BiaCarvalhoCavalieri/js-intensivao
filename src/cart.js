import { products, localStorageSaveProducts, localStorageGetProducts } from "./utils"

const cartQuantityProductsIds = localStorageGetProducts('cart') ?? {}

const cartButton = document.getElementById("cart__icon")
const cartContainer = document.querySelector(".cart__overlay")
const closeCartButton = document.querySelector(".cart__header-close--button")
const goToCheckouButton = document.querySelector(".cart__checkout-button")

cartButton.addEventListener("click", openCart)
closeCartButton.addEventListener("click", closeCart)
goToCheckouButton.addEventListener("click", goToCheckout)

function openCart(){
    cartContainer.classList.remove("left-[-100%]")
    cartContainer.classList.add("left-0")
}

function closeCart(){
    cartContainer.classList.remove("left-0");
    cartContainer.classList.add("left-[-100%]")
}

function removeProductOfCart(productId){
    delete cartQuantityProductsIds[productId]
    renderProductIntoCart(productId)
    updateSubtotalValue()
    localStorageSaveProducts('cart', cartQuantityProductsIds)
}

function incrementProductQuantity(productId) {
    cartQuantityProductsIds[productId]++
    updateProductQuantity(productId)
    updateSubtotalValue()
    localStorageSaveProducts('cart', cartQuantityProductsIds)
}

function updateProductQuantity(productId) {
    document.getElementById(`product__quantity-${productId}`).innerText = cartQuantityProductsIds[productId]
}

function createProductIntoCart(productId){
    const product = products.find((p) => p.id === productId)
    const cartProductsWrapper = document.getElementById("cart__products")
    const productCardElement = document.createElement("div")
    const elementClasses = ['cart__product-item', 'flex', 'justify-between', 'items-center', 'mx-6'] 

    for (const elementClass of elementClasses) {
        productCardElement.classList.add(elementClass)
    }

    productCardElement.classList.add
    const productCard = `       
        <img class="cart__product-img w-28 h-28 rounded-lg" src="./public/images/${product.img}" alt="${product.name}">
        <div class="cart__product-infos">
        <span class="cart__product-name mb-2">${product.name}</span>
        <div class="cart__product-infos--numbers flex gap-x-4 items-center">
            <span class="cart__product-quantity h-6" id="product__quantity-${productId}">${cartQuantityProductsIds[product.id]}</span>
            <span class="h-6 flex items-center text-xs pt-1">X</span>
            <span class="cart__product-value text-[#B88E2F] text-xs font-medium h-6 flex items-center pt-1">$ ${product.price}</span>
        </div>
        </div>
        <button class="cart__product-remove--item" id="product__remove-${productId}">
            <img src="./public/images/header/remove-product-icon.svg" alt="remove item button">
        </button>
    `
    productCardElement.innerHTML = productCard
    cartProductsWrapper.appendChild(productCardElement)

    document
        .getElementById(`product__remove-${productId}`)
        .addEventListener("click", () => removeProductOfCart(product.id))
}

export function renderProductIntoCart() {
    const cartProductsWrapper = document.getElementById("cart__products")
    cartProductsWrapper.innerHTML = ""

    for( const productId in cartQuantityProductsIds) {
        createProductIntoCart(productId)
    }
    updateSubtotalValue()
    
}

export function addProductToCart(productId) {
    if (productId in cartQuantityProductsIds) {
        incrementProductQuantity(productId)
    } else {
        cartQuantityProductsIds[productId] = 1;
        createProductIntoCart(productId)
        updateSubtotalValue()
        localStorageSaveProducts('cart', cartQuantityProductsIds)
    }
}

function updateSubtotalValue() {
    const cartSubtotal = document.querySelector('.cart__subtotal-value')

    let totalValue = 0;

    for(const productIdIntoCart in cartQuantityProductsIds ) {
        totalValue += products.find((product) => product.id === productIdIntoCart).price * cartQuantityProductsIds[productIdIntoCart]
    }

    cartSubtotal.innerHTML = `$ ${totalValue}`
}

function goToCheckout(){
    if(Object.keys(cartQuantityProductsIds).length === 0) {
        return null
    }
    window.location.href = window.location.origin + "/checkout.html"
}