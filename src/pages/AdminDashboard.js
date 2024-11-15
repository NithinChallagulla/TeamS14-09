import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  // Fetch all users and projects on component mount
  useEffect(() => {
    fetchUsers();
    fetchProjects();
  }, []);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to fetch users.');
    }
  };

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setError('Failed to fetch projects.');
    }
  };

  // Approve or reject a project
  const handleProjectApproval = async (projectId, isApproved) => {
    try {
      await axios.put(`http://localhost:8080/api/projects/${projectId}/approval`, { isApproved });
      alert(`Project ${isApproved ? 'approved' : 'rejected'} successfully.`);
      fetchProjects(); // Refresh the project list after action
    } catch (error) {
      console.error('Error updating project approval status:', error);
      setError('Failed to update project status.');
    }
  };

  // Assign a project to a user for peer review
  const assignProject = async (projectId, userId) => {
    try {
      await axios.post(`http://localhost:8080/api/projects/${projectId}/assign`, { userId });
      alert('Project assigned successfully.');
    } catch (error) {
      console.error('Error assigning project:', error);
      setError('Failed to assign project for peer review.');
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {error && <p className="error">{error}</p>}

      {/* Users Section */}
      <div className="admin-section">
        <h3>All Users</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email} - {user.role}
            </li>
          ))}
        </ul>
      </div>

      {/* Projects Section */}
      <div className="admin-section">
        <h3>Submitted Projects</h3>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <p>Submitted by: {project.submittedBy}</p>
              <div>
                <button onClick={() => handleProjectApproval(project.id, true)}>Approve</button>
                <button onClick={() => handleProjectApproval(project.id, false)}>Reject</button>
              </div>

              {/* Assign Project for Peer Review */}
              <h5>Assign for Peer Review</h5>
              <select
                onChange={(e) => assignProject(project.id, e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>
                  Select User
                </option>
                {users
                  .filter((user) => user.role === 'ROLE_USER')
                  .map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name} ({user.email})
                    </option>
                  ))}
              </select>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
