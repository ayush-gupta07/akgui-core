module.exports = [
  {
    name: 'ES Bundle',
    path: 'dist/index.es.js',
    limit: '100 KB',
    gzip: true,
  },
  {
    name: 'CommonJS Bundle',
    path: 'dist/index.cjs.js', 
    limit: '100 KB',
    gzip: true,
  },
  {
    name: 'UMD Bundle',
    path: 'dist/index.umd.js',
    limit: '120 KB',
    gzip: true,
  },
  {
    name: 'CSS Bundle',
    path: 'dist/style.css',
    limit: '20 KB',
    gzip: true,
  },
]
