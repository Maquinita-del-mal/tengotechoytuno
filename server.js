import http from 'http';
import api from './api/api.js';
import database from './api/config/database.js';

//TODO: mover esta constante al archivo de config que venga de .env
const port = 3000;

const server = http.createServer(api);

//TODO: capturar los eventos on error y on listening del server

database();
server.listen(port);
