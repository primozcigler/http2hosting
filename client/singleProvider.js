Template.singleProvider.helpers({
	votesState: function () {
		if (this.votes > 0) {
			return 'success';
		}
		else if (this.votes < 0) {
			return 'danger';
		}
		else {
			return 'info';
		}
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

		Session.setDefault(sesskey, 0);
		var sessval = Session.get(sesskey);

		Providers.update({_id: this._id}, {$set: {votes: this.votes + value}});

		if (_.contains([1, -1], sessval)) {
			Session.set(sesskey, 0);
		} else {
			Session.set(sesskey, value);
		}
	}
});