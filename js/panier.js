/* déclaration de la variable ds laquelle on met le key et le value dans le local storage" */
let produitLocalStorage = JSON.parse(localStorage.getItem('articles'));

// fonction panier vide
function panierVide() {
  if (produitLocalStorage === null || produitLocalStorage.length === 0) {
    return true;
    console.log('panier vide:true');
  } else {
    return false;
    console.log('false');
  }
}
/* affichage des produits du panier*/
/* code html */
const recapFormulaire = document.querySelector('.container-panier');

let structureProduitPanier = [];
let prixTotalPanier = 0;
/* si le panier est vide */
if (produitLocalStorage === null || produitLocalStorage.length === 0) {
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
    <li>  <p>Prix: </p> <span> ${produitLocalStorage[j].prix} €</span> </li>
    <li> <button class="btn-supprimer"> Supprimer</button></li>
    </ul>
    </div>
    `;
  }
  if (j === produitLocalStorage.length) {
  }
  recapFormulaire.innerHTML = structureProduitPanier;
}

// boutton supprimer l'article
/* séléction des bouttons supprimer*/
let btn_supprimer = document.querySelectorAll('.btn-supprimer');
for (let m = 0; m < btn_supprimer.length; m++) {
  btn_supprimer[m].addEventListener('click', (event) => {
    event.preventDefault();
    /* selection de l'id du produit qui va etre supprimer ene cliquant sur le bouton*/
    let id_selection_supprimer = produitLocalStorage[m].id;
    /* methode filter pour selectionner les elements à garder et supprimer les elements lors du clique*/
    produitLocalStorage = produitLocalStorage.filter(
      (el) => el.id !== id_selection_supprimer
    );
    /* envoyer la variable dans le local storage*/
    /* transformation en format json et envoyer dans le key "produit" du local storage*/
    localStorage.setItem('articles', JSON.stringify(produitLocalStorage));
    /*alerte que le produit a ete supprimer*/
    alert('Le produit sera supprimer');
    window.location.href = 'panier.html';
  });
}
if (panierVide() == false) {
  /* boutton pour vider le panier */
  /* code html */
  const btn_vider_panier_html = `
<button class="btn-vider-panier"> Vider le panier 
</button>
`;

  recapFormulaire.insertAdjacentHTML('beforeend', btn_vider_panier_html);

  const btn_vider_panier = document.querySelector('.btn-vider-panier');

  btn_vider_panier.addEventListener('click', (e) => {
    e.preventDefault();

    /* vider le local storage*/

    localStorage.removeItem('articles');
    alert('Le panier sera vider');
    window.location.href = 'panier.html';
  });

  /*prix total du panier (code html)*/
  const affichagePrixHtml = ` <div class="afficher-prix"> Le prix total est: ${prixTotalPanier} € </div>`;
  recapFormulaire.insertAdjacentHTML('beforeend', affichagePrixHtml);
  /*formulaire validation*/
  const afficherFormulaireHtml = () => {
    const panierFormulaire = document.querySelector('.container-panier');
    /*code html*/
    const structureFormulaire = `
<div class="formulaire">
<h2>Remplir le formulaire pour valider la commande</h2>
  <form class="formulaire-validation">
      <div class="form-text" id="prenom">
      <label for="prenom"> Prénom</label> <span id="prenom-manquant"></span>
        <input type="text" id="firstName" />
      </div>
      <div class="form-text" id="nom">
      <label for="nom"> Nom</label><span id="nom-manquant"></span>
        <input type="text" id="lastName" />
      </div>
    <div class="form-text" id="addresse"> 
      <label for="address"> Addresse</label><span id="addresse-manquant"></span>
        <input type="text" id="address"/>
    </div>
      <div class="form-text" id="ville">
      <label for="ville">Ville</label><span id="ville-manquant"></span>
        <input type="text" id="city"/>
      </div>
      <div class="form-text" id="code-postal">
      <label for="codePostal">Code Postal</label><span id="codepostal-manquant"></span>
        <input type="text" id="codePostal"/>
      </div>
   <div class="form-text" id="address-mail">
      <label for="email">Email</label><span id="email-manquant"></span>
        <input type="email" id="email"/>
      </div>
    <div class="form-commande">
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
    const contact = {
      firstName: document.querySelector('#firstName').value,
      lastName: document.querySelector('#lastName').value,
      address: document.querySelector('#address').value,
      city: document.querySelector('#city').value,
      codePostal: document.querySelector('#codePostal').value,
      email: document.querySelector('#email').value,
    };
    console.log(contact);
    /***** controle validation formulaire 
    const textAlert = (value) => {
      return `${value}:Chiffre et symboles ne sont pas autorisés. \n Nombre de lettres doit etre ente 3 et 20. `;
    };****/
    const regExPrenomNomVille = (value) => {
      return /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/.test(value);
    };
    const regExCodePostal = (value) => {
      return /^[0-9]{5}$/.test(value);
    };
    const regExEmail = (value) => {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    };

    const regExAddress = (value) => {
      return /^[A-Za-z0-9\s]{5,50}$/.test(value);
    };

    // fonction pour gerer l'affichage du texte a cote de l'input pour indiquer que le champ doit etre rempli correctement
    function dataChampManquantTextVide(querySelectorId) {
      document.querySelector(`#${querySelectorId}`).textContent = '';
    }
    function dataChampManquantText(querySelectorId) {
      document.querySelector(`#${querySelectorId}`).textContent =
        'Veuillez bien remplir ce champ';
    }
    // controle du prenom
    function prenomControle() {
      const lePrenom = contact.firstName;
      if (regExPrenomNomVille(lePrenom)) {
        dataChampManquantTextVide('prenom-manquant');
        return true;
      } else {
        dataChampManquantText('prenom-manquant');
        //alert(textAlert('prenom'));
        return false;
      }
    }
    //controle du nom
    function nomControle() {
      const leNom = contact.lastName;
      if (regExPrenomNomVille(leNom)) {
        dataChampManquantTextVide('nom-manquant');
        return true;
      } else {
        dataChampManquantText('nom-manquant');
        //alert(textAlert('nom'));
        return false;
      }
    }
    //controle du ville
    function villeControle() {
      const laVille = contact.city;
      if (regExPrenomNomVille(laVille)) {
        dataChampManquantTextVide('ville-manquant');
        return true;
      } else {
        dataChampManquantText('ville-manquant');
        //alert(textAlert('ville'));
        return false;
      }
    }
    // controle du code postal
    function codePostalControle() {
      const leCodePostal = contact.codePostal;
      if (regExCodePostal(leCodePostal)) {
        dataChampManquantTextVide('codepostal-manquant');
        return true;
      } else {
        dataChampManquantText('codepostal-manquant');
        alert('Code Postal doit etre composé de 5 chiffres.');
        return false;
      }
    } // controle validation email
    function emailControle() {
      const leEmail = contact.email;
      if (regExEmail(leEmail)) {
        dataChampManquantTextVide('email-manquant');
        return true;
      } else {
        dataChampManquantText('email-manquant');
        alert("Email n'est pas valide");
        return false;
      }
    }
    //controle address
    function AddressControle() {
      const leAddress = contact.address;
      if (regExAddress(leAddress)) {
        dataChampManquantTextVide('addresse-manquant');
        return true;
      } else {
        dataChampManquantText('addresse-manquant');
        alert("L'address doit contenir que des lettres et des chiffres");
        return false;
      }
    }
    // controle validite formulaire avant envoie dans le local storage
    if (
      prenomControle() &&
      nomControle() &&
      codePostalControle() &&
      emailControle() &&
      AddressControle() &&
      villeControle()
    ) {
      //mettre l'objet formulaire dans le local storage
      localStorage.setItem('contact', JSON.stringify(contact));
    } else {
      alert('Veuillez bien remplir le formulaire');
    }
    // création du tableau products (id teddy du panier)
    let products = [];
    for (optionsProduit of produitLocalStorage) {
      let teddyId = optionsProduit.id;
      products.push(teddyId);
    }
    console.log(products);
    //mettre les valeurs du formulaire  et les produits séléctionnés dans un objet

    const dataAEnvoyer = {
      products,
      contact,
    };
    console.log(dataAEnvoyer);

    /* envoie de l'objet vers le serveur*/
    // requete POST avec methode Fetch
    const options = {
      method: 'POST',
      // Pour valider la requête on a besoin d'un objet JSON contenant "contact" et "products"
      body: JSON.stringify(dataAEnvoyer),
      headers: { 'Content-Type': 'application/json' },
    };
    console.log(options);

    fetch('http://localhost:3000/api/teddies/order', options)
      .then((response) => response.json())
      .then((dataAEnvoyer) => {
        console.log('Success:', dataAEnvoyer);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });

  // mettre le contenu de local storage dans les champs du formulaire
  //prendre le key dans le local storage et le mettre dans une variable
  const donneLocalStorage = localStorage.getItem('contact');
  // convertir la chaine de caractere en objet js
  const donneLocalStorageObjet = JSON.parse(donneLocalStorage);
  // mettre les valeurs de local storage dans les chanmps du formulaire

  document.querySelector('#firstName').value = donneLocalStorageObjet.firstName;
  document.querySelector('#lastName').value = donneLocalStorageObjet.lastName;
  document.querySelector('#address').value = donneLocalStorageObjet.address;
  document.querySelector('#city').value = donneLocalStorageObjet.city;
  document.querySelector('#codePostal').value =
    donneLocalStorageObjet.codePostal;
  document.querySelector('#email').value = donneLocalStorageObjet.email;
}
