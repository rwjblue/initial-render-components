import Ember from 'ember';

var range = function(n) {
  var res = [];
  for (var i = 0; i < n; i++) {
    res.push(i);
  }
  return res;
};

var generateItems = function() {
  return range(100).map(() =>
    range(7).map(() =>
      range(2)
    )
  );
};

export default Ember.Route.extend({

  model() {
    return generateItems();
  }

});
