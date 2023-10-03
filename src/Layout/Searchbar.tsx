import { useEffect, useState } from "react";
import { filterBySearch, clearSearch } from "../Redux/features/filter/filterSlice";
import { useAppDispatch } from "../Redux/hook";

export default function Searchbar() {
    const dispatch = useAppDispatch();
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        dispatch(filterBySearch(search.toLowerCase()));
    }, [dispatch, search]);

    const handleClearSearch = () => {
        setSearch("");
        dispatch(clearSearch());
    };

    return (
        <div className="w-3/6 relative">
            <input
                type="text"
                value={search}
                placeholder="Search books..."
                className="input input-accent py-2 px-5 w-full bg-gray-100 focus:outline-none"
                onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
                <button
                    onClick={handleClearSearch}
                    className="absolute inset-y-0 right-0 px-3 py-2 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-4 w-4 text-gray-400"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
}
