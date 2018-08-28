const express = require('express');
const redis = require('redis');

const app = express();
const redisClient = redis.createClient();
redisClient.set('visits', 0);

app.get('/', (req, res) => {
  redisClient.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    redisClient.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
