import React from 'react';
import { useNavigate } from 'react-router-dom';

const TestComponent = () => {
  const navigate = useNavigate();

  // Function to handle button click and trigger navigation
  const handleButtonClick = () => {
    // Navigate to '/'
    navigate('/');
  };

  return (
    <div>
      <h1>Test Component</h1>
      {/* Button to trigger navigation */}
      <button onClick={handleButtonClick}>Navigate to '/'</button>
    </div>
  );
};

export default TestComponent;