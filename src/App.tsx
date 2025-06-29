import { useState } from "react";
import "./App.css"; // If you added custom styles

function App() {
  // React state to control feature visibility
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">🚀 AutoDeployPro</h1>
        <p className="description">
          A DevOps CI/CD pipeline demo using React, Vite & GitHub Actions.
        </p>

        {/* Button to reveal features */}
        {!showFeatures && (
          <button className="button" onClick={() => setShowFeatures(true)}>
            Explore Now
          </button>
        )}
      </div>

      {/* Only show this if user clicks the button */}
      {showFeatures && (
        <div className="features">
          <h2 className="title">🔧 DevOps Features</h2>
          <ul className="description">
            <li>✔️ GitHub Integration</li>
            <li>✔️ Continuous Integration (CI)</li>
            <li>✔️ Continuous Deployment (CD)</li>
            <li>✔️ React + Vite Frontend</li>
            <li>✔️ GitHub Actions Workflow</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
