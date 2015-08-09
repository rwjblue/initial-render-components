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

export default Ember.Controller.extend({
  actions: {
    generateItems: function() {
      const timerName = 'render: ' + Ember.VERSION;

      this.set('items', generateItems());

      const startTime = new Date();
      console.time(timerName);
      Ember.run.schedule('afterRender', () => {
        console.timeEnd(timerName)
        const endTime = new Date();

        this.set('renderTime', endTime - startTime);
      });
    }
  }
});
