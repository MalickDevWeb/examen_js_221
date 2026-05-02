const BaseRepository = require('./BaseRepository');
const Livre = require('../models/Livre');

class LivreRepository extends BaseRepository {
  constructor() {
    super(Livre);
  }

  async findAll(filter = {}) {
    return await super.findAll(filter, 'editeur');
  }

  async findById(id) {
    return await super.findById(id, 'editeur');
  }
}

module.exports = new LivreRepository();
