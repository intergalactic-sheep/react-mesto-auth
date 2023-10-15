import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ user, children, onlyUnAuth }) {
  const location = useLocation();

  if (onlyUnAuth && user?.email) {
    const from = location.state?.from || { pathname: "/" };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user?.email) {
    return (
      <Navigate to='/sign-in' state={{ from: location }} />
    );
  }

  return children;
}
