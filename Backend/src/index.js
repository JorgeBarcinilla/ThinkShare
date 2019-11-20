require('dotenv').config();
require('./database');
require('./passport/localAuth');
const app = require('./app');

async function main() {
    
    // Start server
    await app.listen(app.get('port'));
    console.log('Server on http://localhost:'+app.get('port'));
    
}

main();
