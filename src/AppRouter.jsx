import { StrictMode } from 'react'
import {BrowserRouter, Routes, Route} from "react-router";
import {UserDashboard} from "./pages/UserDashboard.jsx";
import {App} from './App.jsx'

export function AppRouter() {
    return <BrowserRouter>
        <StrictMode>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/user-dashboard" element={<UserDashboard/>}/>
            </Routes>
        </StrictMode>
    </BrowserRouter>;
}
