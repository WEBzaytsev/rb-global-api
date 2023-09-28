import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../../.env') });


const config = {
   env: process.env.NODE_ENV,
   host_db: process.env.HOST_DB,
   database_db: process.env.NAME_DB,
   user_db: process.env.USER_DB,
   password_db: process.env.PASS_DB,
   port: process.env.PORT
};

export default config;