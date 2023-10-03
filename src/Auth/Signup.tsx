import { FormEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createUser } from "../Redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hook";
import googleIcon from '../assets/google_icon.svg'
import Loading from "../Pages/Loading";

export default function Signup() {
    const { user, isLoading } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false); // Add loading state
    const navigate = useNavigate();
    const { state } = useLocation();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true); // Set loading state to true
        await dispatch(createUser({ email, password }));
        setIsSubmitting(false); // Set loading state to false
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        if (user.email) {
            if (state) {
                navigate(state.path);
            } else {
                navigate("/");
            }
        }
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

    if (isLoading || isSubmitting) {
        return <Loading />;
    }


    return (
        <div className="flex font-[Quicksand] items-center min-h-screen p-5 bg-gray-100 lg:justify-center">
            <div
                className="flex flex-col overflow-hidden bg-white rounded shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
            >
                <div className="relative p-4 py-6 text-white md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                    {/* Background Image */}
                    <img
                        src="https://i.ibb.co/rMpJn7j/jaredd-craig-HH4-WBGNyltc-unsplash.jpg"
                        className="absolute w-full h-full inset-0 object-cover"
                        alt="Phone image"
                    />
                    <div className="absolute w-full h-full inset-0 bg-black opacity-50"></div>
                    <div className="relative">
                        <div className="my-3 text-5xl font-bold tracking-wider text-center">
                            <a href="/" className=" hover:text-teal-600">Book Finder</a>
                        </div>
                        <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                            Your Gateway to Endless Stories. Discover, Explore, and Find Your Next Adventure.
                        </p>
                        <p className="flex flex-col items-center justify-center mt-10 text-center">
                            <span>Already have an account?</span>
                            <Link to={`/login`}>
                                <button className="bg-teal-500 rounded mt-2 font-semibold	 px-5 py-1.5  hover:bg-teal-600">
                                    Login
                                </button>
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="p-10 bg-white md:flex-1">
                    <h3 className="my-4 text-3xl text-center font-semibold text-gray-700"> SIGN UP</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-5">
                            <div className="flex flex-col space-y-1">
                                <div className="form-control">
                                    <label htmlFor="email" className="text-md font-semibold text-gray-500">Email address</label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoFocus
                                        className=" px-4 py-2 transition duration-300 border rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-teal-200"
                                    />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="text-md font-semibold text-gray-500">Password</label>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="px-4 py-2 transition duration-300 border rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-teal-200"
                                    />
                                </div>
                                <div className="flex flex-col space-y-1 pb-5">
                                    <label htmlFor="password" className="text-md font-semibold text-gray-500">Confirm Password</label>
                                    <input
                                        type="text"
                                        placeholder="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="px-4 py-2 transition duration-300 border rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-teal-200"
                                    />
                                </div>
                                {password !== confirmPassword && (
                                    <p className="text-red-600">password should be matched!</p>
                                )}
                                <div className="form-control mt-6">
                                    <button
                                        className={`w-full px-4 py-2 font-semibold text-white rounded transition-colors duration-300 bg-teal-500 shadow hover:bg-teal-600 focus:outline-none ${password !== confirmPassword &&
                                            "bg-slate-400 hover:bg-slate-500"
                                            }`}
                                        disabled={password !== confirmPassword}
                                    >
                                        Sign up
                                    </button>
                                </div>
                                <div className="flex flex-col space-y-5">
                                    <span className="flex items-center justify-center space-x-2">
                                        <span className="h-px bg-gray-400 w-14"></span>
                                        <span className="font-normal text-gray-500 mt-1">or signup with</span>
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
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}