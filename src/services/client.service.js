const clientRepo = require('../repositories/client.repo');

class ClientService {
  async getAllClients() {
    return await clientRepo.findAll();
  }

  async getClientById(id) {
    return await clientRepo.findById(id);
  }

  async createClient(data) {
    return await clientRepo.create(data);
  }

  async updateClient(id, data) {
    return await clientRepo.update(id, data);
  }

  async deleteClient(id) {
    return await clientRepo.delete(id);
  }
}

module.exports = new ClientService();
