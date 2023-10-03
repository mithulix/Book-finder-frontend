/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Key } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useAppSelector } from "../../Redux/hook";
import { useGetCommentQuery, useGetSingleBookQuery } from "../../Redux/features/book/booksApi";
import { IBooks } from "../../Types/globalTypes";
import Loading from "../../Pages/Loading";
import BookDetailsHero from "./BookDetailsHero";
import AddReviews from "./AddReviews";
import BookReviews from "./BookReviews";


export default function BookDetails() {
    const { user } = useAppSelector((state) => state.user);
    const { id } = useParams();
    const { data, isLoading } = useGetSingleBookQuery(id, {
        refetchOnMountOrArgChange: true,
    });
    const { data: comments } = useGetCommentQuery(id, {
        pollingInterval: 3000,
    });

    const bookData: IBooks = data?.data;
    const commentsData = comments?.data?.comments;

    const { pathname } = useLocation();

    let content;
    if (isLoading) {
        content = <Loading />;
    }
    if (!isLoading && bookData) {
        content = (
            <>
                <BookDetailsHero book={bookData} />
                <div className="divider"></div>
                {!user.email ? (
                    <p className="text-center text-gray-800 font-bold text-xl">
                        Review this book?.{" "}
                        <Link
                            to={`/login`}
                            className="underline text-teal-500"
                            state={{ path: pathname }}
                        >
                            Please login
                        </Link>
                    </p>
                ) : (
                    <AddReviews id={bookData._id} />
                )}
                {commentsData?.map((comment: string, i: Key | null | undefined) => (
                    <BookReviews key={i} comment={comment} />
                ))}
            </>
        );
    }
    return <div className="mb-10">{content}</div>;
}