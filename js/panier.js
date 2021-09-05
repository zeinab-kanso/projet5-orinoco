/* déclaration de la variable ds laquelle on met le key et le value dans le local storage" */
let produitLocalStorage = JSON.parse(localStorage.getItem('articles'));
console.log(produitLocalStorage);

/* affichage des produits du panier*/
/* code html */
const recapFormulaire = document.querySelector('.container-panier');
console.log(recapFormulaire);
let structureProduitPanier = [];
let prixTotalPanier = 0;
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

  /*variable prix total*/

  for (j = 0; j < produitLocalStorage.length; j++) {
    /*additionner le prix*/
    prixTotalPanier = produitLocalStorage[j].prix + prixTotalPanier;

    structureProduitPanier =
      structureProduitPanier +
      `
    <div class="produit-panier">
    <ul>
    <li> <p> Nom du produit:</p> <span> ${produitLocalStorage[j].nom} </span> </li>
    <li>  <p>Couleur:</p> <span> ${produitLocalStorage[j].option_color}</span> </li>
    <li> <p> Quantité:</p><span>  ${produitLocalStorage[j].quantite}</span> </li>
    <li>  <p>price: </p> <span> ${produitLocalStorage[j].prix} €</span> </li>
    </ul>
    </div>
    `;
  }
  if (j === produitLocalStorage.length) {
  }
  recapFormulaire.innerHTML = structureProduitPanier;
}
/*prix total du panier (code html)*/
const affichagePrixHtml = ` <div class="afficher-prix"> Le prix total est: ${prixTotalPanier} € </div>`;
recapFormulaire.insertAdjacentHTML('beforeend', affichagePrixHtml);
console.log(prixTotalPanier);

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
  alert('Le panier sera vider');
  window.location.href = 'panier.html';
});

/*formulaire validation*/
const afficherFormulaireHtml = () => {
  const panierFormulaire = document.querySelector('.container-panier');
  /*code html*/
  const structureFormulaire = `
<div class="formulaire">
  <form class="formulaire-validation">
    <div class="form-group row">
      <div class="col-sm-4">
        <input type="text" class="form-control" id="inputPrenom" placeholder="PRENOM" />
      </div>
      <div class="col-sm-4">
        <input type="text" class="form-control" id="inputNom" placeholder="NOM" />
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
/*affichage formulaire*/
afficherFormulaireHtml();
//sélection bouton validation commande
const btnValidationCommande = document.querySelector('.btn btn-primary');
console.log(btnValidationCommande);
//recuperation des valeurs de formulaire pour le local storage
localStorage.setItem();
