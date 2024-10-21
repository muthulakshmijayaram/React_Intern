import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateUserPage from './pages/CreateUserPage';
import EditUserPage from './pages/EditUserPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/users/create" element={<CreateUserPage />} />
        <Route path="/users/edit/:id" element={<EditUserPage />} />
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
