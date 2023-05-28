import React from 'react';
import { BrowserRouter as Router, Route,  Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ChatPage from './pages/ChatPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/chat" element={<ChatPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
// 