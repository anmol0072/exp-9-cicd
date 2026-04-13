import React, { useState } from 'react';
import './index.css';

function App() {
  const [deployments, setDeployments] = useState(1);

  const handleDeploy = () => {
    setDeployments((prev) => prev + 1);
  };

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>Cloud Deployment Dashboard</h1>
        <p>AWS ECS • Docker • CI/CD Optimized</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">Under 100MB</div>
          <div className="stat-label">Image Size</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">Port 8080</div>
          <div className="stat-label">Nginx Sever</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{deployments}</div>
          <div className="stat-label">Successful Deployments</div>
        </div>
      </div>

      <div className="center-content">
        <button onClick={handleDeploy} className="action-btn">
          Trigger Mock Deploy
        </button>
      </div>
    </div>
  );
}

export default App;
