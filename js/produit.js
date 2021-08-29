class Produit {
  constructor(jsonProduit) {
    jsonProduit && Object.assign(this, jsonProduit);
  }
}
function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

   fetch('http://localhost:3000/api/teddies/'+ $_GET('id'))
  .then((data) => data.json())
  .then((produit) => {
    console.log (produit)
      document.getElementById('details-produit').innerHTML += `
        <div class="card  ">
          <div class="card-img">
          <img src="${produit.imageUrl}" alt="teddy">
          </div>
          <div class="card-body">  
            <h3 class="card-name"> ${produit.name} </h3>
            <p class="card-description">${produit.description}</p>
                  <div class="card-color"> </div>
            <span class="card-price">${produit.price / 100 + '€'} </span>
    </div>
 
       </div>`;
    
  });

