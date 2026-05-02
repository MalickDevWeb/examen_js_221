const BaseRepository = require('./BaseRepository');
const { prisma } = require('../config/db');

class EditeurRepository extends BaseRepository {
  constructor() {
    super(prisma.editeur);
  }
}

module.exports = new EditeurRepository();
