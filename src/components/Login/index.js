import React from "react";
import { useDispatch } from "react-redux"; 
import { login, logout } from "../../features/user";
export default function Login() {
  const dispatch = useDispatch(); //to access the actions
  const payload = {
    name: "Hao",
    age: 25,
    email: "123@gmail.com",
  };
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login(payload));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}
