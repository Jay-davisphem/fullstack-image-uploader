import { config } from 'dotenv';
import express from 'express';

import Connection from './lib/connectionSetup.js';

config();

const app = express();

const connection = new Connection(app);
connection.connect();
