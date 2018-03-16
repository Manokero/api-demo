const mysql = require('mysql')
const DataBaseConfiguration = require('../../config/db.config')

export class BaseDbClass extends mysql {

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

  executeQuery(query) {


  }

  executeStoredProcedure(name, args) {

  }

}