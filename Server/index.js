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
app.use('/user', require('./routes/controls/login'));
app.use('/orders', require('./routes/controls/orders'));

//  ----- Admin Middleware -----
app.use('/admin', require('./admin/routes/controls/admin_navigator'));

const PORT = process.env.PORT || 1000;

mongoose.connect('mongodb://localhost/epicure', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(result => {
        console.log('DB Connected')
        app.listen(PORT, () => console.log(`App running on port ${PORT}`))
    })
    .catch(err => console.log(err));
