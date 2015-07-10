Template.registerHelper('signedNum', function (num) {
  return num > 0 ? '+' + num : num;
});


Template.registerHelper('priceRange', function (price) {
  var max = Providers.findOne({}, {sort: {price: -1}, fields: {price: 1}}).price,
    min = Providers.findOne({}, {sort: {price: 1}, fields: {price: 1}}).price,
    nprice = 3;

  // normalized price
  if (0 !== (max - min)) {
    nprice = ((price - min) / (max - min)) * 4 + 1;
    nprice = Math.round(nprice);
  }

  return Array(nprice + 1).join('<i class="glyphicon glyphicon-usd"></i>');
});


Template.registerHelper('h2hs', function (votes, price) {
  return Math.round( 0.6*votes - 0.4*price );
});


Template.registerHelper('colorClass', function (num) {
  if (num > 0) {
    return 'success';
  }
  else if (num < 0) {
    return 'danger';
  }
  else {
    return 'info';
  }
});