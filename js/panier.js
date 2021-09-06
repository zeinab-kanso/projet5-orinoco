/* déclaration de la variable ds laquelle on met le key et le value dans le local storage" */
let produitLocalStorage = JSON.parse(localStorage.getItem('articles'));

/* affichage des produits du panier*/
/* code html */
const recapFormulaire = document.querySelector('.container-panier');

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
        <input type="text" class="form-control" id="firstName" placeholder="PRENOM" />
      </div>
      <div class="col-sm-4">
        <input type="text" class="form-control" id="lastName" placeholder="NOM" />
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-8">
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="ADRESSE"
        />
      </div>
    </div>
    <div class="form-group row">
      <div class="col-md-4">
        <input
          type="text"
          class="form-control"
          id="city"
          placeholder="VILLE"
        />
      </div>
      <div class="col-md-4">
        <input
          type="text"
          class="form-control"
          id="codePostal"
          placeholder="CODE POSTAL"
        />
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-8">
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder=" ADDRESSE EMAIL"
        />
      </div>
    </div>
    <div class="form-row">
      <button type="submit" class="btn-primary">
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
const btnValidationCommande = document.querySelector('.btn-primary');

//add event listener
btnValidationCommande.addEventListener('click', (e) => {
  e.preventDefault();
  /*recuperation des valeurs de formulaire pour le local storage*/
  const valeurFormulaire = {
    firstName: document.querySelector('#firstName').value,
    lastName: document.querySelector('#lastName').value,
    address: document.querySelector('#address').value,
    city: document.querySelector('#city').value,
    codePostal: document.querySelector('#codePostal').value,
    email: document.querySelector('#email').value,
  };

  /*mettre l'objet formulaire dans le local storage*/
  localStorage.setItem('valeurFormulaire', JSON.stringify(valeurFormulaire));

  //mettre les valeurs du formulaire dans un objet et les produits
  const aEnvoyer = { produitLocalStorage, valeurFormulaire };
});
