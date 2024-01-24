import Link from 'next/link';
import MenuIcon from '/src/images/hamburger-menu-32.png';

export default function Headbar_Items () {
    return (
        <div className = " dropdown">
            <img src = {MenuIcon.src} className = "p-1"/>
            <details className = "dropdown absolute top-0 order-last">
            <summary className = "btn btn-lg" ></summary>
            <ul tabIndex={0} className = "p-2 shadow menu dropdown-content z-[1] rounded-box w-52">
                <li><Link href = "main-page">Main Page</Link></li>
                <li><Link href = "/">Back to Home</Link></li>
            </ul>
            </details>
        </div>
    );
};

