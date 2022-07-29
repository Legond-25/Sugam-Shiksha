const universities = require('./../models/secondary schema/universityModel');

class customDB {
  constructor() {
    this.models = {};
    this.readConnection = null;
    this.model_list = {
      University: universities,
    };
  }

  async createConnection(app, config) {
    try {
      require('./db.primary')(config.dbConfig);
      this.readConnection = await require('./db.secondary')(config.dbConfig);
      Object.keys(this.model_list).map((collect) => {
        this.models[collect] = this.readConnection.model(
          collect,
          this.model_list[collect]
        );
      });
    } catch (err) {
      console.log('connection error =>', err);
    }
  }

  getConnection() {
    return this.readConnection;
  }

  getModels() {
    return this.models;
  }
}

module.exports = new customDB();
