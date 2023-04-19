let serial = 0;

document.getElementById("first-card").addEventListener("click", function () {
  serial += 1;
  const productName = document.getElementById("first-name").innerText;
  const productPrice = document.getElementById("first-price").innerText;
  const productQuantity = document.getElementById("coffee-input").value;
  const total = parseInt(productPrice) * parseInt(productQuantity);
  displayData(productName, productPrice, productQuantity, total);
});

document.getElementById("second-card").addEventListener("click", function () {
  serial += 1;

  const productName = document.getElementById("2nd-name").innerText;
  const productPrice = document.getElementById("2nd-price").innerText;
  const productQuantity = document.getElementById("chocolate-input").value;
  const total = parseInt(productPrice) * parseInt(productQuantity);
  displayData(productName, productPrice, productQuantity, total);

  disabledButton("second-card");
});

document.getElementById("third-card").addEventListener("click", function () {
  serial += 1;

  const productName = document.getElementById("third-title").innerText;
  const productPrice = document.getElementById("third-price").innerText;
  const productQuantity = document.getElementById("teddy-input").value;
  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
  displayData(productName, productPrice, productQuantity, priceTotal);
  disabledButton("third-card");
});

// card four operation
document.getElementById("second-last").addEventListener("click", function (e) {
  serial += 1;
  const pd = getAllData(e);
  const sumTotal = parseInt(pd.pPrice) * parseInt(pd.pQuantity);
  displayData(pd.pName, pd.pPrice, pd.pQuantity, sumTotal);
  disabledButton("second-card");
});

// last card

document.getElementById("last-card").addEventListener("click", function () {
  serial += 1;
  const productName = document.getElementById("last-title").innerText;
  const productPrice = document.getElementById("first-input").value;
  const productQuantity = document.getElementById("second-input").value;
  if (
    productPrice == "" ||
    productQuantity == "" ||
    productPrice <= 0 ||
    productQuantity <= 0
  ) {
    return alert("please enter any valid number");
  }
  const total = parseInt(productPrice) * parseInt(productQuantity);
  displayData(productName, productPrice, productQuantity, total);
  disabledButton("last-card");
});

// common function to display data
function displayData(nameOfP, priceOfP, quantityOfp, resultP) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfP}</td>
    <td>${priceOfP}</td>
    <td>${quantityOfp}</td>
    <td>${resultP}</td>
    <td>

    </td>
    
  `;
  container.appendChild(tr);
  document.getElementById("total-product").innerText = serial;
}

function disabledButton(id) {
  document.getElementById(id).setAttribute("disabled", true);
}

// common function to get data using event object
function getAllData(e) {
  const pName = e.target.parentNode.parentNode.children[0].innerText;
  const pPrice =
    e.target.parentNode.parentNode.children[2].children[0].innerText;
  const pQuantity =
    e.target.parentNode.parentNode.children[3].children[0].innerText;

  const pd = {
    pName: pName,
    pPrice: pPrice,
    pQuantity: pQuantity,
  };

  return pd;
}
