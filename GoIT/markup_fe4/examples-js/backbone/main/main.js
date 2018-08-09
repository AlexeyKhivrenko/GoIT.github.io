function slice(arr, begin, end) {
    var newArr = [];
    if(isNaN(begin) || begin == '') {
        begin = 0;
    }
    if (begin < 0) {
        begin = arr.length + begin;
        if (begin < 0) {
            begin = 0;
        }
    }
    if(isNaN(end) || end == '' || end > arr.length) {
        end = arr.length;
    }
    if (end < 0) {
        end = arr.length + end;
    }

    for (var i = begin; i < end; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 2));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 4));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, ''));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1, -5));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, -2));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -4, -2));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -4, 2));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 2));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], '', 2));

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
