import { Navigate, Route, Routes } from "react-router-dom";
import LoginCheck from './IsLogin'

const PublicRoute = ({
    redirectPath = '/store/list',
    children,
  }) => {
    if (LoginCheck()) {
      return <Navigate to={redirectPath} replace />;
    }    
  
    return children ? children : null;
  };

export default PublicRoute;