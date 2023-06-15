import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import NavHeader from "./NavHeader"

export default function Layout() {
    return (
        <div>
            <NavHeader />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}