import Link from 'next/link';

import MenuIcon from '/src/images/hamburger-menu-32.png';

export default function MainPage() {
    return (
    <>
        <div className = "headbar">
            <img src={MenuIcon.src} className = "p-1"/>
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

        <h1>Main-page</h1>
        <h2>
            <Link href="/">Back to home</Link>  
        </h2>
        <h2>
            <Link href="chatbot-page">Talk with C.O.L.B.</Link>
        </h2>
    </>
    )
  }