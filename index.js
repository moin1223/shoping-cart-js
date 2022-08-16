// dom Element select
// mobile
const phoneDecrease = document.getElementById("phone-decrease")
const phoneIncrease = document.getElementById("phone-increase")
let phoneInputField = document.getElementById("phone-input-field")
const mobileTotalPrice = document.getElementById("mobile-total-price")

// casing
const casingDecrease = document.getElementById("casing-decrease")
const casingIncrease = document.getElementById("casing-increase")
let casingInputField = document.getElementById("casing-input-field")
const casingTotalPrice = document.getElementById("casing-total-price")

// calculation
const subtotalEl = document.getElementById("subtotal")
const taxEl = document.getElementById("tax")
const totalEl = document.getElementById("total")


//product total
function productTotal() {

    const casingTotal = parseInt(casingTotalPrice.innerText)
    const mobileTotal = parseInt(mobileTotalPrice.innerText)
    const productTotalPrice = mobileTotal + casingTotal
    return productTotalPrice
}

// update calculation
function updateCalculation() {
    const productTotalPrice = productTotal()
    subtotalEl.innerText = productTotalPrice
    taxEl.innerText = productTotalPrice / 10
    totalEl.innerText = productTotalPrice + (productTotalPrice / 10)

}


// updateProductTotalPrice

function updateTotalPhonePrice(isIncrease, input, total) {
    const productInput = input.value
    if (isIncrease == true) {
        ProductInputValue = parseInt(productInput) + 1
    }
    else if (isIncrease == false && productInput > 0) {
        ProductInputValue = parseInt(productInput) - 1
    }
    input.value = ProductInputValue
    if (total == mobileTotalPrice) {
        total.innerText = parseInt(1219 * ProductInputValue)
    }
    else {
        total.innerText = parseInt(59 * ProductInputValue)
    }

    updateCalculation()


}
//  Increase and decrease event handle

phoneDecrease.addEventListener('click', function () {
    updateTotalPhonePrice(false, phoneInputField, mobileTotalPrice)


})
phoneIncrease.addEventListener('click', function () {
    updateTotalPhonePrice(true, phoneInputField, mobileTotalPrice)

})
casingDecrease.addEventListener('click', function () {
    updateTotalPhonePrice(false, casingInputField, casingTotalPrice)


})
casingIncrease.addEventListener('click', function () {
    updateTotalPhonePrice(true, casingInputField, casingTotalPrice)

})


