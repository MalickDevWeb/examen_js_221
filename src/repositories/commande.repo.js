const BaseRepository = require('./BaseRepository');
const Commande = require('../models/Commande');

class CommandeRepository extends BaseRepository {
  constructor() {
    super(Commande);
  }

  async findAll(filter = {}) {
    return await super.findAll(filter, 'client livres.livre');
  }

  async findById(id) {
    return await super.findById(id, 'client livres.livre');
  }
}

module.exports = new CommandeRepository();
