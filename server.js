// we run the server using server.js file

require('dotenv').config();
const server = require('./src/app.js');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


