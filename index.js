const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/', express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));