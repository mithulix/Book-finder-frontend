/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import Searchbar from "../../Layout/Searchbar";
import Sidebar from "../../Layout/Sidebar";
import Loading from "../../Pages/Loading";
import NotFound from "../../Pages/NotFound";
import { useGetBooksQuery } from "../../Redux/features/book/booksApi";
import { useAppSelector } from "../../Redux/hook";
import { IBooks } from "../../Types/globalTypes";
import BookCard from "./BookCard";

export default function Books() {
    const { data, isLoading } = useGetBooksQuery(undefined, {
        refetchOnMountOrArgChange: true,
    });
    const { genre, year, search } = useAppSelector((state) => state.filter);
    const booksData: IBooks[] = data?.data;
    const booksPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    if (isLoading) {
        return <Loading />;
    }

    // Apply filters
    let filteredBooks = booksData || [];
    if (genre !== "") {
        filteredBooks = filteredBooks.filter((f) => f.genre === genre);
    }
    if (year !== "") {
        filteredBooks = filteredBooks.filter((f) =>
            f.publicationDate.includes(year)
        );
    }
    if (search !== "") {
        const searchQuery = search.toLowerCase();
        filteredBooks = filteredBooks.filter((f) =>
            f.title.toLowerCase().includes(searchQuery) ||
            f.publicationDate.toLowerCase().includes(searchQuery) ||
            f.author.toLowerCase().includes(searchQuery)
        );
    }

    // Pagination logic
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="container mx-auto px-4 ">
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3 mt-10">
                    <Sidebar />
                </div>
                <div className="col-span-9 ">
                    <div className="flex justify-center items-center  gap-5 mb-4">
                        <Searchbar />
                    </div>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 px-5 mx-auto mb-10">
                        {currentBooks.length === 0 ?
                            <div className="w-[600px]">
                                <NotFound />
                            </div> : (
                                currentBooks.map((book: IBooks) => (
                                    <BookCard key={book._id} book={book} />
                                ))
                            )}
                    </div>
                    <div className="flex justify-center items-center space-x-2 mb-5">
                        {currentPage > 1 && (
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                className="bg-gray-500 text-white py-2 px-4 rounded cursor-pointer"
                            >
                                Previous
                            </button>
                        )}
                        {pageNumbers.map((pageNumber) => (
                            <button
                                key={pageNumber}
                                onClick={() => paginate(pageNumber)}
                                className={`${currentPage === pageNumber
                                    ? 'bg-gray-500 text-white'
                                    : 'bg-white hover:bg-gray-200 text-gray-800'
                                    } py-2 px-4 rounded cursor-pointer`}
                            >
                                {pageNumber}
                            </button>
                        ))}
                        {currentPage < totalPages && (
                            <button
                                onClick={() => paginate(currentPage + 1)}
                                className="bg-gray-500 text-white py-2 px-4 rounded cursor-pointer"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}