// import React, { useState } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Header from "./components/Header"
// import Footer from './components/Footer'
// import Homepage from './Pages/Homepage'
// import Aboutpage from './Pages/Aboutpage'
// // import About from './components/About'
// // import Aboutpage from './Pages/Aboutpage'
// // import Featuers from './components/Featuers'
// import Workpage from './Pages/Workpage'
// import Servicepage from './Pages/Servicepage'
// import Contactpage from './Pages/Contactpage'
// import Featuerpage from './Pages/Featuerpage'
// import LearnMore from './Pages/LearnMore'
// import GetStartPage from './Pages/GetStartPage'
// import Jansawviman from './components/Jansawviman'
// import Janarogycard from './components/Janarogycard'
// import Login from './components/Login'
// import Register from './components/Resigter'
// import ForgotPass from './components/Forgetpass'
// import Swvimanyojna from './Pages/Swvimanyojna'
// import Arogycard from './Pages/Arogycard'
// // import Getstart from './components/Getstart'

// export default function Main() {
//   //  const [showModal, setShowModal] = useState(false);
//   const [user, setUser] = useState(null);
//   return (
    
//     <BrowserRouter>
//     <Header user={user}/>
   
//         <Routes>
//     <Route path='/' element={<Homepage/>}/>
//     <Route path='about' element={<Aboutpage/>}/>
//      <Route path='/Featuers' element={<Featuerpage/>}/>
//       <Route path='/how-it-work' element={<Workpage/>}/>
//        <Route path='/services' element={<Servicepage/>}/>
//         <Route path='/contact' element={<Contactpage/>}/>

//        {/* learn abbout page routes   */}
//          <Route path='/learnmore' element={<LearnMore/>}/>



//          {/* login route   */}
//          {/* <Route path='/getstart' element={<GetStartPage/>}/> */}
//   {/* <Route path="/login" element={<Login />} />
//   <Route path="/register" element={<Register />} />
//   <Route path="/forgot-password" element={<ForgotPass />} /> */}

//          <Route path="/apply-swabhiman" element={<Swvimanyojna />} />
//         <Route path="/apply-arogya" element={<Arogycard />} />

//    </Routes>
//    <Footer/>
 
//     </BrowserRouter>
//   )
// // }
// import React, { useState } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Header from "./components/Header"
// import Footer from './components/Footer'
// import Homepage from './Pages/Homepage'
// import Aboutpage from './Pages/Aboutpage'
// import Workpage from './Pages/Workpage'
// import Servicepage from './Pages/Servicepage'
// import Contactpage from './Pages/Contactpage'
// import Featuerpage from './Pages/Featuerpage'
// import LearnMore from './Pages/LearnMore'
// import GetStartPage from './Pages/GetStartPage'
// import Jansawviman from './components/Jansawviman'
// import Janarogycard from './components/Janarogycard'
// import Login from './components/Login'
// import Register from './components/Resigter'
// import ForgotPass from './components/Forgetpass'
// import Swvimanyojna from './Pages/Swvimanyojna'
// import Arogycard from './Pages/Arogycard'

// export default function Main() {
//   const [user, setUser] = useState(null);

//   return (
//     <BrowserRouter>
//       <Header user={user} />

//       <Routes>
//         <Route path='/' element={<Homepage />} />
//         <Route path='about' element={<Aboutpage />} />
//         <Route path='/Featuers' element={<Featuerpage />} />
//         <Route path='/how-it-work' element={<Workpage />} />
//         <Route path='/services' element={<Servicepage />} />
//         <Route path='/contact' element={<Contactpage />} />

//         {/* Learn More Page */}
//         <Route path='/learnmore' element={<LearnMore />} />

//         {/* Auth Pages */}
//         <Route path='/login' element={<Login />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/forgot-password' element={<ForgotPass />} />

//         {/* Card Application Pages */}
//         <Route path='/apply-swabhiman' element={<Swvimanyojna />} />
//         <Route path='/apply-arogya' element={<Arogycard />} />
//       </Routes>

