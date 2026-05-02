const BaseRepository = require('./BaseRepository');
const { prisma } = require('../config/db');

class ClientRepository extends BaseRepository {
  constructor() {
    super(prisma.client);
  }
}

module.exports = new ClientRepository();
