import { Link } from "react-router-dom";

export default function Coupon() {
    return (
        <>
            <div className=" flex justify-center container mx-auto w-4/6 bg-gray-100 rounded shadow-sm py-[5rem] mb-10">
                <div className=" text-center w-4/6">
                    <h2 className="font-['Helvetica'] text-7xl py-5 font-bold">COMING SOON</h2>
                    <p>Discover a world of books through genres, titles, authors, and years. Customize your reading journey and unearth literary gems tailored to your preferences and interests.</p>
                    <div className="card-actions flex justify-center">
                        <Link to="/books">
                            <button
                                className="my-3 bg-teal-500 hover:bg-teal-600 px-5  mx-auto py-[10px] rounded text-white cursor-pointer"
                            > Explore Books..</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
