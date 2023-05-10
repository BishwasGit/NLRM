const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', async (req, res) => {
    try {
      const { name, email, message } = req.body;
  
      // Send the form data to a Laravel backend using axios
      const response = axios.post('http://localhost:8000/api/submit-form', formData)
  
      // If the request was successful, send a success response to the client
      res.status(200).send('Form submitted successfully!');
    } catch (error) {
      console.error(error);
      // If there was an error, send an error response to the client
      res.status(500).send('An error occurred while submitting the form.');
    }
  });

  app.get('/get-data', async (req, res) => {
    try {
      // Make an API call to the Laravel backend to fetch the data
      const response = await axios.get('http://localhost:8000/api/get-data');
  
      // If the request was successful, return the data to the client
      res.status(200).json(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      // If there was an error, send an error response to the client
      res.status(500).send('An error occurred while fetching the data.');
    }
  });
  

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
