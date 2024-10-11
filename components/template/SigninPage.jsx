import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Track login errors
  const [loading, setLoading] = useState(false); // Track loading state

  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/"); // Redirect to home page if authenticated
    }
  }, [status]);

  const loginHandler = async () => {
    setLoading(true); // Set loading state to true
    setError(null); // Clear previous errors

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false); // Stop loading after response

    if (res.error) {
      setError(res.error); // Set error message from response
    } else {
      router.push("/");
    }
  };

  return (
    <div className="signin-form">
      <h3>Login Form</h3>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error message */}
      <button onClick={loginHandler} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      <div>
        <p>Create an account?</p>
        <Link href="/signup">Sign up</Link>
      </div>
    </div>
  );
}

export default SigninPage;
