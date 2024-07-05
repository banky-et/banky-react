import { Navigate, Route, useLocation } from "react-router-dom";

export const NavigateWithResume: React.FC<{ to: string; key?: string }> = ({
  to,
  key = "resume",
}) => {
  const location = useLocation();

  // Construct the resume URL from the current location
  const resumeUrl = `${location.pathname}${location.search}`;

  return (
    <Route
      path="*"
      element={
        <Navigate to={`${to}?${key}=${encodeURIComponent(resumeUrl)}`} />
      }
    />
  );
};
