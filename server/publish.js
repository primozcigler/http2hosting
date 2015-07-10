Meteor.publish('providers', function () {
	return Providers.find();
});