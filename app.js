import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './src/components/login';
import './styles/style.css';
import CrearUsuario from './src/components/CrearUsuario';
import RegistroAlumno from './src/components/RegistroAlumno';
import RegistroMaestro from './src/components/RegistroMaestro';
import DashboardMaestro from './src/components/DashboardMaestro';
import DashboardAlumno from './src/components/DashboardAlumno';
import NuevaAsesoria from './src/components/NuevaAsesoria';
import SolicitarAsesoria from './src/components/SolicitarAsesoria';
import VerAsesoria from './src/components/VerAsesoria';
import VerAsesoriaTotales from './src/components/VerAsesoriaTotales';
import EditarAsesoria from './src/components/EditarAsesoria';
import PagoAsesoria from './src/components/PagoAsesoria';
import VerDetalleAsesoria from './src/components/VerDetalleAsesoria';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/crear_usuario" element={<CrearUsuario />} />
        <Route path="/registro_alumno" element={<RegistroAlumno />} />
        <Route path="/registro_maestro" element={<RegistroMaestro />} />
        <Route path="/dashboard_maestro" element={<DashboardMaestro />} />
        <Route path="/dashboard_alumno" element={<DashboardAlumno />} />
        <Route path="/nueva_asesoria" element={<NuevaAsesoria />} />
        <Route path="/solicitar_asesoria" element={<SolicitarAsesoria />} />
        <Route path="/ver_asesoria/:id" element={<VerAsesoria />} />
        <Route path="/ver_asesorias_totales" element={<VerAsesoriaTotales />} />
        <Route path="/ver_detalle_asesoria/:id" element={<VerDetalleAsesoria />} />
        <Route path="/ver_detalle_asesoria_maestro/:id" element={<VerDetalleAsesoria />} />
        <Route path="/editar_asesoria/:id" element={<EditarAsesoria />} />
        <Route path="/pago_asesoria/:id" element={<PagoAsesoria />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;