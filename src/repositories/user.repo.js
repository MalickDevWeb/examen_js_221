const BaseRepository = require('./BaseRepository');
const { prisma } = require('../config/db');

class UserRepository extends BaseRepository {
  constructor() {
    super(prisma.user);
  }

  async findByEmail(email) {
    return await this.model.findUnique({
      where: { email },
    });
  }
}

module.exports = new UserRepository();
