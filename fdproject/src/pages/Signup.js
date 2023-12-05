import { useState } from "react";
import "./Sign.css";
import Navbar from "../components/Navbar";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function Sign() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    // Implement this function
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div>
      <Navbar />
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Sign Up</h2>
            <div className="Field">
              <label>
                First name <sup>*</sup>
              </label>
              <input
                placeholder="First name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="Field">
              <label>Last name</label>
              <input
                placeholder="Last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className="Field">
              <label>
                Email address <sup>*</sup>
              </label>
              <input
                placeholder="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="Field">
              <label>
                Password <sup>*</sup>
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password.value}
                onChange={(e) => {
                  setPassword({ ...password, value: e.target.value });
                }}
                onBlur={() => {
                  setPassword({ ...password, isTouched: true });
                }}
              />
              {password.isTouched && password.value.length < 8 ? (
                <PasswordErrorMessage />
              ) : null}
            </div>
            <div className="Field">
              <label>
                Role <sup>*</sup>
              </label>
              <select
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value="role">Role</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <button
              className="regbtn"
              type="submit"
              disabled={!getIsFormValid()}
            >
              Create account
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Sign;
