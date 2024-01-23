const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000
const api = require('./fetch/fetch')
// Define the CORS options
const corsOptions = {
  credentials: true,
  origin: ['http://localhost:5173', 'http://localhost:80'] // Whitelist the domains you want to allow
};

app.use(cors(corsOptions)); // Use the cors middleware with your options

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/movies', (req, res) => {
    api.get_movie_title(req.query.search)
    .then(data => {
      res.json(data)
    })
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
