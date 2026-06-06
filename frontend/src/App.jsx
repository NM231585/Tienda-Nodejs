import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        
        {/* Aquí pronto pondremos un <Navbar /> que se repetirá en todas las pantallas */}
        
        <Routes>
          {/* El router decide qué archivo cargar dependiendo de la URL en el navegador */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
      </div>
      </Layout>
    </Router>
  );
}

export default App;
