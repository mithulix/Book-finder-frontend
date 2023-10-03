import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { IBooks } from "../../Types/globalTypes";
import { useDeleteBookMutation } from "../../Redux/features/book/booksApi";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { editing } from "../../Redux/features/book/bookSlice";
import { addToCart } from "../../Redux/features/cart/cartSlice";


interface IProps {
    book: IBooks;
}

export default function BookDetailsHero({ book }: IProps) {
    const [deleteBook] = useDeleteBookMutation();
    const { user } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const { img, title, author, genre, publicationDate, _id } = book || {};
    const navigate = useNavigate();

    const handleEdit = () => {
        dispatch(editing(book));
        navigate("/add-book");
    };

    const handleDelete = () => {
        deleteBook(_id);
        confirm("Want to delete this book.");
        navigate("/");
    };
    return (
        <div className="hero bg-gray-100 w-4/6 px-5 mx-auto shadow-md rounded">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-[20rem]">
                    <img src={img} className="min-w-full rounded-lg shadow-2xl" />
                </div>
                <div className="flex flex-col gap-3 ms-10">
                    <div className="flex justify-end items-center gap-5 pb-[100px]">
                        <div
                            className="bg-teal-400 rounded hover:bg-teal-600 px-3 py-1.5 cursor-pointer"
                            onClick={handleEdit}
                        >
                            <AiOutlineEdit size={25}  className="text-white" />
                        </div>
                        {user.email && (
                            <div
                                className="bg-red-500 hover:bg-red-400 px-3 py-1.5 rounded cursor-pointer"
                                onClick={handleDelete}
                            >
                                <AiOutlineDelete size={25} className="text-white" />
                            </div>
                        )}
                    </div>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <h6 className="text-xl font-medium">Author: {author}</h6>
                    <h6 className="text-xl font-medium">Genre: {genre}</h6>
                    <h6 className="text-xl font-medium">
                        Publication: {publicationDate}
                    </h6>
                    <button
                        className="bg-teal-500 hover:bg-teal-600 text-white my-6 py-3 px-5 rounded"
                        onClick={() => dispatch(addToCart(book))}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}