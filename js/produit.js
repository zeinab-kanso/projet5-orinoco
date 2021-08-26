class Produit {
  constructor(jsonProduit) {
    jsonProduit && Object.assign(this, jsonProduit);
  }
}
