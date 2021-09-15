const orderId = localStorage.getItem('orderId');
//récuperation de l'Id de la commande
if (!orderId) {
  window.location.href = 'index.html';
}

const orderEls = document.querySelector('.order-id span');
orderEls.innerText = orderId;
console.log(orderId);

//recuperation prix total de la commande
const prixTotalPanier = document.querySelector('.prix-total span');
prixTotalPanier.innerText = localStorage.getItem('prixTotalPanier');
console.log(prixTotalPanier);
console.log('prixTotalPanier');

localStorage.clear();
