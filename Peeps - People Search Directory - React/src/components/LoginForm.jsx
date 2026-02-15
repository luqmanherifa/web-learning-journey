import { useRef, useState } from "react";

export default function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email is not valid");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setError("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-slate-200 rounded-lg p-6 bg-white space-y-4"
    >
      <div>
        <input
          type="email"
          ref={emailRef}
          placeholder="Email"
          className="w-full px-4 py-2 border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
        />
      </div>

      <div>
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          className="w-full px-4 py-2 border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors font-medium"
      >
        Submit
      </button>

      {error && <p className="text-rose-600 text-sm text-center">{error}</p>}
    </form>
  );
}
