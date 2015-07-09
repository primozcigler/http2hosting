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

Template.providerRow.helpers({
  priceDollars: function () {
    return Array(this.price + 1).join('<i class="glyphicon glyphicon-usd"></i>');
  },

  signedVotes: function () {
    return this.votes > 0 ? '+' + this.votes : this.votes;
  },
});