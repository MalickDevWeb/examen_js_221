const livreRepo = require('../repositories/livre.repo');

class LivreService {
  async getAllLivres() {
    return await livreRepo.findAll({ include: { editeur: true } });
  }

  async getLivreById(id) {
    return await livreRepo.findById(id, { editeur: true });
  }

  async createLivre(data) {
    // Ensure editeurId is an integer
    if (data.editeurId) data.editeurId = parseInt(data.editeurId);
    return await livreRepo.create(data);
  }

  async updateLivre(id, data) {
    if (data.editeurId) data.editeurId = parseInt(data.editeurId);
    return await livreRepo.update(id, data);
  }

  async deleteLivre(id) {
    return await livreRepo.delete(id);
  }
}

module.exports = new LivreService();
