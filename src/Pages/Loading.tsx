import { useState } from 'react';
import loading from '../assets/loading.svg';
import './Loading.css'

export default function Loading() {
    const [isVisible] = useState(true);

    return (
        <div className={`flex justify-center items-center h-screen ${isVisible ? 'bounce-in' : 'bounce-out'}`}>
            <div className={`${isVisible ? 'visible' : 'hidden'}`}>
                <img src={loading} alt="" className="h-[5rem] md:mt-[-6rem]" />
            </div>
        </div>
    );
}

