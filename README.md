# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Project Description
This project is an ISRO Dashboard created using React and Vite, designed to display information about ISRO's spacecrafts, launchers, customer satellites, and centers. The application fetches data from APIs, displays the information in a user-friendly manner, and allows users to view additional details for each entity. It also follows accessibility best practices to ensure a better experience for all users.

Setup Instructions
Follow the steps below to clone and run the project locally:

Clone the repository:

bash
git clone <repository_url>

Navigate to the project directory:
bash
cd isro-dashboard

Install the dependencies:
bash
npm install

Run the development server:
bash
npm run dev

Libraries and Tools Used
This project uses the following libraries and tools:

React: A JavaScript library for building user interfaces. It allows for component-based architecture and efficient updates to the DOM.

React Router: Used for managing navigation within the app and creating routes for different pages (e.g., /spacecrafts, /launchers).

Sass: A CSS preprocessor used to add nested rules, variables, and mixins to styles, making the styling process more efficient.

Sonner: A lightweight notification library that helps to show toast notifications for user feedback.


Assumptions & Design Decisions

Vite: Chosen for its fast development server and optimized production builds.

State Management: Used local state in components to manage individual component states like modal visibility.

Accessibility: Implemented keyboard navigation and screen reader support in line with WCAG guidelines, making the app more inclusive.

Custom Hooks: Created useFetch for handling API calls and useSearch for managing search functionality across different entities.

Reusable Components: Designed components like CardsContainer to be reusable, which makes it easier to maintain and extend the codebase.

Responsive Design: Ensured that the app is mobile-responsive using CSS and SCSS, providing a good user experience across various devices.