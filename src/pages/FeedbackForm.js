// src/pages/FeedbackForm.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Slider, Container } from '@mui/material';
import axios from '../services/api';
import { useParams } from 'react-router-dom';

function FeedbackForm() {
    const { projectId } = useParams();
    const [comments, setComments] = useState('');
    const [rating, setRating] = useState(5);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`/api/review/${projectId}`, { comments, rating });
        alert("Feedback submitted successfully!");
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>Provide Feedback</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <Typography gutterBottom>Rating</Typography>
                <Slider
                    value={rating}
                    onChange={(e, value) => setRating(value)}
                    min={1}
                    max={10}
                    step={1}
                    valueLabelDisplay="auto"
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Comments"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    required
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>Submit Feedback</Button>
            </Box>
        </Container>
    );
}

export default FeedbackForm;
