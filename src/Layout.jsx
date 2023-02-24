import Header from "./components/header/Header" 
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <div className="pt-24">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Layout