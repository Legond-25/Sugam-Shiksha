import './css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from './components/Home/Home';
import Signup from './components/Signup-Login/Signup';
import Login from './components/Signup-Login/Login';
import StudentDashboard from './components/Student Dashboard/StudentDashboard';
import UniversityDashboard from './components/University Dashboard/UniversityDashboard';
import LoginType from './components/Signup-Login/LoginType';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />}></Route> */}
        <Route path="/login-select" element={<LoginType />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/university-dashboard" element={<UniversityDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