//       <Footer />
//     </BrowserRouter>
//   )
// // }
// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Header from "./components/Header"
// import Footer from './components/Footer'
// import Homepage from './Pages/Homepage'
// import Aboutpage from './Pages/Aboutpage'
// import Workpage from './Pages/Workpage'
// import Servicepage from './Pages/Servicepage'
// import Contactpage from './Pages/Contactpage'
// import Featuerpage from './Pages/Featuerpage'
// import LearnMore from './Pages/LearnMore'
// import GetStartPage from './Pages/GetStartPage'
// import Jansawviman from './components/Jansawviman'
// import Janarogycard from './components/Janarogycard'
// import Login from './components/Login'
// import Register from './components/Resigter'
// import ForgotPass from './components/Forgetpass'
// import Swvimanyojna from './Pages/Swvimanyojna'
// import Arogycard from './Pages/Arogycard'
// import { AuthProvider } from './components/AuthContext'

// export default function Main() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path='/' element={<Homepage />} />
//           <Route path='about' element={<Aboutpage />} />
//           <Route path='/Featuers' element={<Featuerpage />} />
//           <Route path='/how-it-work' element={<Workpage />} />
//           <Route path='/services' element={<Servicepage />} />
//           <Route path='/contact' element={<Contactpage />} />
//           <Route path='/learnmore' element={<LearnMore />} />

//           {/* Auth Pages */}
//           <Route path='/login' element={<Login />} />
//           <Route path='/register' element={<Register />} />
//           <Route path='/forgot-password' element={<ForgotPass />} />

//           {/* Card Pages */}
//           <Route path='/apply-swabhiman' element={<Swvimanyojna />} />
//           <Route path='/apply-arogya' element={<Arogycard />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </AuthProvider>
//   )
// }
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Header from "./components/Header";
import Footer from './components/Footer';
import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';
import Workpage from './Pages/Workpage';
import Servicepage from './Pages/Servicepage';
import Contactpage from './Pages/Contactpage';
import Featuerpage from './Pages/Featuerpage';
import LearnMore from './Pages/LearnMore';
import ForgotPass from './components/Forgetpass';
import Swvimanyojna from './Pages/Swvimanyojna';
import Arogycard from './Pages/Arogycard';
import { AuthProvider, useAuth } from './components/AuthContext';
import ModalForm from './components/ModalForm';
import AmbilancePage from './Pages/AmbilancePage';
import InsurancePage from './Pages/InsurancePage';
import TermsConditionsPage from './Pages/TermsConditionsPage';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';
import LeadershipPage from './Pages/LeadershipPage';
import CaseStudyPage from './Pages/CaseStudyPage';
import ProfilePage from './Pages/ProfilePage';
import Arogaycardpage from './Pages/Arogaycardpage';
import JanarogayKendrPage from './Pages/JanarogayKendrPage';
import KendraSopPage from './Pages/KendraSopPage';
import KendraformPage from './Pages/KendraformPage';
import MainPolicyPage from './Pages/MainPolicyPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ComingSoonPage from './Pages/ComingSoonPage';
import CareerPage from './Pages/CareerPage';
import FeedbackPage from './Pages/FeedbackPage';

// Import Employee Pages (you'll need to create these)
import EmployeeDashboard from './Pages/EmployeeDashboard';
import EmployeeProfile from './Pages/EmployeeProfile';
import ManageUsers from './Pages/ManageUsers';
// import ManageApplications from './Pages/Employee/ManageApplications';
// import Reports from './Pages/Employee/Reports';
// import Settings from './Pages/Employee/Settings';

