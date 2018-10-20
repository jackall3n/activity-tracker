const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(
    'mongodb://mongo:27017/activity-tracker-node',
    { 
        useNewUrlParser: true 
    }
)
.then(() => console.log('CONNECTED TO DB'))
.catch(error => console.log(error));

const Item = require('./models/item');

app.get('/', (request, response) =>{
    Item.find()
        .then(items => response.render('index', { items }))
        .catch(error => response.status(404).json({ message: 'No items found '}));
})

app.get('/delete', (request, response) =>{
    const id = request.params.id;

    Item.findOneAndDelete(id).then(() => response.redirect('/'))
})

app.post('/item/add', (request, response) => {
    const newItem = new Item({
        name: request.body.name
    })

    newItem.save().then(item => response.redirect('/'))
})

const port = 3000;

app.listen(port, () => console.log('server runnnig'))