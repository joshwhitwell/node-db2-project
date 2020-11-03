exports.seed = function (knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        { VIN: '1HGBH41JXMN109186', Make: 'Honda', Model: 'Accord', Mileage: 5000 },
        { VIN: '1HGBH41JXMN109187', Make: 'Honda', Model: 'Civic', Mileage: 4000 },
        { VIN: '1HGBH41JXMN109188', Make: 'Toyota', Model: 'Camry', Mileage: 1000 },
        { VIN: '1HGBH41JXMN109189', Make: 'Toyota', Model: 'Prius', Mileage: 0 }
      ]);
    });
};
