const path = require('path');
//const __webpack_public_path__ = '/'
const DIST = path.resolve(__dirname, '../static');
module.exports = (env) => {
  console.log(`env=${JSON.stringify(env, null, 2)}`);
  const isdev = env.dev;
  let ret = {
    mode: isdev ? 'development' : 'production',
    entry: ['./test-in-js'],
    output: {
      filename: 'index.js',
      path: DIST,
      publicPath: '/'
    },
  };
  if (isdev) {
    ret = {
      ...ret,
      watch: true,
      devServer: {
        contentBase: DIST,
        watchContentBase: true,
        // proxy: {
        //   '/api': 'http://localhost:3080',
        // },
      },
      devtool: 'inline-source-map',
    };
  }
  console.log('config='+JSON.stringify(ret,null,2))
  return ret
};
