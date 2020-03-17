const express = require('express');
const app = express();

app.get('/api/movies', (req, res) => {
    console.log('hello from server');
    res.json({name: 'caleb justice', age: 17, occupation: 'web develper / cook'});
})

app.listen(5000, () => {
    console.log('listening on port 5000');
})