
import React, { useState } from "react";

const Authentication = () => {
  const [authType, setAuthType] = useState("login");

  return (
    <div className="auth-container">
      <h2>{authType === "login" ? "🔑 Login" : "📝 Register"}</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        {authType === "register" && <input type="text" placeholder="Username" required />}
        <button type="submit">{authType === "login" ? "Login" : "Register"}</button>
      </form>
      <p onClick={() => setAuthType(authType === "login" ? "register" : "login")}>
        {authType === "login" ? "New user? Register" : "Already registered? Login"}
      </p>
    </div>
  );
};

export default Authentication;
