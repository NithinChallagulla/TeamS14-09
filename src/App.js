// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ProjectCreation from './pages/ProjectCreation';
import PeerReviewDashboard from './pages/PeerReviewDashboard';
import FeedbackForm from './pages/FeedbackForm';
import AdminDashboard from './pages/AdminDashboard';
import Home from './components/Home'; // Importing the new Home page

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} /> {/* Home route */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create-project" element={<ProjectCreation />} />
                <Route path="/review-dashboard" element={<PeerReviewDashboard />} />
                <Route path="/review/:projectId" element={<FeedbackForm />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
