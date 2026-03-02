import { LoginForm, SignUpForm } from "../services/api";
import axios from "axios";
import { useState, useEffect } from "react";

export default function AuthenticationPage() {
  const [userData, setUserData] = useState({});
  const token = localStorage.getItem("token");

  //Retrieve user data from API
  useEffect(() => {
    axios
      .get("http://localhost:3500/api/auth/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  return (
    <div className="container mx-auto px-4 flex flex-col items-center ">
      <h1 className="font-bold mt-4">Authentication</h1>
      <br />
      <div className="form-container">
        {/** Show Login Form if not logged*/}
        <div>
          {!token && <LoginForm />}
          {token && <SignUpForm />}
        </div>
      </div>
    </div>
  );
}
