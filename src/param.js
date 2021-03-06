const Str = require('./params/str');
const RegEx = require('./params/regex');
const Email = require('./params/email');
const UUID = require('./params/uuid');
const IsoDate = require('./params/iso-date');
const Bool = require('./params/bool');
const Int = require('./params/int');
const List = require('./params/list');
const FieldsParam = require('./params/fields-param');
const StrList = require('./params/str-list');
const NumberList = require('./params/number-list');
const Json = require('./params/json');
const GeoPoint = require('./params/geo-point');
const GeoRect = require('./params/geo-rect');
const GeoShape = require('./params/geo-shape');
const NumberParam = require('./params/number-param');

module.exports.Str = (...args) => new Str(...args);
module.exports.RegEx = (...args) => new RegEx(...args);
module.exports.Email = (...args) => new Email(...args);
module.exports.UUID = (...args) => new UUID(...args);
module.exports.IsoDate = (...args) => new IsoDate(...args);
module.exports.Bool = (...args) => new Bool(...args);
module.exports.Int = (...args) => new Int(...args);
module.exports.List = (...args) => new List(...args);
module.exports.FieldsParam = (...args) => new FieldsParam(...args);
module.exports.StrList = (...args) => new StrList(...args);
module.exports.NumberList = (...args) => new NumberList(...args);
module.exports.Json = (...args) => new Json(...args);
module.exports.GeoPoint = (...args) => new GeoPoint(...args);
module.exports.GeoRect = (...args) => new GeoRect(...args);
module.exports.GeoShape = (...args) => new GeoShape(...args);
module.exports.Number = (...args) => new NumberParam(...args);
