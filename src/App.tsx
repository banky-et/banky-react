import { Link, Navigate, Route, Routes } from "react-router-dom";
import { NavigateWithResume } from "./components";
import { useAuth } from "./context/auth";
import { RegisterPage } from "./pages";

export function App() {
  const { token } = useAuth();

  if (token) {
    // authenticated routes
    return (
      <Routes>
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/404" element={<h1>404 Page not found!</h1>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    );
  }

  // unauthenticated routes

  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/"
        element={
          <h1>
            Home Ethiopia <Link to="/register">Register</Link>
          </h1>
        }
      />
      <Route path="*" element={<NavigateWithResume to="/" />} />
    </Routes>
  );
}
