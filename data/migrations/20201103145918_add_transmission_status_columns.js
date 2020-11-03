exports.up = function (knex) {
    return knex.schema.table('cars', tbl => {
        tbl.string('Transmission', 128)
        tbl.string('Status', 128)
    })
};

exports.down = function (knex) {
    return knex.schema.table('cars', tbl => {
        tbl.dropColumn('Transmission')
        tbl.dropColumn('Status')
    })
};
