import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

//Login Form
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const loginData = { email, password };
    await axios
      .post("http://localhost:3500/api/auth/login", loginData)
      .then((response) => {
        setResponse(`Login successful`);
        localStorage.setItem("token", response.data.token);
        setEmail("");
        setPassword("");
        // Redirect user to their dashboard
        navigate("/calendar");
      })
      .catch((error) => {
        console.log(error);
        setResponse(`${error.response.data.message}`);
      });
  }

  return (
    <div className="container mx-auto flex justify-center my-10">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="legend">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Login
        </button>
        <p className="text-center">
          Don't have an account?{" "}
          <a href="/signup" className="link link-primary">
            Sign Up
          </a>
        </p>
        {response && (
          <p className="text-EngineeringOrange text-center">{response}</p>
        )}
      </fieldset>
      <br />
    </div>
  );
}

//Registration Form
function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [response, setResponse] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const signUpData = { email, password, firstName };
    axios
      .post("http://localhost:3500/api/auth/register", signUpData)
      .then(() => {
        setResponse("You have successfully registered!");
      })
      .catch((error) => {
        console.log(error);
        setResponse(`${error.response.data.message}`);
      });
  }
  return (
    <div className="container mx-auto flex justify-center my-10">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="legend">Sign Up</legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="label">Name</label>
        <input
          type="string"
          className="input"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Create Account
        </button>
        {response && (
          <p className="text-EngineeringOrange text-center">{response}</p>
        )}
        <p className="text-center">
          Already have an account?{" "}
          <a href="/login" className="link link-primary">
            Login
          </a>
        </p>
      </fieldset>
    </div>
  );
}

//Export API Functions
export { LoginForm, SignUpForm };
