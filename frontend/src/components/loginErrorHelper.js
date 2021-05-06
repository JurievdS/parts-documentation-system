import react from "react";
import Message from "../components/Message";
import {useSelector} from "react-redux";

export const LoginErrorHelper = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const {error} = userLogin
  console.log(error);
  const {username, password, accountStatus} = error

  return (
    <>
      {username && <Message variant="danger">{username}</Message>}
      {password && <Message variant="danger">{password}</Message>}
      {accountStatus && <Message variant="danger">{accountStatus}</Message>}
    </>
  );
};
