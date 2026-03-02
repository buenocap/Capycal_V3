import { LoginForm } from "../services/api";
import axios from "axios";
import { useEffect, useState } from "react";
export default function LogIn_Page() {
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState({});

  function handleSignOut() {
    localStorage.clear();
  }

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
    <div>
      {!token && <LoginForm />}
      {token && (
        <div className="mx-auto text-center">
          {token && (
            <h2>{`Hello ${userData.firstName}! You are already logged in!`}</h2>
          )}
          {/* Display userdata */}
          {userData._id && <h2>Name: {userData.firstName}</h2>}
          {userData._id && <h2>Email: {userData.email}</h2>}
          {/** Show Sign Up Form if not logged */}
          {localStorage.getItem("token") && (
            <a href="/login" className="text-blue-400" onClick={handleSignOut}>
              <p>Sign Out?</p>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
