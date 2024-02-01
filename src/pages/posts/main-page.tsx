import Link from 'next/link';

import MenuIcon from '/src/images/hamburger-menu-32.png';
import Headbar_Items from '~/functions/headbar_button';

export default function MainPage() {
    return (
    <>
        <div className = "headbar">
            <Headbar_Items/>
        </div>

        <div className ="flex flex-col items-center justify-center gap-12 px-4 py-8 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                <span className="text-[hsl(280,100%,70%)]">Welcome to C.O.L.B.</span>
            </h1>
        </div>

        <div className = "flex flex-col items-center justify-center">
            <h1 className = "text-3xl py-4">What is C.O.L.B.</h1>
            <h2>C.O.L.B. is a Covid Organizing Literary Buddy. Yeah, not really a good name but I needed filler words. </h2>
        </div>
    
    </>
    )
  }