// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" component={Link} to="/">Home</Button> {/* Link to Home page */}
                <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/register">Register</Button>
                <Button color="inherit" component={Link} to="/create-project">Create Project</Button>
                <Button color="inherit" component={Link} to="/review-dashboard">Review Dashboard</Button>
                <Button color="inherit" component={Link} to="/admin">Admin Dashboard</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
