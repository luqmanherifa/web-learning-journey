import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center py-16 px-8">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
          Login
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
