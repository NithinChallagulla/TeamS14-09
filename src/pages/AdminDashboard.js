// src/pages/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, Button, ListItemText, Box } from '@mui/material';
import axios from '../services/api';

function AdminDashboard() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('/api/projects');
            setProjects(response.data);
        };
        fetchProjects();
    }, []);

    const handleAssignReview = async (projectId) => {
        await axios.post(`/api/assign-review/${projectId}`);
        alert("Review assigned!");
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
            <List>
                {projects.map((project) => (
                    <ListItem key={project.id} sx={{ mb: 2, bgcolor: "#e0e0e0", borderRadius: 1 }}>
                        <ListItemText primary={project.title} secondary={project.description} />
                        <Box>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleAssignReview(project.id)}
                            >
                                Assign Review
                            </Button>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default AdminDashboard;
