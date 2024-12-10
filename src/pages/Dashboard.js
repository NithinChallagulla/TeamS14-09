import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get user data from location state
  const user = location.state || { name: 'Guest', email: 'guest@example.com', role: 'Visitor' };

  const recentProjects = [
    {
      id: 1,
      title: 'Feedback Management System',
      description: 'A system to collect and analyze student feedback.',
      status: 'Completed',
    },
    {
      id: 2,
      title: 'E-Learning Platform',
      description: 'An interactive platform for online learning.',
      status: 'In Progress',
    },
  ];

  const recentReviews = [
    {
      id: 1,
      projectTitle: 'Feedback Management System',
      feedback: 'Excellent design and user-friendly interface.',
      rating: '5/5',
    },
    {
      id: 2,
      projectTitle: 'E-Learning Platform',
      feedback: 'Great concept but needs better content.',
      rating: '4/5',
    },
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Welcome, {user.name}</h2>
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
