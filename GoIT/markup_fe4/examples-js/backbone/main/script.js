var logger = {
    messages: [],
    addReport: function(message) {
        this.messages.push(message);
    },
    showReports: function() {
        console.log(this.messages);
    }
}
var Person = Backbone.Model.extend({
    walkTo: function(location) {
        this.set({
            location: location
        })
    },

    reportLocation: function() {
      var firstName = this.get('firstName');
        logger.addReport(this.get('name') + ' ' + this.get('lastName') + ' is at ' + this.location);
    }
});

var x = new Person({
    firstName: 'Name',
    lastName: 'Surname',
    location: 'home'
});

x.reportLocation();
x.walkTo('work');

x.reportLocation();

logger.showReports();
