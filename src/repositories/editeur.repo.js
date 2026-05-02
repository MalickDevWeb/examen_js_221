const BaseRepository = require('./BaseRepository');
const Editeur = require('../models/Editeur');

class EditeurRepository extends BaseRepository {
  constructor() {
    super(Editeur);
  }
}

module.exports = new EditeurRepository();
