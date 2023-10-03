/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { HiMinus, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";
import {
    addToCart,
    removeFromCart,
    removeOne,
} from "../../Redux/features/cart/cartSlice";
import {
    addToWishlist,
    removeFromWishlist,
} from "../../Redux/features/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { IBooks } from "../../Types/globalTypes";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

interface IProps {
    book: IBooks;
}

export default function CartComp({ book }: IProps) {
    const dispatch = useAppDispatch();
    const { img, title, author, genre, quantity, _id } = book || {};

    const { books } = useAppSelector((state) => state.wishlist);

    const handleWishlist = () => {
        dispatch(addToWishlist(book));
    };

    const handleWishlistRemove = () => {
        dispatch(removeFromWishlist(book));
    };

    const matchWishlist = books.find((book) => book._id === _id);

    return (
        <div className="card card-compact w-4/6 bg-gray-100 rounded mx-auto px-10 my-4">
            <div className="hero-content flex-col lg:flex-row justify-between">
                <div className=" flex items-center justify-center gap-3">
                    <div>
                        <img src={img} className="w-[60px] rounded" />
                    </div>
                    <div>
                        <h1 className="text-2xl self-center">{title}</h1>
                        <p>Author: {author}</p>
                        <p>Genre: {genre}</p>
                    </div>
                </div>

                <div>
                    <div className=" py-2">
                        <p>Total Price: {(book.price * book.quantity!).toFixed(2)}{' '}$</p>
                    </div>
                    <div className=" flex gap-4">
                        <button
                            className=" py-1.5 "
                            onClick={matchWishlist ? handleWishlistRemove : handleWishlist}
                        >
                            {matchWishlist ? (
                                <MdFavorite size={20} />
                            ) : (
                                <MdOutlineFavoriteBorder size={20} />
                            )}
                        </button>
                        <button
                            className=" py-1.5  text-black"
                            onClick={() => dispatch(removeFromCart(book))}
                        >
                            <HiOutlineTrash size="20" className="" />
                        </button>
                    </div>
                </div>

                <div className="pl-5 flex gap-3">
                    <div className="border-l pl-5 flex justify-center items-center gap-3">
                        <button onClick={() => dispatch(removeOne(book))}>
                            <HiMinus size="20" />
                        </button>
                        <p className="border-gray-400 bg-white px-2 py-1">{quantity}</p>
                        <button onClick={() => dispatch(addToCart(book))}>
                            <HiOutlinePlus size="20" />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
