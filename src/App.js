import "./css/style.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import SpaceshipPage from "./components/spaceships/SpaceshipPage";
import Admin from "./components/pages/Admin";
import { AuthProvider } from "./components/context/AuthContext";
import Nav from "./components/Nav";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Nav />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail/:id" element={<SpaceshipPage />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
