Router.configure({
  layoutTemplate: 'SiteLayout'
});

// home
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('providersTable');
  }
});

// single provider
Router.route('/provider/:_id', {
  name: 'provider',
  action: function () {
    this.render('singleProvider', {
      data: function () {
        return {
          provider: Providers.findOne({_id: this.params._id})
        };
      }
    });
  },
});