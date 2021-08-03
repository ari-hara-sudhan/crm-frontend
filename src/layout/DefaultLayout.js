import React from 'react'
import { Footer } from './partials/Footer.comp'
import "../App.css"
import {Header } from './partials/Header.comp'

export const DefaultLayout = ({children}) => {
    return (
        <div className="default__layout ">
           <header className="mb-2">
               <Header/>
           </header>
            <main>
            {children}
            </main>
         <footer>
         <Footer/>
         </footer>
           
            
        </div>
    )
}
