import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const registerHandler = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (data.status === "success") {
      router.replace("/signin");
    }
  };

  return (
    <div className="signin-form">
      <h3>Registration Form</h3>
      <input
        type="email"
        placeholder="Email"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={registerHandler}>
        Register
      </button>
      <div>
        <p>Have an account? </p>
        <Link href="/signin">Sign in</Link>
      </div>
    </div>
  );
}

export default SignupPage;
