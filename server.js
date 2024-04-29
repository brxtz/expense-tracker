const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('CHANGE_MONGO_URL', { useNewUrlParser: true, useUnifiedTopology: true });

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => console.log('Server listening on port ${PORT}'))
