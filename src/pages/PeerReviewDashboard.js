// src/pages/PeerReviewDashboard.js
import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, List, ListItem, ListItemText} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from '../services/api';

function PeerReviewDashboard() {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('/api/review-projects');
            setProjects(response.data);
        };
        fetchProjects();
    }, []);

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>Assigned Peer Reviews</Typography>
            <List>
                {projects.map((project) => (
                    <ListItem key={project.id} sx={{ mb: 2, bgcolor: "#f0f0f0", borderRadius: 1 }}>
                        <ListItemText primary={project.title} secondary={project.description} />
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => navigate(`/review/${project.id}`)}
                        >
                            Review
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default PeerReviewDashboard;
