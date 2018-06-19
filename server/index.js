const express = require('express');
const app = express();
const axios = require('axios');

// in a real app use something like vault or kms instead of storing config variables in package.json
// in a real app log info and errors somewhere secure and searchable

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.ALLOWED_CORS_URLS);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/search', async (req, res, next) => {
  try {

    if(req.query.search.length > 500 ||
      req.query.sort.length > 500) {

      const error = new Error('Input data passed was too large');

      console.error(error);
      next(error);
    }

    const response = await axios.get(`https://newsapi.org/v2/everything?q=${req.query.search}&sortBy=${req.query.sort}&language=en`, {
      headers: {
        'X-Api-Key': process.env.NEWS_API_KEY
      }
    });

    res.send(response.data);
  } catch (error) {
    console.error(error);

    next(error);
  }
});

app.listen(3001, () => console.log('Server proxy listening on port 3001.'));
