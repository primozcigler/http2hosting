Providers = new Mongo.Collection( 'providers' );

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('tableSortObj', {name: 1});

  Template.providersTable.helpers({
    providers: function () {
      return Providers.find({}, {sort: Session.get('tableSortObj')});
    }
  });

  Template.providersTable.events({
    'click .js-sort-col': function (ev) {
      ev.preventDefault();

      var $target = $(ev.currentTarget);

      $target.parent()
        .addClass('sorted-by-col')
        .siblings().removeClass('sorted-by-col');

      var ordering = {};
      ordering[$target.data('col')] = -1;

      if (_.isEqual( ordering, Session.get( 'tableSortObj' ) )) {
        ordering[$target.data('col')] = 1;
      }

      Session.set('tableSortObj', ordering);
    },
  });

  Template.provider.helpers({
    priceDollars: function () {
      return Array(this.price + 1).join('<i class="glyphicon glyphicon-usd"></i>');
    },

    signedVotes: function () {
      return this.votes > 0 ? '+' + this.votes : this.votes;
    },
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Providers.find().count() === 0) {
      _.each([{
        name:     'Google Compute Engine',
        votes:    17,
        price:    4,
        h2hscore: 54,
      },
      {
        name:     'Digital Ocean',
        votes:    13,
        price:    3,
        h2hscore: 23,
      },
      {
        name:     'Amazon AWS',
        votes:    -978,
        price:    5,
        h2hscore: -54,
      }], function ( provider ) {
        Providers.insert( provider );
      } );
    }
  });
}
