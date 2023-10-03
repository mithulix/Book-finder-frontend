/* eslint-disable @typescript-eslint/no-floating-promises */
import { ChangeEvent, FormEvent, useState } from "react";
import { useAddCommentMutation } from "../../Redux/features/book/booksApi";
import Loading from "../../Pages/Loading";

interface IProps {
    id: number;
}

export default function AddReviews({ id }: IProps) {
    const [inputData, setInputData] = useState<string>("");
    const [addComment, { isLoading }] = useAddCommentMutation();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addComment({
            id: id,
            data: { comment: inputData },
        });
        setInputData("");
    };

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setInputData(event.target.value);
    };
    return (
        <div>
            <h1 className="text-2xl text-center mt-4 mb-5">
                Review this Book : 
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center items-center gap-3">
                    <textarea
                        className="textarea textarea-success bg-gray-300 focus:outline-none"
                        placeholder="Add a review..."
                        onChange={handleChange}
                        value={inputData}
                        cols={100}
                        rows={1}
                    ></textarea>
                    {isLoading && <Loading />}
                    <button
                        className="px-4 py-1.5 rounded bg-teal-500 hover:bg-teal-600 text-white"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}
