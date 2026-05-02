class BaseRepository {
  constructor(modelDelegate) {
    this.model = modelDelegate;
  }

  async findAll(params = {}) {
    return await this.model.findMany(params);
  }

  async findById(id, include = {}) {
    return await this.model.findUnique({
      where: { id: parseInt(id) },
      include,
    });
  }

  async findOne(params = {}) {
    return await this.model.findFirst(params);
  }

  async create(data) {
    return await this.model.create({ data });
  }

  async update(id, data) {
    return await this.model.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  async delete(id) {
    return await this.model.delete({
      where: { id: parseInt(id) },
    });
  }

  async count(params = {}) {
    return await this.model.count(params);
  }
}

module.exports = BaseRepository;
