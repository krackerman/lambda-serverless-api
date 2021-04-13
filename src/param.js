const Str = require('./param/str');
const RegEx = require('./param/regex');
const Schema = require('./param/schema');
const Email = require('./param/email');
const UUID = require('./param/uuid');
const IsoTimestamp = require('./param/iso-timestamp');
const IsoDate = require('./param/iso-date');
const Bool = require('./param/bool');
const Enum = require('./param/enum');
const Timezone = require('./param/timezone');
const Int = require('./param/int');
const IntShort = require('./param/int-short');
const List = require('./param/list');
const FieldsParam = require('./param/fields-param');
const StrList = require('./param/str-list');
const NumberList = require('./param/number-list');
const IntList = require('./param/int-list');
const Json = require('./param/json');
const JsonList = require('./param/json-list');
const GeoPoint = require('./param/geo-point');
const GeoRect = require('./param/geo-rect');
const GeoShape = require('./param/geo-shape');
const GeoShapeList = require('./param/geo-shape-list');
const NumberParam = require('./param/number-param');

module.exports.Str = (...args) => new Str(...args);
module.exports.RegEx = (...args) => new RegEx(...args);
module.exports.Schema = (...args) => new Schema(...args);
module.exports.Email = (...args) => new Email(...args);
module.exports.UUID = (...args) => new UUID(...args);
module.exports.IsoTimestamp = (...args) => new IsoTimestamp(...args);
module.exports.IsoDate = (...args) => new IsoDate(...args);
module.exports.Bool = (...args) => new Bool(...args);
module.exports.Enum = (...args) => new Enum(...args);
module.exports.Timezone = (...args) => new Timezone(...args);
module.exports.Int = (...args) => new Int(...args);
module.exports.IntShort = (...args) => new IntShort(...args);
module.exports.List = (...args) => new List(...args);
module.exports.FieldsParam = (...args) => new FieldsParam(...args);
module.exports.StrList = (...args) => new StrList(...args);
module.exports.NumberList = (...args) => new NumberList(...args);
module.exports.IntList = (...args) => new IntList(...args);
module.exports.Json = (...args) => new Json(...args);
module.exports.JsonList = (...args) => new JsonList(...args);
module.exports.GeoPoint = (...args) => new GeoPoint(...args);
module.exports.GeoRect = (...args) => new GeoRect(...args);
module.exports.GeoShape = (...args) => new GeoShape(...args);
module.exports.GeoShapeList = (...args) => new GeoShapeList(...args);
module.exports.Number = (...args) => new NumberParam(...args);
