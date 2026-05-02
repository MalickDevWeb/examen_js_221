const produitRepo = require('../repositories/produit.repo');

class ProduitService {
  async getAllProduits() {
    return await produitRepo.findAll();
  }

  async getProduitById(id) {
    return await produitRepo.findById(id);
  }

  async createProduit(data) {
    return await produitRepo.create(data);
  }

  async updateProduit(id, data) {
    return await produitRepo.update(id, data);
  }

  async deleteProduit(id) {
    return await produitRepo.delete(id);
  }

  async incrementStock(id, quantity) {
    return await produitRepo.incrementStock(id, quantity);
  }

  async decrementStock(id, quantity) {
    const produit = await produitRepo.findById(id);
    if (!produit) throw new Error('Produit non trouvé');
    
    if (produit.quantiteStock < quantity) {
      const error = new Error('Stock insuffisant');
      error.statusCode = 400;
      throw error;
    }
    
    return await produitRepo.decrementStock(id, quantity);
  }
}

module.exports = new ProduitService();
