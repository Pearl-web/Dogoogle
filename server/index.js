//server is imported into here and started when this file is run

const app = require('./app');
const port = 3000;

app.listen(port, () => console.log(`Server departing from localhost ${port}`))