const assert = require('assert');
const Str = require('./str');

class RegEx extends Str {
  constructor(name, position, opts) {
    super(name, position, opts);
    assert(opts.regex !== undefined, 'Missing Regex Option');
    this.regex = opts.regex;
  }

  validate(value) {
    let valid = super.validate(value);
    if (valid && !value.match(this.regex)) {
      valid = false;
    }
    return valid;
  }
}
module.exports = RegEx;
