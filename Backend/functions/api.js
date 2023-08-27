import express, { Router } from 'express';
import { call } from 'function-bind';
import serverless from 'serverless-http';
import Server from '../sever.js';
const api = express();
const router = express.Router();

router.get('/hello', (req, res) =>{
    console.log("geting data")
    let dbServer= new Server()
    dbServer.callUser(res)
}
 );

api.use('/.netlify/functions/api', router);

module.exports.handler = serverless(api);