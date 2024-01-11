export default function Headbar_Items () {
    return (
        <details className = "dropdown absolute top-0">
        <summary className = "m-1 btn"></summary>
        <ul className = "p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li><a>Ooga</a></li>
            <li><a>Item 2</a></li>
        </ul>
        </details>
    );
};

