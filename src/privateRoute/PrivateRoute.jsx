import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  let token = sessionStorage.getItem("accesstoken");
  return <div>{token ? props.children : <Navigate to="/" />}</div>;
};

export default PrivateRoute;
