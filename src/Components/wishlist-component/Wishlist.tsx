import WishlistComp from "./WishlistComp";
import { useAppSelector } from "../../Redux/hook";
import { IBooks } from "../../Types/globalTypes";
import { Link } from "react-router-dom";
import wishlistIcon from '../../assets/wishlist.svg';

export default function Wishlist() {
    const { books } = useAppSelector((state) => state.wishlist);
    return (
        <div className="mx-auto h-full">
            {books.map((book: IBooks) => (
                <WishlistComp key={book._id} book={book} />
            ))}

            {books.length === 0 && (
                <div className="card card-compact w-4/6 bg-gray-100 shadow-xl mx-auto px-10 my-4">
                    <figure className="mx-auto my-4 "><img className="h-[8rem]" src={wishlistIcon} alt="book" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-red-500 py-[2rem]">Your Wishlist is Empty..</h2>
                        <p>Discover a world of books through genres, titles, authors, and years. Customize your reading journey and unearth literary gems tailored to your preferences and interests.</p>
                        <div className="card-actions ">
                            <Link to="/books">
                                <button
                                    className="my-3 bg-teal-500 hover:bg-teal-600 px-5  mx-auto py-[10px] rounded text-white cursor-pointer"
                                > Explore Books..</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
