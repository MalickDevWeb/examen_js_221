const livreRepo = require('../repositories/livre.repo');

class LivreService {
  async getAllLivres() {
    return await livreRepo.findAll();
  }

  async getLivreById(id) {
    return await livreRepo.findById(id);
  }

  async createLivre(data) {
    return await livreRepo.create(data);
  }

  async updateLivre(id, data) {
    return await livreRepo.update(id, data);
  }

  async deleteLivre(id) {
    return await livreRepo.delete(id);
  }
}

module.exports = new LivreService();
