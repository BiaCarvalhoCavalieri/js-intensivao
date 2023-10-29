export const products = [
    {
        id: "1",
        img: "product-1.png",
        discount: "-30%",
        name: "Syltherine",
        brand: "Stylish cafe chair",
        listPrice: 3500,
        price: 2500
    },
    {
        id: "2",
        img: "product-2.png",
        discount: "",
        name: "Leviosa",
        brand: "Stylish cafe chair",
        listPrice: 2500,
        price: 2500,
    },
    {
        id: "3",
        img: "product-3.png",
        discount: "-50%",
        name: "Lolito",
        brand: "Luxury big sofa",
        listPrice: 14000,
        price: 7000,
    },
    {
        id: "4",
        img: "product-4.png",
        discount: "new",
        name: "Respira",
        brand: "Outdoor bar table and stool",
        listPrice: 500,
        price: 500,
    },
    {
        id: "5",
        img: "product-1.png",
        discount: "-30%",
        name: "Syltherine",
        brand: "Stylish cafe chair",
        listPrice: 3500,
        price: 2500
    },
    {
        id: "6",
        img: "product-2.png",
        discount: "",
        name: "Leviosa",
        brand: "Stylish cafe chair",
        listPrice: 2500,
        price: 2500,
    },
    {
        id: "7",
        img: "product-3.png",
        discount: "-50%",
        name: "Lolito",
        brand: "Luxury big sofa",
        listPrice: 14000,
        price: 7000,
    },
    {
        id: "8",
        img: "product-4.png",
        discount: "new",
        name: "Respira",
        brand: "Outdoor bar table and stool",
        listPrice: 500,
        price: 500,
    }
]

export function localStorageSaveProducts(key, infos) {
    localStorage.setItem(key, JSON.stringify(infos))
}
export function localStorageGetProducts(key) {
    return JSON.parse(localStorage.getItem(key))
}

export function createSimpleProduct(productId, idHTMLContainer, productQuantity){
    const product = products.find((p) => p.id === productId)
    const cartProductsWrapper = document.getElementById(idHTMLContainer)
    const productCardElement = document.createElement("div")
    const elementClasses = ['cart__product-item', 'flex', 'justify-between', 'items-center', 'mx-6'] 

    for (const elementClass of elementClasses) {
        productCardElement.classList.add(elementClass)
    }

    productCardElement.classList.add
    const productCard = `       
        <img class="cart__product-img w-28 h-28 rounded-lg" src="./public/images/${product.img}" alt="${product.name}">
        <div class="cart__product-infos">
            <span class="cart__product-name">${product.name}</span>
            <div class="cart__product-infos--numbers">
                <span class="cart__product-quantity" id="product__quantity-${productId}">${productQuantity}</span>
                <span class="cart__product-value">$ ${product.price}</span>
            </div>
        </div>
    `
    productCardElement.innerHTML = productCard
    cartProductsWrapper.appendChild(productCardElement)
}