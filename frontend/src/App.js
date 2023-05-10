import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form';
import Table from './Table';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
