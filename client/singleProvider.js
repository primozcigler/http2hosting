Template.singleProvider.helpers({
	formattedDate: function (dateObj) {
		return moment(dateObj).format('MMMM Do YYYY');
	},

	ISODate: function (dateObj) {
		return moment(dateObj).toISOString();
	},
});

Template.voteArrows.helpers({
	upState: function () {
		return Session.equals('voted_for_' + this._id, 1) ? 'disabled' : '';
	},
	downState: function () {
		return Session.equals('voted_for_' + this._id, -1) ? 'disabled' : '';
	},
	voted: function () {
		if (_.contains([1, -1], Session.get('voted_for_' + this._id))) {
			return true;
		}
	},
	votedText: function () {
		return Session.equals('voted_for_' + this._id, 1) ? 'up' : 'down';
	}
});

Template.voteArrows.events({
	'click .js-vote': function (ev) {
		ev.preventDefault();

		var sesskey = 'voted_for_' + this._id,
			$currentTarget = $(ev.currentTarget),
			value = $currentTarget.data('votedir') === 'up' ? 1 : -1;

		Session.setDefaultPersistent(sesskey, 0);
		var sessval = Session.get(sesskey);

		Providers.update({_id: this._id}, {$set: {votes: this.votes + value}});

		if (_.contains([1, -1], sessval)) {
			Session.setPersistent(sesskey, 0);
		} else {
			Session.setPersistent(sesskey, value);
		}
	}
});

Template.voteArrows.onRendered(function () {
	this.$('button').tooltip();
});