var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal() {
    var cartOneContainer = document.getElementsByClassName('cart-one')[0]
    var cartHeads = cartOneContainer.getElementsByClassName('cart-head')

    for (var i = 0; i < cartHeads.length; i++) {
        var cartHead = cartHeads[i]
        var priceElement = cartHead.getElementsByClassName('cart-price')[0]
        var quantityElement = cartHead.getElementsByClassName('cart-quantity')[0]

        console.log(priceElement, quantityElement)
    }
}
