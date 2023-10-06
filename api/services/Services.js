const database = require('../models');

class Services {
  constructor(nomeDoModelo) {
    this.nomeDoModelo = nomeDoModelo;
  }

  async pegaTodosOsRegistros(where = {}) {
    return database[this.nomeDoModelo].findAll({ where: { ...where } });
  }

  async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
    return database[this.nomeDoModelo].update(
      dadosAtualizados,
      { where: { id: id } },
      transacao
    );
  }

  async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
    return database[this.nomeDoModelo].update(
      dadosAtualizados,
      { where: { ...where } },
      transacao
    );
  }

  async encontraEContaRegistros(where = {}, agregadores) {
    return database[this.nomeDoModelo].findAndCountAll({
      where: { ...where },
      ...agregadores,
    });
  }
}

module.exports = Services;
