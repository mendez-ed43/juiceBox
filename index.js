
require('dotenv').config();

const PORT = 3000;
const express = require('express');
const server = express();

const bodyParser = require('body-parser');
server.use(bodyParser.json());

const apiRouter = require('./api');
server.use('/api', apiRouter);



const morgan = require('morgan');
server.use(morgan('dev'));


const { client } = require('./db');
client.connect();

server.listen(PORT, () => {
    console.log('The server is up on port', PORT)
    
});

server.use((req, res, next) => {
    console.log("<____Body Logger START____>");
    console.log(req.body);
    console.log("<_____ Body Logger END_____>");

    next();
});

// server.use(async (req, res, next) => {
//     const prefix = 'Bearer '
//     const auth = req.headers['Authorization'];

//     if (!auth) {
//         next();
//     }
//     if (auth.startsWith(prefix)) {
//         const token = auth.slice(prefix.length);
//         try {
//             const { id } = jwt.verify(data, 'secret message');

//             const user = await getUserById(id);

//             req.user = user;
//             next();
//         } catch (error) {
//             throw error;
//         }
//     }
// });

