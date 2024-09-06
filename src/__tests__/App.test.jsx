import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('textarea gains focus when stop button is clicked', () => {
    render(<App />);

    // Simulate clicking the stop button
    const stopButton = screen.getByLabelText('Stop');
    fireEvent.click(stopButton);

    // Expect the textarea to gain focus
    const textarea = screen.getByPlaceholderText('Enter your answer here');
    expect(textarea).toHaveFocus();  // Ensure textarea has focus
  });
});
