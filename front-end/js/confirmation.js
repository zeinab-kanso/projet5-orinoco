//récuperation de l'Id de la commande
const orderId = localStorage.getItem('orderId');
if (!orderId) {
  window.location.href = 'index.html';
}

const orderEls = document.querySelector('.order-id span');
orderEls.innerText = orderId;

//recuperation prix total de la commande
const prixTotalPanier = document.querySelector('.prix-total span');
prixTotalPanier.innerText = localStorage.getItem('prixTotalPanier');

// supprimer le local storage apres confirmation de la commande
localStorage.clear();
