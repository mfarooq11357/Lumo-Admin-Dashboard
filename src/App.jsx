
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Dashboard from './dashboard'
import ManageUsers from './manage-users.jsx'
import ChargerManagement from './ChargerManagement.jsx'
import SessionMonitoring from './SessionMonitoring.jsx'
import EarningsTracking from './EarningsTracking.jsx'
import Messages from './messages.jsx'
import LoginPage from './LoginPage.jsx'

const App = () => {
    return (
        <Router>

                <Routes>
                <Route path="/" element={<LoginPage />} />
                </Routes>

            <div className='h-screen grid grid-cols-[243px_1fr]'>
                <Navbar />
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/manage-user" element={<ManageUsers />} />
                    <Route path="/charger-management" element={<ChargerManagement />} />
                    <Route path="/session-monitoring" element={<SessionMonitoring />} />
                    <Route path="/earnings-tracking" element={<EarningsTracking />} />
                    <Route path="/Chat" element={<Messages />} />
                </Routes>
            </div>
        </Router>



    );
};

export default App;
