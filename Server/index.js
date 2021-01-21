const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Welcome Home')
});
//  ---- Middlewares ----
app.use('/restaurants', require('./routes/controls/restaurants'));
app.use('/dishes', require('./routes/controls/dishes'));
app.use('/chefs', require('./routes/controls/chefs'));

//  ----- Admin Middlewares -----
app.use('/add-admin', require('./admin/routes/add_admin'));
app.use('/login', require('./admin/routes/login'));

const PORT = process.env.PORT || 1000;

mongoose.connect('mongodb://localhost/epicure', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(result => {
        console.log('DB Connected')
        app.listen(PORT, () => console.log(`App running on port ${PORT}`))
    })
    .catch(err => console.log(err));


    // why need to import the other model
    // exec()?



    // admin page 
    // edit /delete / update /gate all collections from db
    // simple client side 