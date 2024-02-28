import Link from 'next/link';
import MenuIcon from '/src/images/hamburger-menu-32.png';

export default function Headbar_Items () {
    return (
        <div className = "dropdown absolute ">
            <img src = {MenuIcon.src} className = "p-1 relative"/>
            <details className = "dropdown absolute inset-0 top-0">
            <summary className = "btn byn-ghost bg-transparent hover:bg-transparent"></summary>
            <ul tabIndex={0} className = "p-2 shadow menu dropdown-content z-[1] rounded-box w-52">
                <li><Link href = "main-page">Main Page</Link></li>
                <li><Link href = "chatbot-page">Talk with C.O.L.B.</Link></li>
                <li><Link href = "/">Back to Home</Link></li>
            </ul>
            </details>
        </div>
    );
};

