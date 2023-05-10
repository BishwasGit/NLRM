import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an API call to the Node.js server to fetch the data
    axios.get('http://localhost:8000/api/get-data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Table;
