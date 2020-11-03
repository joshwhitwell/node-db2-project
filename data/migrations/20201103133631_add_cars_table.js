exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments()
        tbl.string('VIN', 17)
            .unique()
            .notNullable()
        tbl.string('Make', 128)
            .notNullable()
        tbl.string('Model', 128)
            .notNullable()
        tbl.integer('Mileage')
            .notNullable()
            .defaultTo(0)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars')
};
