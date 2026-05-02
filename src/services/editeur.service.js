const editeurRepo = require('../repositories/editeur.repo');

class EditeurService {
  async getAllEditeurs() {
    return await editeurRepo.findAll();
  }

  async getEditeurById(id) {
    return await editeurRepo.findById(id);
  }

  async createEditeur(data) {
    return await editeurRepo.create(data);
  }

  async updateEditeur(id, data) {
    return await editeurRepo.update(id, data);
  }

  async deleteEditeur(id) {
    return await editeurRepo.delete(id);
  }
}

module.exports = new EditeurService();
