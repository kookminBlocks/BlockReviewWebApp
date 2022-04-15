import LoginCheck from './IsLogin'
import { Navigate } from "react-router-dom";

const PrivateRoute = ({
    redirectPath = '/',
    children,
  }) => {    
    if (!LoginCheck()) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : null;
  };

export default PrivateRoute;