import { mo, po } from 'gettext-parser'

module.exports = (source) => {
  return mo.compile(po.parse(source))
}

