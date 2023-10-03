import { FormEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../Redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hook";
import googleIcon from '../assets/google_icon.svg';
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Loading from "../Pages/Loading";

export default function Login() {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(loginUser({ email: email, password: password }));
    setEmail("");
    setPassword("");
    setLoading(false);
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      if (state) {
        navigate(state.path);
      } else {
        navigate("/");
      }
    }
  }, [isLoading, user.email, navigate, state]);

  if (isLoading) {
    return <Loading />;
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex font-[Quicksand] items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        {/* left side */}
        <div className="relative p-4 py-6 text-white md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <img
            src="https://i.ibb.co/CHq8m6v/studio-media-9-Da-OYUYn-Ols-unsplash.jpg"
            className="absolute w-full h-full inset-0 object-cover"
            alt="login image" />
          <div className="absolute w-full h-full inset-0 bg-black opacity-50"></div>
          <div className="relative">
            <div className="my-3 text-5xl font-bold tracking-wider text-center">
              <a href="/" className=" hover:text-teal-600">Book Finder</a>
            </div>
            <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
              Your Gateway to Endless Stories. Discover, Explore, and Find Your Next Adventure.
            </p>
            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>Don't have an account?</span>
              <Link to={`/signup`}>
                <button className="bg-teal-500 px-5 py-1.5 mt-2 font-semibold  rounded  hover:bg-teal-600">
                  Create Account
                </button>
              </Link>
            </p>
            <p className="mt-6 text-sm text-center text-gray-300">
              Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
            </p>
          </div>
        </div>

        {/* right side */}
        <div className="p-10 bg-white md:flex-1">
          <h3 className="my-4 text-3xl text-center font-semibold text-gray-700">LOGIN</h3>
          {/* form */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-md font-medium text-gray-500">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                autoComplete="email"
                className="px-4 py-2 transition duration-300 border rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-teal-200"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-md font-medium text-gray-500">Password</label>
                <a href="#" className="text-md text-teal-400 hover:text-teal-500 hover:underline">Forgot Password?</a>
              </div>
              <div className="flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="px-4 py-2 transition duration-300 border rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-teal-200 flex-grow"
                />
                {/* Password visibility toggle button */}
                <button
                  type="button"
                  className="flex items-center px-3 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOffIcon className="w-6 h-6 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <EyeIcon className="w-6 h-6 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label htmlFor="rememberMe" className="text-md font-medium text-gray-500">Remember me</label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white rounded transition-colors duration-300 bg-teal-500 shadow hover:bg-teal-600 focus:outline-none "
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">or login with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <div className="flex flex-col space-y-4">
                <a
                  href="#"

                  className="flex items-center font-semibold justify-center px-4 py-2 space-x-2 rounded transition-colors duration-300 bg-gray-400 shadow hover:bg-teal-600 focus:outline-none"
                >
                  <img src={googleIcon} className="w-7 h-7 fill-current text-white" />
                  <span className=" font-semibold  text-white">Google</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}