import { mo, po } from 'gettext-parser'

module.exports = function (source) {
  this.cacheable()
  return mo.compile(po.parse(source))
}

