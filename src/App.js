/* ======= src/App.tsx ======= */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Team from './pages/Team.jsx';
// import Events from './pages/Resources.js';
import Resources from './pages/Resources.jsx';
function App() {
    return (React.createElement(Router, null,
        React.createElement(Navbar, null),
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
            React.createElement(Route, { path: "/team", element: React.createElement(Team, null) }),
            React.createElement(Route, { path: "/resources", element: React.createElement(Resources, null) })),
        React.createElement(Footer, null)));
}
export default App;
