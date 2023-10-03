/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { cancelEditing } from "../../Redux/features/book/bookSlice";
import {
    useAddBookMutation,
    useUpdateBookMutation,
} from "../../Redux/features/book/booksApi";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function AddBook() {
    const [addBook, { isSuccess }] = useAddBookMutation();
    const [updateBook, { isSuccess: updateSuccess }] = useUpdateBookMutation();
    const { book } = useAppSelector((state) => state.book);
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [author, setAuthor] = useState<string>("");

    const [value, onChange] = useState<Value>(new Date());
    const publishedDate = String(value).split(" ").splice(1, 3).join(" ");

    const navigate = useNavigate();

    useEffect(() => {
        const { _id, title, author, genre } = book || {};
        if (_id) {
            setTitle(title!);
            setGenre(genre!);
            setAuthor(author!);
        }
    }, [book]);

    const handleUpdate = (e: any) => {
        e.preventDefault();
        const id = book?._id;
        const data = {
            title: title.trim(),
            author: author.trim(),
            genre: genre.trim(),
            publicationDate: publishedDate,
        };

        updateBook({ id, data });
        setTitle("");
        setGenre("");
        setAuthor("");
        dispatch(cancelEditing());
    };

    const handleAddBook = (e: any) => {
        e.preventDefault();
        const CLIENT_API_KEY = "724b255f740bd113495d3666badd31e5";
        const imgUrl = e.target.bookImg.files[0];

        const formData = new FormData();
        formData.append("image", imgUrl);
        const url = `https://api.imgbb.com/1/upload?key=${CLIENT_API_KEY}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const img = result.data.url;
                    const data = {
                        title: title.trim(),
                        author: author.trim(),
                        img: img,
                        genre: genre.trim(),
                        publicationDate: publishedDate,
                    };
                    addBook(data);
                }
            });
        setTitle("");
        setGenre("");
        setAuthor("");
        navigate("/books");
    };

    const handleCancelEditing = () => {
        dispatch(cancelEditing());
        setTitle("");
        setGenre("");
        setAuthor("");
        navigate("/books");
    };
    return (
        <div className="mt-10">
            <div className="toast toast-top toast-end pt-[5rem]">
                {isSuccess &&
                    toast.success("Book added successfully.", {
                        duration: 5000,
                        position: "top-right",
                    })}
                {updateSuccess &&
                    toast.success("Book updated successfully.", {
                        duration: 5000,
                        position: "top-right",
                    })}
            </div>

            <h1 className="text-center text-3xl font-bold mb-5">
                Publish Your Book
            </h1>
            <form
                className=""
                onSubmit={!book?._id ? handleAddBook : handleUpdate}
            >
                <div className="flex  justify-center items-center">
                    <div className="flex-none mx-3">
                        <h4>Book title : </h4>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            className="border-[2px] border-teal-400 focus:outline-none text-gray-700 bg-gray-100  rounded py-2 px-5"
                            placeholder="Book's title"
                            required
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="flex-none mx-3">
                        <h4>Author :</h4>
                        <input
                            type="text"
                            name="author"
                            className="border-[2px] border-teal-400 focus:outline-none text-gray-700 bg-gray-100  rounded py-2 px-5"
                            value={author}
                            required
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder="Author"
                        />
                    </div>
                    <div className="flex-none mx-3">
                        <h4>Book genre : </h4>
                        <input
                            type="text"
                            name="genre"
                            value={genre}
                            className="border-[2px] border-teal-400 focus:outline-none text-gray-700 bg-gray-100  rounded py-2 px-5"
                            placeholder="Book's genre"
                            required
                            onChange={(e) => setGenre(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center py-5">
                    <div>
                        <div>
                            {!book?._id && (
                                <div className="mr-10">
                                    <span className="">Book Image</span>
                                    <input
                                        type="file"
                                        name="bookImg"
                                        data-tooltip-id="img-tooltip"
                                        data-tooltip-content="You Can't Update Image Any More!!"
                                        className="block rounded  text-gray-500  bg-gray-300 hover:bg-gray-400 border-none
              file:mr-4 file:p-2
              file:rounded file:border-0
              file:font-medium file:cursor-pointer
              file:bg-gray-500 file:text-[#ffffff]
              hover:file:bg-teal-600 my-5 cursor-pointer"
                                        required
                                    />
                                </div>
                            )}
                        </div>
                        <div className="flex items-center">
                            <div >
                                {!book?._id ? (
                                    <input type="submit" value="Add book"
                                        className=" bg-teal-500 hover:bg-teal-600 mx-auto p-2 rounded text-white cursor-pointer"
                                    />
                                ) : (
                                    <input type="submit" value="Update book"
                                        className="  bg-teal-500 hover:bg-teal-600 p-2 mx-2 rounded text-white cursor-pointer"
                                    />
                                )}
                            </div>
                            {book?._id && (
                                <div
                                    onClick={handleCancelEditing}
                                >
                                    <button className=" bg-red-500 mx-2 p-2 mr-10 rounded text-white cursor-pointer"
                                    >Cancel</button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span>Published Date :</span>
                        <Calendar onChange={onChange} value={value} />
                    </div>
                </div>
            </form>
        </div>
    );
}
