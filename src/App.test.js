// Import necessary testing utilities from '@testing-library/react'
import { render, screen } from '@testing-library/react';

// Import the main App component to be tested
import App from './App';

// Define a test case to check if the 'learn react' link is rendered
test('renders learn react link', () => {
  // Render the App component
  render(<App />);
  
  // Use 'screen.getByText' to find the element containing 'learn react' text
  const linkElement = screen.getByText(/learn react/i);
  
  // Assert that the 'learn react' link is present in the document
  expect(linkElement).toBeInTheDocument();
});
