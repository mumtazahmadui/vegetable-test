const merge = require('concat');

const files = [
    './dist/category/runtime.js',
    './dist/category/polyfills.js',
    './dist/category/scripts.js',
    './dist/category/main.js'
]

merge(files, './dist/category/category.js');
console.info('file generated');