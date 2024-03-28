import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "@/layouts/AppLayaout"
 import DashboardView from "@/views/DashboardView";
import CreateProjectView from "@/views/projects/CreateProjectView";


export default function Router () {
    return (
        <BrowserRouter>
            <Routes>
                 <Route element={<AppLayout/>}>
                <Route path="/" element={<DashboardView/>} index/>
                <Route path="/project/create" element={<CreateProjectView/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}