import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import Image from "next/legacy/image";
import profilbilde from '../public/profilbilde.png';
import figma1 from '../public/figma1.PNG';
import figma2 from '../public/figma2.png';
import figma3 from '../public/figma3.png';
import figma4 from '../public/figma4.png';
import figma5 from '../public/figma5.png';
import figma6 from '../public/figma6.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';

import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";



export default function Home() {
  const [darkMode, setDarkmode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Joakim Tin CV</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section>
          <nav className="py-10 mb-12 flex justify-between bg-teal-600 w-full px-10 rounded-xl left-0">
            <h1 className="text-xl font-burtons">Joakim Tin Seung Yuen</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkmode(!darkMode)} className="cursor-pointer text-2xl"/></li>
              <li><a className ="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"href="https://drive.google.com/file/d/1ECEXd1g7BXqZEgJ39jkQthRBxJBiR4PF/view" target="_blank" rel="noreferrer" >Min CV</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Joakim Tin Seung Yuen</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Utvikler og Designer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">Interaksjonsdesigner og webutvikler basert i Oslo, Norge med ønske om å forbedre brukeropplevelser på nettsider og mobilapper. Målet mitt er å kunne å lage intuitive og brukervennlige design som gjør det mulig for folk å nå sine mål effektivt gjennom å forstå deres behov og krav.
</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
               {<button onClick={(e) => {
              e.preventDefault();window.location.href='https://www.linkedin.com/in/joakim-tin-seung-yuen-7a6310232/';}}><AiFillLinkedin/></button> }
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden">
            <Image src={profilbilde} layout="fill" objectFit="cover" className="object-top" alt="" />
          </div>
        </section>

        

        <section>
          <div className="text-center">
            <h3 className="text-3xl py-10 dark:text-white">Mine prosjekter</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">Prosjekter utviklet i Figma</p>
            <br></br>
          </div>

          <div className="text-center lg:grid grid-cols-4 gap-10 mx-auto relative">
             <div  className="text-center shadow-lg p-10 rounded-xl my-10 border-4 border-teal-600 relative justify-between">
              <Image src={figma1} width={200} height={200} className="rounded-xl border-teal-600" alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-clip flex-1 dark:text-white">Prototype for Fresh Fitness</h3>
              <p className="py-2 dark:text-white">Ny og forbedret ide om økt bruk av mobilapplikasjon under covid perioden</p>
              <a className ="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 left-0 w-full"href="https://www.figma.com/proto/sOAV7ntKEo5PmihQJsJSO1/Fresh-Fitness-v2?page-id=0%3A1&node-id=6-3&scaling=scale-down&starting-point-node-id=6%3A3" target="_blank" rel="noreferrer">Vis</a>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 border-4 border-teal-600 relative justify-between">
              <Image src={figma2} width={200} height={200} className="rounded-xl border-teal-600" alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-clip flex-1 dark:text-white">Trådskisser for Working Class Tattoo Shop</h3>
              <p className="py-2 dark:text-white">Trådskisser for et tattoveringstudio i henhold til bachelor oppgave</p>
              <a className ="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 left-0 w-full"href="https://www.figma.com/proto/r6cpfltI15RBeYMppgL0h3/WCTS-WIREFRAMES?page-id=%200%3A1&node-id=13-65&starting-point-node-id=13%3A65&scaling=min-zoom" target="_blank" rel="noreferrer">Vis</a>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 border-4 border-teal-600 relative justify-between">
              <Image src={figma3} width={200} height={200} className="rounded-xl border-teal-600" alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-clip flex-1 dark:text-white">Prototype for Bright Solutions</h3>
              <p className="py-2 dark:text-white">Klikkbar prototype for reparasjon og lamper, brukt av ansatte i flyktningsleir som del av smidig prosjekt</p>
              <a className ="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 left-0 w-full"href="https://www.figma.com/proto/r6cpfltI15RBeYMppgL0h3/WCTS-WIREFRAMES?page-id=%200%3A1&node-id=13-65&starting-point-node-id=13%3A65&scaling=min-zoom" target="_blank" rel="noreferrer">Vis</a>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 border-4 border-teal-600 relative justify-between">
              <Image src={figma4} width={200} height={200} className="rounded-xl border-teal-600" alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-clip overflow-hidden flex-1 dark:text-white">Trådskisser for webløsning om Vertikalt jordbruk</h3>
              <p className="py-2 dark:text-white">Interaksjonsdesign oppgave om tema bærekraft</p>
              <a className ="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 left-0 w-full"href="https://www.figma.com/proto/r6cpfltI15RBeYMppgL0h3/WCTS-WIREFRAMES?page-id=%200%3A1&node-id=13-65&starting-point-node-id=13%3A65&scaling=min-zoom" target="_blank" rel="noreferrer">Vis</a>
            </div>

              

             <div className="text-center shadow-lg p-10 rounded-xl my-10 border-4 border-teal-600 relative justify-between">
              <Image src={figma5} width={200} height={200} className="rounded-xl border-teal-600" alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-clip overflow-hidden flex-1 dark:text-white">Portefølje laget i Figma</h3>
              <p className="py-2 dark:text-white">Variant av portefølje laget i Figma</p>
              <a className ="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 left-0 w-full"href="https://www.figma.com/proto/azx8pqCaeHKX8YIaAdenSg/Figma-portef%C3%B8lje?page-id=0%3A1&node-id=25-10165&starting-point-node-id=25%3A10165" target="_blank" rel="noreferrer">Vis</a>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 border-4 border-teal-600 relative justify-between">
              <Image src={figma6} width={200} height={200} className="rounded-xl border-teal-600" alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-clip overflow-hidden flex-1 dark:text-white">Prototype for Salesforce</h3>
              <p className="py-2 dark:text-white">Delvis visuelt eksempel for et nytt brukersystem i salesforce *i prosess*</p>
              <a className ="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 left-0 w-full"href="https://www.figma.com/proto/N9kpP3BrxOaArgX9yVyytT/Prototype-ubes%C3%B8rgelig-salesforce-lightning?page-id=0%3A1&node-id=44-929&viewport=-740%2C231%2C0.97&scaling=scale-down&starting-point-node-id=1%3A1070" target="_blank" rel="noreferrer">Vis</a>
            </div>

          
            </div>
            
        </section>

        <section>
          
        </section>

        <section>
          <div>
            <br></br>
            <br></br>
            <h3 className="text-3xl py-1 text-center dark:text-white">Portofolio</h3>
            <p className="text-center dark:text-white">Annet design / Photoshop</p>
          </div>

          <br></br>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} alt="" className="rounded-lg object-cover" width={"150%"} height={"90%"} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} alt="" className="rounded-lg object-cover" width={"150%"} height={"90%"} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} alt="" className="rounded-lg object-fill" width={50} height={25} layout="responsive"/>
            </div>
          
          </div>

        </section>

      </main>
    </div>
  );
}

