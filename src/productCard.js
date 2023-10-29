import { addProductToCart } from "./cart"
import { products } from "./utils"

export function renderProducts() {
    for(const product of products) {
        const productCard = `
            <div class="shelf__product-container bg-[#f4f5f7] relative" id="product-${product.id}">
                <img class="shelf__product-img w-70 h-74 lg:w-62 lg:h-66" src="./public/images/${product.img}" alt="mesas de apoio na cor branca">
                <span class="shelf__product-discountFlag absolute text-white bg-[#E97171] flex items-center justify-center top-5 right-5 w-12 h-12 rounded-3xl">${product.discount}</span>
                <div class="shelf__product-infos p-4">
                    <h4 class="shelf__product-name text-[#3A3A3A] text-2xl font-semibold">${product.name}</h4>
                    <span class="shelf__product-brand text-[#898989] text-base font-medium mt-2">${product.brand}</span>
                    <div class="shelf__product-values mt-2 mb-3 lg:mb-1">
                        <span class="shelf__product-bestPrice text-[#3A3A3A] text-xl font-semibold mr-4"> 
                            $ ${product.price}
                        </span>
                        <span class="shelf__product-listPrice text-[#B0B0B0] text-base font-normal line-through">
                            $ ${product.listPrice}
                        </span>
                    </div>
                </div>
                <div class="shelf__product-overlay opacity-0 absolute top-0 left-0 w-full h-full bg-[#3A3A3AB8] flex justify-center items-center transition-all duration-500 ease-in-out hover:opacity-100 lg:static lg:opacity-100 lg:bg-transparent lg:pb-4">
                    <button class="shelf__product-addcart--button bg-white h-12 w-52 text-[#B88E2F] text-base font-semibold hover:opacity-90 lg:opacity-100 lg:bg-[#ffefcc]" id="add__product-${product.id}">Add to cart</button>
                </div>
            </div>
        `
        document.querySelector(".products__container").innerHTML += productCard
    }
    for(const product of products) {
        document
            .getElementById(`add__product-${product.id}`)
            .addEventListener("click", () => addProductToCart(product.id))
    }
    settingFlagBgColor()
}
function settingFlagBgColor() {
    const productsFlagsElement = document.querySelectorAll('.shelf__product-discountFlag')
    for (const productFlag of productsFlagsElement){
        if (productFlag.innerHTML === "new") {
            productFlag.classList.remove("bg-[#E97171]")
            productFlag.classList.add("bg-[#2EC1AC]")
            
        } else if (!productFlag.innerHTML) {
            productFlag.classList.add("opacity-0")
        }
    }
}
