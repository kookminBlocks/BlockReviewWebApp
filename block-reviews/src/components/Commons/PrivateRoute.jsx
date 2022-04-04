import { Navigate, Route, Routes } from "react-router-dom";

const PrivateRoute = ({
    isLogin,
    redirectPath = '/',
    children,
  }) => {
    if (!isLogin) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : null;
  };

export default PrivateRoute;