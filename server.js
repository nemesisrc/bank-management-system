import 'dotenv/config';
//commonjs syntax for importing dotenv package to load environment variables from a .env file into process.env. This allows you to manage configuration settings and sensitive information without hardcoding them into your codebase.
import server from './src/app.js';

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
