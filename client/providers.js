// counter starts at 0
Session.setDefaultPersistent('tableSortObj', {name: 1});

Template.providersTable.helpers({
  providers: function () {
    return Providers.find({}, {sort: Session.get('tableSortObj')});
  },

  activeCol: function (colName) {
    if (_.contains(_.keys(Session.get('tableSortObj')), colName)) {
      return 'sorted-by-col';
    }
  }
});

Template.providersTable.events({
  'click .js-sort-col': function (ev) {
    ev.preventDefault();

    var $target = $(ev.currentTarget);

    var ordering = {};
    ordering[$target.data('col')] = -1; // default ordering for all fields is descending

    if (_.isEqual( ordering, Session.get( 'tableSortObj' ) )) {
      ordering[$target.data('col')] = 1;
    }

    Session.setPersistent('tableSortObj', ordering);
  },
});

// wait that the providers are available
Template.providersTable.onCreated(function () {
  this.subscribe('providers');
});