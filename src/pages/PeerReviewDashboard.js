import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PeerReviewDashboard = () => {
  const [assignedProjects, setAssignedProjects] = useState([]);
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  // Fetch assigned projects and submitted reviews
  useEffect(() => {
    mockFetchAssignedProjects();
    mockFetchSubmittedReviews();
  }, []);

  const mockFetchAssignedProjects = () => {
    // Mock data for assigned projects with false information
    const mockProjects = [
      { id: 1, title: 'Project 1', description: 'Description of Project 1 by Nithin' },
      { id: 2, title: 'Project 2', description: 'Description of Project 2 by Rahul' },
      { id: 3, title: 'Project 3', description: 'Description of Project 3 by Priya' },
    ];
    setAssignedProjects(mockProjects);
  };

  const mockFetchSubmittedReviews = () => {
    // Mock data for submitted reviews with false information
    const mockReviews = [
      { id: 1, projectTitle: 'Project 1', feedback: 'Feedback for Project 1 by Nithin', rating: '5' },
      { id: 2, projectTitle: 'Project 2', feedback: 'Feedback for Project 2 by Rahul', rating: '4' },
      { id: 3, projectTitle: 'Project 3', feedback: 'Feedback for Project 3 by Priya', rating: '3' },
    ];
    setSubmittedReviews(mockReviews);
  };

  // Handle review submission
  const submitReview = async () => {
    if (!selectedProject || !feedback || !rating) {
      alert('Please complete all fields before submitting.');
      return;
    }

    try {
      const reviewData = { projectId: selectedProject.id, feedback, rating };
      await axios.post('http://localhost:8080/api/reviews/submit', reviewData);
      alert('Review submitted successfully.');
      setFeedback('');
      setRating('');
      mockFetchAssignedProjects();
      mockFetchSubmittedReviews();
      setShowPopup(false); // Close the popup after submission
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  // Handle opening/closing the popup
  const openPopup = (project) => {
    setSelectedProject(project);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <h2>Peer Review Dashboard</h2>

      {/* Assigned Projects Section */}
      <div className="review-section">
        <h3>Assigned Projects for Review</h3>
        <ul>
          {assignedProjects.map((project) => (
            <li key={project.id}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <button onClick={() => openPopup(project)}>
                Review Project
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Review Popup */}
      {showPopup && selectedProject && (
        <div className="popup">
          <div className="popup-content">
            <h3>Submit Review for: {selectedProject.title}</h3>
            <textarea
              placeholder="Write your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value="" disabled>Select a Rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
            <div className="popup-buttons">
              <button onClick={submitReview}>Submit Review</button>
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Submitted Reviews Section */}
      <div className="submitted-reviews">
        <h3>Your Submitted Reviews</h3>
        <ul>
          {submittedReviews.map((review) => (
            <li key={review.id}>
              <h4>{review.projectTitle}</h4>
              <p>Feedback: {review.feedback}</p>
              <p>Rating: {review.rating}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PeerReviewDashboard;
