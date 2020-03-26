const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/**
 * antes de todas as requisições, falamos pro express em converter json em algo que a aplicação entenda.
 */
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);