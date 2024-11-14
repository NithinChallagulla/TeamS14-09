// src/pages/ProjectCreation.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Alert, Box } from '@mui/material';
import axios from '../services/api';

function ProjectCreation() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/api/projects', { title, description });
            setMessage("Project created successfully!");
            setTitle('');
            setDescription('');
        } catch (error) {
            setMessage("Error creating project!");
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>Create a New Project</Typography>
            {message && <Alert severity="success">{message}</Alert>}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <TextField
                    label="Project Title"
                    variant="outlined"
                    fullWidth
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Project Description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>Create Project</Button>
            </Box>
        </Container>
    );
}

export default ProjectCreation;
