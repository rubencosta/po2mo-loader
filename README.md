# po2mo-loader
webpack loader to transform gettext PO files to MO files

#### usage
```js
{test: /\.po$/, loader: 'file-loader?name=[name].mo!po2mo-loader'},
```
