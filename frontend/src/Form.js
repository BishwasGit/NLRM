import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Form.css'
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import myImage from './myimg.png'

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { name, email, message };
    axios.post('http://localhost:8000/api/submit-form', formData)
      .then(response => {
        console.log(response.data); // log the response from the server
      })
      .catch(error => {
        console.error(error); // log any errors that occur
      });
  };

  return (
    <div className='dataform'>
      <Container>
      <Grid container spacing={2}>
        <Grid xs={4}>
            <form onSubmit={handleSubmit}>
              <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)} margin="normal" color="primary" /><br />
              <TextField id="outlined-basic" label="Email" variant="outlined" type="text" value={email} onChange={(event) => setEmail(event.target.value)} margin="normal" color="primary" /><br />
              <TextField id="outlined-basic" label="Message" variant="outlined" value={message} onChange={(event) => setMessage(event.target.value)} margin="normal" color="primary" /><br />
              <Button variant="contained" type="submit" color="primary">Submit</Button>
            </form>
        </Grid>
        <Grid xs={8}>
        <img src={myImage} alt="My Image" />
        </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Form;
