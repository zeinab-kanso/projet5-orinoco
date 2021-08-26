fetch('http://localhost:3000/api/teddies')
  .then((data) => data.json())
  .then((jsonListProduit) => {
    for (let jsonProduit of jsonListProduit) {
      let produit = new Produit(jsonProduit);
      document.querySelector('.container').innerHTML += `
        <div class="col-12 col-lg-6">
          <div class="card mb-6 mb-lg-0 border-primary shadow">
          <img src="${produit.imageUrl}" alt="teddy" class="card-img">
          <div class="card-body">
            <h3 class="card-name"> ${produit.name} </h3>
            <p class="card-description">${produit.description}</p>
            <span class="card-price">${produit.price} </span>
          </div>
          </div>
        </div>`;
    }
  });
