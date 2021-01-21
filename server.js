const express = require('express');
const mongoose = require('mongoose');

//create express server on port 3001
const app = express();
const PORT = process.env.PORT || 3001;

//server middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//server uses routes
app.use(require('./routes'));

//connection to mongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

//start server
app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));