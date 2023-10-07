import { HiOutlineTrash } from "react-icons/hi";
import {
    changeBookStatus,
    changeFinishedStatus,
    removeFromWishlist,
} from "../../Redux/features/wishlist/wishlistSlice";
import { IBooks } from "../../Types/globalTypes";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";

interface IProps {
    book: IBooks;
}

export default function WishlistComp({ book }: IProps) {
    const { books } = useAppSelector((state) => state.wishlist);
    const dispatch = useAppDispatch();
    const { img, title, author, genre, _id } = book || {};

    const matchedBook = books.find((book) => book._id === _id);
    return (
        <div className="card card-compact w-4/6 bg-gray-100 rounded mx-auto px-10 my-4 ">
            <div className="hero-content flex-col lg:flex-row justify-between">
            <div className=" flex items-center justify-center gap-3">
                    <div>
                        <img src={img} className="w-[60px] rounded" alt="img"/>
                    </div>
                    <div>
                        <h1 className="text-2xl self-center">{title}</h1>
                        <p>Author: {author}</p>
                        <p>Genre: {genre}</p>
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-1.5">
                        <p>Reading status: </p>

                        {matchedBook?.readingStatus && (
                            <div
                                className="bg-teal-200 px-2 rounded text-center cursor-pointer"
                                onClick={() => dispatch(changeBookStatus(book))}
                            >
                                Reading.
                            </div>
                        )}
                        {!matchedBook?.readingStatus && (
                            <div
                                className="bg-teal-200 px-2 rounded text-center cursor-pointer"
                                onClick={() => dispatch(changeBookStatus(book))}
                            >
                                Read soon.
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-1.5 mt-2">
                        <p>Mark as finished: </p>
                        {matchedBook?.readingComplete && (
                            <div
                                className="bg-teal-300 px-2 rounded text-center cursor-pointer"
                                onClick={() => dispatch(changeFinishedStatus(book))}
                            >
                                Finished.
                            </div>
                        )}
                        {!matchedBook?.readingComplete && (
                            <div
                                className="bg-red-200 px-2 rounded text-center cursor-pointer"
                                onClick={() => dispatch(changeFinishedStatus(book))}
                            >
                                Not finished.
                            </div>
                        )}
                    </div>
                </div>

                <div className="border-l pl-5 flex justify-center items-center gap-3">
                    <button
                        className="py-1.5  text-black"
                        onClick={() => dispatch(removeFromWishlist(book))}
                    >
                        <HiOutlineTrash size="25"/>
                    </button>
                </div>
            </div>
        </div>
    );
}
