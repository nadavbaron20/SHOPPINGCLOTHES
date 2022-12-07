let addToCart = document.querySelectorAll(".buttonI");
let cart = [];
let overAllPrice = 0;

addToCart.forEach((item) =>
  item.addEventListener("click", function (event) {
    let items = document.querySelectorAll("#" + event.target.id);
    cart.push([items[0].textContent, items[1].textContent]);
    console.log(cart + overAllPrice);
    addItem(cart);
  })
);

let cartItems = document.querySelector(".cart-items");

function addItem(item) {
  document.getElementById("cartA").innerHTML = "";
  let txtTotalI = document.createTextNode(cart.length);
  document.getElementById("cartA").appendChild(txtTotalI);


  cartItems.innerHTML = "";
  for (let i = 0; i < item.length; i++) {
    let cartRow = document.createElement("div");
    let cartItem = document.createElement("div");
    let itemName = document.createElement("span");
    let itemPrice = document.createElement("span");
    
    cartRow.className = "rowI";
    cartItem.className = "cartI";
    itemName.className = "cartT";
    itemName.textContent = item[i][0];
    itemPrice.className = "cartP";
    itemPrice.textContent = item[i][1];
    
    
    let button = document.createElement("button");
    button.className = "btn btn-danger";
    button.onclick = () => remove(i);
    button.textContent = "remove";
    

    cartItem.appendChild(itemName);
    cartRow.appendChild(cartItem);
    cartRow.appendChild(itemPrice);
    cartRow.appendChild(button);
    cartItems.appendChild(cartRow);
  }
}
function remove(id) {
  console.log(id);
  cart.splice(id, 1);
  addItem(cart);
}


function deleted() {
  let button2 = document.getElementById("deleteBtn");
  button2.onclick = () => remove(item[i]);
  alert("are you you sure that you want to delete order");
  cart.splice(0, cart.length);
  addItem();
  overAllPrice = 0;
}

function countALL() {
let overAllPrice = 0;
   
for (let i = 0; i < cart.length; i++) {
  document.getElementById("totalI").innerHTML = "";
  overAllPrice = Number(overAllPrice) + Number(cart[i][1]);
  let txtTotalI = document.createTextNode(overAllPrice);
  document.getElementById("totalI").appendChild(txtTotalI);
}
  
}  

countI.addEventListener('click', countALL);

deleteBtn.addEventListener("click", deleted);




