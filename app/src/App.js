import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Harry Potter World</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
        >
        <Link to="/">Home</Link> |{" "}
        <Link to="/houses">Houses</Link> |{" "}
        <Link to="/elixirs">Elixirs</Link> |{" "}
        <Link to="/ingredients">Ingredients</Link> |{" "}
        <Link to="/wizards">Wizards</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
