import React from 'react';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Contract from './pages/Contract';

export default function App() {
  return (
    <div>
      <header>
        <h1>ITIS3135 React 3-Page Site</h1>
        <nav>
          <a href="/">Home</a> |{' '}
          <a href="/introduction">Introduction</a> |{' '}
          <a href="/contract">Contract</a>
        </nav>
      </header>

      <Home />
      <Introduction />
      <Contract />

      <footer>
        <p>&copy; 2025 Ethan Vue | ITIS3135 React Project</p>
      </footer>
    </div>
  );
}
