const connection = require('./connection');

module.exports =   {

    getAll() {
        return connection('patient')
    },

    getOne(id) {
        return connection('patient').where('id', id).first();
    }
};