import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import Empservices from './components/Empservices';
import Empjansewa from './components/Empjansewa';
import Empjanarogay from './components/Emparogaycard';
import Emparogaycard from './components/Emparogaycard';
import Empambulance from './components/Empambulance';
import Empinsurance from './components/Empinsurance';
import Empkendra from './components/Empkendra';
import Empidente from './components/Empidente';
import EmpApplication from './components/EmpApplication';
import EmployeeAttendance from './Pages/EmployeeAttendance';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Main() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('modalShown');
    if (!hasShown) {
      setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem('modalShown', 'true');
      }, 2000);
    }
  }, []);

  // User Protected Route
  function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if (!loading && (!user || user.role !== "USER")) {
        Swal.fire({
          icon: "warning",
          title: "Access Denied",
          text: "Please login with a user account to continue",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/", { replace: true });
        });
      }
    }, [loading, user, navigate]);

    if (loading) return <div>Loading...</div>;

    return user?.role === "USER" ? children : null;
  }

  // Employee Protected Route
  function EmployeeProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if (!loading && (!user || user.role !== "EMPLOYEE")) {
        Swal.fire({
          icon: "warning",
          title: "Access Denied",
          text: "Employee login required to access this page",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/", { replace: true });
        });
      }
    }, [loading, user, navigate]);

    if (loading) return <div>Loading...</div>;

    return user?.role === "EMPLOYEE" ? children : null;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <ModalForm isOpen={showModal} onClose={() => setShowModal(false)} />
        <Header />

        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/Featuers' element={<Featuerpage />} />
          <Route path='/how-it-work' element={<Workpage />} />
          <Route path='/services' element={<Servicepage />} />
          <Route path='/contact' element={<Contactpage />} />
          <Route path='/learnmore' element={<LearnMore />} />
          <Route path='/terms' element={<TermsConditionsPage />} />
          <Route path='/privacy' element={<PrivacyPolicyPage />} />
          <Route path='/leader' element={<LeadershipPage />} />
          <Route path='/case' element={<CaseStudyPage />} />
          <Route path='/allpolicy' element={<MainPolicyPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/forgot-password' element={<ForgotPass />} />
          <Route path='/comingsoon' element={<ComingSoonPage />} />
          <Route path='/feedback' element={<FeedbackPage />} />

          {/* User Protected Routes */}

          <Route path='/profile' element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path='/profilecard' element={<ProtectedRoute><Arogaycardpage /></ProtectedRoute>} />
          <Route path='/apply-swabhiman' element={<ProtectedRoute><Swvimanyojna /></ProtectedRoute>} />
          <Route path='/apply-arogya' element={<ProtectedRoute><Arogycard /></ProtectedRoute>} />
          <Route path='/apply-ambulance' element={<ProtectedRoute><AmbilancePage /></ProtectedRoute>} />
          <Route path='/apply-insurance' element={<ProtectedRoute><InsurancePage /></ProtectedRoute>} />
          <Route path='/apply-kendr' element={<ProtectedRoute><JanarogayKendrPage /></ProtectedRoute>} />
          <Route path='/kendr-sop' element={<ProtectedRoute><KendraSopPage /></ProtectedRoute>} />
          <Route path='/apply-kendrform' element={<ProtectedRoute><KendraformPage /></ProtectedRoute>} />
          <Route path='/career' element={<ProtectedRoute><CareerPage /></ProtectedRoute>} />
          <Route path='/feedback' element={<ProtectedRoute><FeedbackPage /></ProtectedRoute>} />

          {/* Employee Protected Routes */}
          
          <Route path='/employee-dashboard' element={<EmployeeProtectedRoute><EmployeeDashboard /></EmployeeProtectedRoute>} />
          <Route path='/employee-profile' element={<EmployeeProtectedRoute><EmployeeProfile /></EmployeeProtectedRoute>} />
          <Route path='/manage-users' element={<EmployeeProtectedRoute><ManageUsers /></EmployeeProtectedRoute>} />
           <Route path='/employee-services' element={<EmployeeProtectedRoute><Empservices /></EmployeeProtectedRoute>} />
          <Route path='/employee/apply-swabhiman' element={<EmployeeProtectedRoute><Empjansewa/></EmployeeProtectedRoute>} />
          <Route path='/employee/apply-arogya' element={<EmployeeProtectedRoute><Emparogaycard/></EmployeeProtectedRoute>} />
          <Route path='/employee/apply-ambulance' element={<EmployeeProtectedRoute><Empambulance/></EmployeeProtectedRoute>} />
          <Route path='/employee/apply-insurance' element={<EmployeeProtectedRoute><Empinsurance/></EmployeeProtectedRoute>} />
          <Route path='/employee/apply-kendra' element={<EmployeeProtectedRoute><Empkendra/></EmployeeProtectedRoute>} />
           <Route path='/employee-id' element={<EmployeeProtectedRoute><Empidente/></EmployeeProtectedRoute>} />
            <Route path='/manage-applications' element={<EmployeeProtectedRoute><EmpApplication/></EmployeeProtectedRoute>} />
             <Route path='/employee-att' element={<EmployeeProtectedRoute><EmployeeAttendance/></EmployeeProtectedRoute>} />



        
          {/* <Route path='/employee-settings' element={<EmployeeProtectedRoute><Settings /></EmployeeProtectedRoute>} /> */}
        </Routes>

        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}
