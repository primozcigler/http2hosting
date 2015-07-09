Meteor.startup(function () {
  if (Providers.find().count() === 0) {
    _.each([{
      name:             'Google Compute Engine',
      added:            new Date(),
      votes:            17,
      price:            4,
      h2hscore:         54,
      providingh2since: new Date(),
      overview:         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit perferendis dicta obcaecati, deleniti suscipit, voluptas ducimus quasi eaque ipsum laboriosam, et aspernatur animi itaque facere voluptatibus aut aperiam. Rem, magnam?',
      url:              'https://www.digitalocean.com/',
    },
    {
      name:             'Digital Ocean',
      added:            new Date(),
      votes:            13,
      price:            3,
      h2hscore:         23,
      providingh2since: new Date(),
      overview:         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit perferendis dicta obcaecati, deleniti suscipit, voluptas ducimus quasi eaque ipsum laboriosam, et aspernatur animi itaque facere voluptatibus aut aperiam. Rem, magnam?',
      url:              'https://www.digitalocean.com/',
    },
    {
      name:             'Amazon AWS',
      added:            new Date(),
      votes:            -978,
      price:            5,
      h2hscore:         -54,
      providingh2since: new Date(),
      overview:         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit perferendis dicta obcaecati, deleniti suscipit, voluptas ducimus quasi eaque ipsum laboriosam, et aspernatur animi itaque facere voluptatibus aut aperiam. Rem, magnam?',
      url:              'https://www.digitalocean.com/',
    }], function ( provider ) {
      Providers.insert( provider );
    } );
  }
});