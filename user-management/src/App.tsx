import React from "react";
import "./App.css";
import Home from "./pages/Home"; // Importing Home which contains UserList

const App: React.FC = () => {
  return (
    <div className="App">
      <Home /> {/* Rendering Home page which will display UserList */}
    </div>
  );
};

export default App;
