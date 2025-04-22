
---

### **Frontend Documentation (`frontend.md`)**


# Frontend Directory Documentation

## Purpose
This directory contains all the frontend code for the React.js application. It includes components, UI design, and state management. It communicates with the backend via RESTful API calls.

## Folder Structure
- **src/**: Contains React components and the main application logic.
  - **components/**: Reusable UI components, such as buttons, form inputs, etc.
  - **App.js**: The main React component that connects the frontend to the backend and manages state.
  - **services/**: Contains API services for communicating with the backend.
- **public/**: Static files, such as `index.html`, where the app is rendered.
- **package.json**: Configuration file containing dependencies, scripts, and metadata about the React app.

## Key Files
- **App.js**: The entry point of the React application that renders the main UI components.
- **components/**: Contains reusable UI components like buttons, form fields, and card components.
- **services/api.js**: Defines API endpoints for communication with the backend.

## Setup Instructions
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
