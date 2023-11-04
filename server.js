const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Connect to your MongoDB database (replace 'your_database_uri' with your actual database URI)
mongoose.connect('mongodb://your_database_uri', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for your data
const dataSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const DataModel = mongoose.model('Data', dataSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve static files

app.post('/submit', (req, res) => {
    const newData = new DataModel({
        name: req.body.name,
        email: req.body.email,
    });

    newData.save((err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error occurred.');
        } else {
            res.send('Data saved successfully!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
