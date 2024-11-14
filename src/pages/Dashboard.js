// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from '../services/api';

function Dashboard() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('/api/projects');
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects", error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            {projects.map(project => (
                <div key={project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Dashboard;
