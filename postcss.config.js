const path = require('path');

module.exports = {
    plugins: [
        require('cssnano')({
            preset:'default',
        }),
    ],
};
// path.resolve(__dirname,'src/dist')