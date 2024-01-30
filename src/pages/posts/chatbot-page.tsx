import Link from 'next/link';
import Head from 'next/head'

import MenuIcon from '/src/images/hamburger-menu-32A.png';
import Headbar_Items from '~/functions/headbar_button';
import Article_Popup from '~/functions/Article-popup'


export default function ChatbotPage() {
    
    return (
    <>
            <Head>
            <title>ChatbotPage</title>
            </Head>
            <div className = "headbar relative">
                <Headbar_Items/>
            </div>
            
            <div className ="flex flex-col items-center justify-center gap-12 px-4 py-8 ">
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                    <span className="text-[hsl(280,100%,70%)]">C.O.L.B. Chatbot</span>
                </h1>
            </div>

            <h2 className = "flex flex-col items-center justify-center">
                    <Link href="main-page">To Home</Link>     
            </h2>


            {/*Chatbot messaging container*/}
            <div className = "flex flex-row items-center justify-center">
                <div className = "container min-w-70 max-w-2xl min-h-80 w-85 h-128">
                    <div className = "container min-w-70 max-w-2xl min-h-80 w-85 h-4/5 box-border border-4 bg-orange">
                        <h2 className = "flex flex-col items-center justify-center font-message">
                            Hello
                        </h2>
                    </div>
                    <div className = "container min-w-70 max-w-2xl min-h-80 w-85 h-1/5 box-border border-4 bg-purple py-4" >
                        <h2 className = "flex flex-col items-center justify-center font-message">
                            Enter Message
                        </h2>
                    </div>
                </div>
                {/* Article Pushout UI */}
                {/* <Article_Popup/> */}
                <div className = "container min-w-70 max-w-2xl min-h-80 w-85 h-128 box-border border-4 bg-gradient-to-r from-[#cffafe] via-[#22d3ee] to-[#cffafe]">

                </div>
            </div> 
    </>
    )
  }