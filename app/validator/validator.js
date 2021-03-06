const {LinValidator, Rule} = require('../core/lin-validator');

class PositiveIntValidator extends LinValidator {
  constructor() {
    super();
    this.id = [
      new Rule('isInt', '需要传入正整数', {min: 1})
    ]
  }
}

module.exports = {
  PositiveIntValidator
}
