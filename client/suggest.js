Template.form.events({
  'submit .form-suggest': function (ev) {
    ev.preventDefault();

    var $form = $(ev.currentTarget);

    Meteor.call(
      'insertProvider',
      $form.find('[name="name"]').val(),
      $form.find('[name="price"]').val(),
      $form.find('[name="notes"]').val(),
      $form.find('[name="url"]').val()
    );
  }
});