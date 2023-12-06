import Link from 'next/link';
import Head from 'next/head'

export default function ChatbotPage() {
    return (
    <>
        <Head>
        <title>ChatbotPage</title>
        </Head>
        <div className ="flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                <span className="text-[hsl(280,100%,70%)]">C.O.L.B. Chatbot</span>
            </h1>
        </div>
        <div className = "box-border h-128 w-64 border-4">

        </div>
        <h2>
            <Link href="main-page">To Home</Link>
        </h2>
    </>
    )
  }