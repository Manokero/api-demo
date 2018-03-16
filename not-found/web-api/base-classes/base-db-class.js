const mysql = require('mysql')

export class BaseDbClass extends mysql {

    

    constructor() {
        super()
    }

    executeQuery(query) {

    }

    executeStoredProcedure(name, args) {

    }

}