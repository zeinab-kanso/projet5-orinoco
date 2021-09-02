//affichage des produits dans la page index
class Produit {
  constructor(jsonProduit) {
    jsonProduit && Object.assign(this, jsonProduit);
  }
}
/* récupération de l'id du produit */
const queryString_url_id = window.location.search;
const urlSearchParams = new URLSearchParams(queryString_url_id);
const newId = urlSearchParams.get('id');
console.log(newId);
fetch(`http://localhost:3000/api/teddies/${newId}`)
  .then((data) => data.json())
  .then((produit) => {
    console.log(produit);
    /* insertion des informations de la card du produit (structure html pour l'affichage du produit) */
    document.getElementById('details-produit').innerHTML += `  

    <div class="card">
          <img src="${produit.imageUrl}" alt="teddy" class="card-img">
          <div class="card-body">  
            <h3 class="card-name"> ${produit.name} </h3>
            <p class="card-description">${produit.description}</p> 
            <span class="card-price">${produit.price / 100 + '€'} </span> 
            <div class="card-color">
           <label for="option-color"> Choix de la couleur :</label>
            <select name="colors" id="option-color">
            </select> 
          </div>
            </div>
            <button id="btn-envoyer" type="submit"><span>
         Ajouter au panier  </span> </ button>
    </div>`;
    /* choix de la couleur */
    const colorChoice = produit.colors;
    const select = document.querySelector('#option-color');
    for (let i = 0; i < colorChoice.length; i++) {
      let option = document.createElement('option');
      option.value = colorChoice[i];
      option.innerHTML = colorChoice[i];
      select.appendChild(option);
    }
  });
