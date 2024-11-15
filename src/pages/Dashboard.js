import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentReviews, setRecentReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserDetails();
    fetchRecentProjects();
    fetchRecentReviews();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/user/details'); // Adjust endpoint as needed
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const fetchRecentProjects = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/projects/recent');
      setRecentProjects(response.data);
    } catch (error) {
      console.error('Error fetching recent projects:', error);
    }
  };

  const fetchRecentReviews = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/reviews/recent');
      setRecentReviews(response.data);
    } catch (error) {
      console.error('Error fetching recent reviews:', error);
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Welcome, {user.name || 'User'}</h2>
      </header>

      <div className="dashboard-content">
        {/* User Summary Section */}
        <div className="user-summary">
          <h3>Your Profile</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>

        {/* Quick Links with Interactive Hover Effect */}
        <div className="quick-links">
  <h3>Quick Actions</h3>
  <button onClick={() => navigate('/project-creation')} className="interactive-btn">Submit Project</button>
  <button onClick={() => navigate('/peer-review')} className="interactive-btn">Peer Review</button>
  <button onClick={() => navigate('/profile')} className="interactive-btn">View Profile</button>
</div>

        {/* Recent Projects Section */}
        <div className="recent-activities">
          <h3>Your Recent Projects</h3>
          <ul className="project-list">
            {recentProjects.map((project) => (
              <li key={project.id} className="project-item">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <span className="status-badge">Status: {project.status}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Reviews Section */}
        <div className="recent-activities">
          <h3>Your Recent Reviews</h3>
          <ul className="review-list">
            {recentReviews.map((review) => (
              <li key={review.id} className="review-item">
                <h4>Project: {review.projectTitle}</h4>
                <p>Feedback: {review.feedback}</p>
                <p>Rating: <span className="rating">{review.rating}</span></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
