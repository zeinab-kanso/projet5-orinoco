/* déclaration de la variable ds laquelle on met le key et le value dans le local storage" */
let produitLocalStorage = JSON.parse(localStorage.getItem('articles'));
console.log(produitLocalStorage);

/* affichage des produits du panier*/
/* code html */
const recapFormulaire = document.querySelector('.container-panier');
console.log(recapFormulaire);
let structureProduitPanier = [];
/* si le panier est vide */
if (produitLocalStorage === null) {
  const panierVide = `
    <div class= "container-panier-vide">
    <div> Le panier est vide </div>
    </div>
    `;
  recapFormulaire.innerHTML = panierVide;
} else {
  /* si le panier n'est pas vide*/
  let structureProduitPanier = [];
  for (j = 0; j < produitLocalStorage.length; j++) {
    structureProduitPanier =
      structureProduitPanier +
      `
    <div class="container-achat">
    <ul>
    <li> <p> Nom du produit:</p> <span> ${produitLocalStorage[j].nom} </span> </li>
    <li>  <p>Couleur:</p> <span> ${produitLocalStorage[j].option_color}</span> </li>
    <li> <p> Quantité:</p><span>  1</span> </li>
    <li>  <p>price: </p> <span> ${produitLocalStorage[j].prix} </span> </li>
  
    </ul>
    </div>
    `;
  }
  if (j === produitLocalStorage.length) {
  }
  recapFormulaire.innerHTML = structureProduitPanier;
}
/* boutton pour vider le panier */
/* code html */
const btn_vider_panier_html = `
<button class="btn-vider-panier"> Vider le panier 
</button>
`;
console.log(recapFormulaire);
recapFormulaire.insertAdjacentHTML('beforeend', btn_vider_panier_html);

const btn_vider_panier = document.querySelector('.btn-vider-panier');
console.log(btn_vider_panier);
btn_vider_panier.addEventListener('click', (e) => {
  e.preventDefault();

  /* vider le local storage*/
  localStorage.removeItem('articles');
  alert('Le panier est vidé');
  window.location.href = 'panier.html';
});

/* prix total du panier*/
let calculPrixTotal = [];
for (let k = 0; k < produitLocalStorage.length; k++) {
  let prixTousLesProduits = produitLocalStorage[k].prix;
  calculPrixTotal.push(prixTousLesProduits);
  console.log(calculPrixTotal);
}
/*additionner les prix*/
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prixTotal = calculPrixTotal.reduce(reducer, 0);
console.log(prixTotal);
/* code html*/
const affichagePrixHtml = ` <div class="afficher-prix"> Le prix total est: ${prixTotal} € </div>`;
recapFormulaire.insertAdjacentHTML('beforeend', affichagePrixHtml);

/*formulaire validation*/
const afficherFormulaireHtml = () => {
  const panierFormulaire = document.querySelector('.container-panier');
  const structureFormulaire = `
<div class="produit-panier">
  <form class="formulaire-validation">
    <div class="form-group row">
      <div class="col-sm-4">
        <input type="text" class="form-control" placeholder="PRENOM" />
      </div>
      <div class="col-sm-4">
        <input type="text" class="form-control" placeholder="NOM" />
      </div>
    </div>

    <div class="form-group row">
      <div class="col-sm-8">
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="ADRESSE"
        />
      </div>
    </div>
    <div class="form-group row">
      <div class="col-md-4">
        <input
          type="text"
          class="form-control"
          id="inputCity"
          placeholder="VILLE"
        />
      </div>
      <div class="col-md-4">
        <input
          type="text"
          class="form-control"
          id="inputCodeP"
          placeholder="CODE POSTAL"
        />
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-8">
        <input
          type="email"
          class="form-control"
          id="inputEmail"
          placeholder=" ADDRESSE EMAIL"
        />
      </div>
    </div>

    <div class="form-row">
      <button type="submit" class="btn btn-primary">
        Valider la commande
      </button>
    </div>
  </form>
</div>`;
  panierFormulaire.insertAdjacentHTML('afterend', structureFormulaire);
};
