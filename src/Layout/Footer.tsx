import { FiFacebook, FiInstagram } from 'react-icons/fi';
import bookIcon from '../assets/book-icon.svg';

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className=" bg-gray-300 px-5 py-5">
            <div className="flex justify-between">
                <div className='flex items-center'>
                    <img className="h-10" src={bookIcon} alt="Logo" />
                    <p className="ml-auto"> &#169; Book-Finder {year}.</p>
                </div>
                <div className="flex gap-20">
                    <ul className="space-y-2">
                        <li>Upcoming</li>
                        <li>Shipping</li>
                        <li>How it works</li>
                    </ul>
                    <ul className="space-y-2">
                        <li>Support</li>
                        <li>Careers</li>
                    </ul>
                    <ul className="space-y-2">
                        <li>List your gear</li>
                        <li>Contact team</li>
                    </ul>
                    <ul className="space-y-2">
                        <li>Privacy Policy</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
                <div className="flex items-center gap-2 text-2xl">
                    <FiFacebook  />
                    <FiInstagram />
                </div>
            </div>
        </div>
    );
}
