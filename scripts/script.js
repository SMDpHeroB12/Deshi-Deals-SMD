// function for get elements IDs------------------------
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// getting desired element------------------------------

document.getElementById("cart-btn-last").addEventListener("click", function () {
  const title = getElement("cart-title-last").innerText;
  const price = getElement("cart-price-last").innerText;

  // Logic explanation =================

  //total price k dhoro
  const totalPrice = getElement("total-price").innerText;

  //calculate koro
  let currentTotal = Number(price) + Number(totalPrice);

  //price update koro
  getElement("total-price").innerText = currentTotal.toFixed(2);

  // cart container k dhoro***********************************
  const cartContainer = getElement("cart-container");

  //notun ekta div banao
  const newCart = document.createElement("div");
  newCart.innerHTML = `
            <div class="flex items-center justify-between p-5 m-3 rounded-lg bg-[#f3f3f3]">
                  <div class="">
                    <img
                      class="w-20"
                      src="./assets/sports-1.png"
                      alt="cart-item-image"
                    />
                  </div>
                  <div>
                    <h2 class="font-semibold">${title}</h2>
                    <h2><span>${price}</span> TK</h2>
                  </div>
            </div>
    `;

  // cart-container e jog ba appened koro
  cartContainer.append(newCart);
});
