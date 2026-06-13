import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

function App() {
  return (
    <Router>
      <div className="font-sans">        
        <Routes>
          {/* El router decide qué archivo cargar dependiendo de la URL en el navegador */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>        
      </div>
    </Router>
  );
}

export default App;
