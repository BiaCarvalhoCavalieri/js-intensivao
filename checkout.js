import { products, localStorageGetProducts } from './src/utils'

function renderProductsAtCheckout() {
    const selectedProducts = localStorageGetProducts('cart') ?? {}
    let totalValue = 0;
    for(const productId in selectedProducts) {
        const product = products.find((p) => p.id === productId)
        const cartProductsWrapper = document.getElementById("products__container-checkout")
        const productCardElement = document.createElement("div")
        const elementClasses = ['cart__product-item', 'flex', 'justify-between', 'items-center', 'pb-2'] 
    
        for (const elementClass of elementClasses) {
            productCardElement.classList.add(elementClass)
        }
    
        productCardElement.classList.add
        const productCard = `       
            <div>
                <span class="cart__product-name text-[#9F9F9F] text-base font-normal">${product.name} </span>
                <span class="text-xs font-medium"> X ${selectedProducts[productId]}</span>
            </div>
            <div class="cart__product-infos--numbers">
                <span class="cart__product-value text-base font-light">$ ${product.price}</span>
            </div>
        `
        productCardElement.innerHTML = productCard
        cartProductsWrapper.appendChild(productCardElement)

        totalValue = totalValue + (product.price * selectedProducts[productId])
    }  
    addTotalValue(totalValue)
}

function addTotalValue(value) {
    const totalValueElement = document.getElementById('total__value')

    totalValueElement.innerHTML = `$ ${value}`
}

function finishOrder(e){
    e.preventDefault()
    alert('Compra realizada com sucesso')
    window.location.href = window.location.origin + "/"
}

document.addEventListener("submit", (e) => finishOrder(e))

renderProductsAtCheckout()