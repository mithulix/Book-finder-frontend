import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { HiOutlineTrash } from 'react-icons/hi';

export default function Carousel() {
    // not implemented
    // useGetBooksQuery(undefined, {
    //     refetchOnMountOrArgChange: true,
    // });

    const books = [
        {
            id: 1,
            title: "Book 1",
            imageUrl: "https://i.ibb.co/Phs6RWv/4865.jpg",
        },
        {
            id: 2,
            title: "Book 2",
            imageUrl: "https://i.ibb.co/55NX9yn/10228773.jpg",
        },
        {
            id: 3,
            title: "Book 2",
            imageUrl: "https://i.ibb.co/qCdyc3Q/28257707.jpg",
        },
        {
            id: 4,
            title: "Book 2",
            imageUrl: "https://i.ibb.co/mcdf8R4/41721428.jpg",
        },
        {
            id: 5,
            title: "Book 2",
            imageUrl: "https://i.ibb.co/QfhF31F/40121378.jpgg",
        },
        {
            id: 6,
            title: "Book 2",
            imageUrl: "https://i.ibb.co/42GjXQ7/123020255.jpg",
        },
        {
            id: 7,
            title: "Book 2",
            imageUrl: "https://i.ibb.co/zryBzMM/29629427.jpg",
        },
        {
            id: 9,
            title: "Book 2",
            imageUrl: "https://i.ibb.co/sCNJHQQ/142296.jpg",
        },
        // Add more book objects as needed
    ];

    return (
        <div className='py-5'>
            <Swiper
                slidesPerView={4}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {books.map((book) => (
                    <SwiperSlide key={book.id} className="group relative">
                        <div className="w-full h-[28rem] overflow-hidden relative">
                            <img
                                src={book.imageUrl}
                                className="w-full h-full object-contain rounded"
                                alt={`Book Cover - ${book.title}`}
                            />
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="flex space-x-2 bg-gray-700 rounded text-white">
                                    <button className="p-4">
                                        <MdOutlineFavoriteBorder size={25} />
                                    </button>
                                    <button className="p-4">
                                        <HiOutlineTrash size={25} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}






// <SwiperSlide className="group relative">
// <div className="w-full h-[28rem] overflow-hidden">
//     {/* Background Image */}
//     <img
//         src="https://i.ibb.co/Phs6RWv/4865.jpg"
//         className="w-full h-full object-contain rounded transform group-hover:scale-105 transition-transform duration-300"
//         alt="Background Image"
//     />
// </div>
// </SwiperSlide>

// <SwiperSlide className="group relative">
// <div className="w-full h-[28rem] overflow-hidden">
//     {/* Background Image */}
//     <img
//         src="https://i.ibb.co/55NX9yn/10228773.jpg"
//         className="w-full h-full object-contain rounded transform group-hover:scale-105 transition-transform duration-300"
//         alt="Background Image"
//     />
// </div>
// </SwiperSlide>

// <SwiperSlide className="group relative">
// <div className="w-full h-[28rem] overflow-hidden">
//     {/* Background Image */}
//     <img
//         src="https://i.ibb.co/qCdyc3Q/28257707.jpg"
//         className="w-full h-full object-contain rounded transform group-hover:scale-105 transition-transform duration-300"
//         alt="Background Image"
//     />
// </div>
// </SwiperSlide>

// <SwiperSlide className="group relative">
// <div className="w-full h-[28rem] overflow-hidden">
//     {/* Background Image */}
//     <img
//         src="https://i.ibb.co/mcdf8R4/41721428.jpg"
//         className="w-full h-full object-contain rounded transform group-hover:scale-105 transition-transform duration-300"
//         alt="Background Image"
//     />
// </div>
// </SwiperSlide>

// <SwiperSlide className="group relative">
// <div className="w-full h-[28rem] overflow-hidden">
//     {/* Background Image */}
//     <img
//         src="https://i.ibb.co/QfhF31F/40121378.jpgg"
//         className="w-full h-full object-contain rounded transform group-hover:scale-105 transition-transform duration-300"
//         alt="Background Image"
//     />
// </div>
// </SwiperSlide>

// <SwiperSlide className="group relative">
// <div className="w-full h-[28rem] overflow-hidden">
//     {/* Background Image */}
//     <img
//         src="https://i.ibb.co/42GjXQ7/123020255.jpg"
//         className="w-full h-full object-contain rounded transform group-hover:scale-105 transition-transform duration-300"
//         alt="Background Image"
//     />
// </div>
// </SwiperSlide>

// <SwiperSlide className="group relative">
// <div className="w-full h-[28rem] overflow-hidden">
//     {/* Background Image */}
//     <img
//         src="https://i.ibb.co/RvtLj25/59448257.jpg"
//         className="w-full h-full object-contain rounded transform group-hover:scale-105 transition-transform duration-300"
//         alt="Background Image"
//     />
// </div>
// </SwiperSlide>

// <SwiperSlide className="group relative">
// <div className="w-full h-[28rem] overflow-hidden">
//     {/* Background Image */}
//     <img
//         src="https://i.ibb.co/zryBzMM/29629427.jpg"
//         className="w-full h-full object-contain rounded transform group-hover:scale-105 transition-transform duration-300"
//         alt="Background Image"
//     />
// </div>
// </SwiperSlide>

// <SwiperSlide className="group relative">
// <div className="w-full h-[28rem] overflow-hidden">
//     {/* Background Image */}
//     <img
//         src="https://i.ibb.co/sCNJHQQ/142296.jpg"
//         className="w-full h-full object-contain rounded transform group-hover:scale-105 transition-transform duration-300"
//         alt="Background Image"
//     />
// </div>
// </SwiperSlide>