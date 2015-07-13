Meteor.methods({
  insertProvider: function (name, price, notes, url) {
    return Providers.insert({
      name:             name,
      added:            new Date(),
      votes:            0,
      price:            parseFloat(price),
      h2hscore:         0,
      overview:         notes,
      url:              url,
    });
  },

  updateName: function (id, name) {
    return Providers.update(id, {
      $set: {
        name: name
      }
    });
  },

  updatePrice: function (id, price) {
    return Providers.update(id, {
      $set: {
        price: parseFloat(price)
      }
    });
  },

  updateOverview: function (id, overview) {
    return Providers.update(id, {
      $set: {
        overview: overview
      }
    });
  },

  changeVotes: function (id, value) {
    return Providers.update(id, {
      $inc: {
        votes: value
      }
    });
  },
});