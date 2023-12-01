import Link from 'next/link';

export default function MainPage() {
    return (
    <>
        <h1>Main-page</h1>
        <h2>
            <Link href="/">Back to home</Link>
            <Link href="/chatbot-page.js">Talk with C.O.L.B.</Link>
        </h2>
    </>
    )
  }