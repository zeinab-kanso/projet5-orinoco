fetch('http://localhost:3000/api/teddies')
  .then((data) => data.json())
  .then((jsonListProduit) => {
    for (let jsonProduit of jsonListProduit) {
      let produit = new Produit(jsonProduit);
      document.querySelector('.container').innerHTML += `
        <div class="row">
          <div class="card  ">
          <img src="${produit.imageUrl}" alt="teddy" class="card-img">
          <div class="card-body">
            <h3 class="card-name"> ${produit.name} </h3>
            <p class="card-description">${produit.description}</p>
            <span class="card-price">${produit.price / 100 + '€'} </span>
          </div>
          <a class="btn" href="produit.html?id=${produit._id}" >
          <span> Voir l'article </span> </a>
          </div>
        </div>`;
    }
  });