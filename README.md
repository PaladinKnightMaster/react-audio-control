# React Audio Control Box

This project implements an **Audio Control Box** UI with three main buttons: `Stop`, `Record`, and `Review`. It follows best practices in **React** and **JavaScript** for a simple, testable component-based application. The project includes a **mock timer** to simulate recording and playback functionalities.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Setup](#setup)
- [How to Run](#how-to-run)
- [Testing](#testing)
- [File Structure](#file-structure)
- [How It Works](#how-it-works)

## Features

- Three buttons: `Stop`, `Record`, and `Review`, with SVG icons.
- Text labels under each button to indicate functionality.
- Timer-based deactivation of `Record` and `Review` buttons after 5 seconds.
- Fully responsive design, switching to vertical layout for small screens.
- A mock audio recording/playback simulation using a timer (no actual media playback).
- Fully tested with `Jest` and `React Testing Library`.

## Project Structure

```
/src
  /assets
    /icons                  # SVG icons for the buttons
  /components
    ButtonsGroup.jsx        # Main component for buttons
  /__tests__
    ButtonsGroup.test.jsx   # Test file for ButtonsGroup component
  App.jsx                   # Main app
  App.css                   # Main css
  index.js                  # React entry point
```

## Technologies

- **React**: JavaScript library for building user interfaces.
- **Sass (SCSS)**: CSS preprocessor for styling.
- **Jest**: Testing framework for unit tests.
- **React Testing Library**: Utility for testing React components.
- **SVG Icons**: Icons for `Stop`, `Record`, and `Review`.

## Setup

Follow these steps to get the project up and running locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/paladinknightmaster/react-audio-control-box.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-audio-control-box
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## How to Run

Once you've set up the project, start the development server by running:

```bash
npm start
```

This will start a development server at [http://localhost:3000](http://localhost:3000).

## Testing

This project includes unit tests written with **Jest** and **React Testing Library**. The tests cover the button behavior and ensure that the mock timer works correctly.

To run the tests:

```bash
npm test
```

If you want to run a specific test file, use the following command:

```bash
npm test src/components/__tests__/ButtonsGroup.test.jsx
```

### Testing Details

- **Button Clicks**: Ensures that buttons are activated when clicked and deactivated after the timer.
- **Timer Simulation**: Tests the mock timer functionality with `jest.useFakeTimers()` to ensure that the buttons deactivate after 5 seconds.
- **Focus Management**: Checks that the correct button loses focus when deactivated.

## File Structure

### Components

- **`ButtonsGroup.jsx`**:
  - Contains the `Stop`, `Record`, and `Review` buttons with SVG icons and labels.
  - Uses `useState` to manage the active button and `useEffect` to handle the mock timer.

- **`App.jsx`**:
  - The root component that renders `ButtonsGroup`.

### Tests

- **`ButtonsGroup.test.jsx`**:
  - Unit tests for the `ButtonsGroup` component, covering button activation, deactivation, and focus management using `Jest` and `React Testing Library`.

### Assets

- **Icons**:
  - SVG files for the `Stop`, `Record`, and `Review` buttons, located in `src/assets/icons/`.

## How It Works

- **Record and Review Activation**: Clicking `Record` or `Review` activates the button. After 5 seconds, the button is deactivated, and the button loses focus.
- **Stop Button**: Resets the state of the other two buttons (`Record` and `Review`) and clears any ongoing timer.
- **Responsive Design**: On smaller screens (less than 350px width), the buttons are stacked vertically for better user experience.
- **Mock Timer**: Uses `setTimeout` to simulate the duration of recording and reviewing without actually handling audio playback.