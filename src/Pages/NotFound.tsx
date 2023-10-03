import { Link } from "react-router-dom";
import notFound from '../assets/not-found.svg'

export default function NotFound() {
    return (
        <div className="container mx-auto px-4 flex justify-center items-center h-full">
            <div className="flex flex-col items-center bg-gray-100 rounded shadow-sm py-10">
                <img src={notFound} className="px-4" alt="" />
                <div className="text-center">
                    <h2 className="font-['Helvetica'] text-4xl py-5 font-bold">NOT FOUND</h2>
                    <p className="px-5">Discover a world of books through genres, titles, authors, and years. Customize your reading journey and unearth literary gems tailored to your preferences and interests.</p>
                    <div className="card-actions flex justify-center mt-3">
                        <Link to="/">
                            <button
                                className="bg-teal-500 hover:bg-teal-600 px-5 py-2 rounded text-white cursor-pointer"
                            > Back to Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
