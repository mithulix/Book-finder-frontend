import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/features/cart/cartSlice";
import {
    addToWishlist,
    removeFromWishlist,
} from "../../Redux/features/wishlist/wishlistSlice";
import { IBooks } from "../../Types/globalTypes";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";

interface IPros {
    book: IBooks;
}

export default function BookCard({ book }: IPros) {
    const { books } = useAppSelector((state) => state.wishlist);
    const dispatch = useAppDispatch();
    const { title, author, genre, img, publicationDate, _id } = book || {};

    const handleAddToCart = (book: IBooks) => {
        dispatch(addToCart(book));
    };
    const handleWishlist = () => {
        dispatch(addToWishlist(book));
    };

    const handleWishlistRemove = () => {
        dispatch(removeFromWishlist(book));
    };

    const matchWishlist = books.find((book) => book._id === _id);
    return (
        <div className="card w-[18rem] bg-gray-100 shadow-md rounded leading-4">
            <Link to={`/book-details/${_id}`}>
                <figure className=" ">
                    <img src={img} alt="" className="w-[10rem] pt-3 mx-5" />
                </figure>
            </Link>
            <div className="card-body">
                <Link to={`/book-details/${_id}`}>
                    <h4 className="card-title">{title}</h4>
                </Link>
                <span>Author: {author}</span>
                <span>Genre: {genre}</span>
                <span>Publication: {publicationDate}</span>
                <div className="flex justify-center items-center gap-5">
                    <button
                        className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-5 rounded"
                        onClick={() => handleAddToCart(book)}
                    >
                        Add to cart
                    </button>
                    <p
                        className="cursor-pointer"
                        onClick={matchWishlist ? handleWishlistRemove : handleWishlist}
                    >
                        {matchWishlist ? (
                            <MdFavorite size={30} />
                        ) : (
                            <MdOutlineFavoriteBorder size={30} />
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}

