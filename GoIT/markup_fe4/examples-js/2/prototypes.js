number = function() {};
number.prototype.formatCurrency = function () {

  var dollars = this.setProperty;

  if (dollars > 0) {

      remainder = this.setProperty % Math.floor(this.setProperty)*100;

      if (remainder === 0) {
        dollars = Math.floor(this.setProperty) + ('.' + Math.round(remainder) +'0');
      } else if (remainder > 0 || remainder < 100) {
        dollars = Math.floor(this.setProperty) + ('.' + Math.round(remainder));
      }

      dollars = ('$' + dollars);


  } else if (dollars < 0) {

    remainder = this.setProperty % Math.ceil(this.setProperty)*(-100);

    if (remainder === 0) {
      dollars = Math.ceil(this.setProperty) - ('.' + Math.round(remainder) + '0');
    } else if (remainder > 0 || remainder < 100) {
      dollars = Math.ceil(this.setProperty) - ('.' + Math.round(remainder));
    }

     dollars = ('-' + ('$' + (dollars * -1)));

  } else {
  	dollars = '0.00$';
  }

  return dollars;

};

money = new number();
money.setProperty = 0;
money.formatCurrency();
