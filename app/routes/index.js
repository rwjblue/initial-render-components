import Ember from 'ember';

var range = function(n) {
  var res = [];
  for (var i = 0; i < n; i++) {
    res.push(i);
  }
  return res;
};

export default Ember.Route.extend({

  model() {
    return range(50).map(() =>
      range(7).map(() =>
        range(2)
      )
    );
  }

});
