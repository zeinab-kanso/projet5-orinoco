//récuperation de l'Id de la commande
const orderId = document.querySelector('.order-id span');
orderId.innerText = localStorage.getItem('orderId');
console.log(orderId);

//recuperation prix total de la commande
const prixTotalPanier = document.querySelector('.prix-total span');
prixTotalPanier.innerText = localStorage.getItem('prixTotalPanier');
console.log(prixTotalPanier);
console.log('prixTotalPanier');

localStorage.clear();
