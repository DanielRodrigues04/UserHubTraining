import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { UserList } from './pages/UserList';
import { UserDetails } from './pages/UserDetails';

function App() {
  return (
    <ThemeProvider theme={{}}>
      <CssBaseline />
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:id" element={<UserDetails />} />
            <Route path="/" element={<Navigate to="/users" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;