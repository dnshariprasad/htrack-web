import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddNote from "./component/AddNote";
import NoteList from "./component/NoteList";
import NoteDetail from "./component/NoteDetail";

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            HtracK
          </Link>
          <div>
            <Link to="/add" className="nav-link d-inline-block">
              Add Note
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<NoteList />} />
        <Route path="/add" element={<AddNote />} />
        <Route path="/note/:id" element={<NoteDetail />} />
        <Route path="/edit/:id" element={<AddNote />} />
      </Routes>
    </Router>
  );
};

export default App;
