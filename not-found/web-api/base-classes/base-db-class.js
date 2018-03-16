const mysql = require('mysql')

const DataBaseConfiguration = require('../../config/db.config')

class BaseDbClass extends mysql {

  conn = ''

  constructor() {
    super()

    this.conn = this.createConnection(DataBaseConfiguration)

    this.conn.connect(function(err) {
      if (err) {
        console.log(err);
        throw err;
      }
    })
  }

  insert(query) {
    return this.conn.query(query, function (err, result) {
      if(err) {
        return err
      }
      return result
    })

  }

  executeStoredProcedure(name, args) {

  }

}

module.exports.BaseDbClass