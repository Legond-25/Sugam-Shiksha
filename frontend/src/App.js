import './css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from './components/Home/Home';
import Signup from './components/Signup-Login/Signup';
import Login from './components/Signup-Login/Login';
import StudentDashboard from './components/Dashboards/Student Dashboard/StudentDashboard';
import UniversityDashboard from './components/Dashboards/University Dashboard/UniversityDashboard';
import AlumniDashboard from './components/Dashboards/AlumniDashboard/AlumniDashboard';
import IndustryDashboard from './components/Dashboards/IndustryDashboard/IndustryDashboard';
import InstituteDashboard from './components/Dashboards/InstituteDashboard/InstituteDashboard';
import LoginType from './components/Signup-Login/LoginType';
import { UserContextProvider } from './store/user-context';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />}></Route> */}
        <Route path="/login-select" element={<LoginType />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route
          path="/university-dashboard"
          element={
            <UserContextProvider>
              <UniversityDashboard />
            </UserContextProvider>
          }
        />
        <Route path="/alumni-dashboard" element={<AlumniDashboard />} />
        <Route path="/industry-dashboard" element={<IndustryDashboard />} />
        <Route path="/institute-dashboard" element={<InstituteDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
