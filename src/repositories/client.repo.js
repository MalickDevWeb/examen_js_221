const BaseRepository = require('./BaseRepository');
const Client = require('../models/Client');

class ClientRepository extends BaseRepository {
  constructor() {
    super(Client);
  }
}

module.exports = new ClientRepository();
