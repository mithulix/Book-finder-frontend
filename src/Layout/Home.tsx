import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import arrowRight from "../assets/rightArrow.svg";
import Carousel from "./Carousel";

export default function Home() {
  return (
    <div className=" mt-[-1rem]">
      <div className="relative w-full flex h-[36rem] text-white text-center justify-center">
        {/* Background Image */}
        <img
          src="https://i.ibb.co/PTHgLf2/wallpaperflare-com-wallpaper-1.jpg"
          className="w-full"
          alt="Background Image"
        />
        {/* Gradient Background Overlay */}
        <div className="absolute inset-0">
          <div className="bg-gradient-to-b from-transparent via-black to-transparent h-full opacity-50"></div>
        </div>

        <div className="absolute pt-[8rem] w-4/6">
          <div className="mx-auto pb-5">
            <p className="italic text-start">Ibn Rajab's Monographs</p>
            <h2 className="text-7xl py-1 font-bold font-['Helvetica']">The Journey to Allah</h2>
            <p>ابن رجب الحنبلي, Abu Rumaysah(Translator)</p>
          </div>
          <p>
            This book is an explanation of the Hadith "Your actions alone will not save any of you."<br />

            Imam al-Bukhari records on the authority of Abu Hurayrah that the Prophet ﷺ said, "Your actions alone will not save any of you." They asked, "O Messenger of Allah, not even you?" <br />He ﷺ replied, "Not even me, unless, Allah were to envelop me in His mercy. Be firm; steadfast and balanced;<br /> and journey [to Allah] in the beginning of the day, the end of the day, and a portion of the latter part of the night. Moderation, moderation! Through this you will attain your goal!"{' '}
            <button className="bg-slate-600 px-2 mx-2 rounded">read more...</button>
          </p>
          <p className="py-2">
            <span className="font-bold">Genre:</span>{' '}
            <span className="underline px-1">Islam </span>
            <span className="underline px-1">Religion</span>
          </p>
        </div>
      </div>


      <div className=' py-6 mt-5'>
        <div className="flex justify-between items-center ">
          <p className="ml-5 text-4xl font-bold font-['Helvetica'] text-center">TOP 10 BOOKS FROM SEPTEMBER :</p>
          <Link to={"/books"}>
          <p className="text-teal-500 underline pr-7 text-xl"> explore books...</p>
          </Link>
        </div>

        <Carousel />
        <div className="flex flex-col items-center justify-center">
          <Button className=" bg-teal-500 hover:bg-teal-600 w-1/6 mx-auto py-[10px] rounded text-white cursor-pointer" asChild>
            <Link to="/books">
              Browse All Books
              <img src={arrowRight} alt="" className="px-2 " />
            </Link>
          </Button>
        </div>
      </div>

    </div>
  );
}
