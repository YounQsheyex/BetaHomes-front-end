import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import HomeLoggedin from "./components/pages/HomeLoggedin";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="/home" element={<HomeLoggedin />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
