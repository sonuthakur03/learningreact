import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import Input from "./Input";
import Profile from "./Profile";

function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    console.log(username);
    console.log(password);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 grid place-items-center">
      <div className="bg-gray-300 w-1/3 rounded-md flex flex-col p-5 gap-6 items-center">
        <h2 className="text-3xl text-center font-bold">Login</h2>
        <Input
          type={"text"}
          label={"username"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type={"password"}
          label={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-green-800 text-white w-2/6 p-2 m-2 rounded-md "
        >
          Submit
        </button>
        <Profile />
      </div>
    </div>
  );
}

export default Login;
