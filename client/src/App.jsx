import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

export default function App() {
  
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
