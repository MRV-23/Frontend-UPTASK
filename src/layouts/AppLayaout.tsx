
import { Outlet } from "react-router-dom"
import Logo from "../components/Logo"


import NavMenu from "@/components/navMenu"


export default function AppLayout() {
  return (
        <>
            <header className="bg-gray-800 py-5  ">
                <div  className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center " >
                    <div className="w-64">
                        <Logo/>
                    </div>
                    <div className="mx-5">
                        <NavMenu/>
                    </div>
                    
                </div>
            </header>
 

             <section className="max-w-screen-2xl mx-auto mt-10 p-5 ">
                <Outlet/>
            </section>
            <footer className="py-5 " >
                <p className="text-center">
                    Todos los derechos reservados MRV {new Date().getFullYear()}

                </p>
            </footer>
             
        </>
  )
}
