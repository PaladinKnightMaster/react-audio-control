import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';

import ButtonsGroup from '../ButtonsGroup.jsx';

describe('ButtonsGroup Component', () => {
  test('renders all three buttons with correct labels', () => {
    const mockOnStop = jest.fn();
    render(<ButtonsGroup onStop={mockOnStop} />);

    // Check if buttons are rendered with correct labels
    expect(screen.getByLabelText('Stop')).toBeInTheDocument();
    expect(screen.getByLabelText('Record')).toBeInTheDocument();
    expect(screen.getByLabelText('Review your recording')).toBeInTheDocument();

    // Check if labels are present
    expect(screen.getByText('Stop')).toBeInTheDocument();
    expect(screen.getByText('Record')).toBeInTheDocument();
    expect(screen.getByText('Review')).toBeInTheDocument();
  });

  test('play button activates and stop resets all', () => {
    const mockOnStop = jest.fn();
    render(<ButtonsGroup onStop={mockOnStop} />);

    // Simulate clicking the play button (Review)
    const reviewButton = screen.getByLabelText('Review your recording');
    fireEvent.click(reviewButton);

    // Expect the button to be in active state
    expect(reviewButton).toHaveClass('active');

    // Simulate clicking the stop button
    const stopButton = screen.getByLabelText('Stop');
    fireEvent.click(stopButton);

    // Expect the stop button to clear the active state
    expect(reviewButton).not.toHaveClass('active');
    expect(mockOnStop).toHaveBeenCalledTimes(1); // Ensure textarea is focused

    // Expect the stop button to lose focus (blur)
    expect(stopButton).not.toHaveFocus();
  });

  test('record button deactivates after 5 seconds and loses focus', () => {
    jest.useFakeTimers(); // Mock timers
    const mockOnStop = jest.fn();
    render(<ButtonsGroup onStop={mockOnStop} />);

    const recordButton = screen.getByLabelText('Record');
    fireEvent.click(recordButton);

    // The button should be active initially
    expect(recordButton).toHaveClass('active');

    // Fast-forward by 5 seconds
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // Expect the button to no longer be active
    expect(recordButton).not.toHaveClass('active');

    // Check that the record button loses focus
    expect(recordButton).not.toHaveFocus();

    jest.useRealTimers(); // Restore original timers
  });
});
