# VanLife React Application
VanLife is a full-featured React application that simulates a van rental platform, inspired by the #vanlife movement. Built with React, React Router v6, and MirageJS for API mocking, this project demonstrates modern frontend development practices, including:

- Client-side Routing: Seamless navigation using React Router v6, with nested routes and route protection for host-only pages.
- Authentication Flow: Simple login system with protected routes for hosts, using localStorage for session management.
- Data Layer: Data is fetched from a mock API powered by MirageJS, with optional Firebase Firestore integration for real data.
- Component Architecture: Modular, reusable components for layout, navigation, error handling, and page content.
- Host Dashboard: Special host section with dashboard, income analytics, reviews, and van management.
- Filtering & State Management: Vans can be filtered by type, with stateful UI and URL search params.
- Responsive UI: Styled with CSS for a clean, modern look, including custom graphics and images.
  
## Features
- Browse all available vans, filter by type, and view detailed van information.
- Host dashboard with income stats, reviews, and management of listed vans.
- Authentication-protected routes for host features.
- Error boundaries and loading states for robust UX.
- Modular file structure for scalability and maintainability.
  
## Tech Stack
- React 18
- React Router DOM v6
- MirageJS (API mocking)
- Firebase Firestore (optional, for real backend)
- Vite (development/build tooling)
- CSS (custom styles)
- React Icons
