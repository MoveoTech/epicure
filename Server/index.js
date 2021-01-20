const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(cors())
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Welcome Home')
});

app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 1000;


mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex : true})
    .then(result => {
        console.log('DB Connected')
        app.listen(PORT, () => console.log(`App running on port ${PORT}`))
    })
    .catch(err => console.log(err));

