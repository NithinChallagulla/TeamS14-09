import React from 'react';

const AdminDashboard = () => {
  // Dummy data for users
  const users = [
    { id: 1, name: 'harshini', email: 'harshini@klmail.com', role: 'Admin' },
    { id: 2, name: 'Rahul', email: 'rahul@klmail.com', role: 'User' },
    { id: 3, name: 'Priya', email: 'priya@klmail.com', role: 'User' },
    { id: 4, name: 'Nithin', email: 'nithin@klmail.com', role: 'User' },
  ];

  // Dummy data for projects
  const projects = [
    {
      id: 1,
      title: 'Feedback Management System',
      description: 'A system to collect and analyze feedback from students.',
      submittedBy: 'Rahul',
    },
    {
      id: 2,
      title: 'E-Learning Platform',
      description: 'An interactive platform for online learning.',
      submittedBy: 'Priya',
    },
    {
      id: 3,
      title: 'Event Management Tool',
      description: 'A tool to manage events and tasks efficiently.',
      submittedBy: 'Anjali',
    },
  ];

  // Placeholder functions for actions
  const handleProjectApproval = (projectId, isApproved) => {
    alert(`Project ${projectId} ${isApproved ? 'approved' : 'rejected'} successfully.`);
  };

  const assignProject = (projectId, userId) => {
    alert(`Project ${projectId} assigned to user ${userId} successfully.`);
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

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
                  .filter((user) => user.role === 'User')
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
