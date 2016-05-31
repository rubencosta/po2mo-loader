import { mo, po } from 'gettext-parser'

module.exports = (source) => {
  this.cacheable()
  return mo.compile(po.parse(source))
}

