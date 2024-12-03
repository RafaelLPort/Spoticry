import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Caminho para o seu componente LandingPage
import Home from './pages/Home';
import Login from './pages/Login';
import { SongDetailsProvider } from './contexts/SongDetailsContext'; // Importe o SongDetailsProvider
import { ToastContainer } from 'react-toastify'; // Importa o ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importa o estilo do Toastify

function App() {
  return (
    <SongDetailsProvider> {/* Envolva todo o Router com o SongDetailsProvider */}
      <Router>
        {/* Coloque o ToastContainer aqui */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </SongDetailsProvider>
  );
}

export default App;
