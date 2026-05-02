const fournisseurRepo = require('../repositories/fournisseur.repo');

class FournisseurService {
  async getAllFournisseurs() {
    return await fournisseurRepo.findAll();
  }

  async getFournisseurById(id) {
    return await fournisseurRepo.findById(id);
  }

  async createFournisseur(data) {
    return await fournisseurRepo.create(data);
  }

  async updateFournisseur(id, data) {
    return await fournisseurRepo.update(id, data);
  }

  async deleteFournisseur(id) {
    return await fournisseurRepo.delete(id);
  }
}

module.exports = new FournisseurService();
