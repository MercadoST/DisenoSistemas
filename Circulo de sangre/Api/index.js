const app = require('./app');

async function main() {
    await app.listen(app.get('port'));
    console.log('Server port: ', app.get('port'))
    let date = new Date();
    console.log(date.toLocaleString());
} 

main();