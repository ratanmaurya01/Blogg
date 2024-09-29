const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());
const port = process.env.PORT || 5000;


const apiData = require('./data.json');

app.get("/", (req, res) => {

  res.send(`Server is live  ${port}`);

})

app.get("/service", (req, res) => {
  res.json(apiData);
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

