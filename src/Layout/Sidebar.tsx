import { useEffect, useState } from 'react';
import {
    filterByGenre,
    filterByYear,
    clearFilters,
} from '../Redux/features/filter/filterSlice';
import { useAppDispatch } from '../Redux/hook';
import { useGetBooksQuery } from '../Redux/features/book/booksApi';
import { IBooks } from '../Types/globalTypes';


export default function Sidebar() {
    const dispatch = useAppDispatch();
    const { data } = useGetBooksQuery(undefined);

    const [genre, setGenre] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const booksData = data?.data;
    const genreArr: string[] = [];
    const publicationYearArr: string[] = [];

    booksData?.map((b: IBooks) => {
        const upperCase = b.genre.charAt(0).toUpperCase() + b.genre.slice(1);
        genreArr.push(upperCase);
    });

    const genSet = new Set(genreArr);
    const genreArray = [...genSet];

    booksData?.map((b: IBooks) => {
        const arr = b.publicationDate.split(" ");
        publicationYearArr.push(arr[arr.length - 1]);
    });
    const yearSet = new Set(publicationYearArr);
    const yearArr = [...yearSet];


    useEffect(() => {
        dispatch(filterByGenre(genre));
        dispatch(filterByYear(year));
    }, [dispatch, genre, year]);

    const clearFiltersHandler = () => {
        dispatch(clearFilters());
        setGenre('');
        setYear('');
    };

    return (
        <div className=" text-black rounded font-medium h-full w-[240px] mx-auto">
            <div className='flex justify-between items-center'>
                <div className="text-xl font-bold">Filter books</div>
                <div>
                    <button
                        onClick={clearFiltersHandler}
                        className="cursor-pointer pt-1 underline text-teal-500"
                    >
                        Clear Filters
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-left pt-5">
                <select
                    name="genre"
                    id="genre"
                    value={genre}
                    placeholder="News Category"
                    className="border-[1px] border-teal-400 focus:outline-none text-gray-700 bg-gray-100  rounded py-2 px-5"
                    required
                    onChange={(e) => setGenre(e.target.value)}
                >
                    <option value="">Genre</option>
                    {genreArray.map((g, i) => (
                        <option value={g} key={i}>
                            {g}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col items-left pt-10">
                <select
                    name="year"
                    value={year}
                    id="year"
                    placeholder="News Category"
                    className="border-[1px] border-teal-400 focus:outline-none text-gray-700 bg-gray-100  rounded py-2 px-5"
                    required
                    onChange={(e) => setYear(e.target.value)}
                >
                    <option value="">Publication year </option>
                    {yearArr.map((y, i) => (
                        <option value={y} key={i}>
                            {y}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
